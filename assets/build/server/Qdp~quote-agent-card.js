require("source-map-support").install();
exports.ids = ["Qdp~quote-agent-card"];
exports.modules = {

/***/ "./app-v2/modules/quote/ctas/CallTripAdvisor.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/ctas/CallTripAdvisor.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'Call Trip Guide';

const CallTripAdvisor = ({
  phoneNumber,
  ctaText
}) => _react.default.createElement("div", null, _react.default.createElement("a", {
  href: `tel:${phoneNumber}`,
  className: "wfull btn-filled-pri-large radius2 ripple"
}, ctaText));

CallTripAdvisor.propTypes = {
  phoneNumber: _propTypes.default.string.isRequired,
  ctaText: _propTypes.default.string
};
CallTripAdvisor.defaultProps = {
  ctaText: CTA_TEXT
};
var _default = CallTripAdvisor;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/SocialShare.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/quote/ctas/SocialShare.js ***!
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

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _socialShareModal = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/socialShareModal */ "./app-v2/modules/quote/shared/socialShareModal/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SocialShare = ({
  trackSegment,
  sharedBy,
  shareLink
}) => {
  return _react.default.createElement("span", {
    className: "mr15"
  }, _react.default.createElement(_GenericModal.default, {
    trigger: _react.default.createElement("span", {
      className: "input-24 iblock",
      onClick: () => trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Share')
    }, " ", _react.default.createElement(_Icon.ShareWhite, null)),
    fullView: true,
    hasCustomClose: true
  }, _react.default.createElement(_socialShareModal.default, {
    sharedBy: sharedBy,
    shareLink: shareLink
  })));
};

SocialShare.propTypes = {
  sharedBy: _propTypes.default.string.isRequired,
  shareLink: _propTypes.default.string.isRequired,
  trackSegment: _propTypes.default.func
};
SocialShare.defaultProps = {
  trackSegment: () => {}
};
var _default = SocialShare;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/SwitchQuote.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/quote/ctas/SwitchQuote.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'View Booked Quote';

const SwitchQuote = ({
  tripId,
  quoteId,
  trackSegment
}) => {
  const switchQuoteUrl = (0, _urlHelpers.quoteDetailPath)(tripId, quoteId);
  return _react.default.createElement("div", {
    className: "flexFull flex"
  }, _react.default.createElement(_reactRouter.Link, {
    to: switchQuoteUrl,
    className: "wfull btn-filled-pri-large radius0 pl5 pr5 ripple"
  }, CTA_TEXT));
};

SwitchQuote.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  trackSegment: _propTypes.default.func
};
SwitchQuote.defaultProps = {
  trackSegment: () => {}
};
var _default = SwitchQuote;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/ViewInvoiceAndPay.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/ctas/ViewInvoiceAndPay.js ***!
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

var _ctaCm = _interopRequireDefault(__webpack_require__(/*! ./cta.cm.scss */ "./app-v2/modules/quote/ctas/cta.cm.scss"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'View Invoice & Pay';

const ViewInvoiceAndPay = ({
  invoiceUrl,
  ctaText,
  trackSegment
}) => {
  return _react.default.createElement("div", {
    className: `flexFull flex ${_ctaCm.default.viewInvoiceBtn}`
  }, _react.default.createElement("a", {
    href: invoiceUrl,
    className: "wfull btn-filled-pri-large pl15 pr15 ripple",
    onClick: () => trackSegment(_segmentEvents.ORGANISM_CLICKED, 'View Invoice and Pay')
  }, _react.default.createElement("span", {
    className: "wave"
  }), ctaText));
};

ViewInvoiceAndPay.propTypes = {
  invoiceUrl: _propTypes.default.string.isRequired,
  ctaText: _propTypes.default.string,
  trackSegment: _propTypes.default.func
};
ViewInvoiceAndPay.defaultProps = {
  ctaText: CTA_TEXT,
  trackSegment: () => {}
};
var _default = ViewInvoiceAndPay;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/WaitForInvoice.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/quote/ctas/WaitForInvoice.js ***!
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

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'Wait For Invoice';

const WaitForInvoice = ({
  callbackHandler
}) => {
  const handleClick = () => {
    callbackHandler(_EventTypes.default.WAIT_FOR_INVOICE);
  };

  return _react.default.createElement("div", null, _react.default.createElement("button", {
    className: "wfull btn-filled-pri-large radius2 ripple",
    onClick: handleClick
  }, CTA_TEXT));
};

WaitForInvoice.propTypes = {
  callbackHandler: _propTypes.default.func
};
WaitForInvoice.defaultProps = {};
var _default = WaitForInvoice;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/cta.cm.scss":
/*!***********************************************!*\
  !*** ./app-v2/modules/quote/ctas/cta.cm.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"viewInvoiceBtn": "_3exmAU4o1FOzbaTF8UI0lU"
};

/***/ }),

/***/ "./app-v2/modules/quote/popups/bookNow/G.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/quote/popups/bookNow/G.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookPopup = exports.PriceContainer = exports.IconSpan = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IconSpan = _glamorous.default.span({
  width: '62.68px',
  height: '41.96px',
  position: 'relative',
  '& svg': {
    width: '62px',
    height: '41.96px'
  }
});

exports.IconSpan = IconSpan;

const PriceContainer = _glamorous.default.p({
  ' .price-val': {
    display: 'inline-block',
    margin: '0 5px !important'
  }
});

exports.PriceContainer = PriceContainer;

const BookPopup = _glamorous.default.div({
  width: '100%'
});

exports.BookPopup = BookPopup;

/***/ }),

/***/ "./app-v2/modules/quote/popups/bookNow/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/popups/bookNow/index.js ***!
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

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/quote/popups/bookNow/G.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _WaitForInvoice = _interopRequireDefault(__webpack_require__(/*! ../../ctas/WaitForInvoice */ "./app-v2/modules/quote/ctas/WaitForInvoice.js"));

var _CallTripAdvisor = _interopRequireDefault(__webpack_require__(/*! ../../ctas/CallTripAdvisor */ "./app-v2/modules/quote/ctas/CallTripAdvisor.js"));

var _ModalHeaderCustom = _interopRequireDefault(__webpack_require__(/*! modules/shared/headers/ModalHeaderCustom */ "./app-v2/modules/shared/headers/ModalHeaderCustom.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let BookNowPopup = (_temp = _class = class BookNowPopup extends _react.Component {
  constructor(props) {
    super(props);

    this.onSensorChange = isVisible => {
      if (isVisible) {
        this.props.trackSegment(_segmentEvents.ORGANISM_VIEWED, 'Book now pop-up');
      }
    };

    this.handleWaitForInvoice = () => {
      this.props.closeModal();
    };
  }

  render() {
    const {
      opsDetail
    } = this.props;
    return _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: this.onSensorChange,
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement(_G.BookPopup, {
      className: "row row-"
    }, _react.default.createElement(_ModalHeaderCustom.default, {
      heading: "Confirmation"
    }), _react.default.createElement("div", {
      className: "col-md-12 sbcw z2 p0"
    }, _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "col-xs-12 bb iblock p24 pt48"
    }, _react.default.createElement("p", {
      className: "f32 fw7 pfc3 mb24"
    }, "Thank You for your confirmation!"), _react.default.createElement(_G.PriceContainer, {
      className: "f14 pfc3 mb15"
    }, "Your invoice is getting ready and will be soon shared to you to initiate payment."), opsDetail && opsDetail.phoneNo ? _react.default.createElement("p", {
      className: "f14 pfc4 mb0"
    }, "You may also call your trip guide now for more details.") : null), _react.default.createElement("div", {
      className: "fixed b0 l0 wfull bs6"
    }, _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_WaitForInvoice.default, {
      callbackHandler: this.handleWaitForInvoice
    })), opsDetail && opsDetail.phoneNo ? _react.default.createElement(_CallTripAdvisor.default, {
      phoneNumber: opsDetail.phoneNo
    }) : null)))));
  }

}, _class.propTypes = {
  opsDetail: _propTypes.default.object,
  closeModal: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func
}, _class.defaultProps = {
  opsDetail: {},
  trackSegment: () => {}
}, _temp);
var _default = BookNowPopup;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/socialShareModal/index.js":
/*!***************************************************************!*\
  !*** ./app-v2/modules/quote/shared/socialShareModal/index.js ***!
  \***************************************************************/
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

var _ModalHeaderCustom = _interopRequireDefault(__webpack_require__(/*! modules/shared/headers/ModalHeaderCustom */ "./app-v2/modules/shared/headers/ModalHeaderCustom.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GIconSpan = _glamorous.default.span({
  width: '24px',
  height: '24px',
  left: '12px'
});

const GLinkDiv = _glamorous.default.div({
  '& a': {
    border: '1px solid #d4d4d4'
  }
});

let SocialShareModal = (_temp = _class = class SocialShareModal extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "sbcw"
    }, _react.default.createElement(_ModalHeaderCustom.default, {
      heading: "Share with"
    }), _react.default.createElement("div", {
      className: "p24"
    }, _react.default.createElement("div", {
      className: "mb15"
    }, _react.default.createElement("a", {
      href: `whatsapp://send?text=${this.props.shareLink}`,
      "data-action": "share/whatsapp/share",
      className: "block input-with-icon-box flex alignCenter justifyCenter text-center sbc3 sfcw radius2 f14p"
    }, _react.default.createElement(GIconSpan, {
      className: "absolute-center-v"
    }, _react.default.createElement(_Icon.WhatsAppIcon, null)), "Whatsapp")), _react.default.createElement(GLinkDiv, null, _react.default.createElement("a", {
      href: `mailto:?subject=${this.props.sharedBy} shared a quote with you on the behalf of Travel Triangle&amp;body=${this.props.shareLink}`,
      className: "block input-with-icon-box flex alignCenter justifyCenter text-center pfc2 radius2 f14p"
    }, _react.default.createElement(GIconSpan, {
      className: "absolute-center-v"
    }, _react.default.createElement(_Icon.GmailIcon, null)), "Gmail"))));
  }

}, _class.propTypes = {
  sharedBy: _propTypes.default.string,
  shareLink: _propTypes.default.string,
  trackSegment: _propTypes.default.func
}, _class.defaultProps = {
  trackSegment: () => {}
}, _temp);
exports.default = SocialShareModal;

/***/ }),

/***/ "./app-v2/modules/trip/ChildEventsType.js":
/*!************************************************!*\
  !*** ./app-v2/modules/trip/ChildEventsType.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = Object.freeze({
  REACTIVATE_TRIP: 'REACTIVATE_TRIP',
  CANCEL_TRIP: 'CANCEL_TRIP'
});

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/ctas/CancelBooking.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/trip/ctas/CancelBooking.js ***!
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

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _cancelRequest = _interopRequireDefault(__webpack_require__(/*! modules/trip/cancelRequest */ "./app-v2/modules/trip/cancelRequest/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let CancelBooking = class CancelBooking extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      closeModal: false
    }, this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    }, this.openPopup = () => {
      this.setState({
        closeModal: false
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "flexFull flex"
    }, _react.default.createElement(_GenericModal.default, {
      fullView: true,
      hasCustomClose: true,
      trigger: _react.default.createElement("button", {
        className: "wfull ripple p15 pl5 pr5",
        onClick: this.openPopup
      }, "Cancel Booking"),
      customCloseTrigger: this.state.closeModal
    }, _react.default.createElement("div", {
      className: "sbcw"
    }, _react.default.createElement(_cancelRequest.default, {
      closeModal: this.closePopup,
      tripId: this.props.tripId
    }))));
  }

};
CancelBooking.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  callbackHandler: _propTypes.default.func.isRequired
};
CancelBooking.defaultProps = {};
var _default = CancelBooking;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jdGFzL0NhbGxUcmlwQWR2aXNvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jdGFzL1NvY2lhbFNoYXJlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2N0YXMvU3dpdGNoUXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY3Rhcy9WaWV3SW52b2ljZUFuZFBheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jdGFzL1dhaXRGb3JJbnZvaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2N0YXMvY3RhLmNtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvcG9wdXBzL2Jvb2tOb3cvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9wb3B1cHMvYm9va05vdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvc29jaWFsU2hhcmVNb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL0NoaWxkRXZlbnRzVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2N0YXMvQ2FuY2VsQm9va2luZy5qcyJdLCJuYW1lcyI6WyJDVEFfVEVYVCIsIkNhbGxUcmlwQWR2aXNvciIsInBob25lTnVtYmVyIiwiY3RhVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJTb2NpYWxTaGFyZSIsInRyYWNrU2VnbWVudCIsInNoYXJlZEJ5Iiwic2hhcmVMaW5rIiwiT1JHQU5JU01fQ0xJQ0tFRCIsImZ1bmMiLCJTd2l0Y2hRdW90ZSIsInRyaXBJZCIsInF1b3RlSWQiLCJzd2l0Y2hRdW90ZVVybCIsIm51bWJlciIsIlZpZXdJbnZvaWNlQW5kUGF5IiwiaW52b2ljZVVybCIsInN0eWxlcyIsInZpZXdJbnZvaWNlQnRuIiwiV2FpdEZvckludm9pY2UiLCJjYWxsYmFja0hhbmRsZXIiLCJoYW5kbGVDbGljayIsIlFVT1RFX0VWRU5UU19FTlVNUyIsIldBSVRfRk9SX0lOVk9JQ0UiLCJJY29uU3BhbiIsImdsYW1vcm91cyIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiUHJpY2VDb250YWluZXIiLCJwIiwiZGlzcGxheSIsIm1hcmdpbiIsIkJvb2tQb3B1cCIsImRpdiIsIkJvb2tOb3dQb3B1cCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJvblNlbnNvckNoYW5nZSIsImlzVmlzaWJsZSIsIk9SR0FOSVNNX1ZJRVdFRCIsImhhbmRsZVdhaXRGb3JJbnZvaWNlIiwiY2xvc2VNb2RhbCIsInJlbmRlciIsIm9wc0RldGFpbCIsInBob25lTm8iLCJvYmplY3QiLCJHSWNvblNwYW4iLCJsZWZ0IiwiR0xpbmtEaXYiLCJib3JkZXIiLCJTb2NpYWxTaGFyZU1vZGFsIiwiT2JqZWN0IiwiZnJlZXplIiwiUkVBQ1RJVkFURV9UUklQIiwiQ0FOQ0VMX1RSSVAiLCJDYW5jZWxCb29raW5nIiwic3RhdGUiLCJjbG9zZVBvcHVwIiwic2V0U3RhdGUiLCJvcGVuUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLFdBQVcsaUJBQWpCOztBQUVBLE1BQU1DLGtCQUFrQixDQUFDO0FBQUVDLGFBQUY7QUFBZUM7QUFBZixDQUFELEtBQ3RCLDBDQUNFO0FBQUcsUUFBTyxPQUFNRCxXQUFZLEVBQTVCO0FBQStCLGFBQVU7QUFBekMsR0FDR0MsT0FESCxDQURGLENBREY7O0FBUUFGLGdCQUFnQkcsU0FBaEIsR0FBNEI7QUFDMUJGLGVBQWFHLG1CQUFVQyxNQUFWLENBQWlCQyxVQURKO0FBRTFCSixX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bnQtY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBDVEFfVEVYVCA9ICdDYWxsIFRyaXAgR3VpZGUnO1xuXG5jb25zdCBDYWxsVHJpcEFkdmlzb3IgPSAoeyBwaG9uZU51bWJlciwgY3RhVGV4dCB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGEgaHJlZj17YHRlbDoke3Bob25lTnVtYmVyfWB9IGNsYXNzTmFtZT1cIndmdWxsIGJ0bi1maWxsZWQtcHJpLWxhcmdlIHJhZGl1czIgcmlwcGxlXCI+XG4gICAgICB7Y3RhVGV4dH1cbiAgICA8L2E+XG4gIDwvZGl2PlxuKTtcblxuQ2FsbFRyaXBBZHZpc29yLnByb3BUeXBlcyA9IHtcbiAgcGhvbmVOdW1iZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY3RhVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5DYWxsVHJpcEFkdmlzb3IuZGVmYXVsdFByb3BzID0ge1xuICBjdGFUZXh0OiBDVEFfVEVYVCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGxUcmlwQWR2aXNvcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IFNoYXJlV2hpdGUgfSBmcm9tIFwiaGVscGVycy9JY29uL0ljb25cIjtcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IFNvY2lhbFNoYXJlTW9kYWwgZnJvbSAnbW9kdWxlcy9xdW90ZS9zaGFyZWQvc29jaWFsU2hhcmVNb2RhbCc7XG5cbmNvbnN0IFNvY2lhbFNoYXJlID0gKHsgdHJhY2tTZWdtZW50LCBzaGFyZWRCeSwgc2hhcmVMaW5rIH0pID0+IHtcblxuICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT1cIm1yMTVcIj5cbiAgICA8TW9kYWxcbiAgICAgIHRyaWdnZXI9ezxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IGlibG9ja1wiIG9uQ2xpY2s9eygpID0+IHRyYWNrU2VnbWVudChPUkdBTklTTV9DTElDS0VELCAnU2hhcmUnKX0+IDxTaGFyZVdoaXRlIC8+PC9zcGFuPiB9XG4gICAgICBmdWxsVmlldz17dHJ1ZX1cbiAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgID5cbiAgICAgIDxTb2NpYWxTaGFyZU1vZGFsIHNoYXJlZEJ5PXtzaGFyZWRCeX0gc2hhcmVMaW5rPXtzaGFyZUxpbmt9IC8+XG4gICAgPC9Nb2RhbD5cbiAgPC9zcGFuPik7XG59O1xuXG5Tb2NpYWxTaGFyZS5wcm9wVHlwZXMgPSB7XG4gIHNoYXJlZEJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNoYXJlTGluazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuU29jaWFsU2hhcmUuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbFNoYXJlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgcXVvdGVEZXRhaWxQYXRoIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcblxuY29uc3QgQ1RBX1RFWFQgPSAnVmlldyBCb29rZWQgUXVvdGUnO1xuXG5jb25zdCBTd2l0Y2hRdW90ZSA9ICh7IHRyaXBJZCwgcXVvdGVJZCwgdHJhY2tTZWdtZW50IH0pID0+IHtcbiAgY29uc3Qgc3dpdGNoUXVvdGVVcmwgPSBxdW90ZURldGFpbFBhdGgodHJpcElkLCBxdW90ZUlkKTtcblxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZmxleFwiPlxuICAgIDxMaW5rIHRvPXtzd2l0Y2hRdW90ZVVybH0gY2xhc3NOYW1lPVwid2Z1bGwgYnRuLWZpbGxlZC1wcmktbGFyZ2UgcmFkaXVzMCBwbDUgcHI1IHJpcHBsZVwiPlxuICAgICAge0NUQV9URVhUfVxuICAgIDwvTGluaz5cbiAgPC9kaXY+KTtcbn07XG5cblN3aXRjaFF1b3RlLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuU3dpdGNoUXVvdGUuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hRdW90ZTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY3RhLmNtLnNjc3MnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgQ1RBX1RFWFQgPSAnVmlldyBJbnZvaWNlICYgUGF5JztcblxuY29uc3QgVmlld0ludm9pY2VBbmRQYXkgPSAoeyBpbnZvaWNlVXJsLCBjdGFUZXh0LCB0cmFja1NlZ21lbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleEZ1bGwgZmxleCAke3N0eWxlcy52aWV3SW52b2ljZUJ0bn1gfT5cbiAgICAgIDxhIGhyZWY9e2ludm9pY2VVcmx9IGNsYXNzTmFtZT1cIndmdWxsIGJ0bi1maWxsZWQtcHJpLWxhcmdlIHBsMTUgcHIxNSByaXBwbGVcIlxuICAgICAgICAgb25DbGljaz17KCkgPT4gdHJhY2tTZWdtZW50KE9SR0FOSVNNX0NMSUNLRUQsICdWaWV3IEludm9pY2UgYW5kIFBheScpfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2F2ZVwiIC8+e2N0YVRleHR9XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5WaWV3SW52b2ljZUFuZFBheS5wcm9wVHlwZXMgPSB7XG4gIGludm9pY2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY3RhVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuVmlld0ludm9pY2VBbmRQYXkuZGVmYXVsdFByb3BzID0ge1xuICBjdGFUZXh0OiBDVEFfVEVYVCxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdJbnZvaWNlQW5kUGF5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBRVU9URV9FVkVOVFNfRU5VTVMgZnJvbSAnbW9kdWxlcy9xdW90ZS9FdmVudFR5cGVzJztcblxuY29uc3QgQ1RBX1RFWFQgPSAnV2FpdCBGb3IgSW52b2ljZSc7XG5cbmNvbnN0IFdhaXRGb3JJbnZvaWNlID0gKHsgY2FsbGJhY2tIYW5kbGVyIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY2FsbGJhY2tIYW5kbGVyKFFVT1RFX0VWRU5UU19FTlVNUy5XQUlUX0ZPUl9JTlZPSUNFKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIndmdWxsIGJ0bi1maWxsZWQtcHJpLWxhcmdlIHJhZGl1czIgcmlwcGxlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHtDVEFfVEVYVH1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuV2FpdEZvckludm9pY2UucHJvcFR5cGVzID0ge1xuICBjYWxsYmFja0hhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuV2FpdEZvckludm9pY2UuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFdhaXRGb3JJbnZvaWNlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidmlld0ludm9pY2VCdG5cIjogXCJfM2V4bUFVNG8xRk96YmFURjhVSTBsVVwiXG59OyIsImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEljb25TcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzYyLjY4cHgnLFxuICBoZWlnaHQ6ICc0MS45NnB4JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzYycHgnLFxuICAgIGhlaWdodDogJzQxLjk2cHgnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IFByaWNlQ29udGFpbmVyID0gZ2xhbW9yb3VzLnAoe1xuICAnIC5wcmljZS12YWwnOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMCA1cHggIWltcG9ydGFudCdcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBCb29rUG9wdXAgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcxMDAlJ1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgeyBJY29uU3BhbiwgUHJpY2VDb250YWluZXIsIEJvb2tQb3B1cCB9IGZyb20gJy4vRyc7XG5pbXBvcnQgeyBJbGx1c1RoYW5rc1JlcXVlc3QgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IFdhaXRGb3JJbnZvaWNlIGZyb20gJy4uLy4uL2N0YXMvV2FpdEZvckludm9pY2UnO1xuaW1wb3J0IENhbGxUcmlwQWR2aXNvciBmcm9tICcuLi8uLi9jdGFzL0NhbGxUcmlwQWR2aXNvcic7XG5pbXBvcnQgTW9kYWxIZWFkZXJDdXN0b20gZnJvbSBcIm1vZHVsZXMvc2hhcmVkL2hlYWRlcnMvTW9kYWxIZWFkZXJDdXN0b21cIjtcblxuY2xhc3MgQm9va05vd1BvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wc0RldGFpbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wc0RldGFpbDoge30sXG4gICAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gICAgfVxuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KE9SR0FOSVNNX1ZJRVdFRCwgJ0Jvb2sgbm93IHBvcC11cCcpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVXYWl0Rm9ySW52b2ljZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHNEZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZW5zb3Igb25DaGFuZ2U9e3RoaXMub25TZW5zb3JDaGFuZ2V9XG4gICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nXG4gICAgICAgICAgICAgIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgPEJvb2tQb3B1cCBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgIDxNb2RhbEhlYWRlckN1c3RvbSBoZWFkaW5nPVwiQ29uZmlybWF0aW9uXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBzYmN3IHoyIHAwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBiYiBpYmxvY2sgcDI0IHB0NDhcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMzIgZnc3IHBmYzMgbWIyNFwiPlRoYW5rIFlvdSBmb3IgeW91ciBjb25maXJtYXRpb24hPC9wPlxuICAgICAgICAgICAgICAgIDxQcmljZUNvbnRhaW5lciBjbGFzc05hbWU9XCJmMTQgcGZjMyBtYjE1XCI+WW91ciBpbnZvaWNlIGlzIGdldHRpbmcgcmVhZHkgYW5kIHdpbGwgYmUgc29vbiBzaGFyZWQgdG9cbiAgICAgICAgICAgICAgICAgIHlvdSB0byBpbml0aWF0ZSBwYXltZW50LlxuICAgICAgICAgICAgICAgIDwvUHJpY2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb3BzRGV0YWlsICYmIG9wc0RldGFpbC5waG9uZU5vXG4gICAgICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPVwiZjE0IHBmYzQgbWIwXCI+WW91IG1heSBhbHNvIGNhbGwgeW91ciB0cmlwIGd1aWRlIG5vdyBmb3IgbW9yZSBkZXRhaWxzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBiMCBsMCB3ZnVsbCBiczZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICAgICAgICAgICAgPFdhaXRGb3JJbnZvaWNlIGNhbGxiYWNrSGFuZGxlcj17dGhpcy5oYW5kbGVXYWl0Rm9ySW52b2ljZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvcHNEZXRhaWwgJiYgb3BzRGV0YWlsLnBob25lTm9cbiAgICAgICAgICAgICAgICAgICAgPyA8Q2FsbFRyaXBBZHZpc29yIHBob25lTnVtYmVyPXtvcHNEZXRhaWwucGhvbmVOb30gLz5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jvb2tQb3B1cD5cbiAgICAgIDwvU2Vuc29yPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va05vd1BvcHVwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7IFdoYXRzQXBwSWNvbiwgR21haWxJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IE1vZGFsSGVhZGVyQ3VzdG9tIGZyb20gJ21vZHVsZXMvc2hhcmVkL2hlYWRlcnMvTW9kYWxIZWFkZXJDdXN0b20nO1xuXG5jb25zdCBHSWNvblNwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMjRweCcsXG4gIGhlaWdodDogJzI0cHgnLFxuICBsZWZ0OiAnMTJweCcsXG59KTtcblxuY29uc3QgR0xpbmtEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgYSc6IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2Q0ZDRkNCcsXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NpYWxTaGFyZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzaGFyZWRCeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaGFyZUxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHJhY2tTZWdtZW50OiAoKSA9PiB7fVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3XCI+XG4gICAgICAgIDxNb2RhbEhlYWRlckN1c3RvbSBoZWFkaW5nPSdTaGFyZSB3aXRoJyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAyNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIxNVwiPlxuICAgICAgICAgICAgPGEgaHJlZj17YHdoYXRzYXBwOi8vc2VuZD90ZXh0PSR7dGhpcy5wcm9wcy5zaGFyZUxpbmt9YH1cbiAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwic2hhcmUvd2hhdHNhcHAvc2hhcmVcIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaW5wdXQtd2l0aC1pY29uLWJveCBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgdGV4dC1jZW50ZXIgc2JjMyBzZmN3IHJhZGl1czIgZjE0cFwiPlxuICAgICAgICAgICAgICA8R0ljb25TcGFuIGNsYXNzTmFtZT1cImFic29sdXRlLWNlbnRlci12XCI+PFdoYXRzQXBwSWNvbiAvPjwvR0ljb25TcGFuPlxuICAgICAgICAgICAgICBXaGF0c2FwcFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHTGlua0Rpdj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e2BtYWlsdG86P3N1YmplY3Q9JHt0aGlzLnByb3BzLnNoYXJlZEJ5fSBzaGFyZWQgYSBxdW90ZSB3aXRoIHlvdSBvbiB0aGUgYmVoYWxmIG9mIFRyYXZlbCBUcmlhbmdsZSZhbXA7Ym9keT0ke3RoaXMucHJvcHMuc2hhcmVMaW5rfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGlucHV0LXdpdGgtaWNvbi1ib3ggZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIHRleHQtY2VudGVyIHBmYzIgcmFkaXVzMiBmMTRwXCI+XG4gICAgICAgICAgICAgIDxHSWNvblNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyLXZcIj48R21haWxJY29uIC8+PC9HSWNvblNwYW4+XG4gICAgICAgICAgICAgIEdtYWlsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9HTGlua0Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBSRUFDVElWQVRFX1RSSVA6ICdSRUFDVElWQVRFX1RSSVAnLFxuICBDQU5DRUxfVFJJUDogJ0NBTkNFTF9UUklQJyxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IENhbmNlbFJlcXVlc3QgZnJvbSAnbW9kdWxlcy90cmlwL2NhbmNlbFJlcXVlc3QnO1xuXG5jbGFzcyBDYW5jZWxCb29raW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY2xvc2VNb2RhbDogZmFsc2VcbiAgfTtcblxuICBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZU1vZGFsOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4XCI+XG4gICAgICAgIDxNb2RhbCBmdWxsVmlldz17dHJ1ZX0gaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgICAgICB0cmlnZ2VyPXs8YnV0dG9uIGNsYXNzTmFtZT1cIndmdWxsIHJpcHBsZSBwMTUgcGw1IHByNVwiIG9uQ2xpY2s9e3RoaXMub3BlblBvcHVwfT5DYW5jZWwgQm9va2luZzwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgIGN1c3RvbUNsb3NlVHJpZ2dlcj17dGhpcy5zdGF0ZS5jbG9zZU1vZGFsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Jjdyc+XG4gICAgICAgICAgICA8Q2FuY2VsUmVxdWVzdCBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlUG9wdXB9IHRyaXBJZD17dGhpcy5wcm9wcy50cmlwSWR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhbmNlbEJvb2tpbmcucHJvcFR5cGVzID0ge1xuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY2FsbGJhY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5DYW5jZWxCb29raW5nLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxCb29raW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==