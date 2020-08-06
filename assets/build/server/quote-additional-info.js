require("source-map-support").install();
exports.ids = ["quote-additional-info"];
exports.modules = {

/***/ "./app-v2/modules/quote/additionalInfo/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/additionalInfo/index.js ***!
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

var _quoteList2 = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _QuoteCard = _interopRequireDefault(__webpack_require__(/*! ../shared/QuoteCard */ "./app-v2/modules/quote/shared/QuoteCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const quote = (0, _quoteList2.getCurrentQuote)(state);
  return {
    heading: 'Additional Info',
    text: (0, _quoteList2.getAdditionalInfo)(quote),
    section: 'additional-info-sec'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9hZGRpdGlvbmFsSW5mby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvQWdlbnRDaGF0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9RdW90ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUuanMiXSwibmFtZXMiOlsiY29udGFpbmVyIiwic3RhdGUiLCJxdW90ZSIsImhlYWRpbmciLCJ0ZXh0Iiwic2VjdGlvbiIsIlF1b3RlQ2FyZCIsIndlYnZpZXdBY3Rpb25zIiwiZmV0Y2hRdW90ZXNEYXRhIiwibG9hZENvbnN0YW50cyIsImZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIiwiZmV0Y2hEaXNjb3VudE9mZmVycyIsInN3aXRjaFF1b3RlIiwidXBkYXRlUmVxdWVzdGVkVHJpcElkIiwiQWdlbnRDaGF0QnV0dG9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwidGV4dENsYXNzTmFtZSIsIkNoYXRDb250YWluZXIiLCJDaGF0Iiwic2hvd0ljb24iLCJoYW5kbGVDaGF0Q2xpY2siLCJuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJjdXN0b21CdXR0b24iLCJkZWZhdWx0UHJvcHMiLCJodG1sVG9SZWFjdFBhcnNlciIsIlBhcnNlciIsInRyYWNrU2VnbWVudCIsInRyYWNrU2VnbWVudEV2ZW50IiwiY3RhIiwiZXZlbnQiLCJPUkdBTklTTV9DTElDS0VEIiwiVGV4dENvbXAiLCJsZW5ndGgiLCJwYXJzZSIsInN1YnN0cmluZyIsInNlY3Rpb25JY29uIiwiaXNSZXF1aXJlZCIsIlF1b3RlQ2FyZEhlYWRlciIsImNoYXRCdXR0b25OYW1lIiwiaWNvbiIsImNhdGVnb3J5Iiwibm9kZSIsIkdyZWFkbW9yZUxhYmVsIiwiZ2xhbW9yb3VzIiwibGFiZWwiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsIkdEb3duQXJyb3dTcGFuIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwiU2hvd01vcmUiLCJjaGVja2VkIiwiZGVmYXVsdE9wZW4iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRMZW5ndGgiLCJpc0RlZmF1bHRTaG93TW9yZSIsImFwcGVuZFRleHQiLCJ3cmFwVGV4dCIsIm1vcmVUZXh0Iiwic2hvd0xlc3NUZXh0Iiwic2hvd01vcmVUZXh0Iiwib25lT2ZUeXBlIiwiYXJyYXkiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFJQTs7OztBQUVBLE1BQU1BLFlBQVksNkJBQVcseUJBQzNCQyxTQUFTO0FBQ1AsUUFBTUMsUUFBUSxpQ0FBZ0JELEtBQWhCLENBQWQ7QUFDQSxTQUFPO0FBQ0xFLGFBQVMsaUJBREo7QUFFTEMsVUFBTSxtQ0FBa0JGLEtBQWxCLENBRkQ7QUFHTEcsYUFBUztBQUhKLEdBQVA7QUFLRCxDQVIwQixFQVF4QkMsa0JBUndCLENBQVgsQ0FBbEI7ZUFVZTtBQUNiTixXQURhO0FBRWJPLGtCQUFnQixDQUFDQyxlQUFELEVBQWtCQyxlQUFsQixFQUFpQ0MsZ0NBQWpDLEVBQ2RDLDJCQURjLEVBQ09DLDRCQURQLEVBQ29CQyxzQ0FEcEI7QUFGSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZjs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1DLGUscUJBQU4s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QyxHQUFpRCxLQUFLMUQsS0FBTCxDQUFXMkQsWUFEL0QsRUFFRyxLQUFLNUUsS0FBTCxDQUFXNkQsT0FGZCxDQUZGLEVBTUUsNkJBQUMsY0FBRDtBQUNFLGlCQUFVO0FBRFosT0FDMEQsNkJBQUMsbUJBQUQsT0FEMUQsQ0FORixDQURGLENBREYsR0FZSSxFQTNCUixDQURGO0FBZ0NEOztBQTNEb0MsQztBQThEdkNELFNBQVNuQyxTQUFULEdBQXFCO0FBQ25CZ0QsWUFBVS9DLG1CQUFVbUQsU0FBVixDQUFvQixDQUM1Qm5ELG1CQUFVb0QsS0FEa0IsRUFFNUJwRCxtQkFBVUMsTUFGa0IsRUFHNUJELG1CQUFVcUQsTUFIa0IsQ0FBcEIsRUFJUG5DLFVBTGdCO0FBTW5COEIsWUFBVWhELG1CQUFVbUQsU0FBVixDQUFvQixDQUM1Qm5ELG1CQUFVb0QsS0FEa0IsRUFFNUJwRCxtQkFBVUMsTUFGa0IsRUFHNUJELG1CQUFVcUQsTUFIa0IsQ0FBcEIsQ0FOUztBQVduQkgsZ0JBQWNsRCxtQkFBVUMsTUFYTDtBQVluQmdELGdCQUFjakQsbUJBQVVDLE1BWkw7QUFhbkJtQyxlQUFhcEMsbUJBQVVFLElBYko7QUFjbkIyQyxxQkFBbUI3QyxtQkFBVUUsSUFkVjtBQWVuQk0sZ0JBQWNSLG1CQUFVRyxJQWZMO0FBZ0JuQjJDLGNBQVk5QyxtQkFBVUM7QUFoQkgsQ0FBckI7QUFvQkFpQyxTQUFTN0IsWUFBVCxHQUF3QjtBQUN0QjBDLFlBQVUsRUFEWTtBQUV0QkMsWUFBVSxFQUZZO0FBR3RCRSxnQkFBYyxXQUhRO0FBSXRCRCxnQkFBYyxXQUpRO0FBS3RCYixlQUFhLEtBTFM7QUFNdEJTLHFCQUFtQixJQU5HO0FBT3RCckMsZ0JBQWMsTUFBTSxDQUNuQjtBQVJxQixDQUF4QjtlQVdlMEIsUSIsImZpbGUiOiJxdW90ZS1hZGRpdGlvbmFsLWluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBsb2FkIGFzIGZldGNoUXVvdGVzRGF0YSB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUxpc3QnO1xuaW1wb3J0IHsgbG9hZCBhcyBsb2FkQ29uc3RhbnRzIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlQWN0aXZpdGllcyc7XG5pbXBvcnQgeyBmZXRjaERpc2NvdW50T2ZmZXJzIH0gZnJvbSAnbW9kdWxlcy9kaXNjb3VudEVuZ2luZS9hY3Rpb24nO1xuaW1wb3J0IHsgZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMgfSBmcm9tICdtb2R1bGVzL3BkbS9hY3Rpb24nO1xuXG5pbXBvcnQge1xuICBnZXRDdXJyZW50UXVvdGUsXG4gIGdldEFkZGl0aW9uYWxJbmZvLFxufSBmcm9tICdtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL3F1b3RlTGlzdCc7XG5pbXBvcnQgUXVvdGVDYXJkIGZyb20gJy4uL3NoYXJlZC9RdW90ZUNhcmQnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICBjb25zdCBxdW90ZSA9IGdldEN1cnJlbnRRdW90ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRpbmc6ICdBZGRpdGlvbmFsIEluZm8nLFxuICAgICAgdGV4dDogZ2V0QWRkaXRpb25hbEluZm8ocXVvdGUpLFxuICAgICAgc2VjdGlvbjogJ2FkZGl0aW9uYWwtaW5mby1zZWMnXG4gICAgfTtcbiAgfSkoUXVvdGVDYXJkKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICB3ZWJ2aWV3QWN0aW9uczogW2ZldGNoUXVvdGVzRGF0YSwgbG9hZENvbnN0YW50cywgZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMsXG4gICAgZmV0Y2hEaXNjb3VudE9mZmVycywgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZF1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgRGVmYXVsdEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBDaGF0IGZyb20gJ21vZHVsZXMvY2hhdCc7XG5cbmNsYXNzIEFnZW50Q2hhdEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93SWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFuZGxlQ2hhdENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0ZXh0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1c3RvbUJ1dHRvbjogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6ICdDaGF0JyxcbiAgICBzaG93SWNvbjogZmFsc2UsXG4gICAgaGFuZGxlQ2hhdENsaWNrOiAoKSA9PiB7fSxcbiAgICB0ZXh0Q2xhc3NOYW1lOiAnZjE0IGZ3NyBzZmMxJyxcbiAgICBjdXN0b21CdXR0b246IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0Q2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IENoYXRDb250YWluZXIgPSBDaGF0LmNvbnRhaW5lcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zaG93SWNvblxuICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC0yNCBtcjhcIj48RGVmYXVsdEljb24gLz48L3NwYW4+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB0cmlnZ2VyPXtcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0ZXh0Q2xhc3NOYW1lfSBhdF9hZ2VudF9jaGF0X2J1dHRvbmB9IG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hhdENsaWNrfT57dGhpcy5wcm9wcy5uYW1lfTwvYnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxsVmlldz17dHJ1ZX1cbiAgICAgICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX1cbiAgICAgICAgICBpc1doaXRlSWNvbj17dHJ1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDaGF0Q29udGFpbmVyIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50Q2hhdEJ1dHRvbjtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUnO1xuaW1wb3J0IFF1b3RlQ2FyZEhlYWRlciBmcm9tIFwibW9kdWxlcy9xdW90ZS9zaGFyZWQvUXVvdGVDYXJkSGVhZGVyXCI7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7Q2FiSWNvbkZyb250LCBGbGlnaHQsIFRuQ0ljb24sIEluZm9CbGFja0ljb259IGZyb20gXCJoZWxwZXJzL0ljb24vSWNvblwiO1xuXG5jb25zdCBodG1sVG9SZWFjdFBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3QgUXVvdGVDYXJkID0gKHsgaGVhZGluZywgdGV4dCwgc2VjdGlvbiwgdHJhY2tTZWdtZW50IH0pID0+IHtcblxuICBjb25zdCB0cmFja1NlZ21lbnRFdmVudCA9ICh7IGN0YSB9KSA9PiB7XG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgc2VjdGlvbjogc2VjdGlvbixcbiAgICAgIGN0YTogY3RhXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhdENsaWNrID0gKCkgPT4ge1xuICAgIHRyYWNrU2VnbWVudEV2ZW50KHsgY3RhOiAnQ2hhdCcgfSk7XG4gIH07XG5cbiAgbGV0IFRleHRDb21wID0gbnVsbDtcbiAgaWYgKHRleHQubGVuZ3RoID4gMjAwKSB7XG4gICAgVGV4dENvbXAgPSAoPFNob3dNb3JlXG4gICAgICB3cmFwVGV4dD17aHRtbFRvUmVhY3RQYXJzZXIucGFyc2UodGV4dC5zdWJzdHJpbmcoMCwgMjAwKSl9XG4gICAgICBtb3JlVGV4dD17aHRtbFRvUmVhY3RQYXJzZXIucGFyc2UodGV4dC5zdWJzdHJpbmcoMjAwKSl9XG4gICAgICBzaG93TW9yZVRleHQ9XCJSZWFkIE1vcmVcIlxuICAgICAgc2hvd0xlc3NUZXh0PVwiUmVhZCBMZXNzXCJcbiAgICAgIHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50RXZlbnR9XG4gICAgLz4pO1xuICB9IGVsc2Uge1xuICAgIFRleHRDb21wID0gaHRtbFRvUmVhY3RQYXJzZXIucGFyc2UodGV4dCk7XG4gIH1cblxuICBjb25zdCBzZWN0aW9uSWNvbiA9IChzZWN0aW9uKSA9PntcbiAgICBzd2l0Y2ggKHNlY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJjYWJzLXNlY1wiIDogcmV0dXJuICg8Q2FiSWNvbkZyb250Lz4pO1xuICAgICAgY2FzZSBcImFkZGl0aW9uYWwtaW5mby1zZWNcIiA6IHJldHVybiAoPEluZm9CbGFja0ljb24gLz4pO1xuICAgICAgY2FzZSBcInRlcm1zLWNvbmRpdGlvbnMtc2VjXCIgOiByZXR1cm4gKDxUbkNJY29uIC8+KTtcbiAgICAgIGNhc2UgXCJmbGlnaHRzLXNlY1wiIDogcmV0dXJuICg8RmxpZ2h0IC8+KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICB0ZXh0ID9cbiAgICAgIDxFbGVtZW50IG5hbWU9e3NlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBmYzMgZjE0IHNiY3cgbXQ4XCI+XG4gICAgICAgICAgPFF1b3RlQ2FyZEhlYWRlciBoZWFkaW5nPXtoZWFkaW5nfSBpY29uPXtzZWN0aW9uSWNvbihzZWN0aW9uKX0gY2hhdEJ1dHRvbk5hbWU9J0NoYXQnIGhhbmRsZUNoYXRDbGljaz17aGFuZGxlQ2hhdENsaWNrfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwMTUgcGw0OCBwdDAgYnJlYWstd29yZFwiPlxuICAgICAgICAgICAgPGRpdj57VGV4dENvbXB9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9FbGVtZW50PiA6IG51bGxcbiAgKTtcbn07XG5cblF1b3RlQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuUXVvdGVDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VjdGlvbjogJycsXG4gIHRleHQ6ICcnLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEFnZW50Q2hhdEJ1dHRvbiBmcm9tICcuL0FnZW50Q2hhdEJ1dHRvbic7XG5pbXBvcnQgeyBEZWZhdWx0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgUXVvdGVDYXJkSGVhZGVyID0gKHsgaGVhZGluZywgY2hhdEJ1dHRvbk5hbWUsIGhhbmRsZUNoYXRDbGljaywgaWNvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGZjMyBmMTQgcHQxNSBwbDE1IHBiMTUgcHIxNSBmbGV4IGFsaWduQ2VudGVyIGF0X2NhcmRIZWFkZXJcIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC0yNCBtcjggYXRfY2FyZEljb25cIj57aWNvbn08L3NwYW4+XG4gICAgPGgzIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNmEgZnc5IGF0X2NhcmRIZWFkaW5nXCI+e2hlYWRpbmd9PC9oMz5cbiAgICA8QWdlbnRDaGF0QnV0dG9uIG5hbWU9e2NoYXRCdXR0b25OYW1lfSBoYW5kbGVDaGF0Q2xpY2s9e2hhbmRsZUNoYXRDbGlja30gLz5cbiAgPC9kaXY+XG4pO1xuXG5RdW90ZUNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGF0QnV0dG9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5RdW90ZUNhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBoZWFkaW5nOiAnJyxcbiAgY2hhdEJ1dHRvbk5hbWU6ICcnLFxuICBjYXRlZ29yeTogJycsXG4gIGljb246IDxEZWZhdWx0SWNvbiAvPixcbiAgaGFuZGxlQ2hhdENsaWNrOiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlQ2FyZEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IHsgQmx1ZURvd25BcnJvdyB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHcmVhZG1vcmVMYWJlbCA9IGdsYW1vcm91cy5sYWJlbCh7XG4gICcmIGJ1dHRvbi5yZWFkLW1vcmUtYnV0dG9uJzoge1xuICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gIH0sXG59KTtcblxuY29uc3QgR0Rvd25BcnJvd1NwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMTBweCcsXG4gIGhlaWdodDogJzZweCcsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzZweCcsXG4gICAgdG9wOiAnMXB4J1xuICB9XG59KTtcblxuY2xhc3MgU2hvd01vcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogcHJvcHMuZGVmYXVsdE9wZW5cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHsgY3RhOiAnUmVhZCBNb3JlJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0TGVuZ3RoID0gMTk1O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHRleHQtbGVmdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXN0YXRlXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBpZD1cInBvc3QtMVwiIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2ByZWFkLW1vcmUtd3JhcCAke3RoaXMucHJvcHMuaXNEZWZhdWx0U2hvd01vcmUgPyAncC1sYXN0LW5vLW1hcmdpbiBwZmMzIGYxNHAgZHluYW1pY1RleHRJbmhlcml0JyA6ICcnfWB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSBmb3IgdHJ1bmNhdGUgdGhlIHN0cmluZ1xuICAgICAgICAgICAgIXRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLmFwcGVuZFRleHQgJiYgdGhpcy5wcm9wcy53cmFwVGV4dC5sZW5ndGggPj0gdGV4dExlbmd0aFxuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMud3JhcFRleHQgKyB0aGlzLnByb3BzLmFwcGVuZFRleHRcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLndyYXBUZXh0XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10YXJnZXRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vcmVUZXh0fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1vcmVUZXh0Lmxlbmd0aCA+IDAgfHwgIV9pc0VtcHR5KHRoaXMucHJvcHMubW9yZVRleHQpID9cbiAgICAgICAgICAgIDxHcmVhZG1vcmVMYWJlbCBodG1sRm9yPVwicG9zdC0xXCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRyaWdnZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYnV0dG9uIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIHJlbGF0aXZlIGYxMiBmdzdcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmMTQgZnc3XCI+XG4gICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tlZCkgPyB0aGlzLnByb3BzLnNob3dMZXNzVGV4dCA6IHRoaXMucHJvcHMuc2hvd01vcmVUZXh0fVxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEdEb3duQXJyb3dTcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1sOCByZWxhdGl2ZSBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+PEJsdWVEb3duQXJyb3cgLz48L0dEb3duQXJyb3dTcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JlYWRtb3JlTGFiZWw+XG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2hvd01vcmUucHJvcFR5cGVzID0ge1xuICB3cmFwVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKS5pc1JlcXVpcmVkLFxuICBtb3JlVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgc2hvd01vcmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93TGVzc1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IFByb3BUeXBlcy5ib29sLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBhcHBlbmRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG5cbn07XG5cblNob3dNb3JlLmRlZmF1bHRQcm9wcyA9IHtcbiAgd3JhcFRleHQ6ICcnLFxuICBtb3JlVGV4dDogJycsXG4gIHNob3dNb3JlVGV4dDogJ1JlYWQgTW9yZScsXG4gIHNob3dMZXNzVGV4dDogJ1JlYWQgTGVzcycsXG4gIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IHRydWUsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93TW9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=