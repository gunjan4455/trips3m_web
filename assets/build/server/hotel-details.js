require("source-map-support").install();
exports.ids = ["hotel-details"];
exports.modules = {

/***/ "./app-v2/modules/hdp/Amenities.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/hdp/Amenities.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var Icons = _interopRequireWildcard(__webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js"));

var _parsers = __webpack_require__(/*! ../../../app/helpers/parsers */ "./app/helpers/parsers.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _ReadMoreByHeight = _interopRequireDefault(__webpack_require__(/*! modules/shared/ReadMoreByHeight */ "./app-v2/modules/shared/ReadMoreByHeight.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GAmenitiesContainerUl = _glamorous.default.div({
  '& li': {
    minWidth: '50%',
    maxWidth: '50%',
    listStyle: 'none'
  },
  '& .read-more-button': {
    fontSize: '12px !important',
    fontWeight: '800 !important'
  }
});

const GIconSpan = _glamorous.default.span({
  width: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute'
  }
});

const Amenities = ({
  amenitiesData,
  hotelDisplayName
}) => {
  const {
    tags,
    title,
    description
  } = amenitiesData;
  const collapsedContent = [],
        expandedContent = [];
  let tempCheckList = [];

  if (!tags.length && !description) {
    return _react.default.createElement("div", null);
  }

  ;
  return _react.default.createElement("div", {
    className: ""
  }, _react.default.createElement("h2", {
    className: "m0 mb24 fwb f16"
  }, title || 'Facilities', hotelDisplayName ? ` at ${hotelDisplayName}` : null), _react.default.createElement(GAmenitiesContainerUl, {
    className: ""
  }, tags.map((tag, index) => {
    tempCheckList = index > 5 ? expandedContent : collapsedContent;
    const IconComponent = tag.key ? Icons[(0, _parsers.capitalizeFirstLetter)(tag.key.replace(/[\s-_]/g, ''))] ? Icons[(0, _parsers.capitalizeFirstLetter)(tag.key.replace(/[\s-_]/g, ''))] : Icons.DefaultIcon : Icons.DefaultIcon;
    tempCheckList.push(_react.default.createElement("li", {
      key: tag.id,
      className: "pr8 mb15 iblock"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement(GIconSpan, {
      className: "relative flex alignCenter justifyCenter iblock mr8"
    }, _react.default.createElement(IconComponent, null)), _react.default.createElement("p", {
      className: "flexFull f14p m0"
    }, tag.text))));
  }), _react.default.createElement(_ShowMore.default, {
    wrapText: collapsedContent,
    moreText: expandedContent,
    showMoreText: "View All",
    showLessText: "View Less"
  })), description ? _react.default.createElement(_ReadMoreByHeight.default, {
    heading: amenitiesData.title,
    maxHeight: 64,
    content: amenitiesData.description,
    showTitle: false
  }) : null);
};

var _default = Amenities;
exports.default = _default;
Amenities.propTypes = {
  amenitiesData: _propTypes.default.object.isRequired,
  hotelDisplayName: _propTypes.default.string
};

/***/ }),

/***/ "./app-v2/modules/hdp/CTA.js":
/*!***********************************!*\
  !*** ./app-v2/modules/hdp/CTA.js ***!
  \***********************************/
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

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! modules/shared/FormOneCTA */ "./app-v2/modules/shared/FormOneCTA.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GCoverPopupForm = _glamorous.default.div({
  width: '760px'
});

const CTA = ({
  destination,
  hotelId,
  type
}) => _react.default.createElement("div", null, _react.default.createElement("div", {
  className: "mb8"
}, _react.default.createElement(_FormOneCTA.default, {
  rtProps: {
    to_loc: destination,
    page: 'Hotel Detail Page',
    section: 'Hotel',
    cta: 'Get Quotes',
    object: `Package/${hotelId}`
  },
  clickHandler: () => {}
}, _react.default.createElement("div", {
  className: "btn-filled-pri-large wfull pl8 pr8"
}, _react.default.createElement("div", {
  className: "wave"
}), "Get Quotes For This ", type))), _react.default.createElement("div", null, _react.default.createElement(_FormOneCTA.default, {
  rtProps: {
    to_loc: destination,
    page: 'Hotel Detail Page',
    section: 'Hotel',
    cta: 'Book Holiday Package',
    object: `Package/${hotelId}`
  },
  clickHandler: () => {}
}, _react.default.createElement("div", {
  className: "btn-pri-large wfull pl8 pr8"
}, _react.default.createElement("div", {
  className: "wave"
}), "Book Holiday Package for ", (0, _parsers.capitalizeEveryFirstLetter)(destination)))));

CTA.propTypes = {
  destination: _propTypes.default.string.isRequired,
  hotelId: _propTypes.default.number.isRequired,
  type: _propTypes.default.string.isRequired
};
var _default = CTA;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/DiningCuisine.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/hdp/DiningCuisine.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _HighlightTabs = _interopRequireDefault(__webpack_require__(/*! modules/shared/HighlightTabs */ "./app-v2/modules/shared/HighlightTabs.js"));

var _ReadMoreByHeight = _interopRequireDefault(__webpack_require__(/*! ../shared/ReadMoreByHeight */ "./app-v2/modules/shared/ReadMoreByHeight.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GDiningCusineDiv = _glamorous.default.div({
  width: '360px',
  height: '220px',
  '& img': {
    minWidth: '100%',
    minHeight: '100%'
  }
});

const SliderItem = ({
  src,
  ikSrc,
  alt
}) => _react.default.createElement(GDiningCusineDiv, {
  className: "overflowh sbc5"
}, _react.default.createElement(_Img.default, {
  src: src,
  ikSrc: ikSrc,
  alt: alt,
  width: 320,
  height: 220
}));

SliderItem.propTypes = {
  src: _propTypes.default.string.isRequired,
  ikSrc: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string
};

const DiningCuisine = ({
  cuisine,
  hotelDisplayName
}) => _react.default.createElement("div", {
  className: ""
}, _react.default.createElement("h2", {
  className: "m0 mb15 fwb f16"
}, "Dining & Cuisine", hotelDisplayName ? ` at ${hotelDisplayName}` : null), cuisine.pictures ? _react.default.createElement("div", {
  className: "mb24 swiper-full-width"
}, _react.default.createElement(_Swiper.default, {
  id: "DiningCusineSlider",
  slideClass: "slide",
  spaceBetween: 15,
  slidesPerView: "auto",
  ssrAnimation: {
    width: 330,
    height: 220
  }
}, cuisine.pictures.map(picture => _react.default.createElement("div", {
  key: picture.id,
  className: "swiperCustomWidth overflowh radius2",
  style: {
    minWidth: "300px"
  }
}, _react.default.createElement(SliderItem, {
  src: picture.url.mobile,
  ikSrc: picture.url.imagekitUrl,
  alt: picture.altText
}))))) : null, cuisine.description ? _react.default.createElement(_ReadMoreByHeight.default, {
  heading: cuisine.title,
  maxHeight: 64,
  content: cuisine.description,
  showTitle: false
}) : null, cuisine.tags ? _react.default.createElement(_HighlightTabs.default, {
  tagList: cuisine.tags
}) : null);

var _default = DiningCuisine;
exports.default = _default;
DiningCuisine.propTypes = {
  cuisine: _propTypes.default.object.isRequired,
  hotelDisplayName: _propTypes.default.string
};

/***/ }),

/***/ "./app-v2/modules/hdp/HotelContacts.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/hdp/HotelContacts.js ***!
  \*********************************************/
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

var _hotelContactsCm = _interopRequireDefault(__webpack_require__(/*! ./hotelContacts.cm.scss */ "./app-v2/modules/hdp/hotelContacts.cm.scss"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const HotelContacts = ({
  contactInfo
}) => _react.default.createElement("div", null, _react.default.createElement("p", {
  className: "m0 mb15 f16 fwb"
}, "Contact"), contactInfo.phone ? _react.default.createElement("a", {
  href: `tel: {contactInfo.phone}`,
  className: "m0 f14 m0 mb8 flex alignCenter"
}, _react.default.createElement("span", {
  className: `flex justifyCenter alignCenter relative ${_hotelContactsCm.default.icon}`
}, _react.default.createElement(_Icon.CallUs, null)), contactInfo.phone, contactInfo.phone && contactInfo.secondaryPhones && contactInfo.secondaryPhones.length ? '|' : '', contactInfo.secondaryPhones && contactInfo.secondaryPhones.length ? contactInfo.secondaryPhones : '') : null, contactInfo.email ? _react.default.createElement("a", {
  className: "m0 f14 m0 mb8 flex alignCenter",
  href: `mailTo:${contactInfo.email}`
}, _react.default.createElement("span", {
  className: `flex justifyCenter alignCenter relative ${_hotelContactsCm.default.icon}`
}, _react.default.createElement(_Icon.Envelope, null)), contactInfo.email) : null, contactInfo.website ? _react.default.createElement(_reactRouter.Link, {
  className: "m0 f14 m0 flex alignCenter",
  rel: "nofollow",
  to: contactInfo.website,
  target: "_blank"
}, _react.default.createElement("span", {
  className: `flex justifyCenter alignCenter relative ${_hotelContactsCm.default.icon}`
}, _react.default.createElement(_Icon.InternationalIconBlack, null)), _react.default.createElement("span", {
  className: "ellipsis"
}, contactInfo.website)) : null);

HotelContacts.propTypes = {
  contactInfo: _propTypes.default.object
};
HotelContacts.defaultProps = {
  contactInfo: {}
};
var _default = HotelContacts;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/HotelDetailHeader.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/hdp/HotelDetailHeader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _OverAllRating = _interopRequireDefault(__webpack_require__(/*! modules/shared/OverAllRating */ "./app-v2/modules/shared/OverAllRating.js"));

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _PropertyType = _interopRequireDefault(__webpack_require__(/*! modules/shared/PropertyType */ "./app-v2/modules/shared/PropertyType.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _TTRecommended = _interopRequireDefault(__webpack_require__(/*! modules/shared/TTRecommended */ "./app-v2/modules/shared/TTRecommended.js"));

var _HotelLocationMap = _interopRequireDefault(__webpack_require__(/*! ./HotelLocationMap */ "./app-v2/modules/hdp/HotelLocationMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const HotelDetailHeader = ({
  address,
  starRating,
  hotelName,
  hotelDisplayName,
  userRating,
  budget,
  luxury,
  recommended,
  map,
  proximity,
  destination
}) => _react.default.createElement("div", {
  className: "flex spaceBetween"
}, _react.default.createElement("div", {
  className: "flexFull mr15"
}, _react.default.createElement("div", {
  className: "flex mb8 alignCenter flexWrap"
}, _react.default.createElement("div", {
  className: "mb5"
}, _react.default.createElement("h1", {
  className: "m0 f16 fwb mr8 iblock"
}, hotelDisplayName, destination ? `, ${(0, _parsers.capitalizeEveryFirstLetter)(destination)}` : ''), starRating > 0 ? _react.default.createElement("div", {
  className: "iblock"
}, _react.default.createElement(_RatingStar.default, {
  rating: starRating,
  isEmptyStarsHidden: true
})) : null), budget || luxury ? _react.default.createElement("div", {
  className: "mb5"
}, _react.default.createElement(_PropertyType.default, {
  budget: budget,
  luxury: luxury
})) : null), _react.default.createElement("div", {
  className: "flex alignCenter flexWrap"
}, _react.default.createElement("p", {
  className: "m0 f12 m0 mr15 flex alignCenter"
}, address.full), _react.default.createElement(_HotelLocationMap.default, {
  hotel: {
    name: hotelName,
    starRating: starRating,
    address: address,
    map: map,
    userRating: userRating
  },
  title: "Location",
  proximity: proximity
}))), _react.default.createElement("div", null, userRating.rating > 0 ? _react.default.createElement("div", {
  className: "mb15"
}, _react.default.createElement(_OverAllRating.default, {
  customStyleRating: {
    fontSize: '14px',
    fontWeight: '400'
  },
  overallRating: {
    text: userRating.text,
    rating: userRating.rating
  }
})) : null, recommended ? _react.default.createElement("div", {
  className: "mr0 fright"
}, _react.default.createElement(_TTRecommended.default, null)) : null));

HotelDetailHeader.propTypes = {
  address: _propTypes.default.object,
  starRating: _propTypes.default.number,
  hotelName: _propTypes.default.string,
  hotelDisplayName: _propTypes.default.string,
  userRating: _propTypes.default.object,
  budget: _propTypes.default.bool,
  luxury: _propTypes.default.bool,
  recommended: _propTypes.default.bool,
  destination: _propTypes.default.string,
  map: _propTypes.default.object,
  proximity: _propTypes.default.object
};
HotelDetailHeader.defaultProps = {
  address: {},
  starRating: 0,
  userRating: {},
  hotelName: '',
  hotelDisplayName: '',
  budget: false,
  luxury: false,
  recommended: false,
  destination: '',
  map: {},
  proximity: {}
};
var _default = HotelDetailHeader;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/HotelDetailNav.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/hdp/HotelDetailNav.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GUl = _glamorous.default.div({
  'overflowX': 'scroll',
  boxShadow: '0px 3px 6px #ccc',
  '& ul li': {
    listStyle: 'none',
    '& a': {
      whiteSpace: 'nowrap',
      '&:after': {
        height: '2px',
        width: '100%',
        content: '\' \'',
        position: 'absolute',
        bottom: '0',
        left: '0'
      },
      '&:hover': {
        backgroundColor: '#efefef',
        '&:after': {
          backgroundColor: '#009688'
        }
      },
      '&.active': {
        backgroundColor: '#efefef',
        '&:after': {
          backgroundColor: '#009688'
        }
      }
    }
  }
});

const HotelDetailNav = ({
  options,
  Link,
  destination,
  hotelId,
  type
}) => _react.default.createElement(GUl, {
  className: "flex spaceBetween"
}, _react.default.createElement("div", {
  className: "row noBeforeAfter flexFull flex alignCenter"
}, _react.default.createElement("div", {
  className: "col-xs-12 pr8"
}, _react.default.createElement("ul", {
  className: "flex alignCenter m0 p0"
}, options.map((newLi, index) => _react.default.createElement("li", {
  key: index
}, _react.default.createElement(Link, {
  activeClass: "active",
  className: "relative f14 fw7 pfc3 block p24 pt15 pb15",
  to: newLi.section_name,
  spy: true,
  smooth: true,
  isDynamic: true,
  duration: 500,
  offset: -60
}, newLi.title))))), _react.default.createElement("div", {
  className: "col-xs-4 pl8 text-right nav-cta"
})));

HotelDetailNav.propTypes = {
  options: _propTypes.default.array.isRequired,
  Link: _propTypes.default.func.isRequired,
  destination: _propTypes.default.string.isRequired,
  hotelId: _propTypes.default.number.isRequired,
  type: _propTypes.default.string.isRequired
};
var _default = HotelDetailNav;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/HotelLocationMap.js":
/*!************************************************!*\
  !*** ./app-v2/modules/hdp/HotelLocationMap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _MapPopup = _interopRequireDefault(__webpack_require__(/*! ../hotel/MapPopup */ "./app-v2/modules/hotel/MapPopup.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! ../shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GMapDiv = _glamorous.default.div({
  position: 'relative'
});

const GViewMapA = _glamorous.default.a({
  backgroundColor: '#009688',
  fontSize: '14px',
  lineHeight: '14px',
  padding: '9px 15px',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#009688',
    color: '#fff'
  }
});

const GMapDataDiv = _glamorous.default.div({
  width: '100%'
});

const HotelLocationMap = ({
  title,
  proximity,
  hotel
}) => _react.default.createElement("div", {
  className: "iblock"
}, _react.default.createElement(GMapDiv, {
  className: "radius2 overflowh relative"
}, _react.default.createElement(_GenericModal.default, {
  trigger: _react.default.createElement("a", {
    className: "sfc1 f12 fw7"
  }, "View Map"),
  fullView: true
}, _react.default.createElement(GMapDataDiv, {
  className: "flex wfull hfull flexFull"
}, _react.default.createElement(_MapPopup.default, {
  hotel: hotel
})))));

HotelLocationMap.propTypes = {
  proximity: _propTypes.PropTypes.object.isRequired,
  title: _propTypes.PropTypes.string.isRequired,
  hotel: _propTypes.PropTypes.object.isRequired
};
var _default = HotelLocationMap;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/HotelReview.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/hdp/HotelReview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _OverAllRating = _interopRequireDefault(__webpack_require__(/*! modules/shared/OverAllRating */ "./app-v2/modules/shared/OverAllRating.js"));

var _ExpertsReview = _interopRequireDefault(__webpack_require__(/*! modules/shared/ExpertsReview */ "./app-v2/modules/shared/ExpertsReview.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let HotelReview = class HotelReview extends _react.Component {
  constructor() {
    super();
    this.state = {
      offset: 2
    };
  }

  render() {
    const {
      testimonials,
      userRating,
      testimonialChangeHandler,
      hotelDisplayName
    } = this.props;
    const {
      totalEntries,
      testimonialList,
      currentPage,
      hasMore
    } = testimonials;
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "flex alignCenter mb15 spaceBetween"
    }, _react.default.createElement(_Heading.default, {
      title: testimonials.title,
      heading: testimonials.heading,
      data: {
        forHeading: hotelDisplayName
      }
    }), _react.default.createElement("div", {
      className: "iblock hide"
    }, userRating && userRating.length ? _react.default.createElement(_OverAllRating.default, {
      customStyleRating: {
        fontSize: '16px',
        fontWeight: '400'
      },
      isLarge: true,
      isAlignedLeft: true,
      overallRating: userRating
    }) : null)), testimonialList && testimonialList.length ? _react.default.createElement(_ExpertsReview.default, {
      expertReviews: testimonialList[0]
    }) : null);
  }

};
HotelReview.propTypes = {
  testimonials: _propTypes.default.object.isRequired,
  userRating: _propTypes.default.object,
  testimonialChangeHandler: _propTypes.default.func.isRequired,
  hotelDisplayName: _propTypes.default.string
};
HotelReview.defaultProps = {
  userRating: {}
};
var _default = HotelReview;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/Nearby/NearbyCard.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/hdp/Nearby/NearbyCard.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GNearbyUl = _glamorous.default.ul({
  '& li': {
    padding: '6px 15px',
    backgroundColor: '#efefef'
  } // '& li:nth-child(2n-1)': {
  //   backgroundColor: '#efefef',
  // }

});

const GLandmarkTypeSpan = _glamorous.default.span({
  fontSize: '10px',
  height: '16px',
  padding: '2px 8px',
  border: '1px solid #d4d4d4'
});

const GDownArrowSpan = _glamorous.default.span({
  width: '14px',
  height: '6px',
  display: 'block',
  '& svg': {
    width: '14px',
    height: '6px',
    position: 'absolute'
  }
});

const GNearByItemsDiv = _glamorous.default.div({
  '& input': {
    display: 'none',
    '& + label': {
      borderTop: '1px solid #f2f2f2'
    },
    '& + label + .nearbyItemData': {
      height: '0',
      overflow: 'hidden'
    }
  },
  '& input:checked + label + .nearbyItemData': {
    height: 'auto',
    overflow: 'auto'
  },
  '& input:checked + label .arrow-down': {
    transform: 'rotate(180deg)'
  }
});

const LandmarkList = ({
  nearByItem
}) => _react.default.createElement("li", {
  className: "radius2 overflowh flex spaceBetween alignCenter"
}, _react.default.createElement("span", {
  className: "flexFull flex alignCenter f14p"
}, nearByItem.heading, nearByItem.labels && nearByItem.labels.length ? nearByItem.labels.map((label, index) => _react.default.createElement(GLandmarkTypeSpan, {
  key: index,
  className: "radius20 flex alignCenter justifyCenter ml8"
}, label)) : null), nearByItem.distance ? _react.default.createElement("span", {
  className: "f14p"
}, `${nearByItem.distance.value} ${nearByItem.distance.unit}`) : null);

LandmarkList.propTypes = {
  nearByItem: _propTypes.default.object.isRequired
};

const NearbyCardItem = ({
  heading,
  nearByList
}) => _react.default.createElement("div", null, _react.default.createElement(GNearByItemsDiv, null, _react.default.createElement("input", {
  type: "checkbox",
  id: heading,
  name: "nearbyitems"
}), _react.default.createElement("label", {
  htmlFor: heading,
  className: "flex p15 alignCenter spaceBetween"
}, _react.default.createElement("h6", {
  className: "m0 fw4 f14 flexFull"
}, heading), _react.default.createElement(GDownArrowSpan, {
  className: "relative arrow-down"
}, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement("div", {
  className: "nearbyItemData"
}, _react.default.createElement(GNearbyUl, null, nearByList.map((nearByItem, index) => _react.default.createElement(LandmarkList, {
  key: index,
  nearByItem: nearByItem
}))))));

NearbyCardItem.propTypes = {
  nearByList: _propTypes.default.array.isRequired,
  heading: _propTypes.default.string.isRequired
};

const NearbyCard = ({
  nearbyTypeList
}) => _react.default.createElement("div", {
  className: ""
}, _react.default.createElement("div", {
  className: "row row-"
}, nearbyTypeList.map((nearByType, index) => nearByType.options.length ? _react.default.createElement("div", {
  key: index
}, _react.default.createElement("div", {
  className: ""
}, _react.default.createElement(NearbyCardItem, {
  key: index,
  heading: nearByType.heading,
  nearByList: nearByType.options
}))) : null)));

var _default = NearbyCard;
exports.default = _default;
NearbyCard.propTypes = {
  nearbyTypeList: _propTypes.default.array.isRequired
};

/***/ }),

/***/ "./app-v2/modules/hdp/Nearby/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/hdp/Nearby/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _NearbyCard = _interopRequireDefault(__webpack_require__(/*! ./NearbyCard */ "./app-v2/modules/hdp/Nearby/NearbyCard.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Nearby = ({
  nearbyTypeList
}) => _react.default.createElement("div", {
  className: ""
}, _react.default.createElement("h2", {
  className: "m0 mb8 fwb f16 p15"
}, "Nearby"), _react.default.createElement(_NearbyCard.default, {
  nearbyTypeList: nearbyTypeList
}));

var _default = Nearby;
exports.default = _default;
Nearby.propTypes = {
  nearbyTypeList: _propTypes.default.array.isRequired
};

/***/ }),

/***/ "./app-v2/modules/hdp/PriceRange.js":
/*!******************************************!*\
  !*** ./app-v2/modules/hdp/PriceRange.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _CommonDropdown = _interopRequireDefault(__webpack_require__(/*! modules/shared/CommonDropdown */ "./app-v2/modules/shared/CommonDropdown.js"));

var _PriceVal = _interopRequireDefault(__webpack_require__(/*! ./PriceVal */ "./app-v2/modules/hdp/PriceVal.js"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GArrowDownSpan = _glamorous.default.span({
  '& svg': {
    width: '10px',
    height: '6px'
  }
});

const getDefaultMonth = (month, months) => {
  const monthVal = months.filter(monthObj => monthObj.value === parseInt(month));
  return monthVal ? monthVal[0] : null;
};

const PriceRange = ({
  isSmall,
  priceRange,
  months,
  updatePrice,
  month,
  priceTitle
}) => _react.default.createElement("div", null, _react.default.createElement("div", {
  className: "col-xs-7 pl0"
}, _react.default.createElement(_PriceVal.default, {
  priceTitle: priceTitle,
  priceRange: priceRange,
  isSmall: false
})), _react.default.createElement("div", {
  className: "col-xs-5 p0"
}, _react.default.createElement("p", {
  className: "f12 m0 pfc4"
}, "Select Month"), _react.default.createElement("div", {
  className: "input-dropdown-box input-dropdown-box-small mt4 mb8 at_pricemonth"
}, _react.default.createElement(GArrowDownSpan, {
  className: "r10 block wauto lauto input-icon absolute-center-v arr-icon"
}, _react.default.createElement(_Icon.DownArrow, null)), months.length ? _react.default.createElement(_CommonDropdown.default, {
  options: months,
  clickHandler: updatePrice,
  defaultOption: getDefaultMonth(month, months)
}) : null)));

PriceRange.propTypes = {
  isSmall: _propTypes.default.bool,
  months: _propTypes.default.array.isRequired,
  priceRange: _propTypes.default.object.isRequired,
  updatePrice: _propTypes.default.func.isRequired,
  month: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  priceTitle: _propTypes.default.string
};
PriceRange.defaultProps = {
  isSmall: false,
  priceTitle: ''
};
var _default = PriceRange;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/PriceVal.js":
/*!****************************************!*\
  !*** ./app-v2/modules/hdp/PriceVal.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const PriceVal = ({
  isSmall,
  priceRange,
  priceTitle
}) => {
  const currencySymbol = (0, _parsers.currencyToSymbol)(priceRange.currency || 'Rupee');
  const priceFrom = priceRange.priceFrom ? (0, _parsers.numberWithCommas)(priceRange.priceFrom) : '';
  const priceTo = priceRange.priceTo ? (0, _parsers.numberWithCommas)(priceRange.priceTo) : '';
  return _react.default.createElement("div", null, _react.default.createElement("h6", {
    style: isSmall ? {
      fontSize: '12px'
    } : {
      fontSize: '16px',
      marginBottom: '8px'
    },
    className: "fw4 pfc4"
  }, `${priceTitle}` || `Price Range`), _react.default.createElement("h5", {
    style: {
      fontSize: isSmall ? '16px' : '16px'
    },
    className: "sfc3 m0 fw7 f20"
  }, priceRange.priceFrom && priceRange.priceTo ? `${currencySymbol} ${priceFrom} - ${currencySymbol} ${priceTo}` : priceRange.priceFrom ? `Above ${currencySymbol} ${priceFrom}` : `Below ${currencySymbol} ${priceTo}`));
};

PriceVal.propTypes = {
  isSmall: _propTypes.default.bool.isRequired,
  priceRange: _propTypes.default.object.isRequired,
  priceTitle: _propTypes.default.string
};
PriceVal.defautProps = {
  priceTitle: ''
};
var _default = PriceVal;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/SimilarHotels/Card.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/hdp/SimilarHotels/Card.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _OverAllRating = _interopRequireDefault(__webpack_require__(/*! modules/shared/OverAllRating */ "./app-v2/modules/shared/OverAllRating.js"));

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _PropertyType = _interopRequireDefault(__webpack_require__(/*! modules/shared/PropertyType */ "./app-v2/modules/shared/PropertyType.js"));

var _TTRecommended = _interopRequireDefault(__webpack_require__(/*! modules/shared/TTRecommended */ "./app-v2/modules/shared/TTRecommended.js"));

var _PriceVal = _interopRequireDefault(__webpack_require__(/*! ../PriceVal */ "./app-v2/modules/hdp/PriceVal.js"));

var _ToolTip = _interopRequireDefault(__webpack_require__(/*! modules/shared/ToolTip */ "./app-v2/modules/shared/ToolTip.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GCardImageDiv = _glamorous.default.div({
  height: '200px'
});

const GCardDataDiv = _glamorous.default.div({
  borderTop: '0 none'
});

const GCardImgDataDiv = _glamorous.default.div({
  height: '40%',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 65%,rgba(0,0,0,0.65) 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#a6000000",GradientType=0 )'
});

const GHotelPlaceholderDiv = _glamorous.default.div({
  '& svg': {
    width: '105px',
    height: '69px'
  }
});

const Card = ({
  hotel,
  month
}) => {
  const {
    images,
    topRatedLuxury,
    topRatedBudget,
    userRating,
    displayName,
    ttRecomended,
    starRating,
    address,
    proximity,
    priceRange
  } = hotel;
  return _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement("a", {
    href: `${hotel.baseUrl}?travelMonth=${month}`,
    target: "_blank"
  }, _react.default.createElement(GCardImageDiv, {
    className: "wfull overflowh relative sbc5"
  }, images.length ? _react.default.createElement(_Img.default, {
    width: 320,
    height: 200,
    src: images[0].url,
    ikSrc: images[0].imagekitUrl,
    alt: images[0].altText
  }) : _react.default.createElement(GHotelPlaceholderDiv, {
    className: "relative sbc5 wfull hfull flex alignCenter justifyCenter"
  }, _react.default.createElement(_Icon.HotelEmptyState, null)), _react.default.createElement(GCardImgDataDiv, {
    className: "wfull absolute l0 b0 p8"
  }, _react.default.createElement("div", {
    className: "flex spaceBetween alignCenter absolute b0 p8 r0 l0"
  }, _react.default.createElement(_PropertyType.default, {
    budget: topRatedBudget,
    luxury: topRatedLuxury
  }), userRating ? _react.default.createElement(_OverAllRating.default, {
    extraStyle: {
      color: '#fff'
    },
    overallRating: userRating
  }) : null))), _react.default.createElement(GCardDataDiv, {
    className: "p15 pb0 pl0 pr0"
  }, _react.default.createElement("div", {
    className: "flex spaceBetween"
  }, _react.default.createElement("h6", {
    className: "f16 fwb m0 flexFull dynamicTextInherit pfc3"
  }, displayName), ttRecomended ? _react.default.createElement("span", {
    className: "iblock tooltipCommon relative z2"
  }, _react.default.createElement(_ToolTip.default, {
    toolTipText: "Recommended by TravelTriangle",
    boxStyle: {
      textAlign: 'center'
    }
  }), _react.default.createElement(_TTRecommended.default, null)) : null), _react.default.createElement(_RatingStar.default, {
    rating: starRating
  }), _react.default.createElement("div", {
    className: "flex spaceBetween mt4"
  }, _react.default.createElement("div", {
    className: "mr5"
  }, address ? _react.default.createElement("p", {
    className: "m0 dynamicTextInherit pfc3 mb4 f12"
  }, address.brief) : null, proximity ? _react.default.createElement("p", {
    className: "f12 dynamicTextInherit pfc4 m0"
  }, `${proximity.distance} ${proximity.unit} from ${proximity.from} `) : null), _react.default.createElement("div", {
    className: "text-right"
  }, _react.default.createElement(_PriceVal.default, {
    priceTitle: 'Price Range per Night',
    isSmall: true,
    priceRange: priceRange
  }))))));
};

Card.propTypes = {
  hotel: _propTypes.default.object.isRequired,
  month: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/SimilarHotels/index.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/hdp/SimilarHotels/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./Card */ "./app-v2/modules/hdp/SimilarHotels/Card.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SimilarHotels = ({
  similarHotels,
  month
}) => _react.default.createElement("div", {
  className: "clearfix relative"
}, _react.default.createElement("h6", {
  className: "m0 mb15 f16 fwb"
}, similarHotels.title), similarHotels.viewAll ? _react.default.createElement("a", {
  href: similarHotels.viewAll,
  target: "_blank",
  className: "fright iblock link-sec absolute r10 t0"
}, "View All") : null, _react.default.createElement("div", {
  className: "swiper-full-width"
}, _react.default.createElement(_Swiper.default, {
  id: "similarHotels",
  slideClass: "slide",
  spaceBetween: 15,
  slidesPerView: "auto",
  ssrAnimation: {
    width: 270,
    height: 293
  }
}, similarHotels.hotels.length ? similarHotels.hotels.map(hotel => _react.default.createElement("div", {
  key: hotel.id,
  className: similarHotels.hotels.length === 1 ? "radius2 overflowh swiperSingleChild" : "radius2 overflowh swiperCustomWidth"
}, _react.default.createElement(_Card.default, {
  hotel: hotel,
  month: month
}))) : null)));

SimilarHotels.propTypes = {
  similarHotels: _propTypes.default.object.isRequired,
  month: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
var _default = SimilarHotels;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hdp/SliderWithThumbnail/G.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/hdp/SliderWithThumbnail/G.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GImageCreditsDiv = exports.GSmallSliderDiv = exports.GSwiperItemDiv = exports.GThumbnailDiv = exports.GSwiperContainerDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GSwiperContainerDiv = _glamorous.default.div({
  '& .sliderHotel:hover + .testimonialsSlider': {
    opacity: '0.7'
  },
  '& .swiper-slide': {
    width: '58px'
  },
  '& .swiper-button-next': {
    display: 'flex',
    width: '32px',
    height: '32px',
    borderRadius: '2px',
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(191, 190, 190, 0.12)',
    zIndex: 1,
    boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.2)',
    right: '5px',
    '&:before, &:after': {
      borderRight: '1px solid #3E3E3E',
      content: '\' \'',
      display: 'block',
      height: '9px',
      marginTop: '-6px',
      position: 'absolute',
      transform: 'rotate(135deg)',
      right: '14px',
      top: '50%',
      width: '0'
    },
    '&:after': {
      marginTop: '0',
      transform: 'rotate(45deg)'
    }
  },
  '& .swiper-button-prev': {
    display: 'flex',
    width: '32px',
    height: '32px',
    borderRadius: '2px',
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(191, 190, 190, 0.12)',
    zIndex: 1,
    boxShadow: '-1px 1px 2px 0 rgba(0, 0, 0, 0.2)',
    left: '5px',
    '&:before, &:after': {
      borderRight: '1px solid #3E3E3E',
      content: '\' \'',
      display: 'block',
      height: '9px',
      marginTop: '-6px',
      position: 'absolute',
      transform: 'rotate(45deg)',
      left: '14px',
      top: '50%',
      width: '0'
    },
    '&:after': {
      marginTop: '0',
      transform: 'rotate(135deg)'
    }
  }
});

exports.GSwiperContainerDiv = GSwiperContainerDiv;

const GThumbnailDiv = _glamorous.default.div({
  width: '58px',
  height: '48px',
  margin: '0',
  cursor: 'pointer',
  '& img': {
    minWidth: '100%',
    minHeight: '100%'
  }
});

exports.GThumbnailDiv = GThumbnailDiv;

const GSwiperItemDiv = _glamorous.default.div({
  height: '200px',
  overflow: 'hidden',
  '& img': {
    minWidth: '100%',
    minHeight: '100%'
  }
});

exports.GSwiperItemDiv = GSwiperItemDiv;

const GSmallSliderDiv = _glamorous.default.div({
  width: '250px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#fff'
  },
  '& .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets': {
    left: '15px',
    right: 'auto',
    width: 'auto',
    '& .swiper-pagination-bullet': {
      width: '7px',
      height: '7px',
      border: '1px solid #b2b2b2',
      background: 'transparent',
      opacity: '1'
    },
    '& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
      background: '#b2b2b2'
    }
  }
});

exports.GSmallSliderDiv = GSmallSliderDiv;

const GImageCreditsDiv = _glamorous.default.div({
  background: 'rgba(0,0,0,.7)',
  maxWidth: '100%',
  '& a': {
    '&:hover': {
      color: '#fff'
    }
  }
});

exports.GImageCreditsDiv = GImageCreditsDiv;

/***/ }),

/***/ "./app-v2/modules/hdp/SliderWithThumbnail/index.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/hdp/SliderWithThumbnail/index.js ***!
  \*********************************************************/
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/hdp/SliderWithThumbnail/G.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const parser = new _htmlToReact.Parser();

const GHotelPlaceholderDiv = _glamorous.default.div({
  'width': '100%',
  'height': '240px',
  '& svg': {
    width: '105px',
    height: '69px'
  }
});

const renderImageSlider = (image, key, hotelName) => _react.default.createElement(_G.GSwiperItemDiv, {
  key: key,
  id: key,
  className: "relative"
}, _react.default.createElement("img", {
  width: 320,
  height: 200,
  "data-src": image.picture.imagekitUrl,
  alt: image.altText ? image.altText : hotelName,
  className: "swiper-lazy"
}), image.captionLink ? _react.default.createElement(_G.GImageCreditsDiv, {
  className: "l0 sfcw dynamicTextInherit f10 b0 p8 absolute"
}, parser.parse(image.captionLink)) : null);

let SliderWithThumbnail = class SliderWithThumbnail extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySwiper: null
    };
    this.galleryRef = this.galleryRef.bind(this);
  }

  galleryRef(ref) {
    if (ref) {
      this.setState({
        gallerySwiper: ref.swiper
      });
    }
  }

  render() {
    const gallerySwiperParams = {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next .hide',
        prevEl: '.swiper-button-prev .hide'
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      }
    };
    const {
      images,
      hotelName
    } = this.props;
    return _react.default.createElement(_G.GSwiperContainerDiv, {
      className: "relative"
    }, _react.default.createElement("div", {
      className: "swiper-full-width"
    }, images.length ? _react.default.createElement(_Swiper.default, _extends({}, gallerySwiperParams, {
      ref: this.galleryRef,
      slideClass: "slide",
      spaceBetween: 15,
      slidesPerView: "auto",
      ssrAnimation: {
        width: 280,
        height: 200
      }
    }), images.map((image, index) => _react.default.createElement("div", {
      key: index,
      className: images.length === 1 ? "radius2 overflowh swiperSingleChild" : "radius2 overflowh swiperCustomWidth"
    }, _react.default.createElement("div", {
      className: "sbc5 sliderHotel"
    }, renderImageSlider(image.pictureDetails, index, hotelName))))) : _react.default.createElement(GHotelPlaceholderDiv, null, _react.default.createElement("div", {
      className: "relative sbc5 wfull hfull flex alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.HotelEmptyState, null)))));
  }

};
exports.default = SliderWithThumbnail;
SliderWithThumbnail.propTypes = {
  images: _propTypes.default.array.isRequired,
  hotelName: _propTypes.default.string.isRequired
};
SliderWithThumbnail.defaultProps = {};

/***/ }),

/***/ "./app-v2/modules/hdp/hotelContacts.cm.scss":
/*!**************************************************!*\
  !*** ./app-v2/modules/hdp/hotelContacts.cm.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"icon": "pwEmz9JHCQZPOjCDRbi6o"
};

/***/ }),

/***/ "./app-v2/modules/hotel/HotelMapTooltip.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/hotel/HotelMapTooltip.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GHotelMapToolTipButton = _glamorous.default.button({
  width: '24px',
  height: '24px'
});

const GHotelTooltipDiv = _glamorous.default.div({
  maxWidth: '214px',
  width: '214px'
});

const GHotelThumbnilDiv = _glamorous.default.div({
  minWidth: '60px',
  maxWidth: '60px'
});

const GHotelTextDiv = _glamorous.default.div({
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  marginLeft: '60px'
});

const HotelMapTooltip = () => _react.default.createElement("div", {
  className: "tooltipCommon relative z2"
}, _react.default.createElement("div", {
  className: "tooltipBox p0"
}, _react.default.createElement(GHotelTooltipDiv, {
  className: "sbcw flex spaceBetween alignCenter"
}, _react.default.createElement(GHotelThumbnilDiv, {
  className: "overflowh absolute hfull sbc4"
}), _react.default.createElement(GHotelTextDiv, {
  className: "p8"
}, _react.default.createElement("p", {
  className: "m0 ellipsis_two"
}, "Amarterra Villas Bali Nusa Dua - Mgallery Collection"), _react.default.createElement("p", {
  className: "m0 f12 sfc3"
}, "Excellent | 9.4"))), _react.default.createElement("span", {
  className: "tooltipArrow"
})), _react.default.createElement(GHotelMapToolTipButton, {
  className: "recomendedIcon relative cursorP"
}, _react.default.createElement(_Icon.DefaultIcon, null)));

var _default = HotelMapTooltip;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hotel/MapPopup.js":
/*!******************************************!*\
  !*** ./app-v2/modules/hotel/MapPopup.js ***!
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

var _OverAllRating = _interopRequireDefault(__webpack_require__(/*! modules/shared/OverAllRating */ "./app-v2/modules/shared/OverAllRating.js"));

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _HotelMapTooltip = _interopRequireDefault(__webpack_require__(/*! ./HotelMapTooltip */ "./app-v2/modules/hotel/HotelMapTooltip.js"));

var _SeeMapPopUp = _interopRequireDefault(__webpack_require__(/*! modules/mapInformation/SeeMapPopUp/SeeMapPopUp */ "./app-v2/modules/mapInformation/SeeMapPopUp/SeeMapPopUp.js"));

var _mapPopupCm = _interopRequireDefault(__webpack_require__(/*! ./mapPopup.cm.scss */ "./app-v2/modules/hotel/mapPopup.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MapPopup = ({
  hotel
}) => _react.default.createElement("div", {
  className: "flex sbcw flexFull flexDColumn"
}, _react.default.createElement("div", {
  className: "p15"
}, _react.default.createElement("div", {
  className: "flex alignCenter pr24"
}, _react.default.createElement("h6", {
  className: "m0 mr8 f16 fw7"
}, hotel.name), _react.default.createElement(_RatingStar.default, {
  rating: hotel.starRating
})), _react.default.createElement("div", {
  className: "flex spaceBetween alignCenter"
}, _react.default.createElement("p", {
  className: "m0 flexFull mr8 f12"
}, hotel.address && hotel.address.brief), _react.default.createElement(_OverAllRating.default, {
  overallRating: hotel.userRating
}))), _react.default.createElement("div", {
  className: `wfull flex relative flexFull ${_mapPopupCm.default.map}`
}, _react.default.createElement(_SeeMapPopUp.default, {
  coordinates: hotel.map
}), _react.default.createElement("div", {
  className: "absolute r50 t50 z3"
}, " ", _react.default.createElement(_HotelMapTooltip.default, {
  name: hotel.name,
  info: hotel.userRating
}))));

MapPopup.propTypes = {
  hotel: _propTypes.default.object
};
MapPopup.defaultProps = {
  hotel: {}
};
var _default = MapPopup;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hotel/mapPopup.cm.scss":
/*!***********************************************!*\
  !*** ./app-v2/modules/hotel/mapPopup.cm.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"map": "_3C8o21ipfebCkl7LJA9N1C"
};

/***/ }),

/***/ "./app-v2/modules/mapInformation/SeeMapPopUp/SeeMapPopUp.js":
/*!******************************************************************!*\
  !*** ./app-v2/modules/mapInformation/SeeMapPopUp/SeeMapPopUp.js ***!
  \******************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let SeeMapPopUp = class SeeMapPopUp extends _react.Component {
  constructor(props) {
    super(props);

    this.renderMapComponent = Map => {
      return Map ? Map.withScriptjs(Map.withGoogleMap(customProps => {
        const {
          coordinates,
          isMarkerShown,
          zoomRatio
        } = customProps;
        return _react.default.createElement(Map.GoogleMap, {
          defaultZoom: zoomRatio,
          defaultCenter: {
            lat: 10.8505,
            lng: 76.2711
          },
          center: {
            lat: coordinates.latitude || coordinates.lat,
            lng: coordinates.longitude || coordinates.long
          }
        }, isMarkerShown ? _react.default.createElement(Map.Marker, {
          position: {
            lat: coordinates.latitude || coordinates.lat,
            lng: coordinates.longitude || coordinates.long
          }
        }) : null);
      })) : null;
    };

    this.state = {
      Map: null
    };
    this.MyMapComponent = null;
  }

  componentDidMount() {
    const reactGoogleMaps = () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-google-maps */ "react-google-maps", 7)).then(module => {
      this.MyMapComponent = this.renderMapComponent(module);
      this.setState({
        Map: module
      });
    });

    document.readyState === 'complete' ? reactGoogleMaps() : window.addEventListener('load', reactGoogleMaps);
  }

  render() {
    const {
      coordinates,
      name,
      info,
      zoomRatio
    } = this.props;
    const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${_appConfig.default.googleMap.key}&v=3.exp&libraries=geometry,drawing,places`;
    return _react.default.createElement("div", {
      className: "flex sbcw flexDColumn flexFull"
    }, this.MyMapComponent ? _react.default.createElement(this.MyMapComponent, {
      isMarkerShown: true,
      coordinates: coordinates,
      zoomRatio: zoomRatio,
      name: name,
      info: info,
      googleMapURL: googleMapUrl,
      loadingElement: _react.default.createElement("div", {
        style: {
          height: `100%`
        }
      }),
      containerElement: _react.default.createElement("div", {
        style: {
          height: `100%`
        }
      }),
      mapElement: _react.default.createElement("div", {
        style: {
          height: `100%`
        }
      })
    }) : null);
  }

};
SeeMapPopUp.propTypes = {
  coordinates: _propTypes.default.object.isRequired,
  name: _propTypes.default.string,
  info: _propTypes.default.string,
  zoomRatio: _propTypes.default.number
};
SeeMapPopUp.defaultProps = {
  name: '',
  info: '',
  zoomRatio: 6
};
var _default = SeeMapPopUp;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/CheckList.js":
/*!********************************************!*\
  !*** ./app-v2/modules/shared/CheckList.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GCheckSpan = _glamorous.default.span({
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px',
  '& svg': {
    maxWidth: '80%',
    position: 'absolute'
  }
});

const CheckList = ({
  checkList
}) => {
  const collapsedContent = [],
        expandedContent = [];
  let tempCheckList = [];
  return _react.default.createElement("div", null, _react.default.createElement("h6", {
    className: "f16 fwb m0 mb15"
  }, "Highlights"), _react.default.createElement("ul", null, checkList.map((checkPoint, index) => {
    tempCheckList = index > 2 ? expandedContent : collapsedContent;
    tempCheckList.push(_react.default.createElement("li", {
      key: index,
      className: "flex mb8"
    }, _react.default.createElement(GCheckSpan, {
      className: "icon24 mr5 relative flex alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.GreenTick, null)), _react.default.createElement("span", {
      className: "f14p"
    }, checkPoint)));
  }), _react.default.createElement(_ShowMore.default, {
    wrapText: collapsedContent,
    moreText: expandedContent,
    showMoreText: "Read More",
    showLessText: "Read Less"
  })));
};

CheckList.propTypes = {
  checkList: _propTypes.default.array.isRequired
};
var _default = CheckList;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/CommonDropdown.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/shared/CommonDropdown.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _reactDropdown = _interopRequireDefault(__webpack_require__(/*! react-dropdown */ "react-dropdown"));

__webpack_require__(/*! theme/Common/Dropdown.scss */ "./app/theme/Common/Dropdown.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CommonDropdown = ({
  options,
  clickHandler,
  defaultOption,
  placeholder
}) => _react.default.createElement(_reactDropdown.default, {
  options: options,
  value: defaultOption || options[0],
  placeholder: placeholder || 'Select an option',
  onChange: clickHandler
});

CommonDropdown.propTypes = {
  options: _propTypes.PropTypes.array.isRequired,
  clickHandler: _propTypes.PropTypes.func,
  defaultOption: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object, _propTypes.PropTypes.string]),
  placeholder: _propTypes.PropTypes.string
};
CommonDropdown.defaultProps = {
  clickHandler: () => {},
  defaultOption: '',
  placeholder: ''
};
var _default = CommonDropdown;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/ExpertsReview.js":
/*!************************************************!*\
  !*** ./app-v2/modules/shared/ExpertsReview.js ***!
  \************************************************/
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

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = new _htmlToReact.Parser();

const GReviewTypeDiv = _glamorous.default.div({
  minWidth: '48%',
  maxWidth: '48%',
  marginBottom: '6px'
});

const GReviewCountDiv = _glamorous.default.div({
  height: '6px',
  width: '100%'
});

const GAuthorImgDiv = _glamorous.default.div({
  width: '50px',
  height: '50px',
  '& img': {
    minWidth: '100%',
    minHeight: '100%'
  }
});

let ExpertsReview = (_temp = _class = class ExpertsReview extends _react.default.Component {
  render() {
    const {
      expertReviews
    } = this.props;
    const {
      author: {
        authorPic,
        authorName,
        userDesignation,
        userLocation
      }
    } = expertReviews;
    return _react.default.createElement("div", {
      className: ""
    }, _react.default.createElement("div", {
      className: "flex alignCenter flexCenterItems"
    }, _react.default.createElement(GAuthorImgDiv, {
      className: "radius100 pbc4 overflowh"
    }, _react.default.createElement("img", {
      src: `${authorPic}?tr=w-50,h-50`,
      alt: authorName
    })), _react.default.createElement("div", {
      className: "ml15"
    }, _react.default.createElement("h6", {
      className: "f14 fw9 mb2"
    }, authorName), _react.default.createElement("p", {
      className: "m0 f12 pfc4"
    }, userDesignation, ",", userLocation))), _react.default.createElement("div", {
      className: "dynamicTextInherit f14p mt15 mb24"
    }, parser.parse(expertReviews.body)), _react.default.createElement("div", {
      className: "flex flexWrap spaceBetween"
    }, expertReviews.categoryRatings.map(category => _react.default.createElement(GReviewTypeDiv, {
      key: expertReviews.id
    }, _react.default.createElement("p", {
      className: "m0 mb8 f14 text-capitalize"
    }, category.name.replace('_', ' '), " ", _react.default.createElement("span", {
      className: "ml8 fw9"
    }, category.rating)), _react.default.createElement(GReviewCountDiv, {
      className: "relative radius20 overflowh sbc5"
    }, _react.default.createElement("span", {
      className: "reviewCount absolute l0 t0 b0 sbc3",
      style: {
        width: `${category.rating * 100 / 10}%`
      }
    }))))));
  }

}, _class.propTypes = {
  expertReviews: _propTypes.default.object.isRequired
}, _temp);
exports.default = ExpertsReview;

/***/ }),

/***/ "./app-v2/modules/shared/FormOneCTA.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/shared/FormOneCTA.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _formOneLead = __webpack_require__(/*! reducers/formOneLead */ "./app/reducers/formOneLead.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let FormOneCTA = (_temp = _class = class FormOneCTA extends _react.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // merge admin comments with the existing ones
    let adminComments = this.props.rtProps.adminComments || '';

    if (typeof window !== 'undefined') {
      adminComments = `${adminComments} #Form_filled_on ${window.location.href}`;
    }

    adminComments = ` ${adminComments} ${_segmentEvents.SEGMENT_ADMIN_COMMENT}`;

    const rtripProps = _objectSpread({}, this.props.rtProps, {
      adminComments
    });

    this.props.clickHandler(); // update the value on store

    this.props.updateFromOneProps(rtripProps); // change the url

    this.props.pushState('/requested_trips/new');
  }

  render() {
    return _react.default.createElement("button", {
      className: "wfull",
      onClick: this.handleClick
    }, this.props.children);
  }

}, _class.propTypes = {
  rtProps: _propTypes.default.object,
  updateFromOneProps: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  clickHandler: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object])
}, _class.defaultProps = {
  rtProps: {},
  clickHandler: () => {},
  children: []
}, _temp);

var _default = (0, _reactRedux.connect)(null, {
  updateFromOneProps: _formOneLead.updateFromOneProps,
  pushState: _reactRouterRedux.push
})(FormOneCTA);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/GenericModal.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/GenericModal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ "react-modal"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseIt = _glamorous.default.button({
  position: 'absolute',
  right: '5px',
  top: '0px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '2',
  overflow: 'hidden'
});

const CloseItLeft = _glamorous.default.button({
  position: 'fixed',
  left: '5px',
  top: '3px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '6',
  overflow: 'hidden'
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    width: '94%',
    maxWidth: '600px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};
const customStylesFullView = {
  content: {
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    top: 0,
    left: 0,
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    paddingTop: '50px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  }
};
let ModalComponent = (_temp = _class = class ModalComponent extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.state.isOpen && nextProps.isOpen) {
      this.openModal();
    }

    if (this.state.isOpen && nextProps.customCloseTrigger) {
      this.closeModal();
    }
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });

    if (this.props.onRequestCloseCustom) {
      this.props.onRequestCloseCustom();
    }

    document.body.style.overflow = '';
  }

  afterOpenModal() {
    this.props.onAfterModalOpen();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    this.closeModal();
  }

  render() {
    const {
      fullView,
      hasCustomClose,
      hasNoClose,
      isWhiteIcon,
      isTriggerFullView,
      customClass
    } = this.props;
    return _react.default.createElement("div", {
      className: isTriggerFullView ? 'wfull' : ''
    }, !this.props.isOpen ? _react.default.createElement("span", {
      className: "block wfull",
      onClick: this.openModal
    }, this.props.trigger) : null, _react.default.createElement(_reactModal.default, {
      isOpen: this.state.isOpen,
      onAfterOpen: this.afterOpenModal,
      onRequestClose: this.closeModal,
      style: fullView ? customStylesFullView : customStyles,
      contentLabel: "Travel Triangle Modal",
      ariaHideApp: false,
      shouldCloseOnOverlayClick: true,
      className: customClass
    }, hasCustomClose ? _react.default.createElement(CloseItLeft, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })) : _react.default.createElement(CloseIt, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })), this.props.children));
  }

}, _class.propTypes = {
  trigger: _propTypes.default.node,
  children: _propTypes.default.node.isRequired,
  onAfterModalOpen: _propTypes.default.func,
  onRequestCloseCustom: _propTypes.default.func,
  customCloseTrigger: _propTypes.default.bool,
  fullView: _propTypes.default.bool,
  hasCustomClose: _propTypes.default.bool,
  hasNoClose: _propTypes.default.bool,
  isWhiteIcon: _propTypes.default.bool,
  isTriggerFullView: _propTypes.default.bool,
  customClass: _propTypes.default.string
}, _class.defaultProps = {
  onAfterModalOpen: () => {},
  onRequestCloseCustom: () => {},
  customCloseTrigger: false,
  trigger: _react.default.createElement("button", null, "Please supply a custom trigger component"),
  fullView: false,
  hasCustomClose: false,
  hasNoClose: false,
  isWhiteIcon: false,
  isTriggerFullView: false,
  customClass: ''
}, _temp);
var _default = ModalComponent;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/GetCallbackBanner.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/shared/GetCallbackBanner.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! modules/shared/FormOneCTA */ "./app-v2/modules/shared/FormOneCTA.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GetCallbackBanner = ({
  destination,
  hotelId,
  type
}) => _react.default.createElement("div", {
  className: "pbc3 p24"
}, _react.default.createElement("h6", {
  className: "f24 sfcw fwb mb8"
}, "Want best ", destination, " Packages ", _react.default.createElement("span", {
  className: "block"
}, "with this ", type, "?")), _react.default.createElement("p", {
  className: "f12 sfcw m0 mb24 pfc4"
}, "Fill in the form and get a callback from our experts."), _react.default.createElement(_FormOneCTA.default, {
  rtProps: {
    to_loc: destination,
    page: 'Hotel Detail Page',
    section: 'Hotel',
    cta: 'Get Experts Callback',
    object: `Package/${hotelId}`
  },
  clickHandler: () => {}
}, _react.default.createElement("div", {
  className: "btn-filled-pri-large wfull pl8 pr8"
}, _react.default.createElement("div", {
  className: "wave"
}), "Get Experts' Callback")));

GetCallbackBanner.propTypes = {
  destination: _propTypes.default.string.isRequired,
  hotelId: _propTypes.default.number.isRequired,
  type: _propTypes.default.string.isRequired
};
var _default = GetCallbackBanner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/HighlightTabs.js":
/*!************************************************!*\
  !*** ./app-v2/modules/shared/HighlightTabs.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GInclusionsUl = _glamorous.default.ul({
  whiteSpace: 'nowrap',
  overflowX: 'scroll',
  '& li': {
    marginRight: '4px',
    marginBottom: '4px',
    fontWeight: '700',
    height: '32px',
    fontSize: '12px',
    lineHeight: '32px',
    padding: '0 15px',
    listStyle: 'none',
    display: 'inline-block',
    backgroundColor: '#CCEAE7'
  }
});

const HighlightTabs = ({
  tagList
}) => _react.default.createElement("div", {
  className: "swiper-full-width"
}, _react.default.createElement(GInclusionsUl, {
  className: "block"
}, tagList.filter(t => t.label).map((tag, index) => _react.default.createElement("li", {
  key: index,
  className: "radius20"
}, tag.label))));

var _default = HighlightTabs;
exports.default = _default;
HighlightTabs.propTypes = {
  tagList: _propTypes.default.array.isRequired
};

/***/ }),

/***/ "./app-v2/modules/shared/PropertyType.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/PropertyType.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GInclusionHighlightUl = _glamorous.default.ul({
  '& li': {
    fontSize: '10px',
    padding: '0 6px',
    height: '24px',
    lineHeight: '24px',
    '& .highlightIcon': {
      width: '14px',
      height: '14px',
      position: 'relative',
      marginRight: '8px'
    },
    '&:last-child': {
      marginRight: '0 !important'
    }
  },
  '& .luxury': {
    border: '1px solid #e4a500',
    color: '#c48e00'
  },
  '& .budget': {
    border: '1px solid #009688',
    color: '#009688'
  }
});

const PropertyType = ({
  luxury,
  budget
}) => _react.default.createElement(GInclusionHighlightUl, {
  className: "block fleft"
}, luxury ? _react.default.createElement("li", {
  className: "flex alignCenter luxury radius20 mr4"
}, "Top Rated Luxury Property") : budget ? _react.default.createElement("li", {
  className: "flex alignCenter budget radius20 mr4"
}, "Top Rated Budget Property") : null);

PropertyType.propTypes = {
  luxury: _propTypes.PropTypes.bool,
  budget: _propTypes.PropTypes.bool
};
PropertyType.defaultProps = {
  luxury: true,
  budget: false
};
var _default = PropertyType;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/ReadMoreByHeight.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/shared/ReadMoreByHeight.js ***!
  \***************************************************/
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

var _readMoreByHeightCm = _interopRequireDefault(__webpack_require__(/*! ./readMoreByHeight.cm.scss */ "./app-v2/modules/shared/readMoreByHeight.cm.scss"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();
let ReadMoreByHeight = class ReadMoreByHeight extends _react.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const {
      maxHeight,
      content,
      heading,
      showTitle,
      hotelDisplayName
    } = this.props;
    const {
      expanded
    } = this.state;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", null, showTitle ? _react.default.createElement("h2", {
      className: "f16 pb0 m0 fwb mb15"
    }, heading, " ", hotelDisplayName ? `at ${hotelDisplayName}` : null) : null, _react.default.createElement("div", {
      style: {
        'maxHeight': expanded ? 'none' : maxHeight
      },
      className: `${_readMoreByHeightCm.default.data} block relative pt8 ${expanded ? _readMoreByHeightCm.default.expanded : ''}`
    }, _react.default.createElement("span", {
      className: "block dynamicTextInherit pfc3 f14p"
    }, parser.parse(content))), _react.default.createElement("button", {
      className: `${_readMoreByHeightCm.default.readMore} cursorP flex alignCenter spaceBetween mt8 f12 fw9 `,
      onClick: this.handleSubmit
    }, _react.default.createElement("span", {
      className: "flexFull block mr5"
    }, expanded ? 'Read Less' : 'Read More'), _react.default.createElement("span", {
      className: `${_readMoreByHeightCm.default.downArrow} relative block ${expanded ? 'rotate180' : 'rotate0'}`
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))));
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

/***/ "./app-v2/modules/shared/readMoreByHeight.cm.scss":
/*!********************************************************!*\
  !*** ./app-v2/modules/shared/readMoreByHeight.cm.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"data": "QIRDlkQ22V9ik1SNbEix0",
	"expanded": "_2HpisVUP6Ee1MRvkpsOGMo",
	"readMore": "_3lZvNrNnKv3cVx92srnjCq",
	"downArrow": "_3f6qD338CPW2Ej-fAsXY1J"
};

/***/ }),

/***/ "./app-v2/screens/hdp/Hdp.js":
/*!***********************************!*\
  !*** ./app-v2/screens/hdp/Hdp.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! modules/shared/Breadcrumb */ "./app-v2/modules/shared/Breadcrumb.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _ReadMoreByHeight = _interopRequireDefault(__webpack_require__(/*! modules/shared/ReadMoreByHeight */ "./app-v2/modules/shared/ReadMoreByHeight.js"));

var _HotelDetailHeader = _interopRequireDefault(__webpack_require__(/*! modules/hdp/HotelDetailHeader */ "./app-v2/modules/hdp/HotelDetailHeader.js"));

var _HotelDetailNav = _interopRequireDefault(__webpack_require__(/*! modules/hdp/HotelDetailNav */ "./app-v2/modules/hdp/HotelDetailNav.js"));

var _HighlightTabs = _interopRequireDefault(__webpack_require__(/*! modules/shared/HighlightTabs */ "./app-v2/modules/shared/HighlightTabs.js"));

var _Nearby = _interopRequireDefault(__webpack_require__(/*! modules/hdp/Nearby */ "./app-v2/modules/hdp/Nearby/index.js"));

var _PriceRange = _interopRequireDefault(__webpack_require__(/*! modules/hdp/PriceRange */ "./app-v2/modules/hdp/PriceRange.js"));

var _CheckList = _interopRequireDefault(__webpack_require__(/*! modules/shared/CheckList */ "./app-v2/modules/shared/CheckList.js"));

var _GetCallbackBanner = _interopRequireDefault(__webpack_require__(/*! modules/shared/GetCallbackBanner */ "./app-v2/modules/shared/GetCallbackBanner.js"));

var _Amenities = _interopRequireDefault(__webpack_require__(/*! modules/hdp/Amenities */ "./app-v2/modules/hdp/Amenities.js"));

var _DiningCuisine = _interopRequireDefault(__webpack_require__(/*! modules/hdp/DiningCuisine */ "./app-v2/modules/hdp/DiningCuisine.js"));

var _HotelReview = _interopRequireDefault(__webpack_require__(/*! modules/hdp/HotelReview */ "./app-v2/modules/hdp/HotelReview.js"));

var _SimilarHotels = _interopRequireDefault(__webpack_require__(/*! modules/hdp/SimilarHotels */ "./app-v2/modules/hdp/SimilarHotels/index.js"));

var _popular = _interopRequireDefault(__webpack_require__(/*! modules/packages/popular */ "./app-v2/modules/packages/popular/index.js"));

var _SliderWithThumbnail = _interopRequireDefault(__webpack_require__(/*! modules/hdp/SliderWithThumbnail */ "./app-v2/modules/hdp/SliderWithThumbnail/index.js"));

var _Faqs = _interopRequireDefault(__webpack_require__(/*! modules/faqs/Faqs */ "./app-v2/modules/faqs/Faqs.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _CTA = _interopRequireDefault(__webpack_require__(/*! modules/hdp/CTA */ "./app-v2/modules/hdp/CTA.js"));

var _travellerStory = _interopRequireDefault(__webpack_require__(/*! modules/travellerStory */ "./app-v2/modules/travellerStory/index.js"));

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _HotelContacts = _interopRequireDefault(__webpack_require__(/*! modules/hdp/HotelContacts */ "./app-v2/modules/hdp/HotelContacts.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! modules/shared/Footer */ "./app-v2/modules/shared/Footer/index.js"));

var _FixedMenu = _interopRequireDefault(__webpack_require__(/*! components/FixedMenu/FixedMenu */ "./app/components/FixedMenu/FixedMenu.js"));

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _seoHelpers = __webpack_require__(/*! helpers/seoHelpers */ "./app/helpers/seoHelpers.js");

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

__webpack_require__(/*! app/theme/HotelListing.scss */ "./app/theme/HotelListing.scss");

var _hdpCm = _interopRequireDefault(__webpack_require__(/*! ./hdp.cm.scss */ "./app-v2/screens/hdp/hdp.cm.scss"));

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();
const ScrollElement = (0, _glamorous.default)(_reactStickynode.default)({
  zIndex: 4,
  position: 'relative',
  ' .nav-cta': {
    display: 'none'
  },
  '&.show': {
    ' .package-fixed-hdr': {
      visibility: 'visible'
    },
    ' .nav-cta': {
      display: 'block'
    }
  }
});

function createHeaderConstants(displaySections, nearbySections, testimonials, popularPackages) {
  let headerConstants = [];
  headerConstants = [...headerConstants, ...Object.keys(displaySections || {}).filter(k => displaySections[k].description || displaySections[k].tags.length).map(k => ({
    title: (0, _parsers.capitalizeEveryFirstLetter)(k),
    section_name: `${k}-sec`
  }))];

  if (nearbySections && nearbySections.length) {
    headerConstants = [...headerConstants, {
      title: 'Nearby',
      section_name: 'nearby-sec'
    }];
  }

  if (testimonials && testimonials.testimonialList.length) {
    headerConstants = [...headerConstants, {
      title: 'Reviews',
      section_name: 'testimonial-sec'
    }];
  }

  if (popularPackages && popularPackages.length) {
    headerConstants = [...headerConstants, {
      title: 'Packages',
      section_name: 'packages-sec'
    }];
  }

  return headerConstants;
}

let Hdp = (_temp = _class = class Hdp extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.createHeaderConstants(props);
  }

  componentDidMount() {
    (0, _parsers.getDestination)(this.destinationCity);
  }

  componentDidUpdate(prevProps) {
    (0, _FormDataFormatter.setCookie)('cb_dt', '');

    if (prevProps.location !== this.props.location) {
      (0, _parsers.getDestination)(this.destinationCity);
    }
  }

  render() {
    const {
      details,
      updateTestimonials,
      params,
      updateMonth,
      location,
      packages
    } = this.props;

    if (!details.hotel) {
      return _react.default.createElement("div", null);
    }

    const {
      address,
      contactInfo,
      starRating,
      userRating,
      displayName: hotelDisplayName,
      name: hotelName,
      topRatedBudget: budget,
      topRatedLuxury: luxury,
      ttRecomended: recommended,
      sliderPic,
      priceRange,
      months,
      highlights,
      map,
      proximity,
      displaySections,
      city,
      country,
      conclusionText,
      nearbySections,
      summaryText,
      travelMonth,
      id,
      propertyType
    } = details.hotel;
    this.destinationCity = city ? city.name : country ? country.name : '';
    const destinationCountry = country ? country.name : city ? city.name : '';
    const {
      faqs,
      similarHotels,
      testimonials,
      metaTags: metaData,
      canonicalUrl,
      backUrl
    } = details;
    const month = travelMonth || location.query.travelMonth || (0, _DateTime.getCurrentMonth)() + 1;
    const type = (0, _parsers.capitalizeFirstLetter)(propertyType || 'hotel');
    const parentTitle = `${type}s in ${(0, _parsers.capitalizeEveryFirstLetter)(this.destinationCity)}`;
    const PopularPackagesContainer = _popular.default.container;
    const TravelerStoriesContainer = _travellerStory.default.container;
    return _react.default.createElement("div", {
      className: "sbc5"
    }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("link", {
      href: "//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico",
      rel: "shortcut icon",
      type: "image/x-icon"
    }), _react.default.createElement("link", {
      href: "//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico",
      rel: "icon",
      type: "image/x-icon"
    }), (0, _seoHelpers.createHelmetBanner)(metaData, canonicalUrl, location.pathname), !details.isPublished && _react.default.createElement("meta", {
      name: "robots",
      content: "noindex, nofollow"
    }), _react.default.createElement("meta", {
      name: "theme-color",
      content: "#68c4c1"
    })), _react.default.createElement("div", {
      className: _hdpCm.default.borderLine
    }), _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_HeaderTitle.default, {
      title: parentTitle ? parentTitle : '',
      backUrl: backUrl,
      showTitleAsH1: false
    }), _react.default.createElement("div", null, _react.default.createElement(ScrollElement, {
      activeClass: "show",
      bottomBoundary: "#fixedMenuEnd"
    }, _react.default.createElement("div", {
      className: `sbcw mb8 ${_hdpCm.default.nav}`
    }, _react.default.createElement(_HotelDetailNav.default, {
      options: this.headerConstants,
      Link: _reactScroll.Link,
      destination: this.destinationCity || destinationCountry,
      hotelId: id,
      type: (0, _parsers.makeCapitalizedSentence)(type, '_')
    })))), _react.default.createElement("div", {
      className: "mb8 sbcw p15"
    }, _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_HotelDetailHeader.default, {
      address,
      contactInfo,
      starRating,
      hotelName,
      hotelDisplayName,
      userRating,
      budget,
      luxury,
      recommended,
      map,
      proximity,
      destination: destinationCountry
    })), _react.default.createElement("div", {
      className: "mb15"
    }, _react.default.createElement(_SliderWithThumbnail.default, {
      images: sliderPic,
      hotelName: hotelName
    })), priceRange && (priceRange.priceFrom || priceRange.priceTo) ? _react.default.createElement("div", {
      className: "clearfix mb8"
    }, _react.default.createElement(_PriceRange.default, {
      priceTitle: 'Price Range per Night',
      priceRange: priceRange,
      months: months,
      month: month,
      updatePrice: updateMonth
    })) : null, _react.default.createElement(_CTA.default, {
      destination: (0, _parsers.capitalizeEveryFirstLetter)(this.destinationCity || destinationCountry),
      hotelId: id,
      type: (0, _parsers.makeCapitalizedSentence)(type, '_')
    })), highlights.length ? _react.default.createElement("div", {
      className: "mb8 p15 sbcw"
    }, _react.default.createElement(_CheckList.default, {
      checkList: highlights
    })) : null, displaySections.overview && displaySections.overview.description ? _react.default.createElement(_reactScroll.Element, {
      name: "overview-sec",
      className: "clearfix sbcw p15 mb8"
    }, _react.default.createElement("div", {
      className: "mb15"
    }, _react.default.createElement(_ReadMoreByHeight.default, {
      heading: displaySections.overview.title,
      maxHeight: 64,
      content: displaySections.overview.description
    })), displaySections.overview.tags.length ? _react.default.createElement(_HighlightTabs.default, {
      tagList: displaySections.overview.tags
    }) : null) : null, _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_GetCallbackBanner.default, {
      destination: (0, _parsers.capitalizeEveryFirstLetter)(this.destinationCity),
      hotelId: id,
      type: (0, _parsers.makeCapitalizedSentence)(type, '_')
    })), displaySections.rooms && displaySections.rooms.description ? _react.default.createElement(_reactScroll.Element, {
      name: "rooms-sec",
      className: "p15 sbcw mb8"
    }, _react.default.createElement("div", {
      className: "mb15"
    }, _react.default.createElement(_ReadMoreByHeight.default, {
      heading: displaySections.rooms.title,
      maxHeight: 64,
      content: displaySections.rooms.description,
      hotelDisplayName: hotelDisplayName
    })), _react.default.createElement(_HighlightTabs.default, {
      tagList: displaySections.rooms.tags
    })) : null, displaySections.facilities && displaySections.facilities.tags.length || displaySections.facilities.description ? _react.default.createElement(_reactScroll.Element, {
      name: "facilities-sec",
      className: "p15 sbcw mb8"
    }, _react.default.createElement(_Amenities.default, {
      amenitiesData: displaySections.facilities,
      hotelDisplayName: hotelDisplayName
    })) : null, displaySections.dining && displaySections.dining.description ? _react.default.createElement(_reactScroll.Element, {
      name: "dining-sec",
      className: "p15 sbcw mb8"
    }, _react.default.createElement(_DiningCuisine.default, {
      cuisine: displaySections.dining,
      hotelDisplayName: hotelDisplayName
    })) : null, conclusionText ? _react.default.createElement("div", {
      className: "p15 sbcw mb8"
    }, _react.default.createElement("div", {
      className: "radius2 overflowh f16 fw4 fitalic border p15 m0"
    }, parser.parse(conclusionText))) : null, faqs && faqs.faqs && faqs.faqs.length ? _react.default.createElement("div", {
      className: "sbcw mb8"
    }, _react.default.createElement(_Faqs.default, {
      data: faqs,
      hotelDisplayName: hotelDisplayName
    })) : null, nearbySections.length ? _react.default.createElement(_reactScroll.Element, {
      name: "nearby-sec",
      className: "mb8 sbcw"
    }, _react.default.createElement(_Nearby.default, {
      nearbyTypeList: nearbySections
    })) : null, testimonials && testimonials.testimonialList.length ? _react.default.createElement(_reactScroll.Element, {
      name: "testimonial-sec",
      className: "p15 sbcw mb8",
      id: "testimonials"
    }, _react.default.createElement(_HotelReview.default, {
      testimonials: testimonials,
      userRating: userRating,
      testimonialChangeHandler: value => updateTestimonials(value, params.hotelName),
      hotelDisplayName: hotelDisplayName
    })) : null, summaryText ? _react.default.createElement("div", {
      className: "p15 sbcw mb8"
    }, _react.default.createElement(_ReadMoreByHeight.default, {
      heading: "Summary",
      maxHeight: 64,
      content: summaryText
    })) : null, contactInfo.email || contactInfo.website || contactInfo.phone || contactInfo.secondaryPhones && contactInfo.secondaryPhones.length ? _react.default.createElement("div", {
      className: "mb8 sbcw p15"
    }, _react.default.createElement(_HotelContacts.default, {
      contactInfo
    })) : null, similarHotels.hotels && similarHotels.hotels.length ? _react.default.createElement("div", {
      className: "p15 sbcw mb8"
    }, _react.default.createElement(_SimilarHotels.default, {
      similarHotels: similarHotels,
      month: month
    })) : null, packages && packages.length ? _react.default.createElement("div", {
      className: "sbcw mb8",
      id: "packages-sec"
    }, _react.default.createElement(PopularPackagesContainer, {
      title: `${(0, _parsers.capitalizeEveryFirstLetter)(this.destinationCity || destinationCountry)} Packages`
    })) : null, _react.default.createElement("div", {
      className: "sbcw mb8"
    }, _react.default.createElement(TravelerStoriesContainer, {
      data: {
        title: `Top Travel Blogs for ${this.destinationCity || destinationCountry}`
      },
      config: {
        csr: true
      },
      destination: this.destinationCity || destinationCountry,
      viewAll: "/blog/travelogues?referer=travelogue_hotel_detail"
    })), _react.default.createElement("div", {
      id: "fixedMenuEnd"
    }), _react.default.createElement(_FixedMenu.default, null), _react.default.createElement("div", {
      className: "p15 sbcw mb8"
    }, _react.default.createElement(_Breadcrumb.default, {
      breadcrumbs: details.breadcrumbs
    })), _react.default.createElement("div", {
      className: "sbcw"
    }, _react.default.createElement(_Footer.default, null)));
  }

}, _initialiseProps = function () {
  this.createHeaderConstants = props => {
    if (props.details && props.details.hotel) {
      const {
        details: {
          hotel: {
            displaySections,
            nearbySections
          },
          testimonials
        },
        packages
      } = props;
      this.headerConstants = createHeaderConstants(displaySections, nearbySections, testimonials, packages);
    }
  };
}, _temp);
Hdp.propTypes = {
  details: _propTypes.default.object,
  updateTestimonials: _propTypes.default.func.isRequired,
  params: _propTypes.default.object.isRequired,
  updateMonth: _propTypes.default.func.isRequired,
  location: _propTypes.default.object.isRequired,
  packages: _propTypes.default.array,
  backUrl: _propTypes.default.string
};
Hdp.defaultProps = {
  details: {},
  packages: []
};
var _default = Hdp;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/hdp/hdp.cm.scss":
/*!****************************************!*\
  !*** ./app-v2/screens/hdp/hdp.cm.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"nav": "_2od5bpU7Eertmr9wBKSjUP",
	"borderLine": "_2itSuSh7k16jY1vyHqzwSu"
};

/***/ }),

/***/ "./app/theme/Common/Dropdown.scss":
/*!****************************************!*\
  !*** ./app/theme/Common/Dropdown.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Dropdown-root": "_NLyC_",
	"Dropdown-control": "_hffHu",
	"Dropdown-menu": "_3stJx",
	"Dropdown-group": "_33ljq",
	"Dropdown-title": "_3OPsC",
	"Dropdown-option": "_2yTBE",
	"Dropdown-noresults": "_QKkgM",
	"input-dropdown-box": "_NrXS-",
	"input-dropdown-box-small": "_3mVFh",
	"input-dropdown-box-long": "_pCJcc",
	"input-with-icon-box": "_2upHg"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZHAvQW1lbml0aWVzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hkcC9DVEEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL0RpbmluZ0N1aXNpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL0hvdGVsQ29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL0hvdGVsRGV0YWlsSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hkcC9Ib3RlbERldGFpbE5hdi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZHAvSG90ZWxMb2NhdGlvbk1hcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZHAvSG90ZWxSZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL05lYXJieS9OZWFyYnlDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hkcC9OZWFyYnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL1ByaWNlUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL1ByaWNlVmFsLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hkcC9TaW1pbGFySG90ZWxzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL1NpbWlsYXJIb3RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGRwL1NsaWRlcldpdGhUaHVtYm5haWwvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZHAvU2xpZGVyV2l0aFRodW1ibmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZHAvaG90ZWxDb250YWN0cy5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvdGVsL0hvdGVsTWFwVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob3RlbC9NYXBQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob3RlbC9tYXBQb3B1cC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21hcEluZm9ybWF0aW9uL1NlZU1hcFBvcFVwL1NlZU1hcFBvcFVwLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9DaGVja0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0NvbW1vbkRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9FeHBlcnRzUmV2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Gb3JtT25lQ1RBLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0dldENhbGxiYWNrQmFubmVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9IaWdobGlnaHRUYWJzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Qcm9wZXJ0eVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1JlYWRNb3JlQnlIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL3JlYWRNb3JlQnlIZWlnaHQuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9oZHAvSGRwLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2hkcC9oZHAuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdGhlbWUvQ29tbW9uL0Ryb3Bkb3duLnNjc3MiXSwibmFtZXMiOlsiR0FtZW5pdGllc0NvbnRhaW5lclVsIiwiZ2xhbW9yb3VzIiwiZGl2IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImxpc3RTdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkdJY29uU3BhbiIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiQW1lbml0aWVzIiwiYW1lbml0aWVzRGF0YSIsImhvdGVsRGlzcGxheU5hbWUiLCJ0YWdzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbGxhcHNlZENvbnRlbnQiLCJleHBhbmRlZENvbnRlbnQiLCJ0ZW1wQ2hlY2tMaXN0IiwibGVuZ3RoIiwibWFwIiwidGFnIiwiaW5kZXgiLCJJY29uQ29tcG9uZW50Iiwia2V5IiwiSWNvbnMiLCJyZXBsYWNlIiwiRGVmYXVsdEljb24iLCJwdXNoIiwiaWQiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIkdDb3ZlclBvcHVwRm9ybSIsIkNUQSIsImRlc3RpbmF0aW9uIiwiaG90ZWxJZCIsInR5cGUiLCJ0b19sb2MiLCJwYWdlIiwic2VjdGlvbiIsImN0YSIsIm51bWJlciIsIkdEaW5pbmdDdXNpbmVEaXYiLCJtaW5IZWlnaHQiLCJTbGlkZXJJdGVtIiwic3JjIiwiaWtTcmMiLCJhbHQiLCJEaW5pbmdDdWlzaW5lIiwiY3Vpc2luZSIsInBpY3R1cmVzIiwicGljdHVyZSIsInVybCIsIm1vYmlsZSIsImltYWdla2l0VXJsIiwiYWx0VGV4dCIsIkhvdGVsQ29udGFjdHMiLCJjb250YWN0SW5mbyIsInBob25lIiwic3R5bGVzIiwiaWNvbiIsInNlY29uZGFyeVBob25lcyIsImVtYWlsIiwid2Vic2l0ZSIsImRlZmF1bHRQcm9wcyIsIkhvdGVsRGV0YWlsSGVhZGVyIiwiYWRkcmVzcyIsInN0YXJSYXRpbmciLCJob3RlbE5hbWUiLCJ1c2VyUmF0aW5nIiwiYnVkZ2V0IiwibHV4dXJ5IiwicmVjb21tZW5kZWQiLCJwcm94aW1pdHkiLCJmdWxsIiwibmFtZSIsInJhdGluZyIsImJvb2wiLCJHVWwiLCJib3hTaGFkb3ciLCJ3aGl0ZVNwYWNlIiwiY29udGVudCIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIb3RlbERldGFpbE5hdiIsIm9wdGlvbnMiLCJMaW5rIiwibmV3TGkiLCJzZWN0aW9uX25hbWUiLCJhcnJheSIsImZ1bmMiLCJHTWFwRGl2IiwiR1ZpZXdNYXBBIiwiYSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiY29sb3IiLCJHTWFwRGF0YURpdiIsIkhvdGVsTG9jYXRpb25NYXAiLCJob3RlbCIsIkhvdGVsUmV2aWV3IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsIm9mZnNldCIsInJlbmRlciIsInRlc3RpbW9uaWFscyIsInRlc3RpbW9uaWFsQ2hhbmdlSGFuZGxlciIsInByb3BzIiwidG90YWxFbnRyaWVzIiwidGVzdGltb25pYWxMaXN0IiwiY3VycmVudFBhZ2UiLCJoYXNNb3JlIiwiaGVhZGluZyIsImZvckhlYWRpbmciLCJHTmVhcmJ5VWwiLCJ1bCIsIkdMYW5kbWFya1R5cGVTcGFuIiwiYm9yZGVyIiwiR0Rvd25BcnJvd1NwYW4iLCJkaXNwbGF5IiwiR05lYXJCeUl0ZW1zRGl2IiwiYm9yZGVyVG9wIiwib3ZlcmZsb3ciLCJ0cmFuc2Zvcm0iLCJMYW5kbWFya0xpc3QiLCJuZWFyQnlJdGVtIiwibGFiZWxzIiwibGFiZWwiLCJkaXN0YW5jZSIsInZhbHVlIiwidW5pdCIsIk5lYXJieUNhcmRJdGVtIiwibmVhckJ5TGlzdCIsIk5lYXJieUNhcmQiLCJuZWFyYnlUeXBlTGlzdCIsIm5lYXJCeVR5cGUiLCJOZWFyYnkiLCJHQXJyb3dEb3duU3BhbiIsImdldERlZmF1bHRNb250aCIsIm1vbnRoIiwibW9udGhzIiwibW9udGhWYWwiLCJmaWx0ZXIiLCJtb250aE9iaiIsInBhcnNlSW50IiwiUHJpY2VSYW5nZSIsImlzU21hbGwiLCJwcmljZVJhbmdlIiwidXBkYXRlUHJpY2UiLCJwcmljZVRpdGxlIiwib25lT2ZUeXBlIiwiUHJpY2VWYWwiLCJjdXJyZW5jeVN5bWJvbCIsImN1cnJlbmN5IiwicHJpY2VGcm9tIiwicHJpY2VUbyIsIm1hcmdpbkJvdHRvbSIsImRlZmF1dFByb3BzIiwiR0NhcmRJbWFnZURpdiIsIkdDYXJkRGF0YURpdiIsIkdDYXJkSW1nRGF0YURpdiIsImJhY2tncm91bmQiLCJHSG90ZWxQbGFjZWhvbGRlckRpdiIsIkNhcmQiLCJpbWFnZXMiLCJ0b3BSYXRlZEx1eHVyeSIsInRvcFJhdGVkQnVkZ2V0IiwiZGlzcGxheU5hbWUiLCJ0dFJlY29tZW5kZWQiLCJiYXNlVXJsIiwidGV4dEFsaWduIiwiYnJpZWYiLCJmcm9tIiwiU2ltaWxhckhvdGVscyIsInNpbWlsYXJIb3RlbHMiLCJ2aWV3QWxsIiwiaG90ZWxzIiwiR1N3aXBlckNvbnRhaW5lckRpdiIsIm9wYWNpdHkiLCJib3JkZXJSYWRpdXMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ6SW5kZXgiLCJyaWdodCIsImJvcmRlclJpZ2h0IiwibWFyZ2luVG9wIiwidG9wIiwiR1RodW1ibmFpbERpdiIsIm1hcmdpbiIsImN1cnNvciIsIkdTd2lwZXJJdGVtRGl2IiwiR1NtYWxsU2xpZGVyRGl2IiwiR0ltYWdlQ3JlZGl0c0RpdiIsInBhcnNlciIsIlBhcnNlciIsInJlbmRlckltYWdlU2xpZGVyIiwiaW1hZ2UiLCJjYXB0aW9uTGluayIsInBhcnNlIiwiU2xpZGVyV2l0aFRodW1ibmFpbCIsImdhbGxlcnlTd2lwZXIiLCJnYWxsZXJ5UmVmIiwiYmluZCIsInJlZiIsInNldFN0YXRlIiwic3dpcGVyIiwiZ2FsbGVyeVN3aXBlclBhcmFtcyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsImxvYWRQcmV2TmV4dCIsInBpY3R1cmVEZXRhaWxzIiwiR0hvdGVsTWFwVG9vbFRpcEJ1dHRvbiIsImJ1dHRvbiIsIkdIb3RlbFRvb2x0aXBEaXYiLCJHSG90ZWxUaHVtYm5pbERpdiIsIkdIb3RlbFRleHREaXYiLCJ3b3JkV3JhcCIsIm1hcmdpbkxlZnQiLCJIb3RlbE1hcFRvb2x0aXAiLCJNYXBQb3B1cCIsIlNlZU1hcFBvcFVwIiwicmVuZGVyTWFwQ29tcG9uZW50IiwiTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImN1c3RvbVByb3BzIiwiY29vcmRpbmF0ZXMiLCJpc01hcmtlclNob3duIiwiem9vbVJhdGlvIiwibGF0IiwibG5nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJsb25nIiwiTXlNYXBDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInJlYWN0R29vZ2xlTWFwcyIsInRoZW4iLCJtb2R1bGUiLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5mbyIsImdvb2dsZU1hcFVybCIsImNvbmZpZyIsImdvb2dsZU1hcCIsIkdDaGVja1NwYW4iLCJDaGVja0xpc3QiLCJjaGVja0xpc3QiLCJjaGVja1BvaW50IiwiQ29tbW9uRHJvcGRvd24iLCJjbGlja0hhbmRsZXIiLCJkZWZhdWx0T3B0aW9uIiwicGxhY2Vob2xkZXIiLCJHUmV2aWV3VHlwZURpdiIsIkdSZXZpZXdDb3VudERpdiIsIkdBdXRob3JJbWdEaXYiLCJFeHBlcnRzUmV2aWV3IiwiUmVhY3QiLCJleHBlcnRSZXZpZXdzIiwiYXV0aG9yIiwiYXV0aG9yUGljIiwiYXV0aG9yTmFtZSIsInVzZXJEZXNpZ25hdGlvbiIsInVzZXJMb2NhdGlvbiIsImJvZHkiLCJjYXRlZ29yeVJhdGluZ3MiLCJjYXRlZ29yeSIsIkZvcm1PbmVDVEEiLCJoYW5kbGVDbGljayIsImFkbWluQ29tbWVudHMiLCJydFByb3BzIiwibG9jYXRpb24iLCJocmVmIiwiU0VHTUVOVF9BRE1JTl9DT01NRU5UIiwicnRyaXBQcm9wcyIsInVwZGF0ZUZyb21PbmVQcm9wcyIsInB1c2hTdGF0ZSIsImNoaWxkcmVuIiwiQ2xvc2VJdCIsIkNsb3NlSXRMZWZ0IiwiY3VzdG9tU3R5bGVzIiwib3ZlcmxheSIsImN1c3RvbVN0eWxlc0Z1bGxWaWV3IiwicGFkZGluZ1RvcCIsIk1vZGFsQ29tcG9uZW50IiwiaXNPcGVuIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImFmdGVyT3Blbk1vZGFsIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjdXN0b21DbG9zZVRyaWdnZXIiLCJvblJlcXVlc3RDbG9zZUN1c3RvbSIsInN0eWxlIiwib25BZnRlck1vZGFsT3BlbiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZnVsbFZpZXciLCJoYXNDdXN0b21DbG9zZSIsImhhc05vQ2xvc2UiLCJpc1doaXRlSWNvbiIsImlzVHJpZ2dlckZ1bGxWaWV3IiwiY3VzdG9tQ2xhc3MiLCJ0cmlnZ2VyIiwibm9kZSIsIkdldENhbGxiYWNrQmFubmVyIiwiR0luY2x1c2lvbnNVbCIsIm92ZXJmbG93WCIsIm1hcmdpblJpZ2h0IiwiSGlnaGxpZ2h0VGFicyIsInRhZ0xpc3QiLCJ0IiwiR0luY2x1c2lvbkhpZ2hsaWdodFVsIiwiUHJvcGVydHlUeXBlIiwiUmVhZE1vcmVCeUhlaWdodCIsImV4cGFuZGVkIiwiaGFuZGxlU3VibWl0IiwibWF4SGVpZ2h0Iiwic2hvd1RpdGxlIiwiZGF0YSIsInJlYWRNb3JlIiwiZG93bkFycm93IiwiU2Nyb2xsRWxlbWVudCIsIlN0aWNreSIsInZpc2liaWxpdHkiLCJjcmVhdGVIZWFkZXJDb25zdGFudHMiLCJkaXNwbGF5U2VjdGlvbnMiLCJuZWFyYnlTZWN0aW9ucyIsInBvcHVsYXJQYWNrYWdlcyIsImhlYWRlckNvbnN0YW50cyIsIk9iamVjdCIsImtleXMiLCJrIiwiSGRwIiwiZGVzdGluYXRpb25DaXR5IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiZGV0YWlscyIsInVwZGF0ZVRlc3RpbW9uaWFscyIsInBhcmFtcyIsInVwZGF0ZU1vbnRoIiwicGFja2FnZXMiLCJzbGlkZXJQaWMiLCJoaWdobGlnaHRzIiwiY2l0eSIsImNvdW50cnkiLCJjb25jbHVzaW9uVGV4dCIsInN1bW1hcnlUZXh0IiwidHJhdmVsTW9udGgiLCJwcm9wZXJ0eVR5cGUiLCJkZXN0aW5hdGlvbkNvdW50cnkiLCJmYXFzIiwibWV0YVRhZ3MiLCJtZXRhRGF0YSIsImNhbm9uaWNhbFVybCIsImJhY2tVcmwiLCJxdWVyeSIsInBhcmVudFRpdGxlIiwiUG9wdWxhclBhY2thZ2VzQ29udGFpbmVyIiwiUG9wdWxhclBhY2thZ2VzIiwiY29udGFpbmVyIiwiVHJhdmVsZXJTdG9yaWVzQ29udGFpbmVyIiwiVHJhdmVsZXJTdG9yaWVzIiwicGF0aG5hbWUiLCJpc1B1Ymxpc2hlZCIsImJvcmRlckxpbmUiLCJuYXYiLCJzY3JvbGxMaW5rIiwib3ZlcnZpZXciLCJyb29tcyIsImZhY2lsaXRpZXMiLCJkaW5pbmciLCJjc3IiLCJicmVhZGNydW1icyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSx3QkFBd0JDLG1CQUFVQyxHQUFWLENBQWM7QUFDMUMsVUFBUTtBQUNOQyxjQUFVLEtBREo7QUFFTkMsY0FBVSxLQUZKO0FBR05DLGVBQVc7QUFITCxHQURrQztBQU0xQyx5QkFBdUI7QUFDckJDLGNBQVUsaUJBRFc7QUFFckJDLGdCQUFZO0FBRlM7QUFObUIsQ0FBZCxDQUE5Qjs7QUFZQSxNQUFNQyxZQUFZUCxtQkFBVVEsSUFBVixDQUFlO0FBQy9CQyxTQUFPLE1BRHdCO0FBRS9CQyxVQUFRLE1BRnVCO0FBRy9CLFdBQVM7QUFDUEMsY0FBVTtBQURIO0FBSHNCLENBQWYsQ0FBbEI7O0FBUUEsTUFBTUMsWUFBWSxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDO0FBQWpCLENBQUQsS0FBeUM7QUFDekQsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixNQUErQkosYUFBckM7QUFDQSxRQUFNSyxtQkFBbUIsRUFBekI7QUFBQSxRQUE2QkMsa0JBQWtCLEVBQS9DO0FBQ0EsTUFBSUMsZ0JBQWdCLEVBQXBCOztBQUNBLE1BQUcsQ0FBQ0wsS0FBS00sTUFBTixJQUFnQixDQUFDSixXQUFwQixFQUFnQztBQUM5QixXQUFPLHlDQUFQO0FBQ0Q7O0FBQUE7QUFDRCxTQUNFO0FBQUssZUFBVTtBQUFmLEtBQ0U7QUFBSSxlQUFVO0FBQWQsS0FBaUNELFNBQVMsWUFBMUMsRUFBd0RGLG1CQUFvQixPQUFNQSxnQkFBaUIsRUFBM0MsR0FBK0MsSUFBdkcsQ0FERixFQUVFLDZCQUFDLHFCQUFEO0FBQXVCLGVBQVU7QUFBakMsS0FFSUMsS0FBS08sR0FBTCxDQUFTLENBQUNDLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUN2Qkosb0JBQWdCSSxRQUFRLENBQVIsR0FBWUwsZUFBWixHQUE4QkQsZ0JBQTlDO0FBQ0EsVUFBTU8sZ0JBQWdCRixJQUFJRyxHQUFKLEdBQ3BCQyxNQUFNLG9DQUFzQkosSUFBSUcsR0FBSixDQUFRRSxPQUFSLENBQWdCLFNBQWhCLEVBQTJCLEVBQTNCLENBQXRCLENBQU4sSUFDRUQsTUFBTSxvQ0FBc0JKLElBQUlHLEdBQUosQ0FBUUUsT0FBUixDQUFnQixTQUFoQixFQUEyQixFQUEzQixDQUF0QixDQUFOLENBREYsR0FFRUQsTUFBTUUsV0FIWSxHQUdFRixNQUFNRSxXQUg5QjtBQUlBVCxrQkFBY1UsSUFBZCxDQUNFO0FBQUksV0FBS1AsSUFBSVEsRUFBYjtBQUFpQixpQkFBVTtBQUEzQixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLFNBQUQ7QUFBVyxpQkFBVTtBQUFyQixPQUNFLDZCQUFDLGFBQUQsT0FERixDQURGLEVBSUU7QUFBRyxpQkFBVTtBQUFiLE9BQWlDUixJQUFJUyxJQUFyQyxDQUpGLENBREYsQ0FERjtBQVVELEdBaEJELENBRkosRUFvQkUsNkJBQUMsaUJBQUQ7QUFDRSxjQUFVZCxnQkFEWjtBQUVFLGNBQVVDLGVBRlo7QUFHRSxrQkFBYSxVQUhmO0FBSUUsa0JBQWE7QUFKZixJQXBCRixDQUZGLEVBK0JJRixjQUNFLDZCQUFDLHlCQUFEO0FBQ0UsYUFBU0osY0FBY0csS0FEekI7QUFFRSxlQUFXLEVBRmI7QUFHRSxhQUFTSCxjQUFjSSxXQUh6QjtBQUlFLGVBQVc7QUFKYixJQURGLEdBTU8sSUFyQ1gsQ0FERjtBQTBDRCxDQWpERDs7ZUFtRGVMLFM7O0FBRWZBLFVBQVVxQixTQUFWLEdBQXNCO0FBQ3BCcEIsaUJBQWVxQixtQkFBVUMsTUFBVixDQUFpQkMsVUFEWjtBQUVwQnRCLG9CQUFrQm9CLG1CQUFVRztBQUZSLENBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQyxrQkFBa0J0QyxtQkFBVUMsR0FBVixDQUFjO0FBQ3BDUSxTQUFPO0FBRDZCLENBQWQsQ0FBeEI7O0FBSUEsTUFBTThCLE1BQU0sQ0FBQztBQUFFQyxhQUFGO0FBQWVDLFNBQWY7QUFBd0JDO0FBQXhCLENBQUQsS0FDViwwQ0FDRTtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLG1CQUFEO0FBQ0UsV0FBUztBQUNQQyxZQUFRSCxXQUREO0FBRVBJLFVBQU0sbUJBRkM7QUFHUEMsYUFBUyxPQUhGO0FBSVBDLFNBQUssWUFKRTtBQUtQWCxZQUFTLFdBQVVNLE9BQVE7QUFMcEIsR0FEWDtBQVFFLGdCQUFjLE1BQU0sQ0FBRTtBQVJ4QixHQVVFO0FBQUssYUFBVTtBQUFmLEdBQW9EO0FBQUssYUFBVTtBQUFmLEVBQXBELDBCQUFnR0MsSUFBaEcsQ0FWRixDQURGLENBREYsRUFlRSwwQ0FDRSw2QkFBQyxtQkFBRDtBQUNFLFdBQVM7QUFDUEMsWUFBUUgsV0FERDtBQUVQSSxVQUFNLG1CQUZDO0FBR1BDLGFBQVMsT0FIRjtBQUlQQyxTQUFLLHNCQUpFO0FBS1BYLFlBQVMsV0FBVU0sT0FBUTtBQUxwQixHQURYO0FBUUUsZ0JBQWMsTUFBTSxDQUFFO0FBUnhCLEdBVUU7QUFBSyxhQUFVO0FBQWYsR0FBNkM7QUFBSyxhQUFVO0FBQWYsRUFBN0MsK0JBQThGLHlDQUEyQkQsV0FBM0IsQ0FBOUYsQ0FWRixDQURGLENBZkYsQ0FERjs7QUFpQ0FELElBQUlOLFNBQUosR0FBZ0I7QUFDZE8sZUFBYU4sbUJBQVVHLE1BQVYsQ0FBaUJELFVBRGhCO0FBRWRLLFdBQVNQLG1CQUFVYSxNQUFWLENBQWlCWCxVQUZaO0FBR2RNLFFBQU1SLG1CQUFVRyxNQUFWLENBQWlCRDtBQUhULENBQWhCO2VBTWVHLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERmOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTVMsbUJBQW1CaEQsbUJBQVVDLEdBQVYsQ0FBYztBQUNyQ1EsU0FBTyxPQUQ4QjtBQUVyQ0MsVUFBUSxPQUY2QjtBQUdyQyxXQUFTO0FBQ1BSLGNBQVUsTUFESDtBQUVQK0MsZUFBVztBQUZKO0FBSDRCLENBQWQsQ0FBekI7O0FBU0EsTUFBTUMsYUFBYSxDQUFDO0FBQUVDLEtBQUY7QUFBT0MsT0FBUDtBQUFjQztBQUFkLENBQUQsS0FDakIsNkJBQUMsZ0JBQUQ7QUFBa0IsYUFBVTtBQUE1QixHQUNFLDZCQUFDLFlBQUQ7QUFBSyxPQUFLRixHQUFWO0FBQWUsU0FBT0MsS0FBdEI7QUFBNkIsT0FBS0MsR0FBbEM7QUFBdUMsU0FBTyxHQUE5QztBQUFtRCxVQUFRO0FBQTNELEVBREYsQ0FERjs7QUFNQUgsV0FBV2pCLFNBQVgsR0FBdUI7QUFDckJrQixPQUFLakIsbUJBQVVHLE1BQVYsQ0FBaUJELFVBREQ7QUFFckJnQixTQUFPbEIsbUJBQVVHLE1BQVYsQ0FBaUJELFVBRkg7QUFHckJpQixPQUFLbkIsbUJBQVVHO0FBSE0sQ0FBdkI7O0FBTUEsTUFBTWlCLGdCQUFnQixDQUFDO0FBQUVDLFNBQUY7QUFBV3pDO0FBQVgsQ0FBRCxLQUNwQjtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUksYUFBVTtBQUFkLHVCQUFpREEsbUJBQW9CLE9BQU1BLGdCQUFpQixFQUEzQyxHQUErQyxJQUFoRyxDQURGLEVBR0l5QyxRQUFRQyxRQUFSLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxlQUFEO0FBQ0UsTUFBRyxvQkFETDtBQUVFLGNBQVcsT0FGYjtBQUdFLGdCQUFjLEVBSGhCO0FBSUUsaUJBQWMsTUFKaEI7QUFLRSxnQkFBYztBQUFFL0MsV0FBTyxHQUFUO0FBQWNDLFlBQVE7QUFBdEI7QUFMaEIsR0FRSTZDLFFBQVFDLFFBQVIsQ0FBaUJsQyxHQUFqQixDQUFxQm1DLFdBQ25CO0FBQ0UsT0FBS0EsUUFBUTFCLEVBRGY7QUFFRSxhQUFVLHFDQUZaO0FBR0UsU0FBTztBQUFFN0IsY0FBVTtBQUFaO0FBSFQsR0FLRSw2QkFBQyxVQUFEO0FBQVksT0FBS3VELFFBQVFDLEdBQVIsQ0FBWUMsTUFBN0I7QUFBcUMsU0FBT0YsUUFBUUMsR0FBUixDQUFZRSxXQUF4RDtBQUFxRSxPQUFLSCxRQUFRSTtBQUFsRixFQUxGLENBREYsQ0FSSixDQURGLENBREYsR0FxQlcsSUF4QmYsRUEyQklOLFFBQVF0QyxXQUFSLEdBQ0UsNkJBQUMseUJBQUQ7QUFDRSxXQUFTc0MsUUFBUXZDLEtBRG5CO0FBRUUsYUFBVyxFQUZiO0FBR0UsV0FBU3VDLFFBQVF0QyxXQUhuQjtBQUlFLGFBQVc7QUFKYixFQURGLEdBTU8sSUFqQ1gsRUFtQ0dzQyxRQUFReEMsSUFBUixHQUFlLDZCQUFDLHNCQUFEO0FBQWUsV0FBU3dDLFFBQVF4QztBQUFoQyxFQUFmLEdBQTBELElBbkM3RCxDQURGOztlQXdDZXVDLGE7O0FBRWZBLGNBQWNyQixTQUFkLEdBQTBCO0FBQ3hCc0IsV0FBU3JCLG1CQUFVQyxNQUFWLENBQWlCQyxVQURGO0FBRXhCdEIsb0JBQWtCb0IsbUJBQVVHO0FBRkosQ0FBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTXlCLGdCQUNKLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ00sMENBQ0U7QUFBRyxhQUFVO0FBQWIsYUFERixFQUlJQSxZQUFZQyxLQUFaLEdBQ0U7QUFBRyxRQUFPLDBCQUFWO0FBQXFDLGFBQVU7QUFBL0MsR0FDRTtBQUFNLGFBQVksMkNBQTBDQyx5QkFBT0MsSUFBSztBQUF4RSxHQUEyRSw2QkFBQyxZQUFELE9BQTNFLENBREYsRUFFR0gsWUFBWUMsS0FGZixFQUdHRCxZQUFZQyxLQUFaLElBQXFCRCxZQUFZSSxlQUFqQyxJQUFvREosWUFBWUksZUFBWixDQUE0QjlDLE1BQWhGLEdBQXlGLEdBQXpGLEdBQStGLEVBSGxHLEVBSUcwQyxZQUFZSSxlQUFaLElBQStCSixZQUFZSSxlQUFaLENBQTRCOUMsTUFBM0QsR0FBb0UwQyxZQUFZSSxlQUFoRixHQUFrRyxFQUpyRyxDQURGLEdBTVMsSUFWYixFQWFJSixZQUFZSyxLQUFaLEdBQ0U7QUFBRyxhQUFVLGdDQUFiO0FBQThDLFFBQU8sVUFBU0wsWUFBWUssS0FBTTtBQUFoRixHQUNFO0FBQU0sYUFBWSwyQ0FBMENILHlCQUFPQyxJQUFLO0FBQXhFLEdBQTJFLDZCQUFDLGNBQUQsT0FBM0UsQ0FERixFQUVJSCxZQUFZSyxLQUZoQixDQURGLEdBSVMsSUFqQmIsRUFvQklMLFlBQVlNLE9BQVosR0FDRSw2QkFBQyxpQkFBRDtBQUFNLGFBQVUsNEJBQWhCO0FBQTZDLE9BQUksVUFBakQ7QUFBNEQsTUFBSU4sWUFBWU0sT0FBNUU7QUFBcUYsVUFBTztBQUE1RixHQUNFO0FBQU0sYUFBWSwyQ0FBMENKLHlCQUFPQyxJQUFLO0FBQXhFLEdBQTJFLDZCQUFDLDRCQUFELE9BQTNFLENBREYsRUFFRTtBQUFNLGFBQVU7QUFBaEIsR0FBNkJILFlBQVlNLE9BQXpDLENBRkYsQ0FERixHQUlZLElBeEJoQixDQUZSOztBQStCQVAsY0FBYzdCLFNBQWQsR0FBMEI7QUFDeEI4QixlQUFhN0IsbUJBQVVDO0FBREMsQ0FBMUI7QUFJQTJCLGNBQWNRLFlBQWQsR0FBNkI7QUFDM0JQLGVBQWE7QUFEYyxDQUE3QjtlQUllRCxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDZjs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTVMsb0JBQW9CLENBQUM7QUFDRUMsU0FERjtBQUNXQyxZQURYO0FBQ3VCQyxXQUR2QjtBQUNrQzVELGtCQURsQztBQUNvRDZELFlBRHBEO0FBRUVDLFFBRkY7QUFFVUMsUUFGVjtBQUVrQkMsYUFGbEI7QUFFK0J4RCxLQUYvQjtBQUVvQ3lELFdBRnBDO0FBRStDdkM7QUFGL0MsQ0FBRCxLQUl0QjtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0E7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFLLGFBQVU7QUFBZixHQUNBO0FBQUksYUFBVTtBQUFkLEdBQ0kxQixnQkFESixFQUVJMEIsY0FBZSxLQUFLLHlDQUEyQkEsV0FBM0IsQ0FBeUMsRUFBN0QsR0FBaUUsRUFGckUsQ0FEQSxFQU1FaUMsYUFBYSxDQUFiLEdBQWlCO0FBQUssYUFBVTtBQUFmLEdBQ2IsNkJBQUMsbUJBQUQ7QUFBWSxVQUFRQSxVQUFwQjtBQUFnQyxzQkFBb0I7QUFBcEQsRUFEYSxDQUFqQixHQUVTLElBUlgsQ0FERixFQVlLRyxVQUFVQyxNQUFYLEdBQXFCO0FBQUssYUFBVTtBQUFmLEdBQXFCLDZCQUFDLHFCQUFEO0FBQWMsVUFBUUQsTUFBdEI7QUFBOEIsVUFBUUM7QUFBdEMsRUFBckIsQ0FBckIsR0FBbUcsSUFadkcsQ0FEQSxFQWVBO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBRyxhQUFVO0FBQWIsR0FDR0wsUUFBUVEsSUFEWCxDQURGLEVBSUUsNkJBQUMseUJBQUQ7QUFDRSxTQUFPO0FBQUVDLFVBQU1QLFNBQVI7QUFBbUJELGdCQUFZQSxVQUEvQjtBQUEyQ0QsYUFBU0EsT0FBcEQ7QUFBNkRsRCxTQUFLQSxHQUFsRTtBQUF1RXFELGdCQUFZQTtBQUFuRixHQURUO0FBRUUsU0FBTSxVQUZSO0FBR0UsYUFBV0k7QUFIYixFQUpGLENBZkEsQ0FERixFQTBCRSwwQ0FFSUosV0FBV08sTUFBWCxHQUFvQixDQUFwQixHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsc0JBQUQ7QUFBZSxxQkFBbUI7QUFBRTdFLGNBQVUsTUFBWjtBQUFvQkMsZ0JBQVk7QUFBaEMsR0FBbEM7QUFBMkUsaUJBQWU7QUFBRTBCLFVBQU0yQyxXQUFXM0MsSUFBbkI7QUFBeUJrRCxZQUFRUCxXQUFXTztBQUE1QztBQUExRixFQURGLENBREYsR0FHVyxJQUxmLEVBT0lKLGNBQWM7QUFBSyxhQUFVO0FBQWYsR0FBNEIsNkJBQUMsc0JBQUQsT0FBNUIsQ0FBZCxHQUFvRSxJQVB4RSxDQTFCRixDQUpKOztBQTBDQVAsa0JBQWtCdEMsU0FBbEIsR0FBOEI7QUFDNUJ1QyxXQUFTdEMsbUJBQVVDLE1BRFM7QUFFNUJzQyxjQUFZdkMsbUJBQVVhLE1BRk07QUFHNUIyQixhQUFXeEMsbUJBQVVHLE1BSE87QUFJNUJ2QixvQkFBa0JvQixtQkFBVUcsTUFKQTtBQUs1QnNDLGNBQVl6QyxtQkFBVUMsTUFMTTtBQU01QnlDLFVBQVExQyxtQkFBVWlELElBTlU7QUFPNUJOLFVBQVEzQyxtQkFBVWlELElBUFU7QUFRNUJMLGVBQWE1QyxtQkFBVWlELElBUks7QUFTNUIzQyxlQUFhTixtQkFBVUcsTUFUSztBQVU1QmYsT0FBS1ksbUJBQVVDLE1BVmE7QUFXNUI0QyxhQUFXN0MsbUJBQVVDO0FBWE8sQ0FBOUI7QUFjQW9DLGtCQUFrQkQsWUFBbEIsR0FBaUM7QUFDL0JFLFdBQVMsRUFEc0I7QUFFL0JDLGNBQVksQ0FGbUI7QUFHL0JFLGNBQVksRUFIbUI7QUFJL0JELGFBQVcsRUFKb0I7QUFLL0I1RCxvQkFBa0IsRUFMYTtBQU0vQjhELFVBQVEsS0FOdUI7QUFPL0JDLFVBQVEsS0FQdUI7QUFRL0JDLGVBQWEsS0FSa0I7QUFTL0J0QyxlQUFhLEVBVGtCO0FBVS9CbEIsT0FBSyxFQVYwQjtBQVcvQnlELGFBQVc7QUFYb0IsQ0FBakM7ZUFjZVIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZmOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTWEsTUFBTXBGLG1CQUFVQyxHQUFWLENBQWM7QUFDeEIsZUFBYSxRQURXO0FBRXhCb0YsYUFBVyxrQkFGYTtBQUd4QixhQUFXO0FBQ1RqRixlQUFXLE1BREY7QUFFVCxXQUFPO0FBQ0xrRixrQkFBWSxRQURQO0FBRUwsaUJBQVc7QUFDVDVFLGdCQUFRLEtBREM7QUFFVEQsZUFBTyxNQUZFO0FBR1Q4RSxpQkFBUyxPQUhBO0FBSVQ1RSxrQkFBVSxVQUpEO0FBS1Q2RSxnQkFBUSxHQUxDO0FBTVRDLGNBQU07QUFORyxPQUZOO0FBVUwsaUJBQVc7QUFDVEMseUJBQWlCLFNBRFI7QUFFVCxtQkFBVztBQUNUQSwyQkFBaUI7QUFEUjtBQUZGLE9BVk47QUFnQkwsa0JBQVk7QUFDVkEseUJBQWlCLFNBRFA7QUFFVixtQkFBVztBQUNUQSwyQkFBaUI7QUFEUjtBQUZEO0FBaEJQO0FBRkU7QUFIYSxDQUFkLENBQVo7O0FBZ0NBLE1BQU1DLGlCQUFpQixDQUFDO0FBQUVDLFNBQUY7QUFBV0MsTUFBWDtBQUFpQnJELGFBQWpCO0FBQThCQyxTQUE5QjtBQUF1Q0M7QUFBdkMsQ0FBRCxLQUNyQiw2QkFBQyxHQUFEO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUksYUFBVTtBQUFkLEdBRUlrRCxRQUFRdEUsR0FBUixDQUFZLENBQUN3RSxLQUFELEVBQVF0RSxLQUFSLEtBQ1Y7QUFBSSxPQUFLQTtBQUFULEdBQ0UsNkJBQUMsSUFBRDtBQUFNLGVBQVksUUFBbEI7QUFBMkIsYUFBVSwyQ0FBckM7QUFDTSxNQUFJc0UsTUFBTUMsWUFEaEI7QUFDOEIsV0FEOUI7QUFDa0MsY0FEbEM7QUFDeUMsaUJBRHpDO0FBQ21ELFlBQVUsR0FEN0Q7QUFDa0UsVUFBUSxDQUFDO0FBRDNFLEdBRUdELE1BQU05RSxLQUZULENBREYsQ0FERixDQUZKLENBREYsQ0FERixFQWVFO0FBQUssYUFBVTtBQUFmLEVBZkYsQ0FERixDQURGOztBQXdDQTJFLGVBQWUxRCxTQUFmLEdBQTJCO0FBQ3pCMkQsV0FBUzFELG1CQUFVOEQsS0FBVixDQUFnQjVELFVBREE7QUFFekJ5RCxRQUFNM0QsbUJBQVUrRCxJQUFWLENBQWU3RCxVQUZJO0FBR3pCSSxlQUFhTixtQkFBVUcsTUFBVixDQUFpQkQsVUFITDtBQUl6QkssV0FBU1AsbUJBQVVhLE1BQVYsQ0FBaUJYLFVBSkQ7QUFLekJNLFFBQU1SLG1CQUFVRyxNQUFWLENBQWlCRDtBQUxFLENBQTNCO2VBUWV1RCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTU8sVUFBVWxHLG1CQUFVQyxHQUFWLENBQWM7QUFDNUJVLFlBQVU7QUFEa0IsQ0FBZCxDQUFoQjs7QUFJQSxNQUFNd0YsWUFBWW5HLG1CQUFVb0csQ0FBVixDQUFZO0FBQzVCVixtQkFBaUIsU0FEVztBQUU1QnJGLFlBQVUsTUFGa0I7QUFHNUJnRyxjQUFZLE1BSGdCO0FBSTVCQyxXQUFTLFVBSm1CO0FBSzVCQyxTQUFPLE1BTHFCO0FBTTVCLGFBQVc7QUFDVGIscUJBQWlCLFNBRFI7QUFFVGEsV0FBTztBQUZFO0FBTmlCLENBQVosQ0FBbEI7O0FBWUEsTUFBTUMsY0FBY3hHLG1CQUFVQyxHQUFWLENBQWM7QUFDaENRLFNBQU87QUFEeUIsQ0FBZCxDQUFwQjs7QUFJQSxNQUFNZ0csbUJBQW1CLENBQUM7QUFBRXpGLE9BQUY7QUFBUytELFdBQVQ7QUFBb0IyQjtBQUFwQixDQUFELEtBQ3ZCO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsT0FBRDtBQUFTLGFBQVU7QUFBbkIsR0FDRSw2QkFBQyxxQkFBRDtBQUNFLFdBQ0U7QUFBRyxlQUFVO0FBQWIsZ0JBRko7QUFJRSxZQUFVO0FBSlosR0FNRSw2QkFBQyxXQUFEO0FBQWEsYUFBVTtBQUF2QixHQUNFLDZCQUFDLGlCQUFEO0FBQVUsU0FBT0E7QUFBakIsRUFERixDQU5GLENBREYsQ0FERixDQURGOztBQWlCQUQsaUJBQWlCeEUsU0FBakIsR0FBNkI7QUFDM0I4QyxhQUFXN0MscUJBQVVDLE1BQVYsQ0FBaUJDLFVBREQ7QUFFM0JwQixTQUFPa0IscUJBQVVHLE1BQVYsQ0FBaUJELFVBRkc7QUFHM0JzRSxTQUFPeEUscUJBQVVDLE1BQVYsQ0FBaUJDO0FBSEcsQ0FBN0I7ZUFNZXFFLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEZjs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1FLFcsR0FBTixNQUFNQSxXQUFOLFNBQTBCQyxnQkFBMUIsQ0FBb0M7QUFDbENDLGdCQUFjO0FBQ1o7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUTtBQURHLEtBQWI7QUFHRDs7QUFDREMsV0FBUztBQUNQLFVBQU07QUFBQ0Msa0JBQUQ7QUFBZXRDLGdCQUFmO0FBQTJCdUMsOEJBQTNCO0FBQXFEcEc7QUFBckQsUUFBeUUsS0FBS3FHLEtBQXBGO0FBQ0EsVUFBTTtBQUFDQyxrQkFBRDtBQUFlQyxxQkFBZjtBQUFnQ0MsaUJBQWhDO0FBQTZDQztBQUE3QyxRQUF3RE4sWUFBOUQ7QUFDQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLGdCQUFEO0FBQVMsYUFBT0EsYUFBYWpHLEtBQTdCO0FBQW9DLGVBQVNpRyxhQUFhTyxPQUExRDtBQUFtRSxZQUFNO0FBQUNDLG9CQUFXM0c7QUFBWjtBQUF6RSxNQURGLEVBRUU7QUFBSyxpQkFBVTtBQUFmLE9BRUk2RCxjQUFjQSxXQUFXdEQsTUFBekIsR0FBa0MsNkJBQUMsc0JBQUQ7QUFBZSx5QkFBbUI7QUFBQ2hCLGtCQUFVLE1BQVg7QUFBbUJDLG9CQUFZO0FBQS9CLE9BQWxDO0FBQXlFLG1CQUF6RTtBQUFpRix5QkFBakY7QUFBK0YscUJBQWVxRTtBQUE5RyxNQUFsQyxHQUFnSyxJQUZwSyxDQUZGLENBREYsRUFVSTBDLG1CQUFtQkEsZ0JBQWdCaEcsTUFBbkMsR0FBNEMsNkJBQUMsc0JBQUQ7QUFBZSxxQkFBZWdHLGdCQUFnQixDQUFoQjtBQUE5QixNQUE1QyxHQUFtRyxJQVZ2RyxDQURGO0FBZ0JEOztBQTFCaUMsQztBQTZCcENWLFlBQVkxRSxTQUFaLEdBQXdCO0FBQ3RCZ0YsZ0JBQWMvRSxtQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUV0QnVDLGNBQVl6QyxtQkFBVUMsTUFGQTtBQUd0QitFLDRCQUEwQmhGLG1CQUFVK0QsSUFBVixDQUFlN0QsVUFIbkI7QUFJdEJ0QixvQkFBa0JvQixtQkFBVUc7QUFKTixDQUF4QjtBQU9Bc0UsWUFBWXJDLFlBQVosR0FBMkI7QUFDekJLLGNBQVk7QUFEYSxDQUEzQjtlQUllZ0MsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ2Y7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUdBLE1BQU1lLFlBQVkxSCxtQkFBVTJILEVBQVYsQ0FBYTtBQUM3QixVQUFRO0FBQ05yQixhQUFTLFVBREg7QUFFTloscUJBQWlCO0FBRlgsR0FEcUIsQ0FLN0I7QUFDQTtBQUNBOztBQVA2QixDQUFiLENBQWxCOztBQVVBLE1BQU1rQyxvQkFBb0I1SCxtQkFBVVEsSUFBVixDQUFlO0FBQ3ZDSCxZQUFVLE1BRDZCO0FBRXZDSyxVQUFRLE1BRitCO0FBR3ZDNEYsV0FBUyxTQUg4QjtBQUl2Q3VCLFVBQVE7QUFKK0IsQ0FBZixDQUExQjs7QUFPQSxNQUFNQyxpQkFBaUI5SCxtQkFBVVEsSUFBVixDQUFlO0FBQ3BDQyxTQUFPLE1BRDZCO0FBRXBDQyxVQUFRLEtBRjRCO0FBR3BDcUgsV0FBUyxPQUgyQjtBQUlwQyxXQUFTO0FBQ1B0SCxXQUFPLE1BREE7QUFFUEMsWUFBUSxLQUZEO0FBR1BDLGNBQVU7QUFISDtBQUoyQixDQUFmLENBQXZCOztBQVdBLE1BQU1xSCxrQkFBa0JoSSxtQkFBVUMsR0FBVixDQUFjO0FBQ3BDLGFBQVc7QUFDVDhILGFBQVMsTUFEQTtBQUVULGlCQUFhO0FBQ1hFLGlCQUFXO0FBREEsS0FGSjtBQUtULG1DQUErQjtBQUM3QnZILGNBQVEsR0FEcUI7QUFFN0J3SCxnQkFBVTtBQUZtQjtBQUx0QixHQUR5QjtBQVdwQywrQ0FBNkM7QUFDM0N4SCxZQUFRLE1BRG1DO0FBRTNDd0gsY0FBVTtBQUZpQyxHQVhUO0FBZXBDLHlDQUF1QztBQUNyQ0MsZUFBVztBQUQwQjtBQWZILENBQWQsQ0FBeEI7O0FBb0JBLE1BQU1DLGVBQWUsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDbkI7QUFBSSxhQUFVO0FBQWQsR0FDRTtBQUFNLGFBQVU7QUFBaEIsR0FDR0EsV0FBV2IsT0FEZCxFQUdJYSxXQUFXQyxNQUFYLElBQXFCRCxXQUFXQyxNQUFYLENBQWtCakgsTUFBdkMsR0FDRWdILFdBQVdDLE1BQVgsQ0FBa0JoSCxHQUFsQixDQUFzQixDQUFDaUgsS0FBRCxFQUFRL0csS0FBUixLQUNwQiw2QkFBQyxpQkFBRDtBQUFtQixPQUFLQSxLQUF4QjtBQUErQixhQUFVO0FBQXpDLEdBQ0crRyxLQURILENBREYsQ0FERixHQUtNLElBUlYsQ0FERixFQWFJRixXQUFXRyxRQUFYLEdBQ0U7QUFBTSxhQUFVO0FBQWhCLEdBQXlCLEdBQUVILFdBQVdHLFFBQVgsQ0FBb0JDLEtBQU0sSUFBR0osV0FBV0csUUFBWCxDQUFvQkUsSUFBSyxFQUFqRixDQURGLEdBQytGLElBZG5HLENBREY7O0FBb0JBTixhQUFhbkcsU0FBYixHQUF5QjtBQUN2Qm9HLGNBQVluRyxtQkFBVUMsTUFBVixDQUFpQkM7QUFETixDQUF6Qjs7QUFJQSxNQUFNdUcsaUJBQWlCLENBQUM7QUFBRW5CLFNBQUY7QUFBV29CO0FBQVgsQ0FBRCxLQUNyQiwwQ0FDRSw2QkFBQyxlQUFELFFBQ0U7QUFBTyxRQUFLLFVBQVo7QUFBdUIsTUFBSXBCLE9BQTNCO0FBQW9DLFFBQUs7QUFBekMsRUFERixFQUVFO0FBQU8sV0FBU0EsT0FBaEI7QUFBeUIsYUFBVTtBQUFuQyxHQUNFO0FBQUksYUFBVTtBQUFkLEdBQXFDQSxPQUFyQyxDQURGLEVBRUUsNkJBQUMsY0FBRDtBQUFnQixhQUFVO0FBQTFCLEdBQ0UsNkJBQUMsZUFBRCxPQURGLENBRkYsQ0FGRixFQVFFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsU0FBRCxRQUVJb0IsV0FBV3RILEdBQVgsQ0FBZSxDQUFDK0csVUFBRCxFQUFhN0csS0FBYixLQUNiLDZCQUFDLFlBQUQ7QUFBYyxPQUFLQSxLQUFuQjtBQUEwQixjQUFZNkc7QUFBdEMsRUFERixDQUZKLENBREYsQ0FSRixDQURGLENBREY7O0FBdUJBTSxlQUFlMUcsU0FBZixHQUEyQjtBQUN6QjJHLGNBQVkxRyxtQkFBVThELEtBQVYsQ0FBZ0I1RCxVQURIO0FBRXpCb0YsV0FBU3RGLG1CQUFVRyxNQUFWLENBQWlCRDtBQUZELENBQTNCOztBQUtBLE1BQU15RyxhQUFhLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ2pCO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FFSUEsZUFBZXhILEdBQWYsQ0FBbUIsQ0FBQ3lILFVBQUQsRUFBYXZILEtBQWIsS0FDakJ1SCxXQUFXbkQsT0FBWCxDQUFtQnZFLE1BQW5CLEdBQTRCO0FBQUssT0FBS0c7QUFBVixHQUMxQjtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGNBQUQ7QUFBZ0IsT0FBS0EsS0FBckI7QUFBNEIsV0FBU3VILFdBQVd2QixPQUFoRDtBQUF5RCxjQUFZdUIsV0FBV25EO0FBQWhGLEVBREYsQ0FEMEIsQ0FBNUIsR0FJUyxJQUxYLENBRkosQ0FERixDQURGOztlQWdCZWlELFU7O0FBRWZBLFdBQVc1RyxTQUFYLEdBQXVCO0FBQ3JCNkcsa0JBQWdCNUcsbUJBQVU4RCxLQUFWLENBQWdCNUQ7QUFEWCxDQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxNQUFNNEcsU0FBUyxDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUNiO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSSxhQUFVO0FBQWQsWUFERixFQUVFLDZCQUFDLG1CQUFEO0FBQVksa0JBQWdCQTtBQUE1QixFQUZGLENBREY7O2VBT2VFLE07O0FBRWZBLE9BQU8vRyxTQUFQLEdBQW1CO0FBQ2pCNkcsa0JBQWdCNUcsbUJBQVU4RCxLQUFWLENBQWdCNUQ7QUFEZixDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBU0E7Ozs7OztBQVBBLE1BQU02RyxpQkFBaUJqSixtQkFBVVEsSUFBVixDQUFlO0FBQ3BDLFdBQVM7QUFDUEMsV0FBTyxNQURBO0FBRVBDLFlBQVE7QUFGRDtBQUQyQixDQUFmLENBQXZCOztBQVNBLE1BQU13SSxrQkFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3pDLFFBQU1DLFdBQVdELE9BQU9FLE1BQVAsQ0FBY0MsWUFBWUEsU0FBU2QsS0FBVCxLQUFtQmUsU0FBU0wsS0FBVCxDQUE3QyxDQUFqQjtBQUNBLFNBQU9FLFdBQVdBLFNBQVMsQ0FBVCxDQUFYLEdBQXlCLElBQWhDO0FBQ0QsQ0FIRDs7QUFLQSxNQUFNSSxhQUFhLENBQUM7QUFBRUMsU0FBRjtBQUFXQyxZQUFYO0FBQXVCUCxRQUF2QjtBQUErQlEsYUFBL0I7QUFBNENULE9BQTVDO0FBQW1EVTtBQUFuRCxDQUFELEtBQ2pCLDBDQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsaUJBQUQ7QUFBVSxjQUFZQSxVQUF0QjtBQUFrQyxjQUFZRixVQUE5QztBQUEwRCxXQUFTO0FBQW5FLEVBREYsQ0FERixFQUlFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBRyxhQUFVO0FBQWIsa0JBREYsRUFFRTtBQUFLLGFBQVU7QUFBZixHQUNJLDZCQUFDLGNBQUQ7QUFBZ0IsYUFBVTtBQUExQixHQUNFLDZCQUFDLGVBQUQsT0FERixDQURKLEVBS0lQLE9BQU8vSCxNQUFQLEdBQ0UsNkJBQUMsdUJBQUQ7QUFDRSxXQUFTK0gsTUFEWDtBQUVFLGdCQUFjUSxXQUZoQjtBQUdFLGlCQUFlVixnQkFBZ0JDLEtBQWhCLEVBQXVCQyxNQUF2QjtBQUhqQixFQURGLEdBS08sSUFWWCxDQUZGLENBSkYsQ0FERjs7QUF3QkFLLFdBQVd4SCxTQUFYLEdBQXVCO0FBQ3JCeUgsV0FBU3hILG1CQUFVaUQsSUFERTtBQUVyQmlFLFVBQVFsSCxtQkFBVThELEtBQVYsQ0FBZ0I1RCxVQUZIO0FBR3JCdUgsY0FBWXpILG1CQUFVQyxNQUFWLENBQWlCQyxVQUhSO0FBSXJCd0gsZUFBYTFILG1CQUFVK0QsSUFBVixDQUFlN0QsVUFKUDtBQUtyQitHLFNBQU9qSCxtQkFBVTRILFNBQVYsQ0FBb0IsQ0FDekI1SCxtQkFBVUcsTUFEZSxFQUV6QkgsbUJBQVVhLE1BRmUsQ0FBcEIsRUFHSlgsVUFSa0I7QUFTckJ5SCxjQUFZM0gsbUJBQVVHO0FBVEQsQ0FBdkI7QUFZQW9ILFdBQVduRixZQUFYLEdBQTBCO0FBQ3hCb0YsV0FBUyxLQURlO0FBRXhCRyxjQUFZO0FBRlksQ0FBMUI7ZUFLZUosVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWY7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLE1BQU1NLFdBQVcsQ0FBQztBQUFFTCxTQUFGO0FBQVdDLFlBQVg7QUFBdUJFO0FBQXZCLENBQUQsS0FBeUM7QUFDeEQsUUFBTUcsaUJBQWlCLCtCQUFpQkwsV0FBV00sUUFBWCxJQUF1QixPQUF4QyxDQUF2QjtBQUNBLFFBQU1DLFlBQVlQLFdBQVdPLFNBQVgsR0FBdUIsK0JBQWlCUCxXQUFXTyxTQUE1QixDQUF2QixHQUFnRSxFQUFsRjtBQUNBLFFBQU1DLFVBQVVSLFdBQVdRLE9BQVgsR0FBcUIsK0JBQWlCUixXQUFXUSxPQUE1QixDQUFyQixHQUE0RCxFQUE1RTtBQUVBLFNBQ0UsMENBQ0U7QUFBSSxXQUFRVCxVQUFVO0FBQUNySixnQkFBVTtBQUFYLEtBQVYsR0FBK0I7QUFBQ0EsZ0JBQVUsTUFBWDtBQUFtQitKLG9CQUFjO0FBQWpDLEtBQTNDO0FBQW9GLGVBQVU7QUFBOUYsS0FBMkcsR0FBRVAsVUFBVyxFQUFkLElBQW9CLGFBQTlILENBREYsRUFFRTtBQUFJLFdBQU87QUFBRXhKLGdCQUFVcUosVUFBVSxNQUFWLEdBQWtCO0FBQTlCLEtBQVg7QUFBbUQsZUFBVTtBQUE3RCxLQUVJQyxXQUFXTyxTQUFYLElBQXdCUCxXQUFXUSxPQUFuQyxHQUNLLEdBQUdILGNBQWdCLElBQUlFLFNBQVUsTUFBTUYsY0FBZ0IsSUFBSUcsT0FBUyxFQUR6RSxHQUVJUixXQUFXTyxTQUFYLEdBQ0MsU0FBU0YsY0FBZ0IsSUFBSUUsU0FBVSxFQUR4QyxHQUVDLFNBQVNGLGNBQWdCLElBQUlHLE9BQVMsRUFOL0MsQ0FGRixDQURGO0FBY0QsQ0FuQkQ7O0FBcUJBSixTQUFTOUgsU0FBVCxHQUFxQjtBQUNuQnlILFdBQVN4SCxtQkFBVWlELElBQVYsQ0FBZS9DLFVBREw7QUFFbkJ1SCxjQUFZekgsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRlY7QUFHbkJ5SCxjQUFZM0gsbUJBQVVHO0FBSEgsQ0FBckI7QUFNQTBILFNBQVNNLFdBQVQsR0FBdUI7QUFDckJSLGNBQVk7QUFEUyxDQUF2QjtlQUllRSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTU8sZ0JBQWdCdEssbUJBQVVDLEdBQVYsQ0FBYztBQUNsQ1MsVUFBUTtBQUQwQixDQUFkLENBQXRCOztBQUlBLE1BQU02SixlQUFldkssbUJBQVVDLEdBQVYsQ0FBYztBQUNqQ2dJLGFBQVc7QUFEc0IsQ0FBZCxDQUFyQjs7QUFJQSxNQUFNdUMsa0JBQWtCeEssbUJBQVVDLEdBQVYsQ0FBYztBQUNwQ1MsVUFBUSxLQUQ0QjtBQUVwQytKLGNBQVkseUZBRndCO0FBR3BDbkIsVUFBUTtBQUg0QixDQUFkLENBQXhCOztBQU1BLE1BQU1vQix1QkFBdUIxSyxtQkFBVUMsR0FBVixDQUFjO0FBQ3pDLFdBQVM7QUFDUFEsV0FBTyxPQURBO0FBRVBDLFlBQVE7QUFGRDtBQURnQyxDQUFkLENBQTdCOztBQU9BLE1BQU1pSyxPQUFPLENBQUM7QUFBRWpFLE9BQUY7QUFBU3lDO0FBQVQsQ0FBRCxLQUFzQjtBQUNqQyxRQUFNO0FBQ0p5QixVQURJO0FBQ0lDLGtCQURKO0FBQ29CQyxrQkFEcEI7QUFDb0NuRyxjQURwQztBQUNnRG9HLGVBRGhEO0FBQzZEQyxnQkFEN0Q7QUFDMkV2RyxjQUQzRTtBQUN1RkQsV0FEdkY7QUFFSk8sYUFGSTtBQUVPNEU7QUFGUCxNQUdGakQsS0FISjtBQUlBLFNBQ0U7QUFBSyxlQUFVO0FBQWYsS0FDRTtBQUFHLFVBQU8sR0FBRUEsTUFBTXVFLE9BQVEsZ0JBQWU5QixLQUFNLEVBQS9DO0FBQWtELFlBQU87QUFBekQsS0FDRSw2QkFBQyxhQUFEO0FBQWUsZUFBVTtBQUF6QixLQUVJeUIsT0FBT3ZKLE1BQVAsR0FDRSw2QkFBQyxZQUFEO0FBQ0UsV0FBTyxHQURUO0FBQ2MsWUFBUSxHQUR0QjtBQUVFLFNBQUt1SixPQUFPLENBQVAsRUFBVWxILEdBRmpCO0FBR0UsV0FBT2tILE9BQU8sQ0FBUCxFQUFVaEgsV0FIbkI7QUFJRSxTQUFLZ0gsT0FBTyxDQUFQLEVBQVUvRztBQUpqQixJQURGLEdBTUUsNkJBQUMsb0JBQUQ7QUFDRSxlQUFVO0FBRFosS0FFRSw2QkFBQyxxQkFBRCxPQUZGLENBUk4sRUFhRSw2QkFBQyxlQUFEO0FBQWlCLGVBQVU7QUFBM0IsS0FDRTtBQUFLLGVBQVU7QUFBZixLQUNFLDZCQUFDLHFCQUFEO0FBQWMsWUFBUWlILGNBQXRCO0FBQXNDLFlBQVFEO0FBQTlDLElBREYsRUFHSWxHLGFBQ0UsNkJBQUMsc0JBQUQ7QUFBZSxnQkFBWTtBQUFFNEIsYUFBTztBQUFULEtBQTNCO0FBQThDLG1CQUFlNUI7QUFBN0QsSUFERixHQUNnRixJQUpwRixDQURGLENBYkYsQ0FERixFQXdCRSw2QkFBQyxZQUFEO0FBQWMsZUFBVTtBQUF4QixLQUNFO0FBQUssZUFBVTtBQUFmLEtBQ0U7QUFBSSxlQUFVO0FBQWQsS0FBNkRvRyxXQUE3RCxDQURGLEVBRUdDLGVBQWU7QUFBTSxlQUFVO0FBQWhCLEtBQ1osNkJBQUMsZ0JBQUQ7QUFDRSxpQkFBWSwrQkFEZDtBQUVFLGNBQVU7QUFBRUUsaUJBQVc7QUFBYjtBQUZaLElBRFksRUFLaEIsNkJBQUMsc0JBQUQsT0FMZ0IsQ0FBZixHQU1PLElBUlYsQ0FERixFQVdFLDZCQUFDLG1CQUFEO0FBQVksWUFBUXpHO0FBQXBCLElBWEYsRUFZRTtBQUFLLGVBQVU7QUFBZixLQUNFO0FBQUssZUFBVTtBQUFmLEtBQ0dELFVBQVU7QUFBRyxlQUFVO0FBQWIsS0FBbURBLFFBQVEyRyxLQUEzRCxDQUFWLEdBQWtGLElBRHJGLEVBR0lwRyxZQUNFO0FBQUcsZUFBVTtBQUFiLEtBQ0ksR0FBRUEsVUFBVXlELFFBQVMsSUFBR3pELFVBQVUyRCxJQUFLLFNBQVEzRCxVQUFVcUcsSUFBSyxHQURsRSxDQURGLEdBR1MsSUFOYixDQURGLEVBVUU7QUFBSyxlQUFVO0FBQWYsS0FDRSw2QkFBQyxpQkFBRDtBQUFVLGdCQUFZLHVCQUF0QjtBQUErQyxhQUFTLElBQXhEO0FBQThELGdCQUFZekI7QUFBMUUsSUFERixDQVZGLENBWkYsQ0F4QkYsQ0FERixDQURGO0FBd0RELENBN0REOztBQStEQWdCLEtBQUsxSSxTQUFMLEdBQWlCO0FBQ2Z5RSxTQUFPeEUsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRFQ7QUFFZitHLFNBQU9qSCxtQkFBVTRILFNBQVYsQ0FBb0IsQ0FDekI1SCxtQkFBVUcsTUFEZSxFQUV6QkgsbUJBQVVhLE1BRmUsQ0FBcEIsRUFHSlg7QUFMWSxDQUFqQjtlQVFldUksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R2Y7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1VLGdCQUFnQixDQUFDO0FBQUVDLGVBQUY7QUFBaUJuQztBQUFqQixDQUFELEtBQ3BCO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSSxhQUFVO0FBQWQsR0FBaUNtQyxjQUFjdEssS0FBL0MsQ0FERixFQUVHc0ssY0FBY0MsT0FBZCxHQUNDO0FBQ0UsUUFBTUQsY0FBY0MsT0FEdEI7QUFFRSxVQUFPLFFBRlQ7QUFHRSxhQUFVO0FBSFosY0FERCxHQVFHLElBVk4sRUFXRTtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGVBQUQ7QUFDRSxNQUFHLGVBREw7QUFFRSxjQUFXLE9BRmI7QUFHRSxnQkFBYyxFQUhoQjtBQUlFLGlCQUFjLE1BSmhCO0FBS0UsZ0JBQWM7QUFBRTlLLFdBQU8sR0FBVDtBQUFjQyxZQUFRO0FBQXRCO0FBTGhCLEdBT0c0SyxjQUFjRSxNQUFkLENBQXFCbkssTUFBckIsR0FDR2lLLGNBQWNFLE1BQWQsQ0FBcUJsSyxHQUFyQixDQUF5Qm9GLFNBQ3ZCO0FBQ0UsT0FBS0EsTUFBTTNFLEVBRGI7QUFFRSxhQUNFdUosY0FBY0UsTUFBZCxDQUFxQm5LLE1BQXJCLEtBQWdDLENBQWhDLEdBQ0kscUNBREosR0FFSTtBQUxSLEdBUUUsNkJBQUMsYUFBRDtBQUFNLFNBQU9xRixLQUFiO0FBQW9CLFNBQU95QztBQUEzQixFQVJGLENBREYsQ0FESCxHQWFHLElBcEJOLENBREYsQ0FYRixDQURGOztBQXVDQWtDLGNBQWNwSixTQUFkLEdBQTBCO0FBQ3hCcUosaUJBQWVwSixtQkFBVUMsTUFBVixDQUFpQkMsVUFEUjtBQUV4QitHLFNBQU9qSCxtQkFBVTRILFNBQVYsQ0FBb0IsQ0FDekI1SCxtQkFBVUcsTUFEZSxFQUV6QkgsbUJBQVVhLE1BRmUsQ0FBcEIsRUFHSlg7QUFMcUIsQ0FBMUI7ZUFRZWlKLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERmOzs7O0FBREE7QUFHTyxNQUFNSSxzQkFBc0J6TCxtQkFBVUMsR0FBVixDQUFjO0FBQy9DLGdEQUE4QztBQUM1Q3lMLGFBQVM7QUFEbUMsR0FEQztBQUkvQyxxQkFBbUI7QUFDakJqTCxXQUFPO0FBRFUsR0FKNEI7QUFPL0MsMkJBQXlCO0FBQ3ZCc0gsYUFBUyxNQURjO0FBRXZCdEgsV0FBTyxNQUZnQjtBQUd2QkMsWUFBUSxNQUhlO0FBSXZCaUwsa0JBQWMsS0FKUztBQUt2QmxCLGdCQUFZLE1BTFc7QUFNdkJtQixnQkFBWSxRQU5XO0FBT3ZCQyxvQkFBZ0IsUUFQTztBQVF2QmhFLFlBQVEscUNBUmU7QUFTdkJpRSxZQUFRLENBVGU7QUFVdkJ6RyxlQUFXLGtDQVZZO0FBV3ZCMEcsV0FBTyxLQVhnQjtBQVl2Qix5QkFBcUI7QUFDbkJDLG1CQUFhLG1CQURNO0FBRW5CekcsZUFBUyxPQUZVO0FBR25Cd0MsZUFBUyxPQUhVO0FBSW5CckgsY0FBUSxLQUpXO0FBS25CdUwsaUJBQVcsTUFMUTtBQU1uQnRMLGdCQUFVLFVBTlM7QUFPbkJ3SCxpQkFBVyxnQkFQUTtBQVFuQjRELGFBQU8sTUFSWTtBQVNuQkcsV0FBSyxLQVRjO0FBVW5CekwsYUFBTztBQVZZLEtBWkU7QUF3QnZCLGVBQVc7QUFDVHdMLGlCQUFXLEdBREY7QUFFVDlELGlCQUFXO0FBRkY7QUF4QlksR0FQc0I7QUFvQy9DLDJCQUF5QjtBQUN2QkosYUFBUyxNQURjO0FBRXZCdEgsV0FBTyxNQUZnQjtBQUd2QkMsWUFBUSxNQUhlO0FBSXZCaUwsa0JBQWMsS0FKUztBQUt2QmxCLGdCQUFZLE1BTFc7QUFNdkJtQixnQkFBWSxRQU5XO0FBT3ZCQyxvQkFBZ0IsUUFQTztBQVF2QmhFLFlBQVEscUNBUmU7QUFTdkJpRSxZQUFRLENBVGU7QUFVdkJ6RyxlQUFXLG1DQVZZO0FBV3ZCSSxVQUFNLEtBWGlCO0FBWXZCLHlCQUFxQjtBQUNuQnVHLG1CQUFhLG1CQURNO0FBRW5CekcsZUFBUyxPQUZVO0FBR25Cd0MsZUFBUyxPQUhVO0FBSW5CckgsY0FBUSxLQUpXO0FBS25CdUwsaUJBQVcsTUFMUTtBQU1uQnRMLGdCQUFVLFVBTlM7QUFPbkJ3SCxpQkFBVyxlQVBRO0FBUW5CMUMsWUFBTSxNQVJhO0FBU25CeUcsV0FBSyxLQVRjO0FBVW5CekwsYUFBTztBQVZZLEtBWkU7QUF3QnZCLGVBQVc7QUFDVHdMLGlCQUFXLEdBREY7QUFFVDlELGlCQUFXO0FBRkY7QUF4Qlk7QUFwQ3NCLENBQWQsQ0FBNUI7Ozs7QUFtRUEsTUFBTWdFLGdCQUFnQm5NLG1CQUFVQyxHQUFWLENBQWM7QUFDekNRLFNBQU8sTUFEa0M7QUFFekNDLFVBQVEsTUFGaUM7QUFHekMwTCxVQUFRLEdBSGlDO0FBSXpDQyxVQUFRLFNBSmlDO0FBS3pDLFdBQVM7QUFDUG5NLGNBQVUsTUFESDtBQUVQK0MsZUFBVztBQUZKO0FBTGdDLENBQWQsQ0FBdEI7Ozs7QUFXQSxNQUFNcUosaUJBQWlCdE0sbUJBQVVDLEdBQVYsQ0FBYztBQUMxQ1MsVUFBUSxPQURrQztBQUUxQ3dILFlBQVUsUUFGZ0M7QUFHMUMsV0FBUztBQUNQaEksY0FBVSxNQURIO0FBRVArQyxlQUFXO0FBRko7QUFIaUMsQ0FBZCxDQUF2Qjs7OztBQVNBLE1BQU1zSixrQkFBa0J2TSxtQkFBVUMsR0FBVixDQUFjO0FBQzNDUSxTQUFPLE9BRG9DO0FBRTNDNEwsVUFBUSxTQUZtQztBQUczQyxhQUFXO0FBQ1QzRyxxQkFBaUI7QUFEUixHQUhnQztBQU0zQyxnRkFBOEU7QUFDNUVELFVBQU0sTUFEc0U7QUFFNUVzRyxXQUFPLE1BRnFFO0FBRzVFdEwsV0FBTyxNQUhxRTtBQUk1RSxtQ0FBK0I7QUFDN0JBLGFBQU8sS0FEc0I7QUFFN0JDLGNBQVEsS0FGcUI7QUFHN0JtSCxjQUFRLG1CQUhxQjtBQUk3QjRDLGtCQUFZLGFBSmlCO0FBSzdCaUIsZUFBUztBQUxvQixLQUo2QztBQVc1RSxtRUFBK0Q7QUFDN0RqQixrQkFBWTtBQURpRDtBQVhhO0FBTm5DLENBQWQsQ0FBeEI7Ozs7QUF1QkEsTUFBTStCLG1CQUFtQnhNLG1CQUFVQyxHQUFWLENBQWM7QUFDNUN3SyxjQUFZLGdCQURnQztBQUU1Q3RLLFlBQVUsTUFGa0M7QUFHNUMsU0FBTztBQUNMLGVBQVc7QUFDVG9HLGFBQU87QUFERTtBQUROO0FBSHFDLENBQWQsQ0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIUDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNa0csU0FBUyxJQUFJQyxtQkFBSixFQUFmOztBQUVBLE1BQU1oQyx1QkFBdUIxSyxtQkFBVUMsR0FBVixDQUFjO0FBQ3pDLFdBQVMsTUFEZ0M7QUFFekMsWUFBVSxPQUYrQjtBQUd6QyxXQUFTO0FBQ1BRLFdBQU8sT0FEQTtBQUVQQyxZQUFRO0FBRkQ7QUFIZ0MsQ0FBZCxDQUE3Qjs7QUFTQSxNQUFNaU0sb0JBQW9CLENBQUNDLEtBQUQsRUFBUWxMLEdBQVIsRUFBYWdELFNBQWIsS0FDeEIsNkJBQUMsaUJBQUQ7QUFBZ0IsT0FBS2hELEdBQXJCO0FBQTBCLE1BQUlBLEdBQTlCO0FBQW1DLGFBQVU7QUFBN0MsR0FDRTtBQUFLLFNBQU8sR0FBWjtBQUFpQixVQUFRLEdBQXpCO0FBQ0UsY0FBVWtMLE1BQU1uSixPQUFOLENBQWNHLFdBRDFCO0FBRUUsT0FBS2dKLE1BQU0vSSxPQUFOLEdBQWdCK0ksTUFBTS9JLE9BQXRCLEdBQWdDYSxTQUZ2QztBQUVrRCxhQUFVO0FBRjVELEVBREYsRUFLSWtJLE1BQU1DLFdBQU4sR0FDRSw2QkFBQyxtQkFBRDtBQUFrQixhQUFVO0FBQTVCLEdBQ0dKLE9BQU9LLEtBQVAsQ0FBYUYsTUFBTUMsV0FBbkIsQ0FESCxDQURGLEdBR3dCLElBUjVCLENBREY7O0lBY3FCRSxtQixHQUFOLE1BQU1BLG1CQUFOLFNBQWtDbkcsZ0JBQWxDLENBQTRDO0FBQ3pEQyxjQUFZTSxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLTCxLQUFMLEdBQWE7QUFDWGtHLHFCQUFlO0FBREosS0FBYjtBQUlBLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDRDs7QUFFREQsYUFBV0UsR0FBWCxFQUFnQjtBQUNkLFFBQUlBLEdBQUosRUFBUztBQUNQLFdBQUtDLFFBQUwsQ0FBYztBQUFFSix1QkFBZUcsSUFBSUU7QUFBckIsT0FBZDtBQUNEO0FBQ0Y7O0FBRURyRyxXQUFTO0FBQ1AsVUFBTXNHLHNCQUFzQjtBQUMxQkMsb0JBQWMsRUFEWTtBQUUxQkMsa0JBQVk7QUFDVkMsZ0JBQVEsMkJBREU7QUFFVkMsZ0JBQVE7QUFGRSxPQUZjO0FBTTFCQyxxQkFBZSxLQU5XO0FBTzFCQyxZQUFNO0FBQ0pDLHNCQUFjO0FBRFY7QUFQb0IsS0FBNUI7QUFZQSxVQUFNO0FBQUVqRCxZQUFGO0FBQVVsRztBQUFWLFFBQXdCLEtBQUt5QyxLQUFuQztBQUVBLFdBQ0UsNkJBQUMsc0JBQUQ7QUFBcUIsaUJBQVU7QUFBL0IsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FFRXlELE9BQU92SixNQUFQLEdBQ0UsNkJBQUMsZUFBRCxlQUNNaU0sbUJBRE47QUFFRSxXQUFLLEtBQUtMLFVBRlo7QUFHRSxrQkFBVyxPQUhiO0FBSUUsb0JBQWMsRUFKaEI7QUFLRSxxQkFBYyxNQUxoQjtBQU1FLG9CQUFjO0FBQUV4TSxlQUFPLEdBQVQ7QUFBY0MsZ0JBQVE7QUFBdEI7QUFOaEIsUUFTSWtLLE9BQU90SixHQUFQLENBQVcsQ0FBQ3NMLEtBQUQsRUFBUXBMLEtBQVIsS0FDVDtBQUNFLFdBQUtBLEtBRFA7QUFFRSxpQkFDRW9KLE9BQU92SixNQUFQLEtBQWtCLENBQWxCLEdBQ0kscUNBREosR0FFSTtBQUxSLE9BUUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0dzTCxrQkFBa0JDLE1BQU1rQixjQUF4QixFQUF3Q3RNLEtBQXhDLEVBQStDa0QsU0FBL0MsQ0FESCxDQVJGLENBREYsQ0FUSixDQURGLEdBMEJFLDZCQUFDLG9CQUFELFFBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMscUJBQUQsT0FERixDQURGLENBNUJKLENBREYsQ0FERjtBQXVDRDs7QUF0RXdELEM7O0FBeUUzRHFJLG9CQUFvQjlLLFNBQXBCLEdBQWdDO0FBQzlCMkksVUFBUTFJLG1CQUFVOEQsS0FBVixDQUFnQjVELFVBRE07QUFFOUJzQyxhQUFXeEMsbUJBQVVHLE1BQVYsQ0FBaUJEO0FBRkUsQ0FBaEM7QUFLQTJLLG9CQUFvQnpJLFlBQXBCLEdBQW1DLEVBQW5DLEM7Ozs7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBQ0E7O0FBRUE7Ozs7QUFHQSxNQUFNeUoseUJBQXlCL04sbUJBQVVnTyxNQUFWLENBQWlCO0FBQzlDdk4sU0FBTyxNQUR1QztBQUU5Q0MsVUFBUTtBQUZzQyxDQUFqQixDQUEvQjs7QUFLQSxNQUFNdU4sbUJBQW1Cak8sbUJBQVVDLEdBQVYsQ0FBYztBQUNyQ0UsWUFBVSxPQUQyQjtBQUVyQ00sU0FBTztBQUY4QixDQUFkLENBQXpCOztBQUtBLE1BQU15TixvQkFBb0JsTyxtQkFBVUMsR0FBVixDQUFjO0FBQ3RDQyxZQUFVLE1BRDRCO0FBRXRDQyxZQUFVO0FBRjRCLENBQWQsQ0FBMUI7O0FBS0EsTUFBTWdPLGdCQUFnQm5PLG1CQUFVQyxHQUFWLENBQWM7QUFDbENtTyxZQUFVLFlBRHdCO0FBRWxDOUksY0FBWSxRQUZzQjtBQUdsQytJLGNBQVk7QUFIc0IsQ0FBZCxDQUF0Qjs7QUFNQSxNQUFNQyxrQkFBa0IsTUFDcEI7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGdCQUFEO0FBQWtCLGFBQVU7QUFBNUIsR0FDRSw2QkFBQyxpQkFBRDtBQUFtQixhQUFVO0FBQTdCLEVBREYsRUFFRSw2QkFBQyxhQUFEO0FBQWUsYUFBVTtBQUF6QixHQUNFO0FBQUcsYUFBVTtBQUFiLDBEQURGLEVBRUU7QUFBRyxhQUFVO0FBQWIscUJBRkYsQ0FGRixDQURGLEVBU0U7QUFBTSxhQUFVO0FBQWhCLEVBVEYsQ0FERixFQVlFLDZCQUFDLHNCQUFEO0FBQXdCLGFBQVU7QUFBbEMsR0FDRSw2QkFBQyxpQkFBRCxPQURGLENBWkYsQ0FESjs7ZUFtQmVBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNmOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTUMsV0FBVyxDQUFDO0FBQUU3SDtBQUFGLENBQUQsS0FDZjtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0k7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFJLGFBQVU7QUFBZCxHQUFnQ0EsTUFBTXpCLElBQXRDLENBREYsRUFFRSw2QkFBQyxtQkFBRDtBQUFZLFVBQVF5QixNQUFNakM7QUFBMUIsRUFGRixDQURKLEVBS0U7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFHLGFBQVU7QUFBYixHQUFvQ2lDLE1BQU1sQyxPQUFOLElBQWlCa0MsTUFBTWxDLE9BQU4sQ0FBYzJHLEtBQW5FLENBREYsRUFFRSw2QkFBQyxzQkFBRDtBQUFlLGlCQUFlekUsTUFBTS9CO0FBQXBDLEVBRkYsQ0FMRixDQURGLEVBV0U7QUFBSyxhQUFZLGdDQUErQlYsb0JBQU8zQyxHQUFJO0FBQTNELEdBQ0UsNkJBQUMsb0JBQUQ7QUFBYSxlQUFhb0YsTUFBTXBGO0FBQWhDLEVBREYsRUFFRTtBQUFLLGFBQVU7QUFBZixRQUFzQyw2QkFBQyx3QkFBRDtBQUFpQixRQUFNb0YsTUFBTXpCLElBQTdCO0FBQW1DLFFBQU15QixNQUFNL0I7QUFBL0MsRUFBdEMsQ0FGRixDQVhGLENBREY7O0FBbUJBNEosU0FBU3RNLFNBQVQsR0FBcUI7QUFDbkJ5RSxTQUFReEUsbUJBQVVDO0FBREMsQ0FBckI7QUFJQW9NLFNBQVNqSyxZQUFULEdBQXdCO0FBQ3RCb0MsU0FBTztBQURlLENBQXhCO2VBSWU2SCxROzs7Ozs7Ozs7Ozs7QUNyQ2Y7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFDQTs7QUFFQTs7Ozs7O0lBRU1DLFcsR0FBTixNQUFNQSxXQUFOLFNBQTBCNUgsZ0JBQTFCLENBQW9DO0FBQ2xDQyxjQUFZTSxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLFNBa0JuQnNILGtCQWxCbUIsR0FrQkdDLEdBQUQsSUFBUztBQUM1QixhQUFPQSxNQUNMQSxJQUFJQyxZQUFKLENBQWlCRCxJQUFJRSxhQUFKLENBQW1CQyxXQUFELElBQWlCO0FBQ2xELGNBQU07QUFBRUMscUJBQUY7QUFBZUMsdUJBQWY7QUFBOEJDO0FBQTlCLFlBQTRDSCxXQUFsRDtBQUNBLGVBQ0UsNkJBQUMsR0FBRCxDQUFLLFNBQUw7QUFBZSx1QkFBYUcsU0FBNUI7QUFBdUMseUJBQWU7QUFBRUMsaUJBQUssT0FBUDtBQUFnQkMsaUJBQUs7QUFBckIsV0FBdEQ7QUFBc0Ysa0JBQVE7QUFDNUZELGlCQUFLSCxZQUFZSyxRQUFaLElBQXdCTCxZQUFZRyxHQURtRDtBQUU1RkMsaUJBQUtKLFlBQVlNLFNBQVosSUFBeUJOLFlBQVlPO0FBRmtEO0FBQTlGLFdBS0lOLGdCQUNFLDZCQUFDLEdBQUQsQ0FBSyxNQUFMO0FBQVksb0JBQVU7QUFDcEJFLGlCQUFLSCxZQUFZSyxRQUFaLElBQXdCTCxZQUFZRyxHQURyQjtBQUVwQkMsaUJBQUtKLFlBQVlNLFNBQVosSUFBeUJOLFlBQVlPO0FBRnRCO0FBQXRCLFVBREYsR0FLa0IsSUFWdEIsQ0FERjtBQWNELE9BaEJnQixDQUFqQixDQURLLEdBaUJDLElBakJSO0FBa0JELEtBckNrQjs7QUFFakIsU0FBS3ZJLEtBQUwsR0FBYTtBQUNYNEgsV0FBSztBQURNLEtBQWI7QUFHQSxTQUFLWSxjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7O0FBRURDLHNCQUFvQjtBQUNsQixVQUFNQyxrQkFBa0IsTUFBTSx5SEFDM0JDLElBRDJCLENBQ3JCQyxNQUFELElBQVk7QUFDaEIsV0FBS0osY0FBTCxHQUFzQixLQUFLYixrQkFBTCxDQUF3QmlCLE1BQXhCLENBQXRCO0FBQ0EsV0FBS3RDLFFBQUwsQ0FBYztBQUFFc0IsYUFBS2dCO0FBQVAsT0FBZDtBQUNELEtBSjJCLENBQTlCOztBQU1BQyxhQUFTQyxVQUFULEtBQXdCLFVBQXhCLEdBQXFDSixpQkFBckMsR0FBeURLLE9BQU9DLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDTixlQUFoQyxDQUF6RDtBQUNEOztBQXVCRHhJLFdBQVM7QUFDUCxVQUFNO0FBQUU4SCxpQkFBRjtBQUFlN0osVUFBZjtBQUFxQjhLLFVBQXJCO0FBQTJCZjtBQUEzQixRQUF5QyxLQUFLN0gsS0FBcEQ7QUFDQSxVQUFNNkksZUFBZ0IsK0NBQThDQyxtQkFBT0MsU0FBUCxDQUFpQnhPLEdBQUksNENBQXpGO0FBQ0EsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FFSSxLQUFLNE4sY0FBTCxHQUNFLGtDQUFNLGNBQU47QUFDRSx5QkFERjtBQUVFLG1CQUFhUixXQUZmO0FBR0UsaUJBQVdFLFNBSGI7QUFJRSxZQUFNL0osSUFKUjtBQUtFLFlBQU04SyxJQUxSO0FBTUUsb0JBQWNDLFlBTmhCO0FBT0Usc0JBQWdCO0FBQUssZUFBTztBQUFFdFAsa0JBQVM7QUFBWDtBQUFaLFFBUGxCO0FBUUUsd0JBQWtCO0FBQUssZUFBTztBQUFFQSxrQkFBUztBQUFYO0FBQVosUUFScEI7QUFTRSxrQkFBWTtBQUFLLGVBQU87QUFBRUEsa0JBQVM7QUFBWDtBQUFaO0FBVGQsTUFERixHQVdPLElBYlgsQ0FERjtBQWlCRDs7QUE1RGlDLEM7QUErRHBDOE4sWUFBWXZNLFNBQVosR0FBd0I7QUFDdEI2TSxlQUFhNU0sbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFdEI2QyxRQUFNL0MsbUJBQVVHLE1BRk07QUFHdEIwTixRQUFNN04sbUJBQVVHLE1BSE07QUFJdEIyTSxhQUFXOU0sbUJBQVVhO0FBSkMsQ0FBeEI7QUFPQXlMLFlBQVlsSyxZQUFaLEdBQTJCO0FBQ3pCVyxRQUFNLEVBRG1CO0FBRXpCOEssUUFBTSxFQUZtQjtBQUd6QmYsYUFBVztBQUhjLENBQTNCO2VBTWVSLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZmOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxNQUFNMkIsYUFBYW5RLG1CQUFVUSxJQUFWLENBQWU7QUFDaENOLFlBQVUsTUFEc0I7QUFFaENDLFlBQVUsTUFGc0I7QUFHaENPLFVBQVEsTUFId0I7QUFJaEMsV0FBUztBQUNQUCxjQUFVLEtBREg7QUFFUFEsY0FBVTtBQUZIO0FBSnVCLENBQWYsQ0FBbkI7O0FBVUEsTUFBTXlQLFlBQVksQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDbkMsUUFBTW5QLG1CQUFtQixFQUF6QjtBQUFBLFFBQTZCQyxrQkFBa0IsRUFBL0M7QUFDQSxNQUFJQyxnQkFBZ0IsRUFBcEI7QUFDQSxTQUFPLDBDQUNMO0FBQUksZUFBVTtBQUFkLGtCQURLLEVBRUwseUNBRUlpUCxVQUFVL08sR0FBVixDQUFjLENBQUNnUCxVQUFELEVBQWE5TyxLQUFiLEtBQXVCO0FBQ25DSixvQkFBZ0JJLFFBQVEsQ0FBUixHQUFZTCxlQUFaLEdBQThCRCxnQkFBOUM7QUFDQUUsa0JBQWNVLElBQWQsQ0FDRTtBQUFJLFdBQUtOLEtBQVQ7QUFBZ0IsaUJBQVU7QUFBMUIsT0FDRSw2QkFBQyxVQUFEO0FBQVksaUJBQVU7QUFBdEIsT0FBMkUsNkJBQUMsZUFBRCxPQUEzRSxDQURGLEVBRUU7QUFBTSxpQkFBVTtBQUFoQixPQUF3QjhPLFVBQXhCLENBRkYsQ0FERjtBQU1ELEdBUkQsQ0FGSixFQVlFLDZCQUFDLGlCQUFEO0FBQ0UsY0FBVXBQLGdCQURaO0FBRUUsY0FBVUMsZUFGWjtBQUdFLGtCQUFhLFdBSGY7QUFJRSxrQkFBYTtBQUpmLElBWkYsQ0FGSyxDQUFQO0FBc0JELENBekJEOztBQTJCQWlQLFVBQVVuTyxTQUFWLEdBQXNCO0FBQ3BCb08sYUFBV25PLG1CQUFVOEQsS0FBVixDQUFnQjVEO0FBRFAsQ0FBdEI7ZUFJZWdPLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERmOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUcsaUJBQWlCLENBQUM7QUFBRTNLLFNBQUY7QUFBVzRLLGNBQVg7QUFBeUJDLGVBQXpCO0FBQXdDQztBQUF4QyxDQUFELEtBQ3JCLDZCQUFDLHNCQUFEO0FBQ0UsV0FBUzlLLE9BRFg7QUFFRSxTQUFPNkssaUJBQWlCN0ssUUFBUSxDQUFSLENBRjFCO0FBR0UsZUFBYThLLGVBQWUsa0JBSDlCO0FBSUUsWUFBVUY7QUFKWixFQURGOztBQVNBRCxlQUFldE8sU0FBZixHQUEyQjtBQUN6QjJELFdBQVMxRCxxQkFBVThELEtBQVYsQ0FBZ0I1RCxVQURBO0FBRXpCb08sZ0JBQWN0TyxxQkFBVStELElBRkM7QUFHekJ3SyxpQkFBZXZPLHFCQUFVNEgsU0FBVixDQUFvQixDQUNqQzVILHFCQUFVQyxNQUR1QixFQUVqQ0QscUJBQVVHLE1BRnVCLENBQXBCLENBSFU7QUFPekJxTyxlQUFheE8scUJBQVVHO0FBUEUsQ0FBM0I7QUFVQWtPLGVBQWVqTSxZQUFmLEdBQThCO0FBQzVCa00sZ0JBQWMsTUFBTSxDQUFFLENBRE07QUFFNUJDLGlCQUFlLEVBRmE7QUFHNUJDLGVBQWE7QUFIZSxDQUE5QjtlQU1lSCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZjs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTTlELFNBQVMsSUFBSUMsbUJBQUosRUFBZjs7QUFFQSxNQUFNaUUsaUJBQWlCM1EsbUJBQVVDLEdBQVYsQ0FBYztBQUNuQ0MsWUFBVSxLQUR5QjtBQUVuQ0MsWUFBVSxLQUZ5QjtBQUduQ2lLLGdCQUFjO0FBSHFCLENBQWQsQ0FBdkI7O0FBTUEsTUFBTXdHLGtCQUFrQjVRLG1CQUFVQyxHQUFWLENBQWM7QUFDcENTLFVBQVEsS0FENEI7QUFFcENELFNBQU87QUFGNkIsQ0FBZCxDQUF4Qjs7QUFLQSxNQUFNb1EsZ0JBQWdCN1EsbUJBQVVDLEdBQVYsQ0FBYztBQUNsQ1EsU0FBTyxNQUQyQjtBQUVsQ0MsVUFBUSxNQUYwQjtBQUdsQyxXQUFTO0FBQ1BSLGNBQVUsTUFESDtBQUVQK0MsZUFBVztBQUZKO0FBSHlCLENBQWQsQ0FBdEI7O0lBU3FCNk4sYSxxQkFBTixNQUFNQSxhQUFOLFNBQTRCQyxlQUFNbkssU0FBbEMsQ0FBNEM7QUFLekRJLFdBQVM7QUFDUCxVQUFNO0FBQUVnSztBQUFGLFFBQW9CLEtBQUs3SixLQUEvQjtBQUNBLFVBQU07QUFBRThKLGNBQVE7QUFBQ0MsaUJBQUQ7QUFBWUMsa0JBQVo7QUFBd0JDLHVCQUF4QjtBQUF5Q0M7QUFBekM7QUFBVixRQUFxRUwsYUFBM0U7QUFDQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLGFBQUQ7QUFBZSxpQkFBVTtBQUF6QixPQUNFO0FBQUssV0FBTSxHQUFFRSxTQUFVLGVBQXZCO0FBQXVDLFdBQUtDO0FBQTVDLE1BREYsQ0FERixFQUlFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUksaUJBQVU7QUFBZCxPQUE2QkEsVUFBN0IsQ0FERixFQUVFO0FBQUcsaUJBQVU7QUFBYixPQUNHQyxlQURILE9BRUdDLFlBRkgsQ0FGRixDQUpGLENBREYsRUFhRTtBQUFLLGlCQUFVO0FBQWYsT0FDRzVFLE9BQU9LLEtBQVAsQ0FBYWtFLGNBQWNNLElBQTNCLENBREgsQ0FiRixFQWdCRTtBQUFLLGlCQUFVO0FBQWYsT0FDR04sY0FBY08sZUFBZCxDQUE4QmpRLEdBQTlCLENBQWtDa1EsWUFDakMsNkJBQUMsY0FBRDtBQUFnQixXQUFLUixjQUFjalA7QUFBbkMsT0FDRTtBQUFHLGlCQUFVO0FBQWIsT0FBMkN5UCxTQUFTdk0sSUFBVCxDQUFjckQsT0FBZCxDQUFzQixHQUF0QixFQUEyQixHQUEzQixDQUEzQyxPQUE0RTtBQUFNLGlCQUFVO0FBQWhCLE9BQTJCNFAsU0FBU3RNLE1BQXBDLENBQTVFLENBREYsRUFFRSw2QkFBQyxlQUFEO0FBQWlCLGlCQUFVO0FBQTNCLE9BQ0U7QUFBTSxpQkFBVSxvQ0FBaEI7QUFBcUQsYUFBTztBQUFFekUsZUFBUSxHQUFHK1EsU0FBU3RNLE1BQVQsR0FBZ0IsR0FBakIsR0FBd0IsRUFBRztBQUF2QztBQUE1RCxNQURGLENBRkYsQ0FERCxDQURILENBaEJGLENBREY7QUE2QkQ7O0FBckN3RCxDLFNBQ2xEakQsUyxHQUFZO0FBQ2pCK08saUJBQWU5TyxtQkFBVUMsTUFBVixDQUFpQkM7QUFEZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCckI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNcVAsVSxxQkFBTixNQUFNQSxVQUFOLFNBQXlCN0ssZ0JBQXpCLENBQW1DO0FBa0JqQ0MsY0FBWU0sS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS3VLLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQnhFLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0Q7O0FBQ0R3RSxnQkFBYztBQUNaO0FBQ0EsUUFBSUMsZ0JBQWdCLEtBQUt4SyxLQUFMLENBQVd5SyxPQUFYLENBQW1CRCxhQUFuQixJQUFvQyxFQUF4RDs7QUFDQSxRQUFJLE9BQU85QixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDOEIsc0JBQWlCLEdBQUVBLGFBQWMsb0JBQW1COUIsT0FBT2dDLFFBQVAsQ0FBZ0JDLElBQUssRUFBekU7QUFDRDs7QUFDREgsb0JBQWlCLElBQUdBLGFBQWMsSUFBR0ksb0NBQXNCLEVBQTNEOztBQUNBLFVBQU1DLCtCQUNELEtBQUs3SyxLQUFMLENBQVd5SyxPQURWO0FBRUpEO0FBRkksTUFBTjs7QUFJQSxTQUFLeEssS0FBTCxDQUFXcUosWUFBWCxHQVhZLENBWVo7O0FBQ0EsU0FBS3JKLEtBQUwsQ0FBVzhLLGtCQUFYLENBQThCRCxVQUE5QixFQWJZLENBY1o7O0FBQ0EsU0FBSzdLLEtBQUwsQ0FBVytLLFNBQVgsQ0FBcUIsc0JBQXJCO0FBRUQ7O0FBRURsTCxXQUFTO0FBQ1AsV0FDRTtBQUFRLGlCQUFVLE9BQWxCO0FBQTBCLGVBQVMsS0FBSzBLO0FBQXhDLE9BQ0csS0FBS3ZLLEtBQUwsQ0FBV2dMLFFBRGQsQ0FERjtBQUtEOztBQS9DZ0MsQyxTQUMxQmxRLFMsR0FBWTtBQUNqQjJQLFdBQVMxUCxtQkFBVUMsTUFERjtBQUVqQjhQLHNCQUFvQi9QLG1CQUFVK0QsSUFBVixDQUFlN0QsVUFGbEI7QUFHakI4UCxhQUFXaFEsbUJBQVUrRCxJQUFWLENBQWU3RCxVQUhUO0FBSWpCb08sZ0JBQWN0TyxtQkFBVStELElBSlA7QUFLakJrTSxZQUFValEsbUJBQVU0SCxTQUFWLENBQW9CLENBQzVCNUgsbUJBQVU4RCxLQURrQixFQUU1QjlELG1CQUFVRyxNQUZrQixFQUc1QkgsbUJBQVVDLE1BSGtCLENBQXBCO0FBTE8sQyxTQVlabUMsWSxHQUFlO0FBQ3BCc04sV0FBUyxFQURXO0FBRXBCcEIsZ0JBQWMsTUFBTSxDQUFFLENBRkY7QUFHcEIyQixZQUFVO0FBSFUsQzs7ZUFxQ1QseUJBQVEsSUFBUixFQUFjO0FBQUVGLHFEQUFGO0FBQXNCQztBQUF0QixDQUFkLEVBQWlEVCxVQUFqRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1XLFVBQVVwUyxtQkFBVWdPLE1BQVYsQ0FBaUI7QUFDL0JyTixZQUFVLFVBRHFCO0FBRS9Cb0wsU0FBTyxLQUZ3QjtBQUcvQkcsT0FBSyxLQUgwQjtBQUkvQnpMLFNBQU8sTUFKd0I7QUFLL0JDLFVBQVEsTUFMdUI7QUFNL0I0RixXQUFTLE1BTnNCO0FBTy9Cd0YsVUFBUSxHQVB1QjtBQVEvQjVELFlBQVU7QUFScUIsQ0FBakIsQ0FBaEI7O0FBV0EsTUFBTW1LLGNBQWNyUyxtQkFBVWdPLE1BQVYsQ0FBaUI7QUFDbkNyTixZQUFVLE9BRHlCO0FBRW5DOEUsUUFBTSxLQUY2QjtBQUduQ3lHLE9BQUssS0FIOEI7QUFJbkN6TCxTQUFPLE1BSjRCO0FBS25DQyxVQUFRLE1BTDJCO0FBTW5DNEYsV0FBUyxNQU4wQjtBQU9uQ3dGLFVBQVEsR0FQMkI7QUFRbkM1RCxZQUFVO0FBUnlCLENBQWpCLENBQXBCOztBQVVBLE1BQU1vSyxlQUFlO0FBQ25CL00sV0FBUztBQUNQMkcsU0FBSyxLQURFO0FBRVB6RyxVQUFNLEtBRkM7QUFHUHNHLFdBQU8sTUFIQTtBQUlQN0QsY0FBVSxNQUpIO0FBS1AxQyxZQUFRLE1BTEQ7QUFNUHNHLFlBQVEsS0FORDtBQU9QeEYsYUFBUyxHQVBGO0FBUVBxRixrQkFBYyxHQVJQO0FBU1BsTCxXQUFPLEtBVEE7QUFVUE4sY0FBVSxPQVZIO0FBV1BnSSxlQUFXO0FBWEosR0FEVTtBQWNuQm9LLFdBQVM7QUFDUDVSLGNBQVUsT0FESDtBQUVQdUwsU0FBSyxDQUZFO0FBR1B6RyxVQUFNLENBSEM7QUFJUHNHLFdBQU8sQ0FKQTtBQUtQdkcsWUFBUSxDQUxEO0FBTVBzRyxZQUFRLElBTkQ7QUFPUHBHLHFCQUFpQjtBQVBWO0FBZFUsQ0FBckI7QUF3QkEsTUFBTThNLHVCQUF1QjtBQUMzQmpOLFdBQVM7QUFDUHdHLFdBQU8sTUFEQTtBQUVQN0QsY0FBVSxNQUZIO0FBR1AxQyxZQUFRLE1BSEQ7QUFJUHNHLFlBQVEsS0FKRDtBQUtQeEYsYUFBUyxHQUxGO0FBTVA0RixTQUFLLENBTkU7QUFPUHpHLFVBQU0sQ0FQQztBQVFQa0csa0JBQWMsR0FSUDtBQVNQbEwsV0FBTyxNQVRBO0FBVVBOLGNBQVUsTUFWSDtBQVdQTyxZQUFRLE1BWEQ7QUFZUCtSLGdCQUFZO0FBWkwsR0FEa0I7QUFlM0JGLFdBQVM7QUFDUDVSLGNBQVUsT0FESDtBQUVQdUwsU0FBSyxDQUZFO0FBR1B6RyxVQUFNLENBSEM7QUFJUHNHLFdBQU8sQ0FKQTtBQUtQdkcsWUFBUSxDQUxEO0FBTVBzRyxZQUFRLElBTkQ7QUFPUHBHLHFCQUFpQjtBQVBWO0FBZmtCLENBQTdCO0lBMEJNZ04sYyxxQkFBTixNQUFNQSxjQUFOLFNBQTZCM0IsZUFBTW5LLFNBQW5DLENBQTZDO0FBK0IzQ0MsZ0JBQWM7QUFDWjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYNkwsY0FBUTtBQURHLEtBQWI7QUFJQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZTFGLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDQSxTQUFLMkYsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCM0YsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxTQUFLNEYsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CNUYsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDRDs7QUFFRDZGLG1DQUFpQ0MsU0FBakMsRUFBNEM7QUFDMUMsUUFBSSxDQUFDLEtBQUtsTSxLQUFMLENBQVc2TCxNQUFaLElBQXNCSyxVQUFVTCxNQUFwQyxFQUE0QztBQUMxQyxXQUFLQyxTQUFMO0FBQ0Q7O0FBQ0QsUUFBSSxLQUFLOUwsS0FBTCxDQUFXNkwsTUFBWCxJQUFxQkssVUFBVUMsa0JBQW5DLEVBQXVEO0FBQ3JELFdBQUtKLFVBQUw7QUFDRDtBQUNGOztBQUVERCxjQUFZO0FBQ1YsU0FBS3hGLFFBQUwsQ0FBYztBQUNadUYsY0FBUTtBQURJLEtBQWQ7QUFHRDs7QUFFREUsZUFBYTtBQUNYLFNBQUt6RixRQUFMLENBQWM7QUFDWnVGLGNBQVE7QUFESSxLQUFkOztBQUdBLFFBQUksS0FBS3hMLEtBQUwsQ0FBVytMLG9CQUFmLEVBQXFDO0FBQ25DLFdBQUsvTCxLQUFMLENBQVcrTCxvQkFBWDtBQUNEOztBQUNEdkQsYUFBUzJCLElBQVQsQ0FBYzZCLEtBQWQsQ0FBb0JqTCxRQUFwQixHQUErQixFQUEvQjtBQUNEOztBQUVENEssbUJBQWlCO0FBQ2YsU0FBSzNMLEtBQUwsQ0FBV2lNLGdCQUFYO0FBQ0F6RCxhQUFTMkIsSUFBVCxDQUFjNkIsS0FBZCxDQUFvQmpMLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0Q7O0FBRURtTCx5QkFBdUI7QUFDckIsU0FBS1IsVUFBTDtBQUNEOztBQUVEN0wsV0FBUztBQUNQLFVBQU07QUFBRXNNLGNBQUY7QUFBWUMsb0JBQVo7QUFBNEJDLGdCQUE1QjtBQUF3Q0MsaUJBQXhDO0FBQXFEQyx1QkFBckQ7QUFBd0VDO0FBQXhFLFFBQXdGLEtBQUt4TSxLQUFuRztBQUNBLFdBQ0U7QUFBSyxpQkFBV3VNLG9CQUFvQixPQUFwQixHQUE2QjtBQUE3QyxPQUNHLENBQUMsS0FBS3ZNLEtBQUwsQ0FBV3dMLE1BQVosR0FDQztBQUFNLGlCQUFVLGFBQWhCO0FBQThCLGVBQVMsS0FBS0M7QUFBNUMsT0FDRyxLQUFLekwsS0FBTCxDQUFXeU0sT0FEZCxDQURELEdBSUMsSUFMSixFQU9FLDZCQUFDLG1CQUFEO0FBQ0UsY0FBUSxLQUFLOU0sS0FBTCxDQUFXNkwsTUFEckI7QUFFRSxtQkFBYSxLQUFLRyxjQUZwQjtBQUdFLHNCQUFnQixLQUFLRCxVQUh2QjtBQUlFLGFBQU9TLFdBQVdkLG9CQUFYLEdBQWtDRixZQUozQztBQUtFLG9CQUFhLHVCQUxmO0FBTUUsbUJBQWEsS0FOZjtBQU9FLGlDQUEyQixJQVA3QjtBQVFFLGlCQUFXcUI7QUFSYixPQVdJSixpQkFDRSw2QkFBQyxXQUFEO0FBQWEsZUFBUyxLQUFLVixVQUEzQjtBQUF1QyxpQkFBWSxZQUFXVyxhQUFhLFFBQWIsR0FBd0IsRUFBRztBQUF6RixPQUNHQyxjQUFjLDZCQUFDLGdCQUFEO0FBQVksaUJBQVU7QUFBdEIsTUFBZCxHQUE2RCw2QkFBQyxlQUFEO0FBQVcsaUJBQVU7QUFBckIsTUFEaEUsQ0FERixHQUlFLDZCQUFDLE9BQUQ7QUFBUyxlQUFTLEtBQUtaLFVBQXZCO0FBQW1DLGlCQUFZLFlBQVdXLGFBQWEsUUFBYixHQUF3QixFQUFHO0FBQXJGLE9BQ0dDLGNBQWMsNkJBQUMsZ0JBQUQ7QUFBWSxpQkFBVTtBQUF0QixNQUFkLEdBQTZELDZCQUFDLGVBQUQ7QUFBVyxpQkFBVTtBQUFyQixNQURoRSxDQWZOLEVBbUJHLEtBQUt0TSxLQUFMLENBQVdnTCxRQW5CZCxDQVBGLENBREY7QUErQkQ7O0FBOUcwQyxDLFNBRXBDbFEsUyxHQUFZO0FBQ2pCMlIsV0FBUzFSLG1CQUFVMlIsSUFERjtBQUVqQjFCLFlBQVVqUSxtQkFBVTJSLElBQVYsQ0FBZXpSLFVBRlI7QUFHakJnUixvQkFBa0JsUixtQkFBVStELElBSFg7QUFJakJpTix3QkFBc0JoUixtQkFBVStELElBSmY7QUFLakJnTixzQkFBb0IvUSxtQkFBVWlELElBTGI7QUFNakJtTyxZQUFVcFIsbUJBQVVpRCxJQU5IO0FBT2pCb08sa0JBQWdCclIsbUJBQVVpRCxJQVBUO0FBUWpCcU8sY0FBWXRSLG1CQUFVaUQsSUFSTDtBQVNqQnNPLGVBQWF2UixtQkFBVWlELElBVE47QUFVakJ1TyxxQkFBbUJ4UixtQkFBVWlELElBVlo7QUFXakJ3TyxlQUFhelIsbUJBQVVHO0FBWE4sQyxTQWNaaUMsWSxHQUFlO0FBQ3BCOE8sb0JBQWtCLE1BQU0sQ0FDdkIsQ0FGbUI7QUFHcEJGLHdCQUFzQixNQUFNLENBQzNCLENBSm1CO0FBS3BCRCxzQkFBb0IsS0FMQTtBQU1wQlcsV0FBUyx3RkFOVztBQU9wQk4sWUFBVSxLQVBVO0FBUXBCQyxrQkFBZ0IsS0FSSTtBQVNwQkMsY0FBWSxLQVRRO0FBVXBCQyxlQUFhLEtBVk87QUFXcEJDLHFCQUFtQixLQVhDO0FBWXBCQyxlQUFhO0FBWk8sQztlQWlHVGpCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE1mOztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7QUFFQSxNQUFNb0Isb0JBQW9CLENBQUM7QUFBRXRSLGFBQUY7QUFBZUMsU0FBZjtBQUF3QkM7QUFBeEIsQ0FBRCxLQUN4QjtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUksYUFBVTtBQUFkLGlCQUE0Q0YsV0FBNUMsZ0JBQWtFO0FBQU0sYUFBVTtBQUFoQixpQkFBbUNFLElBQW5DLE1BQWxFLENBREYsRUFFRTtBQUFHLGFBQVU7QUFBYiwyREFGRixFQUdFLDZCQUFDLG1CQUFEO0FBQ0UsV0FBUztBQUNQQyxZQUFRSCxXQUREO0FBRVBJLFVBQU0sbUJBRkM7QUFHUEMsYUFBUyxPQUhGO0FBSVBDLFNBQUssc0JBSkU7QUFLUFgsWUFBUyxXQUFVTSxPQUFRO0FBTHBCLEdBRFg7QUFRRSxnQkFBYyxNQUFNLENBQUU7QUFSeEIsR0FVRTtBQUFLLGFBQVU7QUFBZixHQUFvRDtBQUFLLGFBQVU7QUFBZixFQUFwRCwwQkFWRixDQUhGLENBREY7O0FBbUJBcVIsa0JBQWtCN1IsU0FBbEIsR0FBOEI7QUFDNUJPLGVBQWFOLG1CQUFVRyxNQUFWLENBQWlCRCxVQURGO0FBRTVCSyxXQUFTUCxtQkFBVWEsTUFBVixDQUFpQlgsVUFGRTtBQUc1Qk0sUUFBTVIsbUJBQVVHLE1BQVYsQ0FBaUJEO0FBSEssQ0FBOUI7ZUFNZTBSLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZjs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTUMsZ0JBQWdCL1QsbUJBQVUySCxFQUFWLENBQWE7QUFDakNyQyxjQUFZLFFBRHFCO0FBRWpDME8sYUFBVyxRQUZzQjtBQUdqQyxVQUFRO0FBQ05DLGlCQUFhLEtBRFA7QUFFTjdKLGtCQUFjLEtBRlI7QUFHTjlKLGdCQUFZLEtBSE47QUFJTkksWUFBUSxNQUpGO0FBS05MLGNBQVUsTUFMSjtBQU1OZ0csZ0JBQVksTUFOTjtBQU9OQyxhQUFTLFFBUEg7QUFRTmxHLGVBQVcsTUFSTDtBQVNOMkgsYUFBUyxjQVRIO0FBVU5yQyxxQkFBaUI7QUFWWDtBQUh5QixDQUFiLENBQXRCOztBQWlCQSxNQUFNd08sZ0JBQWdCLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ3BCO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsYUFBRDtBQUFlLGFBQVU7QUFBekIsR0FFSUEsUUFDRzdLLE1BREgsQ0FDVThLLEtBQUtBLEVBQUU3TCxLQURqQixFQUVHakgsR0FGSCxDQUVPLENBQUNDLEdBQUQsRUFBTUMsS0FBTixLQUNMO0FBQUksT0FBS0EsS0FBVDtBQUFnQixhQUFVO0FBQTFCLEdBQXNDRCxJQUFJZ0gsS0FBMUMsQ0FIRixDQUZKLENBREYsQ0FERjs7ZUFjZTJMLGE7O0FBRWZBLGNBQWNqUyxTQUFkLEdBQTBCO0FBQ3hCa1MsV0FBU2pTLG1CQUFVOEQsS0FBVixDQUFnQjVEO0FBREQsQ0FBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBR0EsTUFBTWlTLHdCQUF3QnJVLG1CQUFVMkgsRUFBVixDQUFhO0FBQ3pDLFVBQVE7QUFDTnRILGNBQVUsTUFESjtBQUVOaUcsYUFBUyxPQUZIO0FBR041RixZQUFRLE1BSEY7QUFJTjJGLGdCQUFZLE1BSk47QUFLTix3QkFBb0I7QUFDbEI1RixhQUFPLE1BRFc7QUFFbEJDLGNBQVEsTUFGVTtBQUdsQkMsZ0JBQVUsVUFIUTtBQUlsQnNULG1CQUFhO0FBSkssS0FMZDtBQVdOLG9CQUFnQjtBQUNkQSxtQkFBYTtBQURDO0FBWFYsR0FEaUM7QUFnQnpDLGVBQWE7QUFDWHBNLFlBQVEsbUJBREc7QUFFWHRCLFdBQU87QUFGSSxHQWhCNEI7QUFvQnpDLGVBQWE7QUFDWHNCLFlBQVEsbUJBREc7QUFFWHRCLFdBQU87QUFGSTtBQXBCNEIsQ0FBYixDQUE5Qjs7QUEwQkEsTUFBTStOLGVBQWUsQ0FBQztBQUFFelAsUUFBRjtBQUFVRDtBQUFWLENBQUQsS0FDbkIsNkJBQUMscUJBQUQ7QUFBdUIsYUFBVTtBQUFqQyxHQUVJQyxTQUNFO0FBQUksYUFBVTtBQUFkLCtCQURGLEdBR1VELFNBQ1I7QUFBSSxhQUFVO0FBQWQsK0JBRFEsR0FHQSxJQVJkLENBREY7O0FBY0EwUCxhQUFhclMsU0FBYixHQUF5QjtBQUN2QjRDLFVBQVEzQyxxQkFBVWlELElBREs7QUFFdkJQLFVBQVExQyxxQkFBVWlEO0FBRkssQ0FBekI7QUFLQW1QLGFBQWFoUSxZQUFiLEdBQTRCO0FBQzFCTyxVQUFRLElBRGtCO0FBRTFCRCxVQUFRO0FBRmtCLENBQTVCO2VBS2UwUCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFJQTs7Ozs7O0FBRkEsTUFBTTdILFNBQVMsSUFBSUMsbUJBQUosRUFBZjtJQU1NNkgsZ0IsR0FBTixNQUFNQSxnQkFBTixTQUErQjNOLGdCQUEvQixDQUF5QztBQUN2Q0MsZ0JBQWM7QUFDWjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUFFME4sZ0JBQVU7QUFBWixLQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCdkgsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFFRHVILGlCQUFjO0FBQ1osU0FBS3JILFFBQUwsQ0FBYztBQUFFb0gsZ0JBQVUsQ0FBQyxLQUFLMU4sS0FBTCxDQUFXME47QUFBeEIsS0FBZDtBQUNEOztBQUVEeE4sV0FBUTtBQUNOLFVBQU07QUFBRTBOLGVBQUY7QUFBYW5QLGFBQWI7QUFBc0JpQyxhQUF0QjtBQUErQm1OLGVBQS9CO0FBQTBDN1Q7QUFBMUMsUUFBK0QsS0FBS3FHLEtBQTFFO0FBQ0EsVUFBTTtBQUFFcU47QUFBRixRQUFlLEtBQUsxTixLQUExQjtBQUNBLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsMENBRUk2TixZQUNFO0FBQUksaUJBQVU7QUFBZCxPQUFxQ25OLE9BQXJDLE9BQWdEMUcsbUJBQW9CLE1BQUtBLGdCQUFpQixFQUExQyxHQUE4QyxJQUE5RixDQURGLEdBQzZHLElBSGpILEVBS0U7QUFBSyxhQUFPO0FBQUUscUJBQWEwVCxXQUFXLE1BQVgsR0FBb0JFO0FBQW5DLE9BQVo7QUFDSyxpQkFBYSxHQUFFelEsNEJBQU8yUSxJQUFLLHVCQUFzQkosV0FBV3ZRLDRCQUFPdVEsUUFBbEIsR0FBNkIsRUFBRztBQUR0RixPQUVFO0FBQU0saUJBQVU7QUFBaEIsT0FDRy9ILE9BQU9LLEtBQVAsQ0FBYXZILE9BQWIsQ0FESCxDQUZGLENBTEYsRUFXRTtBQUFRLGlCQUFZLEdBQUV0Qiw0QkFBTzRRLFFBQVMscURBQXRDO0FBQTRGLGVBQVMsS0FBS0o7QUFBMUcsT0FDRTtBQUFNLGlCQUFVO0FBQWhCLE9BQXVDRCxXQUFXLFdBQVgsR0FBeUIsV0FBaEUsQ0FERixFQUVFO0FBQU0saUJBQVksR0FBRXZRLDRCQUFPNlEsU0FBVSxtQkFBa0JOLFdBQVcsV0FBWCxHQUF5QixTQUFVO0FBQTFGLE9BQTZGLDZCQUFDLG1CQUFELE9BQTdGLENBRkYsQ0FYRixDQURGLENBREY7QUFvQkQ7O0FBbENzQyxDO0FBcUN6Q0QsaUJBQWlCdFMsU0FBakIsR0FBNkI7QUFDM0JzRCxXQUFTckQsbUJBQVVHLE1BQVYsQ0FBaUJELFVBREM7QUFFM0JzUyxhQUFXeFMsbUJBQVVhLE1BRk07QUFHM0J5RSxXQUFTdEYsbUJBQVVHLE1BSFE7QUFJM0JzUyxhQUFXelMsbUJBQVVpRCxJQUpNO0FBSzNCckUsb0JBQWtCb0IsbUJBQVVHO0FBTEQsQ0FBN0I7QUFRQWtTLGlCQUFpQmpRLFlBQWpCLEdBQWdDO0FBQzlCb1EsYUFBVyxFQURtQjtBQUU5QkMsYUFBVztBQUZtQixDQUFoQztlQUtlSixnQjs7Ozs7Ozs7Ozs7O0FDOURmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTTlILFNBQVMsSUFBSUMsbUJBQUosRUFBZjtBQUVBLE1BQU1xSSxnQkFBZ0Isd0JBQVVDLHdCQUFWLEVBQWtCO0FBQ3RDbEosVUFBUSxDQUQ4QjtBQUV0Q25MLFlBQVUsVUFGNEI7QUFHdEMsZUFBYTtBQUNYb0gsYUFBUztBQURFLEdBSHlCO0FBTXRDLFlBQVU7QUFDUiwyQkFBdUI7QUFDckJrTixrQkFBWTtBQURTLEtBRGY7QUFJUixpQkFBYTtBQUNYbE4sZUFBUztBQURFO0FBSkw7QUFONEIsQ0FBbEIsQ0FBdEI7O0FBZ0JBLFNBQVNtTixxQkFBVCxDQUErQkMsZUFBL0IsRUFBZ0RDLGNBQWhELEVBQWdFbk8sWUFBaEUsRUFBOEVvTyxlQUE5RSxFQUErRjtBQUM3RixNQUFJQyxrQkFBa0IsRUFBdEI7QUFFQUEsb0JBQWtCLENBQ2hCLEdBQUdBLGVBRGEsRUFFaEIsR0FBR0MsT0FBT0MsSUFBUCxDQUFZTCxtQkFBbUIsRUFBL0IsRUFDQTdMLE1BREEsQ0FDT21NLEtBQUtOLGdCQUFnQk0sQ0FBaEIsRUFBbUJ4VSxXQUFuQixJQUFrQ2tVLGdCQUFnQk0sQ0FBaEIsRUFBbUIxVSxJQUFuQixDQUF3Qk0sTUFEdEUsRUFFQUMsR0FGQSxDQUVJbVUsTUFBTTtBQUFFelUsV0FBTyx5Q0FBMkJ5VSxDQUEzQixDQUFUO0FBQXdDMVAsa0JBQWUsR0FBRTBQLENBQUU7QUFBM0QsR0FBTixDQUZKLENBRmEsQ0FBbEI7O0FBT0EsTUFBSUwsa0JBQWtCQSxlQUFlL1QsTUFBckMsRUFBNkM7QUFDM0NpVSxzQkFBa0IsQ0FBQyxHQUFHQSxlQUFKLEVBQXFCO0FBQUV0VSxhQUFPLFFBQVQ7QUFBbUIrRSxvQkFBYztBQUFqQyxLQUFyQixDQUFsQjtBQUNEOztBQUVELE1BQUlrQixnQkFBZ0JBLGFBQWFJLGVBQWIsQ0FBNkJoRyxNQUFqRCxFQUF5RDtBQUN2RGlVLHNCQUFrQixDQUFDLEdBQUdBLGVBQUosRUFBcUI7QUFBRXRVLGFBQU8sU0FBVDtBQUFvQitFLG9CQUFjO0FBQWxDLEtBQXJCLENBQWxCO0FBQ0Q7O0FBRUQsTUFBSXNQLG1CQUFtQkEsZ0JBQWdCaFUsTUFBdkMsRUFBK0M7QUFDN0NpVSxzQkFBa0IsQ0FBQyxHQUFHQSxlQUFKLEVBQXFCO0FBQUV0VSxhQUFPLFVBQVQ7QUFBcUIrRSxvQkFBYztBQUFuQyxLQUFyQixDQUFsQjtBQUNEOztBQUVELFNBQU91UCxlQUFQO0FBQ0Q7O0lBRUtJLEcscUJBQU4sTUFBTUEsR0FBTixTQUFrQjlPLGdCQUFsQixDQUE0QjtBQUMxQkMsY0FBWU0sS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQjs7QUFFakIsU0FBSytOLHFCQUFMLENBQTJCL04sS0FBM0I7QUFDRDs7QUFTRG9JLHNCQUFvQjtBQUNsQixpQ0FBZSxLQUFLb0csZUFBcEI7QUFDRDs7QUFFREMscUJBQW1CQyxTQUFuQixFQUE4QjtBQUM1QixzQ0FBVSxPQUFWLEVBQW1CLEVBQW5COztBQUNBLFFBQUlBLFVBQVVoRSxRQUFWLEtBQXVCLEtBQUsxSyxLQUFMLENBQVcwSyxRQUF0QyxFQUFnRDtBQUM5QyxtQ0FBZSxLQUFLOEQsZUFBcEI7QUFDRDtBQUNGOztBQUdEM08sV0FBUztBQUNQLFVBQU07QUFBRThPLGFBQUY7QUFBV0Msd0JBQVg7QUFBK0JDLFlBQS9CO0FBQXVDQyxpQkFBdkM7QUFBb0RwRSxjQUFwRDtBQUE4RHFFO0FBQTlELFFBQTJFLEtBQUsvTyxLQUF0Rjs7QUFDQSxRQUFHLENBQUMyTyxRQUFRcFAsS0FBWixFQUFtQjtBQUNqQixhQUFPLHlDQUFQO0FBQ0Q7O0FBQ0QsVUFBTTtBQUNKbEMsYUFESTtBQUNLVCxpQkFETDtBQUNrQlUsZ0JBRGxCO0FBQzhCRSxnQkFEOUI7QUFDMENvRyxtQkFBYWpLLGdCQUR2RDtBQUVKbUUsWUFBTVAsU0FGRjtBQUVhb0csc0JBQWdCbEcsTUFGN0I7QUFFcUNpRyxzQkFBZ0JoRyxNQUZyRDtBQUU2RG1HLG9CQUFjbEcsV0FGM0U7QUFHSnFSLGVBSEk7QUFHT3hNLGdCQUhQO0FBR21CUCxZQUhuQjtBQUcyQmdOLGdCQUgzQjtBQUd1QzlVLFNBSHZDO0FBSUp5RCxlQUpJO0FBSU9vUSxxQkFKUDtBQUl3QmtCLFVBSnhCO0FBSThCQyxhQUo5QjtBQUl1Q0Msb0JBSnZDO0FBSXVEbkIsb0JBSnZEO0FBSXVFb0IsaUJBSnZFO0FBS0pDLGlCQUxJO0FBS1MxVSxRQUxUO0FBS2EyVTtBQUxiLFFBTUZaLFFBQVFwUCxLQU5aO0FBT0EsU0FBS2lQLGVBQUwsR0FBdUJVLE9BQU9BLEtBQUtwUixJQUFaLEdBQW1CcVIsVUFBVUEsUUFBUXJSLElBQWxCLEdBQXlCLEVBQW5FO0FBQ0EsVUFBTTBSLHFCQUFxQkwsVUFBVUEsUUFBUXJSLElBQWxCLEdBQXlCb1IsT0FBT0EsS0FBS3BSLElBQVosR0FBbUIsRUFBdkU7QUFDQSxVQUFNO0FBQUUyUixVQUFGO0FBQVF0TCxtQkFBUjtBQUF1QnJFLGtCQUF2QjtBQUFxQzRQLGdCQUFVQyxRQUEvQztBQUF5REMsa0JBQXpEO0FBQXVFQztBQUF2RSxRQUFtRmxCLE9BQXpGO0FBQ0EsVUFBTTNNLFFBQVFzTixlQUFlNUUsU0FBU29GLEtBQVQsQ0FBZVIsV0FBOUIsSUFBNkMsbUNBQW9CLENBQS9FO0FBQ0EsVUFBTS9ULE9BQU8sb0NBQXNCZ1UsZ0JBQWdCLE9BQXRDLENBQWI7QUFDQSxVQUFNUSxjQUFlLEdBQUV4VSxJQUFLLFFBQU8seUNBQTJCLEtBQUtpVCxlQUFoQyxDQUFpRCxFQUFwRjtBQUNBLFVBQU13QiwyQkFBMkJDLGlCQUFnQkMsU0FBakQ7QUFDQSxVQUFNQywyQkFBMkJDLHdCQUFnQkYsU0FBakQ7QUFDQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLG9CQUFELFFBQ0U7QUFBTSxZQUFLLDJGQUFYO0FBQ00sV0FBSSxlQURWO0FBQzBCLFlBQUs7QUFEL0IsTUFERixFQUdFO0FBQU0sWUFBSywyRkFBWDtBQUNNLFdBQUksTUFEVjtBQUNpQixZQUFLO0FBRHRCLE1BSEYsRUFLSSxvQ0FBbUJQLFFBQW5CLEVBQTZCQyxZQUE3QixFQUEyQ2xGLFNBQVMyRixRQUFwRCxDQUxKLEVBTUksQ0FBQzFCLFFBQVEyQixXQUFULElBQXdCO0FBQU0sWUFBSyxRQUFYO0FBQW9CLGVBQVE7QUFBNUIsTUFONUIsRUFPRTtBQUFNLFlBQUssYUFBWDtBQUF5QixlQUFRO0FBQWpDLE1BUEYsQ0FERixFQVVFO0FBQUssaUJBQVd4VCxlQUFPeVQ7QUFBdkIsTUFWRixFQVdFLDZCQUFDLHFCQUFELE9BWEYsRUFZRSw2QkFBQyxvQkFBRDtBQUFhLGFBQU9SLGNBQWNBLFdBQWQsR0FBNEIsRUFBaEQ7QUFBb0QsZUFBU0YsT0FBN0Q7QUFBc0UscUJBQWU7QUFBckYsTUFaRixFQWFFLDBDQUNFLDZCQUFDLGFBQUQ7QUFBZSxtQkFBWSxNQUEzQjtBQUFrQyxzQkFBZTtBQUFqRCxPQUNFO0FBQUssaUJBQVksWUFBVy9TLGVBQU8wVCxHQUFJO0FBQXZDLE9BQ0UsNkJBQUMsdUJBQUQ7QUFDRSxlQUFTLEtBQUtyQyxlQURoQjtBQUVFLFlBQU1zQyxpQkFGUjtBQUdFLG1CQUFhLEtBQUtqQyxlQUFMLElBQXdCZ0Isa0JBSHZDO0FBSUUsZUFBUzVVLEVBSlg7QUFLRSxZQUFNLHNDQUF3QlcsSUFBeEIsRUFBOEIsR0FBOUI7QUFMUixNQURGLENBREYsQ0FERixDQWJGLEVBMEJFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNBLDZCQUFDLDBCQUFELEVBQXVCO0FBQUU4QixhQUFGO0FBQVdULGlCQUFYO0FBQXdCVSxnQkFBeEI7QUFBb0NDLGVBQXBDO0FBQStDNUQsc0JBQS9DO0FBQWlFNkQsZ0JBQWpFO0FBQTZFQyxZQUE3RTtBQUFxRkMsWUFBckY7QUFDckJDLGlCQURxQjtBQUNUeEQsU0FEUztBQUNKeUQsZUFESTtBQUNPdkMsbUJBQWFtVTtBQURwQixLQUF2QixDQURBLENBREYsRUFNRTtBQUFLLGlCQUFVO0FBQWYsT0FBc0IsNkJBQUMsNEJBQUQ7QUFBcUIsY0FBUVIsU0FBN0I7QUFBd0MsaUJBQVd6UjtBQUFuRCxNQUF0QixDQU5GLEVBU01pRixlQUFlQSxXQUFXTyxTQUFYLElBQXdCUCxXQUFXUSxPQUFsRCxJQUVFO0FBQUssaUJBQVU7QUFBZixPQUE4Qiw2QkFBQyxtQkFBRDtBQUFZLGtCQUFZLHVCQUF4QjtBQUFpRCxrQkFBWVIsVUFBN0Q7QUFBeUUsY0FBUVAsTUFBakY7QUFBeUYsYUFBT0QsS0FBaEc7QUFBdUcsbUJBQWE4TTtBQUFwSCxNQUE5QixDQUZGLEdBR0ksSUFaVixFQWNJLDZCQUFDLFlBQUQ7QUFBSyxtQkFBYSx5Q0FBMkIsS0FBS04sZUFBTCxJQUF3QmdCLGtCQUFuRCxDQUFsQjtBQUEwRixlQUFTNVUsRUFBbkc7QUFBdUcsWUFBTSxzQ0FBd0JXLElBQXhCLEVBQThCLEdBQTlCO0FBQTdHLE1BZEosQ0ExQkYsRUE2Q0kwVCxXQUFXL1UsTUFBWCxHQUFvQjtBQUFLLGlCQUFVO0FBQWYsT0FBOEIsNkJBQUMsa0JBQUQ7QUFBVyxpQkFBVytVO0FBQXRCLE1BQTlCLENBQXBCLEdBQStGLElBN0NuRyxFQWdESWpCLGdCQUFnQjBDLFFBQWhCLElBQTRCMUMsZ0JBQWdCMEMsUUFBaEIsQ0FBeUI1VyxXQUFyRCxHQUNFLDZCQUFDLG9CQUFEO0FBQVMsWUFBSyxjQUFkO0FBQTZCLGlCQUFVO0FBQXZDLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMseUJBQUQ7QUFDRSxlQUFTa1UsZ0JBQWdCMEMsUUFBaEIsQ0FBeUI3VyxLQURwQztBQUVFLGlCQUFXLEVBRmI7QUFHRSxlQUFTbVUsZ0JBQWdCMEMsUUFBaEIsQ0FBeUI1VztBQUhwQyxNQURGLENBREYsRUFTSWtVLGdCQUFnQjBDLFFBQWhCLENBQXlCOVcsSUFBekIsQ0FBOEJNLE1BQTlCLEdBQ0UsNkJBQUMsc0JBQUQ7QUFBZSxlQUFTOFQsZ0JBQWdCMEMsUUFBaEIsQ0FBeUI5VztBQUFqRCxNQURGLEdBQzhELElBVmxFLENBREYsR0FhZSxJQTdEbkIsRUFnRUU7QUFBSyxpQkFBVTtBQUFmLE9BQ1EsNkJBQUMsMEJBQUQ7QUFBbUIsbUJBQWMseUNBQTJCLEtBQUs0VSxlQUFoQyxDQUFqQztBQUFvRixlQUFTNVQsRUFBN0Y7QUFBaUcsWUFBTSxzQ0FBd0JXLElBQXhCLEVBQThCLEdBQTlCO0FBQXZHLE1BRFIsQ0FoRUYsRUFxRUl5UyxnQkFBZ0IyQyxLQUFoQixJQUF5QjNDLGdCQUFnQjJDLEtBQWhCLENBQXNCN1csV0FBL0MsR0FDRSw2QkFBQyxvQkFBRDtBQUFTLFlBQUssV0FBZDtBQUEwQixpQkFBVTtBQUFwQyxPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLHlCQUFEO0FBQ0UsZUFBU2tVLGdCQUFnQjJDLEtBQWhCLENBQXNCOVcsS0FEakM7QUFFRSxpQkFBVyxFQUZiO0FBR0UsZUFBU21VLGdCQUFnQjJDLEtBQWhCLENBQXNCN1csV0FIakM7QUFJRSx3QkFBa0JIO0FBSnBCLE1BREYsQ0FERixFQVNFLDZCQUFDLHNCQUFEO0FBQWUsZUFBU3FVLGdCQUFnQjJDLEtBQWhCLENBQXNCL1c7QUFBOUMsTUFURixDQURGLEdBV2UsSUFoRm5CLEVBbUZJb1UsZ0JBQWdCNEMsVUFBaEIsSUFBOEI1QyxnQkFBZ0I0QyxVQUFoQixDQUEyQmhYLElBQTNCLENBQWdDTSxNQUE5RCxJQUF3RThULGdCQUFnQjRDLFVBQWhCLENBQTJCOVcsV0FBbkcsR0FDRSw2QkFBQyxvQkFBRDtBQUFTLFlBQUssZ0JBQWQ7QUFBK0IsaUJBQVU7QUFBekMsT0FDRSw2QkFBQyxrQkFBRDtBQUNFLHFCQUFla1UsZ0JBQWdCNEMsVUFEakM7QUFFRSx3QkFBa0JqWDtBQUZwQixNQURGLENBREYsR0FNZSxJQXpGbkIsRUE0RklxVSxnQkFBZ0I2QyxNQUFoQixJQUEwQjdDLGdCQUFnQjZDLE1BQWhCLENBQXVCL1csV0FBakQsR0FDRSw2QkFBQyxvQkFBRDtBQUFTLFlBQUssWUFBZDtBQUEyQixpQkFBVTtBQUFyQyxPQUNJLDZCQUFDLHNCQUFEO0FBQWUsZUFBU2tVLGdCQUFnQjZDLE1BQXhDO0FBQWdELHdCQUFrQmxYO0FBQWxFLE1BREosQ0FERixHQUdlLElBL0ZuQixFQWtHSXlWLGlCQUNFO0FBQUssaUJBQVU7QUFBZixPQUNJO0FBQUssaUJBQVU7QUFBZixPQUFrRTlKLE9BQU9LLEtBQVAsQ0FBYXlKLGNBQWIsQ0FBbEUsQ0FESixDQURGLEdBR1csSUFyR2YsRUF3R0lLLFFBQVFBLEtBQUtBLElBQWIsSUFBcUJBLEtBQUtBLElBQUwsQ0FBVXZWLE1BQS9CLEdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ00sNkJBQUMsYUFBRDtBQUFLLFlBQU11VixJQUFYO0FBQWlCLHdCQUFrQjlWO0FBQW5DLE1BRE4sQ0FERixHQUdXLElBM0dmLEVBOEdJc1UsZUFBZS9ULE1BQWYsR0FDRSw2QkFBQyxvQkFBRDtBQUFTLFlBQUssWUFBZDtBQUEyQixpQkFBVTtBQUFyQyxPQUNJLDZCQUFDLGVBQUQ7QUFBUSxzQkFBZ0IrVDtBQUF4QixNQURKLENBREYsR0FHZSxJQWpIbkIsRUFvSEluTyxnQkFBZ0JBLGFBQWFJLGVBQWIsQ0FBNkJoRyxNQUE3QyxHQUNFLDZCQUFDLG9CQUFEO0FBQVMsWUFBSyxpQkFBZDtBQUFnQyxpQkFBVSxjQUExQztBQUF5RCxVQUFHO0FBQTVELE9BQ00sNkJBQUMsb0JBQUQ7QUFDRSxvQkFBYzRGLFlBRGhCO0FBRUUsa0JBQVl0QyxVQUZkO0FBR0UsZ0NBQTBCOEQsU0FBU3NOLG1CQUFtQnROLEtBQW5CLEVBQTBCdU4sT0FBT3RSLFNBQWpDLENBSHJDO0FBSUUsd0JBQWtCNUQ7QUFKcEIsTUFETixDQURGLEdBU2UsSUE3SG5CLEVBZ0lJMFYsY0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDSSw2QkFBQyx5QkFBRDtBQUNFLGVBQVEsU0FEVjtBQUVFLGlCQUFXLEVBRmI7QUFHRSxlQUFTQTtBQUhYLE1BREosQ0FERixHQU9XLElBdklmLEVBMElJelMsWUFBWUssS0FBWixJQUFxQkwsWUFBWU0sT0FBakMsSUFBNENOLFlBQVlDLEtBQXhELElBQ0dELFlBQVlJLGVBQVosSUFBK0JKLFlBQVlJLGVBQVosQ0FBNEI5QyxNQUQ5RCxHQUVFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLHNCQUFELEVBQW1CO0FBQUUwQztBQUFGLEtBQW5CLENBREYsQ0FGRixHQUlXLElBOUlmLEVBaUpJdUgsY0FBY0UsTUFBZCxJQUF3QkYsY0FBY0UsTUFBZCxDQUFxQm5LLE1BQTdDLEdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0ksNkJBQUMsc0JBQUQ7QUFBZSxxQkFBZWlLLGFBQTlCO0FBQTZDLGFBQU9uQztBQUFwRCxNQURKLENBREYsR0FHVyxJQXBKZixFQXVKSStNLFlBQVlBLFNBQVM3VSxNQUFyQixHQUNFO0FBQUssaUJBQVUsVUFBZjtBQUEwQixVQUFHO0FBQTdCLE9BQ0ksNkJBQUMsd0JBQUQ7QUFBMEIsYUFBUSxHQUFFLHlDQUEyQixLQUFLc1UsZUFBTCxJQUF3QmdCLGtCQUFuRCxDQUF1RTtBQUEzRyxNQURKLENBREYsR0FHVyxJQTFKZixFQTRKRTtBQUFLLGlCQUFVO0FBQWYsT0FDSSw2QkFBQyx3QkFBRDtBQUEwQixZQUFNO0FBQzlCM1YsZUFBUSx3QkFBdUIsS0FBSzJVLGVBQUwsSUFBd0JnQixrQkFBbUI7QUFENUMsT0FBaEM7QUFFRyxjQUFRO0FBQUVzQixhQUFLO0FBQVAsT0FGWDtBQUUwQixtQkFBYSxLQUFLdEMsZUFBTCxJQUF3QmdCLGtCQUYvRDtBQUcwQixlQUFRO0FBSGxDLE1BREosQ0E1SkYsRUFrS0U7QUFBSyxVQUFHO0FBQVIsTUFsS0YsRUFtS0UsNkJBQUMsa0JBQUQsT0FuS0YsRUFvS0U7QUFBSyxpQkFBVTtBQUFmLE9BQ00sNkJBQUMsbUJBQUQ7QUFBWSxtQkFBYWIsUUFBUW9DO0FBQWpDLE1BRE4sQ0FwS0YsRUF1S0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsZUFBRCxPQURGLENBdktGLENBREY7QUE2S0Q7O0FBMU55QixDO09BTTFCaEQscUIsR0FBeUIvTixLQUFELElBQVc7QUFDakMsUUFBR0EsTUFBTTJPLE9BQU4sSUFBaUIzTyxNQUFNMk8sT0FBTixDQUFjcFAsS0FBbEMsRUFBeUM7QUFDdkMsWUFBTTtBQUFFb1AsaUJBQVM7QUFBRXBQLGlCQUFPO0FBQUV5TywyQkFBRjtBQUFtQkM7QUFBbkIsV0FBVDtBQUE4Q25PO0FBQTlDLFNBQVg7QUFBeUVpUDtBQUF6RSxVQUFzRi9PLEtBQTVGO0FBQ0EsV0FBS21PLGVBQUwsR0FBdUJKLHNCQUFzQkMsZUFBdEIsRUFBdUNDLGNBQXZDLEVBQXVEbk8sWUFBdkQsRUFBcUVpUCxRQUFyRSxDQUF2QjtBQUNEO0FBQ0YsRzs7QUFrTkhSLElBQUl6VCxTQUFKLEdBQWdCO0FBQ2Q2VCxXQUFTNVQsbUJBQVVDLE1BREw7QUFFZDRULHNCQUFvQjdULG1CQUFVK0QsSUFBVixDQUFlN0QsVUFGckI7QUFHZDRULFVBQVE5VCxtQkFBVUMsTUFBVixDQUFpQkMsVUFIWDtBQUlkNlQsZUFBYS9ULG1CQUFVK0QsSUFBVixDQUFlN0QsVUFKZDtBQUtkeVAsWUFBVTNQLG1CQUFVQyxNQUFWLENBQWlCQyxVQUxiO0FBTWQ4VCxZQUFVaFUsbUJBQVU4RCxLQU5OO0FBT2RnUixXQUFTOVUsbUJBQVVHO0FBUEwsQ0FBaEI7QUFVQXFULElBQUlwUixZQUFKLEdBQW1CO0FBQ2pCd1IsV0FBUyxFQURRO0FBRWpCSSxZQUFVO0FBRk8sQ0FBbkI7ZUFLZVIsRzs7Ozs7Ozs7Ozs7O0FDalVmO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJob3RlbC1kZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uLy4uLy4uL2FwcC9oZWxwZXJzL3BhcnNlcnMnO1xuaW1wb3J0IFNob3dNb3JlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcbmltcG9ydCBSZWFkTW9yZUJ5SGVpZ2h0IGZyb20gJ21vZHVsZXMvc2hhcmVkL1JlYWRNb3JlQnlIZWlnaHQnO1xuXG5jb25zdCBHQW1lbml0aWVzQ29udGFpbmVyVWwgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgbGknOiB7XG4gICAgbWluV2lkdGg6ICc1MCUnLFxuICAgIG1heFdpZHRoOiAnNTAlJyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgfSxcbiAgJyYgLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgZm9udFNpemU6ICcxMnB4ICFpbXBvcnRhbnQnLFxuICAgIGZvbnRXZWlnaHQ6ICc4MDAgIWltcG9ydGFudCdcbiAgfVxufSk7XG5cbmNvbnN0IEdJY29uU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcyNHB4JyxcbiAgaGVpZ2h0OiAnMjRweCcsXG4gICcmIHN2Zyc6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgfVxufSk7XG5cbmNvbnN0IEFtZW5pdGllcyA9ICh7IGFtZW5pdGllc0RhdGEsIGhvdGVsRGlzcGxheU5hbWUgfSkgPT4ge1xuICBjb25zdCB7IHRhZ3MsIHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gYW1lbml0aWVzRGF0YTtcbiAgY29uc3QgY29sbGFwc2VkQ29udGVudCA9IFtdLCBleHBhbmRlZENvbnRlbnQgPSBbXTtcbiAgbGV0IHRlbXBDaGVja0xpc3QgPSBbXTtcbiAgaWYoIXRhZ3MubGVuZ3RoICYmICFkZXNjcmlwdGlvbil7XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH07XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm0wIG1iMjQgZndiIGYxNlwiPnt0aXRsZSB8fCAnRmFjaWxpdGllcyd9e2hvdGVsRGlzcGxheU5hbWUgPyBgIGF0ICR7aG90ZWxEaXNwbGF5TmFtZX1gIDogbnVsbH08L2gyPlxuICAgICAgPEdBbWVuaXRpZXNDb250YWluZXJVbCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0ZW1wQ2hlY2tMaXN0ID0gaW5kZXggPiA1ID8gZXhwYW5kZWRDb250ZW50IDogY29sbGFwc2VkQ29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSB0YWcua2V5ID9cbiAgICAgICAgICAgICAgSWNvbnNbY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRhZy5rZXkucmVwbGFjZSgvW1xccy1fXS9nLCAnJykpXSA/XG4gICAgICAgICAgICAgICAgSWNvbnNbY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRhZy5rZXkucmVwbGFjZSgvW1xccy1fXS9nLCAnJykpXSA6XG4gICAgICAgICAgICAgICAgSWNvbnMuRGVmYXVsdEljb24gOiBJY29ucy5EZWZhdWx0SWNvbjtcbiAgICAgICAgICAgIHRlbXBDaGVja0xpc3QucHVzaChcbiAgICAgICAgICAgICAgPGxpIGtleT17dGFnLmlkfSBjbGFzc05hbWU9XCJwcjggbWIxNSBpYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxHSWNvblNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIGlibG9jayBtcjhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25Db21wb25lbnQvPlxuICAgICAgICAgICAgICAgICAgPC9HSWNvblNwYW4+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4RnVsbCBmMTRwIG0wXCI+e3RhZy50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8U2hvd01vcmVcbiAgICAgICAgICB3cmFwVGV4dD17Y29sbGFwc2VkQ29udGVudH1cbiAgICAgICAgICBtb3JlVGV4dD17ZXhwYW5kZWRDb250ZW50fVxuICAgICAgICAgIHNob3dNb3JlVGV4dD1cIlZpZXcgQWxsXCJcbiAgICAgICAgICBzaG93TGVzc1RleHQ9XCJWaWV3IExlc3NcIlxuICAgICAgICAvPlxuICAgICAgPC9HQW1lbml0aWVzQ29udGFpbmVyVWw+XG5cbiAgICAgIHtcbiAgICAgICAgZGVzY3JpcHRpb24gP1xuICAgICAgICAgIDxSZWFkTW9yZUJ5SGVpZ2h0XG4gICAgICAgICAgICBoZWFkaW5nPXthbWVuaXRpZXNEYXRhLnRpdGxlfVxuICAgICAgICAgICAgbWF4SGVpZ2h0PXs2NH1cbiAgICAgICAgICAgIGNvbnRlbnQ9e2FtZW5pdGllc0RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBzaG93VGl0bGU9e2ZhbHNlfVxuICAgICAgICAgIC8+IDogbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW1lbml0aWVzO1xuXG5BbWVuaXRpZXMucHJvcFR5cGVzID0ge1xuICBhbWVuaXRpZXNEYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGhvdGVsRGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgY2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIgfSBmcm9tICdoZWxwZXJzL3BhcnNlcnMnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnbW9kdWxlcy9zaGFyZWQvRm9ybU9uZUNUQSc7XG5cbmNvbnN0IEdDb3ZlclBvcHVwRm9ybSA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzc2MHB4Jyxcbn0pO1xuXG5jb25zdCBDVEEgPSAoeyBkZXN0aW5hdGlvbiwgaG90ZWxJZCwgdHlwZSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgIDxGb3JtT25lQ1RBXG4gICAgICAgIHJ0UHJvcHM9e3tcbiAgICAgICAgICB0b19sb2M6IGRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhZ2U6ICdIb3RlbCBEZXRhaWwgUGFnZScsXG4gICAgICAgICAgc2VjdGlvbjogJ0hvdGVsJyxcbiAgICAgICAgICBjdGE6ICdHZXQgUXVvdGVzJyxcbiAgICAgICAgICBvYmplY3Q6IGBQYWNrYWdlLyR7aG90ZWxJZH1gLFxuICAgICAgICB9fVxuICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHt9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsIHBsOCBwcjhcIj48ZGl2IGNsYXNzTmFtZT1cIndhdmVcIi8+R2V0IFF1b3RlcyBGb3IgVGhpcyB7dHlwZX08L2Rpdj5cbiAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPEZvcm1PbmVDVEFcbiAgICAgICAgcnRQcm9wcz17e1xuICAgICAgICAgIHRvX2xvYzogZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFnZTogJ0hvdGVsIERldGFpbCBQYWdlJyxcbiAgICAgICAgICBzZWN0aW9uOiAnSG90ZWwnLFxuICAgICAgICAgIGN0YTogJ0Jvb2sgSG9saWRheSBQYWNrYWdlJyxcbiAgICAgICAgICBvYmplY3Q6IGBQYWNrYWdlLyR7aG90ZWxJZH1gLFxuICAgICAgICB9fVxuICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHt9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1wcmktbGFyZ2Ugd2Z1bGwgcGw4IHByOFwiPjxkaXYgY2xhc3NOYW1lPVwid2F2ZVwiLz5Cb29rIEhvbGlkYXkgUGFja2FnZSBmb3Ige2NhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKGRlc3RpbmF0aW9uKX08L2Rpdj5cbiAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5DVEEucHJvcFR5cGVzID0ge1xuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBob3RlbElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ1RBO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCBIaWdobGlnaHRUYWJzIGZyb20gJ21vZHVsZXMvc2hhcmVkL0hpZ2hsaWdodFRhYnMnO1xuaW1wb3J0IFJlYWRNb3JlQnlIZWlnaHQgZnJvbSAnLi4vc2hhcmVkL1JlYWRNb3JlQnlIZWlnaHQnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5jb25zdCBHRGluaW5nQ3VzaW5lRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMzYwcHgnLFxuICBoZWlnaHQ6ICcyMjBweCcsXG4gICcmIGltZyc6IHtcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICB9LFxufSk7XG5cbmNvbnN0IFNsaWRlckl0ZW0gPSAoeyBzcmMsIGlrU3JjLCBhbHQgfSkgPT4gKFxuICA8R0RpbmluZ0N1c2luZURpdiBjbGFzc05hbWU9XCJvdmVyZmxvd2ggc2JjNVwiPlxuICAgIDxJbWcgc3JjPXtzcmN9IGlrU3JjPXtpa1NyY30gYWx0PXthbHR9IHdpZHRoPXszMjB9IGhlaWdodD17MjIwfSAvPlxuICA8L0dEaW5pbmdDdXNpbmVEaXY+XG4pO1xuXG5TbGlkZXJJdGVtLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlrU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgRGluaW5nQ3Vpc2luZSA9ICh7IGN1aXNpbmUsIGhvdGVsRGlzcGxheU5hbWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJtMCBtYjE1IGZ3YiBmMTZcIj5EaW5pbmcgJiBDdWlzaW5le2hvdGVsRGlzcGxheU5hbWUgPyBgIGF0ICR7aG90ZWxEaXNwbGF5TmFtZX1gIDogbnVsbH08L2gyPlxuICAgIHtcbiAgICAgIGN1aXNpbmUucGljdHVyZXMgP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjQgc3dpcGVyLWZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICBpZD1cIkRpbmluZ0N1c2luZVNsaWRlclwiXG4gICAgICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxNX1cbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMzMwLCBoZWlnaHQ6IDIyMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3Vpc2luZS5waWN0dXJlcy5tYXAocGljdHVyZSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtwaWN0dXJlLmlkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyQ3VzdG9tV2lkdGggb3ZlcmZsb3doIHJhZGl1czJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IFwiMzAwcHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTbGlkZXJJdGVtIHNyYz17cGljdHVyZS51cmwubW9iaWxlfSBpa1NyYz17cGljdHVyZS51cmwuaW1hZ2VraXRVcmx9IGFsdD17cGljdHVyZS5hbHRUZXh0fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgfVxuICAgIHtcbiAgICAgIGN1aXNpbmUuZGVzY3JpcHRpb24gP1xuICAgICAgICA8UmVhZE1vcmVCeUhlaWdodFxuICAgICAgICAgIGhlYWRpbmc9e2N1aXNpbmUudGl0bGV9XG4gICAgICAgICAgbWF4SGVpZ2h0PXs2NH1cbiAgICAgICAgICBjb250ZW50PXtjdWlzaW5lLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHNob3dUaXRsZT17ZmFsc2V9XG4gICAgICAgIC8+IDogbnVsbFxuICAgIH1cbiAgICB7Y3Vpc2luZS50YWdzID8gPEhpZ2hsaWdodFRhYnMgdGFnTGlzdD17Y3Vpc2luZS50YWdzfSAvPiA6IG51bGx9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGluaW5nQ3Vpc2luZTtcblxuRGluaW5nQ3Vpc2luZS5wcm9wVHlwZXMgPSB7XG4gIGN1aXNpbmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaG90ZWxEaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG90ZWxDb250YWN0cy5jbS5zY3NzJztcblxuaW1wb3J0IHsgQ2FsbFVzLCBFbnZlbG9wZSwgSW50ZXJuYXRpb25hbEljb25CbGFjayB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgSG90ZWxDb250YWN0cyA9XG4gICh7IGNvbnRhY3RJbmZvIH0pID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBtYjE1IGYxNiBmd2JcIj5Db250YWN0PC9wPlxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udGFjdEluZm8ucGhvbmUgP1xuICAgICAgICAgICAgICA8YSBocmVmPXtgdGVsOiB7Y29udGFjdEluZm8ucGhvbmV9YH0gY2xhc3NOYW1lPVwibTAgZjE0IG0wIG1iOCBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5Q2VudGVyIGFsaWduQ2VudGVyIHJlbGF0aXZlICR7c3R5bGVzLmljb259YH0+PENhbGxVcyAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdEluZm8ucGhvbmV9XG4gICAgICAgICAgICAgICAge2NvbnRhY3RJbmZvLnBob25lICYmIGNvbnRhY3RJbmZvLnNlY29uZGFyeVBob25lcyAmJiBjb250YWN0SW5mby5zZWNvbmRhcnlQaG9uZXMubGVuZ3RoID8gJ3wnIDogJyd9XG4gICAgICAgICAgICAgICAge2NvbnRhY3RJbmZvLnNlY29uZGFyeVBob25lcyAmJiBjb250YWN0SW5mby5zZWNvbmRhcnlQaG9uZXMubGVuZ3RoID8gY29udGFjdEluZm8uc2Vjb25kYXJ5UGhvbmVzIDogJyd9XG4gICAgICAgICAgICAgIDwvYT4gOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhY3RJbmZvLmVtYWlsID9cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibTAgZjE0IG0wIG1iOCBmbGV4IGFsaWduQ2VudGVyXCIgaHJlZj17YG1haWxUbzoke2NvbnRhY3RJbmZvLmVtYWlsfWB9ID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnlDZW50ZXIgYWxpZ25DZW50ZXIgcmVsYXRpdmUgJHtzdHlsZXMuaWNvbn1gfT48RW52ZWxvcGUgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgeyBjb250YWN0SW5mby5lbWFpbCB9XG4gICAgICAgICAgICAgIDwvYT4gOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRhY3RJbmZvLndlYnNpdGUgP1xuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJtMCBmMTQgbTAgZmxleCBhbGlnbkNlbnRlclwiIHJlbD1cIm5vZm9sbG93XCIgdG89e2NvbnRhY3RJbmZvLndlYnNpdGV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeUNlbnRlciBhbGlnbkNlbnRlciByZWxhdGl2ZSAke3N0eWxlcy5pY29ufWB9PjxJbnRlcm5hdGlvbmFsSWNvbkJsYWNrIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsbGlwc2lzXCI+eyBjb250YWN0SW5mby53ZWJzaXRlIH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz4gOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgKTtcblxuSG90ZWxDb250YWN0cy5wcm9wVHlwZXMgPSB7XG4gIGNvbnRhY3RJbmZvOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5Ib3RlbENvbnRhY3RzLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGFjdEluZm86IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3RlbENvbnRhY3RzO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE92ZXJBbGxSYXRpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvT3ZlckFsbFJhdGluZyc7XG5pbXBvcnQgUmF0aW5nU3RhciBmcm9tICdtb2R1bGVzL3NoYXJlZC9SYXRpbmdTdGFyJztcbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvUHJvcGVydHlUeXBlJztcbmltcG9ydCB7IGNhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCBUVFJlY29tbWVuZGVkIGZyb20gJ21vZHVsZXMvc2hhcmVkL1RUUmVjb21tZW5kZWQnO1xuaW1wb3J0IEhvdGVsTG9jYXRpb25NYXAgZnJvbSAnLi9Ib3RlbExvY2F0aW9uTWFwJztcblxuY29uc3QgSG90ZWxEZXRhaWxIZWFkZXIgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLCBzdGFyUmF0aW5nLCBob3RlbE5hbWUsIGhvdGVsRGlzcGxheU5hbWUsIHVzZXJSYXRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZGdldCwgbHV4dXJ5LCByZWNvbW1lbmRlZCwgbWFwLCBwcm94aW1pdHksIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2VCZXR3ZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIG1yMTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYjggYWxpZ25DZW50ZXIgZmxleFdyYXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm0wIGYxNiBmd2IgbXI4IGlibG9ja1wiPlxuICAgICAgICAgIHsgaG90ZWxEaXNwbGF5TmFtZX1cbiAgICAgICAgICB7IGRlc3RpbmF0aW9uID8gYCwgJHsgY2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIoZGVzdGluYXRpb24pIH1gIDogJyd9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHtcbiAgICAgICAgICBzdGFyUmF0aW5nID4gMCA/IDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxSYXRpbmdTdGFyIHJhdGluZz17c3RhclJhdGluZ30gaXNFbXB0eVN0YXJzSGlkZGVuPXt0cnVlfSAvPlxuICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyAoYnVkZ2V0IHx8IGx1eHVyeSkgPyA8ZGl2IGNsYXNzTmFtZT1cIm1iNVwiPjxQcm9wZXJ0eVR5cGUgYnVkZ2V0PXtidWRnZXR9IGx1eHVyeT17bHV4dXJ5fSAvPjwvZGl2PiA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgZmxleFdyYXBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIG0wIG1yMTUgZmxleCBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgIHthZGRyZXNzLmZ1bGx9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEhvdGVsTG9jYXRpb25NYXBcbiAgICAgICAgICBob3RlbD17eyBuYW1lOiBob3RlbE5hbWUsIHN0YXJSYXRpbmc6IHN0YXJSYXRpbmcsIGFkZHJlc3M6IGFkZHJlc3MsIG1hcDogbWFwLCB1c2VyUmF0aW5nOiB1c2VyUmF0aW5nIH19XG4gICAgICAgICAgdGl0bGU9XCJMb2NhdGlvblwiXG4gICAgICAgICAgcHJveGltaXR5PXtwcm94aW1pdHl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHVzZXJSYXRpbmcucmF0aW5nID4gMCA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMTVcIj5cbiAgICAgICAgICAgICAgPE92ZXJBbGxSYXRpbmcgY3VzdG9tU3R5bGVSYXRpbmc9e3sgZm9udFNpemU6ICcxNHB4JywgZm9udFdlaWdodDogJzQwMCcgfX0gb3ZlcmFsbFJhdGluZz17eyB0ZXh0OiB1c2VyUmF0aW5nLnRleHQsIHJhdGluZzogdXNlclJhdGluZy5yYXRpbmcgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7IHJlY29tbWVuZGVkID8gPGRpdiBjbGFzc05hbWU9XCJtcjAgZnJpZ2h0XCI+PFRUUmVjb21tZW5kZWQgLz48L2Rpdj4gOiBudWxsIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG5Ib3RlbERldGFpbEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGFkZHJlc3M6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN0YXJSYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhvdGVsTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG90ZWxEaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlclJhdGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgYnVkZ2V0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbHV4dXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVjb21tZW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWFwOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcm94aW1pdHk6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbkhvdGVsRGV0YWlsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWRkcmVzczoge30sXG4gIHN0YXJSYXRpbmc6IDAsXG4gIHVzZXJSYXRpbmc6IHt9LFxuICBob3RlbE5hbWU6ICcnLFxuICBob3RlbERpc3BsYXlOYW1lOiAnJyxcbiAgYnVkZ2V0OiBmYWxzZSxcbiAgbHV4dXJ5OiBmYWxzZSxcbiAgcmVjb21tZW5kZWQ6IGZhbHNlLFxuICBkZXN0aW5hdGlvbjogJycsXG4gIG1hcDoge30sXG4gIHByb3hpbWl0eToge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsRGV0YWlsSGVhZGVyO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgR1VsID0gZ2xhbW9yb3VzLmRpdih7XG4gICdvdmVyZmxvd1gnOiAnc2Nyb2xsJyxcbiAgYm94U2hhZG93OiAnMHB4IDNweCA2cHggI2NjYycsXG4gICcmIHVsIGxpJzoge1xuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICcmIGEnOiB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBjb250ZW50OiAnXFwnIFxcJycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206ICcwJyxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWZlZmVmJyxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOTY4OCcsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5Njg4J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBIb3RlbERldGFpbE5hdiA9ICh7IG9wdGlvbnMsIExpbmssIGRlc3RpbmF0aW9uLCBob3RlbElkLCB0eXBlIH0pID0+IChcbiAgPEdVbCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vQmVmb3JlQWZ0ZXIgZmxleEZ1bGwgZmxleCBhbGlnbkNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcHI4XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyIG0wIHAwXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9ucy5tYXAoKG5ld0xpLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZjE0IGZ3NyBwZmMzIGJsb2NrIHAyNCBwdDE1IHBiMTVcIlxuICAgICAgICAgICAgICAgICAgICAgIHRvPXtuZXdMaS5zZWN0aW9uX25hbWV9IHNweSBzbW9vdGggaXNEeW5hbWljIGR1cmF0aW9uPXs1MDB9IG9mZnNldD17LTYwfT5cbiAgICAgICAgICAgICAgICAgIHtuZXdMaS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IHBsOCB0ZXh0LXJpZ2h0IG5hdi1jdGFcIj5cbiAgICAgICAgey8qPE1vZGFsKi99XG4gICAgICAgICAgey8qdHJpZ2dlcj17PGJ1dHRvbiovfVxuICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmkgcmFkaXVzMiBmMTJcIiovfVxuICAgICAgICAgICAgey8qb25DbGljaz17ICgpID0+IHdpbmRvdy5pc0xlYWRQb3B1cE9wZW5lZCA9IHRydWUgfSovfVxuICAgICAgICAgIHsvKj4qL31cbiAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cIndhdmVcIiAvPkdldCBRdW90ZXMgRm9yIFRoaXMge3R5cGV9PC9idXR0b24+fSovfVxuICAgICAgICAgIHsvKm9uUmVxdWVzdENsb3NlQ3VzdG9tPXsgKCkgPT4gd2luZG93LmlzTGVhZFBvcHVwT3BlbmVkID0gZmFsc2UgfT4qL31cbiAgICAgICAgICB7Lyo8R0NvdmVyUG9wdXBGb3JtPiovfVxuICAgICAgICAgICAgey8qPEhvbWVMZWFkRm9ybSovfVxuICAgICAgICAgICAgICB7LypkZXN0aW5hdGlvbnM9e1t7bmFtZTogY2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIoZGVzdGluYXRpb24pfV19Ki99XG4gICAgICAgICAgICAgIHsvKmFuYWx5dGljc0luZm89e3sqL31cbiAgICAgICAgICAgICAgICB7LypwYWNrYWdlSWQ6IGhvdGVsSWQsKi99XG4gICAgICAgICAgICAgICAgey8qb2JqZWN0OiBgSG90ZWwvJHtob3RlbElkfWAsKi99XG4gICAgICAgICAgICAgICAgey8qcGFnZTogJ0hvdGVsIERldGFpbCBQYWdlJyovfVxuICAgICAgICAgICAgICB7Lyp9fSAvPiovfVxuICAgICAgICAgIHsvKjwvR0NvdmVyUG9wdXBGb3JtPiovfVxuICAgICAgICB7Lyo8L01vZGFsPiovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvR1VsPlxuKTtcblxuSG90ZWxEZXRhaWxOYXYucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgTGluazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVzdGluYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaG90ZWxJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsRGV0YWlsTmF2O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBNYXBQb3B1cCBmcm9tICcuLi9ob3RlbC9NYXBQb3B1cCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5cbmNvbnN0IEdNYXBEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59KTtcblxuY29uc3QgR1ZpZXdNYXBBID0gZ2xhbW9yb3VzLmEoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5Njg4JyxcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbGluZUhlaWdodDogJzE0cHgnLFxuICBwYWRkaW5nOiAnOXB4IDE1cHgnLFxuICBjb2xvcjogJyNmZmYnLFxuICAnJjpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5Njg4JyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICB9XG59KTtcblxuY29uc3QgR01hcERhdGFEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcxMDAlJyxcbn0pO1xuXG5jb25zdCBIb3RlbExvY2F0aW9uTWFwID0gKHsgdGl0bGUsIHByb3hpbWl0eSwgaG90ZWwgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImlibG9ja1wiPlxuICAgIDxHTWFwRGl2IGNsYXNzTmFtZT1cInJhZGl1czIgb3ZlcmZsb3doIHJlbGF0aXZlXCI+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ZjMSBmMTIgZnc3XCI+VmlldyBNYXA8L2E+XG4gICAgICAgIH1cbiAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICA+XG4gICAgICAgIDxHTWFwRGF0YURpdiBjbGFzc05hbWU9XCJmbGV4IHdmdWxsIGhmdWxsIGZsZXhGdWxsXCI+XG4gICAgICAgICAgPE1hcFBvcHVwIGhvdGVsPXtob3RlbH0gLz5cbiAgICAgICAgPC9HTWFwRGF0YURpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9HTWFwRGl2PlxuICA8L2Rpdj5cbik7XG5cbkhvdGVsTG9jYXRpb25NYXAucHJvcFR5cGVzID0ge1xuICBwcm94aW1pdHk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaG90ZWw6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxMb2NhdGlvbk1hcDtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBPdmVyQWxsUmF0aW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL092ZXJBbGxSYXRpbmcnO1xuaW1wb3J0IEV4cGVydHNSZXZpZXcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvRXhwZXJ0c1Jldmlldyc7XG5pbXBvcnQgSGVhZGluZyBmcm9tIFwibW9kdWxlcy9zaGFyZWQvSGVhZGluZ1wiO1xuXG5jbGFzcyBIb3RlbFJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9mZnNldDogMlxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt0ZXN0aW1vbmlhbHMsIHVzZXJSYXRpbmcsIHRlc3RpbW9uaWFsQ2hhbmdlSGFuZGxlciwgaG90ZWxEaXNwbGF5TmFtZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHt0b3RhbEVudHJpZXMsIHRlc3RpbW9uaWFsTGlzdCwgY3VycmVudFBhZ2UsIGhhc01vcmV9ID0gdGVzdGltb25pYWxzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBtYjE1IHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxIZWFkaW5nIHRpdGxlPXt0ZXN0aW1vbmlhbHMudGl0bGV9IGhlYWRpbmc9e3Rlc3RpbW9uaWFscy5oZWFkaW5nfSBkYXRhPXt7Zm9ySGVhZGluZzpob3RlbERpc3BsYXlOYW1lfX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIGhpZGVcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXNlclJhdGluZyAmJiB1c2VyUmF0aW5nLmxlbmd0aCA/IDxPdmVyQWxsUmF0aW5nIGN1c3RvbVN0eWxlUmF0aW5nPXt7Zm9udFNpemU6ICcxNnB4JywgZm9udFdlaWdodDogJzQwMCd9fSBpc0xhcmdlIGlzQWxpZ25lZExlZnQgb3ZlcmFsbFJhdGluZz17dXNlclJhdGluZ30vPiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0aW1vbmlhbExpc3QgJiYgdGVzdGltb25pYWxMaXN0Lmxlbmd0aCA/IDxFeHBlcnRzUmV2aWV3IGV4cGVydFJldmlld3M9e3Rlc3RpbW9uaWFsTGlzdFswXX0gLz4gOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib3RlbFJldmlldy5wcm9wVHlwZXMgPSB7XG4gIHRlc3RpbW9uaWFsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyUmF0aW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0ZXN0aW1vbmlhbENoYW5nZUhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhvdGVsRGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkhvdGVsUmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlclJhdGluZzoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsUmV2aWV3O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgRGVmYXVsdEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQge0Rvd25BcnJvd30gZnJvbSBcImhlbHBlcnMvSWNvbi9JY29uXCI7XG5cbmNvbnN0IEdOZWFyYnlVbCA9IGdsYW1vcm91cy51bCh7XG4gICcmIGxpJzoge1xuICAgIHBhZGRpbmc6ICc2cHggMTVweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VmZWZlZicsXG4gIH0sXG4gIC8vICcmIGxpOm50aC1jaGlsZCgybi0xKSc6IHtcbiAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWZlZmVmJyxcbiAgLy8gfVxufSk7XG5cbmNvbnN0IEdMYW5kbWFya1R5cGVTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICBmb250U2l6ZTogJzEwcHgnLFxuICBoZWlnaHQ6ICcxNnB4JyxcbiAgcGFkZGluZzogJzJweCA4cHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgI2Q0ZDRkNCcsXG59KTtcblxuY29uc3QgR0Rvd25BcnJvd1NwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMTRweCcsXG4gIGhlaWdodDogJzZweCcsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzE0cHgnLFxuICAgIGhlaWdodDogJzZweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIH1cbn0pO1xuXG5jb25zdCBHTmVhckJ5SXRlbXNEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgaW5wdXQnOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgICcmICsgbGFiZWwnOiB7XG4gICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2YyZjJmMicsXG4gICAgfSxcbiAgICAnJiArIGxhYmVsICsgLm5lYXJieUl0ZW1EYXRhJzoge1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgfSxcbiAgJyYgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsICsgLm5lYXJieUl0ZW1EYXRhJzoge1xuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gIH0sXG4gICcmIGlucHV0OmNoZWNrZWQgKyBsYWJlbCAuYXJyb3ctZG93bic6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXG4gIH1cbn0pO1xuXG5jb25zdCBMYW5kbWFya0xpc3QgPSAoeyBuZWFyQnlJdGVtIH0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cInJhZGl1czIgb3ZlcmZsb3doIGZsZXggc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyXCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgZmxleCBhbGlnbkNlbnRlciBmMTRwXCI+XG4gICAgICB7bmVhckJ5SXRlbS5oZWFkaW5nfVxuICAgICAge1xuICAgICAgICBuZWFyQnlJdGVtLmxhYmVscyAmJiBuZWFyQnlJdGVtLmxhYmVscy5sZW5ndGggP1xuICAgICAgICAgIG5lYXJCeUl0ZW0ubGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PlxuICAgICAgICAgICAgPEdMYW5kbWFya1R5cGVTcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJhZGl1czIwIGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciBtbDhcIj5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9HTGFuZG1hcmtUeXBlU3Bhbj5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgfVxuICAgIDwvc3Bhbj5cbiAgICB7XG4gICAgICBuZWFyQnlJdGVtLmRpc3RhbmNlID9cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjE0cFwiPntgJHtuZWFyQnlJdGVtLmRpc3RhbmNlLnZhbHVlfSAke25lYXJCeUl0ZW0uZGlzdGFuY2UudW5pdH1gfTwvc3Bhbj4gOiBudWxsXG4gICAgfVxuICA8L2xpPlxuKTtcblxuTGFuZG1hcmtMaXN0LnByb3BUeXBlcyA9IHtcbiAgbmVhckJ5SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBOZWFyYnlDYXJkSXRlbSA9ICh7IGhlYWRpbmcsIG5lYXJCeUxpc3QgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxHTmVhckJ5SXRlbXNEaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e2hlYWRpbmd9IG5hbWU9XCJuZWFyYnlpdGVtc1wiIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17aGVhZGluZ30gY2xhc3NOYW1lPVwiZmxleCBwMTUgYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJtMCBmdzQgZjE0IGZsZXhGdWxsXCI+e2hlYWRpbmd9PC9oNj5cbiAgICAgICAgPEdEb3duQXJyb3dTcGFuIGNsYXNzTmFtZT0ncmVsYXRpdmUgYXJyb3ctZG93bic+XG4gICAgICAgICAgPERvd25BcnJvdyAvPlxuICAgICAgICAgIDwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZWFyYnlJdGVtRGF0YVwiPlxuICAgICAgICA8R05lYXJieVVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5lYXJCeUxpc3QubWFwKChuZWFyQnlJdGVtLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPExhbmRtYXJrTGlzdCBrZXk9e2luZGV4fSBuZWFyQnlJdGVtPXtuZWFyQnlJdGVtfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9HTmVhcmJ5VWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dOZWFyQnlJdGVtc0Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5OZWFyYnlDYXJkSXRlbS5wcm9wVHlwZXMgPSB7XG4gIG5lYXJCeUxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IE5lYXJieUNhcmQgPSAoeyBuZWFyYnlUeXBlTGlzdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAge1xuICAgICAgICBuZWFyYnlUeXBlTGlzdC5tYXAoKG5lYXJCeVR5cGUsIGluZGV4KSA9PlxuICAgICAgICAgIG5lYXJCeVR5cGUub3B0aW9ucy5sZW5ndGggPyA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPE5lYXJieUNhcmRJdGVtIGtleT17aW5kZXh9IGhlYWRpbmc9e25lYXJCeVR5cGUuaGVhZGluZ30gbmVhckJ5TGlzdD17bmVhckJ5VHlwZS5vcHRpb25zfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOZWFyYnlDYXJkO1xuXG5OZWFyYnlDYXJkLnByb3BUeXBlcyA9IHtcbiAgbmVhcmJ5VHlwZUxpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOZWFyYnlDYXJkIGZyb20gJy4vTmVhcmJ5Q2FyZCc7XG5pbXBvcnQgeyBEZWZhdWx0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgTmVhcmJ5ID0gKHsgbmVhcmJ5VHlwZUxpc3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJtMCBtYjggZndiIGYxNiBwMTVcIj5OZWFyYnk8L2gyPlxuICAgIDxOZWFyYnlDYXJkIG5lYXJieVR5cGVMaXN0PXtuZWFyYnlUeXBlTGlzdH0gLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOZWFyYnk7XG5cbk5lYXJieS5wcm9wVHlwZXMgPSB7XG4gIG5lYXJieVR5cGVMaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjdXJyZW5jeVRvU3ltYm9sLCBudW1iZXJXaXRoQ29tbWFzIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCBDb21tb25Ecm9wZG93biBmcm9tICdtb2R1bGVzL3NoYXJlZC9Db21tb25Ecm9wZG93bic7XG5pbXBvcnQgUHJpY2VWYWwgZnJvbSAnLi9QcmljZVZhbCc7XG5cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgR0Fycm93RG93blNwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzZweCcsXG4gIH1cbn0pO1xuXG5pbXBvcnQgeyBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IGdldERlZmF1bHRNb250aCA9IChtb250aCwgbW9udGhzKSA9PiB7XG4gIGNvbnN0IG1vbnRoVmFsID0gbW9udGhzLmZpbHRlcihtb250aE9iaiA9PiBtb250aE9iai52YWx1ZSA9PT0gcGFyc2VJbnQobW9udGgpKTtcbiAgcmV0dXJuIG1vbnRoVmFsID8gbW9udGhWYWxbMF0gOiBudWxsO1xufTtcblxuY29uc3QgUHJpY2VSYW5nZSA9ICh7IGlzU21hbGwsIHByaWNlUmFuZ2UsIG1vbnRocywgdXBkYXRlUHJpY2UsIG1vbnRoLCBwcmljZVRpdGxlIH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy03IHBsMFwiPlxuICAgICAgPFByaWNlVmFsIHByaWNlVGl0bGU9e3ByaWNlVGl0bGV9IHByaWNlUmFuZ2U9e3ByaWNlUmFuZ2V9IGlzU21hbGw9e2ZhbHNlfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTUgcDBcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBtMCBwZmM0XCI+U2VsZWN0IE1vbnRoPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1kcm9wZG93bi1ib3ggaW5wdXQtZHJvcGRvd24tYm94LXNtYWxsIG10NCBtYjggYXRfcHJpY2Vtb250aFwiPlxuICAgICAgICAgIDxHQXJyb3dEb3duU3BhbiBjbGFzc05hbWU9XCJyMTAgYmxvY2sgd2F1dG8gbGF1dG8gaW5wdXQtaWNvbiBhYnNvbHV0ZS1jZW50ZXItdiBhcnItaWNvblwiPlxuICAgICAgICAgICAgPERvd25BcnJvdyAvPlxuICAgICAgICAgIDwvR0Fycm93RG93blNwYW4+XG4gICAgICAgIHtcbiAgICAgICAgICBtb250aHMubGVuZ3RoID9cbiAgICAgICAgICAgIDxDb21tb25Ecm9wZG93blxuICAgICAgICAgICAgICBvcHRpb25zPXttb250aHN9XG4gICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17dXBkYXRlUHJpY2V9XG4gICAgICAgICAgICAgIGRlZmF1bHRPcHRpb249e2dldERlZmF1bHRNb250aChtb250aCwgbW9udGhzKX1cbiAgICAgICAgICAgIC8+IDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5QcmljZVJhbmdlLnByb3BUeXBlcyA9IHtcbiAgaXNTbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIG1vbnRoczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHByaWNlUmFuZ2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXBkYXRlUHJpY2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1vbnRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXJcbiAgXSkuaXNSZXF1aXJlZCxcbiAgcHJpY2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuUHJpY2VSYW5nZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzU21hbGw6IGZhbHNlLFxuICBwcmljZVRpdGxlOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VSYW5nZTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGN1cnJlbmN5VG9TeW1ib2wsIG51bWJlcldpdGhDb21tYXMgfSBmcm9tICdoZWxwZXJzL3BhcnNlcnMnO1xuXG5jb25zdCBQcmljZVZhbCA9ICh7IGlzU21hbGwsIHByaWNlUmFuZ2UsIHByaWNlVGl0bGUgfSkgPT4ge1xuICBjb25zdCBjdXJyZW5jeVN5bWJvbCA9IGN1cnJlbmN5VG9TeW1ib2wocHJpY2VSYW5nZS5jdXJyZW5jeSB8fCAnUnVwZWUnKTtcbiAgY29uc3QgcHJpY2VGcm9tID0gcHJpY2VSYW5nZS5wcmljZUZyb20gPyBudW1iZXJXaXRoQ29tbWFzKHByaWNlUmFuZ2UucHJpY2VGcm9tKSA6ICcnO1xuICBjb25zdCBwcmljZVRvID0gcHJpY2VSYW5nZS5wcmljZVRvID8gbnVtYmVyV2l0aENvbW1hcyhwcmljZVJhbmdlLnByaWNlVG8pIDogJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg2IHN0eWxlPXsgaXNTbWFsbCA/IHtmb250U2l6ZTogJzEycHgnfSA6IHtmb250U2l6ZTogJzE2cHgnLCBtYXJnaW5Cb3R0b206ICc4cHgnfX0gY2xhc3NOYW1lPVwiZnc0IHBmYzRcIj57YCR7cHJpY2VUaXRsZX1gIHx8IGBQcmljZSBSYW5nZWB9PC9oNj5cbiAgICAgIDxoNSBzdHlsZT17eyBmb250U2l6ZTogaXNTbWFsbCA/ICcxNnB4JzogJzE2cHgnIH19IGNsYXNzTmFtZT1cInNmYzMgbTAgZnc3IGYyMFwiPlxuICAgICAgICB7XG4gICAgICAgICAgcHJpY2VSYW5nZS5wcmljZUZyb20gJiYgcHJpY2VSYW5nZS5wcmljZVRvXG4gICAgICAgICAgICA/IGAkeyBjdXJyZW5jeVN5bWJvbCB9ICR7IHByaWNlRnJvbX0gLSAkeyBjdXJyZW5jeVN5bWJvbCB9ICR7IHByaWNlVG8gfWBcbiAgICAgICAgICAgIDogcHJpY2VSYW5nZS5wcmljZUZyb21cbiAgICAgICAgICAgID8gYEFib3ZlICR7IGN1cnJlbmN5U3ltYm9sIH0gJHsgcHJpY2VGcm9tfWBcbiAgICAgICAgICAgIDogYEJlbG93ICR7IGN1cnJlbmN5U3ltYm9sIH0gJHsgcHJpY2VUbyB9YFxuICAgICAgICB9XG4gICAgICA8L2g1PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJpY2VWYWwucHJvcFR5cGVzID0ge1xuICBpc1NtYWxsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBwcmljZVJhbmdlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHByaWNlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblByaWNlVmFsLmRlZmF1dFByb3BzID0ge1xuICBwcmljZVRpdGxlOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VWYWw7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBIb3RlbEVtcHR5U3RhdGUgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5pbXBvcnQgT3ZlckFsbFJhdGluZyBmcm9tICdtb2R1bGVzL3NoYXJlZC9PdmVyQWxsUmF0aW5nJztcbmltcG9ydCBSYXRpbmdTdGFyIGZyb20gJ21vZHVsZXMvc2hhcmVkL1JhdGluZ1N0YXInO1xuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9Qcm9wZXJ0eVR5cGUnO1xuaW1wb3J0IFRUUmVjb21tZW5kZWQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvVFRSZWNvbW1lbmRlZCc7XG5pbXBvcnQgUHJpY2VWYWwgZnJvbSAnLi4vUHJpY2VWYWwnO1xuaW1wb3J0IFRvb2xUaXAgZnJvbSAnbW9kdWxlcy9zaGFyZWQvVG9vbFRpcCc7XG5cbmNvbnN0IEdDYXJkSW1hZ2VEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnMjAwcHgnLFxufSk7XG5cbmNvbnN0IEdDYXJkRGF0YURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBib3JkZXJUb3A6ICcwIG5vbmUnXG59KTtcblxuY29uc3QgR0NhcmRJbWdEYXRhRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzQwJScsXG4gIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC42NSkgNjUlLHJnYmEoMCwwLDAsMC42NSkgMTAwJSknLFxuICBmaWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjMDAwMDAwMDBcIiwgZW5kQ29sb3JzdHI9XCIjYTYwMDAwMDBcIixHcmFkaWVudFR5cGU9MCApJyxcbn0pO1xuXG5jb25zdCBHSG90ZWxQbGFjZWhvbGRlckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMDVweCcsXG4gICAgaGVpZ2h0OiAnNjlweCcsXG4gIH1cbn0pO1xuXG5jb25zdCBDYXJkID0gKHsgaG90ZWwsIG1vbnRoIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGltYWdlcywgdG9wUmF0ZWRMdXh1cnksIHRvcFJhdGVkQnVkZ2V0LCB1c2VyUmF0aW5nLCBkaXNwbGF5TmFtZSwgdHRSZWNvbWVuZGVkLCBzdGFyUmF0aW5nLCBhZGRyZXNzLFxuICAgIHByb3hpbWl0eSwgcHJpY2VSYW5nZVxuICB9ID0gaG90ZWw7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgPGEgaHJlZj17YCR7aG90ZWwuYmFzZVVybH0/dHJhdmVsTW9udGg9JHttb250aH1gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEdDYXJkSW1hZ2VEaXYgY2xhc3NOYW1lPVwid2Z1bGwgb3ZlcmZsb3doIHJlbGF0aXZlIHNiYzVcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgIHdpZHRoPXszMjB9IGhlaWdodD17MjAwfVxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnVybH1cbiAgICAgICAgICAgICAgICBpa1NyYz17aW1hZ2VzWzBdLmltYWdla2l0VXJsfVxuICAgICAgICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLmFsdFRleHR9IC8+IDpcbiAgICAgICAgICAgICAgPEdIb3RlbFBsYWNlaG9sZGVyRGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2JjNSB3ZnVsbCBoZnVsbCBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SG90ZWxFbXB0eVN0YXRlIC8+XG4gICAgICAgICAgICAgIDwvR0hvdGVsUGxhY2Vob2xkZXJEaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxHQ2FyZEltZ0RhdGFEaXYgY2xhc3NOYW1lPVwid2Z1bGwgYWJzb2x1dGUgbDAgYjAgcDhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXIgYWJzb2x1dGUgYjAgcDggcjAgbDBcIj5cbiAgICAgICAgICAgICAgPFByb3BlcnR5VHlwZSBidWRnZXQ9e3RvcFJhdGVkQnVkZ2V0fSBsdXh1cnk9e3RvcFJhdGVkTHV4dXJ5fSAvPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXNlclJhdGluZyA/XG4gICAgICAgICAgICAgICAgICA8T3ZlckFsbFJhdGluZyBleHRyYVN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0gb3ZlcmFsbFJhdGluZz17dXNlclJhdGluZ30gLz4gOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR0NhcmRJbWdEYXRhRGl2PlxuICAgICAgICA8L0dDYXJkSW1hZ2VEaXY+XG4gICAgICAgIDxHQ2FyZERhdGFEaXYgY2xhc3NOYW1lPVwicDE1IHBiMCBwbDAgcHIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImYxNiBmd2IgbTAgZmxleEZ1bGwgZHluYW1pY1RleHRJbmhlcml0IHBmYzNcIj57ZGlzcGxheU5hbWV9PC9oNj5cbiAgICAgICAgICAgIHt0dFJlY29tZW5kZWQgPyA8c3BhbiBjbGFzc05hbWU9XCJpYmxvY2sgdG9vbHRpcENvbW1vbiByZWxhdGl2ZSB6MlwiPlxuICAgICAgICAgICAgICAgIDxUb29sVGlwXG4gICAgICAgICAgICAgICAgICB0b29sVGlwVGV4dD0nUmVjb21tZW5kZWQgYnkgVHJhdmVsVHJpYW5nbGUnXG4gICAgICAgICAgICAgICAgICBib3hTdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUVFJlY29tbWVuZGVkIC8+XG4gICAgICAgICAgPC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJhdGluZ1N0YXIgcmF0aW5nPXtzdGFyUmF0aW5nfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZUJldHdlZW4gbXQ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yNVwiPlxuICAgICAgICAgICAgICB7YWRkcmVzcyA/IDxwIGNsYXNzTmFtZT1cIm0wIGR5bmFtaWNUZXh0SW5oZXJpdCBwZmMzIG1iNCBmMTJcIj57YWRkcmVzcy5icmllZn08L3A+IDogbnVsbH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3hpbWl0eSA/XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgZHluYW1pY1RleHRJbmhlcml0IHBmYzQgbTBcIj5cbiAgICAgICAgICAgICAgICAgICAge2Ake3Byb3hpbWl0eS5kaXN0YW5jZX0gJHtwcm94aW1pdHkudW5pdH0gZnJvbSAke3Byb3hpbWl0eS5mcm9tfSBgfVxuICAgICAgICAgICAgICAgICAgPC9wPiA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPFByaWNlVmFsIHByaWNlVGl0bGU9eydQcmljZSBSYW5nZSBwZXIgTmlnaHQnfSBpc1NtYWxsPXt0cnVlfSBwcmljZVJhbmdlPXtwcmljZVJhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR0NhcmREYXRhRGl2PlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGhvdGVsOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG1vbnRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXJcbiAgXSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5cbmNvbnN0IFNpbWlsYXJIb3RlbHMgPSAoeyBzaW1pbGFySG90ZWxzLCBtb250aCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcmVsYXRpdmVcIj5cbiAgICA8aDYgY2xhc3NOYW1lPVwibTAgbWIxNSBmMTYgZndiXCI+e3NpbWlsYXJIb3RlbHMudGl0bGV9PC9oNj5cbiAgICB7c2ltaWxhckhvdGVscy52aWV3QWxsID8gKFxuICAgICAgPGFcbiAgICAgICAgaHJlZj17c2ltaWxhckhvdGVscy52aWV3QWxsfVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBjbGFzc05hbWU9XCJmcmlnaHQgaWJsb2NrIGxpbmstc2VjIGFic29sdXRlIHIxMCB0MFwiXG4gICAgICA+XG4gICAgICAgIFZpZXcgQWxsXG4gICAgICA8L2E+XG4gICAgKSA6IG51bGx9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItZnVsbC13aWR0aFwiPlxuICAgICAgPFN3aXBlclxuICAgICAgICBpZD1cInNpbWlsYXJIb3RlbHNcIlxuICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjcwLCBoZWlnaHQ6IDI5MyB9fVxuICAgICAgPlxuICAgICAgICB7c2ltaWxhckhvdGVscy5ob3RlbHMubGVuZ3RoXG4gICAgICAgICAgPyBzaW1pbGFySG90ZWxzLmhvdGVscy5tYXAoaG90ZWwgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtob3RlbC5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgc2ltaWxhckhvdGVscy5ob3RlbHMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gXCJyYWRpdXMyIG92ZXJmbG93aCBzd2lwZXJTaW5nbGVDaGlsZFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJyYWRpdXMyIG92ZXJmbG93aCBzd2lwZXJDdXN0b21XaWR0aFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQgaG90ZWw9e2hvdGVsfSBtb250aD17bW9udGh9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L1N3aXBlcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5TaW1pbGFySG90ZWxzLnByb3BUeXBlcyA9IHtcbiAgc2ltaWxhckhvdGVsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBtb250aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyXG4gIF0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbWlsYXJIb3RlbHM7XG5cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBHU3dpcGVyQ29udGFpbmVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmIC5zbGlkZXJIb3RlbDpob3ZlciArIC50ZXN0aW1vbmlhbHNTbGlkZXInOiB7XG4gICAgb3BhY2l0eTogJzAuNycsXG4gIH0sXG4gICcmIC5zd2lwZXItc2xpZGUnOiB7XG4gICAgd2lkdGg6ICc1OHB4JyxcbiAgfSxcbiAgJyYgLnN3aXBlci1idXR0b24tbmV4dCc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICczMnB4JyxcbiAgICBoZWlnaHQ6ICczMnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMTkxLCAxOTAsIDE5MCwgMC4xMiknLFxuICAgIHpJbmRleDogMSxcbiAgICBib3hTaGFkb3c6ICcxcHggMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgcmlnaHQ6ICc1cHgnLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICMzRTNFM0UnLFxuICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGhlaWdodDogJzlweCcsXG4gICAgICBtYXJnaW5Ub3A6ICctNnB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDEzNWRlZyknLFxuICAgICAgcmlnaHQ6ICcxNHB4JyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICB3aWR0aDogJzAnLFxuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBtYXJnaW5Ub3A6ICcwJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxuICAgIH1cbiAgfSxcbiAgJyYgLnN3aXBlci1idXR0b24tcHJldic6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICczMnB4JyxcbiAgICBoZWlnaHQ6ICczMnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMTkxLCAxOTAsIDE5MCwgMC4xMiknLFxuICAgIHpJbmRleDogMSxcbiAgICBib3hTaGFkb3c6ICctMXB4IDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuICAgIGxlZnQ6ICc1cHgnLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICMzRTNFM0UnLFxuICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGhlaWdodDogJzlweCcsXG4gICAgICBtYXJnaW5Ub3A6ICctNnB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKScsXG4gICAgICBsZWZ0OiAnMTRweCcsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgd2lkdGg6ICcwJyxcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgbWFyZ2luVG9wOiAnMCcsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTM1ZGVnKScsXG4gICAgfVxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHVGh1bWJuYWlsRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnNThweCcsXG4gIGhlaWdodDogJzQ4cHgnLFxuICBtYXJnaW46ICcwJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICcmIGltZyc6IHtcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdTd2lwZXJJdGVtRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzIwMHB4JyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAnJiBpbWcnOiB7XG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBHU21hbGxTbGlkZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcyNTBweCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICAnJjpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgfSxcbiAgJyYgLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzJzoge1xuICAgIGxlZnQ6ICcxNXB4JyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgJyYgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCc6IHtcbiAgICAgIHdpZHRoOiAnN3B4JyxcbiAgICAgIGhlaWdodDogJzdweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2IyYjJiMicsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogJzEnLFxuICAgIH0sXG4gICAgJyYgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogJyNiMmIyYjInLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IEdJbWFnZUNyZWRpdHNEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsLjcpJyxcbiAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgJyYgYSc6IHtcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgfVxuICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCB7IEdTd2lwZXJDb250YWluZXJEaXYsIEdTd2lwZXJJdGVtRGl2LCBHSW1hZ2VDcmVkaXRzRGl2IH0gZnJvbSAnLi9HJztcbmltcG9ydCB7IEhvdGVsRW1wdHlTdGF0ZSB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBHSG90ZWxQbGFjZWhvbGRlckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnd2lkdGgnOiAnMTAwJScsXG4gICdoZWlnaHQnOiAnMjQwcHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMDVweCcsXG4gICAgaGVpZ2h0OiAnNjlweCcsXG4gIH1cbn0pO1xuXG5jb25zdCByZW5kZXJJbWFnZVNsaWRlciA9IChpbWFnZSwga2V5LCBob3RlbE5hbWUpID0+IChcbiAgPEdTd2lwZXJJdGVtRGl2IGtleT17a2V5fSBpZD17a2V5fSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgIDxpbWcgd2lkdGg9ezMyMH0gaGVpZ2h0PXsyMDB9XG4gICAgICBkYXRhLXNyYz17aW1hZ2UucGljdHVyZS5pbWFnZWtpdFVybH1cbiAgICAgIGFsdD17aW1hZ2UuYWx0VGV4dCA/IGltYWdlLmFsdFRleHQgOiBob3RlbE5hbWV9IGNsYXNzTmFtZT1cInN3aXBlci1sYXp5XCIgLz5cbiAgICB7XG4gICAgICBpbWFnZS5jYXB0aW9uTGluayA/XG4gICAgICAgIDxHSW1hZ2VDcmVkaXRzRGl2IGNsYXNzTmFtZT1cImwwIHNmY3cgZHluYW1pY1RleHRJbmhlcml0IGYxMCBiMCBwOCBhYnNvbHV0ZVwiPlxuICAgICAgICAgIHtwYXJzZXIucGFyc2UoaW1hZ2UuY2FwdGlvbkxpbmspfVxuICAgICAgICA8L0dJbWFnZUNyZWRpdHNEaXY+IDogbnVsbFxuICAgIH1cbiAgPC9HU3dpcGVySXRlbURpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlcldpdGhUaHVtYm5haWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ2FsbGVyeVN3aXBlcjogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5nYWxsZXJ5UmVmID0gdGhpcy5nYWxsZXJ5UmVmLmJpbmQodGhpcyk7XG4gIH1cblxuICBnYWxsZXJ5UmVmKHJlZikge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYWxsZXJ5U3dpcGVyOiByZWYuc3dpcGVyIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBnYWxsZXJ5U3dpcGVyUGFyYW1zID0ge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCAuaGlkZScsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYgLmhpZGUnLFxuICAgICAgfSxcbiAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgICAgbGF6eToge1xuICAgICAgICBsb2FkUHJldk5leHQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgeyBpbWFnZXMsIGhvdGVsTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8R1N3aXBlckNvbnRhaW5lckRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1mdWxsLXdpZHRoXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBpbWFnZXMubGVuZ3RoID9cbiAgICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgICAgey4uLmdhbGxlcnlTd2lwZXJQYXJhbXN9XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5nYWxsZXJ5UmVmfVxuICAgICAgICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJhZGl1czIgb3ZlcmZsb3doIHN3aXBlclNpbmdsZUNoaWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyYWRpdXMyIG92ZXJmbG93aCBzd2lwZXJDdXN0b21XaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmM1IHNsaWRlckhvdGVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3JlbmRlckltYWdlU2xpZGVyKGltYWdlLnBpY3R1cmVEZXRhaWxzLCBpbmRleCwgaG90ZWxOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1N3aXBlcj4gOlxuICAgICAgICAgICAgPEdIb3RlbFBsYWNlaG9sZGVyRGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNiYzUgd2Z1bGwgaGZ1bGwgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEhvdGVsRW1wdHlTdGF0ZSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR0hvdGVsUGxhY2Vob2xkZXJEaXY+XG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dTd2lwZXJDb250YWluZXJEaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TbGlkZXJXaXRoVGh1bWJuYWlsLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaG90ZWxOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cblNsaWRlcldpdGhUaHVtYm5haWwuZGVmYXVsdFByb3BzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uXCI6IFwicHdFbXo5SkhDUVpQT2pDRFJiaTZvXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgRGVmYXVsdEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cblxuY29uc3QgR0hvdGVsTWFwVG9vbFRpcEJ1dHRvbiA9IGdsYW1vcm91cy5idXR0b24oe1xuICB3aWR0aDogJzI0cHgnLFxuICBoZWlnaHQ6ICcyNHB4Jyxcbn0pO1xuXG5jb25zdCBHSG90ZWxUb29sdGlwRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1heFdpZHRoOiAnMjE0cHgnLFxuICB3aWR0aDogJzIxNHB4Jyxcbn0pO1xuXG5jb25zdCBHSG90ZWxUaHVtYm5pbERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtaW5XaWR0aDogJzYwcHgnLFxuICBtYXhXaWR0aDogJzYwcHgnLFxufSk7XG5cbmNvbnN0IEdIb3RlbFRleHREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgd2hpdGVTcGFjZTogJ25vcm1hbCcsXG4gIG1hcmdpbkxlZnQ6ICc2MHB4Jyxcbn0pO1xuXG5jb25zdCBIb3RlbE1hcFRvb2x0aXAgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwQ29tbW9uIHJlbGF0aXZlIHoyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBCb3ggcDBcIj5cbiAgICAgICAgPEdIb3RlbFRvb2x0aXBEaXYgY2xhc3NOYW1lPVwic2JjdyBmbGV4IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgIDxHSG90ZWxUaHVtYm5pbERpdiBjbGFzc05hbWU9XCJvdmVyZmxvd2ggYWJzb2x1dGUgaGZ1bGwgc2JjNFwiIC8+XG4gICAgICAgICAgPEdIb3RlbFRleHREaXYgY2xhc3NOYW1lPVwicDhcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIGVsbGlwc2lzX3R3b1wiPkFtYXJ0ZXJyYSBWaWxsYXMgQmFsaSBOdXNhIER1YSAtIE1nYWxsZXJ5IENvbGxlY3Rpb248L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTIgc2ZjM1wiPkV4Y2VsbGVudCB8IDkuNDwvcD5cbiAgICAgICAgICA8L0dIb3RlbFRleHREaXY+XG5cbiAgICAgICAgPC9HSG90ZWxUb29sdGlwRGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwQXJyb3dcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8R0hvdGVsTWFwVG9vbFRpcEJ1dHRvbiBjbGFzc05hbWU9XCJyZWNvbWVuZGVkSWNvbiByZWxhdGl2ZSBjdXJzb3JQXCI+XG4gICAgICAgIDxEZWZhdWx0SWNvbiAvPlxuICAgICAgPC9HSG90ZWxNYXBUb29sVGlwQnV0dG9uPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxNYXBUb29sdGlwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBPdmVyQWxsUmF0aW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL092ZXJBbGxSYXRpbmcnO1xuaW1wb3J0IFJhdGluZ1N0YXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvUmF0aW5nU3Rhcic7XG5pbXBvcnQgSG90ZWxNYXBUb29sdGlwIGZyb20gJy4vSG90ZWxNYXBUb29sdGlwJztcbmltcG9ydCBTZWVNYXBQb3BVcCBmcm9tICdtb2R1bGVzL21hcEluZm9ybWF0aW9uL1NlZU1hcFBvcFVwL1NlZU1hcFBvcFVwJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21hcFBvcHVwLmNtLnNjc3MnO1xuXG5jb25zdCBNYXBQb3B1cCA9ICh7IGhvdGVsIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNiY3cgZmxleEZ1bGwgZmxleERDb2x1bW5cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgcHIyNFwiPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtMCBtcjggZjE2IGZ3N1wiPntob3RlbC5uYW1lfTwvaDY+XG4gICAgICAgICAgPFJhdGluZ1N0YXIgcmF0aW5nPXtob3RlbC5zdGFyUmF0aW5nfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmbGV4RnVsbCBtcjggZjEyXCI+e2hvdGVsLmFkZHJlc3MgJiYgaG90ZWwuYWRkcmVzcy5icmllZn08L3A+XG4gICAgICAgIDxPdmVyQWxsUmF0aW5nIG92ZXJhbGxSYXRpbmc9e2hvdGVsLnVzZXJSYXRpbmd9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgd2Z1bGwgZmxleCByZWxhdGl2ZSBmbGV4RnVsbCAke3N0eWxlcy5tYXB9YH0+XG4gICAgICA8U2VlTWFwUG9wVXAgY29vcmRpbmF0ZXM9e2hvdGVsLm1hcH0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByNTAgdDUwIHozXCI+IDxIb3RlbE1hcFRvb2x0aXAgbmFtZT17aG90ZWwubmFtZX0gaW5mbz17aG90ZWwudXNlclJhdGluZ30gLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5NYXBQb3B1cC5wcm9wVHlwZXMgPSB7XG4gIGhvdGVsIDogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuTWFwUG9wdXAuZGVmYXVsdFByb3BzID0ge1xuICBob3RlbDoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFBvcHVwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFwXCI6IFwiXzNDOG8yMWlwZmViQ2tsN0xKQTlOMUNcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5jbGFzcyBTZWVNYXBQb3BVcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBNYXA6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuTXlNYXBDb21wb25lbnQgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcmVhY3RHb29nbGVNYXBzID0gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdyZWFjdC1nb29nbGUtbWFwcycgKi8gJ3JlYWN0LWdvb2dsZS1tYXBzJylcbiAgICAgIC50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgdGhpcy5NeU1hcENvbXBvbmVudCA9IHRoaXMucmVuZGVyTWFwQ29tcG9uZW50KG1vZHVsZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBNYXA6IG1vZHVsZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyA/IHJlYWN0R29vZ2xlTWFwcygpIDogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZWFjdEdvb2dsZU1hcHMpO1xuICB9XG5cbiAgcmVuZGVyTWFwQ29tcG9uZW50ID0gKE1hcCkgPT4ge1xuICAgIHJldHVybiBNYXAgP1xuICAgICAgTWFwLndpdGhTY3JpcHRqcyhNYXAud2l0aEdvb2dsZU1hcCgoY3VzdG9tUHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb29yZGluYXRlcywgaXNNYXJrZXJTaG93biwgem9vbVJhdGlvIH0gPSBjdXN0b21Qcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWFwLkdvb2dsZU1hcCBkZWZhdWx0Wm9vbT17em9vbVJhdGlvfSBkZWZhdWx0Q2VudGVyPXt7IGxhdDogMTAuODUwNSwgbG5nOiA3Ni4yNzExIH19IGNlbnRlcj17e1xuICAgICAgICAgICAgbGF0OiBjb29yZGluYXRlcy5sYXRpdHVkZSB8fCBjb29yZGluYXRlcy5sYXQsXG4gICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxvbmdpdHVkZSB8fCBjb29yZGluYXRlcy5sb25nXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlzTWFya2VyU2hvd24gP1xuICAgICAgICAgICAgICAgIDxNYXAuTWFya2VyIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdGl0dWRlIHx8IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICAgIGxuZzogY29vcmRpbmF0ZXMubG9uZ2l0dWRlIHx8IGNvb3JkaW5hdGVzLmxvbmdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8L01hcC5NYXJrZXI+IDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvTWFwLkdvb2dsZU1hcD4pO1xuICAgICAgfSkpIDogbnVsbDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcywgbmFtZSwgaW5mbywgem9vbVJhdGlvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdvb2dsZU1hcFVybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Y29uZmlnLmdvb2dsZU1hcC5rZXl9JnY9My5leHAmbGlicmFyaWVzPWdlb21ldHJ5LGRyYXdpbmcscGxhY2VzYDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNiY3cgZmxleERDb2x1bW4gZmxleEZ1bGxcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuTXlNYXBDb21wb25lbnQgP1xuICAgICAgICAgICAgPHRoaXMuTXlNYXBDb21wb25lbnRcbiAgICAgICAgICAgICAgaXNNYXJrZXJTaG93blxuICAgICAgICAgICAgICBjb29yZGluYXRlcz17Y29vcmRpbmF0ZXN9XG4gICAgICAgICAgICAgIHpvb21SYXRpbz17em9vbVJhdGlvfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBpbmZvPXtpbmZvfVxuICAgICAgICAgICAgICBnb29nbGVNYXBVUkw9e2dvb2dsZU1hcFVybH1cbiAgICAgICAgICAgICAgbG9hZGluZ0VsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XG4gICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XG4gICAgICAgICAgICAgIG1hcEVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XG4gICAgICAgICAgICAvPiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5TZWVNYXBQb3BVcC5wcm9wVHlwZXMgPSB7XG4gIGNvb3JkaW5hdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluZm86IFByb3BUeXBlcy5zdHJpbmcsXG4gIHpvb21SYXRpbzogUHJvcFR5cGVzLm51bWJlclxufTtcblxuU2VlTWFwUG9wVXAuZGVmYXVsdFByb3BzID0ge1xuICBuYW1lOiAnJyxcbiAgaW5mbzogJycsXG4gIHpvb21SYXRpbzogNlxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VlTWFwUG9wVXA7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBHcmVlblRpY2sgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUnO1xuXG5jb25zdCBHQ2hlY2tTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICBtaW5XaWR0aDogJzI0cHgnLFxuICBtYXhXaWR0aDogJzI0cHgnLFxuICBoZWlnaHQ6ICcyNHB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIG1heFdpZHRoOiAnODAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICB9XG59KTtcblxuY29uc3QgQ2hlY2tMaXN0ID0gKHsgY2hlY2tMaXN0IH0pID0+IHtcbiAgY29uc3QgY29sbGFwc2VkQ29udGVudCA9IFtdLCBleHBhbmRlZENvbnRlbnQgPSBbXTtcbiAgbGV0IHRlbXBDaGVja0xpc3QgPSBbXTtcbiAgcmV0dXJuKDxkaXY+XG4gICAgPGg2IGNsYXNzTmFtZT1cImYxNiBmd2IgbTAgbWIxNVwiPkhpZ2hsaWdodHM8L2g2PlxuICAgIDx1bD5cbiAgICAgIHtcbiAgICAgICAgY2hlY2tMaXN0Lm1hcCgoY2hlY2tQb2ludCwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0ZW1wQ2hlY2tMaXN0ID0gaW5kZXggPiAyID8gZXhwYW5kZWRDb250ZW50IDogY29sbGFwc2VkQ29udGVudDtcbiAgICAgICAgICB0ZW1wQ2hlY2tMaXN0LnB1c2goXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBtYjhcIj5cbiAgICAgICAgICAgICAgPEdDaGVja1NwYW4gY2xhc3NOYW1lPVwiaWNvbjI0IG1yNSByZWxhdGl2ZSBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48R3JlZW5UaWNrIC8+PC9HQ2hlY2tTcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTRwXCI+e2NoZWNrUG9pbnR9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgPFNob3dNb3JlXG4gICAgICAgIHdyYXBUZXh0PXtjb2xsYXBzZWRDb250ZW50fVxuICAgICAgICBtb3JlVGV4dD17ZXhwYW5kZWRDb250ZW50fVxuICAgICAgICBzaG93TW9yZVRleHQ9XCJSZWFkIE1vcmVcIlxuICAgICAgICBzaG93TGVzc1RleHQ9XCJSZWFkIExlc3NcIlxuICAgICAgLz5cbiAgICA8L3VsPlxuICA8L2Rpdj4pO1xufTtcblxuQ2hlY2tMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2hlY2tMaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tMaXN0O1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0ICd0aGVtZS9Db21tb24vRHJvcGRvd24uc2Nzcyc7XG5cbmNvbnN0IENvbW1vbkRyb3Bkb3duID0gKHsgb3B0aW9ucywgY2xpY2tIYW5kbGVyLCBkZWZhdWx0T3B0aW9uLCBwbGFjZWhvbGRlciB9KSA9PiAoXG4gIDxEcm9wZG93blxuICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgdmFsdWU9e2RlZmF1bHRPcHRpb24gfHwgb3B0aW9uc1swXX1cbiAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgJ1NlbGVjdCBhbiBvcHRpb24nfVxuICAgIG9uQ2hhbmdlPXtjbGlja0hhbmRsZXJ9XG4gIC8+XG4pO1xuXG5Db21tb25Ecm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjbGlja0hhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICBkZWZhdWx0T3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5Db21tb25Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsaWNrSGFuZGxlcjogKCkgPT4ge30sXG4gIGRlZmF1bHRPcHRpb246ICcnLFxuICBwbGFjZWhvbGRlcjogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1vbkRyb3Bkb3duO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBHUmV2aWV3VHlwZURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtaW5XaWR0aDogJzQ4JScsXG4gIG1heFdpZHRoOiAnNDglJyxcbiAgbWFyZ2luQm90dG9tOiAnNnB4Jyxcbn0pO1xuXG5jb25zdCBHUmV2aWV3Q291bnREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgd2lkdGg6ICcxMDAlJyxcbn0pO1xuXG5jb25zdCBHQXV0aG9ySW1nRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnNTBweCcsXG4gIGhlaWdodDogJzUwcHgnLFxuICAnJiBpbWcnOiB7XG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVydHNSZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGV4cGVydFJldmlld3M6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGV4cGVydFJldmlld3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhdXRob3I6IHthdXRob3JQaWMsIGF1dGhvck5hbWUsIHVzZXJEZXNpZ25hdGlvbiwgdXNlckxvY2F0aW9ufSB9ID0gZXhwZXJ0UmV2aWV3cztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyIGZsZXhDZW50ZXJJdGVtc1wiPlxuICAgICAgICAgIDxHQXV0aG9ySW1nRGl2IGNsYXNzTmFtZT1cInJhZGl1czEwMCBwYmM0IG92ZXJmbG93aFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Ake2F1dGhvclBpY30/dHI9dy01MCxoLTUwYH0gYWx0PXthdXRob3JOYW1lfSAvPlxuICAgICAgICAgIDwvR0F1dGhvckltZ0Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sMTVcIj5cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmMTQgZnc5IG1iMlwiPnthdXRob3JOYW1lfTwvaDY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTIgcGZjNFwiPlxuICAgICAgICAgICAgICB7dXNlckRlc2lnbmF0aW9ufSxcbiAgICAgICAgICAgICAge3VzZXJMb2NhdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHluYW1pY1RleHRJbmhlcml0IGYxNHAgbXQxNSBtYjI0XCI+XG4gICAgICAgICAge3BhcnNlci5wYXJzZShleHBlcnRSZXZpZXdzLmJvZHkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhXcmFwIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIHtleHBlcnRSZXZpZXdzLmNhdGVnb3J5UmF0aW5ncy5tYXAoY2F0ZWdvcnkgPT5cbiAgICAgICAgICAgIDxHUmV2aWV3VHlwZURpdiBrZXk9e2V4cGVydFJldmlld3MuaWR9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBtYjggZjE0IHRleHQtY2FwaXRhbGl6ZVwiPntjYXRlZ29yeS5uYW1lLnJlcGxhY2UoJ18nLCAnICcpfSA8c3BhbiBjbGFzc05hbWU9XCJtbDggZnc5XCI+e2NhdGVnb3J5LnJhdGluZ308L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8R1Jldmlld0NvdW50RGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJhZGl1czIwIG92ZXJmbG93aCBzYmM1XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmV2aWV3Q291bnQgYWJzb2x1dGUgbDAgdDAgYjAgc2JjM1wiIHN0eWxlPXt7IHdpZHRoOiBgJHsoY2F0ZWdvcnkucmF0aW5nKjEwMCkgLyAxMH0lYCB9fSAvPlxuICAgICAgICAgICAgICA8L0dSZXZpZXdDb3VudERpdj5cbiAgICAgICAgICAgIDwvR1Jldmlld1R5cGVEaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHB1c2ggYXMgcHVzaFN0YXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTRUdNRU5UX0FETUlOX0NPTU1FTlQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgdXBkYXRlRnJvbU9uZVByb3BzIH0gZnJvbSAncmVkdWNlcnMvZm9ybU9uZUxlYWQnO1xuXG5jbGFzcyBGb3JtT25lQ1RBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBydFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHVwZGF0ZUZyb21PbmVQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xpY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcnRQcm9wczoge30sXG4gICAgY2xpY2tIYW5kbGVyOiAoKSA9PiB7fSxcbiAgICBjaGlsZHJlbjogW11cbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIC8vIG1lcmdlIGFkbWluIGNvbW1lbnRzIHdpdGggdGhlIGV4aXN0aW5nIG9uZXNcbiAgICBsZXQgYWRtaW5Db21tZW50cyA9IHRoaXMucHJvcHMucnRQcm9wcy5hZG1pbkNvbW1lbnRzIHx8ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYWRtaW5Db21tZW50cyA9IGAke2FkbWluQ29tbWVudHN9ICNGb3JtX2ZpbGxlZF9vbiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWA7XG4gICAgfVxuICAgIGFkbWluQ29tbWVudHMgPSBgICR7YWRtaW5Db21tZW50c30gJHtTRUdNRU5UX0FETUlOX0NPTU1FTlR9YDtcbiAgICBjb25zdCBydHJpcFByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5ydFByb3BzLFxuICAgICAgYWRtaW5Db21tZW50c1xuICAgIH07XG4gICAgdGhpcy5wcm9wcy5jbGlja0hhbmRsZXIoKTtcbiAgICAvLyB1cGRhdGUgdGhlIHZhbHVlIG9uIHN0b3JlXG4gICAgdGhpcy5wcm9wcy51cGRhdGVGcm9tT25lUHJvcHMocnRyaXBQcm9wcyk7XG4gICAgLy8gY2hhbmdlIHRoZSB1cmxcbiAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZSgnL3JlcXVlc3RlZF90cmlwcy9uZXcnKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndmdWxsXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgdXBkYXRlRnJvbU9uZVByb3BzLCBwdXNoU3RhdGUgfSkoRm9ybU9uZUNUQSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBDbG9zZURhcmssIENsb3NlV2hpdGV9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgQ2xvc2VJdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICc1cHgnLFxuICB0b3A6ICcwcHgnLFxuICB3aWR0aDogJzM2cHgnLFxuICBoZWlnaHQ6ICczNnB4JyxcbiAgcGFkZGluZzogJzEycHgnLFxuICB6SW5kZXg6ICcyJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxufSk7XG5cbmNvbnN0IENsb3NlSXRMZWZ0ID0gZ2xhbW9yb3VzLmJ1dHRvbih7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBsZWZ0OiAnNXB4JyxcbiAgdG9wOiAnM3B4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnNicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICc5NCUnLFxuICAgIG1heFdpZHRoOiAnNjAwcHgnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IDEwMDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjc1KSdcbiAgfSxcbn07XG5jb25zdCBjdXN0b21TdHlsZXNGdWxsVmlldyA9IHtcbiAgY29udGVudDoge1xuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICB6SW5kZXg6ICcxMDEnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZ1RvcDogJzUwcHgnXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknXG4gIH0sXG59O1xuXG5jbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0cmlnZ2VyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmdWxsVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzQ3VzdG9tQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc05vQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzV2hpdGVJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1RyaWdnZXJGdWxsVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VzdG9tQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQWZ0ZXJNb2RhbE9wZW46ICgpID0+IHtcbiAgICB9LFxuICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tOiAoKSA9PiB7XG4gICAgfSxcbiAgICBjdXN0b21DbG9zZVRyaWdnZXI6IGZhbHNlLFxuICAgIHRyaWdnZXI6IDxidXR0b24+UGxlYXNlIHN1cHBseSBhIGN1c3RvbSB0cmlnZ2VyIGNvbXBvbmVudDwvYnV0dG9uPixcbiAgICBmdWxsVmlldzogZmFsc2UsXG4gICAgaGFzQ3VzdG9tQ2xvc2U6IGZhbHNlLFxuICAgIGhhc05vQ2xvc2U6IGZhbHNlLFxuICAgIGlzV2hpdGVJY29uOiBmYWxzZSxcbiAgICBpc1RyaWdnZXJGdWxsVmlldzogZmFsc2UsXG4gICAgY3VzdG9tQ2xhc3M6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZnRlck9wZW5Nb2RhbCA9IHRoaXMuYWZ0ZXJPcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc09wZW4gJiYgbmV4dFByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5jdXN0b21DbG9zZVRyaWdnZXIpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlQ3VzdG9tKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlQ3VzdG9tKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgfVxuXG4gIGFmdGVyT3Blbk1vZGFsKCkge1xuICAgIHRoaXMucHJvcHMub25BZnRlck1vZGFsT3BlbigpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZnVsbFZpZXcsIGhhc0N1c3RvbUNsb3NlLCBoYXNOb0Nsb3NlLCBpc1doaXRlSWNvbiwgaXNUcmlnZ2VyRnVsbFZpZXcsIGN1c3RvbUNsYXNzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNUcmlnZ2VyRnVsbFZpZXcgPyAnd2Z1bGwnOiAnJ30+XG4gICAgICAgIHshdGhpcy5wcm9wcy5pc09wZW4gP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsXCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudHJpZ2dlcn1cbiAgICAgICAgICA8L3NwYW4+IDpcbiAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBvbkFmdGVyT3Blbj17dGhpcy5hZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgIHN0eWxlPXtmdWxsVmlldyA/IGN1c3RvbVN0eWxlc0Z1bGxWaWV3IDogY3VzdG9tU3R5bGVzfVxuICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIlRyYXZlbCBUcmlhbmdsZSBNb2RhbFwiXG4gICAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjdXN0b21DbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhhc0N1c3RvbUNsb3NlID9cbiAgICAgICAgICAgICAgPENsb3NlSXRMZWZ0IG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gY2xhc3NOYW1lPXtgYXRfY2xvc2UgJHtoYXNOb0Nsb3NlID8gJ25ibG9jaycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7aXNXaGl0ZUljb24gPyA8Q2xvc2VXaGl0ZSBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+IDogPENsb3NlRGFyayBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+fVxuICAgICAgICAgICAgICA8L0Nsb3NlSXRMZWZ0PiA6XG4gICAgICAgICAgICAgIDxDbG9zZUl0IG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gY2xhc3NOYW1lPXtgYXRfY2xvc2UgJHtoYXNOb0Nsb3NlID8gJ25ibG9jaycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7aXNXaGl0ZUljb24gPyA8Q2xvc2VXaGl0ZSBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+IDogPENsb3NlRGFyayBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+fVxuICAgICAgICAgICAgICA8L0Nsb3NlSXQ+XG4gICAgICAgICAgfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjYXBpdGFsaXplRXZlcnlGaXJzdExldHRlciB9IGZyb20gJ2hlbHBlcnMvcGFyc2Vycyc7XG5pbXBvcnQgRm9ybU9uZUNUQSBmcm9tICdtb2R1bGVzL3NoYXJlZC9Gb3JtT25lQ1RBJztcblxuaW1wb3J0IHsgRGVmYXVsdEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IEdldENhbGxiYWNrQmFubmVyID0gKHsgZGVzdGluYXRpb24sIGhvdGVsSWQsIHR5cGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBiYzMgcDI0XCI+XG4gICAgPGg2IGNsYXNzTmFtZT1cImYyNCBzZmN3IGZ3YiBtYjhcIj5XYW50IGJlc3Qge2Rlc3RpbmF0aW9ufSBQYWNrYWdlcyA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiPndpdGggdGhpcyB7dHlwZX0/PC9zcGFuPjwvaDY+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjEyIHNmY3cgbTAgbWIyNCBwZmM0XCI+RmlsbCBpbiB0aGUgZm9ybSBhbmQgZ2V0IGEgY2FsbGJhY2sgZnJvbSBvdXIgZXhwZXJ0cy48L3A+XG4gICAgPEZvcm1PbmVDVEFcbiAgICAgIHJ0UHJvcHM9e3tcbiAgICAgICAgdG9fbG9jOiBkZXN0aW5hdGlvbixcbiAgICAgICAgcGFnZTogJ0hvdGVsIERldGFpbCBQYWdlJyxcbiAgICAgICAgc2VjdGlvbjogJ0hvdGVsJyxcbiAgICAgICAgY3RhOiAnR2V0IEV4cGVydHMgQ2FsbGJhY2snLFxuICAgICAgICBvYmplY3Q6IGBQYWNrYWdlLyR7aG90ZWxJZH1gLFxuICAgICAgfX1cbiAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge319XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCBwbDggcHI4XCI+PGRpdiBjbGFzc05hbWU9XCJ3YXZlXCIvPkdldCBFeHBlcnRzJyBDYWxsYmFjazwvZGl2PlxuICAgIDwvRm9ybU9uZUNUQT5cbiAgPC9kaXY+XG4pO1xuXG5HZXRDYWxsYmFja0Jhbm5lci5wcm9wVHlwZXMgPSB7XG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhvdGVsSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZXRDYWxsYmFja0Jhbm5lcjtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgR0luY2x1c2lvbnNVbCA9IGdsYW1vcm91cy51bCh7XG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxuICAnJiBsaSc6IHtcbiAgICBtYXJnaW5SaWdodDogJzRweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICBoZWlnaHQ6ICczMnB4JyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgICBwYWRkaW5nOiAnMCAxNXB4JyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQ0NFQUU3JyxcbiAgfVxufSk7XG5cbmNvbnN0IEhpZ2hsaWdodFRhYnMgPSAoeyB0YWdMaXN0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItZnVsbC13aWR0aFwiPlxuICAgIDxHSW5jbHVzaW9uc1VsIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICB7XG4gICAgICAgIHRhZ0xpc3RcbiAgICAgICAgICAuZmlsdGVyKHQgPT4gdC5sYWJlbClcbiAgICAgICAgICAubWFwKCh0YWcsIGluZGV4KSA9PlxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyYWRpdXMyMFwiPnt0YWcubGFiZWx9PC9saT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvR0luY2x1c2lvbnNVbD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHRUYWJzO1xuXG5IaWdobGlnaHRUYWJzLnByb3BUeXBlcyA9IHtcbiAgdGFnTGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuXG5jb25zdCBHSW5jbHVzaW9uSGlnaGxpZ2h0VWwgPSBnbGFtb3JvdXMudWwoe1xuICAnJiBsaSc6IHtcbiAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgIHBhZGRpbmc6ICcwIDZweCcsXG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgICcmIC5oaWdobGlnaHRJY29uJzoge1xuICAgICAgd2lkdGg6ICcxNHB4JyxcbiAgICAgIGhlaWdodDogJzE0cHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBtYXJnaW5SaWdodDogJzhweCcsXG4gICAgfSxcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcwICFpbXBvcnRhbnQnXG4gICAgfVxuICB9LFxuICAnJiAubHV4dXJ5Jzoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTRhNTAwJyxcbiAgICBjb2xvcjogJyNjNDhlMDAnLFxuICB9LFxuICAnJiAuYnVkZ2V0Jzoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA5Njg4JyxcbiAgICBjb2xvcjogJyMwMDk2ODgnLFxuICB9XG59KTtcblxuY29uc3QgUHJvcGVydHlUeXBlID0gKHsgbHV4dXJ5LCBidWRnZXQgfSkgPT4gKFxuICA8R0luY2x1c2lvbkhpZ2hsaWdodFVsIGNsYXNzTmFtZT1cImJsb2NrIGZsZWZ0XCI+XG4gICAge1xuICAgICAgbHV4dXJ5ID9cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgbHV4dXJ5IHJhZGl1czIwIG1yNFwiPlxuICAgICAgICAgIFRvcCBSYXRlZCBMdXh1cnkgUHJvcGVydHlcbiAgICAgICAgPC9saT4gOiBidWRnZXQgP1xuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBidWRnZXQgcmFkaXVzMjAgbXI0XCI+XG4gICAgICAgICAgVG9wIFJhdGVkIEJ1ZGdldCBQcm9wZXJ0eVxuICAgICAgICA8L2xpPiA6IG51bGxcbiAgICB9XG4gIDwvR0luY2x1c2lvbkhpZ2hsaWdodFVsPlxuKTtcblxuUHJvcGVydHlUeXBlLnByb3BUeXBlcyA9IHtcbiAgbHV4dXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgYnVkZ2V0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUHJvcGVydHlUeXBlLmRlZmF1bHRQcm9wcyA9IHtcbiAgbHV4dXJ5OiB0cnVlLFxuICBidWRnZXQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eVR5cGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmVhZE1vcmVCeUhlaWdodC5jbS5zY3NzJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5pbXBvcnQge1xuICBCbHVlRG93bkFycm93XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY2xhc3MgUmVhZE1vcmVCeUhlaWdodCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZXhwYW5kZWQ6IGZhbHNlIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgbWF4SGVpZ2h0LCBjb250ZW50LCBoZWFkaW5nLCBzaG93VGl0bGUsIGhvdGVsRGlzcGxheU5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd1RpdGxlID9cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImYxNiBwYjAgbTAgZndiIG1iMTVcIj57aGVhZGluZ30geyBob3RlbERpc3BsYXlOYW1lID8gYGF0ICR7aG90ZWxEaXNwbGF5TmFtZX1gIDogbnVsbH08L2gyPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyAnbWF4SGVpZ2h0JzogZXhwYW5kZWQgPyAnbm9uZScgOiBtYXhIZWlnaHQgfX1cbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGAke3N0eWxlcy5kYXRhfSBibG9jayByZWxhdGl2ZSBwdDggJHtleHBhbmRlZCA/IHN0eWxlcy5leHBhbmRlZCA6ICcnfWAgfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGR5bmFtaWNUZXh0SW5oZXJpdCBwZmMzIGYxNHBcIj5cbiAgICAgICAgICAgICAge3BhcnNlci5wYXJzZShjb250ZW50KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlYWRNb3JlfSBjdXJzb3JQIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIG10OCBmMTIgZnc5IGB9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGJsb2NrIG1yNVwiPnsgZXhwYW5kZWQgPyAnUmVhZCBMZXNzJyA6ICdSZWFkIE1vcmUnfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRvd25BcnJvd30gcmVsYXRpdmUgYmxvY2sgJHtleHBhbmRlZCA/ICdyb3RhdGUxODAnIDogJ3JvdGF0ZTAnfWB9PjxCbHVlRG93bkFycm93IC8+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhZE1vcmVCeUhlaWdodC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93VGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICBob3RlbERpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5SZWFkTW9yZUJ5SGVpZ2h0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWF4SGVpZ2h0OiA4MyxcbiAgc2hvd1RpdGxlOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFkTW9yZUJ5SGVpZ2h0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGF0YVwiOiBcIlFJUkRsa1EyMlY5aWsxU05iRWl4MFwiLFxuXHRcImV4cGFuZGVkXCI6IFwiXzJIcGlzVlVQNkVlMU1Sdmtwc09HTW9cIixcblx0XCJyZWFkTW9yZVwiOiBcIl8zbFp2TnJObkt2M2NWeDkyc3JuakNxXCIsXG5cdFwiZG93bkFycm93XCI6IFwiXzNmNnFEMzM4Q1BXMkVqLWZBc1hZMUpcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEVsZW1lbnQsIExpbmsgYXMgc2Nyb2xsTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJ21vZHVsZXMvc2hhcmVkL0JyZWFkY3J1bWInO1xuaW1wb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBjYXBpdGFsaXplRXZlcnlGaXJzdExldHRlcixcbiAgZ2V0RGVzdGluYXRpb24sIG1ha2VDYXBpdGFsaXplZFNlbnRlbmNlXG59IGZyb20gJ2hlbHBlcnMvcGFyc2Vycyc7XG5pbXBvcnQgUmVhZE1vcmVCeUhlaWdodCBmcm9tICdtb2R1bGVzL3NoYXJlZC9SZWFkTW9yZUJ5SGVpZ2h0JztcbmltcG9ydCBIb3RlbERldGFpbEhlYWRlciBmcm9tICdtb2R1bGVzL2hkcC9Ib3RlbERldGFpbEhlYWRlcic7XG5pbXBvcnQgSG90ZWxEZXRhaWxOYXYgZnJvbSAnbW9kdWxlcy9oZHAvSG90ZWxEZXRhaWxOYXYnO1xuaW1wb3J0IEhpZ2hsaWdodFRhYnMgZnJvbSAnbW9kdWxlcy9zaGFyZWQvSGlnaGxpZ2h0VGFicyc7XG5pbXBvcnQgTmVhcmJ5IGZyb20gJ21vZHVsZXMvaGRwL05lYXJieSc7XG5pbXBvcnQgUHJpY2VSYW5nZSBmcm9tICdtb2R1bGVzL2hkcC9QcmljZVJhbmdlJztcbmltcG9ydCBDaGVja0xpc3QgZnJvbSAnbW9kdWxlcy9zaGFyZWQvQ2hlY2tMaXN0JztcbmltcG9ydCBHZXRDYWxsYmFja0Jhbm5lciBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZXRDYWxsYmFja0Jhbm5lcic7XG5pbXBvcnQgQW1lbml0aWVzIGZyb20gJ21vZHVsZXMvaGRwL0FtZW5pdGllcyc7XG5pbXBvcnQgRGluaW5nQ3Vpc2luZSBmcm9tICdtb2R1bGVzL2hkcC9EaW5pbmdDdWlzaW5lJztcbmltcG9ydCBIb3RlbFJldmlldyBmcm9tICdtb2R1bGVzL2hkcC9Ib3RlbFJldmlldyc7XG5pbXBvcnQgU2ltaWxhckhvdGVscyBmcm9tICdtb2R1bGVzL2hkcC9TaW1pbGFySG90ZWxzJztcbmltcG9ydCBQb3B1bGFyUGFja2FnZXMgZnJvbSAnbW9kdWxlcy9wYWNrYWdlcy9wb3B1bGFyJztcbmltcG9ydCBTbGlkZXJXaXRoVGh1bWJuYWlsIGZyb20gJ21vZHVsZXMvaGRwL1NsaWRlcldpdGhUaHVtYm5haWwnO1xuaW1wb3J0IEZhcSBmcm9tICdtb2R1bGVzL2ZhcXMvRmFxcyc7XG5pbXBvcnQgeyBnZXRDdXJyZW50TW9udGggfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcbmltcG9ydCBDVEEgZnJvbSAnbW9kdWxlcy9oZHAvQ1RBJztcbmltcG9ydCBUcmF2ZWxlclN0b3JpZXMgZnJvbSAnbW9kdWxlcy90cmF2ZWxsZXJTdG9yeSc7XG5pbXBvcnQgSGVhZGVyQ29tbW9uIGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlckNvbW1vbic7XG5pbXBvcnQgSG90ZWxDb250YWN0cyBmcm9tICdtb2R1bGVzL2hkcC9Ib3RlbENvbnRhY3RzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvRm9vdGVyJztcbmltcG9ydCBGaXhlZE1lbnUgZnJvbSAnY29tcG9uZW50cy9GaXhlZE1lbnUvRml4ZWRNZW51JztcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2hlbHBlcnMvRm9ybURhdGFGb3JtYXR0ZXInO1xuaW1wb3J0IHsgY3JlYXRlSGVsbWV0QmFubmVyIH0gZnJvbSBcImhlbHBlcnMvc2VvSGVscGVyc1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJUaXRsZSB9IGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlclRpdGxlJztcblxuaW1wb3J0ICdhcHAvdGhlbWUvSG90ZWxMaXN0aW5nLnNjc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hkcC5jbS5zY3NzJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBTY3JvbGxFbGVtZW50ID0gZ2xhbW9yb3VzKFN0aWNreSkoe1xuICB6SW5kZXg6IDQsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAnIC5uYXYtY3RhJzoge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9LFxuICAnJi5zaG93Jzoge1xuICAgICcgLnBhY2thZ2UtZml4ZWQtaGRyJzoge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gICAgfSxcbiAgICAnIC5uYXYtY3RhJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckNvbnN0YW50cyhkaXNwbGF5U2VjdGlvbnMsIG5lYXJieVNlY3Rpb25zLCB0ZXN0aW1vbmlhbHMsIHBvcHVsYXJQYWNrYWdlcykge1xuICBsZXQgaGVhZGVyQ29uc3RhbnRzID0gW107XG5cbiAgaGVhZGVyQ29uc3RhbnRzID0gW1xuICAgIC4uLmhlYWRlckNvbnN0YW50cyxcbiAgICAuLi5PYmplY3Qua2V5cyhkaXNwbGF5U2VjdGlvbnMgfHwge30pXG4gICAgICAuZmlsdGVyKGsgPT4gZGlzcGxheVNlY3Rpb25zW2tdLmRlc2NyaXB0aW9uIHx8IGRpc3BsYXlTZWN0aW9uc1trXS50YWdzLmxlbmd0aClcbiAgICAgIC5tYXAoayA9PiAoeyB0aXRsZTogY2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIoayksIHNlY3Rpb25fbmFtZTogYCR7a30tc2VjYCB9KSlcbiAgXTtcblxuICBpZiAobmVhcmJ5U2VjdGlvbnMgJiYgbmVhcmJ5U2VjdGlvbnMubGVuZ3RoKSB7XG4gICAgaGVhZGVyQ29uc3RhbnRzID0gWy4uLmhlYWRlckNvbnN0YW50cywgeyB0aXRsZTogJ05lYXJieScsIHNlY3Rpb25fbmFtZTogJ25lYXJieS1zZWMnIH1dO1xuICB9XG5cbiAgaWYgKHRlc3RpbW9uaWFscyAmJiB0ZXN0aW1vbmlhbHMudGVzdGltb25pYWxMaXN0Lmxlbmd0aCkge1xuICAgIGhlYWRlckNvbnN0YW50cyA9IFsuLi5oZWFkZXJDb25zdGFudHMsIHsgdGl0bGU6ICdSZXZpZXdzJywgc2VjdGlvbl9uYW1lOiAndGVzdGltb25pYWwtc2VjJyB9XTtcbiAgfVxuXG4gIGlmIChwb3B1bGFyUGFja2FnZXMgJiYgcG9wdWxhclBhY2thZ2VzLmxlbmd0aCkge1xuICAgIGhlYWRlckNvbnN0YW50cyA9IFsuLi5oZWFkZXJDb25zdGFudHMsIHsgdGl0bGU6ICdQYWNrYWdlcycsIHNlY3Rpb25fbmFtZTogJ3BhY2thZ2VzLXNlYycgfV07XG4gIH1cblxuICByZXR1cm4gaGVhZGVyQ29uc3RhbnRzO1xufVxuXG5jbGFzcyBIZHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNyZWF0ZUhlYWRlckNvbnN0YW50cyhwcm9wcyk7XG4gIH1cblxuICBjcmVhdGVIZWFkZXJDb25zdGFudHMgPSAocHJvcHMpID0+IHtcbiAgICBpZihwcm9wcy5kZXRhaWxzICYmIHByb3BzLmRldGFpbHMuaG90ZWwpIHtcbiAgICAgIGNvbnN0IHsgZGV0YWlsczogeyBob3RlbDogeyBkaXNwbGF5U2VjdGlvbnMsIG5lYXJieVNlY3Rpb25zIH0sIHRlc3RpbW9uaWFscyB9LCBwYWNrYWdlcyB9ID0gcHJvcHM7XG4gICAgICB0aGlzLmhlYWRlckNvbnN0YW50cyA9IGNyZWF0ZUhlYWRlckNvbnN0YW50cyhkaXNwbGF5U2VjdGlvbnMsIG5lYXJieVNlY3Rpb25zLCB0ZXN0aW1vbmlhbHMsIHBhY2thZ2VzKTtcbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZ2V0RGVzdGluYXRpb24odGhpcy5kZXN0aW5hdGlvbkNpdHkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHNldENvb2tpZSgnY2JfZHQnLCAnJyk7XG4gICAgaWYgKHByZXZQcm9wcy5sb2NhdGlvbiAhPT0gdGhpcy5wcm9wcy5sb2NhdGlvbikge1xuICAgICAgZ2V0RGVzdGluYXRpb24odGhpcy5kZXN0aW5hdGlvbkNpdHkpO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGV0YWlscywgdXBkYXRlVGVzdGltb25pYWxzLCBwYXJhbXMsIHVwZGF0ZU1vbnRoLCBsb2NhdGlvbiwgcGFja2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYoIWRldGFpbHMuaG90ZWwpIHtcbiAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGFkZHJlc3MsIGNvbnRhY3RJbmZvLCBzdGFyUmF0aW5nLCB1c2VyUmF0aW5nLCBkaXNwbGF5TmFtZTogaG90ZWxEaXNwbGF5TmFtZSxcbiAgICAgIG5hbWU6IGhvdGVsTmFtZSwgdG9wUmF0ZWRCdWRnZXQ6IGJ1ZGdldCwgdG9wUmF0ZWRMdXh1cnk6IGx1eHVyeSwgdHRSZWNvbWVuZGVkOiByZWNvbW1lbmRlZCxcbiAgICAgIHNsaWRlclBpYywgcHJpY2VSYW5nZSwgbW9udGhzLCBoaWdobGlnaHRzLCBtYXAsXG4gICAgICBwcm94aW1pdHksIGRpc3BsYXlTZWN0aW9ucywgY2l0eSwgY291bnRyeSwgY29uY2x1c2lvblRleHQsIG5lYXJieVNlY3Rpb25zLCBzdW1tYXJ5VGV4dCxcbiAgICAgIHRyYXZlbE1vbnRoLCBpZCwgcHJvcGVydHlUeXBlXG4gICAgfSA9IGRldGFpbHMuaG90ZWw7XG4gICAgdGhpcy5kZXN0aW5hdGlvbkNpdHkgPSBjaXR5ID8gY2l0eS5uYW1lIDogY291bnRyeSA/IGNvdW50cnkubmFtZSA6ICcnO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uQ291bnRyeSA9IGNvdW50cnkgPyBjb3VudHJ5Lm5hbWUgOiBjaXR5ID8gY2l0eS5uYW1lIDogJyc7XG4gICAgY29uc3QgeyBmYXFzLCBzaW1pbGFySG90ZWxzLCB0ZXN0aW1vbmlhbHMsIG1ldGFUYWdzOiBtZXRhRGF0YSwgY2Fub25pY2FsVXJsLCBiYWNrVXJsIH0gPSBkZXRhaWxzO1xuICAgIGNvbnN0IG1vbnRoID0gdHJhdmVsTW9udGggfHwgbG9jYXRpb24ucXVlcnkudHJhdmVsTW9udGggfHwgZ2V0Q3VycmVudE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHR5cGUgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcGVydHlUeXBlIHx8ICdob3RlbCcpO1xuICAgIGNvbnN0IHBhcmVudFRpdGxlID0gYCR7dHlwZX1zIGluICR7Y2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIodGhpcy5kZXN0aW5hdGlvbkNpdHkpfWA7XG4gICAgY29uc3QgUG9wdWxhclBhY2thZ2VzQ29udGFpbmVyID0gUG9wdWxhclBhY2thZ2VzLmNvbnRhaW5lcjtcbiAgICBjb25zdCBUcmF2ZWxlclN0b3JpZXNDb250YWluZXIgPSBUcmF2ZWxlclN0b3JpZXMuY29udGFpbmVyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiYzVcIj5cbiAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICA8bGluayBocmVmPVwiLy9zMS50cmF2ZWx0cmlhbmdsZS5jb20vYXNzZXRzL25ld191aV9pbWFnZXMvZmF2aWNvbi0yNzJkMzU5NDVkYTcyYWZiMWQxOGIyNTRiMTcyM2U4Yi5pY29cIlxuICAgICAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiLy9zMS50cmF2ZWx0cmlhbmdsZS5jb20vYXNzZXRzL25ld191aV9pbWFnZXMvZmF2aWNvbi0yNzJkMzU5NDVkYTcyYWZiMWQxOGIyNTRiMTcyM2U4Yi5pY29cIlxuICAgICAgICAgICAgICAgIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICB7IGNyZWF0ZUhlbG1ldEJhbm5lcihtZXRhRGF0YSwgY2Fub25pY2FsVXJsLCBsb2NhdGlvbi5wYXRobmFtZSkgfVxuICAgICAgICAgIHsgIWRldGFpbHMuaXNQdWJsaXNoZWQgJiYgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiIC8+IH1cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzY4YzRjMVwiIC8+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlckxpbmV9IC8+XG4gICAgICAgIDxIZWFkZXJDb21tb24gLz5cbiAgICAgICAgPEhlYWRlclRpdGxlIHRpdGxlPXtwYXJlbnRUaXRsZSA/IHBhcmVudFRpdGxlIDogJyd9IGJhY2tVcmw9e2JhY2tVcmx9IHNob3dUaXRsZUFzSDE9e2ZhbHNlfS8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNjcm9sbEVsZW1lbnQgYWN0aXZlQ2xhc3M9XCJzaG93XCIgYm90dG9tQm91bmRhcnk9XCIjZml4ZWRNZW51RW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNiY3cgbWI4ICR7c3R5bGVzLm5hdn1gfT5cbiAgICAgICAgICAgICAgPEhvdGVsRGV0YWlsTmF2XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5oZWFkZXJDb25zdGFudHN9XG4gICAgICAgICAgICAgICAgTGluaz17c2Nyb2xsTGlua31cbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbj17dGhpcy5kZXN0aW5hdGlvbkNpdHkgfHwgZGVzdGluYXRpb25Db3VudHJ5fVxuICAgICAgICAgICAgICAgIGhvdGVsSWQ9e2lkfVxuICAgICAgICAgICAgICAgIHR5cGU9e21ha2VDYXBpdGFsaXplZFNlbnRlbmNlKHR5cGUsICdfJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1Njcm9sbEVsZW1lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOCBzYmN3IHAxNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgICAgPEhvdGVsRGV0YWlsSGVhZGVyIHsuLi57IGFkZHJlc3MsIGNvbnRhY3RJbmZvLCBzdGFyUmF0aW5nLCBob3RlbE5hbWUsIGhvdGVsRGlzcGxheU5hbWUsIHVzZXJSYXRpbmcsIGJ1ZGdldCwgbHV4dXJ5LFxuICAgICAgICAgICAgcmVjb21tZW5kZWQsbWFwLCBwcm94aW1pdHksIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbkNvdW50cnkgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIxNVwiPjxTbGlkZXJXaXRoVGh1bWJuYWlsIGltYWdlcz17c2xpZGVyUGljfSBob3RlbE5hbWU9e2hvdGVsTmFtZX0gLz48L2Rpdj5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcmljZVJhbmdlICYmIChwcmljZVJhbmdlLnByaWNlRnJvbSB8fCBwcmljZVJhbmdlLnByaWNlVG8pID9cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWI4XCI+PFByaWNlUmFuZ2UgcHJpY2VUaXRsZT17J1ByaWNlIFJhbmdlIHBlciBOaWdodCd9IHByaWNlUmFuZ2U9e3ByaWNlUmFuZ2V9IG1vbnRocz17bW9udGhzfSBtb250aD17bW9udGh9IHVwZGF0ZVByaWNlPXt1cGRhdGVNb250aH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxDVEEgZGVzdGluYXRpb249e2NhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKHRoaXMuZGVzdGluYXRpb25DaXR5IHx8IGRlc3RpbmF0aW9uQ291bnRyeSl9IGhvdGVsSWQ9e2lkfSB0eXBlPXttYWtlQ2FwaXRhbGl6ZWRTZW50ZW5jZSh0eXBlLCAnXycpfSAvPlxuXG4gICAgICAgICAgICB7LyogT3ZlcnZpZXcgRGF0YSAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIGhpZ2hsaWdodHMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJtYjggcDE1IHNiY3dcIj48Q2hlY2tMaXN0IGNoZWNrTGlzdD17aGlnaGxpZ2h0c30gLz48L2Rpdj4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGRpc3BsYXlTZWN0aW9ucy5vdmVydmlldyAmJiBkaXNwbGF5U2VjdGlvbnMub3ZlcnZpZXcuZGVzY3JpcHRpb24gP1xuICAgICAgICAgICAgPEVsZW1lbnQgbmFtZT1cIm92ZXJ2aWV3LXNlY1wiIGNsYXNzTmFtZT1cImNsZWFyZml4IHNiY3cgcDE1IG1iOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMTVcIj5cbiAgICAgICAgICAgICAgICA8UmVhZE1vcmVCeUhlaWdodFxuICAgICAgICAgICAgICAgICAgaGVhZGluZz17ZGlzcGxheVNlY3Rpb25zLm92ZXJ2aWV3LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0PXs2NH1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Rpc3BsYXlTZWN0aW9ucy5vdmVydmlldy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTZWN0aW9ucy5vdmVydmlldy50YWdzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0VGFicyB0YWdMaXN0PXtkaXNwbGF5U2VjdGlvbnMub3ZlcnZpZXcudGFnc30gLz4gOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvRWxlbWVudD4gOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgICAgICAgIDxHZXRDYWxsYmFja0Jhbm5lciBkZXN0aW5hdGlvbj17IGNhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKHRoaXMuZGVzdGluYXRpb25DaXR5KSB9IGhvdGVsSWQ9e2lkfSB0eXBlPXttYWtlQ2FwaXRhbGl6ZWRTZW50ZW5jZSh0eXBlLCAnXycpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qUm9vbXMgYW5kIFJvb20gVHlwZSovfVxuICAgICAgICB7XG4gICAgICAgICAgZGlzcGxheVNlY3Rpb25zLnJvb21zICYmIGRpc3BsYXlTZWN0aW9ucy5yb29tcy5kZXNjcmlwdGlvbiA/XG4gICAgICAgICAgICA8RWxlbWVudCBuYW1lPVwicm9vbXMtc2VjXCIgY2xhc3NOYW1lPVwicDE1IHNiY3cgbWI4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIxNVwiPlxuICAgICAgICAgICAgICAgIDxSZWFkTW9yZUJ5SGVpZ2h0XG4gICAgICAgICAgICAgICAgICBoZWFkaW5nPXtkaXNwbGF5U2VjdGlvbnMucm9vbXMudGl0bGV9XG4gICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ9ezY0fVxuICAgICAgICAgICAgICAgICAgY29udGVudD17ZGlzcGxheVNlY3Rpb25zLnJvb21zLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgaG90ZWxEaXNwbGF5TmFtZT17aG90ZWxEaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEhpZ2hsaWdodFRhYnMgdGFnTGlzdD17ZGlzcGxheVNlY3Rpb25zLnJvb21zLnRhZ3N9IC8+XG4gICAgICAgICAgICA8L0VsZW1lbnQ+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBkaXNwbGF5U2VjdGlvbnMuZmFjaWxpdGllcyAmJiBkaXNwbGF5U2VjdGlvbnMuZmFjaWxpdGllcy50YWdzLmxlbmd0aCB8fCBkaXNwbGF5U2VjdGlvbnMuZmFjaWxpdGllcy5kZXNjcmlwdGlvbiA/XG4gICAgICAgICAgICA8RWxlbWVudCBuYW1lPVwiZmFjaWxpdGllcy1zZWNcIiBjbGFzc05hbWU9XCJwMTUgc2JjdyBtYjhcIj5cbiAgICAgICAgICAgICAgPEFtZW5pdGllc1xuICAgICAgICAgICAgICAgIGFtZW5pdGllc0RhdGE9e2Rpc3BsYXlTZWN0aW9ucy5mYWNpbGl0aWVzfVxuICAgICAgICAgICAgICAgIGhvdGVsRGlzcGxheU5hbWU9e2hvdGVsRGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0VsZW1lbnQ+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBkaXNwbGF5U2VjdGlvbnMuZGluaW5nICYmIGRpc3BsYXlTZWN0aW9ucy5kaW5pbmcuZGVzY3JpcHRpb24gP1xuICAgICAgICAgICAgPEVsZW1lbnQgbmFtZT1cImRpbmluZy1zZWNcIiBjbGFzc05hbWU9XCJwMTUgc2JjdyBtYjhcIj5cbiAgICAgICAgICAgICAgICA8RGluaW5nQ3Vpc2luZSBjdWlzaW5lPXtkaXNwbGF5U2VjdGlvbnMuZGluaW5nfSBob3RlbERpc3BsYXlOYW1lPXtob3RlbERpc3BsYXlOYW1lfS8+XG4gICAgICAgICAgICA8L0VsZW1lbnQ+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjb25jbHVzaW9uVGV4dCA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBzYmN3IG1iOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaXVzMiBvdmVyZmxvd2ggZjE2IGZ3NCBmaXRhbGljIGJvcmRlciBwMTUgbTBcIj57cGFyc2VyLnBhcnNlKGNvbmNsdXNpb25UZXh0KX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgZmFxcyAmJiBmYXFzLmZhcXMgJiYgZmFxcy5mYXFzLmxlbmd0aCAgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IG1iOFwiPlxuICAgICAgICAgICAgICAgICAgPEZhcSBkYXRhPXtmYXFzfSBob3RlbERpc3BsYXlOYW1lPXtob3RlbERpc3BsYXlOYW1lfSAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBuZWFyYnlTZWN0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgPEVsZW1lbnQgbmFtZT1cIm5lYXJieS1zZWNcIiBjbGFzc05hbWU9XCJtYjggc2Jjd1wiPlxuICAgICAgICAgICAgICAgIDxOZWFyYnkgbmVhcmJ5VHlwZUxpc3Q9e25lYXJieVNlY3Rpb25zfS8+XG4gICAgICAgICAgICA8L0VsZW1lbnQ+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0aW1vbmlhbHMgJiYgdGVzdGltb25pYWxzLnRlc3RpbW9uaWFsTGlzdC5sZW5ndGggP1xuICAgICAgICAgICAgPEVsZW1lbnQgbmFtZT1cInRlc3RpbW9uaWFsLXNlY1wiIGNsYXNzTmFtZT1cInAxNSBzYmN3IG1iOFwiIGlkPVwidGVzdGltb25pYWxzXCI+XG4gICAgICAgICAgICAgICAgICA8SG90ZWxSZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgdGVzdGltb25pYWxzPXt0ZXN0aW1vbmlhbHN9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJSYXRpbmc9e3VzZXJSYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFsQ2hhbmdlSGFuZGxlcj17dmFsdWUgPT4gdXBkYXRlVGVzdGltb25pYWxzKHZhbHVlLCBwYXJhbXMuaG90ZWxOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgaG90ZWxEaXNwbGF5TmFtZT17aG90ZWxEaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvRWxlbWVudD4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHN1bW1hcnlUZXh0ID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHNiY3cgbWI4XCI+XG4gICAgICAgICAgICAgICAgPFJlYWRNb3JlQnlIZWlnaHRcbiAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJTdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodD17NjR9XG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtzdW1tYXJ5VGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWN0SW5mby5lbWFpbCB8fCBjb250YWN0SW5mby53ZWJzaXRlIHx8IGNvbnRhY3RJbmZvLnBob25lXG4gICAgICAgICAgfHwgY29udGFjdEluZm8uc2Vjb25kYXJ5UGhvbmVzICYmIGNvbnRhY3RJbmZvLnNlY29uZGFyeVBob25lcy5sZW5ndGggP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjggc2JjdyBwMTVcIj5cbiAgICAgICAgICAgICAgPEhvdGVsQ29udGFjdHMgey4uLnsgY29udGFjdEluZm8gfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgc2ltaWxhckhvdGVscy5ob3RlbHMgJiYgc2ltaWxhckhvdGVscy5ob3RlbHMubGVuZ3RoID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHNiY3cgbWI4XCI+XG4gICAgICAgICAgICAgICAgPFNpbWlsYXJIb3RlbHMgc2ltaWxhckhvdGVscz17c2ltaWxhckhvdGVsc30gbW9udGg9e21vbnRofSAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBwYWNrYWdlcyAmJiBwYWNrYWdlcy5sZW5ndGggP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IG1iOFwiIGlkPVwicGFja2FnZXMtc2VjXCI+XG4gICAgICAgICAgICAgICAgPFBvcHVsYXJQYWNrYWdlc0NvbnRhaW5lciB0aXRsZT17YCR7Y2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIodGhpcy5kZXN0aW5hdGlvbkNpdHkgfHwgZGVzdGluYXRpb25Db3VudHJ5KX0gUGFja2FnZXNgfSAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBtYjhcIj5cbiAgICAgICAgICAgIDxUcmF2ZWxlclN0b3JpZXNDb250YWluZXIgZGF0YT17e1xuICAgICAgICAgICAgICB0aXRsZTogYFRvcCBUcmF2ZWwgQmxvZ3MgZm9yICR7dGhpcy5kZXN0aW5hdGlvbkNpdHkgfHwgZGVzdGluYXRpb25Db3VudHJ5fWAsXG4gICAgICAgICAgICB9fSBjb25maWc9e3sgY3NyOiB0cnVlIH19IGRlc3RpbmF0aW9uPXt0aGlzLmRlc3RpbmF0aW9uQ2l0eSB8fCBkZXN0aW5hdGlvbkNvdW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdBbGw9XCIvYmxvZy90cmF2ZWxvZ3Vlcz9yZWZlcmVyPXRyYXZlbG9ndWVfaG90ZWxfZGV0YWlsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJmaXhlZE1lbnVFbmRcIiAvPlxuICAgICAgICA8Rml4ZWRNZW51IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHNiY3cgbWI4XCI+XG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iIGJyZWFkY3J1bWJzPXtkZXRhaWxzLmJyZWFkY3J1bWJzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3XCI+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSGRwLnByb3BUeXBlcyA9IHtcbiAgZGV0YWlsczogUHJvcFR5cGVzLm9iamVjdCxcbiAgdXBkYXRlVGVzdGltb25pYWxzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXBkYXRlTW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhY2thZ2VzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGJhY2tVcmw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkhkcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRldGFpbHM6IHt9LFxuICBwYWNrYWdlczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhkcDtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwiXzJvZDVicFU3RWVydG1yOXdCS1NqVVBcIixcblx0XCJib3JkZXJMaW5lXCI6IFwiXzJpdFN1U2g3azE2alkxdnlIcXp3U3VcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJEcm9wZG93bi1yb290XCI6IFwiX05MeUNfXCIsXG5cdFwiRHJvcGRvd24tY29udHJvbFwiOiBcIl9oZmZIdVwiLFxuXHRcIkRyb3Bkb3duLW1lbnVcIjogXCJfM3N0SnhcIixcblx0XCJEcm9wZG93bi1ncm91cFwiOiBcIl8zM2xqcVwiLFxuXHRcIkRyb3Bkb3duLXRpdGxlXCI6IFwiXzNPUHNDXCIsXG5cdFwiRHJvcGRvd24tb3B0aW9uXCI6IFwiXzJ5VEJFXCIsXG5cdFwiRHJvcGRvd24tbm9yZXN1bHRzXCI6IFwiX1FLa2dNXCIsXG5cdFwiaW5wdXQtZHJvcGRvd24tYm94XCI6IFwiX05yWFMtXCIsXG5cdFwiaW5wdXQtZHJvcGRvd24tYm94LXNtYWxsXCI6IFwiXzNtVkZoXCIsXG5cdFwiaW5wdXQtZHJvcGRvd24tYm94LWxvbmdcIjogXCJfcENKY2NcIixcblx0XCJpbnB1dC13aXRoLWljb24tYm94XCI6IFwiXzJ1cEhnXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==