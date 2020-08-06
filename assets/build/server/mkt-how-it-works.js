require("source-map-support").install();
exports.ids = ["mkt-how-it-works"];
exports.modules = {

/***/ "./app-v2/modules/mkt/howItWorks/HowItWorks.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/mkt/howItWorks/HowItWorks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _howItWorksCm = _interopRequireDefault(__webpack_require__(/*! ./howItWorks.cm.scss */ "./app-v2/modules/mkt/howItWorks/howItWorks.cm.scss"));

var Icons = _interopRequireWildcard(__webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const card = {
  heading: 'How It Works',
  items: [{
    icon: 'MktSelectPackage',
    title: 'Select your package'
  }, {
    icon: 'MktQuotes',
    title: 'Get multiple free quotes'
  }, {
    icon: 'MktTravelers',
    title: 'Customize & book'
  }]
};
let HowItWorks = class HowItWorks extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "col-xs-12 p0 pt24 pb24 pl0 pr0 text-center sbcw mb2"
    }, _react.default.createElement("h2", {
      className: "f18 fw9 text-center mb24"
    }, card.heading), _react.default.createElement("div", {
      className: "col-xs-12 p0"
    }, card.items.map((item, i) => {
      const IconComponent = Icons[item.icon];
      return _react.default.createElement("div", {
        className: `col-xs-4 pl8 pr8 ${_howItWorksCm.default.worksBox}`,
        key: i
      }, _react.default.createElement("span", {
        className: "flex justifyCenter"
      }, _react.default.createElement(IconComponent, null)), _react.default.createElement("p", {
        className: "f14 fw9 pfc3"
      }, item.title));
    })));
  }

};
exports.default = HowItWorks;

/***/ }),

/***/ "./app-v2/modules/mkt/howItWorks/howItWorks.cm.scss":
/*!**********************************************************!*\
  !*** ./app-v2/modules/mkt/howItWorks/howItWorks.cm.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"worksBox": "_24rj9G7QWey1iMNX6T5mOH"
};

/***/ }),

/***/ "./app-v2/modules/mkt/howItWorks/index.js":
/*!************************************************!*\
  !*** ./app-v2/modules/mkt/howItWorks/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HowItWorks = _interopRequireDefault(__webpack_require__(/*! ./HowItWorks */ "./app-v2/modules/mkt/howItWorks/HowItWorks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = _HowItWorks.default;
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvaG93SXRXb3Jrcy9Ib3dJdFdvcmtzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21rdC9ob3dJdFdvcmtzL2hvd0l0V29ya3MuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvaG93SXRXb3Jrcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjYXJkIiwiaGVhZGluZyIsIml0ZW1zIiwiaWNvbiIsInRpdGxlIiwiSG93SXRXb3JrcyIsIkNvbXBvbmVudCIsInJlbmRlciIsIm1hcCIsIml0ZW0iLCJpIiwiSWNvbkNvbXBvbmVudCIsIkljb25zIiwic3R5bGVzIiwid29ya3NCb3giLCJjb250YWluZXIiLCJhY3Rpb25zIiwiZGVmYXVsdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7QUFJQSxNQUFNQSxPQUFPO0FBQ1hDLFdBQVMsY0FERTtBQUVYQyxTQUFPLENBQ0w7QUFDRUMsVUFBTSxrQkFEUjtBQUVFQyxXQUFPO0FBRlQsR0FESyxFQUtMO0FBQ0VELFVBQU0sV0FEUjtBQUVFQyxXQUFPO0FBRlQsR0FMSyxFQVNMO0FBQ0VELFVBQU0sY0FEUjtBQUVFQyxXQUFPO0FBRlQsR0FUSztBQUZJLENBQWI7SUFrQnFCQyxVLEdBQU4sTUFBTUEsVUFBTixTQUF5QkMsZ0JBQXpCLENBQW1DO0FBRWhEQyxXQUFTO0FBQ1AsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFJLGlCQUFVO0FBQWQsT0FBMENQLEtBQUtDLE9BQS9DLENBREYsRUFFRTtBQUFLLGlCQUFVO0FBQWYsT0FFSUQsS0FBS0UsS0FBTCxDQUFXTSxHQUFYLENBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQWE7QUFDMUIsWUFBTUMsZ0JBQWdCQyxNQUFNSCxLQUFLTixJQUFYLENBQXRCO0FBQ0EsYUFDRTtBQUFLLG1CQUFZLG9CQUFtQlUsc0JBQU9DLFFBQVMsRUFBcEQ7QUFBdUQsYUFBS0o7QUFBNUQsU0FDRTtBQUFNLG1CQUFVO0FBQWhCLFNBQXFDLDZCQUFDLGFBQUQsT0FBckMsQ0FERixFQUVFO0FBQUcsbUJBQVU7QUFBYixTQUE2QkQsS0FBS0wsS0FBbEMsQ0FGRixDQURGO0FBTUQsS0FSRCxDQUZKLENBRkYsQ0FERjtBQWtCRDs7QUFyQitDLEM7Ozs7Ozs7Ozs7OztBQzFCbEQ7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7OztBQUVBLE1BQU1XLFlBQVlWLG1CQUFsQjtlQUVlO0FBQ2JVLFdBRGE7QUFFYkMsV0FBUyxFQUZJO0FBR2JDLGlCQUFlO0FBSEYsQyIsImZpbGUiOiJta3QtaG93LWl0LXdvcmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvd0l0V29ya3MuY20uc2Nzcyc7XG5cbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuXG5cbmNvbnN0IGNhcmQgPSB7XG4gIGhlYWRpbmc6ICdIb3cgSXQgV29ya3MnLFxuICBpdGVtczogW1xuICAgIHtcbiAgICAgIGljb246ICdNa3RTZWxlY3RQYWNrYWdlJyxcbiAgICAgIHRpdGxlOiAnU2VsZWN0IHlvdXIgcGFja2FnZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnTWt0UXVvdGVzJyxcbiAgICAgIHRpdGxlOiAnR2V0IG11bHRpcGxlIGZyZWUgcXVvdGVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdNa3RUcmF2ZWxlcnMnLFxuICAgICAgdGl0bGU6ICdDdXN0b21pemUgJiBib29rJyxcbiAgICB9LFxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3dJdFdvcmtzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwIHB0MjQgcGIyNCBwbDAgcHIwIHRleHQtY2VudGVyIHNiY3cgbWIyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTggZnc5IHRleHQtY2VudGVyIG1iMjRcIj57Y2FyZC5oZWFkaW5nfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FyZC5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IEljb25zW2l0ZW0uaWNvbl07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wteHMtNCBwbDggcHI4ICR7c3R5bGVzLndvcmtzQm94fWB9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnlDZW50ZXJcIj48SWNvbkNvbXBvbmVudCAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmdzkgcGZjM1wiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndvcmtzQm94XCI6IFwiXzI0cmo5RzdRV2V5MWlNTlg2VDVtT0hcIlxufTsiLCJpbXBvcnQgSG93SXRXb3JrcyBmcm9tICcuL0hvd0l0V29ya3MnO1xuXG5jb25zdCBjb250YWluZXIgPSBIb3dJdFdvcmtzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge30sXG4gIGRlZmF1bHRBY3Rpb246IG51bGwsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==