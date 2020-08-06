import  './tracer'; // must come before importing any instrumented module.

import Express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import path from 'path';
import superagent from 'superagent';
// import { match } from 'react-router';
import cookiesMiddleware from 'universal-cookie-express';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import { createMemoryHistory } from 'history';
import { StaticRouter, matchPath } from 'react-router-dom';

export const history = createMemoryHistory();

// import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import http from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import createStore from './store';
import createAmpStore from '../amp/store';
import routes from './routes';
import ampRoutes from '../amp/routes';
import { formatURL } from '../app/utils/parsers';
import { ApiClient } from 'app/helpers/ApiClient';
import { syncHistoryWithStore } from 'react-router-redux';
import Html from 'app/helpers/Html';
import AmpHtml from '../amp/helpers/Html';
import appConfig from '../config';
import logger from 'app/utils/logger';
import url from 'url';
import { redirectionEnabled } from 'app/helpers/urlHelpers';
import Loadable from 'react-loadable';
import checkListingInvalidUrlsAndRedirect from '../middlewares/listingUrls';
import checkTourismInvalidUrlsAndRedirect from '../middlewares/tourismUrls';
import SentryTransport from '../app/middlewares/sentry-transport';
import { TEMPORARY_REDIRECT } from 'app/constants/httpStatusCodes';
import paesabazaarLoan from './experiments/emi/paisaBazaarLoanController';
import { getPageNameFromUrl } from 'helpers/FormDataFormatter';
import { BROWSING_PAGES } from 'constants/Pages/pageName';

const winston = require('winston');
const expressWinston = require('express-winston');

const renderToString = (component) => {
  const renderedComponent = {};
  try {
    renderedComponent.html = ReactDOM.renderToString(component);
    return renderedComponent;
  } catch (err) {
    logger.error(`SSR error: ${err} \n stack trace is ${err.stack}`);
    if (err.message === '404') {
      renderedComponent.statusCode = 404;
    }
    return renderedComponent;
  }
};

const renderToStaticMarkup = (component) => {
  const renderedComponent = {};
  try {
    renderedComponent.html = ReactDOM.renderToStaticMarkup(component);
    return renderedComponent;
  } catch (err) {
    logger.error(`SSR error: ${err} \n stack trace is ${err.stack}`);
    if (err.message === '404') {
      renderedComponent.statusCode = 404;
    }
    return renderedComponent;
  }
};

const loadCanonicals = async () => {
  const canonicalsRestURL = `${appConfig.assets.s3}/public-product/destinationCanonicals.json`;
  return await superagent.get(canonicalsRestURL)
    .set('X-CLIENT-API-TOKEN', appConfig.api.key);
};

module.exports = async (chunks) => {
  const response = await loadCanonicals();
  const canonicalsHash = response.body.data;

  const app = new Express();

  app.use(cookieParser());
  // support parsing of application/json type post data
  app.use(bodyParser.json());
  app.use(cookiesMiddleware());

  app.get('/sw.js', (req, res) => {
    if (__DEVELOPMENT__) {
      http.get('http://localhost:4001/static/build/sw.js', (r) => {
        res.set({
          'Content-Type': 'text/javascript',
          'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate'
        });
        r.setEncoding('utf8');
        r.pipe(res);
      }).on('error', (e) => {
        console.error(`Error in sending sw.js in dev mode : ${e.message}`);
      });
    } else {
      res.setHeader('Cache-Control', 'max-age=0, no-cache, no-store, must-revalidate');
      res.sendFile('sw.js', { root: path.join(__ROOT_DIRECTORY__, 'assets', 'build') }); // eslint-disable-line no-undef
    }
  });


  app.get('/systems/uptime/browsing/fe-ms', (req, res) => {
    res.set({
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=0, no-cache'
    });
    res.send({ machine: `ms-${process.env.HOSTNAME || 'browsingfe'}`});
  });

  paesabazaarLoan(app);

  app.use('/mobile_assets',
    Express.static(path.join(__ROOT_DIRECTORY__, 'assets'), { maxage: '1y' }), (req, res, next) => { // eslint-disable-line no-undef
      fs.exists(req.baseUrl + req.url, (exists) => {
        if (!exists) {
          res.setHeader('Cache-Control', 'no-cache');
          res.status(404).send(`Asset not found! ${req.baseUrl + req.url}`);
        } else {
          next();
        }
      });
    }); // eslint-disable-line no-undef

  app.use((req, res, next) => {
    if (redirectionEnabled(req.path)) {
      const parsedUrl = url.parse(req.originalUrl);
      parsedUrl.pathname = parsedUrl.pathname.toLowerCase();
      res.redirect(301, url.format(parsedUrl));
    } else {
      next();
    }
  });

  const server = new http.Server(app);

  app.use(expressWinston.logger({
    transports: [
      new SentryTransport(),
      new winston.transports.File({
        filename: 'access.log'
      })
    ],
    meta: true,
    msg: '{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
    expressFormat: true,
    colorize: false,
  }));

  app.use(checkTourismInvalidUrlsAndRedirect(canonicalsHash));
  app.use(checkListingInvalidUrlsAndRedirect(canonicalsHash));

  app.use((req, res) => {
    const isBrowsingModule = BROWSING_PAGES.includes(getPageNameFromUrl(req.originalUrl));
    const pprodCookie = req.cookies.pp;
    const remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const client = new ApiClient(req, res);
    // const ampMemoryHistory = createHistory(req.originalUrl);
    const ampStore = createAmpStore(history, client);
    // const ampHistory = syncHistoryWithStore(history, ampStore);
    const reqUrl = req.originalUrl || req.url;
    const location = url.parse(reqUrl);
    const context = {};
    const getComponent = (store, key, routes, location) => (
      <Provider store={store} key={key}>
        <StaticRouter context={context} location={location} history={history}>
          <CookiesProvider cookies={req.universalCookies}>
            <ReduxAsyncConnect routes={routes} />
          </CookiesProvider>
        </StaticRouter>
      </Provider>
    );
    if(req.originalUrl === '/ww.js.map') {
      return res.status(200);
    }
    else if (req.path.endsWith('/amp')) {
      loadOnServer({ routes: ampRoutes, store: ampStore, location, helpers: { client } }).then(() => {
        const component = getComponent(ampStore, 'ampProvider', ampRoutes, location);
        const renderedComponent = renderToStaticMarkup(
          <AmpHtml
            component={component}
            assetPath={path.join(__ROOT_DIRECTORY__, 'assets', 'build')}
            url={req.url}
            store={ampStore}
          />
        );

        if (renderedComponent.statusCode === 404) {
          res.redirect(TEMPORARY_REDIRECT, appConfig.errorPage);
          return;
        }
        else if (!renderedComponent.html) {
          res.status(500).send('Server error occured please refresh the page');
          return;
        }

        if (context.url) {
          // Somewhere a `<Redirect>` was rendered
          res.redirect(302, context.url);
          return;
        }

        if (req.url.includes(appConfig.errorPage)) {
          res.status(404);
        } else {
          res.status(200);
        }

        // Fetch cookies recieved during the server API requests
        // and pass it to the client
        // eslint-disable-next-line
        for (const cookie of client.cookies) {
          res.set('Set-Cookie', cookie);
        }
        res.send(`<!doctype html>\n${renderedComponent.html.replace(/customAmpEvent/g,'on')}`);

        // const ampOptimizer = AmpOptimizer.create();
        // ampOptimizer.transformHtml(renderedComponent.html).then((optimizedHtml) => {
        //   res.send(`<!doctype html>\n${optimizedHtml}`);
        // });
      });
    }
    else {
      const pprodCookie = req.cookies.pp;
      if (pprodCookie === undefined || pprodCookie !== 'v') {
        res.cookie('pp', 'v');
      }
      const hydrateOnClient = () => {
        console.log(`${remoteAddress} :: Rendering server :: Hydrating on client`);
        res.send(
          `<!doctype html>\n${renderToString(<Html assets={chunks} />)}`
        );
      };

      if (__DISABLE_SSR__) {
        logger.warn(`${remoteAddress} :: Rendering server :: DisabledSSR :: Server Side Rendering disabled`);
        hydrateOnClient();
        return;
      }

      if (req.path.match('(tour|honeymoon|family)-packages/sikkim-gangtok-darjeeling') || req.path.match('(tour|honeymoon|family)-packages/sikkim%20-%20gangtok%20-%20darjeeling')) {
        res.redirect(301, req.originalUrl.replace('sikkim-gangtok-darjeeling', 'sikkim'));
      }

      const client = new ApiClient(req, res);
      // const memoryHistory = createHistory(req.originalUrl);
      const store = createStore(history, client);
      // const history = syncHistoryWithStore(history, store);
      const reqUrl = req.originalUrl || req.url;
      const location = url.parse(reqUrl);
      const isWebview = req.url.includes('webview') || req.url.includes('wvchatbot');
      const context = {};
      loadOnServer({ store, location , routes, helpers: { client } }).then(() => {
        const component = (
          <Provider store={store} key="provider">
            <StaticRouter context={context} location={location} history={history}>
              <CookiesProvider cookies={req.universalCookies}>
                <ReduxAsyncConnect routes={routes} he />
              </CookiesProvider>
            </StaticRouter>
          </Provider>
        );

        const renderedComponent = renderToString(
          <Html
            headers={isWebview ? req.headers : {}}
            query={req.query}
            assets={chunks}
            component={component}
            store={store}
            assetPath={path.join(__ROOT_DIRECTORY__, 'assets', 'build')}
            isWebview={isWebview}
            isBrowsingModule={isBrowsingModule}
            url={req.url}
          />
        );


        if (renderedComponent.statusCode === 404) {
          res.redirect(TEMPORARY_REDIRECT, appConfig.errorPage);
          return;
        } else if (!renderedComponent.html) {
          res.status(500).send('Server error occured please refresh the page');
          return;
        }

        if (context.url) {
          // Somewhere a `<Redirect>` was rendered
          res.redirect(302, context.url);
          return;
        }

        if (req.url.includes(appConfig.errorPage)) {
          res.status(404);
        } else {
          res.status(200);
        }

        // Fetch cookies recieved during the server API requests
        // and pass it to the client
        // eslint-disable-next-line
        for (const cookie of client.cookies) {
          res.set('Set-Cookie', cookie);
        }
        res.send(`<!doctype html>\n${renderedComponent.html}`);
      });

    }
  });
  app.use(expressWinston.errorLogger({
    transports: [
      new SentryTransport(),
      new winston.transports.File({
        filename: 'error.log'
      })
    ]
  }));

  Loadable.preloadAll().then(() => {
    server.listen(appConfig.server.port, (error) => {
      if (error) {
        console.log(`Failed to start rendering server :: ${error}`);
        throw error;
      }

      console.log(`Rendering server listening on http://${appConfig.server.host}:${appConfig.server.port}`);
    });
  });
};
