require("source-map-support").install();
exports.ids = ["mkt-section2"];
exports.modules = {

/***/ "./app-v2/modules/mkt/section2/Section2.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/mkt/section2/Section2.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Section2 = class Section2 extends _react.Component {
  render() {
    return _react.default.createElement("h1", null, "Section2");
  }

};
exports.default = Section2;

/***/ }),

/***/ "./app-v2/modules/mkt/section2/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/mkt/section2/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Section = _interopRequireDefault(__webpack_require__(/*! ./Section2 */ "./app-v2/modules/mkt/section2/Section2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.section2
}))(_Section.default);
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3Qvc2VjdGlvbjIvU2VjdGlvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvbWt0L3NlY3Rpb24yL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24yIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY29udGFpbmVyIiwic3RhdGUiLCJkYXRhIiwibWt0Iiwic2VjdGlvbjIiLCJhY3Rpb25zIiwiZGVmYXVsdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0lBRXFCQSxRLEdBQU4sTUFBTUEsUUFBTixTQUF1QkMsZ0JBQXZCLENBQWlDO0FBRTlDQyxXQUFTO0FBQ1AsV0FBTyxvREFBUDtBQUNEOztBQUo2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZoRDs7QUFFQTs7OztBQUVBLE1BQU1DLFlBQVkseUJBQ2hCQyxVQUFVO0FBQUVDLFFBQU1ELE1BQU1FLEdBQU4sQ0FBVUQsSUFBVixDQUFlRTtBQUF2QixDQUFWLENBRGdCLEVBRWhCUCxnQkFGZ0IsQ0FBbEI7ZUFJZTtBQUNiRyxXQURhO0FBRWJLLFdBQVMsRUFGSTtBQUdiQyxpQkFBZTtBQUhGLEMiLCJmaWxlIjoibWt0LXNlY3Rpb24yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbjIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPlNlY3Rpb24yPC9oMT47XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBTZWN0aW9uMiBmcm9tICcuL1NlY3Rpb24yJztcblxuY29uc3QgY29udGFpbmVyID0gY29ubmVjdChcbiAgc3RhdGUgPT4gKHsgZGF0YTogc3RhdGUubWt0LmRhdGEuc2VjdGlvbjIsIH0pXG4pKFNlY3Rpb24yKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIGFjdGlvbnM6IHt9LFxuICBkZWZhdWx0QWN0aW9uOiBudWxsLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=