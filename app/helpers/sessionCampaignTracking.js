import * as FormDataFormatter from '../helpers/FormDataFormatter';

const queryString = require('query-string');

const trafficTypeCookieName = 'ttype';
const gclidCookieName = 'ttgcl';
const utmCookieName = 'utmval';
const sitenameCookie = 'snm';

class TrafficType {
  static sem = 'sem';
  static direct = 'direct';
  static referral = 'referral';
  static facebook = 'facebook';
  static organic = 'organic';
}

const getTrafficType = (referrerUrl) => {
  if (referrerUrl.indexOf('facebook.com') !== -1) {
    if (document.location.search.indexOf('utm_campaign') !== -1) {
      return TrafficType.facebook;
    }
  } else if (referrerUrl.indexOf('traveltriangle.com') !== -1) {
    return TrafficType.direct;
  } else if (referrerUrl.indexOf('google.co') !== -1) {
    if (document.location.search.indexOf('gclid') !== -1) {
      return TrafficType.sem;
    }
    return TrafficType.organic;
  } else if (FormDataFormatter.isTextValid(referrerUrl)) {
    return TrafficType.referral;
  }
  return TrafficType.direct;
};

const getLastTraffictype = () => {
  const prevTrafficType = FormDataFormatter.getCookie(trafficTypeCookieName);
  if (FormDataFormatter.isTextValid(prevTrafficType)) {
    return prevTrafficType;
  }
  return TrafficType.direct;
};

const getHostName = (url) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
  }

  return null;
};

const isCampaignChange = () => {
  let trafficType;
  const prevTrafficType = getLastTraffictype();
  let queryParams = {};
  queryParams = queryString.parse(window.location.search);
  let result = false;
  if (typeof document !== 'undefined') {
    const referrer = document.referrer;
    trafficType = getTrafficType(referrer);
    switch (trafficType) {
      case TrafficType.sem : {
        const prevGclId = FormDataFormatter.getCookie(gclidCookieName);
        const currentGclId = queryParams.gclid;
        if (prevTrafficType !== trafficType || currentGclId !== prevGclId) {
          FormDataFormatter.setCookie(trafficTypeCookieName, trafficType);
          FormDataFormatter.setCookie(gclidCookieName, currentGclId);
          result = true;
        }
        break;
      }
      case TrafficType.facebook : {
        const prevUtmParam = FormDataFormatter.getCookie(utmCookieName);
        const currentUtmParam = queryParams.utm_campaign;
        if (prevTrafficType !== trafficType || currentUtmParam !== prevUtmParam) {
          FormDataFormatter.setCookie(trafficTypeCookieName, trafficType);
          FormDataFormatter.setCookie(utmCookieName, currentUtmParam);
          result = true;
        }
        break;
      }
      case TrafficType.referral : {
        const prevSiteName = FormDataFormatter.getCookie(sitenameCookie);
        const currentSiteName = getHostName(window.location.href);
        if (prevTrafficType !== trafficType || currentSiteName !== prevSiteName) {
          FormDataFormatter.setCookie(trafficTypeCookieName, trafficType);
          FormDataFormatter.setCookie(sitenameCookie, currentSiteName);
          result = true;
        }
        break;
      }
      case TrafficType.organic : {
        if (prevTrafficType !== trafficType) {
          FormDataFormatter.setCookie(trafficTypeCookieName, trafficType);
          result = true;
        }
        break;
      }
      case TrafficType.direct : {
        result = false;
        break;
      }
      default: {
        result = false;
      }
    }
  }
  return result;
};

export {
  isCampaignChange,
};
