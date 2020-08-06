require("source-map-support").install();
exports.ids = ["mkt-conclusion"];
exports.modules = {

/***/ "./app-v2/modules/mkt/conclusion/Conclusion.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/mkt/conclusion/Conclusion.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Conclusion = (_temp = _class = class Conclusion extends _react.Component {
  render() {
    const {
      data
    } = this.props;

    if ((0, _isEmpty2.default)(data)) {
      return null;
    }

    const {
      heading,
      content
    } = data;
    const [wrapText, moreText] = content.split('&lt;readmore&gt;');
    return _react.default.createElement("div", {
      className: "col-xs-12 p15 pt24 sbcw"
    }, _react.default.createElement("h2", {
      className: "pfc3 f18 fw9 text-center mb15"
    }, heading), _react.default.createElement(_ShowMore.default, {
      wrapText: wrapText,
      moreText: moreText
    }));
  }

}, _class.propTypes = {
  data: _propTypes.default.object
}, _class.defaultProps = {
  data: {}
}, _temp);
exports.default = Conclusion;

/***/ }),

/***/ "./app-v2/modules/mkt/conclusion/index.js":
/*!************************************************!*\
  !*** ./app-v2/modules/mkt/conclusion/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Conclusion = _interopRequireDefault(__webpack_require__(/*! ./Conclusion */ "./app-v2/modules/mkt/conclusion/Conclusion.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.conclusion
}))(_Conclusion.default);
var _default = {
  container,
  actions: {},
  defaultAction: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvY29uY2x1c2lvbi9Db25jbHVzaW9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21rdC9jb25jbHVzaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9TaG93TW9yZS5qcyJdLCJuYW1lcyI6WyJDb25jbHVzaW9uIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZGF0YSIsInByb3BzIiwiaGVhZGluZyIsImNvbnRlbnQiLCJ3cmFwVGV4dCIsIm1vcmVUZXh0Iiwic3BsaXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJjb250YWluZXIiLCJzdGF0ZSIsIm1rdCIsImNvbmNsdXNpb24iLCJhY3Rpb25zIiwiZGVmYXVsdEFjdGlvbiIsIkdyZWFkbW9yZUxhYmVsIiwiZ2xhbW9yb3VzIiwibGFiZWwiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsIkdEb3duQXJyb3dTcGFuIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwiU2hvd01vcmUiLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwiY2hlY2tlZCIsImRlZmF1bHRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmFja1NlZ21lbnQiLCJjdGEiLCJ0ZXh0TGVuZ3RoIiwiaXNEZWZhdWx0U2hvd01vcmUiLCJhcHBlbmRUZXh0IiwibGVuZ3RoIiwic2hvd0xlc3NUZXh0Iiwic2hvd01vcmVUZXh0Iiwib25lT2ZUeXBlIiwiYXJyYXkiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7SUFF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O0FBV25CcUMsZ0JBQWN0QyxtQkFBVXlDLE1BWEw7QUFZbkJKLGdCQUFjckMsbUJBQVV5QyxNQVpMO0FBYW5CbEIsZUFBYXZCLG1CQUFVMkMsSUFiSjtBQWNuQlQscUJBQW1CbEMsbUJBQVUyQyxJQWRWO0FBZW5CWixnQkFBYy9CLG1CQUFVNEMsSUFmTDtBQWdCbkJULGNBQVluQyxtQkFBVXlDO0FBaEJILENBQXJCO0FBb0JBdEIsU0FBU2pCLFlBQVQsR0FBd0I7QUFDdEJOLFlBQVUsRUFEWTtBQUV0QkMsWUFBVSxFQUZZO0FBR3RCeUMsZ0JBQWMsV0FIUTtBQUl0QkQsZ0JBQWMsV0FKUTtBQUt0QmQsZUFBYSxLQUxTO0FBTXRCVyxxQkFBbUIsSUFORztBQU90QkgsZ0JBQWMsTUFBTSxDQUNuQjtBQVJxQixDQUF4QjtlQVdlWixRIiwiZmlsZSI6Im1rdC1jb25jbHVzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnYXBwLXYyL21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uY2x1c2lvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHt9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChfaXNFbXB0eShkYXRhKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBoZWFkaW5nLCBjb250ZW50IH0gPSBkYXRhO1xuXG4gICAgY29uc3QgW3dyYXBUZXh0LCBtb3JlVGV4dF0gPSBjb250ZW50LnNwbGl0KCcmbHQ7cmVhZG1vcmUmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDE1IHB0MjQgc2Jjd1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGZjMyBmMTggZnc5IHRleHQtY2VudGVyIG1iMTVcIj57aGVhZGluZ308L2gyPlxuICAgICAgICA8U2hvd01vcmUgd3JhcFRleHQ9e3dyYXBUZXh0fSBtb3JlVGV4dD17bW9yZVRleHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQ29uY2x1c2lvbiBmcm9tICcuL0NvbmNsdXNpb24nO1xuXG5jb25zdCBjb250YWluZXIgPSBjb25uZWN0KFxuICBzdGF0ZSA9PiAoeyBkYXRhOiBzdGF0ZS5ta3QuZGF0YS5jb25jbHVzaW9uLCB9KVxuKShDb25jbHVzaW9uKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIGFjdGlvbnM6IHt9LFxuICBkZWZhdWx0QWN0aW9uOiBudWxsLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IHsgQmx1ZURvd25BcnJvdyB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHcmVhZG1vcmVMYWJlbCA9IGdsYW1vcm91cy5sYWJlbCh7XG4gICcmIGJ1dHRvbi5yZWFkLW1vcmUtYnV0dG9uJzoge1xuICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gIH0sXG59KTtcblxuY29uc3QgR0Rvd25BcnJvd1NwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMTBweCcsXG4gIGhlaWdodDogJzZweCcsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzZweCcsXG4gICAgdG9wOiAnMXB4J1xuICB9XG59KTtcblxuY2xhc3MgU2hvd01vcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogcHJvcHMuZGVmYXVsdE9wZW5cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHsgY3RhOiAnUmVhZCBNb3JlJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0TGVuZ3RoID0gMTk1O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHRleHQtbGVmdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXN0YXRlXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBpZD1cInBvc3QtMVwiIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2ByZWFkLW1vcmUtd3JhcCAke3RoaXMucHJvcHMuaXNEZWZhdWx0U2hvd01vcmUgPyAncC1sYXN0LW5vLW1hcmdpbiBwZmMzIGYxNHAgZHluYW1pY1RleHRJbmhlcml0JyA6ICcnfWB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSBmb3IgdHJ1bmNhdGUgdGhlIHN0cmluZ1xuICAgICAgICAgICAgIXRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLmFwcGVuZFRleHQgJiYgdGhpcy5wcm9wcy53cmFwVGV4dC5sZW5ndGggPj0gdGV4dExlbmd0aFxuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMud3JhcFRleHQgKyB0aGlzLnByb3BzLmFwcGVuZFRleHRcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLndyYXBUZXh0XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10YXJnZXRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vcmVUZXh0fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1vcmVUZXh0Lmxlbmd0aCA+IDAgfHwgIV9pc0VtcHR5KHRoaXMucHJvcHMubW9yZVRleHQpID9cbiAgICAgICAgICAgIDxHcmVhZG1vcmVMYWJlbCBodG1sRm9yPVwicG9zdC0xXCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRyaWdnZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYnV0dG9uIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIHJlbGF0aXZlIGYxMiBmdzdcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmMTQgZnc3XCI+XG4gICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tlZCkgPyB0aGlzLnByb3BzLnNob3dMZXNzVGV4dCA6IHRoaXMucHJvcHMuc2hvd01vcmVUZXh0fVxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEdEb3duQXJyb3dTcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1sOCByZWxhdGl2ZSBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+PEJsdWVEb3duQXJyb3cgLz48L0dEb3duQXJyb3dTcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JlYWRtb3JlTGFiZWw+XG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2hvd01vcmUucHJvcFR5cGVzID0ge1xuICB3cmFwVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKS5pc1JlcXVpcmVkLFxuICBtb3JlVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgc2hvd01vcmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93TGVzc1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IFByb3BUeXBlcy5ib29sLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBhcHBlbmRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG5cbn07XG5cblNob3dNb3JlLmRlZmF1bHRQcm9wcyA9IHtcbiAgd3JhcFRleHQ6ICcnLFxuICBtb3JlVGV4dDogJycsXG4gIHNob3dNb3JlVGV4dDogJ1JlYWQgTW9yZScsXG4gIHNob3dMZXNzVGV4dDogJ1JlYWQgTGVzcycsXG4gIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IHRydWUsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93TW9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=