require("source-map-support").install();
exports.ids = ["hotel-listing"];
exports.modules = {

/***/ "./app-v2/modules/faqs/index.js":
/*!**************************************!*\
  !*** ./app-v2/modules/faqs/index.js ***!
  \**************************************/
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

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/faqs/reducer.js");

var _Faqs = _interopRequireDefault(__webpack_require__(/*! ./Faqs */ "./app-v2/modules/faqs/Faqs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  data: (0, _reducer.results)(state)
}))(_Faqs.default));
const hlpContainer = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  data: (0, _reducer.hlpResults)(state)
}))(_Faqs.default));
var _default = {
  container,
  hlpContainer,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hlp/HotelCard.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/hlp/HotelCard.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _HotelCardImg = _interopRequireDefault(__webpack_require__(/*! ./HotelCardImg */ "./app-v2/modules/hlp/HotelCardImg.js"));

var _HotelCardRightData = _interopRequireDefault(__webpack_require__(/*! ./HotelCardRightData */ "./app-v2/modules/hlp/HotelCardRightData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GHotelCardDiv = _glamorous.default.div({
  border: '1px solid #efefef'
});

const GHotelCardFooterDiv = _glamorous.default.div({
  border: '1px solid #efefef',
  borderTop: '0 none'
});

const HotelCard = ({
  item
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(_reactRouter.Link, {
  to: item.url,
  className: "pfc3"
}, _react.default.createElement(GHotelCardDiv, {
  className: "sbcw radius2"
}, _react.default.createElement("div", {
  className: "wfull flex p8"
}, _react.default.createElement("div", {
  className: "mr8"
}, _react.default.createElement(_HotelCardImg.default, {
  images: item.images
})), _react.default.createElement(_HotelCardRightData.default, {
  hotel: item
})))));

HotelCard.propTypes = {
  item: _propTypes.PropTypes.object
};
var _default = HotelCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hlp/HotelCardImg.js":
/*!********************************************!*\
  !*** ./app-v2/modules/hlp/HotelCardImg.js ***!
  \********************************************/
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GHotelImgDiv = _glamorous.default.div({
  minWidth: '120px',
  maxWidth: '120px',
  height: '175px',
  '& img': {
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: 'none'
  }
});

const GHotelPlaceholderDiv = _glamorous.default.div({
  '& svg': {
    width: '105px',
    height: '69px'
  }
});

const HotelCardImg = ({
  images
}) => _react.default.createElement(GHotelImgDiv, {
  className: "relative overflowh"
}, images && images.length ? _react.default.createElement(_Img.default, {
  width: "120",
  height: "172",
  src: images[0].url.mobile,
  ikSrc: images[0].url.imagekitUrl,
  alt: images[0].altText || 'Hotel Image',
  className: "absolute-center"
}) : _react.default.createElement(GHotelPlaceholderDiv, {
  className: "relative sbc5 wfull hfull flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.HotelEmptyState, null)));

HotelCardImg.propTypes = {
  images: _propTypes.PropTypes.array.isRequired
};
var _default = HotelCardImg;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hlp/HotelCardRightData.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/hlp/HotelCardRightData.js ***!
  \**************************************************/
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

var _OverAllRating = _interopRequireDefault(__webpack_require__(/*! modules/shared/OverAllRating */ "./app-v2/modules/shared/OverAllRating.js"));

var _ToolTip = _interopRequireDefault(__webpack_require__(/*! modules/shared/ToolTip */ "./app-v2/modules/shared/ToolTip.js"));

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _Recommended = _interopRequireDefault(__webpack_require__(/*! modules/shared/Recommended */ "./app-v2/modules/shared/Recommended.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _HotelInclusion = _interopRequireDefault(__webpack_require__(/*! ./HotelInclusion */ "./app-v2/modules/hlp/HotelInclusion.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GMapDataDiv = _glamorous.default.div({
  width: '1000px'
});

let HotelCardRightData = class HotelCardRightData extends _react.Component {
  constructor(props) {
    super(props);

    this.handleMapModal = flag => {
      if (flag) {
        this.setState({
          showMap: true
        });
      } else {
        this.setState({
          showMap: false
        });
      }
    };

    this.state = {
      showMap: false
    };
  }

  render() {
    const {
      hotel
    } = this.props;
    const {
      currency,
      priceFrom,
      priceTo
    } = hotel.priceRange;
    return _react.default.createElement("div", {
      className: "clearfix p8 pb0 relative wfull"
    }, _react.default.createElement("div", {
      className: "mb4 flex flexDColumn"
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("div", {
      className: "mb4 mr8"
    }, _react.default.createElement("h3", {
      className: "f14 m0 mr8 fw9 text-capitalize"
    }, hotel.displayName), _react.default.createElement("div", {
      className: "mt8"
    }, _react.default.createElement("span", {
      className: "iblock tooltipCommon relative z2 mr8"
    }, _react.default.createElement(_ToolTip.default, {
      toolTipText: `${hotel.starRating} Star Hotel`,
      boxStyle: {
        textAlign: 'center'
      }
    }), _react.default.createElement(_RatingStar.default, {
      rating: hotel.starRating,
      isEmptyStarsHidden: true
    })), _react.default.createElement("div", {
      className: "iblock"
    }, _react.default.createElement(_OverAllRating.default, {
      overallRating: hotel.userRating
    })))), _react.default.createElement("div", {
      className: "m0 mb4 f10 pfc4 dynamicTextInherit"
    }, hotel.address && hotel.address.brief))), hotel.facilities && hotel.facilities.length || hotel.topRatedLuxury || hotel.topRatedBudget ? _react.default.createElement("div", {
      className: "mb4"
    }, _react.default.createElement(_HotelInclusion.default, {
      luxury: hotel.topRatedLuxury,
      budget: hotel.topRatedBudget,
      facilities: hotel.facilities
    })) : null, _react.default.createElement("div", {
      className: "mb4"
    }, _react.default.createElement("p", {
      className: "m0 f10 pfc4"
    }, "Price Range per Night"), _react.default.createElement("p", {
      className: "f16 fwb m0 sfc3"
    }, priceFrom && priceTo ? `${(0, _parsers.currencyToSymbol)(currency)} ${(0, _parsers.numberWithCommas)(Math.round(priceFrom))} -
              ${(0, _parsers.currencyToSymbol)(currency)} ${(0, _parsers.numberWithCommas)(Math.round(priceTo))}` : priceFrom ? `Above ${(0, _parsers.currencyToSymbol)(currency)} ${(0, _parsers.numberWithCommas)(Math.round(priceFrom))}` : `Below ${(0, _parsers.currencyToSymbol)(currency)} ${(0, _parsers.numberWithCommas)(Math.round(priceTo))}`)), _react.default.createElement("div", null, hotel.proximity && hotel.proximity.distance && hotel.proximity.unit && hotel.proximity.from ? _react.default.createElement("p", {
      className: "f10 m0 pfc3"
    }, `${hotel.proximity.distance} ${hotel.proximity.unit} from ${hotel.proximity.from}`) : null), _react.default.createElement("div", {
      className: "absolute r0 t0"
    }, _react.default.createElement(_Recommended.default, {
      ttRecommended: hotel.ttRecomended
    })));
  }

};
HotelCardRightData.propTypes = {
  hotel: _propTypes.PropTypes.object.isRequired
};
var _default = HotelCardRightData;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/hlp/HotelInclusion.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/hlp/HotelInclusion.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GInclusionIconSpan = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var Icons = _interopRequireWildcard(__webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GInclusionDiv = _glamorous.default.div({
  height: '16px'
});

const GInclusionHighlightUl = _glamorous.default.ul({
  '& li': {
    fontSize: '10px',
    padding: '0 6px',
    height: '16px',
    lineHeight: '16px',
    '& .highlightIcon': {
      width: '14px',
      height: '14px',
      position: 'relative',
      marginRight: '8px'
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

const GInclusionsUl = _glamorous.default.ul({
  '& li': {
    marginRight: '10px',
    display: 'inline-block',
    height: '24px',
    fontSize: '10px',
    lineHeight: '24px',
    padding: '0',
    listStyle: 'none'
  }
});

const GInclusionIconSpan = _glamorous.default.span({
  width: '16px',
  display: 'block',
  margin: '0 auto',
  height: '16px',
  position: 'relative',
  '& svg': {
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    position: 'absolute',
    display: 'block'
  }
});

exports.GInclusionIconSpan = GInclusionIconSpan;

const InclusionHighlight = ({
  luxury,
  budget
}) => _react.default.createElement(GInclusionHighlightUl, {
  className: "block fleft"
}, luxury ? _react.default.createElement("li", {
  className: "flex alignCenter luxury radius20 f10"
}, "Top Rated Luxury Property") : budget ? _react.default.createElement("li", {
  className: "flex alignCenter budget radius20 f10"
}, "Top Rated Budget Property") : null);

InclusionHighlight.propTypes = {
  luxury: _propTypes.default.bool,
  budget: _propTypes.default.bool
};

const Inclusions = ({
  facilities
}) => _react.default.createElement(GInclusionsUl, {
  className: "flex flexWrap"
}, facilities.map((facility, i) => {
  const IconComponent = facility.key && Icons[(0, _parsers.capitalizeFirstLetter)(facility.key.replace(/[\s-_]/g, ''))] || Icons.DefaultIcon;
  return _react.default.createElement("li", {
    className: "flex alignCenter",
    key: i
  }, _react.default.createElement(GInclusionIconSpan, {
    className: "mr5"
  }, _react.default.createElement(IconComponent, null)), _react.default.createElement("span", {
    className: "flexFull"
  }, facility.text));
}));

Inclusions.propTypes = {
  facilities: _propTypes.default.array
};
Inclusions.defaultProps = {
  facilities: []
};

const HotelInclusion = ({
  luxury,
  budget,
  facilities
}) => _react.default.createElement("div", null, _react.default.createElement(GInclusionDiv, {
  className: "overflowh mb5"
}, _react.default.createElement(InclusionHighlight, {
  luxury: luxury,
  budget: budget
})), _react.default.createElement(Inclusions, {
  facilities: facilities
}));

HotelInclusion.propTypes = {
  luxury: _propTypes.default.bool,
  budget: _propTypes.default.bool,
  facilities: _propTypes.default.array
};
HotelInclusion.defaultProps = {
  luxury: false,
  budget: false
};
var _default = HotelInclusion;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/placesToVisit/PlacesToVisit.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/placesToVisit/PlacesToVisit.js ***!
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

var _LoaderCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/loaders/LoaderCard */ "./app-v2/modules/shared/loaders/LoaderCard.js"));

var _SliderWithTitle = _interopRequireDefault(__webpack_require__(/*! modules/shared/SliderWithTitle */ "./app-v2/modules/shared/SliderWithTitle.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PlacesToVisit = (_temp = _class = class PlacesToVisit extends _react.default.Component {
  constructor(props) {
    super(props);

    this.trackSegment = (cta, cardId, miscType1, miscId1) => {
      this.props.trackSegmentEvent({
        cta,
        object: cardId ? `Places to visit/${cardId}` : 'Places to visit',
        miscType1,
        miscId1
      });
    };
  } // componentDidMount() {
  //   this.fetchPlacesToVisitData(this.props);
  // }
  // fetchPlacesToVisitData = (props) => {
  //   const { config, fetchPlacesToVisitData } = props;
  //   if (config && config.csr) {
  //     fetchPlacesToVisitData({
  //       destination: layout.metaInfo.destination,
  //       lookupParent: config.lookupParent
  //     });
  //   }
  // };


  render() {
    const {
      data,
      config,
      loaded,
      externalCss,
      errors
    } = this.props;

    if (errors && errors.length) {
      return null;
    }

    if (loaded && (!data.destinationSchemes || !data.destinationSchemes.length)) {
      return null;
    }

    return _react.default.createElement("div", {
      className: externalCss
    }, !loaded ? _react.default.createElement(_LoaderCard.default, null) : data.destinationSchemes && data.destinationSchemes.length ? _react.default.createElement(_SliderWithTitle.default, {
      data: data,
      trackSegment: this.trackSegment,
      config: config,
      overflow: "unset"
    }) : null);
  }

}, _class.propTypes = {
  data: _propTypes.default.object,
  config: _propTypes.default.object,
  loaded: _propTypes.default.bool,
  errors: _propTypes.default.array,
  externalCss: _propTypes.default.string,
  trackSegmentEvent: _propTypes.default.func,
  fetchPlacesToVisitData: _propTypes.default.func
}, _class.defaultProps = {
  data: {},
  config: {
    variant: 'FULL',
    order: 8
  },
  loaded: false,
  externalCss: '',
  trackSegmentEvent: () => {},
  fetchPlacesToVisitData: () => {}
}, _temp);
var _default = PlacesToVisit;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/placesToVisit/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/placesToVisit/index.js ***!
  \***********************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/placesToVisit/action.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/placesToVisit/reducer.js");

var _PlacesToVisit = _interopRequireDefault(__webpack_require__(/*! ./PlacesToVisit */ "./app-v2/modules/placesToVisit/PlacesToVisit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  data: (0, _reducer.results)(state),
  loaded: state.placesToVisit.loaded,
  errors: state.placesToVisit.errors
}), {
  fetchPlacesToVisitData: _action.fetchPlacesToVisitData
})(_PlacesToVisit.default));
/**
 * PlacesToVisit Section
 */

var _default = {
  container,
  actions: {
    fetchPlacesToVisitData: _action.fetchPlacesToVisitData
  },
  defaultAction: _action.fetchPlacesToVisitData
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Guide.js":
/*!****************************************!*\
  !*** ./app-v2/modules/shared/Guide.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Overview = _interopRequireDefault(__webpack_require__(/*! ./Overview */ "./app-v2/modules/shared/Overview.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! ./Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ShowMoreContainer = _glamorous.default.div({
  marginTop: '-8px'
});

const Guide = ({
  guide
}) => {
  return _react.default.createElement("div", {
    className: "clearfix sbcw p15"
  }, _react.default.createElement(_Heading.default, _extends({}, guide, {
    type: "main-heading"
  })), _react.default.createElement(_Overview.default, guide));
};

Guide.propTypes = {
  guide: _propTypes.default.object
};
Guide.defaultProps = {
  guide: {}
};
var _default = Guide;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/KnowMoreCard.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/KnowMoreCard.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GKnowMoreDiv = _glamorous.default.div({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#E8F4FD'
});

const KnowMoreCard = ({
  link
}) => _react.default.createElement("div", null, _react.default.createElement(GKnowMoreDiv, {
  className: "wfull text-center radius2 p15"
}, _react.default.createElement(_reactRouter.Link, {
  to: `/${link}`,
  className: "f16 fw7 flexFull m0 sfc1"
}, "Book a complete holiday package. Know More")));

var _default = KnowMoreCard;
exports.default = _default;
KnowMoreCard.propTypes = {
  link: _propTypes.PropTypes.string
};

/***/ }),

/***/ "./app-v2/modules/shared/NoPackageFound/NoPackageFound.scss":
/*!******************************************************************!*\
  !*** ./app-v2/modules/shared/NoPackageFound/NoPackageFound.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"looking-icon": "_3CK1P"
};

/***/ }),

/***/ "./app-v2/modules/shared/NoPackageFound/index.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/shared/NoPackageFound/index.js ***!
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

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

__webpack_require__(/*! ./NoPackageFound.scss */ "./app-v2/modules/shared/NoPackageFound/NoPackageFound.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoPackageFound = ({
  totalPackages,
  startingPrice
}) => {
  const ctaText = 'BUILD YOUR OWN PACKAGE';
  return !totalPackages ? _react.default.createElement("div", {
    className: "row m8"
  }, _react.default.createElement("h3", {
    className: "row row- fw3"
  }, _react.default.createElement("span", {
    className: totalPackages > 0 ? 'inline f10 pfc4 ml3' : 'hide'
  }), _react.default.createElement("span", {
    className: totalPackages <= 0 ? 'f16 block text-center pt48 pb24 fw7 pfc4' : 'hide'
  }, _react.default.createElement("span", {
    className: "looking-icon"
  }, _react.default.createElement(_Icon.Uniquerequirements, null)), _react.default.createElement("p", {
    className: "m0 f18 pfc3"
  }, "Your Requirements are unique! "), _react.default.createElement("p", {
    className: "m0 f14 pfc1 mb8"
  }, "Our experts would love to create a package just for you."), _react.default.createElement(_FormOneCTA.default, null, _react.default.createElement("div", {
    className: "btn-filled-pri"
  }, _react.default.createElement("div", {
    className: "wave"
  }), ctaText))))) : null;
};

NoPackageFound.propTypes = {
  totalPackages: _propTypes.default.number.isRequired,
  startingPrice: _propTypes.default.number
};
var _default = NoPackageFound;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Overview.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Overview.js ***!
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

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ./ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const overviewSplitAfterShowMore = overviewMoreText => {
  try {
    return overviewMoreText.replace(/<br \/>|<\/br>/g, '').replace('</span></p>\r\n', '');
  } catch (err) {
    return overviewMoreText;
  }
};

let Overview = class Overview extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.overviewContent = () => {
      const {
        description,
        footerDescription
      } = this.props;
      const desc = description && description.split('\r\n').filter(p => p.length) || [];

      if (!desc.length) {
        return null;
      }

      const footerDesc = footerDescription ? `<br>${footerDescription}` : '';
      return _react.default.createElement(_ShowMore.default, {
        wrapText: parser.parse(desc[0]),
        moreText: parser.parse(overviewSplitAfterShowMore(desc.slice(1).join('\n').concat(footerDesc)))
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row- row-mw"
    }, _react.default.createElement("div", {
      className: "read-more-box"
    }, this.overviewContent()));
  }

};
Overview.defaultProps = {
  footerDescription: '',
  description: ''
};
Overview.propTypes = {
  description: _propTypes.default.string,
  footerDescription: _propTypes.default.string
};
var _default = Overview;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Recommended.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/shared/Recommended.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _TTRecommended = _interopRequireDefault(__webpack_require__(/*! modules/shared/TTRecommended */ "./app-v2/modules/shared/TTRecommended.js"));

var _ToolTip = _interopRequireDefault(__webpack_require__(/*! ./ToolTip */ "./app-v2/modules/shared/ToolTip.js"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GRecommendedDiv = _glamorous.default.div({
  minWidth: '32px',
  maxWidth: '32px',
  height: '32px',
  '& .recomendedIcon': {
    width: '32px',
    height: '32px',
    '& svg': {
      width: '100%'
    }
  }
});

let Recommended = class Recommended extends _react.Component {
  constructor(props) {
    super(props);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this);
    this.state = {
      isMouseOver: false
    };
  }

  _handleMouseOver() {
    this.setState({
      isMouseOver: true
    });
  }

  _handleMouseOut() {
    this.setState({
      isMouseOver: false
    });
  }

  render() {
    const {
      ttRecommended
    } = this.props;
    return ttRecommended ? _react.default.createElement(GRecommendedDiv, {
      onMouseOver: this._handleMouseOver,
      onMouseOut: this._handleMouseOut
    }, _react.default.createElement("div", {
      className: "tooltipCommon z2"
    }, _react.default.createElement(_ToolTip.default, {
      toolTipText: "Recommended by TravelTriangle",
      boxStyle: {
        right: 0,
        left: 'auto',
        transform: 'none'
      },
      arrowStyle: {
        right: '5px',
        left: 'auto',
        transform: 'none'
      }
    }), _react.default.createElement("div", {
      className: "recomendedIcon relative cursorP"
    }, _react.default.createElement(_TTRecommended.default, null)))) : null;
  }

};
Recommended.propTypes = {
  ttRecommended: _propTypes.PropTypes.bool
};
var _default = Recommended;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/RecommendedBanner.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/shared/RecommendedBanner.js ***!
  \****************************************************/
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

var _TTRecommended = _interopRequireDefault(__webpack_require__(/*! ./TTRecommended */ "./app-v2/modules/shared/TTRecommended.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GCloseButton = _glamorous.default.button({
  width: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute',
    width: '8px',
    height: '8px'
  }
});

const RecommendedBanner = ({
  onBannerClose
}) => _react.default.createElement("div", {
  className: "sbcw p15 flex alignCenter spaceBetween"
}, _react.default.createElement(_TTRecommended.default, null), _react.default.createElement("p", {
  className: "f12 m0 flexFull ml8 mr8"
}, "Recommended by TravelTriangle"), _react.default.createElement(GCloseButton, {
  className: "relative flex alignCenter justifyCenter",
  onClick: onBannerClose
}, _react.default.createElement(_Icon.CloseDark, null)));

RecommendedBanner.propTypes = {
  onBannerClose: _propTypes.PropTypes.func
};
var _default = RecommendedBanner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/SortFilters/Filters.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/shared/SortFilters/Filters.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./SortAndFilter.scss */ "./app-v2/modules/shared/SortFilters/SortAndFilter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Filters = ({
  selectedFilters
}) => {
  const calculateFiltersCount = filters => {
    const selectedFilters = filters;
    let _selectedFilterCount = 0;
    Object.keys(selectedFilters).map(filter => {
      Object.keys(selectedFilters[filter]).map(filterValue => {
        if (selectedFilters[filter][filterValue]) {
          _selectedFilterCount += 1;
        }

        return 0;
      });
      return 0;
    });
    return _selectedFilterCount;
  };

  return _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "relative pl48 filter-by-listing-view"
  }, _react.default.createElement("span", {
    className: "sort-by-icon"
  }, _react.default.createElement(_Icon.FilterIcon, null)), _react.default.createElement("p", null, "Filters"), _react.default.createElement("p", {
    className: `f10 no-filter-selected`
  }, calculateFiltersCount(selectedFilters), " selected")));
};

Filters.propTypes = {
  selectedFilters: _propTypes.default.object
};
Filters.defaultProps = {
  selectedFilters: {}
};
var _default = Filters;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/SortFilters/FiltersView.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/shared/SortFilters/FiltersView.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FiltersView = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GFilterButton = _glamorous.default.button({
  width: '56px',
  height: '56px',
  boxShadow: '0 4px 12px #999',
  '& svg': {
    position: 'absolute',
    width: '25px',
    height: '25px'
  }
});

const GButton = _glamorous.default.button({
  width: '24px',
  height: '24px',
  '& svg': {
    width: '16px',
    height: '16px'
  }
});

const FilterComponent = ({
  name,
  type,
  className,
  id,
  disabled,
  input,
  checked
}) => {
  return _react.default.createElement("input", _extends({}, input, {
    name: name,
    type: type,
    disabled: disabled,
    id: id,
    className: className
  }));
};

FilterComponent.propTypes = {
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  input: _propTypes.default.object.isRequired,
  checked: _propTypes.default.bool.isRequired
};

const FiltersView = ({
  handleSubmit,
  filterList,
  filterToggle,
  initialValues,
  resetFilters
}) => _react.default.createElement("div", null, _react.default.createElement(GFilterButton, {
  className: "overflowh hide pbc1 radius100 fixed z14 r15 b15 flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.FilterIconWhite, null)), _react.default.createElement("div", {
  className: "col-xs-12 p0 z15 fixed t0 l0 overflowa pb64 b0 r0 sbc5 cityblockfilterContainer"
}, _react.default.createElement("div", {
  className: "row row- sbcw filters-options-con"
}, _react.default.createElement("div", {
  className: "row row- sbcw p15 flex alignCenter filters-header"
}, _react.default.createElement("div", {
  className: "col-xs-2 pl0"
}, _react.default.createElement(GButton, {
  className: "close-filters flex alignCenter justifyCenter",
  type: "button",
  onClick: filterToggle
}, _react.default.createElement(_Icon.CloseDark, null))), _react.default.createElement("div", {
  className: "col-xs-6 pl8"
}, _react.default.createElement("p", {
  className: "filter-title"
}, "Filters")), _react.default.createElement("div", {
  className: "col-xs-4 pl0 pr0"
}, _react.default.createElement("button", {
  className: "reset-button fright",
  onClick: resetFilters
}, "RESET"))), _react.default.createElement("div", {
  className: "pt8 sbc5"
}), _react.default.createElement("form", {
  className: "filter-row-container block"
}, filterList && filterList.length && filterList.filter(filter => filter.options.length).map((filter, index) => _react.default.createElement("div", {
  className: "at_filtersrow p15 pb0 sbcw filter-row",
  key: index
}, _react.default.createElement("h3", {
  className: "destination-type-btn fw7 mb15 relative"
}, filter.title, _react.default.createElement("span", {
  className: "block absolute-center-v"
}, _react.default.createElement(_Icon.DownArrow, {
  className: "smooth"
}))), _react.default.createElement("div", {
  className: "row flex spaceBetween flexWrap destination-type-body"
}, filter.options.map((filterOption, key) => _react.default.createElement("div", {
  className: "col-xs-6",
  key: key
}, _react.default.createElement(_reduxForm.Field, {
  name: `${filter.paramName}[${filterOption.value}]`,
  component: FilterComponent,
  id: `${filter.paramName}[${filterOption.value}]`,
  type: "checkbox",
  className: "checkbox-common",
  disabled: !filterOption.enabled,
  checked: filterOption.selected
}), _react.default.createElement("label", {
  htmlFor: `${filter.paramName}[${filterOption.value}]`
}, filterOption.title)))), _react.default.createElement("div", {
  className: "row pt8 mt15 sbc5"
}))), _react.default.createElement("div", {
  className: "fixed p8 sbcw b0 l0 r0 bs4"
}, _react.default.createElement("button", {
  className: "btn-filled-pri-large wfull",
  type: "button",
  onClick: handleSubmit
}, "Apply Filter"))))));

exports.FiltersView = FiltersView;
FiltersView.propTypes = {
  initialValues: _propTypes.default.object.isRequired,
  handleSubmit: _propTypes.default.func,
  resetFilters: _propTypes.default.func,
  filterToggle: _propTypes.default.func,
  filterList: _propTypes.default.array
};
FiltersView.defaultProp = {};

var _default = (0, _reduxForm.reduxForm)({
  form: 'hlpFilters',
  initialValues: {
    enabled: true
  }
})(FiltersView);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/SortFilters/SortAndFilter.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/shared/SortFilters/SortAndFilter.js ***!
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

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _SortBy = _interopRequireDefault(__webpack_require__(/*! ./SortBy */ "./app-v2/modules/shared/SortFilters/SortBy.js"));

var _Filters = _interopRequireDefault(__webpack_require__(/*! ./Filters */ "./app-v2/modules/shared/SortFilters/Filters.js"));

var _FiltersView = _interopRequireDefault(__webpack_require__(/*! ./FiltersView */ "./app-v2/modules/shared/SortFilters/FiltersView.js"));

__webpack_require__(/*! ./SortAndFilter.scss */ "./app-v2/modules/shared/SortFilters/SortAndFilter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SortAndFilter = class SortAndFilter extends _react.default.Component {
  constructor(props) {
    super(props);
    this.filterToggle = this.filterToggle.bind(this);
    this.state = {
      showFilterPopup: false
    };
  }

  filterToggle() {
    this.setState({
      showFilterPopup: !this.state.showFilterPopup
    });
  }

  render() {
    const {
      filterList,
      sortBy,
      resetFilters,
      initialValues,
      applySort,
      location,
      applyFilters
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row- sort-filter-con"
    }, _react.default.createElement(_reactStickynode.default, {
      enabled: true,
      top: 0,
      innerZ: 4
    }, _react.default.createElement("div", {
      className: "col-xs-6 p0 sbcw"
    }, _react.default.createElement(_SortBy.default, {
      options: sortBy.options,
      selected: sortBy.options[0],
      applySort: applySort,
      location: location
    })), _react.default.createElement("div", {
      className: "col-xs-6 p0 sbcw",
      onClick: this.filterToggle
    }, _react.default.createElement(_Filters.default, {
      selectedFilters: initialValues
    }))), _react.default.createElement("div", {
      className: this.state.showFilterPopup ? '' : 'hide'
    }, _react.default.createElement(_FiltersView.default, {
      filterToggle: this.filterToggle,
      enableReinitialize: true,
      filterList: filterList,
      onSubmit: values => applyFilters(values),
      initialValues: initialValues,
      resetFilters: resetFilters
    })));
  }

};
SortAndFilter.propTypes = {
  filterList: _propTypes.default.array,
  initialValues: _propTypes.default.object.isRequired,
  applySort: _propTypes.default.func.isRequired,
  applyFilters: _propTypes.default.func.isRequired,
  location: _propTypes.default.object.isRequired,
  sortBy: _propTypes.default.object.isRequired,
  resetFilters: _propTypes.default.func.isRequired
};
SortAndFilter.defaultProps = {
  filterList: _propTypes.default.array
};
var _default = SortAndFilter;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/SortFilters/SortAndFilter.scss":
/*!**************************************************************!*\
  !*** ./app-v2/modules/shared/SortFilters/SortAndFilter.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sort-filter-con": "_92dIt",
	"active": "_2O2yf",
	"sticky-inner-wrapper": "_21IBe",
	"sort-by-listing": "_1HD1u",
	"sort-by-listing-view": "_2uu3u",
	"sort-by-icon": "_1IxKy",
	"filter-by-listing-view": "_3tKMj",
	"no-filter-selected": "_3mvgn",
	"selected-filters": "_12z1G"
};

/***/ }),

/***/ "./app-v2/modules/shared/SortFilters/SortBy.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/shared/SortFilters/SortBy.js ***!
  \*****************************************************/
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

__webpack_require__(/*! ./SortAndFilter.scss */ "./app-v2/modules/shared/SortFilters/SortAndFilter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Filters = class Filters extends _react.Component {
  constructor() {
    super();

    this.handleChange = e => {
      const selected = {
        value: e.target.value
      };
      this.props.applySort({
        values: selected,
        location: this.props.location
      });
      this.setState({
        selectedOption: e.target.value
      });
    };

    this.sortOptions = options => options.map(opt => _react.default.createElement("option", {
      key: opt.label,
      value: opt.value
    }, opt.label));

    this.state = {
      selectedOption: ''
    };
  }

  render() {
    const {
      options,
      selected,
      location
    } = this.props;
    const {
      query
    } = location;
    let selectedOption = options.filter(option => option.value === query.sort_by);
    selectedOption = selectedOption.length ? selectedOption[0] : selected;
    return _react.default.createElement("div", {
      className: "row row- relative sort-by-listing-container"
    }, _react.default.createElement("div", {
      className: "pl48 relative sort-by-listing-view sbcw"
    }, _react.default.createElement("span", {
      className: "sort-by-icon"
    }, _react.default.createElement(_Icon.SortIcon, null)), _react.default.createElement("p", null, "Sort by"), _react.default.createElement("p", {
      className: "pfc2 f10"
    }, selectedOption.label)), _react.default.createElement("select", {
      className: "sort-by-listing",
      onChange: this.handleChange,
      value: selectedOption.value,
      name: selectedOption.name
    }, options.length && this.sortOptions(options)));
  }

};
Filters.propTypes = {
  location: _propTypes.default.object.isRequired,
  options: _propTypes.default.array,
  selected: _propTypes.default.object,
  applySort: _propTypes.default.func.isRequired
};
Filters.defaultProps = {
  options: [],
  selected: {}
};
var _default = Filters;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/interlinking/index.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/shared/interlinking/index.js ***!
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

/***/ "./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss":
/*!**********************************************************************!*\
  !*** ./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button-load-more-full": "_1lFOd"
};

/***/ }),

/***/ "./app-v2/modules/shared/loadMorePackages/index.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/shared/loadMorePackages/index.js ***!
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

__webpack_require__(/*! ./LoadMorePackages.scss */ "./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadMorePackages = ({
  packagesRemaining,
  loadMorePackages,
  currentPage,
  title
}) => {
  const handleLoadMore = pageNumber => () => {
    loadMorePackages(pageNumber);
  };

  return _react.default.createElement("div", {
    className: packagesRemaining > 0 ? '' : 'hide'
  }, _react.default.createElement("div", {
    className: "mb15 mt8"
  }, _react.default.createElement("button", {
    onClick: handleLoadMore(currentPage + 1),
    className: "button-load-more-full",
    role: "button"
  }, "Load More (", packagesRemaining, " ", title)));
};

LoadMorePackages.propTypes = {
  packagesRemaining: _propTypes.default.number.isRequired,
  loadMorePackages: _propTypes.default.func.isRequired,
  currentPage: _propTypes.default.number.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = LoadMorePackages;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/loaders/LoaderCard.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/shared/loaders/LoaderCard.js ***!
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

var _G = __webpack_require__(/*! ./../G */ "./app-v2/modules/shared/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let LoaderCard = (_temp = _class = class LoaderCard extends _react.default.Component {
  render() {
    const {
      cardVisible
    } = this.props;
    return _react.default.createElement(_G.GLoaderContainerDiv, {
      className: "flex flexFull flexDColumn wfull"
    }, _react.default.createElement("div", {
      className: "loaderLine mb5 mt0 sbc5",
      style: {
        width: '60%'
      }
    }), _react.default.createElement("div", {
      className: "loaderLine mb15 mt0 sbc5",
      style: {
        width: '70%'
      }
    }), _react.default.createElement("div", {
      className: "loaderMain radius2 flexFull"
    }, _react.default.createElement("div", {
      className: "loaderMainCard flexFull"
    }, _react.default.createElement(_G.GLoaderCardSpan, {
      className: "wfull sbc5"
    }), _react.default.createElement("div", {
      className: "sbcw p15 pb24 wfull"
    }, _react.default.createElement("div", {
      className: "loaderLineDark sbc5 mb15 sbc4",
      style: {
        maxWidth: '80%'
      }
    }), _react.default.createElement("div", {
      className: "loaderLineDark sbc5 mb8 sbc4"
    }), _react.default.createElement("div", {
      className: "loaderLineDark sbc5 sbc4"
    })))));
  }

}, _class.propTypes = {
  lineVisible: _propTypes.default.object,
  cardVisible: _propTypes.default.object
}, _class.defaultProps = {
  lineVisible: {},
  cardVisible: {}
}, _temp);
exports.default = LoaderCard;

/***/ }),

/***/ "./app-v2/screens/hlp/Hlp.js":
/*!***********************************!*\
  !*** ./app-v2/screens/hlp/Hlp.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

__webpack_require__(/*! app/theme/HotelListing.scss */ "./app/theme/HotelListing.scss");

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! modules/shared/Breadcrumb */ "./app-v2/modules/shared/Breadcrumb.js"));

var _faqs = _interopRequireDefault(__webpack_require__(/*! modules/faqs */ "./app-v2/modules/faqs/index.js"));

var _popular = _interopRequireDefault(__webpack_require__(/*! modules/packages/popular */ "./app-v2/modules/packages/popular/index.js"));

var _placesToVisit = _interopRequireDefault(__webpack_require__(/*! modules/placesToVisit */ "./app-v2/modules/placesToVisit/index.js"));

var _travellerStory = _interopRequireDefault(__webpack_require__(/*! modules/travellerStory */ "./app-v2/modules/travellerStory/index.js"));

var _HotelCard = _interopRequireDefault(__webpack_require__(/*! modules/hlp/HotelCard */ "./app-v2/modules/hlp/HotelCard.js"));

var _Guide = _interopRequireDefault(__webpack_require__(/*! modules/shared/Guide */ "./app-v2/modules/shared/Guide.js"));

var _hotels = __webpack_require__(/*! helpers/hotels */ "./app/helpers/hotels.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _SortAndFilter = _interopRequireDefault(__webpack_require__(/*! modules/shared/SortFilters/SortAndFilter */ "./app-v2/modules/shared/SortFilters/SortAndFilter.js"));

var _KnowMoreCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/KnowMoreCard */ "./app-v2/modules/shared/KnowMoreCard.js"));

__webpack_require__(/*! theme/HotelListing.scss */ "./app/theme/HotelListing.scss");

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

var _RecommendedBanner = _interopRequireDefault(__webpack_require__(/*! modules/shared/RecommendedBanner */ "./app-v2/modules/shared/RecommendedBanner.js"));

var _loadMorePackages = _interopRequireDefault(__webpack_require__(/*! modules/shared/loadMorePackages */ "./app-v2/modules/shared/loadMorePackages/index.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _Footer = _interopRequireDefault(__webpack_require__(/*! modules/shared/Footer */ "./app-v2/modules/shared/Footer/index.js"));

var _NoPackageFound = _interopRequireDefault(__webpack_require__(/*! modules/shared/NoPackageFound */ "./app-v2/modules/shared/NoPackageFound/index.js"));

var _FixedMenu = _interopRequireDefault(__webpack_require__(/*! components/FixedMenu/FixedMenu */ "./app/components/FixedMenu/FixedMenu.js"));

var _seoHelpers = __webpack_require__(/*! helpers/seoHelpers */ "./app/helpers/seoHelpers.js");

var _interlinking = _interopRequireDefault(__webpack_require__(/*! modules/shared/interlinking */ "./app-v2/modules/shared/interlinking/index.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const ScrollElement = (0, _glamorous.default)(_reactStickynode.default)({
  zIndex: 3,
  position: 'relative',
  '&.show': {
    visibility: 'visible'
  }
});
let Hlp = (_temp = _class = class Hlp extends _react.Component {
  constructor(props) {
    super(props);

    this.onBannerClose = () => {
      this.setState({
        bannerState: !this.state.bannerState
      });
    };

    this.loadMoreHotels = () => {
      this.pageNumber = this.pageNumber + 1;
      const {
        loadMoreHotels,
        location,
        params,
        routes
      } = this.props;
      const {
        query
      } = location;
      const {
        destination,
        landmark,
        filterType
      } = params;
      const propertyType = routes[routes.length - 1].hotelType;
      const {
        primaryPivot,
        secondaryPivot
      } = (0, _hotels.parseHotelUrl)({
        filterType,
        propertyType,
        destination,
        landmark,
        query
      });
      const star_ratings = secondaryPivot[_hotels.Constants.STAR_RATING] ? (0, _hotels.findElementByKey)('title', secondaryPivot[_hotels.Constants.STAR_RATING]).value : '';
      const themes = secondaryPivot[_hotels.Constants.THEMES] ? secondaryPivot[_hotels.Constants.THEMES] : '';
      const travelMonth = (0, _DateTime.getTravelMonth)(query.travelmonth) ? (0, _DateTime.getTravelMonth)(query.travelmonth) + 1 : (0, _DateTime.getCurrentMonth)() + 1;
      loadMoreHotels({
        query: (0, _hotels.parseHotelFilters)(query, 'query').filters,
        pageNumber: this.pageNumber,
        params: {
          property_types: propertyType,
          location: params.destination,
          nearby: landmark || '',
          star_ratings,
          themes,
          travel_month: travelMonth
        },
        sortBy: query.sort_by
      });
    };

    this.state = {
      bannerState: true,
      resetSelectedFilters: null
    };
    this.resetFilters = this.resetFilters.bind(this);
    this.pageNumber = 1;
  }

  componentDidUpdate(prevProps) {
    (0, _FormDataFormatter.setCookie)('cb_dt', '');

    if (prevProps.location !== this.props.location) {
      const {
        city,
        destination
      } = this.props.hlp && this.props.hlp.data;
      (0, _parsers.getDestination)(city || destination);
    }
  }

  componentDidMount() {
    if (this.props.hlp.data) {
      const {
        city,
        destination
      } = this.props.hlp.data;
      (0, _parsers.getDestination)(city || destination);
    }
  }

  static renderHotelCardWithBanner(hotelsList, location, plpLink) {
    return hotelsList.map((item, i) => {
      if (i + 1 === 2) {
        return _react.default.createElement("div", {
          key: i
        }, _react.default.createElement("div", {
          className: "mb8"
        }, _react.default.createElement(_HotelCard.default, {
          item: item,
          location: location
        })), _react.default.createElement("div", {
          className: "mb8"
        }, _react.default.createElement(_KnowMoreCard.default, {
          link: plpLink
        })));
      }

      return _react.default.createElement("div", {
        className: "mb8",
        key: i
      }, _react.default.createElement(_HotelCard.default, {
        item: item,
        location: location
      }));
    });
  }

  resetFilters({
    location,
    primaryPivot,
    secondaryPivot,
    params,
    initialPrimaryPivot
  }) {
    const values = {};

    if (initialPrimaryPivot.property_types !== _hotels.Constants.DEFAULT_HOTELS) {
      values[_hotels.Constants.PROPERTY_TYPE] = {
        [initialPrimaryPivot.property_types]: true
      };
    }

    if (Object.keys(secondaryPivot).length) {
      const secTitle = secondaryPivot[Object.keys(secondaryPivot)[0]];
      const secValue = Object.keys(secondaryPivot)[0] === _hotels.Constants.STAR_RATING ? (0, _hotels.findElementByKey)('title', secTitle).value : secTitle;
      values[Object.keys(secondaryPivot)[0]] = {
        [secValue]: true
      };
    }

    this.props.resetFilters(values);
    this.setState({
      resetSelectedFilters: values
    });
  }

  render() {
    if ((0, _isEmpty2.default)(this.props.hlp.data)) {
      return null;
    }

    const {
      city,
      destination,
      breadcrumbs,
      footerSection,
      filters: filterList,
      hotels,
      faqs,
      sortByFilter,
      plpLink,
      metaTags,
      canonicalUrl,
      banner,
      isPublished
    } = this.props.hlp.data;
    const {
      location,
      params,
      applySort,
      applyFilters,
      footerLinks,
      primaryPivot: initialPrimaryPivot,
      routes,
      packages
    } = this.props;
    const propertyType = routes[routes.length - 1].hotelType;
    const hotelsList = hotels && hotels.hotels || [];
    const PlacesToVisitContainer = _placesToVisit.default.container;
    const FaqsContainer = _faqs.default.hlpContainer;
    const PopularPackagesContainer = _popular.default.container;
    const TravelerStoriesContainer = _travellerStory.default.container;
    const {
      filterType,
      landmark
    } = this.props.routeParams;
    const query = this.props.location.query;
    const {
      primaryPivot,
      secondaryPivot,
      newQuery
    } = (0, _hotels.parseHotelUrl)({
      filterType,
      propertyType,
      destination,
      landmark,
      query
    });
    const {
      filters: selectedFilters
    } = (0, _hotels.parseHotelFilters)(newQuery);
    const filters = this.state.resetSelectedFilters;
    const travelmonth = (0, _DateTime.getTravelMonth)(query.travelmonth) ? (0, _DateTime.getTravelMonth)(query.travelmonth) + 1 : (0, _DateTime.getCurrentMonth)() + 1;
    return _react.default.createElement("div", {
      className: "sbc5"
    }, _react.default.createElement(_reactHelmet.default, null, (0, _seoHelpers.createHelmetBanner)(metaTags, canonicalUrl, location.pathname), !isPublished && _react.default.createElement("meta", {
      name: "robots",
      content: "noindex, nofollow"
    }), _react.default.createElement("meta", {
      name: "theme-color",
      content: "#68c4c1"
    })), _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_HeaderTitle.default, {
      title: banner ? banner.title : '',
      backUrl: this.props.location.action === 'POP' ? '/' : ''
    }), _react.default.createElement(_SortAndFilter.default, {
      location: location,
      sortBy: sortByFilter,
      applySort: applySort,
      applyFilters: values => applyFilters({
        location,
        values,
        primaryPivot,
        secondaryPivot,
        params
      }),
      filterList: filterList,
      initialValues: filters || selectedFilters,
      resetFilters: () => this.resetFilters({
        location,
        primaryPivot,
        secondaryPivot,
        params,
        initialPrimaryPivot
      })
    }), this.state.bannerState ? _react.default.createElement("div", {
      className: "mt8 mb8"
    }, _react.default.createElement(_RecommendedBanner.default, {
      onBannerClose: this.onBannerClose
    })) : null, _react.default.createElement(_NoPackageFound.default, {
      totalPackages: hotels.totalEntries || 0
    }), hotelsList && hotelsList.length ? Hlp.renderHotelCardWithBanner(hotelsList, location, plpLink) : null, _react.default.createElement("div", {
      className: "row row- mb8"
    }, _react.default.createElement(_loadMorePackages.default, {
      packagesRemaining: hotels.totalEntries - hotelsList.length,
      loadMorePackages: this.loadMoreHotels,
      currentPage: location.query.page && location.query.page || 1,
      title: `${propertyType} remaining)`
    }), footerLinks.length ? _react.default.createElement(_interlinking.default, {
      footerLinks: footerLinks
    }) : null), faqs && faqs.faqs.length ? _react.default.createElement("div", {
      className: "mb8 br"
    }, _react.default.createElement(FaqsContainer, null)) : null, footerSection && _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_Guide.default, {
      guide: {
        title: footerSection.title,
        heading: footerSection.heading,
        description: footerSection.headerBelowText
      }
    })), packages && packages.length ? _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(PopularPackagesContainer, {
      title: `${city || destination} Packages`,
      travelmonth: travelmonth
    })) : null, _react.default.createElement("div", {
      className: "mb8"
    }, city || destination ? _react.default.createElement(TravelerStoriesContainer, {
      data: {
        title: `Top Travel Blogs for ${destination}`
      },
      config: {
        csr: true
      },
      destination: city || destination,
      viewAll: "/blog/travelogues?referer=travelogue_hotel_listing"
    }) : null), city || destination ? _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement("div", {
      className: "p15 sbcw"
    }, _react.default.createElement(PlacesToVisitContainer, null))) : null, footerSection && _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_Guide.default, {
      guide: {
        description: footerSection.footerAboveText
      }
    })), _react.default.createElement(_FixedMenu.default, null), _react.default.createElement("div", {
      className: "p8 pt0"
    }, _react.default.createElement(_Breadcrumb.default, {
      breadcrumbs: breadcrumbs
    })), _react.default.createElement("div", {
      className: "row row- pb8 pt0 pl8 pr8"
    }, _react.default.createElement(_Footer.default, null)));
  }

}, _class.propTypes = {
  hlp: _propTypes.default.object,
  breadcrumbs: _propTypes.default.array,
  routes: _propTypes.default.array,
  routeParams: _propTypes.default.object,
  location: _propTypes.default.object.isRequired,
  applyFilters: _propTypes.default.func.isRequired,
  params: _propTypes.default.object.isRequired,
  applySort: _propTypes.default.func,
  loadMoreHotels: _propTypes.default.func,
  resetFilters: _propTypes.default.func,
  primaryPivot: _propTypes.default.object,
  packages: _propTypes.default.array,
  isPublished: _propTypes.default.bool,
  footerLinks: _propTypes.default.array
}, _class.defaultProps = {
  routeParams: {},
  applySort: () => {},
  loadMoreHotels: () => {},
  primaryPivot: {},
  packages: []
}, _temp);
var _default = Hlp;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/FormOneCTA.js":
/*!****************************************************!*\
  !*** ./app/components/Form/FormLead/FormOneCTA.js ***!
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
    const {
      rtProps,
      tag,
      deals,
      budget
    } = this.props; // merge admin comments with the existing ones

    let adminComments = rtProps.adminComments || '';

    if (typeof window !== 'undefined') {
      adminComments = `${adminComments} #Form_filled_on ${window.location.href}`;
    }

    adminComments = ` ${adminComments} ${_segmentEvents.SEGMENT_ADMIN_COMMENT}`;

    const rtripProps = _objectSpread({}, rtProps, {
      adminComments
    });

    (0, _segmentEvents.setCookie)('to_loc', rtProps.to_loc);
    (0, _segmentEvents.setCookie)('trip_days', rtProps.trip_days);
    this.props.clickHandler(); // update the value on store

    this.props.updateFromOneProps(rtripProps); // change the url

    if (deals) {
      this.props.pushState(`/requested_trips/new?deals=true&tag=${tag}&budget=${budget}`);
    } else {
      this.props.pushState('/requested_trips/new');
    }
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
  deals: _propTypes.default.bool,
  clickHandler: _propTypes.default.func,
  tag: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]),
  budget: _propTypes.default.string
}, _class.defaultProps = {
  rtProps: {},
  clickHandler: () => {},
  children: [],
  deals: false,
  tag: '',
  budget: ''
}, _temp);

var _default = (0, _reactRedux.connect)(null, {
  updateFromOneProps: _formOneLead.updateFromOneProps,
  pushState: _reactRouterRedux.push
})(FormOneCTA);

exports.default = _default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mYXFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hscC9Ib3RlbENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaGxwL0hvdGVsQ2FyZEltZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9obHAvSG90ZWxDYXJkUmlnaHREYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hscC9Ib3RlbEluY2x1c2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wbGFjZXNUb1Zpc2l0L1BsYWNlc1RvVmlzaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcGxhY2VzVG9WaXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvR3VpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0tub3dNb3JlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvTm9QYWNrYWdlRm91bmQvTm9QYWNrYWdlRm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvTm9QYWNrYWdlRm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL092ZXJ2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9SZWNvbW1lbmRlZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvUmVjb21tZW5kZWRCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1NvcnRGaWx0ZXJzL0ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1NvcnRGaWx0ZXJzL0ZpbHRlcnNWaWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Tb3J0RmlsdGVycy9Tb3J0QW5kRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Tb3J0RmlsdGVycy9Tb3J0QW5kRmlsdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1NvcnRGaWx0ZXJzL1NvcnRCeS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvaW50ZXJsaW5raW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9sb2FkTW9yZVBhY2thZ2VzL0xvYWRNb3JlUGFja2FnZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvbG9hZE1vcmVQYWNrYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvbG9hZGVycy9Mb2FkZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2hscC9IbHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9Gb3JtT25lQ1RBLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2NodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9GaW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyJdLCJuYW1lcyI6WyJjb250YWluZXIiLCJzdGF0ZSIsImRhdGEiLCJGYXFzIiwiaGxwQ29udGFpbmVyIiwiYWN0aW9ucyIsImRlZmF1bHRBY3Rpb24iLCJHSG90ZWxDYXJkRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwiYm9yZGVyIiwiR0hvdGVsQ2FyZEZvb3RlckRpdiIsImJvcmRlclRvcCIsIkhvdGVsQ2FyZCIsIml0ZW0iLCJ1cmwiLCJpbWFnZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJHSG90ZWxJbWdEaXYiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiR0hvdGVsUGxhY2Vob2xkZXJEaXYiLCJ3aWR0aCIsIkhvdGVsQ2FyZEltZyIsImxlbmd0aCIsIm1vYmlsZSIsImltYWdla2l0VXJsIiwiYWx0VGV4dCIsImFycmF5IiwiaXNSZXF1aXJlZCIsIkdNYXBEYXRhRGl2IiwiSG90ZWxDYXJkUmlnaHREYXRhIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZU1hcE1vZGFsIiwiZmxhZyIsInNldFN0YXRlIiwic2hvd01hcCIsInJlbmRlciIsImhvdGVsIiwiY3VycmVuY3kiLCJwcmljZUZyb20iLCJwcmljZVRvIiwicHJpY2VSYW5nZSIsImRpc3BsYXlOYW1lIiwic3RhclJhdGluZyIsInRleHRBbGlnbiIsInVzZXJSYXRpbmciLCJhZGRyZXNzIiwiYnJpZWYiLCJmYWNpbGl0aWVzIiwidG9wUmF0ZWRMdXh1cnkiLCJ0b3BSYXRlZEJ1ZGdldCIsIk1hdGgiLCJyb3VuZCIsInByb3hpbWl0eSIsImRpc3RhbmNlIiwidW5pdCIsImZyb20iLCJ0dFJlY29tZW5kZWQiLCJHSW5jbHVzaW9uRGl2IiwiR0luY2x1c2lvbkhpZ2hsaWdodFVsIiwidWwiLCJmb250U2l6ZSIsInBhZGRpbmciLCJsaW5lSGVpZ2h0IiwicG9zaXRpb24iLCJtYXJnaW5SaWdodCIsImNvbG9yIiwiR0luY2x1c2lvbnNVbCIsImRpc3BsYXkiLCJsaXN0U3R5bGUiLCJHSW5jbHVzaW9uSWNvblNwYW4iLCJzcGFuIiwibWFyZ2luIiwibGVmdCIsInRyYW5zZm9ybSIsIkluY2x1c2lvbkhpZ2hsaWdodCIsImx1eHVyeSIsImJ1ZGdldCIsImJvb2wiLCJJbmNsdXNpb25zIiwibWFwIiwiZmFjaWxpdHkiLCJpIiwiSWNvbkNvbXBvbmVudCIsImtleSIsIkljb25zIiwicmVwbGFjZSIsIkRlZmF1bHRJY29uIiwidGV4dCIsImRlZmF1bHRQcm9wcyIsIkhvdGVsSW5jbHVzaW9uIiwiUGxhY2VzVG9WaXNpdCIsIlJlYWN0IiwidHJhY2tTZWdtZW50IiwiY3RhIiwiY2FyZElkIiwibWlzY1R5cGUxIiwibWlzY0lkMSIsInRyYWNrU2VnbWVudEV2ZW50IiwiY29uZmlnIiwibG9hZGVkIiwiZXh0ZXJuYWxDc3MiLCJlcnJvcnMiLCJkZXN0aW5hdGlvblNjaGVtZXMiLCJzdHJpbmciLCJmdW5jIiwiZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YSIsInZhcmlhbnQiLCJvcmRlciIsInBsYWNlc1RvVmlzaXQiLCJTaG93TW9yZUNvbnRhaW5lciIsIm1hcmdpblRvcCIsIkd1aWRlIiwiZ3VpZGUiLCJHS25vd01vcmVEaXYiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJLbm93TW9yZUNhcmQiLCJsaW5rIiwiTm9QYWNrYWdlRm91bmQiLCJ0b3RhbFBhY2thZ2VzIiwic3RhcnRpbmdQcmljZSIsImN0YVRleHQiLCJudW1iZXIiLCJwYXJzZXIiLCJQYXJzZXIiLCJvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSIsIm92ZXJ2aWV3TW9yZVRleHQiLCJlcnIiLCJPdmVydmlldyIsIlB1cmVDb21wb25lbnQiLCJvdmVydmlld0NvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImZvb3RlckRlc2NyaXB0aW9uIiwiZGVzYyIsInNwbGl0IiwiZmlsdGVyIiwicCIsImZvb3RlckRlc2MiLCJwYXJzZSIsInNsaWNlIiwiam9pbiIsImNvbmNhdCIsIkdSZWNvbW1lbmRlZERpdiIsIlJlY29tbWVuZGVkIiwiX2hhbmRsZU1vdXNlT3ZlciIsImJpbmQiLCJfaGFuZGxlTW91c2VPdXQiLCJpc01vdXNlT3ZlciIsInR0UmVjb21tZW5kZWQiLCJyaWdodCIsIkdDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsIlJlY29tbWVuZGVkQmFubmVyIiwib25CYW5uZXJDbG9zZSIsIkZpbHRlcnMiLCJzZWxlY3RlZEZpbHRlcnMiLCJjYWxjdWxhdGVGaWx0ZXJzQ291bnQiLCJmaWx0ZXJzIiwiX3NlbGVjdGVkRmlsdGVyQ291bnQiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyVmFsdWUiLCJHRmlsdGVyQnV0dG9uIiwiYm94U2hhZG93IiwiR0J1dHRvbiIsIkZpbHRlckNvbXBvbmVudCIsIm5hbWUiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaWQiLCJkaXNhYmxlZCIsImlucHV0IiwiY2hlY2tlZCIsIkZpbHRlcnNWaWV3IiwiaGFuZGxlU3VibWl0IiwiZmlsdGVyTGlzdCIsImZpbHRlclRvZ2dsZSIsImluaXRpYWxWYWx1ZXMiLCJyZXNldEZpbHRlcnMiLCJvcHRpb25zIiwiaW5kZXgiLCJ0aXRsZSIsImZpbHRlck9wdGlvbiIsInBhcmFtTmFtZSIsInZhbHVlIiwiZW5hYmxlZCIsInNlbGVjdGVkIiwiZGVmYXVsdFByb3AiLCJmb3JtIiwiU29ydEFuZEZpbHRlciIsInNob3dGaWx0ZXJQb3B1cCIsInNvcnRCeSIsImFwcGx5U29ydCIsImxvY2F0aW9uIiwiYXBwbHlGaWx0ZXJzIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlbGVjdGVkT3B0aW9uIiwic29ydE9wdGlvbnMiLCJvcHQiLCJsYWJlbCIsInF1ZXJ5Iiwib3B0aW9uIiwic29ydF9ieSIsIlJlbmRlckxpbmtzIiwiZ2VuZXJhdGVGb290ZXJMaW5rcyIsImZvb3RlckxpbmtBcnIiLCJmb290ZXJMaW5rIiwiaGFzT3duUHJvcGVydHkiLCJmb290ZXIiLCJnZW5lcmF0ZUZvb3RlckxpbmtTZWN0aW9uIiwiZm9vdGVyTGlua1NlY3Rpb24iLCJmb290ZXJMaW5rcyIsImZvb3Rlcl9saW5rcyIsImdyb3VwZWRBcnIiLCJJbnRlckxpbmtpbmciLCJMb2FkTW9yZVBhY2thZ2VzIiwicGFja2FnZXNSZW1haW5pbmciLCJsb2FkTW9yZVBhY2thZ2VzIiwiY3VycmVudFBhZ2UiLCJoYW5kbGVMb2FkTW9yZSIsInBhZ2VOdW1iZXIiLCJMb2FkZXJDYXJkIiwiY2FyZFZpc2libGUiLCJsaW5lVmlzaWJsZSIsIlNjcm9sbEVsZW1lbnQiLCJTdGlja3kiLCJ6SW5kZXgiLCJ2aXNpYmlsaXR5IiwiSGxwIiwiYmFubmVyU3RhdGUiLCJsb2FkTW9yZUhvdGVscyIsInBhcmFtcyIsInJvdXRlcyIsImRlc3RpbmF0aW9uIiwibGFuZG1hcmsiLCJmaWx0ZXJUeXBlIiwicHJvcGVydHlUeXBlIiwiaG90ZWxUeXBlIiwicHJpbWFyeVBpdm90Iiwic2Vjb25kYXJ5UGl2b3QiLCJzdGFyX3JhdGluZ3MiLCJDb25zdGFudHMiLCJTVEFSX1JBVElORyIsInRoZW1lcyIsIlRIRU1FUyIsInRyYXZlbE1vbnRoIiwidHJhdmVsbW9udGgiLCJwcm9wZXJ0eV90eXBlcyIsIm5lYXJieSIsInRyYXZlbF9tb250aCIsInJlc2V0U2VsZWN0ZWRGaWx0ZXJzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiY2l0eSIsImhscCIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVySG90ZWxDYXJkV2l0aEJhbm5lciIsImhvdGVsc0xpc3QiLCJwbHBMaW5rIiwiaW5pdGlhbFByaW1hcnlQaXZvdCIsIkRFRkFVTFRfSE9URUxTIiwiUFJPUEVSVFlfVFlQRSIsInNlY1RpdGxlIiwic2VjVmFsdWUiLCJicmVhZGNydW1icyIsImZvb3RlclNlY3Rpb24iLCJob3RlbHMiLCJmYXFzIiwic29ydEJ5RmlsdGVyIiwibWV0YVRhZ3MiLCJjYW5vbmljYWxVcmwiLCJiYW5uZXIiLCJpc1B1Ymxpc2hlZCIsInBhY2thZ2VzIiwiUGxhY2VzVG9WaXNpdENvbnRhaW5lciIsIkZhcXNDb250YWluZXIiLCJQb3B1bGFyUGFja2FnZXNDb250YWluZXIiLCJQb3B1bGFyUGFja2FnZXMiLCJUcmF2ZWxlclN0b3JpZXNDb250YWluZXIiLCJUcmF2ZWxlclN0b3JpZXMiLCJyb3V0ZVBhcmFtcyIsIm5ld1F1ZXJ5IiwicGF0aG5hbWUiLCJhY3Rpb24iLCJ0b3RhbEVudHJpZXMiLCJwYWdlIiwiaGVhZGluZyIsImhlYWRlckJlbG93VGV4dCIsImNzciIsImZvb3RlckFib3ZlVGV4dCIsIkZvcm1PbmVDVEEiLCJoYW5kbGVDbGljayIsInJ0UHJvcHMiLCJ0YWciLCJkZWFscyIsImFkbWluQ29tbWVudHMiLCJ3aW5kb3ciLCJocmVmIiwiU0VHTUVOVF9BRE1JTl9DT01NRU5UIiwicnRyaXBQcm9wcyIsInRvX2xvYyIsInRyaXBfZGF5cyIsImNsaWNrSGFuZGxlciIsInVwZGF0ZUZyb21PbmVQcm9wcyIsInB1c2hTdGF0ZSIsImNoaWxkcmVuIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxNQUFNQSxZQUFZLDZCQUFXLHlCQUMzQkMsVUFBVTtBQUNSQyxRQUFNLHNCQUFRRCxLQUFSO0FBREUsQ0FBVixDQUQyQixFQUd2QkUsYUFIdUIsQ0FBWCxDQUFsQjtBQUtBLE1BQU1DLGVBQWUsNkJBQVcseUJBQzlCSCxVQUFVO0FBQ1JDLFFBQU0seUJBQVdELEtBQVg7QUFERSxDQUFWLENBRDhCLEVBRzFCRSxhQUgwQixDQUFYLENBQXJCO2VBS2U7QUFDYkgsV0FEYTtBQUViSSxjQUZhO0FBR2JDLFdBQVMsRUFISTtBQUliQyxpQkFBZTtBQUpGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJmOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUMsZ0JBQWdCQyxtQkFBVUMsR0FBVixDQUFjO0FBQ2xDQyxVQUFRO0FBRDBCLENBQWQsQ0FBdEI7O0FBSUEsTUFBTUMsc0JBQXNCSCxtQkFBVUMsR0FBVixDQUFjO0FBQ3hDQyxVQUFRLG1CQURnQztBQUV4Q0UsYUFBVztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJob3RlbC1saXN0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHJlc3VsdHMsIGhscFJlc3VsdHMgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbXBvcnQgRmFxcyBmcm9tICcuL0ZhcXMnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgZGF0YTogcmVzdWx0cyhzdGF0ZSlcbiAgfSkpKEZhcXMpKTtcblxuY29uc3QgaGxwQ29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGRhdGE6IGhscFJlc3VsdHMoc3RhdGUpXG4gIH0pKShGYXFzKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBobHBDb250YWluZXIsXG4gIGFjdGlvbnM6IHt9LFxuICBkZWZhdWx0QWN0aW9uOiBudWxsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBIb3RlbENhcmRJbWcgZnJvbSAnLi9Ib3RlbENhcmRJbWcnO1xuaW1wb3J0IEhvdGVsQ2FyZFJpZ2h0RGF0YSBmcm9tICcuL0hvdGVsQ2FyZFJpZ2h0RGF0YSc7XG5cbmNvbnN0IEdIb3RlbENhcmREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZmVmZWYnLFxufSk7XG5cbmNvbnN0IEdIb3RlbENhcmRGb290ZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZmVmZWYnLFxuICBib3JkZXJUb3A6ICcwIG5vbmUnLFxufSk7XG5cbmNvbnN0IEhvdGVsQ2FyZCA9ICh7IGl0ZW0gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgPExpbmsgdG89e2l0ZW0udXJsfSBjbGFzc05hbWU9XCJwZmMzXCI+XG4gICAgICA8R0hvdGVsQ2FyZERpdiBjbGFzc05hbWU9XCJzYmN3IHJhZGl1czJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZnVsbCBmbGV4IHA4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcjhcIj48SG90ZWxDYXJkSW1nIGltYWdlcz17aXRlbS5pbWFnZXN9IC8+PC9kaXY+XG4gICAgICAgICAgPEhvdGVsQ2FyZFJpZ2h0RGF0YSBob3RlbD17aXRlbX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dIb3RlbENhcmREaXY+XG4gICAgPC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbkhvdGVsQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsQ2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgSG90ZWxFbXB0eVN0YXRlIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5jb25zdCBHSG90ZWxJbWdEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWluV2lkdGg6ICcxMjBweCcsXG4gIG1heFdpZHRoOiAnMTIwcHgnLFxuICBoZWlnaHQ6ICcxNzVweCcsXG4gICcmIGltZyc6IHtcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnbm9uZScsXG4gIH1cbn0pO1xuXG5jb25zdCBHSG90ZWxQbGFjZWhvbGRlckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMDVweCcsXG4gICAgaGVpZ2h0OiAnNjlweCcsXG4gIH1cbn0pO1xuXG5jb25zdCBIb3RlbENhcmRJbWcgPSAoeyBpbWFnZXMgfSkgPT4gKFxuICA8R0hvdGVsSW1nRGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93aFwiPlxuICAgIHtcbiAgICAgIGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoID9cbiAgICAgICAgPEltZ1xuICAgICAgICAgIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTcyXCJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS51cmwubW9iaWxlfVxuICAgICAgICAgIGlrU3JjPXtpbWFnZXNbMF0udXJsLmltYWdla2l0VXJsfVxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLmFsdFRleHQgfHwgJ0hvdGVsIEltYWdlJ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXJcIlxuICAgICAgICAvPiA6XG4gICAgICAgIDxHSG90ZWxQbGFjZWhvbGRlckRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzYmM1IHdmdWxsIGhmdWxsIGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPlxuICAgICAgICAgIDxIb3RlbEVtcHR5U3RhdGUgLz5cbiAgICAgICAgPC9HSG90ZWxQbGFjZWhvbGRlckRpdj5cbiAgICB9XG4gIDwvR0hvdGVsSW1nRGl2PlxuKTtcblxuSG90ZWxDYXJkSW1nLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxDYXJkSW1nO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Byb3BUeXBlc30gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBPdmVyQWxsUmF0aW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL092ZXJBbGxSYXRpbmcnO1xuaW1wb3J0IFRvb2xUaXAgZnJvbSAnbW9kdWxlcy9zaGFyZWQvVG9vbFRpcCc7XG5pbXBvcnQgUmF0aW5nU3RhciBmcm9tICdtb2R1bGVzL3NoYXJlZC9SYXRpbmdTdGFyJztcbmltcG9ydCBSZWNvbW1lbmRlZCBmcm9tICdtb2R1bGVzL3NoYXJlZC9SZWNvbW1lbmRlZCc7XG5pbXBvcnQge2N1cnJlbmN5VG9TeW1ib2wsIG51bWJlcldpdGhDb21tYXN9IGZyb20gJ2hlbHBlcnMvcGFyc2Vycyc7XG5pbXBvcnQgSG90ZWxJbmNsdXNpb24gZnJvbSAnLi9Ib3RlbEluY2x1c2lvbic7XG5cbmNvbnN0IEdNYXBEYXRhRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMTAwMHB4Jyxcbn0pO1xuXG5jbGFzcyBIb3RlbENhcmRSaWdodERhdGEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVNYXBNb2RhbCA9IChmbGFnKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNYXA6IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01hcDogZmFsc2V9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNYXA6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhvdGVsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0ICB7IGN1cnJlbmN5LCBwcmljZUZyb20sIHByaWNlVG8gfSAgPSBob3RlbC5wcmljZVJhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHA4IHBiMCByZWxhdGl2ZSB3ZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iNCBmbGV4IGZsZXhEQ29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjQgbXI4XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTQgbTAgbXI4IGZ3OSB0ZXh0LWNhcGl0YWxpemVcIj57aG90ZWwuZGlzcGxheU5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDhcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpYmxvY2sgdG9vbHRpcENvbW1vbiByZWxhdGl2ZSB6MiBtcjhcIj5cbiAgICAgICAgICAgICAgICAgIDxUb29sVGlwXG4gICAgICAgICAgICAgICAgICAgIHRvb2xUaXBUZXh0PXtgJHtob3RlbC5zdGFyUmF0aW5nfSBTdGFyIEhvdGVsYH1cbiAgICAgICAgICAgICAgICAgICAgYm94U3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UmF0aW5nU3RhciByYXRpbmc9e2hvdGVsLnN0YXJSYXRpbmd9IGlzRW1wdHlTdGFyc0hpZGRlbj17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlibG9ja1wiPjxPdmVyQWxsUmF0aW5nIG92ZXJhbGxSYXRpbmc9e2hvdGVsLnVzZXJSYXRpbmd9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibTAgbWI0IGYxMCBwZmM0IGR5bmFtaWNUZXh0SW5oZXJpdFwiPlxuICAgICAgICAgICAgICB7aG90ZWwuYWRkcmVzcyAmJiBob3RlbC5hZGRyZXNzLmJyaWVmfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtcbiAgICAgICAgICAoaG90ZWwuZmFjaWxpdGllcyAmJiBob3RlbC5mYWNpbGl0aWVzLmxlbmd0aCkgfHwgaG90ZWwudG9wUmF0ZWRMdXh1cnkgfHwgaG90ZWwudG9wUmF0ZWRCdWRnZXQgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI0XCI+XG4gICAgICAgICAgICA8SG90ZWxJbmNsdXNpb24gbHV4dXJ5PXtob3RlbC50b3BSYXRlZEx1eHVyeX0gYnVkZ2V0PXtob3RlbC50b3BSYXRlZEJ1ZGdldH0gZmFjaWxpdGllcz17aG90ZWwuZmFjaWxpdGllc30vPlxuICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI0XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEwIHBmYzRcIj5QcmljZSBSYW5nZSBwZXIgTmlnaHQ8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZ3YiBtMCBzZmMzXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByaWNlRnJvbSAmJiBwcmljZVRvID9cbiAgICAgICAgICAgICAgICBgJHtjdXJyZW5jeVRvU3ltYm9sKGN1cnJlbmN5KX0gJHtudW1iZXJXaXRoQ29tbWFzKE1hdGgucm91bmQocHJpY2VGcm9tKSl9IC1cbiAgICAgICAgICAgICAgJHtjdXJyZW5jeVRvU3ltYm9sKGN1cnJlbmN5KX0gJHtudW1iZXJXaXRoQ29tbWFzKE1hdGgucm91bmQocHJpY2VUbykpfWAgOlxuICAgICAgICAgICAgICAgIHByaWNlRnJvbSA/XG4gICAgICAgICAgICAgICAgICBgQWJvdmUgJHtjdXJyZW5jeVRvU3ltYm9sKGN1cnJlbmN5KX0gJHtudW1iZXJXaXRoQ29tbWFzKE1hdGgucm91bmQocHJpY2VGcm9tKSl9YCA6XG4gICAgICAgICAgICAgICAgICBgQmVsb3cgJHtjdXJyZW5jeVRvU3ltYm9sKGN1cnJlbmN5KX0gJHtudW1iZXJXaXRoQ29tbWFzKE1hdGgucm91bmQocHJpY2VUbykpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qeyovfVxuICAgICAgICAgICAgey8qaG90ZWwubmVhcmJ5TGFuZG1hcmtzICYmIGhvdGVsLm5lYXJieUxhbmRtYXJrcy5sZW5ndGggPyovfVxuICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJmMTAgbTAgbWI0IHBmYzNcIj48c3BhbiBjbGFzc05hbWU9XCJmdzcgcHI1XCI+TmVhcmJ5IExhbmRtYXJrczo8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgey8qe2hvdGVsLm5lYXJieUxhbmRtYXJrcy5tYXAoKGl0ZW0sIGkpID0+IDxzcGFuIGtleT17aX0+e2l0ZW19PC9zcGFuPil9Ki99XG4gICAgICAgICAgICAgIHsvKjwvcD4gOiBudWxsKi99XG4gICAgICAgICAgey8qfSovfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhvdGVsLnByb3hpbWl0eSAmJiBob3RlbC5wcm94aW1pdHkuZGlzdGFuY2UgJiYgaG90ZWwucHJveGltaXR5LnVuaXQgJiYgaG90ZWwucHJveGltaXR5LmZyb20gP1xuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTAgbTAgcGZjM1wiPlxuICAgICAgICAgICAgICAgIHtgJHtob3RlbC5wcm94aW1pdHkuZGlzdGFuY2V9ICR7aG90ZWwucHJveGltaXR5LnVuaXR9IGZyb20gJHtob3RlbC5wcm94aW1pdHkuZnJvbX1gfVxuICAgICAgICAgICAgICA8L3A+IDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcjAgdDBcIj5cbiAgICAgICAgICA8UmVjb21tZW5kZWQgdHRSZWNvbW1lbmRlZD17aG90ZWwudHRSZWNvbWVuZGVkfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib3RlbENhcmRSaWdodERhdGEucHJvcFR5cGVzID0ge1xuICBob3RlbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3RlbENhcmRSaWdodERhdGE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgR0luY2x1c2lvbkRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICcxNnB4Jyxcbn0pO1xuXG5jb25zdCBHSW5jbHVzaW9uSGlnaGxpZ2h0VWwgPSBnbGFtb3JvdXMudWwoe1xuICAnJiBsaSc6IHtcbiAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgIHBhZGRpbmc6ICcwIDZweCcsXG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgICcmIC5oaWdobGlnaHRJY29uJzoge1xuICAgICAgd2lkdGg6ICcxNHB4JyxcbiAgICAgIGhlaWdodDogJzE0cHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBtYXJnaW5SaWdodDogJzhweCcsXG4gICAgfVxuICB9LFxuICAnJiAubHV4dXJ5Jzoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZTRhNTAwJyxcbiAgICBjb2xvcjogJyNjNDhlMDAnLFxuICB9LFxuICAnJiAuYnVkZ2V0Jzoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDA5Njg4JyxcbiAgICBjb2xvcjogJyMwMDk2ODgnLFxuICB9XG59KTtcblxuY29uc3QgR0luY2x1c2lvbnNVbCA9IGdsYW1vcm91cy51bCh7XG4gICcmIGxpJzoge1xuICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdJbmNsdXNpb25JY29uU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxNnB4JyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgaGVpZ2h0OiAnMTZweCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAnJiBzdmcnOntcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0sXG59KTtcblxuY29uc3QgSW5jbHVzaW9uSGlnaGxpZ2h0ID0gKHsgbHV4dXJ5LCBidWRnZXQgfSkgPT4gKFxuICA8R0luY2x1c2lvbkhpZ2hsaWdodFVsIGNsYXNzTmFtZT1cImJsb2NrIGZsZWZ0XCI+XG4gICAge1xuICAgICAgbHV4dXJ5ID9cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgbHV4dXJ5IHJhZGl1czIwIGYxMFwiPlxuICAgICAgICAgIFRvcCBSYXRlZCBMdXh1cnkgUHJvcGVydHlcbiAgICAgICAgPC9saT4gOiBidWRnZXQgP1xuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBidWRnZXQgcmFkaXVzMjAgZjEwXCI+XG4gICAgICAgICAgVG9wIFJhdGVkIEJ1ZGdldCBQcm9wZXJ0eVxuICAgICAgICA8L2xpPiA6IG51bGxcbiAgICB9XG4gIDwvR0luY2x1c2lvbkhpZ2hsaWdodFVsPlxuKTtcblxuSW5jbHVzaW9uSGlnaGxpZ2h0LnByb3BUeXBlcyA9IHtcbiAgbHV4dXJ5OiBQcm9wVHlwZXMuYm9vbCxcbiAgYnVkZ2V0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuY29uc3QgSW5jbHVzaW9ucyA9ICh7IGZhY2lsaXRpZXMgfSkgPT4gKFxuICA8R0luY2x1c2lvbnNVbCBjbGFzc05hbWU9XCJmbGV4IGZsZXhXcmFwXCI+XG4gICAge1xuICAgICAgZmFjaWxpdGllcy5tYXAoKGZhY2lsaXR5LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBmYWNpbGl0eS5rZXkgJiYgSWNvbnNbY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZhY2lsaXR5LmtleS5yZXBsYWNlKC9bXFxzLV9dL2csICcnKSldXG4gICAgICAgICAgfHwgSWNvbnMuRGVmYXVsdEljb247XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgPEdJbmNsdXNpb25JY29uU3BhbiBjbGFzc05hbWU9XCJtcjVcIj5cbiAgICAgICAgICAgICAgPEljb25Db21wb25lbnQgLz5cbiAgICAgICAgICAgIDwvR0luY2x1c2lvbkljb25TcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj57ZmFjaWxpdHkudGV4dH08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO31cbiAgICAgIClcbiAgICB9XG4gIDwvR0luY2x1c2lvbnNVbD5cbik7XG5cbkluY2x1c2lvbnMucHJvcFR5cGVzID0ge1xuICBmYWNpbGl0aWVzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbkluY2x1c2lvbnMuZGVmYXVsdFByb3BzID0ge1xuICBmYWNpbGl0aWVzOiBbXVxufTtcblxuY29uc3QgSG90ZWxJbmNsdXNpb24gPSAoeyBsdXh1cnksIGJ1ZGdldCwgZmFjaWxpdGllcyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEdJbmNsdXNpb25EaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3doIG1iNVwiPlxuICAgICAgPEluY2x1c2lvbkhpZ2hsaWdodCBsdXh1cnk9e2x1eHVyeX0gYnVkZ2V0PXtidWRnZXR9IC8+XG4gICAgPC9HSW5jbHVzaW9uRGl2PlxuICAgIDxJbmNsdXNpb25zIGZhY2lsaXRpZXM9e2ZhY2lsaXRpZXN9IC8+XG4gIDwvZGl2PlxuKTtcblxuSG90ZWxJbmNsdXNpb24ucHJvcFR5cGVzID0ge1xuICBsdXh1cnk6IFByb3BUeXBlcy5ib29sLFxuICBidWRnZXQ6IFByb3BUeXBlcy5ib29sLFxuICBmYWNpbGl0aWVzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbkhvdGVsSW5jbHVzaW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbHV4dXJ5OiBmYWxzZSxcbiAgYnVkZ2V0OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxJbmNsdXNpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IExvYWRlckNhcmQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvbG9hZGVycy9Mb2FkZXJDYXJkJztcbmltcG9ydCBTbGlkZXJXaXRoVGl0bGUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvU2xpZGVyV2l0aFRpdGxlJztcblxuY2xhc3MgUGxhY2VzVG9WaXNpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2FkZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGV4dGVybmFsQ3NzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmZXRjaFBsYWNlc1RvVmlzaXREYXRhOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YToge30sXG4gICAgY29uZmlnOiB7XG4gICAgICB2YXJpYW50OiAnRlVMTCcsXG4gICAgICBvcmRlcjogOFxuICAgIH0sXG4gICAgbG9hZGVkOiBmYWxzZSxcbiAgICBleHRlcm5hbENzczogJycsXG4gICAgdHJhY2tTZWdtZW50RXZlbnQ6ICgpID0+IHt9LFxuICAgIGZldGNoUGxhY2VzVG9WaXNpdERhdGE6ICgpID0+IHt9XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgLy8gICB0aGlzLmZldGNoUGxhY2VzVG9WaXNpdERhdGEodGhpcy5wcm9wcyk7XG4gIC8vIH1cblxuICAvLyBmZXRjaFBsYWNlc1RvVmlzaXREYXRhID0gKHByb3BzKSA9PiB7XG4gIC8vICAgY29uc3QgeyBjb25maWcsIGZldGNoUGxhY2VzVG9WaXNpdERhdGEgfSA9IHByb3BzO1xuICAvLyAgIGlmIChjb25maWcgJiYgY29uZmlnLmNzcikge1xuICAvLyAgICAgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YSh7XG4gIC8vICAgICAgIGRlc3RpbmF0aW9uOiBsYXlvdXQubWV0YUluZm8uZGVzdGluYXRpb24sXG4gIC8vICAgICAgIGxvb2t1cFBhcmVudDogY29uZmlnLmxvb2t1cFBhcmVudFxuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIHRyYWNrU2VnbWVudCA9IChjdGEsIGNhcmRJZCwgbWlzY1R5cGUxLCBtaXNjSWQxKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICBjdGEsXG4gICAgICBvYmplY3Q6IGNhcmRJZCA/IGBQbGFjZXMgdG8gdmlzaXQvJHtjYXJkSWR9YCA6ICdQbGFjZXMgdG8gdmlzaXQnLFxuICAgICAgbWlzY1R5cGUxLFxuICAgICAgbWlzY0lkMVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGNvbmZpZywgbG9hZGVkLCBleHRlcm5hbENzcywgZXJyb3JzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGxvYWRlZCAmJiAoIWRhdGEuZGVzdGluYXRpb25TY2hlbWVzIHx8ICFkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcy5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2V4dGVybmFsQ3NzfT5cbiAgICAgICAge1xuICAgICAgICAgICFsb2FkZWRcbiAgICAgICAgICAgID8gPExvYWRlckNhcmQgLz5cbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICBkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcyAmJiBkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IDxTbGlkZXJXaXRoVGl0bGUgZGF0YT17ZGF0YX0gdHJhY2tTZWdtZW50PXt0aGlzLnRyYWNrU2VnbWVudH0gY29uZmlnPXtjb25maWd9IG92ZXJmbG93PSd1bnNldCcvPlxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlc1RvVmlzaXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBmZXRjaFBsYWNlc1RvVmlzaXREYXRhIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IHsgcmVzdWx0cyB9IGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgUGxhY2VzVG9WaXNpdCBmcm9tICcuL1BsYWNlc1RvVmlzaXQnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgZGF0YTogcmVzdWx0cyhzdGF0ZSksXG4gICAgbG9hZGVkOiBzdGF0ZS5wbGFjZXNUb1Zpc2l0LmxvYWRlZCxcbiAgICBlcnJvcnM6IHN0YXRlLnBsYWNlc1RvVmlzaXQuZXJyb3JzXG4gIH0pLFxuICB7XG4gICAgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YVxuICB9XG4pKFBsYWNlc1RvVmlzaXQpKTtcblxuLyoqXG4gKiBQbGFjZXNUb1Zpc2l0IFNlY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIGFjdGlvbnM6IHtcbiAgICBmZXRjaFBsYWNlc1RvVmlzaXREYXRhXG4gIH0sXG4gIGRlZmF1bHRBY3Rpb246IGZldGNoUGxhY2VzVG9WaXNpdERhdGFcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4vT3ZlcnZpZXcnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nJztcblxuY29uc3QgU2hvd01vcmVDb250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWFyZ2luVG9wOiAnLThweCcsXG59KTtcblxuY29uc3QgR3VpZGUgPSAoeyBndWlkZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmN3IHAxNVwiPlxuICAgICAgPEhlYWRpbmcgey4uLmd1aWRlfSB0eXBlPVwibWFpbi1oZWFkaW5nXCIvPlxuICAgICAgPE92ZXJ2aWV3IHsuLi5ndWlkZX0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR3VpZGUucHJvcFR5cGVzID0ge1xuICBndWlkZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkd1aWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ3VpZGU6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHdWlkZTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHS25vd01vcmVEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0U4RjRGRCcsXG59KTtcblxuY29uc3QgS25vd01vcmVDYXJkID0gKHsgbGluayB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEdLbm93TW9yZURpdiBjbGFzc05hbWU9XCJ3ZnVsbCB0ZXh0LWNlbnRlciByYWRpdXMyIHAxNVwiPlxuICAgICAgPExpbmsgdG89e2AvJHtsaW5rfWB9IGNsYXNzTmFtZT1cImYxNiBmdzcgZmxleEZ1bGwgbTAgc2ZjMVwiPkJvb2sgYSBjb21wbGV0ZSBob2xpZGF5IHBhY2thZ2UuIEtub3cgTW9yZTwvTGluaz5cbiAgICA8L0dLbm93TW9yZURpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBLbm93TW9yZUNhcmQ7XG5cbktub3dNb3JlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvb2tpbmctaWNvblwiOiBcIl8zQ0sxUFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuaW1wb3J0ICcuL05vUGFja2FnZUZvdW5kLnNjc3MnO1xuaW1wb3J0IHtcbiAgICBVbmlxdWVyZXF1aXJlbWVudHNcbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBOb1BhY2thZ2VGb3VuZCA9ICh7IHRvdGFsUGFja2FnZXMsIHN0YXJ0aW5nUHJpY2UgfSkgPT4ge1xuICBjb25zdCBjdGFUZXh0ID0gJ0JVSUxEIFlPVVIgT1dOIFBBQ0tBR0UnO1xuXG4gIHJldHVybiAoIXRvdGFsUGFja2FnZXMgP1xuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG04XCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicm93IHJvdy0gZnczXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KHRvdGFsUGFja2FnZXMgPiAwKSA/ICdpbmxpbmUgZjEwIHBmYzQgbWwzJyA6ICdoaWRlJ30+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsodG90YWxQYWNrYWdlcyA8PSAwKSA/ICdmMTYgYmxvY2sgdGV4dC1jZW50ZXIgcHQ0OCBwYjI0IGZ3NyBwZmM0JyA6ICdoaWRlJ30+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9va2luZy1pY29uXCI+PFVuaXF1ZXJlcXVpcmVtZW50cyAvPjwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTggcGZjM1wiPllvdXIgUmVxdWlyZW1lbnRzIGFyZSB1bmlxdWUhIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTQgcGZjMSBtYjhcIj5PdXIgZXhwZXJ0cyB3b3VsZCBsb3ZlIHRvIGNyZWF0ZSBhIHBhY2thZ2UganVzdCBmb3IgeW91LjwvcD5cbiAgICAgICAgICA8Rm9ybU9uZUNUQT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmlcIj48ZGl2IGNsYXNzTmFtZT1cIndhdmVcIiAvPntjdGFUZXh0fTwvZGl2PlxuICAgICAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMz5cbiAgICA8L2Rpdj4gOiBudWxsXG4gICk7XG59O1xuXG5Ob1BhY2thZ2VGb3VuZC5wcm9wVHlwZXMgPSB7XG4gIHRvdGFsUGFja2FnZXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3RhcnRpbmdQcmljZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vUGFja2FnZUZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBTaG93TW9yZSBmcm9tICcuL1Nob3dNb3JlJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSA9IChvdmVydmlld01vcmVUZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG92ZXJ2aWV3TW9yZVRleHQucmVwbGFjZSgvPGJyIFxcLz58PFxcL2JyPi9nLCAnJykucmVwbGFjZSgnPC9zcGFuPjwvcD5cXHJcXG4nLCAnJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBvdmVydmlld01vcmVUZXh0O1xuICB9XG59O1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBvdmVydmlld0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgZm9vdGVyRGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLnNwbGl0KCdcXHJcXG4nKS5maWx0ZXIocCA9PiBwLmxlbmd0aCkgfHwgW107XG5cbiAgICBpZiAoIWRlc2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmb290ZXJEZXNjID0gZm9vdGVyRGVzY3JpcHRpb24gPyBgPGJyPiR7Zm9vdGVyRGVzY3JpcHRpb259YCA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG93TW9yZVxuICAgICAgICB3cmFwVGV4dD17cGFyc2VyLnBhcnNlKGRlc2NbMF0pfVxuICAgICAgICBtb3JlVGV4dD17cGFyc2VyLnBhcnNlKG92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlKGRlc2Muc2xpY2UoMSkuam9pbignXFxuJykuY29uY2F0KGZvb3RlckRlc2MpKSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHJvdy1td1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbW9yZS1ib3hcIj5cbiAgICAgICAgICB7dGhpcy5vdmVydmlld0NvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk92ZXJ2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9vdGVyRGVzY3JpcHRpb246ICcnLFxuICBkZXNjcmlwdGlvbjogJydcbn07XG5cbk92ZXJ2aWV3LnByb3BUeXBlcyA9IHtcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvb3RlckRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUVFJlY29tbWVuZGVkIGZyb20gJ21vZHVsZXMvc2hhcmVkL1RUUmVjb21tZW5kZWQnO1xuaW1wb3J0IFRvb2xUaXAgZnJvbSAnLi9Ub29sVGlwJztcblxuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHUmVjb21tZW5kZWREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWluV2lkdGg6ICczMnB4JyxcbiAgbWF4V2lkdGg6ICczMnB4JyxcbiAgaGVpZ2h0OiAnMzJweCcsXG4gICcmIC5yZWNvbWVuZGVkSWNvbic6IHtcbiAgICB3aWR0aDogJzMycHgnLFxuICAgIGhlaWdodDogJzMycHgnLFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBSZWNvbW1lbmRlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX2hhbmRsZU1vdXNlT3ZlciA9IHRoaXMuX2hhbmRsZU1vdXNlT3Zlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZU1vdXNlT3V0ID0gdGhpcy5faGFuZGxlTW91c2VPdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb3VzZU92ZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIF9oYW5kbGVNb3VzZU92ZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNNb3VzZU92ZXI6IHRydWUgfSk7XG4gIH1cbiAgX2hhbmRsZU1vdXNlT3V0KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTW91c2VPdmVyOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR0UmVjb21tZW5kZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuICh0dFJlY29tbWVuZGVkID9cbiAgICAgIDxHUmVjb21tZW5kZWREaXYgb25Nb3VzZU92ZXI9e3RoaXMuX2hhbmRsZU1vdXNlT3Zlcn0gb25Nb3VzZU91dD17dGhpcy5faGFuZGxlTW91c2VPdXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBDb21tb24gejJcIj5cbiAgICAgICAgICA8VG9vbFRpcFxuICAgICAgICAgICAgdG9vbFRpcFRleHQ9XCJSZWNvbW1lbmRlZCBieSBUcmF2ZWxUcmlhbmdsZVwiXG4gICAgICAgICAgICBib3hTdHlsZT17eyByaWdodDogMCwgbGVmdDogJ2F1dG8nLCB0cmFuc2Zvcm06ICdub25lJyB9fVxuICAgICAgICAgICAgYXJyb3dTdHlsZT17eyByaWdodDogJzVweCcsIGxlZnQ6ICdhdXRvJywgdHJhbnNmb3JtOiAnbm9uZScgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21lbmRlZEljb24gcmVsYXRpdmUgY3Vyc29yUFwiPlxuICAgICAgICAgICAgPFRUUmVjb21tZW5kZWQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dSZWNvbW1lbmRlZERpdj4gOiBudWxsXG4gICAgKTtcbiAgfVxufVxuXG5cblJlY29tbWVuZGVkLnByb3BUeXBlcyA9IHtcbiAgdHRSZWNvbW1lbmRlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGVkO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgVFRSZWNvbW1lbmRlZCBmcm9tIFwiLi9UVFJlY29tbWVuZGVkXCI7XG5pbXBvcnQgeyBDbG9zZURhcmsgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IEdDbG9zZUJ1dHRvbiA9IGdsYW1vcm91cy5idXR0b24oe1xuICB3aWR0aDogJzI0cHgnLFxuICBoZWlnaHQ6ICcyNHB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnOHB4JyxcbiAgICBoZWlnaHQ6ICc4cHgnLFxuICB9XG59KTtcblxuY29uc3QgUmVjb21tZW5kZWRCYW5uZXIgPSAoeyBvbkJhbm5lckNsb3NlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IHAxNSBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgIDxUVFJlY29tbWVuZGVkIC8+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjEyIG0wIGZsZXhGdWxsIG1sOCBtcjhcIj5SZWNvbW1lbmRlZCBieSBUcmF2ZWxUcmlhbmdsZTwvcD5cbiAgICA8R0Nsb3NlQnV0dG9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiXG4gICAgICBvbkNsaWNrPXtvbkJhbm5lckNsb3NlfT48Q2xvc2VEYXJrIC8+XG4gICAgPC9HQ2xvc2VCdXR0b24+XG4gIDwvZGl2PlxuKTtcblxuUmVjb21tZW5kZWRCYW5uZXIucHJvcFR5cGVzID0ge1xuICBvbkJhbm5lckNsb3NlIDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGVkQmFubmVyO1xuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0ICcuL1NvcnRBbmRGaWx0ZXIuc2Nzcyc7XG5cbmNvbnN0IEZpbHRlcnMgPSAoeyBzZWxlY3RlZEZpbHRlcnMgfSkgPT4ge1xuICBjb25zdCBjYWxjdWxhdGVGaWx0ZXJzQ291bnQgPSAoZmlsdGVycykgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IGZpbHRlcnM7XG4gICAgbGV0IF9zZWxlY3RlZEZpbHRlckNvdW50ID0gMDtcbiAgICBPYmplY3Qua2V5cyhzZWxlY3RlZEZpbHRlcnMpLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzZWxlY3RlZEZpbHRlcnNbZmlsdGVyXSkubWFwKChmaWx0ZXJWYWx1ZSkgPT4ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJzW2ZpbHRlcl1bZmlsdGVyVmFsdWVdKSB7XG4gICAgICAgICAgX3NlbGVjdGVkRmlsdGVyQ291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIF9zZWxlY3RlZEZpbHRlckNvdW50O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwbDQ4IGZpbHRlci1ieS1saXN0aW5nLXZpZXdcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29ydC1ieS1pY29uXCI+PEZpbHRlckljb24gLz48L3NwYW4+XG4gICAgICAgIDxwPkZpbHRlcnM8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17YGYxMCBuby1maWx0ZXItc2VsZWN0ZWRgfT57Y2FsY3VsYXRlRmlsdGVyc0NvdW50KHNlbGVjdGVkRmlsdGVycyl9IHNlbGVjdGVkPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXJzLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWRGaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5GaWx0ZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VsZWN0ZWRGaWx0ZXJzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVycztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBEb3duQXJyb3csIENsb3NlRGFyaywgRmlsdGVySWNvbldoaXRlIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBHRmlsdGVyQnV0dG9uID0gZ2xhbW9yb3VzLmJ1dHRvbih7XG4gIHdpZHRoOiAnNTZweCcsXG4gIGhlaWdodDogJzU2cHgnLFxuICBib3hTaGFkb3c6ICcwIDRweCAxMnB4ICM5OTknLFxuICAnJiBzdmcnOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcyNXB4JyxcbiAgICBoZWlnaHQ6ICcyNXB4JyxcbiAgfVxufSk7XG5cbmNvbnN0IEdCdXR0b24gPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgd2lkdGg6ICcyNHB4JyxcbiAgaGVpZ2h0OiAnMjRweCcsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzE2cHgnLFxuICAgIGhlaWdodDogJzE2cHgnLFxuICB9XG59KTtcblxuY29uc3QgRmlsdGVyQ29tcG9uZW50ID0gKHsgbmFtZSwgdHlwZSwgY2xhc3NOYW1lLCBpZCwgZGlzYWJsZWQsIGlucHV0LCBjaGVja2VkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXQgey4uLmlucHV0fSBuYW1lPXtuYW1lfSB0eXBlPXt0eXBlfSBkaXNhYmxlZD17ZGlzYWJsZWR9IGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IC8+XG4gICk7XG59O1xuXG5GaWx0ZXJDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGNvbnN0IEZpbHRlcnNWaWV3ID0gKHsgaGFuZGxlU3VibWl0LCBmaWx0ZXJMaXN0LCBmaWx0ZXJUb2dnbGUsIGluaXRpYWxWYWx1ZXMsIHJlc2V0RmlsdGVycyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEdGaWx0ZXJCdXR0b24gY2xhc3NOYW1lPVwib3ZlcmZsb3doIGhpZGUgcGJjMSByYWRpdXMxMDAgZml4ZWQgejE0IHIxNSBiMTUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+XG4gICAgICA8RmlsdGVySWNvbldoaXRlIC8+XG4gICAgPC9HRmlsdGVyQnV0dG9uPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcDAgejE1IGZpeGVkIHQwIGwwIG92ZXJmbG93YSBwYjY0IGIwIHIwIHNiYzUgY2l0eWJsb2NrZmlsdGVyQ29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjdyBmaWx0ZXJzLW9wdGlvbnMtY29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjdyBwMTUgZmxleCBhbGlnbkNlbnRlciBmaWx0ZXJzLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTIgcGwwXCI+XG4gICAgICAgICAgICA8R0J1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1maWx0ZXJzIGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtmaWx0ZXJUb2dnbGV9PjxDbG9zZURhcmsgLz48L0dCdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwbDhcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRlci10aXRsZVwiPkZpbHRlcnM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBwbDAgcHIwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlc2V0LWJ1dHRvbiBmcmlnaHRcIiBvbkNsaWNrPXtyZXNldEZpbHRlcnN9PlJFU0VUPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQ4IHNiYzVcIiAvPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmaWx0ZXItcm93LWNvbnRhaW5lciBibG9ja1wiPlxuICAgICAgICAgIHtmaWx0ZXJMaXN0ICYmIGZpbHRlckxpc3QubGVuZ3RoICYmIGZpbHRlckxpc3RcbiAgICAgICAgICAuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgICAgLm1hcCgoZmlsdGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdF9maWx0ZXJzcm93IHAxNSBwYjAgc2JjdyBmaWx0ZXItcm93XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXN0aW5hdGlvbi10eXBlLWJ0biBmdzcgbWIxNSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIHtmaWx0ZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgYWJzb2x1dGUtY2VudGVyLXZcIj48RG93bkFycm93IGNsYXNzTmFtZT1cInNtb290aFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmbGV4IHNwYWNlQmV0d2VlbiBmbGV4V3JhcCBkZXN0aW5hdGlvbi10eXBlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7ZmlsdGVyLm9wdGlvbnMubWFwKChmaWx0ZXJPcHRpb24sIGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17YCR7ZmlsdGVyLnBhcmFtTmFtZX1bJHtmaWx0ZXJPcHRpb24udmFsdWV9XWB9XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWx0ZXJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake2ZpbHRlci5wYXJhbU5hbWV9WyR7ZmlsdGVyT3B0aW9uLnZhbHVlfV1gfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpbHRlck9wdGlvbi5lbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbHRlck9wdGlvbi5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2Ake2ZpbHRlci5wYXJhbU5hbWV9WyR7ZmlsdGVyT3B0aW9uLnZhbHVlfV1gfT57ZmlsdGVyT3B0aW9uLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB0OCBtdDE1IHNiYzVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+KSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBwOCBzYmN3IGIwIGwwIHIwIGJzNFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PkFwcGx5IEZpbHRlcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5GaWx0ZXJzVmlldy5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVzZXRGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZmlsdGVyVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZmlsdGVyTGlzdDogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5cbkZpbHRlcnNWaWV3LmRlZmF1bHRQcm9wID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ2hscEZpbHRlcnMnLFxuICBpbml0aWFsVmFsdWVzOiB7IGVuYWJsZWQ6IHRydWUgfVxufSkoRmlsdGVyc1ZpZXcpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuXG5pbXBvcnQgU29ydEJ5IGZyb20gJy4vU29ydEJ5JztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vRmlsdGVycyc7XG5pbXBvcnQgRmlsdGVyc1ZpZXdzIGZyb20gJy4vRmlsdGVyc1ZpZXcnO1xuaW1wb3J0ICcuL1NvcnRBbmRGaWx0ZXIuc2Nzcyc7XG5cbmNsYXNzIFNvcnRBbmRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZpbHRlclRvZ2dsZSA9IHRoaXMuZmlsdGVyVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dGaWx0ZXJQb3B1cDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgZmlsdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RmlsdGVyUG9wdXAgOiAhdGhpcy5zdGF0ZS5zaG93RmlsdGVyUG9wdXAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmaWx0ZXJMaXN0LCBzb3J0QnksIHJlc2V0RmlsdGVycywgaW5pdGlhbFZhbHVlcywgYXBwbHlTb3J0LCBsb2NhdGlvbiwgYXBwbHlGaWx0ZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzb3J0LWZpbHRlci1jb25cIj5cbiAgICAgIDxTdGlja3kgZW5hYmxlZD17dHJ1ZX0gdG9wPXswfSBpbm5lclo9ezR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHAwIHNiY3dcIj5cbiAgICAgICAgICA8U29ydEJ5XG4gICAgICAgICAgICBvcHRpb25zPXtzb3J0Qnkub3B0aW9uc31cbiAgICAgICAgICAgIHNlbGVjdGVkPXtzb3J0Qnkub3B0aW9uc1swXX1cbiAgICAgICAgICAgIGFwcGx5U29ydD17YXBwbHlTb3J0fVxuICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHAwIHNiY3dcIiBvbkNsaWNrPXt0aGlzLmZpbHRlclRvZ2dsZX0+XG4gICAgICAgICAgICA8RmlsdGVycyBzZWxlY3RlZEZpbHRlcnM9e2luaXRpYWxWYWx1ZXN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0aWNreT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dGaWx0ZXJQb3B1cCA/ICcnIDogJ2hpZGUnfT5cbiAgICAgICAgPEZpbHRlcnNWaWV3cyBmaWx0ZXJUb2dnbGU9e3RoaXMuZmlsdGVyVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0PXtmaWx0ZXJMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3ZhbHVlcyA9PiBhcHBseUZpbHRlcnModmFsdWVzKX1cbiAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgICByZXNldEZpbHRlcnM9e3Jlc2V0RmlsdGVyc30vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5Tb3J0QW5kRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZmlsdGVyTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICBpbml0aWFsVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGFwcGx5U29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYXBwbHlGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzb3J0Qnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcmVzZXRGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuU29ydEFuZEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbHRlckxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRBbmRGaWx0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzb3J0LWZpbHRlci1jb25cIjogXCJfOTJkSXRcIixcblx0XCJhY3RpdmVcIjogXCJfMk8yeWZcIixcblx0XCJzdGlja3ktaW5uZXItd3JhcHBlclwiOiBcIl8yMUlCZVwiLFxuXHRcInNvcnQtYnktbGlzdGluZ1wiOiBcIl8xSEQxdVwiLFxuXHRcInNvcnQtYnktbGlzdGluZy12aWV3XCI6IFwiXzJ1dTN1XCIsXG5cdFwic29ydC1ieS1pY29uXCI6IFwiXzFJeEt5XCIsXG5cdFwiZmlsdGVyLWJ5LWxpc3Rpbmctdmlld1wiOiBcIl8zdEtNalwiLFxuXHRcIm5vLWZpbHRlci1zZWxlY3RlZFwiOiBcIl8zbXZnblwiLFxuXHRcInNlbGVjdGVkLWZpbHRlcnNcIjogXCJfMTJ6MUdcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgU29ydEljb24gYXMgU29ydEJ5SWNvblxufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgJy4vU29ydEFuZEZpbHRlci5zY3NzJztcblxuY2xhc3MgRmlsdGVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkT3B0aW9uOiAnJ1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0ge1xuICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMuYXBwbHlTb3J0KHsgdmFsdWVzOiBzZWxlY3RlZCwgbG9jYXRpb246IHRoaXMucHJvcHMubG9jYXRpb24gfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkT3B0aW9uOiBlLnRhcmdldC52YWx1ZX0pO1xuICB9O1xuXG4gIHNvcnRPcHRpb25zID0gKG9wdGlvbnMpID0+IChcbiAgICBvcHRpb25zLm1hcChvcHQgPT4gKFxuICAgICAgPG9wdGlvbiBrZXk9e29wdC5sYWJlbH0gdmFsdWU9e29wdC52YWx1ZX0+e29wdC5sYWJlbH08L29wdGlvbj5cbiAgICApKVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHNlbGVjdGVkLCBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSBsb2NhdGlvbjtcbiAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBxdWVyeS5zb3J0X2J5KTtcbiAgICBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uLmxlbmd0aCA/IHNlbGVjdGVkT3B0aW9uWzBdIDogc2VsZWN0ZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgc29ydC1ieS1saXN0aW5nLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsNDggcmVsYXRpdmUgc29ydC1ieS1saXN0aW5nLXZpZXcgc2Jjd1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvcnQtYnktaWNvblwiPjxTb3J0QnlJY29uIC8+PC9zcGFuPlxuICAgICAgICAgIDxwPlNvcnQgYnk8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGZjMiBmMTBcIj57c2VsZWN0ZWRPcHRpb24ubGFiZWx9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzb3J0LWJ5LWxpc3RpbmdcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgbmFtZT17c2VsZWN0ZWRPcHRpb24ubmFtZX0+XG4gICAgICAgICAge29wdGlvbnMubGVuZ3RoICYmIHRoaXMuc29ydE9wdGlvbnMob3B0aW9ucyl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuRmlsdGVycy5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFwcGx5U29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuRmlsdGVycy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IFtdLFxuICBzZWxlY3RlZDoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBfY2h1bmsgZnJvbSdsb2Rhc2gvY2h1bmsnO1xuXG5jb25zdCBSZW5kZXJMaW5rcyA9ICh7IHVybCwgbmFtZSB9KSA9PiB7XG4gIHJldHVybiAoPGEgaHJlZiA9IHt1cmx9IGNsYXNzTmFtZSA9ICdub3dyYXAgcGwxNSBwcjE1IHB0OCBwYjggc2JjNSBwZmMzIGYxNCByYWRpdXMyIGlibG9jayAgbXI4Jz5cbiAgICA8c3BhbiBjbGFzc05hbWUgPSAnaWJsb2NrIHB0NCBwYjQnPntuYW1lfTwvc3Bhbj5cbiAgPC9hPik7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUZvb3RlckxpbmtzID0gKGZvb3RlckxpbmtBcnIpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9ICdmbGV4IG1iOCc+XG4gICAgICB7XG4gICAgICAgIGZvb3RlckxpbmtBcnIubWFwKChmb290ZXJMaW5rKSA9PiB7XG4gICAgICAgICAgaWYoZm9vdGVyTGluay5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gKCA8UmVuZGVyTGlua3MgdXJsID0ge2Zvb3RlckxpbmsudXJsfSBuYW1lID0ge2Zvb3RlckxpbmsubmFtZX0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChPYmplY3QudmFsdWVzKGZvb3RlckxpbmspLm1hcCgoZm9vdGVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoPFJlbmRlckxpbmtzIHVybCA9IHtmb290ZXIubGlua30gbmFtZSA9IHtmb290ZXIubmFtZX0gLz4pOyBcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7fTtcblxuY29uc3QgZ2VuZXJhdGVGb290ZXJMaW5rU2VjdGlvbiA9IChmb290ZXJMaW5rU2VjdGlvbikgPT4ge1xuICBjb25zdCBmb290ZXJMaW5rcyA9IGZvb3RlckxpbmtTZWN0aW9uLmZvb3RlckxpbmtzID8gZm9vdGVyTGlua1NlY3Rpb24uZm9vdGVyTGlua3MgOiBmb290ZXJMaW5rU2VjdGlvbi5mb290ZXJfbGlua3M7XG4gIGNvbnN0IGdyb3VwZWRBcnIgPSBfY2h1bmsoZm9vdGVyTGlua3MsIDUpO1xuICByZXR1cm4oXG4gICAgZm9vdGVyTGlua3MgJiYgZm9vdGVyTGlua3MubGVuZ3RoID9cbiAgICAgPGRpdiBjbGFzc05hbWU9J3AxNSBzYmN3IG1iOCc+XG4gICAgICAgPGgzIGNsYXNzTmFtZT0nZjE2IGZ3OSBwZmMzIG1iMTUnPntmb290ZXJMaW5rU2VjdGlvbi5uYW1lfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdvdmVyZmxvd1hzY3JvbGwgc3dpcGVyLWZ1bGwtd2lkdGgnPlxuICAgICAgICAge1xuICAgICAgICAgICBncm91cGVkQXJyLmxlbmd0aCA/XG4gICAgICAgICAgICAgIGdyb3VwZWRBcnIubWFwKChmb290ZXJMaW5rQXJyKSA9PiBnZW5lcmF0ZUZvb3RlckxpbmtzKGZvb3RlckxpbmtBcnIpKVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgIH1cbiAgICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgOlxuICAgICBudWxsXG4gICk7XG59O1xuXG5cbmNvbnN0IEludGVyTGlua2luZyA9ICh7IGZvb3RlckxpbmtzIH0pID0+IChcbiAgPGRpdj5cbiAgICB7XG4gICAgICBmb290ZXJMaW5rcy5tYXAoKGZvb3RlckxpbmtTZWN0aW9uKSA9PiBnZW5lcmF0ZUZvb3RlckxpbmtTZWN0aW9uKGZvb3RlckxpbmtTZWN0aW9uKSlcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuSW50ZXJMaW5raW5nLnByb3BUeXBlcyA9IHtcbiAgZm9vdGVyTGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuUmVuZGVyTGlua3MucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJMaW5raW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uLWxvYWQtbW9yZS1mdWxsXCI6IFwiXzFsRk9kXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgICcuL0xvYWRNb3JlUGFja2FnZXMuc2Nzcyc7XG5cbmNvbnN0IExvYWRNb3JlUGFja2FnZXMgPSAoeyBwYWNrYWdlc1JlbWFpbmluZywgbG9hZE1vcmVQYWNrYWdlcywgY3VycmVudFBhZ2UsIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSBwYWdlTnVtYmVyID0+ICgpID0+IHtcbiAgICBsb2FkTW9yZVBhY2thZ2VzKHBhZ2VOdW1iZXIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsocGFja2FnZXNSZW1haW5pbmcgPiAwKSA/ICcnIDogJ2hpZGUnfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIxNSBtdDhcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlTG9hZE1vcmUoY3VycmVudFBhZ2UgKyAxKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWxvYWQtbW9yZS1mdWxsXCJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIExvYWQgTW9yZSAoe3BhY2thZ2VzUmVtYWluaW5nfSB7dGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxvYWRNb3JlUGFja2FnZXMucHJvcFR5cGVzID0ge1xuICBwYWNrYWdlc1JlbWFpbmluZzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBsb2FkTW9yZVBhY2thZ2VzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjdXJyZW50UGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkTW9yZVBhY2thZ2VzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHTG9hZGVyQ29udGFpbmVyRGl2LCBHTG9hZGVyQ2FyZFNwYW4gfSBmcm9tICcuLy4uL0cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsaW5lVmlzaWJsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjYXJkVmlzaWJsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaW5lVmlzaWJsZToge30sXG4gICAgY2FyZFZpc2libGU6IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNhcmRWaXNpYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8R0xvYWRlckNvbnRhaW5lckRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhGdWxsIGZsZXhEQ29sdW1uIHdmdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyTGluZSBtYjUgbXQwIHNiYzVcIiBzdHlsZT17eyB3aWR0aDogJzYwJScgfX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lIG1iMTUgbXQwIHNiYzVcIiBzdHlsZT17eyB3aWR0aDogJzcwJScgfX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJNYWluIHJhZGl1czIgZmxleEZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlck1haW5DYXJkIGZsZXhGdWxsXCI+XG4gICAgICAgICAgICA8R0xvYWRlckNhcmRTcGFuIGNsYXNzTmFtZT1cIndmdWxsIHNiYzVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IHAxNSBwYjI0IHdmdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyTGluZURhcmsgc2JjNSBtYjE1IHNiYzRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzgwJScgfX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lRGFyayBzYmM1IG1iOCBzYmM0XCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lRGFyayBzYmM1IHNiYzRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HTG9hZGVyQ29udGFpbmVyRGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgJ2FwcC90aGVtZS9Ib3RlbExpc3Rpbmcuc2Nzcyc7XG5cbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJ21vZHVsZXMvc2hhcmVkL0JyZWFkY3J1bWInO1xuaW1wb3J0IEZhcXMgZnJvbSAnbW9kdWxlcy9mYXFzJztcbmltcG9ydCBQb3B1bGFyUGFja2FnZXMgZnJvbSAnbW9kdWxlcy9wYWNrYWdlcy9wb3B1bGFyJztcbmltcG9ydCBQbGFjZXNUb1Zpc2l0IGZyb20gJ21vZHVsZXMvcGxhY2VzVG9WaXNpdCc7XG5pbXBvcnQgVHJhdmVsZXJTdG9yaWVzIGZyb20gJ21vZHVsZXMvdHJhdmVsbGVyU3RvcnknO1xuaW1wb3J0IEhvdGVsQ2FyZCBmcm9tICdtb2R1bGVzL2hscC9Ib3RlbENhcmQnO1xuaW1wb3J0IEd1aWRlIGZyb20gJ21vZHVsZXMvc2hhcmVkL0d1aWRlJztcbmltcG9ydCB7IHBhcnNlSG90ZWxVcmwsIHBhcnNlSG90ZWxGaWx0ZXJzLCBDb25zdGFudHMsIGZpbmRFbGVtZW50QnlLZXkgfSBmcm9tICdoZWxwZXJzL2hvdGVscyc7XG5pbXBvcnQgeyBnZXRDdXJyZW50TW9udGgsIGdldFRyYXZlbE1vbnRoIH0gZnJvbSAnaGVscGVycy9EYXRlVGltZSc7XG5pbXBvcnQgU29ydEFuZEZpbHRlciBmcm9tICdtb2R1bGVzL3NoYXJlZC9Tb3J0RmlsdGVycy9Tb3J0QW5kRmlsdGVyJztcbmltcG9ydCBLbm93TW9yZUNhcmQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvS25vd01vcmVDYXJkJztcbmltcG9ydCAndGhlbWUvSG90ZWxMaXN0aW5nLnNjc3MnO1xuaW1wb3J0IEhlYWRlckNvbW1vbiBmcm9tICdtb2R1bGVzL2hlYWRlci9IZWFkZXJDb21tb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJUaXRsZSB9IGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlclRpdGxlJztcbmltcG9ydCBSZWNvbW1lbmRlZEJhbm5lciBmcm9tIFwibW9kdWxlcy9zaGFyZWQvUmVjb21tZW5kZWRCYW5uZXJcIjtcbmltcG9ydCBMb2FkTW9yZVBhY2thZ2VzIGZyb20gJ21vZHVsZXMvc2hhcmVkL2xvYWRNb3JlUGFja2FnZXMnO1xuaW1wb3J0IHsgZ2V0RGVzdGluYXRpb24gfSBmcm9tICdoZWxwZXJzL3BhcnNlcnMnO1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSAnaGVscGVycy9Gb3JtRGF0YUZvcm1hdHRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ21vZHVsZXMvc2hhcmVkL0Zvb3Rlcic7XG5pbXBvcnQgTm9QYWNrYWdlRm91bmQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvTm9QYWNrYWdlRm91bmQnO1xuaW1wb3J0IEZpeGVkTWVudSBmcm9tICdjb21wb25lbnRzL0ZpeGVkTWVudS9GaXhlZE1lbnUnO1xuaW1wb3J0IHsgY3JlYXRlSGVsbWV0QmFubmVyIH0gZnJvbSBcImhlbHBlcnMvc2VvSGVscGVyc1wiO1xuaW1wb3J0IEludGVyTGlua2luZyBmcm9tICdtb2R1bGVzL3NoYXJlZC9pbnRlcmxpbmtpbmcnO1xuXG5jb25zdCBTY3JvbGxFbGVtZW50ID0gZ2xhbW9yb3VzKFN0aWNreSkoe1xuICB6SW5kZXg6IDMsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAnJi5zaG93Jzoge1xuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgfVxufSk7XG5cbmNsYXNzIEhscCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaGxwOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGJyZWFkY3J1bWJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcm91dGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcm91dGVQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhcHBseUZpbHRlcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYXBwbHlTb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2FkTW9yZUhvdGVsczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVzZXRGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwcmltYXJ5UGl2b3Q6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGFja2FnZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBpc1B1Ymxpc2hlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9vdGVyTGlua3M6IFByb3BUeXBlcy5hcnJheSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJvdXRlUGFyYW1zOiB7fSxcbiAgICBhcHBseVNvcnQ6ICgpID0+IHt9LFxuICAgIGxvYWRNb3JlSG90ZWxzOiAoKSA9PiB7fSxcbiAgICBwcmltYXJ5UGl2b3Q6IHt9LFxuICAgIHBhY2thZ2VzOiBbXVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBiYW5uZXJTdGF0ZTogdHJ1ZSxcbiAgICAgIHJlc2V0U2VsZWN0ZWRGaWx0ZXJzOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLnJlc2V0RmlsdGVycyA9IHRoaXMucmVzZXRGaWx0ZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBzZXRDb29raWUoJ2NiX2R0JywgJycpO1xuICAgIGlmIChwcmV2UHJvcHMubG9jYXRpb24gIT09IHRoaXMucHJvcHMubG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgY2l0eSwgZGVzdGluYXRpb24gfSA9IHRoaXMucHJvcHMuaGxwICYmIHRoaXMucHJvcHMuaGxwLmRhdGE7XG4gICAgICBnZXREZXN0aW5hdGlvbihjaXR5IHx8IGRlc3RpbmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5obHAuZGF0YSkge1xuICAgICAgY29uc3QgeyBjaXR5LCBkZXN0aW5hdGlvbiB9ID0gdGhpcy5wcm9wcy5obHAuZGF0YTtcbiAgICAgIGdldERlc3RpbmF0aW9uKGNpdHkgfHwgZGVzdGluYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJIb3RlbENhcmRXaXRoQmFubmVyKGhvdGVsc0xpc3QsIGxvY2F0aW9uLCBwbHBMaW5rKSB7XG4gICAgcmV0dXJuIGhvdGVsc0xpc3QubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBpZiAoKGkgKyAxKSA9PT0gMikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4XCI+PEhvdGVsQ2FyZCBpdGVtPXtpdGVtfSBsb2NhdGlvbj17bG9jYXRpb259IC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiPjxLbm93TW9yZUNhcmQgbGluaz17cGxwTGlua30gLz48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibWI4XCIga2V5PXtpfT48SG90ZWxDYXJkIGl0ZW09e2l0ZW19IGxvY2F0aW9uPXtsb2NhdGlvbn0gLz48L2Rpdj4pO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uQmFubmVyQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJhbm5lclN0YXRlOiAhdGhpcy5zdGF0ZS5iYW5uZXJTdGF0ZSB9KTtcbiAgfTtcblxuICBsb2FkTW9yZUhvdGVscyA9ICgpID0+IHtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgKyAxO1xuICAgIGNvbnN0IHsgbG9hZE1vcmVIb3RlbHMsIGxvY2F0aW9uLCBwYXJhbXMsIHJvdXRlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSBsb2NhdGlvbjtcbiAgICBjb25zdCB7IGRlc3RpbmF0aW9uLCBsYW5kbWFyaywgZmlsdGVyVHlwZSB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IHByb3BlcnR5VHlwZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV0uaG90ZWxUeXBlO1xuICAgIGNvbnN0IHsgcHJpbWFyeVBpdm90LCBzZWNvbmRhcnlQaXZvdCB9ID0gcGFyc2VIb3RlbFVybCh7XG4gICAgICBmaWx0ZXJUeXBlLFxuICAgICAgcHJvcGVydHlUeXBlLFxuICAgICAgZGVzdGluYXRpb24sXG4gICAgICBsYW5kbWFyayxcbiAgICAgIHF1ZXJ5XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFyX3JhdGluZ3MgPSBzZWNvbmRhcnlQaXZvdFtDb25zdGFudHMuU1RBUl9SQVRJTkddID9cbiAgICAgIGZpbmRFbGVtZW50QnlLZXkoJ3RpdGxlJywgc2Vjb25kYXJ5UGl2b3RbQ29uc3RhbnRzLlNUQVJfUkFUSU5HXSkudmFsdWUgOiAnJztcblxuICAgIGNvbnN0IHRoZW1lcyA9IHNlY29uZGFyeVBpdm90W0NvbnN0YW50cy5USEVNRVNdID8gc2Vjb25kYXJ5UGl2b3RbQ29uc3RhbnRzLlRIRU1FU10gOiAnJztcbiAgICBjb25zdCB0cmF2ZWxNb250aCA9IGdldFRyYXZlbE1vbnRoKHF1ZXJ5LnRyYXZlbG1vbnRoKSA/XG4gICAgICBnZXRUcmF2ZWxNb250aChxdWVyeS50cmF2ZWxtb250aCkgKyAxIDogZ2V0Q3VycmVudE1vbnRoKCkgKyAxO1xuXG4gICAgbG9hZE1vcmVIb3RlbHMoe1xuICAgICAgcXVlcnk6IHBhcnNlSG90ZWxGaWx0ZXJzKHF1ZXJ5LCAncXVlcnknKS5maWx0ZXJzLFxuICAgICAgcGFnZU51bWJlcjogdGhpcy5wYWdlTnVtYmVyLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHByb3BlcnR5X3R5cGVzOiBwcm9wZXJ0eVR5cGUsXG4gICAgICAgIGxvY2F0aW9uOiBwYXJhbXMuZGVzdGluYXRpb24sXG4gICAgICAgIG5lYXJieTogbGFuZG1hcmsgfHwgJycsXG4gICAgICAgIHN0YXJfcmF0aW5ncyxcbiAgICAgICAgdGhlbWVzLFxuICAgICAgICB0cmF2ZWxfbW9udGg6IHRyYXZlbE1vbnRoXG4gICAgICB9LFxuICAgICAgc29ydEJ5OiBxdWVyeS5zb3J0X2J5XG4gICAgfSk7XG4gIH07XG5cbiAgcmVzZXRGaWx0ZXJzKHsgbG9jYXRpb24sIHByaW1hcnlQaXZvdCwgc2Vjb25kYXJ5UGl2b3QsIHBhcmFtcywgaW5pdGlhbFByaW1hcnlQaXZvdCB9KSB7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgaWYgKGluaXRpYWxQcmltYXJ5UGl2b3QucHJvcGVydHlfdHlwZXMgIT09IENvbnN0YW50cy5ERUZBVUxUX0hPVEVMUykge1xuICAgICAgdmFsdWVzW0NvbnN0YW50cy5QUk9QRVJUWV9UWVBFXSA9IHsgW2luaXRpYWxQcmltYXJ5UGl2b3QucHJvcGVydHlfdHlwZXNdOiB0cnVlIH07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhzZWNvbmRhcnlQaXZvdCkubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzZWNUaXRsZSA9IHNlY29uZGFyeVBpdm90W09iamVjdC5rZXlzKHNlY29uZGFyeVBpdm90KVswXV07XG4gICAgICBjb25zdCBzZWNWYWx1ZSA9IE9iamVjdC5rZXlzKHNlY29uZGFyeVBpdm90KVswXSA9PT0gQ29uc3RhbnRzLlNUQVJfUkFUSU5HID9cbiAgICAgICAgZmluZEVsZW1lbnRCeUtleSgndGl0bGUnLCBzZWNUaXRsZSkudmFsdWUgOiBzZWNUaXRsZTtcbiAgICAgIHZhbHVlc1tPYmplY3Qua2V5cyhzZWNvbmRhcnlQaXZvdClbMF1dID0geyBbc2VjVmFsdWVdOiB0cnVlIH07XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVzZXRGaWx0ZXJzKHZhbHVlcyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlc2V0U2VsZWN0ZWRGaWx0ZXJzOiB2YWx1ZXMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKF9pc0VtcHR5KHRoaXMucHJvcHMuaGxwLmRhdGEpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBjaXR5LCBkZXN0aW5hdGlvbiwgYnJlYWRjcnVtYnMsIGZvb3RlclNlY3Rpb24sIGZpbHRlcnM6IGZpbHRlckxpc3QsIGhvdGVscywgZmFxcyxcbiAgICAgIHNvcnRCeUZpbHRlciwgcGxwTGluaywgbWV0YVRhZ3MsIGNhbm9uaWNhbFVybCwgYmFubmVyLCBpc1B1Ymxpc2hlZCxcbiAgICB9ID0gdGhpcy5wcm9wcy5obHAuZGF0YTtcbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbiwgcGFyYW1zLCBhcHBseVNvcnQsIGFwcGx5RmlsdGVycywgZm9vdGVyTGlua3MsXG4gICAgICBwcmltYXJ5UGl2b3Q6IGluaXRpYWxQcmltYXJ5UGl2b3QsIHJvdXRlcywgcGFja2FnZXNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcm9wZXJ0eVR5cGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdLmhvdGVsVHlwZTtcbiAgICBjb25zdCBob3RlbHNMaXN0ID0gaG90ZWxzICYmIGhvdGVscy5ob3RlbHMgfHwgW107XG4gICAgY29uc3QgUGxhY2VzVG9WaXNpdENvbnRhaW5lciA9IFBsYWNlc1RvVmlzaXQuY29udGFpbmVyO1xuICAgIGNvbnN0IEZhcXNDb250YWluZXIgPSBGYXFzLmhscENvbnRhaW5lcjtcbiAgICBjb25zdCBQb3B1bGFyUGFja2FnZXNDb250YWluZXIgPSBQb3B1bGFyUGFja2FnZXMuY29udGFpbmVyO1xuICAgIGNvbnN0IFRyYXZlbGVyU3Rvcmllc0NvbnRhaW5lciA9IFRyYXZlbGVyU3Rvcmllcy5jb250YWluZXI7XG4gICAgY29uc3QgeyBmaWx0ZXJUeXBlLCBsYW5kbWFyayB9ID0gdGhpcy5wcm9wcy5yb3V0ZVBhcmFtcztcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnk7XG4gICAgY29uc3QgeyBwcmltYXJ5UGl2b3QsIHNlY29uZGFyeVBpdm90LCBuZXdRdWVyeSB9ID0gcGFyc2VIb3RlbFVybCh7XG4gICAgICBmaWx0ZXJUeXBlLFxuICAgICAgcHJvcGVydHlUeXBlLFxuICAgICAgZGVzdGluYXRpb24sXG4gICAgICBsYW5kbWFyayxcbiAgICAgIHF1ZXJ5XG4gICAgfSk7XG4gICAgY29uc3QgeyBmaWx0ZXJzOiBzZWxlY3RlZEZpbHRlcnMgfSA9IHBhcnNlSG90ZWxGaWx0ZXJzKG5ld1F1ZXJ5KTtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5zdGF0ZS5yZXNldFNlbGVjdGVkRmlsdGVycztcbiAgICBjb25zdCB0cmF2ZWxtb250aCA9IGdldFRyYXZlbE1vbnRoKHF1ZXJ5LnRyYXZlbG1vbnRoKSA/XG4gICAgICBnZXRUcmF2ZWxNb250aChxdWVyeS50cmF2ZWxtb250aCkgKyAxIDogZ2V0Q3VycmVudE1vbnRoKCkgKyAxO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjNVwiPlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIHtjcmVhdGVIZWxtZXRCYW5uZXIobWV0YVRhZ3MsIGNhbm9uaWNhbFVybCwgbG9jYXRpb24ucGF0aG5hbWUpfVxuICAgICAgICAgIHshaXNQdWJsaXNoZWQgJiYgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiIC8+fVxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNjhjNGMxXCIgLz5cbiAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxIZWFkZXJDb21tb24gLz5cbiAgICAgICAgPEhlYWRlclRpdGxlIHRpdGxlPXtiYW5uZXIgPyBiYW5uZXIudGl0bGUgOiAnJ30gYmFja1VybD17dGhpcy5wcm9wcy5sb2NhdGlvbi5hY3Rpb24gPT09ICdQT1AnID8gJy8nIDogJyd9IC8+XG4gICAgICAgIDxTb3J0QW5kRmlsdGVyXG4gICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgIHNvcnRCeT17c29ydEJ5RmlsdGVyfVxuICAgICAgICAgIGFwcGx5U29ydD17YXBwbHlTb3J0fVxuICAgICAgICAgIGFwcGx5RmlsdGVycz17dmFsdWVzID0+IGFwcGx5RmlsdGVycyh7XG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIHByaW1hcnlQaXZvdCxcbiAgICAgICAgICAgIHNlY29uZGFyeVBpdm90LFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgZmlsdGVyTGlzdD17ZmlsdGVyTGlzdH1cbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXtmaWx0ZXJzIHx8IHNlbGVjdGVkRmlsdGVyc31cbiAgICAgICAgICByZXNldEZpbHRlcnM9eygpID0+IHRoaXMucmVzZXRGaWx0ZXJzKHtcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgcHJpbWFyeVBpdm90LFxuICAgICAgICAgICAgc2Vjb25kYXJ5UGl2b3QsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICBpbml0aWFsUHJpbWFyeVBpdm90XG4gICAgICAgICAgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmJhbm5lclN0YXRlID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQ4IG1iOFwiPlxuICAgICAgICAgICAgICA8UmVjb21tZW5kZWRCYW5uZXIgb25CYW5uZXJDbG9zZT17dGhpcy5vbkJhbm5lckNsb3NlfSAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxOb1BhY2thZ2VGb3VuZFxuICAgICAgICAgIHRvdGFsUGFja2FnZXM9e2hvdGVscy50b3RhbEVudHJpZXMgfHwgMH1cbiAgICAgICAgLz5cbiAgICAgICAge1xuICAgICAgICAgIGhvdGVsc0xpc3QgJiYgaG90ZWxzTGlzdC5sZW5ndGggP1xuICAgICAgICAgICAgSGxwLnJlbmRlckhvdGVsQ2FyZFdpdGhCYW5uZXIoaG90ZWxzTGlzdCwgbG9jYXRpb24sIHBscExpbmspXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG1iOFwiPlxuICAgICAgICAgIDxMb2FkTW9yZVBhY2thZ2VzXG4gICAgICAgICAgICBwYWNrYWdlc1JlbWFpbmluZz17aG90ZWxzLnRvdGFsRW50cmllcyAtIGhvdGVsc0xpc3QubGVuZ3RofVxuICAgICAgICAgICAgbG9hZE1vcmVQYWNrYWdlcz17dGhpcy5sb2FkTW9yZUhvdGVsc31cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtsb2NhdGlvbi5xdWVyeS5wYWdlICYmIGxvY2F0aW9uLnF1ZXJ5LnBhZ2UgfHwgMX1cbiAgICAgICAgICAgIHRpdGxlPXtgJHtwcm9wZXJ0eVR5cGV9IHJlbWFpbmluZylgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Zvb3RlckxpbmtzLmxlbmd0aCA/IDxJbnRlckxpbmtpbmcgZm9vdGVyTGlua3M9e2Zvb3RlckxpbmtzfSAvPiA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgZmFxcyAmJiBmYXFzLmZhcXMubGVuZ3RoID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYjggYnInPlxuICAgICAgICAgICAgICA8RmFxc0NvbnRhaW5lciAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBmb290ZXJTZWN0aW9uICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgICAgICAgIDxHdWlkZVxuICAgICAgICAgICAgICBndWlkZT17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBmb290ZXJTZWN0aW9uLnRpdGxlLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6IGZvb3RlclNlY3Rpb24uaGVhZGluZyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9vdGVyU2VjdGlvbi5oZWFkZXJCZWxvd1RleHRcbiAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgcGFja2FnZXMgJiYgcGFja2FnZXMubGVuZ3RoID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgICAgICAgIDxQb3B1bGFyUGFja2FnZXNDb250YWluZXIgdGl0bGU9e2Ake2NpdHkgfHwgZGVzdGluYXRpb259IFBhY2thZ2VzYH0gdHJhdmVsbW9udGg9e3RyYXZlbG1vbnRofSAvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY2l0eSB8fCBkZXN0aW5hdGlvbiA/IDxUcmF2ZWxlclN0b3JpZXNDb250YWluZXJcbiAgICAgICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBgVG9wIFRyYXZlbCBCbG9ncyBmb3IgJHtkZXN0aW5hdGlvbn1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjb25maWc9e3sgY3NyOiB0cnVlIH19XG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uPXtjaXR5IHx8IGRlc3RpbmF0aW9ufVxuICAgICAgICAgICAgICB2aWV3QWxsPVwiL2Jsb2cvdHJhdmVsb2d1ZXM/cmVmZXJlcj10cmF2ZWxvZ3VlX2hvdGVsX2xpc3RpbmdcIiAvPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgY2l0eSB8fCBkZXN0aW5hdGlvbiA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBzYmN3XCI+XG4gICAgICAgICAgICAgICAgPFBsYWNlc1RvVmlzaXRDb250YWluZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGZvb3RlclNlY3Rpb24gJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgICAgPEd1aWRlXG4gICAgICAgICAgICAgIGd1aWRlPXt7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvb3RlclNlY3Rpb24uZm9vdGVyQWJvdmVUZXh0XG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPEZpeGVkTWVudSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInA4IHB0MFwiPlxuICAgICAgICAgIDxCcmVhZGNydW1iIGJyZWFkY3J1bWJzPXticmVhZGNydW1ic30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGI4IHB0MCBwbDggcHI4XCI+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGxwO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHB1c2ggYXMgcHVzaFN0YXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTRUdNRU5UX0FETUlOX0NPTU1FTlQsIHNldENvb2tpZSB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB1cGRhdGVGcm9tT25lUHJvcHMgfSBmcm9tICdyZWR1Y2Vycy9mb3JtT25lTGVhZCc7XG5cbmNsYXNzIEZvcm1PbmVDVEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJ0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXBkYXRlRnJvbU9uZVByb3BzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHB1c2hTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZWFsczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xpY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJ0UHJvcHM6IHt9LFxuICAgIGNsaWNrSGFuZGxlcjogKCkgPT4ge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGRlYWxzOiBmYWxzZSxcbiAgICB0YWc6ICcnLFxuICAgIGJ1ZGdldDogJydcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBydFByb3BzLCB0YWcsIGRlYWxzLCBidWRnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gbWVyZ2UgYWRtaW4gY29tbWVudHMgd2l0aCB0aGUgZXhpc3Rpbmcgb25lc1xuICAgIGxldCBhZG1pbkNvbW1lbnRzID0gcnRQcm9wcy5hZG1pbkNvbW1lbnRzIHx8ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYWRtaW5Db21tZW50cyA9IGAke2FkbWluQ29tbWVudHN9ICNGb3JtX2ZpbGxlZF9vbiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWA7XG4gICAgfVxuICAgIGFkbWluQ29tbWVudHMgPSBgICR7YWRtaW5Db21tZW50c30gJHtTRUdNRU5UX0FETUlOX0NPTU1FTlR9YDtcbiAgICBjb25zdCBydHJpcFByb3BzID0ge1xuICAgICAgLi4ucnRQcm9wcyxcbiAgICAgIGFkbWluQ29tbWVudHMsXG4gICAgfTtcbiAgICBzZXRDb29raWUoJ3RvX2xvYycsIHJ0UHJvcHMudG9fbG9jKTtcbiAgICBzZXRDb29raWUoJ3RyaXBfZGF5cycsIHJ0UHJvcHMudHJpcF9kYXlzKTtcbiAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcigpO1xuICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb24gc3RvcmVcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZyb21PbmVQcm9wcyhydHJpcFByb3BzKTtcbiAgICAvLyBjaGFuZ2UgdGhlIHVybFxuICAgIGlmIChkZWFscykge1xuICAgICAgdGhpcy5wcm9wcy5wdXNoU3RhdGUoYC9yZXF1ZXN0ZWRfdHJpcHMvbmV3P2RlYWxzPXRydWUmdGFnPSR7dGFnfSZidWRnZXQ9JHtidWRnZXR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucHVzaFN0YXRlKCcvcmVxdWVzdGVkX3RyaXBzL25ldycpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHVwZGF0ZUZyb21PbmVQcm9wcywgcHVzaFN0YXRlIH0pKEZvcm1PbmVDVEEpO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG4iLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDZWlsID0gTWF0aC5jZWlsLFxuICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgZWxlbWVudHMgc3BsaXQgaW50byBncm91cHMgdGhlIGxlbmd0aCBvZiBgc2l6ZWAuXG4gKiBJZiBgYXJyYXlgIGNhbid0IGJlIHNwbGl0IGV2ZW5seSwgdGhlIGZpbmFsIGNodW5rIHdpbGwgYmUgdGhlIHJlbWFpbmluZ1xuICogZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcHJvY2Vzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xXSBUaGUgbGVuZ3RoIG9mIGVhY2ggY2h1bmtcbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjaHVua3MuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2h1bmsoWydhJywgJ2InLCAnYycsICdkJ10sIDIpO1xuICogLy8gPT4gW1snYScsICdiJ10sIFsnYycsICdkJ11dXG4gKlxuICogXy5jaHVuayhbJ2EnLCAnYicsICdjJywgJ2QnXSwgMyk7XG4gKiAvLyA9PiBbWydhJywgJ2InLCAnYyddLCBbJ2QnXV1cbiAqL1xuZnVuY3Rpb24gY2h1bmsoYXJyYXksIHNpemUsIGd1YXJkKSB7XG4gIGlmICgoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChhcnJheSwgc2l6ZSwgZ3VhcmQpIDogc2l6ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHNpemUgPSAxO1xuICB9IGVsc2Uge1xuICAgIHNpemUgPSBuYXRpdmVNYXgodG9JbnRlZ2VyKHNpemUpLCAwKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGlmICghbGVuZ3RoIHx8IHNpemUgPCAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBpbmRleCA9IDAsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShuYXRpdmVDZWlsKGxlbmd0aCAvIHNpemUpKTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbcmVzSW5kZXgrK10gPSBiYXNlU2xpY2UoYXJyYXksIGluZGV4LCAoaW5kZXggKz0gc2l6ZSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2h1bms7XG4iLCJ2YXIgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwODtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvRmluaXRlO1xuIiwidmFyIHRvRmluaXRlID0gcmVxdWlyZSgnLi90b0Zpbml0ZScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSW50ZWdlcjtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==