require("source-map-support").install();
exports.ids = ["quote-itinerary"];
exports.modules = {

/***/ "./app-v2/modules/quote/itinerary/detail/ItineraryDetail.js":
/*!******************************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/detail/ItineraryDetail.js ***!
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

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _pdmHelpers = __webpack_require__(/*! helpers/pdmHelpers */ "./app/helpers/pdmHelpers.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _index = _interopRequireDefault(__webpack_require__(/*! modules/requestCallback/index */ "./app-v2/modules/requestCallback/index.js"));

var _ItineraryByDay = _interopRequireDefault(__webpack_require__(/*! ./components/ItineraryByDay */ "./app-v2/modules/quote/itinerary/detail/components/ItineraryByDay.js"));

var _AgentChatButton = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/AgentChatButton */ "./app-v2/modules/quote/shared/AgentChatButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GItineraryDetailDiv = _glamorous.default.div({
  height: 'calc(100vh - 100px)',
  overflowY: 'auto'
});

const ItineraryDetail = ({
  tripId,
  quoteId,
  itineraryInfo,
  trackSegment,
  setPdmCategory,
  showHidePdmView,
  location
}) => {
  const trackSegmentEvent = (event, cta, object) => {
    trackSegment({
      event,
      section: 'itinerary',
      object: object || '',
      cta
    });
  };

  const handleChatClick = () => {
    setPdmCategory(_pdmHelpers.PDM_CATEGORY_ITINERARY);
    showHidePdmView(true);
    trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Edit Package', 'Main');
  };

  const daySelected = parseInt(location.query.day) || 1;
  return _react.default.createElement(_reactScroll.Element, {
    name: "itinerary-sec"
  }, _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "sbcw p15 flex relative pl48 bs6"
  }, _react.default.createElement(_reactRouter.Link, {
    to: (0, _urlHelpers.quoteDetailPath)(tripId, quoteId),
    className: "absolute-center-v l10 mr8 input-24 p5 iblock"
  }, _react.default.createElement(_Icon.CloseDark, null)), _react.default.createElement("p", {
    className: "f16a m0 fw9 pfc3 flexFull flex alignCenter ellipsis"
  }, "Itinerary"), _react.default.createElement("div", {
    className: "absolute-center-v r10"
  }, _react.default.createElement(_index.default, {
    isIcononly: true,
    isWhiteIcon: false
  }))), _react.default.createElement(GItineraryDetailDiv, null, _react.default.createElement("div", {
    className: "m8"
  }, itineraryInfo.map((item, i) => _react.default.createElement(_ItineraryByDay.default, {
    detail: item,
    day: i + 1,
    defaultOpen: i + 1 === daySelected,
    trackSegmentEvent: trackSegmentEvent,
    setPdmCategory: setPdmCategory,
    showHidePdmView: showHidePdmView,
    key: i
  }))), _react.default.createElement("div", {
    className: "fixed z5 b0 l0 wfull"
  }, _react.default.createElement(_AgentChatButton.default, {
    name: "Edit Package",
    textClassName: "btn-filled-pri-large wfull radius2 pl8 pr8",
    handleChatClick: handleChatClick
  })))));
};

ItineraryDetail.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  itineraryInfo: _propTypes.default.array,
  location: _propTypes.default.object.isRequired,
  trackSegment: _propTypes.default.func,
  showHidePdmView: _propTypes.default.func,
  setPdmCategory: _propTypes.default.func
};
ItineraryDetail.defaultProps = {
  itineraryInfo: [],
  tracksegment: () => {},
  setPdmCategory: () => {},
  showHidePdmView: () => {}
};
var _default = ItineraryDetail;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/detail/components/ItineraryByDay.js":
/*!****************************************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/detail/components/ItineraryByDay.js ***!
  \****************************************************************************/
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

var _helper = __webpack_require__(/*! ../../helper */ "./app-v2/modules/quote/itinerary/helper.js");

var _ItineraryCard = _interopRequireDefault(__webpack_require__(/*! ./ItineraryCard */ "./app-v2/modules/quote/itinerary/detail/components/ItineraryCard.js"));

var _ItineraryHeading = _interopRequireDefault(__webpack_require__(/*! ./ItineraryHeading */ "./app-v2/modules/quote/itinerary/detail/components/ItineraryHeading.js"));

var _activityConstant = __webpack_require__(/*! constants/activityConstant */ "./app/constants/activityConstant.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GItineraryItemDiv = _glamorous.default.div({
  '&::after': {
    content: '\' \'',
    position: 'absolute',
    bottom: '0',
    right: '0',
    height: '1px',
    background: '#F2F2F2',
    width: '100%'
  }
});

const GItineraryByDayDiv = _glamorous.default.div({
  '& .itineraryday_checkbox + label': {
    '& .itineraryByDayBody': {
      height: '0',
      overflow: 'hidden'
    }
  },
  '& .itineraryday_checkbox:checked + label': {
    '& .itineraryDownArrow': {
      transform: 'rotate(180deg)'
    },
    '& .itineraryByDayBody': {
      height: 'auto'
    }
  }
});

const ItineraryByDay = ({
  detail,
  day,
  defaultOpen,
  trackSegmentEvent
}) => {
  return _react.default.createElement(GItineraryByDayDiv, {
    className: "sbcw radius2 mb8"
  }, _react.default.createElement("input", {
    name: "quote_itinerary",
    className: "nblock itineraryday_checkbox",
    defaultChecked: defaultOpen,
    type: "radio",
    id: `itineraryday_${day}`
  }), _react.default.createElement("label", {
    className: "block clearfix",
    htmlFor: `itineraryday_${day}`
  }, _react.default.createElement("div", {
    className: "itineraryByDayData"
  }, Object.keys(detail).map((section, i) => {
    if (detail[section].sectionType === _activityConstant.ACTIVITY.itinerary) {
      return _react.default.createElement("div", {
        key: i,
        className: "itineraryByDayHead"
      }, _react.default.createElement(_ItineraryHeading.default, {
        item: detail[section],
        trackSegmentEvent: trackSegmentEvent,
        days: day
      }));
    }
  }), Object.keys(detail).map(sectionId => {
    const section = detail[sectionId];

    if (section.sectionType === _activityConstant.ACTIVITY.itinerary) {
      return section.description ? _react.default.createElement("div", {
        key: sectionId,
        className: "itineraryByDayBody"
      }, _react.default.createElement(GItineraryItemDiv, {
        className: "p15 relative"
      }, _react.default.createElement(_ShowMore.default, _extends({}, (0, _helper.getShowMoreText)(section.description, 125), {
        showMoreText: "Read More",
        showLessText: "Read Less"
      })))) : null;
    } else {
      return _react.default.createElement("div", {
        key: sectionId,
        className: "itineraryByDayBody"
      }, _react.default.createElement(GItineraryItemDiv, {
        className: "p15 relative"
      }, _react.default.createElement(_ItineraryCard.default, {
        item: section,
        trackSegmentEvent: trackSegmentEvent,
        day: day
      })));
    }
  }))));
};

ItineraryByDay.propTypes = {
  detail: _propTypes.default.object,
  day: _propTypes.default.number,
  defaultOpen: _propTypes.default.bool,
  trackSegmentEvent: _propTypes.default.func,
  showHidePdmView: _propTypes.default.func,
  setPdmCategory: _propTypes.default.func
};
ItineraryByDay.defaultProps = {
  detail: [],
  day: '',
  defaultOpen: false,
  trackSegmentEvent: () => {},
  setPdmCategory: () => {},
  showHidePdmView: () => {}
};
var _default = ItineraryByDay;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/detail/components/ItineraryCard.js":
/*!***************************************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/detail/components/ItineraryCard.js ***!
  \***************************************************************************/
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _helper = __webpack_require__(/*! ../../helper */ "./app-v2/modules/quote/itinerary/helper.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _HotelOrAirportDetails = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/HotelOrAirportDetails */ "./app-v2/modules/quote/shared/HotelOrAirportDetails.js"));

var _ItinerarySlider = _interopRequireDefault(__webpack_require__(/*! ./ItinerarySlider */ "./app-v2/modules/quote/itinerary/detail/components/ItinerarySlider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const icons = {
  cab: _Icon.CabIconFront,
  flight: _Icon.Flights,
  hotel: _Icon.Hotel,
  attraction: _Icon.Sightseeing
};

const GItiImgDiv = _glamorous.default.div({
  height: '200px',
  '& img': {
    minHeight: '200px !important'
  }
});

let ItineraryCard = class ItineraryCard extends _react.default.Component {
  constructor(props) {
    super(props);

    this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    };

    this.handlViewDetailClick = () => {
      const object = `Day<${this.props.day}>::Activity<${this.props.item.sectionType}>`;
      this.props.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'View Details', object);
    };

    this.handlReadMoreClick = () => {
      const object = `Day<${this.props.day}>::Activity<${this.props.item.sectionType}>`;
      this.props.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Read More', object);
    };

    this.state = {
      closeModal: true
    };
  }

  render() {
    const item = this.props.item;
    const Icon = icons[item.sectionType];
    const otherDetails = item.otherDetails;
    const imagesUrl = item.imagesUrl || otherDetails && otherDetails.imagesUrl || [];
    const images = item.sectionType === 'hotel' ? imagesUrl.map(imageUrl => ({
      url: imageUrl.url
    })) : imagesUrl.map(imageUrl => ({
      url: imageUrl
    }));
    return _react.default.createElement("div", {
      className: "relative pl24"
    }, _react.default.createElement("span", {
      className: "input-24 block absolute l0 t5"
    }, _react.default.createElement(Icon, null)), _react.default.createElement("div", {
      className: "pl15"
    }, _react.default.createElement("h4", {
      className: "f16 fw9 mb4"
    }, item.title), item.eventTime ? _react.default.createElement("p", {
      className: "f12 pfc4 mb8 at_eventTime"
    }, item.eventTime) : null, _react.default.createElement("div", {
      className: "at_readMore",
      onClick: this.handlReadMoreClick
    }, _react.default.createElement(_ShowMore.default, _extends({}, (0, _helper.getShowMoreText)(item.description, 125), {
      showMoreText: "Read More",
      showLessText: "Read Less"
    }))), _react.default.createElement(GItiImgDiv, {
      className: "row row- relative mt15 mb8 overflowh"
    }, item.imagesUrl && item.imagesUrl.length ? _react.default.createElement(_Swiper.default, {
      slideClass: "slide",
      spaceBetween: 8,
      slidesPerView: "auto",
      rebuildOnUpdate: true
    }, images.map((imageUrl, i) => _react.default.createElement(_ItinerarySlider.default, {
      key: i,
      imgSrc: imageUrl.url,
      images: images
    }))) : null), item.otherDetails ? _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("span", {
        className: "block f14 sfc1 cursorP text-right at_viewDetail",
        onClick: this.handlViewDetailClick
      }, "View Details"),
      fullView: true,
      customCloseTrigger: this.state.closeModal,
      hasCustomClose: true
    }, _react.default.createElement(_HotelOrAirportDetails.default, {
      info: (0, _helper.getHotelOrAirportDetails)(_objectSpread({}, item.otherDetails, {
        images: images
      })),
      closeModal: this.closePopup
    })) : null));
  }

};
var _default = ItineraryCard;
exports.default = _default;
ItineraryCard.propTypes = {
  item: _propTypes.default.shape({
    sectionType: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    eventTime: _propTypes.default.string,
    imagesUrl: _propTypes.default.array
  }).isRequired,
  trackSegmentEvent: _propTypes.default.func,
  day: _propTypes.default.number.isRequired
};
ItineraryCard.defaultProps = {
  item: {},
  trackSegmentEvent: () => {}
};

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/detail/components/ItineraryHeading.js":
/*!******************************************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/detail/components/ItineraryHeading.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItineraryHeading = ({
  item,
  days,
  trackSegmentEvent
}) => {
  return _react.default.createElement("div", {
    className: "flex alignCenter spaceBetween p15 bb"
  }, _react.default.createElement("div", {
    className: "flexFull"
  }, _react.default.createElement("div", {
    className: "flex alignCenter"
  }, _react.default.createElement("h4", {
    className: "f16 fw9 m0 mr8 mb5 at_itineraryHeading"
  }, `Day ${days}`), item.eventTime ? _react.default.createElement("p", {
    className: "f12 pfc4 m0 at_eventTime"
  }, item.eventTime) : null), _react.default.createElement("p", {
    className: "f14"
  }, item.title)), _react.default.createElement("span", {
    className: "itineraryDownArrow input-24 block p5 flex alignCenter justifyCenter",
    onClick: () => trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'drop down', `Day<${days}>`)
  }, _react.default.createElement(_Icon.DownArrow, null)));
};

var _default = ItineraryHeading;
exports.default = _default;
ItineraryHeading.propTypes = {
  item: _propTypes.default.shape({
    sectionType: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    eventTime: _propTypes.default.string,
    imagesUrl: _propTypes.default.array
  }).isRequired,
  trackSegmentEvent: _propTypes.default.func,
  days: _propTypes.default.number.isRequired
};

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/detail/components/ItinerarySlider.js":
/*!*****************************************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/detail/components/ItinerarySlider.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _FullWidthSlider = _interopRequireDefault(__webpack_require__(/*! modules/shared/carousel/FullWidthSlider */ "./app-v2/modules/shared/carousel/FullWidthSlider.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItinerarySlider = ({
  images,
  imgSrc
}) => {
  const imagesUrl = images.map(i => i.url);
  return _react.default.createElement(_GenericModal.default, {
    trigger: _react.default.createElement(_Img.default, {
      ikSrc: imgSrc,
      alt: "activity"
    }),
    fullView: true,
    hasCustomClose: true
  }, _react.default.createElement(_FullWidthSlider.default, {
    images: imagesUrl
  }));
};

ItinerarySlider.propTypes = {
  images: _propTypes.default.array.isRequired,
  imgSrc: _propTypes.default.string.isRequired
};
var _default = ItinerarySlider;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/detail/index.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/detail/index.js ***!
  \********************************************************/
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

var _quoteList = __webpack_require__(/*! modules/quote/actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _constants = __webpack_require__(/*! modules/quote/actions/constants */ "./app-v2/modules/quote/actions/constants.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _action = __webpack_require__(/*! modules/discountEngine/action */ "./app-v2/modules/discountEngine/action.js");

var _action2 = __webpack_require__(/*! modules/pdm/action */ "./app-v2/modules/pdm/action.js");

var _helper = __webpack_require__(/*! ../helper */ "./app-v2/modules/quote/itinerary/helper.js");

var _quoteActivities2 = __webpack_require__(/*! modules/quote/reducers/quoteActivities */ "./app-v2/modules/quote/reducers/quoteActivities.js");

var _quoteList2 = __webpack_require__(/*! ../../reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _ItineraryDetail = _interopRequireDefault(__webpack_require__(/*! ./ItineraryDetail */ "./app-v2/modules/quote/itinerary/detail/ItineraryDetail.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const currentQuote = (0, _quoteList2.getCurrentQuote)(state);
  return {
    itineraryInfo: (0, _helper.results)(currentQuote),
    tripId: (0, _quoteActivities2.getTripId)(state),
    quoteId: currentQuote.id
  };
}, {
  setPdmCategory: _action2.setPdmCategory,
  showHidePdmView: _action2.showHidePdmView
})(_ItineraryDetail.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/helper.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/helper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowMoreText = exports.getHotelOrAirportDetails = exports.results = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const results = quote => {
  return quote.newFormatTripDays || [];
};

exports.results = results;

const getHotelOrAirportDetails = (info = {}) => {
  return {
    name: info.name,
    email: info.email,
    phone: info.phone,
    description: info.hotelDesc || info.airportDes,
    lat: info.lat,
    long: info.long,
    address: info.address,
    rating: info.ratings,
    webUrl: info.webUrl,
    images: info.images
  };
};

exports.getHotelOrAirportDetails = getHotelOrAirportDetails;

const getShowMoreText = (text, breakAt) => {
  const wrapText = text ? text.substr(0, breakAt) : '';
  const moreText = text && text.length > breakAt ? text.substr(breakAt) : '';
  return {
    wrapText: wrapText && wrapText.split('\n').map((i, key) => {
      return _react.default.createElement("span", {
        key: key
      }, i);
    }),
    moreText: moreText && moreText.split('\n').map((text, key) => {
      return key === 0 ? _react.default.createElement("span", {
        key: key
      }, text) : _react.default.createElement("div", {
        key: key
      }, text);
    })
  };
};

exports.getShowMoreText = getShowMoreText;

/***/ }),

/***/ "./app/constants/activityConstant.js":
/*!*******************************************!*\
  !*** ./app/constants/activityConstant.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIVITY = void 0;
const ACTIVITY = Object.freeze({
  flight: 'flight',
  itinerary: 'itinerary',
  cab: 'cab',
  hotel: 'hotel',
  attraction: 'attraction'
});
exports.ACTIVITY = ACTIVITY;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9pdGluZXJhcnkvZGV0YWlsL0l0aW5lcmFyeURldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9pdGluZXJhcnkvZGV0YWlsL2NvbXBvbmVudHMvSXRpbmVyYXJ5QnlEYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvaXRpbmVyYXJ5L2RldGFpbC9jb21wb25lbnRzL0l0aW5lcmFyeUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvaXRpbmVyYXJ5L2RldGFpbC9jb21wb25lbnRzL0l0aW5lcmFyeUhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvaXRpbmVyYXJ5L2RldGFpbC9jb21wb25lbnRzL0l0aW5lcmFyeVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9pdGluZXJhcnkvZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2l0aW5lcmFyeS9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnN0YW50cy9hY3Rpdml0eUNvbnN0YW50LmpzIl0sIm5hbWVzIjpbIkdJdGluZXJhcnlEZXRhaWxEaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJJdGluZXJhcnlEZXRhaWwiLCJ0cmlwSWQiLCJxdW90ZUlkIiwiaXRpbmVyYXJ5SW5mbyIsInRyYWNrU2VnbWVudCIsInNldFBkbUNhdGVnb3J5Iiwic2hvd0hpZGVQZG1WaWV3IiwibG9jYXRpb24iLCJ0cmFja1NlZ21lbnRFdmVudCIsImV2ZW50IiwiY3RhIiwib2JqZWN0Iiwic2VjdGlvbiIsImhhbmRsZUNoYXRDbGljayIsIlBETV9DQVRFR09SWV9JVElORVJBUlkiLCJPUkdBTklTTV9DTElDS0VEIiwiZGF5U2VsZWN0ZWQiLCJwYXJzZUludCIsInF1ZXJ5IiwiZGF5IiwibWFwIiwiaXRlbSIsImkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidHJhY2tzZWdtZW50IiwiR0l0aW5lcmFyeUl0ZW1EaXYiLCJjb250ZW50IiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImJhY2tncm91bmQiLCJ3aWR0aCIsIkdJdGluZXJhcnlCeURheURpdiIsIm92ZXJmbG93IiwidHJhbnNmb3JtIiwiSXRpbmVyYXJ5QnlEYXkiLCJkZXRhaWwiLCJkZWZhdWx0T3BlbiIsIk9iamVjdCIsImtleXMiLCJzZWN0aW9uVHlwZSIsIkFDVElWSVRZIiwiaXRpbmVyYXJ5Iiwic2VjdGlvbklkIiwiZGVzY3JpcHRpb24iLCJib29sIiwiaWNvbnMiLCJjYWIiLCJDYWJJY29uRnJvbnQiLCJmbGlnaHQiLCJGbGlnaHRzIiwiaG90ZWwiLCJIb3RlbCIsImF0dHJhY3Rpb24iLCJTaWdodHNlZWluZyIsIkdJdGlJbWdEaXYiLCJtaW5IZWlnaHQiLCJJdGluZXJhcnlDYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY2xvc2VQb3B1cCIsInNldFN0YXRlIiwiY2xvc2VNb2RhbCIsImhhbmRsVmlld0RldGFpbENsaWNrIiwiaGFuZGxSZWFkTW9yZUNsaWNrIiwic3RhdGUiLCJyZW5kZXIiLCJJY29uIiwib3RoZXJEZXRhaWxzIiwiaW1hZ2VzVXJsIiwiaW1hZ2VzIiwiaW1hZ2VVcmwiLCJ1cmwiLCJ0aXRsZSIsImV2ZW50VGltZSIsImxlbmd0aCIsInNoYXBlIiwic3RyaW5nIiwiSXRpbmVyYXJ5SGVhZGluZyIsImRheXMiLCJJdGluZXJhcnlTbGlkZXIiLCJpbWdTcmMiLCJjb250YWluZXIiLCJjdXJyZW50UXVvdGUiLCJpZCIsIkl0aW5lcmFyeSIsIndlYnZpZXdBY3Rpb25zIiwiZmV0Y2hRdW90ZXNEYXRhIiwibG9hZENvbnN0YW50cyIsImZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIiwiZmV0Y2hEaXNjb3VudE9mZmVycyIsInN3aXRjaFF1b3RlIiwidXBkYXRlUmVxdWVzdGVkVHJpcElkIiwicmVzdWx0cyIsInF1b3RlIiwibmV3Rm9ybWF0VHJpcERheXMiLCJnZXRIb3RlbE9yQWlycG9ydERldGFpbHMiLCJpbmZvIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJob3RlbERlc2MiLCJhaXJwb3J0RGVzIiwibGF0IiwibG9uZyIsImFkZHJlc3MiLCJyYXRpbmciLCJyYXRpbmdzIiwid2ViVXJsIiwiZ2V0U2hvd01vcmVUZXh0IiwidGV4dCIsImJyZWFrQXQiLCJ3cmFwVGV4dCIsInN1YnN0ciIsIm1vcmVUZXh0Iiwic3BsaXQiLCJrZXkiLCJmcmVlemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLHNCQUFzQkMsbUJBQVVDLEdBQVYsQ0FBYztBQUN4Q0MsVUFBUSxxQkFEZ0M7QUFFeENDLGFBQVc7QUFGNkIsQ0FBZCxDQUE1Qjs7QUFLQSxNQUFNQyxrQkFBa0IsQ0FBQztBQUNFQyxRQURGO0FBRUVDLFNBRkY7QUFHRUMsZUFIRjtBQUlFQyxjQUpGO0FBS0VDLGdCQUxGO0FBTUVDLGlCQU5GO0FBT0VDO0FBUEYsQ0FBRCxLQVFPO0FBQzdCLFFBQU1DLG9CQUFvQixDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsTUFBYixLQUF3QjtBQUNoRFAsaUJBQWE7QUFDWEssV0FEVztBQUVYRyxlQUFTLFdBRkU7QUFHWEQsY0FBUUEsVUFBVSxFQUhQO0FBSVhEO0FBSlcsS0FBYjtBQU1ELEdBUEQ7O0FBU0EsUUFBTUcsa0JBQWtCLE1BQU07QUFDNUJSLG1CQUFlUyxrQ0FBZjtBQUNBUixvQkFBZ0IsSUFBaEI7QUFDQUUsc0JBQWtCTywrQkFBbEIsRUFBb0Ms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LENBQVksQ0FBWixFQUFlRixPQUFmLENBQVAsR0FBaUMsRUFBbEQ7QUFDQSxRQUFNRyxXQUFXSixRQUFRQSxLQUFLbkMsTUFBTCxHQUFjb0MsT0FBdEIsR0FBZ0NELEtBQUtHLE1BQUwsQ0FBWUYsT0FBWixDQUFoQyxHQUF1RCxFQUF4RTtBQUVBLFNBQU87QUFDTEMsY0FBVUEsWUFBWUEsU0FBU0csS0FBVCxDQUFlLElBQWYsRUFBcUJ2RyxHQUFyQixDQUF5QixDQUFDRSxDQUFELEVBQUlzRyxHQUFKLEtBQVk7QUFDekQsYUFBTztBQUFNLGFBQUtBO0FBQVgsU0FBaUJ0RyxDQUFqQixDQUFQO0FBQ0QsS0FGcUIsQ0FEakI7QUFJTG9HLGNBQVVBLFlBQVlBLFNBQVNDLEtBQVQsQ0FBZSxJQUFmLEVBQXFCdkcsR0FBckIsQ0FBeUIsQ0FBQ2tHLElBQUQsRUFBT00sR0FBUCxLQUFlO0FBQzVELGFBQU9BLFFBQVEsQ0FBUixHQUFZO0FBQU0sYUFBS0E7QUFBWCxTQUFpQk4sSUFBakIsQ0FBWixHQUE0QztBQUFLLGFBQUtNO0FBQVYsU0FBZ0JOLElBQWhCLENBQW5EO0FBQ0QsS0FGcUI7QUFKakIsR0FBUDtBQVFELENBWk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLE1BQU12RSxXQUFXSCxPQUFPaUYsTUFBUCxDQUFjO0FBQ3BDdEUsVUFBUSxRQUQ0QjtBQUVwQ1AsYUFBVyxXQUZ5QjtBQUdwQ0ssT0FBSyxLQUgrQjtBQUlwQ0ksU0FBTyxPQUo2QjtBQUtwQ0UsY0FBWTtBQUx3QixDQUFkLENBQWpCIiwiZmlsZSI6InF1b3RlLWl0aW5lcmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSBcImdsYW1vcm91c1wiO1xuXG5pbXBvcnQgeyBDbG9zZURhcmsgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBQRE1fQ0FURUdPUllfSVRJTkVSQVJZIH0gZnJvbSAnaGVscGVycy9wZG1IZWxwZXJzJztcbmltcG9ydCB7IHF1b3RlRGV0YWlsUGF0aCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBSZXF1ZXN0Q2FsbGJhY2sgZnJvbSAnbW9kdWxlcy9yZXF1ZXN0Q2FsbGJhY2svaW5kZXgnO1xuaW1wb3J0IEl0aW5lcmFyeUJ5RGF5IGZyb20gJy4vY29tcG9uZW50cy9JdGluZXJhcnlCeURheSc7XG5pbXBvcnQgQWdlbnRDaGF0QnV0dG9uIGZyb20gJ21vZHVsZXMvcXVvdGUvc2hhcmVkL0FnZW50Q2hhdEJ1dHRvbic7XG5cbmNvbnN0IEdJdGluZXJhcnlEZXRhaWxEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KScsXG4gIG92ZXJmbG93WTogJ2F1dG8nLFxufSk7XG5cbmNvbnN0IEl0aW5lcmFyeURldGFpbCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlwSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRpbmVyYXJ5SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBkbUNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0hpZGVQZG1WaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gIGNvbnN0IHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBjdGEsIG9iamVjdCkgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudCxcbiAgICAgIHNlY3Rpb246ICdpdGluZXJhcnknLFxuICAgICAgb2JqZWN0OiBvYmplY3QgfHwgJycsXG4gICAgICBjdGFcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0UGRtQ2F0ZWdvcnkoUERNX0NBVEVHT1JZX0lUSU5FUkFSWSk7XG4gICAgc2hvd0hpZGVQZG1WaWV3KHRydWUpO1xuICAgIHRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdFZGl0IFBhY2thZ2UnLCAnTWFpbicpO1xuICB9O1xuXG4gIGNvbnN0IGRheVNlbGVjdGVkID0gcGFyc2VJbnQobG9jYXRpb24ucXVlcnkuZGF5KSB8fCAxO1xuXG4gIHJldHVybiAoXG4gICAgPEVsZW1lbnQgbmFtZT1cIml0aW5lcmFyeS1zZWNcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwMTUgZmxleCByZWxhdGl2ZSBwbDQ4IGJzNlwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz17cXVvdGVEZXRhaWxQYXRoKHRyaXBJZCwgcXVvdGVJZCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXItdiBsMTAgbXI4IGlucHV0LTI0IHA1IGlibG9ja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENsb3NlRGFyayAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTZhIG0wIGZ3OSBwZmMzIGZsZXhGdWxsIGZsZXggYWxpZ25DZW50ZXIgZWxsaXBzaXNcIj5cbiAgICAgICAgICAgIEl0aW5lcmFyeVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlLWNlbnRlci12IHIxMFwiPlxuICAgICAgICAgICAgPFJlcXVlc3RDYWxsYmFjayBpc0ljb25vbmx5PXt0cnVlfSBpc1doaXRlSWNvbj17ZmFsc2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8R0l0aW5lcmFyeURldGFpbERpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm04XCI+XG4gICAgICAgICAgICB7aXRpbmVyYXJ5SW5mby5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPEl0aW5lcmFyeUJ5RGF5XG4gICAgICAgICAgICAgICAgZGV0YWlsPXtpdGVtfVxuICAgICAgICAgICAgICAgIGRheT17aSArIDF9XG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZW49e2kgKyAxID09PSBkYXlTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dHJhY2tTZWdtZW50RXZlbnR9XG4gICAgICAgICAgICAgICAgc2V0UGRtQ2F0ZWdvcnk9e3NldFBkbUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIHNob3dIaWRlUGRtVmlldz17c2hvd0hpZGVQZG1WaWV3fVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgejUgYjAgbDAgd2Z1bGxcIj5cbiAgICAgICAgICAgIDxBZ2VudENoYXRCdXR0b24gbmFtZT1cIkVkaXQgUGFja2FnZVwiIHRleHRDbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCByYWRpdXMyIHBsOCBwcjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGF0Q2xpY2s9e2hhbmRsZUNoYXRDbGlja30gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0dJdGluZXJhcnlEZXRhaWxEaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0VsZW1lbnQ+XG4gICk7XG59O1xuXG5JdGluZXJhcnlEZXRhaWwucHJvcFR5cGVzID0ge1xuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBpdGluZXJhcnlJbmZvOiBQcm9wVHlwZXMuYXJyYXksXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNob3dIaWRlUGRtVmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gIHNldFBkbUNhdGVnb3J5OiBQcm9wVHlwZXMuZnVuY1xufTtcbkl0aW5lcmFyeURldGFpbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGl0aW5lcmFyeUluZm86IFtdLFxuICB0cmFja3NlZ21lbnQ6ICgpID0+IHt9LFxuICBzZXRQZG1DYXRlZ29yeTogKCkgPT4ge30sXG4gIHNob3dIaWRlUGRtVmlldzogKCkgPT4ge31cbn07XG5leHBvcnQgZGVmYXVsdCBJdGluZXJhcnlEZXRhaWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgZ2V0U2hvd01vcmVUZXh0IH0gZnJvbSAnLi4vLi4vaGVscGVyJztcbmltcG9ydCBJdGluZXJhcnlDYXJkIGZyb20gJy4vSXRpbmVyYXJ5Q2FyZCc7XG5pbXBvcnQgSXRpbmVyYXJ5SGVhZGluZyBmcm9tICcuL0l0aW5lcmFyeUhlYWRpbmcnO1xuaW1wb3J0IHsgQUNUSVZJVFkgfSBmcm9tICdjb25zdGFudHMvYWN0aXZpdHlDb25zdGFudCc7XG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUnO1xuXG5jb25zdCBHSXRpbmVyYXJ5SXRlbURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJjo6YWZ0ZXInOiB7XG4gICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogJzAnLFxuICAgIHJpZ2h0OiAnMCcsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnI0YyRjJGMicsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59KTtcblxuY29uc3QgR0l0aW5lcmFyeUJ5RGF5RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmIC5pdGluZXJhcnlkYXlfY2hlY2tib3ggKyBsYWJlbCc6IHtcbiAgICAnJiAuaXRpbmVyYXJ5QnlEYXlCb2R5Jzoge1xuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuICB9LFxuICAnJiAuaXRpbmVyYXJ5ZGF5X2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbCc6IHtcbiAgICAnJiAuaXRpbmVyYXJ5RG93bkFycm93Jzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxuICAgIH0sXG4gICAgJyYgLml0aW5lcmFyeUJ5RGF5Qm9keSc6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgSXRpbmVyYXJ5QnlEYXkgPSAoeyBkZXRhaWwsIGRheSwgZGVmYXVsdE9wZW4sIHRyYWNrU2VnbWVudEV2ZW50IH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxHSXRpbmVyYXJ5QnlEYXlEaXYgY2xhc3NOYW1lPVwic2JjdyByYWRpdXMyIG1iOFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9XCJxdW90ZV9pdGluZXJhcnlcIlxuICAgICAgICBjbGFzc05hbWU9XCJuYmxvY2sgaXRpbmVyYXJ5ZGF5X2NoZWNrYm94XCJcbiAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2RlZmF1bHRPcGVufVxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBpZD17YGl0aW5lcmFyeWRheV8ke2RheX1gfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBjbGVhcmZpeFwiIGh0bWxGb3I9e2BpdGluZXJhcnlkYXlfJHtkYXl9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRpbmVyYXJ5QnlEYXlEYXRhXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGV0YWlsKS5tYXAoKHNlY3Rpb24sIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRldGFpbFtzZWN0aW9uXS5zZWN0aW9uVHlwZSA9PT0gQUNUSVZJVFkuaXRpbmVyYXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpdGluZXJhcnlCeURheUhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEl0aW5lcmFyeUhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtkZXRhaWxbc2VjdGlvbl19XG4gICAgICAgICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50RXZlbnQ9e3RyYWNrU2VnbWVudEV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIGRheXM9e2RheX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRldGFpbCkubWFwKChzZWN0aW9uSWQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRldGFpbFtzZWN0aW9uSWRdO1xuICAgICAgICAgICAgICBpZiAoc2VjdGlvbi5zZWN0aW9uVHlwZSA9PT0gQUNUSVZJVFkuaXRpbmVyYXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb24uZGVzY3JpcHRpb24gPyA8ZGl2IGtleT17c2VjdGlvbklkfSBjbGFzc05hbWU9XCJpdGluZXJhcnlCeURheUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdJdGluZXJhcnlJdGVtRGl2IGNsYXNzTmFtZT1cInAxNSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTaG93TW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFNob3dNb3JlVGV4dChzZWN0aW9uLmRlc2NyaXB0aW9uLCAxMjUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vcmVUZXh0PVwiUmVhZCBNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMZXNzVGV4dD1cIlJlYWQgTGVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HSXRpbmVyYXJ5SXRlbURpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c2VjdGlvbklkfSBjbGFzc05hbWU9XCJpdGluZXJhcnlCeURheUJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdJdGluZXJhcnlJdGVtRGl2IGNsYXNzTmFtZT1cInAxNSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGluZXJhcnlDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50RXZlbnQ9e3RyYWNrU2VnbWVudEV2ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5PXtkYXl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HSXRpbmVyYXJ5SXRlbURpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9HSXRpbmVyYXJ5QnlEYXlEaXY+XG4gICk7XG59O1xuXG5JdGluZXJhcnlCeURheS5wcm9wVHlwZXMgPSB7XG4gIGRldGFpbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd0hpZGVQZG1WaWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgc2V0UGRtQ2F0ZWdvcnk6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5JdGluZXJhcnlCeURheS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRldGFpbDogW10sXG4gIGRheTogJycsXG4gIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgdHJhY2tTZWdtZW50RXZlbnQ6ICgpID0+IHt9LFxuICBzZXRQZG1DYXRlZ29yeTogKCkgPT4ge30sXG4gIHNob3dIaWRlUGRtVmlldzogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyeUJ5RGF5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7IEZsaWdodHMsIENhYkljb25Gcm9udCwgSG90ZWwsIFNpZ2h0c2VlaW5nIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgZ2V0U2hvd01vcmVUZXh0LCBnZXRIb3RlbE9yQWlycG9ydERldGFpbHMgfSBmcm9tICcuLi8uLi9oZWxwZXInO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBTaG93TW9yZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9TaG93TW9yZSc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlcic7XG5pbXBvcnQgSG90ZWxPckFpcnBvcnREZXRhaWxzIGZyb20gJ21vZHVsZXMvcXVvdGUvc2hhcmVkL0hvdGVsT3JBaXJwb3J0RGV0YWlscyc7XG5pbXBvcnQgSXRpbmVyYXJ5U2xpZGVyIGZyb20gJy4vSXRpbmVyYXJ5U2xpZGVyJztcblxuY29uc3QgaWNvbnMgPSB7XG4gIGNhYjogQ2FiSWNvbkZyb250LFxuICBmbGlnaHQ6IEZsaWdodHMsXG4gIGhvdGVsOiBIb3RlbCxcbiAgYXR0cmFjdGlvbjogU2lnaHRzZWVpbmdcbn07XG5cbmNvbnN0IEdJdGlJbWdEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnMjAwcHgnLFxuICAnJiBpbWcnOiB7XG4gICAgbWluSGVpZ2h0OiAnMjAwcHggIWltcG9ydGFudCdcbiAgfVxufSk7XG5cbmNsYXNzIEl0aW5lcmFyeUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xvc2VNb2RhbDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZU1vZGFsOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsVmlld0RldGFpbENsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IG9iamVjdCA9IGBEYXk8JHt0aGlzLnByb3BzLmRheX0+OjpBY3Rpdml0eTwke1xuICAgICAgdGhpcy5wcm9wcy5pdGVtLnNlY3Rpb25UeXBlXG4gICAgICB9PmA7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9DTElDS0VELCAnVmlldyBEZXRhaWxzJywgb2JqZWN0KTtcbiAgfTtcblxuICBoYW5kbFJlYWRNb3JlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0ID0gYERheTwke3RoaXMucHJvcHMuZGF5fT46OkFjdGl2aXR5PCR7XG4gICAgICB0aGlzLnByb3BzLml0ZW0uc2VjdGlvblR5cGVcbiAgICAgIH0+YDtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdSZWFkIE1vcmUnLCBvYmplY3QpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9wcy5pdGVtO1xuICAgIGNvbnN0IEljb24gPSBpY29uc1tpdGVtLnNlY3Rpb25UeXBlXTtcbiAgICBjb25zdCBvdGhlckRldGFpbHMgPSBpdGVtLm90aGVyRGV0YWlscztcblxuICAgIGNvbnN0IGltYWdlc1VybCA9IGl0ZW0uaW1hZ2VzVXJsIHx8IChvdGhlckRldGFpbHMgJiYgb3RoZXJEZXRhaWxzLmltYWdlc1VybCkgfHwgW107XG4gICAgY29uc3QgaW1hZ2VzID0gaXRlbS5zZWN0aW9uVHlwZSA9PT0gJ2hvdGVsJ1xuICAgICAgPyBpbWFnZXNVcmwubWFwKGltYWdlVXJsID0+ICh7IHVybDogaW1hZ2VVcmwudXJsIH0pKVxuICAgICAgOiBpbWFnZXNVcmwubWFwKGltYWdlVXJsID0+ICh7IHVybDogaW1hZ2VVcmwgfSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBwbDI0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC0yNCBibG9jayBhYnNvbHV0ZSBsMCB0NSc+XG4gICAgICAgICAgPEljb24gLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsMTVcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdmMTYgZnc5IG1iNCc+e2l0ZW0udGl0bGV9PC9oND5cbiAgICAgICAgICB7aXRlbS5ldmVudFRpbWUgPyAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMiBwZmM0IG1iOCBhdF9ldmVudFRpbWUnPntpdGVtLmV2ZW50VGltZX08L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0X3JlYWRNb3JlJyBvbkNsaWNrPXt0aGlzLmhhbmRsUmVhZE1vcmVDbGlja30+XG4gICAgICAgICAgICA8U2hvd01vcmVcbiAgICAgICAgICAgICAgey4uLmdldFNob3dNb3JlVGV4dChpdGVtLmRlc2NyaXB0aW9uLCAxMjUpfVxuICAgICAgICAgICAgICBzaG93TW9yZVRleHQ9XCJSZWFkIE1vcmVcIlxuICAgICAgICAgICAgICBzaG93TGVzc1RleHQ9XCJSZWFkIExlc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8R0l0aUltZ0RpdiBjbGFzc05hbWU9J3JvdyByb3ctIHJlbGF0aXZlIG10MTUgbWI4IG92ZXJmbG93aCc+XG4gICAgICAgICAgICB7aXRlbS5pbWFnZXNVcmwgJiYgaXRlbS5pbWFnZXNVcmwubGVuZ3RoID8gKFxuICAgICAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICAgICAgc2xpZGVDbGFzcz0nc2xpZGUnXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXs4fVxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9J2F1dG8nXG4gICAgICAgICAgICAgICAgcmVidWlsZE9uVXBkYXRlPlxuICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZVVybCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEl0aW5lcmFyeVNsaWRlciBrZXk9e2l9IGltZ1NyYz17aW1hZ2VVcmwudXJsfSBpbWFnZXM9e2ltYWdlc30gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0dJdGlJbWdEaXY+XG4gICAgICAgICAge2l0ZW0ub3RoZXJEZXRhaWxzID8gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIGYxNCBzZmMxIGN1cnNvclAgdGV4dC1yaWdodCBhdF92aWV3RGV0YWlsJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbFZpZXdEZXRhaWxDbGlja30+XG4gICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgIGN1c3RvbUNsb3NlVHJpZ2dlcj17dGhpcy5zdGF0ZS5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxIb3RlbE9yQWlycG9ydERldGFpbHNcbiAgICAgICAgICAgICAgICBpbmZvPXtnZXRIb3RlbE9yQWlycG9ydERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgLi4uaXRlbS5vdGhlckRldGFpbHMsXG4gICAgICAgICAgICAgICAgICBpbWFnZXM6IGltYWdlc1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VQb3B1cH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGluZXJhcnlDYXJkO1xuXG5JdGluZXJhcnlDYXJkLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZWN0aW9uVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZXZlbnRUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdlc1VybDogUHJvcFR5cGVzLmFycmF5XG4gIH0pLmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgZGF5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5JdGluZXJhcnlDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRlbToge30sXG4gIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEl0aW5lcmFyeUhlYWRpbmcgPSAoeyBpdGVtLCBkYXlzLCB0cmFja1NlZ21lbnRFdmVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIHAxNSBiYic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlcic+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZjE2IGZ3OSBtMCBtcjggbWI1IGF0X2l0aW5lcmFyeUhlYWRpbmcnPntgRGF5ICR7ZGF5c31gfTwvaDQ+XG4gICAgICAgICAge2l0ZW0uZXZlbnRUaW1lID8gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgcGZjNCBtMCBhdF9ldmVudFRpbWUnPntpdGVtLmV2ZW50VGltZX08L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J2YxNCc+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9J2l0aW5lcmFyeURvd25BcnJvdyBpbnB1dC0yNCBibG9jayBwNSBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXInXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgdHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ2Ryb3AgZG93bicsIGBEYXk8JHtkYXlzfT5gKVxuICAgICAgICB9PlxuICAgICAgICAgIDxEb3duQXJyb3cgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRpbmVyYXJ5SGVhZGluZztcblxuSXRpbmVyYXJ5SGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VjdGlvblR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGV2ZW50VGltZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbWFnZXNVcmw6IFByb3BUeXBlcy5hcnJheVxuICB9KS5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRheXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBGdWxsV2lkdGhTbGlkZXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvY2Fyb3VzZWwvRnVsbFdpZHRoU2xpZGVyJztcbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcblxuY29uc3QgSXRpbmVyYXJ5U2xpZGVyID0gKHsgaW1hZ2VzLCBpbWdTcmMgfSkgPT4ge1xuXG4gIGNvbnN0IGltYWdlc1VybCA9IGltYWdlcy5tYXAoaSA9PiBpLnVybCk7XG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICB0cmlnZ2VyPXtcbiAgICAgICAgPEltZyBpa1NyYz17aW1nU3JjfSBhbHQ9J2FjdGl2aXR5JyAvPlxuICAgICAgfVxuICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX0+XG4gICAgICA8RnVsbFdpZHRoU2xpZGVyIGltYWdlcz17aW1hZ2VzVXJsfSAvPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5JdGluZXJhcnlTbGlkZXIucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBpbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRpbmVyYXJ5U2xpZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgbG9hZCBhcyBmZXRjaFF1b3Rlc0RhdGEgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IGxvYWQgYXMgbG9hZENvbnN0YW50cyB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9jb25zdGFudHMnO1xuaW1wb3J0IHsgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZCB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZmV0Y2hEaXNjb3VudE9mZmVycyB9IGZyb20gJ21vZHVsZXMvZGlzY291bnRFbmdpbmUvYWN0aW9uJztcbmltcG9ydCB7IGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIH0gZnJvbSAnbW9kdWxlcy9wZG0vYWN0aW9uJztcblxuaW1wb3J0IHsgcmVzdWx0cyB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBzaG93SGlkZVBkbVZpZXcsIHNldFBkbUNhdGVnb3J5IH0gZnJvbSAnbW9kdWxlcy9wZG0vYWN0aW9uJztcbmltcG9ydCB7IGdldFRyaXBJZCwgZ2V0Q3VycmVudFF1b3RlSWQgfSBmcm9tICdtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL3F1b3RlQWN0aXZpdGllcyc7XG5pbXBvcnQgeyBnZXRDdXJyZW50UXVvdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcXVvdGVMaXN0XCI7XG5pbXBvcnQgSXRpbmVyYXJ5IGZyb20gJy4vSXRpbmVyYXJ5RGV0YWlsJztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihcbiAgY29ubmVjdChcbiAgICBzdGF0ZSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50UXVvdGUgPSBnZXRDdXJyZW50UXVvdGUoc3RhdGUpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpdGluZXJhcnlJbmZvOiByZXN1bHRzKGN1cnJlbnRRdW90ZSksXG4gICAgICAgIHRyaXBJZDogZ2V0VHJpcElkKHN0YXRlKSxcbiAgICAgICAgcXVvdGVJZDogY3VycmVudFF1b3RlLmlkXG4gICAgICB9O1xuICAgIH0sXG4gICAge1xuICAgICAgc2V0UGRtQ2F0ZWdvcnksXG4gICAgICBzaG93SGlkZVBkbVZpZXdcbiAgICB9XG4gICkoSXRpbmVyYXJ5KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIHdlYnZpZXdBY3Rpb25zOiBbZmV0Y2hRdW90ZXNEYXRhLCBsb2FkQ29uc3RhbnRzLCBmZXRjaFByZURlZmluZWRNZXNzYWdlcyxcbiAgICBmZXRjaERpc2NvdW50T2ZmZXJzLCBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkXVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCByZXN1bHRzID0gKHF1b3RlKSA9PiB7XG4gIHJldHVybiBxdW90ZS5uZXdGb3JtYXRUcmlwRGF5cyB8fCBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIb3RlbE9yQWlycG9ydERldGFpbHMgPSAoaW5mbyA9IHt9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogaW5mby5uYW1lLFxuICAgIGVtYWlsOiBpbmZvLmVtYWlsLFxuICAgIHBob25lOiBpbmZvLnBob25lLFxuICAgIGRlc2NyaXB0aW9uOiBpbmZvLmhvdGVsRGVzYyB8fCBpbmZvLmFpcnBvcnREZXMsXG4gICAgbGF0OiBpbmZvLmxhdCxcbiAgICBsb25nOiBpbmZvLmxvbmcsXG4gICAgYWRkcmVzczogaW5mby5hZGRyZXNzLFxuICAgIHJhdGluZzogaW5mby5yYXRpbmdzLFxuICAgIHdlYlVybDogaW5mby53ZWJVcmwsXG4gICAgaW1hZ2VzOiBpbmZvLmltYWdlc1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNob3dNb3JlVGV4dCA9ICh0ZXh0LCBicmVha0F0KSA9PiB7XG4gIGNvbnN0IHdyYXBUZXh0ID0gdGV4dCA/IHRleHQuc3Vic3RyKDAsIGJyZWFrQXQpIDogJyc7XG4gIGNvbnN0IG1vcmVUZXh0ID0gdGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IGJyZWFrQXQgPyB0ZXh0LnN1YnN0cihicmVha0F0KSA6ICcnO1xuXG4gIHJldHVybiB7XG4gICAgd3JhcFRleHQ6IHdyYXBUZXh0ICYmIHdyYXBUZXh0LnNwbGl0KCdcXG4nKS5tYXAoKGksIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIDxzcGFuIGtleT17a2V5fT57aX08L3NwYW4+O1xuICAgIH0pLFxuICAgIG1vcmVUZXh0OiBtb3JlVGV4dCAmJiBtb3JlVGV4dC5zcGxpdCgnXFxuJykubWFwKCh0ZXh0LCBrZXkpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IDAgPyA8c3BhbiBrZXk9e2tleX0+e3RleHR9PC9zcGFuPiA6IDxkaXYga2V5PXtrZXl9Pnt0ZXh0fTwvZGl2PjtcbiAgICB9KVxuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBBQ1RJVklUWSA9IE9iamVjdC5mcmVlemUoe1xuICBmbGlnaHQ6ICdmbGlnaHQnLFxuICBpdGluZXJhcnk6ICdpdGluZXJhcnknLFxuICBjYWI6ICdjYWInLFxuICBob3RlbDogJ2hvdGVsJyxcbiAgYXR0cmFjdGlvbjogJ2F0dHJhY3Rpb24nXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=