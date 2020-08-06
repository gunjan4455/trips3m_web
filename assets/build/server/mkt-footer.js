require("source-map-support").install();
exports.ids = ["mkt-footer"];
exports.modules = {

/***/ "./app-v2/modules/mkt/footer/Footer.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/mkt/footer/Footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _footerCm = _interopRequireDefault(__webpack_require__(/*! ./footer.cm.scss */ "./app-v2/modules/mkt/footer/footer.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Footer = class Footer extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement("div", {
      className: `sfcw p15 pbc3 col-xs-12 pl8 pr8" ${_footerCm.default.mktFooter}`
    }, _react.default.createElement("p", {
      className: "f14 fwb mb15"
    }, "Connect with us on :"), _react.default.createElement("div", {
      className: `col-xs-12 relative p0 mb8 ${_footerCm.default.textWithIconDiv}`
    }, _react.default.createElement("span", {
      className: `${_footerCm.default.genSprite} ${_footerCm.default.callIcon} ${_footerCm.default.textIcon}`
    }), _react.default.createElement("p", {
      className: `f14 fw9 ml24 ${_footerCm.default.textContent}`
    }, "1800-125-5555")), _react.default.createElement("div", {
      className: `col-xs-12 p0 relative mb8 ${_footerCm.default.textWithIconDiv}`
    }, _react.default.createElement("span", {
      className: `${_footerCm.default.genSprite} ${_footerCm.default.mailIcon} ${_footerCm.default.textIcon}`
    }), _react.default.createElement("p", {
      className: `f14 fw9 ml24 ${_footerCm.default.textContent}`
    }, "customercare@traveltriangle.com")), _react.default.createElement("div", {
      className: `mt15 mb15 relative col-xs-12 p0 ${_footerCm.default.paymentGateway}`
    }, _react.default.createElement("img", {
      "data-defer-load": "true",
      "data-src": "https://img.traveltriangle.com/public-product/homepage_illustrations/PaymentOptions.png?tr=w-318,h-34",
      alt: "Payment Options",
      className: "lazyloaded",
      src: "https://img.traveltriangle.com/public-product/homepage_illustrations/PaymentOptions.png?tr=w-318,h-34"
    })), _react.default.createElement("p", {
      className: "f14 text-center iblock wfull"
    }, "\xA9 TravelTriangle.com 2020. All rights reserved.")));
  }

};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/mkt/footer/footer.cm.scss":
/*!**************************************************!*\
  !*** ./app-v2/modules/mkt/footer/footer.cm.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"genSprite": "_2jzze_1U8lXhMnByYwr4hi",
	"textWithIconDiv": "_5Gm7WfK9fUcqXi82rxK8X",
	"textIcon": "_1XA_D_HNgCZmywyqo-tHaK",
	"textWitIconDiv": "_1t6TZT9jbtlYYMZelqp4KP",
	"textContent": "_35nvcuYVLxFMor3lCBNNvI",
	"callIcon": "GNHoyiank1zIoMQsb1uzb",
	"mailIcon": "_3mYFttA1DJgIDjqoAaKi9a",
	"paymentGateway": "_266xhrBpUgeOJHK3nGz2Jn"
};

/***/ }),

/***/ "./app-v2/modules/mkt/footer/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/mkt/footer/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Footer = _interopRequireDefault(__webpack_require__(/*! ./Footer */ "./app-v2/modules/mkt/footer/Footer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = _Footer.default;
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvZm9vdGVyL2Zvb3Rlci5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21rdC9mb290ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiRm9vdGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwic3R5bGVzIiwibWt0Rm9vdGVyIiwidGV4dFdpdGhJY29uRGl2IiwiZ2VuU3ByaXRlIiwiY2FsbEljb24iLCJ0ZXh0SWNvbiIsInRleHRDb250ZW50IiwibWFpbEljb24iLCJwYXltZW50R2F0ZXdheSIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJkZWZhdWx0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztJQUVNQSxNLEdBQU4sTUFBTUEsTUFBTixTQUFxQkMsZ0JBQXJCLENBQStCO0FBQzdCQyxXQUFTO0FBQ1AsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFZLG9DQUFtQ0Msa0JBQU9DLFNBQVU7QUFBckUsT0FDRTtBQUFHLGlCQUFVO0FBQWIsOEJBREYsRUFFRTtBQUFLLGlCQUFZLDZCQUE0QkQsa0JBQU9FLGVBQWdCO0FBQXBFLE9BQ0U7QUFBTSxpQkFBWSxHQUFFRixrQkFBT0csU0FBVSxJQUFHSCxrQkFBT0ksUUFBUyxJQUFHSixrQkFBT0ssUUFBUztBQUEzRSxNQURGLEVBRUU7QUFBRyxpQkFBWSxnQkFBZUwsa0JBQU9NLFdBQVk7QUFBakQsdUJBRkYsQ0FGRixFQU1FO0FBQUssaUJBQVksNkJBQTRCTixrQkFBT0UsZUFBZ0I7QUFBcEUsT0FDRTtBQUFNLGlCQUFZLEdBQUVGLGtCQUFPRyxTQUFVLElBQUdILGtCQUFPTyxRQUFTLElBQUdQLGtCQUFPSyxRQUFTO0FBQTNFLE1BREYsRUFFRTtBQUFHLGlCQUFZLGdCQUFlTCxrQkFBT00sV0FBWTtBQUFqRCx5Q0FGRixDQU5GLEVBVUU7QUFBSyxpQkFBWSxtQ0FBa0NOLGtCQUFPUSxjQUFlO0FBQXpFLE9BQ0U7QUFBSyx5QkFBZ0IsTUFBckI7QUFDSyxrQkFBUyx1R0FEZDtBQUVLLFdBQUksaUJBRlQ7QUFFMkIsaUJBQVUsWUFGckM7QUFHSyxXQUFJO0FBSFQsTUFERixDQVZGLEVBZ0JFO0FBQUcsaUJBQVU7QUFBYiw0REFoQkYsQ0FERixDQURGO0FBc0JEOztBQXhCNEIsQztlQTJCaEJYLE07Ozs7Ozs7Ozs7OztBQzlCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7QUFFQSxNQUFNWSxZQUFZWixlQUFsQjtlQUVlO0FBQ2JZLFdBRGE7QUFFYkMsV0FBUyxFQUZJO0FBR2JDLGlCQUFlO0FBSEYsQyIsImZpbGUiOiJta3QtZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIuY20uc2Nzcyc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZmN3IHAxNSBwYmMzIGNvbC14cy0xMiBwbDggcHI4XCIgJHtzdHlsZXMubWt0Rm9vdGVyfWB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmd2IgbWIxNVwiPkNvbm5lY3Qgd2l0aCB1cyBvbiA6PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLXhzLTEyIHJlbGF0aXZlIHAwIG1iOCAke3N0eWxlcy50ZXh0V2l0aEljb25EaXZ9YH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5nZW5TcHJpdGV9ICR7c3R5bGVzLmNhbGxJY29ufSAke3N0eWxlcy50ZXh0SWNvbn1gfSAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZjE0IGZ3OSBtbDI0ICR7c3R5bGVzLnRleHRDb250ZW50fWB9PjE4MDAtMTI1LTU1NTU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wteHMtMTIgcDAgcmVsYXRpdmUgbWI4ICR7c3R5bGVzLnRleHRXaXRoSWNvbkRpdn1gfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLmdlblNwcml0ZX0gJHtzdHlsZXMubWFpbEljb259ICR7c3R5bGVzLnRleHRJY29ufWB9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BmMTQgZnc5IG1sMjQgJHtzdHlsZXMudGV4dENvbnRlbnR9YH0+Y3VzdG9tZXJjYXJlQHRyYXZlbHRyaWFuZ2xlLmNvbTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG10MTUgbWIxNSByZWxhdGl2ZSBjb2wteHMtMTIgcDAgJHtzdHlsZXMucGF5bWVudEdhdGV3YXl9YH0+XG4gICAgICAgICAgICA8aW1nIGRhdGEtZGVmZXItbG9hZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICBkYXRhLXNyYz1cImh0dHBzOi8vaW1nLnRyYXZlbHRyaWFuZ2xlLmNvbS9wdWJsaWMtcHJvZHVjdC9ob21lcGFnZV9pbGx1c3RyYXRpb25zL1BheW1lbnRPcHRpb25zLnBuZz90cj13LTMxOCxoLTM0XCJcbiAgICAgICAgICAgICAgICAgYWx0PVwiUGF5bWVudCBPcHRpb25zXCIgY2xhc3NOYW1lPVwibGF6eWxvYWRlZFwiXG4gICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1nLnRyYXZlbHRyaWFuZ2xlLmNvbS9wdWJsaWMtcHJvZHVjdC9ob21lcGFnZV9pbGx1c3RyYXRpb25zL1BheW1lbnRPcHRpb25zLnBuZz90cj13LTMxOCxoLTM0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgdGV4dC1jZW50ZXIgaWJsb2NrIHdmdWxsXCI+JmNvcHk7IFRyYXZlbFRyaWFuZ2xlLmNvbSAyMDIwLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdlblNwcml0ZVwiOiBcIl8yanp6ZV8xVThsWGhNbkJ5WXdyNGhpXCIsXG5cdFwidGV4dFdpdGhJY29uRGl2XCI6IFwiXzVHbTdXZks5ZlVjcVhpODJyeEs4WFwiLFxuXHRcInRleHRJY29uXCI6IFwiXzFYQV9EX0hOZ0NabXl3eXFvLXRIYUtcIixcblx0XCJ0ZXh0V2l0SWNvbkRpdlwiOiBcIl8xdDZUWlQ5amJ0bFlZTVplbHFwNEtQXCIsXG5cdFwidGV4dENvbnRlbnRcIjogXCJfMzVudmN1WVZMeEZNb3IzbENCTk52SVwiLFxuXHRcImNhbGxJY29uXCI6IFwiR05Ib3lpYW5rMXpJb01Rc2IxdXpiXCIsXG5cdFwibWFpbEljb25cIjogXCJfM21ZRnR0QTFESmdJRGpxb0FhS2k5YVwiLFxuXHRcInBheW1lbnRHYXRld2F5XCI6IFwiXzI2NnhockJwVWdlT0pISzNuR3oySm5cIlxufTsiLCJpbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuY29uc3QgY29udGFpbmVyID0gRm9vdGVyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge30sXG4gIGRlZmF1bHRBY3Rpb246IG51bGwsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==