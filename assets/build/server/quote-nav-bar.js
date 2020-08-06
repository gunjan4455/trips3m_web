require("source-map-support").install();
exports.ids = ["quote-nav-bar"];
exports.modules = {

/***/ "./app-v2/modules/quote/navBar/NavBar.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/quote/navBar/NavBar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _DetailNav = _interopRequireDefault(__webpack_require__(/*! modules/shared/DetailNav */ "./app-v2/modules/shared/DetailNav.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NavBar = ({
  options,
  trackSegment
}) => {
  return _react.default.createElement("div", {
    className: "mt8"
  }, _react.default.createElement(_reactStickynode.default, {
    enabled: true,
    top: 0,
    innerZ: 4
  }, _react.default.createElement(_DetailNav.default, {
    options: options,
    trackSegment: trackSegment
  })));
};

NavBar.propTypes = {
  options: _propTypes.default.array.isRequired,
  trackSegment: _propTypes.default.func
};
NavBar.defaultProps = {
  trackSegment: () => {}
};
var _default = NavBar;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/navBar/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/quote/navBar/index.js ***!
  \**********************************************/
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

var _NavBar = _interopRequireDefault(__webpack_require__(/*! ./NavBar */ "./app-v2/modules/quote/navBar/NavBar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  options: (0, _quoteList2.getNavOptions)((0, _quoteList2.getCurrentQuote)(state))
}))(_NavBar.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/DetailNav.js":
/*!********************************************!*\
  !*** ./app-v2/modules/shared/DetailNav.js ***!
  \********************************************/
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

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GUl = _glamorous.default.div({
  'overflowX': 'scroll',
  boxShadow: '0px 3px 6px #ccc',
  '& ul li': {
    listStyle: 'none',
    '& a': {
      whiteSpace: 'nowrap',
      '&:after': {
        height: '2px',
        width: '100%',
        content: '\' \'',
        position: 'absolute',
        bottom: '0',
        left: '0'
      },
      '&:hover': {
        backgroundColor: '#efefef',
        color: '#009688',
        '&:after': {
          backgroundColor: '#009688'
        }
      },
      '&.active': {
        backgroundColor: '#efefef',
        color: '#009688',
        '&:after': {
          backgroundColor: '#009688'
        }
      }
    }
  }
});

const DetailNav = ({
  options,
  trackSegment
}) => {
  function handleNavClick(navSection) {
    trackSegment({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: 'Horizontal Carousel Bar',
      object: navSection,
      cta: navSection
    });
  }

  const onSetActive = targetId => {
    const activelink = document.querySelector('#' + targetId + '-triggerlink');

    if (activelink && activelink.scrollIntoView) {
      activelink.scrollIntoView({
        inline: "center"
      });
    }
  };

  return _react.default.createElement(GUl, {
    className: "flex spaceBetween sbcw"
  }, _react.default.createElement("div", {
    className: "row noBeforeAfter flexFull flex alignCenter"
  }, _react.default.createElement("div", {
    className: "col-xs-12 pr8"
  }, _react.default.createElement("ul", {
    className: "flex alignCenter m0 p0"
  }, options.map((newLi, index) => _react.default.createElement("li", {
    key: index
  }, _react.default.createElement(_reactScroll.Link, {
    activeClass: "active",
    className: "relative f14 fw7 pfc3 block p24 pt15 pb15",
    onClick: () => handleNavClick(newLi.title),
    to: newLi.section_name,
    id: newLi.section_name + '-triggerlink',
    onSetActive: onSetActive,
    spy: true,
    smooth: true,
    isDynamic: true,
    duration: 500,
    offset: -60
  }, newLi.title)))))));
};

DetailNav.propTypes = {
  options: _propTypes.default.array.isRequired,
  trackSegment: _propTypes.default.func
};
DetailNav.defaultProps = {
  trackSegment: () => {}
};
var _default = DetailNav;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9uYXZCYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL25hdkJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvRGV0YWlsTmF2LmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsIm9wdGlvbnMiLCJ0cmFja1NlZ21lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiY29udGFpbmVyIiwic3RhdGUiLCJ3ZWJ2aWV3QWN0aW9ucyIsImZldGNoUXVvdGVzRGF0YSIsImxvYWRDb25zdGFudHMiLCJmZXRjaFByZURlZmluZWRNZXNzYWdlcyIsImZldGNoRGlzY291bnRPZmZlcnMiLCJzd2l0Y2hRdW90ZSIsInVwZGF0ZVJlcXVlc3RlZFRyaXBJZCIsIkdVbCIsImdsYW1vcm91cyIsImRpdiIsImJveFNoYWRvdyIsImxpc3RTdHlsZSIsIndoaXRlU3BhY2UiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkRldGFpbE5hdiIsImhhbmRsZU5hdkNsaWNrIiwibmF2U2VjdGlvbiIsImV2ZW50IiwiT1JHQU5JU01fQ0xJQ0tFRCIsInNlY3Rpb24iLCJvYmplY3QiLCJjdGEiLCJvblNldEFjdGl2ZSIsInRhcmdldElkIiwiYWN0aXZlbGluayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEludG9WaWV3IiwiaW5saW5lIiwibWFwIiwibmV3TGkiLCJpbmRleCIsInRpdGxlIiwic2VjdGlvbl9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxNQUFNQSxTQUFTLENBQUM7QUFB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RDVEO0FBRU0sUUFBSUgsTUFBTUcsWUFBTixHQUFxQixjQUYvQjtBQUdNLGlCQUFhWCxXQUhuQjtBQUlNLGFBSk47QUFJVSxnQkFKVjtBQUlpQixtQkFKakI7QUFJMkIsY0FBVSxHQUpyQztBQUkwQyxZQUFRLENBQUM7QUFKbkQsS0FLR1EsTUFBTUUsS0FMVCxDQURGLENBREYsQ0FGSixDQURGLENBREYsQ0FETSxDQUFSO0FBcUJELENBdENEOztBQXdDQWxCLFVBQVU3QixTQUFWLEdBQXNCO0FBQ3BCRixXQUFTRyxtQkFBVUMsS0FBVixDQUFnQkMsVUFETDtBQUVwQkosZ0JBQWNFLG1CQUFVRztBQUZKLENBQXRCO0FBS0F5QixVQUFVeEIsWUFBVixHQUF5QjtBQUN2Qk4sZ0JBQWMsTUFBTSxDQUFFO0FBREMsQ0FBekI7ZUFJZThCLFMiLCJmaWxlIjoicXVvdGUtbmF2LWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcblxuaW1wb3J0IERldGFpbE5hdiBmcm9tICdtb2R1bGVzL3NoYXJlZC9EZXRhaWxOYXYnO1xuXG5jb25zdCBOYXZCYXIgPSAoeyBvcHRpb25zLCB0cmFja1NlZ21lbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQ4XCI+XG4gICAgICA8U3RpY2t5IGVuYWJsZWQ9e3RydWV9IHRvcD17MH0gaW5uZXJaPXs0fT5cbiAgICAgICAgPERldGFpbE5hdiBvcHRpb25zPXtvcHRpb25zfSB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudH0gLz5cbiAgICAgIDwvU3RpY2t5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTmF2QmFyLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbk5hdkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IGxvYWQgYXMgZmV0Y2hRdW90ZXNEYXRhIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlTGlzdCc7XG5pbXBvcnQgeyBsb2FkIGFzIGxvYWRDb25zdGFudHMgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvY29uc3RhbnRzJztcbmltcG9ydCB7IHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7IGZldGNoRGlzY291bnRPZmZlcnMgfSBmcm9tICdtb2R1bGVzL2Rpc2NvdW50RW5naW5lL2FjdGlvbic7XG5pbXBvcnQgeyBmZXRjaFByZURlZmluZWRNZXNzYWdlcyB9IGZyb20gJ21vZHVsZXMvcGRtL2FjdGlvbic7XG5cbmltcG9ydCB7IGdldE5hdk9wdGlvbnMsIGdldEN1cnJlbnRRdW90ZSB9IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVMaXN0JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXInO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgb3B0aW9uczogZ2V0TmF2T3B0aW9ucyhnZXRDdXJyZW50UXVvdGUoc3RhdGUpKVxuICB9KSkoTmF2QmFyKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICB3ZWJ2aWV3QWN0aW9uczogW2ZldGNoUXVvdGVzRGF0YSwgbG9hZENvbnN0YW50cywgZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMsXG4gICAgZmV0Y2hEaXNjb3VudE9mZmVycywgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZF1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR1VsID0gZ2xhbW9yb3VzLmRpdih7XG4gICdvdmVyZmxvd1gnOiAnc2Nyb2xsJyxcbiAgYm94U2hhZG93OiAnMHB4IDNweCA2cHggI2NjYycsXG4gICcmIHVsIGxpJzoge1xuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICcmIGEnOiB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBjb250ZW50OiAnXFwnIFxcJycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206ICcwJyxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWZlZmVmJyxcbiAgICAgICAgY29sb3I6ICcjMDA5Njg4JyxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOTY4OCcsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxuICAgICAgICBjb2xvcjogJyMwMDk2ODgnLFxuICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5Njg4J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuY29uc3QgRGV0YWlsTmF2ID0gKHsgb3B0aW9ucywgdHJhY2tTZWdtZW50IH0pID0+IHtcbiAgZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2sobmF2U2VjdGlvbikge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIHNlY3Rpb246ICdIb3Jpem9udGFsIENhcm91c2VsIEJhcicsXG4gICAgICBvYmplY3Q6IG5hdlNlY3Rpb24sXG4gICAgICBjdGE6IG5hdlNlY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG9uU2V0QWN0aXZlID0gKHRhcmdldElkKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGFyZ2V0SWQgKyAnLXRyaWdnZXJsaW5rJyk7XG4gICAgaWYgKGFjdGl2ZWxpbmsgJiYgYWN0aXZlbGluay5zY3JvbGxJbnRvVmlldykge1xuICAgICAgYWN0aXZlbGluay5zY3JvbGxJbnRvVmlldyh7IGlubGluZTogXCJjZW50ZXJcIiB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuICg8R1VsIGNsYXNzTmFtZT1cImZsZXggc3BhY2VCZXR3ZWVuIHNiY3dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBub0JlZm9yZUFmdGVyIGZsZXhGdWxsIGZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHByOFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBtMCBwMFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbnMubWFwKChuZXdMaSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGYxNCBmdzcgcGZjMyBibG9jayBwMjQgcHQxNSBwYjE1XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZDbGljayhuZXdMaS50aXRsZSl9IHRvPXtuZXdMaS5zZWN0aW9uX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e25ld0xpLnNlY3Rpb25fbmFtZSArICctdHJpZ2dlcmxpbmsnfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2V0QWN0aXZlPXtvblNldEFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICBzcHkgc21vb3RoIGlzRHluYW1pYyBkdXJhdGlvbj17NTAwfSBvZmZzZXQ9ey02MH0+XG4gICAgICAgICAgICAgICAgICB7bmV3TGkudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L0dVbD4pO1xufTtcblxuRGV0YWlsTmF2LnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkRldGFpbE5hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=