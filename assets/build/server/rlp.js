require("source-map-support").install();
exports.ids = ["rlp"];
exports.modules = {

/***/ "./app-v2/modules/rlp/NavBar.js":
/*!**************************************!*\
  !*** ./app-v2/modules/rlp/NavBar.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _notifications = _interopRequireDefault(__webpack_require__(/*! modules/notifications */ "./app-v2/modules/notifications/index.js"));

var _BurgerMenu = _interopRequireDefault(__webpack_require__(/*! modules/header/BurgerMenu */ "./app-v2/modules/header/BurgerMenu.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let NavBar = (_temp = _class = class NavBar extends _react.Component {
  render() {
    const NotificationContainer = _notifications.default.container;
    return _react.default.createElement("div", {
      className: "pbc5 p8"
    }, _react.default.createElement("div", {
      className: "pt4 pb4 pr8 pl8 flex wfull justifyCenter alignCenter"
    }, _react.default.createElement(_BurgerMenu.default, null), _react.default.createElement("p", {
      className: "pl15 f16 flex alignCenter fw7 sfcw flexFull ellipsis"
    }, "My Trip"), _react.default.createElement(NotificationContainer, null)));
  }

}, _class.propTypes = {
  currentTripId: _propTypes.default.number.isRequired,
  trackSegment: _propTypes.default.func.isRequired
}, _temp);
var _default = NavBar;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/appDownloadBanner/index.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/rlp/appDownloadBanner/index.js ***!
  \*******************************************************/
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

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GBannerImgDiv = _glamorous.default.div({
  minWidth: '110px',
  maxWidth: '110px',
  maxHeight: '66px'
});

const GRightArrowSpan = _glamorous.default.div({
  minWidth: '32px',
  height: '32px',
  maxWidth: '32px'
});

let AppDownloadBanner = (_temp2 = _class = class AppDownloadBanner extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      isVisible: true
    }, this.handleCancelClick = event => {
      event.stopPropagation();
      this.setState({
        isVisible: false
      });
    }, this.handleBannerClick = () => {
      const {
        trackSegment
      } = this.props;
      const link = AppDownloadBanner.getLink();
      window.open(link, '_blank');
      trackSegment({
        event: _segmentEvents.ORGANISM_CLICKED,
        cta: 'Download',
        section: 'App Banner',
        miscId1: 'Var 1'
      });
    }, _temp;
  }

  render() {
    const {
      isVisible
    } = this.state;

    if (!isVisible) {
      return null;
    }

    return _react.default.createElement("div", {
      className: "promoBanner phoneBG pt15 pl15 sbcw relative flex z3 at_appDownloadBanner",
      onClick: this.handleBannerClick
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("h3", {
      className: "f14 fw7 mb15"
    }, "Download our App for a better booking experience"), _react.default.createElement("div", {
      className: "iblock btn-filled-pri mb15 relative"
    }, "Download Now", _react.default.createElement(GRightArrowSpan, {
      className: "absolute-center-v r0"
    }, _react.default.createElement(_Icon.RightWhiteArrow, null)))), _react.default.createElement(GBannerImgDiv, {
      className: "alignSelfFlexEnd"
    }, _react.default.createElement(_Img.default, {
      className: "",
      ikSrc: "https://img.traveltriangle.com/public-product/phoner.png",
      alt: "MS Home",
      width: 110,
      height: 66
    })), _react.default.createElement("div", {
      className: "bannerDismiss absolute z2 t15 r10 icon-14",
      onClick: this.handleCancelClick
    }, _react.default.createElement(_Icon.CloseIcon, null)));
  }

}, _class.getLink = () => {
  let link;

  if (window.navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    link = 'https://ad.apsalar.com/api/v1/ad?re=1&a=traveltriangle&i=com.traveltriangle.traveler&ca=App_Install_MS_Homepage_iOS&an=Organic&p=iOS&pl=1&h=6c2098f87dee0f39f950a4796f492432e20f3861';
  } else {
    link = 'https://ad.apsalar.com/api/v1/ad?re=1&a=traveltriangle&i=com.traveltriangle.traveller&ca=App_Install_MS_Homepage&an=Organic&p=Android&pl=1&h=e1a717a45305aa3abf6a765df004282d5f4b5f18';
  }

  return link;
}, _temp2);
AppDownloadBanner.propTypes = {
  trackSegment: _propTypes.default.func.isRequired
};
var _default = AppDownloadBanner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/header/Header.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/rlp/header/Header.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _tripStatus = __webpack_require__(/*! constants/tripStatus */ "./app/constants/tripStatus.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _index = _interopRequireDefault(__webpack_require__(/*! modules/trip/dropdown/index */ "./app-v2/modules/trip/dropdown/index.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _cancelRequest = _interopRequireDefault(__webpack_require__(/*! modules/trip/cancelRequest */ "./app-v2/modules/trip/cancelRequest/index.js"));

var _ViewPreferencesButton = _interopRequireDefault(__webpack_require__(/*! modules/shared/ViewPreferencesButton */ "./app-v2/modules/shared/ViewPreferencesButton.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GViewPreferencesBtn = _glamorous.default.div({
  flex: '0 0 135px'
});

let Header = class Header extends _react.Component {
  constructor(props) {
    super(props);

    this.reactivateBooking = () => {
      const {
        reactivateBooking,
        currentTrip
      } = this.props;
      reactivateBooking({
        tripId: currentTrip.id
      }).then(results => {
        if (results) {
          window.location.reload();
        }
      });
    };

    this.trackSegmentEvents = () => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment({
          event: _segmentEvents.ORGANISM_CLICKED,
          section: 'Trip request details',
          object: '',
          cta: 'Cancel Request'
        });
      });
    };

    this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    };

    this.isCancelledTrip = status => status.toLowerCase() === _tripStatus.TRIP_STATUS.CANCELLED;

    this.state = {
      closeModal: true
    };
  }

  renderCancel() {
    const {
      currentTrip
    } = this.props;
    return this.isCancelledTrip(currentTrip.status) ? _react.default.createElement("button", {
      className: "sfc1 fw7 f14 at_undoCancel_cta",
      onClick: this.reactivateBooking
    }, "Undo Cancel") : _react.default.createElement(_GenericModal.default, {
      fullView: true,
      hasCustomClose: true,
      trigger: _react.default.createElement("span", {
        className: "f14 fw7 sfc6 at_cancelRequest",
        onClick: this.trackSegmentEvents
      }, "Cancel Request"),
      customCloseTrigger: this.state.closeModal
    }, _react.default.createElement("div", {
      className: "sbcw"
    }, _react.default.createElement(_cancelRequest.default, {
      closeModal: this.closePopup,
      tripId: currentTrip.id
    })));
  }

  render() {
    const TripListContainer = _index.default.container;
    const {
      currentTrip,
      trackSegment
    } = this.props;
    const isConvertedTrip = (0, _utils.isTripConverted)(currentTrip.status);
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "sbc4 p8 flex alignCenter spaceBetween"
    }, _react.default.createElement("div", {
      className: "col-xs-7 pl0 pr4 flexFull"
    }, _react.default.createElement(TripListContainer, {
      currentTripId: currentTrip.id,
      trackSegment: trackSegment
    })), _react.default.createElement(GViewPreferencesBtn, {
      className: "col-xs-5 pl4 pr0"
    }, _react.default.createElement(_ViewPreferencesButton.default, {
      currentTripId: currentTrip.id,
      tripStatus: currentTrip.status,
      trackSegment: trackSegment
    }))), _react.default.createElement("div", {
      className: "sbc5 pl15 pr15 pt15 pb24 flex alignCenter spaceBetween"
    }, _react.default.createElement("p", {
      className: "f14 pfc5 at_bookingID"
    }, `Booking ID #${currentTrip.id}`), isConvertedTrip ? null : this.renderCancel()), currentTrip.quotesCount ? _react.default.createElement("div", {
      className: "p15 sbcw at_compareCta_section"
    }, _react.default.createElement("p", {
      className: "f14 text-center pfc3 mb5"
    }, `You have received ${currentTrip.quotesCount} quotes and you can`), _react.default.createElement("a", {
      href: (0, _urlHelpers.compareQuotesPath)(currentTrip.id),
      className: `text-center pt8 pb8 block wfull ${currentTrip.quotesCount > 1 ? 'btn-sec-load' : 'disabled sfcw'} at_comparequotes`
    }, _react.default.createElement("span", {
      className: "pt2 pb2 block wfull flex alignCenter justifyCenter"
    }, _react.default.createElement("span", {
      className: "icon-18 mr8 iblock"
    }, currentTrip.quotesCount > 1 ? _react.default.createElement(_Icon.CompareIcon, null) : _react.default.createElement(_Icon.CompareIconWhite, null)), _react.default.createElement("span", null, "Compare Quotes")))) : null);
  }

};
var _default = Header;
exports.default = _default;
Header.propTypes = {
  currentTrip: _propTypes.default.object,
  reactivateBooking: _propTypes.default.func,
  trackSegment: _propTypes.default.func
};

/***/ }),

/***/ "./app-v2/modules/rlp/header/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/rlp/header/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _tripActivities = __webpack_require__(/*! modules/trip/actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./app-v2/modules/rlp/header/Header.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(null, {
  reactivateBooking: _tripActivities.reactivateBooking
})(_Header.default);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/reducer/index.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/rlp/reducer/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "trip", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "quote", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});
Object.defineProperty(exports, "notifications", {
  enumerable: true,
  get: function () {
    return _reducer.default;
  }
});

var _index = _interopRequireDefault(__webpack_require__(/*! modules/trip/reducers/index */ "./app-v2/modules/trip/reducers/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! modules/quote/reducers/index */ "./app-v2/modules/quote/reducers/index.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! modules/notifications/reducer */ "./app-v2/modules/notifications/reducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app-v2/modules/shared/Avatar.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/shared/Avatar.js ***!
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

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _avatarCm = _interopRequireDefault(__webpack_require__(/*! ./avatar.cm.scss */ "./app-v2/modules/shared/avatar.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Avatar = ({
  imagePath,
  name
}) => imagePath && !imagePath.includes('missing.png') ? _react.default.createElement("div", {
  className: `overflowh radius100 sbc4 mr15 relative agent-user-img ${_avatarCm.default.avatar}`
}, _react.default.createElement("img", {
  className: "wfull absolute-center",
  src: imagePath,
  alt: name
})) : _react.default.createElement("div", {
  className: `agent-user-name t0 mr15 hfull relative ${_avatarCm.default.avatar}`
}, _react.default.createElement("p", {
  className: "absolute-center f16"
}, (0, _utils.getInitialsFromName)(name)));

Avatar.propTypes = {
  imagePath: _propTypes.default.string,
  name: _propTypes.default.string.isRequired
};
Avatar.defaultProps = {
  imagePath: null
};
var _default = Avatar;
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

/***/ "./app-v2/modules/shared/ViewPreferencesButton.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/shared/ViewPreferencesButton.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ViewPreferencesButton = (_temp2 = _class = class ViewPreferencesButton extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = () => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment({
          event: _segmentEvents.ORGANISM_CLICKED,
          section: 'Trips dropdown section',
          object: '',
          cta: 'Edit preferences'
        });
      });
    }, _temp;
  }

  render() {
    const editPreferenceUrl = (0, _urlHelpers.preferencesPageUrl)(this.props.currentTripId);
    const isConvertedTrip = (0, _utils.isTripConverted)(this.props.tripStatus);
    return _react.default.createElement("div", null, _react.default.createElement(_reactRouter.Link, {
      onClick: this.handleClick,
      className: "iblock wfull pt8 pb8 sbc1 sfcw text-center fw7",
      to: editPreferenceUrl
    }, _react.default.createElement("span", {
      className: "pt3 pb3 iblock at_editPreferences"
    }, isConvertedTrip ? 'View Preferences' : 'Edit Preferences')));
  }

}, _class.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  tripStatus: _propTypes.default.string,
  trackSegment: _propTypes.default.func
}, _temp2);
var _default = ViewPreferencesButton;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/avatar.cm.scss":
/*!**********************************************!*\
  !*** ./app-v2/modules/shared/avatar.cm.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"avatar": "lerjIxPJTrcyFkinh8ev_"
};

/***/ }),

/***/ "./app-v2/modules/shared/headers/ModalHeaderCustom.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/shared/headers/ModalHeaderCustom.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GHeaderDiv = _glamorous.default.div({
  padding: '12px 15px 12px 48px',
  borderBottom: '1px solid #EFEFEF'
});

let ModalHeaderCustom = (_temp = _class = class ModalHeaderCustom extends _react.Component {
  render() {
    const {
      heading
    } = this.props;
    return _react.default.createElement(GHeaderDiv, {
      className: "fixed sbcw t0 l0 r0 z5 wfull"
    }, _react.default.createElement("h2", {
      className: "ellipsis f16a m0 fw9 pfc3"
    }, heading));
  }

}, _class.propTypes = {
  heading: _propTypes.default.string
}, _class.defaultProps = {
  heading: ''
}, _temp);
exports.default = ModalHeaderCustom;

/***/ }),

/***/ "./app-v2/modules/trip/dropdown/Dropdown.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/trip/dropdown/Dropdown.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/trip/dropdown/G.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Dropdown = class Dropdown extends _react.default.Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = event => {
      if (this.state.dropDownOpen && !this.tripListElement_.contains(event.target)) {
        this.setState({
          dropDownOpen: false
        });
      }
    };

    this.trackSegmentEvent = (event, section, object, cta) => {
      const {
        trackSegment
      } = this.props;
      (0, _utils.rescue)(() => {
        trackSegment({
          event,
          section,
          object,
          cta
        });
      });
    };

    this.handleChange = trip => {
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Trips dropdown section', '', trip.firstDestinationName);
      this.setState({
        dropDownOpen: !this.state.dropDownOpen
      });
    };

    this.toggleDropDown = () => {
      this.setState({
        dropDownOpen: !this.state.dropDownOpen
      });
    };

    this.getTrips = () => {
      const {
        trips
      } = this.props;
      return trips.allIds.map(tripId => {
        const trip = trips.byId[tripId];
        const rTripUrl = (0, _urlHelpers.rtripPath)(trip.id);
        return _react.default.createElement("li", {
          key: trip.id
        }, _react.default.createElement(_reactRouter.Link, {
          to: rTripUrl,
          onClick: () => this.handleChange(trip)
        }, _react.default.createElement("span", {
          title: trip.firstDestinationName,
          className: "block ellipsis f14 at_DestinationName"
        }, trip.firstDestinationName || trip.toLoc), _react.default.createElement("span", {
          className: "block f12 pfc1 at_bookingId"
        }, "Booking ID #", trip.id)));
      });
    };

    this.state = {
      dropDownOpen: false
    };
    this.getTrips = this.getTrips.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    const {
      trips,
      currentTripId
    } = this.props;
    const currentTrip = trips.byId[currentTripId];
    return _react.default.createElement(_G.GTripListDiv, {
      className: "flexFull relative sbcw radius2"
    }, _react.default.createElement("div", {
      className: "clearfix relative"
    }, _react.default.createElement("div", {
      ref: ref => this.tripListElement_ = ref
    }, _react.default.createElement(_G.GDropdownButton, {
      className: "radius2 at_tripListButton relative pr32 ellipsis",
      onClick: this.toggleDropDown
    }, _react.default.createElement("span", {
      className: "fw7 at_destinationname"
    }, currentTrip.firstDestinationName || currentTrip.toLoc), _react.default.createElement(_G.GArrowDownSpan, {
      className: !this.state.dropDownOpen ? '' : 'arrowDown'
    }, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement(_G.GTripsListUl, {
      className: `dropDownList radius2 bs4 mt3 sbcw ${!this.state.dropDownOpen ? ' dropdownClosed' : ''}`
    }, this.props.trips.allIds && this.props.trips.allIds.length > 0 ? this.getTrips() : null))));
  }

};
Dropdown.propTypes = {
  trips: _propTypes.default.object.isRequired,
  currentTripId: _propTypes.default.number.isRequired,
  trackSegment: _propTypes.default.func.isRequired,
  push: _propTypes.default.func
};
var _default = Dropdown;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/dropdown/G.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/trip/dropdown/G.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GTripListDiv = exports.GArrowDownSpan = exports.GTripsListUl = exports.GDropdownButton = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const arrowDownSpan = {
  width: '10px',
  height: '6px',
  display: 'block',
  position: 'absolute',
  right: '15px',
  lineHeight: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'transform 1s',
  '& svg': {
    width: '10px',
    height: '6px'
  }
};

const GDropdownButton = _glamorous.default.button({
  padding: '0 15px',
  height: '40px',
  width: '100%',
  textAlign: 'left'
});

exports.GDropdownButton = GDropdownButton;

const GTripsListUl = _glamorous.default.ul({
  margin: '0',
  padding: '0',
  position: 'absolute',
  zIndex: '101',
  width: '100%',
  '& li': {
    listStyle: 'none',
    display: 'block',
    '& a': {
      padding: '8px 15px',
      color: '#3e3e3e',
      display: 'inline-block',
      width: '100%',
      '& p': {
        margin: '0'
      },
      '&:hover, &:active, &:focus': {
        background: '#009688',
        color: '#fff',
        textDecoration: 'none'
      }
    }
  },
  '& li.noTrips': {
    padding: '15px'
  }
});

exports.GTripsListUl = GTripsListUl;

const GArrowDownSpan = _glamorous.default.span(arrowDownSpan);

exports.GArrowDownSpan = GArrowDownSpan;

const GTripListDiv = _glamorous.default.div({
  minHeight: '40px',
  '& select': {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    opacity: '1',
    zIndex: '1',
    appearance: 'none'
  },
  '& .arrowDown': {
    transform: 'rotate(180deg)'
  },
  '& .dropDownList': {
    transition: 'max-height 0.2s',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '160px',
    borderTop: '0 none'
  },
  '& .dropdownClosed': {
    maxHeight: '0',
    border: '0 none'
  }
});

exports.GTripListDiv = GTripListDiv;

/***/ }),

/***/ "./app-v2/modules/trip/dropdown/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/trip/dropdown/index.js ***!
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

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ "./app-v2/modules/trip/dropdown/Dropdown.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  return {
    trips: state.trip.list,
    currentTripId: state.trip.currentTrip.data.id
  };
}, {
  push: _reactRouterRedux.push
})(_Dropdown.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/rlp/Layout.js":
/*!**************************************!*\
  !*** ./app-v2/screens/rlp/Layout.js ***!
  \**************************************/
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

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _common = _interopRequireDefault(__webpack_require__(/*! app-v2/common */ "./app-v2/common.js"));

var _NavBar = _interopRequireDefault(__webpack_require__(/*! modules/rlp/NavBar */ "./app-v2/modules/rlp/NavBar.js"));

var _header = _interopRequireDefault(__webpack_require__(/*! modules/rlp/header */ "./app-v2/modules/rlp/header/index.js"));

var _roster = _interopRequireDefault(__webpack_require__(/*! modules/roster */ "./app-v2/modules/roster/index.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _appDownloadBanner = _interopRequireDefault(__webpack_require__(/*! modules/rlp/appDownloadBanner */ "./app-v2/modules/rlp/appDownloadBanner/index.js"));

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Layout = (_temp = _class = class Layout extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.isEventTracked = {};
    this.quotesApiInterval = null;
    this.counter = 0;
  }

  componentDidMount() {
    const {
      layout
    } = this.props;
    layout.components.map(component => {
      this.isEventTracked[component.name] = false;
    });
    this.checkQuoteAtInterval(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.currentTripId !== nextProps.currentTripId) {
      this.isEventTracked = {};
      this.checkQuoteAtInterval(nextProps);
    }

    const prevQuotes = this.props.quotes && Object.keys(this.props.quotes) || [];
    const currentQuotes = nextProps.quotes && Object.keys(nextProps.quotes) || [];

    if (prevQuotes.length === 0 && currentQuotes.length && this.props.layout.stage === 'LEAD_CREATED') {
      this.props.showRoster({
        allowTimeOut: false,
        message: ['Dear traveler, refresh the page to view your first quote. ', _react.default.createElement("a", {
          onClick: () => window.location.reload()
        }, _react.default.createElement("u", null, "View Quote"))]
      });
      clearInterval(this.quotesApiInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.quotesApiInterval);
  }

  render() {
    const {
      trips,
      currentTripId,
      layout
    } = this.props;
    const currentTrip = trips.byId[currentTripId];
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("meta", {
      name: "page_fullname",
      content: "Request Landing"
    }), _react.default.createElement("meta", {
      name: "page_name",
      content: "Request Landing"
    }), _react.default.createElement("meta", {
      name: "name",
      content: "Request Landing"
    }), _react.default.createElement("meta", {
      name: "destination",
      content: currentTrip.firstDestinationName
    }), _react.default.createElement("meta", {
      name: "trip_stage",
      content: layout.stage
    }), _react.default.createElement("meta", {
      name: "trip_status",
      content: currentTrip.status
    })), _react.default.createElement(_roster.default, {
      timeout: 3000
    }), _react.default.createElement("div", {
      className: "clearfix contentBackground sbc5"
    }, _react.default.createElement("div", {
      className: "at_appDownloadBannerSection"
    }, _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, {
        name: 'App Banner'
      }),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement(_appDownloadBanner.default, {
      trackSegment: this.trackSegmentEvent
    }))), _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row pb48"
    }, _react.default.createElement(_NavBar.default, {
      currentTripId: currentTripId
    }), _react.default.createElement(_header.default, {
      currentTrip: currentTrip,
      trackSegment: this.trackSegmentEvent
    }), this.props.layout.components.map((component, $index) => {
      const ComponentsInstance = _common.default[component.name];
      return _react.default.createElement(_reactVisibilitySensor.default, {
        key: $index,
        onChange: isVisible => this.onSensorChange(isVisible, component),
        partialVisibility: "bottom",
        delayedCall: true
      }, _react.default.createElement(ComponentsInstance, {
        config: component,
        trackSegment: data => this.trackSegmentEvent(data)
      }));
    })))));
  }

}, _initialiseProps = function () {
  this.resetCounter = () => this.counter = 0;

  this.checkQuoteAtInterval = props => {
    const {
      layout,
      fetchQuotesData,
      params
    } = props;
    this.resetCounter();
    clearInterval(this.quotesApiInterval);

    if (layout.stage === 'LEAD_CREATED') {
      this.quotesApiInterval = setInterval(() => {
        if (this.counter >= 4) {
          return clearInterval(this.quotesApiInterval);
        }

        this.counter++;
        fetchQuotesData({
          tripId: params.requestedTripId
        });
      }, 10000);
    }
  };

  this.trackSegmentEvent = (data = {}) => {
    (0, _utils.rescue)(() => {
      (0, _segmentEvents.trackSegment)({
        event: data.event,
        category: data.category || 'RLP',
        section: data.section || '',
        object: data.object,
        cta: data.cta,
        misc_id_1: data.miscId1,
        misc_type_1: data.miscType1,
        misc_id_2: data.miscId2,
        misc_type_2: data.miscType2,
        misc_id_3: data.miscId3,
        misc_type_3: data.miscType3,
        misc_id_4: data.miscId4,
        misc_type_4: data.miscType4,
        misc_id_5: data.miscId5,
        misc_type_5: data.miscType5
      });
    });
  };

  this.onSensorChange = (isVisible, config) => {
    if (isVisible) {
      if (!this.isEventTracked[config.name]) {
        this.isEventTracked[config.name] = true;
        this.trackSegmentEvent({
          event: _segmentEvents.ORGANISM_VIEWED,
          section: config.name,
          cta: ''
        });
      }
    }
  };
}, _temp);
Layout.propTypes = {
  layout: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  trips: _propTypes.default.object.isRequired,
  currentTripId: _propTypes.default.number.isRequired,
  showRoster: _propTypes.default.func,
  fetchQuotesData: _propTypes.default.func,
  quotes: _propTypes.default.object
};
var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/rlp/Rlp.js":
/*!***********************************!*\
  !*** ./app-v2/screens/rlp/Rlp.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rlpReducers = exports.default = exports.rlpActions = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/rlp/Layout.js"));

var _quoteList = __webpack_require__(/*! modules/quote/actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _tripList = __webpack_require__(/*! modules/trip/actions/tripList */ "./app-v2/modules/trip/actions/tripList.js");

var _currentTrip = __webpack_require__(/*! modules/trip/actions/currentTrip */ "./app-v2/modules/trip/actions/currentTrip.js");

var _tripList2 = __webpack_require__(/*! modules/trip/reducers/tripList */ "./app-v2/modules/trip/reducers/tripList.js");

var rlpReducers = _interopRequireWildcard(__webpack_require__(/*! modules/rlp/reducer */ "./app-v2/modules/rlp/reducer/index.js"));

exports.rlpReducers = rlpReducers;

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const rlpActions = {
  fetchQuotesData: _quoteList.load,
  fetchTripsData: _tripList.load,
  updateRequestedTripId: _currentTrip.updateRequestedTripId,
  tripsLoaded: _tripList2.tripsLoaded
};
exports.rlpActions = rlpActions;
let Rlp = (_temp = _class = class Rlp extends _react.Component {
  componentDidMount() {
    this.props.fetchTripConstants();
  }

  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

}, _class.propTypes = {
  fetchTripConstants: _propTypes.default.func,
  showRoster: _propTypes.default.func,
  fetchQuotesData: _propTypes.default.func
}, _temp);
var _default = Rlp;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3JscC9hcHBEb3dubG9hZEJhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvaGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3JscC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9BdmF0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvVmlld1ByZWZlcmVuY2VzQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9hdmF0YXIuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvaGVhZGVycy9Nb2RhbEhlYWRlckN1c3RvbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2Ryb3Bkb3duL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyaXAvZHJvcGRvd24vRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2Ryb3Bkb3duL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3JscC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvcmxwL1JscC5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJOb3RpZmljYXRpb25Db250YWluZXIiLCJOb3RpZmljYXRpb24iLCJjb250YWluZXIiLCJwcm9wVHlwZXMiLCJjdXJyZW50VHJpcElkIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInRyYWNrU2VnbWVudCIsImZ1bmMiLCJHQmFubmVySW1nRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIkdSaWdodEFycm93U3BhbiIsImhlaWdodCIsIkFwcERvd25sb2FkQmFubmVyIiwic3RhdGUiLCJpc1Zpc2libGUiLCJoYW5kbGVDYW5jZWxDbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0U3RhdGUiLCJoYW5kbGVCYW5uZXJDbGljayIsInByb3BzIiwibGluayIsImdldExpbmsiLCJ3aW5kb3ciLCJvcGVuIiwiT1JHQU5JU01fQ0xJQ0tFRCIsImN0YSIsInNlY3Rpb24iLCJtaXNjSWQxIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJHVmlld1ByZWZlcmVuY2VzQnRuIiwiZmxleCIsIkhlYWRlciIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmF0ZUJvb2tpbmciLCJjdXJyZW50VHJpcCIsInRyaXBJZCIsImlkIiwidGhlbiIsInJlc3VsdHMiLCJsb2NhdGlvbiIsInJlbG9hZCIsInRyYWNrU2VnbWVudEV2ZW50cyIsIm9iamVjdCIsImNsb3NlUG9wdXAiLCJjbG9zZU1vZGFsIiwiaXNDYW5jZWxsZWRUcmlwIiwic3RhdHVzIiwidG9Mb3dlckNhc2UiLCJUUklQX1NUQVRVUyIsIkNBTkNFTExFRCIsInJlbmRlckNhbmNlbCIsIlRyaXBMaXN0Q29udGFpbmVyIiwiVHJpcExpc3QiLCJpc0NvbnZlcnRlZFRyaXAiLCJxdW90ZXNDb3VudCIsIkF2YXRhciIsImltYWdlUGF0aCIsIm5hbWUiLCJpbmNsdWRlcyIsInN0eWxlcyIsImF2YXRhciIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIkNsb3NlSXQiLCJidXR0b24iLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwid2lkdGgiLCJwYWRkaW5nIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJDbG9zZUl0TGVmdCIsImxlZnQiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwiYm90dG9tIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNmb3JtIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImN1c3RvbVN0eWxlc0Z1bGxWaWV3IiwicGFkZGluZ1RvcCIsIk1vZGFsQ29tcG9uZW50IiwiUmVhY3QiLCJpc09wZW4iLCJvcGVuTW9kYWwiLCJiaW5kIiwiYWZ0ZXJPcGVuTW9kYWwiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImN1c3RvbUNsb3NlVHJpZ2dlciIsIm9uUmVxdWVzdENsb3NlQ3VzdG9tIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvbkFmdGVyTW9kYWxPcGVuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJmdWxsVmlldyIsImhhc0N1c3RvbUNsb3NlIiwiaGFzTm9DbG9zZSIsImlzV2hpdGVJY29uIiwiaXNUcmlnZ2VyRnVsbFZpZXciLCJjdXN0b21DbGFzcyIsInRyaWdnZXIiLCJjaGlsZHJlbiIsIm5vZGUiLCJib29sIiwiVmlld1ByZWZlcmVuY2VzQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJlZGl0UHJlZmVyZW5jZVVybCIsInRyaXBTdGF0dXMiLCJvbmVPZlR5cGUiLCJHSGVhZGVyRGl2IiwiYm9yZGVyQm90dG9tIiwiTW9kYWxIZWFkZXJDdXN0b20iLCJoZWFkaW5nIiwiRHJvcGRvd24iLCJoYW5kbGVDbGlja091dHNpZGUiLCJkcm9wRG93bk9wZW4iLCJ0cmlwTGlzdEVsZW1lbnRfIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImhhbmRsZUNoYW5nZSIsInRyaXAiLCJmaXJzdERlc3RpbmF0aW9uTmFtZSIsInRvZ2dsZURyb3BEb3duIiwiZ2V0VHJpcHMiLCJ0cmlwcyIsImFsbElkcyIsIm1hcCIsImJ5SWQiLCJyVHJpcFVybCIsInRvTG9jIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImxlbmd0aCIsInB1c2giLCJhcnJvd0Rvd25TcGFuIiwiZGlzcGxheSIsImxpbmVIZWlnaHQiLCJ0cmFuc2l0aW9uIiwiR0Ryb3Bkb3duQnV0dG9uIiwidGV4dEFsaWduIiwiR1RyaXBzTGlzdFVsIiwidWwiLCJtYXJnaW4iLCJsaXN0U3R5bGUiLCJjb2xvciIsImJhY2tncm91bmQiLCJ0ZXh0RGVjb3JhdGlvbiIsIkdBcnJvd0Rvd25TcGFuIiwic3BhbiIsIkdUcmlwTGlzdERpdiIsIm1pbkhlaWdodCIsIm9wYWNpdHkiLCJhcHBlYXJhbmNlIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwiYm9yZGVyVG9wIiwiYm9yZGVyIiwibGlzdCIsImRhdGEiLCJMYXlvdXQiLCJpc0V2ZW50VHJhY2tlZCIsInF1b3Rlc0FwaUludGVydmFsIiwiY291bnRlciIsImxheW91dCIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJjaGVja1F1b3RlQXRJbnRlcnZhbCIsInByZXZRdW90ZXMiLCJxdW90ZXMiLCJPYmplY3QiLCJrZXlzIiwiY3VycmVudFF1b3RlcyIsInN0YWdlIiwic2hvd1Jvc3RlciIsImFsbG93VGltZU91dCIsIm1lc3NhZ2UiLCJjbGVhckludGVydmFsIiwib25TZW5zb3JDaGFuZ2UiLCIkaW5kZXgiLCJDb21wb25lbnRzSW5zdGFuY2UiLCJjb21tb24iLCJyZXNldENvdW50ZXIiLCJmZXRjaFF1b3Rlc0RhdGEiLCJwYXJhbXMiLCJzZXRJbnRlcnZhbCIsInJlcXVlc3RlZFRyaXBJZCIsImNhdGVnb3J5IiwibWlzY19pZF8xIiwibWlzY190eXBlXzEiLCJtaXNjVHlwZTEiLCJtaXNjX2lkXzIiLCJtaXNjSWQyIiwibWlzY190eXBlXzIiLCJtaXNjVHlwZTIiLCJtaXNjX2lkXzMiLCJtaXNjSWQzIiwibWlzY190eXBlXzMiLCJtaXNjVHlwZTMiLCJtaXNjX2lkXzQiLCJtaXNjSWQ0IiwibWlzY190eXBlXzQiLCJtaXNjVHlwZTQiLCJtaXNjX2lkXzUiLCJtaXNjSWQ1IiwibWlzY190eXBlXzUiLCJtaXNjVHlwZTUiLCJjb25maWciLCJPUkdBTklTTV9WSUVXRUQiLCJybHBBY3Rpb25zIiwiZmV0Y2hUcmlwc0RhdGEiLCJ1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQiLCJ0cmlwc0xvYWRlZCIsIlJscCIsImZldGNoVHJpcENvbnN0YW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7OztJQUVNQSxNLHFCQUFOLE1BQU1BLE1BQU4sU0FBcUJDLGdCQUFyQixDQUErQjtBQU03QkMsV0FBUztBQUNQLFVBQU1DLHdCQUF3QkMsdUJBQWFDLFNBQTNDO0FBQ0EsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxtQkFBRCxPQURGLEVBRUU7QUFBRyxpQkFBVTtBQUFiLGlCQUZGLEVBS0UsNkJBQUMscUJBQUQsT0FMRixDQURGLENBREY7QUFXRDs7QUFuQjRCLEMsU0FDdEJDLFMsR0FBWTtBQUNqQkMsaUJBQWVDLG1CQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRWpCQyxnQkFBY0gsbUJBQVVJLElBQVYsQ0FBZUY7QUFGWixDO2VBcUJOVixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNYSxnQkFBZ0JDLG1CQUFVQyxHQUFWLENBQWM7QUFDbENDLFlBQVUsT0FEd0I7QUFFbENDLFlBQVUsT0FGd0I7QUFHbENDLGFBQVc7QUFIdUIsQ0FBZCxDQUF0Qjs7QUFLQSxNQUFNQyxrQkFBa0JMLG1CQUFVQyxHQUFWLENBQWM7QUFDcENDLFlBQVUsTUFEMEI7QUFFcENJLFVBQVEsTUFGNEI7QUFHcENILFlBQVU7QUFIMEIsQ0FBZCxDQUF4Qjs7SUFNTUksaUIsc0JBQU4sTUFBTUEsaUJBQU4sU0FBZ0NwQixnQkFBaEMsQ0FBMEM7QUFBQTtBQUFBOztBQUFB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O0FBS0Q7QUFDRjtBQUNGLEc7O0FBcURIK0ksT0FBTzVLLFNBQVAsR0FBbUI7QUFDakJnTCxVQUFROUssbUJBQVU4QyxNQUFWLENBQWlCNUMsVUFEUjtBQUVqQmdNLFVBQVFsTSxtQkFBVThDLE1BQVYsQ0FBaUI1QyxVQUZSO0FBR2pCbUksU0FBT3JJLG1CQUFVOEMsTUFBVixDQUFpQjVDLFVBSFA7QUFJakJILGlCQUFlQyxtQkFBVUMsTUFBVixDQUFpQkMsVUFKZjtBQUtqQnNMLGNBQVl4TCxtQkFBVUksSUFMTDtBQU1qQjZMLG1CQUFpQmpNLG1CQUFVSSxJQU5WO0FBT2pCK0ssVUFBUW5MLG1CQUFVOEM7QUFQRCxDQUFuQjtlQVdlNEgsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S2Y7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQSxNQUFNaUQsYUFBYTtBQUNqQjFCLGtDQURpQjtBQUVqQjJCLGdDQUZpQjtBQUdqQkMsMkRBSGlCO0FBSWpCQztBQUppQixDQUFuQjs7SUFVTUMsRyxxQkFBTixNQUFNQSxHQUFOLFNBQWtCdE8sZ0JBQWxCLENBQTRCO0FBUTFCa0osc0JBQW9CO0FBQ2xCLFNBQUt0SCxLQUFMLENBQVcyTSxrQkFBWDtBQUNEOztBQUVEdE8sV0FBUztBQUVQLFdBQ0UsNkJBQUMsZUFBRCxFQUFZLEtBQUsyQixLQUFqQixDQURGO0FBR0Q7O0FBakJ5QixDLFNBRW5CdkIsUyxHQUFZO0FBQ2pCa08sc0JBQW9CaE8sbUJBQVVJLElBRGI7QUFFakJvTCxjQUFZeEwsbUJBQVVJLElBRkw7QUFHakI2TCxtQkFBaUJqTSxtQkFBVUk7QUFIVixDO2VBa0JOMk4sRyIsImZpbGUiOiJybHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICdtb2R1bGVzL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSAnbW9kdWxlcy9oZWFkZXIvQnVyZ2VyTWVudSc7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3VycmVudFRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBOb3RpZmljYXRpb25Db250YWluZXIgPSBOb3RpZmljYXRpb24uY29udGFpbmVyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiYzUgcDhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdDQgcGI0IHByOCBwbDggZmxleCB3ZnVsbCBqdXN0aWZ5Q2VudGVyIGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgPEJ1cmdlck1lbnUgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbDE1IGYxNiBmbGV4IGFsaWduQ2VudGVyIGZ3NyBzZmN3IGZsZXhGdWxsIGVsbGlwc2lzXCI+XG4gICAgICAgICAgICBNeSBUcmlwXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxOb3RpZmljYXRpb25Db250YWluZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IENsb3NlSWNvbiwgUmlnaHRXaGl0ZUFycm93LCBNU0hvbWUgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmNvbnN0IEdCYW5uZXJJbWdEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWluV2lkdGg6ICcxMTBweCcsXG4gIG1heFdpZHRoOiAnMTEwcHgnLFxuICBtYXhIZWlnaHQ6ICc2NnB4J1xufSk7XG5jb25zdCBHUmlnaHRBcnJvd1NwYW4gPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWluV2lkdGg6ICczMnB4JyxcbiAgaGVpZ2h0OiAnMzJweCcsXG4gIG1heFdpZHRoOiAnMzJweCdcbn0pO1xuXG5jbGFzcyBBcHBEb3dubG9hZEJhbm5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IGlzVmlzaWJsZTogdHJ1ZSB9O1xuXG4gIGhhbmRsZUNhbmNlbENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgc3RhdGljIGdldExpbmsgPSAoKSA9PiB7XG4gICAgbGV0IGxpbms7XG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpKSB7XG4gICAgICBsaW5rID0gJ2h0dHBzOi8vYWQuYXBzYWxhci5jb20vYXBpL3YxL2FkP3JlPTEmYT10cmF2ZWx0cmlhbmdsZSZpPWNvbS50cmF2ZWx0cmlhbmdsZS50cmF2ZWxlciZjYT1BcHBfSW5zdGFsbF9NU19Ib21lcGFnZV9pT1MmYW49T3JnYW5pYyZwPWlPUyZwbD0xJmg9NmMyMDk4Zjg3ZGVlMGYzOWY5NTBhNDc5NmY0OTI0MzJlMjBmMzg2MSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmsgPSAnaHR0cHM6Ly9hZC5hcHNhbGFyLmNvbS9hcGkvdjEvYWQ/cmU9MSZhPXRyYXZlbHRyaWFuZ2xlJmk9Y29tLnRyYXZlbHRyaWFuZ2xlLnRyYXZlbGxlciZjYT1BcHBfSW5zdGFsbF9NU19Ib21lcGFnZSZhbj1PcmdhbmljJnA9QW5kcm9pZCZwbD0xJmg9ZTFhNzE3YTQ1MzA1YWEzYWJmNmE3NjVkZjAwNDI4MmQ1ZjRiNWYxOCc7XG4gICAgfVxuICAgIHJldHVybiBsaW5rO1xuICB9O1xuXG4gIGhhbmRsZUJhbm5lckNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhY2tTZWdtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxpbmsgPSBBcHBEb3dubG9hZEJhbm5lci5nZXRMaW5rKCk7XG4gICAgd2luZG93Lm9wZW4obGluaywgJ19ibGFuaycpO1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIGN0YTogJ0Rvd25sb2FkJyxcbiAgICAgIHNlY3Rpb246ICdBcHAgQmFubmVyJyxcbiAgICAgIG1pc2NJZDE6ICdWYXIgMSdcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1Zpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9tb0Jhbm5lciBwaG9uZUJHIHB0MTUgcGwxNSBzYmN3IHJlbGF0aXZlIGZsZXggejMgYXRfYXBwRG93bmxvYWRCYW5uZXJcIlxuICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhbm5lckNsaWNrfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTQgZnc3IG1iMTVcIj5Eb3dubG9hZCBvdXIgQXBwIGZvciBhIGJldHRlciBib29raW5nIGV4cGVyaWVuY2U8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIGJ0bi1maWxsZWQtcHJpIG1iMTUgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIERvd25sb2FkIE5vd1xuICAgICAgICAgICAgPEdSaWdodEFycm93U3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXItdiByMFwiPlxuICAgICAgICAgICAgICA8UmlnaHRXaGl0ZUFycm93IC8+XG4gICAgICAgICAgICA8L0dSaWdodEFycm93U3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxHQmFubmVySW1nRGl2IGNsYXNzTmFtZT1cImFsaWduU2VsZkZsZXhFbmRcIj5cbiAgICAgICAgICA8SW1nIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICBpa1NyYz1cImh0dHBzOi8vaW1nLnRyYXZlbHRyaWFuZ2xlLmNvbS9wdWJsaWMtcHJvZHVjdC9waG9uZXIucG5nXCJcbiAgICAgICAgICAgICAgIGFsdD1cIk1TIEhvbWVcIlxuICAgICAgICAgICAgICAgd2lkdGg9ezExMH1cbiAgICAgICAgICAgICAgIGhlaWdodD17NjZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HQmFubmVySW1nRGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lckRpc21pc3MgYWJzb2x1dGUgejIgdDE1IHIxMCBpY29uLTE0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWxDbGlja30+XG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwRG93bmxvYWRCYW5uZXIucHJvcFR5cGVzID0ge1xuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBEb3dubG9hZEJhbm5lcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBUUklQX1NUQVRVUyB9IGZyb20gJ2NvbnN0YW50cy90cmlwU3RhdHVzJztcbmltcG9ydCB7IENvbXBhcmVJY29uLCBDb21wYXJlSWNvbldoaXRlIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgY29tcGFyZVF1b3Rlc1BhdGggfSBmcm9tICdoZWxwZXJzL3VybEhlbHBlcnMnO1xuaW1wb3J0IFRyaXBMaXN0IGZyb20gJ21vZHVsZXMvdHJpcC9kcm9wZG93bi9pbmRleCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBDYW5jZWxSZXF1ZXN0IGZyb20gJ21vZHVsZXMvdHJpcC9jYW5jZWxSZXF1ZXN0JztcbmltcG9ydCBWaWV3UHJlZmVyZW5jZXNCdXR0b24gZnJvbSAnbW9kdWxlcy9zaGFyZWQvVmlld1ByZWZlcmVuY2VzQnV0dG9uJztcbmltcG9ydCB7IGlzVHJpcENvbnZlcnRlZCwgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR1ZpZXdQcmVmZXJlbmNlc0J0biA9IGdsYW1vcm91cy5kaXYoe1xuICBmbGV4OiAnMCAwIDEzNXB4Jyxcbn0pO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsb3NlTW9kYWw6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgcmVhY3RpdmF0ZUJvb2tpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFjdGl2YXRlQm9va2luZywgY3VycmVudFRyaXAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmVhY3RpdmF0ZUJvb2tpbmcoeyB0cmlwSWQ6IGN1cnJlbnRUcmlwLmlkIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0cmFja1NlZ21lbnRFdmVudHMgPSAoKSA9PiB7XG4gICAgcmVzY3VlKCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICAgIHNlY3Rpb246ICdUcmlwIHJlcXVlc3QgZGV0YWlscycsXG4gICAgICAgIG9iamVjdDogJycsXG4gICAgICAgIGN0YTogJ0NhbmNlbCBSZXF1ZXN0J1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogdHJ1ZSB9KTtcbiAgfTtcblxuICBpc0NhbmNlbGxlZFRyaXAgPSAoc3RhdHVzKSA9PiBzdGF0dXMudG9Mb3dlckNhc2UoKSA9PT0gVFJJUF9TVEFUVVMuQ0FOQ0VMTEVEO1xuXG5cbiAgcmVuZGVyQ2FuY2VsKCkge1xuICAgIGNvbnN0IHsgY3VycmVudFRyaXAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gdGhpcy5pc0NhbmNlbGxlZFRyaXAoY3VycmVudFRyaXAuc3RhdHVzKSA/XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nc2ZjMSBmdzcgZjE0IGF0X3VuZG9DYW5jZWxfY3RhJyBvbkNsaWNrPXt0aGlzLnJlYWN0aXZhdGVCb29raW5nfT5VbmRvIENhbmNlbDwvYnV0dG9uPiA6XG4gICAgICA8TW9kYWwgZnVsbFZpZXc9e3RydWV9IGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgICAgIHRyaWdnZXI9ezxzcGFuIGNsYXNzTmFtZT0nZjE0IGZ3NyBzZmM2IGF0X2NhbmNlbFJlcXVlc3QnIG9uQ2xpY2s9e3RoaXMudHJhY2tTZWdtZW50RXZlbnRzfT5DYW5jZWwgUmVxdWVzdDwvc3Bhbj59XG4gICAgICAgICAgICAgY3VzdG9tQ2xvc2VUcmlnZ2VyPXt0aGlzLnN0YXRlLmNsb3NlTW9kYWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Jjdyc+XG4gICAgICAgICAgPENhbmNlbFJlcXVlc3QgY2xvc2VNb2RhbD17dGhpcy5jbG9zZVBvcHVwfSB0cmlwSWQ9e2N1cnJlbnRUcmlwLmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IFRyaXBMaXN0Q29udGFpbmVyID0gVHJpcExpc3QuY29udGFpbmVyO1xuICAgIGNvbnN0IHsgY3VycmVudFRyaXAsIHRyYWNrU2VnbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc0NvbnZlcnRlZFRyaXAgPSBpc1RyaXBDb252ZXJ0ZWQoY3VycmVudFRyaXAuc3RhdHVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjNCBwOCBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2Vlbic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy03IHBsMCBwcjQgZmxleEZ1bGwnPjxUcmlwTGlzdENvbnRhaW5lciBjdXJyZW50VHJpcElkPXtjdXJyZW50VHJpcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50fSAvPjwvZGl2PlxuICAgICAgICAgIDxHVmlld1ByZWZlcmVuY2VzQnRuIGNsYXNzTmFtZT0nY29sLXhzLTUgcGw0IHByMCc+PFZpZXdQcmVmZXJlbmNlc0J1dHRvbiBjdXJyZW50VHJpcElkPXtjdXJyZW50VHJpcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpcFN0YXR1cz17Y3VycmVudFRyaXAuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudH0gLz48L0dWaWV3UHJlZmVyZW5jZXNCdG4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjNSBwbDE1IHByMTUgcHQxNSBwYjI0IGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuJz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxNCBwZmM1IGF0X2Jvb2tpbmdJRCc+e2BCb29raW5nIElEICMke2N1cnJlbnRUcmlwLmlkfWB9PC9wPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzQ29udmVydGVkVHJpcFxuICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgOiB0aGlzLnJlbmRlckNhbmNlbCgpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2N1cnJlbnRUcmlwLnF1b3Rlc0NvdW50ID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncDE1IHNiY3cgYXRfY29tcGFyZUN0YV9zZWN0aW9uJz5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZjE0IHRleHQtY2VudGVyIHBmYzMgbWI1Jz57YFlvdSBoYXZlIHJlY2VpdmVkICR7Y3VycmVudFRyaXAucXVvdGVzQ291bnR9IHF1b3RlcyBhbmQgeW91IGNhbmB9PC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17Y29tcGFyZVF1b3Rlc1BhdGgoY3VycmVudFRyaXAuaWQpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBwdDggcGI4IGJsb2NrIHdmdWxsICR7Y3VycmVudFRyaXAucXVvdGVzQ291bnQgPiAxID8gJ2J0bi1zZWMtbG9hZCcgOiAnZGlzYWJsZWQgc2Zjdyd9IGF0X2NvbXBhcmVxdW90ZXNgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwdDIgcGIyIGJsb2NrIHdmdWxsIGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlcic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi0xOCBtcjggaWJsb2NrJz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50VHJpcC5xdW90ZXNDb3VudCA+IDEgPyAgPENvbXBhcmVJY29uIC8+IDogIDxDb21wYXJlSWNvbldoaXRlIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPkNvbXBhcmUgUXVvdGVzPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudFRyaXA6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlYWN0aXZhdGVCb29raW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyByZWFjdGl2YXRlQm9va2luZyB9IGZyb20gJ21vZHVsZXMvdHJpcC9hY3Rpb25zL3RyaXBBY3Rpdml0aWVzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLCB7XG4gICAgcmVhY3RpdmF0ZUJvb2tpbmdcbiAgfVxuKShIZWFkZXIpO1xuIiwiaW1wb3J0IHRyaXAgZnJvbSAnbW9kdWxlcy90cmlwL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCBxdW90ZSBmcm9tICdtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCBub3RpZmljYXRpb25zIGZyb20gJ21vZHVsZXMvbm90aWZpY2F0aW9ucy9yZWR1Y2VyJztcblxuZXhwb3J0IHtcbiAgdHJpcCxcbiAgcXVvdGUsXG4gIG5vdGlmaWNhdGlvbnNcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2V0SW5pdGlhbHNGcm9tTmFtZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXZhdGFyLmNtLnNjc3MnO1xuXG5jb25zdCBBdmF0YXIgPSAoeyBpbWFnZVBhdGgsIG5hbWUgfSkgPT4gKFxuICBpbWFnZVBhdGggJiYgIWltYWdlUGF0aC5pbmNsdWRlcygnbWlzc2luZy5wbmcnKVxuICAgID8gKDxkaXYgY2xhc3NOYW1lPXtgb3ZlcmZsb3doIHJhZGl1czEwMCBzYmM0IG1yMTUgcmVsYXRpdmUgYWdlbnQtdXNlci1pbWcgJHtzdHlsZXMuYXZhdGFyfWB9PlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJ3ZnVsbCBhYnNvbHV0ZS1jZW50ZXJcIiBzcmM9e2ltYWdlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDwvZGl2PilcbiAgICA6ICg8ZGl2IGNsYXNzTmFtZT17YGFnZW50LXVzZXItbmFtZSB0MCBtcjE1IGhmdWxsIHJlbGF0aXZlICR7c3R5bGVzLmF2YXRhcn1gfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyIGYxNlwiPlxuICAgICAgICAgIHtnZXRJbml0aWFsc0Zyb21OYW1lKG5hbWUpfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4pO1xuXG5BdmF0YXIucHJvcFR5cGVzID0ge1xuICBpbWFnZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGltYWdlUGF0aDogbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgQ2xvc2VEYXJrLCBDbG9zZVdoaXRlfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IENsb3NlSXQgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnNXB4JyxcbiAgdG9wOiAnMHB4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnMicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuXG5jb25zdCBDbG9zZUl0TGVmdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgbGVmdDogJzVweCcsXG4gIHRvcDogJzNweCcsXG4gIHdpZHRoOiAnMzZweCcsXG4gIGhlaWdodDogJzM2cHgnLFxuICBwYWRkaW5nOiAnMTJweCcsXG4gIHpJbmRleDogJzYnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KTtcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHpJbmRleDogJzEwMScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIHdpZHRoOiAnOTQlJyxcbiAgICBtYXhXaWR0aDogJzYwMHB4JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43NSknXG4gIH0sXG59O1xuY29uc3QgY3VzdG9tU3R5bGVzRnVsbFZpZXcgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmdUb3A6ICc1MHB4J1xuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJ1xuICB9LFxufTtcblxuY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgb25BZnRlck1vZGFsT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZXF1ZXN0Q2xvc2VDdXN0b206IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1c3RvbUNsb3NlVHJpZ2dlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNOb0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1doaXRlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGN1c3RvbUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogKCkgPT4ge1xuICAgIH0sXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBmYWxzZSxcbiAgICB0cmlnZ2VyOiA8YnV0dG9uPlBsZWFzZSBzdXBwbHkgYSBjdXN0b20gdHJpZ2dlciBjb21wb25lbnQ8L2J1dHRvbj4sXG4gICAgZnVsbFZpZXc6IGZhbHNlLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBmYWxzZSxcbiAgICBoYXNOb0Nsb3NlOiBmYWxzZSxcbiAgICBpc1doaXRlSWNvbjogZmFsc2UsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWZ0ZXJPcGVuTW9kYWwgPSB0aGlzLmFmdGVyT3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiBuZXh0UHJvcHMuY3VzdG9tQ2xvc2VUcmlnZ2VyKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSgpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gIH1cblxuICBhZnRlck9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQWZ0ZXJNb2RhbE9wZW4oKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZ1bGxWaWV3LCBoYXNDdXN0b21DbG9zZSwgaGFzTm9DbG9zZSwgaXNXaGl0ZUljb24sIGlzVHJpZ2dlckZ1bGxWaWV3LCBjdXN0b21DbGFzcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVHJpZ2dlckZ1bGxWaWV3ID8gJ3dmdWxsJzogJyd9PlxuICAgICAgICB7IXRoaXMucHJvcHMuaXNPcGVuID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyaWdnZXJ9XG4gICAgICAgICAgPC9zcGFuPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25BZnRlck9wZW49e3RoaXMuYWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICBzdHlsZT17ZnVsbFZpZXcgPyBjdXN0b21TdHlsZXNGdWxsVmlldyA6IGN1c3RvbVN0eWxlc31cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJUcmF2ZWwgVHJpYW5nbGUgTW9kYWxcIlxuICAgICAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VzdG9tQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYXNDdXN0b21DbG9zZSA/XG4gICAgICAgICAgICAgIDxDbG9zZUl0TGVmdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0TGVmdD4gOlxuICAgICAgICAgICAgICA8Q2xvc2VJdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHByZWZlcmVuY2VzUGFnZVVybCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBpc1RyaXBDb252ZXJ0ZWQsIHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuXG5jbGFzcyBWaWV3UHJlZmVyZW5jZXNCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3VycmVudFRyaXBJZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLFxuICAgIHRyaXBTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgICBzZWN0aW9uOiAnVHJpcHMgZHJvcGRvd24gc2VjdGlvbicsXG4gICAgICAgIG9iamVjdDogJycsXG4gICAgICAgIGN0YTogJ0VkaXQgcHJlZmVyZW5jZXMnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZWRpdFByZWZlcmVuY2VVcmwgPSBwcmVmZXJlbmNlc1BhZ2VVcmwodGhpcy5wcm9wcy5jdXJyZW50VHJpcElkKTtcbiAgICBjb25zdCBpc0NvbnZlcnRlZFRyaXAgPSBpc1RyaXBDb252ZXJ0ZWQodGhpcy5wcm9wcy50cmlwU3RhdHVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9J2libG9jayB3ZnVsbCBwdDggcGI4IHNiYzEgc2ZjdyB0ZXh0LWNlbnRlciBmdzcnXG4gICAgICAgICAgICAgIHRvPXtlZGl0UHJlZmVyZW5jZVVybH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwdDMgcGIzIGlibG9jayBhdF9lZGl0UHJlZmVyZW5jZXMnPntpc0NvbnZlcnRlZFRyaXAgPyAnVmlldyBQcmVmZXJlbmNlcycgOiAnRWRpdCBQcmVmZXJlbmNlcyd9PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdQcmVmZXJlbmNlc0J1dHRvbjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF2YXRhclwiOiBcImxlcmpJeFBKVHJjeUZraW5oOGV2X1wiXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHSGVhZGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBhZGRpbmc6ICcxMnB4IDE1cHggMTJweCA0OHB4JyxcbiAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNFRkVGRUYnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxIZWFkZXJDdXN0b20gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWFkaW5nOiAnJ1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhlYWRpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHSGVhZGVyRGl2IGNsYXNzTmFtZT1cImZpeGVkIHNiY3cgdDAgbDAgcjAgejUgd2Z1bGxcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVsbGlwc2lzIGYxNmEgbTAgZnc5IHBmYzNcIj57aGVhZGluZ308L2gyPlxuICAgICAgPC9HSGVhZGVyRGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IHJ0cmlwUGF0aCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHtcbiAgR1RyaXBMaXN0RGl2LCBHRHJvcGRvd25CdXR0b24sIEdUcmlwc0xpc3RVbCwgR0Fycm93RG93blNwYW5cbn0gZnJvbSAnLi9HJztcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkcm9wRG93bk9wZW46IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmdldFRyaXBzID0gdGhpcy5nZXRUcmlwcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRHJvcERvd24gPSB0aGlzLnRvZ2dsZURyb3BEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICBoYW5kbGVDbGlja091dHNpZGUgPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJvcERvd25PcGVuICYmICF0aGlzLnRyaXBMaXN0RWxlbWVudF8uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BEb3duT3BlbjogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBzZWN0aW9uLCBvYmplY3QsIGN0YSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhY2tTZWdtZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmVzY3VlKCgpID0+IHtcbiAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBvYmplY3QsXG4gICAgICAgIGN0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHRyaXApID0+IHtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdUcmlwcyBkcm9wZG93biBzZWN0aW9uJywgJycsIHRyaXAuZmlyc3REZXN0aW5hdGlvbk5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wRG93bk9wZW46ICF0aGlzLnN0YXRlLmRyb3BEb3duT3BlbiB9KTtcbiAgfTtcblxuICB0b2dnbGVEcm9wRG93biA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcERvd25PcGVuOiAhdGhpcy5zdGF0ZS5kcm9wRG93bk9wZW4gfSk7XG4gIH07XG5cbiAgZ2V0VHJpcHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmlwcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKHRyaXBzLmFsbElkcy5tYXAodHJpcElkID0+IHtcbiAgICAgIGNvbnN0IHRyaXAgPSB0cmlwcy5ieUlkW3RyaXBJZF07XG4gICAgICBjb25zdCByVHJpcFVybCA9IHJ0cmlwUGF0aCh0cmlwLmlkKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17dHJpcC5pZH0+XG4gICAgICAgICAgPExpbmsgdG89e3JUcmlwVXJsfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSh0cmlwKX0+XG4gICAgICAgICAgICA8c3BhbiB0aXRsZT17dHJpcC5maXJzdERlc3RpbmF0aW9uTmFtZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGVsbGlwc2lzIGYxNCBhdF9EZXN0aW5hdGlvbk5hbWVcIj57dHJpcC5maXJzdERlc3RpbmF0aW9uTmFtZSB8fCB0cmlwLnRvTG9jfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGYxMiBwZmMxIGF0X2Jvb2tpbmdJZFwiPkJvb2tpbmcgSUQgI3t0cmlwLmlkfTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmlwcywgY3VycmVudFRyaXBJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjdXJyZW50VHJpcCA9IHRyaXBzLmJ5SWRbY3VycmVudFRyaXBJZF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEdUcmlwTGlzdERpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCByZWxhdGl2ZSBzYmN3IHJhZGl1czJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiB0aGlzLnRyaXBMaXN0RWxlbWVudF8gPSByZWZ9PlxuICAgICAgICAgICAgPEdEcm9wZG93bkJ1dHRvbiBjbGFzc05hbWU9XCJyYWRpdXMyIGF0X3RyaXBMaXN0QnV0dG9uIHJlbGF0aXZlIHByMzIgZWxsaXBzaXNcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3BEb3dufT5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdzcgYXRfZGVzdGluYXRpb25uYW1lXCI+e2N1cnJlbnRUcmlwLmZpcnN0RGVzdGluYXRpb25OYW1lIHx8IGN1cnJlbnRUcmlwLnRvTG9jfTwvc3Bhbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIDxHQXJyb3dEb3duU3BhbiBjbGFzc05hbWU9eyF0aGlzLnN0YXRlLmRyb3BEb3duT3BlbiA/ICcnIDogJ2Fycm93RG93bid9PlxuICAgICAgICAgICAgICAgICAgPERvd25BcnJvdyAvPlxuICAgICAgICAgICAgICAgIDwvR0Fycm93RG93blNwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvR0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPEdUcmlwc0xpc3RVbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wRG93bkxpc3QgcmFkaXVzMiBiczQgbXQzIHNiY3cgJHshdGhpcy5zdGF0ZS5kcm9wRG93bk9wZW4gPyAnIGRyb3Bkb3duQ2xvc2VkJyA6ICcnfWB9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50cmlwcy5hbGxJZHMgJiYgdGhpcy5wcm9wcy50cmlwcy5hbGxJZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldFRyaXBzKClcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0dUcmlwc0xpc3RVbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dUcmlwTGlzdERpdj5cbiAgICApO1xuICB9XG59XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgdHJpcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3VycmVudFRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHB1c2g6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iLCJpbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IGFycm93RG93blNwYW4gPSB7XG4gIHdpZHRoOiAnMTBweCcsXG4gIGhlaWdodDogJzZweCcsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzE1cHgnLFxuICBsaW5lSGVpZ2h0OiAnMCcsXG4gIHRvcDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDFzJyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEdEcm9wZG93bkJ1dHRvbiA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwYWRkaW5nOiAnMCAxNXB4JyxcbiAgaGVpZ2h0OiAnNDBweCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHRleHRBbGlnbjogJ2xlZnQnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHVHJpcHNMaXN0VWwgPSBnbGFtb3JvdXMudWwoe1xuICBtYXJnaW46ICcwJyxcbiAgcGFkZGluZzogJzAnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgekluZGV4OiAnMTAxJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJyYgbGknOiB7XG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnJiBhJzoge1xuICAgICAgcGFkZGluZzogJzhweCAxNXB4JyxcbiAgICAgIGNvbG9yOiAnIzNlM2UzZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAnJiBwJzoge1xuICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgIH0sXG4gICAgICAnJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDA5Njg4JyxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gICcmIGxpLm5vVHJpcHMnOiB7XG4gICAgcGFkZGluZzogJzE1cHgnLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHQXJyb3dEb3duU3BhbiA9IGdsYW1vcm91cy5zcGFuKGFycm93RG93blNwYW4pO1xuXG5leHBvcnQgY29uc3QgR1RyaXBMaXN0RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1pbkhlaWdodDogJzQwcHgnLFxuICAnJiBzZWxlY3QnOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMCcsXG4gICAgbGVmdDogJzAnLFxuICAgIHJpZ2h0OiAnMCcsXG4gICAgYm90dG9tOiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgekluZGV4OiAnMScsXG4gICAgYXBwZWFyYW5jZTogJ25vbmUnXG4gIH0sXG4gICcmIC5hcnJvd0Rvd24nOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxuICB9LFxuICAnJiAuZHJvcERvd25MaXN0Jzoge1xuICAgIHRyYW5zaXRpb246ICdtYXgtaGVpZ2h0IDAuMnMnLFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgbWF4SGVpZ2h0OiAnMTYwcHgnLFxuICAgIGJvcmRlclRvcDogJzAgbm9uZScsXG4gIH0sXG4gICcmIC5kcm9wZG93bkNsb3NlZCc6IHtcbiAgICBtYXhIZWlnaHQ6ICcwJyxcbiAgICBib3JkZXI6ICcwIG5vbmUnLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgcHVzaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5cbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyaXBzOiBzdGF0ZS50cmlwLmxpc3QsXG4gICAgICBjdXJyZW50VHJpcElkOiBzdGF0ZS50cmlwLmN1cnJlbnRUcmlwLmRhdGEuaWQsXG4gICAgfTtcbiAgfSxcbiAge1xuICAgIHB1c2hcbiAgfSkoRHJvcGRvd24pKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBjb21tb24gZnJvbSAnYXBwLXYyL2NvbW1vbic7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ21vZHVsZXMvcmxwL05hdkJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ21vZHVsZXMvcmxwL2hlYWRlcic7XG5pbXBvcnQgUm9zdGVyIGZyb20gJ21vZHVsZXMvcm9zdGVyJztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IEFwcERvd25sb2FkQmFubmVyIGZyb20gJ21vZHVsZXMvcmxwL2FwcERvd25sb2FkQmFubmVyJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmlzRXZlbnRUcmFja2VkID0ge307XG4gICAgdGhpcy5xdW90ZXNBcGlJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5jb3VudGVyID0gMDtcbiAgfVxuXG4gIHJlc2V0Q291bnRlciA9ICgpID0+IHRoaXMuY291bnRlciA9IDA7XG5cbiAgY2hlY2tRdW90ZUF0SW50ZXJ2YWwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGxheW91dCwgZmV0Y2hRdW90ZXNEYXRhLCBwYXJhbXMgfSA9IHByb3BzO1xuXG4gICAgdGhpcy5yZXNldENvdW50ZXIoKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMucXVvdGVzQXBpSW50ZXJ2YWwpO1xuXG4gICAgaWYgKGxheW91dC5zdGFnZSA9PT0gJ0xFQURfQ1JFQVRFRCcpIHtcbiAgICAgIHRoaXMucXVvdGVzQXBpSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gNCkge1xuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKHRoaXMucXVvdGVzQXBpSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgICAgICBmZXRjaFF1b3Rlc0RhdGEoeyB0cmlwSWQ6IHBhcmFtcy5yZXF1ZXN0ZWRUcmlwSWQgfSk7XG4gICAgICB9LCAxMDAwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbGF5b3V0IH0gPSB0aGlzLnByb3BzO1xuICAgIGxheW91dC5jb21wb25lbnRzLm1hcCgoY29tcG9uZW50KSA9PiB7XG4gICAgICB0aGlzLmlzRXZlbnRUcmFja2VkW2NvbXBvbmVudC5uYW1lXSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVja1F1b3RlQXRJbnRlcnZhbCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRUcmlwSWQgIT09IG5leHRQcm9wcy5jdXJyZW50VHJpcElkKSB7XG4gICAgICB0aGlzLmlzRXZlbnRUcmFja2VkID0ge307XG5cbiAgICAgIHRoaXMuY2hlY2tRdW90ZUF0SW50ZXJ2YWwobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2UXVvdGVzID0gdGhpcy5wcm9wcy5xdW90ZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5xdW90ZXMpIHx8IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRRdW90ZXMgPSBuZXh0UHJvcHMucXVvdGVzICYmIE9iamVjdC5rZXlzKG5leHRQcm9wcy5xdW90ZXMpIHx8IFtdO1xuICAgIGlmIChwcmV2UXVvdGVzLmxlbmd0aCA9PT0gMCAmJiBjdXJyZW50UXVvdGVzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmxheW91dC5zdGFnZSA9PT0gJ0xFQURfQ1JFQVRFRCcpIHtcbiAgICAgIHRoaXMucHJvcHMuc2hvd1Jvc3Rlcih7XG4gICAgICAgIGFsbG93VGltZU91dDogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFsnRGVhciB0cmF2ZWxlciwgcmVmcmVzaCB0aGUgcGFnZSB0byB2aWV3IHlvdXIgZmlyc3QgcXVvdGUuICcsXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfT48dT5WaWV3IFF1b3RlPC91PjwvYT5dXG4gICAgICB9KTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5xdW90ZXNBcGlJbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBjbGVhckludGVydmFsKHRoaXMucXVvdGVzQXBpSW50ZXJ2YWwpO1xuICB9XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZGF0YSA9IHt9KSA9PiB7XG4gICAgcmVzY3VlKCgpID0+IHtcbiAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50OiBkYXRhLmV2ZW50LFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnUkxQJyxcbiAgICAgICAgc2VjdGlvbjogZGF0YS5zZWN0aW9uIHx8ICcnLFxuICAgICAgICBvYmplY3Q6IGRhdGEub2JqZWN0LFxuICAgICAgICBjdGE6IGRhdGEuY3RhLFxuICAgICAgICBtaXNjX2lkXzE6IGRhdGEubWlzY0lkMSxcbiAgICAgICAgbWlzY190eXBlXzE6IGRhdGEubWlzY1R5cGUxLFxuICAgICAgICBtaXNjX2lkXzI6IGRhdGEubWlzY0lkMixcbiAgICAgICAgbWlzY190eXBlXzI6IGRhdGEubWlzY1R5cGUyLFxuICAgICAgICBtaXNjX2lkXzM6IGRhdGEubWlzY0lkMyxcbiAgICAgICAgbWlzY190eXBlXzM6IGRhdGEubWlzY1R5cGUzLFxuICAgICAgICBtaXNjX2lkXzQ6IGRhdGEubWlzY0lkNCxcbiAgICAgICAgbWlzY190eXBlXzQ6IGRhdGEubWlzY1R5cGU0LFxuICAgICAgICBtaXNjX2lkXzU6IGRhdGEubWlzY0lkNSxcbiAgICAgICAgbWlzY190eXBlXzU6IGRhdGEubWlzY1R5cGU1XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBvblNlbnNvckNoYW5nZSA9IChpc1Zpc2libGUsIGNvbmZpZykgPT4ge1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIGlmICghdGhpcy5pc0V2ZW50VHJhY2tlZFtjb25maWcubmFtZV0pIHtcbiAgICAgICAgdGhpcy5pc0V2ZW50VHJhY2tlZFtjb25maWcubmFtZV0gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgICAgIGV2ZW50OiBPUkdBTklTTV9WSUVXRUQsXG4gICAgICAgICAgc2VjdGlvbjogY29uZmlnLm5hbWUsXG4gICAgICAgICAgY3RhOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJpcHMsIGN1cnJlbnRUcmlwSWQsIGxheW91dCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjdXJyZW50VHJpcCA9IHRyaXBzLmJ5SWRbY3VycmVudFRyaXBJZF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuXG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PVwiUmVxdWVzdCBMYW5kaW5nXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9uYW1lXCIgY29udGVudD1cIlJlcXVlc3QgTGFuZGluZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm5hbWVcIiBjb250ZW50PVwiUmVxdWVzdCBMYW5kaW5nXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzdGluYXRpb25cIiBjb250ZW50PXtjdXJyZW50VHJpcC5maXJzdERlc3RpbmF0aW9uTmFtZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHJpcF9zdGFnZVwiIGNvbnRlbnQ9e2xheW91dC5zdGFnZX0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHJpcF9zdGF0dXNcIiBjb250ZW50PXtjdXJyZW50VHJpcC5zdGF0dXN9IC8+XG4gICAgICAgIDwvSGVsbWV0PlxuXG4gICAgICAgIDxSb3N0ZXIgdGltZW91dD17MzAwMH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBjb250ZW50QmFja2dyb3VuZCBzYmM1XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdF9hcHBEb3dubG9hZEJhbm5lclNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCB7IG5hbWU6ICdBcHAgQmFubmVyJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFZpc2liaWxpdHk9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgZGVsYXllZENhbGw9e3RydWV9PlxuICAgICAgICAgICAgICA8QXBwRG93bmxvYWRCYW5uZXIgdHJhY2tTZWdtZW50PXt0aGlzLnRyYWNrU2VnbWVudEV2ZW50fSAvPlxuICAgICAgICAgICAgPC9TZW5zb3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiNDhcIj5cbiAgICAgICAgICAgICAgPE5hdkJhciBjdXJyZW50VHJpcElkPXtjdXJyZW50VHJpcElkfSAvPlxuICAgICAgICAgICAgICA8SGVhZGVyIGN1cnJlbnRUcmlwPXtjdXJyZW50VHJpcH0gdHJhY2tTZWdtZW50PXt0aGlzLnRyYWNrU2VnbWVudEV2ZW50fSAvPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYXlvdXQuY29tcG9uZW50cy5tYXAoKGNvbXBvbmVudCwgJGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBDb21wb25lbnRzSW5zdGFuY2UgPSBjb21tb25bY29tcG9uZW50Lm5hbWVdO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNlbnNvciBrZXk9eyRpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUsIGNvbXBvbmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbFZpc2liaWxpdHk9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudHNJbnN0YW5jZSBjb25maWc9e2NvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17KGRhdGEpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoZGF0YSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Vuc29yPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGxheW91dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJpcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3VycmVudFRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzaG93Um9zdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZmV0Y2hRdW90ZXNEYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcbmltcG9ydCB7IGxvYWQgYXMgZmV0Y2hRdW90ZXNEYXRhIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlTGlzdCc7XG5pbXBvcnQgeyBsb2FkIGFzIGZldGNoVHJpcHNEYXRhIH0gZnJvbSAnbW9kdWxlcy90cmlwL2FjdGlvbnMvdHJpcExpc3QnO1xuaW1wb3J0IHsgdXBkYXRlUmVxdWVzdGVkVHJpcElkIH0gZnJvbSAnbW9kdWxlcy90cmlwL2FjdGlvbnMvY3VycmVudFRyaXAnO1xuaW1wb3J0IHsgdHJpcHNMb2FkZWQgfSBmcm9tICdtb2R1bGVzL3RyaXAvcmVkdWNlcnMvdHJpcExpc3QnO1xuaW1wb3J0ICogYXMgcmxwUmVkdWNlcnMgZnJvbSAnbW9kdWxlcy9ybHAvcmVkdWNlcic7XG5cbmV4cG9ydCB7IHJscFJlZHVjZXJzIH07XG5jb25zdCBybHBBY3Rpb25zID0ge1xuICBmZXRjaFF1b3Rlc0RhdGEsXG4gIGZldGNoVHJpcHNEYXRhLFxuICB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQsXG4gIHRyaXBzTG9hZGVkXG59O1xuZXhwb3J0IHtcbiAgcmxwQWN0aW9uc1xufTtcblxuY2xhc3MgUmxwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZldGNoVHJpcENvbnN0YW50czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd1Jvc3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmV0Y2hRdW90ZXNEYXRhOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hUcmlwQ29uc3RhbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJscDtcbiJdLCJzb3VyY2VSb290IjoiIn0=