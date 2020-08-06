import Loadable from 'react-loadable';
import { asyncConnect } from 'redux-connect';

import common from 'app-v2/common';
import { parse, stringify } from "query-string";
import { useQuery } from 'containers/Listing/parseFilters';

const WebViewAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'webview' */ './WebView'),
  loading: () => null
});

const parseFilters = (query, filterOptions = []) => {
  const filters = Object.keys(query || {})
    .filter(key => filterOptions.includes(key))
    .reduce((obj, key) => {
      obj[key] = query[key];
      return obj;
    }, {});

  return parse(stringify(filters), { arrayFormat: 'bracket' });
};


const PAGE_TYPE = 'qdp';
/**
 * Every dynamic page should set dynamicLayoutInfo in redux store. Following are use cases:
 * - Inject script with component in HTML.js to include js dynamically.
 *
 * @type {*[]}
 */
const asyncItems = [
  {
    key: 'dynamicLayoutInfo',
    promise: ({
                store: { dispatch }, location: { search }
              }) => {
      const query = useQuery(search);
      const filterOptions = ['components[]'];
      const parsedComponets = parseFilters(query, filterOptions);
      const components = parsedComponets['components'];

      return new Promise((resolve, reject) => {
        Promise.all(
          components.reduce((acc, component) => {
            acc.push(common.loadComponentAsync(component));
            return acc;
          }, []))
          .then((components) => {
            const actionParams = { ...query };

            const actions = components.reduce((acc, component) => {
              if (component.webviewActions && Array.isArray(component.webviewActions)) {
                component.webviewActions.forEach((action) => {
                  if (acc.indexOf(action) === -1) {
                    acc.push(action);
                  }
                });
              }
              return acc;
            }, []);

            const promises = actions.map(action => dispatch(action(actionParams)));
            return Promise.all(promises);
          })
          .then(() => {
            return resolve();
          });
      });
    }
  }
];

const mapStateToProps = (state) => {
  const currentQuoteId = state.quote.actions.currentQuoteId,
    quotes = state.quote.list.data && state.quote.list.data.quotes,
    currentQuote = quotes[currentQuoteId],
    requestedTripId = parseInt(state.quote.actions.requestedTripId, 10) || 0;

  return {
    layout: state.layout.data,
    quotes: quotes,
    currentQuote: currentQuote,
    currentQuoteId: currentQuoteId,
    tripId: requestedTripId,
  };
};

export default asyncConnect(asyncItems, mapStateToProps, null)(WebViewAsync);
