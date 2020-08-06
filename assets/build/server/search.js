require("source-map-support").install();
exports.ids = ["search"];
exports.modules = {

/***/ "./app-v2/modules/common/ErrorBoundary/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/common/ErrorBoundary/index.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import logger from '../../../../app/utils/logger';
const logError = console.error;
const defaultWidth = '100%';
const defaultHeight = '100px'; // todo: move this image to cloudinary

const style = {
  backgroundImage: 'url(https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png)',
  border: 'solid 2px black',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  maxWidth: '100%'
};
/**
 * ErrorBoundary component used to handle
 * A javaScript error in a part of the UI shouldn’t break the whole app.
 */

let ErrorBoundary = class ErrorBoundary extends _react.Component {
  constructor(props) {
    super(props);
    const width = props.width ? props.width : defaultWidth;
    const height = props.height ? props.height : defaultHeight;
    this.state = {
      hasError: false,
      style: Object.assign({
        width,
        height
      }, style)
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
    this.logError({
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return _react.default.createElement("div", {
        style: this.state.style,
        className: this.props.className
      }, this.props.name && _react.default.createElement("div", {
        className: 'message'
      }, ' ', "Component Failed is ", this.props.name));
    }

    return this.props.children;
  }

  logError({
    error,
    info
  }) {
    // custom error string to use in SENTRY
    let props;

    if (this.props.children) {
      if (this.props.children instanceof Array) {
        props = [];
        this.props.children.forEach(child => {
          props.push(child.props);
        });
      } else if (this.props.children.props) {
        props = this.props.children.props;
      }
    }

    if (props) {
      info.props = props;
    }

    error.message = `Error Boundry ${error.message}`;
    logError({
      error,
      info
    });
  }

}; //todo: custom validator for width and height

ErrorBoundary.propTypes = {
  /** one or more children elements. */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired,

  /** width for the fallback UI can be in % or px. i.e 20px or 20% */
  width: _propTypes.default.string.isRequired,

  /** height for the fallback UI only in px. i.e 220px */
  height: _propTypes.default.string.isRequired,

  /** name of the classes we want to add to default UI i.e */
  className: _propTypes.default.string,

  /** name of the identifier to be shown in error message i.e Avatar, ChatBox */
  name: _propTypes.default.string
};
ErrorBoundary.defaultProps = {
  height: '100px',
  className: ''
};
var _default = ErrorBoundary;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/packages/PackageCard.js":
/*!************************************************!*\
  !*** ./app-v2/modules/packages/PackageCard.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _parsers = __webpack_require__(/*! ../../../app/helpers/parsers */ "./app/helpers/parsers.js");

var _Cities = _interopRequireDefault(__webpack_require__(/*! ../shared/Cities */ "./app-v2/modules/shared/Cities.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! ../shared/PackageIncExc */ "./app-v2/modules/shared/PackageIncExc.js"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! modules/shared/FormOneCTA */ "./app-v2/modules/shared/FormOneCTA.js"));

var _PackageDaysDiscount = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageDaysDiscount */ "./app/components/Listing/PackageDaysDiscount.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TopCard = _glamorous.default.div({
  width: '100%',
  '& a': {
    '&:hover': {
      color: '#3E3E3E'
    }
  }
});

const PackageIncExcBox = _glamorous.default.div({
  height: '42px',
  overflow: 'hidden'
});

const ImgContainer = _glamorous.default.div({
  width: '100%',
  height: '140px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:after': {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '45%',
    background: 'linear-gradient(to bottom,  rgba(0,0,0,0) 2%,rgba(0,0,0,0.4) 60%,rgba(0,0,0,0.4) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#a6000000",GradientType=0 )',
    content: '\' \''
  }
});

const CardDetails = _glamorous.default.div({
  borderTop: '0 none',
  '& *': {
    boxSizing: 'border-box'
  }
});

const Price = _glamorous.default.p({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  '&:after': {
    width: '10px',
    height: '2px',
    background: '#69c276',
    position: 'absolute',
    bottom: '0',
    left: '0',
    content: ''
  }
});

const PackageCard = ({
  imageUrl,
  imagekitUrl,
  imageText,
  destinations,
  days,
  nights,
  price,
  discountedPrice,
  currency,
  cities,
  inclusions,
  packageUrl,
  name,
  id,
  isSlider,
  travelmonth
}) => {
  destinations = destinations instanceof Array && destinations.length > 0 ? destinations[0].name : destinations;
  const symbolicCurrency = (0, _parsers.currencyToSymbol)(currency);
  return _react.default.createElement(TopCard, {
    className: "clearfix sbcw"
  }, _react.default.createElement(_reactRouter.Link, {
    href: travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl,
    to: travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl,
    className: "pfc3"
  }, _react.default.createElement(ImgContainer, {
    className: "clearfix sbc5 relative"
  }, _react.default.createElement(_Img.default, {
    width: 320,
    height: 140,
    src: imageUrl,
    ikSrc: imagekitUrl,
    alt: imageText
  }), _react.default.createElement("p", {
    className: "absolute b10 l10 sfcw fw9 m0 f14 z1 r10"
  }, name))), _react.default.createElement(CardDetails, {
    className: isSlider ? "pt15" : "p15"
  }, _react.default.createElement("div", {
    className: "flex"
  }, _react.default.createElement("div", {
    className: "flexFull"
  }, _react.default.createElement("p", {
    className: "f12 pfc4 m0 fw3"
  }, "Starting from:"), _react.default.createElement(Price, {
    className: "sfc3 m0 fw7 f18 pb8"
  }, discountedPrice ? _react.default.createElement("span", null, `${symbolicCurrency} ${(0, _parsers.numberWithCommas)(Math.round(discountedPrice))}/-`, discountedPrice !== price ? _react.default.createElement("span", {
    className: "f12 pfc3 tdl ml8 at_oldprice"
  }, `${symbolicCurrency} ${(0, _parsers.numberWithCommas)(Math.round(price))}/-`) : null, _react.default.createElement("span", {
    className: "f12 fw3 pfc3 block"
  }, "per person")) : _react.default.createElement("span", null, (0, _parsers.parsePrice)({
    price
  }), _react.default.createElement("span", {
    className: "ml8 f12 fw3 pfc3"
  }, "per person")))), _react.default.createElement("div", null, _react.default.createElement(_PackageDaysDiscount.default, {
    days: days,
    nights: nights,
    price: price,
    discount: price - discountedPrice
  }))), _react.default.createElement(_Cities.default, {
    cities: cities,
    isSlider: isSlider
  }), _react.default.createElement(PackageIncExcBox, {
    className: "clearfix mt4 mb4"
  }, _react.default.createElement(_PackageIncExc.default, {
    inclusions: inclusions.length > 5 ? inclusions.slice(0, 5) : inclusions
  }))), _react.default.createElement("div", {
    className: isSlider ? "clearfix p0 pt15" : "clearfix pt0 p15"
  }, _react.default.createElement("div", {
    className: "col-xs-6 pl0 pr4"
  }, _react.default.createElement(_reactRouter.Link, {
    href: travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl,
    to: travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl,
    className: "btn-pri pl5 pr5 wfull ripple"
  }, "View Details")), _react.default.createElement("div", {
    className: "col-xs-6 pl4 pr0"
  },  true ? _react.default.createElement("div", {
    className: "btn-filled-pri wfull"
  }, "Customize") : undefined)));
};

PackageCard.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  imageText: _propTypes.default.string,
  destinations: _propTypes.default.string,
  packageUrl: _propTypes.default.string,
  days: _propTypes.default.number,
  nights: _propTypes.default.number,
  price: _propTypes.default.number,
  discountedPrice: _propTypes.default.number,
  currency: _propTypes.default.string,
  cities: _propTypes.default.array,
  inclusions: _propTypes.default.array,
  name: _propTypes.default.string,
  id: _propTypes.default.number.isRequired,
  isSlider: _propTypes.default.bool,
  travelmonth: _propTypes.default.number.isRequired
};
PackageCard.defaultProps = {
  imageText: '',
  destinations: '',
  days: 0,
  nights: 0,
  price: 0,
  discountedPrice: 0,
  currency: '',
  cities: [],
  inclusions: [],
  name: '',
  isSlider: false,
  showCTA: true,
  isSearchResult: false
};
var _default = PackageCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Cities.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/shared/Cities.js ***!
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

var _citiesCm = _interopRequireDefault(__webpack_require__(/*! ./cities.cm.scss */ "./app-v2/modules/shared/cities.cm.scss"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Cities = (_temp = _class = class Cities extends _react.default.Component {
  render() {
    const {
      cities,
      cityListWithdays,
      daysOrNight,
      isSlider
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row- package-cities"
    }, _react.default.createElement("ul", {
      className: `${_citiesCm.default.packageCitiesList} m0 p0 ${isSlider ? _citiesCm.default.listSingleLine : ''}`
    }, cities.map((city, key) => _react.default.createElement("li", {
      key: `${city}${key}`,
      className: "iblock fleft relative"
    }, city, cityListWithdays && cityListWithdays[city] ? ` (${cityListWithdays[city]}${daysOrNight})` : ''))));
  }

}, _class.propTypes = {
  cities: _propTypes.default.array.isRequired,
  cityListWithdays: _propTypes.default.object,
  daysOrNight: _propTypes.default.string,
  isSlider: _propTypes.default.bool
}, _class.defaultProps = {
  cityListWithdays: {},
  daysOrNight: 'D',
  isSlider: false
}, _temp);
exports.default = Cities;

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

/***/ "./app-v2/modules/shared/PackageIncExc.js":
/*!************************************************!*\
  !*** ./app-v2/modules/shared/PackageIncExc.js ***!
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

var Icons = _interopRequireWildcard(__webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js"));

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/shared/G.js");

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackageIncExc = ({
  inclusions
}) => _react.default.createElement(_G.GInclusionContainerDiv, {
  className: "clearfix relative"
}, inclusions.map((inclusion, index) => {
  const IconComponent = Icons[(0, _parsers.capitalizeFirstLetter)(inclusion.key.replace(/[\s-_]/g, ''))] || Icons.DefaultIcon;
  const elementClassName = inclusion.available ? 'packageIncExc' : 'not-included packageIncExc';
  return _react.default.createElement("span", {
    key: `${inclusion.key}_${index}`,
    className: elementClassName
  }, _react.default.createElement(_G.GInclusionIconSpan, null, _react.default.createElement(IconComponent, null)), _react.default.createElement("span", {
    className: "inclusionName"
  }, inclusion.text));
}));

PackageIncExc.propTypes = {
  inclusions: _propTypes.default.array.isRequired
};
PackageIncExc.defaultProps = {
  inclusions: []
};
var _default = PackageIncExc;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/cities.cm.scss":
/*!**********************************************!*\
  !*** ./app-v2/modules/shared/cities.cm.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"packageCitiesList": "_30owc8oER64vbiuFy6JVvs",
	"listSingleLine": "_36cNuqGjuVdcbXoumKB40c"
};

/***/ }),

/***/ "./app-v2/modules/trending/G.js":
/*!**************************************!*\
  !*** ./app-v2/modules/trending/G.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GTRendingImgDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GTRendingImgDiv = _glamorous.default.div({
  height: '140px',
  '& img': {
    minWidth: '100%',
    minHeight: '100%'
  }
});

exports.GTRendingImgDiv = GTRendingImgDiv;

/***/ }),

/***/ "./app-v2/modules/trending/TrendingCard.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/trending/TrendingCard.js ***!
  \*************************************************/
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

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/trending/G.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let TrendingCard = (_temp = _class = class TrendingCard extends _react.Component {
  render() {
    const {
      isSlider,
      imagekitUrl
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement(_reactRouter.Link, {
      to: this.props.href
    }, _react.default.createElement(_G.GTRendingImgDiv, {
      className: "overflowh pbc4"
    }, _react.default.createElement(_Img.default, {
      src: this.props.imgPath,
      ikSrc: imagekitUrl,
      alt: this.props.title
    })), _react.default.createElement("div", {
      className: isSlider ? 'pt15 sbcw flex spaceBetween' : 'p15 sbcw flex spaceBetween'
    }, _react.default.createElement("div", {
      className: "flexFull mr8"
    }, _react.default.createElement("p", {
      className: "fwb m0 mb4"
    }, this.props.title), _react.default.createElement("p", {
      className: "pfc4 m0 f12"
    }, this.props.numberOfTraveller, "+ Travelers served by ", this.props.numberOfAgents, "+ experts")), _react.default.createElement("div", null, _react.default.createElement("p", {
      className: "f12 pfc4 m0"
    }, "Starting from:"), _react.default.createElement("p", {
      className: "f18 m0 sfc3 fwb"
    }, "\u20B9", this.props.searchPrice, "/-")))));
  }

}, _class.propTypes = {
  imagekitUrl: _propTypes.PropTypes.string,
  imgPath: _propTypes.PropTypes.string.isRequired,
  title: _propTypes.PropTypes.string.isRequired,
  href: _propTypes.PropTypes.string,
  searchPrice: _propTypes.PropTypes.string.isRequired,
  numberOfTraveller: _propTypes.PropTypes.number.isRequired,
  numberOfAgents: _propTypes.PropTypes.number.isRequired,
  isSlider: _propTypes.PropTypes.bool
}, _class.defaultProps = {
  isSlider: false,
  href: ''
}, _temp);
exports.default = TrendingCard;

/***/ }),

/***/ "./app-v2/screens/search/Search.js":
/*!*****************************************!*\
  !*** ./app-v2/screens/search/Search.js ***!
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _parser = __webpack_require__(/*! ./parser */ "./app-v2/screens/search/parser.js");

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _slider = __webpack_require__(/*! ./slider */ "./app-v2/screens/search/slider/index.js");

var _testimonials = __webpack_require__(/*! ./testimonials */ "./app-v2/screens/search/testimonials/index.js");

var _travellerStories = __webpack_require__(/*! ./travellerStories */ "./app-v2/screens/search/travellerStories/index.js");

var _packages = __webpack_require__(/*! ./packages */ "./app-v2/screens/search/packages/index.js");

var _destinations = __webpack_require__(/*! ./destinations */ "./app-v2/screens/search/destinations/index.js");

var _quickInfo = __webpack_require__(/*! ./quickInfo */ "./app-v2/screens/search/quickInfo/index.js");

__webpack_require__(/*! ./search.scss */ "./app-v2/screens/search/search.scss");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Search = (_temp = _class = class Search extends _react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      searchResult: {
        data: parsedData
      }
    } = this.props;
    const {
      parsed: {
        orderedData,
        userIntent,
        primaryDestinations,
        query: searchString
      },
      raw: {
        data: {
          view_all_url: viewAllUrl
        }
      }
    } = parsedData;
    const isSingleDestination = primaryDestinations ? primaryDestinations.length === 1 : false;
    const destinationsTemplate = primaryDestinations ? _react.default.createElement("span", {
      className: 'search-result-query'
    }, primaryDestinations.join(', ')) : null;
    const queryTemplate = primaryDestinations ? _react.default.createElement("span", {
      className: 'search-result-query'
    }, searchString) : null;
    const searchComponents = [];

    if (orderedData instanceof Array) {
      orderedData.forEach(({
        name,
        data,
        viewAll
      }, key) => {
        switch (name) {
          case _parser.SearchCard.PlacesToVisit.name:
            {
              const title = _react.default.createElement("span", null, "Places to visit in ", destinationsTemplate);

              const heading = `Let the experts guide you to the best of ${!isSingleDestination ? 'these' : 'this'} mesmerizing destination${!isSingleDestination ? 's' : ''}`;
              searchComponents.push((0, _slider.slider)(_objectSpread({
                viewAll
              }, data, {
                key,
                title,
                heading
              })));
            }
            break;

          case _parser.SearchCard.ThingsToDo.name:
            const title = _react.default.createElement("span", null, "Things to do in ", destinationsTemplate);

            const heading = 'Your list of the best things to do, compiled on the basis of actual traveler experiences';
            searchComponents.push((0, _slider.slider)(_objectSpread({
              viewAll
            }, data, {
              key,
              title,
              heading
            })));
            break;

          case _parser.SearchCard.Blogs.name:
            const blogs = [];
            const travelagues = [];
            data.list.forEach(b => {
              const {
                storyDate,
                postDate
              } = b,
                    newBlog = _objectWithoutProperties(b, ["storyDate", "postDate"]);

              if (newBlog.tags instanceof Array && newBlog.tags.indexOf('travelogues') < 0) {
                blogs.push(newBlog);
              } else {
                travelagues.push(newBlog);
              }
            });

            if (travelagues.length > 0) {
              const heading = _react.default.createElement("span", null, "Our traveler stories", ' ', userIntent !== _parser.UserIntent.DestinationDetail ? _react.default.createElement("span", null, "for ", destinationsTemplate, " ") : null);

              searchComponents.push((0, _travellerStories.travelerStories)({
                list: travelagues,
                heading,
                viewAll: '/blog/travelogues'
              }));
            }

            if (blogs.length > 0) {
              searchComponents.push((0, _travellerStories.travelerStories)({
                list: blogs,
                heading: 'Exclusive collection of travel blogs',
                subHeading: 'to inspire your next getaway',
                viewAll: '/blog'
              }));
            }

            break;

          case _parser.SearchCard.Testimonials.name:
            // Traveller Reviews
            searchComponents.push((0, _testimonials.testimonials)({
              list: data.list,
              destinationsTemplate,
              userIntent
            }));
            break;

          case _parser.SearchCard.PackageCard.name:
            {
              // Packages
              const heading = _react.default.createElement("span", {
                className: 'search-result-title'
              }, "Popular packages related to", _react.default.createElement("span", {
                className: "search-result-query pl4 ellipsis iblock search-query-tag"
              }, searchString));

              const subHeading = 'Unlimited choices. Trusted agents. Best prices. Happy memories.';
              const isSlider = key !== 0;
              const viewAll = isSingleDestination ? viewAllUrl : `/tour-packages`;
              searchComponents.push((0, _packages.packages)(_objectSpread({}, data, {
                isSlider,
                heading,
                subHeading,
                viewAll
              })));
              break;
            }

          case _parser.SearchCard.DestiantionCard.name:
            {
              let heading;
              const subHeading = 'Unlimited choices. Customised vacations. Happy memories'; // Trending Destinations

              if (userIntent === _parser.UserIntent.MultiplePackages) {
                heading = _react.default.createElement("span", {
                  className: "search-result-title"
                }, "Explore top destinations related to ", queryTemplate);
              } else {
                heading = _react.default.createElement("span", {
                  className: "search-result-title"
                }, "Top destination suggestions for ", queryTemplate);
              }

              const isSlider = key !== 0; //userIntent === UserIntent.MultiplePackages;

              const viewAll = isSingleDestination ? '/all-places' : null;
              searchComponents.push((0, _destinations.destinations)(_objectSpread({}, data, {
                isSlider,
                heading,
                subHeading,
                viewAll
              })));
              break;
            }

          case _parser.SearchCard.CityBlock.name:
            // Quick Info
            searchComponents.push((0, _quickInfo.quickInfo)(data));
            break;
        }
      });
    }

    return _react.default.createElement("div", {
      className: "clearfix sbc5"
    }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("meta", {
      charSet: "utf-8"
    }), _react.default.createElement("title", null, "Search results for ", searchString ? searchString : '')), _react.default.createElement(_HeaderCommon.default, {
      location: this.props.location
    }), _react.default.createElement("div", {
      className: "col-xs-12 sbc5 pl0 pr0"
    }, _react.default.createElement("div", {
      className: "p15 pl8 pr8"
    }, _react.default.createElement("p", {
      className: "f12 m0"
    }, "Showing most relevant results for", ' ', _react.default.createElement("span", {
      className: "search-result-query"
    }, " ", searchString, "."))), searchComponents.map((searchComponent, index) => {
      return searchComponent;
    })));
  }

}, _class.propTypes = {
  searchResult: _propTypes.default.object,
  location: _propTypes.default.object.isRequired
}, _class.defaultProps = {
  searchResult: {}
}, _temp);
var _default = Search;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/search/destinations/index.js":
/*!*****************************************************!*\
  !*** ./app-v2/screens/search/destinations/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destinations = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _loadMore = __webpack_require__(/*! ../loadMore */ "./app-v2/screens/search/loadMore/index.js");

var _TrendingCard = _interopRequireDefault(__webpack_require__(/*! ../../../modules/trending/TrendingCard */ "./app-v2/modules/trending/TrendingCard.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ../../../modules/common/ErrorBoundary */ "./app-v2/modules/common/ErrorBoundary/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  searchPageSize: PageSize
} = _appConfig.default;

const destinations = ({
  list: destinations,
  isSlider,
  heading,
  subHeading,
  viewAll
}) => {
  return _react.default.createElement(_loadMore.LoadMore, {
    pageSize: PageSize,
    isSlider: isSlider,
    name: 'Destinations',
    heading: heading,
    viewAll: viewAll,
    subHeading: subHeading
  }, destinations.map((d, index) => {
    d.numberOfTraveller = d.trips_count;
    d.numberOfAgents = d.agent_count;
    return _react.default.createElement("div", {
      key: index,
      className: isSlider ? '' : 'mb8'
    }, _react.default.createElement(_ErrorBoundary.default, {
      width: "90%",
      height: "200px"
    }, _react.default.createElement(_TrendingCard.default, _extends({}, d, {
      isSlider: isSlider
    }))));
  }));
};

exports.destinations = destinations;
destinations.propTypes = {
  list: _propTypes.default.object.isRequired,
  isSlider: _propTypes.default.bool,
  title: _propTypes.default.string,
  destination: _propTypes.default.string,
  heading: _propTypes.default.string,
  subHeading: _propTypes.default.string,
  viewAll: _propTypes.default.string
};
destinations.defaultProps = {
  isSlider: false
};

/***/ }),

/***/ "./app-v2/screens/search/loadMore/index.js":
/*!*************************************************!*\
  !*** ./app-v2/screens/search/loadMore/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadMore = void 0;

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! ../../../modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let LoadMore = class LoadMore extends _react.Component {
  constructor(props) {
    super(props);

    this.showMore = () => {
      let {
        state: {
          count
        }
      } = this;
      count = count * 2;
      this.setState({
        count,
        allShown: count >= this.props.children.length
      });
    };

    this.state = {
      count: props.isSlider ? props.children.length : props.pageSize,
      allShown: props.children.length <= props.pageSize
    };
  }

  render() {
    const {
      props: {
        children,
        name,
        isSlider,
        heading,
        subHeading,
        viewAll
      }
    } = this;
    const count = this.state ? this.state.count : 0;
    const {
      state: {
        allShown
      }
    } = this;
    const visibleChildren = children.filter((child, index) => {
      return count > index;
    });
    const loadMoreButton = !allShown && !isSlider ? _react.default.createElement("button", {
      className: "wfull btn-sec-load ripple",
      onClick: this.showMore
    }, "Load More ", _react.default.createElement("span", null, name)) : null;
    return _react.default.createElement("div", {
      className: "search-result radius2 m8 mt0"
    }, isSlider ? _react.default.createElement("div", {
      className: "p15 sbcw"
    }, _react.default.createElement("div", {
      className: "flex relative"
    }, _react.default.createElement(_Heading.default, {
      data: {
        title: heading,
        heading: subHeading
      }
    }), viewAll ? _react.default.createElement(_reactRouter.Link, {
      to: viewAll,
      className: "absolute t2 r0 iblock f14 fw7"
    }, "View All") : null), _react.default.createElement(_Swiper.default, {
      slideClass: "slide",
      spaceBetween: 15,
      slidesPerView: "auto",
      rebuildOnUpdate: true,
      ssrAnimation: {
        width: 344,
        height: 355
      }
    }, visibleChildren)) : _react.default.createElement("div", {
      className: "mt15"
    }, _react.default.createElement("div", {
      className: "flex spaceBetween relative"
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(_Heading.default, {
      data: {
        title: heading,
        heading: subHeading
      }
    })), viewAll ? _react.default.createElement(_reactRouter.Link, {
      to: viewAll,
      className: "iblock f14 fw7"
    }, "View All") : null), _react.default.createElement("div", {
      className: "radius2 sbc5"
    }, _react.default.createElement("div", {
      className: "sbc5"
    }, visibleChildren), _react.default.createElement("div", null, loadMoreButton))));
  }

};
exports.LoadMore = LoadMore;
LoadMore.propTypes = {
  children: _propTypes.default.array.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  name: _propTypes.default.string,
  isSlider: _propTypes.default.bool.isRequired,
  heading: _propTypes.default.string,
  subHeading: _propTypes.default.string,
  viewAll: _propTypes.default.string
};
LoadMore.defaultProps = {
  name: ''
};

/***/ }),

/***/ "./app-v2/screens/search/packages/index.js":
/*!*************************************************!*\
  !*** ./app-v2/screens/search/packages/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packages = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _PackageCard = _interopRequireDefault(__webpack_require__(/*! ../../../modules/packages/PackageCard */ "./app-v2/modules/packages/PackageCard.js"));

var _loadMore = __webpack_require__(/*! ../loadMore */ "./app-v2/screens/search/loadMore/index.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ../../../modules/common/ErrorBoundary */ "./app-v2/modules/common/ErrorBoundary/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  searchPageSize: PageSize
} = _appConfig.default;

const packages = ({
  list: packages,
  isSlider,
  heading,
  subHeading,
  viewAll
}) => {
  return _react.default.createElement(_loadMore.LoadMore, {
    pageSize: PageSize,
    isSlider: isSlider,
    viewAll: viewAll,
    heading: heading,
    name: 'Packages',
    subHeading: subHeading
  }, packages.map((packageData, index) => {
    return _react.default.createElement("div", {
      key: index,
      className: isSlider ? '' : 'mb8'
    }, _react.default.createElement("div", {
      key: index
    }, _react.default.createElement(_ErrorBoundary.default, {
      width: "90%",
      height: "200px"
    }, _react.default.createElement(_PackageCard.default, _extends({}, packageData, {
      isSlider: isSlider,
      isSearchResult: true,
      showCTA: false,
      price: packageData.priceTotal
    })))));
  }));
};

exports.packages = packages;
packages.propTypes = {
  list: _propTypes.default.object.isRequired,
  isSlider: _propTypes.default.bool,
  heading: _propTypes.default.string,
  subHeading: _propTypes.default.string,
  destination: _propTypes.default.string,
  viewAll: _propTypes.default.string
};
packages.defaultProps = {
  isSlider: true
};

/***/ }),

/***/ "./app-v2/screens/search/quickInfo/index.js":
/*!**************************************************!*\
  !*** ./app-v2/screens/search/quickInfo/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickInfo = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _MapInformation = _interopRequireDefault(__webpack_require__(/*! ../../../modules/mapInformation/MapInformation */ "./app-v2/modules/mapInformation/MapInformation.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ../../../modules/common/ErrorBoundary */ "./app-v2/modules/common/ErrorBoundary/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const quickInfo = ({
  list
}) => {
  if (list.length > 0) {
    const mapInformation = _objectSpread({}, list[0]);

    mapInformation.title = `${mapInformation.title} Tourism`;
    mapInformation.hideMap = true;
    return _react.default.createElement("div", {
      className: "m8 mt0"
    }, _react.default.createElement(_ErrorBoundary.default, {
      width: "90%",
      height: "200px"
    }, _react.default.createElement(_MapInformation.default, {
      isExpandedInfo: true,
      mapInformation: mapInformation
    })));
  } else {
    return null;
  }
};

exports.quickInfo = quickInfo;
quickInfo.propTypes = {
  list: _propTypes.default.array.isRequired
};

/***/ }),

/***/ "./app-v2/screens/search/search.scss":
/*!*******************************************!*\
  !*** ./app-v2/screens/search/search.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"pbc1": "_Tr6qc",
	"pbc2": "_UDy63",
	"pbc3": "_3GIXp",
	"pbc4": "_UjSDb",
	"pbc5": "_1Raue",
	"sbc1": "_3NE9e",
	"sbc2": "_10klY",
	"sbc3": "_15MTw",
	"sbc4": "_2LYRI",
	"sbc5": "__UbaA",
	"sbc6": "_1fScV",
	"sbcw": "_1Yc9i",
	"sbc7": "_2tZ_s",
	"pfc1": "_kJ-fg",
	"pfc2": "_1I11g",
	"pfc3": "_BEPfD",
	"pfc4": "_2VlDq",
	"pfc5": "_2TVBG",
	"sfc1": "_1u3y1",
	"sfc2": "_2qDTN",
	"sfc3": "_34vBQ",
	"sfc4": "_3g9qV",
	"sfc5": "_3441j",
	"sfcw": "_2uaY3",
	"sfc6": "_hxYbi",
	"sfc7": "_1gp-C",
	"sbco": "_3euIB",
	"sfc8": "_3NRZ1",
	"dark-font": "_3v_O8",
	"search-result-title": "_25nnF",
	"search-result-query": "_3DsYM",
	"search-result": "_1vOEX",
	"search-query-tag": "_31f06"
};

/***/ }),

/***/ "./app-v2/screens/search/slider/index.js":
/*!***********************************************!*\
  !*** ./app-v2/screens/search/slider/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _SliderWithTitle = _interopRequireDefault(__webpack_require__(/*! ../../../modules/shared/SliderWithTitle */ "./app-v2/modules/shared/SliderWithTitle.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ../../../modules/common/ErrorBoundary */ "./app-v2/modules/common/ErrorBoundary/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const slider = ({
  list,
  title,
  heading,
  viewAll
}) => {
  const destinationSchemes = list.map(scheme => {
    return _objectSpread({}, scheme, {
      'openInNewTab': true
    });
  });
  const data = {
    destinationSchemes,
    title,
    heading,
    viewAll
  };
  return _react.default.createElement("div", {
    className: "m8 mt0"
  }, _react.default.createElement("div", {
    className: "clearfix p15 sbcw"
  }, _react.default.createElement(_ErrorBoundary.default, {
    width: "90%",
    height: "200px"
  }, _react.default.createElement(_SliderWithTitle.default, {
    data: data
  }))));
};

exports.slider = slider;
slider.propTypes = {
  list: _propTypes.default.object.isRequired,
  title: _propTypes.default.string.isRequired,
  heading: _propTypes.default.string.isRequired,
  key: _propTypes.default.number.isRequired,
  viewAll: _propTypes.default.string
};

/***/ }),

/***/ "./app-v2/screens/search/testimonials/index.js":
/*!*****************************************************!*\
  !*** ./app-v2/screens/search/testimonials/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testimonials = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _TravelerReviewsNew = _interopRequireDefault(__webpack_require__(/*! ../../../../app/components/Review/TravelerReviewsNew */ "./app/components/Review/TravelerReviewsNew.js"));

var _parser = __webpack_require__(/*! ../parser */ "./app-v2/screens/search/parser.js");

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ../../../modules/common/ErrorBoundary */ "./app-v2/modules/common/ErrorBoundary/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const testimonials = ({
  list,
  destinationsTemplate,
  userIntent
}) => {
  const title = _react.default.createElement("span", null, "Traveler reviews", ' ', userIntent !== _parser.UserIntent.DestinationDetail ? _react.default.createElement("span", null, "for ", destinationsTemplate, " ") : null);

  return _react.default.createElement("div", {
    className: "m8 mt0 radius2"
  }, _react.default.createElement(_ErrorBoundary.default, {
    width: "90%",
    height: "200px"
  }, _react.default.createElement(_TravelerReviewsNew.default, {
    reviews: list,
    title: title
  })));
};

exports.testimonials = testimonials;
testimonials.propTypes = {
  list: _propTypes.default.object.isRequired,
  destinationsTemplate: _propTypes.default.object,
  userIntent: _propTypes.default.string
};

/***/ }),

/***/ "./app-v2/screens/search/travellerStories/index.js":
/*!*********************************************************!*\
  !*** ./app-v2/screens/search/travellerStories/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.travelerStories = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _TravellerStory = _interopRequireDefault(__webpack_require__(/*! ../../../modules/travellerStory/TravellerStory */ "./app-v2/modules/travellerStory/TravellerStory.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ../../../modules/common/ErrorBoundary */ "./app-v2/modules/common/ErrorBoundary/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const travelerStories = ({
  list,
  heading,
  subHeading,
  viewAll
}) => {
  return _react.default.createElement("div", {
    className: "m8 mt0 radius2"
  }, _react.default.createElement(_ErrorBoundary.default, {
    width: "90%",
    height: "200px"
  }, _react.default.createElement(_TravellerStory.default, {
    from: "search",
    travellerStories: list,
    heading: heading,
    subHeading: subHeading,
    viewAll: viewAll
  })));
};

exports.travelerStories = travelerStories;
travelerStories.propTypes = {
  list: _propTypes.default.object.isRequired,
  heading: _propTypes.default.string,
  subHeading: _propTypes.default.string,
  viewAll: _propTypes.default.string
};

/***/ }),

/***/ "./app/components/Listing/PackageDaysDiscount.js":
/*!*******************************************************!*\
  !*** ./app/components/Listing/PackageDaysDiscount.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./PackageDaysDiscount.scss */ "./app/components/Listing/PackageDaysDiscount.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PackageDaysDiscount = class PackageDaysDiscount extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipVisible: false
    };
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip() {
    this.setState({
      isTooltipVisible: true
    });
    setTimeout(() => {
      this.setState({
        isTooltipVisible: false
      });
    }, 1500);
  }

  render() {
    const {
      days,
      nights,
      price,
      discount
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("p", {
      className: "at_packageDaysCount f12 fw7 pb5 mt3 text-right"
    }, days, " Days & ", nights, " Nights "), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("button", {
      className: "package-info-icon package-info-icon-custom-left relative fright",
      onClick: () => this.toggleTooltip()
    }, _react.default.createElement(_Icon.InfoIcon, null), this.state.isTooltipVisible ? _react.default.createElement("div", {
      className: "tooltipdata-up"
    }, _react.default.createElement("p", {
      className: "f12 sfcw m0 text-left"
    }, "Exact prices may vary based on availability.")) : null), _react.default.createElement("span", {
      className: "discount-ribbon fright mr5"
    }, (0, _parsers.getPercentage)({
      price,
      discount
    }), "% Off")));
  }

};
PackageDaysDiscount.propTypes = {
  days: _propTypes.default.number.isRequired,
  nights: _propTypes.default.number.isRequired,
  price: _propTypes.default.number.isRequired,
  discount: _propTypes.default.number.isRequired
};
var _default = PackageDaysDiscount;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/PackageDaysDiscount.scss":
/*!*********************************************************!*\
  !*** ./app/components/Listing/PackageDaysDiscount.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"discount-ribbon": "_1wgX1",
	"package-info-icon": "_14u_S",
	"package-info-icon-custom-left": "_2TO5j",
	"tooltipdata-up": "_1Etya",
	"tooltip-upwards": "_1Y6UT"
};

/***/ }),

/***/ "./app/components/Review/ReviewText.js":
/*!*********************************************!*\
  !*** ./app/components/Review/ReviewText.js ***!
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

const ReviewText = ({
  text
}) => _react.default.createElement("p", null, text);

ReviewText.propTypes = {
  text: _propTypes.default.string
};
ReviewText.defaultProps = {
  text: ''
};
var _default = ReviewText;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/StarRatings.js":
/*!**********************************************!*\
  !*** ./app/components/Review/StarRatings.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./StarRatings.scss */ "./app/components/Review/StarRatings.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-spread, react/no-array-index-key */
const StarRatings = ({
  rating,
  total,
  id
}) => {
  const r = parseInt(rating);
  const t = parseInt(total);
  const starIconElements = Array.apply(null, Array(r)).map((e, index) => _react.default.createElement("li", {
    key: `${id}_${index}`
  }, _react.default.createElement(_Icon.StarIcon, null)));
  const starIconEmptyElements = Array.apply(null, Array(t - r)).map((e, index) => _react.default.createElement("li", {
    key: `${id}_${rating + index}`
  }, _react.default.createElement(_Icon.StarIconEmpty, null)));
  return _react.default.createElement("ul", {
    className: "traveler-rating-star-list"
  }, starIconElements, starIconEmptyElements);
};

StarRatings.propTypes = {
  rating: _propTypes.default.number,
  total: _propTypes.default.number,
  id: _propTypes.default.string.isRequired
};
StarRatings.defaultProps = {
  rating: 4,
  total: 5
};
var _default = StarRatings;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/StarRatings.scss":
/*!************************************************!*\
  !*** ./app/components/Review/StarRatings.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"traveler-rating-star-list": "_kyB_G"
};

/***/ }),

/***/ "./app/components/Review/TravelerDetails.js":
/*!**************************************************!*\
  !*** ./app/components/Review/TravelerDetails.js ***!
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

var _DateTime = __webpack_require__(/*! ../../helpers/DateTime */ "./app/helpers/DateTime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TravelerDetails = ({
  name,
  destination,
  postTime
}) => _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("p", {
  className: "fw9 pb5 ellipsis"
}, name), _react.default.createElement("p", {
  className: "f12 pfc3 fw7"
}, _react.default.createElement("span", {
  className: "pfc4"
}, destination, " "), ", ", postTime && (0, _DateTime.timeFromNow)(postTime)));

TravelerDetails.propTypes = {
  name: _propTypes.default.string.isRequired,
  destination: _propTypes.default.string.isRequired,
  postTime: _propTypes.default.string.isRequired
};
var _default = TravelerDetails;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/TravelerImg.js":
/*!**********************************************!*\
  !*** ./app/components/Review/TravelerImg.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./TravelerImg.scss */ "./app/components/Review/TravelerImg.scss");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TravelerImg = ({
  imagePath
}) => _react.default.createElement("div", {
  className: "traveler-img radius100"
}, _react.default.createElement(_Img.default, {
  src: imagePath,
  height: 100
}));

TravelerImg.propTypes = {
  imagePath: _propTypes.default.string
};
TravelerImg.defaultProps = {
  imagePath: 'https://www.highvalueinfotech.com/images/person-flat.png'
};
var _default = TravelerImg;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/TravelerImg.scss":
/*!************************************************!*\
  !*** ./app/components/Review/TravelerImg.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"traveler-img": "_G9cP6",
	"traveler-initials": "_2Cr66"
};

/***/ }),

/***/ "./app/components/Review/TravelerInitials.js":
/*!***************************************************!*\
  !*** ./app/components/Review/TravelerInitials.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./TravelerImg.scss */ "./app/components/Review/TravelerImg.scss");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GUserIniDiv = _glamorous.default.div({
  minWidth: '60px',
  maxWidth: '60px',
  height: '60px',
  display: 'inline-block',
  background: '#ccc',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    minHeight: '100%'
  }
});

function getInitialsFromName(name) {
  if (!name) {
    return 'FL';
  }

  const splitName = name.split(' ');

  if (splitName.length >= 2) {
    return `${splitName[0][0]}${splitName[1][0]}`;
  }

  return `${name[0]}${name[1]}`;
}

const TravelerInitials = ({
  userName
}) => _react.default.createElement(GUserIniDiv, {
  className: "traveler-initials radius100 text-uppercase"
}, userName && getInitialsFromName(userName));

TravelerInitials.propTypes = {
  userName: _propTypes.default.string.isRequired
};
var _default = TravelerInitials;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/TravelerReview.scss":
/*!***************************************************!*\
  !*** ./app/components/Review/TravelerReview.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"traveler-img-details": "_rAlFp",
	"traveler-img-left": "_3Bj_E",
	"traveler-detail-left": "_2efkX",
	"traveler-detail-left-inner": "_1pwch",
	"limit": "_3zqGy",
	"limit-3": "_3IoB6"
};

/***/ }),

/***/ "./app/components/Review/TravelerReviewsNew.js":
/*!*****************************************************!*\
  !*** ./app/components/Review/TravelerReviewsNew.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _ReviewText = _interopRequireDefault(__webpack_require__(/*! ./ReviewText */ "./app/components/Review/ReviewText.js"));

var _StarRatings = _interopRequireDefault(__webpack_require__(/*! ./StarRatings */ "./app/components/Review/StarRatings.js"));

var _TravelerImg = _interopRequireDefault(__webpack_require__(/*! ./TravelerImg */ "./app/components/Review/TravelerImg.js"));

var _TravelerDetails = _interopRequireDefault(__webpack_require__(/*! ./TravelerDetails */ "./app/components/Review/TravelerDetails.js"));

var _TravelerInitials = _interopRequireDefault(__webpack_require__(/*! ./TravelerInitials */ "./app/components/Review/TravelerInitials.js"));

__webpack_require__(/*! ./TravelerReview.scss */ "./app/components/Review/TravelerReview.scss");

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRevieContainerDiv = _glamorous.default.div({
  border: '1px solid #d4d4d4'
});

const GTravelerDiv = _glamorous.default.div({
  minWidth: '60px'
});

const ReviewContainer = ({
  id,
  reviewText,
  starRating,
  userPic,
  userName,
  destination,
  postDate
}) => _react.default.createElement(GRevieContainerDiv, {
  className: "radius2 p15"
}, _react.default.createElement("div", {
  className: "flex spaceBetween mb8"
}, _react.default.createElement("h6", {
  className: "f16 fw9 pfc1 m0 mr8 flexFull"
}, "Trip to ", destination), _react.default.createElement(_StarRatings.default, {
  rating: starRating,
  id: `star_${id}`
})), _react.default.createElement("div", {
  className: "mb15 limit-3"
}, _react.default.createElement(_ReviewText.default, {
  text: reviewText
})), _react.default.createElement("div", {
  className: "flex alignCenter"
}, _react.default.createElement(GTravelerDiv, {
  className: "mr8"
}, userPic ? _react.default.createElement(_TravelerImg.default, {
  imagePath: userPic
}) : _react.default.createElement(_TravelerInitials.default, {
  userName: userName
})), _react.default.createElement("div", {
  className: "flexFull"
}, _react.default.createElement(_TravelerDetails.default, {
  name: userName,
  destination: destination,
  postTime: postDate
}))));

ReviewContainer.propTypes = {
  id: _propTypes.default.number.isRequired,
  reviewText: _propTypes.default.string.isRequired,
  starRating: _propTypes.default.number.isRequired,
  userPic: _propTypes.default.string,
  userName: _propTypes.default.string.isRequired,
  destination: _propTypes.default.string.isRequired,
  postDate: _propTypes.default.string
};
ReviewContainer.defaultProps = {
  userPic: null,
  postDate: ''
};

const TravelerReviewsNew = ({
  reviews,
  title
}) => {
  const {
    destination
  } = reviews[0];
  const reviewContainers = reviews.map(review => _react.default.createElement("div", {
    key: review.id,
    className: "clearfix radius2 relative"
  }, _react.default.createElement(ReviewContainer, {
    id: review.id,
    reviewText: review.body,
    starRating: review.rating,
    userPic: review.author && review.author.author_pic,
    userName: review.author && review.author.author_name,
    destination: review.destination,
    postDate: review.last_updated
  })));
  return _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "row row- sbcw p15 pb8 review-con-main"
  }, _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement("div", {
    className: "relative"
  }, _react.default.createElement("h2", {
    className: "pfc3 f16 flexFull pr64"
  }, title), _react.default.createElement(_reactRouter.Link, {
    to: "/testimonials/" + destination,
    className: "absolute t2 r0 iblock f14 fw7"
  }, "View All")), _react.default.createElement("p", {
    className: "f14 m0 mt4 pfc4"
  }, "Read on to find out why our customers love us!")), _react.default.createElement("div", null, _react.default.createElement(_Swiper.default, {
    slideClass: "slide",
    spaceBetween: 15,
    slidesPerView: "auto",
    rebuildOnUpdate: true,
    isFullWidthSwiper: false,
    ssrAnimation: {
      width: 280,
      height: 195
    }
  }, reviewContainers))));
};

TravelerReviewsNew.propTypes = {
  reviews: _propTypes.default.array,
  title: _propTypes.default.string
};
TravelerReviewsNew.defaultProps = {
  reviews: [],
  title: 'Traveler Review'
};
var _default = TravelerReviewsNew;
exports.default = _default;

/***/ }),

/***/ "./app/components/Swiper/Swiper.js":
/*!*****************************************!*\
  !*** ./app/components/Swiper/Swiper.js ***!
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

var _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js"));

__webpack_require__(/*! ./Swiper.scss */ "./app/components/Swiper/Swiper.scss");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Swiper = (_temp2 = _class = class Swiper extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, this.renderServer = ({
      width,
      height
    }) => {
      const {
        overflow
      } = this.props;
      const styles = {
        overflowX: 'scroll',
        width: width,
        display: 'inline-flex'
      };
      return _react.default.createElement("ul", {
        style: styles
      }, this.props.children.map((c, i) => {
        const __html = _server.default.renderToStaticMarkup(c).replace(/<img([\w\W]+?)\/>/g, `<div style="width:${width}px; height: ${height}px" />`);

        return _react.default.createElement("li", {
          className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild',
          key: i
        }, _react.default.createElement("div", {
          className: 'lazyloading',
          style: {
            height: `${height}px`,
            width: '100%',
            position: 'relative'
          },
          dangerouslySetInnerHTML: {
            __html: __html
          }
        }));
      }));
    }, this.renderEmptyClient = ({
      width,
      height
    }) => {
      return _react.default.createElement("div", {
        style: {
          width: width,
          height: height,
          overflow: 'hidden'
        }
      }, this.props.children.map((c, i) => _react.default.createElement("span", {
        key: i,
        className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild',
        style: {
          height: `${height}px`,
          width: '100%'
        }
      })));
    }, _temp;
  }

  componentDidMount() {
    const swiperAsync = () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-id-swiper */ "react-id-swiper", 7)).then(s => this.setState({
      ReactIdSwiper: s.default
    })); // if (this.props.loadOnDocumentReady) {


    document.readyState === "complete" ? swiperAsync() : window.addEventListener("load", swiperAsync); // } else {
    //   window.addEventListener('load', swiperAsync);
    // }
  }

  render() {
    const {
      ReactIdSwiper
    } = this.state;
    const {
      isSmallSwiper,
      isFullWidthSwiper,
      ssrAnimation,
      showLoader
    } = this.props;

    if (true) {
      return this.renderServer(ssrAnimation);
    }

    if (!ReactIdSwiper) {
      return this.renderEmptyClient(ssrAnimation);
    } else {
      return _react.default.createElement(ReactIdSwiper, this.props, this.props.children.map((c, i) => {
        return _react.default.createElement("span", {
          key: i,
          className: this.props.children.length > 1 && !isSmallSwiper && !isFullWidthSwiper ? 'swiperCustomWidth block' : isSmallSwiper && !isFullWidthSwiper ? 'smallSwiperContainer block' : isFullWidthSwiper ? 'wfull' : 'swiperSingleChild wfull block'
        }, c, showLoader ? _react.default.createElement("div", {
          className: "swiper-lazy-preloader"
        }) : null);
      }));
    }
  }

}, _class.propTypes = {
  ssrAnimation: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),
  children: _propTypes.default.array,
  isSmallSwiper: _propTypes.default.bool,
  isFullWidthSwiper: _propTypes.default.bool,
  loadOnDocumentReady: _propTypes.default.bool,
  rebuildOnUpdate: _propTypes.default.bool,
  showLoader: _propTypes.default.bool,
  overflow: _propTypes.default.string
}, _class.defaultProps = {
  ssrAnimation: {},
  children: [],
  isSmallSwiper: false,
  isFullWidthSwiper: false,
  loadOnDocumentReady: false,
  showLoader: false,
  overflow: 'hidden'
}, _temp2);
exports.default = Swiper;

/***/ }),

/***/ "./app/components/Swiper/Swiper.scss":
/*!*******************************************!*\
  !*** ./app/components/Swiper/Swiper.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"swiper-preloader-spin": "_3308Y"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jb21tb24vRXJyb3JCb3VuZGFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wYWNrYWdlcy9QYWNrYWdlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvQ2l0aWVzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Gb3JtT25lQ1RBLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9QYWNrYWdlSW5jRXhjLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9jaXRpZXMuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmVuZGluZy9HLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyZW5kaW5nL1RyZW5kaW5nQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9zZWFyY2gvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3NlYXJjaC9kZXN0aW5hdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvc2VhcmNoL2xvYWRNb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3NlYXJjaC9wYWNrYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9zZWFyY2gvcXVpY2tJbmZvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3NlYXJjaC9zZWFyY2guc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9zZWFyY2gvc2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3NlYXJjaC90ZXN0aW1vbmlhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvc2VhcmNoL3RyYXZlbGxlclN0b3JpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlRGF5c0Rpc2NvdW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZURheXNEaXNjb3VudC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Jldmlldy9SZXZpZXdUZXh0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Jldmlldy9TdGFyUmF0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXZpZXcvU3RhclJhdGluZ3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXZpZXcvVHJhdmVsZXJEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Jldmlldy9UcmF2ZWxlckltZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXZpZXcvVHJhdmVsZXJJbWcuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXZpZXcvVHJhdmVsZXJJbml0aWFscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXZpZXcvVHJhdmVsZXJSZXZpZXcuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXZpZXcvVHJhdmVsZXJSZXZpZXdzTmV3LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1N3aXBlci9Td2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlci5zY3NzIl0sIm5hbWVzIjpbImxvZ0Vycm9yIiwiY29uc29sZSIsImVycm9yIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwibWF4V2lkdGgiLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhdGUiLCJoYXNFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudERpZENhdGNoIiwiaW5mbyIsInNldFN0YXRlIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwibmFtZSIsImNoaWxkcmVuIiwiQXJyYXkiLCJmb3JFYWNoIiwiY2hpbGQiLCJwdXNoIiwibWVzc2FnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIlRvcENhcmQiLCJnbGFtb3JvdXMiLCJkaXYiLCJjb2xvciIsIlBhY2thZ2VJbmNFeGNCb3giLCJvdmVyZmxvdyIsIkltZ0NvbnRhaW5lciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiZmlsdGVyIiwiY29udGVudCIsIkNhcmREZXRhaWxzIiwiYm9yZGVyVG9wIiwiYm94U2l6aW5nIiwiUHJpY2UiLCJwIiwiUGFja2FnZUNhcmQiLCJpbWFnZVVybCIsImltYWdla2l0VXJsIiwiaW1hZ2VUZXh0IiwiZGVzdGluYXRpb25zIiwiZGF5cyIsIm5pZ2h0cyIsInByaWNlIiwiZGlzY291bnRlZFByaWNlIiwiY3VycmVuY3kiLCJjaXRpZXMiLCJpbmNsdXNpb25zIiwicGFja2FnZVVybCIsImlkIiwiaXNTbGlkZXIiLCJ0cmF2ZWxtb250aCIsImxlbmd0aCIsInN5bWJvbGljQ3VycmVuY3kiLCJNYXRoIiwicm91bmQiLCJzbGljZSIsIl9fU0VSVkVSX18iLCJudW1iZXIiLCJhcnJheSIsImJvb2wiLCJzaG93Q1RBIiwiaXNTZWFyY2hSZXN1bHQiLCJDaXRpZXMiLCJSZWFjdCIsImNpdHlMaXN0V2l0aGRheXMiLCJkYXlzT3JOaWdodCIsInN0eWxlcyIsInBhY2thZ2VDaXRpZXNMaXN0IiwibGlzdFNpbmdsZUxpbmUiLCJtYXAiLCJjaXR5Iiwia2V5Iiwib2JqZWN0IiwiRm9ybU9uZUNUQSIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkbWluQ29tbWVudHMiLCJydFByb3BzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiU0VHTUVOVF9BRE1JTl9DT01NRU5UIiwicnRyaXBQcm9wcyIsImNsaWNrSGFuZGxlciIsInVwZGF0ZUZyb21PbmVQcm9wcyIsInB1c2hTdGF0ZSIsImZ1bmMiLCJQYWNrYWdlSW5jRXhjIiwiaW5jbHVzaW9uIiwiaW5kZXgiLCJJY29uQ29tcG9uZW50IiwiSWNvbnMiLCJyZXBsYWNlIiwiRGVmYXVsdEljb24iLCJlbGVtZW50Q2xhc3NOYW1lIiwiYXZhaWxhYmxlIiwidGV4dCIsIkdUUmVuZGluZ0ltZ0RpdiIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiVHJlbmRpbmdDYXJkIiwiaW1nUGF0aCIsInRpdGxlIiwibnVtYmVyT2ZUcmF2ZWxsZXIiLCJudW1iZXJPZkFnZW50cyIsInNlYXJjaFByaWNlIiwiU2VhcmNoIiwic2VhcmNoUmVzdWx0IiwiZGF0YSIsInBhcnNlZERhdGEiLCJwYXJzZWQiLCJvcmRlcmVkRGF0YSIsInVzZXJJbnRlbnQiLCJwcmltYXJ5RGVzdGluYXRpb25zIiwicXVlcnkiLCJzZWFyY2hTdHJpbmciLCJyYXciLCJ2aWV3X2FsbF91cmwiLCJ2aWV3QWxsVXJsIiwiaXNTaW5nbGVEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uc1RlbXBsYXRlIiwiam9pbiIsInF1ZXJ5VGVtcGxhdGUiLCJzZWFyY2hDb21wb25lbnRzIiwidmlld0FsbCIsIlNlYXJjaENhcmQiLCJQbGFjZXNUb1Zpc2l0IiwiaGVhZGluZyIsIlRoaW5nc1RvRG8iLCJCbG9ncyIsImJsb2dzIiwidHJhdmVsYWd1ZXMiLCJsaXN0IiwiYiIsInN0b3J5RGF0ZSIsInBvc3REYXRlIiwibmV3QmxvZyIsInRhZ3MiLCJpbmRleE9mIiwiVXNlckludGVudCIsIkRlc3RpbmF0aW9uRGV0YWlsIiwic3ViSGVhZGluZyIsIlRlc3RpbW9uaWFscyIsIkRlc3RpYW50aW9uQ2FyZCIsIk11bHRpcGxlUGFja2FnZXMiLCJDaXR5QmxvY2siLCJzZWFyY2hDb21wb25lbnQiLCJzZWFyY2hQYWdlU2l6ZSIsIlBhZ2VTaXplIiwiY29uZmlnIiwiZCIsInRyaXBzX2NvdW50IiwiYWdlbnRfY291bnQiLCJkZXN0aW5hdGlvbiIsIkxvYWRNb3JlIiwic2hvd01vcmUiLCJjb3VudCIsImFsbFNob3duIiwicGFnZVNpemUiLCJ2aXNpYmxlQ2hpbGRyZW4iLCJsb2FkTW9yZUJ1dHRvbiIsInBhY2thZ2VzIiwicGFja2FnZURhdGEiLCJwcmljZVRvdGFsIiwicXVpY2tJbmZvIiwibWFwSW5mb3JtYXRpb24iLCJoaWRlTWFwIiwic2xpZGVyIiwiZGVzdGluYXRpb25TY2hlbWVzIiwic2NoZW1lIiwidGVzdGltb25pYWxzIiwidHJhdmVsZXJTdG9yaWVzIiwiUGFja2FnZURheXNEaXNjb3VudCIsImlzVG9vbHRpcFZpc2libGUiLCJ0b2dnbGVUb29sdGlwIiwic2V0VGltZW91dCIsImRpc2NvdW50IiwiUmV2aWV3VGV4dCIsIlN0YXJSYXRpbmdzIiwicmF0aW5nIiwidG90YWwiLCJyIiwicGFyc2VJbnQiLCJ0Iiwic3Rhckljb25FbGVtZW50cyIsImFwcGx5IiwiZSIsInN0YXJJY29uRW1wdHlFbGVtZW50cyIsIlRyYXZlbGVyRGV0YWlscyIsInBvc3RUaW1lIiwiVHJhdmVsZXJJbWciLCJpbWFnZVBhdGgiLCJHVXNlckluaURpdiIsImdldEluaXRpYWxzRnJvbU5hbWUiLCJzcGxpdE5hbWUiLCJzcGxpdCIsIlRyYXZlbGVySW5pdGlhbHMiLCJ1c2VyTmFtZSIsIkdSZXZpZUNvbnRhaW5lckRpdiIsIkdUcmF2ZWxlckRpdiIsIlJldmlld0NvbnRhaW5lciIsInJldmlld1RleHQiLCJzdGFyUmF0aW5nIiwidXNlclBpYyIsIlRyYXZlbGVyUmV2aWV3c05ldyIsInJldmlld3MiLCJyZXZpZXdDb250YWluZXJzIiwicmV2aWV3IiwiYm9keSIsImF1dGhvciIsImF1dGhvcl9waWMiLCJhdXRob3JfbmFtZSIsImxhc3RfdXBkYXRlZCIsIlN3aXBlciIsInJlbmRlclNlcnZlciIsIm92ZXJmbG93WCIsImMiLCJpIiwiX19odG1sIiwiUmVhY3RET00iLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInJlbmRlckVtcHR5Q2xpZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJzd2lwZXJBc3luYyIsInRoZW4iLCJzIiwiUmVhY3RJZFN3aXBlciIsImRlZmF1bHQiLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNTbWFsbFN3aXBlciIsImlzRnVsbFdpZHRoU3dpcGVyIiwic3NyQW5pbWF0aW9uIiwic2hvd0xvYWRlciIsImxvYWRPbkRvY3VtZW50UmVhZHkiLCJyZWJ1aWxkT25VcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7QUFFQSxNQUFNQSxXQUFXQyxRQUFRQyxLQUF6QjtBQUNBLE1BQU1DLGVBQWUsTUFBckI7QUFDQSxNQUFNQyxnQkFBZ0IsT0FBdEIsQyxDQUdBOztBQUNBLE1BQU1DLFFBQVE7QUFDWkMsbUJBQ0UsMEVBRlU7QUFHWkMsVUFBUSxpQkFISTtBQUlaQyxrQkFBZ0IsT0FKSjtBQUtaQyxzQkFBb0IsZUFMUjtBQU1aQyxvQkFBa0IsV0FOTjtBQU9aQyxZQUFVO0FBUEUsQ0FBZDtBQVVBOzs7OztJQUlNQyxhLEdBQU4sTUFBTUEsYUFBTixTQUE0QkMsZ0JBQTVCLENBQXNDO0FBQ3BDQyxjQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFVBQU1BLEtBQU47QUFDQSxVQUFNQyxRQUFRRCxNQUFNQyxLQUFOLEdBQWNELE1BQU1DLEtBQXBCLEdBQTRCYixZQUExQztBQUNBLFVBQU1jLFNBQVNGLE1BQU1FLE1BQU4sR0FBZUYsTUFBTUUsTUFBckIsR0FBOEJi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Q0FBSixLQUFVO0FBQ2hDLGVBQU87QUFBTSxlQUFLQSxDQUFYO0FBQWMscUJBQVksS0FBS3RPLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQm1ELE1BQXBCLEdBQTZCLENBQTdCLElBQy9CLENBQUNvTCxhQUQ4QixJQUNiLENBQUNDLGlCQURXLEdBRTlCLHlCQUY4QixHQUVGRCxpQkFBaUIsQ0FBQ0MsaUJBQWxCLEdBQzFCLDRCQUQwQixHQUNLQSxvQkFDN0IsT0FENkIsR0FDbkI7QUFKVCxXQUtKaEIsQ0FMSSxFQU1Ka0IsYUFBYTtBQUFLLHFCQUFVO0FBQWYsVUFBYixHQUF5RCxJQU5yRCxDQUFQO0FBUUQsT0FURCxDQUZKLENBREY7QUFnQkQ7QUFDRjs7QUEvRzJDLEMsU0FDckNwTyxTLEdBQVk7QUFDakJtTyxnQkFBY2xPLG1CQUFVQyxTQUFWLENBQW9CLENBQUNELG1CQUFVb0QsSUFBWCxFQUFpQnBELG1CQUFVaUUsTUFBM0IsQ0FBcEIsQ0FERztBQUVqQnhFLFlBQVVPLG1CQUFVbUQsS0FGSDtBQUdqQjZLLGlCQUFlaE8sbUJBQVVvRCxJQUhSO0FBSWpCNksscUJBQW1Cak8sbUJBQVVvRCxJQUpaO0FBS2pCZ0wsdUJBQXFCcE8sbUJBQVVvRCxJQUxkO0FBTWpCaUwsbUJBQWlCck8sbUJBQVVvRCxJQU5WO0FBT2pCK0ssY0FBWW5PLG1CQUFVb0QsSUFQTDtBQVFqQnhDLFlBQVVaLG1CQUFVSztBQVJILEMsU0FVWkMsWSxHQUFlO0FBQ3BCNE4sZ0JBQWMsRUFETTtBQUVwQnpPLFlBQVUsRUFGVTtBQUdwQnVPLGlCQUFlLEtBSEs7QUFJcEJDLHFCQUFtQixLQUpDO0FBS3BCRyx1QkFBcUIsS0FMRDtBQU1wQkQsY0FBWSxLQU5RO0FBT3BCdk4sWUFBVTtBQVBVLEM7Ozs7Ozs7Ozs7OztBQ2pCeEI7QUFDQTtBQUNBLEUiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIGltcG9ydCBsb2dnZXIgZnJvbSAnLi4vLi4vLi4vLi4vYXBwL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IGxvZ0Vycm9yID0gY29uc29sZS5lcnJvcjtcbmNvbnN0IGRlZmF1bHRXaWR0aCA9ICcxMDAlJztcbmNvbnN0IGRlZmF1bHRIZWlnaHQgPSAnMTAwcHgnO1xuXG5cbi8vIHRvZG86IG1vdmUgdGhpcyBpbWFnZSB0byBjbG91ZGluYXJ5XG5jb25zdCBzdHlsZSA9IHtcbiAgYmFja2dyb3VuZEltYWdlOlxuICAgICd1cmwoaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzEwNzgzNDcvc2NyZWVuc2hvdHMvMjc5OTU2Ni9vb3BzLnBuZyknLFxuICBib3JkZXI6ICdzb2xpZCAycHggYmxhY2snLFxuICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICBtYXhXaWR0aDogJzEwMCUnXG59O1xuXG4vKipcbiAqIEVycm9yQm91bmRhcnkgY29tcG9uZW50IHVzZWQgdG8gaGFuZGxlXG4gKiBBIGphdmFTY3JpcHQgZXJyb3IgaW4gYSBwYXJ0IG9mIHRoZSBVSSBzaG91bGRu4oCZdCBicmVhayB0aGUgd2hvbGUgYXBwLlxuICovXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHdpZHRoID0gcHJvcHMud2lkdGggPyBwcm9wcy53aWR0aCA6IGRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiBkZWZhdWx0SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZVxuICAgICAgKVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaCAoZXJyb3IsIGluZm8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhhc0Vycm9yOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ0Vycm9yKHsgZXJyb3IsIGluZm8gfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWVzc2FnZSd9PlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICBDb21wb25lbnQgRmFpbGVkIGlzIHt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG5cbiAgbG9nRXJyb3IgKHsgZXJyb3IsIGluZm8gfSkge1xuICAgIC8vIGN1c3RvbSBlcnJvciBzdHJpbmcgdG8gdXNlIGluIFNFTlRSWVxuICAgIGxldCBwcm9wcztcbiAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBwcm9wcyA9IFtdO1xuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIHByb3BzLnB1c2goY2hpbGQucHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcykge1xuICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBpbmZvLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGVycm9yLm1lc3NhZ2UgPSBgRXJyb3IgQm91bmRyeSAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICBsb2dFcnJvcih7IGVycm9yLCBpbmZvIH0pO1xuICB9XG59XG5cbi8vdG9kbzogY3VzdG9tIHZhbGlkYXRvciBmb3Igd2lkdGggYW5kIGhlaWdodFxuXG5FcnJvckJvdW5kYXJ5LnByb3BUeXBlcyA9IHtcbiAgLyoqIG9uZSBvciBtb3JlIGNoaWxkcmVuIGVsZW1lbnRzLiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIF0pLmlzUmVxdWlyZWQsXG4gIC8qKiB3aWR0aCBmb3IgdGhlIGZhbGxiYWNrIFVJIGNhbiBiZSBpbiAlIG9yIHB4LiBpLmUgMjBweCBvciAyMCUgKi9cbiAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIGhlaWdodCBmb3IgdGhlIGZhbGxiYWNrIFVJIG9ubHkgaW4gcHguIGkuZSAyMjBweCAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIG5hbWUgb2YgdGhlIGNsYXNzZXMgd2Ugd2FudCB0byBhZGQgdG8gZGVmYXVsdCBVSSBpLmUgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogbmFtZSBvZiB0aGUgaWRlbnRpZmllciB0byBiZSBzaG93biBpbiBlcnJvciBtZXNzYWdlIGkuZSBBdmF0YXIsIENoYXRCb3ggKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuRXJyb3JCb3VuZGFyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogJzEwMHB4JyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IHBhcnNlUHJpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCB7IGN1cnJlbmN5VG9TeW1ib2wsIG51bWJlcldpdGhDb21tYXMgfSBmcm9tICcuLi8uLi8uLi9hcHAvaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCBDaXRpZXNMaXN0IGZyb20gJy4uL3NoYXJlZC9DaXRpZXMnO1xuaW1wb3J0IFBhY2thZ2VJbmNFeGMgZnJvbSAnLi4vc2hhcmVkL1BhY2thZ2VJbmNFeGMnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnbW9kdWxlcy9zaGFyZWQvRm9ybU9uZUNUQSc7XG5pbXBvcnQgUGFja2FnZURheXNEaXNjb3VudCBmcm9tIFwiY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VEYXlzRGlzY291bnRcIjtcbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcblxuY29uc3QgVG9wQ2FyZCA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzEwMCUnLFxuICAnJiBhJzoge1xuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjM0UzRTNFJ1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IFBhY2thZ2VJbmNFeGNCb3ggPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnNDJweCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJ1xufSk7XG5cbmNvbnN0IEltZ0NvbnRhaW5lciA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxNDBweCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAnJjphZnRlcic6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICcwJyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICc0NSUnLFxuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgwLDAsMCwwKSAyJSxyZ2JhKDAsMCwwLDAuNCkgNjAlLHJnYmEoMCwwLDAsMC40KSAxMDAlKScsXG4gICAgZmlsdGVyOiAncHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwMDAwMDAwXCIsIGVuZENvbG9yc3RyPVwiI2E2MDAwMDAwXCIsR3JhZGllbnRUeXBlPTAgKScsXG4gICAgY29udGVudDogJ1xcJyBcXCcnLFxuICB9XG59KTtcblxuY29uc3QgQ2FyZERldGFpbHMgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYm9yZGVyVG9wOiAnMCBub25lJyxcbiAgJyYgKic6IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59KTtcblxuY29uc3QgUHJpY2UgPSBnbGFtb3JvdXMucCh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAnJjphZnRlcic6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgYmFja2dyb3VuZDogJyM2OWMyNzYnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogJzAnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICBjb250ZW50OiAnJ1xuICB9XG59KTtcblxuY29uc3QgUGFja2FnZUNhcmQgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCwgaW1hZ2VraXRVcmwsIGltYWdlVGV4dCwgZGVzdGluYXRpb25zLCBkYXlzLCBuaWdodHMsIHByaWNlLCBkaXNjb3VudGVkUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5LCBjaXRpZXMsIGluY2x1c2lvbnMsIHBhY2thZ2VVcmwsIG5hbWUsIGlkLCBpc1NsaWRlciwgdHJhdmVsbW9udGhcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBkZXN0aW5hdGlvbnMgPVxuICAgIGRlc3RpbmF0aW9ucyBpbnN0YW5jZW9mIEFycmF5ICYmIGRlc3RpbmF0aW9ucy5sZW5ndGggPiAwXG4gICAgICA/IGRlc3RpbmF0aW9uc1swXS5uYW1lXG4gICAgICA6IGRlc3RpbmF0aW9ucztcbiAgY29uc3Qgc3ltYm9saWNDdXJyZW5jeSA9IGN1cnJlbmN5VG9TeW1ib2woY3VycmVuY3kpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvcENhcmQgY2xhc3NOYW1lPVwiY2xlYXJmaXggc2Jjd1wiPlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17dHJhdmVsbW9udGggPyBgJHtwYWNrYWdlVXJsfSZ0cmF2ZWxtb250aD0ke3RyYXZlbG1vbnRofWAgOiBwYWNrYWdlVXJsfVxuICAgICAgICB0bz17dHJhdmVsbW9udGggPyBgJHtwYWNrYWdlVXJsfSZ0cmF2ZWxtb250aD0ke3RyYXZlbG1vbnRofWAgOiBwYWNrYWdlVXJsfVxuICAgICAgICBjbGFzc05hbWU9XCJwZmMzXCJcbiAgICAgID5cbiAgICAgICAgPEltZ0NvbnRhaW5lciBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmM1IHJlbGF0aXZlXCI+XG4gICAgICAgICAgPEltZyB3aWR0aD17MzIwfSBoZWlnaHQ9ezE0MH0gc3JjPXtpbWFnZVVybH0gaWtTcmM9e2ltYWdla2l0VXJsfSBhbHQ9e2ltYWdlVGV4dH0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiMTAgbDEwIHNmY3cgZnc5IG0wIGYxNCB6MSByMTBcIj57bmFtZX08L3A+XG4gICAgICAgIDwvSW1nQ29udGFpbmVyPlxuICAgICAgPC9MaW5rPlxuICAgICAgPENhcmREZXRhaWxzIGNsYXNzTmFtZT17aXNTbGlkZXIgPyBcInB0MTVcIiA6IFwicDE1XCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgcGZjNCBtMCBmdzNcIj5TdGFydGluZyBmcm9tOjwvcD5cbiAgICAgICAgICAgIDxQcmljZSBjbGFzc05hbWU9XCJzZmMzIG0wIGZ3NyBmMTggcGI4XCI+XG4gICAgICAgICAgICAgIHtkaXNjb3VudGVkUHJpY2UgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7YCR7c3ltYm9saWNDdXJyZW5jeX0gJHtudW1iZXJXaXRoQ29tbWFzKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGRpc2NvdW50ZWRQcmljZSlcbiAgICAgICAgICAgICAgICAgICl9Ly1gfVxuICAgICAgICAgICAgICAgICAge2Rpc2NvdW50ZWRQcmljZSAhPT0gcHJpY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYxMiBwZmMzIHRkbCBtbDggYXRfb2xkcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7YCR7c3ltYm9saWNDdXJyZW5jeX0gJHtudW1iZXJXaXRoQ29tbWFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChwcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICApfS8tYH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTIgZnczIHBmYzMgYmxvY2tcIj5wZXIgcGVyc29uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtwYXJzZVByaWNlKHsgcHJpY2UgfSl9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbDggZjEyIGZ3MyBwZmMzXCI+cGVyIHBlcnNvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1ByaWNlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFja2FnZURheXNEaXNjb3VudFxuICAgICAgICAgICAgICBkYXlzPXtkYXlzfVxuICAgICAgICAgICAgICBuaWdodHM9e25pZ2h0c31cbiAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICBkaXNjb3VudD17cHJpY2UgLSBkaXNjb3VudGVkUHJpY2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENpdGllc0xpc3QgY2l0aWVzPXtjaXRpZXN9IGlzU2xpZGVyPXtpc1NsaWRlcn0gLz5cbiAgICAgICAgPFBhY2thZ2VJbmNFeGNCb3ggY2xhc3NOYW1lPVwiY2xlYXJmaXggbXQ0IG1iNFwiPlxuICAgICAgICAgIDxQYWNrYWdlSW5jRXhjXG4gICAgICAgICAgICBpbmNsdXNpb25zPXtcbiAgICAgICAgICAgICAgaW5jbHVzaW9ucy5sZW5ndGggPiA1ID8gaW5jbHVzaW9ucy5zbGljZSgwLCA1KSA6IGluY2x1c2lvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhY2thZ2VJbmNFeGNCb3g+XG4gICAgICA8L0NhcmREZXRhaWxzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNTbGlkZXIgPyBcImNsZWFyZml4IHAwIHB0MTVcIiA6IFwiY2xlYXJmaXggcHQwIHAxNVwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwbDAgcHI0XCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e3RyYXZlbG1vbnRoID8gYCR7cGFja2FnZVVybH0mdHJhdmVsbW9udGg9JHt0cmF2ZWxtb250aH1gIDogcGFja2FnZVVybH1cbiAgICAgICAgICAgIHRvPXt0cmF2ZWxtb250aCA/IGAke3BhY2thZ2VVcmx9JnRyYXZlbG1vbnRoPSR7dHJhdmVsbW9udGh9YCA6IHBhY2thZ2VVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpIHBsNSBwcjUgd2Z1bGwgcmlwcGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IERldGFpbHNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHBsNCBwcjBcIj5cbiAgICAgICAgICB7X19TRVJWRVJfXyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmkgd2Z1bGxcIj5DdXN0b21pemU8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEZvcm1PbmVDVEFcbiAgICAgICAgICAgICAgcnRQcm9wcz17e1xuICAgICAgICAgICAgICAgIHRvX2xvYzogZGVzdGluYXRpb25zLFxuICAgICAgICAgICAgICAgIHRyaXBfZGF5czogZGF5cy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHBhY2thZ2VJZDogaWQsXG4gICAgICAgICAgICAgICAgY3RhOiBcIkN1c3RvbWl6ZSAmIEdldCBRdW90ZXNcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpIHdmdWxsXCI+Q3VzdG9taXplPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm1PbmVDVEE+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RvcENhcmQ+XG4gICk7XG59O1xuXG5QYWNrYWdlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGltYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzdGluYXRpb25zOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYWNrYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXlzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuaWdodHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkaXNjb3VudGVkUHJpY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaXRpZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgaW5jbHVzaW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBpc1NsaWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYXZlbG1vbnRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cblBhY2thZ2VDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW1hZ2VUZXh0OiAnJyxcbiAgZGVzdGluYXRpb25zOiAnJyxcbiAgZGF5czogMCxcbiAgbmlnaHRzOiAwLFxuICBwcmljZTogMCxcbiAgZGlzY291bnRlZFByaWNlOiAwLFxuICBjdXJyZW5jeTogJycsXG4gIGNpdGllczogW10sXG4gIGluY2x1c2lvbnM6IFtdLFxuICBuYW1lOiAnJyxcbiAgaXNTbGlkZXI6IGZhbHNlLFxuICBzaG93Q1RBOiB0cnVlLFxuICBpc1NlYXJjaFJlc3VsdDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jaXRpZXMuY20uc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpdGllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2l0aWVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBjaXR5TGlzdFdpdGhkYXlzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRheXNPck5pZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzU2xpZGVyOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNpdHlMaXN0V2l0aGRheXM6IHt9LFxuICAgIGRheXNPck5pZ2h0OiAnRCcsXG4gICAgaXNTbGlkZXI6IGZhbHNlXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2l0aWVzLCBjaXR5TGlzdFdpdGhkYXlzLCBkYXlzT3JOaWdodCwgaXNTbGlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGFja2FnZS1jaXRpZXNcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhY2thZ2VDaXRpZXNMaXN0fSBtMCBwMCAke2lzU2xpZGVyID8gc3R5bGVzLmxpc3RTaW5nbGVMaW5lIDogJyd9YH0+XG4gICAgICAgICAge2NpdGllcy5tYXAoKGNpdHksIGtleSkgPT5cbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake2NpdHl9JHtrZXl9YH0gY2xhc3NOYW1lPSdpYmxvY2sgZmxlZnQgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICB7Y2l0eX1cbiAgICAgICAgICAgICAge2NpdHlMaXN0V2l0aGRheXMgJiYgY2l0eUxpc3RXaXRoZGF5c1tjaXR5XVxuICAgICAgICAgICAgICAgID8gYCAoJHtjaXR5TGlzdFdpdGhkYXlzW2NpdHldfSR7ZGF5c09yTmlnaHR9KWBcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcHVzaCBhcyBwdXNoU3RhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFNFR01FTlRfQURNSU5fQ09NTUVOVCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB1cGRhdGVGcm9tT25lUHJvcHMgfSBmcm9tICdyZWR1Y2Vycy9mb3JtT25lTGVhZCc7XG5cbmNsYXNzIEZvcm1PbmVDVEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJ0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXBkYXRlRnJvbU9uZVByb3BzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHB1c2hTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjbGlja0hhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBydFByb3BzOiB7fSxcbiAgICBjbGlja0hhbmRsZXI6ICgpID0+IHt9LFxuICAgIGNoaWxkcmVuOiBbXVxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgLy8gbWVyZ2UgYWRtaW4gY29tbWVudHMgd2l0aCB0aGUgZXhpc3Rpbmcgb25lc1xuICAgIGxldCBhZG1pbkNvbW1lbnRzID0gdGhpcy5wcm9wcy5ydFByb3BzLmFkbWluQ29tbWVudHMgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhZG1pbkNvbW1lbnRzID0gYCR7YWRtaW5Db21tZW50c30gI0Zvcm1fZmlsbGVkX29uICR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YDtcbiAgICB9XG4gICAgYWRtaW5Db21tZW50cyA9IGAgJHthZG1pbkNvbW1lbnRzfSAke1NFR01FTlRfQURNSU5fQ09NTUVOVH1gO1xuICAgIGNvbnN0IHJ0cmlwUHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLnJ0UHJvcHMsXG4gICAgICBhZG1pbkNvbW1lbnRzXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcigpO1xuICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb24gc3RvcmVcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZyb21PbmVQcm9wcyhydHJpcFByb3BzKTtcbiAgICAvLyBjaGFuZ2UgdGhlIHVybFxuICAgIHRoaXMucHJvcHMucHVzaFN0YXRlKCcvcmVxdWVzdGVkX3RyaXBzL25ldycpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2Z1bGxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyB1cGRhdGVGcm9tT25lUHJvcHMsIHB1c2hTdGF0ZSB9KShGb3JtT25lQ1RBKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBHSW5jbHVzaW9uQ29udGFpbmVyRGl2LCBHSW5jbHVzaW9uSWNvblNwYW4gfSBmcm9tICcuL0cnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcblxuY29uc3QgUGFja2FnZUluY0V4YyA9ICh7IGluY2x1c2lvbnMgfSkgPT4gKFxuICA8R0luY2x1c2lvbkNvbnRhaW5lckRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCByZWxhdGl2ZVwiPlxuICAgIHtcbiAgICAgIGluY2x1c2lvbnMubWFwKChpbmNsdXNpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBJY29uc1tjYXBpdGFsaXplRmlyc3RMZXR0ZXIoaW5jbHVzaW9uLmtleS5yZXBsYWNlKC9bXFxzLV9dL2csICcnKSldXG4gICAgICAgICAgfHwgSWNvbnMuRGVmYXVsdEljb247XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDbGFzc05hbWUgPSBpbmNsdXNpb24uYXZhaWxhYmxlID8gJ3BhY2thZ2VJbmNFeGMnIDogJ25vdC1pbmNsdWRlZCBwYWNrYWdlSW5jRXhjJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBrZXk9e2Ake2luY2x1c2lvbi5rZXl9XyR7aW5kZXh9YH0gY2xhc3NOYW1lPXtlbGVtZW50Q2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxHSW5jbHVzaW9uSWNvblNwYW4+XG4gICAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IC8+XG4gICAgICAgICAgICA8L0dJbmNsdXNpb25JY29uU3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluY2x1c2lvbk5hbWVcIj57aW5jbHVzaW9uLnRleHR9PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgfVxuICA8L0dJbmNsdXNpb25Db250YWluZXJEaXY+XG4pO1xuXG5QYWNrYWdlSW5jRXhjLnByb3BUeXBlcyA9IHtcbiAgaW5jbHVzaW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cblBhY2thZ2VJbmNFeGMuZGVmYXVsdFByb3BzID0ge1xuICBpbmNsdXNpb25zOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUluY0V4YztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhY2thZ2VDaXRpZXNMaXN0XCI6IFwiXzMwb3djOG9FUjY0dmJpdUZ5NkpWdnNcIixcblx0XCJsaXN0U2luZ2xlTGluZVwiOiBcIl8zNmNOdXFHanVWZGNiWG91bUtCNDBjXCJcbn07IiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdUUmVuZGluZ0ltZ0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICcxNDBweCcsXG4gICcmIGltZyc6IHtcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnXG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IEdUUmVuZGluZ0ltZ0RpdiB9IGZyb20gJy4vRyc7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZW5kaW5nQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW1hZ2VraXRVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW1nUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWFyY2hQcmljZTogIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBudW1iZXJPZlRyYXZlbGxlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG51bWJlck9mQWdlbnRzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNTbGlkZXI6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1NsaWRlcjogZmFsc2UsXG4gICAgaHJlZjogJydcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1NsaWRlciwgaW1hZ2VraXRVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPXt0aGlzLnByb3BzLmhyZWZ9PlxuICAgICAgICAgIDxHVFJlbmRpbmdJbWdEaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3doIHBiYzRcIj5cbiAgICAgICAgICA8SW1nIHNyYz17dGhpcy5wcm9wcy5pbWdQYXRofSBpa1NyYz17aW1hZ2VraXRVcmx9IGFsdD17dGhpcy5wcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPC9HVFJlbmRpbmdJbWdEaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzU2xpZGVyID8gJ3B0MTUgc2JjdyBmbGV4IHNwYWNlQmV0d2VlbicgOiAncDE1IHNiY3cgZmxleCBzcGFjZUJldHdlZW4nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIG1yOFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZndiIG0wIG1iNFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBmYzQgbTAgZjEyXCI+e3RoaXMucHJvcHMubnVtYmVyT2ZUcmF2ZWxsZXJ9KyBUcmF2ZWxlcnMgc2VydmVkIGJ5IHt0aGlzLnByb3BzLm51bWJlck9mQWdlbnRzfSsgZXhwZXJ0czwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIHBmYzQgbTBcIj5TdGFydGluZyBmcm9tOjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxOCBtMCBzZmMzIGZ3YlwiPuKCuXt0aGlzLnByb3BzLnNlYXJjaFByaWNlfS8tPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgeyBTZWFyY2hDYXJkLCBVc2VySW50ZW50IH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IEhlYWRlckNvbW1vbiBmcm9tICdtb2R1bGVzL2hlYWRlci9IZWFkZXJDb21tb24nO1xuaW1wb3J0IHsgc2xpZGVyIH0gZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHsgdGVzdGltb25pYWxzIH0gZnJvbSAnLi90ZXN0aW1vbmlhbHMnO1xuaW1wb3J0IHsgdHJhdmVsZXJTdG9yaWVzIH0gZnJvbSAnLi90cmF2ZWxsZXJTdG9yaWVzJztcbmltcG9ydCB7IHBhY2thZ2VzIH0gZnJvbSAnLi9wYWNrYWdlcyc7XG5pbXBvcnQgeyBkZXN0aW5hdGlvbnMgfSBmcm9tICcuL2Rlc3RpbmF0aW9ucyc7XG5pbXBvcnQgeyBxdWlja0luZm8gfSBmcm9tICcuL3F1aWNrSW5mbyc7XG5cbmltcG9ydCAnLi9zZWFyY2guc2Nzcyc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzZWFyY2hSZXN1bHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2VhcmNoUmVzdWx0OiB7fVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VhcmNoUmVzdWx0OiB7IGRhdGE6IHBhcnNlZERhdGEgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcnNlZDoge1xuICAgICAgICBvcmRlcmVkRGF0YSxcbiAgICAgICAgdXNlckludGVudCxcbiAgICAgICAgcHJpbWFyeURlc3RpbmF0aW9ucyxcbiAgICAgICAgcXVlcnk6IHNlYXJjaFN0cmluZ1xuICAgICAgfSxcbiAgICAgIHJhdzoge1xuICAgICAgICBkYXRhOntcbiAgICAgICAgICB2aWV3X2FsbF91cmw6IHZpZXdBbGxVcmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gPSBwYXJzZWREYXRhO1xuXG4gICAgY29uc3QgaXNTaW5nbGVEZXN0aW5hdGlvbiA9IHByaW1hcnlEZXN0aW5hdGlvbnMgP1xuICAgICAgcHJpbWFyeURlc3RpbmF0aW9ucy5sZW5ndGggPT09IDE6IGZhbHNlO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uc1RlbXBsYXRlID0gcHJpbWFyeURlc3RpbmF0aW9ucyA/IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3NlYXJjaC1yZXN1bHQtcXVlcnknfT5cbiAgICAgICAge3ByaW1hcnlEZXN0aW5hdGlvbnMuam9pbignLCAnKX1cbiAgICAgIDwvc3Bhbj5cbiAgICApIDogbnVsbDtcblxuICAgIGNvbnN0IHF1ZXJ5VGVtcGxhdGUgPSBwcmltYXJ5RGVzdGluYXRpb25zID8gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnc2VhcmNoLXJlc3VsdC1xdWVyeSd9PntzZWFyY2hTdHJpbmd9PC9zcGFuPlxuICAgICkgOiBudWxsO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29tcG9uZW50cyA9IFtdO1xuICAgIGlmIChvcmRlcmVkRGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBvcmRlcmVkRGF0YS5mb3JFYWNoKCh7IG5hbWUsIGRhdGEsIHZpZXdBbGwgfSwga2V5KSA9PiB7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgIGNhc2UgU2VhcmNoQ2FyZC5QbGFjZXNUb1Zpc2l0Lm5hbWU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gPHNwYW4+UGxhY2VzIHRvIHZpc2l0IGluIHtkZXN0aW5hdGlvbnNUZW1wbGF0ZX08L3NwYW4+O1xuICAgICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gYExldCB0aGUgZXhwZXJ0cyBndWlkZSB5b3UgdG8gdGhlIGJlc3Qgb2YgJHtcbiAgICAgICAgICAgICAgICAhaXNTaW5nbGVEZXN0aW5hdGlvbiA/ICd0aGVzZScgOiAndGhpcydcbiAgICAgICAgICAgICAgfSBtZXNtZXJpemluZyBkZXN0aW5hdGlvbiR7IWlzU2luZ2xlRGVzdGluYXRpb24gPyAncycgOiAnJ31gO1xuXG4gICAgICAgICAgICAgIHNlYXJjaENvbXBvbmVudHMucHVzaChzbGlkZXIoeyB2aWV3QWxsLCAuLi5kYXRhLCBrZXksIHRpdGxlLCBoZWFkaW5nIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgU2VhcmNoQ2FyZC5UaGluZ3NUb0RvLm5hbWU6XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IDxzcGFuPlRoaW5ncyB0byBkbyBpbiB7ZGVzdGluYXRpb25zVGVtcGxhdGV9PC9zcGFuPjtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPVxuICAgICAgICAgICAgICAnWW91ciBsaXN0IG9mIHRoZSBiZXN0IHRoaW5ncyB0byBkbywgY29tcGlsZWQgb24gdGhlIGJhc2lzIG9mIGFjdHVhbCB0cmF2ZWxlciBleHBlcmllbmNlcyc7XG5cbiAgICAgICAgICAgIHNlYXJjaENvbXBvbmVudHMucHVzaChzbGlkZXIoeyB2aWV3QWxsLCAuLi5kYXRhLCBrZXksIHRpdGxlLCBoZWFkaW5nIH0pKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTZWFyY2hDYXJkLkJsb2dzLm5hbWU6XG4gICAgICAgICAgICBjb25zdCBibG9ncyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgdHJhdmVsYWd1ZXMgPSBbXTtcblxuICAgICAgICAgICAgZGF0YS5saXN0LmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHtzdG9yeURhdGUsIHBvc3REYXRlLCAuLi5uZXdCbG9nfSA9IGI7XG4gICAgICAgICAgICAgIGlmIChuZXdCbG9nLnRhZ3MgaW5zdGFuY2VvZiBBcnJheSAmJiBuZXdCbG9nLnRhZ3MuaW5kZXhPZigndHJhdmVsb2d1ZXMnKSA8IDApIHtcbiAgICAgICAgICAgICAgICBibG9ncy5wdXNoKG5ld0Jsb2cpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyYXZlbGFndWVzLnB1c2gobmV3QmxvZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRyYXZlbGFndWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIE91ciB0cmF2ZWxlciBzdG9yaWVzeycgJ31cbiAgICAgICAgICAgICAgICAgIHt1c2VySW50ZW50ICE9PSBVc2VySW50ZW50LkRlc3RpbmF0aW9uRGV0YWlsID8gKDxzcGFuPmZvciB7ZGVzdGluYXRpb25zVGVtcGxhdGV9IDwvc3Bhbj4pIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHNlYXJjaENvbXBvbmVudHMucHVzaCh0cmF2ZWxlclN0b3JpZXMoe1xuICAgICAgICAgICAgICAgIGxpc3Q6IHRyYXZlbGFndWVzLCBoZWFkaW5nLCB2aWV3QWxsOiAnL2Jsb2cvdHJhdmVsb2d1ZXMnXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChibG9ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHNlYXJjaENvbXBvbmVudHMucHVzaCh0cmF2ZWxlclN0b3JpZXMoe1xuICAgICAgICAgICAgICAgIGxpc3Q6IGJsb2dzLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdFeGNsdXNpdmUgY29sbGVjdGlvbiBvZiB0cmF2ZWwgYmxvZ3MnLFxuICAgICAgICAgICAgICAgIHN1YkhlYWRpbmc6ICd0byBpbnNwaXJlIHlvdXIgbmV4dCBnZXRhd2F5JyxcbiAgICAgICAgICAgICAgICB2aWV3QWxsOicvYmxvZydcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTZWFyY2hDYXJkLlRlc3RpbW9uaWFscy5uYW1lOlxuICAgICAgICAgICAgLy8gVHJhdmVsbGVyIFJldmlld3NcbiAgICAgICAgICAgIHNlYXJjaENvbXBvbmVudHMucHVzaCh0ZXN0aW1vbmlhbHMoe1xuICAgICAgICAgICAgICBsaXN0OiBkYXRhLmxpc3QsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uc1RlbXBsYXRlLFxuICAgICAgICAgICAgICB1c2VySW50ZW50XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFNlYXJjaENhcmQuUGFja2FnZUNhcmQubmFtZToge1xuICAgICAgICAgICAgLy8gUGFja2FnZXNcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3NlYXJjaC1yZXN1bHQtdGl0bGUnfT5cbiAgICAgICAgICAgICAgICBQb3B1bGFyIHBhY2thZ2VzIHJlbGF0ZWQgdG9cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NlYXJjaC1yZXN1bHQtcXVlcnkgcGw0IGVsbGlwc2lzIGlibG9jayBzZWFyY2gtcXVlcnktdGFnJz57c2VhcmNoU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmcgPVxuICAgICAgICAgICAgICAnVW5saW1pdGVkIGNob2ljZXMuIFRydXN0ZWQgYWdlbnRzLiBCZXN0IHByaWNlcy4gSGFwcHkgbWVtb3JpZXMuJztcblxuICAgICAgICAgICAgY29uc3QgaXNTbGlkZXIgPSBrZXkgIT09IDA7XG4gICAgICAgICAgICBjb25zdCB2aWV3QWxsID0gaXNTaW5nbGVEZXN0aW5hdGlvbiA/IHZpZXdBbGxVcmw6IGAvdG91ci1wYWNrYWdlc2A7XG4gICAgICAgICAgICBzZWFyY2hDb21wb25lbnRzLnB1c2gocGFja2FnZXMoeyAuLi5kYXRhLCBpc1NsaWRlciwgaGVhZGluZywgc3ViSGVhZGluZywgdmlld0FsbCB9KSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIFNlYXJjaENhcmQuRGVzdGlhbnRpb25DYXJkLm5hbWU6IHtcbiAgICAgICAgICAgIGxldCBoZWFkaW5nO1xuICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZyA9XG4gICAgICAgICAgICAgICdVbmxpbWl0ZWQgY2hvaWNlcy4gQ3VzdG9taXNlZCB2YWNhdGlvbnMuIEhhcHB5IG1lbW9yaWVzJztcblxuICAgICAgICAgICAgLy8gVHJlbmRpbmcgRGVzdGluYXRpb25zXG4gICAgICAgICAgICBpZiAodXNlckludGVudCA9PT0gVXNlckludGVudC5NdWx0aXBsZVBhY2thZ2VzKSB7XG4gICAgICAgICAgICAgIGhlYWRpbmcgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzZWFyY2gtcmVzdWx0LXRpdGxlJz5FeHBsb3JlIHRvcCBkZXN0aW5hdGlvbnMgcmVsYXRlZCB0byB7cXVlcnlUZW1wbGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWFkaW5nID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdC10aXRsZSc+VG9wIGRlc3RpbmF0aW9uIHN1Z2dlc3Rpb25zIGZvciB7cXVlcnlUZW1wbGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzU2xpZGVyID0gIGtleSAhPT0gMDsgLy91c2VySW50ZW50ID09PSBVc2VySW50ZW50Lk11bHRpcGxlUGFja2FnZXM7XG5cbiAgICAgICAgICAgIGNvbnN0IHZpZXdBbGwgPSBpc1NpbmdsZURlc3RpbmF0aW9uID8gJy9hbGwtcGxhY2VzJzogbnVsbDtcblxuICAgICAgICAgICAgc2VhcmNoQ29tcG9uZW50cy5wdXNoKGRlc3RpbmF0aW9ucyh7IC4uLmRhdGEsIGlzU2xpZGVyLCBoZWFkaW5nLCBzdWJIZWFkaW5nLCB2aWV3QWxsIH0pKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgU2VhcmNoQ2FyZC5DaXR5QmxvY2submFtZTpcbiAgICAgICAgICAgIC8vIFF1aWNrIEluZm9cbiAgICAgICAgICAgIHNlYXJjaENvbXBvbmVudHMucHVzaChxdWlja0luZm8oZGF0YSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXggc2JjNSc+XG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgPHRpdGxlPlNlYXJjaCByZXN1bHRzIGZvciB7c2VhcmNoU3RyaW5nID8gc2VhcmNoU3RyaW5nOiAnJ308L3RpdGxlPlxuICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgPEhlYWRlckNvbW1vbiBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBzYmM1IHBsMCBwcjAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwMTUgcGw4IHByOCc+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMiBtMCc+XG4gICAgICAgICAgICAgIFNob3dpbmcgbW9zdCByZWxldmFudCByZXN1bHRzIGZvcnsnICd9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdC1xdWVyeSc+IHtzZWFyY2hTdHJpbmd9Ljwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2VhcmNoQ29tcG9uZW50cy5tYXAoKHNlYXJjaENvbXBvbmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDb21wb25lbnQ7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuaW1wb3J0IHsgTG9hZE1vcmUgfSBmcm9tICcuLi9sb2FkTW9yZSc7XG5pbXBvcnQgVHJlbmRpbmdDYXJkIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdHJlbmRpbmcvVHJlbmRpbmdDYXJkJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY29tbW9uL0Vycm9yQm91bmRhcnknO1xuXG5jb25zdCB7IHNlYXJjaFBhZ2VTaXplOiBQYWdlU2l6ZSB9ID0gY29uZmlnO1xuXG5jb25zdCBkZXN0aW5hdGlvbnMgPSAoe1xuICBsaXN0OiBkZXN0aW5hdGlvbnMsXG4gIGlzU2xpZGVyLFxuICBoZWFkaW5nLFxuICBzdWJIZWFkaW5nLFxuICB2aWV3QWxsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExvYWRNb3JlXG4gICAgICBwYWdlU2l6ZT17UGFnZVNpemV9XG4gICAgICBpc1NsaWRlcj17aXNTbGlkZXJ9XG4gICAgICBuYW1lPXsnRGVzdGluYXRpb25zJ31cbiAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XG4gICAgICB2aWV3QWxsPXt2aWV3QWxsfVxuICAgICAgc3ViSGVhZGluZz17c3ViSGVhZGluZ31cbiAgICA+XG4gICAgICB7ZGVzdGluYXRpb25zLm1hcCgoZCwgaW5kZXgpID0+IHtcbiAgICAgICAgZC5udW1iZXJPZlRyYXZlbGxlciA9IGQudHJpcHNfY291bnQ7XG4gICAgICAgIGQubnVtYmVyT2ZBZ2VudHMgPSBkLmFnZW50X2NvdW50O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtpc1NsaWRlciA/ICcnIDogJ21iOCd9PlxuICAgICAgICAgICAgPEVycm9yQm91bmRhcnkgd2lkdGg9XCI5MCVcIiBoZWlnaHQ9XCIyMDBweFwiPlxuICAgICAgICAgICAgICA8VHJlbmRpbmdDYXJkIHsuLi5kfSBpc1NsaWRlcj17aXNTbGlkZXJ9IC8+XG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0xvYWRNb3JlPlxuICApO1xufTtcblxuZGVzdGluYXRpb25zLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpc1NsaWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3ViSGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlld0FsbDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZGVzdGluYXRpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNTbGlkZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgeyBkZXN0aW5hdGlvbnMgfTtcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvc2hhcmVkL0hlYWRpbmcnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTG9hZE1vcmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50OiBwcm9wcy5pc1NsaWRlciA/IHByb3BzLmNoaWxkcmVuLmxlbmd0aCA6IHByb3BzLnBhZ2VTaXplLFxuICAgICAgYWxsU2hvd246IHByb3BzLmNoaWxkcmVuLmxlbmd0aCA8PSBwcm9wcy5wYWdlU2l6ZVxuICAgIH07XG4gIH1cblxuICBzaG93TW9yZSA9ICgpID0+IHtcbiAgICBsZXQge1xuICAgICAgc3RhdGU6IHsgY291bnQgfVxuICAgIH0gPSB0aGlzO1xuICAgIGNvdW50ID0gY291bnQgKiAyO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudCwgYWxsU2hvd246IGNvdW50ID49IHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9wczogeyBjaGlsZHJlbiwgbmFtZSwgaXNTbGlkZXIsIGhlYWRpbmcsIHN1YkhlYWRpbmcsIHZpZXdBbGwgfVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zdGF0ZSA/IHRoaXMuc3RhdGUuY291bnQgOiAwO1xuICAgIGNvbnN0IHtcbiAgICAgIHN0YXRlOiB7IGFsbFNob3duIH1cbiAgICB9ID0gdGhpcztcblxuICAgIGNvbnN0IHZpc2libGVDaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcigoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gY291bnQgPiBpbmRleDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxvYWRNb3JlQnV0dG9uID1cbiAgICAgICFhbGxTaG93biAmJiAhaXNTbGlkZXIgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3ZnVsbCBidG4tc2VjLWxvYWQgcmlwcGxlJyBvbkNsaWNrPXt0aGlzLnNob3dNb3JlfT5cbiAgICAgICAgICBMb2FkIE1vcmUgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdCByYWRpdXMyIG04IG10MFwiPlxuICAgICAgICB7aXNTbGlkZXIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgc2Jjd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGhlYWRpbmcsXG4gICAgICAgICAgICAgICAgICBoZWFkaW5nOiBzdWJIZWFkaW5nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZpZXdBbGwgPyAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPXt2aWV3QWxsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdDIgcjAgaWJsb2NrIGYxNCBmdzdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFZpZXcgQWxsXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgICAgICBzc3JBbmltYXRpb249e3sgd2lkdGg6IDM0NCwgaGVpZ2h0OiAzNTUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Zpc2libGVDaGlsZHJlbn1cbiAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQxNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGhlYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IHN1YkhlYWRpbmdcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHt2aWV3QWxsID8gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt2aWV3QWxsfSBjbGFzc05hbWU9XCJpYmxvY2sgZjE0IGZ3N1wiPlxuICAgICAgICAgICAgICAgICAgVmlldyBBbGxcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGl1czIgc2JjNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiYzVcIj57dmlzaWJsZUNoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntsb2FkTW9yZUJ1dHRvbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Mb2FkTW9yZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNTbGlkZXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN1YkhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpZXdBbGw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkxvYWRNb3JlLmRlZmF1bHRQcm9wcyA9IHtcbiAgbmFtZTogJydcbn07XG5cbmV4cG9ydCB7TG9hZE1vcmV9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWNrYWdlQ2FyZCBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3BhY2thZ2VzL1BhY2thZ2VDYXJkJztcbmltcG9ydCB7IExvYWRNb3JlIH0gZnJvbSAnLi4vbG9hZE1vcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwQ29uZmlnJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY29tbW9uL0Vycm9yQm91bmRhcnknO1xuXG5jb25zdCB7IHNlYXJjaFBhZ2VTaXplOiBQYWdlU2l6ZSB9ID0gY29uZmlnO1xuXG5jb25zdCBwYWNrYWdlcyA9ICh7XG4gIGxpc3Q6IHBhY2thZ2VzLFxuICBpc1NsaWRlcixcbiAgaGVhZGluZyxcbiAgc3ViSGVhZGluZyxcbiAgdmlld0FsbFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMb2FkTW9yZVxuICAgICAgcGFnZVNpemU9e1BhZ2VTaXplfVxuICAgICAgaXNTbGlkZXI9e2lzU2xpZGVyfVxuICAgICAgdmlld0FsbD17dmlld0FsbH1cbiAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XG4gICAgICBuYW1lPXsnUGFja2FnZXMnfVxuICAgICAgc3ViSGVhZGluZz17c3ViSGVhZGluZ31cbiAgICA+XG4gICAgICB7cGFja2FnZXMubWFwKChwYWNrYWdlRGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17aXNTbGlkZXIgPyAnJyA6ICdtYjgnfT5cbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5IHdpZHRoPSc5MCUnIGhlaWdodD0nMjAwcHgnPlxuICAgICAgICAgICAgICAgIDxQYWNrYWdlQ2FyZFxuICAgICAgICAgICAgICAgICAgey4uLnBhY2thZ2VEYXRhfVxuICAgICAgICAgICAgICAgICAgaXNTbGlkZXI9e2lzU2xpZGVyfVxuICAgICAgICAgICAgICAgICAgaXNTZWFyY2hSZXN1bHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICBzaG93Q1RBPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwYWNrYWdlRGF0YS5wcmljZVRvdGFsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9Mb2FkTW9yZT5cbiAgKTtcbn07XG5cbnBhY2thZ2VzLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpc1NsaWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN1YkhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2aWV3QWxsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5wYWNrYWdlcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzU2xpZGVyOiB0cnVlXG59O1xuXG5leHBvcnQgeyBwYWNrYWdlcyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNYXBJbmZvcm1hdGlvbiBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL21hcEluZm9ybWF0aW9uL01hcEluZm9ybWF0aW9uJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY29tbW9uL0Vycm9yQm91bmRhcnknO1xuY29uc3QgcXVpY2tJbmZvID0gKHsgbGlzdCB9KSA9PiB7XG4gIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBtYXBJbmZvcm1hdGlvbiA9IHsgLi4ubGlzdFswXSB9O1xuICAgIG1hcEluZm9ybWF0aW9uLnRpdGxlID0gYCR7bWFwSW5mb3JtYXRpb24udGl0bGV9IFRvdXJpc21gO1xuICAgIG1hcEluZm9ybWF0aW9uLmhpZGVNYXAgPSB0cnVlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbTggbXQwJz5cbiAgICAgICAgPEVycm9yQm91bmRhcnkgd2lkdGg9XCI5MCVcIiBoZWlnaHQ9XCIyMDBweFwiPlxuICAgICAgICAgIDxNYXBJbmZvcm1hdGlvbiBpc0V4cGFuZGVkSW5mbz17dHJ1ZX0gbWFwSW5mb3JtYXRpb249e21hcEluZm9ybWF0aW9ufSAvPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5xdWlja0luZm8ucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IHsgcXVpY2tJbmZvIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYmMxXCI6IFwiX1RyNnFjXCIsXG5cdFwicGJjMlwiOiBcIl9VRHk2M1wiLFxuXHRcInBiYzNcIjogXCJfM0dJWHBcIixcblx0XCJwYmM0XCI6IFwiX1VqU0RiXCIsXG5cdFwicGJjNVwiOiBcIl8xUmF1ZVwiLFxuXHRcInNiYzFcIjogXCJfM05FOWVcIixcblx0XCJzYmMyXCI6IFwiXzEwa2xZXCIsXG5cdFwic2JjM1wiOiBcIl8xNU1Ud1wiLFxuXHRcInNiYzRcIjogXCJfMkxZUklcIixcblx0XCJzYmM1XCI6IFwiX19VYmFBXCIsXG5cdFwic2JjNlwiOiBcIl8xZlNjVlwiLFxuXHRcInNiY3dcIjogXCJfMVljOWlcIixcblx0XCJzYmM3XCI6IFwiXzJ0Wl9zXCIsXG5cdFwicGZjMVwiOiBcIl9rSi1mZ1wiLFxuXHRcInBmYzJcIjogXCJfMUkxMWdcIixcblx0XCJwZmMzXCI6IFwiX0JFUGZEXCIsXG5cdFwicGZjNFwiOiBcIl8yVmxEcVwiLFxuXHRcInBmYzVcIjogXCJfMlRWQkdcIixcblx0XCJzZmMxXCI6IFwiXzF1M3kxXCIsXG5cdFwic2ZjMlwiOiBcIl8ycURUTlwiLFxuXHRcInNmYzNcIjogXCJfMzR2QlFcIixcblx0XCJzZmM0XCI6IFwiXzNnOXFWXCIsXG5cdFwic2ZjNVwiOiBcIl8zNDQxalwiLFxuXHRcInNmY3dcIjogXCJfMnVhWTNcIixcblx0XCJzZmM2XCI6IFwiX2h4WWJpXCIsXG5cdFwic2ZjN1wiOiBcIl8xZ3AtQ1wiLFxuXHRcInNiY29cIjogXCJfM2V1SUJcIixcblx0XCJzZmM4XCI6IFwiXzNOUloxXCIsXG5cdFwiZGFyay1mb250XCI6IFwiXzN2X084XCIsXG5cdFwic2VhcmNoLXJlc3VsdC10aXRsZVwiOiBcIl8yNW5uRlwiLFxuXHRcInNlYXJjaC1yZXN1bHQtcXVlcnlcIjogXCJfM0RzWU1cIixcblx0XCJzZWFyY2gtcmVzdWx0XCI6IFwiXzF2T0VYXCIsXG5cdFwic2VhcmNoLXF1ZXJ5LXRhZ1wiOiBcIl8zMWYwNlwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU2xpZGVyV2l0aFRpdGxlIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvc2hhcmVkL1NsaWRlcldpdGhUaXRsZSc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NvbW1vbi9FcnJvckJvdW5kYXJ5JztcblxuY29uc3Qgc2xpZGVyID0gKHsgbGlzdCwgdGl0bGUsIGhlYWRpbmcsIHZpZXdBbGwgfSkgPT4ge1xuICBjb25zdCBkZXN0aW5hdGlvblNjaGVtZXMgPSBsaXN0Lm1hcChzY2hlbWUgPT4ge1xuICAgIHJldHVybiB7Li4uc2NoZW1lLCAnb3BlbkluTmV3VGFiJzogdHJ1ZSB9O1xuICB9KTtcbiAgY29uc3QgZGF0YSA9IHsgZGVzdGluYXRpb25TY2hlbWVzLCB0aXRsZSwgaGVhZGluZywgdmlld0FsbCB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J204IG10MCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXggcDE1IHNiY3cnPlxuICAgICAgICA8RXJyb3JCb3VuZGFyeSB3aWR0aD1cIjkwJVwiIGhlaWdodD1cIjIwMHB4XCI+XG4gICAgICAgICAgPFNsaWRlcldpdGhUaXRsZSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnNsaWRlci5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBrZXk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdmlld0FsbDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IHtzbGlkZXJ9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUcmF2ZWxlclJldmlld3NOZXcgZnJvbSAnLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUmV2aWV3L1RyYXZlbGVyUmV2aWV3c05ldyc7XG5pbXBvcnQgeyBVc2VySW50ZW50IH0gZnJvbSAnLi4vcGFyc2VyJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY29tbW9uL0Vycm9yQm91bmRhcnknO1xuXG5jb25zdCB0ZXN0aW1vbmlhbHMgPSAoeyBsaXN0LCBkZXN0aW5hdGlvbnNUZW1wbGF0ZSwgdXNlckludGVudCB9KSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gKFxuICAgIDxzcGFuPlxuICAgICAgVHJhdmVsZXIgcmV2aWV3c3snICd9XG4gICAgICB7dXNlckludGVudCAhPT0gVXNlckludGVudC5EZXN0aW5hdGlvbkRldGFpbCA/IChcbiAgICAgICAgPHNwYW4+Zm9yIHtkZXN0aW5hdGlvbnNUZW1wbGF0ZX0gPC9zcGFuPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9zcGFuPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J204IG10MCByYWRpdXMyJz5cbiAgICAgIDxFcnJvckJvdW5kYXJ5IHdpZHRoPVwiOTAlXCIgaGVpZ2h0PVwiMjAwcHhcIj5cbiAgICAgICAgPFRyYXZlbGVyUmV2aWV3c05ldyByZXZpZXdzPXtsaXN0fSB0aXRsZT17dGl0bGV9IC8+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50ZXN0aW1vbmlhbHMucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRlc3RpbmF0aW9uc1RlbXBsYXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1c2VySW50ZW50OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQge3Rlc3RpbW9uaWFsc307XG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVHJhdmVsbGVyU3RvcnkgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy90cmF2ZWxsZXJTdG9yeS9UcmF2ZWxsZXJTdG9yeSc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NvbW1vbi9FcnJvckJvdW5kYXJ5JztcblxuY29uc3QgdHJhdmVsZXJTdG9yaWVzID0gKHsgbGlzdCwgaGVhZGluZywgc3ViSGVhZGluZywgdmlld0FsbH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbTggbXQwIHJhZGl1czInPlxuICAgICAgPEVycm9yQm91bmRhcnkgd2lkdGg9XCI5MCVcIiBoZWlnaHQ9XCIyMDBweFwiPlxuICAgICAgICA8VHJhdmVsbGVyU3RvcnlcbiAgICAgICAgICBmcm9tPVwic2VhcmNoXCJcbiAgICAgICAgICB0cmF2ZWxsZXJTdG9yaWVzPXtsaXN0fVxuICAgICAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XG4gICAgICAgICAgc3ViSGVhZGluZz17c3ViSGVhZGluZ31cbiAgICAgICAgICB2aWV3QWxsPXt2aWV3QWxsfVxuICAgICAgICAvPlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHJhdmVsZXJTdG9yaWVzLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdWJIZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2aWV3QWxsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgeyB0cmF2ZWxlclN0b3JpZXMgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGFyc2Vycyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW5mb0ljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmltcG9ydCAnLi9QYWNrYWdlRGF5c0Rpc2NvdW50LnNjc3MnO1xuXG5jbGFzcyBQYWNrYWdlRGF5c0Rpc2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVG9vbHRpcFZpc2libGU6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCA9IHRoaXMudG9nZ2xlVG9vbHRpcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlVG9vbHRpcCAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVG9vbHRpcFZpc2libGU6IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNUb29sdGlwVmlzaWJsZTogZmFsc2UgfSk7XG4gICAgfSwgMTUwMCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF5cywgbmlnaHRzLCBwcmljZSwgZGlzY291bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhdF9wYWNrYWdlRGF5c0NvdW50IGYxMiBmdzcgcGI1IG10MyB0ZXh0LXJpZ2h0XCI+e2RheXN9IERheXMgJiB7bmlnaHRzfSBOaWdodHMgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWNrYWdlLWluZm8taWNvbiBwYWNrYWdlLWluZm8taWNvbi1jdXN0b20tbGVmdCByZWxhdGl2ZSBmcmlnaHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUb29sdGlwKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEluZm9JY29uIC8+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1Rvb2x0aXBWaXNpYmxlID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwZGF0YS11cFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBzZmN3IG0wIHRleHQtbGVmdFwiPkV4YWN0IHByaWNlcyBtYXkgdmFyeSBiYXNlZCBvbiBhdmFpbGFiaWxpdHkuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnQtcmliYm9uIGZyaWdodCBtcjVcIj57Z2V0UGVyY2VudGFnZSh7IHByaWNlLCBkaXNjb3VudCB9KX0lIE9mZjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhY2thZ2VEYXlzRGlzY291bnQucHJvcFR5cGVzID0ge1xuICBkYXlzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5pZ2h0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBkaXNjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlRGF5c0Rpc2NvdW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGlzY291bnQtcmliYm9uXCI6IFwiXzF3Z1gxXCIsXG5cdFwicGFja2FnZS1pbmZvLWljb25cIjogXCJfMTR1X1NcIixcblx0XCJwYWNrYWdlLWluZm8taWNvbi1jdXN0b20tbGVmdFwiOiBcIl8yVE81alwiLFxuXHRcInRvb2x0aXBkYXRhLXVwXCI6IFwiXzFFdHlhXCIsXG5cdFwidG9vbHRpcC11cHdhcmRzXCI6IFwiXzFZNlVUXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFJldmlld1RleHQgPSAoeyB0ZXh0IH0pID0+IChcbiAgPHA+e3RleHR9PC9wPlxuKTtcblxuUmV2aWV3VGV4dC5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5SZXZpZXdUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGV4dDogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld1RleHQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItc3ByZWFkLCByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgU3Rhckljb24sXG4gIFN0YXJJY29uRW1wdHlcbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgJy4vU3RhclJhdGluZ3Muc2Nzcyc7XG5cbmNvbnN0IFN0YXJSYXRpbmdzID0gKHsgcmF0aW5nLCB0b3RhbCwgaWQgfSkgPT4ge1xuICBjb25zdCByID0gcGFyc2VJbnQocmF0aW5nKTtcbiAgY29uc3QgdCA9IHBhcnNlSW50KHRvdGFsKTtcblxuICBjb25zdCBzdGFySWNvbkVsZW1lbnRzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkocikpLm1hcCgoZSwgaW5kZXgpID0+IDxsaSBrZXk9e2Ake2lkfV8ke2luZGV4fWB9PjxTdGFySWNvbiAvPjwvbGk+KTtcbiAgY29uc3Qgc3Rhckljb25FbXB0eUVsZW1lbnRzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkodCAtIHIpKS5tYXAoKGUsIGluZGV4KSA9PiA8bGkga2V5PXtgJHtpZH1fJHtyYXRpbmcgKyBpbmRleH1gfT48U3Rhckljb25FbXB0eSAvPjwvbGk+KTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJ0cmF2ZWxlci1yYXRpbmctc3Rhci1saXN0XCI+XG4gICAgICB7c3Rhckljb25FbGVtZW50c31cbiAgICAgIHtzdGFySWNvbkVtcHR5RWxlbWVudHN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cblN0YXJSYXRpbmdzLnByb3BUeXBlcyA9IHtcbiAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuU3RhclJhdGluZ3MuZGVmYXVsdFByb3BzID0ge1xuICByYXRpbmc6IDQsXG4gIHRvdGFsOiA1XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5ncztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRyYXZlbGVyLXJhdGluZy1zdGFyLWxpc3RcIjogXCJfa3lCX0dcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRpbWVGcm9tTm93IH0gZnJvbSAnLi4vLi4vaGVscGVycy9EYXRlVGltZSc7XG5cbmNvbnN0IFRyYXZlbGVyRGV0YWlscyA9ICh7IG5hbWUsIGRlc3RpbmF0aW9uLCBwb3N0VGltZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICA8cCBjbGFzc05hbWU9XCJmdzkgcGI1IGVsbGlwc2lzXCI+e25hbWV9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxMiBwZmMzIGZ3N1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGZjNFwiPntkZXN0aW5hdGlvbn0gPC9zcGFuPlxuICAgICAgLCB7IHBvc3RUaW1lICYmIHRpbWVGcm9tTm93KHBvc3RUaW1lKX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuKTtcblxuVHJhdmVsZXJEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwb3N0VGltZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlckRldGFpbHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vVHJhdmVsZXJJbWcuc2Nzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5jb25zdCBUcmF2ZWxlckltZyA9ICh7IGltYWdlUGF0aCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidHJhdmVsZXItaW1nIHJhZGl1czEwMFwiPlxuICAgIDxJbWcgc3JjPXtpbWFnZVBhdGh9IGhlaWdodD17MTAwfS8+XG4gIDwvZGl2PlxuKTtcblxuVHJhdmVsZXJJbWcucHJvcFR5cGVzID0ge1xuICBpbWFnZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UcmF2ZWxlckltZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGltYWdlUGF0aDogJ2h0dHBzOi8vd3d3LmhpZ2h2YWx1ZWluZm90ZWNoLmNvbS9pbWFnZXMvcGVyc29uLWZsYXQucG5nJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXJJbWc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0cmF2ZWxlci1pbWdcIjogXCJfRzljUDZcIixcblx0XCJ0cmF2ZWxlci1pbml0aWFsc1wiOiBcIl8yQ3I2NlwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vVHJhdmVsZXJJbWcuc2Nzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHVXNlckluaURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtaW5XaWR0aDogJzYwcHgnLFxuICBtYXhXaWR0aDogJzYwcHgnLFxuICBoZWlnaHQ6ICc2MHB4JyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGJhY2tncm91bmQ6ICcjY2NjJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAnJiBpbWcnOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxzRnJvbU5hbWUobmFtZSkge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gJ0ZMJztcbiAgfVxuICBjb25zdCBzcGxpdE5hbWUgPSBuYW1lLnNwbGl0KCcgJyk7XG4gIGlmIChzcGxpdE5hbWUubGVuZ3RoID49IDIpIHtcbiAgICByZXR1cm4gYCR7c3BsaXROYW1lWzBdWzBdfSR7c3BsaXROYW1lWzFdWzBdfWA7XG4gIH1cbiAgcmV0dXJuIGAke25hbWVbMF19JHtuYW1lWzFdfWA7XG59XG5jb25zdCBUcmF2ZWxlckluaXRpYWxzID0gKHsgdXNlck5hbWUgfSkgPT4gKFxuICA8R1VzZXJJbmlEaXYgY2xhc3NOYW1lPVwidHJhdmVsZXItaW5pdGlhbHMgcmFkaXVzMTAwIHRleHQtdXBwZXJjYXNlXCI+XG4gICAge3VzZXJOYW1lICYmIGdldEluaXRpYWxzRnJvbU5hbWUodXNlck5hbWUpfVxuICA8L0dVc2VySW5pRGl2PlxuKTtcblxuVHJhdmVsZXJJbml0aWFscy5wcm9wVHlwZXMgPSB7XG4gIHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlckluaXRpYWxzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHJhdmVsZXItaW1nLWRldGFpbHNcIjogXCJfckFsRnBcIixcblx0XCJ0cmF2ZWxlci1pbWctbGVmdFwiOiBcIl8zQmpfRVwiLFxuXHRcInRyYXZlbGVyLWRldGFpbC1sZWZ0XCI6IFwiXzJlZmtYXCIsXG5cdFwidHJhdmVsZXItZGV0YWlsLWxlZnQtaW5uZXJcIjogXCJfMXB3Y2hcIixcblx0XCJsaW1pdFwiOiBcIl8zenFHeVwiLFxuXHRcImxpbWl0LTNcIjogXCJfM0lvQjZcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IFJldmlld1RleHQgZnJvbSAnLi9SZXZpZXdUZXh0JztcbmltcG9ydCBTdGFyUmF0aW5ncyBmcm9tICcuL1N0YXJSYXRpbmdzJztcbmltcG9ydCBUcmF2ZWxlckltZyBmcm9tICcuL1RyYXZlbGVySW1nJztcbmltcG9ydCBUcmF2ZWxlckRldGFpbHMgZnJvbSAnLi9UcmF2ZWxlckRldGFpbHMnO1xuaW1wb3J0IFRyYXZlbGVySW5pdGlhbHMgZnJvbSAnLi9UcmF2ZWxlckluaXRpYWxzJztcbmltcG9ydCAnLi9UcmF2ZWxlclJldmlldy5zY3NzJztcbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5jb25zdCBHUmV2aWVDb250YWluZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNkNGQ0ZDQnXG59KTtcblxuY29uc3QgR1RyYXZlbGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1pbldpZHRoOiAnNjBweCdcbn0pO1xuXG5jb25zdCBSZXZpZXdDb250YWluZXIgPSAoe1xuICBpZCxcbiAgcmV2aWV3VGV4dCxcbiAgc3RhclJhdGluZyxcbiAgdXNlclBpYyxcbiAgdXNlck5hbWUsXG4gIGRlc3RpbmF0aW9uLFxuICBwb3N0RGF0ZVxufSkgPT4gKFxuICA8R1JldmllQ29udGFpbmVyRGl2IGNsYXNzTmFtZT0ncmFkaXVzMiBwMTUnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlQmV0d2VlbiBtYjgnPlxuICAgICAgPGg2IGNsYXNzTmFtZT0nZjE2IGZ3OSBwZmMxIG0wIG1yOCBmbGV4RnVsbCc+VHJpcCB0byB7ZGVzdGluYXRpb259PC9oNj5cbiAgICAgIDxTdGFyUmF0aW5ncyByYXRpbmc9e3N0YXJSYXRpbmd9IGlkPXtgc3Rhcl8ke2lkfWB9IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J21iMTUgbGltaXQtMyc+XG4gICAgICA8UmV2aWV3VGV4dCB0ZXh0PXtyZXZpZXdUZXh0fSAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXInPlxuICAgICAgPEdUcmF2ZWxlckRpdiBjbGFzc05hbWU9J21yOCc+XG4gICAgICAgIHt1c2VyUGljID8gKFxuICAgICAgICAgIDxUcmF2ZWxlckltZyBpbWFnZVBhdGg9e3VzZXJQaWN9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRyYXZlbGVySW5pdGlhbHMgdXNlck5hbWU9e3VzZXJOYW1lfSAvPlxuICAgICAgICApfVxuICAgICAgPC9HVHJhdmVsZXJEaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwnPlxuICAgICAgICA8VHJhdmVsZXJEZXRhaWxzXG4gICAgICAgICAgbmFtZT17dXNlck5hbWV9XG4gICAgICAgICAgZGVzdGluYXRpb249e2Rlc3RpbmF0aW9ufVxuICAgICAgICAgIHBvc3RUaW1lPXtwb3N0RGF0ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L0dSZXZpZUNvbnRhaW5lckRpdj5cbik7XG5cblJldmlld0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJldmlld1RleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhclJhdGluZzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB1c2VyUGljOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1c2VyTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwb3N0RGF0ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuUmV2aWV3Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlclBpYzogbnVsbCxcbiAgcG9zdERhdGU6ICcnXG59O1xuXG5jb25zdCBUcmF2ZWxlclJldmlld3NOZXcgPSAoeyByZXZpZXdzLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IHtkZXN0aW5hdGlvbn0gPSByZXZpZXdzWzBdO1xuICBjb25zdCByZXZpZXdDb250YWluZXJzID0gcmV2aWV3cy5tYXAocmV2aWV3ID0+IChcbiAgICA8ZGl2XG4gICAgICBrZXk9e3Jldmlldy5pZH1cbiAgICAgIGNsYXNzTmFtZT0nY2xlYXJmaXggcmFkaXVzMiByZWxhdGl2ZSdcbiAgICA+XG4gICAgICA8UmV2aWV3Q29udGFpbmVyXG4gICAgICAgIGlkPXtyZXZpZXcuaWR9XG4gICAgICAgIHJldmlld1RleHQ9e3Jldmlldy5ib2R5fVxuICAgICAgICBzdGFyUmF0aW5nPXtyZXZpZXcucmF0aW5nfVxuICAgICAgICB1c2VyUGljPXtyZXZpZXcuYXV0aG9yICYmIHJldmlldy5hdXRob3IuYXV0aG9yX3BpY31cbiAgICAgICAgdXNlck5hbWU9e3Jldmlldy5hdXRob3IgJiYgcmV2aWV3LmF1dGhvci5hdXRob3JfbmFtZX1cbiAgICAgICAgZGVzdGluYXRpb249e3Jldmlldy5kZXN0aW5hdGlvbn1cbiAgICAgICAgcG9zdERhdGU9e3Jldmlldy5sYXN0X3VwZGF0ZWR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjdyBwMTUgcGI4IHJldmlldy1jb24tbWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGZjMyBmMTYgZmxleEZ1bGwgcHI2NFwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e1wiL3Rlc3RpbW9uaWFscy9cIiArIGRlc3RpbmF0aW9ufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0MiByMCBpYmxvY2sgZjE0IGZ3N1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgQWxsXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IG0wIG10NCBwZmM0XCI+XG4gICAgICAgICAgICBSZWFkIG9uIHRvIGZpbmQgb3V0IHdoeSBvdXIgY3VzdG9tZXJzIGxvdmUgdXMhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxNX1cbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgICAgaXNGdWxsV2lkdGhTd2lwZXI9e2ZhbHNlfVxuICAgICAgICAgICAgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAyODAsIGhlaWdodDogMTk1IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Jldmlld0NvbnRhaW5lcnN9XG4gICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5UcmF2ZWxlclJldmlld3NOZXcucHJvcFR5cGVzID0ge1xuICByZXZpZXdzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UcmF2ZWxlclJldmlld3NOZXcuZGVmYXVsdFByb3BzID0ge1xuICByZXZpZXdzOiBbXSxcbiAgdGl0bGU6ICdUcmF2ZWxlciBSZXZpZXcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlclJldmlld3NOZXc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0ICcuL1N3aXBlci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzc3JBbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBpc1NtYWxsU3dpcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Z1bGxXaWR0aFN3aXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZE9uRG9jdW1lbnRSZWFkeTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVidWlsZE9uVXBkYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TG9hZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvdmVyZmxvdzogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNzckFuaW1hdGlvbjoge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGlzU21hbGxTd2lwZXI6IGZhbHNlLFxuICAgIGlzRnVsbFdpZHRoU3dpcGVyOiBmYWxzZSxcbiAgICBsb2FkT25Eb2N1bWVudFJlYWR5OiBmYWxzZSxcbiAgICBzaG93TG9hZGVyOiBmYWxzZSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfTtcbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzd2lwZXJBc3luYyA9ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3N3aXBlcicgKi8gXCJyZWFjdC1pZC1zd2lwZXJcIilcbiAgICAgICAgLnRoZW4ocyA9PiB0aGlzLnNldFN0YXRlKHsgUmVhY3RJZFN3aXBlcjogcy5kZWZhdWx0IH0pKTtcblxuICAgIC8vIGlmICh0aGlzLnByb3BzLmxvYWRPbkRvY3VtZW50UmVhZHkpIHtcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgPyBzd2lwZXJBc3luYygpIDogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzd2lwZXJBc3luYyk7XG4gICAgLy8gfVxuICB9XG5cbiAgcmVuZGVyU2VydmVyID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgY29uc3QgeyBvdmVyZmxvdyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZXMgPSB7IG92ZXJmbG93WDogJ3Njcm9sbCcsIHdpZHRoOiB3aWR0aCwgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17c3R5bGVzfT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfX2h0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cChjKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvPGltZyhbXFx3XFxXXSs/KVxcLz4vZywgYDxkaXYgc3R5bGU9XCJ3aWR0aDoke3dpZHRofXB4OyBoZWlnaHQ6ICR7aGVpZ2h0fXB4XCIgLz5gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGggPiAxID8gJ3N3aXBlckN1c3RvbVdpZHRoJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCd9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbGF6eWxvYWRpbmcnfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogX19odG1sIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckVtcHR5Q2xpZW50ID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDogJ3N3aXBlclNpbmdsZUNoaWxkJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBSZWFjdElkU3dpcGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaXNTbWFsbFN3aXBlciwgaXNGdWxsV2lkdGhTd2lwZXIsIHNzckFuaW1hdGlvbiwgc2hvd0xvYWRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChfX1NFUlZFUl9fKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJTZXJ2ZXIoc3NyQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIVJlYWN0SWRTd2lwZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVtcHR5Q2xpZW50KHNzckFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdElkU3dpcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgICAhaXNTbWFsbFN3aXBlciAmJiAhaXNGdWxsV2lkdGhTd2lwZXIpID9cbiAgICAgICAgICAgICAgICAnc3dpcGVyQ3VzdG9tV2lkdGggYmxvY2snIDogaXNTbWFsbFN3aXBlciAmJiAhaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgJ3NtYWxsU3dpcGVyQ29udGFpbmVyIGJsb2NrJyA6IGlzRnVsbFdpZHRoU3dpcGVyID9cbiAgICAgICAgICAgICAgICAgICAgJ3dmdWxsJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCB3ZnVsbCBibG9jayd9PlxuICAgICAgICAgICAgICAgIHtjfVxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGVyID8gPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItbGF6eS1wcmVsb2FkZXJcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdElkU3dpcGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN3aXBlci1wcmVsb2FkZXItc3BpblwiOiBcIl8zMzA4WVwiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=