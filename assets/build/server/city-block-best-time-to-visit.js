require("source-map-support").install();
exports.ids = ["city-block-best-time-to-visit"];
exports.modules = {

/***/ "./app-v2/modules/cityBlock/BestTime.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/cityBlock/BestTime.js ***!
  \**********************************************/
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

var _Overview = _interopRequireDefault(__webpack_require__(/*! modules/shared/Overview */ "./app-v2/modules/shared/Overview.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BestTimeContainer = _glamorous.default.div({
  display: 'flex',
  padding: '0',
  margin: '0 0 24px',
  justifyContent: 'space-between',
  '& .bestTimeMonth': {
    minWidth: '25%',
    maxWidth: '25%',
    padding: '5px 0'
  },
  '& input.month-input': {
    display: 'none',
    '& + label': {
      fontSize: '16px',
      lineHeight: '24px',
      padding: '0',
      color: '#b2b2b2',
      marginBottom: '0'
    },
    '&:checked + label': {
      color: '#009688',
      fontWeight: '700'
    }
  }
});

const BestTime = ({
  months,
  title,
  heading,
  description
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(_Heading.default, {
  data: {
    title: title,
    heading: heading
  }
}), _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(BestTimeContainer, {
  className: "clearfix flex spaceBetween flexWrap"
}, months && months.length && months.map((month, i) => _react.default.createElement("div", {
  key: i,
  className: "bestTimeMonth text-center"
}, _react.default.createElement("input", {
  checked: month.status === 'checked' ? true : false,
  className: "month-input",
  name: "months",
  type: "checkbox",
  id: month.name
}), _react.default.createElement("label", {
  htmlFor: month.name
}, month.name.slice(0, 3))))), _react.default.createElement(_Overview.default, {
  description: description
})));

BestTime.propTypes = {
  months: _propTypes.default.object,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  heading: _propTypes.default.string
};
BestTime.defaultProps = {
  months: {},
  title: '',
  description: '',
  heading: ''
};
var _default = BestTime;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/Climate.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/cityBlock/Climate.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _ReadMoreByHeight = _interopRequireDefault(__webpack_require__(/*! modules/shared/ReadMoreByHeight */ "./app-v2/modules/shared/ReadMoreByHeight.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = _glamorous.default.div({
  position: 'absolute',
  left: '0',
  top: '0',
  width: '24px',
  height: '24px'
});

const GClimateBoxDiv = _glamorous.default.div({
  paddingLeft: '32px',
  '& > h3': {
    lineHeight: '24px'
  },
  '&:last-child': {
    paddingBottom: '0 !important'
  }
});

const IconMap = {
  'Monsoon': _react.default.createElement(_Icon.Monsoon, null),
  'Summer': _react.default.createElement(_Icon.Summer, null),
  'Winter': _react.default.createElement(_Icon.Winter, null)
};

const Climate = ({
  data
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(_Heading.default, {
  title: data.title
}), _react.default.createElement("div", {
  className: "clearfix"
}, data.seasons.length && data.seasons.map((season, i) => _react.default.createElement(GClimateBoxDiv, {
  className: "relative pb15",
  key: i
}, _react.default.createElement(Icon, null, IconMap[season.title.split(' ')[0]]), _react.default.createElement("h3", {
  className: "f14p fw9 pfc3 m0"
}, season.title), _react.default.createElement(_ReadMoreByHeight.default, {
  showTitle: false,
  content: season.description
})))));

Climate.propTypes = {
  data: _propTypes.default.object.isRequired
};
var _default = Climate;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/Weather.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/cityBlock/Weather.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WeatherContainer = _glamorous.default.div({
  display: 'flex'
});

const GWeatherContainerInnerDiv = _glamorous.default.div({
  border: '1px solid #ccc'
});

const Icon = _glamorous.default.div({
  margin: '8px auto',
  width: '28px',
  height: '22px',
  display: 'block'
});

const Weather = ({
  weatherInfo
}) => {
  return _react.default.createElement("div", {
    className: "clearfix"
  }, weatherInfo.title ? _react.default.createElement("h4", {
    className: "text-capitalize f16 pfc1 fwb m0 mb15"
  }, weatherInfo.title) : null, _react.default.createElement(WeatherContainer, {
    className: "clearfix"
  }, _react.default.createElement(_Swiper.default, {
    id: "weatherSwiper",
    spaceBetween: 15,
    slidesPerView: "auto",
    ssrAnimation: {
      width: 280,
      height: 186
    },
    rebuildOnUpdate: true
  }, weatherInfo.dates.map((item, i) => _react.default.createElement(GWeatherContainerInnerDiv, {
    key: i,
    className: "text-center p15"
  }, _react.default.createElement("p", null, item.date), _react.default.createElement(Icon, {
    className: "relative"
  }, _react.default.createElement(_Icon.WeatherIcon, null)), _react.default.createElement("p", {
    className: "f16 fwb m0 pfc1 pb8"
  }, item.fahrenheit, " | ", item.celsius), _react.default.createElement("p", {
    className: "m0 mb15 ellipsis-two"
  }, item.heading), _react.default.createElement("p", {
    className: "m0 f12"
  }, item.humidity))))));
};

Weather.propTypes = {
  weatherInfo: _propTypes.default.object.isRequired
};
var _default = Weather;
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

/***/ "./app-v2/screens/cityBlock/bestTimeToVisit/BestTimeToVisit.js":
/*!*********************************************************************!*\
  !*** ./app-v2/screens/cityBlock/bestTimeToVisit/BestTimeToVisit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _Weather = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/Weather */ "./app-v2/modules/cityBlock/Weather.js"));

var _BestTime = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/BestTime */ "./app-v2/modules/cityBlock/BestTime.js"));

var _Climate = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/Climate */ "./app-v2/modules/cityBlock/Climate.js"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BestTimeToVisit = ({
  data,
  location,
  params,
  exitIntent
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("meta", {
  charSet: "utf-8"
}), _react.default.createElement("title", null, "Best Time To Visit ", (0, _parsers.capitalizeAndReplaceDash)(params), " | Best Season To Visit ", (0, _parsers.capitalizeAndReplaceDash)(params)), _react.default.createElement("link", {
  rel: "canonical",
  href: `https://traveltriangle.com${location.pathname}`
})), data && data.weather && data.weather.dates.length ? _react.default.createElement("div", {
  className: "m8 mt0 p15 sbcw"
}, _react.default.createElement(_Weather.default, {
  weatherInfo: data.weather
})) : null, _react.default.createElement("div", {
  className: "m8 mt0 p15 sbcw"
}, _react.default.createElement(_BestTime.default, data)), exitIntent, _react.default.createElement("div", {
  className: "m8 mt0 p15 sbcw"
}, _react.default.createElement(_Climate.default, {
  data: data.climate
})));

var _default = BestTimeToVisit;
exports.default = _default;
BestTimeToVisit.propTypes = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svQmVzdFRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2l0eUJsb2NrL0NsaW1hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2l0eUJsb2NrL1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL092ZXJ2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9SZWFkTW9yZUJ5SGVpZ2h0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9TaG93TW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvcmVhZE1vcmVCeUhlaWdodC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2NpdHlCbG9jay9iZXN0VGltZVRvVmlzaXQvQmVzdFRpbWVUb1Zpc2l0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1N3aXBlci9Td2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlci5zY3NzIl0sIm5hbWVzIjpbIkJlc3RUaW1lQ29udGFpbmVyIiwiZ2xhbW9yb3VzIiwiZGl2IiwiZGlzcGxheSIsInBhZGRpbmciLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJCZXN0VGltZSIsIm1vbnRocyIsInRpdGxlIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwibWFwIiwibW9udGgiLCJpIiwic3RhdHVzIiwibmFtZSIsInNsaWNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiSWNvbiIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiR0NsaW1hdGVCb3hEaXYiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdCb3R0b20iLCJJY29uTWFwIiwiQ2xpbWF0ZSIsImRhdGEiLCJzZWFzb25zIiwic2Vhc29uIiwic3BsaXQiLCJpc1JlcXVpcmVkIiwiV2VhdGhlckNvbnRhaW5lciIsIkdXZWF0aGVyQ29udGFpbmVySW5uZXJEaXYiLCJib3JkZXIiLCJXZWF0aGVyIiwid2VhdGhlckluZm8iLCJkYXRlcyIsIml0ZW0iLCJkYXRlIiwiZmFocmVuaGVpdCIsImNlbHNpdXMiLCJodW1pZGl0eSIsIlN1YkhlYWRpbmciLCJwIiwiSGVhZGluZyIsInN0eWxlSGVhZGluZyIsInN0eWxlU3ViSGVhZGluZyIsInR5cGUiLCJpc1ZpZXdBbGxIaWRkZW4iLCJmb3JIZWFkaW5nIiwiYm9vbCIsInBhcnNlciIsIlBhcnNlciIsIm92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlIiwib3ZlcnZpZXdNb3JlVGV4dCIsInJlcGxhY2UiLCJlcnIiLCJPdmVydmlldyIsIlB1cmVDb21wb25lbnQiLCJvdmVydmlld0NvbnRlbnQiLCJmb290ZXJEZXNjcmlwdGlvbiIsInByb3BzIiwiZGVzYyIsImZpbHRlciIsImZvb3RlckRlc2MiLCJwYXJzZSIsImpvaW4iLCJjb25jYXQiLCJyZW5kZXIiLCJSZWFkTW9yZUJ5SGVpZ2h0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImV4cGFuZGVkIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsInNldFN0YXRlIiwibWF4SGVpZ2h0IiwiY29udGVudCIsInNob3dUaXRsZSIsImhvdGVsRGlzcGxheU5hbWUiLCJzdHlsZXMiLCJyZWFkTW9yZSIsImRvd25BcnJvdyIsIm51bWJlciIsIkdyZWFkbW9yZUxhYmVsIiwibGFiZWwiLCJHRG93bkFycm93U3BhbiIsInNwYW4iLCJTaG93TW9yZSIsIlJlYWN0IiwiY2hlY2tlZCIsImRlZmF1bHRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmFja1NlZ21lbnQiLCJjdGEiLCJ0ZXh0TGVuZ3RoIiwiaXNEZWZhdWx0U2hvd01vcmUiLCJhcHBlbmRUZXh0Iiwid3JhcFRleHQiLCJtb3JlVGV4dCIsInNob3dMZXNzVGV4dCIsInNob3dNb3JlVGV4dCIsIm9uZU9mVHlwZSIsImFycmF5IiwiZnVuYyIsIkJlc3RUaW1lVG9WaXNpdCIsImxvY2F0aW9uIiwicGFyYW1zIiwiZXhpdEludGVudCIsInBhdGhuYW1lIiwid2VhdGhlciIsImNsaW1hdGUiLCJTd2lwZXIiLCJyZW5kZXJTZXJ2ZXIiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsImNoaWxkcmVuIiwiYyIsIl9faHRtbCIsIlJlYWN0RE9NIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJyZW5kZXJFbXB0eUNsaWVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic3dpcGVyQXN5bmMiLCJ0aGVuIiwicyIsIlJlYWN0SWRTd2lwZXIiLCJkZWZhdWx0IiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzU21hbGxTd2lwZXIiLCJpc0Z1bGxXaWR0aFN3aXBlciIsInNzckFuaW1hdGlvbiIsInNob3dMb2FkZXIiLCJfX1NFUlZFUl9fIiwibG9hZE9uRG9jdW1lbnRSZWFkeSIsInJlYnVpbGRPblVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBRUEsTUFBTUEsb0JBQW9CQyxtQkFBVUMsR0FBVixDQUFjO0FBQ3RDQyxXQUFTLE1BRDZCO0FBRXRDQyxXQUFTLEdBRjZCO0FBR3RDQyxVQUFRLFVBSDhCO0FBSXRDQyxrQkFBZ0IsZUFK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QUFxQm5JLG1CQUFVdUMsSUFMZDtBQU1qQjZGLG1CQUFpQnBJLG1CQUFVdUMsSUFOVjtBQU9qQjBGLGNBQVlqSSxtQkFBVXVDLElBUEw7QUFRakJxRSxZQUFVNUcsbUJBQVVFO0FBUkgsQyxTQVVaQyxZLEdBQWU7QUFDcEI2SCxnQkFBYyxFQURNO0FBRXBCbEIsWUFBVSxFQUZVO0FBR3BCZ0IsaUJBQWUsS0FISztBQUlwQkMscUJBQW1CLEtBSkM7QUFLcEJJLHVCQUFxQixLQUxEO0FBTXBCRixjQUFZLEtBTlE7QUFPcEJyQixZQUFVO0FBUFUsQzs7Ozs7Ozs7Ozs7O0FDakJ4QjtBQUNBO0FBQ0EsRSIsImZpbGUiOiJjaXR5LWJsb2NrLWJlc3QtdGltZS10by12aXNpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvT3ZlcnZpZXcnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvSGVhZGluZyc7XG5cbmNvbnN0IEJlc3RUaW1lQ29udGFpbmVyID0gZ2xhbW9yb3VzLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwIDAgMjRweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICcmIC5iZXN0VGltZU1vbnRoJzoge1xuICAgIG1pbldpZHRoOiAnMjUlJyxcbiAgICBtYXhXaWR0aDogJzI1JScsXG4gICAgcGFkZGluZzogJzVweCAwJyxcbiAgfSxcbiAgJyYgaW5wdXQubW9udGgtaW5wdXQnOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgICcmICsgbGFiZWwnOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgY29sb3I6ICcjYjJiMmIyJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAnLFxuICAgIH0sXG4gICAgJyY6Y2hlY2tlZCArIGxhYmVsJzoge1xuICAgICAgY29sb3I6ICcjMDA5Njg4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgQmVzdFRpbWUgPSAoeyBtb250aHMsIHRpdGxlLCBoZWFkaW5nLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICA8SGVhZGluZyBkYXRhPXt7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBoZWFkaW5nOiBoZWFkaW5nfX1cbiAgICAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgIDxCZXN0VGltZUNvbnRhaW5lciBjbGFzc05hbWU9XCJjbGVhcmZpeCBmbGV4IHNwYWNlQmV0d2VlbiBmbGV4V3JhcFwiPlxuICAgICAgICB7bW9udGhzICYmIG1vbnRocy5sZW5ndGggJiYgbW9udGhzLm1hcCgobW9udGgsIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiYmVzdFRpbWVNb250aCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9e21vbnRoLnN0YXR1cz09PSdjaGVja2VkJyA/IHRydWUgOiBmYWxzZX0gY2xhc3NOYW1lPVwibW9udGgtaW5wdXRcIlxuICAgICAgICAgICAgICBuYW1lPVwibW9udGhzXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9e21vbnRoLm5hbWV9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bW9udGgubmFtZX0+e21vbnRoLm5hbWUuc2xpY2UoMCwzKX08L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvQmVzdFRpbWVDb250YWluZXI+XG4gICAgICA8T3ZlcnZpZXcgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufS8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQmVzdFRpbWUucHJvcFR5cGVzID0ge1xuICBtb250aHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuQmVzdFRpbWUuZGVmYXVsdFByb3BzID0ge1xuICBtb250aHM6IHt9LFxuICB0aXRsZTogJycsXG4gIGRlc2NyaXB0aW9uOiAnJyxcbiAgaGVhZGluZzogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJlc3RUaW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7IE1vbnNvb24sIFN1bW1lciwgV2ludGVyIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvSGVhZGluZyc7XG5pbXBvcnQgUmVhZE1vcmVCeUhlaWdodCBmcm9tICdtb2R1bGVzL3NoYXJlZC9SZWFkTW9yZUJ5SGVpZ2h0JztcblxuY29uc3QgSWNvbiA9IGdsYW1vcm91cy5kaXYoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbGVmdDogJzAnLFxuICB0b3A6ICcwJyxcbiAgd2lkdGg6ICcyNHB4JyxcbiAgaGVpZ2h0OiAnMjRweCcsXG59KTtcblxuY29uc3QgR0NsaW1hdGVCb3hEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgcGFkZGluZ0xlZnQ6ICczMnB4JyxcbiAgJyYgPiBoMyc6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gIH0sXG4gICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogJzAgIWltcG9ydGFudCcsXG4gIH0sXG59KTtcblxuY29uc3QgSWNvbk1hcCA9IHtcbiAgJ01vbnNvb24nOiA8TW9uc29vbiAvPixcbiAgJ1N1bW1lcic6IDxTdW1tZXIgLz4sXG4gICdXaW50ZXInOiA8V2ludGVyIC8+LFxufTtcblxuY29uc3QgQ2xpbWF0ZSA9ICh7IGRhdGEgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgPEhlYWRpbmcgdGl0bGU9e2RhdGEudGl0bGV9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAge2RhdGEuc2Vhc29ucy5sZW5ndGggJiYgZGF0YS5zZWFzb25zLm1hcCgoc2Vhc29uLCBpKSA9PiAoXG4gICAgICAgIDxHQ2xpbWF0ZUJveERpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwYjE1XCIga2V5PXtpfT5cbiAgICAgICAgICA8SWNvbj57SWNvbk1hcFtzZWFzb24udGl0bGUuc3BsaXQoJyAnKVswXV19PC9JY29uPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTRwIGZ3OSBwZmMzIG0wXCI+e3NlYXNvbi50aXRsZX08L2gzPlxuICAgICAgICAgIDxSZWFkTW9yZUJ5SGVpZ2h0IHNob3dUaXRsZT17ZmFsc2V9IGNvbnRlbnQ9e3NlYXNvbi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC9HQ2xpbWF0ZUJveERpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNsaW1hdGUucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaW1hdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmltcG9ydCB7IFdlYXRoZXJJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBXZWF0aGVyQ29udGFpbmVyID0gZ2xhbW9yb3VzLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4Jyxcbn0pO1xuXG5jb25zdCBHV2VhdGhlckNvbnRhaW5lcklubmVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcbn0pO1xuXG5jb25zdCBJY29uID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1hcmdpbjogJzhweCBhdXRvJyxcbiAgd2lkdGg6ICcyOHB4JyxcbiAgaGVpZ2h0OiAnMjJweCcsXG4gIGRpc3BsYXk6ICdibG9jaycsXG59KTtcblxuY29uc3QgV2VhdGhlciA9ICh7IHdlYXRoZXJJbmZvIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICB7d2VhdGhlckluZm8udGl0bGUgPyAoXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemUgZjE2IHBmYzEgZndiIG0wIG1iMTVcIj5cbiAgICAgICAgICB7d2VhdGhlckluZm8udGl0bGV9XG4gICAgICAgIDwvaDQ+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxXZWF0aGVyQ29udGFpbmVyIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICBpZD1cIndlYXRoZXJTd2lwZXJcIlxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTV9XG4gICAgICAgICAgc2xpZGVzUGVyVmlldz1cImF1dG9cIlxuICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDE4NiB9fVxuICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICA+XG4gICAgICAgICAge3dlYXRoZXJJbmZvLmRhdGVzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPEdXZWF0aGVyQ29udGFpbmVySW5uZXJEaXYga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwMTVcIj5cbiAgICAgICAgICAgICAgPHA+e2l0ZW0uZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFdlYXRoZXJJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZ3YiBtMCBwZmMxIHBiOFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmZhaHJlbmhlaXR9IHwge2l0ZW0uY2Vsc2l1c31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBtYjE1IGVsbGlwc2lzLXR3b1wiPntpdGVtLmhlYWRpbmd9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTJcIj57aXRlbS5odW1pZGl0eX08L3A+XG4gICAgICAgICAgICA8L0dXZWF0aGVyQ29udGFpbmVySW5uZXJEaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3dpcGVyPlxuICAgICAgPC9XZWF0aGVyQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuV2VhdGhlci5wcm9wVHlwZXMgPSB7XG4gIHdlYXRoZXJJbmZvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgU3ViSGVhZGluZyA9IGdsYW1vcm91cy5wKHtcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgbGluZUhlaWdodDogJzE4cHgnLFxuICBjb2xvcjogJyNjYmNiY2InLFxuICBtYXJnaW46ICc0cHggMCAwIDAnLFxufSk7XG5cbmNvbnN0IEhlYWRpbmcgPSAoeyBkYXRhLCB0aXRsZSwgaGVhZGluZywgc3R5bGVIZWFkaW5nLCBzdHlsZVN1YkhlYWRpbmcsIHR5cGUsIGlzVmlld0FsbEhpZGRlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBtYjE1XCI+XG4gICAgICB7XG4gICAgICAgIHR5cGUgPT09ICdtYWluLWhlYWRpbmcnID9cbiAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlSGVhZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1ZpZXdBbGxIaWRkZW4gPyAncHIwICcgOiAncHI2NCAnfSBmMTYgcGZjMSBmdzkgbTBgfT57ZGF0YS50aXRsZSB8fCB0aXRsZX17ZGF0YS5mb3JIZWFkaW5nID8gYCBmb3IgJHtkYXRhLmZvckhlYWRpbmd9YCA6IG51bGx9PC9oMj5cbiAgICAgICAgICA6IDxoMiBzdHlsZT17c3R5bGVIZWFkaW5nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNWaWV3QWxsSGlkZGVuID8gJ3ByMCAnIDogJ3ByNjQgJ30gZjE2IHBmYzMgZndiIG0wYH0+e2RhdGEudGl0bGUgfHwgdGl0bGV9e2RhdGEuZm9ySGVhZGluZyA/IGAgZm9yICR7ZGF0YS5mb3JIZWFkaW5nfWAgOiBudWxsfTwvaDI+XG4gICAgICB9XG4gICAgICB7ZGF0YS5oZWFkaW5nIHx8IGhlYWRpbmcgP1xuICAgICAgICA8U3ViSGVhZGluZyBzdHlsZT17c3R5bGVTdWJIZWFkaW5nfSBjbGFzc05hbWU9XCJmMTQgbXQ0IGZ3NFwiPntkYXRhLmhlYWRpbmcgfHwgaGVhZGluZ308L1N1YkhlYWRpbmc+IDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZUhlYWRpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN0eWxlU3ViSGVhZGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNWaWV3QWxsSGlkZGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IHt9LFxuICB0eXBlOiAnJyxcbiAgdGl0bGU6ICcnLFxuICBoZWFkaW5nOiAnJyxcbiAgc3R5bGVIZWFkaW5nOiB7fSxcbiAgc3R5bGVTdWJIZWFkaW5nOiB7fSxcbiAgaXNWaWV3QWxsSGlkZGVuOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnLi9TaG93TW9yZSc7XG5cbmNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3Qgb3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUgPSAob3ZlcnZpZXdNb3JlVGV4dCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBvdmVydmlld01vcmVUZXh0LnJlcGxhY2UoLzxiciBcXC8+fDxcXC9icj4vZywgJycpLnJlcGxhY2UoJzwvc3Bhbj48L3A+XFxyXFxuJywgJycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gb3ZlcnZpZXdNb3JlVGV4dDtcbiAgfVxufTtcblxuY2xhc3MgT3ZlcnZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgb3ZlcnZpZXdDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGZvb3RlckRlc2NyaXB0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbi5zcGxpdCgnXFxyXFxuJykuZmlsdGVyKHAgPT4gcC5sZW5ndGgpIHx8IFtdO1xuXG4gICAgaWYgKCFkZXNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZm9vdGVyRGVzYyA9IGZvb3RlckRlc2NyaXB0aW9uID8gYDxicj4ke2Zvb3RlckRlc2NyaXB0aW9ufWAgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8U2hvd01vcmVcbiAgICAgICAgd3JhcFRleHQ9e3BhcnNlci5wYXJzZShkZXNjWzBdKX1cbiAgICAgICAgbW9yZVRleHQ9e3BhcnNlci5wYXJzZShvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZShkZXNjLnNsaWNlKDEpLmpvaW4oJ1xcbicpLmNvbmNhdChmb290ZXJEZXNjKSkpfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByb3ctbXdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYm94XCI+XG4gICAgICAgICAge3RoaXMub3ZlcnZpZXdDb250ZW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5PdmVydmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvb3RlckRlc2NyaXB0aW9uOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnXG59O1xuXG5PdmVydmlldy5wcm9wVHlwZXMgPSB7XG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb290ZXJEZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmVhZE1vcmVCeUhlaWdodC5jbS5zY3NzJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5pbXBvcnQge1xuICBCbHVlRG93bkFycm93XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY2xhc3MgUmVhZE1vcmVCeUhlaWdodCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZXhwYW5kZWQ6IGZhbHNlIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgbWF4SGVpZ2h0LCBjb250ZW50LCBoZWFkaW5nLCBzaG93VGl0bGUsIGhvdGVsRGlzcGxheU5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd1RpdGxlID9cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImYxNiBwYjAgbTAgZndiIG1iMTVcIj57aGVhZGluZ30geyBob3RlbERpc3BsYXlOYW1lID8gYGF0ICR7aG90ZWxEaXNwbGF5TmFtZX1gIDogbnVsbH08L2gyPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyAnbWF4SGVpZ2h0JzogZXhwYW5kZWQgPyAnbm9uZScgOiBtYXhIZWlnaHQgfX1cbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGAke3N0eWxlcy5kYXRhfSBibG9jayByZWxhdGl2ZSBwdDggJHtleHBhbmRlZCA/IHN0eWxlcy5leHBhbmRlZCA6ICcnfWAgfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGR5bmFtaWNUZXh0SW5oZXJpdCBwZmMzIGYxNHBcIj5cbiAgICAgICAgICAgICAge3BhcnNlci5wYXJzZShjb250ZW50KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlYWRNb3JlfSBjdXJzb3JQIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIG10OCBmMTIgZnc5IGB9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGJsb2NrIG1yNVwiPnsgZXhwYW5kZWQgPyAnUmVhZCBMZXNzJyA6ICdSZWFkIE1vcmUnfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRvd25BcnJvd30gcmVsYXRpdmUgYmxvY2sgJHtleHBhbmRlZCA/ICdyb3RhdGUxODAnIDogJ3JvdGF0ZTAnfWB9PjxCbHVlRG93bkFycm93IC8+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhZE1vcmVCeUhlaWdodC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93VGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICBob3RlbERpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5SZWFkTW9yZUJ5SGVpZ2h0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWF4SGVpZ2h0OiA4MyxcbiAgc2hvd1RpdGxlOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFkTW9yZUJ5SGVpZ2h0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGF0YVwiOiBcIlFJUkRsa1EyMlY5aWsxU05iRWl4MFwiLFxuXHRcImV4cGFuZGVkXCI6IFwiXzJIcGlzVlVQNkVlMU1Sdmtwc09HTW9cIixcblx0XCJyZWFkTW9yZVwiOiBcIl8zbFp2TnJObkt2M2NWeDkyc3JuakNxXCIsXG5cdFwiZG93bkFycm93XCI6IFwiXzNmNnFEMzM4Q1BXMkVqLWZBc1hZMUpcIlxufTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBXZWF0aGVyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY2l0eUJsb2NrL1dlYXRoZXInO1xuaW1wb3J0IEJlc3RUaW1lIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY2l0eUJsb2NrL0Jlc3RUaW1lJztcbmltcG9ydCBDbGltYXRlIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY2l0eUJsb2NrL0NsaW1hdGUnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcblxuY29uc3QgQmVzdFRpbWVUb1Zpc2l0ID0gKHsgZGF0YSwgbG9jYXRpb24sIHBhcmFtcywgZXhpdEludGVudCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICA8SGVsbWV0PlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDx0aXRsZT5CZXN0IFRpbWUgVG8gVmlzaXQge2NhcGl0YWxpemVBbmRSZXBsYWNlRGFzaChwYXJhbXMpfSB8IEJlc3QgU2Vhc29uIFRvIFZpc2l0IHtjYXBpdGFsaXplQW5kUmVwbGFjZURhc2gocGFyYW1zKX08L3RpdGxlPlxuICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2BodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbSR7bG9jYXRpb24ucGF0aG5hbWV9YH0gLz5cbiAgICA8L0hlbG1ldD5cbiAgICB7XG4gICAgICBkYXRhICYmIGRhdGEud2VhdGhlciAmJiBkYXRhLndlYXRoZXIuZGF0ZXMubGVuZ3RoICA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm04IG10MCBwMTUgc2Jjd1wiPlxuICAgICAgICAgIDxXZWF0aGVyIHdlYXRoZXJJbmZvPXtkYXRhLndlYXRoZXJ9IC8+XG4gICAgICA8L2Rpdj4gOiBudWxsXG4gICAgfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwibTggbXQwIHAxNSBzYmN3XCI+XG4gICAgICAgIDxCZXN0VGltZSB7Li4uZGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgICB7ZXhpdEludGVudH1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm04IG10MCBwMTUgc2Jjd1wiPlxuICAgICAgICA8Q2xpbWF0ZSBkYXRhPXtkYXRhLmNsaW1hdGV9IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmVzdFRpbWVUb1Zpc2l0O1xuXG5CZXN0VGltZVRvVmlzaXQucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBleGl0SW50ZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0ICcuL1N3aXBlci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzc3JBbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheSxcbiAgICBpc1NtYWxsU3dpcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Z1bGxXaWR0aFN3aXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZE9uRG9jdW1lbnRSZWFkeTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVidWlsZE9uVXBkYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TG9hZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvdmVyZmxvdzogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNzckFuaW1hdGlvbjoge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGlzU21hbGxTd2lwZXI6IGZhbHNlLFxuICAgIGlzRnVsbFdpZHRoU3dpcGVyOiBmYWxzZSxcbiAgICBsb2FkT25Eb2N1bWVudFJlYWR5OiBmYWxzZSxcbiAgICBzaG93TG9hZGVyOiBmYWxzZSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfTtcbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzd2lwZXJBc3luYyA9ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3N3aXBlcicgKi8gXCJyZWFjdC1pZC1zd2lwZXJcIilcbiAgICAgICAgLnRoZW4ocyA9PiB0aGlzLnNldFN0YXRlKHsgUmVhY3RJZFN3aXBlcjogcy5kZWZhdWx0IH0pKTtcblxuICAgIC8vIGlmICh0aGlzLnByb3BzLmxvYWRPbkRvY3VtZW50UmVhZHkpIHtcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgPyBzd2lwZXJBc3luYygpIDogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzd2lwZXJBc3luYyk7XG4gICAgLy8gfVxuICB9XG5cbiAgcmVuZGVyU2VydmVyID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgY29uc3QgeyBvdmVyZmxvdyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZXMgPSB7IG92ZXJmbG93WDogJ3Njcm9sbCcsIHdpZHRoOiB3aWR0aCwgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZT17c3R5bGVzfT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBfX2h0bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cChjKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvPGltZyhbXFx3XFxXXSs/KVxcLz4vZywgYDxkaXYgc3R5bGU9XCJ3aWR0aDoke3dpZHRofXB4OyBoZWlnaHQ6ICR7aGVpZ2h0fXB4XCIgLz5gKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGggPiAxID8gJ3N3aXBlckN1c3RvbVdpZHRoJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCd9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbGF6eWxvYWRpbmcnfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogX19odG1sIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckVtcHR5Q2xpZW50ID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDogJ3N3aXBlclNpbmdsZUNoaWxkJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBSZWFjdElkU3dpcGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaXNTbWFsbFN3aXBlciwgaXNGdWxsV2lkdGhTd2lwZXIsIHNzckFuaW1hdGlvbiwgc2hvd0xvYWRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChfX1NFUlZFUl9fKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJTZXJ2ZXIoc3NyQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIVJlYWN0SWRTd2lwZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVtcHR5Q2xpZW50KHNzckFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdElkU3dpcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9eyh0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgICAhaXNTbWFsbFN3aXBlciAmJiAhaXNGdWxsV2lkdGhTd2lwZXIpID9cbiAgICAgICAgICAgICAgICAnc3dpcGVyQ3VzdG9tV2lkdGggYmxvY2snIDogaXNTbWFsbFN3aXBlciAmJiAhaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgJ3NtYWxsU3dpcGVyQ29udGFpbmVyIGJsb2NrJyA6IGlzRnVsbFdpZHRoU3dpcGVyID9cbiAgICAgICAgICAgICAgICAgICAgJ3dmdWxsJyA6ICdzd2lwZXJTaW5nbGVDaGlsZCB3ZnVsbCBibG9jayd9PlxuICAgICAgICAgICAgICAgIHtjfVxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGVyID8gPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItbGF6eS1wcmVsb2FkZXJcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDwvc3Bhbj47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9SZWFjdElkU3dpcGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN3aXBlci1wcmVsb2FkZXItc3BpblwiOiBcIl8zMzA4WVwiXG59OyJdLCJzb3VyY2VSb290IjoiIn0=