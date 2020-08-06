import config from 'appConfig';
import { formatURL } from 'utils/parsers';

const getQueryParams = queryParams => {
  const params = Object.keys(queryParams).filter((key) => queryParams[key] !== undefined && queryParams[key] !== null);
  if (params.length) {
    return params.reduce((finalString, key) =>
      (`${finalString}&${key}=${queryParams[key]}`), '?'
    );
  }
  return '';
};

const requestedTripCustomizationPath = rtrip => (
  `/requested_trips/${rtrip}/customize_new`
);

const destinationDetailPath = (destinationId, destinationName) => (
  `/travel-to/${destinationId}-${destinationName}`
);

const formTwoCustomizationsPath = rtripId => (
  config.apiEndpoints.requestedTrip.customize.url.replace(':id', rtripId)
);

const packageListingPath = (category = 'tour', destination = '') => (
  `/${category.toLowerCase()}-packages/${destination.toLowerCase().replace(' ', '-')}`
);

const destinationTestimonialPath = destination => (
  `/testimonials/${destination.toLowerCase()}`
);

const whatsappUrl = (heading, url) => {
  const encodedString = encodeURIComponent(`${heading} ${url}`);
  return `whatsapp://send?text=${encodedString}`;
};

const getPackageListingUrl = (category, destination) => {
  const url = `/${category.toLowerCase()}-packages/${destination.name.toLowerCase().split(' ').join('-')}`;
  return url;
};

const redirectionEnabled = url => (
  !(/\w+-Places/.test(url) || /places-near\/\w+/.test(url)) && url.toLowerCase() !== url
);

const decodeURIParam = (param) => {
  const decodedParam = decodeURIComponent(param);
  if (decodedParam !== param) {
    return decodeURIParam(decodedParam);
  }
  return param;
};

//citybloc api helpers----------
const pageLayout = (pageName, id) => {
  return `${config.apiEndpoints.pageLayout.url.replace(':pageName', pageName)}?item_id=${id}&platform=mobile`;
};

const cityBlockCommon = (destination, queryParams) => {
  return `${config.apiEndpoints.cityBlockCommon.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const placesToVisit = (destination, queryParams, filters) => {
  return `${config.apiEndpoints.placesToVisit.url.replace(':destination', destination)}${getQueryParams(queryParams)}${getFiltersParams(filters)}`;
};

const thingsToDo = (destination, queryParams, filters) => {
  return `${config.apiEndpoints.thingsToDo.url.replace(':destination', destination)}${getQueryParams(queryParams)}${getFiltersParams(filters)}`;
};

const mapInformation = (destination, queryParams) => {
  return `${config.apiEndpoints.mapInformation.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const banner = (destination, queryParams) => {
  return `${config.apiEndpoints.banner.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const cityBlockTestimonials = (destination, queryParams) => {
  return `${config.apiEndpoints.cityBlockTestimonials.url}${getQueryParams(queryParams)}`;
};

const pdpTestimonials = (id, queryParams) => {
  return `${config.apiEndpoints.pdpTestimonials.url.replace(':id', id)}${getQueryParams(queryParams)}`;
};

const pdpFooterLinks = (id, queryParams) => {
  return `${config.apiEndpoints.fetchFooterLink.url.replace(':id', id)}${getQueryParams(queryParams)}`;
};

const plpFooterLinks = (queryParams) => `${config.apiEndpoints.fetchPlpFooterLinks.url}${getQueryParams(queryParams)}`;

const faqs = (destination, queryParams) => {
  return `${config.apiEndpoints.faqs.url}${getQueryParams(queryParams)}`;
};

const recentPackages = (destination, queryParams) => {
  return `${config.apiEndpoints.recentPackages.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const howToReach = (destination, queryParams) => {
  return `${config.apiEndpoints.howToReach.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const bestTimeToVisit = (destination, queryParams) => {
  return `${config.apiEndpoints.bestTimeToVisit.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const essentialInfo = (destination, queryParams) => {
  return `${config.apiEndpoints.essentialInfo.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const entryFeesTimingsTips = (destination, queryParams) => {
  return `${config.apiEndpoints.entryFeesTimingsTips.url.replace(':destination', destination)}${getQueryParams(queryParams)}`;
};

const testimonialsInfo = (queryParams) => `${config.apiEndpoints.testimonials.url}${getQueryParams(queryParams)}`;

const createRoomsFilter = (queryParams) => queryParams.rooms && queryParams.rooms.reduce((finalString, room) => {
  return (`${finalString}${finalString === '&' ? '' : '&'}rooms[][adults]=${room['adults']}&rooms[][children]=${room['children']}`);
}, '&');

const hlpCommon = (bookableInfo = {}) => {
  const commonApi = config.apiEndpoints.hlpCommon.url;

  if (bookableInfo.checkInDate && bookableInfo.checkOutDate) {
    return `${commonApi}?check_in_date=${bookableInfo.checkInDate}&check_out_date=${bookableInfo.checkOutDate}${createRoomsFilter(bookableInfo)}`;
  }

  return `${commonApi}`;
};

const hotelSearchUrl = (queryParams) => {
  return `${config.apiEndpoints.hotelSearch.url}?hotel_id=${queryParams.hotel_id}&check_in_date=${queryParams.checkInDate}&check_out_date=${queryParams.checkOutDate}${createRoomsFilter(queryParams)}&all_rooms=${queryParams.all_rooms}`;
};

const bookingDetailUrl = (bookingId) => {
  return config.apiEndpoints.bookingDetails.url.replace(':id', bookingId);
};

const getFiltersParams = queryParams => {
  const params = Object.keys(queryParams).filter((key) => queryParams[key] !== undefined && queryParams[key] !== null);
  if (params.length) {
    return params.reduce((finalString, key) =>
      (`${finalString}&${key}=${queryParams[key]}`), '&'
    );
  }
  return '';
};

// <editor-fold desc="Page Url's">
const rtripPath = requestedTripId => (
  config.apiEndpoints.rtripPath.url.replace(':id', requestedTripId)
);

const quoteDetailPath = (requestedTripId, quoteId) => (
  config.apiEndpoints.quoteDetailPath.url
    .replace(':id', requestedTripId)
    .replace(':quoteId', quoteId)
);

const compareQuotesPath = requestedTripId => (
  config.apiEndpoints.compareQuotesPath.url.replace(':id', requestedTripId)
);

const vouchersPath = quoteId => (
  config.apiEndpoints.vouchersPath.url.replace(':quoteId', quoteId)
);

const editTravelInfoPath = tripId => (
  config.apiEndpoints.editTravelInfoPath.url.replace(':id', tripId)
);

const itineraryPath = (tripId, quoteId) => (
  config.apiEndpoints.itineraryPath.url.replace(':id', tripId).replace(':quoteId', quoteId)
);

const preferencesPageUrl = (tripId) => (
  config.apiEndpoints.preferencesPageUrl.url.replace(':id', tripId)
);
//</editor-fold>

// <editor-fold desc="Trip API's">
const allTripsUrl = (view = 'full') => {
  return `${config.apiEndpoints.allTrips.url}?view=${view}`;
};

const cancelBookingUrl = (id, query, view = 'full') => {
  const queryParams = query ? `${query}&view=${view}` : `?view=${view}`;
  return `${config.apiEndpoints.cancelBooking.url.replace(':requestedTripId', id)}${queryParams}`;
};

const reactivateRequestUrl = (id, query, view = 'full') => {
  const queryParams = query ? `${query}&view=${view}` : `?view=${view}`;
  return `${config.apiEndpoints.reactivateRequest.url.replace(':requestedTripId', id)}${queryParams}`;
};

const sendActivationMailPath = requestedTripId => (
  config.apiEndpoints.sendActivationMail.url.replace(':id', requestedTripId)
);

const rtripConstantsPath = () => (
  config.apiEndpoints.requestedTripConstants.url
);
//</editor-fold>

// <editor-fold desc="Preferences API's">
const preferenceOptionsPath = (requestedTripId, query, view = 'full') => {
  const queryParams = query ? `${query}&view=${view}` : `?view=${view}`;
  return `${config.apiEndpoints.preferenceOptions.url.replace(':requestedTripId', requestedTripId)}${queryParams}`;
};

const updatePreferencesPath = (id, query, view = 'full') => {
  const queryParams = query ? `${query}&view=${view}` : `?view=${view}`;
  return `${config.apiEndpoints.updatePreferences.url.replace(':requestedTripId', id)}${queryParams}`;
};

const updateContactInfoPath = (tripId, query) => (
  `${config.apiEndpoints.updateContactInfo.url.replace(':requestedTripId', tripId)}${query}`
);
//</editor-fold>

// <editor-fold desc="Quote API's">
const tripQuotesPath = (requestedTripId, query, view = 'full') => {
  if (query) {
    return (
      `${config.apiEndpoints.tripQuotesPath.url.replace(':id', requestedTripId)}${query}&view=${view}`
    );
  }
  return (
    `${config.apiEndpoints.tripQuotesPath.url.replace(':id', requestedTripId)}?view=${view}`
  );
};

const quoteCommentsPath = (tripId, quoteIds) => {
  let queryParams = '';
  quoteIds.map(id => queryParams += `quote_ids[]=${id}&`);

  return `${config.apiEndpoints.quoteComments.url.replace(':id', tripId)}?${queryParams.slice(0, -1)}`;
};

const bookNowUrl = (requestedTripId, quoteId) => (
  config.apiEndpoints.bookNow.url
    .replace(':requestedTripId', requestedTripId)
    .replace(':quoteId', quoteId)
);

const rejectQuoteUrl = (requestedTripId, quoteId) => (
  config.apiEndpoints.rejectQuote.url
    .replace(':requestedTripId', requestedTripId)
    .replace(':quoteId', quoteId)
);

const reactivateQuoteUrl = (requestedTripId, quoteId) => (
  config.apiEndpoints.reactivateQuote.url
    .replace(':requestedTripId', requestedTripId)
    .replace(':quoteId', quoteId)
);

const hotelStatusChangeUrl = (requestedtripid, quoteid) => (
  config.apiEndpoints.hotelStatusChange.url
    .replace(':requestedTripId', requestedtripid)
    .replace(':quoteId', quoteid)
);

const requestCallbackUrl = (requestedtripid, quoteid) => (
  config.apiEndpoints.requestCallback.url
    .replace(':requestedTripId', requestedtripid)
    .replace(':quoteId', quoteid)
);

const preDefinedMessagePath = () => (
  config.apiEndpoints.preDefinedMessagePath.url
);

const downloadQuoteUrl = (quoteId) => {
  return `${config.apiEndpoints.downloadQuote.url.replace(':quoteId', quoteId)}?download_quote=true`;
};

const updateQuoteStatsUrl = (tripId, quoteId, queryParams) => {
  return `${config.apiEndpoints.updateQuoteStats.url
    .replace(':tripId', tripId)
    .replace(':quoteId', quoteId)}${getQueryParams(queryParams)}`;
};

const requestMoreQuotesPath = (id, feedback, otherReason, query) => {
  const queryParams = {
    query: query.length ? query : null,
    feedback: feedback,
    otherReason: otherReason
  };
  /* query
   ? `${query}&feedback=${feedback}&other_reason=${otherReason}`
   : `?feedback=${feedback}&other_reason=${otherReason}`;*/
  return `${config.apiEndpoints.requestMoreQuotes.url.replace(':id', id)}${getQueryParams(queryParams)}`;
};

//</editor-fold>

// <editor-fold desc="Agent Chat API's">

const chatKeysUrl = userId => (
  config.apiEndpoints.chatKeys.url.replace(':userId', userId)
);

const channelKeysUrl = ({ userId, channel }) => (
  `${config.apiEndpoints.channelKeys.url.replace(':userId', userId)}${channel}`
);

const commentsHistoryUrl = (requestedtripid, quoteid) => (
  config.apiEndpoints.commentsHistory.url
    .replace(':requestedTripId', requestedtripid)
    .replace(':quoteId', quoteid)
);

const commentCreateUrl = (requestedtripid, quoteid) => (
  config.apiEndpoints.commentCreate.url
    .replace(':requestedTripId', requestedtripid)
    .replace(':quoteId', quoteid)
);

//</editor-fold>

// <editor-fold desc="Discount Engine API's">
const discountOffers = (queryParams) => {
  return `${config.apiEndpoints.discountOffers.url}${getQueryParams(queryParams)}`;
};

const applyDiscountOffer = (queryParams) => {
  return `${config.apiEndpoints.applyDiscountOffer.url}${getQueryParams(queryParams)}`;
};

const removeDiscountOffer = (queryParams) => {
  return `${config.apiEndpoints.removeDiscountOffer.url}${getQueryParams(queryParams)}`;
};

const updateDiscountOffer = (queryParams) => {
  return `${config.apiEndpoints.updateDiscountOffer.url}${getQueryParams(queryParams)}`;
};

const appliedOffer = (queryParams) => {
  return `${config.apiEndpoints.appliedOffer.url}${getQueryParams(queryParams)}`;
};
//</editor-fold>

// <editor-fold desc="Notification API's">
const notificationKeysUrl = userId => (
  config.apiEndpoints.notificationKeys.url.replace(':userId', userId)
);

const notificationsPath = userId => (
  config.apiEndpoints.notifications.url.replace(':userId', userId)
);

const notificationsReadPath = userId => (
  config.apiEndpoints.notificationsRead.url.replace(':userId', userId)
);
//</editor-fold>

const postBookingFeedbackPath = tripId => config.apiEndpoints.postBookingFeedback.url.replace(':requestedTripId', tripId);

const postTripFeedbackPath = tripId => config.apiEndpoints.postTripFeedback.url.replace(':requestedTripId', tripId);

const securityTokenPath = tripId => config.apiEndpoints.securityToken.url.replace(':requestedTripId', tripId);

const iosDeepLink = targetUrl => {
  return encodeURIComponent(
    JSON.stringify({
      user_agent: 'Bolts iOS 1.0.0',
      targetUrl,
      extras: {
        myapp_token: '',
      },
    })
  );
};

const getAppSchemeUrl = (location, pageNumber, os) => {
  let baseUrl = `traveltriangle.com${location.pathname}`;

  if (os === 'ios') {
    baseUrl = location.pathname.substring(1);
  }

  if (pageNumber !== 1) {
    baseUrl = `${baseUrl}/page/${pageNumber}`;
  }

  /*  if (location.search) {
      baseUrl = `${baseUrl}/${location.search}`;
    }*/

  return baseUrl;
};

const getFlightDetailsUrl = rtripId => (
  config.apiEndpoints.requestedTrip.getFlightDetails.url.replace(':id', rtripId)
);

const replaceUniqueAndSecretKeys = (url, uniqueKey, secretKey) => (
  url.replace(':unique_key', uniqueKey).replace(':secret_key', secretKey)
);
// Destinations By duration

const destinationByDuration = queryParams => {
  return `${config.apiEndpoints.destinationByDuration.url}${getQueryParams(
    queryParams
  )}`;
};

const googleAuthUrl = () => formatURL({path: config.apiEndpoints.googleAuth.url, hostType: config.apiEndpoints.googleAuth.host});

const facebookAuthUrl = () => formatURL({path: config.apiEndpoints.facebookAuth.url, hostType: config.apiEndpoints.facebookAuth.host});

const postConversionUrl = (requestedTripId, invoiceId) => 
  `${config.apiEndpoints.postConversionUrl.url.replace(':requestedTripId', requestedTripId).replace(':invoiceId',invoiceId)}`;

const invoiceStatusUrl = (requestedTripId, invoiceId) => 
`${config.apiEndpoints.invoiceStatusUrl.url.replace(':requestedTripId', requestedTripId).replace(':invoiceId',invoiceId)}`;

export {
  requestedTripCustomizationPath,
  destinationDetailPath,
  formTwoCustomizationsPath,
  packageListingPath,
  destinationTestimonialPath,
  whatsappUrl,
  getPackageListingUrl,
  redirectionEnabled,
  decodeURIParam,
  hlpCommon,
  hotelSearchUrl,
  bookingDetailUrl,
  placesToVisit,
  getFiltersParams,
  pageLayout,
  // rlpPageLayout,
  cityBlockCommon,
  thingsToDo,
  mapInformation,
  banner,
  cityBlockTestimonials,
  pdpTestimonials,
  plpFooterLinks,
  pdpFooterLinks,
  faqs,
  recentPackages,
  howToReach,
  bestTimeToVisit,
  essentialInfo,
  entryFeesTimingsTips,
  rtripPath,
  quoteDetailPath,
  compareQuotesPath,
  vouchersPath,
  editTravelInfoPath,
  itineraryPath,
  preferencesPageUrl,
  tripQuotesPath,
  quoteCommentsPath,
  bookNowUrl,
  rejectQuoteUrl,
  reactivateQuoteUrl,
  hotelStatusChangeUrl,
  requestCallbackUrl,
  preDefinedMessagePath,
  downloadQuoteUrl,
  updateQuoteStatsUrl,
  requestMoreQuotesPath,
  discountOffers,
  applyDiscountOffer,
  removeDiscountOffer,
  updateDiscountOffer,
  appliedOffer,
  allTripsUrl,
  cancelBookingUrl,
  reactivateRequestUrl,
  sendActivationMailPath,
  rtripConstantsPath,
  chatKeysUrl,
  channelKeysUrl,
  commentsHistoryUrl,
  commentCreateUrl,
  notificationKeysUrl,
  notificationsPath,
  notificationsReadPath,
  postBookingFeedbackPath,
  postTripFeedbackPath,
  iosDeepLink,
  getAppSchemeUrl,
  testimonialsInfo,
  preferenceOptionsPath,
  updatePreferencesPath,
  updateContactInfoPath,
  securityTokenPath,
  getFlightDetailsUrl,
  replaceUniqueAndSecretKeys,
  destinationByDuration,
  googleAuthUrl,
  facebookAuthUrl,
  postConversionUrl,
  invoiceStatusUrl
};
