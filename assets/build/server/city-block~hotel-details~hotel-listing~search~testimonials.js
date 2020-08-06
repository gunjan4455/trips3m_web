require("source-map-support").install();
exports.ids = ["city-block~hotel-details~hotel-listing~search~testimonials"];
exports.modules = {

/***/ "./app-v2/modules/shared/Heading.js":
/*!******************************************!*\
  !*** ./app-v2/modules/shared/Heading.js ***!
  \******************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SubHeading = _glamorous.default.p({
  fontSize: '14px',
  lineHeight: '18px',
  color: '#cbcbcb',
  margin: '4px 0 0 0'
});

const Heading = ({
  data,
  title,
  heading,
  styleHeading,
  styleSubHeading,
  type,
  isViewAllHidden
}) => {
  return _react.default.createElement("div", {
    className: "clearfix mb15"
  }, type === 'main-heading' ? _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc1 fw9 m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null) : _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc3 fwb m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null), data.heading || heading ? _react.default.createElement(SubHeading, {
    style: styleSubHeading,
    className: "f14 mt4 fw4"
  }, data.heading || heading) : null);
};

Heading.propTypes = {
  data: _propTypes.default.object,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  heading: _propTypes.default.string,
  styleHeading: _propTypes.default.object,
  styleSubHeading: _propTypes.default.object,
  isViewAllHidden: _propTypes.default.bool
};
Heading.defaultProps = {
  data: {},
  type: '',
  title: '',
  heading: '',
  styleHeading: {},
  styleSubHeading: {},
  isViewAllHidden: false
};
var _default = Heading;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/travellerStory/G.js":
/*!********************************************!*\
  !*** ./app-v2/modules/travellerStory/G.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GHeadingH6 = exports.GDateLinkDiv = exports.GCardDataDiv = exports.GCardImg = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GCardImg = _glamorous.default.div({
  height: '140px',
  overflow: 'hidden',
  width: '100%',
  '& img': {
    minWidth: '100%',
    minHeight: '100%'
  },
  '& .hoverReadMore': {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    '& span': {
      color: '#fff',
      border: '1px solid #fff',
      padding: '12px 40px'
    }
  },
  '&:hover .hoverReadMore': {
    display: 'flex'
  }
});

exports.GCardImg = GCardImg;

const GCardDataDiv = _glamorous.default.div({
  paddingTop: '15px',
  paddingBottom: '0'
});

exports.GCardDataDiv = GCardDataDiv;

const GDateLinkDiv = _glamorous.default.div({
  display: 'flex',
  justifyContent: 'space-between'
});

exports.GDateLinkDiv = GDateLinkDiv;

const GHeadingH6 = _glamorous.default.h6({
  fontSize: '14px',
  lineHeight: '20px',
  height: '40px'
});

exports.GHeadingH6 = GHeadingH6;

/***/ }),

/***/ "./app-v2/modules/travellerStory/TravellerStory.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/travellerStory/TravellerStory.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./components/Card */ "./app-v2/modules/travellerStory/components/Card.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let TravellerStory = (_temp2 = _class = class TravellerStory extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.trackSegment = (cta, cardId, miscType1, miscId1) => {
      this.props.trackSegmentEvent({
        cta,
        object: cardId ? `Traveler stories/${cardId}` : 'Traveler stories',
        miscType1,
        miscId1
      });
    }, this.fetchTravellerStories = props => {
      const {
        config,
        fetchTravellerStories,
        destination
      } = props;

      if (config && config.csr) {
        fetchTravellerStories({
          destination: destination
        });
      }
    }, _temp;
  }

  componentDidMount() {
    this.fetchTravellerStories(this.props);
  }

  render() {
    const {
      travellerStories = [],
      viewAll,
      errors,
      data,
      from
    } = this.props;

    if (errors && errors.length) {
      return null;
    }

    return travellerStories && travellerStories.length ? _react.default.createElement("div", {
      className: "clearfix wfull p15 sbcw"
    }, _react.default.createElement("div", {
      className: "flex spaceBetween relative"
    }, data && data.title ? _react.default.createElement("div", {
      className: "flexFull relative"
    }, _react.default.createElement(_Heading.default, {
      data: data
    }), viewAll && _react.default.createElement(_reactRouter.Link, {
      to: viewAll,
      className: "absolute t2 r0 iblock f14 fw7"
    }, "View All")) : _react.default.createElement("div", {
      className: "flexFull mb15"
    }, _react.default.createElement("h6", {
      className: "f16 m0 pfc3 fw7 pr64"
    }, this.props.heading, viewAll && _react.default.createElement(_reactRouter.Link, {
      to: viewAll,
      className: "absolute t2 r0 iblock f14 fw7"
    }, "View All")), _react.default.createElement("p", {
      className: "f14 m0 mt4 pfc4"
    }, this.props.subHeading))), _react.default.createElement("div", {
      className: "clearfix swiper-full-width"
    }, _react.default.createElement(_Swiper.default, {
      id: "thingstodo",
      slideClass: "slide",
      spaceBetween: 15,
      slidesPerView: "auto",
      ssrAnimation: {
        width: 276,
        height: 217
      },
      rebuildOnUpdate: true
    },
    /* This is a shared file used from app-v2/screens/search/travellerStories/index.js (search) and
     * app-v2/modules/travellerStory/index.js (blog). Each of them sends different type of data for the
     * travellerStories prop. Both files in addition also sends a *from* prop that accepts if
     * this is used from *search* or *blog*. To see what kind of data each file sends check
     * app-v2/screens/search/Search.js (former search file) and
     * app-v2/modules/travellerStory/reducer.js (later blog file).
     *
     * This is the reason we are checking if what type of image property to use to send
     * to the Card component.
     * */
    travellerStories && travellerStories.map((travelStory, index) => {
      return _react.default.createElement("div", {
        className: "clearfix radius2 relative",
        key: index
      }, _react.default.createElement(_Card.default, {
        id: travelStory.id,
        title: travelStory.title,
        imagekitUrl: from === 'search' ? travelStory.imagekitUrl : travelStory.thumbnailImagePaths.imagekitUrl,
        thumbnailImagePath: from === 'search' ? travelStory.thumbnailImagePath : travelStory.thumbnailImagePaths.src,
        url: travelStory.url,
        trackSegment: this.trackSegment,
        index: index
      }));
    })))) : null;
  }

}, _class.propTypes = {
  travellerStories: _propTypes.default.array,
  config: _propTypes.default.object,
  loaded: _propTypes.default.bool,
  errors: _propTypes.default.array,
  trackSegmentEvent: _propTypes.default.func,
  fetchTravellerStories: _propTypes.default.func,
  data: _propTypes.default.object,
  spacingCss: _propTypes.default.object,
  subHeading: _propTypes.default.string,
  heading: _propTypes.default.string,
  destination: _propTypes.default.string,
  viewAll: _propTypes.default.string,
  from: _propTypes.default.oneOf(['blog', 'search']).isRequired
}, _class.defaultProps = {
  config: {
    variant: 'FULL',
    order: 10
  },
  trackSegmentEvent: () => {},
  spacingCss: {},
  heading: 'Read Our Interesting Traveler Stories',
  subHeading: 'They traveled. They experienced. They shared.',
  viewAll: '/blog/travelogues?referer=travelogue_rlp'
}, _temp2);
exports.default = TravellerStory;

/***/ }),

/***/ "./app-v2/modules/travellerStory/components/Card.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/travellerStory/components/Card.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/travellerStory/G.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Card = ({
  id,
  title,
  url,
  imagekitUrl,
  thumbnailImagePath,
  index,
  trackSegment
}) => {
  return _react.default.createElement("div", {
    className: "clearfix sbcw"
  }, _react.default.createElement(_G.GCardImg, {
    className: "relative"
  }, _react.default.createElement(_Img.default, {
    width: 320,
    height: 140,
    src: thumbnailImagePath,
    ikSrc: imagekitUrl,
    alt: ""
  }), _react.default.createElement("a", {
    href: url,
    className: "at_tsReadmore hoverReadMore absolute wfull hfull l0 t0",
    target: "_blank",
    onClick: () => trackSegment('Read more link', id, 'index', index)
  }, _react.default.createElement("span", {
    className: "block f14"
  }, "Read More"))), _react.default.createElement(_G.GCardDataDiv, null, _react.default.createElement(_G.GHeadingH6, {
    className: "fw7 overflowh m0 mb4"
  }, title), _react.default.createElement("div", {
    className: "text-right"
  }, _react.default.createElement("a", {
    className: "at_readMore sfc1 f14 fw7",
    href: url,
    target: "_blank"
  }, "Read More"))));
};

Card.propTypes = {
  index: _propTypes.default.number,
  id: _propTypes.default.string,
  image: _propTypes.default.string,
  imagekitUrl: _propTypes.default.string,
  title: _propTypes.default.string,
  url: _propTypes.default.string,
  thumbnailImagePath: _propTypes.default.string,
  trackSegment: _propTypes.default.func
};
Card.defaultProps = {
  index: 0,
  trackSegment: () => {}
};
var _default = Card;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmF2ZWxsZXJTdG9yeS9HLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyYXZlbGxlclN0b3J5L1RyYXZlbGxlclN0b3J5LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyYXZlbGxlclN0b3J5L2NvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6WyJTdWJIZWFkaW5nIiwiZ2xhbW9yb3VzIiwicCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwibWFyZ2luIiwiSGVhZGluZyIsImRhdGEiLCJ0aXRsZSIsImhlYWRpbmciLCJzdHlsZUhlYWRpbmciLCJzdHlsZVN1YkhlYWRpbmciLCJ0eXBlIiwiaXNWaWV3QWxsSGlkZGVuIiwiZm9ySGVhZGluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJHQ2FyZEltZyIsImRpdiIsImhlaWdodCIsIm92ZXJmbG93Iiwid2lkdGgiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJwYWRkaW5nIiwiR0NhcmREYXRhRGl2IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJHRGF0ZUxpbmtEaXYiLCJHSGVhZGluZ0g2IiwiaDYiLCJUcmF2ZWxsZXJTdG9yeSIsIkNvbXBvbmVudCIsInRyYWNrU2VnbWVudCIsImN0YSIsImNhcmRJZCIsIm1pc2NUeXBlMSIsIm1pc2NJZDEiLCJwcm9wcyIsInRyYWNrU2VnbWVudEV2ZW50IiwiZmV0Y2hUcmF2ZWxsZXJTdG9yaWVzIiwiY29uZmlnIiwiZGVzdGluYXRpb24iLCJjc3IiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsInRyYXZlbGxlclN0b3JpZXMiLCJ2aWV3QWxsIiwiZXJyb3JzIiwiZnJvbSIsImxlbmd0aCIsInN1YkhlYWRpbmciLCJtYXAiLCJ0cmF2ZWxTdG9yeSIsImluZGV4IiwiaWQiLCJpbWFnZWtpdFVybCIsInRodW1ibmFpbEltYWdlUGF0aHMiLCJ0aHVtYm5haWxJbWFnZVBhdGgiLCJzcmMiLCJ1cmwiLCJhcnJheSIsImxvYWRlZCIsImZ1bmMiLCJzcGFjaW5nQ3NzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwidmFyaWFudCIsIm9yZGVyIiwiQ2FyZCIsIm51bWJlciIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxhQUFhQyxtQkFBVUMsQ0FBVixDQUFZO0FBQzdCQyxZQUFVLE1BRG1CO0FBRTdCQyxjQUFZLE1BRmlCO0FBRzdCQyxTQUFPLFNBSHNCO0FBSTdCQyxVQUFRO0FBSnFCLENBQVosQ0FBbkI7O0FBT0EsTUFBTUMsVUFBVSxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsT0FBUjtBQUFlQyxTQUFmO0FBQXdCQyxjQUF4QjtBQUFzQ0MsaUJBQXRDO0FBQXVEQyxNQUF2RDtBQUE2REM7QUFBN0QsQ0FBRCxLQUFvRjtBQUNsRyxTQUNFO0FBQUssZUFBVTtBQUFmLEtBRUlELFNBQVMsY0FBVCxHQUNFO0FBQUksV0FBT0YsWUFBWDtBQUNJLGVBQVksR0FBRUcsa0JBQWtCLE1BQWxCLEdBQTJCLE9BQVE7QUFEckQsS0FDeUVOLEtBQUtDLEtBQUwsSUFBY0EsS0FEdkYsRUFDOEZELEtBQUtPLFVBQUwsR0FBbUIsUUFBT1AsS0FBS08sVUFBVyxFQUExQyxHQUE4QyxJQUQ1SSxDQURGLEdBR0k7QUFBSSxXQUFPSixZQUFYO0FBQ0ksZUFBWSxHQUFFRyxrQkFBa0IsTUFBbEIsR0FBMkIsT0FBUTtBQURyRCxLQUN5RU4sS0FBS0MsS0FBTCxJQUFjQSxLQUR2RixFQUM4RkQsS0FBS08sVUFBTCxHQUFtQixRQUFPUCxL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LE1BUGY7QUFRZndCLGdCQUFjMUIsbUJBQVV3RDtBQVJULENBQWpCO0FBV0FNLEtBQUsxRCxZQUFMLEdBQW9CO0FBQ2xCMkMsU0FBTyxDQURXO0FBRWxCckIsZ0JBQWMsTUFBTSxDQUNuQjtBQUhpQixDQUFwQjtlQU1lb0MsSSIsImZpbGUiOiJjaXR5LWJsb2NrfmhvdGVsLWRldGFpbHN+aG90ZWwtbGlzdGluZ35zZWFyY2h+dGVzdGltb25pYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IFN1YkhlYWRpbmcgPSBnbGFtb3JvdXMucCh7XG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgY29sb3I6ICcjY2JjYmNiJyxcbiAgbWFyZ2luOiAnNHB4IDAgMCAwJyxcbn0pO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgZGF0YSwgdGl0bGUsIGhlYWRpbmcsIHN0eWxlSGVhZGluZywgc3R5bGVTdWJIZWFkaW5nLCB0eXBlLCBpc1ZpZXdBbGxIaWRkZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWIxNVwiPlxuICAgICAge1xuICAgICAgICB0eXBlID09PSAnbWFpbi1oZWFkaW5nJyA/XG4gICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNWaWV3QWxsSGlkZGVuID8gJ3ByMCAnIDogJ3ByNjQgJ30gZjE2IHBmYzEgZnc5IG0wYH0+e2RhdGEudGl0bGUgfHwgdGl0bGV9e2RhdGEuZm9ySGVhZGluZyA/IGAgZm9yICR7ZGF0YS5mb3JIZWFkaW5nfWAgOiBudWxsfTwvaDI+XG4gICAgICAgICAgOiA8aDIgc3R5bGU9e3N0eWxlSGVhZGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMzIGZ3YiBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgfVxuICAgICAge2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nID9cbiAgICAgICAgPFN1YkhlYWRpbmcgc3R5bGU9e3N0eWxlU3ViSGVhZGluZ30gY2xhc3NOYW1lPVwiZjE0IG10NCBmdzRcIj57ZGF0YS5oZWFkaW5nIHx8IGhlYWRpbmd9PC9TdWJIZWFkaW5nPiA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhlYWRpbmcucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZVN1YkhlYWRpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlzVmlld0FsbEhpZGRlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgdHlwZTogJycsXG4gIHRpdGxlOiAnJyxcbiAgaGVhZGluZzogJycsXG4gIHN0eWxlSGVhZGluZzoge30sXG4gIHN0eWxlU3ViSGVhZGluZzoge30sXG4gIGlzVmlld0FsbEhpZGRlbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCJpbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBHQ2FyZEltZyA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICcxNDBweCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJyYgaW1nJzoge1xuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gICcmIC5ob3ZlclJlYWRNb3JlJzoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyxcbiAgICAnJiBzcGFuJzoge1xuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmJyxcbiAgICAgIHBhZGRpbmc6ICcxMnB4IDQwcHgnLFxuICAgIH0sXG4gIH0sXG4gICcmOmhvdmVyIC5ob3ZlclJlYWRNb3JlJzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgR0NhcmREYXRhRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBhZGRpbmdUb3A6ICcxNXB4JyxcbiAgcGFkZGluZ0JvdHRvbTogJzAnXG59KTtcblxuZXhwb3J0IGNvbnN0IEdEYXRlTGlua0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdIZWFkaW5nSDYgPSBnbGFtb3JvdXMuaDYoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gIGhlaWdodDogJzQwcHgnLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdjb21wb25lbnRzL1N3aXBlci9Td2lwZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL0NhcmQnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvSGVhZGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYXZlbGxlclN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0cmF2ZWxsZXJTdG9yaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvYWRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZldGNoVHJhdmVsbGVyU3RvcmllczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzcGFjaW5nQ3NzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN1YkhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2aWV3QWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZyb206IFByb3BUeXBlcy5vbmVPZihbJ2Jsb2cnLCAnc2VhcmNoJ10pLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbmZpZzoge1xuICAgICAgdmFyaWFudDogJ0ZVTEwnLFxuICAgICAgb3JkZXI6IDEwXG4gICAgfSxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge1xuICAgIH0sXG4gICAgc3BhY2luZ0Nzczoge30sXG4gICAgaGVhZGluZzogJ1JlYWQgT3VyIEludGVyZXN0aW5nIFRyYXZlbGVyIFN0b3JpZXMnLFxuICAgIHN1YkhlYWRpbmc6ICdUaGV5IHRyYXZlbGVkLiBUaGV5IGV4cGVyaWVuY2VkLiBUaGV5IHNoYXJlZC4nLFxuICAgIHZpZXdBbGw6ICcvYmxvZy90cmF2ZWxvZ3Vlcz9yZWZlcmVyPXRyYXZlbG9ndWVfcmxwJ1xuICB9O1xuXG4gIHRyYWNrU2VnbWVudCA9IChjdGEsIGNhcmRJZCwgbWlzY1R5cGUxLCBtaXNjSWQxKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICBjdGEsXG4gICAgICBvYmplY3Q6IGNhcmRJZCA/IGBUcmF2ZWxlciBzdG9yaWVzLyR7Y2FyZElkfWAgOiAnVHJhdmVsZXIgc3RvcmllcycsXG4gICAgICBtaXNjVHlwZTEsXG4gICAgICBtaXNjSWQxXG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRyYXZlbGxlclN0b3JpZXModGhpcy5wcm9wcyk7XG4gIH1cblxuICBmZXRjaFRyYXZlbGxlclN0b3JpZXMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbmZpZywgZmV0Y2hUcmF2ZWxsZXJTdG9yaWVzLCBkZXN0aW5hdGlvbiB9ID0gcHJvcHM7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuY3NyKSB7XG4gICAgICBmZXRjaFRyYXZlbGxlclN0b3JpZXMoe1xuICAgICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhdmVsbGVyU3RvcmllcyA9IFtdLCB2aWV3QWxsLCBlcnJvcnMsIGRhdGEsIGZyb20gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhdmVsbGVyU3RvcmllcyAmJiB0cmF2ZWxsZXJTdG9yaWVzLmxlbmd0aCA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggd2Z1bGwgcDE1IHNiY3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgIHtkYXRhICYmIGRhdGEudGl0bGUgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgIHt2aWV3QWxsICYmIChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89e3ZpZXdBbGx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0MiByMCBpYmxvY2sgZjE0IGZ3N1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVmlldyBBbGxcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBtYjE1XCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmMTYgbTAgcGZjMyBmdzcgcHI2NFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRpbmd9XG4gICAgICAgICAgICAgICAge3ZpZXdBbGwgJiYgKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdG89e3ZpZXdBbGx9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHQyIHIwIGlibG9jayBmMTQgZnc3XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBBbGxcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgbTAgbXQ0IHBmYzRcIj57dGhpcy5wcm9wcy5zdWJIZWFkaW5nfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHN3aXBlci1mdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgaWQ9XCJ0aGluZ3N0b2RvXCJcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M9XCJzbGlkZVwiXG4gICAgICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz1cImF1dG9cIlxuICAgICAgICAgICAgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAyNzYsIGhlaWdodDogMjE3IH19XG4gICAgICAgICAgICByZWJ1aWxkT25VcGRhdGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8qIFRoaXMgaXMgYSBzaGFyZWQgZmlsZSB1c2VkIGZyb20gYXBwLXYyL3NjcmVlbnMvc2VhcmNoL3RyYXZlbGxlclN0b3JpZXMvaW5kZXguanMgKHNlYXJjaCkgYW5kXG4gICAgICAgICAgICAgICAqIGFwcC12Mi9tb2R1bGVzL3RyYXZlbGxlclN0b3J5L2luZGV4LmpzIChibG9nKS4gRWFjaCBvZiB0aGVtIHNlbmRzIGRpZmZlcmVudCB0eXBlIG9mIGRhdGEgZm9yIHRoZVxuICAgICAgICAgICAgICAgKiB0cmF2ZWxsZXJTdG9yaWVzIHByb3AuIEJvdGggZmlsZXMgaW4gYWRkaXRpb24gYWxzbyBzZW5kcyBhICpmcm9tKiBwcm9wIHRoYXQgYWNjZXB0cyBpZlxuICAgICAgICAgICAgICAgKiB0aGlzIGlzIHVzZWQgZnJvbSAqc2VhcmNoKiBvciAqYmxvZyouIFRvIHNlZSB3aGF0IGtpbmQgb2YgZGF0YSBlYWNoIGZpbGUgc2VuZHMgY2hlY2tcbiAgICAgICAgICAgICAgICogYXBwLXYyL3NjcmVlbnMvc2VhcmNoL1NlYXJjaC5qcyAoZm9ybWVyIHNlYXJjaCBmaWxlKSBhbmRcbiAgICAgICAgICAgICAgICogYXBwLXYyL21vZHVsZXMvdHJhdmVsbGVyU3RvcnkvcmVkdWNlci5qcyAobGF0ZXIgYmxvZyBmaWxlKS5cbiAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICogVGhpcyBpcyB0aGUgcmVhc29uIHdlIGFyZSBjaGVja2luZyBpZiB3aGF0IHR5cGUgb2YgaW1hZ2UgcHJvcGVydHkgdG8gdXNlIHRvIHNlbmRcbiAgICAgICAgICAgICAgICogdG8gdGhlIENhcmQgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgICB0cmF2ZWxsZXJTdG9yaWVzICYmIHRyYXZlbGxlclN0b3JpZXMubWFwKCh0cmF2ZWxTdG9yeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCByYWRpdXMyIHJlbGF0aXZlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3RyYXZlbFN0b3J5LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0cmF2ZWxTdG9yeS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZWtpdFVybD17XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID09PSAnc2VhcmNoJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlbFN0b3J5LmltYWdla2l0VXJsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsU3RvcnkudGh1bWJuYWlsSW1hZ2VQYXRocy5pbWFnZWtpdFVybFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxJbWFnZVBhdGg9e1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9PT0gJ3NlYXJjaCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxTdG9yeS50aHVtYm5haWxJbWFnZVBhdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxTdG9yeS50aHVtYm5haWxJbWFnZVBhdGhzLnNyY1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB1cmw9e3RyYXZlbFN0b3J5LnVybH1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnQ9e3RoaXMudHJhY2tTZWdtZW50fVxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSA6IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHQ2FyZERhdGFEaXYsIEdDYXJkSW1nLCBHSGVhZGluZ0g2IH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgdGl0bGUsIHVybCwgaW1hZ2VraXRVcmwsIHRodW1ibmFpbEltYWdlUGF0aCwgaW5kZXgsIHRyYWNrU2VnbWVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmN3XCI+XG4gICAgICA8R0NhcmRJbWcgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPEltZyB3aWR0aD17MzIwfSBoZWlnaHQ9ezE0MH0gc3JjPXt0aHVtYm5haWxJbWFnZVBhdGh9IGlrU3JjPXtpbWFnZWtpdFVybH0gYWx0PVwiXCIgLz5cblxuICAgICAgICA8YSBocmVmPXt1cmx9IGNsYXNzTmFtZT1cImF0X3RzUmVhZG1vcmUgaG92ZXJSZWFkTW9yZSBhYnNvbHV0ZSB3ZnVsbCBoZnVsbCBsMCB0MFwiXG4gICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRyYWNrU2VnbWVudCgnUmVhZCBtb3JlIGxpbmsnLCBpZCwgJ2luZGV4JywgaW5kZXgpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBmMTRcIj5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvR0NhcmRJbWc+XG4gICAgICA8R0NhcmREYXRhRGl2PlxuICAgICAgICA8R0hlYWRpbmdINiBjbGFzc05hbWU9XCJmdzcgb3ZlcmZsb3doIG0wIG1iNFwiPnt0aXRsZX08L0dIZWFkaW5nSDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImF0X3JlYWRNb3JlIHNmYzEgZjE0IGZ3N1wiIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+UmVhZCBNb3JlPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR0NhcmREYXRhRGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aHVtYm5haWxJbWFnZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5kZXg6IDAsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==