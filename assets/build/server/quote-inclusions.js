require("source-map-support").install();
exports.ids = ["quote-inclusions"];
exports.modules = {

/***/ "./app-v2/modules/quote/inclusionExclusion/inclusion/index.js":
/*!********************************************************************!*\
  !*** ./app-v2/modules/quote/inclusionExclusion/inclusion/index.js ***!
  \********************************************************************/
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

var _InclusionExclusion = _interopRequireDefault(__webpack_require__(/*! ../InclusionExclusion */ "./app-v2/modules/quote/inclusionExclusion/InclusionExclusion.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  title: "Inclusions",
  item: (0, _quoteList2.getInclusion)((0, _quoteList2.getCurrentQuote)(state)),
  sectionName: 'inclusions-sec'
}), {
  setPdmCategory: _action2.setPdmCategory,
  showHidePdmView: _action2.showHidePdmView
})(_InclusionExclusion.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9pbmNsdXNpb25FeGNsdXNpb24vaW5jbHVzaW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnRhaW5lciIsInN0YXRlIiwidGl0bGUiLCJpdGVtIiwic2VjdGlvbk5hbWUiLCJzZXRQZG1DYXRlZ29yeSIsInNob3dIaWRlUGRtVmlldyIsIkluY2x1c2lvbkV4Y2x1c2lvbiIsIndlYnZpZXdBY3Rpb25zIiwiZmV0Y2hRdW90ZXNEYXRhIiwibG9hZENvbnN0YW50cyIsImZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIiwiZmV0Y2hEaXNjb3VudE9mZmVycyIsInN3aXRjaFF1b3RlIiwidXBkYXRlUmVxdWVzdGVkVHJpcElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFFQSxNQUFNQSxZQUFZLDZCQUFXLHlCQUMzQkMsVUFBVTtBQUNSQyxTQUFPLFlBREM7QUFFUkMsUUFBTSw4QkFBYSxpQ0FBZ0JGLEtBQWhCLENBQWIsQ0FGRTtBQUdSRyxlQUFhO0FBSEwsQ0FBVixDQUQyQixFQUt2QjtBQUNGQyx5Q0FERTtBQUVGQztBQUZFLENBTHVCLEVBUXhCQywyQkFSd0IsQ0FBWCxDQUFsQjtlQVVlO0FBQ2JQLFdBRGE7QUFFYlEsa0JBQWdCLENBQUNDLGVBQUQsRUFBa0JDLGVBQWxCLEVBQWlDQyxnQ0FBakMsRUFDZEMsMkJBRGMsRUFDT0MsNEJBRFAsRUFDb0JDLHNDQURwQjtBQUZILEMiLCJmaWxlIjoicXVvdGUtaW5jbHVzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IGxvYWQgYXMgZmV0Y2hRdW90ZXNEYXRhIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlTGlzdCc7XG5pbXBvcnQgeyBsb2FkIGFzIGxvYWRDb25zdGFudHMgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvY29uc3RhbnRzJztcbmltcG9ydCB7IHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7IGZldGNoRGlzY291bnRPZmZlcnMgfSBmcm9tICdtb2R1bGVzL2Rpc2NvdW50RW5naW5lL2FjdGlvbic7XG5pbXBvcnQgeyBmZXRjaFByZURlZmluZWRNZXNzYWdlcyB9IGZyb20gJ21vZHVsZXMvcGRtL2FjdGlvbic7XG5cbmltcG9ydCB7IGdldEluY2x1c2lvbiwgZ2V0Q3VycmVudFF1b3RlIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUxpc3QnO1xuaW1wb3J0IHsgc2V0UGRtQ2F0ZWdvcnksIHNob3dIaWRlUGRtVmlldyB9IGZyb20gJ21vZHVsZXMvcGRtL2FjdGlvbic7XG5pbXBvcnQgSW5jbHVzaW9uRXhjbHVzaW9uIGZyb20gJy4uL0luY2x1c2lvbkV4Y2x1c2lvbic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB0aXRsZTogXCJJbmNsdXNpb25zXCIsXG4gICAgaXRlbTogZ2V0SW5jbHVzaW9uKGdldEN1cnJlbnRRdW90ZShzdGF0ZSkpLFxuICAgIHNlY3Rpb25OYW1lOiAnaW5jbHVzaW9ucy1zZWMnXG4gIH0pLCB7XG4gICAgc2V0UGRtQ2F0ZWdvcnksXG4gICAgc2hvd0hpZGVQZG1WaWV3XG4gIH0pKEluY2x1c2lvbkV4Y2x1c2lvbikpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgd2Vidmlld0FjdGlvbnM6IFtmZXRjaFF1b3Rlc0RhdGEsIGxvYWRDb25zdGFudHMsIGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzLFxuICAgIGZldGNoRGlzY291bnRPZmZlcnMsIHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWRdXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==