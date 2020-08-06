require("source-map-support").install();
exports.ids = ["city-block-overview~hotel-listing~listing~search"];
exports.modules = {

/***/ "./app-v2/modules/shared/G.js":
/*!************************************!*\
  !*** ./app-v2/modules/shared/G.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GAppliedSmallDiv = exports.GAppliedDiv = exports.GBusIconDiv = exports.GErrorBodyDiv = exports.GLoaderLineDiv = exports.GLoaderBoxSpan = exports.GLoaderCardSpan = exports.GLoaderContainerDiv = exports.GRequestSubmittedDiv = exports.GInclusionIconSpan = exports.GInclusionContainerDiv = exports.GLockIconSpan = exports.GFacebookSignInDiv = exports.GFacebookLoginLink = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

/* FacebookLogin */
const GFacebookLoginLink = _glamorous.default.a({
  background: '#3c5193',
  height: '48px',
  borderRadius: '2px',
  textAlign: 'center',
  color: '#FFFFFF',
  fontSize: '14px',
  fontWeight: '700',
  width: '100%',
  position: 'relative',
  padding: '15px 0',
  '&:hover': {
    color: '#fff'
  },
  ' .facebook-icon svg': {
    height: '25px'
  }
});
/* FacebookSignDNE */


exports.GFacebookLoginLink = GFacebookLoginLink;

const GFacebookSignInDiv = _glamorous.default.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: '100%',
  right: '0',
  top: '0',
  position: 'absolute',
  background: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 16%,rgba(0,0,0,0.65) 28%,rgba(0,0,0,0.66) 30%,rgba(0,0,0,1) 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#a6000000",GradientType=1 )'
});

exports.GFacebookSignInDiv = GFacebookSignInDiv;

const GLockIconSpan = _glamorous.default.span({
  width: '14px',
  height: '14px',
  '& svg': {
    width: '14px',
    height: '14px'
  }
});
/* PackageIncExc */


exports.GLockIconSpan = GLockIconSpan;

const GInclusionContainerDiv = _glamorous.default.div({
  display: 'flex',
  '& .packageIncExc:first-child': {
    marginLeft: '0'
  },
  '& .packageIncExc:last-child': {
    marginRight: '0'
  },
  '& .packageIncExc': {
    margin: '0 8px'
  },
  '&:before, &:after': {
    display: 'none'
  },
  '& .inclusionName': {
    lineHeight: '12px',
    fontSize: '10px',
    paddingTop: '5px',
    wordWrap: 'break-word',
    color: '#3e3e3e',
    display: 'block',
    textAlign: 'center'
  },
  '& .not-included': {
    opacity: '0.4',
    filter: 'grayscale(100%)'
  }
});

exports.GInclusionContainerDiv = GInclusionContainerDiv;

const GInclusionIconSpan = _glamorous.default.span({
  width: '24px',
  display: 'block',
  margin: '0 auto',
  height: '24px',
  position: 'relative',
  '& svg': {
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'auto',
    maxWidth: '100%',
    height: '20px',
    position: 'absolute',
    bottom: '0',
    display: 'block',
    top: 'auto'
  }
});

exports.GInclusionIconSpan = GInclusionIconSpan;

const GRequestSubmittedDiv = _glamorous.default.div({
  width: '115px',
  height: '85px',
  margin: '0 auto',
  '& .phone-box': {
    width: '115px',
    height: '85px',
    '& svg': {
      width: '115px',
      height: '85px'
    }
  },
  '& .thankyou-tick': {
    right: '0px'
  }
});

exports.GRequestSubmittedDiv = GRequestSubmittedDiv;

const GLoaderContainerDiv = _glamorous.default.div({
  '& .loaderLine': {
    height: '12px',
    margin: '10px 0 0 0',
    width: '70%'
  },
  '& .loaderMain': {
    display: 'flex',
    overflow: 'hidden',
    '& .loaderMainCard': {},
    '& .hiddenCard': {
      display: 'none'
    }
  },
  '& .loaderLineDark': {
    height: '10px',
    maxWidth: '70%'
  },
  '& .loaderData': {
    width: '100%',
    maxWidth: '320px'
  }
});

exports.GLoaderContainerDiv = GLoaderContainerDiv;

const GLoaderCardSpan = _glamorous.default.span({
  height: '139px',
  display: 'block'
});

exports.GLoaderCardSpan = GLoaderCardSpan;

const GLoaderBoxSpan = _glamorous.default.span({
  width: '40px',
  height: '40px',
  minWidth: '40px'
});

exports.GLoaderBoxSpan = GLoaderBoxSpan;

const GLoaderLineDiv = _glamorous.default.div({
  justifyContent: 'flex-end',
  flexDirection: 'column'
});

exports.GLoaderLineDiv = GLoaderLineDiv;

const GErrorBodyDiv = _glamorous.default.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

exports.GErrorBodyDiv = GErrorBodyDiv;

const GBusIconDiv = _glamorous.default.div({
  width: '164px',
  height: '87px',
  margin: '0 auto',
  '& svg': {
    width: '164px',
    height: '87px'
  }
});

exports.GBusIconDiv = GBusIconDiv;

const GAppliedDiv = _glamorous.default.div({
  fontSize: '12px !important',
  lineHeight: '16px',
  padding: '2px 8px'
});

exports.GAppliedDiv = GAppliedDiv;

const GAppliedSmallDiv = _glamorous.default.div({
  fontSize: '10px !important',
  lineHeight: '10px',
  padding: '3px 6px'
});

exports.GAppliedSmallDiv = GAppliedSmallDiv;

/***/ }),

/***/ "./app-v2/modules/shared/SliderWithTitle.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/shared/SliderWithTitle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Card = _interopRequireDefault(__webpack_require__(/*! modules/shared/card/Card */ "./app-v2/modules/shared/card/Card.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Title = _interopRequireDefault(__webpack_require__(/*! modules/shared/Title */ "./app-v2/modules/shared/Title.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SliderWithTitle = ({
  data,
  overflow
}) => {
  return _react.default.createElement("div", null, _react.default.createElement(_Title.default, {
    data: data
  }), _react.default.createElement("div", {
    className: "clearfix swiper-full-width"
  }, _react.default.createElement(_Swiper.default, {
    slideClass: "slide",
    spaceBetween: 15,
    slidesPerView: "auto",
    rebuildOnUpdate: true,
    ssrAnimation: {
      width: 280,
      height: 267
    },
    overflow: overflow
  }, data.destinationSchemes && data.destinationSchemes.map((item, index) => _react.default.createElement("div", {
    className: "clearfix radius2 relative",
    key: index
  }, _react.default.createElement(_Card.default, {
    item: item
  }))))));
};

SliderWithTitle.propTypes = {
  data: _propTypes.default.object.isRequired,
  config: _propTypes.default.object,
  link: _propTypes.default.string,
  overflow: _propTypes.default.string
};
SliderWithTitle.defaultProps = {
  config: {},
  overflow: 'hidden'
};
var _default = SliderWithTitle;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Title.js":
/*!****************************************!*\
  !*** ./app-v2/modules/shared/Title.js ***!
  \****************************************/
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

const TitleMain = _glamorous.default.h6({
  fontSize: '20px',
  lineHeight: '24px',
  color: '#3e3e3e',
  margin: '0',
  fontWeight: '900'
});

const SubTitle = _glamorous.default.p({
  fontSize: '14px',
  lineHeight: '18px',
  color: '#cbcbcb',
  margin: '4px 0 0 0'
});

const Title = ({
  data,
  config,
  trackSegment
}) => {
  return _react.default.createElement("div", {
    className: "flex spaceBetween relative mb15"
  }, _react.default.createElement("div", {
    className: "relative"
  }, _react.default.createElement("h2", {
    className: "f16 m0 pr64 fw7"
  }, config.title || data.title), _react.default.createElement("p", {
    className: "f14 m0 mt4 pfc4"
  }, config.heading || data.heading || 'Your list of the best things to do, compiled on the basis of actual traveler experiences'), data.viewAll ? _react.default.createElement("a", {
    className: "absolute t2 r0 iblock f14 fw7",
    href: data.viewAll,
    target: "_blank",
    onClick: () => trackSegment('View all', '')
  }, "View All") : null));
};

Title.propTypes = {
  data: _propTypes.default.object,
  config: _propTypes.default.object,
  trackSegment: _propTypes.default.func
};
Title.defaultProps = {
  data: {},
  config: {},
  trackSegment: () => {}
};
var _default = Title;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/card/Card.js":
/*!********************************************!*\
  !*** ./app-v2/modules/shared/card/Card.js ***!
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

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _gCard = __webpack_require__(/*! ./gCard */ "./app-v2/modules/shared/card/gCard.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = new _htmlToReact.Parser();

const Card = ({
  item
}) => {
  const linkTarget = item.openInNewTab ? '_self' : '_blank';
  return _react.default.createElement(_reactRouter.Link, {
    to: item.urlSpotlight,
    href: item.urlSpotlight,
    target: linkTarget,
    className: "pfc3 block"
  }, _react.default.createElement("div", {
    className: "clearfix sbcw"
  }, _react.default.createElement(_gCard.GCardImg, {
    className: "relative"
  }, _react.default.createElement(_Img.default, {
    width: 320,
    height: 140,
    src: item.imageUrl,
    ikSrc: item.imagekitUrl,
    alt: item.imageAlt
  }), item.imageUrl || item.imagekitUrl ? null : _react.default.createElement(_gCard.GDefaultIconDiv, null, _react.default.createElement(_Icon.MountainIcon, null))), _react.default.createElement(_gCard.GCardDataDiv, null, _react.default.createElement("h3", {
    className: "ellipsis f14 fw7 m0 mb4"
  }, item.title), _react.default.createElement(_gCard.GCardDataTextDiv, {
    className: "f12 m0 pfc3 dynamicTextInherit"
  }, parser.parse(item.description)), _react.default.createElement("div", {
    className: "flex justifyEnd"
  }, _react.default.createElement("button", {
    className: "f14 fw7 mt8 sfc1"
  }, "Read More")), _react.default.createElement(_gCard.GCardFooterDiv, {
    className: "flex mt5"
  }, _react.default.createElement(_gCard.GUl, {
    className: "flexFull"
  }, item.labels.map((label, index) => _react.default.createElement("li", {
    className: "pfc3",
    key: index
  }, label)))))));
};

Card.propTypes = {
  item: _propTypes.default.object.isRequired
};
Card.defaultProps = {};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/card/gCard.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/shared/card/gCard.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GCardFooterDiv = exports.GDefaultIconDiv = exports.GCardDataTextDiv = exports.GUl = exports.GCardDataDiv = exports.GCardImg = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GCardImg = _glamorous.default.div({
  height: '140px',
  overflow: 'hidden',
  width: '100%',
  backgroundColor: '#e4e4e4',
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
      padding: '12px 40px',
      '&:hover': {
        color: '#333',
        border: '1px solid #333',
        background: '#fff'
      }
    }
  },
  '&:hover .hoverReadMore': {
    display: 'flex'
  }
});

exports.GCardImg = GCardImg;

const GCardDataDiv = _glamorous.default.div({
  paddingTop: '15px',
  paddingBottom: '0',
  borderTop: '0',
  borderBottomRightRadius: '2px',
  borderBottomLeftRadius: '2px'
});

exports.GCardDataDiv = GCardDataDiv;

const GUl = _glamorous.default.ul({
  margin: '8px 0 0 0',
  height: '26px',
  overflow: 'hidden',
  '& li': {
    fontSize: '12px',
    lineHeight: '12px',
    borderRadius: '20px',
    padding: '5px 10px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0',
    color: '#3e3e3e'
  }
});

exports.GUl = GUl;

const GCardDataTextDiv = _glamorous.default.div({
  fontSize: '12px',
  lineHeight: '16px',
  height: '48px',
  overflow: 'hidden',
  marginBottom: '8px',
  '& *': {
    fontSize: '12px !important',
    lineHeight: '16px !important',
    margin: '0'
  },
  '& p': {
    fontSize: '12px !important',
    lineHeight: '16px !important',
    margin: '0'
  }
});

exports.GCardDataTextDiv = GCardDataTextDiv;

const GDefaultIconDiv = _glamorous.default.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  '& svg': {
    width: '83px',
    height: '48px'
  }
});

exports.GDefaultIconDiv = GDefaultIconDiv;

const GCardFooterDiv = _glamorous.default.div({
  justifyContent: 'space-between',
  alignItems: 'center'
});

exports.GCardFooterDiv = GCardFooterDiv;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU2xpZGVyV2l0aFRpdGxlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvY2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9jYXJkL2dDYXJkLmpzIl0sIm5hbWVzIjpbIkdGYWNlYm9va0xvZ2luTGluayIsImdsYW1vcm91cyIsImEiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uIiwicGFkZGluZyIsIkdGYWNlYm9va1NpZ25JbkRpdiIsImRpdiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJyaWdodCIsInRvcCIsImZpbHRlciIsIkdMb2NrSWNvblNwYW4iLCJzcGFuIiwiR0luY2x1c2lvbkNvbnRhaW5lckRpdiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbiIsImxpbmVIZWlnaHQiLCJwYWRkaW5nVG9wIiwid29yZFdyYXAiLCJvcGFjaXR5IiwiR0luY2x1c2lvbkljb25TcGFuIiwibGVmdCIsInRyYW5zZm9ybSIsIm1heFdpZHRoIiwiYm90dG9tIiwiR1JlcXVlc3RTdWJtaXR0ZWREaXYiLCJHTG9hZGVyQ29udGFpbmVyRGl2Iiwib3ZlcmZsb3ciLCJHTG9hZGVyQ2FyZFNwYW4iLCJHTG9hZGVyQm94U3BhbiIsIm1pbldpZHRoIiwiR0xvYWRlckxpbmVEaXYiLCJmbGV4RGlyZWN0aW9uIiwiR0Vycm9yQm9keURpdiIsIkdCdXNJY29uRGl2IiwiR0FwcGxpZWREaXYiLCJHQXBwbGllZFNtYWxsRGl2IiwiU2xpZGVyV2l0aFRpdGxlIiwiZGF0YSIsImRlc3RpbmF0aW9uU2NoZW1lcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJjb25maWciLCJsaW5rIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiVGl0bGVNYWluIiwiaDYiLCJTdWJUaXRsZSIsInAiLCJUaXRsZSIsInRyYWNrU2VnbWVudCIsInRpdGxlIiwiaGVhZGluZyIsInZpZXdBbGwiLCJmdW5jIiwicGFyc2VyIiwiUGFyc2VyIiwiQ2FyZCIsImxpbmtUYXJnZXQiLCJvcGVuSW5OZXdUYWIiLCJ1cmxTcG90bGlnaHQiLCJpbWFnZVVybCIsImltYWdla2l0VXJsIiwiaW1hZ2VBbHQiLCJwYXJzZSIsImRlc2NyaXB0aW9uIiwibGFiZWxzIiwibGFiZWwiLCJHQ2FyZEltZyIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsImJvcmRlciIsIkdDYXJkRGF0YURpdiIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJHVWwiLCJ1bCIsImxpc3RTdHlsZSIsIkdDYXJkRGF0YVRleHREaXYiLCJtYXJnaW5Cb3R0b20iLCJHRGVmYXVsdEljb25EaXYiLCJHQ2FyZEZvb3RlckRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBREE7O0FBR0E7QUFDTyxNQUFNQSxxQkFBcUJDLG1CQUFVQyxDQUFWLENBQVk7QUFDNUNDLGNBQVksU0FEZ0M7QUFFNUNDLFVBQVEsTUFGb0M7QUFHNUNDLGdCQUFjLEtBSDhCO0FBSTVDQyxhQUFXLFFBSmlDO0FBSzVDQyxTQUFPLFNBTHFDO0FBTTVDQyxZQUFVLE1BTmtDO0FBTzVDQyxjQUFZLEtBUGdDO0FBUTVDQyxTQUFPLE1BUnFDO0FBUzVDQyxZQUFVLFVBVGtDO0FBVTVDQyxXQUFTLFFBVm1DO0FBVzVD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QUFRLE1BSG9DO0FBSTVDa0MsWUFBVSxRQUprQztBQUs1QzRELGdCQUFjLEtBTDhCO0FBTTVDLFNBQU87QUFDTDFGLGNBQVUsaUJBREw7QUFFTG1CLGdCQUFZLGlCQUZQO0FBR0xELFlBQVE7QUFISCxHQU5xQztBQVc1QyxTQUFPO0FBQ0xsQixjQUFVLGlCQURMO0FBRUxtQixnQkFBWSxpQkFGUDtBQUdMRCxZQUFRO0FBSEg7QUFYcUMsQ0FBZCxDQUF6Qjs7OztBQWtCQSxNQUFNeUUsa0JBQWtCbEcsbUJBQVVhLEdBQVYsQ0FBYztBQUMzQ0MsV0FBUyxNQURrQztBQUUzQ0MsY0FBWSxRQUYrQjtBQUczQ0Msa0JBQWdCLFFBSDJCO0FBSTNDUCxTQUFPLE1BSm9DO0FBSzNDTixVQUFRLE1BTG1DO0FBTTNDTyxZQUFVLFVBTmlDO0FBTzNDUSxPQUFLLEdBUHNDO0FBUTNDYSxRQUFNLEdBUnFDO0FBUzNDLFdBQVM7QUFDUHRCLFdBQU8sTUFEQTtBQUVQTixZQUFRO0FBRkQ7QUFUa0MsQ0FBZCxDQUF4Qjs7OztBQWdCQSxNQUFNZ0csaUJBQWlCbkcsbUJBQVVhLEdBQVYsQ0FBYztBQUMxQ0csa0JBQWdCLGVBRDBCO0FBRTFDRCxjQUFZO0FBRjhCLENBQWQsQ0FBdkIiLCJmaWxlIjoiY2l0eS1ibG9jay1vdmVydmlld35ob3RlbC1saXN0aW5nfmxpc3Rpbmd+c2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuLyogRmFjZWJvb2tMb2dpbiAqL1xuZXhwb3J0IGNvbnN0IEdGYWNlYm9va0xvZ2luTGluayA9IGdsYW1vcm91cy5hKHtcbiAgYmFja2dyb3VuZDogJyMzYzUxOTMnLFxuICBoZWlnaHQ6ICc0OHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgY29sb3I6ICcjRkZGRkZGJyxcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgZm9udFdlaWdodDogJzcwMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBwYWRkaW5nOiAnMTVweCAwJyxcbiAgJyY6aG92ZXInOiB7XG4gICAgY29sb3I6ICcjZmZmJ1xuICB9LFxuICAnIC5mYWNlYm9vay1pY29uIHN2Zyc6IHtcbiAgICBoZWlnaHQ6ICcyNXB4J1xuICB9XG59KTtcblxuLyogRmFjZWJvb2tTaWduRE5FICovXG5leHBvcnQgY29uc3QgR0ZhY2Vib29rU2lnbkluRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgd2lkdGg6ICc1MCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgcmlnaHQ6ICcwJyxcbiAgdG9wOiAnMCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC42NSkgMTYlLHJnYmEoMCwwLDAsMC42NSkgMjglLHJnYmEoMCwwLDAsMC42NikgMzAlLHJnYmEoMCwwLDAsMSkgMTAwJSknLFxuICBmaWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjMDAwMDAwMDBcIiwgZW5kQ29sb3JzdHI9XCIjYTYwMDAwMDBcIixHcmFkaWVudFR5cGU9MSApJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR0xvY2tJY29uU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxNHB4JyxcbiAgaGVpZ2h0OiAnMTRweCcsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzE0cHgnLFxuICAgIGhlaWdodDogJzE0cHgnLFxuICB9XG59KTtcblxuLyogUGFja2FnZUluY0V4YyAqL1xuZXhwb3J0IGNvbnN0IEdJbmNsdXNpb25Db250YWluZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICAnJiAucGFja2FnZUluY0V4YzpmaXJzdC1jaGlsZCc6IHtcbiAgICBtYXJnaW5MZWZ0OiAnMCcsXG4gIH0sXG4gICcmIC5wYWNrYWdlSW5jRXhjOmxhc3QtY2hpbGQnOiB7XG4gICAgbWFyZ2luUmlnaHQ6ICcwJyxcbiAgfSxcbiAgJyYgLnBhY2thZ2VJbmNFeGMnOiB7XG4gICAgbWFyZ2luOiAnMCA4cHgnLFxuICB9LFxuICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuICAnJiAuaW5jbHVzaW9uTmFtZSc6e1xuICAgIGxpbmVIZWlnaHQ6ICcxMnB4JyxcbiAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgIHBhZGRpbmdUb3A6ICc1cHgnLFxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gICcmIC5ub3QtaW5jbHVkZWQnOiB7XG4gICAgb3BhY2l0eTogJzAuNCcsXG4gICAgZmlsdGVyOiAnZ3JheXNjYWxlKDEwMCUpJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBHSW5jbHVzaW9uSWNvblNwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMjRweCcsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIGhlaWdodDogJzI0cHgnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgJyYgc3ZnJzp7XG4gICAgbGVmdDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogJzAnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdG9wOiAnYXV0bycsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IEdSZXF1ZXN0U3VibWl0dGVkRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMTE1cHgnLFxuICBoZWlnaHQ6ICc4NXB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgJyYgLnBob25lLWJveCc6IHtcbiAgICB3aWR0aDogJzExNXB4JyxcbiAgICBoZWlnaHQ6ICc4NXB4JyxcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzExNXB4JyxcbiAgICAgIGhlaWdodDogJzg1cHgnLFxuICAgIH0sXG4gIH0sXG4gICcmIC50aGFua3lvdS10aWNrJzoge1xuICAgIHJpZ2h0OiAnMHB4JyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgR0xvYWRlckNvbnRhaW5lckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAubG9hZGVyTGluZSc6IHtcbiAgICBoZWlnaHQ6ICcxMnB4JyxcbiAgICBtYXJnaW46ICcxMHB4IDAgMCAwJyxcbiAgICB3aWR0aDogJzcwJScsXG4gIH0sXG4gICcmIC5sb2FkZXJNYWluJzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJyYgLmxvYWRlck1haW5DYXJkJzoge1xuXG4gICAgfSxcbiAgICAnJiAuaGlkZGVuQ2FyZCc6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gICcmIC5sb2FkZXJMaW5lRGFyayc6IHtcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICBtYXhXaWR0aDogJzcwJScsXG4gIH0sXG4gICcmIC5sb2FkZXJEYXRhJzoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICczMjBweCcsXG4gIH0sXG5cbn0pO1xuXG5leHBvcnQgY29uc3QgR0xvYWRlckNhcmRTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICBoZWlnaHQ6ICcxMzlweCcsXG4gIGRpc3BsYXk6ICdibG9jaycsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdMb2FkZXJCb3hTcGFuID0gIGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICc0MHB4JyxcbiAgaGVpZ2h0OiAnNDBweCcsXG4gIG1pbldpZHRoOiAnNDBweCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdMb2FkZXJMaW5lRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR0Vycm9yQm9keURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdCdXNJY29uRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMTY0cHgnLFxuICBoZWlnaHQ6ICc4N3B4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTY0cHgnLFxuICAgIGhlaWdodDogJzg3cHgnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdBcHBsaWVkRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGZvbnRTaXplOiAnMTJweCAhaW1wb3J0YW50JyxcbiAgbGluZUhlaWdodDogJzE2cHgnLFxuICBwYWRkaW5nOiAnMnB4IDhweCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdBcHBsaWVkU21hbGxEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgZm9udFNpemU6ICcxMHB4ICFpbXBvcnRhbnQnLFxuICBsaW5lSGVpZ2h0OiAnMTBweCcsXG4gIHBhZGRpbmc6ICczcHggNnB4Jyxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJ21vZHVsZXMvc2hhcmVkL2NhcmQvQ2FyZCc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvVGl0bGUnO1xuXG5jb25zdCBTbGlkZXJXaXRoVGl0bGUgPSAoeyBkYXRhLCBvdmVyZmxvdyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUaXRsZSBkYXRhPXtkYXRhfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzd2lwZXItZnVsbC13aWR0aFwiPlxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgc2xpZGVDbGFzcz1cInNsaWRlXCJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICByZWJ1aWxkT25VcGRhdGVcbiAgICAgICAgICBzc3JBbmltYXRpb249e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNjcgfX1cbiAgICAgICAgICBvdmVyZmxvdz17b3ZlcmZsb3d9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMgJiZcbiAgICAgICAgICBkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHJhZGl1czIgcmVsYXRpdmVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPENhcmQgaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXBlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2xpZGVyV2l0aFRpdGxlLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJmbG93OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TbGlkZXJXaXRoVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBjb25maWc6IHt9LFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcldpdGhUaXRsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBUaXRsZU1haW4gPSBnbGFtb3JvdXMuaDYoe1xuICBmb250U2l6ZTogJzIwcHgnLFxuICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gIGNvbG9yOiAnIzNlM2UzZScsXG4gIG1hcmdpbjogJzAnLFxuICBmb250V2VpZ2h0OiAnOTAwJ1xufSk7XG5cbmNvbnN0IFN1YlRpdGxlID0gZ2xhbW9yb3VzLnAoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gIGNvbG9yOiAnI2NiY2JjYicsXG4gIG1hcmdpbjogJzRweCAwIDAgMCdcbn0pO1xuXG5jb25zdCBUaXRsZSA9ICh7IGRhdGEsIGNvbmZpZywgdHJhY2tTZWdtZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZUJldHdlZW4gcmVsYXRpdmUgbWIxNSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdmMTYgbTAgcHI2NCBmdzcnPntjb25maWcudGl0bGUgfHwgZGF0YS50aXRsZX08L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2YxNCBtMCBtdDQgcGZjNCc+XG4gICAgICAgICAge2NvbmZpZy5oZWFkaW5nIHx8XG4gICAgICAgICAgICBkYXRhLmhlYWRpbmcgfHxcbiAgICAgICAgICAgICdZb3VyIGxpc3Qgb2YgdGhlIGJlc3QgdGhpbmdzIHRvIGRvLCBjb21waWxlZCBvbiB0aGUgYmFzaXMgb2YgYWN0dWFsIHRyYXZlbGVyIGV4cGVyaWVuY2VzJ31cbiAgICAgICAgPC9wPlxuICAgICAgICB7ZGF0YS52aWV3QWxsID8gKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0MiByMCBpYmxvY2sgZjE0IGZ3N1wiXG4gICAgICAgICAgICBocmVmPXtkYXRhLnZpZXdBbGx9XG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRyYWNrU2VnbWVudCgnVmlldyBhbGwnLCAnJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBBbGxcbiAgICAgICAgICA8L2E+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRpdGxlLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5UaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9LFxuICBjb25maWc6IHt9LFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcblxuaW1wb3J0IHtcbiAgR0NhcmRJbWcsXG4gIEdDYXJkRGF0YURpdixcbiAgR1VsLFxuICBHQ2FyZERhdGFUZXh0RGl2LFxuICBHRGVmYXVsdEljb25EaXYsXG4gIEdDYXJkRm9vdGVyRGl2XG59IGZyb20gJy4vZ0NhcmQnO1xuaW1wb3J0IHsgTW91bnRhaW5JY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IENhcmQgPSAoeyBpdGVtIH0pID0+IHtcbiAgY29uc3QgbGlua1RhcmdldCA9IGl0ZW0ub3BlbkluTmV3VGFiID8gJ19zZWxmJzogJ19ibGFuayc7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e2l0ZW0udXJsU3BvdGxpZ2h0fSBocmVmPXtpdGVtLnVybFNwb3RsaWdodH0gdGFyZ2V0PXtsaW5rVGFyZ2V0fSBjbGFzc05hbWU9J3BmYzMgYmxvY2snPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NsZWFyZml4IHNiY3cnPlxuICAgICAgICA8R0NhcmRJbWcgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XG4gICAgICAgICAgPEltZyB3aWR0aD17MzIwfSBoZWlnaHQ9ezE0MH0gc3JjPXtpdGVtLmltYWdlVXJsfSBpa1NyYz17aXRlbS5pbWFnZWtpdFVybH0gYWx0PXtpdGVtLmltYWdlQWx0fSAvPlxuICAgICAgICAgIHtpdGVtLmltYWdlVXJsIHx8IGl0ZW0uaW1hZ2VraXRVcmwgPyBudWxsIDogKFxuICAgICAgICAgICAgPEdEZWZhdWx0SWNvbkRpdj5cbiAgICAgICAgICAgICAgPE1vdW50YWluSWNvbiAvPlxuICAgICAgICAgICAgPC9HRGVmYXVsdEljb25EaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HQ2FyZEltZz5cbiAgICAgICAgPEdDYXJkRGF0YURpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdlbGxpcHNpcyBmMTQgZnc3IG0wIG1iNCc+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICA8R0NhcmREYXRhVGV4dERpdiBjbGFzc05hbWU9J2YxMiBtMCBwZmMzIGR5bmFtaWNUZXh0SW5oZXJpdCc+XG4gICAgICAgICAgICB7cGFyc2VyLnBhcnNlKGl0ZW0uZGVzY3JpcHRpb24pfVxuICAgICAgICAgIDwvR0NhcmREYXRhVGV4dERpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeUVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2YxNCBmdzcgbXQ4IHNmYzEnPlJlYWQgTW9yZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHQ2FyZEZvb3RlckRpdiBjbGFzc05hbWU9J2ZsZXggbXQ1Jz5cbiAgICAgICAgICAgIDxHVWwgY2xhc3NOYW1lPSdmbGV4RnVsbCc+XG4gICAgICAgICAgICAgIHtpdGVtLmxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3BmYzMnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HVWw+XG4gICAgICAgICAgPC9HQ2FyZEZvb3RlckRpdj5cbiAgICAgICAgPC9HQ2FyZERhdGFEaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdDYXJkSW1nID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzE0MHB4JyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTRlNGU0JyxcbiAgJyYgaW1nJzoge1xuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gICcmIC5ob3ZlclJlYWRNb3JlJzoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyxcbiAgICAnJiBzcGFuJzoge1xuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZmZmJyxcbiAgICAgIHBhZGRpbmc6ICcxMnB4IDQwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAnIzMzMycsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAnJjpob3ZlciAuaG92ZXJSZWFkTW9yZSc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IEdDYXJkRGF0YURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBwYWRkaW5nVG9wOiAnMTVweCcsXG4gIHBhZGRpbmdCb3R0b206ICcwJyxcbiAgYm9yZGVyVG9wOiAnMCcsXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnMnB4JyxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzJweCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdVbCA9IGdsYW1vcm91cy51bCh7XG4gIG1hcmdpbjogJzhweCAwIDAgMCcsXG4gIGhlaWdodDogJzI2cHgnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICcmIGxpJzoge1xuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkNGQ0ZDQnLFxuICAgIG1hcmdpbjogJzAgNHB4IDRweCAwJyxcbiAgICBjb2xvcjogJyMzZTNlM2UnLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHQ2FyZERhdGFUZXh0RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGZvbnRTaXplOiAnMTJweCcsXG4gIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgaGVpZ2h0OiAnNDhweCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgbWFyZ2luQm90dG9tOiAnOHB4JyxcbiAgJyYgKic6IHtcbiAgICBmb250U2l6ZTogJzEycHggIWltcG9ydGFudCcsXG4gICAgbGluZUhlaWdodDogJzE2cHggIWltcG9ydGFudCcsXG4gICAgbWFyZ2luOiAnMCcsXG4gIH0sXG4gICcmIHAnOiB7XG4gICAgZm9udFNpemU6ICcxMnB4ICFpbXBvcnRhbnQnLFxuICAgIGxpbmVIZWlnaHQ6ICcxNnB4ICFpbXBvcnRhbnQnLFxuICAgIG1hcmdpbjogJzAnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdEZWZhdWx0SWNvbkRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnODNweCcsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gIH1cbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBHQ2FyZEZvb3RlckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==