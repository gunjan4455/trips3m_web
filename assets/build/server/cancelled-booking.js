require("source-map-support").install();
exports.ids = ["cancelled-booking"];
exports.modules = {

/***/ "./app-v2/modules/rlp/cancelledBookingCard/CanceledCard.js":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/rlp/cancelledBookingCard/CanceledCard.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GIconDiv = _glamorous.default.div({
  width: '40px',
  paddingTop: '40px'
});

let CanceledCard = class CanceledCard extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.reactivateBooking = () => {
      const {
        reactivateBooking,
        params,
        location
      } = this.props;
      reactivateBooking({
        tripId: params.requestedTripId,
        query: location.search
      }).then(results => {
        if (results) {
          window.location.reload();
        }
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "pl15 pr15 pb15 mb8 sbcw"
    }, _react.default.createElement(GIconDiv, {
      className: "mlauto mrauto mb24 lineHeight0"
    }, _react.default.createElement(_Icon.TriangleIcon, null)), _react.default.createElement("p", {
      className: "m0 f14p text-center sfc6"
    }, "We\u2019re sorry that you had to cancel this request. Travel plans change all the time and we\u2019d be happy to assist you with your next holiday plan"), _react.default.createElement("div", {
      className: "mt64"
    }, _react.default.createElement("p", {
      className: "f14p mb8 text-center sfc6"
    }, "Incase you changed your mind"), _react.default.createElement("button", {
      className: "btn-filled-pri wfull",
      onClick: this.reactivateBooking
    }, "Undo Cancel")));
  }

};
CanceledCard.propTypes = {
  reactivateBooking: _propTypes.default.func,
  params: _propTypes.default.object,
  location: _propTypes.default.object
};
var _default = CanceledCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/cancelledBookingCard/index.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/rlp/cancelledBookingCard/index.js ***!
  \**********************************************************/
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

var _tripActivities = __webpack_require__(/*! modules/trip/actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

var _CanceledCard = _interopRequireDefault(__webpack_require__(/*! ./CanceledCard */ "./app-v2/modules/rlp/cancelledBookingCard/CanceledCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(null, {
  reactivateBooking: _tripActivities.reactivateBooking
})(_CanceledCard.default));
var _default = {
  container
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvY2FuY2VsbGVkQm9va2luZ0NhcmQvQ2FuY2VsZWRDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3JscC9jYW5jZWxsZWRCb29raW5nQ2FyZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJHSWNvbkRpdiIsImdsYW1vcm91cyIsImRpdiIsIndpZHRoIiwicGFkZGluZ1RvcCIsIkNhbmNlbGVkQ2FyZCIsIkNvbXBvbmVudCIsInJlYWN0aXZhdGVCb29raW5nIiwicGFyYW1zIiwibG9jYXRpb24iLCJwcm9wcyIsInRyaXBJZCIsInJlcXVlc3RlZFRyaXBJZCIsInF1ZXJ5Iiwic2VhcmNoIiwidGhlbiIsInJlc3VsdHMiLCJ3aW5kb3ciLCJyZWxvYWQiLCJyZW5kZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwib2JqZWN0IiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLE1BQU1BLFdBQVdDLG1CQUFVQyxHQUFWLENBQWM7QUFDN0JDLFNBQU8sTUFEc0I7QUFFN0JDLGNBQVk7QUFGaUIsQ0FBZCxDQUFqQjs7SUFLTUMsWSxHQUFOLE1BQU1BLFlBQU4sU0FBMkJDLGdCQUEzQixDQUFxQztBQUFBO0FBQUE7O0FBQUEsd0NBQ25DQyxpQkFEbUMsR0FDZixNQUFNO0FBQ3hCLFlBQU07QUFBRUEseUJBQUY7QUFBcUJDLGNBQXJCO0FBQTZCQztBQUE3QixVQUEwQyxLQUFLQyxLQUFyRDtBQUNBSCx3QkFBa0I7QUFBRUksZ0JBQVFILE9BQU9JLGVBQWpCO0FBQWtDQyxlQUFPSixTQUFTSztBQUFsRCxPQUFsQixFQUE4RUMsSUFBOUUsQ0FBb0ZDLE9BQUQsSUFBYTtBQUM5RixZQUFJQSxPQUFKLEVBQWE7QUFDWEMsaUJBQU9SLFFBQVAsQ0FBZ0JTLE1BQWhCO0FBQ0Q7QUFDRixPQUpEO0FBS0QsS0FSa0M7QUFBQTs7QUFVbkNDLFdBQVM7QUFDUCxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLFFBQUQ7QUFBVSxpQkFBVTtBQUFwQixPQUFxRCw2QkFBQyxrQkFBRCxPQUFyRCxDQURGLEVBRUU7QUFBRyxpQkFBVTtBQUFiLGlLQUZGLEVBSUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBRyxpQkFBVTtBQUFiLHNDQURGLEVBRUU7QUFBUSxpQkFBVSxzQkFBbEI7QUFBeUMsZUFBUyxLQUFLWjtBQUF2RCxxQkFGRixDQUpGLENBREY7QUFXRDs7QUF0QmtDLEM7QUF5QnJDRixhQUFhZSxTQUFiLEdBQXlCO0FBQ3ZCYixxQkFBbUJjLG1CQUFVQyxJQUROO0FBRXZCZCxVQUFRYSxtQkFBVUUsTUFGSztBQUd2QmQsWUFBVVksbUJBQVVFO0FBSEcsQ0FBekI7ZUFNZWxCLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNmOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTW1CLFlBQVksNkJBQVcseUJBQzNCLElBRDJCLEVBQ3JCO0FBQ0pqQjtBQURJLENBRHFCLEVBSTNCRixxQkFKMkIsQ0FBWCxDQUFsQjtlQU1lO0FBQ2JtQjtBQURhLEMiLCJmaWxlIjoiY2FuY2VsbGVkLWJvb2tpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgVHJpYW5nbGVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBHSWNvbkRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzQwcHgnLFxuICBwYWRkaW5nVG9wOiAnNDBweCcsXG59KTtcblxuY2xhc3MgQ2FuY2VsZWRDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVhY3RpdmF0ZUJvb2tpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFjdGl2YXRlQm9va2luZywgcGFyYW1zLCBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZWFjdGl2YXRlQm9va2luZyh7IHRyaXBJZDogcGFyYW1zLnJlcXVlc3RlZFRyaXBJZCwgcXVlcnk6IGxvY2F0aW9uLnNlYXJjaCB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwxNSBwcjE1IHBiMTUgbWI4IHNiY3cnPlxuICAgICAgICA8R0ljb25EaXYgY2xhc3NOYW1lPSdtbGF1dG8gbXJhdXRvIG1iMjQgbGluZUhlaWdodDAnPjxUcmlhbmdsZUljb24gLz48L0dJY29uRGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9J20wIGYxNHAgdGV4dC1jZW50ZXIgc2ZjNic+V2XigJlyZSBzb3JyeSB0aGF0IHlvdSBoYWQgdG8gY2FuY2VsIHRoaXMgcmVxdWVzdC4gVHJhdmVsIHBsYW5zIGNoYW5nZSBhbGwgdGhlXG4gICAgICAgICAgdGltZSBhbmQgd2XigJlkIGJlIGhhcHB5IHRvIGFzc2lzdCB5b3Ugd2l0aCB5b3VyIG5leHQgaG9saWRheSBwbGFuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQ2NCc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTRwIG1iOCB0ZXh0LWNlbnRlciBzZmM2Jz5JbmNhc2UgeW91IGNoYW5nZWQgeW91ciBtaW5kPC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZmlsbGVkLXByaSB3ZnVsbCcgb25DbGljaz17dGhpcy5yZWFjdGl2YXRlQm9va2luZ30+VW5kbyBDYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhbmNlbGVkQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIHJlYWN0aXZhdGVCb29raW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsZWRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgcmVhY3RpdmF0ZUJvb2tpbmcgfSBmcm9tICdtb2R1bGVzL3RyaXAvYWN0aW9ucy90cmlwQWN0aXZpdGllcyc7XG5pbXBvcnQgQ2FuY2VsZWRDYXJkIGZyb20gJy4vQ2FuY2VsZWRDYXJkJztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBudWxsLCB7XG4gICAgcmVhY3RpdmF0ZUJvb2tpbmdcbiAgfVxuKShDYW5jZWxlZENhcmQpKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9