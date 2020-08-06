require("source-map-support").install();
exports.ids = ["quote-terms-conditions"];
exports.modules = {

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

/***/ "./app-v2/modules/quote/termsAndConditions/index.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/quote/termsAndConditions/index.js ***!
  \**********************************************************/
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
    heading: 'Terms & Conditions',
    text: (0, _quoteList2.getTermConditions)(quote),
    section: 'terms-conditions-sec'
  };
})(_QuoteCard.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvQWdlbnRDaGF0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9RdW90ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS90ZXJtc0FuZENvbmRpdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlLmpzIl0sIm5hbWVzIjpbIkFnZW50Q2hhdEJ1dHRvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsInRleHRDbGFzc05hbWUiLCJDaGF0Q29udGFpbmVyIiwiQ2hhdCIsImNvbnRhaW5lciIsInNob3dJY29uIiwiaGFuZGxlQ2hhdENsaWNrIiwibmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwiY3VzdG9tQnV0dG9uIiwiZGVmYXVsdFByb3BzIiwiaHRtbFRvUmVhY3RQYXJzZXIiLCJQYXJzZXIiLCJRdW90ZUNhcmQiLCJoZWFkaW5nIiwidGV4dCIsInNlY3Rpb24iLCJ0cmFja1NlZ21lbnQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImN0YSIsImV2ZW50IiwiT1JHQU5JU01fQ0xJQ0tFRCIsIlRleHRDb21wIiwibGVuZ3RoIiwicGFyc2UiLCJzdWJzdHJpbmciLCJzZWN0aW9uSWNvbiIsImlzUmVxdWlyZWQiLCJRdW90ZUNhcmRIZWFkZXIiLCJjaGF0QnV0dG9uTmFtZSIsImljb24iLCJjYXRlZ29yeSIsIm5vZGUiLCJzdGF0ZSIsInF1b3RlIiwid2Vidmlld0FjdGlvbnMiLCJmZXRjaFF1b3Rlc0RhdGEiLCJsb2FkQ29uc3RhbnRzIiwiZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMiLCJmZXRjaERpc2NvdW50T2ZmZXJzIiwic3dpdGNoUXVvdGUiLCJ1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQiLCJHcmVhZG1vcmVMYWJlbCIsImdsYW1vcm91cyIsImxhYmVsIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJHRG93bkFycm93U3BhbiIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsIlNob3dNb3JlIiwiY2hlY2tlZCIsImRlZmF1bHRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TGVuZ3RoIiwiaXNEZWZhdWx0U2hvd01vcmUiLCJhcHBlbmRUZXh0Iiwid3JhcFRleHQiLCJtb3JlVGV4dCIsInNob3dMZXNzVGV4dCIsInNob3dNb3JlVGV4dCIsIm9uZU9mVHlwZSIsImFycmF5Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxlLHFCQUFOLE1BQU1BLGVBQU4sU0FBOEJDLGVBQU1DLFNBQXBDLENBQThDO0FBaUI1Q0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0Q7O0FBRURDLFdBQVM7QUFDUCxVQUFNO0FBQUVDO0FBQUYsUUFBb0IsS0FBS0YsS0FBL0I7QUFDQSxVQUFNRyxnQkFBZ0JDLGNBQUtDLFNBQTNCO0FBRUEsV0FDRSwwQ0FFSSxLQUFLTCxLQUFMLENBQVdNLFFBQVgsR0FDSTtBQUFNLGlCQUFVO0FBQWhCLE9BQStCLDZCQUFDLGlCQUFELE9BQS9CLENBREosR0FFSSxJQUpSLEVBTUUsNkJBQUMscUJBQUQ7QUFDRSxlQUNFO0FBQVEsbUJBQVksR0FBRUosYUFBYyx1QkFBcEM7QUFBNEQsaUJBQVMsS0FBS0YsS0FBTCxDQUFXTztBQUFoRixTQUFrRyxLQUFLUCxLQUFMLENB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LFlBRC9ELEVBRUcsS0FBS25DLEtBQUwsQ0FBV29CLE9BRmQsQ0FGRixFQU1FLDZCQUFDLGNBQUQ7QUFDRSxpQkFBVTtBQURaLE9BQzBELDZCQUFDLG1CQUFELE9BRDFELENBTkYsQ0FERixDQURGLEdBWUksRUEzQlIsQ0FERjtBQWdDRDs7QUEzRG9DLEM7QUE4RHZDRCxTQUFTaEQsU0FBVCxHQUFxQjtBQUNuQjZELFlBQVU1RCxtQkFBVWdFLFNBQVYsQ0FBb0IsQ0FDNUJoRSxtQkFBVWlFLEtBRGtCLEVBRTVCakUsbUJBQVVDLE1BRmtCLEVBRzVCRCxtQkFBVWtFLE1BSGtCLENBQXBCLEVBSVA1QyxVQUxnQjtBQU1uQnVDLFlBQVU3RCxtQkFBVWdFLFNBQVYsQ0FBb0IsQ0FDNUJoRSxtQkFBVWlFLEtBRGtCLEVBRTVCakUsbUJBQVVDLE1BRmtCLEVBRzVCRCxtQkFBVWtFLE1BSGtCLENBQXBCLENBTlM7QUFXbkJILGdCQUFjL0QsbUJBQVVDLE1BWEw7QUFZbkI2RCxnQkFBYzlELG1CQUFVQyxNQVpMO0FBYW5CZ0QsZUFBYWpELG1CQUFVRSxJQWJKO0FBY25Cd0QscUJBQW1CMUQsbUJBQVVFLElBZFY7QUFlbkJVLGdCQUFjWixtQkFBVUcsSUFmTDtBQWdCbkJ3RCxjQUFZM0QsbUJBQVVDO0FBaEJILENBQXJCO0FBb0JBOEMsU0FBUzFDLFlBQVQsR0FBd0I7QUFDdEJ1RCxZQUFVLEVBRFk7QUFFdEJDLFlBQVUsRUFGWTtBQUd0QkUsZ0JBQWMsV0FIUTtBQUl0QkQsZ0JBQWMsV0FKUTtBQUt0QmIsZUFBYSxLQUxTO0FBTXRCUyxxQkFBbUIsSUFORztBQU90QjlDLGdCQUFjLE1BQU0sQ0FDbkI7QUFScUIsQ0FBeEI7ZUFXZW1DLFEiLCJmaWxlIjoicXVvdGUtdGVybXMtY29uZGl0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IENoYXQgZnJvbSAnbW9kdWxlcy9jaGF0JztcblxuY2xhc3MgQWdlbnRDaGF0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRleHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3VzdG9tQnV0dG9uOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogJ0NoYXQnLFxuICAgIHNob3dJY29uOiBmYWxzZSxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHt9LFxuICAgIHRleHRDbGFzc05hbWU6ICdmMTQgZnc3IHNmYzEnLFxuICAgIGN1c3RvbUJ1dHRvbjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHRDbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgQ2hhdENvbnRhaW5lciA9IENoYXQuY29udGFpbmVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dJY29uXG4gICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOFwiPjxEZWZhdWx0SWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RleHRDbGFzc05hbWV9IGF0X2FnZW50X2NoYXRfYnV0dG9uYH0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGF0Q2xpY2t9Pnt0aGlzLnByb3BzLm5hbWV9PC9idXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bGxWaWV3PXt0cnVlfVxuICAgICAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgIGlzV2hpdGVJY29uPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgPENoYXRDb250YWluZXIgLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWdlbnRDaGF0QnV0dG9uO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBTaG93TW9yZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9TaG93TW9yZSc7XG5pbXBvcnQgUXVvdGVDYXJkSGVhZGVyIGZyb20gXCJtb2R1bGVzL3F1b3RlL3NoYXJlZC9RdW90ZUNhcmRIZWFkZXJcIjtcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHtDYWJJY29uRnJvbnQsIEZsaWdodCwgVG5DSWNvbiwgSW5mb0JsYWNrSWNvbn0gZnJvbSBcImhlbHBlcnMvSWNvbi9JY29uXCI7XG5cbmNvbnN0IGh0bWxUb1JlYWN0UGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBRdW90ZUNhcmQgPSAoeyBoZWFkaW5nLCB0ZXh0LCBzZWN0aW9uLCB0cmFja1NlZ21lbnQgfSkgPT4ge1xuXG4gIGNvbnN0IHRyYWNrU2VnbWVudEV2ZW50ID0gKHsgY3RhIH0pID0+IHtcbiAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiBzZWN0aW9uLFxuICAgICAgY3RhOiBjdGFcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQoeyBjdGE6ICdDaGF0JyB9KTtcbiAgfTtcblxuICBsZXQgVGV4dENvbXAgPSBudWxsO1xuICBpZiAodGV4dC5sZW5ndGggPiAyMDApIHtcbiAgICBUZXh0Q29tcCA9ICg8U2hvd01vcmVcbiAgICAgIHdyYXBUZXh0PXtodG1sVG9SZWFjdFBhcnNlci5wYXJzZSh0ZXh0LnN1YnN0cmluZygwLCAyMDApKX1cbiAgICAgIG1vcmVUZXh0PXtodG1sVG9SZWFjdFBhcnNlci5wYXJzZSh0ZXh0LnN1YnN0cmluZygyMDApKX1cbiAgICAgIHNob3dNb3JlVGV4dD1cIlJlYWQgTW9yZVwiXG4gICAgICBzaG93TGVzc1RleHQ9XCJSZWFkIExlc3NcIlxuICAgICAgdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH1cbiAgICAvPik7XG4gIH0gZWxzZSB7XG4gICAgVGV4dENvbXAgPSBodG1sVG9SZWFjdFBhcnNlci5wYXJzZSh0ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IHNlY3Rpb25JY29uID0gKHNlY3Rpb24pID0+e1xuICAgIHN3aXRjaCAoc2VjdGlvbikge1xuICAgICAgY2FzZSBcImNhYnMtc2VjXCIgOiByZXR1cm4gKDxDYWJJY29uRnJvbnQvPik7XG4gICAgICBjYXNlIFwiYWRkaXRpb25hbC1pbmZvLXNlY1wiIDogcmV0dXJuICg8SW5mb0JsYWNrSWNvbiAvPik7XG4gICAgICBjYXNlIFwidGVybXMtY29uZGl0aW9ucy1zZWNcIiA6IHJldHVybiAoPFRuQ0ljb24gLz4pO1xuICAgICAgY2FzZSBcImZsaWdodHMtc2VjXCIgOiByZXR1cm4gKDxGbGlnaHQgLz4pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIHRleHQgP1xuICAgICAgPEVsZW1lbnQgbmFtZT17c2VjdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGZjMyBmMTQgc2JjdyBtdDhcIj5cbiAgICAgICAgICA8UXVvdGVDYXJkSGVhZGVyIGhlYWRpbmc9e2hlYWRpbmd9IGljb249e3NlY3Rpb25JY29uKHNlY3Rpb24pfSBjaGF0QnV0dG9uTmFtZT0nQ2hhdCcgaGFuZGxlQ2hhdENsaWNrPXtoYW5kbGVDaGF0Q2xpY2t9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IHAxNSBwbDQ4IHB0MCBicmVhay13b3JkXCI+XG4gICAgICAgICAgICA8ZGl2PntUZXh0Q29tcH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0VsZW1lbnQ+IDogbnVsbFxuICApO1xufTtcblxuUXVvdGVDYXJkLnByb3BUeXBlcyA9IHtcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5RdW90ZUNhcmQuZGVmYXVsdFByb3BzID0ge1xuICBzZWN0aW9uOiAnJyxcbiAgdGV4dDogJycsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQWdlbnRDaGF0QnV0dG9uIGZyb20gJy4vQWdlbnRDaGF0QnV0dG9uJztcbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBRdW90ZUNhcmRIZWFkZXIgPSAoeyBoZWFkaW5nLCBjaGF0QnV0dG9uTmFtZSwgaGFuZGxlQ2hhdENsaWNrLCBpY29uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwZmMzIGYxNCBwdDE1IHBsMTUgcGIxNSBwcjE1IGZsZXggYWxpZ25DZW50ZXIgYXRfY2FyZEhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOCBhdF9jYXJkSWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICA8aDMgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE2YSBmdzkgYXRfY2FyZEhlYWRpbmdcIj57aGVhZGluZ308L2gzPlxuICAgIDxBZ2VudENoYXRCdXR0b24gbmFtZT17Y2hhdEJ1dHRvbk5hbWV9IGhhbmRsZUNoYXRDbGljaz17aGFuZGxlQ2hhdENsaWNrfSAvPlxuICA8L2Rpdj5cbik7XG5cblF1b3RlQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYXRCdXR0b25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblF1b3RlQ2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICcnLFxuICBjaGF0QnV0dG9uTmFtZTogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgaWNvbjogPERlZmF1bHRJY29uIC8+LFxuICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVDYXJkSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgbG9hZCBhcyBmZXRjaFF1b3Rlc0RhdGEgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IGxvYWQgYXMgbG9hZENvbnN0YW50cyB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9jb25zdGFudHMnO1xuaW1wb3J0IHsgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZCB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZmV0Y2hEaXNjb3VudE9mZmVycyB9IGZyb20gJ21vZHVsZXMvZGlzY291bnRFbmdpbmUvYWN0aW9uJztcbmltcG9ydCB7IGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIH0gZnJvbSAnbW9kdWxlcy9wZG0vYWN0aW9uJztcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFF1b3RlLCBnZXRUZXJtQ29uZGl0aW9ucyB9IGZyb20gJy4uL3JlZHVjZXJzL3F1b3RlTGlzdCc7XG5pbXBvcnQgUXVvdGVDYXJkIGZyb20gJy4uL3NoYXJlZC9RdW90ZUNhcmQnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICBjb25zdCBxdW90ZSA9IGdldEN1cnJlbnRRdW90ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRpbmc6ICdUZXJtcyAmIENvbmRpdGlvbnMnLFxuICAgICAgdGV4dDogZ2V0VGVybUNvbmRpdGlvbnMocXVvdGUpLFxuICAgICAgc2VjdGlvbjogJ3Rlcm1zLWNvbmRpdGlvbnMtc2VjJ1xuICAgIH07XG4gIH0pKFF1b3RlQ2FyZCkpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgd2Vidmlld0FjdGlvbnM6IFtmZXRjaFF1b3Rlc0RhdGEsIGxvYWRDb25zdGFudHMsIGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzLFxuICAgIGZldGNoRGlzY291bnRPZmZlcnMsIHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWRdXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==