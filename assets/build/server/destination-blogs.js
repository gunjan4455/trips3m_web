require("source-map-support").install();
exports.ids = ["destination-blogs"];
exports.modules = {

/***/ "./app-v2/modules/destinationBlog/DestinationBlogs.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/destinationBlog/DestinationBlogs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./components/Card */ "./app-v2/modules/destinationBlog/components/Card.js"));

var _blog = __webpack_require__(/*! helpers/blog */ "./app/helpers/blog.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let DestinationBlogs = (_temp2 = _class = class DestinationBlogs extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.trackSegmentEvent = (event, cta, object) => {
      this.props.trackSegment({
        event,
        section: 'DestinationBlogs',
        cta,
        object
      });
    }, this.fetchDestinationBlogs = props => {
      const {
        fetchDestinationBlogs,
        destination
      } = props;
      fetchDestinationBlogs({
        destination: destination
      });
    }, _temp;
  }

  componentDidMount() {
    this.fetchDestinationBlogs(this.props);
  }

  render() {
    const {
      destinationBlogs = [],
      destination,
      errors
    } = this.props;

    if (errors && errors.length) {
      return null;
    }

    const blogs = (0, _blog.getDestinationBlogs)(destinationBlogs);
    return blogs && blogs.length ? _react.default.createElement("div", {
      className: "clearfix wfull p15 sbcw mt8"
    }, _react.default.createElement("div", {
      className: "flex spaceBetween relative"
    }, _react.default.createElement("div", {
      className: "flexFull relative"
    }, _react.default.createElement(_Heading.default, {
      title: `Best Blog about ${destination}`
    }))), _react.default.createElement("div", {
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
    }, blogs.map((travelStory, index) => {
      return _react.default.createElement("div", {
        className: "clearfix radius2 relative",
        key: index
      }, _react.default.createElement(_Card.default, {
        id: travelStory.id,
        title: travelStory.title,
        heading: travelStory.heading,
        imagekitUrl: travelStory.thumbnailImagePaths.imagekitUrl,
        thumbnailImagePath: travelStory.thumbnailImagePaths.src,
        url: travelStory.url,
        trackSegment: this.trackSegmentEvent,
        index: index,
        content: travelStory.content ? travelStory.content.substring(0, 70) : ''
      }));
    })))) : null;
  }

}, _class.propTypes = {
  destinationBlogs: _propTypes.default.object,
  loaded: _propTypes.default.bool,
  errors: _propTypes.default.array,
  trackSegment: _propTypes.default.func.isRequired,
  fetchDestinationBlogs: _propTypes.default.func,
  destination: _propTypes.default.string
}, _temp2);
exports.default = DestinationBlogs;

/***/ }),

/***/ "./app-v2/modules/destinationBlog/G.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/destinationBlog/G.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GContentP = exports.GHeadingH6 = exports.GDateLinkDiv = exports.GCardDataDiv = exports.GCardImg = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
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
  },
  '&:before': {
    content: '""',
    background: '-moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.21) 35%, rgb(0,0,0) 100%)',
    background: '-webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.21) 35%,rgb(0,0,0) 100%)',
    background: 'linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.21) 35%,rgb(0,0,0) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00ffffff", endColorstr="#99000000",GradientType=0 )',
    position: 'absolute',
    width: '100%',
    height: '100%'
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

const GContentP = _glamorous.default.p({
  '& span': {
    fontStyle: 'normal'
  }
});

exports.GContentP = GContentP;

/***/ }),

/***/ "./app-v2/modules/destinationBlog/components/Card.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/destinationBlog/components/Card.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/destinationBlog/G.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = new _htmlToReact.Parser();

const Card = ({
  id,
  title,
  heading,
  content,
  url,
  imagekitUrl,
  thumbnailImagePath,
  trackSegment
}) => {
  return _react.default.createElement("div", {
    className: "clearfix sbcw"
  }, _react.default.createElement("a", {
    href: url,
    target: "_blank",
    onClick: () => trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Image Card', heading)
  }, _react.default.createElement(_G.GCardImg, {
    className: "relative"
  }, _react.default.createElement(_Img.default, {
    width: 320,
    height: 140,
    src: thumbnailImagePath,
    ikSrc: imagekitUrl,
    alt: ""
  }), _react.default.createElement("span", {
    className: "absolute b0 l0 r0 p8 sfcw f14"
  }, title)), _react.default.createElement(_G.GCardDataDiv, null, _react.default.createElement("h3", {
    className: "pfc3 f16 fw7 overflowh m0 mb8"
  }, heading), _react.default.createElement(_G.GContentP, {
    className: "f14 pfc4"
  }, parser.parse(content)))));
};

Card.propTypes = {
  id: _propTypes.default.string,
  imagekitUrl: _propTypes.default.string,
  title: _propTypes.default.string,
  heading: _propTypes.default.string,
  content: _propTypes.default.string,
  url: _propTypes.default.string,
  thumbnailImagePath: _propTypes.default.string,
  trackSegment: _propTypes.default.func.isRequired
};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/destinationBlog/index.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/destinationBlog/index.js ***!
  \*************************************************/
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

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/destinationBlog/action.js");

var _DestinationBlogs = _interopRequireDefault(__webpack_require__(/*! ./DestinationBlogs */ "./app-v2/modules/destinationBlog/DestinationBlogs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  destinationBlogs: (0, _get2.default)(state, 'destinationBlogs.blogs', {}),
  loaded: state.travellerStories.loaded,
  errors: state.travellerStories.errors
}), {
  fetchDestinationBlogs: _action.fetchDestinationBlogs
})(_DestinationBlogs.default));
var _default = {
  container,
  actions: {
    fetchDestinationBlogs: _action.fetchDestinationBlogs
  },
  defaultAction: _action.fetchDestinationBlogs
};
exports.default = _default;

/***/ }),

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

/***/ "./app/components/Swiper/Swiper.js":
/*!*****************************************!*\
  !*** ./app/components/Swiper/Swiper.js ***!
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

__webpack_require__(/*! ./Swiper.scss */ "./app/components/Swiper/Swiper.scss");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Swiper = (_temp2 = _class = class Swiper extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, this.renderServer = ({
      width,
      height
    }) => {
      const {
        overflow
      } = this.props;
      const styles = {
        overflowX: 'scroll',
        width: width,
        display: 'inline-flex'
      };
      return _react.default.createElement("ul", {
        style: styles
      }, this.props.children.map((c, i) => {
        const __html = _server.default.renderToStaticMarkup(c).replace(/<img([\w\W]+?)\/>/g, `<div style="width:${width}px; height: ${height}px" />`);

        return _react.default.createElement("li", {
          className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild',
          key: i
        }, _react.default.createElement("div", {
          className: 'lazyloading',
          style: {
            height: `${height}px`,
            width: '100%',
            position: 'relative'
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
      }, this.props.children.map((c, i) => _react.default.createElement("span", {
        key: i,
        className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild',
        style: {
          height: `${height}px`,
          width: '100%'
        }
      })));
    }, _temp;
  }

  componentDidMount() {
    const swiperAsync = () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-id-swiper */ "react-id-swiper", 7)).then(s => this.setState({
      ReactIdSwiper: s.default
    })); // if (this.props.loadOnDocumentReady) {


    document.readyState === "complete" ? swiperAsync() : window.addEventListener("load", swiperAsync); // } else {
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
      showLoader
    } = this.props;

    if (true) {
      return this.renderServer(ssrAnimation);
    }

    if (!ReactIdSwiper) {
      return this.renderEmptyClient(ssrAnimation);
    } else {
      return _react.default.createElement(ReactIdSwiper, this.props, this.props.children.map((c, i) => {
        return _react.default.createElement("span", {
          key: i,
          className: this.props.children.length > 1 && !isSmallSwiper && !isFullWidthSwiper ? 'swiperCustomWidth block' : isSmallSwiper && !isFullWidthSwiper ? 'smallSwiperContainer block' : isFullWidthSwiper ? 'wfull' : 'swiperSingleChild wfull block'
        }, c, showLoader ? _react.default.createElement("div", {
          className: "swiper-lazy-preloader"
        }) : null);
      }));
    }
  }

}, _class.propTypes = {
  ssrAnimation: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),
  children: _propTypes.default.array,
  isSmallSwiper: _propTypes.default.bool,
  isFullWidthSwiper: _propTypes.default.bool,
  loadOnDocumentReady: _propTypes.default.bool,
  rebuildOnUpdate: _propTypes.default.bool,
  showLoader: _propTypes.default.bool,
  overflow: _propTypes.default.string
}, _class.defaultProps = {
  ssrAnimation: {},
  children: [],
  isSmallSwiper: false,
  isFullWidthSwiper: false,
  loadOnDocumentReady: false,
  showLoader: false,
  overflow: 'hidden'
}, _temp2);
exports.default = Swiper;

/***/ }),

/***/ "./app/components/Swiper/Swiper.scss":
/*!*******************************************!*\
  !*** ./app/components/Swiper/Swiper.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"swiper-preloader-spin": "_3308Y"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9kZXN0aW5hdGlvbkJsb2cvRGVzdGluYXRpb25CbG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9kZXN0aW5hdGlvbkJsb2cvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9kZXN0aW5hdGlvbkJsb2cvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Rlc3RpbmF0aW9uQmxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1N3aXBlci9Td2lwZXIuc2NzcyJdLCJuYW1lcyI6WyJEZXN0aW5hdGlvbkJsb2dzIiwiQ29tcG9uZW50IiwidHJhY2tTZWdtZW50RXZlbnQiLCJldmVudCIsImN0YSIsIm9iamVjdCIsInByb3BzIiwidHJhY2tTZWdtZW50Iiwic2VjdGlvbiIsImZldGNoRGVzdGluYXRpb25CbG9ncyIsImRlc3RpbmF0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJkZXN0aW5hdGlvbkJsb2dzIiwiZXJyb3JzIiwibGVuZ3RoIiwiYmxvZ3MiLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsInRyYXZlbFN0b3J5IiwiaW5kZXgiLCJpZCIsInRpdGxlIiwiaGVhZGluZyIsInRodW1ibmFpbEltYWdlUGF0aHMiLCJpbWFnZWtpdFVybCIsInNyYyIsInVybCIsImNvbnRlbnQiLCJzdWJzdHJpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJsb2FkZWQiLCJib29sIiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIkdDYXJkSW1nIiwiZ2xhbW9yb3VzIiwiZGl2Iiwib3ZlcmZsb3ciLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiZmlsdGVyIiwicG9zaXRpb24iLCJHQ2FyZERhdGFEaXYiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIkdEYXRlTGlua0RpdiIsIkdIZWFkaW5nSDYiLCJoNiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIkdDb250ZW50UCIsInAiLCJmb250U3R5bGUiLCJwYXJzZXIiLCJQYXJzZXIiLCJDYXJkIiwidGh1bWJuYWlsSW1hZ2VQYXRoIiwiT1JHQU5JU01fQ0xJQ0tFRCIsInBhcnNlIiwiY29udGFpbmVyIiwic3RhdGUiLCJ0cmF2ZWxsZXJTdG9yaWVzIiwiYWN0aW9ucyIsImRlZmF1bHRBY3Rpb24iLCJTdWJIZWFkaW5nIiwibWFyZ2luIiwiSGVhZGluZyIsImRhdGEiLCJzdHlsZUhlYWRpbmciLCJzdHlsZVN1YkhlYWRpbmciLCJ0eXBlIiwiaXNWaWV3QWxsSGlkZGVuIiwiZm9ySGVhZGluZyIsImRlZmF1bHRQcm9wcyIsIlN3aXBlciIsInJlbmRlclNlcnZlciIsInN0eWxlcyIsIm92ZXJmbG93WCIsImNoaWxkcmVuIiwiYyIsImkiLCJfX2h0bWwiLCJSZWFjdERPTSIsInJlbmRlclRvU3RhdGljTWFya3VwIiwicmVwbGFjZSIsInJlbmRlckVtcHR5Q2xpZW50Iiwic3dpcGVyQXN5bmMiLCJ0aGVuIiwicyIsInNldFN0YXRlIiwiUmVhY3RJZFN3aXBlciIsImRlZmF1bHQiLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXNTbWFsbFN3aXBlciIsImlzRnVsbFdpZHRoU3dpcGVyIiwic3NyQW5pbWF0aW9uIiwic2hvd0xvYWRlciIsIl9fU0VSVkVSX18iLCJvbmVPZlR5cGUiLCJsb2FkT25Eb2N1bWVudFJlYWR5IiwicmVidWlsZE9uVXBkYXRl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TUpvQixhQUFhO0FBQUsscUJBQVU7QUFBZixVQUFiLEdBQXlELElBTnJELENBQVA7QUFRRCxPQVRELENBRkosQ0FERjtBQWdCRDtBQUNGOztBQS9HMkMsQyxTQUNyQ2pGLFMsR0FBWTtBQUNqQmdGLGdCQUFjL0UsbUJBQVVrRixTQUFWLENBQW9CLENBQUNsRixtQkFBVUUsSUFBWCxFQUFpQkYsbUJBQVUzQixNQUEzQixDQUFwQixDQURHO0FBRWpCc0YsWUFBVTNELG1CQUFVRyxLQUZIO0FBR2pCMEUsaUJBQWU3RSxtQkFBVUUsSUFIUjtBQUlqQjRFLHFCQUFtQjlFLG1CQUFVRSxJQUpaO0FBS2pCaUYsdUJBQXFCbkYsbUJBQVVFLElBTGQ7QUFNakJrRixtQkFBaUJwRixtQkFBVUUsSUFOVjtBQU9qQjhFLGNBQVloRixtQkFBVUUsSUFQTDtBQVFqQlEsWUFBVVYsbUJBQVVNO0FBUkgsQyxTQVVaZ0QsWSxHQUFlO0FBQ3BCeUIsZ0JBQWMsRUFETTtBQUVwQnBCLFlBQVUsRUFGVTtBQUdwQmtCLGlCQUFlLEtBSEs7QUFJcEJDLHFCQUFtQixLQUpDO0FBS3BCSyx1QkFBcUIsS0FMRDtBQU1wQkgsY0FBWSxLQU5RO0FBT3BCdEUsWUFBVTtBQVBVLEM7Ozs7Ozs7Ozs7OztBQ2pCeEI7QUFDQTtBQUNBLEUiLCJmaWxlIjoiZGVzdGluYXRpb24tYmxvZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvSGVhZGluZyc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlcic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgeyBnZXREZXN0aW5hdGlvbkJsb2dzIH0gZnJvbSAnaGVscGVycy9ibG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzdGluYXRpb25CbG9ncyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGVzdGluYXRpb25CbG9nczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2FkZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmZXRjaERlc3RpbmF0aW9uQmxvZ3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBjdGEsIG9iamVjdCkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50LFxuICAgICAgc2VjdGlvbjogJ0Rlc3RpbmF0aW9uQmxvZ3MnLFxuICAgICAgY3RhLFxuICAgICAgb2JqZWN0XG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERlc3RpbmF0aW9uQmxvZ3ModGhpcy5wcm9wcyk7XG4gIH1cblxuICBmZXRjaERlc3RpbmF0aW9uQmxvZ3MgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGZldGNoRGVzdGluYXRpb25CbG9ncywgZGVzdGluYXRpb24gfSA9IHByb3BzO1xuICAgIGZldGNoRGVzdGluYXRpb25CbG9ncyh7XG4gICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb25cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbkJsb2dzID0gW10sIGRlc3RpbmF0aW9uLCBlcnJvcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBibG9ncyA9IGdldERlc3RpbmF0aW9uQmxvZ3MoZGVzdGluYXRpb25CbG9ncyk7XG5cbiAgICByZXR1cm4gYmxvZ3MgJiYgYmxvZ3MubGVuZ3RoID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCB3ZnVsbCBwMTUgc2JjdyBtdDhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nIHRpdGxlPXtgQmVzdCBCbG9nIGFib3V0ICR7ZGVzdGluYXRpb259YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggc3dpcGVyLWZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICBpZD1cInRoaW5nc3RvZG9cIlxuICAgICAgICAgICAgc2xpZGVDbGFzcz1cInNsaWRlXCJcbiAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTV9XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgICBzc3JBbmltYXRpb249e3sgd2lkdGg6IDI3NiwgaGVpZ2h0OiAyMTcgfX1cbiAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmxvZ3MubWFwKCh0cmF2ZWxTdG9yeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCByYWRpdXMyIHJlbGF0aXZlXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3RyYXZlbFN0b3J5LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0cmF2ZWxTdG9yeS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXt0cmF2ZWxTdG9yeS5oZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGltYWdla2l0VXJsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlbFN0b3J5LnRodW1ibmFpbEltYWdlUGF0aHMuaW1hZ2VraXRVcmxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsSW1hZ2VQYXRoPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlbFN0b3J5LnRodW1ibmFpbEltYWdlUGF0aHMuc3JjXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHVybD17dHJhdmVsU3RvcnkudXJsfVxuICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17dGhpcy50cmFja1NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhdmVsU3RvcnkuY29udGVudCA/IHRyYXZlbFN0b3J5LmNvbnRlbnQuc3Vic3RyaW5nKDAsIDcwKSA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdDYXJkSW1nID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzE0MHB4JyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnJiBpbWcnOiB7XG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgJyYgLmhvdmVyUmVhZE1vcmUnOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknLFxuICAgICcmIHNwYW4nOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmYnLFxuICAgICAgcGFkZGluZzogJzEycHggNDBweCcsXG4gICAgfSxcbiAgfSxcbiAgJyY6aG92ZXIgLmhvdmVyUmVhZE1vcmUnOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICAnJjpiZWZvcmUnIDoge1xuICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICBiYWNrZ3JvdW5kOiAnLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjIxKSAzNSUsIHJnYigwLDAsMCkgMTAwJSknLFxuICAgIGJhY2tncm91bmQ6ICctd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC4yMSkgMzUlLHJnYigwLDAsMCkgMTAwJSknLFxuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuMjEpIDM1JSxyZ2IoMCwwLDApIDEwMCUpJyxcbiAgICBmaWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjMDBmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjOTkwMDAwMDBcIixHcmFkaWVudFR5cGU9MCApJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgR0NhcmREYXRhRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBhZGRpbmdUb3A6ICcxNXB4JyxcbiAgcGFkZGluZ0JvdHRvbTogJzAnXG59KTtcblxuZXhwb3J0IGNvbnN0IEdEYXRlTGlua0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdIZWFkaW5nSDYgPSBnbGFtb3JvdXMuaDYoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gIGhlaWdodDogJzQwcHgnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHQ29udGVudFAgPSBnbGFtb3JvdXMucCh7XG4gICcmIHNwYW4nOiB7XG4gICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR0NhcmREYXRhRGl2LCBHQ2FyZEltZywgR0NvbnRlbnRQIH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgdGl0bGUsIGhlYWRpbmcsIGNvbnRlbnQsIHVybCwgaW1hZ2VraXRVcmwsIHRodW1ibmFpbEltYWdlUGF0aCwgdHJhY2tTZWdtZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHNiY3dcIj5cbiAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgb25DbGljaz17KCkgPT4gdHJhY2tTZWdtZW50KE9SR0FOSVNNX0NMSUNLRUQsICdJbWFnZSBDYXJkJywgaGVhZGluZyl9PlxuICAgICAgICA8R0NhcmRJbWcgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8SW1nIHdpZHRoPXszMjB9IGhlaWdodD17MTQwfSBzcmM9e3RodW1ibmFpbEltYWdlUGF0aH0gaWtTcmM9e2ltYWdla2l0VXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiMCBsMCByMCBwOCBzZmN3IGYxNFwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIDwvR0NhcmRJbWc+XG4gICAgICAgIDxHQ2FyZERhdGFEaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBmYzMgZjE2IGZ3NyBvdmVyZmxvd2ggbTAgbWI4XCI+e2hlYWRpbmd9PC9oMz5cbiAgICAgICAgICA8R0NvbnRlbnRQIGNsYXNzTmFtZT1cImYxNCBwZmM0XCI+e3BhcnNlci5wYXJzZShjb250ZW50KX08L0dDb250ZW50UD5cbiAgICAgICAgPC9HQ2FyZERhdGFEaXY+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aHVtYm5haWxJbWFnZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbmltcG9ydCB7IGZldGNoRGVzdGluYXRpb25CbG9ncyB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCBEZXN0aW5hdGlvbkJsb2dzIGZyb20gJy4vRGVzdGluYXRpb25CbG9ncyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBkZXN0aW5hdGlvbkJsb2dzOiBfZ2V0KHN0YXRlLCAnZGVzdGluYXRpb25CbG9ncy5ibG9ncycsIHt9KSxcbiAgICBsb2FkZWQ6IHN0YXRlLnRyYXZlbGxlclN0b3JpZXMubG9hZGVkLFxuICAgIGVycm9yczogc3RhdGUudHJhdmVsbGVyU3Rvcmllcy5lcnJvcnMsXG4gIH0pLCB7XG4gICAgZmV0Y2hEZXN0aW5hdGlvbkJsb2dzXG4gIH1cbikoRGVzdGluYXRpb25CbG9ncykpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge1xuICAgIGZldGNoRGVzdGluYXRpb25CbG9nc1xuICB9LFxuICBkZWZhdWx0QWN0aW9uOiBmZXRjaERlc3RpbmF0aW9uQmxvZ3Ncbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgU3ViSGVhZGluZyA9IGdsYW1vcm91cy5wKHtcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbGluZUhlaWdodDogJzE4cHgnLFxuICBjb2xvcjogJyNjYmNiY2InLFxuICBtYXJnaW46ICc0cHggMCAwIDAnLFxufSk7XG5cbmNvbnN0IEhlYWRpbmcgPSAoeyBkYXRhLCB0aXRsZSwgaGVhZGluZywgc3R5bGVIZWFkaW5nLCBzdHlsZVN1YkhlYWRpbmcsIHR5cGUsIGlzVmlld0FsbEhpZGRlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBtYjE1XCI+XG4gICAgICB7XG4gICAgICAgIHR5cGUgPT09ICdtYWluLWhlYWRpbmcnID9cbiAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlSGVhZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1ZpZXdBbGxIaWRkZW4gPyAncHIwICcgOiAncHI2NCAnfSBmMTYgcGZjMSBmdzkgbTBgfT57ZGF0YS50aXRsZSB8fCB0aXRsZX17ZGF0YS5mb3JIZWFkaW5nID8gYCBmb3IgJHtkYXRhLmZvckhlYWRpbmd9YCA6IG51bGx9PC9oMj5cbiAgICAgICAgICA6IDxoMiBzdHlsZT17c3R5bGVIZWFkaW5nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNWaWV3QWxsSGlkZGVuID8gJ3ByMCAnIDogJ3ByNjQgJ30gZjE2IHBmYzMgZndiIG0wYH0+e2RhdGEudGl0bGUgfHwgdGl0bGV9e2RhdGEuZm9ySGVhZGluZyA/IGAgZm9yICR7ZGF0YS5mb3JIZWFkaW5nfWAgOiBudWxsfTwvaDI+XG4gICAgICB9XG4gICAgICB7ZGF0YS5oZWFkaW5nIHx8IGhlYWRpbmcgP1xuICAgICAgICA8U3ViSGVhZGluZyBzdHlsZT17c3R5bGVTdWJIZWFkaW5nfSBjbGFzc05hbWU9XCJmMTQgbXQ0IGZ3NFwiPntkYXRhLmhlYWRpbmcgfHwgaGVhZGluZ308L1N1YkhlYWRpbmc+IDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZUhlYWRpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN0eWxlU3ViSGVhZGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNWaWV3QWxsSGlkZGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9LFxuICB0eXBlOiAnJyxcbiAgdGl0bGU6ICcnLFxuICBoZWFkaW5nOiAnJyxcbiAgc3R5bGVIZWFkaW5nOiB7fSxcbiAgc3R5bGVTdWJIZWFkaW5nOiB7fSxcbiAgaXNWaWV3QWxsSGlkZGVuOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgJy4vU3dpcGVyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNzckFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzU21hbGxTd2lwZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzRnVsbFdpZHRoU3dpcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2FkT25Eb2N1bWVudFJlYWR5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZWJ1aWxkT25VcGRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dMb2FkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG92ZXJmbG93OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3NyQW5pbWF0aW9uOiB7fSxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgaXNTbWFsbFN3aXBlcjogZmFsc2UsXG4gICAgaXNGdWxsV2lkdGhTd2lwZXI6IGZhbHNlLFxuICAgIGxvYWRPbkRvY3VtZW50UmVhZHk6IGZhbHNlLFxuICAgIHNob3dMb2FkZXI6IGZhbHNlLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9O1xuICBzdGF0ZSA9IHt9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN3aXBlckFzeW5jID0gKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3dpcGVyJyAqLyBcInJlYWN0LWlkLXN3aXBlclwiKVxuICAgICAgICAudGhlbihzID0+IHRoaXMuc2V0U3RhdGUoeyBSZWFjdElkU3dpcGVyOiBzLmRlZmF1bHQgfSkpO1xuXG4gICAgLy8gaWYgKHRoaXMucHJvcHMubG9hZE9uRG9jdW1lbnRSZWFkeSkge1xuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA/IHN3aXBlckFzeW5jKCkgOiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc3dpcGVyQXN5bmMpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9XG4gIH1cblxuICByZW5kZXJTZXJ2ZXIgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlcyA9IHsgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6IHdpZHRoLCBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlPXtzdHlsZXN9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9faHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKGMpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHdcXFddKz8pXFwvPi9nLCBgPGRpdiBzdHlsZT1cIndpZHRoOiR7d2lkdGh9cHg7IGhlaWdodDogJHtoZWlnaHR9cHhcIiAvPmApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDogJ3N3aXBlclNpbmdsZUNoaWxkJ30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydsYXp5bG9hZGluZyd9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBfX2h0bWwgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyRW1wdHlDbGllbnQgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSA/ICdzd2lwZXJDdXN0b21XaWR0aCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQnfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IFJlYWN0SWRTd2lwZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpc1NtYWxsU3dpcGVyLCBpc0Z1bGxXaWR0aFN3aXBlciwgc3NyQW5pbWF0aW9uLCBzaG93TG9hZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKF9fU0VSVkVSX18pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNlcnZlcihzc3JBbmltYXRpb24pO1xuICAgIH1cblxuICAgIGlmICghUmVhY3RJZFN3aXBlcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRW1wdHlDbGllbnQoc3NyQW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0SWRTd2lwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICAgICFpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlcikgP1xuICAgICAgICAgICAgICAgICdzd2lwZXJDdXN0b21XaWR0aCBibG9jaycgOiBpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlciA/XG4gICAgICAgICAgICAgICAgICAnc21hbGxTd2lwZXJDb250YWluZXIgYmxvY2snIDogaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgICAnd2Z1bGwnIDogJ3N3aXBlclNpbmdsZUNoaWxkIHdmdWxsIGJsb2NrJ30+XG4gICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAge3Nob3dMb2FkZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1sYXp5LXByZWxvYWRlclwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L1JlYWN0SWRTd2lwZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3dpcGVyLXByZWxvYWRlci1zcGluXCI6IFwiXzMzMDhZXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==