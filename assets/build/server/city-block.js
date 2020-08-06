require("source-map-support").install();
exports.ids = ["city-block"];
exports.modules = {

/***/ "./app-v2/modules/banner/Banner.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/banner/Banner.js ***!
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _BannerContent = _interopRequireDefault(__webpack_require__(/*! ./BannerContent */ "./app-v2/modules/banner/BannerContent.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _seoHelpers = __webpack_require__(/*! helpers/seoHelpers */ "./app/helpers/seoHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BannerContainer = _glamorous.default.div(({
  isLargeBanner
}) => ({
  position: 'relative',
  height: isLargeBanner ? '270px' : '150px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    minWidth: 'auto',
    maxWidth: 'none',
    minHeight: '100%'
  },
  '&:after': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    top: '0',
    left: '0',
    content: '\' \'',
    zIndex: '1'
  }
}));

const Banner = ({
  banner,
  isLargeBanner,
  canonicalUrl,
  isCityBlock,
  location
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(_reactHelmet.Helmet, null, (0, _seoHelpers.createHelmetBanner)(banner.metaTags, canonicalUrl, location.pathname)), _react.default.createElement("div", {
  className: "clearfix sbc5 relative"
}, _react.default.createElement(BannerContainer, {
  isLargeBanner: isLargeBanner,
  className: "clearfix"
}, isCityBlock ? _react.default.createElement(_Img.default, {
  width: 500,
  height: 270,
  src: banner.image,
  ikSrc: banner.imagekitUrl,
  alt: banner.altText
}) : _react.default.createElement(_Img.default, {
  width: 500,
  height: 270,
  src: banner.image && banner.image.mobile,
  alt: banner.altText
})), _react.default.createElement("div", {
  className: "absolute p15 l0 r0 b0 z2"
}, _react.default.createElement(_BannerContent.default, {
  banner: banner
}))));

Banner.propTypes = {
  banner: _propTypes.default.object.isRequired,
  metaTags: _propTypes.default.array,
  location: _propTypes.default.object,
  showExploreForm: _propTypes.default.bool,
  showDuration: _propTypes.default.bool,
  bannerStyle: _propTypes.default.object,
  isLargeBanner: _propTypes.default.bool,
  canonicalUrl: _propTypes.default.string,
  isCityBlock: _propTypes.default.bool
};
Banner.defaultProps = {
  metaTags: [],
  showExploreForm: false,
  showDuration: false,
  bannerStyle: {},
  isLargeBanner: false,
  canonicalUrl: '',
  isCityBlock: false
};
var _default = Banner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/banner/BannerContent.js":
/*!************************************************!*\
  !*** ./app-v2/modules/banner/BannerContent.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BannerContent = ({
  banner,
  showDescription
}) => {
  return _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement("div", {
    className: "clearfix text-left"
  }, _react.default.createElement("h1", {
    className: "sfcw f24 fw9 sfcw m0 mb4"
  }, banner.title), showDescription && _react.default.createElement("h5", {
    className: "sfcw fw4 f12 m0"
  }, banner.description)));
};

BannerContent.propTypes = {
  banner: _propTypes.default.object.isRequired,
  showDescription: _propTypes.default.bool
};
BannerContent.defaultProps = {
  showDescription: true
};
var _default = BannerContent;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/banner/index.js":
/*!****************************************!*\
  !*** ./app-v2/modules/banner/index.js ***!
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

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/banner/action.js");

var _Banner = _interopRequireDefault(__webpack_require__(/*! ./Banner */ "./app-v2/modules/banner/Banner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  banner: (0, _get2.default)(state, 'banner.data.banner', {}) // Cityblock data banner

}))(_Banner.default));
const hlpContainer = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  banner: (0, _get2.default)(state, 'hlp.data.data.banner', {}) // HLP data banner

}))(_Banner.default));
var _default = {
  container,
  hlpContainer,
  actions: {
    fetchBannerData: _action.fetchBannerData
  },
  defaultAction: _action.fetchBannerData
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/CityBlockNav.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/cityBlock/CityBlockNav.js ***!
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

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _NavLink = _interopRequireDefault(__webpack_require__(/*! ./NavLink */ "./app-v2/modules/cityBlock/NavLink.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _utils = __webpack_require__(/*! app/helpers/utils */ "./app/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Ul = _glamorous.default.ul({
  padding: '0',
  margin: '0',
  display: 'flex',
  overflow: 'auto',
  '& li': {
    display: 'inline-block',
    '& a': {
      lineHeight: '1.29',
      fontSize: '14px',
      fontWeight: '700',
      color: '#3e3e3e',
      display: 'block',
      textAlign: 'center',
      padding: '16px',
      minWidth: '120px',
      position: 'relative',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      '& span.line': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        display: 'block',
        width: '100%',
        height: '2px',
        background: 'transparent',
        content: '\' \''
      }
    }
  },
  '& .navLinkSpan.active': {
    '& a': {
      color: '#009688',
      '& span.line': {
        background: '#009688'
      }
    }
  }
});

let CityBlockNav = class CityBlockNav extends _react.Component {
  componentDidMount() {
    (0, _FormDataFormatter.setCookie)('cb_dt', (0, _parsers.capitalizeAndReplaceDash)(this.props.destination));
    (0, _utils.setVisitedDestinationsCookie)((0, _parsers.capitalizeAndReplaceDash)(this.props.destination));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.destination !== this.props.destination) {
      (0, _FormDataFormatter.setCookie)('cb_dt', (0, _parsers.capitalizeAndReplaceDash)(this.props.destination));
      (0, _utils.setVisitedDestinationsCookie)((0, _parsers.capitalizeAndReplaceDash)(this.props.destination));
    }
  }

  render() {
    const {
      tabs
    } = this.props;
    return _react.default.createElement(_reactStickynode.default, {
      enabled: true,
      top: 0,
      innerZ: 4
    }, _react.default.createElement("div", {
      className: "sbcw bb"
    }, _react.default.createElement(Ul, null, tabs && tabs.length && tabs.map((tab, i) => _react.default.createElement("li", null, tab.name === 'Gallery' ? null : _react.default.createElement(_NavLink.default, {
      key: i,
      to: `${tab.url}`
    }, _react.default.createElement("span", null, tab.name)))))));
  }

};
CityBlockNav.propTypes = {
  destination: _propTypes.default.string,
  tabs: _propTypes.default.array.isRequired,
  location: _propTypes.default.object.isRequired
};
CityBlockNav.defaultProps = {
  destination: ''
};
var _default = CityBlockNav;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/NavLink.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/cityBlock/NavLink.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let NavLink = class NavLink extends _react.Component {
  render() {
    const isActive = this.context.router.isActive(this.props.to, true);
    const className = isActive ? 'active navLinkSpan' : 'navLinkSpan';
    return _react.default.createElement("span", {
      className: className
    }, _react.default.createElement(_reactRouter.Link, this.props, this.props.children, _react.default.createElement("span", {
      className: "line"
    })));
  }

};
NavLink.propTypes = {
  to: _propTypes.default.string.isRequired,
  children: _propTypes.default.string.isRequired
};
NavLink.contextTypes = {
  router: _propTypes.default.object,
  location: _propTypes.default.object
};
var _default = NavLink;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/common/Heading.js":
/*!******************************************!*\
  !*** ./app-v2/modules/common/Heading.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

__webpack_require__(/*! ./Heading.scss */ "./app-v2/modules/common/Heading.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Heading = ({
  data,
  type,
  showViewAll
}) => _react.default.createElement("div", {
  className: "clearfix mb15 relative"
}, data.heading && data.subHeading ? _react.default.createElement("span", {
  className: "wfull block"
}, type == 'main-heading' ? _react.default.createElement("h2", {
  className: "mainHeading ellipsis f16 m0 mb8 pfc1"
}, data.heading) : _react.default.createElement("h2", {
  className: "mainHeading ellipsis f16 m0 mb8 pfc3"
}, data.heading), _react.default.createElement("p", {
  className: "m0 f14 pfc4"
}, data.subHeading)) : _react.default.createElement("h2", {
  className: "mainHeading ellipsis f16 m0 pfc1"
}, data.heading), showViewAll ? _react.default.createElement(_reactRouter.Link, {
  to: data.url,
  className: "f12 absolute r0 t4"
}, "View All") : null);

Heading.propTypes = {
  data: _propTypes.default.object,
  type: _propTypes.default.string,
  showViewAll: _propTypes.default.bool
};
Heading.defaultProps = {
  data: {
    heading: '',
    subHeading: '',
    url: '#'
  },
  type: '',
  showViewAll: false
};
var _default = Heading;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/common/Heading.scss":
/*!********************************************!*\
  !*** ./app-v2/modules/common/Heading.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"mainHeading": "_mo1x7"
};

/***/ }),

/***/ "./app-v2/modules/faqs/Faqs.js":
/*!*************************************!*\
  !*** ./app-v2/modules/faqs/Faqs.js ***!
  \*************************************/
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

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _ScrollWindowForSticky = _interopRequireDefault(__webpack_require__(/*! components/Common/ScrollWindowForSticky */ "./app/components/Common/ScrollWindowForSticky.js"));

var _faqCm = _interopRequireDefault(__webpack_require__(/*! ./faq.cm.scss */ "./app-v2/modules/faqs/faq.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      data,
      hotelDisplayName
    } = this.props;

    if (!(data.faqs && data.faqs.length)) {
      return _react.default.createElement("div", null);
    }

    ;
    return _react.default.createElement("div", {
      className: "clearfix sbcw p15 faqs",
      itemScope: true,
      itemType: "http://schema.org/FAQPage"
    }, _react.default.createElement("div", {
      className: "clearfix mb8"
    }, _react.default.createElement(_Heading.default, {
      data: {
        title: data.title,
        heading: data.heading,
        forHeading: hotelDisplayName
      }
    })), _react.default.createElement("div", {
      className: "clearfix"
    }, data.faqs instanceof Array && data.faqs.slice(0, this.state.visible).map((faq, index) => _react.default.createElement("div", {
      className: `clearfix at_faq_questions ${_faqCm.default.faqs}`,
      key: faq.id,
      itemType: "http://schema.org/Question",
      itemProp: "mainEntity",
      itemScope: true
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: `faq${index}`,
      defaultChecked: index === 0,
      className: "hide",
      onChange: _ScrollWindowForSticky.default
    }), _react.default.createElement("label", {
      className: "relative flex spaceBetween",
      htmlFor: `faq${index}`
    }, _react.default.createElement("h3", {
      className: "f14 fw7 flexFull m0",
      itemProp: "name"
    }, faq.question), _react.default.createElement("span", {
      className: `z2 relative flex alignCenter justifyCenter ml8 ${_faqCm.default.arrowButton}`
    }, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement("div", {
      className: `${_faqCm.default.answerBox} f14 dynamicTextInherit`,
      itemType: "http://schema.org/Answer",
      itemProp: "acceptedAnswer",
      itemScope: true
    }, _react.default.createElement("div", {
      itemProp: "text"
    }, parser.parse(faq.answer))))), this.state.visible < data.faqs.length ? _react.default.createElement("div", {
      className: `flex relative alignCenter justifyCenter p8 pl0 pr0 ${_faqCm.default.loadMore}`
    }, _react.default.createElement("button", {
      onClick: this._loadMore,
      className: "btn-sec-load wfull pl64 pr64"
    }, "Load More")) : null));
  }

};
Faq.propTypes = {
  data: _propTypes.default.object.isRequired,
  hotelDisplayName: _propTypes.default.string
};
var _default = Faq;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/faqs/faq.cm.scss":
/*!*****************************************!*\
  !*** ./app-v2/modules/faqs/faq.cm.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"faqs": "_5eKPbTK_yjAdaKKZ_z_6k",
	"arrowButton": "_3sdNi-6MIXgIc_-Z72VDop",
	"answerBox": "_3wf7TyQnppB0U0wxt2Pim0",
	"loadMore": "_2ZDt6rnoG_bgDPv9z1M3rP"
};

/***/ }),

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

/***/ "./app-v2/modules/header/HeaderHome.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/header/HeaderHome.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _BurgerMenu = _interopRequireDefault(__webpack_require__(/*! ./BurgerMenu */ "./app-v2/modules/header/BurgerMenu.js"));

__webpack_require__(/*! ./Header.scss */ "./app-v2/modules/header/Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeaderHome = ({
  isTransparent
}) => _react.default.createElement("header", {
  className: "wfull z10 relative"
}, _react.default.createElement("div", {
  className: isTransparent ? 'header-con-transparent' : 'header-con'
}, _react.default.createElement("div", {
  className: "header-con-first flex spaceBetween"
}, _react.default.createElement(_BurgerMenu.default, null), _react.default.createElement("div", {
  className: "tt-logo flexFull text-center"
}, _react.default.createElement("meta", {
  itemProp: "url",
  content: "https://traveltriangle.com"
}), _react.default.createElement("meta", {
  itemProp: "logo",
  content: "https://traveltriangle.com/pp_static/pp_new_logo.jpg"
}), _react.default.createElement(_reactRouter.Link, {
  className: "tt-logo-container",
  to: "/"
}, isTransparent ? _react.default.createElement(_Icon.TTlogoSecondary, null) : _react.default.createElement(_Icon.TTlogo, null))), _react.default.createElement("div", null, _react.default.createElement("input", {
  type: "checkbox",
  id: "AddToHomeButton",
  className: "add-to-home-button"
}), _react.default.createElement("label", {
  htmlFor: "AddToHomeButton"
}, _react.default.createElement("div", {
  className: "add-to-screen"
}, _react.default.createElement("span", {
  className: "add-to-home"
})), _react.default.createElement("div", {
  className: "add-to-home-info"
}, _react.default.createElement("div", {
  className: "transparent-cut"
}), _react.default.createElement("div", {
  className: "col-xs-12 pt64 mt64 pl24 ml8 pr24 mr24 pr15 pb64"
}, _react.default.createElement("p", {
  className: "f14 fw7 sfcw text-left"
}, "Add ", _react.default.createElement("span", {
  className: "text-capitalize f18"
}, "TravelTriangle "), " to"), _react.default.createElement("p", {
  className: "f16 sfcw text-left fwb pt5"
}, "Homescreen for quick access"), _react.default.createElement("p", {
  className: "f16 fw3 sfcw pt24 relative tap-tag-addtohome"
}, " Tap ", _react.default.createElement("span", {
  className: "addtohomeoverlay iblock"
}, " ", _react.default.createElement("span", {
  className: "add-to-home iblock absolute t5 l9"
}), " "), " to bring up your browser menu and select ", _react.default.createElement("span", {
  className: "fw7"
}, '"Add to home screen"'), " to pin the TravelTriangle web app "), _react.default.createElement("div", {
  className: "btn-filled-pri mt15 ripple"
}, _react.default.createElement("div", {
  className: "wave"
}), "Got It"))))))));

var _default = HeaderHome;
exports.default = _default;
HeaderHome.propTypes = {
  isTransparent: _propTypes.default.bool
};
HeaderHome.defaultProps = {
  isTransparent: false
};

/***/ }),

/***/ "./app-v2/modules/letsDiscover/Card.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/letsDiscover/Card.js ***!
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

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _gCard = __webpack_require__(/*! ./gCard */ "./app-v2/modules/letsDiscover/gCard.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Card = (_temp = _class = class Card extends _react.default.Component {
  render() {
    const {
      title,
      date,
      url,
      thumbnailImagePaths
    } = this.props;
    return _react.default.createElement("div", {
      className: "clearfix sbcw"
    }, _react.default.createElement(_gCard.GCardImg, {
      className: "relative sbc5"
    }, _react.default.createElement(_Img.default, {
      src: thumbnailImagePaths.src,
      ikSrc: thumbnailImagePaths.imagekitUrl,
      alt: ""
    }), _react.default.createElement("div", {
      className: "hoverReadMore absolute wfull hfull l0 t0"
    }, _react.default.createElement("a", {
      className: "at_tsReadmore block f14",
      href: url
    }, "Read More"))), _react.default.createElement(_gCard.GCardDataDiv, null, _react.default.createElement(_gCard.GHeadingH6, {
      className: "fw7 overflowh m0 mb4"
    }, title), _react.default.createElement(_gCard.GDateLinkDiv, null, _react.default.createElement("p", {
      className: "f12 pfc4 m0"
    }, (0, _DateTime.format)(date, 'dddd, Do MMMM, YYYY')), _react.default.createElement("a", {
      className: "at_readMore",
      href: url
    }, "Read More"))));
  }

}, _class.propTypes = {
  imagePaths: _propTypes.default.shape({
    src: _propTypes.default.string,
    imagekitUrl: _propTypes.default.string,
    alt: _propTypes.default.string
  }).isRequired,
  thumbnailImagePaths: _propTypes.default.shape({
    src: _propTypes.default.string,
    imagekitUrl: _propTypes.default.string,
    alt: _propTypes.default.string
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  date: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired
}, _temp);
exports.default = Card;

/***/ }),

/***/ "./app-v2/modules/letsDiscover/LetsDiscover.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/letsDiscover/LetsDiscover.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./Card */ "./app-v2/modules/letsDiscover/Card.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let LetsDiscover = (_temp = _class = class LetsDiscover extends _react.Component {
  componentDidMount() {
    const {
      destination
    } = this.props;
    this.props.fetchLetsDiscover({
      destination: destination
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.destination !== prevProps.destination) {
      prevProps.fetchLetsDiscover({
        destination: this.props.destination
      });
    }
  }

  render() {
    const {
      letsDiscover
    } = this.props;
    return letsDiscover.length > 0 ? _react.default.createElement("div", {
      className: "clearfix p15 sbcw wfull"
    }, _react.default.createElement("div", {
      className: "clearfix relative"
    }, _react.default.createElement(_Heading.default, {
      data: {
        title: "Lets Go Discover",
        heading: "An exclusive collection of travel blogs that will instill wanderlust in you"
      }
    }), _react.default.createElement(_reactRouter.Link, {
      className: "absolute t2 r0 iblock f14 fw7",
      to: "/blog/"
    }, "View All")), _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "swiper-full-width"
    }, _react.default.createElement(_Swiper.default, {
      id: "letsdiscover",
      slideClass: "slide",
      spaceBetween: 15,
      slidesPerView: "auto",
      ssrAnimation: {
        width: 280,
        height: 218
      },
      rebuildOnUpdate: true
    }, letsDiscover && letsDiscover.map((discover, index) => {
      return _react.default.createElement("div", {
        className: "clearfix radius2 relative",
        key: index
      }, _react.default.createElement(_Card.default, {
        id: discover.id,
        title: discover.title,
        imagePaths: discover.imagePaths,
        thumbnailImagePaths: discover.thumbnailImagePaths,
        date: discover.postDate,
        url: discover.url
      }));
    }))))) : null;
  }

}, _class.propTypes = {
  letsDiscover: _propTypes.default.array.isRequired,
  fetchLetsDiscover: _propTypes.default.func,
  destination: _propTypes.default.string
}, _class.defaultProps = {
  destination: ''
}, _temp);
var _default = LetsDiscover;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/letsDiscover/gCard.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/letsDiscover/gCard.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GHeadingH6 = exports.GDateLinkDiv = exports.GCardDataDiv = exports.GCardImg = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GCardImg = _glamorous.default.div({
  height: '140px',
  overflow: 'hidden',
  width: '100%',
  '& img': {
    minWidth: '100%',
    minHeight: '100%'
  },
  '& .hoverReadMore': {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    '& a': {
      color: '#fff',
      border: '1px solid #fff',
      padding: '12px 40px'
    }
  },
  '&:hover .hoverReadMore': {
    display: 'flex'
  }
});

exports.GCardImg = GCardImg;

const GCardDataDiv = _glamorous.default.div({
  paddingTop: '16px'
});

exports.GCardDataDiv = GCardDataDiv;

const GDateLinkDiv = _glamorous.default.div({
  display: 'flex',
  justifyContent: 'space-between'
});

exports.GDateLinkDiv = GDateLinkDiv;

const GHeadingH6 = _glamorous.default.h6({
  fontSize: '14px',
  lineHeight: '20px',
  height: '40px'
});

exports.GHeadingH6 = GHeadingH6;

/***/ }),

/***/ "./app-v2/modules/letsDiscover/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/letsDiscover/index.js ***!
  \**********************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/letsDiscover/action.js");

var _LetsDiscover = _interopRequireDefault(__webpack_require__(/*! ./LetsDiscover */ "./app-v2/modules/letsDiscover/LetsDiscover.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  letsDiscover: (0, _get2.default)(state, 'letsDiscover.letsDiscover', {})
}), {
  fetchLetsDiscover: _action.fetchLetsDiscover
})(_LetsDiscover.default));
var _default = {
  container,
  actions: {
    fetchLetsDiscover: _action.fetchLetsDiscover
  },
  defaultAction: _action.fetchLetsDiscover
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/mapInformation/index.js":
/*!************************************************!*\
  !*** ./app-v2/modules/mapInformation/index.js ***!
  \************************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/mapInformation/action.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/mapInformation/reducer.js");

var _MapInformation = _interopRequireDefault(__webpack_require__(/*! ./MapInformation */ "./app-v2/modules/mapInformation/MapInformation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  mapInformation: (0, _reducer.results)(state)
}))(_MapInformation.default));
var _default = {
  container,
  actions: {
    fetchMapInformationData: _action.fetchMapInformationData
  },
  defaultAction: _action.fetchMapInformationData
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/packages/recent/index.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/packages/recent/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/common/Heading */ "./app-v2/modules/common/Heading.js"));

var _reactCookie = __webpack_require__(/*! react-cookie */ "react-cookie");

var _recentPackages = __webpack_require__(/*! ./recentPackages */ "./app-v2/modules/packages/recent/recentPackages.js");

var _PackageCardExperiment = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageCardExperiment */ "./app/components/Listing/PackageCardExperiment.js"));

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RECENT_PACKAGE_COOKIE_KEY = 'rvp_ids_mweb';
let RecentPackages = (_dec = (0, _reactRedux.connect)(state => ({
  isRecentPackagesPresent: (0, _recentPackages.isRecentPackagesPresent)(state),
  recentPackages: (0, _recentPackages.getRecentPackages)(state)
}), {
  loadRecentPackages: _recentPackages.loadRecentPackages
}), _dec(_class = (_temp = _class2 = class RecentPackages extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentPackages: ''
    };
    this.setRecentPackagesID = this.setRecentPackagesID.bind(this);
  }

  componentDidMount() {
    this.setRecentPackagesID(this.props.currentPackageID);
  }

  setRecentPackagesID(packageId) {
    const {
      cookies
    } = this.props;
    let recentPackages = cookies && cookies.get(RECENT_PACKAGE_COOKIE_KEY);

    if (typeof recentPackages === 'undefined') {
      recentPackages = [];
    } else {
      recentPackages = recentPackages.split(',');
    }

    if (recentPackages.indexOf(packageId) !== -1) {
      recentPackages = recentPackages.filter(id => id !== packageId);
    }

    recentPackages.push(packageId);
    recentPackages = recentPackages.join(',');

    if (typeof cookies !== 'undefined') {
      cookies.set(RECENT_PACKAGE_COOKIE_KEY, recentPackages);
    }

    this.setState({
      recentPackages
    }, () => {
      this.props.loadRecentPackages({
        seo_package_id: this.props.currentPackageID,
        recently_viewed_packages: this.state.recentPackages,
        travel_month: this.props.selectedMonth
      });
    });
  }

  render() {
    if (!this.props.isRecentPackagesPresent) {
      return null;
    }

    const {
      recentPackages,
      spacingCss
    } = this.props;
    const heading = 'Recent Packages';
    const attributes = {
      heading,
      packagesList: recentPackages
    };
    return recentPackages.length > 0 ? _react.default.createElement("div", {
      className: "p15 m8 mt0 sbcw at_recentpackages recent-packages-container",
      style: spacingCss
    }, _react.default.createElement(_Heading.default, {
      data: {
        heading: "Recent Packages",
        subHeading: "Unlimited Choices. Trusted Agents. Best Prices. Happy Memories."
      }
    }), _react.default.createElement("div", {
      className: "swiper-full-width"
    }, _react.default.createElement(_Swiper.default, {
      id: "packagesSlider",
      slideClass: "slide",
      spaceBetween: 15,
      slidesPerView: "auto",
      rebuildOnUpdate: true,
      ssrAnimation: {
        width: 310,
        height: 355
      }
    }, recentPackages && recentPackages.length ? recentPackages.map((packageData, i) => _react.default.createElement("div", {
      key: i
    }, _react.default.createElement(_PackageCardExperiment.default, {
      heading: 'recent packages',
      card: packageData,
      isPackageRevamp: true
    }))) : null))) : null;
  }

}, _class2.propTypes = {
  isRecentPackagesPresent: _propTypes.PropTypes.bool.isRequired,
  recentPackages: _propTypes.PropTypes.array.isRequired,
  currentPackageID: _propTypes.PropTypes.number.isRequired,
  loadRecentPackages: _propTypes.PropTypes.func.isRequired,
  cookies: (0, _propTypes.instanceOf)(_reactCookie.Cookies).isRequired,
  selectedMonth: _propTypes.PropTypes.number,
  spacingCss: _propTypes.PropTypes.object
}, _class2.defaultProps = {
  recentPackages: [],
  loadRecentPackages: () => {},
  isRecentPackagesPresent: false,
  spacingCss: {}
}, _temp)) || _class);

var _default = (0, _reactCookie.withCookies)(RecentPackages);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/FixedButton.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/shared/FixedButton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let FixedButton = (_temp = _class = class FixedButton extends _react.Component {
  render() {
    const {
      ctaText,
      destination
    } = this.props;
    return _react.default.createElement("div", {
      className: "fixed b0 l0 r0 sbc5 z6 bs6 p8"
    }, _react.default.createElement(_FormOneCTA.default, {
      rtProps: {
        to_loc: destination
      }
    }, _react.default.createElement("span", {
      className: "btn-filled-pri-large wfull"
    }, ctaText)));
  }

}, _class.propTypes = {
  ctaText: _propTypes.default.string,
  destination: _propTypes.default.string
}, _class.defaultProps = {
  ctaText: 'Plan My Holiday',
  destination: ''
}, _temp);
exports.default = FixedButton;

/***/ }),

/***/ "./app-v2/modules/shared/LetsGo.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/shared/LetsGo.js ***!
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

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GLetsGoDiv = _glamorous.default.div({
  height: '171px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    minHeight: '100%'
  }
});

const FormOneClickDetail = {
  section: 'Banner Section',
  cta: 'Lets go'
};

const LetsGo = ({
  data,
  destination
}) => _react.default.createElement("div", {
  className: "at_didnotfind sbcw"
}, _react.default.createElement(GLetsGoDiv, {
  className: "relative sbcw"
}, _react.default.createElement(_Img.default, {
  width: 395,
  height: 200,
  ikSrc: `${_appConfig.default.assets.images}/public-product/package_listing_banners/Image_CB+mob.jpg`,
  alt: "lets go banner"
}), _react.default.createElement("p", {
  className: "absolute pl15 pr15 z2 b0 l0 r0 pfc3 f24 fw9 m0"
}, data.title)), _react.default.createElement("div", {
  className: "p15 pt5"
}, _react.default.createElement("p", {
  className: "f14 m0 pfc4"
}, data.heading), _react.default.createElement(_FormOneCTA.default, {
  rtProps: {
    to_loc: destination
  }
}, _react.default.createElement("span", {
  className: "btn-pri-large wfull mt24"
}, "Get Experts' Callback"))));

LetsGo.propTypes = {
  destination: _propTypes.default.string,
  data: _propTypes.default.object
};
LetsGo.defaultProps = {
  destination: '',
  data: () => {}
};
var _default = LetsGo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Rated.js":
/*!****************************************!*\
  !*** ./app-v2/modules/shared/Rated.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const P = _glamorous.default.p({
  lineHeight: '16px'
});

let Rated = class Rated extends _react.default.Component {
  render() {
    const {
      rated
    } = this.props;
    const link = "Tourism in " + this.props.destination;
    return _react.default.createElement("div", {
      className: "col-xs-12 p0",
      vocab: "https://schema.org/",
      "typeof": "Product"
    }, _react.default.createElement("span", {
      className: "hide",
      property: "name"
    }, link), _react.default.createElement(P, {
      className: "f10 m0 pfc3",
      property: "aggregateRating",
      "typeof": "AggregateRating"
    }, "Rated ", _react.default.createElement("span", {
      property: "ratingValue"
    }, rated.currentRating), "/", rated.outOf, " (based on ", _react.default.createElement("span", {
      property: "reviewCount"
    }, rated.totalReviews), " reviews )"));
  }

};
Rated.propTypes = {
  rated: _propTypes.default.object,
  destination: _propTypes.default.string
};
Rated.defaultProps = {
  rated: {},
  destination: ''
};
var _default = Rated;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/TTExperties.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/shared/TTExperties.js ***!
  \**********************************************/
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

const TTExpertiesSection = _glamorous.default.div({});

const TTExpertiesIcon = _glamorous.default.div({
  height: '56px',
  width: '72px',
  position: 'relative',
  margin: '0 auto 15px',
  '& svg': {
    position: 'absolute',
    maxHeight: '100%'
  }
});

const TTExperties = () => _react.default.createElement("div", {
  className: "at_ttexperties row m0"
}, _react.default.createElement("div", {
  className: "col-xs-12 p8 pt15 pb15 sbcw mb8"
}, _react.default.createElement("p", {
  className: "pfc1 text-center f16 fw9 mb15"
}, "Fastest Growing Holiday Marketplace"), _react.default.createElement(TTExpertiesSection, {
  className: "col-sm-12 pt8 pb8"
}, _react.default.createElement("div", {
  className: "col-xs-4 text-center pl2 pr2"
}, _react.default.createElement(TTExpertiesIcon, {
  className: "flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.IllusAgent, null)), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "650+"), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Verified Agents")), _react.default.createElement("div", {
  className: "col-xs-4 text-center pl2 pr2"
}, _react.default.createElement(TTExpertiesIcon, {
  className: "flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.IllusTraveler, null)), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "22 Lac+"), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Happy Travellers")), _react.default.createElement("div", {
  className: "col-xs-4 text-center pl2 pr2"
}, _react.default.createElement(TTExpertiesIcon, {
  className: "flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.IllusDestinations, null)), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "65+"), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Destinations")))), _react.default.createElement("div", {
  className: "col-xs-12 p8 pt15 pb15 sbcw"
}, _react.default.createElement("p", {
  className: "pfc1 text-center f16 fw9 mb15"
}, "Easy, Secure & Reliable"), _react.default.createElement(TTExpertiesSection, {
  className: "col-sm-12 pt8 pb8"
}, _react.default.createElement("div", {
  className: "col-xs-4 text-center pl2 pr2"
}, _react.default.createElement(TTExpertiesIcon, {
  className: "flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.IllusMoneySafe, null)), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Traveltriangle"), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Verified")), _react.default.createElement("div", {
  className: "col-xs-4 text-center pl2 pr2"
}, _react.default.createElement(TTExpertiesIcon, {
  className: "flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.IllusQualityCheck, null)), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Stringent"), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Quality Control")), _react.default.createElement("div", {
  className: "col-xs-4 text-center pl2 pr2"
}, _react.default.createElement(TTExpertiesIcon, {
  className: "flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.IllusSupport, null)), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "24/7"), _react.default.createElement("p", {
  className: "f12 fw4 m0"
}, "Support")))));

var _default = TTExperties;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/cityBlock/CityBlock.js":
/*!***********************************************!*\
  !*** ./app-v2/screens/cityBlock/CityBlock.js ***!
  \***********************************************/
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

var _HeaderHome = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderHome */ "./app-v2/modules/header/HeaderHome.js"));

var _banner = _interopRequireDefault(__webpack_require__(/*! modules/banner */ "./app-v2/modules/banner/index.js"));

var _faqs = _interopRequireDefault(__webpack_require__(/*! modules/faqs */ "./app-v2/modules/faqs/index.js"));

var _mapInformation = _interopRequireDefault(__webpack_require__(/*! modules/mapInformation */ "./app-v2/modules/mapInformation/index.js"));

var _popular = _interopRequireDefault(__webpack_require__(/*! modules/packages/popular */ "./app-v2/modules/packages/popular/index.js"));

var _LetsGo = _interopRequireDefault(__webpack_require__(/*! modules/shared/LetsGo */ "./app-v2/modules/shared/LetsGo.js"));

var _Rated = _interopRequireDefault(__webpack_require__(/*! modules/shared/Rated */ "./app-v2/modules/shared/Rated.js"));

var _TTExperties = _interopRequireDefault(__webpack_require__(/*! modules/shared/TTExperties */ "./app-v2/modules/shared/TTExperties.js"));

var _travelerReview = _interopRequireDefault(__webpack_require__(/*! modules/travelerReview */ "./app-v2/modules/travelerReview/index.js"));

var _travellerStory = _interopRequireDefault(__webpack_require__(/*! modules/travellerStory */ "./app-v2/modules/travellerStory/index.js"));

var _CityBlockNav = _interopRequireDefault(__webpack_require__(/*! modules/cityBlock/CityBlockNav */ "./app-v2/modules/cityBlock/CityBlockNav.js"));

var _recent = _interopRequireDefault(__webpack_require__(/*! modules/packages/recent */ "./app-v2/modules/packages/recent/index.js"));

var _letsDiscover = _interopRequireDefault(__webpack_require__(/*! modules/letsDiscover */ "./app-v2/modules/letsDiscover/index.js"));

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! modules/shared/Breadcrumb */ "./app-v2/modules/shared/Breadcrumb.js"));

var _FixedButton = _interopRequireDefault(__webpack_require__(/*! modules/shared/FixedButton */ "./app-v2/modules/shared/FixedButton.js"));

var _FixedMenu = _interopRequireDefault(__webpack_require__(/*! components/FixedMenu/FixedMenu */ "./app/components/FixedMenu/FixedMenu.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! modules/shared/Footer */ "./app-v2/modules/shared/Footer/index.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _exitIntent = __webpack_require__(/*! helpers/exitIntent */ "./app/helpers/exitIntent.js");

var _interlinking = _interopRequireDefault(__webpack_require__(/*! modules/shared/interlinking */ "./app-v2/modules/shared/interlinking/index.js"));

__webpack_require__(/*! theme/CityBlock.scss */ "./app/theme/CityBlock.scss");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GLargeBannerDiv = _glamorous.default.div({
  height: '270px'
});

const GFixedChatDiv = _glamorous.default.div({
  width: '56px',
  height: '56px',
  bottom: '60px',
  transform: 'translate3d(0,0,0)'
});

const getExitIntent = () => {
  return _react.default.createElement("div", {
    id: "reactExitIntentImage",
    className: "mkt-mob-exit-intent relative pl8 pr8 mb8",
    onClick: _exitIntent.showPopUp
  });
};

let CityBlock = (_temp = _class = class CityBlock extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      destination: ''
    };
  }

  componentDidMount() {
    document.readyState === 'complete' ? (0, _exitIntent.initializeExitIntent)() : window.addEventListener('load', _exitIntent.initializeExitIntent);
    this.pageTrackSegmentEvent(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.pageTrackSegmentEvent(this.props);
    }
  }

  render() {
    const {
      location,
      cityBlock,
      routes,
      breadcrumbs,
      footerLinks
    } = this.props;
    const {
      tabs,
      destination,
      rated,
      popularPackages
    } = cityBlock;
    const tab = routes[routes.length - 1].tab;
    const TravelerReviewContainer = _travelerReview.default.container;
    const TravelerStoriesContainer = _travellerStory.default.container;
    const FaqsContainer = _faqs.default.container;
    const MapInformationContainer = _mapInformation.default.container;
    const BannerContainer = _banner.default.container;
    const LetsDiscoverContainer = _letsDiscover.default.container;
    const PopularPackagesContainer = _popular.default.container;
    const travelmonth = location.query.travelmonth ? location.query.travelmonth === 'nd' ? 13 : (0, _DateTime.getTravelMonth)(location.query.travelmonth) + 1 : (0, _DateTime.getCurrentMonth)() + 1;
    return _react.default.createElement("div", {
      className: "sbc5"
    }, _react.default.createElement("div", {
      id: "bg-mask-ei",
      className: "bg-mask-ei",
      onClick: e => (0, _exitIntent.hidePopup)(e)
    }), destination === 'India' ? _react.default.createElement(GLargeBannerDiv, {
      className: "relative z15"
    }, _react.default.createElement("div", {
      className: "relative z15"
    }, _react.default.createElement(_HeaderHome.default, {
      isTransparent: true
    })), _react.default.createElement("div", {
      className: "absolute t0 l0 wfull hfull"
    }, _react.default.createElement(BannerContainer, {
      isLargeBanner: true,
      isCityBlock: true
    }))) : _react.default.createElement("div", null, _react.default.createElement(_HeaderHome.default, null), _react.default.createElement("div", {
      className: "m8"
    }, _react.default.createElement(BannerContainer, {
      isCityBlock: true
    }))), _react.default.createElement("div", {
      className: "mb8 topStickyNav",
      id: "autoScrollToPoint"
    }, _react.default.createElement(_CityBlockNav.default, {
      tabs: tabs,
      destination: destination
    })), _react.default.createElement("div", {
      className: "mt8 mb8 mt0"
    }, _react.default.createElement(MapInformationContainer, {
      tab: tab,
      location: location
    })), _react.default.cloneElement(this.props.children, {
      exitIntent: getExitIntent()
    }), popularPackages && popularPackages.length ? _react.default.createElement("div", {
      className: "mt8 mb8 mt0"
    }, _react.default.createElement(PopularPackagesContainer, {
      travelmonth: travelmonth
    })) : null, _react.default.createElement("div", {
      className: "m8 mt0"
    }, _react.default.createElement(_TTExperties.default, null)), _react.default.createElement("div", {
      className: "mt0 sbcw"
    }, _react.default.createElement(TravelerReviewContainer, {
      destination: destination
    })), footerLinks.length ? _react.default.createElement(_interlinking.default, {
      footerLinks: footerLinks
    }) : null, _react.default.createElement("div", {
      className: "mt8 mb8 mt0"
    }, _react.default.createElement(TravelerStoriesContainer, {
      spacingCss: {
        marginBottom: '0'
      },
      data: {
        title: 'Our Traveler Stories',
        heading: 'They traveled. They experienced. They shared.'
      },
      config: {
        csr: true
      },
      destination: destination,
      viewAll: "/blog/travelogues?referer=travelogue_cityblock"
    })), _react.default.createElement("div", {
      className: "mt8 mb8 mt0"
    }, _react.default.createElement(LetsDiscoverContainer, {
      spacingCss: {
        marginBottom: '0'
      },
      destination: destination
    })), _react.default.createElement("div", {
      className: "mt8 mb8 mt0"
    }, _react.default.createElement(_LetsGo.default, {
      data: {
        title: 'Want best packages handpicked just for you?',
        heading: 'Fill the form and get a callback from our holiday experts'
      },
      destination: destination
    })), destination == 'India' ? null : _react.default.createElement("div", {
      className: "mt8 mb8 mt0"
    }, _react.default.createElement(FaqsContainer, null)), _react.default.createElement(_recent.default, {
      currentPackageID: 0
    }), _react.default.createElement("div", {
      className: "p8 pt0 clearfix"
    }, _react.default.createElement(_Breadcrumb.default, {
      breadcrumbs: breadcrumbs
    }), _react.default.createElement(_Rated.default, {
      rated: rated,
      destination: destination
    })), tab === 'places_to_visit' || tab === 'things_to_do' ? null : _react.default.createElement(GFixedChatDiv, {
      className: "fixed r0 z5"
    }, _react.default.createElement(_FixedMenu.default, null)), _react.default.createElement(_FixedButton.default, {
      destination: destination
    }), _react.default.createElement("div", {
      className: "pb64 pbc3"
    }, _react.default.createElement(_Footer.default, null)));
  }

}, _initialiseProps = function () {
  this.pageTrackSegmentEvent = props => {
    const {
      cityBlock
    } = props;
    (0, _utils.rescue)(() => {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.CITYBLOCK_PAGE_VIEW,
        destination_list: cityBlock.destination,
        destination_id: 0,
        destination_type: 'Tour'
      });
    });
  };
}, _temp);
CityBlock.propTypes = {
  cityBlock: _propTypes.default.object.isRequired,
  children: _propTypes.default.array.isRequired,
  placesToVisit: _propTypes.default.object,
  location: _propTypes.default.object.isRequired,
  breadcrumbs: _propTypes.default.array,
  faqs: _propTypes.default.array,
  routes: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired,
  footerLinks: _propTypes.default.array
};
CityBlock.defaultProps = {
  placesToVisit: {},
  breadcrumbs: []
};
var _default = CityBlock;
exports.default = _default;

/***/ }),

/***/ "./app/components/Common/ScrollWindowForSticky.js":
/*!********************************************************!*\
  !*** ./app/components/Common/ScrollWindowForSticky.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function scrollWindowByTwo() {
  if (typeof window !== 'undefined') {
    window.scrollBy(0, 2);
  }
}

var _default = scrollWindowByTwo;
exports.default = _default;

/***/ }),

/***/ "./app/theme/CityBlock.scss":
/*!**********************************!*\
  !*** ./app/theme/CityBlock.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"filters-header": "_3GF5_",
	"filters-options-con": "_1D-2-",
	"close-filters": "_2kJT3",
	"filter-title": "_25vT3",
	"reset-button": "_337ZX",
	"filter-box": "_3O-5A",
	"filter-box-options": "_1Hiu0",
	"filter-options-type-one": "_1akXk",
	"filter-options-type-two": "_gsUfP",
	"hotel-rating-star": "_1uwyW",
	"hotel-rating-star-list": "_3iice",
	"filter-options-type-three": "_OCIJu"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9iYW5uZXIvQmFubmVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Jhbm5lci9CYW5uZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Jhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svQ2l0eUJsb2NrTmF2LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2NpdHlCbG9jay9OYXZMaW5rLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2NvbW1vbi9IZWFkaW5nLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2NvbW1vbi9IZWFkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmFxcy9GYXFzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZhcXMvZmFxLmNtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmFxcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZWFkZXIvSGVhZGVySG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9sZXRzRGlzY292ZXIvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9sZXRzRGlzY292ZXIvTGV0c0Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2xldHNEaXNjb3Zlci9nQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9sZXRzRGlzY292ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvbWFwSW5mb3JtYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcGFja2FnZXMvcmVjZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9GaXhlZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvTGV0c0dvLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9SYXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvVFRFeHBlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvY2l0eUJsb2NrL0NpdHlCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tb24vU2Nyb2xsV2luZG93Rm9yU3RpY2t5LmpzIiwid2VicGFjazovLy8uL2FwcC90aGVtZS9DaXR5QmxvY2suc2NzcyJdLCJuYW1lcyI6WyJCYW5uZXJDb250YWluZXIiLCJnbGFtb3JvdXMiLCJkaXYiLCJpc0xhcmdlQmFubmVyIiwicG9zaXRpb24iLCJoZWlnaHQiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwidG9wIiwibGVmdCIsImNvbnRlbnQiLCJ6SW5kZXgiLCJCYW5uZXIiLCJiYW5uZXIiLCJjYW5vbmljYWxVcmwiLCJpc0NpdHlCbG9jayIsImxvY2F0aW9uIiwibWV0YVRhZ3MiLCJwYXRobmFtZSIsImltYWdlIiwiaW1hZ2VraXRVcmwiLCJhbHRUZXh0IiwibW9iaWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5Iiwic2hvd0V4cGxvcmVGb3JtIiwiYm9vbCIsInNob3dEdXJhdGlvbiIsImJhbm5lclN0eWxlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiQmFubmVyQ29udGVudCIsInNob3dEZXNjcmlwdGlvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250YWluZXIiLCJzdGF0ZSIsImhscENvbnRhaW5lciIsImFjdGlvbnMiLCJmZXRjaEJhbm5lckRhdGEiLCJkZWZhdWx0QWN0aW9uIiwiVWwiLCJ1bCIsInBhZGRpbmciLCJtYXJnaW4iLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsIndoaXRlU3BhY2UiLCJib3R0b20iLCJDaXR5QmxvY2tOYXYiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZGVzdGluYXRpb24iLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJyZW5kZXIiLCJ0YWJzIiwibGVuZ3RoIiwibWFwIiwidGFiIiwiaSIsIm5hbWUiLCJ1cmwiLCJOYXZMaW5rIiwiaXNBY3RpdmUiLCJjb250ZXh0Iiwicm91dGVyIiwidG8iLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNvbnRleHRUeXBlcyIsIkhlYWRpbmciLCJkYXRhIiwidHlwZSIsInNob3dWaWV3QWxsIiwiaGVhZGluZyIsInN1YkhlYWRpbmciLCJwYXJzZXIiLCJQYXJzZXIiLCJGYXEiLCJ2aXNpYmxlIiwiX2xvYWRNb3JlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJob3RlbERpc3BsYXlOYW1lIiwiZmFxcyIsImZvckhlYWRpbmciLCJBcnJheSIsInNsaWNlIiwiZmFxIiwiaW5kZXgiLCJzdHlsZXMiLCJpZCIsInNjcm9sbFdpbmRvd0J5VHdvIiwicXVlc3Rpb24iLCJhcnJvd0J1dHRvbiIsImFuc3dlckJveCIsInBhcnNlIiwiYW5zd2VyIiwibG9hZE1vcmUiLCJGYXFzIiwiSGVhZGVySG9tZSIsImlzVHJhbnNwYXJlbnQiLCJDYXJkIiwiUmVhY3QiLCJkYXRlIiwidGh1bWJuYWlsSW1hZ2VQYXRocyIsInNyYyIsImltYWdlUGF0aHMiLCJzaGFwZSIsImFsdCIsIkxldHNEaXNjb3ZlciIsImZldGNoTGV0c0Rpc2NvdmVyIiwibGV0c0Rpc2NvdmVyIiwiZGlzY292ZXIiLCJwb3N0RGF0ZSIsImZ1bmMiLCJHQ2FyZEltZyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIkdDYXJkRGF0YURpdiIsInBhZGRpbmdUb3AiLCJHRGF0ZUxpbmtEaXYiLCJHSGVhZGluZ0g2IiwiaDYiLCJtYXBJbmZvcm1hdGlvbiIsIk1hcEluZm9ybWF0aW9uIiwiZmV0Y2hNYXBJbmZvcm1hdGlvbkRhdGEiLCJSRUNFTlRfUEFDS0FHRV9DT09LSUVfS0VZIiwiUmVjZW50UGFja2FnZXMiLCJpc1JlY2VudFBhY2thZ2VzUHJlc2VudCIsInJlY2VudFBhY2thZ2VzIiwibG9hZFJlY2VudFBhY2thZ2VzIiwiY29uc3RydWN0b3IiLCJzZXRSZWNlbnRQYWNrYWdlc0lEIiwiYmluZCIsImN1cnJlbnRQYWNrYWdlSUQiLCJwYWNrYWdlSWQiLCJjb29raWVzIiwiZ2V0Iiwic3BsaXQiLCJpbmRleE9mIiwiZmlsdGVyIiwicHVzaCIsImpvaW4iLCJzZXQiLCJzZW9fcGFja2FnZV9pZCIsInJlY2VudGx5X3ZpZXdlZF9wYWNrYWdlcyIsInRyYXZlbF9tb250aCIsInNlbGVjdGVkTW9udGgiLCJzcGFjaW5nQ3NzIiwiYXR0cmlidXRlcyIsInBhY2thZ2VzTGlzdCIsInBhY2thZ2VEYXRhIiwibnVtYmVyIiwiQ29va2llcyIsIkZpeGVkQnV0dG9uIiwiY3RhVGV4dCIsInRvX2xvYyIsIkdMZXRzR29EaXYiLCJGb3JtT25lQ2xpY2tEZXRhaWwiLCJzZWN0aW9uIiwiY3RhIiwiTGV0c0dvIiwiY29uZmlnIiwiYXNzZXRzIiwiaW1hZ2VzIiwiUCIsInAiLCJSYXRlZCIsInJhdGVkIiwibGluayIsImN1cnJlbnRSYXRpbmciLCJvdXRPZiIsInRvdGFsUmV2aWV3cyIsIlRURXhwZXJ0aWVzU2VjdGlvbiIsIlRURXhwZXJ0aWVzSWNvbiIsIm1heEhlaWdodCIsIlRURXhwZXJ0aWVzIiwiR0xhcmdlQmFubmVyRGl2IiwiR0ZpeGVkQ2hhdERpdiIsInRyYW5zZm9ybSIsImdldEV4aXRJbnRlbnQiLCJzaG93UG9wVXAiLCJDaXR5QmxvY2siLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdGlhbGl6ZUV4aXRJbnRlbnQiLCJwYWdlVHJhY2tTZWdtZW50RXZlbnQiLCJjaXR5QmxvY2siLCJyb3V0ZXMiLCJicmVhZGNydW1icyIsImZvb3RlckxpbmtzIiwicG9wdWxhclBhY2thZ2VzIiwiVHJhdmVsZXJSZXZpZXdDb250YWluZXIiLCJUcmF2ZWxlclJldmlldyIsIlRyYXZlbGVyU3Rvcmllc0NvbnRhaW5lciIsIlRyYXZlbGVyU3RvcmllcyIsIkZhcXNDb250YWluZXIiLCJNYXBJbmZvcm1hdGlvbkNvbnRhaW5lciIsIkxldHNEaXNjb3ZlckNvbnRhaW5lciIsIlBvcHVsYXJQYWNrYWdlc0NvbnRhaW5lciIsIlBvcHVsYXJQYWNrYWdlcyIsInRyYXZlbG1vbnRoIiwicXVlcnkiLCJlIiwiY2xvbmVFbGVtZW50IiwiZXhpdEludGVudCIsIm1hcmdpbkJvdHRvbSIsImNzciIsImV2ZW50IiwiQ0lUWUJMT0NLX1BBR0VfVklFVyIsImRlc3RpbmF0aW9uX2xpc3QiLCJkZXN0aW5hdGlvbl9pZCIsImRlc3RpbmF0aW9uX3R5cGUiLCJwbGFjZXNUb1Zpc2l0Iiwic2Nyb2xsQnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGtCQUFrQkMsbUJBQVVDLEdBQVYsQ0FBYyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxNQUF3QjtBQUM1REMsWUFBVSxVQURrRDtBQUU1REMsVUFBUUYsZ0JBQWdCLE9BQWhCLEdBQTBCLE9BRjBCO0FBRzVERyxZQUFVLFFBSGtEO0FBSTVEQyxXQUFTLE1BSm1EO0FBSzVEQyxjQUFZLFFBTGdEO0FBTTVEQyxrQkFBZ0IsUUFONEM7QUFPNUQsV0FBUztBQUNQQyxjQUFVLE1BREg7QUFFUEMsY0FBVSxNQUZIO0FBR1BDLGVBQVc7QUFISixHQVBtRDtBQVk1RCxhQUFXO0FBQ1RSLGNBQVUsVUFERDtBQUVUUyxXQUFPLE1BRkU7QUFHVFIsWUFBUSxNQUhDO0FBSVRTLGdCQUFZLGlCQUpIO0FBS1RDLFNBQUssR0FMSTtBQU1UQyxVQUFNLEdBTkc7QUFPVEMsYUFBUyxPQVBBO0FBUVRDLFlBQVE7QUFSQztBQVppRCxDQUF4QixDQUFkLENBQXhCOztBQXdCQSxNQUFNQyxTQUFTLENBQUM7QUFBRUMsUUFBRjtBQUFVakIsZUFBVjtBQUF5QmtCLGNBQXpCO0FBQXVDQyxhQUF2QztBQUFvREM7QUFBcEQsQ0FBRCxLQUNiO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsbUJBQUQsUUFDRyxvQ0FBbUJILE9BQU9JLFFBQTFCLEVBQW9DSCxZQUFwQyxFQUFrREUsU0FBU0UsUUFBM0QsQ0FESCxDQURGLEVBSUU7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxlQUFEO0FBQ0UsaUJBQWV0QixhQURqQjtBQUVFLGFBQVU7QUFGWixHQUlJbUIsY0FDRSw2QkFBQyxZQUFEO0FBQ0UsU0FBTyxHQURUO0FBQ2MsVUFBUSxHQUR0QjtBQUVFLE9BQUtGLE9BQU9NLEtBRmQ7QUFFcUIsU0FBT04sT0FBT08sV0FGbkM7QUFFZ0QsT0FBS1AsT0FBT1E7QUFGNUQsRUFERixHQUlFLDZCQUFDLFlBQUQ7QUFDRSxTQUFPLEdBRFQ7QUFDYyxVQUFRLEdBRHRCO0FBRUUsT0FBS1IsT0FBT00sS0FBUCxJQUFnQk4sT0FBT00sS0FBUCxDQUFhRyxNQUZwQztBQUdFLE9BQUtULE9BQU9RO0FBSGQsRUFSTixDQURGLEVBZ0JFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsc0JBQUQ7QUFBZSxVQUFRUjtBQUF2QixFQURGLENBaEJGLENBSkYsQ0FERjs7QUE0QkFELE9BQU9XLFNBQVAsR0FBbUI7QUFDakJWLFVBQVFXLG1CQUFVQyxNQUFWLENBQWlCQyxVQURSO0FBRWpCVCxZQUFVTyxtQkFBVUcsS0FGSDtBQUdqQlgsWUFBVVEsbUJBQVVDLE1BSEg7QUFJakJHLG1CQUFpQkosbUJBQVVLLElBSlY7QUFLakJDLGdCQUFjTixtQkFBVUssSUFMUDtBQU1qQkUsZUFBYVAsbUJBQVVDLE1BTk47QUFPakI3QixpQkFBZTRCLG1CQUFVSyxJQVBSO0FBUWpCZixnQkFBY1UsbUJBQVVRLE1BUlA7QUFTakJqQixlQUFhUyxtQkFBVUs7QUFUTixDQUFuQjtBQVlBakIsT0FBT3FCLFlBQVAsR0FBc0I7QUFDcEJoQixZQUFVLEVBRFU7QUFFcEJXLG1CQUFpQixLQUZHO0FBR3BCRSxnQkFBYyxLQUhNO0FBSXBCQyxlQUFhLEVBSk87QUFLcEJuQyxpQkFBZSxLQUxLO0FBTXBCa0IsZ0JBQWMsRUFOTTtBQU9wQkMsZUFBYTtBQVBPLENBQXRCO2VBVWVILE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZmOztBQUNBOzs7O0FBRUEsTUFBTXNCLGdCQUFnQixDQUFDO0FBQUVyQixRQUFGO0FBQVVzQjtBQUFWLENBQUQsS0FBZ0M7QUFDcEQsU0FDQTtBQUFLLGVBQVU7QUFBZixLQUNFO0FBQUssZUFBVTtBQUFmLEtBQ0U7QUFBSSxlQUFVO0FBQWQsS0FBMEN0QixPQUFPdUIsS0FBakQsQ0FERixFQUVHRCxtQkFBbUI7QUFBSSxlQUFVO0FBQWQsS0FBaUN0QixPQUFPd0IsV0FBeEMsQ0FGdEIsQ0FERixDQURBO0FBUUQsQ0FURDs7QUFXQUgsY0FBY1gsU0FBZCxHQUEwQjtBQUN4QlYsVUFBUVcsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREQ7QUFFeEJTLG1CQUFpQlgsbUJBQVVLO0FBRkgsQ0FBMUI7QUFLQUssY0FBY0QsWUFBZCxHQUE2QjtBQUMzQkUsbUJBQWlCO0FBRFUsQ0FBN0I7ZUFJZUQsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNSSxZQUFZLDZCQUFXLHlCQUMzQkMsVUFBVTtBQUNSMUIsVUFBUSxtQkFBSzBCLEtBQUwsRUFBWSxvQkFBWixFQUFrQyxFQUFsQyxDQURBLENBQ3NDOztBQUR0QyxDQUFWLENBRDJCLEVBR3ZCM0IsZUFIdUIsQ0FBWCxDQUFsQjtBQUtBLE1BQU00QixlQUFlLDZCQUFXLHlCQUM5QkQsVUFBVTtBQUNSMUIsVUFBUSxtQkFBSzBCLEtBQUwsRUFBWSxzQkFBWixFQUFvQyxFQUFwQyxDQURBLENBQ3dDOztBQUR4QyxDQUFWLENBRDhCLEVBRzFCM0IsZUFIMEIsQ0FBWCxDQUFyQjtlQUtlO0FBQ2IwQixXQURhO0FBRWJFLGNBRmE7QUFHYkMsV0FBUztBQUNQQztBQURPLEdBSEk7QUFNYkMsaUJBQWVEO0FBTkYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1FLEtBQUtsRCxtQkFBVW1ELEVBQVYsQ0FBYTtBQUN0QkMsV0FBUyxHQURhO0FBRXRCQyxVQUFRLEdBRmM7QUFHdEIvQyxXQUFTLE1BSGE7QUFJdEJELFlBQVUsTUFKWTtBQUt0QixVQUFRO0FBQ05DLGFBQVMsY0FESDtBQUVOLFdBQU87QUFDTGdELGtCQUFZLE1BRFA7QUFFTEMsZ0JBQVUsTUFGTDtBQUdMQyxrQkFBWSxLQUhQO0FBSUxDLGFBQU8sU0FKRjtBQUtMbkQsZUFBUyxPQUxKO0FBTUxvRCxpQkFBVyxRQU5OO0FBT0xOLGVBQVMsTUFQSjtBQVFMM0MsZ0JBQVUsT0FSTDtBQVNMTixnQkFBVSxVQVRMO0FBVUx3RCxzQkFBZ0IsTUFWWDtBQVdMQyxrQkFBWSxRQVhQO0FBWUwscUJBQWU7QUFDYnpELGtCQUFVLFVBREc7QUFFYjBELGdCQUFRLEdBRks7QUFHYjlDLGNBQU0sR0FITztBQUliVCxpQkFBUyxPQUpJO0FBS2JNLGVBQU8sTUFMTTtBQU1iUixnQkFBUSxLQU5LO0FBT2JTLG9CQUFZLGFBUEM7QUFRYkcsaUJBQVM7QUFSSTtBQVpWO0FBRkQsR0FMYztBQStCdEIsMkJBQXlCO0FBQ3ZCLFdBQU87QUFDTHlDLGFBQU8sU0FERjtBQUVMLHFCQUFlO0FBQ2I1QyxvQkFBWTtBQURDO0FBRlY7QUFEZ0I7QUEvQkgsQ0FBYixDQUFYOztJQXlDTWlELFksR0FBTixNQUFNQSxZQUFOLFNBQTJCQyxnQkFBM0IsQ0FBcUM7QUFDbkNDLHNCQUFvQjtBQUNsQixzQ0FBVSxPQUFWLEVBQW1CLHVDQUF5QixLQUFLQyxLQUFMLENBQVdDLFdBQXBDLENBQW5CO0FBQ0EsNkNBQTZCLHVDQUF5QixLQUFLRCxLQUFMLENBQVdDLFdBQXBDLENBQTdCO0FBQ0Q7O0FBRURDLHFCQUFtQkMsU0FBbkIsRUFBOEI7QUFDNUIsUUFBSUEsVUFBVUYsV0FBVixLQUEwQixLQUFLRCxLQUFMLENBQVdDLFdBQXpDLEVBQXNEO0FBQ3BELHdDQUFVLE9BQVYsRUFBbUIsdUNBQXlCLEtBQUtELEtBQUwsQ0FBV0MsV0FBcEMsQ0FBbkI7QUFDQSwrQ0FBNkIsdUNBQXlCLEtBQUtELEtBQUwsQ0FBV0MsV0FBcEMsQ0FBN0I7QUFDRDtBQUNGOztBQUVERyxXQUFTO0FBQ1AsVUFBTTtBQUFFQztBQUFGLFFBQVcsS0FBS0wsS0FBdEI7QUFDQSxXQUNFLDZCQUFDLHdCQUFEO0FBQVEsZUFBUyxJQUFqQjtBQUF1QixXQUFLLENBQTVCO0FBQStCLGNBQVE7QUFBdkMsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxFQUFELFFBRUlLLFFBQVFBLEtBQUtDLE1BQWIsSUFBdUJELEtBQUtFLEdBQUwsQ0FBUyxDQUFDQyxHQUFELEVBQU1DLENBQU4sS0FDOUIseUNBQ0dELElBQUlFLElBQUosS0FBYSxTQUFiLEdBQ0MsSUFERCxHQUVDLDZCQUFDLGdCQUFEO0FBQVMsV0FBS0QsQ0FBZDtBQUFpQixVQUFLLEdBQUVELElBQUlHLEdBQUk7QUFBaEMsT0FDRSwyQ0FBT0gsSUFBSUUsSUFBWCxDQURGLENBSEosQ0FEcUIsQ0FGM0IsQ0FERixDQURGLENBREY7QUFtQkQ7O0FBbENrQyxDO0FBcUNyQ2IsYUFBYWpDLFNBQWIsR0FBeUI7QUFDdkJxQyxlQUFhcEMsbUJBQVVRLE1BREE7QUFFdkJnQyxRQUFNeEMsbUJBQVVHLEtBQVYsQ0FBZ0JELFVBRkM7QUFHdkJWLFlBQVVRLG1CQUFVQyxNQUFWLENBQWlCQztBQUhKLENBQXpCO0FBTUE4QixhQUFhdkIsWUFBYixHQUE0QjtBQUMxQjJCLGVBQWE7QUFEYSxDQUE1QjtlQUllSixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHZjs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1lLE8sR0FBTixNQUFNQSxPQUFOLFNBQXNCZCxnQkFBdEIsQ0FBZ0M7QUFDOUJNLFdBQVM7QUFDUCxVQUFNUyxXQUFXLEtBQUtDLE9BQUwsQ0FBYUMsTUFBYixDQUFvQkYsUUFBcEIsQ0FBNkIsS0FBS2IsS0FBTCxDQUFXZ0IsRUFBeEMsRUFBNEMsSUFBNUMsQ0FBakI7QUFDQSxVQUFNQyxZQUFZSixXQUFXLG9CQUFYLEdBQWtDLGFBQXBEO0FBRUEsV0FDRTtBQUFNLGlCQUFXSTtBQUFqQixPQUNFLDZCQUFDLGlCQUFELEVBQVUsS0FBS2pCLEtBQWYsRUFDRyxLQUFLQSxLQUFMLENBQVdrQixRQURkLEVBRUU7QUFBTSxpQkFBVTtBQUFoQixNQUZGLENBREYsQ0FERjtBQVFEOztBQWI2QixDO0FBZ0JoQ04sUUFBUWhELFNBQVIsR0FBb0I7QUFDbEJvRCxNQUFJbkQsbUJBQVVRLE1BQVYsQ0FBaUJOLFVBREg7QUFFbEJtRCxZQUFVckQsbUJBQVVRLE1BQVYsQ0FBaUJOO0FBRlQsQ0FBcEI7QUFLQTZDLFFBQVFPLFlBQVIsR0FBdUI7QUFDckJKLFVBQVFsRCxtQkFBVUMsTUFERztBQUVyQlQsWUFBVVEsbUJBQVVDO0FBRkMsQ0FBdkI7ZUFLZThDLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTVEsVUFBVSxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsTUFBUjtBQUFjQztBQUFkLENBQUQsS0FDZDtBQUFLLGFBQVU7QUFBZixHQUVLRixLQUFLRyxPQUFMLElBQWdCSCxLQUFLSSxVQUF0QixHQUNFO0FBQU0sYUFBVTtBQUFoQixHQUVFSCxRQUFNLGNBQU4sR0FDRTtBQUFJLGFBQVU7QUFBZCxHQUFzREQsS0FBS0csT0FBM0QsQ0FERixHQUVJO0FBQUksYUFBVTtBQUFkLEdBQXNESCxLQUFLRyxPQUEzRCxDQUpOLEVBTUU7QUFBRyxhQUFVO0FBQWIsR0FBNEJILEtBQUtJLFVBQWpDLENBTkYsQ0FERixHQVNJO0FBQUksYUFBVTtBQUFkLEdBQWtESixLQUFLRyxPQUF2RCxDQVhSLEVBY0lELGNBQ0UsNkJBQUMsaUJBQUQ7QUFBTSxNQUFJRixLQUFLVixHQUFmO0FBQW9CLGFBQVU7QUFBOUIsY0FERixHQUVJLElBaEJSLENBREY7O0FBc0JBUyxRQUFReEQsU0FBUixHQUFvQjtBQUNsQnlELFFBQU14RCxtQkFBVUMsTUFERTtBQUVsQndELFFBQU16RCxtQkFBVVEsTUFGRTtBQUdsQmtELGVBQWExRCxtQkFBVUs7QUFITCxDQUFwQjtBQU1Ba0QsUUFBUTlDLFlBQVIsR0FBdUI7QUFDckIrQyxRQUFNO0FBQ0pHLGFBQVMsRUFETDtBQUVKQyxnQkFBWSxFQUZSO0FBR0pkLFNBQUs7QUFIRCxHQURlO0FBTXJCVyxRQUFNLEVBTmU7QUFPckJDLGVBQWE7QUFQUSxDQUF2QjtlQVVlSCxPOzs7Ozs7Ozs7Ozs7QUM1Q2Y7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFHQTs7QUFFQTs7Ozs7O0FBRUEsTUFBTU0sU0FBUyxJQUFJQyxtQkFBSixFQUFmO0lBRU1DLEcsR0FBTixNQUFNQSxHQUFOLFNBQWtCOUIsZ0JBQWxCLENBQTRCO0FBQUE7QUFBQTs7QUFBQSx3Q0FDMUJsQixLQUQwQixHQUNsQjtBQUNOaUQsZUFBUztBQURILEtBRGtCLE9BSzFCQyxTQUwwQixHQUtkLE1BQU07QUFDaEIsV0FBS0MsUUFBTCxDQUFlQyxTQUFELElBQWU7QUFDM0IsZUFBTztBQUFDSCxtQkFBU0csVUFBVUgsT0FBVixHQUFvQjtBQUE5QixTQUFQO0FBQ0QsT0FGRDtBQUdELEtBVHlCO0FBQUE7O0FBVzFCekIsV0FBUTtBQUNOLFVBQU07QUFBRWlCLFVBQUY7QUFBT1k7QUFBUCxRQUE0QixLQUFLakMsS0FBdkM7O0FBQ0EsUUFBRyxFQUFFcUIsS0FBS2EsSUFBTCxJQUFhYixLQUFLYSxJQUFMLENBQVU1QixNQUF6QixDQUFILEVBQXFDO0FBQ25DLGFBQU8seUNBQVA7QUFDRDs7QUFBQTtBQUNELFdBQ0U7QUFBSyxpQkFBVSx3QkFBZjtBQUF3QyxxQkFBeEM7QUFBa0QsZ0JBQVM7QUFBM0QsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxnQkFBRDtBQUFTLFlBQU07QUFDYjdCLGVBQU80QyxLQUFLNUMsS0FEQztBQUViK0MsaUJBQVNILEtBQUtHLE9BRkQ7QUFHYlcsb0JBQVlGO0FBSEM7QUFBZixNQURGLENBREYsRUFTRTtBQUFLLGlCQUFVO0FBQWYsT0FDR1osS0FBS2EsSUFBTCxZQUFxQkUsS0FBckIsSUFBOEJmLEtBQUthLElBQUwsQ0FBVUcsS0FBVixDQUFnQixDQUFoQixFQUFtQixLQUFLekQsS0FBTCxDQUFXaUQsT0FBOUIsRUFBdUN0QixHQUF2QyxDQUEyQyxDQUFDK0IsR0FBRCxFQUFNQyxLQUFOLEtBQ3RFO0FBQ0csaUJBQVksNkJBQTRCQyxlQUFPTixJQUFLLEVBRHZEO0FBRUcsV0FBS0ksSUFBSUcsRUFGWjtBQUdHLGdCQUFTLDRCQUhaO0FBSUcsZ0JBQVMsWUFKWjtBQUtHO0FBTEgsT0FPRTtBQUFPLFlBQUssVUFBWjtBQUF1QixVQUFLLE1BQUtGLEtBQU0sRUFBdkM7QUFBMEMsc0JBQWdCQSxVQUFVLENBQXBFO0FBQ0UsaUJBQVUsTUFEWjtBQUNtQixnQkFBVUc7QUFEN0IsTUFQRixFQVNFO0FBQU8saUJBQVUsNEJBQWpCO0FBQThDLGVBQVUsTUFBS0gsS0FBTTtBQUFuRSxPQUNFO0FBQUksaUJBQVUscUJBQWQ7QUFBb0MsZ0JBQVM7QUFBN0MsT0FBcURELElBQUlLLFFBQXpELENBREYsRUFFRTtBQUFNLGlCQUFZLGtEQUFpREgsZUFBT0ksV0FBWTtBQUF0RixPQUF5Riw2QkFBQyxlQUFELE9BQXpGLENBRkYsQ0FURixFQWNFO0FBQ0csaUJBQVksR0FBRUosZUFBT0ssU0FBVSx5QkFEbEM7QUFFRyxnQkFBUywwQkFGWjtBQUdHLGdCQUFTLGdCQUhaO0FBSUc7QUFKSCxPQU1FO0FBQUssZ0JBQVM7QUFBZCxPQUFzQm5CLE9BQU9vQixLQUFQLENBQWFSLElBQUlTLE1BQWpCLENBQXRCLENBTkYsQ0FkRixDQUQyQixDQURqQyxFQTBCRyxLQUFLbkUsS0FBTCxDQUFXaUQsT0FBWCxHQUFxQlIsS0FBS2EsSUFBTCxDQUFVNUIsTUFBL0IsR0FDRztBQUFLLGlCQUFZLHNEQUFxRGtDLGVBQU9RLFFBQVM7QUFBdEYsT0FDRTtBQUFRLGVBQVMsS0FBS2xCLFNBQXRCO0FBQWlDLGlCQUFVO0FBQTNDLG1CQURGLENBREgsR0FHWSxJQTdCZixDQVRGLENBREY7QUE0Q0Q7O0FBNUR5QixDO0FBK0Q1QkYsSUFBSWhFLFNBQUosR0FBZ0I7QUFDZHlELFFBQU14RCxtQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVka0Usb0JBQWlCcEUsbUJBQVVRO0FBRmIsQ0FBaEI7ZUFLZXVELEc7Ozs7Ozs7Ozs7OztBQ2xGZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTWpELFlBQVksNkJBQVcseUJBQzNCQyxVQUFVO0FBQ1J5QyxRQUFNLHNCQUFRekMsS0FBUjtBQURFLENBQVYsQ0FEMkIsRUFHdkJxRSxhQUh1QixDQUFYLENBQWxCO0FBS0EsTUFBTXBFLGVBQWUsNkJBQVcseUJBQzlCRCxVQUFVO0FBQ1J5QyxRQUFNLHlCQUFXekMsS0FBWDtBQURFLENBQVYsQ0FEOEIsRUFHMUJxRSxhQUgwQixDQUFYLENBQXJCO2VBS2U7QUFDYnRFLFdBRGE7QUFFYkUsY0FGYTtBQUdiQyxXQUFTLEVBSEk7QUFJYkUsaUJBQWU7QUFKRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1rRSxhQUFhLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ2pCO0FBQVEsYUFBVTtBQUFsQixHQUNFO0FBQUssYUFBV0EsZ0JBQWdCLHdCQUFoQixHQUEyQztBQUEzRCxHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsbUJBQUQsT0FERixFQUVFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBTSxZQUFTLEtBQWY7QUFBcUIsV0FBUTtBQUE3QixFQURGLEVBRUU7QUFBTSxZQUFTLE1BQWY7QUFBc0IsV0FBUTtBQUE5QixFQUZGLEVBR0UsNkJBQUMsaUJBQUQ7QUFBTSxhQUFVLG1CQUFoQjtBQUFvQyxNQUFHO0FBQXZDLEdBQ0dBLGdCQUFnQiw2QkFBQyxxQkFBRCxPQUFoQixHQUFzQyw2QkFBQyxZQUFELE9BRHpDLENBSEYsQ0FGRixFQVNFLDBDQUNFO0FBQU8sUUFBSyxVQUFaO0FBQXVCLE1BQUcsaUJBQTFCO0FBQTRDLGFBQVU7QUFBdEQsRUFERixFQUVFO0FBQU8sV0FBUTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFNLGFBQVU7QUFBaEIsRUFERixDQURGLEVBSUU7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFLLGFBQVU7QUFBZixFQURGLEVBRUU7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFHLGFBQVU7QUFBYixXQUEwQztBQUFNLGFBQVU7QUFBaEIscUJBQTFDLFFBREYsRUFFRTtBQUFHLGFBQVU7QUFBYixpQ0FGRixFQUdFO0FBQUcsYUFBVTtBQUFiLFlBQWlFO0FBQU0sYUFBVTtBQUFoQixRQUEyQztBQUFNLGFBQVU7QUFBaEIsRUFBM0MsTUFBakUsZ0RBQ2E7QUFBTSxhQUFVO0FBQWhCLEdBQXVCLHNCQUF2QixDQURiLHdDQUhGLEVBTUU7QUFBSyxhQUFVO0FBQWYsR0FBNEM7QUFBSyxhQUFVO0FBQWYsRUFBNUMsV0FORixDQUZGLENBSkYsQ0FGRixDQVRGLENBREYsQ0FERixDQURGOztlQW9DZUQsVTs7QUFFZkEsV0FBV3RGLFNBQVgsR0FBdUI7QUFDckJ1RixpQkFBZXRGLG1CQUFVSztBQURKLENBQXZCO0FBSUFnRixXQUFXNUUsWUFBWCxHQUEwQjtBQUN4QjZFLGlCQUFlO0FBRFMsQ0FBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQyxJLHFCQUFOLE1BQU1BLElBQU4sU0FBbUJDLGVBQU12RCxTQUF6QixDQUFtQztBQWlCaERNLFdBQVM7QUFDUCxVQUFNO0FBQUUzQixXQUFGO0FBQVM2RSxVQUFUO0FBQWUzQyxTQUFmO0FBQW9CNEM7QUFBcEIsUUFBNEMsS0FBS3ZELEtBQXZEO0FBQ0EsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxlQUFEO0FBQVUsaUJBQVU7QUFBcEIsT0FDRSw2QkFBQyxZQUFEO0FBQUssV0FBS3VELG9CQUFvQkMsR0FBOUI7QUFBbUMsYUFBT0Qsb0JBQW9COUYsV0FBOUQ7QUFBMkUsV0FBSTtBQUEvRSxNQURGLEVBR0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBRyxpQkFBVSx5QkFBYjtBQUF1QyxZQUFNa0Q7QUFBN0MsbUJBREYsQ0FIRixDQURGLEVBUUUsNkJBQUMsbUJBQUQsUUFDRSw2QkFBQyxpQkFBRDtBQUFZLGlCQUFVO0FBQXRCLE9BQThDbEMsS0FBOUMsQ0FERixFQUVFLDZCQUFDLG1CQUFELFFBQ0U7QUFBRyxpQkFBVTtBQUFiLE9BQTRCLHNCQUFPNkUsSUFBUCxFQUFhLHFCQUFiLENBQTVCLENBREYsRUFFRTtBQUFHLGlCQUFVLGFBQWI7QUFBMkIsWUFBTTNDO0FBQWpDLG1CQUZGLENBRkYsQ0FSRixDQURGO0FBa0JEOztBQXJDK0MsQyxTQUN6Qy9DLFMsR0FBWTtBQUNqQjZGLGNBQVk1RixtQkFBVTZGLEtBQVYsQ0FBZ0I7QUFDMUJGLFNBQUszRixtQkFBVVEsTUFEVztBQUUxQlosaUJBQWFJLG1CQUFVUSxNQUZHO0FBRzFCc0YsU0FBSzlGLG1CQUFVUTtBQUhXLEdBQWhCLEVBSVROLFVBTGM7QUFNakJ3Rix1QkFBcUIxRixtQkFBVTZGLEtBQVYsQ0FBZ0I7QUFDbkNGLFNBQUszRixtQkFBVVEsTUFEb0I7QUFFbkNaLGlCQUFhSSxtQkFBVVEsTUFGWTtBQUduQ3NGLFNBQUs5RixtQkFBVVE7QUFIb0IsR0FBaEIsRUFJbEJOLFVBVmM7QUFXakJVLFNBQU9aLG1CQUFVUSxNQUFWLENBQWlCTixVQVhQO0FBWWpCdUYsUUFBTXpGLG1CQUFVUSxNQUFWLENBQWlCTixVQVpOO0FBYWpCNEMsT0FBSzlDLG1CQUFVUSxNQUFWLENBQWlCTjtBQWJMLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVNNkYsWSxxQkFBTixNQUFNQSxZQUFOLFNBQTJCOUQsZ0JBQTNCLENBQXFDO0FBV25DQyxzQkFBb0I7QUFDbEIsVUFBTTtBQUFFRTtBQUFGLFFBQWtCLEtBQUtELEtBQTdCO0FBQ0EsU0FBS0EsS0FBTCxDQUFXNkQsaUJBQVgsQ0FBNkI7QUFBRTVELG1CQUFhQTtBQUFmLEtBQTdCO0FBQ0Q7O0FBRURDLHFCQUFtQkMsU0FBbkIsRUFBOEI7QUFDNUIsUUFBRyxLQUFLSCxLQUFMLENBQVdDLFdBQVgsS0FBMkJFLFVBQVVGLFdBQXhDLEVBQW9EO0FBQ2xERSxnQkFBVTBELGlCQUFWLENBQTRCO0FBQUU1RCxxQkFBYSxLQUFLRCxLQUFMLENBQVdDO0FBQTFCLE9BQTVCO0FBQ0Q7QUFDRjs7QUFFREcsV0FBUztBQUNQLFVBQU07QUFBRTBEO0FBQUYsUUFBbUIsS0FBSzlELEtBQTlCO0FBQ0EsV0FBTzhELGFBQWF4RCxNQUFiLEdBQXNCLENBQXRCLEdBQ0w7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxZQUFNO0FBQ0o3QixlQUFPLGtCQURIO0FBRUorQyxpQkFDRTtBQUhFO0FBRFIsTUFERixFQVFFLDZCQUFDLGlCQUFEO0FBQU0saUJBQVUsK0JBQWhCO0FBQWdELFVBQUc7QUFBbkQsa0JBUkYsQ0FERixFQWFFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNBLDZCQUFDLGVBQUQ7QUFDRSxVQUFHLGNBREw7QUFFRSxrQkFBVyxPQUZiO0FBR0Usb0JBQWMsRUFIaEI7QUFJRSxxQkFBYyxNQUpoQjtBQUtFLG9CQUFjO0FBQUU3RSxlQUFPLEdBQVQ7QUFBY1IsZ0JBQVE7QUFBdEIsT0FMaEI7QUFNRTtBQU5GLE9BUUcySCxnQkFDQ0EsYUFBYXZELEdBQWIsQ0FBaUIsQ0FBQ3dELFFBQUQsRUFBV3hCLEtBQVgsS0FBcUI7QUFDcEMsYUFDRTtBQUFLLG1CQUFVLDJCQUFmO0FBQTJDLGFBQUtBO0FBQWhELFNBQ0UsNkJBQUMsYUFBRDtBQUNFLFlBQUl3QixTQUFTdEIsRUFEZjtBQUVFLGVBQU9zQixTQUFTdEYsS0FGbEI7QUFHRSxvQkFBWXNGLFNBQVNOLFVBSHZCO0FBSUUsNkJBQXFCTSxTQUFTUixtQkFKaEM7QUFLRSxjQUFNUSxTQUFTQyxRQUxqQjtBQU1FLGFBQUtELFNBQVNwRDtBQU5oQixRQURGLENBREY7QUFZRCxLQWJELENBVEosQ0FEQSxDQURGLENBYkYsQ0FESyxHQTJDSCxJQTNDSjtBQTRDRDs7QUFwRWtDLEMsU0FDNUIvQyxTLEdBQVk7QUFDakJrRyxnQkFBY2pHLG1CQUFVRyxLQUFWLENBQWdCRCxVQURiO0FBRWpCOEYscUJBQW1CaEcsbUJBQVVvRyxJQUZaO0FBR2pCaEUsZUFBYXBDLG1CQUFVUTtBQUhOLEMsU0FNWkMsWSxHQUFlO0FBQ3BCMkIsZUFBYTtBQURPLEM7ZUFnRVQyRCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FZjs7OztBQUVPLE1BQU1NLFdBQVduSSxtQkFBVUMsR0FBVixDQUFjO0FBQ3BDRyxVQUFRLE9BRDRCO0FBRXBDQyxZQUFVLFFBRjBCO0FBR3BDTyxTQUFPLE1BSDZCO0FBSXBDLFdBQVM7QUFDUEgsY0FBVSxNQURIO0FBRVBFLGVBQVc7QUFGSixHQUoyQjtBQVFwQyxzQkFBb0I7QUFDbEJMLGFBQVMsTUFEUztBQUVsQkMsZ0JBQVksUUFGTTtBQUdsQkMsb0JBQWdCLFFBSEU7QUFJbEI0SCxxQkFBaUIsaUJBSkM7QUFLbEIsV0FBTztBQUNMM0UsYUFBTyxNQURGO0FBRUw0RSxjQUFRLGdCQUZIO0FBR0xqRixlQUFTO0FBSEo7QUFMVyxHQVJnQjtBQW1CcEMsNEJBQTBCO0FBQ3hCOUMsYUFBUztBQURlO0FBbkJVLENBQWQsQ0FBakI7Ozs7QUF3QkEsTUFBTWdJLGVBQWV0SSxtQkFBVUMsR0FBVixDQUFjO0FBQ3hDc0ksY0FBWTtBQUQ0QixDQUFkLENBQXJCOzs7O0FBSUEsTUFBTUMsZUFBZXhJLG1CQUFVQyxHQUFWLENBQWM7QUFDeENLLFdBQVMsTUFEK0I7QUFFeENFLGtCQUFnQjtBQUZ3QixDQUFkLENBQXJCOzs7O0FBS0EsTUFBTWlJLGFBQWF6SSxtQkFBVTBJLEVBQVYsQ0FBYTtBQUNyQ25GLFlBQVUsTUFEMkI7QUFFckNELGNBQVksTUFGeUI7QUFHckNsRCxVQUFRO0FBSDZCLENBQWIsQ0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DUDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLE1BQU13QyxZQUFZLDZCQUFXLHlCQUMzQkMsVUFBVTtBQUNSa0YsZ0JBQWMsbUJBQUtsRixLQUFMLEVBQVcsMkJBQVgsRUFBdUMsRUFBdkM7QUFETixDQUFWLENBRDJCLEVBR3ZCO0FBQ0ZpRjtBQURFLENBSHVCLEVBS3hCRCxxQkFMd0IsQ0FBWCxDQUFsQjtlQU9lO0FBQ2JqRixXQURhO0FBRWJHLFdBQVM7QUFDUCtFO0FBRE8sR0FGSTtBQUtiN0UsaUJBQWU2RTtBQUxGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNbEYsWUFBWSw2QkFBVyx5QkFDM0JDLFVBQVU7QUFDUjhGLGtCQUFnQixzQkFBUTlGLEtBQVI7QUFEUixDQUFWLENBRDJCLEVBR3ZCK0YsdUJBSHVCLENBQVgsQ0FBbEI7ZUFLZTtBQUNiaEcsV0FEYTtBQUViRyxXQUFTO0FBQ1A4RjtBQURPLEdBRkk7QUFLYjVGLGlCQUFlNEY7QUFMRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JmOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOzs7Ozs7QUFFQSxNQUFNQyw0QkFBNEIsY0FBbEM7SUFZTUMsYyxXQVZMLHlCQUNDbEcsVUFBVTtBQUNSbUcsMkJBQXlCLDZDQUF3Qm5HLEtBQXhCLENBRGpCO0FBRVJvRyxrQkFBZ0IsdUNBQWtCcEcsS0FBbEI7QUFGUixDQUFWLENBREQsRUFLQztBQUNFcUc7QUFERixDQUxELEMsbUNBQUQsTUFVTUgsY0FWTixTQVU2QnpCLGVBQU12RCxTQVZuQyxDQVU2QztBQWtCM0NvRixjQUFZbEYsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS3BCLEtBQUwsR0FBYTtBQUNYb0csc0JBQWdCO0FBREwsS0FBYjtBQUdBLFNBQUtHLG1CQUFMLEdBQTJCLEtBQUtBLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUEzQjtBQUNEOztBQUVEckYsc0JBQW9CO0FBQ2xCLFNBQUtvRixtQkFBTCxDQUF5QixLQUFLbkYsS0FBTCxDQUFXcUYsZ0JBQXBDO0FBQ0Q7O0FBRURGLHNCQUFvQkcsU0FBcEIsRUFBK0I7QUFDN0IsVUFBTTtBQUFFQztBQUFGLFFBQWMsS0FBS3ZGLEtBQXpCO0FBQ0EsUUFBSWdGLGlCQUFpQk8sV0FBV0EsUUFBUUMsR0FBUixDQUFZWCx5QkFBWixDQUFoQzs7QUFDQSxRQUFJLE9BQU9HLGNBQVAsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekNBLHVCQUFpQixFQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMQSx1QkFBaUJBLGVBQWVTLEtBQWYsQ0FBcUIsR0FBckIsQ0FBakI7QUFDRDs7QUFDRCxRQUFJVCxlQUFlVSxPQUFmLENBQXVCSixTQUF2QixNQUFzQyxDQUFDLENBQTNDLEVBQThDO0FBQzVDTix1QkFBaUJBLGVBQWVXLE1BQWYsQ0FBc0JsRCxNQUFNQSxPQUFPNkMsU0FBbkMsQ0FBakI7QUFDRDs7QUFDRE4sbUJBQWVZLElBQWYsQ0FBb0JOLFNBQXBCO0FBQ0FOLHFCQUFpQkEsZUFBZWEsSUFBZixDQUFvQixHQUFwQixDQUFqQjs7QUFDQSxRQUFJLE9BQU9OLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbENBLGNBQVFPLEdBQVIsQ0FBWWpCLHlCQUFaLEVBQXVDRyxjQUF2QztBQUNEOztBQUNELFNBQUtqRCxRQUFMLENBQWM7QUFDWmlEO0FBRFksS0FBZCxFQUVHLE1BQU07QUFDUCxXQUFLaEYsS0FBTCxDQUFXaUYsa0JBQVgsQ0FBOEI7QUFDNUJjLHdCQUFnQixLQUFLL0YsS0FBTCxDQUFXcUYsZ0JBREM7QUFFNUJXLGtDQUEwQixLQUFLcEgsS0FBTCxDQUFXb0csY0FGVDtBQUc1QmlCLHNCQUFjLEtBQUtqRyxLQUFMLENBQVdrRztBQUhHLE9BQTlCO0FBS0QsS0FSRDtBQVNEOztBQUVEOUYsV0FBUztBQUNQLFFBQUksQ0FBQyxLQUFLSixLQUFMLENBQVcrRSx1QkFBaEIsRUFBeUM7QUFDdkMsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBTTtBQUFFQyxvQkFBRjtBQUFrQm1CO0FBQWxCLFFBQWlDLEtBQUtuRyxLQUE1QztBQUNBLFVBQU13QixVQUFVLGlCQUFoQjtBQUNBLFVBQU00RSxhQUFhO0FBQ2pCNUUsYUFEaUI7QUFFakI2RSxvQkFBY3JCO0FBRkcsS0FBbkI7QUFJQSxXQUFPQSxlQUFlMUUsTUFBZixHQUF3QixDQUF4QixHQUNMO0FBQUssaUJBQVUsNkRBQWY7QUFBNkUsYUFBTzZGO0FBQXBGLE9BQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxZQUFNO0FBQ0ozRSxpQkFBUyxpQkFETDtBQUVKQyxvQkFDRTtBQUhFO0FBRFIsTUFERixFQVFFO0FBQUssaUJBQVU7QUFBZixPQUNBLDZCQUFDLGVBQUQ7QUFDRSxVQUFHLGdCQURMO0FBRUUsa0JBQVcsT0FGYjtBQUdFLG9CQUFjLEVBSGhCO0FBSUUscUJBQWMsTUFKaEI7QUFLRSwyQkFMRjtBQU1FLG9CQUFjO0FBQUU5RSxlQUFPLEdBQVQ7QUFBY1IsZ0JBQVE7QUFBdEI7QUFOaEIsT0FTSTZJLGtCQUFrQkEsZUFBZTFFLE1BQWpDLEdBQ0UwRSxlQUFlekUsR0FBZixDQUFtQixDQUFDK0YsV0FBRCxFQUFjN0YsQ0FBZCxLQUNqQjtBQUFLLFdBQUtBO0FBQVYsT0FDRSw2QkFBQyw4QkFBRDtBQUF1QixlQUFTLGlCQUFoQztBQUFtRCxZQUFNNkYsV0FBekQ7QUFBc0UsdUJBQWlCO0FBQXZGLE1BREYsQ0FERixDQURGLEdBS08sSUFkWCxDQURBLENBUkYsQ0FESyxHQTZCSCxJQTdCSjtBQThCRDs7QUFqRzBDLEMsVUFDcEMxSSxTLEdBQVk7QUFDakJtSCwyQkFBeUJsSCxxQkFBVUssSUFBVixDQUFlSCxVQUR2QjtBQUVqQmlILGtCQUFnQm5ILHFCQUFVRyxLQUFWLENBQWdCRCxVQUZmO0FBR2pCc0gsb0JBQWtCeEgscUJBQVUwSSxNQUFWLENBQWlCeEksVUFIbEI7QUFJakJrSCxzQkFBb0JwSCxxQkFBVW9HLElBQVYsQ0FBZWxHLFVBSmxCO0FBS2pCd0gsV0FBUywyQkFBV2lCLG9CQUFYLEVBQW9CekksVUFMWjtBQU1qQm1JLGlCQUFlckkscUJBQVUwSSxNQU5SO0FBT2pCSixjQUFZdEkscUJBQVVDO0FBUEwsQyxVQVNaUSxZLEdBQWU7QUFDcEIwRyxrQkFBZ0IsRUFESTtBQUVwQkMsc0JBQW9CLE1BQU0sQ0FDekIsQ0FIbUI7QUFJcEJGLDJCQUF5QixLQUpMO0FBS3BCb0IsY0FBWTtBQUxRLEM7O2VBMEZULDhCQUFZckIsY0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SGY7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRXFCMkIsVyxxQkFBTixNQUFNQSxXQUFOLFNBQTBCM0csZ0JBQTFCLENBQW9DO0FBVWpETSxXQUFTO0FBQ1AsVUFBTTtBQUFFc0csYUFBRjtBQUFXekc7QUFBWCxRQUEyQixLQUFLRCxLQUF0QztBQUNBLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsbUJBQUQ7QUFBWSxlQUFTO0FBQUUyRyxnQkFBUTFHO0FBQVY7QUFBckIsT0FBOEM7QUFBTSxpQkFBVTtBQUFoQixPQUE4Q3lHLE9BQTlDLENBQTlDLENBREYsQ0FERjtBQUtEOztBQWpCZ0QsQyxTQUMxQzlJLFMsR0FBWTtBQUNqQjhJLFdBQVM3SSxtQkFBVVEsTUFERjtBQUVqQjRCLGVBQWFwQyxtQkFBVVE7QUFGTixDLFNBS1pDLFksR0FBZTtBQUNwQm9JLFdBQVMsaUJBRFc7QUFFcEJ6RyxlQUFhO0FBRk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWeEI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNMkcsYUFBYTdLLG1CQUFVQyxHQUFWLENBQWM7QUFDL0JHLFVBQVEsT0FEdUI7QUFFL0JDLFlBQVUsUUFGcUI7QUFHL0IsV0FBUztBQUNQTyxXQUFPLE1BREE7QUFFUEQsZUFBVztBQUZKO0FBSHNCLENBQWQsQ0FBbkI7O0FBU0EsTUFBTW1LLHFCQUFxQjtBQUN6QkMsV0FBUyxnQkFEZ0I7QUFFekJDLE9BQUs7QUFGb0IsQ0FBM0I7O0FBS0EsTUFBTUMsU0FBUyxDQUFDO0FBQUUzRixNQUFGO0FBQVFwQjtBQUFSLENBQUQsS0FDYjtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLFVBQUQ7QUFBWSxhQUFVO0FBQXRCLEdBQ0UsNkJBQUMsWUFBRDtBQUFLLFNBQU8sR0FBWjtBQUFpQixVQUFRLEdBQXpCO0FBQ0ssU0FBUSxHQUFFZ0gsbUJBQU9DLE1BQVAsQ0FBY0MsTUFBTywwREFEcEM7QUFFSyxPQUFJO0FBRlQsRUFERixFQUlFO0FBQUcsYUFBVTtBQUFiLEdBQStEOUYsS0FBSzVDLEtBQXBFLENBSkYsQ0FERixFQU9FO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBRyxhQUFVO0FBQWIsR0FBNEI0QyxLQUFLRyxPQUFqQyxDQURGLEVBRUUsNkJBQUMsbUJBQUQ7QUFBWSxXQUFTO0FBQUVtRixZQUFRMUc7QUFBVjtBQUFyQixHQUNFO0FBQU0sYUFBVTtBQUFoQiwyQkFERixDQUZGLENBUEYsQ0FERjs7QUFpQkErRyxPQUFPcEosU0FBUCxHQUFtQjtBQUNqQnFDLGVBQWFwQyxtQkFBVVEsTUFETjtBQUVqQmdELFFBQU14RCxtQkFBVUM7QUFGQyxDQUFuQjtBQUtBa0osT0FBTzFJLFlBQVAsR0FBc0I7QUFDcEIyQixlQUFhLEVBRE87QUFFcEJvQixRQUFNLE1BQU0sQ0FBRTtBQUZNLENBQXRCO2VBS2UyRixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZjs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1JLElBQUlyTCxtQkFBVXNMLENBQVYsQ0FBWTtBQUNwQmhJLGNBQVk7QUFEUSxDQUFaLENBQVY7O0lBSU1pSSxLLEdBQU4sTUFBTUEsS0FBTixTQUFvQmpFLGVBQU12RCxTQUExQixDQUFvQztBQUNsQ00sV0FBUztBQUNQLFVBQU07QUFBRW1IO0FBQUYsUUFBWSxLQUFLdkgsS0FBdkI7QUFDQSxVQUFNd0gsT0FBTyxnQkFBZ0IsS0FBS3hILEtBQUwsQ0FBV0MsV0FBeEM7QUFDQSxXQUNFO0FBQUssaUJBQVUsY0FBZjtBQUE4QixhQUFNLHFCQUFwQztBQUEwRCxnQkFBTztBQUFqRSxPQUNFO0FBQU0saUJBQVUsTUFBaEI7QUFBdUIsZ0JBQVM7QUFBaEMsT0FBd0N1SCxJQUF4QyxDQURGLEVBRUUsNkJBQUMsQ0FBRDtBQUFHLGlCQUFVLGFBQWI7QUFBMkIsZ0JBQVMsaUJBQXBDO0FBQXNELGdCQUFPO0FBQTdELGlCQUFxRjtBQUFNLGdCQUFTO0FBQWYsT0FBOEJELE1BQU1FLGFBQXBDLENBQXJGLE9BQWdKRixNQUFNRyxLQUF0SixpQkFBdUs7QUFBTSxnQkFBUztBQUFmLE9BQThCSCxNQUFNSSxZQUFwQyxDQUF2SyxlQUZGLENBREY7QUFNRDs7QUFWaUMsQztBQWFwQ0wsTUFBTTFKLFNBQU4sR0FBa0I7QUFDaEIySixTQUFPMUosbUJBQVVDLE1BREQ7QUFFaEJtQyxlQUFjcEMsbUJBQVVRO0FBRlIsQ0FBbEI7QUFLQWlKLE1BQU1oSixZQUFOLEdBQXFCO0FBQ25CaUosU0FBTyxFQURZO0FBRW5CdEgsZUFBYTtBQUZNLENBQXJCO2VBS2VxSCxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CZjs7QUFDQTs7QUFFQTs7OztBQVNBLE1BQU1NLHFCQUFxQjdMLG1CQUFVQyxHQUFWLENBQWMsRUFBZCxDQUEzQjs7QUFHQSxNQUFNNkwsa0JBQWtCOUwsbUJBQVVDLEdBQVYsQ0FBYztBQUNwQ0csVUFBUSxNQUQ0QjtBQUVwQ1EsU0FBTyxNQUY2QjtBQUdwQ1QsWUFBVSxVQUgwQjtBQUlwQ2tELFVBQVEsYUFKNEI7QUFLcEMsV0FBUztBQUNQbEQsY0FBVSxVQURIO0FBRVA0TCxlQUFXO0FBRko7QUFMMkIsQ0FBZCxDQUF4Qjs7QUFXQSxNQUFNQyxjQUFjLE1BQ2xCO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFHLGFBQVU7QUFBYix5Q0FERixFQUVFLDZCQUFDLGtCQUFEO0FBQW9CLGFBQVU7QUFBOUIsR0FDRTtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGVBQUQ7QUFBaUIsYUFBVTtBQUEzQixHQUE0RCw2QkFBQyxnQkFBRCxPQUE1RCxDQURGLEVBRUU7QUFBRyxhQUFVO0FBQWIsVUFGRixFQUdFO0FBQUcsYUFBVTtBQUFiLHFCQUhGLENBREYsRUFPRTtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGVBQUQ7QUFBaUIsYUFBVTtBQUEzQixHQUNFLDZCQUFDLG1CQUFELE9BREYsQ0FERixFQUlFO0FBQUcsYUFBVTtBQUFiLGFBSkYsRUFLRTtBQUFHLGFBQVU7QUFBYixzQkFMRixDQVBGLEVBZUU7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxlQUFEO0FBQWlCLGFBQVU7QUFBM0IsR0FBNEQsNkJBQUMsdUJBQUQsT0FBNUQsQ0FERixFQUVFO0FBQUcsYUFBVTtBQUFiLFNBRkYsRUFHRTtBQUFHLGFBQVU7QUFBYixrQkFIRixDQWZGLENBRkYsQ0FERixFQXlCRTtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUcsYUFBVTtBQUFiLDZCQURGLEVBRUUsNkJBQUMsa0JBQUQ7QUFBb0IsYUFBVTtBQUE5QixHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsZUFBRDtBQUFpQixhQUFVO0FBQTNCLEdBQTRELDZCQUFDLG9CQUFELE9BQTVELENBREYsRUFFRTtBQUFHLGFBQVU7QUFBYixvQkFGRixFQUdFO0FBQUcsYUFBVTtBQUFiLGNBSEYsQ0FERixFQU9FO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsZUFBRDtBQUFpQixhQUFVO0FBQTNCLEdBQTRELDZCQUFDLHVCQUFELE9BQTVELENBREYsRUFFRTtBQUFHLGFBQVU7QUFBYixlQUZGLEVBR0U7QUFBRyxhQUFVO0FBQWIscUJBSEYsQ0FQRixFQWFFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsZUFBRDtBQUFpQixhQUFVO0FBQTNCLEdBQTRELDZCQUFDLGtCQUFELE9BQTVELENBREYsRUFFRTtBQUFHLGFBQVU7QUFBYixVQUZGLEVBR0U7QUFBRyxhQUFVO0FBQWIsYUFIRixDQWJGLENBRkYsQ0F6QkYsQ0FERjs7ZUFtRGVBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VmOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLE1BQU1DLGtCQUFrQmpNLG1CQUFVQyxHQUFWLENBQWM7QUFDcENHLFVBQVE7QUFENEIsQ0FBZCxDQUF4Qjs7QUFJQSxNQUFNOEwsZ0JBQWdCbE0sbUJBQVVDLEdBQVYsQ0FBYztBQUNsQ1csU0FBTyxNQUQyQjtBQUVsQ1IsVUFBUSxNQUYwQjtBQUdsQ3lELFVBQVEsTUFIMEI7QUFJbENzSSxhQUFXO0FBSnVCLENBQWQsQ0FBdEI7O0FBT0EsTUFBTUMsZ0JBQWdCLE1BQU07QUFDMUIsU0FBTztBQUFLLFFBQUcsc0JBQVI7QUFBK0IsZUFBVSwwQ0FBekM7QUFBb0YsYUFBU0M7QUFBN0YsSUFBUDtBQUNELENBRkQ7O0lBSU1DLFMscUJBQU4sTUFBTUEsU0FBTixTQUF3QnZJLGdCQUF4QixDQUFrQztBQUNoQ29GLGNBQVlsRixLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCOztBQUVqQixTQUFLcEIsS0FBTCxHQUFhO0FBQ1hxQixtQkFBYTtBQURGLEtBQWI7QUFHRDs7QUFFREYsc0JBQW9CO0FBQ2xCdUksYUFBU0MsVUFBVCxLQUF3QixVQUF4QixHQUFxQyx1Q0FBckMsR0FDRUMsT0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NDLGdDQUFoQyxDQURGO0FBRUEsU0FBS0MscUJBQUwsQ0FBMkIsS0FBSzNJLEtBQWhDO0FBQ0Q7O0FBRURFLHFCQUFtQkMsU0FBbkIsRUFBOEI7QUFDNUIsUUFBSSxLQUFLSCxLQUFMLENBQVczQyxRQUFYLENBQW9CRSxRQUFwQixLQUFpQzRDLFVBQVU5QyxRQUFWLENBQW1CRSxRQUF4RCxFQUFrRTtBQUNoRSxXQUFLb0wscUJBQUwsQ0FBMkIsS0FBSzNJLEtBQWhDO0FBQ0Q7QUFDRjs7QUFjREksV0FBUztBQUNQLFVBQU07QUFBRS9DLGNBQUY7QUFBWXVMLGVBQVo7QUFBdUJDLFlBQXZCO0FBQStCQyxpQkFBL0I7QUFBNENDO0FBQTVDLFFBQTRELEtBQUsvSSxLQUF2RTtBQUNBLFVBQU07QUFBRUssVUFBRjtBQUFRSixpQkFBUjtBQUFxQnNILFdBQXJCO0FBQTRCeUI7QUFBNUIsUUFBZ0RKLFNBQXREO0FBQ0EsVUFBTXBJLE1BQU1xSSxPQUFPQSxPQUFPdkksTUFBUCxHQUFnQixDQUF2QixFQUEwQkUsR0FBdEM7QUFDQSxVQUFNeUksMEJBQTBCQyx3QkFBZXZLLFNBQS9DO0FBQ0EsVUFBTXdLLDJCQUEyQkMsd0JBQWdCekssU0FBakQ7QUFDQSxVQUFNMEssZ0JBQWdCcEcsY0FBS3RFLFNBQTNCO0FBQ0EsVUFBTTJLLDBCQUEwQjNFLHdCQUFlaEcsU0FBL0M7QUFDQSxVQUFNN0Msa0JBQWtCbUIsZ0JBQU8wQixTQUEvQjtBQUNBLFVBQU00Syx3QkFBd0IzRixzQkFBYWpGLFNBQTNDO0FBQ0EsVUFBTTZLLDJCQUEyQkMsaUJBQWdCOUssU0FBakQ7QUFDQSxVQUFNK0ssY0FBY3JNLFNBQVNzTSxLQUFULENBQWVELFdBQWYsR0FBOEJyTSxTQUFTc00sS0FBVCxDQUFlRCxXQUFmLEtBQStCLElBQS9CLEdBQXNDLEVBQXRDLEdBQ2hELDhCQUFlck0sU0FBU3NNLEtBQVQsQ0FBZUQsV0FBOUIsSUFBNkMsQ0FEM0IsR0FDZ0MsbUNBQW9CLENBRHhFO0FBR0EsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLFVBQUcsWUFBUjtBQUFxQixpQkFBVSxZQUEvQjtBQUE0QyxlQUFTRSxLQUFLLDJCQUFVQSxDQUFWO0FBQTFELE1BREYsRUFFRzNKLGdCQUFnQixPQUFoQixHQUNDLDZCQUFDLGVBQUQ7QUFBaUIsaUJBQVU7QUFBM0IsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxtQkFBRDtBQUFZLHFCQUFlO0FBQTNCLE1BREYsQ0FERixFQUlFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLGVBQUQ7QUFBaUIscUJBQWUsSUFBaEM7QUFBc0MsbUJBQWE7QUFBbkQsTUFERixDQUpGLENBREQsR0FTQywwQ0FDRSw2QkFBQyxtQkFBRCxPQURGLEVBRUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsZUFBRDtBQUFpQixtQkFBYTtBQUE5QixNQURGLENBRkYsQ0FYSixFQWtCRTtBQUFLLGlCQUFVLGtCQUFmO0FBQWtDLFVBQUc7QUFBckMsT0FDRSw2QkFBQyxxQkFBRDtBQUFjLFlBQU1JLElBQXBCO0FBQTBCLG1CQUFhSjtBQUF2QyxNQURGLENBbEJGLEVBcUJFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLHVCQUFEO0FBQXlCLFdBQUtPLEdBQTlCO0FBQW1DLGdCQUFVbkQ7QUFBN0MsTUFERixDQXJCRixFQXdCR2dHLGVBQU13RyxZQUFOLENBQW1CLEtBQUs3SixLQUFMLENBQVdrQixRQUE5QixFQUF3QztBQUFFNEksa0JBQVkzQjtBQUFkLEtBQXhDLENBeEJILEVBMEJJYSxtQkFBbUJBLGdCQUFnQjFJLE1BQW5DLEdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsd0JBQUQ7QUFBMEIsbUJBQWFvSjtBQUF2QyxNQURGLENBREYsR0FHVyxJQTdCZixFQStCRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxvQkFBRCxPQURGLENBL0JGLEVBa0NFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLHVCQUFEO0FBQXlCLG1CQUFheko7QUFBdEMsTUFERixDQWxDRixFQXFDSThJLFlBQVl6SSxNQUFaLEdBQXFCLDZCQUFDLHFCQUFEO0FBQWMsbUJBQWF5STtBQUEzQixNQUFyQixHQUFpRSxJQXJDckUsRUFzQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsd0JBQUQ7QUFBMEIsa0JBQVk7QUFBRWdCLHNCQUFjO0FBQWhCLE9BQXRDO0FBQTZELFlBQU07QUFDakV0TCxlQUFPLHNCQUQwRDtBQUVqRStDLGlCQUFTO0FBRndELE9BQW5FO0FBR0csY0FBUTtBQUFFd0ksYUFBSztBQUFQLE9BSFg7QUFHMEIsbUJBQWEvSixXQUh2QztBQUkwQixlQUFRO0FBSmxDLE1BREYsQ0F0Q0YsRUE2Q0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMscUJBQUQ7QUFBdUIsa0JBQVk7QUFBRThKLHNCQUFjO0FBQWhCLE9BQW5DO0FBQTBELG1CQUFhOUo7QUFBdkUsTUFERixDQTdDRixFQWdERTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxlQUFEO0FBQVEsWUFBTTtBQUNaeEIsZUFBTyw2Q0FESztBQUVaK0MsaUJBQVM7QUFGRyxPQUFkO0FBR0csbUJBQWF2QjtBQUhoQixNQURGLENBaERGLEVBd0RHQSxlQUFlLE9BQWYsR0FDQyxJQURELEdBRUM7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsYUFBRCxPQURGLENBMURKLEVBK0RFLDZCQUFDLGVBQUQ7QUFBZ0Isd0JBQWtCO0FBQWxDLE1BL0RGLEVBaUVFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLG1CQUFEO0FBQVksbUJBQWE2STtBQUF6QixNQURGLEVBRUUsNkJBQUMsY0FBRDtBQUFPLGFBQU92QixLQUFkO0FBQXFCLG1CQUFhdEg7QUFBbEMsTUFGRixDQWpFRixFQXNFSU8sUUFBUSxpQkFBUixJQUE2QkEsUUFBUSxjQUFyQyxHQUNFLElBREYsR0FFRSw2QkFBQyxhQUFEO0FBQWUsaUJBQVU7QUFBekIsT0FBdUMsNkJBQUMsa0JBQUQsT0FBdkMsQ0F4RU4sRUEwRUUsNkJBQUMsb0JBQUQ7QUFBYSxtQkFBYVA7QUFBMUIsTUExRUYsRUEyRUU7QUFBSyxpQkFBVTtBQUFmLE9BQTJCLDZCQUFDLGVBQUQsT0FBM0IsQ0EzRUYsQ0FERjtBQStFRDs7QUE3SCtCLEM7T0FvQmhDMEkscUIsR0FBeUIzSSxLQUFELElBQVc7QUFDakMsVUFBTTtBQUFFNEk7QUFBRixRQUFnQjVJLEtBQXRCO0FBQ0EsdUJBQU8sTUFBTTtBQUNYLHVDQUFhO0FBQ1hpSyxlQUFPQyxrQ0FESTtBQUVYQywwQkFBa0J2QixVQUFVM0ksV0FGakI7QUFHWG1LLHdCQUFnQixDQUhMO0FBSVhDLDBCQUFrQjtBQUpQLE9BQWI7QUFNRCxLQVBEO0FBUUQsRzs7QUFrR0hoQyxVQUFVekssU0FBVixHQUFzQjtBQUNwQmdMLGFBQVcvSyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEUjtBQUVwQm1ELFlBQVVyRCxtQkFBVUcsS0FBVixDQUFnQkQsVUFGTjtBQUdwQnVNLGlCQUFlek0sbUJBQVVDLE1BSEw7QUFJcEJULFlBQVVRLG1CQUFVQyxNQUFWLENBQWlCQyxVQUpQO0FBS3BCK0ssZUFBYWpMLG1CQUFVRyxLQUxIO0FBTXBCa0UsUUFBTXJFLG1CQUFVRyxLQU5JO0FBT3BCNkssVUFBUWhMLG1CQUFVQyxNQUFWLENBQWlCQyxVQVBMO0FBUXBCK0wsY0FBWWpNLG1CQUFVQyxNQUFWLENBQWlCQyxVQVJUO0FBU3BCZ0wsZUFBYWxMLG1CQUFVRztBQVRILENBQXRCO0FBWUFxSyxVQUFVL0osWUFBVixHQUF5QjtBQUN2QmdNLGlCQUFlLEVBRFE7QUFFdkJ4QixlQUFhO0FBRlUsQ0FBekI7ZUFLZVQsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TGYsU0FBUzNGLGlCQUFULEdBQTZCO0FBQzNCLE1BQUksT0FBTzhGLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNBLFdBQU8rQixRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0Q7QUFDRjs7ZUFFYzdILGlCOzs7Ozs7Ozs7Ozs7QUNOZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiY2l0eS1ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IEJhbm5lckNvbnRlbnQgZnJvbSAnLi9CYW5uZXJDb250ZW50JztcbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcbmltcG9ydCB7IGNyZWF0ZUhlbG1ldEJhbm5lciB9IGZyb20gJ2hlbHBlcnMvc2VvSGVscGVycyc7XG5cbmNvbnN0IEJhbm5lckNvbnRhaW5lciA9IGdsYW1vcm91cy5kaXYoKHsgaXNMYXJnZUJhbm5lciB9KSA9PiAoe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiBpc0xhcmdlQmFubmVyID8gJzI3MHB4JyA6ICcxNTBweCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAnJiBpbWcnOiB7XG4gICAgbWluV2lkdGg6ICdhdXRvJyxcbiAgICBtYXhXaWR0aDogJ25vbmUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnXG4gIH0sXG4gICcmOmFmdGVyJzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4zKScsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzAnLFxuICAgIGNvbnRlbnQ6ICdcXCcgXFwnJyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgfVxufSkpO1xuXG5jb25zdCBCYW5uZXIgPSAoeyBiYW5uZXIsIGlzTGFyZ2VCYW5uZXIsIGNhbm9uaWNhbFVybCwgaXNDaXR5QmxvY2ssIGxvY2F0aW9uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgIDxIZWxtZXQ+XG4gICAgICB7Y3JlYXRlSGVsbWV0QmFubmVyKGJhbm5lci5tZXRhVGFncywgY2Fub25pY2FsVXJsLCBsb2NhdGlvbi5wYXRobmFtZSl9XG4gICAgPC9IZWxtZXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmM1IHJlbGF0aXZlXCI+XG4gICAgICA8QmFubmVyQ29udGFpbmVyXG4gICAgICAgIGlzTGFyZ2VCYW5uZXI9e2lzTGFyZ2VCYW5uZXJ9XG4gICAgICAgIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBpc0NpdHlCbG9jayA/XG4gICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9IGhlaWdodD17MjcwfVxuICAgICAgICAgICAgICBzcmM9e2Jhbm5lci5pbWFnZX0gaWtTcmM9e2Jhbm5lci5pbWFnZWtpdFVybH0gYWx0PXtiYW5uZXIuYWx0VGV4dH0gLz4gOlxuICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICB3aWR0aD17NTAwfSBoZWlnaHQ9ezI3MH1cbiAgICAgICAgICAgICAgc3JjPXtiYW5uZXIuaW1hZ2UgJiYgYmFubmVyLmltYWdlLm1vYmlsZX1cbiAgICAgICAgICAgICAgYWx0PXtiYW5uZXIuYWx0VGV4dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvQmFubmVyQ29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBwMTUgbDAgcjAgYjAgejJcIj5cbiAgICAgICAgPEJhbm5lckNvbnRlbnQgYmFubmVyPXtiYW5uZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5CYW5uZXIucHJvcFR5cGVzID0ge1xuICBiYW5uZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbWV0YVRhZ3M6IFByb3BUeXBlcy5hcnJheSxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHNob3dFeHBsb3JlRm9ybTogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dEdXJhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGJhbm5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc0xhcmdlQmFubmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2Fub25pY2FsVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0NpdHlCbG9jazogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkJhbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIG1ldGFUYWdzOiBbXSxcbiAgc2hvd0V4cGxvcmVGb3JtOiBmYWxzZSxcbiAgc2hvd0R1cmF0aW9uOiBmYWxzZSxcbiAgYmFubmVyU3R5bGU6IHt9LFxuICBpc0xhcmdlQmFubmVyOiBmYWxzZSxcbiAgY2Fub25pY2FsVXJsOiAnJyxcbiAgaXNDaXR5QmxvY2s6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQmFubmVyQ29udGVudCA9ICh7IGJhbm5lciwgc2hvd0Rlc2NyaXB0aW9ufSkgPT4ge1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCB0ZXh0LWxlZnRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZmN3IGYyNCBmdzkgc2ZjdyBtMCBtYjRcIj57YmFubmVyLnRpdGxlfTwvaDE+XG4gICAgICB7c2hvd0Rlc2NyaXB0aW9uICYmIDxoNSBjbGFzc05hbWU9XCJzZmN3IGZ3NCBmMTIgbTBcIj57YmFubmVyLmRlc2NyaXB0aW9ufTwvaDU+fVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJhbm5lckNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBiYW5uZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2hvd0Rlc2NyaXB0aW9uOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuQmFubmVyQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3dEZXNjcmlwdGlvbjogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0JztcblxuaW1wb3J0IHsgZmV0Y2hCYW5uZXJEYXRhIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuL0Jhbm5lcic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBiYW5uZXI6IF9nZXQoc3RhdGUsICdiYW5uZXIuZGF0YS5iYW5uZXInLCB7fSkgLy8gQ2l0eWJsb2NrIGRhdGEgYmFubmVyXG4gIH0pKShCYW5uZXIpKTtcblxuY29uc3QgaGxwQ29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGJhbm5lcjogX2dldChzdGF0ZSwgJ2hscC5kYXRhLmRhdGEuYmFubmVyJywge30pIC8vIEhMUCBkYXRhIGJhbm5lclxuICB9KSkoQmFubmVyKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBobHBDb250YWluZXIsXG4gIGFjdGlvbnM6IHtcbiAgICBmZXRjaEJhbm5lckRhdGFcbiAgfSxcbiAgZGVmYXVsdEFjdGlvbjogZmV0Y2hCYW5uZXJEYXRhXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgTmF2TGluayBmcm9tICcuL05hdkxpbmsnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2hlbHBlcnMvRm9ybURhdGFGb3JtYXR0ZXInO1xuaW1wb3J0IHsgc2V0VmlzaXRlZERlc3RpbmF0aW9uc0Nvb2tpZSB9IGZyb20gJ2FwcC9oZWxwZXJzL3V0aWxzJztcblxuY29uc3QgVWwgPSBnbGFtb3JvdXMudWwoe1xuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gICcmIGxpJzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICcmIGEnOiB7XG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yOScsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBjb2xvcjogJyMzZTNlM2UnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICBtaW5XaWR0aDogJzEyMHB4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgJyYgc3Bhbi5saW5lJzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gICcmIC5uYXZMaW5rU3Bhbi5hY3RpdmUnOiB7XG4gICAgJyYgYSc6IHtcbiAgICAgIGNvbG9yOiAnIzAwOTY4OCcsXG4gICAgICAnJiBzcGFuLmxpbmUnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDA5Njg4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSk7XG5cbmNsYXNzIENpdHlCbG9ja05hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldENvb2tpZSgnY2JfZHQnLCBjYXBpdGFsaXplQW5kUmVwbGFjZURhc2godGhpcy5wcm9wcy5kZXN0aW5hdGlvbikpO1xuICAgIHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUoY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoKHRoaXMucHJvcHMuZGVzdGluYXRpb24pKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmRlc3RpbmF0aW9uICE9PSB0aGlzLnByb3BzLmRlc3RpbmF0aW9uKSB7XG4gICAgICBzZXRDb29raWUoJ2NiX2R0JywgY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoKHRoaXMucHJvcHMuZGVzdGluYXRpb24pKTtcbiAgICAgIHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUoY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoKHRoaXMucHJvcHMuZGVzdGluYXRpb24pKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0YWJzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U3RpY2t5IGVuYWJsZWQ9e3RydWV9IHRvcD17MH0gaW5uZXJaPXs0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IGJiXCI+XG4gICAgICAgICAgPFVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWJzICYmIHRhYnMubGVuZ3RoICYmIHRhYnMubWFwKCh0YWIsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICB7dGFiLm5hbWUgPT09ICdHYWxsZXJ5JyA/XG4gICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2l9IHRvPXtgJHt0YWIudXJsfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YWIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvVWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdGlja3k+KTtcbiAgfVxufVxuXG5DaXR5QmxvY2tOYXYucHJvcFR5cGVzID0ge1xuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFiczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbkNpdHlCbG9ja05hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlc3RpbmF0aW9uOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENpdHlCbG9ja05hdjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNvbnRleHQucm91dGVyLmlzQWN0aXZlKHRoaXMucHJvcHMudG8sIHRydWUpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGlzQWN0aXZlID8gJ2FjdGl2ZSBuYXZMaW5rU3BhbicgOiAnbmF2TGlua1NwYW4nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPExpbmsgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHtcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuTmF2TGluay5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgJy4vSGVhZGluZy5zY3NzJztcblxuY29uc3QgSGVhZGluZyA9ICh7IGRhdGEsIHR5cGUsIHNob3dWaWV3QWxsIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBtYjE1IHJlbGF0aXZlXCI+XG4gICAge1xuICAgICAgKGRhdGEuaGVhZGluZyAmJiBkYXRhLnN1YkhlYWRpbmcpID9cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2Z1bGwgYmxvY2tcIj5cbiAgICAgICAge1xuICAgICAgICAgIHR5cGU9PSdtYWluLWhlYWRpbmcnID9cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYWluSGVhZGluZyBlbGxpcHNpcyBmMTYgbTAgbWI4IHBmYzFcIj57ZGF0YS5oZWFkaW5nfTwvaDI+XG4gICAgICAgICAgICA6IDxoMiBjbGFzc05hbWU9XCJtYWluSGVhZGluZyBlbGxpcHNpcyBmMTYgbTAgbWI4IHBmYzNcIj57ZGF0YS5oZWFkaW5nfTwvaDI+XG4gICAgICAgIH1cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTQgcGZjNFwiPntkYXRhLnN1YkhlYWRpbmd9PC9wPlxuICAgICAgPC9zcGFuPlxuICAgICAgICA6IDxoMiBjbGFzc05hbWU9XCJtYWluSGVhZGluZyBlbGxpcHNpcyBmMTYgbTAgcGZjMVwiPntkYXRhLmhlYWRpbmd9PC9oMj5cbiAgICB9XG4gICAge1xuICAgICAgc2hvd1ZpZXdBbGwgP1xuICAgICAgICA8TGluayB0bz17ZGF0YS51cmx9IGNsYXNzTmFtZT1cImYxMiBhYnNvbHV0ZSByMCB0NFwiPlZpZXcgQWxsPC9MaW5rPlxuICAgICAgICA6IG51bGxcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dWaWV3QWxsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7XG4gICAgaGVhZGluZzogJycsXG4gICAgc3ViSGVhZGluZzogJycsXG4gICAgdXJsOiAnIycsXG4gIH0sXG4gIHR5cGU6ICcnLFxuICBzaG93Vmlld0FsbDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluSGVhZGluZ1wiOiBcIl9tbzF4N1wiXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL0hlYWRpbmcnO1xuaW1wb3J0IHtcbiAgRG93bkFycm93XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBzY3JvbGxXaW5kb3dCeVR3byBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9TY3JvbGxXaW5kb3dGb3JTdGlja3knO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZmFxLmNtLnNjc3MnO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNsYXNzIEZhcSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZpc2libGU6IDYsXG4gIH07XG5cbiAgX2xvYWRNb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHt2aXNpYmxlOiBwcmV2U3RhdGUudmlzaWJsZSArIDN9O1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBkYXRhLGhvdGVsRGlzcGxheU5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYoIShkYXRhLmZhcXMgJiYgZGF0YS5mYXFzLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH07XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmN3IHAxNSBmYXFzXCIgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvRkFRUGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iOFwiPlxuICAgICAgICAgIDxIZWFkaW5nIGRhdGE9e3tcbiAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgaGVhZGluZzogZGF0YS5oZWFkaW5nLFxuICAgICAgICAgICAgZm9ySGVhZGluZzogaG90ZWxEaXNwbGF5TmFtZVxuICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICB7ZGF0YS5mYXFzIGluc3RhbmNlb2YgQXJyYXkgJiYgZGF0YS5mYXFzLnNsaWNlKDAsIHRoaXMuc3RhdGUudmlzaWJsZSkubWFwKChmYXEsIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNsZWFyZml4IGF0X2ZhcV9xdWVzdGlvbnMgJHtzdHlsZXMuZmFxc31gfVxuICAgICAgICAgICAgICAgICBrZXk9e2ZhcS5pZH1cbiAgICAgICAgICAgICAgICAgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9RdWVzdGlvblwiXG4gICAgICAgICAgICAgICAgIGl0ZW1Qcm9wPVwibWFpbkVudGl0eVwiXG4gICAgICAgICAgICAgICAgIGl0ZW1TY29wZVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXtgZmFxJHtpbmRleH1gfSBkZWZhdWx0Q2hlY2tlZD17aW5kZXggPT09IDB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlXCIgb25DaGFuZ2U9e3Njcm9sbFdpbmRvd0J5VHdvfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHNwYWNlQmV0d2VlblwiIGh0bWxGb3I9e2BmYXEke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImYxNCBmdzcgZmxleEZ1bGwgbTBcIiBpdGVtUHJvcD1cIm5hbWVcIj57ZmFxLnF1ZXN0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B6MiByZWxhdGl2ZSBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgbWw4ICR7c3R5bGVzLmFycm93QnV0dG9ufWB9PjxEb3duQXJyb3cgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbnN3ZXJCb3h9IGYxNCBkeW5hbWljVGV4dEluaGVyaXRgfVxuICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvQW5zd2VyXCJcbiAgICAgICAgICAgICAgICAgICBpdGVtUHJvcD1cImFjY2VwdGVkQW5zd2VyXCJcbiAgICAgICAgICAgICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGl0ZW1Qcm9wPVwidGV4dFwiPntwYXJzZXIucGFyc2UoZmFxLmFuc3dlcil9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICB9XG4gICAgICAgICAge3RoaXMuc3RhdGUudmlzaWJsZSA8IGRhdGEuZmFxcy5sZW5ndGggP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggcmVsYXRpdmUgYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciBwOCBwbDAgcHIwICR7c3R5bGVzLmxvYWRNb3JlfWB9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5fbG9hZE1vcmV9IGNsYXNzTmFtZT1cImJ0bi1zZWMtbG9hZCB3ZnVsbCBwbDY0IHByNjRcIj5Mb2FkIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmFxLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBob3RlbERpc3BsYXlOYW1lOlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhcTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZhcXNcIjogXCJfNWVLUGJUS195akFkYUtLWl96XzZrXCIsXG5cdFwiYXJyb3dCdXR0b25cIjogXCJfM3NkTmktNk1JWGdJY18tWjcyVkRvcFwiLFxuXHRcImFuc3dlckJveFwiOiBcIl8zd2Y3VHlRbnBwQjBVMHd4dDJQaW0wXCIsXG5cdFwibG9hZE1vcmVcIjogXCJfMlpEdDZybm9HX2JnRFB2OXoxTTNyUFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyByZXN1bHRzLCBobHBSZXN1bHRzIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW1wb3J0IEZhcXMgZnJvbSAnLi9GYXFzJztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGRhdGE6IHJlc3VsdHMoc3RhdGUpXG4gIH0pKShGYXFzKSk7XG5cbmNvbnN0IGhscENvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBkYXRhOiBobHBSZXN1bHRzKHN0YXRlKVxuICB9KSkoRmFxcykpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgaGxwQ29udGFpbmVyLFxuICBhY3Rpb25zOiB7fSxcbiAgZGVmYXVsdEFjdGlvbjogbnVsbFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IFRUbG9nbywgVFRsb2dvU2Vjb25kYXJ5IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSAnLi9CdXJnZXJNZW51JztcbmltcG9ydCAnLi9IZWFkZXIuc2Nzcyc7XG5cbmNvbnN0IEhlYWRlckhvbWUgPSAoeyBpc1RyYW5zcGFyZW50IH0pID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJ3ZnVsbCB6MTAgcmVsYXRpdmVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17aXNUcmFuc3BhcmVudCA/ICdoZWFkZXItY29uLXRyYW5zcGFyZW50JyA6ICdoZWFkZXItY29uJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb24tZmlyc3QgZmxleCBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgPEJ1cmdlck1lbnUgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dC1sb2dvIGZsZXhGdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPG1ldGEgaXRlbVByb3A9XCJ1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb21cIiAvPlxuICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibG9nb1wiIGNvbnRlbnQ9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9wcF9zdGF0aWMvcHBfbmV3X2xvZ28uanBnXCIgLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0dC1sb2dvLWNvbnRhaW5lclwiIHRvPVwiL1wiPlxuICAgICAgICAgICAge2lzVHJhbnNwYXJlbnQgPyA8VFRsb2dvU2Vjb25kYXJ5IC8+IDogPFRUbG9nbyAvPiB9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJBZGRUb0hvbWVCdXR0b25cIiBjbGFzc05hbWU9XCJhZGQtdG8taG9tZS1idXR0b25cIiAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiQWRkVG9Ib21lQnV0dG9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLXRvLWhvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1ob21lLWluZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudC1jdXRcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwdDY0IG10NjQgcGwyNCBtbDggcHIyNCBtcjI0IHByMTUgcGI2NFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmdzcgc2ZjdyB0ZXh0LWxlZnRcIj5BZGQgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplIGYxOFwiPlRyYXZlbFRyaWFuZ2xlIDwvc3Bhbj4gdG88L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IHNmY3cgdGV4dC1sZWZ0IGZ3YiBwdDVcIj5Ib21lc2NyZWVuIGZvciBxdWljayBhY2Nlc3M8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZ3MyBzZmN3IHB0MjQgcmVsYXRpdmUgdGFwLXRhZy1hZGR0b2hvbWVcIj4gVGFwIDxzcGFuIGNsYXNzTmFtZT1cImFkZHRvaG9tZW92ZXJsYXkgaWJsb2NrXCI+IDxzcGFuIGNsYXNzTmFtZT1cImFkZC10by1ob21lIGlibG9jayBhYnNvbHV0ZSB0NSBsOVwiIC8+IDwvc3Bhbj4gdG8gYnJpbmcgdXAgeW91ciBicm93c2VyIG1lbnVcbiAgICAgICAgICAgICAgICAgIGFuZCBzZWxlY3QgPHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+eydcIkFkZCB0byBob21lIHNjcmVlblwiJ308L3NwYW4+IHRvXG4gICAgICAgICAgICAgICAgICBwaW4gdGhlIFRyYXZlbFRyaWFuZ2xlIHdlYiBhcHAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmkgbXQxNSByaXBwbGVcIj48ZGl2IGNsYXNzTmFtZT1cIndhdmVcIiAvPkdvdCBJdDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJIb21lO1xuXG5IZWFkZXJIb21lLnByb3BUeXBlcyA9IHtcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkhlYWRlckhvbWUuZGVmYXVsdFByb3BzID0ge1xuICBpc1RyYW5zcGFyZW50OiBmYWxzZVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcbmltcG9ydCB7IEdDYXJkSW1nLCBHQ2FyZERhdGFEaXYsIEdEYXRlTGlua0RpdiwgR0hlYWRpbmdINiB9IGZyb20gJy4vZ0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpbWFnZVBhdGhzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaW1hZ2VraXRVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBhbHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIHRodW1ibmFpbEltYWdlUGF0aHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpbWFnZWtpdFVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGF0ZSwgdXJsLCB0aHVtYm5haWxJbWFnZVBhdGhzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHNiY3dcIj5cbiAgICAgICAgPEdDYXJkSW1nIGNsYXNzTmFtZT1cInJlbGF0aXZlIHNiYzVcIj5cbiAgICAgICAgICA8SW1nIHNyYz17dGh1bWJuYWlsSW1hZ2VQYXRocy5zcmN9IGlrU3JjPXt0aHVtYm5haWxJbWFnZVBhdGhzLmltYWdla2l0VXJsfSBhbHQ9XCJcIiAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlclJlYWRNb3JlIGFic29sdXRlIHdmdWxsIGhmdWxsIGwwIHQwXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhdF90c1JlYWRtb3JlIGJsb2NrIGYxNFwiIGhyZWY9e3VybH0+UmVhZCBNb3JlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dDYXJkSW1nPlxuICAgICAgICA8R0NhcmREYXRhRGl2PlxuICAgICAgICAgIDxHSGVhZGluZ0g2IGNsYXNzTmFtZT1cImZ3NyBvdmVyZmxvd2ggbTAgbWI0XCI+e3RpdGxlfTwvR0hlYWRpbmdINj5cbiAgICAgICAgICA8R0RhdGVMaW5rRGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIHBmYzQgbTBcIj57Zm9ybWF0KGRhdGUsICdkZGRkLCBEbyBNTU1NLCBZWVlZJyl9PC9wPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYXRfcmVhZE1vcmVcIiBocmVmPXt1cmx9PlJlYWQgTW9yZTwvYT5cbiAgICAgICAgICA8L0dEYXRlTGlua0Rpdj5cbiAgICAgICAgPC9HQ2FyZERhdGFEaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdtb2R1bGVzL3NoYXJlZC9IZWFkaW5nJztcblxuY2xhc3MgTGV0c0Rpc2NvdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsZXRzRGlzY292ZXI6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGZldGNoTGV0c0Rpc2NvdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVzdGluYXRpb246ICcnXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByb3BzLmZldGNoTGV0c0Rpc2NvdmVyKHsgZGVzdGluYXRpb246IGRlc3RpbmF0aW9uIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmKHRoaXMucHJvcHMuZGVzdGluYXRpb24gIT09IHByZXZQcm9wcy5kZXN0aW5hdGlvbil7XG4gICAgICBwcmV2UHJvcHMuZmV0Y2hMZXRzRGlzY292ZXIoeyBkZXN0aW5hdGlvbjogdGhpcy5wcm9wcy5kZXN0aW5hdGlvbiB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsZXRzRGlzY292ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGxldHNEaXNjb3Zlci5sZW5ndGggPiAwID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwMTUgc2JjdyB3ZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHJlbGF0aXZlXCI+XG4gICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgIGRhdGE9e3tcbiAgICAgICAgICAgICAgdGl0bGU6IFwiTGV0cyBHbyBEaXNjb3ZlclwiLFxuICAgICAgICAgICAgICBoZWFkaW5nOlxuICAgICAgICAgICAgICAgIFwiQW4gZXhjbHVzaXZlIGNvbGxlY3Rpb24gb2YgdHJhdmVsIGJsb2dzIHRoYXQgd2lsbCBpbnN0aWxsIHdhbmRlcmx1c3QgaW4geW91XCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0MiByMCBpYmxvY2sgZjE0IGZ3N1wiIHRvPVwiL2Jsb2cvXCI+XG4gICAgICAgICAgICBWaWV3IEFsbFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1mdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgaWQ9XCJsZXRzZGlzY292ZXJcIlxuICAgICAgICAgICAgc2xpZGVDbGFzcz1cInNsaWRlXCJcbiAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTV9XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgICBzc3JBbmltYXRpb249e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyMTggfX1cbiAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZXRzRGlzY292ZXIgJiZcbiAgICAgICAgICAgICAgbGV0c0Rpc2NvdmVyLm1hcCgoZGlzY292ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcmFkaXVzMiByZWxhdGl2ZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtkaXNjb3Zlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZGlzY292ZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2VQYXRocz17ZGlzY292ZXIuaW1hZ2VQYXRoc31cbiAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxJbWFnZVBhdGhzPXtkaXNjb3Zlci50aHVtYm5haWxJbWFnZVBhdGhzfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2Rpc2NvdmVyLnBvc3REYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIHVybD17ZGlzY292ZXIudXJsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSA6IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGV0c0Rpc2NvdmVyO1xuIiwiaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5leHBvcnQgY29uc3QgR0NhcmRJbWcgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnMTQwcHgnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHdpZHRoOiAnMTAwJScsXG4gICcmIGltZyc6IHtcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICB9LFxuICAnJiAuaG92ZXJSZWFkTW9yZSc6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScsXG4gICAgJyYgYSc6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2ZmZicsXG4gICAgICBwYWRkaW5nOiAnMTJweCA0MHB4JyxcbiAgICB9LFxuICB9LFxuICAnJjpob3ZlciAuaG92ZXJSZWFkTW9yZSc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IEdDYXJkRGF0YURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBwYWRkaW5nVG9wOiAnMTZweCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdEYXRlTGlua0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdIZWFkaW5nSDYgPSBnbGFtb3JvdXMuaDYoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gIGhlaWdodDogJzQwcHgnLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbmltcG9ydCB7IGZldGNoTGV0c0Rpc2NvdmVyIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IExldHNEaXNjb3ZlciBmcm9tICcuL0xldHNEaXNjb3Zlcic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBsZXRzRGlzY292ZXI6IF9nZXQoc3RhdGUsJ2xldHNEaXNjb3Zlci5sZXRzRGlzY292ZXInLHt9KVxuICB9KSwge1xuICAgIGZldGNoTGV0c0Rpc2NvdmVyXG4gIH0pKExldHNEaXNjb3ZlcikpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge1xuICAgIGZldGNoTGV0c0Rpc2NvdmVyXG4gIH0sXG4gIGRlZmF1bHRBY3Rpb246IGZldGNoTGV0c0Rpc2NvdmVyXG59O1xuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBmZXRjaE1hcEluZm9ybWF0aW9uRGF0YSB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IHJlc3VsdHMgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IE1hcEluZm9ybWF0aW9uIGZyb20gJy4vTWFwSW5mb3JtYXRpb24nO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgbWFwSW5mb3JtYXRpb246IHJlc3VsdHMoc3RhdGUpXG4gIH0pKShNYXBJbmZvcm1hdGlvbikpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge1xuICAgIGZldGNoTWFwSW5mb3JtYXRpb25EYXRhXG4gIH0sXG4gIGRlZmF1bHRBY3Rpb246IGZldGNoTWFwSW5mb3JtYXRpb25EYXRhXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMsIGluc3RhbmNlT2YgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ21vZHVsZXMvY29tbW9uL0hlYWRpbmcnO1xuaW1wb3J0IHsgd2l0aENvb2tpZXMsIENvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHtcbiAgbG9hZFJlY2VudFBhY2thZ2VzLFxuICBpc1JlY2VudFBhY2thZ2VzUHJlc2VudCxcbiAgZ2V0UmVjZW50UGFja2FnZXNcbn0gZnJvbSAnLi9yZWNlbnRQYWNrYWdlcyc7XG5pbXBvcnQgUGFja2FnZUNhcmRFeHBlcmltZW50IGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlQ2FyZEV4cGVyaW1lbnQnO1xuXG5jb25zdCBSRUNFTlRfUEFDS0FHRV9DT09LSUVfS0VZID0gJ3J2cF9pZHNfbXdlYic7XG5cbkBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGlzUmVjZW50UGFja2FnZXNQcmVzZW50OiBpc1JlY2VudFBhY2thZ2VzUHJlc2VudChzdGF0ZSksXG4gICAgcmVjZW50UGFja2FnZXM6IGdldFJlY2VudFBhY2thZ2VzKHN0YXRlKVxuICB9KSxcbiAge1xuICAgIGxvYWRSZWNlbnRQYWNrYWdlc1xuICB9XG4pXG5cbmNsYXNzIFJlY2VudFBhY2thZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpc1JlY2VudFBhY2thZ2VzUHJlc2VudDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICByZWNlbnRQYWNrYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFBhY2thZ2VJRDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxvYWRSZWNlbnRQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjb29raWVzOiBpbnN0YW5jZU9mKENvb2tpZXMpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRNb250aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzcGFjaW5nQ3NzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcmVjZW50UGFja2FnZXM6IFtdLFxuICAgIGxvYWRSZWNlbnRQYWNrYWdlczogKCkgPT4ge1xuICAgIH0sXG4gICAgaXNSZWNlbnRQYWNrYWdlc1ByZXNlbnQ6IGZhbHNlLFxuICAgIHNwYWNpbmdDc3M6IHt9XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlY2VudFBhY2thZ2VzOiAnJ1xuICAgIH07XG4gICAgdGhpcy5zZXRSZWNlbnRQYWNrYWdlc0lEID0gdGhpcy5zZXRSZWNlbnRQYWNrYWdlc0lELmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFJlY2VudFBhY2thZ2VzSUQodGhpcy5wcm9wcy5jdXJyZW50UGFja2FnZUlEKTtcbiAgfVxuXG4gIHNldFJlY2VudFBhY2thZ2VzSUQocGFja2FnZUlkKSB7XG4gICAgY29uc3QgeyBjb29raWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCByZWNlbnRQYWNrYWdlcyA9IGNvb2tpZXMgJiYgY29va2llcy5nZXQoUkVDRU5UX1BBQ0tBR0VfQ09PS0lFX0tFWSk7XG4gICAgaWYgKHR5cGVvZiByZWNlbnRQYWNrYWdlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlY2VudFBhY2thZ2VzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY2VudFBhY2thZ2VzID0gcmVjZW50UGFja2FnZXMuc3BsaXQoJywnKTtcbiAgICB9XG4gICAgaWYgKHJlY2VudFBhY2thZ2VzLmluZGV4T2YocGFja2FnZUlkKSAhPT0gLTEpIHtcbiAgICAgIHJlY2VudFBhY2thZ2VzID0gcmVjZW50UGFja2FnZXMuZmlsdGVyKGlkID0+IGlkICE9PSBwYWNrYWdlSWQpO1xuICAgIH1cbiAgICByZWNlbnRQYWNrYWdlcy5wdXNoKHBhY2thZ2VJZCk7XG4gICAgcmVjZW50UGFja2FnZXMgPSByZWNlbnRQYWNrYWdlcy5qb2luKCcsJyk7XG4gICAgaWYgKHR5cGVvZiBjb29raWVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29va2llcy5zZXQoUkVDRU5UX1BBQ0tBR0VfQ09PS0lFX0tFWSwgcmVjZW50UGFja2FnZXMpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlY2VudFBhY2thZ2VzXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sb2FkUmVjZW50UGFja2FnZXMoe1xuICAgICAgICBzZW9fcGFja2FnZV9pZDogdGhpcy5wcm9wcy5jdXJyZW50UGFja2FnZUlELFxuICAgICAgICByZWNlbnRseV92aWV3ZWRfcGFja2FnZXM6IHRoaXMuc3RhdGUucmVjZW50UGFja2FnZXMsXG4gICAgICAgIHRyYXZlbF9tb250aDogdGhpcy5wcm9wcy5zZWxlY3RlZE1vbnRoXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNSZWNlbnRQYWNrYWdlc1ByZXNlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IHJlY2VudFBhY2thZ2VzLCBzcGFjaW5nQ3NzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGhlYWRpbmcgPSAnUmVjZW50IFBhY2thZ2VzJztcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICAgaGVhZGluZyxcbiAgICAgIHBhY2thZ2VzTGlzdDogcmVjZW50UGFja2FnZXNcbiAgICB9O1xuICAgIHJldHVybiByZWNlbnRQYWNrYWdlcy5sZW5ndGggPiAwID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgbTggbXQwIHNiY3cgYXRfcmVjZW50cGFja2FnZXMgcmVjZW50LXBhY2thZ2VzLWNvbnRhaW5lclwiIHN0eWxlPXtzcGFjaW5nQ3NzfT5cbiAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgICBoZWFkaW5nOiBcIlJlY2VudCBQYWNrYWdlc1wiLFxuICAgICAgICAgICAgc3ViSGVhZGluZzpcbiAgICAgICAgICAgICAgXCJVbmxpbWl0ZWQgQ2hvaWNlcy4gVHJ1c3RlZCBBZ2VudHMuIEJlc3QgUHJpY2VzLiBIYXBweSBNZW1vcmllcy5cIlxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWZ1bGwtd2lkdGhcIj5cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIGlkPVwicGFja2FnZXNTbGlkZXJcIlxuICAgICAgICAgIHNsaWRlQ2xhc3M9XCJzbGlkZVwiXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxNX1cbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgcmVidWlsZE9uVXBkYXRlXG4gICAgICAgICAgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAzMTAsIGhlaWdodDogMzU1IH19XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWNlbnRQYWNrYWdlcyAmJiByZWNlbnRQYWNrYWdlcy5sZW5ndGggP1xuICAgICAgICAgICAgICByZWNlbnRQYWNrYWdlcy5tYXAoKHBhY2thZ2VEYXRhLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPFBhY2thZ2VDYXJkRXhwZXJpbWVudCBoZWFkaW5nPXsncmVjZW50IHBhY2thZ2VzJ30gY2FyZD17cGFja2FnZURhdGF9IGlzUGFja2FnZVJldmFtcD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvU3dpcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkgOiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb29raWVzKFJlY2VudFBhY2thZ2VzKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlZEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3RhVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY3RhVGV4dDogJ1BsYW4gTXkgSG9saWRheScsXG4gICAgZGVzdGluYXRpb246ICcnIFxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN0YVRleHQsIGRlc3RpbmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGIwIGwwIHIwIHNiYzUgejYgYnM2IHA4XCI+XG4gICAgICAgIDxGb3JtT25lQ1RBIHJ0UHJvcHM9e3sgdG9fbG9jOiBkZXN0aW5hdGlvbiB9fT48c3BhbiBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbFwiPntjdGFUZXh0fTwvc3Bhbj48L0Zvcm1PbmVDVEE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcENvbmZpZyc7XG5cbmNvbnN0IEdMZXRzR29EaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnMTcxcHgnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICcmIGltZyc6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICB9XG59KTtcblxuY29uc3QgRm9ybU9uZUNsaWNrRGV0YWlsID0ge1xuICBzZWN0aW9uOiAnQmFubmVyIFNlY3Rpb24nLFxuICBjdGE6ICdMZXRzIGdvJ1xufTtcblxuY29uc3QgTGV0c0dvID0gKHsgZGF0YSwgZGVzdGluYXRpb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImF0X2RpZG5vdGZpbmQgc2Jjd1wiPlxuICAgIDxHTGV0c0dvRGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNiY3dcIj5cbiAgICAgIDxJbWcgd2lkdGg9ezM5NX0gaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgIGlrU3JjPXtgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvcGFja2FnZV9saXN0aW5nX2Jhbm5lcnMvSW1hZ2VfQ0IrbW9iLmpwZ2B9XG4gICAgICAgICAgIGFsdD1cImxldHMgZ28gYmFubmVyXCIgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHBsMTUgcHIxNSB6MiBiMCBsMCByMCBwZmMzIGYyNCBmdzkgbTBcIj57ZGF0YS50aXRsZX08L3A+XG4gICAgPC9HTGV0c0dvRGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHB0NVwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IG0wIHBmYzRcIj57ZGF0YS5oZWFkaW5nfTwvcD5cbiAgICAgIDxGb3JtT25lQ1RBIHJ0UHJvcHM9e3sgdG9fbG9jOiBkZXN0aW5hdGlvbiB9fT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXByaS1sYXJnZSB3ZnVsbCBtdDI0XCI+R2V0IEV4cGVydHMnIENhbGxiYWNrPC9zcGFuPlxuICAgICAgPC9Gb3JtT25lQ1RBPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkxldHNHby5wcm9wVHlwZXMgPSB7XG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuTGV0c0dvLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVzdGluYXRpb246ICcnLFxuICBkYXRhOiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGV0c0dvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IFAgPSBnbGFtb3JvdXMucCh7XG4gIGxpbmVIZWlnaHQ6ICcxNnB4Jyxcbn0pO1xuXG5jbGFzcyBSYXRlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJhdGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxpbmsgPSBcIlRvdXJpc20gaW4gXCIgKyB0aGlzLnByb3BzLmRlc3RpbmF0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMFwiIHZvY2FiPVwiaHR0cHM6Ly9zY2hlbWEub3JnL1wiIHR5cGVvZj1cIlByb2R1Y3RcIiA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGVcIiBwcm9wZXJ0eT1cIm5hbWVcIj57bGlua308L3NwYW4+XG4gICAgICAgIDxQIGNsYXNzTmFtZT1cImYxMCBtMCBwZmMzXCIgcHJvcGVydHk9XCJhZ2dyZWdhdGVSYXRpbmdcIiB0eXBlb2Y9XCJBZ2dyZWdhdGVSYXRpbmdcIj5SYXRlZCA8c3BhbiBwcm9wZXJ0eT1cInJhdGluZ1ZhbHVlXCI+e3JhdGVkLmN1cnJlbnRSYXRpbmd9PC9zcGFuPi97cmF0ZWQub3V0T2Z9IChiYXNlZCBvbiA8c3BhbiBwcm9wZXJ0eT1cInJldmlld0NvdW50XCI+e3JhdGVkLnRvdGFsUmV2aWV3c308L3NwYW4+IHJldmlld3MgKTwvUD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmF0ZWQucHJvcFR5cGVzID0ge1xuICByYXRlZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVzdGluYXRpb24gOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5SYXRlZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJhdGVkOiB7fSxcbiAgZGVzdGluYXRpb246ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXRlZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7XG4gIElsbHVzQWdlbnQsXG4gIElsbHVzTW9uZXlTYWZlLFxuICBJbGx1c1N1cHBvcnQsXG4gIElsbHVzRGVzdGluYXRpb25zLFxuICBJbGx1c1RyYXZlbGVyLFxuICBJbGx1c1F1YWxpdHlDaGVja1xufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IFRURXhwZXJ0aWVzU2VjdGlvbiA9IGdsYW1vcm91cy5kaXYoe1xufSk7XG5cbmNvbnN0IFRURXhwZXJ0aWVzSWNvbiA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICc1NnB4JyxcbiAgd2lkdGg6ICc3MnB4JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG1hcmdpbjogJzAgYXV0byAxNXB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuICB9XG59KTtcblxuY29uc3QgVFRFeHBlcnRpZXMgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXRfdHRleHBlcnRpZXMgcm93IG0wXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDggcHQxNSBwYjE1IHNiY3cgbWI4XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwZmMxIHRleHQtY2VudGVyIGYxNiBmdzkgbWIxNVwiPkZhc3Rlc3QgR3Jvd2luZyBIb2xpZGF5IE1hcmtldHBsYWNlPC9wPlxuICAgICAgPFRURXhwZXJ0aWVzU2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtc20tMTIgcHQ4IHBiOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IHRleHQtY2VudGVyIHBsMiBwcjJcIj5cbiAgICAgICAgICA8VFRFeHBlcnRpZXNJY29uIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxJbGx1c0FnZW50IC8+PC9UVEV4cGVydGllc0ljb24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGZ3NCBtMFwiPjY1MCs8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGZ3NCBtMFwiPlZlcmlmaWVkIEFnZW50czwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCB0ZXh0LWNlbnRlciBwbDIgcHIyXCI+XG4gICAgICAgICAgPFRURXhwZXJ0aWVzSWNvbiBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbGx1c1RyYXZlbGVyIC8+XG4gICAgICAgICAgPC9UVEV4cGVydGllc0ljb24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGZ3NCBtMFwiPjIyIExhYys8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGZ3NCBtMFwiPkhhcHB5IFRyYXZlbGxlcnM8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgdGV4dC1jZW50ZXIgcGwyIHByMlwiPlxuICAgICAgICAgIDxUVEV4cGVydGllc0ljb24gY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+PElsbHVzRGVzdGluYXRpb25zIC8+PC9UVEV4cGVydGllc0ljb24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGZ3NCBtMFwiPjY1KzwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgZnc0IG0wXCI+RGVzdGluYXRpb25zPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVFRFeHBlcnRpZXNTZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHA4IHB0MTUgcGIxNSBzYmN3XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwZmMxIHRleHQtY2VudGVyIGYxNiBmdzkgbWIxNVwiPkVhc3ksIFNlY3VyZSAmIFJlbGlhYmxlPC9wPlxuICAgICAgPFRURXhwZXJ0aWVzU2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtc20tMTIgcHQ4IHBiOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IHRleHQtY2VudGVyIHBsMiBwcjJcIj5cbiAgICAgICAgICA8VFRFeHBlcnRpZXNJY29uIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxJbGx1c01vbmV5U2FmZSAvPjwvVFRFeHBlcnRpZXNJY29uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBmdzQgbTBcIj5UcmF2ZWx0cmlhbmdsZTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgZnc0IG0wXCI+VmVyaWZpZWQ8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgdGV4dC1jZW50ZXIgcGwyIHByMlwiPlxuICAgICAgICAgIDxUVEV4cGVydGllc0ljb24gY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+PElsbHVzUXVhbGl0eUNoZWNrIC8+PC9UVEV4cGVydGllc0ljb24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGZ3NCBtMFwiPlN0cmluZ2VudDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgZnc0IG0wXCI+UXVhbGl0eSBDb250cm9sPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IHRleHQtY2VudGVyIHBsMiBwcjJcIj5cbiAgICAgICAgICA8VFRFeHBlcnRpZXNJY29uIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxJbGx1c1N1cHBvcnQgLz48L1RURXhwZXJ0aWVzSWNvbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgZnc0IG0wXCI+MjQvNzwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgZnc0IG0wXCI+U3VwcG9ydDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RURXhwZXJ0aWVzU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUVEV4cGVydGllcztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgSGVhZGVySG9tZSBmcm9tICdtb2R1bGVzL2hlYWRlci9IZWFkZXJIb21lJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnbW9kdWxlcy9iYW5uZXInO1xuaW1wb3J0IEZhcXMgZnJvbSAnbW9kdWxlcy9mYXFzJztcbmltcG9ydCBNYXBJbmZvcm1hdGlvbiBmcm9tICdtb2R1bGVzL21hcEluZm9ybWF0aW9uJztcbmltcG9ydCBQb3B1bGFyUGFja2FnZXMgZnJvbSAnbW9kdWxlcy9wYWNrYWdlcy9wb3B1bGFyJztcbmltcG9ydCBMZXRzR28gZnJvbSAnbW9kdWxlcy9zaGFyZWQvTGV0c0dvJztcbmltcG9ydCBSYXRlZCBmcm9tICdtb2R1bGVzL3NoYXJlZC9SYXRlZCc7XG5pbXBvcnQgVFRFeHBlcnRpZXMgZnJvbSAnbW9kdWxlcy9zaGFyZWQvVFRFeHBlcnRpZXMnO1xuaW1wb3J0IFRyYXZlbGVyUmV2aWV3IGZyb20gJ21vZHVsZXMvdHJhdmVsZXJSZXZpZXcnO1xuaW1wb3J0IFRyYXZlbGVyU3RvcmllcyBmcm9tICdtb2R1bGVzL3RyYXZlbGxlclN0b3J5JztcbmltcG9ydCBDaXR5QmxvY2tOYXYgZnJvbSAnbW9kdWxlcy9jaXR5QmxvY2svQ2l0eUJsb2NrTmF2JztcbmltcG9ydCBSZWNlbnRQYWNrYWdlcyBmcm9tICdtb2R1bGVzL3BhY2thZ2VzL3JlY2VudCc7XG5pbXBvcnQgTGV0c0Rpc2NvdmVyIGZyb20gJ21vZHVsZXMvbGV0c0Rpc2NvdmVyJztcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJ21vZHVsZXMvc2hhcmVkL0JyZWFkY3J1bWInO1xuaW1wb3J0IEZpeGVkQnV0dG9uIGZyb20gJ21vZHVsZXMvc2hhcmVkL0ZpeGVkQnV0dG9uJztcbmltcG9ydCBGaXhlZE1lbnUgZnJvbSAnY29tcG9uZW50cy9GaXhlZE1lbnUvRml4ZWRNZW51JztcbmltcG9ydCBGb290ZXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvRm9vdGVyJztcbmltcG9ydCB7IGdldEN1cnJlbnRNb250aCwgZ2V0VHJhdmVsTW9udGggfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcbmltcG9ydCB7IGluaXRpYWxpemVFeGl0SW50ZW50LCBzaG93UG9wVXAsIGhpZGVQb3B1cCB9IGZyb20gJ2hlbHBlcnMvZXhpdEludGVudCc7XG5pbXBvcnQgSW50ZXJsaW5raW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL2ludGVybGlua2luZyc7XG5cbmltcG9ydCAndGhlbWUvQ2l0eUJsb2NrLnNjc3MnO1xuaW1wb3J0IHsgQ0lUWUJMT0NLX1BBR0VfVklFVywgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuXG5jb25zdCBHTGFyZ2VCYW5uZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnMjcwcHgnXG59KTtcblxuY29uc3QgR0ZpeGVkQ2hhdERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzU2cHgnLFxuICBoZWlnaHQ6ICc1NnB4JyxcbiAgYm90dG9tOiAnNjBweCcsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG59KTtcblxuY29uc3QgZ2V0RXhpdEludGVudCA9ICgpID0+IHtcbiAgcmV0dXJuIDxkaXYgaWQ9XCJyZWFjdEV4aXRJbnRlbnRJbWFnZVwiIGNsYXNzTmFtZT1cIm1rdC1tb2ItZXhpdC1pbnRlbnQgcmVsYXRpdmUgcGw4IHByOCBtYjhcIiBvbkNsaWNrPXtzaG93UG9wVXB9PjwvZGl2Pjtcbn07XG5cbmNsYXNzIENpdHlCbG9jayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZXN0aW5hdGlvbjogJydcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyA/IGluaXRpYWxpemVFeGl0SW50ZW50KCkgOlxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0aWFsaXplRXhpdEludGVudCk7XG4gICAgdGhpcy5wYWdlVHJhY2tTZWdtZW50RXZlbnQodGhpcy5wcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgIT09IHByZXZQcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgdGhpcy5wYWdlVHJhY2tTZWdtZW50RXZlbnQodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgcGFnZVRyYWNrU2VnbWVudEV2ZW50ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjaXR5QmxvY2sgfSA9IHByb3BzO1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogQ0lUWUJMT0NLX1BBR0VfVklFVyxcbiAgICAgICAgZGVzdGluYXRpb25fbGlzdDogY2l0eUJsb2NrLmRlc3RpbmF0aW9uLFxuICAgICAgICBkZXN0aW5hdGlvbl9pZDogMCxcbiAgICAgICAgZGVzdGluYXRpb25fdHlwZTogJ1RvdXInXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2NhdGlvbiwgY2l0eUJsb2NrLCByb3V0ZXMsIGJyZWFkY3J1bWJzLCBmb290ZXJMaW5rcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhYnMsIGRlc3RpbmF0aW9uLCByYXRlZCwgcG9wdWxhclBhY2thZ2VzIH0gPSBjaXR5QmxvY2s7XG4gICAgY29uc3QgdGFiID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXS50YWI7XG4gICAgY29uc3QgVHJhdmVsZXJSZXZpZXdDb250YWluZXIgPSBUcmF2ZWxlclJldmlldy5jb250YWluZXI7XG4gICAgY29uc3QgVHJhdmVsZXJTdG9yaWVzQ29udGFpbmVyID0gVHJhdmVsZXJTdG9yaWVzLmNvbnRhaW5lcjtcbiAgICBjb25zdCBGYXFzQ29udGFpbmVyID0gRmFxcy5jb250YWluZXI7XG4gICAgY29uc3QgTWFwSW5mb3JtYXRpb25Db250YWluZXIgPSBNYXBJbmZvcm1hdGlvbi5jb250YWluZXI7XG4gICAgY29uc3QgQmFubmVyQ29udGFpbmVyID0gQmFubmVyLmNvbnRhaW5lcjtcbiAgICBjb25zdCBMZXRzRGlzY292ZXJDb250YWluZXIgPSBMZXRzRGlzY292ZXIuY29udGFpbmVyO1xuICAgIGNvbnN0IFBvcHVsYXJQYWNrYWdlc0NvbnRhaW5lciA9IFBvcHVsYXJQYWNrYWdlcy5jb250YWluZXI7XG4gICAgY29uc3QgdHJhdmVsbW9udGggPSBsb2NhdGlvbi5xdWVyeS50cmF2ZWxtb250aCA/IChsb2NhdGlvbi5xdWVyeS50cmF2ZWxtb250aCA9PT0gJ25kJyA/IDEzIDpcbiAgICAgIGdldFRyYXZlbE1vbnRoKGxvY2F0aW9uLnF1ZXJ5LnRyYXZlbG1vbnRoKSArIDEpIDogZ2V0Q3VycmVudE1vbnRoKCkgKyAxO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjNVwiPlxuICAgICAgICA8ZGl2IGlkPVwiYmctbWFzay1laVwiIGNsYXNzTmFtZT1cImJnLW1hc2stZWlcIiBvbkNsaWNrPXtlID0+IGhpZGVQb3B1cChlKX0gLz5cbiAgICAgICAge2Rlc3RpbmF0aW9uID09PSAnSW5kaWEnID9cbiAgICAgICAgICA8R0xhcmdlQmFubmVyRGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHoxNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6MTVcIj5cbiAgICAgICAgICAgICAgPEhlYWRlckhvbWUgaXNUcmFuc3BhcmVudD17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0MCBsMCB3ZnVsbCBoZnVsbFwiPlxuICAgICAgICAgICAgICA8QmFubmVyQ29udGFpbmVyIGlzTGFyZ2VCYW5uZXI9e3RydWV9IGlzQ2l0eUJsb2NrPXt0cnVlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HTGFyZ2VCYW5uZXJEaXY+IDpcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlckhvbWUgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibThcIj5cbiAgICAgICAgICAgICAgPEJhbm5lckNvbnRhaW5lciBpc0NpdHlCbG9jaz17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOCB0b3BTdGlja3lOYXZcIiBpZD1cImF1dG9TY3JvbGxUb1BvaW50XCI+XG4gICAgICAgICAgPENpdHlCbG9ja05hdiB0YWJzPXt0YWJzfSBkZXN0aW5hdGlvbj17ZGVzdGluYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10OCBtYjggbXQwXCI+XG4gICAgICAgICAgPE1hcEluZm9ybWF0aW9uQ29udGFpbmVyIHRhYj17dGFifSBsb2NhdGlvbj17bG9jYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHsgZXhpdEludGVudDogZ2V0RXhpdEludGVudCgpIH0pfVxuICAgICAgICB7XG4gICAgICAgICAgcG9wdWxhclBhY2thZ2VzICYmIHBvcHVsYXJQYWNrYWdlcy5sZW5ndGggP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDggbWI4IG10MFwiPlxuICAgICAgICAgICAgICA8UG9wdWxhclBhY2thZ2VzQ29udGFpbmVyIHRyYXZlbG1vbnRoPXt0cmF2ZWxtb250aH0gLz5cbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm04IG10MFwiPlxuICAgICAgICAgIDxUVEV4cGVydGllcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDAgc2Jjd1wiPlxuICAgICAgICAgIDxUcmF2ZWxlclJldmlld0NvbnRhaW5lciBkZXN0aW5hdGlvbj17ZGVzdGluYXRpb259Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgZm9vdGVyTGlua3MubGVuZ3RoID8gPEludGVybGlua2luZyBmb290ZXJMaW5rcz17Zm9vdGVyTGlua3N9Lz4gOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10OCBtYjggbXQwXCI+XG4gICAgICAgICAgPFRyYXZlbGVyU3Rvcmllc0NvbnRhaW5lciBzcGFjaW5nQ3NzPXt7IG1hcmdpbkJvdHRvbTogJzAnIH19IGRhdGE9e3tcbiAgICAgICAgICAgIHRpdGxlOiAnT3VyIFRyYXZlbGVyIFN0b3JpZXMnLFxuICAgICAgICAgICAgaGVhZGluZzogJ1RoZXkgdHJhdmVsZWQuIFRoZXkgZXhwZXJpZW5jZWQuIFRoZXkgc2hhcmVkLidcbiAgICAgICAgICB9fSBjb25maWc9e3sgY3NyOiB0cnVlIH19IGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdBbGw9XCIvYmxvZy90cmF2ZWxvZ3Vlcz9yZWZlcmVyPXRyYXZlbG9ndWVfY2l0eWJsb2NrXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQ4IG1iOCBtdDBcIj5cbiAgICAgICAgICA8TGV0c0Rpc2NvdmVyQ29udGFpbmVyIHNwYWNpbmdDc3M9e3sgbWFyZ2luQm90dG9tOiAnMCcgfX0gZGVzdGluYXRpb249e2Rlc3RpbmF0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDggbWI4IG10MFwiPlxuICAgICAgICAgIDxMZXRzR28gZGF0YT17e1xuICAgICAgICAgICAgdGl0bGU6ICdXYW50IGJlc3QgcGFja2FnZXMgaGFuZHBpY2tlZCBqdXN0IGZvciB5b3U/JyxcbiAgICAgICAgICAgIGhlYWRpbmc6ICdGaWxsIHRoZSBmb3JtIGFuZCBnZXQgYSBjYWxsYmFjayBmcm9tIG91ciBob2xpZGF5IGV4cGVydHMnXG4gICAgICAgICAgfX0gZGVzdGluYXRpb249e2Rlc3RpbmF0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtkZXN0aW5hdGlvbiA9PSAnSW5kaWEnID9cbiAgICAgICAgICBudWxsIDpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10OCBtYjggbXQwXCI+XG4gICAgICAgICAgICA8RmFxc0NvbnRhaW5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgPFJlY2VudFBhY2thZ2VzIGN1cnJlbnRQYWNrYWdlSUQ9ezB9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwOCBwdDAgY2xlYXJmaXhcIj5cbiAgICAgICAgICA8QnJlYWRjcnVtYiBicmVhZGNydW1icz17YnJlYWRjcnVtYnN9IC8+XG4gICAgICAgICAgPFJhdGVkIHJhdGVkPXtyYXRlZH0gZGVzdGluYXRpb249e2Rlc3RpbmF0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRhYiA9PT0gJ3BsYWNlc190b192aXNpdCcgfHwgdGFiID09PSAndGhpbmdzX3RvX2RvJyA/XG4gICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgIDxHRml4ZWRDaGF0RGl2IGNsYXNzTmFtZT1cImZpeGVkIHIwIHo1XCI+PEZpeGVkTWVudSAvPjwvR0ZpeGVkQ2hhdERpdj5cbiAgICAgICAgfVxuICAgICAgICA8Rml4ZWRCdXR0b24gZGVzdGluYXRpb249e2Rlc3RpbmF0aW9ufSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiNjQgcGJjM1wiPjxGb290ZXIgLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2l0eUJsb2NrLnByb3BUeXBlcyA9IHtcbiAgY2l0eUJsb2NrOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgcGxhY2VzVG9WaXNpdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgYnJlYWRjcnVtYnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZmFxczogUHJvcFR5cGVzLmFycmF5LFxuICByb3V0ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZXhpdEludGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmb290ZXJMaW5rczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5DaXR5QmxvY2suZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZXNUb1Zpc2l0OiB7fSxcbiAgYnJlYWRjcnVtYnM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaXR5QmxvY2s7XG4iLCJmdW5jdGlvbiBzY3JvbGxXaW5kb3dCeVR3bygpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LnNjcm9sbEJ5KDAsIDIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFdpbmRvd0J5VHdvO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlsdGVycy1oZWFkZXJcIjogXCJfM0dGNV9cIixcblx0XCJmaWx0ZXJzLW9wdGlvbnMtY29uXCI6IFwiXzFELTItXCIsXG5cdFwiY2xvc2UtZmlsdGVyc1wiOiBcIl8ya0pUM1wiLFxuXHRcImZpbHRlci10aXRsZVwiOiBcIl8yNXZUM1wiLFxuXHRcInJlc2V0LWJ1dHRvblwiOiBcIl8zMzdaWFwiLFxuXHRcImZpbHRlci1ib3hcIjogXCJfM08tNUFcIixcblx0XCJmaWx0ZXItYm94LW9wdGlvbnNcIjogXCJfMUhpdTBcIixcblx0XCJmaWx0ZXItb3B0aW9ucy10eXBlLW9uZVwiOiBcIl8xYWtYa1wiLFxuXHRcImZpbHRlci1vcHRpb25zLXR5cGUtdHdvXCI6IFwiX2dzVWZQXCIsXG5cdFwiaG90ZWwtcmF0aW5nLXN0YXJcIjogXCJfMXV3eVdcIixcblx0XCJob3RlbC1yYXRpbmctc3Rhci1saXN0XCI6IFwiXzNpaWNlXCIsXG5cdFwiZmlsdGVyLW9wdGlvbnMtdHlwZS10aHJlZVwiOiBcIl9PQ0lKdVwiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=