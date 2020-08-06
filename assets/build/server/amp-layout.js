require("source-map-support").install();
exports.ids = ["amp-layout"];
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

/***/ "./amp/modules/common/ChatbotPopup/chatbotPopup.js":
/*!*********************************************************!*\
  !*** ./amp/modules/common/ChatbotPopup/chatbotPopup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

var _chatbotTripType = _interopRequireDefault(__webpack_require__(/*! ./chatbotTripType */ "./amp/modules/common/ChatbotPopup/chatbotTripType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let ChatbotPopup = class ChatbotPopup extends _react.default.Component {
  constructor() {
    super();

    this.closePopup = (e, flag) => {
      e && e.stopPropagation();
      this.setState({
        showPopup: false
      });
      this.props.closePopup(flag);
    };

    this.openChatHandler = (e, flag) => {
      e && e.preventDefault();
      openChatHandler(e);
      this.closePopup(e, flag);
    };

    this.getUrl = optionId => {
      const path = this.props.location.pathname;
      return optionId ? `/wvchatbot?mview=true&srcUrl=${path.replace('/', '')}&optionId=${optionId}` : `/wvchatbot?mview=true&srcUrl=${path.replace('/', '')}`;
    };

    this.state = {
      showPopup: true
    };
  }

  render() {
    const {
      showPopup
    } = this.state;
    return _react.default.createElement("div", {
      className: "parent-class-chat add-mask",
      "data-amp-bind-class": "hideChatPopup ? 'hide' : 'parent-class-chat add-mask'",
      id: "parent-class-chat"
    }, _react.default.createElement("div", {
      onClick: this.openChatHandler,
      className: showPopup ? 'popup-class showChatPop' : 'popup-class transform-popup',
      id: "popup-container"
    }, _react.default.createElement("div", {
      className: "heading-top"
    }, _react.default.createElement("div", {
      className: "logo"
    }, _react.default.createElement("span", {
      className: "span-logo"
    })), _react.default.createElement("div", {
      className: "logo-heading"
    }, _react.default.createElement("p", {
      className: "heading-pop"
    }, "Are you looking for help in planning your trip?"), _react.default.createElement("span", {
      className: "tri"
    })), _react.default.createElement(_Action.default, {
      events: {
        tap: ['AMP.setState({hideChatPopup : !hideChatPopup})']
      }
    }, props => _react.default.createElement("button", _extends({
      className: "cross-popup"
    }, props), "\xD7"))), _react.default.createElement("div", {
      className: "popup-middle"
    }, _chatbotTripType.default.map((option, i) => _react.default.createElement("p", {
      key: i,
      onClick: e => this.props.selectOption(option, e)
    }, _react.default.createElement(_reactRouter.Link, {
      to: this.getUrl(option.optionId)
    }, option.label)))), _react.default.createElement(_reactRouter.Link, {
      className: "popup-lower",
      to: this.getUrl()
    }, _react.default.createElement("label", {
      htmlFor: "chat_handler_input",
      className: "hidden_element"
    }, "type of select"), _react.default.createElement("input", {
      id: "chat_handler_input",
      placeholder: "Type or select from above...",
      onClick: e => {
        this.openChatHandler(e, 'inputClick');
      }
    }), _react.default.createElement("button", {
      className: "submit-popup"
    }, "SEND"))));
  }

};
ChatbotPopup.propTypes = {
  selectOption: _propTypes.default.func,
  closePopup: _propTypes.default.func,
  location: _propTypes.default.object
};
var _default = ChatbotPopup;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/common/ChatbotPopup/chatbotPopup.scss":
/*!***********************************************************!*\
  !*** ./amp/modules/common/ChatbotPopup/chatbotPopup.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"parent-class-chat": "_2W3re",
	"chat-close-span": "_1lmyM",
	"popup-class": "_3B9Pi",
	"showChatPop": "_2g3J_",
	"span-logo": "_3BJC2",
	"logo": "_1hEPJ",
	"heading-top": "_2vQrC",
	"logo-heading": "_1FZc1",
	"cross-popup": "_2yqk7",
	"tri": "_1Z3OE",
	"popup-middle": "_1IC1A",
	"hidden_element": "_C9sUS",
	"popup-lower": "_2EWdf",
	"submit-popup": "_rwTxL",
	"animated-banner-u": "_2FOTz",
	"transform-popup": "_SxYyS"
};

/***/ }),

/***/ "./amp/modules/common/ChatbotPopup/chatbotTripType.js":
/*!************************************************************!*\
  !*** ./amp/modules/common/ChatbotPopup/chatbotTripType.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  id: 'TripType',
  optionId: 1,
  value: 'I am looking for a romantic trip.',
  label: 'Yes! A romantic trip',
  message: 'Yes! A romantic trip',
  trigger: 'Assistance Type Module',
  rbtKey: 'tour',
  rbtValue: 'romantic',
  apiFlag: false,
  dynamicFlag: false,
  user: true
}, {
  id: 'TripType',
  optionId: 2,
  value: 'I am looking for a family trip.',
  label: 'Yes! For a family trip',
  message: 'Yes! For a family trip',
  trigger: 'Assistance Type Module',
  rbtKey: 'tour',
  rbtValue: 'family',
  apiFlag: false,
  dynamicFlag: false,
  user: true
}, {
  id: 'TripType',
  optionId: 3,
  value: 'I am looking for a honeymoon trip.',
  label: 'Yes! A honeymoon trip',
  message: 'Yes! A honeymoon trip',
  trigger: 'Assistance Type Module',
  rbtKey: 'tour',
  rbtValue: 'honeymoon',
  apiFlag: false,
  dynamicFlag: false,
  user: true
}, {
  id: 'TripType',
  optionId: 4,
  value: 'I am looking for a trip with my friends.',
  label: 'Yes! For a trip with my friends',
  message: 'Yes! For a trip with my friends',
  trigger: 'Assistance Type Module',
  rbtKey: 'tour',
  rbtValue: 'friends',
  apiFlag: false,
  dynamicFlag: true,
  user: true
}, {
  id: 'TripType',
  optionId: 5,
  value: 'I am looking for a group trip.',
  label: 'For a group trip',
  message: 'For a group trip',
  trigger: 'Assistance Type Module',
  rbtKey: 'tour',
  rbtValue: 'group',
  apiFlag: false,
  dynamicFlag: true,
  user: true
}, {
  id: 'TripType',
  optionId: 6,
  value: 'I am looking for a solo trip.',
  label: 'For a solo trip',
  message: 'For a solo trip',
  trigger: 'Assistance Type Module',
  rbtKey: 'tour',
  rbtValue: 'solo',
  apiFlag: false,
  dynamicFlag: true,
  user: true
}];
exports.default = _default;

/***/ }),

/***/ "./amp/modules/footer/Footer.js":
/*!**************************************!*\
  !*** ./amp/modules/footer/Footer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Footer = class Footer extends _react.Component {
  render() {
    return _react.default.createElement("footer", {
      className: "ampFooter pb64"
    }, _react.default.createElement("div", {
      className: "footerLinks"
    }, _react.default.createElement("ul", {
      className: "flex alignCenter flexWrap justifyCenter footerLinkList list-reset"
    }, _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "About Us")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "We Are Hiring!")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "Team")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "Blog")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "Testimonials")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "T&C")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "Privacy Policy")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "Cancellation")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "FAQs")), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }, "Contact Us")))), _react.default.createElement("div", {
      className: "pt8 mb24 location"
    }, _react.default.createElement("div", {
      className: "sfcw center"
    }, _react.default.createElement("p", {
      className: "fw9 f14 m0 mb15 sfc6 text-uppercase "
    }, "Corporate Office"), _react.default.createElement("p", {
      className: "f12 m0"
    }, "Holiday Triangle Travel Private Limited"), _react.default.createElement("p", {
      className: "f12 m0"
    }, "Plot No - 29 , 3rd & 4th Floor, "), _react.default.createElement("p", {
      className: "f12 m0"
    }, "Dynamic House, Maruti Industrial Complex,"), _react.default.createElement("p", {
      className: "f12 m0"
    }, "Sector 18 , Gurugram - 122015, Haryana"), _react.default.createElement("p", {
      className: "f12 m0"
    }, "Landline: ", _react.default.createElement("a", {
      href: "tel:18001235555"
    }, "1800 123 5555")))), _react.default.createElement("div", {
      className: "mb24"
    }, _react.default.createElement("div", {
      className: "wfull"
    }, _react.default.createElement("ul", {
      className: "footerSocialIcons list-reset flex p0"
    }, _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    })), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    })), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    })), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    })), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: ""
    }))))), _react.default.createElement("div", {
      className: "flex spaceBetween alignCenter"
    }, _react.default.createElement("div", {
      className: "flex alignCenter flexFull sfcw"
    }, _react.default.createElement("p", {
      className: "m0 f12 iblock at_madelove"
    }, "Made with"), _react.default.createElement("span", {
      className: "heart"
    }), _react.default.createElement("p", {
      className: "m0 f12 iblock"
    }, "in India")), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("p", {
      className: "f12 pfc4 right-align"
    }, "All rights reserved \xA9 2020"))));
  }

};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/footer/Footer.scss":
/*!****************************************!*\
  !*** ./amp/modules/footer/Footer.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ampFooter": "_2nMHL",
	"footerLinkList": "_11Pvh",
	"location": "_1Pd2u",
	"heart": "_16o8t",
	"footerSocialIcons": "_30R1R"
};

/***/ }),

/***/ "./amp/modules/footer/index.js":
/*!*************************************!*\
  !*** ./amp/modules/footer/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Footer = _interopRequireDefault(__webpack_require__(/*! ./Footer */ "./amp/modules/footer/Footer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Footer.default;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/header/AmpBurgerMenu.js":
/*!*********************************************!*\
  !*** ./amp/modules/header/AmpBurgerMenu.js ***!
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

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _AmpBurgerMenuLinks = _interopRequireDefault(__webpack_require__(/*! ./AmpBurgerMenuLinks */ "./amp/modules/header/AmpBurgerMenuLinks.js"));

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let AmpBurgerMenu = class AmpBurgerMenu extends _react.default.Component {
  render() {
    const {
      items,
      ui
    } = this.props;
    const listings = items.listing && items.listing.length ? items.listing : [];
    const category = items.category && items.category.length ? items.category : [];
    const destination = items.destination && items.destination.length ? items.destination : [];
    return _react.default.createElement("div", {
      itemScope: "itemscope",
      itemType: "https://schema.org/SiteNavigationElement"
    }, _react.default.createElement("amp-sidebar", {
      id: "sidebar-left",
      layout: "nodisplay",
      side: "left"
    }, _react.default.createElement("div", {
      className: "pbc1 relative pt24 pl15 pr15 pb24 headerAmp"
    }, _react.default.createElement("a", {
      href: "",
      className: "sfcw flex alignCenter"
    }, _react.default.createElement("div", {
      className: "col-xs-3 pl0 pr0"
    }, _react.default.createElement("div", {
      className: "user-img-loggedin radius100"
    }, _react.default.createElement("amp-img", {
      src: "https://img.traveltriangle.com/attachments/pictures/901194/original/male3-96.png?tr=w-48,h-48",
      alt: "avtar",
      height: "48",
      width: "48",
      layout: "responsive"
    }))), _react.default.createElement("div", {
      className: "col-xs-9 relative pl0 pr0 user-loggedin-name-box"
    }, _react.default.createElement("p", {
      className: "sfcw text-capitalize f18p m0 ml15"
    }, "Guest")))), _react.default.createElement("ul", {
      className: "amp-list-side-menu m0"
    }, _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Login/Sign up"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "/users/sign_in",
      href: "/users/sign_in"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconOne"
    }), "Login/Signup")), _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Home"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "/",
      href: "/"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconTwo"
    }), "Home"))), _react.default.createElement("ul", null, listings.map((entity, index) => {
      return _react.default.createElement(_AmpBurgerMenuLinks.default, {
        entity: entity,
        title: entity.title,
        key: index
      });
    }), destination.map((entity, index) => {
      return _react.default.createElement(_AmpBurgerMenuLinks.default, {
        entity: entity,
        title: "Destination Guide",
        key: index
      });
    }), category.map((entity, index) => {
      return _react.default.createElement(_AmpBurgerMenuLinks.default, {
        entity: entity,
        title: "Holiday Themes",
        key: index
      });
    })), _react.default.createElement("ul", {
      className: "amp-list-side-menu m0 bb pb15 mb24"
    }, _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Holiday Deals"
    }), _react.default.createElement("a", {
      itemProp: "url",
      href: "/deals-tour-packages"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconNine"
    }), "Holiday Deals")), _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Luxury  Holidays"
    }), _react.default.createElement("a", {
      itemProp: "url",
      href: "/luxury-tour-packages"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconNine"
    }), "Luxury Holidays"))), _react.default.createElement("div", null, _react.default.createElement("ul", {
      className: "amp-list-side-menu bb pb15 mb0"
    }, _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "How It Works"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "https://traveltriangle.com/how_it_works",
      href: "https://traveltriangle.com/how_it_works"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconTen"
    }), "How It Works")), _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Offers"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "https://traveltriangle.com/offers",
      href: "https://traveltriangle.com/offers"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconEleven"
    }), "Offers")), _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Blog"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "https://traveltriangle.com/blog",
      href: "https://traveltriangle.com/blog"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconTwelve"
    }), "Blog")), _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Testimonials"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "https://traveltriangle.com/testimonials",
      href: "https://traveltriangle.com/testimonials"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconThirteen"
    }), "Testimonials")), _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "FAQ"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "https://traveltriangle.com/FAQs",
      href: "https://traveltriangle.com/FAQs"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconFourteen"
    }), "FAQ")), _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: "Contact Us"
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: "https://traveltriangle.com/contact_us",
      href: "https://traveltriangle.com/contact_us"
    }, _react.default.createElement("span", {
      className: "sidenav-icons iconFifteen"
    }), "Contact Us")))), _react.default.createElement("div", {
      className: "p15"
    }, _react.default.createElement("p", {
      className: "f14 mb8"
    }, "For any help"), _react.default.createElement("p", {
      className: "f16 m0 fw9"
    }, _react.default.createElement("a", {
      content: "tel:18001235555",
      className: "link"
    }, "1800-123-5555")))), _react.default.createElement(_Action.default, {
      events: {
        tap: ['sidebar-left.toggle']
      }
    }, props => _react.default.createElement("button", _extends({}, props, {
      className: "sidebar-button"
    }), _react.default.createElement("span", {
      className: "hide"
    }, "sidebar"))), _react.default.createElement("div", {
      id: "target-element-left"
    }));
  }

};
AmpBurgerMenu.propTypes = {
  ui: _propTypes.default.object,
  items: _propTypes.default.object
};

const mapStateToProps = state => ({
  ui: state.topNavigation && state.topNavigation.ui,
  items: state.topNavigation && state.topNavigation.items
});

const mapDispatchToProps = dispatch => ({});

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AmpBurgerMenu);

exports.default = _default;

/***/ }),

/***/ "./amp/modules/header/AmpBurgerMenuLinks.js":
/*!**************************************************!*\
  !*** ./amp/modules/header/AmpBurgerMenuLinks.js ***!
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

var _Action = _interopRequireDefault(__webpack_require__(/*! amp/helpers/Action */ "./amp/helpers/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AmpBurgerMenuLinks = class BurgerMenuLinks extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showIndex: 7,
      showLoadMore: true
    }, this.renderSubEntities = (item, index) => _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: item.title
    }), _react.default.createElement("a", {
      className: `pl0 pt0 pb0 hauto-i mt15 mb15 ${index > this.state.showIndex ? 'hide' : ''}`,
      itemProp: "url",
      content: item.url,
      href: item.url
    }, item.title)), _temp;
  }

  render() {
    const {
      entity,
      title
    } = this.props;
    const iconClass = title.toLowerCase().split(' ').join('_');
    const uniqueId = entity.title.replace(/\s/g, '');
    return _react.default.createElement(_Action.default, {
      events: {
        tap: [`AMP.setState({showHeading${uniqueId} : !showHeading${uniqueId}})`]
      }
    }, props => _react.default.createElement("li", _extends({
      className: "sidenav-amp"
    }, props, {
      role: "button",
      tabIndex: "0"
    }), _react.default.createElement("p", {
      className: "sidebar-list"
    }, _react.default.createElement("a", {
      href: entity.url
    }, title, _react.default.createElement("span", {
      className: `sidenav-icons ${iconClass}`
    })), _react.default.createElement("span", {
      className: "arrowDown"
    })), _react.default.createElement("div", null, title.toLowerCase() !== 'hotels' && title.toLowerCase() !== 'destination guide' && title.toLowerCase() !== 'holiday themes' ? _react.default.createElement("span", {
      className: "click-overrider"
    }, _react.default.createElement("meta", {
      itemProp: "name",
      content: entity.title
    }), _react.default.createElement("a", {
      itemProp: "url",
      content: entity.url,
      href: entity.url
    })) : null, entity.subentities.filter(entity => entity.subentities.length).map((location, index) => _react.default.createElement("ul", {
      className: "hide",
      id: `${uniqueId}${index}`,
      "data-amp-bind-class": `showHeading${uniqueId} ? 'list-side-menu m0 sbc5 listLink list-reset subMenu': 'hide'`
    }, _react.default.createElement("li", null, _react.default.createElement("p", {
      className: "pl0 pl15 fw9 flex spaceBetween alignCenter pr0 hauto-i"
    }, location.title, entity.title.toLowerCase() !== 'hotels' && location.url ? _react.default.createElement("a", {
      className: "sfc1 fw7 view-all  height link",
      href: location.url
    }, "View All") : null)), location.subentities.slice(0, 7).map((item, index) => _react.default.createElement("li", null, _react.default.createElement("meta", {
      itemProp: "name",
      content: item.title
    }), _react.default.createElement("a", {
      className: `pl0 pt0 pb0 hauto-i mt15 mb15 ${index > this.state.showIndex ? 'hide' : ''}`,
      itemProp: "url",
      content: item.url,
      href: item.url
    }, item.title))), location.subentities.length > 7 && location.subentities.slice(7, location.subentities.length).map((item, index) => _react.default.createElement("li", {
      "data-amp-bind-class": `showLink${uniqueId} ? '' : 'hide'`,
      className: "hide",
      id: `${uniqueId}${index}`
    }, _react.default.createElement("meta", {
      itemProp: "name",
      content: item.title
    }), _react.default.createElement("a", {
      className: "pl0 pt0 pb0 hauto-i mt15 mb15",
      itemProp: "url",
      content: item.url,
      href: item.url
    }, item.title))), location.subentities.length > 8 ? _react.default.createElement("li", {
      className: "",
      key: uniqueId,
      "data-amp-bind-class": `showLink${uniqueId} ? "hide" : ""`
    }, _react.default.createElement(_Action.default, {
      events: {
        tap: [`AMP.setState({showLink${uniqueId} : true})`]
      }
    }, props => _react.default.createElement("button", props, _react.default.createElement("div", {
      className: "load-more f14 link",
      id: `button${uniqueId}`
    }, "Load More")))) : null)))));
  }

};
AmpBurgerMenuLinks.propTypes = {
  entity: _propTypes.default.object,
  items: _propTypes.default.object,
  title: _propTypes.default.string
};
var _default = AmpBurgerMenuLinks;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/header/AmpHeader.js":
/*!*****************************************!*\
  !*** ./amp/modules/header/AmpHeader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _AmpBurgerMenu = _interopRequireDefault(__webpack_require__(/*! ./AmpBurgerMenu */ "./amp/modules/header/AmpBurgerMenu.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__(/*! amp/modules/searchBar/SearchBar */ "./amp/modules/searchBar/SearchBar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AmpHeader = () => {
  return _react.default.createElement("header", {
    className: "pbc1"
  }, _react.default.createElement("div", {
    className: "header-con header-con-shadow wfull clearfix"
  }, _react.default.createElement("div", {
    className: "burgerMenu-amp"
  }, _react.default.createElement(_AmpBurgerMenu.default, null)), _react.default.createElement("div", {
    className: "tt-logo"
  }, _react.default.createElement("a", {
    href: "/"
  })), _react.default.createElement("div", {
    className: "hide"
  })), _react.default.createElement(_SearchBar.default, null));
};

var _default = AmpHeader;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/header/AmpHeader.scss":
/*!*******************************************!*\
  !*** ./amp/modules/header/AmpHeader.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"searchBox": "_1uY5z",
	"header-con": "_1Z9km",
	"user-img-loggedin": "_1rJHg",
	"header-Amp": "_2cZ3F",
	"sample-sidebar": "_lh28l",
	"previewOnly": "_2tnrW",
	"sidebar-right": "_3HjJb",
	"amp-sidebar-toolbar-target-shown": "_33ZQd",
	"amp-list-side-menu": "_yX11f",
	"amp-header-con-shadow": "_1KfBi",
	"tt-logo": "_rSCyn",
	"hide": "_1v-yc",
	"siderbar-left": "_kIUvV",
	"sidebar-list": "_imwPp",
	"list-side-menu": "_1ZHqB",
	"listLink": "_1riiW",
	"load-more": "_yJOpd",
	"header-title": "_4c3f4",
	"back-arrow": "_3UMhS",
	"share-logo-right": "_M-77P",
	"amp-social-share-system": "_3YEcJ",
	"sliderText": "_Ye1X8",
	"burgerMenu-amp": "_xYcZU",
	"sidenav-icons": "_hT9m5",
	"iconOne": "_kspJg",
	"iconTwo": "_34Okd",
	"iconNine": "_19r9C",
	"iconTen": "_2m8e1",
	"iconEleven": "_GbhhZ",
	"iconTwelve": "_3tBCA",
	"iconThirteen": "_Hoygw",
	"iconFourteen": "_3qbRV",
	"iconFifteen": "_TopTg",
	"tour_packages": "_3RpPD",
	"family_packages": "_2LKos",
	"honeymoon_packages": "_1hGQl",
	"hotels": "_1Pwca",
	"destination_guide": "_3sLyn",
	"holiday_themes": "_1hvm9",
	"subMenu": "_2-vjZ",
	"sidenav-amp": "__An9e",
	"arrowDown": "_1y_yZ",
	"customPills": "_1CE0N",
	"quicklinksContainer": "_3uroO",
	"noBeforeAfter": "_GnbA3",
	"sidebar-button": "_2I2ec"
};

/***/ }),

/***/ "./amp/modules/searchBar/SearchBar.js":
/*!********************************************!*\
  !*** ./amp/modules/searchBar/SearchBar.js ***!
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

const SearchBar = () => _react.default.createElement("div", null, _react.default.createElement("div", {
  className: "pl8 pr8 pb8 ampSearch"
}, _react.default.createElement("form", {
  className: "amp-header-search",
  method: "get",
  action: "/search_results",
  target: "_blank"
}, _react.default.createElement("fieldset", null, _react.default.createElement("input", {
  className: "searchBox sbcw",
  type: "search",
  name: "q",
  placeholder: "Destination, duration, budget, theme... ",
  required: true
}), _react.default.createElement("input", {
  type: "submit",
  value: "",
  className: "searchClick"
})))));

var _default = SearchBar;
exports.default = _default;

/***/ }),

/***/ "./amp/modules/searchBar/SearchBar.scss":
/*!**********************************************!*\
  !*** ./amp/modules/searchBar/SearchBar.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ampSearch": "_akE3B",
	"amp-header-search": "_KZ_Mk",
	"searchBox": "_3LoAt",
	"searchClick": "_1WW88"
};

/***/ }),

/***/ "./amp/screens/layout/AmpLayout.js":
/*!*****************************************!*\
  !*** ./amp/screens/layout/AmpLayout.js ***!
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

var _AmpHeader = _interopRequireDefault(__webpack_require__(/*! amp/modules/header/AmpHeader */ "./amp/modules/header/AmpHeader.js"));

var _footer = _interopRequireDefault(__webpack_require__(/*! amp/modules/footer */ "./amp/modules/footer/index.js"));

__webpack_require__(/*! amp/modules/header/AmpHeader.scss */ "./amp/modules/header/AmpHeader.scss");

__webpack_require__(/*! amp/modules/searchBar/SearchBar.scss */ "./amp/modules/searchBar/SearchBar.scss");

__webpack_require__(/*! amp/modules/footer/Footer.scss */ "./amp/modules/footer/Footer.scss");

__webpack_require__(/*! ./AmpLayout.scss */ "./amp/screens/layout/AmpLayout.scss");

var _chatbotPopup = _interopRequireDefault(__webpack_require__(/*! amp/modules/common/ChatbotPopup/chatbotPopup */ "./amp/modules/common/ChatbotPopup/chatbotPopup.js"));

__webpack_require__(/*! amp/modules/common/ChatbotPopup/chatbotPopup.scss */ "./amp/modules/common/ChatbotPopup/chatbotPopup.scss");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AmpLayout = (_temp = _class = class AmpLayout extends _react.default.Component {
  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_AmpHeader.default, null), this.props.children, _react.default.createElement(_chatbotPopup.default, this.props), _react.default.createElement(_footer.default, null));
  }

}, _class.propTypes = {
  children: _propTypes.default.object.isRequired
}, _temp);
;
var _default = AmpLayout;
exports.default = _default;

/***/ }),

/***/ "./amp/screens/layout/AmpLayout.scss":
/*!*******************************************!*\
  !*** ./amp/screens/layout/AmpLayout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"clearfix": "_3xTzW",
	"row": "_PPNtS",
	"nowrap": "_G6Ns2",
	"wfull": "_TRLjV",
	"smooth": "_1dR-J",
	"row-": "_2Q4w4",
	"col-xs-1": "_27N8N",
	"col-xs-2": "_7N9VL",
	"col-xs-3": "_3cnh7",
	"col-xs-4": "_ffEo-",
	"col-xs-5": "_1gBqg",
	"col-xs-6": "_IwL3x",
	"col-xs-7": "_4nRMj",
	"col-xs-8": "_2E1eG",
	"col-xs-9": "_1KK-4",
	"col-xs-10": "_3v5K0",
	"col-xs-11": "_3u19i",
	"col-xs-12": "_1Yplk",
	"sfcw": "_3U8mr",
	"sfc3": "_1Cvqs",
	"link": "_1zc8Y",
	"sbcw": "_1UoAe",
	"pbc1": "_33X0W",
	"pfc1": "_20c0g",
	"sbc5": "_c7QyP",
	"sfc6": "_1K3Yo",
	"pfc4": "_2u70d",
	"pfc5": "_N_elj",
	"sbco": "_1zh78",
	"pbc3": "_36bTm",
	"pfc3": "_13aZ2",
	"relative": "_2Lcog",
	"absolute": "_36m0G",
	"fixed": "_3xBzj",
	"z10": "_3ZWvU",
	"z11": "_1XEjo",
	"overflowa": "_1cAEP",
	"f10": "_1fspl",
	"f12": "_2nDw-",
	"f14": "_1CkGE",
	"f14p": "_sObZC",
	"f16": "_3Xc8y",
	"f18p": "_3lGUk",
	"f20": "_34-7A",
	"f24": "_1YeV2",
	"f32": "_3Ehe3",
	"fw9": "_38hhc",
	"fwb": "_PSagH",
	"f18": "_1oyJU",
	"fw4": "_2-2Vk",
	"fw7": "_2H9VC",
	"tdl": "_1z8ZJ",
	"text-uppercase": "_wZfCU",
	"center": "_jD5_s",
	"right-align": "_2OwnJ",
	"fright": "_149ua",
	"bb": "_1kxAN",
	"fitalic": "_2qyB-",
	"list-reset": "_9T_GO",
	"p0": "_VuiqW",
	"p3": "_2ChHo",
	"p5": "_3IA00",
	"p8": "_2UrzT",
	"p15": "_5sBne",
	"pt0": "_1gO63",
	"pt1": "__Breo",
	"pt4": "_1y6lM",
	"pt5": "_2LnLo",
	"pt8": "_30s4-",
	"pt15": "_D1G-k",
	"pt24": "_1WK3N",
	"pb0": "_1KPmq",
	"pb4": "_3GWQF",
	"pb5": "_26Cfn",
	"pb8": "_wBdTZ",
	"pb15": "_1ljm5",
	"pb24": "_3FjVF",
	"pb64": "_EpTiy",
	"pl0": "_35hem",
	"pl4": "_2Obcp",
	"pl8": "_1GZpz",
	"pl15": "_2ebxN",
	"pl24": "_1P8ON",
	"pl48": "_1363p",
	"pl64": "_2wWY_",
	"pr0": "_2oHrE",
	"pr1": "_3po7N",
	"pr3": "_2IiTi",
	"pr4": "_k1ZKT",
	"pr8": "_1rNRR",
	"pr15": "_1Lljk",
	"pr24": "_2nd9z",
	"pr48": "_ac8cK",
	"pr64": "_1r0OA",
	"m0": "_3K3BU",
	"mt1": "_2lLGu",
	"mt4": "_29Uqi",
	"mt8": "_lJBvf",
	"mt15": "_1mO_B",
	"mt24": "_2qruX",
	"mb0": "_1PLNO",
	"mb5": "_rQA1d",
	"mb8": "_3PLNF",
	"mb15": "_1yrOm",
	"mb24": "_28iFk",
	"ml2": "_3Nk0A",
	"ml5": "_11Tzr",
	"ml8": "_1txur",
	"ml15": "_3R3XG",
	"mr5": "_2xOSw",
	"mr8": "_32Og8",
	"mr15": "_E8Apy",
	"block": "_evM0Y",
	"iblock": "_pktFx",
	"flex": "_6dQyp",
	"flexWrap": "_3IYPi",
	"justifyCenter": "_1A3_h",
	"alignCenter": "_242a3",
	"spaceBetween": "_2smDP",
	"flexFull": "_3o-BN",
	"overflowXscroll": "_1Dye4",
	"l0": "_3Tvor",
	"r0": "_37woS",
	"r5": "_nrrQ5",
	"t0": "_2YZId",
	"b0": "_2uVkj",
	"b10": "_34BWk",
	"bs4": "_f6H8_",
	"radius100": "_3i-Gf",
	"absolute-center-v": "_3QZbs",
	"heading-common-center": "_2YhW3",
	"btn-pri-large": "_1q4pb",
	"btn-filled-pri-large": "_3bc3l"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbXAvaGVscGVycy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0NoYXRib3RQb3B1cC9jaGF0Ym90UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvY29tbW9uL0NoYXRib3RQb3B1cC9jaGF0Ym90UG9wdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9jb21tb24vQ2hhdGJvdFBvcHVwL2NoYXRib3RUcmlwVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2Zvb3Rlci9Gb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvaGVhZGVyL0FtcEJ1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYW1wL21vZHVsZXMvaGVhZGVyL0FtcEJ1cmdlck1lbnVMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9oZWFkZXIvQW1wSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL2hlYWRlci9BbXBIZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvbW9kdWxlcy9zZWFyY2hCYXIvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2FtcC9tb2R1bGVzL3NlYXJjaEJhci9TZWFyY2hCYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hbXAvc2NyZWVucy9sYXlvdXQvQW1wTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2FtcC9zY3JlZW5zL2xheW91dC9BbXBMYXlvdXQuc2NzcyJdLCJuYW1lcyI6WyJPTl9BVFRSSUJVVEUiLCJBY3Rpb24iLCJjaGlsZHJlbiIsImV2ZW50cyIsImV2ZW50U3RyaW5nIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImVudGlyZUV2ZW50U3RyaW5nIiwiZXZlbnROYW1lIiwiZXZlbnRBY3Rpb25zIiwiZXZlbnRJbmRleCIsImFjdGlvblN0cmluZyIsImVudGlyZUFjdGlvblN0cmluZyIsIm5leHRBY3Rpb24iLCJhY3Rpb25JbmRleCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib2JqZWN0T2YiLCJhcnJheU9mIiwic3RyaW5nIiwiQ2hhdGJvdFBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImNsb3NlUG9wdXAiLCJlIiwiZmxhZyIsInN0b3BQcm9wYWdhdGlvbiIsInNldFN0YXRlIiwic2hvd1BvcHVwIiwicHJvcHMiLCJvcGVuQ2hhdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImdldFVybCIsIm9wdGlvbklkIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwic3RhdGUiLCJyZW5kZXIiLCJ0YXAiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaSIsInNlbGVjdE9wdGlvbiIsImxhYmVsIiwib2JqZWN0IiwiaWQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJ0cmlnZ2VyIiwicmJ0S2V5IiwicmJ0VmFsdWUiLCJhcGlGbGFnIiwiZHluYW1pY0ZsYWciLCJ1c2VyIiwiRm9vdGVyIiwiQW1wQnVyZ2VyTWVudSIsIml0ZW1zIiwidWkiLCJsaXN0aW5ncyIsImxpc3RpbmciLCJsZW5ndGgiLCJjYXRlZ29yeSIsImRlc3RpbmF0aW9uIiwiZW50aXR5IiwiaW5kZXgiLCJ0aXRsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInRvcE5hdmlnYXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkFtcEJ1cmdlck1lbnVMaW5rcyIsIkJ1cmdlck1lbnVMaW5rcyIsInNob3dJbmRleCIsInNob3dMb2FkTW9yZSIsInJlbmRlclN1YkVudGl0aWVzIiwiaXRlbSIsInVybCIsImljb25DbGFzcyIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJqb2luIiwidW5pcXVlSWQiLCJzdWJlbnRpdGllcyIsImZpbHRlciIsInNsaWNlIiwiQW1wSGVhZGVyIiwiU2VhcmNoQmFyIiwiQW1wTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxlQUFlLGdCQUFyQjs7O0FBQ1AsTUFBTUMsU0FBUyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQTJCO0FBQ3hDLFFBQU1DLGNBQWNDLE9BQU9DLE9BQVAsQ0FBZUgsTUFBZixFQUF1QkksTUFBdkIsQ0FBOEIsQ0FBQ0MsaUJBQUQsRUFBb0IsQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLENBQXBCLEVBQStDQyxVQUEvQyxLQUE4RDtBQUM5RyxVQUFNQyxlQUFlRixhQUFhSCxNQUFiLENBQW9CLENBQUNNLGtCQUFELEVBQXFCQyxVQUFyQixFQUFpQ0MsV0FBakMsS0FBa0QsR0FBRUYsa0JBQW1CLEdBQUVFLGNBQWMsQ0FBZCxHQUFrQixHQUFsQixHQUF3QixFQUFHLEdBQUVELFVBQVcsRUFBckksRUFBd0ksRUFBeEksQ0FBckI7QUFFQSxXQUFRLEdBQUVOLGlCQUFrQixHQUFFRyxhQUFhLENBQWIsR0FBaUIsR0FBakIsR0FBdUIsRUFBRyxHQUFFRixTQUFVLElBQUdHLFlBQWEsRUFBcEY7QUFDRCxHQUptQixFQUlqQixFQUppQixDQUFwQjtBQUtBLFNBQU9WLFNBQVM7QUFBRSxLQUFDRixZQUFELEdBQWdCSTtBQUFsQixHQUFULENBQVA7QUFDRCxDQVBEOztBQVNBSCxPQUFPZSxTQUFQLEdBQW1CO0FBQ2pCZCxZQUFVZSxtQkFBVUMsSUFBVixDQUFlQyxVQURSO0FBRWpCaEIsVUFBUWMsbUJBQVVHLFFBQVYsQ0FBbUJILG1CQUFVSSxPQUFWLENBQWtCSixtQkFBVUssTUFBVixDQUFpQkgsVUFBbkMsRUFBK0NBLFVBQWxFLEVBQThFQTtBQUZyRSxDQUFuQjtlQUtlbEIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztJ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImFtcC1sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBPTl9BVFRSSUJVVEUgPSAnY3VzdG9tQW1wRXZlbnQnO1xuY29uc3QgQWN0aW9uID0gKHsgY2hpbGRyZW4sIGV2ZW50cywgfSkgPT4ge1xuICBjb25zdCBldmVudFN0cmluZyA9IE9iamVjdC5lbnRyaWVzKGV2ZW50cykucmVkdWNlKChlbnRpcmVFdmVudFN0cmluZywgW2V2ZW50TmFtZSwgZXZlbnRBY3Rpb25zXSwgZXZlbnRJbmRleCkgPT4ge1xuICAgIGNvbnN0IGFjdGlvblN0cmluZyA9IGV2ZW50QWN0aW9ucy5yZWR1Y2UoKGVudGlyZUFjdGlvblN0cmluZywgbmV4dEFjdGlvbiwgYWN0aW9uSW5kZXgpID0+IGAke2VudGlyZUFjdGlvblN0cmluZ30ke2FjdGlvbkluZGV4ID4gMCA/ICcsJyA6ICcnfSR7bmV4dEFjdGlvbn1gLCAnJyk7XG5cbiAgICByZXR1cm4gYCR7ZW50aXJlRXZlbnRTdHJpbmd9JHtldmVudEluZGV4ID4gMCA/ICc7JyA6ICcnfSR7ZXZlbnROYW1lfToke2FjdGlvblN0cmluZ31gO1xuICB9LCAnJyk7XG4gIHJldHVybiBjaGlsZHJlbih7IFtPTl9BVFRSSUJVVEVdOiBldmVudFN0cmluZyB9KTtcbn07XG5cbkFjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBldmVudHM6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL2NoYXRib3RUcmlwVHlwZSc7XG5cbmNsYXNzIENoYXRib3RQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQb3B1cDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBjbG9zZVBvcHVwID0gKGUsIGZsYWcpID0+IHtcbiAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSk7XG4gICAgdGhpcy5wcm9wcy5jbG9zZVBvcHVwKGZsYWcpO1xuICB9O1xuXG4gIG9wZW5DaGF0SGFuZGxlciA9IChlLCBmbGFnKSA9PiB7XG4gICAgZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgb3BlbkNoYXRIYW5kbGVyKGUpO1xuICAgIHRoaXMuY2xvc2VQb3B1cChlLCBmbGFnKTtcbiAgfTtcblxuICBnZXRVcmwgPSAob3B0aW9uSWQpID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgIHJldHVybiBvcHRpb25JZCA/IGAvd3ZjaGF0Ym90P212aWV3PXRydWUmc3JjVXJsPSR7cGF0aC5yZXBsYWNlKCcvJywgJycpfSZvcHRpb25JZD0ke29wdGlvbklkfWAgOlxuICAgICAgYC93dmNoYXRib3Q/bXZpZXc9dHJ1ZSZzcmNVcmw9JHtwYXRoLnJlcGxhY2UoJy8nLCAnJyl9YDtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93UG9wdXAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhcmVudC1jbGFzcy1jaGF0IGFkZC1tYXNrJ1xuICAgICAgICAgICBkYXRhLWFtcC1iaW5kLWNsYXNzPVwiaGlkZUNoYXRQb3B1cCA/ICdoaWRlJyA6ICdwYXJlbnQtY2xhc3MtY2hhdCBhZGQtbWFzaydcIlxuICAgICAgICAgICAgIGlkPSdwYXJlbnQtY2xhc3MtY2hhdCc+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5vcGVuQ2hhdEhhbmRsZXJ9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPXtzaG93UG9wdXAgPyAncG9wdXAtY2xhc3Mgc2hvd0NoYXRQb3AnIDogJ3BvcHVwLWNsYXNzIHRyYW5zZm9ybS1wb3B1cCd9IGlkPSdwb3B1cC1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkaW5nLXRvcCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Bhbi1sb2dvJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nby1oZWFkaW5nJz48cCBjbGFzc05hbWU9J2hlYWRpbmctcG9wJz5BcmUgeW91IGxvb2tpbmcgZm9yIGhlbHAgaW4gcGxhbm5pbmcgeW91ciB0cmlwPzwvcD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0cmknIC8+PC9kaXY+XG4gICAgICAgICAgICA8QWN0aW9uIGV2ZW50cz17eyB0YXA6IFsnQU1QLnNldFN0YXRlKHtoaWRlQ2hhdFBvcHVwIDogIWhpZGVDaGF0UG9wdXB9KSddIH19PlxuICAgICAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Nyb3NzLXBvcHVwJyAgey4uLnByb3BzfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wdXAtbWlkZGxlJz5cbiAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxwIGtleT17aX0gb25DbGljaz17KGUpID0+IHRoaXMucHJvcHMuc2VsZWN0T3B0aW9uKG9wdGlvbiwgZSl9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt0aGlzLmdldFVybChvcHRpb24ub3B0aW9uSWQpfT57b3B0aW9uLmxhYmVsfTwvTGluaz48L3A+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3BvcHVwLWxvd2VyJyB0bz17dGhpcy5nZXRVcmwoKX0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoYXRfaGFuZGxlcl9pbnB1dFwiIGNsYXNzTmFtZT1cImhpZGRlbl9lbGVtZW50XCI+dHlwZSBvZiBzZWxlY3Q8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hhdF9oYW5kbGVyX2lucHV0XCIgcGxhY2Vob2xkZXI9J1R5cGUgb3Igc2VsZWN0IGZyb20gYWJvdmUuLi4nXG4gICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNoYXRIYW5kbGVyKGUsICdpbnB1dENsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzdWJtaXQtcG9wdXAnPlNFTkQ8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DaGF0Ym90UG9wdXAucHJvcFR5cGVzID0ge1xuICBzZWxlY3RPcHRpb246IFByb3BUeXBlcy5mdW5jLFxuICBjbG9zZVBvcHVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRib3RQb3B1cDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBhcmVudC1jbGFzcy1jaGF0XCI6IFwiXzJXM3JlXCIsXG5cdFwiY2hhdC1jbG9zZS1zcGFuXCI6IFwiXzFsbXlNXCIsXG5cdFwicG9wdXAtY2xhc3NcIjogXCJfM0I5UGlcIixcblx0XCJzaG93Q2hhdFBvcFwiOiBcIl8yZzNKX1wiLFxuXHRcInNwYW4tbG9nb1wiOiBcIl8zQkpDMlwiLFxuXHRcImxvZ29cIjogXCJfMWhFUEpcIixcblx0XCJoZWFkaW5nLXRvcFwiOiBcIl8ydlFyQ1wiLFxuXHRcImxvZ28taGVhZGluZ1wiOiBcIl8xRlpjMVwiLFxuXHRcImNyb3NzLXBvcHVwXCI6IFwiXzJ5cWs3XCIsXG5cdFwidHJpXCI6IFwiXzFaM09FXCIsXG5cdFwicG9wdXAtbWlkZGxlXCI6IFwiXzFJQzFBXCIsXG5cdFwiaGlkZGVuX2VsZW1lbnRcIjogXCJfQzlzVVNcIixcblx0XCJwb3B1cC1sb3dlclwiOiBcIl8yRVdkZlwiLFxuXHRcInN1Ym1pdC1wb3B1cFwiOiBcIl9yd1R4TFwiLFxuXHRcImFuaW1hdGVkLWJhbm5lci11XCI6IFwiXzJGT1R6XCIsXG5cdFwidHJhbnNmb3JtLXBvcHVwXCI6IFwiX1N4WXlTXCJcbn07IiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgaWQgOiAnVHJpcFR5cGUnLFxuICAgIG9wdGlvbklkOiAxLFxuICAgIHZhbHVlOiAnSSBhbSBsb29raW5nIGZvciBhIHJvbWFudGljIHRyaXAuJyxcbiAgICBsYWJlbDogJ1llcyEgQSByb21hbnRpYyB0cmlwJyxcbiAgICBtZXNzYWdlOiAnWWVzISBBIHJvbWFudGljIHRyaXAnLFxuICAgIHRyaWdnZXI6ICdBc3Npc3RhbmNlIFR5cGUgTW9kdWxlJyxcbiAgICByYnRLZXk6ICd0b3VyJyxcbiAgICByYnRWYWx1ZTogJ3JvbWFudGljJyxcbiAgICBhcGlGbGFnOiBmYWxzZSxcbiAgICBkeW5hbWljRmxhZzogZmFsc2UsXG4gICAgdXNlcjogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQgOiAnVHJpcFR5cGUnLFxuICAgIG9wdGlvbklkOiAyLFxuICAgIHZhbHVlOiAnSSBhbSBsb29raW5nIGZvciBhIGZhbWlseSB0cmlwLicsXG4gICAgbGFiZWw6ICdZZXMhIEZvciBhIGZhbWlseSB0cmlwJyxcbiAgICBtZXNzYWdlOiAnWWVzISBGb3IgYSBmYW1pbHkgdHJpcCcsXG4gICAgdHJpZ2dlcjogJ0Fzc2lzdGFuY2UgVHlwZSBNb2R1bGUnLFxuICAgIHJidEtleTogJ3RvdXInLFxuICAgIHJidFZhbHVlOiAnZmFtaWx5JyxcbiAgICBhcGlGbGFnOiBmYWxzZSxcbiAgICBkeW5hbWljRmxhZzogZmFsc2UsXG4gICAgdXNlcjogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQgOiAnVHJpcFR5cGUnLFxuICAgIG9wdGlvbklkOiAzLFxuICAgIHZhbHVlOiAnSSBhbSBsb29raW5nIGZvciBhIGhvbmV5bW9vbiB0cmlwLicsXG4gICAgbGFiZWw6ICdZZXMhIEEgaG9uZXltb29uIHRyaXAnLFxuICAgIG1lc3NhZ2U6ICdZZXMhIEEgaG9uZXltb29uIHRyaXAnLFxuICAgIHRyaWdnZXI6ICdBc3Npc3RhbmNlIFR5cGUgTW9kdWxlJyxcbiAgICByYnRLZXk6ICd0b3VyJyxcbiAgICByYnRWYWx1ZTogJ2hvbmV5bW9vbicsXG4gICAgYXBpRmxhZzogZmFsc2UsXG4gICAgZHluYW1pY0ZsYWc6IGZhbHNlLFxuICAgIHVzZXI6IHRydWVcbiAgfSxcbiAge1xuICAgIGlkIDogJ1RyaXBUeXBlJyxcbiAgICBvcHRpb25JZDogNCxcbiAgICB2YWx1ZTogJ0kgYW0gbG9va2luZyBmb3IgYSB0cmlwIHdpdGggbXkgZnJpZW5kcy4nLFxuICAgIGxhYmVsOiAnWWVzISBGb3IgYSB0cmlwIHdpdGggbXkgZnJpZW5kcycsXG4gICAgbWVzc2FnZTogJ1llcyEgRm9yIGEgdHJpcCB3aXRoIG15IGZyaWVuZHMnLFxuICAgIHRyaWdnZXI6ICdBc3Npc3RhbmNlIFR5cGUgTW9kdWxlJyxcbiAgICByYnRLZXk6ICd0b3VyJyxcbiAgICByYnRWYWx1ZTogJ2ZyaWVuZHMnLFxuICAgIGFwaUZsYWc6IGZhbHNlLFxuICAgIGR5bmFtaWNGbGFnOiB0cnVlLFxuICAgIHVzZXI6IHRydWVcbiAgfSxcbiAge1xuICAgIGlkIDogJ1RyaXBUeXBlJyxcbiAgICBvcHRpb25JZDogNSxcbiAgICB2YWx1ZTogJ0kgYW0gbG9va2luZyBmb3IgYSBncm91cCB0cmlwLicsXG4gICAgbGFiZWw6ICdGb3IgYSBncm91cCB0cmlwJyxcbiAgICBtZXNzYWdlOiAnRm9yIGEgZ3JvdXAgdHJpcCcsXG4gICAgdHJpZ2dlcjogJ0Fzc2lzdGFuY2UgVHlwZSBNb2R1bGUnLFxuICAgIHJidEtleTogJ3RvdXInLFxuICAgIHJidFZhbHVlOiAnZ3JvdXAnLFxuICAgIGFwaUZsYWc6IGZhbHNlLFxuICAgIGR5bmFtaWNGbGFnOiB0cnVlLFxuICAgIHVzZXI6IHRydWVcbiAgfSxcbiAge1xuICAgIGlkIDogJ1RyaXBUeXBlJyxcbiAgICBvcHRpb25JZDogNixcbiAgICB2YWx1ZTogJ0kgYW0gbG9va2luZyBmb3IgYSBzb2xvIHRyaXAuJyxcbiAgICBsYWJlbDogJ0ZvciBhIHNvbG8gdHJpcCcsXG4gICAgbWVzc2FnZTogJ0ZvciBhIHNvbG8gdHJpcCcsXG4gICAgdHJpZ2dlcjogJ0Fzc2lzdGFuY2UgVHlwZSBNb2R1bGUnLFxuICAgIHJidEtleTogJ3RvdXInLFxuICAgIHJidFZhbHVlOiAnc29sbycsXG4gICAgYXBpRmxhZzogZmFsc2UsXG4gICAgZHluYW1pY0ZsYWc6IHRydWUsXG4gICAgdXNlcjogdHJ1ZVxuICB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJhbXBGb290ZXIgcGI2NFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckxpbmtzXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgZmxleFdyYXAganVzdGlmeUNlbnRlciBmb290ZXJMaW5rTGlzdCBsaXN0LXJlc2V0XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5BYm91dCBVczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5XZSBBcmUgSGlyaW5nITwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5UZWFtPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPkJsb2c8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+VGVzdGltb25pYWxzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlQmQzwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5DYW5jZWxsYXRpb248L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+RkFRczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0OCBtYjI0IGxvY2F0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZmN3IGNlbnRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnc5IGYxNCBtMCBtYjE1IHNmYzYgdGV4dC11cHBlcmNhc2UgXCI+Q29ycG9yYXRlIE9mZmljZTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBtMFwiPkhvbGlkYXkgVHJpYW5nbGUgVHJhdmVsIFByaXZhdGUgTGltaXRlZDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBtMFwiPlBsb3QgTm8gLSAyOSAsIDNyZCAmYW1wOyA0dGggRmxvb3IsIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBtMFwiPkR5bmFtaWMgSG91c2UsIE1hcnV0aSBJbmR1c3RyaWFsIENvbXBsZXgsPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIG0wXCI+U2VjdG9yIDE4ICwgR3VydWdyYW0gLSAxMjIwMTUsIEhhcnlhbmE8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTIgbTBcIj5MYW5kbGluZTogPGEgaHJlZj1cInRlbDoxODAwMTIzNTU1NVwiPjE4MDAgMTIzIDU1NTU8L2E+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjI0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZnVsbFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3RlclNvY2lhbEljb25zIGxpc3QtcmVzZXQgZmxleCBwMFwiPlxuICAgICAgICAgICAgICA8bGk+XG5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cblxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBmbGV4RnVsbCBzZmN3XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTIgaWJsb2NrIGF0X21hZGVsb3ZlXCI+TWFkZSB3aXRoPC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhcnRcIi8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTIgaWJsb2NrXCI+aW4gSW5kaWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIHBmYzQgcmlnaHQtYWxpZ25cIj5BbGwgcmlnaHRzIHJlc2VydmVkIMKpIDIwMjA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhbXBGb290ZXJcIjogXCJfMm5NSExcIixcblx0XCJmb290ZXJMaW5rTGlzdFwiOiBcIl8xMVB2aFwiLFxuXHRcImxvY2F0aW9uXCI6IFwiXzFQZDJ1XCIsXG5cdFwiaGVhcnRcIjogXCJfMTZvOHRcIixcblx0XCJmb290ZXJTb2NpYWxJY29uc1wiOiBcIl8zMFIxUlwiXG59OyIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEFtcEJ1cmdlck1lbnVMaW5rcyBmcm9tICcuL0FtcEJ1cmdlck1lbnVMaW5rcyc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5cbmNsYXNzIEFtcEJ1cmdlck1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW1zLCB1aSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsaXN0aW5ncyA9IGl0ZW1zLmxpc3RpbmcgJiYgaXRlbXMubGlzdGluZy5sZW5ndGggPyBpdGVtcy5saXN0aW5nIDogW107XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBpdGVtcy5jYXRlZ29yeSAmJiBpdGVtcy5jYXRlZ29yeS5sZW5ndGggPyBpdGVtcy5jYXRlZ29yeSA6IFtdO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gaXRlbXMuZGVzdGluYXRpb24gJiYgaXRlbXMuZGVzdGluYXRpb24ubGVuZ3RoID8gaXRlbXMuZGVzdGluYXRpb24gOiBbXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpdGVtU2NvcGU9XCJpdGVtc2NvcGVcIiBpdGVtVHlwZT1cImh0dHBzOi8vc2NoZW1hLm9yZy9TaXRlTmF2aWdhdGlvbkVsZW1lbnRcIj5cbiAgICAgICAgPGFtcC1zaWRlYmFyIGlkPVwic2lkZWJhci1sZWZ0XCIgbGF5b3V0PVwibm9kaXNwbGF5XCIgc2lkZT1cImxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiYzEgcmVsYXRpdmUgcHQyNCBwbDE1IHByMTUgcGIyNCBoZWFkZXJBbXBcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJzZmN3IGZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMyBwbDAgcHIwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWltZy1sb2dnZWRpbiByYWRpdXMxMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxhbXAtaW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLnRyYXZlbHRyaWFuZ2xlLmNvbS9hdHRhY2htZW50cy9waWN0dXJlcy85MDExOTQvb3JpZ2luYWwvbWFsZTMtOTYucG5nP3RyPXctNDgsaC00OFwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImF2dGFyXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ4XCJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgICAgPC9hbXAtaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtOSByZWxhdGl2ZSBwbDAgcHIwIHVzZXItbG9nZ2VkaW4tbmFtZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZmN3IHRleHQtY2FwaXRhbGl6ZSBmMThwIG0wIG1sMTVcIj5HdWVzdDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFtcC1saXN0LXNpZGUtbWVudSBtMFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cIm5hbWVcIiBjb250ZW50PVwiTG9naW4vU2lnbiB1cFwiIC8+XG4gICAgICAgICAgICAgIDxhIGl0ZW1Qcm9wPVwidXJsXCIgY29udGVudD1cIi91c2Vycy9zaWduX2luXCIgaHJlZj1cIi91c2Vycy9zaWduX2luXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZW5hdi1pY29ucyBpY29uT25lXCIgLz5cbiAgICAgICAgICAgICAgICBMb2dpbi9TaWdudXBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPG1ldGEgaXRlbVByb3A9XCJuYW1lXCIgY29udGVudD1cIkhvbWVcIiAvPlxuICAgICAgICAgICAgICA8YSBpdGVtUHJvcD1cInVybFwiIGNvbnRlbnQ9XCIvXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWRlbmF2LWljb25zIGljb25Ud29cIiAvPlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGlzdGluZ3MubWFwKChlbnRpdHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxBbXBCdXJnZXJNZW51TGlua3MgZW50aXR5PXtlbnRpdHl9IHRpdGxlPXtlbnRpdHkudGl0bGV9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24ubWFwKChlbnRpdHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxBbXBCdXJnZXJNZW51TGlua3MgZW50aXR5PXtlbnRpdHl9IHRpdGxlPSdEZXN0aW5hdGlvbiBHdWlkZScga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjYXRlZ29yeS5tYXAoKGVudGl0eSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEFtcEJ1cmdlck1lbnVMaW5rcyBlbnRpdHk9e2VudGl0eX0gdGl0bGU9J0hvbGlkYXkgVGhlbWVzJyBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYW1wLWxpc3Qtc2lkZS1tZW51IG0wIGJiIHBiMTUgbWIyNFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cIm5hbWVcIiBjb250ZW50PVwiSG9saWRheSBEZWFsc1wiIC8+XG4gICAgICAgICAgICAgIDxhIGl0ZW1Qcm9wPVwidXJsXCIgaHJlZj1cIi9kZWFscy10b3VyLXBhY2thZ2VzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZW5hdi1pY29ucyBpY29uTmluZVwiIC8+XG4gICAgICAgICAgICAgICAgSG9saWRheSBEZWFsc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cIm5hbWVcIiBjb250ZW50PVwiTHV4dXJ5ICBIb2xpZGF5c1wiIC8+XG4gICAgICAgICAgICAgIDxhIGl0ZW1Qcm9wPVwidXJsXCIgaHJlZj1cIi9sdXh1cnktdG91ci1wYWNrYWdlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZGVuYXYtaWNvbnMgaWNvbk5pbmVcIiAvPlxuICAgICAgICAgICAgICAgIEx1eHVyeSBIb2xpZGF5c1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhbXAtbGlzdC1zaWRlLW1lbnUgYmIgcGIxNSBtYjBcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJIb3cgSXQgV29ya3NcIiAvPlxuICAgICAgICAgICAgICAgIDxhIGl0ZW1Qcm9wPVwidXJsXCIgY29udGVudD1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvd19pdF93b3Jrc1wiXG4gICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvd19pdF93b3Jrc1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZW5hdi1pY29ucyBpY29uVGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIEhvdyBJdCBXb3Jrc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJPZmZlcnNcIiAvPlxuICAgICAgICAgICAgICAgIDxhIGl0ZW1Qcm9wPVwidXJsXCIgY29udGVudD1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL29mZmVyc1wiXG4gICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL29mZmVyc1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZW5hdi1pY29ucyBpY29uRWxldmVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIE9mZmVyc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJCbG9nXCIgLz5cbiAgICAgICAgICAgICAgICA8YSBpdGVtUHJvcD1cInVybFwiIGNvbnRlbnQ9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nXCJcbiAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZ1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZW5hdi1pY29ucyBpY29uVHdlbHZlXCIgLz5cbiAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cIm5hbWVcIiBjb250ZW50PVwiVGVzdGltb25pYWxzXCIgLz5cbiAgICAgICAgICAgICAgICA8YSBpdGVtUHJvcD1cInVybFwiIGNvbnRlbnQ9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90ZXN0aW1vbmlhbHNcIlxuICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90ZXN0aW1vbmlhbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZGVuYXYtaWNvbnMgaWNvblRoaXJ0ZWVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIFRlc3RpbW9uaWFsc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9XCJGQVFcIiAvPlxuICAgICAgICAgICAgICAgIDxhIGl0ZW1Qcm9wPVwidXJsXCIgY29udGVudD1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL0ZBUXNcIlxuICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9GQVFzXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWRlbmF2LWljb25zIGljb25Gb3VydGVlblwiIC8+XG4gICAgICAgICAgICAgICAgICBGQVFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cIm5hbWVcIiBjb250ZW50PVwiQ29udGFjdCBVc1wiIC8+XG4gICAgICAgICAgICAgICAgPGEgaXRlbVByb3A9XCJ1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vY29udGFjdF91c1wiXG4gICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2NvbnRhY3RfdXNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZGVuYXYtaWNvbnMgaWNvbkZpZnRlZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBtYjhcIj5Gb3IgYW55IGhlbHA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTYgbTAgZnc5XCI+PGEgY29udGVudD1cInRlbDoxODAwMTIzNTU1NVwiIGNsYXNzTmFtZT1cImxpbmtcIj4xODAwLTEyMy01NTU1PC9hPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hbXAtc2lkZWJhcj5cbiAgICAgICAgPEFjdGlvbiBldmVudHM9e3sgdGFwOiBbJ3NpZGViYXItbGVmdC50b2dnbGUnXSB9fT5cbiAgICAgICAgICB7KHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uIHsuLi5wcm9wc30gY2xhc3NOYW1lPSdzaWRlYmFyLWJ1dHRvbic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGlkZSc+XG4gICAgICAgICAgICAgIHNpZGViYXJcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+KX1cbiAgICAgICAgPC9BY3Rpb24+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YXJnZXQtZWxlbWVudC1sZWZ0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BbXBCdXJnZXJNZW51LnByb3BUeXBlcyA9IHtcbiAgdWk6IFByb3BUeXBlcy5vYmplY3QsXG4gIGl0ZW1zOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdWk6IHN0YXRlLnRvcE5hdmlnYXRpb24gJiYgc3RhdGUudG9wTmF2aWdhdGlvbi51aSxcbiAgaXRlbXM6IHN0YXRlLnRvcE5hdmlnYXRpb24gJiYgc3RhdGUudG9wTmF2aWdhdGlvbi5pdGVtcyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe30pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBbXBCdXJnZXJNZW51KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQWN0aW9uIGZyb20gJ2FtcC9oZWxwZXJzL0FjdGlvbic7XG5cbmNvbnN0IEFtcEJ1cmdlck1lbnVMaW5rcyA9IGNsYXNzIEJ1cmdlck1lbnVMaW5rcyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvd0luZGV4OiA3LFxuICAgIHNob3dMb2FkTW9yZTogdHJ1ZVxuICB9O1xuXG4gIHJlbmRlclN1YkVudGl0aWVzID0gKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgPGxpPlxuICAgICAgPG1ldGEgaXRlbVByb3A9XCJuYW1lXCIgY29udGVudD17aXRlbS50aXRsZX0gLz5cbiAgICAgIDxhIGNsYXNzTmFtZT17YHBsMCBwdDAgcGIwIGhhdXRvLWkgbXQxNSBtYjE1ICR7aW5kZXggPiB0aGlzLnN0YXRlLnNob3dJbmRleCA/ICdoaWRlJyA6ICcnfWB9XG4gICAgICAgICBpdGVtUHJvcD1cInVybFwiXG4gICAgICAgICBjb250ZW50PXtpdGVtLnVybH1cbiAgICAgICAgIGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAge2l0ZW0udGl0bGV9PC9hPlxuICAgIDwvbGk+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZW50aXR5LCB0aXRsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpY29uQ2xhc3MgPSB0aXRsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykuam9pbignXycpO1xuICAgIGNvbnN0IHVuaXF1ZUlkID0gZW50aXR5LnRpdGxlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3Rpb24gZXZlbnRzPXt7IHRhcDogW2BBTVAuc2V0U3RhdGUoe3Nob3dIZWFkaW5nJHt1bmlxdWVJZH0gOiAhc2hvd0hlYWRpbmcke3VuaXF1ZUlkfX0pYF0gfX0+XG4gICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZW5hdi1hbXBcIiB7Li4ucHJvcHN9IHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD1cIjBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGViYXItbGlzdFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtlbnRpdHkudXJsfT57dGl0bGV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc2lkZW5hdi1pY29ucyAke2ljb25DbGFzc31gfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93RG93blwiIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGUudG9Mb3dlckNhc2UoKSAhPT0gJ2hvdGVscycgJiZcbiAgICAgICAgICAgICAgICB0aXRsZS50b0xvd2VyQ2FzZSgpICE9PSAnZGVzdGluYXRpb24gZ3VpZGUnICYmXG4gICAgICAgICAgICAgICAgdGl0bGUudG9Mb3dlckNhc2UoKSAhPT0gJ2hvbGlkYXkgdGhlbWVzJyA/XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGljay1vdmVycmlkZXJcIj5cbiAgICAgICAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cIm5hbWVcIiBjb250ZW50PXtlbnRpdHkudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPGEgaXRlbVByb3A9XCJ1cmxcIiBjb250ZW50PXtlbnRpdHkudXJsfSBocmVmPXtlbnRpdHkudXJsfSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnN1YmVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4gZW50aXR5LnN1YmVudGl0aWVzLmxlbmd0aCkubWFwKChsb2NhdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRlXCIgaWQ9e2Ake3VuaXF1ZUlkfSR7aW5kZXh9YH0gZGF0YS1hbXAtYmluZC1jbGFzcz17YHNob3dIZWFkaW5nJHt1bmlxdWVJZH0gPyAnbGlzdC1zaWRlLW1lbnUgbTAgc2JjNSBsaXN0TGluayBsaXN0LXJlc2V0IHN1Yk1lbnUnOiAnaGlkZSdgfT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGwwIHBsMTUgZnc5IGZsZXggc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyIHByMCBoYXV0by1pJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnRpdGxlLnRvTG93ZXJDYXNlKCkgIT09ICdob3RlbHMnICYmIGxvY2F0aW9uLnVybCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2ZjMSBmdzcgdmlldy1hbGwgIGhlaWdodCBsaW5rXCIgaHJlZj17bG9jYXRpb24udXJsfT5WaWV3IEFsbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnN1YmVudGl0aWVzLnNsaWNlKDAsIDcpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibmFtZVwiIGNvbnRlbnQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgcGwwIHB0MCBwYjAgaGF1dG8taSBtdDE1IG1iMTUgJHtpbmRleCA+IHRoaXMuc3RhdGUuc2hvd0luZGV4ID8gJ2hpZGUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHJvcD1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uc3ViZW50aXRpZXMubGVuZ3RoID4gNyAmJlxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnN1YmVudGl0aWVzLnNsaWNlKDcsIGxvY2F0aW9uLnN1YmVudGl0aWVzLmxlbmd0aCkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1hbXAtYmluZC1jbGFzcz17YHNob3dMaW5rJHt1bmlxdWVJZH0gPyAnJyA6ICdoaWRlJ2B9IGNsYXNzTmFtZT1cImhpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3VuaXF1ZUlkfSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGEgaXRlbVByb3A9XCJuYW1lXCIgY29udGVudD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwwIHB0MCBwYjAgaGF1dG8taSBtdDE1IG1iMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVByb3A9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5zdWJlbnRpdGllcy5sZW5ndGggPiA4ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dW5pcXVlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbXAtYmluZC1jbGFzcz17YHNob3dMaW5rJHt1bmlxdWVJZH0gPyBcImhpZGVcIiA6IFwiXCJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbiBldmVudHM9e3sgdGFwOiBbYEFNUC5zZXRTdGF0ZSh7c2hvd0xpbmske3VuaXF1ZUlkfSA6IHRydWV9KWBdIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLW1vcmUgZjE0IGxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgYnV0dG9uJHt1bmlxdWVJZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L0FjdGlvbj5cblxuICAgICk7XG4gIH1cbn07XG5cbkFtcEJ1cmdlck1lbnVMaW5rcy5wcm9wVHlwZXMgPSB7XG4gIGVudGl0eTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXRlbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbXBCdXJnZXJNZW51TGlua3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQW1wQnVyZ2VyTWVudSBmcm9tICcuL0FtcEJ1cmdlck1lbnUnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdhbXAvbW9kdWxlcy9zZWFyY2hCYXIvU2VhcmNoQmFyJztcblxuY29uc3QgQW1wSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicGJjMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29uIGhlYWRlci1jb24tc2hhZG93IHdmdWxsIGNsZWFyZml4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVyZ2VyTWVudS1hbXBcIj5cbiAgICAgICAgICA8QW1wQnVyZ2VyTWVudSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dC1sb2dvXCI+PGEgaHJlZj1cIi9cIj5cbiAgICAgICAgPC9hPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFtcEhlYWRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEJveFwiOiBcIl8xdVk1elwiLFxuXHRcImhlYWRlci1jb25cIjogXCJfMVo5a21cIixcblx0XCJ1c2VyLWltZy1sb2dnZWRpblwiOiBcIl8xckpIZ1wiLFxuXHRcImhlYWRlci1BbXBcIjogXCJfMmNaM0ZcIixcblx0XCJzYW1wbGUtc2lkZWJhclwiOiBcIl9saDI4bFwiLFxuXHRcInByZXZpZXdPbmx5XCI6IFwiXzJ0bnJXXCIsXG5cdFwic2lkZWJhci1yaWdodFwiOiBcIl8zSGpKYlwiLFxuXHRcImFtcC1zaWRlYmFyLXRvb2xiYXItdGFyZ2V0LXNob3duXCI6IFwiXzMzWlFkXCIsXG5cdFwiYW1wLWxpc3Qtc2lkZS1tZW51XCI6IFwiX3lYMTFmXCIsXG5cdFwiYW1wLWhlYWRlci1jb24tc2hhZG93XCI6IFwiXzFLZkJpXCIsXG5cdFwidHQtbG9nb1wiOiBcIl9yU0N5blwiLFxuXHRcImhpZGVcIjogXCJfMXYteWNcIixcblx0XCJzaWRlcmJhci1sZWZ0XCI6IFwiX2tJVXZWXCIsXG5cdFwic2lkZWJhci1saXN0XCI6IFwiX2ltd1BwXCIsXG5cdFwibGlzdC1zaWRlLW1lbnVcIjogXCJfMVpIcUJcIixcblx0XCJsaXN0TGlua1wiOiBcIl8xcmlpV1wiLFxuXHRcImxvYWQtbW9yZVwiOiBcIl95Sk9wZFwiLFxuXHRcImhlYWRlci10aXRsZVwiOiBcIl80YzNmNFwiLFxuXHRcImJhY2stYXJyb3dcIjogXCJfM1VNaFNcIixcblx0XCJzaGFyZS1sb2dvLXJpZ2h0XCI6IFwiX00tNzdQXCIsXG5cdFwiYW1wLXNvY2lhbC1zaGFyZS1zeXN0ZW1cIjogXCJfM1lFY0pcIixcblx0XCJzbGlkZXJUZXh0XCI6IFwiX1llMVg4XCIsXG5cdFwiYnVyZ2VyTWVudS1hbXBcIjogXCJfeFljWlVcIixcblx0XCJzaWRlbmF2LWljb25zXCI6IFwiX2hUOW01XCIsXG5cdFwiaWNvbk9uZVwiOiBcIl9rc3BKZ1wiLFxuXHRcImljb25Ud29cIjogXCJfMzRPa2RcIixcblx0XCJpY29uTmluZVwiOiBcIl8xOXI5Q1wiLFxuXHRcImljb25UZW5cIjogXCJfMm04ZTFcIixcblx0XCJpY29uRWxldmVuXCI6IFwiX0diaGhaXCIsXG5cdFwiaWNvblR3ZWx2ZVwiOiBcIl8zdEJDQVwiLFxuXHRcImljb25UaGlydGVlblwiOiBcIl9Ib3lnd1wiLFxuXHRcImljb25Gb3VydGVlblwiOiBcIl8zcWJSVlwiLFxuXHRcImljb25GaWZ0ZWVuXCI6IFwiX1RvcFRnXCIsXG5cdFwidG91cl9wYWNrYWdlc1wiOiBcIl8zUnBQRFwiLFxuXHRcImZhbWlseV9wYWNrYWdlc1wiOiBcIl8yTEtvc1wiLFxuXHRcImhvbmV5bW9vbl9wYWNrYWdlc1wiOiBcIl8xaEdRbFwiLFxuXHRcImhvdGVsc1wiOiBcIl8xUHdjYVwiLFxuXHRcImRlc3RpbmF0aW9uX2d1aWRlXCI6IFwiXzNzTHluXCIsXG5cdFwiaG9saWRheV90aGVtZXNcIjogXCJfMWh2bTlcIixcblx0XCJzdWJNZW51XCI6IFwiXzItdmpaXCIsXG5cdFwic2lkZW5hdi1hbXBcIjogXCJfX0FuOWVcIixcblx0XCJhcnJvd0Rvd25cIjogXCJfMXlfeVpcIixcblx0XCJjdXN0b21QaWxsc1wiOiBcIl8xQ0UwTlwiLFxuXHRcInF1aWNrbGlua3NDb250YWluZXJcIjogXCJfM3Vyb09cIixcblx0XCJub0JlZm9yZUFmdGVyXCI6IFwiX0duYkEzXCIsXG5cdFwic2lkZWJhci1idXR0b25cIjogXCJfMkkyZWNcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbDggcHI4IHBiOCBhbXBTZWFyY2hcIj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFtcC1oZWFkZXItc2VhcmNoXCJcbiAgICAgICAgICAgIG1ldGhvZD1cImdldFwiXG4gICAgICAgICAgICBhY3Rpb249XCIvc2VhcmNoX3Jlc3VsdHNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoQm94IHNiY3dcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cInFcIlxuICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgYnVkZ2V0LCB0aGVtZS4uLiBcIlxuICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJcIiBjbGFzc05hbWU9XCJzZWFyY2hDbGlja1wiIC8+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFtcFNlYXJjaFwiOiBcIl9ha0UzQlwiLFxuXHRcImFtcC1oZWFkZXItc2VhcmNoXCI6IFwiX0taX01rXCIsXG5cdFwic2VhcmNoQm94XCI6IFwiXzNMb0F0XCIsXG5cdFwic2VhcmNoQ2xpY2tcIjogXCJfMVdXODhcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEhlYWRlckNvbW1vbiBmcm9tICdhbXAvbW9kdWxlcy9oZWFkZXIvQW1wSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnYW1wL21vZHVsZXMvZm9vdGVyJztcblxuaW1wb3J0ICdhbXAvbW9kdWxlcy9oZWFkZXIvQW1wSGVhZGVyLnNjc3MnO1xuaW1wb3J0ICdhbXAvbW9kdWxlcy9zZWFyY2hCYXIvU2VhcmNoQmFyLnNjc3MnO1xuaW1wb3J0ICdhbXAvbW9kdWxlcy9mb290ZXIvRm9vdGVyLnNjc3MnO1xuaW1wb3J0ICcuL0FtcExheW91dC5zY3NzJztcbmltcG9ydCBDaGF0Ym90UG9wdXAgZnJvbSAnYW1wL21vZHVsZXMvY29tbW9uL0NoYXRib3RQb3B1cC9jaGF0Ym90UG9wdXAnO1xuaW1wb3J0ICdhbXAvbW9kdWxlcy9jb21tb24vQ2hhdGJvdFBvcHVwL2NoYXRib3RQb3B1cC5zY3NzJztcblxuY2xhc3MgQW1wTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXJDb21tb24vPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPENoYXRib3RQb3B1cCAgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbXBMYXlvdXQ7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNsZWFyZml4XCI6IFwiXzN4VHpXXCIsXG5cdFwicm93XCI6IFwiX1BQTnRTXCIsXG5cdFwibm93cmFwXCI6IFwiX0c2TnMyXCIsXG5cdFwid2Z1bGxcIjogXCJfVFJMalZcIixcblx0XCJzbW9vdGhcIjogXCJfMWRSLUpcIixcblx0XCJyb3ctXCI6IFwiXzJRNHc0XCIsXG5cdFwiY29sLXhzLTFcIjogXCJfMjdOOE5cIixcblx0XCJjb2wteHMtMlwiOiBcIl83TjlWTFwiLFxuXHRcImNvbC14cy0zXCI6IFwiXzNjbmg3XCIsXG5cdFwiY29sLXhzLTRcIjogXCJfZmZFby1cIixcblx0XCJjb2wteHMtNVwiOiBcIl8xZ0JxZ1wiLFxuXHRcImNvbC14cy02XCI6IFwiX0l3TDN4XCIsXG5cdFwiY29sLXhzLTdcIjogXCJfNG5STWpcIixcblx0XCJjb2wteHMtOFwiOiBcIl8yRTFlR1wiLFxuXHRcImNvbC14cy05XCI6IFwiXzFLSy00XCIsXG5cdFwiY29sLXhzLTEwXCI6IFwiXzN2NUswXCIsXG5cdFwiY29sLXhzLTExXCI6IFwiXzN1MTlpXCIsXG5cdFwiY29sLXhzLTEyXCI6IFwiXzFZcGxrXCIsXG5cdFwic2Zjd1wiOiBcIl8zVThtclwiLFxuXHRcInNmYzNcIjogXCJfMUN2cXNcIixcblx0XCJsaW5rXCI6IFwiXzF6YzhZXCIsXG5cdFwic2Jjd1wiOiBcIl8xVW9BZVwiLFxuXHRcInBiYzFcIjogXCJfMzNYMFdcIixcblx0XCJwZmMxXCI6IFwiXzIwYzBnXCIsXG5cdFwic2JjNVwiOiBcIl9jN1F5UFwiLFxuXHRcInNmYzZcIjogXCJfMUszWW9cIixcblx0XCJwZmM0XCI6IFwiXzJ1NzBkXCIsXG5cdFwicGZjNVwiOiBcIl9OX2VsalwiLFxuXHRcInNiY29cIjogXCJfMXpoNzhcIixcblx0XCJwYmMzXCI6IFwiXzM2YlRtXCIsXG5cdFwicGZjM1wiOiBcIl8xM2FaMlwiLFxuXHRcInJlbGF0aXZlXCI6IFwiXzJMY29nXCIsXG5cdFwiYWJzb2x1dGVcIjogXCJfMzZtMEdcIixcblx0XCJmaXhlZFwiOiBcIl8zeEJ6alwiLFxuXHRcInoxMFwiOiBcIl8zWld2VVwiLFxuXHRcInoxMVwiOiBcIl8xWEVqb1wiLFxuXHRcIm92ZXJmbG93YVwiOiBcIl8xY0FFUFwiLFxuXHRcImYxMFwiOiBcIl8xZnNwbFwiLFxuXHRcImYxMlwiOiBcIl8ybkR3LVwiLFxuXHRcImYxNFwiOiBcIl8xQ2tHRVwiLFxuXHRcImYxNHBcIjogXCJfc09iWkNcIixcblx0XCJmMTZcIjogXCJfM1hjOHlcIixcblx0XCJmMThwXCI6IFwiXzNsR1VrXCIsXG5cdFwiZjIwXCI6IFwiXzM0LTdBXCIsXG5cdFwiZjI0XCI6IFwiXzFZZVYyXCIsXG5cdFwiZjMyXCI6IFwiXzNFaGUzXCIsXG5cdFwiZnc5XCI6IFwiXzM4aGhjXCIsXG5cdFwiZndiXCI6IFwiX1BTYWdIXCIsXG5cdFwiZjE4XCI6IFwiXzFveUpVXCIsXG5cdFwiZnc0XCI6IFwiXzItMlZrXCIsXG5cdFwiZnc3XCI6IFwiXzJIOVZDXCIsXG5cdFwidGRsXCI6IFwiXzF6OFpKXCIsXG5cdFwidGV4dC11cHBlcmNhc2VcIjogXCJfd1pmQ1VcIixcblx0XCJjZW50ZXJcIjogXCJfakQ1X3NcIixcblx0XCJyaWdodC1hbGlnblwiOiBcIl8yT3duSlwiLFxuXHRcImZyaWdodFwiOiBcIl8xNDl1YVwiLFxuXHRcImJiXCI6IFwiXzFreEFOXCIsXG5cdFwiZml0YWxpY1wiOiBcIl8ycXlCLVwiLFxuXHRcImxpc3QtcmVzZXRcIjogXCJfOVRfR09cIixcblx0XCJwMFwiOiBcIl9WdWlxV1wiLFxuXHRcInAzXCI6IFwiXzJDaEhvXCIsXG5cdFwicDVcIjogXCJfM0lBMDBcIixcblx0XCJwOFwiOiBcIl8yVXJ6VFwiLFxuXHRcInAxNVwiOiBcIl81c0JuZVwiLFxuXHRcInB0MFwiOiBcIl8xZ082M1wiLFxuXHRcInB0MVwiOiBcIl9fQnJlb1wiLFxuXHRcInB0NFwiOiBcIl8xeTZsTVwiLFxuXHRcInB0NVwiOiBcIl8yTG5Mb1wiLFxuXHRcInB0OFwiOiBcIl8zMHM0LVwiLFxuXHRcInB0MTVcIjogXCJfRDFHLWtcIixcblx0XCJwdDI0XCI6IFwiXzFXSzNOXCIsXG5cdFwicGIwXCI6IFwiXzFLUG1xXCIsXG5cdFwicGI0XCI6IFwiXzNHV1FGXCIsXG5cdFwicGI1XCI6IFwiXzI2Q2ZuXCIsXG5cdFwicGI4XCI6IFwiX3dCZFRaXCIsXG5cdFwicGIxNVwiOiBcIl8xbGptNVwiLFxuXHRcInBiMjRcIjogXCJfM0ZqVkZcIixcblx0XCJwYjY0XCI6IFwiX0VwVGl5XCIsXG5cdFwicGwwXCI6IFwiXzM1aGVtXCIsXG5cdFwicGw0XCI6IFwiXzJPYmNwXCIsXG5cdFwicGw4XCI6IFwiXzFHWnB6XCIsXG5cdFwicGwxNVwiOiBcIl8yZWJ4TlwiLFxuXHRcInBsMjRcIjogXCJfMVA4T05cIixcblx0XCJwbDQ4XCI6IFwiXzEzNjNwXCIsXG5cdFwicGw2NFwiOiBcIl8yd1dZX1wiLFxuXHRcInByMFwiOiBcIl8yb0hyRVwiLFxuXHRcInByMVwiOiBcIl8zcG83TlwiLFxuXHRcInByM1wiOiBcIl8ySWlUaVwiLFxuXHRcInByNFwiOiBcIl9rMVpLVFwiLFxuXHRcInByOFwiOiBcIl8xck5SUlwiLFxuXHRcInByMTVcIjogXCJfMUxsamtcIixcblx0XCJwcjI0XCI6IFwiXzJuZDl6XCIsXG5cdFwicHI0OFwiOiBcIl9hYzhjS1wiLFxuXHRcInByNjRcIjogXCJfMXIwT0FcIixcblx0XCJtMFwiOiBcIl8zSzNCVVwiLFxuXHRcIm10MVwiOiBcIl8ybExHdVwiLFxuXHRcIm10NFwiOiBcIl8yOVVxaVwiLFxuXHRcIm10OFwiOiBcIl9sSkJ2ZlwiLFxuXHRcIm10MTVcIjogXCJfMW1PX0JcIixcblx0XCJtdDI0XCI6IFwiXzJxcnVYXCIsXG5cdFwibWIwXCI6IFwiXzFQTE5PXCIsXG5cdFwibWI1XCI6IFwiX3JRQTFkXCIsXG5cdFwibWI4XCI6IFwiXzNQTE5GXCIsXG5cdFwibWIxNVwiOiBcIl8xeXJPbVwiLFxuXHRcIm1iMjRcIjogXCJfMjhpRmtcIixcblx0XCJtbDJcIjogXCJfM05rMEFcIixcblx0XCJtbDVcIjogXCJfMTFUenJcIixcblx0XCJtbDhcIjogXCJfMXR4dXJcIixcblx0XCJtbDE1XCI6IFwiXzNSM1hHXCIsXG5cdFwibXI1XCI6IFwiXzJ4T1N3XCIsXG5cdFwibXI4XCI6IFwiXzMyT2c4XCIsXG5cdFwibXIxNVwiOiBcIl9FOEFweVwiLFxuXHRcImJsb2NrXCI6IFwiX2V2TTBZXCIsXG5cdFwiaWJsb2NrXCI6IFwiX3BrdEZ4XCIsXG5cdFwiZmxleFwiOiBcIl82ZFF5cFwiLFxuXHRcImZsZXhXcmFwXCI6IFwiXzNJWVBpXCIsXG5cdFwianVzdGlmeUNlbnRlclwiOiBcIl8xQTNfaFwiLFxuXHRcImFsaWduQ2VudGVyXCI6IFwiXzI0MmEzXCIsXG5cdFwic3BhY2VCZXR3ZWVuXCI6IFwiXzJzbURQXCIsXG5cdFwiZmxleEZ1bGxcIjogXCJfM28tQk5cIixcblx0XCJvdmVyZmxvd1hzY3JvbGxcIjogXCJfMUR5ZTRcIixcblx0XCJsMFwiOiBcIl8zVHZvclwiLFxuXHRcInIwXCI6IFwiXzM3d29TXCIsXG5cdFwicjVcIjogXCJfbnJyUTVcIixcblx0XCJ0MFwiOiBcIl8yWVpJZFwiLFxuXHRcImIwXCI6IFwiXzJ1VmtqXCIsXG5cdFwiYjEwXCI6IFwiXzM0QldrXCIsXG5cdFwiYnM0XCI6IFwiX2Y2SDhfXCIsXG5cdFwicmFkaXVzMTAwXCI6IFwiXzNpLUdmXCIsXG5cdFwiYWJzb2x1dGUtY2VudGVyLXZcIjogXCJfM1FaYnNcIixcblx0XCJoZWFkaW5nLWNvbW1vbi1jZW50ZXJcIjogXCJfMlloVzNcIixcblx0XCJidG4tcHJpLWxhcmdlXCI6IFwiXzFxNHBiXCIsXG5cdFwiYnRuLWZpbGxlZC1wcmktbGFyZ2VcIjogXCJfM2JjM2xcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9