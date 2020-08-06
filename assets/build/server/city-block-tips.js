require("source-map-support").install();
exports.ids = ["city-block-tips"];
exports.modules = {

/***/ "./app-v2/modules/cityBlock/Tips/TipsList.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/cityBlock/Tips/TipsList.js ***!
  \***************************************************/
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

const Ul = _glamorous.default.ul({
  padding: '0',
  margin: '0',
  '& li': {
    margin: '0 0 15px 0',
    position: 'relative',
    '&:last-child': {
      marginBottom: '0'
    }
  }
});

const Icon = _glamorous.default.span({
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px',
  '& svg': {
    width: '20px',
    height: '20px'
  }
});

const TipsList = ({
  data
}) => _react.default.createElement("div", null, _react.default.createElement("h2", {
  className: "m0  mb15 f16 fw9 pfc1"
}, `Tips for ${data.setUrl}`), _react.default.createElement(Ul, null, data.tips && data.tips.length && data.tips.map((tip, i) => _react.default.createElement("li", {
  className: "block flex f14p pfc3",
  key: i
}, _react.default.createElement(Icon, {
  className: "relative mr8"
}, _react.default.createElement(_Icon.InfoIcon, null)), _react.default.createElement("span", {
  className: "flexFull"
}, tip.text)))));

TipsList.propTypes = {
  data: _propTypes.default.object.isRequired
};
var _default = TipsList;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/cityBlock/tips/Tips.js":
/*!***********************************************!*\
  !*** ./app-v2/screens/cityBlock/tips/Tips.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _TipsList = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/Tips/TipsList */ "./app-v2/modules/cityBlock/Tips/TipsList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tips = ({
  data,
  exitIntent
}) => {
  return _react.default.createElement("div", {
    className: "clearfix sbcw p15 m8 mt0"
  }, _react.default.createElement(_TipsList.default, {
    data: data
  }), exitIntent);
};

Tips.propTypes = {
  data: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired
};
var _default = Tips;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svVGlwcy9UaXBzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9jaXR5QmxvY2svdGlwcy9UaXBzLmpzIl0sIm5hbWVzIjpbIlVsIiwiZ2xhbW9yb3VzIiwidWwiLCJwYWRkaW5nIiwibWFyZ2luIiwicG9zaXRpb24iLCJtYXJnaW5Cb3R0b20iLCJJY29uIiwic3BhbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsIlRpcHNMaXN0IiwiZGF0YSIsInNldFVybCIsInRpcHMiLCJsZW5ndGgiLCJtYXAiLCJ0aXAiLCJpIiwidGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJUaXBzIiwiZXhpdEludGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTUEsS0FBS0MsbUJBQVVDLEVBQVYsQ0FBYTtBQUN0QkMsV0FBUyxHQURhO0FBRXRCQyxVQUFRLEdBRmM7QUFHdEIsVUFBUTtBQUNOQSxZQUFRLFlBREY7QUFFTkMsY0FBVSxVQUZKO0FBR04sb0JBQWdCO0FBQ2RDLG9CQUFjO0FBREE7QUFIVjtBQUhjLENBQWIsQ0FBWDs7QUFZQSxNQUFNQyxPQUFPTixtQkFBVU8sSUFBVixDQUFlO0FBQzFCQyxZQUFVLE1BRGdCO0FBRTFCQyxZQUFVLE1BRmdCO0FBRzFCQyxVQUFRLE1BSGtCO0FBSTFCLFdBQVM7QUFDUEMsV0FBTyxNQURBO0FBRVBELFlBQVE7QUFGRDtBQUppQixDQUFmLENBQWI7O0FBVUEsTUFBTUUsV0FBVyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNmLDBDQUNFO0FBQUksYUFBVTtBQUFkLEdBQXdDLFlBQVdBLEtBQUtDLE1BQU8sRUFBL0QsQ0FERixFQUVFLDZCQUFDLEVBQUQsUUFFSUQsS0FBS0UsSUFBTCxJQUFhRixLQUFLRSxJQUFMLENBQVVDLE1BQXZCLElBQWlDSCxLQUFLRSxJQUFMLENBQVVFLEdBQVYsQ0FBYyxDQUFDQyxHQUFELEVBQU1DLENBQU4sS0FDN0M7QUFBSSxhQUFVLHNCQUFkO0FBQXFDLE9BQUtBO0FBQTFDLEdBQ0UsNkJBQUMsSUFBRDtBQUFNLGFBQVU7QUFBaEIsR0FBK0IsNkJBQUMsY0FBRCxPQUEvQixDQURGLEVBRUU7QUFBTSxhQUFVO0FBQWhCLEdBQTRCRCxJQUFJRSxJQUFoQyxDQUZGLENBRCtCLENBRnJDLENBRkYsQ0FERjs7QUFnQkFSLFNBQVNTLFNBQVQsR0FBcUI7QUFDbkJSLFFBQU1TLG1CQUFVQyxNQUFWLENBQWlCQztBQURKLENBQXJCO2VBSWVaLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERmOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTWEsT0FBTyxDQUFDO0FBQUVaLE1BQUY7QUFBUWE7QUFBUixDQUFELEtBQTBCO0FBQ3JDLFNBQ0U7QUFBSyxlQUFVO0FBQWYsS0FDRSw2QkFBQyxpQkFBRDtBQUFVLFVBQU1iO0FBQWhCLElBREYsRUFFR2EsVUFGSCxDQURGO0FBTUQsQ0FQRDs7QUFTQUQsS0FBS0osU0FBTCxHQUFpQjtBQUNmUixRQUFNUyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEUjtBQUVmRSxjQUFZSixtQkFBVUMsTUFBVixDQUFpQkM7QUFGZCxDQUFqQjtlQUtlQyxJIiwiZmlsZSI6ImNpdHktYmxvY2stdGlwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBJbmZvSWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgVWwgPSBnbGFtb3JvdXMudWwoe1xuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICAnJiBsaSc6IHtcbiAgICBtYXJnaW46ICcwIDAgMTVweCAwJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMCdcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEljb24gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIG1pbldpZHRoOiAnMjRweCcsXG4gIG1heFdpZHRoOiAnMjRweCcsXG4gIGhlaWdodDogJzI0cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgfVxufSk7XG5cbmNvbnN0IFRpcHNMaXN0ID0gKHsgZGF0YSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgyIGNsYXNzTmFtZT1cIm0wICBtYjE1IGYxNiBmdzkgcGZjMVwiPntgVGlwcyBmb3IgJHtkYXRhLnNldFVybH1gfTwvaDI+XG4gICAgPFVsPlxuICAgICAge1xuICAgICAgICBkYXRhLnRpcHMgJiYgZGF0YS50aXBzLmxlbmd0aCAmJiBkYXRhLnRpcHMubWFwKCh0aXAsIGkpID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBmMTRwIHBmYzNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgbXI4XCI+PEluZm9JY29uIC8+PC9JY29uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj57dGlwLnRleHR9PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9VbD5cbiAgPC9kaXY+XG4pO1xuXG5UaXBzTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpcHNMaXN0O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUaXBzTGlzdCBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NpdHlCbG9jay9UaXBzL1RpcHNMaXN0JztcblxuY29uc3QgVGlwcyA9ICh7IGRhdGEsIGV4aXRJbnRlbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggc2JjdyBwMTUgbTggbXQwXCI+XG4gICAgICA8VGlwc0xpc3QgZGF0YT17ZGF0YX0gIC8+XG4gICAgICB7ZXhpdEludGVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRpcHMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGV4aXRJbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpcHM7XG4iXSwic291cmNlUm9vdCI6IiJ9