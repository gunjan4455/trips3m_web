require("source-map-support").install();
exports.ids = ["mkt-section4"];
exports.modules = {

/***/ "./app-v2/modules/mkt/section4/Section4.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/mkt/section4/Section4.js ***!
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

var _section3Cm = _interopRequireDefault(__webpack_require__(/*! ../section3/section3.cm.scss */ "./app-v2/modules/mkt/section3/section3.cm.scss"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/shared/Swiper */ "./app-v2/modules/shared/Swiper.js"));

var _modules = __webpack_require__(/*! react-scroll/modules */ "./node_modules/react-scroll/modules/index.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Section4 = (_temp2 = _class = class Section4 extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.renderCards = (items, heading) => {
      if (items.length === 1) {
        return items.map((item, i) => _react.default.createElement("div", {
          key: `section4_box_${i}`
        }, _react.default.createElement("h2", {
          className: "f18 fw9 p15 text-center"
        }, heading || 'Recently Booked Tour Packages'), _react.default.createElement("div", {
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
          key: `section4_${i}`
        }, _react.default.createElement(_Card.default, {
          card: card
        })))))));
      }

      return _react.default.createElement("div", null, _react.default.createElement("h2", {
        className: "f18 fw9 p15 bb"
      }, heading, " "), items.map((item, i) => _react.default.createElement("div", {
        className: _section3Cm.default.dropdownContent,
        key: `section4_box_${i}`
      }, _react.default.createElement("input", {
        type: "checkbox",
        id: `sliderId_${i}`,
        className: _section3Cm.default.check
      }), _react.default.createElement("label", {
        className: "f16 pfc3 p15 bb",
        htmlFor: `sliderId_${i}`
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
        key: `section4_${i}`
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
      className: "sbcw mb2 relative"
    }, this.renderCards(items, heading));
  }

}, _class.propTypes = {
  data: _propTypes.default.object
}, _class.defaultProps = {
  data: {}
}, _temp2);
exports.default = Section4;

/***/ }),

/***/ "./app-v2/modules/mkt/section4/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/mkt/section4/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Section = _interopRequireDefault(__webpack_require__(/*! ./Section4 */ "./app-v2/modules/mkt/section4/Section4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.section4
}))(_Section.default);
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3Qvc2VjdGlvbjQvU2VjdGlvbjQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvbWt0L3NlY3Rpb240L2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb240IiwiQ29tcG9uZW50IiwicmVuZGVyQ2FyZHMiLCJpdGVtcyIsImhlYWRpbmciLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsInN0eWxlcyIsInNsaWRlckNvbnRlbnQiLCJzbGlkZXJTcGFjZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FyZHMiLCJjYXJkIiwiZHJvcGRvd25Db250ZW50IiwiY2hlY2siLCJ0aXRsZSIsImFycm93IiwicmVuZGVyIiwiZGF0YSIsInByb3BzIiwiYnV0dG9uVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImNvbnRhaW5lciIsInN0YXRlIiwibWt0Iiwic2VjdGlvbjQiLCJhY3Rpb25zIiwiZGVmYXVsdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVxQkEsUSxzQkFBTixNQUFNQSxRQUFOLFNBQXVCQyxnQkFBdkIsQ0FBaUM7QUFBQTtBQUFBOztBQUFBLHdDQVM5Q0MsV0FUOEMsR0FTaEMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEtBQW9CO0FBQ2hDLFVBQUlELE1BQU1FLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsZUFBT0YsTUFBTUcsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxLQUNmO0FBQUssZUFBTSxnQkFBZUEsQ0FBRTtBQUE1QixXQUNFO0FBQUkscUJBQVU7QUFBZCxXQUF5Q0osV0FBVywrQkFBcEQsQ0FERixFQUVFO0FBQUsscUJBQVksR0FBRUssb0JBQU9DLGFBQWMsSUFBR0Qsb0JBQU9FLFdBQVk7QUFBOUQsV0FDRSw2QkFBQyxlQUFEO0FBQVEsd0JBQWMsRUFBdEI7QUFDUSxvQkFEUjtBQUVRLHlCQUFjLE1BRnRCO0FBR1Esd0JBQWM7QUFBRUMsbUJBQU8sR0FBVDtBQUFjQyxvQkFBUTtBQUF0QixXQUh0QjtBQUlRO0FBSlIsV0FPSU4sS0FBS08sS0FBTCxDQUFXUixHQUFYLENBQWUsQ0FBQ1MsSUFBRCxFQUFPUCxDQUFQLEtBQ2I7QUFBSyxlQUFNLFlBQVdBLENBQUU7QUFBeEIsV0FDRSw2QkFBQyxhQUFEO0FBQU0sZ0JBQU1PO0FBQVosVUFERixDQURGLENBUEosQ0FERixDQUZGLENBREssQ0FBUDtBQXFCRDs7QUFFRCxhQUNFLDBDQUNFO0FBQUksbUJBQVU7QUFBZCxTQUFnQ1gsT0FBaEMsTUFERixFQUdJRCxNQUFNRyxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQLEtBQ1I7QUFBSyxtQkFBV0Msb0JBQU9PLGVBQXZCO0FBQXdDLGFBQU0sZ0JBQWVSLENBQUU7QUFBL0QsU0FDRTtBQUFPLGNBQUssVUFBWjtBQUF1QixZQUFLLFlBQVdBLENBQUUsRUFBekM7QUFBNEMsbUJBQVdDLG9CQUFPUTtBQUE5RCxRQURGLEVBRUU7QUFBTyxtQkFBVSxpQkFBakI7QUFBbUMsaUJBQVUsWUFBV1QsQ0FBRTtBQUExRCxTQUNHRCxLQUFLVyxLQURSLEVBRUU7QUFBTSxtQkFBV1Qsb0JBQU9VO0FBQXhCLFFBRkYsQ0FGRixFQU1FO0FBQUssbUJBQVksR0FBRVYsb0JBQU9DLGFBQWMsSUFBR0Qsb0JBQU9FLFdBQVk7QUFBOUQsU0FDRSw2QkFBQyxlQUFEO0FBQVEsc0JBQWMsRUFBdEI7QUFDUSxrQkFEUjtBQUVRLHVCQUFjLE1BRnRCO0FBR1Esc0JBQWM7QUFBRUMsaUJBQU8sR0FBVDtBQUFjQyxrQkFBUTtBQUF0QixTQUh0QjtBQUlRO0FBSlIsU0FPSU4sS0FBS08sS0FBTCxDQUFXUixHQUFYLENBQWUsQ0FBQ1MsSUFBRCxFQUFPUCxDQUFQLEtBQ2I7QUFBSyxhQUFNLFlBQVdBLENBQUU7QUFBeEIsU0FDRSw2QkFBQyxhQUFEO0FBQU0sY0FBTU87QUFBWixRQURGLENBREYsQ0FQSixDQURGLENBTkYsQ0FERixDQUhKLENBREY7QUFnQ0QsS0FsRTZDO0FBQUE7O0FBb0U5Q0ssV0FBUztBQUNQLFVBQU07QUFBRUM7QUFBRixRQUFXLEtBQUtDLEtBQXRCOztBQUVBLFFBQUksdUJBQVNELElBQVQsQ0FBSixFQUFvQjtBQUNsQixhQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNO0FBQUVqQixhQUFGO0FBQVdtQixnQkFBWDtBQUF1QnBCO0FBQXZCLFFBQWlDa0IsSUFBdkM7QUFFQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNHLEtBQUtuQixXQUFMLENBQWlCQyxLQUFqQixFQUF3QkMsT0FBeEIsQ0FESCxDQURGO0FBVUQ7O0FBdkY2QyxDLFNBQ3ZDb0IsUyxHQUFZO0FBQ2pCSCxRQUFNSSxtQkFBVUM7QUFEQyxDLFNBSVpDLFksR0FBZTtBQUNwQk4sUUFBTTtBQURjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHhCOztBQUVBOzs7O0FBRUEsTUFBTU8sWUFBWSx5QkFDaEJDLFVBQVU7QUFBRVIsUUFBTVEsTUFBTUMsR0FBTixDQUFVVCxJQUFWLENBQWVVO0FBQXZCLENBQVYsQ0FEZ0IsRUFFaEIvQixnQkFGZ0IsQ0FBbEI7ZUFJZTtBQUNiNEIsV0FEYTtBQUViSSxXQUFTLEVBRkk7QUFHYkMsaUJBQWU7QUFIRixDIiwiZmlsZSI6Im1rdC1zZWN0aW9uNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3NlY3Rpb24zL3NlY3Rpb24zLmNtLnNjc3MnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdhcHAtdjIvbW9kdWxlcy9zaGFyZWQvU3dpcGVyJztcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwvbW9kdWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb240IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YToge31cbiAgfTtcblxuICByZW5kZXJDYXJkcyA9IChpdGVtcywgaGVhZGluZykgPT4ge1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgIDxkaXYga2V5PXtgc2VjdGlvbjRfYm94XyR7aX1gfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZjE4IGZ3OSBwMTUgdGV4dC1jZW50ZXJcIj57aGVhZGluZyB8fCAnUmVjZW50bHkgQm9va2VkIFRvdXIgUGFja2FnZXMnfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zbGlkZXJDb250ZW50fSAke3N0eWxlcy5zbGlkZXJTcGFjZX0gc2VjdGlvbi1jYXJkc2B9PlxuICAgICAgICAgICAgPFN3aXBlciBzcGFjZUJldHdlZW49ezEwfVxuICAgICAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAyODAsIGhlaWdodDogMTIyIH19XG4gICAgICAgICAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbS5jYXJkcy5tYXAoKGNhcmQsIGkpID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHNlY3Rpb240XyR7aX1gfSA+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNhcmQ9e2NhcmR9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTggZnc5IHAxNSBiYlwiPntoZWFkaW5nfSA8L2gyPlxuICAgICAgICB7XG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bkNvbnRlbnR9IGtleT17YHNlY3Rpb240X2JveF8ke2l9YH0+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17YHNsaWRlcklkXyR7aX1gfSBjbGFzc05hbWU9e3N0eWxlcy5jaGVja30gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImYxNiBwZmMzIHAxNSBiYlwiIGh0bWxGb3I9e2BzbGlkZXJJZF8ke2l9YH0+XG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2xpZGVyQ29udGVudH0gJHtzdHlsZXMuc2xpZGVyU3BhY2V9IHNlY3Rpb24tY2FyZHNgfT5cbiAgICAgICAgICAgICAgICA8U3dpcGVyIHNwYWNlQmV0d2Vlbj17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzc3JBbmltYXRpb249e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAxMjIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYXJkcy5tYXAoKGNhcmQsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BzZWN0aW9uNF8ke2l9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2FyZD17Y2FyZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKF9pc0VtcHR5KGRhdGEpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGhlYWRpbmcsIGJ1dHRvblRleHQsIGl0ZW1zIH0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBtYjIgcmVsYXRpdmVcIj5cbiAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoaXRlbXMsIGhlYWRpbmcpfVxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17YHBsOCBwcjggejkgJHtzdHlsZXMuYnRuRml4ZWR9YH0+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZSB0ZXh0LWNlbnRlciBmMTYgYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zY3JvbGxUb0Zvcm1IYW5kbGVyfT57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+Ki99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgU2VjdGlvbjQgZnJvbSAnLi9TZWN0aW9uNCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7IGRhdGE6IHN0YXRlLm1rdC5kYXRhLnNlY3Rpb240LCB9KVxuKShTZWN0aW9uNCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7fSxcbiAgZGVmYXVsdEFjdGlvbjogbnVsbCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9