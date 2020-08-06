require("source-map-support").install();
exports.ids = ["quote-itinerary-list"];
exports.modules = {

/***/ "./app-v2/modules/quote/itinerary/helper.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/helper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowMoreText = exports.getHotelOrAirportDetails = exports.results = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const results = quote => {
  return quote.newFormatTripDays || [];
};

exports.results = results;

const getHotelOrAirportDetails = (info = {}) => {
  return {
    name: info.name,
    email: info.email,
    phone: info.phone,
    description: info.hotelDesc || info.airportDes,
    lat: info.lat,
    long: info.long,
    address: info.address,
    rating: info.ratings,
    webUrl: info.webUrl,
    images: info.images
  };
};

exports.getHotelOrAirportDetails = getHotelOrAirportDetails;

const getShowMoreText = (text, breakAt) => {
  const wrapText = text ? text.substr(0, breakAt) : '';
  const moreText = text && text.length > breakAt ? text.substr(breakAt) : '';
  return {
    wrapText: wrapText && wrapText.split('\n').map((i, key) => {
      return _react.default.createElement("span", {
        key: key
      }, i);
    }),
    moreText: moreText && moreText.split('\n').map((text, key) => {
      return key === 0 ? _react.default.createElement("span", {
        key: key
      }, text) : _react.default.createElement("div", {
        key: key
      }, text);
    })
  };
};

exports.getShowMoreText = getShowMoreText;

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/list/ItineraryList.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/list/ItineraryList.js ***!
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

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _pdmHelpers = __webpack_require__(/*! helpers/pdmHelpers */ "./app/helpers/pdmHelpers.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _activityConstant = __webpack_require__(/*! constants/activityConstant */ "./app/constants/activityConstant.js");

var _QuoteCardHeader = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/QuoteCardHeader */ "./app-v2/modules/quote/shared/QuoteCardHeader.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GItineraryArrowSpan = _glamorous.default.span({
  transform: 'rotateZ(-90deg)'
});

const ItineraryList = ({
  tripId,
  quoteId,
  itineraryInfo,
  trackSegment,
  setPdmCategory,
  showHidePdmView
}) => {
  const trackSegmentEvent = (event, cta, object) => {
    trackSegment({
      event,
      section: 'itinerary',
      object: object || '',
      cta
    });
  };

  const handleChatClick = () => {
    setPdmCategory(_pdmHelpers.PDM_CATEGORY_ITINERARY);
    showHidePdmView(true);
    trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Edit Package', 'Main');
  };

  const renderListItems = (item, index) => {
    const itineraryUrl = (0, _urlHelpers.itineraryPath)(tripId, quoteId);
    const day = index + 1;
    return _react.default.createElement(_reactRouter.Link, {
      to: `${itineraryUrl}?day=${day}`,
      key: index
    }, _react.default.createElement("div", {
      className: "flex alignCenter spaceBetween p15 bt at_itinerarylist"
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("h4", {
      className: "f16 fw9 pfc3 m0 mr8"
    }, `Day ${day}`), item.eventTime ? _react.default.createElement("p", {
      className: "f12 pfc4 m0 at_eventTime"
    }, item.eventTime) : null), _react.default.createElement("p", {
      className: "f14 pfc3 mt5"
    }, item.title)), _react.default.createElement(GItineraryArrowSpan, {
      className: "input-24 block p5 flex alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.DownArrow, null))));
  };

  return _react.default.createElement(_reactScroll.Element, {
    name: "itinerary-sec"
  }, _react.default.createElement("div", {
    className: "pfc3 f14 sbcw mt8"
  }, _react.default.createElement(_QuoteCardHeader.default, {
    heading: "Itinerary",
    chatButtonName: "Edit Package",
    handleChatClick: handleChatClick,
    icon: _react.default.createElement(_Icon.ItineraryIcon, null)
  }), _react.default.createElement("div", null, itineraryInfo.map((item, index) => Object.keys(item).map(section => {
    if (item[section].sectionType === _activityConstant.ACTIVITY.itinerary) {
      return renderListItems(item[section], index);
    }
  })))));
};

ItineraryList.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  itineraryInfo: _propTypes.default.array,
  trackSegment: _propTypes.default.func,
  showHidePdmView: _propTypes.default.func,
  setPdmCategory: _propTypes.default.func
};
ItineraryList.defaultProps = {
  itineraryInfo: [],
  tracksegment: () => {},
  setPdmCategory: () => {},
  showHidePdmView: () => {}
};
var _default = ItineraryList;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/itinerary/list/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/itinerary/list/index.js ***!
  \******************************************************/
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

var _quoteList = __webpack_require__(/*! modules/quote/actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _constants = __webpack_require__(/*! modules/quote/actions/constants */ "./app-v2/modules/quote/actions/constants.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _action = __webpack_require__(/*! modules/discountEngine/action */ "./app-v2/modules/discountEngine/action.js");

var _action2 = __webpack_require__(/*! modules/pdm/action */ "./app-v2/modules/pdm/action.js");

var _helper = __webpack_require__(/*! ../helper */ "./app-v2/modules/quote/itinerary/helper.js");

var _quoteActivities2 = __webpack_require__(/*! modules/quote/reducers/quoteActivities */ "./app-v2/modules/quote/reducers/quoteActivities.js");

var _quoteList2 = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _ItineraryList = _interopRequireDefault(__webpack_require__(/*! ./ItineraryList */ "./app-v2/modules/quote/itinerary/list/ItineraryList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const currentQuote = (0, _quoteList2.getCurrentQuote)(state);
  return {
    itineraryInfo: (0, _helper.results)(currentQuote),
    tripId: (0, _quoteActivities2.getTripId)(state),
    quoteId: currentQuote.id
  };
}, {
  setPdmCategory: _action2.setPdmCategory,
  showHidePdmView: _action2.showHidePdmView
})(_ItineraryList.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/AgentChatButton.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/shared/AgentChatButton.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _chat = _interopRequireDefault(__webpack_require__(/*! modules/chat */ "./app-v2/modules/chat/index.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AgentChatButton = (_temp = _class = class AgentChatButton extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      textClassName
    } = this.props;
    const ChatContainer = _chat.default.container;
    return _react.default.createElement("div", null, this.props.showIcon ? _react.default.createElement("span", {
      className: "input-24 mr8"
    }, _react.default.createElement(_Icon.DefaultIcon, null)) : null, _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("button", {
        className: `${textClassName} at_agent_chat_button`,
        onClick: this.props.handleChatClick
      }, this.props.name),
      fullView: true,
      hasCustomClose: true,
      isWhiteIcon: true
    }, _react.default.createElement(ChatContainer, null)));
  }

}, _class.propTypes = {
  name: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  handleChatClick: _propTypes.default.func,
  textClassName: _propTypes.default.string,
  customButton: _propTypes.default.bool
}, _class.defaultProps = {
  name: 'Chat',
  showIcon: false,
  handleChatClick: () => {},
  textClassName: 'f14 fw7 sfc1',
  customButton: false
}, _temp);
var _default = AgentChatButton;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/QuoteCardHeader.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/shared/QuoteCardHeader.js ***!
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

var _AgentChatButton = _interopRequireDefault(__webpack_require__(/*! ./AgentChatButton */ "./app-v2/modules/quote/shared/AgentChatButton.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QuoteCardHeader = ({
  heading,
  chatButtonName,
  handleChatClick,
  icon
}) => _react.default.createElement("div", {
  className: "pfc3 f14 pt15 pl15 pb15 pr15 flex alignCenter at_cardHeader"
}, _react.default.createElement("span", {
  className: "input-24 mr8 at_cardIcon"
}, icon), _react.default.createElement("h3", {
  className: "flexFull f16a fw9 at_cardHeading"
}, heading), _react.default.createElement(_AgentChatButton.default, {
  name: chatButtonName,
  handleChatClick: handleChatClick
}));

QuoteCardHeader.propTypes = {
  heading: _propTypes.default.string,
  chatButtonName: _propTypes.default.string,
  category: _propTypes.default.string,
  icon: _propTypes.default.node,
  handleChatClick: _propTypes.default.func
};
QuoteCardHeader.defaultProps = {
  heading: '',
  chatButtonName: '',
  category: '',
  icon: _react.default.createElement(_Icon.DefaultIcon, null),
  handleChatClick: () => {}
};
var _default = QuoteCardHeader;
exports.default = _default;

/***/ }),

/***/ "./app/constants/activityConstant.js":
/*!*******************************************!*\
  !*** ./app/constants/activityConstant.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIVITY = void 0;
const ACTIVITY = Object.freeze({
  flight: 'flight',
  itinerary: 'itinerary',
  cab: 'cab',
  hotel: 'hotel',
  attraction: 'attraction'
});
exports.ACTIVITY = ACTIVITY;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9pdGluZXJhcnkvaGVscGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2l0aW5lcmFyeS9saXN0L0l0aW5lcmFyeUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvaXRpbmVyYXJ5L2xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL0FnZW50Q2hhdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvUXVvdGVDYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb25zdGFudHMvYWN0aXZpdHlDb25zdGFudC5qcyJdLCJuYW1lcyI6WyJyZXN1bHRzIiwicXVvdGUiLCJuZXdGb3JtYXRUcmlwRGF5cyIsImdldEhvdGVsT3JBaXJwb3J0RGV0YWlscyIsImluZm8iLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImRlc2NyaXB0aW9uIiwiaG90ZWxEZXNjIiwiYWlycG9ydERlcyIsImxhdCIsImxvbmciLCJhZGRyZXNzIiwicmF0aW5nIiwicmF0aW5ncyIsIndlYlVybCIsImltYWdlcyIsImdldFNob3dNb3JlVGV4dCIsInRleHQiLCJicmVha0F0Iiwid3JhcFRleHQiLCJzdWJzdHIiLCJtb3JlVGV4dCIsImxlbmd0aCIsInNwbGl0IiwibWFwIiwiaSIsImtleSIsIkdJdGluZXJhcnlBcnJvd1NwYW4iLCJnbGFtb3JvdXMiLCJzcGFuIiwidHJhbnNmb3JtIiwiSXRpbmVyYXJ5TGlzdCIsInRyaXBJZCIsInF1b3RlSWQiLCJpdGluZXJhcnlJbmZvIiwidHJhY2tTZWdtZW50Iiwic2V0UGRtQ2F0ZWdvcnkiLCJzaG93SGlkZVBkbVZpZXciLCJ0cmFja1NlZ21lbnRFdmVudCIsImV2ZW50IiwiY3RhIiwib2JqZWN0Iiwic2VjdGlvbiIsImhhbmRsZUNoYXRDbGljayIsIlBETV9DQVRFR09SWV9JVElORVJBUlkiLCJPUkdBTklTTV9DTElDS0VEIiwicmVuZGVyTGlzdEl0ZW1zIiwiaXRlbSIsImluZGV4IiwiaXRpbmVyYXJ5VXJsIiwiZGF5IiwiZXZlbnRUaW1lIiwidGl0bGUiLCJPYmplY3QiLCJrZXlzIiwic2VjdGlvblR5cGUiLCJBQ1RJVklUWSIsIml0aW5lcmFyeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ0cmFja3NlZ21lbnQiLCJjb250YWluZXIiLCJzdGF0ZSIsImN1cnJlbnRRdW90ZSIsImlkIiwid2Vidmlld0FjdGlvbnMiLCJmZXRjaFF1b3Rlc0RhdGEiLCJsb2FkQ29uc3RhbnRzIiwiZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMiLCJmZXRjaERpc2NvdW50T2ZmZXJzIiwic3dpdGNoUXVvdGUiLCJ1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQiLCJBZ2VudENoYXRCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJ0ZXh0Q2xhc3NOYW1lIiwiQ2hhdENvbnRhaW5lciIsIkNoYXQiLCJzaG93SWNvbiIsInN0cmluZyIsImJvb2wiLCJjdXN0b21CdXR0b24iLCJRdW90ZUNhcmRIZWFkZXIiLCJoZWFkaW5nIiwiY2hhdEJ1dHRvbk5hbWUiLCJpY29uIiwiY2F0ZWdvcnkiLCJub2RlIiwiZnJlZXplIiwiZmxpZ2h0IiwiY2FiIiwiaG90ZWwiLCJhdHRyYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFTyxNQUFNQSxVQUFXQyxLQUFELElBQVc7QUFDaEMsU0FBT0EsTUFBTUMsaUJBQU4sSUFBMkIsRUFBbEM7QUFDRCxDQUZNOzs7O0FBSUEsTUFBTUMsMkJBQTJCLENBQUNDLE9BQU8sRUFBUixLQUFlO0FBQ3JELFNBQU87QUFDTEMsVUFBTUQsS0FBS0MsSUFE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QyxrQkFBZ0IsRUFGYTtBQUc3QkUsWUFBVSxFQUhtQjtBQUk3QkQsUUFBTSw2QkFBQyxpQkFBRCxPQUp1QjtBQUs3QmxELG1CQUFpQixNQUFNLENBQ3RCO0FBTjRCLENBQS9CO2VBU2UrQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JSLE1BQU1sQyxXQUFXSCxPQUFPMkMsTUFBUCxDQUFjO0FBQ3BDQyxVQUFRLFFBRDRCO0FBRXBDeEMsYUFBVyxXQUZ5QjtBQUdwQ3lDLE9BQUssS0FIK0I7QUFJcENDLFNBQU8sT0FKNkI7QUFLcENDLGNBQVk7QUFMd0IsQ0FBZCxDQUFqQiIsImZpbGUiOiJxdW90ZS1pdGluZXJhcnktbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCByZXN1bHRzID0gKHF1b3RlKSA9PiB7XG4gIHJldHVybiBxdW90ZS5uZXdGb3JtYXRUcmlwRGF5cyB8fCBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIb3RlbE9yQWlycG9ydERldGFpbHMgPSAoaW5mbyA9IHt9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogaW5mby5uYW1lLFxuICAgIGVtYWlsOiBpbmZvLmVtYWlsLFxuICAgIHBob25lOiBpbmZvLnBob25lLFxuICAgIGRlc2NyaXB0aW9uOiBpbmZvLmhvdGVsRGVzYyB8fCBpbmZvLmFpcnBvcnREZXMsXG4gICAgbGF0OiBpbmZvLmxhdCxcbiAgICBsb25nOiBpbmZvLmxvbmcsXG4gICAgYWRkcmVzczogaW5mby5hZGRyZXNzLFxuICAgIHJhdGluZzogaW5mby5yYXRpbmdzLFxuICAgIHdlYlVybDogaW5mby53ZWJVcmwsXG4gICAgaW1hZ2VzOiBpbmZvLmltYWdlc1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNob3dNb3JlVGV4dCA9ICh0ZXh0LCBicmVha0F0KSA9PiB7XG4gIGNvbnN0IHdyYXBUZXh0ID0gdGV4dCA/IHRleHQuc3Vic3RyKDAsIGJyZWFrQXQpIDogJyc7XG4gIGNvbnN0IG1vcmVUZXh0ID0gdGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IGJyZWFrQXQgPyB0ZXh0LnN1YnN0cihicmVha0F0KSA6ICcnO1xuXG4gIHJldHVybiB7XG4gICAgd3JhcFRleHQ6IHdyYXBUZXh0ICYmIHdyYXBUZXh0LnNwbGl0KCdcXG4nKS5tYXAoKGksIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIDxzcGFuIGtleT17a2V5fT57aX08L3NwYW4+O1xuICAgIH0pLFxuICAgIG1vcmVUZXh0OiBtb3JlVGV4dCAmJiBtb3JlVGV4dC5zcGxpdCgnXFxuJykubWFwKCh0ZXh0LCBrZXkpID0+IHtcbiAgICAgIHJldHVybiBrZXkgPT09IDAgPyA8c3BhbiBrZXk9e2tleX0+e3RleHR9PC9zcGFuPiA6IDxkaXYga2V5PXtrZXl9Pnt0ZXh0fTwvZGl2PjtcbiAgICB9KVxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgRG93bkFycm93LCBJdGluZXJhcnlJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgUERNX0NBVEVHT1JZX0lUSU5FUkFSWSB9IGZyb20gJ2hlbHBlcnMvcGRtSGVscGVycyc7XG5pbXBvcnQgeyBpdGluZXJhcnlQYXRoIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgQUNUSVZJVFkgfSBmcm9tIFwiY29uc3RhbnRzL2FjdGl2aXR5Q29uc3RhbnRcIjtcbmltcG9ydCBRdW90ZUNhcmRIZWFkZXIgZnJvbSBcIm1vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZEhlYWRlclwiO1xuXG5jb25zdCBHSXRpbmVyYXJ5QXJyb3dTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB0cmFuc2Zvcm06ICdyb3RhdGVaKC05MGRlZyknXG59KTtcblxuY29uc3QgSXRpbmVyYXJ5TGlzdCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpcElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaXRpbmVyYXJ5SW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGRtQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0hpZGVQZG1WaWV3XG4gICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcbiAgY29uc3QgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIGN0YSwgb2JqZWN0KSA9PiB7XG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50LFxuICAgICAgc2VjdGlvbjogJ2l0aW5lcmFyeScsXG4gICAgICBvYmplY3Q6IG9iamVjdCB8fCAnJyxcbiAgICAgIGN0YVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYXRDbGljayA9ICgpID0+IHtcbiAgICBzZXRQZG1DYXRlZ29yeShQRE1fQ0FURUdPUllfSVRJTkVSQVJZKTtcbiAgICBzaG93SGlkZVBkbVZpZXcodHJ1ZSk7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ0VkaXQgUGFja2FnZScsICdNYWluJyk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdEl0ZW1zID0gKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRpbmVyYXJ5VXJsID0gaXRpbmVyYXJ5UGF0aCh0cmlwSWQsIHF1b3RlSWQpO1xuICAgIGNvbnN0IGRheSA9IGluZGV4ICsgMTtcblxuICAgIHJldHVybiA8TGluayB0bz17YCR7aXRpbmVyYXJ5VXJsfT9kYXk9JHtkYXl9YH0ga2V5PXtpbmRleH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcDE1IGJ0IGF0X2l0aW5lcmFyeWxpc3QnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2YxNiBmdzkgcGZjMyBtMCBtcjgnPntgRGF5ICR7ZGF5fWB9PC9oND5cbiAgICAgICAgICAgIHtpdGVtLmV2ZW50VGltZSA/IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgcGZjNCBtMCBhdF9ldmVudFRpbWUnPntpdGVtLmV2ZW50VGltZX08L3A+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxNCBwZmMzIG10NSc+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdJdGluZXJhcnlBcnJvd1NwYW4gY2xhc3NOYW1lPSdpbnB1dC0yNCBibG9jayBwNSBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXInPlxuICAgICAgICAgIDxEb3duQXJyb3cgLz5cbiAgICAgICAgPC9HSXRpbmVyYXJ5QXJyb3dTcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFbGVtZW50IG5hbWU9J2l0aW5lcmFyeS1zZWMnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZmMzIGYxNCBzYmN3IG10OFwiPlxuICAgICAgICA8UXVvdGVDYXJkSGVhZGVyXG4gICAgICAgICAgaGVhZGluZz0nSXRpbmVyYXJ5J1xuICAgICAgICAgIGNoYXRCdXR0b25OYW1lPSdFZGl0IFBhY2thZ2UnXG4gICAgICAgICAgaGFuZGxlQ2hhdENsaWNrPXtoYW5kbGVDaGF0Q2xpY2t9XG4gICAgICAgICAgaWNvbj17PEl0aW5lcmFyeUljb24gLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2l0aW5lcmFyeUluZm8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaXRlbSkubWFwKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtW3NlY3Rpb25dLnNlY3Rpb25UeXBlID09PSBBQ1RJVklUWS5pdGluZXJhcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdEl0ZW1zKGl0ZW1bc2VjdGlvbl0sIGluZGV4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0VsZW1lbnQ+XG4gICk7XG59O1xuXG5JdGluZXJhcnlMaXN0LnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaXRpbmVyYXJ5SW5mbzogUHJvcFR5cGVzLmFycmF5LFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93SGlkZVBkbVZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICBzZXRQZG1DYXRlZ29yeTogUHJvcFR5cGVzLmZ1bmNcbn07XG5JdGluZXJhcnlMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRpbmVyYXJ5SW5mbzogW10sXG4gIHRyYWNrc2VnbWVudDogKCkgPT4ge30sXG4gIHNldFBkbUNhdGVnb3J5OiAoKSA9PiB7fSxcbiAgc2hvd0hpZGVQZG1WaWV3OiAoKSA9PiB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyeUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBsb2FkIGFzIGZldGNoUXVvdGVzRGF0YSB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUxpc3QnO1xuaW1wb3J0IHsgbG9hZCBhcyBsb2FkQ29uc3RhbnRzIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlQWN0aXZpdGllcyc7XG5pbXBvcnQgeyBmZXRjaERpc2NvdW50T2ZmZXJzIH0gZnJvbSAnbW9kdWxlcy9kaXNjb3VudEVuZ2luZS9hY3Rpb24nO1xuaW1wb3J0IHsgZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMgfSBmcm9tICdtb2R1bGVzL3BkbS9hY3Rpb24nO1xuXG5pbXBvcnQgeyByZXN1bHRzIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IHNob3dIaWRlUGRtVmlldywgc2V0UGRtQ2F0ZWdvcnkgfSBmcm9tICdtb2R1bGVzL3BkbS9hY3Rpb24nO1xuaW1wb3J0IHsgZ2V0VHJpcElkIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFF1b3RlIH0gZnJvbSBcIm1vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVMaXN0XCI7XG5pbXBvcnQgSXRpbmVyYXJ5TGlzdCBmcm9tICcuL0l0aW5lcmFyeUxpc3QnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKFxuICBjb25uZWN0KFxuICAgIHN0YXRlID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRRdW90ZSA9IGdldEN1cnJlbnRRdW90ZShzdGF0ZSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0aW5lcmFyeUluZm86IHJlc3VsdHMoY3VycmVudFF1b3RlKSxcbiAgICAgICAgdHJpcElkOiBnZXRUcmlwSWQoc3RhdGUpLFxuICAgICAgICBxdW90ZUlkOiBjdXJyZW50UXVvdGUuaWRcbiAgICAgIH07XG4gICAgfSxcbiAgICB7XG4gICAgICBzZXRQZG1DYXRlZ29yeSxcbiAgICAgIHNob3dIaWRlUGRtVmlld1xuICAgIH1cbiAgKShJdGluZXJhcnlMaXN0KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIHdlYnZpZXdBY3Rpb25zOiBbZmV0Y2hRdW90ZXNEYXRhLCBsb2FkQ29uc3RhbnRzLCBmZXRjaFByZURlZmluZWRNZXNzYWdlcyxcbiAgICBmZXRjaERpc2NvdW50T2ZmZXJzLCBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkXVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IENoYXQgZnJvbSAnbW9kdWxlcy9jaGF0JztcblxuY2xhc3MgQWdlbnRDaGF0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRleHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3VzdG9tQnV0dG9uOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogJ0NoYXQnLFxuICAgIHNob3dJY29uOiBmYWxzZSxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHt9LFxuICAgIHRleHRDbGFzc05hbWU6ICdmMTQgZnc3IHNmYzEnLFxuICAgIGN1c3RvbUJ1dHRvbjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHRDbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgQ2hhdENvbnRhaW5lciA9IENoYXQuY29udGFpbmVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dJY29uXG4gICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOFwiPjxEZWZhdWx0SWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RleHRDbGFzc05hbWV9IGF0X2FnZW50X2NoYXRfYnV0dG9uYH0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGF0Q2xpY2t9Pnt0aGlzLnByb3BzLm5hbWV9PC9idXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bGxWaWV3PXt0cnVlfVxuICAgICAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgIGlzV2hpdGVJY29uPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgPENoYXRDb250YWluZXIgLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWdlbnRDaGF0QnV0dG9uO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEFnZW50Q2hhdEJ1dHRvbiBmcm9tICcuL0FnZW50Q2hhdEJ1dHRvbic7XG5pbXBvcnQgeyBEZWZhdWx0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgUXVvdGVDYXJkSGVhZGVyID0gKHsgaGVhZGluZywgY2hhdEJ1dHRvbk5hbWUsIGhhbmRsZUNoYXRDbGljaywgaWNvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGZjMyBmMTQgcHQxNSBwbDE1IHBiMTUgcHIxNSBmbGV4IGFsaWduQ2VudGVyIGF0X2NhcmRIZWFkZXJcIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC0yNCBtcjggYXRfY2FyZEljb25cIj57aWNvbn08L3NwYW4+XG4gICAgPGgzIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNmEgZnc5IGF0X2NhcmRIZWFkaW5nXCI+e2hlYWRpbmd9PC9oMz5cbiAgICA8QWdlbnRDaGF0QnV0dG9uIG5hbWU9e2NoYXRCdXR0b25OYW1lfSBoYW5kbGVDaGF0Q2xpY2s9e2hhbmRsZUNoYXRDbGlja30gLz5cbiAgPC9kaXY+XG4pO1xuXG5RdW90ZUNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGF0QnV0dG9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5RdW90ZUNhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBoZWFkaW5nOiAnJyxcbiAgY2hhdEJ1dHRvbk5hbWU6ICcnLFxuICBjYXRlZ29yeTogJycsXG4gIGljb246IDxEZWZhdWx0SWNvbiAvPixcbiAgaGFuZGxlQ2hhdENsaWNrOiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlQ2FyZEhlYWRlcjtcbiIsImV4cG9ydCBjb25zdCBBQ1RJVklUWSA9IE9iamVjdC5mcmVlemUoe1xuICBmbGlnaHQ6ICdmbGlnaHQnLFxuICBpdGluZXJhcnk6ICdpdGluZXJhcnknLFxuICBjYWI6ICdjYWInLFxuICBob3RlbDogJ2hvdGVsJyxcbiAgYXR0cmFjdGlvbjogJ2F0dHJhY3Rpb24nXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=