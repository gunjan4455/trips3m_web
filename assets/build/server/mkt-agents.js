require("source-map-support").install();
exports.ids = ["mkt-agents"];
exports.modules = {

/***/ "./app-v2/modules/mkt/agents/Agents.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/mkt/agents/Agents.js ***!
  \*********************************************/
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

var _Swiper = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/shared/Swiper */ "./app-v2/modules/shared/Swiper.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./components/Card */ "./app-v2/modules/mkt/agents/components/Card.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Agents = (_temp = _class = class Agents extends _react.Component {
  render() {
    const {
      data
    } = this.props;

    if ((0, _isEmpty2.default)(data)) {
      return null;
    }

    const {
      heading,
      items
    } = data;
    return _react.default.createElement("div", {
      className: "col-xs-12 p0 pt24 pb24 text-center sbcw mb2"
    }, _react.default.createElement("h2", {
      className: "f18 fw9 text-center pfc3 mb8"
    }, heading), _react.default.createElement(_Swiper.default, {
      type: "dots",
      spaceBetween: 10,
      isFullWidthSwiper: true,
      ssrAnimation: {
        width: 80,
        height: 80
      }
    }, items.map((card, i) => {
      return _react.default.createElement(_Card.default, {
        card: card,
        key: i
      });
    })));
  }

}, _class.propTypes = {
  data: _propTypes.default.object
}, _class.defaultProps = {
  data: {}
}, _temp);
exports.default = Agents;

/***/ }),

/***/ "./app-v2/modules/mkt/agents/components/Card.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/mkt/agents/components/Card.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _cardCm = _interopRequireDefault(__webpack_require__(/*! ./card.cm.scss */ "./app-v2/modules/mkt/agents/components/card.cm.scss"));

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderStars = rating => {
  const filledStars = Array.from({
    length: 5 - (5 - rating)
  });
  const emptyStars = Array.from({
    length: 5 - rating
  });
  return _react.default.createElement("ul", {
    className: _cardCm.default.placement1
  }, [...filledStars.map((_, i) => _react.default.createElement("li", {
    key: `filled_${i}`,
    className: _cardCm.default.starsList
  }, _react.default.createElement(_Icon.StarIcon, null))), ...emptyStars.map((_, i) => _react.default.createElement("li", {
    key: `unfilled_${i}`,
    className: _cardCm.default.starsList
  }, _react.default.createElement(_Icon.StarIconEmpty, null)))]);
};

const Card = ({
  card
}) => {
  const {
    name,
    rating,
    image,
    heading,
    content
  } = card;
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "col-xs-12 p0"
  }, _react.default.createElement("div", {
    className: `text-center ${_cardCm.default.agentReviewInfo}`
  }, _react.default.createElement("div", {
    className: `sbcw radius100 overflowh relative iblock mb8 ${_cardCm.default.agentImage}`
  }, _react.default.createElement(_Img.default, {
    alt: image.alt,
    src: `${_appConfig.default.assets.images}/${image.url}`,
    width: 80,
    height: 80
  })), _react.default.createElement("p", {
    className: "f14 fw9 mt15"
  }, name), _react.default.createElement("div", {
    className: _cardCm.default.rating
  }, renderStars(rating))), _react.default.createElement("div", {
    className: "sbcw pl32 pr32 relative"
  }, _react.default.createElement("div", {
    className: "wfull"
  }, _react.default.createElement("p", {
    className: "f16 fw9 mb15 mt15"
  }, heading), _react.default.createElement("p", {
    className: "f14p text-justify"
  }, content)))));
};

Card.propTypes = {
  card: _propTypes.default.object.isRequired
};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/mkt/agents/components/card.cm.scss":
/*!***********************************************************!*\
  !*** ./app-v2/modules/mkt/agents/components/card.cm.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"starsList": "_1eoPcvHR323XAinG-nHUuA",
	"placement1": "_2tArO2k6nblwHN_HrZcXzQ",
	"agentImage": "_1ujw4vALmAfO2v6t9N25M5"
};

/***/ }),

/***/ "./app-v2/modules/mkt/agents/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/mkt/agents/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Agents = _interopRequireDefault(__webpack_require__(/*! ./Agents */ "./app-v2/modules/mkt/agents/Agents.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.agents
}))(_Agents.default);
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Swiper.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/shared/Swiper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js"));

__webpack_require__(/*! ./Swiper.scss */ "./app-v2/modules/shared/Swiper.scss");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Swiper = (_temp2 = _class = class Swiper extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, this.renderServer = ({
      width,
      height
    }) => {
      return _react.default.createElement("ul", {
        style: {
          overflowX: 'scroll',
          width: width,
          display: 'inline-flex'
        }
      }, this.props.children.map((c, i) => {
        const __html = _server.default.renderToStaticMarkup(c).replace(/<img([\w\W]+?)\/>/g, `<div style="width:${width}px; height: ${height}px"`);

        return _react.default.createElement("li", {
          className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild',
          key: i
        }, _react.default.createElement("div", {
          className: 'lazyloading',
          style: {
            height: `${height}px`,
            width: '100%'
          },
          dangerouslySetInnerHTML: {
            __html: __html
          }
        }));
      }));
    }, this.renderEmptyClient = ({
      width,
      height
    }) => {
      return _react.default.createElement("div", {
        style: {
          width: width,
          height: height,
          overflow: 'hidden'
        }
      }, this.props.children.map((child, i) => {
        return _react.default.createElement("span", {
          key: i,
          className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild'
        }, child);
      }));
    }, _temp;
  }

  componentDidMount() {
    const swiperAsync = () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-id-swiper */ "react-id-swiper", 7)).then(s => this.setState({
      ReactIdSwiper: s.default
    })); // if (this.props.loadOnDocumentReady) {


    document.readyState === 'complete' ? swiperAsync() : window.addEventListener('load', swiperAsync); // } else {
    //   window.addEventListener('load', swiperAsync);
    // }
  }

  render() {
    const {
      ReactIdSwiper
    } = this.state;
    const {
      isSmallSwiper,
      isFullWidthSwiper,
      ssrAnimation,
      type
    } = this.props;

    if (true) {
      return this.renderServer(ssrAnimation);
    }

    if (!ReactIdSwiper) {
      return this.renderEmptyClient(ssrAnimation);
    } else {
      let swiperProps = _objectSpread({}, this.props);

      if (type === 'dots') {
        swiperProps = _objectSpread({}, swiperProps, {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      }

      return _react.default.createElement("div", null, _react.default.createElement(ReactIdSwiper, swiperProps, this.props.children.map((child, i) => {
        return _react.default.createElement("span", {
          key: i,
          className: this.props.children.length > 1 && !isSmallSwiper && !isFullWidthSwiper ? 'swiperCustomWidth block' : isSmallSwiper && !isFullWidthSwiper ? 'smallSwiperContainer block' : isFullWidthSwiper ? 'wfull' : 'swiperSingleChild wfull block'
        }, child);
      })), type === 'dots' ? _react.default.createElement("div", {
        className: "swiper-pagination"
      }) : null);
    }
  }

}, _class.propTypes = {
  type: _propTypes.default.oneOf(['dots', '']),
  ssrAnimation: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),
  children: _propTypes.default.array,
  isSmallSwiper: _propTypes.default.bool,
  isFullWidthSwiper: _propTypes.default.bool,
  loadOnDocumentReady: _propTypes.default.bool
}, _class.defaultProps = {
  type: '',
  ssrAnimation: {},
  children: [],
  isSmallSwiper: false,
  isFullWidthSwiper: false,
  loadOnDocumentReady: false
}, _temp2);
exports.default = Swiper;

/***/ }),

/***/ "./app-v2/modules/shared/Swiper.scss":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Swiper.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"swiper-container": "_2SGsY",
	"swiper-container-no-flexbox": "_173FA",
	"swiper-slide": "_3l5Ez",
	"swiper-container-vertical": "_EDIKz",
	"swiper-wrapper": "_3iyHG",
	"swiper-container-android": "_2BOXh",
	"swiper-container-multirow": "_bfTCe",
	"swiper-container-free-mode": "_JLJyK",
	"swiper-invisible-blank-slide": "_3W2Bt",
	"swiper-container-autoheight": "_21AFL",
	"swiper-container-3d": "_3TFjd",
	"swiper-slide-shadow-left": "_2lzju",
	"swiper-slide-shadow-right": "_3mnxZ",
	"swiper-slide-shadow-top": "_24m3e",
	"swiper-slide-shadow-bottom": "_1pp84",
	"swiper-cube-shadow": "_1BpoK",
	"swiper-container-wp8-horizontal": "_3ZNy4",
	"swiper-container-wp8-vertical": "_1sjXx",
	"swiper-button-prev": "_3in4g",
	"swiper-button-next": "_3YojN",
	"swiper-button-disabled": "_1-TyU",
	"swiper-container-rtl": "_1iEtb",
	"swiper-button-white": "_21H-f",
	"swiper-button-black": "_2YjgO",
	"swiper-button-lock": "_1ITR_",
	"swiper-pagination": "_1N00r",
	"swiper-pagination-hidden": "_ok4uF",
	"swiper-pagination-fraction": "_2GHo_",
	"swiper-pagination-custom": "_3pHlx",
	"swiper-container-horizontal": "_1fJ9B",
	"swiper-pagination-bullets": "_2LuGe",
	"swiper-pagination-bullets-dynamic": "_1ygv0",
	"swiper-pagination-bullet": "_3KXb7",
	"swiper-pagination-bullet-active": "_2GU9M",
	"swiper-pagination-bullet-active-main": "_2awrv",
	"swiper-pagination-bullet-active-prev": "_lTG8m",
	"swiper-pagination-bullet-active-prev-prev": "_3Ousa",
	"swiper-pagination-bullet-active-next": "_1PG01",
	"swiper-pagination-bullet-active-next-next": "_2PAd0",
	"swiper-pagination-clickable": "_3z2HD",
	"swiper-pagination-progressbar": "_ekuMa",
	"swiper-pagination-progressbar-fill": "_1WBFp",
	"swiper-pagination-white": "_3ayfy",
	"swiper-pagination-black": "_234Qn",
	"swiper-pagination-lock": "_1llor",
	"swiper-scrollbar": "_XakcQ",
	"swiper-scrollbar-drag": "_2zI-z",
	"swiper-scrollbar-cursor-drag": "_16EAR",
	"swiper-scrollbar-lock": "_2tNPu",
	"swiper-zoom-container": "_1Pc0p",
	"swiper-slide-zoomed": "_3zkE-",
	"swiper-lazy-preloader": "_1CKB-",
	"swiper-preloader-spin": "_3308Y",
	"swiper-lazy-preloader-white": "_3BraI",
	"swiper-notification": "_1ZGxr",
	"swiper-container-fade": "_sEO85",
	"swiper-slide-active": "_2KjJF",
	"swiper-container-cube": "_2ERg0",
	"swiper-slide-next": "_3VoeL",
	"swiper-slide-prev": "_vpV_R",
	"swiper-container-flip": "_3y3os",
	"swiper-container-coverflow": "_2YrFp",
	"arrowleftSlider": "_3hZ7M",
	"slider-prev": "_1pqA6",
	"arrowContainer": "_2AxxO"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvYWdlbnRzL0FnZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvYWdlbnRzL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvYWdlbnRzL2NvbXBvbmVudHMvY2FyZC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21rdC9hZ2VudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU3dpcGVyLnNjc3MiXSwibmFtZXMiOlsiQWdlbnRzIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZGF0YSIsInByb3BzIiwiaGVhZGluZyIsIml0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJjYXJkIiwiaSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsInJlbmRlclN0YXJzIiwicmF0aW5nIiwiZmlsbGVkU3RhcnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJlbXB0eVN0YXJzIiwic3R5bGVzIiwicGxhY2VtZW50MSIsIl8iLCJzdGFyc0xpc3QiLCJDYXJkIiwibmFtZSIsImltYWdlIiwiY29udGVudCIsImFnZW50UmV2aWV3SW5mbyIsImFnZW50SW1hZ2UiLCJhbHQiLCJjb25maWciLCJhc3NldHMiLCJpbWFnZXMiLCJ1cmwiLCJpc1JlcXVpcmVkIiwiY29udGFpbmVyIiwic3RhdGUiLCJta3QiLCJhZ2VudHMiLCJhY3Rpb25zIiwiZGVmYXVsdEFjdGlvbiIsIlN3aXBlciIsInJlbmRlclNlcnZlciIsIm92ZXJmbG93WCIsImRpc3BsYXkiLCJjaGlsZHJlbiIsImMiLCJfX2h0bWwiLCJSZWFjdERPTSIsInJlbmRlclRvU3RhdGljTWFya3VwIiwicmVwbGFjZSIsInJlbmRlckVtcHR5Q2xpZW50Iiwib3ZlcmZsb3ciLCJjaGlsZCIsImNvbXBvbmVudERpZE1vdW50Iiwic3dpcGVyQXN5bmMiLCJ0aGVuIiwicyIsInNldFN0YXRlIiwiUmVhY3RJZFN3aXBlciIsImRlZmF1bHQiLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXNTbWFsbFN3aXBlciIsImlzRnVsbFdpZHRoU3dpcGVyIiwic3NyQW5pbWF0aW9uIiwidHlwZSIsIl9fU0VSVkVSX18iLCJzd2lwZXJQcm9wcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwiYm9vbCIsImFycmF5IiwibG9hZE9uRG9jdW1lbnRSZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7OztJQUVxQkEsTSxxQkFBTixNQUFNQSxNQUFOLFNBQXFCQyxnQkFBckIsQ0FBK0I7QUFTNUNDLFdBQVM7QUFDUCxVQUFNO0FBQUVDO0FBQUYsUUFBVyxLQUFLQyxLQUF0Qjs7QUFFQSxRQUFJLHVCQUFTRCxJQUFULENBQUosRUFBb0I7QUFDbEIsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTTtBQUFFRSxhQUFGO0FBQVdDO0FBQVgsUUFBcUJILElBQTNCO0FBRUEsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFJLGlCQUFVO0FBQWQsT0FBOENFLE9BQTlDLENBREYsRUFHSSw2QkFBQyxlQUFEO0FBQVEsWUFBSyxNQUFiO0FBQW9CLG9CQUFjLEVBQWxDO0FBQXNDLHlCQUFtQixJQUF6RDtBQUErRCxvQkFBYztBQUFFRSxlQUFPLEVBQVQ7QUFBYUMsZ0JBQVE7QUFBckI7QUFBN0UsT0FFSUYsTUFBTUcsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxLQUFhO0FBQ3JCLGFBQVEsNkJBQUMsYUFBRDtBQUFNLGNBQU1ELElBQVo7QUFBa0IsYUFBS0M7QUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJta3QtYWdlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Td2lwZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2VudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoX2lzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaGVhZGluZywgaXRlbXMgfSA9IGRhdGE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDAgcHQyNCBwYjI0IHRleHQtY2VudGVyIHNiY3cgbWIyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTggZnc5IHRleHQtY2VudGVyIHBmYzMgbWI4XCI+e2hlYWRpbmd9PC9oMj5cbiAgICAgICAge1xuICAgICAgICAgIDxTd2lwZXIgdHlwZT1cImRvdHNcIiBzcGFjZUJldHdlZW49ezEwfSBpc0Z1bGxXaWR0aFN3aXBlcj17dHJ1ZX0gc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA4MCB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXRlbXMubWFwKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8Q2FyZCBjYXJkPXtjYXJkfSBrZXk9e2l9IC8+KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkLmNtLnNjc3MnO1xuaW1wb3J0IHsgU3Rhckljb24sIFN0YXJJY29uRW1wdHkgfSBmcm9tICdhcHAvaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5jb25zdCByZW5kZXJTdGFycyA9IChyYXRpbmcpID0+IHtcbiAgY29uc3QgZmlsbGVkU3RhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IC0gKDUgLSByYXRpbmcpIH0pO1xuICBjb25zdCBlbXB0eVN0YXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSAtIHJhdGluZyB9KTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wbGFjZW1lbnQxfT5cbiAgICAgIHtbXG4gICAgICAgIC4uLmZpbGxlZFN0YXJzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2BmaWxsZWRfJHtpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzTGlzdH0+XG4gICAgICAgICAgICA8U3Rhckljb24gLz5cbiAgICAgICAgICA8L2xpPilcbiAgICAgICAgKSxcbiAgICAgICAgLi4uZW1wdHlTdGFycy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtgdW5maWxsZWRfJHtpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzTGlzdH0+XG4gICAgICAgICAgICA8U3Rhckljb25FbXB0eSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpLFxuICAgICAgXX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuY29uc3QgQ2FyZCA9ICh7IGNhcmQgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIHJhdGluZywgaW1hZ2UsIGhlYWRpbmcsIGNvbnRlbnQsIH0gPSBjYXJkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgJHtzdHlsZXMuYWdlbnRSZXZpZXdJbmZvfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2JjdyByYWRpdXMxMDAgb3ZlcmZsb3doIHJlbGF0aXZlIGlibG9jayBtYjggJHtzdHlsZXMuYWdlbnRJbWFnZX1gfT5cbiAgICAgICAgICAgPEltZyBhbHQ9e2ltYWdlLmFsdH0gc3JjPXtgJHtjb25maWcuYXNzZXRzLmltYWdlc30vJHtpbWFnZS51cmx9YH0gd2lkdGg9ezgwfSBoZWlnaHQ9ezgwfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmdzkgbXQxNVwiPntuYW1lfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ30+XG4gICAgICAgICAgICB7cmVuZGVyU3RhcnMocmF0aW5nKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwbDMyIHByMzIgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndmdWxsXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTYgZnc5IG1iMTUgbXQxNVwiPntoZWFkaW5nfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgdGV4dC1qdXN0aWZ5XCI+e2NvbnRlbnR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNhcmQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdGFyc0xpc3RcIjogXCJfMWVvUGN2SFIzMjNYQWluRy1uSFV1QVwiLFxuXHRcInBsYWNlbWVudDFcIjogXCJfMnRBck8yazZuYmx3SE5fSHJaY1h6UVwiLFxuXHRcImFnZW50SW1hZ2VcIjogXCJfMXVqdzR2QUxtQWZPMnY2dDlOMjVNNVwiXG59OyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBZ2VudHMgZnJvbSAnLi9BZ2VudHMnO1xuXG5jb25zdCBjb250YWluZXIgPSBjb25uZWN0KFxuICBzdGF0ZSA9PiAoeyBkYXRhOiBzdGF0ZS5ta3QuZGF0YS5hZ2VudHMsIH0pXG4pKEFnZW50cyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7fSxcbiAgZGVmYXVsdEFjdGlvbjogbnVsbCxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0ICcuL1N3aXBlci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydkb3RzJywgJyddKSxcbiAgICBzc3JBbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBpc1NtYWxsU3dpcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Z1bGxXaWR0aFN3aXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZE9uRG9jdW1lbnRSZWFkeTogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICcnLFxuICAgIHNzckFuaW1hdGlvbjoge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGlzU21hbGxTd2lwZXI6IGZhbHNlLFxuICAgIGlzRnVsbFdpZHRoU3dpcGVyOiBmYWxzZSxcbiAgICBsb2FkT25Eb2N1bWVudFJlYWR5OiBmYWxzZVxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgcmVuZGVyU2VydmVyID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17eyBvdmVyZmxvd1g6ICdzY3JvbGwnLCB3aWR0aDogd2lkdGgsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgX19odG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoYylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzxpbWcoW1xcd1xcV10rPylcXC8+L2csIGA8ZGl2IHN0eWxlPVwid2lkdGg6JHt3aWR0aH1weDsgaGVpZ2h0OiAke2hlaWdodH1weFwiYCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSA/ICdzd2lwZXJDdXN0b21XaWR0aCcgOidzd2lwZXJTaW5nbGVDaGlsZCd9ICBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2xhenlsb2FkaW5nJ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IF9faHRtbCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJFbXB0eUNsaWVudCA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2l9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGggPiAxID8gJ3N3aXBlckN1c3RvbVdpZHRoJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCd9PlxuICAgICAgICAgICAgICAgICAge2NoaWxkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3dpcGVyQXN5bmMgPSAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdzd2lwZXInICovICdyZWFjdC1pZC1zd2lwZXInKVxuICAgICAgICAudGhlbihzID0+IHRoaXMuc2V0U3RhdGUoeyBSZWFjdElkU3dpcGVyOiBzLmRlZmF1bHQgfSkpO1xuXG4gICAgLy8gaWYgKHRoaXMucHJvcHMubG9hZE9uRG9jdW1lbnRSZWFkeSkge1xuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgPyBzd2lwZXJBc3luYygpIDogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzd2lwZXJBc3luYyk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc3dpcGVyQXN5bmMpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IFJlYWN0SWRTd2lwZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpc1NtYWxsU3dpcGVyLCBpc0Z1bGxXaWR0aFN3aXBlciwgc3NyQW5pbWF0aW9uLCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKF9fU0VSVkVSX18pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNlcnZlcihzc3JBbmltYXRpb24pO1xuICAgIH1cblxuICAgIGlmICghUmVhY3RJZFN3aXBlcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRW1wdHlDbGllbnQoc3NyQW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN3aXBlclByb3BzID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgICBpZiAodHlwZSA9PT0gJ2RvdHMnKSB7XG4gICAgICAgIHN3aXBlclByb3BzID0geyAuLi5zd2lwZXJQcm9wcywgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfX07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFJlYWN0SWRTd2lwZXIgey4uLnN3aXBlclByb3BzfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgICAgIWlzU21hbGxTd2lwZXIgJiYgIWlzRnVsbFdpZHRoU3dpcGVyKSA/XG4gICAgICAgICAgICAgICAgJ3N3aXBlckN1c3RvbVdpZHRoIGJsb2NrJyA6IGlzU21hbGxTd2lwZXIgJiYgIWlzRnVsbFdpZHRoU3dpcGVyID9cbiAgICAgICAgICAgICAgICAgICdzbWFsbFN3aXBlckNvbnRhaW5lciBibG9jaycgOiBpc0Z1bGxXaWR0aFN3aXBlciA/XG4gICAgICAgICAgICAgICAgICAgICd3ZnVsbCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQgd2Z1bGwgYmxvY2snfT57Y2hpbGR9PC9zcGFuPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvUmVhY3RJZFN3aXBlcj5cbiAgICAgICAgICB7IHR5cGUgPT09ICdkb3RzJyA/IDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXBhZ2luYXRpb25cIiAvPiA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzd2lwZXItY29udGFpbmVyXCI6IFwiXzJTR3NZXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1uby1mbGV4Ym94XCI6IFwiXzE3M0ZBXCIsXG5cdFwic3dpcGVyLXNsaWRlXCI6IFwiXzNsNUV6XCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbFwiOiBcIl9FRElLelwiLFxuXHRcInN3aXBlci13cmFwcGVyXCI6IFwiXzNpeUhHXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkXCI6IFwiXzJCT1hoXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvd1wiOiBcIl9iZlRDZVwiLFxuXHRcInN3aXBlci1jb250YWluZXItZnJlZS1tb2RlXCI6IFwiX0pMSnlLXCIsXG5cdFwic3dpcGVyLWludmlzaWJsZS1ibGFuay1zbGlkZVwiOiBcIl8zVzJCdFwiLFxuXHRcInN3aXBlci1jb250YWluZXItYXV0b2hlaWdodFwiOiBcIl8yMUFGTFwiLFxuXHRcInN3aXBlci1jb250YWluZXItM2RcIjogXCJfM1RGamRcIixcblx0XCJzd2lwZXItc2xpZGUtc2hhZG93LWxlZnRcIjogXCJfMmx6anVcIixcblx0XCJzd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0XCI6IFwiXzNtbnhaXCIsXG5cdFwic3dpcGVyLXNsaWRlLXNoYWRvdy10b3BcIjogXCJfMjRtM2VcIixcblx0XCJzd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbVwiOiBcIl8xcHA4NFwiLFxuXHRcInN3aXBlci1jdWJlLXNoYWRvd1wiOiBcIl8xQnBvS1wiLFxuXHRcInN3aXBlci1jb250YWluZXItd3A4LWhvcml6b250YWxcIjogXCJfM1pOeTRcIixcblx0XCJzd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbFwiOiBcIl8xc2pYeFwiLFxuXHRcInN3aXBlci1idXR0b24tcHJldlwiOiBcIl8zaW40Z1wiLFxuXHRcInN3aXBlci1idXR0b24tbmV4dFwiOiBcIl8zWW9qTlwiLFxuXHRcInN3aXBlci1idXR0b24tZGlzYWJsZWRcIjogXCJfMS1UeVVcIixcblx0XCJzd2lwZXItY29udGFpbmVyLXJ0bFwiOiBcIl8xaUV0YlwiLFxuXHRcInN3aXBlci1idXR0b24td2hpdGVcIjogXCJfMjFILWZcIixcblx0XCJzd2lwZXItYnV0dG9uLWJsYWNrXCI6IFwiXzJZamdPXCIsXG5cdFwic3dpcGVyLWJ1dHRvbi1sb2NrXCI6IFwiXzFJVFJfXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb25cIjogXCJfMU4wMHJcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1oaWRkZW5cIjogXCJfb2s0dUZcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvblwiOiBcIl8yR0hvX1wiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbVwiOiBcIl8zcEhseFwiLFxuXHRcInN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbFwiOiBcIl8xZko5QlwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHNcIjogXCJfMkx1R2VcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWNcIjogXCJfMXlndjBcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRcIjogXCJfM0tYYjdcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlXCI6IFwiXzJHVTlNXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluXCI6IFwiXzJhd3J2XCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2XCI6IFwiX2xURzhtXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXZcIjogXCJfM091c2FcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHRcIjogXCJfMVBHMDFcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQtbmV4dFwiOiBcIl8yUEFkMFwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZVwiOiBcIl8zejJIRFwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyXCI6IFwiX2VrdU1hXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbFwiOiBcIl8xV0JGcFwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLXdoaXRlXCI6IFwiXzNheWZ5XCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYmxhY2tcIjogXCJfMjM0UW5cIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1sb2NrXCI6IFwiXzFsbG9yXCIsXG5cdFwic3dpcGVyLXNjcm9sbGJhclwiOiBcIl9YYWtjUVwiLFxuXHRcInN3aXBlci1zY3JvbGxiYXItZHJhZ1wiOiBcIl8yekktelwiLFxuXHRcInN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWdcIjogXCJfMTZFQVJcIixcblx0XCJzd2lwZXItc2Nyb2xsYmFyLWxvY2tcIjogXCJfMnROUHVcIixcblx0XCJzd2lwZXItem9vbS1jb250YWluZXJcIjogXCJfMVBjMHBcIixcblx0XCJzd2lwZXItc2xpZGUtem9vbWVkXCI6IFwiXzN6a0UtXCIsXG5cdFwic3dpcGVyLWxhenktcHJlbG9hZGVyXCI6IFwiXzFDS0ItXCIsXG5cdFwic3dpcGVyLXByZWxvYWRlci1zcGluXCI6IFwiXzMzMDhZXCIsXG5cdFwic3dpcGVyLWxhenktcHJlbG9hZGVyLXdoaXRlXCI6IFwiXzNCcmFJXCIsXG5cdFwic3dpcGVyLW5vdGlmaWNhdGlvblwiOiBcIl8xWkd4clwiLFxuXHRcInN3aXBlci1jb250YWluZXItZmFkZVwiOiBcIl9zRU84NVwiLFxuXHRcInN3aXBlci1zbGlkZS1hY3RpdmVcIjogXCJfMktqSkZcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWN1YmVcIjogXCJfMkVSZzBcIixcblx0XCJzd2lwZXItc2xpZGUtbmV4dFwiOiBcIl8zVm9lTFwiLFxuXHRcInN3aXBlci1zbGlkZS1wcmV2XCI6IFwiX3ZwVl9SXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1mbGlwXCI6IFwiXzN5M29zXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1jb3ZlcmZsb3dcIjogXCJfMllyRnBcIixcblx0XCJhcnJvd2xlZnRTbGlkZXJcIjogXCJfM2haN01cIixcblx0XCJzbGlkZXItcHJldlwiOiBcIl8xcHFBNlwiLFxuXHRcImFycm93Q29udGFpbmVyXCI6IFwiXzJBeHhPXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==