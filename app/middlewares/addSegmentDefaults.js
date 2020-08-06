/* eslint-disable no-param-reassign */
import { PLATFORM } from 'actions/segmentEvents';
import {
  isTextValid,
  getDefaultPageName,
  PAGE_UUID_COOKIE_KEY,
  SESSION_UUID_COOKIE_KEY,
  LANDING_UUID_COOKIE_KEY,
  REFERER_UUID_KEY,
  getCookie,
  getFullPageName,
  getPageName
} from 'helpers/FormDataFormatter.js';
import { getQueryVariable } from "../helpers/FormDataFormatter";

const DEFAULT_NUMBER_VALUE = 0;
const DEFAULT_USER_ROLE = 'NOT_SET';
const USER_ID_COOKIE_KEY = 'u_id';
const USER_ROLE_COOKIE_KEY = 'u_role';
const DEFAULT_USER_ID = 1;

const isSegmentEvent = action => (
  (
    action.meta
    && action.meta.analytics
    && action.meta.analytics.eventPayload
    && action.meta.analytics.eventPayload.properties
  )
);

const getCommonValues = (window) => {
  const commonSegmentValues = {
    page_fullname: getFullPageName(window),
    page_name: getPageName(),
    page_uuid: getCookie(PAGE_UUID_COOKIE_KEY),
    session_uuid: getCookie(SESSION_UUID_COOKIE_KEY),
    landing_page_uuid: getCookie(LANDING_UUID_COOKIE_KEY),
    referer_page_uuid: getCookie(REFERER_UUID_KEY),
    user_id: getCookie(USER_ID_COOKIE_KEY) || DEFAULT_USER_ID,
    user_role: getCookie(USER_ROLE_COOKIE_KEY) || DEFAULT_USER_ROLE
  };
  return commonSegmentValues;
};

const fixNaNValue = (stringValue) => {
  if (isNaN(parseFloat(stringValue)) || isNaN(parseInt(stringValue, 10))) {
    return DEFAULT_NUMBER_VALUE;
  }
  if (parseFloat(stringValue) !== parseInt(stringValue, 10)) {
    return parseFloat(stringValue);
  }
  return parseInt(stringValue, 10);
};

const validateAction = (action) => {
  const segmentAction = action.meta.analytics.eventPayload.properties;
  const pageNames = ['name', 'page_name', 'page_fullname'];
  const defaultPageName = getDefaultPageName();
  let platform = null;
  if(typeof window !== 'undefined' && window.location.pathname === '/wvchatbot') {
    platform = getQueryVariable('platform');
  }
  Object.keys(segmentAction).forEach((key) => {
    /* Validates all id -> Should be Integer */
    if (key.endsWith('_id')) {
      segmentAction[key] = fixNaNValue(segmentAction[key]);
    }
    /* Validates all name, pagename and page fullname -> Set Default Value */
    if (pageNames.indexOf(key) >= 0) {
      if (!isTextValid(segmentAction[key])) {
        segmentAction[key] = defaultPageName;
      }
    }
    /* Validates value field. It should be float */
    if (key === 'value') {
      segmentAction[key] = fixNaNValue(segmentAction[key]);
    }
  });
  action.meta.analytics.eventPayload.properties = segmentAction;
  action.meta.analytics.eventPayload.properties.platform = platform ? platform : PLATFORM;
  return action;
};

const addCommonPropertiesToSegmentAction = (action, window) => {
  let propertiesHash = action.meta.analytics.eventPayload.properties;
  const commonProps = getCommonValues(window);
  propertiesHash = { ...propertiesHash, ...commonProps };
  action.meta.analytics.eventPayload.properties = propertiesHash;
  action.meta.analytics.eventPayload.name = getPageName();
  return action;
};

const addSegmentDefaults = () => next => (action) => {
  if (isSegmentEvent(action)) {
    action = addCommonPropertiesToSegmentAction(action, window);
    action = validateAction(action);
  }
  next(action);
};

export default addSegmentDefaults;
