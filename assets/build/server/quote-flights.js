require("source-map-support").install();
exports.ids = ["quote-flights"];
exports.modules = {

/***/ "./app-v2/modules/quote/flights/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/quote/flights/index.js ***!
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

var _quoteList = __webpack_require__(/*! modules/quote/actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _constants = __webpack_require__(/*! modules/quote/actions/constants */ "./app-v2/modules/quote/actions/constants.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _action = __webpack_require__(/*! modules/discountEngine/action */ "./app-v2/modules/discountEngine/action.js");

var _action2 = __webpack_require__(/*! modules/pdm/action */ "./app-v2/modules/pdm/action.js");

var _quoteList2 = __webpack_require__(/*! ../reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _QuoteCard = _interopRequireDefault(__webpack_require__(/*! ../shared/QuoteCard */ "./app-v2/modules/quote/shared/QuoteCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const quote = (0, _quoteList2.getCurrentQuote)(state);
  return {
    heading: 'Flights',
    text: (0, _quoteList2.getFlightsInfo)(quote),
    section: 'flights-sec'
  };
})(_QuoteCard.default));
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

/***/ "./app-v2/modules/quote/shared/QuoteCard.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/quote/shared/QuoteCard.js ***!
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

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _QuoteCardHeader = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/QuoteCardHeader */ "./app-v2/modules/quote/shared/QuoteCardHeader.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const htmlToReactParser = new _htmlToReact.Parser();

const QuoteCard = ({
  heading,
  text,
  section,
  trackSegment
}) => {
  const trackSegmentEvent = ({
    cta
  }) => {
    trackSegment({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: section,
      cta: cta
    });
  };

  const handleChatClick = () => {
    trackSegmentEvent({
      cta: 'Chat'
    });
  };

  let TextComp = null;

  if (text.length > 200) {
    TextComp = _react.default.createElement(_ShowMore.default, {
      wrapText: htmlToReactParser.parse(text.substring(0, 200)),
      moreText: htmlToReactParser.parse(text.substring(200)),
      showMoreText: "Read More",
      showLessText: "Read Less",
      trackSegment: trackSegmentEvent
    });
  } else {
    TextComp = htmlToReactParser.parse(text);
  }

  const sectionIcon = section => {
    switch (section) {
      case "cabs-sec":
        return _react.default.createElement(_Icon.CabIconFront, null);

      case "additional-info-sec":
        return _react.default.createElement(_Icon.InfoBlackIcon, null);

      case "terms-conditions-sec":
        return _react.default.createElement(_Icon.TnCIcon, null);

      case "flights-sec":
        return _react.default.createElement(_Icon.Flight, null);
    }
  };

  return text ? _react.default.createElement(_reactScroll.Element, {
    name: section
  }, _react.default.createElement("div", {
    className: "pfc3 f14 sbcw mt8"
  }, _react.default.createElement(_QuoteCardHeader.default, {
    heading: heading,
    icon: sectionIcon(section),
    chatButtonName: "Chat",
    handleChatClick: handleChatClick
  }), _react.default.createElement("div", {
    className: "sbcw p15 pl48 pt0 break-word"
  }, _react.default.createElement("div", null, TextComp)))) : null;
};

QuoteCard.propTypes = {
  heading: _propTypes.default.string.isRequired,
  text: _propTypes.default.string,
  section: _propTypes.default.string,
  trackSegment: _propTypes.default.func
};
QuoteCard.defaultProps = {
  section: '',
  text: '',
  trackSegment: () => {}
};
var _default = QuoteCard;
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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9mbGlnaHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9BZ2VudENoYXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvUXVvdGVDYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9TaG93TW9yZS5qcyJdLCJuYW1lcyI6WyJjb250YWluZXIiLCJzdGF0ZSIsInF1b3RlIiwiaGVhZGluZyIsInRleHQiLCJzZWN0aW9uIiwiUXVvdGVDYXJkIiwid2Vidmlld0FjdGlvbnMiLCJmZXRjaFF1b3Rlc0RhdGEiLCJsb2FkQ29uc3RhbnRzIiwiZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMiLCJmZXRjaERpc2NvdW50T2ZmZXJzIiwic3dpdGNoUXVvdGUiLCJ1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQiLCJBZ2VudENoYXRCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJ0ZXh0Q2xhc3NOYW1lIiwiQ2hhdENvbnRhaW5lciIsIkNoYXQiLCJzaG93SWNvbiIsImhhbmRsZUNoYXRDbGljayIsIm5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsImN1c3RvbUJ1dHRvbiIsImRlZmF1bHRQcm9wcyIsImh0bWxUb1JlYWN0UGFyc2VyIiwiUGFyc2VyIiwidHJhY2tTZWdtZW50IiwidHJhY2tTZWdtZW50RXZlbnQiLCJjdGEiLCJldmVudCIsIk9SR0FOSVNNX0NMSUNLRUQiLCJUZXh0Q29tcCIsImxlbmd0aCIsInBhcnNlIiwic3Vic3RyaW5nIiwic2VjdGlvbkljb24iLCJpc1JlcXVpcmVkIiwiUXVvdGVDYXJkSGVhZGVyIiwiY2hhdEJ1dHRvbk5hbWUiLCJpY29uIiwiY2F0ZWdvcnkiLCJub2RlIiwiR3JlYWRtb3JlTGFiZWwiLCJnbGFtb3JvdXMiLCJsYWJlbCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiR0Rvd25BcnJvd1NwYW4iLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJTaG93TW9yZSIsImNoZWNrZWQiLCJkZWZhdWx0T3BlbiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dExlbmd0aCIsImlzRGVmYXVsdFNob3dNb3JlIiwiYXBwZW5kVGV4dCIsIndyYXBUZXh0IiwibW9yZVRleHQiLCJzaG93TGVzc1RleHQiLCJzaG93TW9yZVRleHQiLCJvbmVPZlR5cGUiLCJhcnJheSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUEsWUFBWSw2QkFBVyx5QkFDM0JDLFNBQVM7QUFDUCxRQUFNQyxRQUFRLGlDQUFnQkQsS0FBaEIsQ0FBZDtBQUNBLFNBQU87QUFDTEUsYUFBUyxTQURKO0FBRUxDLFVBQU0sZ0NBQWVGLEtBQWYsQ0FGRDtBQUdMRyxhQUFTO0FBSEosR0FBUDtBQUtELENBUjBCLEVBUXhCQyxrQkFSd0IsQ0FBWCxDQUFsQjtlQVVlO0FBQ2JOLFdBRGE7QUFFYk8sa0JBQWdCLENBQUNDLGVBQUQsRUFBa0JDLGVBQWxCLEVBQWlDQyxnQ0FBakMsRUFDZEMsMkJBRGMsRUFDT0MsNEJBRFAsRUFDb0JDLHNDQURwQjtBQUZILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJmOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUMsZSxxQkFBTixNQUFNQSxlQUFO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QUsxRCxLQUFMLENBQVcyRCxZQUQvRCxFQUVHLEtBQUs1RSxLQUFMLENBQVc2RCxPQUZkLENBRkYsRUFNRSw2QkFBQyxjQUFEO0FBQ0UsaUJBQVU7QUFEWixPQUMwRCw2QkFBQyxtQkFBRCxPQUQxRCxDQU5GLENBREYsQ0FERixHQVlJLEVBM0JSLENBREY7QUFnQ0Q7O0FBM0RvQyxDO0FBOER2Q0QsU0FBU25DLFNBQVQsR0FBcUI7QUFDbkJnRCxZQUFVL0MsbUJBQVVtRCxTQUFWLENBQW9CLENBQzVCbkQsbUJBQVVvRCxLQURrQixFQUU1QnBELG1CQUFVQyxNQUZrQixFQUc1QkQsbUJBQVVxRCxNQUhrQixDQUFwQixFQUlQbkMsVUFMZ0I7QUFNbkI4QixZQUFVaEQsbUJBQVVtRCxTQUFWLENBQW9CLENBQzVCbkQsbUJBQVVvRCxLQURrQixFQUU1QnBELG1CQUFVQyxNQUZrQixFQUc1QkQsbUJBQVVxRCxNQUhrQixDQUFwQixDQU5TO0FBV25CSCxnQkFBY2xELG1CQUFVQyxNQVhMO0FBWW5CZ0QsZ0JBQWNqRCxtQkFBVUMsTUFaTDtBQWFuQm1DLGVBQWFwQyxtQkFBVUUsSUFiSjtBQWNuQjJDLHFCQUFtQjdDLG1CQUFVRSxJQWRWO0FBZW5CTSxnQkFBY1IsbUJBQVVHLElBZkw7QUFnQm5CMkMsY0FBWTlDLG1CQUFVQztBQWhCSCxDQUFyQjtBQW9CQWlDLFNBQVM3QixZQUFULEdBQXdCO0FBQ3RCMEMsWUFBVSxFQURZO0FBRXRCQyxZQUFVLEVBRlk7QUFHdEJFLGdCQUFjLFdBSFE7QUFJdEJELGdCQUFjLFdBSlE7QUFLdEJiLGVBQWEsS0FMUztBQU10QlMscUJBQW1CLElBTkc7QUFPdEJyQyxnQkFBYyxNQUFNLENBQ25CO0FBUnFCLENBQXhCO2VBV2UwQixRIiwiZmlsZSI6InF1b3RlLWZsaWdodHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBsb2FkIGFzIGZldGNoUXVvdGVzRGF0YSB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUxpc3QnO1xuaW1wb3J0IHsgbG9hZCBhcyBsb2FkQ29uc3RhbnRzIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlQWN0aXZpdGllcyc7XG5pbXBvcnQgeyBmZXRjaERpc2NvdW50T2ZmZXJzIH0gZnJvbSAnbW9kdWxlcy9kaXNjb3VudEVuZ2luZS9hY3Rpb24nO1xuaW1wb3J0IHsgZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMgfSBmcm9tICdtb2R1bGVzL3BkbS9hY3Rpb24nO1xuXG5pbXBvcnQgeyBnZXRDdXJyZW50UXVvdGUsIGdldEZsaWdodHNJbmZvIH0gZnJvbSAnLi4vcmVkdWNlcnMvcXVvdGVMaXN0JztcbmltcG9ydCBRdW90ZUNhcmQgZnJvbSAnLi4vc2hhcmVkL1F1b3RlQ2FyZCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIGNvbnN0IHF1b3RlID0gZ2V0Q3VycmVudFF1b3RlKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGluZzogJ0ZsaWdodHMnLFxuICAgICAgdGV4dDogZ2V0RmxpZ2h0c0luZm8ocXVvdGUpLFxuICAgICAgc2VjdGlvbjogJ2ZsaWdodHMtc2VjJ1xuICAgIH07XG4gIH0pKFF1b3RlQ2FyZCkpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgd2Vidmlld0FjdGlvbnM6IFtmZXRjaFF1b3Rlc0RhdGEsIGxvYWRDb25zdGFudHMsIGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzLFxuICAgIGZldGNoRGlzY291bnRPZmZlcnMsIHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWRdXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgQ2hhdCBmcm9tICdtb2R1bGVzL2NoYXQnO1xuXG5jbGFzcyBBZ2VudENoYXRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd0ljb246IFByb3BUeXBlcy5ib29sLFxuICAgIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGV4dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjdXN0b21CdXR0b246IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiAnQ2hhdCcsXG4gICAgc2hvd0ljb246IGZhbHNlLFxuICAgIGhhbmRsZUNoYXRDbGljazogKCkgPT4ge30sXG4gICAgdGV4dENsYXNzTmFtZTogJ2YxNCBmdzcgc2ZjMScsXG4gICAgY3VzdG9tQnV0dG9uOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGV4dENsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBDaGF0Q29udGFpbmVyID0gQ2hhdC5jb250YWluZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0ljb25cbiAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgbXI4XCI+PERlZmF1bHRJY29uIC8+PC9zcGFuPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGV4dENsYXNzTmFtZX0gYXRfYWdlbnRfY2hhdF9idXR0b25gfSBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoYXRDbGlja30+e3RoaXMucHJvcHMubmFtZX08L2J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgaXNXaGl0ZUljb249e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hhdENvbnRhaW5lciAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZ2VudENoYXRCdXR0b247XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuaW1wb3J0IFNob3dNb3JlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcbmltcG9ydCBRdW90ZUNhcmRIZWFkZXIgZnJvbSBcIm1vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZEhlYWRlclwiO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQge0NhYkljb25Gcm9udCwgRmxpZ2h0LCBUbkNJY29uLCBJbmZvQmxhY2tJY29ufSBmcm9tIFwiaGVscGVycy9JY29uL0ljb25cIjtcblxuY29uc3QgaHRtbFRvUmVhY3RQYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IFF1b3RlQ2FyZCA9ICh7IGhlYWRpbmcsIHRleHQsIHNlY3Rpb24sIHRyYWNrU2VnbWVudCB9KSA9PiB7XG5cbiAgY29uc3QgdHJhY2tTZWdtZW50RXZlbnQgPSAoeyBjdGEgfSkgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIHNlY3Rpb246IHNlY3Rpb24sXG4gICAgICBjdGE6IGN0YVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYXRDbGljayA9ICgpID0+IHtcbiAgICB0cmFja1NlZ21lbnRFdmVudCh7IGN0YTogJ0NoYXQnIH0pO1xuICB9O1xuXG4gIGxldCBUZXh0Q29tcCA9IG51bGw7XG4gIGlmICh0ZXh0Lmxlbmd0aCA+IDIwMCkge1xuICAgIFRleHRDb21wID0gKDxTaG93TW9yZVxuICAgICAgd3JhcFRleHQ9e2h0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKHRleHQuc3Vic3RyaW5nKDAsIDIwMCkpfVxuICAgICAgbW9yZVRleHQ9e2h0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKHRleHQuc3Vic3RyaW5nKDIwMCkpfVxuICAgICAgc2hvd01vcmVUZXh0PVwiUmVhZCBNb3JlXCJcbiAgICAgIHNob3dMZXNzVGV4dD1cIlJlYWQgTGVzc1wiXG4gICAgICB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudEV2ZW50fVxuICAgIC8+KTtcbiAgfSBlbHNlIHtcbiAgICBUZXh0Q29tcCA9IGh0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKHRleHQpO1xuICB9XG5cbiAgY29uc3Qgc2VjdGlvbkljb24gPSAoc2VjdGlvbikgPT57XG4gICAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgICBjYXNlIFwiY2Ficy1zZWNcIiA6IHJldHVybiAoPENhYkljb25Gcm9udC8+KTtcbiAgICAgIGNhc2UgXCJhZGRpdGlvbmFsLWluZm8tc2VjXCIgOiByZXR1cm4gKDxJbmZvQmxhY2tJY29uIC8+KTtcbiAgICAgIGNhc2UgXCJ0ZXJtcy1jb25kaXRpb25zLXNlY1wiIDogcmV0dXJuICg8VG5DSWNvbiAvPik7XG4gICAgICBjYXNlIFwiZmxpZ2h0cy1zZWNcIiA6IHJldHVybiAoPEZsaWdodCAvPik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgdGV4dCA/XG4gICAgICA8RWxlbWVudCBuYW1lPXtzZWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZmMzIGYxNCBzYmN3IG10OFwiPlxuICAgICAgICAgIDxRdW90ZUNhcmRIZWFkZXIgaGVhZGluZz17aGVhZGluZ30gaWNvbj17c2VjdGlvbkljb24oc2VjdGlvbil9IGNoYXRCdXR0b25OYW1lPSdDaGF0JyBoYW5kbGVDaGF0Q2xpY2s9e2hhbmRsZUNoYXRDbGlja30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgcDE1IHBsNDggcHQwIGJyZWFrLXdvcmRcIj5cbiAgICAgICAgICAgIDxkaXY+e1RleHRDb21wfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRWxlbWVudD4gOiBudWxsXG4gICk7XG59O1xuXG5RdW90ZUNhcmQucHJvcFR5cGVzID0ge1xuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblF1b3RlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlY3Rpb246ICcnLFxuICB0ZXh0OiAnJyxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBBZ2VudENoYXRCdXR0b24gZnJvbSAnLi9BZ2VudENoYXRCdXR0b24nO1xuaW1wb3J0IHsgRGVmYXVsdEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IFF1b3RlQ2FyZEhlYWRlciA9ICh7IGhlYWRpbmcsIGNoYXRCdXR0b25OYW1lLCBoYW5kbGVDaGF0Q2xpY2ssIGljb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBmYzMgZjE0IHB0MTUgcGwxNSBwYjE1IHByMTUgZmxleCBhbGlnbkNlbnRlciBhdF9jYXJkSGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgbXI4IGF0X2NhcmRJY29uXCI+e2ljb259PC9zcGFuPlxuICAgIDxoMyBjbGFzc05hbWU9XCJmbGV4RnVsbCBmMTZhIGZ3OSBhdF9jYXJkSGVhZGluZ1wiPntoZWFkaW5nfTwvaDM+XG4gICAgPEFnZW50Q2hhdEJ1dHRvbiBuYW1lPXtjaGF0QnV0dG9uTmFtZX0gaGFuZGxlQ2hhdENsaWNrPXtoYW5kbGVDaGF0Q2xpY2t9IC8+XG4gIDwvZGl2PlxuKTtcblxuUXVvdGVDYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hhdEJ1dHRvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgaGFuZGxlQ2hhdENsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuUXVvdGVDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVhZGluZzogJycsXG4gIGNoYXRCdXR0b25OYW1lOiAnJyxcbiAgY2F0ZWdvcnk6ICcnLFxuICBpY29uOiA8RGVmYXVsdEljb24gLz4sXG4gIGhhbmRsZUNoYXRDbGljazogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZUNhcmRIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmltcG9ydCB7IEJsdWVEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR3JlYWRtb3JlTGFiZWwgPSBnbGFtb3JvdXMubGFiZWwoe1xuICAnJiBidXR0b24ucmVhZC1tb3JlLWJ1dHRvbic6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxufSk7XG5cbmNvbnN0IEdEb3duQXJyb3dTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICc2cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICc2cHgnLFxuICAgIHRvcDogJzFweCdcbiAgfVxufSk7XG5cbmNsYXNzIFNob3dNb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmRlZmF1bHRPcGVuXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7IGN0YTogJ1JlYWQgTW9yZScgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dExlbmd0aCA9IDE5NTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1zdGF0ZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gaWQ9XCJwb3N0LTFcIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVhZC1tb3JlLXdyYXAgJHt0aGlzLnByb3BzLmlzRGVmYXVsdFNob3dNb3JlID8gJ3AtbGFzdC1uby1tYXJnaW4gcGZjMyBmMTRwIGR5bmFtaWNUZXh0SW5oZXJpdCcgOiAnJ31gfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgZm9yIHRydW5jYXRlIHRoZSBzdHJpbmdcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy5hcHBlbmRUZXh0ICYmIHRoaXMucHJvcHMud3JhcFRleHQubGVuZ3RoID49IHRleHRMZW5ndGhcbiAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLndyYXBUZXh0ICsgdGhpcy5wcm9wcy5hcHBlbmRUZXh0XG4gICAgICAgICAgICAgIDogdGhpcy5wcm9wcy53cmFwVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdGFyZ2V0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tb3JlVGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tb3JlVGV4dC5sZW5ndGggPiAwIHx8ICFfaXNFbXB0eSh0aGlzLnByb3BzLm1vcmVUZXh0KSA/XG4gICAgICAgICAgICA8R3JlYWRtb3JlTGFiZWwgaHRtbEZvcj1cInBvc3QtMVwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10cmlnZ2VyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJ1dHRvbiBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlbiByZWxhdGl2ZSBmMTIgZnc3XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE0IGZ3N1wiPlxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmNoZWNrZWQpID8gdGhpcy5wcm9wcy5zaG93TGVzc1RleHQgOiB0aGlzLnByb3BzLnNob3dNb3JlVGV4dH1cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxHRG93bkFycm93U3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtbDggcmVsYXRpdmUgYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxCbHVlRG93bkFycm93IC8+PC9HRG93bkFycm93U3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0dyZWFkbW9yZUxhYmVsPlxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNob3dNb3JlLnByb3BUeXBlcyA9IHtcbiAgd3JhcFRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbW9yZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNob3dNb3JlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0xlc3NUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgYXBwZW5kVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuXG59O1xuXG5TaG93TW9yZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHdyYXBUZXh0OiAnJyxcbiAgbW9yZVRleHQ6ICcnLFxuICBzaG93TW9yZVRleHQ6ICdSZWFkIE1vcmUnLFxuICBzaG93TGVzc1RleHQ6ICdSZWFkIExlc3MnLFxuICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiB0cnVlLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd01vcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9