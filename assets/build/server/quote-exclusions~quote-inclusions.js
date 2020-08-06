require("source-map-support").install();
exports.ids = ["quote-exclusions~quote-inclusions"];
exports.modules = {

/***/ "./app-v2/modules/quote/inclusionExclusion/InclusionExclusion.js":
/*!***********************************************************************!*\
  !*** ./app-v2/modules/quote/inclusionExclusion/InclusionExclusion.js ***!
  \***********************************************************************/
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

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _pdmHelpers = __webpack_require__(/*! helpers/pdmHelpers */ "./app/helpers/pdmHelpers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _QuoteCardHeader = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/QuoteCardHeader */ "./app-v2/modules/quote/shared/QuoteCardHeader.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GListItemDiv = _glamorous.default.div(({
  title
}) => ({
  paddingLeft: '25px',
  position: 'relative',
  '&:after': {
    content: '\' \'',
    width: '8px',
    height: '8px',
    background: title === 'Exclusions' ? '#fc5145' : '#4caf50',
    borderRadius: '100%',
    position: 'absolute',
    left: '0',
    top: '6px'
  }
}));

function hideTitle(item) {
  return item.category === 'Others' && (item.comments === null || item.comments === '');
}

const renderComments = comments => comments ? _react.default.createElement("span", null, " : ", comments) : null;

const renderListItem = (data, title) => data.map((listItem, index) => hideTitle(listItem) ? '' : _react.default.createElement(GListItemDiv, {
  key: listItem.id || index,
  className: "mb15",
  title: title
}, listItem.name || listItem, renderComments(listItem.comments)));

const renderList = (listItems, classNames, title, trackSegmentEvent) => {
  if (listItems.length > 4) {
    const wrapData = listItems.slice(0, 4);
    const moreData = listItems.slice(5);
    const wrapText = renderListItem(wrapData, title);
    const moreText = renderListItem(moreData, title);
    return _react.default.createElement("div", {
      className: "sbcw p15 pt0 pl24" + classNames
    }, _react.default.createElement(_ShowMore.default, {
      wrapText: wrapText,
      moreText: moreText,
      showMoreText: "Read More",
      showLessText: "Read Less",
      trackSegment: trackSegmentEvent
    }));
  }

  return _react.default.createElement("div", {
    className: "sbcw mr8 ml8 p15" + classNames
  }, renderListItem(listItems, title));
};

const isInclusion = sectionName => sectionName === 'inclusions-sec';

const InclusionExclusion = ({
  title,
  item,
  classNames,
  sectionName,
  setPdmCategory,
  showHidePdmView,
  trackSegment
}) => {
  const trackSegmentEvent = ({
    cta
  }) => {
    trackSegment({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: sectionName,
      cta: cta
    });
  };

  const handleChatClick = () => {
    if (isInclusion(sectionName)) {
      setPdmCategory(_pdmHelpers.PDM_CATEGORY_INCLUSION);
      showHidePdmView(true);
    }

    trackSegmentEvent({
      cta: 'Chat'
    });
  };

  return item ? _react.default.createElement(_reactScroll.Element, {
    name: sectionName
  }, _react.default.createElement("div", {
    className: "pfc3 f14 sbcw mt8"
  }, _react.default.createElement(_QuoteCardHeader.default, {
    heading: title,
    chatButtonName: isInclusion(sectionName) ? 'Edit Package' : 'Chat',
    handleChatClick: handleChatClick,
    icon: isInclusion(sectionName) ? _react.default.createElement(_Icon.InclusionsNewIcon, null) : _react.default.createElement(_Icon.ExclusionsNewIcon, null)
  }), typeof item === 'string' ? _react.default.createElement("div", {
    className: "sbcw p15 pl48 pt0"
  }, item) : renderList(item, classNames, title, trackSegmentEvent))) : null;
};

InclusionExclusion.propTypes = {
  title: _propTypes.default.string,
  item: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]).isRequired,
  classNames: _propTypes.default.string,
  sectionName: _propTypes.default.string,
  setPdmCategory: _propTypes.default.func,
  showHidePdmView: _propTypes.default.func,
  trackSegment: _propTypes.default.func
};
InclusionExclusion.defaultProps = {
  title: '',
  classNames: '',
  sectionName: '',
  setPdmCategory: () => {},
  showHidePdmView: () => {},
  trackSegment: () => {}
};
var _default = InclusionExclusion;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9pbmNsdXNpb25FeGNsdXNpb24vSW5jbHVzaW9uRXhjbHVzaW9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3NoYXJlZC9BZ2VudENoYXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUuanMiXSwibmFtZXMiOlsiR0xpc3RJdGVtRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwidGl0bGUiLCJwYWRkaW5nTGVmdCIsInBvc2l0aW9uIiwiY29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImxlZnQiLCJ0b3AiLCJoaWRlVGl0bGUiLCJpdGVtIiwiY2F0ZWdvcnkiLCJjb21tZW50cyIsInJlbmRlckNvbW1lbnRzIiwicmVuZGVyTGlzdEl0ZW0iLCJkYXRhIiwibWFwIiwibGlzdEl0ZW0iLCJpbmRleCIsImlkIiwibmFtZSIsInJlbmRlckxpc3QiLCJsaXN0SXRlbXMiLCJjbGFzc05hbWVzIiwidHJhY2tTZWdtZW50RXZlbnQiLCJsZW5ndGgiLCJ3cmFwRGF0YSIsInNsaWNlIiwibW9yZURhdGEiLCJ3cmFwVGV4dCIsIm1vcmVUZXh0IiwiaXNJbmNsdXNpb24iLCJzZWN0aW9uTmFtZSIsIkluY2x1c2lvbkV4Y2x1c2lvbiIsInNldFBkbUNhdGVnb3J5Iiwic2hvd0hpZGVQZG1WaWV3IiwidHJhY2tTZWdtZW50IiwiY3RhIiwiZXZlbnQiLCJPUkdBTklTTV9DTElDS0VEIiwic2VjdGlvbiIsImhhbmRsZUNoYXRDbGljayIsIlBETV9DQVRFR09SWV9JTkNMVVNJT04iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiQWdlbnRDaGF0QnV0dG9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwidGV4dENsYXNzTmFtZSIsIkNoYXRDb250YWluZXIiLCJDaGF0IiwiY29udGFpbmVyIiwic2hvd0ljb24iLCJib29sIiwiY3VzdG9tQnV0dG9uIiwiUXVvdGVDYXJkSGVhZGVyIiwiaGVhZGluZyIsImNoYXRCdXR0b25OYW1lIiwiaWNvbiIsIm5vZGUiLCJHcmVhZG1vcmVMYWJlbCIsImxhYmVsIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJHRG93bkFycm93U3BhbiIsInNwYW4iLCJTaG93TW9yZSIsInN0YXRlIiwiY2hlY2tlZCIsImRlZmF1bHRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TGVuZ3RoIiwiaXNEZWZhdWx0U2hvd01vcmUiLCJhcHBlbmRUZXh0Iiwic2hvd0xlc3NUZXh0Iiwic2hvd01vcmVUZXh0Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxlQUFlQyxtQkFBVUMsR0FBVixDQUFjLENBQUM7QUFBRUM7QUFBRixDQUFELE1BQWdCO0FBQ2pEQyxlQUFhLE1BRG9DO0FBRWpEQyxZQUFVLFVBRnVDO0FBR2pELGFBQVc7QUFDVEMsYUFBUyxPQURBO0FBRVRDLFdBQU8sS0FGRTtBQUdUQyxZQUFRLEtBSEM7QUFJVEMsZ0JBQVlOLFVBQVUsWUFBVixHQUF5QixTQUF6QixHQUFxQyxTQUp4QztBQUtUTyxrQkFBYyxNQUxMO0FBTVRMLGNBQVUsVUFORDtBQU9UTSxVQUFNLEdBUEc7QUFRVEMsU0FBSztBQVJJO0FB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UmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5pbXBvcnQgeyBQRE1fQ0FURUdPUllfSU5DTFVTSU9OIH0gZnJvbSAnaGVscGVycy9wZG1IZWxwZXJzJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IFNob3dNb3JlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcbmltcG9ydCBRdW90ZUNhcmRIZWFkZXIgZnJvbSBcIm1vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZEhlYWRlclwiO1xuaW1wb3J0IHtJbmNsdXNpb25zTmV3SWNvbiwgRXhjbHVzaW9uc05ld0ljb259IGZyb20gXCJoZWxwZXJzL0ljb24vSWNvblwiO1xuXG5jb25zdCBHTGlzdEl0ZW1EaXYgPSBnbGFtb3JvdXMuZGl2KCh7IHRpdGxlIH0pID0+ICh7XG4gIHBhZGRpbmdMZWZ0OiAnMjVweCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAnJjphZnRlcic6IHtcbiAgICBjb250ZW50OiAnXFwnIFxcJycsXG4gICAgd2lkdGg6ICc4cHgnLFxuICAgIGhlaWdodDogJzhweCcsXG4gICAgYmFja2dyb3VuZDogdGl0bGUgPT09ICdFeGNsdXNpb25zJyA/ICcjZmM1MTQ1JyA6ICcjNGNhZjUwJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgdG9wOiAnNnB4J1xuICB9XG59KSk7XG5cbmZ1bmN0aW9uIGhpZGVUaXRsZShpdGVtKSB7XG4gIHJldHVybiBpdGVtLmNhdGVnb3J5ID09PSAnT3RoZXJzJyAmJiAoaXRlbS5jb21tZW50cyA9PT0gbnVsbCB8fFxuICAgIGl0ZW0uY29tbWVudHMgPT09ICcnKTtcbn1cblxuY29uc3QgcmVuZGVyQ29tbWVudHMgPSAoY29tbWVudHMpID0+IChjb21tZW50cyA/IDxzcGFuPiA6IHtjb21tZW50c308L3NwYW4+IDogbnVsbCk7XG5cbmNvbnN0IHJlbmRlckxpc3RJdGVtID0gKGRhdGEsIHRpdGxlKSA9PiAoXG4gIGRhdGEubWFwKChsaXN0SXRlbSwgaW5kZXgpID0+IGhpZGVUaXRsZShsaXN0SXRlbSlcbiAgICA/ICcnXG4gICAgOiA8R0xpc3RJdGVtRGl2IGtleT17bGlzdEl0ZW0uaWQgfHwgaW5kZXh9IGNsYXNzTmFtZT1cIm1iMTVcIiB0aXRsZT17dGl0bGV9PlxuICAgICAge2xpc3RJdGVtLm5hbWUgfHwgbGlzdEl0ZW19XG4gICAgICB7cmVuZGVyQ29tbWVudHMobGlzdEl0ZW0uY29tbWVudHMpfVxuICAgIDwvR0xpc3RJdGVtRGl2Pilcbik7XG5cbmNvbnN0IHJlbmRlckxpc3QgPSAobGlzdEl0ZW1zLCBjbGFzc05hbWVzLCB0aXRsZSwgdHJhY2tTZWdtZW50RXZlbnQpID0+IHtcbiAgaWYgKGxpc3RJdGVtcy5sZW5ndGggPiA0KSB7XG4gICAgY29uc3Qgd3JhcERhdGEgPSBsaXN0SXRlbXMuc2xpY2UoMCwgNCk7XG4gICAgY29uc3QgbW9yZURhdGEgPSBsaXN0SXRlbXMuc2xpY2UoNSk7XG5cbiAgICBjb25zdCB3cmFwVGV4dCA9IHJlbmRlckxpc3RJdGVtKHdyYXBEYXRhLCB0aXRsZSk7XG4gICAgY29uc3QgbW9yZVRleHQgPSByZW5kZXJMaXN0SXRlbShtb3JlRGF0YSwgdGl0bGUpO1xuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17XCJzYmN3IHAxNSBwdDAgcGwyNFwiICsgY2xhc3NOYW1lc30+PFNob3dNb3JlXG4gICAgICB3cmFwVGV4dD17d3JhcFRleHR9XG4gICAgICBtb3JlVGV4dD17bW9yZVRleHR9XG4gICAgICBzaG93TW9yZVRleHQ9XCJSZWFkIE1vcmVcIlxuICAgICAgc2hvd0xlc3NUZXh0PVwiUmVhZCBMZXNzXCJcbiAgICAgIHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50RXZlbnR9XG4gICAgLz48L2Rpdj4pO1xuICB9XG5cbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17XCJzYmN3IG1yOCBtbDggcDE1XCIgKyBjbGFzc05hbWVzfT5cbiAgICB7cmVuZGVyTGlzdEl0ZW0obGlzdEl0ZW1zLCB0aXRsZSl9XG4gIDwvZGl2Pik7XG59O1xuXG5jb25zdCBpc0luY2x1c2lvbiA9IChzZWN0aW9uTmFtZSkgPT4gc2VjdGlvbk5hbWUgPT09ICdpbmNsdXNpb25zLXNlYyc7XG5cbmNvbnN0IEluY2x1c2lvbkV4Y2x1c2lvbiA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSwgaXRlbSwgY2xhc3NOYW1lcywgc2VjdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQZG1DYXRlZ29yeSwgc2hvd0hpZGVQZG1WaWV3LCB0cmFja1NlZ21lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG5cbiAgY29uc3QgdHJhY2tTZWdtZW50RXZlbnQgPSAoeyBjdGEgfSkgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIHNlY3Rpb246IHNlY3Rpb25OYW1lLFxuICAgICAgY3RhOiBjdGFcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGlzSW5jbHVzaW9uKHNlY3Rpb25OYW1lKSkge1xuICAgICAgc2V0UGRtQ2F0ZWdvcnkoUERNX0NBVEVHT1JZX0lOQ0xVU0lPTik7XG4gICAgICBzaG93SGlkZVBkbVZpZXcodHJ1ZSk7XG4gICAgfVxuXG4gICAgdHJhY2tTZWdtZW50RXZlbnQoeyBjdGE6ICdDaGF0JyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIGl0ZW0gP1xuICAgICAgPEVsZW1lbnQgbmFtZT17c2VjdGlvbk5hbWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBmYzMgZjE0IHNiY3cgbXQ4XCI+XG4gICAgICAgICAgPFF1b3RlQ2FyZEhlYWRlciBoZWFkaW5nPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRCdXR0b25OYW1lPXtpc0luY2x1c2lvbihzZWN0aW9uTmFtZSkgPyAnRWRpdCBQYWNrYWdlJyA6ICdDaGF0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYXRDbGljaz17aGFuZGxlQ2hhdENsaWNrfVxuICAgICAgICAgIGljb249e2lzSW5jbHVzaW9uKHNlY3Rpb25OYW1lKSA/IDxJbmNsdXNpb25zTmV3SWNvbiAvPiA6IDxFeGNsdXNpb25zTmV3SWNvbiAvPn0vPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwMTUgcGw0OCBwdDBcIj57aXRlbX08L2Rpdj5cbiAgICAgICAgICAgICAgOiByZW5kZXJMaXN0KGl0ZW0sIGNsYXNzTmFtZXMsIHRpdGxlLCB0cmFja1NlZ21lbnRFdmVudClcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9FbGVtZW50PiA6IG51bGxcbiAgKTtcbn07XG5cbkluY2x1c2lvbkV4Y2x1c2lvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpdGVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWN0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2V0UGRtQ2F0ZWdvcnk6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93SGlkZVBkbVZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5JbmNsdXNpb25FeGNsdXNpb24uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJycsXG4gIGNsYXNzTmFtZXM6ICcnLFxuICBzZWN0aW9uTmFtZTogJycsXG4gIHNldFBkbUNhdGVnb3J5OiAoKSA9PiB7fSxcbiAgc2hvd0hpZGVQZG1WaWV3OiAoKSA9PiB7fSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5jbHVzaW9uRXhjbHVzaW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgQ2hhdCBmcm9tICdtb2R1bGVzL2NoYXQnO1xuXG5jbGFzcyBBZ2VudENoYXRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd0ljb246IFByb3BUeXBlcy5ib29sLFxuICAgIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGV4dENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjdXN0b21CdXR0b246IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiAnQ2hhdCcsXG4gICAgc2hvd0ljb246IGZhbHNlLFxuICAgIGhhbmRsZUNoYXRDbGljazogKCkgPT4ge30sXG4gICAgdGV4dENsYXNzTmFtZTogJ2YxNCBmdzcgc2ZjMScsXG4gICAgY3VzdG9tQnV0dG9uOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGV4dENsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBDaGF0Q29udGFpbmVyID0gQ2hhdC5jb250YWluZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0ljb25cbiAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgbXI4XCI+PERlZmF1bHRJY29uIC8+PC9zcGFuPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGV4dENsYXNzTmFtZX0gYXRfYWdlbnRfY2hhdF9idXR0b25gfSBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoYXRDbGlja30+e3RoaXMucHJvcHMubmFtZX08L2J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgaXNXaGl0ZUljb249e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hhdENvbnRhaW5lciAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZ2VudENoYXRCdXR0b247XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQWdlbnRDaGF0QnV0dG9uIGZyb20gJy4vQWdlbnRDaGF0QnV0dG9uJztcbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBRdW90ZUNhcmRIZWFkZXIgPSAoeyBoZWFkaW5nLCBjaGF0QnV0dG9uTmFtZSwgaGFuZGxlQ2hhdENsaWNrLCBpY29uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwZmMzIGYxNCBwdDE1IHBsMTUgcGIxNSBwcjE1IGZsZXggYWxpZ25DZW50ZXIgYXRfY2FyZEhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOCBhdF9jYXJkSWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICA8aDMgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE2YSBmdzkgYXRfY2FyZEhlYWRpbmdcIj57aGVhZGluZ308L2gzPlxuICAgIDxBZ2VudENoYXRCdXR0b24gbmFtZT17Y2hhdEJ1dHRvbk5hbWV9IGhhbmRsZUNoYXRDbGljaz17aGFuZGxlQ2hhdENsaWNrfSAvPlxuICA8L2Rpdj5cbik7XG5cblF1b3RlQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYXRCdXR0b25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblF1b3RlQ2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICcnLFxuICBjaGF0QnV0dG9uTmFtZTogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgaWNvbjogPERlZmF1bHRJY29uIC8+LFxuICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVDYXJkSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==