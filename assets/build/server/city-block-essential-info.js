require("source-map-support").install();
exports.ids = ["city-block-essential-info"];
exports.modules = {

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

/***/ "./app-v2/screens/cityBlock/essentialInfo/EssentialInfo.js":
/*!*****************************************************************!*\
  !*** ./app-v2/screens/cityBlock/essentialInfo/EssentialInfo.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Overview = _interopRequireDefault(__webpack_require__(/*! modules/shared/Overview */ "./app-v2/modules/shared/Overview.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const EssentialInfo = ({
  data,
  params,
  location,
  exitIntent
}) => _react.default.createElement("div", {
  className: "m8 mt0 sbcw p15"
}, _react.default.createElement(_Heading.default, _extends({}, data, {
  type: "main-heading"
})), _react.default.createElement(_Overview.default, data), exitIntent);

var _default = EssentialInfo;
exports.default = _default;
EssentialInfo.propTypes = {
  data: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2NpdHlCbG9jay9lc3NlbnRpYWxJbmZvL0Vzc2VudGlhbEluZm8uanMiXSwibmFtZXMiOlsiU3ViSGVhZGluZyIsImdsYW1vcm91cyIsInAiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsIm1hcmdpbiIsIkhlYWRpbmciLCJkYXRhIiwidGl0bGUiLCJoZWFkaW5nIiwic3R5bGVIZWFkaW5nIiwic3R5bGVTdWJIZWFkaW5nIiwidHlwZSIsImlzVmlld0FsbEhpZGRlbiIsImZvckhlYWRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwicGFyc2VyIiwiUGFyc2VyIiwib3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUiLCJvdmVydmlld01vcmVUZXh0IiwicmVwbGFjZSIsImVyciIsIk92ZXJ2aWV3IiwiUHVyZUNvbXBvbmVudCIsIm92ZXJ2aWV3Q29udGVudCIsImRlc2NyaXB0aW9uIiwiZm9vdGVyRGVzY3JpcHRpb24iLCJwcm9wcyIsImRlc2MiLCJzcGxpdCIsImZpbHRlciIsImxlbmd0aCIsImZvb3RlckRlc2MiLCJwYXJzZSIsInNsaWNlIiwiam9pbiIsImNvbmNhdCIsInJlbmRlciIsIkdyZWFkbW9yZUxhYmVsIiwibGFiZWwiLCJwYWRkaW5nIiwiR0Rvd25BcnJvd1NwYW4iLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJTaG93TW9yZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNoZWNrZWQiLCJkZWZhdWx0T3BlbiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJhY2tTZWdtZW50IiwiY3RhIiwidGV4dExlbmd0aCIsImlzRGVmYXVsdFNob3dNb3JlIiwiYXBwZW5kVGV4dCIsIndyYXBUZXh0IiwibW9yZVRleHQiLCJzaG93TGVzc1RleHQiLCJzaG93TW9yZVRleHQiLCJvbmVPZlR5cGUiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiRXNzZW50aWFsSW5mbyIsInBhcmFtcyIsImxvY2F0aW9uIiwiZXhpdEludGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsYUFBYUMsbUJBQVVDLENBQVYsQ0FBWTtBQUM3QkMsWUFBVSxNQURtQjtBQUU3QkMsY0FBWSxNQUZpQjtBQUc3QkMsU0FBTyxTQUhzQjtBQUk3QkMsVUFBUTtBQUpxQixDQUFaLENBQW5COztBQU9BLE1BQU1DLFVBQVUsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLE9BQVI7QUFBZUMsU0FBZjtBQUF3QkMsY0FBeEI7QUFBc0NDLGlCQUF0QztBQUF1REMsTUFBdkQ7QUFBNkRDO0FBQTdELENBQUQsS0FBb0Y7QUFDbEcsU0FDRTtBQUFLLGVBQVU7QUFBZixLQUVJRCxTQUFTLGNBQVQsR0FDRTtBQUFJLFdBQU9GLFlBQVg7QUFDSSxlQUFZLEdBQUVHLGtCQUFrQixNQUFsQixHQUEyQixPQUFRO0FBRHJELEtBQ3lFTixLQUFLQyxLQUFMLElBQWNBLEtBRHZGLEVBQzhGRCxLQUFLTyxVQUFMLEdBQW1CLFFBQU9QLEtBQUtPLFVBQVcsRUFBMUMsR0FBOEMsSUFENUksQ0FERixHQUdJO0FBQUksV0FBT0osWUFBWDtBQUNJLGVBQVksR0FBRUcsa0JBQWtCLE1BQWxCLEdBQTJCLE9BQVE7QUFEckQsS0FDeUVOLEtBQUtDLEtBQUwsSUFBY0EsS0FE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QVYsQ0FBaUIyRDtBQUpMLENBQTFCLEMiLCJmaWxlIjoiY2l0eS1ibG9jay1lc3NlbnRpYWwtaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBTdWJIZWFkaW5nID0gZ2xhbW9yb3VzLnAoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gIGNvbG9yOiAnI2NiY2JjYicsXG4gIG1hcmdpbjogJzRweCAwIDAgMCcsXG59KTtcblxuY29uc3QgSGVhZGluZyA9ICh7IGRhdGEsIHRpdGxlLCBoZWFkaW5nLCBzdHlsZUhlYWRpbmcsIHN0eWxlU3ViSGVhZGluZywgdHlwZSwgaXNWaWV3QWxsSGlkZGVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iMTVcIj5cbiAgICAgIHtcbiAgICAgICAgdHlwZSA9PT0gJ21haW4taGVhZGluZycgP1xuICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVIZWFkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMxIGZ3OSBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgICAgIDogPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1ZpZXdBbGxIaWRkZW4gPyAncHIwICcgOiAncHI2NCAnfSBmMTYgcGZjMyBmd2IgbTBgfT57ZGF0YS50aXRsZSB8fCB0aXRsZX17ZGF0YS5mb3JIZWFkaW5nID8gYCBmb3IgJHtkYXRhLmZvckhlYWRpbmd9YCA6IG51bGx9PC9oMj5cbiAgICAgIH1cbiAgICAgIHtkYXRhLmhlYWRpbmcgfHwgaGVhZGluZyA/XG4gICAgICAgIDxTdWJIZWFkaW5nIHN0eWxlPXtzdHlsZVN1YkhlYWRpbmd9IGNsYXNzTmFtZT1cImYxNCBtdDQgZnc0XCI+e2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nfTwvU3ViSGVhZGluZz4gOlxuICAgICAgICBudWxsXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlSGVhZGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgc3R5bGVTdWJIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc1ZpZXdBbGxIaWRkZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIHR5cGU6ICcnLFxuICB0aXRsZTogJycsXG4gIGhlYWRpbmc6ICcnLFxuICBzdHlsZUhlYWRpbmc6IHt9LFxuICBzdHlsZVN1YkhlYWRpbmc6IHt9LFxuICBpc1ZpZXdBbGxIaWRkZW46IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBTaG93TW9yZSBmcm9tICcuL1Nob3dNb3JlJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSA9IChvdmVydmlld01vcmVUZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG92ZXJ2aWV3TW9yZVRleHQucmVwbGFjZSgvPGJyIFxcLz58PFxcL2JyPi9nLCAnJykucmVwbGFjZSgnPC9zcGFuPjwvcD5cXHJcXG4nLCAnJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBvdmVydmlld01vcmVUZXh0O1xuICB9XG59O1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBvdmVydmlld0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgZm9vdGVyRGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLnNwbGl0KCdcXHJcXG4nKS5maWx0ZXIocCA9PiBwLmxlbmd0aCkgfHwgW107XG5cbiAgICBpZiAoIWRlc2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmb290ZXJEZXNjID0gZm9vdGVyRGVzY3JpcHRpb24gPyBgPGJyPiR7Zm9vdGVyRGVzY3JpcHRpb259YCA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG93TW9yZVxuICAgICAgICB3cmFwVGV4dD17cGFyc2VyLnBhcnNlKGRlc2NbMF0pfVxuICAgICAgICBtb3JlVGV4dD17cGFyc2VyLnBhcnNlKG92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlKGRlc2Muc2xpY2UoMSkuam9pbignXFxuJykuY29uY2F0KGZvb3RlckRlc2MpKSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHJvdy1td1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbW9yZS1ib3hcIj5cbiAgICAgICAgICB7dGhpcy5vdmVydmlld0NvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk92ZXJ2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9vdGVyRGVzY3JpcHRpb246ICcnLFxuICBkZXNjcmlwdGlvbjogJydcbn07XG5cbk92ZXJ2aWV3LnByb3BUeXBlcyA9IHtcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvb3RlckRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IHsgQmx1ZURvd25BcnJvdyB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHcmVhZG1vcmVMYWJlbCA9IGdsYW1vcm91cy5sYWJlbCh7XG4gICcmIGJ1dHRvbi5yZWFkLW1vcmUtYnV0dG9uJzoge1xuICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gIH0sXG59KTtcblxuY29uc3QgR0Rvd25BcnJvd1NwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMTBweCcsXG4gIGhlaWdodDogJzZweCcsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzZweCcsXG4gICAgdG9wOiAnMXB4J1xuICB9XG59KTtcblxuY2xhc3MgU2hvd01vcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogcHJvcHMuZGVmYXVsdE9wZW5cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHsgY3RhOiAnUmVhZCBNb3JlJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0TGVuZ3RoID0gMTk1O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHRleHQtbGVmdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXN0YXRlXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBpZD1cInBvc3QtMVwiIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2ByZWFkLW1vcmUtd3JhcCAke3RoaXMucHJvcHMuaXNEZWZhdWx0U2hvd01vcmUgPyAncC1sYXN0LW5vLW1hcmdpbiBwZmMzIGYxNHAgZHluYW1pY1RleHRJbmhlcml0JyA6ICcnfWB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSBmb3IgdHJ1bmNhdGUgdGhlIHN0cmluZ1xuICAgICAgICAgICAgIXRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLmFwcGVuZFRleHQgJiYgdGhpcy5wcm9wcy53cmFwVGV4dC5sZW5ndGggPj0gdGV4dExlbmd0aFxuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMud3JhcFRleHQgKyB0aGlzLnByb3BzLmFwcGVuZFRleHRcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLndyYXBUZXh0XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10YXJnZXRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vcmVUZXh0fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1vcmVUZXh0Lmxlbmd0aCA+IDAgfHwgIV9pc0VtcHR5KHRoaXMucHJvcHMubW9yZVRleHQpID9cbiAgICAgICAgICAgIDxHcmVhZG1vcmVMYWJlbCBodG1sRm9yPVwicG9zdC0xXCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRyaWdnZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYnV0dG9uIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIHJlbGF0aXZlIGYxMiBmdzdcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmMTQgZnc3XCI+XG4gICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tlZCkgPyB0aGlzLnByb3BzLnNob3dMZXNzVGV4dCA6IHRoaXMucHJvcHMuc2hvd01vcmVUZXh0fVxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEdEb3duQXJyb3dTcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1sOCByZWxhdGl2ZSBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+PEJsdWVEb3duQXJyb3cgLz48L0dEb3duQXJyb3dTcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JlYWRtb3JlTGFiZWw+XG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2hvd01vcmUucHJvcFR5cGVzID0ge1xuICB3cmFwVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKS5pc1JlcXVpcmVkLFxuICBtb3JlVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgc2hvd01vcmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93TGVzc1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IFByb3BUeXBlcy5ib29sLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBhcHBlbmRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG5cbn07XG5cblNob3dNb3JlLmRlZmF1bHRQcm9wcyA9IHtcbiAgd3JhcFRleHQ6ICcnLFxuICBtb3JlVGV4dDogJycsXG4gIHNob3dNb3JlVGV4dDogJ1JlYWQgTW9yZScsXG4gIHNob3dMZXNzVGV4dDogJ1JlYWQgTGVzcycsXG4gIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IHRydWUsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93TW9yZTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvT3ZlcnZpZXcnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvSGVhZGluZyc7XG5cbmNvbnN0IEVzc2VudGlhbEluZm8gPSAoeyBkYXRhLCBwYXJhbXMsIGxvY2F0aW9uLCBleGl0SW50ZW50IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtOCBtdDAgc2JjdyBwMTVcIj5cbiAgICA8SGVhZGluZyB7Li4uZGF0YX0gdHlwZT1cIm1haW4taGVhZGluZ1wiIC8+XG4gICAgPE92ZXJ2aWV3IHsuLi5kYXRhfSAvPlxuICAgIHtleGl0SW50ZW50fVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEVzc2VudGlhbEluZm87XG5cbkVzc2VudGlhbEluZm8ucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBleGl0SW50ZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==