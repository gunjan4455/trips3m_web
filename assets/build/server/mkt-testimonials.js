require("source-map-support").install();
exports.ids = ["mkt-testimonials"];
exports.modules = {

/***/ "./app-v2/modules/mkt/testimonials/Testimonials.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/mkt/testimonials/Testimonials.js ***!
  \*********************************************************/
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

var _Card = _interopRequireDefault(__webpack_require__(/*! ./components/Card */ "./app-v2/modules/mkt/testimonials/components/Card.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Testimonials = (_temp = _class = class Testimonials extends _react.Component {
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
      className: "col-xs-12 p0 p24 pl0 pr0 text-center sbcw mb2"
    }, _react.default.createElement("h2", {
      className: "f18 fw9 text-center pfc3 mb15"
    }, heading), _react.default.createElement(_Swiper.default, {
      type: "dots",
      isFullWidthSwiper: true,
      ssrAnimation: {
        width: 330,
        height: 225
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
exports.default = Testimonials;

/***/ }),

/***/ "./app-v2/modules/mkt/testimonials/components/Card.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/mkt/testimonials/components/Card.js ***!
  \************************************************************/
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

var _cardCm = _interopRequireDefault(__webpack_require__(/*! ./card.cm.scss */ "./app-v2/modules/mkt/testimonials/components/card.cm.scss"));

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
    image,
    heading,
    content,
    author
  } = card;
  return _react.default.createElement("div", {
    className: "col-xs-12"
  }, _react.default.createElement(_Img.default, {
    alt: image.alt,
    src: `${_appConfig.default.assets.images}/${image.url}`,
    width: 330,
    height: 225
  }), _react.default.createElement("h3", {
    className: "f16 fw9 mt15 mb15"
  }, heading), _react.default.createElement("p", {
    className: "f14 pfc3 mb15 mt15 text-justify"
  }, content), _react.default.createElement("div", {
    className: _cardCm.default.RatingDiv
  }, renderStars(author.rating)), _react.default.createElement("div", {
    className: "col-xs-12 mt8"
  }, _react.default.createElement("div", {
    className: "flex alignCenter justifyCenter"
  }, _react.default.createElement("div", {
    className: `p0 radius100 overflowh sbc5 mr15 ${_cardCm.default.travelImage}`
  }, _react.default.createElement(_Img.default, {
    alt: author.image.alt,
    src: `${_appConfig.default.assets.images}/${author.image.url}`,
    width: 35,
    height: 35
  })), _react.default.createElement("div", {
    className: "pr0 pt5 pb5 text-center iblock"
  }, _react.default.createElement("p", {
    className: "f14 fw9"
  }, author.name), _react.default.createElement("p", {
    className: "f12"
  }, _react.default.createElement("span", {
    className: "pfc4"
  }, author.from))))));
};

Card.propTypes = {
  card: _propTypes.default.object.isRequired
};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/mkt/testimonials/components/card.cm.scss":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/mkt/testimonials/components/card.cm.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"author": "_24LEueSnI7TWV469Ev6oEx",
	"travelImage": "_1D7F3kLexbzkjGkrkcf_Qi",
	"starsList": "_1eoPcvHR323XAinG-nHUuA",
	"placement1": "_2tArO2k6nblwHN_HrZcXzQ"
};

/***/ }),

/***/ "./app-v2/modules/mkt/testimonials/index.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/mkt/testimonials/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Testimonials = _interopRequireDefault(__webpack_require__(/*! ./Testimonials */ "./app-v2/modules/mkt/testimonials/Testimonials.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.testimonials
}))(_Testimonials.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvdGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvdGVzdGltb25pYWxzL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3QvdGVzdGltb25pYWxzL2NvbXBvbmVudHMvY2FyZC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21rdC90ZXN0aW1vbmlhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU3dpcGVyLnNjc3MiXSwibmFtZXMiOlsiVGVzdGltb25pYWxzIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZGF0YSIsInByb3BzIiwiaGVhZGluZyIsIml0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJjYXJkIiwiaSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsInJlbmRlclN0YXJzIiwicmF0aW5nIiwiZmlsbGVkU3RhcnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJlbXB0eVN0YXJzIiwic3R5bGVzIiwicGxhY2VtZW50MSIsIl8iLCJzdGFyc0xpc3QiLCJDYXJkIiwiaW1hZ2UiLCJjb250ZW50IiwiYXV0aG9yIiwiYWx0IiwiY29uZmlnIiwiYXNzZXRzIiwiaW1hZ2VzIiwidXJsIiwiUmF0aW5nRGl2IiwidHJhdmVsSW1hZ2UiLCJuYW1lIiwiaXNSZXF1aXJlZCIsImNvbnRhaW5lciIsInN0YXRlIiwibWt0IiwidGVzdGltb25pYWxzIiwiYWN0aW9ucyIsImRlZmF1bHRBY3Rpb24iLCJTd2lwZXIiLCJyZW5kZXJTZXJ2ZXIiLCJvdmVyZmxvd1giLCJkaXNwbGF5IiwiY2hpbGRyZW4iLCJjIiwiX19odG1sIiwiUmVhY3RET00iLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInJlcGxhY2UiLCJyZW5kZXJFbXB0eUNsaWVudCIsIm92ZXJmbG93IiwiY2hpbGQiLCJjb21wb25lbnREaWRNb3VudCIsInN3aXBlckFzeW5jIiwidGhlbiIsInMiLCJzZXRTdGF0ZSIsIlJlYWN0SWRTd2lwZXIiLCJkZWZhdWx0IiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzU21hbGxTd2lwZXIiLCJpc0Z1bGxXaWR0aFN3aXBlciIsInNzckFuaW1hdGlvbiIsInR5cGUiLCJfX1NFUlZFUl9fIiwic3dpcGVyUHJvcHMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsImJvb2wiLCJhcnJheSIsImxvYWRPbkRvY3VtZW50UmVhZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFkscUJBQU4sTUFBTUEsWUFBTixTQUEyQkMsZ0JBQTNCLENBQXFDO0FBU2xEQyxXQUFTO0FBQ1AsVUFBTTtBQUFFQztBQUFGLFFBQVcsS0FBS0MsS0FBdEI7O0FBRUEsUUFBSSx1QkFBU0QsSUFBVCxDQUFKLEVBQW9CO0FBQ2xCLGFBQU8sSUFBUDtBQUNEOztBQUVELFVBQU07QUFBRUUsYUFBRjtBQUFXQztBQUFYLFFBQXFCSCxJQUEzQjtBQUVBLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSSxpQkFBVTtBQUFkLE9BQStDRSxPQUEvQyxDQURGLEVBR0ksNkJBQUMsZUFBRDtBQUFRLFlBQUssTUFBYjtBQUFvQix5QkFBbUIsSUFBdkM7QUFBNkMsb0JBQWM7QUFBRUUsZUFBTyxHQUFUO0FBQWNDLGdCQUFRO0FBQXRCO0FBQTNELE9BRUlGLE1BQU1HLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU9DLENBQVAsS0FBYTtBQUNyQixhQUFRLDZCQUFDLGFBQUQ7QUFB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QUFVLEVBSFU7QUFJcEJvQixpQkFBZSxLQUpLO0FBS3BCQyxxQkFBbUIsS0FMQztBQU1wQlksdUJBQXFCO0FBTkQsQzs7Ozs7Ozs7Ozs7O0FDaEJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6Im1rdC10ZXN0aW1vbmlhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Td2lwZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW1vbmlhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7fVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoX2lzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgaGVhZGluZywgaXRlbXMgfSA9IGRhdGE7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDAgcDI0IHBsMCBwcjAgdGV4dC1jZW50ZXIgc2JjdyBtYjJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImYxOCBmdzkgdGV4dC1jZW50ZXIgcGZjMyBtYjE1XCI+e2hlYWRpbmd9PC9oMj5cbiAgICAgICAge1xuICAgICAgICAgIDxTd2lwZXIgdHlwZT1cImRvdHNcIiBpc0Z1bGxXaWR0aFN3aXBlcj17dHJ1ZX0gc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAzMzAsIGhlaWdodDogMjI1IH19ID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXRlbXMubWFwKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8Q2FyZCBjYXJkPXtjYXJkfSBrZXk9e2l9IC8+KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkLmNtLnNjc3MnO1xuaW1wb3J0IHsgU3Rhckljb24sIFN0YXJJY29uRW1wdHkgfSBmcm9tICdhcHAvaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5jb25zdCByZW5kZXJTdGFycyA9IChyYXRpbmcpID0+IHtcbiAgY29uc3QgZmlsbGVkU3RhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IC0gKDUgLSByYXRpbmcpIH0pO1xuICBjb25zdCBlbXB0eVN0YXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSAtIHJhdGluZyB9KTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wbGFjZW1lbnQxfT5cbiAgICAgIHtbXG4gICAgICAgIC4uLmZpbGxlZFN0YXJzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2BmaWxsZWRfJHtpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzTGlzdH0+XG4gICAgICAgICAgICA8U3Rhckljb24gLz5cbiAgICAgICAgICA8L2xpPilcbiAgICAgICAgKSxcbiAgICAgICAgLi4uZW1wdHlTdGFycy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtgdW5maWxsZWRfJHtpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzTGlzdH0+XG4gICAgICAgICAgICA8U3Rhckljb25FbXB0eSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpLFxuICAgICAgXX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuY29uc3QgQ2FyZCA9ICh7IGNhcmQgfSkgPT4ge1xuICBjb25zdCB7IGltYWdlLCBoZWFkaW5nLCBjb250ZW50LCBhdXRob3IsIH0gPSBjYXJkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgIDxJbWcgYWx0PXtpbWFnZS5hbHR9IHNyYz17YCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9LyR7aW1hZ2UudXJsfWB9IHdpZHRoPXszMzB9IGhlaWdodD17MjI1fSAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImYxNiBmdzkgbXQxNSBtYjE1XCI+e2hlYWRpbmd9PC9oMz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBwZmMzIG1iMTUgbXQxNSB0ZXh0LWp1c3RpZnlcIj57Y29udGVudH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlJhdGluZ0Rpdn0+XG4gICAgICAgIHtyZW5kZXJTdGFycyhhdXRob3IucmF0aW5nKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgbXQ4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwMCByYWRpdXMxMDAgb3ZlcmZsb3doIHNiYzUgbXIxNSAke3N0eWxlcy50cmF2ZWxJbWFnZX1gfT5cbiAgICAgICAgICAgIDxJbWcgYWx0PXthdXRob3IuaW1hZ2UuYWx0fSBzcmM9e2Ake2NvbmZpZy5hc3NldHMuaW1hZ2VzfS8ke2F1dGhvci5pbWFnZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgd2lkdGg9ezM1fSBoZWlnaHQ9ezM1fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHIwIHB0NSBwYjUgdGV4dC1jZW50ZXIgaWJsb2NrXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgZnc5XCI+e2F1dGhvci5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMlwiPjxzcGFuIGNsYXNzTmFtZT1cInBmYzRcIj57YXV0aG9yLmZyb219PC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuICBjYXJkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXV0aG9yXCI6IFwiXzI0TEV1ZVNuSTdUV1Y0NjlFdjZvRXhcIixcblx0XCJ0cmF2ZWxJbWFnZVwiOiBcIl8xRDdGM2tMZXhiemtqR2tya2NmX1FpXCIsXG5cdFwic3RhcnNMaXN0XCI6IFwiXzFlb1BjdkhSMzIzWEFpbkctbkhVdUFcIixcblx0XCJwbGFjZW1lbnQxXCI6IFwiXzJ0QXJPMms2bmJsd0hOX0hyWmNYelFcIlxufTsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4vVGVzdGltb25pYWxzJztcblxuY29uc3QgY29udGFpbmVyID0gY29ubmVjdChcbiAgc3RhdGUgPT4gKHsgZGF0YTogc3RhdGUubWt0LmRhdGEudGVzdGltb25pYWxzLCB9KVxuKShUZXN0aW1vbmlhbHMpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge30sXG4gIGRlZmF1bHRBY3Rpb246IG51bGwsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCAnLi9Td2lwZXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnZG90cycsICcnXSksXG4gICAgc3NyQW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaXNTbWFsbFN3aXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNGdWxsV2lkdGhTd2lwZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRPbkRvY3VtZW50UmVhZHk6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICBzc3JBbmltYXRpb246IHt9LFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBpc1NtYWxsU3dpcGVyOiBmYWxzZSxcbiAgICBpc0Z1bGxXaWR0aFN3aXBlcjogZmFsc2UsXG4gICAgbG9hZE9uRG9jdW1lbnRSZWFkeTogZmFsc2VcbiAgfTtcblxuICBzdGF0ZSA9IHt9O1xuXG4gIHJlbmRlclNlcnZlciA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6IHdpZHRoLCBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH19PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9faHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKGMpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHdcXFddKz8pXFwvPi9nLCBgPGRpdiBzdHlsZT1cIndpZHRoOiR7d2lkdGh9cHg7IGhlaWdodDogJHtoZWlnaHR9cHhcImApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDonc3dpcGVyU2luZ2xlQ2hpbGQnfSAga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydsYXp5bG9hZGluZyd9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBfX2h0bWwgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyRW1wdHlDbGllbnQgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSA/ICdzd2lwZXJDdXN0b21XaWR0aCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQnfT5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN3aXBlckFzeW5jID0gKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3dpcGVyJyAqLyAncmVhY3QtaWQtc3dpcGVyJylcbiAgICAgICAgLnRoZW4ocyA9PiB0aGlzLnNldFN0YXRlKHsgUmVhY3RJZFN3aXBlcjogcy5kZWZhdWx0IH0pKTtcblxuICAgIC8vIGlmICh0aGlzLnByb3BzLmxvYWRPbkRvY3VtZW50UmVhZHkpIHtcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnID8gc3dpcGVyQXN5bmMoKSA6IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc3dpcGVyQXN5bmMpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBSZWFjdElkU3dpcGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaXNTbWFsbFN3aXBlciwgaXNGdWxsV2lkdGhTd2lwZXIsIHNzckFuaW1hdGlvbiwgdHlwZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChfX1NFUlZFUl9fKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJTZXJ2ZXIoc3NyQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIVJlYWN0SWRTd2lwZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVtcHR5Q2xpZW50KHNzckFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzd2lwZXJQcm9wcyA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgICAgaWYgKHR5cGUgPT09ICdkb3RzJykge1xuICAgICAgICBzd2lwZXJQcm9wcyA9IHsgLi4uc3dpcGVyUHJvcHMsIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH19O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSZWFjdElkU3dpcGVyIHsuLi5zd2lwZXJQcm9wc30+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICAgICFpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlcikgP1xuICAgICAgICAgICAgICAgICdzd2lwZXJDdXN0b21XaWR0aCBibG9jaycgOiBpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlciA/XG4gICAgICAgICAgICAgICAgICAnc21hbGxTd2lwZXJDb250YWluZXIgYmxvY2snIDogaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgICAnd2Z1bGwnIDogJ3N3aXBlclNpbmdsZUNoaWxkIHdmdWxsIGJsb2NrJ30+e2NoaWxkfTwvc3Bhbj47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1JlYWN0SWRTd2lwZXI+XG4gICAgICAgICAgeyB0eXBlID09PSAnZG90cycgPyA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1wYWdpbmF0aW9uXCIgLz4gOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3dpcGVyLWNvbnRhaW5lclwiOiBcIl8yU0dzWVwiLFxuXHRcInN3aXBlci1jb250YWluZXItbm8tZmxleGJveFwiOiBcIl8xNzNGQVwiLFxuXHRcInN3aXBlci1zbGlkZVwiOiBcIl8zbDVFelwiLFxuXHRcInN3aXBlci1jb250YWluZXItdmVydGljYWxcIjogXCJfRURJS3pcIixcblx0XCJzd2lwZXItd3JhcHBlclwiOiBcIl8zaXlIR1wiLFxuXHRcInN3aXBlci1jb250YWluZXItYW5kcm9pZFwiOiBcIl8yQk9YaFwiLFxuXHRcInN3aXBlci1jb250YWluZXItbXVsdGlyb3dcIjogXCJfYmZUQ2VcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZVwiOiBcIl9KTEp5S1wiLFxuXHRcInN3aXBlci1pbnZpc2libGUtYmxhbmstc2xpZGVcIjogXCJfM1cyQnRcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHRcIjogXCJfMjFBRkxcIixcblx0XCJzd2lwZXItY29udGFpbmVyLTNkXCI6IFwiXzNURmpkXCIsXG5cdFwic3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCI6IFwiXzJsemp1XCIsXG5cdFwic3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodFwiOiBcIl8zbW54WlwiLFxuXHRcInN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCI6IFwiXzI0bTNlXCIsXG5cdFwic3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b21cIjogXCJfMXBwODRcIixcblx0XCJzd2lwZXItY3ViZS1zaGFkb3dcIjogXCJfMUJwb0tcIixcblx0XCJzd2lwZXItY29udGFpbmVyLXdwOC1ob3Jpem9udGFsXCI6IFwiXzNaTnk0XCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWxcIjogXCJfMXNqWHhcIixcblx0XCJzd2lwZXItYnV0dG9uLXByZXZcIjogXCJfM2luNGdcIixcblx0XCJzd2lwZXItYnV0dG9uLW5leHRcIjogXCJfM1lvak5cIixcblx0XCJzd2lwZXItYnV0dG9uLWRpc2FibGVkXCI6IFwiXzEtVHlVXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1ydGxcIjogXCJfMWlFdGJcIixcblx0XCJzd2lwZXItYnV0dG9uLXdoaXRlXCI6IFwiXzIxSC1mXCIsXG5cdFwic3dpcGVyLWJ1dHRvbi1ibGFja1wiOiBcIl8yWWpnT1wiLFxuXHRcInN3aXBlci1idXR0b24tbG9ja1wiOiBcIl8xSVRSX1wiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uXCI6IFwiXzFOMDByXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24taGlkZGVuXCI6IFwiX29rNHVGXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb25cIjogXCJfMkdIb19cIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1jdXN0b21cIjogXCJfM3BIbHhcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWhvcml6b250YWxcIjogXCJfMWZKOUJcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzXCI6IFwiXzJMdUdlXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljXCI6IFwiXzF5Z3YwXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0XCI6IFwiXzNLWGI3XCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZVwiOiBcIl8yR1U5TVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpblwiOiBcIl8yYXdydlwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldlwiOiBcIl9sVEc4bVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2XCI6IFwiXzNPdXNhXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0XCI6IFwiXzFQRzAxXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHRcIjogXCJfMlBBZDBcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGVcIjogXCJfM3oySERcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhclwiOiBcIl9la3VNYVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGxcIjogXCJfMVdCRnBcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi13aGl0ZVwiOiBcIl8zYXlmeVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJsYWNrXCI6IFwiXzIzNFFuXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tbG9ja1wiOiBcIl8xbGxvclwiLFxuXHRcInN3aXBlci1zY3JvbGxiYXJcIjogXCJfWGFrY1FcIixcblx0XCJzd2lwZXItc2Nyb2xsYmFyLWRyYWdcIjogXCJfMnpJLXpcIixcblx0XCJzd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFnXCI6IFwiXzE2RUFSXCIsXG5cdFwic3dpcGVyLXNjcm9sbGJhci1sb2NrXCI6IFwiXzJ0TlB1XCIsXG5cdFwic3dpcGVyLXpvb20tY29udGFpbmVyXCI6IFwiXzFQYzBwXCIsXG5cdFwic3dpcGVyLXNsaWRlLXpvb21lZFwiOiBcIl8zemtFLVwiLFxuXHRcInN3aXBlci1sYXp5LXByZWxvYWRlclwiOiBcIl8xQ0tCLVwiLFxuXHRcInN3aXBlci1wcmVsb2FkZXItc3BpblwiOiBcIl8zMzA4WVwiLFxuXHRcInN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZVwiOiBcIl8zQnJhSVwiLFxuXHRcInN3aXBlci1ub3RpZmljYXRpb25cIjogXCJfMVpHeHJcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWZhZGVcIjogXCJfc0VPODVcIixcblx0XCJzd2lwZXItc2xpZGUtYWN0aXZlXCI6IFwiXzJLakpGXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1jdWJlXCI6IFwiXzJFUmcwXCIsXG5cdFwic3dpcGVyLXNsaWRlLW5leHRcIjogXCJfM1ZvZUxcIixcblx0XCJzd2lwZXItc2xpZGUtcHJldlwiOiBcIl92cFZfUlwiLFxuXHRcInN3aXBlci1jb250YWluZXItZmxpcFwiOiBcIl8zeTNvc1wiLFxuXHRcInN3aXBlci1jb250YWluZXItY292ZXJmbG93XCI6IFwiXzJZckZwXCIsXG5cdFwiYXJyb3dsZWZ0U2xpZGVyXCI6IFwiXzNoWjdNXCIsXG5cdFwic2xpZGVyLXByZXZcIjogXCJfMXBxQTZcIixcblx0XCJhcnJvd0NvbnRhaW5lclwiOiBcIl8yQXh4T1wiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=