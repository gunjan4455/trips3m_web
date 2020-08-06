require("source-map-support").install();
exports.ids = ["postbooking-feedback~posttrip-feedback"];
exports.modules = {

/***/ "./app-v2/modules/feedback/G.js":
/*!**************************************!*\
  !*** ./app-v2/modules/feedback/G.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NpsRadio = exports.NpsRadioRating = exports.NpsInputRadio = exports.GFlexStar = exports.GFlexBtn = exports.GNpsDiv = void 0;

var _glamorous = _interopRequireWildcard(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GNpsDiv = _glamorous.default.div({
  '& span': {
    flex: 1,
    '&:nth-child(7) label, &:nth-child(8) label': {
      border: '1px solid #fac22e',
      background: '#fac22e',
      borderRightColor: 'transparent'
    },
    '&:nth-child(9) label': {
      border: '1px solid #4caf50',
      background: '#4caf50',
      borderRightColor: 'transparent'
    },
    '&:nth-child(10) label': {
      border: '1px solid #4caf50',
      background: '#4caf50',
      borderRightColor: '#4caf50'
    }
  },
  '& span label': {
    background: '#fe5246',
    border: '1px solid #fe5246',
    color: '#ffffff',
    minHeight: '32px',
    fontSize: '14px',
    lineHeight: '32px',
    textAlign: 'center',
    borderRightColor: 'transparent'
  },
  '&.selected span label': {
    background: '#ffffff',
    color: '#3e3e3e',
    borderColor: '#b2b2b2',
    borderRightColor: 'transparent'
  },
  '&.selected span:nth-child(7).npsActive + span label, &.selected span:nth-child(8).npsActive + span label': {
    borderLeftColor: '#fac22e'
  },
  '&.selected span:nth-child(9).npsActive + span label': {
    borderLeftColor: '#4caf50'
  },
  '&.selected span.npsActive + span label': {
    borderLeftColor: '#fe5246'
  },
  '&.selected span label': {
    background: '#ffffff',
    color: '#3e3e3e',
    borderColor: '#b2b2b2',
    borderRightColor: 'transparent'
  },
  '&.selected span:nth-child(10) label': {
    borderRightColor: '#b2b2b2'
  },
  '&.selected span .radioNps:checked + label': {
    background: '#fe5246',
    borderColor: '#fe5246',
    color: '#ffffff'
  },
  '&.selected span:nth-child(7) .radioNps:checked + label, &.selected span:nth-child(8) .radioNps:checked + label': {
    background: '#fac22e',
    borderColor: '#fac22e'
  },
  '&.selected span:nth-child(9) .radioNps:checked + label, &.selected span:nth-child(10) .radioNps:checked + label': {
    background: '#4caf50',
    borderColor: '#4caf50'
  }
});

exports.GNpsDiv = GNpsDiv;

const GFlexBtn = _glamorous.default.div({
  flex: '0 0 50%',
  '&:nth-child(odd)': {
    paddingRight: '4px'
  },
  '&:nth-child(even)': {
    paddingLeft: '4px'
  },
  '& .radio-common + label': {
    backgroundColor: '#fff',
    border: '1px solid #d4d4d4',
    height: '40px'
  },
  '& .radio-common:checked + label': {
    color: '#fff',
    backgroundColor: '#009688',
    border: '1px solid #009688'
  }
});

exports.GFlexBtn = GFlexBtn;

const GFlexStar = _glamorous.default.div({
  '& .checkbox-star': {
    display: 'none'
  },
  '& .checkbox-star:checked + label svg path': {
    fill: '#fac22e',
    stroke: '#fac22e'
  }
});

exports.GFlexStar = GFlexStar;

const NpsInputRadio = _glamorous.default.input({
  display: 'none',
  ':checked + label': {
    background: '#20a397',
    color: '#fff'
  }
});

exports.NpsInputRadio = NpsInputRadio;

const NpsRadioRating = _glamorous.default.label({
  cursor: 'pointer',
  maxHeight: '32px',
  width: '100%',
  textAlign: 'center'
});

exports.NpsRadioRating = NpsRadioRating;

const NpsRadio = _glamorous.default.label({
  fontWeight: '900',
  cursor: 'pointer',
  maxWidth: '55px',
  width: '100%',
  paddingTop: '13px',
  paddingBottom: '13px',
  textAlign: 'center',
  marginRight: '2px'
});

exports.NpsRadio = NpsRadio;

/***/ }),

/***/ "./app-v2/modules/feedback/action.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/feedback/action.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPostBookingFeedback = createPostBookingFeedback;
exports.createPostTripFeedback = createPostTripFeedback;
exports.POST_TRIP_FEEDBACK_LOAD_FAIL = exports.POST_TRIP_FEEDBACK_LOAD_SUCCESS = exports.POST_TRIP_FEEDBACK_LOAD = exports.POST_BOOKING_FEEDBACK_LOAD_FAIL = exports.POST_BOOKING_FEEDBACK_LOAD_SUCCESS = exports.POST_BOOKING_FEEDBACK_LOAD = void 0;

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const POST_BOOKING_FEEDBACK_LOAD = 'feedback/postBooking/FEEDBACK_LOAD';
exports.POST_BOOKING_FEEDBACK_LOAD = POST_BOOKING_FEEDBACK_LOAD;
const POST_BOOKING_FEEDBACK_LOAD_SUCCESS = 'agentShow/FEEDBACK_LOAD_SUCCESS';
exports.POST_BOOKING_FEEDBACK_LOAD_SUCCESS = POST_BOOKING_FEEDBACK_LOAD_SUCCESS;
const POST_BOOKING_FEEDBACK_LOAD_FAIL = 'agentShow/FEEDBACK_LOAD_FAIL';
exports.POST_BOOKING_FEEDBACK_LOAD_FAIL = POST_BOOKING_FEEDBACK_LOAD_FAIL;
const POST_TRIP_FEEDBACK_LOAD = 'feedback/postTrip/FEEDBACK_LOAD';
exports.POST_TRIP_FEEDBACK_LOAD = POST_TRIP_FEEDBACK_LOAD;
const POST_TRIP_FEEDBACK_LOAD_SUCCESS = 'feedback/postTrip/FEEDBACK_LOAD_SUCCESS';
exports.POST_TRIP_FEEDBACK_LOAD_SUCCESS = POST_TRIP_FEEDBACK_LOAD_SUCCESS;
const POST_TRIP_FEEDBACK_LOAD_FAIL = 'feedback/postTrip/FEEDBACK_LOAD_FAIL';
exports.POST_TRIP_FEEDBACK_LOAD_FAIL = POST_TRIP_FEEDBACK_LOAD_FAIL;

function createPostBookingFeedback(tripId, params) {
  const data = _objectSpread({
    _method: 'post'
  }, params, {
    hostType: _appConfig.default.apiEndpoints.postBookingFeedback.host
  });

  return {
    types: [POST_BOOKING_FEEDBACK_LOAD, POST_BOOKING_FEEDBACK_LOAD_SUCCESS, POST_BOOKING_FEEDBACK_LOAD_FAIL],
    promise: client => client.post((0, _urlHelpers.postBookingFeedbackPath)(tripId), {
      data
    }),
    withoutCamelCasing: true
  };
}

function createPostTripFeedback(tripId, params) {
  const data = _objectSpread({
    _method: 'post'
  }, params, {
    hostType: _appConfig.default.apiEndpoints.postTripFeedback.host
  });

  return {
    types: [POST_TRIP_FEEDBACK_LOAD, POST_TRIP_FEEDBACK_LOAD_SUCCESS, POST_TRIP_FEEDBACK_LOAD_FAIL],
    promise: client => client.post((0, _urlHelpers.postTripFeedbackPath)(tripId), {
      data
    }),
    withoutCamelCasing: true
  };
}

/***/ }),

/***/ "./app-v2/modules/feedback/components/Header.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/feedback/components/Header.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Header = (_temp = _class = class Header extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "pbc1 flex alignCenter pl15 pr15 pt8 pb8 fixed wfull"
    }, _react.default.createElement("div", {
      className: "pt4 pb4 flex alignCenter"
    }, _react.default.createElement(_reactRouter.Link, {
      to: '/'
    }, _react.default.createElement("span", {
      className: "input-24 block mr15"
    }, _react.default.createElement(_Icon.CloseIconWhite, null))), _react.default.createElement("p", {
      className: "f16 fw7 m0 sfcw"
    }, this.props.text)));
  }

}, _class.propTypes = {
  text: _propTypes.default.string
}, _temp);
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/components/NpsRadioInput.js":
/*!*************************************************************!*\
  !*** ./app-v2/modules/feedback/components/NpsRadioInput.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/feedback/G.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const NpsRadioInput = ({
  input,
  options,
  defaultValue,
  meta: {
    touched,
    error
  }
}) => {
  const handleChange = option => {
    input.onChange(option);
    (0, _utils.rescue)(() => {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: '',
        object: 'NPS Rating',
        cta: '',
        misc_type_1: 'NPS rating',
        misc_id_1: option
      });
    });
  };

  return _react.default.createElement("div", {
    className: "pt24 pr15 pb24 pl15"
  }, _react.default.createElement(_G.GNpsDiv, {
    className: `flex flexFull mb8 ${input.value ? 'selected' : ''}`
  }, options.map((option, index) => _react.default.createElement("span", {
    key: option,
    className: `${option === input.value ? 'npsActive' : ''}`
  }, _react.default.createElement(_G.NpsInputRadio, _extends({}, input, {
    value: option,
    id: index,
    type: "radio",
    checked: option === input.value,
    onChange: () => handleChange(option),
    className: "radioNps"
  })), _react.default.createElement(_G.NpsRadioRating, {
    htmlFor: index,
    className: "f14 fw4 pfc3 iblock"
  }, option)))), _react.default.createElement("div", {
    className: "flexFull flex spaceBetween"
  }, _react.default.createElement("span", {
    className: "f12"
  }, "Not Likely"), _react.default.createElement("span", {
    className: "f12"
  }, "Most Likely")), touched && error && _react.default.createElement("span", {
    className: "input-error-text"
  }, error));
};

NpsRadioInput.propTypes = {
  input: _propTypes.default.object,
  options: _propTypes.default.array,
  defaultValue: _propTypes.default.number,
  meta: _propTypes.default.object
};
NpsRadioInput.defaultProps = {
  options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
};
var _default = NpsRadioInput;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/components/RatingApp.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/feedback/components/RatingApp.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

__webpack_require__(/*! ./Thankyou.scss */ "./app-v2/modules/feedback/components/Thankyou.scss");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let RatingApp = (_temp2 = _class = class RatingApp extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.trackSegment = (event, section, cta) => {
      this.props.trackSegmentEvent({
        event,
        section,
        cta
      });
    }, _temp;
  }

  componentDidMount() {
    this.trackSegment(_segmentEvents.ORGANISM_VIEWED, 'App Review Popup', '');
  }

  render() {
    return _react.default.createElement("div", {
      className: "flex flexDColumn text-center pt24 pb32 sbcw rating-popup relative"
    }, _react.default.createElement("a", {
      href: "/",
      className: "rating-cross",
      onClick: () => this.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'App Review Popup', 'Close')
    }, _react.default.createElement(_Icon.CloseIcon, null)), _react.default.createElement("div", {
      className: "relative star-rating"
    }, _react.default.createElement(_Icon.RatingIcon, null)), _react.default.createElement("h3", {
      className: "fw9 f24 pt8 pb4 m0"
    }, "Please rate our App and get INR 100 cash voucher!"), _react.default.createElement("p", {
      className: "m0 f14p pb32 pl15 pr15"
    }, "Please share the screenshot of the feedback on appfeedback@traveltriangle.com"), _react.default.createElement("a", {
      className: "btn-filled-pri rating-button",
      onClick: () => this.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'App Review Popup', 'Rate Now'),
      href: "https://c.singular.net/api/v1/ad?st=900297487404&h=b0c882ade525ff53572f2586d1d9c868fc3a3eaa"
    }, "Rate Now"));
  }

}, _class.propTypes = {
  trackSegmentEvent: _propTypes.default.func
}, _temp2);
var _default = RatingApp;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/components/StarRating.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/feedback/components/StarRating.js ***!
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

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/feedback/G.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StarRating = ({
  input,
  options,
  rating,
  meta: {
    touched,
    error
  }
}) => {
  const handleChange = option => {
    input.onChange(option);
    (0, _utils.rescue)(() => {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: '',
        object: 'Star Rating',
        cta: '',
        misc_type_1: 'Section clicked',
        misc_id_1: input.name,
        misc_type_2: 'Star Rating',
        misc_id_2: option
      });
    });
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "flex ml24 pl15 mt8 flexWrap"
  }, options.map((option, index) => _react.default.createElement(_G.GFlexStar, {
    className: "mr15",
    key: index
  }, _react.default.createElement("input", _extends({}, input, {
    type: "checkbox",
    id: `${input.name}_${index}`,
    className: "checkbox-star",
    value: option,
    checked: option <= parseInt(input.value),
    onChange: () => handleChange(option)
  })), _react.default.createElement("label", {
    className: "iblock",
    htmlFor: `${input.name}_${index}`
  }, option <= parseInt(input.value) ? _react.default.createElement("div", {
    className: "input-24"
  }, _react.default.createElement(_Icon.FillStarIcon, null)) : _react.default.createElement("div", {
    className: "input-24"
  }, _react.default.createElement(_Icon.OutlineStarIcon, null)))))), touched && error && _react.default.createElement("span", {
    className: "input-error-text"
  }, error));
};

StarRating.propTypes = {
  input: _propTypes.default.object,
  options: _propTypes.default.array,
  rating: _propTypes.default.number,
  meta: _propTypes.default.object
};
StarRating.defaultProps = {
  options: ['1', '2', '3', '4', '5']
};
var _default = StarRating;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/components/TextArea.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/feedback/components/TextArea.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TextArea = ({
  input,
  placeholder,
  meta: {
    touched,
    error
  }
}) => _react.default.createElement("div", null, _react.default.createElement("textarea", _extends({}, input, {
  placeholder: placeholder,
  className: `textarea`
})), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error));

TextArea.propTypes = {
  input: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  meta: _propTypes.default.object
};
TextArea.defaultProps = {};
var _default = TextArea;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/components/ThankYou.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/feedback/components/ThankYou.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./Thankyou.scss */ "./app-v2/modules/feedback/components/Thankyou.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThankYou = () => _react.default.createElement("div", {
  className: "text-center clearfix wfull iblock pt15 pb32 sbcw at_thankyou"
}, _react.default.createElement("div", {
  className: "thank-you-animation relative"
}, _react.default.createElement("div", {
  className: "envelope-box"
}, _react.default.createElement(_Icon.EnvelopeIcon, null)), _react.default.createElement("div", {
  className: "thankyou-tick"
}, _react.default.createElement(_Icon.ThankYouTick, null))), _react.default.createElement("p", {
  className: "pfc1 fwb f24 pt24 pb4 m0"
}, "Submitted"), _react.default.createElement("p", {
  className: "m0 pfc3 f14p"
}, "Thank you for the feedback"));

var _default = ThankYou;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/components/Thankyou.scss":
/*!**********************************************************!*\
  !*** ./app-v2/modules/feedback/components/Thankyou.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"thank-you-animation": "_1qh5w",
	"envelope-box": "_2GxVx",
	"thankyou-tick": "_E0ZxL",
	"fadeInTick": "_18iko",
	"animation-bar": "_1L_B5",
	"animation-bar-inner": "_275_0",
	"animateWidth": "_Doy7O",
	"star-rating": "_1cpBc",
	"rating-popup": "_2ulpu",
	"rating-button": "_1-j70",
	"rating-cross": "_3RoyZ"
};

/***/ }),

/***/ "./app-v2/modules/feedback/constants.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/feedback/constants.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN_NPS_FOR_RATING = exports.SLIDER2 = exports.SLIDER1 = void 0;
const SLIDER1 = 1;
exports.SLIDER1 = SLIDER1;
const SLIDER2 = 2;
exports.SLIDER2 = SLIDER2;
const MIN_NPS_FOR_RATING = 7;
exports.MIN_NPS_FOR_RATING = MIN_NPS_FOR_RATING;

/***/ }),

/***/ "./app-v2/modules/feedback/reducer.js":
/*!********************************************!*\
  !*** ./app-v2/modules/feedback/reducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/feedback/action.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  submitted: false,
  submitting: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action.POST_TRIP_FEEDBACK_LOAD:
    case _action.POST_BOOKING_FEEDBACK_LOAD:
      {
        return _objectSpread({}, state, {
          submitted: false,
          submitting: true
        });
      }

    case _action.POST_TRIP_FEEDBACK_LOAD_SUCCESS:
    case _action.POST_BOOKING_FEEDBACK_LOAD_SUCCESS:
      {
        return _objectSpread({}, state, {
          submitted: true,
          submitting: false
        });
      }

    case _action.POST_TRIP_FEEDBACK_LOAD_FAIL:
    case _action.POST_BOOKING_FEEDBACK_LOAD_FAIL:
      {
        return _objectSpread({}, state, {
          submitted: false,
          submitting: false
        });
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),

/***/ "./app-v2/modules/roster/G.js":
/*!************************************!*\
  !*** ./app-v2/modules/roster/G.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRosterDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GRosterDiv = _glamorous.default.div({
  // top: '60px',
  width: 'calc(100% - 24px)',
  left: '12px',
  top: '12px',
  zIndex: '9999',
  '& > div': {
    position: 'relative'
  },
  '& .rosterClose': {
    display: 'block',
    width: '24px',
    height: '24px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    '&:before, &:after': {
      content: '\' \'',
      position: 'absolute',
      left: '7px',
      top: '10px',
      width: '12px',
      height: '1px',
      background: '#000',
      transform: 'rotateZ(45deg)'
    },
    '&:after': {
      transform: 'rotateZ(-45deg)'
    }
  },
  '& .toaster': {
    padding: '12px',
    paddingRight: '30px',
    color: '#333',
    border: '1px solid #333',
    background: '#efefef',
    borderRadius: '4px',
    fontSize: '16px',
    '&.errorRoster': {
      color: '#cb4138',
      borderColor: '#fd5346',
      background: '#fbdbd8',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#cb4138'
      }
    },
    '&.sucessRoster': {
      color: '#268f2a',
      borderColor: '#268f2a',
      background: '#d1f6d2',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#268f2a'
      }
    },
    '&.infoRoster': {
      color: '#1a78c2',
      borderColor: '#2196f3',
      background: '#d8e8fb',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#1a78c2'
      }
    },
    '&.warningToaster': {
      color: '#3e3e3e',
      borderColor: '#fac22e',
      background: '#fbf2dc',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#3e3e3e'
      }
    }
  }
});

exports.GRosterDiv = GRosterDiv;

/***/ }),

/***/ "./app-v2/modules/roster/Roster.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/roster/Roster.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/roster/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Roster is to display messages for dynamic layouts.
 * - rosterType - String: Defines type of message. Currently we support
 * rosterSuccess, rosterError and rosterInfo
 * - text - String [optional]: Single line message for user.
 * - message - Object [optional]: For more complex messages which might contain link for user action.
 * For ex: {
 *     header: "New trip created!",
 *     message: "Please activate your email address. To resend activation mail {{send_activation_mail}}",
 *     links: [{type: 'send_activation_mail', label: 'Click here'} ]
 *   }
 * - timeout - Number [optional]: if provided, Message will disappear after timeout in milliseconds
 * - callback - Function [optional]: Callback to pass event based on which action is to be called by parent.
 *
 *  P.S. - Either rosterText or rosterMessage should be present. If both are present rosterText would have priority.
 */
let Roster = (_temp = _class = class Roster extends _react.default.Component {
  /**
   * rosterType could have two types:
   *  - sucessRoster
   *  - errorRoster
   *  - infoRoster
   */
  constructor(props) {
    super(props);
    this.state = {
      isRosterOpen: props.isRosterOpen
    };
    this.closeRoster = this.closeRoster.bind(this);
  }

  componentDidMount() {
    if (this.state.isRosterOpen) {
      this.showRoster();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isRosterOpen && nextProps.isRosterOpen) {
      this.showRoster();
    }
  }

  showRoster() {
    this.setState({
      isRosterOpen: true
    }, () => {
      if (this.props.timeout && this.props.allowTimeOut) {
        setTimeout(() => {
          this.closeRoster();
        }, this.props.timeout);
      }
    });
  }

  closeRoster() {
    this.setState({
      isRosterOpen: false
    });
    this.props.hideRoster();
  }

  render() {
    const {
      type,
      message
    } = this.props;
    return this.state.isRosterOpen && message ? _react.default.createElement(_G.GRosterDiv, {
      className: "fixed"
    }, _react.default.createElement("div", {
      className: `toaster ${type}`
    }, _react.default.createElement("div", {
      className: "container dynamicTextInherit p0"
    }, message, _react.default.createElement("span", {
      className: "rosterClose",
      onClick: this.closeRoster
    })))) : null;
  }

}, _class.propTypes = {
  type: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  timeout: _propTypes.PropTypes.number,
  isRosterOpen: _propTypes.PropTypes.bool,
  hideRoster: _propTypes.PropTypes.func.isRequired,
  allowTimeOut: _propTypes.PropTypes.bool
}, _class.defaultProps = {
  type: 'infoRoster',
  isRosterOpen: false,
  allowTimeOut: true
}, _temp);
exports.default = Roster;

/***/ }),

/***/ "./app-v2/modules/roster/index.js":
/*!****************************************!*\
  !*** ./app-v2/modules/roster/index.js ***!
  \****************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/roster/action.js");

var _Roster = _interopRequireDefault(__webpack_require__(/*! ./Roster */ "./app-v2/modules/roster/Roster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  type: state.roster.type,
  message: state.roster.message,
  isRosterOpen: state.roster.isRosterOpen,
  allowTimeOut: state.roster.allowTimeOut
}), {
  hideRoster: _action.hideRoster
})(_Roster.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/GenericModal.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/GenericModal.js ***!
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

var _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ "react-modal"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseIt = _glamorous.default.button({
  position: 'absolute',
  right: '5px',
  top: '0px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '2',
  overflow: 'hidden'
});

const CloseItLeft = _glamorous.default.button({
  position: 'fixed',
  left: '5px',
  top: '3px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '6',
  overflow: 'hidden'
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    width: '94%',
    maxWidth: '600px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};
const customStylesFullView = {
  content: {
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    top: 0,
    left: 0,
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    paddingTop: '50px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  }
};
let ModalComponent = (_temp = _class = class ModalComponent extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.state.isOpen && nextProps.isOpen) {
      this.openModal();
    }

    if (this.state.isOpen && nextProps.customCloseTrigger) {
      this.closeModal();
    }
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });

    if (this.props.onRequestCloseCustom) {
      this.props.onRequestCloseCustom();
    }

    document.body.style.overflow = '';
  }

  afterOpenModal() {
    this.props.onAfterModalOpen();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    this.closeModal();
  }

  render() {
    const {
      fullView,
      hasCustomClose,
      hasNoClose,
      isWhiteIcon,
      isTriggerFullView,
      customClass
    } = this.props;
    return _react.default.createElement("div", {
      className: isTriggerFullView ? 'wfull' : ''
    }, !this.props.isOpen ? _react.default.createElement("span", {
      className: "block wfull",
      onClick: this.openModal
    }, this.props.trigger) : null, _react.default.createElement(_reactModal.default, {
      isOpen: this.state.isOpen,
      onAfterOpen: this.afterOpenModal,
      onRequestClose: this.closeModal,
      style: fullView ? customStylesFullView : customStyles,
      contentLabel: "Travel Triangle Modal",
      ariaHideApp: false,
      shouldCloseOnOverlayClick: true,
      className: customClass
    }, hasCustomClose ? _react.default.createElement(CloseItLeft, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })) : _react.default.createElement(CloseIt, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })), this.props.children));
  }

}, _class.propTypes = {
  trigger: _propTypes.default.node,
  children: _propTypes.default.node.isRequired,
  onAfterModalOpen: _propTypes.default.func,
  onRequestCloseCustom: _propTypes.default.func,
  customCloseTrigger: _propTypes.default.bool,
  fullView: _propTypes.default.bool,
  hasCustomClose: _propTypes.default.bool,
  hasNoClose: _propTypes.default.bool,
  isWhiteIcon: _propTypes.default.bool,
  isTriggerFullView: _propTypes.default.bool,
  customClass: _propTypes.default.string
}, _class.defaultProps = {
  onAfterModalOpen: () => {},
  onRequestCloseCustom: () => {},
  customCloseTrigger: false,
  trigger: _react.default.createElement("button", null, "Please supply a custom trigger component"),
  fullView: false,
  hasCustomClose: false,
  hasNoClose: false,
  isWhiteIcon: false,
  isTriggerFullView: false,
  customClass: ''
}, _temp);
var _default = ModalComponent;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9HLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZlZWRiYWNrL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL05wc1JhZGlvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svY29tcG9uZW50cy9SYXRpbmdBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svY29tcG9uZW50cy9TdGFyUmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZlZWRiYWNrL2NvbXBvbmVudHMvVGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svY29tcG9uZW50cy9UaGFua1lvdS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL1RoYW5reW91LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZlZWRiYWNrL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcm9zdGVyL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcm9zdGVyL1Jvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yb3N0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbC5qcyJdLCJuYW1lcyI6WyJHTnBzRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwiZmxleCIsImJvcmRlciIsImJhY2tncm91bmQiLCJib3JkZXJSaWdodENvbG9yIiwiY29sb3IiLCJtaW5IZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJib3JkZXJDb2xvciIsImJvcmRlckxlZnRDb2xvciIsIkdGbGV4QnRuIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJHRmxleFN0YXIiLCJkaXNwbGF5IiwiZmlsbCIsInN0cm9rZSIsIk5wc0lucHV0UmFkaW8iLCJpbnB1dCIsIk5wc1JhZGlvUmF0aW5nIiwibGFiZWwiLCJjdXJzb3IiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsIk5wc1JhZGlvIiwiZm9udFdlaWdodCIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5SaWdodCIsIlBPU1RfQk9PS0lOR19GRUVEQkFDS19MT0FEIiwiUE9TVF9CT09LSU5HX0ZFRURCQUNLX0xPQURfU1VDQ0VTUyIsIlBPU1RfQk9PS0lOR19GRUVEQkFDS19MT0FEX0ZBSUwiLCJQT1NUX1RSSVBfRkVFREJBQ0tfTE9BRCIsIlBPU1RfVFJJUF9GRUVEQkFDS19MT0FEX1NVQ0NFU1MiLCJQT1NUX1RSSVBfRkVFREJBQ0tfTE9BRF9GQUlMIiwiY3JlYXRlUG9zdEJvb2tpbmdGZWVkYmFjayIsInRyaXBJZCIsInBhcmFtcyIsImRhdGEiLCJfbWV0aG9kIiwiaG9zdFR5cGUiLCJjb25maWciLCJhcGlFbmRwb2ludHMiLCJwb3N0Qm9va2luZ0ZlZWRiYWNrIiwiaG9zdCIsInR5cGVzIiwicHJvbWlzZSIsImNsaWVudCIsInBvc3QiLCJ3aXRob3V0Q2FtZWxDYXNpbmciLCJjcmVhdGVQb3N0VHJpcEZlZWRiYWNrIiwicG9zdFRyaXBGZWVkYmFjayIsIkhlYWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIk5wc1JhZGlvSW5wdXQiLCJvcHRpb25zIiwiZGVmYXVsdFZhbHVlIiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsIm9wdGlvbiIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJPUkdBTklTTV9DTElDS0VEIiwic2VjdGlvbiIsIm9iamVjdCIsImN0YSIsIm1pc2NfdHlwZV8xIiwibWlzY19pZF8xIiwidmFsdWUiLCJtYXAiLCJpbmRleCIsImFycmF5IiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwiUmF0aW5nQXBwIiwidHJhY2tTZWdtZW50IiwidHJhY2tTZWdtZW50RXZlbnQiLCJjb21wb25lbnREaWRNb3VudCIsIk9SR0FOSVNNX1ZJRVdFRCIsImZ1bmMiLCJTdGFyUmF0aW5nIiwicmF0aW5nIiwibmFtZSIsIm1pc2NfdHlwZV8yIiwibWlzY19pZF8yIiwicGFyc2VJbnQiLCJUZXh0QXJlYSIsInBsYWNlaG9sZGVyIiwiVGhhbmtZb3UiLCJTTElERVIxIiwiU0xJREVSMiIsIk1JTl9OUFNfRk9SX1JBVElORyIsImluaXRpYWxTdGF0ZSIsInN1Ym1pdHRlZCIsInN1Ym1pdHRpbmciLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiR1Jvc3RlckRpdiIsImxlZnQiLCJ0b3AiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY29udGVudCIsInRyYW5zZm9ybSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJSb3N0ZXIiLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwiaXNSb3N0ZXJPcGVuIiwiY2xvc2VSb3N0ZXIiLCJiaW5kIiwic2hvd1Jvc3RlciIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJ0aW1lb3V0IiwiYWxsb3dUaW1lT3V0Iiwic2V0VGltZW91dCIsImhpZGVSb3N0ZXIiLCJtZXNzYWdlIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJyb3N0ZXIiLCJDbG9zZUl0IiwiYnV0dG9uIiwib3ZlcmZsb3ciLCJDbG9zZUl0TGVmdCIsImN1c3RvbVN0eWxlcyIsImJvdHRvbSIsIm92ZXJsYXkiLCJjdXN0b21TdHlsZXNGdWxsVmlldyIsIk1vZGFsQ29tcG9uZW50IiwiaXNPcGVuIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImFmdGVyT3Blbk1vZGFsIiwiY3VzdG9tQ2xvc2VUcmlnZ2VyIiwib25SZXF1ZXN0Q2xvc2VDdXN0b20iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm9uQWZ0ZXJNb2RhbE9wZW4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImZ1bGxWaWV3IiwiaGFzQ3VzdG9tQ2xvc2UiLCJoYXNOb0Nsb3NlIiwiaXNXaGl0ZUljb24iLCJpc1RyaWdnZXJGdWxsVmlldyIsImN1c3RvbUNsYXNzIiwidHJpZ2dlciIsImNoaWxkcmVuIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsVUFBVUMsbUJBQVVDLEdBQVYsQ0FBYztBQUNuQyxZQUFVO0FBQ1JDLFVBQU0sQ0FERTtBQUVSLGtEQUE4QztBQUM1Q0MsY0FBUSxtQkFEb0M7QUFFNUNDLGtCQUFZLFNBRmdDO0FBRzVDQyx3QkFBa0I7QUFIMEIsS0FGdEM7QUFPUiw0QkFBd0I7QUFDdEJGLGNBQVEsbUJBRGM7QUFFdEJDLGtCQUFZLFNBRlU7QUFHdEJDLHdCQUFrQjtBQUhJLEtBUGhCO0FBWVIsNkJBQXlCO0FBQ3ZCRixjQUFRLG1CQURlO0FBRXZCQyxrQkFBWSxTQUZXO0FBR3ZCQyx3QkFBa0I7QUFISztBQVpqQixHQUR5QjtBQW1CbkMsa0JBQWdCO0FBQ2RELGdCQUFZLFNBREU7QUFFZEQsWUFBUSxtQkFGTTtBQUdkRyxXQUFPLFNBSE87QUFJZEMsZUFBVyxNQUpHO0FBS2RDLGNBQVUsTUFMSTtBQU1kQyxnQkFBWSxNQU5FO0FBT2RDLGVBQVcsUUFQRztBQVFkTCxzQkFBa0I7QUFSSixHQW5CbUI7QUE2Qm5DLDJCQUF5QjtBQUN2QkQsZ0JBQVksU0FEVztBQUV2QkUsV0FBTyxTQUZnQjtBQUd2QkssaUJBQWEsU0FIVTtBQUl2Qk4sc0JBQWtCO0FBSkssR0E3QlU7QUFtQ25DLDhHQUE0RztBQUMxR08scUJBQWlCO0FBRHlGLEdBbkN6RTtBQXNDbkMseURBQXVEO0FBQ3JEQSxxQkFBaUI7QUFEb0MsR0F0Q3BCO0FBeUNuQyw0Q0FBMEM7QUFDeENBLHFCQUFpQjtBQUR1QixHQXpDUDtBQTRDbkMsMkJBQXlCO0FBQ3ZCUixnQkFBWSxTQURXO0FBRXZCRSxXQUFPLFNBRmdCO0FBR3ZCSyxpQkFBYSxTQUhVO0FBSXZCTixzQkFBa0I7QUFKSyxHQTVDVTtBQWtEbkMseUNBQXVDO0FBQ3JDQSxzQkFBa0I7QUFEbUIsR0FsREo7QUFxRG5DLCtDQUE2QztBQUMzQ0QsZ0JBQVksU0FEK0I7QUFFM0NPLGlCQUFhLFNBRjhCO0FBRzNDTCxXQUFPO0FBSG9DLEdBckRWO0FBMERuQyxvSEFBa0g7QUFDaEhGLGdCQUFZLFNBRG9HO0FBRWhITyxpQkFBYTtBQUZtRyxHQTFEL0U7QUE4RG5DLHFIQUFtSDtBQUNqSFAsZ0JBQVksU0FEcUc7QUFFakhPLGlCQUFhO0FBRm9HO0FBOURoRixDQUFkLENBQWhCOzs7O0FBb0VBLE1BQU1FLFdBQVdiLG1CQUFVQyxHQUFWLENBQWM7QUFDcENDLFFBQU0sU0FEOEI7QUFFcEMsc0JBQW9CO0FBQ2xCWSxrQkFBYztBQURJLEdBRmdCO0FBS3BDLHVCQUFxQjtBQUNuQkMsaUJBQWE7QUFETSxHQUxlO0FBUXBDLDZCQUEyQjtBQUN6QkMscUJBQWlCLE1BRFE7QUFFekJiLFlBQVEsbUJBRmlCO0FBR3pCYyxZQUFRO0FBSGlCLEdBUlM7QUFhcEMscUNBQW1DO0FBQ2pDWCxXQUFPLE1BRDBCO0FBRWpDVSxxQkFBaUIsU0FGZ0I7QUFHakNiLFlBQVE7QUFIeUI7QUFiQyxDQUFkLENBQWpCOzs7O0FBb0JBLE1BQU1lLFlBQVlsQixtQkFBVUMsR0FBVixDQUFjO0FBQ3JDLHNCQUFvQjtBQUNsQmtCLGFBQVM7QUFEUyxHQURpQjtBQUlyQywrQ0FBNkM7QUFDM0NDLFVBQU0sU0FEcUM7QUFFM0NDLFlBQVE7QUFGbUM7QUFKUixDQUFkLENBQWxCOzs7O0FBVUEsTUFBTUMsZ0JBQWdCdEIsbUJBQVV1QixLQUFWLENBQWdCO0FBQzNDSixXQUFTLE1BRGtDO0FBRTNDLHNCQUFvQjtBQUNsQmYsZ0JBQVksU0FETTtBQUVsQkUsV0FBTztBQUZXO0FBRnVCLENBQWhCLENBQXRCOzs7O0FBUUEsTUFBTWtCLGlCQUFpQnhCLG1CQUFVeUIsS0FBVixDQUFnQjtBQUM1Q0MsVUFBUSxTQURvQztBQUU1Q0MsYUFBVyxNQUZpQztBQUc1Q0MsU0FBTyxNQUhxQztBQUk1Q2xCLGFBQVc7QUFKaUMsQ0FBaEIsQ0FBdkI7Ozs7QUFPQSxNQUFNbUIsV0FBVzdCLG1CQUFVeUIsS0FBVixDQUFnQjtBQUN0Q0ssY0FBWSxLQUQwQjtBQUV0Q0osVUFBUSxTQUY4QjtBQUd0Q0ssWUFBVSxNQUg0QjtBQUl0Q0gsU0FBTyxNQUorQjtBQUt0Q0ksY0FBWSxNQUwwQjtBQU10Q0MsaUJBQWUsTUFOdUI7QUFPdEN2QixhQUFXLFFBUDJCO0FBUXRDd0IsZUFBYTtBQVJ5QixDQUFoQixDQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSFA7O0FBQ0E7Ozs7Ozs7O0FBRU8sTUFBTUMsNkJBQTZCLG9DQUFuQzs7QUFDQSxNQUFNQyxxQ0FBcUMsaUNBQTNDOztBQUNBLE1BQU1DLGtDQUFrQyw4QkFBeEM7O0FBRUEsTUFBTUMsMEJBQTBCLGlDQUFoQzs7QUFDQSxNQUFNQyxrQ0FBa0MseUNBQXhDOztBQUNBLE1BQU1DLCtCQUErQixzQ0FBckM7OztBQUVBLFNBQVNDLHlCQUFULENBQW1DQyxNQUFuQyxFQUEyQ0MsTUFBM0MsRUFBbUQ7QUFDeEQsUUFBTUM7QUFDSkMsYUFBUztBQURMLEtBRURGLE1BRkM7QUFHSkcsY0FBVUMsbUJBQU9DLFlBQVAsQ0FBb0JDLG1CQUFwQixDQUF3Q0M7QUFIOUMsSUFBTjs7QUFLQSxTQUFPO0FBQ0xDLFdBQU8sQ0FBQ2hCLDBCQUFELEVBQTZCQyxrQ0FBN0IsRUFBaUVDLCtCQUFqRSxDQURGO0FBRUxlLGFBQVNDLFVBQVVBLE9BQU9DLElBQVAsQ0FBWSx5Q0FBd0JaLE1BQXhCLENBQVosRUFBNkM7QUFBRUU7QUFBRixLQUE3QyxDQUZkO0FBR0xXLHdCQUFvQjtBQUhmLEdBQVA7QUFLRDs7QUFFTSxTQUFTQyxzQkFBVCxDQUFnQ2QsTUFBaEMsRUFBd0NDLE1BQXhDLEVBQWdEO0FBQ3JELFFBQU1DO0FBQ0pDLGFBQVM7QUFETCxLQUVERixNQUZDO0FBR0pHLGNBQVVDLG1CQUFPQyxZQUFQLENBQW9CUyxnQkFBcEIsQ0FBcUNQO0FBSDNDLElBQU47O0FBS0EsU0FBTztBQUNMQyxXQUFPLENBQUNiLHVCQUFELEVBQTBCQywrQkFBMUIsRUFBMkRDLDRCQUEzRCxDQURGO0FBRUxZLGFBQVNDLFVBQVVBLE9BQU9DLElBQVAsQ0FBWSxzQ0FBcUJaLE1BQXJCLENBQVosRUFBMEM7QUFBRUU7QUFBRixLQUExQyxDQUZkO0FBR0xXLHdCQUFvQjtBQUhmLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNEOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztJQUVNRyxNLHFCQUFOLE1BQU1BLE1BQU4sU0FBcUJDLGdCQUFyQixDQUErQjtBQUs3QkMsV0FBUztBQUNQLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsaUJBQUQ7QUFBTSxVQUFJO0FBQVYsT0FDRTtBQUFNLGlCQUFVO0FBQWhCLE9BQXNDLDZCQUFDLG9CQUFELE9BQXRDLENBREYsQ0FERixFQUlFO0FBQUcsaUJBQVU7QUFBYixPQUFnQyxLQUFLQyxLQUFMLENBQVdDLElBQTNDLENBSkYsQ0FERixDQURGO0FBVUQ7O0FBaEI0QixDLFNBQ3RCQyxTLEdBQVk7QUFDakJELFFBQU1FLG1CQUFVQztBQURDLEM7ZUFrQk5QLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNUSxnQkFBZ0IsQ0FBQztBQUFFM0MsT0FBRjtBQUFTNEMsU0FBVDtBQUFrQkMsY0FBbEI7QUFBZ0NDLFFBQU07QUFBRUMsV0FBRjtBQUFXQztBQUFYO0FBQXRDLENBQUQsS0FBZ0U7QUFFcEYsUUFBTUMsZUFBZ0JDLE1BQUQsSUFBWTtBQUMvQmxELFVBQU1tRCxRQUFOLENBQWVELE1BQWY7QUFDQSx1QkFBTyxNQUFNO0FBQ1gsdUNBQWE7QUFDWEUsZUFBT0MsK0JBREk7QUFFWEMsaUJBQVMsRUFGRTtBQUdYQyxnQkFBTyxZQUhJO0FBSVhDLGFBQUssRUFKTTtBQUtYQyxxQkFBWSxZQUxEO0FBTVhDLG1CQUFXUjtBQU5BLE9BQWI7QUFRRCxLQVREO0FBVUQsR0FaRDs7QUFhQSxTQUFRO0FBQUssZUFBVTtBQUFmLEtBQ04sNkJBQUMsVUFBRDtBQUFTLGVBQVkscUJBQW9CbEQsTUFBTTJELEtBQU4sR0FBYyxVQUFkLEdBQTJCLEVBQUc7QUFBdkUsS0FDR2YsUUFBUWdCLEdBQVIsQ0FBWSxDQUFDVixNQUFELEVBQVNXLEtBQVQsS0FDWDtBQUFNLFNBQUtYLE1BQVg7QUFBbUIsZUFBWSxHQUFFQSxXQUFXbEQsTUFBTTJELEtBQWpCLEdBQXlCLFdBQXpCLEdBQXVDLEVBQUc7QUFBM0UsS0FDRSw2QkFBQyxnQkFBRCxlQUFtQjNELEtBQW5CO0FBQTBCLFdBQU9rRCxNQUFqQztBQUF5QyxRQUFJVyxLQUE3QztBQUFvRCxVQUFLLE9BQXpEO0FBQWlFLGFBQVNYLFdBQVdsRCxNQUFNMkQsS0FBM0Y7QUFDZSxjQUFVLE1BQU1WLGFBQWFDLE1BQWIsQ0FEL0I7QUFDcUQsZUFBVTtBQUQvRCxLQURGLEVBR0UsNkJBQUMsaUJBQUQ7QUFBZ0IsYUFBU1csS0FBekI7QUFBZ0MsZUFBVTtBQUExQyxLQUFpRVgsTUFBakUsQ0FIRixDQURELENBREgsQ0FETSxFQVVOO0FBQUssZUFBVTtBQUFmLEtBQ0U7QUFBTSxlQUFVO0FBQWhCLGtCQURGLEVBRUU7QUFBTSxlQUFVO0FBQWhCLG1CQUZGLENBVk0sRUFlSkgsV0FDQ0MsU0FBUztBQUFNLGVBQVU7QUFBaEIsS0FBb0NBLEtBQXBDLENBaEJOLENBQVI7QUFtQkQsQ0FsQ0Q7O0FBb0NBTCxjQUFjSCxTQUFkLEdBQTBCO0FBQ3hCeEMsU0FBT3lDLG1CQUFVYyxNQURPO0FBRXhCWCxXQUFTSCxtQkFBVXFCLEtBRks7QUFHeEJqQixnQkFBY0osbUJBQVVzQixNQUhBO0FBSXhCakIsUUFBTUwsbUJBQVVjO0FBSlEsQ0FBMUI7QUFPQVosY0FBY3FCLFlBQWQsR0FBNkI7QUFDM0JwQixXQUFTLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLElBQTlDO0FBRGtCLENBQTdCO2VBSWVELGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERmOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVNc0IsUyxzQkFBTixNQUFNQSxTQUFOLFNBQXdCN0IsZ0JBQXhCLENBQWtDO0FBQUE7QUFBQTs7QUFBQSx3Q0FVaEM4QixZQVZnQyxHQVVqQixDQUFDZCxLQUFELEVBQVFFLE9BQVIsRUFBaUJFLEdBQWpCLEtBQXlCO0FBQ3RDLFdBQUtsQixLQUFMLENBQVc2QixpQkFBWCxDQUE2QjtBQUMzQmYsYUFEMkI7QUFFM0JFLGVBRjJCO0FBRzNCRTtBQUgyQixPQUE3QjtBQUtELEtBaEIrQjtBQUFBOztBQU1oQ1ksc0JBQW9CO0FBQ2xCLFNBQUtGLFlBQUwsQ0FBa0JHLDhCQUFsQixFQUFtQyxrQkFBbkMsRUFBdUQsRUFBdkQ7QUFDRDs7QUFVRGhDLFdBQVM7QUFDUCxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUcsWUFBSyxHQUFSO0FBQVksaUJBQVUsY0FBdEI7QUFBcUMsZUFBUyxNQUFNLEtBQUs2QixZQUFMLENBQWtCYiwrQkFBbEIsRUFBb0Msa0JBQXBDLEVBQXdELE9BQXhEO0FBQXBELE9BQXNILDZCQUFDLGVBQUQsT0FBdEgsQ0FERixFQUVFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLGdCQUFELE9BREYsQ0FGRixFQUtFO0FBQUksaUJBQVU7QUFBZCwyREFMRixFQU1FO0FBQUcsaUJBQVU7QUFBYix1RkFORixFQVFFO0FBQUcsaUJBQVUsOEJBQWI7QUFDRyxlQUFTLE1BQU0sS0FBS2EsWUFBTCxDQUFrQmIsK0JBQWxCLEVBQW9DLGtCQUFwQyxFQUF3RCxVQUF4RCxDQURsQjtBQUVHLFlBQUs7QUFGUixrQkFSRixDQURGO0FBZUQ7O0FBbEMrQixDLFNBRXpCYixTLEdBQVk7QUFDakIyQixxQkFBbUIxQixtQkFBVTZCO0FBRFosQztlQW1DTkwsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q2Y7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1NLGFBQWEsQ0FBQztBQUFFdkUsT0FBRjtBQUFTNEMsU0FBVDtBQUFrQjRCLFFBQWxCO0FBQTBCMUIsUUFBTTtBQUFFQyxXQUFGO0FBQVdDO0FBQVg7QUFBaEMsQ0FBRCxLQUEwRDtBQUUzRSxRQUFNQyxlQUFnQkMsTUFBRCxJQUFZO0FBQy9CbEQsVUFBTW1ELFFBQU4sQ0FBZUQsTUFBZjtBQUNBLHVCQUFPLE1BQU07QUFDWCx1Q0FBYTtBQUNYRSxlQUFPQywrQkFESTtBQUVYQyxpQkFBUyxFQUZFO0FBR1hDLGdCQUFPLGFBSEk7QUFJWEMsYUFBSyxFQUpNO0FBS1hDLHFCQUFZLGlCQUxEO0FBTVhDLG1CQUFXMUQsTUFBTXlFLElBTk47QUFPWEMscUJBQVksYUFQRDtBQVFYQyxtQkFBV3pCO0FBUkEsT0FBYjtBQVVELEtBWEQ7QUFZRCxHQWREOztBQWdCQSxTQUFRLDBDQUNOO0FBQUssZUFBVTtBQUFmLEtBRUlOLFFBQVFnQixHQUFSLENBQVksQ0FBQ1YsTUFBRCxFQUFTVyxLQUFULEtBQ1YsNkJBQUMsWUFBRDtBQUFXLGVBQVUsTUFBckI7QUFBNEIsU0FBS0E7QUFBakMsS0FDRSxtREFBVzdELEtBQVg7QUFBa0IsVUFBSyxVQUF2QjtBQUFrQyxRQUFLLEdBQUVBLE1BQU15RSxJQUFLLElBQUdaLEtBQU0sRUFBN0Q7QUFBZ0UsZUFBVSxlQUExRTtBQUNPLFdBQU9YLE1BRGQ7QUFDc0IsYUFBU0EsVUFBVTBCLFNBQVM1RSxNQUFNMkQsS0FBZixDQUR6QztBQUVPLGNBQVUsTUFBTVYsYUFBYUMsTUFBYjtBQUZ2QixLQURGLEVBSUU7QUFBTyxlQUFVLFFBQWpCO0FBQTBCLGFBQVUsR0FBRWxELE1BQU15RSxJQUFLLElBQUdaLEtBQU07QUFBMUQsS0FFS1gsVUFBVTBCLFNBQVM1RSxNQUFNMkQsS0FBZixDQUFYLEdBQ0k7QUFBSyxlQUFVO0FBQWYsS0FBMEIsNkJBQUMsa0JBQUQsT0FBMUIsQ0FESixHQUVJO0FBQUssZUFBVTtBQUFmLEtBQTBCLDZCQUFDLHFCQUFELE9BQTFCLENBSlIsQ0FKRixDQURGLENBRkosQ0FETSxFQW9CSlosV0FDQ0MsU0FBUztBQUFNLGVBQVU7QUFBaEIsS0FBb0NBLEtBQXBDLENBckJOLENBQVI7QUF3QkQsQ0ExQ0Q7O0FBNENBdUIsV0FBVy9CLFNBQVgsR0FBdUI7QUFDckJ4QyxTQUFPeUMsbUJBQVVjLE1BREk7QUFFckJYLFdBQVNILG1CQUFVcUIsS0FGRTtBQUdyQlUsVUFBUS9CLG1CQUFVc0IsTUFIRztBQUlyQmpCLFFBQU1MLG1CQUFVYztBQUpLLENBQXZCO0FBT0FnQixXQUFXUCxZQUFYLEdBQTBCO0FBQ3hCcEIsV0FBUyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQjtBQURlLENBQTFCO2VBSWUyQixVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFZjs7QUFDQTs7Ozs7O0FBRUEsTUFBTU0sV0FBVyxDQUFDO0FBQUU3RSxPQUFGO0FBQVM4RSxhQUFUO0FBQXNCaEMsUUFBTTtBQUFFQyxXQUFGO0FBQVdDO0FBQVg7QUFBNUIsQ0FBRCxLQUNmLDBDQUNFLHNEQUFjaEQsS0FBZDtBQUNVLGVBQWE4RSxXQUR2QjtBQUVVLGFBQVk7QUFGdEIsR0FERixFQUtJL0IsV0FDQ0MsU0FBUztBQUFNLGFBQVU7QUFBaEIsR0FBb0NBLEtBQXBDLENBTmQsQ0FERjs7QUFZQTZCLFNBQVNyQyxTQUFULEdBQXFCO0FBQ25CeEMsU0FBT3lDLG1CQUFVYyxNQURFO0FBRW5CdUIsZUFBYXJDLG1CQUFVQyxNQUZKO0FBR25CSSxRQUFNTCxtQkFBVWM7QUFIRyxDQUFyQjtBQU1Bc0IsU0FBU2IsWUFBVCxHQUF3QixFQUF4QjtlQUVlYSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZjs7QUFFQTs7QUFFQTs7OztBQUtBLE1BQU1FLFdBQVcsTUFDZjtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FBOEIsNkJBQUMsa0JBQUQsT0FBOUIsQ0FERixFQUVFO0FBQUssYUFBVTtBQUFmLEdBQStCLDZCQUFDLGtCQUFELE9BQS9CLENBRkYsQ0FERixFQUtFO0FBQUcsYUFBVTtBQUFiLGVBTEYsRUFNRTtBQUFHLGFBQVU7QUFBYixnQ0FORixDQURGOztlQVdlQSxROzs7Ozs7Ozs7Ozs7QUNwQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk8sTUFBTUMsVUFBVSxDQUFoQjs7QUFDQSxNQUFNQyxVQUFVLENBQWhCOztBQUNBLE1BQU1DLHFCQUFxQixDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7Ozs7O0FBU0EsTUFBTUMsZUFBZTtBQUNuQkMsYUFBVyxLQURRO0FBRW5CQyxjQUFZO0FBRk8sQ0FBckI7O0FBS2UsU0FBU0MsT0FBVCxDQUFpQkMsUUFBUUosWUFBekIsRUFBdUNLLE1BQXZDLEVBQStDO0FBQzVELFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLMUUsK0JBQUw7QUFDQSxTQUFLSCxrQ0FBTDtBQUFpQztBQUMvQixpQ0FDSzJFLEtBREw7QUFFRUgscUJBQVcsS0FGYjtBQUdFQyxzQkFBWTtBQUhkO0FBS0Q7O0FBQ0QsU0FBS3JFLHVDQUFMO0FBQ0EsU0FBS0gsMENBQUw7QUFBeUM7QUFDdkMsaUNBQ0swRSxLQURMO0FBRUVILHFCQUFXLElBRmI7QUFHRUMsc0JBQVk7QUFIZDtBQUtEOztBQUNELFNBQUtwRSxvQ0FBTDtBQUNBLFNBQUtILHVDQUFMO0FBQXNDO0FBQ3BDLGlDQUNLeUUsS0FETDtBQUVFSCxxQkFBVyxLQUZiO0FBR0VDLHNCQUFZO0FBSGQ7QUFLRDs7QUFDRDtBQUFTO0FBQ1AsZUFBT0UsS0FBUDtBQUNEO0FBM0JIO0FBNkJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7Ozs7QUFEQTtBQUdPLE1BQU1HLGFBQWFqSCxtQkFBVUMsR0FBVixDQUFjO0FBQ3RDO0FBQ0EyQixTQUFPLG1CQUYrQjtBQUd0Q3NGLFFBQU0sTUFIZ0M7QUFJdENDLE9BQUssTUFKaUM7QUFLdENDLFVBQVEsTUFMOEI7QUFNdEMsYUFBVztBQUNUQyxjQUFVO0FBREQsR0FOMkI7QUFTdEMsb0JBQWtCO0FBQ2hCbEcsYUFBUyxPQURPO0FBRWhCUyxXQUFNLE1BRlU7QUFHaEJYLFlBQU8sTUFIUztBQUloQm9HLGNBQVMsVUFKTztBQUtoQkMsV0FBTSxLQUxVO0FBTWhCSCxTQUFJLEtBTlk7QUFPaEJ6RixZQUFRLFNBUFE7QUFRaEIseUJBQXNCO0FBQ3BCNkYsZUFBUyxPQURXO0FBRXBCRixnQkFBVSxVQUZVO0FBR3BCSCxZQUFNLEtBSGM7QUFJcEJDLFdBQUssTUFKZTtBQUtwQnZGLGFBQU0sTUFMYztBQU1wQlgsY0FBTyxLQU5hO0FBT3BCYixrQkFBVyxNQVBTO0FBUXBCb0gsaUJBQVc7QUFSUyxLQVJOO0FBa0JoQixlQUFZO0FBQ1ZBLGlCQUFXO0FBREQ7QUFsQkksR0FUb0I7QUErQnRDLGdCQUFjO0FBQ1pDLGFBQVMsTUFERztBQUVaM0csa0JBQWMsTUFGRjtBQUdaUixXQUFPLE1BSEs7QUFJWkgsWUFBUSxnQkFKSTtBQUtaQyxnQkFBWSxTQUxBO0FBTVpzSCxrQkFBYyxLQU5GO0FBT1psSCxjQUFVLE1BUEU7QUFRWixxQkFBaUI7QUFDZkYsYUFBTyxTQURRO0FBRWZLLG1CQUFhLFNBRkU7QUFHZlAsa0JBQVksU0FIRztBQUlmLHFEQUErQztBQUM3Q0Esb0JBQVk7QUFEaUM7QUFKaEMsS0FSTDtBQWdCWixzQkFBa0I7QUFDaEJFLGFBQU8sU0FEUztBQUVoQkssbUJBQWEsU0FGRztBQUdoQlAsa0JBQVksU0FISTtBQUloQixxREFBZ0Q7QUFDOUNBLG9CQUFXO0FBRG1DO0FBSmhDLEtBaEJOO0FBd0JaLG9CQUFnQjtBQUNkRSxhQUFPLFNBRE87QUFFZEssbUJBQWEsU0FGQztBQUdkUCxrQkFBWSxTQUhFO0FBSWQscURBQWdEO0FBQzlDQSxvQkFBVztBQURtQztBQUpsQyxLQXhCSjtBQWdDWix3QkFBb0I7QUFDbEJFLGFBQU8sU0FEVztBQUVsQkssbUJBQWEsU0FGSztBQUdsQlAsa0JBQVksU0FITTtBQUlsQixxREFBZ0Q7QUFDOUNBLG9CQUFXO0FBRG1DO0FBSjlCO0FBaENSO0FBL0J3QixDQUFkLENBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQnFCdUgsTSxxQkFBTixNQUFNQSxNQUFOLFNBQXFCQyxlQUFNakUsU0FBM0IsQ0FBcUM7QUFVbEQ7Ozs7OztBQVlBa0UsY0FBWWhFLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtpRCxLQUFMLEdBQWE7QUFDWGdCLG9CQUFjakUsTUFBTWlFO0FBRFQsS0FBYjtBQUdBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDRDs7QUFFRHJDLHNCQUFvQjtBQUNsQixRQUFJLEtBQUttQixLQUFMLENBQVdnQixZQUFmLEVBQTZCO0FBQzNCLFdBQUtHLFVBQUw7QUFDRDtBQUNGOztBQUVEQyxtQ0FBaUNDLFNBQWpDLEVBQTRDO0FBQzFDLFFBQUksQ0FBQyxLQUFLdEUsS0FBTCxDQUFXaUUsWUFBWixJQUE0QkssVUFBVUwsWUFBMUMsRUFBd0Q7QUFDdEQsV0FBS0csVUFBTDtBQUNEO0FBQ0Y7O0FBRURBLGVBQWE7QUFDWCxTQUFLRyxRQUFMLENBQWM7QUFBRU4sb0JBQWM7QUFBaEIsS0FBZCxFQUFzQyxNQUFNO0FBQzFDLFVBQUksS0FBS2pFLEtBQUwsQ0FBV3dFLE9BQVgsSUFBc0IsS0FBS3hFLEtBQUwsQ0FBV3lFLFlBQXJDLEVBQW1EO0FBQ2pEQyxtQkFBVyxNQUFNO0FBQ2YsZUFBS1IsV0FBTDtBQUNELFNBRkQsRUFFRyxLQUFLbEUsS0FBTCxDQUFXd0UsT0FGZDtBQUdEO0FBQ0YsS0FORDtBQU9EOztBQUVETixnQkFBYztBQUNaLFNBQUtLLFFBQUwsQ0FBYztBQUFFTixvQkFBYztBQUFoQixLQUFkO0FBQ0EsU0FBS2pFLEtBQUwsQ0FBVzJFLFVBQVg7QUFDRDs7QUFFRDVFLFdBQVM7QUFDUCxVQUFNO0FBQUVvRCxVQUFGO0FBQVF5QjtBQUFSLFFBQW9CLEtBQUs1RSxLQUEvQjtBQUVBLFdBQU8sS0FBS2lELEtBQUwsQ0FBV2dCLFlBQVgsSUFBMkJXLE9BQTNCLEdBQ0wsNkJBQUMsYUFBRDtBQUFZLGlCQUFVO0FBQXRCLE9BQ0U7QUFBSyxpQkFBWSxXQUFVekIsSUFBSztBQUFoQyxPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNHeUIsT0FESCxFQUVFO0FBQU0saUJBQVUsYUFBaEI7QUFBOEIsZUFBUyxLQUFLVjtBQUE1QyxNQUZGLENBREYsQ0FERixDQURLLEdBU0gsSUFUSjtBQVVEOztBQXRFaUQsQyxTQUMzQ2hFLFMsR0FBWTtBQUNqQmlELFFBQU1oRCxxQkFBVUMsTUFEQztBQUVqQndFLFdBQVN6RSxxQkFBVUMsTUFGRjtBQUdqQm9FLFdBQVNyRSxxQkFBVXNCLE1BSEY7QUFJakJ3QyxnQkFBYzlELHFCQUFVMEUsSUFKUDtBQUtqQkYsY0FBWXhFLHFCQUFVNkIsSUFBVixDQUFlOEMsVUFMVjtBQU1qQkwsZ0JBQWN0RSxxQkFBVTBFO0FBTlAsQyxTQWVabkQsWSxHQUFlO0FBQ3BCeUIsUUFBTSxZQURjO0FBRXBCYyxnQkFBYyxLQUZNO0FBR3BCUSxnQkFBYztBQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN4Qjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztlQUVlLDZCQUFXLHlCQUN4QnhCLFVBQVU7QUFDUkUsUUFBTUYsTUFBTThCLE1BQU4sQ0FBYTVCLElBRFg7QUFFUnlCLFdBQVMzQixNQUFNOEIsTUFBTixDQUFhSCxPQUZkO0FBR1JYLGdCQUFjaEIsTUFBTThCLE1BQU4sQ0FBYWQsWUFIbkI7QUFJUlEsZ0JBQWN4QixNQUFNOEIsTUFBTixDQUFhTjtBQUpuQixDQUFWLENBRHdCLEVBT3hCO0FBQ0VFO0FBREYsQ0FQd0IsRUFVeEJiLGVBVndCLENBQVgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1rQixVQUFVN0ksbUJBQVU4SSxNQUFWLENBQWlCO0FBQy9CekIsWUFBVSxVQURxQjtBQUUvQkMsU0FBTyxLQUZ3QjtBQUcvQkgsT0FBSyxLQUgwQjtBQUkvQnZGLFNBQU8sTUFKd0I7QUFLL0JYLFVBQVEsTUFMdUI7QUFNL0J3RyxXQUFTLE1BTnNCO0FBTy9CTCxVQUFRLEdBUHVCO0FBUS9CMkIsWUFBVTtBQVJxQixDQUFqQixDQUFoQjs7QUFXQSxNQUFNQyxjQUFjaEosbUJBQVU4SSxNQUFWLENBQWlCO0FBQ25DekIsWUFBVSxPQUR5QjtBQUVuQ0gsUUFBTSxLQUY2QjtBQUduQ0MsT0FBSyxLQUg4QjtBQUluQ3ZGLFNBQU8sTUFKNEI7QUFLbkNYLFVBQVEsTUFMMkI7QUFNbkN3RyxXQUFTLE1BTjBCO0FBT25DTCxVQUFRLEdBUDJCO0FBUW5DMkIsWUFBVTtBQVJ5QixDQUFqQixDQUFwQjs7QUFVQSxNQUFNRSxlQUFlO0FBQ25CMUIsV0FBUztBQUNQSixTQUFLLEtBREU7QUFFUEQsVUFBTSxLQUZDO0FBR1BJLFdBQU8sTUFIQTtBQUlQeUIsY0FBVSxNQUpIO0FBS1BHLFlBQVEsTUFMRDtBQU1QOUIsWUFBUSxLQU5EO0FBT1BLLGFBQVMsR0FQRjtBQVFQQyxrQkFBYyxHQVJQO0FBU1A5RixXQUFPLEtBVEE7QUFVUEcsY0FBVSxPQVZIO0FBV1B5RixlQUFXO0FBWEosR0FEVTtBQWNuQjJCLFdBQVM7QUFDUDlCLGNBQVUsT0FESDtBQUVQRixTQUFLLENBRkU7QUFHUEQsVUFBTSxDQUhDO0FBSVBJLFdBQU8sQ0FKQTtBQUtQNEIsWUFBUSxDQUxEO0FBTVA5QixZQUFRLElBTkQ7QUFPUHBHLHFCQUFpQjtBQVBWO0FBZFUsQ0FBckI7QUF3QkEsTUFBTW9JLHVCQUF1QjtBQUMzQjdCLFdBQVM7QUFDUEQsV0FBTyxNQURBO0FBRVB5QixjQUFVLE1BRkg7QUFHUEcsWUFBUSxNQUhEO0FBSVA5QixZQUFRLEtBSkQ7QUFLUEssYUFBUyxHQUxGO0FBTVBOLFNBQUssQ0FORTtBQU9QRCxVQUFNLENBUEM7QUFRUFEsa0JBQWMsR0FSUDtBQVNQOUYsV0FBTyxNQVRBO0FBVVBHLGNBQVUsTUFWSDtBQVdQZCxZQUFRLE1BWEQ7QUFZUGUsZ0JBQVk7QUFaTCxHQURrQjtBQWUzQm1ILFdBQVM7QUFDUDlCLGNBQVUsT0FESDtBQUVQRixTQUFLLENBRkU7QUFHUEQsVUFBTSxDQUhDO0FBSVBJLFdBQU8sQ0FKQTtBQUtQNEIsWUFBUSxDQUxEO0FBTVA5QixZQUFRLElBTkQ7QUFPUHBHLHFCQUFpQjtBQVBWO0FBZmtCLENBQTdCO0lBMEJNcUksYyxxQkFBTixNQUFNQSxjQUFOLFNBQTZCekIsZUFBTWpFLFNBQW5DLENBQTZDO0FBK0IzQ2tFLGdCQUFjO0FBQ1o7QUFFQSxTQUFLZixLQUFMLEdBQWE7QUFDWHdDLGNBQVE7QUFERyxLQUFiO0FBSUEsU0FBS0MsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWV2QixJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0EsU0FBS3dCLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQnhCLElBQWhCLENBQXFCLElBQXJCLENBQWxCO0FBQ0EsU0FBS3lCLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQnpCLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0Q7O0FBRURFLG1DQUFpQ0MsU0FBakMsRUFBNEM7QUFDMUMsUUFBSSxDQUFDLEtBQUtyQixLQUFMLENBQVd3QyxNQUFaLElBQXNCbkIsVUFBVW1CLE1BQXBDLEVBQTRDO0FBQzFDLFdBQUtDLFNBQUw7QUFDRDs7QUFDRCxRQUFJLEtBQUt6QyxLQUFMLENBQVd3QyxNQUFYLElBQXFCbkIsVUFBVXVCLGtCQUFuQyxFQUF1RDtBQUNyRCxXQUFLRixVQUFMO0FBQ0Q7QUFDRjs7QUFFREQsY0FBWTtBQUNWLFNBQUtuQixRQUFMLENBQWM7QUFDWmtCLGNBQVE7QUFESSxLQUFkO0FBR0Q7O0FBRURFLGVBQWE7QUFDWCxTQUFLcEIsUUFBTCxDQUFjO0FBQ1prQixjQUFRO0FBREksS0FBZDs7QUFHQSxRQUFJLEtBQUt6RixLQUFMLENBQVc4RixvQkFBZixFQUFxQztBQUNuQyxXQUFLOUYsS0FBTCxDQUFXOEYsb0JBQVg7QUFDRDs7QUFDREMsYUFBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CZixRQUFwQixHQUErQixFQUEvQjtBQUNEOztBQUVEVSxtQkFBaUI7QUFDZixTQUFLNUYsS0FBTCxDQUFXa0csZ0JBQVg7QUFDQUgsYUFBU0MsSUFBVCxDQUFjQyxLQUFkLENBQW9CZixRQUFwQixHQUErQixRQUEvQjtBQUNEOztBQUVEaUIseUJBQXVCO0FBQ3JCLFNBQUtSLFVBQUw7QUFDRDs7QUFFRDVGLFdBQVM7QUFDUCxVQUFNO0FBQUVxRyxjQUFGO0FBQVlDLG9CQUFaO0FBQTRCQyxnQkFBNUI7QUFBd0NDLGlCQUF4QztBQUFxREMsdUJBQXJEO0FBQXdFQztBQUF4RSxRQUF3RixLQUFLekcsS0FBbkc7QUFDQSxXQUNFO0FBQUssaUJBQVd3RyxvQkFBb0IsT0FBcEIsR0FBNkI7QUFBN0MsT0FDRyxDQUFDLEtBQUt4RyxLQUFMLENBQVd5RixNQUFaLEdBQ0M7QUFBTSxpQkFBVSxhQUFoQjtBQUE4QixlQUFTLEtBQUtDO0FBQTVDLE9BQ0csS0FBSzFGLEtBQUwsQ0FBVzBHLE9BRGQsQ0FERCxHQUlDLElBTEosRUFPRSw2QkFBQyxtQkFBRDtBQUNFLGNBQVEsS0FBS3pELEtBQUwsQ0FBV3dDLE1BRHJCO0FBRUUsbUJBQWEsS0FBS0csY0FGcEI7QUFHRSxzQkFBZ0IsS0FBS0QsVUFIdkI7QUFJRSxhQUFPUyxXQUFXYixvQkFBWCxHQUFrQ0gsWUFKM0M7QUFLRSxvQkFBYSx1QkFMZjtBQU1FLG1CQUFhLEtBTmY7QUFPRSxpQ0FBMkIsSUFQN0I7QUFRRSxpQkFBV3FCO0FBUmIsT0FXSUosaUJBQ0UsNkJBQUMsV0FBRDtBQUFhLGVBQVMsS0FBS1YsVUFBM0I7QUFBdUMsaUJBQVksWUFBV1csYUFBYSxRQUFiLEdBQXdCLEVBQUc7QUFBekYsT0FDR0MsY0FBYyw2QkFBQyxnQkFBRDtBQUFZLGlCQUFVO0FBQXRCLE1BQWQsR0FBNkQsNkJBQUMsZUFBRDtBQUFXLGlCQUFVO0FBQXJCLE1BRGhFLENBREYsR0FJRSw2QkFBQyxPQUFEO0FBQVMsZUFBUyxLQUFLWixVQUF2QjtBQUFtQyxpQkFBWSxZQUFXVyxhQUFhLFFBQWIsR0FBd0IsRUFBRztBQUFyRixPQUNHQyxjQUFjLDZCQUFDLGdCQUFEO0FBQVksaUJBQVU7QUFBdEIsTUFBZCxHQUE2RCw2QkFBQyxlQUFEO0FBQVcsaUJBQVU7QUFBckIsTUFEaEUsQ0FmTixFQW1CRyxLQUFLdkcsS0FBTCxDQUFXMkcsUUFuQmQsQ0FQRixDQURGO0FBK0JEOztBQTlHMEMsQyxTQUVwQ3pHLFMsR0FBWTtBQUNqQndHLFdBQVN2RyxtQkFBVXlHLElBREY7QUFFakJELFlBQVV4RyxtQkFBVXlHLElBQVYsQ0FBZTlCLFVBRlI7QUFHakJvQixvQkFBa0IvRixtQkFBVTZCLElBSFg7QUFJakI4RCx3QkFBc0IzRixtQkFBVTZCLElBSmY7QUFLakI2RCxzQkFBb0IxRixtQkFBVTBFLElBTGI7QUFNakJ1QixZQUFVakcsbUJBQVUwRSxJQU5IO0FBT2pCd0Isa0JBQWdCbEcsbUJBQVUwRSxJQVBUO0FBUWpCeUIsY0FBWW5HLG1CQUFVMEUsSUFSTDtBQVNqQjBCLGVBQWFwRyxtQkFBVTBFLElBVE47QUFVakIyQixxQkFBbUJyRyxtQkFBVTBFLElBVlo7QUFXakI0QixlQUFhdEcsbUJBQVVDO0FBWE4sQyxTQWNac0IsWSxHQUFlO0FBQ3BCd0Usb0JBQWtCLE1BQU0sQ0FDdkIsQ0FGbUI7QUFHcEJKLHdCQUFzQixNQUFNLENBQzNCLENBSm1CO0FBS3BCRCxzQkFBb0IsS0FMQTtBQU1wQmEsV0FBUyx3RkFOVztBQU9wQk4sWUFBVSxLQVBVO0FBUXBCQyxrQkFBZ0IsS0FSSTtBQVNwQkMsY0FBWSxLQVRRO0FBVXBCQyxlQUFhLEtBVk87QUFXcEJDLHFCQUFtQixLQVhDO0FBWXBCQyxlQUFhO0FBWk8sQztlQWlHVGpCLGMiLCJmaWxlIjoicG9zdGJvb2tpbmctZmVlZGJhY2t+cG9zdHRyaXAtZmVlZGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2xhbW9yb3VzLCB7IElucHV0IH0gZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdOcHNEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgc3Bhbic6IHtcbiAgICBmbGV4OiAxLFxuICAgICcmOm50aC1jaGlsZCg3KSBsYWJlbCwgJjpudGgtY2hpbGQoOCkgbGFiZWwnOiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2ZhYzIyZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZhYzIyZScsXG4gICAgICBib3JkZXJSaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIH0sXG4gICAgJyY6bnRoLWNoaWxkKDkpIGxhYmVsJzoge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM0Y2FmNTAnLFxuICAgICAgYmFja2dyb3VuZDogJyM0Y2FmNTAnLFxuICAgICAgYm9yZGVyUmlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB9LFxuICAgICcmOm50aC1jaGlsZCgxMCkgbGFiZWwnOiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzRjYWY1MCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzRjYWY1MCcsXG4gICAgICBib3JkZXJSaWdodENvbG9yOiAnIzRjYWY1MCcsXG4gICAgfSxcbiAgfSxcbiAgJyYgc3BhbiBsYWJlbCc6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZlNTI0NicsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZTUyNDYnLFxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBib3JkZXJSaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICB9LFxuICAnJi5zZWxlY3RlZCBzcGFuIGxhYmVsJzoge1xuICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICBjb2xvcjogJyMzZTNlM2UnLFxuICAgIGJvcmRlckNvbG9yOiAnI2IyYjJiMicsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgfSxcbiAgJyYuc2VsZWN0ZWQgc3BhbjpudGgtY2hpbGQoNykubnBzQWN0aXZlICsgc3BhbiBsYWJlbCwgJi5zZWxlY3RlZCBzcGFuOm50aC1jaGlsZCg4KS5ucHNBY3RpdmUgKyBzcGFuIGxhYmVsJzoge1xuICAgIGJvcmRlckxlZnRDb2xvcjogJyNmYWMyMmUnLCBcbiAgfSxcbiAgJyYuc2VsZWN0ZWQgc3BhbjpudGgtY2hpbGQoOSkubnBzQWN0aXZlICsgc3BhbiBsYWJlbCc6IHtcbiAgICBib3JkZXJMZWZ0Q29sb3I6ICcjNGNhZjUwJywgXG4gIH0sXG4gICcmLnNlbGVjdGVkIHNwYW4ubnBzQWN0aXZlICsgc3BhbiBsYWJlbCc6IHtcbiAgICBib3JkZXJMZWZ0Q29sb3I6ICcjZmU1MjQ2JywgXG4gIH0sXG4gICcmLnNlbGVjdGVkIHNwYW4gbGFiZWwnOiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgIGNvbG9yOiAnIzNlM2UzZScsXG4gICAgYm9yZGVyQ29sb3I6ICcjYjJiMmIyJyxcbiAgICBib3JkZXJSaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLCBcbiAgfSxcbiAgJyYuc2VsZWN0ZWQgc3BhbjpudGgtY2hpbGQoMTApIGxhYmVsJzoge1xuICAgIGJvcmRlclJpZ2h0Q29sb3I6ICcjYjJiMmIyJyxcbiAgfSxcbiAgJyYuc2VsZWN0ZWQgc3BhbiAucmFkaW9OcHM6Y2hlY2tlZCArIGxhYmVsJzoge1xuICAgIGJhY2tncm91bmQ6ICcjZmU1MjQ2JyxcbiAgICBib3JkZXJDb2xvcjogJyNmZTUyNDYnLFxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gIH0sXG4gICcmLnNlbGVjdGVkIHNwYW46bnRoLWNoaWxkKDcpIC5yYWRpb05wczpjaGVja2VkICsgbGFiZWwsICYuc2VsZWN0ZWQgc3BhbjpudGgtY2hpbGQoOCkgLnJhZGlvTnBzOmNoZWNrZWQgKyBsYWJlbCc6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZhYzIyZScsXG4gICAgYm9yZGVyQ29sb3I6ICcjZmFjMjJlJyxcbiAgfSxcbiAgJyYuc2VsZWN0ZWQgc3BhbjpudGgtY2hpbGQoOSkgLnJhZGlvTnBzOmNoZWNrZWQgKyBsYWJlbCwgJi5zZWxlY3RlZCBzcGFuOm50aC1jaGlsZCgxMCkgLnJhZGlvTnBzOmNoZWNrZWQgKyBsYWJlbCc6IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzRjYWY1MCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjNGNhZjUwJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBHRmxleEJ0biA9IGdsYW1vcm91cy5kaXYoe1xuICBmbGV4OiAnMCAwIDUwJScsXG4gICcmOm50aC1jaGlsZChvZGQpJzoge1xuICAgIHBhZGRpbmdSaWdodDogJzRweCcsXG4gIH0sXG4gICcmOm50aC1jaGlsZChldmVuKSc6IHtcbiAgICBwYWRkaW5nTGVmdDogJzRweCcsXG4gIH0sXG4gICcmIC5yYWRpby1jb21tb24gKyBsYWJlbCc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2Q0ZDRkNCcsXG4gICAgaGVpZ2h0OiAnNDBweCcsXG4gIH0sXG4gICcmIC5yYWRpby1jb21tb246Y2hlY2tlZCArIGxhYmVsJzoge1xuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwOTY4OCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDk2ODgnLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHRmxleFN0YXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLmNoZWNrYm94LXN0YXInOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuICAnJiAuY2hlY2tib3gtc3RhcjpjaGVja2VkICsgbGFiZWwgc3ZnIHBhdGgnOiB7XG4gICAgZmlsbDogJyNmYWMyMmUnLFxuICAgIHN0cm9rZTogJyNmYWMyMmUnLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBOcHNJbnB1dFJhZGlvID0gZ2xhbW9yb3VzLmlucHV0KHtcbiAgZGlzcGxheTogJ25vbmUnLFxuICAnOmNoZWNrZWQgKyBsYWJlbCc6IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzIwYTM5NycsXG4gICAgY29sb3I6ICcjZmZmJ1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IE5wc1JhZGlvUmF0aW5nID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIG1heEhlaWdodDogJzMycHgnLFxuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxufSk7XG5cbmV4cG9ydCBjb25zdCBOcHNSYWRpbyA9IGdsYW1vcm91cy5sYWJlbCh7XG4gIGZvbnRXZWlnaHQ6ICc5MDAnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWF4V2lkdGg6ICc1NXB4JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZ1RvcDogJzEzcHgnLFxuICBwYWRkaW5nQm90dG9tOiAnMTNweCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIG1hcmdpblJpZ2h0OiAnMnB4J1xufSk7XG4iLCJpbXBvcnQgeyBwb3N0Qm9va2luZ0ZlZWRiYWNrUGF0aCwgcG9zdFRyaXBGZWVkYmFja1BhdGggfSBmcm9tICdoZWxwZXJzL3VybEhlbHBlcnMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5leHBvcnQgY29uc3QgUE9TVF9CT09LSU5HX0ZFRURCQUNLX0xPQUQgPSAnZmVlZGJhY2svcG9zdEJvb2tpbmcvRkVFREJBQ0tfTE9BRCc7XG5leHBvcnQgY29uc3QgUE9TVF9CT09LSU5HX0ZFRURCQUNLX0xPQURfU1VDQ0VTUyA9ICdhZ2VudFNob3cvRkVFREJBQ0tfTE9BRF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBQT1NUX0JPT0tJTkdfRkVFREJBQ0tfTE9BRF9GQUlMID0gJ2FnZW50U2hvdy9GRUVEQkFDS19MT0FEX0ZBSUwnO1xuXG5leHBvcnQgY29uc3QgUE9TVF9UUklQX0ZFRURCQUNLX0xPQUQgPSAnZmVlZGJhY2svcG9zdFRyaXAvRkVFREJBQ0tfTE9BRCc7XG5leHBvcnQgY29uc3QgUE9TVF9UUklQX0ZFRURCQUNLX0xPQURfU1VDQ0VTUyA9ICdmZWVkYmFjay9wb3N0VHJpcC9GRUVEQkFDS19MT0FEX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFBPU1RfVFJJUF9GRUVEQkFDS19MT0FEX0ZBSUwgPSAnZmVlZGJhY2svcG9zdFRyaXAvRkVFREJBQ0tfTE9BRF9GQUlMJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBvc3RCb29raW5nRmVlZGJhY2sodHJpcElkLCBwYXJhbXMpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBfbWV0aG9kOiAncG9zdCcsXG4gICAgLi4ucGFyYW1zLFxuICAgIGhvc3RUeXBlOiBjb25maWcuYXBpRW5kcG9pbnRzLnBvc3RCb29raW5nRmVlZGJhY2suaG9zdFxuICB9O1xuICByZXR1cm4ge1xuICAgIHR5cGVzOiBbUE9TVF9CT09LSU5HX0ZFRURCQUNLX0xPQUQsIFBPU1RfQk9PS0lOR19GRUVEQkFDS19MT0FEX1NVQ0NFU1MsIFBPU1RfQk9PS0lOR19GRUVEQkFDS19MT0FEX0ZBSUxdLFxuICAgIHByb21pc2U6IGNsaWVudCA9PiBjbGllbnQucG9zdChwb3N0Qm9va2luZ0ZlZWRiYWNrUGF0aCh0cmlwSWQpLCB7IGRhdGEgfSksXG4gICAgd2l0aG91dENhbWVsQ2FzaW5nOiB0cnVlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0VHJpcEZlZWRiYWNrKHRyaXBJZCwgcGFyYW1zKSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgX21ldGhvZDogJ3Bvc3QnLFxuICAgIC4uLnBhcmFtcyxcbiAgICBob3N0VHlwZTogY29uZmlnLmFwaUVuZHBvaW50cy5wb3N0VHJpcEZlZWRiYWNrLmhvc3RcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlczogW1BPU1RfVFJJUF9GRUVEQkFDS19MT0FELCBQT1NUX1RSSVBfRkVFREJBQ0tfTE9BRF9TVUNDRVNTLCBQT1NUX1RSSVBfRkVFREJBQ0tfTE9BRF9GQUlMXSxcbiAgICBwcm9taXNlOiBjbGllbnQgPT4gY2xpZW50LnBvc3QocG9zdFRyaXBGZWVkYmFja1BhdGgodHJpcElkKSwgeyBkYXRhIH0pLFxuICAgIHdpdGhvdXRDYW1lbENhc2luZzogdHJ1ZVxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgQ2xvc2VJY29uV2hpdGUgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BiYzEgZmxleCBhbGlnbkNlbnRlciBwbDE1IHByMTUgcHQ4IHBiOCBmaXhlZCB3ZnVsbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdDQgcGI0IGZsZXggYWxpZ25DZW50ZXInPlxuICAgICAgICAgIDxMaW5rIHRvPXsnLyd9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC0yNCBibG9jayBtcjE1Jz48Q2xvc2VJY29uV2hpdGUgLz48L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjE2IGZ3NyBtMCBzZmN3Jz57dGhpcy5wcm9wcy50ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHTnBzRGl2LCBHRmxleEJ0biwgTnBzSW5wdXRSYWRpbywgTnBzUmFkaW9SYXRpbmcgfSBmcm9tICcuLi9HJztcbmltcG9ydCB7IHRyYWNrU2VnbWVudCwgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyByZXNjdWUgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcblxuY29uc3QgTnBzUmFkaW9JbnB1dCA9ICh7IGlucHV0LCBvcHRpb25zLCBkZWZhdWx0VmFsdWUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSB9KSA9PiB7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG9wdGlvbikgPT4ge1xuICAgIGlucHV0Lm9uQ2hhbmdlKG9wdGlvbik7XG4gICAgcmVzY3VlKCgpID0+IHtcbiAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgICBzZWN0aW9uOiAnJyxcbiAgICAgICAgb2JqZWN0OidOUFMgUmF0aW5nJyxcbiAgICAgICAgY3RhOiAnJyxcbiAgICAgICAgbWlzY190eXBlXzE6J05QUyByYXRpbmcnLFxuICAgICAgICBtaXNjX2lkXzE6IG9wdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J3B0MjQgcHIxNSBwYjI0IHBsMTUnPlxuICAgIDxHTnBzRGl2IGNsYXNzTmFtZT17YGZsZXggZmxleEZ1bGwgbWI4ICR7aW5wdXQudmFsdWUgPyAnc2VsZWN0ZWQnIDogJyd9YH0+XG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+XG4gICAgICAgIDxzcGFuIGtleT17b3B0aW9ufSBjbGFzc05hbWU9e2Ake29wdGlvbiA9PT0gaW5wdXQudmFsdWUgPyAnbnBzQWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICAgIDxOcHNJbnB1dFJhZGlvIHsuLi5pbnB1dH0gdmFsdWU9e29wdGlvbn0gaWQ9e2luZGV4fSB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtvcHRpb24gPT09IGlucHV0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2Uob3B0aW9uKX0gY2xhc3NOYW1lPSdyYWRpb05wcycvPlxuICAgICAgICAgIDxOcHNSYWRpb1JhdGluZyBodG1sRm9yPXtpbmRleH0gY2xhc3NOYW1lPVwiZjE0IGZ3NCBwZmMzIGlibG9ja1wiPntvcHRpb259PC9OcHNSYWRpb1JhdGluZz5cbiAgICAgICAgPC9zcGFuPilcbiAgICAgIH1cbiAgICA8L0dOcHNEaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4IHNwYWNlQmV0d2VlblwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjEyXCI+Tm90IExpa2VseTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYxMlwiPk1vc3QgTGlrZWx5PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIHtcbiAgICAgIHRvdWNoZWQgJiZcbiAgICAgIChlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+e2Vycm9yfTwvc3Bhbj4pXG4gICAgfVxuICA8L2Rpdj4pO1xufTtcblxuTnBzUmFkaW9JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbk5wc1JhZGlvSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5wc1JhZGlvSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgUmF0aW5nSWNvbixDbG9zZUljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VELCBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0ICcuL1RoYW5reW91LnNjc3MnO1xuXG5jbGFzcyBSYXRpbmdBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50cmFja1NlZ21lbnQoT1JHQU5JU01fVklFV0VELCAnQXBwIFJldmlldyBQb3B1cCcsICcnKTtcbiAgfVxuXG4gIHRyYWNrU2VnbWVudCA9IChldmVudCwgc2VjdGlvbiwgY3RhKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICBldmVudCxcbiAgICAgIHNlY3Rpb24sXG4gICAgICBjdGFcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RENvbHVtbiB0ZXh0LWNlbnRlciBwdDI0IHBiMzIgc2JjdyByYXRpbmctcG9wdXAgcmVsYXRpdmVcIj5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJyYXRpbmctY3Jvc3NcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRyYWNrU2VnbWVudChPUkdBTklTTV9DTElDS0VELCAnQXBwIFJldmlldyBQb3B1cCcsICdDbG9zZScpfT48Q2xvc2VJY29uIC8+PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHN0YXItcmF0aW5nXCI+XG4gICAgICAgICAgPFJhdGluZ0ljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdzkgZjI0IHB0OCBwYjQgbTBcIj5QbGVhc2UgcmF0ZSBvdXIgQXBwIGFuZCBnZXQgSU5SIDEwMCBjYXNoIHZvdWNoZXIhPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjE0cCBwYjMyIHBsMTUgcHIxNVwiPlBsZWFzZSBzaGFyZSB0aGUgc2NyZWVuc2hvdCBvZiB0aGUgZmVlZGJhY2sgb24gYXBwZmVlZGJhY2tAdHJhdmVsdHJpYW5nbGUuY29tPC9wPlxuXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpIHJhdGluZy1idXR0b25cIlxuICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRyYWNrU2VnbWVudChPUkdBTklTTV9DTElDS0VELCAnQXBwIFJldmlldyBQb3B1cCcsICdSYXRlIE5vdycpfVxuICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jLnNpbmd1bGFyLm5ldC9hcGkvdjEvYWQ/c3Q9OTAwMjk3NDg3NDA0Jmg9YjBjODgyYWRlNTI1ZmY1MzU3MmYyNTg2ZDFkOWM4NjhmYzNhM2VhYVwiPlJhdGVcbiAgICAgICAgICBOb3c8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ0FwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHRmxleFN0YXIgfSBmcm9tICcuLi9HJztcbmltcG9ydCB7IE91dGxpbmVTdGFySWNvbiwgRmlsbFN0YXJJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgeyB0cmFja1NlZ21lbnQsIE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5cbmNvbnN0IFN0YXJSYXRpbmcgPSAoeyBpbnB1dCwgb3B0aW9ucywgcmF0aW5nLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4ge1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBpbnB1dC5vbkNoYW5nZShvcHRpb24pO1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgICAgc2VjdGlvbjogJycsXG4gICAgICAgIG9iamVjdDonU3RhciBSYXRpbmcnLFxuICAgICAgICBjdGE6ICcnLFxuICAgICAgICBtaXNjX3R5cGVfMTonU2VjdGlvbiBjbGlja2VkJyxcbiAgICAgICAgbWlzY19pZF8xOiBpbnB1dC5uYW1lLFxuICAgICAgICBtaXNjX3R5cGVfMjonU3RhciBSYXRpbmcnLFxuICAgICAgICBtaXNjX2lkXzI6IG9wdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuICg8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sMjQgcGwxNSBtdDggZmxleFdyYXAnPlxuICAgICAge1xuICAgICAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT5cbiAgICAgICAgICA8R0ZsZXhTdGFyIGNsYXNzTmFtZT0nbXIxNScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmlucHV0fSB0eXBlPSdjaGVja2JveCcgaWQ9e2Ake2lucHV0Lm5hbWV9XyR7aW5kZXh9YH0gY2xhc3NOYW1lPSdjaGVja2JveC1zdGFyJ1xuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb259IGNoZWNrZWQ9e29wdGlvbiA8PSBwYXJzZUludChpbnB1dC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShvcHRpb24pfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0naWJsb2NrJyBodG1sRm9yPXtgJHtpbnB1dC5uYW1lfV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKG9wdGlvbiA8PSBwYXJzZUludChpbnB1dC52YWx1ZSkpXG4gICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdpbnB1dC0yNCc+PEZpbGxTdGFySWNvbiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtMjQnPjxPdXRsaW5lU3Rhckljb24gLz48L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDwvR0ZsZXhTdGFyPilcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICB7XG4gICAgICB0b3VjaGVkICYmXG4gICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgIH1cbiAgPC9kaXY+KTtcbn07XG5cblN0YXJSYXRpbmcucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1ldGE6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5TdGFyUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczogWycxJywgJzInLCAnMycsICc0JywgJzUnXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhclJhdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBUZXh0QXJlYSA9ICh7IGlucHV0LCBwbGFjZWhvbGRlciwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IChcbiAgPGRpdj5cbiAgICA8dGV4dGFyZWEgey4uLmlucHV0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHRhcmVhYH0gLz5cbiAgICB7XG4gICAgICB0b3VjaGVkICYmXG4gICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgIH1cbiAgPC9kaXY+XG4pO1xuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cblRleHRBcmVhLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9UaGFua3lvdS5zY3NzJztcblxuaW1wb3J0IHtcbiAgVGhhbmtZb3VUaWNrLFxuICBFbnZlbG9wZUljb25cbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBUaGFua1lvdSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjbGVhcmZpeCB3ZnVsbCBpYmxvY2sgcHQxNSBwYjMyIHNiY3cgYXRfdGhhbmt5b3VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRoYW5rLXlvdS1hbmltYXRpb24gcmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW52ZWxvcGUtYm94XCI+PEVudmVsb3BlSWNvbiAvPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGFua3lvdS10aWNrXCI+PFRoYW5rWW91VGljayAvPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzTmFtZT1cInBmYzEgZndiIGYyNCBwdDI0IHBiNCBtMFwiPlN1Ym1pdHRlZDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJtMCBwZmMzIGYxNHBcIj5UaGFuayB5b3UgZm9yIHRoZSBmZWVkYmFjazwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUaGFua1lvdTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRoYW5rLXlvdS1hbmltYXRpb25cIjogXCJfMXFoNXdcIixcblx0XCJlbnZlbG9wZS1ib3hcIjogXCJfMkd4VnhcIixcblx0XCJ0aGFua3lvdS10aWNrXCI6IFwiX0UwWnhMXCIsXG5cdFwiZmFkZUluVGlja1wiOiBcIl8xOGlrb1wiLFxuXHRcImFuaW1hdGlvbi1iYXJcIjogXCJfMUxfQjVcIixcblx0XCJhbmltYXRpb24tYmFyLWlubmVyXCI6IFwiXzI3NV8wXCIsXG5cdFwiYW5pbWF0ZVdpZHRoXCI6IFwiX0RveTdPXCIsXG5cdFwic3Rhci1yYXRpbmdcIjogXCJfMWNwQmNcIixcblx0XCJyYXRpbmctcG9wdXBcIjogXCJfMnVscHVcIixcblx0XCJyYXRpbmctYnV0dG9uXCI6IFwiXzEtajcwXCIsXG5cdFwicmF0aW5nLWNyb3NzXCI6IFwiXzNSb3laXCJcbn07IiwiZXhwb3J0IGNvbnN0IFNMSURFUjEgPSAxO1xuZXhwb3J0IGNvbnN0IFNMSURFUjIgPSAyO1xuZXhwb3J0IGNvbnN0IE1JTl9OUFNfRk9SX1JBVElORyA9IDc7XG4iLCJpbXBvcnQge1xuICBQT1NUX0JPT0tJTkdfRkVFREJBQ0tfTE9BRCxcbiAgUE9TVF9CT09LSU5HX0ZFRURCQUNLX0xPQURfU1VDQ0VTUyxcbiAgUE9TVF9CT09LSU5HX0ZFRURCQUNLX0xPQURfRkFJTCxcbiAgUE9TVF9UUklQX0ZFRURCQUNLX0xPQUQsXG4gIFBPU1RfVFJJUF9GRUVEQkFDS19MT0FEX1NVQ0NFU1MsXG4gIFBPU1RfVFJJUF9GRUVEQkFDS19MT0FEX0ZBSUxcbn0gZnJvbSAnLi9hY3Rpb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHN1Ym1pdHRlZDogZmFsc2UsXG4gIHN1Ym1pdHRpbmc6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUE9TVF9UUklQX0ZFRURCQUNLX0xPQUQ6XG4gICAgY2FzZSBQT1NUX0JPT0tJTkdfRkVFREJBQ0tfTE9BRDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICAgIHN1Ym1pdHRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgUE9TVF9UUklQX0ZFRURCQUNLX0xPQURfU1VDQ0VTUzpcbiAgICBjYXNlIFBPU1RfQk9PS0lOR19GRUVEQkFDS19MT0FEX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdWJtaXR0ZWQ6IHRydWUsXG4gICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFBPU1RfVFJJUF9GRUVEQkFDS19MT0FEX0ZBSUw6XG4gICAgY2FzZSBQT1NUX0JPT0tJTkdfRkVFREJBQ0tfTE9BRF9GQUlMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICAgICAgc3VibWl0dGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBHUm9zdGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIC8vIHRvcDogJzYwcHgnLFxuICB3aWR0aDogJ2NhbGMoMTAwJSAtIDI0cHgpJyxcbiAgbGVmdDogJzEycHgnLFxuICB0b3A6ICcxMnB4JyxcbiAgekluZGV4OiAnOTk5OScsXG4gICcmID4gZGl2Jzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICAnJiAucm9zdGVyQ2xvc2UnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDonMjRweCcsXG4gICAgaGVpZ2h0OicyNHB4JyxcbiAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiczcHgnLFxuICAgIHRvcDonM3B4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInIDoge1xuICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnN3B4JyxcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgd2lkdGg6JzEycHgnLFxuICAgICAgaGVpZ2h0OicxcHgnLFxuICAgICAgYmFja2dyb3VuZDonIzAwMCcsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScsXG4gICAgfSxcbiAgICAnJjphZnRlcicgOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC00NWRlZyknLFxuICAgIH0sXG4gIH0sXG4gICcmIC50b2FzdGVyJzoge1xuICAgIHBhZGRpbmc6ICcxMnB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2VmZWZlZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICcmLmVycm9yUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjY2I0MTM4JyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZkNTM0NicsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZGJkOCcsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNjYjQxMzgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLnN1Y2Vzc1Jvc3Rlcic6IHtcbiAgICAgIGNvbG9yOiAnIzI2OGYyYScsXG4gICAgICBib3JkZXJDb2xvcjogJyMyNjhmMmEnLFxuICAgICAgYmFja2dyb3VuZDogJyNkMWY2ZDInLFxuICAgICAgJyYgLnJvc3RlckNsb3NlOmJlZm9yZSwgJiAucm9zdGVyQ2xvc2U6YWZ0ZXInIDoge1xuICAgICAgICBiYWNrZ3JvdW5kOicjMjY4ZjJhJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJi5pbmZvUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjMWE3OGMyJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzIxOTZmMycsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2Q4ZThmYicsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMxYTc4YzInLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLndhcm5pbmdUb2FzdGVyJzoge1xuICAgICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZhYzIyZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZjJkYycsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMzZTNlM2UnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEdSb3N0ZXJEaXYgfSBmcm9tICcuL0cnO1xuXG4vKipcbiAqIFJvc3RlciBpcyB0byBkaXNwbGF5IG1lc3NhZ2VzIGZvciBkeW5hbWljIGxheW91dHMuXG4gKiAtIHJvc3RlclR5cGUgLSBTdHJpbmc6IERlZmluZXMgdHlwZSBvZiBtZXNzYWdlLiBDdXJyZW50bHkgd2Ugc3VwcG9ydFxuICogcm9zdGVyU3VjY2Vzcywgcm9zdGVyRXJyb3IgYW5kIHJvc3RlckluZm9cbiAqIC0gdGV4dCAtIFN0cmluZyBbb3B0aW9uYWxdOiBTaW5nbGUgbGluZSBtZXNzYWdlIGZvciB1c2VyLlxuICogLSBtZXNzYWdlIC0gT2JqZWN0IFtvcHRpb25hbF06IEZvciBtb3JlIGNvbXBsZXggbWVzc2FnZXMgd2hpY2ggbWlnaHQgY29udGFpbiBsaW5rIGZvciB1c2VyIGFjdGlvbi5cbiAqIEZvciBleDoge1xuICogICAgIGhlYWRlcjogXCJOZXcgdHJpcCBjcmVhdGVkIVwiLFxuICogICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGFjdGl2YXRlIHlvdXIgZW1haWwgYWRkcmVzcy4gVG8gcmVzZW5kIGFjdGl2YXRpb24gbWFpbCB7e3NlbmRfYWN0aXZhdGlvbl9tYWlsfX1cIixcbiAqICAgICBsaW5rczogW3t0eXBlOiAnc2VuZF9hY3RpdmF0aW9uX21haWwnLCBsYWJlbDogJ0NsaWNrIGhlcmUnfSBdXG4gKiAgIH1cbiAqIC0gdGltZW91dCAtIE51bWJlciBbb3B0aW9uYWxdOiBpZiBwcm92aWRlZCwgTWVzc2FnZSB3aWxsIGRpc2FwcGVhciBhZnRlciB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICogLSBjYWxsYmFjayAtIEZ1bmN0aW9uIFtvcHRpb25hbF06IENhbGxiYWNrIHRvIHBhc3MgZXZlbnQgYmFzZWQgb24gd2hpY2ggYWN0aW9uIGlzIHRvIGJlIGNhbGxlZCBieSBwYXJlbnQuXG4gKlxuICogIFAuUy4gLSBFaXRoZXIgcm9zdGVyVGV4dCBvciByb3N0ZXJNZXNzYWdlIHNob3VsZCBiZSBwcmVzZW50LiBJZiBib3RoIGFyZSBwcmVzZW50IHJvc3RlclRleHQgd291bGQgaGF2ZSBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9zdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc1Jvc3Rlck9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVSb3N0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsb3dUaW1lT3V0OiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIC8qKlxuICAgKiByb3N0ZXJUeXBlIGNvdWxkIGhhdmUgdHdvIHR5cGVzOlxuICAgKiAgLSBzdWNlc3NSb3N0ZXJcbiAgICogIC0gZXJyb3JSb3N0ZXJcbiAgICogIC0gaW5mb1Jvc3RlclxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnaW5mb1Jvc3RlcicsXG4gICAgaXNSb3N0ZXJPcGVuOiBmYWxzZSxcbiAgICBhbGxvd1RpbWVPdXQ6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNSb3N0ZXJPcGVuOiBwcm9wcy5pc1Jvc3Rlck9wZW5cbiAgICB9O1xuICAgIHRoaXMuY2xvc2VSb3N0ZXIgPSB0aGlzLmNsb3NlUm9zdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Jvc3Rlck9wZW4pIHtcbiAgICAgIHRoaXMuc2hvd1Jvc3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc1Jvc3Rlck9wZW4gJiYgbmV4dFByb3BzLmlzUm9zdGVyT3Blbikge1xuICAgICAgdGhpcy5zaG93Um9zdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1Jvc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNSb3N0ZXJPcGVuOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVvdXQgJiYgdGhpcy5wcm9wcy5hbGxvd1RpbWVPdXQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVJvc3RlcigpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VSb3N0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzUm9zdGVyT3BlbjogZmFsc2UgfSk7XG4gICAgdGhpcy5wcm9wcy5oaWRlUm9zdGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNSb3N0ZXJPcGVuICYmIG1lc3NhZ2UgPyAoXG4gICAgICA8R1Jvc3RlckRpdiBjbGFzc05hbWU9XCJmaXhlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvYXN0ZXIgJHt0eXBlfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGR5bmFtaWNUZXh0SW5oZXJpdCBwMFwiPlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3N0ZXJDbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VSb3N0ZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HUm9zdGVyRGl2PlxuICAgICkgOiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBzaG93Um9zdGVyLCBoaWRlUm9zdGVyIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IFJvc3RlciBmcm9tICcuL1Jvc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB0eXBlOiBzdGF0ZS5yb3N0ZXIudHlwZSxcbiAgICBtZXNzYWdlOiBzdGF0ZS5yb3N0ZXIubWVzc2FnZSxcbiAgICBpc1Jvc3Rlck9wZW46IHN0YXRlLnJvc3Rlci5pc1Jvc3Rlck9wZW4sXG4gICAgYWxsb3dUaW1lT3V0OiBzdGF0ZS5yb3N0ZXIuYWxsb3dUaW1lT3V0XG4gIH0pLFxuICB7XG4gICAgaGlkZVJvc3RlclxuICB9XG4pKFJvc3RlcikpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgQ2xvc2VEYXJrLCBDbG9zZVdoaXRlfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IENsb3NlSXQgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnNXB4JyxcbiAgdG9wOiAnMHB4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnMicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuXG5jb25zdCBDbG9zZUl0TGVmdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgbGVmdDogJzVweCcsXG4gIHRvcDogJzNweCcsXG4gIHdpZHRoOiAnMzZweCcsXG4gIGhlaWdodDogJzM2cHgnLFxuICBwYWRkaW5nOiAnMTJweCcsXG4gIHpJbmRleDogJzYnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KTtcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHpJbmRleDogJzEwMScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIHdpZHRoOiAnOTQlJyxcbiAgICBtYXhXaWR0aDogJzYwMHB4JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43NSknXG4gIH0sXG59O1xuY29uc3QgY3VzdG9tU3R5bGVzRnVsbFZpZXcgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmdUb3A6ICc1MHB4J1xuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJ1xuICB9LFxufTtcblxuY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgb25BZnRlck1vZGFsT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZXF1ZXN0Q2xvc2VDdXN0b206IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1c3RvbUNsb3NlVHJpZ2dlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNOb0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1doaXRlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGN1c3RvbUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogKCkgPT4ge1xuICAgIH0sXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBmYWxzZSxcbiAgICB0cmlnZ2VyOiA8YnV0dG9uPlBsZWFzZSBzdXBwbHkgYSBjdXN0b20gdHJpZ2dlciBjb21wb25lbnQ8L2J1dHRvbj4sXG4gICAgZnVsbFZpZXc6IGZhbHNlLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBmYWxzZSxcbiAgICBoYXNOb0Nsb3NlOiBmYWxzZSxcbiAgICBpc1doaXRlSWNvbjogZmFsc2UsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWZ0ZXJPcGVuTW9kYWwgPSB0aGlzLmFmdGVyT3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiBuZXh0UHJvcHMuY3VzdG9tQ2xvc2VUcmlnZ2VyKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSgpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gIH1cblxuICBhZnRlck9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQWZ0ZXJNb2RhbE9wZW4oKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZ1bGxWaWV3LCBoYXNDdXN0b21DbG9zZSwgaGFzTm9DbG9zZSwgaXNXaGl0ZUljb24sIGlzVHJpZ2dlckZ1bGxWaWV3LCBjdXN0b21DbGFzcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVHJpZ2dlckZ1bGxWaWV3ID8gJ3dmdWxsJzogJyd9PlxuICAgICAgICB7IXRoaXMucHJvcHMuaXNPcGVuID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyaWdnZXJ9XG4gICAgICAgICAgPC9zcGFuPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25BZnRlck9wZW49e3RoaXMuYWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICBzdHlsZT17ZnVsbFZpZXcgPyBjdXN0b21TdHlsZXNGdWxsVmlldyA6IGN1c3RvbVN0eWxlc31cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJUcmF2ZWwgVHJpYW5nbGUgTW9kYWxcIlxuICAgICAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VzdG9tQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYXNDdXN0b21DbG9zZSA/XG4gICAgICAgICAgICAgIDxDbG9zZUl0TGVmdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0TGVmdD4gOlxuICAgICAgICAgICAgICA8Q2xvc2VJdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9