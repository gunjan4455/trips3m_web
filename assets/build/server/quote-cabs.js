require("source-map-support").install();
exports.ids = ["quote-cabs"];
exports.modules = {

/***/ "./app-v2/modules/quote/cabs/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/quote/cabs/index.js ***!
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

var _quoteList = __webpack_require__(/*! modules/quote/actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _constants = __webpack_require__(/*! modules/quote/actions/constants */ "./app-v2/modules/quote/actions/constants.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _action = __webpack_require__(/*! modules/discountEngine/action */ "./app-v2/modules/discountEngine/action.js");

var _action2 = __webpack_require__(/*! modules/pdm/action */ "./app-v2/modules/pdm/action.js");

var _quoteList2 = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _QuoteCard = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/QuoteCard */ "./app-v2/modules/quote/shared/QuoteCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const quote = (0, _quoteList2.getCurrentQuote)(state);
  return {
    heading: 'Cabs',
    text: (0, _quoteList2.getCabsInfo)(quote),
    section: 'cabs-sec'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jYWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9BZ2VudENoYXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvUXVvdGVDYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9TaG93TW9yZS5qcyJdLCJuYW1lcyI6WyJjb250YWluZXIiLCJzdGF0ZSIsInF1b3RlIiwiaGVhZGluZyIsInRleHQiLCJzZWN0aW9uIiwiUXVvdGVDYXJkIiwid2Vidmlld0FjdGlvbnMiLCJmZXRjaFF1b3Rlc0RhdGEiLCJsb2FkQ29uc3RhbnRzIiwiZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMiLCJmZXRjaERpc2NvdW50T2ZmZXJzIiwic3dpdGNoUXVvdGUiLCJ1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQiLCJBZ2VudENoYXRCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJ0ZXh0Q2xhc3NOYW1lIiwiQ2hhdENvbnRhaW5lciIsIkNoYXQiLCJzaG93SWNvbiIsImhhbmRsZUNoYXRDbGljayIsIm5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsImN1c3RvbUJ1dHRvbiIsImRlZmF1bHRQcm9wcyIsImh0bWxUb1JlYWN0UGFyc2VyIiwiUGFyc2VyIiwidHJhY2tTZWdtZW50IiwidHJhY2tTZWdtZW50RXZlbnQiLCJjdGEiLCJldmVudCIsIk9SR0FOSVNNX0NMSUNLRUQiLCJUZXh0Q29tcCIsImxlbmd0aCIsInBhcnNlIiwic3Vic3RyaW5nIiwic2VjdGlvbkljb24iLCJpc1JlcXVpcmVkIiwiUXVvdGVDYXJkSGVhZGVyIiwiY2hhdEJ1dHRvbk5hbWUiLCJpY29uIiwiY2F0ZWdvcnkiLCJub2RlIiwiR3JlYWRtb3JlTGFiZWwiLCJnbGFtb3JvdXMiLCJsYWJlbCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwiR0Rvd25BcnJvd1NwYW4iLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJTaG93TW9yZSIsImNoZWNrZWQiLCJkZWZhdWx0T3BlbiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dExlbmd0aCIsImlzRGVmYXVsdFNob3dNb3JlIiwiYXBwZW5kVGV4dCIsIndyYXBUZXh0IiwibW9yZVRleHQiLCJzaG93TGVzc1RleHQiLCJzaG93TW9yZVRleHQiLCJvbmVPZlR5cGUiLCJhcnJheSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUEsWUFBWSw2QkFBVyx5QkFDM0JDLFNBQVM7QUFDUCxRQUFNQyxRQUFRLGlDQUFnQkQsS0FBaEIsQ0FBZDtBQUNBLFNBQU87QUFDTEUsYUFBUyxNQURKO0FBRUxDLFVBQU0sNkJBQVlGLEtBQVosQ0FGRDtBQUdMRyxhQUFTO0FBSEosR0FBUDtBQUtELENBUjBCLEVBUXhCQyxrQkFSd0IsQ0FBWCxDQUFsQjtlQVVlO0FBQ2JOLFdBRGE7QUFFYk8sa0JBQWdCLENBQUNDLGVBQUQsRUFBa0JDLGVBQWxCLEVBQWlDQyxnQ0FBakMsRUFDZEMsMkJBRGMsRUFDT0MsNEJBRFAsRUFDb0JDLHNDQURwQjtBQUZILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJmOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUMsZSxxQkFBTixNQUFNQSxlQUFOLFNB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RCxLQUFMLENBQVcyRCxZQUQvRCxFQUVHLEtBQUs1RSxLQUFMLENBQVc2RCxPQUZkLENBRkYsRUFNRSw2QkFBQyxjQUFEO0FBQ0UsaUJBQVU7QUFEWixPQUMwRCw2QkFBQyxtQkFBRCxPQUQxRCxDQU5GLENBREYsQ0FERixHQVlJLEVBM0JSLENBREY7QUFnQ0Q7O0FBM0RvQyxDO0FBOER2Q0QsU0FBU25DLFNBQVQsR0FBcUI7QUFDbkJnRCxZQUFVL0MsbUJBQVVtRCxTQUFWLENBQW9CLENBQzVCbkQsbUJBQVVvRCxLQURrQixFQUU1QnBELG1CQUFVQyxNQUZrQixFQUc1QkQsbUJBQVVxRCxNQUhrQixDQUFwQixFQUlQbkMsVUFMZ0I7QUFNbkI4QixZQUFVaEQsbUJBQVVtRCxTQUFWLENBQW9CLENBQzVCbkQsbUJBQVVvRCxLQURrQixFQUU1QnBELG1CQUFVQyxNQUZrQixFQUc1QkQsbUJBQVVxRCxNQUhrQixDQUFwQixDQU5TO0FBV25CSCxnQkFBY2xELG1CQUFVQyxNQVhMO0FBWW5CZ0QsZ0JBQWNqRCxtQkFBVUMsTUFaTDtBQWFuQm1DLGVBQWFwQyxtQkFBVUUsSUFiSjtBQWNuQjJDLHFCQUFtQjdDLG1CQUFVRSxJQWRWO0FBZW5CTSxnQkFBY1IsbUJBQVVHLElBZkw7QUFnQm5CMkMsY0FBWTlDLG1CQUFVQztBQWhCSCxDQUFyQjtBQW9CQWlDLFNBQVM3QixZQUFULEdBQXdCO0FBQ3RCMEMsWUFBVSxFQURZO0FBRXRCQyxZQUFVLEVBRlk7QUFHdEJFLGdCQUFjLFdBSFE7QUFJdEJELGdCQUFjLFdBSlE7QUFLdEJiLGVBQWEsS0FMUztBQU10QlMscUJBQW1CLElBTkc7QUFPdEJyQyxnQkFBYyxNQUFNLENBQ25CO0FBUnFCLENBQXhCO2VBV2UwQixRIiwiZmlsZSI6InF1b3RlLWNhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBsb2FkIGFzIGZldGNoUXVvdGVzRGF0YSB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUxpc3QnO1xuaW1wb3J0IHsgbG9hZCBhcyBsb2FkQ29uc3RhbnRzIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlQWN0aXZpdGllcyc7XG5pbXBvcnQgeyBmZXRjaERpc2NvdW50T2ZmZXJzIH0gZnJvbSAnbW9kdWxlcy9kaXNjb3VudEVuZ2luZS9hY3Rpb24nO1xuaW1wb3J0IHsgZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMgfSBmcm9tICdtb2R1bGVzL3BkbS9hY3Rpb24nO1xuXG5pbXBvcnQgeyBnZXRDdXJyZW50UXVvdGUsIGdldENhYnNJbmZvIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUxpc3QnO1xuaW1wb3J0IFF1b3RlQ2FyZCBmcm9tICdtb2R1bGVzL3F1b3RlL3NoYXJlZC9RdW90ZUNhcmQnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICBjb25zdCBxdW90ZSA9IGdldEN1cnJlbnRRdW90ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRpbmc6ICdDYWJzJyxcbiAgICAgIHRleHQ6IGdldENhYnNJbmZvKHF1b3RlKSxcbiAgICAgIHNlY3Rpb246ICdjYWJzLXNlYydcbiAgICB9O1xuICB9KShRdW90ZUNhcmQpKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIHdlYnZpZXdBY3Rpb25zOiBbZmV0Y2hRdW90ZXNEYXRhLCBsb2FkQ29uc3RhbnRzLCBmZXRjaFByZURlZmluZWRNZXNzYWdlcyxcbiAgICBmZXRjaERpc2NvdW50T2ZmZXJzLCBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkXVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IENoYXQgZnJvbSAnbW9kdWxlcy9jaGF0JztcblxuY2xhc3MgQWdlbnRDaGF0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRleHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3VzdG9tQnV0dG9uOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogJ0NoYXQnLFxuICAgIHNob3dJY29uOiBmYWxzZSxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHt9LFxuICAgIHRleHRDbGFzc05hbWU6ICdmMTQgZnc3IHNmYzEnLFxuICAgIGN1c3RvbUJ1dHRvbjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHRDbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgQ2hhdENvbnRhaW5lciA9IENoYXQuY29udGFpbmVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dJY29uXG4gICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOFwiPjxEZWZhdWx0SWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RleHRDbGFzc05hbWV9IGF0X2FnZW50X2NoYXRfYnV0dG9uYH0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGF0Q2xpY2t9Pnt0aGlzLnByb3BzLm5hbWV9PC9idXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bGxWaWV3PXt0cnVlfVxuICAgICAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgIGlzV2hpdGVJY29uPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgPENoYXRDb250YWluZXIgLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWdlbnRDaGF0QnV0dG9uO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBTaG93TW9yZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9TaG93TW9yZSc7XG5pbXBvcnQgUXVvdGVDYXJkSGVhZGVyIGZyb20gXCJtb2R1bGVzL3F1b3RlL3NoYXJlZC9RdW90ZUNhcmRIZWFkZXJcIjtcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHtDYWJJY29uRnJvbnQsIEZsaWdodCwgVG5DSWNvbiwgSW5mb0JsYWNrSWNvbn0gZnJvbSBcImhlbHBlcnMvSWNvbi9JY29uXCI7XG5cbmNvbnN0IGh0bWxUb1JlYWN0UGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBRdW90ZUNhcmQgPSAoeyBoZWFkaW5nLCB0ZXh0LCBzZWN0aW9uLCB0cmFja1NlZ21lbnQgfSkgPT4ge1xuXG4gIGNvbnN0IHRyYWNrU2VnbWVudEV2ZW50ID0gKHsgY3RhIH0pID0+IHtcbiAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiBzZWN0aW9uLFxuICAgICAgY3RhOiBjdGFcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQoeyBjdGE6ICdDaGF0JyB9KTtcbiAgfTtcblxuICBsZXQgVGV4dENvbXAgPSBudWxsO1xuICBpZiAodGV4dC5sZW5ndGggPiAyMDApIHtcbiAgICBUZXh0Q29tcCA9ICg8U2hvd01vcmVcbiAgICAgIHdyYXBUZXh0PXtodG1sVG9SZWFjdFBhcnNlci5wYXJzZSh0ZXh0LnN1YnN0cmluZygwLCAyMDApKX1cbiAgICAgIG1vcmVUZXh0PXtodG1sVG9SZWFjdFBhcnNlci5wYXJzZSh0ZXh0LnN1YnN0cmluZygyMDApKX1cbiAgICAgIHNob3dNb3JlVGV4dD1cIlJlYWQgTW9yZVwiXG4gICAgICBzaG93TGVzc1RleHQ9XCJSZWFkIExlc3NcIlxuICAgICAgdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH1cbiAgICAvPik7XG4gIH0gZWxzZSB7XG4gICAgVGV4dENvbXAgPSBodG1sVG9SZWFjdFBhcnNlci5wYXJzZSh0ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IHNlY3Rpb25JY29uID0gKHNlY3Rpb24pID0+e1xuICAgIHN3aXRjaCAoc2VjdGlvbikge1xuICAgICAgY2FzZSBcImNhYnMtc2VjXCIgOiByZXR1cm4gKDxDYWJJY29uRnJvbnQvPik7XG4gICAgICBjYXNlIFwiYWRkaXRpb25hbC1pbmZvLXNlY1wiIDogcmV0dXJuICg8SW5mb0JsYWNrSWNvbiAvPik7XG4gICAgICBjYXNlIFwidGVybXMtY29uZGl0aW9ucy1zZWNcIiA6IHJldHVybiAoPFRuQ0ljb24gLz4pO1xuICAgICAgY2FzZSBcImZsaWdodHMtc2VjXCIgOiByZXR1cm4gKDxGbGlnaHQgLz4pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIHRleHQgP1xuICAgICAgPEVsZW1lbnQgbmFtZT17c2VjdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGZjMyBmMTQgc2JjdyBtdDhcIj5cbiAgICAgICAgICA8UXVvdGVDYXJkSGVhZGVyIGhlYWRpbmc9e2hlYWRpbmd9IGljb249e3NlY3Rpb25JY29uKHNlY3Rpb24pfSBjaGF0QnV0dG9uTmFtZT0nQ2hhdCcgaGFuZGxlQ2hhdENsaWNrPXtoYW5kbGVDaGF0Q2xpY2t9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IHAxNSBwbDQ4IHB0MCBicmVhay13b3JkXCI+XG4gICAgICAgICAgICA8ZGl2PntUZXh0Q29tcH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0VsZW1lbnQ+IDogbnVsbFxuICApO1xufTtcblxuUXVvdGVDYXJkLnByb3BUeXBlcyA9IHtcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5RdW90ZUNhcmQuZGVmYXVsdFByb3BzID0ge1xuICBzZWN0aW9uOiAnJyxcbiAgdGV4dDogJycsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQWdlbnRDaGF0QnV0dG9uIGZyb20gJy4vQWdlbnRDaGF0QnV0dG9uJztcbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBRdW90ZUNhcmRIZWFkZXIgPSAoeyBoZWFkaW5nLCBjaGF0QnV0dG9uTmFtZSwgaGFuZGxlQ2hhdENsaWNrLCBpY29uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwZmMzIGYxNCBwdDE1IHBsMTUgcGIxNSBwcjE1IGZsZXggYWxpZ25DZW50ZXIgYXRfY2FyZEhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOCBhdF9jYXJkSWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICA8aDMgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE2YSBmdzkgYXRfY2FyZEhlYWRpbmdcIj57aGVhZGluZ308L2gzPlxuICAgIDxBZ2VudENoYXRCdXR0b24gbmFtZT17Y2hhdEJ1dHRvbk5hbWV9IGhhbmRsZUNoYXRDbGljaz17aGFuZGxlQ2hhdENsaWNrfSAvPlxuICA8L2Rpdj5cbik7XG5cblF1b3RlQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYXRCdXR0b25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblF1b3RlQ2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICcnLFxuICBjaGF0QnV0dG9uTmFtZTogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgaWNvbjogPERlZmF1bHRJY29uIC8+LFxuICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVDYXJkSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==