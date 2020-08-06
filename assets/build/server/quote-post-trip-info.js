require("source-map-support").install();
exports.ids = ["quote-post-trip-info"];
exports.modules = {

/***/ "./app-v2/modules/quote/postTripInfo/PostTripInfo.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/quote/postTripInfo/PostTripInfo.js ***!
  \***********************************************************/
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

const GArrowIconSpan = _glamorous.default.span({
  transform: 'rotateZ(-90deg)'
});

const IconMap = {
  'View Vouchers': _react.default.createElement(_Icon.DownloadVoucherIcon, null),
  'Fill Travelers Details': _react.default.createElement(_Icon.EditPreferencesIcon, null),
  'View Attachment': _react.default.createElement(_Icon.AttachmentIcon, null)
};

const PostTripCard = ({
  text,
  url
}) => _react.default.createElement("a", {
  href: url,
  className: "f14 fw7 sfc1 m0 flex alignCenter sbcw pt8 pb8 pl15 pr15 relative"
}, _react.default.createElement("span", {
  className: "input-24 iblock mr8"
}, IconMap[text]), _react.default.createElement("span", {
  className: "flexFull"
}, text), _react.default.createElement("span", {
  className: "absolute-center-v r15"
}, _react.default.createElement(GArrowIconSpan, {
  className: "input-24 iblock p5"
}, _react.default.createElement(_Icon.BlueDownArrow, null))));

PostTripCard.propTypes = {
  text: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired
};

const PostTripInfo = ({
  showVouchersUrl,
  vouchersUrl,
  travelerDetailUrl,
  currentQuote
}) => {
  const downloadUrl = currentQuote.attachment && currentQuote.attachment.downloadUrl;
  return showVouchersUrl && vouchersUrl || travelerDetailUrl || downloadUrl ? _react.default.createElement("div", {
    className: "f14 sbcw"
  }, showVouchersUrl && vouchersUrl ? _react.default.createElement("div", {
    className: "bb"
  }, _react.default.createElement(PostTripCard, {
    text: "View Vouchers",
    url: vouchersUrl
  })) : null, travelerDetailUrl ? _react.default.createElement(PostTripCard, {
    text: "Fill Travelers Details",
    url: travelerDetailUrl
  }) : null, downloadUrl ? _react.default.createElement(PostTripCard, {
    text: "View Attachment",
    url: downloadUrl
  }) : null) : null;
};

PostTripInfo.propTypes = {
  showVouchersUrl: _propTypes.default.bool,
  vouchersUrl: _propTypes.default.string,
  travelerDetailUrl: _propTypes.default.string,
  trackSegment: _propTypes.default.func,
  currentQuote: _propTypes.default.object.isRequired
};
PostTripInfo.defaultProps = {
  showVouchersUrl: false,
  vouchersUrl: '',
  travelerDetailUrl: '',
  trackSegment: () => {}
};
var _default = PostTripInfo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/postTripInfo/index.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/quote/postTripInfo/index.js ***!
  \****************************************************/
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

var _PostTripInfo = _interopRequireDefault(__webpack_require__(/*! ./PostTripInfo */ "./app-v2/modules/quote/postTripInfo/PostTripInfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => _objectSpread({}, (0, _quoteList2.getTravellerAndVouchersUrl)((0, _quoteList2.getCurrentQuote)(state)), {
  currentQuote: (0, _quoteList2.getCurrentQuote)(state)
}))(_PostTripInfo.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9wb3N0VHJpcEluZm8vUG9zdFRyaXBJbmZvLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL3Bvc3RUcmlwSW5mby9pbmRleC5qcyJdLCJuYW1lcyI6WyJHQXJyb3dJY29uU3BhbiIsImdsYW1vcm91cyIsInNwYW4iLCJ0cmFuc2Zvcm0iLCJJY29uTWFwIiwiUG9zdFRyaXBDYXJkIiwidGV4dCIsInVybCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJQb3N0VHJpcEluZm8iLCJzaG93Vm91Y2hlcnNVcmwiLCJ2b3VjaGVyc1VybCIsInRyYXZlbGVyRGV0YWlsVXJsIiwiY3VycmVudFF1b3RlIiwiZG93bmxvYWRVcmwiLCJhdHRhY2htZW50IiwiYm9vbCIsInRyYWNrU2VnbWVudCIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJjb250YWluZXIiLCJzdGF0ZSIsIndlYnZpZXdBY3Rpb25zIiwiZmV0Y2hRdW90ZXNEYXRhIiwibG9hZENvbnN0YW50cyIsImZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIiwiZmV0Y2hEaXNjb3VudE9mZmVycyIsInN3aXRjaFF1b3RlIiwidXBkYXRlUmVxdWVzdGVkVHJpcElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxNQUFNQSxpQkFBaUJDLG1CQUFVQyxJQUFWLENBQWU7QUFDcENDLGFBQVc7QUFEeUIsQ0FBZixDQUF2Qjs7QUFJQSxNQUFNQyxVQUFVO0FBQ2QsbUJBQWlCLDZCQUFDLHlCQUFELE9BREg7QUFFZCw0QkFBMEIsNkJBQUMseUJBQUQsT0FGWjtBQUdkLHFCQUFtQiw2QkFBQyxvQkFBRDtBQUhMLENBQWhCOztBQU1BLE1BQU1DLGVBQWUsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUNuQjtBQUFHLFFBQU1BLEdBQVQ7QUFBYyxhQUFVO0FBQXhCLEdBQ0U7QUFBTSxhQUFVO0FBQWhCLEdBQXVDSCxRQUFRRSxJQUFSLENBQXZDLENBREYsRUFFRTtBQUFNLGFBQVU7QUFBaEIsR0FBNEJBLElBQTVCLENBRkYsRUFHRTtBQUFNLGFBQVU7QUFBaEIsR0FDRSw2QkFBQyxjQUFEO0FBQWdCLGFBQVU7QUFBMUIsR0FBK0MsNkJBQUMsbUJBQUQsT0FBL0MsQ0FERixDQUhGLENBREY7O0FBVUFELGFBQWFHLFNBQWIsR0FBeUI7QUFDdkJGLFFBQU1HLG1CQUFVQyxNQUFWLENBQWlCQyxVQURBO0FBRXZCSixPQUFLRSxtQkFBVUMsTUFBVixDQUFpQkM7QUFGQyxDQUF6Qjs7QUFLQSxNQUFNQyxlQUFlLENBQUM7QUFDRUMsaUJBREY7QUFDbUJDLGFBRG5CO0FBQ2dDQyxtQkFEaEM7QUFDbURDO0FBRG5ELENBQUQsS0FFTztBQUMxQixRQUFNQyxjQUFjRCxhQUFhRSxVQUFiLElBQTJCRixhQUFhRSxVQUFiLENBQXdCRCxXQUF2RTtBQUVBLFNBQVNKLG1CQUFtQkMsV0FBcEIsSUFBb0NDLGlCQUFwQyxJQUF5REUsV0FBekQsR0FDRjtBQUFLLGVBQVU7QUFBZixLQUVFSixtQkFBbUJDLFdBQW5CLEdBQ0k7QUFBSyxlQUFVO0FBQWYsS0FBb0IsNkJBQUMsWUFBRDtBQUFjLFVBQUssZUFBbkI7QUFBbUMsU0FBS0E7QUFBeEMsSUFBcEIsQ0FESixHQUVJLElBSk4sRUFPRUMsb0JBQ0ksNkJBQUMsWUFBRDtBQUFjLFVBQUssd0JBQW5CO0FBQTRDLFNBQUtBO0FBQWpELElBREosR0FFSSxJQVROLEVBWUVFLGNBQ0ksNkJBQUMsWUFBRDtBQUFjLFVBQUssaUJBQW5CO0FBQXFDLFNBQUtBO0FBQTFDLElBREosR0FFSSxJQWROLENBREUsR0FrQkYsSUFsQk47QUFvQkQsQ0F6QkQ7O0FBMkJBTCxhQUFhSixTQUFiLEdBQXlCO0FBQ3ZCSyxtQkFBaUJKLG1CQUFVVSxJQURKO0FBRXZCTCxlQUFhTCxtQkFBVUMsTUFGQTtBQUd2QksscUJBQW1CTixtQkFBVUMsTUFITjtBQUl2QlUsZ0JBQWNYLG1CQUFVWSxJQUpEO0FBS3ZCTCxnQkFBY1AsbUJBQVVhLE1BQVYsQ0FBaUJYO0FBTFIsQ0FBekI7QUFRQUMsYUFBYVcsWUFBYixHQUE0QjtBQUMxQlYsbUJBQWlCLEtBRFM7QUFFMUJDLGVBQWEsRUFGYTtBQUcxQkMscUJBQW1CLEVBSE87QUFJMUJLLGdCQUFjLE1BQU0sQ0FDbkI7QUFMeUIsQ0FBNUI7ZUFRZVIsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWY7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTVksWUFBWSw2QkFBVyx5QkFDM0JDLDJCQUNLLDRDQUEyQixpQ0FBZ0JBLEtBQWhCLENBQTNCLENBREw7QUFFRVQsZ0JBQWMsaUNBQWdCUyxLQUFoQjtBQUZoQixFQUQyQixFQUt2QmIscUJBTHVCLENBQVgsQ0FBbEI7ZUFPZTtBQUNiWSxXQURhO0FBRWJFLGtCQUFnQixDQUFDQyxlQUFELEVBQWtCQyxlQUFsQixFQUFpQ0MsZ0NBQWpDLEVBQ2RDLDJCQURjLEVBQ09DLDRCQURQLEVBQ29CQyxzQ0FEcEI7QUFGSCxDIiwiZmlsZSI6InF1b3RlLXBvc3QtdHJpcC1pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7IEJsdWVEb3duQXJyb3csIERvd25sb2FkVm91Y2hlckljb24sIEVkaXRQcmVmZXJlbmNlc0ljb24sIEF0dGFjaG1lbnRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBHQXJyb3dJY29uU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgdHJhbnNmb3JtOiAncm90YXRlWigtOTBkZWcpJ1xufSk7XG5cbmNvbnN0IEljb25NYXAgPSB7XG4gICdWaWV3IFZvdWNoZXJzJzogPERvd25sb2FkVm91Y2hlckljb24gLz4sXG4gICdGaWxsIFRyYXZlbGVycyBEZXRhaWxzJzogPEVkaXRQcmVmZXJlbmNlc0ljb24gLz4sXG4gICdWaWV3IEF0dGFjaG1lbnQnOiA8QXR0YWNobWVudEljb24gLz5cbn07XG5cbmNvbnN0IFBvc3RUcmlwQ2FyZCA9ICh7IHRleHQsIHVybCB9KSA9PiAoXG4gIDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwiZjE0IGZ3NyBzZmMxIG0wIGZsZXggYWxpZ25DZW50ZXIgc2JjdyBwdDggcGI4IHBsMTUgcHIxNSByZWxhdGl2ZVwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IGlibG9jayBtcjhcIj57SWNvbk1hcFt0ZXh0XX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj57dGV4dH08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyLXYgcjE1XCI+XG4gICAgICA8R0Fycm93SWNvblNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgaWJsb2NrIHA1XCI+PEJsdWVEb3duQXJyb3cgLz48L0dBcnJvd0ljb25TcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC9hPlxuKTtcblxuUG9zdFRyaXBDYXJkLnByb3BUeXBlcyA9IHtcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgUG9zdFRyaXBJbmZvID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dWb3VjaGVyc1VybCwgdm91Y2hlcnNVcmwsIHRyYXZlbGVyRGV0YWlsVXJsLCBjdXJyZW50UXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gIGNvbnN0IGRvd25sb2FkVXJsID0gY3VycmVudFF1b3RlLmF0dGFjaG1lbnQgJiYgY3VycmVudFF1b3RlLmF0dGFjaG1lbnQuZG93bmxvYWRVcmw7XG5cbiAgcmV0dXJuICgoc2hvd1ZvdWNoZXJzVXJsICYmIHZvdWNoZXJzVXJsKSB8fCB0cmF2ZWxlckRldGFpbFVybCB8fCBkb3dubG9hZFVybFxuICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImYxNCBzYmN3XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93Vm91Y2hlcnNVcmwgJiYgdm91Y2hlcnNVcmxcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJiYlwiPjxQb3N0VHJpcENhcmQgdGV4dD0nVmlldyBWb3VjaGVycycgdXJsPXt2b3VjaGVyc1VybH0gLz48L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICB0cmF2ZWxlckRldGFpbFVybFxuICAgICAgICAgICAgPyA8UG9zdFRyaXBDYXJkIHRleHQ9J0ZpbGwgVHJhdmVsZXJzIERldGFpbHMnIHVybD17dHJhdmVsZXJEZXRhaWxVcmx9IC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgZG93bmxvYWRVcmxcbiAgICAgICAgICAgID8gPFBvc3RUcmlwQ2FyZCB0ZXh0PSdWaWV3IEF0dGFjaG1lbnQnIHVybD17ZG93bmxvYWRVcmx9IC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cblBvc3RUcmlwSW5mby5wcm9wVHlwZXMgPSB7XG4gIHNob3dWb3VjaGVyc1VybDogUHJvcFR5cGVzLmJvb2wsXG4gIHZvdWNoZXJzVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmF2ZWxlckRldGFpbFVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgY3VycmVudFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cblBvc3RUcmlwSW5mby5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3dWb3VjaGVyc1VybDogZmFsc2UsXG4gIHZvdWNoZXJzVXJsOiAnJyxcbiAgdHJhdmVsZXJEZXRhaWxVcmw6ICcnLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFRyaXBJbmZvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgbG9hZCBhcyBmZXRjaFF1b3Rlc0RhdGEgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IGxvYWQgYXMgbG9hZENvbnN0YW50cyB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9jb25zdGFudHMnO1xuaW1wb3J0IHsgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZCB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZmV0Y2hEaXNjb3VudE9mZmVycyB9IGZyb20gJ21vZHVsZXMvZGlzY291bnRFbmdpbmUvYWN0aW9uJztcbmltcG9ydCB7IGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIH0gZnJvbSAnbW9kdWxlcy9wZG0vYWN0aW9uJztcblxuaW1wb3J0IHsgZ2V0VHJhdmVsbGVyQW5kVm91Y2hlcnNVcmwsIGdldEN1cnJlbnRRdW90ZSB9IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVMaXN0JztcbmltcG9ydCBQb3N0VHJpcEluZm8gZnJvbSAnLi9Qb3N0VHJpcEluZm8nO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgLi4uZ2V0VHJhdmVsbGVyQW5kVm91Y2hlcnNVcmwoZ2V0Q3VycmVudFF1b3RlKHN0YXRlKSksXG4gICAgY3VycmVudFF1b3RlOiBnZXRDdXJyZW50UXVvdGUoc3RhdGUpXG5cbiAgfSkpKFBvc3RUcmlwSW5mbykpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgd2Vidmlld0FjdGlvbnM6IFtmZXRjaFF1b3Rlc0RhdGEsIGxvYWRDb25zdGFudHMsIGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzLFxuICAgIGZldGNoRGlzY291bnRPZmZlcnMsIHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWRdXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==