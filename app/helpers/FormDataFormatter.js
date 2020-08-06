import { PAGE_TYPE_AND_PATTERN } from '../constants/Pages/pageName';
import { setupUserInactivityTracking } from 'helpers/userInactivity';
import { isCampaignChange } from 'helpers/sessionCampaignTracking';

const sha1 = require('hash.js/lib/hash/sha/1');

const SESSION_UUID_COOKIE_KEY = 'session_uuid';
const PAGE_UUID_COOKIE_KEY = 'page_uuid';
const PREV_PAGE_UUID_COOKIE_KEY = 'prev_uuid';
const LANDING_UUID_COOKIE_KEY = 'landing_uuid';
const REFERER_UUID_KEY = 'referer_uuid';
const FUNNEL_UUID_KEY = 'funnel_uuid';
const SEPERATOR = ':::';
const TRAVELER_DEFAULT_PAGE = 'Traveler Page';
const ADMIN_DEFAULT_PAGE = 'Admin DB Page';
const AGENT_DEFAULT_PAGE = 'Agent DB Page';
const DEFAULT_URL = 'https://traveltriangle.com';
const DEFAULT_PATH = '/';
const FORM_VARIATION_COOKIE_KEY = 'form_variation_enabled_flag';
const COUNTER_SESSION_KEY = 'tt-ctr';
const TRIP_ID_COOKIE_KEY = 'trip_id';
const DEFAULT_NUMBER_VALUE = 0;
const SORT_BY_COOKIE = 'plp_sort_exp';

const getTripStageText = (tripStage) => {
  const tripStageValues = ['TRIP_STAGE_TRIP_NOT_SURE', 'TRIP_STAGE_DESTINATION_NOT_SURE',
    'TRIP_STAGE_DESTINATION_SURE', 'TRIP_STAGE_FLIGHT_BOOKED_NEED_REMAIN_PACKAGE'];
  return tripStageValues[tripStage - 1];
};

const convertDayToMinutes = (dayVal) => {
  const minuteVal = dayVal / (24 * 60);
  return minuteVal;
};

const isTextValid = (text) => {
  const invalidValues = [null, '', 'null'];
  for (let i = 0; i < invalidValues.length; i += 1) {
    if (text === invalidValues[i]) {
      return false;
    }
  }
  if (typeof text === 'undefined') {
    return false;
  }
  return true;
};

const getCookie = (cName) => {
  const pluses = /\+/g;
  if (typeof document !== 'undefined') {
    let cValue = document.cookie;
    let cStart = cValue.indexOf(`  ${cName}=`);
    if (cStart === -1) {
      cStart = cValue.indexOf(`${cName}=`);
    }
    if (cStart === -1) {
      cValue = null;
    } else {
      cStart = cValue.indexOf('=', cStart) + 1;
      let cEnd = cValue.indexOf(';', cStart);
      if (cEnd === -1) {
        cEnd = cValue.length;
      }
      cValue = decodeURIComponent(cValue.substring(cStart, cEnd).replace(pluses, ' '));
    }
    return cValue;
  }
  return cName;
};

//FixMe - Use single getCookie method
const getCookieFromServer = (cName, cookieStr) => {
  const pluses = /\+/g;
  if (typeof document !== 'undefined') {
    cookieStr = document.cookie;
  }
  if (cookieStr) {
    let cValue = cookieStr;
    let cStart = cValue.indexOf(`  ${cName}=`);
    if (cStart === -1) {
      cStart = cValue.indexOf(`${cName}=`);
    }
    if (cStart === -1) {
      cValue = null;
    } else {
      cStart = cValue.indexOf('=', cStart) + 1;
      let cEnd = cValue.indexOf(';', cStart);
      if (cEnd === -1) {
        cEnd = cValue.length;
      }
      cValue = decodeURIComponent(cValue.substring(cStart, cEnd).replace(pluses, ' '));
    }
    return cValue;
  }
  return cName;
};

const getRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};


const getRandomKeyUuid = (stringVal, isRandomRequire) => {
  const randomize = isRandomRequire || false;
  let hashVal;
  if (randomize) {
    const currentDate = (new Date()).valueOf().toString();
    const randomString = getRandomString(10);
    hashVal = sha1().update(currentDate + randomString + stringVal).digest('hex');
    hashVal = `${hashVal}${SEPERATOR}${stringVal}`;
  } else {
    hashVal = sha1().update(stringVal).digest('hex');
  }
  return hashVal;
};

const setCookie = (cName, value, expireDays = 365) => {
  const expireTime = expireDays || 365;
  const now = new Date();
  now.setTime(now.getTime() + (expireTime * 24 * 60 * 60 * 1000));
  if (typeof document !== 'undefined') {
    document.cookie = `${cName}=${value}; expires=${now};path=/`;
  }
  return value;
};

const afterLoadEvents = () => {
  setupUserInactivityTracking();
  const hash = getCookie(PAGE_UUID_COOKIE_KEY);
  setCookie(REFERER_UUID_KEY, hash);
  return true;
};

const getCurrentDateFormat = () => {
  const now = new Date();
  const dateString = `${now.getDate()}-${now.getMonth()}-${now.getYear()}`;
  return dateString;
};

const isNewSession = () => {
  const sessionUuid = getCookie(SESSION_UUID_COOKIE_KEY);
  const temp = sessionUuid.split(SEPERATOR)[1];
  const dateString = getCurrentDateFormat();
  if (dateString === temp) {
    return false;
  }
  return true;
};

function invalidateLandingPageUuid() {
  setCookie(LANDING_UUID_COOKIE_KEY, '', 0);
}

const initializeCounter = () => {
  setCookie(COUNTER_SESSION_KEY, 1);
};

const updateCounter = () => {
  let counter = getCookie(COUNTER_SESSION_KEY);
  counter = parseInt(counter, 10) || 1;
  counter += 1;
  setCookie(COUNTER_SESSION_KEY, counter);
};

const getSessionUuid = (force = false) => {
  const minVal = convertDayToMinutes(30);
  const sessionUuid = getCookie(SESSION_UUID_COOKIE_KEY);
  updateCounter();
  if (!isTextValid(sessionUuid) || isNewSession() || isCampaignChange() || force) {
    console.log('Resetting session');
    initializeCounter();
    invalidateLandingPageUuid();
    const dateString = getCurrentDateFormat();
    const hashVal = getRandomKeyUuid(dateString, true);
    setCookie(SESSION_UUID_COOKIE_KEY, hashVal, minVal);
    return hashVal;
  }
  setCookie(SESSION_UUID_COOKIE_KEY, sessionUuid, minVal);
  return sessionUuid;
};

const getPageName = () => {
  let pageName = 'Home Page';
  if (typeof window !== 'undefined') {
    const pageUrl = window.location.pathname;
    if (Object.keys(PAGE_TYPE_AND_PATTERN).length > 1) {
      for (let i = 0; i < Object.keys(PAGE_TYPE_AND_PATTERN).length; i += 1) {
        const key = Object.keys(PAGE_TYPE_AND_PATTERN)[i];
        const value = PAGE_TYPE_AND_PATTERN[key];
        const ar = pageUrl.match(value) || [];
        if (ar.length > 0) {
          pageName = key;
          break;
        }
      }
    }
  }
  return pageName;
};

const getDefaultPageName = () => {
  let pageName = TRAVELER_DEFAULT_PAGE;
  if (typeof window !== 'undefined') {
    const pageUrl = window.location.pathname;
    if (pageUrl.indexOf('admin') >= 0) {
      pageName = ADMIN_DEFAULT_PAGE;
    } else if (pageUrl.indexOf('/agent') >= 0) {
      pageName = AGENT_DEFAULT_PAGE;
    } else {
      pageName = TRAVELER_DEFAULT_PAGE;
    }
  }
  return pageName;
};

const getRefererUuid = () => {
  const refUid = getCookie(REFERER_UUID_KEY);
  return refUid;
};

const getPageUuid = () => {
  const pageName = getRandomString(30);
  const hashVal = getRandomKeyUuid(pageName, true);
  setCookie(PAGE_UUID_COOKIE_KEY, hashVal);
  return hashVal;
};

const getLandingPageUuid = () => {
  const landingUuid = getCookie(LANDING_UUID_COOKIE_KEY);
  if (isTextValid(landingUuid)) {
    return landingUuid;
  }
  let hashVal = getCookie(PAGE_UUID_COOKIE_KEY);
  if (!isTextValid(hashVal)) {
    hashVal = getPageUuid();
  }
  setCookie(LANDING_UUID_COOKIE_KEY, hashVal, 0);
  return hashVal;
};

const getFacebookTrackingScript = () => {
  const script = '!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","//connect.facebook.net/en_US/fbevents.js");fbq("init", "526824380757665");fbq("track", "PageView");';
  return script;
};

const fireFacebookAdword = () => {
  if (typeof fbq !== 'undefined') {
    const fbUrl = 'fbq("track", "CustomEvent", {event:"RTripCreated"});';
    return fbUrl;
  }
  return true;
};

const getFullPageName = (window) => {

  const result = getPageName();
  if(typeof window !== 'undefined' && window.location.pathname === '/wvchatbot') {
    const platform = getQueryVariable('platform');
    return `app${platform ? `-${platform}`: ''}::${result}`;
  }
  return `public_mweb::${result}`;

  // if (typeof document !== 'undefined') {
  //   const metas = document.getElementsByTagName('meta');
  //   for (let i = 0; i < metas.length; i += 1) {
  //     if (metas[i].getAttribute('name') === 'page_fullname') {
  //       result = metas[i].getAttribute('content');
  //     }
  //   }
  //   result = result || 'NOT SET';
  // }
};

const getPageUrl = () => {
  let url = DEFAULT_URL;
  if (typeof window !== 'undefined') {
    url = `${window.location.href}`;
  }
  return url;
};

const getPagePath = () => {
  let url = DEFAULT_PATH;
  if (typeof window !== 'undefined') {
    url = `${window.location.pathname}`;
  }
  return url;
};

const getCounter = () => {
  const counter = getCookie(COUNTER_SESSION_KEY);
  return counter;
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

const getQueryVariable = (variable) => {
  if(window.location.search) {
    const query = window.location.search.substring(1);
    if (query) {
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
          return decodeURIComponent(pair[1]);
        }
      }
    }
  }
  return '';
};

const getPageNameFromUrl = (pageUrl) => {
  let pageName = 'NOT SET';
  if (Object.keys(PAGE_TYPE_AND_PATTERN).length > 1) {
    for (let i = 0; i < Object.keys(PAGE_TYPE_AND_PATTERN).length; i += 1) {
      const key = Object.keys(PAGE_TYPE_AND_PATTERN)[i];
      const value = PAGE_TYPE_AND_PATTERN[key];
      const ar = pageUrl.match(value) || [];
      if (ar.length > 0) {
        pageName = key;
        break;
      }
    }
  }
  return pageName;
};

const deleteCookie = (name) => {
  if (typeof document !== 'undefined') {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
};

const getBrowserName = () => {

  if ( navigator.userAgent.indexOf("Edge") > -1 && navigator.appVersion.indexOf('Edge') > -1 ) {
    return 'Edge';
  }
  else if( navigator.userAgent.indexOf("Opera") != -1 || navigator.userAgent.indexOf('OPR') != -1 )
  {
    return 'Opera';
  }
  else if( navigator.userAgent.indexOf("Chrome") != -1 )
  {
    return 'Chrome';
  }
  else if( navigator.userAgent.indexOf("Safari") != -1)
  {
    return 'Safari';
  }
  else if( navigator.userAgent.indexOf("Firefox") != -1 )
  {
    return 'Firefox';
  }
  else if( ( navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true ) ) //IF IE > 10
  {
    return 'IE';
  }
  else
  {
    return 'unknown';
  }
};


export {
  getTripStageText,
  getCookie,
  setCookie,
  SESSION_UUID_COOKIE_KEY,
  getSessionUuid,
  PAGE_UUID_COOKIE_KEY,
  getPageName,
  getPageUuid,
  getRefererUuid,
  PAGE_TYPE_AND_PATTERN,
  getLandingPageUuid,
  PREV_PAGE_UUID_COOKIE_KEY,
  afterLoadEvents,
  LANDING_UUID_COOKIE_KEY,
  REFERER_UUID_KEY,
  FUNNEL_UUID_KEY,
  isTextValid,
  getFacebookTrackingScript,
  fireFacebookAdword,
  getFullPageName,
  getDefaultPageName,
  getRandomString,
  getPageUrl,
  getPagePath,
  FORM_VARIATION_COOKIE_KEY,
  invalidateLandingPageUuid,
  getCounter,
  TRIP_ID_COOKIE_KEY,
  fixNaNValue,
  getPageNameFromUrl,
  getQueryVariable,
  deleteCookie,
  getCookieFromServer,
  SORT_BY_COOKIE,
  getBrowserName
};
