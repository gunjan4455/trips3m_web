require("source-map-support").install();
exports.ids = ["mkt-section3"];
exports.modules = {

/***/ "./app-v2/modules/mkt/section3/Section3.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/mkt/section3/Section3.js ***!
  \*************************************************/
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

var _Card = _interopRequireDefault(__webpack_require__(/*! ../common/components/Card */ "./app-v2/modules/mkt/common/components/Card.js"));

var _section3Cm = _interopRequireDefault(__webpack_require__(/*! ./section3.cm.scss */ "./app-v2/modules/mkt/section3/section3.cm.scss"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/shared/Swiper */ "./app-v2/modules/shared/Swiper.js"));

var _modules = __webpack_require__(/*! react-scroll/modules */ "./node_modules/react-scroll/modules/index.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Section3 = (_temp2 = _class = class Section3 extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.renderCards = (items, heading) => {
      if (items.length === 1) {
        return items.map((item, i) => _react.default.createElement("div", {
          className: "bb pb15",
          key: `section3_box_${i}`
        }, _react.default.createElement("h2", {
          className: "f18 fw9 p15 text-center"
        }, heading || 'Recently Booked Packages'), _react.default.createElement("div", {
          className: `${_section3Cm.default.sliderContent} ${_section3Cm.default.sliderSpace} section-cards`
        }, _react.default.createElement(_Swiper.default, {
          spaceBetween: 10,
          loop: true,
          slidesPerView: "auto",
          ssrAnimation: {
            width: 280,
            height: 122
          },
          rebuildOnUpdate: true
        }, item.cards.map((card, i) => _react.default.createElement("div", {
          key: `section3_${i}`
        }, _react.default.createElement(_Card.default, {
          card: card
        })))))));
      }

      return _react.default.createElement("div", null, _react.default.createElement("h2", {
        className: "f18 fw9 p15 bb"
      }, heading, " "), items.map((item, i) => _react.default.createElement("div", {
        className: _section3Cm.default.dropdownContent,
        key: `section3_box_${i}`
      }, _react.default.createElement("input", {
        type: "checkbox",
        id: `sliderData_${i}`,
        className: _section3Cm.default.check
      }), _react.default.createElement("label", {
        className: "f16 pfc3 p15 bb",
        htmlFor: `sliderData_${i}`
      }, item.title, _react.default.createElement("span", {
        className: _section3Cm.default.arrow
      })), _react.default.createElement("div", {
        className: `${_section3Cm.default.sliderContent} ${_section3Cm.default.sliderSpace} section-cards`
      }, _react.default.createElement(_Swiper.default, {
        spaceBetween: 10,
        loop: true,
        slidesPerView: "auto",
        ssrAnimation: {
          width: 280,
          height: 122
        },
        rebuildOnUpdate: true
      }, item.cards.map((card, i) => _react.default.createElement("div", {
        key: `section3_${i}`
      }, _react.default.createElement(_Card.default, {
        card: card
      }))))))));
    }, _temp;
  }

  render() {
    const {
      data
    } = this.props;

    if ((0, _isEmpty2.default)(data)) {
      return null;
    }

    const {
      heading,
      buttonText,
      items
    } = data;
    return _react.default.createElement("div", {
      className: "mb2 sbcw"
    }, this.renderCards(items, heading));
  }

}, _class.propTypes = {
  data: _propTypes.default.object
}, _class.defaultProps = {
  data: {}
}, _temp2);
exports.default = Section3;

/***/ }),

/***/ "./app-v2/modules/mkt/section3/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/mkt/section3/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Section = _interopRequireDefault(__webpack_require__(/*! ./Section3 */ "./app-v2/modules/mkt/section3/Section3.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.section3
}))(_Section.default);
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3Qvc2VjdGlvbjMvU2VjdGlvbjMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvbWt0L3NlY3Rpb24zL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24zIiwiQ29tcG9uZW50IiwicmVuZGVyQ2FyZHMiLCJpdGVtcyIsImhlYWRpbmciLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsInN0eWxlcyIsInNsaWRlckNvbnRlbnQiLCJzbGlkZXJTcGFjZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FyZHMiLCJjYXJkIiwiZHJvcGRvd25Db250ZW50IiwiY2hlY2siLCJ0aXRsZSIsImFycm93IiwicmVuZGVyIiwiZGF0YSIsInByb3BzIiwiYnV0dG9uVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImNvbnRhaW5lciIsInN0YXRlIiwibWt0Iiwic2VjdGlvbjMiLCJhY3Rpb25zIiwiZGVmYXVsdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUdBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztJQUdxQkEsUSxzQkFBTixNQUFNQSxRQUFOLFNBQXVCQyxnQkFBdkIsQ0FBaUM7QUFBQTtBQUFBOztBQUFBLHdDQVM5Q0MsV0FUOEMsR0FTaEMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEtBQW9CO0FBQ2hDLFVBQUlELE1BQU1FLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsZUFBT0YsTUFBTUcsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxLQUNmO0FBQUsscUJBQVUsU0FBZjtBQUF5QixlQUFNLGdCQUFlQSxDQUFFO0FBQWhELFdBQ0U7QUFBSSxxQkFBVTtBQUFkLFdBQXlDSixXQUFXLDBCQUFwRCxDQURGLEVBRUU7QUFBSyxxQkFBWSxHQUFFSyxvQkFBT0MsYUFBYyxJQUFHRCxvQkFBT0UsV0FBWTtBQUE5RCxXQUNFLDZCQUFDLGVBQUQ7QUFBUSx3QkFBYyxFQUF0QjtBQUNRLG9CQURSO0FBRVEseUJBQWMsTUFGdEI7QUFHUSx3QkFBYztBQUFFQyxtQkFBTyxHQUFUO0FBQWNDLG9CQUFRO0FBQXRCLFdBSHRCO0FBSVE7QUFKUixXQU9JTixLQUFLTyxLQUFMLENBQVdSLEdBQVgsQ0FBZSxDQUFDUyxJQUFELEVBQU9QLENBQVAsS0FDYjtBQUFLLGVBQU0sWUFBV0EsQ0FBRTtBQUF4QixXQUNFLDZCQUFDLGFBQUQ7QUFBTSxnQkFBTU87QUFBWixVQURGLENBREYsQ0FQSixDQURGLENBRkYsQ0FESyxDQUFQO0FBcUJEOztBQUVELGFBQ0UsMENBQ0U7QUFBSSxtQkFBVTtBQUFkLFNBQWdDWCxPQUFoQyxNQURGLEVBR0lELE1BQU1HLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU9DLENBQVAsS0FDUjtBQUFLLG1CQUFXQyxvQkFBT08sZUFBdkI7QUFBd0MsYUFBTSxnQkFBZVIsQ0FBRTtBQUEvRCxTQUNFO0FBQU8sY0FBSyxVQUFaO0FBQXVCLFlBQUssY0FBYUEsQ0FBRSxFQUEzQztBQUE4QyxtQkFBV0Msb0JBQU9RO0FBQWhFLFFBREYsRUFFRTtBQUFPLG1CQUFVLGlCQUFqQjtBQUFtQyxpQkFBVSxjQUFhVCxDQUFFO0FBQTVELFNBQ0dELEtBQUtXLEtBRFIsRUFFRTtBQUFNLG1CQUFXVCxvQkFBT1U7QUFBeEIsUUFGRixDQUZGLEVBTUU7QUFBSyxtQkFBWSxHQUFFVixvQkFBT0MsYUFBYyxJQUFHRCxvQkFBT0UsV0FBWTtBQUE5RCxTQUNFLDZCQUFDLGVBQUQ7QUFBUSxzQkFBYyxFQUF0QjtBQUNRLGtCQURSO0FBRVEsdUJBQWMsTUFGdEI7QUFHUSxzQkFBYztBQUFFQyxpQkFBTyxHQUFUO0FBQWNDLGtCQUFRO0FBQXRCLFNBSHRCO0FBSVE7QUFKUixTQU9JTixLQUFLTyxLQUFMLENBQVdSLEdBQVgsQ0FBZSxDQUFDUyxJQUFELEVBQU9QLENBQVAsS0FDYjtBQUFLLGFBQU0sWUFBV0EsQ0FBRTtBQUF4QixTQUNFLDZCQUFDLGFBQUQ7QUFBTSxjQUFNTztBQUFaLFFBREYsQ0FERixDQVBKLENBREYsQ0FORixDQURGLENBSEosQ0FERjtBQWdDRCxLQWxFNkM7QUFBQTs7QUFvRTlDSyxXQUFTO0FBQ1AsVUFBTTtBQUFFQztBQUFGLFFBQVcsS0FBS0MsS0FBdEI7O0FBRUEsUUFBSSx1QkFBU0QsSUFBVCxDQUFKLEVBQW9CO0FBQ2xCLGFBQU8sSUFBUDtBQUNEOztBQUVELFVBQU07QUFBRWpCLGFBQUY7QUFBV21CLGdCQUFYO0FBQXVCcEI7QUFBdkIsUUFBaUNrQixJQUF2QztBQUNBLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0csS0FBS25CLFdBQUwsQ0FBaUJDLEtBQWpCLEVBQXdCQyxPQUF4QixDQURILENBREY7QUFVRDs7QUF0RjZDLEMsU0FDdkNvQixTLEdBQVk7QUFDakJILFFBQU1JLG1CQUFVQztBQURDLEMsU0FJWkMsWSxHQUFlO0FBQ3BCTixRQUFNO0FBRGMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQnhCOztBQUVBOzs7O0FBRUEsTUFBTU8sWUFBWSx5QkFDaEJDLFVBQVU7QUFBRVIsUUFBTVEsTUFBTUMsR0FBTixDQUFVVCxJQUFWLENBQWVVO0FBQXZCLENBQVYsQ0FEZ0IsRUFFaEIvQixnQkFGZ0IsQ0FBbEI7ZUFJZTtBQUNiNEIsV0FEYTtBQUViSSxXQUFTLEVBRkk7QUFHYkMsaUJBQWU7QUFIRixDIiwiZmlsZSI6Im1rdC1zZWN0aW9uMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9DYXJkJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlY3Rpb24zLmNtLnNjc3MnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdhcHAtdjIvbW9kdWxlcy9zaGFyZWQvU3dpcGVyJztcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwvbW9kdWxlcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbjMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIHJlbmRlckNhcmRzID0gKGl0ZW1zLCBoZWFkaW5nKSA9PiB7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYiBwYjE1XCIga2V5PXtgc2VjdGlvbjNfYm94XyR7aX1gfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZjE4IGZ3OSBwMTUgdGV4dC1jZW50ZXJcIj57aGVhZGluZyB8fCAnUmVjZW50bHkgQm9va2VkIFBhY2thZ2VzJ308L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2xpZGVyQ29udGVudH0gJHtzdHlsZXMuc2xpZGVyU3BhY2V9IHNlY3Rpb24tY2FyZHNgfT5cbiAgICAgICAgICAgIDxTd2lwZXIgc3BhY2VCZXR3ZWVuPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDEyMiB9fVxuICAgICAgICAgICAgICAgICAgICByZWJ1aWxkT25VcGRhdGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2FyZHMubWFwKChjYXJkLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BzZWN0aW9uM18ke2l9YH0gPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjYXJkPXtjYXJkfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZjE4IGZ3OSBwMTUgYmJcIj57aGVhZGluZ30gPC9oMj5cbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25Db250ZW50fSBrZXk9e2BzZWN0aW9uM19ib3hfJHtpfWB9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e2BzbGlkZXJEYXRhXyR7aX1gfSBjbGFzc05hbWU9e3N0eWxlcy5jaGVja30gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImYxNiBwZmMzIHAxNSBiYlwiIGh0bWxGb3I9e2BzbGlkZXJEYXRhXyR7aX1gfT5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zbGlkZXJDb250ZW50fSAke3N0eWxlcy5zbGlkZXJTcGFjZX0gc2VjdGlvbi1jYXJkc2B9PlxuICAgICAgICAgICAgICAgIDxTd2lwZXIgc3BhY2VCZXR3ZWVuPXsxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDEyMiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZE9uVXBkYXRlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNhcmRzLm1hcCgoY2FyZCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHNlY3Rpb24zXyR7aX1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjYXJkPXtjYXJkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoX2lzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaGVhZGluZywgYnV0dG9uVGV4dCwgaXRlbXMgfSA9IGRhdGE7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIyIHNiY3dcIj5cbiAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoaXRlbXMsIGhlYWRpbmcpfVxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17YHBsOCBwcjggejkgJHtzdHlsZXMuYnRuRml4ZWR9YH0+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZSB0ZXh0LWNlbnRlciBmMTYgYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zY3JvbGxUb0Zvcm1IYW5kbGVyfT57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+Ki99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgU2VjdGlvbjMgZnJvbSAnLi9TZWN0aW9uMyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7IGRhdGE6IHN0YXRlLm1rdC5kYXRhLnNlY3Rpb24zLCB9KVxuKShTZWN0aW9uMyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7fSxcbiAgZGVmYXVsdEFjdGlvbjogbnVsbCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9