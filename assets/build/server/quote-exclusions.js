require("source-map-support").install();
exports.ids = ["quote-exclusions"];
exports.modules = {

/***/ "./app-v2/modules/quote/inclusionExclusion/exclusion/index.js":
/*!********************************************************************!*\
  !*** ./app-v2/modules/quote/inclusionExclusion/exclusion/index.js ***!
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
  title: "Exclusions",
  item: (0, _quoteList2.getExclusion)((0, _quoteList2.getCurrentQuote)(state)),
  sectionName: 'exclusions-sec'
}))(_InclusionExclusion.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9pbmNsdXNpb25FeGNsdXNpb24vZXhjbHVzaW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnRhaW5lciIsInN0YXRlIiwidGl0bGUiLCJpdGVtIiwic2VjdGlvbk5hbWUiLCJJbmNsdXNpb25FeGNsdXNpb24iLCJ3ZWJ2aWV3QWN0aW9ucyIsImZldGNoUXVvdGVzRGF0YSIsImxvYWRDb25zdGFudHMiLCJmZXRjaFByZURlZmluZWRNZXNzYWdlcyIsImZldGNoRGlzY291bnRPZmZlcnMiLCJzd2l0Y2hRdW90ZSIsInVwZGF0ZVJlcXVlc3RlZFRyaXBJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUEsWUFBWSw2QkFBVyx5QkFDM0JDLFVBQVU7QUFDUkMsU0FBTyxZQURDO0FBRVJDLFFBQU0sOEJBQWEsaUNBQWdCRixLQUFoQixDQUFiLENBRkU7QUFHUkcsZUFBYTtBQUhMLENBQVYsQ0FEMkIsRUFLdkJDLDJCQUx1QixDQUFYLENBQWxCO2VBT2U7QUFDYkwsV0FEYTtBQUViTSxrQkFBZ0IsQ0FBQ0MsZUFBRCxFQUFrQkMsZUFBbEIsRUFBaUNDLGdDQUFqQyxFQUNkQywyQkFEYyxFQUNPQyw0QkFEUCxFQUNvQkMsc0NBRHBCO0FBRkgsQyIsImZpbGUiOiJxdW90ZS1leGNsdXNpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgbG9hZCBhcyBmZXRjaFF1b3Rlc0RhdGEgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IGxvYWQgYXMgbG9hZENvbnN0YW50cyB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9jb25zdGFudHMnO1xuaW1wb3J0IHsgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZCB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZmV0Y2hEaXNjb3VudE9mZmVycyB9IGZyb20gJ21vZHVsZXMvZGlzY291bnRFbmdpbmUvYWN0aW9uJztcbmltcG9ydCB7IGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIH0gZnJvbSAnbW9kdWxlcy9wZG0vYWN0aW9uJztcblxuaW1wb3J0IHsgZ2V0RXhjbHVzaW9uLCBnZXRDdXJyZW50UXVvdGUgfSBmcm9tICdtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL3F1b3RlTGlzdCc7XG5pbXBvcnQgSW5jbHVzaW9uRXhjbHVzaW9uIGZyb20gJy4uL0luY2x1c2lvbkV4Y2x1c2lvbic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB0aXRsZTogXCJFeGNsdXNpb25zXCIsXG4gICAgaXRlbTogZ2V0RXhjbHVzaW9uKGdldEN1cnJlbnRRdW90ZShzdGF0ZSkpLFxuICAgIHNlY3Rpb25OYW1lOiAnZXhjbHVzaW9ucy1zZWMnXG4gIH0pKShJbmNsdXNpb25FeGNsdXNpb24pKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIHdlYnZpZXdBY3Rpb25zOiBbZmV0Y2hRdW90ZXNEYXRhLCBsb2FkQ29uc3RhbnRzLCBmZXRjaFByZURlZmluZWRNZXNzYWdlcyxcbiAgICBmZXRjaERpc2NvdW50T2ZmZXJzLCBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkXVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=