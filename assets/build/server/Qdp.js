require("source-map-support").install();
exports.ids = ["Qdp"];
exports.modules = {

/***/ "./app-v2/modules/quote/Header.js":
/*!****************************************!*\
  !*** ./app-v2/modules/quote/Header.js ***!
  \****************************************/
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _notifications = _interopRequireDefault(__webpack_require__(/*! modules/notifications */ "./app-v2/modules/notifications/index.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _SocialShare = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/SocialShare */ "./app-v2/modules/quote/ctas/SocialShare.js"));

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Header = (_temp2 = _class = class Header extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.trackSegmentEvent = (event, cta, object = '') => {
      this.props.trackSegment({
        event,
        section: 'Sticky Bar',
        object: object,
        cta
      });
    }, _temp;
  }

  render() {
    const {
      currentQuoteId,
      userDetails
    } = this.props;
    const NotificationContainer = _notifications.default.container;
    const shareLink = (0, _parsers.formatURL)({
      path: (0, _urlHelpers.downloadQuoteUrl)(currentQuoteId)
    });
    return _react.default.createElement("div", {
      className: "pbc1 p8 flex"
    }, _react.default.createElement("a", {
      href: (0, _urlHelpers.rtripPath)(this.props.tripId),
      className: "mr8 input-24 p4 iblock"
    }, _react.default.createElement(_Icon.Back2IconWhite, null)), _react.default.createElement("p", {
      className: "f16 flex alignCenter fw7 sfcw flexFull ellipsis"
    }, "Quote Details"), _react.default.createElement(_SocialShare.default, {
      sharedBy: (0, _utils.getFullName)(userDetails.first_name, userDetails.last_name),
      shareLink: shareLink,
      key: "cta-social-share",
      trackSegment: this.trackSegmentEvent
    }), _react.default.createElement(NotificationContainer, null));
  }

}, _class.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  trackSegment: _propTypes.default.func,
  currentQuoteId: _propTypes.default.number.isRequired,
  userDetails: _propTypes.default.object.isRequired
}, _class.defaultProps = {
  trackSegment: () => {}
}, _temp2);
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/QuoteDetailHeader.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/quote/QuoteDetailHeader.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _QuotePrice = _interopRequireDefault(__webpack_require__(/*! ./shared/price/QuotePrice */ "./app-v2/modules/quote/shared/price/QuotePrice.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _QuoteListModal = _interopRequireDefault(__webpack_require__(/*! ./QuoteListModal */ "./app-v2/modules/quote/QuoteListModal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GAgentSelectionDiv = _glamorous.default.div({
  border: '1px solid #d4d4d4'
});

const QuoteDetailHeader = ({
  quotesList,
  currentQuoteId,
  tripId,
  location,
  trackSegment
}) => {
  const trackSegmentEvent = (event, section, object, cta) => {
    trackSegment({
      event,
      section,
      object,
      cta
    });
  };

  const currentQuote = quotesList.filter(q => q.id === currentQuoteId)[0];

  const renderCurrentQuote = () => _react.default.createElement("div", {
    className: "flexFull at_quoteSwitch_actionBtn"
  }, _react.default.createElement(GAgentSelectionDiv, {
    className: "pr8 pt8 pl8 pb8 flex flexFull alignCenter"
  }, _react.default.createElement("div", {
    className: "flexFull"
  }, _react.default.createElement("p", {
    className: "pfc3 f12"
  }, currentQuote.agent.name), _react.default.createElement(_QuotePrice.default, _extends({}, currentQuote.priceInformation, currentQuote.discountInformation, {
    showOriginalPrice: false
  }))), _react.default.createElement("span", {
    className: "input-24 iblock p8 flex alignCenter justifyCenter"
  }, _react.default.createElement(_Icon.DownArrow, null))));

  return _react.default.createElement("div", {
    className: "sbcw pb8"
  }, _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "col-xs-12"
  }, _react.default.createElement("p", {
    className: "pfc3 f14 fw9 pt15 pb15 at_quoteReceivedMsg"
  }, "You have received ", quotesList.length, " Quotes for ", currentQuote.destination))), _react.default.createElement("div", {
    className: "flex alignCenter pl8 pr8"
  }, _react.default.createElement("div", {
    className: "flexFull"
  }, _react.default.createElement(_GenericModal.default, {
    trigger: renderCurrentQuote(),
    hasNoClose: true
  }, _react.default.createElement(_QuoteListModal.default, {
    quotesList: quotesList,
    currentQuoteId: currentQuoteId,
    tripId: tripId,
    location: location
  }))), _react.default.createElement("div", {
    className: "ml8 compare__btn"
  }, _react.default.createElement("a", {
    className: `btn-sec-load pt8 pl15 pb8 pr15 iblock flex alignCenter at_compareBtn ${quotesList.length > 1 ? '' : 'disabled'}`,
    onClick: () => trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Compare', '', 'Compare Quotes'),
    href: (0, _urlHelpers.compareQuotesPath)(tripId)
  }, _react.default.createElement("span", {
    className: "iblock input-24 mr5"
  }, _react.default.createElement(_Icon.CompareIcon, null)), _react.default.createElement("span", null, "Compare")))));
};

QuoteDetailHeader.propTypes = {
  quotesList: _propTypes.default.array.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired,
  location: _propTypes.default.object.isRequired,
  trackSegment: _propTypes.default.func
};
QuoteDetailHeader.defaultProps = {
  trackSegment: () => {}
};
var _default = QuoteDetailHeader;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/QuoteListModal.js":
/*!************************************************!*\
  !*** ./app-v2/modules/quote/QuoteListModal.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _QuotePrice = _interopRequireDefault(__webpack_require__(/*! ./shared/price/QuotePrice */ "./app-v2/modules/quote/shared/price/QuotePrice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GQuoteListDiv = _glamorous.default.div({
  '& a': {
    marginBottom: '15px',
    '&:last-child': {
      marginBottom: '0',
      '& label': {
        border: '0'
      }
    }
  },
  '& .checkbox-round +  label': {
    border: '1px solid #d4d4d4',
    '&:before': {
      top: '50%',
      left: '15px',
      transform: 'translateY(-50%)'
    },
    '&:after': {
      left: '19px'
    }
  }
});

const QuoteListModal = ({
  quotesList,
  currentQuoteId,
  tripId,
  location
}) => {
  return _react.default.createElement("div", {
    className: "sbcw radius2"
  }, _react.default.createElement(GQuoteListDiv, null, quotesList.map((quote, index) => _react.default.createElement(_reactRouter.Link, {
    className: "block wfull m0 at_quoteSwitchLink",
    key: index,
    to: `${(0, _urlHelpers.quoteDetailPath)(tripId, quote.id)}${location.search}`
  }, _react.default.createElement("input", {
    name: "destinationdata-radio",
    defaultChecked: quote.id === currentQuoteId,
    type: "radio",
    id: "Highlights",
    className: "nblock checkbox-round checkbox-round--center"
  }), _react.default.createElement("label", {
    htmlFor: "Highlights",
    className: "block p15 bb pl48"
  }, _react.default.createElement("div", null, _react.default.createElement("p", {
    className: "pfc3 f12"
  }, quote.agent.name), _react.default.createElement(_QuotePrice.default, _extends({}, quote.priceInformation, quote.discountInformation, {
    showOriginalPrice: false
  }))))))));
};

QuoteListModal.propTypes = {
  quotesList: _propTypes.default.array.isRequired,
  tripId: _propTypes.default.number.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  location: _propTypes.default.object.isRequired,
  trackSegment: _propTypes.default.func
};
QuoteListModal.defaultProps = {
  trackSegment: () => {}
};
var _default = QuoteListModal;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/QuoteTimer/QuoteTimer.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/quote/QuoteTimer/QuoteTimer.js ***!
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

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _parsers = __webpack_require__(/*! app/utils/parsers */ "./app/utils/parsers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _quoteTimerCm = _interopRequireDefault(__webpack_require__(/*! ./quoteTimer.cm.scss */ "./app-v2/modules/quote/QuoteTimer/quoteTimer.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TIME_INTERVAL = 1000;
let QuoteTimer = class QuoteTimer extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      totalTimeInSeconds: this.props.totalTimeInSeconds
    }, this.tick = () => {
      const {
        totalTimeInSeconds
      } = this.state;

      if (totalTimeInSeconds <= 0) {
        clearInterval(this.timer);
        return;
      }

      return this.setState({
        totalTimeInSeconds: totalTimeInSeconds - 1
      });
    }, this.renderTimeBlock = (remainingTime, timeUnit) => {
      const rt = Math.floor(remainingTime);
      return _react.default.createElement("div", {
        className: "flexFull text-center pr15 pl15 "
      }, _react.default.createElement("p", {
        className: "f16 fw9"
      }, rt < 10 ? `0${rt}` : rt), _react.default.createElement("span", {
        className: "f10"
      }, (0, _parsers.capitalizeFirstLetter)(timeUnit)));
    }, _temp;
  }

  componentDidMount() {
    const {
      trackSegment,
      totalTimeInSeconds
    } = this.props;
    const timeObject = (0, _DateTime.secondsToDhms)(totalTimeInSeconds);
    let cta;
    Object.keys(timeObject).map(key => {
      let rt = Math.floor(timeObject[key]);
      rt = rt < 10 ? `0${rt}` : rt;
      cta = cta ? `${cta}_${rt}` : `Timer_${rt}`;
    });
    trackSegment({
      event: _segmentEvents.ORGANISM_VIEWED,
      section: 'Urgency Timer',
      cta
    });
    this.timer = setInterval(() => this.tick(), TIME_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      totalTimeInSeconds
    } = this.state;

    if (totalTimeInSeconds < 0) {
      return null;
    }

    const timeObject = (0, _DateTime.secondsToDhms)(totalTimeInSeconds);
    return _react.default.createElement("div", {
      className: "at_QuoteTimerBanner relative pb24 sbcw"
    }, _react.default.createElement("div", {
      className: `pt15 pb32 ${_quoteTimerCm.default.timerBanner}`
    }, _react.default.createElement("h4", {
      className: "text-center f14 fw4 pl24 pr24 mb15"
    }, "Hurry! Book your quote before prices increase.", _react.default.createElement("br", null), "Quote prices expire in:")), _react.default.createElement("div", {
      className: ` ${_quoteTimerCm.default.countDown} at_QuoteTimerSection radius6 flex sbcw pt8 pb8 pl15 pr15 absolute l0 r0 b0`
    }, Object.keys(timeObject).map(key => this.renderTimeBlock(timeObject[key], key))));
  }

};
QuoteTimer.propTypes = {
  totalTimeInSeconds: _propTypes.default.number.isRequired,
  trackSegment: _propTypes.default.func.isRequired
};
QuoteTimer.defaultProps = {
  totalTimeInSeconds: -1
};
var _default = QuoteTimer;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/QuoteTimer/quoteTimer.cm.scss":
/*!************************************************************!*\
  !*** ./app-v2/modules/quote/QuoteTimer/quoteTimer.cm.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"timerBanner": "_1cFW0XpWC9q2m6-4zlmgSU",
	"countDown": "_2IOVf2qe8BfBBIX-MuNzs"
};

/***/ }),

/***/ "./app-v2/modules/quote/ctas/ExplainTheQuote.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/ctas/ExplainTheQuote.js ***!
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

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _chat = _interopRequireDefault(__webpack_require__(/*! modules/chat */ "./app-v2/modules/chat/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ExplainTheQuote = class ExplainTheQuote extends _react.Component {
  render() {
    const {
      isQuoteCardCta,
      handleChatClick
    } = this.props;
    const ChatContainer = _chat.default.container;
    return _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("button", {
        className: "wfull btn-filled-pri-large ripple pl5 pr5 at_explainTheQuote",
        onClick: handleChatClick
      }, "Explain the Quote"),
      fullView: true,
      hasCustomClose: true,
      isWhiteIcon: true
    }, _react.default.createElement(ChatContainer, {
      explainTheQuote: true
    })));
  }

};
ExplainTheQuote.propTypes = {
  isQuoteCardCta: _propTypes.default.bool,
  handleChatClick: _propTypes.default.func
};
ExplainTheQuote.defaultProps = {
  isQuoteCardCta: false,
  handleChatClick: () => {}
};
var _default = ExplainTheQuote;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/footer/QuoteStickyFooter.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/quote/footer/QuoteStickyFooter.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _CancelBooking = _interopRequireDefault(__webpack_require__(/*! modules/trip/ctas/CancelBooking */ "./app-v2/modules/trip/ctas/CancelBooking.js"));

var _SwitchQuote = _interopRequireDefault(__webpack_require__(/*! ../ctas/SwitchQuote */ "./app-v2/modules/quote/ctas/SwitchQuote.js"));

var _ExplainTheQuote = _interopRequireDefault(__webpack_require__(/*! ../ctas/ExplainTheQuote */ "./app-v2/modules/quote/ctas/ExplainTheQuote.js"));

var _ViewInvoiceAndPay = _interopRequireDefault(__webpack_require__(/*! ../ctas/ViewInvoiceAndPay */ "./app-v2/modules/quote/ctas/ViewInvoiceAndPay.js"));

var _RejectQuote = _interopRequireDefault(__webpack_require__(/*! ../ctas/RejectQuote */ "./app-v2/modules/quote/ctas/RejectQuote.js"));

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

var _ChildEventsType = _interopRequireDefault(__webpack_require__(/*! modules/trip/ChildEventsType */ "./app-v2/modules/trip/ChildEventsType.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../popups/bookNow/index */ "./app-v2/modules/quote/popups/bookNow/index.js"));

var _rosterTypes = __webpack_require__(/*! constants/rosterTypes */ "./app/constants/rosterTypes.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

var _pdmHelpers = __webpack_require__(/*! helpers/pdmHelpers */ "./app/helpers/pdmHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GFooterDiv = _glamorous.default.div({
  minHeight: '48px',
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',
  justifyContent: 'space-between',
  zIndex: '9'
});

let QuoteStickyFooter = class QuoteStickyFooter extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, cta, object = '') => {
      this.props.trackSegment({
        event,
        section: 'Bottom Sticky ',
        object: object,
        cta
      });
    };

    this.callbackHandler = (type, data = {}) => {
      data.tripId = this.props.tripId;
      data.quoteId = this.props.quoteId;

      switch (type) {
        case _ChildEventsType.default.CANCEL_TRIP:
          this.props.cancelBooking(data);
          break;

        case _EventTypes.default.PAY_NOW:
          this.openBookNowPopup();
          this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'View Invoice & Pay');
          break;

        case _EventTypes.default.REJECT_QUOTE:
          this.props.rejectQuote(data);
          this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Reject Quote');
          break;
      }
    };

    this.openBookNowPopup = () => {
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

    this.handleChatClick = () => {
      const {
        setPdmCategory,
        showHidePdmView
      } = this.props;
      setPdmCategory(_pdmHelpers.PDM_CATEGORY_EXPLAINQUOTE);
      showHidePdmView(true);
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Explain the Quote');
    };

    this.state = {
      openModal: false,
      closeModal: true
    };
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.rejectQuoteSuccess && nextProps.rejectQuoteSuccess) {
      this.props.showRoster({
        type: _rosterTypes.INFO_ROSTER,
        message: 'Quote Has Been Rejected'
      });
    } else if (!this.props.reactivateQuoteSuccess && nextProps.reactivateQuoteSuccess) {
      this.props.showRoster({
        type: _rosterTypes.INFO_ROSTER,
        message: 'Quote Reactivated Successfully!'
      });
    }
  }

  render() {
    const ctas = [];
    const {
      tripId,
      quoteId,
      quoteStatus,
      currentQuote,
      convertedQuote,
      userDetails
    } = this.props;
    const shareLink = (0, _parsers.formatURL)({
      path: (0, _urlHelpers.downloadQuoteUrl)(quoteId)
    });

    if (quoteStatus.isRejected) {
      ctas.push(_react.default.createElement(_ExplainTheQuote.default, {
        handleChatClick: this.handleChatClick,
        key: "explain-the-quote"
      }));
    } else if (quoteStatus.isRequestCancelled) {
      ctas.push(_react.default.createElement(_ExplainTheQuote.default, {
        handleChatClick: this.handleChatClick,
        key: "explain-the-quote"
      }));
    } else if (quoteStatus.isCancelled) {
      if (convertedQuote.id) {
        ctas.push(_react.default.createElement(_SwitchQuote.default, {
          tripId: tripId,
          quoteId: convertedQuote.id,
          key: "switch_quote"
        }));
      }
    } else if (quoteStatus.isConverted) {
      if (currentQuote.installmentInfo.isAllPaymentReceived) {
        if (currentQuote.invoiceShowUrl) {
          ctas.push(_react.default.createElement(_ViewInvoiceAndPay.default, {
            invoiceUrl: currentQuote.invoiceShowUrl,
            ctaText: "View Invoice",
            key: "cta-view-invoice"
          }));
        }
      } else {
        ctas.push(_react.default.createElement(_CancelBooking.default, {
          callbackHandler: this.callbackHandler,
          tripId: tripId,
          key: "cta-cancel-booking"
        }));
        ctas.push(_react.default.createElement(_ViewInvoiceAndPay.default, {
          invoiceUrl: currentQuote.invoiceShowUrl,
          key: "cta-view-invoice"
        }));
      }
    } else if (quoteStatus.isInvoiced) {
      ctas.push(_react.default.createElement(_RejectQuote.default, {
        quoteRejectionReasons: this.props.quoteRejectionReasons,
        callbackHandler: this.callbackHandler,
        tripId: tripId,
        quoteId: quoteId,
        key: "cta-reject-quote"
      }));
      ctas.push(_react.default.createElement(_ViewInvoiceAndPay.default, {
        invoiceUrl: currentQuote.invoiceShowUrl,
        key: "cta-view-invoice"
      }));
    } else {
      ctas.push(_react.default.createElement(_ExplainTheQuote.default, {
        handleChatClick: this.handleChatClick,
        key: "explain-the-quote"
      }));
    }

    if (!ctas.length) {
      return null;
    }

    return _react.default.createElement("div", null, _react.default.createElement(GFooterDiv, {
      className: "flex sbcw p8 bs6 at_quoteFooterSection"
    }, ctas, _react.default.createElement(_GenericModal.default, {
      trigger: null,
      fullView: true,
      isOpen: this.state.openModal,
      hasCustomClose: true,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.closePopup
    }, _react.default.createElement(_index.default, {
      opsDetail: this.props.currentQuote.opDetails,
      closeModal: this.closePopup
    }))));
  }

};
QuoteStickyFooter.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  quoteStatus: _propTypes.default.shape({
    isRejected: _propTypes.default.bool,
    isInvoiced: _propTypes.default.bool,
    isInvoiceRequested: _propTypes.default.bool,
    isCancelled: _propTypes.default.bool,
    isConverted: _propTypes.default.bool,
    isRequestCancelled: _propTypes.default.bool
  }).isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  convertedQuote: _propTypes.default.object,
  quoteRejectionReasons: _propTypes.default.object.isRequired,
  userDetails: _propTypes.default.object.isRequired,
  bookNow: _propTypes.default.func.isRequired,
  rejectQuote: _propTypes.default.func.isRequired,
  reactivateQuote: _propTypes.default.func.isRequired,
  reactivateBooking: _propTypes.default.func.isRequired,
  cancelBooking: _propTypes.default.func.isRequired,
  rejectQuoteSuccess: _propTypes.default.bool.isRequired,
  reactivateQuoteSuccess: _propTypes.default.bool.isRequired,
  trackSegment: _propTypes.default.func,
  showRoster: _propTypes.default.func,
  setPdmCategory: _propTypes.default.func.isRequired,
  showHidePdmView: _propTypes.default.func.isRequired
};
QuoteStickyFooter.defaultProps = {
  convertedQuote: {},
  trackSegment: () => {},
  showRoster: () => {}
};
var _default = QuoteStickyFooter;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/footer/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/quote/footer/index.js ***!
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

var _action = __webpack_require__(/*! modules/pdm/action */ "./app-v2/modules/pdm/action.js");

var _quoteList = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/reducers/quoteActivities */ "./app-v2/modules/quote/reducers/quoteActivities.js");

var _constants = __webpack_require__(/*! modules/quote/reducers/constants */ "./app-v2/modules/quote/reducers/constants.js");

var _auth = __webpack_require__(/*! reducers/auth */ "./app/reducers/auth.js");

var _quoteActivities2 = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _tripActivities = __webpack_require__(/*! modules/trip/actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

var _action2 = __webpack_require__(/*! modules/roster/action */ "./app-v2/modules/roster/action.js");

var _QuoteStickyFooter = _interopRequireDefault(__webpack_require__(/*! ./QuoteStickyFooter */ "./app-v2/modules/quote/footer/QuoteStickyFooter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const currentQuote = (0, _quoteList.getCurrentQuote)(state);
  return _objectSpread({
    tripId: (0, _quoteActivities.getTripId)(state),
    quoteId: currentQuote.id,
    currentQuote: currentQuote,
    convertedQuote: (0, _quoteList.getConvertedQuote)(state),
    quoteStatus: (0, _quoteList.getCurrentQuoteStatuses)(currentQuote),
    quoteRejectionReasons: (0, _constants.getQuoteRejectionReasons)(state),
    userDetails: (0, _auth.getUserDetails)(state)
  }, (0, _quoteList.quoteCtasStatus)(state));
}, {
  bookNow: _quoteActivities2.bookNow,
  rejectQuote: _quoteActivities2.rejectQuote,
  reactivateQuote: _quoteActivities2.reactivateQuote,
  reactivateBooking: _tripActivities.reactivateBooking,
  cancelBooking: _tripActivities.cancelBooking,
  showRoster: _action2.showRoster,
  setPdmCategory: _action.setPdmCategory,
  showHidePdmView: _action.showHidePdmView
})(_QuoteStickyFooter.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/ChatIcon.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/quote/shared/ChatIcon.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _chat = _interopRequireDefault(__webpack_require__(/*! modules/chat */ "./app-v2/modules/chat/index.js"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GChatSpan = _glamorous.default.span({
  width: '56px',
  height: '56px',
  bottom: '70px'
});

let ChatIcon = (_temp = _class = class ChatIcon extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ChatContainer = _chat.default.container;
    return _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement(GChatSpan, {
        className: "fixed-menu-button-icon-container radius100 relative z15 fixed pbc1 r15 at_chatTrigger"
      }, _react.default.createElement(_Icon.ChatIconWhite, null)),
      fullView: true,
      hasCustomClose: true,
      isWhiteIcon: true,
      customClass: "chatBotModal"
    }, _react.default.createElement(ChatContainer, null));
  }

}, _class.propTypes = {
  handleChatClick: _propTypes.default.func
}, _class.defaultProps = {
  handleChatClick: () => {}
}, _temp);
var _default = ChatIcon;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/qdp/Layout.js":
/*!**************************************!*\
  !*** ./app-v2/screens/qdp/Layout.js ***!
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

var _quoteList = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _Header = _interopRequireDefault(__webpack_require__(/*! modules/quote/Header */ "./app-v2/modules/quote/Header.js"));

var _QuoteDetailHeader = _interopRequireDefault(__webpack_require__(/*! modules/quote/QuoteDetailHeader */ "./app-v2/modules/quote/QuoteDetailHeader.js"));

var _QuoteTimer = _interopRequireDefault(__webpack_require__(/*! modules/quote/QuoteTimer/QuoteTimer */ "./app-v2/modules/quote/QuoteTimer/QuoteTimer.js"));

var _footer = _interopRequireDefault(__webpack_require__(/*! modules/quote/footer */ "./app-v2/modules/quote/footer/index.js"));

var _roster = _interopRequireDefault(__webpack_require__(/*! modules/roster */ "./app-v2/modules/roster/index.js"));

var _ChatIcon = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/ChatIcon */ "./app-v2/modules/quote/shared/ChatIcon.js"));

var _ThingsToCheck = _interopRequireDefault(__webpack_require__(/*! ./thingsToCheck/ThingsToCheck */ "./app-v2/screens/qdp/thingsToCheck/ThingsToCheck.js"));

var _GrowingMarket = _interopRequireDefault(__webpack_require__(/*! ./growingMarket/GrowingMarket */ "./app-v2/screens/qdp/growingMarket/GrowingMarket.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Layout = class Layout extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (data = {}) => {
      const {
        tripId,
        currentQuote,
        currentQuoteId
      } = this.props;

      if (!currentQuote) {
        return;
      }

      (0, _segmentEvents.trackSegment)({
        event: data.event,
        category: data.category || 'QDP',
        section: data.section || '',
        object: data.object || `Quote/${currentQuoteId}`,
        cta: data.cta,
        trip_id: tripId || (getCookie(TRIP_ID_COOKIE_KEY), 10) || 0,
        quote_id: currentQuoteId,
        invoice_id: currentQuote.invoiceDetails.id || 0,
        destination_id: currentQuote.destinationsList.length ? currentQuote.destinationsList[0].id : 0,
        agent_id: currentQuote.agent.id || 0,
        trip_status: currentQuote.tripStatus || '',
        quote_status: currentQuote.status || '',
        // no_of_installments: currentQuote.installmentInfo && currentQuote.installmentInfo.installmentsReceived,
        // invoice_amount: currentQuote.invoiceDetails && currentQuote.invoiceDetails.price,
        // next_installment: currentQuote.installmentInfo && currentQuote.installmentInfo.nextScheduledDate,
        // invoice_curr: currentQuote.pricingInfo && currentQuote.pricingInfo.currency,
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

    this.isEventTracked = {};
  }

  componentDidMount() {
    this.props.layout.components.map(component => {
      this.isEventTracked[component.name] = false;
    });
  }

  UNSAFE_componentWillReceiveProps(props, nextProps) {
    if (props.currentQuoteId !== nextProps.currentQuoteId) {
      this.isEventTracked = {};
    }
  }

  render() {
    const {
      currentQuoteId,
      quotes,
      userDetails,
      quoteTimeRemaining
    } = this.props;
    const QuoteStickyFooterContainer = _footer.default.container;
    const quotesList = (0, _quoteList.getQuotesList)(quotes);
    const currentQuote = quotes[currentQuoteId];
    const destination = (0, _quoteList.getDestination)(currentQuote);
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("meta", {
      name: "page_fullname",
      content: "Quote Detail"
    }), _react.default.createElement("meta", {
      name: "page_name",
      content: "Quote Detail"
    }), _react.default.createElement("meta", {
      name: "name",
      content: "Quote Detail"
    }), _react.default.createElement("meta", {
      name: "destination",
      content: destination
    }), _react.default.createElement("meta", {
      name: "trip_status",
      content: currentQuote.tripStatus
    }), _react.default.createElement("meta", {
      name: "quote_status",
      content: currentQuote.status
    })), _react.default.createElement(_roster.default, {
      timeout: 3000
    }), _react.default.createElement("div", {
      className: "clearfix contentBackground sbc5"
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row pb48"
    }, _react.default.createElement(_Header.default, {
      tripId: this.props.tripId,
      currentQuoteId: currentQuoteId,
      userDetails: userDetails,
      trackSegment: data => this.trackSegmentEvent(data)
    }), quoteTimeRemaining > 0 ? _react.default.createElement(_QuoteTimer.default, {
      totalTimeInSeconds: quoteTimeRemaining,
      trackSegment: data => this.trackSegmentEvent(data)
    }) : null, _react.default.createElement(_QuoteDetailHeader.default, {
      quotesList: quotesList,
      currentQuoteId: this.props.currentQuoteId,
      tripId: this.props.tripId,
      location: this.props.location
    }), this.props.layout.components.map((component, $index) => {
      const ComponentsInstance = _common.default[component.name];
      return _react.default.createElement(_reactVisibilitySensor.default, {
        key: $index,
        onChange: isVisible => this.onSensorChange(isVisible, component),
        partialVisibility: "bottom",
        delayedCall: true
      }, _react.default.createElement(ComponentsInstance, {
        config: component,
        destination: destination.split(',')[0],
        trackSegment: data => this.trackSegmentEvent(data)
      }));
    }), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12"
    }, _react.default.createElement("p", {
      className: "fw9 pfc4 text-center p24"
    }, "End of Quote"))), _react.default.createElement(_ThingsToCheck.default, null), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12"
    }, _react.default.createElement("p", {
      className: "sfc8 pb24 pt24 pl15 pr15 "
    }, "We, at Travel Triangle make sure that the you enjoy the inclusions promised by our agents."))), _react.default.createElement(_GrowingMarket.default, null), _react.default.createElement(_ChatIcon.default, null), _react.default.createElement(QuoteStickyFooterContainer, {
      trackSegment: data => this.trackSegmentEvent(data)
    })))));
  }

};
Layout.propTypes = {
  layout: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  quotes: _propTypes.default.object.isRequired,
  quoteTimeRemaining: _propTypes.default.number,
  currentQuote: _propTypes.default.object.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired,
  userDetails: _propTypes.default.object.isRequired
};
var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/qdp/QdpAsync.js":
/*!****************************************!*\
  !*** ./app-v2/screens/qdp/QdpAsync.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/qdp/Layout.js"));

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let QdpAsync = (_temp = _class = class QdpAsync extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    if (!props.quotes.hasOwnProperty(props.currentQuoteId)) {
      throw new Error('404');
    }
  }

  componentDidMount() {
    this.updateQuoteStatus(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.currentQuoteId !== nextProps.currentQuoteId) {
      this.updateQuoteStatus(nextProps);
    }
  }

  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

}, _initialiseProps = function () {
  this.updateQuoteStatus = props => {
    const source = props.location.query.from_tt_mailer || '0';
    props.updateQuoteStats({
      tripId: props.tripId,
      quoteId: props.currentQuoteId,
      source
    });
  };
}, _temp);
exports.default = QdpAsync;
QdpAsync.propTypes = {
  layout: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  quotes: _propTypes.default.object.isRequired,
  quoteTimeRemaining: _propTypes.default.number.isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired,
  updateQuoteStats: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired
};

/***/ }),

/***/ "./app-v2/screens/qdp/growingMarket/GrowingMarket.js":
/*!***********************************************************!*\
  !*** ./app-v2/screens/qdp/growingMarket/GrowingMarket.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _growingMarketCm = _interopRequireDefault(__webpack_require__(/*! ./growingMarket.cm.scss */ "./app-v2/screens/qdp/growingMarket/growingMarket.cm.scss"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let GrowingMarket = class GrowingMarket extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: ` sbcw relative p32 ${_growingMarketCm.default.keyPoints}`
    }, _react.default.createElement("h2", {
      className: "fw9 f20 text-center pr24 pl24"
    }, "Fastest Growing Holiday Marketplace"), _react.default.createElement("p", {
      className: "text-center mt8 mb24"
    }, "Easy. Secure. Reliable"), _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement("div", {
      className: "col-xs-6 text-center mb24"
    }, _react.default.createElement("div", {
      className: _growingMarketCm.default.image
    }, _react.default.createElement(_Icon.PartPay, null)), _react.default.createElement("h6", null, "Partial Payment "), _react.default.createElement("p", null, "Facility")), _react.default.createElement("div", {
      className: "col-xs-6 text-center mb24"
    }, _react.default.createElement("div", {
      className: _growingMarketCm.default.image
    }, _react.default.createElement(_Icon.IllusTraveler, null)), _react.default.createElement("h6", null, "22 Lac+  "), _react.default.createElement("p", null, "Happy Travellers")), _react.default.createElement("div", {
      className: "col-xs-6 text-center mb24"
    }, _react.default.createElement("div", {
      className: _growingMarketCm.default.image
    }, _react.default.createElement(_Icon.IllusMoneySafe, null)), _react.default.createElement("h6", null, "Travel Triangle "), _react.default.createElement("p", null, " Verified")), _react.default.createElement("div", {
      className: "col-xs-6 text-center mb24"
    }, _react.default.createElement("div", {
      className: _growingMarketCm.default.image
    }, _react.default.createElement(_Icon.IllusQualityCheck, null)), _react.default.createElement("h6", null, "Stringent Quality "), _react.default.createElement("p", null, " Control")), _react.default.createElement("div", {
      className: "col-xs-12 text-center"
    }, _react.default.createElement("div", {
      className: _growingMarketCm.default.image
    }, _react.default.createElement(_Icon.IllusSupport, null)), _react.default.createElement("h6", null, "24/7  "), _react.default.createElement("p", null, "Support"))));
  }

};
var _default = GrowingMarket;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/qdp/growingMarket/growingMarket.cm.scss":
/*!****************************************************************!*\
  !*** ./app-v2/screens/qdp/growingMarket/growingMarket.cm.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"keyPoints": "_34gvl_64HSkM_gHMXnFkmD",
	"image": "S8tYem9N6lHFotbOCGjno"
};

/***/ }),

/***/ "./app-v2/screens/qdp/thingsToCheck/ThingsToCheck.js":
/*!***********************************************************!*\
  !*** ./app-v2/screens/qdp/thingsToCheck/ThingsToCheck.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _thingsToCheckCm = _interopRequireDefault(__webpack_require__(/*! ./thingsToCheck.cm.scss */ "./app-v2/screens/qdp/thingsToCheck/thingsToCheck.cm.scss"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ThingsToCheck = class ThingsToCheck extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12 p0"
    }, _react.default.createElement("p", {
      className: "sbc7 fw9 sfc8 text-center p24 f20 pr48 pl48"
    }, "Things to check while comparing quotes"), _react.default.createElement("div", {
      className: `relative sbcw p15 pt0 pb0 ${_thingsToCheckCm.default.list}`
    }, _react.default.createElement("ul", null, _react.default.createElement("li", {
      className: "flex p15 pl5 bb alignCenter"
    }, _react.default.createElement("div", {
      className: _thingsToCheckCm.default.image
    }, _react.default.createElement(_Icon.BudgetIconNew, null)), "All taxes are included or not"), _react.default.createElement("li", {
      className: "flex p15 pl5 bb alignCenter"
    }, _react.default.createElement("div", {
      className: _thingsToCheckCm.default.image
    }, _react.default.createElement(_Icon.TicketsIcon, null)), "Entry tickets for activities"), _react.default.createElement("li", {
      className: "flex p15 pl5 bb alignCenter"
    }, _react.default.createElement("div", {
      className: _thingsToCheckCm.default.image
    }, _react.default.createElement(_Icon.Hotel, null)), "Hotel rating & room category"), _react.default.createElement("li", {
      className: "flex p15 pl5 bb alignCenter"
    }, _react.default.createElement("div", {
      className: _thingsToCheckCm.default.image
    }, _react.default.createElement(_Icon.Tempotraveler, null)), "Type of transport, Private vs Public"), _react.default.createElement("li", {
      className: "flex p15 pl5 alignCenter"
    }, _react.default.createElement("div", {
      className: _thingsToCheckCm.default.image
    }, _react.default.createElement(_Icon.Cab, null)), "Type of car, Hatchback vs Sedan etc.")))));
  }

};
var _default = ThingsToCheck;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/qdp/thingsToCheck/thingsToCheck.cm.scss":
/*!****************************************************************!*\
  !*** ./app-v2/screens/qdp/thingsToCheck/thingsToCheck.cm.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"list": "_1bCzboFYej23lOUHJnUSEw",
	"image": "_2G8p7Fysm9Qwl-Ckbs7Z6p"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvUXVvdGVEZXRhaWxIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvUXVvdGVMaXN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvUXVvdGVUaW1lci9RdW90ZVRpbWVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL1F1b3RlVGltZXIvcXVvdGVUaW1lci5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2N0YXMvRXhwbGFpblRoZVF1b3RlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2Zvb3Rlci9RdW90ZVN0aWNreUZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL0NoYXRJY29uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3FkcC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvcWRwL1FkcEFzeW5jLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3FkcC9ncm93aW5nTWFya2V0L0dyb3dpbmdNYXJrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvcWRwL2dyb3dpbmdNYXJrZXQvZ3Jvd2luZ01hcmtldC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3FkcC90aGluZ3NUb0NoZWNrL1RoaW5nc1RvQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvcWRwL3RoaW5nc1RvQ2hlY2svdGhpbmdzVG9DaGVjay5jbS5zY3NzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsInRyYWNrU2VnbWVudEV2ZW50IiwiZXZlbnQiLCJjdGEiLCJvYmplY3QiLCJwcm9wcyIsInRyYWNrU2VnbWVudCIsInNlY3Rpb24iLCJyZW5kZXIiLCJjdXJyZW50UXVvdGVJZCIsInVzZXJEZXRhaWxzIiwiTm90aWZpY2F0aW9uQ29udGFpbmVyIiwiTm90aWZpY2F0aW9uIiwiY29udGFpbmVyIiwic2hhcmVMaW5rIiwicGF0aCIsInRyaXBJZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIkdBZ2VudFNlbGVjdGlvbkRpdiIsImdsYW1vcm91cyIsImRpdiIsImJvcmRlciIsIlF1b3RlRGV0YWlsSGVhZGVyIiwicXVvdGVzTGlzdCIsImxvY2F0aW9uIiwiY3VycmVudFF1b3RlIiwiZmlsdGVyIiwicSIsImlkIiwicmVuZGVyQ3VycmVudFF1b3RlIiwiYWdlbnQiLCJuYW1lIiwicHJpY2VJbmZvcm1hdGlvbiIsImRpc2NvdW50SW5mb3JtYXRpb24iLCJsZW5ndGgiLCJkZXN0aW5hdGlvbiIsIk9SR0FOSVNNX0NMSUNLRUQiLCJhcnJheSIsIkdRdW90ZUxpc3REaXYiLCJtYXJnaW5Cb3R0b20iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiUXVvdGVMaXN0TW9kYWwiLCJtYXAiLCJxdW90ZSIsImluZGV4Iiwic2VhcmNoIiwiVElNRV9JTlRFUlZBTCIsIlF1b3RlVGltZXIiLCJQdXJlQ29tcG9uZW50Iiwic3RhdGUiLCJ0b3RhbFRpbWVJblNlY29uZHMiLCJ0aWNrIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwic2V0U3RhdGUiLCJyZW5kZXJUaW1lQmxvY2siLCJyZW1haW5pbmdUaW1lIiwidGltZVVuaXQiLCJydCIsIk1hdGgiLCJmbG9vciIsImNvbXBvbmVudERpZE1vdW50IiwidGltZU9iamVjdCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJPUkdBTklTTV9WSUVXRUQiLCJzZXRJbnRlcnZhbCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic3R5bGVzIiwidGltZXJCYW5uZXIiLCJjb3VudERvd24iLCJFeHBsYWluVGhlUXVvdGUiLCJpc1F1b3RlQ2FyZEN0YSIsImhhbmRsZUNoYXRDbGljayIsIkNoYXRDb250YWluZXIiLCJDaGF0IiwiYm9vbCIsIkdGb290ZXJEaXYiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJ6SW5kZXgiLCJRdW90ZVN0aWNreUZvb3RlciIsImNvbnN0cnVjdG9yIiwiY2FsbGJhY2tIYW5kbGVyIiwidHlwZSIsImRhdGEiLCJxdW90ZUlkIiwiVFJJUF9FVkVOVFNfRU5VTVMiLCJDQU5DRUxfVFJJUCIsImNhbmNlbEJvb2tpbmciLCJRVU9URV9FVkVOVFNfRU5VTVMiLCJQQVlfTk9XIiwib3BlbkJvb2tOb3dQb3B1cCIsIlJFSkVDVF9RVU9URSIsInJlamVjdFF1b3RlIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImNsb3NlUG9wdXAiLCJzZXRQZG1DYXRlZ29yeSIsInNob3dIaWRlUGRtVmlldyIsIlBETV9DQVRFR09SWV9FWFBMQUlOUVVPVEUiLCJiaW5kIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJyZWplY3RRdW90ZVN1Y2Nlc3MiLCJzaG93Um9zdGVyIiwiSU5GT19ST1NURVIiLCJtZXNzYWdlIiwicmVhY3RpdmF0ZVF1b3RlU3VjY2VzcyIsImN0YXMiLCJxdW90ZVN0YXR1cyIsImNvbnZlcnRlZFF1b3RlIiwiaXNSZWplY3RlZCIsInB1c2giLCJpc1JlcXVlc3RDYW5jZWxsZWQiLCJpc0NhbmNlbGxlZCIsImlzQ29udmVydGVkIiwiaW5zdGFsbG1lbnRJbmZvIiwiaXNBbGxQYXltZW50UmVjZWl2ZWQiLCJpbnZvaWNlU2hvd1VybCIsImlzSW52b2ljZWQiLCJxdW90ZVJlamVjdGlvblJlYXNvbnMiLCJvcERldGFpbHMiLCJzaGFwZSIsImlzSW52b2ljZVJlcXVlc3RlZCIsImJvb2tOb3ciLCJyZWFjdGl2YXRlUXVvdGUiLCJyZWFjdGl2YXRlQm9va2luZyIsIkdDaGF0U3BhbiIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsIkNoYXRJY29uIiwiUmVhY3QiLCJMYXlvdXQiLCJjYXRlZ29yeSIsInRyaXBfaWQiLCJnZXRDb29raWUiLCJUUklQX0lEX0NPT0tJRV9LRVkiLCJxdW90ZV9pZCIsImludm9pY2VfaWQiLCJpbnZvaWNlRGV0YWlscyIsImRlc3RpbmF0aW9uX2lkIiwiZGVzdGluYXRpb25zTGlzdCIsImFnZW50X2lkIiwidHJpcF9zdGF0dXMiLCJ0cmlwU3RhdHVzIiwicXVvdGVfc3RhdHVzIiwic3RhdHVzIiwibWlzY19pZF8xIiwibWlzY0lkMSIsIm1pc2NfdHlwZV8xIiwibWlzY1R5cGUxIiwibWlzY19pZF8yIiwibWlzY0lkMiIsIm1pc2NfdHlwZV8yIiwibWlzY1R5cGUyIiwibWlzY19pZF8zIiwibWlzY0lkMyIsIm1pc2NfdHlwZV8zIiwibWlzY1R5cGUzIiwibWlzY19pZF80IiwibWlzY0lkNCIsIm1pc2NfdHlwZV80IiwibWlzY1R5cGU0IiwibWlzY19pZF81IiwibWlzY0lkNSIsIm1pc2NfdHlwZV81IiwibWlzY1R5cGU1Iiwib25TZW5zb3JDaGFuZ2UiLCJpc1Zpc2libGUiLCJjb25maWciLCJpc0V2ZW50VHJhY2tlZCIsImxheW91dCIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJxdW90ZXMiLCJxdW90ZVRpbWVSZW1haW5pbmciLCJRdW90ZVN0aWNreUZvb3RlckNvbnRhaW5lciIsIiRpbmRleCIsIkNvbXBvbmVudHNJbnN0YW5jZSIsImNvbW1vbiIsInNwbGl0IiwiUWRwQXN5bmMiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidXBkYXRlUXVvdGVTdGF0dXMiLCJzb3VyY2UiLCJxdWVyeSIsImZyb21fdHRfbWFpbGVyIiwidXBkYXRlUXVvdGVTdGF0cyIsInB1c2hTdGF0ZSIsIkdyb3dpbmdNYXJrZXQiLCJrZXlQb2ludHMiLCJpbWFnZSIsIlRoaW5nc1RvQ2hlY2siLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRU1BLE0sc0JBQU4sTUFBTUEsTUFBTixTQUFxQkMsZ0JBQXJCLENBQStCO0FBQUE7QUFBQTs7QUFBQSx3Q0FZN0JDLGlCQVo2QixHQVlULENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxTQUFTLEVBQXRCLEtBQTZCO0FBQy9DLFdBQUtDLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QjtBQUN0QkosYUFEc0I7QUFFdEJLLGlCQUFTLFlBRmE7QUFHdEJILGdCQUFRQSxNQUhjO0FBSXRCRDtBQUpzQixPQUF4QjtBQU1ELEtBbkI0QjtBQUFBOztBQXFCN0JLLFdBQVM7QUFDUCxVQUFNO0FBQUVDLG9CQUFGO0FBQWtCQztBQUFsQixRQUFrQyxLQUFLTCxLQUE3QztBQUNBLFVBQU1NLHdCQUF3QkMsdUJBQWFDLFNBQTNDO0FBQ0EsVUFBTUMsWUFBWSx3QkFBVTtBQUFFQyxZQUFNLGtDQUFpQk4sY0FBakI7QUFBUixLQUFWLENBQWxCO0FBRUEsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUNFLFlBQU0sMkJBQVUsS0FBS0osS0FBTCxDQUFXVyxNQUFyQixDQURSO0FBRUUsaUJBQVU7QUFGWixPQUlFLDZCQUFDLG9CQUFELE9BSkYsQ0FERixFQU9FO0FBQUcsaUJBQVU7QUFBYix1QkFQRixFQVVFLDZCQUFDLG9CQUFEO0FBQ0UsZ0JBQVUsd0JBQVlOLFlBQVlPLFVBQXhCLEVBQW9DUCxZQUFZUSxTQUFoRCxDQURaO0FBRUUsaUJBQVdKLFNBRmI7QUFFd0IsV0FBSSxrQkFGNUI7QUFHRSxvQkFBYyxLQUFLYjtBQUhyQixNQVZGLEVBZUUsNkJBQUMscUJBQUQsT0FmRixDQURGO0FBbUJEOztBQTdDNEIsQyxTQUN0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T0FBOUIsQ0FERixrQ0FERixFQUtFO0FBQUksaUJBQVU7QUFBZCxPQUNFO0FBQUssaUJBQVdqSSx5QkFBT2lJO0FBQXZCLE9BQThCLDZCQUFDLGlCQUFELE9BQTlCLENBREYsaUNBTEYsRUFTRTtBQUFJLGlCQUFVO0FBQWQsT0FDRTtBQUFLLGlCQUFXakkseUJBQU9pSTtBQUF2QixPQUE4Qiw2QkFBQyxXQUFELE9BQTlCLENBREYsaUNBVEYsRUFhRTtBQUFJLGlCQUFVO0FBQWQsT0FDRTtBQUFLLGlCQUFXakkseUJBQU9pSTtBQUF2QixPQUE4Qiw2QkFBQyxtQkFBRCxPQUE5QixDQURGLHlDQWJGLEVBaUJFO0FBQUksaUJBQVU7QUFBZCxPQUNFO0FBQUssaUJBQVdqSSx5QkFBT2lJO0FBQXZCLE9BQThCLDZCQUFDLFNBQUQsT0FBOUIsQ0FERix5Q0FqQkYsQ0FERixDQUZGLENBREYsQ0FERjtBQStCRDs7QUFqQ21DLEM7ZUFvQ3ZCQyxhOzs7Ozs7Ozs7Ozs7QUN6Q2Y7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJRZHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBCYWNrMkljb25XaGl0ZSB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IHJ0cmlwUGF0aCwgZG93bmxvYWRRdW90ZVVybCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJ21vZHVsZXMvbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyBnZXRGdWxsTmFtZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IFNvY2lhbFNoYXJlIGZyb20gJ21vZHVsZXMvcXVvdGUvY3Rhcy9Tb2NpYWxTaGFyZSc7XG5pbXBvcnQgeyBmb3JtYXRVUkwgfSBmcm9tICd1dGlscy9wYXJzZXJzJztcbmltcG9ydCB7IHRyYWNrU2VnbWVudCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHVzZXJEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbiAgfTtcblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChldmVudCwgY3RhLCBvYmplY3QgPSAnJykgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50LFxuICAgICAgc2VjdGlvbjogJ1N0aWNreSBCYXInLFxuICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICBjdGFcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50UXVvdGVJZCwgdXNlckRldGFpbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgTm90aWZpY2F0aW9uQ29udGFpbmVyID0gTm90aWZpY2F0aW9uLmNvbnRhaW5lcjtcbiAgICBjb25zdCBzaGFyZUxpbmsgPSBmb3JtYXRVUkwoeyBwYXRoOiBkb3dubG9hZFF1b3RlVXJsKGN1cnJlbnRRdW90ZUlkKSB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiYzEgcDggZmxleFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e3J0cmlwUGF0aCh0aGlzLnByb3BzLnRyaXBJZCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXI4IGlucHV0LTI0IHA0IGlibG9ja1wiXG4gICAgICAgID5cbiAgICAgICAgICA8QmFjazJJY29uV2hpdGUgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTYgZmxleCBhbGlnbkNlbnRlciBmdzcgc2ZjdyBmbGV4RnVsbCBlbGxpcHNpc1wiPlxuICAgICAgICAgIFF1b3RlIERldGFpbHNcbiAgICAgICAgPC9wPlxuICAgICAgICA8U29jaWFsU2hhcmVcbiAgICAgICAgICBzaGFyZWRCeT17Z2V0RnVsbE5hbWUodXNlckRldGFpbHMuZmlyc3RfbmFtZSwgdXNlckRldGFpbHMubGFzdF9uYW1lKX1cbiAgICAgICAgICBzaGFyZUxpbms9e3NoYXJlTGlua30ga2V5PVwiY3RhLXNvY2lhbC1zaGFyZVwiXG4gICAgICAgICAgdHJhY2tTZWdtZW50PXt0aGlzLnRyYWNrU2VnbWVudEV2ZW50fVxuICAgICAgICAvPlxuICAgICAgICA8Tm90aWZpY2F0aW9uQ29udGFpbmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IENvbXBhcmVJY29uLCBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBjb21wYXJlUXVvdGVzUGF0aCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgUXVvdGVQcmljZSBmcm9tICcuL3NoYXJlZC9wcmljZS9RdW90ZVByaWNlJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IFF1b3RlTGlzdE1vZGFsIGZyb20gJy4vUXVvdGVMaXN0TW9kYWwnO1xuXG5cbmNvbnN0IEdBZ2VudFNlbGVjdGlvbkRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBib3JkZXI6ICcxcHggc29saWQgI2Q0ZDRkNCcsXG59KTtcblxuY29uc3QgUXVvdGVEZXRhaWxIZWFkZXIgPSAoeyBxdW90ZXNMaXN0LCBjdXJyZW50UXVvdGVJZCwgdHJpcElkLCBsb2NhdGlvbiwgdHJhY2tTZWdtZW50IH0pID0+IHtcblxuICBjb25zdCB0cmFja1NlZ21lbnRFdmVudCA9IChldmVudCwgc2VjdGlvbiwgb2JqZWN0LCBjdGEpID0+IHtcbiAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBzZWN0aW9uLFxuICAgICAgb2JqZWN0LFxuICAgICAgY3RhXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFF1b3RlID0gcXVvdGVzTGlzdC5maWx0ZXIocSA9PiBxLmlkID09PSBjdXJyZW50UXVvdGVJZClbMF07XG5cbiAgY29uc3QgcmVuZGVyQ3VycmVudFF1b3RlID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgYXRfcXVvdGVTd2l0Y2hfYWN0aW9uQnRuXCI+XG4gICAgICA8R0FnZW50U2VsZWN0aW9uRGl2IGNsYXNzTmFtZT1cInByOCBwdDggcGw4IHBiOCBmbGV4IGZsZXhGdWxsIGFsaWduQ2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwZmMzIGYxMlwiPntjdXJyZW50UXVvdGUuYWdlbnQubmFtZX08L3A+XG4gICAgICAgICAgPFF1b3RlUHJpY2Ugey4uLmN1cnJlbnRRdW90ZS5wcmljZUluZm9ybWF0aW9ufSB7Li4uY3VycmVudFF1b3RlLmRpc2NvdW50SW5mb3JtYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgc2hvd09yaWdpbmFsUHJpY2U9e2ZhbHNlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgaWJsb2NrIHA4IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxEb3duQXJyb3cgLz48L3NwYW4+XG4gICAgICA8L0dBZ2VudFNlbGVjdGlvbkRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwYjhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwZmMzIGYxNCBmdzkgcHQxNSBwYjE1IGF0X3F1b3RlUmVjZWl2ZWRNc2dcIj5Zb3UgaGF2ZSByZWNlaXZlZCB7cXVvdGVzTGlzdC5sZW5ndGh9IFF1b3Rlc1xuICAgICAgICAgICAgZm9yIHtjdXJyZW50UXVvdGUuZGVzdGluYXRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyIHBsOCBwcjhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbFwiPlxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgdHJpZ2dlcj17cmVuZGVyQ3VycmVudFF1b3RlKCl9IGhhc05vQ2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UXVvdGVMaXN0TW9kYWwgcXVvdGVzTGlzdD17cXVvdGVzTGlzdH0gY3VycmVudFF1b3RlSWQ9e2N1cnJlbnRRdW90ZUlkfSB0cmlwSWQ9e3RyaXBJZH0gbG9jYXRpb249e2xvY2F0aW9ufS8+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWw4IGNvbXBhcmVfX2J0blwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tc2VjLWxvYWQgcHQ4IHBsMTUgcGI4IHByMTUgaWJsb2NrIGZsZXggYWxpZ25DZW50ZXIgYXRfY29tcGFyZUJ0biAke3F1b3Rlc0xpc3QubGVuZ3RoID4gMSA/ICcnIDogJ2Rpc2FibGVkJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ0NvbXBhcmUnLCAnJywgJ0NvbXBhcmUgUXVvdGVzJyl9XG4gICAgICAgICAgICBocmVmPXtjb21wYXJlUXVvdGVzUGF0aCh0cmlwSWQpfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlibG9jayBpbnB1dC0yNCBtcjVcIj48Q29tcGFyZUljb24gLz48L3NwYW4+PHNwYW4+Q29tcGFyZTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5RdW90ZURldGFpbEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHF1b3Rlc0xpc3Q6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuUXVvdGVEZXRhaWxIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZURldGFpbEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IGNvbXBhcmVRdW90ZXNQYXRoIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcbmltcG9ydCBRdW90ZVByaWNlIGZyb20gJy4vc2hhcmVkL3ByaWNlL1F1b3RlUHJpY2UnO1xuaW1wb3J0IHsgcXVvdGVEZXRhaWxQYXRoIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcblxuY29uc3QgR1F1b3RlTGlzdERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiBhJzoge1xuICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxuXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAnLFxuICAgICAgJyYgbGFiZWwnOiB7XG4gICAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gICcmIC5jaGVja2JveC1yb3VuZCArICBsYWJlbCc6IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2Q0ZDRkNCcsXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIGxlZnQ6ICcxNXB4JyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBsZWZ0OiAnMTlweCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBRdW90ZUxpc3RNb2RhbCA9ICh7IHF1b3Rlc0xpc3QsIGN1cnJlbnRRdW90ZUlkLCB0cmlwSWQsIGxvY2F0aW9uIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyByYWRpdXMyXCI+XG4gICAgICA8R1F1b3RlTGlzdERpdj5cbiAgICAgICAge1xuICAgICAgICAgIHF1b3Rlc0xpc3QubWFwKChxdW90ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsIG0wIGF0X3F1b3RlU3dpdGNoTGlua1wiIGtleT17aW5kZXh9IHRvPXtgJHtxdW90ZURldGFpbFBhdGgodHJpcElkLCBxdW90ZS5pZCl9JHtsb2NhdGlvbi5zZWFyY2h9YH0+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZGVzdGluYXRpb25kYXRhLXJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtxdW90ZS5pZCA9PT0gY3VycmVudFF1b3RlSWR9XG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBpZD1cIkhpZ2hsaWdodHNcIiBjbGFzc05hbWU9XCJuYmxvY2sgY2hlY2tib3gtcm91bmQgY2hlY2tib3gtcm91bmQtLWNlbnRlclwiIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiSGlnaGxpZ2h0c1wiIGNsYXNzTmFtZT1cImJsb2NrIHAxNSBiYiBwbDQ4XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBmYzMgZjEyXCI+e3F1b3RlLmFnZW50Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPFF1b3RlUHJpY2Ugey4uLnF1b3RlLnByaWNlSW5mb3JtYXRpb259IHsuLi5xdW90ZS5kaXNjb3VudEluZm9ybWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd09yaWdpbmFsUHJpY2U9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvR1F1b3RlTGlzdERpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblF1b3RlTGlzdE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgcXVvdGVzTGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5RdW90ZUxpc3RNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlTGlzdE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBzZWNvbmRzVG9EaG1zIH0gZnJvbSAnaGVscGVycy9EYXRlVGltZSc7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICdhcHAvdXRpbHMvcGFyc2Vycyc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3F1b3RlVGltZXIuY20uc2Nzcyc7XG5cbmNvbnN0IFRJTUVfSU5URVJWQUwgPSAxMDAwO1xuXG5jbGFzcyBRdW90ZVRpbWVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IHRvdGFsVGltZUluU2Vjb25kczogdGhpcy5wcm9wcy50b3RhbFRpbWVJblNlY29uZHMgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHRyYWNrU2VnbWVudCwgdG90YWxUaW1lSW5TZWNvbmRzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRpbWVPYmplY3QgPSBzZWNvbmRzVG9EaG1zKHRvdGFsVGltZUluU2Vjb25kcyk7XG4gICAgbGV0IGN0YTtcbiAgICBPYmplY3Qua2V5cyh0aW1lT2JqZWN0KS5tYXAoKGtleSkgPT4ge1xuICAgICAgbGV0IHJ0ID0gTWF0aC5mbG9vcih0aW1lT2JqZWN0W2tleV0pO1xuICAgICAgcnQgPSBydCA8IDEwID8gYDAke3J0fWAgOiBydDtcbiAgICAgIGN0YSA9IGN0YSA/IGAke2N0YX1fJHtydH1gIDogYFRpbWVyXyR7cnR9YDtcbiAgICB9KTtcbiAgICB0cmFja1NlZ21lbnQoeyBldmVudDogT1JHQU5JU01fVklFV0VELCBzZWN0aW9uOiAnVXJnZW5jeSBUaW1lcicsIGN0YSB9KTtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy50aWNrKCksIFRJTUVfSU5URVJWQUwpO1xuICB9XG5cbiAgdGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRvdGFsVGltZUluU2Vjb25kcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodG90YWxUaW1lSW5TZWNvbmRzIDw9IDApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgdG90YWxUaW1lSW5TZWNvbmRzOiB0b3RhbFRpbWVJblNlY29uZHMgLSAxIH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gIH1cblxuXG4gIHJlbmRlclRpbWVCbG9jayA9IChyZW1haW5pbmdUaW1lLCB0aW1lVW5pdCkgPT4ge1xuICAgIGNvbnN0IHJ0ID0gTWF0aC5mbG9vcihyZW1haW5pbmdUaW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCB0ZXh0LWNlbnRlciBwcjE1IHBsMTUgXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiBmdzlcIj57cnQgPCAxMCA/IGAwJHtydH1gIDogcnR9PC9wPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTBcIj57Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRpbWVVbml0KX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvdGFsVGltZUluU2Vjb25kcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodG90YWxUaW1lSW5TZWNvbmRzIDwgMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVPYmplY3QgPSBzZWNvbmRzVG9EaG1zKHRvdGFsVGltZUluU2Vjb25kcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXRfUXVvdGVUaW1lckJhbm5lciByZWxhdGl2ZSBwYjI0IHNiY3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwdDE1IHBiMzIgJHtzdHlsZXMudGltZXJCYW5uZXJ9YH0+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGYxNCBmdzQgcGwyNCBwcjI0IG1iMTVcIj5IdXJyeSEgQm9vayB5b3VyIHF1b3RlIGJlZm9yZSBwcmljZXMgaW5jcmVhc2UuPGJyIC8+UXVvdGUgcHJpY2VzIGV4cGlyZSBpbjo8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHtzdHlsZXMuY291bnREb3dufSBhdF9RdW90ZVRpbWVyU2VjdGlvbiByYWRpdXM2IGZsZXggc2JjdyBwdDggcGI4IHBsMTUgcHIxNSBhYnNvbHV0ZSBsMCByMCBiMGB9PlxuICAgICAgICB7XG4gICAgICAgICAgT2JqZWN0LmtleXModGltZU9iamVjdCkubWFwKChrZXkpID0+IHRoaXMucmVuZGVyVGltZUJsb2NrKHRpbWVPYmplY3Rba2V5XSwga2V5KSlcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUXVvdGVUaW1lci5wcm9wVHlwZXMgPSB7XG4gIHRvdGFsVGltZUluU2Vjb25kczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cblF1b3RlVGltZXIuZGVmYXVsdFByb3BzID0ge1xuICB0b3RhbFRpbWVJblNlY29uZHM6IC0xXG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZVRpbWVyO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aW1lckJhbm5lclwiOiBcIl8xY0ZXMFhwV0M5cTJtNi00emxtZ1NVXCIsXG5cdFwiY291bnREb3duXCI6IFwiXzJJT1ZmMnFlOEJmQkJJWC1NdU56c1wiXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBDaGF0IGZyb20gJ21vZHVsZXMvY2hhdCc7XG5cbmNsYXNzIEV4cGxhaW5UaGVRdW90ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNRdW90ZUNhcmRDdGEsIGhhbmRsZUNoYXRDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBDaGF0Q29udGFpbmVyID0gQ2hhdC5jb250YWluZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndmdWxsIGJ0bi1maWxsZWQtcHJpLWxhcmdlIHJpcHBsZSBwbDUgcHI1IGF0X2V4cGxhaW5UaGVRdW90ZVwiIG9uQ2xpY2s9e2hhbmRsZUNoYXRDbGlja30+XG4gICAgICAgICAgICAgIEV4cGxhaW4gdGhlIFF1b3RlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgaXNXaGl0ZUljb249e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hhdENvbnRhaW5lciBleHBsYWluVGhlUXVvdGUgLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRXhwbGFpblRoZVF1b3RlLnByb3BUeXBlcyA9IHtcbiAgaXNRdW90ZUNhcmRDdGE6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5FeHBsYWluVGhlUXVvdGUuZGVmYXVsdFByb3BzID0ge1xuICBpc1F1b3RlQ2FyZEN0YTogZmFsc2UsXG4gIGhhbmRsZUNoYXRDbGljazogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhaW5UaGVRdW90ZTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBDYW5jZWxCb29raW5nIGZyb20gJ21vZHVsZXMvdHJpcC9jdGFzL0NhbmNlbEJvb2tpbmcnO1xuaW1wb3J0IFN3aXRjaFF1b3RlIGZyb20gJy4uL2N0YXMvU3dpdGNoUXVvdGUnO1xuaW1wb3J0IEV4cGxhaW5UaGVRdW90ZSBmcm9tICcuLi9jdGFzL0V4cGxhaW5UaGVRdW90ZSc7XG5pbXBvcnQgVmlld0ludm9pY2VBbmRQYXkgZnJvbSAnLi4vY3Rhcy9WaWV3SW52b2ljZUFuZFBheSc7XG5pbXBvcnQgUmVqZWN0UXVvdGUgZnJvbSAnLi4vY3Rhcy9SZWplY3RRdW90ZSc7XG5pbXBvcnQgUVVPVEVfRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvcXVvdGUvRXZlbnRUeXBlcyc7XG5pbXBvcnQgVFJJUF9FVkVOVFNfRU5VTVMgZnJvbSAnbW9kdWxlcy90cmlwL0NoaWxkRXZlbnRzVHlwZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBCb29rTm93UG9wdXAgZnJvbSAnLi4vcG9wdXBzL2Jvb2tOb3cvaW5kZXgnO1xuaW1wb3J0IHsgSU5GT19ST1NURVIgfSBmcm9tICdjb25zdGFudHMvcm9zdGVyVHlwZXMnO1xuaW1wb3J0IHsgZG93bmxvYWRRdW90ZVVybCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBmb3JtYXRVUkwgfSBmcm9tICd1dGlscy9wYXJzZXJzJztcbmltcG9ydCB7IFBETV9DQVRFR09SWV9FWFBMQUlOUVVPVEUgfSBmcm9tICdoZWxwZXJzL3BkbUhlbHBlcnMnO1xuXG5jb25zdCBHRm9vdGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgYm90dG9tOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgcmlnaHQ6ICcwJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgekluZGV4OiAnOSdcbn0pO1xuXG5jbGFzcyBRdW90ZVN0aWNreUZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3Blbk1vZGFsOiBmYWxzZSxcbiAgICAgIGNsb3NlTW9kYWw6IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy5jYWxsYmFja0hhbmRsZXIgPSB0aGlzLmNhbGxiYWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJlamVjdFF1b3RlU3VjY2VzcyAmJiBuZXh0UHJvcHMucmVqZWN0UXVvdGVTdWNjZXNzKSB7XG4gICAgICB0aGlzLnByb3BzLnNob3dSb3N0ZXIoeyB0eXBlOiBJTkZPX1JPU1RFUiwgbWVzc2FnZTogJ1F1b3RlIEhhcyBCZWVuIFJlamVjdGVkJyB9KTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5yZWFjdGl2YXRlUXVvdGVTdWNjZXNzICYmIG5leHRQcm9wcy5yZWFjdGl2YXRlUXVvdGVTdWNjZXNzKSB7XG4gICAgICB0aGlzLnByb3BzLnNob3dSb3N0ZXIoeyB0eXBlOiBJTkZPX1JPU1RFUiwgbWVzc2FnZTogJ1F1b3RlIFJlYWN0aXZhdGVkIFN1Y2Nlc3NmdWxseSEnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBjdGEsIG9iamVjdCA9ICcnKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBzZWN0aW9uOiAnQm90dG9tIFN0aWNreSAnLFxuICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICBjdGFcbiAgICB9KTtcbiAgfTtcblxuICBjYWxsYmFja0hhbmRsZXIgPSAodHlwZSwgZGF0YSA9IHt9KSA9PiB7XG4gICAgZGF0YS50cmlwSWQgPSB0aGlzLnByb3BzLnRyaXBJZDtcbiAgICBkYXRhLnF1b3RlSWQgPSB0aGlzLnByb3BzLnF1b3RlSWQ7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgVFJJUF9FVkVOVFNfRU5VTVMuQ0FOQ0VMX1RSSVA6XG4gICAgICAgIHRoaXMucHJvcHMuY2FuY2VsQm9va2luZyhkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFFVT1RFX0VWRU5UU19FTlVNUy5QQVlfTk9XOlxuICAgICAgICB0aGlzLm9wZW5Cb29rTm93UG9wdXAoKTtcbiAgICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9DTElDS0VELCAnVmlldyBJbnZvaWNlICYgUGF5Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBRVU9URV9FVkVOVFNfRU5VTVMuUkVKRUNUX1FVT1RFOlxuICAgICAgICB0aGlzLnByb3BzLnJlamVjdFF1b3RlKGRhdGEpO1xuICAgICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdSZWplY3QgUXVvdGUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIG9wZW5Cb29rTm93UG9wdXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogdHJ1ZSwgY2xvc2VNb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogdHJ1ZSwgb3Blbk1vZGFsOiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZXRQZG1DYXRlZ29yeSwgc2hvd0hpZGVQZG1WaWV3IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldFBkbUNhdGVnb3J5KFBETV9DQVRFR09SWV9FWFBMQUlOUVVPVEUpO1xuICAgIHNob3dIaWRlUGRtVmlldyh0cnVlKTtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdFeHBsYWluIHRoZSBRdW90ZScpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjdGFzID0gW107XG4gICAgY29uc3QgeyB0cmlwSWQsIHF1b3RlSWQsIHF1b3RlU3RhdHVzLCBjdXJyZW50UXVvdGUsIGNvbnZlcnRlZFF1b3RlLCB1c2VyRGV0YWlscyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzaGFyZUxpbmsgPSBmb3JtYXRVUkwoeyBwYXRoOiBkb3dubG9hZFF1b3RlVXJsKHF1b3RlSWQpIH0pO1xuICAgIGlmIChxdW90ZVN0YXR1cy5pc1JlamVjdGVkKSB7XG4gICAgICBjdGFzLnB1c2goPEV4cGxhaW5UaGVRdW90ZSBoYW5kbGVDaGF0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hhdENsaWNrfSBrZXk9XCJleHBsYWluLXRoZS1xdW90ZVwiIC8+KTtcbiAgICB9IGVsc2UgaWYgKHF1b3RlU3RhdHVzLmlzUmVxdWVzdENhbmNlbGxlZCkge1xuICAgICAgY3Rhcy5wdXNoKDxFeHBsYWluVGhlUXVvdGUgaGFuZGxlQ2hhdENsaWNrPXt0aGlzLmhhbmRsZUNoYXRDbGlja30ga2V5PVwiZXhwbGFpbi10aGUtcXVvdGVcIiAvPik7XG4gICAgfSBlbHNlIGlmIChxdW90ZVN0YXR1cy5pc0NhbmNlbGxlZCkge1xuICAgICAgaWYgKGNvbnZlcnRlZFF1b3RlLmlkKSB7XG4gICAgICAgIGN0YXMucHVzaCg8U3dpdGNoUXVvdGUgdHJpcElkPXt0cmlwSWR9IHF1b3RlSWQ9e2NvbnZlcnRlZFF1b3RlLmlkfSBrZXk9XCJzd2l0Y2hfcXVvdGVcIiAvPik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChxdW90ZVN0YXR1cy5pc0NvbnZlcnRlZCkge1xuICAgICAgaWYgKGN1cnJlbnRRdW90ZS5pbnN0YWxsbWVudEluZm8uaXNBbGxQYXltZW50UmVjZWl2ZWQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRRdW90ZS5pbnZvaWNlU2hvd1VybCkge1xuICAgICAgICAgIGN0YXMucHVzaCg8Vmlld0ludm9pY2VBbmRQYXkgaW52b2ljZVVybD17Y3VycmVudFF1b3RlLmludm9pY2VTaG93VXJsfSBjdGFUZXh0PSdWaWV3IEludm9pY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjdGEtdmlldy1pbnZvaWNlXCIgLz4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdGFzLnB1c2goPENhbmNlbEJvb2tpbmcgY2FsbGJhY2tIYW5kbGVyPXt0aGlzLmNhbGxiYWNrSGFuZGxlcn0gdHJpcElkPXt0cmlwSWR9IGtleT1cImN0YS1jYW5jZWwtYm9va2luZ1wiIC8+KTtcbiAgICAgICAgY3Rhcy5wdXNoKDxWaWV3SW52b2ljZUFuZFBheSBpbnZvaWNlVXJsPXtjdXJyZW50UXVvdGUuaW52b2ljZVNob3dVcmx9IGtleT1cImN0YS12aWV3LWludm9pY2VcIiAvPik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChxdW90ZVN0YXR1cy5pc0ludm9pY2VkKSB7XG4gICAgICBjdGFzLnB1c2goPFJlamVjdFF1b3RlIHF1b3RlUmVqZWN0aW9uUmVhc29ucz17dGhpcy5wcm9wcy5xdW90ZVJlamVjdGlvblJlYXNvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGFuZGxlcj17dGhpcy5jYWxsYmFja0hhbmRsZXJ9IHRyaXBJZD17dHJpcElkfSBxdW90ZUlkPXtxdW90ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjdGEtcmVqZWN0LXF1b3RlXCIgLz4pO1xuICAgICAgY3Rhcy5wdXNoKDxWaWV3SW52b2ljZUFuZFBheSBpbnZvaWNlVXJsPXtjdXJyZW50UXVvdGUuaW52b2ljZVNob3dVcmx9IGtleT1cImN0YS12aWV3LWludm9pY2VcIiAvPik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY3Rhcy5wdXNoKDxFeHBsYWluVGhlUXVvdGUgaGFuZGxlQ2hhdENsaWNrPXt0aGlzLmhhbmRsZUNoYXRDbGlja30ga2V5PVwiZXhwbGFpbi10aGUtcXVvdGVcIiAvPik7XG4gICAgfVxuXG4gICAgaWYgKCFjdGFzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHRm9vdGVyRGl2IGNsYXNzTmFtZT1cImZsZXggc2JjdyBwOCBiczYgYXRfcXVvdGVGb290ZXJTZWN0aW9uXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY3Rhc1xuICAgICAgICAgIH1cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHRyaWdnZXI9e251bGx9XG4gICAgICAgICAgICBmdWxsVmlldz17dHJ1ZX1cbiAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9XG4gICAgICAgICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX1cbiAgICAgICAgICAgIGN1c3RvbUNsb3NlVHJpZ2dlcj17dGhpcy5zdGF0ZS5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2VDdXN0b209e3RoaXMuY2xvc2VQb3B1cH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm9va05vd1BvcHVwXG4gICAgICAgICAgICAgIG9wc0RldGFpbD17dGhpcy5wcm9wcy5jdXJyZW50UXVvdGUub3BEZXRhaWxzfVxuICAgICAgICAgICAgICBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlUG9wdXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvR0Zvb3RlckRpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUXVvdGVTdGlja3lGb290ZXIucHJvcFR5cGVzID0ge1xuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBxdW90ZVN0YXR1czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpc1JlamVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0ludm9pY2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0ludm9pY2VSZXF1ZXN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQ2FuY2VsbGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0NvbnZlcnRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNSZXF1ZXN0Q2FuY2VsbGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9KS5pc1JlcXVpcmVkLFxuICBjdXJyZW50UXVvdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29udmVydGVkUXVvdGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHF1b3RlUmVqZWN0aW9uUmVhc29uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIGJvb2tOb3c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlamVjdFF1b3RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZWFjdGl2YXRlUXVvdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlYWN0aXZhdGVCb29raW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjYW5jZWxCb29raW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIHJlamVjdFF1b3RlU3VjY2VzczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgcmVhY3RpdmF0ZVF1b3RlU3VjY2VzczogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93Um9zdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2V0UGRtQ2F0ZWdvcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dIaWRlUGRtVmlldzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblF1b3RlU3RpY2t5Rm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udmVydGVkUXVvdGU6IHt9LFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9LFxuICBzaG93Um9zdGVyOiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVTdGlja3lGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgc2V0UGRtQ2F0ZWdvcnksIHNob3dIaWRlUGRtVmlldyB9IGZyb20gJ21vZHVsZXMvcGRtL2FjdGlvbic7XG5cbmltcG9ydCB7XG4gIGdldEN1cnJlbnRRdW90ZVN0YXR1c2VzLFxuICBnZXRDdXJyZW50UXVvdGUsXG4gIGdldENvbnZlcnRlZFF1b3RlLFxuICBxdW90ZUN0YXNTdGF0dXNcbn0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUxpc3QnO1xuaW1wb3J0IHsgZ2V0VHJpcElkIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZ2V0UXVvdGVSZWplY3Rpb25SZWFzb25zIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VXNlckRldGFpbHMgfSBmcm9tICdyZWR1Y2Vycy9hdXRoJztcbmltcG9ydCB7XG4gIGJvb2tOb3csXG4gIHJlamVjdFF1b3RlLFxuICByZWFjdGl2YXRlUXVvdGUsXG59IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHtcbiAgcmVhY3RpdmF0ZUJvb2tpbmcsXG4gIGNhbmNlbEJvb2tpbmdcbn0gZnJvbSAnbW9kdWxlcy90cmlwL2FjdGlvbnMvdHJpcEFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgc2hvd1Jvc3RlciB9IGZyb20gJ21vZHVsZXMvcm9zdGVyL2FjdGlvbic7XG5pbXBvcnQgUXVvdGVTdGlja3lGb290ZXIgZnJvbSAnLi9RdW90ZVN0aWNreUZvb3Rlcic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRRdW90ZSA9IGdldEN1cnJlbnRRdW90ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyaXBJZDogZ2V0VHJpcElkKHN0YXRlKSxcbiAgICAgIHF1b3RlSWQ6IGN1cnJlbnRRdW90ZS5pZCxcbiAgICAgIGN1cnJlbnRRdW90ZTogY3VycmVudFF1b3RlLFxuICAgICAgY29udmVydGVkUXVvdGU6IGdldENvbnZlcnRlZFF1b3RlKHN0YXRlKSxcbiAgICAgIHF1b3RlU3RhdHVzOiBnZXRDdXJyZW50UXVvdGVTdGF0dXNlcyhjdXJyZW50UXVvdGUpLFxuICAgICAgcXVvdGVSZWplY3Rpb25SZWFzb25zOiBnZXRRdW90ZVJlamVjdGlvblJlYXNvbnMoc3RhdGUpLFxuICAgICAgdXNlckRldGFpbHM6IGdldFVzZXJEZXRhaWxzKHN0YXRlKSxcbiAgICAgIC4uLnF1b3RlQ3Rhc1N0YXR1cyhzdGF0ZSlcbiAgICB9O1xuICB9LCB7XG4gICAgYm9va05vdyxcbiAgICByZWplY3RRdW90ZSxcbiAgICByZWFjdGl2YXRlUXVvdGUsXG4gICAgcmVhY3RpdmF0ZUJvb2tpbmcsXG4gICAgY2FuY2VsQm9va2luZyxcbiAgICBzaG93Um9zdGVyLFxuICAgIHNldFBkbUNhdGVnb3J5LFxuICAgIHNob3dIaWRlUGRtVmlld1xuICB9KShRdW90ZVN0aWNreUZvb3RlcikpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lclxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDaGF0SWNvbldoaXRlIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgQ2hhdCBmcm9tICdtb2R1bGVzL2NoYXQnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHQ2hhdFNwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnNTZweCcsXG4gIGhlaWdodDogJzU2cHgnLFxuICBib3R0b206ICc3MHB4J1xufSk7XG5cbmNsYXNzIENoYXRJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlQ2hhdENsaWNrOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBDaGF0Q29udGFpbmVyID0gQ2hhdC5jb250YWluZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgIDxHQ2hhdFNwYW4gY2xhc3NOYW1lPVwiZml4ZWQtbWVudS1idXR0b24taWNvbi1jb250YWluZXIgcmFkaXVzMTAwIHJlbGF0aXZlIHoxNSBmaXhlZCBwYmMxIHIxNSBhdF9jaGF0VHJpZ2dlclwiPlxuICAgICAgICAgICAgPENoYXRJY29uV2hpdGUgLz5cbiAgICAgICAgICA8L0dDaGF0U3Bhbj5cbiAgICAgICAgfVxuICAgICAgICBmdWxsVmlldz17dHJ1ZX1cbiAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgIGlzV2hpdGVJY29uPXt0cnVlfVxuICAgICAgICBjdXN0b21DbGFzcz1cImNoYXRCb3RNb2RhbFwiXG4gICAgICA+XG4gICAgICAgIDxDaGF0Q29udGFpbmVyIC8+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEljb247XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCB7IE9SR0FOSVNNX1ZJRVdFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICdhcHAtdjIvY29tbW9uJztcbmltcG9ydCB7IGdldFF1b3Rlc0xpc3QsIGdldERlc3RpbmF0aW9uIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUxpc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdtb2R1bGVzL3F1b3RlL0hlYWRlcic7XG5pbXBvcnQgUXVvdGVEZXRhaWxIZWFkZXIgZnJvbSAnbW9kdWxlcy9xdW90ZS9RdW90ZURldGFpbEhlYWRlcic7XG5pbXBvcnQgUXVvdGVUaW1lciBmcm9tICdtb2R1bGVzL3F1b3RlL1F1b3RlVGltZXIvUXVvdGVUaW1lcic7XG5pbXBvcnQgUXVvdGVTdGlja3lGb290ZXIgZnJvbSAnbW9kdWxlcy9xdW90ZS9mb290ZXInO1xuaW1wb3J0IFJvc3RlciBmcm9tICdtb2R1bGVzL3Jvc3Rlcic7XG5pbXBvcnQgQ2hhdEljb24gZnJvbSAnbW9kdWxlcy9xdW90ZS9zaGFyZWQvQ2hhdEljb24nO1xuaW1wb3J0IFRoaW5nc1RvQ2hlY2sgZnJvbSAnLi90aGluZ3NUb0NoZWNrL1RoaW5nc1RvQ2hlY2snO1xuaW1wb3J0IEdyb3dpbmdNYXJrZXQgZnJvbSAnLi9ncm93aW5nTWFya2V0L0dyb3dpbmdNYXJrZXQnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubGF5b3V0LmNvbXBvbmVudHMubWFwKChjb21wb25lbnQpID0+IHtcbiAgICAgIHRoaXMuaXNFdmVudFRyYWNrZWRbY29tcG9uZW50Lm5hbWVdID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgaWYgKHByb3BzLmN1cnJlbnRRdW90ZUlkICE9PSBuZXh0UHJvcHMuY3VycmVudFF1b3RlSWQpIHtcbiAgICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB7fTtcbiAgICB9XG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChkYXRhID0ge30pID0+IHtcbiAgICBjb25zdCB7IHRyaXBJZCwgY3VycmVudFF1b3RlLCBjdXJyZW50UXVvdGVJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghY3VycmVudFF1b3RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBkYXRhLmV2ZW50LFxuICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1FEUCcsXG4gICAgICBzZWN0aW9uOiBkYXRhLnNlY3Rpb24gfHwgJycsXG4gICAgICBvYmplY3Q6IGRhdGEub2JqZWN0IHx8IGBRdW90ZS8ke2N1cnJlbnRRdW90ZUlkfWAsXG4gICAgICBjdGE6IGRhdGEuY3RhLFxuICAgICAgdHJpcF9pZDogdHJpcElkIHx8IChnZXRDb29raWUoVFJJUF9JRF9DT09LSUVfS0VZKSwgMTApIHx8IDAsXG4gICAgICBxdW90ZV9pZDogY3VycmVudFF1b3RlSWQsXG4gICAgICBpbnZvaWNlX2lkOiBjdXJyZW50UXVvdGUuaW52b2ljZURldGFpbHMuaWQgfHwgMCxcbiAgICAgIGRlc3RpbmF0aW9uX2lkOiBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdC5sZW5ndGggPyBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdFswXS5pZCA6IDAsXG4gICAgICBhZ2VudF9pZDogY3VycmVudFF1b3RlLmFnZW50LmlkIHx8IDAsXG4gICAgICB0cmlwX3N0YXR1czogY3VycmVudFF1b3RlLnRyaXBTdGF0dXMgfHwgJycsXG4gICAgICBxdW90ZV9zdGF0dXM6IGN1cnJlbnRRdW90ZS5zdGF0dXMgfHwgJycsXG4gICAgICAvLyBub19vZl9pbnN0YWxsbWVudHM6IGN1cnJlbnRRdW90ZS5pbnN0YWxsbWVudEluZm8gJiYgY3VycmVudFF1b3RlLmluc3RhbGxtZW50SW5mby5pbnN0YWxsbWVudHNSZWNlaXZlZCxcbiAgICAgIC8vIGludm9pY2VfYW1vdW50OiBjdXJyZW50UXVvdGUuaW52b2ljZURldGFpbHMgJiYgY3VycmVudFF1b3RlLmludm9pY2VEZXRhaWxzLnByaWNlLFxuICAgICAgLy8gbmV4dF9pbnN0YWxsbWVudDogY3VycmVudFF1b3RlLmluc3RhbGxtZW50SW5mbyAmJiBjdXJyZW50UXVvdGUuaW5zdGFsbG1lbnRJbmZvLm5leHRTY2hlZHVsZWREYXRlLFxuICAgICAgLy8gaW52b2ljZV9jdXJyOiBjdXJyZW50UXVvdGUucHJpY2luZ0luZm8gJiYgY3VycmVudFF1b3RlLnByaWNpbmdJbmZvLmN1cnJlbmN5LFxuICAgICAgbWlzY19pZF8xOiBkYXRhLm1pc2NJZDEsXG4gICAgICBtaXNjX3R5cGVfMTogZGF0YS5taXNjVHlwZTEsXG4gICAgICBtaXNjX2lkXzI6IGRhdGEubWlzY0lkMixcbiAgICAgIG1pc2NfdHlwZV8yOiBkYXRhLm1pc2NUeXBlMixcbiAgICAgIG1pc2NfaWRfMzogZGF0YS5taXNjSWQzLFxuICAgICAgbWlzY190eXBlXzM6IGRhdGEubWlzY1R5cGUzLFxuICAgICAgbWlzY19pZF80OiBkYXRhLm1pc2NJZDQsXG4gICAgICBtaXNjX3R5cGVfNDogZGF0YS5taXNjVHlwZTQsXG4gICAgICBtaXNjX2lkXzU6IGRhdGEubWlzY0lkNSxcbiAgICAgIG1pc2NfdHlwZV81OiBkYXRhLm1pc2NUeXBlNVxuICAgIH0pO1xuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSwgY29uZmlnKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgaWYgKCF0aGlzLmlzRXZlbnRUcmFja2VkW2NvbmZpZy5uYW1lXSkge1xuICAgICAgICB0aGlzLmlzRXZlbnRUcmFja2VkW2NvbmZpZy5uYW1lXSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX1ZJRVdFRCxcbiAgICAgICAgICBzZWN0aW9uOiBjb25maWcubmFtZSxcbiAgICAgICAgICBjdGE6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50UXVvdGVJZCwgcXVvdGVzLCB1c2VyRGV0YWlscywgcXVvdGVUaW1lUmVtYWluaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IFF1b3RlU3RpY2t5Rm9vdGVyQ29udGFpbmVyID0gUXVvdGVTdGlja3lGb290ZXIuY29udGFpbmVyO1xuICAgIGNvbnN0IHF1b3Rlc0xpc3QgPSBnZXRRdW90ZXNMaXN0KHF1b3Rlcyk7XG4gICAgY29uc3QgY3VycmVudFF1b3RlID0gcXVvdGVzW2N1cnJlbnRRdW90ZUlkXTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGdldERlc3RpbmF0aW9uKGN1cnJlbnRRdW90ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuXG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9uYW1lXCIgY29udGVudD1cIlF1b3RlIERldGFpbFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzdGluYXRpb25cIiBjb250ZW50PXtkZXN0aW5hdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHJpcF9zdGF0dXNcIiBjb250ZW50PXtjdXJyZW50UXVvdGUudHJpcFN0YXR1c30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicXVvdGVfc3RhdHVzXCIgY29udGVudD17Y3VycmVudFF1b3RlLnN0YXR1c30gLz5cbiAgICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgICAgPFJvc3RlciB0aW1lb3V0PXszMDAwfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggY29udGVudEJhY2tncm91bmQgc2JjNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYjQ4XCI+XG4gICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICB0cmlwSWQ9e3RoaXMucHJvcHMudHJpcElkfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdW90ZUlkPXtjdXJyZW50UXVvdGVJZH1cbiAgICAgICAgICAgICAgICB1c2VyRGV0YWlscz17dXNlckRldGFpbHN9XG4gICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXsoZGF0YSkgPT4gdGhpcy50cmFja1NlZ21lbnRFdmVudChkYXRhKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1b3RlVGltZVJlbWFpbmluZyA+IDAgP1xuICAgICAgICAgICAgICAgICAgPFF1b3RlVGltZXJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxUaW1lSW5TZWNvbmRzPXtxdW90ZVRpbWVSZW1haW5pbmd9XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17KGRhdGEpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoZGF0YSl9XG4gICAgICAgICAgICAgICAgICAvPjogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxRdW90ZURldGFpbEhlYWRlciBcbiAgICAgICAgICAgICAgICBxdW90ZXNMaXN0PXtxdW90ZXNMaXN0fVxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdW90ZUlkPXt0aGlzLnByb3BzLmN1cnJlbnRRdW90ZUlkfVxuICAgICAgICAgICAgICAgIHRyaXBJZD17dGhpcy5wcm9wcy50cmlwSWR9XG4gICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259IFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYXlvdXQuY29tcG9uZW50cy5tYXAoKGNvbXBvbmVudCwgJGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBDb21wb25lbnRzSW5zdGFuY2UgPSBjb21tb25bY29tcG9uZW50Lm5hbWVdO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFNlbnNvciBrZXk9eyRpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUsIGNvbXBvbmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbFZpc2liaWxpdHk9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudHNJbnN0YW5jZSBjb25maWc9e2NvbXBvbmVudH0gZGVzdGluYXRpb249e2Rlc3RpbmF0aW9uLnNwbGl0KCcsJylbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnQ9eyhkYXRhKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KGRhdGEpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1NlbnNvcj5cblxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHsvKmVuZCBvZiBxdW90ZSovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBwZmM0IHRleHQtY2VudGVyIHAyNFwiPkVuZCBvZiBRdW90ZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIGZhcSovfVxuXG4gICAgICAgICAgICAgIHsvKnRvIGNoZWNrKi99XG4gICAgICAgICAgICAgIDxUaGluZ3NUb0NoZWNrIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2ZjOCBwYjI0IHB0MjQgcGwxNSBwcjE1IFwiPldlLCBhdCBUcmF2ZWwgVHJpYW5nbGUgbWFrZSBzdXJlIHRoYXQgdGhlIHlvdSBlbmpveSB0aGVcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVzaW9ucyBwcm9taXNlZCBieSBvdXIgYWdlbnRzLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qZ3Jvd2luZyBtYXJrZXQqL31cbiAgICAgICAgICAgICAgPEdyb3dpbmdNYXJrZXQgLz5cbiAgICAgICAgICAgICAgPENoYXRJY29uIC8+XG4gICAgICAgICAgICAgIDxRdW90ZVN0aWNreUZvb3RlckNvbnRhaW5lciB0cmFja1NlZ21lbnQ9eyhkYXRhKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KGRhdGEpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBsYXlvdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHF1b3RlVGltZVJlbWFpbmluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgY3VycmVudFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB1c2VyRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUWRwQXN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGlmICghcHJvcHMucXVvdGVzLmhhc093blByb3BlcnR5KHByb3BzLmN1cnJlbnRRdW90ZUlkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCc0MDQnKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVF1b3RlU3RhdHVzKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY3VycmVudFF1b3RlSWQgIT09IG5leHRQcm9wcy5jdXJyZW50UXVvdGVJZCkge1xuICAgICAgdGhpcy51cGRhdGVRdW90ZVN0YXR1cyhuZXh0UHJvcHMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVF1b3RlU3RhdHVzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gcHJvcHMubG9jYXRpb24ucXVlcnkuZnJvbV90dF9tYWlsZXIgfHwgJzAnO1xuXG4gICAgcHJvcHMudXBkYXRlUXVvdGVTdGF0cyh7IHRyaXBJZDogcHJvcHMudHJpcElkLCBxdW90ZUlkOiBwcm9wcy5jdXJyZW50UXVvdGVJZCwgc291cmNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59XG5cblFkcEFzeW5jLnByb3BUeXBlcyA9IHtcbiAgbGF5b3V0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHF1b3RlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBxdW90ZVRpbWVSZW1haW5pbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVudFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB1cGRhdGVRdW90ZVN0YXRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ3Jvd2luZ01hcmtldC5jbS5zY3NzJztcblxuaW1wb3J0IHtQYXJ0UGF5LCBJbGx1c1RyYXZlbGVyLCAgSWxsdXNNb25leVNhZmUsICBJbGx1c1F1YWxpdHlDaGVjaywgIElsbHVzU3VwcG9ydH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jbGFzcyBHcm93aW5nTWFya2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCBzYmN3IHJlbGF0aXZlIHAzMiAke3N0eWxlcy5rZXlQb2ludHN9YH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdzkgZjIwIHRleHQtY2VudGVyIHByMjQgcGwyNFwiPkZhc3Rlc3QgR3Jvd2luZyBIb2xpZGF5IE1hcmtldHBsYWNlPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQ4IG1iMjRcIj5FYXN5LiBTZWN1cmUuIFJlbGlhYmxlPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgdGV4dC1jZW50ZXIgbWIyNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XG4gICAgICAgICAgICAgIDxQYXJ0UGF5Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGg2PlBhcnRpYWwgUGF5bWVudCA8L2g2PlxuICAgICAgICAgICAgPHA+RmFjaWxpdHk8L3A+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHRleHQtY2VudGVyIG1iMjRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICAgICAgICA8SWxsdXNUcmF2ZWxlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoNj4yMiBMYWMrICA8L2g2PlxuICAgICAgICAgICAgPHA+SGFwcHkgVHJhdmVsbGVyczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHRleHQtY2VudGVyIG1iMjRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICAgICAgICA8SWxsdXNNb25leVNhZmUvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDY+VHJhdmVsIFRyaWFuZ2xlIDwvaDY+XG4gICAgICAgICAgICA8cD4gVmVyaWZpZWQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiB0ZXh0LWNlbnRlciBtYjI0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cbiAgICAgICAgICAgICAgPElsbHVzUXVhbGl0eUNoZWNrLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGg2PlN0cmluZ2VudCBRdWFsaXR5IDwvaDY+XG4gICAgICAgICAgICA8cD4gQ29udHJvbDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XG4gICAgICAgICAgICAgIDxJbGx1c1N1cHBvcnQvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDY+MjQvNyAgPC9oNj5cbiAgICAgICAgICAgIDxwPlN1cHBvcnQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm93aW5nTWFya2V0O1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJrZXlQb2ludHNcIjogXCJfMzRndmxfNjRIU2tNX2dITVhuRmttRFwiLFxuXHRcImltYWdlXCI6IFwiUzh0WWVtOU42bEhGb3RiT0NHam5vXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RoaW5nc1RvQ2hlY2suY20uc2Nzcyc7XG5pbXBvcnQgeyBCdWRnZXRJY29uTmV3LCBUaWNrZXRzSWNvbiwgSG90ZWwsIFRlbXBvdHJhdmVsZXIsIENhYiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY2xhc3MgVGhpbmdzVG9DaGVjayBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNiYzcgZnc5IHNmYzggdGV4dC1jZW50ZXIgcDI0IGYyMCBwcjQ4IHBsNDhcIj5UaGluZ3MgdG8gY2hlY2sgd2hpbGUgY29tcGFyaW5nIHF1b3RlczwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIHNiY3cgcDE1IHB0MCBwYjAgJHtzdHlsZXMubGlzdH1gfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggcDE1IHBsNSBiYiBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PjxCdWRnZXRJY29uTmV3IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgQWxsIHRheGVzIGFyZSBpbmNsdWRlZCBvciBub3RcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggcDE1IHBsNSBiYiBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PjxUaWNrZXRzSWNvbiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIEVudHJ5IHRpY2tldHMgZm9yIGFjdGl2aXRpZXNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggcDE1IHBsNSBiYiBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PjxIb3RlbCAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIEhvdGVsIHJhdGluZyAmIHJvb20gY2F0ZWdvcnlcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggcDE1IHBsNSBiYiBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PjxUZW1wb3RyYXZlbGVyIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgVHlwZSBvZiB0cmFuc3BvcnQsIFByaXZhdGUgdnMgUHVibGljXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IHAxNSBwbDUgYWxpZ25DZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT48Q2FiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgVHlwZSBvZiBjYXIsIEhhdGNoYmFjayB2cyBTZWRhbiBldGMuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhpbmdzVG9DaGVjaztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RcIjogXCJfMWJDemJvRlllajIzbE9VSEpuVVNFd1wiLFxuXHRcImltYWdlXCI6IFwiXzJHOHA3RnlzbTlRd2wtQ2ticzdaNnBcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9