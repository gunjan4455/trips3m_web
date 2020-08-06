import {
  getCookie,
  getPageName,
  PAGE_UUID_COOKIE_KEY,
  LANDING_UUID_COOKIE_KEY,
  REFERER_UUID_KEY,
  SESSION_UUID_COOKIE_KEY,
  setCookie,
  getRandomString,
  isTextValid,
  getFullPageName,
  getDefaultPageName,
  fixNaNValue,
  getPageUrl,
  getCounter,
  getQueryVariable,
  getBrowserName
} from '../helpers/FormDataFormatter';
import { getRtmsConnection, RtmsChannels } from "../helpers/rtms";
import { eventsQueue } from '../helpers/eventsQueue';

const CATEGORY_CLICK = 'Category Clicked';
const PACKAGE_LIST_CLICK = 'Package List Clicked';
const DESTINATION_CLICK = 'Destination Clicked';
const DESTINATION_VIEWED = 'Destination Viewed';
const WEEKEND_CLICK = 'Weekend Clicked';
const PLATFORM = 'public_mweb';
const PACKAGE_CLICKED = 'Package Clicked';
const DESTINATION_LIST_CLICK = 'Destination List Clicked';
const DESTINATION_LIST_VIEWED = 'Destination List Viewed';
const WEEKEND_LIST_CLICK = 'Weekend List Clicked';
const PACKAGE_LIST_VIEWED = 'Package List Viewed';
const PACKAGE_VIEWED = 'Package Viewed';
const SEPERATOR = '::';
const SEGMENT_ADMIN_COMMENT = '#trip_origin_product:public_mweb';
const DEFAULT_PAGE = 'Traveler Page';
const PREV_PAGE_UUID_COOKIE_KEY = 'prev_uuid';
const FUNNEL_UUID_KEY = 'funnel_uuid';
const DFEAULT_VALUE = 1;
const RTRIP_FORM_VARIANT_NAME = 'Slider Close';
const ANONYMOUS_ID_DEFAULT = 'anonymous_id_not_set';
const ANONYMOUS_ID_COOKIE_NAME = 'ajs_anonymous_id';
const DEFAULT_USER_ROLE = 'NOT_SET';
const USER_ID_COOKIE_KEY = 'u_id';
const USER_ROLE_COOKIE_KEY = 'u_role';
const DEFAULT_USER_ID = 1;
const PAGE_SCROLLED = 'Page Scrolled';
const PACKAGE_COMPARE_ADDED = 'Package Compare Added';
const PACKAGE_COMPARE_CLICKED = 'Package Compare Clicked';
const DEFAULT_VALUE = 1;
const FILTER_CLICKED = 'Filter Clicked';
const DEFAULT_NUMBER_VALUE = 0;
const SORT_CLICKED = 'Sort Clicked';
const FAQS_CLICKED = 'FAQs Clicked';
const PACKAGE_INTERACTED = 'Package Interacted';
const TRIP_ID_COOKIE_KEY = 'trip_id';
const ORGANISM_VIEWED = 'organism_viewed';
const ORGANISM_CLICKED = 'organism_clicked';
const HOTEL_CATEGORY_CLICKED = 'Hotel Category Clicked';
const PDP_PAGE_VIEW = 'Pdp Page View';
const PLP_PAGE_VIEW = 'Plp Page View';
const CITYBLOCK_PAGE_VIEW = 'Cityblock Page View';
const LEAD_FUNNEL = 'Lead Funnel';
const ORGANISM_CLICKED_HOTELS = 'organism_clicked_hotels';
const INVENTORY_SEARCHES = 'inventory_searches';

export const EVENT_TYPES = {
  identify: "identify",
  page: "page",
  track: "track",
  alias: "alias",
  group: "group",
  reset: "reset",
};

const getLeadFunnelName = (funnelStep) => {
  const funnelStepNames = {
    1: 'Module Viewed',
    2: 'First Question Answered',
    6: 'Trip Created',
    7: 'Flow Completed'
  };
  return funnelStepNames[funnelStep];
};

const getFormType = (params = {}) => params.formType || RTRIP_FORM_VARIANT_NAME;

const sanitize = (text) => {
  if (typeof text === 'string') {
    return text.replace(/\W+/g, '');
  }
  return '';
};

const getPackageID = () => {
  const pID = getCookie('package_id_lead_funnel');
  if (typeof pID === 'undefined') {
    return 0;
  }
  return pID;
};

const prepareEventOriginUri = (section, object='', cta) => {
  let platform = null;
  if (typeof window !== 'undefined' && window.location.pathname === '/wvchatbot') {
    platform = getQueryVariable('platform');
  }
  const pageName = getPageName();
  const sanitizedCta = sanitize(cta);
  let result = [platform ? `app-${platform}` : PLATFORM, pageName, section, object, sanitizedCta];
  result = result.join(SEPERATOR);

  return result;
};

const queryParmas = (param) => {
  if(typeof window !== 'undefined'){
    return new URLSearchParams(window.location.search).get(param);
  }
};

// ------------------new Implementation-------------------------------------
const validateAction = (action) => {
  const segmentAction = action;
  const pageNames = ['name', 'page_name', 'page_fullname'];
  const defaultPageName = getDefaultPageName();
  Object.keys(segmentAction).forEach((key) => {
    /* Validates all id -> Should be Integer */
    if (key !=='anonymous_id' && key.endsWith('_id')) {
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
  return segmentAction;
};

const segmentColumns = {
  'Lead Funnel': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid', 'exploring_destination', 'fields'],
  'Package Clicked': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Package Viewed': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Package List Viewed': ['destination_list', 'destination_id', 'label', 'value', 'num_destinations'],
  'Destination Clicked': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Destination Viewed': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Destination List Viewed': ['value', 'destination_id', 'destination_list', 'label', 'num_destinations'],
  'Lead Funnel Testing': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid'],
  'Lead Funnel Chatbot': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid'],
  'Page Scrolled': [],
  'Package List Clicked': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Destination List Clicked': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Weekend Clicked': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Package Compare Added': ['section', 'label', 'value', 'destination_id', 'package_name'],
  'Package Compare Clicked': ['section', 'label', 'value', 'compare_ids'],
  'Filter Clicked': ['section', 'label', 'value'],
  'Sort Clicked': ['section', 'label', 'value', 'destination_id'],
  'FAQs Clicked': ['section', 'label', 'value', 'destination_id'],
  'Package Interacted': ['section', 'label', 'value', 'destination_id', 'package_id'],
  'organism_viewed': ['trip_id', 'quote_id', 'invoice_id', 'destination_id', 'agent_id', 'trip_status', 'quote_status',
    'trip_stage', 'layout_name', 'row_no', 'block_no', 'shape', 'total_blocks', 'misc_id_1', 'misc_type_1', 'misc_id_2',
    'misc_type_2', 'label'],
  'organism_clicked': ['trip_id', 'quote_id', 'invoice_id', 'destination_id', 'agent_id', 'trip_status', 'quote_status',
    'trip_stage', 'layout_name', 'row_no', 'block_no', 'shape', 'total_blocks', 'misc_id_1', 'misc_type_1', 'misc_id_2',
    'misc_type_2', 'misc_id_3', 'misc_type_3', 'misc_id_4', 'misc_type_4', 'misc_id_5', 'misc_type_5'],
  'Prod Page Call': ['event_timestamp', 'referrer', 'url', 'anonymousId', 'destination_list'],
  'Hotel Category Clicked': ['section', 'value', 'destination_id', 'destination_list', 'label'],
  'Pdp Page View': ['section', 'value', 'destination_id', 'destination_list','destination_type', 'label', 'budget_package', 'discounted_package'],
  'Plp Page View': [ 'destination_list', 'destination_id', 'destination_type'],
  'Cityblock Page View': [ 'destination_list', 'destination_id', 'destination_type'],
  'ChatBot Closed': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid', 'exploring_destination', 'fields', 'formType', 'value'],
  'ChatBot Open': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid', 'exploring_destination', 'fields', 'formType', 'value'],
  'ChatBot Interacted': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid', 'exploring_destination', 'fields', 'formType', 'value'],
  'Exit Intent Interacted': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid', 'exploring_destination', 'fields', 'formType', 'value'],
  'Exit Intent Closed': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid', 'exploring_destination', 'fields', 'formType', 'value'],
  'Lead Pop Up Form Closed': ['destination_list', 'form_variant', 'funnel_step', 'start_date', 'trip_days',
    'label', 'num_destinations', 'to_loc', 'trip_id', 'funnel_uuid', 'exploring_destination', 'fields', 'formType', 'value'],
  'Redis Downtime': ['redis_data', 'error_msg'],
  'Category Clicked': ['section', 'category', 'event_origin_uri', 'value'],
  'organism_clicked_hotels': ['destination', 'hotel_id', 'hotel_name', 'miscellaneous_type_2', 'miscellaneous_id_2',
    'miscellaneous_type_1', 'miscellaneous_id_1'],
  'inventory_searches': ['country', 'destination_name', 'entity', 'booking_start_date', 'booking_end_date', 'inventory_id',
    'inventory_name', 'available_inventory', 'final_price', 'display_price', 'rooms', 'guests', 'miscellaneous_type_1',
    'miscellaneous_id_1', 'miscellaneous_type_2', 'miscellaneous_id_2']
};

if (typeof window !== 'undefined') {
  window.eventsQueue = eventsQueue;
}

const trackSegment = (details = {}) => {
  const webEngageForever = typeof webengage !== 'undefined' &&
                           typeof webengage.state !== 'undefined' ? webengage.state.getForever() : {};
  const { luid, cuid } = webEngageForever || {};
  const _ga = getCookie('_ga');
  const gaid = _ga ? _ga.substring(6) : '';
  const fuuid = getCookie(FUNNEL_UUID_KEY);

  const trackObj = {
    category: details.category,
    package_id: details.package_id || getPackageID(),
    event_origin_uri: prepareEventOriginUri(details.section, details.object, details.cta),
    page_fullname: getFullPageName(),
    page_name: getPageName(),
    page_uuid: getCookie(PAGE_UUID_COOKIE_KEY),
    session_uuid: getCookie(SESSION_UUID_COOKIE_KEY),
    landing_page_uuid: getCookie(LANDING_UUID_COOKIE_KEY),
    referer_page_uuid: getCookie(REFERER_UUID_KEY),
    user_id: getCookie(USER_ID_COOKIE_KEY) || DEFAULT_USER_ID,
    user_role: getCookie(USER_ROLE_COOKIE_KEY) || DEFAULT_USER_ROLE,
    platform: PLATFORM,
    event_timestamp: new Date(),
    anonymous_id: getAnonymousId(),
    url: window.location.href,
    referrer: encodeURIComponent(document.referrer),
    source: queryParmas('utm_source'),
    utm_medium: queryParmas('Utm_medium'),
    utm_campaign: queryParmas('Utm_campaign'),
    browser: getBrowserName(),
    funnel_uuid: fuuid || details.funnel_uuid,
    label: details.label,
    destination_list: details.destination_list || '',
    form_variant: details.form_variant,
    funnel_step: details.funnel_step,
    num_destinations: details.num_destinations ||  0,
    trip_days: details.trip_days || 0,
    trip_id: details.trip_id || getCookie('trip_id') || 0,
    start_date: details.start_date,
    destination_id: details.destination_id,
    luid,
    cuid,
    gaid
  };

  segmentColumns[details.event].map(function (key) {
    trackObj[key] = details[key];
    return true;
  });
  const propertiesHash = validateAction(trackObj);
  const messageObj = {
    event: details.event,
    userId: getUserProfilingId(),
    properties: propertiesHash
  };
  try {
    if(typeof window !== 'undefined'){
      window.profilingSubscription ?
        window.profilingSubscription.sendEvent({content: messageObj}) :
        eventsQueue.addEvent(messageObj);
    }
  } catch (e) {
    console.log(e);
  }
  try {
    if (typeof window !== 'undefined' && (typeof window.analytics !== 'undefined')) {
      if (details.event !== 'Prod Page Call') {
        window.analytics.track(details.event, propertiesHash);
      }
    }
    if (typeof window !== 'undefined' && (typeof window.analyticsTT !== 'undefined')) {
      if (details.event !== 'Prod Page Call') {
        window.analyticsTT.track(details.event, propertiesHash);
      }
    }
  } catch (e) {
    console.log('Segment window error', e);
  }
};

let scroll25 = false;
let scroll50 = false;
let scroll75 = false;

const initializeScroller = () => {
  scroll25 = false;
  scroll50 = false;
  scroll75 = false;
};

const onScroll = (percentage) => {
  const trackSegmentEvent = (category) => {
    trackSegment({
      event: PAGE_SCROLLED,
      value: 1,
      category: category
    });
  };
  const percentValue = Math.ceil(percentage * 100) || Math.floor(percentage * 100);
  if (percentValue === 25 && !scroll25) {
    scroll25 = true;
    trackSegmentEvent('scroll25');
  } else if (percentValue === 50 && !scroll50) {
    if (!scroll25) {
      trackSegmentEvent('scroll25');
      scroll25 = true;
    }
    trackSegmentEvent('scroll50');
    scroll50 = true;

  } else if (percentValue === 75 && !scroll75) {
    if (!scroll25) {
      trackSegmentEvent('scroll25');
      scroll25 = true;
    }
    if (!scroll50) {
      trackSegmentEvent('scroll50');
      scroll50 = true;
    }
    trackSegmentEvent('scroll75');
    scroll75 = true;
  }
};

// -----------------------new implememtation--------------
const identifyPayload = (identifyHash = {}) => {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.analytics !== 'undefined') {
        const uId = identifyHash.user_id || getCookie('u_id');
        window.analytics.identify(uId, {});
      }
      if (typeof window.analyticsTT !== 'undefined') {
        const uId = identifyHash.user_id || getCookie('u_id');
        window.analyticsTT.identify(uId, {});
      }
    }
  } catch (e) {
    console.log(e);
  }
  console.log(identifyHash);
  return {
    type: 'DUM',
  };
};

const aliasPayload = (aliasHash = {}) => {
  console.log('aliascalled');
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.analytics !== 'undefined') {
        const uId = aliasHash.user_id || getCookie('u_id');
        window.analytics.alias(uId);
      }
      if (typeof window.analyticsTT !== 'undefined') {
        const uId = aliasHash.user_id || getCookie('u_id');
        window.analyticsTT.alias(uId);
      }
    }
  } catch (e) {
    console.log(e);
  }
  return {
    type: 'DUM',
  };
};

const getAnonymousId = () => {
  let anonymousId = '';
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.analytics !== 'undefined') {
        const user = window.analytics.user();
        if (typeof user !== 'undefined') {
          return user.anonymousId();
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  anonymousId = getCookie(ANONYMOUS_ID_COOKIE_NAME);
  if (!isTextValid(anonymousId)) {
    anonymousId = ANONYMOUS_ID_DEFAULT;
  } else {
    anonymousId = anonymousId.split('%22').join('');
  }
  return anonymousId;
};

const getFormFilledOn = (adminComment, query) => {
  let result = '';
  if (adminComment.indexOf('Form_filled_on') !== -1) {
    const ar = adminComment.split('Form_filled_on');
    let urlString = ar[ar.length - 1];
    urlString = urlString.trim().split(SEGMENT_ADMIN_COMMENT)[0].trim();
    result = urlString || '';
  }
  if(query && query.mview && query.srcUrl) {
    result = result.concat(query.srcUrl);
  }
  if (result.length === 0) {
    if (typeof document !== 'undefined') {
      result = document.referrer;
    }
  }
  return result;
};

const trackPagePayload = (uuids = {}) => ({
  title: document.title,
  referrer: encodeURIComponent(document.referrer),
  path: window.location.pathname,
  event_timestamp: new Date(),
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
  user_role: getCookie('u_role'),
  user_id: getCookie('u_id'),
  search: window.location.search,
  sequence_number: parseInt(getCounter(), 10) || 1,
  destination_list: getCookie('cb_dt'),
  trip_id: parseInt(getCookie(TRIP_ID_COOKIE_KEY), 10) || 0,
  context_campaign_content: getQueryVariable('utm_content'),
  context_campaign_medium: getQueryVariable('utm_medium'),
  context_campaign_name: getQueryVariable('utm_campaign'),
  context_campaign_source: getQueryVariable('utm_source'),
  context_campaign_term: getQueryVariable('utm_term'),
  context_user_agent: encodeURIComponent(navigator.userAgent),
  context_ip: '',
  destination_id: getCookie('__adid'),
  destination_type: getCookie('__adtp'),
  num_destinations: getCookie('__cdsns'),
});

//TODO: Brij find better solution to send use profiling information on event channel.
async function subscribeToRtms({userId}) {
  const channel = RtmsChannels.EVENTS;

  try{
    window.profilingSubscription = await getRtmsConnection({userId, channel,loggedInUser: false});
    let message;
    while(message = eventsQueue.removeEvent()){
      window.profilingSubscription.sendEvent({content: message});
    }
  } catch (e) {
    console.log(e);
  }

  trackSegment(Object.assign({}, trackPagePayload({
    page_id: getCookie(PAGE_UUID_COOKIE_KEY),
    session_id: getCookie(SESSION_UUID_COOKIE_KEY),
    referer_id: getCookie(REFERER_UUID_KEY),
    landing_id: getCookie(LANDING_UUID_COOKIE_KEY)
  }), {event: "Prod Page Call", anonymousId: getAnonymousId()}));
}

const connectToRtmsProfling = () => {
  subscribeToRtms({userId: getUserProfilingId()});
};

function getUserProfilingId() {
  let uid = getCookie('_upanid');
  if(!uid) {
    uid = getRandomString(40);
    setCookie('_upanid', uid);
  }
  return uid;
}

export {
  PLATFORM,
  prepareEventOriginUri,
  sanitize,
  SESSION_UUID_COOKIE_KEY,
  PAGE_UUID_COOKIE_KEY,
  PREV_PAGE_UUID_COOKIE_KEY,
  LANDING_UUID_COOKIE_KEY,
  REFERER_UUID_KEY,
  FUNNEL_UUID_KEY,
  identifyPayload,
  aliasPayload,
  SEGMENT_ADMIN_COMMENT,
  DEFAULT_PAGE,
  getAnonymousId,
  getFormFilledOn,
  trackSegment,
  initializeScroller,
  onScroll,
  getFormType,
  getLeadFunnelName,
  setCookie,
  PAGE_SCROLLED,
  PACKAGE_LIST_CLICK,
  DESTINATION_CLICK,
  DESTINATION_VIEWED,
  WEEKEND_CLICK,
  DFEAULT_VALUE,
  PACKAGE_CLICKED,
  PACKAGE_VIEWED,
  PACKAGE_LIST_VIEWED,
  DESTINATION_LIST_VIEWED,
  DESTINATION_LIST_CLICK,
  PACKAGE_COMPARE_ADDED,
  PACKAGE_COMPARE_CLICKED,
  DEFAULT_VALUE,
  FILTER_CLICKED,
  SORT_CLICKED,
  FAQS_CLICKED,
  PACKAGE_INTERACTED,
  TRIP_ID_COOKIE_KEY,
  USER_ROLE_COOKIE_KEY,
  USER_ID_COOKIE_KEY,
  trackPagePayload,
  ORGANISM_VIEWED,
  HOTEL_CATEGORY_CLICKED,
  PDP_PAGE_VIEW,
  ORGANISM_CLICKED,
  connectToRtmsProfling,
  PLP_PAGE_VIEW,
  CITYBLOCK_PAGE_VIEW,
  LEAD_FUNNEL,
  RTRIP_FORM_VARIANT_NAME,
  CATEGORY_CLICK,
  ORGANISM_CLICKED_HOTELS,
  INVENTORY_SEARCHES
};
