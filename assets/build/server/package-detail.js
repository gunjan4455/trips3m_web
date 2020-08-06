require("source-map-support").install();
exports.ids = ["package-detail"];
exports.modules = {

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

/***/ "./app-v2/modules/howItWorks/HowItWorks.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/howItWorks/HowItWorks.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _howitworksCm = _interopRequireDefault(__webpack_require__(/*! ./howitworks.cm.scss */ "./app-v2/modules/howItWorks/howitworks.cm.scss"));

var Icons = _interopRequireWildcard(__webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      className: "col-xs-12 p0 sbcw"
    }, _react.default.createElement("h2", {
      className: "f16 fw9 p15 pfc5 bb"
    }, card.heading), _react.default.createElement("div", {
      className: `col-xs-12 p0 ${_howitworksCm.default.tiles}`
    }, card.items.map((item, i) => {
      const IconComponent = Icons[item.icon];
      return _react.default.createElement("div", {
        className: `col-xs-12 flex alignCenter pl15 pr15 pt24 pb24 ${_howitworksCm.default.worksBox}`,
        key: i
      }, _react.default.createElement("span", {
        className: "flex justifyCenter"
      }, _react.default.createElement(IconComponent, null)), _react.default.createElement("div", {
        className: "pl24 dark-font"
      }, _react.default.createElement("h4", {
        className: "f14 fw9 pb8"
      }, item.title), _react.default.createElement("p", {
        className: "f12"
      }, item.paragraph)));
    })));
  }

};
exports.default = HowItWorks;

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

/***/ "./app/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./app/components/Footer/Footer.js ***!
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

var _FooterLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/FooterLinks */ "./app/components/Footer/FooterLinks.js"));

var _AddressTT = _interopRequireDefault(__webpack_require__(/*! components/Footer/AddressTT */ "./app/components/Footer/AddressTT.js"));

var _CopyRight = _interopRequireDefault(__webpack_require__(/*! components/Footer/CopyRight */ "./app/components/Footer/CopyRight.js"));

var _SocialLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/SocialLinks */ "./app/components/Footer/SocialLinks.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoveIconCon = _glamorous.default.span({
  width: '20px',
  height: '20px',
  margin: '0 8px',
  display: 'inline-block'
});

const MadeWith = _glamorous.default.div({
  height: '20px',
  lineHeight: '20px',
  fontSize: '12px',
  textAlign: 'center',
  color: '#ffffff',
  '& > p': {
    height: '20px',
    lineHeight: '20px',
    verticalAlign: 'top'
  }
});

const Footer = ({
  isHomePage
}) => _react.default.createElement("div", {
  className: "at_footer row row- pbc3 p8"
}, _react.default.createElement("div", {
  className: "pt0 pb0"
}, _react.default.createElement(_FooterLinks.default, null)), _react.default.createElement("div", {
  className: "pt8 mb24"
}, _react.default.createElement(_AddressTT.default, {
  isHomePage: isHomePage
})), _react.default.createElement("div", {
  className: "mb24"
}, _react.default.createElement(_SocialLinks.default, null)), _react.default.createElement("div", {
  className: "flex spaceBetween alignCenter"
}, _react.default.createElement(MadeWith, {
  className: "flex alignCenter flexFull"
}, _react.default.createElement("p", {
  className: "m0 f12 iblock at_madelove"
}, "Made with"), _react.default.createElement(LoveIconCon, {
  className: "relative"
}, _react.default.createElement(_Icon.LoveIcon, null)), _react.default.createElement("p", {
  className: "m0 f12 iblock"
}, "in India")), _react.default.createElement("div", {
  className: "flexFull text-right"
}, _react.default.createElement(_CopyRight.default, null))));

Footer.propTypes = {
  isHomePage: _propTypes.default.bool
};
Footer.defaultProps = {
  isHomePage: false
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./app/components/Generic/InternalServerError.js":
/*!*******************************************************!*\
  !*** ./app/components/Generic/InternalServerError.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

__webpack_require__(/*! ./InternalServerError.scss */ "./app/components/Generic/InternalServerError.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InternalServerError = () => _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("div", {
  className: "text-center sbcw"
}, _react.default.createElement("div", {
  className: "icon-destination"
}, _react.default.createElement(_Icon.IllusDestination, null)), _react.default.createElement("h1", {
  className: "pfc1 fwb f144 pb8"
}, "500"), _react.default.createElement("h2", {
  className: "f24 fw9"
}, "Internal server error"), _react.default.createElement("p", {
  className: "fw9 p15"
}, "There is a problem with the resource you are looking for, and it cannot be displayed."), _react.default.createElement("div", {
  className: "row row- pl8 pr8 pb48"
}, _react.default.createElement(_reactRouter.Link, {
  to: "/",
  className: "btn-filled-pri fw9 wfull ripple"
}, _react.default.createElement("div", {
  className: "wave"
}), "Go To Homepage"))));

var _default = InternalServerError;
exports.default = _default;

/***/ }),

/***/ "./app/components/Generic/InternalServerError.scss":
/*!*********************************************************!*\
  !*** ./app/components/Generic/InternalServerError.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"icon-destination": "_2zx7O"
};

/***/ }),

/***/ "./app/components/Itinerary/Itinerary.scss":
/*!*************************************************!*\
  !*** ./app/components/Itinerary/Itinerary.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"itinerary-container-small": "_4fn08",
	"itinerary-container": "_2VKk7",
	"itinerary-container-box": "_1udhc",
	"days-count": "_3qmoH",
	"itinerary-tags-box": "_30bme",
	"itinerary-list-box": "_11MaC",
	"arrow-down": "_KCsDM",
	"iti-radio": "_3LZDu",
	"downSideArrow": "_1DASV"
};

/***/ }),

/***/ "./app/components/Itinerary/ItineraryTags.js":
/*!***************************************************!*\
  !*** ./app/components/Itinerary/ItineraryTags.js ***!
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

/***/ "./app/components/Listing/PackagePrice.js":
/*!************************************************!*\
  !*** ./app/components/Listing/PackagePrice.js ***!
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

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackagePrice = ({
  priceUnit,
  price,
  discount,
  currency,
  priceFrom,
  priceTo,
  dealsInfo
}) => _react.default.createElement("div", {
  className: "row row- flex"
}, _react.default.createElement("div", null, _react.default.createElement("p", {
  className: "f12 pfc4 pb5 fw4"
}, "Starting from:"), _react.default.createElement("h4", {
  className: "package-price sfc3 fw7 f18 pb0"
}, _react.default.createElement("div", null, (0, _parsers.parsePrice)({
  price: priceFrom || price - discount,
  currency
}), "/-", _react.default.createElement("span", {
  className: "f12 fw4 ml8 pfc3 tdl"
}, (0, _parsers.parsePrice)({
  price: priceTo || price,
  currency
}), "/-"))), _react.default.createElement("p", {
  className: "f12"
}, priceUnit)), dealsInfo ? _react.default.createElement("span", {
  className: "discount-ribbon fright mt24 ml8"
}, (0, _parsers.getPercentage)({
  price,
  discount
}), "% Off") : null);

PackagePrice.propTypes = {
  priceUnit: _propTypes.default.string,
  price: _propTypes.default.number.isRequired,
  discount: _propTypes.default.number.isRequired,
  currency: _propTypes.default.string,
  priceFrom: _propTypes.default.number,
  priceTo: _propTypes.default.number,
  dealsInfo: _propTypes.default.bool.isRequired
};
PackagePrice.defaultProps = {
  priceUnit: 'per person',
  currency: 'Rupee'
};
var _default = PackagePrice;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/DaysItinerary.js":
/*!********************************************************!*\
  !*** ./app/components/PackageDetails/DaysItinerary.js ***!
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

__webpack_require__(/*! ./PackageDetailDayItinerary.scss */ "./app/components/PackageDetails/PackageDetailDayItinerary.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DaysItinerary = ({
  day,
  nextLink,
  prevLink,
  setItineraryDay
}) => _react.default.createElement("div", {
  className: "col-xs-12 bs4 p0 sbcw p8 fixed b0"
}, prevLink && _react.default.createElement("button", {
  onClick: () => setItineraryDay(day - 1),
  className: "fleft text-center btn-pri-large relative"
}, _react.default.createElement("span", {
  className: "arrowtnc right"
}), "Day ", day - 1), nextLink && _react.default.createElement("button", {
  onClick: () => setItineraryDay(day + 1),
  className: "fright text-center btn-pri-large relative"
}, _react.default.createElement("span", {
  className: "arrowtnc left"
}), "Day ", day + 1));

DaysItinerary.propTypes = {
  day: _propTypes.default.number.isRequired,
  nextLink: _propTypes.default.string,
  prevLink: _propTypes.default.string,
  setItineraryDay: _propTypes.default.func.isRequired
};
DaysItinerary.defaultProps = {
  nextLink: null,
  prevLink: null
};
var _default = DaysItinerary;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/Highlights.js":
/*!*****************************************************!*\
  !*** ./app/components/PackageDetails/Highlights.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./Highlights.scss */ "./app/components/PackageDetails/Highlights.scss");

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
  }, _react.default.createElement(_Icon.GreenTick, null)), l.text)))));
};

Highlights.propTypes = {
  list: _propTypes.default.array.isRequired
};
var _default = Highlights;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/Highlights.scss":
/*!*******************************************************!*\
  !*** ./app/components/PackageDetails/Highlights.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"highlightsList": "_2SWUO"
};

/***/ }),

/***/ "./app/components/PackageDetails/Hotel.js":
/*!************************************************!*\
  !*** ./app/components/PackageDetails/Hotel.js ***!
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

var _StarRatings = _interopRequireDefault(__webpack_require__(/*! ../Review/StarRatings */ "./app/components/Review/StarRatings.js"));

var _HotelCard = _interopRequireDefault(__webpack_require__(/*! ./HotelCard */ "./app/components/PackageDetails/HotelCard.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

__webpack_require__(/*! ./IncExclusion/Hotel.scss */ "./app/components/PackageDetails/IncExclusion/Hotel.scss");

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
      key: (0, _parsers.generateUniqueHash)(h.name)
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("p", {
      className: "f16 fw9 pfc1 relative iblock mr8"
    }, h.header)), _react.default.createElement("div", {
      className: "row row- pt15"
    }, _react.default.createElement(_HotelCard.default, {
      details: h,
      images: images,
      index: index
    })));
  });
  return _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement(_Swiper.default, {
    slideClass: "slide",
    spaceBetween: 8,
    slidesPerView: "auto",
    ssrAnimation: {
      width: 276,
      height: 252
    }
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

/***/ "./app/components/PackageDetails/HotelCard.js":
/*!****************************************************!*\
  !*** ./app/components/PackageDetails/HotelCard.js ***!
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

var _ItineraryTags = _interopRequireDefault(__webpack_require__(/*! components/Itinerary/ItineraryTags */ "./app/components/Itinerary/ItineraryTags.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _StarRatings = _interopRequireDefault(__webpack_require__(/*! ../Review/StarRatings */ "./app/components/Review/StarRatings.js"));

__webpack_require__(/*! ./IncExclusion/HotelCard.scss */ "./app/components/PackageDetails/IncExclusion/HotelCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HotelCard = ({
  details,
  images,
  index
}) => _react.default.createElement("div", {
  className: "hotel-card"
}, _react.default.createElement("div", {
  className: "hotel-img relative box-with-layer"
}, _react.default.createElement(_Img.default, {
  width: 316,
  height: 140,
  src: images.imageUrl,
  ikSrc: images.imagekitUrl,
  alt: details.name
})), _react.default.createElement("div", {
  className: "row row- pt8 pb8 hotel-data-box"
}, _react.default.createElement("h3", {
  className: "iblock mr8 f14 mb8 fw9"
}, details.name), _react.default.createElement("div", {
  className: "block mb8"
}, _react.default.createElement(_StarRatings.default, {
  id: `rating_${index}`,
  rating: details.rating
})), _react.default.createElement("p", {
  className: "f14p ellipsis-two"
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

/***/ "./app/components/PackageDetails/HotelFlight.js":
/*!******************************************************!*\
  !*** ./app/components/PackageDetails/HotelFlight.js ***!
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

var _Hotel = _interopRequireDefault(__webpack_require__(/*! ./Hotel */ "./app/components/PackageDetails/Hotel.js"));

var _NoHotelIncluded = _interopRequireDefault(__webpack_require__(/*! ./IncExclusion/NoHotelIncluded */ "./app/components/PackageDetails/IncExclusion/NoHotelIncluded.js"));

var _segmentEvents = __webpack_require__(/*! ../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

__webpack_require__(/*! ./IncExclusion/IncExclusion.scss */ "./app/components/PackageDetails/IncExclusion/IncExclusion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HotelFlight = ({
  hotels,
  flights,
  hotelTitle,
  inclusions,
  trackSegment
}) => {
  if (!hotels.length && !flights.length) {
    return null;
  }

  const onChangeHandler = text => {
    trackSegment(_segmentEvents.PACKAGE_INTERACTED, 'Hotel/Flight', text);
  };

  const availableInclusions = inclusions.filter(i => i.key === 'flights' && i.available);
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
  trackSegment: _propTypes.default.func,
  inclusions: _propTypes.default.array.isRequired
};
HotelFlight.defaultProps = {
  hotels: [],
  flights: [],
  hotelTitle: 'Hotels',
  trackSegment: () => {}
};
var _default = HotelFlight;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/IncExclusion/Exclusion.js":
/*!*****************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/Exclusion.js ***!
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

__webpack_require__(/*! ./Inclusion.scss */ "./app/components/PackageDetails/IncExclusion/Inclusion.scss");

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

/***/ "./app/components/PackageDetails/IncExclusion/Hotel.scss":
/*!***************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/Hotel.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"slide": "_3RWwe"
};

/***/ }),

/***/ "./app/components/PackageDetails/IncExclusion/HotelCard.scss":
/*!*******************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/HotelCard.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hotel-card": "_gWruc",
	"hotel-img": "_2tbVV",
	"hotel-data-box": "_8pPpW",
	"hotel-data-box-tags": "_130l-"
};

/***/ }),

/***/ "./app/components/PackageDetails/IncExclusion/IncExclusion.js":
/*!********************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/IncExclusion.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Inclusion = _interopRequireDefault(__webpack_require__(/*! ./Inclusion */ "./app/components/PackageDetails/IncExclusion/Inclusion.js"));

var _Exclusion = _interopRequireDefault(__webpack_require__(/*! ./Exclusion */ "./app/components/PackageDetails/IncExclusion/Exclusion.js"));

__webpack_require__(/*! ./IncExclusion.scss */ "./app/components/PackageDetails/IncExclusion/IncExclusion.scss");

var _segmentEvents = __webpack_require__(/*! ../../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IncExclusion = ({
  inclusions,
  exclusions,
  trackSegment
}) => {
  if (!inclusions.length && !exclusions.length) {
    return _react.default.createElement("div", null);
  }

  const onChangeHandler = text => {
    trackSegment(_segmentEvents.PACKAGE_INTERACTED, 'Inclusions/Exclusions', text);
  };

  return _react.default.createElement("div", {
    className: "row row- sbcw relative"
  }, _react.default.createElement("input", {
    type: "radio",
    name: "inc-exc-radio",
    className: "inc-exc-radio",
    id: "IncExcRadio1",
    defaultChecked: true,
    onClick: () => {
      onChangeHandler('Inclusions');
    }
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
    id: "IncExcRadio2",
    onClick: () => {
      onChangeHandler('Exclusions');
    }
  }), _react.default.createElement("label", {
    htmlFor: "IncExcRadio2",
    className: "col-xs-12 pl0 pr0 pt0"
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
  exclusions: _propTypes.default.array,
  trackSegment: _propTypes.default.func
};
IncExclusion.defaultProps = {
  inclusions: [],
  exclusions: [],
  trackSegment: () => {}
};
var _default = IncExclusion;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/IncExclusion/IncExclusion.scss":
/*!**********************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/IncExclusion.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"inc-exc-radio": "_5XTvT",
	"inc-exc-button": "_79RfK",
	"inc-exc-data": "_1hmTW"
};

/***/ }),

/***/ "./app/components/PackageDetails/IncExclusion/Inclusion.js":
/*!*****************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/Inclusion.js ***!
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

__webpack_require__(/*! ./Inclusion.scss */ "./app/components/PackageDetails/IncExclusion/Inclusion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Inclusion = ({
  list
}) => {
  const elements = list.map((item, i) => _react.default.createElement("li", {
    key: i
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

/***/ "./app/components/PackageDetails/IncExclusion/Inclusion.scss":
/*!*******************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/Inclusion.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"incl-excl-list": "_2YIoG",
	"excl-list": "_1NRWj"
};

/***/ }),

/***/ "./app/components/PackageDetails/IncExclusion/NoHotelIncluded.js":
/*!***********************************************************************!*\
  !*** ./app/components/PackageDetails/IncExclusion/NoHotelIncluded.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./Hotel.scss */ "./app/components/PackageDetails/IncExclusion/Hotel.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoHotelIncluded = () => _react.default.createElement("div", {
  className: "row row- pt24 pb24"
}, _react.default.createElement(_Icon.Hotel, {
  className: "greyscale flight-icon-disabled"
}), _react.default.createElement("p", {
  className: "pt8 f16 fw9 pfc4 text-center"
}, "No Hotel Included"));

var _default = NoHotelIncluded;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/InlineGateway.js":
/*!********************************************************!*\
  !*** ./app/components/PackageDetails/InlineGateway.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InlineGateway = ({
  title,
  destination,
  trip_type,
  package_filters
}) => {
  if (!package_filters.length) {
    return null;
  }

  function createPath(paramName, value) {
    let url = '';

    if (trip_type) {
      url = `/${trip_type}-packages`;
    }

    if (destination) {
      url = `${url}/${destination}`;
    }

    if (value) {
      url = `${url}?${paramName}[]=${value}`;
    }

    return url;
  }

  const renderList = (paramName, filters) => filters.map(listItem => _react.default.createElement(_reactRouter.Link, {
    className: "pills",
    key: listItem.value,
    value: listItem.value,
    target: "_blank",
    to: createPath(paramName, listItem.value)
  }, listItem.name));

  return _react.default.createElement("div", {
    className: "mb8 overflowh"
  }, _react.default.createElement("div", {
    className: "clearfix sbcw"
  }, _react.default.createElement("h4", {
    className: "fw9 mb4 p15"
  }, title), _react.default.createElement("div", {
    className: "pills-container-inline pb15 inline-day-selector"
  }, package_filters.map(filter => {
    return renderList(filter.param_name, filter.filters);
  }))));
};

InlineGateway.propTypes = {
  title: _propTypes.default.string,
  destination: _propTypes.default.string,
  trip_type: _propTypes.default.string,
  package_filters: _propTypes.default.array
};
var _default = InlineGateway;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/Itinerary.js":
/*!****************************************************!*\
  !*** ./app/components/PackageDetails/Itinerary.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _ItineraryTags = _interopRequireDefault(__webpack_require__(/*! ../Itinerary/ItineraryTags */ "./app/components/Itinerary/ItineraryTags.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _ItineraryPictureSlider = _interopRequireDefault(__webpack_require__(/*! ./ItineraryPictureSlider */ "./app/components/PackageDetails/ItineraryPictureSlider.js"));

__webpack_require__(/*! ./../Itinerary/Itinerary.scss */ "./app/components/Itinerary/Itinerary.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DownSideArrow = _glamorous.default.span({
  width: '10px',
  height: '6px',
  margin: '0 auto',
  display: 'inline-block',
  marginLeft: '5px'
});

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
      className: "itinerary-container-box"
    }, _react.default.createElement("div", {
      className: "row row- relative itinerary-container"
    }, _react.default.createElement("div", {
      className: "col-xs-12 itinerary-container-small"
    }, _react.default.createElement("input", {
      type: "checkbox",
      className: "iti-radio",
      id: `itinerary_radio_${id}_${key}`,
      onChange: () => trackSegment(_segmentEvents.PACKAGE_INTERACTED, 'Itinerary', title)
    }), _react.default.createElement("label", {
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
    }, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement("div", {
      className: "row row- itinerary-tags-box"
    }, _react.default.createElement(_ItineraryTags.default, {
      list: value.labels,
      itineraryId: id,
      tagId: key
    }))), _react.default.createElement("div", {
      className: "row row- itinerary-list-box"
    }, _react.default.createElement("div", {
      className: "row row- t0 l0 "
    }, _react.default.createElement("ul", {
      className: "list-style-no itinerary-images-container mt24 mb24"
    }, itinerary[key].pictures ? _react.default.createElement(_ItineraryPictureSlider.default, {
      pictures: itinerary[key].pictures,
      heading: title
    }) : null)), _react.default.createElement("ul", {
      className: "list-style-no f12"
    }, dayDetailElements(Array.isArray(value.day_detail) ? value.day_detail : [], id, key)), _react.default.createElement("div", {
      className: "row row- pt8 pb8"
    }, _react.default.createElement("button", {
      onClick: () => setItineraryDay(key + 1),
      className: "f12 fright sfc1 fw7"
    }, "View Details")))))));
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

/***/ "./app/components/PackageDetails/ItineraryImagesPopup.js":
/*!***************************************************************!*\
  !*** ./app/components/PackageDetails/ItineraryImagesPopup.js ***!
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

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItineraryPopup = ({
  pictures,
  heading
}) => {
  return _react.default.createElement("div", null, _react.default.createElement("p", {
    className: "f16 text-left fw4 pl48 pt8 pb15 pr15 absolute t3"
  }, heading), _react.default.createElement("ul", {
    className: "list-style-no itinerary-images-container",
    onClick: e => (void 0).openImagesPopup(e)
  }, pictures.map((picture, i) => _react.default.createElement("li", null, _react.default.createElement(_Img.default, {
    key: i,
    src: picture.picture_details.picture,
    ikSrc: picture.picture_details.imagekit_url,
    alt: picture.picture_details.caption
  })))));
};

ItineraryPopup.propTypes = {
  pictures: _propTypes.default.array.isRequired,
  heading: _propTypes.default.string
};
var _default = ItineraryPopup;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/ItineraryPictureSlider.js":
/*!*****************************************************************!*\
  !*** ./app/components/PackageDetails/ItineraryPictureSlider.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _ItineraryImagesPopup = _interopRequireDefault(__webpack_require__(/*! ./ItineraryImagesPopup */ "./app/components/PackageDetails/ItineraryImagesPopup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ItineraryPictureSlider = class ItineraryPictureSlider extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      closeModal: true
    };

    this.openImagesPopup = e => {
      e.stopPropagation();
      this.setState({
        openModal: true,
        closeModal: false
      });
    };

    this.closePopup = () => {
      this.setState({
        closeModal: true,
        openModal: false
      });
    };
  }

  render() {
    const {
      pictures,
      heading
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement("ul", {
      className: "list-style-no itinerary-images-container",
      onClick: e => this.openImagesPopup(e)
    }, pictures.map((picture, i) => _react.default.createElement("li", null, _react.default.createElement(_Img.default, {
      key: i,
      ikSrc: picture.picture_details.imagekit_url,
      alt: picture.picture_details.caption
    })))), _react.default.createElement(_GenericModal.default, {
      trigger: null,
      fullView: true,
      isOpen: this.state.openModal,
      hasCustomClose: true,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.closePopup
    }, _react.default.createElement(_ItineraryImagesPopup.default, {
      pictures: pictures,
      heading: heading
    })));
  }

};
ItineraryPictureSlider.propTypes = {
  pictures: _propTypes.default.array,
  heading: _propTypes.default.string
};
var _default = ItineraryPictureSlider;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/PackageCities.js":
/*!********************************************************!*\
  !*** ./app/components/PackageDetails/PackageCities.js ***!
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

__webpack_require__(/*! components/Listing/PackageCities.scss */ "./app/components/Listing/PackageCities.scss");

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
    className: "fw7 f12 list-heading"
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

/***/ "./app/components/PackageDetails/PackageDaysDiscount.js":
/*!**************************************************************!*\
  !*** ./app/components/PackageDetails/PackageDaysDiscount.js ***!
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

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! components/Listing/PackageDaysDiscount.scss */ "./app/components/Listing/PackageDaysDiscount.scss");

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
      discount,
      hideDiscount
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "row row- mt24"
    }, _react.default.createElement("button", {
      className: "package-info-icon package-info-icon-custom-left relative fright",
      onClick: () => this.toggleTooltip()
    }, _react.default.createElement(_Icon.InfoIcon, null), this.state.isTooltipVisible ? _react.default.createElement("div", {
      className: hideDiscount ? 'tooltip-upwards' : 'tooltipdata-up'
    }, _react.default.createElement("p", {
      className: "f12 sfcw m0 text-left"
    }, "Exact prices may vary based on availability.")) : null), !hideDiscount ? _react.default.createElement("span", {
      className: "discount-ribbon fright mr5"
    }, (0, _parsers.getPercentage)({
      price,
      discount
    }), "% Off") : null));
  }

};
PackageDaysDiscount.propTypes = {
  days: _propTypes.default.number.isRequired,
  nights: _propTypes.default.number.isRequired,
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

/***/ "./app/components/PackageDetails/PackageDetailDayItinerary.js":
/*!********************************************************************!*\
  !*** ./app/components/PackageDetails/PackageDetailDayItinerary.js ***!
  \********************************************************************/
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

var _DaysItinerary = _interopRequireDefault(__webpack_require__(/*! ./DaysItinerary.js */ "./app/components/PackageDetails/DaysItinerary.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! ../Listing/PackageIncExc.js */ "./app/components/Listing/PackageIncExc.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _PackageSlider = _interopRequireDefault(__webpack_require__(/*! ./PackageSlider */ "./app/components/PackageDetails/PackageSlider.js"));

var _ItineraryTags = _interopRequireDefault(__webpack_require__(/*! ../Itinerary/ItineraryTags */ "./app/components/Itinerary/ItineraryTags.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const htmlToReactParser = new _htmlToReact.Parser();

const PackageDetailDayItinerary = ({
  packageDetails,
  itinerary,
  day,
  resource,
  replaceState,
  setItineraryDay,
  showSection
}) => {
  const spaceIndex = itinerary.title.indexOf(' ', itinerary.title.indexOf(' ') + 1) || 0;
  const title = itinerary.title.substr(spaceIndex + 1);
  const homeLink = `/packages/${resource.path}?id=${resource.id}`;
  const nextLink = day < packageDetails.itinerary.length ? `${homeLink}&day=${day + 1}` : null;
  const prevLink = day > 1 ? `${homeLink}&day=${day - 1}` : null; // TODO: Scroll is breaking on this page

  return _react.default.createElement("div", {
    className: showSection ? "overflowa sbcw itinerary-details-popup" : "hide"
  }, _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "col-xs-12 sbcw pl0 pr0"
  }, _react.default.createElement("h2", {
    className: "f16 text-left fw4 pl48 pt15 pb15 relative pr15"
  }, _react.default.createElement("button", {
    className: "absolute-center-v l15 cross-common",
    onClick: () => setItineraryDay(0)
  }, _react.default.createElement(_Icon.Back2Icon, null)), "Itinerary"))), _react.default.createElement("div", {
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
    setItineraryDay: setItineraryDay
  }));
};

PackageDetailDayItinerary.propTypes = {
  packageDetails: _propTypes.default.object.isRequired,
  day: _propTypes.default.number.isRequired,
  resource: _propTypes.default.object.isRequired,
  replaceState: _propTypes.default.func.isRequired,
  itinerary: _propTypes.default.object,
  setItineraryDay: _propTypes.default.func.isRequired,
  showSection: _propTypes.default.bool.isRequired
};
PackageDetailDayItinerary.defaultProps = {
  itinerary: {}
};
var _default = PackageDetailDayItinerary;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/PackageDetailDayItinerary.scss":
/*!**********************************************************************!*\
  !*** ./app/components/PackageDetails/PackageDetailDayItinerary.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"arrowtnc": "_1mg0Q",
	"right": "_2ia7s",
	"left": "_10b0U"
};

/***/ }),

/***/ "./app/components/PackageDetails/PackageDetails.js":
/*!*********************************************************!*\
  !*** ./app/components/PackageDetails/PackageDetails.js ***!
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

var _reactScrollPercentage = __webpack_require__(/*! react-scroll-percentage */ "react-scroll-percentage");

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _reactScroll = _interopRequireDefault(__webpack_require__(/*! react-scroll */ "react-scroll"));

var _Highlights = _interopRequireDefault(__webpack_require__(/*! ./Highlights */ "./app/components/PackageDetails/Highlights.js"));

var _QuickLinkNav = _interopRequireDefault(__webpack_require__(/*! ./QuickLinkNav */ "./app/components/PackageDetails/QuickLinkNav.js"));

var _Itinerary = _interopRequireDefault(__webpack_require__(/*! ./Itinerary */ "./app/components/PackageDetails/Itinerary.js"));

var _IncExclusion = _interopRequireDefault(__webpack_require__(/*! ./IncExclusion/IncExclusion */ "./app/components/PackageDetails/IncExclusion/IncExclusion.js"));

var _HotelFlight = _interopRequireDefault(__webpack_require__(/*! ./HotelFlight */ "./app/components/PackageDetails/HotelFlight.js"));

var _PackageSlider = _interopRequireDefault(__webpack_require__(/*! components/PackageDetails/PackageSlider */ "./app/components/PackageDetails/PackageSlider.js"));

var _PackageDetailsPrice = _interopRequireDefault(__webpack_require__(/*! ./PackageDetailsPrice */ "./app/components/PackageDetails/PackageDetailsPrice.js"));

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ../Generic/ShowMore */ "./app/components/Generic/ShowMore.js"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Faq = _interopRequireDefault(__webpack_require__(/*! ../Faq/Faq */ "./app/components/Faq/Faq.js"));

var _InlineGateway = _interopRequireDefault(__webpack_require__(/*! ./InlineGateway */ "./app/components/PackageDetails/InlineGateway.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

var _exitIntent = __webpack_require__(/*! helpers/exitIntent */ "./app/helpers/exitIntent.js");

var _PackageDetailDayItinerary = _interopRequireDefault(__webpack_require__(/*! ./PackageDetailDayItinerary */ "./app/components/PackageDetails/PackageDetailDayItinerary.js"));

var _interlinking = _interopRequireDefault(__webpack_require__(/*! modules/shared/interlinking */ "./app-v2/modules/shared/interlinking/index.js"));

__webpack_require__(/*! components/Listing/AboutListingDestination.scss */ "./app/components/Listing/AboutListingDestination.scss");

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parser = new _htmlToReact.Parser();
const scrollLink = _reactScroll.default.Link;
const Element = _reactScroll.default.Element;
const Events = _reactScroll.default.Events;
const scrollSpy = _reactScroll.default.scrollSpy;

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

const GScrollElementContainer = _glamorous.default.div({
  zIndex: 9,
  position: 'relative',
  '& .active .quicklinksContainer': {
    boxShadow: '0px 2px 6px #999'
  }
});

const Overview = ({
  overview,
  title,
  trackSegment,
  plpHeading,
  isRatingSchemaEnabled
}) => {
  const overviewContent = () => {
    const overviewSplit = overview.split('&lt;readmore&gt;');
    return _react.default.createElement(_ShowMore.default, {
      wrapText: parser.parse(overviewSplit[0]),
      moreText: parser.parse(overviewSplit[1]),
      trackSegment: trackSegment
    });
  };

  return _react.default.createElement("div", {
    className: "row row- "
  }, _react.default.createElement("div", {
    className: "container p15 sbcw about-destination overview-content",
    property: isRatingSchemaEnabled ? 'description' : ''
  }, plpHeading ? _react.default.createElement("h1", {
    className: "f16 fw9 pb15"
  }, title) : _react.default.createElement("h2", {
    className: "f16 fw9 pb15"
  }, "Overview"), _react.default.createElement("div", {
    className: "read-more-box dynamicTextInherit"
  }, overviewContent())));
};

Overview.propTypes = {
  overview: _propTypes.default.string,
  title: _propTypes.default.string,
  trackSegment: _propTypes.default.func,
  plpHeading: _propTypes.default.string,
  isRatingSchemaEnabled: _propTypes.default.bool
};
Overview.defaultProps = {
  overview: '',
  title: 'Overview',
  trackSegment: () => {},
  plpHeading: '',
  isRatingSchemaEnabled: false
};
const starToId = {
  2: '32',
  3: '8',
  4: '7',
  5: '6'
};
let PackageDetails = class PackageDetails extends _react.default.Component {
  constructor(props) {
    const {
      packageDetails,
      faqs
    } = props;
    super(props);
    this.state = {
      animationPrice: false,
      itineraryDayValue: 0
    };

    this.updatePriceCallBack = () => {
      this.setState({
        animationPrice: true
      }, () => {
        setTimeout(() => {
          if (this.state.animationPrice) {
            this.setState({
              animationPrice: false
            });
          }
        }, 1000);
      });
    };

    this.setItineraryDay = day => {
      document.body.style.overflow = day === 0 ? 'auto' : 'hidden';
      this.setState({
        itineraryDayValue: day
      });
    };

    this.headerConstants = createHeaderConstants(packageDetails, faqs);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();
    const landing_uuid = (0, _FormDataFormatter.getCookie)(_FormDataFormatter.LANDING_UUID_COOKIE_KEY);
    const page_uuid = (0, _FormDataFormatter.getCookie)(_FormDataFormatter.PAGE_UUID_COOKIE_KEY);

    if (landing_uuid === page_uuid) {
      this.props.fetchInlineGateways(this.props.packageDetails.id, this.props.params.packageName, this.props.location.query || {});
    }

    (0, _exitIntent.initializeExitIntent)();
  }

  static getExpPrice(pkg) {
    const {
      total_price,
      discounted_price,
      month_options: {
        month_ranges
      },
      price: {
        from,
        discount,
        to
      }
    } = pkg;
    const priceTotal = (0, _parsers.inflatePrice)(total_price);
    const discountedPrice = (0, _parsers.inflatePrice)(discounted_price);
    let month_ranges_new = [...month_ranges];
    month_ranges_new = month_ranges_new.map(month => {
      return _objectSpread({}, month, {
        start_price: (0, _parsers.inflatePrice)(month.start_price),
        end_price: (0, _parsers.inflatePrice)(month.end_price)
      });
    });
    const selectedMonth = pkg.selectedMonthNumber || (0, _DateTime.getCurrentMonth)() + 1;
    const currentMonth = month_ranges_new.filter(e => {
      return e.id === selectedMonth;
    })[0];
    return _objectSpread({}, pkg, {
      total_price: priceTotal,
      discounted_price: discountedPrice,
      month_options: {
        month_ranges: [...month_ranges_new],
        old_month_ranges: [...month_ranges]
      },
      price: _objectSpread({}, pkg.price, {
        from: currentMonth.start_price,
        to: currentMonth.end_price,
        discount: currentMonth.end_price - currentMonth.start_price,
        total: currentMonth.end_price
      })
    });
  }

  static getExpData(experimentId, pkg) {
    switch (experimentId) {
      case 'pr1':
        {
          return _objectSpread({}, pkg, {
            hideDiscount: true
          });
        }

      case 'pr2':
        {
          const packageDetail = _objectSpread({}, PackageDetails.getExpPrice(pkg));

          return _objectSpread({}, packageDetail, {
            hideDiscount: true
          });
        }

      case 'def':
      default:
        {
          return pkg;
        }
    }
  }

  render() {
    let packageDetails = this.props.packageDetails;
    const {
      resource,
      replaceState,
      trackLeadFunnelClick,
      title,
      location,
      backUrl,
      detailsResource,
      footerLinks,
      experimentId,
      isRatingSchemaEnabled
    } = this.props;
    const activeDetails = {};
    const {
      itineraryDayValue
    } = this.state;
    packageDetails = _objectSpread({}, PackageDetails.getExpData(experimentId, packageDetails));

    try {
      activeDetails.optionsExists = packageDetails.package_options.hotel_price_details.length || packageDetails.month_options.month_ranges.length;
      activeDetails.starRating = packageDetails.package_options.hotel_price_details.filter(e => e.is_checked)[0].hotel_star;

      if (packageDetails.selectedMonthNumber > 0) {
        const selectedMonths = packageDetails.month_options.month_ranges.filter(e => e.id === packageDetails.selectedMonthNumber);
        activeDetails.month = selectedMonths.length > 0 ? selectedMonths[0].month_value : packageDetails.month_options.month_ranges[0].month_value;
      } else {
        activeDetails.month = packageDetails.displayRange && packageDetails.price.month ? packageDetails.price.month : packageDetails.month_options.month_ranges.find(e => e.id === new Date().getMonth() + 1).month_value.split(' ')[0]; // TODO: Manvendra, this month calculation is related with reducers/packages/details.js:117 TODO item.
      }
    } catch (e) {
      console.log(e);
      activeDetails.optionsExists = false;
      activeDetails.starRating = undefined;
      activeDetails.month = undefined;
    } // TODO: Ugly code. Handle it differently


    let toDestination = '';

    try {
      toDestination = packageDetails.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }

    const inlineGateway = packageDetails.inlineGateway;
    const additionalInfoText = `Traveler has expressed interest in ${packageDetails.days} Days , ${packageDetails.nights} nights with cities ${packageDetails.cities}. For more details, see the <a href='/packages/${packageDetails.set_url}'>link</a>`;
    const ctaText = 'Customize & Get Quotes';
    const packageType = packageDetails.titles.overview.toLowerCase();
    const isDeal = packageType === 'deals';
    const isLuxury = packageType === 'luxury';

    const trackLeadFunnel = () => {
      (0, _FormDataFormatter.setCookie)('package_id_lead_funnel', packageDetails.id);
      const section = 'Get Quotes Button';
      const category = `Destination:${toDestination}`;
      trackLeadFunnelClick({
        funnelStep: 1,
        section,
        category,
        cta: ctaText,
        packageId: packageDetails.id,
        destinationID: packageDetails.destinations[0].id
      });
    };

    const trackSegmentEvent = (event, category, cta) => {
      (0, _segmentEvents.trackSegment)({
        event: event,
        section: `Package Details:${category}`,
        object: '',
        cta: cta,
        value: packageDetails.total_price,
        category: category,
        label: `Destination:${packageDetails.destinations[0].name}::Days:${packageDetails.days}::
        Month:${packageDetails.selectedMonthNumber}::Hotel:''`,
        destination_id: packageDetails.destinations[0].id,
        package_id: packageDetails.id
      });
    };

    const exitDiv = _react.default.createElement("div", {
      id: "reactExitIntentImage",
      className: "mkt-mob-exit-intent mb8 row row- mb8 relative",
      onClick: _exitIntent.showPopUp
    });

    let dealnLuxury = {};

    if (isDeal || isLuxury) {
      dealnLuxury = {
        price: packageDetails.total_price,
        isFlight: !!packageDetails.inclusions.filter(inc => inc.key.toLowerCase() === 'flights').length,
        starRating: packageDetails.package_options.hotel_price_details[0].hotel_star
      };
    }

    return _react.default.createElement(_reactScrollPercentage.ScrollPercentage, null, _react.default.createElement(GScrollElementContainer, null, _react.default.createElement(_reactStickynode.default, {
      enabled: true,
      top: 0,
      innerZ: 4
    }, _react.default.createElement(_QuickLinkNav.default, {
      options: this.headerConstants,
      ScrollLink: scrollLink,
      dealsInfo: packageDetails.titles,
      trackLeadFunnelClick: trackLeadFunnel
    }))), _react.default.createElement(_PackageSlider.default, {
      images: packageDetails.slider_pic,
      name: packageDetails.name,
      covers: packageDetails.covers,
      dealsInfo: packageDetails.titles,
      price: packageDetails.price,
      isDeal: isDeal,
      isLuxury: isLuxury,
      hideDiscount: packageDetails.hideDiscount
    }), _react.default.createElement("div", {
      className: "row row- sbc5 overflowh"
    }, _react.default.createElement(_PackageDetailsPrice.default, {
      hotels: packageDetails.hotels,
      dealsInfo: packageDetails.titles,
      pkg: packageDetails,
      isDeal: isDeal,
      isLuxury: isLuxury,
      update: this.props.update,
      pushState: this.props.pushState,
      selectedMonth: this.props.selectedMonth || 0,
      updateSelectedMonth: this.props.updateSelectedMonth,
      updatePriceCallBack: this.updatePriceCallBack,
      animationPrice: this.state.animationPrice
    }), inlineGateway ? _react.default.createElement(_InlineGateway.default, {
      title: inlineGateway.title,
      destination: inlineGateway.destination,
      trip_type: inlineGateway.trip_type,
      package_filters: inlineGateway.package_filters
    }) : null, _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(Element, {
      name: "overview_box"
    }, _react.default.createElement(Overview, {
      overview: packageDetails.overview,
      title: packageDetails.heading,
      trackSegment: trackSegmentEvent,
      plpHeading: packageDetails.plp_heading,
      isRatingSchemaEnabled: isRatingSchemaEnabled
    }))), packageDetails.highlights && packageDetails.highlights.length ? _react.default.createElement(_Highlights.default, {
      list: packageDetails.highlights
    }) : null, _react.default.createElement(Element, {
      name: "itinerary_box",
      className: "mb8"
    }, _react.default.createElement(_Itinerary.default, {
      itinerary: packageDetails.itinerary,
      titleHead: "Itinerary",
      id: packageDetails.id,
      resource: resource,
      replaceState: replaceState,
      trackSegment: trackSegmentEvent,
      packageDetails: packageDetails,
      setItineraryDay: this.setItineraryDay
    })), _react.default.createElement("div", {
      id: "itinerary_section_detail",
      className: itineraryDayValue && itineraryDayValue <= packageDetails.itinerary.length ? "row row- z10 fixed wfull hfull t0 l0 overflowa pb64 sbcw" : "hide"
    }, packageDetails.itinerary.map((itinerary, index) => {
      return _react.default.createElement(_PackageDetailDayItinerary.default, {
        replaceState: replaceState,
        packageDetails: packageDetails,
        day: index + 1,
        itinerary: itinerary,
        resource: detailsResource,
        setItineraryDay: this.setItineraryDay,
        showSection: index + 1 === itineraryDayValue
      });
    })), _react.default.createElement(Element, {
      name: "hotel_box",
      className: "mb8"
    }, _react.default.createElement(_HotelFlight.default, {
      hotels: packageDetails.hotels,
      hotelTitle: "Hotel",
      flights: packageDetails.flights,
      trackSegment: trackSegmentEvent,
      inclusions: packageDetails.incExc.inclusions
    })), _react.default.createElement(Element, {
      name: "incexclusion_box",
      className: "mb8 "
    }, _react.default.createElement(_IncExclusion.default, {
      inclusions: packageDetails.inclusion_text,
      exclusions: packageDetails.exclusion_text,
      trackSegment: trackSegmentEvent
    })), exitDiv, footerLinks.length ? _react.default.createElement(_interlinking.default, {
      footerLinks: footerLinks
    }) : null, _react.default.createElement(Element, {
      name: "faq_box",
      className: "row row- pb8 sbc5"
    }, _react.default.createElement(_Faq.default, {
      faqs: this.props.faqs,
      destination: this.props.packageDetails.destinations.length ? this.props.packageDetails.destinations[0] : null,
      title: "FAQ"
    })), _react.default.createElement("div", {
      className: "fixed b0 l0 r0 z4 p8 sbcw bs4"
    }, _react.default.createElement("div", {
      className: "col-xs-4 pl0 pr8"
    }, _react.default.createElement("a", {
      className: "btn-pri-large pl15 pr15 wfull ripple",
      href: "tel:844 844 9287"
    }, "Call Us")), _react.default.createElement("div", {
      className: "col-xs-8 pr0 pl0",
      onClick: () => this.props.getPackageData(dealnLuxury)
    }, _react.default.createElement(_FormOneCTA.default, {
      tag: packageType,
      rtProps: {
        to_loc: toDestination,
        trip_days: packageDetails.days.toString(),
        addtl_info: additionalInfoText,
        packageId: packageDetails.id,
        page: 'Package List Page',
        section: 'Package List',
        cta: isDeal ? 'Check Availability' : ctaText,
        object: `Package/${packageDetails.id}`
      },
      clickHandler: trackLeadFunnel,
      deals: isDeal || isLuxury,
      budget: packageDetails.discounted_price
    }, _react.default.createElement("div", {
      className: "btn-filled-pri-large wfull pl8 pr8 customized-variation",
      "data-obj": JSON.stringify({
        to_loc: toDestination,
        trip_days: packageDetails.days.toString()
      })
    }, _react.default.createElement("div", {
      className: "wave"
    }), isDeal ? 'Check Availability' : ctaText))))));
  }

};
PackageDetails.propTypes = {
  packageDetails: _propTypes.default.object.isRequired,
  resource: _propTypes.default.object.isRequired,
  replaceState: _propTypes.default.func.isRequired,
  trackLeadFunnelClick: _propTypes.default.func,
  faqs: _propTypes.default.array.isRequired,
  update: _propTypes.default.func.isRequired,
  updateSelectedMonth: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  selectedMonth: _propTypes.default.number,
  fetchInlineGateways: _propTypes.default.func.isRequired,
  params: _propTypes.default.object,
  location: _propTypes.default.object,
  title: _propTypes.default.string,
  backUrl: _propTypes.default.string,
  getPackageData: _propTypes.default.func.isRequired,
  detailsResource: _propTypes.default.object.isRequired,
  footerLinks: _propTypes.default.array,
  experimentId: _propTypes.default.string,
  isRatingSchemaEnabled: _propTypes.default.bool
};
PackageDetails.defaultProps = {
  trackLeadFunnelClick: () => {},
  experimentId: ''
};
var _default = PackageDetails;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/PackageDetails.scss":
/*!***********************************************************!*\
  !*** ./app/components/PackageDetails/PackageDetails.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-detail-container-new-ui": "_2lZbr",
	"read-more-button": "_3A1Pj",
	"days-count": "_CDdoF",
	"itinerary-container": "_eCvdV",
	"itinerary-container-box": "_1gYqZ",
	"itinerary-container-small": "_32xcP",
	"iti-radio": "_2_PqN",
	"checkbox-common": "_3T58E",
	"radio-common-round": "_2MKQH",
	"header-title": "_3iaiv",
	"package-slider-img": "_3KWgJ",
	"days-tag": "_7UuSG",
	"swiper-button-next": "_Mk5WA",
	"swiper-button-prev": "_eoPz1",
	"swiper-container-horizontal": "_hG48f",
	"swiper-pagination-bullets": "_3Se2x",
	"swiper-pagination-bullet": "_2yW4t",
	"swiper-pagination-bullet-active": "_boLsT",
	"itinerary-list-box": "_2CqWM",
	"f14p": "_uKIB1",
	"question-mark": "_3t54E",
	"package-slider-caption": "_2pLl6",
	"packages-day-count": "_3BANR",
	"discount-ribbon": "_2DaEb",
	"package-cities-list": "_1ght5",
	"recommended-icon-container": "_8lre1",
	"dynamicTextInherit": "_x8RKt",
	"itinerary-days-flag": "_27-qT",
	"note": "_3sZoe",
	"hotel-card": "_1oPm7",
	"box-with-layer": "_2I-fw",
	"hotel-carousel-wrapper": "_37dgP",
	"swiper-wrapper": "_vHNJr",
	"traveler-rating-star-list": "_-VVhk",
	"itinerary-images-container": "_1dJih",
	"hotel-img": "_2kTp2",
	"hotel-data-box-tags": "_2JUgg",
	"hotel-data-box": "_3Qowb",
	"ellipsis-two": "_1m_ZR",
	"itinerary-tags-box-item": "_3sXj9",
	"divider-line": "_1DiUh",
	"incl-excl-list": "_1DpgT",
	"excl-list": "_36AFL",
	"swiper-slide": "_1wrjq",
	"highlight-deals-banner": "_37Z16",
	"deal-package": "_qb6ke",
	"back-arrow": "_1igek",
	"inc-exc-button": "_1xhcp",
	"heading-common-center": "_3EJA6",
	"bottom-border": "_20VAV",
	"faq-box": "_1WFuQ",
	"faq-question": "_17WtL",
	"read-more-box": "_1chB2",
	"read-more-state": "_2lYZM",
	"read-more-wrap": "_18cY9",
	"traveller-new-ui": "_3DSDX",
	"review-con-main": "_1Zj4B",
	"review-wrapper": "_30t8m",
	"traveler-img-details": "_3mbnM",
	"swiper-pagination": "_2EZxL",
	"animated": "_6tfM7",
	"shake": "_uDb14",
	"itinerary-details-popup": "_2b7mI",
	"similar-packages-new-ui": "_3fFV_",
	"row": "_30RS7",
	"row-": "_1or7T",
	"pl8": "_27aSq",
	"pr8": "_3Igsy",
	"pt15": "_w-Sdr",
	"pb8": "_1Oo_G",
	"sbcw": "_3_CDk",
	"recent-packages-new-ui": "_PGdr5",
	"p15": "_19_sN",
	"m8": "_2S6hX",
	"mt0": "_3gWNu",
	"about-destination": "_3_gio",
	"overview-content": "_2Kf9B"
};

/***/ }),

/***/ "./app/components/PackageDetails/PackageDetailsFooter.js":
/*!***************************************************************!*\
  !*** ./app/components/PackageDetails/PackageDetailsFooter.js ***!
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

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ../Generic/ShowMore */ "./app/components/Generic/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = new _htmlToReact.Parser();

const renderFooterAboveText = footerSection => {
  const footerAboveText = footerSection.footer_above_text.replace(/&lt;img(.*?)&gt;/gm, (m, content) => {
    return `<img data-defer-load="true" ${content}>`;
  }).split('&lt;readmore&gt;');
  return _react.default.createElement(_ShowMore.default, {
    wrapText: parser.parse(footerAboveText[0]),
    moreText: parser.parse(footerAboveText[1])
  });
};

const PackageDetailsFooter = ({
  footerSection
}) => {
  return _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "container p15 sbcw"
  }, _react.default.createElement("div", {
    className: "read-more-box dynamicTextInherit"
  }, renderFooterAboveText(footerSection))));
};

PackageDetailsFooter.propTypes = {
  footerSection: _propTypes.default.object.isRequired
};
var _default = PackageDetailsFooter;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/PackageDetailsPrice.js":
/*!**************************************************************!*\
  !*** ./app/components/PackageDetails/PackageDetailsPrice.js ***!
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

var _PackagePrice = _interopRequireDefault(__webpack_require__(/*! ./PackagePrice */ "./app/components/PackageDetails/PackagePrice.js"));

var _PackageDaysDiscount = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageDaysDiscount */ "./app/components/Listing/PackageDaysDiscount.js"));

var _PackageCities = _interopRequireDefault(__webpack_require__(/*! ./PackageCities */ "./app/components/PackageDetails/PackageCities.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageIncExc */ "./app/components/Listing/PackageIncExc.js"));

var _StarMonthFilter = _interopRequireDefault(__webpack_require__(/*! components/PackageDetails/StarMonthFilter */ "./app/components/PackageDetails/StarMonthFilter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PackageDetailsPrice = ({
  pkg,
  dealsInfo,
  isDeal,
  isLuxury,
  update,
  pushState,
  selectedMonth,
  updateSelectedMonth,
  updatePriceCallBack,
  animationPrice
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
  }, isDeal || isLuxury ? null : _react.default.createElement(_StarMonthFilter.default, {
    update: update,
    pushState: pushState,
    selectedMonth: selectedMonth || 0,
    packageDetails: pkg,
    updateSelectedMonth: updateSelectedMonth
  }), _react.default.createElement("div", {
    className: "sbcw p15"
  }, _react.default.createElement(_PackageCities.default, {
    cities: pkg.city_list_with_days || {}
  })), _react.default.createElement("div", {
    className: "p15 pb4 pt0 sbcw"
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
    className: `flex alignCenter pl0 col-xs-12 pr0`
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
  })), _react.default.createElement("div", {
    className: "col-xs-12 p0"
  }, isDeal && dealsInfo.itinerary ? _react.default.createElement("p", {
    className: "f12 mt8"
  }, _react.default.createElement("strong", null, "Validity: "), " ", dealsInfo.itinerary) : null)), _react.default.createElement("span", {
    className: "divider-line"
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

/***/ "./app/components/PackageDetails/PackagePrice.js":
/*!*******************************************************!*\
  !*** ./app/components/PackageDetails/PackagePrice.js ***!
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

var _PackageDaysDiscount = _interopRequireDefault(__webpack_require__(/*! ./PackageDaysDiscount */ "./app/components/PackageDetails/PackageDaysDiscount.js"));

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
  animationPrice,
  hideDiscount
}) => _react.default.createElement("div", {
  className: "row row- flex wfull"
}, _react.default.createElement("div", null, _react.default.createElement("p", {
  className: "f10 pfc4 pb5 fw4"
}, "Starting from:"), _react.default.createElement("h4", {
  className: `${animationPrice ? 'animated shake' : ''} package-price sfc3 fw7 f24 pb0`
}, _react.default.createElement("div", null, (0, _parsers.parsePrice)({
  price: priceFrom || price - discount,
  currency
}), "/-", !hideDiscount ? _react.default.createElement("span", {
  className: "f12 fw4 ml8 pfc3 tdl"
}, (0, _parsers.parsePrice)({
  price: priceTo || price,
  currency
}), "/-") : null)), _react.default.createElement("p", {
  className: "f10"
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
  dealsInfo: _propTypes.default.bool.isRequired,
  days: _propTypes.default.number,
  nights: _propTypes.default.number,
  animationPrice: _propTypes.default.bool,
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

/***/ "./app/components/PackageDetails/PackageSlider.js":
/*!********************************************************!*\
  !*** ./app/components/PackageDetails/PackageSlider.js ***!
  \********************************************************/
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

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

__webpack_require__(/*! ./PackageSlider.scss */ "./app/components/PackageDetails/PackageSlider.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  }), _react.default.createElement(_Swiper.default, _extends({}, params, {
    isFullWidthSwiper: true,
    ssrAnimation: {
      width: 360,
      height: 200
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    showLoader: true
  }), images.map((s, i) => {
    return _react.default.createElement("div", null, _react.default.createElement("img", {
      width: 411,
      height: 286,
      key: i,
      "data-src": s.picture_details.imagekit_url,
      alt: name,
      className: "swiper-lazy"
    }), _react.default.createElement("p", {
      className: "sfcw absolute p8 b0 l0 wfull z16 package-slider-caption"
    }, s.picture_details.caption));
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
  }, _react.default.createElement(_Icon.LuxuryPackageIcon, null)) : null));
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

/***/ "./app/components/PackageDetails/PackageSlider.scss":
/*!**********************************************************!*\
  !*** ./app/components/PackageDetails/PackageSlider.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-slider-img": "_WnTEu",
	"package-slider-caption": "_264jw",
	"days-tag": "_2n8je"
};

/***/ }),

/***/ "./app/components/PackageDetails/QuickLinkNav.js":
/*!*******************************************************!*\
  !*** ./app/components/PackageDetails/QuickLinkNav.js ***!
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

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GUl = _glamorous.default.ul({
  '& li': {
    listStyle: 'none',
    '& a': {
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#3e3e3e'
      },
      '&:after': {
        height: '2px',
        width: '100%',
        content: '\' \'',
        position: 'absolute',
        bottom: '0',
        left: '0'
      },
      '&.active': {
        backgroundColor: '#efefef',
        color: '#3e3e3e',
        '&:after': {
          backgroundColor: '#009688'
        }
      }
    }
  }
});

let QuickLinkNav = (_temp = _class = class QuickLinkNav extends _react.default.Component {
  render() {
    const {
      options,
      dealsInfo,
      trackLeadFunnelClick
    } = this.props;
    const Link = this.props.ScrollLink;

    const onSetActive = targetId => {
      const activelink = document.querySelector('#' + targetId + '-triggerlink');

      if (activelink && activelink.scrollIntoView) {
        activelink.scrollIntoView({
          inline: "center"
        });
      }
    };

    return _react.default.createElement("div", {
      className: "quicklinksContainer flex spaceBetween sbcw overflowXscroll"
    }, _react.default.createElement("div", {
      className: "noBeforeAfter flex alignCenter"
    }, _react.default.createElement(GUl, {
      className: "flex flexFull alignCenter m0 p0"
    }, options && options.map((option, i) => _react.default.createElement("li", {
      key: i
    }, _react.default.createElement(Link, {
      activeClass: "active",
      className: "relative f14 fw7 pfc3 p15 block",
      id: option.section_name + '-triggerlink',
      onSetActive: onSetActive,
      to: option.section_name,
      spy: true,
      smooth: true,
      isDynamic: true,
      duration: 500,
      offset: -60
    }, option.title)))), options && options.length && dealsInfo.overview.toLowerCase() !== 'deals' ? _react.default.createElement("div", {
      className: "pr15 ml15"
    }, _react.default.createElement(_FormOneCTA.default, {
      clickHandler: trackLeadFunnelClick
    }, _react.default.createElement("div", {
      className: "relative f14 fw9 btn-pri-large pl15 pr15 ripple pt8 pb8 nowrap"
    }, "Get Quotes"))) : null));
  }

}, _class.propTypes = {
  options: _propTypes.default.array,
  ScrollLink: _propTypes.default.func,
  dealsInfo: _propTypes.default.object,
  trackLeadFunnelClick: _propTypes.default.func.isRequired
}, _class.defaultProps = {
  options: [],
  ScrollLink: () => {},
  dealsInfo: {}
}, _temp);
var _default = QuickLinkNav;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/SimilarPackages.js":
/*!**********************************************************!*\
  !*** ./app/components/PackageDetails/SimilarPackages.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

__webpack_require__(/*! ./SimilarPackages.scss */ "./app/components/PackageDetails/SimilarPackages.scss");

var _PackagePrice = _interopRequireDefault(__webpack_require__(/*! ../Listing/PackagePrice */ "./app/components/Listing/PackagePrice.js"));

var _PackageCities = _interopRequireDefault(__webpack_require__(/*! ../Listing/PackageCities */ "./app/components/Listing/PackageCities.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! ../Listing/PackageIncExc */ "./app/components/Listing/PackageIncExc.js"));

var _segmentEvents = __webpack_require__(/*! ../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _PackageCardExperiment = _interopRequireDefault(__webpack_require__(/*! ../Listing/PackageCardExperiment */ "./app/components/Listing/PackageCardExperiment.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let SimilarPackages = (_temp = _class = class SimilarPackages extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, e, index) => {
      (0, _segmentEvents.trackSegment)({
        event: event ? event : _segmentEvents.PACKAGE_CLICKED,
        category: `Destination:${e.destinations[0].name}`,
        section: 'Similar Packages',
        object: `Package/${e.id}`,
        cta: '',
        package_id: e.id,
        destination_list: e.destinations[0].name,
        destination_id: e.destinations[0].id,
        label: `Days:${e.days}::Index:${index + 1}`,
        value: e.price_total
      });
    };

    this.onSensorChange = (isVisible, e, idx) => {
      if (!this.sensorVisibility && isVisible) {
        this.setState({
          sensorVisibility: true
        });
        this.trackSegmentEvent(_segmentEvents.PACKAGE_VIEWED, e, idx);
      }
    };

    this.state = {
      sensorVisibility: false
    };
  }

  render() {
    if (this.props.loadingSimilarPackages || !this.props.loadedSimilarPackages && !this.props.loadingError) {
      return _react.default.createElement("div", {
        className: "row row- pt15 pb8 sbcw"
      }, _react.default.createElement("h2", {
        className: "heading-common-center pb15"
      }, "Similar Packages"), _react.default.createElement("div", {
        className: "row row- relative similar-package-box"
      }, _react.default.createElement("div", {
        className: "relative text-center pt24 pb24"
      }, _react.default.createElement("div", {
        className: "spinner"
      }, _react.default.createElement("div", {
        className: "bounce1"
      }), _react.default.createElement("div", {
        className: "bounce2"
      }), _react.default.createElement("div", {
        className: "bounce3"
      })), _react.default.createElement("p", {
        className: "text-center"
      }, "Loading..."))));
    }

    if (this.props.loadedSimilarPackages && this.props.similarPackages.length) {
      const swiperElements = this.props.similarPackages.map((e, idx) => {
        return _react.default.createElement("div", {
          key: e.id
        }, _react.default.createElement(_reactRouter.Link, {
          to: `/packages/${e.set_url}?id=${e.id}`,
          href: `/packages/${e.set_url}?id=${e.id}`,
          onClick: () => this.trackSegmentEvent(_segmentEvents.PACKAGE_CLICKED, e, idx)
        }, _react.default.createElement("div", {
          className: "similar-package-img box-with-layer relative"
        }, _react.default.createElement(_Img.default, {
          width: 316,
          height: 140,
          src: e.image_url,
          ikSrc: e.imagekit_url,
          alt: e.name
        }), _react.default.createElement("p", {
          className: "f16 fw9 sfcw b8 absolute l0 z2 pl8 pr8"
        }, e.destinations.length ? e.destinations[0].name : 'Kerala', ` (${e.days}D & ${e.nights}N) `))), _react.default.createElement(_reactVisibilitySensor.default, {
          onChange: isVisible => this.onSensorChange(isVisible, e, idx),
          intervalDelay: 3000
        }), _react.default.createElement("div", {
          className: "row row- relative p8 similar-package-box-data"
        }, _react.default.createElement(_PackagePrice.default, {
          priceUnit: e.mini_desc,
          price: e.price_total,
          discount: e.discount,
          currency: e.currency
        }), _react.default.createElement(_PackageCities.default, {
          cities: e.cities
        }), _react.default.createElement("div", {
          className: "row row- inclusion-height-box"
        }, _react.default.createElement(_PackageIncExc.default, {
          noScroll: true,
          inclusions: e.inclusions,
          id: `similar_packages_${e.id}`
        }))));
      });
      return _react.default.createElement("div", {
        className: "row row- p15 pl15 pr15 pb8 sbcw"
      }, _react.default.createElement("h2", {
        className: "heading-common-center"
      }, "Similar Packages"), _react.default.createElement("div", {
        className: "row row- relative similar-package-box"
      }, _react.default.createElement("div", {
        className: "swiper-full-width"
      }, _react.default.createElement(_Swiper.default, {
        slideClass: "slide",
        spaceBetween: 8,
        slidesPerView: "auto",
        ssrAnimation: {
          width: 276,
          height: 316
        }
      }, this.props.similarPackages.map((packageCard, id) => {
        return _react.default.createElement(_PackageCardExperiment.default, {
          heading: 'similar packages',
          card: packageCard,
          key: id,
          isPackageRevamp: true
        });
      })))));
    }

    return null;
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

/***/ "./app/components/PackageDetails/SimilarPackages.scss":
/*!************************************************************!*\
  !*** ./app/components/PackageDetails/SimilarPackages.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"similar-package-img": "_3swbb",
	"incl-excl-con-inner": "_1Cwlb",
	"inc-no-scroll": "_3wE_Q",
	"incl-excl-box": "_26WKO",
	"slide": "_22ArQ",
	"similar-package-box-data": "_2lVh0"
};

/***/ }),

/***/ "./app/components/PackageDetails/StarMonthFilter.js":
/*!**********************************************************!*\
  !*** ./app/components/PackageDetails/StarMonthFilter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GSelectDiv = _glamorous.default.div({
  height: '40px',
  border: '1px solid #ccc',
  borderRadius: '2px',
  '& .input-24': {
    width: '24px',
    height: '24px',
    zIndex: '1',
    '& svg': {
      width: '10px',
      height: '6px'
    }
  },
  '& select': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
    zIndex: '2',
    padding: '8px',
    paddingRight: '25px',
    appearance: 'none'
  }
});

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
    this._setMonth = this._setMonth.bind(this);
    this._setStarRating = this._setStarRating.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _setMonth(e) {
    this.setState({
      month: Number(e.target.value)
    }, () => this._handleSubmit());
  }

  _setStarRating(e) {
    const packageDetail = this.getSelectedStarDetail(e.target.value);
    this.trackSegmentEvent(_segmentEvents.HOTEL_CATEGORY_CLICKED, packageDetail[0].hotel_star, packageDetail[0].price);
    this.setState({
      package: e.target.value
    }, () => this._handleSubmit());
  }

  _handleSubmit() {
    if (this.state.package !== this.state.options.checked.package) {
      const month = this.state.month; // let month = this.props.selectedMonth;
      // if (month !== this.state.month) {
      //   month = this.state.month;
      // }

      this.props.pushState(`/packages/${this.props.packageDetails.set_url}?id=${this.state.package}&travelmonth=${this.props.selectedMonth}`);
    } else if (this.state.month !== this.props.packageDetails.selectedMonthNumber) {
      const {
        start_price,
        end_price,
        month_value,
        id
      } = this.state.options.month.filter(e => e.id === this.state.month)[0] || {};
      this.props.updateSelectedMonth(this.state.month);
      this.props.update({
        from: start_price,
        to: end_price,
        month: month_value,
        selectedMonthNumber: id
      });
    }
  }

  render() {
    const {
      packageDetails
    } = this.props;
    return _react.default.createElement("div", {
      className: "clearfix p15 sbcw bb"
    }, _react.default.createElement("div", {
      className: "col-xs-6 pl0 pr4"
    }, _react.default.createElement("p", {
      className: "f14 fw9 mb5"
    }, "Hotel Star Rating"), _react.default.createElement(GSelectDiv, {
      className: "relative"
    }, _react.default.createElement("select", {
      onChange: this._setStarRating,
      value: packageDetails.id
    }, this.state.options.package.length && this.sortStarOptions(this.state.options.package)), _react.default.createElement("span", {
      className: "input-24 flex alignCenter justifyCenter iblcok p8 absolute absolute-center-v r5"
    }, _react.default.createElement(_Icon.DownArrow, null)))), _react.default.createElement("div", {
      className: "col-xs-6 pl4 pr0"
    }, _react.default.createElement("p", {
      className: "f14 fw9 mb5"
    }, "Month of Travel"), _react.default.createElement(GSelectDiv, {
      className: "relative"
    }, _react.default.createElement("select", {
      onChange: this._setMonth,
      value: packageDetails.selectedMonthNumber
    }, this.state.options.month.length && this.sortMonthOptions(this.state.options.month)), _react.default.createElement("span", {
      className: "input-24 flex alignCenter justifyCenter iblcok p8 absolute absolute-center-v r5"
    }, _react.default.createElement(_Icon.DownArrow, null)))));
  }

}, _initialiseProps = function () {
  this.sortStarOptions = options => options.map(opt => _react.default.createElement("option", {
    key: opt.package_id,
    value: opt.package_id
  }, `Upto ${opt.hotel_star} star hotels`));

  this.getDestination = destinations => {
    return destinations.map(destination => destination.name).join('::');
  };

  this.trackSegmentEvent = (event, cta, value) => {
    const {
      packageDetails
    } = this.props;
    const toDestination = this.getDestination(packageDetails.destinations);
    (0, _segmentEvents.trackSegment)({
      event: event,
      category: `Destination:${packageDetails.destinations[0].name}`,
      section: 'Package List/View Details',
      object: `Package/${packageDetails.id}`,
      cta: cta ? `${cta} Star` : 'View Details & Customize',
      package_id: packageDetails.id,
      destination_list: toDestination,
      destination_id: packageDetails.destinations[0].id,
      label: `Days:${packageDetails.days}::Hotel:${packageDetails.max_hotel_category} Star`,
      value: value ? value : packageDetails.total_price,
      package_name: packageDetails.name
    });
  };

  this.sortMonthOptions = options => options.map(opt => _react.default.createElement("option", {
    key: opt.id,
    value: opt.id
  }, opt.month_value));

  this.getSelectedStarDetail = package_id => {
    return this.props.packageDetails && this.props.packageDetails.package_options && this.props.packageDetails.package_options.hotel_price_details && this.props.packageDetails.package_options.hotel_price_details.filter(hotel => hotel.package_id === parseInt(package_id));
  };
}, _temp);
StarMonthFilter.propTypes = {
  starRating: _propTypes.default.number,
  month: _propTypes.default.string,
  packageDetails: _propTypes.default.object.isRequired,
  update: _propTypes.default.func.isRequired,
  updateSelectedMonth: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  selectedMonth: _propTypes.default.number.isRequired
};
StarMonthFilter.defaultProps = {
  starRating: 3,
  month: 'May'
};
var _default = StarMonthFilter;
exports.default = _default;

/***/ }),

/***/ "./app/components/PackageDetails/WeekendPackageDetails.js":
/*!****************************************************************!*\
  !*** ./app/components/PackageDetails/WeekendPackageDetails.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';
let WeekendPackageDetails = class WeekendPackageDetails extends _react.default.Component {
  componentDidMount() {
    if (!window.location.search.match('pprod')) {
      window.location.search += '&pprod=f';
    }
  }

  render() {
    return _react.default.createElement("div", null);
  }

};
var _default = WeekendPackageDetails;
exports.default = _default;

/***/ }),

/***/ "./app/containers/PackageDetails/PackageDetailsAsync.js":
/*!**************************************************************!*\
  !*** ./app/containers/PackageDetails/PackageDetailsAsync.js ***!
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

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _PackageDetails = _interopRequireDefault(__webpack_require__(/*! components/PackageDetails/PackageDetails */ "./app/components/PackageDetails/PackageDetails.js"));

var _SimilarPackages = _interopRequireDefault(__webpack_require__(/*! components/PackageDetails/SimilarPackages */ "./app/components/PackageDetails/SimilarPackages.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! components/Footer/Footer */ "./app/components/Footer/Footer.js"));

var _Loader = _interopRequireDefault(__webpack_require__(/*! components/Generic/Loader */ "./app/components/Generic/Loader.js"));

var _InternalServerError = _interopRequireDefault(__webpack_require__(/*! components/Generic/InternalServerError */ "./app/components/Generic/InternalServerError.js"));

var _SeoFooter = _interopRequireDefault(__webpack_require__(/*! components/Common/SeoFooter */ "./app/components/Common/SeoFooter.js"));

var _WeekendPackageDetails = _interopRequireDefault(__webpack_require__(/*! components/PackageDetails/WeekendPackageDetails */ "./app/components/PackageDetails/WeekendPackageDetails.js"));

var _recent = _interopRequireDefault(__webpack_require__(/*! modules/packages/recent */ "./app-v2/modules/packages/recent/index.js"));

var _HowItWorks = _interopRequireDefault(__webpack_require__(/*! modules/howItWorks/HowItWorks */ "./app-v2/modules/howItWorks/HowItWorks.js"));

var _BreadcrumbListing = _interopRequireDefault(__webpack_require__(/*! components/Breadcrumb/BreadcrumbListing */ "./app/components/Breadcrumb/BreadcrumbListing.js"));

var _richText = _interopRequireDefault(__webpack_require__(/*! modules/richText */ "./app-v2/modules/richText/index.js"));

var _PackageDetailsFooter = _interopRequireDefault(__webpack_require__(/*! components/PackageDetails/PackageDetailsFooter */ "./app/components/PackageDetails/PackageDetailsFooter.js"));

var _seoHelpers = __webpack_require__(/*! helpers/seoHelpers */ "./app/helpers/seoHelpers.js");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _travelerReview = _interopRequireDefault(__webpack_require__(/*! modules/travelerReview */ "./app-v2/modules/travelerReview/index.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

__webpack_require__(/*! components/PackageDetails/PackageDetails.scss */ "./app/components/PackageDetails/PackageDetails.scss");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PackageDetailsAsync = (_temp = _class = class PackageDetailsAsync extends _react.Component {
  constructor(props) {
    super(props);

    this.getDestination = destinations => {
      return destinations.map(destination => destination.name).join('::');
    };

    this.getPackageType = () => {
      const {
        packageDetails
      } = this.props;
      let type = '';
      const heading = packageDetails.name.toLowerCase();

      if (heading.includes('tour')) {
        type = 'Tour';
      } else if (heading.includes('honeymoon') || heading.includes('couple') || heading.includes('romantic')) {
        type = 'Honeymoon';
      } else if (heading.includes('family')) {
        type = 'Family';
      }

      return type;
    };

    this.trackSegmentEvent = () => {
      (0, _utils.rescue)(() => {
        const {
          packageDetails
        } = this.props;
        const toDestination = this.getDestination(packageDetails.destinations);
        (0, _segmentEvents.trackSegment)({
          event: _segmentEvents.PDP_PAGE_VIEW,
          category: `Destination:${packageDetails.destinations[0].name}`,
          section: 'Package List/View Details',
          object: `Package/${packageDetails.id}`,
          package_id: packageDetails.name,
          destination_list: toDestination,
          destination_id: packageDetails.destinations.length && packageDetails.destinations[0].id,
          destination_type: this.getPackageType(),
          label: `Days:${packageDetails.days}::Hotel:${packageDetails.max_hotel_category} Star`,
          value: packageDetails.total_price,
          package_name: packageDetails.name,
          budget_package: packageDetails.budget_package,
          discounted_package: packageDetails.discounted_package
        });
      });
    };

    this.getPageUrl = () => {
      let link = this.props.location.pathname.split(/page\/\d+/).join('');

      if (link[link.length - 1] === '/') {
        link = link.substring(0, link.lastIndexOf('/'));
      }

      return `https://traveltriangle.com${link}`;
    };

    this.getPageFullName = this.getPageFullName.bind(this);
    this.renderHelmet = this.renderHelmet.bind(this);
    (0, _FormDataFormatter.setCookie)('cb_dt', '');
  }

  componentDidMount() {
    const {
      packageDetails
    } = this.props;

    if (!this.props.isLoaded || this.props.detailsResource.path !== this.props.params.packageName) {
      this.props.loadDetails(this.props.params.packageName, {
        params: this.props.location.query
      });
    }

    if (this.props.location.query.travelmonth) {
      this.props.updateSelectedMonth(this.props.location.query.travelmonth);
    } else {
      this.props.updateSelectedMonth((0, _DateTime.getCurrentMonth)() + 1);
    }

    if (packageDetails && packageDetails.destinations && packageDetails.destinations.length) {
      (0, _FormDataFormatter.setCookie)('cb_dt', packageDetails.destinations[0].name);
      (0, _utils.setVisitedDestinationsCookie)(packageDetails.destinations[0].name);
    }

    window.loadDeferImages && window.loadDeferImages();
    this.trackSegmentEvent();
  }

  componentDidUpdate(prevProps) {
    const {
      packageDetails: nextPackageDetails
    } = prevProps;
    const {
      packageDetails
    } = this.props;
    const destinationName = packageDetails && packageDetails.destinations && packageDetails.destinations.length && packageDetails.destinations[0].name;
    const nextDestinationName = nextPackageDetails && nextPackageDetails.destinations && nextPackageDetails.destinations.length && nextPackageDetails.destinations[0].name;

    if (nextDestinationName !== destinationName) {
      (0, _FormDataFormatter.setCookie)('cb_dt', (0, _parsers.capitalizeAndReplaceDash)(nextDestinationName));
      (0, _utils.setVisitedDestinationsCookie)((0, _parsers.capitalizeAndReplaceDash)(nextDestinationName));
    }

    window.loadDeferImages && window.loadDeferImages();
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
    const allowedAmpUrls = ['azerbaijan-5-days-tour', '7nights-8days-israel-tour-from-chennai', 'delhi-1n-2d-tour', 'chennai-1n-2d-tour', '7nights-8days-israel-tour-from-hyderabad'];
    const ampUrl = `${_appConfig.default.api_protocol}://${_appConfig.default.server.public.host}/packages/${set_url}/amp`;
    let isAmp = false;
    allowedAmpUrls.map(url => {
      if (url.toLowerCase() === set_url.toLowerCase()) {
        isAmp = true;
      }
    });
    return _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, (0, _seoHelpers.getTitle)(title, metaTagList)), _react.default.createElement("meta", {
      name: "theme-color",
      content: "#68c4c1"
    }), _react.default.createElement("meta", {
      property: "og:url",
      content: this.getPageUrl()
    }), _react.default.createElement("meta", {
      property: "og:site_name",
      content: "TravelTriangle.com"
    }), _react.default.createElement("meta", {
      charSet: "utf-8"
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
      content: `tt://${(0, _urlHelpers.getAppSchemeUrl)(location, 1)}`
    }), _react.default.createElement("meta", {
      property: "al:ios:url",
      content: `ttiosapp://applinks?al_applink_data=${(0, _urlHelpers.iosDeepLink)(`https://traveltriangle.com/${(0, _urlHelpers.getAppSchemeUrl)(location, 1, 'ios')}`)}`
    }), _react.default.createElement("meta", {
      property: "should_fallback",
      content: "false"
    }), _react.default.createElement("meta", {
      property: "fb:app_id",
      content: "168534953203541"
    }), _react.default.createElement("link", {
      rel: "canonical",
      href: `https://traveltriangle.com/packages/${set_url}`
    }), isAmp ? _react.default.createElement("link", {
      rel: "amphtml",
      href: ampUrl
    }) : null, (0, _seoHelpers.renderMetaTags)(metaTagList));
  }

  render() {
    const {
      location,
      isLoading,
      isLoaded,
      loadingError,
      isWeekendPackage,
      packageDetails,
      replaceState,
      detailsResource,
      faqs,
      trackLeadFunnelClick,
      updatePrice,
      pushState,
      updateSelectedMonth,
      fetchInlineGateways,
      params,
      footerLinks,
      experimentId
    } = this.props;
    const {
      similarPackages,
      breadcrumbs,
      backUrl
    } = this.props;
    const {
      rating,
      reviews,
      schemaAttributes
    } = packageDetails;
    const isRatingSchemaEnabled = schemaAttributes && schemaAttributes.star_rating && reviews;
    const TravelerReviewContainer = _travelerReview.default.container;

    if (!isLoading && !isLoaded && !loadingError) {
      return _react.default.createElement("div", null, _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_Loader.default, null));
    }

    if (isWeekendPackage) {
      return _react.default.createElement(_WeekendPackageDetails.default, null);
    }

    if (isLoading) {
      return _react.default.createElement("div", null, _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_Loader.default, null));
    }

    if (loadingError || !packageDetails) {
      return _react.default.createElement("div", null, _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_InternalServerError.default, null));
    }

    const title = packageDetails.name || 'Package Details';
    const packageId = packageDetails.id || undefined;
    const packageType = packageDetails.titles.overview.toLowerCase();
    const isDeal = packageType === 'deals';
    return _react.default.createElement("div", {
      className: "row row-"
    }, this.renderHelmet(title), _react.default.createElement("div", {
      vocab: isRatingSchemaEnabled ? "https://schema.org/" : null,
      "typeof": isRatingSchemaEnabled ? "Product" : null
    }, _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement(_HeaderTitle.default, {
      showShare: true,
      heading: packageDetails.heading,
      url: packageDetails.share_url,
      title: title,
      plpHeading: packageDetails.plp_heading || '',
      backUrl: location.action === 'POP' ? backUrl : '',
      isRatingSchemaEnabled: isRatingSchemaEnabled
    })), _react.default.createElement("div", {
      className: ` ${isDeal ? 'deal-package' : ''} package-detail-container-new-ui`
    }, _react.default.createElement(_PackageDetails.default, {
      faqs: faqs || [],
      packageDetails: packageDetails,
      resource: detailsResource,
      replaceState: replaceState,
      trackLeadFunnelClick: trackLeadFunnelClick,
      update: updatePrice,
      pushState: pushState,
      selectedMonth: packageDetails.selectedMonthNumber,
      updateSelectedMonth: updateSelectedMonth,
      fetchInlineGateways: fetchInlineGateways,
      params: params,
      location: location,
      title: title,
      backUrl: backUrl,
      detailsResource: detailsResource,
      footerLinks: footerLinks,
      experimentId: experimentId,
      isRatingSchemaEnabled: isRatingSchemaEnabled
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
    })) : null, _react.default.createElement("div", {
      className: "row row- pt8 sbc5 recent-packages-new-ui"
    }, _react.default.createElement(_recent.default, {
      currentPackageID: packageId,
      selectedMonth: packageDetails.selectedMonthNumber
    })), _react.default.createElement("div", {
      className: "row row- p8 pb0 sbc5"
    }, packageDetails.footer_section && packageDetails.footer_section.footer_above_text && _react.default.createElement(_PackageDetailsFooter.default, {
      footerSection: packageDetails.footer_section
    })), _react.default.createElement(_HowItWorks.default, null), breadcrumbs.length ? _react.default.createElement(_BreadcrumbListing.default, {
      breadcrumbs: breadcrumbs
    }) : null, _react.default.createElement(_richText.default, {
      richText: "",
      rating: rating,
      reviews: reviews,
      startingPrice: null,
      isRatingSchemaEnabled: isRatingSchemaEnabled
    }), packageDetails.footer_sections && packageDetails.footer_sections.length ? _react.default.createElement(_SeoFooter.default, {
      footerSections: packageDetails.footer_sections
    }) : null, _react.default.createElement("div", {
      className: "row row- pb64 sbc5"
    }, _react.default.createElement(_Footer.default, null))));
  }

}, _class.propTypes = {
  isLoaded: _propTypes.default.bool.isRequired,
  isLoading: _propTypes.default.bool.isRequired,
  loadingError: _propTypes.default.object,
  packageDetails: _propTypes.default.object,
  params: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  loadDetails: _propTypes.default.func.isRequired,
  detailsResource: _propTypes.default.object.isRequired,
  updatePrice: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  replaceState: _propTypes.default.func.isRequired,
  trackLeadFunnelClick: _propTypes.default.func,
  metaTags: _propTypes.default.array,
  isWeekendPackage: _propTypes.default.bool,
  updateSelectedMonth: _propTypes.default.func.isRequired,
  faqs: _propTypes.default.array.isRequired,
  similarPackages: _propTypes.default.array,
  breadcrumbs: _propTypes.default.array,
  backUrl: _propTypes.default.string,
  fetchInlineGateways: _propTypes.default.func.isRequired,
  footerLinks: _propTypes.default.array,
  experimentId: _propTypes.default.string
}, _class.defaultProps = {
  packageDetails: null,
  loadingError: {},
  trackLeadFunnelClick: () => {},
  metaTags: [],
  isWeekendPackage: false,
  similarPackages: [],
  breadcrumbs: [],
  experimentId: ''
}, _temp);
var _default = PackageDetailsAsync;
exports.default = _default;

/***/ }),

/***/ "./app/containers/PackageDetails/PackageDetailsWrapper.js":
/*!****************************************************************!*\
  !*** ./app/containers/PackageDetails/PackageDetailsWrapper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _PackageDetailsAsync = _interopRequireDefault(__webpack_require__(/*! ./PackageDetailsAsync */ "./app/containers/PackageDetails/PackageDetailsAsync.js"));

var _exitIntent = __webpack_require__(/*! helpers/exitIntent */ "./app/helpers/exitIntent.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PackageDetailsWrapper = (_temp = _class = class PackageDetailsWrapper extends _react.Component {
  static getRequiredDestination(destinations) {
    const places = ['singapore', 'goa', 'dubai', 'europe', 'rajasthan', 'himachal', 'thailand', 'hong kong'];
    const requiredPlaces = destinations.filter(dest => places.indexOf(dest.name.toLowerCase()) !== -1);
    return requiredPlaces.length;
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      id: "bg-mask-ei",
      className: "bg-mask-ei",
      onClick: e => (0, _exitIntent.hidePopup)(e)
    }), _react.default.createElement(_PackageDetailsAsync.default, this.props));
  }

}, _class.propTypes = {
  packageDetails: _propTypes.default.object
}, _temp);
var _default = PackageDetailsWrapper;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jb21tb24vSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jb21tb24vSGVhZGluZy5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvd0l0V29ya3MvSG93SXRXb3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wYWNrYWdlcy9yZWNlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0dlbmVyaWMvSW50ZXJuYWxTZXJ2ZXJFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9HZW5lcmljL0ludGVybmFsU2VydmVyRXJyb3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9JdGluZXJhcnkvSXRpbmVyYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSXRpbmVyYXJ5L0l0aW5lcmFyeVRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlRGF5c0Rpc2NvdW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZVByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL0RheXNJdGluZXJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSGlnaGxpZ2h0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9IaWdobGlnaHRzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSG90ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSG90ZWxDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL0hvdGVsRmxpZ2h0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL0luY0V4Y2x1c2lvbi9FeGNsdXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSW5jRXhjbHVzaW9uL0hvdGVsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSW5jRXhjbHVzaW9uL0hvdGVsQ2FyZC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL0luY0V4Y2x1c2lvbi9JbmNFeGNsdXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSW5jRXhjbHVzaW9uL0luY0V4Y2x1c2lvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL0luY0V4Y2x1c2lvbi9JbmNsdXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSW5jRXhjbHVzaW9uL0luY2x1c2lvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL0luY0V4Y2x1c2lvbi9Ob0hvdGVsSW5jbHVkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSW5saW5lR2F0ZXdheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9JdGluZXJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSXRpbmVyYXJ5SW1hZ2VzUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvSXRpbmVyYXJ5UGljdHVyZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlQ2l0aWVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL1BhY2thZ2VEYXlzRGlzY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvUGFja2FnZURldGFpbERheUl0aW5lcmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvUGFja2FnZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvUGFja2FnZURldGFpbHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlRGV0YWlsc0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlRGV0YWlsc1ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL1BhY2thZ2VQcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlU2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL1BhY2thZ2VTbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9RdWlja0xpbmtOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvU2ltaWxhclBhY2thZ2VzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL1NpbWlsYXJQYWNrYWdlcy5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL1N0YXJNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9XZWVrZW5kUGFja2FnZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvUGFja2FnZURldGFpbHMvUGFja2FnZURldGFpbHNBc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlRGV0YWlsc1dyYXBwZXIuanMiXSwibmFtZXMiOlsiSGVhZGluZyIsImRhdGEiLCJ0eXBlIiwic2hvd1ZpZXdBbGwiLCJoZWFkaW5nIiwic3ViSGVhZGluZyIsInVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJjYXJkIiwiaXRlbXMiLCJpY29uIiwidGl0bGUiLCJwYXJhZ3JhcGgiLCJIb3dJdFdvcmtzIiwiUHVyZUNvbXBvbmVudCIsInJlbmRlciIsInN0eWxlcyIsInRpbGVzIiwibWFwIiwiaXRlbSIsImkiLCJJY29uQ29tcG9uZW50IiwiSWNvbnMiLCJ3b3Jrc0JveCIsIlJFQ0VOVF9QQUNLQUdFX0NPT0tJRV9LRVkiLCJSZWNlbnRQYWNrYWdlcyIsInN0YXRlIiwiaXNSZWNlbnRQYWNrYWdlc1ByZXNlbnQiLCJyZWNlbnRQYWNrYWdlcyIsImxvYWRSZWNlbnRQYWNrYWdlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNldFJlY2VudFBhY2thZ2VzSUQiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJjdXJyZW50UGFja2FnZUlEIiwicGFja2FnZUlkIiwiY29va2llcyIsImdldCIsInNwbGl0IiwiaW5kZXhPZiIsImZpbHRlciIsImlkIiwicHVzaCIsImpvaW4iLCJzZXQiLCJzZXRTdGF0ZSIsInNlb19wYWNrYWdlX2lkIiwicmVjZW50bHlfdmlld2VkX3BhY2thZ2VzIiwidHJhdmVsX21vbnRoIiwic2VsZWN0ZWRNb250aCIsInNwYWNpbmdDc3MiLCJhdHRyaWJ1dGVzIiwicGFja2FnZXNMaXN0IiwibGVuZ3RoIiwid2lkdGgiLCJoZWlnaHQiLCJwYWNrYWdlRGF0YSIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm51bWJlciIsImZ1bmMiLCJDb29raWVzIiwiQ2xvc2VJdCIsImdsYW1vcm91cyIsImJ1dHRvbiIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJwYWRkaW5nIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJDbG9zZUl0TGVmdCIsImxlZnQiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwiYm90dG9tIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJ0cmFuc2Zvcm0iLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiY3VzdG9tU3R5bGVzRnVsbFZpZXciLCJwYWRkaW5nVG9wIiwiTW9kYWxDb21wb25lbnQiLCJpc09wZW4iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiYWZ0ZXJPcGVuTW9kYWwiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImN1c3RvbUNsb3NlVHJpZ2dlciIsIm9uUmVxdWVzdENsb3NlQ3VzdG9tIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvbkFmdGVyTW9kYWxPcGVuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJmdWxsVmlldyIsImhhc0N1c3RvbUNsb3NlIiwiaGFzTm9DbG9zZSIsImlzV2hpdGVJY29uIiwiaXNUcmlnZ2VyRnVsbFZpZXciLCJjdXN0b21DbGFzcyIsInRyaWdnZXIiLCJjaGlsZHJlbiIsIm5vZGUiLCJMb3ZlSWNvbkNvbiIsInNwYW4iLCJtYXJnaW4iLCJkaXNwbGF5IiwiTWFkZVdpdGgiLCJkaXYiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInZlcnRpY2FsQWxpZ24iLCJGb290ZXIiLCJpc0hvbWVQYWdlIiwiSW50ZXJuYWxTZXJ2ZXJFcnJvciIsIkl0aW5lcmFyeVRhZ3MiLCJsaXN0IiwiaXRpbmVyYXJ5SWQiLCJ0YWdJZCIsImNhdGVnb3J5RWxlbWVudHMiLCJ2YWx1ZSIsImtleSIsIlBhY2thZ2VEYXlzRGlzY291bnQiLCJpc1Rvb2x0aXBWaXNpYmxlIiwidG9nZ2xlVG9vbHRpcCIsInNldFRpbWVvdXQiLCJkYXlzIiwibmlnaHRzIiwicHJpY2UiLCJkaXNjb3VudCIsIlBhY2thZ2VQcmljZSIsInByaWNlVW5pdCIsImN1cnJlbmN5IiwicHJpY2VGcm9tIiwicHJpY2VUbyIsImRlYWxzSW5mbyIsIkRheXNJdGluZXJhcnkiLCJkYXkiLCJuZXh0TGluayIsInByZXZMaW5rIiwic2V0SXRpbmVyYXJ5RGF5IiwiSGlnaGxpZ2h0cyIsImwiLCJ0ZXh0IiwiSG90ZWwiLCJob3RlbEVsZW1lbnRzIiwiaCIsInBpY3R1cmVzIiwiaW5kZXgiLCJpbWFnZXMiLCJpbWFnZVVybCIsInBpY3R1cmVfZGV0YWlscyIsInBpY3R1cmUiLCJpbWFnZWtpdFVybCIsImltYWdla2l0X3VybCIsIm5hbWUiLCJoZWFkZXIiLCJIb3RlbENhcmQiLCJkZXRhaWxzIiwicmF0aW5nIiwiYWRkcmVzcyIsImZhY2lsaXRpZXMiLCJzaGFwZSIsIkhvdGVsRmxpZ2h0IiwiaG90ZWxzIiwiZmxpZ2h0cyIsImhvdGVsVGl0bGUiLCJpbmNsdXNpb25zIiwidHJhY2tTZWdtZW50Iiwib25DaGFuZ2VIYW5kbGVyIiwiUEFDS0FHRV9JTlRFUkFDVEVEIiwiYXZhaWxhYmxlSW5jbHVzaW9ucyIsImF2YWlsYWJsZSIsIkV4Y2x1c2lvbiIsImVsZW1lbnRzIiwiSW5jRXhjbHVzaW9uIiwiZXhjbHVzaW9ucyIsIkluY2x1c2lvbiIsIk5vSG90ZWxJbmNsdWRlZCIsIklubGluZUdhdGV3YXkiLCJkZXN0aW5hdGlvbiIsInRyaXBfdHlwZSIsInBhY2thZ2VfZmlsdGVycyIsImNyZWF0ZVBhdGgiLCJwYXJhbU5hbWUiLCJyZW5kZXJMaXN0IiwiZmlsdGVycyIsImxpc3RJdGVtIiwicGFyYW1fbmFtZSIsIkRvd25TaWRlQXJyb3ciLCJtYXJnaW5MZWZ0IiwiSHRtbFRvUmVhY3RQYXJzZXIiLCJyZXF1aXJlIiwiUGFyc2VyIiwiaHRtbFRvUmVhY3RQYXJzZXIiLCJkYXlEZXRhaWxFbGVtZW50cyIsImRheURldGFpbHMiLCJzbGljZSIsInBhcnNlIiwicmVuZGVySXRpbmVyYXJ5RWxlbWVudHMiLCJpdGluZXJhcnkiLCJyZXNvdXJjZSIsInJlcGxhY2VTdGF0ZSIsInNwYWNlSW5kZXgiLCJzdWJzdHIiLCJsYWJlbHMiLCJBcnJheSIsImlzQXJyYXkiLCJkYXlfZGV0YWlsIiwiSXRpbmVyYXJ5IiwidGl0bGVIZWFkIiwiSXRpbmVyYXJ5UG9wdXAiLCJlIiwib3BlbkltYWdlc1BvcHVwIiwiY2FwdGlvbiIsIkl0aW5lcmFyeVBpY3R1cmVTbGlkZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zZVBvcHVwIiwicmVuZGVyUGFja2FnZUNpdGllc0Zyb21BcnJheSIsImNpdGllcyIsImlzRGVhbHNDYXJkIiwiY2l0eSIsInJlbmRlclBhY2thZ2VDaXRpZXNGcm9tT2JqZWN0IiwiY2l0aWVzV2l0aERheXMiLCJPYmplY3QiLCJrZXlzIiwiUGFja2FnZUNpdGllcyIsIm9uZU9mVHlwZSIsImhpZGVEaXNjb3VudCIsIlBhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnkiLCJwYWNrYWdlRGV0YWlscyIsInNob3dTZWN0aW9uIiwiaG9tZUxpbmsiLCJwYXRoIiwiY292ZXJzIiwiY2F0ZWdvcmllcyIsImRlc2NyaXB0aW9uIiwicGFyc2VyIiwic2Nyb2xsTGluayIsIlNjcm9sbCIsIkxpbmsiLCJFbGVtZW50IiwiRXZlbnRzIiwic2Nyb2xsU3B5IiwiY3JlYXRlSGVhZGVyQ29uc3RhbnRzIiwiZmFxcyIsImhlYWRlckNvbnN0YW50cyIsIm92ZXJ2aWV3Iiwic2VjdGlvbl9uYW1lIiwiaW5jRXhjIiwiZGVzdGluYXRpb25zIiwiR1Njcm9sbEVsZW1lbnRDb250YWluZXIiLCJib3hTaGFkb3ciLCJPdmVydmlldyIsInBscEhlYWRpbmciLCJpc1JhdGluZ1NjaGVtYUVuYWJsZWQiLCJvdmVydmlld0NvbnRlbnQiLCJvdmVydmlld1NwbGl0Iiwic3RhclRvSWQiLCJQYWNrYWdlRGV0YWlscyIsImFuaW1hdGlvblByaWNlIiwiaXRpbmVyYXJ5RGF5VmFsdWUiLCJ1cGRhdGVQcmljZUNhbGxCYWNrIiwic2Nyb2xsRXZlbnQiLCJyZWdpc3RlciIsInVwZGF0ZSIsImxhbmRpbmdfdXVpZCIsIkxBTkRJTkdfVVVJRF9DT09LSUVfS0VZIiwicGFnZV91dWlkIiwiUEFHRV9VVUlEX0NPT0tJRV9LRVkiLCJmZXRjaElubGluZUdhdGV3YXlzIiwicGFyYW1zIiwicGFja2FnZU5hbWUiLCJsb2NhdGlvbiIsInF1ZXJ5IiwiZ2V0RXhwUHJpY2UiLCJwa2ciLCJ0b3RhbF9wcmljZSIsImRpc2NvdW50ZWRfcHJpY2UiLCJtb250aF9vcHRpb25zIiwibW9udGhfcmFuZ2VzIiwiZnJvbSIsInRvIiwicHJpY2VUb3RhbCIsImRpc2NvdW50ZWRQcmljZSIsIm1vbnRoX3Jhbmdlc19uZXciLCJtb250aCIsInN0YXJ0X3ByaWNlIiwiZW5kX3ByaWNlIiwic2VsZWN0ZWRNb250aE51bWJlciIsImN1cnJlbnRNb250aCIsIm9sZF9tb250aF9yYW5nZXMiLCJ0b3RhbCIsImdldEV4cERhdGEiLCJleHBlcmltZW50SWQiLCJwYWNrYWdlRGV0YWlsIiwidHJhY2tMZWFkRnVubmVsQ2xpY2siLCJiYWNrVXJsIiwiZGV0YWlsc1Jlc291cmNlIiwiZm9vdGVyTGlua3MiLCJhY3RpdmVEZXRhaWxzIiwib3B0aW9uc0V4aXN0cyIsInBhY2thZ2Vfb3B0aW9ucyIsImhvdGVsX3ByaWNlX2RldGFpbHMiLCJzdGFyUmF0aW5nIiwiaXNfY2hlY2tlZCIsImhvdGVsX3N0YXIiLCJzZWxlY3RlZE1vbnRocyIsIm1vbnRoX3ZhbHVlIiwiZGlzcGxheVJhbmdlIiwiZmluZCIsIkRhdGUiLCJnZXRNb250aCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJ0b0Rlc3RpbmF0aW9uIiwiaW5saW5lR2F0ZXdheSIsImFkZGl0aW9uYWxJbmZvVGV4dCIsInNldF91cmwiLCJjdGFUZXh0IiwicGFja2FnZVR5cGUiLCJ0aXRsZXMiLCJ0b0xvd2VyQ2FzZSIsImlzRGVhbCIsImlzTHV4dXJ5IiwidHJhY2tMZWFkRnVubmVsIiwic2VjdGlvbiIsImNhdGVnb3J5IiwiZnVubmVsU3RlcCIsImN0YSIsImRlc3RpbmF0aW9uSUQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImV2ZW50IiwibGFiZWwiLCJkZXN0aW5hdGlvbl9pZCIsInBhY2thZ2VfaWQiLCJleGl0RGl2Iiwic2hvd1BvcFVwIiwiZGVhbG5MdXh1cnkiLCJpc0ZsaWdodCIsImluYyIsInNsaWRlcl9waWMiLCJwdXNoU3RhdGUiLCJ1cGRhdGVTZWxlY3RlZE1vbnRoIiwicGxwX2hlYWRpbmciLCJoaWdobGlnaHRzIiwiaW5jbHVzaW9uX3RleHQiLCJleGNsdXNpb25fdGV4dCIsImdldFBhY2thZ2VEYXRhIiwidG9fbG9jIiwidHJpcF9kYXlzIiwidG9TdHJpbmciLCJhZGR0bF9pbmZvIiwicGFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW5kZXJGb290ZXJBYm92ZVRleHQiLCJmb290ZXJTZWN0aW9uIiwiZm9vdGVyQWJvdmVUZXh0IiwiZm9vdGVyX2Fib3ZlX3RleHQiLCJyZXBsYWNlIiwibSIsIlBhY2thZ2VEZXRhaWxzRm9vdGVyIiwiUGFja2FnZURldGFpbHNQcmljZSIsImhvdGVsUmF0aW5ncyIsImhvdGVsIiwic29ydCIsImEiLCJiIiwiZmlsdGVyZWRIb3RlbFJhdGluZ3MiLCJyZWR1Y2UiLCJ1bmlxdWUiLCJpbmNsdWRlcyIsImNpdHlfbGlzdF93aXRoX2RheXMiLCJtaW5pRGVzYyIsIkdEaXNjb3VudERpdiIsIkdIaWdobGlnaHRCYW5uZXJEaXYiLCJHTHV4dXJ5RGl2IiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImRpc2NvdW50UGVyY2VudGFnZSIsInByaWNlRGlzY291bnQiLCJQYWNrYWdlU2xpZGVyIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInByZWxvYWRJbWFnZXMiLCJsYXp5Iiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsImZhcSIsImVsIiwiY2xpY2thYmxlIiwicyIsIk1hdGgiLCJyb3VuZCIsIkdVbCIsInVsIiwibGlzdFN0eWxlIiwid2hpdGVTcGFjZSIsIlF1aWNrTGlua05hdiIsIm9wdGlvbnMiLCJTY3JvbGxMaW5rIiwib25TZXRBY3RpdmUiLCJ0YXJnZXRJZCIsImFjdGl2ZWxpbmsiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJpbmxpbmUiLCJvcHRpb24iLCJTaW1pbGFyUGFja2FnZXMiLCJQQUNLQUdFX0NMSUNLRUQiLCJkZXN0aW5hdGlvbl9saXN0IiwicHJpY2VfdG90YWwiLCJvblNlbnNvckNoYW5nZSIsImlzVmlzaWJsZSIsImlkeCIsInNlbnNvclZpc2liaWxpdHkiLCJQQUNLQUdFX1ZJRVdFRCIsImxvYWRpbmdTaW1pbGFyUGFja2FnZXMiLCJsb2FkZWRTaW1pbGFyUGFja2FnZXMiLCJsb2FkaW5nRXJyb3IiLCJzaW1pbGFyUGFja2FnZXMiLCJzd2lwZXJFbGVtZW50cyIsImltYWdlX3VybCIsIm1pbmlfZGVzYyIsInBhY2thZ2VDYXJkIiwiR1NlbGVjdERpdiIsImJvcmRlciIsInBhZGRpbmdSaWdodCIsImFwcGVhcmFuY2UiLCJTdGFyTW9udGhGaWx0ZXIiLCJwYWNrYWdlIiwiY2hlY2tlZCIsIl9zZXRNb250aCIsIl9zZXRTdGFyUmF0aW5nIiwiX2hhbmRsZVN1Ym1pdCIsIk51bWJlciIsInRhcmdldCIsImdldFNlbGVjdGVkU3RhckRldGFpbCIsIkhPVEVMX0NBVEVHT1JZX0NMSUNLRUQiLCJzb3J0U3Rhck9wdGlvbnMiLCJzb3J0TW9udGhPcHRpb25zIiwib3B0IiwiZ2V0RGVzdGluYXRpb24iLCJtYXhfaG90ZWxfY2F0ZWdvcnkiLCJwYWNrYWdlX25hbWUiLCJwYXJzZUludCIsIldlZWtlbmRQYWNrYWdlRGV0YWlscyIsIndpbmRvdyIsInNlYXJjaCIsIm1hdGNoIiwiUGFja2FnZURldGFpbHNBc3luYyIsImdldFBhY2thZ2VUeXBlIiwiUERQX1BBR0VfVklFVyIsImRlc3RpbmF0aW9uX3R5cGUiLCJidWRnZXRfcGFja2FnZSIsImRpc2NvdW50ZWRfcGFja2FnZSIsImdldFBhZ2VVcmwiLCJsaW5rIiwicGF0aG5hbWUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImdldFBhZ2VGdWxsTmFtZSIsInJlbmRlckhlbG1ldCIsImlzTG9hZGVkIiwibG9hZERldGFpbHMiLCJ0cmF2ZWxtb250aCIsImxvYWREZWZlckltYWdlcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIm5leHRQYWNrYWdlRGV0YWlscyIsImRlc3RpbmF0aW9uTmFtZSIsIm5leHREZXN0aW5hdGlvbk5hbWUiLCJzZXRVcmwiLCJtZXRhVGFncyIsIm1ldGFUYWdMaXN0IiwiYWxsb3dlZEFtcFVybHMiLCJhbXBVcmwiLCJhcHBDb25maWciLCJhcGlfcHJvdG9jb2wiLCJzZXJ2ZXIiLCJwdWJsaWMiLCJob3N0IiwiaXNBbXAiLCJpc0xvYWRpbmciLCJpc1dlZWtlbmRQYWNrYWdlIiwidXBkYXRlUHJpY2UiLCJicmVhZGNydW1icyIsInJldmlld3MiLCJzY2hlbWFBdHRyaWJ1dGVzIiwic3Rhcl9yYXRpbmciLCJUcmF2ZWxlclJldmlld0NvbnRhaW5lciIsIlRyYXZlbGVyUmV2aWV3IiwiY29udGFpbmVyIiwic2hhcmVfdXJsIiwiYWN0aW9uIiwiZm9vdGVyX3NlY3Rpb24iLCJmb290ZXJfc2VjdGlvbnMiLCJQYWNrYWdlRGV0YWlsc1dyYXBwZXIiLCJnZXRSZXF1aXJlZERl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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCAnLi9IZWFkaW5nLnNjc3MnO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgZGF0YSwgdHlwZSwgc2hvd1ZpZXdBbGwgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iMTUgcmVsYXRpdmVcIj5cbiAgICB7XG4gICAgICAoZGF0YS5oZWFkaW5nICYmIGRhdGEuc3ViSGVhZGluZykgP1xuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3ZnVsbCBibG9ja1wiPlxuICAgICAgICB7XG4gICAgICAgICAgdHlwZT09J21haW4taGVhZGluZycgP1xuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW5IZWFkaW5nIGVsbGlwc2lzIGYxNiBtMCBtYjggcGZjMVwiPntkYXRhLmhlYWRpbmd9PC9oMj5cbiAgICAgICAgICAgIDogPGgyIGNsYXNzTmFtZT1cIm1haW5IZWFkaW5nIGVsbGlwc2lzIGYxNiBtMCBtYjggcGZjM1wiPntkYXRhLmhlYWRpbmd9PC9oMj5cbiAgICAgICAgfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIGYxNCBwZmM0XCI+e2RhdGEuc3ViSGVhZGluZ308L3A+XG4gICAgICA8L3NwYW4+XG4gICAgICAgIDogPGgyIGNsYXNzTmFtZT1cIm1haW5IZWFkaW5nIGVsbGlwc2lzIGYxNiBtMCBwZmMxXCI+e2RhdGEuaGVhZGluZ308L2gyPlxuICAgIH1cbiAgICB7XG4gICAgICBzaG93Vmlld0FsbCA/XG4gICAgICAgIDxMaW5rIHRvPXtkYXRhLnVybH0gY2xhc3NOYW1lPVwiZjEyIGFic29sdXRlIHIwIHQ0XCI+VmlldyBBbGw8L0xpbms+XG4gICAgICAgIDogbnVsbFxuICAgIH1cbiAgPC9kaXY+XG4pO1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd1ZpZXdBbGw6IFByb3BUeXBlcy5ib29sLFxufTtcblxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHtcbiAgICBoZWFkaW5nOiAnJyxcbiAgICBzdWJIZWFkaW5nOiAnJyxcbiAgICB1cmw6ICcjJyxcbiAgfSxcbiAgdHlwZTogJycsXG4gIHNob3dWaWV3QWxsOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5IZWFkaW5nXCI6IFwiX21vMXg3XCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob3dpdHdvcmtzLmNtLnNjc3MnO1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBjYXJkID0ge1xuICBoZWFkaW5nOiAnSG93IGl0IFdvcmtzJyxcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnUGRwU2VsZWN0UGFja2FnZScsXG4gICAgICB0aXRsZTogJ1BlcnNvbmFsaXNlIFRoaXMgUGFja2FnZScsXG4gICAgICBwYXJhZ3JhcGg6ICdNYWtlIGNoYW5nZXMgYXMgcGVyIHlvdXIgdHJhdmVsIHBsYW4gJiBzdWJtaXQgdGhlIHJlcXVlc3QuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdQZHBRdW90ZXMnLFxuICAgICAgdGl0bGU6ICdHZXQgTXVsdGlwbGUgUXVvdGVzJyxcbiAgICAgIHBhcmFncmFwaDogJ0Nvbm5lY3Qgd2l0aCB0b3AgMyBhZ2VudHMsIGNvbXBhcmUgcXVvdGVzICYgY3VzdG9taXplIGZ1cnRoZXIuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdJbGx1c1RyYXZlbGVyJyxcbiAgICAgIHRpdGxlOiAnQm9vayBUaGUgQmVzdCBEZWFsJyxcbiAgICAgIHBhcmFncmFwaDogJ1BheSBpbiBlYXN5IGluc3RhbGxtZW50cyAmIGdldCByZWFkeSB0byBlbmpveSB5b3VyIGhvbGlkYXkuJyxcbiAgICB9LFxuICBdXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvd0l0V29ya3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMCBzYmN3XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTYgZnc5IHAxNSBwZmM1IGJiXCI+e2NhcmQuaGVhZGluZ308L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC14cy0xMiBwMCAke3N0eWxlcy50aWxlc31gfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXJkLml0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBJY29uQ29tcG9uZW50ID0gSWNvbnNbaXRlbS5pY29uXTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC14cy0xMiBmbGV4IGFsaWduQ2VudGVyIHBsMTUgcHIxNSBwdDI0IHBiMjQgJHtzdHlsZXMud29ya3NCb3h9YH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeUNlbnRlclwiPjxJY29uQ29tcG9uZW50IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbDI0IGRhcmstZm9udFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZjE0IGZ3OSBwYjhcIj57aXRlbS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTJcIj57aXRlbS5wYXJhZ3JhcGh9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUHJvcFR5cGVzLCBpbnN0YW5jZU9mIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlcic7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdtb2R1bGVzL2NvbW1vbi9IZWFkaW5nJztcbmltcG9ydCB7IHdpdGhDb29raWVzLCBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7XG4gIGxvYWRSZWNlbnRQYWNrYWdlcyxcbiAgaXNSZWNlbnRQYWNrYWdlc1ByZXNlbnQsXG4gIGdldFJlY2VudFBhY2thZ2VzXG59IGZyb20gJy4vcmVjZW50UGFja2FnZXMnO1xuaW1wb3J0IFBhY2thZ2VDYXJkRXhwZXJpbWVudCBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZUNhcmRFeHBlcmltZW50JztcblxuY29uc3QgUkVDRU5UX1BBQ0tBR0VfQ09PS0lFX0tFWSA9ICdydnBfaWRzX213ZWInO1xuXG5AY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBpc1JlY2VudFBhY2thZ2VzUHJlc2VudDogaXNSZWNlbnRQYWNrYWdlc1ByZXNlbnQoc3RhdGUpLFxuICAgIHJlY2VudFBhY2thZ2VzOiBnZXRSZWNlbnRQYWNrYWdlcyhzdGF0ZSlcbiAgfSksXG4gIHtcbiAgICBsb2FkUmVjZW50UGFja2FnZXNcbiAgfVxuKVxuXG5jbGFzcyBSZWNlbnRQYWNrYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaXNSZWNlbnRQYWNrYWdlc1ByZXNlbnQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgcmVjZW50UGFja2FnZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbnRQYWNrYWdlSUQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBsb2FkUmVjZW50UGFja2FnZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY29va2llczogaW5zdGFuY2VPZihDb29raWVzKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkTW9udGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3BhY2luZ0NzczogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJlY2VudFBhY2thZ2VzOiBbXSxcbiAgICBsb2FkUmVjZW50UGFja2FnZXM6ICgpID0+IHtcbiAgICB9LFxuICAgIGlzUmVjZW50UGFja2FnZXNQcmVzZW50OiBmYWxzZSxcbiAgICBzcGFjaW5nQ3NzOiB7fVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZWNlbnRQYWNrYWdlczogJydcbiAgICB9O1xuICAgIHRoaXMuc2V0UmVjZW50UGFja2FnZXNJRCA9IHRoaXMuc2V0UmVjZW50UGFja2FnZXNJRC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRSZWNlbnRQYWNrYWdlc0lEKHRoaXMucHJvcHMuY3VycmVudFBhY2thZ2VJRCk7XG4gIH1cblxuICBzZXRSZWNlbnRQYWNrYWdlc0lEKHBhY2thZ2VJZCkge1xuICAgIGNvbnN0IHsgY29va2llcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgcmVjZW50UGFja2FnZXMgPSBjb29raWVzICYmIGNvb2tpZXMuZ2V0KFJFQ0VOVF9QQUNLQUdFX0NPT0tJRV9LRVkpO1xuICAgIGlmICh0eXBlb2YgcmVjZW50UGFja2FnZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWNlbnRQYWNrYWdlcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlbnRQYWNrYWdlcyA9IHJlY2VudFBhY2thZ2VzLnNwbGl0KCcsJyk7XG4gICAgfVxuICAgIGlmIChyZWNlbnRQYWNrYWdlcy5pbmRleE9mKHBhY2thZ2VJZCkgIT09IC0xKSB7XG4gICAgICByZWNlbnRQYWNrYWdlcyA9IHJlY2VudFBhY2thZ2VzLmZpbHRlcihpZCA9PiBpZCAhPT0gcGFja2FnZUlkKTtcbiAgICB9XG4gICAgcmVjZW50UGFja2FnZXMucHVzaChwYWNrYWdlSWQpO1xuICAgIHJlY2VudFBhY2thZ2VzID0gcmVjZW50UGFja2FnZXMuam9pbignLCcpO1xuICAgIGlmICh0eXBlb2YgY29va2llcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvb2tpZXMuc2V0KFJFQ0VOVF9QQUNLQUdFX0NPT0tJRV9LRVksIHJlY2VudFBhY2thZ2VzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZWNlbnRQYWNrYWdlc1xuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubG9hZFJlY2VudFBhY2thZ2VzKHtcbiAgICAgICAgc2VvX3BhY2thZ2VfaWQ6IHRoaXMucHJvcHMuY3VycmVudFBhY2thZ2VJRCxcbiAgICAgICAgcmVjZW50bHlfdmlld2VkX3BhY2thZ2VzOiB0aGlzLnN0YXRlLnJlY2VudFBhY2thZ2VzLFxuICAgICAgICB0cmF2ZWxfbW9udGg6IHRoaXMucHJvcHMuc2VsZWN0ZWRNb250aFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzUmVjZW50UGFja2FnZXNQcmVzZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeyByZWNlbnRQYWNrYWdlcywgc3BhY2luZ0NzcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBoZWFkaW5nID0gJ1JlY2VudCBQYWNrYWdlcyc7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgICAgIGhlYWRpbmcsXG4gICAgICBwYWNrYWdlc0xpc3Q6IHJlY2VudFBhY2thZ2VzXG4gICAgfTtcbiAgICByZXR1cm4gcmVjZW50UGFja2FnZXMubGVuZ3RoID4gMCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IG04IG10MCBzYmN3IGF0X3JlY2VudHBhY2thZ2VzIHJlY2VudC1wYWNrYWdlcy1jb250YWluZXJcIiBzdHlsZT17c3BhY2luZ0Nzc30+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgZGF0YT17e1xuICAgICAgICAgICAgaGVhZGluZzogXCJSZWNlbnQgUGFja2FnZXNcIixcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6XG4gICAgICAgICAgICAgIFwiVW5saW1pdGVkIENob2ljZXMuIFRydXN0ZWQgQWdlbnRzLiBCZXN0IFByaWNlcy4gSGFwcHkgTWVtb3JpZXMuXCJcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1mdWxsLXdpZHRoXCI+XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICBpZD1cInBhY2thZ2VzU2xpZGVyXCJcbiAgICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTV9XG4gICAgICAgICAgc2xpZGVzUGVyVmlldz1cImF1dG9cIlxuICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMzEwLCBoZWlnaHQ6IDM1NSB9fVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVjZW50UGFja2FnZXMgJiYgcmVjZW50UGFja2FnZXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgcmVjZW50UGFja2FnZXMubWFwKChwYWNrYWdlRGF0YSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxQYWNrYWdlQ2FyZEV4cGVyaW1lbnQgaGVhZGluZz17J3JlY2VudCBwYWNrYWdlcyd9IGNhcmQ9e3BhY2thZ2VEYXRhfSBpc1BhY2thZ2VSZXZhbXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSkgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29va2llcyhSZWNlbnRQYWNrYWdlcyk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBDbG9zZURhcmssIENsb3NlV2hpdGV9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgQ2xvc2VJdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICc1cHgnLFxuICB0b3A6ICcwcHgnLFxuICB3aWR0aDogJzM2cHgnLFxuICBoZWlnaHQ6ICczNnB4JyxcbiAgcGFkZGluZzogJzEycHgnLFxuICB6SW5kZXg6ICcyJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxufSk7XG5cbmNvbnN0IENsb3NlSXRMZWZ0ID0gZ2xhbW9yb3VzLmJ1dHRvbih7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBsZWZ0OiAnNXB4JyxcbiAgdG9wOiAnM3B4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnNicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICc5NCUnLFxuICAgIG1heFdpZHRoOiAnNjAwcHgnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IDEwMDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjc1KSdcbiAgfSxcbn07XG5jb25zdCBjdXN0b21TdHlsZXNGdWxsVmlldyA9IHtcbiAgY29udGVudDoge1xuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICB6SW5kZXg6ICcxMDEnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZ1RvcDogJzUwcHgnXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknXG4gIH0sXG59O1xuXG5jbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0cmlnZ2VyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmdWxsVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzQ3VzdG9tQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc05vQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzV2hpdGVJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1RyaWdnZXJGdWxsVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VzdG9tQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQWZ0ZXJNb2RhbE9wZW46ICgpID0+IHtcbiAgICB9LFxuICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tOiAoKSA9PiB7XG4gICAgfSxcbiAgICBjdXN0b21DbG9zZVRyaWdnZXI6IGZhbHNlLFxuICAgIHRyaWdnZXI6IDxidXR0b24+UGxlYXNlIHN1cHBseSBhIGN1c3RvbSB0cmlnZ2VyIGNvbXBvbmVudDwvYnV0dG9uPixcbiAgICBmdWxsVmlldzogZmFsc2UsXG4gICAgaGFzQ3VzdG9tQ2xvc2U6IGZhbHNlLFxuICAgIGhhc05vQ2xvc2U6IGZhbHNlLFxuICAgIGlzV2hpdGVJY29uOiBmYWxzZSxcbiAgICBpc1RyaWdnZXJGdWxsVmlldzogZmFsc2UsXG4gICAgY3VzdG9tQ2xhc3M6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZnRlck9wZW5Nb2RhbCA9IHRoaXMuYWZ0ZXJPcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc09wZW4gJiYgbmV4dFByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5jdXN0b21DbG9zZVRyaWdnZXIpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlQ3VzdG9tKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlQ3VzdG9tKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgfVxuXG4gIGFmdGVyT3Blbk1vZGFsKCkge1xuICAgIHRoaXMucHJvcHMub25BZnRlck1vZGFsT3BlbigpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZnVsbFZpZXcsIGhhc0N1c3RvbUNsb3NlLCBoYXNOb0Nsb3NlLCBpc1doaXRlSWNvbiwgaXNUcmlnZ2VyRnVsbFZpZXcsIGN1c3RvbUNsYXNzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNUcmlnZ2VyRnVsbFZpZXcgPyAnd2Z1bGwnOiAnJ30+XG4gICAgICAgIHshdGhpcy5wcm9wcy5pc09wZW4gP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsXCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudHJpZ2dlcn1cbiAgICAgICAgICA8L3NwYW4+IDpcbiAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBvbkFmdGVyT3Blbj17dGhpcy5hZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgIHN0eWxlPXtmdWxsVmlldyA/IGN1c3RvbVN0eWxlc0Z1bGxWaWV3IDogY3VzdG9tU3R5bGVzfVxuICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIlRyYXZlbCBUcmlhbmdsZSBNb2RhbFwiXG4gICAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjdXN0b21DbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhhc0N1c3RvbUNsb3NlID9cbiAgICAgICAgICAgICAgPENsb3NlSXRMZWZ0IG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gY2xhc3NOYW1lPXtgYXRfY2xvc2UgJHtoYXNOb0Nsb3NlID8gJ25ibG9jaycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7aXNXaGl0ZUljb24gPyA8Q2xvc2VXaGl0ZSBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+IDogPENsb3NlRGFyayBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+fVxuICAgICAgICAgICAgICA8L0Nsb3NlSXRMZWZ0PiA6XG4gICAgICAgICAgICAgIDxDbG9zZUl0IG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gY2xhc3NOYW1lPXtgYXRfY2xvc2UgJHtoYXNOb0Nsb3NlID8gJ25ibG9jaycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7aXNXaGl0ZUljb24gPyA8Q2xvc2VXaGl0ZSBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+IDogPENsb3NlRGFyayBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+fVxuICAgICAgICAgICAgICA8L0Nsb3NlSXQ+XG4gICAgICAgICAgfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvb3RlckxpbmtzIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmtzJztcbmltcG9ydCBBZGRyZXNzVFQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQWRkcmVzc1RUJztcbmltcG9ydCBDb3B5UmlnaHQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQ29weVJpZ2h0JztcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxMaW5rcyc7XG5cbmltcG9ydCB7IExvdmVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IExvdmVJY29uQ29uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzIwcHgnLFxuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbWFyZ2luOiAnMCA4cHgnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbn0pO1xuXG5jb25zdCBNYWRlV2l0aCA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbGluZUhlaWdodDogJzIwcHgnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBjb2xvcjogJyNmZmZmZmYnLFxuICAnJiA+IHAnOiB7XG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICB9XG59KTtcblxuY29uc3QgRm9vdGVyID0gKHsgaXNIb21lUGFnZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdhdF9mb290ZXIgcm93IHJvdy0gcGJjMyBwOCc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0MCBwYjAnPlxuICAgICAgPEZvb3RlckxpbmtzIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0OCBtYjI0Jz5cbiAgICAgIDxBZGRyZXNzVFQgaXNIb21lUGFnZT17aXNIb21lUGFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjRcIj5cbiAgICAgIDxTb2NpYWxMaW5rcyAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlclwiPlxuICAgICAgPE1hZGVXaXRoIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgZmxleEZ1bGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9jayBhdF9tYWRlbG92ZVwiPk1hZGUgd2l0aDwvcD5cbiAgICAgICAgPExvdmVJY29uQ29uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+PExvdmVJY29uIC8+PC9Mb3ZlSWNvbkNvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9ja1wiPmluIEluZGlhPC9wPlxuICAgICAgPC9NYWRlV2l0aD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgdGV4dC1yaWdodFwiPjxDb3B5UmlnaHQgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBpc0hvbWVQYWdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNIb21lUGFnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCAnLi9JbnRlcm5hbFNlcnZlckVycm9yLnNjc3MnO1xuXG5pbXBvcnQge1xuICBJbGx1c0Rlc3RpbmF0aW9uXG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc2Jjd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWRlc3RpbmF0aW9uXCI+XG4gICAgICAgIDxJbGx1c0Rlc3RpbmF0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwZmMxIGZ3YiBmMTQ0IHBiOFwiPjUwMDwvaDE+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZjI0IGZ3OVwiPkludGVybmFsIHNlcnZlciBlcnJvcjwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmdzkgcDE1XCI+VGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhlIHJlc291cmNlIHlvdSBhcmUgbG9va2luZyBmb3IsIGFuZCBpdCBjYW5ub3QgYmUgZGlzcGxheWVkLjwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGw4IHByOCBwYjQ4XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpIGZ3OSB3ZnVsbCByaXBwbGVcIj48ZGl2IGNsYXNzTmFtZT1cIndhdmVcIiAvPkdvIFRvIEhvbWVwYWdlPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJuYWxTZXJ2ZXJFcnJvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb24tZGVzdGluYXRpb25cIjogXCJfMnp4N09cIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGluZXJhcnktY29udGFpbmVyLXNtYWxsXCI6IFwiXzRmbjA4XCIsXG5cdFwiaXRpbmVyYXJ5LWNvbnRhaW5lclwiOiBcIl8yVktrN1wiLFxuXHRcIml0aW5lcmFyeS1jb250YWluZXItYm94XCI6IFwiXzF1ZGhjXCIsXG5cdFwiZGF5cy1jb3VudFwiOiBcIl8zcW1vSFwiLFxuXHRcIml0aW5lcmFyeS10YWdzLWJveFwiOiBcIl8zMGJtZVwiLFxuXHRcIml0aW5lcmFyeS1saXN0LWJveFwiOiBcIl8xMU1hQ1wiLFxuXHRcImFycm93LWRvd25cIjogXCJfS0NzRE1cIixcblx0XCJpdGktcmFkaW9cIjogXCJfM0xaRHVcIixcblx0XCJkb3duU2lkZUFycm93XCI6IFwiXzFEQVNWXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEl0aW5lcmFyeVRhZ3MgPSAoeyBsaXN0LCBpdGluZXJhcnlJZCwgdGFnSWQgfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeUVsZW1lbnRzID0gbGlzdC5tYXAoXG4gICAgKHZhbHVlLCBrZXkpID0+IChcbiAgICAgIDxsaVxuICAgICAgICBrZXk9e2BjYXRlZ29yeV8ke2l0aW5lcmFyeUlkfV8ke3RhZ0lkfV8ke2tleX1gfSAgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgY2xhc3NOYW1lPVwiaXRpbmVyYXJ5LXRhZ3MtYm94LWl0ZW1cIlxuICAgICAgPlxuICAgICAgICB7IHZhbHVlIH1cbiAgICAgIDwvbGk+XG4gICAgKVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtc3R5bGUtbm9cIj5cbiAgICAgIHtjYXRlZ29yeUVsZW1lbnRzfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5JdGluZXJhcnlUYWdzLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICBpdGluZXJhcnlJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0YWdJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5JdGluZXJhcnlUYWdzLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyeVRhZ3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UGVyY2VudGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BhcnNlcnMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEluZm9JY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgJy4vUGFja2FnZURheXNEaXNjb3VudC5zY3NzJztcblxuY2xhc3MgUGFja2FnZURheXNEaXNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Rvb2x0aXBWaXNpYmxlOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAgPSB0aGlzLnRvZ2dsZVRvb2x0aXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2x0aXAgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Rvb2x0aXBWaXNpYmxlOiB0cnVlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVG9vbHRpcFZpc2libGU6IGZhbHNlIH0pO1xuICAgIH0sIDE1MDApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRheXMsIG5pZ2h0cywgcHJpY2UsIGRpc2NvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXRfcGFja2FnZURheXNDb3VudCBmMTIgZnc3IHBiNSBtdDMgdGV4dC1yaWdodFwiPntkYXlzfSBEYXlzICYge25pZ2h0c30gTmlnaHRzIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFja2FnZS1pbmZvLWljb24gcGFja2FnZS1pbmZvLWljb24tY3VzdG9tLWxlZnQgcmVsYXRpdmUgZnJpZ2h0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlVG9vbHRpcCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbmZvSWNvbiAvPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNUb29sdGlwVmlzaWJsZSA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcGRhdGEtdXBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgc2ZjdyBtMCB0ZXh0LWxlZnRcIj5FeGFjdCBwcmljZXMgbWF5IHZhcnkgYmFzZWQgb24gYXZhaWxhYmlsaXR5LjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50LXJpYmJvbiBmcmlnaHQgbXI1XCI+e2dldFBlcmNlbnRhZ2UoeyBwcmljZSwgZGlzY291bnQgfSl9JSBPZmY8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWNrYWdlRGF5c0Rpc2NvdW50LnByb3BUeXBlcyA9IHtcbiAgZGF5czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuaWdodHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZURheXNEaXNjb3VudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0UGVyY2VudGFnZSwgcGFyc2VQcmljZSB9IGZyb20gJy4uLy4uL3V0aWxzL3BhcnNlcnMnO1xuXG5jb25zdCBQYWNrYWdlUHJpY2UgPSAoeyBwcmljZVVuaXQsIHByaWNlLCBkaXNjb3VudCwgY3VycmVuY3ksIHByaWNlRnJvbSwgcHJpY2VUbywgZGVhbHNJbmZvIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBmbGV4XCI+XG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBwZmM0IHBiNSBmdzRcIj5TdGFydGluZyBmcm9tOjwvcD5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwYWNrYWdlLXByaWNlIHNmYzMgZnc3IGYxOCBwYjBcIj5cbiAgICAgICAge1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cGFyc2VQcmljZSh7IHByaWNlOiBwcmljZUZyb20gfHwgKHByaWNlIC0gZGlzY291bnQpLCBjdXJyZW5jeSB9KX0vLVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjEyIGZ3NCBtbDggcGZjMyB0ZGxcIj5cbiAgICAgICAgICAgICAge3BhcnNlUHJpY2UoeyBwcmljZTogcHJpY2VUbyB8fCBwcmljZSwgY3VycmVuY3kgfSl9Ly1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9oND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMlwiPntwcmljZVVuaXR9PC9wPlxuICAgIDwvZGl2PlxuICAgIHtkZWFsc0luZm8gPyA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudC1yaWJib24gZnJpZ2h0IG10MjQgbWw4XCI+e2dldFBlcmNlbnRhZ2UoeyBwcmljZSwgZGlzY291bnQgfSl9JSBPZmY8L3NwYW4+IDogbnVsbH1cbiAgPC9kaXY+XG4pO1xuXG5QYWNrYWdlUHJpY2UucHJvcFR5cGVzID0ge1xuICBwcmljZVVuaXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGRpc2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmljZUZyb206IFByb3BUeXBlcy5udW1iZXIsXG4gIHByaWNlVG86IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlYWxzSW5mbzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuUGFja2FnZVByaWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJpY2VVbml0OiAncGVyIHBlcnNvbicsXG4gIGN1cnJlbmN5OiAnUnVwZWUnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZVByaWNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9QYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5LnNjc3MnO1xuXG5jb25zdCBEYXlzSXRpbmVyYXJ5ID0gKFxuICB7XG4gICAgZGF5LFxuICAgIG5leHRMaW5rLFxuICAgIHByZXZMaW5rLFxuICAgIHNldEl0aW5lcmFyeURheVxuICB9XG4pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgYnM0IHAwIHNiY3cgcDggZml4ZWQgYjBcIj5cbiAgICB7cHJldkxpbmsgJiZcbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXRpbmVyYXJ5RGF5KGRheSAtIDEpfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGVmdCB0ZXh0LWNlbnRlciBidG4tcHJpLWxhcmdlIHJlbGF0aXZlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93dG5jIHJpZ2h0XCIvPkRheSB7ZGF5IC0gMX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIH1cbiAgICB7bmV4dExpbmsgJiZcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJdGluZXJhcnlEYXkoZGF5ICsgMSl9XG4gICAgICBjbGFzc05hbWU9XCJmcmlnaHQgdGV4dC1jZW50ZXIgYnRuLXByaS1sYXJnZSByZWxhdGl2ZVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3d0bmMgbGVmdFwiLz5EYXkge2RheSArIDF9XG4gICAgPC9idXR0b24+XG4gICAgfVxuICA8L2Rpdj5cbik7XG5cbkRheXNJdGluZXJhcnkucHJvcFR5cGVzID0ge1xuICBkYXk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmV4dExpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZXZMaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXRJdGluZXJhcnlEYXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbkRheXNJdGluZXJhcnkuZGVmYXVsdFByb3BzID0ge1xuICBuZXh0TGluazogbnVsbCxcbiAgcHJldkxpbms6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERheXNJdGluZXJhcnk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR3JlZW5UaWNrIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0ICcuL0hpZ2hsaWdodHMuc2Nzcyc7XG5cbmNvbnN0IEhpZ2hsaWdodHMgPSAoeyBsaXN0IH0pID0+IHtcbiAgaWYgKCFsaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwMTUgc2Jjd1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZjE2IGZ3OSBtMCBtYjI0XCI+SGlnaGxpZ2h0czwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWdobGlnaHRzTGlzdFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpc3QubWFwKChsLCBpKSA9PiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIj48R3JlZW5UaWNrIC8+PC9zcGFuPntsLnRleHR9XG4gICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhpZ2hsaWdodHMucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodHM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoaWdobGlnaHRzTGlzdFwiOiBcIl8yU1dVT1wiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3RhclJhdGluZ3MgZnJvbSAnLi4vUmV2aWV3L1N0YXJSYXRpbmdzJztcbmltcG9ydCBIb3RlbENhcmQgZnJvbSAnLi9Ib3RlbENhcmQnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdjb21wb25lbnRzL1N3aXBlci9Td2lwZXInO1xuaW1wb3J0IHsgZ2VuZXJhdGVVbmlxdWVIYXNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGFyc2Vycyc7XG5cbmltcG9ydCAnLi9JbmNFeGNsdXNpb24vSG90ZWwuc2Nzcyc7XG5cbmNvbnN0IEhvdGVsID0gKHsgbGlzdCB9KSA9PiB7XG4gIGNvbnN0IGhvdGVsRWxlbWVudHMgPSBsaXN0XG4gICAgLmZpbHRlcihoID0+IGgucGljdHVyZXMubGVuZ3RoKVxuICAgIC5tYXAoKGgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZXMgPSB7XG4gICAgICAgIGltYWdlVXJsOiBoLnBpY3R1cmVzWzBdLnBpY3R1cmVfZGV0YWlscy5waWN0dXJlLFxuICAgICAgICBpbWFnZWtpdFVybDogaC5waWN0dXJlc1swXS5waWN0dXJlX2RldGFpbHMuaW1hZ2VraXRfdXJsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17Z2VuZXJhdGVVbmlxdWVIYXNoKGgubmFtZSl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiBmdzkgcGZjMSByZWxhdGl2ZSBpYmxvY2sgbXI4XCI+e2guaGVhZGVyfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHB0MTVcIj5cbiAgICAgICAgICAgIDxIb3RlbENhcmRcbiAgICAgICAgICAgICAgZGV0YWlscz17aH1cbiAgICAgICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgc2xpZGVDbGFzcz1cInNsaWRlXCJcbiAgICAgICAgc3BhY2VCZXR3ZWVuPXs4fVxuICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjc2LCBoZWlnaHQ6IDI1MiB9fVxuICAgICAgPlxuICAgICAgICB7aG90ZWxFbGVtZW50c31cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSG90ZWwucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbkhvdGVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBJdGluZXJhcnlUYWdzIGZyb20gJ2NvbXBvbmVudHMvSXRpbmVyYXJ5L0l0aW5lcmFyeVRhZ3MnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJy4uL1Jldmlldy9TdGFyUmF0aW5ncyc7XG5cbmltcG9ydCAnLi9JbmNFeGNsdXNpb24vSG90ZWxDYXJkLnNjc3MnO1xuXG5jb25zdCBIb3RlbENhcmQgPSAoe2RldGFpbHMsIGltYWdlcywgaW5kZXh9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaG90ZWwtY2FyZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90ZWwtaW1nIHJlbGF0aXZlIGJveC13aXRoLWxheWVyXCI+XG4gICAgICA8SW1nIHdpZHRoPXszMTZ9IGhlaWdodD17MTQwfSBzcmM9e2ltYWdlcy5pbWFnZVVybH0gaWtTcmM9e2ltYWdlcy5pbWFnZWtpdFVybH0gYWx0PXtkZXRhaWxzLm5hbWV9IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwdDggcGI4IGhvdGVsLWRhdGEtYm94XCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiaWJsb2NrIG1yOCBmMTQgbWI4IGZ3OVwiPntkZXRhaWxzLm5hbWV9PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbWI4XCI+XG4gICAgICAgIDxTdGFyUmF0aW5nc1xuICAgICAgICAgIGlkPXtgcmF0aW5nXyR7aW5kZXh9YH1cbiAgICAgICAgICByYXRpbmc9e2RldGFpbHMucmF0aW5nfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTRwIGVsbGlwc2lzLXR3b1wiPntkZXRhaWxzLmFkZHJlc3N9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3RlbC1kYXRhLWJveC10YWdzXCI+XG4gICAgICAgIDxJdGluZXJhcnlUYWdzIGxpc3Q9e2RldGFpbHMuZmFjaWxpdGllc30gaXRpbmVyYXJ5SWQ9e2luZGV4ICsgMjAwfSB0YWdJZD17MX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkhvdGVsQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGRldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGltYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9Ib3RlbCc7XG5pbXBvcnQgTm9Ib3RlbEluY2x1ZGVkIGZyb20gJy4vSW5jRXhjbHVzaW9uL05vSG90ZWxJbmNsdWRlZCc7XG5pbXBvcnQgeyBQQUNLQUdFX0lOVEVSQUNURUQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5pbXBvcnQgJy4vSW5jRXhjbHVzaW9uL0luY0V4Y2x1c2lvbi5zY3NzJztcblxuY29uc3QgSG90ZWxGbGlnaHQgPSAoeyBob3RlbHMsIGZsaWdodHMsIGhvdGVsVGl0bGUsIGluY2x1c2lvbnMsIHRyYWNrU2VnbWVudCB9KSA9PiB7XG4gIGlmICghaG90ZWxzLmxlbmd0aCAmJiAhZmxpZ2h0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9ICh0ZXh0KSA9PiB7XG4gICAgdHJhY2tTZWdtZW50KFBBQ0tBR0VfSU5URVJBQ1RFRCwgJ0hvdGVsL0ZsaWdodCcsIHRleHQpO1xuICB9O1xuXG4gIGNvbnN0IGF2YWlsYWJsZUluY2x1c2lvbnMgPSBpbmNsdXNpb25zLmZpbHRlcihpID0+IGkua2V5ID09PSAnZmxpZ2h0cycgJiYgaS5hdmFpbGFibGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmN3IHJlbGF0aXZlXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZjE2IGZ3OSBtMCBwMTVcIj5Ib3RlbHM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3RlbC1jYXJvdXNlbC13cmFwcGVyXCI+XG4gICAgICAgIHtob3RlbHMubGVuZ3RoID8gPEhvdGVsIGxpc3Q9e2hvdGVsc30gLz4gOiA8Tm9Ib3RlbEluY2x1ZGVkIC8+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdGVcIj5cbiAgICAgICAgICBOb3RlOiBPdXIgYWdlbnRzIHdpbGwgcHJvdmlkZSB5b3UgdGhlc2Ugb3Igc2ltaWxhciBob3RlbHMgZGVwZW5kaW5nXG4gICAgICAgICAgb24gYXZhaWxhYmlsaXR5XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSG90ZWxGbGlnaHQucHJvcFR5cGVzID0ge1xuICBob3RlbHM6IFByb3BUeXBlcy5hcnJheSxcbiAgZmxpZ2h0czogUHJvcFR5cGVzLmFycmF5LFxuICBob3RlbFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBpbmNsdXNpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuSG90ZWxGbGlnaHQuZGVmYXVsdFByb3BzID0ge1xuICBob3RlbHM6IFtdLFxuICBmbGlnaHRzOiBbXSxcbiAgaG90ZWxUaXRsZTogJ0hvdGVscycsXG4gIHRyYWNrU2VnbWVudDooKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxGbGlnaHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9JbmNsdXNpb24uc2Nzcyc7XG5cbmNvbnN0IEV4Y2x1c2lvbiA9ICh7IGxpc3QgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGxpc3QubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgPGxpIGtleT17aX0+eyBpdGVtIH08L2xpPlxuICAgICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cInAwIG0wIGluY2wtZXhjbC1saXN0IGV4Y2wtbGlzdFwiPlxuICAgICAge2VsZW1lbnRzfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5FeGNsdXNpb24ucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbkV4Y2x1c2lvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGxpc3Q6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGNsdXNpb247XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzbGlkZVwiOiBcIl8zUld3ZVwiXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvdGVsLWNhcmRcIjogXCJfZ1dydWNcIixcblx0XCJob3RlbC1pbWdcIjogXCJfMnRiVlZcIixcblx0XCJob3RlbC1kYXRhLWJveFwiOiBcIl84cFBwV1wiLFxuXHRcImhvdGVsLWRhdGEtYm94LXRhZ3NcIjogXCJfMTMwbC1cIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbmNsdXNpb24gZnJvbSAnLi9JbmNsdXNpb24nO1xuaW1wb3J0IEV4Y2x1c2lvbiBmcm9tICcuL0V4Y2x1c2lvbic7XG5pbXBvcnQgJy4vSW5jRXhjbHVzaW9uLnNjc3MnO1xuaW1wb3J0IHsgUEFDS0FHRV9JTlRFUkFDVEVEIH0gZnJvbSBcIi4uLy4uLy4uL2FjdGlvbnMvc2VnbWVudEV2ZW50c1wiO1xuXG5jb25zdCBJbmNFeGNsdXNpb24gPSAoeyBpbmNsdXNpb25zLCBleGNsdXNpb25zLCB0cmFja1NlZ21lbnQgfSkgPT4ge1xuICBpZiAoIWluY2x1c2lvbnMubGVuZ3RoICYmICFleGNsdXNpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9ICh0ZXh0KSA9PiB7XG4gICAgdHJhY2tTZWdtZW50KFBBQ0tBR0VfSU5URVJBQ1RFRCwgJ0luY2x1c2lvbnMvRXhjbHVzaW9ucycsIHRleHQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmN3IHJlbGF0aXZlXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImluYy1leGMtcmFkaW9cIiBjbGFzc05hbWU9XCJpbmMtZXhjLXJhZGlvXCIgaWQ9XCJJbmNFeGNSYWRpbzFcIiBkZWZhdWx0Q2hlY2tlZCBvbkNsaWNrPXsoKSA9PiB7b25DaGFuZ2VIYW5kbGVyKCdJbmNsdXNpb25zJyk7fX0gLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiSW5jRXhjUmFkaW8xXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHBsMCBwcjBcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImluYy1leGMtYnV0dG9uIGFic29sdXRlIHQwIGwwIHJpcHBsZVwiPjxkaXYgY2xhc3NOYW1lPVwid2F2ZS1kYXJrXCIgLz5JbmNsdXNpb25zPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmMtZXhjLWRhdGEgcDE1IHBsMjQgcHIyNFwiPlxuICAgICAgICAgIDxJbmNsdXNpb24gbGlzdD17aW5jbHVzaW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpbmMtZXhjLXJhZGlvXCIgY2xhc3NOYW1lPVwiaW5jLWV4Yy1yYWRpb1wiIGlkPVwiSW5jRXhjUmFkaW8yXCIgb25DbGljaz17KCkgPT4ge29uQ2hhbmdlSGFuZGxlcignRXhjbHVzaW9ucycpO319Lz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiSW5jRXhjUmFkaW8yXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHBsMCBwcjAgcHQwXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJpbmMtZXhjLWJ1dHRvbiBhYnNvbHV0ZSB0MCByMCByaXBwbGVcIj48ZGl2IGNsYXNzTmFtZT1cIndhdmUtZGFya1wiIC8+RXhjbHVzaW9uczwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jLWV4Yy1kYXRhIHAxNSBwbDI0IHByMjRcIj5cbiAgICAgICAgICA8RXhjbHVzaW9uIGxpc3Q9e2V4Y2x1c2lvbnN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkluY0V4Y2x1c2lvbi5wcm9wVHlwZXMgPSB7XG4gIGluY2x1c2lvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZXhjbHVzaW9uczogUHJvcFR5cGVzLmFycmF5LFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5JbmNFeGNsdXNpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbmNsdXNpb25zOiBbXSxcbiAgZXhjbHVzaW9uczogW10sXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluY0V4Y2x1c2lvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluYy1leGMtcmFkaW9cIjogXCJfNVhUdlRcIixcblx0XCJpbmMtZXhjLWJ1dHRvblwiOiBcIl83OVJmS1wiLFxuXHRcImluYy1leGMtZGF0YVwiOiBcIl8xaG1UV1wiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL0luY2x1c2lvbi5zY3NzJztcblxuY29uc3QgSW5jbHVzaW9uID0gKHsgbGlzdCB9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gbGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICA8bGkga2V5PXtpfT57IGl0ZW0gfTwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cInAwIG0wIGluY2wtZXhjbC1saXN0XCI+XG4gICAgICB7ZWxlbWVudHN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbkluY2x1c2lvbi5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheVxufTtcblxuSW5jbHVzaW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdDogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluY2x1c2lvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluY2wtZXhjbC1saXN0XCI6IFwiXzJZSW9HXCIsXG5cdFwiZXhjbC1saXN0XCI6IFwiXzFOUldqXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9Ib3RlbC5zY3NzJztcbmltcG9ydCB7XG4gIEhvdGVsIGFzIEhvdGVsSWNvblxufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IE5vSG90ZWxJbmNsdWRlZCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwdDI0IHBiMjRcIj5cbiAgICA8SG90ZWxJY29uIGNsYXNzTmFtZT1cImdyZXlzY2FsZSBmbGlnaHQtaWNvbi1kaXNhYmxlZFwiIC8+XG4gICAgPHAgY2xhc3NOYW1lPVwicHQ4IGYxNiBmdzkgcGZjNCB0ZXh0LWNlbnRlclwiPk5vIEhvdGVsIEluY2x1ZGVkPC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vSG90ZWxJbmNsdWRlZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5jb25zdCBJbmxpbmVHYXRld2F5ID0gKHsgdGl0bGUsIGRlc3RpbmF0aW9uLCB0cmlwX3R5cGUsIHBhY2thZ2VfZmlsdGVycyB9KSA9PiB7XG4gIGlmICghcGFja2FnZV9maWx0ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVBhdGggKHBhcmFtTmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgdXJsID0gJyc7XG4gICAgaWYgKHRyaXBfdHlwZSkge1xuICAgICAgdXJsID0gYC8ke3RyaXBfdHlwZX0tcGFja2FnZXNgO1xuICAgIH1cbiAgICBpZihkZXN0aW5hdGlvbikge1xuICAgICAgdXJsID0gYCR7dXJsfS8ke2Rlc3RpbmF0aW9ufWA7XG4gICAgfVxuICAgIGlmKHZhbHVlKSB7XG4gICAgICB1cmwgPSBgJHt1cmx9PyR7cGFyYW1OYW1lfVtdPSR7dmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBjb25zdCByZW5kZXJMaXN0ID0gKHBhcmFtTmFtZSwgZmlsdGVycykgPT4gZmlsdGVycy5tYXAoKGxpc3RJdGVtKSA9PlxuICAgIDxMaW5rIGNsYXNzTmFtZT1cInBpbGxzXCIga2V5PXtsaXN0SXRlbS52YWx1ZX1cbiAgICAgICAgICB2YWx1ZT17bGlzdEl0ZW0udmFsdWV9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICB0bz17Y3JlYXRlUGF0aChwYXJhbU5hbWUsIGxpc3RJdGVtLnZhbHVlKX0+e2xpc3RJdGVtLm5hbWV9PC9MaW5rPlxuICApO1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjggb3ZlcmZsb3doXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHNiY3dcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3OSBtYjQgcDE1XCI+e3RpdGxlfTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGlsbHMtY29udGFpbmVyLWlubGluZSBwYjE1IGlubGluZS1kYXktc2VsZWN0b3JcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWNrYWdlX2ZpbHRlcnMubWFwKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxpc3QoZmlsdGVyLnBhcmFtX25hbWUsIGZpbHRlci5maWx0ZXJzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbklubGluZUdhdGV3YXkucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzdGluYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyaXBfdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFja2FnZV9maWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5leHBvcnQgZGVmYXVsdCBJbmxpbmVHYXRld2F5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBJdGluZXJhcnlUYWdzIGZyb20gJy4uL0l0aW5lcmFyeS9JdGluZXJhcnlUYWdzJztcbmltcG9ydCB7XG4gIERvd25BcnJvdyxcbiAgQmx1ZURvd25BcnJvd1xufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBQQUNLQUdFX0lOVEVSQUNURUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IEl0aW5lcmFyeVBpY3R1cmVTbGlkZXIgZnJvbSAnLi9JdGluZXJhcnlQaWN0dXJlU2xpZGVyJztcblxuaW1wb3J0ICcuLy4uL0l0aW5lcmFyeS9JdGluZXJhcnkuc2Nzcyc7XG5cbmNvbnN0IERvd25TaWRlQXJyb3cgPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMTBweCcsXG4gIGhlaWdodDogJzZweCcsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBtYXJnaW5MZWZ0OiAnNXB4Jyxcbn0pO1xuXG5jb25zdCBIdG1sVG9SZWFjdFBhcnNlciA9IHJlcXVpcmUoJ2h0bWwtdG8tcmVhY3QnKS5QYXJzZXI7XG5cbmNvbnN0IGh0bWxUb1JlYWN0UGFyc2VyID0gbmV3IEh0bWxUb1JlYWN0UGFyc2VyKCk7XG5cbmNvbnN0IGRheURldGFpbEVsZW1lbnRzID0gKGRheURldGFpbHMgPSBbXSwgcGFja2FnZUlkLCBpdGluZXJhcnlJZCkgPT4ge1xuICByZXR1cm4gZGF5RGV0YWlscy5zbGljZSgwLCA1KS5tYXAoKHZhbHVlLCBrZXkpID0+IChcbiAgICA8bGkga2V5PXtgZGF5X2RldGFpbF8ke3BhY2thZ2VJZH1fJHtpdGluZXJhcnlJZH1fJHtrZXl9YH0gPnsgaHRtbFRvUmVhY3RQYXJzZXIucGFyc2UodmFsdWUpIH08L2xpPlxuICApKTtcbn07XG5cbmNvbnN0IHJlbmRlckl0aW5lcmFyeUVsZW1lbnRzID0gKGl0aW5lcmFyeSwgaWQsIHJlc291cmNlLCByZXBsYWNlU3RhdGUsIHRyYWNrU2VnbWVudCwgc2V0SXRpbmVyYXJ5RGF5KSA9PiB7XG4gIHJldHVybiBpdGluZXJhcnkubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgY29uc3Qgc3BhY2VJbmRleCA9IHZhbHVlLnRpdGxlLmluZGV4T2YoJyAnLCB2YWx1ZS50aXRsZS5pbmRleE9mKCcgJykgKyAxKSB8fCAwO1xuICAgIGNvbnN0IGRheSA9IHZhbHVlLnRpdGxlLnN1YnN0cigwLCBzcGFjZUluZGV4KTtcbiAgICBjb25zdCB0aXRsZSA9IHZhbHVlLnRpdGxlLnN1YnN0cihzcGFjZUluZGV4ICsgMSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2BpdGluZXJhcnlfJHtpZH1fJHtrZXl9YH0gY2xhc3NOYW1lPVwiaXRpbmVyYXJ5LWNvbnRhaW5lci1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByZWxhdGl2ZSBpdGluZXJhcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgaXRpbmVyYXJ5LWNvbnRhaW5lci1zbWFsbFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIml0aS1yYWRpb1wiIGlkPXtgaXRpbmVyYXJ5X3JhZGlvXyR7aWR9XyR7a2V5fWB9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRyYWNrU2VnbWVudChQQUNLQUdFX0lOVEVSQUNURUQsICdJdGluZXJhcnknLCB0aXRsZSkgfS8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGl0aW5lcmFyeV9yYWRpb18ke2lkfV8ke2tleX1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbDAgcHI4IHJlbGF0aXZlIGRheXMtY291bnQgcGI4XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGZ3OSByZWxhdGl2ZVwiPnsgZGF5IH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctICByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTQgZnc5IG1iOCByZWxhdGl2ZSBwcjQ4XCI+eyB0aXRsZSB9IDxzcGFuIGNsYXNzTmFtZT1cImFycm93LWRvd24gc21vb3RoIGFic29sdXRlIHIwIGFic29sdXRlLWNlbnRlci12IGlibG9ja1wiPjxEb3duQXJyb3cgLz48L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGl0aW5lcmFyeS10YWdzLWJveFwiPlxuICAgICAgICAgICAgICAgICAgPEl0aW5lcmFyeVRhZ3MgbGlzdD17dmFsdWUubGFiZWxzfSBpdGluZXJhcnlJZD17aWR9IHRhZ0lkPXtrZXl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaXRpbmVyYXJ5LWxpc3QtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0MCBsMCBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtc3R5bGUtbm8gaXRpbmVyYXJ5LWltYWdlcy1jb250YWluZXIgbXQyNCBtYjI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRpbmVyYXJ5W2tleV0ucGljdHVyZXMgPyA8SXRpbmVyYXJ5UGljdHVyZVNsaWRlciBwaWN0dXJlcz17aXRpbmVyYXJ5W2tleV0ucGljdHVyZXN9IGhlYWRpbmc9e3RpdGxlfS8+OiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXN0eWxlLW5vIGYxMlwiPlxuICAgICAgICAgICAgICAgICAgeyBkYXlEZXRhaWxFbGVtZW50cygoQXJyYXkuaXNBcnJheSh2YWx1ZS5kYXlfZGV0YWlsKSA/IHZhbHVlLmRheV9kZXRhaWwgOiBbXSksIGlkLCBrZXkpIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQ4IHBiOFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJdGluZXJhcnlEYXkoa2V5ICsgMSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImYxMiBmcmlnaHQgc2ZjMSBmdzdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBJdGluZXJhcnkgPSAoeyBpdGluZXJhcnksIHRpdGxlSGVhZCwgaWQsIHJlc291cmNlLCByZXBsYWNlU3RhdGUsIHRyYWNrU2VnbWVudCwgc2V0SXRpbmVyYXJ5RGF5IH0pID0+IHtcbiAgaWYgKCFpdGluZXJhcnkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmN3IHAxNVwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctY29tbW9uLWNlbnRlciBwYjE1IGJvdHRvbS1ib3JkZXJcIj57dGl0bGVIZWFkfTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGl0aW5lcmFyeS1jb250YWluZXJcIj5cbiAgICAgICAgeyByZW5kZXJJdGluZXJhcnlFbGVtZW50cyhpdGluZXJhcnksIGlkLCByZXNvdXJjZSwgcmVwbGFjZVN0YXRlLCB0cmFja1NlZ21lbnQsIHNldEl0aW5lcmFyeURheSkgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JdGluZXJhcnkucHJvcFR5cGVzID0ge1xuICBpdGluZXJhcnk6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB0aXRsZUhlYWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJlc291cmNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJlcGxhY2VTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgc2V0SXRpbmVyYXJ5RGF5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuSXRpbmVyYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGVIZWFkOiAnSXRpbmVyYXJ5JyxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmNvbnN0IEl0aW5lcmFyeVBvcHVwID0gKHsgcGljdHVyZXMsIGhlYWRpbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiB0ZXh0LWxlZnQgZnc0IHBsNDggcHQ4IHBiMTUgcHIxNSBhYnNvbHV0ZSB0M1wiPntoZWFkaW5nfTwvcD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1zdHlsZS1ubyBpdGluZXJhcnktaW1hZ2VzLWNvbnRhaW5lclwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9wZW5JbWFnZXNQb3B1cChlKX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBpY3R1cmVzLm1hcCgocGljdHVyZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpID5cbiAgICAgICAgICAgICAgICAgICAgPEltZyBrZXk9e2l9IHNyYz17cGljdHVyZS5waWN0dXJlX2RldGFpbHMucGljdHVyZX0gaWtTcmM9e3BpY3R1cmUucGljdHVyZV9kZXRhaWxzLmltYWdla2l0X3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3BpY3R1cmUucGljdHVyZV9kZXRhaWxzLmNhcHRpb259IC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICApO1xufTtcblxuSXRpbmVyYXJ5UG9wdXAucHJvcFR5cGVzID0ge1xuICBwaWN0dXJlczpQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaGVhZGluZzpQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGluZXJhcnlQb3B1cDtcbiIsImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuaW1wb3J0IEl0aW5lcmFyeVBvcHVwIGZyb20gJy4vSXRpbmVyYXJ5SW1hZ2VzUG9wdXAnO1xuXG5jbGFzcyBJdGluZXJhcnlQaWN0dXJlU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIG9wZW5Nb2RhbDogZmFsc2UsXG4gICAgY2xvc2VNb2RhbDogdHJ1ZVxuICB9O1xuXG4gIG9wZW5JbWFnZXNQb3B1cCA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlLCBjbG9zZU1vZGFsOiBmYWxzZSB9KTtcbiAgfTtcblxuICBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZU1vZGFsOiB0cnVlLCBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBwaWN0dXJlcywgaGVhZGluZyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtc3R5bGUtbm8gaXRpbmVyYXJ5LWltYWdlcy1jb250YWluZXJcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vcGVuSW1hZ2VzUG9wdXAoZSl9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBpY3R1cmVzLm1hcCgocGljdHVyZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSA+XG4gICAgICAgICAgICAgICAgICA8SW1nIGtleT17aX0gaWtTcmM9e3BpY3R1cmUucGljdHVyZV9kZXRhaWxzLmltYWdla2l0X3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwaWN0dXJlLnBpY3R1cmVfZGV0YWlscy5jYXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHRyaWdnZXI9e251bGx9XG4gICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH1cbiAgICAgICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX1cbiAgICAgICAgICBjdXN0b21DbG9zZVRyaWdnZXI9e3RoaXMuc3RhdGUuY2xvc2VNb2RhbH1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZUN1c3RvbT17dGhpcy5jbG9zZVBvcHVwfVxuICAgICAgICA+PEl0aW5lcmFyeVBvcHVwIHBpY3R1cmVzPXtwaWN0dXJlc30gaGVhZGluZz17aGVhZGluZ30vPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuSXRpbmVyYXJ5UGljdHVyZVNsaWRlci5wcm9wVHlwZXMgPSB7XG4gIHBpY3R1cmVzOlByb3BUeXBlcy5hcnJheSxcbiAgaGVhZGluZzpQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyeVBpY3R1cmVTbGlkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZUNpdGllcy5zY3NzJztcblxuY29uc3QgcmVuZGVyUGFja2FnZUNpdGllc0Zyb21BcnJheSA9IChjaXRpZXMsIGlzRGVhbHNDYXJkKSA9PiB7XG4gIGlmICghY2l0aWVzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2UtY2l0aWVzXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFja2FnZS1jaXRpZXMtbGlzdFwiPlxuICAgICAgICB7IGNpdGllcy5tYXAoKGNpdHksIGkpID0+IDxsaSBjbGFzc05hbWU9e2lzRGVhbHNDYXJkID8gJ2YxMic6ICcnfSBrZXk9e2l9PnsgY2l0eSB9PC9saT4pIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG5cbn07XG5cbmNvbnN0IHJlbmRlclBhY2thZ2VDaXRpZXNGcm9tT2JqZWN0ID0gKGNpdGllc1dpdGhEYXlzLCBpc0RlYWxzQ2FyZCkgPT4ge1xuICBjb25zdCBjaXRpZXMgPSBPYmplY3Qua2V5cyhjaXRpZXNXaXRoRGF5cyk7XG5cbiAgaWYgKCFjaXRpZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZS1jaXRpZXNcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWNrYWdlLWNpdGllcy1saXN0XCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdzcgZjEyIGxpc3QtaGVhZGluZ1wiPkNpdGllczo8L2xpPlxuICAgICAgICB7XG4gICAgICAgICAgY2l0aWVzLm1hcCgoY2l0eSwgaSkgPT4gPGxpIGNsYXNzTmFtZT17aXNEZWFsc0NhcmQgPyAnZjEyJzogJyd9IGtleT17aX0+XG4gICAgICAgICAgICB7IGNpdHkgfSB7IGNpdGllc1dpdGhEYXlzW2NpdHldID8gYCAoJHtjaXRpZXNXaXRoRGF5c1tjaXR5XX1EKWAgOiBudWxsIH1cbiAgICAgICAgICA8L2xpPilcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFBhY2thZ2VDaXRpZXMgPSAoeyBjaXRpZXMsIGlzRGVhbHNDYXJkIH0pID0+IHtcbiAgaWYgKGNpdGllcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHJlbmRlclBhY2thZ2VDaXRpZXNGcm9tQXJyYXkoY2l0aWVzLCBpc0RlYWxzQ2FyZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlbmRlclBhY2thZ2VDaXRpZXNGcm9tT2JqZWN0KGNpdGllcywgaXNEZWFsc0NhcmQpO1xuICB9XG59O1xuXG5QYWNrYWdlQ2l0aWVzLnByb3BUeXBlcyA9IHtcbiAgY2l0aWVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXldKS5pc1JlcXVpcmVkLFxuICBpc0RlYWxzQ2FyZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblBhY2thZ2VDaXRpZXMuZGVmYXVsdFByb3BzID0ge1xuICBpc0RlYWxzQ2FyZDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VDaXRpZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2V0UGVyY2VudGFnZSB9IGZyb20gJ3V0aWxzL3BhcnNlcnMnO1xuaW1wb3J0IHsgSW5mb0ljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmltcG9ydCAnY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VEYXlzRGlzY291bnQuc2Nzcyc7XG5cbmNsYXNzIFBhY2thZ2VEYXlzRGlzY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNUb29sdGlwVmlzaWJsZTogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy50b2dnbGVUb29sdGlwID0gdGhpcy50b2dnbGVUb29sdGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGVUb29sdGlwICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNUb29sdGlwVmlzaWJsZTogdHJ1ZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Rvb2x0aXBWaXNpYmxlOiBmYWxzZSB9KTtcbiAgICB9LCAxNTAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXlzLCBuaWdodHMsIHByaWNlLCBkaXNjb3VudCwgaGlkZURpc2NvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgey8qPHAgY2xhc3NOYW1lPVwiYXRfcGFja2FnZURheXNDb3VudCBmMTIgZnc3IHBiNSBtdDMgdGV4dC1yaWdodCBwYWNrYWdlcy1kYXktY291bnQgb3BhY2l0eS16ZXJvXCI+e2RheXN9IERheXMgJiB7bmlnaHRzfSBOaWdodHMgPC9wPiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG10MjRcIj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhY2thZ2UtaW5mby1pY29uIHBhY2thZ2UtaW5mby1pY29uLWN1c3RvbS1sZWZ0IHJlbGF0aXZlIGZyaWdodFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZVRvb2x0aXAoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5mb0ljb24gLz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzVG9vbHRpcFZpc2libGUgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGlkZURpc2NvdW50ID8gJ3Rvb2x0aXAtdXB3YXJkcycgOiAndG9vbHRpcGRhdGEtdXAnfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgc2ZjdyBtMCB0ZXh0LWxlZnRcIj5FeGFjdCBwcmljZXMgbWF5IHZhcnkgYmFzZWQgb24gYXZhaWxhYmlsaXR5LjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICFoaWRlRGlzY291bnQgP1xuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudC1yaWJib24gZnJpZ2h0IG1yNVwiPntnZXRQZXJjZW50YWdlKHsgcHJpY2UsIGRpc2NvdW50IH0pfSUgT2ZmPC9zcGFuPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWNrYWdlRGF5c0Rpc2NvdW50LnByb3BUeXBlcyA9IHtcbiAgZGF5czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuaWdodHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaGlkZURpc2NvdW50OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZURheXNEaXNjb3VudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGVEaXNjb3VudDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VEYXlzRGlzY291bnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgRGF5c0l0aW5lcmFyeSBmcm9tICcuL0RheXNJdGluZXJhcnkuanMnO1xuaW1wb3J0IFBhY2thZ2VJbmNFeGMgZnJvbSAnLi4vTGlzdGluZy9QYWNrYWdlSW5jRXhjLmpzJztcbmltcG9ydCB7IEJhY2sySWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBQYWNrYWdlU2xpZGVyIGZyb20gJy4vUGFja2FnZVNsaWRlcic7XG5pbXBvcnQgSXRpbmVyYXJ5VGFncyBmcm9tICcuLi9JdGluZXJhcnkvSXRpbmVyYXJ5VGFncyc7XG5cbmNvbnN0IGh0bWxUb1JlYWN0UGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBQYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5ID0gKFxuICB7XG4gICAgcGFja2FnZURldGFpbHMsXG4gICAgaXRpbmVyYXJ5LFxuICAgIGRheSxcbiAgICByZXNvdXJjZSxcbiAgICByZXBsYWNlU3RhdGUsXG4gICAgc2V0SXRpbmVyYXJ5RGF5LFxuICAgIHNob3dTZWN0aW9uXG4gIH1cbikgPT4ge1xuICBjb25zdCBzcGFjZUluZGV4ID0gaXRpbmVyYXJ5LnRpdGxlLmluZGV4T2YoJyAnLCBpdGluZXJhcnkudGl0bGUuaW5kZXhPZignICcpICsgMSkgfHwgMDtcbiAgY29uc3QgdGl0bGUgPSBpdGluZXJhcnkudGl0bGUuc3Vic3RyKHNwYWNlSW5kZXggKyAxKTtcblxuICBjb25zdCBob21lTGluayA9IGAvcGFja2FnZXMvJHtyZXNvdXJjZS5wYXRofT9pZD0ke3Jlc291cmNlLmlkfWA7XG4gIGNvbnN0IG5leHRMaW5rID0gKGRheSA8IHBhY2thZ2VEZXRhaWxzLml0aW5lcmFyeS5sZW5ndGgpID8gYCR7aG9tZUxpbmt9JmRheT0ke2RheSArIDF9YCA6IG51bGw7XG4gIGNvbnN0IHByZXZMaW5rID0gKGRheSA+IDEpID8gYCR7aG9tZUxpbmt9JmRheT0ke2RheSAtIDF9YCA6IG51bGw7XG5cbiAgLy8gVE9ETzogU2Nyb2xsIGlzIGJyZWFraW5nIG9uIHRoaXMgcGFnZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzaG93U2VjdGlvbiA/IFwib3ZlcmZsb3dhIHNiY3cgaXRpbmVyYXJ5LWRldGFpbHMtcG9wdXBcIiA6IFwiaGlkZVwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgc2JjdyBwbDAgcHIwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImYxNiB0ZXh0LWxlZnQgZnc0IHBsNDggcHQxNSBwYjE1IHJlbGF0aXZlIHByMTVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyLXYgbDE1IGNyb3NzLWNvbW1vblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEl0aW5lcmFyeURheSgwKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJhY2sySWNvbiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBJdGluZXJhcnlcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyAvKiBVc2luZyBwYWNrYWdlRGV0aWFscyBpbWFnZXMuIEFQSSBEZXBlbmRlbmN5ICovIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZS1zbGlkZXItaW1nXCI+XG4gICAgICA8UGFja2FnZVNsaWRlclxuICAgICAgICBpbWFnZXM9e2l0aW5lcmFyeS5waWN0dXJlc31cbiAgICAgICAgbmFtZT17cGFja2FnZURldGFpbHMubmFtZX1cbiAgICAgICAgY292ZXJzPXtwYWNrYWdlRGV0YWlscy5jb3ZlcnN9XG4gICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHAxNSBzYmN3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRpbmVyYXJ5LWRheXMtZmxhZyBtYjE1XCI+RGF5IHtkYXl9PC9kaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTYgcGZjMyB0ZXh0LWxlZnQgZnc5XCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxJdGluZXJhcnlUYWdzIGxpc3Q9e2l0aW5lcmFyeS5jYXRlZ29yaWVzfSBpdGluZXJhcnlJZD17cGFja2FnZURldGFpbHMuaWR9IHRhZ0lkPXtkYXl9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwIHBiNjRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxNCBwZmMzIGZ3NCB0ZXh0LWxlZnQgcHQxNVwiPlxuICAgICAgICAgICAge2h0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKGl0aW5lcmFyeS5kZXNjcmlwdGlvbil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHBmYzMgZnc3IGYxNCBwdDI0XCI+T3RoZXIgQmVuZWZpdGVzPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaW5jbHVzaW9uLWhlaWdodC1ib3hcIj5cbiAgICAgICAgICAgIDxQYWNrYWdlSW5jRXhjIGluY2x1c2lvbnM9e2l0aW5lcmFyeS5pbmNsdXNpb25zfSBpZD17YGRheWRldGFpbHNfJHtwYWNrYWdlRGV0YWlscy5pZH1gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPERheXNJdGluZXJhcnlcbiAgICAgICAgZGF5PXtkYXl9XG4gICAgICAgIG5leHRMaW5rPXtuZXh0TGlua31cbiAgICAgICAgcHJldkxpbms9e3ByZXZMaW5rfVxuICAgICAgICBzZXRJdGluZXJhcnlEYXk9e3NldEl0aW5lcmFyeURheX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5LnByb3BUeXBlcyA9IHtcbiAgcGFja2FnZURldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGF5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJlc291cmNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJlcGxhY2VTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXRpbmVyYXJ5OiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZXRJdGluZXJhcnlEYXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dTZWN0aW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG5QYWNrYWdlRGV0YWlsRGF5SXRpbmVyYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRpbmVyYXJ5OiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZURldGFpbERheUl0aW5lcmFyeTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXJyb3d0bmNcIjogXCJfMW1nMFFcIixcblx0XCJyaWdodFwiOiBcIl8yaWE3c1wiLFxuXHRcImxlZnRcIjogXCJfMTBiMFVcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNjcm9sbFBlcmNlbnRhZ2UgfSBmcm9tICdyZWFjdC1zY3JvbGwtcGVyY2VudGFnZSc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5pbXBvcnQgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmltcG9ydCBIaWdobGlnaHRzIGZyb20gJy4vSGlnaGxpZ2h0cyc7XG5pbXBvcnQgUXVpY2tMaW5rTmF2IGZyb20gJy4vUXVpY2tMaW5rTmF2JztcbmltcG9ydCBJdGluZXJhcnkgZnJvbSAnLi9JdGluZXJhcnknO1xuaW1wb3J0IEluY0V4Y2x1c2lvbiBmcm9tICcuL0luY0V4Y2x1c2lvbi9JbmNFeGNsdXNpb24nO1xuaW1wb3J0IEhvdGVsRmxpZ2h0IGZyb20gJy4vSG90ZWxGbGlnaHQnO1xuaW1wb3J0IFBhY2thZ2VTbGlkZXIgZnJvbSAnY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlU2xpZGVyJztcbmltcG9ydCBQYWNrYWdlRGV0YWlsc1ByaWNlIGZyb20gJy4vUGFja2FnZURldGFpbHNQcmljZSc7XG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICdoZWxwZXJzL0Zvcm1EYXRhRm9ybWF0dGVyJztcbmltcG9ydCBTaG93TW9yZSBmcm9tICcuLi9HZW5lcmljL1Nob3dNb3JlJztcbmltcG9ydCBGb3JtT25lQ1RBIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9Gb3JtT25lQ1RBJztcbmltcG9ydCB7IHRyYWNrU2VnbWVudCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgRmFxIGZyb20gJy4uL0ZhcS9GYXEnO1xuaW1wb3J0IElubGluZUdhdGV3YXkgZnJvbSAnLi9JbmxpbmVHYXRld2F5JztcbmltcG9ydCB7IGdldENvb2tpZSwgUEFHRV9VVUlEX0NPT0tJRV9LRVksIExBTkRJTkdfVVVJRF9DT09LSUVfS0VZIH0gZnJvbSAnaGVscGVycy9Gb3JtRGF0YUZvcm1hdHRlcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlclRpdGxlIH0gZnJvbSAnbW9kdWxlcy9oZWFkZXIvSGVhZGVyVGl0bGUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUV4aXRJbnRlbnQsIHNob3dQb3BVcCB9IGZyb20gJ2hlbHBlcnMvZXhpdEludGVudCc7XG5pbXBvcnQgUGFja2FnZURldGFpbERheUl0aW5lcmFyeSBmcm9tICcuL1BhY2thZ2VEZXRhaWxEYXlJdGluZXJhcnknO1xuaW1wb3J0IEludGVybGlua2luZyBmcm9tICdtb2R1bGVzL3NoYXJlZC9pbnRlcmxpbmtpbmcnO1xuXG5pbXBvcnQgJ2NvbXBvbmVudHMvTGlzdGluZy9BYm91dExpc3RpbmdEZXN0aW5hdGlvbi5zY3NzJztcbmltcG9ydCB7IGluZmxhdGVQcmljZSB9IGZyb20gXCJ1dGlscy9wYXJzZXJzXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50TW9udGggfSBmcm9tIFwiaGVscGVycy9EYXRlVGltZVwiO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IHNjcm9sbExpbmsgPSBTY3JvbGwuTGluaztcbmNvbnN0IEVsZW1lbnQgPSBTY3JvbGwuRWxlbWVudDtcbmNvbnN0IEV2ZW50cyA9IFNjcm9sbC5FdmVudHM7XG5jb25zdCBzY3JvbGxTcHkgPSBTY3JvbGwuc2Nyb2xsU3B5O1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJDb25zdGFudHMocGFja2FnZURldGFpbHMsIGZhcXMpIHtcbiAgY29uc3QgaGVhZGVyQ29uc3RhbnRzID0gW107XG5cbiAgaWYgKHBhY2thZ2VEZXRhaWxzLm92ZXJ2aWV3KSB7XG4gICAgaGVhZGVyQ29uc3RhbnRzLnB1c2goeyB0aXRsZTogJ092ZXJ2aWV3Jywgc2VjdGlvbl9uYW1lOiAnb3ZlcnZpZXdfYm94JyB9KTtcbiAgfVxuICBpZiAocGFja2FnZURldGFpbHMuaXRpbmVyYXJ5KSB7XG4gICAgaGVhZGVyQ29uc3RhbnRzLnB1c2goeyB0aXRsZTogJ0l0aW5lcmFyeScsIHNlY3Rpb25fbmFtZTogJ2l0aW5lcmFyeV9ib3gnIH0pO1xuICB9XG4gIGlmIChwYWNrYWdlRGV0YWlscy5ob3RlbHMpIHtcbiAgICBoZWFkZXJDb25zdGFudHMucHVzaCh7IHRpdGxlOiAnSG90ZWxzJywgc2VjdGlvbl9uYW1lOiAnaG90ZWxfYm94JyB9KTtcbiAgfVxuICBpZiAocGFja2FnZURldGFpbHMuaW5jRXhjLmluY2x1c2lvbnMgJiYgcGFja2FnZURldGFpbHMuaW5jRXhjLmV4Y2x1c2lvbnMpIHtcbiAgICBoZWFkZXJDb25zdGFudHMucHVzaCh7IHRpdGxlOiAnSW5jbHVzaW9uIC8gRXhjbHVzaW9ucycsIHNlY3Rpb25fbmFtZTogJ2luY2V4Y2x1c2lvbl9ib3gnIH0pO1xuICB9XG4gIGlmIChwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMubGVuZ3RoICYmIGZhcXMubGVuZ3RoKSB7XG4gICAgaGVhZGVyQ29uc3RhbnRzLnB1c2goeyB0aXRsZTogJ0ZBUScsIHNlY3Rpb25fbmFtZTogJ2ZhcV9ib3gnIH0pO1xuICB9XG4gIHJldHVybiBoZWFkZXJDb25zdGFudHM7XG59XG5cbmNvbnN0IEdTY3JvbGxFbGVtZW50Q29udGFpbmVyID0gZ2xhbW9yb3VzLmRpdih7XG4gIHpJbmRleDogOSxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICcmIC5hY3RpdmUgLnF1aWNrbGlua3NDb250YWluZXInOiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA2cHggIzk5OScsXG4gIH1cbn0pO1xuXG5jb25zdCBPdmVydmlldyA9ICh7IG92ZXJ2aWV3LCB0aXRsZSwgdHJhY2tTZWdtZW50LCBwbHBIZWFkaW5nLCBpc1JhdGluZ1NjaGVtYUVuYWJsZWQgfSkgPT4ge1xuICBjb25zdCBvdmVydmlld0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3ZlcnZpZXdTcGxpdCA9IG92ZXJ2aWV3LnNwbGl0KCcmbHQ7cmVhZG1vcmUmZ3Q7Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG93TW9yZVxuICAgICAgICB3cmFwVGV4dD17cGFyc2VyLnBhcnNlKG92ZXJ2aWV3U3BsaXRbMF0pfVxuICAgICAgICBtb3JlVGV4dD17cGFyc2VyLnBhcnNlKG92ZXJ2aWV3U3BsaXRbMV0pfVxuICAgICAgICB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcDE1IHNiY3cgYWJvdXQtZGVzdGluYXRpb24gb3ZlcnZpZXctY29udGVudFwiIHByb3BlcnR5PXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyAnZGVzY3JpcHRpb24nIDogJyd9PlxuICAgICAgICB7XG4gICAgICAgICAgcGxwSGVhZGluZyA/XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZjE2IGZ3OSBwYjE1XCI+e3RpdGxlfTwvaDE+IDogPGgyIGNsYXNzTmFtZT1cImYxNiBmdzkgcGIxNVwiPk92ZXJ2aWV3PC9oMj5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbW9yZS1ib3ggZHluYW1pY1RleHRJbmhlcml0XCI+XG4gICAgICAgICAge292ZXJ2aWV3Q29udGVudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbk92ZXJ2aWV3LnByb3BUeXBlcyA9IHtcbiAgb3ZlcnZpZXc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBwbHBIZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuT3ZlcnZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBvdmVydmlldzogJycsXG4gIHRpdGxlOiAnT3ZlcnZpZXcnLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9LFxuICBwbHBIZWFkaW5nOiAnJyxcbiAgaXNSYXRpbmdTY2hlbWFFbmFibGVkOiBmYWxzZVxufTtcblxuY29uc3Qgc3RhclRvSWQgPSB7XG4gIDI6ICczMicsXG4gIDM6ICc4JyxcbiAgNDogJzcnLFxuICA1OiAnNidcbn07XG5cbmNsYXNzIFBhY2thZ2VEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgYW5pbWF0aW9uUHJpY2U6IGZhbHNlLFxuICAgIGl0aW5lcmFyeURheVZhbHVlOiAwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7IHBhY2thZ2VEZXRhaWxzLCBmYXFzIH0gPSBwcm9wcztcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oZWFkZXJDb25zdGFudHMgPSBjcmVhdGVIZWFkZXJDb25zdGFudHMocGFja2FnZURldGFpbHMsIGZhcXMpO1xuICB9XG5cbiAgdXBkYXRlUHJpY2VDYWxsQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0aW9uUHJpY2U6IHRydWV9LCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYW5pbWF0aW9uUHJpY2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW5pbWF0aW9uUHJpY2U6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbiAgfTtcblxuICBzZXRJdGluZXJhcnlEYXkgPSAoZGF5KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IChkYXkgPT09IDApID8gJ2F1dG8nIDogJ2hpZGRlbic7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpdGluZXJhcnlEYXlWYWx1ZTogZGF5XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoJ2JlZ2luJywgKCkgPT4ge1xuICAgIH0pO1xuICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcignZW5kJywgKCkgPT4ge1xuICAgIH0pO1xuICAgIHNjcm9sbFNweS51cGRhdGUoKTtcbiAgICBjb25zdCBsYW5kaW5nX3V1aWQgPSBnZXRDb29raWUoTEFORElOR19VVUlEX0NPT0tJRV9LRVkpO1xuICAgIGNvbnN0IHBhZ2VfdXVpZCA9IGdldENvb2tpZShQQUdFX1VVSURfQ09PS0lFX0tFWSk7XG4gICAgaWYgKGxhbmRpbmdfdXVpZCA9PT0gcGFnZV91dWlkKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoSW5saW5lR2F0ZXdheXModGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscy5pZCwgdGhpcy5wcm9wcy5wYXJhbXMucGFja2FnZU5hbWUsIHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnkgfHwge30pO1xuICAgIH1cbiAgICBpbml0aWFsaXplRXhpdEludGVudCgpO1xuICB9O1xuXG4gIHN0YXRpYyBnZXRFeHBQcmljZShwa2cpIHtcbiAgICBjb25zdCB7IHRvdGFsX3ByaWNlLCBkaXNjb3VudGVkX3ByaWNlLCBtb250aF9vcHRpb25zOiB7IG1vbnRoX3JhbmdlcyB9LCBwcmljZTogeyBmcm9tLCBkaXNjb3VudCwgdG8gfSB9ID0gcGtnO1xuICAgIGNvbnN0IHByaWNlVG90YWwgPSBpbmZsYXRlUHJpY2UodG90YWxfcHJpY2UpO1xuICAgIGNvbnN0IGRpc2NvdW50ZWRQcmljZSA9IGluZmxhdGVQcmljZShkaXNjb3VudGVkX3ByaWNlKTtcbiAgICBsZXQgbW9udGhfcmFuZ2VzX25ldyA9IFsuLi5tb250aF9yYW5nZXNdO1xuICAgIG1vbnRoX3Jhbmdlc19uZXcgPSBtb250aF9yYW5nZXNfbmV3Lm1hcChtb250aCA9PiB7XG4gICAgICByZXR1cm4gey4uLm1vbnRoLFxuICAgICAgICBzdGFydF9wcmljZTogaW5mbGF0ZVByaWNlKG1vbnRoLnN0YXJ0X3ByaWNlKSxcbiAgICAgICAgZW5kX3ByaWNlOiBpbmZsYXRlUHJpY2UobW9udGguZW5kX3ByaWNlKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSBwa2cuc2VsZWN0ZWRNb250aE51bWJlciB8fCBnZXRDdXJyZW50TW9udGgoKSArIDE7XG5cbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBtb250aF9yYW5nZXNfbmV3LmZpbHRlcihlID0+IHtcbiAgICAgIHJldHVybiBlLmlkID09PSBzZWxlY3RlZE1vbnRoO1xuICAgIH0pWzBdO1xuXG4gICAgcmV0dXJuIHsuLi5wa2csXG4gICAgICB0b3RhbF9wcmljZTogcHJpY2VUb3RhbCxcbiAgICAgIGRpc2NvdW50ZWRfcHJpY2U6IGRpc2NvdW50ZWRQcmljZSxcbiAgICAgIG1vbnRoX29wdGlvbnM6IHtcbiAgICAgICAgbW9udGhfcmFuZ2VzOiBbLi4ubW9udGhfcmFuZ2VzX25ld10sXG4gICAgICAgIG9sZF9tb250aF9yYW5nZXM6IFsuLi5tb250aF9yYW5nZXNdXG4gICAgICB9LFxuICAgICAgcHJpY2U6IHtcbiAgICAgICAgLi4ucGtnLnByaWNlLFxuICAgICAgICBmcm9tOiBjdXJyZW50TW9udGguc3RhcnRfcHJpY2UsXG4gICAgICAgIHRvOiBjdXJyZW50TW9udGguZW5kX3ByaWNlLFxuICAgICAgICBkaXNjb3VudDogY3VycmVudE1vbnRoLmVuZF9wcmljZSAtIGN1cnJlbnRNb250aC5zdGFydF9wcmljZSxcbiAgICAgICAgdG90YWw6IGN1cnJlbnRNb250aC5lbmRfcHJpY2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldEV4cERhdGEgKGV4cGVyaW1lbnRJZCwgcGtnKSB7XG4gICAgc3dpdGNoIChleHBlcmltZW50SWQpIHtcbiAgICAgIGNhc2UgJ3ByMSc6IHtcbiAgICAgICAgcmV0dXJuIHsgLi4ucGtnLCBoaWRlRGlzY291bnQ6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3ByMic6IHtcbiAgICAgICAgY29uc3QgcGFja2FnZURldGFpbCA9IHsuLi5QYWNrYWdlRGV0YWlscy5nZXRFeHBQcmljZShwa2cpfTtcbiAgICAgICAgcmV0dXJuIHsgLi4ucGFja2FnZURldGFpbCwgaGlkZURpc2NvdW50OiB0cnVlICB9O1xuICAgICAgfVxuICAgICAgY2FzZSAnZGVmJzpcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHBrZztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBhY2thZ2VEZXRhaWxzID0gdGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscztcbiAgICBjb25zdCB7IHJlc291cmNlLCByZXBsYWNlU3RhdGUsIHRyYWNrTGVhZEZ1bm5lbENsaWNrLCB0aXRsZSwgbG9jYXRpb24sIGJhY2tVcmwsIGRldGFpbHNSZXNvdXJjZSxcbiAgICAgIGZvb3RlckxpbmtzLCBleHBlcmltZW50SWQsIGlzUmF0aW5nU2NoZW1hRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhY3RpdmVEZXRhaWxzID0ge307XG4gICAgY29uc3QgeyBpdGluZXJhcnlEYXlWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHBhY2thZ2VEZXRhaWxzID0gey4uLlBhY2thZ2VEZXRhaWxzLmdldEV4cERhdGEoZXhwZXJpbWVudElkLCBwYWNrYWdlRGV0YWlscyl9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGFjdGl2ZURldGFpbHMub3B0aW9uc0V4aXN0cyA9IChcbiAgICAgICAgcGFja2FnZURldGFpbHMucGFja2FnZV9vcHRpb25zLmhvdGVsX3ByaWNlX2RldGFpbHMubGVuZ3RoIHx8XG4gICAgICAgIHBhY2thZ2VEZXRhaWxzLm1vbnRoX29wdGlvbnMubW9udGhfcmFuZ2VzLmxlbmd0aFxuICAgICAgKTtcbiAgICAgIGFjdGl2ZURldGFpbHMuc3RhclJhdGluZyA9IHBhY2thZ2VEZXRhaWxzLnBhY2thZ2Vfb3B0aW9ucy5ob3RlbF9wcmljZV9kZXRhaWxzLmZpbHRlcihcbiAgICAgICAgZSA9PiBlLmlzX2NoZWNrZWRcbiAgICAgIClbMF0uaG90ZWxfc3RhcjtcbiAgICAgIGlmIChwYWNrYWdlRGV0YWlscy5zZWxlY3RlZE1vbnRoTnVtYmVyID4gMCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZE1vbnRocyA9IHBhY2thZ2VEZXRhaWxzLm1vbnRoX29wdGlvbnMubW9udGhfcmFuZ2VzXG4gICAgICAgICAgLmZpbHRlcihlID0+IGUuaWQgPT09IHBhY2thZ2VEZXRhaWxzLnNlbGVjdGVkTW9udGhOdW1iZXIpO1xuICAgICAgICBhY3RpdmVEZXRhaWxzLm1vbnRoID0gc2VsZWN0ZWRNb250aHMubGVuZ3RoID4gMCA/IHNlbGVjdGVkTW9udGhzWzBdLm1vbnRoX3ZhbHVlIDpcbiAgICAgICAgICBwYWNrYWdlRGV0YWlscy5tb250aF9vcHRpb25zLm1vbnRoX3Jhbmdlc1swXS5tb250aF92YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZURldGFpbHMubW9udGggPSBwYWNrYWdlRGV0YWlscy5kaXNwbGF5UmFuZ2UgJiYgcGFja2FnZURldGFpbHMucHJpY2UubW9udGggP1xuICAgICAgICAgIHBhY2thZ2VEZXRhaWxzLnByaWNlLm1vbnRoIDpcbiAgICAgICAgICBwYWNrYWdlRGV0YWlscy5tb250aF9vcHRpb25zLm1vbnRoX3Jhbmdlcy5maW5kKGUgPT4gZS5pZCA9PT0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSkubW9udGhfdmFsdWUuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgLy8gVE9ETzogTWFudmVuZHJhLCB0aGlzIG1vbnRoIGNhbGN1bGF0aW9uIGlzIHJlbGF0ZWQgd2l0aCByZWR1Y2Vycy9wYWNrYWdlcy9kZXRhaWxzLmpzOjExNyBUT0RPIGl0ZW0uXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBhY3RpdmVEZXRhaWxzLm9wdGlvbnNFeGlzdHMgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZURldGFpbHMuc3RhclJhdGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIGFjdGl2ZURldGFpbHMubW9udGggPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogVWdseSBjb2RlLiBIYW5kbGUgaXQgZGlmZmVyZW50bHlcbiAgICBsZXQgdG9EZXN0aW5hdGlvbiA9ICcnO1xuICAgIHRyeSB7XG4gICAgICB0b0Rlc3RpbmF0aW9uID0gcGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zWzBdLm5hbWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdG9EZXN0aW5hdGlvbiA9ICcnO1xuICAgIH1cbiAgICBjb25zdCBpbmxpbmVHYXRld2F5ID0gcGFja2FnZURldGFpbHMuaW5saW5lR2F0ZXdheTtcbiAgICBjb25zdCBhZGRpdGlvbmFsSW5mb1RleHQgPSBgVHJhdmVsZXIgaGFzIGV4cHJlc3NlZCBpbnRlcmVzdCBpbiAke3BhY2thZ2VEZXRhaWxzLmRheXN9IERheXMgLCAke3BhY2thZ2VEZXRhaWxzLm5pZ2h0c30gbmlnaHRzIHdpdGggY2l0aWVzICR7cGFja2FnZURldGFpbHMuY2l0aWVzfS4gRm9yIG1vcmUgZGV0YWlscywgc2VlIHRoZSA8YSBocmVmPScvcGFja2FnZXMvJHtwYWNrYWdlRGV0YWlscy5zZXRfdXJsfSc+bGluazwvYT5gO1xuICAgIGNvbnN0IGN0YVRleHQgPSAnQ3VzdG9taXplICYgR2V0IFF1b3Rlcyc7XG4gICAgY29uc3QgcGFja2FnZVR5cGUgPSBwYWNrYWdlRGV0YWlscy50aXRsZXMub3ZlcnZpZXcudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpc0RlYWwgPSBwYWNrYWdlVHlwZSA9PT0gJ2RlYWxzJztcbiAgICBjb25zdCBpc0x1eHVyeSA9IHBhY2thZ2VUeXBlID09PSAnbHV4dXJ5JztcbiAgICBjb25zdCB0cmFja0xlYWRGdW5uZWwgPSAoKSA9PiB7XG4gICAgICBzZXRDb29raWUoJ3BhY2thZ2VfaWRfbGVhZF9mdW5uZWwnLCBwYWNrYWdlRGV0YWlscy5pZCk7XG4gICAgICBjb25zdCBzZWN0aW9uID0gJ0dldCBRdW90ZXMgQnV0dG9uJztcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gYERlc3RpbmF0aW9uOiR7dG9EZXN0aW5hdGlvbn1gO1xuICAgICAgdHJhY2tMZWFkRnVubmVsQ2xpY2soe1xuICAgICAgICBmdW5uZWxTdGVwOiAxLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgY3RhOiBjdGFUZXh0LFxuICAgICAgICBwYWNrYWdlSWQ6IHBhY2thZ2VEZXRhaWxzLmlkLFxuICAgICAgICBkZXN0aW5hdGlvbklEOiBwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnNbMF0uaWRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB0cmFja1NlZ21lbnRFdmVudCA9IChldmVudCwgY2F0ZWdvcnksIGN0YSkgPT4ge1xuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBzZWN0aW9uOiBgUGFja2FnZSBEZXRhaWxzOiR7Y2F0ZWdvcnl9YCxcbiAgICAgICAgb2JqZWN0OiAnJyxcbiAgICAgICAgY3RhOiBjdGEsXG4gICAgICAgIHZhbHVlOiBwYWNrYWdlRGV0YWlscy50b3RhbF9wcmljZSxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICBsYWJlbDogYERlc3RpbmF0aW9uOiR7cGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zWzBdLm5hbWV9OjpEYXlzOiR7cGFja2FnZURldGFpbHMuZGF5c306OlxuICAgICAgICBNb250aDoke3BhY2thZ2VEZXRhaWxzLnNlbGVjdGVkTW9udGhOdW1iZXJ9OjpIb3RlbDonJ2AsXG4gICAgICAgIGRlc3RpbmF0aW9uX2lkOiBwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnNbMF0uaWQsXG4gICAgICAgIHBhY2thZ2VfaWQ6IHBhY2thZ2VEZXRhaWxzLmlkXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXhpdERpdiA9IDxkaXYgaWQ9XCJyZWFjdEV4aXRJbnRlbnRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWt0LW1vYi1leGl0LWludGVudCBtYjggcm93IHJvdy0gbWI4IHJlbGF0aXZlXCIgb25DbGljaz17c2hvd1BvcFVwfSAvPjtcblxuICAgIGxldCBkZWFsbkx1eHVyeSA9IHt9O1xuICAgIGlmIChpc0RlYWwgfHwgaXNMdXh1cnkpIHtcbiAgICAgIGRlYWxuTHV4dXJ5ID0ge1xuICAgICAgICBwcmljZTogcGFja2FnZURldGFpbHMudG90YWxfcHJpY2UsXG4gICAgICAgIGlzRmxpZ2h0OiAhIXBhY2thZ2VEZXRhaWxzLmluY2x1c2lvbnMuZmlsdGVyKChpbmMpID0+IGluYy5rZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2ZsaWdodHMnKS5sZW5ndGgsXG4gICAgICAgIHN0YXJSYXRpbmc6IHBhY2thZ2VEZXRhaWxzLnBhY2thZ2Vfb3B0aW9ucy5ob3RlbF9wcmljZV9kZXRhaWxzWzBdLmhvdGVsX3N0YXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTY3JvbGxQZXJjZW50YWdlPlxuICAgICAgICA8R1Njcm9sbEVsZW1lbnRDb250YWluZXI+XG4gICAgICAgICAgPFN0aWNreSBlbmFibGVkPXt0cnVlfSB0b3A9ezB9IGlubmVyWj17NH0+XG4gICAgICAgICAgICA8UXVpY2tMaW5rTmF2XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuaGVhZGVyQ29uc3RhbnRzfVxuICAgICAgICAgICAgICBTY3JvbGxMaW5rPXtzY3JvbGxMaW5rfVxuICAgICAgICAgICAgICBkZWFsc0luZm89e3BhY2thZ2VEZXRhaWxzLnRpdGxlc31cbiAgICAgICAgICAgICAgdHJhY2tMZWFkRnVubmVsQ2xpY2s9e3RyYWNrTGVhZEZ1bm5lbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdGlja3k+XG4gICAgICAgIDwvR1Njcm9sbEVsZW1lbnRDb250YWluZXI+XG4gICAgICAgIDxQYWNrYWdlU2xpZGVyXG4gICAgICAgICAgaW1hZ2VzPXtwYWNrYWdlRGV0YWlscy5zbGlkZXJfcGljfVxuICAgICAgICAgIG5hbWU9e3BhY2thZ2VEZXRhaWxzLm5hbWV9XG4gICAgICAgICAgY292ZXJzPXtwYWNrYWdlRGV0YWlscy5jb3ZlcnN9XG4gICAgICAgICAgZGVhbHNJbmZvPXtwYWNrYWdlRGV0YWlscy50aXRsZXN9XG4gICAgICAgICAgcHJpY2U9e3BhY2thZ2VEZXRhaWxzLnByaWNlfVxuICAgICAgICAgIGlzRGVhbD17aXNEZWFsfVxuICAgICAgICAgIGlzTHV4dXJ5PXtpc0x1eHVyeX1cbiAgICAgICAgICBoaWRlRGlzY291bnQ9e3BhY2thZ2VEZXRhaWxzLmhpZGVEaXNjb3VudH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmM1IG92ZXJmbG93aFwiPlxuICAgICAgICAgIDxQYWNrYWdlRGV0YWlsc1ByaWNlIGhvdGVscz17cGFja2FnZURldGFpbHMuaG90ZWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYWxzSW5mbz17cGFja2FnZURldGFpbHMudGl0bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrZz17cGFja2FnZURldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWFsPXtpc0RlYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMdXh1cnk9e2lzTHV4dXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZT17dGhpcy5wcm9wcy51cGRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVzaFN0YXRlPXt0aGlzLnByb3BzLnB1c2hTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE1vbnRoPXt0aGlzLnByb3BzLnNlbGVjdGVkTW9udGggfHwgMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZE1vbnRoPXt0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkTW9udGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJpY2VDYWxsQmFjaz17dGhpcy51cGRhdGVQcmljZUNhbGxCYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblByaWNlPXt0aGlzLnN0YXRlLmFuaW1hdGlvblByaWNlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbmxpbmVHYXRld2F5ID9cbiAgICAgICAgICAgICAgPElubGluZUdhdGV3YXlcbiAgICAgICAgICAgICAgICB0aXRsZT17aW5saW5lR2F0ZXdheS50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbj17aW5saW5lR2F0ZXdheS5kZXN0aW5hdGlvbn1cbiAgICAgICAgICAgICAgICB0cmlwX3R5cGU9e2lubGluZUdhdGV3YXkudHJpcF90eXBlfVxuICAgICAgICAgICAgICAgIHBhY2thZ2VfZmlsdGVycz17aW5saW5lR2F0ZXdheS5wYWNrYWdlX2ZpbHRlcnN9Lz46IG51bGxcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgICAgICA8RWxlbWVudCBuYW1lPVwib3ZlcnZpZXdfYm94XCI+XG4gICAgICAgICAgICA8T3ZlcnZpZXdcbiAgICAgICAgICAgICAgb3ZlcnZpZXc9e3BhY2thZ2VEZXRhaWxzLm92ZXJ2aWV3fVxuICAgICAgICAgICAgICB0aXRsZT17cGFja2FnZURldGFpbHMuaGVhZGluZ31cbiAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgcGxwSGVhZGluZz17cGFja2FnZURldGFpbHMucGxwX2hlYWRpbmd9XG4gICAgICAgICAgICAgIGlzUmF0aW5nU2NoZW1hRW5hYmxlZD17aXNSYXRpbmdTY2hlbWFFbmFibGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRWxlbWVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cGFja2FnZURldGFpbHMuaGlnaGxpZ2h0cyAmJiBwYWNrYWdlRGV0YWlscy5oaWdobGlnaHRzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxIaWdobGlnaHRzIGxpc3Q9e3BhY2thZ2VEZXRhaWxzLmhpZ2hsaWdodHN9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8RWxlbWVudCBuYW1lPVwiaXRpbmVyYXJ5X2JveFwiIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgICAgPEl0aW5lcmFyeVxuICAgICAgICAgICAgICBpdGluZXJhcnk9e3BhY2thZ2VEZXRhaWxzLml0aW5lcmFyeX1cbiAgICAgICAgICAgICAgdGl0bGVIZWFkPSdJdGluZXJhcnknXG4gICAgICAgICAgICAgIGlkPXtwYWNrYWdlRGV0YWlscy5pZH1cbiAgICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgICByZXBsYWNlU3RhdGU9e3JlcGxhY2VTdGF0ZX1cbiAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgcGFja2FnZURldGFpbHM9e3BhY2thZ2VEZXRhaWxzfVxuICAgICAgICAgICAgICBzZXRJdGluZXJhcnlEYXk9e3RoaXMuc2V0SXRpbmVyYXJ5RGF5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0VsZW1lbnQ+XG5cbiAgICAgICAgICA8ZGl2IGlkPVwiaXRpbmVyYXJ5X3NlY3Rpb25fZGV0YWlsXCIgY2xhc3NOYW1lPXtpdGluZXJhcnlEYXlWYWx1ZSAmJiBpdGluZXJhcnlEYXlWYWx1ZSA8PSBwYWNrYWdlRGV0YWlscy5pdGluZXJhcnkubGVuZ3RoID9cbiAgICAgICAgICAgIFwicm93IHJvdy0gejEwIGZpeGVkIHdmdWxsIGhmdWxsIHQwIGwwIG92ZXJmbG93YSBwYjY0IHNiY3dcIiA6IFwiaGlkZVwifT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFja2FnZURldGFpbHMuaXRpbmVyYXJ5Lm1hcCgoaXRpbmVyYXJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8UGFja2FnZURldGFpbERheUl0aW5lcmFyeVxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlU3RhdGU9e3JlcGxhY2VTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgcGFja2FnZURldGFpbHM9e3BhY2thZ2VEZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICBkYXk9e2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgaXRpbmVyYXJ5PXtpdGluZXJhcnl9XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlPXtkZXRhaWxzUmVzb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgIHNldEl0aW5lcmFyeURheT17dGhpcy5zZXRJdGluZXJhcnlEYXl9XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWN0aW9uPXtpbmRleCArIDEgPT09IGl0aW5lcmFyeURheVZhbHVlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEVsZW1lbnQgbmFtZT1cImhvdGVsX2JveFwiIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgICAgPEhvdGVsRmxpZ2h0XG4gICAgICAgICAgICAgIGhvdGVscz17cGFja2FnZURldGFpbHMuaG90ZWxzfVxuICAgICAgICAgICAgICBob3RlbFRpdGxlPSdIb3RlbCdcbiAgICAgICAgICAgICAgZmxpZ2h0cz17cGFja2FnZURldGFpbHMuZmxpZ2h0c31cbiAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgaW5jbHVzaW9ucz17cGFja2FnZURldGFpbHMuaW5jRXhjLmluY2x1c2lvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRWxlbWVudD5cbiAgICAgICAgICA8RWxlbWVudCBuYW1lPVwiaW5jZXhjbHVzaW9uX2JveFwiIGNsYXNzTmFtZT1cIm1iOCBcIj5cbiAgICAgICAgICAgIDxJbmNFeGNsdXNpb25cbiAgICAgICAgICAgICAgaW5jbHVzaW9ucz17cGFja2FnZURldGFpbHMuaW5jbHVzaW9uX3RleHR9XG4gICAgICAgICAgICAgIGV4Y2x1c2lvbnM9e3BhY2thZ2VEZXRhaWxzLmV4Y2x1c2lvbl90ZXh0fVxuICAgICAgICAgICAgICB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudEV2ZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0VsZW1lbnQ+XG5cbiAgICAgICAgICB7ZXhpdERpdn1cbiAgICAgICAgICB7IGZvb3RlckxpbmtzLmxlbmd0aCA/IDxJbnRlcmxpbmtpbmcgZm9vdGVyTGlua3M9e2Zvb3RlckxpbmtzfS8+IDogbnVsbH1cblxuICAgICAgICAgIDxFbGVtZW50IG5hbWU9XCJmYXFfYm94XCIgY2xhc3NOYW1lPVwicm93IHJvdy0gcGI4IHNiYzVcIj5cbiAgICAgICAgICAgIDxGYXFcbiAgICAgICAgICAgICAgZmFxcz17dGhpcy5wcm9wcy5mYXFzfVxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMucGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zWzBdXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aXRsZT0nRkFRJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0VsZW1lbnQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGIwIGwwIHIwIHo0IHA4IHNiY3cgYnM0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IHBsMCBwcjhcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpLWxhcmdlIHBsMTUgcHIxNSB3ZnVsbCByaXBwbGVcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZWw6ODQ0IDg0NCA5Mjg3XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbGwgVXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy04IHByMCBwbDBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdldFBhY2thZ2VEYXRhKGRlYWxuTHV4dXJ5KX0+XG4gICAgICAgICAgICAgIDxGb3JtT25lQ1RBXG4gICAgICAgICAgICAgICAgdGFnPXtwYWNrYWdlVHlwZX1cbiAgICAgICAgICAgICAgICBydFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICB0b19sb2M6IHRvRGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgICB0cmlwX2RheXM6IHBhY2thZ2VEZXRhaWxzLmRheXMudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIGFkZHRsX2luZm86IGFkZGl0aW9uYWxJbmZvVGV4dCxcbiAgICAgICAgICAgICAgICAgIHBhY2thZ2VJZDogcGFja2FnZURldGFpbHMuaWQsXG4gICAgICAgICAgICAgICAgICBwYWdlOiAnUGFja2FnZSBMaXN0IFBhZ2UnLFxuICAgICAgICAgICAgICAgICAgc2VjdGlvbjogJ1BhY2thZ2UgTGlzdCcsXG4gICAgICAgICAgICAgICAgICBjdGE6IGlzRGVhbCA/ICdDaGVjayBBdmFpbGFiaWxpdHknIDogY3RhVGV4dCxcbiAgICAgICAgICAgICAgICAgIG9iamVjdDogYFBhY2thZ2UvJHtwYWNrYWdlRGV0YWlscy5pZH1gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXt0cmFja0xlYWRGdW5uZWx9XG4gICAgICAgICAgICAgICAgZGVhbHM9e2lzRGVhbCB8fCBpc0x1eHVyeX1cbiAgICAgICAgICAgICAgICBidWRnZXQ9e3BhY2thZ2VEZXRhaWxzLmRpc2NvdW50ZWRfcHJpY2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsIHBsOCBwcjggY3VzdG9taXplZC12YXJpYXRpb25cIiBkYXRhLW9iaj17SlNPTi5zdHJpbmdpZnkoe3RvX2xvYzogdG9EZXN0aW5hdGlvbiwgdHJpcF9kYXlzOiBwYWNrYWdlRGV0YWlscy5kYXlzLnRvU3RyaW5nKCl9KX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmVcIiAvPlxuICAgICAgICAgICAgICAgICAge2lzRGVhbCA/ICdDaGVjayBBdmFpbGFiaWxpdHknIDogY3RhVGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtT25lQ1RBPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TY3JvbGxQZXJjZW50YWdlPlxuICAgICk7XG4gIH1cbn1cblxuUGFja2FnZURldGFpbHMucHJvcFR5cGVzID0ge1xuICBwYWNrYWdlRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByZXNvdXJjZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByZXBsYWNlU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgZmFxczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXBkYXRlU2VsZWN0ZWRNb250aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcHVzaFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZE1vbnRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmZXRjaElubGluZUdhdGV3YXlzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmFja1VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2V0UGFja2FnZURhdGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRldGFpbHNSZXNvdXJjZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmb290ZXJMaW5rczogUHJvcFR5cGVzLmFycmF5LFxuICBleHBlcmltZW50SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzUmF0aW5nU2NoZW1hRW5hYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblBhY2thZ2VEZXRhaWxzLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhY2tMZWFkRnVubmVsQ2xpY2s6ICgpID0+IHt9LFxuICBleHBlcmltZW50SWQ6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlRGV0YWlscztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhY2thZ2UtZGV0YWlsLWNvbnRhaW5lci1uZXctdWlcIjogXCJfMmxaYnJcIixcblx0XCJyZWFkLW1vcmUtYnV0dG9uXCI6IFwiXzNBMVBqXCIsXG5cdFwiZGF5cy1jb3VudFwiOiBcIl9DRGRvRlwiLFxuXHRcIml0aW5lcmFyeS1jb250YWluZXJcIjogXCJfZUN2ZFZcIixcblx0XCJpdGluZXJhcnktY29udGFpbmVyLWJveFwiOiBcIl8xZ1lxWlwiLFxuXHRcIml0aW5lcmFyeS1jb250YWluZXItc21hbGxcIjogXCJfMzJ4Y1BcIixcblx0XCJpdGktcmFkaW9cIjogXCJfMl9QcU5cIixcblx0XCJjaGVja2JveC1jb21tb25cIjogXCJfM1Q1OEVcIixcblx0XCJyYWRpby1jb21tb24tcm91bmRcIjogXCJfMk1LUUhcIixcblx0XCJoZWFkZXItdGl0bGVcIjogXCJfM2lhaXZcIixcblx0XCJwYWNrYWdlLXNsaWRlci1pbWdcIjogXCJfM0tXZ0pcIixcblx0XCJkYXlzLXRhZ1wiOiBcIl83VXVTR1wiLFxuXHRcInN3aXBlci1idXR0b24tbmV4dFwiOiBcIl9NazVXQVwiLFxuXHRcInN3aXBlci1idXR0b24tcHJldlwiOiBcIl9lb1B6MVwiLFxuXHRcInN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbFwiOiBcIl9oRzQ4ZlwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHNcIjogXCJfM1NlMnhcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRcIjogXCJfMnlXNHRcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCI6IFwiX2JvTHNUXCIsXG5cdFwiaXRpbmVyYXJ5LWxpc3QtYm94XCI6IFwiXzJDcVdNXCIsXG5cdFwiZjE0cFwiOiBcIl91S0lCMVwiLFxuXHRcInF1ZXN0aW9uLW1hcmtcIjogXCJfM3Q1NEVcIixcblx0XCJwYWNrYWdlLXNsaWRlci1jYXB0aW9uXCI6IFwiXzJwTGw2XCIsXG5cdFwicGFja2FnZXMtZGF5LWNvdW50XCI6IFwiXzNCQU5SXCIsXG5cdFwiZGlzY291bnQtcmliYm9uXCI6IFwiXzJEYUViXCIsXG5cdFwicGFja2FnZS1jaXRpZXMtbGlzdFwiOiBcIl8xZ2h0NVwiLFxuXHRcInJlY29tbWVuZGVkLWljb24tY29udGFpbmVyXCI6IFwiXzhscmUxXCIsXG5cdFwiZHluYW1pY1RleHRJbmhlcml0XCI6IFwiX3g4Ukt0XCIsXG5cdFwiaXRpbmVyYXJ5LWRheXMtZmxhZ1wiOiBcIl8yNy1xVFwiLFxuXHRcIm5vdGVcIjogXCJfM3Nab2VcIixcblx0XCJob3RlbC1jYXJkXCI6IFwiXzFvUG03XCIsXG5cdFwiYm94LXdpdGgtbGF5ZXJcIjogXCJfMkktZndcIixcblx0XCJob3RlbC1jYXJvdXNlbC13cmFwcGVyXCI6IFwiXzM3ZGdQXCIsXG5cdFwic3dpcGVyLXdyYXBwZXJcIjogXCJfdkhOSnJcIixcblx0XCJ0cmF2ZWxlci1yYXRpbmctc3Rhci1saXN0XCI6IFwiXy1WVmhrXCIsXG5cdFwiaXRpbmVyYXJ5LWltYWdlcy1jb250YWluZXJcIjogXCJfMWRKaWhcIixcblx0XCJob3RlbC1pbWdcIjogXCJfMmtUcDJcIixcblx0XCJob3RlbC1kYXRhLWJveC10YWdzXCI6IFwiXzJKVWdnXCIsXG5cdFwiaG90ZWwtZGF0YS1ib3hcIjogXCJfM1Fvd2JcIixcblx0XCJlbGxpcHNpcy10d29cIjogXCJfMW1fWlJcIixcblx0XCJpdGluZXJhcnktdGFncy1ib3gtaXRlbVwiOiBcIl8zc1hqOVwiLFxuXHRcImRpdmlkZXItbGluZVwiOiBcIl8xRGlVaFwiLFxuXHRcImluY2wtZXhjbC1saXN0XCI6IFwiXzFEcGdUXCIsXG5cdFwiZXhjbC1saXN0XCI6IFwiXzM2QUZMXCIsXG5cdFwic3dpcGVyLXNsaWRlXCI6IFwiXzF3cmpxXCIsXG5cdFwiaGlnaGxpZ2h0LWRlYWxzLWJhbm5lclwiOiBcIl8zN1oxNlwiLFxuXHRcImRlYWwtcGFja2FnZVwiOiBcIl9xYjZrZVwiLFxuXHRcImJhY2stYXJyb3dcIjogXCJfMWlnZWtcIixcblx0XCJpbmMtZXhjLWJ1dHRvblwiOiBcIl8xeGhjcFwiLFxuXHRcImhlYWRpbmctY29tbW9uLWNlbnRlclwiOiBcIl8zRUpBNlwiLFxuXHRcImJvdHRvbS1ib3JkZXJcIjogXCJfMjBWQVZcIixcblx0XCJmYXEtYm94XCI6IFwiXzFXRnVRXCIsXG5cdFwiZmFxLXF1ZXN0aW9uXCI6IFwiXzE3V3RMXCIsXG5cdFwicmVhZC1tb3JlLWJveFwiOiBcIl8xY2hCMlwiLFxuXHRcInJlYWQtbW9yZS1zdGF0ZVwiOiBcIl8ybFlaTVwiLFxuXHRcInJlYWQtbW9yZS13cmFwXCI6IFwiXzE4Y1k5XCIsXG5cdFwidHJhdmVsbGVyLW5ldy11aVwiOiBcIl8zRFNEWFwiLFxuXHRcInJldmlldy1jb24tbWFpblwiOiBcIl8xWmo0QlwiLFxuXHRcInJldmlldy13cmFwcGVyXCI6IFwiXzMwdDhtXCIsXG5cdFwidHJhdmVsZXItaW1nLWRldGFpbHNcIjogXCJfM21ibk1cIixcblx0XCJzd2lwZXItcGFnaW5hdGlvblwiOiBcIl8yRVp4TFwiLFxuXHRcImFuaW1hdGVkXCI6IFwiXzZ0Zk03XCIsXG5cdFwic2hha2VcIjogXCJfdURiMTRcIixcblx0XCJpdGluZXJhcnktZGV0YWlscy1wb3B1cFwiOiBcIl8yYjdtSVwiLFxuXHRcInNpbWlsYXItcGFja2FnZXMtbmV3LXVpXCI6IFwiXzNmRlZfXCIsXG5cdFwicm93XCI6IFwiXzMwUlM3XCIsXG5cdFwicm93LVwiOiBcIl8xb3I3VFwiLFxuXHRcInBsOFwiOiBcIl8yN2FTcVwiLFxuXHRcInByOFwiOiBcIl8zSWdzeVwiLFxuXHRcInB0MTVcIjogXCJfdy1TZHJcIixcblx0XCJwYjhcIjogXCJfMU9vX0dcIixcblx0XCJzYmN3XCI6IFwiXzNfQ0RrXCIsXG5cdFwicmVjZW50LXBhY2thZ2VzLW5ldy11aVwiOiBcIl9QR2RyNVwiLFxuXHRcInAxNVwiOiBcIl8xOV9zTlwiLFxuXHRcIm04XCI6IFwiXzJTNmhYXCIsXG5cdFwibXQwXCI6IFwiXzNnV051XCIsXG5cdFwiYWJvdXQtZGVzdGluYXRpb25cIjogXCJfM19naW9cIixcblx0XCJvdmVydmlldy1jb250ZW50XCI6IFwiXzJLZjlCXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuaW1wb3J0IFNob3dNb3JlIGZyb20gJy4uL0dlbmVyaWMvU2hvd01vcmUnO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IHJlbmRlckZvb3RlckFib3ZlVGV4dCA9IChmb290ZXJTZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGZvb3RlckFib3ZlVGV4dCA9IGZvb3RlclNlY3Rpb24uZm9vdGVyX2Fib3ZlX3RleHRcbiAgICAucmVwbGFjZSgvJmx0O2ltZyguKj8pJmd0Oy9nbSwgKG0sIGNvbnRlbnQpID0+IHtcbiAgICAgIHJldHVybiBgPGltZyBkYXRhLWRlZmVyLWxvYWQ9XCJ0cnVlXCIgJHtjb250ZW50fT5gO1xuICAgIH0pXG4gICAgLnNwbGl0KCcmbHQ7cmVhZG1vcmUmZ3Q7Jyk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2hvd01vcmVcbiAgICAgIHdyYXBUZXh0PXtwYXJzZXIucGFyc2UoZm9vdGVyQWJvdmVUZXh0WzBdKX1cbiAgICAgIG1vcmVUZXh0PXtwYXJzZXIucGFyc2UoZm9vdGVyQWJvdmVUZXh0WzFdKX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgUGFja2FnZURldGFpbHNGb290ZXIgPSAoeyBmb290ZXJTZWN0aW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwMTUgc2Jjd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbW9yZS1ib3ggZHluYW1pY1RleHRJbmhlcml0XCIgPlxuICAgICAgICAgIHsgcmVuZGVyRm9vdGVyQWJvdmVUZXh0KGZvb3RlclNlY3Rpb24pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhY2thZ2VEZXRhaWxzRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgZm9vdGVyU2VjdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZURldGFpbHNGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBhY2thZ2VQcmljZSBmcm9tICcuL1BhY2thZ2VQcmljZSc7XG5pbXBvcnQgUGFja2FnZURheXNEaXNjb3VudCBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZURheXNEaXNjb3VudCc7XG5pbXBvcnQgUGFja2FnZUNpdGllcyBmcm9tICcuL1BhY2thZ2VDaXRpZXMnO1xuaW1wb3J0IFBhY2thZ2VJbmNFeGMgZnJvbSAnY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VJbmNFeGMnO1xuaW1wb3J0IFN0YXJNb250aEZpbHRlciBmcm9tICdjb21wb25lbnRzL1BhY2thZ2VEZXRhaWxzL1N0YXJNb250aEZpbHRlcic7XG5cbmNvbnN0IFBhY2thZ2VEZXRhaWxzUHJpY2UgPSAoeyBwa2csIGRlYWxzSW5mbywgaXNEZWFsLCBpc0x1eHVyeSwgdXBkYXRlLCBwdXNoU3RhdGUsIHNlbGVjdGVkTW9udGgsIHVwZGF0ZVNlbGVjdGVkTW9udGgsIHVwZGF0ZVByaWNlQ2FsbEJhY2ssIGFuaW1hdGlvblByaWNlfSkgPT4ge1xuICBjb25zdCB7IHBhY2thZ2Vfb3B0aW9ucywgaGlkZURpc2NvdW50IH0gPSBwa2c7XG4gIGNvbnN0IHsgaG90ZWxfcHJpY2VfZGV0YWlscyB9ID0gcGFja2FnZV9vcHRpb25zO1xuICBjb25zdCBob3RlbFJhdGluZ3MgPSBob3RlbF9wcmljZV9kZXRhaWxzLm1hcChob3RlbCA9PiBob3RlbC5ob3RlbF9zdGFyKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGNvbnN0IGZpbHRlcmVkSG90ZWxSYXRpbmdzID0gaG90ZWxSYXRpbmdzLnJlZHVjZSgodW5pcXVlLCBpdGVtKSA9PiB1bmlxdWUuaW5jbHVkZXMoaXRlbSkgPyB1bmlxdWUgOiBbLi4udW5pcXVlLCBpdGVtXSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYjggc2Jjd1wiPlxuICAgICAge1xuICAgICAgICBpc0RlYWwgfHwgaXNMdXh1cnkgPyBudWxsIDo8U3Rhck1vbnRoRmlsdGVyXG4gICAgICAgICAgdXBkYXRlPXt1cGRhdGV9XG4gICAgICAgICAgcHVzaFN0YXRlPXtwdXNoU3RhdGV9XG4gICAgICAgICAgc2VsZWN0ZWRNb250aD17c2VsZWN0ZWRNb250aCB8fCAwfVxuICAgICAgICAgIHBhY2thZ2VEZXRhaWxzPXtwa2d9XG4gICAgICAgICAgdXBkYXRlU2VsZWN0ZWRNb250aD17dXBkYXRlU2VsZWN0ZWRNb250aH1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwMTVcIj5cbiAgICAgICAgPFBhY2thZ2VDaXRpZXMgY2l0aWVzPXtwa2cuY2l0eV9saXN0X3dpdGhfZGF5cyB8fCB7fX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgcGI0IHB0MCBzYmN3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBtYjgnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgZnc5IHNiY28nPlxuICAgICAgICAgICAgICB7cGtnLmNvdmVycy5kYXlzfSBEYXlzICYge3BrZy5jb3ZlcnMubmlnaHRzfSBOaWdodHNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIHsgKGlzRGVhbCB8fCBpc0x1eHVyeSkgJiYgcGtnLmhvdGVscy5sZW5ndGggP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlcic+PHNwYW4gY2xhc3NOYW1lPSdtbDUgbXI1IGlibG9jayc+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXIgYXRfaG90ZWxzdGFyJz5cbiAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEhvdGVsUmF0aW5ncy5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmMTIgZnc0IG1sNSc+U3RhciBIb3RlbHMgSW5jbHVkZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGFsaWduQ2VudGVyIHBsMCBjb2wteHMtMTIgcHIwYH0+XG4gICAgICAgICAgICA8UGFja2FnZVByaWNlXG4gICAgICAgICAgICAgIHByaWNlPXtwa2cucHJpY2UudG90YWx9XG4gICAgICAgICAgICAgIHByaWNlVW5pdD17cGtnLnByaWNlLm1pbmlEZXNjfVxuICAgICAgICAgICAgICBjdXJyZW5jeT17cGtnLnByaWNlLmN1cnJlbmN5fVxuICAgICAgICAgICAgICBkaXNjb3VudD17cGtnLnByaWNlLmRpc2NvdW50fVxuICAgICAgICAgICAgICBwcmljZUZyb209e3BrZy5wcmljZS5mcm9tfVxuICAgICAgICAgICAgICBwcmljZVRvPXtwa2cucHJpY2UudG99XG4gICAgICAgICAgICAgIGRlYWxzSW5mbz17aXNEZWFsIHx8IGlzTHV4dXJ5fVxuICAgICAgICAgICAgICBkYXlzPXtwa2cuY292ZXJzLmRheXN9XG4gICAgICAgICAgICAgIG5pZ2h0cz17cGtnLmNvdmVycy5uaWdodHN9XG4gICAgICAgICAgICAgIGFuaW1hdGlvblByaWNlPXthbmltYXRpb25QcmljZX1cbiAgICAgICAgICAgICAgaGlkZURpc2NvdW50PXtoaWRlRGlzY291bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcDAnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpc0RlYWwgJiYgZGVhbHNJbmZvLml0aW5lcmFyeSA/XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgbXQ4Jz48c3Ryb25nPlZhbGlkaXR5OiA8L3N0cm9uZz4ge2RlYWxzSW5mby5pdGluZXJhcnl9PC9wPiA6XG4gICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlci1saW5lXCI+PC9zcGFuPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnc5IGZ3OSBtdDE1IG1iMTVcIj5QcmljZSBJbmNsdXNpdmUgb2Y8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpbmNsdXNpb24taGVpZ2h0LWJveFwiPlxuICAgICAgICAgIDxQYWNrYWdlSW5jRXhjIGluY2x1c2lvbnM9e3BrZy5pbmNsdXNpb25zfSBpZD17YGRldGFpbHNfJHtwa2cuaWR9YH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhY2thZ2VEZXRhaWxzUHJpY2UucHJvcFR5cGVzID0ge1xuICBwa2c6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGVhbHNJbmZvOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEZWFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNMdXh1cnk6IFByb3BUeXBlcy5ib29sLFxuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZE1vbnRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICB1cGRhdGVTZWxlY3RlZE1vbnRoOiBQcm9wVHlwZXMuZnVuYyxcbiAgdXBkYXRlUHJpY2VDYWxsQmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGFuaW1hdGlvblByaWNlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZURldGFpbHNQcmljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlYWxzSW5mbzogZmFsc2UsXG4gIGlzRGVhbDogZmFsc2UsXG4gIGlzTHV4dXJ5OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZURldGFpbHNQcmljZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRQZXJjZW50YWdlLCBwYXJzZVByaWNlIH0gZnJvbSAndXRpbHMvcGFyc2Vycyc7XG5pbXBvcnQgUGFja2FnZURheXNEaXNjb3VudCBmcm9tICcuL1BhY2thZ2VEYXlzRGlzY291bnQnO1xuXG5jb25zdCBQYWNrYWdlUHJpY2UgPSAoeyBwcmljZVVuaXQsIHByaWNlLCBkaXNjb3VudCwgY3VycmVuY3ksIHByaWNlRnJvbSwgcHJpY2VUbywgZGVhbHNJbmZvLCBkYXlzLCBuaWdodHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25QcmljZSwgaGlkZURpc2NvdW50IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBmbGV4IHdmdWxsXCI+XG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMCBwZmM0IHBiNSBmdzRcIj5TdGFydGluZyBmcm9tOjwvcD5cbiAgICAgIDxoNCBjbGFzc05hbWU9e2Ake2FuaW1hdGlvblByaWNlID8gJ2FuaW1hdGVkIHNoYWtlJzonJ30gcGFja2FnZS1wcmljZSBzZmMzIGZ3NyBmMjQgcGIwYH0+XG4gICAgICAgIHtcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3BhcnNlUHJpY2UoeyBwcmljZTogcHJpY2VGcm9tIHx8IChwcmljZSAtIGRpc2NvdW50KSwgY3VycmVuY3kgfSl9Ly1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIWhpZGVEaXNjb3VudCA/XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjEyIGZ3NCBtbDggcGZjMyB0ZGxcIj5cbiAgICAgICAgICAgICAgICAgIHtwYXJzZVByaWNlKHsgcHJpY2U6IHByaWNlVG8gfHwgcHJpY2UsIGN1cnJlbmN5IH0pfS8tXG4gICAgICAgICAgICAgICAgPC9zcGFuPiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9oND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMFwiPntwcmljZVVuaXR9PC9wPlxuICAgIDwvZGl2PlxuICAgIHtcbiAgICAgIGRlYWxzSW5mbyAmJiAhaGlkZURpc2NvdW50ID9cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnQtcmliYm9uIGZyaWdodCBtdDI0IG1sOFwiPntnZXRQZXJjZW50YWdlKHsgcHJpY2UsIGRpc2NvdW50IH0pfSVcbiAgICAgICAgICBPZmY8L3NwYW4+IDogbnVsbFxuICAgIH1cbiAgICB7XG4gICAgICBkZWFsc0luZm8gP1xuICAgICAgICBudWxsIDpcbiAgICAgICAgPFBhY2thZ2VEYXlzRGlzY291bnRcbiAgICAgICAgICBkYXlzPXtkYXlzfVxuICAgICAgICAgIG5pZ2h0cz17bmlnaHRzfVxuICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICBkaXNjb3VudD17ZGlzY291bnR9XG4gICAgICAgICAgaGlkZURpc2NvdW50PXtoaWRlRGlzY291bnR9XG4gICAgICAgIC8+XG4gICAgfVxuICAgIHsvKiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleEZ1bGwganVzdGlmeUVuZCByZWNvbW1lbmRlZC1pY29uLWNvbnRhaW5lclwiPlxuICAgICAgPFRvb2x0aXBDb21tb24gbWVzc2FnZT17J1JlY29tbWVuZGVkIGJ5IFRyYXZlbFRyaWFuZ2xlJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtMjQgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPFRUUmVjb21tZW5kZWRJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub29sdGlwQ29tbW9uPlxuICAgIDwvZGl2PiovfVxuICA8L2Rpdj5cbik7XG5cblBhY2thZ2VQcmljZS5wcm9wVHlwZXMgPSB7XG4gIHByaWNlVW5pdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByaWNlRnJvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgcHJpY2VUbzogUHJvcFR5cGVzLm51bWJlcixcbiAgZGVhbHNJbmZvOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBkYXlzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuaWdodHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGFuaW1hdGlvblByaWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZURpc2NvdW50OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFja2FnZVByaWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJpY2VVbml0OiAncGVyIHBlcnNvbicsXG4gIGN1cnJlbmN5OiAnUnVwZWUnLFxuICBoaWRlRGlzY291bnQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlUHJpY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdjb21wb25lbnRzL1N3aXBlci9Td2lwZXInO1xuaW1wb3J0ICcuL1BhY2thZ2VTbGlkZXIuc2Nzcyc7XG5pbXBvcnQgeyBMdXh1cnlQYWNrYWdlSWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgR0Rpc2NvdW50RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJveFNoYWRvdzogJzAgMCA2cHggcmdiYSgwLDAsMCwwLjUpJyxcbn0pO1xuXG5jb25zdCBHSGlnaGxpZ2h0QmFubmVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmMwNTcnLFxuXG59KTtcblxuY29uc3QgR0x1eHVyeURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzEyNHB4JyxcbiAgaGVpZ2h0OiAnNTVweCcsXG4gIGxlZnQ6ICctM3B4JyxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc0cHgnLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzRweCcsXG4gIG92ZXJmbG93OidoaWRkZW4nLFxuICB0b3A6ICc4cHgnXG59KTtcblxuZXhwb3J0IGNvbnN0IGRpc2NvdW50UGVyY2VudGFnZSA9IChwcmljZVRvdGFsLCBwcmljZURpc2NvdW50KSA9PiBwcmljZURpc2NvdW50IC8gKHByaWNlVG90YWwgLyAxMDApO1xuXG5jb25zdCBQYWNrYWdlU2xpZGVyID0gKHsgaW1hZ2VzLCBuYW1lLCBjb3ZlcnMsIGRlYWxzSW5mbywgcHJpY2UsIGlzRGVhbCwgaXNMdXh1cnksIGhpZGVEaXNjb3VudCB9KSA9PiB7XG5cbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcbiAgICB9LFxuICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgIGxhenk6IHRydWUsXG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmVcIj5cbiAgICAgIHtcbiAgICAgICAgaXNEZWFsIHx8IGlzTHV4dXJ5ID9cbiAgICAgICAgICA8R0hpZ2hsaWdodEJhbm5lckRpdiBjbGFzc05hbWU9J3A1IGYxMiBwbDE1IHByMTUgdGV4dC1jZW50ZXIgcGZjMyB3ZnVsbCBoaWdobGlnaHQtZGVhbHMtYmFubmVyJz5cbiAgICAgICAgICAgIHsgaXNEZWFsICYmIGRlYWxzSW5mby5mYXF9IHtpc0x1eHVyeSAmJiBgSGFzc2VsIEZyZWUgQm9va2luZyB8IEFsbCBJbmNsdXNpdmUgfCAyNHg3IEFzc2lzdGFuY2VgfVxuICAgICAgICAgIDwvR0hpZ2hsaWdodEJhbm5lckRpdj5cbiAgICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgcGFja2FnZS1zbGlkZXItaW1nXCI+XG4gICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJJbWFnZVwiIC8+XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgIGlzRnVsbFdpZHRoU3dpcGVyPXt0cnVlfVxuICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMzYwLCBoZWlnaHQ6IDIwMCB9fVxuICAgICAgICAgIHBhZ2luYXRpb249e3sgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLCBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgICBzaG93TG9hZGVyXG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZXMubWFwKChzLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPXs0MTF9IGhlaWdodD17Mjg2fSBrZXk9e2l9IGRhdGEtc3JjPXtzLnBpY3R1cmVfZGV0YWlscy5pbWFnZWtpdF91cmx9XG4gICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9IGNsYXNzTmFtZT1cInN3aXBlci1sYXp5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNmY3cgYWJzb2x1dGUgcDggYjAgbDAgd2Z1bGwgejE2IHBhY2thZ2Utc2xpZGVyLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge3MucGljdHVyZV9kZXRhaWxzLmNhcHRpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIGlzRGVhbCAmJiBwcmljZS50b3RhbCAmJiBwcmljZS5kaXNjb3VudCAmJiAhaGlkZURpc2NvdW50ID9cbiAgICAgICAgICA8R0Rpc2NvdW50RGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmFkaXVzMiB0MTUgc2JjdyBsMTUgejIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgbTAgcDUnPkRlYWwgb2YgdGhlIERheTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIHBiYzEganVzdGlmeUNlbnRlciBwdDUgcGI1IHBsOCBwcjgnPlxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdmMzIgc2ZjdyBmdzkgbTAnPntNYXRoLnJvdW5kKGRpc2NvdW50UGVyY2VudGFnZShwcmljZS50b3RhbCwgcHJpY2UuZGlzY291bnQpKX08L2g2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwyJz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMiBzZmN3IG0wJz4lPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIHNmY3cgbTAnPm9mZjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dEaXNjb3VudERpdj4gOlxuICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgaXNMdXh1cnkgJiYgcHJpY2UudG90YWwgJiYgcHJpY2UuZGlzY291bnQgP1xuICAgICAgICAgIDxHTHV4dXJ5RGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmFkaXVzMiB0MTUgbDE1IHoyICc+PEx1eHVyeVBhY2thZ2VJY29uIC8+PC9HTHV4dXJ5RGl2PiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhY2thZ2VTbGlkZXIucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb3ZlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGVhbHNJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcmljZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNEZWFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNMdXh1cnk6IFByb3BUeXBlcy5ib29sLFxuICBoaWRlRGlzY291bnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5QYWNrYWdlU2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVhbHNJbmZvOiB7fSxcbiAgcHJpY2U6IHt9LFxuICBpc0RlYWw6IGZhbHNlLFxuICBpc0x1eHVyeTogZmFsc2UsXG4gIGhpZGVEaXNjb3VudDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VTbGlkZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYWNrYWdlLXNsaWRlci1pbWdcIjogXCJfV25URXVcIixcblx0XCJwYWNrYWdlLXNsaWRlci1jYXB0aW9uXCI6IFwiXzI2NGp3XCIsXG5cdFwiZGF5cy10YWdcIjogXCJfMm44amVcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgRm9ybU9uZUNUQSBmcm9tICdjb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvRm9ybU9uZUNUQSc7XG5cbmNvbnN0IEdVbCA9IGdsYW1vcm91cy51bCh7XG4gICcmIGxpJzoge1xuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICcmIGEnOiB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICAgIH0sXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxuICAgICAgICBjb2xvcjogJyMzZTNlM2UnLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5Njg4J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuXG5jbGFzcyBRdWlja0xpbmtOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBTY3JvbGxMaW5rOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZWFsc0luZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHJhY2tMZWFkRnVubmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdLFxuICAgIFNjcm9sbExpbms6ICgpID0+IHt9LFxuICAgIGRlYWxzSW5mbzoge31cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBkZWFsc0luZm8sIHRyYWNrTGVhZEZ1bm5lbENsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IExpbmsgPSB0aGlzLnByb3BzLlNjcm9sbExpbms7XG5cbiAgICBjb25zdCBvblNldEFjdGl2ZSA9ICh0YXJnZXRJZCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK3RhcmdldElkKyctdHJpZ2dlcmxpbmsnKTtcbiAgICAgIGlmICggYWN0aXZlbGluayAmJiBhY3RpdmVsaW5rLnNjcm9sbEludG9WaWV3KSB7XG4gICAgICAgIGFjdGl2ZWxpbmsuc2Nyb2xsSW50b1ZpZXcoe2lubGluZTpcImNlbnRlclwifSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWlja2xpbmtzQ29udGFpbmVyIGZsZXggc3BhY2VCZXR3ZWVuIHNiY3cgb3ZlcmZsb3dYc2Nyb2xsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9CZWZvcmVBZnRlciBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgPEdVbCBjbGFzc05hbWU9XCJmbGV4IGZsZXhGdWxsIGFsaWduQ2VudGVyIG0wIHAwXCI+XG4gICAgICAgICAgICB7b3B0aW9ucyAmJiBvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PlxuICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGYxNCBmdzcgcGZjMyBwMTUgYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtvcHRpb24uc2VjdGlvbl9uYW1lKyctdHJpZ2dlcmxpbmsnfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2V0QWN0aXZlPXtvblNldEFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICB0bz17b3B0aW9uLnNlY3Rpb25fbmFtZX0gc3B5IHNtb290aCBpc0R5bmFtaWMgZHVyYXRpb249ezUwMH0gb2Zmc2V0PXstNjB9PlxuICAgICAgICAgICAgICAgICAge29wdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR1VsPlxuICAgICAgICAgIHtvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoICYmIGRlYWxzSW5mby5vdmVydmlldy50b0xvd2VyQ2FzZSgpICE9PSAnZGVhbHMnID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHIxNSBtbDE1XCI+XG4gICAgICAgICAgICAgIDxGb3JtT25lQ1RBIGNsaWNrSGFuZGxlcj17dHJhY2tMZWFkRnVubmVsQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZjE0IGZ3OSBidG4tcHJpLWxhcmdlIHBsMTUgcHIxNSByaXBwbGUgcHQ4IHBiOCBub3dyYXBcIj5HZXQgUXVvdGVzPC9kaXY+XG4gICAgICAgICAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVpY2tMaW5rTmF2O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgU2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdjb21wb25lbnRzL1N3aXBlci9Td2lwZXInO1xuaW1wb3J0ICcuL1NpbWlsYXJQYWNrYWdlcy5zY3NzJztcbmltcG9ydCBQYWNrYWdlUHJpY2UgZnJvbSAnLi4vTGlzdGluZy9QYWNrYWdlUHJpY2UnO1xuaW1wb3J0IFBhY2thZ2VDaXRpZXMgZnJvbSAnLi4vTGlzdGluZy9QYWNrYWdlQ2l0aWVzJztcbmltcG9ydCBQYWNrYWdlSW5jRXhjIGZyb20gJy4uL0xpc3RpbmcvUGFja2FnZUluY0V4Yyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQsIFBBQ0tBR0VfQ0xJQ0tFRCwgUEFDS0FHRV9WSUVXRUQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuaW1wb3J0IFBhY2thZ2VDYXJkRXhwZXJpbWVudCBmcm9tICcuLi9MaXN0aW5nL1BhY2thZ2VDYXJkRXhwZXJpbWVudCc7XG5cbmNsYXNzIFNpbWlsYXJQYWNrYWdlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbG9hZGVkU2ltaWxhclBhY2thZ2VzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGxvYWRpbmdTaW1pbGFyUGFja2FnZXM6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRpbmdFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFja2FnZUlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNpbWlsYXJQYWNrYWdlczogUHJvcFR5cGVzLmFycmF5XG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYWNrYWdlSWQ6IDEsXG4gICAgbG9hZGluZ0Vycm9yOiBmYWxzZSxcbiAgICBzaW1pbGFyUGFja2FnZXM6IFtdLFxuICAgIGxvYWRpbmdTaW1pbGFyUGFja2FnZXM6IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbnNvclZpc2liaWxpdHkgOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChldmVudCwgZSwgaW5kZXgpID0+IHtcbiAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQ6IGV2ZW50ID8gZXZlbnQgOiBQQUNLQUdFX0NMSUNLRUQsXG4gICAgICBjYXRlZ29yeTogYERlc3RpbmF0aW9uOiR7ZS5kZXN0aW5hdGlvbnNbMF0ubmFtZX1gLFxuICAgICAgc2VjdGlvbjogJ1NpbWlsYXIgUGFja2FnZXMnLFxuICAgICAgb2JqZWN0OiBgUGFja2FnZS8ke2UuaWR9YCxcbiAgICAgIGN0YTogJycsXG4gICAgICBwYWNrYWdlX2lkOiBlLmlkLFxuICAgICAgZGVzdGluYXRpb25fbGlzdDogZS5kZXN0aW5hdGlvbnNbMF0ubmFtZSxcbiAgICAgIGRlc3RpbmF0aW9uX2lkOiBlLmRlc3RpbmF0aW9uc1swXS5pZCxcbiAgICAgIGxhYmVsOiBgRGF5czoke2UuZGF5c306OkluZGV4OiR7aW5kZXgrMX1gLFxuICAgICAgdmFsdWU6IGUucHJpY2VfdG90YWwsXG4gICAgfSk7XG4gIH07XG5cbiAgb25TZW5zb3JDaGFuZ2UgPSAoaXNWaXNpYmxlLCBlLCBpZHgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2Vuc29yVmlzaWJpbGl0eSAmJiBpc1Zpc2libGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5zb3JWaXNpYmlsaXR5IDogdHJ1ZSB9KTtcbiAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoUEFDS0FHRV9WSUVXRUQsIGUsIGlkeCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLmxvYWRpbmdTaW1pbGFyUGFja2FnZXMgfHxcbiAgICAgICghdGhpcy5wcm9wcy5sb2FkZWRTaW1pbGFyUGFja2FnZXMgJiYgIXRoaXMucHJvcHMubG9hZGluZ0Vycm9yKVxuICAgICkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwdDE1IHBiOCBzYmN3XCIgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLWNvbW1vbi1jZW50ZXIgcGIxNVwiPlNpbWlsYXIgUGFja2FnZXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgc2ltaWxhci1wYWNrYWdlLWJveFwiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgcHQyNCBwYjI0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTFcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UzXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubG9hZGVkU2ltaWxhclBhY2thZ2VzICYmIHRoaXMucHJvcHMuc2ltaWxhclBhY2thZ2VzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc3dpcGVyRWxlbWVudHMgPSB0aGlzLnByb3BzLnNpbWlsYXJQYWNrYWdlcy5tYXAoKGUsIGlkeCkgPT4ge1xuICAgICAgICByZXR1cm4gKDxkaXYga2V5PXtlLmlkfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89e2AvcGFja2FnZXMvJHtlLnNldF91cmx9P2lkPSR7ZS5pZH1gfVxuICAgICAgICAgICAgaHJlZj17YC9wYWNrYWdlcy8ke2Uuc2V0X3VybH0/aWQ9JHtlLmlkfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KFBBQ0tBR0VfQ0xJQ0tFRCwgZSwgaWR4KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbWlsYXItcGFja2FnZS1pbWcgYm94LXdpdGgtbGF5ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPEltZyB3aWR0aD17MzE2fSBoZWlnaHQ9ezE0MH0gc3JjPXtlLmltYWdlX3VybH0gaWtTcmM9e2UuaW1hZ2VraXRfdXJsfSBhbHQ9e2UubmFtZX0gLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZ3OSBzZmN3IGI4IGFic29sdXRlIGwwIHoyIHBsOCBwcjhcIj5cbiAgICAgICAgICAgICAgICB7ZS5kZXN0aW5hdGlvbnMubGVuZ3RoID8gZS5kZXN0aW5hdGlvbnNbMF0ubmFtZSA6ICdLZXJhbGEnfVxuICAgICAgICAgICAgICAgIHtgICgke2UuZGF5c31EICYgJHtlLm5pZ2h0c31OKSBgfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPFNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUsIGUsIGlkeCl9IGludGVydmFsRGVsYXk9ezMwMDB9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByZWxhdGl2ZSBwOCBzaW1pbGFyLXBhY2thZ2UtYm94LWRhdGFcIj5cbiAgICAgICAgICAgIDxQYWNrYWdlUHJpY2VcbiAgICAgICAgICAgICAgcHJpY2VVbml0PXtlLm1pbmlfZGVzY31cbiAgICAgICAgICAgICAgcHJpY2U9e2UucHJpY2VfdG90YWx9XG4gICAgICAgICAgICAgIGRpc2NvdW50PXtlLmRpc2NvdW50fVxuICAgICAgICAgICAgICBjdXJyZW5jeT17ZS5jdXJyZW5jeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFja2FnZUNpdGllcyBjaXRpZXM9e2UuY2l0aWVzfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBpbmNsdXNpb24taGVpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICA8UGFja2FnZUluY0V4YyBub1Njcm9sbCBpbmNsdXNpb25zPXtlLmluY2x1c2lvbnN9IGlkPXtgc2ltaWxhcl9wYWNrYWdlc18ke2UuaWR9YH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcDE1IHBsMTUgcHIxNSBwYjggc2Jjd1wiID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy1jb21tb24tY2VudGVyXCI+U2ltaWxhciBQYWNrYWdlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByZWxhdGl2ZSBzaW1pbGFyLXBhY2thZ2UtYm94XCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgPFN3aXBlciBzbGlkZUNsYXNzPVwic2xpZGVcIiBzcGFjZUJldHdlZW49ezh9IHNsaWRlc1BlclZpZXc9XCJhdXRvXCIgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAyNzYsIGhlaWdodDogMzE2IH19PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaW1pbGFyUGFja2FnZXMubWFwKChwYWNrYWdlQ2FyZCxpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQYWNrYWdlQ2FyZEV4cGVyaW1lbnQgaGVhZGluZz17J3NpbWlsYXIgcGFja2FnZXMnfSBjYXJkPXtwYWNrYWdlQ2FyZH0ga2V5PXtpZH0gaXNQYWNrYWdlUmV2YW1wPXt0cnVlfSAvPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltaWxhclBhY2thZ2VzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2ltaWxhci1wYWNrYWdlLWltZ1wiOiBcIl8zc3diYlwiLFxuXHRcImluY2wtZXhjbC1jb24taW5uZXJcIjogXCJfMUN3bGJcIixcblx0XCJpbmMtbm8tc2Nyb2xsXCI6IFwiXzN3RV9RXCIsXG5cdFwiaW5jbC1leGNsLWJveFwiOiBcIl8yNldLT1wiLFxuXHRcInNsaWRlXCI6IFwiXzIyQXJRXCIsXG5cdFwic2ltaWxhci1wYWNrYWdlLWJveC1kYXRhXCI6IFwiXzJsVmgwXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IERvd25BcnJvdyB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IGdldEN1cnJlbnRNb250aCB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50LCBIT1RFTF9DQVRFR09SWV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR1NlbGVjdERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICc0MHB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxuICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAnJiAuaW5wdXQtMjQnOiB7XG4gICAgd2lkdGg6ICcyNHB4JyxcbiAgICBoZWlnaHQ6ICcyNHB4JyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgaGVpZ2h0OiAnNnB4J1xuICAgIH1cbiAgfSxcbiAgJyYgc2VsZWN0Jzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgbGVmdDogJzAnLFxuICAgIHRvcDogJzAnLFxuICAgIHpJbmRleDogJzInLFxuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIHBhZGRpbmdSaWdodDogJzI1cHgnLFxuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgfVxufSk7XG5cbmNsYXNzIFN0YXJNb250aEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICB0cnkge1xuICAgICAgb3B0aW9ucy5tb250aCA9IHRoaXMucHJvcHMucGFja2FnZURldGFpbHMubW9udGhfb3B0aW9ucy5tb250aF9yYW5nZXMgfHwgW107XG4gICAgICBvcHRpb25zLnBhY2thZ2UgPSB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLnBhY2thZ2Vfb3B0aW9ucy5ob3RlbF9wcmljZV9kZXRhaWxzIHx8IFtdO1xuICAgICAgb3B0aW9ucy5jaGVja2VkID0ge1xuICAgICAgICBtb250aDogdGhpcy5wcm9wcy5zZWxlY3RlZE1vbnRoIHx8IGdldEN1cnJlbnRNb250aCgpICsgMSxcbiAgICAgICAgcGFja2FnZTogb3B0aW9ucy5wYWNrYWdlLmZpbHRlcihlID0+IGUuaXNfY2hlY2tlZClbMF0ucGFja2FnZV9pZFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcHRpb25zLm1vbnRoID0gW107XG4gICAgICBvcHRpb25zLnBhY2thZ2UgPSBbXTtcbiAgICAgIG9wdGlvbnMuY2hlY2tlZCA9IHtcbiAgICAgICAgbW9udGg6IG51bGwsXG4gICAgICAgIHBhY2thZ2U6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vbnRoOiBvcHRpb25zLmNoZWNrZWQubW9udGgsXG4gICAgICBwYWNrYWdlOiBvcHRpb25zLmNoZWNrZWQucGFja2FnZSxcbiAgICAgIG9wdGlvbnNcbiAgICB9O1xuXG4gICAgdGhpcy5fc2V0TW9udGggPSB0aGlzLl9zZXRNb250aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NldFN0YXJSYXRpbmcgPSB0aGlzLl9zZXRTdGFyUmF0aW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gdGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBzb3J0U3Rhck9wdGlvbnMgPSAob3B0aW9ucykgPT4gKFxuICAgIG9wdGlvbnMubWFwKG9wdCA9PiAoXG4gICAgICA8b3B0aW9uIGtleT17b3B0LnBhY2thZ2VfaWR9IHZhbHVlPXtvcHQucGFja2FnZV9pZH0+XG4gICAgICAgIHtgVXB0byAke29wdC5ob3RlbF9zdGFyfSBzdGFyIGhvdGVsc2B9XG4gICAgICA8L29wdGlvbj5cbiAgICApKVxuICApO1xuXG4gIGdldERlc3RpbmF0aW9uID0gKGRlc3RpbmF0aW9ucykgPT4ge1xuICAgIHJldHVybiBkZXN0aW5hdGlvbnMubWFwKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLm5hbWUpLmpvaW4oJzo6Jyk7XG4gIH07XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIGN0YSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCB7IHBhY2thZ2VEZXRhaWxzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvRGVzdGluYXRpb24gPSB0aGlzLmdldERlc3RpbmF0aW9uKHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9ucyk7XG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgIGNhdGVnb3J5OiBgRGVzdGluYXRpb246JHtwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnNbMF0ubmFtZX1gLFxuICAgICAgc2VjdGlvbjogJ1BhY2thZ2UgTGlzdC9WaWV3IERldGFpbHMnLFxuICAgICAgb2JqZWN0OiBgUGFja2FnZS8ke3BhY2thZ2VEZXRhaWxzLmlkfWAsXG4gICAgICBjdGE6IGN0YSA/IGAke2N0YX0gU3RhcmAgOiAnVmlldyBEZXRhaWxzICYgQ3VzdG9taXplJyxcbiAgICAgIHBhY2thZ2VfaWQ6IHBhY2thZ2VEZXRhaWxzLmlkLFxuICAgICAgZGVzdGluYXRpb25fbGlzdDogdG9EZXN0aW5hdGlvbixcbiAgICAgIGRlc3RpbmF0aW9uX2lkOiBwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnNbMF0uaWQsXG4gICAgICBsYWJlbDogYERheXM6JHtwYWNrYWdlRGV0YWlscy5kYXlzfTo6SG90ZWw6JHtwYWNrYWdlRGV0YWlscy5tYXhfaG90ZWxfY2F0ZWdvcnl9IFN0YXJgLFxuICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUgOiBwYWNrYWdlRGV0YWlscy50b3RhbF9wcmljZSxcbiAgICAgIHBhY2thZ2VfbmFtZTogcGFja2FnZURldGFpbHMubmFtZVxuICAgIH0pO1xuICB9O1xuXG5cbiAgc29ydE1vbnRoT3B0aW9ucyA9IChvcHRpb25zKSA9PiAoXG4gICAgb3B0aW9ucy5tYXAob3B0ID0+IChcbiAgICAgIDxvcHRpb24ga2V5PXtvcHQuaWR9IHZhbHVlPXtvcHQuaWR9PlxuICAgICAgICB7b3B0Lm1vbnRoX3ZhbHVlfVxuICAgICAgPC9vcHRpb24+XG4gICAgKSlcbiAgKTtcblxuICBnZXRTZWxlY3RlZFN0YXJEZXRhaWwgPSAocGFja2FnZV9pZCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzICYmXG4gICAgICB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLnBhY2thZ2Vfb3B0aW9ucyAmJlxuICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscy5wYWNrYWdlX29wdGlvbnMuaG90ZWxfcHJpY2VfZGV0YWlscyAmJlxuICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlRGV0YWlscy5wYWNrYWdlX29wdGlvbnMuaG90ZWxfcHJpY2VfZGV0YWlsc1xuICAgICAgICAuZmlsdGVyKGhvdGVsID0+IGhvdGVsLnBhY2thZ2VfaWQgPT09IHBhcnNlSW50KHBhY2thZ2VfaWQpKSk7XG4gIH07XG5cbiAgX3NldE1vbnRoKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9udGg6IE51bWJlcihlLnRhcmdldC52YWx1ZSkgfSwgKCkgPT4gdGhpcy5faGFuZGxlU3VibWl0KCkpO1xuICB9XG5cbiAgX3NldFN0YXJSYXRpbmcoZSkge1xuICAgIGNvbnN0IHBhY2thZ2VEZXRhaWwgPSB0aGlzLmdldFNlbGVjdGVkU3RhckRldGFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChIT1RFTF9DQVRFR09SWV9DTElDS0VELCBwYWNrYWdlRGV0YWlsWzBdLmhvdGVsX3N0YXIsIHBhY2thZ2VEZXRhaWxbMF0ucHJpY2UpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWNrYWdlOiBlLnRhcmdldC52YWx1ZSB9LCAoKSA9PiB0aGlzLl9oYW5kbGVTdWJtaXQoKSk7XG4gIH1cblxuICBfaGFuZGxlU3VibWl0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnBhY2thZ2UgIT09IHRoaXMuc3RhdGUub3B0aW9ucy5jaGVja2VkLnBhY2thZ2UpIHtcbiAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5zdGF0ZS5tb250aDtcbiAgICAgIC8vIGxldCBtb250aCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRNb250aDtcbiAgICAgIC8vIGlmIChtb250aCAhPT0gdGhpcy5zdGF0ZS5tb250aCkge1xuICAgICAgLy8gICBtb250aCA9IHRoaXMuc3RhdGUubW9udGg7XG4gICAgICAvLyB9XG4gICAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZShcbiAgICAgICAgYC9wYWNrYWdlcy8ke3RoaXMucHJvcHMucGFja2FnZURldGFpbHMuc2V0X3VybH0/aWQ9JHt0aGlzLnN0YXRlLnBhY2thZ2V9JnRyYXZlbG1vbnRoPSR7dGhpcy5wcm9wcy5zZWxlY3RlZE1vbnRofWBcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vbnRoICE9PSB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLnNlbGVjdGVkTW9udGhOdW1iZXIpIHtcbiAgICAgIGNvbnN0IHsgc3RhcnRfcHJpY2UsIGVuZF9wcmljZSwgbW9udGhfdmFsdWUsIGlkIH0gPSB0aGlzLnN0YXRlLm9wdGlvbnMubW9udGhcbiAgICAgICAgLmZpbHRlcihlID0+IGUuaWQgPT09IHRoaXMuc3RhdGUubW9udGgpWzBdIHx8IHt9O1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZE1vbnRoKHRoaXMuc3RhdGUubW9udGgpO1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGUoe1xuICAgICAgICBmcm9tOiBzdGFydF9wcmljZSxcbiAgICAgICAgdG86IGVuZF9wcmljZSxcbiAgICAgICAgbW9udGg6IG1vbnRoX3ZhbHVlLFxuICAgICAgICBzZWxlY3RlZE1vbnRoTnVtYmVyOiBpZFxuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWNrYWdlRGV0YWlscyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHAxNSBzYmN3IGJiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcGwwIHByNFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmdzkgbWI1XCI+SG90ZWwgU3RhciBSYXRpbmc8L3A+XG4gICAgICAgICAgPEdTZWxlY3REaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuX3NldFN0YXJSYXRpbmd9IHZhbHVlPXtwYWNrYWdlRGV0YWlscy5pZH0+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9wdGlvbnMucGFja2FnZS5sZW5ndGggJiYgdGhpcy5zb3J0U3Rhck9wdGlvbnModGhpcy5zdGF0ZS5vcHRpb25zLnBhY2thZ2UpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LTI0IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciBpYmxjb2sgcDggYWJzb2x1dGUgYWJzb2x1dGUtY2VudGVyLXYgcjVcIj48RG93bkFycm93IC8+PC9zcGFuPlxuICAgICAgICAgIDwvR1NlbGVjdERpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwbDQgcHIwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IGZ3OSBtYjVcIj5Nb250aCBvZiBUcmF2ZWw8L3A+XG4gICAgICAgICAgPEdTZWxlY3REaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuX3NldE1vbnRofSB2YWx1ZT17cGFja2FnZURldGFpbHMuc2VsZWN0ZWRNb250aE51bWJlcn0+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9wdGlvbnMubW9udGgubGVuZ3RoICYmIHRoaXMuc29ydE1vbnRoT3B0aW9ucyh0aGlzLnN0YXRlLm9wdGlvbnMubW9udGgpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LTI0IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciBpYmxjb2sgcDggYWJzb2x1dGUgYWJzb2x1dGUtY2VudGVyLXYgcjVcIj48RG93bkFycm93IC8+PC9zcGFuPlxuICAgICAgICAgIDwvR1NlbGVjdERpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblN0YXJNb250aEZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIHN0YXJSYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vbnRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYWNrYWdlRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1cGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVNlbGVjdGVkTW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHB1c2hTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRNb250aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuU3Rhck1vbnRoRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3RhclJhdGluZzogMyxcbiAgbW9udGg6ICdNYXknXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFyTW9udGhGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmNsYXNzIFdlZWtlbmRQYWNrYWdlRGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnNlYXJjaC5tYXRjaCgncHByb2QnKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArPSAnJnBwcm9kPWYnO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlZWtlbmRQYWNrYWdlRGV0YWlscztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgSGVhZGVyQ29tbW9uIGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlckNvbW1vbic7XG5pbXBvcnQgUGFja2FnZURldGFpbHMgZnJvbSAnY29tcG9uZW50cy9QYWNrYWdlRGV0YWlscy9QYWNrYWdlRGV0YWlscyc7XG5pbXBvcnQgU2ltaWxhclBhY2thZ2VzIGZyb20gJ2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvU2ltaWxhclBhY2thZ2VzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnY29tcG9uZW50cy9HZW5lcmljL0xvYWRlcic7XG5pbXBvcnQgSW50ZXJuYWxTZXJ2ZXJFcnJvciBmcm9tICdjb21wb25lbnRzL0dlbmVyaWMvSW50ZXJuYWxTZXJ2ZXJFcnJvcic7XG5pbXBvcnQgU2VvRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL1Nlb0Zvb3Rlcic7XG5pbXBvcnQgV2Vla2VuZFBhY2thZ2VEZXRhaWxzIGZyb20gJ2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvV2Vla2VuZFBhY2thZ2VEZXRhaWxzJztcbmltcG9ydCBSZWNlbnRQYWNrYWdlcyBmcm9tICdtb2R1bGVzL3BhY2thZ2VzL3JlY2VudCc7XG5pbXBvcnQgSG93SXRXb3JrcyBmcm9tICdtb2R1bGVzL2hvd0l0V29ya3MvSG93SXRXb3Jrcyc7XG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICdjb21wb25lbnRzL0JyZWFkY3J1bWIvQnJlYWRjcnVtYkxpc3RpbmcnO1xuaW1wb3J0IFJpY2hUZXh0IGZyb20gJ21vZHVsZXMvcmljaFRleHQnO1xuaW1wb3J0IFBhY2thZ2VEZXRhaWxzRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvUGFja2FnZURldGFpbHNGb290ZXInO1xuaW1wb3J0IHsgZ2V0RGVzY3JpcHRpb24sIGdldFRpdGxlIH0gZnJvbSAnaGVscGVycy9zZW9IZWxwZXJzJztcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2hlbHBlcnMvRm9ybURhdGFGb3JtYXR0ZXInO1xuaW1wb3J0IHsgZ2V0Q3VycmVudE1vbnRoIH0gZnJvbSAnaGVscGVycy9EYXRlVGltZSc7XG5pbXBvcnQgeyBpb3NEZWVwTGluaywgZ2V0QXBwU2NoZW1lVXJsIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcbmltcG9ydCB7IHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUsIHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCB7IHRyYWNrU2VnbWVudCwgUERQX1BBR0VfVklFVyB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyByZW5kZXJNZXRhVGFncyB9IGZyb20gJ2hlbHBlcnMvc2VvSGVscGVycyc7XG5pbXBvcnQgVHJhdmVsZXJSZXZpZXcgZnJvbSAnbW9kdWxlcy90cmF2ZWxlclJldmlldyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlclRpdGxlIH0gZnJvbSBcIm1vZHVsZXMvaGVhZGVyL0hlYWRlclRpdGxlXCI7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJ2FwcENvbmZpZyc7XG5pbXBvcnQgJ2NvbXBvbmVudHMvUGFja2FnZURldGFpbHMvUGFja2FnZURldGFpbHMuc2Nzcyc7XG5cbmNsYXNzIFBhY2thZ2VEZXRhaWxzQXN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlzTG9hZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBsb2FkaW5nRXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGFja2FnZURldGFpbHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsb2FkRGV0YWlsczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZXRhaWxzUmVzb3VyY2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVQcmljZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVwbGFjZVN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBtZXRhVGFnczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzV2Vla2VuZFBhY2thZ2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHVwZGF0ZVNlbGVjdGVkTW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZmFxczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgc2ltaWxhclBhY2thZ2VzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYnJlYWRjcnVtYnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBiYWNrVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZldGNoSW5saW5lR2F0ZXdheXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZm9vdGVyTGlua3M6IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHBlcmltZW50SWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBhY2thZ2VEZXRhaWxzOiBudWxsLFxuICAgIGxvYWRpbmdFcnJvcjoge30sXG4gICAgdHJhY2tMZWFkRnVubmVsQ2xpY2s6ICgpID0+IHtcbiAgICB9LFxuICAgIG1ldGFUYWdzOiBbXSxcbiAgICBpc1dlZWtlbmRQYWNrYWdlOiBmYWxzZSxcbiAgICBzaW1pbGFyUGFja2FnZXM6IFtdLFxuICAgIGJyZWFkY3J1bWJzOiBbXSxcbiAgICBleHBlcmltZW50SWQ6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5nZXRQYWdlRnVsbE5hbWUgPSB0aGlzLmdldFBhZ2VGdWxsTmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVySGVsbWV0ID0gdGhpcy5yZW5kZXJIZWxtZXQuYmluZCh0aGlzKTtcbiAgICBzZXRDb29raWUoJ2NiX2R0JywgJycpO1xuICB9XG5cbiAgZ2V0RGVzdGluYXRpb24gPSAoZGVzdGluYXRpb25zKSA9PiB7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9ucy5tYXAoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24ubmFtZSkuam9pbignOjonKTtcbiAgfTtcblxuICBnZXRQYWNrYWdlVHlwZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhY2thZ2VEZXRhaWxzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB0eXBlID0gJyc7XG4gICAgY29uc3QgaGVhZGluZyA9IHBhY2thZ2VEZXRhaWxzLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaGVhZGluZy5pbmNsdWRlcygndG91cicpKSB7XG4gICAgICB0eXBlID0gJ1RvdXInO1xuICAgIH0gZWxzZSBpZiAoaGVhZGluZy5pbmNsdWRlcygnaG9uZXltb29uJykgfHxcbiAgICAgIGhlYWRpbmcuaW5jbHVkZXMoJ2NvdXBsZScpIHx8XG4gICAgICBoZWFkaW5nLmluY2x1ZGVzKCdyb21hbnRpYycpKSB7XG4gICAgICB0eXBlID0gJ0hvbmV5bW9vbic7XG4gICAgfSBlbHNlIGlmIChoZWFkaW5nLmluY2x1ZGVzKCdmYW1pbHknKSkge1xuICAgICAgdHlwZSA9ICdGYW1pbHknO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICB0cmFja1NlZ21lbnRFdmVudCA9ICgpID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgY29uc3QgeyBwYWNrYWdlRGV0YWlscyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHRvRGVzdGluYXRpb24gPSB0aGlzLmdldERlc3RpbmF0aW9uKHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9ucyk7XG4gICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogUERQX1BBR0VfVklFVyxcbiAgICAgICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbjoke3BhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9uc1swXS5uYW1lfWAsXG4gICAgICAgIHNlY3Rpb246ICdQYWNrYWdlIExpc3QvVmlldyBEZXRhaWxzJyxcbiAgICAgICAgb2JqZWN0OiBgUGFja2FnZS8ke3BhY2thZ2VEZXRhaWxzLmlkfWAsXG4gICAgICAgIHBhY2thZ2VfaWQ6IHBhY2thZ2VEZXRhaWxzLm5hbWUsXG4gICAgICAgIGRlc3RpbmF0aW9uX2xpc3Q6IHRvRGVzdGluYXRpb24sXG4gICAgICAgIGRlc3RpbmF0aW9uX2lkOiBwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMubGVuZ3RoICYmIHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9uc1swXS5pZCxcbiAgICAgICAgZGVzdGluYXRpb25fdHlwZTogdGhpcy5nZXRQYWNrYWdlVHlwZSgpLFxuICAgICAgICBsYWJlbDogYERheXM6JHtwYWNrYWdlRGV0YWlscy5kYXlzfTo6SG90ZWw6JHtwYWNrYWdlRGV0YWlscy5tYXhfaG90ZWxfY2F0ZWdvcnl9IFN0YXJgLFxuICAgICAgICB2YWx1ZTogcGFja2FnZURldGFpbHMudG90YWxfcHJpY2UsXG4gICAgICAgIHBhY2thZ2VfbmFtZTogcGFja2FnZURldGFpbHMubmFtZSxcbiAgICAgICAgYnVkZ2V0X3BhY2thZ2U6IHBhY2thZ2VEZXRhaWxzLmJ1ZGdldF9wYWNrYWdlLFxuICAgICAgICBkaXNjb3VudGVkX3BhY2thZ2U6IHBhY2thZ2VEZXRhaWxzLmRpc2NvdW50ZWRfcGFja2FnZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwYWNrYWdlRGV0YWlscyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNMb2FkZWQgfHwgdGhpcy5wcm9wcy5kZXRhaWxzUmVzb3VyY2UucGF0aCAhPT0gdGhpcy5wcm9wcy5wYXJhbXMucGFja2FnZU5hbWUpIHtcbiAgICAgIHRoaXMucHJvcHMubG9hZERldGFpbHModGhpcy5wcm9wcy5wYXJhbXMucGFja2FnZU5hbWUsIHsgcGFyYW1zOiB0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5IH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5LnRyYXZlbG1vbnRoKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkTW9udGgodGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeS50cmF2ZWxtb250aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRNb250aChnZXRDdXJyZW50TW9udGgoKSArIDEpO1xuICAgIH1cblxuICAgIGlmIChwYWNrYWdlRGV0YWlscyAmJiBwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMgJiYgcGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zLmxlbmd0aCkge1xuICAgICAgc2V0Q29va2llKCdjYl9kdCcsIHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9uc1swXS5uYW1lKTtcbiAgICAgIHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUocGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zWzBdLm5hbWUpO1xuICAgIH1cblxuICAgIHdpbmRvdy5sb2FkRGVmZXJJbWFnZXMgJiYgd2luZG93LmxvYWREZWZlckltYWdlcygpO1xuICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IHBhY2thZ2VEZXRhaWxzOiBuZXh0UGFja2FnZURldGFpbHMgfSA9IHByZXZQcm9wcztcbiAgICBjb25zdCB7IHBhY2thZ2VEZXRhaWxzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uTmFtZSA9IHBhY2thZ2VEZXRhaWxzICYmIHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9ucyAmJlxuICAgICAgcGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zLmxlbmd0aCAmJiBwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnNbMF0ubmFtZTtcbiAgICBjb25zdCBuZXh0RGVzdGluYXRpb25OYW1lID0gbmV4dFBhY2thZ2VEZXRhaWxzICYmIG5leHRQYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMgJiZcbiAgICAgIG5leHRQYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMubGVuZ3RoICYmIG5leHRQYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnNbMF0ubmFtZTtcblxuICAgIGlmIChuZXh0RGVzdGluYXRpb25OYW1lICE9PSBkZXN0aW5hdGlvbk5hbWUpIHtcbiAgICAgIHNldENvb2tpZSgnY2JfZHQnLCBjYXBpdGFsaXplQW5kUmVwbGFjZURhc2gobmV4dERlc3RpbmF0aW9uTmFtZSkpO1xuICAgICAgc2V0VmlzaXRlZERlc3RpbmF0aW9uc0Nvb2tpZShjYXBpdGFsaXplQW5kUmVwbGFjZURhc2gobmV4dERlc3RpbmF0aW9uTmFtZSkpO1xuICAgIH1cbiAgICB3aW5kb3cubG9hZERlZmVySW1hZ2VzICYmIHdpbmRvdy5sb2FkRGVmZXJJbWFnZXMoKTtcbiAgfVxuXG4gIGdldFBhZ2VGdWxsTmFtZSgpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMucHJvcHMucGFja2FnZURldGFpbHMuZGVzdGluYXRpb25zLmxlbmd0aCA/XG4gICAgICB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9uc1swXS5uYW1lIDogbnVsbDtcbiAgICBjb25zdCBzZXRVcmwgPSB0aGlzLnByb3BzLnBhY2thZ2VEZXRhaWxzLnNldF91cmw7XG4gICAgcmV0dXJuIGBQYWNrYWdlIFBhZ2UvJHtkZXN0aW5hdGlvbn0vJHtzZXRVcmx9YDtcbiAgfVxuXG4gIGdldFBhZ2VVcmwgPSAoKSA9PiB7XG4gICAgbGV0IGxpbmsgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KC9wYWdlXFwvXFxkKy8pLmpvaW4oJycpO1xuICAgIGlmIChsaW5rW2xpbmsubGVuZ3RoIC0gMV0gPT09ICcvJykge1xuICAgICAgbGluayA9IGxpbmsuc3Vic3RyaW5nKDAsIGxpbmsubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgfVxuICAgIHJldHVybiBgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20ke2xpbmt9YDtcbiAgfTtcblxuICByZW5kZXJIZWxtZXQodGl0bGUpIHtcbiAgICBjb25zdCB7IG1ldGFUYWdzOiBtZXRhVGFnTGlzdCwgbG9jYXRpb24sIHBhY2thZ2VEZXRhaWxzOiB7IHNldF91cmwgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhbGxvd2VkQW1wVXJscyA9IFsnYXplcmJhaWphbi01LWRheXMtdG91cicsXG4gICAgICAnN25pZ2h0cy04ZGF5cy1pc3JhZWwtdG91ci1mcm9tLWNoZW5uYWknLFxuICAgICAgJ2RlbGhpLTFuLTJkLXRvdXInLFxuICAgICAgJ2NoZW5uYWktMW4tMmQtdG91cicsXG4gICAgICAnN25pZ2h0cy04ZGF5cy1pc3JhZWwtdG91ci1mcm9tLWh5ZGVyYWJhZCddO1xuXG4gICAgY29uc3QgYW1wVXJsID0gYCR7YXBwQ29uZmlnLmFwaV9wcm90b2NvbH06Ly8ke2FwcENvbmZpZy5zZXJ2ZXIucHVibGljLmhvc3R9L3BhY2thZ2VzLyR7c2V0X3VybH0vYW1wYDtcblxuICAgIGxldCBpc0FtcCA9IGZhbHNlO1xuICAgIGFsbG93ZWRBbXBVcmxzLm1hcCgodXJsKSA9PiB7XG4gICAgICBpZiAodXJsLnRvTG93ZXJDYXNlKCkgPT09IHNldF91cmwudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBpc0FtcCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPntnZXRUaXRsZSh0aXRsZSwgbWV0YVRhZ0xpc3QpfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNjhjNGMxXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt0aGlzLmdldFBhZ2VVcmwoKX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiVHJhdmVsVHJpYW5nbGUuY29tXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17Z2V0RGVzY3JpcHRpb24oJycsIG1ldGFUYWdMaXN0KX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2dldERlc2NyaXB0aW9uKCcnLCBtZXRhVGFnTGlzdCl9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJwYWdlX2Z1bGxuYW1lXCIgY29udGVudD17dGhpcy5nZXRQYWdlRnVsbE5hbWUoKX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJhbDphbmRyb2lkOnVybFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2B0dDovLyR7Z2V0QXBwU2NoZW1lVXJsKGxvY2F0aW9uLCAxKX1gfSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwiYWw6aW9zOnVybFwiXG4gICAgICAgICAgY29udGVudD17YHR0aW9zYXBwOi8vYXBwbGlua3M/YWxfYXBwbGlua19kYXRhPSR7aW9zRGVlcExpbmsoXG4gICAgICAgICAgICBgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vJHtnZXRBcHBTY2hlbWVVcmwoXG4gICAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAnaW9zJ1xuICAgICAgICAgICAgKX1gXG4gICAgICAgICAgKX1gfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInNob3VsZF9mYWxsYmFja1wiIGNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD1cIjE2ODUzNDk1MzIwMzU0MVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vcGFja2FnZXMvJHtzZXRfdXJsfWB9XG4gICAgICAgIC8+XG4gICAgICAgIHtcbiAgICAgICAgICBpc0FtcCA/IDxsaW5rIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YW1wVXJsfSAvPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge3JlbmRlck1ldGFUYWdzKG1ldGFUYWdMaXN0KX1cbiAgICAgIDwvSGVsbWV0PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbG9jYXRpb24sIGlzTG9hZGluZywgaXNMb2FkZWQsIGxvYWRpbmdFcnJvciwgaXNXZWVrZW5kUGFja2FnZSwgcGFja2FnZURldGFpbHMsIHJlcGxhY2VTdGF0ZSxcbiAgICAgIGRldGFpbHNSZXNvdXJjZSwgZmFxcywgdHJhY2tMZWFkRnVubmVsQ2xpY2ssIHVwZGF0ZVByaWNlLFxuICAgICAgcHVzaFN0YXRlLCB1cGRhdGVTZWxlY3RlZE1vbnRoLCBmZXRjaElubGluZUdhdGV3YXlzLCBwYXJhbXMsIGZvb3RlckxpbmtzLCBleHBlcmltZW50SWRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNpbWlsYXJQYWNrYWdlcywgYnJlYWRjcnVtYnMsIGJhY2tVcmwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyByYXRpbmcsIHJldmlld3MsIHNjaGVtYUF0dHJpYnV0ZXMgfSA9IHBhY2thZ2VEZXRhaWxzO1xuICAgIGNvbnN0IGlzUmF0aW5nU2NoZW1hRW5hYmxlZCA9IHNjaGVtYUF0dHJpYnV0ZXMgJiYgc2NoZW1hQXR0cmlidXRlcy5zdGFyX3JhdGluZyAmJiByZXZpZXdzO1xuICAgIGNvbnN0IFRyYXZlbGVyUmV2aWV3Q29udGFpbmVyID0gVHJhdmVsZXJSZXZpZXcuY29udGFpbmVyO1xuICAgIGlmICghaXNMb2FkaW5nICYmICFpc0xvYWRlZCAmJiAhbG9hZGluZ0Vycm9yKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXJDb21tb24gLz5cbiAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGlzV2Vla2VuZFBhY2thZ2UpIHtcbiAgICAgIHJldHVybiAoPFdlZWtlbmRQYWNrYWdlRGV0YWlscyAvPik7XG4gICAgfVxuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyQ29tbW9uIC8+XG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGxvYWRpbmdFcnJvciB8fCAhcGFja2FnZURldGFpbHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlckNvbW1vbiAvPlxuICAgICAgICAgIDxJbnRlcm5hbFNlcnZlckVycm9yIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IHBhY2thZ2VEZXRhaWxzLm5hbWUgfHwgJ1BhY2thZ2UgRGV0YWlscyc7XG4gICAgY29uc3QgcGFja2FnZUlkID0gcGFja2FnZURldGFpbHMuaWQgfHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHBhY2thZ2VUeXBlID0gcGFja2FnZURldGFpbHMudGl0bGVzLm92ZXJ2aWV3LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNEZWFsID0gcGFja2FnZVR5cGUgPT09ICdkZWFscyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJIZWxtZXQodGl0bGUpfVxuICAgICAgICA8ZGl2IHZvY2FiPXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcImh0dHBzOi8vc2NoZW1hLm9yZy9cIiA6IG51bGx9XG4gICAgICAgICAgICAgdHlwZW9mPXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcIlByb2R1Y3RcIiA6IG51bGx9PlxuICAgICAgICAgIDxIZWFkZXJDb21tb24gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8SGVhZGVyVGl0bGUgc2hvd1NoYXJlPXt0cnVlfSBoZWFkaW5nPXtwYWNrYWdlRGV0YWlscy5oZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17cGFja2FnZURldGFpbHMuc2hhcmVfdXJsfSB0aXRsZT17dGl0bGV9IHBscEhlYWRpbmc9e3BhY2thZ2VEZXRhaWxzLnBscF9oZWFkaW5nIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tVcmw9e2xvY2F0aW9uLmFjdGlvbiA9PT0gJ1BPUCcgPyBiYWNrVXJsIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaXNSYXRpbmdTY2hlbWFFbmFibGVkPXtpc1JhdGluZ1NjaGVtYUVuYWJsZWR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHtpc0RlYWwgPyAnZGVhbC1wYWNrYWdlJyA6ICcnfSBwYWNrYWdlLWRldGFpbC1jb250YWluZXItbmV3LXVpYH0+XG4gICAgICAgICAgICA8UGFja2FnZURldGFpbHNcbiAgICAgICAgICAgICAgZmFxcz17ZmFxcyB8fCBbXX1cbiAgICAgICAgICAgICAgcGFja2FnZURldGFpbHM9e3BhY2thZ2VEZXRhaWxzfVxuICAgICAgICAgICAgICByZXNvdXJjZT17ZGV0YWlsc1Jlc291cmNlfVxuICAgICAgICAgICAgICByZXBsYWNlU3RhdGU9e3JlcGxhY2VTdGF0ZX1cbiAgICAgICAgICAgICAgdHJhY2tMZWFkRnVubmVsQ2xpY2s9e3RyYWNrTGVhZEZ1bm5lbENsaWNrfVxuICAgICAgICAgICAgICB1cGRhdGU9e3VwZGF0ZVByaWNlfVxuICAgICAgICAgICAgICBwdXNoU3RhdGU9e3B1c2hTdGF0ZX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRNb250aD17cGFja2FnZURldGFpbHMuc2VsZWN0ZWRNb250aE51bWJlcn1cbiAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRNb250aD17dXBkYXRlU2VsZWN0ZWRNb250aH1cbiAgICAgICAgICAgICAgZmV0Y2hJbmxpbmVHYXRld2F5cz17ZmV0Y2hJbmxpbmVHYXRld2F5c31cbiAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICBiYWNrVXJsPXtiYWNrVXJsfVxuICAgICAgICAgICAgICBkZXRhaWxzUmVzb3VyY2U9e2RldGFpbHNSZXNvdXJjZX1cbiAgICAgICAgICAgICAgZm9vdGVyTGlua3M9e2Zvb3RlckxpbmtzfVxuICAgICAgICAgICAgICBleHBlcmltZW50SWQ9e2V4cGVyaW1lbnRJZH1cbiAgICAgICAgICAgICAgaXNSYXRpbmdTY2hlbWFFbmFibGVkPXtpc1JhdGluZ1NjaGVtYUVuYWJsZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSAgc2JjNSB0cmF2ZWxsZXItbmV3LXVpXCI+XG4gICAgICAgICAgICA8VHJhdmVsZXJSZXZpZXdDb250YWluZXJcbiAgICAgICAgICAgICAgZGVzdGluYXRpb249e3BhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9ucyAmJlxuICAgICAgICAgICAgICBwYWNrYWdlRGV0YWlscy5kZXN0aW5hdGlvbnMubGVuZ3RoICYmXG4gICAgICAgICAgICAgIHBhY2thZ2VEZXRhaWxzLmRlc3RpbmF0aW9uc1swXS5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaW1pbGFyUGFja2FnZXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwdDggcGIwIHNiYzUgc2ltaWxhci1wYWNrYWdlcy1uZXctdWlcIj5cbiAgICAgICAgICAgICAgICA8U2ltaWxhclBhY2thZ2VzXG4gICAgICAgICAgICAgICAgICBwYWNrYWdlSWQ9e3BhY2thZ2VJZH1cbiAgICAgICAgICAgICAgICAgIGxvYWRlZFNpbWlsYXJQYWNrYWdlcz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHNpbWlsYXJQYWNrYWdlcz17c2ltaWxhclBhY2thZ2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwdDggc2JjNSByZWNlbnQtcGFja2FnZXMtbmV3LXVpXCI+XG4gICAgICAgICAgICA8UmVjZW50UGFja2FnZXMgY3VycmVudFBhY2thZ2VJRD17cGFja2FnZUlkfSBzZWxlY3RlZE1vbnRoPXtwYWNrYWdlRGV0YWlscy5zZWxlY3RlZE1vbnRoTnVtYmVyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcDggcGIwIHNiYzVcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFja2FnZURldGFpbHMuZm9vdGVyX3NlY3Rpb24gJiZcbiAgICAgICAgICAgICAgcGFja2FnZURldGFpbHMuZm9vdGVyX3NlY3Rpb24uZm9vdGVyX2Fib3ZlX3RleHQgJiZcbiAgICAgICAgICAgICAgPFBhY2thZ2VEZXRhaWxzRm9vdGVyIGZvb3RlclNlY3Rpb249e3BhY2thZ2VEZXRhaWxzLmZvb3Rlcl9zZWN0aW9ufSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxIb3dJdFdvcmtzIC8+XG4gICAgICAgICAge2JyZWFkY3J1bWJzLmxlbmd0aCA/IDxCcmVhZGNydW1iIGJyZWFkY3J1bWJzPXticmVhZGNydW1ic30gLz4gOiBudWxsfVxuICAgICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgICAgcmljaFRleHQ9XCJcIlxuICAgICAgICAgICAgcmF0aW5nPXtyYXRpbmd9XG4gICAgICAgICAgICByZXZpZXdzPXtyZXZpZXdzfVxuICAgICAgICAgICAgc3RhcnRpbmdQcmljZT17bnVsbH1cbiAgICAgICAgICAgIGlzUmF0aW5nU2NoZW1hRW5hYmxlZD17aXNSYXRpbmdTY2hlbWFFbmFibGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3BhY2thZ2VEZXRhaWxzLmZvb3Rlcl9zZWN0aW9ucyAmJiBwYWNrYWdlRGV0YWlscy5mb290ZXJfc2VjdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgIDxTZW9Gb290ZXIgZm9vdGVyU2VjdGlvbnM9e3BhY2thZ2VEZXRhaWxzLmZvb3Rlcl9zZWN0aW9uc30gLz4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGI2NCBzYmM1XCI+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlRGV0YWlsc0FzeW5jO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYWNrYWdlRGV0YWlsc0FzeW5jIGZyb20gJy4vUGFja2FnZURldGFpbHNBc3luYyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAgfSBmcm9tICdoZWxwZXJzL2V4aXRJbnRlbnQnO1xuXG5jbGFzcyBQYWNrYWdlRGV0YWlsc1dyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBhY2thZ2VEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgc3RhdGljIGdldFJlcXVpcmVkRGVzdGluYXRpb24oZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgcGxhY2VzID0gWydzaW5nYXBvcmUnLCdnb2EnLCdkdWJhaScsJ2V1cm9wZScsJ3JhamFzdGhhbicsJ2hpbWFjaGFsJywndGhhaWxhbmQnLCAnaG9uZyBrb25nJ107XG4gICAgY29uc3QgcmVxdWlyZWRQbGFjZXMgPSBkZXN0aW5hdGlvbnMuZmlsdGVyKGRlc3QgPT5cbiAgICAgIHBsYWNlcy5pbmRleE9mKGRlc3QubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICApO1xuICAgIHJldHVybiByZXF1aXJlZFBsYWNlcy5sZW5ndGg7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJiZy1tYXNrLWVpXCIgY2xhc3NOYW1lPVwiYmctbWFzay1laVwiIG9uQ2xpY2s9e2UgPT4gaGlkZVBvcHVwKGUpfSAvPlxuICAgICAgICA8UGFja2FnZURldGFpbHNBc3luYyB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlRGV0YWlsc1dyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9