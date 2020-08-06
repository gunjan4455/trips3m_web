require("source-map-support").install();
exports.ids = ["Qdp~quote-agent-card~quote-list"];
exports.modules = {

/***/ "./app-v2/modules/quote/EventTypes.js":
/*!********************************************!*\
  !*** ./app-v2/modules/quote/EventTypes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = Object.freeze({
  BOOK_NOW: 'BOOK_NOW',
  REJECT_QUOTE: 'REJECT_QUOTE',
  REACTIVATE_QUOTE: 'REACTIVATE_QUOTE',
  REQUEST_CALLBACK: 'REQUEST_CALLBACK',
  WAIT_FOR_INVOICE: 'WAIT_FOR_INVOICE',
  PAY_NOW: 'PAY_NOW'
});

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/RejectQuote.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/quote/ctas/RejectQuote.js ***!
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

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../popups/rejectQuote/index */ "./app-v2/modules/quote/popups/rejectQuote/index.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let RejectQuote = class RejectQuote extends _react.Component {
  constructor(props) {
    super(props);

    this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    };

    this.trackSegmentEvent = () => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Quotes section', 'Reject quote', '', '', this.props.quoteId, 'quote id');
      });
    };

    this.state = {
      closeModal: false
    };
  }

  render() {
    const {
      quoteId,
      tripId,
      isQuoteCardCta,
      quoteRejectionReasons,
      callbackHandler,
      trackSegment
    } = this.props;
    return _react.default.createElement("div", {
      className: "flexFull flex"
    }, _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("button", {
        className: isQuoteCardCta ? 'block p15 fw7 text-left wfull at_rejectQuote' : 'wfull p15 fw7 cursorP at_rejectQuote',
        onClick: this.trackSegmentEvent
      }, "Reject Quote"),
      fullView: true,
      hasCustomClose: true,
      customCloseTrigger: this.state.closeModal,
      isTriggerFullView: true
    }, _react.default.createElement(_index.default, {
      rejectQuoteReasons: quoteRejectionReasons,
      closeModal: this.closePopup,
      rejectQuoteHandler: callbackHandler,
      tripId: tripId,
      quoteId: quoteId,
      loading: this.props.loading
    })));
  }

};
RejectQuote.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  callbackHandler: _propTypes.default.func.isRequired,
  quoteRejectionReasons: _propTypes.default.object.isRequired,
  isQuoteCardCta: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  trackSegment: _propTypes.default.func
};
RejectQuote.defaultProps = {
  isQuoteCardCta: false,
  loading: false
};
var _default = RejectQuote;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/popups/rejectQuote/G.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/popups/rejectQuote/G.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRejectModalWrapperDiv = exports.GTextArea = exports.GRadioInputText = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioInput = _glamorous.default.input({
  '& + label': {
    color: '#3e3e3e',
    ':before': {
      borderColor: '#3e3e3e'
    }
  },
  '&:checked + label + .input-dropdown-box': {
    display: 'block'
  },
  '&:checked + label + .showText + textarea': {
    display: 'block'
  }
});

const GRadioInputText = (0, _glamorous.default)(RadioInput)({
  '&:checked + label + textarea': {
    display: 'block'
  }
});
exports.GRadioInputText = GRadioInputText;

const GTextArea = _glamorous.default.textarea({
  display: 'none',
  marginLeft: '30px',
  resize: 'none',
  width: 'calc(100% - 30px)'
});

exports.GTextArea = GTextArea;

const GRejectModalWrapperDiv = _glamorous.default.div({
  paddingBottom: '100px',
  height: 'calc(100vh)'
});

exports.GRejectModalWrapperDiv = GRejectModalWrapperDiv;

/***/ }),

/***/ "./app-v2/modules/quote/popups/rejectQuote/index.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/quote/popups/rejectQuote/index.js ***!
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

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/quote/popups/rejectQuote/G.js");

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

var _ModalHeaderCustom = _interopRequireDefault(__webpack_require__(/*! modules/shared/headers/ModalHeaderCustom */ "./app-v2/modules/shared/headers/ModalHeaderCustom.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RejectQuotePopup = (_temp = _class = class RejectQuotePopup extends _react.default.Component {
  constructor(props) {
    super(props);

    this.handleCancel = () => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Reject quote pop up', 'Cancel');
      });
      this.props.closeModal();
    };

    this.state = {
      reason: '',
      reasonText: '',
      showNoSelectionErrorMsg: false
    };
    this.reasonChanged = this.reasonChanged.bind(this);
    this.reasonTextUpdated = this.reasonTextUpdated.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  reasonChanged(event) {
    this.setState({
      reason: event.currentTarget.value
    });
  }

  reasonTextUpdated(event) {
    this.setState({
      reasonText: event.target.value
    });
  }

  handleSubmit() {
    if (this.state.reason || this.state.reasonText) {
      this.props.rejectQuoteHandler(_EventTypes.default.REJECT_QUOTE, {
        tripId: this.props.tripId,
        quoteId: this.props.quoteId,
        reason: this.state.reason,
        reasonText: this.state.reasonText
      });
    } else {
      this.setState({
        showNoSelectionErrorMsg: true
      });
      setTimeout(() => {
        this.setState({
          showNoSelectionErrorMsg: false
        });
      }, 5000);
    }
  }

  render() {
    const {
      rejectQuoteReasons
    } = this.props;
    const otherId = 'reject-quote-5';
    const options = Object.keys(rejectQuoteReasons).filter(rejectionId => rejectionId !== '5').map((rejectionId, index) => {
      const id = `reject-quote-${rejectionId}${index}`;
      return _react.default.createElement("div", {
        key: id
      }, _react.default.createElement(_G.GRadioInputText, {
        type: "radio",
        className: "checkbox-round",
        name: "reject-quote-rad",
        id: id,
        value: rejectionId,
        checked: this.state.reason === rejectionId,
        onChange: this.reasonChanged
      }), _react.default.createElement("label", {
        className: "iblock wfull f14 pfc3 mb8 mt8 at_rejectreason",
        htmlFor: id
      }, rejectQuoteReasons[rejectionId]));
    });
    return _react.default.createElement(_G.GRejectModalWrapperDiv, {
      className: "row row-"
    }, _react.default.createElement(_ModalHeaderCustom.default, {
      heading: "Reject Quote:"
    }), _react.default.createElement("div", {
      className: "col-xs-12 sbcw z2 p0"
    }, _react.default.createElement("div", {
      className: "col-xs-12 iblock p24 pb8"
    }, _react.default.createElement("p", {
      className: "f14 fw9 pfc3 mb0 at_rejectheader"
    }, "Please let us know the reason for rejecting this quote"), this.state.showNoSelectionErrorMsg ? _react.default.createElement("p", {
      className: "f14 fw7 mt8 mb0 at_rejecterror",
      style: {
        color: 'red'
      }
    }, "Please select a reason.") : null), _react.default.createElement("div", {
      className: "col-xs-12 p24 pt8"
    }, options, _react.default.createElement("div", {
      key: otherId
    }, _react.default.createElement(_G.GRadioInputText, {
      type: "radio",
      className: "checkbox-round",
      name: "reject-quote-rad",
      id: otherId,
      value: '5',
      checked: this.state.reason === '5',
      onChange: this.reasonChanged
    }), _react.default.createElement("label", {
      className: "iblock wfull f14 pfc3 mb8 mt8 at_rejectreason",
      htmlFor: otherId
    }, "Others"), _react.default.createElement(_G.GTextArea, {
      placeholder: "Enter reason for Quote Rejection",
      className: "border textarea p8 mb8 at_othertextbox",
      value: this.state.reasonText,
      onChange: this.reasonTextUpdated
    }))), _react.default.createElement("div", {
      className: "fixed b0 l0 flex wfull bs6 z10"
    }, _react.default.createElement("button", {
      className: "flexFull link-pri pfc3 fw7 wfull radius2 pl8 pr8 pt15 pb15 MB15 iblock at_rejectcancel sbcw",
      onClick: this.handleCancel
    }, "Cancel"), _react.default.createElement("button", {
      className: "flexFull btn-filled-pri-large wfull radius2 pl8 pr8 at_rejectconfirm",
      disabled: this.props.loading,
      onClick: this.handleSubmit
    }, "Reject Quote"))));
  }

}, _class.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  rejectQuoteReasons: _propTypes.default.object.isRequired,
  loading: _propTypes.default.bool,
  rejectQuoteHandler: _propTypes.default.func.isRequired,
  closeModal: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func.isRequired
}, _class.defaultProps = {
  loading: false
}, _temp);
var _default = RejectQuotePopup;
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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9FdmVudFR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2N0YXMvUmVqZWN0UXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvcG9wdXBzL3JlamVjdFF1b3RlL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvcG9wdXBzL3JlamVjdFF1b3RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9wcmljZS9DdXRQcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvcHJpY2UvUHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL3ByaWNlL1ByaWNlU3VmZml4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9wcmljZS9RdW90ZVByaWNlLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImZyZWV6ZSIsIkJPT0tfTk9XIiwiUkVKRUNUX1FVT1RFIiwiUkVBQ1RJVkFURV9RVU9URSIsIlJFUVVFU1RfQ0FMTEJBQ0siLCJXQUlUX0ZPUl9JTlZPSUNFIiwiUEFZX05PVyIsIlJlamVjdFF1b3RlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNsb3NlUG9wdXAiLCJzZXRTdGF0ZSIsImNsb3NlTW9kYWwiLCJ0cmFja1NlZ21lbnRFdmVudCIsInRyYWNrU2VnbWVudCIsIk9SR0FOSVNNX0NMSUNLRUQiLCJxdW90ZUlkIiwic3RhdGUiLCJyZW5kZXIiLCJ0cmlwSWQiLCJpc1F1b3RlQ2FyZEN0YSIsInF1b3RlUmVqZWN0aW9uUmVhc29ucyIsImNhbGxiYWNrSGFuZGxlciIsImxvYWRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJSYWRpb0lucHV0IiwiZ2xhbW9yb3VzIiwiaW5wdXQiLCJjb2xvciIsImJvcmRlckNvbG9yIiwiZGlzcGxheSIsIkdSYWRpb0lucHV0VGV4dCIsIkdUZXh0QXJlYSIsInRleHRhcmVhIiwibWFyZ2luTGVmdCIsInJlc2l6ZSIsIndpZHRoIiwiR1JlamVjdE1vZGFsV3JhcHBlckRpdiIsImRpdiIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJSZWplY3RRdW90ZVBvcHVwIiwiUmVhY3QiLCJoYW5kbGVDYW5jZWwiLCJyZWFzb24iLCJyZWFzb25UZXh0Iiwic2hvd05vU2VsZWN0aW9uRXJyb3JNc2ciLCJyZWFzb25DaGFuZ2VkIiwiYmluZCIsInJlYXNvblRleHRVcGRhdGVkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ0YXJnZXQiLCJyZWplY3RRdW90ZUhhbmRsZXIiLCJRVU9URV9FVkVOVFNfRU5VTVMiLCJzZXRUaW1lb3V0IiwicmVqZWN0UXVvdGVSZWFzb25zIiwib3RoZXJJZCIsIm9wdGlvbnMiLCJrZXlzIiwiZmlsdGVyIiwicmVqZWN0aW9uSWQiLCJtYXAiLCJpbmRleCIsImlkIiwiQ3V0UHJpY2UiLCJwcmljZSIsImN1cnJlbmN5Iiwic3RyaW5nIiwicGVyUGVyc29uIiwiUHJpY2UiLCJQcmljZVN1ZmZpeCIsInN1ZmZpeCIsInJlbmRlck9yaWdpbmFsUHJpY2UiLCJsaW5lQnJlYWsiLCJyZW5kZXJEaXNjb3VudGVkUHJpY2UiLCJkaXNjb3VudCIsIlF1b3RlUHJpY2UiLCJzaG93T3JpZ2luYWxQcmljZSIsImhhc0Rpc2NvdW50QXBwbGllZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlQSxPQUFPQyxNQUFQLENBQWM7QUFDM0JDLFlBQVUsVUFEaUI7QUFFM0JDLGdCQUFjLGNBRmE7QUFHM0JDLG9CQUFrQixrQkFIUztBQUkzQkMsb0JB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RjtBQUFTQyxVQUFUO0FBQW1CRSxXQUFuQjtBQUE4Qk8sVUFBOUI7QUFBd0NFLG1CQUF4QztBQUEyREo7QUFBM0QsQ0FBRCxLQUE0RTtBQUU3RixRQUFNSyxxQkFBcUJILFdBQVcsQ0FBdEM7QUFFQSxTQUNFRyxxQkFDSSwwQ0FBTUQsb0JBQW9CTCxvQkFBb0JQLEtBQXBCLEVBQTJCQyxRQUEzQixFQUFxQ08sU0FBckMsQ0FBcEIsR0FBc0UsSUFBNUUsRUFDQ0Msc0JBQXNCVCxLQUF0QixFQUE2QlUsUUFBN0IsRUFBdUNULFFBQXZDLEVBQWlERSxTQUFqRCxFQUE0REssU0FBNUQsQ0FERCxDQURKLEdBR0ksMENBQUssNkJBQUMsY0FBRDtBQUFPLFdBQU9SLEtBQWQ7QUFBcUIsY0FBVUMsUUFBL0I7QUFBeUMsZUFBV0U7QUFBcEQsSUFBTCxFQUNBLDZCQUFDLG9CQUFEO0FBQWEsWUFBUUE7QUFBckIsSUFEQSxDQUpOO0FBUUQsQ0FaRDs7QUFjQVEsV0FBVzlELFNBQVgsR0FBdUI7QUFDckJtRCxTQUFPbEQsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREg7QUFFckJpRCxZQUFVbkQsbUJBQVVvRCxNQUFWLENBQWlCbEQsVUFGTjtBQUdyQm1ELGFBQVdyRCxtQkFBVW9ELE1BSEE7QUFJckJRLFlBQVU1RCxtQkFBVUMsTUFKQztBQUtyQjZELHFCQUFtQjlELG1CQUFVSyxJQUxSO0FBTXJCcUQsYUFBVzFELG1CQUFVSztBQU5BLENBQXZCO0FBU0F3RCxXQUFXdkQsWUFBWCxHQUEwQjtBQUN4QitDLGFBQVcsRUFEYTtBQUV4Qk8sWUFBVSxDQUZjO0FBR3hCRSxxQkFBbUIsSUFISztBQUl4QkosYUFBVztBQUphLENBQTFCO2VBT2VHLFUiLCJmaWxlIjoiUWRwfnF1b3RlLWFnZW50LWNhcmR+cXVvdGUtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IE9iamVjdC5mcmVlemUoe1xuICBCT09LX05PVzogJ0JPT0tfTk9XJyxcbiAgUkVKRUNUX1FVT1RFOiAnUkVKRUNUX1FVT1RFJyxcbiAgUkVBQ1RJVkFURV9RVU9URTogJ1JFQUNUSVZBVEVfUVVPVEUnLFxuICBSRVFVRVNUX0NBTExCQUNLOiAnUkVRVUVTVF9DQUxMQkFDSycsXG4gIFdBSVRfRk9SX0lOVk9JQ0U6ICdXQUlUX0ZPUl9JTlZPSUNFJyxcbiAgUEFZX05PVzogJ1BBWV9OT1cnLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgUmVqZWN0UXVvdGVQb3B1cCBmcm9tICcuLi9wb3B1cHMvcmVqZWN0UXVvdGUvaW5kZXgnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY2xhc3MgUmVqZWN0UXVvdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjbG9zZU1vZGFsOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZU1vZGFsOiB0cnVlIH0pO1xuICB9O1xuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKCkgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudChPUkdBTklTTV9DTElDS0VELCAnUXVvdGVzIHNlY3Rpb24nLCAnUmVqZWN0IHF1b3RlJywgJycsICcnLCB0aGlzLnByb3BzLnF1b3RlSWQsICdxdW90ZSBpZCcpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHF1b3RlSWQsIHRyaXBJZCwgaXNRdW90ZUNhcmRDdGEsIHF1b3RlUmVqZWN0aW9uUmVhc29ucywgY2FsbGJhY2tIYW5kbGVyLCB0cmFja1NlZ21lbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZmxleFwiPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpc1F1b3RlQ2FyZEN0YSA/ICdibG9jayBwMTUgZnc3IHRleHQtbGVmdCB3ZnVsbCBhdF9yZWplY3RRdW90ZScgOiAnd2Z1bGwgcDE1IGZ3NyBjdXJzb3JQIGF0X3JlamVjdFF1b3RlJ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50cmFja1NlZ21lbnRFdmVudH0+UmVqZWN0IFF1b3RlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgY3VzdG9tQ2xvc2VUcmlnZ2VyPXt0aGlzLnN0YXRlLmNsb3NlTW9kYWx9XG4gICAgICAgICAgaXNUcmlnZ2VyRnVsbFZpZXc9e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8UmVqZWN0UXVvdGVQb3B1cCByZWplY3RRdW90ZVJlYXNvbnM9e3F1b3RlUmVqZWN0aW9uUmVhc29uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlUG9wdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0UXVvdGVIYW5kbGVyPXtjYWxsYmFja0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpcElkPXt0cmlwSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVJZD17cXVvdGVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9IC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlamVjdFF1b3RlLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY2FsbGJhY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBxdW90ZVJlamVjdGlvblJlYXNvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaXNRdW90ZUNhcmRDdGE6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuUmVqZWN0UXVvdGUuZGVmYXVsdFByb3BzID0ge1xuICBpc1F1b3RlQ2FyZEN0YTogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWplY3RRdW90ZTtcbiIsImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgUmFkaW9JbnB1dCA9IGdsYW1vcm91cy5pbnB1dCh7XG4gICcmICsgbGFiZWwnOiB7XG4gICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICAnOmJlZm9yZScgOiB7XG4gICAgICBib3JkZXJDb2xvcjogJyMzZTNlM2UnXG4gICAgfVxuICB9LFxuICAnJjpjaGVja2VkICsgbGFiZWwgKyAuaW5wdXQtZHJvcGRvd24tYm94Jzoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgJyY6Y2hlY2tlZCArIGxhYmVsICsgLnNob3dUZXh0ICsgdGV4dGFyZWEnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdSYWRpb0lucHV0VGV4dCA9IGdsYW1vcm91cyhSYWRpb0lucHV0KSh7XG4gICcmOmNoZWNrZWQgKyBsYWJlbCArIHRleHRhcmVhJzoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBHVGV4dEFyZWEgPSBnbGFtb3JvdXMudGV4dGFyZWEoe1xuICBkaXNwbGF5OiAnbm9uZScsXG4gIG1hcmdpbkxlZnQ6ICczMHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnY2FsYygxMDAlIC0gMzBweCknXG59KTtcblxuZXhwb3J0IGNvbnN0IEdSZWplY3RNb2RhbFdyYXBwZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgcGFkZGluZ0JvdHRvbTogJzEwMHB4JyxcbiAgaGVpZ2h0OiAnY2FsYygxMDB2aCknLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR1JhZGlvSW5wdXRUZXh0LCBHVGV4dEFyZWEsIEdSZWplY3RNb2RhbFdyYXBwZXJEaXYgfSBmcm9tICcuL0cnO1xuaW1wb3J0IFFVT1RFX0VWRU5UU19FTlVNUyBmcm9tICdtb2R1bGVzL3F1b3RlL0V2ZW50VHlwZXMnO1xuaW1wb3J0IE1vZGFsSGVhZGVyQ3VzdG9tIGZyb20gJ21vZHVsZXMvc2hhcmVkL2hlYWRlcnMvTW9kYWxIZWFkZXJDdXN0b20nO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY2xhc3MgUmVqZWN0UXVvdGVQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJlamVjdFF1b3RlUmVhc29uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlamVjdFF1b3RlSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9hZGluZzogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIHJlYXNvblRleHQ6ICcnLFxuICAgICAgc2hvd05vU2VsZWN0aW9uRXJyb3JNc2c6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnJlYXNvbkNoYW5nZWQgPSB0aGlzLnJlYXNvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlYXNvblRleHRVcGRhdGVkID0gdGhpcy5yZWFzb25UZXh0VXBkYXRlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlYXNvbkNoYW5nZWQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlYXNvbjogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVhc29uVGV4dFVwZGF0ZWQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlYXNvblRleHQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudChPUkdBTklTTV9DTElDS0VELCAnUmVqZWN0IHF1b3RlIHBvcCB1cCcsICdDYW5jZWwnKTtcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVhc29uIHx8IHRoaXMuc3RhdGUucmVhc29uVGV4dCkge1xuICAgICAgdGhpcy5wcm9wcy5yZWplY3RRdW90ZUhhbmRsZXIoUVVPVEVfRVZFTlRTX0VOVU1TLlJFSkVDVF9RVU9URSwge1xuICAgICAgICB0cmlwSWQ6IHRoaXMucHJvcHMudHJpcElkLFxuICAgICAgICBxdW90ZUlkOiB0aGlzLnByb3BzLnF1b3RlSWQsXG4gICAgICAgIHJlYXNvbjogdGhpcy5zdGF0ZS5yZWFzb24sXG4gICAgICAgIHJlYXNvblRleHQ6IHRoaXMuc3RhdGUucmVhc29uVGV4dCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd05vU2VsZWN0aW9uRXJyb3JNc2c6IHRydWUgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dOb1NlbGVjdGlvbkVycm9yTXNnOiBmYWxzZSB9KTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlamVjdFF1b3RlUmVhc29ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvdGhlcklkID0gJ3JlamVjdC1xdW90ZS01JztcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmtleXMocmVqZWN0UXVvdGVSZWFzb25zKVxuICAgICAgLmZpbHRlcihyZWplY3Rpb25JZCA9PiAocmVqZWN0aW9uSWQgIT09ICc1JykpXG4gICAgICAubWFwKChyZWplY3Rpb25JZCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBgcmVqZWN0LXF1b3RlLSR7cmVqZWN0aW9uSWR9JHtpbmRleH1gO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICA8R1JhZGlvSW5wdXRUZXh0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LXJvdW5kXCJcbiAgICAgICAgICAgICAgbmFtZT1cInJlamVjdC1xdW90ZS1yYWRcIlxuICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgIHZhbHVlPXtyZWplY3Rpb25JZH1cbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWFzb24gPT09IHJlamVjdGlvbklkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZWFzb25DaGFuZ2VkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpYmxvY2sgd2Z1bGwgZjE0IHBmYzMgbWI4IG10OCBhdF9yZWplY3RyZWFzb25cIlxuICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2lkfT57cmVqZWN0UXVvdGVSZWFzb25zW3JlamVjdGlvbklkXX08L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHUmVqZWN0TW9kYWxXcmFwcGVyRGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxNb2RhbEhlYWRlckN1c3RvbSBoZWFkaW5nPVwiUmVqZWN0IFF1b3RlOlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHNiY3cgejIgcDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBpYmxvY2sgcDI0IHBiOFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IGZ3OSBwZmMzIG1iMCBhdF9yZWplY3RoZWFkZXJcIj5QbGVhc2UgbGV0IHVzIGtub3cgdGhlIHJlYXNvbiBmb3IgcmVqZWN0aW5nIHRoaXMgcXVvdGU8L3A+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Tm9TZWxlY3Rpb25FcnJvck1zZ1xuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgZnc3IG10OCBtYjAgYXRfcmVqZWN0ZXJyb3JcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+UGxlYXNlIHNlbGVjdCBhIHJlYXNvbi48L3A+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDI0IHB0OFwiPlxuICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICA8ZGl2IGtleT17b3RoZXJJZH0+XG4gICAgICAgICAgICAgIDxHUmFkaW9JbnB1dFRleHRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LXJvdW5kXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVqZWN0LXF1b3RlLXJhZFwiXG4gICAgICAgICAgICAgICAgaWQ9e290aGVySWR9XG4gICAgICAgICAgICAgICAgdmFsdWU9eyc1J31cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlYXNvbiA9PT0gJzUnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYXNvbkNoYW5nZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpYmxvY2sgd2Z1bGwgZjE0IHBmYzMgbWI4IG10OCBhdF9yZWplY3RyZWFzb25cIlxuICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17b3RoZXJJZH0+T3RoZXJzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPEdUZXh0QXJlYVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVhc29uIGZvciBRdW90ZSBSZWplY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0YXJlYSBwOCBtYjggYXRfb3RoZXJ0ZXh0Ym94XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWFzb25UZXh0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYXNvblRleHRVcGRhdGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBiMCBsMCBmbGV4IHdmdWxsIGJzNiB6MTBcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleEZ1bGwgbGluay1wcmkgcGZjMyBmdzcgd2Z1bGwgcmFkaXVzMiBwbDggcHI4IHB0MTUgcGIxNSBNQjE1IGlibG9jayBhdF9yZWplY3RjYW5jZWwgc2Jjd1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleEZ1bGwgYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGwgcmFkaXVzMiBwbDggcHI4IGF0X3JlamVjdGNvbmZpcm1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5sb2FkaW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIFJlamVjdCBRdW90ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HUmVqZWN0TW9kYWxXcmFwcGVyRGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVqZWN0UXVvdGVQb3B1cDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBwYXJzZVByaWNlIH0gZnJvbSBcInV0aWxzL3BhcnNlcnNcIjtcblxuY29uc3QgQ3V0UHJpY2UgPSAoeyBwcmljZSwgY3VycmVuY3kgfSkgPT4gKFxuICA8c3BhbiBjbGFzc05hbWU9XCJ0ZGwgZjEyXCI+e3BhcnNlUHJpY2UoeyBwcmljZSwgY3VycmVuY3kgfSl9PC9zcGFuPlxuKTtcblxuQ3V0UHJpY2UucHJvcFR5cGVzID0ge1xuICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuQ3V0UHJpY2UuZGVmYXVsdFByb3BzID0ge1xuICBwZXJQZXJzb246ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3V0UHJpY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgcGFyc2VQcmljZSB9IGZyb20gXCJ1dGlscy9wYXJzZXJzXCI7XG5cbmNvbnN0IFByaWNlID0gKHsgcHJpY2UsIGN1cnJlbmN5IH0pID0+IChcbiAgPHNwYW4gY2xhc3NOYW1lPVwic2ZjMyBmMTggZnc3IG0wIGZsZXhGdWxsIHRleHQtbGVmdCBhdF9wcmljZVwiPntwYXJzZVByaWNlKHsgcHJpY2UsIGN1cnJlbmN5IH0pfTwvc3Bhbj5cbik7XG5cblByaWNlLnByb3BUeXBlcyA9IHtcbiAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cblByaWNlLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBwYXJzZVByaWNlIH0gZnJvbSBcInV0aWxzL3BhcnNlcnNcIjtcblxuY29uc3QgUHJpY2VTdWZmaXggPSAoeyBzdWZmaXggfSkgPT4gKFxuICA8c3BhbiBjbGFzc05hbWU9XCJmMTIgcGZjNCBmdzRcIj5cbiAgICB7XG4gICAgICAoc3VmZml4ID09PSAncGVyIHBlcnNvbicpID8gJyAvcGVyc29uJyA6ICcgdG90YWwnXG4gICAgfVxuICA8L3NwYW4+XG4pO1xuXG5QcmljZVN1ZmZpeC5wcm9wVHlwZXMgPSB7XG4gIHN1ZmZpeDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblByaWNlU3VmZml4LmRlZmF1bHRQcm9wcyA9IHtcbiAgc3VmZml4OiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlU3VmZml4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IGdldERpc2NvdW50ZWRQcmljZSB9IGZyb20gJ2hlbHBlcnMvcGFyc2Vycyc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9QcmljZSc7XG5pbXBvcnQgQ3V0UHJpY2UgZnJvbSAnLi9DdXRQcmljZSc7XG5pbXBvcnQgUHJpY2VTdWZmaXggZnJvbSAnLi9QcmljZVN1ZmZpeCc7XG5cbmNvbnN0IHJlbmRlck9yaWdpbmFsUHJpY2UgPSAocHJpY2UsIGN1cnJlbmN5LCBsaW5lQnJlYWspID0+IDxzcGFuIGNsYXNzTmFtZT17YCR7bGluZUJyZWFrID8gJ2Jsb2NrJyA6ICcnfWB9PjxDdXRQcmljZVxuICBwcmljZT17cHJpY2V9IGN1cnJlbmN5PXtjdXJyZW5jeX0gLz48L3NwYW4+O1xuXG5jb25zdCByZW5kZXJEaXNjb3VudGVkUHJpY2UgPSAocHJpY2UsIGRpc2NvdW50LCBjdXJyZW5jeSwgcGVyUGVyc29uLCBsaW5lQnJlYWspID0+IHtcbiAgcmV0dXJuIDxzcGFuPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17YG1yNCAke2xpbmVCcmVhayA/ICcnIDogJ21sNCd9YH0+XG4gICAgICA8UHJpY2UgcHJpY2U9e2dldERpc2NvdW50ZWRQcmljZShwcmljZSwgZGlzY291bnQpfSBjdXJyZW5jeT17Y3VycmVuY3l9IHBlclBlcnNvbj17cGVyUGVyc29ufSAvPlxuICAgIDwvc3Bhbj5cbiAgICA8UHJpY2VTdWZmaXggc3VmZml4PXtwZXJQZXJzb259IC8+XG4gIDwvc3Bhbj47XG59O1xuXG5jb25zdCBRdW90ZVByaWNlID0gKHsgcHJpY2UsIGN1cnJlbmN5LCBwZXJQZXJzb24sIGRpc2NvdW50LCBzaG93T3JpZ2luYWxQcmljZSwgbGluZUJyZWFrIH0pID0+IHtcblxuICBjb25zdCBoYXNEaXNjb3VudEFwcGxpZWQgPSBkaXNjb3VudCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICBoYXNEaXNjb3VudEFwcGxpZWRcbiAgICAgID8gPGRpdj57c2hvd09yaWdpbmFsUHJpY2UgPyByZW5kZXJPcmlnaW5hbFByaWNlKHByaWNlLCBjdXJyZW5jeSwgbGluZUJyZWFrKSA6IG51bGx9XG4gICAgICAgIHtyZW5kZXJEaXNjb3VudGVkUHJpY2UocHJpY2UsIGRpc2NvdW50LCBjdXJyZW5jeSwgcGVyUGVyc29uLCBsaW5lQnJlYWspfTwvZGl2PlxuICAgICAgOiA8ZGl2PjxQcmljZSBwcmljZT17cHJpY2V9IGN1cnJlbmN5PXtjdXJyZW5jeX0gcGVyUGVyc29uPXtwZXJQZXJzb259IC8+XG4gICAgICAgIDxQcmljZVN1ZmZpeCBzdWZmaXg9e3BlclBlcnNvbn0gLz5cbiAgICAgIDwvZGl2PlxuICApO1xufTtcblxuUXVvdGVQcmljZS5wcm9wVHlwZXMgPSB7XG4gIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBlclBlcnNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNob3dPcmlnaW5hbFByaWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGluZUJyZWFrOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblF1b3RlUHJpY2UuZGVmYXVsdFByb3BzID0ge1xuICBwZXJQZXJzb246ICcnLFxuICBkaXNjb3VudDogMCxcbiAgc2hvd09yaWdpbmFsUHJpY2U6IHRydWUsXG4gIGxpbmVCcmVhazogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlUHJpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9