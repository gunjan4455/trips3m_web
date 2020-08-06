require("source-map-support").install();
exports.ids = ["How-to-reach"];
exports.modules = {

/***/ "./app-v2/modules/cityBlock/ByRoute.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/cityBlock/ByRoute.js ***!
  \*********************************************/
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _ReadMoreByHeight = _interopRequireDefault(__webpack_require__(/*! modules/shared/ReadMoreByHeight */ "./app-v2/modules/shared/ReadMoreByHeight.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = new _htmlToReact.Parser();

const Icon = _glamorous.default.div({
  position: 'relative',
  left: '0',
  top: '0',
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px'
});

const ByRouteBox = _glamorous.default.div({
  paddingLeft: '35px',
  '&:last-child': {
    paddingBottom: '0'
  }
});

const GReachTypeGrpDiv = _glamorous.default.div({
  '& .reachTypeItem': {
    flexGrow: '1',
    marginBottom: '15px'
  },
  '& .reachTypeItem:last-child': {
    marginBottom: '0'
  },
  '& .reachTypeItemRadio': {
    display: 'none',
    '& + label + .reachTypeItemRadioData': {
      height: '0',
      margin: '0 !important'
    },
    '&:checked + label + .reachTypeItemRadioData': {
      height: 'auto'
    },
    '&:checked + label .arrowButton': {
      transform: 'rotate(180deg)'
    }
  }
});

const GArrowDownSpan = _glamorous.default.span({
  width: '30px',
  height: '30px',
  right: '10px',
  top: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  '& svg': {
    width: '10px !important',
    height: '10px !important'
  }
});

const IconMap = {
  'By Air': _react.default.createElement(_Icon.Flights, null),
  'By Road': _react.default.createElement(_Icon.TaxiCab, null),
  'By Train': _react.default.createElement(_Icon.Train, null),
  'By Sea': _react.default.createElement(_Icon.Ship, null)
};

const ByRoute = ({
  modes
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(GReachTypeGrpDiv, null, modes && modes.map((mode, i) => _react.default.createElement("div", {
  className: "reachTypeItem wfull",
  key: i
}, _react.default.createElement("input", {
  name: "reachTypeItems",
  defaultChecked: i === 0,
  id: `reachTypeItemRadio` + i,
  type: "checkbox",
  className: "reachTypeItemRadio"
}), _react.default.createElement("label", {
  htmlFor: `reachTypeItemRadio` + i,
  className: "relative flex alignCenter"
}, _react.default.createElement(Icon, null, IconMap[mode.name]), _react.default.createElement("h3", {
  className: "pfc3 f14 flexFull ml8 fw9 pt4"
}, mode.name), _react.default.createElement(GArrowDownSpan, {
  className: "ml8 flex alignCenter justifyCenter z2 arrowButton"
}, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement("div", {
  className: "reachTypeItemRadioData overflowh f14 mb15 dynamicTextInherit"
}, _react.default.createElement(_ReadMoreByHeight.default, {
  showTitle: false,
  content: mode.description
}))))));

ByRoute.propTypes = {
  modes: _propTypes.default.array.isRequired
};
var _default = ByRoute;
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

/***/ "./app-v2/modules/shared/ReadMoreByHeight.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/shared/ReadMoreByHeight.js ***!
  \***************************************************/
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

var _readMoreByHeightCm = _interopRequireDefault(__webpack_require__(/*! ./readMoreByHeight.cm.scss */ "./app-v2/modules/shared/readMoreByHeight.cm.scss"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();
let ReadMoreByHeight = class ReadMoreByHeight extends _react.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const {
      maxHeight,
      content,
      heading,
      showTitle,
      hotelDisplayName
    } = this.props;
    const {
      expanded
    } = this.state;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", null, showTitle ? _react.default.createElement("h2", {
      className: "f16 pb0 m0 fwb mb15"
    }, heading, " ", hotelDisplayName ? `at ${hotelDisplayName}` : null) : null, _react.default.createElement("div", {
      style: {
        'maxHeight': expanded ? 'none' : maxHeight
      },
      className: `${_readMoreByHeightCm.default.data} block relative pt8 ${expanded ? _readMoreByHeightCm.default.expanded : ''}`
    }, _react.default.createElement("span", {
      className: "block dynamicTextInherit pfc3 f14p"
    }, parser.parse(content))), _react.default.createElement("button", {
      className: `${_readMoreByHeightCm.default.readMore} cursorP flex alignCenter spaceBetween mt8 f12 fw9 `,
      onClick: this.handleSubmit
    }, _react.default.createElement("span", {
      className: "flexFull block mr5"
    }, expanded ? 'Read Less' : 'Read More'), _react.default.createElement("span", {
      className: `${_readMoreByHeightCm.default.downArrow} relative block ${expanded ? 'rotate180' : 'rotate0'}`
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))));
  }

};
ReadMoreByHeight.propTypes = {
  content: _propTypes.default.string.isRequired,
  maxHeight: _propTypes.default.number,
  heading: _propTypes.default.string,
  showTitle: _propTypes.default.bool,
  hotelDisplayName: _propTypes.default.string
};
ReadMoreByHeight.defaultProps = {
  maxHeight: 83,
  showTitle: true
};
var _default = ReadMoreByHeight;
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

/***/ "./app-v2/modules/shared/readMoreByHeight.cm.scss":
/*!********************************************************!*\
  !*** ./app-v2/modules/shared/readMoreByHeight.cm.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"data": "QIRDlkQ22V9ik1SNbEix0",
	"expanded": "_2HpisVUP6Ee1MRvkpsOGMo",
	"readMore": "_3lZvNrNnKv3cVx92srnjCq",
	"downArrow": "_3f6qD338CPW2Ej-fAsXY1J"
};

/***/ }),

/***/ "./app-v2/screens/cityBlock/howToReach/HowToReach.js":
/*!***********************************************************!*\
  !*** ./app-v2/screens/cityBlock/howToReach/HowToReach.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Guide = _interopRequireDefault(__webpack_require__(/*! modules/shared/Guide */ "./app-v2/modules/shared/Guide.js"));

var _ByRoute = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/ByRoute */ "./app-v2/modules/cityBlock/ByRoute.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const GHowToReachDiv = _glamorous.default.div({
  border: '1px solid #d4d4d4',
  margin: '0 auto',
  textAlign: 'left'
});

const SrcToDestList = _glamorous.default.ul({
  margin: '0',
  padding: '4px 0 0 0',
  overflow: 'hidden',
  '& li': {
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '24px',
    padding: '3px 15px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0'
  }
});

const GHowToIconDiv = _glamorous.default.div({
  minWidth: '24px',
  maxWidth: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute'
  }
});

const HowToReach = ({
  data,
  location,
  params,
  exitIntent
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("meta", {
  charSet: "utf-8"
}), _react.default.createElement("title", null, "How To Reach ", (0, _parsers.capitalizeAndReplaceDash)(params), " | How To Reach", " ", params.destination, " By Air, Road, Train"), _react.default.createElement("link", {
  rel: "canonical",
  href: `https://traveltriangle.com${location.pathname}`
})), _react.default.createElement("div", {
  className: "m8 sbcw mt0"
}, _react.default.createElement(_Guide.default, {
  guide: {
    title: data.title,
    heading: data.heading,
    description: data.description
  }
}), exitIntent, data.distance && data.distance.length ? _react.default.createElement("div", {
  className: "clearfix p15 pt0"
}, _react.default.createElement(SrcToDestList, null, data.distance && data.distance.map((place, i) => _react.default.createElement("li", {
  key: i
}, _react.default.createElement("h4", null, _react.default.createElement(_reactRouter.Link, {
  to: place.link
}, place.from)))))) : null), data && (data.transportModes && data.transportModes.length || data.distance && data.distance.length) ? _react.default.createElement("div", {
  className: "m8 mt0 sbcw p15"
}, _react.default.createElement("div", {
  className: "mb15"
}, _react.default.createElement(_ByRoute.default, {
  modes: data.transportModes
})), _react.default.createElement(_Swiper.default, {
  id: "howtoreachSwiper",
  spaceBetween: 15,
  slidesPerView: "auto",
  ssrAnimation: {
    width: 280,
    height: 105
  },
  rebuildOnUpdate: true
}, data.distance.map((row, i) => _react.default.createElement(GHowToReachDiv, {
  key: i,
  className: "radius2 p15"
}, row.from ? _react.default.createElement("div", {
  className: "flex mb8 alignCenter"
}, _react.default.createElement(GHowToIconDiv, {
  className: "relative mr8 flex alignCenter justifyCenter"
}, _react.default.createElement(_Icon.AllTrips, null)), _react.default.createElement(_reactRouter.Link, {
  to: row.link,
  className: "fw7 f14"
}, row.from)) : null, row.distance ? _react.default.createElement("div", {
  className: "pfc1 fw9 mb8 f24"
}, row.distance) : null, _react.default.createElement("div", {
  className: "flex spaceBetween"
}, _react.default.createElement("div", {
  className: "f14"
}, _react.default.createElement("p", {
  className: "fw9 mb5"
}, "By Air"), row.byair || "-"), _react.default.createElement("div", {
  className: "f14"
}, _react.default.createElement("p", {
  className: "fw9 mb5"
}, "By Road"), row.byroad || "-"), _react.default.createElement("div", {
  className: "f14"
}, _react.default.createElement("p", {
  className: "fw9 mb5"
}, "By Train"), row.bytrain || "-"), row.bysea ? _react.default.createElement("div", {
  className: "f14"
}, _react.default.createElement("p", {
  className: "fw9 mb5"
}, "By Sea"), row.bysea) : null))))) : null);

var _default = HowToReach;
exports.default = _default;
HowToReach.propTypes = {
  data: _propTypes.default.object.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svQnlSb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvR3VpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL092ZXJ2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9SZWFkTW9yZUJ5SGVpZ2h0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9TaG93TW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvcmVhZE1vcmVCeUhlaWdodC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2NpdHlCbG9jay9ob3dUb1JlYWNoL0hvd1RvUmVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyLnNjc3MiXSwibmFtZXMiOlsicGFyc2VyIiwiUGFyc2VyIiwiSWNvbiIsImdsYW1vcm91cyIsImRpdiIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJCeVJvdXRlQm94IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIiwiR1JlYWNoVHlwZUdycERpdiIsImZsZXhHcm93IiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsIm1hcmdpbiIsInRyYW5zZm9ybSIsIkdBcnJvd0Rvd25TcGFuIiwic3BhbiIsIndpZHRoIiwicmlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbSIsIkljb25NYXAiLCJCeVJvdXRlIiwibW9kZXMiLCJtYXAiLCJtb2RlIiwiaSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIlNob3dNb3JlQ29udGFpbmVyIiwibWFyZ2luVG9wIiwiR3VpZGUiLCJndWlkZSIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIlN1YkhlYWRpbmciLCJwIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJIZWFkaW5nIiwiZGF0YSIsInRpdGxlIiwiaGVhZGluZyIsInN0eWxlSGVhZGluZyIsInN0eWxlU3ViSGVhZGluZyIsInR5cGUiLCJpc1ZpZXdBbGxIaWRkZW4iLCJmb3JIZWFkaW5nIiwic3RyaW5nIiwiYm9vbCIsIm92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlIiwib3ZlcnZpZXdNb3JlVGV4dCIsInJlcGxhY2UiLCJlcnIiLCJPdmVydmlldyIsIlB1cmVDb21wb25lbnQiLCJvdmVydmlld0NvbnRlbnQiLCJmb290ZXJEZXNjcmlwdGlvbiIsInByb3BzIiwiZGVzYyIsInNwbGl0IiwiZmlsdGVyIiwibGVuZ3RoIiwiZm9vdGVyRGVzYyIsInBhcnNlIiwic2xpY2UiLCJqb2luIiwiY29uY2F0IiwicmVuZGVyIiwiUmVhZE1vcmVCeUhlaWdodCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJleHBhbmRlZCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJzZXRTdGF0ZSIsIm1heEhlaWdodCIsImNvbnRlbnQiLCJzaG93VGl0bGUiLCJob3RlbERpc3BsYXlOYW1lIiwic3R5bGVzIiwicmVhZE1vcmUiLCJkb3duQXJyb3ciLCJudW1iZXIiLCJHcmVhZG1vcmVMYWJlbCIsImxhYmVsIiwicGFkZGluZyIsIkdEb3duQXJyb3dTcGFuIiwiU2hvd01vcmUiLCJSZWFjdCIsImNoZWNrZWQiLCJkZWZhdWx0T3BlbiIsImhhbmRsZUNoYW5nZSIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJhY2tTZWdtZW50IiwiY3RhIiwidGV4dExlbmd0aCIsImlzRGVmYXVsdFNob3dNb3JlIiwiYXBwZW5kVGV4dCIsIndyYXBUZXh0IiwibW9yZVRleHQiLCJzaG93TGVzc1RleHQiLCJzaG93TW9yZVRleHQiLCJvbmVPZlR5cGUiLCJmdW5jIiwiVWwiLCJ1bCIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsIkdIb3dUb1JlYWNoRGl2IiwiYm9yZGVyIiwidGV4dEFsaWduIiwiU3JjVG9EZXN0TGlzdCIsIm92ZXJmbG93IiwiYm9yZGVyUmFkaXVzIiwibGlzdFN0eWxlIiwiR0hvd1RvSWNvbkRpdiIsIkhvd1RvUmVhY2giLCJsb2NhdGlvbiIsInBhcmFtcyIsImV4aXRJbnRlbnQiLCJkZXN0aW5hdGlvbiIsInBhdGhuYW1lIiwiZGlzdGFuY2UiLCJwbGFjZSIsImxpbmsiLCJmcm9tIiwidHJhbnNwb3J0TW9kZXMiLCJyb3ciLCJieWFpciIsImJ5cm9hZCIsImJ5dHJhaW4iLCJieXNlYSIsIlN3aXBlciIsInJlbmRlclNlcnZlciIsIm92ZXJmbG93WCIsImNoaWxkcmVuIiwiYyIsIl9faHRtbCIsIlJlYWN0RE9NIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJyZW5kZXJFbXB0eUNsaWVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic3dpcGVyQXN5bmMiLCJ0aGVuIiwicyIsIlJlYWN0SWRTd2lwZXIiLCJkZWZhdWx0IiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzU21hbGxTd2lwZXIiLCJpc0Z1bGxXaWR0aFN3aXBlciIsInNzckFuaW1hdGlvbiIsInNob3dMb2FkZXIiLCJfX1NFUlZFUl9fIiwibG9hZE9uRG9jdW1lbnRSZWFkeSIsInJlYnVpbGRPblVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOzs7O0FBSkEsTUFBTUEsU0FBUyxJQUFJQyxtQkFBSixFQUFmOztBQU1BLE1BQU1DLE9BQU9DLG1CQUFVQyxHQUFWLENBQWM7QUFDekJDLFlBQVUsVUFEZTtBQUV6QkMsUUFBTSxHQUZtQjtBQUd6QkMsT0FBSyxHQUhvQjtBQUl6QkMsWUFBVSxNQUplO0FBS3pCQyxZQUFVLE1BTGU7QUFNekJDLFVBQVE7QUFOaUIsQ0FBZCxDQUFiOztBQVNBLE1BQU1DLGFBQWFSLG1CQUFVQyxHQUFWLENBQWM7QUFDL0JRLGVBQWEsTUFEa0I7QUFFL0Isa0JBQWdCO0FBQ2RDLG1CQUFlO0FBREQ7QUFGZSxDQUFkLENBQW5COztBQU9BLE1BQU1DLG1CQUFtQlgsbUJBQVVDLEdBQVYsQ0FBYztBQUNyQyxzQkFBb0I7QUFDbEJXLGNBQVUsR0FEUTtBQUVsQkMsa0JBQWM7QUFGSSxHQURpQjtBQUtyQyxpQ0FBK0I7QUFDN0JBLGtCQUFjO0FBRGUsR0FMTTtBQVFyQywyQkFBeUI7QUFDdkJDLGFBQVMsTUFEYztBQUV2QiwyQ0FBdUM7QUFDckNQLGNBQVEsR0FENkI7QUFFckNRLGNBQVE7QUFGNkIsS0FGaEI7QUFNdkIsbURBQStDO0FBQzdDUixjQUFRO0FBRHFDLEtBTnhCO0FBU3ZCLHNDQUFrQztBQUNoQ1MsaUJBQVc7QUFEcUI7QUFUWDtBQVJZLENBQWQsQ0FBekI7O0FBdUJBLE1BQU1DLGlCQUFpQmpCLG1CQUFVa0IsSUFBVixDQUFlO0FBQ3BDQyxTQUFPLE1BRDZCO0FBRXBDWixVQUFRLE1BRjRCO0FBR3BDYSxTQUFPLE1BSDZCO0FBSXBDaEIsT0FBSyxNQUorQjtBQUtwQ1UsV0FBUyxNQUwyQjtBQU1wQ08sa0JBQWdCLFFBTm9CO0FBT3BDQyxhQUFXLFFBUHlCO0FBUXBDLFdBQVM7QUFDUEgsV0FBTyxpQkFEQTtBQUVQWixZQUFRO0FBRkQ7QUFSMkIsQ0FBZixDQUF2Qjs7QUFjQSxNQUFNZ0IsVUFBVTtBQUNkLFlBQVUsNkJBQUMsYUFBRCxPQURJO0FBRWQsYUFBVyw2QkFBQyxhQUFELE9BRkc7QUFHZCxjQUFZLDZCQUFDLFdBQUQsT0FIRTtBQUlkLFlBQVUsNkJBQUMsVUFBRDtBQUpJLENBQWhCOztBQU9BLE1BQU1DLFVBQVUsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDZDtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGdCQUFELFFBQ0lBLFNBQVNBLE1BQU1DLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU1DLENBQU4sS0FDbkI7QUFBSyxhQUFVLHFCQUFmO0FBQXFDLE9BQUtBO0FBQTFDLEdBQ0U7QUFBTyxRQUFLLGdCQUFaO0FBQTZCLGtCQUFnQkEsTUFBTSxDQUFuRDtBQUFzRCxNQUFLLG9CQUFELEdBQXVCQSxDQUFqRjtBQUFvRixRQUFLLFVBQXpGO0FBQW9HLGFBQVU7QUFBOUcsRUFERixFQUVFO0FBQU8sV0FBVSxvQkFBRCxHQUF1QkEsQ0FBdkM7QUFBMEMsYUFBVTtBQUFwRCxHQUNFLDZCQUFDLElBQUQsUUFBT0wsUUFBUUksS0FBS0UsSUFBYixDQUFQLENBREYsRUFFRTtBQUFJLGFBQVU7QUFBZCxHQUErQ0YsS0FBS0UsSUFBcEQsQ0FGRixFQUdFLDZCQUFDLGNBQUQ7QUFDTSxhQUFVO0FBRGhCLEdBQ29FLDZCQUFDLGVBQUQsT0FEcEUsQ0FIRixDQUZGLEVBUUU7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyx5QkFBRDtBQUFrQixhQUFXLEtBQTdCO0FBQW9DLFdBQVNGLEtBQUtHO0FBQWxELEVBREYsQ0FSRixDQURTLENBRGIsQ0FERixDQURGOztBQXFCQU4sUUFBUU8sU0FBUixHQUFvQjtBQUNsQk4sU0FBUU8sbUJBQVVDLEtBQVYsQ0FBZ0JDO0FBRE4sQ0FBcEI7ZUFJZVYsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RmY7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1XLG9CQUFvQm5DLG1CQUFVQyxHQUFWLENBQWM7QUFDdENtQyxhQUFXO0FBRDJCLENBQWQsQ0FBMUI7O0FBSUEsTUFBTUMsUUFBUSxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQzNCLFNBQ0U7QUFBSyxlQUFVO0FBQWYsS0FDRSw2QkFBQyxnQkFBRCxlQUFhQSxLQUFiO0FBQW9CLFVBQUs7QUFBekIsS0FERixFQUVFLDZCQUFDLGlCQUFELEVBQWNBLEtBQWQsQ0FGRixDQURGO0FBTUQsQ0FQRDs7QUFTQUQsTUFBTU4sU0FBTixHQUFrQjtBQUNoQk8sU0FBT04sbUJBQVVPO0FBREQsQ0FBbEI7QUFJQUYsTUFBTUcsWUFBTixHQUFxQjtBQUNuQkYsU0FBTztBQURZLENBQXJCO2VBSWVELEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJmOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUksYUFBYXpDLG1CQUFVMEMsQ0FBVixDQUFZO0FBQzdCQyxZQUFVLE1BRG1CO0FBRTdCQyxjQUFZLE1BRmlCO0FBRzdCQyxTQUFPLFNBSHNCO0FBSTdCOUIsVUFBUTtBQUpxQixDQUFaLENBQW5COztBQU9BLE1BQU0rQixVQUFVLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDLFNBQWY7QUFBd0JDLGNBQXhCO0FBQXNDQyxpQkFBdEM7QUFBdURDLE1BQXZEO0FBQTZEQztBQUE3RCxDQUFELEtBQW9GO0FBQ2xHLFNBQ0U7QUFBSyxlQUFVO0FBQWYsS0FFSUQsU0FBUyxjQUFULEdBQ0U7QUFBSSxXQUFPRixZQUFYO0FBQ0ksZUFBWSxHQUFFRyxrQkFBa0IsTUFBbEIsR0FBMkIsT0FBUTtBQURyRCxLQUN5RU4sS0FBS0MsS0FBTCxJQUFjQSxLQUR2RixFQUM4RkQsS0FBS08sVUFBTCxHQUFtQixRQUFPUCxLQUFLTyxVQUFXLEVBQTFDLEdBQThDLElBRDVJLENBREYsR0FHSTtBQUFJLFdBQU9KLFlBQVg7QUFDSSxlQUFZLEdBQUVHLGtCQUFrQixNQUFsQixHQUEyQixPQUFRO0FBRHJELEtBQ3lFTixLQUFLQyxLQUFMLElBQWNBLEtBRHZGLEVBQzhGRCxLQUFLTyxVQUFMLEdBQW1CLFFBQU9QLEtBQUtPLFVBQVcsRUFBMUMsR0FBOEMsSUFENUksQ0FMUixFQVFHUCxLQUFLRSxPQUFMLElBQWdCQSxPQUFoQixHQUNDLDZCQUFDLFVBQUQ7QUFBWSxXQUFPRSxlQUFuQjtBQUFvQyxlQUFVO0FBQTlDLEtBQTZESixLQUFLRSxPQUFMLElBQWdCQSxPQUE3RSxDQURELEdBRUMsSUFWSixDQURGO0FBZUQsQ0FoQkQ7O0FBa0JBSCxRQUFRZixTQUFSLEdBQW9CO0FBQ2xCZ0IsUUFBTWYsbUJBQVVPLE1BREU7QUFFbEJhLFFBQU1wQixtQkFBVXVCLE1BRkU7QUFHbEJQLFNBQU9oQixtQkFBVXVCLE1BSEM7QUFJbEJOLFdBQVNqQixtQkFBVXVCLE1BSkQ7QUFLbEJMLGdCQUFjbEIsbUJBQVVPLE1BTE47QUFNbEJZLG1CQUFpQm5CLG1CQUFVTyxNQU5UO0FBT2xCYyxtQkFBaUJyQixtQkFBVXdCO0FBUFQsQ0FBcEI7QUFVQVYsUUFBUU4sWUFBUixHQUF1QjtBQUNyQk8sUUFBTSxFQURlO0FBRXJCSyxRQUFNLEVBRmU7QUFHckJKLFNBQU8sRUFIYztBQUlyQkMsV0FBUyxFQUpZO0FBS3JCQyxnQkFBYyxFQUxPO0FBTXJCQyxtQkFBaUIsRUFOSTtBQU9yQkUsbUJBQWlCO0FBUEksQ0FBdkI7ZUFVZVAsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGY7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLE1BQU1qRCxTQUFTLElBQUlDLG1CQUFKLEVBQWY7O0FBRUEsTUFBTTJELDZCQUE4QkMsZ0JBQUQsSUFBc0I7QUFDdkQsTUFBSTtBQUNGLFdBQU9BLGlCQUFpQkMsT0FBakIsQ0FBeUIsaUJBQXpCLEVBQTRDLEVBQTVDLEVBQWdEQSxPQUFoRCxDQUF3RCxpQkFBeEQsRUFBMkUsRUFBM0UsQ0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixXQUFPRixnQkFBUDtBQUNEO0FBQ0YsQ0FORDs7SUFRTUcsUSxHQUFOLE1BQU1BLFFBQU4sU0FBdUJDLG9CQUF2QixDQUFxQztBQUFBO0FBQUE7O0FBQUEsd0NBQ25DQyxlQURtQyxHQUNqQixNQUFNO0FBQ3RCLFlBQU07QUFBRWpDLG1CQUFGO0FBQWVrQztBQUFmLFVBQXFDLEtBQUtDLEtBQWhEO0FBQ0EsWUFBTUMsT0FBT3BDLGVBQWVBLFlBQVlxQyxLQUFaLENBQWtCLE1BQWxCLEVBQTBCQyxNQUExQixDQUFpQzFCLEtBQUtBLEVBQUUyQixNQUF4QyxDQUFmLElBQWtFLEVBQS9FOztBQUVBLFVBQUksQ0FBQ0gsS0FBS0csTUFBVixFQUFrQjtBQUNoQixlQUFPLElBQVA7QUFDRDs7QUFFRCxZQUFNQyxhQUFhTixvQkFBcUIsT0FBTUEsaUJBQWtCLEVBQTdDLEdBQWlELEVBQXBFO0FBRUEsYUFDRSw2QkFBQyxpQkFBRDtBQUNFLGtCQUFVbkUsT0FBTzBFLEtBQVAsQ0FBYUwsS0FBSyxDQUFMLENBQWIsQ0FEWjtBQUVFLGtCQUFVckUsT0FBTzBFLEtBQVAsQ0FBYWQsMkJBQTJCUyxLQUFLTSxLQUFMLENBQVcsQ0FBWCxFQUFjQyxJQUFkLENBQW1CLElBQW5CLEVBQXlCQyxNQUF6QixDQUFnQ0osVUFBaEMsQ0FBM0IsQ0FBYjtBQUZaLFFBREY7QUFNRCxLQWpCa0M7QUFBQTs7QUFtQm5DSyxXQUFTO0FBQ1AsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRyxLQUFLWixlQUFMLEVBREgsQ0FERixDQURGO0FBT0Q7O0FBM0JrQyxDO0FBOEJyQ0YsU0FBU3JCLFlBQVQsR0FBd0I7QUFDdEJ3QixxQkFBbUIsRUFERztBQUV0QmxDLGVBQWE7QUFGUyxDQUF4QjtBQUtBK0IsU0FBUzlCLFNBQVQsR0FBcUI7QUFDbkJELGVBQWFFLG1CQUFVdUIsTUFESjtBQUVuQlMscUJBQW1CaEMsbUJBQVV1QjtBQUZWLENBQXJCO2VBS2VNLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERmOztBQUNBOztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFGQSxNQUFNaEUsU0FBUyxJQUFJQyxtQkFBSixFQUFmO0lBTU04RSxnQixHQUFOLE1BQU1BLGdCQUFOLFNBQStCQyxnQkFBL0IsQ0FBeUM7QUFDdkNDLGdCQUFjO0FBQ1o7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsZ0JBQVU7QUFBWixLQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUVERCxpQkFBYztBQUNaLFNBQUtFLFFBQUwsQ0FBYztBQUFFSCxnQkFBVSxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFBeEIsS0FBZDtBQUNEOztBQUVETCxXQUFRO0FBQ04sVUFBTTtBQUFFUyxlQUFGO0FBQWFDLGFBQWI7QUFBc0JwQyxhQUF0QjtBQUErQnFDLGVBQS9CO0FBQTBDQztBQUExQyxRQUErRCxLQUFLdEIsS0FBMUU7QUFDQSxVQUFNO0FBQUVlO0FBQUYsUUFBZSxLQUFLRCxLQUExQjtBQUNBLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsMENBRUlPLFlBQ0U7QUFBSSxpQkFBVTtBQUFkLE9BQXFDckMsT0FBckMsT0FBZ0RzQyxtQkFBb0IsTUFBS0EsZ0JBQWlCLEVBQTFDLEdBQThDLElBQTlGLENBREYsR0FDNkcsSUFIakgsRUFLRTtBQUFLLGFBQU87QUFBRSxxQkFBYVAsV0FBVyxNQUFYLEdBQW9CSTtBQUFuQyxPQUFaO0FBQ0ssaUJBQWEsR0FBRUksNEJBQU96QyxJQUFLLHVCQUFzQmlDLFdBQVdRLDRCQUFPUixRQUFsQixHQUE2QixFQUFHO0FBRHRGLE9BRUU7QUFBTSxpQkFBVTtBQUFoQixPQUNHbkYsT0FBTzBFLEtBQVAsQ0FBYWMsT0FBYixDQURILENBRkYsQ0FMRixFQVdFO0FBQVEsaUJBQVksR0FBRUcsNEJBQU9DLFFBQVMscURBQXRDO0FBQTRGLGVBQVMsS0FBS1I7QUFBMUcsT0FDRTtBQUFNLGlCQUFVO0FBQWhCLE9BQXVDRCxXQUFXLFdBQVgsR0FBeUIsV0FBaEUsQ0FERixFQUVFO0FBQU0saUJBQVksR0FBRVEsNEJBQU9FLFNBQVUsbUJBQWtCVixXQUFXLFdBQVgsR0FBeUIsU0FBVTtBQUExRixPQUE2Riw2QkFBQyxtQkFBRCxPQUE3RixDQUZGLENBWEYsQ0FERixDQURGO0FBb0JEOztBQWxDc0MsQztBQXFDekNKLGlCQUFpQjdDLFNBQWpCLEdBQTZCO0FBQzNCc0QsV0FBU3JELG1CQUFVdUIsTUFBVixDQUFpQnJCLFVBREM7QUFFM0JrRCxhQUFXcEQsbUJBQVUyRCxNQUZNO0FBRzNCMUMsV0FBU2pCLG1CQUFVdUIsTUFIUTtBQUkzQitCLGFBQVd0RCxtQkFBVXdCLElBSk07QUFLM0IrQixvQkFBa0J2RCxtQkFBVXVCO0FBTEQsQ0FBN0I7QUFRQXFCLGlCQUFpQnBDLFlBQWpCLEdBQWdDO0FBQzlCNEMsYUFBVyxFQURtQjtBQUU5QkUsYUFBVztBQUZtQixDQUFoQztlQUtlVixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxNQUFNZ0IsaUJBQWlCNUYsbUJBQVU2RixLQUFWLENBQWdCO0FBQ3JDLCtCQUE2QjtBQUMzQmpELGdCQUFZLE1BRGU7QUFFM0JrRCxhQUFTO0FBRmtCO0FBRFEsQ0FBaEIsQ0FBdkI7O0FBT0EsTUFBTUMsaUJBQWlCL0YsbUJBQVVrQixJQUFWLENBQWU7QUFDcENDLFNBQU8sTUFENkI7QUFFcENaLFVBQVEsS0FGNEI7QUFHcEMsV0FBUztBQUNQWSxXQUFPLE1BREE7QUFFUFosWUFBUSxLQUZEO0FBR1BILFNBQUs7QUFIRTtBQUgyQixDQUFmLENBQXZCOztJQVVNNEYsUSxHQUFOLE1BQU1BLFFBQU4sU0FBdUJDLGVBQU1wQixTQUE3QixDQUF1QztBQUNyQ0MsY0FBWWIsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS2MsS0FBTCxHQUFhO0FBQ1htQixlQUFTakMsTUFBTWtDO0FBREosS0FBYjtBQUdBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQmxCLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0Q7O0FBRURtQixtQ0FBaUNDLFNBQWpDLEVBQTRDO0FBQzFDLFNBQUtuQixRQUFMLENBQWM7QUFDWmUsZUFBUztBQURHLEtBQWQ7QUFHRDs7QUFFREUsZUFBYUcsQ0FBYixFQUFnQjtBQUNkQSxNQUFFQyxjQUFGO0FBRUEsU0FBS3JCLFFBQUwsQ0FBYztBQUNaZSxlQUFTLENBQUMsS0FBS25CLEtBQUwsQ0FBV21CO0FBRFQsS0FBZCxFQUVHLE1BQU07QUFDUCxXQUFLbkIsS0FBTCxDQUFXbUIsT0FBWCxJQUFzQixLQUFLakMsS0FBTCxDQUFXd0MsWUFBWCxDQUF3QjtBQUFFQyxhQUFLO0FBQVAsT0FBeEIsQ0FBdEI7QUFDRCxLQUpEO0FBS0Q7O0FBRUQvQixXQUFTO0FBQ1AsVUFBTWdDLGFBQWEsR0FBbkI7QUFDQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQU8sWUFBSyxVQUFaO0FBQXVCLGlCQUFVLGlCQUFqQztBQUFtRCxlQUFTLEtBQUs1QixLQUFMLENBQVdtQixPQUF2RTtBQUFnRixVQUFHO0FBQW5GLE1BREYsRUFFRTtBQUNFLGlCQUFZLGtCQUFpQixLQUFLakMsS0FBTCxDQUFXMkMsaUJBQVgsR0FBK0IsK0NBQS9CLEdBQWlGLEVBQUc7QUFEbkgsT0FHSztBQUNELEtBQUMsS0FBSzdCLEtBQUwsQ0FBV21CLE9BQVosSUFBdUIsS0FBS2pDLEtBQUwsQ0FBVzRDLFVBQWxDLElBQWdELEtBQUs1QyxLQUFMLENBQVc2QyxRQUFYLENBQW9CekMsTUFBcEIsSUFBOEJzQyxVQUE5RSxHQUNJLEtBQUsxQyxLQUFMLENBQVc2QyxRQUFYLEdBQXNCLEtBQUs3QyxLQUFMLENBQVc0QyxVQURyQyxHQUVJLEtBQUs1QyxLQUFMLENBQVc2QyxRQU5uQixFQVFFO0FBQU0saUJBQVU7QUFBaEIsT0FDRyxLQUFLN0MsS0FBTCxDQUFXOEMsUUFEZCxDQVJGLENBRkYsRUFlSSxLQUFLOUMsS0FBTCxDQUFXOEMsUUFBWCxDQUFvQjFDLE1BQXBCLEdBQTZCLENBQTdCLElBQWtDLENBQUMsdUJBQVMsS0FBS0osS0FBTCxDQUFXOEMsUUFBcEIsQ0FBbkMsR0FDRSw2QkFBQyxjQUFEO0FBQWdCLGVBQVEsUUFBeEI7QUFBaUMsaUJBQVU7QUFBM0MsT0FDRTtBQUFRLGlCQUFVLGlFQUFsQjtBQUNRLGVBQVMsS0FBS1g7QUFEdEIsT0FFRTtBQUFNLGlCQUFVO0FBQWhCLE9BQ0ksS0FBS3JCLEtBQUwsQ0FBV21CLE9BQVosR0FBdUIsS0FBS2pDLEtBQUwsQ0FBVytDLFlBQWxDLEdBQWlELEtBQUsvQyxLQUFMLENBQVdnRCxZQUQvRCxFQUVHLEtBQUtsQyxLQUFMLENBQVdtQixPQUZkLENBRkYsRUFNRSw2QkFBQyxjQUFEO0FBQ0UsaUJBQVU7QUFEWixPQUMwRCw2QkFBQyxtQkFBRCxPQUQxRCxDQU5GLENBREYsQ0FERixHQVlJLEVBM0JSLENBREY7QUFnQ0Q7O0FBM0RvQyxDO0FBOER2Q0YsU0FBU2pFLFNBQVQsR0FBcUI7QUFDbkIrRSxZQUFVOUUsbUJBQVVrRixTQUFWLENBQW9CLENBQzVCbEYsbUJBQVVDLEtBRGtCLEVBRTVCRCxtQkFBVXVCLE1BRmtCLEVBRzVCdkIsbUJBQVVPLE1BSGtCLENBQXBCLEVBSVBMLFVBTGdCO0FBTW5CNkUsWUFBVS9FLG1CQUFVa0YsU0FBVixDQUFvQixDQUM1QmxGLG1CQUFVQyxLQURrQixFQUU1QkQsbUJBQVV1QixNQUZrQixFQUc1QnZCLG1CQUFVTyxNQUhrQixDQUFwQixDQU5TO0FBV25CMEUsZ0JBQWNqRixtQkFBVXVCLE1BWEw7QUFZbkJ5RCxnQkFBY2hGLG1CQUFVdUIsTUFaTDtBQWFuQjRDLGVBQWFuRSxtQkFBVXdCLElBYko7QUFjbkJvRCxxQkFBbUI1RSxtQkFBVXdCLElBZFY7QUFlbkJpRCxnQkFBY3pFLG1CQUFVbUYsSUFmTDtBQWdCbkJOLGNBQVk3RSxtQkFBVXVCO0FBaEJILENBQXJCO0FBb0JBeUMsU0FBU3hELFlBQVQsR0FBd0I7QUFDdEJzRSxZQUFVLEVBRFk7QUFFdEJDLFlBQVUsRUFGWTtBQUd0QkUsZ0JBQWMsV0FIUTtBQUl0QkQsZ0JBQWMsV0FKUTtBQUt0QmIsZUFBYSxLQUxTO0FBTXRCUyxxQkFBbUIsSUFORztBQU90QkgsZ0JBQWMsTUFBTSxDQUNuQjtBQVJxQixDQUF4QjtlQVdlVCxROzs7Ozs7Ozs7Ozs7QUN0SGY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1vQixLQUFLcEgsbUJBQVVxSCxFQUFWLENBQWE7QUFDdEJ2QixXQUFTLEdBRGE7QUFFdEIvRSxVQUFRLEdBRmM7QUFHdEJELFdBQVMsTUFIYTtBQUl0QndHLGNBQVksWUFKVTtBQUt0QixVQUFRO0FBQ052RyxZQUFRLFlBREY7QUFFTkgsY0FBVSxHQUZKO0FBR05ILGlCQUFhLEtBSFA7QUFJTlAsY0FBVSxVQUpKO0FBS04sb0JBQWdCO0FBQ2RxSCxtQkFBYTtBQURDO0FBTFY7QUFMYyxDQUFiLENBQVg7O0FBZUEsTUFBTXhILE9BQU9DLG1CQUFVa0IsSUFBVixDQUFlO0FBQzFCQyxTQUFPLE1BRG1CO0FBRTFCWixVQUFRLE1BRmtCO0FBRzFCLFdBQVM7QUFDUFksV0FBTyxNQURBO0FBRVBaLFlBQVE7QUFGRDtBQUhpQixDQUFmLENBQWI7O0FBU0EsTUFBTWlILGlCQUFpQnhILG1CQUFVQyxHQUFWLENBQWM7QUFDbkN3SCxVQUFRLG1CQUQyQjtBQUVuQzFHLFVBQVEsUUFGMkI7QUFHbkMyRyxhQUFXO0FBSHdCLENBQWQsQ0FBdkI7O0FBS0EsTUFBTUMsZ0JBQWdCM0gsbUJBQVVxSCxFQUFWLENBQWE7QUFDakN0RyxVQUFRLEdBRHlCO0FBRWpDK0UsV0FBUyxXQUZ3QjtBQUdqQzhCLFlBQVUsUUFIdUI7QUFJakMsVUFBUTtBQUNOakYsY0FBVSxNQURKO0FBRU5DLGdCQUFZLE1BRk47QUFHTmlGLGtCQUFjLE1BSFI7QUFJTi9CLGFBQVMsVUFKSDtBQUtOaEYsYUFBUyxjQUxIO0FBTU5nSCxlQUFXLE1BTkw7QUFPTkwsWUFBUSxtQkFQRjtBQVFOMUcsWUFBUTtBQVJGO0FBSnlCLENBQWIsQ0FBdEI7O0FBZ0JBLE1BQU1nSCxnQkFBZ0IvSCxtQkFBVUMsR0FBVixDQUFjO0FBQ2xDSSxZQUFVLE1BRHdCO0FBRWxDQyxZQUFVLE1BRndCO0FBR2xDQyxVQUFRLE1BSDBCO0FBSWxDLFdBQVM7QUFDUEwsY0FBVTtBQURIO0FBSnlCLENBQWQsQ0FBdEI7O0FBU0EsTUFBTThILGFBQWEsQ0FBQztBQUFFakYsTUFBRjtBQUFRa0YsVUFBUjtBQUFrQkMsUUFBbEI7QUFBMEJDO0FBQTFCLENBQUQsS0FDakI7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxtQkFBRCxRQUNFO0FBQU0sV0FBUTtBQUFkLEVBREYsRUFFRSw2REFDZ0IsdUNBQXlCRCxNQUF6QixDQURoQixxQkFDaUUsR0FEakUsRUFFR0EsT0FBT0UsV0FGVix5QkFGRixFQU1FO0FBQ0UsT0FBSSxXQUROO0FBRUUsUUFBTyw2QkFBNEJILFNBQVNJLFFBQVM7QUFGdkQsRUFORixDQURGLEVBWUU7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxjQUFEO0FBQ0UsU0FBTztBQUNMckYsV0FBT0QsS0FBS0MsS0FEUDtBQUVMQyxhQUFTRixLQUFLRSxPQUZUO0FBR0xuQixpQkFBYWlCLEtBQUtqQjtBQUhiO0FBRFQsRUFERixFQVFHcUcsVUFSSCxFQVNHcEYsS0FBS3VGLFFBQUwsSUFBaUJ2RixLQUFLdUYsUUFBTCxDQUFjakUsTUFBL0IsR0FDQztBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGFBQUQsUUFDR3RCLEtBQUt1RixRQUFMLElBQ0R2RixLQUFLdUYsUUFBTCxDQUFjNUcsR0FBZCxDQUFrQixDQUFDNkcsS0FBRCxFQUFRM0csQ0FBUixLQUNoQjtBQUFJLE9BQUtBO0FBQVQsR0FDRSx5Q0FDRSw2QkFBQyxpQkFBRDtBQUFNLE1BQUkyRyxNQUFNQztBQUFoQixHQUF1QkQsTUFBTUUsSUFBN0IsQ0FERixDQURGLENBREYsQ0FGRixDQURGLENBREQsR0FhRyxJQXRCTixDQVpGLEVBb0NHMUYsU0FDQ0EsS0FBSzJGLGNBQUwsSUFBdUIzRixLQUFLMkYsY0FBTCxDQUFvQnJFLE1BQTVDLElBQ0V0QixLQUFLdUYsUUFBTCxJQUFpQnZGLEtBQUt1RixRQUFMLENBQWNqRSxNQUZqQyxJQUdDO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxnQkFBRDtBQUFVLFNBQU90QixLQUFLMkY7QUFBdEIsRUFERixDQURGLEVBS0UsNkJBQUMsZUFBRDtBQUNFLE1BQUcsa0JBREw7QUFFRSxnQkFBYyxFQUZoQjtBQUdFLGlCQUFjLE1BSGhCO0FBSUUsZ0JBQWM7QUFBRXZILFdBQU8sR0FBVDtBQUFjWixZQUFRO0FBQXRCLEdBSmhCO0FBS0U7QUFMRixHQU9Hd0MsS0FBS3VGLFFBQUwsQ0FBYzVHLEdBQWQsQ0FBa0IsQ0FBQ2lILEdBQUQsRUFBTS9HLENBQU4sS0FDakIsNkJBQUMsY0FBRDtBQUFnQixPQUFLQSxDQUFyQjtBQUF3QixhQUFVO0FBQWxDLEdBQ0crRyxJQUFJRixJQUFKLEdBQ0M7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxhQUFEO0FBQWUsYUFBVTtBQUF6QixHQUNFLDZCQUFDLGNBQUQsT0FERixDQURGLEVBSUUsNkJBQUMsaUJBQUQ7QUFBTSxNQUFJRSxJQUFJSCxJQUFkO0FBQW9CLGFBQVU7QUFBOUIsR0FDR0csSUFBSUYsSUFEUCxDQUpGLENBREQsR0FTRyxJQVZOLEVBV0dFLElBQUlMLFFBQUosR0FDQztBQUFLLGFBQVU7QUFBZixHQUFtQ0ssSUFBSUwsUUFBdkMsQ0FERCxHQUVHLElBYk4sRUFjRTtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBRyxhQUFVO0FBQWIsWUFERixFQUVHSyxJQUFJQyxLQUFKLElBQWEsR0FGaEIsQ0FERixFQUtFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBRyxhQUFVO0FBQWIsYUFERixFQUVHRCxJQUFJRSxNQUFKLElBQWMsR0FGakIsQ0FMRixFQVNFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBRyxhQUFVO0FBQWIsY0FERixFQUVHRixJQUFJRyxPQUFKLElBQWUsR0FGbEIsQ0FURixFQWFHSCxJQUFJSSxLQUFKLEdBQ0M7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFHLGFBQVU7QUFBYixZQURGLEVBRUdKLElBQUlJLEtBRlAsQ0FERCxHQUtHLElBbEJOLENBZEYsQ0FERCxDQVBILENBTEYsQ0FIRCxHQXNERyxJQTFGTixDQURGOztlQStGZWYsVTs7QUFFZkEsV0FBV2pHLFNBQVgsR0FBdUI7QUFDckJnQixRQUFNZixtQkFBVU8sTUFBVixDQUFpQkwsVUFERjtBQUVyQitGLFlBQVVqRyxtQkFBVU8sTUFBVixDQUFpQkwsVUFGTjtBQUdyQmdHLFVBQVFsRyxtQkFBVU8sTUFBVixDQUFpQkwsVUFISjtBQUlyQmlHLGNBQVluRyxtQkFBVU8sTUFBVixDQUFpQkw7QUFKUixDQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztJQUVxQjhHLE0sc0JBQU4sTUFBTUEsTUFBTixTQUFxQm5FLGdCQUFyQixDQUErQjtBQUFBO0FBQUE7O0FBQUEsd0NBb0I1Q0UsS0FwQjRDLEdBb0JwQyxFQXBCb0MsT0FrQzVDa0UsWUFsQzRDLEdBa0M3QixDQUFDO0FBQUU5SCxXQUFGO0FBQVNaO0FBQVQsS0FBRCxLQUF1QjtBQUNwQyxZQUFNO0FBQUVxSDtBQUFGLFVBQWUsS0FBSzNELEtBQTFCO0FBQ0EsWUFBTXVCLFNBQVM7QUFBRTBELG1CQUFXLFFBQWI7QUFBdUIvSCxlQUFPQSxLQUE5QjtBQUFxQ0wsaUJBQVM7QUFBOUMsT0FBZjtBQUVBLGFBQ0U7QUFBSSxlQUFPMEU7QUFBWCxTQUVJLEtBQUt2QixLQUFMLENBQVdrRixRQUFYLENBQW9CekgsR0FBcEIsQ0FBd0IsQ0FBQzBILENBQUQsRUFBSXhILENBQUosS0FBVTtBQUNoQyxjQUFNeUgsU0FBU0MsZ0JBQVNDLG9CQUFULENBQThCSCxDQUE5QixFQUNaekYsT0FEWSxDQUNKLG9CQURJLEVBQ21CLHFCQUFvQnhDLEtBQU0sZUFBY1osTUFBTyxRQURsRSxDQUFmOztBQUdBLGVBQ0U7QUFBSSxxQkFBVyxLQUFLMEQsS0FBTCxDQUFXa0YsUUFBWCxDQUFvQjlFLE1BQXBCLEdBQTZCLENBQTdCLEdBQWlDLG1CQUFqQyxHQUF1RCxtQkFBdEU7QUFBMkYsZUFBS3pDO0FBQWhHLFdBQ0U7QUFDRSxxQkFBVyxhQURiO0FBRUUsaUJBQU87QUFDTHJCLG9CQUFTLEdBQUVBLE1BQU8sSUFEYjtBQUVMWSxtQkFBTyxNQUZGO0FBR0xqQixzQkFBVTtBQUhMLFdBRlQ7QUFPRSxtQ0FBeUI7QUFBRW1KLG9CQUFRQTtBQUFWO0FBUDNCLFVBREYsQ0FERjtBQWFELE9BakJELENBRkosQ0FERjtBQXdCRCxLQTlEMkMsT0FnRTVDRyxpQkFoRTRDLEdBZ0V4QixDQUFDO0FBQUVySSxXQUFGO0FBQVNaO0FBQVQsS0FBRCxLQUF1QjtBQUN6QyxhQUNFO0FBQUssZUFBTztBQUFFWSxpQkFBT0EsS0FBVDtBQUFnQlosa0JBQVFBLE1BQXhCO0FBQWdDcUgsb0JBQVU7QUFBMUM7QUFBWixTQUVJLEtBQUszRCxLQUFMLENBQVdrRixRQUFYLENBQW9CekgsR0FBcEIsQ0FBd0IsQ0FBQzBILENBQUQsRUFBSXhILENBQUosS0FDdEI7QUFDRSxhQUFLQSxDQURQO0FBRUUsbUJBQVcsS0FBS3FDLEtBQUwsQ0FBV2tGLFFBQVgsQ0FBb0I5RSxNQUFwQixHQUE2QixDQUE3QixHQUFpQyxtQkFBakMsR0FBdUQsbUJBRnBFO0FBR0UsZUFBTztBQUNMOUQsa0JBQVMsR0FBRUEsTUFBTyxJQURiO0FBRUxZLGlCQUFPO0FBRkY7QUFIVCxRQURGLENBRkosQ0FERjtBQWdCRCxLQWpGMkM7QUFBQTs7QUFzQjVDc0ksc0JBQW9CO0FBQ2xCLFVBQU1DLGNBQWMsTUFDbEIscUhBQ0dDLElBREgsQ0FDUUMsS0FBSyxLQUFLekUsUUFBTCxDQUFjO0FBQUUwRSxxQkFBZUQsRUFBRUU7QUFBbkIsS0FBZCxDQURiLENBREYsQ0FEa0IsQ0FLbEI7OztBQUNBQyxhQUFTQyxVQUFULEtBQXdCLFVBQXhCLEdBQXFDTixhQUFyQyxHQUFxRE8sT0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NSLFdBQWhDLENBQXJELENBTmtCLENBT2xCO0FBQ0E7QUFDQTtBQUNEOztBQW1ERC9FLFdBQVM7QUFDUCxVQUFNO0FBQUVrRjtBQUFGLFFBQW9CLEtBQUs5RSxLQUEvQjtBQUNBLFVBQU07QUFBRW9GLG1CQUFGO0FBQWlCQyx1QkFBakI7QUFBb0NDLGtCQUFwQztBQUFrREM7QUFBbEQsUUFBaUUsS0FBS3JHLEtBQTVFOztBQUVBLFFBQUlzRyxJQUFKLEVBQWdCO0FBQ2QsYUFBTyxLQUFLdEIsWUFBTCxDQUFrQm9CLFlBQWxCLENBQVA7QUFDRDs7QUFFRCxRQUFJLENBQUNSLGFBQUwsRUFBb0I7QUFDbEIsYUFBTyxLQUFLTCxpQkFBTCxDQUF1QmEsWUFBdkIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQ0UsNkJBQUMsYUFBRCxFQUFtQixLQUFLcEcsS0FBeEIsRUFFSSxLQUFLQSxLQUFMLENBQVdrRixRQUFYLENBQW9CekgsR0FBcEIsQ0FBd0IsQ0FBQzBILENBQUQsRUFBSXhILENBQUosS0FBVTtBQUNoQyxlQUFPO0FBQU0sZUFBS0EsQ0FBWDtBQUFjLHFCQUFZLEtBQUtxQyxLQUFMLENBQVdrRixRQUFYLENBQW9COUUsTUFBcEIsR0FBNkIsQ0FBN0IsSUFDL0IsQ0FBQzhGLGFBRDhCLElBQ2IsQ0FBQ0MsaUJBRFcsR0FFOUIseUJBRjhCLEdBRUZELGlCQUFpQixDQUFDQyxpQkFBbEIsR0FDMUIsNEJBRDBCLEdBQ0tBLG9CQUM3QixPQUQ2QixHQUNuQjtBQUpULFdBS0poQixDQUxJLEVBTUprQixhQUFhO0FBQUsscUJBQVU7QUFBZixVQUFiLEdBQXlELElBTnJELENBQVA7QUFRRCxPQVRELENBRkosQ0FERjtBQWdCRDtBQUNGOztBQS9HMkMsQyxTQUNyQ3ZJLFMsR0FBWTtBQUNqQnNJLGdCQUFjckksbUJBQVVrRixTQUFWLENBQW9CLENBQUNsRixtQkFBVXdCLElBQVgsRUFBaUJ4QixtQkFBVU8sTUFBM0IsQ0FBcEIsQ0FERztBQUVqQjRHLFlBQVVuSCxtQkFBVUMsS0FGSDtBQUdqQmtJLGlCQUFlbkksbUJBQVV3QixJQUhSO0FBSWpCNEcscUJBQW1CcEksbUJBQVV3QixJQUpaO0FBS2pCZ0gsdUJBQXFCeEksbUJBQVV3QixJQUxkO0FBTWpCaUgsbUJBQWlCekksbUJBQVV3QixJQU5WO0FBT2pCOEcsY0FBWXRJLG1CQUFVd0IsSUFQTDtBQVFqQm9FLFlBQVU1RixtQkFBVXVCO0FBUkgsQyxTQVVaZixZLEdBQWU7QUFDcEI2SCxnQkFBYyxFQURNO0FBRXBCbEIsWUFBVSxFQUZVO0FBR3BCZ0IsaUJBQWUsS0FISztBQUlwQkMscUJBQW1CLEtBSkM7QUFLcEJJLHVCQUFxQixLQUxEO0FBTXBCRixjQUFZLEtBTlE7QUFPcEIxQyxZQUFVO0FBUFUsQzs7Ozs7Ozs7Ozs7O0FDakJ4QjtBQUNBO0FBQ0EsRSIsImZpbGUiOiJIb3ctdG8tcmVhY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IFJlYWRNb3JlQnlIZWlnaHQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvUmVhZE1vcmVCeUhlaWdodCc7XG5cbmltcG9ydCB7IEZsaWdodHMsIFRheGlDYWIsIFRyYWluLCBTaGlwLCBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IEljb24gPSBnbGFtb3JvdXMuZGl2KHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGxlZnQ6ICcwJyxcbiAgdG9wOiAnMCcsXG4gIG1pbldpZHRoOiAnMjRweCcsXG4gIG1heFdpZHRoOiAnMjRweCcsXG4gIGhlaWdodDogJzI0cHgnLFxufSk7XG5cbmNvbnN0IEJ5Um91dGVCb3ggPSBnbGFtb3JvdXMuZGl2KHtcbiAgcGFkZGluZ0xlZnQ6ICczNXB4JyxcbiAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICBwYWRkaW5nQm90dG9tOiAnMCcsXG4gIH0sXG59KTtcblxuY29uc3QgR1JlYWNoVHlwZUdycERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAucmVhY2hUeXBlSXRlbSc6IHtcbiAgICBmbGV4R3JvdzogJzEnLFxuICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxuICB9LFxuICAnJiAucmVhY2hUeXBlSXRlbTpsYXN0LWNoaWxkJzoge1xuICAgIG1hcmdpbkJvdHRvbTogJzAnLFxuICB9LFxuICAnJiAucmVhY2hUeXBlSXRlbVJhZGlvJzoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnJiArIGxhYmVsICsgLnJlYWNoVHlwZUl0ZW1SYWRpb0RhdGEnOiB7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgICAnJjpjaGVja2VkICsgbGFiZWwgKyAucmVhY2hUeXBlSXRlbVJhZGlvRGF0YSc6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gICAgJyY6Y2hlY2tlZCArIGxhYmVsIC5hcnJvd0J1dHRvbic6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEdBcnJvd0Rvd25TcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzMwcHgnLFxuICBoZWlnaHQ6ICczMHB4JyxcbiAgcmlnaHQ6ICcxMHB4JyxcbiAgdG9wOiAnMTBweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW06ICdjZW50ZXInLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4ICFpbXBvcnRhbnQnLFxuICAgIGhlaWdodDogJzEwcHggIWltcG9ydGFudCcsXG4gIH0sXG59KTtcblxuY29uc3QgSWNvbk1hcCA9IHtcbiAgJ0J5IEFpcic6IDxGbGlnaHRzIC8+LFxuICAnQnkgUm9hZCc6IDxUYXhpQ2FiIC8+LFxuICAnQnkgVHJhaW4nOiA8VHJhaW4gLz4sXG4gICdCeSBTZWEnOiA8U2hpcCAvPixcbn07XG5cbmNvbnN0IEJ5Um91dGUgPSAoeyBtb2RlcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICA8R1JlYWNoVHlwZUdycERpdj5cbiAgICAgIHsgbW9kZXMgJiYgbW9kZXMubWFwKChtb2RlLGkpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjaFR5cGVJdGVtIHdmdWxsXCIga2V5PXtpfT5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInJlYWNoVHlwZUl0ZW1zXCIgZGVmYXVsdENoZWNrZWQ9e2kgPT09IDB9IGlkPXtgcmVhY2hUeXBlSXRlbVJhZGlvYCArIGl9IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInJlYWNoVHlwZUl0ZW1SYWRpb1wiLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJlYWNoVHlwZUl0ZW1SYWRpb2AgKyBpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgICA8SWNvbj57SWNvbk1hcFttb2RlLm5hbWVdfTwvSWNvbj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwZmMzIGYxNCBmbGV4RnVsbCBtbDggZnc5IHB0NFwiPnttb2RlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxHQXJyb3dEb3duU3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWw4IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlciB6MiBhcnJvd0J1dHRvblwiPjxEb3duQXJyb3cvPjwvR0Fycm93RG93blNwYW4+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWNoVHlwZUl0ZW1SYWRpb0RhdGEgb3ZlcmZsb3doIGYxNCBtYjE1IGR5bmFtaWNUZXh0SW5oZXJpdFwiPlxuICAgICAgICAgICAgPFJlYWRNb3JlQnlIZWlnaHQgc2hvd1RpdGxlPXtmYWxzZX0gY29udGVudD17bW9kZS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0dSZWFjaFR5cGVHcnBEaXY+XG4gIDwvZGl2PlxuKTtcblxuQnlSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG1vZGVzIDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ5Um91dGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4vT3ZlcnZpZXcnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nJztcblxuY29uc3QgU2hvd01vcmVDb250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWFyZ2luVG9wOiAnLThweCcsXG59KTtcblxuY29uc3QgR3VpZGUgPSAoeyBndWlkZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmN3IHAxNVwiPlxuICAgICAgPEhlYWRpbmcgey4uLmd1aWRlfSB0eXBlPVwibWFpbi1oZWFkaW5nXCIvPlxuICAgICAgPE92ZXJ2aWV3IHsuLi5ndWlkZX0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR3VpZGUucHJvcFR5cGVzID0ge1xuICBndWlkZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkd1aWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ3VpZGU6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHdWlkZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBTdWJIZWFkaW5nID0gZ2xhbW9yb3VzLnAoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gIGNvbG9yOiAnI2NiY2JjYicsXG4gIG1hcmdpbjogJzRweCAwIDAgMCcsXG59KTtcblxuY29uc3QgSGVhZGluZyA9ICh7IGRhdGEsIHRpdGxlLCBoZWFkaW5nLCBzdHlsZUhlYWRpbmcsIHN0eWxlU3ViSGVhZGluZywgdHlwZSwgaXNWaWV3QWxsSGlkZGVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iMTVcIj5cbiAgICAgIHtcbiAgICAgICAgdHlwZSA9PT0gJ21haW4taGVhZGluZycgP1xuICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVIZWFkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMxIGZ3OSBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgICAgIDogPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1ZpZXdBbGxIaWRkZW4gPyAncHIwICcgOiAncHI2NCAnfSBmMTYgcGZjMyBmd2IgbTBgfT57ZGF0YS50aXRsZSB8fCB0aXRsZX17ZGF0YS5mb3JIZWFkaW5nID8gYCBmb3IgJHtkYXRhLmZvckhlYWRpbmd9YCA6IG51bGx9PC9oMj5cbiAgICAgIH1cbiAgICAgIHtkYXRhLmhlYWRpbmcgfHwgaGVhZGluZyA/XG4gICAgICAgIDxTdWJIZWFkaW5nIHN0eWxlPXtzdHlsZVN1YkhlYWRpbmd9IGNsYXNzTmFtZT1cImYxNCBtdDQgZnc0XCI+e2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nfTwvU3ViSGVhZGluZz4gOlxuICAgICAgICBudWxsXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlSGVhZGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgc3R5bGVTdWJIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc1ZpZXdBbGxIaWRkZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIHR5cGU6ICcnLFxuICB0aXRsZTogJycsXG4gIGhlYWRpbmc6ICcnLFxuICBzdHlsZUhlYWRpbmc6IHt9LFxuICBzdHlsZVN1YkhlYWRpbmc6IHt9LFxuICBpc1ZpZXdBbGxIaWRkZW46IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBTaG93TW9yZSBmcm9tICcuL1Nob3dNb3JlJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSA9IChvdmVydmlld01vcmVUZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG92ZXJ2aWV3TW9yZVRleHQucmVwbGFjZSgvPGJyIFxcLz58PFxcL2JyPi9nLCAnJykucmVwbGFjZSgnPC9zcGFuPjwvcD5cXHJcXG4nLCAnJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBvdmVydmlld01vcmVUZXh0O1xuICB9XG59O1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBvdmVydmlld0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgZm9vdGVyRGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLnNwbGl0KCdcXHJcXG4nKS5maWx0ZXIocCA9PiBwLmxlbmd0aCkgfHwgW107XG5cbiAgICBpZiAoIWRlc2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmb290ZXJEZXNjID0gZm9vdGVyRGVzY3JpcHRpb24gPyBgPGJyPiR7Zm9vdGVyRGVzY3JpcHRpb259YCA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG93TW9yZVxuICAgICAgICB3cmFwVGV4dD17cGFyc2VyLnBhcnNlKGRlc2NbMF0pfVxuICAgICAgICBtb3JlVGV4dD17cGFyc2VyLnBhcnNlKG92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlKGRlc2Muc2xpY2UoMSkuam9pbignXFxuJykuY29uY2F0KGZvb3RlckRlc2MpKSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHJvdy1td1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbW9yZS1ib3hcIj5cbiAgICAgICAgICB7dGhpcy5vdmVydmlld0NvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk92ZXJ2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9vdGVyRGVzY3JpcHRpb246ICcnLFxuICBkZXNjcmlwdGlvbjogJydcbn07XG5cbk92ZXJ2aWV3LnByb3BUeXBlcyA9IHtcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvb3RlckRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yZWFkTW9yZUJ5SGVpZ2h0LmNtLnNjc3MnO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmltcG9ydCB7XG4gIEJsdWVEb3duQXJyb3dcbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jbGFzcyBSZWFkTW9yZUJ5SGVpZ2h0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBleHBhbmRlZDogZmFsc2UgfTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBtYXhIZWlnaHQsIGNvbnRlbnQsIGhlYWRpbmcsIHNob3dUaXRsZSwgaG90ZWxEaXNwbGF5TmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaG93VGl0bGUgP1xuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZjE2IHBiMCBtMCBmd2IgbWIxNVwiPntoZWFkaW5nfSB7IGhvdGVsRGlzcGxheU5hbWUgPyBgYXQgJHtob3RlbERpc3BsYXlOYW1lfWAgOiBudWxsfTwvaDI+IDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ICdtYXhIZWlnaHQnOiBleHBhbmRlZCA/ICdub25lJyA6IG1heEhlaWdodCB9fVxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYCR7c3R5bGVzLmRhdGF9IGJsb2NrIHJlbGF0aXZlIHB0OCAke2V4cGFuZGVkID8gc3R5bGVzLmV4cGFuZGVkIDogJyd9YCB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgZHluYW1pY1RleHRJbmhlcml0IHBmYzMgZjE0cFwiPlxuICAgICAgICAgICAgICB7cGFyc2VyLnBhcnNlKGNvbnRlbnQpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVhZE1vcmV9IGN1cnNvclAgZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gbXQ4IGYxMiBmdzkgYH0gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgYmxvY2sgbXI1XCI+eyBleHBhbmRlZCA/ICdSZWFkIExlc3MnIDogJ1JlYWQgTW9yZSd9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuZG93bkFycm93fSByZWxhdGl2ZSBibG9jayAke2V4cGFuZGVkID8gJ3JvdGF0ZTE4MCcgOiAncm90YXRlMCd9YH0+PEJsdWVEb3duQXJyb3cgLz48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFkTW9yZUJ5SGVpZ2h0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dUaXRsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhvdGVsRGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblJlYWRNb3JlQnlIZWlnaHQuZGVmYXVsdFByb3BzID0ge1xuICBtYXhIZWlnaHQ6IDgzLFxuICBzaG93VGl0bGU6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWRNb3JlQnlIZWlnaHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmltcG9ydCB7IEJsdWVEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR3JlYWRtb3JlTGFiZWwgPSBnbGFtb3JvdXMubGFiZWwoe1xuICAnJiBidXR0b24ucmVhZC1tb3JlLWJ1dHRvbic6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxufSk7XG5cbmNvbnN0IEdEb3duQXJyb3dTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICc2cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICc2cHgnLFxuICAgIHRvcDogJzFweCdcbiAgfVxufSk7XG5cbmNsYXNzIFNob3dNb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmRlZmF1bHRPcGVuXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7IGN0YTogJ1JlYWQgTW9yZScgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dExlbmd0aCA9IDE5NTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1zdGF0ZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gaWQ9XCJwb3N0LTFcIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVhZC1tb3JlLXdyYXAgJHt0aGlzLnByb3BzLmlzRGVmYXVsdFNob3dNb3JlID8gJ3AtbGFzdC1uby1tYXJnaW4gcGZjMyBmMTRwIGR5bmFtaWNUZXh0SW5oZXJpdCcgOiAnJ31gfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgZm9yIHRydW5jYXRlIHRoZSBzdHJpbmdcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy5hcHBlbmRUZXh0ICYmIHRoaXMucHJvcHMud3JhcFRleHQubGVuZ3RoID49IHRleHRMZW5ndGhcbiAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLndyYXBUZXh0ICsgdGhpcy5wcm9wcy5hcHBlbmRUZXh0XG4gICAgICAgICAgICAgIDogdGhpcy5wcm9wcy53cmFwVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdGFyZ2V0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tb3JlVGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tb3JlVGV4dC5sZW5ndGggPiAwIHx8ICFfaXNFbXB0eSh0aGlzLnByb3BzLm1vcmVUZXh0KSA/XG4gICAgICAgICAgICA8R3JlYWRtb3JlTGFiZWwgaHRtbEZvcj1cInBvc3QtMVwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10cmlnZ2VyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJ1dHRvbiBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlbiByZWxhdGl2ZSBmMTIgZnc3XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE0IGZ3N1wiPlxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmNoZWNrZWQpID8gdGhpcy5wcm9wcy5zaG93TGVzc1RleHQgOiB0aGlzLnByb3BzLnNob3dNb3JlVGV4dH1cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxHRG93bkFycm93U3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtbDggcmVsYXRpdmUgYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxCbHVlRG93bkFycm93IC8+PC9HRG93bkFycm93U3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0dyZWFkbW9yZUxhYmVsPlxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNob3dNb3JlLnByb3BUeXBlcyA9IHtcbiAgd3JhcFRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbW9yZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNob3dNb3JlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0xlc3NUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgYXBwZW5kVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuXG59O1xuXG5TaG93TW9yZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHdyYXBUZXh0OiAnJyxcbiAgbW9yZVRleHQ6ICcnLFxuICBzaG93TW9yZVRleHQ6ICdSZWFkIE1vcmUnLFxuICBzaG93TGVzc1RleHQ6ICdSZWFkIExlc3MnLFxuICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiB0cnVlLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd01vcmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkYXRhXCI6IFwiUUlSRGxrUTIyVjlpazFTTmJFaXgwXCIsXG5cdFwiZXhwYW5kZWRcIjogXCJfMkhwaXNWVVA2RWUxTVJ2a3BzT0dNb1wiLFxuXHRcInJlYWRNb3JlXCI6IFwiXzNsWnZOck5uS3YzY1Z4OTJzcm5qQ3FcIixcblx0XCJkb3duQXJyb3dcIjogXCJfM2Y2cUQzMzhDUFcyRWotZkFzWFkxSlwiXG59OyIsImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgR3VpZGUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR3VpZGUnO1xuaW1wb3J0IEJ5Um91dGVzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY2l0eUJsb2NrL0J5Um91dGUnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCB7IEFsbFRyaXBzIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IFN3aXBlciBmcm9tICdjb21wb25lbnRzL1N3aXBlci9Td2lwZXInO1xuXG5jb25zdCBVbCA9IGdsYW1vcm91cy51bCh7XG4gIHBhZGRpbmc6ICcwJyxcbiAgbWFyZ2luOiAnMCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAnJiBsaSc6IHtcbiAgICBtYXJnaW46ICcwIDM0cHggMCAwJyxcbiAgICBmbGV4R3JvdzogJzEnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMHB4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcwJyxcbiAgICB9LFxuICB9LFxufSk7XG5jb25zdCBJY29uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzE4cHgnLFxuICBoZWlnaHQ6ICcxOHB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMThweCcsXG4gICAgaGVpZ2h0OiAnMThweCcsXG4gIH1cbn0pO1xuXG5jb25zdCBHSG93VG9SZWFjaERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBib3JkZXI6ICcxcHggc29saWQgI2Q0ZDRkNCcsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIHRleHRBbGlnbjogJ2xlZnQnLFxufSk7XG5jb25zdCBTcmNUb0Rlc3RMaXN0ID0gZ2xhbW9yb3VzLnVsKHtcbiAgbWFyZ2luOiAnMCcsXG4gIHBhZGRpbmc6ICc0cHggMCAwIDAnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICcmIGxpJzoge1xuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzI0cHgnLFxuICAgIHBhZGRpbmc6ICczcHggMTVweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkNGQ0ZDQnLFxuICAgIG1hcmdpbjogJzAgNHB4IDRweCAwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHSG93VG9JY29uRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1pbldpZHRoOiAnMjRweCcsXG4gIG1heFdpZHRoOiAnMjRweCcsXG4gIGhlaWdodDogJzI0cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIH1cbn0pO1xuXG5jb25zdCBIb3dUb1JlYWNoID0gKHsgZGF0YSwgbG9jYXRpb24sIHBhcmFtcywgZXhpdEludGVudCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICA8SGVsbWV0PlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAgSG93IFRvIFJlYWNoIHtjYXBpdGFsaXplQW5kUmVwbGFjZURhc2gocGFyYW1zKX0gfCBIb3cgVG8gUmVhY2h7XCIgXCJ9XG4gICAgICAgIHtwYXJhbXMuZGVzdGluYXRpb259IEJ5IEFpciwgUm9hZCwgVHJhaW5cbiAgICAgIDwvdGl0bGU+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICBocmVmPXtgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20ke2xvY2F0aW9uLnBhdGhuYW1lfWB9XG4gICAgICAvPlxuICAgIDwvSGVsbWV0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibTggc2JjdyBtdDBcIj5cbiAgICAgIDxHdWlkZVxuICAgICAgICBndWlkZT17e1xuICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgIGhlYWRpbmc6IGRhdGEuaGVhZGluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvblxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHtleGl0SW50ZW50fVxuICAgICAge2RhdGEuZGlzdGFuY2UgJiYgZGF0YS5kaXN0YW5jZS5sZW5ndGggPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcDE1IHB0MFwiPlxuICAgICAgICAgIDxTcmNUb0Rlc3RMaXN0PlxuICAgICAgICAgICAge2RhdGEuZGlzdGFuY2UgJiZcbiAgICAgICAgICAgIGRhdGEuZGlzdGFuY2UubWFwKChwbGFjZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17cGxhY2UubGlua30+e3BsYWNlLmZyb219PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NyY1RvRGVzdExpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICAge2RhdGEgJiZcbiAgICAoKGRhdGEudHJhbnNwb3J0TW9kZXMgJiYgZGF0YS50cmFuc3BvcnRNb2Rlcy5sZW5ndGgpIHx8XG4gICAgICAoZGF0YS5kaXN0YW5jZSAmJiBkYXRhLmRpc3RhbmNlLmxlbmd0aCkpID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtOCBtdDAgc2JjdyBwMTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjE1XCI+XG4gICAgICAgICAgPEJ5Um91dGVzIG1vZGVzPXtkYXRhLnRyYW5zcG9ydE1vZGVzfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgaWQ9XCJob3d0b3JlYWNoU3dpcGVyXCJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICBzc3JBbmltYXRpb249e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAxMDUgfX1cbiAgICAgICAgICByZWJ1aWxkT25VcGRhdGVcbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhLmRpc3RhbmNlLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgICA8R0hvd1RvUmVhY2hEaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyYWRpdXMyIHAxNVwiPlxuICAgICAgICAgICAgICB7cm93LmZyb20gPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iOCBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEdIb3dUb0ljb25EaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXI4IGZsZXggYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8QWxsVHJpcHMgLz5cbiAgICAgICAgICAgICAgICAgIDwvR0hvd1RvSWNvbkRpdj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtyb3cubGlua30gY2xhc3NOYW1lPVwiZnc3IGYxNFwiPlxuICAgICAgICAgICAgICAgICAgICB7cm93LmZyb219XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7cm93LmRpc3RhbmNlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGZjMSBmdzkgbWI4IGYyNFwiPntyb3cuZGlzdGFuY2V9PC9kaXY+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBtYjVcIj5CeSBBaXI8L3A+XG4gICAgICAgICAgICAgICAgICB7cm93LmJ5YWlyIHx8IFwiLVwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdzkgbWI1XCI+QnkgUm9hZDwvcD5cbiAgICAgICAgICAgICAgICAgIHtyb3cuYnlyb2FkIHx8IFwiLVwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdzkgbWI1XCI+QnkgVHJhaW48L3A+XG4gICAgICAgICAgICAgICAgICB7cm93LmJ5dHJhaW4gfHwgXCItXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3Jvdy5ieXNlYSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBtYjVcIj5CeSBTZWE8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtyb3cuYnlzZWF9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dIb3dUb1JlYWNoRGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXBlcj5cbiAgICAgIDwvZGl2PlxuICAgICkgOiBudWxsfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvd1RvUmVhY2g7XG5cbkhvd1RvUmVhY2gucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBleGl0SW50ZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgJy4vU3dpcGVyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNzckFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzU21hbGxTd2lwZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzRnVsbFdpZHRoU3dpcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2FkT25Eb2N1bWVudFJlYWR5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZWJ1aWxkT25VcGRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dMb2FkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG92ZXJmbG93OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3NyQW5pbWF0aW9uOiB7fSxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgaXNTbWFsbFN3aXBlcjogZmFsc2UsXG4gICAgaXNGdWxsV2lkdGhTd2lwZXI6IGZhbHNlLFxuICAgIGxvYWRPbkRvY3VtZW50UmVhZHk6IGZhbHNlLFxuICAgIHNob3dMb2FkZXI6IGZhbHNlLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9O1xuICBzdGF0ZSA9IHt9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN3aXBlckFzeW5jID0gKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3dpcGVyJyAqLyBcInJlYWN0LWlkLXN3aXBlclwiKVxuICAgICAgICAudGhlbihzID0+IHRoaXMuc2V0U3RhdGUoeyBSZWFjdElkU3dpcGVyOiBzLmRlZmF1bHQgfSkpO1xuXG4gICAgLy8gaWYgKHRoaXMucHJvcHMubG9hZE9uRG9jdW1lbnRSZWFkeSkge1xuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA/IHN3aXBlckFzeW5jKCkgOiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgc3dpcGVyQXN5bmMpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9XG4gIH1cblxuICByZW5kZXJTZXJ2ZXIgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlcyA9IHsgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6IHdpZHRoLCBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlPXtzdHlsZXN9PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9faHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKGMpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHdcXFddKz8pXFwvPi9nLCBgPGRpdiBzdHlsZT1cIndpZHRoOiR7d2lkdGh9cHg7IGhlaWdodDogJHtoZWlnaHR9cHhcIiAvPmApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDogJ3N3aXBlclNpbmdsZUNoaWxkJ30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydsYXp5bG9hZGluZyd9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBfX2h0bWwgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyRW1wdHlDbGllbnQgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSA/ICdzd2lwZXJDdXN0b21XaWR0aCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQnfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IFJlYWN0SWRTd2lwZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBpc1NtYWxsU3dpcGVyLCBpc0Z1bGxXaWR0aFN3aXBlciwgc3NyQW5pbWF0aW9uLCBzaG93TG9hZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKF9fU0VSVkVSX18pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNlcnZlcihzc3JBbmltYXRpb24pO1xuICAgIH1cblxuICAgIGlmICghUmVhY3RJZFN3aXBlcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRW1wdHlDbGllbnQoc3NyQW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0SWRTd2lwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICAgICFpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlcikgP1xuICAgICAgICAgICAgICAgICdzd2lwZXJDdXN0b21XaWR0aCBibG9jaycgOiBpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlciA/XG4gICAgICAgICAgICAgICAgICAnc21hbGxTd2lwZXJDb250YWluZXIgYmxvY2snIDogaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgICAnd2Z1bGwnIDogJ3N3aXBlclNpbmdsZUNoaWxkIHdmdWxsIGJsb2NrJ30+XG4gICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAge3Nob3dMb2FkZXIgPyA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1sYXp5LXByZWxvYWRlclwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgPC9zcGFuPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L1JlYWN0SWRTd2lwZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3dpcGVyLXByZWxvYWRlci1zcGluXCI6IFwiXzMzMDhZXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==