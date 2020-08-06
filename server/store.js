import { createStore as _createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { EVENT_TYPES } from 'actions/segmentEvents';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import addSegmentDefaults from 'app/middlewares/addSegmentDefaults';
import reducers from 'app/reducers/index';
import {
  getSessionUuid,
  getPageUuid,
  getLandingPageUuid,
  getRefererUuid,
  afterLoadEvents,
  getPageName,
  isTextValid,
  getCookie,
  getFullPageName,
  setCookie,
  getPageUrl,
  getCounter,
  TRIP_ID_COOKIE_KEY,
  getPagePath
} from 'app/helpers/FormDataFormatter';
import { identifyPayload, aliasPayload, getAnonymousId, connectToRtmsProfling, trackPagePayload } from 'app/actions/segmentEvents';
// import { pushToInflux } from 'app/helpers/influx';
import { pushBrowserInfoToNewRelic, getConnectionDetails } from 'helpers/utils';
// import { createLogger } from 'redux-logger';
import { clientMiddleware } from 'app/helpers/ApiClient';
import { INITIAL_STATE } from 'helpers/reducer';

const pagePayload = (uuids = {}) => {
  const connectionDetails = getConnectionDetails();
  const action = {
    eventType: EVENT_TYPES.page,
    eventPayload: {
      name: getPageName(),
      properties: {
        platform: 'public_mweb',
        page_uuid: uuids.page_id,
        session_uuid: uuids.session_id,
        landing_page_uuid: uuids.landing_id,
        referer_page_uuid: uuids.referer_id,
        page_fullname: getFullPageName(),
        name: getPageName(),
        page_name: getPageName(),
        url: getPageUrl(),
        ajs_user_id: getAnonymousId(),
        sequence_number: parseInt(getCounter(), 10) || 1,
        trip_id: parseInt(getCookie(TRIP_ID_COOKIE_KEY), 10) || 0,
        connection_type: connectionDetails ? connectionDetails.effectiveType : '',
        connection_speed: connectionDetails ? connectionDetails.downlink : ''
      },
    }
  };
  return action;
};

let initialReducers = reducers;
let store;

export const replaceReducer = newReducers => {
  const reducerKeys = Object.keys(newReducers);
  if (newReducers instanceof Object && reducerKeys.length > 0) {
    const key = reducerKeys[0];
    // if already exist return
    // find a better solution
    if (initialReducers[key] && !initialReducers[key].emptyReducer) {
      return;
    }
    initialReducers = { ...initialReducers, ...newReducers, reduxAsyncConnect };
    store.replaceReducer(combineReducers(initialReducers));
  }
};

const sendPageViewInGA = () => {
  if (typeof window !== 'undefined') {
    if (window.gtag && typeof window.gtag === 'function') {
      console.log('calling pageview event----------');
      window.gtag('config', 'UA-15374527-4',
        {
          'page_title': `${getPageName()}`,
          'page_location': `${getPageUrl()}`,
          'page_path': `${getPagePath()}`
        }
      );
    }
  }
};

export const callSegment = () => {
  if (typeof window !== 'undefined') {
    sendPageViewInGA();
  }
  document && document.dispatchEvent(new CustomEvent('routeChangeDetect'));
  afterLoadEvents();
  pushBrowserInfoToNewRelic();
  const pageUuid = getPageUuid();
  const sessionUuid = getSessionUuid();
  const landingUuid = getLandingPageUuid();
  const referUuid = getRefererUuid();
  const uid = getCookie('u_id');
  connectToRtmsProfling();
  window.analytics && window.analytics.track('Prod Page Call', trackPagePayload({
    page_id: pageUuid,
    session_id: sessionUuid,
    landing_id: landingUuid,
    referer_id: referUuid
  }));
  window.analyticsTT && window.analyticsTT.track('Prod Page Call', trackPagePayload({
    page_id: pageUuid,
    session_id: sessionUuid,
    landing_id: landingUuid,
    referer_id: referUuid
  }));
  if (getCookie('fire_alias') === 'true') {
    aliasPayload({
      user_id: uid
    });
    setCookie('fire_alias', false);
  }
  const pagePayloadData = pagePayload({
    page_id: pageUuid,
    session_id: sessionUuid,
    landing_id: landingUuid,
    referer_id: referUuid
  });
  window.analytics && window.analytics.page(getPageName(), pagePayloadData.eventPayload.properties);
  window.analyticsTT && window.analyticsTT.page(getPageName(), pagePayloadData.eventPayload.properties);
  if (isTextValid(uid)) {
    identifyPayload();
  }
};

export default function createStore(history, client, data) {
  // const logger = createLogger({
  //   level: {
  //     prevState: false,
  //     nextState: false
  //   }
  // });
  const handleLocationChange = store => next => action => {
    // const result = next(action);
    // if (action.type === '@@router/LOCATION_CHANGE') {
    //   document && document.dispatchEvent(new CustomEvent('routeChangeDetect'));
    //   afterLoadEvents();
    //   pushBrowserInfoToNewRelic();
    //   const pageUuid = getPageUuid();
    //   const sessionUuid = getSessionUuid();
    //   const landingUuid = getLandingPageUuid();
    //   const referUuid = getRefererUuid();
    //   const uid = getCookie('u_id');
    //   connectToRtmsProfling();
    //   window.analytics && window.analytics.track('Prod Page Call', trackPagePayload({
    //     page_id: pageUuid,
    //     session_id: sessionUuid,
    //     landing_id: landingUuid,
    //     referer_id: referUuid
    //   }));
    //   if (getCookie('fire_alias') === 'true') {
    //     aliasPayload({
    //       user_id: uid
    //     });
    //     setCookie('fire_alias', false);
    //   }
    //   const pagePayloadData = pagePayload({
    //     page_id: pageUuid,
    //     session_id: sessionUuid,
    //     landing_id: landingUuid,
    //     referer_id: referUuid
    //   });
    //   window.analytics.page(getPageName(), pagePayloadData.eventPayload.properties);
    //   if (isTextValid(uid)) {
    //     identifyPayload();
    //   }
    // }
    // return result;
  };

  const middleware = [
    clientMiddleware(client),
    routerMiddleware(history),
    thunk,
    // logger
  ];

  let finalCreateStore;

  if (__CLIENT__) {
    middleware.push(addSegmentDefaults);
    // middleware.push(handleLocationChange);
  }

  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    finalCreateStore = compose(
              applyMiddleware(...middleware),
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  if (data) {
    addMissingReducers(initialReducers, data);
  }

  store = finalCreateStore(combineReducers(initialReducers), data);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('app/reducers', () => {
      initialReducers = {
        ...initialReducers,
        ...require('app/reducers/index')
      };

      store.replaceReducer(initialReducers);
    });
  }

  return store;
}

const addMissingReducers = (initialReducers, data) => {
  const dataKeys = Object.keys(data);
  dataKeys.forEach(key => {
    if (!initialReducers[key]) {
      initialReducers[key] = (state = INITIAL_STATE) => state;
      initialReducers[key].emptyReducer = true;
    }
  });
};
