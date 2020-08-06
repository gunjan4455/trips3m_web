require("source-map-support").install();
exports.ids = ["city-block~home~hotel-details~hotel-listing~listing~package-detail~testimonials"];
exports.modules = {

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

/***/ "./app-v2/modules/shared/TooltipCommon.js":
/*!************************************************!*\
  !*** ./app-v2/modules/shared/TooltipCommon.js ***!
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

const GTooltipBubbleDiv = _glamorous.default.div({
  position: 'absolute',
  right: '-20px',
  width: '190px',
  padding: '8px',
  backgroundColor: '#000',
  borderRadius: '2px',
  bottom: 'calc(100% + 6px)',
  '&::after': {
    content: '\' \'',
    position: 'absolute',
    bottom: '-6px',
    right: '27px',
    borderTop: '6px solid #000',
    borderRight: '5px solid transparent',
    borderLeft: '5px solid transparent'
  }
});

let TooltipCommon = class TooltipCommon extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTooltip: false
    };
    this.showTooltip = this.showTooltip.bind(this);
  }

  showTooltip() {
    this.setState({
      displayTooltip: true
    });
    setTimeout(() => {
      this.setState({
        displayTooltip: false
      });
    }, 1500);
  }

  render() {
    const message = this.props.message;
    return _react.default.createElement("span", {
      className: "relative",
      onClick: this.showTooltip
    }, this.state.displayTooltip && _react.default.createElement(GTooltipBubbleDiv, null, _react.default.createElement("div", {
      className: "sfcw f12"
    }, message)), _react.default.createElement("span", {
      className: "relative"
    }, this.props.children));
  }

};
TooltipCommon.propTypes = {
  message: _propTypes.default.string.isRequired,
  children: _propTypes.default.object.isRequired
};
var _default = TooltipCommon;
exports.default = _default;

/***/ }),

/***/ "./app/components/Common/YellowDot.js":
/*!********************************************!*\
  !*** ./app/components/Common/YellowDot.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let YellowDot = class YellowDot extends _react.default.Component {
  constructor(props) {
    super(props);

    this.offset = el => {
      const rect = el.getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left
      };
    };

    this.handleScroll = () => {
      this.setState({
        isTooltipVisible: false
      });
    };

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const values = this.offset(e.target);
    this.setState({
      isTooltipVisible: true,
      top: values.top,
      left: values.left
    });
    setTimeout(() => {
      this.setState({
        isTooltipVisible: false
      });
    }, 4000);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

/***/ "./app/components/Footer/AddressTT.js":
/*!********************************************!*\
  !*** ./app/components/Footer/AddressTT.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddressTT = ({
  isHomePage
}) => {
  return _react.default.createElement("div", {
    className: "row row- sfcw text-center",
    itemProp: isHomePage ? "address" : null,
    itemScope: isHomePage ? "itemscope" : null,
    itemType: isHomePage ? "https://schema.org/PostalAddress" : null
  }, _react.default.createElement("p", {
    className: "fw9 f14 m0 mb15 sfc6 text-uppercase "
  }, "Corporate Office"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "name" : null
  }, "Holiday Triangle Travel Private Limited"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "streetAddress" : null
  }, "Plot No - 29 , 3rd & 4th Floor, "), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "addressLocality" : null
  }, "Dynamic House, Maruti Industrial Complex,"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "AddressRegion" : null
  }, "Sector 18 , Gurugram - ", _react.default.createElement("span", {
    itemProp: "postalCode"
  }, "122015 "), ", Haryana"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "telephone" : null
  }, "Landline: ", _react.default.createElement("a", {
    href: "tel:18001235555"
  }, "1800 123 5555")), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "email" : null
  }, "Email: ", _react.default.createElement("a", {
    rel: "nofollow",
    href: "mailto:customercare@traveltriangle.com"
  }, "customercare@traveltriangle.com")));
};

AddressTT.propTypes = {
  isHomePage: _propTypes.default.bool
};
AddressTT.defaultProps = {
  isHomePage: false
};
var _default = AddressTT;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/CopyRight.js":
/*!********************************************!*\
  !*** ./app/components/Footer/CopyRight.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddressTT = () => _react.default.createElement("p", {
  className: "f12 pfc4"
}, "All rights reserved \xA9 2020");

var _default = AddressTT;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/FooterLinks.js":
/*!**********************************************!*\
  !*** ./app/components/Footer/FooterLinks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./FooterLinks.scss */ "./app/components/Footer/FooterLinks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FooterLinks = () => _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("ul", {
  className: "flex alignCenter flexWrap justifyCenter footer-links-menu"
}, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/aboutus"
}, "About Us")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/career"
}, "We Are Hiring!")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/team"
}, "Team")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/blog"
}, "Blog")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/testimonials"
}, "Testimonials")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/tnc"
}, "T&C")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/privacy"
}, "Privacy Policy")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/cancellation"
}, "Cancellation")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/FAQs"
}, "FAQs")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/contact_us"
}, "Contact Us"))));

var _default = FooterLinks;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/FooterLinks.scss":
/*!************************************************!*\
  !*** ./app/components/Footer/FooterLinks.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer-links-menu": "_1xegl"
};

/***/ }),

/***/ "./app/components/Footer/SocialLinks.js":
/*!**********************************************!*\
  !*** ./app/components/Footer/SocialLinks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SocialIconsContainer = _glamorous.default.div({
  '& .facebookIcon': {
    '& svg': {
      width: '10px',
      height: '19px'
    }
  },
  '& .twitterIcon': {
    '& svg': {
      width: '17px',
      height: '14px'
    }
  },
  '& .pintrestIcon': {
    '& svg': {
      width: '20px',
      height: '20px'
    }
  },
  '& .googleIcon': {
    '& svg': {
      width: '21px',
      height: '13px'
    }
  },
  '& .instaIcon': {
    '& svg': {
      width: '20px',
      height: '20px'
    }
  }
});

const ConnectIcons = _glamorous.default.a({
  minWidth: '30px',
  maxWidth: '30px',
  height: '30px',
  display: 'inline-block',
  marginRight: '10px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:last-child': {
    marginRight: '0'
  }
});

let SocialLinks = class SocialLinks extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "wfull"
    }, _react.default.createElement(SocialIconsContainer, {
      className: "at_socialicons flex alignCenter wfull justifyCenter"
    }, _react.default.createElement(ConnectIcons, {
      className: "facebookIcon",
      href: "https://www.facebook.com/traveltriangle",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.FBIconWhite, null)), _react.default.createElement(ConnectIcons, {
      className: "twitterIcon",
      href: "https://twitter.com/traveltriangle",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.Twitter, null)), _react.default.createElement(ConnectIcons, {
      className: "pintrestIcon",
      href: "https://www.pinterest.com/traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.PinterestIcon, null)), _react.default.createElement(ConnectIcons, {
      className: "googleIcon",
      href: "https://plus.google.com/+traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.GoogleIconWhite, null)), _react.default.createElement(ConnectIcons, {
      className: "instaIcon",
      href: "https://www.instagram.com/traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.Instagram, null))));
  }

};
exports.default = SocialLinks;

/***/ }),

/***/ "./app/components/Listing/Listing.scss":
/*!*********************************************!*\
  !*** ./app/components/Listing/Listing.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-card": "_2EP7b",
	"exp-1": "_35wQo",
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

/***/ "./app/components/Listing/PackageCities.js":
/*!*************************************************!*\
  !*** ./app/components/Listing/PackageCities.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./PackageCities.scss */ "./app/components/Listing/PackageCities.scss");

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

/***/ "./app/components/Listing/PackageCities.scss":
/*!***************************************************!*\
  !*** ./app/components/Listing/PackageCities.scss ***!
  \***************************************************/
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

/***/ "./app/components/Listing/PackageDaysDiscountExperiment.js":
/*!*****************************************************************!*\
  !*** ./app/components/Listing/PackageDaysDiscountExperiment.js ***!
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

__webpack_require__(/*! ./PackageDaysDiscount.scss */ "./app/components/Listing/PackageDaysDiscount.scss");

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

/***/ "./app/components/Listing/PackageImgTitle.js":
/*!***************************************************!*\
  !*** ./app/components/Listing/PackageImgTitle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./PackageImgTitle.scss */ "./app/components/Listing/PackageImgTitle.scss");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackageImgTitle = ({
  name,
  imageUrl,
  imagekitUrl,
  altText,
  isLargeImg
}) => _react.default.createElement("div", {
  className: isLargeImg ? 'row row- relative box-with-layer package-image-title package-image-title-large' : 'row row- relative box-with-layer package-image-title'
}, _react.default.createElement("span", {
  className: "package-img relative"
}, _react.default.createElement(_Img.default, {
  width: 411,
  height: 286,
  ikSrc: imagekitUrl,
  src: imageUrl,
  alt: altText,
  itemProp: "image",
  itemType: "https://schema.org/image"
})), _react.default.createElement("h3", {
  className: "absolute z3 b10 l0 r0 fw9 f14 pl15 pr15 sfcw"
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

/***/ "./app/components/Listing/PackageImgTitle.scss":
/*!*****************************************************!*\
  !*** ./app/components/Listing/PackageImgTitle.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-image-title": "_1uAJm",
	"package-img": "_Fd4of",
	"package-image-title-large": "_2ir4Q"
};

/***/ }),

/***/ "./app/components/Listing/PackageIncExc.js":
/*!*************************************************!*\
  !*** ./app/components/Listing/PackageIncExc.js ***!
  \*************************************************/
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

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

var _InclusionNotification = __webpack_require__(/*! constants/Packages/InclusionNotification */ "./app/constants/Packages/InclusionNotification.js");

var _YellowDot = _interopRequireDefault(__webpack_require__(/*! ./../Common/YellowDot */ "./app/components/Common/YellowDot.js"));

__webpack_require__(/*! ./PackageIncExc.scss */ "./app/components/Listing/PackageIncExc.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    const IconComponent = Icons[(0, _parsers.capitalizeFirstLetter)(inclusion.key.replace(/[\s-_]/g, ''))] || Icons.Default;
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
      className: "incl-excl-img"
    }, _react.default.createElement(IconComponent, {
      key: `${id}_${inclusion.key}_${index}`,
      className: disabledIconClass
    })), _react.default.createElement("p", {
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

/***/ "./app/components/Listing/PackageIncExc.scss":
/*!***************************************************!*\
  !*** ./app/components/Listing/PackageIncExc.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"incl-excl-con": "_21iHL",
	"incl-excl-con-inner": "_1O6gy",
	"package-card": "_1uAcB",
	"incl-excl-con-inner-deals": "_3P_Vh",
	"incl-excl-box": "_SB1g3",
	"not-included": "_3Yq0k",
	"incl-excl-img": "_3yI53",
	"inc-no-scroll": "_29B2C",
	"inclusionDeals": "_tfiFA"
};

/***/ }),

/***/ "./app/components/Listing/PackagePriceExperiment.js":
/*!**********************************************************!*\
  !*** ./app/components/Listing/PackagePriceExperiment.js ***!
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

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _TooltipCommon = _interopRequireDefault(__webpack_require__(/*! modules/shared/TooltipCommon */ "./app-v2/modules/shared/TooltipCommon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PackagePriceExperiment = class PackagePriceExperiment extends _react.Component {
  render() {
    const {
      priceUnit,
      price,
      discount,
      currency,
      displayRange,
      priceFrom,
      priceTo,
      totalPrice,
      totalDiscount,
      promoTag,
      hideDiscount
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", null, _react.default.createElement("span", {
      className: "f10 mt8 pfc4 pb5 fw4 starting-from block"
    }, "Starting from:"), _react.default.createElement("h4", {
      className: "package-price sfc3 fw7 f18 pb0"
    }, _react.default.createElement("div", null, (0, _parsers.parsePrice)({
      price: priceFrom || price - discount,
      currency
    }), "/-", !hideDiscount ? _react.default.createElement("span", {
      className: "f12 fw4 ml8 pfc3 tdl original-price"
    }, (0, _parsers.parsePrice)({
      price: priceTo || price,
      currency
    }), "/-") : null)), _react.default.createElement("p", {
      className: "f10 mt4"
    }, priceUnit)), _react.default.createElement("div", {
      className: "ml8 mt8 discount-ribbon-container flex flexFull alignCenter"
    }, !hideDiscount ? _react.default.createElement("span", {
      className: "discount-ribbon fright mr4"
    }, (0, _parsers.getPercentage)({
      price: price,
      discount: discount
    }), "% Off") : null, _react.default.createElement(_TooltipCommon.default, {
      message: 'Exact prices may vary based on availability.'
    }, _react.default.createElement("div", {
      className: "input-24 p3 pl0 flex alignCenter justifyCenter relative"
    }, _react.default.createElement(_Icon.InfoIcon, null))), _react.default.createElement("div", {
      className: "flex flexFull justifyEnd"
    }, promoTag ? _react.default.createElement(_TooltipCommon.default, {
      message: 'Recommended by TravelTriangle'
    }, _react.default.createElement("div", {
      className: "input-24 flex alignCenter justifyCenter relative"
    }, _react.default.createElement(_Icon.TTRecommendedIcon, null))) : null))));
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
  promoTag: _propTypes.default.number.isRequired
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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1Rvb2x0aXBDb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQ29tbW9uL1llbGxvd0RvdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvQWRkcmVzc1RULmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Db3B5UmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmtzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJMaW5rcy5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xpc3Rpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VDaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlQ2l0aWVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlRGF5c0Rpc2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VJbWdUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VJbWdUaXRsZS5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZUluY0V4Yy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VJbmNFeGMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VQcmljZUV4cGVyaW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnN0YW50cy9QYWNrYWdlcy9JbmNsdXNpb25Ob3RpZmljYXRpb24uanMiXSwibmFtZXMiOlsiR3JlYWRtb3JlTGFiZWwiLCJnbGFtb3JvdXMiLCJsYWJlbCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiR0Rvd25BcnJvd1NwYW4iLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJTaG93TW9yZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tlZCIsImRlZmF1bHRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmFja1NlZ21lbnQiLCJjdGEiLCJyZW5kZXIiLCJ0ZXh0TGVuZ3RoIiwiaXNEZWZhdWx0U2hvd01vcmUiLCJhcHBlbmRUZXh0Iiwid3JhcFRleHQiLCJsZW5ndGgiLCJtb3JlVGV4dCIsInNob3dMZXNzVGV4dCIsInNob3dNb3JlVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5Iiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiR1Rvb2x0aXBCdWJibGVEaXYiLCJkaXYiLCJwb3NpdGlvbiIsInJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm90dG9tIiwiY29udGVudCIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyTGVmdCIsIlRvb2x0aXBDb21tb24iLCJkaXNwbGF5VG9vbHRpcCIsInNob3dUb29sdGlwIiwic2V0VGltZW91dCIsIm1lc3NhZ2UiLCJjaGlsZHJlbiIsIlllbGxvd0RvdCIsIm9mZnNldCIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJoYW5kbGVTY3JvbGwiLCJpc1Rvb2x0aXBWaXNpYmxlIiwiZ2V0U3R5bGVPYmplY3QiLCJoYW5kbGVDbGljayIsInZhbHVlcyIsInRhcmdldCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhvdmVyRGF0YSIsImRvdEJveFN0eWxlIiwiZG90U21hbGxCb3hTdHlsZSIsInNwaW5uZXJTdHlsZSIsInRvb2x0aXBDb250YWluZXJTdGF0ZSIsIkFkZHJlc3NUVCIsImlzSG9tZVBhZ2UiLCJGb290ZXJMaW5rcyIsIlNvY2lhbEljb25zQ29udGFpbmVyIiwiQ29ubmVjdEljb25zIiwiYSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luUmlnaHQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJTb2NpYWxMaW5rcyIsInJlbmRlclBhY2thZ2VDaXRpZXNGcm9tQXJyYXkiLCJjaXRpZXMiLCJpc0RlYWxzQ2FyZCIsIm1hcCIsImNpdHkiLCJpIiwicmVuZGVyUGFja2FnZUNpdGllc0Zyb21PYmplY3QiLCJjaXRpZXNXaXRoRGF5cyIsIk9iamVjdCIsImtleXMiLCJQYWNrYWdlQ2l0aWVzIiwiQXJyYXkiLCJQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCIsImRheXMiLCJuaWdodHMiLCJpc1BhY2thZ2VSZXZhbXAiLCJudW1iZXIiLCJQYWNrYWdlSW1nVGl0bGUiLCJuYW1lIiwiaW1hZ2VVcmwiLCJpbWFnZWtpdFVybCIsImFsdFRleHQiLCJpc0xhcmdlSW1nIiwiZ2V0SWNvblRleHQiLCJpbmNsdXNpb24iLCJob3RlbEluZm8iLCJrZXkiLCJ0ZXh0IiwiUGFja2FnZUluY0V4YyIsImluY2x1c2lvbnMiLCJpZCIsIm5vU2Nyb2xsIiwiaW5jbHVzaW9uc0F2YWwiLCJmaWx0ZXIiLCJhdmFpbGFibGUiLCJzbGljZSIsImluY2x1c2lvbkxpc3QiLCJpbmRleCIsIkljb25Db21wb25lbnQiLCJJY29ucyIsInJlcGxhY2UiLCJEZWZhdWx0IiwiZGlzYWJsZWRFbGVtZW50Q2xhc3MiLCJkaXNhYmxlZEljb25DbGFzcyIsImluY2x1c2lvblRleHRIaWRkZW4iLCJJbmNsdXNpb25Ob3RpZmljYXRpb25QcmVzZW50IiwiSW5jbHVzaW9uTm90aWZpY2F0aW9uIiwiaW5kZXhPZiIsInpJbmRleCIsIlBhY2thZ2VQcmljZUV4cGVyaW1lbnQiLCJwcmljZVVuaXQiLCJwcmljZSIsImRpc2NvdW50IiwiY3VycmVuY3kiLCJkaXNwbGF5UmFuZ2UiLCJwcmljZUZyb20iLCJwcmljZVRvIiwidG90YWxQcmljZSIsInRvdGFsRGlzY291bnQiLCJwcm9tb1RhZyIsImhpZGVEaXNjb3VudCIsIlN3aXBlciIsInJlbmRlclNlcnZlciIsIm92ZXJmbG93Iiwic3R5bGVzIiwib3ZlcmZsb3dYIiwiYyIsIl9faHRtbCIsIlJlYWN0RE9NIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJyZW5kZXJFbXB0eUNsaWVudCIsInN3aXBlckFzeW5jIiwidGhlbiIsInMiLCJSZWFjdElkU3dpcGVyIiwiZGVmYXVsdCIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImlzU21hbGxTd2lwZXIiLCJpc0Z1bGxXaWR0aFN3aXBlciIsInNzckFuaW1hdGlvbiIsInNob3dMb2FkZXIiLCJfX1NFUlZFUl9fIiwibG9hZE9uRG9jdW1lbnRSZWFkeSIsInJlYnVpbGRPblVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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b0I5QixNQUFwQixHQUE2QixDQUE3QixJQUMvQixDQUFDZ0osYUFEOEIsSUFDYixDQUFDQyxpQkFEVyxHQUU5Qix5QkFGOEIsR0FFRkQsaUJBQWlCLENBQUNDLGlCQUFsQixHQUMxQiw0QkFEMEIsR0FDS0Esb0JBQzdCLE9BRDZCLEdBQ25CO0FBSlQsV0FLSmIsQ0FMSSxFQU1KZSxhQUFhO0FBQUsscUJBQVU7QUFBZixVQUFiLEdBQXlELElBTnJELENBQVA7QUFRRCxPQVRELENBRkosQ0FERjtBQWdCRDtBQUNGOztBQS9HMkMsQyxTQUNyQy9JLFMsR0FBWTtBQUNqQjhJLGdCQUFjN0ksbUJBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QsbUJBQVVNLElBQVgsRUFBaUJOLG1CQUFVSSxNQUEzQixDQUFwQixDQURHO0FBRWpCcUIsWUFBVXpCLG1CQUFVRSxLQUZIO0FBR2pCeUksaUJBQWUzSSxtQkFBVU0sSUFIUjtBQUlqQnNJLHFCQUFtQjVJLG1CQUFVTSxJQUpaO0FBS2pCMEksdUJBQXFCaEosbUJBQVVNLElBTGQ7QUFNakIySSxtQkFBaUJqSixtQkFBVU0sSUFOVjtBQU9qQndJLGNBQVk5SSxtQkFBVU0sSUFQTDtBQVFqQnNILFlBQVU1SCxtQkFBVUc7QUFSSCxDLFNBVVpLLFksR0FBZTtBQUNwQnFJLGdCQUFjLEVBRE07QUFFcEJwSCxZQUFVLEVBRlU7QUFHcEJrSCxpQkFBZSxLQUhLO0FBSXBCQyxxQkFBbUIsS0FKQztBQUtwQkksdUJBQXFCLEtBTEQ7QUFNcEJGLGNBQVksS0FOUTtBQU9wQmxCLFlBQVU7QUFQVSxDOzs7Ozs7Ozs7Ozs7QUNqQnhCO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxNQUFNakIsd0JBQXdCLENBQUMsU0FBRCxDQUE5QiIsImZpbGUiOiJjaXR5LWJsb2NrfmhvbWV+aG90ZWwtZGV0YWlsc35ob3RlbC1saXN0aW5nfmxpc3Rpbmd+cGFja2FnZS1kZXRhaWx+dGVzdGltb25pYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSBcImdsYW1vcm91c1wiO1xuXG5jb25zdCBHVG9vbHRpcEJ1YmJsZURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICctMjBweCcsXG4gIHdpZHRoOiAnMTkwcHgnLFxuICBwYWRkaW5nOiAnOHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gIGJvcmRlclJhZGl1czogJzJweCcsXG4gIGJvdHRvbTogJ2NhbGMoMTAwJSArIDZweCknLFxuICAnJjo6YWZ0ZXInOiB7XG4gICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogJy02cHgnLFxuICAgIHJpZ2h0OiAnMjdweCcsXG4gICAgYm9yZGVyVG9wOiAnNnB4IHNvbGlkICMwMDAnLFxuICAgIGJvcmRlclJpZ2h0OiAnNXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICBib3JkZXJMZWZ0OiAnNXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgfVxufSk7XG5cbmNsYXNzIFRvb2x0aXBDb21tb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheVRvb2x0aXA6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnNob3dUb29sdGlwID0gdGhpcy5zaG93VG9vbHRpcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2hvd1Rvb2x0aXAgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXlUb29sdGlwOiB0cnVlfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVRvb2x0aXA6IGZhbHNlIH0pO1xuICAgIH0sIDE1MDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmVsYXRpdmUnIG9uQ2xpY2s9e3RoaXMuc2hvd1Rvb2x0aXB9PlxuICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5VG9vbHRpcCAmJlxuICAgICAgICAgIDxHVG9vbHRpcEJ1YmJsZURpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZmN3IGYxMic+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgPC9HVG9vbHRpcEJ1YmJsZURpdj5cbiAgICAgICAgfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuVG9vbHRpcENvbW1vbi5wcm9wVHlwZXMgPSB7XG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcENvbW1vbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbmltcG9ydCB7IENsb3NlSWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY2xhc3MgWWVsbG93RG90IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVG9vbHRpcFZpc2libGU6IGZhbHNlLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9mZnNldCA9IChlbCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4geyB0b3A6IHJlY3QudG9wLCBsZWZ0OiByZWN0LmxlZnQgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLm9mZnNldChlLnRhcmdldCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Rvb2x0aXBWaXNpYmxlOiB0cnVlLFxuICAgICAgdG9wOiB2YWx1ZXMudG9wLFxuICAgICAgbGVmdDogdmFsdWVzLmxlZnRcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Rvb2x0aXBWaXNpYmxlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0sIDQwMDApO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNUb29sdGlwVmlzaWJsZTogZmFsc2UsXG4gICAgfSk7XG4gIH07XG4gIGdldFN0eWxlT2JqZWN0ID0gKHRvcCwgbGVmdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCwgbGVmdDogbGVmdFxuICAgIH07XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaG92ZXJEYXRhLCBkb3RCb3hTdHlsZSwgZG90U21hbGxCb3hTdHlsZSwgc3Bpbm5lclN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvb2x0aXBDb250YWluZXJTdGF0ZSA9IHRoaXMuc3RhdGUuaXNUb29sdGlwVmlzaWJsZSA/ICdmbGV4JyA6ICdoaWRlJztcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGlubmVyLW91dGVyJyBzdHlsZT17ZG90Qm94U3R5bGV9PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT0nc3Bpbm5lci15ZWxsb3cgcmVsYXRpdmUnXG4gICAgICAgICAgc3R5bGU9e3NwaW5uZXJTdHlsZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICA+IDxkaXYgY2xhc3NOYW1lPXtgdG9vbHRpcEFycm93ICR7dG9vbHRpcENvbnRhaW5lclN0YXRlfWB9IC8+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncmFkaXVzMTAwIGFic29sdXRlLWNlbnRlciBkb3VibGUtYm91bmNlJ1xuICAgICAgICAgICAgc3R5bGU9e2RvdFNtYWxsQm94U3R5bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JhZGl1czEwMCBkb3VibGUtYm91bmNlMS15ZWxsb3cnIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyYWRpdXMxMDAgZG91YmxlLWJvdW5jZTIteWVsbG93JyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9vbHRpcENvbnRhaW5lciAke3Rvb2x0aXBDb250YWluZXJTdGF0ZX1gfVxuICAgICAgICAgIHN0eWxlPXt0aGlzLmdldFN0eWxlT2JqZWN0KCh0aGlzLnN0YXRlLnRvcCAtIDU0KSwgMTUpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9vbHRpcC10aGVtZS0td2hpdGUgcmVsYXRpdmUnPlxuICAgICAgICAgICAge2hvdmVyRGF0YX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5ZZWxsb3dEb3QucHJvcFR5cGVzID0ge1xuICBob3ZlckRhdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZG90Qm94U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRvdFNtYWxsQm94U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNwaW5uZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cblllbGxvd0RvdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRvdEJveFN0eWxlOiB7fSxcbiAgZG90U21hbGxCb3hTdHlsZToge30sXG4gIHNwaW5uZXJTdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBZZWxsb3dEb3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQWRkcmVzc1RUID0gKHsgaXNIb21lUGFnZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHNmY3cgdGV4dC1jZW50ZXInIGl0ZW1Qcm9wPXtpc0hvbWVQYWdlID8gXCJhZGRyZXNzXCIgOiBudWxsfSBpdGVtU2NvcGU9e2lzSG9tZVBhZ2UgPyBcIml0ZW1zY29wZVwiIDogbnVsbH0gIGl0ZW1UeXBlPXtpc0hvbWVQYWdlID8gXCJodHRwczovL3NjaGVtYS5vcmcvUG9zdGFsQWRkcmVzc1wiIDogbnVsbH0+XG4gICAgICA8cCBjbGFzc05hbWU9J2Z3OSBmMTQgbTAgbWIxNSBzZmM2IHRleHQtdXBwZXJjYXNlICc+Q29ycG9yYXRlIE9mZmljZTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wJyBpdGVtUHJvcD17IGlzSG9tZVBhZ2UgPyBcIm5hbWVcIiA6IG51bGx9PkhvbGlkYXkgVHJpYW5nbGUgVHJhdmVsIFByaXZhdGUgTGltaXRlZDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wJyBpdGVtUHJvcD17aXNIb21lUGFnZSA/IFwic3RyZWV0QWRkcmVzc1wiIDogbnVsbH0+UGxvdCBObyAtIDI5ICwgM3JkICYgNHRoIEZsb29yLCA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9J2YxMiBtMCcgaXRlbVByb3A9e2lzSG9tZVBhZ2UgPyBcImFkZHJlc3NMb2NhbGl0eVwiIDogbnVsbH0+RHluYW1pYyBIb3VzZSwgTWFydXRpIEluZHVzdHJpYWwgQ29tcGxleCw8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9J2YxMiBtMCcgaXRlbVByb3A9e2lzSG9tZVBhZ2UgPyBcIkFkZHJlc3NSZWdpb25cIiA6IG51bGx9PlNlY3RvciAxOCAsIEd1cnVncmFtIC0gPHNwYW4gaXRlbVByb3A9XCJwb3N0YWxDb2RlXCI+MTIyMDE1IDwvc3Bhbj4sIEhhcnlhbmE8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9J2YxMiBtMCcgaXRlbVByb3A9e2lzSG9tZVBhZ2UgPyBcInRlbGVwaG9uZVwiIDogbnVsbH0+TGFuZGxpbmU6IDxhIGhyZWY9J3RlbDoxODAwMTIzNTU1NSc+MTgwMCAxMjMgNTU1NTwvYT48L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTIgbTBcIiBpdGVtUHJvcD17aXNIb21lUGFnZSA/IFwiZW1haWxcIiA6IG51bGx9PkVtYWlsOiA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJtYWlsdG86Y3VzdG9tZXJjYXJlQHRyYXZlbHRyaWFuZ2xlLmNvbVwiPmN1c3RvbWVyY2FyZUB0cmF2ZWx0cmlhbmdsZS5jb208L2E+XG4gICAgICA8L3A+XG5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWRkcmVzc1RULnByb3BUeXBlcyA9IHtcbiAgaXNIb21lUGFnZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkFkZHJlc3NUVC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzSG9tZVBhZ2U6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzVFQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBZGRyZXNzVFQgPSAoKSA9PiAoXG4gIDxwIGNsYXNzTmFtZT0nZjEyIHBmYzQnPkFsbCByaWdodHMgcmVzZXJ2ZWQgJmNvcHk7IDIwMjA8L3A+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzVFQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vRm9vdGVyTGlua3Muc2Nzcyc7XG5cblxuY29uc3QgRm9vdGVyTGlua3MgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSc+XG4gICAgPHVsIGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBmbGV4V3JhcCBqdXN0aWZ5Q2VudGVyIGZvb3Rlci1saW5rcy1tZW51Jz5cbiAgICAgIDxsaT48YSBocmVmPVwiL2Fib3V0dXNcIj5BYm91dCBVczwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvY2FyZWVyXCI+V2UgQXJlIEhpcmluZyE8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiL3RlYW1cIj5UZWFtPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi9ibG9nXCI+QmxvZzwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvdGVzdGltb25pYWxzXCI+VGVzdGltb25pYWxzPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi90bmNcIj5UJkM8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiL3ByaXZhY3lcIj5Qcml2YWN5IFBvbGljeTwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvY2FuY2VsbGF0aW9uXCI+Q2FuY2VsbGF0aW9uPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi9GQVFzXCI+RkFRczwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvY29udGFjdF91c1wiPkNvbnRhY3QgVXM8L2E+PC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckxpbmtzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyLWxpbmtzLW1lbnVcIjogXCJfMXhlZ2xcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQge1xuICAgIEZCSWNvbldoaXRlLCBHb29nbGVJY29uV2hpdGUsIEluc3RhZ3JhbSwgVHdpdHRlciwgUGludGVyZXN0SWNvblxuICB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgU29jaWFsSWNvbnNDb250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLmZhY2Vib29rSWNvbic6IHtcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgaGVpZ2h0OiAnMTlweCcsXG4gICAgfSxcbiAgfSxcbiAgJyYgLnR3aXR0ZXJJY29uJzoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMTdweCcsXG4gICAgICBoZWlnaHQ6ICcxNHB4JyxcbiAgICB9LFxuICB9LFxuICAnJiAucGludHJlc3RJY29uJzoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICB9LFxuICB9LFxuICAnJiAuZ29vZ2xlSWNvbic6IHtcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzIxcHgnLFxuICAgICAgaGVpZ2h0OiAnMTNweCcsXG4gICAgfSxcbiAgfSxcbiAgJyYgLmluc3RhSWNvbic6IHtcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBDb25uZWN0SWNvbnMgPSBnbGFtb3JvdXMuYSh7XG4gIG1pbldpZHRoOiAnMzBweCcsXG4gIG1heFdpZHRoOiAnMzBweCcsXG4gIGhlaWdodDogJzMwcHgnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICBtYXJnaW5SaWdodDogJzAnXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NpYWxMaW5rcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZnVsbFwiPlxuICAgICAgICA8U29jaWFsSWNvbnNDb250YWluZXIgY2xhc3NOYW1lPVwiYXRfc29jaWFsaWNvbnMgZmxleCBhbGlnbkNlbnRlciB3ZnVsbCBqdXN0aWZ5Q2VudGVyXCI+XG4gICAgICAgICAgPENvbm5lY3RJY29ucyBjbGFzc05hbWU9XCJmYWNlYm9va0ljb25cIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3RyYXZlbHRyaWFuZ2xlXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCIgPjxGQkljb25XaGl0ZSAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICAgIDxDb25uZWN0SWNvbnMgY2xhc3NOYW1lPVwidHdpdHRlckljb25cIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90cmF2ZWx0cmlhbmdsZVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPjxUd2l0dGVyIC8+XG4gICAgICAgICAgPC9Db25uZWN0SWNvbnM+XG4gICAgICAgICAgPENvbm5lY3RJY29ucyBjbGFzc05hbWU9XCJwaW50cmVzdEljb25cIiBocmVmPVwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS90cmF2ZWx0cmlhbmdsZS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj48UGludGVyZXN0SWNvbiAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICAgIDxDb25uZWN0SWNvbnMgY2xhc3NOYW1lPVwiZ29vZ2xlSWNvblwiIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8rdHJhdmVsdHJpYW5nbGUvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+PEdvb2dsZUljb25XaGl0ZSAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICAgIDxDb25uZWN0SWNvbnMgY2xhc3NOYW1lPVwiaW5zdGFJY29uXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHJhdmVsdHJpYW5nbGUvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+PEluc3RhZ3JhbSAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICA8L1NvY2lhbEljb25zQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFja2FnZS1jYXJkXCI6IFwiXzJFUDdiXCIsXG5cdFwiZXhwLTFcIjogXCJfMzV3UW9cIixcblx0XCJhdF9wYWNrYWdlRGF5c0NvdW50XCI6IFwiX0RGWWNvXCIsXG5cdFwic3Rhci1yYXRpbmdzLXNlbGVjdGlvblwiOiBcIl8xNFpDVVwiLFxuXHRcImhvdGVsU3Rhckl0ZW1cIjogXCJfMnFKN0tcIixcblx0XCJtb3JlLXRoYW4tdGhyZWUtc3RhcnNcIjogXCJfMW1KeVRcIixcblx0XCJkaXNjb3VudC1yaWJib25cIjogXCJfMVA3eHhcIixcblx0XCJwYWNrYWdlLWNpdGllc1wiOiBcIl8yZnZ6RFwiLFxuXHRcInBhY2thZ2UtY2l0aWVzLWxpc3RcIjogXCJfM1hlQ3hcIixcblx0XCJsaXN0LWhlYWRpbmdcIjogXCJfSVJMYkZcIixcblx0XCJwYWNrYWdlLXByaWNlXCI6IFwiXzNvSUU3XCIsXG5cdFwib3JpZ2luYWwtcHJpY2VcIjogXCJfM3FwVjhcIixcblx0XCJzdGFydGluZy1mcm9tXCI6IFwiX0F5WTZ5XCIsXG5cdFwicGFja2FnZS1pbWFnZS10aXRsZVwiOiBcIl8xXzgzVFwiLFxuXHRcImlibG9ja1wiOiBcIl8zbGpHaFwiLFxuXHRcImNoZWNrYm94LWNvbW1vblwiOiBcIl8yZjU5WlwiLFxuXHRcInJhZGlvLWNvbW1vbi1yb3VuZFwiOiBcIl8ybVFpU1wiLFxuXHRcInRvb2x0aXBUZXh0U3R5bGVcIjogXCJfMUNkb09cIixcblx0XCJwYWNrYWdlLWluZm8taWNvblwiOiBcIl8xcmF6aVwiLFxuXHRcInBhY2thZ2UtaW5mby1pY29uLWN1c3RvbVwiOiBcIl8zWTllR1wiLFxuXHRcInRvb2x0aXBkYXRhLXVwXCI6IFwiXzJJMHlDXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9QYWNrYWdlQ2l0aWVzLnNjc3MnO1xuXG5jb25zdCByZW5kZXJQYWNrYWdlQ2l0aWVzRnJvbUFycmF5ID0gKGNpdGllcywgaXNEZWFsc0NhcmQpID0+IHtcbiAgaWYgKCFjaXRpZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZS1jaXRpZXNcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWNrYWdlLWNpdGllcy1saXN0XCI+XG4gICAgICAgIHtjaXRpZXMubWFwKChjaXR5LCBpKSA9PiA8bGkgY2xhc3NOYW1lPXtpc0RlYWxzQ2FyZCA/ICdmMTInIDogJyd9IGtleT17aX0+e2NpdHl9PC9saT4pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcblxufTtcblxuY29uc3QgcmVuZGVyUGFja2FnZUNpdGllc0Zyb21PYmplY3QgPSAoY2l0aWVzV2l0aERheXMsIGlzRGVhbHNDYXJkKSA9PiB7XG4gIGNvbnN0IGNpdGllcyA9IE9iamVjdC5rZXlzKGNpdGllc1dpdGhEYXlzKTtcblxuICBpZiAoIWNpdGllcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWNrYWdlLWNpdGllc1wiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBhY2thZ2UtY2l0aWVzLWxpc3RcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3NyBmMTIgbGlzdC1oZWFkaW5nIGhpZGVcIj5DaXRpZXM6PC9saT5cbiAgICAgICAge1xuICAgICAgICAgIGNpdGllcy5tYXAoKGNpdHksIGkpID0+IDxsaSBjbGFzc05hbWU9e2lzRGVhbHNDYXJkID8gJ2YxMicgOiAnJ30ga2V5PXtpfT5cbiAgICAgICAgICAgIHtjaXR5fSB7Y2l0aWVzV2l0aERheXNbY2l0eV0gPyBgICgke2NpdGllc1dpdGhEYXlzW2NpdHldfUQpYCA6IG51bGx9XG4gICAgICAgICAgPC9saT4pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBQYWNrYWdlQ2l0aWVzID0gKHsgY2l0aWVzLCBpc0RlYWxzQ2FyZCB9KSA9PiB7XG4gIGlmIChjaXRpZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiByZW5kZXJQYWNrYWdlQ2l0aWVzRnJvbUFycmF5KGNpdGllcywgaXNEZWFsc0NhcmQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZW5kZXJQYWNrYWdlQ2l0aWVzRnJvbU9iamVjdChjaXRpZXMsIGlzRGVhbHNDYXJkKTtcbiAgfVxufTtcblxuUGFja2FnZUNpdGllcy5wcm9wVHlwZXMgPSB7XG4gIGNpdGllczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSkuaXNSZXF1aXJlZCxcbiAgaXNEZWFsc0NhcmQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5QYWNrYWdlQ2l0aWVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNEZWFsc0NhcmQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlQ2l0aWVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFja2FnZS1jaXRpZXNcIjogXCJfMmo4OTRcIixcblx0XCJwYWNrYWdlLWNpdGllcy1saXN0XCI6IFwiX25UTDBGXCIsXG5cdFwiZjEyXCI6IFwiXzN4UDU3XCIsXG5cdFwiYWRkQ29tcGFyZURpdlwiOiBcIl8ybGRVQlwiLFxuXHRcImZpeGVkLW1lbnUtYnV0dG9uXCI6IFwiXzFMeXRaXCJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGlzY291bnQtcmliYm9uXCI6IFwiXzF3Z1gxXCIsXG5cdFwicGFja2FnZS1pbmZvLWljb25cIjogXCJfMTR1X1NcIixcblx0XCJwYWNrYWdlLWluZm8taWNvbi1jdXN0b20tbGVmdFwiOiBcIl8yVE81alwiLFxuXHRcInRvb2x0aXBkYXRhLXVwXCI6IFwiXzFFdHlhXCIsXG5cdFwidG9vbHRpcC11cHdhcmRzXCI6IFwiXzFZNlVUXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9QYWNrYWdlRGF5c0Rpc2NvdW50LnNjc3MnO1xuXG5jb25zdCBQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCA9ICh7IGRheXMsIG5pZ2h0cywgaXNQYWNrYWdlUmV2YW1wfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgPHAgY2xhc3NOYW1lPXtgYXRfcGFja2FnZURheXNDb3VudCBmdzcgdGV4dC1sZWZ0ICR7aXNQYWNrYWdlUmV2YW1wID8gJ2YxMCBhdF9wYWNrYWdlJyA6ICdmMTInfWB9PntkYXlzfSBEYXlzICYge25pZ2h0c30gTmlnaHRzIDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5QYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudC5wcm9wVHlwZXMgPSB7XG4gIGRheXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmlnaHRzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGlzUGFja2FnZVJldmFtcDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VEYXlzRGlzY291bnRFeHBlcmltZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9QYWNrYWdlSW1nVGl0bGUuc2Nzcyc7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmNvbnN0IFBhY2thZ2VJbWdUaXRsZSA9ICh7IG5hbWUsIGltYWdlVXJsLCBpbWFnZWtpdFVybCwgYWx0VGV4dCwgaXNMYXJnZUltZyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtcbiAgICBpc0xhcmdlSW1nID9cbiAgICAgICdyb3cgcm93LSByZWxhdGl2ZSBib3gtd2l0aC1sYXllciBwYWNrYWdlLWltYWdlLXRpdGxlIHBhY2thZ2UtaW1hZ2UtdGl0bGUtbGFyZ2UnIDpcbiAgICAgICdyb3cgcm93LSByZWxhdGl2ZSBib3gtd2l0aC1sYXllciBwYWNrYWdlLWltYWdlLXRpdGxlJ1xuICB9PlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhY2thZ2UtaW1nIHJlbGF0aXZlXCI+XG4gICAgICA8SW1nIHdpZHRoPXs0MTF9IGhlaWdodD17Mjg2fVxuICAgICAgICAgICBpa1NyYz17aW1hZ2VraXRVcmx9XG4gICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgIGFsdD17YWx0VGV4dH1cbiAgICAgICAgICAgaXRlbVByb3A9XCJpbWFnZVwiXG4gICAgICAgICAgIGl0ZW1UeXBlPVwiaHR0cHM6Ly9zY2hlbWEub3JnL2ltYWdlXCIgLz5cbiAgICA8L3NwYW4+XG4gICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHozIGIxMCBsMCByMCBmdzkgZjE0IHBsMTUgcHIxNSBzZmN3XCI+eyBuYW1lIH08L2gzPlxuICA8L2Rpdj5cbik7XG5cblBhY2thZ2VJbWdUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2VraXRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0VGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpc0xhcmdlSW1nOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZUltZ1RpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMYXJnZUltZzogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VJbWdUaXRsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhY2thZ2UtaW1hZ2UtdGl0bGVcIjogXCJfMXVBSm1cIixcblx0XCJwYWNrYWdlLWltZ1wiOiBcIl9GZDRvZlwiLFxuXHRcInBhY2thZ2UtaW1hZ2UtdGl0bGUtbGFyZ2VcIjogXCJfMmlyNFFcIlxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wYXJzZXJzJztcbmltcG9ydCB7IEluY2x1c2lvbk5vdGlmaWNhdGlvbiB9IGZyb20gJ2NvbnN0YW50cy9QYWNrYWdlcy9JbmNsdXNpb25Ob3RpZmljYXRpb24nO1xuaW1wb3J0IFllbGxvd0RvdCBmcm9tICcuLy4uL0NvbW1vbi9ZZWxsb3dEb3QnO1xuaW1wb3J0ICcuL1BhY2thZ2VJbmNFeGMuc2Nzcyc7XG5cbmNvbnN0IGdldEljb25UZXh0ID0gKGluY2x1c2lvbiwgaG90ZWxJbmZvKSA9PiB7XG4gIGlmIChpbmNsdXNpb24ua2V5ID09PSAnaG90ZWwnICYmIGhvdGVsSW5mbykge1xuICAgIHJldHVybiBgVXB0byAke2hvdGVsSW5mb1swXX0gU3RhcnNgO1xuICB9XG4gIHJldHVybiBpbmNsdXNpb24udGV4dDtcbn07XG5cbmNvbnN0IFBhY2thZ2VJbmNFeGMgPSAoeyBpbmNsdXNpb25zLCBpZCwgbm9TY3JvbGwsIGhvdGVsSW5mbywgaXNQYWNrYWdlUmV2YW1wIH0pID0+IHtcbiAgY29uc3QgaW5jbHVzaW9uc0F2YWwgPSBpc1BhY2thZ2VSZXZhbXAgPyBpbmNsdXNpb25zLmZpbHRlcihpbmNsdXNpb24gPT5cbiAgICBpbmNsdXNpb24uYXZhaWxhYmxlKS5zbGljZSgwLDQpIDogaW5jbHVzaW9ucztcblxuICBjb25zdCBpbmNsdXNpb25MaXN0ID0gaW5jbHVzaW9uc0F2YWwubWFwKFxuICAgIChpbmNsdXNpb24sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBJY29uQ29tcG9uZW50ID0gSWNvbnNbY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGluY2x1c2lvbi5rZXkucmVwbGFjZSgvW1xccy1fXS9nLCAnJykpXSB8fCBJY29ucy5EZWZhdWx0O1xuICAgICAgY29uc3QgZGlzYWJsZWRFbGVtZW50Q2xhc3MgPSBpbmNsdXNpb24uYXZhaWxhYmxlID8gJycgOiAnbm90LWluY2x1ZGVkJztcbiAgICAgIGNvbnN0IGRpc2FibGVkSWNvbkNsYXNzID0gaW5jbHVzaW9uLmF2YWlsYWJsZSA/ICcnIDogJ2dyZXlzY2FsZSc7XG4gICAgICBjb25zdCBpbmNsdXNpb25UZXh0SGlkZGVuID0gaW5jbHVzaW9uLnRleHQgPyAnJyA6ICdoaWRlJztcbiAgICAgIGNvbnN0IEluY2x1c2lvbk5vdGlmaWNhdGlvblByZXNlbnQgPSAoaW5jbHVzaW9uLmF2YWlsYWJsZSAmJiAoSW5jbHVzaW9uTm90aWZpY2F0aW9uLmluZGV4T2YoaW5jbHVzaW9uLmtleSkgPiAtMSkpID8gJ3JlbGF0aXZlJyA6ICcnO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGluY2wtZXhjbC1ib3ggJHtpbmNsdXNpb25UZXh0SGlkZGVufSAke2Rpc2FibGVkRWxlbWVudENsYXNzfSAke0luY2x1c2lvbk5vdGlmaWNhdGlvblByZXNlbnR9YH0ga2V5PXtgJHtpZH1fJHtpbmNsdXNpb24ua2V5fV8ke2luZGV4fWB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIChpbmNsdXNpb24uYXZhaWxhYmxlICYmIChJbmNsdXNpb25Ob3RpZmljYXRpb24uaW5kZXhPZihpbmNsdXNpb24ua2V5KSA+IC0xKSkgP1xuICAgICAgICAgICAgPFllbGxvd0RvdCBpZD1cImZsaWdodE1lc3NhZ2VcIiBkb3RCb3hTdHlsZT17eyB3aWR0aDogJzEwcHgnLCBoZWlnaHQ6ICcxMHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzZweCcsIHJpZ2h0OiAnM3B4JyB9fSBkb3RTbWFsbEJveFN0eWxlPXt7IHdpZHRoOiAnNXB4JywgaGVpZ2h0OiAnNXB4JyB9fSBzcGlubmVyU3R5bGU9e3sgd2lkdGg6ICcxMHB4JywgaGVpZ2h0OiAnMTBweCcsIHpJbmRleDogJzEnIH19ICBob3ZlckRhdGE9XCJGbGlnaHQgcHJpY2VzIGFyZSBkeW5hbWljIGFuZCBtYXkgY2hhbmdlIGF0IHRoZSB0aW1lIG9mIGJvb2tpbmdcIiAvPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluY2wtZXhjbC1pbWdcIj5cbiAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IGtleT17YCR7aWR9XyR7aW5jbHVzaW9uLmtleX1fJHtpbmRleH1gfSBjbGFzc05hbWU9e2Rpc2FibGVkSWNvbkNsYXNzfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTBcIj57Z2V0SWNvblRleHQoaW5jbHVzaW9uLCBob3RlbEluZm8pfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHJvdyByb3ctIGluY2wtZXhjbC1jb24gJHtub1Njcm9sbCA/ICdpbmMtbm8tc2Nyb2xsJyA6ICcnfSBgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaW5jbC1leGNsLWNvbi1pbm5lclwiPlxuICAgICAgICB7aW5jbHVzaW9uTGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFja2FnZUluY0V4Yy5wcm9wVHlwZXMgPSB7XG4gIGluY2x1c2lvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBob3RlbEluZm86IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbm9TY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICBpc1BhY2thZ2VSZXZhbXA6IFByb3BUeXBlcy5ib29sXG59O1xuXG5QYWNrYWdlSW5jRXhjLmRlZmF1bHRQcm9wcyA9IHtcbiAgbm9TY3JvbGw6IGZhbHNlLFxuICBpZDogJ2RlZmF1bHRfMScsXG4gIGlzUGFja2FnZVJldmFtcDogZmFsc2Vcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUluY0V4YztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluY2wtZXhjbC1jb25cIjogXCJfMjFpSExcIixcblx0XCJpbmNsLWV4Y2wtY29uLWlubmVyXCI6IFwiXzFPNmd5XCIsXG5cdFwicGFja2FnZS1jYXJkXCI6IFwiXzF1QWNCXCIsXG5cdFwiaW5jbC1leGNsLWNvbi1pbm5lci1kZWFsc1wiOiBcIl8zUF9WaFwiLFxuXHRcImluY2wtZXhjbC1ib3hcIjogXCJfU0IxZzNcIixcblx0XCJub3QtaW5jbHVkZWRcIjogXCJfM1lxMGtcIixcblx0XCJpbmNsLWV4Y2wtaW1nXCI6IFwiXzN5STUzXCIsXG5cdFwiaW5jLW5vLXNjcm9sbFwiOiBcIl8yOUIyQ1wiLFxuXHRcImluY2x1c2lvbkRlYWxzXCI6IFwiX3RmaUZBXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IHBhcnNlUHJpY2UsIGdldFBlcmNlbnRhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9wYXJzZXJzJztcbmltcG9ydCB7IEluZm9JY29uLCBUVFJlY29tbWVuZGVkSWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBUb29sdGlwQ29tbW9uIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Rvb2x0aXBDb21tb24nO1xuXG5jbGFzcyBQYWNrYWdlUHJpY2VFeHBlcmltZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJpY2VVbml0LCBwcmljZSwgZGlzY291bnQsIGN1cnJlbmN5LCBkaXNwbGF5UmFuZ2UsIHByaWNlRnJvbSwgcHJpY2VUbywgdG90YWxQcmljZSwgdG90YWxEaXNjb3VudCwgcHJvbW9UYWcsXG4gICAgICBoaWRlRGlzY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjEwIG10OCBwZmM0IHBiNSBmdzQgc3RhcnRpbmctZnJvbSBibG9ja1wiPlN0YXJ0aW5nIGZyb206PC9zcGFuPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYWNrYWdlLXByaWNlIHNmYzMgZnc3IGYxOCBwYjBcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtwYXJzZVByaWNlKHsgcHJpY2U6IHByaWNlRnJvbSB8fCAocHJpY2UgLSBkaXNjb3VudCksIGN1cnJlbmN5IH0pfS8tXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhaGlkZURpc2NvdW50ID9cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYxMiBmdzQgbWw4IHBmYzMgdGRsIG9yaWdpbmFsLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZVByaWNlKHsgcHJpY2U6IHByaWNlVG8gfHwgcHJpY2UsIGN1cnJlbmN5IH0pfS8tXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+IDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMCBtdDRcIj57cHJpY2VVbml0fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sOCBtdDggZGlzY291bnQtcmliYm9uLWNvbnRhaW5lciBmbGV4IGZsZXhGdWxsIGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICFoaWRlRGlzY291bnQgP1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50LXJpYmJvbiBmcmlnaHQgbXI0XCI+e2dldFBlcmNlbnRhZ2UoeyBwcmljZTogcHJpY2UsIGRpc2NvdW50OiBkaXNjb3VudCB9KX0lIE9mZjwvc3Bhbj4gOiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxUb29sdGlwQ29tbW9uIG1lc3NhZ2U9eydFeGFjdCBwcmljZXMgbWF5IHZhcnkgYmFzZWQgb24gYXZhaWxhYmlsaXR5Lid9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LTI0IHAzIHBsMCBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8SW5mb0ljb24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Rvb2x0aXBDb21tb24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RnVsbCBqdXN0aWZ5RW5kXCI+XG4gICAgICAgICAgICAgIHtwcm9tb1RhZyA/XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBDb21tb24gbWVzc2FnZT17J1JlY29tbWVuZGVkIGJ5IFRyYXZlbFRyaWFuZ2xlJ30+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LTI0IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8VFRSZWNvbW1lbmRlZEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcENvbW1vbj4gOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFja2FnZVByaWNlRXhwZXJpbWVudC5wcm9wVHlwZXMgPSB7XG4gIHByaWNlVW5pdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc3BsYXlSYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIHByaWNlRnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpY2VUbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZURpc2NvdW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgdG90YWxQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0b3RhbERpc2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHByb21vVGFnOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cblBhY2thZ2VQcmljZUV4cGVyaW1lbnQuZGVmYXVsdFByb3BzID0ge1xuICBwcmljZVVuaXQ6ICdwZXIgcGVyc29uJyxcbiAgY3VycmVuY3k6ICdSdXBlZScsXG4gIGRpc3BsYXlSYW5nZTogZmFsc2UsXG4gIHByaWNlRnJvbTogbnVsbCxcbiAgcHJpY2VUbzogbnVsbCxcbiAgaGlkZURpc2NvdW50OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZVByaWNlRXhwZXJpbWVudDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgJy4vU3dpcGVyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNzckFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzU21hbGxTd2lwZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzRnVsbFdpZHRoU3dpcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2FkT25Eb2N1bWVudFJlYWR5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZWJ1aWxkT25VcGRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dMb2FkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG92ZXJmbG93OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3NyQW5pbWF0aW9uOiB7fSxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgaXNTbWFsbFN3aXBlcjogZmFsc2UsXG4gICAgaXNGdWxsV2lkdGhTd2lwZXI6IGZhbHNlLFxuICAgIGxvYWRPbkRvY3VtZW50UmVhZHk6IGZhbHNlLFxuICAgIHNob3dMb2FkZXI6IGZhbHNlLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9O1xuICBzdGF0ZSA9IHt9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN3aXBlckFzeW5jID0gKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3dpcGVyJyAqLyBcInJlYWN0LWlkLXN3aXBlclwiKVxuICAgICAgICAudGhlbihzID0+IHRoaXMuc2V0U3RhdGUoeyBSZWFjdElkU3dpcGVyOiBzLmRlZmF1bHQgfSkpO1xuXG4gICAgLy8gaWYgKHRoaXMucHJvcHMubG9hZE9uRG9jdW1lbnRSZWFkeSkge1xuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA/IHN3aXBlckFzeW5jKCkgOiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc3dpcGVyQXN5bmMpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9XG4gIH1cblxuICByZW5kZXJTZXJ2ZXIgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlcyA9IHsgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6IHdpZHRoLCBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlPXtzdHlsZXN9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9faHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKGMpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHdcXFddKz8pXFwvPi9nLCBgPGRpdiBzdHlsZT1cIndpZHRoOiR7d2lkdGh9cHg7IGhlaWdodDogJHtoZWlnaHR9cHhcIiAvPmApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDogJ3N3aXBlclNpbmdsZUNoaWxkJ30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydsYXp5bG9hZGluZyd9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBfX2h0bWwgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyRW1wdHlDbGllbnQgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSA/ICdzd2lwZXJDdXN0b21XaWR0aCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQnfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IFJlYWN0SWRTd2lwZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpc1NtYWxsU3dpcGVyLCBpc0Z1bGxXaWR0aFN3aXBlciwgc3NyQW5pbWF0aW9uLCBzaG93TG9hZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKF9fU0VSVkVSX18pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNlcnZlcihzc3JBbmltYXRpb24pO1xuICAgIH1cblxuICAgIGlmICghUmVhY3RJZFN3aXBlcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRW1wdHlDbGllbnQoc3NyQW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0SWRTd2lwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICAgICFpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlcikgP1xuICAgICAgICAgICAgICAgICdzd2lwZXJDdXN0b21XaWR0aCBibG9jaycgOiBpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlciA/XG4gICAgICAgICAgICAgICAgICAnc21hbGxTd2lwZXJDb250YWluZXIgYmxvY2snIDogaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgICAnd2Z1bGwnIDogJ3N3aXBlclNpbmdsZUNoaWxkIHdmdWxsIGJsb2NrJ30+XG4gICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAge3Nob3dMb2FkZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1sYXp5LXByZWxvYWRlclwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L1JlYWN0SWRTd2lwZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3dpcGVyLXByZWxvYWRlci1zcGluXCI6IFwiXzMzMDhZXCJcbn07IiwiZXhwb3J0IGNvbnN0IEluY2x1c2lvbk5vdGlmaWNhdGlvbiA9IFsnZmxpZ2h0cyddO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==