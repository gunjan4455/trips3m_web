require("source-map-support").install();
exports.ids = ["city-block-timings"];
exports.modules = {

/***/ "./app-v2/modules/cityBlock/Timing/TimingList.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/cityBlock/Timing/TimingList.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GTimingListUl = _glamorous.default.ul({
  padding: '0',
  margin: '0',
  '& li': {
    margin: '0 40px 0 0',
    paddingLeft: '30px',
    display: 'inline-block',
    '&:last-child': {
      marginRight: '0'
    }
  }
});

const Icon = _glamorous.default.span({
  width: '18px',
  height: '18px',
  '& svg': {
    width: '18px',
    height: '18px'
  }
});

const TimingList = ({
  data
}) => {
  return _react.default.createElement("div", null, _react.default.createElement("h2", {
    className: "m0 mb15 f16 fw9 pfc1"
  }, "Timings"), _react.default.createElement(GTimingListUl, null, data.timings && data.timings.length && data.timings.map((day, i) => _react.default.createElement("li", {
    key: i,
    className: "relative"
  }, _react.default.createElement(Icon, {
    className: "absolute l0 t4 block"
  }, _react.default.createElement(_Icon.DurationIcon, null)), _react.default.createElement("p", {
    className: "f14 m0 fw9 pb8"
  }, day.startDay, " to ", day.endDay), day.timing.map((time, i) => _react.default.createElement("p", {
    className: "f14 m0",
    key: i
  }, time.startTime, " - ", time.closeTime))))));
};

TimingList.propTypes = {
  data: _propTypes.default.object.isRequired
};
var _default = TimingList;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Guide.js":
/*!****************************************!*\
  !*** ./app-v2/modules/shared/Guide.js ***!
  \****************************************/
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

var _Overview = _interopRequireDefault(__webpack_require__(/*! ./Overview */ "./app-v2/modules/shared/Overview.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! ./Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ShowMoreContainer = _glamorous.default.div({
  marginTop: '-8px'
});

const Guide = ({
  guide
}) => {
  return _react.default.createElement("div", {
    className: "clearfix sbcw p15"
  }, _react.default.createElement(_Heading.default, _extends({}, guide, {
    type: "main-heading"
  })), _react.default.createElement(_Overview.default, guide));
};

Guide.propTypes = {
  guide: _propTypes.default.object
};
Guide.defaultProps = {
  guide: {}
};
var _default = Guide;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Heading.js":
/*!******************************************!*\
  !*** ./app-v2/modules/shared/Heading.js ***!
  \******************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SubHeading = _glamorous.default.p({
  fontSize: '14px',
  lineHeight: '18px',
  color: '#cbcbcb',
  margin: '4px 0 0 0'
});

const Heading = ({
  data,
  title,
  heading,
  styleHeading,
  styleSubHeading,
  type,
  isViewAllHidden
}) => {
  return _react.default.createElement("div", {
    className: "clearfix mb15"
  }, type === 'main-heading' ? _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc1 fw9 m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null) : _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc3 fwb m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null), data.heading || heading ? _react.default.createElement(SubHeading, {
    style: styleSubHeading,
    className: "f14 mt4 fw4"
  }, data.heading || heading) : null);
};

Heading.propTypes = {
  data: _propTypes.default.object,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  heading: _propTypes.default.string,
  styleHeading: _propTypes.default.object,
  styleSubHeading: _propTypes.default.object,
  isViewAllHidden: _propTypes.default.bool
};
Heading.defaultProps = {
  data: {},
  type: '',
  title: '',
  heading: '',
  styleHeading: {},
  styleSubHeading: {},
  isViewAllHidden: false
};
var _default = Heading;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Overview.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Overview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ./ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const overviewSplitAfterShowMore = overviewMoreText => {
  try {
    return overviewMoreText.replace(/<br \/>|<\/br>/g, '').replace('</span></p>\r\n', '');
  } catch (err) {
    return overviewMoreText;
  }
};

let Overview = class Overview extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.overviewContent = () => {
      const {
        description,
        footerDescription
      } = this.props;
      const desc = description && description.split('\r\n').filter(p => p.length) || [];

      if (!desc.length) {
        return null;
      }

      const footerDesc = footerDescription ? `<br>${footerDescription}` : '';
      return _react.default.createElement(_ShowMore.default, {
        wrapText: parser.parse(desc[0]),
        moreText: parser.parse(overviewSplitAfterShowMore(desc.slice(1).join('\n').concat(footerDesc)))
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row- row-mw"
    }, _react.default.createElement("div", {
      className: "read-more-box"
    }, this.overviewContent()));
  }

};
Overview.defaultProps = {
  footerDescription: '',
  description: ''
};
Overview.propTypes = {
  description: _propTypes.default.string,
  footerDescription: _propTypes.default.string
};
var _default = Overview;
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

/***/ }),

/***/ "./app-v2/screens/cityBlock/timings/Timings.js":
/*!*****************************************************!*\
  !*** ./app-v2/screens/cityBlock/timings/Timings.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Guide = _interopRequireDefault(__webpack_require__(/*! modules/shared/Guide */ "./app-v2/modules/shared/Guide.js"));

var _TimingList = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/Timing/TimingList */ "./app-v2/modules/cityBlock/Timing/TimingList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Timings = ({
  data,
  exitIntent
}) => {
  return _react.default.createElement("div", {
    className: "clearfix"
  }, data && data.description ? _react.default.createElement("div", {
    className: "m8 mt0"
  }, _react.default.createElement(_Guide.default, {
    guide: data
  })) : null, data && data.timings && data.timings.length ? _react.default.createElement("div", {
    className: "sbcw p15 m8 mt0"
  }, _react.default.createElement(_TimingList.default, {
    data: data
  })) : null, exitIntent);
};

var _default = Timings;
exports.default = _default;
Timings.propTypes = {
  data: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svVGltaW5nL1RpbWluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0d1aWRlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9IZWFkaW5nLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9PdmVydmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvY2l0eUJsb2NrL3RpbWluZ3MvVGltaW5ncy5qcyJdLCJuYW1lcyI6WyJHVGltaW5nTGlzdFVsIiwiZ2xhbW9yb3VzIiwidWwiLCJwYWRkaW5nIiwibWFyZ2luIiwicGFkZGluZ0xlZnQiLCJkaXNwbGF5IiwibWFyZ2luUmlnaHQiLCJJY29uIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiVGltaW5nTGlzdCIsImRhdGEiLCJ0aW1pbmdzIiwibGVuZ3RoIiwibWFwIiwiZGF5IiwiaSIsInN0YXJ0RGF5IiwiZW5kRGF5IiwidGltaW5nIiwidGltZSIsInN0YXJ0VGltZSIsImNsb3NlVGltZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJTaG93TW9yZUNvbnRhaW5lciIsImRpdiIsIm1hcmdpblRvcCIsIkd1aWRlIiwiZ3VpZGUiLCJkZWZhdWx0UHJvcHMiLCJTdWJIZWFkaW5nIiwicCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwiSGVhZGluZyIsInRpdGxlIiwiaGVhZGluZyIsInN0eWxlSGVhZGluZyIsInN0eWxlU3ViSGVhZGluZyIsInR5cGUiLCJpc1ZpZXdBbGxIaWRkZW4iLCJmb3JIZWFkaW5nIiwic3RyaW5nIiwiYm9vbCIsInBhcnNlciIsIlBhcnNlciIsIm92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlIiwib3ZlcnZpZXdNb3JlVGV4dCIsInJlcGxhY2UiLCJlcnIiLCJPdmVydmlldyIsIlB1cmVDb21wb25lbnQiLCJvdmVydmlld0NvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImZvb3RlckRlc2NyaXB0aW9uIiwicHJvcHMiLCJkZXNjIiwic3BsaXQiLCJmaWx0ZXIiLCJmb290ZXJEZXNjIiwicGFyc2UiLCJzbGljZSIsImpvaW4iLCJjb25jYXQiLCJyZW5kZXIiLCJHcmVhZG1vcmVMYWJlbCIsImxhYmVsIiwiR0Rvd25BcnJvd1NwYW4iLCJ0b3AiLCJTaG93TW9yZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNoZWNrZWQiLCJkZWZhdWx0T3BlbiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJhY2tTZWdtZW50IiwiY3RhIiwidGV4dExlbmd0aCIsImlzRGVmYXVsdFNob3dNb3JlIiwiYXBwZW5kVGV4dCIsIndyYXBUZXh0IiwibW9yZVRleHQiLCJzaG93TGVzc1RleHQiLCJzaG93TW9yZVRleHQiLCJvbmVPZlR5cGUiLCJhcnJheSIsImZ1bmMiLCJUaW1pbmdzIiwiZXhpdEludGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsZ0JBQWdCQyxtQkFBVUMsRUFBVixDQUFhO0FBQ2pDQyxXQUFTLEdBRHdCO0FBRWpDQyxVQUFRLEdBRnlCO0FBR2pDLFVBQVE7QUFDTkEsWUFBUSxZQURGO0FBRU5DLGlCQUFhLE1BRlA7QUFHTkMsYUFBUyxjQUhIO0FBSU4sb0JBQWdCO0FBQ2RDLG1CQUFhO0FBREM7QUFKVjtBQUh5QixDQUFiLENBQXRCOztBQWFBLE1BQU1DLE9BQU9QLG1CQUFVUSxJQUFWLENBQWU7QUFDMUJDLFNBQU8sTUFEbUI7QUFF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ImZpbGUiOiJjaXR5LWJsb2NrLXRpbWluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IER1cmF0aW9uSWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgR1RpbWluZ0xpc3RVbCA9IGdsYW1vcm91cy51bCh7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gICcmIGxpJzoge1xuICAgIG1hcmdpbjogJzAgNDBweCAwIDAnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMzBweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnMCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBJY29uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzE4cHgnLFxuICBoZWlnaHQ6ICcxOHB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMThweCcsXG4gICAgaGVpZ2h0OiAnMThweCcsXG4gIH1cbn0pO1xuXG5jb25zdCBUaW1pbmdMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtMCBtYjE1IGYxNiBmdzkgcGZjMVwiPlRpbWluZ3M8L2gyPlxuICAgICAgPEdUaW1pbmdMaXN0VWw+XG4gICAgICB7ZGF0YS50aW1pbmdzICYmIGRhdGEudGltaW5ncy5sZW5ndGggJiYgZGF0YS50aW1pbmdzLm1hcCgoZGF5LCBpKSA9PlxuICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImFic29sdXRlIGwwIHQ0IGJsb2NrXCI+PER1cmF0aW9uSWNvbiAvPjwvSWNvbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgbTAgZnc5IHBiOFwiPntkYXkuc3RhcnREYXl9IHRvIHtkYXkuZW5kRGF5fTwvcD5cbiAgICAgICAgICB7ZGF5LnRpbWluZy5tYXAoKHRpbWUsIGkpID0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgbTBcIiBrZXk9e2l9Pnt0aW1lLnN0YXJ0VGltZX0gLSB7dGltZS5jbG9zZVRpbWV9PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGk+XG4gICAgICApfVxuICAgICAgPC9HVGltaW5nTGlzdFVsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVGltaW5nTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltaW5nTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSAnLi9PdmVydmlldyc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICcuL0hlYWRpbmcnO1xuXG5jb25zdCBTaG93TW9yZUNvbnRhaW5lciA9IGdsYW1vcm91cy5kaXYoe1xuICBtYXJnaW5Ub3A6ICctOHB4Jyxcbn0pO1xuXG5jb25zdCBHdWlkZSA9ICh7IGd1aWRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHNiY3cgcDE1XCI+XG4gICAgICA8SGVhZGluZyB7Li4uZ3VpZGV9IHR5cGU9XCJtYWluLWhlYWRpbmdcIi8+XG4gICAgICA8T3ZlcnZpZXcgey4uLmd1aWRlfS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5HdWlkZS5wcm9wVHlwZXMgPSB7XG4gIGd1aWRlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuR3VpZGUuZGVmYXVsdFByb3BzID0ge1xuICBndWlkZToge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEd1aWRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IFN1YkhlYWRpbmcgPSBnbGFtb3JvdXMucCh7XG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgY29sb3I6ICcjY2JjYmNiJyxcbiAgbWFyZ2luOiAnNHB4IDAgMCAwJyxcbn0pO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgZGF0YSwgdGl0bGUsIGhlYWRpbmcsIHN0eWxlSGVhZGluZywgc3R5bGVTdWJIZWFkaW5nLCB0eXBlLCBpc1ZpZXdBbGxIaWRkZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWIxNVwiPlxuICAgICAge1xuICAgICAgICB0eXBlID09PSAnbWFpbi1oZWFkaW5nJyA/XG4gICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNWaWV3QWxsSGlkZGVuID8gJ3ByMCAnIDogJ3ByNjQgJ30gZjE2IHBmYzEgZnc5IG0wYH0+e2RhdGEudGl0bGUgfHwgdGl0bGV9e2RhdGEuZm9ySGVhZGluZyA/IGAgZm9yICR7ZGF0YS5mb3JIZWFkaW5nfWAgOiBudWxsfTwvaDI+XG4gICAgICAgICAgOiA8aDIgc3R5bGU9e3N0eWxlSGVhZGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMzIGZ3YiBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgfVxuICAgICAge2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nID9cbiAgICAgICAgPFN1YkhlYWRpbmcgc3R5bGU9e3N0eWxlU3ViSGVhZGluZ30gY2xhc3NOYW1lPVwiZjE0IG10NCBmdzRcIj57ZGF0YS5oZWFkaW5nIHx8IGhlYWRpbmd9PC9TdWJIZWFkaW5nPiA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhlYWRpbmcucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZVN1YkhlYWRpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlzVmlld0FsbEhpZGRlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgdHlwZTogJycsXG4gIHRpdGxlOiAnJyxcbiAgaGVhZGluZzogJycsXG4gIHN0eWxlSGVhZGluZzoge30sXG4gIHN0eWxlU3ViSGVhZGluZzoge30sXG4gIGlzVmlld0FsbEhpZGRlbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuaW1wb3J0IFNob3dNb3JlIGZyb20gJy4vU2hvd01vcmUnO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IG92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlID0gKG92ZXJ2aWV3TW9yZVRleHQpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb3ZlcnZpZXdNb3JlVGV4dC5yZXBsYWNlKC88YnIgXFwvPnw8XFwvYnI+L2csICcnKS5yZXBsYWNlKCc8L3NwYW4+PC9wPlxcclxcbicsICcnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG92ZXJ2aWV3TW9yZVRleHQ7XG4gIH1cbn07XG5cbmNsYXNzIE92ZXJ2aWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIG92ZXJ2aWV3Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBmb290ZXJEZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjID0gZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24uc3BsaXQoJ1xcclxcbicpLmZpbHRlcihwID0+IHAubGVuZ3RoKSB8fCBbXTtcblxuICAgIGlmICghZGVzYy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZvb3RlckRlc2MgPSBmb290ZXJEZXNjcmlwdGlvbiA/IGA8YnI+JHtmb290ZXJEZXNjcmlwdGlvbn1gIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNob3dNb3JlXG4gICAgICAgIHdyYXBUZXh0PXtwYXJzZXIucGFyc2UoZGVzY1swXSl9XG4gICAgICAgIG1vcmVUZXh0PXtwYXJzZXIucGFyc2Uob3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUoZGVzYy5zbGljZSgxKS5qb2luKCdcXG4nKS5jb25jYXQoZm9vdGVyRGVzYykpKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcm93LW13XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJveFwiPlxuICAgICAgICAgIHt0aGlzLm92ZXJ2aWV3Q29udGVudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuT3ZlcnZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBmb290ZXJEZXNjcmlwdGlvbjogJycsXG4gIGRlc2NyaXB0aW9uOiAnJ1xufTtcblxuT3ZlcnZpZXcucHJvcFR5cGVzID0ge1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9vdGVyRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBHdWlkZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9HdWlkZSc7XG5pbXBvcnQgVGltaW5nTGlzdCBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NpdHlCbG9jay9UaW1pbmcvVGltaW5nTGlzdCc7XG5cbmNvbnN0IFRpbWluZ3MgPSAoeyBkYXRhLCBleGl0SW50ZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICB7XG4gICAgICAgIGRhdGEgJiYgZGF0YS5kZXNjcmlwdGlvbiA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtOCBtdDBcIj48R3VpZGUgZ3VpZGU9e2RhdGF9IC8+PC9kaXY+XG4gICAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGRhdGEgJiYgZGF0YS50aW1pbmdzICYmIGRhdGEudGltaW5ncy5sZW5ndGggP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwMTUgbTggbXQwXCI+PFRpbWluZ0xpc3QgZGF0YT17ZGF0YX0gLz48L2Rpdj5cbiAgICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAgIHtleGl0SW50ZW50fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltaW5ncztcblxuVGltaW5ncy5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZXhpdEludGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==