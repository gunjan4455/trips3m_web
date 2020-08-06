require("source-map-support").install();
exports.ids = ["quote-list"];
exports.modules = {

/***/ "./app-v2/modules/quote/ctas/BookNow.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/quote/ctas/BookNow.js ***!
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

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let BookNow = class BookNow extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleBookNow = () => {
      const {
        tripId,
        quoteId
      } = this.props;
      this.props.callbackHandler(_EventTypes.default.BOOK_NOW, {
        tripId,
        quoteId
      });
    }, _temp;
  }

  render() {
    const {
      isQuoteCardCta
    } = this.props;
    return _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("button", {
      className: isQuoteCardCta ? 'block p15 text-left wfull at_bookNow' : 'wfull btn-pri-large ripple pl5 pr5 at_bookNow',
      onClick: this.handleBookNow
    }, "Book Now"));
  }

};
BookNow.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  opsDetail: _propTypes.default.object,
  callbackHandler: _propTypes.default.func,
  trackSegment: _propTypes.default.func,
  isQuoteCardCta: _propTypes.default.bool
};
BookNow.defaultProps = {
  opsDetail: {},
  callbackHandler: () => {},
  trackSegment: () => {},
  isQuoteCardCta: false
};
var _default = BookNow;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/ReactivateQuote.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/ctas/ReactivateQuote.js ***!
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

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'Reactivate Quote';

const ReactivateQuote = ({
  tripId,
  quoteId,
  loading,
  callbackHandler,
  isQuoteCardCta
}) => _react.default.createElement("div", {
  className: "flexFull flex"
}, _react.default.createElement("button", {
  className: isQuoteCardCta ? 'block p15 text-left wfull' : 'wfull btn-pri-large ripple pl5 pr5',
  disabled: loading,
  onClick: () => {
    callbackHandler(_EventTypes.default.REACTIVATE_QUOTE, {
      tripId,
      quoteId
    });
  }
}, CTA_TEXT));

ReactivateQuote.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  loading: _propTypes.default.bool,
  callbackHandler: _propTypes.default.func.isRequired,
  isQuoteCardCta: _propTypes.default.bool
};
ReactivateQuote.defaultProps = {
  isQuoteCardCta: false,
  loading: false
};
var _default = ReactivateQuote;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/helpers.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/quote/helpers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showStatusRibbon = exports.statusToShow = exports.quoteStatusText = exports.quoteStatusClasses = void 0;

var _quoteStatus = __webpack_require__(/*! constants/quoteStatus */ "./app/constants/quoteStatus.js");

const quoteStatusClasses = status => {
  let statusClassNames = 'quotesStatus';

  switch (status) {
    case _quoteStatus.QUOTE_STATUS.CONVERTED:
      {
        statusClassNames += ' convertedQuote sbc1';
        break;
      }

    case _quoteStatus.QUOTE_STATUS.CHOSEN:
    case _quoteStatus.QUOTE_STATUS.INVOICED:
    case _quoteStatus.QUOTE_STATUS.ACTIVE:
      {
        statusClassNames += ' activeQuote sbc3';
        break;
      }

    case _quoteStatus.QUOTE_STATUS.DECLINED:
      {
        statusClassNames += ' rejectedQuote';
        break;
      }

    case _quoteStatus.QUOTE_STATUS.CANCELED:
      {
        statusClassNames += ' cancelledQuote';
        break;
      }

    default:
      {
        statusClassNames += '';
      }
  }

  return statusClassNames;
};

exports.quoteStatusClasses = quoteStatusClasses;

const quoteStatusText = text => {
  switch (text) {
    case _quoteStatus.QUOTE_STATUS.PAYMENT:
    case _quoteStatus.QUOTE_STATUS.CONVERTED:
      text = 'Booked';
      break;

    case _quoteStatus.QUOTE_STATUS.CANCELED:
    case _quoteStatus.QUOTE_STATUS.DECLINED:
      text = 'Rejected';
      break;

    case _quoteStatus.QUOTE_STATUS.CHOSEN:
      text = 'Invoice Awaited';
      break;

    case _quoteStatus.QUOTE_STATUS.INVOICED:
      text = 'Invoice Generated';
      break;

    case _quoteStatus.QUOTE_STATUS.ACTIVE:
      text = 'Active';
      break;
  }

  return text;
}; // show status in quote box for below cases only


exports.quoteStatusText = quoteStatusText;
const statusToShow = [_quoteStatus.QUOTE_STATUS.PAYMENT, _quoteStatus.QUOTE_STATUS.CONVERTED, _quoteStatus.QUOTE_STATUS.CANCELED, _quoteStatus.QUOTE_STATUS.DECLINED, _quoteStatus.QUOTE_STATUS.CHOSEN, _quoteStatus.QUOTE_STATUS.INVOICED, _quoteStatus.QUOTE_STATUS.ACTIVE];
exports.statusToShow = statusToShow;

const showStatusRibbon = status => {
  return statusToShow.indexOf(status.toString()) > -1;
};

exports.showStatusRibbon = showStatusRibbon;

/***/ }),

/***/ "./app-v2/modules/quote/list/QuotesReceived.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/quote/list/QuotesReceived.js ***!
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

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

var _QuoteBox = _interopRequireDefault(__webpack_require__(/*! ./components/QuoteBox */ "./app-v2/modules/quote/list/components/QuoteBox.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _requestMoreQuote = _interopRequireDefault(__webpack_require__(/*! modules/quote/popups/requestMoreQuote */ "./app-v2/modules/quote/popups/requestMoreQuote/index.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _rosterTypes = __webpack_require__(/*! constants/rosterTypes */ "./app/constants/rosterTypes.js");

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let QuotesReceived = (_temp = _class = class QuotesReceived extends _react.default.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.callbackHandler = this.callbackHandler.bind(this);
    this.state = {
      openModal: false,
      closeModal: true
    };
    this.isEventTracked = false;
  }

  componentDidMount() {
    this.fetchQuotesComments(this.props);
    this.props.fetchQuotesConstants();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.moreQuotesRequested && nextProps.moreQuotesRequested) {
      this.props.showRoster({
        type: _rosterTypes.INFO_ROSTER,
        message: 'Thank you for your feedback! Our agent shall be get back to you with more quotes soon.'
      });
    }
  }

  render() {
    const {
      currentTripId,
      quotes,
      sortOrder,
      userDetails,
      quotesComments,
      bookNow,
      quoteRejectionReasons,
      trackSegment
    } = this.props;

    if (!Object.keys(quotes).length) {
      return null;
    }

    return _react.default.createElement("div", null, sortOrder && sortOrder.map((quoteId, index) => _react.default.createElement(_QuoteBox.default, {
      key: quoteId,
      cardIndex: index,
      tripId: currentTripId,
      quote: quotes[quoteId],
      comments: quotesComments[quoteId],
      userDetails: userDetails,
      bookNow: bookNow,
      quoteRejectionReasons: quoteRejectionReasons,
      callbackHandler: this.callbackHandler,
      trackSegment: this.trackSegmentEvent
    })), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: this.onSensorChange,
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw p15 at_requestMore_section"
    }, _react.default.createElement("p", {
      className: "f14 mb5 pfc3 text-center"
    }, "Not satisfied with the quote?"), _react.default.createElement("div", {
      className: "btn-sec-load wfull at_requestMore",
      onClick: this.handleRequestMore
    }, "Request More Quotes"), _react.default.createElement(_GenericModal.default, {
      trigger: null,
      isOpen: this.state.openModal,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.closePopup
    }, _react.default.createElement(_requestMoreQuote.default, {
      constants: this.props.constants.requestMoreQuotesOptions,
      handleCancel: this.handleCancel,
      onSubmit: this.handleSubmit,
      trackSegment: this.trackSegmentEvent
    })))));
  }

}, _class.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  quotes: _propTypes.default.object,
  quotesComments: _propTypes.default.object,
  userDetails: _propTypes.default.object.isRequired,
  layout: _propTypes.default.object,
  sortOrder: _propTypes.default.array,
  moreQuotesRequested: _propTypes.default.bool,
  location: _propTypes.default.object,
  quoteRejectionReasons: _propTypes.default.object,
  constants: _propTypes.default.object,
  fetchQuotes: _propTypes.default.func,
  fetchQuotesConstants: _propTypes.default.func.isRequired,
  fetchQuotesComments: _propTypes.default.func.isRequired,
  bookNow: _propTypes.default.func.isRequired,
  rejectQuote: _propTypes.default.func.isRequired,
  reactivateQuote: _propTypes.default.func.isRequired,
  fetchDiscountOffers: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func,
  showRoster: _propTypes.default.func,
  requestMoreQuotes: _propTypes.default.func
}, _class.defaultProps = {
  loaded: false,
  layout: {},
  quotesComments: {},
  trackSegment: () => {}
}, _initialiseProps = function () {
  this.openPopup = () => {
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

  this.handleSubmit = values => {
    this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Request more quotes pop up', 'Request quotes');
    this.props.requestMoreQuotes(this.props.currentTripId, values, {}, this.props.location.search);
    this.closePopup();
  };

  this.fetchQuotesComments = props => {
    const quoteIds = Object.keys(props.quotes).map(quoteId => {
      return quoteId;
    });
    props.fetchQuotesComments({
      tripId: props.currentTripId,
      quoteIds
    });
  };

  this.callbackHandler = (type, data = {}) => {
    switch (type) {
      case _EventTypes.default.BOOK_NOW:
        this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Book now pop up', 'Continue', '', '', data.quoteId, 'quote id');
        this.props.bookNow(data);
        break;

      case _EventTypes.default.REJECT_QUOTE:
        this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Reject quote pop up', 'Reject quote', `${data.reason}::${data.reasonText}`, 'reason index::reason text', data.quoteId, 'quote id');
        this.props.rejectQuote(data);
        break;

      case _EventTypes.default.REACTIVATE_QUOTE:
        this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Quotes section', 'Reactivate quote', '', '', data.quoteId, 'quote id');
        this.props.reactivateQuote(data);
        break;
    }
  };

  this.handleRequestMore = () => {
    this.openPopup();
    this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Request more quotes section', 'Request more quotes');
  };

  this.handleCancel = () => {
    this.closePopup();
    this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Request more quotes pop up', 'Cancel');
  };

  this.trackSegmentEvent = (event, section, cta, miscId1, miscType1, miscId2, miscType2) => {
    (0, _utils.rescue)(() => {
      this.props.trackSegment({
        event,
        section,
        object: '',
        cta,
        miscId1,
        miscType1,
        miscId2,
        miscType2
      });
    });
  };

  this.onSensorChange = isVisible => {
    if (isVisible && !this.isEventTracked) {
      this.isEventTracked = true;
      this.trackSegmentEvent(_segmentEvents.ORGANISM_VIEWED, 'Request more quotes section', '');
    }
  };
}, _temp);
exports.default = QuotesReceived;

/***/ }),

/***/ "./app-v2/modules/quote/list/components/AgentDetail.js":
/*!*************************************************************!*\
  !*** ./app-v2/modules/quote/list/components/AgentDetail.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Avatar = _interopRequireDefault(__webpack_require__(/*! modules/shared/Avatar */ "./app-v2/modules/shared/Avatar.js"));

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AgentDetail = ({
  agent
}) => _react.default.createElement("div", {
  className: "flex alignCenter"
}, _react.default.createElement(_Avatar.default, {
  imagePath: agent.imageUrl,
  name: agent.name
}), _react.default.createElement("div", {
  className: "flexFull"
}, _react.default.createElement("h6", {
  className: "pfc3 f14 fw9 mb5 at_agentName"
}, agent.name), _react.default.createElement("div", {
  className: "mb5 flex alignCenter"
}, agent.star ? _react.default.createElement("div", null, _react.default.createElement(_RatingStar.default, {
  rating: agent.star
})) : null), _react.default.createElement("p", {
  className: "f14 m0"
}, _react.default.createElement("span", {
  className: "pfc3 at_tripCount"
}, `${agent.tripsSold} Trips`), _react.default.createElement("span", {
  className: "ml5 mr5"
}, "|"), _react.default.createElement("span", {
  className: "pfc3 at_ReviewsCount"
}, `${agent.reviewsCount} Reviews`))));

AgentDetail.propTypes = {
  agent: _propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
    name: _propTypes.default.string.isRequired,
    tripsSold: _propTypes.default.number.isRequired,
    email: _propTypes.default.string.isRequired,
    phoneNumber: _propTypes.default.string,
    imageUrl: _propTypes.default.string.isRequired,
    star: _propTypes.default.number,
    reviewsCount: _propTypes.default.number,
    reviewLink: _propTypes.default.string
  })
};
AgentDetail.defaultProps = {
  agent: {
    star: 0,
    reviewsCount: 0,
    reviewLink: ''
  }
};
var _default = AgentDetail;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/list/components/BookNow.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/quote/list/components/BookNow.js ***!
  \*********************************************************/
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

let BookNowPopup = class BookNowPopup extends _react.PureComponent {
  render() {
    const {
      agent,
      priceInfo,
      closeModal,
      bookNow
    } = this.props;
    return _react.default.createElement("div", {
      className: "pt24 pl15 pr15 pb24"
    }, _react.default.createElement("div", {
      className: "f14 sfc6 at_agentInfo"
    }, `You are booking quote by Agent ${agent.name} priced at ${priceInfo.price} (${priceInfo.perPerson === 'per person' ? 'per person' : ' total'}).`), _react.default.createElement("div", {
      className: "pt24 text-right"
    }, _react.default.createElement("button", {
      className: "mr24 sfc6 fw7 at_closeModal",
      onClick: closeModal
    }, "Cancel"), _react.default.createElement("button", {
      className: "sfc1 fw7 at_continue",
      onClick: bookNow
    }, "Continue")));
  }

};
BookNowPopup.propTypes = {
  agent: _propTypes.default.object,
  priceInfo: _propTypes.default.object,
  closeModal: _propTypes.default.func,
  bookNow: _propTypes.default.func
};
var _default = BookNowPopup;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/list/components/QuoteBox.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/quote/list/components/QuoteBox.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _helpers = __webpack_require__(/*! ../../helpers */ "./app-v2/modules/quote/helpers.js");

var _quoteList = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _BookNow = _interopRequireDefault(__webpack_require__(/*! ../../ctas/BookNow */ "./app-v2/modules/quote/ctas/BookNow.js"));

var _RejectQuote = _interopRequireDefault(__webpack_require__(/*! ../../ctas/RejectQuote */ "./app-v2/modules/quote/ctas/RejectQuote.js"));

var _ReactivateQuote = _interopRequireDefault(__webpack_require__(/*! ../../ctas/ReactivateQuote */ "./app-v2/modules/quote/ctas/ReactivateQuote.js"));

var _QuotePrice = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/price/QuotePrice */ "./app-v2/modules/quote/shared/price/QuotePrice.js"));

var _AgentOnlineIndicator = _interopRequireDefault(__webpack_require__(/*! modules/shared/agentProfile/AgentOnlineIndicator */ "./app-v2/modules/shared/agentProfile/AgentOnlineIndicator.js"));

var _AgentDetail = _interopRequireDefault(__webpack_require__(/*! ./AgentDetail */ "./app-v2/modules/quote/list/components/AgentDetail.js"));

var _BookNow2 = _interopRequireDefault(__webpack_require__(/*! ./BookNow */ "./app-v2/modules/quote/list/components/BookNow.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GQuoteBoxDiv = _glamorous.default.div({
  boxShadow: '0 0 4px #f2f2f2'
});

const GQuoteStatusDiv = _glamorous.default.div({
  '& .quoteStatus': {
    height: '16px'
  }
});

const GDotButton = _glamorous.default.span({
  width: '4px',
  height: '4px'
});

const OpenTooltipPop = _glamorous.default.div({
  ':hover > .changeIcon span': {
    backgroundColor: '#009688'
  },
  ':hover > .openTooltip': {
    display: 'block'
  }
});

const GQuoteCtasDiv = _glamorous.default.div({
  boxShadow: '0 0 6px #ccc',
  minWidth: '200px',
  top: '-10px',
  display: 'none'
});

const GOfferSpan = _glamorous.default.span({
  background: '#b7dfb9',
  height: '16px',
  lineHeight: '16px'
});

let QuoteBox = (_temp = _class = class QuoteBox extends _react.default.Component {
  static renderQuoteStatus(status) {
    return (0, _helpers.showStatusRibbon)(status) ? _react.default.createElement("span", {
      className: "pl5 pr5"
    }, (0, _helpers.quoteStatusText)(status)) : null;
  }

  constructor(props) {
    super(props);

    this.closePopup = () => {
      this.setState({
        closeModal: true,
        openModal: false
      });
    };

    this.openPopup = () => {
      this.props.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Quotes section', 'Book now', '', '', this.props.quote.id, 'quote id');
      this.setState({
        openModal: true,
        closeModal: false
      });
    };

    this.handleBookNow = () => {
      const {
        tripId,
        quote,
        callbackHandler
      } = this.props;
      callbackHandler(_EventTypes.default.BOOK_NOW, {
        tripId: tripId,
        quoteId: quote.id
      });
      this.closePopup();
    };

    this.onSensorChange = isVisible => {
      if (isVisible && !this.isEventTracked) {
        this.isEventTracked = true;
        this.props.trackSegment(_segmentEvents.ORGANISM_VIEWED, 'Quotes section', '', '', 'card index::days::agent rating::package price', '', 'quote id');
      }
    };

    this.handleQuoteClick = () => {
      const {
        quote,
        cardIndex
      } = this.props;
      const agentDetails = (0, _quoteList.getAgentDetails)(quote);
      this.props.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Quotes section', 'View quote', `${cardIndex + 1}::${quote.days}::${agentDetails.star}::${quote.pricingInfo.totalPrice}`, 'card index::days::agent rating::package price', quote.id, 'quote id');
    };

    this.state = {
      openModal: false,
      closeModal: true
    };
    this.isEventTracked = false;
  }

  renderQuoteCta(quoteStatus) {
    const {
      tripId,
      quote,
      callbackHandler,
      quoteRejectionReasons,
      trackSegment
    } = this.props;

    if (quoteStatus.isRejected) {
      return _react.default.createElement(_ReactivateQuote.default, {
        callbackHandler: callbackHandler,
        tripId: tripId,
        quoteId: quote.id,
        key: "cta-reactivate-quote",
        isQuoteCardCta: true
      });
    } else if (quoteStatus.isInvoiced || quoteStatus.isInvoiceRequested) {
      return _react.default.createElement(_RejectQuote.default, {
        quoteRejectionReasons: quoteRejectionReasons,
        trackSegment: trackSegment,
        callbackHandler: callbackHandler,
        tripId: tripId,
        quoteId: quote.id,
        key: "cta-reject-quote",
        isQuoteCardCta: true
      });
    } else {
      return _react.default.createElement("div", null, _react.default.createElement(_RejectQuote.default, {
        quoteRejectionReasons: quoteRejectionReasons,
        trackSegment: trackSegment,
        callbackHandler: callbackHandler,
        tripId: tripId,
        quoteId: quote.id,
        key: "cta-reject-quote",
        isQuoteCardCta: true
      }), _react.default.createElement(_BookNow.default, {
        callbackHandler: this.openPopup,
        tripId: tripId,
        quoteId: quote.id,
        key: "cta-book-now",
        isQuoteCardCta: true
      }));
    }
  }

  render() {
    const {
      tripId,
      quote,
      userDetails,
      comments
    } = this.props;
    const agentDetails = (0, _quoteList.getAgentDetails)(quote);
    const priceInformation = (0, _quoteList.getPriceInformation)(quote);
    const discountInformation = (0, _quoteList.getDiscountInformation)(quote);
    const qdpPath = (0, _urlHelpers.quoteDetailPath)(tripId, quote.id);
    const commentsCount = comments && comments.commentsCount;
    const quoteStatus = (0, _quoteList.getCurrentQuoteStatuses)(quote);
    return _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: this.onSensorChange,
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement(GQuoteBoxDiv, {
      className: "sbcw m8 pl15 pr15 pt8 pb8 radius2 relative at_quoteCard"
    }, quoteStatus.isRequestCancelled || quoteStatus.isCancelled || quoteStatus.isConverted ? null : _react.default.createElement(OpenTooltipPop, {
      className: "iblock icon-18 fright z10 text-center"
    }, _react.default.createElement("div", {
      className: "z10 icon-18 changeIcon at_tooltip"
    }, _react.default.createElement(GDotButton, {
      className: "pbc4 absolute radius100"
    }), _react.default.createElement(GDotButton, {
      className: "pbc4 t8 b1 absolute radius100"
    }), _react.default.createElement(GDotButton, {
      className: "pbc4 t15 absolute radius100"
    })), _react.default.createElement(GQuoteCtasDiv, {
      className: `at_tooltipPopup absolute r0 sbcw z2 openTooltip`
    }, this.renderQuoteCta(quoteStatus))), _react.default.createElement("div", {
      className: "flex alignCenter mb15"
    }, _react.default.createElement(_AgentOnlineIndicator.default, {
      showPresenceMessage: true,
      userId: quote.agent.id,
      userDetails: userDetails
    }), commentsCount ? _react.default.createElement("span", {
      className: "flex ml8 at_messagesNew f12 pfc4"
    }, _react.default.createElement("span", {
      className: "icon-18 mr4 iblock"
    }, _react.default.createElement(_Icon.ChatIconGrey, null)), " ", commentsCount, " chat message", commentsCount > 1 ? 's' : '') : ''), _react.default.createElement(_reactRouter.Link, {
      to: qdpPath,
      className: "at_agentDetails",
      onClick: this.handleQuoteClick
    }, _react.default.createElement(_AgentDetail.default, {
      agent: agentDetails,
      userDetails: userDetails
    })), _react.default.createElement("div", null, _react.default.createElement(_GenericModal.default, {
      trigger: null,
      isOpen: this.state.openModal,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.closePopup
    }, _react.default.createElement(_BookNow2.default, {
      agent: agentDetails,
      priceInfo: priceInformation,
      closeModal: this.closePopup,
      bookNow: this.handleBookNow
    }))), _react.default.createElement(GQuoteStatusDiv, {
      className: "flexFull bt pt15 mt8 mb8"
    }, _react.default.createElement("p", {
      className: `quoteStatus radius20 pbc4 iblock  sfcw f12 pl15 pr15 at_quoteStatus ${(0, _helpers.quoteStatusClasses)(quote.status)}`
    }, QuoteBox.renderQuoteStatus(quote.status)), discountInformation.discount > 0 ? _react.default.createElement(GOfferSpan, {
      className: "fright radius20 iblock  sfc6 f10 pl15 pr15"
    }, "Offer Applied") : ''), _react.default.createElement("div", {
      className: "flex spaceBetween alignCenter"
    }, _react.default.createElement("div", {
      className: "f12 pfc4 at_updatedHours"
    }, `Updated ${(0, _DateTime.timeFromNow)(quote.updatedAt)}`), _react.default.createElement("div", null, _react.default.createElement(_QuotePrice.default, _extends({}, priceInformation, discountInformation))))));
  }

}, _class.propTypes = {
  tripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  cardIndex: _propTypes.default.number.isRequired,
  quote: _propTypes.default.object.isRequired,
  comments: _propTypes.default.object,
  userDetails: _propTypes.default.object.isRequired,
  callbackHandler: _propTypes.default.func,
  bookNow: _propTypes.default.func.isRequired,
  quoteRejectionReasons: _propTypes.default.object,
  trackSegment: _propTypes.default.func
}, _class.defaultProps = {}, _temp);
var _default = QuoteBox;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/list/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/quote/list/index.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _auth = __webpack_require__(/*! reducers/auth */ "./app/reducers/auth.js");

var _quoteList = __webpack_require__(/*! ../actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _constants = __webpack_require__(/*! ../actions/constants */ "./app-v2/modules/quote/actions/constants.js");

var _quoteComments = __webpack_require__(/*! ../actions/quoteComments */ "./app-v2/modules/quote/actions/quoteComments.js");

var _quoteActivities = __webpack_require__(/*! ../actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _action = __webpack_require__(/*! modules/discountEngine/action */ "./app-v2/modules/discountEngine/action.js");

var _QuotesReceived = _interopRequireDefault(__webpack_require__(/*! ./QuotesReceived */ "./app-v2/modules/quote/list/QuotesReceived.js"));

var _constants2 = __webpack_require__(/*! modules/quote/reducers/constants */ "./app-v2/modules/quote/reducers/constants.js");

var _action2 = __webpack_require__(/*! modules/roster/action */ "./app-v2/modules/roster/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stateFunc = state => ({
  currentTripId: state.trip.currentTrip.data.id,
  quotes: state.quote.list.data.quotes,
  sortOrder: state.quote.list.data.sortOrder,
  quotesComments: state.quote.comments.data,
  userDetails: (0, _auth.getUserDetails)(state),
  layout: state.layout.data.data,
  constants: state.trip.constants.constants,
  quoteRejectionReasons: (0, _constants2.getQuoteRejectionReasons)(state),
  moreQuotesRequested: state.quote.actions.moreQuotesRequested
});

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(stateFunc, {
  fetchQuotes: _quoteList.load,
  fetchQuotesConstants: _constants.load,
  fetchQuotesComments: _quoteComments.load,
  bookNow: _quoteActivities.bookNow,
  rejectQuote: _quoteActivities.rejectQuote,
  reactivateQuote: _quoteActivities.reactivateQuote,
  fetchDiscountOffers: _action.fetchDiscountOffers,
  requestMoreQuotes: _quoteActivities.requestMoreQuotes,
  pushState: _reactRouterRedux.push,
  showRoster: _action2.showRoster
})(_QuotesReceived.default));
var _default = {
  container,
  actions: {
    fetchQuotes: _quoteList.load
  },
  defaultAction: _quoteList.load
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/popups/requestMoreQuote/index.js":
/*!***************************************************************!*\
  !*** ./app-v2/modules/quote/popups/requestMoreQuote/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const renderRadioButton = ({
  input,
  options,
  meta: {
    touched,
    error
  },
  onClickHandler
}) => _react.default.createElement("div", null, touched && error && _react.default.createElement("span", {
  className: "f14 fw7 mt8 mb0",
  style: {
    color: 'red'
  }
}, "Please select a reason."), options ? options.map(option => _react.default.createElement("div", {
  className: "mb8",
  key: option.id
}, _react.default.createElement("input", _extends({
  name: input.name,
  type: "radio"
}, input, {
  className: "radio-common-circle checkbox-round",
  id: `feedback${option.id}`,
  value: option.id,
  checked: option.id === input.value,
  onClick: onClickHandler
})), _react.default.createElement("label", {
  className: "iblock wfull f14 sfc6 mb8 mt8",
  htmlFor: `feedback${option.id}`
}, _react.default.createElement("div", {
  className: "pl3"
}, option.name)))) : null);

renderRadioButton.propTypes = {
  input: _propTypes.default.object,
  meta: _propTypes.default.object,
  options: _propTypes.default.array,
  onClickHandler: _propTypes.default.func
};

const renderRejectReasonTextBox = ({
  input
}) => _react.default.createElement(TextArea, _extends({
  placeholder: "Write Here ",
  className: "border p8 mb8"
}, input));

renderRejectReasonTextBox.propTypes = {
  input: _propTypes.default.object
};

const TextArea = _glamorous.default.textarea({
  height: '76px',
  marginLeft: '30px',
  resize: 'none',
  width: '80%'
});

const GScrollDiv = _glamorous.default.div({
  height: '72vh'
});

let MoreQuotesForm = (_temp = _class = class MoreQuotesForm extends _react.default.Component {
  constructor(props) {
    super(props);

    this.handleOptionClick = e => e.target.value === '6' ? this.showOtherReason() : this.hideOtherReason();

    this.state = {
      isOtherReasonVisible: false
    };
    this.hideOtherReason = this.hideOtherReason.bind(this);
    this.showOtherReason = this.showOtherReason.bind(this);
  }

  hideOtherReason() {
    this.setState({
      isOtherReasonVisible: false
    });
  }

  showOtherReason() {
    this.setState({
      isOtherReasonVisible: true
    });
  }

  //other option
  render() {
    const otherReasonNode = this.state.isOtherReasonVisible ? _react.default.createElement(_reduxForm.Field, {
      component: renderRejectReasonTextBox,
      name: "otherReason"
    }) : null;
    const options = Object.keys(this.props.constants).map(key => {
      return {
        id: key,
        name: this.props.constants[key]
      };
    });

    const optionsField = _react.default.createElement(_reduxForm.Field, {
      name: "feedback",
      options: options,
      component: renderRadioButton,
      onClickHandler: e => this.handleOptionClick(e),
      validate: _formValidators.required
    });

    return _react.default.createElement("form", {
      onSubmit: this.props.handleSubmit
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(GScrollDiv, {
      className: "wfull overflowa"
    }, _react.default.createElement("div", {
      className: "col-md-12 sbcw z2 p0"
    }, _react.default.createElement("div", {
      className: "col-md-12 iblock"
    }, _react.default.createElement("div", {
      className: "p15 pb24 pt24"
    }, _react.default.createElement("p", {
      className: "f14 fw7 sfc6 mb0"
    }, "Please let us know why are you requesting for more quotes?"))), _react.default.createElement("div", {
      className: "col-md-12 p15 pt0"
    }, optionsField, otherReasonNode))), _react.default.createElement("div", {
      className: "col-md-12 p15  text-right pb24"
    }, _react.default.createElement("div", {
      className: "text-center iblock mr24"
    }, _react.default.createElement("span", {
      onClick: this.props.handleCancel,
      className: "sfc6 fw7"
    }, "Cancel")), _react.default.createElement("div", {
      className: "iblock"
    }, _react.default.createElement("button", {
      type: "submit",
      className: "sfc1 fw7 mr8 ml8"
    }, "Request Quotes")))));
  }

}, _class.propTypes = {
  handleSubmit: _propTypes.default.func,
  constants: _propTypes.default.object,
  handleCancel: _propTypes.default.func,
  meta: _propTypes.default.object
}, _temp);

var _default = (0, _reduxForm.reduxForm)({
  form: 'moreQuotesForm'
})(MoreQuotesForm);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/RatingStar.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/shared/RatingStar.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRatingUl = _glamorous.default.div({
  margin: '0',
  padding: '0',
  display: 'inline-block',
  '& li': {
    display: 'inline-block',
    marginRight: '6px',
    width: '10px',
    height: '10px',
    '&:last-child': {
      marginRight: '0'
    },
    '& svg': {
      width: '10px',
      height: '10px',
      display: 'block'
    }
  }
});

function getStars(Component, starNum, keyType) {
  let i = 0;
  const stars = [];

  while (i < starNum) {
    stars.push(_react.default.createElement("li", {
      key: keyType + i
    }, _react.default.createElement(Component, null)));
    i += 1;
  }

  return stars;
}

const RatingStar = ({
  rating,
  isEmptyStarsHidden
}) => {
  const stars = [];
  const ratingBarRange = 5;
  const truncatedRating = Math.trunc(rating);
  const fractionalRating = parseFloat((rating - truncatedRating).toFixed(1));
  let fullStarCount = 0;
  let halfStarCount = 0;

  if (fractionalRating === 0.0) {
    fullStarCount = rating;
  } else if (fractionalRating <= 0.5) {
    fullStarCount = truncatedRating;
    halfStarCount = 1;
  } else {
    fullStarCount = truncatedRating + 1;
  }

  const emptyStarCount = ratingBarRange - (fullStarCount + halfStarCount);
  stars.push(getStars(_Icon.StarIcon, fullStarCount, 'full_star'));
  stars.push(getStars(_Icon.HalfStar, halfStarCount, 'half_star')); // stars.push(getStars(StarIconEmpty, emptyStarCount, 'empty_star'));

  if (!isEmptyStarsHidden) {
    stars.push(getStars(_Icon.StarIconEmpty, emptyStarCount, 'empty_star'));
  }

  return _react.default.createElement(GRatingUl, {
    className: "rating-star-list at_rating"
  }, _react.default.createElement("ul", null, stars));
};

RatingStar.propTypes = {
  rating: _propTypes.default.number,
  isEmptyStarsHidden: _propTypes.default.bool
};
RatingStar.defaultProps = {
  rating: 0,
  isEmptyStarsHidden: false
};
var _default = RatingStar;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jdGFzL0Jvb2tOb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY3Rhcy9SZWFjdGl2YXRlUXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9saXN0L1F1b3Rlc1JlY2VpdmVkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2xpc3QvY29tcG9uZW50cy9BZ2VudERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9saXN0L2NvbXBvbmVudHMvQm9va05vdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9saXN0L2NvbXBvbmVudHMvUXVvdGVCb3guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9wb3B1cHMvcmVxdWVzdE1vcmVRdW90ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvUmF0aW5nU3Rhci5qcyJdLCJuYW1lcyI6WyJCb29rTm93IiwiQ29tcG9uZW50IiwiaGFuZGxlQm9va05vdyIsInRyaXBJZCIsInF1b3RlSWQiLCJwcm9wcyIsImNhbGxiYWNrSGFuZGxlciIsIkVWRU5UU19FTlVNUyIsIkJPT0tfTk9XIiwicmVuZGVyIiwiaXNRdW90ZUNhcmRDdGEiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib3BzRGV0YWlsIiwib2JqZWN0IiwiZnVuYyIsInRyYWNrU2VnbWVudCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJDVEFfVEVYVCIsIlJlYWN0aXZhdGVRdW90ZSIsImxvYWRpbmciLCJSRUFDVElWQVRFX1FVT1RFIiwicXVvdGVTdGF0dXNDbGFzc2VzIiwic3RhdHVzIiwic3RhdHVzQ2xhc3NOYW1lcyIsIlFVT1RFX1NUQVRVUyIsIkNPTlZFUlRFRCIsIkNIT1NFTiIsIklOVk9JQ0VEIiwiQUNUSVZFIiwiREVDTElORUQiLCJDQU5DRUxFRCIsInF1b3RlU3RhdHVzVGV4dCIsInRleHQiLCJQQVlNRU5UIiwic3RhdHVzVG9TaG93Iiwic2hvd1N0YXR1c1JpYmJvbiIsImluZGV4T2YiLCJ0b1N0cmluZyIsIlF1b3Rlc1JlY2VpdmVkIiwiUmVhY3QiLCJjb25zdHJ1Y3RvciIsImJpbmQiLCJzdGF0ZSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJpc0V2ZW50VHJhY2tlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hRdW90ZXNDb21tZW50cyIsImZldGNoUXVvdGVzQ29uc3RhbnRzIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJtb3JlUXVvdGVzUmVxdWVzdGVkIiwic2hvd1Jvc3RlciIsInR5cGUiLCJJTkZPX1JPU1RFUiIsIm1lc3NhZ2UiLCJjdXJyZW50VHJpcElkIiwicXVvdGVzIiwic29ydE9yZGVyIiwidXNlckRldGFpbHMiLCJxdW90ZXNDb21tZW50cyIsImJvb2tOb3ciLCJxdW90ZVJlamVjdGlvblJlYXNvbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJ0cmFja1NlZ21lbnRFdmVudCIsIm9uU2Vuc29yQ2hhbmdlIiwiaGFuZGxlUmVxdWVzdE1vcmUiLCJjbG9zZVBvcHVwIiwiY29uc3RhbnRzIiwicmVxdWVzdE1vcmVRdW90ZXNPcHRpb25zIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlU3VibWl0Iiwib25lT2ZUeXBlIiwic3RyaW5nIiwibGF5b3V0IiwiYXJyYXkiLCJsb2NhdGlvbiIsImZldGNoUXVvdGVzIiwicmVqZWN0UXVvdGUiLCJyZWFjdGl2YXRlUXVvdGUiLCJmZXRjaERpc2NvdW50T2ZmZXJzIiwicHVzaFN0YXRlIiwicmVxdWVzdE1vcmVRdW90ZXMiLCJsb2FkZWQiLCJvcGVuUG9wdXAiLCJzZXRTdGF0ZSIsInZhbHVlcyIsIk9SR0FOSVNNX0NMSUNLRUQiLCJzZWFyY2giLCJxdW90ZUlkcyIsImRhdGEiLCJRVU9URV9FVkVOVFNfRU5VTVMiLCJSRUpFQ1RfUVVPVEUiLCJyZWFzb24iLCJyZWFzb25UZXh0IiwiZXZlbnQiLCJzZWN0aW9uIiwiY3RhIiwibWlzY0lkMSIsIm1pc2NUeXBlMSIsIm1pc2NJZDIiLCJtaXNjVHlwZTIiLCJpc1Zpc2libGUiLCJPUkdBTklTTV9WSUVXRUQiLCJBZ2VudERldGFpbCIsImFnZW50IiwiaW1hZ2VVcmwiLCJuYW1lIiwic3RhciIsInRyaXBzU29sZCIsInJldmlld3NDb3VudCIsInNoYXBlIiwiaWQiLCJlbWFpbCIsInBob25lTnVtYmVyIiwicmV2aWV3TGluayIsIkJvb2tOb3dQb3B1cCIsIlB1cmVDb21wb25lbnQiLCJwcmljZUluZm8iLCJwcmljZSIsInBlclBlcnNvbiIsIkdRdW90ZUJveERpdiIsImdsYW1vcm91cyIsImRpdiIsImJveFNoYWRvdyIsIkdRdW90ZVN0YXR1c0RpdiIsImhlaWdodCIsIkdEb3RCdXR0b24iLCJzcGFuIiwid2lkdGgiLCJPcGVuVG9vbHRpcFBvcCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJHUXVvdGVDdGFzRGl2IiwibWluV2lkdGgiLCJ0b3AiLCJHT2ZmZXJTcGFuIiwiYmFja2dyb3VuZCIsImxpbmVIZWlnaHQiLCJRdW90ZUJveCIsInJlbmRlclF1b3RlU3RhdHVzIiwicXVvdGUiLCJoYW5kbGVRdW90ZUNsaWNrIiwiY2FyZEluZGV4IiwiYWdlbnREZXRhaWxzIiwiZGF5cyIsInByaWNpbmdJbmZvIiwidG90YWxQcmljZSIsInJlbmRlclF1b3RlQ3RhIiwicXVvdGVTdGF0dXMiLCJpc1JlamVjdGVkIiwiaXNJbnZvaWNlZCIsImlzSW52b2ljZVJlcXVlc3RlZCIsImNvbW1lbnRzIiwicHJpY2VJbmZvcm1hdGlvbiIsImRpc2NvdW50SW5mb3JtYXRpb24iLCJxZHBQYXRoIiwiY29tbWVudHNDb3VudCIsImlzUmVxdWVzdENhbmNlbGxlZCIsImlzQ2FuY2VsbGVkIiwiaXNDb252ZXJ0ZWQiLCJkaXNjb3VudCIsInVwZGF0ZWRBdCIsInN0YXRlRnVuYyIsInRyaXAiLCJjdXJyZW50VHJpcCIsImxpc3QiLCJhY3Rpb25zIiwiY29udGFpbmVyIiwicHVzaCIsIlF1b3Rlc1NlY3Rpb24iLCJkZWZhdWx0QWN0aW9uIiwicmVuZGVyUmFkaW9CdXR0b24iLCJpbnB1dCIsIm9wdGlvbnMiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwib25DbGlja0hhbmRsZXIiLCJjb2xvciIsIm9wdGlvbiIsInZhbHVlIiwicmVuZGVyUmVqZWN0UmVhc29uVGV4dEJveCIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJtYXJnaW5MZWZ0IiwicmVzaXplIiwiR1Njcm9sbERpdiIsIk1vcmVRdW90ZXNGb3JtIiwiaGFuZGxlT3B0aW9uQ2xpY2siLCJlIiwidGFyZ2V0Iiwic2hvd090aGVyUmVhc29uIiwiaGlkZU90aGVyUmVhc29uIiwiaXNPdGhlclJlYXNvblZpc2libGUiLCJvdGhlclJlYXNvbk5vZGUiLCJrZXkiLCJvcHRpb25zRmllbGQiLCJyZXF1aXJlZCIsImZvcm0iLCJHUmF0aW5nVWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibWFyZ2luUmlnaHQiLCJnZXRTdGFycyIsInN0YXJOdW0iLCJrZXlUeXBlIiwiaSIsInN0YXJzIiwiUmF0aW5nU3RhciIsInJhdGluZyIsImlzRW1wdHlTdGFyc0hpZGRlbiIsInJhdGluZ0JhclJhbmdlIiwidHJ1bmNhdGVkUmF0aW5nIiwiTWF0aCIsInRydW5jIiwiZnJhY3Rpb25hbFJhdGluZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZnVsbFN0YXJDb3VudCIsImhhbGZTdGFyQ291bnQiLCJlbXB0eVN0YXJDb3VudCIsIlN0YXJJY29uIiwiSGFsZlN0YXIiLCJTdGFySWNvbkVtcHR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7OztJQUVNQSxPLEdBQU4sTUFBTUEsT0FBTixTQUFzQkMsZ0JBQXRCLENBQWdDO0FBQUE7QUFBQTs7QUFBQSx3Q0FFOUJDLGFBRjhCLEdBRWQsTUFBTTtBQUNwQixZQUFNO0FBQUVDLGNBQUY7QUFBVUM7QUFBVixVQUFzQixLQUFLQyxLQUFqQztBQUNBLFdBQUtBLEtBQUwsQ0FBV0MsZUFBWCxDQUEyQkMsb0JBQWFDLFFBQXhDLEVBQWtEO0FBQUVMLGNBQUY7QUFBVUM7QUFBVixPQUFsRDtBQUNELEtBTDZCO0FBQUE7O0FBTzlCSyxXQUFTO0FBQ1AsVUFBTTtBQUFFQztBQUFGLFFBQXFCLEtBQUtMLEtBQWhDO0FBQ0EsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFRLGlCQUFXSyxpQkFBaUIsc0NBQWpCLEdBQTBELCtDQUE3RTtBQUE4SCxlQUFTLEtBQUtSO0FBQTVJLGtCQURGLENBREY7QUFPRDs7QUFoQjZCLEM7QUFtQmhDRixRQUFRVyxTQUFSLEdBQW9CO0FBQ2xCUixVQUFRUyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEUDtBQUVsQlYsV0FBU1EsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRlI7QUFHbEJDLGFBQVdILG1CQUFVSSxNQUhIO0FBSWxCVixtQkFBaUJNLG1CQUFVSyxJQUpUO0FBS2xCQyxnQkFBY04sbUJBQVVLLElBTE47QUFNbEJQLGtCQUFnQkUsbUJBQVVPO0FBTlIsQ0FBcEI7QUFTQW5CLFFBQVFvQixZQUFSLEdBQXVCO0FBQ3JCTCxhQUFXLEVBRFU7QUFFckJULG1CQUFpQixNQUFNLENBQ3RCLENBSG9CO0FBSXJCWSxnQkFBYyxNQUFNLENBQ25CLENBTG9CO0FBTXJCUixrQkFBZ0I7QUFOSyxDQUF2QjtlQVNlVixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDZjs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1xQixXQUFXLGtCQUFqQjs7QUFFQSxNQUFNQyxrQkFBa0IsQ0FBQztBQUNFbkIsUUFERjtBQUVFQyxTQUZGO0FBR0VtQixTQUhGO0FBSUVqQixpQkFKRjtBQUtFSTtBQUxGLENBQUQsS0FPdEI7QUFBSyxhQUFVO0FBQWYsR0FFSTtBQUNFLGFBQVdBLGlCQUFpQiwyQkFBakIsR0FBK0Msb0NBRDVEO0FBRUUsWUFBVWEsT0FGWjtBQUdFLFdBQVMsTUFBTTtBQUNiakIsb0JBQWdCQyxvQkFBYWlCLGdCQUE3QixFQUErQztBQUFFckIsWUFBRjtBQUFVQztBQUFWLEtBQS9DO0FBQ0Q7QUFMSCxHQU1HaUIsUUFOSCxDQUZKLENBUEY7O0FBcUJBQyxnQkFBZ0JYLFNBQWhCLEdBQTRCO0FBQzFCUixVQUFRUyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEQztBQUUxQlYsV0FBU1EsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkE7QUFHMUJTLFdBQVNYLG1CQUFVTyxJQUhPO0FBSTFCYixtQkFBaUJNLG1CQUFVSyxJQUFWLENBQWVILFVBSk47QUFLMUJKLGtCQUFnQkUsbUJBQVVPO0FBTEEsQ0FBNUI7QUFRQUcsZ0JBQWdCRixZQUFoQixHQUErQjtBQUM3QlYsa0JBQWdCLEtBRGE7QUFFN0JhLFdBQVM7QUFGb0IsQ0FBL0I7ZUFLZUQsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2Y7O0FBRU8sTUFBTUcscUJBQXNCQyxNQUFELElBQVk7QUFDNUMsTUFBSUMsbUJBQW1CLGNBQXZCOztBQUVBLFVBQVFELE1BQVI7QUFDRSxTQUFLRSwwQkFBYUMsU0FBbEI7QUFBNkI7QUFDM0JGLDRCQUFvQixzQkFBcEI7QUFDQTtBQUNEOztBQUNELFNBQUtDLDBCQUFhRSxNQUFsQjtBQUNBLFNBQUtGLDBCQUFhRyxRQUFsQjtBQUNBLFNBQUtILDBCQUFhSSxNQUFsQjtBQUEwQjtBQUN4QkwsNEJBQW9CLG1CQUFwQjtBQUNBO0FBQ0Q7O0FBQ0QsU0FBS0MsMEJBQWFLLFFBQWxCO0FBQTRCO0FBQzFCTiw0QkFBb0IsZ0JBQXBCO0FBQ0E7QUFDRDs7QUFDRCxTQUFLQywwQkFBYU0sUUFBbEI7QUFBNEI7QUFDMUJQLDRCQUFvQixpQkFBcEI7QUFDQTtBQUNEOztBQUNEO0FBQVM7QUFDUEEsNEJBQW9CLEVBQXBCO0FBQ0Q7QUFyQkg7O0FBd0JBLFNBQU9BLGdCQUFQO0FBQ0QsQ0E1Qk07Ozs7QUE4QkEsTUFBTVEsa0JBQW1CQyxJQUFELElBQVU7QUFDdkMsVUFBUUEsSUFBUjtBQUNFLFNBQUtSLDBCQUFhUyxPQUFsQjtBQUNBLFNBQUtULDBCQUFhQyxTQUFsQjtBQUNFTyxhQUFPLFFBQVA7QUFDQTs7QUFDRixTQUFLUiwwQkFBYU0sUUFBbEI7QUFDQSxTQUFLTiwwQkFBYUssUUFBbEI7QUFDRUcsYUFBTyxVQUFQO0FBQ0E7O0FBQ0YsU0FBS1IsMEJBQWFFLE1BQWxCO0FBQ0VNLGFBQU8saUJBQVA7QUFDQTs7QUFDRixTQUFLUiwwQkFBYUcsUUFBbEI7QUFDRUssYUFBTyxtQkFBUDtBQUNBOztBQUNGLFNBQUtSLDBCQUFhSSxNQUFsQjtBQUNFSSxhQUFPLFFBQVA7QUFDQTtBQWpCSjs7QUFvQkEsU0FBT0EsSUFBUDtBQUNELENBdEJNLEMsQ0F3QlA7Ozs7QUFDTyxNQUFNRSxlQUFlLENBQUNWLDBCQUFhUyxPQUFkLEVBQXVCVCwwQkFBYUMsU0FBcEMsRUFBK0NELDBCQUFhTSxRQUE1RCxFQUFzRU4sMEJBQWFLLFFBQW5GLEVBQzFCTCwwQkFBYUUsTUFEYSxFQUNMRiwwQkFBYUcsUUFEUixFQUNrQkgsMEJBQWFJLE1BRC9CLENBQXJCOzs7QUFHQSxNQUFNTyxtQkFBb0JiLE1BQUQsSUFBWTtBQUMxQyxTQUFPWSxhQUFhRSxPQUFiLENBQXFCZCxPQUFPZSxRQUFQLEVBQXJCLElBQTBDLENBQUMsQ0FBbEQ7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RFA7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkMsYyxxQkFBTixNQUFNQSxjQUFOLFNBQTZCQyxlQUFNMUMsU0FBbkMsQ0FBNkM7QUFxQzFEMkMsY0FBWXZDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUI7O0FBRWpCLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQnVDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEtBREE7QUFFWEMsa0JBQVk7QUFGRCxLQUFiO0FBSUEsU0FBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUNEOztBQUVEQyxzQkFBb0I7QUFDbEIsU0FBS0MsbUJBQUwsQ0FBeUIsS0FBSzlDLEtBQTlCO0FBQ0EsU0FBS0EsS0FBTCxDQUFXK0Msb0JBQVg7QUFDRDs7QUFFREMsbUNBQWlDQyxTQUFqQyxFQUE0QztBQUMxQyxRQUFJLENBQUMsS0FBS2pELEtBQUwsQ0FBV2tELG1CQUFaLElBQW1DRCxVQUFVQyxtQkFBakQsRUFBc0U7QUFDcEUsV0FBS2xELEtBQUwsQ0FBV21ELFVBQVgsQ0FBc0I7QUFDcEJDLGNBQU1DLHdCQURjO0FBRXBCQyxpQkFBUztBQUZXLE9BQXRCO0FBSUQ7QUFDRjs7QUE0RURsRCxXQUFTO0FBQ1AsVUFBTTtBQUNKbUQsbUJBREk7QUFDV0MsWUFEWDtBQUNtQkMsZUFEbkI7QUFDOEJDLGlCQUQ5QjtBQUVKQyxvQkFGSTtBQUVZQyxhQUZaO0FBRXFCQywyQkFGckI7QUFFNENoRDtBQUY1QyxRQUdGLEtBQUtiLEtBSFQ7O0FBS0EsUUFBSSxDQUFDOEQsT0FBT0MsSUFBUCxDQUFZUCxNQUFaLEVBQW9CUSxNQUF6QixFQUFpQztBQUMvQixhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUNFLDBDQUVJUCxhQUFhQSxVQUFVUSxHQUFWLENBQWMsQ0FBQ2xFLE9BQUQsRUFBVW1FLEtBQVYsS0FBb0IsNkJBQUMsaUJBQUQ7QUFBVSxXQUFLbkUsT0FBZjtBQUNILGlCQUFXbUUsS0FEUjtBQUVILGNBQVFYLGFBRkw7QUFHSCxhQUFPQyxPQUFPekQsT0FBUCxDQUhKO0FBSUgsZ0JBQVU0RCxlQUFlNUQsT0FBZixDQUpQO0FBS0gsbUJBQWEyRCxXQUxWO0FBTUgsZUFBU0UsT0FOTjtBQU9ILDZCQUF1QkMscUJBUHBCO0FBUUgsdUJBQWlCLEtBQUs1RCxlQVJuQjtBQVNILG9CQUFjLEtBQUtrRTtBQVRoQixNQUFsQyxDQUZqQixFQWFFLDZCQUFDLDhCQUFEO0FBQVEsZ0JBQVUsS0FBS0MsY0FBdkI7QUFDUSx5QkFBa0IsUUFEMUI7QUFFUSxtQkFBYTtBQUZyQixPQUdFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUcsaUJBQVU7QUFBYix1Q0FERixFQUlFO0FBQUssaUJBQVUsbUNBQWY7QUFBbUQsZUFBUyxLQUFLQztBQUFqRSw2QkFKRixFQUtFLDZCQUFDLHFCQUFEO0FBQ0UsZUFBUyxJQURYO0FBRUUsY0FBUSxLQUFLNUIsS0FBTCxDQUFXQyxTQUZyQjtBQUdFLDBCQUFvQixLQUFLRCxLQUFMLENBQVdFLFVBSGpDO0FBSUUsNEJBQXNCLEtBQUsyQjtBQUo3QixPQU1FLDZCQUFDLHlCQUFEO0FBQ0UsaUJBQVcsS0FBS3RFLEtBQUwsQ0FBV3VFLFNBQVgsQ0FBcUJDLHdCQURsQztBQUVFLG9CQUFjLEtBQUtDLFlBRnJCO0FBR0UsZ0JBQVUsS0FBS0MsWUFIakI7QUFJRSxvQkFBYyxLQUFLUDtBQUpyQixNQU5GLENBTEYsQ0FIRixDQWJGLENBREY7QUF3Q0Q7O0FBekx5RCxDLFNBQ25EN0QsUyxHQUFZO0FBQ2pCaUQsaUJBQWVoRCxtQkFBVW9FLFNBQVYsQ0FBb0IsQ0FDakNwRSxtQkFBVUMsTUFEdUIsRUFFakNELG1CQUFVcUUsTUFGdUIsQ0FBcEIsRUFHWm5FLFVBSmM7QUFLakIrQyxVQUFRakQsbUJBQVVJLE1BTEQ7QUFNakJnRCxrQkFBZ0JwRCxtQkFBVUksTUFOVDtBQU9qQitDLGVBQWFuRCxtQkFBVUksTUFBVixDQUFpQkYsVUFQYjtBQVFqQm9FLFVBQVF0RSxtQkFBVUksTUFSRDtBQVNqQjhDLGFBQVdsRCxtQkFBVXVFLEtBVEo7QUFVakI1Qix1QkFBcUIzQyxtQkFBVU8sSUFWZDtBQVdqQmlFLFlBQVV4RSxtQkFBVUksTUFYSDtBQVlqQmtELHlCQUF1QnRELG1CQUFVSSxNQVpoQjtBQWFqQjRELGFBQVdoRSxtQkFBVUksTUFiSjtBQWVqQnFFLGVBQWF6RSxtQkFBVUssSUFmTjtBQWdCakJtQyx3QkFBc0J4QyxtQkFBVUssSUFBVixDQUFlSCxVQWhCcEI7QUFpQmpCcUMsdUJBQXFCdkMsbUJBQVVLLElBQVYsQ0FBZUgsVUFqQm5CO0FBa0JqQm1ELFdBQVNyRCxtQkFBVUssSUFBVixDQUFlSCxVQWxCUDtBQW1CakJ3RSxlQUFhMUUsbUJBQVVLLElBQVYsQ0FBZUgsVUFuQlg7QUFvQmpCeUUsbUJBQWlCM0UsbUJBQVVLLElBQVYsQ0FBZUgsVUFwQmY7QUFxQmpCMEUsdUJBQXFCNUUsbUJBQVVLLElBQVYsQ0FBZUgsVUFyQm5CO0FBc0JqQjJFLGFBQVc3RSxtQkFBVUssSUFBVixDQUFlSCxVQXRCVDtBQXVCakJJLGdCQUFjTixtQkFBVUssSUF2QlA7QUF3QmpCdUMsY0FBWTVDLG1CQUFVSyxJQXhCTDtBQXlCakJ5RSxxQkFBbUI5RSxtQkFBVUs7QUF6QlosQyxTQTRCWkcsWSxHQUFlO0FBQ3BCdUUsVUFBUSxLQURZO0FBRXBCVCxVQUFRLEVBRlk7QUFHcEJsQixrQkFBZ0IsRUFISTtBQUlwQjlDLGdCQUFjLE1BQU0sQ0FDbkI7QUFMbUIsQztPQWdDdEIwRSxTLEdBQVksTUFBTTtBQUNoQixTQUFLQyxRQUFMLENBQWM7QUFBRTlDLGlCQUFXLElBQWI7QUFBbUJDLGtCQUFZO0FBQS9CLEtBQWQ7QUFDRCxHOztPQUVEMkIsVSxHQUFhLE1BQU07QUFDakIsU0FBS2tCLFFBQUwsQ0FBYztBQUFFN0Msa0JBQVksSUFBZDtBQUFvQkQsaUJBQVc7QUFBL0IsS0FBZDtBQUNELEc7O09BRURnQyxZLEdBQWdCZSxNQUFELElBQVk7QUFDekIsU0FBS3RCLGlCQUFMLENBQXVCdUIsK0JBQXZCLEVBQXlDLDRCQUF6QyxFQUF1RSxnQkFBdkU7QUFDQSxTQUFLMUYsS0FBTCxDQUFXcUYsaUJBQVgsQ0FBNkIsS0FBS3JGLEtBQUwsQ0FBV3VELGFBQXhDLEVBQ0VrQyxNQURGLEVBQ1UsRUFEVixFQUNjLEtBQUt6RixLQUFMLENBQVcrRSxRQUFYLENBQW9CWSxNQURsQztBQUVBLFNBQUtyQixVQUFMO0FBQ0QsRzs7T0FFRHhCLG1CLEdBQXVCOUMsS0FBRCxJQUFXO0FBQy9CLFVBQU00RixXQUFXOUIsT0FBT0MsSUFBUCxDQUFZL0QsTUFBTXdELE1BQWxCLEVBQTBCUyxHQUExQixDQUErQmxFLE9BQUQsSUFBYTtBQUMxRCxhQUFPQSxPQUFQO0FBQ0QsS0FGZ0IsQ0FBakI7QUFJQUMsVUFBTThDLG1CQUFOLENBQTBCO0FBQUVoRCxjQUFRRSxNQUFNdUQsYUFBaEI7QUFBK0JxQztBQUEvQixLQUExQjtBQUNELEc7O09BRUQzRixlLEdBQWtCLENBQUNtRCxJQUFELEVBQU95QyxPQUFPLEVBQWQsS0FBcUI7QUFFckMsWUFBUXpDLElBQVI7QUFDRSxXQUFLMEMsb0JBQW1CM0YsUUFBeEI7QUFDRSxhQUFLZ0UsaUJBQUwsQ0FBdUJ1QiwrQkFBdkIsRUFBeUMsaUJBQXpDLEVBQTRELFVBQTVELEVBQXdFLEVBQXhFLEVBQTRFLEVBQTVFLEVBQWdGRyxLQUFLOUYsT0FBckYsRUFBOEYsVUFBOUY7QUFDQSxhQUFLQyxLQUFMLENBQVc0RCxPQUFYLENBQW1CaUMsSUFBbkI7QUFDQTs7QUFDRixXQUFLQyxvQkFBbUJDLFlBQXhCO0FBQ0UsYUFBSzVCLGlCQUFMLENBQXVCdUIsK0JBQXZCLEVBQXlDLHFCQUF6QyxFQUFnRSxjQUFoRSxFQUNHLEdBQUVHLEtBQUtHLE1BQU8sS0FBSUgsS0FBS0ksVUFBVyxFQURyQyxFQUN3QywyQkFEeEMsRUFDcUVKLEtBQUs5RixPQUQxRSxFQUNtRixVQURuRjtBQUVBLGFBQUtDLEtBQUwsQ0FBV2lGLFdBQVgsQ0FBdUJZLElBQXZCO0FBQ0E7O0FBQ0YsV0FBS0Msb0JBQW1CM0UsZ0JBQXhCO0FBQ0UsYUFBS2dELGlCQUFMLENBQXVCdUIsK0JBQXZCLEVBQXlDLGdCQUF6QyxFQUEyRCxrQkFBM0QsRUFBK0UsRUFBL0UsRUFBbUYsRUFBbkYsRUFBdUZHLEtBQUs5RixPQUE1RixFQUFxRyxVQUFyRztBQUNBLGFBQUtDLEtBQUwsQ0FBV2tGLGVBQVgsQ0FBMkJXLElBQTNCO0FBQ0E7QUFiSjtBQWVELEc7O09BRUR4QixpQixHQUFvQixNQUFNO0FBQ3hCLFNBQUtrQixTQUFMO0FBQ0EsU0FBS3BCLGlCQUFMLENBQXVCdUIsK0JBQXZCLEVBQXlDLDZCQUF6QyxFQUF3RSxxQkFBeEU7QUFDRCxHOztPQUVEakIsWSxHQUFlLE1BQU07QUFDbkIsU0FBS0gsVUFBTDtBQUNBLFNBQUtILGlCQUFMLENBQXVCdUIsK0JBQXZCLEVBQXlDLDRCQUF6QyxFQUF1RSxRQUF2RTtBQUNELEc7O09BRUR2QixpQixHQUFvQixDQUFDK0IsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxHQUFqQixFQUFzQkMsT0FBdEIsRUFBK0JDLFNBQS9CLEVBQTBDQyxPQUExQyxFQUFtREMsU0FBbkQsS0FBaUU7QUFDbkYsdUJBQU8sTUFBTTtBQUNYLFdBQUt4RyxLQUFMLENBQVdhLFlBQVgsQ0FBd0I7QUFDdEJxRixhQURzQjtBQUV0QkMsZUFGc0I7QUFHdEJ4RixnQkFBUSxFQUhjO0FBSXRCeUYsV0FKc0I7QUFLdEJDLGVBTHNCO0FBTXRCQyxpQkFOc0I7QUFPdEJDLGVBUHNCO0FBUXRCQztBQVJzQixPQUF4QjtBQVVELEtBWEQ7QUFZRCxHOztPQUVEcEMsYyxHQUFrQnFDLFNBQUQsSUFBZTtBQUM5QixRQUFJQSxhQUFhLENBQUMsS0FBSzdELGNBQXZCLEVBQXVDO0FBQ3JDLFdBQUtBLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxXQUFLdUIsaUJBQUwsQ0FBdUJ1Qyw4QkFBdkIsRUFBd0MsNkJBQXhDLEVBQXVFLEVBQXZFO0FBQ0Q7QUFDRixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSkg7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQyxjQUFjLENBQUM7QUFDRUM7QUFERixDQUFELEtBRVE7QUFBSyxhQUFVO0FBQWYsR0FDeEIsNkJBQUMsZUFBRDtBQUFRLGFBQVdBLE1BQU1DLFFBQXpCO0FBQW1DLFFBQU1ELE1BQU1FO0FBQS9DLEVBRHdCLEVBRXhCO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSSxhQUFVO0FBQWQsR0FBK0NGLE1BQU1FLElBQXJELENBREYsRUFFRTtBQUFLLGFBQVU7QUFBZixHQUNHRixNQUFNRyxJQUFOLEdBQ0MsMENBQUssNkJBQUMsbUJBQUQ7QUFBWSxVQUFRSCxNQUFNRztBQUExQixFQUFMLENBREQsR0FDaUQsSUFGcEQsQ0FGRixFQU1FO0FBQUcsYUFBVTtBQUFiLEdBQ0k7QUFBTSxhQUFVO0FBQWhCLEdBQ0ksR0FBRUgsTUFBTUksU0FBVSxRQUR0QixDQURKLEVBSUU7QUFBTSxhQUFVO0FBQWhCLE9BSkYsRUFLRTtBQUFNLGFBQVU7QUFBaEIsR0FDTSxHQUFFSixNQUFNSyxZQUFhLFVBRDNCLENBTEYsQ0FORixDQUZ3QixDQUY1Qjs7QUF1QkFOLFlBQVlyRyxTQUFaLEdBQXdCO0FBQ3RCc0csU0FBT3JHLG1CQUFVMkcsS0FBVixDQUFnQjtBQUNyQkMsUUFBSTVHLG1CQUFVb0UsU0FBVixDQUFvQixDQUN0QnBFLG1CQUFVQyxNQURZLEVBRXRCRCxtQkFBVXFFLE1BRlksQ0FBcEIsRUFFaUJuRSxVQUhBO0FBSXJCcUcsVUFBTXZHLG1CQUFVcUUsTUFBVixDQUFpQm5FLFVBSkY7QUFLckJ1RyxlQUFXekcsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBTFA7QUFNckIyRyxXQUFPN0csbUJBQVVxRSxNQUFWLENBQWlCbkUsVUFOSDtBQU9yQjRHLGlCQUFhOUcsbUJBQVVxRSxNQVBGO0FBUXJCaUMsY0FBVXRHLG1CQUFVcUUsTUFBVixDQUFpQm5FLFVBUk47QUFTckJzRyxVQUFNeEcsbUJBQVVDLE1BVEs7QUFVckJ5RyxrQkFBYzFHLG1CQUFVQyxNQVZIO0FBV3JCOEcsZ0JBQVkvRyxtQkFBVXFFO0FBWEQsR0FBaEI7QUFEZSxDQUF4QjtBQWdCQStCLFlBQVk1RixZQUFaLEdBQTJCO0FBQ3pCNkYsU0FBTztBQUNMRyxVQUFNLENBREQ7QUFFTEUsa0JBQWMsQ0FGVDtBQUdMSyxnQkFBWTtBQUhQO0FBRGtCLENBQTNCO2VBUWVYLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRmOztBQUNBOzs7Ozs7SUFFTVksWSxHQUFOLE1BQU1BLFlBQU4sU0FBMkJDLG9CQUEzQixDQUF5QztBQUN2Q3BILFdBQVM7QUFDUCxVQUFNO0FBQUV3RyxXQUFGO0FBQVNhLGVBQVQ7QUFBb0I5RSxnQkFBcEI7QUFBZ0NpQjtBQUFoQyxRQUE0QyxLQUFLNUQsS0FBdkQ7QUFFQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNJLGtDQUFpQzRHLE1BQU1FLElBQUssY0FBYVcsVUFBVUMsS0FBTSxLQUFJRCxVQUFVRSxTQUFWLEtBQXdCLFlBQXhCLEdBQXVDLFlBQXZDLEdBQXNELFFBQVMsSUFEaEosQ0FERixFQUlFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQVEsaUJBQVUsNkJBQWxCO0FBQWdELGVBQVNoRjtBQUF6RCxnQkFERixFQUVFO0FBQVEsaUJBQVUsc0JBQWxCO0FBQXlDLGVBQVNpQjtBQUFsRCxrQkFGRixDQUpGLENBREY7QUFXRDs7QUFmc0MsQztBQWtCekMyRCxhQUFhakgsU0FBYixHQUF5QjtBQUN2QnNHLFNBQU9yRyxtQkFBVUksTUFETTtBQUV2QjhHLGFBQVdsSCxtQkFBVUksTUFGRTtBQUd2QmdDLGNBQVlwQyxtQkFBVUssSUFIQztBQUl2QmdELFdBQVNyRCxtQkFBVUs7QUFKSSxDQUF6QjtlQU9lMkcsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTUssZUFBZUMsbUJBQVVDLEdBQVYsQ0FBYztBQUNqQ0MsYUFBVztBQURzQixDQUFkLENBQXJCOztBQUlBLE1BQU1DLGtCQUFrQkgsbUJBQVVDLEdBQVYsQ0FBYztBQUNwQyxvQkFBa0I7QUFDaEJHLFlBQVE7QUFEUTtBQURrQixDQUFkLENBQXhCOztBQU1BLE1BQU1DLGFBQWFMLG1CQUFVTSxJQUFWLENBQWU7QUFDaENDLFNBQU8sS0FEeUI7QUFFaENILFVBQVE7QUFGd0IsQ0FBZixDQUFuQjs7QUFJQSxNQUFNSSxpQkFBaUJSLG1CQUFVQyxHQUFWLENBQWM7QUFDbkMsK0JBQTZCO0FBQzNCUSxxQkFBaUI7QUFEVSxHQURNO0FBSW5DLDJCQUF5QjtBQUN2QkMsYUFBUztBQURjO0FBSlUsQ0FBZCxDQUF2Qjs7QUFTQSxNQUFNQyxnQkFBZ0JYLG1CQUFVQyxHQUFWLENBQWM7QUFDbENDLGFBQVcsY0FEdUI7QUFFbENVLFlBQVUsT0FGd0I7QUFHbENDLE9BQUssT0FINkI7QUFJbENILFdBQVM7QUFKeUIsQ0FBZCxDQUF0Qjs7QUFPQSxNQUFNSSxhQUFhZCxtQkFBVU0sSUFBVixDQUFlO0FBQ2hDUyxjQUFZLFNBRG9CO0FBRWhDWCxVQUFRLE1BRndCO0FBR2hDWSxjQUFZO0FBSG9CLENBQWYsQ0FBbkI7O0lBTU1DLFEscUJBQU4sTUFBTUEsUUFBTixTQUF1QnhHLGVBQU0xQyxTQUE3QixDQUF1QztBQWlCckMsU0FBT21KLGlCQUFQLENBQXlCMUgsTUFBekIsRUFBaUM7QUFDL0IsV0FBTywrQkFBaUJBLE1BQWpCLElBQ0o7QUFBTSxpQkFBVTtBQUFoQixPQUEyQiw4QkFBZ0JBLE1BQWhCLENBQTNCLENBREksR0FFTCxJQUZGO0FBR0Q7O0FBRURrQixjQUFZdkMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQixTQVNuQnNFLFVBVG1CLEdBU04sTUFBTTtBQUNqQixXQUFLa0IsUUFBTCxDQUFjO0FBQUU3QyxvQkFBWSxJQUFkO0FBQW9CRCxtQkFBVztBQUEvQixPQUFkO0FBQ0QsS0FYa0I7O0FBQUEsU0FhbkI2QyxTQWJtQixHQWFQLE1BQU07QUFDaEIsV0FBS3ZGLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QjZFLCtCQUF4QixFQUEwQyxnQkFBMUMsRUFBNEQsVUFBNUQsRUFBd0UsRUFBeEUsRUFBNEUsRUFBNUUsRUFBZ0YsS0FBSzFGLEtBQUwsQ0FBV2dKLEtBQVgsQ0FBaUI3QixFQUFqRyxFQUFxRyxVQUFyRztBQUNBLFdBQUszQixRQUFMLENBQWM7QUFBRTlDLG1CQUFXLElBQWI7QUFBbUJDLG9CQUFZO0FBQS9CLE9BQWQ7QUFDRCxLQWhCa0I7O0FBQUEsU0FrQm5COUMsYUFsQm1CLEdBa0JILE1BQU07QUFDcEIsWUFBTTtBQUFFQyxjQUFGO0FBQVVrSixhQUFWO0FBQWlCL0k7QUFBakIsVUFBcUMsS0FBS0QsS0FBaEQ7QUFFQUMsc0JBQWdCNkYsb0JBQW1CM0YsUUFBbkMsRUFBNkM7QUFBRUwsZ0JBQVFBLE1BQVY7QUFBa0JDLGlCQUFTaUosTUFBTTdCO0FBQWpDLE9BQTdDO0FBQ0EsV0FBSzdDLFVBQUw7QUFDRCxLQXZCa0I7O0FBQUEsU0F5Qm5CRixjQXpCbUIsR0F5QkRxQyxTQUFELElBQWU7QUFDOUIsVUFBSUEsYUFBYSxDQUFDLEtBQUs3RCxjQUF2QixFQUF1QztBQUNyQyxhQUFLQSxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsYUFBSzVDLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QjZGLDhCQUF4QixFQUF5QyxnQkFBekMsRUFBMkQsRUFBM0QsRUFBK0QsRUFBL0QsRUFBbUUsK0NBQW5FLEVBQW9ILEVBQXBILEVBQXdILFVBQXhIO0FBQ0Q7QUFDRixLQTlCa0I7O0FBQUEsU0FzRG5CdUMsZ0JBdERtQixHQXNEQSxNQUFNO0FBQ3ZCLFlBQU07QUFBRUQsYUFBRjtBQUFTRTtBQUFULFVBQXVCLEtBQUtsSixLQUFsQztBQUNBLFlBQU1tSixlQUFlLGdDQUFnQkgsS0FBaEIsQ0FBckI7QUFFQSxXQUFLaEosS0FBTCxDQUFXYSxZQUFYLENBQXdCNkUsK0JBQXhCLEVBQTBDLGdCQUExQyxFQUE0RCxZQUE1RCxFQUNHLEdBQUV3RCxZQUFZLENBQUUsS0FBSUYsTUFBTUksSUFBSyxLQUFJRCxhQUFhcEMsSUFBSyxLQUFJaUMsTUFBTUssV0FBTixDQUFrQkMsVUFBVyxFQUR6RixFQUVFLCtDQUZGLEVBRW1ETixNQUFNN0IsRUFGekQsRUFFNkQsVUFGN0Q7QUFHRCxLQTdEa0I7O0FBRWpCLFNBQUsxRSxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsS0FEQTtBQUVYQyxrQkFBWTtBQUZELEtBQWI7QUFJQSxTQUFLQyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0Q7O0FBeUJEMkcsaUJBQWVDLFdBQWYsRUFBNEI7QUFDMUIsVUFBTTtBQUFFMUosWUFBRjtBQUFVa0osV0FBVjtBQUFpQi9JLHFCQUFqQjtBQUFrQzRELDJCQUFsQztBQUF5RGhEO0FBQXpELFFBQTBFLEtBQUtiLEtBQXJGOztBQUNBLFFBQUl3SixZQUFZQyxVQUFoQixFQUE0QjtBQUMxQixhQUFPLDZCQUFDLHdCQUFEO0FBQWlCLHlCQUFpQnhKLGVBQWxDO0FBQW1ELGdCQUFRSCxNQUEzRDtBQUFtRSxpQkFBU2tKLE1BQU03QixFQUFsRjtBQUNpQixhQUFJLHNCQURyQjtBQUM0Qyx3QkFBZ0I7QUFENUQsUUFBUDtBQUVELEtBSEQsTUFHTyxJQUFJcUMsWUFBWUUsVUFBWixJQUEwQkYsWUFBWUcsa0JBQTFDLEVBQThEO0FBQ25FLGFBQU8sNkJBQUMsb0JBQUQ7QUFBYSwrQkFBdUI5RixxQkFBcEM7QUFDYSxzQkFBY2hELFlBRDNCO0FBRWEseUJBQWlCWixlQUY5QjtBQUUrQyxnQkFBUUgsTUFGdkQ7QUFFK0QsaUJBQVNrSixNQUFNN0IsRUFGOUU7QUFHYSxhQUFJLGtCQUhqQjtBQUdvQyx3QkFBZ0I7QUFIcEQsUUFBUDtBQUlELEtBTE0sTUFLQTtBQUNMLGFBQU8sMENBQ0wsNkJBQUMsb0JBQUQ7QUFBYSwrQkFBdUJ0RCxxQkFBcEM7QUFDYSxzQkFBY2hELFlBRDNCO0FBRWEseUJBQWlCWixlQUY5QjtBQUUrQyxnQkFBUUgsTUFGdkQ7QUFFK0QsaUJBQVNrSixNQUFNN0IsRUFGOUU7QUFHYSxhQUFJLGtCQUhqQjtBQUdvQyx3QkFBZ0I7QUFIcEQsUUFESyxFQUtMLDZCQUFDLGdCQUFEO0FBQVMseUJBQWlCLEtBQUs1QixTQUEvQjtBQUEwQyxnQkFBUXpGLE1BQWxEO0FBQTBELGlCQUFTa0osTUFBTTdCLEVBQXpFO0FBQ1MsYUFBSSxjQURiO0FBQzRCLHdCQUFnQjtBQUQ1QyxRQUxLLENBQVA7QUFRRDtBQUNGOztBQVdEL0csV0FBUztBQUNQLFVBQU07QUFBRU4sWUFBRjtBQUFVa0osV0FBVjtBQUFpQnRGLGlCQUFqQjtBQUE4QmtHO0FBQTlCLFFBQTJDLEtBQUs1SixLQUF0RDtBQUVBLFVBQU1tSixlQUFlLGdDQUFnQkgsS0FBaEIsQ0FBckI7QUFDQSxVQUFNYSxtQkFBbUIsb0NBQW9CYixLQUFwQixDQUF6QjtBQUNBLFVBQU1jLHNCQUFzQix1Q0FBdUJkLEtBQXZCLENBQTVCO0FBQ0EsVUFBTWUsVUFBVSxpQ0FBZ0JqSyxNQUFoQixFQUF3QmtKLE1BQU03QixFQUE5QixDQUFoQjtBQUNBLFVBQU02QyxnQkFBZ0JKLFlBQVlBLFNBQVNJLGFBQTNDO0FBQ0EsVUFBTVIsY0FBYyx3Q0FBd0JSLEtBQXhCLENBQXBCO0FBRUEsV0FDRSw2QkFBQyw4QkFBRDtBQUFRLGdCQUFVLEtBQUs1RSxjQUF2QjtBQUNRLHlCQUFrQixRQUQxQjtBQUVRLG1CQUFhO0FBRnJCLE9BR0UsNkJBQUMsWUFBRDtBQUFjLGlCQUFVO0FBQXhCLE9BQ0lvRixZQUFZUyxrQkFBWixJQUFrQ1QsWUFBWVUsV0FBOUMsSUFBNkRWLFlBQVlXLFdBQTFFLEdBQ0MsSUFERCxHQUVDLDZCQUFDLGNBQUQ7QUFBZ0IsaUJBQVU7QUFBMUIsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxVQUFEO0FBQVksaUJBQVU7QUFBdEIsTUFERixFQUVFLDZCQUFDLFVBQUQ7QUFBWSxpQkFBVTtBQUF0QixNQUZGLEVBR0UsNkJBQUMsVUFBRDtBQUFZLGlCQUFVO0FBQXRCLE1BSEYsQ0FERixFQU1FLDZCQUFDLGFBQUQ7QUFBZSxpQkFBWTtBQUEzQixPQUNHLEtBQUtaLGNBQUwsQ0FBb0JDLFdBQXBCLENBREgsQ0FORixDQUhKLEVBY0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsNkJBQUQ7QUFDRSwyQkFBcUIsSUFEdkI7QUFFRSxjQUFRUixNQUFNcEMsS0FBTixDQUFZTyxFQUZ0QjtBQUdFLG1CQUFhekQ7QUFIZixNQURGLEVBT0lzRyxnQkFFSTtBQUNFLGlCQUFVO0FBRFosT0FDK0M7QUFDN0MsaUJBQVU7QUFEbUMsT0FDZCw2QkFBQyxrQkFBRCxPQURjLENBRC9DLE9BRTBEQSxhQUYxRCxtQkFFc0ZBLGdCQUFnQixDQUFoQixHQUFvQixHQUFwQixHQUEwQixFQUZoSCxDQUZKLEdBS00sRUFaVixDQWRGLEVBNkJFLDZCQUFDLGlCQUFEO0FBQU0sVUFBSUQsT0FBVjtBQUFtQixpQkFBVSxpQkFBN0I7QUFBK0MsZUFBUyxLQUFLZDtBQUE3RCxPQUNFLDZCQUFDLG9CQUFEO0FBQWEsYUFBT0UsWUFBcEI7QUFBa0MsbUJBQWF6RjtBQUEvQyxNQURGLENBN0JGLEVBZ0NFLDBDQUNFLDZCQUFDLHFCQUFEO0FBQ0UsZUFBUyxJQURYO0FBRUUsY0FBUSxLQUFLakIsS0FBTCxDQUFXQyxTQUZyQjtBQUdFLDBCQUFvQixLQUFLRCxLQUFMLENBQVdFLFVBSGpDO0FBSUUsNEJBQXNCLEtBQUsyQjtBQUo3QixPQU1FLDZCQUFDLGlCQUFEO0FBQWMsYUFBTzZFLFlBQXJCO0FBQW1DLGlCQUFXVSxnQkFBOUM7QUFBZ0Usa0JBQVksS0FBS3ZGLFVBQWpGO0FBQ2MsZUFBUyxLQUFLekU7QUFENUIsTUFORixDQURGLENBaENGLEVBNENFLDZCQUFDLGVBQUQ7QUFBaUIsaUJBQVU7QUFBM0IsT0FDRTtBQUFHLGlCQUFZLHVFQUFzRSxpQ0FBbUJtSixNQUFNM0gsTUFBekIsQ0FBaUM7QUFBdEgsT0FDR3lILFNBQVNDLGlCQUFULENBQTJCQyxNQUFNM0gsTUFBakMsQ0FESCxDQURGLEVBSUd5SSxvQkFBb0JNLFFBQXBCLEdBQStCLENBQS9CLEdBQ0MsNkJBQUMsVUFBRDtBQUFZLGlCQUFVO0FBQXRCLHVCQURELEdBQ2lHLEVBTHBHLENBNUNGLEVBbURFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUE0QyxXQUFVLDJCQUFZcEIsTUFBTXFCLFNBQWxCLENBQTZCLEVBQW5GLENBREYsRUFFRSwwQ0FBSyw2QkFBQyxtQkFBRCxlQUFnQlIsZ0JBQWhCLEVBQXNDQyxtQkFBdEMsRUFBTCxDQUZGLENBbkRGLENBSEYsQ0FERjtBQThERDs7QUE5Sm9DLEMsU0FDOUJ4SixTLEdBQVk7QUFDakJSLFVBQVFTLG1CQUFVb0UsU0FBVixDQUFvQixDQUMxQnBFLG1CQUFVQyxNQURnQixFQUUxQkQsbUJBQVVxRSxNQUZnQixDQUFwQixFQUVhbkUsVUFISjtBQUlqQnlJLGFBQVczSSxtQkFBVUMsTUFBVixDQUFpQkMsVUFKWDtBQUtqQnVJLFNBQU96SSxtQkFBVUksTUFBVixDQUFpQkYsVUFMUDtBQU1qQm1KLFlBQVVySixtQkFBVUksTUFOSDtBQU9qQitDLGVBQWFuRCxtQkFBVUksTUFBVixDQUFpQkYsVUFQYjtBQVFqQlIsbUJBQWlCTSxtQkFBVUssSUFSVjtBQVNqQmdELFdBQVNyRCxtQkFBVUssSUFBVixDQUFlSCxVQVRQO0FBVWpCb0QseUJBQXVCdEQsbUJBQVVJLE1BVmhCO0FBV2pCRSxnQkFBY04sbUJBQVVLO0FBWFAsQyxTQWNaRyxZLEdBQWUsRTtlQWtKVCtILFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9mOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTXdCLFlBQWE3SCxLQUFELEtBQVk7QUFDNUJjLGlCQUFlZCxNQUFNOEgsSUFBTixDQUFXQyxXQUFYLENBQXVCM0UsSUFBdkIsQ0FBNEJzQixFQURmO0FBRTVCM0QsVUFBUWYsTUFBTXVHLEtBQU4sQ0FBWXlCLElBQVosQ0FBaUI1RSxJQUFqQixDQUFzQnJDLE1BRkY7QUFHNUJDLGFBQVdoQixNQUFNdUcsS0FBTixDQUFZeUIsSUFBWixDQUFpQjVFLElBQWpCLENBQXNCcEMsU0FITDtBQUk1QkUsa0JBQWdCbEIsTUFBTXVHLEtBQU4sQ0FBWVksUUFBWixDQUFxQi9ELElBSlQ7QUFLNUJuQyxlQUFhLDBCQUFlakIsS0FBZixDQUxlO0FBTTVCb0MsVUFBUXBDLE1BQU1vQyxNQUFOLENBQWFnQixJQUFiLENBQWtCQSxJQU5FO0FBTzVCdEIsYUFBVzlCLE1BQU04SCxJQUFOLENBQVdoRyxTQUFYLENBQXFCQSxTQVBKO0FBUTVCVix5QkFBdUIsMENBQXlCcEIsS0FBekIsQ0FSSztBQVM1QlMsdUJBQXFCVCxNQUFNdUcsS0FBTixDQUFZMEIsT0FBWixDQUFvQnhIO0FBVGIsQ0FBWixDQUFsQjs7QUFZQSxNQUFNeUgsWUFBWSw2QkFBVyx5QkFDM0JMLFNBRDJCLEVBRTNCO0FBQ0V0Riw4QkFERjtBQUVFakMsdUNBRkY7QUFHRUQsMENBSEY7QUFJRWMsbUNBSkY7QUFLRXFCLDJDQUxGO0FBTUVDLG1EQU5GO0FBT0VDLGtEQVBGO0FBUUVFLHVEQVJGO0FBU0VELGFBQVd3RixzQkFUYjtBQVVFekg7QUFWRixDQUYyQixFQWMzQjBILHVCQWQyQixDQUFYLENBQWxCO2VBZ0JlO0FBQ2JGLFdBRGE7QUFFYkQsV0FBUztBQUNQMUY7QUFETyxHQUZJO0FBS2I4RixpQkFBZTlGO0FBTEYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ2Y7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBRUEsTUFBTStGLG9CQUFvQixDQUFDO0FBQUVDLE9BQUY7QUFBU0MsU0FBVDtBQUFrQkMsUUFBTTtBQUFFQyxXQUFGO0FBQVdDO0FBQVgsR0FBeEI7QUFBNENDO0FBQTVDLENBQUQsS0FDeEIsMENBRUlGLFdBQ0NDLFNBQVM7QUFBTSxhQUFVLGlCQUFoQjtBQUFrQyxTQUFPO0FBQUVFLFdBQU87QUFBVDtBQUF6Qyw2QkFIZCxFQUtHTCxVQUNHQSxRQUFRaEgsR0FBUixDQUFZc0gsVUFDWjtBQUFLLGFBQVUsS0FBZjtBQUFxQixPQUFLQSxPQUFPcEU7QUFBakMsR0FDRTtBQUFPLFFBQU02RCxNQUFNbEUsSUFBbkI7QUFBeUIsUUFBSztBQUE5QixHQUEwQ2tFLEtBQTFDO0FBQWlELGFBQVUsb0NBQTNEO0FBQ08sTUFBSyxXQUFVTyxPQUFPcEUsRUFBRyxFQURoQztBQUNtQyxTQUFPb0UsT0FBT3BFLEVBRGpEO0FBQ3FELFdBQVNvRSxPQUFPcEUsRUFBUCxLQUFjNkQsTUFBTVEsS0FEbEY7QUFFTyxXQUFTSDtBQUZoQixHQURGLEVBSUU7QUFBTyxhQUFVLCtCQUFqQjtBQUFpRCxXQUFVLFdBQVVFLE9BQU9wRSxFQUFHO0FBQS9FLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FBc0JvRSxPQUFPekUsSUFBN0IsQ0FERixDQUpGLENBREEsQ0FESCxHQVdHLElBaEJOLENBREY7O0FBc0JBaUUsa0JBQWtCekssU0FBbEIsR0FBOEI7QUFDNUIwSyxTQUFPekssbUJBQVVJLE1BRFc7QUFFNUJ1SyxRQUFNM0ssbUJBQVVJLE1BRlk7QUFHNUJzSyxXQUFTMUssbUJBQVV1RSxLQUhTO0FBSTVCdUcsa0JBQWdCOUssbUJBQVVLO0FBSkUsQ0FBOUI7O0FBT0EsTUFBTTZLLDRCQUE0QixDQUFDO0FBQUVUO0FBQUYsQ0FBRCxLQUNoQyw2QkFBQyxRQUFEO0FBQVUsZUFBWSxhQUF0QjtBQUFvQyxhQUFVO0FBQTlDLEdBQWtFQSxLQUFsRSxFQURGOztBQUlBUywwQkFBMEJuTCxTQUExQixHQUFzQztBQUNwQzBLLFNBQU96SyxtQkFBVUk7QUFEbUIsQ0FBdEM7O0FBS0EsTUFBTStLLFdBQVc3RCxtQkFBVThELFFBQVYsQ0FBbUI7QUFDbEMxRCxVQUFRLE1BRDBCO0FBRWxDMkQsY0FBWSxNQUZzQjtBQUdsQ0MsVUFBUSxNQUgwQjtBQUlsQ3pELFNBQU87QUFKMkIsQ0FBbkIsQ0FBakI7O0FBT0EsTUFBTTBELGFBQWFqRSxtQkFBVUMsR0FBVixDQUFjO0FBQy9CRyxVQUFRO0FBRHVCLENBQWQsQ0FBbkI7O0lBS004RCxjLHFCQUFOLE1BQU1BLGNBQU4sU0FBNkJ6SixlQUFNMUMsU0FBbkMsQ0FBNkM7QUFRM0MyQyxjQUFZdkMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQixTQWtCbkJnTSxpQkFsQm1CLEdBa0JFQyxDQUFELElBQU9BLEVBQUVDLE1BQUYsQ0FBU1YsS0FBVCxLQUFtQixHQUFuQixHQUF5QixLQUFLVyxlQUFMLEVBQXpCLEdBQWtELEtBQUtDLGVBQUwsRUFsQjFEOztBQUVqQixTQUFLM0osS0FBTCxHQUFhO0FBQ1g0Siw0QkFBc0I7QUFEWCxLQUFiO0FBSUEsU0FBS0QsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCNUosSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDQSxTQUFLMkosZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCM0osSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDRDs7QUFFRDRKLG9CQUFrQjtBQUNoQixTQUFLNUcsUUFBTCxDQUFjO0FBQUU2Ryw0QkFBc0I7QUFBeEIsS0FBZDtBQUNEOztBQUVERixvQkFBa0I7QUFDaEIsU0FBSzNHLFFBQUwsQ0FBYztBQUFFNkcsNEJBQXNCO0FBQXhCLEtBQWQ7QUFDRDs7QUFFb0c7QUFFckdqTSxXQUFTO0FBQ1AsVUFBTWtNLGtCQUFrQixLQUFLN0osS0FBTCxDQUFXNEosb0JBQVgsR0FDckIsNkJBQUMsZ0JBQUQ7QUFDQyxpQkFBV1oseUJBRFo7QUFFQyxZQUFLO0FBRk4sTUFEcUIsR0FJaEIsSUFKUjtBQU1BLFVBQU1SLFVBQVVuSCxPQUFPQyxJQUFQLENBQVksS0FBSy9ELEtBQUwsQ0FBV3VFLFNBQXZCLEVBQWtDTixHQUFsQyxDQUF1Q3NJLEdBQUQsSUFBUztBQUM3RCxhQUFPO0FBQ0xwRixZQUFJb0YsR0FEQztBQUVMekYsY0FBTSxLQUFLOUcsS0FBTCxDQUFXdUUsU0FBWCxDQUFxQmdJLEdBQXJCO0FBRkQsT0FBUDtBQUlELEtBTGUsQ0FBaEI7O0FBT0EsVUFBTUMsZUFBZSw2QkFBQyxnQkFBRDtBQUNuQixZQUFLLFVBRGM7QUFFbkIsZUFBU3ZCLE9BRlU7QUFHbkIsaUJBQVdGLGlCQUhRO0FBSW5CLHNCQUFpQmtCLENBQUQsSUFBTyxLQUFLRCxpQkFBTCxDQUF1QkMsQ0FBdkIsQ0FKSjtBQUtuQixnQkFBVVE7QUFMUyxNQUFyQjs7QUFRQSxXQUNFO0FBQU0sZ0JBQVUsS0FBS3pNLEtBQUwsQ0FBVzBFO0FBQTNCLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsVUFBRDtBQUFZLGlCQUFVO0FBQXRCLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBRyxpQkFBVTtBQUFiLG9FQURGLENBREYsQ0FERixFQU1FO0FBQUssaUJBQVU7QUFBZixPQUNHOEgsWUFESCxFQUVHRixlQUZILENBTkYsQ0FERixDQURGLEVBY0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBTSxlQUFTLEtBQUt0TSxLQUFMLENBQVd5RSxZQUExQjtBQUF3QyxpQkFBVTtBQUFsRCxnQkFERixDQURGLEVBSUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBUSxZQUFLLFFBQWI7QUFBc0IsaUJBQVU7QUFBaEMsd0JBREYsQ0FKRixDQWRGLENBREYsQ0FERjtBQTJCRDs7QUE3RTBDLEMsU0FDcENuRSxTLEdBQVk7QUFDakJvRSxnQkFBY25FLG1CQUFVSyxJQURQO0FBRWpCMkQsYUFBV2hFLG1CQUFVSSxNQUZKO0FBR2pCOEQsZ0JBQWNsRSxtQkFBVUssSUFIUDtBQUlqQnNLLFFBQU0zSyxtQkFBVUk7QUFKQyxDOztlQStFTiwwQkFBVTtBQUN2QitMLFFBQU07QUFEaUIsQ0FBVixFQUVaWCxjQUZZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJZjs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQU1BLE1BQU1ZLFlBQVk5RSxtQkFBVUMsR0FBVixDQUFjO0FBQzlCOEUsVUFBUSxHQURzQjtBQUU5QkMsV0FBUyxHQUZxQjtBQUc5QnRFLFdBQVMsY0FIcUI7QUFJOUIsVUFBUTtBQUNOQSxhQUFTLGNBREg7QUFFTnVFLGlCQUFhLEtBRlA7QUFHTjFFLFdBQU8sTUFIRDtBQUlOSCxZQUFRLE1BSkY7QUFLTixvQkFBZ0I7QUFDZDZFLG1CQUFhO0FBREMsS0FMVjtBQVFOLGFBQVM7QUFDUDFFLGFBQU8sTUFEQTtBQUVQSCxjQUFRLE1BRkQ7QUFHUE0sZUFBUztBQUhGO0FBUkg7QUFKc0IsQ0FBZCxDQUFsQjs7QUFvQkEsU0FBU3dFLFFBQVQsQ0FBa0JuTixTQUFsQixFQUE2Qm9OLE9BQTdCLEVBQXNDQyxPQUF0QyxFQUErQztBQUM3QyxNQUFJQyxJQUFJLENBQVI7QUFDQSxRQUFNQyxRQUFRLEVBQWQ7O0FBQ0EsU0FBT0QsSUFBSUYsT0FBWCxFQUFvQjtBQUNsQkcsVUFBTXZDLElBQU4sQ0FBVztBQUFJLFdBQUtxQyxVQUFVQztBQUFuQixPQUFzQiw2QkFBQyxTQUFELE9BQXRCLENBQVg7QUFDQUEsU0FBSyxDQUFMO0FBQ0Q7O0FBQ0QsU0FBT0MsS0FBUDtBQUNEOztBQUVELE1BQU1DLGFBQWEsQ0FBQztBQUFFQyxRQUFGO0FBQVVDO0FBQVYsQ0FBRCxLQUFvQztBQUNyRCxRQUFNSCxRQUFRLEVBQWQ7QUFDQSxRQUFNSSxpQkFBaUIsQ0FBdkI7QUFDQSxRQUFNQyxrQkFBa0JDLEtBQUtDLEtBQUwsQ0FBV0wsTUFBWCxDQUF4QjtBQUNBLFFBQU1NLG1CQUFtQkMsV0FBVyxDQUFDUCxTQUFTRyxlQUFWLEVBQTJCSyxPQUEzQixDQUFtQyxDQUFuQyxDQUFYLENBQXpCO0FBQ0EsTUFBSUMsZ0JBQWdCLENBQXBCO0FBQ0EsTUFBSUMsZ0JBQWdCLENBQXBCOztBQUVBLE1BQUlKLHFCQUFxQixHQUF6QixFQUE4QjtBQUM1Qkcsb0JBQWdCVCxNQUFoQjtBQUNELEdBRkQsTUFFTyxJQUFJTSxvQkFBb0IsR0FBeEIsRUFBNkI7QUFDbENHLG9CQUFnQk4sZUFBaEI7QUFDQU8sb0JBQWdCLENBQWhCO0FBQ0QsR0FITSxNQUdBO0FBQ0xELG9CQUFnQk4sa0JBQWtCLENBQWxDO0FBQ0Q7O0FBRUQsUUFBTVEsaUJBQWlCVCxrQkFBa0JPLGdCQUFnQkMsYUFBbEMsQ0FBdkI7QUFFQVosUUFBTXZDLElBQU4sQ0FBV21DLFNBQVNrQixjQUFULEVBQW1CSCxhQUFuQixFQUFrQyxXQUFsQyxDQUFYO0FBQ0FYLFFBQU12QyxJQUFOLENBQVdtQyxTQUFTbUIsY0FBVCxFQUFtQkgsYUFBbkIsRUFBa0MsV0FBbEMsQ0FBWCxFQXBCcUQsQ0FxQnJEOztBQUNBLE1BQUksQ0FBQ1Qsa0JBQUwsRUFBeUI7QUFDdkJILFVBQU12QyxJQUFOLENBQVdtQyxTQUFTb0IsbUJBQVQsRUFBd0JILGNBQXhCLEVBQXdDLFlBQXhDLENBQVg7QUFDRDs7QUFFRCxTQUNFLDZCQUFDLFNBQUQ7QUFBVyxlQUFVO0FBQXJCLEtBQ0UseUNBRUliLEtBRkosQ0FERixDQURGO0FBU0QsQ0FuQ0Q7O0FBcUNBQyxXQUFXOU0sU0FBWCxHQUF1QjtBQUNyQitNLFVBQVE5TSxtQkFBVUMsTUFERztBQUVyQjhNLHNCQUFvQi9NLG1CQUFVTztBQUZULENBQXZCO0FBS0FzTSxXQUFXck0sWUFBWCxHQUEwQjtBQUN4QnNNLFVBQVEsQ0FEZ0I7QUFFeEJDLHNCQUFvQjtBQUZJLENBQTFCO2VBS2VGLFUiLCJmaWxlIjoicXVvdGUtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvcXVvdGUvRXZlbnRUeXBlcyc7XG5cbmNsYXNzIEJvb2tOb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGhhbmRsZUJvb2tOb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmlwSWQsIHF1b3RlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wcm9wcy5jYWxsYmFja0hhbmRsZXIoRVZFTlRTX0VOVU1TLkJPT0tfTk9XLCB7IHRyaXBJZCwgcXVvdGVJZCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1F1b3RlQ2FyZEN0YSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aXNRdW90ZUNhcmRDdGEgPyAnYmxvY2sgcDE1IHRleHQtbGVmdCB3ZnVsbCBhdF9ib29rTm93JyA6ICd3ZnVsbCBidG4tcHJpLWxhcmdlIHJpcHBsZSBwbDUgcHI1IGF0X2Jvb2tOb3cnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUJvb2tOb3d9PlxuICAgICAgICAgIEJvb2sgTm93XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Cb29rTm93LnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb3BzRGV0YWlsOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjYWxsYmFja0hhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBpc1F1b3RlQ2FyZEN0YTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkJvb2tOb3cuZGVmYXVsdFByb3BzID0ge1xuICBvcHNEZXRhaWw6IHt9LFxuICBjYWxsYmFja0hhbmRsZXI6ICgpID0+IHtcbiAgfSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH0sXG4gIGlzUXVvdGVDYXJkQ3RhOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9va05vdztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvcXVvdGUvRXZlbnRUeXBlcyc7XG5cbmNvbnN0IENUQV9URVhUID0gJ1JlYWN0aXZhdGUgUXVvdGUnO1xuXG5jb25zdCBSZWFjdGl2YXRlUXVvdGUgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpcElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0hhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpc1F1b3RlQ2FyZEN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4XCI+XG4gICAge1xuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2lzUXVvdGVDYXJkQ3RhID8gJ2Jsb2NrIHAxNSB0ZXh0LWxlZnQgd2Z1bGwnIDogJ3dmdWxsIGJ0bi1wcmktbGFyZ2UgcmlwcGxlIHBsNSBwcjUnfVxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrSGFuZGxlcihFVkVOVFNfRU5VTVMuUkVBQ1RJVkFURV9RVU9URSwgeyB0cmlwSWQsIHF1b3RlSWQgfSk7XG4gICAgICAgIH19PlxuICAgICAgICB7Q1RBX1RFWFR9XG4gICAgICA8L2J1dHRvbj5cbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuUmVhY3RpdmF0ZVF1b3RlLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNhbGxiYWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNRdW90ZUNhcmRDdGE6IFByb3BUeXBlcy5ib29sXG59O1xuXG5SZWFjdGl2YXRlUXVvdGUuZGVmYXVsdFByb3BzID0ge1xuICBpc1F1b3RlQ2FyZEN0YTogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2YXRlUXVvdGU7XG5cbiIsImltcG9ydCB7IFFVT1RFX1NUQVRVUyB9IGZyb20gJ2NvbnN0YW50cy9xdW90ZVN0YXR1cyc7XG5cbmV4cG9ydCBjb25zdCBxdW90ZVN0YXR1c0NsYXNzZXMgPSAoc3RhdHVzKSA9PiB7XG4gIGxldCBzdGF0dXNDbGFzc05hbWVzID0gJ3F1b3Rlc1N0YXR1cyc7XG5cbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIFFVT1RFX1NUQVRVUy5DT05WRVJURUQ6IHtcbiAgICAgIHN0YXR1c0NsYXNzTmFtZXMgKz0gJyBjb252ZXJ0ZWRRdW90ZSBzYmMxJztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFFVT1RFX1NUQVRVUy5DSE9TRU46XG4gICAgY2FzZSBRVU9URV9TVEFUVVMuSU5WT0lDRUQ6XG4gICAgY2FzZSBRVU9URV9TVEFUVVMuQUNUSVZFOiB7XG4gICAgICBzdGF0dXNDbGFzc05hbWVzICs9ICcgYWN0aXZlUXVvdGUgc2JjMyc7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBRVU9URV9TVEFUVVMuREVDTElORUQ6IHtcbiAgICAgIHN0YXR1c0NsYXNzTmFtZXMgKz0gJyByZWplY3RlZFF1b3RlJztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFFVT1RFX1NUQVRVUy5DQU5DRUxFRDoge1xuICAgICAgc3RhdHVzQ2xhc3NOYW1lcyArPSAnIGNhbmNlbGxlZFF1b3RlJztcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdGF0dXNDbGFzc05hbWVzICs9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0dXNDbGFzc05hbWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IHF1b3RlU3RhdHVzVGV4dCA9ICh0ZXh0KSA9PiB7XG4gIHN3aXRjaCAodGV4dCkge1xuICAgIGNhc2UgUVVPVEVfU1RBVFVTLlBBWU1FTlQ6XG4gICAgY2FzZSBRVU9URV9TVEFUVVMuQ09OVkVSVEVEOlxuICAgICAgdGV4dCA9ICdCb29rZWQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBRVU9URV9TVEFUVVMuQ0FOQ0VMRUQ6XG4gICAgY2FzZSBRVU9URV9TVEFUVVMuREVDTElORUQ6XG4gICAgICB0ZXh0ID0gJ1JlamVjdGVkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUVVPVEVfU1RBVFVTLkNIT1NFTjpcbiAgICAgIHRleHQgPSAnSW52b2ljZSBBd2FpdGVkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUVVPVEVfU1RBVFVTLklOVk9JQ0VEOlxuICAgICAgdGV4dCA9ICdJbnZvaWNlIEdlbmVyYXRlZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFFVT1RFX1NUQVRVUy5BQ1RJVkU6XG4gICAgICB0ZXh0ID0gJ0FjdGl2ZSc7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufTtcblxuLy8gc2hvdyBzdGF0dXMgaW4gcXVvdGUgYm94IGZvciBiZWxvdyBjYXNlcyBvbmx5XG5leHBvcnQgY29uc3Qgc3RhdHVzVG9TaG93ID0gW1FVT1RFX1NUQVRVUy5QQVlNRU5ULCBRVU9URV9TVEFUVVMuQ09OVkVSVEVELCBRVU9URV9TVEFUVVMuQ0FOQ0VMRUQsIFFVT1RFX1NUQVRVUy5ERUNMSU5FRCxcbiAgUVVPVEVfU1RBVFVTLkNIT1NFTiwgUVVPVEVfU1RBVFVTLklOVk9JQ0VELCBRVU9URV9TVEFUVVMuQUNUSVZFXTtcblxuZXhwb3J0IGNvbnN0IHNob3dTdGF0dXNSaWJib24gPSAoc3RhdHVzKSA9PiB7XG4gIHJldHVybiBzdGF0dXNUb1Nob3cuaW5kZXhPZihzdGF0dXMudG9TdHJpbmcoKSkgPiAtMTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgUVVPVEVfRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvcXVvdGUvRXZlbnRUeXBlcyc7XG5pbXBvcnQgUXVvdGVCb3ggZnJvbSAnLi9jb21wb25lbnRzL1F1b3RlQm94JztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IFJlcXVlc3RNb3JlUXVvdGUgZnJvbSAnbW9kdWxlcy9xdW90ZS9wb3B1cHMvcmVxdWVzdE1vcmVRdW90ZSc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQsIE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBJTkZPX1JPU1RFUiB9IGZyb20gJ2NvbnN0YW50cy9yb3N0ZXJUeXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1b3Rlc1JlY2VpdmVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdXJyZW50VHJpcElkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBxdW90ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcXVvdGVzQ29tbWVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXNlckRldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsYXlvdXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc29ydE9yZGVyOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbW9yZVF1b3Rlc1JlcXVlc3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcXVvdGVSZWplY3Rpb25SZWFzb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbnN0YW50czogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIGZldGNoUXVvdGVzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmZXRjaFF1b3Rlc0NvbnN0YW50czogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmZXRjaFF1b3Rlc0NvbW1lbnRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGJvb2tOb3c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVqZWN0UXVvdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVhY3RpdmF0ZVF1b3RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGZldGNoRGlzY291bnRPZmZlcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcHVzaFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd1Jvc3RlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVxdWVzdE1vcmVRdW90ZXM6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIGxheW91dDoge30sXG4gICAgcXVvdGVzQ29tbWVudHM6IHt9LFxuICAgIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNhbGxiYWNrSGFuZGxlciA9IHRoaXMuY2FsbGJhY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5Nb2RhbDogZmFsc2UsXG4gICAgICBjbG9zZU1vZGFsOiB0cnVlXG4gICAgfTtcbiAgICB0aGlzLmlzRXZlbnRUcmFja2VkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoUXVvdGVzQ29tbWVudHModGhpcy5wcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5mZXRjaFF1b3Rlc0NvbnN0YW50cygpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm1vcmVRdW90ZXNSZXF1ZXN0ZWQgJiYgbmV4dFByb3BzLm1vcmVRdW90ZXNSZXF1ZXN0ZWQpIHtcbiAgICAgIHRoaXMucHJvcHMuc2hvd1Jvc3Rlcih7XG4gICAgICAgIHR5cGU6IElORk9fUk9TVEVSLFxuICAgICAgICBtZXNzYWdlOiAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISBPdXIgYWdlbnQgc2hhbGwgYmUgZ2V0IGJhY2sgdG8geW91IHdpdGggbW9yZSBxdW90ZXMgc29vbi4nXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvcGVuUG9wdXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogdHJ1ZSwgY2xvc2VNb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogdHJ1ZSwgb3Blbk1vZGFsOiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSAodmFsdWVzKSA9PiB7XG4gICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9DTElDS0VELCAnUmVxdWVzdCBtb3JlIHF1b3RlcyBwb3AgdXAnLCAnUmVxdWVzdCBxdW90ZXMnKTtcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RNb3JlUXVvdGVzKHRoaXMucHJvcHMuY3VycmVudFRyaXBJZCxcbiAgICAgIHZhbHVlcywge30sIHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKTtcbiAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgfTtcblxuICBmZXRjaFF1b3Rlc0NvbW1lbnRzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcXVvdGVJZHMgPSBPYmplY3Qua2V5cyhwcm9wcy5xdW90ZXMpLm1hcCgocXVvdGVJZCkgPT4ge1xuICAgICAgcmV0dXJuIHF1b3RlSWQ7XG4gICAgfSk7XG5cbiAgICBwcm9wcy5mZXRjaFF1b3Rlc0NvbW1lbnRzKHsgdHJpcElkOiBwcm9wcy5jdXJyZW50VHJpcElkLCBxdW90ZUlkcyB9KTtcbiAgfTtcblxuICBjYWxsYmFja0hhbmRsZXIgPSAodHlwZSwgZGF0YSA9IHt9KSA9PiB7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUVVPVEVfRVZFTlRTX0VOVU1TLkJPT0tfTk9XOlxuICAgICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdCb29rIG5vdyBwb3AgdXAnLCAnQ29udGludWUnLCAnJywgJycsIGRhdGEucXVvdGVJZCwgJ3F1b3RlIGlkJyk7XG4gICAgICAgIHRoaXMucHJvcHMuYm9va05vdyhkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFFVT1RFX0VWRU5UU19FTlVNUy5SRUpFQ1RfUVVPVEU6XG4gICAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ1JlamVjdCBxdW90ZSBwb3AgdXAnLCAnUmVqZWN0IHF1b3RlJyxcbiAgICAgICAgICBgJHtkYXRhLnJlYXNvbn06OiR7ZGF0YS5yZWFzb25UZXh0fWAsICdyZWFzb24gaW5kZXg6OnJlYXNvbiB0ZXh0JywgZGF0YS5xdW90ZUlkLCAncXVvdGUgaWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yZWplY3RRdW90ZShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFFVT1RFX0VWRU5UU19FTlVNUy5SRUFDVElWQVRFX1FVT1RFOlxuICAgICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdRdW90ZXMgc2VjdGlvbicsICdSZWFjdGl2YXRlIHF1b3RlJywgJycsICcnLCBkYXRhLnF1b3RlSWQsICdxdW90ZSBpZCcpO1xuICAgICAgICB0aGlzLnByb3BzLnJlYWN0aXZhdGVRdW90ZShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVJlcXVlc3RNb3JlID0gKCkgPT4ge1xuICAgIHRoaXMub3BlblBvcHVwKCk7XG4gICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9DTElDS0VELCAnUmVxdWVzdCBtb3JlIHF1b3RlcyBzZWN0aW9uJywgJ1JlcXVlc3QgbW9yZSBxdW90ZXMnKTtcbiAgfTtcblxuICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9DTElDS0VELCAnUmVxdWVzdCBtb3JlIHF1b3RlcyBwb3AgdXAnLCAnQ2FuY2VsJyk7XG4gIH07XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIHNlY3Rpb24sIGN0YSwgbWlzY0lkMSwgbWlzY1R5cGUxLCBtaXNjSWQyLCBtaXNjVHlwZTIpID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgb2JqZWN0OiAnJyxcbiAgICAgICAgY3RhLFxuICAgICAgICBtaXNjSWQxLFxuICAgICAgICBtaXNjVHlwZTEsXG4gICAgICAgIG1pc2NJZDIsXG4gICAgICAgIG1pc2NUeXBlMixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUgJiYgIXRoaXMuaXNFdmVudFRyYWNrZWQpIHtcbiAgICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9WSUVXRUQsICdSZXF1ZXN0IG1vcmUgcXVvdGVzIHNlY3Rpb24nLCAnJyk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50VHJpcElkLCBxdW90ZXMsIHNvcnRPcmRlciwgdXNlckRldGFpbHMsXG4gICAgICBxdW90ZXNDb21tZW50cywgYm9va05vdywgcXVvdGVSZWplY3Rpb25SZWFzb25zLCB0cmFja1NlZ21lbnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghT2JqZWN0LmtleXMocXVvdGVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgc29ydE9yZGVyICYmIHNvcnRPcmRlci5tYXAoKHF1b3RlSWQsIGluZGV4KSA9PiA8UXVvdGVCb3gga2V5PXtxdW90ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaXBJZD17Y3VycmVudFRyaXBJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZXNbcXVvdGVJZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cz17cXVvdGVzQ29tbWVudHNbcXVvdGVJZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGV0YWlscz17dXNlckRldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29rTm93PXtib29rTm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVSZWplY3Rpb25SZWFzb25zPXtxdW90ZVJlamVjdGlvblJlYXNvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0hhbmRsZXI9e3RoaXMuY2FsbGJhY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0aGlzLnRyYWNrU2VnbWVudEV2ZW50fSAvPilcbiAgICAgICAgfVxuICAgICAgICA8U2Vuc29yIG9uQ2hhbmdlPXt0aGlzLm9uU2Vuc29yQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nXG4gICAgICAgICAgICAgICAgZGVsYXllZENhbGw9e3RydWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHAxNSBhdF9yZXF1ZXN0TW9yZV9zZWN0aW9uJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjE0IG1iNSBwZmMzIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgTm90IHNhdGlzZmllZCB3aXRoIHRoZSBxdW90ZT9cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4tc2VjLWxvYWQgd2Z1bGwgYXRfcmVxdWVzdE1vcmUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVxdWVzdE1vcmV9PlJlcXVlc3QgTW9yZSBRdW90ZXM8L2Rpdj5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfVxuICAgICAgICAgICAgICBjdXN0b21DbG9zZVRyaWdnZXI9e3RoaXMuc3RhdGUuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2VDdXN0b209e3RoaXMuY2xvc2VQb3B1cH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlcXVlc3RNb3JlUXVvdGVcbiAgICAgICAgICAgICAgICBjb25zdGFudHM9e3RoaXMucHJvcHMuY29uc3RhbnRzLnJlcXVlc3RNb3JlUXVvdGVzT3B0aW9uc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDYW5jZWw9e3RoaXMuaGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnQ9e3RoaXMudHJhY2tTZWdtZW50RXZlbnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NlbnNvcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBBdmF0YXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvQXZhdGFyJztcbmltcG9ydCBSYXRpbmdTdGFyIGZyb20gJ21vZHVsZXMvc2hhcmVkL1JhdGluZ1N0YXInO1xuXG5jb25zdCBBZ2VudERldGFpbCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgIGFnZW50XG4gICAgICAgICAgICAgICAgICAgICB9KSA9PiAoPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgPEF2YXRhciBpbWFnZVBhdGg9e2FnZW50LmltYWdlVXJsfSBuYW1lPXthZ2VudC5uYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgIDxoNiBjbGFzc05hbWU9XCJwZmMzIGYxNCBmdzkgbWI1IGF0X2FnZW50TmFtZVwiPnthZ2VudC5uYW1lfTwvaDY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iNSBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgIHthZ2VudC5zdGFyID9cbiAgICAgICAgICA8ZGl2PjxSYXRpbmdTdGFyIHJhdGluZz17YWdlbnQuc3Rhcn0gLz48L2Rpdj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTQgbTBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZmMzIGF0X3RyaXBDb3VudFwiPlxuICAgICAgICAgICAge2Ake2FnZW50LnRyaXBzU29sZH0gVHJpcHNgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWw1IG1yNVwiPnw8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBmYzMgYXRfUmV2aWV3c0NvdW50XCI+XG4gICAgICAgICAgICB7YCR7YWdlbnQucmV2aWV3c0NvdW50fSBSZXZpZXdzYH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQWdlbnREZXRhaWwucHJvcFR5cGVzID0ge1xuICBhZ2VudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRyaXBzU29sZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGhvbmVOdW1iZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdGFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmlld3NDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZpZXdMaW5rOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59O1xuXG5BZ2VudERldGFpbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFnZW50OiB7XG4gICAgc3RhcjogMCxcbiAgICByZXZpZXdzQ291bnQ6IDAsXG4gICAgcmV2aWV3TGluazogJydcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50RGV0YWlsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCb29rTm93UG9wdXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWdlbnQsIHByaWNlSW5mbywgY2xvc2VNb2RhbCwgYm9va05vdyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQyNCBwbDE1IHByMTUgcGIyNCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmMTQgc2ZjNiBhdF9hZ2VudEluZm8nPlxuICAgICAgICAgIHtgWW91IGFyZSBib29raW5nIHF1b3RlIGJ5IEFnZW50ICR7YWdlbnQubmFtZX0gcHJpY2VkIGF0ICR7cHJpY2VJbmZvLnByaWNlfSAoJHtwcmljZUluZm8ucGVyUGVyc29uID09PSAncGVyIHBlcnNvbicgPyAncGVyIHBlcnNvbicgOiAnIHRvdGFsJ30pLmB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQyNCB0ZXh0LXJpZ2h0Jz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXIyNCBzZmM2IGZ3NyBhdF9jbG9zZU1vZGFsJyBvbkNsaWNrPXtjbG9zZU1vZGFsfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNmYzEgZnc3IGF0X2NvbnRpbnVlXCIgb25DbGljaz17Ym9va05vd30+Q29udGludWU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJvb2tOb3dQb3B1cC5wcm9wVHlwZXMgPSB7XG4gIGFnZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcmljZUluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsb3NlTW9kYWw6IFByb3BUeXBlcy5mdW5jLFxuICBib29rTm93OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9va05vd1BvcHVwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgeyB0aW1lRnJvbU5vdyB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IHsgcXVvdGVEZXRhaWxQYXRoIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcbmltcG9ydCB7IHNob3dTdGF0dXNSaWJib24sIHF1b3RlU3RhdHVzQ2xhc3NlcywgcXVvdGVTdGF0dXNUZXh0IH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQge1xuICBnZXRBZ2VudERldGFpbHMsXG4gIGdldFByaWNlSW5mb3JtYXRpb24sXG4gIGdldERpc2NvdW50SW5mb3JtYXRpb24sXG4gIGdldEN1cnJlbnRRdW90ZVN0YXR1c2VzXG59IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IENoYXRJY29uR3JleSB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IEJvb2tOb3cgZnJvbSAnLi4vLi4vY3Rhcy9Cb29rTm93JztcbmltcG9ydCBSZWplY3RRdW90ZSBmcm9tICcuLi8uLi9jdGFzL1JlamVjdFF1b3RlJztcbmltcG9ydCBSZWFjdGl2YXRlUXVvdGUgZnJvbSAnLi4vLi4vY3Rhcy9SZWFjdGl2YXRlUXVvdGUnO1xuaW1wb3J0IFF1b3RlUHJpY2UgZnJvbSAnbW9kdWxlcy9xdW90ZS9zaGFyZWQvcHJpY2UvUXVvdGVQcmljZSc7XG5pbXBvcnQgQWdlbnRPbmxpbmVJbmRpY2F0b3IgZnJvbSAnbW9kdWxlcy9zaGFyZWQvYWdlbnRQcm9maWxlL0FnZW50T25saW5lSW5kaWNhdG9yJztcbmltcG9ydCBBZ2VudERldGFpbCBmcm9tICcuL0FnZW50RGV0YWlsJztcbmltcG9ydCBCb29rTm93UG9wdXAgZnJvbSAnLi9Cb29rTm93JztcbmltcG9ydCB7IE9SR0FOSVNNX1ZJRVdFRCwgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgUVVPVEVfRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvcXVvdGUvRXZlbnRUeXBlcyc7XG5cbmNvbnN0IEdRdW90ZUJveERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBib3hTaGFkb3c6ICcwIDAgNHB4ICNmMmYyZjInXG59KTtcblxuY29uc3QgR1F1b3RlU3RhdHVzRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmIC5xdW90ZVN0YXR1cyc6IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG90QnV0dG9uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzRweCcsXG4gIGhlaWdodDogJzRweCcsXG59KTtcbmNvbnN0IE9wZW5Ub29sdGlwUG9wID0gZ2xhbW9yb3VzLmRpdih7XG4gICc6aG92ZXIgPiAuY2hhbmdlSWNvbiBzcGFuJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDk2ODgnLFxuICB9LFxuICAnOmhvdmVyID4gLm9wZW5Ub29sdGlwJzoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0sXG59KTtcblxuY29uc3QgR1F1b3RlQ3Rhc0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBib3hTaGFkb3c6ICcwIDAgNnB4ICNjY2MnLFxuICBtaW5XaWR0aDogJzIwMHB4JyxcbiAgdG9wOiAnLTEwcHgnLFxuICBkaXNwbGF5OiAnbm9uZSdcbn0pO1xuXG5jb25zdCBHT2ZmZXJTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICBiYWNrZ3JvdW5kOiAnI2I3ZGZiOScsXG4gIGhlaWdodDogJzE2cHgnLFxuICBsaW5lSGVpZ2h0OiAnMTZweCcsXG59KTtcblxuY2xhc3MgUXVvdGVCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRyaXBJZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgY2FyZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcXVvdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb21tZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1c2VyRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNhbGxiYWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYm9va05vdzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBxdW90ZVJlamVjdGlvblJlYXNvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcblxuICBzdGF0aWMgcmVuZGVyUXVvdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHNob3dTdGF0dXNSaWJib24oc3RhdHVzKSA/XG4gICAgICAoPHNwYW4gY2xhc3NOYW1lPSdwbDUgcHI1Jz57cXVvdGVTdGF0dXNUZXh0KHN0YXR1cyl9PC9zcGFuPikgOlxuICAgICAgbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuTW9kYWw6IGZhbHNlLFxuICAgICAgY2xvc2VNb2RhbDogdHJ1ZSxcbiAgICB9O1xuICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IHRydWUsIG9wZW5Nb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgb3BlblBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KE9SR0FOSVNNX0NMSUNLRUQsICdRdW90ZXMgc2VjdGlvbicsICdCb29rIG5vdycsICcnLCAnJywgdGhpcy5wcm9wcy5xdW90ZS5pZCwgJ3F1b3RlIGlkJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogdHJ1ZSwgY2xvc2VNb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlQm9va05vdyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyaXBJZCwgcXVvdGUsIGNhbGxiYWNrSGFuZGxlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNhbGxiYWNrSGFuZGxlcihRVU9URV9FVkVOVFNfRU5VTVMuQk9PS19OT1csIHsgdHJpcElkOiB0cmlwSWQsIHF1b3RlSWQ6IHF1b3RlLmlkIH0pO1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUgJiYgIXRoaXMuaXNFdmVudFRyYWNrZWQpIHtcbiAgICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoT1JHQU5JU01fVklFV0VELCAnUXVvdGVzIHNlY3Rpb24nLCAnJywgJycsICdjYXJkIGluZGV4OjpkYXlzOjphZ2VudCByYXRpbmc6OnBhY2thZ2UgcHJpY2UnLCAnJywgJ3F1b3RlIGlkJyk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlclF1b3RlQ3RhKHF1b3RlU3RhdHVzKSB7XG4gICAgY29uc3QgeyB0cmlwSWQsIHF1b3RlLCBjYWxsYmFja0hhbmRsZXIsIHF1b3RlUmVqZWN0aW9uUmVhc29ucywgdHJhY2tTZWdtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChxdW90ZVN0YXR1cy5pc1JlamVjdGVkKSB7XG4gICAgICByZXR1cm4gPFJlYWN0aXZhdGVRdW90ZSBjYWxsYmFja0hhbmRsZXI9e2NhbGxiYWNrSGFuZGxlcn0gdHJpcElkPXt0cmlwSWR9IHF1b3RlSWQ9e3F1b3RlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY3RhLXJlYWN0aXZhdGUtcXVvdGVcIiBpc1F1b3RlQ2FyZEN0YT17dHJ1ZX0gLz47XG4gICAgfSBlbHNlIGlmIChxdW90ZVN0YXR1cy5pc0ludm9pY2VkIHx8IHF1b3RlU3RhdHVzLmlzSW52b2ljZVJlcXVlc3RlZCkge1xuICAgICAgcmV0dXJuIDxSZWplY3RRdW90ZSBxdW90ZVJlamVjdGlvblJlYXNvbnM9e3F1b3RlUmVqZWN0aW9uUmVhc29uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGFuZGxlcj17Y2FsbGJhY2tIYW5kbGVyfSB0cmlwSWQ9e3RyaXBJZH0gcXVvdGVJZD17cXVvdGUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImN0YS1yZWplY3QtcXVvdGVcIiBpc1F1b3RlQ2FyZEN0YT17dHJ1ZX0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8UmVqZWN0UXVvdGUgcXVvdGVSZWplY3Rpb25SZWFzb25zPXtxdW90ZVJlamVjdGlvblJlYXNvbnN9XG4gICAgICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudH1cbiAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGFuZGxlcj17Y2FsbGJhY2tIYW5kbGVyfSB0cmlwSWQ9e3RyaXBJZH0gcXVvdGVJZD17cXVvdGUuaWR9XG4gICAgICAgICAgICAgICAgICAgICBrZXk9XCJjdGEtcmVqZWN0LXF1b3RlXCIgaXNRdW90ZUNhcmRDdGE9e3RydWV9IC8+XG4gICAgICAgIDxCb29rTm93IGNhbGxiYWNrSGFuZGxlcj17dGhpcy5vcGVuUG9wdXB9IHRyaXBJZD17dHJpcElkfSBxdW90ZUlkPXtxdW90ZS5pZH1cbiAgICAgICAgICAgICAgICAga2V5PVwiY3RhLWJvb2stbm93XCIgaXNRdW90ZUNhcmRDdGE9e3RydWV9IC8+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUXVvdGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IHF1b3RlLCBjYXJkSW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWdlbnREZXRhaWxzID0gZ2V0QWdlbnREZXRhaWxzKHF1b3RlKTtcblxuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KE9SR0FOSVNNX0NMSUNLRUQsICdRdW90ZXMgc2VjdGlvbicsICdWaWV3IHF1b3RlJyxcbiAgICAgIGAke2NhcmRJbmRleCArIDF9Ojoke3F1b3RlLmRheXN9Ojoke2FnZW50RGV0YWlscy5zdGFyfTo6JHtxdW90ZS5wcmljaW5nSW5mby50b3RhbFByaWNlfWAsXG4gICAgICAnY2FyZCBpbmRleDo6ZGF5czo6YWdlbnQgcmF0aW5nOjpwYWNrYWdlIHByaWNlJywgcXVvdGUuaWQsICdxdW90ZSBpZCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyaXBJZCwgcXVvdGUsIHVzZXJEZXRhaWxzLCBjb21tZW50cyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGFnZW50RGV0YWlscyA9IGdldEFnZW50RGV0YWlscyhxdW90ZSk7XG4gICAgY29uc3QgcHJpY2VJbmZvcm1hdGlvbiA9IGdldFByaWNlSW5mb3JtYXRpb24ocXVvdGUpO1xuICAgIGNvbnN0IGRpc2NvdW50SW5mb3JtYXRpb24gPSBnZXREaXNjb3VudEluZm9ybWF0aW9uKHF1b3RlKTtcbiAgICBjb25zdCBxZHBQYXRoID0gcXVvdGVEZXRhaWxQYXRoKHRyaXBJZCwgcXVvdGUuaWQpO1xuICAgIGNvbnN0IGNvbW1lbnRzQ291bnQgPSBjb21tZW50cyAmJiBjb21tZW50cy5jb21tZW50c0NvdW50O1xuICAgIGNvbnN0IHF1b3RlU3RhdHVzID0gZ2V0Q3VycmVudFF1b3RlU3RhdHVzZXMocXVvdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZW5zb3Igb25DaGFuZ2U9e3RoaXMub25TZW5zb3JDaGFuZ2V9XG4gICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nXG4gICAgICAgICAgICAgIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgPEdRdW90ZUJveERpdiBjbGFzc05hbWU9XCJzYmN3IG04IHBsMTUgcHIxNSBwdDggcGI4IHJhZGl1czIgcmVsYXRpdmUgYXRfcXVvdGVDYXJkXCI+XG4gICAgICAgICAgeyhxdW90ZVN0YXR1cy5pc1JlcXVlc3RDYW5jZWxsZWQgfHwgcXVvdGVTdGF0dXMuaXNDYW5jZWxsZWQgfHwgcXVvdGVTdGF0dXMuaXNDb252ZXJ0ZWQpID9cbiAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgPE9wZW5Ub29sdGlwUG9wIGNsYXNzTmFtZT0naWJsb2NrIGljb24tMTggZnJpZ2h0IHoxMCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiejEwIGljb24tMTggY2hhbmdlSWNvbiBhdF90b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgPEdEb3RCdXR0b24gY2xhc3NOYW1lPVwicGJjNCBhYnNvbHV0ZSByYWRpdXMxMDBcIiAvPlxuICAgICAgICAgICAgICAgIDxHRG90QnV0dG9uIGNsYXNzTmFtZT1cInBiYzQgdDggYjEgYWJzb2x1dGUgcmFkaXVzMTAwXCIgLz5cbiAgICAgICAgICAgICAgICA8R0RvdEJ1dHRvbiBjbGFzc05hbWU9XCJwYmM0IHQxNSBhYnNvbHV0ZSByYWRpdXMxMDBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEdRdW90ZUN0YXNEaXYgY2xhc3NOYW1lPXtgYXRfdG9vbHRpcFBvcHVwIGFic29sdXRlIHIwIHNiY3cgejIgb3BlblRvb2x0aXBgfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJRdW90ZUN0YShxdW90ZVN0YXR1cyl9XG4gICAgICAgICAgICAgIDwvR1F1b3RlQ3Rhc0Rpdj5cbiAgICAgICAgICAgIDwvT3BlblRvb2x0aXBQb3A+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIG1iMTUnPlxuICAgICAgICAgICAgPEFnZW50T25saW5lSW5kaWNhdG9yXG4gICAgICAgICAgICAgIHNob3dQcmVzZW5jZU1lc3NhZ2U9e3RydWV9XG4gICAgICAgICAgICAgIHVzZXJJZD17cXVvdGUuYWdlbnQuaWR9XG4gICAgICAgICAgICAgIHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbW1lbnRzQ291bnQgP1xuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IGF0X21lc3NhZ2VzTmV3IGYxMiBwZmM0XCI+PHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpY29uLTE4IG1yNCBpYmxvY2snPjxDaGF0SWNvbkdyZXkgLz48L3NwYW4+IHtjb21tZW50c0NvdW50fSBjaGF0IG1lc3NhZ2V7Y29tbWVudHNDb3VudCA+IDEgPyAncycgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmsgdG89e3FkcFBhdGh9IGNsYXNzTmFtZT0nYXRfYWdlbnREZXRhaWxzJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVF1b3RlQ2xpY2t9PlxuICAgICAgICAgICAgPEFnZW50RGV0YWlsIGFnZW50PXthZ2VudERldGFpbHN9IHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc30gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfVxuICAgICAgICAgICAgICBjdXN0b21DbG9zZVRyaWdnZXI9e3RoaXMuc3RhdGUuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2VDdXN0b209e3RoaXMuY2xvc2VQb3B1cH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJvb2tOb3dQb3B1cCBhZ2VudD17YWdlbnREZXRhaWxzfSBwcmljZUluZm89e3ByaWNlSW5mb3JtYXRpb259IGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VQb3B1cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29rTm93PXt0aGlzLmhhbmRsZUJvb2tOb3d9IC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEdRdW90ZVN0YXR1c0RpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBidCBwdDE1IG10OCBtYjhcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHF1b3RlU3RhdHVzIHJhZGl1czIwIHBiYzQgaWJsb2NrICBzZmN3IGYxMiBwbDE1IHByMTUgYXRfcXVvdGVTdGF0dXMgJHtxdW90ZVN0YXR1c0NsYXNzZXMocXVvdGUuc3RhdHVzKX1gfT5cbiAgICAgICAgICAgICAge1F1b3RlQm94LnJlbmRlclF1b3RlU3RhdHVzKHF1b3RlLnN0YXR1cyl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7ZGlzY291bnRJbmZvcm1hdGlvbi5kaXNjb3VudCA+IDAgP1xuICAgICAgICAgICAgICA8R09mZmVyU3BhbiBjbGFzc05hbWU9J2ZyaWdodCByYWRpdXMyMCBpYmxvY2sgIHNmYzYgZjEwIHBsMTUgcHIxNSc+T2ZmZXIgQXBwbGllZDwvR09mZmVyU3Bhbj4gOiAnJ31cbiAgICAgICAgICA8L0dRdW90ZVN0YXR1c0Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2YxMiBwZmM0IGF0X3VwZGF0ZWRIb3Vycyc+e2BVcGRhdGVkICR7dGltZUZyb21Ob3cocXVvdGUudXBkYXRlZEF0KX1gfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj48UXVvdGVQcmljZSB7Li4ucHJpY2VJbmZvcm1hdGlvbn0gey4uLmRpc2NvdW50SW5mb3JtYXRpb259IC8+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR1F1b3RlQm94RGl2PlxuICAgICAgPC9TZW5zb3I+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdW90ZUJveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBwdXNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0VXNlckRldGFpbHMgfSBmcm9tICdyZWR1Y2Vycy9hdXRoJztcbmltcG9ydCB7IGxvYWQgYXMgZmV0Y2hRdW90ZXMgfSBmcm9tICcuLi9hY3Rpb25zL3F1b3RlTGlzdCc7XG5pbXBvcnQgeyBsb2FkIGFzIGZldGNoUXVvdGVzQ29uc3RhbnRzIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25zdGFudHMnO1xuaW1wb3J0IHsgbG9hZCBhcyBmZXRjaFF1b3Rlc0NvbW1lbnRzIH0gZnJvbSAnLi4vYWN0aW9ucy9xdW90ZUNvbW1lbnRzJztcbmltcG9ydCB7IGJvb2tOb3csIHJlamVjdFF1b3RlLCByZWFjdGl2YXRlUXVvdGUsIHJlcXVlc3RNb3JlUXVvdGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZmV0Y2hEaXNjb3VudE9mZmVycyB9IGZyb20gJ21vZHVsZXMvZGlzY291bnRFbmdpbmUvYWN0aW9uJztcbmltcG9ydCBRdW90ZXNTZWN0aW9uIGZyb20gJy4vUXVvdGVzUmVjZWl2ZWQnO1xuaW1wb3J0IHsgZ2V0UXVvdGVSZWplY3Rpb25SZWFzb25zIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9jb25zdGFudHMnO1xuaW1wb3J0IHsgc2hvd1Jvc3RlciB9IGZyb20gJ21vZHVsZXMvcm9zdGVyL2FjdGlvbic7XG5cbmNvbnN0IHN0YXRlRnVuYyA9IChzdGF0ZSkgPT4gKHtcbiAgY3VycmVudFRyaXBJZDogc3RhdGUudHJpcC5jdXJyZW50VHJpcC5kYXRhLmlkLFxuICBxdW90ZXM6IHN0YXRlLnF1b3RlLmxpc3QuZGF0YS5xdW90ZXMsXG4gIHNvcnRPcmRlcjogc3RhdGUucXVvdGUubGlzdC5kYXRhLnNvcnRPcmRlcixcbiAgcXVvdGVzQ29tbWVudHM6IHN0YXRlLnF1b3RlLmNvbW1lbnRzLmRhdGEsXG4gIHVzZXJEZXRhaWxzOiBnZXRVc2VyRGV0YWlscyhzdGF0ZSksXG4gIGxheW91dDogc3RhdGUubGF5b3V0LmRhdGEuZGF0YSxcbiAgY29uc3RhbnRzOiBzdGF0ZS50cmlwLmNvbnN0YW50cy5jb25zdGFudHMsXG4gIHF1b3RlUmVqZWN0aW9uUmVhc29uczogZ2V0UXVvdGVSZWplY3Rpb25SZWFzb25zKHN0YXRlKSxcbiAgbW9yZVF1b3Rlc1JlcXVlc3RlZDogc3RhdGUucXVvdGUuYWN0aW9ucy5tb3JlUXVvdGVzUmVxdWVzdGVkXG59KTtcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZUZ1bmMsXG4gIHtcbiAgICBmZXRjaFF1b3RlcyxcbiAgICBmZXRjaFF1b3Rlc0NvbnN0YW50cyxcbiAgICBmZXRjaFF1b3Rlc0NvbW1lbnRzLFxuICAgIGJvb2tOb3csXG4gICAgcmVqZWN0UXVvdGUsXG4gICAgcmVhY3RpdmF0ZVF1b3RlLFxuICAgIGZldGNoRGlzY291bnRPZmZlcnMsXG4gICAgcmVxdWVzdE1vcmVRdW90ZXMsXG4gICAgcHVzaFN0YXRlOiBwdXNoLFxuICAgIHNob3dSb3N0ZXJcbiAgfVxuKShRdW90ZXNTZWN0aW9uKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7XG4gICAgZmV0Y2hRdW90ZXNcbiAgfSxcbiAgZGVmYXVsdEFjdGlvbjogZmV0Y2hRdW90ZXNcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICd1dGlscy9mb3JtVmFsaWRhdG9ycyc7XG5cbmNvbnN0IHJlbmRlclJhZGlvQnV0dG9uID0gKHsgaW5wdXQsIG9wdGlvbnMsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgb25DbGlja0hhbmRsZXIgfSkgPT4gKFxuICA8ZGl2PlxuICAgIHtcbiAgICAgIHRvdWNoZWQgJiZcbiAgICAgIChlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJmMTQgZnc3IG10OCBtYjBcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+UGxlYXNlIHNlbGVjdCBhIHJlYXNvbi48L3NwYW4+KVxuICAgIH1cbiAgICB7b3B0aW9uc1xuICAgICAgPyBvcHRpb25zLm1hcChvcHRpb24gPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWI4JyBrZXk9e29wdGlvbi5pZH0+XG4gICAgICAgICAgPGlucHV0IG5hbWU9e2lucHV0Lm5hbWV9IHR5cGU9XCJyYWRpb1wiIHsuLi5pbnB1dH0gY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uLWNpcmNsZSBjaGVja2JveC1yb3VuZFwiXG4gICAgICAgICAgICAgICAgIGlkPXtgZmVlZGJhY2ske29wdGlvbi5pZH1gfSB2YWx1ZT17b3B0aW9uLmlkfSBjaGVja2VkPXtvcHRpb24uaWQgPT09IGlucHV0LnZhbHVlfVxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn0gLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaWJsb2NrIHdmdWxsIGYxNCBzZmM2IG1iOCBtdDhcIiBodG1sRm9yPXtgZmVlZGJhY2ske29wdGlvbi5pZH1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbDMnPntvcHRpb24ubmFtZX08L2Rpdj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpXG4gICAgICA6IG51bGxcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxucmVuZGVyUmFkaW9CdXR0b24ucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBvbkNsaWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmNvbnN0IHJlbmRlclJlamVjdFJlYXNvblRleHRCb3ggPSAoeyBpbnB1dCB9KSA9PiAoXG4gIDxUZXh0QXJlYSBwbGFjZWhvbGRlcj1cIldyaXRlIEhlcmUgXCIgY2xhc3NOYW1lPVwiYm9yZGVyIHA4IG1iOFwiIHsuLi5pbnB1dH0gLz5cbik7XG5cbnJlbmRlclJlamVjdFJlYXNvblRleHRCb3gucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuXG5jb25zdCBUZXh0QXJlYSA9IGdsYW1vcm91cy50ZXh0YXJlYSh7XG4gIGhlaWdodDogJzc2cHgnLFxuICBtYXJnaW5MZWZ0OiAnMzBweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICB3aWR0aDogJzgwJSdcbn0pO1xuXG5jb25zdCBHU2Nyb2xsRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzcydmgnLFxufSk7XG5cblxuY2xhc3MgTW9yZVF1b3Rlc0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29uc3RhbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhhbmRsZUNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbWV0YTogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc090aGVyUmVhc29uVmlzaWJsZTogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuaGlkZU90aGVyUmVhc29uID0gdGhpcy5oaWRlT3RoZXJSZWFzb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dPdGhlclJlYXNvbiA9IHRoaXMuc2hvd090aGVyUmVhc29uLmJpbmQodGhpcyk7XG4gIH1cblxuICBoaWRlT3RoZXJSZWFzb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3RoZXJSZWFzb25WaXNpYmxlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHNob3dPdGhlclJlYXNvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPdGhlclJlYXNvblZpc2libGU6IHRydWUgfSk7XG4gIH1cblxuICBoYW5kbGVPcHRpb25DbGljayA9IChlKSA9PiBlLnRhcmdldC52YWx1ZSA9PT0gJzYnID8gdGhpcy5zaG93T3RoZXJSZWFzb24oKSA6IHRoaXMuaGlkZU90aGVyUmVhc29uKCk7IC8vb3RoZXIgb3B0aW9uXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG90aGVyUmVhc29uTm9kZSA9IHRoaXMuc3RhdGUuaXNPdGhlclJlYXNvblZpc2libGUgP1xuICAgICAgKDxGaWVsZFxuICAgICAgICBjb21wb25lbnQ9e3JlbmRlclJlamVjdFJlYXNvblRleHRCb3h9XG4gICAgICAgIG5hbWU9XCJvdGhlclJlYXNvblwiXG4gICAgICAvPikgOiBudWxsO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuY29uc3RhbnRzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5jb25zdGFudHNba2V5XVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9wdGlvbnNGaWVsZCA9IDxGaWVsZFxuICAgICAgbmFtZT1cImZlZWRiYWNrXCJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICBjb21wb25lbnQ9e3JlbmRlclJhZGlvQnV0dG9ufVxuICAgICAgb25DbGlja0hhbmRsZXI9eyhlKSA9PiB0aGlzLmhhbmRsZU9wdGlvbkNsaWNrKGUpfVxuICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxuICAgIC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICA8R1Njcm9sbERpdiBjbGFzc05hbWU9J3dmdWxsIG92ZXJmbG93YSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBzYmN3IHoyIHAwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGlibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHBiMjQgcHQyNFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IGZ3NyBzZmM2IG1iMFwiPlBsZWFzZSBsZXQgdXMga25vdyB3aHkgYXJlIHlvdSByZXF1ZXN0aW5nIGZvciBtb3JlIHF1b3Rlcz88L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwMTUgcHQwXCI+XG4gICAgICAgICAgICAgICAge29wdGlvbnNGaWVsZH1cbiAgICAgICAgICAgICAgICB7b3RoZXJSZWFzb25Ob2RlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR1Njcm9sbERpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwMTUgIHRleHQtcmlnaHQgcGIyNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBpYmxvY2sgbXIyNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNhbmNlbH0gY2xhc3NOYW1lPVwic2ZjNiBmdzdcIj5DYW5jZWw8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J3NmYzEgZnc3IG1yOCBtbDgnPlJlcXVlc3QgUXVvdGVzPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnbW9yZVF1b3Rlc0Zvcm0nXG59KShNb3JlUXVvdGVzRm9ybSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHtcbiAgU3Rhckljb24sXG4gIEhhbGZTdGFyLFxuICBTdGFySWNvbkVtcHR5XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgR1JhdGluZ1VsID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1hcmdpbjogJzAnLFxuICBwYWRkaW5nOiAnMCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAnJiBsaSc6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5SaWdodDogJzZweCcsXG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcwJyxcbiAgICB9LFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0U3RhcnMoQ29tcG9uZW50LCBzdGFyTnVtLCBrZXlUeXBlKSB7XG4gIGxldCBpID0gMDtcbiAgY29uc3Qgc3RhcnMgPSBbXTtcbiAgd2hpbGUgKGkgPCBzdGFyTnVtKSB7XG4gICAgc3RhcnMucHVzaCg8bGkga2V5PXtrZXlUeXBlICsgaX0+PENvbXBvbmVudCAvPjwvbGk+KTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIHN0YXJzO1xufVxuXG5jb25zdCBSYXRpbmdTdGFyID0gKHsgcmF0aW5nLCBpc0VtcHR5U3RhcnNIaWRkZW4gfSkgPT4ge1xuICBjb25zdCBzdGFycyA9IFtdO1xuICBjb25zdCByYXRpbmdCYXJSYW5nZSA9IDU7XG4gIGNvbnN0IHRydW5jYXRlZFJhdGluZyA9IE1hdGgudHJ1bmMocmF0aW5nKTtcbiAgY29uc3QgZnJhY3Rpb25hbFJhdGluZyA9IHBhcnNlRmxvYXQoKHJhdGluZyAtIHRydW5jYXRlZFJhdGluZykudG9GaXhlZCgxKSk7XG4gIGxldCBmdWxsU3RhckNvdW50ID0gMDtcbiAgbGV0IGhhbGZTdGFyQ291bnQgPSAwO1xuXG4gIGlmIChmcmFjdGlvbmFsUmF0aW5nID09PSAwLjApIHtcbiAgICBmdWxsU3RhckNvdW50ID0gcmF0aW5nO1xuICB9IGVsc2UgaWYgKGZyYWN0aW9uYWxSYXRpbmcgPD0gMC41KSB7XG4gICAgZnVsbFN0YXJDb3VudCA9IHRydW5jYXRlZFJhdGluZztcbiAgICBoYWxmU3RhckNvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBmdWxsU3RhckNvdW50ID0gdHJ1bmNhdGVkUmF0aW5nICsgMTtcbiAgfVxuXG4gIGNvbnN0IGVtcHR5U3RhckNvdW50ID0gcmF0aW5nQmFyUmFuZ2UgLSAoZnVsbFN0YXJDb3VudCArIGhhbGZTdGFyQ291bnQpO1xuXG4gIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb24sIGZ1bGxTdGFyQ291bnQsICdmdWxsX3N0YXInKSk7XG4gIHN0YXJzLnB1c2goZ2V0U3RhcnMoSGFsZlN0YXIsIGhhbGZTdGFyQ291bnQsICdoYWxmX3N0YXInKSk7XG4gIC8vIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb25FbXB0eSwgZW1wdHlTdGFyQ291bnQsICdlbXB0eV9zdGFyJykpO1xuICBpZiAoIWlzRW1wdHlTdGFyc0hpZGRlbikge1xuICAgIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb25FbXB0eSwgZW1wdHlTdGFyQ291bnQsICdlbXB0eV9zdGFyJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R1JhdGluZ1VsIGNsYXNzTmFtZT1cInJhdGluZy1zdGFyLWxpc3QgYXRfcmF0aW5nXCI+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBzdGFyc1xuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvR1JhdGluZ1VsPlxuICApO1xufTtcblxuUmF0aW5nU3Rhci5wcm9wVHlwZXMgPSB7XG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNFbXB0eVN0YXJzSGlkZGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUmF0aW5nU3Rhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHJhdGluZzogMCxcbiAgaXNFbXB0eVN0YXJzSGlkZGVuOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nU3RhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=