require("source-map-support").install();
exports.ids = ["compare-quotes"];
exports.modules = {

/***/ "./app-v2/modules/quote/compare/G.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/quote/compare/G.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GItineraryTimeLineDiv = exports.GHotelRatingDiv = exports.GCardViewActionDiv = exports.GCompareCardContentDiv = exports.GAgentCompanyNameDiv = exports.GAgentCompayImgSmallDiv = exports.GAgentCompayImgDiv = exports.GModalFullViewContainerDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GModalFullViewContainerDiv = _glamorous.default.div({
  height: 'calc(100vh - 48px)',
  overflow: 'auto'
});

exports.GModalFullViewContainerDiv = GModalFullViewContainerDiv;

const GAgentCompayImgDiv = _glamorous.default.div({
  width: '64px',
  height: '64px',
  alignItems: 'center',
  display: 'flex'
});

exports.GAgentCompayImgDiv = GAgentCompayImgDiv;

const GAgentCompayImgSmallDiv = _glamorous.default.div({
  width: '40px',
  height: '40px',
  alignItems: 'center',
  display: 'flex'
});

exports.GAgentCompayImgSmallDiv = GAgentCompayImgSmallDiv;

const GAgentCompanyNameDiv = _glamorous.default.div({
  border: '1px solid #b2b2b2',
  borderRadius: '4px',
  padding: '8px',
  minHeight: '48px',
  maxHeight: '48px',
  overflow: 'hidden'
});

exports.GAgentCompanyNameDiv = GAgentCompanyNameDiv;

const GCompareCardContentDiv = _glamorous.default.div({
  '&>div:first-child': {
    borderRight: '1px solid #efefef'
  },
  '& + .cardViewLess svg': {
    transform: 'rotateZ(180deg)'
  },
  '& .contentList': {
    wordBreak: 'break-word'
  },
  '& .contentList:last-child': {
    marginBottom: '0 !important',
    paddingBottom: '0 !important'
  }
});

exports.GCompareCardContentDiv = GCompareCardContentDiv;

const GCardViewActionDiv = _glamorous.default.div({
  '& .cardViewLess svg': {
    transform: 'rotateZ(180deg)'
  }
});

exports.GCardViewActionDiv = GCardViewActionDiv;

const GHotelRatingDiv = _glamorous.default.div({
  width: '48px',
  border: '1px solid #d4d4d4'
});

exports.GHotelRatingDiv = GHotelRatingDiv;

const GItineraryTimeLineDiv = _glamorous.default.div({
  position: 'relative',
  paddingLeft: '24px',
  paddingBottom: '24px',
  wordBreak: 'break-word',
  '&:before': {
    content: '""',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#ff3e39',
    position: 'absolute',
    top: '0',
    left: '4px',
    zIndex: '2'
  },
  '&:after': {
    content: '""',
    width: '1px',
    height: '100%',
    background: '#d4d4d4',
    position: 'absolute',
    top: '0',
    left: '7px',
    zIndex: '1'
  },
  '&:last-child': {
    paddingBottom: '0',
    '&:after': {
      display: 'none'
    }
  }
});

exports.GItineraryTimeLineDiv = GItineraryTimeLineDiv;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/CompareCab.js":
/*!***************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/CompareCab.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CompareCab = ({
  quotes
}) => {
  return _react.default.createElement(_G.GCompareCardContentDiv, {
    className: "flex at_compareCardContent"
  }, Object.keys(quotes).map(quoteId => {
    return _react.default.createElement("div", {
      className: "flexFull p15",
      key: `cab_${quoteId}`
    }, _react.default.createElement("p", {
      className: "f14p"
    }, quotes[quoteId].cabsText ? quotes[quoteId].cabsText : 'Not included'));
  }));
};

CompareCab.propTypes = {
  quotes: _propTypes.default.object.isRequired
};
var _default = CompareCab;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/CompareFlights.js":
/*!*******************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/CompareFlights.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CompareFlights = ({
  quotes
}) => {
  return _react.default.createElement(_G.GCompareCardContentDiv, {
    className: "flex at_compareCardContent"
  }, Object.keys(quotes).map(quoteId => {
    return _react.default.createElement("div", {
      className: "flexFull p15",
      key: `flights_${quoteId}`
    }, _react.default.createElement("p", {
      className: "f14p"
    }, quotes[quoteId].flightsText.length ? quotes[quoteId].flightsText : 'Not included'));
  }));
};

CompareFlights.propTypes = {
  quotes: _propTypes.default.object.isRequired
};
var _default = CompareFlights;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/CompareHotel.js":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/CompareHotel.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _CompareHotelsSection = _interopRequireDefault(__webpack_require__(/*! ./CompareHotelsSection */ "./app-v2/modules/quote/compare/components/CompareHotelsSection.js"));

var _CompareTextSection = _interopRequireDefault(__webpack_require__(/*! ./CompareTextSection */ "./app-v2/modules/quote/compare/components/CompareTextSection.js"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CompareHotel = ({
  quotes
}) => {
  const compareItems = Object.keys(quotes).map(id => {
    const quote = quotes[id];
    const hotels = quote.hotelsDetail;

    if (hotels.length === 0) {
      return _react.default.createElement(_CompareTextSection.default, {
        key: `hotel_${id}`,
        text: quote.hotelText
      });
    }

    return _react.default.createElement(_CompareHotelsSection.default, {
      key: `hotel_${id}`,
      hotels: hotels
    });
  });
  return _react.default.createElement(_G.GCompareCardContentDiv, {
    className: "flex at_compareCardContent"
  }, compareItems);
};

CompareHotel.propTypes = {
  quotes: _propTypes.default.object.isRequired
};
var _default = CompareHotel;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/CompareHotelsSection.js":
/*!*************************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/CompareHotelsSection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CompareHotelsSection = ({
  hotels
}) => {
  return _react.default.createElement("div", {
    className: "flexFull p15"
  }, hotels.map(hotel => {
    return hotel.hotelInfos.map(hotelInfo => {
      return _react.default.createElement("div", {
        className: "mb24 contentList",
        key: `hotel_${hotelInfo.hotelId}`
      }, _react.default.createElement("p", {
        className: "f14p"
      }, hotelInfo.name), _react.default.createElement(_G.GHotelRatingDiv, {
        className: "flex alignCenter justifyCenter p2 pl15 pr15 radius2 mt8 text-center"
      }, _react.default.createElement("span", {
        className: "f14p mr2 at_ratingText"
      }, hotelInfo.rating || '-'), _react.default.createElement("span", {
        className: "icon-14"
      }, _react.default.createElement(_Icon.StarIcon, null))));
    });
  }));
};

CompareHotelsSection.propTypes = {
  hotels: _propTypes.PropTypes.array.isRequired
};
var _default = CompareHotelsSection;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/CompareItinerary.js":
/*!*********************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/CompareItinerary.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let CompareItinerary = class CompareItinerary extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showMore: false,
      text: 'View More'
    }, this.showAndHideItinerary = () => {
      this.props.trackSegment({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: 'Itinerary',
        cta: this.state.showMore ? 'View Less' : 'View More',
        miscId1: Object.keys(this.props.quotes).join('::'),
        miscType1: 'quote_id_left::quote_id_right'
      });

      if (this.state.showMore) {
        this.setState({
          showMore: !this.state.showMore,
          text: 'View More'
        });
      } else {
        this.setState({
          showMore: !this.state.showMore,
          text: 'View Less'
        });
      }
    }, this.renderQuoteItinerary = (quote, isViewMore) => {
      let tripDays = quote.newFormatTripDays;

      if (isViewMore && !this.state.showMore) {
        tripDays = tripDays.slice(0, 5);
      }

      return tripDays.map((dayItinerary, idx) => {
        const dayInfoIndex = Object.keys(dayItinerary).find(d => dayItinerary[d].sectionType === 'itinerary');
        return _react.default.createElement(_G.GItineraryTimeLineDiv, {
          key: idx
        }, _react.default.createElement("h3", {
          className: "f14 pfc2"
        }, `Day ${idx + 1}`), _react.default.createElement("p", {
          className: "f14p pfc3 m0 mt8"
        }, dayItinerary[dayInfoIndex] && dayItinerary[dayInfoIndex].title));
      });
    }, _temp;
  }

  render() {
    const {
      quotes
    } = this.props;
    let isViewMore = false;
    return _react.default.createElement("div", null, _react.default.createElement(_G.GCompareCardContentDiv, {
      className: "flex at_compareCardContent"
    }, Object.keys(quotes).map(id => {
      const quote = quotes[id];

      if (quote.newFormatTripDays.length > 5) {
        isViewMore = true;
      }

      return _react.default.createElement("div", {
        className: "flexFull p15",
        key: `itinerary_${id}`
      }, this.renderQuoteItinerary(quote, isViewMore));
    })), isViewMore ? _react.default.createElement(_G.GCardViewActionDiv, {
      className: "clearfix"
    }, _react.default.createElement("button", {
      className: `f14 fw7 sfc1 mr15 mb15 fright flex alignCenter at_qcp_viewMore ${this.state.showMore ? 'cardViewLess' : ''}`,
      onClick: this.showAndHideItinerary
    }, this.state.text, _react.default.createElement("span", {
      className: "relative iblock icon-14 ml8"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : null);
  }

};
CompareItinerary.propTypes = {
  quotes: _propTypes.default.object.isRequired,
  trackSegment: _propTypes.default.func.isRequired
};
var _default = CompareItinerary;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/CompareList.js":
/*!****************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/CompareList.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderListItem = (inclusions, isExclusion) => {
  const icon = isExclusion ? _react.default.createElement(_Icon.CrossRed, null) : _react.default.createElement(_Icon.GreenTickInclusion, null);
  return inclusions.map((inc, id) => {
    const key = `${id}_${inc.name}`;
    return _react.default.createElement("div", {
      className: "flex mb15 contentList",
      key: key
    }, _react.default.createElement("div", {
      className: "icon-18 p2 mr4"
    }, icon), _react.default.createElement("p", {
      className: "f14"
    }, inc.name));
  });
};

const CompareList = ({
  inclusions,
  isExclusion
}) => {
  const listItems = renderListItem(inclusions, isExclusion);
  return _react.default.createElement("div", {
    className: "flexFull p15"
  }, listItems);
};

CompareList.propTypes = {
  inclusions: _propTypes.PropTypes.array.isRequired,
  isExclusion: _propTypes.PropTypes.bool.isRequired
};
var _default = CompareList;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/ComparePrice.js":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/ComparePrice.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

var _quoteList = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _QuotePrice = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/price/QuotePrice */ "./app-v2/modules/quote/shared/price/QuotePrice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ComparePrice = ({
  quotes
}) => {
  return _react.default.createElement(_G.GCompareCardContentDiv, {
    className: "flex at_compareCardContent"
  }, Object.keys(quotes).map(quoteId => {
    const quote = quotes[quoteId];
    const quoteInfo = (0, _quoteList.getQuotesBasicInfo)(quote);
    return _react.default.createElement("div", {
      className: "flexFull p15",
      key: `price_${quoteId}`
    }, _react.default.createElement("div", {
      className: "flexFull quotePriceInfo"
    }, _react.default.createElement(_QuotePrice.default, _extends({}, quoteInfo.priceInformation, quoteInfo.discountInformation, {
      lineBreak: true
    }))));
  }));
};

ComparePrice.propTypes = {
  quotes: _propTypes.default.object.isRequired
};
var _default = ComparePrice;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/CompareTextSection.js":
/*!***********************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/CompareTextSection.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CompareTextSection = (_temp = _class = class CompareTextSection extends _react.default.Component {
  render() {
    return _react.default.createElement("div", {
      className: "flexFull p15"
    }, _react.default.createElement("div", {
      className: "mb24 contentList"
    }, _react.default.createElement("p", {
      className: "f14 at_text"
    }, this.props.text || 'Not Included')));
  }

}, _class.propTypes = {
  text: _propTypes.PropTypes.string
}, _temp);
var _default = CompareTextSection;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/Header.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/Header.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Header = (_temp = _class = class Header extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "pbc1 p8"
    }, _react.default.createElement("div", {
      className: "p4 flex"
    }, _react.default.createElement("a", {
      onClick: this.props.goBack,
      className: "mr8 input-24 p4 iblock at_qcp_backBtn"
    }, _react.default.createElement(_Icon.Back2IconWhite, null)), _react.default.createElement("p", {
      className: "f16 flex alignCenter fw7 sfcw flexFull ellipsis at_qcp_headingTop"
    }, "Compare Quotes")));
  }

}, _class.propTypes = {
  goBack: _propTypes.default.func.isRequired
}, _temp);
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/components/InclusionExclusion.js":
/*!***********************************************************************!*\
  !*** ./app-v2/modules/quote/compare/components/InclusionExclusion.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _CompareList = _interopRequireDefault(__webpack_require__(/*! ./CompareList */ "./app-v2/modules/quote/compare/components/CompareList.js"));

var _CompareTextSection = _interopRequireDefault(__webpack_require__(/*! ./CompareTextSection */ "./app-v2/modules/quote/compare/components/CompareTextSection.js"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let InclusionExclusion = (_temp2 = _class = class InclusionExclusion extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showMore: false,
      text: 'View More'
    }, this.showAndHideSection = () => {
      if (this.state.showMore) {
        this.setState({
          showMore: !this.state.showMore,
          text: 'View More'
        });
      } else {
        this.setState({
          showMore: !this.state.showMore,
          text: 'View Less'
        });
      }

      this.props.trackSegment({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: this.props.isExclusion ? 'Exclusion' : 'Inclusion',
        cta: this.state.showMore ? 'View More' : 'View Less',
        miscId1: Object.keys(this.props.quotes).join('::'),
        miscType1: 'quote_id_left::quote_id_right'
      });
    }, _temp;
  }

  render() {
    const {
      isExclusion,
      quotes
    } = this.props;
    const {
      showMore
    } = this.state;
    let isViewMore = false;
    const compareItems = Object.keys(quotes).map(id => {
      const quote = quotes[id];
      let inclusions = isExclusion ? quote.inclusions['0'] : quote.inclusions['1'];

      if (inclusions === undefined) {
        return _react.default.createElement(_CompareTextSection.default, {
          key: `inc_${id}`,
          text: isExclusion ? quote.exclusionsText : quote.inclusionsText
        });
      }

      if (inclusions.length > 5) {
        isViewMore = true;

        if (!showMore) {
          inclusions = inclusions.slice(0, 5);
        }
      }

      return _react.default.createElement(_CompareList.default, {
        key: `inc_${id}`,
        inclusions: inclusions,
        isExclusion: isExclusion
      });
    });
    return _react.default.createElement("div", null, _react.default.createElement(_G.GCompareCardContentDiv, {
      className: "flex at_compareCardContent"
    }, compareItems), isViewMore ? _react.default.createElement(_G.GCardViewActionDiv, {
      className: "clearfix"
    }, _react.default.createElement("button", {
      className: `f14 fw7 sfc1 mr15 mb15 fright flex alignCenter at_qcp_viewMore ${showMore ? 'cardViewLess' : ''}`,
      onClick: this.showAndHideSection
    }, this.state.text, _react.default.createElement("span", {
      className: "relative iblock icon-14 ml8"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : null);
  }

}, _class.propTypes = {
  quotes: _propTypes.default.object.isRequired,
  trackSegment: _propTypes.default.func.isRequired,
  isExclusion: _propTypes.default.bool
}, _class.defaultProps = {
  isExclusion: false
}, _temp2);
var _default = InclusionExclusion;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/list/QuoteList.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/compare/list/QuoteList.js ***!
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

var _rosterTypes = __webpack_require__(/*! constants/rosterTypes */ "./app/constants/rosterTypes.js");

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _G = __webpack_require__(/*! ./../G */ "./app-v2/modules/quote/compare/G.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Header = _interopRequireDefault(__webpack_require__(/*! ../components/Header */ "./app-v2/modules/quote/compare/components/Header.js"));

var _quoteList = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _QuotePrice = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/price/QuotePrice */ "./app-v2/modules/quote/shared/price/QuotePrice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let QuoteList = class QuoteList extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      quoteIds: [],
      disable: true
    }, this.handleChange = (e, id) => {
      let quoteIds = this.state.quoteIds;

      if (e.target.checked) {
        if (this.state.quoteIds.length === 2) {
          e.target.checked = false;
          this.props.showRoster({
            type: _rosterTypes.WARNING_TOASTER,
            message: 'Only 2 quotes can be selected'
          });
          return;
        }

        quoteIds.push(id.toString());
        this.props.trackSegment({
          event: _segmentEvents.ORGANISM_CLICKED,
          category: 'QCP - Select Quotes',
          section: 'Quote Card',
          cta: 'Checkbox',
          miscId1: id,
          miscType1: 'quote_id'
        });
      } else {
        quoteIds = quoteIds.filter(quoteId => quoteId !== id.toString());
      }

      this.setState({
        quoteIds: quoteIds
      });
    }, this.compareQuotes = () => {
      const queryString = this.state.quoteIds.reduce((finalString, quoteId) => `${finalString}&quoteIds=${quoteId}`, '?');
      this.props.pushState(`${(0, _urlHelpers.compareQuotesPath)(this.props.params.requestedTripId)}${queryString}`);
      this.props.trackSegment({
        event: _segmentEvents.ORGANISM_CLICKED,
        category: 'QCP - Select Quotes',
        section: 'Bottom Sticky',
        cta: 'Compare Quotes',
        miscId1: this.state.quoteIds.join('::'),
        miscType1: 'quote_id_left::quote_id_right'
      });
    }, _temp;
  }

  componentDidMount() {
    const {
      location
    } = this.props;
    const stateObj = {
      disable: false
    };

    if (location.query.qIds) {
      stateObj.quoteIds = location.query.qIds;
    }

    this.setState(stateObj);
    this.props.trackSegment({
      event: _segmentEvents.ORGANISM_VIEWED,
      category: 'QCP - Select Quotes',
      section: 'Quote List',
      cta: ''
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      location
    } = nextProps;

    if (location.query.qIds) {
      this.setState({
        quoteIds: location.query.qIds
      });
    }
  }

  render() {
    const {
      quotes,
      goBack
    } = this.props;
    const {
      quoteIds
    } = this.state;
    return _react.default.createElement("div", null, _react.default.createElement(_Header.default, {
      goBack: goBack
    }), _react.default.createElement(_G.GModalFullViewContainerDiv, {
      className: "sbc5 pb64"
    }, _react.default.createElement("div", {
      className: "p15 sbc5"
    }, _react.default.createElement("p", {
      className: "m0 f14 pfc3 at_compareLimitationMessage"
    }, "You can compare upto 2 quotes")), quotes && Object.keys(quotes).map(quoteId => {
      const quote = quotes[quoteId];
      const quoteInfo = (0, _quoteList.getQuotesBasicInfo)(quote);
      return _react.default.createElement("div", {
        className: "p15 pr0 mb8 sbcw flex alignCenter at_quoteList",
        key: quoteId
      }, _react.default.createElement(_G.GAgentCompayImgDiv, {
        className: "mr15 border at_agentCompanyImage"
      }, _react.default.createElement("img", {
        src: quote.agent.profilePicture,
        alt: quote.agent.displayName
      })), _react.default.createElement("div", {
        className: "flexFull flex alignCenter"
      }, _react.default.createElement("div", {
        className: "flexFull"
      }, _react.default.createElement("h4", {
        className: "f14 fw7 mb2 at_agentCompanyName"
      }, quote.agent.companyName), _react.default.createElement(_RatingStar.default, {
        rating: quote.agent.displayRating
      }), _react.default.createElement("div", {
        className: "flexFull quotePriceInfo"
      }, _react.default.createElement(_QuotePrice.default, _extends({}, quoteInfo.priceInformation, quoteInfo.discountInformation)))), _react.default.createElement("div", {
        className: "ml8"
      }, _react.default.createElement("input", {
        id: `q${quote.id}`,
        className: "checkbox-common at_quoteSelect_input",
        type: "checkbox",
        disabled: this.state.disable,
        checked: quoteIds.includes(quoteId.toString()),
        onClick: e => this.handleChange(e, quote.id)
      }), _react.default.createElement("label", {
        htmlFor: `q${quote.id}`,
        className: "pt0 at_quoteSelect_label"
      }))));
    }), _react.default.createElement("div", {
      className: "fixed b0 l0 r0 p8 z10 sbcw bs4"
    }, _react.default.createElement("button", {
      className: "btn-filled-pri-large wfull at_compareBtn_main",
      disabled: this.state.quoteIds.length < 2,
      onClick: this.compareQuotes
    }, "Compare Quotes"))));
  }

};
QuoteList.propTypes = {
  quotes: _propTypes.default.object,
  location: _propTypes.default.object,
  params: _propTypes.default.object,
  showRoster: _propTypes.default.func,
  pushState: _propTypes.default.func,
  goBack: _propTypes.default.func,
  trackSegment: _propTypes.default.func.isRequired
};
var _default = QuoteList;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/list/index.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/quote/compare/list/index.js ***!
  \****************************************************/
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

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _action = __webpack_require__(/*! modules/roster/action */ "./app-v2/modules/roster/action.js");

var _QuoteList = _interopRequireDefault(__webpack_require__(/*! ./QuoteList */ "./app-v2/modules/quote/compare/list/QuoteList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  quotes: (0, _get2.default)(state, 'quote.list.data.quotes', {})
}), {
  showRoster: _action.showRoster,
  pushState: _reactRouterRedux.push,
  goBack: _reactRouterRedux.goBack
})(_QuoteList.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/quotes/CompareQuotes.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/quote/compare/quotes/CompareQuotes.js ***!
  \**************************************************************/
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

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/compare/G.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _QuoteCardHeader = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/QuoteCardHeader */ "./app-v2/modules/quote/shared/QuoteCardHeader.js"));

var _CompareHotel = _interopRequireDefault(__webpack_require__(/*! ../components/CompareHotel */ "./app-v2/modules/quote/compare/components/CompareHotel.js"));

var _CompareItinerary = _interopRequireDefault(__webpack_require__(/*! ../components/CompareItinerary */ "./app-v2/modules/quote/compare/components/CompareItinerary.js"));

var _InclusionExclusion = _interopRequireDefault(__webpack_require__(/*! ../components/InclusionExclusion */ "./app-v2/modules/quote/compare/components/InclusionExclusion.js"));

var _ComparePrice = _interopRequireDefault(__webpack_require__(/*! ../components/ComparePrice */ "./app-v2/modules/quote/compare/components/ComparePrice.js"));

var _CompareCab = _interopRequireDefault(__webpack_require__(/*! ../components/CompareCab */ "./app-v2/modules/quote/compare/components/CompareCab.js"));

var _CompareFlights = _interopRequireDefault(__webpack_require__(/*! ../components/CompareFlights */ "./app-v2/modules/quote/compare/components/CompareFlights.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ../components/Header */ "./app-v2/modules/quote/compare/components/Header.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let CompareQuotes = class CompareQuotes extends _react.Component {
  constructor(props) {
    super(props);

    this.handleScroll = () => {
      if (this.agentCompanyName) {
        this.agentCompanyName.style.boxShadow = window && window.pageYOffset ? '0 2px 6px 0 rgba(0,0,0,0.4)' : '';
      }
    };

    this.trackSegmentEvent = (quoteId, section, cta) => {
      this.props.trackSegment({
        event: _segmentEvents.ORGANISM_CLICKED,
        section,
        cta,
        miscType1: 'quote_id',
        miscId1: quoteId
      });
    };

    this.onSensorChange = (isVisible, section) => {
      const {
        trackSegment,
        quoteIds
      } = this.props;

      if (isVisible) {
        if (!this.isEventTracked[section]) {
          this.isEventTracked[section] = true;
          trackSegment({
            event: _segmentEvents.ORGANISM_VIEWED,
            section,
            cta: '',
            miscId1: quoteIds.join('::'),
            miscType1: 'quote_id_left::quote_id_right'
          });
        }
      }
    };

    this.isEventTracked = {
      Price: false,
      Hotel: false,
      Itinerary: false,
      Inclusion: false,
      Exclusion: false,
      Cabs: false,
      Flights: false
    };
  }

  componentDidMount() {
    this.agentCompanyName.style.top = '48px';
    this.compareQuoteRef.style.paddingTop = `${this.agentCompanyName.clientHeight + 48}px`;
    window.addEventListener('scroll', this.handleScroll, {
      passive: true
    });
  }

  renderAgentCompany(quote) {
    const {
      params,
      quoteIds
    } = this.props;
    const tripId = params.requestedTripId;
    const queryString = quoteIds.reduce((finalString, quoteId) => `${finalString}&qIds=${quoteId}`, '?');
    return _react.default.createElement(_reactRouter.Link, {
      to: `${(0, _urlHelpers.compareQuotesPath)(tripId)}${queryString}`,
      onClick: () => this.trackSegmentEvent(quote.id, 'Agent Info', 'Agent Name')
    }, _react.default.createElement(_G.GAgentCompanyNameDiv, {
      className: "radius4 p8 pt5 border pr32 relative"
    }, _react.default.createElement("h3", {
      className: "f15 fw9 pfc3 at_agentCompanyName"
    }, quote.agent.companyName), _react.default.createElement("div", {
      className: "absolute-center-v r8"
    }, _react.default.createElement("div", {
      className: "icon-14"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))));
  }

  render() {
    const {
      quoteIds,
      params,
      goBack,
      trackSegment
    } = this.props;
    const quotes = Object.keys(this.props.quotes).filter(quoteId => quoteIds.includes(quoteId)).reduce((obj, key) => {
      obj[key] = this.props.quotes[key];
      return obj;
    }, {});
    const tripId = params.requestedTripId;
    return _react.default.createElement("div", {
      className: "sbc5",
      ref: ref => this.compareQuoteRef = ref
    }, _react.default.createElement("div", {
      className: "fixed t0 l0 r0 z10"
    }, _react.default.createElement(_Header.default, {
      goBack: goBack
    })), _react.default.createElement("div", {
      ref: ref => this.agentCompanyName = ref,
      className: "sbcw mb8 flex alignTop fixed l0 r0 z10 at_compareCard_agentDetail"
    }, Object.keys(quotes).map(quoteId => {
      const quote = quotes[quoteId];
      return _react.default.createElement("div", {
        className: "flexFull p15",
        key: `agent_${quoteId}`
      }, this.renderAgentCompany(quote));
    })), _react.default.createElement("div", {
      className: "sbcw mb8 flex alignTop at_compareCard_agentDetail"
    }, Object.keys(quotes).map(quoteId => {
      const quote = quotes[quoteId];
      return _react.default.createElement("div", {
        className: "flexFull p15 pt0",
        key: `agent_${quoteId}`
      }, _react.default.createElement("div", {
        className: "flex"
      }, _react.default.createElement(_G.GAgentCompayImgSmallDiv, {
        className: "mr8 border at_agentCompanyImage"
      }, _react.default.createElement("img", {
        src: quote.agent.profilePicture,
        alt: quote.agent.displayName
      })), _react.default.createElement("div", {
        className: "flexFull"
      }, _react.default.createElement(_RatingStar.default, {
        rating: quote.agent.displayRating
      }), _react.default.createElement("p", {
        className: "f12 mt4 pfc3 at_agentsConvertedTrips"
      }, quote.agent.agentsConvertedTrips, " Trips Sold"))));
    })), _react.default.createElement("div", null, _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Price'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 at_compareCard_price"
    }, _react.default.createElement("div", {
      className: "bb"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      heading: "Price",
      icon: _react.default.createElement(_Icon.PriceRupee, null)
    })), _react.default.createElement(_ComparePrice.default, {
      quotes: quotes
    }))), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Hotel'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 at_compareCard_hotel"
    }, _react.default.createElement("div", {
      className: "bb"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      heading: "Hotels",
      icon: _react.default.createElement(_Icon.Hotel, null)
    })), _react.default.createElement(_CompareHotel.default, {
      quotes: quotes
    }))), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Itinerary'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 at_compareCard_itinerary"
    }, _react.default.createElement("div", {
      className: "bb"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      heading: "Itinerary",
      icon: _react.default.createElement(_Icon.ItineraryIcon, null)
    })), _react.default.createElement(_CompareItinerary.default, {
      quotes: quotes,
      trackSegment: trackSegment
    }))), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Inclusion'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 at_inclusionCompareCard"
    }, _react.default.createElement("div", {
      className: "bb"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      heading: "Inclusions",
      icon: _react.default.createElement(_Icon.InclusionsNewIcon, null)
    })), _react.default.createElement(_InclusionExclusion.default, {
      quotes: quotes,
      trackSegment: trackSegment,
      isExclusion: false
    }))), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Exclusion'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 at_exclusionCompareCard"
    }, _react.default.createElement("div", {
      className: "bb"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      heading: "Exclusions",
      icon: _react.default.createElement(_Icon.ExclusionsRed, null)
    })), _react.default.createElement(_InclusionExclusion.default, {
      quotes: quotes,
      trackSegment: trackSegment,
      isExclusion: true
    }))), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Cabs'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 at_compareCard_cab"
    }, _react.default.createElement("div", {
      className: "bb"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      heading: "Cab",
      icon: _react.default.createElement(_Icon.TaxiCab, null)
    })), _react.default.createElement(_CompareCab.default, {
      quotes: quotes
    }))), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Flights'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 at_compareCard_flight"
    }, _react.default.createElement("div", {
      className: "bb"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      heading: "Flights",
      icon: _react.default.createElement(_Icon.Flights, null)
    })), _react.default.createElement(_CompareFlights.default, {
      quotes: quotes
    }))), _react.default.createElement("div", {
      className: "sbcw bt at_viewQuoteCTASection"
    }, _react.default.createElement("div", {
      className: "flex alignTop "
    }, Object.keys(quotes).map(quoteId => {
      return _react.default.createElement("div", {
        className: "flexFull p15",
        key: `view_quote_${quoteId}`
      }, _react.default.createElement(_reactRouter.Link, {
        to: (0, _urlHelpers.quoteDetailPath)(tripId, quoteId),
        onClick: () => this.trackSegmentEvent(quoteId, 'View Quote', 'View Quote'),
        className: "btn-filled-pri-large wfull at_viewQuoteCTA"
      }, "View Quote"));
    })))));
  }

};
CompareQuotes.propTypes = {
  quotes: _propTypes.default.object,
  params: _propTypes.default.object,
  quoteIds: _propTypes.default.array,
  goBack: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func.isRequired
};
var _default = CompareQuotes;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/compare/quotes/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/compare/quotes/index.js ***!
  \******************************************************/
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

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _CompareQuotes = _interopRequireDefault(__webpack_require__(/*! ./CompareQuotes */ "./app-v2/modules/quote/compare/quotes/CompareQuotes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  quotes: (0, _get2.default)(state, 'quote.list.data.quotes', {})
}), {
  goBack: _reactRouterRedux.goBack
})(_CompareQuotes.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/AgentChatButton.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/shared/AgentChatButton.js ***!
  \********************************************************/
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

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _chat = _interopRequireDefault(__webpack_require__(/*! modules/chat */ "./app-v2/modules/chat/index.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AgentChatButton = (_temp = _class = class AgentChatButton extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      textClassName
    } = this.props;
    const ChatContainer = _chat.default.container;
    return _react.default.createElement("div", null, this.props.showIcon ? _react.default.createElement("span", {
      className: "input-24 mr8"
    }, _react.default.createElement(_Icon.DefaultIcon, null)) : null, _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("button", {
        className: `${textClassName} at_agent_chat_button`,
        onClick: this.props.handleChatClick
      }, this.props.name),
      fullView: true,
      hasCustomClose: true,
      isWhiteIcon: true
    }, _react.default.createElement(ChatContainer, null)));
  }

}, _class.propTypes = {
  name: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  handleChatClick: _propTypes.default.func,
  textClassName: _propTypes.default.string,
  customButton: _propTypes.default.bool
}, _class.defaultProps = {
  name: 'Chat',
  showIcon: false,
  handleChatClick: () => {},
  textClassName: 'f14 fw7 sfc1',
  customButton: false
}, _temp);
var _default = AgentChatButton;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/QuoteCardHeader.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/shared/QuoteCardHeader.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _AgentChatButton = _interopRequireDefault(__webpack_require__(/*! ./AgentChatButton */ "./app-v2/modules/quote/shared/AgentChatButton.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QuoteCardHeader = ({
  heading,
  chatButtonName,
  handleChatClick,
  icon
}) => _react.default.createElement("div", {
  className: "pfc3 f14 pt15 pl15 pb15 pr15 flex alignCenter at_cardHeader"
}, _react.default.createElement("span", {
  className: "input-24 mr8 at_cardIcon"
}, icon), _react.default.createElement("h3", {
  className: "flexFull f16a fw9 at_cardHeading"
}, heading), _react.default.createElement(_AgentChatButton.default, {
  name: chatButtonName,
  handleChatClick: handleChatClick
}));

QuoteCardHeader.propTypes = {
  heading: _propTypes.default.string,
  chatButtonName: _propTypes.default.string,
  category: _propTypes.default.string,
  icon: _propTypes.default.node,
  handleChatClick: _propTypes.default.func
};
QuoteCardHeader.defaultProps = {
  heading: '',
  chatButtonName: '',
  category: '',
  icon: _react.default.createElement(_Icon.DefaultIcon, null),
  handleChatClick: () => {}
};
var _default = QuoteCardHeader;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/price/CutPrice.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/quote/shared/price/CutPrice.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CutPrice = ({
  price,
  currency
}) => _react.default.createElement("span", {
  className: "tdl f12"
}, (0, _parsers.parsePrice)({
  price,
  currency
}));

CutPrice.propTypes = {
  price: _propTypes.default.number.isRequired,
  currency: _propTypes.default.string.isRequired
};
CutPrice.defaultProps = {
  perPerson: ''
};
var _default = CutPrice;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/price/Price.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/quote/shared/price/Price.js ***!
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

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Price = ({
  price,
  currency
}) => _react.default.createElement("span", {
  className: "sfc3 f18 fw7 m0 flexFull text-left at_price"
}, (0, _parsers.parsePrice)({
  price,
  currency
}));

Price.propTypes = {
  price: _propTypes.default.number.isRequired,
  currency: _propTypes.default.string.isRequired
};
Price.defaultProps = {};
var _default = Price;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/price/PriceSuffix.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/quote/shared/price/PriceSuffix.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PriceSuffix = ({
  suffix
}) => _react.default.createElement("span", {
  className: "f12 pfc4 fw4"
}, suffix === 'per person' ? ' /person' : ' total');

PriceSuffix.propTypes = {
  suffix: _propTypes.default.string
};
PriceSuffix.defaultProps = {
  suffix: ''
};
var _default = PriceSuffix;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/price/QuotePrice.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/quote/shared/price/QuotePrice.js ***!
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

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _Price = _interopRequireDefault(__webpack_require__(/*! ./Price */ "./app-v2/modules/quote/shared/price/Price.js"));

var _CutPrice = _interopRequireDefault(__webpack_require__(/*! ./CutPrice */ "./app-v2/modules/quote/shared/price/CutPrice.js"));

var _PriceSuffix = _interopRequireDefault(__webpack_require__(/*! ./PriceSuffix */ "./app-v2/modules/quote/shared/price/PriceSuffix.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderOriginalPrice = (price, currency, lineBreak) => _react.default.createElement("span", {
  className: `${lineBreak ? 'block' : ''}`
}, _react.default.createElement(_CutPrice.default, {
  price: price,
  currency: currency
}));

const renderDiscountedPrice = (price, discount, currency, perPerson, lineBreak) => {
  return _react.default.createElement("span", null, _react.default.createElement("span", {
    className: `mr4 ${lineBreak ? '' : 'ml4'}`
  }, _react.default.createElement(_Price.default, {
    price: (0, _parsers.getDiscountedPrice)(price, discount),
    currency: currency,
    perPerson: perPerson
  })), _react.default.createElement(_PriceSuffix.default, {
    suffix: perPerson
  }));
};

const QuotePrice = ({
  price,
  currency,
  perPerson,
  discount,
  showOriginalPrice,
  lineBreak
}) => {
  const hasDiscountApplied = discount > 0;
  return hasDiscountApplied ? _react.default.createElement("div", null, showOriginalPrice ? renderOriginalPrice(price, currency, lineBreak) : null, renderDiscountedPrice(price, discount, currency, perPerson, lineBreak)) : _react.default.createElement("div", null, _react.default.createElement(_Price.default, {
    price: price,
    currency: currency,
    perPerson: perPerson
  }), _react.default.createElement(_PriceSuffix.default, {
    suffix: perPerson
  }));
};

QuotePrice.propTypes = {
  price: _propTypes.default.number.isRequired,
  currency: _propTypes.default.string.isRequired,
  perPerson: _propTypes.default.string,
  discount: _propTypes.default.number,
  showOriginalPrice: _propTypes.default.bool,
  lineBreak: _propTypes.default.bool
};
QuotePrice.defaultProps = {
  perPerson: '',
  discount: 0,
  showOriginalPrice: true,
  lineBreak: false
};
var _default = QuotePrice;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/roster/G.js":
/*!************************************!*\
  !*** ./app-v2/modules/roster/G.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRosterDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GRosterDiv = _glamorous.default.div({
  // top: '60px',
  width: 'calc(100% - 24px)',
  left: '12px',
  top: '12px',
  zIndex: '9999',
  '& > div': {
    position: 'relative'
  },
  '& .rosterClose': {
    display: 'block',
    width: '24px',
    height: '24px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    '&:before, &:after': {
      content: '\' \'',
      position: 'absolute',
      left: '7px',
      top: '10px',
      width: '12px',
      height: '1px',
      background: '#000',
      transform: 'rotateZ(45deg)'
    },
    '&:after': {
      transform: 'rotateZ(-45deg)'
    }
  },
  '& .toaster': {
    padding: '12px',
    paddingRight: '30px',
    color: '#333',
    border: '1px solid #333',
    background: '#efefef',
    borderRadius: '4px',
    fontSize: '16px',
    '&.errorRoster': {
      color: '#cb4138',
      borderColor: '#fd5346',
      background: '#fbdbd8',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#cb4138'
      }
    },
    '&.sucessRoster': {
      color: '#268f2a',
      borderColor: '#268f2a',
      background: '#d1f6d2',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#268f2a'
      }
    },
    '&.infoRoster': {
      color: '#1a78c2',
      borderColor: '#2196f3',
      background: '#d8e8fb',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#1a78c2'
      }
    },
    '&.warningToaster': {
      color: '#3e3e3e',
      borderColor: '#fac22e',
      background: '#fbf2dc',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#3e3e3e'
      }
    }
  }
});

exports.GRosterDiv = GRosterDiv;

/***/ }),

/***/ "./app-v2/modules/roster/Roster.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/roster/Roster.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/roster/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Roster is to display messages for dynamic layouts.
 * - rosterType - String: Defines type of message. Currently we support
 * rosterSuccess, rosterError and rosterInfo
 * - text - String [optional]: Single line message for user.
 * - message - Object [optional]: For more complex messages which might contain link for user action.
 * For ex: {
 *     header: "New trip created!",
 *     message: "Please activate your email address. To resend activation mail {{send_activation_mail}}",
 *     links: [{type: 'send_activation_mail', label: 'Click here'} ]
 *   }
 * - timeout - Number [optional]: if provided, Message will disappear after timeout in milliseconds
 * - callback - Function [optional]: Callback to pass event based on which action is to be called by parent.
 *
 *  P.S. - Either rosterText or rosterMessage should be present. If both are present rosterText would have priority.
 */
let Roster = (_temp = _class = class Roster extends _react.default.Component {
  /**
   * rosterType could have two types:
   *  - sucessRoster
   *  - errorRoster
   *  - infoRoster
   */
  constructor(props) {
    super(props);
    this.state = {
      isRosterOpen: props.isRosterOpen
    };
    this.closeRoster = this.closeRoster.bind(this);
  }

  componentDidMount() {
    if (this.state.isRosterOpen) {
      this.showRoster();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isRosterOpen && nextProps.isRosterOpen) {
      this.showRoster();
    }
  }

  showRoster() {
    this.setState({
      isRosterOpen: true
    }, () => {
      if (this.props.timeout && this.props.allowTimeOut) {
        setTimeout(() => {
          this.closeRoster();
        }, this.props.timeout);
      }
    });
  }

  closeRoster() {
    this.setState({
      isRosterOpen: false
    });
    this.props.hideRoster();
  }

  render() {
    const {
      type,
      message
    } = this.props;
    return this.state.isRosterOpen && message ? _react.default.createElement(_G.GRosterDiv, {
      className: "fixed"
    }, _react.default.createElement("div", {
      className: `toaster ${type}`
    }, _react.default.createElement("div", {
      className: "container dynamicTextInherit p0"
    }, message, _react.default.createElement("span", {
      className: "rosterClose",
      onClick: this.closeRoster
    })))) : null;
  }

}, _class.propTypes = {
  type: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  timeout: _propTypes.PropTypes.number,
  isRosterOpen: _propTypes.PropTypes.bool,
  hideRoster: _propTypes.PropTypes.func.isRequired,
  allowTimeOut: _propTypes.PropTypes.bool
}, _class.defaultProps = {
  type: 'infoRoster',
  isRosterOpen: false,
  allowTimeOut: true
}, _temp);
exports.default = Roster;

/***/ }),

/***/ "./app-v2/modules/roster/index.js":
/*!****************************************!*\
  !*** ./app-v2/modules/roster/index.js ***!
  \****************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/roster/action.js");

var _Roster = _interopRequireDefault(__webpack_require__(/*! ./Roster */ "./app-v2/modules/roster/Roster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  type: state.roster.type,
  message: state.roster.message,
  isRosterOpen: state.roster.isRosterOpen,
  allowTimeOut: state.roster.allowTimeOut
}), {
  hideRoster: _action.hideRoster
})(_Roster.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/RatingStar.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/shared/RatingStar.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRatingUl = _glamorous.default.div({
  margin: '0',
  padding: '0',
  display: 'inline-block',
  '& li': {
    display: 'inline-block',
    marginRight: '6px',
    width: '10px',
    height: '10px',
    '&:last-child': {
      marginRight: '0'
    },
    '& svg': {
      width: '10px',
      height: '10px',
      display: 'block'
    }
  }
});

function getStars(Component, starNum, keyType) {
  let i = 0;
  const stars = [];

  while (i < starNum) {
    stars.push(_react.default.createElement("li", {
      key: keyType + i
    }, _react.default.createElement(Component, null)));
    i += 1;
  }

  return stars;
}

const RatingStar = ({
  rating,
  isEmptyStarsHidden
}) => {
  const stars = [];
  const ratingBarRange = 5;
  const truncatedRating = Math.trunc(rating);
  const fractionalRating = parseFloat((rating - truncatedRating).toFixed(1));
  let fullStarCount = 0;
  let halfStarCount = 0;

  if (fractionalRating === 0.0) {
    fullStarCount = rating;
  } else if (fractionalRating <= 0.5) {
    fullStarCount = truncatedRating;
    halfStarCount = 1;
  } else {
    fullStarCount = truncatedRating + 1;
  }

  const emptyStarCount = ratingBarRange - (fullStarCount + halfStarCount);
  stars.push(getStars(_Icon.StarIcon, fullStarCount, 'full_star'));
  stars.push(getStars(_Icon.HalfStar, halfStarCount, 'half_star')); // stars.push(getStars(StarIconEmpty, emptyStarCount, 'empty_star'));

  if (!isEmptyStarsHidden) {
    stars.push(getStars(_Icon.StarIconEmpty, emptyStarCount, 'empty_star'));
  }

  return _react.default.createElement(GRatingUl, {
    className: "rating-star-list at_rating"
  }, _react.default.createElement("ul", null, stars));
};

RatingStar.propTypes = {
  rating: _propTypes.default.number,
  isEmptyStarsHidden: _propTypes.default.bool
};
RatingStar.defaultProps = {
  rating: 0,
  isEmptyStarsHidden: false
};
var _default = RatingStar;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/ShowMore.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/ShowMore.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GreadmoreLabel = _glamorous.default.label({
  '& button.read-more-button': {
    lineHeight: '20px',
    padding: '0'
  }
});

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

let ShowMore = class ShowMore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultOpen
    };
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      checked: false
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.state.checked && this.props.trackSegment({
        cta: 'Read More'
      });
    });
  }

  render() {
    const textLength = 195;
    return _react.default.createElement("div", {
      className: "row row- text-left"
    }, _react.default.createElement("input", {
      type: "checkbox",
      className: "read-more-state",
      checked: this.state.checked,
      id: "post-1"
    }), _react.default.createElement("div", {
      className: `read-more-wrap ${this.props.isDefaultShowMore ? 'p-last-no-margin pfc3 f14p dynamicTextInherit' : ''}`
    }, // TODO: find a better way for truncate the string
    !this.state.checked && this.props.appendText && this.props.wrapText.length >= textLength ? this.props.wrapText + this.props.appendText : this.props.wrapText, _react.default.createElement("span", {
      className: "read-more-target"
    }, this.props.moreText)), this.props.moreText.length > 0 || !(0, _isEmpty2.default)(this.props.moreText) ? _react.default.createElement(GreadmoreLabel, {
      htmlFor: "post-1",
      className: "read-more-trigger relative"
    }, _react.default.createElement("button", {
      className: "read-more-button flex alignCenter spaceBetween relative f12 fw7",
      onClick: this.handleChange
    }, _react.default.createElement("span", {
      className: "flexFull f14 fw7"
    }, this.state.checked ? this.props.showLessText : this.props.showMoreText, this.state.checked), _react.default.createElement(GDownArrowSpan, {
      className: "flex ml8 relative alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : '');
  }

};
ShowMore.propTypes = {
  wrapText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]).isRequired,
  moreText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]),
  showMoreText: _propTypes.default.string,
  showLessText: _propTypes.default.string,
  defaultOpen: _propTypes.default.bool,
  isDefaultShowMore: _propTypes.default.bool,
  trackSegment: _propTypes.default.func,
  appendText: _propTypes.default.string
};
ShowMore.defaultProps = {
  wrapText: '',
  moreText: '',
  showMoreText: 'Read More',
  showLessText: 'Read Less',
  defaultOpen: false,
  isDefaultShowMore: true,
  trackSegment: () => {}
};
var _default = ShowMore;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/qcp/QcpAsync.js":
/*!****************************************!*\
  !*** ./app-v2/screens/qcp/QcpAsync.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _list = _interopRequireDefault(__webpack_require__(/*! modules/quote/compare/list */ "./app-v2/modules/quote/compare/list/index.js"));

var _quotes = _interopRequireDefault(__webpack_require__(/*! modules/quote/compare/quotes */ "./app-v2/modules/quote/compare/quotes/index.js"));

var _roster = _interopRequireDefault(__webpack_require__(/*! modules/roster */ "./app-v2/modules/roster/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QcpAsync = ({
  location,
  goBack
}) => {
  const quoteIds = location.query.quoteIds;

  const trackSegmentEvent = (data = {}) => {
    (0, _utils.rescue)(() => {
      (0, _segmentEvents.trackSegment)({
        event: data.event,
        category: data.category || 'QCP',
        section: data.section || '',
        object: data.object,
        cta: data.cta,
        misc_id_1: data.miscId1,
        misc_type_1: data.miscType1,
        misc_id_2: data.miscId2,
        misc_type_2: data.miscType2
      });
    });
  };

  return _react.default.createElement("div", null, _react.default.createElement(_roster.default, {
    timeout: 3000
  }), quoteIds && quoteIds.length === 2 ? _react.default.createElement(_quotes.default, {
    quoteIds: quoteIds,
    trackSegment: trackSegmentEvent
  }) : _react.default.createElement(_list.default, {
    trackSegment: trackSegmentEvent
  }));
};

QcpAsync.propTypes = {
  location: _propTypes.default.object.isRequired,
  goBack: _propTypes.default.func.isRequired
};
var _default = QcpAsync;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jb21wYXJlL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY29tcGFyZS9jb21wb25lbnRzL0NvbXBhcmVDYWIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY29tcGFyZS9jb21wb25lbnRzL0NvbXBhcmVGbGlnaHRzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2NvbXBhcmUvY29tcG9uZW50cy9Db21wYXJlSG90ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY29tcGFyZS9jb21wb25lbnRzL0NvbXBhcmVIb3RlbHNTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2NvbXBhcmUvY29tcG9uZW50cy9Db21wYXJlSXRpbmVyYXJ5LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2NvbXBhcmUvY29tcG9uZW50cy9Db21wYXJlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jb21wYXJlL2NvbXBvbmVudHMvQ29tcGFyZVByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2NvbXBhcmUvY29tcG9uZW50cy9Db21wYXJlVGV4dFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY29tcGFyZS9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jb21wYXJlL2NvbXBvbmVudHMvSW5jbHVzaW9uRXhjbHVzaW9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2NvbXBhcmUvbGlzdC9RdW90ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY29tcGFyZS9saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2NvbXBhcmUvcXVvdGVzL0NvbXBhcmVRdW90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY29tcGFyZS9xdW90ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL0FnZW50Q2hhdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvUXVvdGVDYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9wcmljZS9DdXRQcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvcHJpY2UvUHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL3ByaWNlL1ByaWNlU3VmZml4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9wcmljZS9RdW90ZVByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Jvc3Rlci9HLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Jvc3Rlci9Sb3N0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcm9zdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9SYXRpbmdTdGFyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9TaG93TW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9xY3AvUWNwQXN5bmMuanMiXSwibmFtZXMiOlsiR01vZGFsRnVsbFZpZXdDb250YWluZXJEaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIkdBZ2VudENvbXBheUltZ0RpdiIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJHQWdlbnRDb21wYXlJbWdTbWFsbERpdiIsIkdBZ2VudENvbXBhbnlOYW1lRGl2IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIkdDb21wYXJlQ2FyZENvbnRlbnREaXYiLCJib3JkZXJSaWdodCIsInRyYW5zZm9ybSIsIndvcmRCcmVhayIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJHQ2FyZFZpZXdBY3Rpb25EaXYiLCJHSG90ZWxSYXRpbmdEaXYiLCJHSXRpbmVyYXJ5VGltZUxpbmVEaXYiLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwiY29udGVudCIsImJhY2tncm91bmQiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwiQ29tcGFyZUNhYiIsInF1b3RlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJxdW90ZUlkIiwiY2Fic1RleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiQ29tcGFyZUZsaWdodHMiLCJmbGlnaHRzVGV4dCIsImxlbmd0aCIsIkNvbXBhcmVIb3RlbCIsImNvbXBhcmVJdGVtcyIsImlkIiwicXVvdGUiLCJob3RlbHMiLCJob3RlbHNEZXRhaWwiLCJob3RlbFRleHQiLCJDb21wYXJlSG90ZWxzU2VjdGlvbiIsImhvdGVsIiwiaG90ZWxJbmZvcyIsImhvdGVsSW5mbyIsImhvdGVsSWQiLCJuYW1lIiwicmF0aW5nIiwiYXJyYXkiLCJDb21wYXJlSXRpbmVyYXJ5IiwiQ29tcG9uZW50Iiwic3RhdGUiLCJzaG93TW9yZSIsInRleHQiLCJzaG93QW5kSGlkZUl0aW5lcmFyeSIsInByb3BzIiwidHJhY2tTZWdtZW50IiwiZXZlbnQiLCJPUkdBTklTTV9DTElDS0VEIiwic2VjdGlvbiIsImN0YSIsIm1pc2NJZDEiLCJqb2luIiwibWlzY1R5cGUxIiwic2V0U3RhdGUiLCJyZW5kZXJRdW90ZUl0aW5lcmFyeSIsImlzVmlld01vcmUiLCJ0cmlwRGF5cyIsIm5ld0Zvcm1hdFRyaXBEYXlzIiwic2xpY2UiLCJkYXlJdGluZXJhcnkiLCJpZHgiLCJkYXlJbmZvSW5kZXgiLCJmaW5kIiwiZCIsInNlY3Rpb25UeXBlIiwidGl0bGUiLCJyZW5kZXIiLCJmdW5jIiwicmVuZGVyTGlzdEl0ZW0iLCJpbmNsdXNpb25zIiwiaXNFeGNsdXNpb24iLCJpY29uIiwiaW5jIiwia2V5IiwiQ29tcGFyZUxpc3QiLCJsaXN0SXRlbXMiLCJib29sIiwiQ29tcGFyZVByaWNlIiwicXVvdGVJbmZvIiwicHJpY2VJbmZvcm1hdGlvbiIsImRpc2NvdW50SW5mb3JtYXRpb24iLCJDb21wYXJlVGV4dFNlY3Rpb24iLCJSZWFjdCIsInN0cmluZyIsIkhlYWRlciIsImdvQmFjayIsIkluY2x1c2lvbkV4Y2x1c2lvbiIsInNob3dBbmRIaWRlU2VjdGlvbiIsInVuZGVmaW5lZCIsImV4Y2x1c2lvbnNUZXh0IiwiaW5jbHVzaW9uc1RleHQiLCJkZWZhdWx0UHJvcHMiLCJRdW90ZUxpc3QiLCJxdW90ZUlkcyIsImRpc2FibGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInNob3dSb3N0ZXIiLCJ0eXBlIiwiV0FSTklOR19UT0FTVEVSIiwibWVzc2FnZSIsInB1c2giLCJ0b1N0cmluZyIsImNhdGVnb3J5IiwiZmlsdGVyIiwiY29tcGFyZVF1b3RlcyIsInF1ZXJ5U3RyaW5nIiwicmVkdWNlIiwiZmluYWxTdHJpbmciLCJwdXNoU3RhdGUiLCJwYXJhbXMiLCJyZXF1ZXN0ZWRUcmlwSWQiLCJjb21wb25lbnREaWRNb3VudCIsImxvY2F0aW9uIiwic3RhdGVPYmoiLCJxdWVyeSIsInFJZHMiLCJPUkdBTklTTV9WSUVXRUQiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImFnZW50IiwicHJvZmlsZVBpY3R1cmUiLCJkaXNwbGF5TmFtZSIsImNvbXBhbnlOYW1lIiwiZGlzcGxheVJhdGluZyIsImluY2x1ZGVzIiwiQ29tcGFyZVF1b3RlcyIsImNvbnN0cnVjdG9yIiwiaGFuZGxlU2Nyb2xsIiwiYWdlbnRDb21wYW55TmFtZSIsInN0eWxlIiwiYm94U2hhZG93Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ0cmFja1NlZ21lbnRFdmVudCIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiaXNFdmVudFRyYWNrZWQiLCJQcmljZSIsIkhvdGVsIiwiSXRpbmVyYXJ5IiwiSW5jbHVzaW9uIiwiRXhjbHVzaW9uIiwiQ2FicyIsIkZsaWdodHMiLCJjb21wYXJlUXVvdGVSZWYiLCJwYWRkaW5nVG9wIiwiY2xpZW50SGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW5kZXJBZ2VudENvbXBhbnkiLCJ0cmlwSWQiLCJvYmoiLCJyZWYiLCJhZ2VudHNDb252ZXJ0ZWRUcmlwcyIsIkFnZW50Q2hhdEJ1dHRvbiIsInRleHRDbGFzc05hbWUiLCJDaGF0Q29udGFpbmVyIiwiQ2hhdCIsImNvbnRhaW5lciIsInNob3dJY29uIiwiaGFuZGxlQ2hhdENsaWNrIiwiY3VzdG9tQnV0dG9uIiwiUXVvdGVDYXJkSGVhZGVyIiwiaGVhZGluZyIsImNoYXRCdXR0b25OYW1lIiwibm9kZSIsIkN1dFByaWNlIiwicHJpY2UiLCJjdXJyZW5jeSIsIm51bWJlciIsInBlclBlcnNvbiIsIlByaWNlU3VmZml4Iiwic3VmZml4IiwicmVuZGVyT3JpZ2luYWxQcmljZSIsImxpbmVCcmVhayIsInJlbmRlckRpc2NvdW50ZWRQcmljZSIsImRpc2NvdW50IiwiUXVvdGVQcmljZSIsInNob3dPcmlnaW5hbFByaWNlIiwiaGFzRGlzY291bnRBcHBsaWVkIiwiR1Jvc3RlckRpdiIsInJpZ2h0IiwiY3Vyc29yIiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsImJvcmRlckNvbG9yIiwiUm9zdGVyIiwiaXNSb3N0ZXJPcGVuIiwiY2xvc2VSb3N0ZXIiLCJiaW5kIiwidGltZW91dCIsImFsbG93VGltZU91dCIsInNldFRpbWVvdXQiLCJoaWRlUm9zdGVyIiwicm9zdGVyIiwiR1JhdGluZ1VsIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJnZXRTdGFycyIsInN0YXJOdW0iLCJrZXlUeXBlIiwiaSIsInN0YXJzIiwiUmF0aW5nU3RhciIsImlzRW1wdHlTdGFyc0hpZGRlbiIsInJhdGluZ0JhclJhbmdlIiwidHJ1bmNhdGVkUmF0aW5nIiwiTWF0aCIsInRydW5jIiwiZnJhY3Rpb25hbFJhdGluZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZnVsbFN0YXJDb3VudCIsImhhbGZTdGFyQ291bnQiLCJlbXB0eVN0YXJDb3VudCIsIlN0YXJJY29uIiwiSGFsZlN0YXIiLCJTdGFySWNvbkVtcHR5IiwiR3JlYWRtb3JlTGFiZWwiLCJsYWJlbCIsImxpbmVIZWlnaHQiLCJHRG93bkFycm93U3BhbiIsInNwYW4iLCJTaG93TW9yZSIsImRlZmF1bHRPcGVuIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TGVuZ3RoIiwiaXNEZWZhdWx0U2hvd01vcmUiLCJhcHBlbmRUZXh0Iiwid3JhcFRleHQiLCJtb3JlVGV4dCIsInNob3dMZXNzVGV4dCIsInNob3dNb3JlVGV4dCIsIm9uZU9mVHlwZSIsIlFjcEFzeW5jIiwiZGF0YSIsIm1pc2NfaWRfMSIsIm1pc2NfdHlwZV8xIiwibWlzY19pZF8yIiwibWlzY0lkMiIsIm1pc2NfdHlwZV8yIiwibWlzY1R5cGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFTyxNQUFNQSw2QkFBNkJDLG1CQUFVQyxHQUFWLENBQWM7QUFDdERDLFVBQVEsb0JBRDhDO0FBRXREQyxZQUFVO0FBRjRDLENBQWQsQ0FBbkM7Ozs7QUFLQSxNQUFNQyxxQkFBcUJKLG1CQUFVQyxHQUFWLENBQWM7QUFDOUNJLFNBQU8sTUFEdUM7QUFFOUNILFVBQVEsTUFGc0M7QUFHOUNJLGNBQVksUUFIa0M7QUFJOUNDLFdBQVM7QUFKcUMsQ0FBZCxDQUEzQjs7OztBQU9BLE1BQU1DLDBCQUEwQlIsbUJBQVVD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aEI7QUFHWHpELGlCQUFTK0wsS0FBSy9MLE9BQUwsSUFBZ0IsRUFIZDtBQUlYOUIsZ0JBQVE2TixLQUFLN04sTUFKRjtBQUtYK0IsYUFBSzhMLEtBQUs5TCxHQUxDO0FBTVgrTCxtQkFBV0QsS0FBSzdMLE9BTkw7QUFPWCtMLHFCQUFhRixLQUFLM0wsU0FQUDtBQVFYOEwsbUJBQVdILEtBQUtJLE9BUkw7QUFTWEMscUJBQWFMLEtBQUtNO0FBVFAsT0FBYjtBQVdELEtBWkQ7QUFhRCxHQWREOztBQWdCQSxTQUNFLDBDQUNFLDZCQUFDLGVBQUQ7QUFBUSxhQUFTO0FBQWpCLElBREYsRUFHSXhKLFlBQVlBLFNBQVN2RSxNQUFULEtBQW9CLENBQWhDLEdBQ0ksNkJBQUMsZUFBRDtBQUFlLGNBQVV1RSxRQUF6QjtBQUFtQyxrQkFBYzJDO0FBQWpELElBREosR0FFSSw2QkFBQyxhQUFEO0FBQVcsa0JBQWNBO0FBQXpCLElBTFIsQ0FERjtBQVVELENBN0JEOztBQStCQXNHLFNBQVM5TixTQUFULEdBQXFCO0FBQ25CbUcsWUFBVWxHLG1CQUFVQyxNQUFWLENBQWlCQyxVQURSO0FBRW5Ca0UsVUFBUXBFLG1CQUFVa0QsSUFBVixDQUFlaEQ7QUFGSixDQUFyQjtlQUtlMk4sUSIsImZpbGUiOiJjb21wYXJlLXF1b3Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdNb2RhbEZ1bGxWaWV3Q29udGFpbmVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJ2NhbGMoMTAwdmggLSA0OHB4KScsXG4gIG92ZXJmbG93OiAnYXV0bydcbn0pO1xuXG5leHBvcnQgY29uc3QgR0FnZW50Q29tcGF5SW1nRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnNjRweCcsXG4gIGhlaWdodDogJzY0cHgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnXG59KTtcblxuZXhwb3J0IGNvbnN0IEdBZ2VudENvbXBheUltZ1NtYWxsRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnNDBweCcsXG4gIGhlaWdodDogJzQwcHgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnXG59KTtcblxuZXhwb3J0IGNvbnN0IEdBZ2VudENvbXBhbnlOYW1lRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJvcmRlcjogJzFweCBzb2xpZCAjYjJiMmIyJyxcbiAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgcGFkZGluZzogJzhweCcsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBtYXhIZWlnaHQ6ICc0OHB4JyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXG59KTtcblxuZXhwb3J0IGNvbnN0IEdDb21wYXJlQ2FyZENvbnRlbnREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyY+ZGl2OmZpcnN0LWNoaWxkJzoge1xuICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICNlZmVmZWYnXG4gIH0sXG4gICcmICsgLmNhcmRWaWV3TGVzcyBzdmcnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlWigxODBkZWcpJ1xuICB9LFxuICAnJiAuY29udGVudExpc3QnOiB7XG4gICAgd29yZEJyZWFrOiAnYnJlYWstd29yZCdcbiAgfSxcbiAgJyYgLmNvbnRlbnRMaXN0Omxhc3QtY2hpbGQnOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMCAhaW1wb3J0YW50JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMCAhaW1wb3J0YW50J1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdDYXJkVmlld0FjdGlvbkRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAuY2FyZFZpZXdMZXNzIHN2Zyc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDE4MGRlZyknXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgR0hvdGVsUmF0aW5nRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnNDhweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZDRkNGQ0J1xufSk7XG5cbmV4cG9ydCBjb25zdCBHSXRpbmVyYXJ5VGltZUxpbmVEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHBhZGRpbmdMZWZ0OiAnMjRweCcsXG4gIHBhZGRpbmdCb3R0b206ICcyNHB4JyxcbiAgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsXG4gICcmOmJlZm9yZSc6IHtcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgd2lkdGg6ICc4cHgnLFxuICAgIGhlaWdodDogJzhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmM2UzOScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzRweCcsXG4gICAgekluZGV4OiAnMidcbiAgfSxcbiAgJyY6YWZ0ZXInOiB7XG4gICAgY29udGVudDogJ1wiXCInLFxuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Q0ZDRkNCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzdweCcsXG4gICAgekluZGV4OiAnMSdcbiAgfSxcbiAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICBwYWRkaW5nQm90dG9tOiAnMCcsXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR0NvbXBhcmVDYXJkQ29udGVudERpdiB9IGZyb20gJy4uL0cnO1xuXG5jb25zdCBDb21wYXJlQ2FiID0gKHsgcXVvdGVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R0NvbXBhcmVDYXJkQ29udGVudERpdiBjbGFzc05hbWU9XCJmbGV4IGF0X2NvbXBhcmVDYXJkQ29udGVudFwiPlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyhxdW90ZXMpLm1hcChxdW90ZUlkID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBwMTVcIiBrZXk9e2BjYWJfJHtxdW90ZUlkfWB9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTRwXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcXVvdGVzW3F1b3RlSWRdLmNhYnNUZXh0XG4gICAgICAgICAgICAgICAgICAgID8gcXVvdGVzW3F1b3RlSWRdLmNhYnNUZXh0XG4gICAgICAgICAgICAgICAgICAgIDogJ05vdCBpbmNsdWRlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9HQ29tcGFyZUNhcmRDb250ZW50RGl2PlxuICApO1xufTtcblxuQ29tcGFyZUNhYi5wcm9wVHlwZXMgPSB7XG4gIHF1b3RlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZUNhYjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHQ29tcGFyZUNhcmRDb250ZW50RGl2IH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyBjdXJyZW5jeVRvU3ltYm9sIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcblxuY29uc3QgQ29tcGFyZUZsaWdodHMgPSAoeyBxdW90ZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHQ29tcGFyZUNhcmRDb250ZW50RGl2IGNsYXNzTmFtZT1cImZsZXggYXRfY29tcGFyZUNhcmRDb250ZW50XCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKHF1b3RlcykubWFwKHF1b3RlSWQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIHAxNVwiIGtleT17YGZsaWdodHNfJHtxdW90ZUlkfWB9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTRwXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcXVvdGVzW3F1b3RlSWRdLmZsaWdodHNUZXh0Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA/IHF1b3Rlc1txdW90ZUlkXS5mbGlnaHRzVGV4dFxuICAgICAgICAgICAgICAgICAgICA6ICdOb3QgaW5jbHVkZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvR0NvbXBhcmVDYXJkQ29udGVudERpdj5cbiAgKTtcbn07XG5cbkNvbXBhcmVGbGlnaHRzLnByb3BUeXBlcyA9IHtcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlRmxpZ2h0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29tcGFyZUhvdGVsc1NlY3Rpb24gZnJvbSAnLi9Db21wYXJlSG90ZWxzU2VjdGlvbic7XG5pbXBvcnQgQ29tcGFyZVRleHRTZWN0aW9uIGZyb20gJy4vQ29tcGFyZVRleHRTZWN0aW9uJztcbmltcG9ydCB7IEdDb21wYXJlQ2FyZENvbnRlbnREaXYgfSBmcm9tICcuLi9HJztcblxuY29uc3QgQ29tcGFyZUhvdGVsID0gKHsgcXVvdGVzIH0pID0+IHtcbiAgY29uc3QgY29tcGFyZUl0ZW1zID0gT2JqZWN0LmtleXMocXVvdGVzKS5tYXAoKGlkKSA9PiB7XG4gICAgY29uc3QgcXVvdGUgPSBxdW90ZXNbaWRdO1xuICAgIGNvbnN0IGhvdGVscyA9IHF1b3RlLmhvdGVsc0RldGFpbDtcblxuICAgIGlmIChob3RlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKDxDb21wYXJlVGV4dFNlY3Rpb25cbiAgICAgICAga2V5PXtgaG90ZWxfJHtpZH1gfVxuICAgICAgICB0ZXh0PXtxdW90ZS5ob3RlbFRleHR9XG4gICAgICAvPik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcGFyZUhvdGVsc1NlY3Rpb25cbiAgICAgICAga2V5PXtgaG90ZWxfJHtpZH1gfVxuICAgICAgICBob3RlbHM9e2hvdGVsc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R0NvbXBhcmVDYXJkQ29udGVudERpdiBjbGFzc05hbWU9XCJmbGV4IGF0X2NvbXBhcmVDYXJkQ29udGVudFwiPlxuICAgICAge2NvbXBhcmVJdGVtc31cbiAgICA8L0dDb21wYXJlQ2FyZENvbnRlbnREaXY+XG4gICk7XG59O1xuXG5Db21wYXJlSG90ZWwucHJvcFR5cGVzID0ge1xuICBxdW90ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVIb3RlbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR0hvdGVsUmF0aW5nRGl2IH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyBTdGFySWNvbiwgfSBmcm9tICdhcHAvaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBDb21wYXJlSG90ZWxzU2VjdGlvbiA9ICh7IGhvdGVscyB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIHAxNVwiPlxuICAgICAge1xuICAgICAgICBob3RlbHMubWFwKChob3RlbCkgPT4ge1xuICAgICAgICAgIHJldHVybiBob3RlbC5ob3RlbEluZm9zLm1hcCgoaG90ZWxJbmZvKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjQgY29udGVudExpc3RcIiBrZXk9e2Bob3RlbF8ke2hvdGVsSW5mby5ob3RlbElkfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHBcIj57aG90ZWxJbmZvLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxHSG90ZWxSYXRpbmdEaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciBwMiBwbDE1IHByMTUgcmFkaXVzMiBtdDggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYxNHAgbXIyIGF0X3JhdGluZ1RleHRcIj57aG90ZWxJbmZvLnJhdGluZyB8fCAnLSd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi0xNFwiPlxuICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0dIb3RlbFJhdGluZ0Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29tcGFyZUhvdGVsc1NlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBob3RlbHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlSG90ZWxzU2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnYXBwL2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IEdDb21wYXJlQ2FyZENvbnRlbnREaXYsIEdJdGluZXJhcnlUaW1lTGluZURpdiwgR0NhcmRWaWV3QWN0aW9uRGl2IH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY2xhc3MgQ29tcGFyZUl0aW5lcmFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNob3dNb3JlOiBmYWxzZSxcbiAgICB0ZXh0OiAnVmlldyBNb3JlJ1xuICB9O1xuXG4gIHNob3dBbmRIaWRlSXRpbmVyYXJ5ID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgc2VjdGlvbjogJ0l0aW5lcmFyeScsXG4gICAgICBjdGE6IHRoaXMuc3RhdGUuc2hvd01vcmUgPyAnVmlldyBMZXNzJyA6ICdWaWV3IE1vcmUnLFxuICAgICAgbWlzY0lkMTogT2JqZWN0LmtleXModGhpcy5wcm9wcy5xdW90ZXMpLmpvaW4oJzo6JyksXG4gICAgICBtaXNjVHlwZTE6ICdxdW90ZV9pZF9sZWZ0OjpxdW90ZV9pZF9yaWdodCdcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dNb3JlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vcmU6ICF0aGlzLnN0YXRlLnNob3dNb3JlLCB0ZXh0OiAnVmlldyBNb3JlJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb3JlOiAhdGhpcy5zdGF0ZS5zaG93TW9yZSwgdGV4dDogJ1ZpZXcgTGVzcycgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlclF1b3RlSXRpbmVyYXJ5ID0gKHF1b3RlLCBpc1ZpZXdNb3JlKSA9PiB7XG4gICAgbGV0IHRyaXBEYXlzID0gcXVvdGUubmV3Rm9ybWF0VHJpcERheXM7XG4gICAgaWYgKGlzVmlld01vcmUgJiYgIXRoaXMuc3RhdGUuc2hvd01vcmUpIHtcbiAgICAgIHRyaXBEYXlzID0gdHJpcERheXMuc2xpY2UoMCwgNSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyaXBEYXlzLm1hcCgoZGF5SXRpbmVyYXJ5LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGRheUluZm9JbmRleCA9IE9iamVjdC5rZXlzKGRheUl0aW5lcmFyeSkuZmluZChkID0+IGRheUl0aW5lcmFyeVtkXS5zZWN0aW9uVHlwZSA9PT0gJ2l0aW5lcmFyeScpO1xuXG4gICAgICByZXR1cm4gPEdJdGluZXJhcnlUaW1lTGluZURpdiBrZXk9e2lkeH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTQgcGZjMlwiPntgRGF5ICR7aWR4ICsgMX1gfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgcGZjMyBtMCBtdDhcIj5cbiAgICAgICAgICB7ZGF5SXRpbmVyYXJ5W2RheUluZm9JbmRleF0gJiYgZGF5SXRpbmVyYXJ5W2RheUluZm9JbmRleF0udGl0bGV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvR0l0aW5lcmFyeVRpbWVMaW5lRGl2PjtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdW90ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGlzVmlld01vcmUgPSBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R0NvbXBhcmVDYXJkQ29udGVudERpdiBjbGFzc05hbWU9XCJmbGV4IGF0X2NvbXBhcmVDYXJkQ29udGVudFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHF1b3RlcykubWFwKChpZCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBxdW90ZSA9IHF1b3Rlc1tpZF07XG4gICAgICAgICAgICAgIGlmIChxdW90ZS5uZXdGb3JtYXRUcmlwRGF5cy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgaXNWaWV3TW9yZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcDE1XCIga2V5PXtgaXRpbmVyYXJ5XyR7aWR9YH0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJRdW90ZUl0aW5lcmFyeShxdW90ZSwgaXNWaWV3TW9yZSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L0dDb21wYXJlQ2FyZENvbnRlbnREaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBpc1ZpZXdNb3JlXG4gICAgICAgICAgICA/IDxHQ2FyZFZpZXdBY3Rpb25EaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGYxNCBmdzcgc2ZjMSBtcjE1IG1iMTUgZnJpZ2h0IGZsZXggYWxpZ25DZW50ZXIgYXRfcWNwX3ZpZXdNb3JlICR7dGhpcy5zdGF0ZS5zaG93TW9yZSA/ICdjYXJkVmlld0xlc3MnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dBbmRIaWRlSXRpbmVyYXJ5fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlibG9jayBpY29uLTE0IG1sOFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qmx1ZURvd25BcnJvdyAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvR0NhcmRWaWV3QWN0aW9uRGl2PlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ29tcGFyZUl0aW5lcmFyeS5wcm9wVHlwZXMgPSB7XG4gIHF1b3RlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVJdGluZXJhcnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIENyb3NzUmVkLCBHcmVlblRpY2tJbmNsdXNpb25cbn0gZnJvbSAnYXBwL2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBTaG93TW9yZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9TaG93TW9yZSc7XG5cbmNvbnN0IHJlbmRlckxpc3RJdGVtID0gKGluY2x1c2lvbnMsIGlzRXhjbHVzaW9uKSA9PiB7XG4gIGNvbnN0IGljb24gPSBpc0V4Y2x1c2lvbiA/IDxDcm9zc1JlZCAvPiA6IDxHcmVlblRpY2tJbmNsdXNpb24gLz47XG5cbiAgcmV0dXJuIGluY2x1c2lvbnMubWFwKChpbmMsIGlkKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7aWR9XyR7aW5jLm5hbWV9YDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iMTUgY29udGVudExpc3RcIiBrZXk9e2tleX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi0xOCBwMiBtcjRcIj5cbiAgICAgICAgICB7aWNvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNFwiPntpbmMubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcbn07XG5cbmNvbnN0IENvbXBhcmVMaXN0ID0gKHsgaW5jbHVzaW9ucywgaXNFeGNsdXNpb24gfSkgPT4ge1xuICBjb25zdCBsaXN0SXRlbXMgPSByZW5kZXJMaXN0SXRlbShpbmNsdXNpb25zLCBpc0V4Y2x1c2lvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIHAxNVwiPlxuICAgICAge2xpc3RJdGVtc31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbXBhcmVMaXN0LnByb3BUeXBlcyA9IHtcbiAgaW5jbHVzaW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGlzRXhjbHVzaW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR0NvbXBhcmVDYXJkQ29udGVudERpdiB9IGZyb20gJy4uL0cnO1xuaW1wb3J0IHsgZ2V0UXVvdGVzQmFzaWNJbmZvIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUxpc3QnO1xuaW1wb3J0IFF1b3RlUHJpY2UgZnJvbSAnbW9kdWxlcy9xdW90ZS9zaGFyZWQvcHJpY2UvUXVvdGVQcmljZSc7XG5cbmNvbnN0IENvbXBhcmVQcmljZSA9ICh7IHF1b3RlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEdDb21wYXJlQ2FyZENvbnRlbnREaXYgY2xhc3NOYW1lPVwiZmxleCBhdF9jb21wYXJlQ2FyZENvbnRlbnRcIj5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMocXVvdGVzKS5tYXAocXVvdGVJZCA9PiB7XG4gICAgICAgICAgY29uc3QgcXVvdGUgPSBxdW90ZXNbcXVvdGVJZF07XG4gICAgICAgICAgY29uc3QgcXVvdGVJbmZvID0gZ2V0UXVvdGVzQmFzaWNJbmZvKHF1b3RlKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIHAxNVwiIGtleT17YHByaWNlXyR7cXVvdGVJZH1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBxdW90ZVByaWNlSW5mb1wiPlxuICAgICAgICAgICAgICAgIDxRdW90ZVByaWNlIHsuLi5xdW90ZUluZm8ucHJpY2VJbmZvcm1hdGlvbn0gey4uLnF1b3RlSW5mby5kaXNjb3VudEluZm9ybWF0aW9ufSBsaW5lQnJlYWs9e3RydWV9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvR0NvbXBhcmVDYXJkQ29udGVudERpdj5cbiAgKTtcbn07XG5cbkNvbXBhcmVQcmljZS5wcm9wVHlwZXMgPSB7XG4gIHF1b3RlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZVByaWNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDb21wYXJlVGV4dFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcDE1XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIyNCBjb250ZW50TGlzdFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBhdF90ZXh0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0IHx8ICdOb3QgSW5jbHVkZWQnfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVUZXh0U2VjdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBCYWNrMkljb25XaGl0ZSB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBnb0JhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiYzEgcDhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwNCBmbGV4XCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29CYWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXI4IGlucHV0LTI0IHA0IGlibG9jayBhdF9xY3BfYmFja0J0blwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJhY2sySWNvbldoaXRlIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiBmbGV4IGFsaWduQ2VudGVyIGZ3NyBzZmN3IGZsZXhGdWxsIGVsbGlwc2lzIGF0X3FjcF9oZWFkaW5nVG9wXCI+XG4gICAgICAgICAgICBDb21wYXJlIFF1b3Rlc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnYXBwL2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBDb21wYXJlTGlzdCBmcm9tICcuL0NvbXBhcmVMaXN0JztcbmltcG9ydCBDb21wYXJlVGV4dFNlY3Rpb24gZnJvbSAnLi9Db21wYXJlVGV4dFNlY3Rpb24nO1xuaW1wb3J0IHsgR0NvbXBhcmVDYXJkQ29udGVudERpdiwgR0NhcmRWaWV3QWN0aW9uRGl2IH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY2xhc3MgSW5jbHVzaW9uRXhjbHVzaW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBxdW90ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNFeGNsdXNpb246IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc0V4Y2x1c2lvbjogZmFsc2VcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93TW9yZTogZmFsc2UsXG4gICAgdGV4dDogJ1ZpZXcgTW9yZSdcbiAgfTtcblxuICBzaG93QW5kSGlkZVNlY3Rpb24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd01vcmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9yZTogIXRoaXMuc3RhdGUuc2hvd01vcmUsIHRleHQ6ICdWaWV3IE1vcmUnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vcmU6ICF0aGlzLnN0YXRlLnNob3dNb3JlLCB0ZXh0OiAnVmlldyBMZXNzJyB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIHNlY3Rpb246IHRoaXMucHJvcHMuaXNFeGNsdXNpb24gPyAnRXhjbHVzaW9uJyA6ICdJbmNsdXNpb24nLFxuICAgICAgY3RhOiB0aGlzLnN0YXRlLnNob3dNb3JlID8gJ1ZpZXcgTW9yZScgOiAnVmlldyBMZXNzJyxcbiAgICAgIG1pc2NJZDE6IE9iamVjdC5rZXlzKHRoaXMucHJvcHMucXVvdGVzKS5qb2luKCc6OicpLFxuICAgICAgbWlzY1R5cGUxOiAncXVvdGVfaWRfbGVmdDo6cXVvdGVfaWRfcmlnaHQnXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNFeGNsdXNpb24sIHF1b3RlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3dNb3JlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBpc1ZpZXdNb3JlID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21wYXJlSXRlbXMgPSBPYmplY3Qua2V5cyhxdW90ZXMpLm1hcCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IHF1b3RlID0gcXVvdGVzW2lkXTtcbiAgICAgIGxldCBpbmNsdXNpb25zID0gaXNFeGNsdXNpb24gPyBxdW90ZS5pbmNsdXNpb25zWycwJ10gOiBxdW90ZS5pbmNsdXNpb25zWycxJ107XG4gICAgICBpZiAoaW5jbHVzaW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAoPENvbXBhcmVUZXh0U2VjdGlvblxuICAgICAgICAgIGtleT17YGluY18ke2lkfWB9XG4gICAgICAgICAgdGV4dD17aXNFeGNsdXNpb24gPyBxdW90ZS5leGNsdXNpb25zVGV4dCA6IHF1b3RlLmluY2x1c2lvbnNUZXh0fVxuICAgICAgICAvPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmNsdXNpb25zLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgaXNWaWV3TW9yZSA9IHRydWU7XG4gICAgICAgIGlmICghc2hvd01vcmUpIHtcbiAgICAgICAgICBpbmNsdXNpb25zID0gaW5jbHVzaW9ucy5zbGljZSgwLCA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29tcGFyZUxpc3RcbiAgICAgICAgICBrZXk9e2BpbmNfJHtpZH1gfVxuICAgICAgICAgIGluY2x1c2lvbnM9e2luY2x1c2lvbnN9XG4gICAgICAgICAgaXNFeGNsdXNpb249e2lzRXhjbHVzaW9ufVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R0NvbXBhcmVDYXJkQ29udGVudERpdiBjbGFzc05hbWU9XCJmbGV4IGF0X2NvbXBhcmVDYXJkQ29udGVudFwiPlxuICAgICAgICAgIHtjb21wYXJlSXRlbXN9XG4gICAgICAgIDwvR0NvbXBhcmVDYXJkQ29udGVudERpdj5cbiAgICAgICAge1xuICAgICAgICAgIGlzVmlld01vcmVcbiAgICAgICAgICAgID8gPEdDYXJkVmlld0FjdGlvbkRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZjE0IGZ3NyBzZmMxIG1yMTUgbWIxNSBmcmlnaHQgZmxleCBhbGlnbkNlbnRlciBhdF9xY3Bfdmlld01vcmUgJHtzaG93TW9yZSA/ICdjYXJkVmlld0xlc3MnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dBbmRIaWRlU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGV4dH1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpYmxvY2sgaWNvbi0xNCBtbDhcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJsdWVEb3duQXJyb3cgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0dDYXJkVmlld0FjdGlvbkRpdj5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmNsdXNpb25FeGNsdXNpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgV0FSTklOR19UT0FTVEVSIH0gZnJvbSAnY29uc3RhbnRzL3Jvc3RlclR5cGVzJztcbmltcG9ydCBSYXRpbmdTdGFyIGZyb20gJ21vZHVsZXMvc2hhcmVkL1JhdGluZ1N0YXInO1xuaW1wb3J0IHsgR01vZGFsRnVsbFZpZXdDb250YWluZXJEaXYsIEdBZ2VudENvbXBheUltZ0RpdiB9IGZyb20gJy4vLi4vRyc7XG5pbXBvcnQgeyBjb21wYXJlUXVvdGVzUGF0aCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQsIE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBnZXRRdW90ZXNCYXNpY0luZm8gfSBmcm9tICdtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL3F1b3RlTGlzdCc7XG5pbXBvcnQgUXVvdGVQcmljZSBmcm9tICdtb2R1bGVzL3F1b3RlL3NoYXJlZC9wcmljZS9RdW90ZVByaWNlJztcblxuY2xhc3MgUXVvdGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBxdW90ZUlkczogW10sXG4gICAgZGlzYWJsZTogdHJ1ZVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbG9jYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB7IGRpc2FibGU6IGZhbHNlIH07XG4gICAgaWYgKGxvY2F0aW9uLnF1ZXJ5LnFJZHMpIHtcbiAgICAgIHN0YXRlT2JqLnF1b3RlSWRzID0gbG9jYXRpb24ucXVlcnkucUlkcztcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZU9iaik7XG5cbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fVklFV0VELFxuICAgICAgY2F0ZWdvcnk6ICdRQ1AgLSBTZWxlY3QgUXVvdGVzJyxcbiAgICAgIHNlY3Rpb246ICdRdW90ZSBMaXN0JyxcbiAgICAgIGN0YTogJycsXG4gICAgfSk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGxvY2F0aW9uLnF1ZXJ5LnFJZHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBxdW90ZUlkczogbG9jYXRpb24ucXVlcnkucUlkcyB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSwgaWQpID0+IHtcbiAgICBsZXQgcXVvdGVJZHMgPSB0aGlzLnN0YXRlLnF1b3RlSWRzO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5xdW90ZUlkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb3BzLnNob3dSb3N0ZXIoeyB0eXBlOiBXQVJOSU5HX1RPQVNURVIsIG1lc3NhZ2U6ICdPbmx5IDIgcXVvdGVzIGNhbiBiZSBzZWxlY3RlZCcgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcXVvdGVJZHMucHVzaChpZC50b1N0cmluZygpKTtcblxuICAgICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgICAgY2F0ZWdvcnk6ICdRQ1AgLSBTZWxlY3QgUXVvdGVzJyxcbiAgICAgICAgc2VjdGlvbjogJ1F1b3RlIENhcmQnLFxuICAgICAgICBjdGE6ICdDaGVja2JveCcsXG4gICAgICAgIG1pc2NJZDE6IGlkLFxuICAgICAgICBtaXNjVHlwZTE6ICdxdW90ZV9pZCdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdW90ZUlkcyA9IHF1b3RlSWRzLmZpbHRlcihxdW90ZUlkID0+IHF1b3RlSWQgIT09IGlkLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgcXVvdGVJZHM6IHF1b3RlSWRzIH0pO1xuICB9O1xuXG4gIGNvbXBhcmVRdW90ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB0aGlzLnN0YXRlLnF1b3RlSWRzLnJlZHVjZSgoZmluYWxTdHJpbmcsIHF1b3RlSWQpID0+XG4gICAgICAoYCR7ZmluYWxTdHJpbmd9JnF1b3RlSWRzPSR7cXVvdGVJZH1gKSwgJz8nXG4gICAgKTtcbiAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZShgJHtjb21wYXJlUXVvdGVzUGF0aCh0aGlzLnByb3BzLnBhcmFtcy5yZXF1ZXN0ZWRUcmlwSWQpfSR7cXVlcnlTdHJpbmd9YCk7XG5cbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIGNhdGVnb3J5OiAnUUNQIC0gU2VsZWN0IFF1b3RlcycsXG4gICAgICBzZWN0aW9uOiAnQm90dG9tIFN0aWNreScsXG4gICAgICBjdGE6ICdDb21wYXJlIFF1b3RlcycsXG4gICAgICBtaXNjSWQxOiB0aGlzLnN0YXRlLnF1b3RlSWRzLmpvaW4oJzo6JyksXG4gICAgICBtaXNjVHlwZTE6ICdxdW90ZV9pZF9sZWZ0OjpxdW90ZV9pZF9yaWdodCdcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdW90ZXMsIGdvQmFjayB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1b3RlSWRzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgZ29CYWNrPXtnb0JhY2t9IC8+XG4gICAgICAgIDxHTW9kYWxGdWxsVmlld0NvbnRhaW5lckRpdiBjbGFzc05hbWU9XCJzYmM1IHBiNjRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBzYmM1XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTQgcGZjMyBhdF9jb21wYXJlTGltaXRhdGlvbk1lc3NhZ2VcIj5Zb3UgY2FuIGNvbXBhcmUgdXB0byAyIHF1b3RlczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdW90ZXMgJiYgT2JqZWN0LmtleXMocXVvdGVzKS5tYXAocXVvdGVJZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHF1b3RlID0gcXVvdGVzW3F1b3RlSWRdO1xuICAgICAgICAgICAgICBjb25zdCBxdW90ZUluZm8gPSBnZXRRdW90ZXNCYXNpY0luZm8ocXVvdGUpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHByMCBtYjggc2JjdyBmbGV4IGFsaWduQ2VudGVyIGF0X3F1b3RlTGlzdFwiIGtleT17cXVvdGVJZH0+XG4gICAgICAgICAgICAgICAgICA8R0FnZW50Q29tcGF5SW1nRGl2IGNsYXNzTmFtZT1cIm1yMTUgYm9yZGVyIGF0X2FnZW50Q29tcGFueUltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtxdW90ZS5hZ2VudC5wcm9maWxlUGljdHVyZX0gYWx0PXtxdW90ZS5hZ2VudC5kaXNwbGF5TmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvR0FnZW50Q29tcGF5SW1nRGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZjE0IGZ3NyBtYjIgYXRfYWdlbnRDb21wYW55TmFtZVwiPntxdW90ZS5hZ2VudC5jb21wYW55TmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFyIHJhdGluZz17cXVvdGUuYWdlbnQuZGlzcGxheVJhdGluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIHF1b3RlUHJpY2VJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UXVvdGVQcmljZSB7Li4ucXVvdGVJbmZvLnByaWNlSW5mb3JtYXRpb259IHsuLi5xdW90ZUluZm8uZGlzY291bnRJbmZvcm1hdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbDhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9e2BxJHtxdW90ZS5pZH1gfSBjbGFzc05hbWU9XCJjaGVja2JveC1jb21tb24gYXRfcXVvdGVTZWxlY3RfaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cXVvdGVJZHMuaW5jbHVkZXMocXVvdGVJZC50b1N0cmluZygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsIHF1b3RlLmlkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHEke3F1b3RlLmlkfWB9IGNsYXNzTmFtZT1cInB0MCBhdF9xdW90ZVNlbGVjdF9sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBiMCBsMCByMCBwOCB6MTAgc2JjdyBiczRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGwgYXRfY29tcGFyZUJ0bl9tYWluXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucXVvdGVJZHMubGVuZ3RoIDwgMn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb21wYXJlUXVvdGVzfT5Db21wYXJlIFF1b3Rlc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9HTW9kYWxGdWxsVmlld0NvbnRhaW5lckRpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUXVvdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzaG93Um9zdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgcHVzaFN0YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHB1c2ggYXMgcHVzaFN0YXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGdvQmFjayB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0JztcblxuaW1wb3J0IHsgc2hvd1Jvc3RlciB9IGZyb20gJ21vZHVsZXMvcm9zdGVyL2FjdGlvbic7XG5pbXBvcnQgUXVvdGVMaXN0IGZyb20gJy4vUXVvdGVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIHF1b3RlczogX2dldChzdGF0ZSwgJ3F1b3RlLmxpc3QuZGF0YS5xdW90ZXMnLCB7fSksXG4gIH0pLCB7XG4gICAgc2hvd1Jvc3RlcixcbiAgICBwdXNoU3RhdGUsXG4gICAgZ29CYWNrXG4gIH1cbikoUXVvdGVMaXN0KSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCB7XG4gIFByaWNlUnVwZWUsIFRheGlDYWIsIEZsaWdodHMsIEl0aW5lcmFyeUljb24sXG4gIEhvdGVsLCBJbmNsdXNpb25zTmV3SWNvbiwgRXhjbHVzaW9uc1JlZCwgR3JlZW5UaWNrLCBCbHVlRG93bkFycm93XG59IGZyb20gJ2FwcC9oZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQge1xuICBHQWdlbnRDb21wYW55TmFtZURpdiwgR0FnZW50Q29tcGF5SW1nU21hbGxEaXYsIEdDb21wYXJlQ2FyZENvbnRlbnREaXZcbn0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQsIE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgcXVvdGVEZXRhaWxQYXRoLCBjb21wYXJlUXVvdGVzUGF0aCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgUmF0aW5nU3RhciBmcm9tICdtb2R1bGVzL3NoYXJlZC9SYXRpbmdTdGFyJztcbmltcG9ydCBRdW90ZUNhcmRIZWFkZXIgZnJvbSAnbW9kdWxlcy9xdW90ZS9zaGFyZWQvUXVvdGVDYXJkSGVhZGVyJztcbmltcG9ydCBDb21wYXJlSG90ZWwgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wYXJlSG90ZWwnO1xuaW1wb3J0IENvbXBhcmVJdGluZXJhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wYXJlSXRpbmVyYXJ5JztcbmltcG9ydCBJbmNsdXNpb25FeGNsdXNpb24gZnJvbSAnLi4vY29tcG9uZW50cy9JbmNsdXNpb25FeGNsdXNpb24nO1xuaW1wb3J0IENvbXBhcmVQcmljZSBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBhcmVQcmljZSc7XG5pbXBvcnQgQ29tcGFyZUNhYiBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBhcmVDYWInO1xuaW1wb3J0IENvbXBhcmVGbGlnaHRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGFyZUZsaWdodHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmNsYXNzIENvbXBhcmVRdW90ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5pc0V2ZW50VHJhY2tlZCA9IHtcbiAgICAgIFByaWNlOiBmYWxzZSxcbiAgICAgIEhvdGVsOiBmYWxzZSxcbiAgICAgIEl0aW5lcmFyeTogZmFsc2UsXG4gICAgICBJbmNsdXNpb246IGZhbHNlLFxuICAgICAgRXhjbHVzaW9uOiBmYWxzZSxcbiAgICAgIENhYnM6IGZhbHNlLFxuICAgICAgRmxpZ2h0czogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hZ2VudENvbXBhbnlOYW1lLnN0eWxlLnRvcCA9ICc0OHB4JztcbiAgICB0aGlzLmNvbXBhcmVRdW90ZVJlZi5zdHlsZS5wYWRkaW5nVG9wID0gYCR7dGhpcy5hZ2VudENvbXBhbnlOYW1lLmNsaWVudEhlaWdodCArIDQ4fXB4YDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5hZ2VudENvbXBhbnlOYW1lKSB7XG4gICAgICB0aGlzLmFnZW50Q29tcGFueU5hbWUuc3R5bGUuYm94U2hhZG93ID0gd2luZG93ICYmIHdpbmRvdy5wYWdlWU9mZnNldCA/ICcwIDJweCA2cHggMCByZ2JhKDAsMCwwLDAuNCknIDogJyc7XG4gICAgfVxuICB9O1xuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKHF1b3RlSWQsIHNlY3Rpb24sIGN0YSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgc2VjdGlvbixcbiAgICAgIGN0YSxcbiAgICAgIG1pc2NUeXBlMTogJ3F1b3RlX2lkJyxcbiAgICAgIG1pc2NJZDE6IHF1b3RlSWRcbiAgICB9KTtcbiAgfTtcblxuICBvblNlbnNvckNoYW5nZSA9IChpc1Zpc2libGUsIHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IHRyYWNrU2VnbWVudCwgcXVvdGVJZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgaWYgKCF0aGlzLmlzRXZlbnRUcmFja2VkW3NlY3Rpb25dKSB7XG4gICAgICAgIHRoaXMuaXNFdmVudFRyYWNrZWRbc2VjdGlvbl0gPSB0cnVlO1xuXG4gICAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX1ZJRVdFRCxcbiAgICAgICAgICBzZWN0aW9uLFxuICAgICAgICAgIGN0YTogJycsXG4gICAgICAgICAgbWlzY0lkMTogcXVvdGVJZHMuam9pbignOjonKSxcbiAgICAgICAgICBtaXNjVHlwZTE6ICdxdW90ZV9pZF9sZWZ0OjpxdW90ZV9pZF9yaWdodCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlckFnZW50Q29tcGFueShxdW90ZSkge1xuICAgIGNvbnN0IHsgcGFyYW1zLCBxdW90ZUlkcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0cmlwSWQgPSBwYXJhbXMucmVxdWVzdGVkVHJpcElkO1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVvdGVJZHMucmVkdWNlKChmaW5hbFN0cmluZywgcXVvdGVJZCkgPT5cbiAgICAgIChgJHtmaW5hbFN0cmluZ30mcUlkcz0ke3F1b3RlSWR9YCksICc/J1xuICAgICk7XG5cbiAgICByZXR1cm4gKDxMaW5rIHRvPXtgJHtjb21wYXJlUXVvdGVzUGF0aCh0cmlwSWQpfSR7cXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQocXVvdGUuaWQsICdBZ2VudCBJbmZvJywgJ0FnZW50IE5hbWUnKX0+XG4gICAgICA8R0FnZW50Q29tcGFueU5hbWVEaXYgY2xhc3NOYW1lPVwicmFkaXVzNCBwOCBwdDUgYm9yZGVyIHByMzIgcmVsYXRpdmVcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImYxNSBmdzkgcGZjMyBhdF9hZ2VudENvbXBhbnlOYW1lXCI+e3F1b3RlLmFnZW50LmNvbXBhbnlOYW1lfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyLXYgcjhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tMTRcIj5cbiAgICAgICAgICAgIDxCbHVlRG93bkFycm93IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HQWdlbnRDb21wYW55TmFtZURpdj5cbiAgICA8L0xpbms+KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHF1b3RlSWRzLCBwYXJhbXMsIGdvQmFjaywgdHJhY2tTZWdtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHF1b3RlcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMucXVvdGVzKVxuICAgICAgLmZpbHRlcihxdW90ZUlkID0+IHF1b3RlSWRzLmluY2x1ZGVzKHF1b3RlSWQpKVxuICAgICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLnByb3BzLnF1b3Rlc1trZXldO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuICAgIGNvbnN0IHRyaXBJZCA9IHBhcmFtcy5yZXF1ZXN0ZWRUcmlwSWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmM1XCIgcmVmPXsocmVmKSA9PiB0aGlzLmNvbXBhcmVRdW90ZVJlZiA9IHJlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdDAgbDAgcjAgejEwXCI+XG4gICAgICAgICAgPEhlYWRlciBnb0JhY2s9e2dvQmFja30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiB0aGlzLmFnZW50Q29tcGFueU5hbWUgPSByZWZ9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwic2JjdyBtYjggZmxleCBhbGlnblRvcCBmaXhlZCBsMCByMCB6MTAgYXRfY29tcGFyZUNhcmRfYWdlbnREZXRhaWxcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhxdW90ZXMpLm1hcChxdW90ZUlkID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBxdW90ZXNbcXVvdGVJZF07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBwMTVcIiBrZXk9e2BhZ2VudF8ke3F1b3RlSWR9YH0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBZ2VudENvbXBhbnkocXVvdGUpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgbWI4IGZsZXggYWxpZ25Ub3AgYXRfY29tcGFyZUNhcmRfYWdlbnREZXRhaWxcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhxdW90ZXMpLm1hcChxdW90ZUlkID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBxdW90ZXNbcXVvdGVJZF07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBwMTUgcHQwXCIga2V5PXtgYWdlbnRfJHtxdW90ZUlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxHQWdlbnRDb21wYXlJbWdTbWFsbERpdiBjbGFzc05hbWU9XCJtcjggYm9yZGVyIGF0X2FnZW50Q29tcGFueUltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3F1b3RlLmFnZW50LnByb2ZpbGVQaWN0dXJlfSBhbHQ9e3F1b3RlLmFnZW50LmRpc3BsYXlOYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dBZ2VudENvbXBheUltZ1NtYWxsRGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXIgcmF0aW5nPXtxdW90ZS5hZ2VudC5kaXNwbGF5UmF0aW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmMTIgbXQ0IHBmYzMgYXRfYWdlbnRzQ29udmVydGVkVHJpcHNcIj57cXVvdGUuYWdlbnQuYWdlbnRzQ29udmVydGVkVHJpcHN9IFRyaXBzXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2xkPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCAnUHJpY2UnKX1cbiAgICAgICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBtYjggYXRfY29tcGFyZUNhcmRfcHJpY2VcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYlwiPlxuICAgICAgICAgICAgICAgIDxRdW90ZUNhcmRIZWFkZXIgaGVhZGluZz0nUHJpY2UnIGljb249ezxQcmljZVJ1cGVlIC8+fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPENvbXBhcmVQcmljZSBxdW90ZXM9e3F1b3Rlc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2Vuc29yPlxuICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCAnSG90ZWwnKX1cbiAgICAgICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBtYjggYXRfY29tcGFyZUNhcmRfaG90ZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYlwiPlxuICAgICAgICAgICAgICAgIDxRdW90ZUNhcmRIZWFkZXIgaGVhZGluZz0nSG90ZWxzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEhvdGVsIC8+fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPENvbXBhcmVIb3RlbCBxdW90ZXM9e3F1b3Rlc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2Vuc29yPlxuICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCAnSXRpbmVyYXJ5Jyl9XG4gICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJyBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgbWI4IGF0X2NvbXBhcmVDYXJkX2l0aW5lcmFyeVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJiXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlQ2FyZEhlYWRlciBoZWFkaW5nPSdJdGluZXJhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8SXRpbmVyYXJ5SWNvbiAvPn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDb21wYXJlSXRpbmVyYXJ5IHF1b3Rlcz17cXVvdGVzfSB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2Vuc29yPlxuICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCAnSW5jbHVzaW9uJyl9XG4gICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJyBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgbWI4IGF0X2luY2x1c2lvbkNvbXBhcmVDYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmJcIj5cbiAgICAgICAgICAgICAgICA8UXVvdGVDYXJkSGVhZGVyIGhlYWRpbmc9J0luY2x1c2lvbnMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8SW5jbHVzaW9uc05ld0ljb24gLz59IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8SW5jbHVzaW9uRXhjbHVzaW9uIHF1b3Rlcz17cXVvdGVzfSB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudH0gaXNFeGNsdXNpb249e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZW5zb3I+XG4gICAgICAgICAgPFNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUsICdFeGNsdXNpb24nKX1cbiAgICAgICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBtYjggYXRfZXhjbHVzaW9uQ29tcGFyZUNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYlwiPlxuICAgICAgICAgICAgICAgIDxRdW90ZUNhcmRIZWFkZXIgaGVhZGluZz0nRXhjbHVzaW9ucydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxFeGNsdXNpb25zUmVkIC8+fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEluY2x1c2lvbkV4Y2x1c2lvbiBxdW90ZXM9e3F1b3Rlc30gdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnR9IGlzRXhjbHVzaW9uPXt0cnVlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZW5zb3I+XG4gICAgICAgICAgPFNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUsICdDYWJzJyl9XG4gICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJyBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgbWI4IGF0X2NvbXBhcmVDYXJkX2NhYlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJiXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlQ2FyZEhlYWRlciBoZWFkaW5nPSdDYWInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8VGF4aUNhYiAvPn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDb21wYXJlQ2FiIHF1b3Rlcz17cXVvdGVzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZW5zb3I+XG4gICAgICAgICAgPFNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUsICdGbGlnaHRzJyl9XG4gICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJyBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgbWI4IGF0X2NvbXBhcmVDYXJkX2ZsaWdodFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJiXCI+XG4gICAgICAgICAgICAgICAgPFF1b3RlQ2FyZEhlYWRlciBoZWFkaW5nPSdGbGlnaHRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEZsaWdodHMgLz59IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Q29tcGFyZUZsaWdodHMgcXVvdGVzPXtxdW90ZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NlbnNvcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgYnQgYXRfdmlld1F1b3RlQ1RBU2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduVG9wIFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocXVvdGVzKS5tYXAocXVvdGVJZCA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIHAxNVwiIGtleT17YHZpZXdfcXVvdGVfJHtxdW90ZUlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtxdW90ZURldGFpbFBhdGgodHJpcElkLCBxdW90ZUlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KHF1b3RlSWQsICdWaWV3IFF1b3RlJywgJ1ZpZXcgUXVvdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCBhdF92aWV3UXVvdGVDVEFcIj5WaWV3IFF1b3RlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Db21wYXJlUXVvdGVzLnByb3BUeXBlcyA9IHtcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHF1b3RlSWRzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGdvQmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlUXVvdGVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGdvQmFjayB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0JztcblxuaW1wb3J0IENvbXBhcmVRdW90ZXMgZnJvbSAnLi9Db21wYXJlUXVvdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIHF1b3RlczogX2dldChzdGF0ZSwgJ3F1b3RlLmxpc3QuZGF0YS5xdW90ZXMnLCB7fSksXG4gIH0pLCB7XG4gICAgZ29CYWNrXG4gIH1cbikoQ29tcGFyZVF1b3RlcykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgQ2hhdCBmcm9tICdtb2R1bGVzL2NoYXQnO1xuXG5jbGFzcyBBZ2VudENoYXRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd0ljb246IFByb3BUeXBlcy5ib29sLFxuICAgIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGV4dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjdXN0b21CdXR0b246IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiAnQ2hhdCcsXG4gICAgc2hvd0ljb246IGZhbHNlLFxuICAgIGhhbmRsZUNoYXRDbGljazogKCkgPT4ge30sXG4gICAgdGV4dENsYXNzTmFtZTogJ2YxNCBmdzcgc2ZjMScsXG4gICAgY3VzdG9tQnV0dG9uOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGV4dENsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBDaGF0Q29udGFpbmVyID0gQ2hhdC5jb250YWluZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0ljb25cbiAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgbXI4XCI+PERlZmF1bHRJY29uIC8+PC9zcGFuPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGV4dENsYXNzTmFtZX0gYXRfYWdlbnRfY2hhdF9idXR0b25gfSBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoYXRDbGlja30+e3RoaXMucHJvcHMubmFtZX08L2J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgaXNXaGl0ZUljb249e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hhdENvbnRhaW5lciAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZ2VudENoYXRCdXR0b247XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQWdlbnRDaGF0QnV0dG9uIGZyb20gJy4vQWdlbnRDaGF0QnV0dG9uJztcbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBRdW90ZUNhcmRIZWFkZXIgPSAoeyBoZWFkaW5nLCBjaGF0QnV0dG9uTmFtZSwgaGFuZGxlQ2hhdENsaWNrLCBpY29uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwZmMzIGYxNCBwdDE1IHBsMTUgcGIxNSBwcjE1IGZsZXggYWxpZ25DZW50ZXIgYXRfY2FyZEhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOCBhdF9jYXJkSWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICA8aDMgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE2YSBmdzkgYXRfY2FyZEhlYWRpbmdcIj57aGVhZGluZ308L2gzPlxuICAgIDxBZ2VudENoYXRCdXR0b24gbmFtZT17Y2hhdEJ1dHRvbk5hbWV9IGhhbmRsZUNoYXRDbGljaz17aGFuZGxlQ2hhdENsaWNrfSAvPlxuICA8L2Rpdj5cbik7XG5cblF1b3RlQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYXRCdXR0b25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblF1b3RlQ2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICcnLFxuICBjaGF0QnV0dG9uTmFtZTogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgaWNvbjogPERlZmF1bHRJY29uIC8+LFxuICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVDYXJkSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IHBhcnNlUHJpY2UgfSBmcm9tIFwidXRpbHMvcGFyc2Vyc1wiO1xuXG5jb25zdCBDdXRQcmljZSA9ICh7IHByaWNlLCBjdXJyZW5jeSB9KSA9PiAoXG4gIDxzcGFuIGNsYXNzTmFtZT1cInRkbCBmMTJcIj57cGFyc2VQcmljZSh7IHByaWNlLCBjdXJyZW5jeSB9KX08L3NwYW4+XG4pO1xuXG5DdXRQcmljZS5wcm9wVHlwZXMgPSB7XG4gIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5DdXRQcmljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBlclBlcnNvbjogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXRQcmljZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBwYXJzZVByaWNlIH0gZnJvbSBcInV0aWxzL3BhcnNlcnNcIjtcblxuY29uc3QgUHJpY2UgPSAoeyBwcmljZSwgY3VycmVuY3kgfSkgPT4gKFxuICA8c3BhbiBjbGFzc05hbWU9XCJzZmMzIGYxOCBmdzcgbTAgZmxleEZ1bGwgdGV4dC1sZWZ0IGF0X3ByaWNlXCI+e3BhcnNlUHJpY2UoeyBwcmljZSwgY3VycmVuY3kgfSl9PC9zcGFuPlxuKTtcblxuUHJpY2UucHJvcFR5cGVzID0ge1xuICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuUHJpY2UuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IHBhcnNlUHJpY2UgfSBmcm9tIFwidXRpbHMvcGFyc2Vyc1wiO1xuXG5jb25zdCBQcmljZVN1ZmZpeCA9ICh7IHN1ZmZpeCB9KSA9PiAoXG4gIDxzcGFuIGNsYXNzTmFtZT1cImYxMiBwZmM0IGZ3NFwiPlxuICAgIHtcbiAgICAgIChzdWZmaXggPT09ICdwZXIgcGVyc29uJykgPyAnIC9wZXJzb24nIDogJyB0b3RhbCdcbiAgICB9XG4gIDwvc3Bhbj5cbik7XG5cblByaWNlU3VmZml4LnByb3BUeXBlcyA9IHtcbiAgc3VmZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuUHJpY2VTdWZmaXguZGVmYXVsdFByb3BzID0ge1xuICBzdWZmaXg6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VTdWZmaXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2V0RGlzY291bnRlZFByaWNlIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCBQcmljZSBmcm9tICcuL1ByaWNlJztcbmltcG9ydCBDdXRQcmljZSBmcm9tICcuL0N1dFByaWNlJztcbmltcG9ydCBQcmljZVN1ZmZpeCBmcm9tICcuL1ByaWNlU3VmZml4JztcblxuY29uc3QgcmVuZGVyT3JpZ2luYWxQcmljZSA9IChwcmljZSwgY3VycmVuY3ksIGxpbmVCcmVhaykgPT4gPHNwYW4gY2xhc3NOYW1lPXtgJHtsaW5lQnJlYWsgPyAnYmxvY2snIDogJyd9YH0+PEN1dFByaWNlXG4gIHByaWNlPXtwcmljZX0gY3VycmVuY3k9e2N1cnJlbmN5fSAvPjwvc3Bhbj47XG5cbmNvbnN0IHJlbmRlckRpc2NvdW50ZWRQcmljZSA9IChwcmljZSwgZGlzY291bnQsIGN1cnJlbmN5LCBwZXJQZXJzb24sIGxpbmVCcmVhaykgPT4ge1xuICByZXR1cm4gPHNwYW4+XG4gICAgPHNwYW4gY2xhc3NOYW1lPXtgbXI0ICR7bGluZUJyZWFrID8gJycgOiAnbWw0J31gfT5cbiAgICAgIDxQcmljZSBwcmljZT17Z2V0RGlzY291bnRlZFByaWNlKHByaWNlLCBkaXNjb3VudCl9IGN1cnJlbmN5PXtjdXJyZW5jeX0gcGVyUGVyc29uPXtwZXJQZXJzb259IC8+XG4gICAgPC9zcGFuPlxuICAgIDxQcmljZVN1ZmZpeCBzdWZmaXg9e3BlclBlcnNvbn0gLz5cbiAgPC9zcGFuPjtcbn07XG5cbmNvbnN0IFF1b3RlUHJpY2UgPSAoeyBwcmljZSwgY3VycmVuY3ksIHBlclBlcnNvbiwgZGlzY291bnQsIHNob3dPcmlnaW5hbFByaWNlLCBsaW5lQnJlYWsgfSkgPT4ge1xuXG4gIGNvbnN0IGhhc0Rpc2NvdW50QXBwbGllZCA9IGRpc2NvdW50ID4gMDtcblxuICByZXR1cm4gKFxuICAgIGhhc0Rpc2NvdW50QXBwbGllZFxuICAgICAgPyA8ZGl2PntzaG93T3JpZ2luYWxQcmljZSA/IHJlbmRlck9yaWdpbmFsUHJpY2UocHJpY2UsIGN1cnJlbmN5LCBsaW5lQnJlYWspIDogbnVsbH1cbiAgICAgICAge3JlbmRlckRpc2NvdW50ZWRQcmljZShwcmljZSwgZGlzY291bnQsIGN1cnJlbmN5LCBwZXJQZXJzb24sIGxpbmVCcmVhayl9PC9kaXY+XG4gICAgICA6IDxkaXY+PFByaWNlIHByaWNlPXtwcmljZX0gY3VycmVuY3k9e2N1cnJlbmN5fSBwZXJQZXJzb249e3BlclBlcnNvbn0gLz5cbiAgICAgICAgPFByaWNlU3VmZml4IHN1ZmZpeD17cGVyUGVyc29ufSAvPlxuICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5RdW90ZVByaWNlLnByb3BUeXBlcyA9IHtcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGVyUGVyc29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNjb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvd09yaWdpbmFsUHJpY2U6IFByb3BUeXBlcy5ib29sLFxuICBsaW5lQnJlYWs6IFByb3BUeXBlcy5ib29sLFxufTtcblxuUXVvdGVQcmljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBlclBlcnNvbjogJycsXG4gIGRpc2NvdW50OiAwLFxuICBzaG93T3JpZ2luYWxQcmljZTogdHJ1ZSxcbiAgbGluZUJyZWFrOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVQcmljZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBHUm9zdGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIC8vIHRvcDogJzYwcHgnLFxuICB3aWR0aDogJ2NhbGMoMTAwJSAtIDI0cHgpJyxcbiAgbGVmdDogJzEycHgnLFxuICB0b3A6ICcxMnB4JyxcbiAgekluZGV4OiAnOTk5OScsXG4gICcmID4gZGl2Jzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICAnJiAucm9zdGVyQ2xvc2UnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDonMjRweCcsXG4gICAgaGVpZ2h0OicyNHB4JyxcbiAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiczcHgnLFxuICAgIHRvcDonM3B4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInIDoge1xuICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnN3B4JyxcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgd2lkdGg6JzEycHgnLFxuICAgICAgaGVpZ2h0OicxcHgnLFxuICAgICAgYmFja2dyb3VuZDonIzAwMCcsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScsXG4gICAgfSxcbiAgICAnJjphZnRlcicgOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC00NWRlZyknLFxuICAgIH0sXG4gIH0sXG4gICcmIC50b2FzdGVyJzoge1xuICAgIHBhZGRpbmc6ICcxMnB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2VmZWZlZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICcmLmVycm9yUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjY2I0MTM4JyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZkNTM0NicsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZGJkOCcsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNjYjQxMzgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLnN1Y2Vzc1Jvc3Rlcic6IHtcbiAgICAgIGNvbG9yOiAnIzI2OGYyYScsXG4gICAgICBib3JkZXJDb2xvcjogJyMyNjhmMmEnLFxuICAgICAgYmFja2dyb3VuZDogJyNkMWY2ZDInLFxuICAgICAgJyYgLnJvc3RlckNsb3NlOmJlZm9yZSwgJiAucm9zdGVyQ2xvc2U6YWZ0ZXInIDoge1xuICAgICAgICBiYWNrZ3JvdW5kOicjMjY4ZjJhJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJi5pbmZvUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjMWE3OGMyJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzIxOTZmMycsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2Q4ZThmYicsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMxYTc4YzInLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLndhcm5pbmdUb2FzdGVyJzoge1xuICAgICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZhYzIyZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZjJkYycsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMzZTNlM2UnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEdSb3N0ZXJEaXYgfSBmcm9tICcuL0cnO1xuXG4vKipcbiAqIFJvc3RlciBpcyB0byBkaXNwbGF5IG1lc3NhZ2VzIGZvciBkeW5hbWljIGxheW91dHMuXG4gKiAtIHJvc3RlclR5cGUgLSBTdHJpbmc6IERlZmluZXMgdHlwZSBvZiBtZXNzYWdlLiBDdXJyZW50bHkgd2Ugc3VwcG9ydFxuICogcm9zdGVyU3VjY2Vzcywgcm9zdGVyRXJyb3IgYW5kIHJvc3RlckluZm9cbiAqIC0gdGV4dCAtIFN0cmluZyBbb3B0aW9uYWxdOiBTaW5nbGUgbGluZSBtZXNzYWdlIGZvciB1c2VyLlxuICogLSBtZXNzYWdlIC0gT2JqZWN0IFtvcHRpb25hbF06IEZvciBtb3JlIGNvbXBsZXggbWVzc2FnZXMgd2hpY2ggbWlnaHQgY29udGFpbiBsaW5rIGZvciB1c2VyIGFjdGlvbi5cbiAqIEZvciBleDoge1xuICogICAgIGhlYWRlcjogXCJOZXcgdHJpcCBjcmVhdGVkIVwiLFxuICogICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGFjdGl2YXRlIHlvdXIgZW1haWwgYWRkcmVzcy4gVG8gcmVzZW5kIGFjdGl2YXRpb24gbWFpbCB7e3NlbmRfYWN0aXZhdGlvbl9tYWlsfX1cIixcbiAqICAgICBsaW5rczogW3t0eXBlOiAnc2VuZF9hY3RpdmF0aW9uX21haWwnLCBsYWJlbDogJ0NsaWNrIGhlcmUnfSBdXG4gKiAgIH1cbiAqIC0gdGltZW91dCAtIE51bWJlciBbb3B0aW9uYWxdOiBpZiBwcm92aWRlZCwgTWVzc2FnZSB3aWxsIGRpc2FwcGVhciBhZnRlciB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICogLSBjYWxsYmFjayAtIEZ1bmN0aW9uIFtvcHRpb25hbF06IENhbGxiYWNrIHRvIHBhc3MgZXZlbnQgYmFzZWQgb24gd2hpY2ggYWN0aW9uIGlzIHRvIGJlIGNhbGxlZCBieSBwYXJlbnQuXG4gKlxuICogIFAuUy4gLSBFaXRoZXIgcm9zdGVyVGV4dCBvciByb3N0ZXJNZXNzYWdlIHNob3VsZCBiZSBwcmVzZW50LiBJZiBib3RoIGFyZSBwcmVzZW50IHJvc3RlclRleHQgd291bGQgaGF2ZSBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9zdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc1Jvc3Rlck9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVSb3N0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsb3dUaW1lT3V0OiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIC8qKlxuICAgKiByb3N0ZXJUeXBlIGNvdWxkIGhhdmUgdHdvIHR5cGVzOlxuICAgKiAgLSBzdWNlc3NSb3N0ZXJcbiAgICogIC0gZXJyb3JSb3N0ZXJcbiAgICogIC0gaW5mb1Jvc3RlclxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnaW5mb1Jvc3RlcicsXG4gICAgaXNSb3N0ZXJPcGVuOiBmYWxzZSxcbiAgICBhbGxvd1RpbWVPdXQ6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNSb3N0ZXJPcGVuOiBwcm9wcy5pc1Jvc3Rlck9wZW5cbiAgICB9O1xuICAgIHRoaXMuY2xvc2VSb3N0ZXIgPSB0aGlzLmNsb3NlUm9zdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Jvc3Rlck9wZW4pIHtcbiAgICAgIHRoaXMuc2hvd1Jvc3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc1Jvc3Rlck9wZW4gJiYgbmV4dFByb3BzLmlzUm9zdGVyT3Blbikge1xuICAgICAgdGhpcy5zaG93Um9zdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1Jvc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNSb3N0ZXJPcGVuOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVvdXQgJiYgdGhpcy5wcm9wcy5hbGxvd1RpbWVPdXQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVJvc3RlcigpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VSb3N0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzUm9zdGVyT3BlbjogZmFsc2UgfSk7XG4gICAgdGhpcy5wcm9wcy5oaWRlUm9zdGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNSb3N0ZXJPcGVuICYmIG1lc3NhZ2UgPyAoXG4gICAgICA8R1Jvc3RlckRpdiBjbGFzc05hbWU9XCJmaXhlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvYXN0ZXIgJHt0eXBlfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGR5bmFtaWNUZXh0SW5oZXJpdCBwMFwiPlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3N0ZXJDbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VSb3N0ZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HUm9zdGVyRGl2PlxuICAgICkgOiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBzaG93Um9zdGVyLCBoaWRlUm9zdGVyIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IFJvc3RlciBmcm9tICcuL1Jvc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB0eXBlOiBzdGF0ZS5yb3N0ZXIudHlwZSxcbiAgICBtZXNzYWdlOiBzdGF0ZS5yb3N0ZXIubWVzc2FnZSxcbiAgICBpc1Jvc3Rlck9wZW46IHN0YXRlLnJvc3Rlci5pc1Jvc3Rlck9wZW4sXG4gICAgYWxsb3dUaW1lT3V0OiBzdGF0ZS5yb3N0ZXIuYWxsb3dUaW1lT3V0XG4gIH0pLFxuICB7XG4gICAgaGlkZVJvc3RlclxuICB9XG4pKFJvc3RlcikpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7XG4gIFN0YXJJY29uLFxuICBIYWxmU3RhcixcbiAgU3Rhckljb25FbXB0eVxufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IEdSYXRpbmdVbCA9IGdsYW1vcm91cy5kaXYoe1xuICBtYXJnaW46ICcwJyxcbiAgcGFkZGluZzogJzAnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgJyYgbGknOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luUmlnaHQ6ICc2cHgnLFxuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnMCcsXG4gICAgfSxcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldFN0YXJzKENvbXBvbmVudCwgc3Rhck51bSwga2V5VHlwZSkge1xuICBsZXQgaSA9IDA7XG4gIGNvbnN0IHN0YXJzID0gW107XG4gIHdoaWxlIChpIDwgc3Rhck51bSkge1xuICAgIHN0YXJzLnB1c2goPGxpIGtleT17a2V5VHlwZSArIGl9PjxDb21wb25lbnQgLz48L2xpPik7XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiBzdGFycztcbn1cblxuY29uc3QgUmF0aW5nU3RhciA9ICh7IHJhdGluZywgaXNFbXB0eVN0YXJzSGlkZGVuIH0pID0+IHtcbiAgY29uc3Qgc3RhcnMgPSBbXTtcbiAgY29uc3QgcmF0aW5nQmFyUmFuZ2UgPSA1O1xuICBjb25zdCB0cnVuY2F0ZWRSYXRpbmcgPSBNYXRoLnRydW5jKHJhdGluZyk7XG4gIGNvbnN0IGZyYWN0aW9uYWxSYXRpbmcgPSBwYXJzZUZsb2F0KChyYXRpbmcgLSB0cnVuY2F0ZWRSYXRpbmcpLnRvRml4ZWQoMSkpO1xuICBsZXQgZnVsbFN0YXJDb3VudCA9IDA7XG4gIGxldCBoYWxmU3RhckNvdW50ID0gMDtcblxuICBpZiAoZnJhY3Rpb25hbFJhdGluZyA9PT0gMC4wKSB7XG4gICAgZnVsbFN0YXJDb3VudCA9IHJhdGluZztcbiAgfSBlbHNlIGlmIChmcmFjdGlvbmFsUmF0aW5nIDw9IDAuNSkge1xuICAgIGZ1bGxTdGFyQ291bnQgPSB0cnVuY2F0ZWRSYXRpbmc7XG4gICAgaGFsZlN0YXJDb3VudCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgZnVsbFN0YXJDb3VudCA9IHRydW5jYXRlZFJhdGluZyArIDE7XG4gIH1cblxuICBjb25zdCBlbXB0eVN0YXJDb3VudCA9IHJhdGluZ0JhclJhbmdlIC0gKGZ1bGxTdGFyQ291bnQgKyBoYWxmU3RhckNvdW50KTtcblxuICBzdGFycy5wdXNoKGdldFN0YXJzKFN0YXJJY29uLCBmdWxsU3RhckNvdW50LCAnZnVsbF9zdGFyJykpO1xuICBzdGFycy5wdXNoKGdldFN0YXJzKEhhbGZTdGFyLCBoYWxmU3RhckNvdW50LCAnaGFsZl9zdGFyJykpO1xuICAvLyBzdGFycy5wdXNoKGdldFN0YXJzKFN0YXJJY29uRW1wdHksIGVtcHR5U3RhckNvdW50LCAnZW1wdHlfc3RhcicpKTtcbiAgaWYgKCFpc0VtcHR5U3RhcnNIaWRkZW4pIHtcbiAgICBzdGFycy5wdXNoKGdldFN0YXJzKFN0YXJJY29uRW1wdHksIGVtcHR5U3RhckNvdW50LCAnZW1wdHlfc3RhcicpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdSYXRpbmdVbCBjbGFzc05hbWU9XCJyYXRpbmctc3Rhci1saXN0IGF0X3JhdGluZ1wiPlxuICAgICAgPHVsPlxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnNcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8L0dSYXRpbmdVbD5cbiAgKTtcbn07XG5cblJhdGluZ1N0YXIucHJvcFR5cGVzID0ge1xuICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlzRW1wdHlTdGFyc0hpZGRlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblJhdGluZ1N0YXIuZGVmYXVsdFByb3BzID0ge1xuICByYXRpbmc6IDAsXG4gIGlzRW1wdHlTdGFyc0hpZGRlbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1N0YXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmltcG9ydCB7IEJsdWVEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR3JlYWRtb3JlTGFiZWwgPSBnbGFtb3JvdXMubGFiZWwoe1xuICAnJiBidXR0b24ucmVhZC1tb3JlLWJ1dHRvbic6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxufSk7XG5cbmNvbnN0IEdEb3duQXJyb3dTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICc2cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICc2cHgnLFxuICAgIHRvcDogJzFweCdcbiAgfVxufSk7XG5cbmNsYXNzIFNob3dNb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmRlZmF1bHRPcGVuXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7IGN0YTogJ1JlYWQgTW9yZScgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dExlbmd0aCA9IDE5NTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1zdGF0ZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gaWQ9XCJwb3N0LTFcIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVhZC1tb3JlLXdyYXAgJHt0aGlzLnByb3BzLmlzRGVmYXVsdFNob3dNb3JlID8gJ3AtbGFzdC1uby1tYXJnaW4gcGZjMyBmMTRwIGR5bmFtaWNUZXh0SW5oZXJpdCcgOiAnJ31gfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgZm9yIHRydW5jYXRlIHRoZSBzdHJpbmdcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy5hcHBlbmRUZXh0ICYmIHRoaXMucHJvcHMud3JhcFRleHQubGVuZ3RoID49IHRleHRMZW5ndGhcbiAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLndyYXBUZXh0ICsgdGhpcy5wcm9wcy5hcHBlbmRUZXh0XG4gICAgICAgICAgICAgIDogdGhpcy5wcm9wcy53cmFwVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdGFyZ2V0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tb3JlVGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tb3JlVGV4dC5sZW5ndGggPiAwIHx8ICFfaXNFbXB0eSh0aGlzLnByb3BzLm1vcmVUZXh0KSA/XG4gICAgICAgICAgICA8R3JlYWRtb3JlTGFiZWwgaHRtbEZvcj1cInBvc3QtMVwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10cmlnZ2VyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJ1dHRvbiBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlbiByZWxhdGl2ZSBmMTIgZnc3XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE0IGZ3N1wiPlxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmNoZWNrZWQpID8gdGhpcy5wcm9wcy5zaG93TGVzc1RleHQgOiB0aGlzLnByb3BzLnNob3dNb3JlVGV4dH1cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxHRG93bkFycm93U3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtbDggcmVsYXRpdmUgYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxCbHVlRG93bkFycm93IC8+PC9HRG93bkFycm93U3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0dyZWFkbW9yZUxhYmVsPlxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNob3dNb3JlLnByb3BUeXBlcyA9IHtcbiAgd3JhcFRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbW9yZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNob3dNb3JlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0xlc3NUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgYXBwZW5kVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuXG59O1xuXG5TaG93TW9yZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHdyYXBUZXh0OiAnJyxcbiAgbW9yZVRleHQ6ICcnLFxuICBzaG93TW9yZVRleHQ6ICdSZWFkIE1vcmUnLFxuICBzaG93TGVzc1RleHQ6ICdSZWFkIExlc3MnLFxuICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiB0cnVlLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd01vcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IFF1b3RlTGlzdCBmcm9tICdtb2R1bGVzL3F1b3RlL2NvbXBhcmUvbGlzdCc7XG5pbXBvcnQgQ29tcGFyZVF1b3RlcyBmcm9tICdtb2R1bGVzL3F1b3RlL2NvbXBhcmUvcXVvdGVzJztcbmltcG9ydCBSb3N0ZXIgZnJvbSAnbW9kdWxlcy9yb3N0ZXInO1xuXG5jb25zdCBRY3BBc3luYyA9ICh7IGxvY2F0aW9uLCBnb0JhY2sgfSkgPT4ge1xuICBjb25zdCBxdW90ZUlkcyA9IGxvY2F0aW9uLnF1ZXJ5LnF1b3RlSWRzO1xuXG4gIGNvbnN0IHRyYWNrU2VnbWVudEV2ZW50ID0gKGRhdGEgPSB7fSkgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogZGF0YS5ldmVudCxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1FDUCcsXG4gICAgICAgIHNlY3Rpb246IGRhdGEuc2VjdGlvbiB8fCAnJyxcbiAgICAgICAgb2JqZWN0OiBkYXRhLm9iamVjdCxcbiAgICAgICAgY3RhOiBkYXRhLmN0YSxcbiAgICAgICAgbWlzY19pZF8xOiBkYXRhLm1pc2NJZDEsXG4gICAgICAgIG1pc2NfdHlwZV8xOiBkYXRhLm1pc2NUeXBlMSxcbiAgICAgICAgbWlzY19pZF8yOiBkYXRhLm1pc2NJZDIsXG4gICAgICAgIG1pc2NfdHlwZV8yOiBkYXRhLm1pc2NUeXBlMixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSb3N0ZXIgdGltZW91dD17MzAwMH0gLz5cbiAgICAgIHtcbiAgICAgICAgcXVvdGVJZHMgJiYgcXVvdGVJZHMubGVuZ3RoID09PSAyXG4gICAgICAgICAgPyA8Q29tcGFyZVF1b3RlcyBxdW90ZUlkcz17cXVvdGVJZHN9IHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50RXZlbnR9IC8+XG4gICAgICAgICAgOiA8UXVvdGVMaXN0IHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50RXZlbnR9IC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5RY3BBc3luYy5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGdvQmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUWNwQXN5bmM7XG4iXSwic291cmNlUm9vdCI6IiJ9