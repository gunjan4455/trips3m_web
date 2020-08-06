/* eslint-disable */
import React from 'react';
import PropTypes  from 'prop-types';
import ReactDOM from 'react-dom/server';
import { renderStaticOptimized } from 'glamor/server';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import { newRelicCode, segmentScript, semLeadConversion, sentry, gtmScript, vwoScript, biteDataScript } from './externalScripts';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import moduleStats from '../../assets/build/react-loadable.json';
import { extractIconPath } from './utils';
import syncRequest from 'sync-request';
const fs = require('fs');
import config from 'appConfig';

const generateInlineStyle = (asyncBundles, assetPath) => {
  if (__PRODUCTION__) {
    return asyncBundles
      .filter(bundle => bundle.file.endsWith('.css'))
      .map(bundle => {
          let cssFileContent = fs.readFileSync(`${assetPath}/${bundle.file}`, 'utf8');
          return <style data-name={bundle.file} dangerouslySetInnerHTML={{ __html: cssFileContent }}
            key={bundle.file} data-href={`${__webpack_public_path__}${bundle.file}`} />
        }
      )
  }
  return asyncBundles
    .filter(bundle => bundle.file.endsWith('.css'))
    .map(bundle => {
        let path = `${__webpack_public_path__}${bundle.file}`;
        const res = syncRequest('GET', path);
        return <style data-name={bundle.file} dangerouslySetInnerHTML={{ __html: res.getBody('utf8') }}
          key={bundle.file} data-href={`${__webpack_public_path__}${bundle.file}`} />
      }
    );
};

// NOT USING GTM and SEMLEAD for now
const EXTERNAL_SCRIPTS = Object.freeze({
  VWO: 'vwo',
  SEGMENT: 'segment',
  NEWRELIC: 'newrelic',
  SENTRY: 'sentry',
  GTM: 'gtm',
  SEMLEAD: 'semlead'
});

const mktDisabledPlugins = ['vwo', 'newrelic', 'sentry'];

const Html = ({ assets, component, store, bundles, assetPath, headers, query, url, isBrowsingModule }) => {
  // If we get this query param from any webview then disable the inclusion of anyof the
  // mentioned scripts in the query param *disable_external_scripts* value
  // disable_external_scripts=vwo,segment,newrelic,sentry,gtm,semlead

  const disableExternalScripts = {};
  console.log('URL: ', url, url.split('/')[1]);

  const mktRegex = /\/mkt\/.*/i;
  console.log('mktRegex.test(url)', mktRegex.test(url))
  if(mktRegex.test(url)) {
    mktDisabledPlugins.forEach( q => {
      disableExternalScripts[q] = true;
    })
  }
  console.log('disableExternalScripts: ', disableExternalScripts);
  if (query.disable_external_scripts) {
    query.disable_external_scripts.split(',').forEach(q => {
      disableExternalScripts[q] = true;
    });
  }

  let content;
  let injectCss;
  let injectIds;
  let head;
  const asyncModules = [];
  const iconsPath = extractIconPath(assets);

  if (component) {
    const { html, css, ids } = renderStaticOptimized(
      () => ReactDOM.renderToString(
        <Loadable.Capture report={moduleName => {moduleName && asyncModules.push(moduleName)}}>
          {component}
        </Loadable.Capture>
      )
    );
    head = Helmet.renderStatic();
    content = html;
    injectCss = css;
    injectIds = ids;
  } else {
    content = '';
  }
  const asyncBundles = getBundles(moduleStats, asyncModules).reduce((acc, val) => {
    val && acc.push(val);
    return acc;
  }, []);

  // region windowOnLoad
  // language=JavaScript
  const windowOnLoad = `
    window.loadDeferImages = function () {
      var deferImages = [...document.querySelectorAll('img[data-defer-load="true"]')];
      deferImages.forEach(function (elm) {
        elm.src = elm.getAttribute('data-src');
        elm.setAttribute('data-defer-load', false)
      });
    };
    window.addEventListener('load', function() {
      ${gtmScript}
      ${semLeadConversion}
      window.loadDeferImages();
    });
  `;
  // endregion

  const loadCssAsStyle = (assetPath, file) => {
    let cssFileContent = '';
    if (__PRODUCTION__) {
      cssFileContent = fs.readFileSync(`${assetPath}/${file.substr(file.lastIndexOf('/') + 1)}`, 'utf8');
    } else {
      const res = syncRequest('GET', `${__webpack_public_path__}${file.substr(file.lastIndexOf('/') + 1)}`);
      cssFileContent = res.getBody('utf8');
    }
    return <style data-name={file.substr(file.lastIndexOf('/') + 1)} dangerouslySetInnerHTML={{__html: cssFileContent}} />
  };

  const getManifestJson = () => {
    if (__DEVELOPMENT__) {
      return <link rel="manifest" href={`${__webpack_public_path__}manifest.json`} />
    }

    return <link rel="manifest" href="/mobile_assets/build/manifest.json" />
  };
  const asyncJs = asyncBundles
    .filter(bundle => bundle.file.endsWith('.js'))
    .map(bundle => `loadJS('${__webpack_public_path__}${bundle.file}', 'application/javascript')`);
  const asyncJsSourceMap = asyncBundles
    .filter(bundle => bundle.file.endsWith('.map'))
    .map(bundle => `loadJS('${__webpack_public_path__}${bundle.file}', 'application/json')`);


  return (
    <html lang="en">
      <head>
        <link href={`${config.assets.cdn}`} rel="preconnect" />
        <link href={`${config.assets.cdn}`} rel="preconnect" />
        <link href="https://dev.visualwebsiteoptimizer.com" rel="preconnect" />
        <link href="https://cdn.ravenjs.com" rel="preconnect" />
        <link href="https://cdn.segment.com" rel="preconnect" />
        <link href="https://res.cloudinary.com" rel="preconnect" />
        <link href="https://api.segment.io" rel="preconnect" />
        <link href="https://www.google-analytics.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://maps.googleapis.com" rel="preconnect" />
        <link href="https://bam.nr-data.net" rel="preconnect" />
        <link href="https://js-agent.newrelic.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link href="//www.googleadservices.com" rel="preconnect" />
        <link href="https://st.getsitecontrol.com" rel="preconnect" />
        <link href="https://widgets.getsitecontrol.com" rel="preconnect" />
        <link href="https://app.getsitecontrol.com" rel="preconnect" />
        <link href="https://bid.g.doubleclick.net" rel="preconnect" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link href="https://connect.facebook.net" rel="preconnect" />
        <link rel="preload" as="script" href={assets.runtime.js} charSet="UTF-8"  />
        <link rel="preload" as="script" href={assets['vendor-react'].js} charSet="UTF-8"  />
        <link rel="preload" as="script" href={assets.main.js} charSet="UTF-8"  />
        <link rel="preload" as="script" href={assets["vendor-all"].js} />

        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        {
          loadCssAsStyle(assetPath, assets.main.css)
        }
        {
          generateInlineStyle(asyncBundles, assetPath)
        }
        {injectCss && <style dangerouslySetInnerHTML={{ __html: injectCss }} />}
        {
          getManifestJson()
        }
        {
          (__PRODUCTION__ && process.env.IS_NEWRELIC_ENABLED === 'true')
            ? !disableExternalScripts[EXTERNAL_SCRIPTS.NEWRELIC] &&
                <script charSet="UTF-8" dangerouslySetInnerHTML={{ __html: newRelicCode }} />
            : null
        }

        {
          !disableExternalScripts[EXTERNAL_SCRIPTS.VWO] &&  !isBrowsingModule &&
            <script charSet="UTF-8" dangerouslySetInnerHTML={{ __html: vwoScript }} />
        }
        {
          (__PRODUCTION__) ?
            [
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />,
              <script charSet="UTF-8"
                      dangerouslySetInnerHTML={{ __html: `
                        (adsbygoogle = window.adsbygoogle || []).push({
                          google_ad_client: "ca-pub-6434522445202199",
                          enable_page_level_ads: true
                        });`
                      }} />
            ] : null
        }
        {
          url.startsWith('/mkt/') ?
            <script charSet="utf-8"
              dangerouslySetInnerHTML={{
                __html: `
                  var ref = document.getElementsByTagName('script')[0];
                  var el = document.createElement('script');
                  el.id = 'sequential-form-script-tag';
                  el.src = 'https://js.traveltriangle.com/public-product/Sequential-form-post-lead-popup-1.0.js';
                  el.async = true;
                  el.onload = function () {
                    console.log('sequential script loaded');
                    document.dispatchEvent(new CustomEvent('sequential-form-loaded'));
                  };
                  ref.parentNode.insertBefore(el, ref);
              `}} /> : null
        }
      </head>
      <body>
        <noscript><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MKM4NX"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
        /></noscript>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} />

        <script charSet="UTF-8"
          dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }} />

        {
          Object.keys(headers) ?
            <script charSet="UTF-8"
              dangerouslySetInnerHTML={{ __html: `window.__wvchatbotHeaders=${serialize(headers)}`}} /> :
            null
        }

        {
          !disableExternalScripts[EXTERNAL_SCRIPTS.SEGMENT] &&
            <script charSet="UTF-8" dangerouslySetInnerHTML={{ __html: segmentScript }} />
        }
        <script charSet="UTF-8" dangerouslySetInnerHTML={{ __html: biteDataScript }} />
        {
          (__PRODUCTION__)
            ? !disableExternalScripts[EXTERNAL_SCRIPTS.SENTRY] &&
                <script dangerouslySetInnerHTML={{ __html: sentry }} charSet="UTF-8" />
            : null
        }

        <script charSet="UTF-8"
          dangerouslySetInnerHTML={{ __html: `
            window.addEventListener('load', function() {
              window.main();
            });`
          }} />

        <script src={assets.runtime.js} charSet="UTF-8" defer />
        <script src={assets['vendor-react'].js} charSet="UTF-8" defer />
        <script src={assets.main.js} charSet="UTF-8" defer />

        <script charSet="UTF-8"
                dangerouslySetInnerHTML={{ __html: `
                  var loadJS = function (src, type) {
                    var ref = document.getElementsByTagName("script")[0];
                    var script = document.createElement("script");
                    script.src = src;
                    script.async = true;
                    script.type = type;
                    script.crossorigin = "anonymous";
                    ref.parentNode.insertBefore(script, ref);
                    return script;
                  };

                  window.addEventListener('DOMContentLoaded', function () {
                    ${asyncJs.join(';')}
                    loadJS('${assets["vendor-all"].js}', 'application/javascript');
                  });

                  window.addEventListener('load', function () {
                    ${asyncJsSourceMap.join(';')}
                  });
                `
                }} />

        <script async defer charSet="UTF-8"
          dangerouslySetInnerHTML={{ __html: windowOnLoad }} />

        {
        /* For Exit Intent Offline Trip */
        }
        <script
          dangerouslySetInnerHTML={{ __html: `
            window.tt = {
              exitIntent: {
                redirect_url: 'https://traveltriangle.com',
                thankyou_msg: 'Your request is submitted successfully. We will call you back within 24hrs.'
              },
              chatbot: {
                redirect_url: 'https://traveltriangle.com',
                thankyou_msg: 'Your request is submitted successfully. We will call you back within 24hrs.'
              }
            }
            ` }}
          charSet="UTF-8"
        />

      </body>
    </html>
  );
};

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired,
  store: PropTypes.object.isRequired,
  assetPath: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
  isWebview: PropTypes.bool,
  url: PropTypes.string.isRequired,
};

export default Html;
