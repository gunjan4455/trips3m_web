require("source-map-support").install();
exports.ids = ["mkt-faqs"];
exports.modules = {

/***/ "./app-v2/modules/mkt/faq/Faq.js":
/*!***************************************!*\
  !*** ./app-v2/modules/mkt/faq/Faq.js ***!
  \***************************************/
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

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _faqCm = _interopRequireDefault(__webpack_require__(/*! ./faq.cm.scss */ "./app-v2/modules/mkt/faq/faq.cm.scss"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const htmlToReactParser = new _htmlToReact.Parser();
let Faq = (_temp = _class = class Faq extends _react.Component {
  render() {
    const {
      data
    } = this.props;

    if ((0, _isEmpty2.default)(data)) {
      return null;
    }

    const {
      heading,
      items
    } = data;
    return _react.default.createElement("div", {
      className: "col-xs-12 p0 sbcw pt24 row row-"
    }, _react.default.createElement("h2", {
      className: "pfc3 f18 fw9 text-center mb4"
    }, heading), items.map((item, i) => {
      return _react.default.createElement("div", {
        className: `bb ${_faqCm.default.dropdown} ${_faqCm.default}`,
        key: i
      }, _react.default.createElement("input", {
        type: "checkbox",
        defaultChecked: i === 0,
        id: `drop_${i}`,
        className: _faqCm.default.check
      }), _react.default.createElement("label", {
        className: "f14 fw9 pfc3 p15 pl48 pr24 block relative",
        htmlFor: `drop_${i}`
      }, _react.default.createElement("span", {
        className: `absolute l15 absolute-center-v iblock ${_faqCm.default.search}`
      }), item.question, _react.default.createElement("span", {
        className: _faqCm.default.arrow
      })), _react.default.createElement("p", {
        className: `row row- pl24 ${_faqCm.default.sliderContent}`
      }, htmlToReactParser.parse(item.answer)));
    }));
  }

}, _class.propTypes = {
  data: _propTypes.default.object
}, _class.defaultProps = {
  data: {}
}, _temp);
exports.default = Faq;

/***/ }),

/***/ "./app-v2/modules/mkt/faq/faq.cm.scss":
/*!********************************************!*\
  !*** ./app-v2/modules/mkt/faq/faq.cm.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"dropdown": "_24ycQSbd8ZeiJ-7j_BvXc",
	"check": "_13ovdy1iep9dWbd_YklhBC",
	"sliderContent": "_15GyO7WbR_gVFKKgQ3J_O8",
	"arrow": "_14lzl1Q2Q0TVR0KED4dVt-",
	"search": "_1AjbG3Y7m1t7yjLi9d1pEW"
};

/***/ }),

/***/ "./app-v2/modules/mkt/faq/index.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/mkt/faq/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Faq = _interopRequireDefault(__webpack_require__(/*! ./Faq */ "./app-v2/modules/mkt/faq/Faq.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.faqs
}))(_Faq.default);
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvZmFxL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvZmFxL2ZhcS5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21rdC9mYXEvaW5kZXguanMiXSwibmFtZXMiOlsiaHRtbFRvUmVhY3RQYXJzZXIiLCJQYXJzZXIiLCJGYXEiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJkYXRhIiwicHJvcHMiLCJoZWFkaW5nIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaSIsInN0eWxlcyIsImRyb3Bkb3duIiwiY2hlY2siLCJzZWFyY2giLCJxdWVzdGlvbiIsImFycm93Iiwic2xpZGVyQ29udGVudCIsInBhcnNlIiwiYW5zd2VyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiY29udGFpbmVyIiwic3RhdGUiLCJta3QiLCJmYXFzIiwiYWN0aW9ucyIsImRlZmF1bHRBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNQSxvQkFBb0IsSUFBSUMsbUJBQUosRUFBMUI7SUFFcUJDLEcscUJBQU4sTUFBTUEsR0FBTixTQUFrQkMsZ0JBQWxCLENBQTRCO0FBU3pDQyxXQUFTO0FBQ1AsVUFBTTtBQUFFQztBQUFGLFFBQVcsS0FBS0MsS0FBdEI7O0FBRUEsUUFBSSx1QkFBU0QsSUFBVCxDQUFKLEVBQW9CO0FBQ2xCLGFBQU8sSUFBUDtBQUNEOztBQUVELFVBQU07QUFBRUUsYUFBRjtBQUFXQztBQUFYLFFBQXFCSCxJQUEzQjtBQUVBLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSSxpQkFBVTtBQUFkLE9BQThDRSxPQUE5QyxDQURGLEVBR0lDLE1BQU1DLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU9DLENBQVAsS0FBYTtBQUNyQixhQUNFO0FBQUssbUJBQWEsTUFBS0MsZUFBT0MsUUFBUyxJQUFHRCxjQUFPLEVBQWpEO0FBQW9ELGFBQUtEO0FBQXpELFNBQ0U7QUFBTyxjQUFLLFVBQVo7QUFBdUIsd0JBQWdCQSxNQUFNLENBQTdDO0FBQWdELFlBQUssUUFBT0EsQ0FBRSxFQUE5RDtBQUFpRSxtQkFBV0MsZUFBT0U7QUFBbkYsUUFERixFQUVFO0FBQU8sbUJBQVUsMkNBQWpCO0FBQTZELGlCQUFVLFFBQU9ILENBQUU7QUFBaEYsU0FDRTtBQUFNLG1CQUFZLHlDQUF3Q0MsZUFBT0csTUFBTztBQUF4RSxRQURGLEVBRUdMLEtBQUtNLFFBRlIsRUFHRTtBQUFNLG1CQUFXSixlQUFPSztBQUF4QixRQUhGLENBRkYsRUFPRTtBQUFHLG1CQUFZLGlCQUFnQkwsZUFBT00sYUFBYztBQUFwRCxTQUF3RGxCLGtCQUFrQm1CLEtBQWxCLENBQXdCVCxLQUFLVSxNQUE3QixDQUF4RCxDQVBGLENBREY7QUFXRCxLQVpELENBSEosQ0FERjtBQW9CRDs7QUF0Q3dDLEMsU0FDbENDLFMsR0FBWTtBQUNqQmhCLFFBQU1pQixtQkFBVUM7QUFEQyxDLFNBSVpDLFksR0FBZTtBQUNwQm5CLFFBQU07QUFEYyxDOzs7Ozs7Ozs7Ozs7QUNieEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOzs7O0FBRUEsTUFBTW9CLFlBQVkseUJBQ2hCQyxVQUFVO0FBQUVyQixRQUFNcUIsTUFBTUMsR0FBTixDQUFVdEIsSUFBVixDQUFldUI7QUFBdkIsQ0FBVixDQURnQixFQUVoQjFCLFlBRmdCLENBQWxCO2VBSWU7QUFDYnVCLFdBRGE7QUFFYkksV0FBUyxFQUZJO0FBR2JDLGlCQUFlO0FBSEYsQyIsImZpbGUiOiJta3QtZmFxcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZhcS5jbS5zY3NzJztcblxuY29uc3QgaHRtbFRvUmVhY3RQYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhcSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHt9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChfaXNFbXB0eShkYXRhKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBoZWFkaW5nLCBpdGVtcyB9ID0gZGF0YTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMCBzYmN3IHB0MjQgcm93IHJvdy1cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBmYzMgZjE4IGZ3OSB0ZXh0LWNlbnRlciBtYjRcIj57aGVhZGluZ308L2gyPlxuICAgICAgICB7XG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBiYiAke3N0eWxlcy5kcm9wZG93bn0gJHtzdHlsZXN9YH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGVmYXVsdENoZWNrZWQ9e2kgPT09IDB9IGlkPXtgZHJvcF8ke2l9YH0gY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2t9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImYxNCBmdzkgcGZjMyBwMTUgcGw0OCBwcjI0IGJsb2NrIHJlbGF0aXZlXCIgaHRtbEZvcj17YGRyb3BfJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYWJzb2x1dGUgbDE1IGFic29sdXRlLWNlbnRlci12IGlibG9jayAke3N0eWxlcy5zZWFyY2h9YH0gLz5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Byb3cgcm93LSBwbDI0ICR7c3R5bGVzLnNsaWRlckNvbnRlbnR9YH0+e2h0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKGl0ZW0uYW5zd2VyKX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkcm9wZG93blwiOiBcIl8yNHljUVNiZDhaZWlKLTdqX0J2WGNcIixcblx0XCJjaGVja1wiOiBcIl8xM292ZHkxaWVwOWRXYmRfWWtsaEJDXCIsXG5cdFwic2xpZGVyQ29udGVudFwiOiBcIl8xNUd5TzdXYlJfZ1ZGS0tnUTNKX084XCIsXG5cdFwiYXJyb3dcIjogXCJfMTRsemwxUTJRMFRWUjBLRUQ0ZFZ0LVwiLFxuXHRcInNlYXJjaFwiOiBcIl8xQWpiRzNZN20xdDd5akxpOWQxcEVXXCJcbn07IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEZhcSBmcm9tICcuL0ZhcSc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7IGRhdGE6IHN0YXRlLm1rdC5kYXRhLmZhcXMsIH0pXG4pKEZhcSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7fSxcbiAgZGVmYXVsdEFjdGlvbjogbnVsbCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9