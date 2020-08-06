require("source-map-support").install();
exports.ids = ["How-to-reach-from"];
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

/***/ "./app-v2/modules/shared/Overview.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Overview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ./ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const overviewSplitAfterShowMore = overviewMoreText => {
  try {
    return overviewMoreText.replace(/<br \/>|<\/br>/g, '').replace('</span></p>\r\n', '');
  } catch (err) {
    return overviewMoreText;
  }
};

let Overview = class Overview extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.overviewContent = () => {
      const {
        description,
        footerDescription
      } = this.props;
      const desc = description && description.split('\r\n').filter(p => p.length) || [];

      if (!desc.length) {
        return null;
      }

      const footerDesc = footerDescription ? `<br>${footerDescription}` : '';
      return _react.default.createElement(_ShowMore.default, {
        wrapText: parser.parse(desc[0]),
        moreText: parser.parse(overviewSplitAfterShowMore(desc.slice(1).join('\n').concat(footerDesc)))
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row- row-mw"
    }, _react.default.createElement("div", {
      className: "read-more-box"
    }, this.overviewContent()));
  }

};
Overview.defaultProps = {
  footerDescription: '',
  description: ''
};
Overview.propTypes = {
  description: _propTypes.default.string,
  footerDescription: _propTypes.default.string
};
var _default = Overview;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/ShowMore.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/ShowMore.js ***!
  \*******************************************/
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

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GreadmoreLabel = _glamorous.default.label({
  '& button.read-more-button': {
    lineHeight: '20px',
    padding: '0'
  }
});

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

let ShowMore = class ShowMore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultOpen
    };
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      checked: false
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.state.checked && this.props.trackSegment({
        cta: 'Read More'
      });
    });
  }

  render() {
    const textLength = 195;
    return _react.default.createElement("div", {
      className: "row row- text-left"
    }, _react.default.createElement("input", {
      type: "checkbox",
      className: "read-more-state",
      checked: this.state.checked,
      id: "post-1"
    }), _react.default.createElement("div", {
      className: `read-more-wrap ${this.props.isDefaultShowMore ? 'p-last-no-margin pfc3 f14p dynamicTextInherit' : ''}`
    }, // TODO: find a better way for truncate the string
    !this.state.checked && this.props.appendText && this.props.wrapText.length >= textLength ? this.props.wrapText + this.props.appendText : this.props.wrapText, _react.default.createElement("span", {
      className: "read-more-target"
    }, this.props.moreText)), this.props.moreText.length > 0 || !(0, _isEmpty2.default)(this.props.moreText) ? _react.default.createElement(GreadmoreLabel, {
      htmlFor: "post-1",
      className: "read-more-trigger relative"
    }, _react.default.createElement("button", {
      className: "read-more-button flex alignCenter spaceBetween relative f12 fw7",
      onClick: this.handleChange
    }, _react.default.createElement("span", {
      className: "flexFull f14 fw7"
    }, this.state.checked ? this.props.showLessText : this.props.showMoreText, this.state.checked), _react.default.createElement(GDownArrowSpan, {
      className: "flex ml8 relative alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : '');
  }

};
ShowMore.propTypes = {
  wrapText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]).isRequired,
  moreText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]),
  showMoreText: _propTypes.default.string,
  showLessText: _propTypes.default.string,
  defaultOpen: _propTypes.default.bool,
  isDefaultShowMore: _propTypes.default.bool,
  trackSegment: _propTypes.default.func,
  appendText: _propTypes.default.string
};
ShowMore.defaultProps = {
  wrapText: '',
  moreText: '',
  showMoreText: 'Read More',
  showLessText: 'Read Less',
  defaultOpen: false,
  isDefaultShowMore: true,
  trackSegment: () => {}
};
var _default = ShowMore;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/cityBlock/howToReach/HowToReachFromTemplate.js":
/*!***********************************************************************!*\
  !*** ./app-v2/screens/cityBlock/howToReach/HowToReachFromTemplate.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _Overview = _interopRequireDefault(__webpack_require__(/*! modules/shared/Overview */ "./app-v2/modules/shared/Overview.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Ul = _glamorous.default.ul({
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'flex-start',
  '& li': {
    margin: '0 34px 0 0',
    flexGrow: '1',
    paddingLeft: '0px',
    position: 'relative',
    '&:last-child': {
      marginRight: '0'
    }
  }
});

const Icon = _glamorous.default.span({
  width: '18px',
  height: '18px',
  '& svg': {
    width: '18px',
    height: '18px'
  }
});

const HowToReachDiv = _glamorous.default.div({
  margin: '0 auto',
  textAlign: 'left',
  '& tr': {
    background: '#f2f2f2',
    '&:nth-child(2n - 1)': {
      background: '#fff'
    },
    '& td, th': {
      padding: '12px'
    }
  }
});

const GHowToIconDiv = _glamorous.default.div({
  width: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute'
  }
});

let HowToReachFrom = class HowToReachFrom extends _react.Component {
  constructor(props) {
    super(props);

    this.renderMapComponent = Map => Map ? Map.withScriptjs(Map.withGoogleMap(customProps => {
      const DirectionsService = new google.maps.DirectionsService();
      const {
        toFrom
      } = customProps;
      const destinations = toFrom.split('to').map(d => d.trim());
      DirectionsService.route({
        origin: destinations[0],
        destination: destinations[1],
        travelMode: google.maps.TravelMode.DRIVING
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions status: ${status} result: ${JSON.stringify(result, null, 2)}`);
        }
      });
      return _react.default.createElement(Map.GoogleMap, {
        defaultZoom: 7,
        defaultCenter: new google.maps.LatLng(28.6139391, 77.2090212)
      }, this.state.directions && _react.default.createElement(Map.DirectionsRenderer, {
        directions: this.state.directions
      }));
    })) : null;

    this.state = {
      Map: null
    };
    this.MyMapComponent = null;
  }

  componentDidMount() {
    const reactGoogleMaps = () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-google-maps */ "react-google-maps", 7)).then(module => {
      this.MyMapComponent = this.renderMapComponent(module);
      this.setState({
        Map: module
      });
    });

    document.readyState === 'complete' ? reactGoogleMaps() : window.addEventListener('load', reactGoogleMaps);
  }

  render() {
    const {
      data,
      exitIntent
    } = this.props;
    return _react.default.createElement("div", {
      className: "clearfix m8 mt0"
    }, _react.default.createElement("div", {
      className: "p15 sbcw"
    }, _react.default.createElement(_Heading.default, {
      title: data.title,
      type: "main-heading"
    }), data && data.distance && data.distance.length ? _react.default.createElement(HowToReachDiv, {
      className: "mb15"
    }, _react.default.createElement(_Swiper.default, {
      id: "howtoreachFromSwiper",
      spaceBetween: 15,
      slidesPerView: "auto",
      ssrAnimation: {
        width: 56,
        height: 41
      },
      rebuildOnUpdate: true
    }, data.distance.map((row, i) => _react.default.createElement("div", {
      key: i,
      className: "radius2"
    }, _react.default.createElement("div", {
      className: "mb15 flex alignCenter"
    }, _react.default.createElement(GHowToIconDiv, {
      className: "relative mr8 flex alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.AllTrips, null)), _react.default.createElement("span", {
      className: "pfc3 fw9 f14"
    }, row.from)), row.distance ? _react.default.createElement("div", {
      className: "pfc3 fw9 mb15 f24"
    }, "Distance", row.distance) : null, _react.default.createElement("div", {
      className: "flex spaceBetween"
    }, row.byair ? _react.default.createElement("div", {
      className: "f14"
    }, _react.default.createElement("p", {
      className: "fw9 mb5"
    }, "By Air"), row.byair) : null, row.byroad ? _react.default.createElement("div", {
      className: "f14"
    }, _react.default.createElement("p", {
      className: "fw9 mb5"
    }, "By Road"), row.byroad) : null, row.bytrain ? _react.default.createElement("div", {
      className: "f14"
    }, _react.default.createElement("p", {
      className: "fw9 mb5"
    }, "By Train"), row.bytrain) : null, row.bysea ? _react.default.createElement("div", {
      className: "f14"
    }, _react.default.createElement("p", {
      className: "fw9 mb5"
    }, "By Sea"), row.bysea) : null))))) : null, _react.default.createElement("div", {
      className: "mb15"
    }, _react.default.createElement(_Overview.default, {
      description: data.description
    })), this.MyMapComponent && _react.default.createElement(this.MyMapComponent, {
      loadingElement: _react.default.createElement("div", {
        style: {
          height: `100%`
        }
      }),
      containerElement: _react.default.createElement("div", {
        style: {
          height: `400px`
        }
      }),
      mapElement: _react.default.createElement("div", {
        style: {
          height: `100%`
        }
      }),
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDDxAgUCYhdqq_FbkX15R1uHASv-wAHD0M&v=3.exp&libraries=geometry,drawing,places",
      isMarkerShown: true,
      origin: data.toCoordinates,
      from: data.fromCoordinates,
      toFrom: data.distance && data.distance.length && data.distance[0].from
    }), exitIntent));
  }

};
var _default = HowToReachFrom;
exports.default = _default;
HowToReachFrom.propTypes = {
  data: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2NpdHlCbG9jay9ob3dUb1JlYWNoL0hvd1RvUmVhY2hGcm9tVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyLnNjc3MiXSwibmFtZXMiOlsiU3ViSGVhZGluZyIsImdsYW1vcm91cyIsInAiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsIm1hcmdpbiIsIkhlYWRpbmciLCJkYXRhIiwidGl0bGUiLCJoZWFkaW5nIiwic3R5bGVIZWFkaW5nIiwic3R5bGVTdWJIZWFkaW5nIiwidHlwZSIsImlzVmlld0FsbEhpZGRlbiIsImZvckhlYWRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwicGFyc2VyIiwiUGFyc2VyIiwib3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUiLCJvdmVydmlld01vcmVUZXh0IiwicmVwbGFjZSIsImVyciIsIk92ZXJ2aWV3IiwiUHVyZUNvbXBvbmVudCIsIm92ZXJ2aWV3Q29udGVudCIsImRlc2NyaXB0aW9uIiwiZm9vdGVyRGVzY3JpcHRpb24iLCJwcm9wcyIsImRlc2MiLCJzcGxpdCIsImZpbHRlciIsImxlbmd0aCIsImZvb3RlckRlc2MiLCJwYXJzZSIsInNsaWNlIiwiam9pbiIsImNvbmNhdCIsInJlbmRlciIsIkdyZWFkbW9yZUxhYmVsIiwibGFiZWwiLCJwYWRkaW5nIiwiR0Rvd25BcnJvd1NwYW4iLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJTaG93TW9yZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNoZWNrZWQiLCJkZWZhdWx0T3BlbiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJhY2tTZWdtZW50IiwiY3RhIiwidGV4dExlbmd0aCIsImlzRGVmYXVsdFNob3dNb3JlIiwiYXBwZW5kVGV4dCIsIndyYXBUZXh0IiwibW9yZVRleHQiLCJzaG93TGVzc1RleHQiLCJzaG93TW9yZVRleHQiLCJvbmVPZlR5cGUiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVWwiLCJ1bCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJwYWRkaW5nTGVmdCIsInBvc2l0aW9uIiwibWFyZ2luUmlnaHQiLCJJY29uIiwiSG93VG9SZWFjaERpdiIsImRpdiIsInRleHRBbGlnbiIsImJhY2tncm91bmQiLCJHSG93VG9JY29uRGl2IiwiSG93VG9SZWFjaEZyb20iLCJyZW5kZXJNYXBDb21wb25lbnQiLCJNYXAiLCJ3aXRoU2NyaXB0anMiLCJ3aXRoR29vZ2xlTWFwIiwiY3VzdG9tUHJvcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJ0b0Zyb20iLCJkZXN0aW5hdGlvbnMiLCJtYXAiLCJkIiwidHJpbSIsInJvdXRlIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXN1bHQiLCJzdGF0dXMiLCJEaXJlY3Rpb25zU3RhdHVzIiwiT0siLCJkaXJlY3Rpb25zIiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIkxhdExuZyIsIk15TWFwQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJyZWFjdEdvb2dsZU1hcHMiLCJ0aGVuIiwibW9kdWxlIiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4aXRJbnRlbnQiLCJkaXN0YW5jZSIsInJvdyIsImkiLCJmcm9tIiwiYnlhaXIiLCJieXJvYWQiLCJieXRyYWluIiwiYnlzZWEiLCJ0b0Nvb3JkaW5hdGVzIiwiZnJvbUNvb3JkaW5hdGVzIiwiU3dpcGVyIiwicmVuZGVyU2VydmVyIiwib3ZlcmZsb3ciLCJzdHlsZXMiLCJvdmVyZmxvd1giLCJjaGlsZHJlbiIsImMiLCJfX2h0bWwiLCJSZWFjdERPTSIsInJlbmRlclRvU3RhdGljTWFya3VwIiwicmVuZGVyRW1wdHlDbGllbnQiLCJzd2lwZXJBc3luYyIsInMiLCJSZWFjdElkU3dpcGVyIiwiZGVmYXVsdCIsImlzU21hbGxTd2lwZXIiLCJpc0Z1bGxXaWR0aFN3aXBlciIsInNzckFuaW1hdGlvbiIsInNob3dMb2FkZXIiLCJfX1NFUlZFUl9fIiwibG9hZE9uRG9jdW1lbnRSZWFkeSIsInJlYnVpbGRPblVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsYUFBYUMsbUJBQVVDLENBQVYsQ0FBWTtBQUM3QkMsWUFBVSxNQURtQjtBQUU3QkMsY0FBWSxNQUZpQjtBQUc3QkMsU0FBTyxTQUhzQjtBQUk3QkMsVUFBUTtBQUpxQixDQUFaLENBQW5COztBQU9BLE1BQU1DLFVBQVUsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLE9BQVI7QUFBZUMsU0FBZjtBQUF3QkMsY0FBeEI7QUFBc0NDLGlCQUF0QztBQUF1REMsTUFBdkQ7QUFBNkRDO0FBQTdELENBQUQsS0FBb0Y7QUFDbEcsU0FDRTtBQUFLLGVBQVU7QUFBZixLQUVJRCxTQUFTLGNBQVQsR0FDRTtBQUFJLFdBQU9GLFlBQVg7QUFDSSxlQUFZLEdBQUVHLGtCQUFrQixNQUFsQixHQUEyQixPQUFRO0FBRHJELEtBQ3lFTixLQUFLQyxLQUFMLElB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Ozs7Ozs7Ozs7Ozs7QUNqQnhCO0FBQ0E7QUFDQSxFIiwiZmlsZSI6Ikhvdy10by1yZWFjaC1mcm9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IFN1YkhlYWRpbmcgPSBnbGFtb3JvdXMucCh7XG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgY29sb3I6ICcjY2JjYmNiJyxcbiAgbWFyZ2luOiAnNHB4IDAgMCAwJyxcbn0pO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgZGF0YSwgdGl0bGUsIGhlYWRpbmcsIHN0eWxlSGVhZGluZywgc3R5bGVTdWJIZWFkaW5nLCB0eXBlLCBpc1ZpZXdBbGxIaWRkZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWIxNVwiPlxuICAgICAge1xuICAgICAgICB0eXBlID09PSAnbWFpbi1oZWFkaW5nJyA/XG4gICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNWaWV3QWxsSGlkZGVuID8gJ3ByMCAnIDogJ3ByNjQgJ30gZjE2IHBmYzEgZnc5IG0wYH0+e2RhdGEudGl0bGUgfHwgdGl0bGV9e2RhdGEuZm9ySGVhZGluZyA/IGAgZm9yICR7ZGF0YS5mb3JIZWFkaW5nfWAgOiBudWxsfTwvaDI+XG4gICAgICAgICAgOiA8aDIgc3R5bGU9e3N0eWxlSGVhZGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMzIGZ3YiBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgfVxuICAgICAge2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nID9cbiAgICAgICAgPFN1YkhlYWRpbmcgc3R5bGU9e3N0eWxlU3ViSGVhZGluZ30gY2xhc3NOYW1lPVwiZjE0IG10NCBmdzRcIj57ZGF0YS5oZWFkaW5nIHx8IGhlYWRpbmd9PC9TdWJIZWFkaW5nPiA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhlYWRpbmcucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZVN1YkhlYWRpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlzVmlld0FsbEhpZGRlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgdHlwZTogJycsXG4gIHRpdGxlOiAnJyxcbiAgaGVhZGluZzogJycsXG4gIHN0eWxlSGVhZGluZzoge30sXG4gIHN0eWxlU3ViSGVhZGluZzoge30sXG4gIGlzVmlld0FsbEhpZGRlbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuaW1wb3J0IFNob3dNb3JlIGZyb20gJy4vU2hvd01vcmUnO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IG92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlID0gKG92ZXJ2aWV3TW9yZVRleHQpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb3ZlcnZpZXdNb3JlVGV4dC5yZXBsYWNlKC88YnIgXFwvPnw8XFwvYnI+L2csICcnKS5yZXBsYWNlKCc8L3NwYW4+PC9wPlxcclxcbicsICcnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG92ZXJ2aWV3TW9yZVRleHQ7XG4gIH1cbn07XG5cbmNsYXNzIE92ZXJ2aWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIG92ZXJ2aWV3Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBmb290ZXJEZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjID0gZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24uc3BsaXQoJ1xcclxcbicpLmZpbHRlcihwID0+IHAubGVuZ3RoKSB8fCBbXTtcblxuICAgIGlmICghZGVzYy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZvb3RlckRlc2MgPSBmb290ZXJEZXNjcmlwdGlvbiA/IGA8YnI+JHtmb290ZXJEZXNjcmlwdGlvbn1gIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNob3dNb3JlXG4gICAgICAgIHdyYXBUZXh0PXtwYXJzZXIucGFyc2UoZGVzY1swXSl9XG4gICAgICAgIG1vcmVUZXh0PXtwYXJzZXIucGFyc2Uob3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUoZGVzYy5zbGljZSgxKS5qb2luKCdcXG4nKS5jb25jYXQoZm9vdGVyRGVzYykpKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcm93LW13XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJveFwiPlxuICAgICAgICAgIHt0aGlzLm92ZXJ2aWV3Q29udGVudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuT3ZlcnZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBmb290ZXJEZXNjcmlwdGlvbjogJycsXG4gIGRlc2NyaXB0aW9uOiAnJ1xufTtcblxuT3ZlcnZpZXcucHJvcFR5cGVzID0ge1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9vdGVyRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL0hlYWRpbmcnO1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJ21vZHVsZXMvc2hhcmVkL092ZXJ2aWV3JztcbmltcG9ydCB7IEFsbFRyaXBzIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBVbCA9IGdsYW1vcm91cy51bCh7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAnJiBsaSc6IHtcbiAgICBtYXJnaW46ICcwIDM0cHggMCAwJyxcbiAgICBmbGV4R3JvdzogJzEnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcwJyxcbiAgICB9LFxuICB9LFxufSk7XG5jb25zdCBJY29uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzE4cHgnLFxuICBoZWlnaHQ6ICcxOHB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMThweCcsXG4gICAgaGVpZ2h0OiAnMThweCcsXG4gIH1cbn0pO1xuY29uc3QgSG93VG9SZWFjaERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgJyYgdHInOiB7XG4gICAgYmFja2dyb3VuZDogJyNmMmYyZjInLFxuICAgICcmOm50aC1jaGlsZCgybiAtIDEpJzoge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIH0sXG4gICAgJyYgdGQsIHRoJzoge1xuICAgICAgcGFkZGluZzogJzEycHgnLFxuICAgIH0sXG4gIH0sXG59KTtcbmNvbnN0IEdIb3dUb0ljb25EaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcyNHB4JyxcbiAgaGVpZ2h0OiAnMjRweCcsXG4gICcmIHN2Zyc6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgfVxufSk7XG5cbmNsYXNzIEhvd1RvUmVhY2hGcm9tIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgTWFwOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLk15TWFwQ29tcG9uZW50ID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlck1hcENvbXBvbmVudCA9IChNYXApID0+IChNYXAgPyBNYXAud2l0aFNjcmlwdGpzKE1hcC53aXRoR29vZ2xlTWFwKChjdXN0b21Qcm9wcykgPT4ge1xuICAgIGNvbnN0IERpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgY29uc3QgeyB0b0Zyb20gfSA9IGN1c3RvbVByb3BzO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9ucyA9IHRvRnJvbS5zcGxpdCgndG8nKS5tYXAoZCA9PiBkLnRyaW0oKSk7XG4gICAgRGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoe1xuICAgICAgb3JpZ2luOiBkZXN0aW5hdGlvbnNbMF0sXG4gICAgICBkZXN0aW5hdGlvbjogZGVzdGluYXRpb25zWzFdLFxuICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HLFxuICAgIH0sIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXJlY3Rpb25zOiByZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgZXJyb3IgZmV0Y2hpbmcgZGlyZWN0aW9ucyBzdGF0dXM6ICR7c3RhdHVzfSByZXN1bHQ6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKX1gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TWFwLkdvb2dsZU1hcFxuICAgICAgICBkZWZhdWx0Wm9vbT17N31cbiAgICAgICAgZGVmYXVsdENlbnRlcj17bmV3IGdvb2dsZS5tYXBzLkxhdExuZygyOC42MTM5MzkxLCA3Ny4yMDkwMjEyKX0+XG4gICAgICAgIHt0aGlzLnN0YXRlLmRpcmVjdGlvbnMgJiYgPE1hcC5EaXJlY3Rpb25zUmVuZGVyZXIgZGlyZWN0aW9ucz17dGhpcy5zdGF0ZS5kaXJlY3Rpb25zfSAvPn1cbiAgICAgIDwvTWFwLkdvb2dsZU1hcD4pO1xuICB9KSkgOiBudWxsKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCByZWFjdEdvb2dsZU1hcHMgPSAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3JlYWN0LWdvb2dsZS1tYXBzJyAqLyAncmVhY3QtZ29vZ2xlLW1hcHMnKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgIHRoaXMuTXlNYXBDb21wb25lbnQgPSB0aGlzLnJlbmRlck1hcENvbXBvbmVudChtb2R1bGUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IE1hcDogbW9kdWxlIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyA/IHJlYWN0R29vZ2xlTWFwcygpIDogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZWFjdEdvb2dsZU1hcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZXhpdEludGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBtOCBtdDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgc2Jjd1wiPlxuICAgICAgICAgIDxIZWFkaW5nIHRpdGxlPXtkYXRhLnRpdGxlfSB0eXBlPVwibWFpbi1oZWFkaW5nXCIgLz5cbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmRpc3RhbmNlICYmIGRhdGEuZGlzdGFuY2UubGVuZ3RoID8gKFxuICAgICAgICAgICAgPEhvd1RvUmVhY2hEaXYgY2xhc3NOYW1lPVwibWIxNVwiPlxuICAgICAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICAgICAgaWQ9XCJob3d0b3JlYWNoRnJvbVN3aXBlclwiXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxNX1cbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiA1NiwgaGVpZ2h0OiA0MSB9fVxuICAgICAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEuZGlzdGFuY2UubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyYWRpdXMyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIxNSBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEdIb3dUb0ljb25EaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXI4IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsbFRyaXBzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HSG93VG9JY29uRGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBmYzMgZnc5IGYxNFwiPntyb3cuZnJvbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cm93LmRpc3RhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGZjMyBmdzkgbWIxNSBmMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3RhbmNle3Jvdy5kaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cm93LmJ5YWlyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnc5IG1iNVwiPkJ5IEFpcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5ieWFpcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIHtyb3cuYnlyb2FkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnc5IG1iNVwiPkJ5IFJvYWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuYnlyb2FkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAge3Jvdy5ieXRyYWluID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnc5IG1iNVwiPkJ5IFRyYWluPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmJ5dHJhaW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICB7cm93LmJ5c2VhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnc5IG1iNVwiPkJ5IFNlYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5ieXNlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICAgIDwvSG93VG9SZWFjaERpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMTVcIj5cbiAgICAgICAgICAgIDxPdmVydmlldyBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5NeU1hcENvbXBvbmVudCAmJiAoXG4gICAgICAgICAgICA8dGhpcy5NeU1hcENvbXBvbmVudFxuICAgICAgICAgICAgICBsb2FkaW5nRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cbiAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGA0MDBweGAgfX0gLz59XG4gICAgICAgICAgICAgIG1hcEVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XG4gICAgICAgICAgICAgIGdvb2dsZU1hcFVSTD1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5RER4QWdVQ1loZHFxX0Zia1gxNVIxdUhBU3Ytd0FIRDBNJnY9My5leHAmbGlicmFyaWVzPWdlb21ldHJ5LGRyYXdpbmcscGxhY2VzXCJcbiAgICAgICAgICAgICAgaXNNYXJrZXJTaG93blxuICAgICAgICAgICAgICBvcmlnaW49e2RhdGEudG9Db29yZGluYXRlc31cbiAgICAgICAgICAgICAgZnJvbT17ZGF0YS5mcm9tQ29vcmRpbmF0ZXN9XG4gICAgICAgICAgICAgIHRvRnJvbT17XG4gICAgICAgICAgICAgICAgZGF0YS5kaXN0YW5jZSAmJlxuICAgICAgICAgICAgICAgIGRhdGEuZGlzdGFuY2UubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgZGF0YS5kaXN0YW5jZVswXS5mcm9tXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZXhpdEludGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvd1RvUmVhY2hGcm9tO1xuXG5Ib3dUb1JlYWNoRnJvbS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZXhpdEludGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCAnLi9Td2lwZXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3NyQW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaXNTbWFsbFN3aXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNGdWxsV2lkdGhTd2lwZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRPbkRvY3VtZW50UmVhZHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlYnVpbGRPblVwZGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0xvYWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3ZlcmZsb3c6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzc3JBbmltYXRpb246IHt9LFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBpc1NtYWxsU3dpcGVyOiBmYWxzZSxcbiAgICBpc0Z1bGxXaWR0aFN3aXBlcjogZmFsc2UsXG4gICAgbG9hZE9uRG9jdW1lbnRSZWFkeTogZmFsc2UsXG4gICAgc2hvd0xvYWRlcjogZmFsc2UsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH07XG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3dpcGVyQXN5bmMgPSAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdzd2lwZXInICovIFwicmVhY3QtaWQtc3dpcGVyXCIpXG4gICAgICAgIC50aGVuKHMgPT4gdGhpcy5zZXRTdGF0ZSh7IFJlYWN0SWRTd2lwZXI6IHMuZGVmYXVsdCB9KSk7XG5cbiAgICAvLyBpZiAodGhpcy5wcm9wcy5sb2FkT25Eb2N1bWVudFJlYWR5KSB7XG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiID8gc3dpcGVyQXN5bmMoKSA6IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBzd2lwZXJBc3luYyk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc3dpcGVyQXN5bmMpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHJlbmRlclNlcnZlciA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIGNvbnN0IHsgb3ZlcmZsb3cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVzID0geyBvdmVyZmxvd1g6ICdzY3JvbGwnLCB3aWR0aDogd2lkdGgsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGU9e3N0eWxlc30+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgX19odG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoYylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzxpbWcoW1xcd1xcV10rPylcXC8+L2csIGA8ZGl2IHN0eWxlPVwid2lkdGg6JHt3aWR0aH1weDsgaGVpZ2h0OiAke2hlaWdodH1weFwiIC8+YCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSA/ICdzd2lwZXJDdXN0b21XaWR0aCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQnfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2xhenlsb2FkaW5nJ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IF9faHRtbCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJFbXB0eUNsaWVudCA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGggPiAxID8gJ3N3aXBlckN1c3RvbVdpZHRoJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCd9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgUmVhY3RJZFN3aXBlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGlzU21hbGxTd2lwZXIsIGlzRnVsbFdpZHRoU3dpcGVyLCBzc3JBbmltYXRpb24sIHNob3dMb2FkZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoX19TRVJWRVJfXykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU2VydmVyKHNzckFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFSZWFjdElkU3dpcGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJFbXB0eUNsaWVudChzc3JBbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3RJZFN3aXBlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXsodGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgICAgIWlzU21hbGxTd2lwZXIgJiYgIWlzRnVsbFdpZHRoU3dpcGVyKSA/XG4gICAgICAgICAgICAgICAgJ3N3aXBlckN1c3RvbVdpZHRoIGJsb2NrJyA6IGlzU21hbGxTd2lwZXIgJiYgIWlzRnVsbFdpZHRoU3dpcGVyID9cbiAgICAgICAgICAgICAgICAgICdzbWFsbFN3aXBlckNvbnRhaW5lciBibG9jaycgOiBpc0Z1bGxXaWR0aFN3aXBlciA/XG4gICAgICAgICAgICAgICAgICAgICd3ZnVsbCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQgd2Z1bGwgYmxvY2snfT5cbiAgICAgICAgICAgICAgICB7Y31cbiAgICAgICAgICAgICAgICB7c2hvd0xvYWRlciA/IDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWxhenktcHJlbG9hZGVyXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8L3NwYW4+O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvUmVhY3RJZFN3aXBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzd2lwZXItcHJlbG9hZGVyLXNwaW5cIjogXCJfMzMwOFlcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9