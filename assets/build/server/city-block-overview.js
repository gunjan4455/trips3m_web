require("source-map-support").install();
exports.ids = ["city-block-overview"];
exports.modules = {

/***/ "./app-v2/modules/cityBlock/TopRegions/TopInCard.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/cityBlock/TopRegions/TopInCard.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TopCard = _glamorous.default.div({
  width: '100%'
});

const GImageContainerDiv = _glamorous.default.div({
  width: '100%',
  height: '80px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const GImg = (0, _glamorous.default)(_Img.default)({
  width: '100%',
  minHeight: '100%'
});

const TopInCard = ({
  link,
  image,
  imagekitUrl,
  location,
  bestTime
}) => {
  return _react.default.createElement(TopCard, {
    className: "clearfix"
  }, _react.default.createElement(_reactRouter.Link, {
    to: link,
    className: "block"
  }, _react.default.createElement(GImageContainerDiv, {
    className: "sbc4"
  }, _react.default.createElement(GImg, {
    width: 320,
    height: 80,
    src: image,
    ikSrc: imagekitUrl,
    alt: location
  })), _react.default.createElement("p", {
    className: "ellipsis m0 pt8 f14 pfc3 fw9"
  }, location), _react.default.createElement("p", {
    className: "m0 f12 pfc4 break-word"
  }, "Best time to visit: ", bestTime)));
};

TopInCard.propTypes = {
  image: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  link: _propTypes.default.string,
  location: _propTypes.default.string,
  bestTime: _propTypes.default.string
};
TopInCard.defaultProps = {
  link: '',
  location: 'North India',
  bestTime: 'Sep - Mar'
};
var _default = TopInCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/TopRegions/TopRegions.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/cityBlock/TopRegions/TopRegions.js ***!
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

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _TopInCard = _interopRequireDefault(__webpack_require__(/*! ./TopInCard */ "./app-v2/modules/cityBlock/TopRegions/TopInCard.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TopRegions = ({
  topRegions,
  spacingCss
}) => {
  return topRegions.length ? _react.default.createElement("div", {
    className: "clearfix p15 sbcw",
    style: spacingCss
  }, _react.default.createElement(_Heading.default, {
    title: "Top States In India"
  }), _react.default.createElement("div", {
    className: "swiper-full-width"
  }, _react.default.createElement(_Swiper.default, {
    id: "topInSlider",
    spaceBetween: 15,
    slidesPerView: "auto",
    ssrAnimation: {
      width: 280,
      height: 122
    },
    rebuildOnUpdate: true
  }, topRegions.map((region, index) => _react.default.createElement("div", {
    key: index,
    className: "clearfix radius2 relative"
  }, _react.default.createElement(_TopInCard.default, region)))))) : null;
};

TopRegions.propTypes = {
  topRegions: _propTypes.default.array,
  spacingCss: _propTypes.default.object
};
TopRegions.defaultProps = {
  topRegions: [],
  spacingCss: {}
};
var _default = TopRegions;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/placesToVisit/PlacesToVisit.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/placesToVisit/PlacesToVisit.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _LoaderCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/loaders/LoaderCard */ "./app-v2/modules/shared/loaders/LoaderCard.js"));

var _SliderWithTitle = _interopRequireDefault(__webpack_require__(/*! modules/shared/SliderWithTitle */ "./app-v2/modules/shared/SliderWithTitle.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PlacesToVisit = (_temp = _class = class PlacesToVisit extends _react.default.Component {
  constructor(props) {
    super(props);

    this.trackSegment = (cta, cardId, miscType1, miscId1) => {
      this.props.trackSegmentEvent({
        cta,
        object: cardId ? `Places to visit/${cardId}` : 'Places to visit',
        miscType1,
        miscId1
      });
    };
  } // componentDidMount() {
  //   this.fetchPlacesToVisitData(this.props);
  // }
  // fetchPlacesToVisitData = (props) => {
  //   const { config, fetchPlacesToVisitData } = props;
  //   if (config && config.csr) {
  //     fetchPlacesToVisitData({
  //       destination: layout.metaInfo.destination,
  //       lookupParent: config.lookupParent
  //     });
  //   }
  // };


  render() {
    const {
      data,
      config,
      loaded,
      externalCss,
      errors
    } = this.props;

    if (errors && errors.length) {
      return null;
    }

    if (loaded && (!data.destinationSchemes || !data.destinationSchemes.length)) {
      return null;
    }

    return _react.default.createElement("div", {
      className: externalCss
    }, !loaded ? _react.default.createElement(_LoaderCard.default, null) : data.destinationSchemes && data.destinationSchemes.length ? _react.default.createElement(_SliderWithTitle.default, {
      data: data,
      trackSegment: this.trackSegment,
      config: config,
      overflow: "unset"
    }) : null);
  }

}, _class.propTypes = {
  data: _propTypes.default.object,
  config: _propTypes.default.object,
  loaded: _propTypes.default.bool,
  errors: _propTypes.default.array,
  externalCss: _propTypes.default.string,
  trackSegmentEvent: _propTypes.default.func,
  fetchPlacesToVisitData: _propTypes.default.func
}, _class.defaultProps = {
  data: {},
  config: {
    variant: 'FULL',
    order: 8
  },
  loaded: false,
  externalCss: '',
  trackSegmentEvent: () => {},
  fetchPlacesToVisitData: () => {}
}, _temp);
var _default = PlacesToVisit;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/placesToVisit/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/placesToVisit/index.js ***!
  \***********************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/placesToVisit/action.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/placesToVisit/reducer.js");

var _PlacesToVisit = _interopRequireDefault(__webpack_require__(/*! ./PlacesToVisit */ "./app-v2/modules/placesToVisit/PlacesToVisit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  data: (0, _reducer.results)(state),
  loaded: state.placesToVisit.loaded,
  errors: state.placesToVisit.errors
}), {
  fetchPlacesToVisitData: _action.fetchPlacesToVisitData
})(_PlacesToVisit.default));
/**
 * PlacesToVisit Section
 */

var _default = {
  container,
  actions: {
    fetchPlacesToVisitData: _action.fetchPlacesToVisitData
  },
  defaultAction: _action.fetchPlacesToVisitData
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Guide.js":
/*!****************************************!*\
  !*** ./app-v2/modules/shared/Guide.js ***!
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

var _Overview = _interopRequireDefault(__webpack_require__(/*! ./Overview */ "./app-v2/modules/shared/Overview.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! ./Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ShowMoreContainer = _glamorous.default.div({
  marginTop: '-8px'
});

const Guide = ({
  guide
}) => {
  return _react.default.createElement("div", {
    className: "clearfix sbcw p15"
  }, _react.default.createElement(_Heading.default, _extends({}, guide, {
    type: "main-heading"
  })), _react.default.createElement(_Overview.default, guide));
};

Guide.propTypes = {
  guide: _propTypes.default.object
};
Guide.defaultProps = {
  guide: {}
};
var _default = Guide;
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

/***/ "./app-v2/modules/shared/loaders/LoaderCard.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/shared/loaders/LoaderCard.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ./../G */ "./app-v2/modules/shared/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let LoaderCard = (_temp = _class = class LoaderCard extends _react.default.Component {
  render() {
    const {
      cardVisible
    } = this.props;
    return _react.default.createElement(_G.GLoaderContainerDiv, {
      className: "flex flexFull flexDColumn wfull"
    }, _react.default.createElement("div", {
      className: "loaderLine mb5 mt0 sbc5",
      style: {
        width: '60%'
      }
    }), _react.default.createElement("div", {
      className: "loaderLine mb15 mt0 sbc5",
      style: {
        width: '70%'
      }
    }), _react.default.createElement("div", {
      className: "loaderMain radius2 flexFull"
    }, _react.default.createElement("div", {
      className: "loaderMainCard flexFull"
    }, _react.default.createElement(_G.GLoaderCardSpan, {
      className: "wfull sbc5"
    }), _react.default.createElement("div", {
      className: "sbcw p15 pb24 wfull"
    }, _react.default.createElement("div", {
      className: "loaderLineDark sbc5 mb15 sbc4",
      style: {
        maxWidth: '80%'
      }
    }), _react.default.createElement("div", {
      className: "loaderLineDark sbc5 mb8 sbc4"
    }), _react.default.createElement("div", {
      className: "loaderLineDark sbc5 sbc4"
    })))));
  }

}, _class.propTypes = {
  lineVisible: _propTypes.default.object,
  cardVisible: _propTypes.default.object
}, _class.defaultProps = {
  lineVisible: {},
  cardVisible: {}
}, _temp);
exports.default = LoaderCard;

/***/ }),

/***/ "./app-v2/modules/shared/similarDestination/index.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/shared/similarDestination/index.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! ../Heading */ "./app-v2/modules/shared/Heading.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GSimilarDestiContainer = _glamorous.default.div({
  height: '90px',
  '& .similarDestinationDivOuter': {
    overflowX: 'auto',
    height: '94px'
  },
  '& .similarDestinationDiv': {
    marginRight: '15px',
    '&:last-child': {
      marginRight: '0'
    }
  }
});

const GImgDiv = _glamorous.default.div({
  width: '60px',
  height: '60px',
  '& img': {
    minHeight: '100%',
    maxWidth: 'none'
  }
});

const Index = ({
  similarDestination,
  destination,
  routeParams
}) => {
  return similarDestination.length ? _react.default.createElement("div", {
    className: "clearfix p15 sbcw"
  }, _react.default.createElement(_Heading.default, {
    title: routeParams.city ? "Similar Destinations" : `Cities in ${destination}`
  }), _react.default.createElement(GSimilarDestiContainer, {
    className: "flex"
  }, _react.default.createElement("div", {
    className: "swiper-full-width"
  }, _react.default.createElement("div", {
    className: "similarDestinationDivOuter flex"
  }, similarDestination.map((item, i) => _react.default.createElement(_reactRouter.Link, {
    key: i,
    to: item.link,
    className: "similarDestinationDiv flex alignCenter justifyCenter flexDColumn"
  }, _react.default.createElement(GImgDiv, {
    className: "overflowh sbc5 mb8 flex alignCenter justifyCenter radius100"
  }, _react.default.createElement(_Img.default, {
    width: 60,
    height: 60,
    src: item.image,
    ikSrc: item.imagekitUrl,
    alt: item.alt
  })), _react.default.createElement("h3", {
    className: "f12 pfc3 m0 fw4"
  }, item.location))))))) : null;
};

Index.propTypes = {
  similarDestination: _propTypes.default.array,
  destination: _propTypes.default.string,
  location: _propTypes.default.object,
  routeParams: _propTypes.default.object.isRequired
};
Index.defaultProps = {
  similarDestination: [],
  destination: ''
};
var _default = Index;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/thingsToDo/ThingsToDo.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/thingsToDo/ThingsToDo.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _LoaderCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/loaders/LoaderCard */ "./app-v2/modules/shared/loaders/LoaderCard.js"));

var _SliderWithTitle = _interopRequireDefault(__webpack_require__(/*! modules/shared/SliderWithTitle */ "./app-v2/modules/shared/SliderWithTitle.js"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ThingsToDo = (_temp2 = _class = class ThingsToDo extends _react.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.fetchThingsToDoData = props => {
      const {
        config,
        layout,
        fetchThingsToDoData
      } = props;

      if (config && config.csr) {
        fetchThingsToDoData({
          destination: layout.metaInfo.destination,
          lookupParent: config.lookupParent
        });
      }
    }, this.trackSegment = (cta, cardId, miscType1, miscId1) => {
      this.props.trackSegmentEvent({
        cta,
        object: cardId ? `Things to do/${cardId}` : 'Things to do',
        miscType1,
        miscId1
      });
    }, _temp;
  }

  componentDidMount() {
    this.fetchThingsToDoData(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.layout.metaInfo && prevProps.layout.metaInfo && this.props.layout.metaInfo.destination !== prevProps.layout.metaInfo.destination) {
      this.fetchThingsToDoData(this.props);
    }
  }

  render() {
    const {
      data,
      config,
      loaded,
      externalCss,
      errors
    } = this.props;

    if (errors && errors.length) {
      return null;
    }

    if (loaded && (!data.destinationSchemes || !data.destinationSchemes.length)) {
      return null;
    }

    return _react.default.createElement("div", {
      className: externalCss
    }, _react.default.createElement("div", {
      className: `clearfix container pl0 pr0`,
      style: (0, _utils.getFlexObject)(config.variant, config.order)
    }, !loaded ? _react.default.createElement(_LoaderCard.default, null) : data.destinationSchemes && data.destinationSchemes.length ? _react.default.createElement(_SliderWithTitle.default, {
      data: data,
      trackSegment: this.trackSegment,
      config: config,
      overflow: "scroll"
    }) : null));
  }

}, _class.propTypes = {
  data: _propTypes.PropTypes.object,
  layout: _propTypes.PropTypes.object,
  config: _propTypes.PropTypes.object,
  loaded: _propTypes.PropTypes.bool,
  errors: _propTypes.PropTypes.array,
  externalCss: _propTypes.PropTypes.string,
  trackSegmentEvent: _propTypes.PropTypes.func,
  fetchThingsToDoData: _propTypes.PropTypes.func
}, _class.defaultProps = {
  data: {},
  layout: {},
  config: {
    variant: 'FULL',
    order: 8
  },
  externalCss: '',
  loaded: false,
  trackSegmentEvent: () => {},
  fetchThingsToDoData: () => {}
}, _temp2);
var _default = ThingsToDo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/thingsToDo/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/thingsToDo/index.js ***!
  \********************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/thingsToDo/action.js");

var _ThingsToDo = _interopRequireDefault(__webpack_require__(/*! ./ThingsToDo */ "./app-v2/modules/thingsToDo/ThingsToDo.js"));

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/thingsToDo/reducer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  data: (0, _reducer.results)(state),
  loaded: state.thingsToDo.loaded,
  errors: state.thingsToDo.errors
}), {
  fetchThingsToDoData: _action.fetchThingsToDoData
})(_ThingsToDo.default));
/**
 * ThingsToDo Section
 */

var _default = {
  container,
  actions: {
    fetchThingsToDoData: _action.fetchThingsToDoData
  },
  defaultAction: _action.fetchThingsToDoData
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/cityBlock/overview/Overview.js":
/*!*******************************************************!*\
  !*** ./app-v2/screens/cityBlock/overview/Overview.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _index = _interopRequireDefault(__webpack_require__(/*! modules/placesToVisit/index */ "./app-v2/modules/placesToVisit/index.js"));

var _Guide = _interopRequireDefault(__webpack_require__(/*! modules/shared/Guide */ "./app-v2/modules/shared/Guide.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! modules/shared/similarDestination/index */ "./app-v2/modules/shared/similarDestination/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! modules/thingsToDo/index */ "./app-v2/modules/thingsToDo/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ../howToReach/index */ "./app-v2/screens/cityBlock/howToReach/index.js"));

var _TopRegions = _interopRequireDefault(__webpack_require__(/*! modules/cityBlock/TopRegions/TopRegions */ "./app-v2/modules/cityBlock/TopRegions/TopRegions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Overview = props => {
  const {
    location,
    cityBlock,
    params
  } = props;
  const PlacesToVisitContainer = _index.default.container;
  const ThingsToDoContainer = _index3.default.container;
  const HowToReachContainer = _index4.default.templateContainer;
  const {
    tourismGuide,
    similarDestinations,
    destination
  } = cityBlock;
  return _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement("div", {
    className: "sbcw mt8 mb8 mt0"
  }, _react.default.createElement(_Guide.default, {
    guide: tourismGuide
  })), props.exitIntent, _react.default.createElement("div", {
    className: "mb8 mt0"
  }, destination === 'India' ? _react.default.createElement(_TopRegions.default, {
    topRegions: similarDestinations
  }) : _react.default.createElement(_index2.default, {
    similarDestination: similarDestinations,
    destination: destination,
    location: location,
    routeParams: params || {},
    ssrAnimation: {
      width: 60,
      height: 60
    }
  })), _react.default.createElement("div", {
    className: "mb8 mt0 p15 sbcw"
  }, _react.default.createElement(PlacesToVisitContainer, null)), _react.default.createElement("div", {
    className: "mb8 mt0 p15 sbcw"
  }, _react.default.createElement(ThingsToDoContainer, null)), destination === 'India' ? null : _react.default.createElement("div", {
    className: "mb8 mt0 p15 sbcw"
  }, _react.default.createElement(HowToReachContainer, props)));
};

var _default = Overview;
exports.default = _default;
Overview.propTypes = {
  cityBlock: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svVG9wUmVnaW9ucy9Ub3BJbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2l0eUJsb2NrL1RvcFJlZ2lvbnMvVG9wUmVnaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wbGFjZXNUb1Zpc2l0L1BsYWNlc1RvVmlzaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcGxhY2VzVG9WaXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvR3VpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL092ZXJ2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9TaG93TW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvbG9hZGVycy9Mb2FkZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9zaW1pbGFyRGVzdGluYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdGhpbmdzVG9Eby9UaGluZ3NUb0RvLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RoaW5nc1RvRG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvY2l0eUJsb2NrL292ZXJ2aWV3L092ZXJ2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1N3aXBlci9Td2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlci5zY3NzIl0sIm5hbWVzIjpbIlRvcENhcmQiLCJnbGFtb3JvdXMiLCJkaXYiLCJ3aWR0aCIsIkdJbWFnZUNvbnRhaW5lckRpdiIsImhlaWdodCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIkdJbWciLCJJbWciLCJtaW5IZWlnaHQiLCJUb3BJbkNhcmQiLCJsaW5rIiwiaW1hZ2UiLCJpbWFnZWtpdFVybCIsImxvY2F0aW9uIiwiYmVzdFRpbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiVG9wUmVnaW9ucyIsInRvcFJlZ2lvbnMiLCJzcGFjaW5nQ3NzIiwibGVuZ3RoIiwibWFwIiwicmVnaW9uIiwiaW5kZXgiLCJhcnJheSIsIm9iamVjdCIsIlBsYWNlc1RvVmlzaXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0cmFja1NlZ21lbnQiLCJjdGEiLCJjYXJkSWQiLCJtaXNjVHlwZTEiLCJtaXNjSWQxIiwidHJhY2tTZWdtZW50RXZlbnQiLCJyZW5kZXIiLCJkYXRhIiwiY29uZmlnIiwibG9hZGVkIiwiZXh0ZXJuYWxDc3MiLCJlcnJvcnMiLCJkZXN0aW5hdGlvblNjaGVtZXMiLCJib29sIiwiZnVuYyIsImZldGNoUGxhY2VzVG9WaXNpdERhdGEiLCJ2YXJpYW50Iiwib3JkZXIiLCJjb250YWluZXIiLCJzdGF0ZSIsInBsYWNlc1RvVmlzaXQiLCJhY3Rpb25zIiwiZGVmYXVsdEFjdGlvbiIsIlNob3dNb3JlQ29udGFpbmVyIiwibWFyZ2luVG9wIiwiR3VpZGUiLCJndWlkZSIsIlN1YkhlYWRpbmciLCJwIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJtYXJnaW4iLCJIZWFkaW5nIiwidGl0bGUiLCJoZWFkaW5nIiwic3R5bGVIZWFkaW5nIiwic3R5bGVTdWJIZWFkaW5nIiwidHlwZSIsImlzVmlld0FsbEhpZGRlbiIsImZvckhlYWRpbmciLCJwYXJzZXIiLCJQYXJzZXIiLCJvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSIsIm92ZXJ2aWV3TW9yZVRleHQiLCJyZXBsYWNlIiwiZXJyIiwiT3ZlcnZpZXciLCJQdXJlQ29tcG9uZW50Iiwib3ZlcnZpZXdDb250ZW50IiwiZGVzY3JpcHRpb24iLCJmb290ZXJEZXNjcmlwdGlvbiIsImRlc2MiLCJzcGxpdCIsImZpbHRlciIsImZvb3RlckRlc2MiLCJwYXJzZSIsInNsaWNlIiwiam9pbiIsImNvbmNhdCIsIkdyZWFkbW9yZUxhYmVsIiwibGFiZWwiLCJwYWRkaW5nIiwiR0Rvd25BcnJvd1NwYW4iLCJzcGFuIiwidG9wIiwiU2hvd01vcmUiLCJjaGVja2VkIiwiZGVmYXVsdE9wZW4iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRMZW5ndGgiLCJpc0RlZmF1bHRTaG93TW9yZSIsImFwcGVuZFRleHQiLCJ3cmFwVGV4dCIsIm1vcmVUZXh0Iiwic2hvd0xlc3NUZXh0Iiwic2hvd01vcmVUZXh0Iiwib25lT2ZUeXBlIiwiTG9hZGVyQ2FyZCIsImNhcmRWaXNpYmxlIiwibWF4V2lkdGgiLCJsaW5lVmlzaWJsZSIsIkdTaW1pbGFyRGVzdGlDb250YWluZXIiLCJvdmVyZmxvd1giLCJtYXJnaW5SaWdodCIsIkdJbWdEaXYiLCJJbmRleCIsInNpbWlsYXJEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwicm91dGVQYXJhbXMiLCJjaXR5IiwiaXRlbSIsImkiLCJhbHQiLCJUaGluZ3NUb0RvIiwiZmV0Y2hUaGluZ3NUb0RvRGF0YSIsImxheW91dCIsImNzciIsIm1ldGFJbmZvIiwibG9va3VwUGFyZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJ0aGluZ3NUb0RvIiwiY2l0eUJsb2NrIiwicGFyYW1zIiwiUGxhY2VzVG9WaXNpdENvbnRhaW5lciIsIlRoaW5nc1RvRG9Db250YWluZXIiLCJIb3dUb1JlYWNoQ29udGFpbmVyIiwiSG93VG9SZWFjaCIsInRlbXBsYXRlQ29udGFpbmVyIiwidG91cmlzbUd1aWRlIiwic2ltaWxhckRlc3RpbmF0aW9ucyIsImV4aXRJbnRlbnQiLCJTd2lwZXIiLCJyZW5kZXJTZXJ2ZXIiLCJzdHlsZXMiLCJjaGlsZHJlbiIsImMiLCJfX2h0bWwiLCJSZWFjdERPTSIsInJlbmRlclRvU3RhdGljTWFya3VwIiwicG9zaXRpb24iLCJyZW5kZXJFbXB0eUNsaWVudCIsInN3aXBlckFzeW5jIiwidGhlbiIsInMiLCJSZWFjdElkU3dpcGVyIiwiZGVmYXVsdCIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc1NtYWxsU3dpcGVyIiwiaXNGdWxsV2lkdGhTd2lwZXIiLCJzc3JBbmltYXRpb24iLCJzaG93TG9hZGVyIiwiX19TRVJWRVJfXyIsImxvYWRPbkRvY3VtZW50UmVhZHkiLCJyZWJ1aWxkT25VcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1BLFVBQVVDLG1CQUFVQyxHQUFWLENBQWM7QUFDNUJDLFNBQU87QUFEcUIsQ0FBZCxDQUFoQjs7QUFJQSxNQUFNQyxxQkFBcUJILG1CQUFVQyxHQUFWLENBQWM7QUFDdkNDLFNBQU8sTUFEZ0M7QUFFdkNFLFVBQVEsTUFGK0I7QUFHdkNDLFlBQVUsUUFINkI7QUFJdkNDLFdBQVMsTUFKOEI7QUFLdkNDLGtCQUFnQixRQUx1QjtBQU12Q0MsY0FBWTtBQU4yQixDQUFkLENBQTNCOztBQVNBLE1BQU1DLE9BQU8sd0JBQVVDLFlBQVYsRUFBZTtBQUMxQlIsU0FBTyxNQURtQjtBQUUxQlMsYUFBVztBQUZlLENBQWYsQ0FBYjs7QUFLQSxNQUFNQyxZQUFZLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDLGFBQWY7QUFBNEJDLFVBQTVCO0FBQXNDQztBQUF0QyxDQUFELEtBQXNEO0FBQ3RFLFNBQ0Us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QUFLQSxDQUFYO0FBQWMscUJBQVksS0FBS25HLEtBQUwsQ0FBVzRILFFBQVgsQ0FBb0J0SSxNQUFwQixHQUE2QixDQUE3QixJQUMvQixDQUFDc0osYUFEOEIsSUFDYixDQUFDQyxpQkFEVyxHQUU5Qix5QkFGOEIsR0FFRkQsaUJBQWlCLENBQUNDLGlCQUFsQixHQUMxQiw0QkFEMEIsR0FDS0Esb0JBQzdCLE9BRDZCLEdBQ25CO0FBSlQsV0FLSmhCLENBTEksRUFNSmtCLGFBQWE7QUFBSyxxQkFBVTtBQUFmLFVBQWIsR0FBeUQsSUFOckQsQ0FBUDtBQVFELE9BVEQsQ0FGSixDQURGO0FBZ0JEO0FBQ0Y7O0FBL0cyQyxDLFNBQ3JDakssUyxHQUFZO0FBQ2pCZ0ssZ0JBQWMvSixtQkFBVXFHLFNBQVYsQ0FBb0IsQ0FBQ3JHLG1CQUFVK0IsSUFBWCxFQUFpQi9CLG1CQUFVWSxNQUEzQixDQUFwQixDQURHO0FBRWpCaUksWUFBVTdJLG1CQUFVVyxLQUZIO0FBR2pCa0osaUJBQWU3SixtQkFBVStCLElBSFI7QUFJakIrSCxxQkFBbUI5SixtQkFBVStCLElBSlo7QUFLakJtSSx1QkFBcUJsSyxtQkFBVStCLElBTGQ7QUFNakJvSSxtQkFBaUJuSyxtQkFBVStCLElBTlY7QUFPakJpSSxjQUFZaEssbUJBQVUrQixJQVBMO0FBUWpCN0MsWUFBVWMsbUJBQVVDO0FBUkgsQyxTQVVaRSxZLEdBQWU7QUFDcEI0SixnQkFBYyxFQURNO0FBRXBCbEIsWUFBVSxFQUZVO0FBR3BCZ0IsaUJBQWUsS0FISztBQUlwQkMscUJBQW1CLEtBSkM7QUFLcEJJLHVCQUFxQixLQUxEO0FBTXBCRixjQUFZLEtBTlE7QUFPcEI5SyxZQUFVO0FBUFUsQzs7Ozs7Ozs7Ozs7O0FDakJ4QjtBQUNBO0FBQ0EsRSIsImZpbGUiOiJjaXR5LWJsb2NrLW92ZXJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5jb25zdCBUb3BDYXJkID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMTAwJScsXG59KTtcblxuY29uc3QgR0ltYWdlQ29udGFpbmVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzgwcHgnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn0pO1xuXG5jb25zdCBHSW1nID0gZ2xhbW9yb3VzKEltZykoe1xuICB3aWR0aDogJzEwMCUnLFxuICBtaW5IZWlnaHQ6ICcxMDAlJyxcbn0pO1xuXG5jb25zdCBUb3BJbkNhcmQgPSAoeyBsaW5rLCBpbWFnZSwgaW1hZ2VraXRVcmwsIGxvY2F0aW9uLCBiZXN0VGltZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRvcENhcmQgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgIDxMaW5rIHRvPXtsaW5rfSBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICA8R0ltYWdlQ29udGFpbmVyRGl2IGNsYXNzTmFtZT1cInNiYzRcIj5cbiAgICAgICAgICA8R0ltZyB3aWR0aD17MzIwfSBoZWlnaHQ9ezgwfSBzcmM9e2ltYWdlfSBpa1NyYz17aW1hZ2VraXRVcmx9IGFsdD17bG9jYXRpb259IC8+XG4gICAgICAgIDwvR0ltYWdlQ29udGFpbmVyRGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbGxpcHNpcyBtMCBwdDggZjE0IHBmYzMgZnc5XCI+e2xvY2F0aW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIHBmYzQgYnJlYWstd29yZFwiPkJlc3QgdGltZSB0byB2aXNpdDoge2Jlc3RUaW1lfTwvcD5cbiAgICAgIDwvTGluaz5cbiAgICA8L1RvcENhcmQ+XG4gICk7XG59O1xuXG5Ub3BJbkNhcmQucHJvcFR5cGVzID0ge1xuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZWtpdFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmVzdFRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Ub3BJbkNhcmQuZGVmYXVsdFByb3BzID0ge1xuICBsaW5rOiAnJyxcbiAgbG9jYXRpb246ICdOb3J0aCBJbmRpYScsXG4gIGJlc3RUaW1lOiAnU2VwIC0gTWFyJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEluQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlcic7XG5pbXBvcnQgVG9wSW5DYXJkIGZyb20gJy4vVG9wSW5DYXJkJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL0hlYWRpbmcnO1xuXG5jb25zdCBUb3BSZWdpb25zID0gKHsgdG9wUmVnaW9ucywgc3BhY2luZ0NzcyB9KSA9PiB7XG4gIHJldHVybiB0b3BSZWdpb25zLmxlbmd0aCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHAxNSBzYmN3XCIgc3R5bGU9e3NwYWNpbmdDc3N9PlxuICAgICAgPEhlYWRpbmcgdGl0bGU9XCJUb3AgU3RhdGVzIEluIEluZGlhXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgaWQ9XCJ0b3BJblNsaWRlclwiXG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MTV9XG4gICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAyODAsIGhlaWdodDogMTIyIH19XG4gICAgICAgIHJlYnVpbGRPblVwZGF0ZT5cbiAgICAgICAge1xuICAgICAgICAgIHRvcFJlZ2lvbnMubWFwKChyZWdpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNsZWFyZml4IHJhZGl1czIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPFRvcEluQ2FyZCB7Li4ucmVnaW9ufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGw7XG59O1xuXG5Ub3BSZWdpb25zLnByb3BUeXBlcyA9IHtcbiAgdG9wUmVnaW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBzcGFjaW5nQ3NzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5Ub3BSZWdpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG9wUmVnaW9uczogW10sXG4gIHNwYWNpbmdDc3M6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BSZWdpb25zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBMb2FkZXJDYXJkIGZyb20gJ21vZHVsZXMvc2hhcmVkL2xvYWRlcnMvTG9hZGVyQ2FyZCc7XG5pbXBvcnQgU2xpZGVyV2l0aFRpdGxlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1NsaWRlcldpdGhUaXRsZSc7XG5cbmNsYXNzIFBsYWNlc1RvVmlzaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlcnJvcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHRlcm5hbENzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YTogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHt9LFxuICAgIGNvbmZpZzoge1xuICAgICAgdmFyaWFudDogJ0ZVTEwnLFxuICAgICAgb3JkZXI6IDhcbiAgICB9LFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgZXh0ZXJuYWxDc3M6ICcnLFxuICAgIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7fSxcbiAgICBmZXRjaFBsYWNlc1RvVmlzaXREYXRhOiAoKSA9PiB7fVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgdGhpcy5mZXRjaFBsYWNlc1RvVmlzaXREYXRhKHRoaXMucHJvcHMpO1xuICAvLyB9XG5cbiAgLy8gZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YSA9IChwcm9wcykgPT4ge1xuICAvLyAgIGNvbnN0IHsgY29uZmlnLCBmZXRjaFBsYWNlc1RvVmlzaXREYXRhIH0gPSBwcm9wcztcbiAgLy8gICBpZiAoY29uZmlnICYmIGNvbmZpZy5jc3IpIHtcbiAgLy8gICAgIGZldGNoUGxhY2VzVG9WaXNpdERhdGEoe1xuICAvLyAgICAgICBkZXN0aW5hdGlvbjogbGF5b3V0Lm1ldGFJbmZvLmRlc3RpbmF0aW9uLFxuICAvLyAgICAgICBsb29rdXBQYXJlbnQ6IGNvbmZpZy5sb29rdXBQYXJlbnRcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICB0cmFja1NlZ21lbnQgPSAoY3RhLCBjYXJkSWQsIG1pc2NUeXBlMSwgbWlzY0lkMSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgY3RhLFxuICAgICAgb2JqZWN0OiBjYXJkSWQgPyBgUGxhY2VzIHRvIHZpc2l0LyR7Y2FyZElkfWAgOiAnUGxhY2VzIHRvIHZpc2l0JyxcbiAgICAgIG1pc2NUeXBlMSxcbiAgICAgIG1pc2NJZDFcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBjb25maWcsIGxvYWRlZCwgZXh0ZXJuYWxDc3MsIGVycm9ycyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChsb2FkZWQgJiYgKCFkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcyB8fCAhZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtleHRlcm5hbENzc30+XG4gICAgICAgIHtcbiAgICAgICAgICAhbG9hZGVkXG4gICAgICAgICAgICA/IDxMb2FkZXJDYXJkIC8+XG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMgJiYgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyA8U2xpZGVyV2l0aFRpdGxlIGRhdGE9e2RhdGF9IHRyYWNrU2VnbWVudD17dGhpcy50cmFja1NlZ21lbnR9IGNvbmZpZz17Y29uZmlnfSBvdmVyZmxvdz0ndW5zZXQnLz5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFjZXNUb1Zpc2l0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YSB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IHJlc3VsdHMgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IFBsYWNlc1RvVmlzaXQgZnJvbSAnLi9QbGFjZXNUb1Zpc2l0JztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGRhdGE6IHJlc3VsdHMoc3RhdGUpLFxuICAgIGxvYWRlZDogc3RhdGUucGxhY2VzVG9WaXNpdC5sb2FkZWQsXG4gICAgZXJyb3JzOiBzdGF0ZS5wbGFjZXNUb1Zpc2l0LmVycm9yc1xuICB9KSxcbiAge1xuICAgIGZldGNoUGxhY2VzVG9WaXNpdERhdGFcbiAgfVxuKShQbGFjZXNUb1Zpc2l0KSk7XG5cbi8qKlxuICogUGxhY2VzVG9WaXNpdCBTZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7XG4gICAgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YVxuICB9LFxuICBkZWZhdWx0QWN0aW9uOiBmZXRjaFBsYWNlc1RvVmlzaXREYXRhXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBPdmVydmlldyBmcm9tICcuL092ZXJ2aWV3JztcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4vSGVhZGluZyc7XG5cbmNvbnN0IFNob3dNb3JlQ29udGFpbmVyID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1hcmdpblRvcDogJy04cHgnLFxufSk7XG5cbmNvbnN0IEd1aWRlID0gKHsgZ3VpZGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggc2JjdyBwMTVcIj5cbiAgICAgIDxIZWFkaW5nIHsuLi5ndWlkZX0gdHlwZT1cIm1haW4taGVhZGluZ1wiLz5cbiAgICAgIDxPdmVydmlldyB7Li4uZ3VpZGV9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkd1aWRlLnByb3BUeXBlcyA9IHtcbiAgZ3VpZGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5HdWlkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGd1aWRlOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3VpZGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgU3ViSGVhZGluZyA9IGdsYW1vcm91cy5wKHtcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbGluZUhlaWdodDogJzE4cHgnLFxuICBjb2xvcjogJyNjYmNiY2InLFxuICBtYXJnaW46ICc0cHggMCAwIDAnLFxufSk7XG5cbmNvbnN0IEhlYWRpbmcgPSAoeyBkYXRhLCB0aXRsZSwgaGVhZGluZywgc3R5bGVIZWFkaW5nLCBzdHlsZVN1YkhlYWRpbmcsIHR5cGUsIGlzVmlld0FsbEhpZGRlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBtYjE1XCI+XG4gICAgICB7XG4gICAgICAgIHR5cGUgPT09ICdtYWluLWhlYWRpbmcnID9cbiAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlSGVhZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1ZpZXdBbGxIaWRkZW4gPyAncHIwICcgOiAncHI2NCAnfSBmMTYgcGZjMSBmdzkgbTBgfT57ZGF0YS50aXRsZSB8fCB0aXRsZX17ZGF0YS5mb3JIZWFkaW5nID8gYCBmb3IgJHtkYXRhLmZvckhlYWRpbmd9YCA6IG51bGx9PC9oMj5cbiAgICAgICAgICA6IDxoMiBzdHlsZT17c3R5bGVIZWFkaW5nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNWaWV3QWxsSGlkZGVuID8gJ3ByMCAnIDogJ3ByNjQgJ30gZjE2IHBmYzMgZndiIG0wYH0+e2RhdGEudGl0bGUgfHwgdGl0bGV9e2RhdGEuZm9ySGVhZGluZyA/IGAgZm9yICR7ZGF0YS5mb3JIZWFkaW5nfWAgOiBudWxsfTwvaDI+XG4gICAgICB9XG4gICAgICB7ZGF0YS5oZWFkaW5nIHx8IGhlYWRpbmcgP1xuICAgICAgICA8U3ViSGVhZGluZyBzdHlsZT17c3R5bGVTdWJIZWFkaW5nfSBjbGFzc05hbWU9XCJmMTQgbXQ0IGZ3NFwiPntkYXRhLmhlYWRpbmcgfHwgaGVhZGluZ308L1N1YkhlYWRpbmc+IDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZUhlYWRpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN0eWxlU3ViSGVhZGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNWaWV3QWxsSGlkZGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9LFxuICB0eXBlOiAnJyxcbiAgdGl0bGU6ICcnLFxuICBoZWFkaW5nOiAnJyxcbiAgc3R5bGVIZWFkaW5nOiB7fSxcbiAgc3R5bGVTdWJIZWFkaW5nOiB7fSxcbiAgaXNWaWV3QWxsSGlkZGVuOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnLi9TaG93TW9yZSc7XG5cbmNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3Qgb3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUgPSAob3ZlcnZpZXdNb3JlVGV4dCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBvdmVydmlld01vcmVUZXh0LnJlcGxhY2UoLzxiciBcXC8+fDxcXC9icj4vZywgJycpLnJlcGxhY2UoJzwvc3Bhbj48L3A+XFxyXFxuJywgJycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gb3ZlcnZpZXdNb3JlVGV4dDtcbiAgfVxufTtcblxuY2xhc3MgT3ZlcnZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgb3ZlcnZpZXdDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGZvb3RlckRlc2NyaXB0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbi5zcGxpdCgnXFxyXFxuJykuZmlsdGVyKHAgPT4gcC5sZW5ndGgpIHx8IFtdO1xuXG4gICAgaWYgKCFkZXNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZm9vdGVyRGVzYyA9IGZvb3RlckRlc2NyaXB0aW9uID8gYDxicj4ke2Zvb3RlckRlc2NyaXB0aW9ufWAgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8U2hvd01vcmVcbiAgICAgICAgd3JhcFRleHQ9e3BhcnNlci5wYXJzZShkZXNjWzBdKX1cbiAgICAgICAgbW9yZVRleHQ9e3BhcnNlci5wYXJzZShvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZShkZXNjLnNsaWNlKDEpLmpvaW4oJ1xcbicpLmNvbmNhdChmb290ZXJEZXNjKSkpfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByb3ctbXdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYm94XCI+XG4gICAgICAgICAge3RoaXMub3ZlcnZpZXdDb250ZW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5PdmVydmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvb3RlckRlc2NyaXB0aW9uOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnXG59O1xuXG5PdmVydmlldy5wcm9wVHlwZXMgPSB7XG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb290ZXJEZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmltcG9ydCB7IEJsdWVEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR3JlYWRtb3JlTGFiZWwgPSBnbGFtb3JvdXMubGFiZWwoe1xuICAnJiBidXR0b24ucmVhZC1tb3JlLWJ1dHRvbic6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxufSk7XG5cbmNvbnN0IEdEb3duQXJyb3dTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICc2cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICc2cHgnLFxuICAgIHRvcDogJzFweCdcbiAgfVxufSk7XG5cbmNsYXNzIFNob3dNb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmRlZmF1bHRPcGVuXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7IGN0YTogJ1JlYWQgTW9yZScgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dExlbmd0aCA9IDE5NTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1zdGF0ZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gaWQ9XCJwb3N0LTFcIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVhZC1tb3JlLXdyYXAgJHt0aGlzLnByb3BzLmlzRGVmYXVsdFNob3dNb3JlID8gJ3AtbGFzdC1uby1tYXJnaW4gcGZjMyBmMTRwIGR5bmFtaWNUZXh0SW5oZXJpdCcgOiAnJ31gfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgZm9yIHRydW5jYXRlIHRoZSBzdHJpbmdcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy5hcHBlbmRUZXh0ICYmIHRoaXMucHJvcHMud3JhcFRleHQubGVuZ3RoID49IHRleHRMZW5ndGhcbiAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLndyYXBUZXh0ICsgdGhpcy5wcm9wcy5hcHBlbmRUZXh0XG4gICAgICAgICAgICAgIDogdGhpcy5wcm9wcy53cmFwVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdGFyZ2V0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tb3JlVGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tb3JlVGV4dC5sZW5ndGggPiAwIHx8ICFfaXNFbXB0eSh0aGlzLnByb3BzLm1vcmVUZXh0KSA/XG4gICAgICAgICAgICA8R3JlYWRtb3JlTGFiZWwgaHRtbEZvcj1cInBvc3QtMVwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10cmlnZ2VyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJ1dHRvbiBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlbiByZWxhdGl2ZSBmMTIgZnc3XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE0IGZ3N1wiPlxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmNoZWNrZWQpID8gdGhpcy5wcm9wcy5zaG93TGVzc1RleHQgOiB0aGlzLnByb3BzLnNob3dNb3JlVGV4dH1cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxHRG93bkFycm93U3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtbDggcmVsYXRpdmUgYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxCbHVlRG93bkFycm93IC8+PC9HRG93bkFycm93U3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0dyZWFkbW9yZUxhYmVsPlxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNob3dNb3JlLnByb3BUeXBlcyA9IHtcbiAgd3JhcFRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbW9yZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNob3dNb3JlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0xlc3NUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgYXBwZW5kVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuXG59O1xuXG5TaG93TW9yZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHdyYXBUZXh0OiAnJyxcbiAgbW9yZVRleHQ6ICcnLFxuICBzaG93TW9yZVRleHQ6ICdSZWFkIE1vcmUnLFxuICBzaG93TGVzc1RleHQ6ICdSZWFkIExlc3MnLFxuICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiB0cnVlLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd01vcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEdMb2FkZXJDb250YWluZXJEaXYsIEdMb2FkZXJDYXJkU3BhbiB9IGZyb20gJy4vLi4vRyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlckNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxpbmVWaXNpYmxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNhcmRWaXNpYmxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmVWaXNpYmxlOiB7fSxcbiAgICBjYXJkVmlzaWJsZToge30sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2FyZFZpc2libGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHTG9hZGVyQ29udGFpbmVyRGl2IGNsYXNzTmFtZT1cImZsZXggZmxleEZ1bGwgZmxleERDb2x1bW4gd2Z1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lIG1iNSBtdDAgc2JjNVwiIHN0eWxlPXt7IHdpZHRoOiAnNjAlJyB9fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlckxpbmUgbWIxNSBtdDAgc2JjNVwiIHN0eWxlPXt7IHdpZHRoOiAnNzAlJyB9fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlck1haW4gcmFkaXVzMiBmbGV4RnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyTWFpbkNhcmQgZmxleEZ1bGxcIj5cbiAgICAgICAgICAgIDxHTG9hZGVyQ2FyZFNwYW4gY2xhc3NOYW1lPVwid2Z1bGwgc2JjNVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgcDE1IHBiMjQgd2Z1bGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lRGFyayBzYmM1IG1iMTUgc2JjNFwiIHN0eWxlPXt7IG1heFdpZHRoOiAnODAlJyB9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlckxpbmVEYXJrIHNiYzUgbWI4IHNiYzRcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlckxpbmVEYXJrIHNiYzUgc2JjNFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dMb2FkZXJDb250YWluZXJEaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi4vSGVhZGluZyc7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmNvbnN0IEdTaW1pbGFyRGVzdGlDb250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnOTBweCcsXG4gICcmIC5zaW1pbGFyRGVzdGluYXRpb25EaXZPdXRlcic6IHtcbiAgICBvdmVyZmxvd1g6ICdhdXRvJyxcbiAgICBoZWlnaHQ6ICc5NHB4JyxcbiAgfSxcbiAgJyYgLnNpbWlsYXJEZXN0aW5hdGlvbkRpdic6IHtcbiAgICBtYXJnaW5SaWdodDogJzE1cHgnLFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzAnLFxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IEdJbWdEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICc2MHB4JyxcbiAgaGVpZ2h0OiAnNjBweCcsXG4gICcmIGltZyc6IHtcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJ25vbmUnLFxuICB9LFxufSk7XG5cbmNvbnN0IEluZGV4ID0gKHsgc2ltaWxhckRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbiwgcm91dGVQYXJhbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIHNpbWlsYXJEZXN0aW5hdGlvbi5sZW5ndGggP1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwMTUgc2Jjd1wiPlxuICAgICAgICA8SGVhZGluZyB0aXRsZT17cm91dGVQYXJhbXMuY2l0eSA/IFwiU2ltaWxhciBEZXN0aW5hdGlvbnNcIiA6IGBDaXRpZXMgaW4gJHtkZXN0aW5hdGlvbn1gfSAvPlxuICAgICAgICA8R1NpbWlsYXJEZXN0aUNvbnRhaW5lciBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItZnVsbC13aWR0aFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltaWxhckRlc3RpbmF0aW9uRGl2T3V0ZXIgZmxleFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaW1pbGFyRGVzdGluYXRpb24ubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gdG89e2l0ZW0ubGlua30gY2xhc3NOYW1lPVwic2ltaWxhckRlc3RpbmF0aW9uRGl2IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciBmbGV4RENvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPEdJbWdEaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3doIHNiYzUgbWI4IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciByYWRpdXMxMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltZyB3aWR0aD17NjB9IGhlaWdodD17NjB9IHNyYz17aXRlbS5pbWFnZX0gaWtTcmM9e2l0ZW0uaW1hZ2VraXRVcmx9IGFsdD17aXRlbS5hbHR9IC8+XG4gICAgICAgICAgICAgICAgICA8L0dJbWdEaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZjEyIHBmYzMgbTAgZnc0XCI+e2l0ZW0ubG9jYXRpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HU2ltaWxhckRlc3RpQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA6IG51bGxcbiAgKTtcbn07XG5cbkluZGV4LnByb3BUeXBlcyA9IHtcbiAgc2ltaWxhckRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcm91dGVQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuSW5kZXguZGVmYXVsdFByb3BzID0ge1xuICBzaW1pbGFyRGVzdGluYXRpb246IFtdLFxuICBkZXN0aW5hdGlvbjogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRGbGV4T2JqZWN0IH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgTG9hZGVyQ2FyZCBmcm9tICdtb2R1bGVzL3NoYXJlZC9sb2FkZXJzL0xvYWRlckNhcmQnO1xuaW1wb3J0IFNsaWRlcldpdGhUaXRsZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9TbGlkZXJXaXRoVGl0bGUnO1xuXG5jbGFzcyBUaGluZ3NUb0RvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxheW91dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlcnJvcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHRlcm5hbENzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmV0Y2hUaGluZ3NUb0RvRGF0YTogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHt9LFxuICAgIGxheW91dDoge30sXG4gICAgY29uZmlnOiB7XG4gICAgICB2YXJpYW50OiAnRlVMTCcsXG4gICAgICBvcmRlcjogOFxuICAgIH0sXG4gICAgZXh0ZXJuYWxDc3M6ICcnLFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgdHJhY2tTZWdtZW50RXZlbnQ6ICgpID0+IHt9LFxuICAgIGZldGNoVGhpbmdzVG9Eb0RhdGE6ICgpID0+IHt9XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRoaW5nc1RvRG9EYXRhKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmxheW91dC5tZXRhSW5mbyAmJiBwcmV2UHJvcHMubGF5b3V0Lm1ldGFJbmZvXG4gICAgICAmJiB0aGlzLnByb3BzLmxheW91dC5tZXRhSW5mby5kZXN0aW5hdGlvbiAhPT0gcHJldlByb3BzLmxheW91dC5tZXRhSW5mby5kZXN0aW5hdGlvbikge1xuICAgICAgdGhpcy5mZXRjaFRoaW5nc1RvRG9EYXRhKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxuXG4gIGZldGNoVGhpbmdzVG9Eb0RhdGEgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbmZpZywgbGF5b3V0LCBmZXRjaFRoaW5nc1RvRG9EYXRhIH0gPSBwcm9wcztcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5jc3IpIHtcbiAgICAgIGZldGNoVGhpbmdzVG9Eb0RhdGEoe1xuICAgICAgICBkZXN0aW5hdGlvbjogbGF5b3V0Lm1ldGFJbmZvLmRlc3RpbmF0aW9uLFxuICAgICAgICBsb29rdXBQYXJlbnQ6IGNvbmZpZy5sb29rdXBQYXJlbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0cmFja1NlZ21lbnQgPSAoY3RhLCBjYXJkSWQsIG1pc2NUeXBlMSwgbWlzY0lkMSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgY3RhLFxuICAgICAgb2JqZWN0OiBjYXJkSWQgPyBgVGhpbmdzIHRvIGRvLyR7Y2FyZElkfWAgOiAnVGhpbmdzIHRvIGRvJyxcbiAgICAgIG1pc2NUeXBlMSxcbiAgICAgIG1pc2NJZDFcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBjb25maWcsIGxvYWRlZCwgZXh0ZXJuYWxDc3MsIGVycm9ycyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChsb2FkZWQgJiYgKCFkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcyB8fCAhZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtleHRlcm5hbENzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2xlYXJmaXggY29udGFpbmVyIHBsMCBwcjBgfVxuICAgICAgICAgICAgIHN0eWxlPXtnZXRGbGV4T2JqZWN0KGNvbmZpZy52YXJpYW50LCBjb25maWcub3JkZXIpfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhbG9hZGVkXG4gICAgICAgICAgICAgID8gPExvYWRlckNhcmQgLz5cbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMgJiYgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IDxTbGlkZXJXaXRoVGl0bGUgZGF0YT17ZGF0YX0gdHJhY2tTZWdtZW50PXt0aGlzLnRyYWNrU2VnbWVudH0gY29uZmlnPXtjb25maWd9IG92ZXJmbG93PSdzY3JvbGwnIC8+XG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoaW5nc1RvRG87XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBmZXRjaFRoaW5nc1RvRG9EYXRhIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IFRoaW5nc1RvRG8gZnJvbSAnLi9UaGluZ3NUb0RvJztcbmltcG9ydCB7IHJlc3VsdHMgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgZGF0YTogcmVzdWx0cyhzdGF0ZSksXG4gICAgbG9hZGVkOiBzdGF0ZS50aGluZ3NUb0RvLmxvYWRlZCxcbiAgICBlcnJvcnM6IHN0YXRlLnRoaW5nc1RvRG8uZXJyb3JzXG4gIH0pLFxuICB7XG4gICAgZmV0Y2hUaGluZ3NUb0RvRGF0YVxuICB9XG4pKFRoaW5nc1RvRG8pKTtcblxuLyoqXG4gKiBUaGluZ3NUb0RvIFNlY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIGFjdGlvbnM6IHtcbiAgICBmZXRjaFRoaW5nc1RvRG9EYXRhXG4gIH0sXG4gIGRlZmF1bHRBY3Rpb246IGZldGNoVGhpbmdzVG9Eb0RhdGFcbn07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBsYWNlc1RvVmlzaXQgZnJvbSAnbW9kdWxlcy9wbGFjZXNUb1Zpc2l0L2luZGV4JztcbmltcG9ydCBHdWlkZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9HdWlkZSc7XG5pbXBvcnQgU2ltaWxhckRlc3RpbmF0aW9uIGZyb20gJ21vZHVsZXMvc2hhcmVkL3NpbWlsYXJEZXN0aW5hdGlvbi9pbmRleCc7XG5pbXBvcnQgVGhpbmdzVG9EbyBmcm9tICdtb2R1bGVzL3RoaW5nc1RvRG8vaW5kZXgnO1xuaW1wb3J0IEhvd1RvUmVhY2ggZnJvbSAnLi4vaG93VG9SZWFjaC9pbmRleCc7XG5pbXBvcnQgVG9wUmVnaW9ucyBmcm9tICdtb2R1bGVzL2NpdHlCbG9jay9Ub3BSZWdpb25zL1RvcFJlZ2lvbnMnO1xuXG5jb25zdCBPdmVydmlldyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxvY2F0aW9uLCBjaXR5QmxvY2ssIHBhcmFtcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFBsYWNlc1RvVmlzaXRDb250YWluZXIgPSBQbGFjZXNUb1Zpc2l0LmNvbnRhaW5lcjtcbiAgY29uc3QgVGhpbmdzVG9Eb0NvbnRhaW5lciA9IFRoaW5nc1RvRG8uY29udGFpbmVyO1xuICBjb25zdCBIb3dUb1JlYWNoQ29udGFpbmVyID0gSG93VG9SZWFjaC50ZW1wbGF0ZUNvbnRhaW5lcjtcbiAgY29uc3QgeyB0b3VyaXNtR3VpZGUsIHNpbWlsYXJEZXN0aW5hdGlvbnMsIGRlc3RpbmF0aW9uIH0gPSBjaXR5QmxvY2s7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgbXQ4IG1iOCBtdDBcIj5cbiAgICAgICAgPEd1aWRlIGd1aWRlPXt0b3VyaXNtR3VpZGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtwcm9wcy5leGl0SW50ZW50fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjggbXQwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbiA9PT0gJ0luZGlhJyA/XG4gICAgICAgICAgICA8VG9wUmVnaW9ucyB0b3BSZWdpb25zPXtzaW1pbGFyRGVzdGluYXRpb25zfS8+IDpcbiAgICAgICAgICAgIDxTaW1pbGFyRGVzdGluYXRpb24gc2ltaWxhckRlc3RpbmF0aW9uPXtzaW1pbGFyRGVzdGluYXRpb25zfSBkZXN0aW5hdGlvbj17ZGVzdGluYXRpb259XG4gICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn0gcm91dGVQYXJhbXM9e3BhcmFtcyB8fCB7fX0gc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiA2MCwgaGVpZ2h0OiA2MCB9fS8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjggbXQwIHAxNSBzYmN3XCI+XG4gICAgICAgIDxQbGFjZXNUb1Zpc2l0Q29udGFpbmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4IG10MCBwMTUgc2Jjd1wiPlxuICAgICAgICAgIDxUaGluZ3NUb0RvQ29udGFpbmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb24gPT09ICdJbmRpYScgP1xuICAgICAgICAgIG51bGwgOlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI4IG10MCBwMTUgc2Jjd1wiPlxuICAgICAgICAgICAgPEhvd1RvUmVhY2hDb250YWluZXIgey4uLnByb3BzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG5cbk92ZXJ2aWV3LnByb3BUeXBlcyA9IHtcbiAgY2l0eUJsb2NrOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBleGl0SW50ZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0ICcuL1N3aXBlci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzc3JBbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBpc1NtYWxsU3dpcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Z1bGxXaWR0aFN3aXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZE9uRG9jdW1lbnRSZWFkeTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVidWlsZE9uVXBkYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TG9hZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvdmVyZmxvdzogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNzckFuaW1hdGlvbjoge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGlzU21hbGxTd2lwZXI6IGZhbHNlLFxuICAgIGlzRnVsbFdpZHRoU3dpcGVyOiBmYWxzZSxcbiAgICBsb2FkT25Eb2N1bWVudFJlYWR5OiBmYWxzZSxcbiAgICBzaG93TG9hZGVyOiBmYWxzZSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfTtcbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzd2lwZXJBc3luYyA9ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3N3aXBlcicgKi8gXCJyZWFjdC1pZC1zd2lwZXJcIilcbiAgICAgICAgLnRoZW4ocyA9PiB0aGlzLnNldFN0YXRlKHsgUmVhY3RJZFN3aXBlcjogcy5kZWZhdWx0IH0pKTtcblxuICAgIC8vIGlmICh0aGlzLnByb3BzLmxvYWRPbkRvY3VtZW50UmVhZHkpIHtcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgPyBzd2lwZXJBc3luYygpIDogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzd2lwZXJBc3luYyk7XG4gICAgLy8gfVxuICB9XG5cbiAgcmVuZGVyU2VydmVyID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgY29uc3QgeyBvdmVyZmxvdyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZXMgPSB7IG92ZXJmbG93WDogJ3Njcm9sbCcsIHdpZHRoOiB3aWR0aCwgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17c3R5bGVzfT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfX2h0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cChjKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvPGltZyhbXFx3XFxXXSs/KVxcLz4vZywgYDxkaXYgc3R5bGU9XCJ3aWR0aDoke3dpZHRofXB4OyBoZWlnaHQ6ICR7aGVpZ2h0fXB4XCIgLz5gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGggPiAxID8gJ3N3aXBlckN1c3RvbVdpZHRoJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCd9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbGF6eWxvYWRpbmcnfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogX19odG1sIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckVtcHR5Q2xpZW50ID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDogJ3N3aXBlclNpbmdsZUNoaWxkJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBSZWFjdElkU3dpcGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaXNTbWFsbFN3aXBlciwgaXNGdWxsV2lkdGhTd2lwZXIsIHNzckFuaW1hdGlvbiwgc2hvd0xvYWRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChfX1NFUlZFUl9fKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJTZXJ2ZXIoc3NyQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIVJlYWN0SWRTd2lwZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVtcHR5Q2xpZW50KHNzckFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdElkU3dpcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgICAhaXNTbWFsbFN3aXBlciAmJiAhaXNGdWxsV2lkdGhTd2lwZXIpID9cbiAgICAgICAgICAgICAgICAnc3dpcGVyQ3VzdG9tV2lkdGggYmxvY2snIDogaXNTbWFsbFN3aXBlciAmJiAhaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgJ3NtYWxsU3dpcGVyQ29udGFpbmVyIGJsb2NrJyA6IGlzRnVsbFdpZHRoU3dpcGVyID9cbiAgICAgICAgICAgICAgICAgICAgJ3dmdWxsJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCB3ZnVsbCBibG9jayd9PlxuICAgICAgICAgICAgICAgIHtjfVxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGVyID8gPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItbGF6eS1wcmVsb2FkZXJcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdElkU3dpcGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN3aXBlci1wcmVsb2FkZXItc3BpblwiOiBcIl8zMzA4WVwiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=