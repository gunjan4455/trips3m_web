require("source-map-support").install();
exports.ids = ["amp-package-detail"];
exports.modules = {

/***/ "./amp/helpers/Action.js":
/*!*******************************!*\
  !*** ./amp/helpers/Action.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ON_ATTRIBUTE = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ON_ATTRIBUTE = 'customAmpEvent';
exports.ON_ATTRIBUTE = ON_ATTRIBUTE;

const Action = ({
  children,
  events
}) => {
  const eventString = Object.entries(events).reduce((entireEventString, [eventName, eventActions], eventIndex) => {
    const actionString = eventActions.reduce((entireActionString, nextAction, actionIndex) => `${entireActionString}${actionIndex > 0 ? ',' : ''}${nextAction}`, '');
    return `${entireEventString}${eventIndex > 0 ? ';' : ''}${eventName}:${actionString}`;
  }, '');
  return children({
    [ON_ATTRIBUTE]: eventString
  });
};

Action.propTypes = {
  children: _propTypes.default.func.isRequired,
  events: _propTypes.default.objectOf(_propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired).isRequired
};
var _default = Action;
exports.default = _default;

/***/ }),

/***/ "./amp/helpers/Icon/IconMappings.js":
/*!******************************************!*\
  !*** ./amp/helpers/Icon/IconMappings.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const IconsMapping = {
  CabTransfer: 'CabTransfer',
  Drinks: 'DrinkIcon',
  Flight: 'FlightIcon',
  GooglePlay: 'GooglePlay',
  AppStore: 'AppStore',
  Meal: 'Meal',
  TTlogoSecondary: 'TTlogoSecondary',
  HouseBoat: 'HouseBoatIcon',
  SortIcon: 'SortIcon',
  FilterIcon: 'FilterIcon',
  IndianIcon: 'IndianIcon',
  InternationalIcon: 'InternationalIcon',
  IllusAgent: 'IllusAgent',
  IllusMoneySafe: 'IllusMoneySafe',
  IllusSupport: 'IllusSupport',
  IllusDestination: 'IllusDestination',
  LookingIcon: 'LookingIcon',
  CustomPackage: 'CustomPackage',
  ChatIcon: 'ChatIcon',
  ChatIconWhite: 'ChatIconWhite',
  CallUs: 'CallUs',
  CallBackIcon: 'CallBackIcon',
  Confusion: 'Confusion',
  Help: 'Help',
  FBIcon: 'FBIcon',
  GoogleIcon: 'GoogleIcon',
  LockIcon: 'LockIcon',
  TicketsIcon: 'TicketsIcon',
  ArrowNext: 'ArrowNext',
  CalendarIcon: 'CalendarIcon',
  BudgetIcon: 'BudgetIcon',
  CabIconFront: 'CabIconFront',
  NextIcon: 'NextIcon',
  CloseDark: 'CloseDark',
  IllusRequestCallback: 'IllusRequestCallback',
  Illus404: 'Illus404',
  IllusDestinationsOld: 'IllusDestinationsOld',
  IllusDestinations: 'IllusDestinations',
  IllusQualityCheck: 'IllusQualityCheck',
  IllusForgotPassword: 'IllusForgotPassword',
  IllusThanksRequest: 'IllusThanksRequest',
  AllTrips: 'AllTrips',
  Weekendmeal: 'Meal',
  Trekking: 'TrekkingIcon',
  Rafting: 'RaftingIcon',
  Paragliding: 'ParaIcon',
  Rockclimbing: 'RockClimbingIcon',
  Flyingfox: 'FlyingFoxIcon',
  Repelling: 'RepellingIcon',
  Bonfire: 'BonFireIcon',
  Music: 'MusicIcon',
  Dj: 'DJIcon',
  Jeepsafari: 'JeepIcon',
  Swimming: 'SwimmingPoolIcon',
  Photography: 'CameraIcon',
  Deluzeacbus: 'BusIcon',
  Tempotraveler: 'MinIBusIcon',
  Sharedcoach: 'BusIcon',
  Transport: 'MinIBusIcon',
  Luxurycamp: 'CampIcon',
  Eveningsnack: 'EveningSnacksIcon',
  Jumping: 'SkyDvieIcon',
  Prasailing: 'ParaSellingicon',
  Livemusic: 'MusicIcon',
  MealPlanforHotel: 'Meal',
  Meals: 'Meal',
  Hotel: 'HotelIcon',
  Sightseeing: 'SightseeingIcon',
  Cab: 'CabIconFront',
  SharedCoach: 'CabTransfer',
  Complimentarydrinks: 'DrinkIcon',
  Flights: 'FlightIcon',
  Houseboat: 'HouseBoatIcon',
  Cruise: 'CruiseIcon',
  JetSkiTransfer: 'JetSkiIcon',
  Safari: 'SafariIcon',
  Watersports: 'WaterActivities',
  Adventure: 'Adventure',
  Visa: 'VisaIcon',
  FerryTransfer: 'FerriIcon',
  Cake: 'CakeIcon',
  FloralDecoration: 'FloralDecorationIcon',
  Campstay: 'CampIcon',
  Entrytickets: 'TicketsIcon',
  HomeStay: 'HotelIcon',
  JeepSafari: 'JeepIcon',
  TreeHouse: 'TreeHouseIcon',
  Disneyland: 'DisneyLandIcon',
  ReligiousTour: 'ReligiousIcon',
  Transfer: 'CabTransfer',
  Simcard: 'SimCardIcon',
  CloseWhite: 'CloseWhite',
  NotificationBell: 'NotificationBell',
  ShareIcon: 'ShareIcon',
  PackageIcon: 'PackageIcon',
  CompareIcon2: 'CompareIcon2',
  CompareIconWhite: 'CompareIconWhite',
  Uniquerequirements: 'Uniquerequirements',
  Envelope: 'Envelope',
  ThankYouTick: 'ThankYouTick',
  Default: 'DefaultIcon',
  Activities: 'TrekkingIcon',
  AdoutDestinationIcon: 'AdoutDestinationIcon',
  AgentIcon: 'AgentIcon',
  AndroidIcon: 'AndroidIcon',
  AttachmentIcon: 'AttachmentIcon',
  Autumn: 'Autumn',
  BackIcon: 'BackIcon',
  Back2IconWhite: 'Back2IconWhite',
  BackTopArrow: 'BackTopArrow',
  BeachIconGrey: 'BeachIconGrey',
  BudgetIconNew: 'BudgetIconNew',
  BusIllus: 'BusIllus',
  CabIconFrontGrey: 'CabIconFrontGrey',
  CallUsWhite: 'CallUsWhite',
  CallUsWhiteFill: 'CallUsWhiteFill',
  Clock: 'Clock',
  ComparePackage: 'ComparePackage',
  CustomisedPackages: 'CustomisedPackages',
  DefaultIcon: 'DefaultIcon',
  DurationIcon: 'DurationIcon',
  EmiIcon: 'EmiIcon',
  ExclusionIcon: 'ExclusionIcon',
  Ferrytransfer: 'Ferrytransfer',
  FilterIconWhite: 'FilterIconWhite',
  Friends: 'Friends',
  GymIcon: 'GymIcon',
  HalfStar: 'HalfStar',
  HillStation: 'HillStationIcon',
  HillStationIcon: 'HillStationIcon',
  HillStationIconGrey: 'HillStationIconGrey',
  History: 'History',
  HotelEmptyState: 'HotelEmptyState',
  InclusionIcon: 'InclusionIcon',
  IndianIconGrey: 'IndianIconGrey',
  IOS: 'IOS',
  KeyboardActive: 'KeyboardActive',
  KeyboardInactive: 'KeyboardInactive',
  LinkedIn: 'LinkedIn',
  LockWhite: 'LockWhite',
  LoveIcon: 'LoveIcon',
  MailIconWhite: 'MailIconWhite',
  MessageIconNew: 'MessageIconNew',
  MobileIcon: 'MobileIcon',
  Monsoon: 'Monsoon',
  MountainIcon: 'MountainIcon',
  Nature: 'NatureIcon',
  NatureIcon: 'NatureIcon',
  NatureIconGrey: 'NatureIconGrey',
  NotificationIcon: 'NotificationIcon',
  PhoneIconWhite: 'PhoneIconWhite',
  PriceIcon: 'PriceIcon',
  Religious: 'ReligiousIcon',
  FriendsAndGroups: 'ReligiousIcon',
  RestaurantIcon: 'RestaurantIcon',
  RoomServiceIcon: 'RoomServiceIcon',
  SearchBlack: 'SearchBlack',
  Ship: 'Ship',
  StatusCrossIcon: 'StatusCrossIcon',
  StatusSuccessIcon: 'StatusSuccessIcon',
  StepArrow: 'StepArrow',
  Summer: 'Summer',
  TaxiCab: 'TaxiCab',
  Train: 'Train',
  TTIcon: 'TTIcon',
  TwitterGrey: 'TwitterGrey',
  Visa2: 'Visa',
  WaterActivities: 'WaterActivities',
  WaterActivitiesGrey: 'WaterActivitiesGrey',
  WeatherIcon: 'WeatherIcon',
  WifiIcon: 'WifiIcon',
  Winter: 'Winter',
  DiamondIcon: 'DiamondIcon',
  WebsiteIconNew: 'WebsiteIconNew',
  AirConditioningIcon: 'AirConditioningIcon',
  Bar: 'BarIcon',
  Beachaccess: 'BeachAccessIcon',
  FreeBreakfast: 'BreakfastIconNew',
  BusinessCenter: 'BusinessCentreIcon',
  HChildFriendly: 'ChildFriendlyIcon',
  EmailIcon: 'EmailIcon',
  Golfcourse: 'GolfIcon',
  Fitnesscenter: 'GymIconNew',
  HotTub: 'HotTubIcon',
  Kitcheninsomerooms: 'KitchenIcon',
  LaundryService: 'LaundryIcon',
  LocationIcon: 'LocationIcon',
  Freeparking: 'ParkingIcon',
  PetFriendly: 'PetFriendlyIcon',
  PhoneIcon: 'PhoneIcon',
  OutdoorPool: 'PoolIcon',
  Restaurant: 'RestaurantIconNew',
  RoomService: 'RoomServiceIconNew',
  AirportShuttle: 'ShuttleIcon',
  Smokefree: 'SmokeFreeIcon',
  Spa: 'SpaIcon',
  WalletIcon: 'WalletIcon',
  TTRecommendedIcon: 'TTRecommendedIcon',
  BulbIcon: 'BulbIcon',
  WhatsAppIcon: 'WhatsAppIcon',
  TajMahalIcon: 'TajMahalIcon',
  AdvantureIconNew: 'AdvantureIconNew',
  PlusInclusionIcon: 'PlusInclusionIcon',
  IntentExplore: 'IntentExplore',
  WhiteShareIcon: 'ShareWhite',
  LandlineIcon: 'LandlineIcon',
  DownloadVoucherIcon: 'DownloadVoucherIcon',
  EditPreferencesIcon: 'EditPreferencesIcon',
  HeadphoneIcon: 'HeadphoneIcon',
  HeadphoneIconWhite: 'HeadphoneIconWhite',
  ShareBlack: 'ShareBlack',
  NotificationIconWhite: 'NotificationIconWhite',
  DownloadBlack: 'DownloadBlack',
  DownloadBlue: 'DownloadBlue',
  IllusProgressB: 'IllusProgressB',
  GmailIcon: 'GmailIcon',
  DateDecided: 'DateDecided',
  DateNotDecided: 'DateNotDecided',
  BudgetLow: 'BudgetLow',
  BudgetMedium: 'BudgetMedium',
  BudgetHigh: 'BudgetHigh',
  Travelers: 'Travelers',
  Contact: 'Contact',
  Destination: 'Destination',
  LeftRedArrow: 'LeftRedArrow',
  RightWhiteArrow: 'RightWhiteArrow',
  DisabledArrowLeft: 'DisabledArrowLeft',
  HotelFilled: 'HotelFilled',
  FlightFilled: 'FlightFilled',
  CabsFilled: 'CabsFilled',
  BudgetMin: 'BudgetMin',
  Tick: 'Tick',
  PartPay: 'PartPay',
  // QDP new Icons
  RequestIcon: 'RequestIcon',
  PreferencesIcon: 'PreferencesIcon',
  InclusionsNewIcon: 'InclusionsNewIcon',
  ExclusionsNewIcon: 'ExclusionsNewIcon',
  TnCIcon: 'TnCIcon',
  InfoBlackIcon: 'InfoBlackIcon',
  ItineraryIcon: 'ItineraryIcon',
  TravelInfoIcon: 'TravelInfoIcon',
  SuccessIllustration: 'SuccessIllustration',
  BriefcaseWhiteIcon: 'BriefcaseWhiteIcon',
  FamilyWhiteIcon: 'FamilyWhiteIcon',
  HoneymoonWhiteIcon: 'HoneymoonWhiteIcon',
  TriangleIcon: 'TriangleIcon',
  ProgressIcon: 'ProgressIcon',
  ProcessedIcon: 'ProcessedIcon',
  EnvelopeIcon: 'EnvelopeIcon',
  PlayIcon: 'PlayIcon',
  CompareIcon: 'CompareIcon',
  ChatIconGrey: 'ChatIconGrey',
  LuxuryPackageIcon: 'LuxuryPackageIcon',
  BlackShareIcon: 'Black-share-icon',
  QuotesReceivedIcon: 'QuotesReceivedIcon',
  NoQuotesReceivedIcon: 'NoQuotesReceivedIcon',
  OutlineStarIcon: 'OutlineStarIcon',
  FillStarIcon: 'FillStarIcon',
  QualityQuotesIcon: 'QualityQuotesIcon',
  RightGreyArrow: 'RightGreyArrow',
  CloseIconWhite: 'CloseIconWhite',
  CrossRed: 'CrossRed',
  GreenTickInclusion: 'GreenTickInclusion',
  ExclusionsRed: 'ExclusionsRed',
  PriceRupee: 'PriceRupee',
  WaveIcon: 'WaveIcon',
  MktAgents: 'MktAgents',
  MktDestinations: 'MktDestinations',
  MktVerified: 'MktVerified',
  MktQualityControl: 'MktQualityControl',
  MktSupport: 'MktSupport',
  MktSelectPackage: 'MktSelectPackage',
  MktQuotes: 'MktQuotes',
  MktTravelers: 'MktTravelers',
  ProfileIcon2: 'ProfileIcon2',
  //amp icons
  IllusTraveler: 'IllusTraveler',
  PdpQuotes: 'PdpQuotes',
  PdpSelectPackage: 'PdpSelectPackage',
  DownArrow: 'DownArrow',
  StarIcon: 'StarIcon',
  StarIconEmpty: 'StarIconEmpty',
  Back2Icon: 'Back2Icon',
  InfoIcon: 'InfoIcon',
  SearchIcon: 'SearchIcon',
  TTlogo: 'TTlogo',
  ShareWhite: 'ShareWhite',
  ProfileIcon: 'ProfileIcon',
  HomeIcon: 'HomeIcon',
  FamilyIcon: 'FamilyIcon',
  WorkIcon: 'WorkIcon',
  OffersIcon: 'OffersIcon',
  BlogIcon: 'BlogIcon',
  TestimonailsIcon: 'TestimonailsIcon',
  FAQIcon: 'FAQIcon',
  ContactIcon: 'ContactIcon',
  VactionIcon: 'VactionIcon',
  HoneymoonPackages: 'HoneymoonPackages',
  SeasonalIcon: 'SeasonalIcon',
  InternationalIconBlack: 'InternationalIconBlack',
  LocationMarkerIcon: 'LocationMarkerIcon',
  FBIconWhite: 'FBIconWhite',
  Twitter: 'Twitter',
  PinterestIcon: 'PinterestIcon',
  GoogleIconWhite: 'GoogleIconWhite',
  Instagram: 'Instagram',
  BlueDownArrow: 'BlueDownArrow',
  GreenTick: 'GreenTick'
};
var _default = IconsMapping; // const ampIconMappings = {
//   IllusTraveler: 'IllusTraveler',
//   PdpQuotes: 'PdpQuotes',
//   PdpSelectPackage: 'PdpSelectPackage',
//   DownArrow: 'DownArrow',
//   StarIcon: 'StarIcon',
//   StarIconEmpty: 'StarIconEmpty',
//   Back2Icon: 'Back2Icon',
//   InfoIcon: 'InfoIcon',
//   SearchIcon: 'SearchIcon',
//   TTlogo: 'TTlogo',
//   ShareWhite: 'ShareWhite',
//   ProfileIcon: 'ProfileIcon',
//   HomeIcon: 'HomeIcon',
//   FamilyIcon: 'FamilyIcon',
//   WorkIcon: 'WorkIcon',
//   OffersIcon: 'OffersIcon',
//   BlogIcon: 'BlogIcon',
//   TestimonailsIcon: 'TestimonailsIcon',
//   FAQIcon: 'FAQIcon',
//   ContactIcon: 'ContactIcon',
//   VactionIcon: 'VactionIcon',
//   HoneymoonPackages: 'HoneymoonPackages',
//   SeasonalIcon: 'SeasonalIcon',
//   InternationalIconBlack: 'InternationalIconBlack',
//   LocationMarkerIcon: 'LocationMarkerIcon',
//   FBIconWhite: 'FBIconWhite',
//   Twitter: 'Twitter',
//   PinterestIcon: 'PinterestIcon',
//   GoogleIconWhite: 'GoogleIconWhite',
//   Instagram: 'Instagram',
//   BlueDownArrow: 'BlueDownArrow',
//   GreenTick: 'GreenTick',
// };

exports.default = _default;

/***/ }),

/***/ "./amp/helpers/seoHelpers.js":
/*!***********************************!*\
  !*** ./amp/helpers/seoHelpers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMetaTags = exports.createHelmetBanner = exports.createHelmet = exports.getCanonical = exports.getDescription = exports.getTitle = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const getTitle = (title, metaTags) => {
  const tags = metaTags;
  let newTitle = title;

  if (typeof tags !== 'undefined' && tags.length !== 0) {
    const titleList = tags.filter(tag => tag.property === 'og:title');
    newTitle = titleList.length > 0 && titleList[0].content;
  }

  return newTitle;
};

exports.getTitle = getTitle;

const getDescription = (description, metaTags) => {
  const tags = metaTags;
  let newDescription = description;

  if (typeof tags !== 'undefined' && tags.length !== 0) {
    const descriptionList = tags.filter(tag => tag.name && tag.name.toLowerCase() === 'description' || tag.property && tag.property.toLowerCase() === 'og:description');
    newDescription = descriptionList.length ? descriptionList[0].content : '';
  }

  return newDescription;
};

exports.getDescription = getDescription;

const getCanonical = name => {
  if (name[name.length - 1] === '/') {
    name = name.substring(0, name.lastIndexOf('/'));
  }

  return `https://traveltriangle.com${name}`;
};

exports.getCanonical = getCanonical;

const createHelmet = (tags = [], canonicalUrl, pathname) => {
  let hasDescription = false;
  const helmets = tags.map((tag, i) => {
    if (tag.keyword === 'title' || tag.keyword === 'og:title') {
      return _react.default.createElement("title", null, tag.value ? tag.value : '');
    }

    if (tag.keyword === 'description') {
      hasDescription = true;
      return _react.default.createElement("meta", {
        name: tag.keyword,
        content: tag.value,
        key: i
      });
    }

    if (tag.keyword === 'next' || tag.keyword === 'prev') {
      return _react.default.createElement("link", {
        rel: tag.keyword,
        content: `https://traveltriangle.com${tag.value}`,
        key: i
      });
    }

    return _react.default.createElement("meta", {
      name: tag.keyword,
      content: tag.value,
      key: i
    });
  });

  if (!hasDescription) {
    helmets.push(_react.default.createElement("meta", {
      name: "description",
      content: ""
    }));
  }

  helmets.push(_react.default.createElement("link", {
    rel: "canonical",
    href: canonicalUrl ? getCanonical(canonicalUrl) : getCanonical(pathname)
  }));
  return helmets;
}; // TODO: Method refactor after BE work
// Refactor createHelmetBanner and createHelmet method to be single method
// after getting fix all the values from BE as content and property.


exports.createHelmet = createHelmet;

const createHelmetBanner = (tags = [], canonicalUrl, pathname) => {
  const helmets = tags.map((tag, i) => {
    if (tag.name === 'title') {
      return _react.default.createElement("title", null, tag.content ? tag.content : '');
    }

    if (tag.name === 'description') {
      return _react.default.createElement("meta", {
        name: tag.name,
        content: tag.content,
        key: i
      });
    }

    if (tag.name === 'next' || tag.name === 'prev') {
      return;
    }

    return _react.default.createElement("meta", {
      property: tag.property,
      content: tag.content,
      key: i
    });
  });
  helmets.push(_react.default.createElement("link", {
    key: "canonical",
    rel: "canonical",
    href: canonicalUrl ? getCanonical(canonicalUrl) : getCanonical(pathname)
  }));
  return helmets;
};

exports.createHelmetBanner = createHelmetBanner;

const renderMetaTags = (metaTagsArray, isAmp) => {
  const metaTagsWithoutIosUrl = metaTagsArray.filter(item => !(item.property && (item.property.toLowerCase().includes('al:ios:url') || item.property.toLowerCase().includes('al:android:url') || item.property.toLowerCase().includes('description') || item.property.toLowerCase() === 'title') || item.name && (item.name.toLowerCase().includes('description') || item.name.toLowerCase() === 'title' || !isAmp && item.name.toLowerCase() === 'robots')));

  if (metaTagsWithoutIosUrl) {
    return metaTagsWithoutIosUrl.map((metaTag, index) => _react.default.createElement("meta", _extends({}, metaTag, {
      key: `meta_${index}`
    })));
  }

  return '';
};

exports.renderMetaTags = renderMetaTags;

/***/ }),

/***/ "./amp/helpers/utils.js":
/*!******************************!*\
  !*** ./amp/helpers/utils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTravelerReviewTravCount = getTravelerReviewTravCount;
exports.getTravelerReviewDate = getTravelerReviewDate;
exports.getTravelerReviewDuration = getTravelerReviewDuration;
exports.getTravelerReviewCities = getTravelerReviewCities;
exports.getListingItemsHeading = void 0;

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

const getListingItemsHeading = (title, destination, isMultiDestination = false, destinations = []) => {
  if (destination === 'tt_seasonal') {
    return title;
  }

  return `${title} ${destination ? `for ${isMultiDestination ? (0, _parsers.parseDestinationsToShow)(destinations) : (0, _parsers.parseDestinationToShow)(destination)}` : ''}`;
};

exports.getListingItemsHeading = getListingItemsHeading;

function getTravelerReviewTravCount(travCount) {
  if (travCount && travCount > 1) {
    return ' with ' + (travCount - 1 > 1 ? travCount - 1 + ' others' : travCount - 1 + ' other');
  }

  return '';
}

;

function getTravelerReviewDate(date) {
  if (!date) {
    return '';
  }

  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const currentDate = new Date(date);
  return ' on ' + currentDate.getDate() + ' ' + monthsArr[currentDate.getMonth()] + ', ' + currentDate.getFullYear();
}

;

function getTravelerReviewDuration(days) {
  if (days) {
    return ' for ' + (days > 1 ? days + ' days' : days + ' day');
  }
}

;

function getTravelerReviewCities(cityArr) {
  if (cityArr && cityArr.length) {
    return 'to ' + (cityArr.length > 1 ? cityArr.join(', ') : cityArr[0]);
  }

  return '';
}

;

/***/ }),

/***/ "./amp/modules/Faq/Faq.js":
/*!********************************!*\
  !*** ./amp/modules/Faq/Faq.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

__webpack_require__(/*! ./Faq.scss */ "./amp/modules/Faq/Faq.scss");

var _utils = __webpack_require__(/*! amp/helpers/utils */ "./amp/helpers/utils.js");

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const parser = new _htmlToReact.Parser();
let Faq = class Faq extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      visible: 6
    }, this._loadMore = () => {
      this.setState(prevState => {
        return {
          visible: prevState.visible + 3
        };
      });
    }, _temp;
  }

  render() {
    const {
      faqs,
      destination,
      title,
      isMultiDestination,
      destinations
    } = this.props;

    if (!faqs.length) {
      return null;
    }

    const firstFaqs = faqs && faqs.length > 6 ? faqs.slice(0, 6) : faqs;
    const secondFaqs = firstFaqs.length ? faqs.slice(6, faqs.length) : [];
    return _react.default.createElement("div", {
      className: "row row- pl8 pr8 pt15 pb15 sbcw",
      itemScope: true,
      itemType: "http://schema.org/FAQPage"
    }, _react.default.createElement("amp-state", {
      id: "faq"
    }, _react.default.createElement("script", {
      type: "application/json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          showFaqIndex: 6
        })
      }
    })), _react.default.createElement("h2", {
      className: "heading-common-center faq-heading"
    }, (0, _utils.getListingItemsHeading)(title, destination.name, isMultiDestination, destinations), " "), _react.default.createElement("div", {
      className: "row row- faq-box"
    }, firstFaqs.map((faq, index) => _react.default.createElement("div", {
      key: faq.id,
      className: "faq-element at_faq_questions show",
      itemType: "http://schema.org/Question",
      itemProp: "mainEntity",
      itemScope: true,
      id: index === 1 ? 'faq_box-triggerlink' : ''
    }, _react.default.createElement("input", {
      type: "radio",
      name: "faq-radio",
      id: `faq_${faq.id}`,
      className: "faq-input"
    }), _react.default.createElement("label", {
      htmlFor: `faq_${faq.id}`
    }, _react.default.createElement("div", {
      className: "faq-question"
    }, _react.default.createElement("span", {
      className: "question-mark absolute l0 absolute-center-v iblock"
    }), _react.default.createElement("h3", {
      className: "f14p fw7",
      itemProp: "name"
    }, faq.question), _react.default.createElement("span", {
      className: "arrow-down smooth absolute r0 iblock"
    })), _react.default.createElement("div", {
      className: "faq-answer",
      itemType: "http://schema.org/Answer",
      itemProp: "acceptedAnswer",
      itemScope: true
    }, _react.default.createElement("div", {
      className: "f14p fw4",
      itemProp: "text"
    }, parser.parse(faq.answer)))))), secondFaqs.map((faq, index) => _react.default.createElement("div", {
      key: faq.id,
      className: "faq-element at_faq_questions",
      "data-amp-bind-class": `showSecondFaqs ? 'faq-element at_faq_questions show' : 'faq-element at_faq_questions'`,
      itemType: "http://schema.org/Question",
      itemProp: "mainEntity",
      itemScope: true
    }, _react.default.createElement("input", {
      type: "radio",
      name: "faq-radio",
      id: `faq_${faq.id}`,
      className: "faq-input"
    }), _react.default.createElement("label", {
      htmlFor: `faq_${faq.id}`
    }, _react.default.createElement("div", {
      className: "faq-question"
    }, _react.default.createElement("span", {
      className: "question-mark absolute l0 absolute-center-v iblock"
    }), _react.default.createElement("h3", {
      className: "f14p fw7",
      itemProp: "name"
    }, faq.question), _react.default.createElement("span", {
      className: "arrow-down smooth absolute r0 iblock"
    })), _react.default.createElement("div", {
      className: "faq-answer",
      itemType: "http://schema.org/Answer",
      itemProp: "acceptedAnswer",
      itemScope: true
    }, _react.default.createElement("div", {
      className: "f14p fw4",
      itemProp: "text"
    }, parser.parse(faq.answer)))))), this.state.visible < faqs.length ? _react.default.createElement("div", {
      className: "faqLoadMoreContainer relative flex alignCenter justifyCenter p8 pl0 pr0",
      "data-amp-bind-class": `showSecondFaqs ? 'hide' : 'faqLoadMoreContainer relative flex alignCenter justifyCenter p8 pl0 pr0'`
    }, _react.default.createElement(_Action.default, {
      events: {
        tap: ['AMP.setState({showSecondFaqs : true})']
      }
    }, props => _react.default.createElement("button", _extends({}, props, {
      className: "z2 btn-sec-load wfull pl64 pr64"
    }), "Load More"))) : null));
  }

};
Faq.propTypes = {
  faqs: _propTypes.default.array,
  destination: _propTypes.default.object,
  title: _propTypes.default.string,
  isMultiDestination: _propTypes.default.bool,
  destinations: _propTypes.default.array
};
Faq.defaultProps = {
  faqs: [],
  destination: null,
  title: 'FAQs',
  isMultiDestination: false,
  destinations: []
};
var _default = Faq;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/Faq/Faq.scss":
/*!**********************************!*\
  !*** ./amp/modules/Faq/Faq.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"faq-box": "_DPE78",
	"faq-element": "_2ujhW",
	"show": "_2ZzYy",
	"faq-input": "_20aNQ",
	"faq-question": "_10Vc7",
	"faq-answer": "_3DKYP",
	"question-mark": "_3iWHB",
	"arrow-down": "_34H2G",
	"faqLoadMoreContainer": "_24eaH",
	"heading-common-center": "_1_qX8",
	"faq-heading": "_3iQjH",
	"btn-sec-load": "_37lXy"
};

/***/ }),

/***/ "./amp/modules/common/AgentRating.js":
/*!*******************************************!*\
  !*** ./amp/modules/common/AgentRating.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./AgentRating.scss */ "./amp/modules/common/AgentRating.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStars(starNum, keyType, starClass) {
  let i = 0;
  const stars = [];

  while (i < starNum) {
    stars.push(_react.default.createElement("li", {
      className: `${starClass} rating-span relative iblock`,
      key: keyType + i
    }));
    i += 1;
  }

  return stars;
}

const AgentRating = ({
  agentRating,
  id
}) => {
  const stars = [];
  const ratingBarRange = 5;
  const truncatedRating = Math.trunc(agentRating);
  const fractionalRating = parseFloat((agentRating - truncatedRating).toFixed(1));
  let fullStarCount = 0;
  let halfStarCount = 0;

  if (fractionalRating === 0.0) {
    fullStarCount = agentRating;
  } else if (fractionalRating <= 0.5) {
    fullStarCount = truncatedRating;
    halfStarCount = 1;
  } else {
    fullStarCount = truncatedRating + 1;
  }

  const emptyStarCount = ratingBarRange - (fullStarCount + halfStarCount);
  stars.push(getStars(fullStarCount, `${id}_full_star`, 'fullStarClass'));
  stars.push(getStars(halfStarCount, `${id}_half_star`, 'halfStarClass'));
  stars.push(getStars(emptyStarCount, `${id}_empty_star`, 'emptyStarClass'));
  return _react.default.createElement("div", {
    className: "rating-stars iblock m0 at_ratingstars"
  }, stars);
};

AgentRating.propTypes = {
  agentRating: _propTypes.default.number,
  id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.stringg])
};
AgentRating.defaultProps = {
  agentRating: 4,
  id: 'unique_identifier'
};
var _default = AgentRating;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/AgentRating.scss":
/*!*********************************************!*\
  !*** ./amp/modules/common/AgentRating.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"rating-stars": "__7rMV",
	"fullStarClass": "_2c98c",
	"halfStarClass": "_3qwql",
	"emptyStarClass": "_1Z1c1"
};

/***/ }),

/***/ "./amp/modules/common/Breadcrumb/Breadcrumb.scss":
/*!*******************************************************!*\
  !*** ./amp/modules/common/Breadcrumb/Breadcrumb.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"breadcrumb-list": "_WqUTI"
};

/***/ }),

/***/ "./amp/modules/common/Breadcrumb/BreadcrumbListing.js":
/*!************************************************************!*\
  !*** ./amp/modules/common/Breadcrumb/BreadcrumbListing.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

__webpack_require__(/*! ./Breadcrumb.scss */ "./amp/modules/common/Breadcrumb/Breadcrumb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BreadcrumbListing = ({
  breadcrumbs
}) => _react.default.createElement("div", {
  className: "row row- p8 sbc5"
}, _react.default.createElement("ol", {
  className: "breadcrumb-list m0 p0",
  itemScope: true,
  itemType: "https://schema.org/BreadcrumbList"
}, breadcrumbs.map((breadcrumb, index, array) => _react.default.createElement("li", {
  key: `${breadcrumb.name}_${index}`,
  itemProp: "itemListElement",
  itemScope: true,
  itemType: "https://schema.org/ListItem"
}, breadcrumb.url ? index === breadcrumbs.length - 1 ? _react.default.createElement(_reactRouter.Link, {
  to: breadcrumb.url,
  itemProp: "item"
}, _react.default.createElement("span", {
  itemProp: "name"
}, breadcrumb.name)) : _react.default.createElement(_reactRouter.Link, {
  to: breadcrumb.url,
  itemProp: "item",
  target: "_blank"
}, _react.default.createElement("span", {
  itemProp: "name"
}, breadcrumb.name)) : _react.default.createElement("span", {
  itemProp: "name"
}, breadcrumb.name), _react.default.createElement("meta", {
  itemProp: "position",
  content: index + 1
})))));

BreadcrumbListing.propTypes = {
  breadcrumbs: _propTypes.default.array.isRequired
};
var _default = BreadcrumbListing;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/Highlights.js":
/*!******************************************!*\
  !*** ./amp/modules/common/Highlights.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./Highlights.scss */ "./amp/modules/common/Highlights.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Highlights = ({
  list
}) => {
  if (!list.length) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "clearfix mb8"
  }, _react.default.createElement("div", {
    className: "clearfix p15 sbcw"
  }, _react.default.createElement("h2", {
    className: "f16 fw9 m0 mb24"
  }, "Highlights"), _react.default.createElement("ul", {
    className: "highlightsList"
  }, list.map((l, i) => _react.default.createElement("li", {
    key: i
  }, _react.default.createElement("span", {
    className: "block"
  }), l.text)))));
};

Highlights.propTypes = {
  list: _propTypes.default.array.isRequired
};
var _default = Highlights;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/Highlights.scss":
/*!********************************************!*\
  !*** ./amp/modules/common/Highlights.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"highlightsList": "_2SWUO"
};

/***/ }),

/***/ "./amp/modules/common/IncExclusion/Exclusion.js":
/*!******************************************************!*\
  !*** ./amp/modules/common/IncExclusion/Exclusion.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./Inclusion.scss */ "./amp/modules/common/IncExclusion/Inclusion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Exclusion = ({
  list
}) => {
  const elements = list.map((item, i) => _react.default.createElement("li", {
    key: i
  }, item));
  return _react.default.createElement("ul", {
    className: "p0 m0 incl-excl-list excl-list"
  }, elements);
};

Exclusion.propTypes = {
  list: _propTypes.default.array
};
Exclusion.defaultProps = {
  list: []
};
var _default = Exclusion;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/IncExclusion/IncExclusion.js":
/*!*********************************************************!*\
  !*** ./amp/modules/common/IncExclusion/IncExclusion.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Inclusion = _interopRequireDefault(__webpack_require__(/*! ./Inclusion */ "./amp/modules/common/IncExclusion/Inclusion.js"));

var _Exclusion = _interopRequireDefault(__webpack_require__(/*! ./Exclusion */ "./amp/modules/common/IncExclusion/Exclusion.js"));

__webpack_require__(/*! ./IncExclusion.scss */ "./amp/modules/common/IncExclusion/IncExclusion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IncExclusion = ({
  inclusions,
  exclusions
}) => {
  if (!inclusions.length && !exclusions.length) {
    return _react.default.createElement("div", null);
  }

  return _react.default.createElement("div", {
    className: "row row- sbcw relative"
  }, _react.default.createElement("input", {
    type: "radio",
    name: "inc-exc-radio",
    className: "inc-exc-radio",
    id: "IncExcRadio1",
    defaultChecked: true
  }), _react.default.createElement("label", {
    htmlFor: "IncExcRadio1",
    className: "col-xs-12 pl0 pr0"
  }, _react.default.createElement("h2", {
    className: "inc-exc-button absolute t0 l0 ripple"
  }, _react.default.createElement("div", {
    className: "wave-dark"
  }), "Inclusions"), _react.default.createElement("div", {
    className: "inc-exc-data p15 pl24 pr24"
  }, _react.default.createElement(_Inclusion.default, {
    list: inclusions
  }))), _react.default.createElement("input", {
    type: "radio",
    name: "inc-exc-radio",
    className: "inc-exc-radio",
    id: "IncExcRadio2"
  }), _react.default.createElement("label", {
    htmlFor: "IncExcRadio2",
    className: "col-xs-12 pl0 pr0 second-tab"
  }, _react.default.createElement("h2", {
    className: "inc-exc-button absolute t0 r0 ripple"
  }, _react.default.createElement("div", {
    className: "wave-dark"
  }), "Exclusions"), _react.default.createElement("div", {
    className: "inc-exc-data p15 pl24 pr24"
  }, _react.default.createElement(_Exclusion.default, {
    list: exclusions
  }))));
};

IncExclusion.propTypes = {
  inclusions: _propTypes.default.array,
  exclusions: _propTypes.default.array
};
IncExclusion.defaultProps = {
  inclusions: [],
  exclusions: []
};
var _default = IncExclusion;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/IncExclusion/IncExclusion.scss":
/*!***********************************************************!*\
  !*** ./amp/modules/common/IncExclusion/IncExclusion.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"inc-exc-radio": "_5XTvT",
	"inc-exc-button": "_79RfK",
	"inc-exc-data": "_1hmTW",
	"second-tab": "_70Fwc"
};

/***/ }),

/***/ "./amp/modules/common/IncExclusion/Inclusion.js":
/*!******************************************************!*\
  !*** ./amp/modules/common/IncExclusion/Inclusion.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./Inclusion.scss */ "./amp/modules/common/IncExclusion/Inclusion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Inclusion = ({
  list
}) => {
  const elements = list.map((item, i) => _react.default.createElement("li", {
    key: i,
    id: i === 1 ? 'incexclusion_box-triggerlink' : ''
  }, item));
  return _react.default.createElement("ul", {
    className: "p0 m0 incl-excl-list"
  }, elements);
};

Inclusion.propTypes = {
  list: _propTypes.default.array
};
Inclusion.defaultProps = {
  list: []
};
var _default = Inclusion;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/IncExclusion/Inclusion.scss":
/*!********************************************************!*\
  !*** ./amp/modules/common/IncExclusion/Inclusion.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"incl-excl-list": "_2YIoG",
	"excl-list": "_1NRWj"
};

/***/ }),

/***/ "./amp/modules/common/InterLinking.js":
/*!********************************************!*\
  !*** ./amp/modules/common/InterLinking.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _chunk2 = _interopRequireDefault(__webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RenderLinks = ({
  url,
  name
}) => {
  return _react.default.createElement("a", {
    href: url,
    className: "nowrap pl15 pr15 pt8 pb8 sbc5 pfc3 f14 radius2 iblock  mr8"
  }, _react.default.createElement("span", {
    className: "iblock pt4 pb4"
  }, name));
};

const generateFooterLinks = footerLinkArr => {
  return _react.default.createElement("div", {
    className: "flex mb8"
  }, footerLinkArr.map(footerLink => {
    if (footerLink.hasOwnProperty('name')) {
      return _react.default.createElement(RenderLinks, {
        url: footerLink.url,
        name: footerLink.name
      });
    } else {
      return Object.values(footerLink).map(footer => {
        return _react.default.createElement(RenderLinks, {
          url: footer.link,
          name: footer.name
        });
      });
    }
  }));
};

const generateFooterLinkSection = footerLinkSection => {
  const footerLinks = footerLinkSection.footerLinks ? footerLinkSection.footerLinks : footerLinkSection.footer_links;
  const groupedArr = (0, _chunk2.default)(footerLinks, 5);
  return footerLinks && footerLinks.length ? _react.default.createElement("div", {
    className: "p15 sbcw mb8"
  }, _react.default.createElement("h3", {
    className: "f16 fw9 pfc3 mb15"
  }, footerLinkSection.name), _react.default.createElement("div", {
    className: "overflowXscroll swiper-full-width"
  }, groupedArr.length ? groupedArr.map(footerLinkArr => generateFooterLinks(footerLinkArr)) : null)) : null;
};

const InterLinking = ({
  footerLinks
}) => _react.default.createElement("div", null, footerLinks.map(footerLinkSection => generateFooterLinkSection(footerLinkSection)));

InterLinking.propTypes = {
  footerLinks: _propTypes.default.array.isRequired
};
RenderLinks.propTypes = {
  name: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired
};
var _default = InterLinking;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/ItineraryTags.js":
/*!*********************************************!*\
  !*** ./amp/modules/common/ItineraryTags.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItineraryTags = ({
  list,
  itineraryId,
  tagId
}) => {
  const categoryElements = list.map((value, key) => _react.default.createElement("li", {
    key: `category_${itineraryId}_${tagId}_${key}` // eslint-disable-line react/no-array-index-key
    ,
    className: "itinerary-tags-box-item"
  }, value));
  return _react.default.createElement("ul", {
    className: "list-style-no"
  }, categoryElements);
};

ItineraryTags.propTypes = {
  list: _propTypes.default.array,
  itineraryId: _propTypes.default.number.isRequired,
  tagId: _propTypes.default.number.isRequired
};
ItineraryTags.defaultProps = {
  list: []
};
var _default = ItineraryTags;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/ReadMoreByHeight.js":
/*!************************************************!*\
  !*** ./amp/modules/common/ReadMoreByHeight.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./readMoreByHeight.scss */ "./amp/modules/common/readMoreByHeight.scss");

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let ReadMoreByHeight = class ReadMoreByHeight extends _react.Component {
  constructor() {
    super();
    this.content = '';
  }

  componentWillMount() {
    const data = this.props.content.split('&lt;readmore&gt;');
    this.content = data[0] + data[1];
    this.content = this.content.replace('!important', '');
  }

  render() {
    const {
      maxHeight,
      content,
      heading,
      showTitle,
      hotelDisplayName
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", null, showTitle ? _react.default.createElement("h2", {
      className: "f16 pb0 m0 fwb mb15"
    }, heading, " ", hotelDisplayName ? `at ${hotelDisplayName}` : null) : null, _react.default.createElement("div", {
      className: `readMoreContent block relative pt8 readMoreByHeight`,
      "data-amp-bind-class": `expanded ? 'readMoreContent block relative pt8': 'readMoreContent block relative pt8 readMoreByHeight'`
    }, _react.default.createElement("span", {
      className: "block dynamicTextInherit pfc3 f14p"
    }, _react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: this.content
      }
    }))), _react.default.createElement(_Action.default, {
      events: {
        tap: [`AMP.setState({expanded:!expanded})`]
      }
    }, props => _react.default.createElement("button", _extends({
      className: "readMore-dropdown cursorP f14 pr15 flex relative alignCenter spaceBetween mt8  fw9"
    }, props), _react.default.createElement("span", {
      "data-amp-bind-text": "expanded ?'Read Less':' Read More'"
    }, "Read More"), _react.default.createElement("span", {
      "data-amp-bind-class": "expanded ? 'rotate180 downArrow relative block ' : 'rotate0 downArrow relative block '",
      className: "rotate0 downArrow relative block"
    })))));
  }

};
ReadMoreByHeight.propTypes = {
  content: _propTypes.default.string.isRequired,
  maxHeight: _propTypes.default.number,
  heading: _propTypes.default.string,
  showTitle: _propTypes.default.bool,
  hotelDisplayName: _propTypes.default.string
};
ReadMoreByHeight.defaultProps = {
  maxHeight: 83,
  showTitle: true
};
var _default = ReadMoreByHeight;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/SeoFooter.js":
/*!*****************************************!*\
  !*** ./amp/modules/common/SeoFooter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

__webpack_require__(/*! ./SeoFooter.scss */ "./amp/modules/common/SeoFooter.scss");

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let SeoFooter = class SeoFooter extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      selectedSeoFooterHeading: -1
    }, _temp;
  }

  render() {
    const {
      footerSections
    } = this.props;
    const {
      selectedSeoFooterHeading
    } = this.state;
    return _react.default.createElement("div", {
      className: "seo-footer-options"
    }, _react.default.createElement("div", {
      className: "tabsHeadings pbc3"
    }, _react.default.createElement("ul", {
      className: "tabsHeadingsMain flex m0 p0"
    }, footerSections.map((footerSection, i) => _react.default.createElement("li", {
      className: `alignCenter m0 ${i === selectedSeoFooterHeading ? 'selected-heading' : ''}`,
      key: footerSection.name
    }, _react.default.createElement(_Action.default, {
      events: {
        tap: [`AMP.setState({
                  showIndex : ${i}, footerSection${i} : !footerSection${i}
                  })`]
      }
    }, props => _react.default.createElement("button", _extends({
      className: "fw7 sfcw f14"
    }, props), footerSection.name))))), footerSections.map((footerSection, i) => _react.default.createElement("div", {
      className: "sbcw",
      "data-amp-bind-class": `showIndex == ${i} ? 'sbcw selected-content': 'sbcw'`
    }, _react.default.createElement("div", {
      className: "p15",
      "data-amp-bind-class": `footerSection${i} ? 'p15' : 'hide'`
    }, footerSection.footer_links.map(footerLink => _react.default.createElement(_reactRouter.Link, {
      className: "block pfc3 mb8",
      key: footerLink.url,
      to: footerLink.url
    }, footerLink.name)))))));
  }

};
SeoFooter.propTypes = {
  footerSections: _propTypes.default.array.isRequired
};
var _default = SeoFooter;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/SeoFooter.scss":
/*!*******************************************!*\
  !*** ./amp/modules/common/SeoFooter.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"seo-footer-options": "_2TXnf",
	"tabsHeadings": "_3q97P",
	"tabsHeadingsMain": "_1VpFP",
	"selected-content": "_3ICVt"
};

/***/ }),

/***/ "./amp/modules/common/YellowDot.js":
/*!*****************************************!*\
  !*** ./amp/modules/common/YellowDot.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let YellowDot = class YellowDot extends _react.default.Component {
  constructor(props) {
    super(props);

    this.getStyleObject = (top, left) => {
      return {
        top: top,
        left: left
      };
    };

    this.state = {
      isTooltipVisible: false,
      top: 0,
      left: 0
    };
  }

  render() {
    const {
      hoverData,
      dotBoxStyle,
      dotSmallBoxStyle,
      spinnerStyle
    } = this.props;
    const tooltipContainerState = this.state.isTooltipVisible ? 'flex' : 'hide';
    return _react.default.createElement("span", {
      className: "spinner-outer",
      style: dotBoxStyle
    }, _react.default.createElement("span", {
      className: "spinner-yellow relative",
      style: spinnerStyle,
      onClick: this.handleClick
    }, " ", _react.default.createElement("div", {
      className: `tooltipArrow ${tooltipContainerState}`
    }), _react.default.createElement("span", {
      className: "radius100 absolute-center double-bounce",
      style: dotSmallBoxStyle
    }), _react.default.createElement("span", {
      className: "radius100 double-bounce1-yellow"
    }), _react.default.createElement("span", {
      className: "radius100 double-bounce2-yellow"
    })), _react.default.createElement("div", {
      className: `tooltipContainer ${tooltipContainerState}`,
      style: this.getStyleObject(this.state.top - 54, 15)
    }, _react.default.createElement("div", {
      className: "tooltip-theme--white relative"
    }, hoverData)));
  }

};
YellowDot.propTypes = {
  hoverData: _propTypes.default.string.isRequired,
  dotBoxStyle: _propTypes.default.object,
  dotSmallBoxStyle: _propTypes.default.object,
  spinnerStyle: _propTypes.default.object
};
YellowDot.defaultProps = {
  dotBoxStyle: {},
  dotSmallBoxStyle: {},
  spinnerStyle: {}
};
var _default = YellowDot;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/howItWorks/HowItWorks.js":
/*!*****************************************************!*\
  !*** ./amp/modules/common/howItWorks/HowItWorks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./howitworks.scss */ "./amp/modules/common/howItWorks/howitworks.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const card = {
  heading: 'How it Works',
  items: [{
    icon: 'PdpSelectPackage',
    title: 'Personalise This Package',
    paragraph: 'Make changes as per your travel plan & submit the request.'
  }, {
    icon: 'PdpQuotes',
    title: 'Get Multiple Quotes',
    paragraph: 'Connect with top 3 agents, compare quotes & customize further.'
  }, {
    icon: 'IllusTraveler',
    title: 'Book The Best Deal',
    paragraph: 'Pay in easy installments & get ready to enjoy your holiday.'
  }]
};
let HowItWorks = class HowItWorks extends _react.PureComponent {
  render() {
    return _react.default.createElement("div", {
      className: "col-xs-12 p0 sbcw mt8"
    }, _react.default.createElement("h2", {
      className: "f16 fw9 p15 pfc5 bb m0"
    }, card.heading), _react.default.createElement("div", {
      className: "col-xs-12 p0 howItWorkBlock"
    }, card.items.map((item, i) => {
      return _react.default.createElement("div", {
        className: "col-xs-12 flex alignCenter pl15 pr15 pt24 pb24 worksBox",
        key: i
      }, _react.default.createElement("span", {
        className: `flex justifyCenter ${item.icon}`
      }), _react.default.createElement("div", {
        className: "pl24"
      }, _react.default.createElement("h4", {
        className: "f14 fw9 pb8 m0"
      }, item.title), _react.default.createElement("p", {
        className: "f12"
      }, item.paragraph)));
    })));
  }

};
exports.default = HowItWorks;

/***/ }),

/***/ "./amp/modules/common/howItWorks/howitworks.scss":
/*!*******************************************************!*\
  !*** ./amp/modules/common/howItWorks/howitworks.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"howItWorkBlock": "_37g2d",
	"worksBox": "_1mwHA",
	"PdpSelectPackage": "_17Ii-",
	"PdpQuotes": "_3fwem",
	"IllusTraveler": "_2AeGv"
};

/***/ }),

/***/ "./amp/modules/common/readMoreByHeight.scss":
/*!**************************************************!*\
  !*** ./amp/modules/common/readMoreByHeight.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"readMoreContent": "_249d7",
	"expanded": "_2SrWp",
	"readMore-dropdown": "_2jn3S",
	"dynamicTextInherit": "_AtexQ",
	"downArrow": "_UNa9G",
	"readMoreByHeight": "_3HK-O",
	"table-responsive": "_3vjcy",
	"table": "_nGVSC",
	"rotate180": "_1LdLV",
	"rotate0": "_2c47e"
};

/***/ }),

/***/ "./amp/modules/header/HeaderTitle.js":
/*!*******************************************!*\
  !*** ./amp/modules/header/HeaderTitle.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderTitle = exports.TripTypeList = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _urlHelpers = __webpack_require__(/*! amp/helpers/urlHelpers */ "./amp/helpers/urlHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TripTypeList = ({
  selectionList,
  selectedItem,
  toggleSelection
}) => _react.default.createElement("div", {
  className: "row row- absolute wfull category-list"
}, _react.default.createElement("ul", null, Object.keys(selectionList).map(item => _react.default.createElement("li", {
  key: item
}, _react.default.createElement(_reactRouter.Link, {
  to: selectionList[item].url,
  className: selectedItem === item ? 'selected-category' : '',
  onClick: e => {
    toggleSelection();
  }
}, selectionList[item].name)))), _react.default.createElement("div", {
  className: "fix-layer-suggestion",
  onClick: toggleSelection
}));

exports.TripTypeList = TripTypeList;
TripTypeList.propTypes = {
  selectionList: _propTypes.default.object.isRequired,
  selectedItem: _propTypes.default.string.isRequired,
  toggleSelection: _propTypes.default.func.isRequired
};
let HeaderTitle = class HeaderTitle extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.renderSubHeading = (showTitleAsH1, plpHeading, title) => {
      if (plpHeading) {
        return _react.default.createElement("h2", {
          className: "fw4 flexFull"
        }, plpHeading);
      } else if (showTitleAsH1) {
        return _react.default.createElement("h1", {
          className: "fw4 flexFull f16 m0 heading-title-amp"
        }, title);
      } else {
        return _react.default.createElement("p", {
          className: "fw4 flexFull"
        }, title);
      }
    }, _temp;
  }

  render() {
    const {
      title,
      showShare,
      showBlackShare,
      heading,
      url,
      showTitleAsH1,
      plpHeading,
      backUrl
    } = this.props;
    let subHeader = null;
    subHeader = this.renderSubHeading(showTitleAsH1, plpHeading, title);
    return _react.default.createElement("div", {
      className: "header-title"
    }, _react.default.createElement("div", {
      className: "f16 sfcw flex alignCenter spaceBetween"
    }, _react.default.createElement("a", {
      className: "back-arrow",
      href: backUrl
    }, "go back"), subHeader, showShare ? _react.default.createElement("span", {
      className: "share-logo-right fright"
    }, _react.default.createElement("a", null, _react.default.createElement("amp-social-share", {
      type: "system",
      "data-param-url": (0, _urlHelpers.whatsAppUrl)(heading, url)
    }))) : null));
  }

};
exports.HeaderTitle = HeaderTitle;
HeaderTitle.propTypes = {
  goBackState: _propTypes.default.func.isRequired,
  selectionList: _propTypes.default.object,
  selectedItem: _propTypes.default.string,
  toggleSelection: _propTypes.default.func,
  selectionListVisible: _propTypes.default.bool,
  title: _propTypes.default.string,
  tripTypeListShown: _propTypes.default.bool,
  category: _propTypes.default.string,
  backUrl: _propTypes.default.string,
  showShare: _propTypes.default.bool,
  showBlackShare: _propTypes.default.bool,
  heading: _propTypes.default.string,
  url: _propTypes.default.string,
  showTitleAsH1: _propTypes.default.bool,
  plpHeading: _propTypes.default.string
};
HeaderTitle.defaultProps = {
  selectionList: {
    all: {
      name: 'All',
      url: '/All-Places'
    }
  },
  selectedItem: 'all',
  toggleSelection: () => {},
  selectionListVisible: false,
  title: '',
  tripTypeListShown: false,
  category: '',
  backUrl: '',
  showShare: false,
  showBlackShare: false,
  heading: '',
  url: '',
  showTitleAsH1: true,
  plpHeading: ''
};
var _default = HeaderTitle;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/packageCard/Listing.scss":
/*!**********************************************!*\
  !*** ./amp/modules/packageCard/Listing.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-card": "_2EP7b",
	"at_packageDaysCount": "_DFYco",
	"star-ratings-selection": "_14ZCU",
	"hotelStarItem": "_2qJ7K",
	"more-than-three-stars": "_1mJyT",
	"discount-ribbon": "_1P7xx",
	"package-cities": "_2fvzD",
	"package-cities-list": "_3XeCx",
	"list-heading": "_IRLbF",
	"package-price": "_3oIE7",
	"original-price": "_3qpV8",
	"starting-from": "_AyY6y",
	"package-image-title": "_1_83T",
	"iblock": "_3ljGh",
	"checkbox-common": "_2f59Z",
	"radio-common-round": "_2mQiS",
	"tooltipTextStyle": "_1CdoO",
	"package-info-icon": "_1razi",
	"package-info-icon-custom": "_3Y9eG",
	"tooltipdata-up": "_2I0yC"
};

/***/ }),

/***/ "./amp/modules/packageCard/PackageCardExperiment.js":
/*!**********************************************************!*\
  !*** ./amp/modules/packageCard/PackageCardExperiment.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _PackageImgTitle = _interopRequireDefault(__webpack_require__(/*! amp/modules/packageCard/PackageImgTitle */ "./amp/modules/packageCard/PackageImgTitle.js"));

var _PackagePriceExperiment = _interopRequireDefault(__webpack_require__(/*! amp/modules/packageCard/PackagePriceExperiment */ "./amp/modules/packageCard/PackagePriceExperiment.js"));

var _PackageDaysDiscountExperiment = _interopRequireDefault(__webpack_require__(/*! amp/modules/packageCard/PackageDaysDiscountExperiment */ "./amp/modules/packageCard/PackageDaysDiscountExperiment.js"));

var _PackageCities = _interopRequireDefault(__webpack_require__(/*! amp/modules/packageCard/PackageCities */ "./amp/modules/packageCard/PackageCities.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! amp/modules/packageCard/PackageIncExc */ "./amp/modules/packageCard/PackageIncExc.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

__webpack_require__(/*! ./PackageCities.scss */ "./amp/modules/packageCard/PackageCities.scss");

__webpack_require__(/*! ./Listing.scss */ "./amp/modules/packageCard/Listing.scss");

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GCardTagsSpan = _glamorous.default.span({
  height: '24px',
  backgroundColor: '#fac22e'
});

let PackageCardExperiment = (_temp = _class = class PackageCardExperiment extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      hotelId: props.card.id
    };
  }

  render() {
    const {
      card,
      isPackageRevamp,
      comparingPackages,
      addToComparingPackages,
      removeFromComparingPackages,
      formToLocation,
      index
    } = this.props;
    const additionalInfoText = `Traveler has expressed interest in ${card.days} Days , ${card.nights} nights with cities ${card.cities}. For more details, see the <a href='/packages/${card.set_url}'>link</a>`; // TODO: Ugly code. Handle it differently

    let toDestination = '';

    try {
      toDestination = card.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }

    const {
      hotelId
    } = this.state;
    const formOneToLocation = formToLocation ? formToLocation : toDestination;
    const ctaTextPackage = 'View Details';
    const ctaTextForm = 'Customize';
    const {
      isExperiment
    } = card;
    let hideDiscount = false,
        replacePrice = false,
        family_packages = card.family_packages;

    if (isExperiment) {
      hideDiscount = isExperiment.hideDiscount;
      replacePrice = isExperiment.replacePrice;
      family_packages = replacePrice ? card.family_packages_map : card.family_packages;
    }

    const hotelWithPrices = family_packages && family_packages[hotelId] ? family_packages[hotelId] : [];
    return _react.default.createElement("div", {
      className: "row row- mb8 mt8 mr8 relative package-card"
    }, _react.default.createElement(_reactRouter.Link, {
      to: `/packages/${card.set_url}?id=${hotelId}`,
      className: "sfcw"
    }, _react.default.createElement(_PackageImgTitle.default, {
      name: card.plp_heading || card.name,
      altText: card.set_url,
      imageUrl: card.image_url,
      imagekitUrl: card.imagekit_url
    })), _react.default.createElement("div", {
      className: `row row- sbcw ${isPackageRevamp ? 'pt8 pb8' : 'p8'}`
    }, _react.default.createElement("div", {
      className: `${isPackageRevamp ? '' : 'pl8 pr8'}`
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 f10"
    }, _react.default.createElement(_PackageCities.default, {
      cities: card.city_list_with_days || {}
    }))), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "iblock pl0"
    }, _react.default.createElement(_PackageDaysDiscountExperiment.default, {
      days: card.days,
      nights: card.nights,
      isPackageRevamp: isPackageRevamp
    })), _react.default.createElement("div", {
      className: "block"
    }, this.renderHotelSelections(index))), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr8"
    }, _react.default.createElement(_PackagePriceExperiment.default, {
      price: hotelWithPrices.length ? hotelWithPrices[2] : card.price_total,
      priceUnit: card.mini_desc,
      currency: card.currency,
      discount: hotelWithPrices.length ? hotelWithPrices[2] - hotelWithPrices[1] : card.price_total - card.discounted_price,
      promoTag: card.promo_tag,
      totalPrice: card.price_total,
      totalDiscount: card.price_total - card.discounted_price,
      hideDiscount: hideDiscount,
      index: index,
      familyPackages: family_packages,
      hotelId: hotelId
    }))), _react.default.createElement("div", {
      className: "row inclusion-height-box mt8"
    }, _react.default.createElement(_PackageIncExc.default, {
      inclusions: card.inclusions,
      id: `card_${card.id}`,
      hotelInfo: card.family_packages && card.family_packages[`${hotelId}`],
      isPackageRevamp: isPackageRevamp
    }))), !isPackageRevamp ? _react.default.createElement("div", {
      className: "row row- pt8"
    }, _react.default.createElement("div", {
      className: "col-xs-6 pl0 pr4"
    }, _react.default.createElement(_reactRouter.Link, {
      to: `/packages/${card.set_url}?id=${hotelId}`,
      className: "btn-pri wfull ripple"
    }, _react.default.createElement("div", {
      className: "wave-dark"
    }), ctaTextPackage)), _react.default.createElement("div", {
      className: "col-xs-6 pl4 pr0"
    }, _react.default.createElement("button", {
      className: "wfull"
    }, _react.default.createElement("div", {
      className: "btn-filled-pri wfull customized-variation"
    }, _react.default.createElement("div", {
      className: "wave"
    }), ctaTextForm)))) : null));
  }

}, _initialiseProps = function () {
  this.renderHotelSelections = index => {
    const {
      card,
      heading
    } = this.props;
    const {
      hotelId
    } = this.state;
    const hotelsIds = Object.keys(card.family_packages || {});
    hotelsIds.map(id => {
      card.family_packages[id][3] = (0, _parsers.parsePrice)({
        price: card.family_packages[id][1]
      });
      card.family_packages[id][4] = (0, _parsers.parsePrice)({
        price: card.family_packages[id][2]
      });
    });
    const prices = {
      price: (0, _parsers.parsePrice)({
        price: card.family_packages[hotelId][1]
      }),
      discount: (0, _parsers.parsePrice)({
        price: card.family_packages[hotelId][2]
      })
    };

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map(hotelId => {
        return _react.default.createElement("div", {
          key: hotelId,
          className: "iblock hotelStarItem mr8"
        }, _react.default.createElement("amp-state", {
          id: `similarPackages${index}`
        }, _react.default.createElement("script", {
          type: "application/json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(card.family_packages)
          }
        })), _react.default.createElement("amp-state", {
          id: `defaultPrices${index}`
        }, _react.default.createElement("script", {
          type: "application/json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(prices)
          }
        })), _react.default.createElement(_Action.default, {
          events: {
            change: [`AMP.setState({
            selectedHotel${index} : event.value,
            hotel${index} : event.value,
            index:index})`]
          }
        }, props => _react.default.createElement("input", _extends({}, props, {
          name: `${heading}_hotel_star_input_${card.id}`,
          type: "radio",
          className: "checkbox-common radio-common-round",
          checked: hotelId.toString() === this.state.hotelId.toString(),
          id: `input_${card.id}_${hotelId}`,
          value: hotelId
        }))), _react.default.createElement("label", {
          className: "",
          htmlFor: `input_${card.id}_${hotelId}`
        }, card.family_packages[hotelId][0], " Star"));
      });
      return _react.default.createElement("div", {
        className: `row row- star-ratings-selection more-than-three-stars`
      }, hotelCheckboxes);
    }

    return null;
  };
}, _temp);
PackageCardExperiment.propTypes = {
  card: _propTypes.default.object.isRequired,
  comparingPackages: _propTypes.default.array.isRequired,
  addToComparingPackages: _propTypes.default.func,
  removeFromComparingPackages: _propTypes.default.func,
  formToLocation: _propTypes.default.string,
  promoTag: _propTypes.default.number,
  index: _propTypes.default.number,
  setActiveHotels: _propTypes.default.func.isRequired,
  isPackageRevamp: _propTypes.default.bool,
  heading: _propTypes.default.string
};
PackageCardExperiment.defaultProps = {
  formToLocation: '',
  removeFromComparingPackages: () => {},
  addToComparingPackages: () => {},
  promoTag: 0,
  heading: 'plp'
};
var _default = PackageCardExperiment;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/packageCard/PackageCities.js":
/*!**************************************************!*\
  !*** ./amp/modules/packageCard/PackageCities.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./PackageCities.scss */ "./amp/modules/packageCard/PackageCities.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderPackageCitiesFromArray = (cities, isDealsCard) => {
  if (!cities.length) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "package-cities"
  }, _react.default.createElement("ul", {
    className: "package-cities-list"
  }, cities.map((city, i) => _react.default.createElement("li", {
    className: isDealsCard ? 'f12' : '',
    key: i
  }, city))));
};

const renderPackageCitiesFromObject = (citiesWithDays, isDealsCard) => {
  const cities = Object.keys(citiesWithDays);

  if (!cities.length) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "package-cities"
  }, _react.default.createElement("ul", {
    className: "package-cities-list"
  }, _react.default.createElement("li", {
    className: "fw7 f12 list-heading hide"
  }, "Cities:"), cities.map((city, i) => _react.default.createElement("li", {
    className: isDealsCard ? 'f12' : '',
    key: i
  }, city, " ", citiesWithDays[city] ? ` (${citiesWithDays[city]}D)` : null))));
};

const PackageCities = ({
  cities,
  isDealsCard
}) => {
  if (cities instanceof Array) {
    return renderPackageCitiesFromArray(cities, isDealsCard);
  } else {
    return renderPackageCitiesFromObject(cities, isDealsCard);
  }
};

PackageCities.propTypes = {
  cities: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]).isRequired,
  isDealsCard: _propTypes.default.bool
};
PackageCities.defaultProps = {
  isDealsCard: false
};
var _default = PackageCities;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/packageCard/PackageCities.scss":
/*!****************************************************!*\
  !*** ./amp/modules/packageCard/PackageCities.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-cities": "_2j894",
	"package-cities-list": "_nTL0F",
	"f12": "_3xP57",
	"addCompareDiv": "_2ldUB",
	"fixed-menu-button": "_1LytZ"
};

/***/ }),

/***/ "./amp/modules/packageCard/PackageDaysDiscount.scss":
/*!**********************************************************!*\
  !*** ./amp/modules/packageCard/PackageDaysDiscount.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"discount-ribbon": "_1wgX1",
	"package-info-icon": "_14u_S",
	"package-info-icon-custom-left": "_2TO5j",
	"tooltipdata-up": "_1Etya",
	"tooltip-upwards": "_1Y6UT",
	"input-24": "_NmSum"
};

/***/ }),

/***/ "./amp/modules/packageCard/PackageDaysDiscountExperiment.js":
/*!******************************************************************!*\
  !*** ./amp/modules/packageCard/PackageDaysDiscountExperiment.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./PackageDaysDiscount.scss */ "./amp/modules/packageCard/PackageDaysDiscount.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackageDaysDiscountExperiment = ({
  days,
  nights,
  isPackageRevamp
}) => _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("p", {
  className: `at_packageDaysCount fw7 text-left ${isPackageRevamp ? 'f10 at_package' : 'f12'}`
}, days, " Days & ", nights, " Nights "));

PackageDaysDiscountExperiment.propTypes = {
  days: _propTypes.default.number.isRequired,
  nights: _propTypes.default.number.isRequired,
  isPackageRevamp: _propTypes.default.bool
};
var _default = PackageDaysDiscountExperiment;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/packageCard/PackageImgTitle.js":
/*!****************************************************!*\
  !*** ./amp/modules/packageCard/PackageImgTitle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./PackageImgTitle.scss */ "./amp/modules/packageCard/PackageImgTitle.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackageImgTitle = ({
  name,
  imageUrl,
  imagekitUrl,
  altText,
  isLargeImg
}) => _react.default.createElement("div", {
  className: "package-img relative"
}, _react.default.createElement("amp-img", {
  src: imagekitUrl,
  width: "385",
  height: "193",
  alt: altText,
  itemProp: "image",
  itemType: "https://schema.org/image"
}), _react.default.createElement("h3", {
  className: "absolute z10 b10 l0 r0 fw9 f14 pl15 pr15 sfcw"
}, name));

PackageImgTitle.propTypes = {
  name: _propTypes.default.string.isRequired,
  imageUrl: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  altText: _propTypes.default.string.isRequired,
  isLargeImg: _propTypes.default.bool
};
PackageImgTitle.defaultProps = {
  isLargeImg: false
};
var _default = PackageImgTitle;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/packageCard/PackageImgTitle.scss":
/*!******************************************************!*\
  !*** ./amp/modules/packageCard/PackageImgTitle.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-img": "_Fd4of"
};

/***/ }),

/***/ "./amp/modules/packageCard/PackageIncExc.js":
/*!**************************************************!*\
  !*** ./amp/modules/packageCard/PackageIncExc.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

var _InclusionNotification = __webpack_require__(/*! constants/Packages/InclusionNotification */ "./app/constants/Packages/InclusionNotification.js");

var _YellowDot = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/YellowDot */ "./amp/modules/common/YellowDot.js"));

__webpack_require__(/*! amp/screens/pdp/priceModule/PackageIncExc.scss */ "./amp/screens/pdp/priceModule/PackageIncExc.scss");

var _IconMappings = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Icon/IconMappings */ "./amp/helpers/Icon/IconMappings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */
const getIconText = (inclusion, hotelInfo) => {
  if (inclusion.key === 'hotel' && hotelInfo) {
    return `Upto ${hotelInfo[0]} Stars`;
  }

  return inclusion.text;
};

const PackageIncExc = ({
  inclusions,
  id,
  noScroll,
  hotelInfo,
  isPackageRevamp
}) => {
  const inclusionsAval = isPackageRevamp ? inclusions.filter(inclusion => inclusion.available).slice(0, 4) : inclusions;
  const inclusionList = inclusionsAval.map((inclusion, index) => {
    const iconName = _IconMappings.default[(0, _parsers.capitalizeFirstLetter)(inclusion.key.replace(/[\s-_]/g, ''))] || 'DefaultIcon';
    const disabledElementClass = inclusion.available ? '' : 'not-included';
    const disabledIconClass = inclusion.available ? '' : 'greyscale';
    const inclusionTextHidden = inclusion.text ? '' : 'hide';
    const InclusionNotificationPresent = inclusion.available && _InclusionNotification.InclusionNotification.indexOf(inclusion.key) > -1 ? 'relative' : '';
    return _react.default.createElement("div", {
      className: `incl-excl-box ${inclusionTextHidden} ${disabledElementClass} ${InclusionNotificationPresent}`,
      key: `${id}_${inclusion.key}_${index}`
    }, inclusion.available && _InclusionNotification.InclusionNotification.indexOf(inclusion.key) > -1 ? _react.default.createElement(_YellowDot.default, {
      id: "flightMessage",
      dotBoxStyle: {
        width: '10px',
        height: '10px',
        position: 'absolute',
        top: '6px',
        right: '3px'
      },
      dotSmallBoxStyle: {
        width: '5px',
        height: '5px'
      },
      spinnerStyle: {
        width: '10px',
        height: '10px',
        zIndex: '1'
      },
      hoverData: "Flight prices are dynamic and may change at the time of booking"
    }) : null, _react.default.createElement("span", {
      className: "incl-excl-img",
      style: {
        background: `url('https://js.traveltriangle.com/public-product/amp-icons-v0.svg#${iconName}-usage')`
      }
    }), _react.default.createElement("p", {
      className: "f10"
    }, getIconText(inclusion, hotelInfo)));
  });
  return _react.default.createElement("div", {
    className: `row row- incl-excl-con ${noScroll ? 'inc-no-scroll' : ''} `
  }, _react.default.createElement("div", {
    className: "row row- incl-excl-con-inner"
  }, inclusionList));
};

PackageIncExc.propTypes = {
  inclusions: _propTypes.default.array.isRequired,
  hotelInfo: _propTypes.default.array.isRequired,
  id: _propTypes.default.string,
  noScroll: _propTypes.default.bool,
  isPackageRevamp: _propTypes.default.bool
};
PackageIncExc.defaultProps = {
  noScroll: false,
  id: 'default_1',
  isPackageRevamp: false
};
var _default = PackageIncExc;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/packageCard/PackagePriceExperiment.js":
/*!***********************************************************!*\
  !*** ./amp/modules/packageCard/PackagePriceExperiment.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

var _PackageDaysDiscount = _interopRequireDefault(__webpack_require__(/*! amp/screens/pdp/priceModule/PackageDaysDiscount */ "./amp/screens/pdp/priceModule/PackageDaysDiscount.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PackagePriceExperiment = class PackagePriceExperiment extends _react.Component {
  render() {
    const {
      priceUnit,
      price,
      discount,
      currency,
      priceFrom,
      priceTo,
      promoTag,
      hideDiscount,
      index
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", null, _react.default.createElement("span", {
      className: "f10 mt8 pfc4 pb5 fw4 starting-from block"
    }, "Starting from:"), _react.default.createElement("h4", {
      className: "package-price sfc3 fw7 f18 pb0"
    }, _react.default.createElement("div", null, _react.default.createElement("span", {
      "data-amp-bind-text": `selectedHotel${index} ? similarPackages${index}[hotel${index}][3] :
              defaultPrices${index}['price']`
    }, (0, _parsers.parsePrice)({
      price: priceFrom || price - discount,
      currency
    }), "/-"), !hideDiscount ? _react.default.createElement("span", {
      className: "f12 fw4 ml8 pfc3 tdl original-price",
      "data-amp-bind-text": `selectedHotel${index} ? similarPackages${index}[hotel${index}][4]
                         :defaultPrices${index}['discount']`
    }, (0, _parsers.parsePrice)({
      price: priceTo || price,
      currency
    }), "/-") : null)), _react.default.createElement("p", {
      className: "f10 mt4"
    }, priceUnit)), _react.default.createElement(_PackageDaysDiscount.default, {
      price: price,
      discount: discount,
      hideDiscount: hideDiscount
    })));
  }

};
PackagePriceExperiment.propTypes = {
  priceUnit: _propTypes.default.string,
  price: _propTypes.default.number.isRequired,
  discount: _propTypes.default.number.isRequired,
  currency: _propTypes.default.string,
  displayRange: _propTypes.default.bool,
  priceFrom: _propTypes.default.string,
  priceTo: _propTypes.default.string,
  hideDiscount: _propTypes.default.bool,
  totalPrice: _propTypes.default.number.isRequired,
  totalDiscount: _propTypes.default.number.isRequired,
  promoTag: _propTypes.default.number.isRequired,
  index: _propTypes.default.number.isRequired
};
PackagePriceExperiment.defaultProps = {
  priceUnit: 'per person',
  currency: 'Rupee',
  displayRange: false,
  priceFrom: null,
  priceTo: null,
  hideDiscount: false
};
var _default = PackagePriceExperiment;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/similarPackages/SimilarPackages.js":
/*!********************************************************!*\
  !*** ./amp/modules/similarPackages/SimilarPackages.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./SimilarPackages.scss */ "./amp/modules/similarPackages/SimilarPackages.scss");

var _PackageCardExperiment = _interopRequireDefault(__webpack_require__(/*! amp/modules/packageCard/PackageCardExperiment */ "./amp/modules/packageCard/PackageCardExperiment.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let SimilarPackages = (_temp = _class = class SimilarPackages extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "row row- pt8 pb0 sbc5"
    }, _react.default.createElement("div", {
      className: "row row- p15 pl15 similar-package-gap pb8 sbcw"
    }, _react.default.createElement("h2", {
      className: "heading-common-center m0"
    }, "Similar Packages"), _react.default.createElement("div", {
      className: "row row- relative similar-package-box"
    }, _react.default.createElement("amp-carousel", {
      width: "450",
      height: "470",
      layout: "responsive",
      type: "slides"
    }, this.props.similarPackages.map((packageCard, index) => {
      return _react.default.createElement(_PackageCardExperiment.default, {
        heading: 'similar packages',
        card: packageCard,
        key: index,
        index: index,
        isPackageRevamp: true
      });
    })))));
  }

}, _class.propTypes = {
  loadedSimilarPackages: _propTypes.default.bool.isRequired,
  loadingSimilarPackages: _propTypes.default.bool,
  loadingError: _propTypes.default.bool,
  packageId: _propTypes.default.number,
  similarPackages: _propTypes.default.array
}, _class.defaultProps = {
  packageId: 1,
  loadingError: false,
  similarPackages: [],
  loadingSimilarPackages: false
}, _temp);
var _default = SimilarPackages;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/similarPackages/SimilarPackages.scss":
/*!**********************************************************!*\
  !*** ./amp/modules/similarPackages/SimilarPackages.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"similar-package-gap": "_3iC8b",
	"package-img": "_N8g1G",
	"at_packageDaysCount": "_3UCzw"
};

/***/ }),

/***/ "./amp/modules/travelerReview/TravelerReview.js":
/*!******************************************************!*\
  !*** ./amp/modules/travelerReview/TravelerReview.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _TravelerReviewNewCard = _interopRequireDefault(__webpack_require__(/*! ./TravelerReviewNewCard */ "./amp/modules/travelerReview/TravelerReviewNewCard.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let TravelerReview = class TravelerReview extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: this.props.testimonials,
      counter: 5
    };
  }

  render() {
    const {
      pagination,
      destination
    } = this.props;
    const {
      testimonials,
      counter
    } = this.state;
    const firstReviews = testimonials && testimonials.length > 5 ? testimonials.slice(0, 5) : testimonials;
    const secondReviews = firstReviews.length ? testimonials.slice(6, testimonials.length) : [];
    const renderFirstTestimonials = firstReviews.map((testimonial, i) => {
      const checkLoadMoreTestimonial = i >= counter ? true : false;
      return _react.default.createElement(_TravelerReviewNewCard.default, {
        key: i,
        index: i,
        testimonial: testimonial,
        pagination: pagination,
        hideTestimonial: counter < 15 && pagination && pagination.total_count >= 15 ? checkLoadMoreTestimonial : false
      });
    });
    const renderSecondTestimonials = secondReviews.map((testimonial, i) => {
      const checkLoadMoreTestimonial = i >= counter ? true : false;
      return _react.default.createElement("div", {
        className: "hide",
        "data-amp-bind-class": "showTestimonials ? '': 'hide'"
      }, _react.default.createElement(_TravelerReviewNewCard.default, {
        key: i,
        index: i,
        testimonial: testimonial,
        pagination: pagination,
        hideTestimonial: counter < 15 && pagination && pagination.total_count >= 15 ? checkLoadMoreTestimonial : false
      }));
    });

    if (!testimonials.length) {
      return null;
    }

    const testimonialsLink = destination ? `/testimonials/${destination}` : '/testimonials';
    return _react.default.createElement("div", {
      className: "slider-overflow-buttons sbcw"
    }, _react.default.createElement("div", {
      className: renderFirstTestimonials.length ? 'traveler-review' : 'hide'
    }, _react.default.createElement("div", {
      className: "pt15 pl15 pr15"
    }, _react.default.createElement("h2", {
      className: "f20 pfc3 fwb pb8"
    }, pagination && pagination.total_count ? pagination.total_count : null, " Authentic Traveler Reviews"), _react.default.createElement("p", {
      className: "f14p pfc4 pb8"
    }, "Read on to find out why our customers love us!")), renderFirstTestimonials, renderSecondTestimonials, _react.default.createElement("div", {
      className: "readmore-btn flex justifyCenter pt15 pb15"
    }, pagination && pagination.total_count && pagination.total_count !== testimonials.length ? _react.default.createElement(_Action.default, {
      events: {
        tap: ['AMP.setState({showTestimonials : !showTestimonials})']
      }
    }, props => _react.default.createElement("button", _extends({
      className: "f14 sfc1 fw7 link flex alignCenter at_readmorebtn",
      "data-amp-bind-class": "showTestimonials ? 'hide' : 'f14 sfc1 fw7 link flex alignCenter at_readmorebtn'"
    }, props), "Load More")) : _react.default.createElement(_reactRouter.Link, {
      target: '_blank',
      to: testimonialsLink,
      className: "hide",
      "data-amp-bind-class": "showTestimonials ? 'show':'hide'"
    }, "View All Reviews"), _react.default.createElement(_reactRouter.Link, {
      target: '_blank',
      to: testimonialsLink,
      className: "hide",
      "data-amp-bind-class": "showTestimonials ? 'show':'hide'"
    }, "View All Reviews"))));
  }

};
TravelerReview.propTypes = {
  testimonials: _propTypes.default.array,
  pagination: _propTypes.default.object,
  packageId: _propTypes.default.number,
  location: _propTypes.default.object,
  destination: _propTypes.default.string
};
TravelerReview.defaultProps = {
  testimonials: [],
  uniqueKey: 'traveler-review',
  isSeasonalCategory: false,
  showViewAll: true,
  data: {
    title: 'Traveler Reviews',
    heading: 'Read on to find out why our customers love us!'
  },
  packageId: 0,
  location: {},
  destination: ''
};
var _default = TravelerReview;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/travelerReview/TravelerReviewNewCard.js":
/*!*************************************************************!*\
  !*** ./amp/modules/travelerReview/TravelerReviewNewCard.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

var _AgentRating = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/AgentRating */ "./amp/modules/common/AgentRating.js"));

var _utils = __webpack_require__(/*! amp/helpers/utils */ "./amp/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

const parser = new _htmlToReact.Parser();

const TravelerReviewNewCard = ({
  testimonial,
  hideTestimonial,
  index
}) => {
  const reviewBody = testimonial.body || testimonial.review_body;
  return _react.default.createElement("div", {
    className: `${index} > showCounter ? bb pb15  pt15 pl15 pr15 ${hideTestimonial ? 'hide' : 'show'}`
  }, _react.default.createElement(_AgentRating.default, {
    agentRating: testimonial.rating,
    id: testimonial.id
  }), _react.default.createElement("h3", {
    className: "f16 pfc3 fwb pb15  pt8"
  }, testimonial.title), reviewBody ? _react.default.createElement("div", {
    className: "pb8"
  }, _react.default.createElement("p", {
    className: "readMoreContent f14p pfc3 block relative readMoreByHeight",
    "data-amp-bind-class": `expanded${index} ? 'readMoreContent block relative pt8': 'readMoreContent block relative pt8 readMoreByHeight'`
  }, _react.default.createElement("span", {
    className: "block dynamicTextInherit pfc3 f14p"
  }, parser.parse(reviewBody))), _react.default.createElement(_Action.default, {
    events: {
      tap: [`AMP.setState({expanded${index}:!expanded${index}})`]
    }
  }, props => _react.default.createElement("div", {
    className: "row row- right-align"
  }, _react.default.createElement("button", props, _react.default.createElement("div", {
    className: "readMore-dropdown relative pr15 readMore cursorP flex alignCenter spaceBetween mt8 f12 fw9"
  }, _react.default.createElement("span", {
    "data-amp-bind-text": `expanded${index} ?'Read Less':' Read More'`
  }, "Read More"), _react.default.createElement("span", {
    className: `expanded${index} ? 'rotate180 downArrow relative block' :
            'rotate0 downArrow relative block`,
    "data-amp-bind-class": `expanded${index} ? 'rotate180 downArrow relative block' :
                  'rotate0 downArrow relative block'`
  })))))) : null, _react.default.createElement("div", {
    className: "pt8"
  }, _react.default.createElement("div", {
    className: "flex alignCenter pb8"
  }, _react.default.createElement("p", {
    className: "f14 fwb pfc3"
  }, testimonial.author.author_name || testimonial.author.authorName, _react.default.createElement("span", {
    className: "f12 pfc4 fw4 pl8"
  }, "  ", testimonial.author.user_location || testimonial.author.userLocation))), testimonial.quote && _react.default.createElement("p", {
    className: "f12 fitalic pfc3"
  }, `Travelled ${(0, _utils.getTravelerReviewCities)(testimonial.quote.cities)} ${(0, _utils.getTravelerReviewDate)(testimonial.quote.start_date)}
          ${(0, _utils.getTravelerReviewTravCount)(testimonial.quote.adult, testimonial.quote.child)} ${(0, _utils.getTravelerReviewDuration)(testimonial.quote.days)}`)));
};

TravelerReviewNewCard.propTypes = {
  testimonial: _propTypes.default.object.isRequired,
  hideTestimonial: _propTypes.default.bool,
  index: _propTypes.default.number
};
var _default = TravelerReviewNewCard;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/travelerReview/index.js":
/*!*********************************************!*\
  !*** ./amp/modules/travelerReview/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _action = __webpack_require__(/*! ./action */ "./amp/modules/travelerReview/action.js");

var _TravelerReview = _interopRequireDefault(__webpack_require__(/*! ./TravelerReview */ "./amp/modules/travelerReview/TravelerReview.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  testimonials: (0, _get2.default)(state, 'travelerReviews.testimonials'),
  pagination: (0, _get2.default)(state, 'travelerReviews.pagination'),
  packageId: (0, _get2.default)(state, 'packages.details.data.data.seo_packages.id')
}), dispatch => ({
  loadMore: params => dispatch((0, _action.fetchPdpTestimonials)(params))
}))(_TravelerReview.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/AmpCarousel.js":
/*!****************************************!*\
  !*** ./amp/screens/pdp/AmpCarousel.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.discountPercentage = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./AmpCarousel.scss */ "./amp/screens/pdp/AmpCarousel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const discountPercentage = (priceTotal, priceDiscount) => priceDiscount / (priceTotal / 100);

exports.discountPercentage = discountPercentage;

const AmpCarousel = ({
  images,
  name,
  covers,
  dealsInfo,
  price,
  isDeal,
  isLuxury
}) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    preloadImages: false,
    lazy: true,
    observer: true,
    observeParents: true
  };
  return _react.default.createElement("div", {
    className: "row row- relative"
  }, isDeal || isLuxury ? _react.default.createElement("div", {
    className: "p5 f12 pl15 pr15 flex alignCenter pfc3 wfull center highlight-deals-banner slider-amp-text"
  }, isDeal && dealsInfo.faq, " ", isLuxury && `Hassel Free Booking | All Inclusive | 24x7 Assistance`) : null, _react.default.createElement("div", {
    className: "relative"
  }, _react.default.createElement("div", {
    className: "row row- relative package-slider-img "
  }, _react.default.createElement("meta", {
    itemProp: "name",
    content: "Image"
  }), _react.default.createElement("div", {
    className: "packageDetail"
  }, _react.default.createElement("div", {
    className: "relative"
  }, _react.default.createElement("amp-carousel", {
    width: "400",
    height: "240",
    layout: "responsive",
    type: "slides"
  }, images.length && images.map((s, i) => _react.default.createElement("div", {
    key: i
  }, _react.default.createElement("div", {
    className: "sliderImage-overlay"
  }, _react.default.createElement("amp-img", {
    src: s.picture_details.imagekit_url,
    width: "400",
    height: "240",
    layout: "responsive",
    alt: "a sample image"
  })), _react.default.createElement("p", {
    className: "sliderText"
  }, s.picture_details.caption)))))), isDeal && price.total && price.discount ? _react.default.createElement("div", {
    className: "absolute radius2 t15 sbcw l15 z2 text-center slider-deals"
  }, _react.default.createElement("p", {
    className: "f12 m0 p5"
  }, "Deal of the Day"), _react.default.createElement("div", {
    className: "flex alignCenter pbc1 justifyCenter pt5 pb5 pl8 pr8"
  }, _react.default.createElement("h6", {
    className: "f32 sfcw fw9 m0"
  }, Math.round(discountPercentage(price.total, price.discount))), _react.default.createElement("div", {
    className: "ml2"
  }, _react.default.createElement("p", {
    className: "f12 sfcw m0 center"
  }, "%"), _react.default.createElement("p", {
    className: "f12 sfcw m0"
  }, "off")))) : null, isLuxury && price.total && price.discount ? _react.default.createElement("div", {
    className: "absolute radius2 t15 l15 z2 "
  }, "Icon") : null)));
};

AmpCarousel.propTypes = {
  images: _propTypes.default.object.isRequired,
  name: _propTypes.default.string.isRequired,
  covers: _propTypes.default.object.isRequired,
  dealsInfo: _propTypes.default.object,
  price: _propTypes.default.object,
  isDeal: _propTypes.default.bool,
  isLuxury: _propTypes.default.bool
};
AmpCarousel.defaultProps = {
  dealsInfo: {},
  price: {},
  isDeal: false,
  isLuxury: false
};
var _default = AmpCarousel;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/AmpCarousel.scss":
/*!******************************************!*\
  !*** ./amp/screens/pdp/AmpCarousel.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"highlight-deals-banner": "_vuL-j",
	"slider-amp-text": "_3OIXh",
	"package-slider-img": "_1WCVH",
	"slider-deals": "_13YHt",
	"sliderImage-overlay": "_Ha8R-"
};

/***/ }),

/***/ "./amp/screens/pdp/HotelFlight/Hotel.js":
/*!**********************************************!*\
  !*** ./amp/screens/pdp/HotelFlight/Hotel.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _HotelCard = _interopRequireDefault(__webpack_require__(/*! ./HotelCard */ "./amp/screens/pdp/HotelFlight/HotelCard.js"));

__webpack_require__(/*! ./Hotel.scss */ "./amp/screens/pdp/HotelFlight/Hotel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hotel = ({
  list
}) => {
  const hotelElements = list.filter(h => h.pictures.length).map((h, index) => {
    const images = {
      imageUrl: h.pictures[0].picture_details.picture,
      imagekitUrl: h.pictures[0].picture_details.imagekit_url
    };
    return _react.default.createElement("div", {
      key: index
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("p", {
      className: "f16 fw9 pfc1 relative iblock mr8"
    }, h.header)), _react.default.createElement("div", {
      className: "row row- pt15",
      id: "hotel_box-triggerlink"
    }, _react.default.createElement(_HotelCard.default, {
      details: h,
      images: images,
      index: index
    })));
  });
  return _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("amp-carousel", {
    width: "400",
    height: "390",
    layout: "responsive",
    type: "slides"
  }, hotelElements));
};

Hotel.propTypes = {
  list: _propTypes.default.array
};
Hotel.defaultProps = {
  list: []
};
var _default = Hotel;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/HotelFlight/Hotel.scss":
/*!************************************************!*\
  !*** ./amp/screens/pdp/HotelFlight/Hotel.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"slide": "_3RWwe"
};

/***/ }),

/***/ "./amp/screens/pdp/HotelFlight/HotelCard.js":
/*!**************************************************!*\
  !*** ./amp/screens/pdp/HotelFlight/HotelCard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _ItineraryTags = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/ItineraryTags */ "./amp/modules/common/ItineraryTags.js"));

__webpack_require__(/*! ./HotelCard.scss */ "./amp/screens/pdp/HotelFlight/HotelCard.scss");

var _AgentRating = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/AgentRating */ "./amp/modules/common/AgentRating.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HotelCard = ({
  details,
  images,
  index
}) => _react.default.createElement("div", {
  className: "hotel-card"
}, _react.default.createElement("div", {
  className: "hotel-img relative box-with-layer"
}, _react.default.createElement("amp-img", {
  height: 140,
  src: images.imageUrl,
  alt: details.name
})), _react.default.createElement("div", {
  className: "row row- pt8 pb8 hotel-data-box"
}, _react.default.createElement("h3", {
  className: "iblock mr8 f14 mb8 fw9"
}, details.name), _react.default.createElement("div", {
  className: "block mb8"
}, _react.default.createElement(_AgentRating.default, {
  agentRating: details.rating,
  id: `rating_${index}`
})), _react.default.createElement("p", {
  className: "f12"
}, details.address), _react.default.createElement("div", {
  className: "hotel-data-box-tags"
}, _react.default.createElement(_ItineraryTags.default, {
  list: details.facilities,
  itineraryId: index + 200,
  tagId: 1
}))));

HotelCard.propTypes = {
  details: _propTypes.default.object.isRequired,
  index: _propTypes.default.number.isRequired,
  images: _propTypes.default.shape({
    imageUrl: _propTypes.default.string,
    imagekitUrl: _propTypes.default.string
  }).isRequired
};
var _default = HotelCard;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/HotelFlight/HotelCard.scss":
/*!****************************************************!*\
  !*** ./amp/screens/pdp/HotelFlight/HotelCard.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hotel-card": "_gWruc",
	"hotel-img": "_2tbVV",
	"hotelCardSlider": "_3j4rW",
	"hotel-data-box": "_8pPpW",
	"hotel-data-box-tags": "_130l-",
	"traveler-rating-star-list": "_TPnQ5"
};

/***/ }),

/***/ "./amp/screens/pdp/HotelFlight/HotelFlight.js":
/*!****************************************************!*\
  !*** ./amp/screens/pdp/HotelFlight/HotelFlight.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Hotel = _interopRequireDefault(__webpack_require__(/*! ./Hotel */ "./amp/screens/pdp/HotelFlight/Hotel.js"));

var _NoHotelIncluded = _interopRequireDefault(__webpack_require__(/*! ./NoHotelIncluded */ "./amp/screens/pdp/HotelFlight/NoHotelIncluded.js"));

__webpack_require__(/*! ./HotelFlight.scss */ "./amp/screens/pdp/HotelFlight/HotelFlight.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HotelFlight = ({
  hotels,
  flights,
  hotelTitle,
  inclusions
}) => {
  if (!hotels.length && !flights.length) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "row row- sbcw relative"
  }, _react.default.createElement("h2", {
    className: "f16 fw9 m0 p15"
  }, "Hotels"), _react.default.createElement("div", {
    className: "hotel-carousel-wrapper"
  }, hotels.length ? _react.default.createElement(_Hotel.default, {
    list: hotels
  }) : _react.default.createElement(_NoHotelIncluded.default, null)), _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("p", {
    className: "note"
  }, "Note: Our agents will provide you these or similar hotels depending on availability")));
};

HotelFlight.propTypes = {
  hotels: _propTypes.default.array,
  flights: _propTypes.default.array,
  hotelTitle: _propTypes.default.string,
  inclusions: _propTypes.default.array.isRequired
};
HotelFlight.defaultProps = {
  hotels: [],
  flights: [],
  hotelTitle: 'Hotels'
};
var _default = HotelFlight;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/HotelFlight/HotelFlight.scss":
/*!******************************************************!*\
  !*** ./amp/screens/pdp/HotelFlight/HotelFlight.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hotel-carousel-wrapper": "_3Uc9C",
	"amp-carousel-slide": "_2IkYw",
	"hotel-card": "_21FQx",
	"note": "_1sywT"
};

/***/ }),

/***/ "./amp/screens/pdp/HotelFlight/NoHotelIncluded.js":
/*!********************************************************!*\
  !*** ./amp/screens/pdp/HotelFlight/NoHotelIncluded.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./Hotel.scss */ "./amp/screens/pdp/HotelFlight/Hotel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoHotelIncluded = () => _react.default.createElement("div", {
  className: "row row- pt24 pb24"
}, _react.default.createElement("span", {
  className: "greyscale flight-icon-disabled"
}), _react.default.createElement("p", {
  className: "pt8 f16 fw9 pfc4 text-center"
}, "No Hotel Included"));

var _default = NoHotelIncluded;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/Itenary/DaysItinerary.js":
/*!**************************************************!*\
  !*** ./amp/screens/pdp/Itenary/DaysItinerary.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DaysItinerary = ({
  day,
  nextLink,
  prevLink,
  setItineraryDay,
  index
}) => _react.default.createElement("div", {
  className: "col-xs-12 bs4 p0 sbcw p8 fixed b0"
}, prevLink && _react.default.createElement(_Action.default, {
  events: {
    tap: [`AMP.setState({
    dayItenary${index - 1} : !dayItenary${index - 1},
    dayItenary${index} : !dayItenary${index}})`]
  }
}, props => _react.default.createElement("button", _extends({
  className: "fleft text-center btn-pri-large relative"
}, props), _react.default.createElement("span", {
  className: "arrowtnc right"
}), "Day ", day - 1)), nextLink && _react.default.createElement(_Action.default, {
  events: {
    tap: [`AMP.setState({
    dayItenary${index + 1} : !dayItenary${index + 1},
    dayItenary${index} : !dayItenary${index}})`]
  }
}, props => _react.default.createElement("button", _extends({
  className: "fright text-center btn-pri-large relative"
}, props), _react.default.createElement("span", {
  className: "arrowtnc left"
}), "Day ", day + 1)));

DaysItinerary.propTypes = {
  day: _propTypes.default.number.isRequired,
  nextLink: _propTypes.default.string,
  prevLink: _propTypes.default.string,
  index: _propTypes.default.number,
  setItineraryDay: _propTypes.default.func.isRequired
};
DaysItinerary.defaultProps = {
  nextLink: null,
  prevLink: null
};
var _default = DaysItinerary;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/Itenary/Itinerary.js":
/*!**********************************************!*\
  !*** ./amp/screens/pdp/Itenary/Itinerary.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _ItineraryTags = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/ItineraryTags */ "./amp/modules/common/ItineraryTags.js"));

var _ItineraryPictureSlider = _interopRequireDefault(__webpack_require__(/*! ./ItineraryPictureSlider */ "./amp/screens/pdp/Itenary/ItineraryPictureSlider.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

__webpack_require__(/*! ./Itinerary.scss */ "./amp/screens/pdp/Itenary/Itinerary.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const HtmlToReactParser = __webpack_require__(/*! html-to-react */ "html-to-react").Parser;

const htmlToReactParser = new HtmlToReactParser();

const dayDetailElements = (dayDetails = [], packageId, itineraryId) => {
  return dayDetails.slice(0, 5).map((value, key) => _react.default.createElement("li", {
    key: `day_detail_${packageId}_${itineraryId}_${key}`
  }, htmlToReactParser.parse(value)));
};

const renderItineraryElements = (itinerary, id, resource, replaceState, trackSegment, setItineraryDay) => {
  return itinerary.map((value, key) => {
    const spaceIndex = value.title.indexOf(' ', value.title.indexOf(' ') + 1) || 0;
    const day = value.title.substr(0, spaceIndex);
    const title = value.title.substr(spaceIndex + 1);
    return _react.default.createElement("div", {
      key: `itinerary_${id}_${key}`,
      className: "itinerary-container-box",
      id: key === 0 ? 'itinerary_box-triggerlink' : ''
    }, _react.default.createElement("div", {
      className: "row row- relative itinerary-container"
    }, _react.default.createElement("div", {
      className: "col-xs-12 itinerary-container-small"
    }, _react.default.createElement(_Action.default, {
      events: {
        change: [`AMP.setState({
              itinerary_${id}_${key} : !itinerary_${id}_${key}
              })`]
      }
    }, props => _react.default.createElement("input", _extends({
      type: "checkbox",
      className: "iti-radio",
      id: `itinerary_radio_${id}_${key}`
    }, props))), _react.default.createElement("label", {
      htmlFor: `itinerary_radio_${id}_${key}`
    }, _react.default.createElement("div", {
      className: "pl0 pr8 relative days-count pb8"
    }, _react.default.createElement("p", {
      className: "f12 fw9 relative"
    }, day)), _react.default.createElement("div", {
      className: "row row-  relative"
    }, _react.default.createElement("h3", {
      className: "f14 fw9 mb8 relative pr48"
    }, title, " ", _react.default.createElement("span", {
      className: "arrow-down smooth absolute r0 absolute-center-v iblock"
    })), _react.default.createElement("div", {
      className: "row row- itinerary-tags-box"
    }, _react.default.createElement(_ItineraryTags.default, {
      list: value.labels,
      itineraryId: id,
      tagId: key
    }))), _react.default.createElement("div", {
      className: "row row- itinerary-list-box"
    }, _react.default.createElement("div", {
      className: "row row- t0 l0 "
    }, itinerary[key].pictures ? _react.default.createElement(_ItineraryPictureSlider.default, {
      pictures: itinerary[key].pictures,
      heading: title,
      id: id,
      ket: key
    }) : null), _react.default.createElement("ul", {
      className: "list-style-no f12"
    }, dayDetailElements(Array.isArray(value.day_detail) ? value.day_detail : [], id, key)), _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "row row- pt8 pb8"
    }, _react.default.createElement(_Action.default, {
      events: {
        tap: [`AMP.setState({dayItenary${key}:!dayItenary${key}, showDayIndex : key})`]
      }
    }, props => _react.default.createElement("button", _extends({
      className: "f12 fright link fw7"
    }, props), "View Details")))))))));
  });
};

const Itinerary = ({
  itinerary,
  titleHead,
  id,
  resource,
  replaceState,
  trackSegment,
  setItineraryDay
}) => {
  if (!itinerary) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "row row- sbcw p15"
  }, _react.default.createElement("h2", {
    className: "heading-common-center pb15 bottom-border"
  }, titleHead), _react.default.createElement("div", {
    className: "row row- itinerary-container"
  }, renderItineraryElements(itinerary, id, resource, replaceState, trackSegment, setItineraryDay)));
};

Itinerary.propTypes = {
  itinerary: _propTypes.default.array.isRequired,
  titleHead: _propTypes.default.string,
  id: _propTypes.default.number.isRequired,
  resource: _propTypes.default.object.isRequired,
  replaceState: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func,
  setItineraryDay: _propTypes.default.func.isRequired
};
Itinerary.defaultProps = {
  titleHead: 'Itinerary',
  trackSegment: () => {}
};
var _default = Itinerary;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/Itenary/Itinerary.scss":
/*!************************************************!*\
  !*** ./amp/screens/pdp/Itenary/Itinerary.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"itinerary-container": "_2VKk7",
	"itinerary-container-box": "_1udhc",
	"itinerary-container-small": "_4fn08",
	"days-count": "_3qmoH",
	"itinerary-tags-box": "_30bme",
	"itinerary-list-box": "_11MaC",
	"iti-radio": "_3LZDu",
	"arrow-down": "_KCsDM",
	"itinerary-tags-box-item": "_2SoHH",
	"itinerary-images-container": "_1p8T3",
	"bottom-border": "_6jdUm",
	"amp_itenary_image": "_2UjCg"
};

/***/ }),

/***/ "./amp/screens/pdp/Itenary/ItineraryPictureSlider.js":
/*!***********************************************************!*\
  !*** ./amp/screens/pdp/Itenary/ItineraryPictureSlider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItineraryPictureSlider = ({
  pictures,
  heading,
  id,
  ket
}) => _react.default.createElement("ul", {
  className: "list-style-no itinerary-images-container"
}, pictures.map((picture, i) => _react.default.createElement("li", {
  key: i
}, _react.default.createElement("amp-img", {
  src: picture.picture_details.imagekit_url,
  alt: picture.picture_details.caption,
  layout: "responsive",
  width: "140px",
  height: "100px",
  "data-amp-bind-class": `itinerary_${id}_${ket} ? 'itinerary_${id}_${ket} amp_itenary_image' : 'amp_itenary_image'`,
  "class": "amp_itenary_image"
}))));

ItineraryPictureSlider.propTypes = {
  pictures: _propTypes.default.array,
  heading: _propTypes.default.string,
  id: _propTypes.default.number,
  ket: _propTypes.default.number
};
var _default = ItineraryPictureSlider;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/Itenary/ItineraryTags.js":
/*!**************************************************!*\
  !*** ./amp/screens/pdp/Itenary/ItineraryTags.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItineraryTags = ({
  list,
  itineraryId,
  tagId
}) => {
  const categoryElements = list.map((value, key) => _react.default.createElement("li", {
    key: `category_${itineraryId}_${tagId}_${key}` // eslint-disable-line react/no-array-index-key
    ,
    className: "itinerary-tags-box-item"
  }, value));
  return _react.default.createElement("ul", {
    className: "list-style-no"
  }, categoryElements);
};

ItineraryTags.propTypes = {
  list: _propTypes.default.array,
  itineraryId: _propTypes.default.number.isRequired,
  tagId: _propTypes.default.number.isRequired
};
ItineraryTags.defaultProps = {
  list: []
};
var _default = ItineraryTags;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/Itenary/PackageDetailDayItinerary.js":
/*!**************************************************************!*\
  !*** ./amp/screens/pdp/Itenary/PackageDetailDayItinerary.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _DaysItinerary = _interopRequireDefault(__webpack_require__(/*! ./DaysItinerary.js */ "./amp/screens/pdp/Itenary/DaysItinerary.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! amp/modules/packageCard/PackageIncExc */ "./amp/modules/packageCard/PackageIncExc.js"));

var _PackageSlider = _interopRequireDefault(__webpack_require__(/*! ./PackageSlider */ "./amp/screens/pdp/Itenary/PackageSlider.js"));

var _ItineraryTags = _interopRequireDefault(__webpack_require__(/*! ./ItineraryTags */ "./amp/screens/pdp/Itenary/ItineraryTags.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

__webpack_require__(/*! ./PackageDetailDayItinerary.scss */ "./amp/screens/pdp/Itenary/PackageDetailDayItinerary.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const htmlToReactParser = new _htmlToReact.Parser();

const PackageDetailDayItinerary = ({
  packageDetails,
  itinerary,
  day,
  resource,
  replaceState,
  setItineraryDay,
  showSection,
  index
}) => {
  const spaceIndex = itinerary.title.indexOf(' ', itinerary.title.indexOf(' ') + 1) || 0;
  const title = itinerary.title.substr(spaceIndex + 1);
  const homeLink = `/packages/${resource.path}?id=${resource.id}`;
  const nextLink = day < packageDetails.itinerary.length ? `${homeLink}&day=${day + 1}` : null;
  const prevLink = day > 1 ? `${homeLink}&day=${day - 1}` : null; // TODO: Scroll is breaking on this page

  return _react.default.createElement("div", {
    id: `dayItenary${index}`,
    className: "hide",
    "data-amp-bind-class": `dayItenary${index} ? 'overflowa sbcw itinerary-details-popup day-itenary' : 'hide'`
  }, _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "col-xs-12 sbcw pl0 pr0"
  }, _react.default.createElement("h2", {
    className: "f16 text-left fw4 pl48 pt15 pb15 relative pr15"
  }, _react.default.createElement(_Action.default, {
    events: {
      tap: [`AMP.setState({dayItenary${index} : !dayItenary${index}})`]
    }
  }, props => _react.default.createElement("button", _extends({
    className: "absolute-center-v l15 cross-common"
  }, props))), "Itinerary"))), _react.default.createElement("div", {
    className: "package-slider-img"
  }, _react.default.createElement(_PackageSlider.default, {
    images: itinerary.pictures,
    name: packageDetails.name,
    covers: packageDetails.covers
  })), _react.default.createElement("div", {
    className: "row row- p15 sbcw"
  }, _react.default.createElement("div", {
    className: "itinerary-days-flag mb15"
  }, "Day ", day), _react.default.createElement("h3", {
    className: "f16 pfc3 text-left fw9"
  }, title), _react.default.createElement(_ItineraryTags.default, {
    list: itinerary.categories,
    itineraryId: packageDetails.id,
    tagId: day
  }), _react.default.createElement("div", {
    className: "col-xs-12 p0 pb64"
  }, _react.default.createElement("div", {
    className: "f14 pfc3 fw4 text-left pt15"
  }, htmlToReactParser.parse(itinerary.description)), _react.default.createElement("p", {
    className: "text-left pfc3 fw7 f14 pt24"
  }, "Other Benefites"), _react.default.createElement("div", {
    className: "row row- inclusion-height-box"
  }, _react.default.createElement(_PackageIncExc.default, {
    inclusions: itinerary.inclusions,
    id: `daydetails_${packageDetails.id}`
  })))), _react.default.createElement(_DaysItinerary.default, {
    day: day,
    nextLink: nextLink,
    prevLink: prevLink,
    setItineraryDay: setItineraryDay,
    index: index
  }));
};

PackageDetailDayItinerary.propTypes = {
  packageDetails: _propTypes.default.object.isRequired,
  day: _propTypes.default.number.isRequired,
  resource: _propTypes.default.object.isRequired,
  replaceState: _propTypes.default.func.isRequired,
  itinerary: _propTypes.default.object,
  setItineraryDay: _propTypes.default.func.isRequired,
  showSection: _propTypes.default.bool.isRequired,
  index: _propTypes.default.number.isRequired
};
PackageDetailDayItinerary.defaultProps = {
  itinerary: {}
};
var _default = PackageDetailDayItinerary;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/Itenary/PackageDetailDayItinerary.scss":
/*!****************************************************************!*\
  !*** ./amp/screens/pdp/Itenary/PackageDetailDayItinerary.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"arrowtnc": "_1mg0Q",
	"right": "_2ia7s",
	"left": "_10b0U",
	"day-itenary": "_2ENvo",
	"cross-common": "_38Cq1",
	"itinerary-days-flag": "_2xzHv"
};

/***/ }),

/***/ "./amp/screens/pdp/Itenary/PackageSlider.js":
/*!**************************************************!*\
  !*** ./amp/screens/pdp/Itenary/PackageSlider.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.discountPercentage = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

__webpack_require__(/*! ./PackageSlider.scss */ "./amp/screens/pdp/Itenary/PackageSlider.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GDiscountDiv = _glamorous.default.div({
  boxShadow: '0 0 6px rgba(0,0,0,0.5)'
});

const GHighlightBannerDiv = _glamorous.default.div({
  backgroundColor: '#ffc057'
});

const GLuxuryDiv = _glamorous.default.div({
  width: '124px',
  height: '55px',
  left: '-3px',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  overflow: 'hidden',
  top: '8px'
});

const discountPercentage = (priceTotal, priceDiscount) => priceDiscount / (priceTotal / 100);

exports.discountPercentage = discountPercentage;

const PackageSlider = ({
  images,
  name,
  covers,
  dealsInfo,
  price,
  isDeal,
  isLuxury,
  hideDiscount
}) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    preloadImages: false,
    lazy: true,
    observer: true,
    observeParents: true
  };
  return _react.default.createElement("div", {
    className: "row row- relative"
  }, isDeal || isLuxury ? _react.default.createElement(GHighlightBannerDiv, {
    className: "p5 f12 pl15 pr15 text-center pfc3 wfull highlight-deals-banner"
  }, isDeal && dealsInfo.faq, " ", isLuxury && `Hassel Free Booking | All Inclusive | 24x7 Assistance`) : null, _react.default.createElement("div", {
    className: "relative"
  }, _react.default.createElement("div", {
    className: "row row- relative package-slider-img"
  }, _react.default.createElement("meta", {
    itemProp: "name",
    content: "Image"
  }), _react.default.createElement("amp-carousel", {
    width: "400",
    height: "300",
    layout: "responsive",
    type: "slides"
  }, images.map((s, i) => {
    return _react.default.createElement("div", null, _react.default.createElement("amp-img", {
      src: s.picture_details.imagekit_url,
      width: "411",
      height: "220",
      layout: "responsive",
      alt: name
    }, _react.default.createElement("p", {
      className: "sfcw absolute p8 b0 l0 wfull z10 fw9 package-slider-caption"
    }, s.picture_details.caption)));
  }))), isDeal && price.total && price.discount && !hideDiscount ? _react.default.createElement(GDiscountDiv, {
    className: "absolute radius2 t15 sbcw l15 z2 text-center"
  }, _react.default.createElement("p", {
    className: "f12 m0 p5"
  }, "Deal of the Day"), _react.default.createElement("div", {
    className: "flex alignCenter pbc1 justifyCenter pt5 pb5 pl8 pr8"
  }, _react.default.createElement("h6", {
    className: "f32 sfcw fw9 m0"
  }, Math.round(discountPercentage(price.total, price.discount))), _react.default.createElement("div", {
    className: "ml2"
  }, _react.default.createElement("p", {
    className: "f12 sfcw m0"
  }, "%"), _react.default.createElement("p", {
    className: "f12 sfcw m0"
  }, "off")))) : null, isLuxury && price.total && price.discount ? _react.default.createElement(GLuxuryDiv, {
    className: "absolute radius2 t15 l15 z2 "
  }) : null));
};

PackageSlider.propTypes = {
  images: _propTypes.default.object.isRequired,
  name: _propTypes.default.string.isRequired,
  covers: _propTypes.default.object.isRequired,
  dealsInfo: _propTypes.default.object,
  price: _propTypes.default.object,
  isDeal: _propTypes.default.bool,
  isLuxury: _propTypes.default.bool,
  hideDiscount: _propTypes.default.bool
};
PackageSlider.defaultProps = {
  dealsInfo: {},
  price: {},
  isDeal: false,
  isLuxury: false,
  hideDiscount: false
};
var _default = PackageSlider;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/Itenary/PackageSlider.scss":
/*!****************************************************!*\
  !*** ./amp/screens/pdp/Itenary/PackageSlider.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-slider-img": "_WnTEu",
	"package-slider-caption": "_264jw",
	"days-tag": "_2n8je"
};

/***/ }),

/***/ "./amp/screens/pdp/Pdp.js":
/*!********************************!*\
  !*** ./amp/screens/pdp/Pdp.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _AmpCarousel = _interopRequireDefault(__webpack_require__(/*! ./AmpCarousel */ "./amp/screens/pdp/AmpCarousel.js"));

var _QuickLinkNav = _interopRequireDefault(__webpack_require__(/*! ./QuickLinkNav */ "./amp/screens/pdp/QuickLinkNav.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! amp/modules/header/HeaderTitle */ "./amp/modules/header/HeaderTitle.js"));

__webpack_require__(/*! ./priceModule/PackageIncExc.scss */ "./amp/screens/pdp/priceModule/PackageIncExc.scss");

__webpack_require__(/*! amp/modules/common/SeoFooter.scss */ "./amp/modules/common/SeoFooter.scss");

var _PackageDetailsPrice = _interopRequireDefault(__webpack_require__(/*! ./priceModule/PackageDetailsPrice */ "./amp/screens/pdp/priceModule/PackageDetailsPrice.js"));

var _Highlights = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/Highlights */ "./amp/modules/common/Highlights.js"));

var _IncExclusion = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/IncExclusion/IncExclusion */ "./amp/modules/common/IncExclusion/IncExclusion.js"));

var _Itinerary = _interopRequireDefault(__webpack_require__(/*! amp/screens/pdp/Itenary/Itinerary */ "./amp/screens/pdp/Itenary/Itinerary.js"));

var _HotelFlight = _interopRequireDefault(__webpack_require__(/*! amp/screens/pdp/HotelFlight/HotelFlight */ "./amp/screens/pdp/HotelFlight/HotelFlight.js"));

var _ReadMoreByHeight = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/ReadMoreByHeight */ "./amp/modules/common/ReadMoreByHeight.js"));

var _HowItWorks = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/howItWorks/HowItWorks */ "./amp/modules/common/howItWorks/HowItWorks.js"));

var _SeoFooter2 = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/SeoFooter */ "./amp/modules/common/SeoFooter.js"));

var _BreadcrumbListing = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/Breadcrumb/BreadcrumbListing */ "./amp/modules/common/Breadcrumb/BreadcrumbListing.js"));

var _travelerReview = _interopRequireDefault(__webpack_require__(/*! amp/modules/travelerReview */ "./amp/modules/travelerReview/index.js"));

var _Faq = _interopRequireDefault(__webpack_require__(/*! amp/modules/Faq/Faq */ "./amp/modules/Faq/Faq.js"));

var _SimilarPackages = _interopRequireDefault(__webpack_require__(/*! amp/modules/similarPackages/SimilarPackages */ "./amp/modules/similarPackages/SimilarPackages.js"));

var _PackageDetailDayItinerary = _interopRequireDefault(__webpack_require__(/*! ./Itenary/PackageDetailDayItinerary */ "./amp/screens/pdp/Itenary/PackageDetailDayItinerary.js"));

var _seoHelpers = __webpack_require__(/*! amp/helpers/seoHelpers */ "./amp/helpers/seoHelpers.js");

var _urlHelpers = __webpack_require__(/*! amp/helpers/urlHelpers */ "./amp/helpers/urlHelpers.js");

var _InterLinking = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/InterLinking */ "./amp/modules/common/InterLinking.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function createHeaderConstants(packageDetails, faqs) {
  const headerConstants = [];

  if (packageDetails.overview) {
    headerConstants.push({
      title: 'Overview',
      section_name: 'overview_box'
    });
  }

  if (packageDetails.itinerary) {
    headerConstants.push({
      title: 'Itinerary',
      section_name: 'itinerary_box'
    });
  }

  if (packageDetails.hotels) {
    headerConstants.push({
      title: 'Hotels',
      section_name: 'hotel_box'
    });
  }

  if (packageDetails.incExc.inclusions && packageDetails.incExc.exclusions) {
    headerConstants.push({
      title: 'Inclusion / Exclusions',
      section_name: 'incexclusion_box'
    });
  }

  if (packageDetails.destinations.length && faqs.length) {
    headerConstants.push({
      title: 'FAQ',
      section_name: 'faq_box'
    });
  }

  return headerConstants;
}

let Pdp = (_temp2 = _class = class Pdp extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.getPageUrl = () => {
      const {
        packageDetails: {
          set_url
        }
      } = this.props;
      let link = `/packages/${set_url}`.split(/page\/\d+/).join('');

      if (link[link.length - 1] === '/') {
        link = link.substring(0, link.lastIndexOf('/'));
      }

      return `${_appConfig.default.api_protocol}://${_appConfig.default.server.public.host}${link}`;
    }, _temp;
  }

  getPageFullName() {
    const destination = this.props.packageDetails.destinations.length ? this.props.packageDetails.destinations[0].name : null;
    const setUrl = this.props.packageDetails.set_url;
    return `Package Page/${destination}/${setUrl}`;
  }

  renderHelmet(title) {
    const {
      metaTags: metaTagList,
      location,
      packageDetails: {
        set_url
      }
    } = this.props;
    const originalUrl = `${_appConfig.default.api_protocol}://${_appConfig.default.server.public.host}/packages/${set_url}`;
    const originalPathname = `/packages/${set_url}`;
    const allowedAmpUrls = ['azerbaijan-5-days-tour', '7nights-8days-israel-tour-from-chennai', 'delhi-1n-2d-tour', 'chennai-1n-2d-tour', '7nights-8days-israel-tour-from-hyderabad'];
    let isAmp = false;
    allowedAmpUrls.map(url => {
      if (originalPathname.includes(url)) {
        isAmp = true;
      }
    });
    return _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, (0, _seoHelpers.getTitle)(title, metaTagList)), !isAmp && _react.default.createElement("meta", {
      name: "robots",
      content: "noindex, nofollow"
    }), _react.default.createElement("meta", {
      name: "theme-color",
      content: "#68c4c1"
    }), _react.default.createElement("meta", {
      property: "og:url",
      content: this.getPageUrl()
    }), _react.default.createElement("meta", {
      property: "og:site_name",
      content: "TravelTriangle.com"
    }), _react.default.createElement("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), _react.default.createElement("meta", {
      name: "description",
      content: (0, _seoHelpers.getDescription)('', metaTagList)
    }), _react.default.createElement("meta", {
      property: "og:description",
      content: (0, _seoHelpers.getDescription)('', metaTagList)
    }), _react.default.createElement("meta", {
      name: "page_fullname",
      content: this.getPageFullName()
    }), _react.default.createElement("meta", {
      property: "al:android:url",
      content: `tt://${(0, _urlHelpers.getAppSchemeUrl)(originalUrl, originalPathname, location, 1)}`
    }), _react.default.createElement("meta", {
      property: "al:ios:url",
      content: `ttiosapp://applinks?al_applink_data=${(0, _urlHelpers.iosDeepLink)(`${_appConfig.default.api_protocol}://${_appConfig.default.server.public.host}/${(0, _urlHelpers.getAppSchemeUrl)(originalUrl, originalPathname, location, 1, 'ios')}`)}`
    }), _react.default.createElement("meta", {
      property: "should_fallback",
      content: "false"
    }), _react.default.createElement("meta", {
      property: "fb:app_id",
      content: "168534953203541"
    }), (0, _seoHelpers.renderMetaTags)(metaTagList, isAmp), _react.default.createElement("link", {
      rel: "canonical",
      href: `${_appConfig.default.api_protocol}://${_appConfig.default.server.public.host}/packages/${set_url}`
    }));
  }

  render() {
    const {
      packageDetails,
      location,
      backUrl,
      faqs,
      breadcrumbs,
      footerLinks,
      similarPackages,
      detailsResource
    } = this.props;
    const packageType = packageDetails.titles.overview.toLowerCase();
    const isDeal = packageType === 'deals';
    const isLuxury = packageType === 'luxury';
    const title = packageDetails.name || 'Package Details';
    const TravelerReviewContainer = _travelerReview.default.container;
    const packageId = packageDetails.id || undefined;
    const itineraryDayValue = 2;
    const formUrl = `/requested_trips/new?mview=true&srcUrl=${location.pathname}`;
    return _react.default.createElement("div", {
      className: "sbc5"
    }, this.renderHelmet(title), _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement(_HeaderTitle.default, {
      showShare: true,
      heading: packageDetails.heading,
      url: packageDetails.share_url,
      title: title,
      plpHeading: packageDetails.plp_heading || '',
      backUrl: location.action === 'POP' ? backUrl : ''
    })), _react.default.createElement(_QuickLinkNav.default, {
      options: createHeaderConstants(packageDetails, faqs),
      dealsInfo: packageDetails.titles,
      location: location
    }), _react.default.createElement(_AmpCarousel.default, {
      images: packageDetails.slider_pic,
      name: packageDetails.name,
      covers: packageDetails.covers,
      dealsInfo: packageDetails.titles,
      price: packageDetails.price,
      isDeal: isDeal,
      isLuxury: isLuxury
    }), _react.default.createElement(_PackageDetailsPrice.default, {
      hotels: packageDetails.hotels,
      dealsInfo: packageDetails.titles,
      pkg: packageDetails,
      isDeal: isDeal,
      isLuxury: isLuxury,
      packageDetails: this.props.packageDetails,
      location: location
    }), _react.default.createElement("div", {
      className: "mb8 sbcw p15 read-more-content",
      id: "overview_box-triggerlink"
    }, _react.default.createElement(_ReadMoreByHeight.default, {
      heading: "Overview",
      title: "Overview",
      plpHeading: packageDetails.plp_heading,
      content: packageDetails.overview,
      maxHeight: 64,
      showTitle: true
    })), packageDetails.highlights && packageDetails.highlights.length ? _react.default.createElement(_Highlights.default, {
      list: packageDetails.highlights
    }) : null, _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_Itinerary.default, {
      itinerary: packageDetails.itinerary,
      titleHead: "Itinerary",
      id: packageDetails.id,
      packageDetails: packageDetails,
      setItineraryDay: this.setItineraryDay
    })), _react.default.createElement("div", {
      id: "itinerary_section_detail",
      className: itineraryDayValue && itineraryDayValue <= packageDetails.itinerary.length ? "row row- z11 wfull hfull t0 l0 overflowa sbcw" : "hide"
    }, packageDetails.itinerary.map((itinerary, index) => {
      return _react.default.createElement(_PackageDetailDayItinerary.default, {
        packageDetails: packageDetails,
        day: index + 1,
        itinerary: itinerary,
        resource: detailsResource,
        setItineraryDay: this.setItineraryDay,
        showSection: itineraryDayValue,
        index: index
      });
    })), _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_HotelFlight.default, {
      hotels: packageDetails.hotels,
      hotelTitle: "Hotel",
      flights: packageDetails.flights // trackSegment={trackSegmentEvent}
      ,
      inclusions: packageDetails.incExc.inclusions
    })), _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_IncExclusion.default, {
      inclusions: packageDetails.inclusion_text,
      exclusions: packageDetails.exclusion_text
    })), _react.default.createElement("div", {
      className: "mkt-mob-exit-intent mb8 row row- sbcw pt15 relative"
    }, _react.default.createElement("amp-iframe", {
      width: "400",
      height: "500",
      layout: "responsive",
      sandbox: "allow-scripts allow-popups allow-forms allow-same-origin",
      src: "https://js.traveltriangle.com/stage/public-product/exit-intent-viewport.html?var=29012020v16&utm_source=blog&mview=true&srcUrl='.get_permalink().'amp/"
    })), footerLinks.length ? _react.default.createElement(_InterLinking.default, {
      footerLinks: footerLinks
    }) : null, _react.default.createElement("div", {
      className: "row row- pb8 sbc5"
    }, _react.default.createElement(_Faq.default, {
      faqs: faqs,
      destination: packageDetails.destinations.length ? packageDetails.destinations[0] : null,
      title: "FAQ"
    })), _react.default.createElement("div", {
      className: "row row-  sbc5 traveller-new-ui"
    }, _react.default.createElement(TravelerReviewContainer, {
      destination: packageDetails.destinations && packageDetails.destinations.length && packageDetails.destinations[0].name
    })), similarPackages.length ? _react.default.createElement("div", {
      className: "row row- pt8 pb0 sbc5 similar-packages-new-ui"
    }, _react.default.createElement(_SimilarPackages.default, {
      packageId: packageId,
      loadedSimilarPackages: true,
      similarPackages: similarPackages
    })) : null, _react.default.createElement(_HowItWorks.default, null), breadcrumbs.length ? _react.default.createElement(_BreadcrumbListing.default, {
      breadcrumbs: breadcrumbs
    }) : null, packageDetails.footer_sections && packageDetails.footer_sections.length ? _react.default.createElement(_SeoFooter2.default, {
      footerSections: packageDetails.footer_sections
    }) : null, _react.default.createElement("div", {
      className: "fixed b0 l0 r0 z10 p8 sbcw bs4"
    }, _react.default.createElement("div", {
      className: "col-xs-4 pl0 pr8"
    }, _react.default.createElement("a", {
      className: "btn-pri-large pl15 pr15 wfull ripple",
      href: "tel:844 844 9287"
    }, "Call Us")), _react.default.createElement("div", {
      className: "col-xs-8 pr0 pl0"
    }, _react.default.createElement("a", {
      href: formUrl,
      className: "wfull btn-filled-pri-large"
    }, "Customize & Get Quotes"))));
  }

}, _class.propTypes = {
  packageDetails: _propTypes.default.object,
  location: _propTypes.default.object,
  backUrl: _propTypes.default.string,
  faqs: _propTypes.default.array,
  breadcrumbs: _propTypes.default.array,
  footerLinks: _propTypes.default.array,
  similarPackages: _propTypes.default.array,
  metaTags: _propTypes.default.array,
  detailsResource: _propTypes.default.object
}, _temp2);
var _default = Pdp;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/QuickLinkNav.js":
/*!*****************************************!*\
  !*** ./amp/screens/pdp/QuickLinkNav.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let QuickLinkNav = (_temp = _class = class QuickLinkNav extends _react.default.Component {
  render() {
    const {
      options,
      dealsInfo,
      location
    } = this.props;
    return _react.default.createElement("div", {
      className: "customPills"
    }, _react.default.createElement("div", {
      className: "sticky-outer-wrapper"
    }, _react.default.createElement("div", {
      className: "sticky-inner-wrapper"
    }, _react.default.createElement("div", {
      className: "quicklinksContainer flex spaceBetween sbcw "
    }, _react.default.createElement("div", {
      className: "noBeforeAfter flex alignCenter overflowXscroll"
    }, _react.default.createElement("ul", {
      className: "flex flexFull alignCenter m0 p0 list-reset"
    }, options && options.map((option, i) => _react.default.createElement("li", {
      key: i
    }, _react.default.createElement(_Action.default, {
      events: {
        tap: [`AMP.scrollTo('id' = ${option.section_name + '-triggerlink'}, position='center')`]
      }
    }, props => _react.default.createElement("a", _extends({
      className: "relative f14 fw7 pfc3 p15 block",
      id: option.section_name
    }, props), option.title))))), options && options.length && dealsInfo.overview.toLowerCase() !== 'deals' ? _react.default.createElement("div", {
      className: "pr15 ml15"
    }, _react.default.createElement("button", {
      className: "wfull"
    }, _react.default.createElement("div", {
      className: "relative f14 fw9 btn-pri-large pl15 pr15 pt8 pb8 nowrap"
    }, _react.default.createElement("a", {
      href: `/requested_trips/new?mview=true&srcUrl=${location.pathname}`
    }, " Get Quotes ")))) : null)))));
  }

}, _class.propTypes = {
  options: _propTypes.default.array,
  ScrollLink: _propTypes.default.func,
  dealsInfo: _propTypes.default.object,
  location: _propTypes.default.object
}, _class.defaultProps = {
  options: [],
  ScrollLink: () => {},
  dealsInfo: {},
  location: {}
}, _temp);
var _default = QuickLinkNav;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/priceModule/PackageCities.js":
/*!******************************************************!*\
  !*** ./amp/screens/pdp/priceModule/PackageCities.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./PackageCities.scss */ "./amp/screens/pdp/priceModule/PackageCities.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderPackageCitiesFromArray = (cities, isDealsCard) => {
  if (!cities.length) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "package-cities"
  }, _react.default.createElement("ul", {
    className: "package-cities-list"
  }, cities.map((city, i) => _react.default.createElement("li", {
    className: isDealsCard ? 'f12' : '',
    key: i
  }, city))));
};

const renderPackageCitiesFromObject = (citiesWithDays, isDealsCard) => {
  const cities = Object.keys(citiesWithDays);

  if (!cities.length) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "package-cities"
  }, _react.default.createElement("ul", {
    className: "package-cities-list"
  }, _react.default.createElement("li", {
    className: "fw7 f12 list-heading hide"
  }, "Cities:"), cities.map((city, i) => _react.default.createElement("li", {
    className: isDealsCard ? 'f12' : '',
    key: i
  }, city, " ", citiesWithDays[city] ? ` (${citiesWithDays[city]}D)` : null))));
};

const PackageCities = ({
  cities,
  isDealsCard
}) => {
  if (cities instanceof Array) {
    return renderPackageCitiesFromArray(cities, isDealsCard);
  } else {
    return renderPackageCitiesFromObject(cities, isDealsCard);
  }
};

PackageCities.propTypes = {
  cities: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]).isRequired,
  isDealsCard: _propTypes.default.bool
};
PackageCities.defaultProps = {
  isDealsCard: false
};
var _default = PackageCities;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/priceModule/PackageCities.scss":
/*!********************************************************!*\
  !*** ./amp/screens/pdp/priceModule/PackageCities.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-cities": "_2j894",
	"package-cities-list": "_nTL0F",
	"f12": "_3xP57",
	"addCompareDiv": "_2ldUB",
	"fixed-menu-button": "_1LytZ"
};

/***/ }),

/***/ "./amp/screens/pdp/priceModule/PackageDaysDiscount.js":
/*!************************************************************!*\
  !*** ./amp/screens/pdp/priceModule/PackageDaysDiscount.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

__webpack_require__(/*! amp/modules/packageCard/PackageDaysDiscount.scss */ "./amp/modules/packageCard/PackageDaysDiscount.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let PackageDaysDiscount = class PackageDaysDiscount extends _react.Component {
  render() {
    const {
      price,
      discount,
      hideDiscount
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "row row- mt8"
    }, _react.default.createElement(_Action.default, {
      events: {
        tap: ['AMP.setState({showToolTip : !showToolTip})']
      }
    }, props => _react.default.createElement("button", _extends({}, props, {
      className: "package-info-icon package-info-icon-custom-left relative fright"
    }), _react.default.createElement("div", {
      "data-amp-bind-class": `showToolTip ? '':'hide'`,
      className: "hide"
    }, _react.default.createElement("div", {
      className: hideDiscount ? 'tooltip-upwards' : 'tooltipdata-up'
    }, _react.default.createElement("p", {
      className: "f12 sfcw m0 text-left"
    }, "Exact prices may vary based on availability."))))), !hideDiscount ? _react.default.createElement("span", {
      className: "discount-ribbon fright mr5 ml5"
    }, (0, _parsers.getPercentage)({
      price,
      discount
    }), "% Off") : null));
  }

};
PackageDaysDiscount.propTypes = {
  price: _propTypes.default.number.isRequired,
  discount: _propTypes.default.number.isRequired,
  hideDiscount: _propTypes.default.bool
};
PackageDaysDiscount.defaultProps = {
  hideDiscount: false
};
var _default = PackageDaysDiscount;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/priceModule/PackageDetailsPrice.js":
/*!************************************************************!*\
  !*** ./amp/screens/pdp/priceModule/PackageDetailsPrice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _PackagePrice = _interopRequireDefault(__webpack_require__(/*! ./PackagePrice */ "./amp/screens/pdp/priceModule/PackagePrice.js"));

var _PackageCities = _interopRequireDefault(__webpack_require__(/*! ./PackageCities */ "./amp/screens/pdp/priceModule/PackageCities.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! ./PackageIncExc */ "./amp/screens/pdp/priceModule/PackageIncExc.js"));

var _StarMonthFilter = _interopRequireDefault(__webpack_require__(/*! ./StarMonthFilter */ "./amp/screens/pdp/priceModule/StarMonthFilter.js"));

__webpack_require__(/*! ./PackageIncExc.scss */ "./amp/screens/pdp/priceModule/PackageIncExc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackageDetailsPrice = ({
  pkg,
  dealsInfo,
  isDeal,
  isLuxury,
  update,
  pushState,
  selectedMonth,
  packageDetails,
  updateSelectedMonth,
  updatePriceCallBack,
  animationPrice,
  location
}) => {
  const {
    package_options,
    hideDiscount
  } = pkg;
  const {
    hotel_price_details
  } = package_options;
  const hotelRatings = hotel_price_details.map(hotel => hotel.hotel_star).sort((a, b) => a - b);
  const filteredHotelRatings = hotelRatings.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
  return _react.default.createElement("div", {
    className: "mb8 sbcw"
  }, _react.default.createElement(_StarMonthFilter.default, {
    update: update,
    pushState: pushState,
    selectedMonth: selectedMonth || 0,
    packageDetails: packageDetails,
    updateSelectedMonth: updateSelectedMonth,
    location: location,
    isDealOrLuxury: isDeal || isLuxury
  }), _react.default.createElement("div", {
    className: "p15"
  }, _react.default.createElement(_PackageCities.default, {
    cities: pkg.city_list_with_days || {}
  })), _react.default.createElement("div", {
    className: "p15 pb4 pt0"
  }, _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "flex alignCenter mb8"
  }, _react.default.createElement("p", {
    className: "f12 fw9 sbco"
  }, pkg.covers.days, " Days & ", pkg.covers.nights, " Nights"), (isDeal || isLuxury) && pkg.hotels.length ? _react.default.createElement("div", {
    className: "flex alignCenter"
  }, _react.default.createElement("span", {
    className: "ml5 mr5 iblock"
  }, "|"), _react.default.createElement("p", {
    className: "flex alignCenter at_hotelstar"
  }, filteredHotelRatings.join(', '), _react.default.createElement("span", {
    className: "f12 fw4 ml5"
  }, "Star Hotels Included"))) : null), _react.default.createElement("div", {
    className: `flex alignCenter`
  }, _react.default.createElement(_PackagePrice.default, {
    price: pkg.price.total,
    priceUnit: pkg.price.miniDesc,
    currency: pkg.price.currency,
    discount: pkg.price.discount,
    priceFrom: pkg.price.from,
    priceTo: pkg.price.to,
    dealsInfo: isDeal || isLuxury,
    days: pkg.covers.days,
    nights: pkg.covers.nights,
    animationPrice: animationPrice,
    hideDiscount: hideDiscount
  }))), _react.default.createElement("div", {
    className: "p0"
  }, isDeal && dealsInfo.itinerary ? _react.default.createElement("p", {
    className: "f12 mt8"
  }, _react.default.createElement("strong", null, "Validity: "), " ", dealsInfo.itinerary) : null), _react.default.createElement("span", {
    className: "divider-line sbc5 row block"
  }), _react.default.createElement("h4", {
    className: "fw9 fw9 mt15 mb15"
  }, "Price Inclusive of"), _react.default.createElement("div", {
    className: "row inclusion-height-box"
  }, _react.default.createElement(_PackageIncExc.default, {
    inclusions: pkg.inclusions,
    id: `details_${pkg.id}`
  }))));
};

PackageDetailsPrice.propTypes = {
  pkg: _propTypes.default.object.isRequired,
  dealsInfo: _propTypes.default.bool,
  isDeal: _propTypes.default.bool,
  isLuxury: _propTypes.default.bool,
  update: _propTypes.default.func,
  pushState: _propTypes.default.func,
  selectedMonth: _propTypes.default.number,
  packageDetails: _propTypes.default.object,
  location: _propTypes.default.object,
  updateSelectedMonth: _propTypes.default.func,
  updatePriceCallBack: _propTypes.default.func,
  animationPrice: _propTypes.default.bool
};
PackageDetailsPrice.defaultProps = {
  dealsInfo: false,
  isDeal: false,
  isLuxury: false
};
var _default = PackageDetailsPrice;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/priceModule/PackageIncExc.js":
/*!******************************************************!*\
  !*** ./amp/screens/pdp/priceModule/PackageIncExc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

var _YellowDot = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/YellowDot */ "./amp/modules/common/YellowDot.js"));

__webpack_require__(/*! ./PackageIncExc.scss */ "./amp/screens/pdp/priceModule/PackageIncExc.scss");

var _IconMappings = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Icon/IconMappings */ "./amp/helpers/Icon/IconMappings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */
const InclusionNotification = ['flights'];

const getIconText = (inclusion, hotelInfo) => {
  if (inclusion.key === 'hotel' && hotelInfo) {
    return `Upto ${hotelInfo[0]} Stars`;
  }

  return inclusion.text;
};

const PackageIncExc = ({
  inclusions,
  id,
  noScroll,
  hotelInfo,
  isPackageRevamp
}) => {
  const inclusionsAval = isPackageRevamp ? inclusions.filter(inclusion => inclusion.available).slice(0, 4) : inclusions;
  const inclusionList = inclusionsAval.map((inclusion, index) => {
    const iconName = _IconMappings.default[(0, _parsers.capitalizeFirstLetter)(inclusion.key.replace(/[\s-_]/g, ''))] || 'DefaultIcon';
    const disabledElementClass = inclusion.available ? '' : 'not-included';
    const disabledIconClass = inclusion.available ? '' : 'greyscale';
    const inclusionTextHidden = inclusion.text ? '' : 'hide';
    const InclusionNotificationPresent = inclusion.available && InclusionNotification.indexOf(inclusion.key) > -1 ? 'relative' : '';
    return _react.default.createElement("div", {
      className: `incl-excl-box ${inclusionTextHidden} ${disabledElementClass} ${InclusionNotificationPresent}`,
      key: `${id}_${inclusion.key}_${index}`
    }, inclusion.available && InclusionNotification.indexOf(inclusion.key) > -1 ? _react.default.createElement(_YellowDot.default, {
      id: "flightMessage",
      dotBoxStyle: {
        width: '10px',
        height: '10px',
        position: 'absolute',
        top: '6px',
        right: '3px'
      },
      dotSmallBoxStyle: {
        width: '5px',
        height: '5px'
      },
      spinnerStyle: {
        width: '10px',
        height: '10px',
        zIndex: '1'
      },
      hoverData: "Flight prices are dynamic and may change at the time of booking"
    }) : null, _react.default.createElement("span", {
      className: "incl-excl-img",
      style: {
        background: `url('https://js.traveltriangle.com/public-product/amp-icons-v0.svg#${iconName}-usage') no-repeat`
      }
    }), _react.default.createElement("p", {
      className: "f10"
    }, getIconText(inclusion, hotelInfo)));
  });
  return _react.default.createElement("div", {
    className: `row row- incl-excl-con ${noScroll ? 'inc-no-scroll' : ''} `
  }, _react.default.createElement("div", {
    className: "row row- incl-excl-con-inner"
  }, inclusionList));
};

PackageIncExc.propTypes = {
  inclusions: _propTypes.default.array.isRequired,
  hotelInfo: _propTypes.default.array.isRequired,
  id: _propTypes.default.string,
  noScroll: _propTypes.default.bool,
  isPackageRevamp: _propTypes.default.bool
};
PackageIncExc.defaultProps = {
  noScroll: false,
  id: 'default_1',
  isPackageRevamp: false
};
var _default = PackageIncExc;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/priceModule/PackageIncExc.scss":
/*!********************************************************!*\
  !*** ./amp/screens/pdp/priceModule/PackageIncExc.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"divider-line": "_2-R7y",
	"inclusion-height-box": "_3pnFX",
	"incl-excl-con": "_21iHL",
	"incl-excl-con-inner": "_1O6gy",
	"package-card": "_1uAcB",
	"incl-excl-con-inner-deals": "_3P_Vh",
	"incl-excl-box": "_SB1g3",
	"not-included": "_3Yq0k",
	"incl-excl-img": "_3yI53",
	"inc-no-scroll": "_29B2C"
};

/***/ }),

/***/ "./amp/screens/pdp/priceModule/PackagePrice.js":
/*!*****************************************************!*\
  !*** ./amp/screens/pdp/priceModule/PackagePrice.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

var _PackageDaysDiscount = _interopRequireDefault(__webpack_require__(/*! ./PackageDaysDiscount */ "./amp/screens/pdp/priceModule/PackageDaysDiscount.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackagePrice = ({
  priceUnit,
  price,
  discount,
  currency,
  priceFrom,
  priceTo,
  dealsInfo,
  days,
  nights,
  hideDiscount
}) => _react.default.createElement("div", {
  className: "row row- flex wfull alignCenter"
}, _react.default.createElement("div", null, _react.default.createElement("p", {
  className: "f12 pfc4 pb5 fw4"
}, "Starting from:"), _react.default.createElement("h4", {
  className: "package-price sfc3 fw7 f24 pb0"
}, _react.default.createElement("div", null, _react.default.createElement("span", {
  "data-amp-bind-text": "selectedMonth ? filterPrice[selectedMonth].start_price+'/-' : filterPrice['default_start_price']+'/-'"
}, (0, _parsers.parsePrice)({
  price: priceFrom || price - discount,
  currency
}), "/-"), !hideDiscount ? _react.default.createElement("span", {
  "data-amp-bind-text": "selectedMonth ? filterPrice[selectedMonth].end_price+'/-': filterPrice['default_end_price']+'/-'",
  className: "f12 fw4 ml8 pfc3 tdl"
}, (0, _parsers.parsePrice)({
  price: priceTo || price,
  currency
}), "/-") : null)), _react.default.createElement("p", {
  className: "f12"
}, priceUnit)), dealsInfo && !hideDiscount ? _react.default.createElement("span", {
  className: "discount-ribbon fright mt24 ml8"
}, (0, _parsers.getPercentage)({
  price,
  discount
}), "% Off") : null, dealsInfo ? null : _react.default.createElement(_PackageDaysDiscount.default, {
  days: days,
  nights: nights,
  price: price,
  discount: discount,
  hideDiscount: hideDiscount
}));

PackagePrice.propTypes = {
  priceUnit: _propTypes.default.string,
  price: _propTypes.default.number.isRequired,
  discount: _propTypes.default.number.isRequired,
  currency: _propTypes.default.string,
  priceFrom: _propTypes.default.number,
  priceTo: _propTypes.default.number,
  days: _propTypes.default.number,
  nights: _propTypes.default.number,
  dealsInfo: _propTypes.default.bool.isRequired,
  hideDiscount: _propTypes.default.bool
};
PackagePrice.defaultProps = {
  priceUnit: 'per person',
  currency: 'Rupee',
  hideDiscount: false
};
var _default = PackagePrice;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/priceModule/StarMonthFilter.js":
/*!********************************************************!*\
  !*** ./amp/screens/pdp/priceModule/StarMonthFilter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

var _parsers = __webpack_require__(/*! amp/utils/parsers */ "./amp/utils/parsers.js");

__webpack_require__(/*! ./StarMonthFilter.scss */ "./amp/screens/pdp/priceModule/StarMonthFilter.scss");

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let StarMonthFilter = (_temp = _class = class StarMonthFilter extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    const options = {};

    try {
      options.month = this.props.packageDetails.month_options.month_ranges || [];
      options.package = this.props.packageDetails.package_options.hotel_price_details || [];
      options.checked = {
        month: this.props.selectedMonth || (0, _DateTime.getCurrentMonth)() + 1,
        package: options.package.filter(e => e.is_checked)[0].package_id
      };
    } catch (e) {
      options.month = [];
      options.package = [];
      options.checked = {
        month: null,
        package: null
      };
    }

    this.state = {
      month: options.checked.month,
      package: options.checked.package,
      options
    };
  }

  render() {
    const {
      packageDetails,
      location,
      isDealOrLuxury
    } = this.props;
    const {
      options,
      month
    } = this.state;
    const data = {};
    options.month.map(opt => {
      opt.start_price = (0, _parsers.parsePrice)({
        price: opt.start_price
      });
      opt.end_price = (0, _parsers.parsePrice)({
        price: opt.end_price
      });
      data[opt.id] = opt;
    });
    data.default_start_price = data[month].start_price;
    data.default_end_price = data[month].end_price;
    return _react.default.createElement("div", null, _react.default.createElement("amp-state", {
      id: "filterPrice"
    }, _react.default.createElement("script", {
      type: "application/json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(data)
      }
    })), _react.default.createElement("div", {
      className: isDealOrLuxury ? 'hide' : 'clearfix p15 sbcw bb'
    }, _react.default.createElement("div", {
      className: "col-xs-6 pl0 pr4"
    }, _react.default.createElement("p", {
      className: "f14 fw9 mb5"
    }, "Hotel Star Rating"), _react.default.createElement("div", {
      className: "relative dropDown-container"
    }, _react.default.createElement(_Action.default, {
      events: {
        change: ['AMP.navigateTo(url=event.value)']
      }
    }, props => _react.default.createElement("select", props, this.state.options.package.length && this.sortStarOptions(this.state.options.package))))), _react.default.createElement("div", {
      className: "col-xs-6 pl4 pr0"
    }, _react.default.createElement("p", {
      className: "f14 fw9 mb5"
    }, "Month of Travel"), _react.default.createElement("div", {
      className: "relative dropDown-container"
    }, _react.default.createElement(_Action.default, {
      events: {
        change: ['AMP.setState({selectedMonth : event.value})']
      }
    }, props => {
      return _react.default.createElement("select", props, this.state.options.month.length && this.sortMonthOptions(this.state.options.month));
    })))));
  }

}, _initialiseProps = function () {
  this.sortStarOptions = options => options.map(opt => {
    const {
      packageDetails: {
        set_url
      }
    } = this.props;
    const value = `${_appConfig.default.api_protocol}//${_appConfig.default.server.public.host}/packages/${set_url}?id=${opt.package_id}`;
    return _react.default.createElement("option", {
      key: opt.package_id,
      value: value
    }, `Upto ${opt.hotel_star} star hotels`);
  });

  this.sortMonthOptions = options => {
    const {
      packageDetails: {
        id
      }
    } = this.props;
    return options.map(opt => _react.default.createElement("option", {
      key: opt.id,
      value: opt.id
    }, opt.month_value));
  };

  this.getSelectedStarDetail = package_id => {
    return this.props.packageDetails && this.props.packageDetails.package_options && this.props.packageDetails.package_options.hotel_price_details && this.props.packageDetails.package_options.hotel_price_details.filter(hotel => hotel.package_id === parseInt(package_id));
  };
}, _temp);
StarMonthFilter.propTypes = {
  starRating: _propTypes.default.number,
  month: _propTypes.default.string,
  packageDetails: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  update: _propTypes.default.func.isRequired,
  updateSelectedMonth: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  selectedMonth: _propTypes.default.number.isRequired,
  isDealOrLuxury: _propTypes.default.bool.isRequired
};
StarMonthFilter.defaultProps = {
  starRating: 3,
  month: 'May'
};
var _default = StarMonthFilter;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/pdp/priceModule/StarMonthFilter.scss":
/*!**********************************************************!*\
  !*** ./amp/screens/pdp/priceModule/StarMonthFilter.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"dropDown-container": "_2jHP5"
};

/***/ }),

/***/ "./amp/utils/parsers.js":
/*!******************************!*\
  !*** ./amp/utils/parsers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDestinationToShow = exports.parseDestinationsToShow = exports.capitalizeFirstLetter = exports.numberWithCommas = exports.currencyToSymbol = exports.parsePrice = exports.getPercentage = void 0;

const capitalizeEveryFirstLetter = string => {
  let separator = ' ';

  if (string.match('-')) {
    separator = '-';
  }

  return string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(separator);
};

const currencySymbols = {
  Rupee: '₹',
  INR: '₹',
  Dollar: '$',
  Euro: '€',
  SGD: 'S$',
  MYR: 'MYR',
  PHP: 'PHP',
  GBP: '£',
  AUD: 'A$',
  CAD: 'C$',
  SAR: 'SAR',
  LBP: 'LBP',
  ZAR: 'ZAR',
  PKR: 'PKR',
  AED: 'AED',
  CHF: 'CHF',
  JPY: 'JPY',
  NZD: 'NZ$'
};

const getPercentage = ({
  price = 0,
  discount = 0
}) => Math.round(discount / price * 100);

exports.getPercentage = getPercentage;

const parsePrice = ({
  price,
  currency = 'Rupee'
}) => `${currencyToSymbol(currency)}${numberWithCommas(Math.round(price))}`;

exports.parsePrice = parsePrice;

const currencyToSymbol = currency => currencySymbols[currency] || currency;

exports.currencyToSymbol = currencyToSymbol;

const numberWithCommas = number => {
  const parts = (number || '').toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

exports.numberWithCommas = numberWithCommas;

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

exports.capitalizeFirstLetter = capitalizeFirstLetter;

const parseDestinationsToShow = (destinations = [], separater = '-') => destinations.join(separater);

exports.parseDestinationsToShow = parseDestinationsToShow;

const parseDestinationToShow = (destination = '') => {
  if (destination) {
    return capitalizeEveryFirstLetter(destination).replace(/-/g, ' ');
  }

  return '';
};

exports.parseDestinationToShow = parseDestinationToShow;

/***/ }),

/***/ "./app/constants/Packages/InclusionNotification.js":
/*!*********************************************************!*\
  !*** ./app/constants/Packages/InclusionNotification.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InclusionNotification = void 0;
const InclusionNotification = ['flights'];
exports.InclusionNotification = InclusionNotification;

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/chunk.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/chunk.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbXAvaGVscGVycy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL2hlbHBlcnMvSWNvbi9JY29uTWFwcGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL2hlbHBlcnMvc2VvSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9GYXEvRmFxLmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL0ZhcS9GYXEuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9jb21tb24vQWdlbnRSYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0FnZW50UmF0aW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0JyZWFkY3J1bWIvQnJlYWRjcnVtYi5zY3NzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2NvbW1vbi9CcmVhZGNydW1iL0JyZWFkY3J1bWJMaXN0aW5nLmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2NvbW1vbi9IaWdobGlnaHRzLmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2NvbW1vbi9IaWdobGlnaHRzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0luY0V4Y2x1c2lvbi9FeGNsdXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0luY0V4Y2x1c2lvbi9JbmNFeGNsdXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0luY0V4Y2x1c2lvbi9JbmNFeGNsdXNpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9jb21tb24vSW5jRXhjbHVzaW9uL0luY2x1c2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9jb21tb24vSW5jRXhjbHVzaW9uL0luY2x1c2lvbi5zY3NzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2NvbW1vbi9JbnRlckxpbmtpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0l0aW5lcmFyeVRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL1JlYWRNb3JlQnlIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL1Nlb0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9jb21tb24vU2VvRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL1llbGxvd0RvdC5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9jb21tb24vaG93SXRXb3Jrcy9Ib3dJdFdvcmtzLmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2NvbW1vbi9ob3dJdFdvcmtzL2hvd2l0d29ya3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9jb21tb24vcmVhZE1vcmVCeUhlaWdodC5zY3NzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2hlYWRlci9IZWFkZXJUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9MaXN0aW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvcGFja2FnZUNhcmQvUGFja2FnZUNhcmRFeHBlcmltZW50LmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL3BhY2thZ2VDYXJkL1BhY2thZ2VDaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvcGFja2FnZUNhcmQvUGFja2FnZUNpdGllcy5zY3NzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL3BhY2thZ2VDYXJkL1BhY2thZ2VEYXlzRGlzY291bnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlSW1nVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvcGFja2FnZUNhcmQvUGFja2FnZUltZ1RpdGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvcGFja2FnZUNhcmQvUGFja2FnZUluY0V4Yy5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlUHJpY2VFeHBlcmltZW50LmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL3NpbWlsYXJQYWNrYWdlcy9TaW1pbGFyUGFja2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvc2ltaWxhclBhY2thZ2VzL1NpbWlsYXJQYWNrYWdlcy5zY3NzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL3RyYXZlbGVyUmV2aWV3L1RyYXZlbGVyUmV2aWV3LmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL3RyYXZlbGVyUmV2aWV3L1RyYXZlbGVyUmV2aWV3TmV3Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy90cmF2ZWxlclJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvQW1wQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL0FtcENhcm91c2VsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL0hvdGVsRmxpZ2h0L0hvdGVsLmpzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9Ib3RlbEZsaWdodC9Ib3RlbC5zY3NzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9Ib3RlbEZsaWdodC9Ib3RlbENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL0hvdGVsRmxpZ2h0L0hvdGVsQ2FyZC5zY3NzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9Ib3RlbEZsaWdodC9Ib3RlbEZsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvSG90ZWxGbGlnaHQvSG90ZWxGbGlnaHQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvSG90ZWxGbGlnaHQvTm9Ib3RlbEluY2x1ZGVkLmpzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9JdGVuYXJ5L0RheXNJdGluZXJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL0l0ZW5hcnkvSXRpbmVyYXJ5LmpzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9JdGVuYXJ5L0l0aW5lcmFyeS5zY3NzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9JdGVuYXJ5L0l0aW5lcmFyeVBpY3R1cmVTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL0l0ZW5hcnkvSXRpbmVyYXJ5VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvSXRlbmFyeS9QYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5LmpzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9JdGVuYXJ5L1BhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnkuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvSXRlbmFyeS9QYWNrYWdlU2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9JdGVuYXJ5L1BhY2thZ2VTbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvUGRwLmpzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9RdWlja0xpbmtOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL3ByaWNlTW9kdWxlL1BhY2thZ2VDaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL3ByaWNlTW9kdWxlL1BhY2thZ2VDaXRpZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvcHJpY2VNb2R1bGUvUGFja2FnZURheXNEaXNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvcHJpY2VNb2R1bGUvUGFja2FnZURldGFpbHNQcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvcHJpY2VNb2R1bGUvUGFja2FnZUluY0V4Yy5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvcHJpY2VNb2R1bGUvUGFja2FnZUluY0V4Yy5zY3NzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL3BkcC9wcmljZU1vZHVsZS9QYWNrYWdlUHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL3NjcmVlbnMvcGRwL3ByaWNlTW9kdWxlL1N0YXJNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9wZHAvcHJpY2VNb2R1bGUvU3Rhck1vbnRoRmlsdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYW1wL3V0aWxzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnN0YW50cy9QYWNrYWdlcy9JbmNsdXNpb25Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIl0sIm5hbWVzIjpbIk9OX0FUVFJJQlVURSIsIkFjdGlvbiIsImNoaWxkcmVuIiwiZXZlbnRzIiwiZXZlbnRTdHJpbmciLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwiZW50aXJlRXZlbnRTdHJpbmciLCJldmVudE5hbWUiLCJldmVudEFjdGlvbnMiLCJldmVudEluZGV4IiwiYWN0aW9uU3RyaW5nIiwiZW50aXJlQWN0aW9uU3RyaW5nIiwibmV4dEFjdGlvbiIsImFjdGlvbkluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvYmplY3RPZiIsImFycmF5T2YiLCJzdHJpbmciLCJJY29uc01hcHBpbmciLCJDYWJUcmFuc2ZlciIsIkRyaW5rcyIsIkZsaWdodCIsIkdvb2dsZVBsYXkiLCJBcHBTdG9yZSIsIk1lYWwiLCJUVGxvZ29TZWNvbmRhcnkiLCJIb3VzZUJvYXQiLCJTb3J0SWNvbiIsIkZpbHRlckljb24iLCJJbmRpYW5JY29uIiwiSW50ZXJuYXRpb25hbEljb24iLCJJbGx1c0FnZW50IiwiSWxsdXNNb25leVNhZmUiLCJJbGx1c1N1cHBvcnQiLCJJbGx1c0Rlc3RpbmF0aW9uIiwiTG9va2luZ0ljb24iLCJDdXN0b21QYWNrYWdlIiwiQ2hhdEljb24iLCJDaGF0SWNvbldoaXRlIiwiQ2FsbFVzIiwiQ2FsbEJhY2tJY29uIiwiQ29uZnVzaW9uIiwiSGVscCIsIkZCSWNvbiIsIkdvb2dsZUljb24iLCJMb2NrSWNvbiIsIlRpY2tldHNJY29uIiwiQXJyb3dOZXh0IiwiQ2FsZW5kYXJJY29uIiwiQnVkZ2V0SWNvbiIsIkNhYkljb25Gcm9udCIsIk5leHRJY29uIiwiQ2xvc2VEYXJrIiwiSWxsdXNSZXF1ZXN0Q2FsbGJhY2siLCJJbGx1czQwNCIsIklsbHVzRGVzdGluYXRpb25zT2xkIiwiSWxsdXNEZXN0aW5hdGlvbnMiLCJJbGx1c1F1YWxpdHlDaGVjayIsIklsbHVzRm9yZ290UGFzc3dvcmQiLCJJbGx1c1RoYW5rc1JlcXVlc3QiLCJBbGxUcmlwcyIsIldlZWtlbmRtZWFsIiwiVHJla2tpbmciLCJSYWZ0aW5nIiwiUGFyYWdsaWRpbmciLCJSb2NrY2xpbWJpbmciLCJGbHlpbmdmb3giLCJSZXBlbGxpbmciLCJCb25maXJlIiwiTXVzaWMiLCJEaiIsIkplZXBzYWZhcmkiLCJTd2ltbWluZyIsIlBob3RvZ3JhcGh5IiwiRGVsdXplYWNidXMiLCJUZW1wb3RyYXZlbGVyIiwiU2hhcmVkY29hY2giLCJUcmFuc3BvcnQiLCJMdXh1cnljYW1wIiwiRXZlbmluZ3NuYWNrIiwiSnVtcGluZyIsIlByYXNhaWxpbmciLCJMaXZlbXVzaWMiLCJNZWFsUGxhbmZvckhvdGVsIiwiTWVhbHMiLCJIb3RlbCIsIlNpZ2h0c2VlaW5nIiwiQ2FiIiwiU2hhcmVkQ29hY2giLCJDb21wbGltZW50YXJ5ZHJpbmtzIiwiRmxpZ2h0cyIsIkhvdXNlYm9hdCIsIkNydWlzZSIsIkpldFNraVRyYW5zZmVyIiwiU2FmYXJpIiwiV2F0ZXJzcG9ydHMiLCJBZHZlbnR1cmUiLCJWaXNhIiwiRmVycnlUcmFuc2ZlciIsIkNha2UiLCJGbG9yYWxEZWNvcmF0aW9uIiwiQ2FtcHN0YXkiLCJFbnRyeXRpY2tldHMiLCJIb21lU3RheSIsIkplZXBTYWZhcmkiLCJUcmVlSG91c2UiLCJEaXNuZXlsYW5kIiwiUmVsaWdpb3VzVG91ciIsIlRyYW5zZmVyIiwiU2ltY2FyZCIsIkNsb3NlV2hpdGUiLCJOb3RpZmljYXRpb25CZWxsIiwiU2hhcmVJY29uIiwiUGFja2FnZUljb24iLCJDb21wYXJlSWNvbjIiLCJDb21wYXJlSWNvbldoaXRlIiwiVW5pcXVlcmVxdWlyZW1lbnRzIiwiRW52ZWxvcGUiLCJUaGFua1lvdVRpY2siLCJEZWZhdWx0IiwiQWN0aXZpdGllcyIsIkFkb3V0RGVzdGluYXRpb25JY29uIiwiQWdlbnRJY29uIiwiQW5kcm9pZEljb24iLCJBdHRhY2htZW50SWNvbiIsIkF1dHVtbiIsIkJhY2tJY29uIiwiQmFjazJJY29uV2hpdGUiLCJCYWNrVG9wQXJyb3ciLCJCZWFjaEljb25HcmV5IiwiQnVkZ2V0SWNvbk5ldyIsIkJ1c0lsbHVzIiwiQ2FiSWNvbkZyb250R3JleSIsIkNhbGxVc1doaXRlIiwiQ2FsbFVzV2hpdGVGaWxsIiwiQ2xvY2siLCJDb21wYXJlUGFja2FnZSIsIkN1c3RvbWlzZWRQYWNrYWdlcyIsIkRlZmF1bHRJY29uIiwiRHVyYXRpb25JY29uIiwiRW1pSWNvbiIsIkV4Y2x1c2lvbkljb24iLCJGZXJyeXRyYW5zZmVyIiwiRmlsdGVySWNvbldoaXRlIiwiRnJpZW5kcyIsIkd5bUljb24iLCJIYWxmU3RhciIsIkhpbGxTdGF0aW9uIiwiSGlsbFN0YXRpb25JY29uIiwiSGlsbFN0YXRpb25JY29uR3JleSIsIkhpc3RvcnkiLCJIb3RlbEVtcHR5U3RhdGUiLCJJbmNsdXNpb25JY29uIiwiSW5kaWFuSWNvbkdyZXkiLCJJT1MiLCJLZXlib2FyZEFjdGl2ZSIsIktleWJvYXJkSW5hY3RpdmUiLCJMaW5rZWRJbiIsIkxvY2tXaGl0ZSIsIkxvdmVJY29uIiwiTWFpbEljb25XaGl0ZSIsIk1lc3NhZ2VJY29uTmV3IiwiTW9iaWxlSWNvbiIsIk1vbnNvb24iLCJNb3VudGFpbkljb24iLCJOYXR1cmUiLCJOYXR1cmVJY29uIiwiTmF0dXJlSWNvbkdyZXkiLCJOb3RpZmljYXRpb25JY29uIiwiUGhvbmVJY29uV2hpdGUiLCJQcmljZUljb24iLCJSZWxpZ2lvdXMiLCJGcmllbmRzQW5kR3JvdXBzIiwiUmVzdGF1cmFudEljb24iLCJSb29tU2VydmljZUljb24iLCJTZWFyY2hCbGFjayIsIlNoaXAiLCJTdGF0dXNDcm9zc0ljb24iLCJTdGF0dXNTdWNjZXNzSWNvbiIsIlN0ZXBBcnJvdyIsIlN1bW1lciIsIlRheGlDYWIiLCJUcmFpbiIsIlRUSWNvbiIsIlR3aXR0ZXJHcmV5IiwiVmlzYTIiLCJXYXRlckFjdGl2aXRpZXMiLCJXYXRlckFjdGl2aXRpZXNHcmV5IiwiV2VhdGhlckljb24iLCJXaWZpSWNvbiIsIldpbnRlciIsIkRpYW1vbmRJY29uIiwiV2Vic2l0ZUljb25OZXciLCJBaXJDb25kaXRpb25pbmdJY29uIiwiQmFyIiwiQmVhY2hhY2Nlc3MiLCJGcmVlQnJlYWtmYXN0IiwiQnVzaW5lc3NDZW50ZXIiLCJIQ2hpbGRGcmllbmRseSIsIkVtYWlsSWNvbiIsIkdvbGZjb3Vyc2UiLCJGaXRuZXNzY2VudGVyIiwiSG90VHViIiwiS2l0Y2hlbmluc29tZXJvb21zIiwiTGF1bmRyeVNlcnZpY2UiLCJMb2NhdGlvbkljb24iLCJGcmVlcGFya2luZyIsIlBldEZyaWVuZGx5IiwiUGhvbmVJY29uIiwiT3V0ZG9vclBvb2wiLCJSZXN0YXVyYW50IiwiUm9vbVNlcnZpY2UiLCJBaXJwb3J0U2h1dHRsZSIsIlNtb2tlZnJlZSIsIlNwYSIsIldhbGxldEljb24iLCJUVFJlY29tbWVuZGVkSWNvbiIsIkJ1bGJJY29uIiwiV2hhdHNBcHBJY29uIiwiVGFqTWFoYWxJY29uIiwiQWR2YW50dXJlSWNvbk5ldyIsIlBsdXNJbmNsdXNpb25JY29uIiwiSW50ZW50RXhwbG9yZSIsIldoaXRlU2hhcmVJY29uIiwiTGFuZGxpbmVJY29uIiwiRG93bmxvYWRWb3VjaGVySWNvbiIsIkVkaXRQcmVmZXJlbmNlc0ljb24iLCJIZWFkcGhvbmVJY29uIiwiSGVhZHBob25lSWNvbldoaXRlIiwiU2hhcmVCbGFjayIsIk5vdGlmaWNhdGlvbkljb25XaGl0ZSIsIkRvd25sb2FkQmxhY2siLCJEb3dubG9hZEJsdWUiLCJJbGx1c1Byb2dyZXNzQiIsIkdtYWlsSWNvbiIsIkRhdGVEZWNpZGVkIiwiRGF0ZU5vdERlY2lkZWQiLCJCdWRnZXRMb3ciLCJCdWRnZXRNZWRpdW0iLCJCdWRnZXRIaWdoIiwiVHJhdmVsZXJzIiwiQ29udGFjdCIsIkRlc3RpbmF0aW9uIiwiTGVmdFJlZEFycm93IiwiUmlnaHRXaGl0ZUFycm93IiwiRGlzYWJsZWRBcnJvd0xlZnQiLCJIb3RlbEZpbGxlZCIsIkZsaWdodEZpbGxlZCIsIkNhYnNGaWxsZWQiLCJCdWRnZXRNaW4iLCJUaWNrIiwiUGFydFBheSIsIlJlcXVlc3RJY29uIiwiUHJlZmVyZW5jZXNJY29uIiwiSW5jbHVzaW9uc05ld0ljb24iLCJFeGNsdXNpb25zTmV3SWNvbiIsIlRuQ0ljb24iLCJJbmZvQmxhY2tJY29uIiwiSXRpbmVyYXJ5SWNvbiIsIlRyYXZlbEluZm9JY29uIiwiU3VjY2Vzc0lsbHVzdHJhdGlvbiIsIkJyaWVmY2FzZVdoaXRlSWNvbiIsIkZhbWlseVdoaXRlSWNvbiIsIkhvbmV5bW9vbldoaXRlSWNvbiIsIlRyaWFuZ2xlSWNvbiIsIlByb2dyZXNzSWNvbiIsIlByb2Nlc3NlZEljb24iLCJFbnZlbG9wZUljb24iLCJQbGF5SWNvbiIsIkNvbXBhcmVJY29uIiwiQ2hhdEljb25HcmV5IiwiTHV4dXJ5UGFja2FnZUljb24iLCJCbGFja1NoYXJlSWNvbiIsIlF1b3Rlc1JlY2VpdmVkSWNvbiIsIk5vUXVvdGVzUmVjZWl2ZWRJY29uIiwiT3V0bGluZVN0YXJJY29uIiwiRmlsbFN0YXJJY29uIiwiUXVhbGl0eVF1b3Rlc0ljb24iLCJSaWdodEdyZXlBcnJvdyIsIkNsb3NlSWNvbldoaXRlIiwiQ3Jvc3NSZWQiLCJHcmVlblRpY2tJbmNsdXNpb24iLCJFeGNsdXNpb25zUmVkIiwiUHJpY2VSdXBlZSIsIldhdmVJY29uIiwiTWt0QWdlbnRzIiwiTWt0RGVzdGluYXRpb25zIiwiTWt0VmVyaWZpZWQiLCJNa3RRdWFsaXR5Q29udHJvbCIsIk1rdFN1cHBvcnQiLCJNa3RTZWxlY3RQYWNrYWdlIiwiTWt0UXVvdGVzIiwiTWt0VHJhdmVsZXJzIiwiUHJvZmlsZUljb24yIiwiSWxsdXNUcmF2ZWxlciIsIlBkcFF1b3RlcyIsIlBkcFNlbGVjdFBhY2thZ2UiLCJEb3duQXJyb3ciLCJTdGFySWNvbiIsIlN0YXJJY29uRW1wdHkiLCJCYWNrMkljb24iLCJJbmZvSWNvbiIsIlNlYXJjaEljb24iLCJUVGxvZ28iLCJTaGFyZVdoaXRlIiwiUHJvZmlsZUljb24iLCJIb21lSWNvbiIsIkZhbWlseUljb24iLCJXb3JrSWNvbiIsIk9mZmVyc0ljb24iLCJCbG9nSWNvbiIsIlRlc3RpbW9uYWlsc0ljb24iLCJGQVFJY29uIiwiQ29udGFjdEljb24iLCJWYWN0aW9uSWNvbiIsIkhvbmV5bW9vblBhY2thZ2VzIiwiU2Vhc29uYWxJY29uIiwiSW50ZXJuYXRpb25hbEljb25CbGFjayIsIkxvY2F0aW9uTWFya2VySWNvbiIsIkZCSWNvbldoaXRlIiwiVHdpdHRlciIsIlBpbnRlcmVzdEljb24iLCJHb29nbGVJY29uV2hpdGUiLCJJbnN0YWdyYW0iLCJCbHVlRG93bkFycm93IiwiR3JlZW5UaWNrIiwiZ2V0VGl0bGUiLCJ0aXRsZSIsIm1ldGFUYWdzIiwidGFncyIsIm5ld1RpdGxlIiwibGVuZ3RoIiwidGl0bGVMaXN0IiwiZmlsdGVyIiwidGFnIiwicHJvcGVydHkiLCJjb250ZW50IiwiZ2V0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25MaXN0IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0Q2Fub25pY2FsIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJjcmVhdGVIZWxtZXQiLCJjYW5vbmljYWxVcmwiLCJwYXRobmFtZSIsImhhc0Rlc2NyaXB0aW9uIiwiaGVsbWV0cyIsIm1hcCIsImkiLCJrZXl3b3JkIiwidmFsdWUiLCJwdXNoIiwiY3JlYXRlSGVsbWV0QmFubmVyIiwicmVuZGVyTWV0YVRhZ3MiLCJtZXRhVGFnc0FycmF5IiwiaXNBbXAiLCJtZXRhVGFnc1dpdGhvdXRJb3NVcmwiLCJpdGVtIiwiaW5jbHVkZXMiLCJtZXRhVGFnIiwiaW5kZXgiLCJnZXRMaXN0aW5nSXRlbXNIZWFkaW5nIiwiZGVzdGluYXRpb24iLCJpc011bHRpRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbnMiLCJnZXRUcmF2ZWxlclJldmlld1RyYXZDb3VudCIsInRyYXZDb3VudCIsImdldFRyYXZlbGVyUmV2aWV3RGF0ZSIsImRhdGUiLCJtb250aHNBcnIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldFRyYXZlbGVyUmV2aWV3RHVyYXRpb24iLCJkYXlzIiwiZ2V0VHJhdmVsZXJSZXZpZXdDaXRpZXMiLCJjaXR5QXJyIiwiam9pbiIsInBhcnNlciIsIlBhcnNlciIsIkZhcSIsIkNvbXBvbmVudCIsInN0YXRlIiwidmlzaWJsZSIsIl9sb2FkTW9yZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwicmVuZGVyIiwiZmFxcyIsInByb3BzIiwiZmlyc3RGYXFzIiwic2xpY2UiLCJzZWNvbmRGYXFzIiwiX19odG1sIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3dGYXFJbmRleCIsImZhcSIsImlkIiwicXVlc3Rpb24iLCJwYXJzZSIsImFuc3dlciIsInRhcCIsImFycmF5Iiwib2JqZWN0IiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImdldFN0YXJzIiwic3Rhck51bSIsImtleVR5cGUiLCJzdGFyQ2xhc3MiLCJzdGFycyIsIkFnZW50UmF0aW5nIiwiYWdlbnRSYXRpbmciLCJyYXRpbmdCYXJSYW5nZSIsInRydW5jYXRlZFJhdGluZyIsIk1hdGgiLCJ0cnVuYyIsImZyYWN0aW9uYWxSYXRpbmciLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImZ1bGxTdGFyQ291bnQiLCJoYWxmU3RhckNvdW50IiwiZW1wdHlTdGFyQ291bnQiLCJudW1iZXIiLCJvbmVPZlR5cGUiLCJzdHJpbmdnIiwiQnJlYWRjcnVtYkxpc3RpbmciLCJicmVhZGNydW1icyIsImJyZWFkY3J1bWIiLCJ1cmwiLCJIaWdobGlnaHRzIiwibGlzdCIsImwiLCJ0ZXh0IiwiRXhjbHVzaW9uIiwiZWxlbWVudHMiLCJJbmNFeGNsdXNpb24iLCJpbmNsdXNpb25zIiwiZXhjbHVzaW9ucyIsIkluY2x1c2lvbiIsIlJlbmRlckxpbmtzIiwiZ2VuZXJhdGVGb290ZXJMaW5rcyIsImZvb3RlckxpbmtBcnIiLCJmb290ZXJMaW5rIiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZXMiLCJmb290ZXIiLCJsaW5rIiwiZ2VuZXJhdGVGb290ZXJMaW5rU2VjdGlvbiIsImZvb3RlckxpbmtTZWN0aW9uIiwiZm9vdGVyTGlua3MiLCJmb290ZXJfbGlua3MiLCJncm91cGVkQXJyIiwiSW50ZXJMaW5raW5nIiwiSXRpbmVyYXJ5VGFncyIsIml0aW5lcmFyeUlkIiwidGFnSWQiLCJjYXRlZ29yeUVsZW1lbnRzIiwia2V5IiwiUmVhZE1vcmVCeUhlaWdodCIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50V2lsbE1vdW50IiwiZGF0YSIsInNwbGl0IiwicmVwbGFjZSIsIm1heEhlaWdodCIsImhlYWRpbmciLCJzaG93VGl0bGUiLCJob3RlbERpc3BsYXlOYW1lIiwiU2VvRm9vdGVyIiwic2VsZWN0ZWRTZW9Gb290ZXJIZWFkaW5nIiwiZm9vdGVyU2VjdGlvbnMiLCJmb290ZXJTZWN0aW9uIiwiWWVsbG93RG90IiwiUmVhY3QiLCJnZXRTdHlsZU9iamVjdCIsInRvcCIsImxlZnQiLCJpc1Rvb2x0aXBWaXNpYmxlIiwiaG92ZXJEYXRhIiwiZG90Qm94U3R5bGUiLCJkb3RTbWFsbEJveFN0eWxlIiwic3Bpbm5lclN0eWxlIiwidG9vbHRpcENvbnRhaW5lclN0YXRlIiwiaGFuZGxlQ2xpY2siLCJjYXJkIiwiaXRlbXMiLCJpY29uIiwicGFyYWdyYXBoIiwiSG93SXRXb3JrcyIsIlB1cmVDb21wb25lbnQiLCJUcmlwVHlwZUxpc3QiLCJzZWxlY3Rpb25MaXN0Iiwic2VsZWN0ZWRJdGVtIiwidG9nZ2xlU2VsZWN0aW9uIiwia2V5cyIsImUiLCJIZWFkZXJUaXRsZSIsInJlbmRlclN1YkhlYWRpbmciLCJzaG93VGl0bGVBc0gxIiwicGxwSGVhZGluZyIsInNob3dTaGFyZSIsInNob3dCbGFja1NoYXJlIiwiYmFja1VybCIsInN1YkhlYWRlciIsImdvQmFja1N0YXRlIiwic2VsZWN0aW9uTGlzdFZpc2libGUiLCJ0cmlwVHlwZUxpc3RTaG93biIsImNhdGVnb3J5IiwiYWxsIiwiR0NhcmRUYWdzU3BhbiIsImdsYW1vcm91cyIsInNwYW4iLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQYWNrYWdlQ2FyZEV4cGVyaW1lbnQiLCJob3RlbElkIiwiaXNQYWNrYWdlUmV2YW1wIiwiY29tcGFyaW5nUGFja2FnZXMiLCJhZGRUb0NvbXBhcmluZ1BhY2thZ2VzIiwicmVtb3ZlRnJvbUNvbXBhcmluZ1BhY2thZ2VzIiwiZm9ybVRvTG9jYXRpb24iLCJhZGRpdGlvbmFsSW5mb1RleHQiLCJuaWdodHMiLCJjaXRpZXMiLCJzZXRfdXJsIiwidG9EZXN0aW5hdGlvbiIsImZvcm1PbmVUb0xvY2F0aW9uIiwiY3RhVGV4dFBhY2thZ2UiLCJjdGFUZXh0Rm9ybSIsImlzRXhwZXJpbWVudCIsImhpZGVEaXNjb3VudCIsInJlcGxhY2VQcmljZSIsImZhbWlseV9wYWNrYWdlcyIsImZhbWlseV9wYWNrYWdlc19tYXAiLCJob3RlbFdpdGhQcmljZXMiLCJwbHBfaGVhZGluZyIsImltYWdlX3VybCIsImltYWdla2l0X3VybCIsImNpdHlfbGlzdF93aXRoX2RheXMiLCJyZW5kZXJIb3RlbFNlbGVjdGlvbnMiLCJwcmljZV90b3RhbCIsIm1pbmlfZGVzYyIsImN1cnJlbmN5IiwiZGlzY291bnRlZF9wcmljZSIsInByb21vX3RhZyIsImhvdGVsc0lkcyIsInByaWNlIiwicHJpY2VzIiwiZGlzY291bnQiLCJob3RlbENoZWNrYm94ZXMiLCJjaGFuZ2UiLCJ0b1N0cmluZyIsInByb21vVGFnIiwic2V0QWN0aXZlSG90ZWxzIiwicmVuZGVyUGFja2FnZUNpdGllc0Zyb21BcnJheSIsImlzRGVhbHNDYXJkIiwiY2l0eSIsInJlbmRlclBhY2thZ2VDaXRpZXNGcm9tT2JqZWN0IiwiY2l0aWVzV2l0aERheXMiLCJQYWNrYWdlQ2l0aWVzIiwiQXJyYXkiLCJQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCIsIlBhY2thZ2VJbWdUaXRsZSIsImltYWdlVXJsIiwiaW1hZ2VraXRVcmwiLCJhbHRUZXh0IiwiaXNMYXJnZUltZyIsImdldEljb25UZXh0IiwiaW5jbHVzaW9uIiwiaG90ZWxJbmZvIiwiUGFja2FnZUluY0V4YyIsIm5vU2Nyb2xsIiwiaW5jbHVzaW9uc0F2YWwiLCJhdmFpbGFibGUiLCJpbmNsdXNpb25MaXN0IiwiaWNvbk5hbWUiLCJkaXNhYmxlZEVsZW1lbnRDbGFzcyIsImRpc2FibGVkSWNvbkNsYXNzIiwiaW5jbHVzaW9uVGV4dEhpZGRlbiIsIkluY2x1c2lvbk5vdGlmaWNhdGlvblByZXNlbnQiLCJJbmNsdXNpb25Ob3RpZmljYXRpb24iLCJpbmRleE9mIiwid2lkdGgiLCJwb3NpdGlvbiIsInJpZ2h0IiwiekluZGV4IiwiYmFja2dyb3VuZCIsIlBhY2thZ2VQcmljZUV4cGVyaW1lbnQiLCJwcmljZVVuaXQiLCJwcmljZUZyb20iLCJwcmljZVRvIiwiZGlzcGxheVJhbmdlIiwidG90YWxQcmljZSIsInRvdGFsRGlzY291bnQiLCJTaW1pbGFyUGFja2FnZXMiLCJzaW1pbGFyUGFja2FnZXMiLCJwYWNrYWdlQ2FyZCIsImxvYWRlZFNpbWlsYXJQYWNrYWdlcyIsImxvYWRpbmdTaW1pbGFyUGFja2FnZXMiLCJsb2FkaW5nRXJyb3IiLCJwYWNrYWdlSWQiLCJUcmF2ZWxlclJldmlldyIsInRlc3RpbW9uaWFscyIsImNvdW50ZXIiLCJwYWdpbmF0aW9uIiwiZmlyc3RSZXZpZXdzIiwic2Vjb25kUmV2aWV3cyIsInJlbmRlckZpcnN0VGVzdGltb25pYWxzIiwidGVzdGltb25pYWwiLCJjaGVja0xvYWRNb3JlVGVzdGltb25pYWwiLCJ0b3RhbF9jb3VudCIsInJlbmRlclNlY29uZFRlc3RpbW9uaWFscyIsInRlc3RpbW9uaWFsc0xpbmsiLCJsb2NhdGlvbiIsInVuaXF1ZUtleSIsImlzU2Vhc29uYWxDYXRlZ29yeSIsInNob3dWaWV3QWxsIiwiR0Rvd25BcnJvd1NwYW4iLCJUcmF2ZWxlclJldmlld05ld0NhcmQiLCJoaWRlVGVzdGltb25pYWwiLCJyZXZpZXdCb2R5IiwiYm9keSIsInJldmlld19ib2R5IiwicmF0aW5nIiwiYXV0aG9yIiwiYXV0aG9yX25hbWUiLCJhdXRob3JOYW1lIiwidXNlcl9sb2NhdGlvbiIsInVzZXJMb2NhdGlvbiIsInF1b3RlIiwic3RhcnRfZGF0ZSIsImFkdWx0IiwiY2hpbGQiLCJjb250YWluZXIiLCJkaXNwYXRjaCIsImxvYWRNb3JlIiwicGFyYW1zIiwiZGlzY291bnRQZXJjZW50YWdlIiwicHJpY2VUb3RhbCIsInByaWNlRGlzY291bnQiLCJBbXBDYXJvdXNlbCIsImltYWdlcyIsImNvdmVycyIsImRlYWxzSW5mbyIsImlzRGVhbCIsImlzTHV4dXJ5IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInByZWxvYWRJbWFnZXMiLCJsYXp5Iiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInMiLCJwaWN0dXJlX2RldGFpbHMiLCJjYXB0aW9uIiwidG90YWwiLCJyb3VuZCIsImhvdGVsRWxlbWVudHMiLCJoIiwicGljdHVyZXMiLCJwaWN0dXJlIiwiaGVhZGVyIiwiSG90ZWxDYXJkIiwiZGV0YWlscyIsImFkZHJlc3MiLCJmYWNpbGl0aWVzIiwic2hhcGUiLCJIb3RlbEZsaWdodCIsImhvdGVscyIsImZsaWdodHMiLCJob3RlbFRpdGxlIiwiTm9Ib3RlbEluY2x1ZGVkIiwiRGF5c0l0aW5lcmFyeSIsImRheSIsIm5leHRMaW5rIiwicHJldkxpbmsiLCJzZXRJdGluZXJhcnlEYXkiLCJIdG1sVG9SZWFjdFBhcnNlciIsInJlcXVpcmUiLCJodG1sVG9SZWFjdFBhcnNlciIsImRheURldGFpbEVsZW1lbnRzIiwiZGF5RGV0YWlscyIsInJlbmRlckl0aW5lcmFyeUVsZW1lbnRzIiwiaXRpbmVyYXJ5IiwicmVzb3VyY2UiLCJyZXBsYWNlU3RhdGUiLCJ0cmFja1NlZ21lbnQiLCJzcGFjZUluZGV4Iiwic3Vic3RyIiwibGFiZWxzIiwiaXNBcnJheSIsImRheV9kZXRhaWwiLCJJdGluZXJhcnkiLCJ0aXRsZUhlYWQiLCJJdGluZXJhcnlQaWN0dXJlU2xpZGVyIiwia2V0IiwiUGFja2FnZURldGFpbERheUl0aW5lcmFyeSIsInBhY2thZ2VEZXRhaWxzIiwic2hvd1NlY3Rpb24iLCJob21lTGluayIsInBhdGgiLCJjYXRlZ29yaWVzIiwiR0Rpc2NvdW50RGl2IiwiZGl2IiwiYm94U2hhZG93IiwiR0hpZ2hsaWdodEJhbm5lckRpdiIsIkdMdXh1cnlEaXYiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwib3ZlcmZsb3ciLCJQYWNrYWdlU2xpZGVyIiwiY3JlYXRlSGVhZGVyQ29uc3RhbnRzIiwiaGVhZGVyQ29uc3RhbnRzIiwib3ZlcnZpZXciLCJzZWN0aW9uX25hbWUiLCJpbmNFeGMiLCJQZHAiLCJnZXRQYWdlVXJsIiwiYXBwQ29uZmlnIiwiYXBpX3Byb3RvY29sIiwic2VydmVyIiwicHVibGljIiwiaG9zdCIsImdldFBhZ2VGdWxsTmFtZSIsInNldFVybCIsInJlbmRlckhlbG1ldCIsIm1ldGFUYWdMaXN0Iiwib3JpZ2luYWxVcmwiLCJvcmlnaW5hbFBhdGhuYW1lIiwiYWxsb3dlZEFtcFVybHMiLCJkZXRhaWxzUmVzb3VyY2UiLCJwYWNrYWdlVHlwZSIsInRpdGxlcyIsIlRyYXZlbGVyUmV2aWV3Q29udGFpbmVyIiwidW5kZWZpbmVkIiwiaXRpbmVyYXJ5RGF5VmFsdWUiLCJmb3JtVXJsIiwic2hhcmVfdXJsIiwiYWN0aW9uIiwic2xpZGVyX3BpYyIsImhpZ2hsaWdodHMiLCJpbmNsdXNpb25fdGV4dCIsImV4Y2x1c2lvbl90ZXh0IiwiZm9vdGVyX3NlY3Rpb25zIiwiUXVpY2tMaW5rTmF2Iiwib3B0aW9ucyIsIm9wdGlvbiIsIlNjcm9sbExpbmsiLCJQYWNrYWdlRGF5c0Rpc2NvdW50IiwiUGFja2FnZURldGFpbHNQcmljZSIsInBrZyIsInVwZGF0ZSIsInB1c2hTdGF0ZSIsInNlbGVjdGVkTW9udGgiLCJ1cGRhdGVTZWxlY3RlZE1vbnRoIiwidXBkYXRlUHJpY2VDYWxsQmFjayIsImFuaW1hdGlvblByaWNlIiwicGFja2FnZV9vcHRpb25zIiwiaG90ZWxfcHJpY2VfZGV0YWlscyIsImhvdGVsUmF0aW5ncyIsImhvdGVsIiwiaG90ZWxfc3RhciIsInNvcnQiLCJhIiwiYiIsImZpbHRlcmVkSG90ZWxSYXRpbmdzIiwidW5pcXVlIiwibWluaURlc2MiLCJmcm9tIiwidG8iLCJQYWNrYWdlUHJpY2UiLCJTdGFyTW9udGhGaWx0ZXIiLCJtb250aCIsIm1vbnRoX29wdGlvbnMiLCJtb250aF9yYW5nZXMiLCJwYWNrYWdlIiwiY2hlY2tlZCIsImlzX2NoZWNrZWQiLCJwYWNrYWdlX2lkIiwiaXNEZWFsT3JMdXh1cnkiLCJvcHQiLCJzdGFydF9wcmljZSIsImVuZF9wcmljZSIsImRlZmF1bHRfc3RhcnRfcHJpY2UiLCJkZWZhdWx0X2VuZF9wcmljZSIsInNvcnRTdGFyT3B0aW9ucyIsInNvcnRNb250aE9wdGlvbnMiLCJtb250aF92YWx1ZSIsImdldFNlbGVjdGVkU3RhckRldGFpbCIsInBhcnNlSW50Iiwic3RhclJhdGluZyIsImNhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyIiwic2VwYXJhdG9yIiwibWF0Y2giLCJ4IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJjdXJyZW5jeVN5bWJvbHMiLCJSdXBlZSIsIklOUiIsIkRvbGxhciIsIkV1cm8iLCJTR0QiLCJNWVIiLCJQSFAiLCJHQlAiLCJBVUQiLCJDQUQiLCJTQVIiLCJMQlAiLCJaQVIiLCJQS1IiLCJBRUQiLCJDSEYiLCJKUFkiLCJOWkQiLCJnZXRQZXJjZW50YWdlIiwicGFyc2VQcmljZSIsImN1cnJlbmN5VG9TeW1ib2wiLCJudW1iZXJXaXRoQ29tbWFzIiwicGFydHMiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJwYXJzZURlc3RpbmF0aW9uc1RvU2hvdyIsInNlcGFyYXRlciIsInBhcnNlRGVzdGluYXRpb25Ub1Nob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLE1BQU1BLGVBQWUsZ0JBQXJCOzs7QUFDUCxNQUFNQyxTQUFTLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsS0FBMkI7QUFDeEMsUUFBTUMsY0FBY0MsT0FBT0MsT0FBUCxDQUFlSCxNQUFmLEVBQXVCSSxNQUF2QixDQUE4QixDQUFDQyxpQkFBRCxFQUFvQixDQUFDQyxTQUFELEVBQVlDLFlBQVosQ0FBcEIsRUFBK0NDLFVBQS9DLEtBQThEO0FBQzlHLFVBQU1DLGVBQWVG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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJhbXAtcGFja2FnZS1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBPTl9BVFRSSUJVVEUgPSAnY3VzdG9tQW1wRXZlbnQnO1xuY29uc3QgQWN0aW9uID0gKHsgY2hpbGRyZW4sIGV2ZW50cywgfSkgPT4ge1xuICBjb25zdCBldmVudFN0cmluZyA9IE9iamVjdC5lbnRyaWVzKGV2ZW50cykucmVkdWNlKChlbnRpcmVFdmVudFN0cmluZywgW2V2ZW50TmFtZSwgZXZlbnRBY3Rpb25zXSwgZXZlbnRJbmRleCkgPT4ge1xuICAgIGNvbnN0IGFjdGlvblN0cmluZyA9IGV2ZW50QWN0aW9ucy5yZWR1Y2UoKGVudGlyZUFjdGlvblN0cmluZywgbmV4dEFjdGlvbiwgYWN0aW9uSW5kZXgpID0+IGAke2VudGlyZUFjdGlvblN0cmluZ30ke2FjdGlvbkluZGV4ID4gMCA/ICcsJyA6ICcnfSR7bmV4dEFjdGlvbn1gLCAnJyk7XG5cbiAgICByZXR1cm4gYCR7ZW50aXJlRXZlbnRTdHJpbmd9JHtldmVudEluZGV4ID4gMCA/ICc7JyA6ICcnfSR7ZXZlbnROYW1lfToke2FjdGlvblN0cmluZ31gO1xuICB9LCAnJyk7XG4gIHJldHVybiBjaGlsZHJlbih7IFtPTl9BVFRSSUJVVEVdOiBldmVudFN0cmluZyB9KTtcbn07XG5cbkFjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBldmVudHM6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iLCJjb25zdCBJY29uc01hcHBpbmcgPSB7XG4gIENhYlRyYW5zZmVyOiAnQ2FiVHJhbnNmZXInLFxuICBEcmlua3M6ICdEcmlua0ljb24nLFxuICBGbGlnaHQ6ICdGbGlnaHRJY29uJyxcbiAgR29vZ2xlUGxheTogJ0dvb2dsZVBsYXknLFxuICBBcHBTdG9yZTogJ0FwcFN0b3JlJyxcbiAgTWVhbDogJ01lYWwnLFxuICBUVGxvZ29TZWNvbmRhcnk6ICdUVGxvZ29TZWNvbmRhcnknLFxuICBIb3VzZUJvYXQ6ICdIb3VzZUJvYXRJY29uJyxcbiAgU29ydEljb246ICdTb3J0SWNvbicsXG4gIEZpbHRlckljb246ICdGaWx0ZXJJY29uJyxcbiAgSW5kaWFuSWNvbjogJ0luZGlhbkljb24nLFxuICBJbnRlcm5hdGlvbmFsSWNvbjogJ0ludGVybmF0aW9uYWxJY29uJyxcbiAgSWxsdXNBZ2VudDogJ0lsbHVzQWdlbnQnLFxuICBJbGx1c01vbmV5U2FmZTogJ0lsbHVzTW9uZXlTYWZlJyxcbiAgSWxsdXNTdXBwb3J0OiAnSWxsdXNTdXBwb3J0JyxcbiAgSWxsdXNEZXN0aW5hdGlvbjogJ0lsbHVzRGVzdGluYXRpb24nLFxuICBMb29raW5nSWNvbjogJ0xvb2tpbmdJY29uJyxcbiAgQ3VzdG9tUGFja2FnZTogJ0N1c3RvbVBhY2thZ2UnLFxuICBDaGF0SWNvbjogJ0NoYXRJY29uJyxcbiAgQ2hhdEljb25XaGl0ZTogJ0NoYXRJY29uV2hpdGUnLFxuICBDYWxsVXM6ICdDYWxsVXMnLFxuICBDYWxsQmFja0ljb246ICdDYWxsQmFja0ljb24nLFxuICBDb25mdXNpb246ICdDb25mdXNpb24nLFxuICBIZWxwOiAnSGVscCcsXG4gIEZCSWNvbjogJ0ZCSWNvbicsXG4gIEdvb2dsZUljb246ICdHb29nbGVJY29uJyxcbiAgTG9ja0ljb246ICdMb2NrSWNvbicsXG4gIFRpY2tldHNJY29uOiAnVGlja2V0c0ljb24nLFxuICBBcnJvd05leHQ6ICdBcnJvd05leHQnLFxuICBDYWxlbmRhckljb246ICdDYWxlbmRhckljb24nLFxuICBCdWRnZXRJY29uOiAnQnVkZ2V0SWNvbicsXG4gIENhYkljb25Gcm9udDogJ0NhYkljb25Gcm9udCcsXG4gIE5leHRJY29uOiAnTmV4dEljb24nLFxuICBDbG9zZURhcms6ICdDbG9zZURhcmsnLFxuICBJbGx1c1JlcXVlc3RDYWxsYmFjazogJ0lsbHVzUmVxdWVzdENhbGxiYWNrJyxcbiAgSWxsdXM0MDQ6ICdJbGx1czQwNCcsXG4gIElsbHVzRGVzdGluYXRpb25zT2xkOiAnSWxsdXNEZXN0aW5hdGlvbnNPbGQnLFxuICBJbGx1c0Rlc3RpbmF0aW9uczogJ0lsbHVzRGVzdGluYXRpb25zJyxcbiAgSWxsdXNRdWFsaXR5Q2hlY2s6ICdJbGx1c1F1YWxpdHlDaGVjaycsXG4gIElsbHVzRm9yZ290UGFzc3dvcmQ6ICdJbGx1c0ZvcmdvdFBhc3N3b3JkJyxcbiAgSWxsdXNUaGFua3NSZXF1ZXN0OiAnSWxsdXNUaGFua3NSZXF1ZXN0JyxcbiAgQWxsVHJpcHM6ICdBbGxUcmlwcycsXG4gIFdlZWtlbmRtZWFsOiAnTWVhbCcsXG4gIFRyZWtraW5nOiAnVHJla2tpbmdJY29uJyxcbiAgUmFmdGluZzogJ1JhZnRpbmdJY29uJyxcbiAgUGFyYWdsaWRpbmc6ICdQYXJhSWNvbicsXG4gIFJvY2tjbGltYmluZzogJ1JvY2tDbGltYmluZ0ljb24nLFxuICBGbHlpbmdmb3g6ICdGbHlpbmdGb3hJY29uJyxcbiAgUmVwZWxsaW5nOiAnUmVwZWxsaW5nSWNvbicsXG4gIEJvbmZpcmU6ICdCb25GaXJlSWNvbicsXG4gIE11c2ljOiAnTXVzaWNJY29uJyxcbiAgRGo6ICdESkljb24nLFxuICBKZWVwc2FmYXJpOiAnSmVlcEljb24nLFxuICBTd2ltbWluZzogJ1N3aW1taW5nUG9vbEljb24nLFxuICBQaG90b2dyYXBoeTogJ0NhbWVyYUljb24nLFxuICBEZWx1emVhY2J1czogJ0J1c0ljb24nLFxuICBUZW1wb3RyYXZlbGVyOiAnTWluSUJ1c0ljb24nLFxuICBTaGFyZWRjb2FjaDogJ0J1c0ljb24nLFxuICBUcmFuc3BvcnQ6ICdNaW5JQnVzSWNvbicsXG4gIEx1eHVyeWNhbXA6ICdDYW1wSWNvbicsXG4gIEV2ZW5pbmdzbmFjazogJ0V2ZW5pbmdTbmFja3NJY29uJyxcbiAgSnVtcGluZzogJ1NreUR2aWVJY29uJyxcbiAgUHJhc2FpbGluZzogJ1BhcmFTZWxsaW5naWNvbicsXG4gIExpdmVtdXNpYzogJ011c2ljSWNvbicsXG4gIE1lYWxQbGFuZm9ySG90ZWw6ICdNZWFsJyxcbiAgTWVhbHM6ICdNZWFsJyxcbiAgSG90ZWw6ICdIb3RlbEljb24nLFxuICBTaWdodHNlZWluZzogJ1NpZ2h0c2VlaW5nSWNvbicsXG4gIENhYjogJ0NhYkljb25Gcm9udCcsXG4gIFNoYXJlZENvYWNoOiAnQ2FiVHJhbnNmZXInLFxuICBDb21wbGltZW50YXJ5ZHJpbmtzOiAnRHJpbmtJY29uJyxcbiAgRmxpZ2h0czogJ0ZsaWdodEljb24nLFxuICBIb3VzZWJvYXQ6ICdIb3VzZUJvYXRJY29uJyxcbiAgQ3J1aXNlOiAnQ3J1aXNlSWNvbicsXG4gIEpldFNraVRyYW5zZmVyOiAnSmV0U2tpSWNvbicsXG4gIFNhZmFyaTogJ1NhZmFyaUljb24nLFxuICBXYXRlcnNwb3J0czogJ1dhdGVyQWN0aXZpdGllcycsXG4gIEFkdmVudHVyZTogJ0FkdmVudHVyZScsXG4gIFZpc2E6ICdWaXNhSWNvbicsXG4gIEZlcnJ5VHJhbnNmZXI6ICdGZXJyaUljb24nLFxuICBDYWtlOiAnQ2FrZUljb24nLFxuICBGbG9yYWxEZWNvcmF0aW9uOiAnRmxvcmFsRGVjb3JhdGlvbkljb24nLFxuICBDYW1wc3RheTogJ0NhbXBJY29uJyxcbiAgRW50cnl0aWNrZXRzOiAnVGlja2V0c0ljb24nLFxuICBIb21lU3RheTogJ0hvdGVsSWNvbicsXG4gIEplZXBTYWZhcmk6ICdKZWVwSWNvbicsXG4gIFRyZWVIb3VzZTogJ1RyZWVIb3VzZUljb24nLFxuICBEaXNuZXlsYW5kOiAnRGlzbmV5TGFuZEljb24nLFxuICBSZWxpZ2lvdXNUb3VyOiAnUmVsaWdpb3VzSWNvbicsXG4gIFRyYW5zZmVyOiAnQ2FiVHJhbnNmZXInLFxuICBTaW1jYXJkOiAnU2ltQ2FyZEljb24nLFxuICBDbG9zZVdoaXRlOiAnQ2xvc2VXaGl0ZScsXG4gIE5vdGlmaWNhdGlvbkJlbGw6ICdOb3RpZmljYXRpb25CZWxsJyxcbiAgU2hhcmVJY29uOiAnU2hhcmVJY29uJyxcbiAgUGFja2FnZUljb246ICdQYWNrYWdlSWNvbicsXG4gIENvbXBhcmVJY29uMjogJ0NvbXBhcmVJY29uMicsXG4gIENvbXBhcmVJY29uV2hpdGU6ICdDb21wYXJlSWNvbldoaXRlJyxcbiAgVW5pcXVlcmVxdWlyZW1lbnRzOiAnVW5pcXVlcmVxdWlyZW1lbnRzJyxcbiAgRW52ZWxvcGU6ICdFbnZlbG9wZScsXG4gIFRoYW5rWW91VGljazogJ1RoYW5rWW91VGljaycsXG4gIERlZmF1bHQ6ICdEZWZhdWx0SWNvbicsXG4gIEFjdGl2aXRpZXM6ICdUcmVra2luZ0ljb24nLFxuICBBZG91dERlc3RpbmF0aW9uSWNvbjogJ0Fkb3V0RGVzdGluYXRpb25JY29uJyxcbiAgQWdlbnRJY29uOiAnQWdlbnRJY29uJyxcbiAgQW5kcm9pZEljb246ICdBbmRyb2lkSWNvbicsXG4gIEF0dGFjaG1lbnRJY29uOiAnQXR0YWNobWVudEljb24nLFxuICBBdXR1bW46ICdBdXR1bW4nLFxuICBCYWNrSWNvbjogJ0JhY2tJY29uJyxcbiAgQmFjazJJY29uV2hpdGU6ICdCYWNrMkljb25XaGl0ZScsXG4gIEJhY2tUb3BBcnJvdzogJ0JhY2tUb3BBcnJvdycsXG4gIEJlYWNoSWNvbkdyZXk6ICdCZWFjaEljb25HcmV5JyxcbiAgQnVkZ2V0SWNvbk5ldzogJ0J1ZGdldEljb25OZXcnLFxuICBCdXNJbGx1czogJ0J1c0lsbHVzJyxcbiAgQ2FiSWNvbkZyb250R3JleTogJ0NhYkljb25Gcm9udEdyZXknLFxuICBDYWxsVXNXaGl0ZTogJ0NhbGxVc1doaXRlJyxcbiAgQ2FsbFVzV2hpdGVGaWxsOiAnQ2FsbFVzV2hpdGVGaWxsJyxcbiAgQ2xvY2s6ICdDbG9jaycsXG4gIENvbXBhcmVQYWNrYWdlOiAnQ29tcGFyZVBhY2thZ2UnLFxuICBDdXN0b21pc2VkUGFja2FnZXM6ICdDdXN0b21pc2VkUGFja2FnZXMnLFxuICBEZWZhdWx0SWNvbjogJ0RlZmF1bHRJY29uJyxcbiAgRHVyYXRpb25JY29uOiAnRHVyYXRpb25JY29uJyxcbiAgRW1pSWNvbjogJ0VtaUljb24nLFxuICBFeGNsdXNpb25JY29uOiAnRXhjbHVzaW9uSWNvbicsXG4gIEZlcnJ5dHJhbnNmZXI6ICdGZXJyeXRyYW5zZmVyJyxcbiAgRmlsdGVySWNvbldoaXRlOiAnRmlsdGVySWNvbldoaXRlJyxcbiAgRnJpZW5kczogJ0ZyaWVuZHMnLFxuICBHeW1JY29uOiAnR3ltSWNvbicsXG4gIEhhbGZTdGFyOiAnSGFsZlN0YXInLFxuICBIaWxsU3RhdGlvbjogJ0hpbGxTdGF0aW9uSWNvbicsXG4gIEhpbGxTdGF0aW9uSWNvbjogJ0hpbGxTdGF0aW9uSWNvbicsXG4gIEhpbGxTdGF0aW9uSWNvbkdyZXk6ICdIaWxsU3RhdGlvbkljb25HcmV5JyxcbiAgSGlzdG9yeTogJ0hpc3RvcnknLFxuICBIb3RlbEVtcHR5U3RhdGU6ICdIb3RlbEVtcHR5U3RhdGUnLFxuICBJbmNsdXNpb25JY29uOiAnSW5jbHVzaW9uSWNvbicsXG4gIEluZGlhbkljb25HcmV5OiAnSW5kaWFuSWNvbkdyZXknLFxuICBJT1M6ICdJT1MnLFxuICBLZXlib2FyZEFjdGl2ZTogJ0tleWJvYXJkQWN0aXZlJyxcbiAgS2V5Ym9hcmRJbmFjdGl2ZTogJ0tleWJvYXJkSW5hY3RpdmUnLFxuICBMaW5rZWRJbjogJ0xpbmtlZEluJyxcbiAgTG9ja1doaXRlOiAnTG9ja1doaXRlJyxcbiAgTG92ZUljb246ICdMb3ZlSWNvbicsXG4gIE1haWxJY29uV2hpdGU6ICdNYWlsSWNvbldoaXRlJyxcbiAgTWVzc2FnZUljb25OZXc6ICdNZXNzYWdlSWNvbk5ldycsXG4gIE1vYmlsZUljb246ICdNb2JpbGVJY29uJyxcbiAgTW9uc29vbjogJ01vbnNvb24nLFxuICBNb3VudGFpbkljb246ICdNb3VudGFpbkljb24nLFxuICBOYXR1cmU6ICdOYXR1cmVJY29uJyxcbiAgTmF0dXJlSWNvbjogJ05hdHVyZUljb24nLFxuICBOYXR1cmVJY29uR3JleTogJ05hdHVyZUljb25HcmV5JyxcbiAgTm90aWZpY2F0aW9uSWNvbjogJ05vdGlmaWNhdGlvbkljb24nLFxuICBQaG9uZUljb25XaGl0ZTogJ1Bob25lSWNvbldoaXRlJyxcbiAgUHJpY2VJY29uOiAnUHJpY2VJY29uJyxcbiAgUmVsaWdpb3VzOiAnUmVsaWdpb3VzSWNvbicsXG4gIEZyaWVuZHNBbmRHcm91cHM6ICdSZWxpZ2lvdXNJY29uJyxcbiAgUmVzdGF1cmFudEljb246ICdSZXN0YXVyYW50SWNvbicsXG4gIFJvb21TZXJ2aWNlSWNvbjogJ1Jvb21TZXJ2aWNlSWNvbicsXG4gIFNlYXJjaEJsYWNrOiAnU2VhcmNoQmxhY2snLFxuICBTaGlwOiAnU2hpcCcsXG4gIFN0YXR1c0Nyb3NzSWNvbjogJ1N0YXR1c0Nyb3NzSWNvbicsXG4gIFN0YXR1c1N1Y2Nlc3NJY29uOiAnU3RhdHVzU3VjY2Vzc0ljb24nLFxuICBTdGVwQXJyb3c6ICdTdGVwQXJyb3cnLFxuICBTdW1tZXI6ICdTdW1tZXInLFxuICBUYXhpQ2FiOiAnVGF4aUNhYicsXG4gIFRyYWluOiAnVHJhaW4nLFxuICBUVEljb246ICdUVEljb24nLFxuICBUd2l0dGVyR3JleTogJ1R3aXR0ZXJHcmV5JyxcbiAgVmlzYTI6ICdWaXNhJyxcbiAgV2F0ZXJBY3Rpdml0aWVzOiAnV2F0ZXJBY3Rpdml0aWVzJyxcbiAgV2F0ZXJBY3Rpdml0aWVzR3JleTogJ1dhdGVyQWN0aXZpdGllc0dyZXknLFxuICBXZWF0aGVySWNvbjogJ1dlYXRoZXJJY29uJyxcbiAgV2lmaUljb246ICdXaWZpSWNvbicsXG4gIFdpbnRlcjogJ1dpbnRlcicsXG4gIERpYW1vbmRJY29uOiAnRGlhbW9uZEljb24nLFxuICBXZWJzaXRlSWNvbk5ldzogJ1dlYnNpdGVJY29uTmV3JyxcbiAgQWlyQ29uZGl0aW9uaW5nSWNvbjogJ0FpckNvbmRpdGlvbmluZ0ljb24nLFxuICBCYXI6ICdCYXJJY29uJyxcbiAgQmVhY2hhY2Nlc3M6ICdCZWFjaEFjY2Vzc0ljb24nLFxuICBGcmVlQnJlYWtmYXN0OiAnQnJlYWtmYXN0SWNvbk5ldycsXG4gIEJ1c2luZXNzQ2VudGVyOiAnQnVzaW5lc3NDZW50cmVJY29uJyxcbiAgSENoaWxkRnJpZW5kbHk6ICdDaGlsZEZyaWVuZGx5SWNvbicsXG4gIEVtYWlsSWNvbjogJ0VtYWlsSWNvbicsXG4gIEdvbGZjb3Vyc2U6ICdHb2xmSWNvbicsXG4gIEZpdG5lc3NjZW50ZXI6ICdHeW1JY29uTmV3JyxcbiAgSG90VHViOiAnSG90VHViSWNvbicsXG4gIEtpdGNoZW5pbnNvbWVyb29tczogJ0tpdGNoZW5JY29uJyxcbiAgTGF1bmRyeVNlcnZpY2U6ICdMYXVuZHJ5SWNvbicsXG4gIExvY2F0aW9uSWNvbjogJ0xvY2F0aW9uSWNvbicsXG4gIEZyZWVwYXJraW5nOiAnUGFya2luZ0ljb24nLFxuICBQZXRGcmllbmRseTogJ1BldEZyaWVuZGx5SWNvbicsXG4gIFBob25lSWNvbjogJ1Bob25lSWNvbicsXG4gIE91dGRvb3JQb29sOiAnUG9vbEljb24nLFxuICBSZXN0YXVyYW50OiAnUmVzdGF1cmFudEljb25OZXcnLFxuICBSb29tU2VydmljZTogJ1Jvb21TZXJ2aWNlSWNvbk5ldycsXG4gIEFpcnBvcnRTaHV0dGxlOiAnU2h1dHRsZUljb24nLFxuICBTbW9rZWZyZWU6ICdTbW9rZUZyZWVJY29uJyxcbiAgU3BhOiAnU3BhSWNvbicsXG4gIFdhbGxldEljb246ICdXYWxsZXRJY29uJyxcbiAgVFRSZWNvbW1lbmRlZEljb246ICdUVFJlY29tbWVuZGVkSWNvbicsXG4gIEJ1bGJJY29uOiAnQnVsYkljb24nLFxuICBXaGF0c0FwcEljb246ICdXaGF0c0FwcEljb24nLFxuICBUYWpNYWhhbEljb246ICdUYWpNYWhhbEljb24nLFxuICBBZHZhbnR1cmVJY29uTmV3OiAnQWR2YW50dXJlSWNvbk5ldycsXG4gIFBsdXNJbmNsdXNpb25JY29uOiAnUGx1c0luY2x1c2lvbkljb24nLFxuICBJbnRlbnRFeHBsb3JlOiAnSW50ZW50RXhwbG9yZScsXG4gIFdoaXRlU2hhcmVJY29uOiAnU2hhcmVXaGl0ZScsXG4gIExhbmRsaW5lSWNvbjogJ0xhbmRsaW5lSWNvbicsXG4gIERvd25sb2FkVm91Y2hlckljb246ICdEb3dubG9hZFZvdWNoZXJJY29uJyxcbiAgRWRpdFByZWZlcmVuY2VzSWNvbjogJ0VkaXRQcmVmZXJlbmNlc0ljb24nLFxuICBIZWFkcGhvbmVJY29uOiAnSGVhZHBob25lSWNvbicsXG4gIEhlYWRwaG9uZUljb25XaGl0ZTogJ0hlYWRwaG9uZUljb25XaGl0ZScsXG4gIFNoYXJlQmxhY2s6ICdTaGFyZUJsYWNrJyxcbiAgTm90aWZpY2F0aW9uSWNvbldoaXRlOiAnTm90aWZpY2F0aW9uSWNvbldoaXRlJyxcbiAgRG93bmxvYWRCbGFjazogJ0Rvd25sb2FkQmxhY2snLFxuICBEb3dubG9hZEJsdWU6ICdEb3dubG9hZEJsdWUnLFxuICBJbGx1c1Byb2dyZXNzQjogJ0lsbHVzUHJvZ3Jlc3NCJyxcbiAgR21haWxJY29uOiAnR21haWxJY29uJyxcbiAgRGF0ZURlY2lkZWQ6ICdEYXRlRGVjaWRlZCcsXG4gIERhdGVOb3REZWNpZGVkOiAnRGF0ZU5vdERlY2lkZWQnLFxuICBCdWRnZXRMb3c6ICdCdWRnZXRMb3cnLFxuICBCdWRnZXRNZWRpdW06ICdCdWRnZXRNZWRpdW0nLFxuICBCdWRnZXRIaWdoOiAnQnVkZ2V0SGlnaCcsXG4gIFRyYXZlbGVyczogJ1RyYXZlbGVycycsXG4gIENvbnRhY3Q6ICdDb250YWN0JyxcbiAgRGVzdGluYXRpb246ICdEZXN0aW5hdGlvbicsXG4gIExlZnRSZWRBcnJvdzogJ0xlZnRSZWRBcnJvdycsXG4gIFJpZ2h0V2hpdGVBcnJvdzogJ1JpZ2h0V2hpdGVBcnJvdycsXG4gIERpc2FibGVkQXJyb3dMZWZ0OiAnRGlzYWJsZWRBcnJvd0xlZnQnLFxuICBIb3RlbEZpbGxlZDogJ0hvdGVsRmlsbGVkJyxcbiAgRmxpZ2h0RmlsbGVkOiAnRmxpZ2h0RmlsbGVkJyxcbiAgQ2Fic0ZpbGxlZDogJ0NhYnNGaWxsZWQnLFxuICBCdWRnZXRNaW46ICdCdWRnZXRNaW4nLFxuICBUaWNrOiAnVGljaycsXG4gIFBhcnRQYXk6ICdQYXJ0UGF5JyxcblxuICAvLyBRRFAgbmV3IEljb25zXG4gIFJlcXVlc3RJY29uOiAnUmVxdWVzdEljb24nLFxuICBQcmVmZXJlbmNlc0ljb246ICdQcmVmZXJlbmNlc0ljb24nLFxuICBJbmNsdXNpb25zTmV3SWNvbjogJ0luY2x1c2lvbnNOZXdJY29uJyxcbiAgRXhjbHVzaW9uc05ld0ljb246ICdFeGNsdXNpb25zTmV3SWNvbicsXG4gIFRuQ0ljb246ICdUbkNJY29uJyxcbiAgSW5mb0JsYWNrSWNvbjogJ0luZm9CbGFja0ljb24nLFxuICBJdGluZXJhcnlJY29uOiAnSXRpbmVyYXJ5SWNvbicsXG4gIFRyYXZlbEluZm9JY29uOiAnVHJhdmVsSW5mb0ljb24nLFxuICBTdWNjZXNzSWxsdXN0cmF0aW9uOiAnU3VjY2Vzc0lsbHVzdHJhdGlvbicsXG4gIEJyaWVmY2FzZVdoaXRlSWNvbjogJ0JyaWVmY2FzZVdoaXRlSWNvbicsXG4gIEZhbWlseVdoaXRlSWNvbjogJ0ZhbWlseVdoaXRlSWNvbicsXG4gIEhvbmV5bW9vbldoaXRlSWNvbjogJ0hvbmV5bW9vbldoaXRlSWNvbicsXG4gIFRyaWFuZ2xlSWNvbjogJ1RyaWFuZ2xlSWNvbicsXG4gIFByb2dyZXNzSWNvbjogJ1Byb2dyZXNzSWNvbicsXG4gIFByb2Nlc3NlZEljb246ICdQcm9jZXNzZWRJY29uJyxcbiAgRW52ZWxvcGVJY29uOiAnRW52ZWxvcGVJY29uJyxcbiAgUGxheUljb246ICdQbGF5SWNvbicsXG4gIENvbXBhcmVJY29uOiAnQ29tcGFyZUljb24nLFxuICBDaGF0SWNvbkdyZXk6ICdDaGF0SWNvbkdyZXknLFxuICBMdXh1cnlQYWNrYWdlSWNvbjogJ0x1eHVyeVBhY2thZ2VJY29uJyxcbiAgQmxhY2tTaGFyZUljb246ICdCbGFjay1zaGFyZS1pY29uJyxcbiAgUXVvdGVzUmVjZWl2ZWRJY29uOiAnUXVvdGVzUmVjZWl2ZWRJY29uJyxcbiAgTm9RdW90ZXNSZWNlaXZlZEljb246ICdOb1F1b3Rlc1JlY2VpdmVkSWNvbicsXG4gIE91dGxpbmVTdGFySWNvbjogJ091dGxpbmVTdGFySWNvbicsXG4gIEZpbGxTdGFySWNvbjogJ0ZpbGxTdGFySWNvbicsXG4gIFF1YWxpdHlRdW90ZXNJY29uOiAnUXVhbGl0eVF1b3Rlc0ljb24nLFxuICBSaWdodEdyZXlBcnJvdzogJ1JpZ2h0R3JleUFycm93JyxcbiAgQ2xvc2VJY29uV2hpdGU6ICdDbG9zZUljb25XaGl0ZScsXG4gIENyb3NzUmVkOiAnQ3Jvc3NSZWQnLFxuICBHcmVlblRpY2tJbmNsdXNpb246ICdHcmVlblRpY2tJbmNsdXNpb24nLFxuICBFeGNsdXNpb25zUmVkOiAnRXhjbHVzaW9uc1JlZCcsXG4gIFByaWNlUnVwZWU6ICdQcmljZVJ1cGVlJyxcbiAgV2F2ZUljb246ICdXYXZlSWNvbicsXG4gIE1rdEFnZW50czogJ01rdEFnZW50cycsXG4gIE1rdERlc3RpbmF0aW9uczogJ01rdERlc3RpbmF0aW9ucycsXG4gIE1rdFZlcmlmaWVkOiAnTWt0VmVyaWZpZWQnLFxuICBNa3RRdWFsaXR5Q29udHJvbDogJ01rdFF1YWxpdHlDb250cm9sJyxcbiAgTWt0U3VwcG9ydDogJ01rdFN1cHBvcnQnLFxuICBNa3RTZWxlY3RQYWNrYWdlOiAnTWt0U2VsZWN0UGFja2FnZScsXG4gIE1rdFF1b3RlczogJ01rdFF1b3RlcycsXG4gIE1rdFRyYXZlbGVyczogJ01rdFRyYXZlbGVycycsXG4gIFByb2ZpbGVJY29uMjogJ1Byb2ZpbGVJY29uMicsXG5cblxuICAvL2FtcCBpY29uc1xuICBJbGx1c1RyYXZlbGVyOiAnSWxsdXNUcmF2ZWxlcicsXG4gIFBkcFF1b3RlczogJ1BkcFF1b3RlcycsXG4gIFBkcFNlbGVjdFBhY2thZ2U6ICdQZHBTZWxlY3RQYWNrYWdlJyxcbiAgRG93bkFycm93OiAnRG93bkFycm93JyxcbiAgU3Rhckljb246ICdTdGFySWNvbicsXG4gIFN0YXJJY29uRW1wdHk6ICdTdGFySWNvbkVtcHR5JyxcbiAgQmFjazJJY29uOiAnQmFjazJJY29uJyxcbiAgSW5mb0ljb246ICdJbmZvSWNvbicsXG4gIFNlYXJjaEljb246ICdTZWFyY2hJY29uJyxcbiAgVFRsb2dvOiAnVFRsb2dvJyxcbiAgU2hhcmVXaGl0ZTogJ1NoYXJlV2hpdGUnLFxuICBQcm9maWxlSWNvbjogJ1Byb2ZpbGVJY29uJyxcbiAgSG9tZUljb246ICdIb21lSWNvbicsXG4gIEZhbWlseUljb246ICdGYW1pbHlJY29uJyxcbiAgV29ya0ljb246ICdXb3JrSWNvbicsXG4gIE9mZmVyc0ljb246ICdPZmZlcnNJY29uJyxcbiAgQmxvZ0ljb246ICdCbG9nSWNvbicsXG4gIFRlc3RpbW9uYWlsc0ljb246ICdUZXN0aW1vbmFpbHNJY29uJyxcbiAgRkFRSWNvbjogJ0ZBUUljb24nLFxuICBDb250YWN0SWNvbjogJ0NvbnRhY3RJY29uJyxcbiAgVmFjdGlvbkljb246ICdWYWN0aW9uSWNvbicsXG4gIEhvbmV5bW9vblBhY2thZ2VzOiAnSG9uZXltb29uUGFja2FnZXMnLFxuICBTZWFzb25hbEljb246ICdTZWFzb25hbEljb24nLFxuICBJbnRlcm5hdGlvbmFsSWNvbkJsYWNrOiAnSW50ZXJuYXRpb25hbEljb25CbGFjaycsXG4gIExvY2F0aW9uTWFya2VySWNvbjogJ0xvY2F0aW9uTWFya2VySWNvbicsXG4gIEZCSWNvbldoaXRlOiAnRkJJY29uV2hpdGUnLFxuICBUd2l0dGVyOiAnVHdpdHRlcicsXG4gIFBpbnRlcmVzdEljb246ICdQaW50ZXJlc3RJY29uJyxcbiAgR29vZ2xlSWNvbldoaXRlOiAnR29vZ2xlSWNvbldoaXRlJyxcbiAgSW5zdGFncmFtOiAnSW5zdGFncmFtJyxcbiAgQmx1ZURvd25BcnJvdzogJ0JsdWVEb3duQXJyb3cnLFxuICBHcmVlblRpY2s6ICdHcmVlblRpY2snLFxuXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnNNYXBwaW5nO1xuXG4vLyBjb25zdCBhbXBJY29uTWFwcGluZ3MgPSB7XG4vLyAgIElsbHVzVHJhdmVsZXI6ICdJbGx1c1RyYXZlbGVyJyxcbi8vICAgUGRwUXVvdGVzOiAnUGRwUXVvdGVzJyxcbi8vICAgUGRwU2VsZWN0UGFja2FnZTogJ1BkcFNlbGVjdFBhY2thZ2UnLFxuLy8gICBEb3duQXJyb3c6ICdEb3duQXJyb3cnLFxuLy8gICBTdGFySWNvbjogJ1N0YXJJY29uJyxcbi8vICAgU3Rhckljb25FbXB0eTogJ1N0YXJJY29uRW1wdHknLFxuLy8gICBCYWNrMkljb246ICdCYWNrMkljb24nLFxuLy8gICBJbmZvSWNvbjogJ0luZm9JY29uJyxcbi8vICAgU2VhcmNoSWNvbjogJ1NlYXJjaEljb24nLFxuLy8gICBUVGxvZ286ICdUVGxvZ28nLFxuLy8gICBTaGFyZVdoaXRlOiAnU2hhcmVXaGl0ZScsXG4vLyAgIFByb2ZpbGVJY29uOiAnUHJvZmlsZUljb24nLFxuLy8gICBIb21lSWNvbjogJ0hvbWVJY29uJyxcbi8vICAgRmFtaWx5SWNvbjogJ0ZhbWlseUljb24nLFxuLy8gICBXb3JrSWNvbjogJ1dvcmtJY29uJyxcbi8vICAgT2ZmZXJzSWNvbjogJ09mZmVyc0ljb24nLFxuLy8gICBCbG9nSWNvbjogJ0Jsb2dJY29uJyxcbi8vICAgVGVzdGltb25haWxzSWNvbjogJ1Rlc3RpbW9uYWlsc0ljb24nLFxuLy8gICBGQVFJY29uOiAnRkFRSWNvbicsXG4vLyAgIENvbnRhY3RJY29uOiAnQ29udGFjdEljb24nLFxuLy8gICBWYWN0aW9uSWNvbjogJ1ZhY3Rpb25JY29uJyxcbi8vICAgSG9uZXltb29uUGFja2FnZXM6ICdIb25leW1vb25QYWNrYWdlcycsXG4vLyAgIFNlYXNvbmFsSWNvbjogJ1NlYXNvbmFsSWNvbicsXG4vLyAgIEludGVybmF0aW9uYWxJY29uQmxhY2s6ICdJbnRlcm5hdGlvbmFsSWNvbkJsYWNrJyxcbi8vICAgTG9jYXRpb25NYXJrZXJJY29uOiAnTG9jYXRpb25NYXJrZXJJY29uJyxcbi8vICAgRkJJY29uV2hpdGU6ICdGQkljb25XaGl0ZScsXG4vLyAgIFR3aXR0ZXI6ICdUd2l0dGVyJyxcbi8vICAgUGludGVyZXN0SWNvbjogJ1BpbnRlcmVzdEljb24nLFxuLy8gICBHb29nbGVJY29uV2hpdGU6ICdHb29nbGVJY29uV2hpdGUnLFxuLy8gICBJbnN0YWdyYW06ICdJbnN0YWdyYW0nLFxuLy8gICBCbHVlRG93bkFycm93OiAnQmx1ZURvd25BcnJvdycsXG4vLyAgIEdyZWVuVGljazogJ0dyZWVuVGljaycsXG4vLyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZ2V0VGl0bGUgPSAodGl0bGUsIG1ldGFUYWdzKSA9PiB7XG4gIGNvbnN0IHRhZ3MgPSBtZXRhVGFncztcbiAgbGV0IG5ld1RpdGxlID0gdGl0bGU7XG4gIGlmICh0eXBlb2YgdGFncyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGFncy5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCB0aXRsZUxpc3QgPSB0YWdzLmZpbHRlcih0YWcgPT4gKFxuICAgICAgdGFnLnByb3BlcnR5ID09PSAnb2c6dGl0bGUnXG4gICAgKSk7XG4gICAgbmV3VGl0bGUgPSAodGl0bGVMaXN0Lmxlbmd0aCA+IDApICYmIHRpdGxlTGlzdFswXS5jb250ZW50O1xuICB9XG4gIHJldHVybiBuZXdUaXRsZTtcbn07XG5cbmNvbnN0IGdldERlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uLCBtZXRhVGFncykgPT4ge1xuICBjb25zdCB0YWdzID0gbWV0YVRhZ3M7XG4gIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBpZiAodHlwZW9mIHRhZ3MgIT09ICd1bmRlZmluZWQnICYmIHRhZ3MubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MaXN0ID0gdGFncy5maWx0ZXIodGFnID0+IChcbiAgICAgICh0YWcubmFtZSAmJiB0YWcubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGVzY3JpcHRpb24nKSB8fFxuICAgICAgKHRhZy5wcm9wZXJ0eSAmJiB0YWcucHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gJ29nOmRlc2NyaXB0aW9uJylcbiAgICApKTtcbiAgICBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uTGlzdC5sZW5ndGggPyBkZXNjcmlwdGlvbkxpc3RbMF0uY29udGVudCA6ICcnO1xuICB9XG4gIHJldHVybiBuZXdEZXNjcmlwdGlvbjtcbn07XG5cbmNvbnN0IGdldENhbm9uaWNhbCA9IChuYW1lKSA9PiB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcvJykge1xuICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxhc3RJbmRleE9mKCcvJykpO1xuICB9XG4gIHJldHVybiBgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20ke25hbWV9YDtcbn07XG5cbmNvbnN0IGNyZWF0ZUhlbG1ldCA9ICh0YWdzID0gW10sIGNhbm9uaWNhbFVybCwgcGF0aG5hbWUpID0+IHtcbiAgbGV0IGhhc0Rlc2NyaXB0aW9uID0gZmFsc2U7XG4gIGNvbnN0IGhlbG1ldHMgPSB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgaWYgKHRhZy5rZXl3b3JkID09PSAndGl0bGUnIHx8IHRhZy5rZXl3b3JkID09PSAnb2c6dGl0bGUnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dGl0bGU+e3RhZy52YWx1ZSA/IHRhZy52YWx1ZSA6ICcnfTwvdGl0bGU+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGFnLmtleXdvcmQgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgIGhhc0Rlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgICAgIHJldHVybiA8bWV0YSBuYW1lPXt0YWcua2V5d29yZH0gY29udGVudD17dGFnLnZhbHVlfSBrZXk9e2l9IC8+O1xuICAgIH1cbiAgICBpZiAodGFnLmtleXdvcmQgPT09ICduZXh0JyB8fCB0YWcua2V5d29yZCA9PT0gJ3ByZXYnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD17dGFnLmtleXdvcmR9XG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tJHt0YWcudmFsdWV9YH1cbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPG1ldGEgbmFtZT17dGFnLmtleXdvcmR9IGNvbnRlbnQ9e3RhZy52YWx1ZX0ga2V5PXtpfSAvPjtcbiAgfSk7XG4gIGlmICghaGFzRGVzY3JpcHRpb24pIHtcbiAgICBoZWxtZXRzLnB1c2goPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+KTtcbiAgfVxuICBoZWxtZXRzLnB1c2goXG4gICAgPGxpbmtcbiAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICBocmVmPXtjYW5vbmljYWxVcmwgPyBnZXRDYW5vbmljYWwoY2Fub25pY2FsVXJsKSA6IGdldENhbm9uaWNhbChwYXRobmFtZSl9XG4gICAgLz5cbiAgKTtcbiAgcmV0dXJuIGhlbG1ldHM7XG59O1xuXG4vLyBUT0RPOiBNZXRob2QgcmVmYWN0b3IgYWZ0ZXIgQkUgd29ya1xuLy8gUmVmYWN0b3IgY3JlYXRlSGVsbWV0QmFubmVyIGFuZCBjcmVhdGVIZWxtZXQgbWV0aG9kIHRvIGJlIHNpbmdsZSBtZXRob2Rcbi8vIGFmdGVyIGdldHRpbmcgZml4IGFsbCB0aGUgdmFsdWVzIGZyb20gQkUgYXMgY29udGVudCBhbmQgcHJvcGVydHkuXG5jb25zdCBjcmVhdGVIZWxtZXRCYW5uZXIgPSAodGFncyA9IFtdLCBjYW5vbmljYWxVcmwsIHBhdGhuYW1lKSA9PiB7XG4gIGNvbnN0IGhlbG1ldHMgPSB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgaWYgKHRhZy5uYW1lID09PSAndGl0bGUnKSB7XG4gICAgICByZXR1cm4gKDx0aXRsZT57dGFnLmNvbnRlbnQgPyB0YWcuY29udGVudCA6ICcnfTwvdGl0bGU+KTtcbiAgICB9XG4gICAgaWYgKHRhZy5uYW1lID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICByZXR1cm4gKDxtZXRhIG5hbWU9e3RhZy5uYW1lfSBjb250ZW50PXt0YWcuY29udGVudH0ga2V5PXtpfSAvPik7XG4gICAgfVxuICAgIGlmICh0YWcubmFtZSA9PT0gJ25leHQnIHx8IHRhZy5uYW1lID09PSAncHJldicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIDxtZXRhIHByb3BlcnR5PXt0YWcucHJvcGVydHl9IGNvbnRlbnQ9e3RhZy5jb250ZW50fSBrZXk9e2l9IC8+O1xuICB9KTtcblxuICBoZWxtZXRzLnB1c2goXG4gICAgPGxpbmtcbiAgICAgIGtleT1cImNhbm9uaWNhbFwiXG4gICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgaHJlZj17Y2Fub25pY2FsVXJsID8gZ2V0Q2Fub25pY2FsKGNhbm9uaWNhbFVybCkgOiBnZXRDYW5vbmljYWwocGF0aG5hbWUpfVxuICAgIC8+XG4gICk7XG4gIHJldHVybiBoZWxtZXRzO1xufTtcblxuY29uc3QgcmVuZGVyTWV0YVRhZ3MgPSAobWV0YVRhZ3NBcnJheSwgaXNBbXApID0+IHtcbiAgY29uc3QgbWV0YVRhZ3NXaXRob3V0SW9zVXJsID0gbWV0YVRhZ3NBcnJheS5maWx0ZXIoaXRlbSA9PlxuICAgICEoKFxuICAgICAgaXRlbS5wcm9wZXJ0eSAmJiAoXG4gICAgICAgIGl0ZW0ucHJvcGVydHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnYWw6aW9zOnVybCcpIHx8XG4gICAgICAgIGl0ZW0ucHJvcGVydHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnYWw6YW5kcm9pZDp1cmwnKSB8fFxuICAgICAgICBpdGVtLnByb3BlcnR5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2Rlc2NyaXB0aW9uJykgfHxcbiAgICAgICAgaXRlbS5wcm9wZXJ0eS50b0xvd2VyQ2FzZSgpID09PSAndGl0bGUnXG4gICAgICApIHx8IGl0ZW0ubmFtZSAmJiAoXG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkZXNjcmlwdGlvbicpIHx8XG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGl0bGUnIHx8XG4gICAgICAgICghaXNBbXAgJiYgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdyb2JvdHMnKVxuICAgICAgKVxuICAgICkpKTtcblxuICBpZiAobWV0YVRhZ3NXaXRob3V0SW9zVXJsKSB7XG4gICAgcmV0dXJuIG1ldGFUYWdzV2l0aG91dElvc1VybC5tYXAoKG1ldGFUYWcsIGluZGV4KSA9PiAoXG4gICAgICA8bWV0YSB7Li4ubWV0YVRhZ30ga2V5PXtgbWV0YV8ke2luZGV4fWB9IC8+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0VGl0bGUsXG4gIGdldERlc2NyaXB0aW9uLFxuICBnZXRDYW5vbmljYWwsXG4gIGNyZWF0ZUhlbG1ldCxcbiAgY3JlYXRlSGVsbWV0QmFubmVyLFxuICByZW5kZXJNZXRhVGFnc1xufTtcblxuIiwiaW1wb3J0IHsgcGFyc2VEZXN0aW5hdGlvbnNUb1Nob3csIHBhcnNlRGVzdGluYXRpb25Ub1Nob3cgfSBmcm9tICdhbXAvdXRpbHMvcGFyc2Vycyc7XG5cbmV4cG9ydCBjb25zdCBnZXRMaXN0aW5nSXRlbXNIZWFkaW5nID0gKFxuICB0aXRsZSxcbiAgZGVzdGluYXRpb24sXG4gIGlzTXVsdGlEZXN0aW5hdGlvbiA9IGZhbHNlLFxuICBkZXN0aW5hdGlvbnMgPSBbXVxuKSA9PiB7XG4gIGlmIChkZXN0aW5hdGlvbiA9PT0gJ3R0X3NlYXNvbmFsJykge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHJldHVybiBgJHt0aXRsZX0gJHtcbiAgICBkZXN0aW5hdGlvblxuICAgICAgPyBgZm9yICR7XG4gICAgICAgIGlzTXVsdGlEZXN0aW5hdGlvblxuICAgICAgICAgID8gcGFyc2VEZXN0aW5hdGlvbnNUb1Nob3coZGVzdGluYXRpb25zKVxuICAgICAgICAgIDogcGFyc2VEZXN0aW5hdGlvblRvU2hvdyhkZXN0aW5hdGlvbilcbiAgICAgICAgfWBcbiAgICAgIDogJydcbiAgICB9YDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmF2ZWxlclJldmlld1RyYXZDb3VudCh0cmF2Q291bnQpIHtcbiAgaWYodHJhdkNvdW50ICYmIHRyYXZDb3VudCA+IDEpIHtcbiAgICByZXR1cm4gJyB3aXRoICcgKyAoKHRyYXZDb3VudCAtIDEpID4gMSA/ICgodHJhdkNvdW50IC0gMSkgKyAnIG90aGVycycpIDogKCh0cmF2Q291bnQgLSAxKSArICcgb3RoZXInKSk7XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYXZlbGVyUmV2aWV3RGF0ZShkYXRlKSB7XG4gIGlmICghZGF0ZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBtb250aHNBcnIgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsXG4gICAgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIHJldHVybiAnIG9uICcgKyBjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAnICcgKyBtb250aHNBcnJbY3VycmVudERhdGUuZ2V0TW9udGgoKV0gKyAnLCAnICsgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmF2ZWxlclJldmlld0R1cmF0aW9uKGRheXMpIHtcbiAgaWYoZGF5cykge1xuICAgIHJldHVybiAnIGZvciAnICsgKGRheXMgPiAxID8gKGRheXMgKyAnIGRheXMnKSA6IChkYXlzICsgJyBkYXknKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmF2ZWxlclJldmlld0NpdGllcyhjaXR5QXJyKSB7XG4gIGlmIChjaXR5QXJyICYmIGNpdHlBcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuICd0byAnICsgKGNpdHlBcnIubGVuZ3RoID4gMSA/IGNpdHlBcnIuam9pbignLCAnKSA6IGNpdHlBcnJbMF0pO1xuICB9XG4gIHJldHVybiAnJztcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgJy4vRmFxLnNjc3MnO1xuaW1wb3J0IHsgZ2V0TGlzdGluZ0l0ZW1zSGVhZGluZyB9IGZyb20gJ2FtcC9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCBBY3Rpb24gZnJvbSAnYW1wL2hlbHBlcnMvQWN0aW9uJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jbGFzcyBGYXEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2aXNpYmxlOiA2LFxuICB9O1xuXG4gIF9sb2FkTW9yZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7IHZpc2libGU6IHByZXZTdGF0ZS52aXNpYmxlICsgMyB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZhcXMsIGRlc3RpbmF0aW9uLCB0aXRsZSwgaXNNdWx0aURlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFmYXFzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RGYXFzID0gZmFxcyAmJiBmYXFzLmxlbmd0aCA+IDYgPyBmYXFzLnNsaWNlKDAsNikgOiBmYXFzO1xuICAgIGNvbnN0IHNlY29uZEZhcXMgPSBmaXJzdEZhcXMubGVuZ3RoID8gZmFxcy5zbGljZSg2LGZhcXMubGVuZ3RoKSA6IFtdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0gcGw4IHByOCBwdDE1IHBiMTUgc2JjdycgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvRkFRUGFnZVwiPlxuICAgICAgICA8YW1wLXN0YXRlIGlkPVwiZmFxXCI+XG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgc2hvd0ZhcUluZGV4OiA2XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19PlxuICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICA8L2FtcC1zdGF0ZT5cbiAgICAgICAgPGgyXG4gICAgICAgICAgY2xhc3NOYW1lPSdoZWFkaW5nLWNvbW1vbi1jZW50ZXIgZmFxLWhlYWRpbmcnPntnZXRMaXN0aW5nSXRlbXNIZWFkaW5nKHRpdGxlLCBkZXN0aW5hdGlvbi5uYW1lLCBpc011bHRpRGVzdGluYXRpb24sIGRlc3RpbmF0aW9ucyl9IDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBmYXEtYm94Jz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdEZhcXMubWFwKChmYXEsIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtmYXEuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFxLWVsZW1lbnQgYXRfZmFxX3F1ZXN0aW9ucyBzaG93XCJcbiAgICAgICAgICAgICAgICBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1F1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICBpdGVtUHJvcD1cIm1haW5FbnRpdHlcIlxuICAgICAgICAgICAgICAgIGl0ZW1TY29wZVxuICAgICAgICAgICAgICAgIGlkPXtpbmRleCA9PT0gMSA/ICdmYXFfYm94LXRyaWdnZXJsaW5rJyA6ICcnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmYXEtcmFkaW9cIiBpZD17YGZhcV8ke2ZhcS5pZH1gfSBjbGFzc05hbWU9J2ZhcS1pbnB1dCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmFxXyR7ZmFxLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhcS1xdWVzdGlvbic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncXVlc3Rpb24tbWFyayBhYnNvbHV0ZSBsMCBhYnNvbHV0ZS1jZW50ZXItdiBpYmxvY2snIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2YxNHAgZnc3JyBpdGVtUHJvcD1cIm5hbWVcIj57ZmFxLnF1ZXN0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctZG93biBzbW9vdGggYWJzb2x1dGUgcjAgaWJsb2NrJy8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYXEtYW5zd2VyJ1xuICAgICAgICAgICAgICAgICAgICBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0Fuc3dlclwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Qcm9wPVwiYWNjZXB0ZWRBbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2YxNHAgZnc0JyBpdGVtUHJvcD1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VyLnBhcnNlKGZhcS5hbnN3ZXIpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWNvbmRGYXFzLm1hcCgoZmFxLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17ZmFxLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcS1lbGVtZW50IGF0X2ZhcV9xdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW1wLWJpbmQtY2xhc3M9e2BzaG93U2Vjb25kRmFxcyA/ICdmYXEtZWxlbWVudCBhdF9mYXFfcXVlc3Rpb25zIHNob3cnIDogJ2ZhcS1lbGVtZW50IGF0X2ZhcV9xdWVzdGlvbnMnYH1cbiAgICAgICAgICAgICAgICBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1F1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICBpdGVtUHJvcD1cIm1haW5FbnRpdHlcIlxuICAgICAgICAgICAgICAgIGl0ZW1TY29wZVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmYXEtcmFkaW9cIiBpZD17YGZhcV8ke2ZhcS5pZH1gfSBjbGFzc05hbWU9J2ZhcS1pbnB1dCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmFxXyR7ZmFxLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhcS1xdWVzdGlvbic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncXVlc3Rpb24tbWFyayBhYnNvbHV0ZSBsMCBhYnNvbHV0ZS1jZW50ZXItdiBpYmxvY2snIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2YxNHAgZnc3JyBpdGVtUHJvcD1cIm5hbWVcIj57ZmFxLnF1ZXN0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctZG93biBzbW9vdGggYWJzb2x1dGUgcjAgaWJsb2NrJy8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYXEtYW5zd2VyJ1xuICAgICAgICAgICAgICAgICAgICBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0Fuc3dlclwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Qcm9wPVwiYWNjZXB0ZWRBbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2YxNHAgZnc0JyBpdGVtUHJvcD1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VyLnBhcnNlKGZhcS5hbnN3ZXIpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpc2libGUgPCBmYXFzLmxlbmd0aCA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFxTG9hZE1vcmVDb250YWluZXIgcmVsYXRpdmUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIHA4IHBsMCBwcjBcIlxuICAgICAgICAgICAgICBkYXRhLWFtcC1iaW5kLWNsYXNzPXtgc2hvd1NlY29uZEZhcXMgPyAnaGlkZScgOiAnZmFxTG9hZE1vcmVDb250YWluZXIgcmVsYXRpdmUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIHA4IHBsMCBwcjAnYH0+XG4gICAgICAgICAgICAgICAgPEFjdGlvbiBldmVudHM9e3sgdGFwOiBbJ0FNUC5zZXRTdGF0ZSh7c2hvd1NlY29uZEZhcXMgOiB0cnVlfSknXSB9fT5cbiAgICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cInoyIGJ0bi1zZWMtbG9hZCB3ZnVsbCBwbDY0IHByNjRcIj5Mb2FkIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9BY3Rpb24+XG4gICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5GYXEucHJvcFR5cGVzID0ge1xuICBmYXFzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNNdWx0aURlc3RpbmF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVzdGluYXRpb25zOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbkZhcS5kZWZhdWx0UHJvcHMgPSB7XG4gIGZhcXM6IFtdLFxuICBkZXN0aW5hdGlvbjogbnVsbCxcbiAgdGl0bGU6ICdGQVFzJyxcbiAgaXNNdWx0aURlc3RpbmF0aW9uOiBmYWxzZSxcbiAgZGVzdGluYXRpb25zOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFxO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmFxLWJveFwiOiBcIl9EUEU3OFwiLFxuXHRcImZhcS1lbGVtZW50XCI6IFwiXzJ1amhXXCIsXG5cdFwic2hvd1wiOiBcIl8yWnpZeVwiLFxuXHRcImZhcS1pbnB1dFwiOiBcIl8yMGFOUVwiLFxuXHRcImZhcS1xdWVzdGlvblwiOiBcIl8xMFZjN1wiLFxuXHRcImZhcS1hbnN3ZXJcIjogXCJfM0RLWVBcIixcblx0XCJxdWVzdGlvbi1tYXJrXCI6IFwiXzNpV0hCXCIsXG5cdFwiYXJyb3ctZG93blwiOiBcIl8zNEgyR1wiLFxuXHRcImZhcUxvYWRNb3JlQ29udGFpbmVyXCI6IFwiXzI0ZWFIXCIsXG5cdFwiaGVhZGluZy1jb21tb24tY2VudGVyXCI6IFwiXzFfcVg4XCIsXG5cdFwiZmFxLWhlYWRpbmdcIjogXCJfM2lRakhcIixcblx0XCJidG4tc2VjLWxvYWRcIjogXCJfMzdsWHlcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL0FnZW50UmF0aW5nLnNjc3MnO1xuXG5mdW5jdGlvbiBnZXRTdGFycyhzdGFyTnVtLCBrZXlUeXBlLCBzdGFyQ2xhc3MpIHtcbiAgbGV0IGkgPSAwO1xuICBjb25zdCBzdGFycyA9IFtdO1xuICB3aGlsZSAoaSA8IHN0YXJOdW0pIHtcbiAgICBzdGFycy5wdXNoKDxsaSBjbGFzc05hbWU9e2Ake3N0YXJDbGFzc30gcmF0aW5nLXNwYW4gcmVsYXRpdmUgaWJsb2NrYH0ga2V5PXtrZXlUeXBlICsgaX0+PC9saT4pO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gc3RhcnM7XG59XG5cbmNvbnN0IEFnZW50UmF0aW5nID0gKHsgYWdlbnRSYXRpbmcsIGlkIH0pID0+IHtcbiAgY29uc3Qgc3RhcnMgPSBbXTtcbiAgY29uc3QgcmF0aW5nQmFyUmFuZ2UgPSA1O1xuICBjb25zdCB0cnVuY2F0ZWRSYXRpbmcgPSBNYXRoLnRydW5jKGFnZW50UmF0aW5nKTtcbiAgY29uc3QgZnJhY3Rpb25hbFJhdGluZyA9IHBhcnNlRmxvYXQoKGFnZW50UmF0aW5nIC0gdHJ1bmNhdGVkUmF0aW5nKS50b0ZpeGVkKDEpKTtcbiAgbGV0IGZ1bGxTdGFyQ291bnQgPSAwO1xuICBsZXQgaGFsZlN0YXJDb3VudCA9IDA7XG5cbiAgaWYgKGZyYWN0aW9uYWxSYXRpbmcgPT09IDAuMCkge1xuICAgIGZ1bGxTdGFyQ291bnQgPSBhZ2VudFJhdGluZztcbiAgfSBlbHNlIGlmIChmcmFjdGlvbmFsUmF0aW5nIDw9IDAuNSkge1xuICAgIGZ1bGxTdGFyQ291bnQgPSB0cnVuY2F0ZWRSYXRpbmc7XG4gICAgaGFsZlN0YXJDb3VudCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgZnVsbFN0YXJDb3VudCA9IHRydW5jYXRlZFJhdGluZyArIDE7XG4gIH1cblxuICBjb25zdCBlbXB0eVN0YXJDb3VudCA9IHJhdGluZ0JhclJhbmdlIC0gKGZ1bGxTdGFyQ291bnQgKyBoYWxmU3RhckNvdW50KTtcblxuICBzdGFycy5wdXNoKGdldFN0YXJzKGZ1bGxTdGFyQ291bnQsIGAke2lkfV9mdWxsX3N0YXJgLCAnZnVsbFN0YXJDbGFzcycpKTtcbiAgc3RhcnMucHVzaChnZXRTdGFycyhoYWxmU3RhckNvdW50LCBgJHtpZH1faGFsZl9zdGFyYCwgJ2hhbGZTdGFyQ2xhc3MnKSk7XG4gIHN0YXJzLnB1c2goZ2V0U3RhcnMoZW1wdHlTdGFyQ291bnQsIGAke2lkfV9lbXB0eV9zdGFyYCwgJ2VtcHR5U3RhckNsYXNzJykpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctc3RhcnMgaWJsb2NrIG0wIGF0X3JhdGluZ3N0YXJzXCI+XG4gICAgICB7c3RhcnN9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BZ2VudFJhdGluZy5wcm9wVHlwZXMgPSB7XG4gIGFnZW50UmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc3RyaW5nZ1xuICBdKVxufTtcblxuQWdlbnRSYXRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhZ2VudFJhdGluZzogNCxcbiAgaWQ6ICd1bmlxdWVfaWRlbnRpZmllcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50UmF0aW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicmF0aW5nLXN0YXJzXCI6IFwiX183ck1WXCIsXG5cdFwiZnVsbFN0YXJDbGFzc1wiOiBcIl8yYzk4Y1wiLFxuXHRcImhhbGZTdGFyQ2xhc3NcIjogXCJfM3F3cWxcIixcblx0XCJlbXB0eVN0YXJDbGFzc1wiOiBcIl8xWjFjMVwiXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJyZWFkY3J1bWItbGlzdFwiOiBcIl9XcVVUSVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCAnLi9CcmVhZGNydW1iLnNjc3MnO1xuXG5jb25zdCBCcmVhZGNydW1iTGlzdGluZyA9ICh7IGJyZWFkY3J1bWJzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHA4IHNiYzUnPlxuICAgIDxvbCBjbGFzc05hbWU9J2JyZWFkY3J1bWItbGlzdCBtMCBwMCcgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cHM6Ly9zY2hlbWEub3JnL0JyZWFkY3J1bWJMaXN0XCI+XG4gICAgICB7XG4gICAgICAgIGJyZWFkY3J1bWJzLm1hcCgoYnJlYWRjcnVtYiwgaW5kZXgsIGFycmF5KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YCR7YnJlYWRjcnVtYi5uYW1lfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgIGl0ZW1Qcm9wPVwiaXRlbUxpc3RFbGVtZW50XCJcbiAgICAgICAgICAgICAgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cHM6Ly9zY2hlbWEub3JnL0xpc3RJdGVtXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJyZWFkY3J1bWIudXJsID9cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gYnJlYWRjcnVtYnMubGVuZ3RoLTEgP1xuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXticmVhZGNydW1iLnVybH0gaXRlbVByb3A9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBpdGVtUHJvcD1cIm5hbWVcIj57YnJlYWRjcnVtYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+IDogPExpbmsgdG89e2JyZWFkY3J1bWIudXJsfSBpdGVtUHJvcD1cIml0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaXRlbVByb3A9XCJuYW1lXCI+e2JyZWFkY3J1bWIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgOiA8c3BhbiBpdGVtUHJvcD1cIm5hbWVcIj57YnJlYWRjcnVtYi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwicG9zaXRpb25cIiBjb250ZW50PXtpbmRleCArIDF9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L29sPlxuICA8L2Rpdj5cbik7XG5cbkJyZWFkY3J1bWJMaXN0aW5nLnByb3BUeXBlcyA9IHtcbiAgYnJlYWRjcnVtYnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYkxpc3Rpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL0hpZ2hsaWdodHMuc2Nzcyc7XG5cbmNvbnN0IEhpZ2hsaWdodHMgPSAoeyBsaXN0IH0pID0+IHtcbiAgaWYgKCFsaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwMTUgc2Jjd1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZjE2IGZ3OSBtMCBtYjI0XCI+SGlnaGxpZ2h0czwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWdobGlnaHRzTGlzdFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpc3QubWFwKChsLCBpKSA9PiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIj48L3NwYW4+e2wudGV4dH1cbiAgICAgICAgICAgIDwvbGk+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGlnaGxpZ2h0cy5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0cztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhpZ2hsaWdodHNMaXN0XCI6IFwiXzJTV1VPXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vSW5jbHVzaW9uLnNjc3MnO1xuXG5jb25zdCBFeGNsdXNpb24gPSAoeyBsaXN0IH0pID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBsaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgIDxsaSBrZXk9e2l9PnsgaXRlbSB9PC9saT5cbiAgICApKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJwMCBtMCBpbmNsLWV4Y2wtbGlzdCBleGNsLWxpc3RcIj5cbiAgICAgIHtlbGVtZW50c31cbiAgICA8L3VsPlxuICApO1xufTtcblxuRXhjbHVzaW9uLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5FeGNsdXNpb24uZGVmYXVsdFByb3BzID0ge1xuICBsaXN0OiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjbHVzaW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBJbmNsdXNpb24gZnJvbSAnLi9JbmNsdXNpb24nO1xuaW1wb3J0IEV4Y2x1c2lvbiBmcm9tICcuL0V4Y2x1c2lvbic7XG5pbXBvcnQgJy4vSW5jRXhjbHVzaW9uLnNjc3MnO1xuXG5jb25zdCBJbmNFeGNsdXNpb24gPSAoeyBpbmNsdXNpb25zLCBleGNsdXNpb25zIH0pID0+IHtcbiAgaWYgKCFpbmNsdXNpb25zLmxlbmd0aCAmJiAhZXhjbHVzaW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjdyByZWxhdGl2ZVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpbmMtZXhjLXJhZGlvXCIgY2xhc3NOYW1lPVwiaW5jLWV4Yy1yYWRpb1wiIGlkPVwiSW5jRXhjUmFkaW8xXCIgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJJbmNFeGNSYWRpbzFcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcGwwIHByMFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaW5jLWV4Yy1idXR0b24gYWJzb2x1dGUgdDAgbDAgcmlwcGxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlLWRhcmtcIi8+XG4gICAgICAgICAgSW5jbHVzaW9uc1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluYy1leGMtZGF0YSBwMTUgcGwyNCBwcjI0XCI+XG4gICAgICAgICAgPEluY2x1c2lvbiBsaXN0PXtpbmNsdXNpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImluYy1leGMtcmFkaW9cIiBjbGFzc05hbWU9XCJpbmMtZXhjLXJhZGlvXCIgaWQ9XCJJbmNFeGNSYWRpbzJcIiAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJJbmNFeGNSYWRpbzJcIiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcGwwIHByMCBzZWNvbmQtdGFiXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJpbmMtZXhjLWJ1dHRvbiBhYnNvbHV0ZSB0MCByMCByaXBwbGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmUtZGFya1wiIC8+XG4gICAgICAgICAgRXhjbHVzaW9uc1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluYy1leGMtZGF0YSBwMTUgcGwyNCBwcjI0XCI+XG4gICAgICAgICAgPEV4Y2x1c2lvbiBsaXN0PXtleGNsdXNpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbmNFeGNsdXNpb24ucHJvcFR5cGVzID0ge1xuICBpbmNsdXNpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGV4Y2x1c2lvbnM6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cbkluY0V4Y2x1c2lvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGluY2x1c2lvbnM6IFtdLFxuICBleGNsdXNpb25zOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluY0V4Y2x1c2lvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluYy1leGMtcmFkaW9cIjogXCJfNVhUdlRcIixcblx0XCJpbmMtZXhjLWJ1dHRvblwiOiBcIl83OVJmS1wiLFxuXHRcImluYy1leGMtZGF0YVwiOiBcIl8xaG1UV1wiLFxuXHRcInNlY29uZC10YWJcIjogXCJfNzBGd2NcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9JbmNsdXNpb24uc2Nzcyc7XG5cbmNvbnN0IEluY2x1c2lvbiA9ICh7IGxpc3QgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGxpc3QubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgPGxpIGtleT17aX0gaWQ9e2kgPT09IDEgPyAnaW5jZXhjbHVzaW9uX2JveC10cmlnZ2VybGluayc6ICcnfT57IGl0ZW0gfTwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cInAwIG0wIGluY2wtZXhjbC1saXN0XCI+XG4gICAgICB7ZWxlbWVudHN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbkluY2x1c2lvbi5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheVxufTtcblxuSW5jbHVzaW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluY2x1c2lvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluY2wtZXhjbC1saXN0XCI6IFwiXzJZSW9HXCIsXG5cdFwiZXhjbC1saXN0XCI6IFwiXzFOUldqXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgX2NodW5rIGZyb20gJ2xvZGFzaC9jaHVuayc7XG5cbmNvbnN0IFJlbmRlckxpbmtzID0gKHsgdXJsLCBuYW1lIH0pID0+IHtcbiAgcmV0dXJuICg8YSBocmVmPXt1cmx9IGNsYXNzTmFtZT0nbm93cmFwIHBsMTUgcHIxNSBwdDggcGI4IHNiYzUgcGZjMyBmMTQgcmFkaXVzMiBpYmxvY2sgIG1yOCc+XG4gICAgPHNwYW4gY2xhc3NOYW1lPSdpYmxvY2sgcHQ0IHBiNCc+e25hbWV9PC9zcGFuPlxuICA8L2E+KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlRm9vdGVyTGlua3MgPSAoZm9vdGVyTGlua0FycikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1iOCc+XG4gICAgICB7XG4gICAgICAgIGZvb3RlckxpbmtBcnIubWFwKChmb290ZXJMaW5rKSA9PiB7XG4gICAgICAgICAgaWYgKGZvb3RlckxpbmsuaGFzT3duUHJvcGVydHkoJ25hbWUnKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8UmVuZGVyTGlua3MgdXJsPXtmb290ZXJMaW5rLnVybH0gbmFtZT17Zm9vdGVyTGluay5uYW1lfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChPYmplY3QudmFsdWVzKGZvb3RlckxpbmspLm1hcCgoZm9vdGVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoPFJlbmRlckxpbmtzIHVybD17Zm9vdGVyLmxpbmt9IG5hbWU9e2Zvb3Rlci5uYW1lfSAvPik7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2VuZXJhdGVGb290ZXJMaW5rU2VjdGlvbiA9IChmb290ZXJMaW5rU2VjdGlvbikgPT4ge1xuICBjb25zdCBmb290ZXJMaW5rcyA9IGZvb3RlckxpbmtTZWN0aW9uLmZvb3RlckxpbmtzID8gZm9vdGVyTGlua1NlY3Rpb24uZm9vdGVyTGlua3MgOiBmb290ZXJMaW5rU2VjdGlvbi5mb290ZXJfbGlua3M7XG4gIGNvbnN0IGdyb3VwZWRBcnIgPSBfY2h1bmsoZm9vdGVyTGlua3MsIDUpO1xuICByZXR1cm4gKFxuICAgIGZvb3RlckxpbmtzICYmIGZvb3RlckxpbmtzLmxlbmd0aCA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncDE1IHNiY3cgbWI4Jz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nZjE2IGZ3OSBwZmMzIG1iMTUnPntmb290ZXJMaW5rU2VjdGlvbi5uYW1lfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvd1hzY3JvbGwgc3dpcGVyLWZ1bGwtd2lkdGgnPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdyb3VwZWRBcnIubGVuZ3RoID9cbiAgICAgICAgICAgICAgZ3JvdXBlZEFyci5tYXAoKGZvb3RlckxpbmtBcnIpID0+IGdlbmVyYXRlRm9vdGVyTGlua3MoZm9vdGVyTGlua0FycikpXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDpcbiAgICAgIG51bGxcbiAgKTtcbn07XG5cbmNvbnN0IEludGVyTGlua2luZyA9ICh7IGZvb3RlckxpbmtzIH0pID0+IChcbiAgPGRpdj5cbiAgICB7XG4gICAgICBmb290ZXJMaW5rcy5tYXAoKGZvb3RlckxpbmtTZWN0aW9uKSA9PiBnZW5lcmF0ZUZvb3RlckxpbmtTZWN0aW9uKGZvb3RlckxpbmtTZWN0aW9uKSlcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuSW50ZXJMaW5raW5nLnByb3BUeXBlcyA9IHtcbiAgZm9vdGVyTGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuUmVuZGVyTGlua3MucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJMaW5raW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEl0aW5lcmFyeVRhZ3MgPSAoeyBsaXN0LCBpdGluZXJhcnlJZCwgdGFnSWQgfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeUVsZW1lbnRzID0gbGlzdC5tYXAoXG4gICAgKHZhbHVlLCBrZXkpID0+IChcbiAgICAgIDxsaVxuICAgICAgICBrZXk9e2BjYXRlZ29yeV8ke2l0aW5lcmFyeUlkfV8ke3RhZ0lkfV8ke2tleX1gfSAgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgY2xhc3NOYW1lPVwiaXRpbmVyYXJ5LXRhZ3MtYm94LWl0ZW1cIlxuICAgICAgPlxuICAgICAgICB7IHZhbHVlIH1cbiAgICAgIDwvbGk+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtc3R5bGUtbm9cIj5cbiAgICAgIHtjYXRlZ29yeUVsZW1lbnRzfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5JdGluZXJhcnlUYWdzLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICBpdGluZXJhcnlJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0YWdJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5JdGluZXJhcnlUYWdzLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyeVRhZ3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL3JlYWRNb3JlQnlIZWlnaHQuc2Nzcyc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5cbmNsYXNzIFJlYWRNb3JlQnlIZWlnaHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29udGVudCA9ICcnO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmNvbnRlbnQuc3BsaXQoJyZsdDtyZWFkbW9yZSZndDsnKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhWzBdICsgZGF0YVsxXTtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZSgnIWltcG9ydGFudCcsICcnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1heEhlaWdodCwgY29udGVudCwgaGVhZGluZywgc2hvd1RpdGxlLCBob3RlbERpc3BsYXlOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd1RpdGxlID9cbiAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZjE2IHBiMCBtMCBmd2IgbWIxNVwiPntoZWFkaW5nfSB7aG90ZWxEaXNwbGF5TmFtZSA/IGBhdCAke2hvdGVsRGlzcGxheU5hbWV9YCA6IG51bGx9PC9oMj4gOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVhZE1vcmVDb250ZW50IGJsb2NrIHJlbGF0aXZlIHB0OCByZWFkTW9yZUJ5SGVpZ2h0YH1cbiAgICAgICAgICAgICAgIGRhdGEtYW1wLWJpbmQtY2xhc3M9e2BleHBhbmRlZCA/ICdyZWFkTW9yZUNvbnRlbnQgYmxvY2sgcmVsYXRpdmUgcHQ4JzogJ3JlYWRNb3JlQ29udGVudCBibG9jayByZWxhdGl2ZSBwdDggcmVhZE1vcmVCeUhlaWdodCdgfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGR5bmFtaWNUZXh0SW5oZXJpdCBwZmMzIGYxNHBcIj5cbiAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICBfX2h0bWw6IHRoaXMuY29udGVudFxuICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEFjdGlvbiBldmVudHM9e3sgdGFwOiBbYEFNUC5zZXRTdGF0ZSh7ZXhwYW5kZWQ6IWV4cGFuZGVkfSlgXSB9fT5cbiAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWRNb3JlLWRyb3Bkb3duIGN1cnNvclAgZjE0IHByMTUgZmxleCByZWxhdGl2ZSBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gbXQ4ICBmdzlcIlxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1hbXAtYmluZC10ZXh0PVwiZXhwYW5kZWQgPydSZWFkIExlc3MnOicgUmVhZCBNb3JlJ1wiPlJlYWQgTW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWFtcC1iaW5kLWNsYXNzPVwiZXhwYW5kZWQgP1xuICAgICAgICAgICAgICAgICdyb3RhdGUxODAgZG93bkFycm93IHJlbGF0aXZlIGJsb2NrICcgOiAncm90YXRlMCBkb3duQXJyb3cgcmVsYXRpdmUgYmxvY2sgJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm90YXRlMCBkb3duQXJyb3cgcmVsYXRpdmUgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5SZWFkTW9yZUJ5SGVpZ2h0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dUaXRsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhvdGVsRGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5SZWFkTW9yZUJ5SGVpZ2h0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWF4SGVpZ2h0OiA4MyxcbiAgc2hvd1RpdGxlOiB0cnVlXG59O1xuZXhwb3J0IGRlZmF1bHQgUmVhZE1vcmVCeUhlaWdodDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCAnLi9TZW9Gb290ZXIuc2Nzcyc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5cbmNsYXNzIFNlb0Zvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZzogLTFcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb290ZXJTZWN0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW8tZm9vdGVyLW9wdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYnNIZWFkaW5ncyBwYmMzJz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0YWJzSGVhZGluZ3NNYWluIGZsZXggbTAgcDAnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmb290ZXJTZWN0aW9ucy5tYXAoKGZvb3RlclNlY3Rpb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgYWxpZ25DZW50ZXIgbTAgJHtpID09PSBzZWxlY3RlZFNlb0Zvb3RlckhlYWRpbmcgPyAnc2VsZWN0ZWQtaGVhZGluZycgOiAnJyB9YH0ga2V5PXtmb290ZXJTZWN0aW9uLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPEFjdGlvbiBldmVudHM9e3sgdGFwOiBbYEFNUC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBzaG93SW5kZXggOiAke2l9LCBmb290ZXJTZWN0aW9uJHtpfSA6ICFmb290ZXJTZWN0aW9uJHtpfVxuICAgICAgICAgICAgICAgICAgfSlgXX19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnc3IHNmY3cgZjE0XCIgey4uLnByb3BzfT57Zm9vdGVyU2VjdGlvbi5uYW1lfTwvYnV0dG9uPil9XG4gICAgICAgICAgICAgICAgICA8L0FjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb290ZXJTZWN0aW9ucy5tYXAoKGZvb3RlclNlY3Rpb24sIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NiY3cnXG4gICAgICAgICAgICAgIGRhdGEtYW1wLWJpbmQtY2xhc3M9e2BzaG93SW5kZXggPT0gJHtpfSA/ICdzYmN3IHNlbGVjdGVkLWNvbnRlbnQnOiAnc2JjdydgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncDE1J1xuICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbXAtYmluZC1jbGFzcz17YGZvb3RlclNlY3Rpb24ke2l9ID8gJ3AxNScgOiAnaGlkZSdgfT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyU2VjdGlvbi5mb290ZXJfbGlua3MubWFwKGZvb3RlckxpbmsgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYmxvY2sgcGZjMyBtYjgnIGtleT17Zm9vdGVyTGluay51cmx9IHRvPXtmb290ZXJMaW5rLnVybH0+e2Zvb3RlckxpbmsubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TZW9Gb290ZXIucHJvcFR5cGVzID0ge1xuICBmb290ZXJTZWN0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZW9Gb290ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZW8tZm9vdGVyLW9wdGlvbnNcIjogXCJfMlRYbmZcIixcblx0XCJ0YWJzSGVhZGluZ3NcIjogXCJfM3E5N1BcIixcblx0XCJ0YWJzSGVhZGluZ3NNYWluXCI6IFwiXzFWcEZQXCIsXG5cdFwic2VsZWN0ZWQtY29udGVudFwiOiBcIl8zSUNWdFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBZZWxsb3dEb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNUb29sdGlwVmlzaWJsZTogZmFsc2UsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfTtcbiAgfVxuXG4gIGdldFN0eWxlT2JqZWN0ID0gKHRvcCwgbGVmdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCwgbGVmdDogbGVmdFxuICAgIH07XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaG92ZXJEYXRhLCBkb3RCb3hTdHlsZSwgZG90U21hbGxCb3hTdHlsZSwgc3Bpbm5lclN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvb2x0aXBDb250YWluZXJTdGF0ZSA9IHRoaXMuc3RhdGUuaXNUb29sdGlwVmlzaWJsZSA/ICdmbGV4JyA6ICdoaWRlJztcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGlubmVyLW91dGVyJyBzdHlsZT17ZG90Qm94U3R5bGV9PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT0nc3Bpbm5lci15ZWxsb3cgcmVsYXRpdmUnXG4gICAgICAgICAgc3R5bGU9e3NwaW5uZXJTdHlsZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICA+IDxkaXYgY2xhc3NOYW1lPXtgdG9vbHRpcEFycm93ICR7dG9vbHRpcENvbnRhaW5lclN0YXRlfWB9IC8+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncmFkaXVzMTAwIGFic29sdXRlLWNlbnRlciBkb3VibGUtYm91bmNlJ1xuICAgICAgICAgICAgc3R5bGU9e2RvdFNtYWxsQm94U3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JhZGl1czEwMCBkb3VibGUtYm91bmNlMS15ZWxsb3cnIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyYWRpdXMxMDAgZG91YmxlLWJvdW5jZTIteWVsbG93JyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9vbHRpcENvbnRhaW5lciAke3Rvb2x0aXBDb250YWluZXJTdGF0ZX1gfVxuICAgICAgICAgIHN0eWxlPXt0aGlzLmdldFN0eWxlT2JqZWN0KCh0aGlzLnN0YXRlLnRvcCAtIDU0KSwgMTUpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9vbHRpcC10aGVtZS0td2hpdGUgcmVsYXRpdmUnPlxuICAgICAgICAgICAge2hvdmVyRGF0YX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5ZZWxsb3dEb3QucHJvcFR5cGVzID0ge1xuICBob3ZlckRhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZG90Qm94U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRvdFNtYWxsQm94U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNwaW5uZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cblllbGxvd0RvdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRvdEJveFN0eWxlOiB7fSxcbiAgZG90U21hbGxCb3hTdHlsZToge30sXG4gIHNwaW5uZXJTdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBZZWxsb3dEb3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL2hvd2l0d29ya3Muc2Nzcyc7XG5cbmNvbnN0IGNhcmQgPSB7XG4gIGhlYWRpbmc6ICdIb3cgaXQgV29ya3MnLFxuICBpdGVtczogW1xuICAgIHtcbiAgICAgIGljb246ICdQZHBTZWxlY3RQYWNrYWdlJyxcbiAgICAgIHRpdGxlOiAnUGVyc29uYWxpc2UgVGhpcyBQYWNrYWdlJyxcbiAgICAgIHBhcmFncmFwaDogJ01ha2UgY2hhbmdlcyBhcyBwZXIgeW91ciB0cmF2ZWwgcGxhbiAmIHN1Ym1pdCB0aGUgcmVxdWVzdC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ1BkcFF1b3RlcycsXG4gICAgICB0aXRsZTogJ0dldCBNdWx0aXBsZSBRdW90ZXMnLFxuICAgICAgcGFyYWdyYXBoOiAnQ29ubmVjdCB3aXRoIHRvcCAzIGFnZW50cywgY29tcGFyZSBxdW90ZXMgJiBjdXN0b21pemUgZnVydGhlci4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ0lsbHVzVHJhdmVsZXInLFxuICAgICAgdGl0bGU6ICdCb29rIFRoZSBCZXN0IERlYWwnLFxuICAgICAgcGFyYWdyYXBoOiAnUGF5IGluIGVhc3kgaW5zdGFsbG1lbnRzICYgZ2V0IHJlYWR5IHRvIGVuam95IHlvdXIgaG9saWRheS4nLFxuICAgIH0sXG4gIF1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG93SXRXb3JrcyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwIHNiY3cgbXQ4XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTYgZnc5IHAxNSBwZmM1IGJiIG0wXCI+e2NhcmQuaGVhZGluZ308L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMCBob3dJdFdvcmtCbG9ja1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhcmQuaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgZmxleCBhbGlnbkNlbnRlciBwbDE1IHByMTUgcHQyNCBwYjI0IHdvcmtzQm94XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeUNlbnRlciAke2l0ZW0uaWNvbn1gfS8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImYxNCBmdzkgcGI4IG0wXCI+e2l0ZW0udGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyXCI+e2l0ZW0ucGFyYWdyYXBofTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob3dJdFdvcmtCbG9ja1wiOiBcIl8zN2cyZFwiLFxuXHRcIndvcmtzQm94XCI6IFwiXzFtd0hBXCIsXG5cdFwiUGRwU2VsZWN0UGFja2FnZVwiOiBcIl8xN0lpLVwiLFxuXHRcIlBkcFF1b3Rlc1wiOiBcIl8zZndlbVwiLFxuXHRcIklsbHVzVHJhdmVsZXJcIjogXCJfMkFlR3ZcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZWFkTW9yZUNvbnRlbnRcIjogXCJfMjQ5ZDdcIixcblx0XCJleHBhbmRlZFwiOiBcIl8yU3JXcFwiLFxuXHRcInJlYWRNb3JlLWRyb3Bkb3duXCI6IFwiXzJqbjNTXCIsXG5cdFwiZHluYW1pY1RleHRJbmhlcml0XCI6IFwiX0F0ZXhRXCIsXG5cdFwiZG93bkFycm93XCI6IFwiX1VOYTlHXCIsXG5cdFwicmVhZE1vcmVCeUhlaWdodFwiOiBcIl8zSEstT1wiLFxuXHRcInRhYmxlLXJlc3BvbnNpdmVcIjogXCJfM3ZqY3lcIixcblx0XCJ0YWJsZVwiOiBcIl9uR1ZTQ1wiLFxuXHRcInJvdGF0ZTE4MFwiOiBcIl8xTGRMVlwiLFxuXHRcInJvdGF0ZTBcIjogXCJfMmM0N2VcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyB3aGF0c0FwcFVybCB9IGZyb20gJ2FtcC9oZWxwZXJzL3VybEhlbHBlcnMnO1xuXG5leHBvcnQgY29uc3QgVHJpcFR5cGVMaXN0ID0gKHtcbiAgc2VsZWN0aW9uTGlzdCxcbiAgc2VsZWN0ZWRJdGVtLFxuICB0b2dnbGVTZWxlY3Rpb24sXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gYWJzb2x1dGUgd2Z1bGwgY2F0ZWdvcnktbGlzdFwiPlxuICAgIDx1bD5cbiAgICAgIHtPYmplY3Qua2V5cyhzZWxlY3Rpb25MaXN0KS5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2l0ZW19PjxMaW5rXG4gICAgICAgICAgdG89e3NlbGVjdGlvbkxpc3RbaXRlbV0udXJsfVxuICAgICAgICAgIGNsYXNzTmFtZT17KHNlbGVjdGVkSXRlbSA9PT0gaXRlbSkgPyAnc2VsZWN0ZWQtY2F0ZWdvcnknIDogJyd9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbigpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7c2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lfVxuICAgICAgICA8L0xpbms+PC9saT5cbiAgICAgICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4LWxheWVyLXN1Z2dlc3Rpb25cIiBvbkNsaWNrPXt0b2dnbGVTZWxlY3Rpb259Lz5cbiAgPC9kaXY+XG4gICk7XG5cblRyaXBUeXBlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdGlvbkxpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZVNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyU3ViSGVhZGluZyA9IChzaG93VGl0bGVBc0gxLCBwbHBIZWFkaW5nLCB0aXRsZSkgPT4ge1xuICAgIGlmIChwbHBIZWFkaW5nKSB7XG4gICAgICByZXR1cm4gPGgyIGNsYXNzTmFtZT1cImZ3NCBmbGV4RnVsbFwiPntwbHBIZWFkaW5nfTwvaDI+O1xuICAgIH0gZWxzZSBpZiAoc2hvd1RpdGxlQXNIMSkge1xuICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJmdzQgZmxleEZ1bGwgZjE2IG0wIGhlYWRpbmctdGl0bGUtYW1wXCI+e3RpdGxlfTwvaDE+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZnc0IGZsZXhGdWxsXCI+e3RpdGxlfTwvcD47XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHNob3dTaGFyZSxcbiAgICAgIHNob3dCbGFja1NoYXJlLFxuICAgICAgaGVhZGluZywgdXJsLFxuICAgICAgc2hvd1RpdGxlQXNIMSxcbiAgICAgIHBscEhlYWRpbmcsXG4gICAgICBiYWNrVXJsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc3ViSGVhZGVyID0gbnVsbDtcblxuICAgIHN1YkhlYWRlciA9IHRoaXMucmVuZGVyU3ViSGVhZGluZyhzaG93VGl0bGVBc0gxLCBwbHBIZWFkaW5nLCB0aXRsZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTYgc2ZjdyBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2stYXJyb3dcIiBocmVmPXtiYWNrVXJsfT5nbyBiYWNrPC9hPlxuICAgICAgICAgIHtzdWJIZWFkZXJ9XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd1NoYXJlID9cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtbG9nby1yaWdodCBmcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YT48YW1wLXNvY2lhbC1zaGFyZSB0eXBlPVwic3lzdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmFtLXVybD17d2hhdHNBcHBVcmwoaGVhZGluZywgdXJsKX0+XG4gICAgICAgICAgICAgICAgPC9hbXAtc29jaWFsLXNoYXJlPjwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj4gOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyVGl0bGUucHJvcFR5cGVzID0ge1xuICBnb0JhY2tTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0aW9uTGlzdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3Rpb25MaXN0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmlwVHlwZUxpc3RTaG93bjogUHJvcFR5cGVzLmJvb2wsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYWNrVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93U2hhcmU6IFByb3BUeXBlcy5ib29sLFxuICBzaG93QmxhY2tTaGFyZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd1RpdGxlQXNIMTogUHJvcFR5cGVzLmJvb2wsXG4gIHBscEhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkhlYWRlclRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VsZWN0aW9uTGlzdDogeyBhbGw6IHsgbmFtZTogJ0FsbCcsIHVybDogJy9BbGwtUGxhY2VzJyB9IH0sXG4gIHNlbGVjdGVkSXRlbTogJ2FsbCcsXG4gIHRvZ2dsZVNlbGVjdGlvbjogKCkgPT4ge30sXG4gIHNlbGVjdGlvbkxpc3RWaXNpYmxlOiBmYWxzZSxcbiAgdGl0bGU6ICcnLFxuICB0cmlwVHlwZUxpc3RTaG93bjogZmFsc2UsXG4gIGNhdGVnb3J5OiAnJyxcbiAgYmFja1VybDogJycsXG4gIHNob3dTaGFyZTogZmFsc2UsXG4gIHNob3dCbGFja1NoYXJlOiBmYWxzZSxcbiAgaGVhZGluZzogJycsXG4gIHVybDogJycsXG4gIHNob3dUaXRsZUFzSDE6IHRydWUsXG4gIHBscEhlYWRpbmc6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUaXRsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhY2thZ2UtY2FyZFwiOiBcIl8yRVA3YlwiLFxuXHRcImF0X3BhY2thZ2VEYXlzQ291bnRcIjogXCJfREZZY29cIixcblx0XCJzdGFyLXJhdGluZ3Mtc2VsZWN0aW9uXCI6IFwiXzE0WkNVXCIsXG5cdFwiaG90ZWxTdGFySXRlbVwiOiBcIl8ycUo3S1wiLFxuXHRcIm1vcmUtdGhhbi10aHJlZS1zdGFyc1wiOiBcIl8xbUp5VFwiLFxuXHRcImRpc2NvdW50LXJpYmJvblwiOiBcIl8xUDd4eFwiLFxuXHRcInBhY2thZ2UtY2l0aWVzXCI6IFwiXzJmdnpEXCIsXG5cdFwicGFja2FnZS1jaXRpZXMtbGlzdFwiOiBcIl8zWGVDeFwiLFxuXHRcImxpc3QtaGVhZGluZ1wiOiBcIl9JUkxiRlwiLFxuXHRcInBhY2thZ2UtcHJpY2VcIjogXCJfM29JRTdcIixcblx0XCJvcmlnaW5hbC1wcmljZVwiOiBcIl8zcXBWOFwiLFxuXHRcInN0YXJ0aW5nLWZyb21cIjogXCJfQXlZNnlcIixcblx0XCJwYWNrYWdlLWltYWdlLXRpdGxlXCI6IFwiXzFfODNUXCIsXG5cdFwiaWJsb2NrXCI6IFwiXzNsakdoXCIsXG5cdFwiY2hlY2tib3gtY29tbW9uXCI6IFwiXzJmNTlaXCIsXG5cdFwicmFkaW8tY29tbW9uLXJvdW5kXCI6IFwiXzJtUWlTXCIsXG5cdFwidG9vbHRpcFRleHRTdHlsZVwiOiBcIl8xQ2RvT1wiLFxuXHRcInBhY2thZ2UtaW5mby1pY29uXCI6IFwiXzFyYXppXCIsXG5cdFwicGFja2FnZS1pbmZvLWljb24tY3VzdG9tXCI6IFwiXzNZOWVHXCIsXG5cdFwidG9vbHRpcGRhdGEtdXBcIjogXCJfMkkweUNcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgUGFja2FnZUltZ1RpdGxlIGZyb20gJ2FtcC9tb2R1bGVzL3BhY2thZ2VDYXJkL1BhY2thZ2VJbWdUaXRsZSc7XG5pbXBvcnQgUGFja2FnZVByaWNlRXhwZXJpbWVudCBmcm9tICdhbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlUHJpY2VFeHBlcmltZW50JztcbmltcG9ydCBQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCBmcm9tICdhbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCc7XG5pbXBvcnQgUGFja2FnZUNpdGllcyBmcm9tICdhbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlQ2l0aWVzJztcbmltcG9ydCBQYWNrYWdlSW5jRXhjIGZyb20gJ2FtcC9tb2R1bGVzL3BhY2thZ2VDYXJkL1BhY2thZ2VJbmNFeGMnO1xuaW1wb3J0IEFjdGlvbiBmcm9tICdhbXAvaGVscGVycy9BY3Rpb24nO1xuaW1wb3J0IHsgcGFyc2VQcmljZSB9IGZyb20gJ2FtcC91dGlscy9wYXJzZXJzJztcblxuaW1wb3J0ICcuL1BhY2thZ2VDaXRpZXMuc2Nzcyc7XG5pbXBvcnQgJy4vTGlzdGluZy5zY3NzJztcblxuY29uc3QgR0NhcmRUYWdzU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgaGVpZ2h0OiAnMjRweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmYWMyMmUnXG59KTtcblxuY2xhc3MgUGFja2FnZUNhcmRFeHBlcmltZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBob3RlbElkOiBwcm9wcy5jYXJkLmlkIH07XG4gIH1cblxuICByZW5kZXJIb3RlbFNlbGVjdGlvbnMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IGNhcmQsIGhlYWRpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBob3RlbElkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgaG90ZWxzSWRzID0gT2JqZWN0LmtleXMoY2FyZC5mYW1pbHlfcGFja2FnZXMgfHwge30pO1xuICAgIGhvdGVsc0lkcy5tYXAoKGlkKSA9PiB7XG4gICAgICBjYXJkLmZhbWlseV9wYWNrYWdlc1tpZF1bM10gPSBwYXJzZVByaWNlKHsgcHJpY2U6IGNhcmQuZmFtaWx5X3BhY2thZ2VzW2lkXVsxXSB9KTtcbiAgICAgIGNhcmQuZmFtaWx5X3BhY2thZ2VzW2lkXVs0XSA9IHBhcnNlUHJpY2UoeyBwcmljZTogY2FyZC5mYW1pbHlfcGFja2FnZXNbaWRdWzJdIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJpY2VzID0ge1xuICAgICAgcHJpY2UgOiBwYXJzZVByaWNlKHtwcmljZTogY2FyZC5mYW1pbHlfcGFja2FnZXNbaG90ZWxJZF1bMV19KSxcbiAgICAgIGRpc2NvdW50IDogcGFyc2VQcmljZSh7cHJpY2U6IGNhcmQuZmFtaWx5X3BhY2thZ2VzW2hvdGVsSWRdWzJdfSlcbiAgICB9O1xuXG4gICAgaWYgKGhvdGVsc0lkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGhvdGVsQ2hlY2tib3hlcyA9IGhvdGVsc0lkcy5tYXAoaG90ZWxJZCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2hvdGVsSWR9IGNsYXNzTmFtZT1cImlibG9jayBob3RlbFN0YXJJdGVtIG1yOFwiPlxuICAgICAgICAgICAgPGFtcC1zdGF0ZSBpZD17YHNpbWlsYXJQYWNrYWdlcyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogSlNPTi5zdHJpbmdpZnkoY2FyZC5mYW1pbHlfcGFja2FnZXMpXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgIDwvYW1wLXN0YXRlPlxuICAgICAgICAgICAgPGFtcC1zdGF0ZSBpZD17YGRlZmF1bHRQcmljZXMke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHByaWNlcylcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgPC9hbXAtc3RhdGU+XG4gICAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyBjaGFuZ2U6IFtgQU1QLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkSG90ZWwke2luZGV4fSA6IGV2ZW50LnZhbHVlLFxuICAgICAgICAgICAgaG90ZWwke2luZGV4fSA6IGV2ZW50LnZhbHVlLFxuICAgICAgICAgICAgaW5kZXg6aW5kZXh9KWBdIH19PlxuICAgICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICBuYW1lPXtgJHtoZWFkaW5nfV9ob3RlbF9zdGFyX2lucHV0XyR7Y2FyZC5pZH1gfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vbiByYWRpby1jb21tb24tcm91bmRcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aG90ZWxJZC50b1N0cmluZygpID09PSB0aGlzLnN0YXRlLmhvdGVsSWQudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtjYXJkLmlkfV8ke2hvdGVsSWR9YH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtob3RlbElkfVxuICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgICAgICAgIDwvQWN0aW9uPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIlwiIGh0bWxGb3I9e2BpbnB1dF8ke2NhcmQuaWR9XyR7aG90ZWxJZH1gfT5cbiAgICAgICAgICAgICAge2NhcmQuZmFtaWx5X3BhY2thZ2VzW2hvdGVsSWRdWzBdfSBTdGFyXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHJvdyByb3ctIHN0YXItcmF0aW5ncy1zZWxlY3Rpb24gbW9yZS10aGFuLXRocmVlLXN0YXJzYH0+e2hvdGVsQ2hlY2tib3hlc308L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcmQsIGlzUGFja2FnZVJldmFtcCwgY29tcGFyaW5nUGFja2FnZXMsIGFkZFRvQ29tcGFyaW5nUGFja2FnZXMsIHJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlcywgZm9ybVRvTG9jYXRpb24sIGluZGV4XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBhZGRpdGlvbmFsSW5mb1RleHQgPSBgVHJhdmVsZXIgaGFzIGV4cHJlc3NlZCBpbnRlcmVzdCBpbiAke2NhcmQuZGF5c30gRGF5cyAsICR7Y2FyZC5uaWdodHN9IG5pZ2h0cyB3aXRoIGNpdGllcyAke2NhcmQuY2l0aWVzfS4gRm9yIG1vcmUgZGV0YWlscywgc2VlIHRoZSA8YSBocmVmPScvcGFja2FnZXMvJHtjYXJkLnNldF91cmx9Jz5saW5rPC9hPmA7XG5cbiAgICAvLyBUT0RPOiBVZ2x5IGNvZGUuIEhhbmRsZSBpdCBkaWZmZXJlbnRseVxuICAgIGxldCB0b0Rlc3RpbmF0aW9uID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgIHRvRGVzdGluYXRpb24gPSBjYXJkLmRlc3RpbmF0aW9uc1swXS5uYW1lO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRvRGVzdGluYXRpb24gPSAnJztcbiAgICB9XG4gICAgY29uc3QgeyBob3RlbElkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZvcm1PbmVUb0xvY2F0aW9uID0gZm9ybVRvTG9jYXRpb24gPyBmb3JtVG9Mb2NhdGlvbiA6IHRvRGVzdGluYXRpb247XG4gICAgY29uc3QgY3RhVGV4dFBhY2thZ2UgPSAnVmlldyBEZXRhaWxzJztcbiAgICBjb25zdCBjdGFUZXh0Rm9ybSA9ICdDdXN0b21pemUnO1xuICAgIGNvbnN0IHsgaXNFeHBlcmltZW50IH0gPSBjYXJkO1xuICAgIGxldCBoaWRlRGlzY291bnQgPSBmYWxzZSwgcmVwbGFjZVByaWNlID0gZmFsc2UsIGZhbWlseV9wYWNrYWdlcyA9IGNhcmQuZmFtaWx5X3BhY2thZ2VzO1xuICAgIGlmIChpc0V4cGVyaW1lbnQpIHtcbiAgICAgIGhpZGVEaXNjb3VudCA9IGlzRXhwZXJpbWVudC5oaWRlRGlzY291bnQ7XG4gICAgICByZXBsYWNlUHJpY2UgPSBpc0V4cGVyaW1lbnQucmVwbGFjZVByaWNlO1xuICAgICAgZmFtaWx5X3BhY2thZ2VzID0gcmVwbGFjZVByaWNlID8gY2FyZC5mYW1pbHlfcGFja2FnZXNfbWFwIDogY2FyZC5mYW1pbHlfcGFja2FnZXM7XG4gICAgfVxuICAgIGNvbnN0IGhvdGVsV2l0aFByaWNlcyA9IGZhbWlseV9wYWNrYWdlcyAmJiBmYW1pbHlfcGFja2FnZXNbaG90ZWxJZF0gPyBmYW1pbHlfcGFja2FnZXNbaG90ZWxJZF0gOiBbXTtcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtYjggbXQ4IG1yOCByZWxhdGl2ZSBwYWNrYWdlLWNhcmRcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPXtgL3BhY2thZ2VzLyR7Y2FyZC5zZXRfdXJsfT9pZD0ke2hvdGVsSWR9YH1cbiAgICAgICAgY2xhc3NOYW1lPVwic2Zjd1wiPlxuICAgICAgICA8UGFja2FnZUltZ1RpdGxlIG5hbWU9e2NhcmQucGxwX2hlYWRpbmcgfHwgY2FyZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHQ9e2NhcmQuc2V0X3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17Y2FyZC5pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VraXRVcmw9e2NhcmQuaW1hZ2VraXRfdXJsfSAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgcm93LSBzYmN3ICR7aXNQYWNrYWdlUmV2YW1wID8gJ3B0OCBwYjgnIDogJ3A4J31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzUGFja2FnZVJldmFtcCA/ICcnIDogJ3BsOCBwcjgnfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHBsMCBwcjAgZjEwXCI+XG4gICAgICAgICAgICAgIDxQYWNrYWdlQ2l0aWVzIGNpdGllcz17Y2FyZC5jaXR5X2xpc3Rfd2l0aF9kYXlzIHx8IHt9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpYmxvY2sgcGwwXCI+XG4gICAgICAgICAgICAgIDxQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudFxuICAgICAgICAgICAgICAgIGRheXM9e2NhcmQuZGF5c31cbiAgICAgICAgICAgICAgICBuaWdodHM9e2NhcmQubmlnaHRzfVxuICAgICAgICAgICAgICAgIGlzUGFja2FnZVJldmFtcD17aXNQYWNrYWdlUmV2YW1wfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhvdGVsU2VsZWN0aW9ucyhpbmRleCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwbDAgcHI4XCI+XG4gICAgICAgICAgICAgIDxQYWNrYWdlUHJpY2VFeHBlcmltZW50XG4gICAgICAgICAgICAgICAgcHJpY2U9e2hvdGVsV2l0aFByaWNlcy5sZW5ndGggPyBob3RlbFdpdGhQcmljZXNbMl0gOiBjYXJkLnByaWNlX3RvdGFsfVxuICAgICAgICAgICAgICAgIHByaWNlVW5pdD17Y2FyZC5taW5pX2Rlc2N9XG4gICAgICAgICAgICAgICAgY3VycmVuY3k9e2NhcmQuY3VycmVuY3l9XG4gICAgICAgICAgICAgICAgZGlzY291bnQ9e1xuICAgICAgICAgICAgICAgICAgaG90ZWxXaXRoUHJpY2VzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA/IGhvdGVsV2l0aFByaWNlc1syXSAtIGhvdGVsV2l0aFByaWNlc1sxXVxuICAgICAgICAgICAgICAgICAgICA6IGNhcmQucHJpY2VfdG90YWwgLSBjYXJkLmRpc2NvdW50ZWRfcHJpY2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvbW9UYWc9e2NhcmQucHJvbW9fdGFnfVxuICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U9e2NhcmQucHJpY2VfdG90YWx9XG4gICAgICAgICAgICAgICAgdG90YWxEaXNjb3VudD17Y2FyZC5wcmljZV90b3RhbCAtIGNhcmQuZGlzY291bnRlZF9wcmljZX1cbiAgICAgICAgICAgICAgICBoaWRlRGlzY291bnQ9e2hpZGVEaXNjb3VudH1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgZmFtaWx5UGFja2FnZXM9e2ZhbWlseV9wYWNrYWdlc31cbiAgICAgICAgICAgICAgICBob3RlbElkPXtob3RlbElkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaW5jbHVzaW9uLWhlaWdodC1ib3ggbXQ4XCI+XG4gICAgICAgICAgICA8UGFja2FnZUluY0V4YyBpbmNsdXNpb25zPXtjYXJkLmluY2x1c2lvbnN9IGlkPXtgY2FyZF8ke2NhcmQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdGVsSW5mbz17Y2FyZC5mYW1pbHlfcGFja2FnZXMgJiYgY2FyZC5mYW1pbHlfcGFja2FnZXNbYCR7aG90ZWxJZH1gXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGFja2FnZVJldmFtcD17aXNQYWNrYWdlUmV2YW1wfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAhaXNQYWNrYWdlUmV2YW1wID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQ4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcGwwIHByNFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17YC9wYWNrYWdlcy8ke2NhcmQuc2V0X3VybH0/aWQ9JHtob3RlbElkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpIHdmdWxsIHJpcHBsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlLWRhcmtcIiAvPlxuICAgICAgICAgICAgICAgICAge2N0YVRleHRQYWNrYWdlfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcGw0IHByMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2Z1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmkgd2Z1bGwgY3VzdG9taXplZC12YXJpYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge2N0YVRleHRGb3JtfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5QYWNrYWdlQ2FyZEV4cGVyaW1lbnQucHJvcFR5cGVzID0ge1xuICBjYXJkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbXBhcmluZ1BhY2thZ2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgYWRkVG9Db21wYXJpbmdQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvcm1Ub0xvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcm9tb1RhZzogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNldEFjdGl2ZUhvdGVsczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNQYWNrYWdlUmV2YW1wOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuUGFja2FnZUNhcmRFeHBlcmltZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybVRvTG9jYXRpb246ICcnLFxuICByZW1vdmVGcm9tQ29tcGFyaW5nUGFja2FnZXM6ICgpID0+IHtcbiAgfSxcbiAgYWRkVG9Db21wYXJpbmdQYWNrYWdlczogKCkgPT4ge1xuICB9LFxuICBwcm9tb1RhZzogMCxcbiAgaGVhZGluZzogJ3BscCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VDYXJkRXhwZXJpbWVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vUGFja2FnZUNpdGllcy5zY3NzJztcblxuY29uc3QgcmVuZGVyUGFja2FnZUNpdGllc0Zyb21BcnJheSA9IChjaXRpZXMsIGlzRGVhbHNDYXJkKSA9PiB7XG4gIGlmICghY2l0aWVzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2UtY2l0aWVzXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFja2FnZS1jaXRpZXMtbGlzdFwiPlxuICAgICAgICB7Y2l0aWVzLm1hcCgoY2l0eSwgaSkgPT4gPGxpIGNsYXNzTmFtZT17aXNEZWFsc0NhcmQgPyAnZjEyJyA6ICcnfSBrZXk9e2l9PntjaXR5fTwvbGk+KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG5cbn07XG5cbmNvbnN0IHJlbmRlclBhY2thZ2VDaXRpZXNGcm9tT2JqZWN0ID0gKGNpdGllc1dpdGhEYXlzLCBpc0RlYWxzQ2FyZCkgPT4ge1xuICBjb25zdCBjaXRpZXMgPSBPYmplY3Qua2V5cyhjaXRpZXNXaXRoRGF5cyk7XG5cbiAgaWYgKCFjaXRpZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZS1jaXRpZXNcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWNrYWdlLWNpdGllcy1saXN0XCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdzcgZjEyIGxpc3QtaGVhZGluZyBoaWRlXCI+Q2l0aWVzOjwvbGk+XG4gICAgICAgIHtcbiAgICAgICAgICBjaXRpZXMubWFwKChjaXR5LCBpKSA9PiA8bGkgY2xhc3NOYW1lPXtpc0RlYWxzQ2FyZCA/ICdmMTInIDogJyd9IGtleT17aX0+XG4gICAgICAgICAgICB7Y2l0eX0ge2NpdGllc1dpdGhEYXlzW2NpdHldID8gYCAoJHtjaXRpZXNXaXRoRGF5c1tjaXR5XX1EKWAgOiBudWxsfVxuICAgICAgICAgIDwvbGk+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUGFja2FnZUNpdGllcyA9ICh7IGNpdGllcywgaXNEZWFsc0NhcmQgfSkgPT4ge1xuICBpZiAoY2l0aWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gcmVuZGVyUGFja2FnZUNpdGllc0Zyb21BcnJheShjaXRpZXMsIGlzRGVhbHNDYXJkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVuZGVyUGFja2FnZUNpdGllc0Zyb21PYmplY3QoY2l0aWVzLCBpc0RlYWxzQ2FyZCk7XG4gIH1cbn07XG5cblBhY2thZ2VDaXRpZXMucHJvcFR5cGVzID0ge1xuICBjaXRpZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG4gIGlzRGVhbHNDYXJkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZUNpdGllcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzRGVhbHNDYXJkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUNpdGllcztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhY2thZ2UtY2l0aWVzXCI6IFwiXzJqODk0XCIsXG5cdFwicGFja2FnZS1jaXRpZXMtbGlzdFwiOiBcIl9uVEwwRlwiLFxuXHRcImYxMlwiOiBcIl8zeFA1N1wiLFxuXHRcImFkZENvbXBhcmVEaXZcIjogXCJfMmxkVUJcIixcblx0XCJmaXhlZC1tZW51LWJ1dHRvblwiOiBcIl8xTHl0WlwiXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRpc2NvdW50LXJpYmJvblwiOiBcIl8xd2dYMVwiLFxuXHRcInBhY2thZ2UtaW5mby1pY29uXCI6IFwiXzE0dV9TXCIsXG5cdFwicGFja2FnZS1pbmZvLWljb24tY3VzdG9tLWxlZnRcIjogXCJfMlRPNWpcIixcblx0XCJ0b29sdGlwZGF0YS11cFwiOiBcIl8xRXR5YVwiLFxuXHRcInRvb2x0aXAtdXB3YXJkc1wiOiBcIl8xWTZVVFwiLFxuXHRcImlucHV0LTI0XCI6IFwiX05tU3VtXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9QYWNrYWdlRGF5c0Rpc2NvdW50LnNjc3MnO1xuXG5jb25zdCBQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCA9ICh7IGRheXMsIG5pZ2h0cywgaXNQYWNrYWdlUmV2YW1wfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgPHAgY2xhc3NOYW1lPXtgYXRfcGFja2FnZURheXNDb3VudCBmdzcgdGV4dC1sZWZ0ICR7aXNQYWNrYWdlUmV2YW1wID8gJ2YxMCBhdF9wYWNrYWdlJyA6ICdmMTInfWB9PntkYXlzfSBEYXlzICYge25pZ2h0c30gTmlnaHRzIDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5QYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudC5wcm9wVHlwZXMgPSB7XG4gIGRheXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmlnaHRzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGlzUGFja2FnZVJldmFtcDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VEYXlzRGlzY291bnRFeHBlcmltZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9QYWNrYWdlSW1nVGl0bGUuc2Nzcyc7XG5cbmNvbnN0IFBhY2thZ2VJbWdUaXRsZSA9ICh7IG5hbWUsIGltYWdlVXJsLCBpbWFnZWtpdFVybCwgYWx0VGV4dCwgaXNMYXJnZUltZyB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWNrYWdlLWltZyByZWxhdGl2ZVwiPlxuICAgICAgPGFtcC1pbWdcbiAgICAgICAgc3JjPXtpbWFnZWtpdFVybH1cbiAgICAgICAgd2lkdGg9XCIzODVcIlxuICAgICAgICBoZWlnaHQ9XCIxOTNcIlxuICAgICAgICBhbHQ9e2FsdFRleHR9XG4gICAgICAgIGl0ZW1Qcm9wPVwiaW1hZ2VcIlxuICAgICAgICBpdGVtVHlwZT1cImh0dHBzOi8vc2NoZW1hLm9yZy9pbWFnZVwiXG4gICAgICA+PC9hbXAtaW1nPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHoxMCBiMTAgbDAgcjAgZnc5IGYxNCBwbDE1IHByMTUgc2Zjd1wiPnsgbmFtZSB9PC9oMz5cbiAgICA8L2Rpdj5cbik7XG5cblBhY2thZ2VJbWdUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2VraXRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0VGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpc0xhcmdlSW1nOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZUltZ1RpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMYXJnZUltZzogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VJbWdUaXRsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhY2thZ2UtaW1nXCI6IFwiX0ZkNG9mXCJcbn07IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnYW1wL3V0aWxzL3BhcnNlcnMnO1xuaW1wb3J0IHsgSW5jbHVzaW9uTm90aWZpY2F0aW9uIH0gZnJvbSAnY29uc3RhbnRzL1BhY2thZ2VzL0luY2x1c2lvbk5vdGlmaWNhdGlvbic7XG5pbXBvcnQgWWVsbG93RG90IGZyb20gJ2FtcC9tb2R1bGVzL2NvbW1vbi9ZZWxsb3dEb3QnO1xuaW1wb3J0ICdhbXAvc2NyZWVucy9wZHAvcHJpY2VNb2R1bGUvUGFja2FnZUluY0V4Yy5zY3NzJztcbmltcG9ydCBJY29uc01hcHBpbmcgZnJvbSAnYW1wL2hlbHBlcnMvSWNvbi9JY29uTWFwcGluZ3MnO1xuXG5jb25zdCBnZXRJY29uVGV4dCA9IChpbmNsdXNpb24sIGhvdGVsSW5mbykgPT4ge1xuICBpZiAoaW5jbHVzaW9uLmtleSA9PT0gJ2hvdGVsJyAmJiBob3RlbEluZm8pIHtcbiAgICByZXR1cm4gYFVwdG8gJHtob3RlbEluZm9bMF19IFN0YXJzYDtcbiAgfVxuICByZXR1cm4gaW5jbHVzaW9uLnRleHQ7XG59O1xuXG5jb25zdCBQYWNrYWdlSW5jRXhjID0gKHsgaW5jbHVzaW9ucywgaWQsIG5vU2Nyb2xsLCBob3RlbEluZm8sIGlzUGFja2FnZVJldmFtcCB9KSA9PiB7XG4gIGNvbnN0IGluY2x1c2lvbnNBdmFsID0gaXNQYWNrYWdlUmV2YW1wID8gaW5jbHVzaW9ucy5maWx0ZXIoaW5jbHVzaW9uID0+XG4gICAgaW5jbHVzaW9uLmF2YWlsYWJsZSkuc2xpY2UoMCw0KSA6IGluY2x1c2lvbnM7XG5cbiAgY29uc3QgaW5jbHVzaW9uTGlzdCA9IGluY2x1c2lvbnNBdmFsLm1hcChcbiAgICAoaW5jbHVzaW9uLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaWNvbk5hbWUgPSBJY29uc01hcHBpbmdbY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGluY2x1c2lvbi5rZXkucmVwbGFjZSgvW1xccy1fXS9nLCAnJykpXSB8fCAnRGVmYXVsdEljb24nO1xuICAgICAgY29uc3QgZGlzYWJsZWRFbGVtZW50Q2xhc3MgPSBpbmNsdXNpb24uYXZhaWxhYmxlID8gJycgOiAnbm90LWluY2x1ZGVkJztcbiAgICAgIGNvbnN0IGRpc2FibGVkSWNvbkNsYXNzID0gaW5jbHVzaW9uLmF2YWlsYWJsZSA/ICcnIDogJ2dyZXlzY2FsZSc7XG4gICAgICBjb25zdCBpbmNsdXNpb25UZXh0SGlkZGVuID0gaW5jbHVzaW9uLnRleHQgPyAnJyA6ICdoaWRlJztcbiAgICAgIGNvbnN0IEluY2x1c2lvbk5vdGlmaWNhdGlvblByZXNlbnQgPSAoaW5jbHVzaW9uLmF2YWlsYWJsZSAmJiAoSW5jbHVzaW9uTm90aWZpY2F0aW9uLmluZGV4T2YoaW5jbHVzaW9uLmtleSkgPiAtMSkpID8gJ3JlbGF0aXZlJyA6ICcnO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGluY2wtZXhjbC1ib3ggJHtpbmNsdXNpb25UZXh0SGlkZGVufSAke2Rpc2FibGVkRWxlbWVudENsYXNzfSAke0luY2x1c2lvbk5vdGlmaWNhdGlvblByZXNlbnR9YH0ga2V5PXtgJHtpZH1fJHtpbmNsdXNpb24ua2V5fV8ke2luZGV4fWB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIChpbmNsdXNpb24uYXZhaWxhYmxlICYmIChJbmNsdXNpb25Ob3RpZmljYXRpb24uaW5kZXhPZihpbmNsdXNpb24ua2V5KSA+IC0xKSkgP1xuICAgICAgICAgICAgPFllbGxvd0RvdCBpZD1cImZsaWdodE1lc3NhZ2VcIiBkb3RCb3hTdHlsZT17eyB3aWR0aDogJzEwcHgnLCBoZWlnaHQ6ICcxMHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzZweCcsIHJpZ2h0OiAnM3B4JyB9fSBkb3RTbWFsbEJveFN0eWxlPXt7IHdpZHRoOiAnNXB4JywgaGVpZ2h0OiAnNXB4JyB9fSBzcGlubmVyU3R5bGU9e3sgd2lkdGg6ICcxMHB4JywgaGVpZ2h0OiAnMTBweCcsIHpJbmRleDogJzEnIH19ICBob3ZlckRhdGE9XCJGbGlnaHQgcHJpY2VzIGFyZSBkeW5hbWljIGFuZCBtYXkgY2hhbmdlIGF0IHRoZSB0aW1lIG9mIGJvb2tpbmdcIiAvPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluY2wtZXhjbC1pbWdcIiBzdHlsZT17e2JhY2tncm91bmQ6IGB1cmwoJ2h0dHBzOi8vanMudHJhdmVsdHJpYW5nbGUuY29tL3B1YmxpYy1wcm9kdWN0L2FtcC1pY29ucy12MC5zdmcjJHtpY29uTmFtZX0tdXNhZ2UnKWB9fT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEwXCI+e2dldEljb25UZXh0KGluY2x1c2lvbiwgaG90ZWxJbmZvKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Byb3cgcm93LSBpbmNsLWV4Y2wtY29uICR7bm9TY3JvbGwgPyAnaW5jLW5vLXNjcm9sbCcgOiAnJ30gYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGluY2wtZXhjbC1jb24taW5uZXJcIj5cbiAgICAgICAge2luY2x1c2lvbkxpc3R9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhY2thZ2VJbmNFeGMucHJvcFR5cGVzID0ge1xuICBpbmNsdXNpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaG90ZWxJbmZvOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5vU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNQYWNrYWdlUmV2YW1wOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZUluY0V4Yy5kZWZhdWx0UHJvcHMgPSB7XG4gIG5vU2Nyb2xsOiBmYWxzZSxcbiAgaWQ6ICdkZWZhdWx0XzEnLFxuICBpc1BhY2thZ2VSZXZhbXA6IGZhbHNlXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VJbmNFeGM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgcGFyc2VQcmljZSB9IGZyb20gJ2FtcC91dGlscy9wYXJzZXJzJztcbmltcG9ydCBQYWNrYWdlZGF5c0Rpc2NvdW50IGZyb20gJ2FtcC9zY3JlZW5zL3BkcC9wcmljZU1vZHVsZS9QYWNrYWdlRGF5c0Rpc2NvdW50JztcblxuY2xhc3MgUGFja2FnZVByaWNlRXhwZXJpbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByaWNlVW5pdCwgcHJpY2UsIGRpc2NvdW50LCBjdXJyZW5jeSwgcHJpY2VGcm9tLCBwcmljZVRvLCBwcm9tb1RhZyxcbiAgICAgIGhpZGVEaXNjb3VudCxpbmRleH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTAgbXQ4IHBmYzQgcGI1IGZ3NCBzdGFydGluZy1mcm9tIGJsb2NrXCI+U3RhcnRpbmcgZnJvbTo8L3NwYW4+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBhY2thZ2UtcHJpY2Ugc2ZjMyBmdzcgZjE4IHBiMFwiID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtYW1wLWJpbmQtdGV4dD17YHNlbGVjdGVkSG90ZWwke2luZGV4fSA/IHNpbWlsYXJQYWNrYWdlcyR7aW5kZXh9W2hvdGVsJHtpbmRleH1dWzNdIDpcbiAgICAgICAgICAgICAgZGVmYXVsdFByaWNlcyR7aW5kZXh9WydwcmljZSddYH0+XG4gICAgICAgICAgICAgICAge3BhcnNlUHJpY2UoeyBwcmljZTogcHJpY2VGcm9tIHx8IChwcmljZSAtIGRpc2NvdW50KSwgY3VycmVuY3kgfSl9Ly1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIWhpZGVEaXNjb3VudCA/XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTIgZnc0IG1sOCBwZmMzIHRkbCBvcmlnaW5hbC1wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFtcC1iaW5kLXRleHQ9e2BzZWxlY3RlZEhvdGVsJHtpbmRleH0gPyBzaW1pbGFyUGFja2FnZXMke2luZGV4fVtob3RlbCR7aW5kZXh9XVs0XVxuICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0UHJpY2VzJHtpbmRleH1bJ2Rpc2NvdW50J11gfT5cbiAgICAgICAgICAgICAgICAgICAge3BhcnNlUHJpY2UoeyBwcmljZTogcHJpY2VUbyB8fCBwcmljZSwgY3VycmVuY3kgfSl9Ly1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEwIG10NFwiPntwcmljZVVuaXR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQYWNrYWdlZGF5c0Rpc2NvdW50IHByaWNlPXtwcmljZX0gZGlzY291bnQ9e2Rpc2NvdW50fSBoaWRlRGlzY291bnQ9e2hpZGVEaXNjb3VudH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFja2FnZVByaWNlRXhwZXJpbWVudC5wcm9wVHlwZXMgPSB7XG4gIHByaWNlVW5pdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc3BsYXlSYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHByaWNlRnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpY2VUbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZURpc2NvdW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgdG90YWxQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0b3RhbERpc2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHByb21vVGFnOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5QYWNrYWdlUHJpY2VFeHBlcmltZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJpY2VVbml0OiAncGVyIHBlcnNvbicsXG4gIGN1cnJlbmN5OiAnUnVwZWUnLFxuICBkaXNwbGF5UmFuZ2U6IGZhbHNlLFxuICBwcmljZUZyb206IG51bGwsXG4gIHByaWNlVG86IG51bGwsXG4gIGhpZGVEaXNjb3VudDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VQcmljZUV4cGVyaW1lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL1NpbWlsYXJQYWNrYWdlcy5zY3NzJztcbmltcG9ydCBQYWNrYWdlQ2FyZEV4cGVyaW1lbnQgZnJvbSAnYW1wL21vZHVsZXMvcGFja2FnZUNhcmQvUGFja2FnZUNhcmRFeHBlcmltZW50JztcblxuY2xhc3MgU2ltaWxhclBhY2thZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsb2FkZWRTaW1pbGFyUGFja2FnZXM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgbG9hZGluZ1NpbWlsYXJQYWNrYWdlczogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZGluZ0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYWNrYWdlSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2ltaWxhclBhY2thZ2VzOiBQcm9wVHlwZXMuYXJyYXlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBhY2thZ2VJZDogMSxcbiAgICBsb2FkaW5nRXJyb3I6IGZhbHNlLFxuICAgIHNpbWlsYXJQYWNrYWdlczogW10sXG4gICAgbG9hZGluZ1NpbWlsYXJQYWNrYWdlczogZmFsc2VcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQ4IHBiMCBzYmM1XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcDE1IHBsMTUgc2ltaWxhci1wYWNrYWdlLWdhcCBwYjggc2Jjd1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLWNvbW1vbi1jZW50ZXIgbTBcIj5TaW1pbGFyIFBhY2thZ2VzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHJlbGF0aXZlIHNpbWlsYXItcGFja2FnZS1ib3hcIj5cbiAgICAgICAgICAgIDxhbXAtY2Fyb3VzZWwgd2lkdGg9XCI0NTBcIiBoZWlnaHQ9XCI0NzBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgdHlwZT1cInNsaWRlc1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaW1pbGFyUGFja2FnZXMubWFwKChwYWNrYWdlQ2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8UGFja2FnZUNhcmRFeHBlcmltZW50IGhlYWRpbmc9eydzaW1pbGFyIHBhY2thZ2VzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQ9e3BhY2thZ2VDYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGFja2FnZVJldmFtcD17dHJ1ZX0gLz47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9hbXAtY2Fyb3VzZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1pbGFyUGFja2FnZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaW1pbGFyLXBhY2thZ2UtZ2FwXCI6IFwiXzNpQzhiXCIsXG5cdFwicGFja2FnZS1pbWdcIjogXCJfTjhnMUdcIixcblx0XCJhdF9wYWNrYWdlRGF5c0NvdW50XCI6IFwiXzNVQ3p3XCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IFRyYXZlbGVyUmV2aWV3Q2FyZCBmcm9tICcuL1RyYXZlbGVyUmV2aWV3TmV3Q2FyZCc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5cbmNsYXNzIFRyYXZlbGVyUmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVzdGltb25pYWxzOiB0aGlzLnByb3BzLnRlc3RpbW9uaWFscyxcbiAgICAgIGNvdW50ZXI6IDVcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2luYXRpb24sXG4gICAgICBkZXN0aW5hdGlvblxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGVzdGltb25pYWxzLCBjb3VudGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpcnN0UmV2aWV3cyA9IHRlc3RpbW9uaWFscyAmJiB0ZXN0aW1vbmlhbHMubGVuZ3RoID4gNSA/XG4gICAgICB0ZXN0aW1vbmlhbHMuc2xpY2UoMCwgNSkgOiB0ZXN0aW1vbmlhbHM7XG4gICAgY29uc3Qgc2Vjb25kUmV2aWV3cyA9IGZpcnN0UmV2aWV3cy5sZW5ndGggPyB0ZXN0aW1vbmlhbHMuc2xpY2UoNiwgdGVzdGltb25pYWxzLmxlbmd0aCkgOiBbXTtcbiAgICBjb25zdCByZW5kZXJGaXJzdFRlc3RpbW9uaWFscyA9IGZpcnN0UmV2aWV3cy5tYXAoKHRlc3RpbW9uaWFsLCBpKSA9PiB7XG4gICAgICBjb25zdCBjaGVja0xvYWRNb3JlVGVzdGltb25pYWwgPSAoaSA+PSBjb3VudGVyKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUcmF2ZWxlclJldmlld0NhcmRcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgdGVzdGltb25pYWw9e3Rlc3RpbW9uaWFsfVxuICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XG4gICAgICAgICAgaGlkZVRlc3RpbW9uaWFsPXtjb3VudGVyIDwgMTUgJiYgcGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnRvdGFsX2NvdW50ID49IDE1ID8gY2hlY2tMb2FkTW9yZVRlc3RpbW9uaWFsXG4gICAgICAgICAgICA6IGZhbHNlfVxuICAgICAgICAvPik7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJTZWNvbmRUZXN0aW1vbmlhbHMgPSBzZWNvbmRSZXZpZXdzLm1hcCgodGVzdGltb25pYWwsIGkpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrTG9hZE1vcmVUZXN0aW1vbmlhbCA9IChpID49IGNvdW50ZXIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCIgZGF0YS1hbXAtYmluZC1jbGFzcz1cInNob3dUZXN0aW1vbmlhbHMgPyAnJzogJ2hpZGUnXCI+XG4gICAgICAgICAgPFRyYXZlbGVyUmV2aWV3Q2FyZFxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICB0ZXN0aW1vbmlhbD17dGVzdGltb25pYWx9XG4gICAgICAgICAgICBwYWdpbmF0aW9uPXtwYWdpbmF0aW9ufVxuICAgICAgICAgICAgaGlkZVRlc3RpbW9uaWFsPXtjb3VudGVyIDwgMTUgJiYgcGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnRvdGFsX2NvdW50ID49IDE1ID8gY2hlY2tMb2FkTW9yZVRlc3RpbW9uaWFsXG4gICAgICAgICAgICAgIDogZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuXG5cbiAgICBpZiAoIXRlc3RpbW9uaWFscy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHRlc3RpbW9uaWFsc0xpbmsgPSBkZXN0aW5hdGlvbiA/XG4gICAgICBgL3Rlc3RpbW9uaWFscy8ke2Rlc3RpbmF0aW9ufWAgOiAnL3Rlc3RpbW9uaWFscyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItb3ZlcmZsb3ctYnV0dG9ucyBzYmN3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyZW5kZXJGaXJzdFRlc3RpbW9uaWFscy5sZW5ndGggPyAndHJhdmVsZXItcmV2aWV3JyA6ICdoaWRlJ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0MTUgcGwxNSBwcjE1Jz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2YyMCBwZmMzIGZ3YiBwYjgnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnRvdGFsX2NvdW50ID8gcGFnaW5hdGlvbi50b3RhbF9jb3VudCA6IG51bGx9IEF1dGhlbnRpYyBUcmF2ZWxlciBSZXZpZXdzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTRwIHBmYzQgcGI4Jz5SZWFkIG9uIHRvIGZpbmQgb3V0IHdoeSBvdXIgY3VzdG9tZXJzIGxvdmUgdXMhPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlckZpcnN0VGVzdGltb25pYWxzXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlclNlY29uZFRlc3RpbW9uaWFsc1xuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRtb3JlLWJ0biBmbGV4IGp1c3RpZnlDZW50ZXIgcHQxNSBwYjE1XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi50b3RhbF9jb3VudCAmJiBwYWdpbmF0aW9uLnRvdGFsX2NvdW50ICE9PSB0ZXN0aW1vbmlhbHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyB0YXA6IFsnQU1QLnNldFN0YXRlKHtzaG93VGVzdGltb25pYWxzIDogIXNob3dUZXN0aW1vbmlhbHN9KSddIH19PlxuICAgICAgICAgICAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImYxNCBzZmMxIGZ3NyBsaW5rIGZsZXggYWxpZ25DZW50ZXIgYXRfcmVhZG1vcmVidG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW1wLWJpbmQtY2xhc3M9XCJzaG93VGVzdGltb25pYWxzID8gJ2hpZGUnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZjE0IHNmYzEgZnc3IGxpbmsgZmxleCBhbGlnbkNlbnRlciBhdF9yZWFkbW9yZWJ0bidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPil9XG4gICAgICAgICAgICAgICAgPC9BY3Rpb24+IDpcblxuICAgICAgICAgICAgICAgIDxMaW5rIHRhcmdldD17J19ibGFuayd9IHRvPXt0ZXN0aW1vbmlhbHNMaW5rfSBjbGFzc05hbWU9XCJoaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFtcC1iaW5kLWNsYXNzPVwic2hvd1Rlc3RpbW9uaWFscyA/ICdzaG93JzonaGlkZSdcIj5cbiAgICAgICAgICAgICAgICAgIFZpZXcgQWxsIFJldmlld3NcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8TGluayB0YXJnZXQ9eydfYmxhbmsnfSB0bz17dGVzdGltb25pYWxzTGlua30gY2xhc3NOYW1lPVwiaGlkZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWFtcC1iaW5kLWNsYXNzPVwic2hvd1Rlc3RpbW9uaWFscyA/ICdzaG93JzonaGlkZSdcIj5cbiAgICAgICAgICAgICAgVmlldyBBbGwgUmV2aWV3c1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVHJhdmVsZXJSZXZpZXcucHJvcFR5cGVzID0ge1xuICB0ZXN0aW1vbmlhbHM6IFByb3BUeXBlcy5hcnJheSxcbiAgcGFnaW5hdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFja2FnZUlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVzdGluYXRpb246IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRyYXZlbGVyUmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGVzdGltb25pYWxzOiBbXSxcbiAgdW5pcXVlS2V5OiAndHJhdmVsZXItcmV2aWV3JyxcbiAgaXNTZWFzb25hbENhdGVnb3J5OiBmYWxzZSxcbiAgc2hvd1ZpZXdBbGw6IHRydWUsXG4gIGRhdGE6IHtcbiAgICB0aXRsZTogJ1RyYXZlbGVyIFJldmlld3MnLFxuICAgIGhlYWRpbmc6ICdSZWFkIG9uIHRvIGZpbmQgb3V0IHdoeSBvdXIgY3VzdG9tZXJzIGxvdmUgdXMhJ1xuICB9LFxuICBwYWNrYWdlSWQ6IDAsXG4gIGxvY2F0aW9uOiB7fSxcbiAgZGVzdGluYXRpb246ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlclJldmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBBY3Rpb24gZnJvbSAnYW1wL2hlbHBlcnMvQWN0aW9uJztcbmltcG9ydCBBZ2VudFJhdGluZyBmcm9tICdhbXAvbW9kdWxlcy9jb21tb24vQWdlbnRSYXRpbmcnO1xuaW1wb3J0IHtcbiAgZ2V0VHJhdmVsZXJSZXZpZXdUcmF2Q291bnQsXG4gIGdldFRyYXZlbGVyUmV2aWV3RGF0ZSxcbiAgZ2V0VHJhdmVsZXJSZXZpZXdEdXJhdGlvbixcbiAgZ2V0VHJhdmVsZXJSZXZpZXdDaXRpZXNcbn0gZnJvbSAnYW1wL2hlbHBlcnMvdXRpbHMnO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IFRyYXZlbGVyUmV2aWV3TmV3Q2FyZCA9ICh7IHRlc3RpbW9uaWFsLCBoaWRlVGVzdGltb25pYWwsIGluZGV4IH0pID0+IHtcbiAgY29uc3QgcmV2aWV3Qm9keSA9IHRlc3RpbW9uaWFsLmJvZHkgfHwgdGVzdGltb25pYWwucmV2aWV3X2JvZHk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2luZGV4fSA+IHNob3dDb3VudGVyID8gYmIgcGIxNSAgcHQxNSBwbDE1IHByMTUgJHtoaWRlVGVzdGltb25pYWwgPyAnaGlkZScgOiAnc2hvdyd9YH0+XG4gICAgICA8QWdlbnRSYXRpbmcgYWdlbnRSYXRpbmc9e3Rlc3RpbW9uaWFsLnJhdGluZ30gaWQ9e3Rlc3RpbW9uaWFsLmlkfSAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT0nZjE2IHBmYzMgZndiIHBiMTUgIHB0OCc+e3Rlc3RpbW9uaWFsLnRpdGxlfTwvaDM+XG4gICAgICB7XG4gICAgICAgIHJldmlld0JvZHkgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGI4XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWFkTW9yZUNvbnRlbnQgZjE0cCBwZmMzIGJsb2NrIHJlbGF0aXZlIHJlYWRNb3JlQnlIZWlnaHRcIlxuICAgICAgICAgICAgICAgZGF0YS1hbXAtYmluZC1jbGFzcz17YGV4cGFuZGVkJHtpbmRleH0gPyAncmVhZE1vcmVDb250ZW50IGJsb2NrIHJlbGF0aXZlIHB0OCc6ICdyZWFkTW9yZUNvbnRlbnQgYmxvY2sgcmVsYXRpdmUgcHQ4IHJlYWRNb3JlQnlIZWlnaHQnYH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBkeW5hbWljVGV4dEluaGVyaXQgcGZjMyBmMTRwXCI+XG4gICAgICAgICAgICAgIHtwYXJzZXIucGFyc2UocmV2aWV3Qm9keSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyB0YXA6IFtgQU1QLnNldFN0YXRlKHtleHBhbmRlZCR7aW5kZXh9OiFleHBhbmRlZCR7aW5kZXh9fSlgXSB9fT5cbiAgICAgICAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmlnaHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkTW9yZS1kcm9wZG93biByZWxhdGl2ZSBwcjE1IHJlYWRNb3JlIGN1cnNvclAgZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gbXQ4IGYxMiBmdzlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWFtcC1iaW5kLXRleHQ9e2BleHBhbmRlZCR7aW5kZXh9ID8nUmVhZCBMZXNzJzonIFJlYWQgTW9yZSdgfT5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZXhwYW5kZWQke2luZGV4fSA/ICdyb3RhdGUxODAgZG93bkFycm93IHJlbGF0aXZlIGJsb2NrJyA6XG4gICAgICAgICAgICAncm90YXRlMCBkb3duQXJyb3cgcmVsYXRpdmUgYmxvY2tgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW1wLWJpbmQtY2xhc3M9e2BleHBhbmRlZCR7aW5kZXh9ID8gJ3JvdGF0ZTE4MCBkb3duQXJyb3cgcmVsYXRpdmUgYmxvY2snIDpcbiAgICAgICAgICAgICAgICAgICdyb3RhdGUwIGRvd25BcnJvdyByZWxhdGl2ZSBibG9jaydgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qPEJsdWVEb3duQXJyb3cgLz4qL31cbiAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BY3Rpb24+XG4gICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B0OCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIHBiOCc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTQgZndiIHBmYzMnPlxuICAgICAgICAgICAge3Rlc3RpbW9uaWFsLmF1dGhvci5hdXRob3JfbmFtZSB8fCB0ZXN0aW1vbmlhbC5hdXRob3IuYXV0aG9yTmFtZX1cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZjEyIHBmYzQgZnc0IHBsOCc+ICB7dGVzdGltb25pYWwuYXV0aG9yLnVzZXJfbG9jYXRpb24gfHwgdGVzdGltb25pYWwuYXV0aG9yLnVzZXJMb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRlc3RpbW9uaWFsLnF1b3RlICYmIDxwIGNsYXNzTmFtZT0nZjEyIGZpdGFsaWMgcGZjMyc+XG4gICAgICAgICAgICB7YFRyYXZlbGxlZCAke2dldFRyYXZlbGVyUmV2aWV3Q2l0aWVzKHRlc3RpbW9uaWFsLnF1b3RlLmNpdGllcyl9ICR7Z2V0VHJhdmVsZXJSZXZpZXdEYXRlKHRlc3RpbW9uaWFsLnF1b3RlLnN0YXJ0X2RhdGUpfVxuICAgICAgICAgICR7Z2V0VHJhdmVsZXJSZXZpZXdUcmF2Q291bnQodGVzdGltb25pYWwucXVvdGUuYWR1bHQsIHRlc3RpbW9uaWFsLnF1b3RlLmNoaWxkKX0gJHtnZXRUcmF2ZWxlclJldmlld0R1cmF0aW9uKHRlc3RpbW9uaWFsLnF1b3RlLmRheXMpfWB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRyYXZlbGVyUmV2aWV3TmV3Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIHRlc3RpbW9uaWFsOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGhpZGVUZXN0aW1vbmlhbDogUHJvcFR5cGVzLmJvb2wsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlclJldmlld05ld0NhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbmltcG9ydCB7IGZldGNoUGRwVGVzdGltb25pYWxzIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IFRyYXZlbGVyUmV2aWV3IGZyb20gJy4vVHJhdmVsZXJSZXZpZXcnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgdGVzdGltb25pYWxzOiBfZ2V0KHN0YXRlLCAndHJhdmVsZXJSZXZpZXdzLnRlc3RpbW9uaWFscycpLFxuICAgIHBhZ2luYXRpb246IF9nZXQoc3RhdGUsICd0cmF2ZWxlclJldmlld3MucGFnaW5hdGlvbicpLFxuICAgIHBhY2thZ2VJZDogX2dldChzdGF0ZSwgJ3BhY2thZ2VzLmRldGFpbHMuZGF0YS5kYXRhLnNlb19wYWNrYWdlcy5pZCcpXG4gIH0pLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGxvYWRNb3JlOiBwYXJhbXMgPT4gZGlzcGF0Y2goZmV0Y2hQZHBUZXN0aW1vbmlhbHMocGFyYW1zKSlcbiAgfSkpKFRyYXZlbGVyUmV2aWV3KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vQW1wQ2Fyb3VzZWwuc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBkaXNjb3VudFBlcmNlbnRhZ2UgPSAocHJpY2VUb3RhbCwgcHJpY2VEaXNjb3VudCkgPT4gcHJpY2VEaXNjb3VudCAvIChwcmljZVRvdGFsIC8gMTAwKTtcblxuY29uc3QgQW1wQ2Fyb3VzZWwgPSAoeyBpbWFnZXMsIG5hbWUsIGNvdmVycywgZGVhbHNJbmZvLCBwcmljZSwgaXNEZWFsLCBpc0x1eHVyeSB9KSA9PiB7XG5cbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcbiAgICB9LFxuICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgIGxhenk6IHRydWUsXG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmVcIj5cbiAgICAgIHtcbiAgICAgICAgaXNEZWFsIHx8IGlzTHV4dXJ5ID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncDUgZjEyIHBsMTUgcHIxNSBmbGV4IGFsaWduQ2VudGVyIHBmYzMgd2Z1bGwgY2VudGVyIGhpZ2hsaWdodC1kZWFscy1iYW5uZXIgc2xpZGVyLWFtcC10ZXh0Jz5cbiAgICAgICAgICAgIHtpc0RlYWwgJiYgZGVhbHNJbmZvLmZhcX0ge2lzTHV4dXJ5ICYmIGBIYXNzZWwgRnJlZSBCb29raW5nIHwgQWxsIEluY2x1c2l2ZSB8IDI0eDcgQXNzaXN0YW5jZWB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgcGFja2FnZS1zbGlkZXItaW1nIFwiPlxuICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWNrYWdlRGV0YWlsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxhbXAtY2Fyb3VzZWwgd2lkdGg9XCI0MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNsaWRlc1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGltYWdlcy5sZW5ndGggJiYgaW1hZ2VzLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJJbWFnZS1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YW1wLWltZyBzcmM9e3MucGljdHVyZV9kZXRhaWxzLmltYWdla2l0X3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImEgc2FtcGxlIGltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FtcC1pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2xpZGVyVGV4dFwiPntzLnBpY3R1cmVfZGV0YWlscy5jYXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvYW1wLWNhcm91c2VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNEZWFsICYmIHByaWNlLnRvdGFsICYmIHByaWNlLmRpc2NvdW50ID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHJhZGl1czIgdDE1IHNiY3cgbDE1IHoyIHRleHQtY2VudGVyIHNsaWRlci1kZWFscyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgbTAgcDUnPkRlYWwgb2YgdGhlIERheTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBwYmMxIGp1c3RpZnlDZW50ZXIgcHQ1IHBiNSBwbDggcHI4Jz5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2YzMiBzZmN3IGZ3OSBtMCc+e01hdGgucm91bmQoZGlzY291bnRQZXJjZW50YWdlKHByaWNlLnRvdGFsLCBwcmljZS5kaXNjb3VudCkpfTwvaDY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwyJz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgc2ZjdyBtMCBjZW50ZXInPiU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIHNmY3cgbTAnPm9mZjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzTHV4dXJ5ICYmIHByaWNlLnRvdGFsICYmIHByaWNlLmRpc2NvdW50ID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHJhZGl1czIgdDE1IGwxNSB6MiAnPkljb248L2Rpdj4gOlxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5BbXBDYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIGltYWdlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvdmVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkZWFsc0luZm86IFByb3BUeXBlcy5vYmplY3QsXG4gIHByaWNlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc0RlYWw6IFByb3BUeXBlcy5ib29sLFxuICBpc0x1eHVyeTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkFtcENhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVhbHNJbmZvOiB7fSxcbiAgcHJpY2U6IHt9LFxuICBpc0RlYWw6IGZhbHNlLFxuICBpc0x1eHVyeTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFtcENhcm91c2VsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGlnaGxpZ2h0LWRlYWxzLWJhbm5lclwiOiBcIl92dUwtalwiLFxuXHRcInNsaWRlci1hbXAtdGV4dFwiOiBcIl8zT0lYaFwiLFxuXHRcInBhY2thZ2Utc2xpZGVyLWltZ1wiOiBcIl8xV0NWSFwiLFxuXHRcInNsaWRlci1kZWFsc1wiOiBcIl8xM1lIdFwiLFxuXHRcInNsaWRlckltYWdlLW92ZXJsYXlcIjogXCJfSGE4Ui1cIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEhvdGVsQ2FyZCBmcm9tICcuL0hvdGVsQ2FyZCc7XG5cbmltcG9ydCAnLi9Ib3RlbC5zY3NzJztcblxuY29uc3QgSG90ZWwgPSAoeyBsaXN0IH0pID0+IHtcbiAgY29uc3QgaG90ZWxFbGVtZW50cyA9IGxpc3RcbiAgICAuZmlsdGVyKGggPT4gaC5waWN0dXJlcy5sZW5ndGgpXG4gICAgLm1hcCgoaCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlcyA9IHtcbiAgICAgICAgaW1hZ2VVcmw6IGgucGljdHVyZXNbMF0ucGljdHVyZV9kZXRhaWxzLnBpY3R1cmUsXG4gICAgICAgIGltYWdla2l0VXJsOiBoLnBpY3R1cmVzWzBdLnBpY3R1cmVfZGV0YWlscy5pbWFnZWtpdF91cmxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZ3OSBwZmMxIHJlbGF0aXZlIGlibG9jayBtcjhcIj57aC5oZWFkZXJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQxNVwiIGlkPVwiaG90ZWxfYm94LXRyaWdnZXJsaW5rXCI+XG4gICAgICAgICAgICA8SG90ZWxDYXJkXG4gICAgICAgICAgICAgIGRldGFpbHM9e2h9XG4gICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICA8YW1wLWNhcm91c2VsIHdpZHRoPVwiNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzkwXCJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzbGlkZXNcIlxuICAgICAgPlxuICAgICAgICB7aG90ZWxFbGVtZW50c31cbiAgICAgIDwvYW1wLWNhcm91c2VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSG90ZWwucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbkhvdGVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2xpZGVcIjogXCJfM1JXd2VcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEl0aW5lcmFyeVRhZ3MgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL0l0aW5lcmFyeVRhZ3MnO1xuaW1wb3J0ICcuL0hvdGVsQ2FyZC5zY3NzJztcbmltcG9ydCBBZ2VudFJhdGluZyBmcm9tICdhbXAvbW9kdWxlcy9jb21tb24vQWdlbnRSYXRpbmcnO1xuXG5jb25zdCBIb3RlbENhcmQgPSAoe2RldGFpbHMsIGltYWdlcywgaW5kZXh9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaG90ZWwtY2FyZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90ZWwtaW1nIHJlbGF0aXZlIGJveC13aXRoLWxheWVyXCI+XG4gICAgICA8YW1wLWltZyBoZWlnaHQ9ezE0MH0gc3JjPXtpbWFnZXMuaW1hZ2VVcmx9IGFsdD17ZGV0YWlscy5uYW1lfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQ4IHBiOCBob3RlbC1kYXRhLWJveFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImlibG9jayBtcjggZjE0IG1iOCBmdzlcIj57ZGV0YWlscy5uYW1lfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG1iOFwiPlxuICAgICAgICA8QWdlbnRSYXRpbmcgYWdlbnRSYXRpbmc9e2RldGFpbHMucmF0aW5nfSBpZD17YHJhdGluZ18ke2luZGV4fWB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMlwiPntkZXRhaWxzLmFkZHJlc3N9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3RlbC1kYXRhLWJveC10YWdzXCI+XG4gICAgICAgIDxJdGluZXJhcnlUYWdzIGxpc3Q9e2RldGFpbHMuZmFjaWxpdGllc30gaXRpbmVyYXJ5SWQ9e2luZGV4ICsgMjAwfSB0YWdJZD17MX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkhvdGVsQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGRldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGltYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsQ2FyZDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvdGVsLWNhcmRcIjogXCJfZ1dydWNcIixcblx0XCJob3RlbC1pbWdcIjogXCJfMnRiVlZcIixcblx0XCJob3RlbENhcmRTbGlkZXJcIjogXCJfM2o0cldcIixcblx0XCJob3RlbC1kYXRhLWJveFwiOiBcIl84cFBwV1wiLFxuXHRcImhvdGVsLWRhdGEtYm94LXRhZ3NcIjogXCJfMTMwbC1cIixcblx0XCJ0cmF2ZWxlci1yYXRpbmctc3Rhci1saXN0XCI6IFwiX1RQblE1XCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBIb3RlbCBmcm9tICcuL0hvdGVsJztcbmltcG9ydCBOb0hvdGVsSW5jbHVkZWQgZnJvbSAnLi9Ob0hvdGVsSW5jbHVkZWQnO1xuXG5pbXBvcnQgJy4vSG90ZWxGbGlnaHQuc2Nzcyc7XG5cbmNvbnN0IEhvdGVsRmxpZ2h0ID0gKHsgaG90ZWxzLCBmbGlnaHRzLCBob3RlbFRpdGxlLCBpbmNsdXNpb25zIH0pID0+IHtcbiAgaWYgKCFob3RlbHMubGVuZ3RoICYmICFmbGlnaHRzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHNiY3cgcmVsYXRpdmVcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTYgZnc5IG0wIHAxNVwiPkhvdGVsczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdGVsLWNhcm91c2VsLXdyYXBwZXJcIj5cbiAgICAgICAge2hvdGVscy5sZW5ndGggPyA8SG90ZWwgbGlzdD17aG90ZWxzfSAvPiA6IDxOb0hvdGVsSW5jbHVkZWQgLz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibm90ZVwiPlxuICAgICAgICAgIE5vdGU6IE91ciBhZ2VudHMgd2lsbCBwcm92aWRlIHlvdSB0aGVzZSBvciBzaW1pbGFyIGhvdGVscyBkZXBlbmRpbmdcbiAgICAgICAgICBvbiBhdmFpbGFiaWxpdHlcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ib3RlbEZsaWdodC5wcm9wVHlwZXMgPSB7XG4gIGhvdGVsczogUHJvcFR5cGVzLmFycmF5LFxuICBmbGlnaHRzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGhvdGVsVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluY2x1c2lvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5Ib3RlbEZsaWdodC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhvdGVsczogW10sXG4gIGZsaWdodHM6IFtdLFxuICBob3RlbFRpdGxlOiAnSG90ZWxzJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsRmxpZ2h0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaG90ZWwtY2Fyb3VzZWwtd3JhcHBlclwiOiBcIl8zVWM5Q1wiLFxuXHRcImFtcC1jYXJvdXNlbC1zbGlkZVwiOiBcIl8ySWtZd1wiLFxuXHRcImhvdGVsLWNhcmRcIjogXCJfMjFGUXhcIixcblx0XCJub3RlXCI6IFwiXzFzeXdUXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0hvdGVsLnNjc3MnO1xuXG5jb25zdCBOb0hvdGVsSW5jbHVkZWQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQyNCBwYjI0XCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleXNjYWxlIGZsaWdodC1pY29uLWRpc2FibGVkXCIgLz5cbiAgICA8cCBjbGFzc05hbWU9XCJwdDggZjE2IGZ3OSBwZmM0IHRleHQtY2VudGVyXCI+Tm8gSG90ZWwgSW5jbHVkZWQ8L3A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm9Ib3RlbEluY2x1ZGVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBBY3Rpb24gZnJvbSAnYW1wL2hlbHBlcnMvQWN0aW9uJztcblxuY29uc3QgRGF5c0l0aW5lcmFyeSA9IChcbiAge1xuICAgIGRheSxcbiAgICBuZXh0TGluayxcbiAgICBwcmV2TGluayxcbiAgICBzZXRJdGluZXJhcnlEYXksXG4gICAgaW5kZXhcbiAgfVxuKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGJzNCBwMCBzYmN3IHA4IGZpeGVkIGIwXCI+XG4gICAge3ByZXZMaW5rICYmXG4gICAgPEFjdGlvbiBldmVudHM9e3sgdGFwOiBbYEFNUC5zZXRTdGF0ZSh7XG4gICAgZGF5SXRlbmFyeSR7aW5kZXggLSAxfSA6ICFkYXlJdGVuYXJ5JHtpbmRleCAtIDF9LFxuICAgIGRheUl0ZW5hcnkke2luZGV4fSA6ICFkYXlJdGVuYXJ5JHtpbmRleH19KWBdIH19XG4gICAgPlxuICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxlZnQgdGV4dC1jZW50ZXIgYnRuLXByaS1sYXJnZSByZWxhdGl2ZVwiXG4gICAgICAgICAgey4uLnByb3BzfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd3RuYyByaWdodFwiIC8+RGF5IHtkYXkgLSAxfVxuICAgICAgICA8L2J1dHRvbj4pXG4gICAgICB9XG4gICAgPC9BY3Rpb24+XG4gICAgfVxuICAgIHtuZXh0TGluayAmJlxuICAgIDxBY3Rpb24gZXZlbnRzPXt7IHRhcDogW2BBTVAuc2V0U3RhdGUoe1xuICAgIGRheUl0ZW5hcnkke2luZGV4ICsgMX0gOiAhZGF5SXRlbmFyeSR7aW5kZXggKyAxfSxcbiAgICBkYXlJdGVuYXJ5JHtpbmRleH0gOiAhZGF5SXRlbmFyeSR7aW5kZXh9fSlgXSB9fVxuICAgID5cbiAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImZyaWdodCB0ZXh0LWNlbnRlciBidG4tcHJpLWxhcmdlIHJlbGF0aXZlXCJcbiAgICAgICAgICB7Li4ucHJvcHN9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93dG5jIGxlZnRcIiAvPkRheSB7ZGF5ICsgMX1cbiAgICAgICAgPC9idXR0b24+KX1cbiAgICA8L0FjdGlvbj5cbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuRGF5c0l0aW5lcmFyeS5wcm9wVHlwZXMgPSB7XG4gIGRheTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuZXh0TGluazogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJldkxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzZXRJdGluZXJhcnlEYXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbkRheXNJdGluZXJhcnkuZGVmYXVsdFByb3BzID0ge1xuICBuZXh0TGluazogbnVsbCxcbiAgcHJldkxpbms6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERheXNJdGluZXJhcnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEl0aW5lcmFyeVRhZ3MgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL0l0aW5lcmFyeVRhZ3MnO1xuaW1wb3J0IEl0aW5lcmFyeVBpY3R1cmVTbGlkZXIgZnJvbSAnLi9JdGluZXJhcnlQaWN0dXJlU2xpZGVyJztcbmltcG9ydCBBY3Rpb24gZnJvbSAnYW1wL2hlbHBlcnMvQWN0aW9uJztcbmltcG9ydCAnLi9JdGluZXJhcnkuc2Nzcyc7XG5cbmNvbnN0IEh0bWxUb1JlYWN0UGFyc2VyID0gcmVxdWlyZSgnaHRtbC10by1yZWFjdCcpLlBhcnNlcjtcblxuY29uc3QgaHRtbFRvUmVhY3RQYXJzZXIgPSBuZXcgSHRtbFRvUmVhY3RQYXJzZXIoKTtcblxuY29uc3QgZGF5RGV0YWlsRWxlbWVudHMgPSAoZGF5RGV0YWlscyA9IFtdLCBwYWNrYWdlSWQsIGl0aW5lcmFyeUlkKSA9PiB7XG4gIHJldHVybiBkYXlEZXRhaWxzLnNsaWNlKDAsIDUpLm1hcCgodmFsdWUsIGtleSkgPT4gKFxuICAgIDxsaSBrZXk9e2BkYXlfZGV0YWlsXyR7cGFja2FnZUlkfV8ke2l0aW5lcmFyeUlkfV8ke2tleX1gfT57aHRtbFRvUmVhY3RQYXJzZXIucGFyc2UodmFsdWUpfTwvbGk+XG4gICkpO1xufTtcblxuY29uc3QgcmVuZGVySXRpbmVyYXJ5RWxlbWVudHMgPSAoaXRpbmVyYXJ5LCBpZCwgcmVzb3VyY2UsIHJlcGxhY2VTdGF0ZSwgdHJhY2tTZWdtZW50LCBzZXRJdGluZXJhcnlEYXkpID0+IHtcbiAgcmV0dXJuIGl0aW5lcmFyeS5tYXAoKHZhbHVlLCBrZXkpID0+IHtcbiAgICBjb25zdCBzcGFjZUluZGV4ID0gdmFsdWUudGl0bGUuaW5kZXhPZignICcsIHZhbHVlLnRpdGxlLmluZGV4T2YoJyAnKSArIDEpIHx8IDA7XG4gICAgY29uc3QgZGF5ID0gdmFsdWUudGl0bGUuc3Vic3RyKDAsIHNwYWNlSW5kZXgpO1xuICAgIGNvbnN0IHRpdGxlID0gdmFsdWUudGl0bGUuc3Vic3RyKHNwYWNlSW5kZXggKyAxKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17YGl0aW5lcmFyeV8ke2lkfV8ke2tleX1gfSBjbGFzc05hbWU9XCJpdGluZXJhcnktY29udGFpbmVyLWJveFwiXG4gICAgICAgICAgIGlkPXtrZXkgPT09IDAgPyAnaXRpbmVyYXJ5X2JveC10cmlnZ2VybGluayc6ICcnfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByZWxhdGl2ZSBpdGluZXJhcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgaXRpbmVyYXJ5LWNvbnRhaW5lci1zbWFsbFwiPlxuICAgICAgICAgICAgPEFjdGlvbiBldmVudHM9e3sgY2hhbmdlIDogW2BBTVAuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpdGluZXJhcnlfJHtpZH1fJHtrZXl9IDogIWl0aW5lcmFyeV8ke2lkfV8ke2tleX1cbiAgICAgICAgICAgICAgfSlgXSB9fT5cbiAgICAgICAgICAgICAgeyhwcm9wcykgPT4gKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGktcmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD17YGl0aW5lcmFyeV9yYWRpb18ke2lkfV8ke2tleX1gfVxuICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQWN0aW9uPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpdGluZXJhcnlfcmFkaW9fJHtpZH1fJHtrZXl9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwwIHByOCByZWxhdGl2ZSBkYXlzLWNvdW50IHBiOFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBmdzkgcmVsYXRpdmVcIj57ZGF5fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImYxNCBmdzkgbWI4IHJlbGF0aXZlIHByNDhcIj57dGl0bGV9IDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdy1kb3duIHNtb290aCBhYnNvbHV0ZSByMCBhYnNvbHV0ZS1jZW50ZXItdiBpYmxvY2tcIi8+PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGl0aW5lcmFyeS10YWdzLWJveFwiPlxuICAgICAgICAgICAgICAgICAgPEl0aW5lcmFyeVRhZ3MgbGlzdD17dmFsdWUubGFiZWxzfSBpdGluZXJhcnlJZD17aWR9IHRhZ0lkPXtrZXl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaXRpbmVyYXJ5LWxpc3QtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0MCBsMCBcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0aW5lcmFyeVtrZXldLnBpY3R1cmVzID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGluZXJhcnlQaWN0dXJlU2xpZGVyIHBpY3R1cmVzPXtpdGluZXJhcnlba2V5XS5waWN0dXJlc30gaGVhZGluZz17dGl0bGV9IGlkPXtpZH0ga2V0PXtrZXl9IC8+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtc3R5bGUtbm8gZjEyXCI+XG4gICAgICAgICAgICAgICAgICB7ZGF5RGV0YWlsRWxlbWVudHMoKEFycmF5LmlzQXJyYXkodmFsdWUuZGF5X2RldGFpbCkgPyB2YWx1ZS5kYXlfZGV0YWlsIDogW10pLCBpZCwga2V5KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHB0OCBwYjhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cz17eyB0YXA6IFtgQU1QLnNldFN0YXRlKHtkYXlJdGVuYXJ5JHtrZXl9OiFkYXlJdGVuYXJ5JHtrZXl9LCBzaG93RGF5SW5kZXggOiBrZXl9KWBdIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZjEyIGZyaWdodCBsaW5rIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IEl0aW5lcmFyeSA9ICh7IGl0aW5lcmFyeSwgdGl0bGVIZWFkLCBpZCwgcmVzb3VyY2UsIHJlcGxhY2VTdGF0ZSwgdHJhY2tTZWdtZW50LCBzZXRJdGluZXJhcnlEYXkgfSkgPT4ge1xuICBpZiAoIWl0aW5lcmFyeSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHNiY3cgcDE1XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy1jb21tb24tY2VudGVyIHBiMTUgYm90dG9tLWJvcmRlclwiPnt0aXRsZUhlYWR9PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaXRpbmVyYXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICB7cmVuZGVySXRpbmVyYXJ5RWxlbWVudHMoaXRpbmVyYXJ5LCBpZCwgcmVzb3VyY2UsIHJlcGxhY2VTdGF0ZSwgdHJhY2tTZWdtZW50LCBzZXRJdGluZXJhcnlEYXkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JdGluZXJhcnkucHJvcFR5cGVzID0ge1xuICBpdGluZXJhcnk6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB0aXRsZUhlYWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJlc291cmNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJlcGxhY2VTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgc2V0SXRpbmVyYXJ5RGF5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuSXRpbmVyYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGVIZWFkOiAnSXRpbmVyYXJ5JyxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJdGluZXJhcnk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGluZXJhcnktY29udGFpbmVyXCI6IFwiXzJWS2s3XCIsXG5cdFwiaXRpbmVyYXJ5LWNvbnRhaW5lci1ib3hcIjogXCJfMXVkaGNcIixcblx0XCJpdGluZXJhcnktY29udGFpbmVyLXNtYWxsXCI6IFwiXzRmbjA4XCIsXG5cdFwiZGF5cy1jb3VudFwiOiBcIl8zcW1vSFwiLFxuXHRcIml0aW5lcmFyeS10YWdzLWJveFwiOiBcIl8zMGJtZVwiLFxuXHRcIml0aW5lcmFyeS1saXN0LWJveFwiOiBcIl8xMU1hQ1wiLFxuXHRcIml0aS1yYWRpb1wiOiBcIl8zTFpEdVwiLFxuXHRcImFycm93LWRvd25cIjogXCJfS0NzRE1cIixcblx0XCJpdGluZXJhcnktdGFncy1ib3gtaXRlbVwiOiBcIl8yU29ISFwiLFxuXHRcIml0aW5lcmFyeS1pbWFnZXMtY29udGFpbmVyXCI6IFwiXzFwOFQzXCIsXG5cdFwiYm90dG9tLWJvcmRlclwiOiBcIl82amRVbVwiLFxuXHRcImFtcF9pdGVuYXJ5X2ltYWdlXCI6IFwiXzJVakNnXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEl0aW5lcmFyeVBpY3R1cmVTbGlkZXIgPSAoeyBwaWN0dXJlcywgaGVhZGluZywgaWQsIGtldCB9KSA9PiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtc3R5bGUtbm8gaXRpbmVyYXJ5LWltYWdlcy1jb250YWluZXJcIj5cbiAgICAgIHtcbiAgICAgICAgcGljdHVyZXMubWFwKChwaWN0dXJlLCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICA8YW1wLWltZ1xuICAgICAgICAgICAgICBzcmM9e3BpY3R1cmUucGljdHVyZV9kZXRhaWxzLmltYWdla2l0X3VybH1cbiAgICAgICAgICAgICAgYWx0PXtwaWN0dXJlLnBpY3R1cmVfZGV0YWlscy5jYXB0aW9ufVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNDBweFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgZGF0YS1hbXAtYmluZC1jbGFzcz17YGl0aW5lcmFyeV8ke2lkfV8ke2tldH0gPyAnaXRpbmVyYXJ5XyR7aWR9XyR7a2V0fSBhbXBfaXRlbmFyeV9pbWFnZScgOiAnYW1wX2l0ZW5hcnlfaW1hZ2UnYH1cbiAgICAgICAgICAgICAgY2xhc3M9XCJhbXBfaXRlbmFyeV9pbWFnZVwiPlxuICAgICAgICAgICAgPC9hbXAtaW1nPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC91bD5cbik7XG5cbkl0aW5lcmFyeVBpY3R1cmVTbGlkZXIucHJvcFR5cGVzID0ge1xuICBwaWN0dXJlczogUHJvcFR5cGVzLmFycmF5LFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAga2V0OiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyeVBpY3R1cmVTbGlkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgSXRpbmVyYXJ5VGFncyA9ICh7IGxpc3QsIGl0aW5lcmFyeUlkLCB0YWdJZCB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5RWxlbWVudHMgPSBsaXN0Lm1hcChcbiAgICAodmFsdWUsIGtleSkgPT4gKFxuICAgICAgPGxpXG4gICAgICAgIGtleT17YGNhdGVnb3J5XyR7aXRpbmVyYXJ5SWR9XyR7dGFnSWR9XyR7a2V5fWB9ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICBjbGFzc05hbWU9XCJpdGluZXJhcnktdGFncy1ib3gtaXRlbVwiXG4gICAgICA+XG4gICAgICAgIHsgdmFsdWUgfVxuICAgICAgPC9saT5cbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1zdHlsZS1ub1wiPlxuICAgICAge2NhdGVnb3J5RWxlbWVudHN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbkl0aW5lcmFyeVRhZ3MucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXksXG4gIGl0aW5lcmFyeUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRhZ0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbkl0aW5lcmFyeVRhZ3MuZGVmYXVsdFByb3BzID0ge1xuICBsaXN0OiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRpbmVyYXJ5VGFncztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBEYXlzSXRpbmVyYXJ5IGZyb20gJy4vRGF5c0l0aW5lcmFyeS5qcyc7XG5pbXBvcnQgUGFja2FnZUluY0V4YyBmcm9tICdhbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlSW5jRXhjJztcblxuaW1wb3J0IFBhY2thZ2VTbGlkZXIgZnJvbSAnLi9QYWNrYWdlU2xpZGVyJztcbmltcG9ydCBJdGluZXJhcnlUYWdzIGZyb20gJy4vSXRpbmVyYXJ5VGFncyc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5cbmltcG9ydCAnLi9QYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5LnNjc3MnO1xuY29uc3QgaHRtbFRvUmVhY3RQYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IFBhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnkgPSAoXG4gIHtcbiAgICBwYWNrYWdlRGV0YWlscyxcbiAgICBpdGluZXJhcnksXG4gICAgZGF5LFxuICAgIHJlc291cmNlLFxuICAgIHJlcGxhY2VTdGF0ZSxcbiAgICBzZXRJdGluZXJhcnlEYXksXG4gICAgc2hvd1NlY3Rpb24sXG4gICAgaW5kZXhcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IHNwYWNlSW5kZXggPSBpdGluZXJhcnkudGl0bGUuaW5kZXhPZignICcsIGl0aW5lcmFyeS50aXRsZS5pbmRleE9mKCcgJykgKyAxKSB8fCAwO1xuICBjb25zdCB0aXRsZSA9IGl0aW5lcmFyeS50aXRsZS5zdWJzdHIoc3BhY2VJbmRleCArIDEpO1xuXG4gIGNvbnN0IGhvbWVMaW5rID0gYC9wYWNrYWdlcy8ke3Jlc291cmNlLnBhdGh9P2lkPSR7cmVzb3VyY2UuaWR9YDtcbiAgY29uc3QgbmV4dExpbmsgPSAoZGF5IDwgcGFja2FnZURldGFpbHMuaXRpbmVyYXJ5Lmxlbmd0aCkgPyBgJHtob21lTGlua30mZGF5PSR7ZGF5ICsgMX1gIDogbnVsbDtcbiAgY29uc3QgcHJldkxpbmsgPSAoZGF5ID4gMSkgPyBgJHtob21lTGlua30mZGF5PSR7ZGF5IC0gMX1gIDogbnVsbDtcblxuICAvLyBUT0RPOiBTY3JvbGwgaXMgYnJlYWtpbmcgb24gdGhpcyBwYWdlXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD17YGRheUl0ZW5hcnkke2luZGV4fWB9XG4gICAgICAgICBjbGFzc05hbWU9XCJoaWRlXCJcbiAgICAgICAgIGRhdGEtYW1wLWJpbmQtY2xhc3M9e2BkYXlJdGVuYXJ5JHtpbmRleH0gPyAnb3ZlcmZsb3dhIHNiY3cgaXRpbmVyYXJ5LWRldGFpbHMtcG9wdXAgZGF5LWl0ZW5hcnknIDogJ2hpZGUnYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHNiY3cgcGwwIHByMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTYgdGV4dC1sZWZ0IGZ3NCBwbDQ4IHB0MTUgcGIxNSByZWxhdGl2ZSBwcjE1XCI+XG4gICAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyB0YXA6IFtgQU1QLnNldFN0YXRlKHtkYXlJdGVuYXJ5JHtpbmRleH0gOiAhZGF5SXRlbmFyeSR7aW5kZXh9fSlgXX19PlxuICAgICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyLXYgbDE1IGNyb3NzLWNvbW1vblwiXG4gICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BY3Rpb24+XG4gICAgICAgICAgICBJdGluZXJhcnlcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyAvKiBVc2luZyBwYWNrYWdlRGV0aWFscyBpbWFnZXMuIEFQSSBEZXBlbmRlbmN5ICovIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZS1zbGlkZXItaW1nXCI+XG4gICAgICA8UGFja2FnZVNsaWRlclxuICAgICAgICBpbWFnZXM9e2l0aW5lcmFyeS5waWN0dXJlc31cbiAgICAgICAgbmFtZT17cGFja2FnZURldGFpbHMubmFtZX1cbiAgICAgICAgY292ZXJzPXtwYWNrYWdlRGV0YWlscy5jb3ZlcnN9XG4gICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHAxNSBzYmN3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRpbmVyYXJ5LWRheXMtZmxhZyBtYjE1XCI+RGF5IHtkYXl9PC9kaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTYgcGZjMyB0ZXh0LWxlZnQgZnc5XCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxJdGluZXJhcnlUYWdzIGxpc3Q9e2l0aW5lcmFyeS5jYXRlZ29yaWVzfSBpdGluZXJhcnlJZD17cGFja2FnZURldGFpbHMuaWR9IHRhZ0lkPXtkYXl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwIHBiNjRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxNCBwZmMzIGZ3NCB0ZXh0LWxlZnQgcHQxNVwiPlxuICAgICAgICAgICAge2h0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKGl0aW5lcmFyeS5kZXNjcmlwdGlvbil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHBmYzMgZnc3IGYxNCBwdDI0XCI+T3RoZXIgQmVuZWZpdGVzPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaW5jbHVzaW9uLWhlaWdodC1ib3hcIj5cbiAgICAgICAgICAgIDxQYWNrYWdlSW5jRXhjIGluY2x1c2lvbnM9e2l0aW5lcmFyeS5pbmNsdXNpb25zfSBpZD17YGRheWRldGFpbHNfJHtwYWNrYWdlRGV0YWlscy5pZH1gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPERheXNJdGluZXJhcnlcbiAgICAgICAgZGF5PXtkYXl9XG4gICAgICAgIG5leHRMaW5rPXtuZXh0TGlua31cbiAgICAgICAgcHJldkxpbms9e3ByZXZMaW5rfVxuICAgICAgICBzZXRJdGluZXJhcnlEYXk9e3NldEl0aW5lcmFyeURheX1cbiAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnkucHJvcFR5cGVzID0ge1xuICBwYWNrYWdlRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkYXk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcmVzb3VyY2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcmVwbGFjZVN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpdGluZXJhcnk6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNldEl0aW5lcmFyeURheTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2hvd1NlY3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cblBhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnkuZGVmYXVsdFByb3BzID0ge1xuICBpdGluZXJhcnk6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5O1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJvd3RuY1wiOiBcIl8xbWcwUVwiLFxuXHRcInJpZ2h0XCI6IFwiXzJpYTdzXCIsXG5cdFwibGVmdFwiOiBcIl8xMGIwVVwiLFxuXHRcImRheS1pdGVuYXJ5XCI6IFwiXzJFTnZvXCIsXG5cdFwiY3Jvc3MtY29tbW9uXCI6IFwiXzM4Q3ExXCIsXG5cdFwiaXRpbmVyYXJ5LWRheXMtZmxhZ1wiOiBcIl8yeHpIdlwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgJy4vUGFja2FnZVNsaWRlci5zY3NzJztcblxuY29uc3QgR0Rpc2NvdW50RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJveFNoYWRvdzogJzAgMCA2cHggcmdiYSgwLDAsMCwwLjUpJyxcbn0pO1xuXG5jb25zdCBHSGlnaGxpZ2h0QmFubmVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmMwNTcnLFxuXG59KTtcblxuY29uc3QgR0x1eHVyeURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzEyNHB4JyxcbiAgaGVpZ2h0OiAnNTVweCcsXG4gIGxlZnQ6ICctM3B4JyxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc0cHgnLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzRweCcsXG4gIG92ZXJmbG93OidoaWRkZW4nLFxuICB0b3A6ICc4cHgnXG59KTtcblxuZXhwb3J0IGNvbnN0IGRpc2NvdW50UGVyY2VudGFnZSA9IChwcmljZVRvdGFsLCBwcmljZURpc2NvdW50KSA9PiBwcmljZURpc2NvdW50IC8gKHByaWNlVG90YWwgLyAxMDApO1xuXG5jb25zdCBQYWNrYWdlU2xpZGVyID0gKHsgaW1hZ2VzLCBuYW1lLCBjb3ZlcnMsIGRlYWxzSW5mbywgcHJpY2UsIGlzRGVhbCwgaXNMdXh1cnksIGhpZGVEaXNjb3VudCB9KSA9PiB7XG5cbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcbiAgICB9LFxuICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgIGxhenk6IHRydWUsXG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmVcIj5cbiAgICAgIHtcbiAgICAgICAgaXNEZWFsIHx8IGlzTHV4dXJ5ID9cbiAgICAgICAgICA8R0hpZ2hsaWdodEJhbm5lckRpdiBjbGFzc05hbWU9J3A1IGYxMiBwbDE1IHByMTUgdGV4dC1jZW50ZXIgcGZjMyB3ZnVsbCBoaWdobGlnaHQtZGVhbHMtYmFubmVyJz5cbiAgICAgICAgICAgIHsgaXNEZWFsICYmIGRlYWxzSW5mby5mYXF9IHtpc0x1eHVyeSAmJiBgSGFzc2VsIEZyZWUgQm9va2luZyB8IEFsbCBJbmNsdXNpdmUgfCAyNHg3IEFzc2lzdGFuY2VgfVxuICAgICAgICAgIDwvR0hpZ2hsaWdodEJhbm5lckRpdj5cbiAgICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgcGFja2FnZS1zbGlkZXItaW1nXCI+XG4gICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgPGFtcC1jYXJvdXNlbCB3aWR0aD1cIjQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2xpZGVzXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VzLm1hcCgocywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YW1wLWltZyBzcmM9e3MucGljdHVyZV9kZXRhaWxzLmltYWdla2l0X3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDExXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNmY3cgYWJzb2x1dGUgcDggYjAgbDAgd2Z1bGwgejEwIGZ3OSBwYWNrYWdlLXNsaWRlci1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3MucGljdHVyZV9kZXRhaWxzLmNhcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvYW1wLWltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvYW1wLWNhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBpc0RlYWwgJiYgcHJpY2UudG90YWwgJiYgcHJpY2UuZGlzY291bnQgJiYgIWhpZGVEaXNjb3VudCA/XG4gICAgICAgICAgPEdEaXNjb3VudERpdiBjbGFzc05hbWU9J2Fic29sdXRlIHJhZGl1czIgdDE1IHNiY3cgbDE1IHoyIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wIHA1Jz5EZWFsIG9mIHRoZSBEYXk8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBwYmMxIGp1c3RpZnlDZW50ZXIgcHQ1IHBiNSBwbDggcHI4Jz5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZjMyIHNmY3cgZnc5IG0wJz57TWF0aC5yb3VuZChkaXNjb3VudFBlcmNlbnRhZ2UocHJpY2UudG90YWwsIHByaWNlLmRpc2NvdW50KSl9PC9oNj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sMic+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgc2ZjdyBtMCc+JTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMiBzZmN3IG0wJz5vZmY8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HRGlzY291bnREaXY+IDpcbiAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGlzTHV4dXJ5ICYmIHByaWNlLnRvdGFsICYmIHByaWNlLmRpc2NvdW50ID9cbiAgICAgICAgICA8R0x1eHVyeURpdiBjbGFzc05hbWU9J2Fic29sdXRlIHJhZGl1czIgdDE1IGwxNSB6MiAnPnsvKjxMdXh1cnlQYWNrYWdlSWNvbiAvPiovfTwvR0x1eHVyeURpdj4gOlxuICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWNrYWdlU2xpZGVyLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY292ZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRlYWxzSW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJpY2U6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlzRGVhbDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzTHV4dXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZURpc2NvdW50OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlYWxzSW5mbzoge30sXG4gIHByaWNlOiB7fSxcbiAgaXNEZWFsOiBmYWxzZSxcbiAgaXNMdXh1cnk6IGZhbHNlLFxuICBoaWRlRGlzY291bnQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlU2xpZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFja2FnZS1zbGlkZXItaW1nXCI6IFwiX1duVEV1XCIsXG5cdFwicGFja2FnZS1zbGlkZXItY2FwdGlvblwiOiBcIl8yNjRqd1wiLFxuXHRcImRheXMtdGFnXCI6IFwiXzJuOGplXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJ2FwcENvbmZpZyc7XG5cbmltcG9ydCBBbXBDYXJvdXNlbCBmcm9tICcuL0FtcENhcm91c2VsJztcbmltcG9ydCBRdWlja0xpbmtOYXYgZnJvbSAnLi9RdWlja0xpbmtOYXYnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJUaXRsZSB9IGZyb20gJ2FtcC9tb2R1bGVzL2hlYWRlci9IZWFkZXJUaXRsZSc7XG5pbXBvcnQgJy4vcHJpY2VNb2R1bGUvUGFja2FnZUluY0V4Yy5zY3NzJztcbmltcG9ydCAnYW1wL21vZHVsZXMvY29tbW9uL1Nlb0Zvb3Rlci5zY3NzJztcbmltcG9ydCBQYWNrYWdlRGV0YWlsc1ByaWNlIGZyb20gJy4vcHJpY2VNb2R1bGUvUGFja2FnZURldGFpbHNQcmljZSc7XG5pbXBvcnQgSGlnaGxpZ2h0cyBmcm9tICdhbXAvbW9kdWxlcy9jb21tb24vSGlnaGxpZ2h0cyc7XG5pbXBvcnQgSW5jRXhjbHVzaW9uIGZyb20gJ2FtcC9tb2R1bGVzL2NvbW1vbi9JbmNFeGNsdXNpb24vSW5jRXhjbHVzaW9uJztcbmltcG9ydCBJdGluZXJhcnkgZnJvbSAnYW1wL3NjcmVlbnMvcGRwL0l0ZW5hcnkvSXRpbmVyYXJ5JztcbmltcG9ydCBIb3RlbEZsaWdodCBmcm9tICdhbXAvc2NyZWVucy9wZHAvSG90ZWxGbGlnaHQvSG90ZWxGbGlnaHQnO1xuaW1wb3J0IFJlYWRNb3JlQnlIZWlnaHQgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL1JlYWRNb3JlQnlIZWlnaHQnO1xuaW1wb3J0IEhvd0l0V29ya3MgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL2hvd0l0V29ya3MvSG93SXRXb3Jrcyc7XG5pbXBvcnQgU2VvRm9vdGVyIGZyb20gJ2FtcC9tb2R1bGVzL2NvbW1vbi9TZW9Gb290ZXInO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL0JyZWFkY3J1bWIvQnJlYWRjcnVtYkxpc3RpbmcnO1xuaW1wb3J0IFRyYXZlbGVyUmV2aWV3IGZyb20gJ2FtcC9tb2R1bGVzL3RyYXZlbGVyUmV2aWV3JztcbmltcG9ydCBGYXEgZnJvbSAnYW1wL21vZHVsZXMvRmFxL0ZhcSc7XG5pbXBvcnQgU2ltaWxhclBhY2thZ2VzIGZyb20gJ2FtcC9tb2R1bGVzL3NpbWlsYXJQYWNrYWdlcy9TaW1pbGFyUGFja2FnZXMnO1xuaW1wb3J0IFBhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnkgZnJvbSAnLi9JdGVuYXJ5L1BhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnknO1xuaW1wb3J0IHsgZ2V0RGVzY3JpcHRpb24sIGdldFRpdGxlLCByZW5kZXJNZXRhVGFncyB9IGZyb20gJ2FtcC9oZWxwZXJzL3Nlb0hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0QXBwU2NoZW1lVXJsLCBpb3NEZWVwTGluayB9IGZyb20gJ2FtcC9oZWxwZXJzL3VybEhlbHBlcnMnO1xuaW1wb3J0IExpbmtpbmcgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL0ludGVyTGlua2luZyc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckNvbnN0YW50cyhwYWNrYWdlRGV0YWlscywgZmFxcykge1xuICBjb25zdCBoZWFkZXJDb25zdGFudHMgPSBbXTtcblxuICBpZiAocGFja2FnZURldGFpbHMub3ZlcnZpZXcpIHtcbiAgICBoZWFkZXJDb25zdGFudHMucHVzaCh7IHRpdGxlOiAnT3ZlcnZpZXcnLCBzZWN0aW9uX25hbWU6ICdvdmVydmlld19ib3gnIH0pO1xuICB9XG4gIGlmIChwYWNrYWdlRGV0YWlscy5pdGluZXJhcnkpIHtcbiAgICBoZWFkZXJDb25zdGFudHMucHVzaCh7IHRpdGxlOiAnSXRpbmVyYXJ5Jywgc2VjdGlvbl9uYW1lOiAnaXRpbmVyYXJ5X2JveCcgfSk7XG4gIH1cbiAgaWYgKHBhY2thZ2VEZXRhaWxzLmhvdGVscykge1xuICAgIGhlYWRlckNvbnN0YW50cy5wdXNoKHsgdGl0bGU6ICdIb3RlbHMnLCBzZWN0aW9uX25hbWU6ICdob3RlbF9ib3gnIH0pO1xuICB9XG4gIGlmIChwYWNrYWdlRGV0YWlscy5pbmNFeGMuaW5jbHVzaW9ucyAmJiBwYWNrYWdlRGV0YWlscy5pbmNFeGMuZXhjbHVzaW9ucykge1xuICAgIGhlYWRlckNvbnN0YW50cy5wdXNoKHsgdGl0bGU6ICdJbmNsdXNpb24gLyBFeGNsdXNpb25zJywgc2VjdGlvbl9uYW1lOiAnaW5jZXhjbHVzaW9uX2JveCcgfSk7XG4gIH1cbiAgaWYgKHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9ucy5sZW5ndGggJiYgZmFxcy5sZW5ndGgpIHtcbiAgICBoZWFkZXJDb25zdGFudHMucHVzaCh7IHRpdGxlOiAnRkFRJywgc2VjdGlvbl9uYW1lOiAnZmFxX2JveCcgfSk7XG4gIH1cbiAgcmV0dXJuIGhlYWRlckNvbnN0YW50cztcbn1cblxuXG5jbGFzcyBQZHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBhY2thZ2VEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJhY2tVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmFxczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGJyZWFkY3J1bWJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZm9vdGVyTGlua3M6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzaW1pbGFyUGFja2FnZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBtZXRhVGFnczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGRldGFpbHNSZXNvdXJjZTogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG5cbiAgZ2V0UGFnZVVybCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhY2thZ2VEZXRhaWxzIDogeyBzZXRfdXJsIH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgbGluayA9IGAvcGFja2FnZXMvJHtzZXRfdXJsfWAuc3BsaXQoL3BhZ2VcXC9cXGQrLykuam9pbignJyk7XG4gICAgaWYgKGxpbmtbbGluay5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgICBsaW5rID0gbGluay5zdWJzdHJpbmcoMCwgbGluay5sYXN0SW5kZXhPZignLycpKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke2FwcENvbmZpZy5hcGlfcHJvdG9jb2x9Oi8vJHthcHBDb25maWcuc2VydmVyLnB1YmxpYy5ob3N0fSR7bGlua31gO1xuICB9O1xuXG4gIGdldFBhZ2VGdWxsTmFtZSgpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMucHJvcHMucGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zLmxlbmd0aCA/XG4gICAgICB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9uc1swXS5uYW1lIDogbnVsbDtcbiAgICBjb25zdCBzZXRVcmwgPSB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLnNldF91cmw7XG4gICAgcmV0dXJuIGBQYWNrYWdlIFBhZ2UvJHtkZXN0aW5hdGlvbn0vJHtzZXRVcmx9YDtcbiAgfVxuXG4gIHJlbmRlckhlbG1ldCh0aXRsZSkge1xuICAgIGNvbnN0IHsgbWV0YVRhZ3M6IG1ldGFUYWdMaXN0LCBsb2NhdGlvbiwgcGFja2FnZURldGFpbHMgOiB7IHNldF91cmwgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcmlnaW5hbFVybCA9IGAke2FwcENvbmZpZy5hcGlfcHJvdG9jb2x9Oi8vJHthcHBDb25maWcuc2VydmVyLnB1YmxpYy5ob3N0fS9wYWNrYWdlcy8ke3NldF91cmx9YDtcbiAgICBjb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gYC9wYWNrYWdlcy8ke3NldF91cmx9YDtcbiAgICBjb25zdCBhbGxvd2VkQW1wVXJscyA9IFsnYXplcmJhaWphbi01LWRheXMtdG91cicsXG4gICAgICAnN25pZ2h0cy04ZGF5cy1pc3JhZWwtdG91ci1mcm9tLWNoZW5uYWknLFxuICAgICAgJ2RlbGhpLTFuLTJkLXRvdXInLFxuICAgICAgJ2NoZW5uYWktMW4tMmQtdG91cicsXG4gICAgICAnN25pZ2h0cy04ZGF5cy1pc3JhZWwtdG91ci1mcm9tLWh5ZGVyYWJhZCddO1xuXG4gICAgbGV0IGlzQW1wID0gZmFsc2U7XG4gICAgYWxsb3dlZEFtcFVybHMubWFwKCh1cmwpID0+IHtcbiAgICAgIGlmIChvcmlnaW5hbFBhdGhuYW1lLmluY2x1ZGVzKHVybCkpIHtcbiAgICAgICAgaXNBbXAgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT57Z2V0VGl0bGUodGl0bGUsIG1ldGFUYWdMaXN0KX08L3RpdGxlPlxuICAgICAgICB7IWlzQW1wICYmIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPn1cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM2OGM0YzFcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3RoaXMuZ2V0UGFnZVVybCgpfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUcmF2ZWxUcmlhbmdsZS5jb21cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtnZXREZXNjcmlwdGlvbignJywgbWV0YVRhZ0xpc3QpfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17Z2V0RGVzY3JpcHRpb24oJycsIG1ldGFUYWdMaXN0KX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PXt0aGlzLmdldFBhZ2VGdWxsTmFtZSgpfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImFsOmFuZHJvaWQ6dXJsXCJcbiAgICAgICAgICAgICAgY29udGVudD17YHR0Oi8vJHtnZXRBcHBTY2hlbWVVcmwob3JpZ2luYWxVcmwsIG9yaWdpbmFsUGF0aG5hbWUsIGxvY2F0aW9uLCAxKX1gfSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwiYWw6aW9zOnVybFwiXG4gICAgICAgICAgY29udGVudD17YHR0aW9zYXBwOi8vYXBwbGlua3M/YWxfYXBwbGlua19kYXRhPSR7aW9zRGVlcExpbmsoXG4gICAgICAgICAgICBgJHthcHBDb25maWcuYXBpX3Byb3RvY29sfTovLyR7YXBwQ29uZmlnLnNlcnZlci5wdWJsaWMuaG9zdH0vJHtnZXRBcHBTY2hlbWVVcmwoXG4gICAgICAgICAgICAgIG9yaWdpbmFsVXJsLFxuICAgICAgICAgICAgICBvcmlnaW5hbFBhdGhuYW1lLFxuICAgICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgJ2lvcydcbiAgICAgICAgICAgICl9YFxuICAgICAgICAgICl9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJzaG91bGRfZmFsbGJhY2tcIiBjb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9XCIxNjg1MzQ5NTMyMDM1NDFcIiAvPlxuICAgICAgICB7cmVuZGVyTWV0YVRhZ3MobWV0YVRhZ0xpc3QsIGlzQW1wKX1cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgIGhyZWY9e2Ake2FwcENvbmZpZy5hcGlfcHJvdG9jb2x9Oi8vJHthcHBDb25maWcuc2VydmVyLnB1YmxpYy5ob3N0fS9wYWNrYWdlcy8ke3NldF91cmx9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFja2FnZURldGFpbHMsIGxvY2F0aW9uLCBiYWNrVXJsLCBmYXFzLCBicmVhZGNydW1icyxcbiAgICAgIGZvb3RlckxpbmtzLCBzaW1pbGFyUGFja2FnZXMsIGRldGFpbHNSZXNvdXJjZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBhY2thZ2VUeXBlID0gcGFja2FnZURldGFpbHMudGl0bGVzLm92ZXJ2aWV3LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNEZWFsID0gcGFja2FnZVR5cGUgPT09ICdkZWFscyc7XG4gICAgY29uc3QgaXNMdXh1cnkgPSBwYWNrYWdlVHlwZSA9PT0gJ2x1eHVyeSc7XG4gICAgY29uc3QgdGl0bGUgPSBwYWNrYWdlRGV0YWlscy5uYW1lIHx8ICdQYWNrYWdlIERldGFpbHMnO1xuICAgIGNvbnN0IFRyYXZlbGVyUmV2aWV3Q29udGFpbmVyID0gVHJhdmVsZXJSZXZpZXcuY29udGFpbmVyO1xuICAgIGNvbnN0IHBhY2thZ2VJZCA9IHBhY2thZ2VEZXRhaWxzLmlkIHx8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpdGluZXJhcnlEYXlWYWx1ZSA9IDI7XG4gICAgY29uc3QgZm9ybVVybCA9IGAvcmVxdWVzdGVkX3RyaXBzL25ldz9tdmlldz10cnVlJnNyY1VybD0ke2xvY2F0aW9uLnBhdGhuYW1lfWA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjNVwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJIZWxtZXQodGl0bGUpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPEhlYWRlclRpdGxlIHNob3dTaGFyZT17dHJ1ZX0gaGVhZGluZz17cGFja2FnZURldGFpbHMuaGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtwYWNrYWdlRGV0YWlscy5zaGFyZV91cmx9IHRpdGxlPXt0aXRsZX0gcGxwSGVhZGluZz17cGFja2FnZURldGFpbHMucGxwX2hlYWRpbmcgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgIGJhY2tVcmw9e2xvY2F0aW9uLmFjdGlvbiA9PT0gJ1BPUCcgPyBiYWNrVXJsIDogJyd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UXVpY2tMaW5rTmF2IG9wdGlvbnM9e2NyZWF0ZUhlYWRlckNvbnN0YW50cyhwYWNrYWdlRGV0YWlscywgZmFxcyl9XG4gICAgICAgICAgICAgICAgICAgICAgZGVhbHNJbmZvPXtwYWNrYWdlRGV0YWlscy50aXRsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAvPlxuICAgICAgICA8QW1wQ2Fyb3VzZWxcbiAgICAgICAgICBpbWFnZXM9e3BhY2thZ2VEZXRhaWxzLnNsaWRlcl9waWN9XG4gICAgICAgICAgbmFtZT17cGFja2FnZURldGFpbHMubmFtZX1cbiAgICAgICAgICBjb3ZlcnM9e3BhY2thZ2VEZXRhaWxzLmNvdmVyc31cbiAgICAgICAgICBkZWFsc0luZm89e3BhY2thZ2VEZXRhaWxzLnRpdGxlc31cbiAgICAgICAgICBwcmljZT17cGFja2FnZURldGFpbHMucHJpY2V9XG4gICAgICAgICAgaXNEZWFsPXtpc0RlYWx9XG4gICAgICAgICAgaXNMdXh1cnk9e2lzTHV4dXJ5fVxuICAgICAgICAvPlxuICAgICAgICA8UGFja2FnZURldGFpbHNQcmljZSBob3RlbHM9e3BhY2thZ2VEZXRhaWxzLmhvdGVsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbHNJbmZvPXtwYWNrYWdlRGV0YWlscy50aXRsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrZz17cGFja2FnZURldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVhbD17aXNEZWFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0x1eHVyeT17aXNMdXh1cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhY2thZ2VEZXRhaWxzPXt0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4IHNiY3cgcDE1IHJlYWQtbW9yZS1jb250ZW50XCIgaWQ9XCJvdmVydmlld19ib3gtdHJpZ2dlcmxpbmtcIj5cbiAgICAgICAgICA8UmVhZE1vcmVCeUhlaWdodFxuICAgICAgICAgICAgaGVhZGluZz1cIk92ZXJ2aWV3XCJcbiAgICAgICAgICAgIHRpdGxlPVwiT3ZlcnZpZXdcIlxuICAgICAgICAgICAgcGxwSGVhZGluZz17cGFja2FnZURldGFpbHMucGxwX2hlYWRpbmd9XG4gICAgICAgICAgICBjb250ZW50PXtwYWNrYWdlRGV0YWlscy5vdmVydmlld31cbiAgICAgICAgICAgIG1heEhlaWdodD17NjR9XG4gICAgICAgICAgICBzaG93VGl0bGU9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwYWNrYWdlRGV0YWlscy5oaWdobGlnaHRzICYmIHBhY2thZ2VEZXRhaWxzLmhpZ2hsaWdodHMubGVuZ3RoID9cbiAgICAgICAgICAgIDxIaWdobGlnaHRzIGxpc3Q9e3BhY2thZ2VEZXRhaWxzLmhpZ2hsaWdodHN9IC8+IDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgIDxJdGluZXJhcnlcbiAgICAgICAgICAgIGl0aW5lcmFyeT17cGFja2FnZURldGFpbHMuaXRpbmVyYXJ5fVxuICAgICAgICAgICAgdGl0bGVIZWFkPSdJdGluZXJhcnknXG4gICAgICAgICAgICBpZD17cGFja2FnZURldGFpbHMuaWR9XG4gICAgICAgICAgICBwYWNrYWdlRGV0YWlscz17cGFja2FnZURldGFpbHN9XG4gICAgICAgICAgICBzZXRJdGluZXJhcnlEYXk9e3RoaXMuc2V0SXRpbmVyYXJ5RGF5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiaXRpbmVyYXJ5X3NlY3Rpb25fZGV0YWlsXCJcbiAgICAgICAgICAgICBjbGFzc05hbWU9e2l0aW5lcmFyeURheVZhbHVlICYmIGl0aW5lcmFyeURheVZhbHVlIDw9IHBhY2thZ2VEZXRhaWxzLml0aW5lcmFyeS5sZW5ndGggP1xuICAgICAgICAgICAgICAgXCJyb3cgcm93LSB6MTEgd2Z1bGwgaGZ1bGwgdDAgbDAgb3ZlcmZsb3dhIHNiY3dcIiA6IFwiaGlkZVwifT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWNrYWdlRGV0YWlscy5pdGluZXJhcnkubWFwKChpdGluZXJhcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnlcbiAgICAgICAgICAgICAgICAgIHBhY2thZ2VEZXRhaWxzPXtwYWNrYWdlRGV0YWlsc31cbiAgICAgICAgICAgICAgICAgIGRheT17aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgaXRpbmVyYXJ5PXtpdGluZXJhcnl9XG4gICAgICAgICAgICAgICAgICByZXNvdXJjZT17ZGV0YWlsc1Jlc291cmNlfVxuICAgICAgICAgICAgICAgICAgc2V0SXRpbmVyYXJ5RGF5PXt0aGlzLnNldEl0aW5lcmFyeURheX1cbiAgICAgICAgICAgICAgICAgIHNob3dTZWN0aW9uPXtpdGluZXJhcnlEYXlWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgIDxIb3RlbEZsaWdodFxuICAgICAgICAgICAgaG90ZWxzPXtwYWNrYWdlRGV0YWlscy5ob3RlbHN9XG4gICAgICAgICAgICBob3RlbFRpdGxlPSdIb3RlbCdcbiAgICAgICAgICAgIGZsaWdodHM9e3BhY2thZ2VEZXRhaWxzLmZsaWdodHN9XG4gICAgICAgICAgICAvLyB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudEV2ZW50fVxuICAgICAgICAgICAgaW5jbHVzaW9ucz17cGFja2FnZURldGFpbHMuaW5jRXhjLmluY2x1c2lvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgICAgPEluY0V4Y2x1c2lvblxuICAgICAgICAgICAgaW5jbHVzaW9ucz17cGFja2FnZURldGFpbHMuaW5jbHVzaW9uX3RleHR9XG4gICAgICAgICAgICBleGNsdXNpb25zPXtwYWNrYWdlRGV0YWlscy5leGNsdXNpb25fdGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJta3QtbW9iLWV4aXQtaW50ZW50IG1iOCByb3cgcm93LSBzYmN3IHB0MTUgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8YW1wLWlmcmFtZSB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2FuZGJveD1cImFsbG93LXNjcmlwdHMgYWxsb3ctcG9wdXBzIGFsbG93LWZvcm1zIGFsbG93LXNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2pzLnRyYXZlbHRyaWFuZ2xlLmNvbS9zdGFnZS9wdWJsaWMtcHJvZHVjdC9leGl0LWludGVudC12aWV3cG9ydC5odG1sP3Zhcj0yOTAxMjAyMHYxNiZ1dG1fc291cmNlPWJsb2cmbXZpZXc9dHJ1ZSZzcmNVcmw9Jy5nZXRfcGVybWFsaW5rKCkuJ2FtcC9cIj5cbiAgICAgICAgICA8L2FtcC1pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtmb290ZXJMaW5rcy5sZW5ndGggPyA8TGlua2luZyBmb290ZXJMaW5rcz17Zm9vdGVyTGlua3N9IC8+IDogbnVsbH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHBiOCBzYmM1XCI+XG4gICAgICAgICAgPEZhcVxuICAgICAgICAgICAgZmFxcz17ZmFxc31cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uPXtcbiAgICAgICAgICAgICAgcGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gcGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zWzBdXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT0nRkFRJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctICBzYmM1IHRyYXZlbGxlci1uZXctdWlcIj5cbiAgICAgICAgICA8VHJhdmVsZXJSZXZpZXdDb250YWluZXJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uPXtwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMgJiZcbiAgICAgICAgICAgIHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9ucy5sZW5ndGggJiZcbiAgICAgICAgICAgIHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9uc1swXS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgc2ltaWxhclBhY2thZ2VzLmxlbmd0aCA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHB0OCBwYjAgc2JjNSBzaW1pbGFyLXBhY2thZ2VzLW5ldy11aVwiPlxuICAgICAgICAgICAgICA8U2ltaWxhclBhY2thZ2VzXG4gICAgICAgICAgICAgICAgcGFja2FnZUlkPXtwYWNrYWdlSWR9XG4gICAgICAgICAgICAgICAgbG9hZGVkU2ltaWxhclBhY2thZ2VzPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNpbWlsYXJQYWNrYWdlcz17c2ltaWxhclBhY2thZ2VzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxIb3dJdFdvcmtzIC8+XG5cbiAgICAgICAge2JyZWFkY3J1bWJzLmxlbmd0aCA/IDxCcmVhZGNydW1iIGJyZWFkY3J1bWJzPXticmVhZGNydW1ic30gLz4gOiBudWxsfVxuXG4gICAgICAgIHtwYWNrYWdlRGV0YWlscy5mb290ZXJfc2VjdGlvbnMgJiYgcGFja2FnZURldGFpbHMuZm9vdGVyX3NlY3Rpb25zLmxlbmd0aCA/XG4gICAgICAgICAgPFNlb0Zvb3RlciBmb290ZXJTZWN0aW9ucz17cGFja2FnZURldGFpbHMuZm9vdGVyX3NlY3Rpb25zfSAvPiA6IG51bGx9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBiMCBsMCByMCB6MTAgcDggc2JjdyBiczRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IHBsMCBwcjhcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmktbGFyZ2UgcGwxNSBwcjE1IHdmdWxsIHJpcHBsZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJ0ZWw6ODQ0IDg0NCA5Mjg3XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FsbCBVc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTggcHIwIHBsMFwiPlxuICAgICAgICAgICAgPGEgaHJlZj17Zm9ybVVybH0gY2xhc3NOYW1lPVwid2Z1bGwgYnRuLWZpbGxlZC1wcmktbGFyZ2VcIj5DdXN0b21pemUgJiBHZXQgUXVvdGVzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGRwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBBY3Rpb24gZnJvbSAnYW1wL2hlbHBlcnMvQWN0aW9uJztcblxuY2xhc3MgUXVpY2tMaW5rTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgU2Nyb2xsTGluazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGVhbHNJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgU2Nyb2xsTGluazogKCkgPT4ge1xuICAgIH0sXG4gICAgZGVhbHNJbmZvOiB7fSxcbiAgICBsb2NhdGlvbjoge31cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBkZWFsc0luZm8sIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbVBpbGxzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LW91dGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aWNrbGlua3NDb250YWluZXIgZmxleCBzcGFjZUJldHdlZW4gc2JjdyBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub0JlZm9yZUFmdGVyIGZsZXggYWxpZ25DZW50ZXIgb3ZlcmZsb3dYc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleEZ1bGwgYWxpZ25DZW50ZXIgbTAgcDAgbGlzdC1yZXNldFwiPlxuICAgICAgICAgICAgICAgICAge29wdGlvbnMgJiYgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzPXt7IHRhcDogW2BBTVAuc2Nyb2xsVG8oJ2lkJyA9ICR7b3B0aW9uLnNlY3Rpb25fbmFtZSArICctdHJpZ2dlcmxpbmsnfSwgcG9zaXRpb249J2NlbnRlcicpYF0gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbGF0aXZlIGYxNCBmdzcgcGZjMyBwMTUgYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17b3B0aW9uLnNlY3Rpb25fbmFtZX0gey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoICYmIGRlYWxzSW5mby5vdmVydmlldy50b0xvd2VyQ2FzZSgpICE9PSAnZGVhbHMnID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcjE1IG1sMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndmdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGYxNCBmdzkgYnRuLXByaS1sYXJnZSBwbDE1IHByMTUgcHQ4IHBiOCBub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9yZXF1ZXN0ZWRfdHJpcHMvbmV3P212aWV3PXRydWUmc3JjVXJsPSR7bG9jYXRpb24ucGF0aG5hbWV9YH0+IEdldCBRdW90ZXMgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1aWNrTGlua05hdjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vUGFja2FnZUNpdGllcy5zY3NzJztcblxuY29uc3QgcmVuZGVyUGFja2FnZUNpdGllc0Zyb21BcnJheSA9IChjaXRpZXMsIGlzRGVhbHNDYXJkKSA9PiB7XG4gIGlmICghY2l0aWVzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2UtY2l0aWVzXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFja2FnZS1jaXRpZXMtbGlzdFwiPlxuICAgICAgICB7Y2l0aWVzLm1hcCgoY2l0eSwgaSkgPT4gPGxpIGNsYXNzTmFtZT17aXNEZWFsc0NhcmQgPyAnZjEyJyA6ICcnfSBrZXk9e2l9PntjaXR5fTwvbGk+KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG5cbn07XG5cbmNvbnN0IHJlbmRlclBhY2thZ2VDaXRpZXNGcm9tT2JqZWN0ID0gKGNpdGllc1dpdGhEYXlzLCBpc0RlYWxzQ2FyZCkgPT4ge1xuICBjb25zdCBjaXRpZXMgPSBPYmplY3Qua2V5cyhjaXRpZXNXaXRoRGF5cyk7XG5cbiAgaWYgKCFjaXRpZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZS1jaXRpZXNcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWNrYWdlLWNpdGllcy1saXN0XCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdzcgZjEyIGxpc3QtaGVhZGluZyBoaWRlXCI+Q2l0aWVzOjwvbGk+XG4gICAgICAgIHtcbiAgICAgICAgICBjaXRpZXMubWFwKChjaXR5LCBpKSA9PiA8bGkgY2xhc3NOYW1lPXtpc0RlYWxzQ2FyZCA/ICdmMTInIDogJyd9IGtleT17aX0+XG4gICAgICAgICAgICB7Y2l0eX0ge2NpdGllc1dpdGhEYXlzW2NpdHldID8gYCAoJHtjaXRpZXNXaXRoRGF5c1tjaXR5XX1EKWAgOiBudWxsfVxuICAgICAgICAgIDwvbGk+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUGFja2FnZUNpdGllcyA9ICh7IGNpdGllcywgaXNEZWFsc0NhcmQgfSkgPT4ge1xuICBpZiAoY2l0aWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gcmVuZGVyUGFja2FnZUNpdGllc0Zyb21BcnJheShjaXRpZXMsIGlzRGVhbHNDYXJkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVuZGVyUGFja2FnZUNpdGllc0Zyb21PYmplY3QoY2l0aWVzLCBpc0RlYWxzQ2FyZCk7XG4gIH1cbn07XG5cblBhY2thZ2VDaXRpZXMucHJvcFR5cGVzID0ge1xuICBjaXRpZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLmlzUmVxdWlyZWQsXG4gIGlzRGVhbHNDYXJkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZUNpdGllcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzRGVhbHNDYXJkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUNpdGllcztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhY2thZ2UtY2l0aWVzXCI6IFwiXzJqODk0XCIsXG5cdFwicGFja2FnZS1jaXRpZXMtbGlzdFwiOiBcIl9uVEwwRlwiLFxuXHRcImYxMlwiOiBcIl8zeFA1N1wiLFxuXHRcImFkZENvbXBhcmVEaXZcIjogXCJfMmxkVUJcIixcblx0XCJmaXhlZC1tZW51LWJ1dHRvblwiOiBcIl8xTHl0WlwiXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRQZXJjZW50YWdlIH0gZnJvbSAnYW1wL3V0aWxzL3BhcnNlcnMnO1xuaW1wb3J0IEFjdGlvbiBmcm9tICdhbXAvaGVscGVycy9BY3Rpb24nO1xuaW1wb3J0ICdhbXAvbW9kdWxlcy9wYWNrYWdlQ2FyZC9QYWNrYWdlRGF5c0Rpc2NvdW50LnNjc3MnO1xuXG5jbGFzcyBQYWNrYWdlRGF5c0Rpc2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJpY2UsIGRpc2NvdW50LCBoaWRlRGlzY291bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtdDhcIj5cbiAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyB0YXA6IFsnQU1QLnNldFN0YXRlKHtzaG93VG9vbFRpcCA6ICFzaG93VG9vbFRpcH0pJ10gfX0+XG4gICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b24gey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhY2thZ2UtaW5mby1pY29uIHBhY2thZ2UtaW5mby1pY29uLWN1c3RvbS1sZWZ0IHJlbGF0aXZlIGZyaWdodFwiXG4gICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1hbXAtYmluZC1jbGFzcz17YHNob3dUb29sVGlwID8gJyc6J2hpZGUnYH0gY2xhc3NOYW1lPVwiaGlkZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hpZGVEaXNjb3VudCA/ICd0b29sdGlwLXVwd2FyZHMnIDogJ3Rvb2x0aXBkYXRhLXVwJ30+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBzZmN3IG0wIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEV4YWN0IHByaWNlcyBtYXkgdmFyeSBiYXNlZCBvbiBhdmFpbGFiaWxpdHkuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BY3Rpb24+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIWhpZGVEaXNjb3VudCA/XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50LXJpYmJvbiBmcmlnaHQgbXI1IG1sNVwiPntnZXRQZXJjZW50YWdlKHsgcHJpY2UsIGRpc2NvdW50IH0pfSUgT2ZmPC9zcGFuPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWNrYWdlRGF5c0Rpc2NvdW50LnByb3BUeXBlcyA9IHtcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaGlkZURpc2NvdW50OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZURheXNEaXNjb3VudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGVEaXNjb3VudDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VEYXlzRGlzY291bnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBhY2thZ2VQcmljZSBmcm9tICcuL1BhY2thZ2VQcmljZSc7XG5pbXBvcnQgUGFja2FnZUNpdGllcyBmcm9tICcuL1BhY2thZ2VDaXRpZXMnO1xuaW1wb3J0IFBhY2thZ2VJbmNFeGMgZnJvbSAnLi9QYWNrYWdlSW5jRXhjJztcbmltcG9ydCBTdGFyTW9udGhGaWx0ZXIgZnJvbSAnLi9TdGFyTW9udGhGaWx0ZXInO1xuXG5pbXBvcnQgJy4vUGFja2FnZUluY0V4Yy5zY3NzJztcblxuY29uc3QgUGFja2FnZURldGFpbHNQcmljZSA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGtnLCBkZWFsc0luZm8sIGlzRGVhbCwgaXNMdXh1cnksIHVwZGF0ZSwgcHVzaFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTW9udGgsIHBhY2thZ2VEZXRhaWxzLCB1cGRhdGVTZWxlY3RlZE1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByaWNlQ2FsbEJhY2ssIGFuaW1hdGlvblByaWNlLCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gIGNvbnN0IHsgcGFja2FnZV9vcHRpb25zLCBoaWRlRGlzY291bnQgfSA9IHBrZztcbiAgY29uc3QgeyBob3RlbF9wcmljZV9kZXRhaWxzIH0gPSBwYWNrYWdlX29wdGlvbnM7XG4gIGNvbnN0IGhvdGVsUmF0aW5ncyA9IGhvdGVsX3ByaWNlX2RldGFpbHMubWFwKGhvdGVsID0+IGhvdGVsLmhvdGVsX3N0YXIpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgY29uc3QgZmlsdGVyZWRIb3RlbFJhdGluZ3MgPSBob3RlbFJhdGluZ3MucmVkdWNlKCh1bmlxdWUsIGl0ZW0pID0+IHVuaXF1ZS5pbmNsdWRlcyhpdGVtKSA/IHVuaXF1ZSA6IFsuLi51bmlxdWUsIGl0ZW1dLCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOCBzYmN3XCI+XG4gICAgICA8U3Rhck1vbnRoRmlsdGVyXG4gICAgICAgICAgdXBkYXRlPXt1cGRhdGV9XG4gICAgICAgICAgcHVzaFN0YXRlPXtwdXNoU3RhdGV9XG4gICAgICAgICAgc2VsZWN0ZWRNb250aD17c2VsZWN0ZWRNb250aCB8fCAwfVxuICAgICAgICAgIHBhY2thZ2VEZXRhaWxzPXtwYWNrYWdlRGV0YWlsc31cbiAgICAgICAgICB1cGRhdGVTZWxlY3RlZE1vbnRoPXt1cGRhdGVTZWxlY3RlZE1vbnRofVxuICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICBpc0RlYWxPckx1eHVyeT17aXNEZWFsIHx8IGlzTHV4dXJ5fVxuICAgICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTVcIj5cbiAgICAgICAgPFBhY2thZ2VDaXRpZXMgY2l0aWVzPXtwa2cuY2l0eV9saXN0X3dpdGhfZGF5cyB8fCB7fX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgcGI0IHB0MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBtYjgnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgZnc5IHNiY28nPlxuICAgICAgICAgICAgICB7cGtnLmNvdmVycy5kYXlzfSBEYXlzICYge3BrZy5jb3ZlcnMubmlnaHRzfSBOaWdodHNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIHsoaXNEZWFsIHx8IGlzTHV4dXJ5KSAmJiBwa2cuaG90ZWxzLmxlbmd0aCA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sNSBtcjUgaWJsb2NrJz58PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBhdF9ob3RlbHN0YXInPlxuICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkSG90ZWxSYXRpbmdzLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2YxMiBmdzQgbWw1Jz5TdGFyIEhvdGVscyBJbmNsdWRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBhbGlnbkNlbnRlcmB9PlxuICAgICAgICAgICAgPFBhY2thZ2VQcmljZVxuICAgICAgICAgICAgICBwcmljZT17cGtnLnByaWNlLnRvdGFsfVxuICAgICAgICAgICAgICBwcmljZVVuaXQ9e3BrZy5wcmljZS5taW5pRGVzY31cbiAgICAgICAgICAgICAgY3VycmVuY3k9e3BrZy5wcmljZS5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgZGlzY291bnQ9e3BrZy5wcmljZS5kaXNjb3VudH1cbiAgICAgICAgICAgICAgcHJpY2VGcm9tPXtwa2cucHJpY2UuZnJvbX1cbiAgICAgICAgICAgICAgcHJpY2VUbz17cGtnLnByaWNlLnRvfVxuICAgICAgICAgICAgICBkZWFsc0luZm89e2lzRGVhbCB8fCBpc0x1eHVyeX1cbiAgICAgICAgICAgICAgZGF5cz17cGtnLmNvdmVycy5kYXlzfVxuICAgICAgICAgICAgICBuaWdodHM9e3BrZy5jb3ZlcnMubmlnaHRzfVxuICAgICAgICAgICAgICBhbmltYXRpb25QcmljZT17YW5pbWF0aW9uUHJpY2V9XG4gICAgICAgICAgICAgIGhpZGVEaXNjb3VudD17aGlkZURpc2NvdW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwMCc+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNEZWFsICYmIGRlYWxzSW5mby5pdGluZXJhcnkgP1xuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMiBtdDgnPjxzdHJvbmc+VmFsaWRpdHk6IDwvc3Ryb25nPiB7ZGVhbHNJbmZvLml0aW5lcmFyeX08L3A+IDpcbiAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXItbGluZSBzYmM1IHJvdyBibG9ja1wiLz5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3OSBmdzkgbXQxNSBtYjE1XCI+UHJpY2UgSW5jbHVzaXZlIG9mPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaW5jbHVzaW9uLWhlaWdodC1ib3hcIj5cbiAgICAgICAgICA8UGFja2FnZUluY0V4YyBpbmNsdXNpb25zPXtwa2cuaW5jbHVzaW9uc30gaWQ9e2BkZXRhaWxzXyR7cGtnLmlkfWB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWNrYWdlRGV0YWlsc1ByaWNlLnByb3BUeXBlcyA9IHtcbiAgcGtnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRlYWxzSW5mbzogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRGVhbDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzTHV4dXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcHVzaFN0YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWRNb250aDogUHJvcFR5cGVzLm51bWJlcixcbiAgcGFja2FnZURldGFpbHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1cGRhdGVTZWxlY3RlZE1vbnRoOiBQcm9wVHlwZXMuZnVuYyxcbiAgdXBkYXRlUHJpY2VDYWxsQmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGFuaW1hdGlvblByaWNlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZURldGFpbHNQcmljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlYWxzSW5mbzogZmFsc2UsXG4gIGlzRGVhbDogZmFsc2UsXG4gIGlzTHV4dXJ5OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZURldGFpbHNQcmljZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJ2FtcC91dGlscy9wYXJzZXJzJztcbmltcG9ydCBZZWxsb3dEb3QgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL1llbGxvd0RvdCc7XG5pbXBvcnQgJy4vUGFja2FnZUluY0V4Yy5zY3NzJztcbmltcG9ydCBJY29uc01hcHBpbmcgZnJvbSAnYW1wL2hlbHBlcnMvSWNvbi9JY29uTWFwcGluZ3MnO1xuXG5jb25zdCBJbmNsdXNpb25Ob3RpZmljYXRpb24gPSBbJ2ZsaWdodHMnXTtcblxuY29uc3QgZ2V0SWNvblRleHQgPSAoaW5jbHVzaW9uLCBob3RlbEluZm8pID0+IHtcbiAgaWYgKGluY2x1c2lvbi5rZXkgPT09ICdob3RlbCcgJiYgaG90ZWxJbmZvKSB7XG4gICAgcmV0dXJuIGBVcHRvICR7aG90ZWxJbmZvWzBdfSBTdGFyc2A7XG4gIH1cbiAgcmV0dXJuIGluY2x1c2lvbi50ZXh0O1xufTtcblxuY29uc3QgUGFja2FnZUluY0V4YyA9ICh7IGluY2x1c2lvbnMsIGlkLCBub1Njcm9sbCwgaG90ZWxJbmZvLCBpc1BhY2thZ2VSZXZhbXAgfSkgPT4ge1xuICBjb25zdCBpbmNsdXNpb25zQXZhbCA9IGlzUGFja2FnZVJldmFtcCA/IGluY2x1c2lvbnMuZmlsdGVyKGluY2x1c2lvbiA9PlxuICAgIGluY2x1c2lvbi5hdmFpbGFibGUpLnNsaWNlKDAsNCkgOiBpbmNsdXNpb25zO1xuXG4gIGNvbnN0IGluY2x1c2lvbkxpc3QgPSBpbmNsdXNpb25zQXZhbC5tYXAoXG4gICAgKGluY2x1c2lvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGljb25OYW1lID0gSWNvbnNNYXBwaW5nW2NhcGl0YWxpemVGaXJzdExldHRlcihpbmNsdXNpb24ua2V5LnJlcGxhY2UoL1tcXHMtX10vZywgJycpKV0gfHwgJ0RlZmF1bHRJY29uJztcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudENsYXNzID0gaW5jbHVzaW9uLmF2YWlsYWJsZSA/ICcnIDogJ25vdC1pbmNsdWRlZCc7XG4gICAgICBjb25zdCBkaXNhYmxlZEljb25DbGFzcyA9IGluY2x1c2lvbi5hdmFpbGFibGUgPyAnJyA6ICdncmV5c2NhbGUnO1xuICAgICAgY29uc3QgaW5jbHVzaW9uVGV4dEhpZGRlbiA9IGluY2x1c2lvbi50ZXh0ID8gJycgOiAnaGlkZSc7XG4gICAgICBjb25zdCBJbmNsdXNpb25Ob3RpZmljYXRpb25QcmVzZW50ID0gKGluY2x1c2lvbi5hdmFpbGFibGUgJiYgKEluY2x1c2lvbk5vdGlmaWNhdGlvbi5pbmRleE9mKGluY2x1c2lvbi5rZXkpID4gLTEpKSA/ICdyZWxhdGl2ZScgOiAnJztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbmNsLWV4Y2wtYm94ICR7aW5jbHVzaW9uVGV4dEhpZGRlbn0gJHtkaXNhYmxlZEVsZW1lbnRDbGFzc30gJHtJbmNsdXNpb25Ob3RpZmljYXRpb25QcmVzZW50fWB9IGtleT17YCR7aWR9XyR7aW5jbHVzaW9uLmtleX1fJHtpbmRleH1gfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAoaW5jbHVzaW9uLmF2YWlsYWJsZSAmJiAoSW5jbHVzaW9uTm90aWZpY2F0aW9uLmluZGV4T2YoaW5jbHVzaW9uLmtleSkgPiAtMSkpID9cbiAgICAgICAgICAgIDxZZWxsb3dEb3QgaWQ9XCJmbGlnaHRNZXNzYWdlXCIgZG90Qm94U3R5bGU9e3sgd2lkdGg6ICcxMHB4JywgaGVpZ2h0OiAnMTBweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc2cHgnLCByaWdodDogJzNweCcgfX0gZG90U21hbGxCb3hTdHlsZT17eyB3aWR0aDogJzVweCcsIGhlaWdodDogJzVweCcgfX0gc3Bpbm5lclN0eWxlPXt7IHdpZHRoOiAnMTBweCcsIGhlaWdodDogJzEwcHgnLCB6SW5kZXg6ICcxJyB9fSAgaG92ZXJEYXRhPVwiRmxpZ2h0IHByaWNlcyBhcmUgZHluYW1pYyBhbmQgbWF5IGNoYW5nZSBhdCB0aGUgdGltZSBvZiBib29raW5nXCIgLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmNsLWV4Y2wtaW1nXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBgdXJsKCdodHRwczovL2pzLnRyYXZlbHRyaWFuZ2xlLmNvbS9wdWJsaWMtcHJvZHVjdC9hbXAtaWNvbnMtdjAuc3ZnIyR7aWNvbk5hbWV9LXVzYWdlJykgbm8tcmVwZWF0YH19PlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTBcIj57Z2V0SWNvblRleHQoaW5jbHVzaW9uLCBob3RlbEluZm8pfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHJvdyByb3ctIGluY2wtZXhjbC1jb24gJHtub1Njcm9sbCA/ICdpbmMtbm8tc2Nyb2xsJyA6ICcnfSBgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaW5jbC1leGNsLWNvbi1pbm5lclwiPlxuICAgICAgICB7aW5jbHVzaW9uTGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFja2FnZUluY0V4Yy5wcm9wVHlwZXMgPSB7XG4gIGluY2x1c2lvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBob3RlbEluZm86IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbm9TY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICBpc1BhY2thZ2VSZXZhbXA6IFByb3BUeXBlcy5ib29sXG59O1xuXG5QYWNrYWdlSW5jRXhjLmRlZmF1bHRQcm9wcyA9IHtcbiAgbm9TY3JvbGw6IGZhbHNlLFxuICBpZDogJ2RlZmF1bHRfMScsXG4gIGlzUGFja2FnZVJldmFtcDogZmFsc2Vcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUluY0V4YztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRpdmlkZXItbGluZVwiOiBcIl8yLVI3eVwiLFxuXHRcImluY2x1c2lvbi1oZWlnaHQtYm94XCI6IFwiXzNwbkZYXCIsXG5cdFwiaW5jbC1leGNsLWNvblwiOiBcIl8yMWlITFwiLFxuXHRcImluY2wtZXhjbC1jb24taW5uZXJcIjogXCJfMU82Z3lcIixcblx0XCJwYWNrYWdlLWNhcmRcIjogXCJfMXVBY0JcIixcblx0XCJpbmNsLWV4Y2wtY29uLWlubmVyLWRlYWxzXCI6IFwiXzNQX1ZoXCIsXG5cdFwiaW5jbC1leGNsLWJveFwiOiBcIl9TQjFnM1wiLFxuXHRcIm5vdC1pbmNsdWRlZFwiOiBcIl8zWXEwa1wiLFxuXHRcImluY2wtZXhjbC1pbWdcIjogXCJfM3lJNTNcIixcblx0XCJpbmMtbm8tc2Nyb2xsXCI6IFwiXzI5QjJDXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdldFBlcmNlbnRhZ2UsIHBhcnNlUHJpY2UgfSBmcm9tICdhbXAvdXRpbHMvcGFyc2Vycyc7XG5pbXBvcnQgUGFja2FnZURheXNEaXNjb3VudCBmcm9tICcuL1BhY2thZ2VEYXlzRGlzY291bnQnO1xuXG5jb25zdCBQYWNrYWdlUHJpY2UgPSAoeyBwcmljZVVuaXQsIHByaWNlLCBkaXNjb3VudCwgY3VycmVuY3ksIHByaWNlRnJvbSwgcHJpY2VUbywgZGVhbHNJbmZvLCBkYXlzLCBuaWdodHMsIGhpZGVEaXNjb3VudCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gZmxleCB3ZnVsbCBhbGlnbkNlbnRlclwiPlxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTIgcGZjNCBwYjUgZnc0XCI+U3RhcnRpbmcgZnJvbTo8L3A+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwicGFja2FnZS1wcmljZSBzZmMzIGZ3NyBmMjQgcGIwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1hbXAtYmluZC10ZXh0PVwic2VsZWN0ZWRNb250aCA/IGZpbHRlclByaWNlW3NlbGVjdGVkTW9udGhdLnN0YXJ0X3ByaWNlKycvLScgOlxuICAgICAgICAgICAgZmlsdGVyUHJpY2VbJ2RlZmF1bHRfc3RhcnRfcHJpY2UnXSsnLy0nXCI+XG4gICAgICAgICAgICB7cGFyc2VQcmljZSh7IHByaWNlOiBwcmljZUZyb20gfHwgKHByaWNlIC0gZGlzY291bnQpLCBjdXJyZW5jeSB9KX0vLVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAhaGlkZURpc2NvdW50ID9cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWFtcC1iaW5kLXRleHQ9XCJzZWxlY3RlZE1vbnRoID8gZmlsdGVyUHJpY2Vbc2VsZWN0ZWRNb250aF0uZW5kX3ByaWNlKycvLSc6XG4gICAgICAgICAgICBmaWx0ZXJQcmljZVsnZGVmYXVsdF9lbmRfcHJpY2UnXSsnLy0nXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmMTIgZnc0IG1sOCBwZmMzIHRkbFwiPlxuICAgICAgICAgICAgICB7cGFyc2VQcmljZSh7IHByaWNlOiBwcmljZVRvIHx8IHByaWNlLCBjdXJyZW5jeSB9KX0vLVxuICAgICAgICAgICAgPC9zcGFuPiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9oND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMlwiPntwcmljZVVuaXR9PC9wPlxuICAgIDwvZGl2PlxuICAgIHtkZWFsc0luZm8gJiYgIWhpZGVEaXNjb3VudCA/IDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50LXJpYmJvbiBmcmlnaHQgbXQyNCBtbDhcIj57Z2V0UGVyY2VudGFnZSh7IHByaWNlLCBkaXNjb3VudCB9KX0lIE9mZjwvc3Bhbj4gOiBudWxsfVxuICAgIHtkZWFsc0luZm8gP1xuICAgICAgbnVsbCA6XG4gICAgICA8UGFja2FnZURheXNEaXNjb3VudFxuICAgICAgICBkYXlzPXtkYXlzfVxuICAgICAgICBuaWdodHM9e25pZ2h0c31cbiAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICBkaXNjb3VudD17ZGlzY291bnR9XG4gICAgICAgIGhpZGVEaXNjb3VudD17aGlkZURpc2NvdW50fVxuICAgICAgLz5cbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuUGFja2FnZVByaWNlLnByb3BUeXBlcyA9IHtcbiAgcHJpY2VVbml0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBkaXNjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpY2VGcm9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICBwcmljZVRvOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkYXlzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuaWdodHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlYWxzSW5mbzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaGlkZURpc2NvdW50OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZVByaWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJpY2VVbml0OiAncGVyIHBlcnNvbicsXG4gIGN1cnJlbmN5OiAnUnVwZWUnLFxuICBoaWRlRGlzY291bnQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlUHJpY2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnYXBwQ29uZmlnJztcblxuaW1wb3J0IHsgZ2V0Q3VycmVudE1vbnRoIH0gZnJvbSAnaGVscGVycy9EYXRlVGltZSc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5pbXBvcnQgeyBwYXJzZVByaWNlIH0gZnJvbSAnYW1wL3V0aWxzL3BhcnNlcnMnO1xuXG5pbXBvcnQgJy4vU3Rhck1vbnRoRmlsdGVyLnNjc3MnO1xuXG5jbGFzcyBTdGFyTW9udGhGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMubW9udGggPSB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLm1vbnRoX29wdGlvbnMubW9udGhfcmFuZ2VzIHx8IFtdO1xuICAgICAgb3B0aW9ucy5wYWNrYWdlID0gdGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscy5wYWNrYWdlX29wdGlvbnMuaG90ZWxfcHJpY2VfZGV0YWlscyB8fCBbXTtcbiAgICAgIG9wdGlvbnMuY2hlY2tlZCA9IHtcbiAgICAgICAgbW9udGg6IHRoaXMucHJvcHMuc2VsZWN0ZWRNb250aCB8fCBnZXRDdXJyZW50TW9udGgoKSArIDEsXG4gICAgICAgIHBhY2thZ2U6IG9wdGlvbnMucGFja2FnZS5maWx0ZXIoZSA9PiBlLmlzX2NoZWNrZWQpWzBdLnBhY2thZ2VfaWRcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgb3B0aW9ucy5tb250aCA9IFtdO1xuICAgICAgb3B0aW9ucy5wYWNrYWdlID0gW107XG4gICAgICBvcHRpb25zLmNoZWNrZWQgPSB7XG4gICAgICAgIG1vbnRoOiBudWxsLFxuICAgICAgICBwYWNrYWdlOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb250aDogb3B0aW9ucy5jaGVja2VkLm1vbnRoLFxuICAgICAgcGFja2FnZTogb3B0aW9ucy5jaGVja2VkLnBhY2thZ2UsXG4gICAgICBvcHRpb25zXG4gICAgfTtcbiAgfVxuXG4gIHNvcnRTdGFyT3B0aW9ucyA9IChvcHRpb25zKSA9PiAoXG4gICAgb3B0aW9ucy5tYXAob3B0ID0+IHtcbiAgICAgIGNvbnN0IHsgcGFja2FnZURldGFpbHMgOiB7IHNldF91cmwgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHZhbHVlID0gYCR7YXBwQ29uZmlnLmFwaV9wcm90b2NvbH0vLyR7YXBwQ29uZmlnLnNlcnZlci5wdWJsaWMuaG9zdH0vcGFja2FnZXMvJHtzZXRfdXJsfT9pZD0ke29wdC5wYWNrYWdlX2lkfWA7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0LnBhY2thZ2VfaWR9IHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICAge2BVcHRvICR7b3B0LmhvdGVsX3N0YXJ9IHN0YXIgaG90ZWxzYH1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgc29ydE1vbnRoT3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgeyBwYWNrYWdlRGV0YWlsczogeyBpZCB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICBvcHRpb25zLm1hcChvcHQgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0LmlkfSB2YWx1ZT17b3B0LmlkfT5cbiAgICAgICAgICB7b3B0Lm1vbnRoX3ZhbHVlfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICkpXG4gICAgKTtcbiAgfTtcblxuICBnZXRTZWxlY3RlZFN0YXJEZXRhaWwgPSAocGFja2FnZV9pZCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzICYmXG4gICAgICB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLnBhY2thZ2Vfb3B0aW9ucyAmJlxuICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscy5wYWNrYWdlX29wdGlvbnMuaG90ZWxfcHJpY2VfZGV0YWlscyAmJlxuICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscy5wYWNrYWdlX29wdGlvbnMuaG90ZWxfcHJpY2VfZGV0YWlsc1xuICAgICAgICAuZmlsdGVyKGhvdGVsID0+IGhvdGVsLnBhY2thZ2VfaWQgPT09IHBhcnNlSW50KHBhY2thZ2VfaWQpKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFja2FnZURldGFpbHMsIGxvY2F0aW9uLCBpc0RlYWxPckx1eHVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG9wdGlvbnMsIG1vbnRoIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBvcHRpb25zLm1vbnRoLm1hcChvcHQgPT4ge1xuICAgICAgb3B0LnN0YXJ0X3ByaWNlID0gcGFyc2VQcmljZSh7IHByaWNlOiBvcHQuc3RhcnRfcHJpY2UgfSk7XG4gICAgICBvcHQuZW5kX3ByaWNlID0gcGFyc2VQcmljZSh7IHByaWNlOiBvcHQuZW5kX3ByaWNlIH0pO1xuICAgICAgZGF0YVtvcHQuaWRdID0gb3B0O1xuICAgIH0pO1xuXG4gICAgZGF0YS5kZWZhdWx0X3N0YXJ0X3ByaWNlID0gZGF0YVttb250aF0uc3RhcnRfcHJpY2U7XG4gICAgZGF0YS5kZWZhdWx0X2VuZF9wcmljZSA9IGRhdGFbbW9udGhdLmVuZF9wcmljZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGFtcC1zdGF0ZSBpZD1cImZpbHRlclByaWNlXCI+XG4gICAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgIDwvYW1wLXN0YXRlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNEZWFsT3JMdXh1cnkgPyAnaGlkZScgOiAnY2xlYXJmaXggcDE1IHNiY3cgYmInfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHBsMCBwcjRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmdzkgbWI1XCI+SG90ZWwgU3RhciBSYXRpbmc8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGRyb3BEb3duLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyBjaGFuZ2U6IFsnQU1QLm5hdmlnYXRlVG8odXJsPWV2ZW50LnZhbHVlKSddIH19PlxuICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3B0aW9ucy5wYWNrYWdlLmxlbmd0aCAmJiB0aGlzLnNvcnRTdGFyT3B0aW9ucyh0aGlzLnN0YXRlLm9wdGlvbnMucGFja2FnZSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0FjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcGw0IHByMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IGZ3OSBtYjVcIj5Nb250aCBvZiBUcmF2ZWw8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGRyb3BEb3duLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyBjaGFuZ2U6IFsnQU1QLnNldFN0YXRlKHtzZWxlY3RlZE1vbnRoIDogZXZlbnQudmFsdWV9KSddIH19PlxuICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8c2VsZWN0IHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9wdGlvbnMubW9udGgubGVuZ3RoICYmIHRoaXMuc29ydE1vbnRoT3B0aW9ucyh0aGlzLnN0YXRlLm9wdGlvbnMubW9udGgpfVxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+O1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIDwvQWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TdGFyTW9udGhGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBzdGFyUmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb250aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFja2FnZURldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXBkYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVTZWxlY3RlZE1vbnRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkTW9udGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaXNEZWFsT3JMdXh1cnk6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5TdGFyTW9udGhGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzdGFyUmF0aW5nOiAzLFxuICBtb250aDogJ01heSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJNb250aEZpbHRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRyb3BEb3duLWNvbnRhaW5lclwiOiBcIl8yakhQNVwiXG59OyIsImNvbnN0IGNhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyID0gc3RyaW5nID0+IHtcbiAgbGV0IHNlcGFyYXRvciA9ICcgJztcbiAgaWYgKHN0cmluZy5tYXRjaCgnLScpKSB7XG4gICAgc2VwYXJhdG9yID0gJy0nO1xuICB9XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoc2VwYXJhdG9yKS5tYXAoeCA9PiB4LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeC5zbGljZSgxKSkuam9pbihzZXBhcmF0b3IpO1xufTtcblxuY29uc3QgY3VycmVuY3lTeW1ib2xzID0ge1xuICBSdXBlZTogJ+KCuScsXG4gIElOUjogJ+KCuScsXG4gIERvbGxhcjogJyQnLFxuICBFdXJvOiAn4oKsJyxcbiAgU0dEOiAnUyQnLFxuICBNWVI6ICdNWVInLFxuICBQSFA6ICdQSFAnLFxuICBHQlA6ICfCoycsXG4gIEFVRDogJ0EkJyxcbiAgQ0FEOiAnQyQnLFxuICBTQVI6ICdTQVInLFxuICBMQlA6ICdMQlAnLFxuICBaQVI6ICdaQVInLFxuICBQS1I6ICdQS1InLFxuICBBRUQ6ICdBRUQnLFxuICBDSEY6ICdDSEYnLFxuICBKUFk6ICdKUFknLFxuICBOWkQ6ICdOWiQnXG59O1xuXG5jb25zdCBnZXRQZXJjZW50YWdlID0gKHsgcHJpY2UgPSAwLCBkaXNjb3VudCA9IDAgfSkgPT4gTWF0aC5yb3VuZCgoZGlzY291bnQgLyBwcmljZSkgKiAxMDApO1xuXG5jb25zdCBwYXJzZVByaWNlID0gKHsgcHJpY2UsIGN1cnJlbmN5ID0gJ1J1cGVlJyB9KSA9PlxuICBgJHtjdXJyZW5jeVRvU3ltYm9sKGN1cnJlbmN5KX0ke251bWJlcldpdGhDb21tYXMoTWF0aC5yb3VuZChwcmljZSkpfWA7XG5cbmNvbnN0IGN1cnJlbmN5VG9TeW1ib2wgPSBjdXJyZW5jeSA9PiAoY3VycmVuY3lTeW1ib2xzW2N1cnJlbmN5XSB8fCBjdXJyZW5jeSk7XG5cbmNvbnN0IG51bWJlcldpdGhDb21tYXMgPSAobnVtYmVyKSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gKG51bWJlciB8fCAnJykudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgcmV0dXJuIHBhcnRzLmpvaW4oXCIuXCIpO1xufTtcblxuY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gc3RyaW5nID0+IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblxuY29uc3QgcGFyc2VEZXN0aW5hdGlvbnNUb1Nob3cgPSAoZGVzdGluYXRpb25zID0gW10sIHNlcGFyYXRlciA9ICctJykgPT4gZGVzdGluYXRpb25zLmpvaW4oc2VwYXJhdGVyKTtcblxuXG5jb25zdCBwYXJzZURlc3RpbmF0aW9uVG9TaG93ID0gKGRlc3RpbmF0aW9uID0gJycpID0+IHtcbiAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgcmV0dXJuIGNhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKGRlc3RpbmF0aW9uKS5yZXBsYWNlKC8tL2csICcgJyk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnQge1xuICBnZXRQZXJjZW50YWdlLFxuICBwYXJzZVByaWNlLFxuICBjdXJyZW5jeVRvU3ltYm9sLFxuICBudW1iZXJXaXRoQ29tbWFzLFxuICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXG4gIHBhcnNlRGVzdGluYXRpb25zVG9TaG93LFxuICBwYXJzZURlc3RpbmF0aW9uVG9TaG93XG59O1xuIiwiZXhwb3J0IGNvbnN0IEluY2x1c2lvbk5vdGlmaWNhdGlvbiA9IFsnZmxpZ2h0cyddO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG4iLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDZWlsID0gTWF0aC5jZWlsLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgZWxlbWVudHMgc3BsaXQgaW50byBncm91cHMgdGhlIGxlbmd0aCBvZiBgc2l6ZWAuXG4gKiBJZiBgYXJyYXlgIGNhbid0IGJlIHNwbGl0IGV2ZW5seSwgdGhlIGZpbmFsIGNodW5rIHdpbGwgYmUgdGhlIHJlbWFpbmluZ1xuICogZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xXSBUaGUgbGVuZ3RoIG9mIGVhY2ggY2h1bmtcbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjaHVua3MuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2h1bmsoWydhJywgJ2InLCAnYycsICdkJ10sIDIpO1xuICogLy8gPT4gW1snYScsICdiJ10sIFsnYycsICdkJ11dXG4gKlxuICogXy5jaHVuayhbJ2EnLCAnYicsICdjJywgJ2QnXSwgMyk7XG4gKiAvLyA9PiBbWydhJywgJ2InLCAnYyddLCBbJ2QnXV1cbiAqL1xuZnVuY3Rpb24gY2h1bmsoYXJyYXksIHNpemUsIGd1YXJkKSB7XG4gIGlmICgoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChhcnJheSwgc2l6ZSwgZ3VhcmQpIDogc2l6ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHNpemUgPSAxO1xuICB9IGVsc2Uge1xuICAgIHNpemUgPSBuYXRpdmVNYXgodG9JbnRlZ2VyKHNpemUpLCAwKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGlmICghbGVuZ3RoIHx8IHNpemUgPCAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBpbmRleCA9IDAsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShuYXRpdmVDZWlsKGxlbmd0aCAvIHNpemUpKTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbcmVzSW5kZXgrK10gPSBiYXNlU2xpY2UoYXJyYXksIGluZGV4LCAoaW5kZXggKz0gc2l6ZSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2h1bms7XG4iLCJ2YXIgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwODtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvRmluaXRlO1xuIiwidmFyIHRvRmluaXRlID0gcmVxdWlyZSgnLi90b0Zpbml0ZScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSW50ZWdlcjtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==