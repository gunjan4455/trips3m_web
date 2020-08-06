require("source-map-support").install();
exports.ids = ["postbooking-feedback"];
exports.modules = {

/***/ "./app-v2/modules/feedback/components/SingleSelectField.js":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/feedback/components/SingleSelectField.js ***!
  \*****************************************************************/
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

const SingleSelectField = ({
  input,
  options,
  defaultValue,
  meta: {
    touched,
    error
  }
}) => {
  const handleChange = (value, name) => {
    input.onChange(value);
    (0, _utils.rescue)(() => {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: '',
        object: 'option',
        cta: '',
        misc_type_1: 'Question',
        misc_id_1: input.name,
        misc_type_2: 'Answer',
        misc_id_2: name
      });
    });
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "flex ml24 pl15 flexWrap"
  }, options.map((option, index) => _react.default.createElement(_G.GFlexBtn, {
    className: "pt8",
    key: index
  }, _react.default.createElement("input", _extends({}, input, {
    type: "radio",
    id: `${input.name}_${index}`,
    className: "radio-common",
    value: option.value,
    checked: option.value === input.value,
    onChange: () => handleChange(option.value, option.name)
  })), _react.default.createElement("label", {
    htmlFor: `${input.name}_${index}`
  }, option.name)))), touched && error && _react.default.createElement("span", {
    className: "input-error-text"
  }, error));
};

SingleSelectField.propTypes = {
  input: _propTypes.default.object,
  options: _propTypes.default.array,
  defaultValue: _propTypes.default.number,
  meta: _propTypes.default.object,
  text: _propTypes.default.string
};
SingleSelectField.defaultProps = {};
var _default = SingleSelectField;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postBooking/Form.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/feedback/postBooking/Form.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/feedback/constants.js");

var _Slider = _interopRequireDefault(__webpack_require__(/*! ./Slider1 */ "./app-v2/modules/feedback/postBooking/Slider1.js"));

var _Slider2 = _interopRequireDefault(__webpack_require__(/*! ./Slider2 */ "./app-v2/modules/feedback/postBooking/Slider2.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PostBookingForm = (_temp = _class = class PostBookingForm extends _react.Component {
  constructor(props) {
    super(props);

    this.setSliderMode = value => {
      this.setState({
        sliderMode: value
      });
    };

    this.state = {
      sliderMode: _constants.SLIDER1
    };
  }

  render() {
    const {
      invalid,
      submitting,
      handleSubmit,
      trackSegmentEvent
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement("form", {
      onSubmit: handleSubmit
    }, this.state.sliderMode === _constants.SLIDER1 ? _react.default.createElement(_Slider.default, {
      setSliderMode: this.setSliderMode,
      invalid: invalid,
      submitting: submitting,
      trackSegment: trackSegmentEvent
    }) : _react.default.createElement(_Slider2.default, {
      setSliderMode: this.setSliderMode,
      invalid: invalid,
      submitting: submitting,
      trackSegment: trackSegmentEvent
    })));
  }

}, _class.propTypes = {
  location: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  submitting: _propTypes.default.bool,
  handleSubmit: _propTypes.default.func,
  trackSegmentEvent: _propTypes.default.func
}, _temp);

var _default = (0, _reduxForm.reduxForm)({
  form: 'postBookingNpsForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PostBookingForm);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postBooking/FormContainer.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/feedback/postBooking/FormContainer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Form = _interopRequireDefault(__webpack_require__(/*! ./Form */ "./app-v2/modules/feedback/postBooking/Form.js"));

var _ThankYou = _interopRequireDefault(__webpack_require__(/*! ../components/ThankYou */ "./app-v2/modules/feedback/components/ThankYou.js"));

var _RatingApp = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/feedback/components/RatingApp */ "./app-v2/modules/feedback/components/RatingApp.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/feedback/constants.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PostBookingFormContainer = (_temp2 = _class = class PostBookingFormContainer extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      npsScore: 0
    }, this.handleSubmit = values => {
      const tripId = this.props.params.requestedTripId;
      const apiParams = {
        promoter_score: values.nps,
        agent_quotes_quality: values.agent_quotes_quality,
        agent_quotes_time: values.agent_quotes_time,
        agent_interaction: values.agent_interaction,
        agent_interaction_call: values.agent_interaction_call,
        tt_website_use: values.tt_website_use,
        tt_payment_process: values.tt_payment_process,
        trip_advisor_helpful: values.trip_advisor_helpful,
        trip_advisor_response: values.trip_advisor_response,
        security_token: this.props.securityToken
      };
      apiParams.postbooking_trip_feedback = {
        requested_trip_id: tripId,
        comments: values.comments,
        platform: 'Mobile'
      };
      this.setState({
        npsScore: parseInt(values.nps)
      });
      return this.props.createPostBookingFeedback(tripId, apiParams);
    }, this.trackSegmentEvent = details => {
      (0, _utils.rescue)(() => {
        (0, _segmentEvents.trackSegment)({
          event: details.event,
          section: details.section,
          object: '',
          cta: details.cta || ''
        });
      });
    }, _temp;
  }

  componentDidUpdate(prevProps) {
    if (this.props.submitted && this.state.npsScore <= _constants.MIN_NPS_FOR_RATING) {
      const rlpPath = (0, _urlHelpers.rtripPath)(this.props.params.requestedTripId);
      setTimeout(() => {
        this.props.pushState(rlpPath);
      }, 3000);
    }
  }

  render() {
    const {
      submitted
    } = this.props;
    const {
      npsScore
    } = this.state;
    return _react.default.createElement("div", null, _react.default.createElement(_Form.default, {
      enableReinitialize: true,
      initialValues: {
        nps: parseInt(this.props.location.query.promoter_score)
      },
      formValues: this.props.formValues,
      onSubmit: this.handleSubmit,
      trackSegmentEvent: this.trackSegmentEvent
    }), _react.default.createElement(_GenericModal.default, {
      hasNoClose: true,
      trigger: null,
      isOpen: submitted
    }, npsScore > _constants.MIN_NPS_FOR_RATING ? _react.default.createElement(_RatingApp.default, {
      trackSegmentEvent: this.trackSegmentEvent
    }) : _react.default.createElement(_ThankYou.default, null)));
  }

}, _class.propTypes = {
  securityToken: _propTypes.default.string.isRequired,
  params: _propTypes.default.object,
  location: _propTypes.default.object,
  submitted: _propTypes.default.bool,
  formValues: _propTypes.default.object.isRequired,
  createPostBookingFeedback: _propTypes.default.func,
  pushState: _propTypes.default.func
}, _temp2);
var _default = PostBookingFormContainer;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postBooking/Slider1.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/feedback/postBooking/Slider1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/feedback/constants.js");

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _NpsRadioInput = _interopRequireDefault(__webpack_require__(/*! ../components/NpsRadioInput */ "./app-v2/modules/feedback/components/NpsRadioInput.js"));

var _SingleSelectField = _interopRequireDefault(__webpack_require__(/*! ../components/SingleSelectField */ "./app-v2/modules/feedback/components/SingleSelectField.js"));

var _StarRating = _interopRequireDefault(__webpack_require__(/*! ../components/StarRating */ "./app-v2/modules/feedback/components/StarRating.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GButtonDisable = _glamorous.default.div({
  '& button[disabled]': {
    backgroundColor: '#efefef',
    color: '#b2b2b2'
  }
});

let Slider1 = (_temp = _class = class Slider1 extends _react.Component {
  componentDidMount() {
    this.props.trackSegment({
      event: _segmentEvents.ORGANISM_VIEWED,
      section: 'Page 1'
    });
  }

  render() {
    const {
      invalid,
      submitting,
      setSliderMode
    } = this.props;
    return _react.default.createElement("div", {
      className: "pt48"
    }, _react.default.createElement("div", {
      className: "flex flexDColumn sbcw mb8"
    }, _react.default.createElement("h3", {
      className: "m0 f16a fw9 pt24 pl15 pr15"
    }, "How likely are you to recommend TravelTriangle to a friend? ", _react.default.createElement("sup", {
      className: "pfc2"
    }, "*")), _react.default.createElement(_reduxForm.Field, {
      name: "nps",
      component: _NpsRadioInput.default,
      validate: _formValidators.required,
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })), _react.default.createElement("div", {
      className: "flex flexDColumn sbcw"
    }, _react.default.createElement("h3", {
      className: "m0 f16 fw9 pt24 pl15 pr15"
    }, "Rate your experience with our Travel Agents"), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.QualityQuotesIcon, null)), _react.default.createElement("p", {
      className: "flexFull f14p"
    }, "How was the quality of quotes provided (itinerary and package details)")), _react.default.createElement(_reduxForm.Field, {
      name: "agent_quotes_quality",
      component: _StarRating.default,
      text: "help"
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.DurationIcon, null)), _react.default.createElement("p", {
      className: "flexFull f14p"
    }, "Was the agent(s) response fast?")), _react.default.createElement(_reduxForm.Field, {
      name: "agent_quotes_time",
      component: _SingleSelectField.default,
      options: [{
        name: 'Yes',
        value: 2
      }, {
        name: 'No',
        value: 1
      }]
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.MessageIconNew, null)), _react.default.createElement("p", {
      className: "flexFull f14p"
    }, "Was the agent(s) interaction pleasant?")), _react.default.createElement(_reduxForm.Field, {
      name: "agent_interaction",
      component: _SingleSelectField.default,
      options: [{
        name: 'Yes',
        value: 2
      }, {
        name: 'No',
        value: 1
      }]
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.CallUs, null)), _react.default.createElement("p", {
      className: "flexFull f14p"
    }, "Total number of calls that you received?")), _react.default.createElement(_reduxForm.Field, {
      name: "agent_interaction_call",
      component: _SingleSelectField.default,
      options: [{
        name: 'Expected More',
        value: 1
      }, {
        name: 'Just Right',
        value: 2
      }, {
        name: 'High',
        value: 3
      }]
    })), _react.default.createElement("div", {
      className: "sbcw"
    }, _react.default.createElement(GButtonDisable, {
      className: "flex wfull z10 pr15 pl15 pt8 pb8 justifyEnd"
    }, _react.default.createElement("button", {
      disabled: invalid || submitting,
      onClick: () => setSliderMode(_constants.SLIDER2),
      className: "flex pbc2 radius2  at_submit  f16 fw7 sfcw col-xs-6 alignCenter btn-filled-pri-large"
    }, _react.default.createElement("span", {
      className: "flexFull"
    }, "Next"), _react.default.createElement("span", {
      className: "input-24 absolute r15"
    }, invalid || submitting ? _react.default.createElement(_Icon.RightGreyArrow, null) : _react.default.createElement(_Icon.RightWhiteArrow, null)))))));
  }

}, _class.propTypes = {
  invalid: _propTypes.default.bool,
  submitting: _propTypes.default.bool,
  pristine: _propTypes.default.bool,
  setSliderMode: _propTypes.default.func,
  trackSegment: _propTypes.default.func.isRequired
}, _temp);
var _default = Slider1;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postBooking/Slider2.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/feedback/postBooking/Slider2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/feedback/constants.js");

var _SingleSelectField = _interopRequireDefault(__webpack_require__(/*! ../components/SingleSelectField */ "./app-v2/modules/feedback/components/SingleSelectField.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _TextArea = _interopRequireDefault(__webpack_require__(/*! ../components/TextArea */ "./app-v2/modules/feedback/components/TextArea.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GButtonDisable = _glamorous.default.div({
  '& button[disabled]': {
    backgroundColor: '#efefef',
    color: '#b2b2b2'
  }
});

let Slider2 = (_temp = _class = class Slider2 extends _react.Component {
  componentDidMount() {
    this.props.trackSegment({
      event: _segmentEvents.ORGANISM_VIEWED,
      section: 'Page 2'
    });
  }

  render() {
    const {
      invalid,
      submitting,
      setSliderMode
    } = this.props;
    return _react.default.createElement("div", {
      className: "pt48"
    }, _react.default.createElement("div", {
      className: "flex flexDColumn sbcw mb8"
    }, _react.default.createElement("h3", {
      className: "m0 f16a fw9 pt24 pl15 pr15"
    }, "Rate your overall experience with TravelTriangle.com"), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.MobileIcon, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "How easy is it to use TT website/app?")), _react.default.createElement(_reduxForm.Field, {
      name: "tt_website_use",
      component: _SingleSelectField.default,
      options: [{
        name: 'Easy',
        value: 3
      }, {
        name: 'Average',
        value: 2
      }, {
        name: 'Difficult',
        value: 1
      }]
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.BudgetIcon, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "How was the payment process")), _react.default.createElement(_reduxForm.Field, {
      name: "tt_payment_process",
      component: _SingleSelectField.default,
      options: [{
        name: 'Easy',
        value: 3
      }, {
        name: 'Average',
        value: 2
      }, {
        name: 'Difficult',
        value: 1
      }]
    }))), _react.default.createElement("div", {
      className: "flex flexDColumn sbcw mb8"
    }, _react.default.createElement("h3", {
      className: "m0 f16a fw9 pt24 pl15 pr15"
    }, "Rate your experience with Travel Triangle Advisor"), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.FAQIcon, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "Was TT Advisor helpful?")), _react.default.createElement(_reduxForm.Field, {
      name: "trip_advisor_helpful",
      component: _SingleSelectField.default,
      options: [{
        name: 'Yes',
        value: 2
      }, {
        name: 'No',
        value: 1
      }]
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.DurationIcon, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "Was TT Advisor response fast?")), _react.default.createElement(_reduxForm.Field, {
      name: "trip_advisor_response",
      component: _SingleSelectField.default,
      options: [{
        name: 'Fast',
        value: 3
      }, {
        name: 'Average',
        value: 2
      }, {
        name: 'Slow',
        value: 1
      }]
    }))), _react.default.createElement("div", {
      className: "flex flexDColumn sbcw"
    }, _react.default.createElement("h3", {
      className: "m0 f16 fw9 pt24 pl15 pr15"
    }, "Comments"), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "comments",
      component: _TextArea.default,
      placeholder: "Type your comments here\u2026"
    })), _react.default.createElement("div", {
      className: "sbcw bt"
    }, _react.default.createElement(GButtonDisable, {
      className: "flex wfull z10 pr15 pl15 pt8 pb8"
    }, _react.default.createElement("button", {
      onClick: () => setSliderMode(_constants.SLIDER1),
      className: "flexFull link-pri fw7 wfull radius2 iblock at_Cancel sbcw sbc2 pfc2 f16 fw7"
    }, _react.default.createElement("span", {
      className: "input-24 absolute l15"
    }, _react.default.createElement(_Icon.LeftRedArrow, null)), "Back"), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("button", {
      type: "submit",
      disabled: invalid || submitting,
      className: "flexFull pbc2 wfull radius2 at_submit  f16 fw7 sfcw btn-filled-pri-large"
    }, "Submit"))))));
  }

}, _class.propTypes = {
  invalid: _propTypes.default.bool,
  submitting: _propTypes.default.bool,
  pristine: _propTypes.default.bool,
  setSliderMode: _propTypes.default.func,
  trackSegment: _propTypes.default.func.isRequired
}, _temp);
var _default = Slider2;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postBooking/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/feedback/postBooking/index.js ***!
  \******************************************************/
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

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _FormContainer = _interopRequireDefault(__webpack_require__(/*! ./FormContainer */ "./app-v2/modules/feedback/postBooking/FormContainer.js"));

var _action = __webpack_require__(/*! ../action */ "./app-v2/modules/feedback/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  return {
    submitted: state.feedback.submitted,
    securityToken: state.trip.currentTrip.data.securityToken,
    formValues: state.form.postBookingNpsForm && state.form.postBookingNpsForm.values || {}
  };
}, {
  createPostBookingFeedback: _action.createPostBookingFeedback,
  pushState: _reactRouterRedux.push
})(_FormContainer.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/feedback/postBooking/Feedback.js":
/*!*********************************************************!*\
  !*** ./app-v2/screens/feedback/postBooking/Feedback.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.feedbackActions = exports.feedbackReducers = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/feedback/postBooking/Layout.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! modules/feedback/reducer */ "./app-v2/modules/feedback/reducer.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! modules/trip/reducers/index */ "./app-v2/modules/trip/reducers/index.js"));

var _currentTrip = __webpack_require__(/*! modules/trip/actions/currentTrip */ "./app-v2/modules/trip/actions/currentTrip.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const feedbackReducers = {
  feedback: _reducer.default,
  trip: _index.default
};
exports.feedbackReducers = feedbackReducers;
const feedbackActions = {
  getSecurityToken: _currentTrip.getSecurityToken
};
exports.feedbackActions = feedbackActions;
let Feedback = (_temp = _class = class Feedback extends _react.Component {
  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

}, _class.propTypes = {}, _temp);
var _default = Feedback;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/feedback/postBooking/Layout.js":
/*!*******************************************************!*\
  !*** ./app-v2/screens/feedback/postBooking/Layout.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _common = _interopRequireDefault(__webpack_require__(/*! app-v2/common */ "./app-v2/common.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! modules/feedback/components/Header */ "./app-v2/modules/feedback/components/Header.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! modules/roster/index */ "./app-v2/modules/roster/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! modules/feedback/postBooking/index */ "./app-v2/modules/feedback/postBooking/index.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Layout = class Layout extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (data = {}) => {
      (0, _utils.rescue)(() => {
        (0, _segmentEvents.trackSegment)({
          event: data.event,
          category: data.category || 'RLP',
          section: data.section || '',
          object: data.object,
          cta: data.cta,
          misc_id_1: data.miscId1,
          misc_type_1: data.miscType1,
          misc_id_2: data.miscId2,
          misc_type_2: data.miscType2,
          misc_id_3: data.miscId3,
          misc_type_3: data.miscType3,
          misc_id_4: data.miscId4,
          misc_type_4: data.miscType4,
          misc_id_5: data.miscId5,
          misc_type_5: data.miscType5
        });
      });
    };

    this.onSensorChange = (isVisible, config) => {
      if (isVisible) {
        if (!this.isEventTracked[config.name]) {
          this.isEventTracked[config.name] = true;
          this.trackSegmentEvent({
            event: _segmentEvents.ORGANISM_VIEWED,
            section: config.name,
            cta: ''
          });
        }
      }
    };

    this.isEventTracked = {};
  }

  componentDidMount() {
    /*    this.props.layout.components.map((component) => {
          this.isEventTracked[component.name] = false;
        });*/
  }

  UNSAFE_componentWillReceiveProps(props, nextProps) {
    /*if (props.currentTripId !== nextProps.currentTripId) {
      this.isEventTracked = {};
    }*/
  }

  render() {
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("meta", {
      name: "page_fullname",
      content: "Quote Detail"
    }), _react.default.createElement("meta", {
      name: "page_name",
      content: "Quote Detail"
    }), _react.default.createElement("meta", {
      name: "name",
      content: "Quote Detail"
    })), _react.default.createElement(_index.default, {
      timeout: 3000
    }), _react.default.createElement("div", {
      className: "clearfix contentBackground sbc5"
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement(_Header.default, {
      text: "Feedback"
    }), _react.default.createElement(_index2.default, null)))));
  }

};
Layout.propTypes = {};
var _default = Layout;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL1NpbmdsZVNlbGVjdEZpZWxkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZlZWRiYWNrL3Bvc3RCb29raW5nL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svcG9zdEJvb2tpbmcvRm9ybUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9wb3N0Qm9va2luZy9TbGlkZXIxLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZlZWRiYWNrL3Bvc3RCb29raW5nL1NsaWRlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svcG9zdEJvb2tpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvZmVlZGJhY2svcG9zdEJvb2tpbmcvRmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvZmVlZGJhY2svcG9zdEJvb2tpbmcvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlNpbmdsZVNlbGVjdEZpZWxkIiwiaW5wdXQiLCJvcHRpb25zIiwiZGVmYXVsdFZhbHVlIiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwibmFtZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJPUkdBTklTTV9DTElDS0VEIiwic2VjdGlvbiIsIm9iamVjdCIsImN0YSIsIm1pc2NfdHlwZV8xIiwibWlzY19pZF8xIiwibWlzY190eXBlXzIiLCJtaXNjX2lkXzIiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwibnVtYmVyIiwidGV4dCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIlBvc3RCb29raW5nRm9ybSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRTbGlkZXJNb2RlIiwic2V0U3RhdGUiLCJzbGlkZXJNb2RlIiwic3RhdGUiLCJTTElERVIxIiwicmVuZGVyIiwiaW52YWxpZCIsInN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImxvY2F0aW9uIiwiYm9vbCIsImZ1bmMiLCJmb3JtIiwiZGVzdHJveU9uVW5tb3VudCIsImZvcmNlVW5yZWdpc3Rlck9uVW5tb3VudCIsIlBvc3RCb29raW5nRm9ybUNvbnRhaW5lciIsIm5wc1Njb3JlIiwidmFsdWVzIiwidHJpcElkIiwicGFyYW1zIiwicmVxdWVzdGVkVHJpcElkIiwiYXBpUGFyYW1zIiwicHJvbW90ZXJfc2NvcmUiLCJucHMiLCJhZ2VudF9xdW90ZXNfcXVhbGl0eSIsImFnZW50X3F1b3Rlc190aW1lIiwiYWdlbnRfaW50ZXJhY3Rpb24iLCJhZ2VudF9pbnRlcmFjdGlvbl9jYWxsIiwidHRfd2Vic2l0ZV91c2UiLCJ0dF9wYXltZW50X3Byb2Nlc3MiLCJ0cmlwX2Fkdmlzb3JfaGVscGZ1bCIsInRyaXBfYWR2aXNvcl9yZXNwb25zZSIsInNlY3VyaXR5X3Rva2VuIiwic2VjdXJpdHlUb2tlbiIsInBvc3Rib29raW5nX3RyaXBfZmVlZGJhY2siLCJyZXF1ZXN0ZWRfdHJpcF9pZCIsImNvbW1lbnRzIiwicGxhdGZvcm0iLCJwYXJzZUludCIsImNyZWF0ZVBvc3RCb29raW5nRmVlZGJhY2siLCJkZXRhaWxzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwic3VibWl0dGVkIiwiTUlOX05QU19GT1JfUkFUSU5HIiwicmxwUGF0aCIsInNldFRpbWVvdXQiLCJwdXNoU3RhdGUiLCJxdWVyeSIsImZvcm1WYWx1ZXMiLCJpc1JlcXVpcmVkIiwiR0J1dHRvbkRpc2FibGUiLCJnbGFtb3JvdXMiLCJkaXYiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIlNsaWRlcjEiLCJjb21wb25lbnREaWRNb3VudCIsInRyYWNrU2VnbWVudCIsIk9SR0FOSVNNX1ZJRVdFRCIsIk5wc1JhZGlvSW5wdXQiLCJyZXF1aXJlZCIsIlN0YXJSYXRpbmciLCJTTElERVIyIiwicHJpc3RpbmUiLCJTbGlkZXIyIiwiVGV4dEFyZWEiLCJmZWVkYmFjayIsInRyaXAiLCJjdXJyZW50VHJpcCIsImRhdGEiLCJwb3N0Qm9va2luZ05wc0Zvcm0iLCJwdXNoIiwiZmVlZGJhY2tSZWR1Y2VycyIsImZlZWRiYWNrQWN0aW9ucyIsImdldFNlY3VyaXR5VG9rZW4iLCJGZWVkYmFjayIsIkxheW91dCIsImNhdGVnb3J5IiwibWlzY0lkMSIsIm1pc2NUeXBlMSIsIm1pc2NJZDIiLCJtaXNjVHlwZTIiLCJtaXNjX2lkXzMiLCJtaXNjSWQzIiwibWlzY190eXBlXzMiLCJtaXNjVHlwZTMiLCJtaXNjX2lkXzQiLCJtaXNjSWQ0IiwibWlzY190eXBlXzQiLCJtaXNjVHlwZTQiLCJtaXNjX2lkXzUiLCJtaXNjSWQ1IiwibWlzY190eXBlXzUiLCJtaXNjVHlwZTUiLCJvblNlbnNvckNoYW5nZSIsImlzVmlzaWJsZSIsImNvbmZpZyIsImlzRXZlbnRUcmFja2VkIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsb0JBQW9CLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxTQUFUO0FBQWtCQyxjQUFsQjtBQUFnQ0MsUUFBTTtBQUFFQyxXQUFGO0FBQVdDO0FBQVg7QUFBdEMsQ0FBRCxLQUFnRTtBQUV4RixRQUFNQyxlQUFlLENBQUNDLEtBQUQsRUFBT0MsSUFBUCxLQUFnQjtBQUNuQ1IsVUFBTVMsUUFBTixDQUFlRixLQUFmO0FBQ0EsdUJBQU8sTUFBTTtBQUNYLHVDQUFhO0FBQ1hHLGVBQU9DLCtCQURJO0FBRVhDLGlCQUFTLEVBRkU7QUFHWEMsZ0JBQU8sUUFISTtBQUlYQyxhQUFLLEVBSk07QUFLWEMscUJBQVksVUFMRDtBQU1YQyxtQkFBV2hCLE1BQU1RLElBTk47QUFPWFMscUJBQVksUUFQRDtBQVFYQyxtQkFBV1Y7QUFSQSxPQUFiO0FBVUQsS0FYRDtBQVlELEdBZEQ7O0FBZUEsU0FDRSwwQ0FDRTtBQUFLLGVBQVU7QUFBZixLQUVJUCxRQUFRa0IsR0FBUixDQUFZLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxLQUNWLDZCQUFDLFdBQUQ7QUFBVSxlQUFVLEtBQXBCO0FBQTBCLFNBQUtBO0FBQS9CLEtBQ0UsbURBQVdyQixLQUFYO0FBQWtCLFVBQUssT0FBdkI7QUFBK0IsUUFBSyxHQUFFQSxNQUFNUSxJQUFLLElBQUdhLEtBQU0sRUFBMUQ7QUFBNkQsZUFBVSxjQUF2RTtBQUNPLFdBQU9ELE9BQU9iLEtBRHJCO0FBQzRCLGFBQVNhLE9BQU9iLEtBQVAsS0FBaUJQLE1BQU1PLEtBRDVEO0FBRU8sY0FBVSxNQUFNRCxhQUFhYyxPQUFPYixLQUFwQixFQUEyQmEsT0FBT1osSUFBbEM7QUFGdkIsS0FERixFQUlFO0FBQU8sYUFBVSxHQUFFUixNQUFNUSxJQUFLLElBQUdhLEtBQU07QUFBdkMsS0FBMkNELE9BQU9aLElBQWxELENBSkYsQ0FERixDQUZKLENBREYsRUFhSUosV0FDQ0MsU0FBUztBQUFNLGVBQVU7QUFBaEIsS0FBb0NBLEtBQXBDLENBZGQsQ0FERjtBQWtCRCxDQW5DRDs7QUFxQ0FOLGtCQUFrQnVCLFNBQWxCLEdBQThCO0FBQzVCdEIsU0FBT3VCLG1CQUFVVixNQURXO0FBRTVCWixXQUFTc0IsbUJBQVVDLEtBRlM7QUFHNUJ0QixnQkFBY3FCLG1CQUFVRSxNQUhJO0FBSTVCdEIsUUFBTW9CLG1CQUFVVixNQUpZO0FBSzVCYSxRQUFNSCxtQkFBVUk7QUFMWSxDQUE5QjtBQVFBNUIsa0JBQWtCNkIsWUFBbEIsR0FBaUMsRUFBakM7ZUFFZTdCLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFTThCLGUscUJBQU4sTUFBTUEsZUFBTixTQUE4QkMsZ0JBQTlCLENBQXdDO0FBVXRDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLFNBT25CQyxhQVBtQixHQU9GMUIsS0FBRCxJQUFXO0FBQ3pCLFdBQUsyQixRQUFMLENBQWM7QUFBRUMsb0JBQVk1QjtBQUFkLE9BQWQ7QUFDRCxLQVRrQjs7QUFFakIsU0FBSzZCLEtBQUwsR0FBYTtBQUNYRCxrQkFBWUU7QUFERCxLQUFiO0FBR0Q7O0FBTURDLFdBQVM7QUFFUCxVQUFNO0FBQUVDLGFBQUY7QUFBV0MsZ0JBQVg7QUFBdUJDLGtCQUF2QjtBQUFxQ0M7QUFBckMsUUFBMkQsS0FBS1YsS0FBdEU7QUFFQSxXQUNFLDBDQUNFO0FBQU0sZ0JBQVVTO0FBQWhCLE9BRUksS0FBS0wsS0FBTCxDQUFXRCxVQUFYLEtBQTBCRSxrQkFBMUIsR0FDSSw2QkFBQyxlQUFEO0FBQVMscUJBQWUsS0FBS0osYUFBN0I7QUFBNEMsZUFBU00sT0FBckQ7QUFDUyxrQkFBWUMsVUFEckI7QUFDaUMsb0JBQWNFO0FBRC9DLE1BREosR0FHSSw2QkFBQyxnQkFBRDtBQUFTLHFCQUFlLEtBQUtULGFBQTdCO0FBQTRDLGVBQVNNLE9BQXJEO0FBQ1Msa0JBQVlDLFVBRHJCO0FBQ2lDLG9CQUFjRTtBQUQvQyxNQUxSLENBREYsQ0FERjtBQWFEOztBQXRDcUMsQyxTQUUvQnBCLFMsR0FBWTtBQUNqQnFCLFlBQVVwQixtQkFBVXFCLElBREg7QUFFakJMLFdBQVNoQixtQkFBVXFCLElBRkY7QUFHakJKLGNBQVlqQixtQkFBVXFCLElBSEw7QUFJakJILGdCQUFjbEIsbUJBQVVzQixJQUpQO0FBS2pCSCxxQkFBbUJuQixtQkFBVXNCO0FBTFosQzs7ZUF1Q04sMEJBQVU7QUFDdkJDLFFBQU0sb0JBRGlCO0FBRXZCQyxvQkFBa0IsS0FGSztBQUd2QkMsNEJBQTBCO0FBSEgsQ0FBVixFQUlabkIsZUFKWSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGY7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRU1vQix3QixzQkFBTixNQUFNQSx3QkFBTixTQUF1Q25CLGdCQUF2QyxDQUFpRDtBQUFBO0FBQUE7O0FBQUEsd0NBRS9DTSxLQUYrQyxHQUV2QztBQUNOYyxnQkFBVTtBQURKLEtBRnVDLE9BMkIvQ1QsWUEzQitDLEdBMkIvQlUsTUFBRCxJQUFZO0FBQ3pCLFlBQU1DLFNBQVMsS0FBS3BCLEtBQUwsQ0FBV3FCLE1BQVgsQ0FBa0JDLGVBQWpDO0FBRUEsWUFBTUMsWUFBWTtBQUNoQkMsd0JBQWdCTCxPQUFPTSxHQURQO0FBRWhCQyw4QkFBc0JQLE9BQU9PLG9CQUZiO0FBR2hCQywyQkFBbUJSLE9BQU9RLGlCQUhWO0FBSWhCQywyQkFBbUJULE9BQU9TLGlCQUpWO0FBS2hCQyxnQ0FBd0JWLE9BQU9VLHNCQUxmO0FBTWhCQyx3QkFBZ0JYLE9BQU9XLGNBTlA7QUFPaEJDLDRCQUFvQlosT0FBT1ksa0JBUFg7QUFRaEJDLDhCQUFzQmIsT0FBT2Esb0JBUmI7QUFTaEJDLCtCQUF1QmQsT0FBT2MscUJBVGQ7QUFVaEJDLHdCQUFnQixLQUFLbEMsS0FBTCxDQUFXbUM7QUFWWCxPQUFsQjtBQWFBWixnQkFBVWEseUJBQVYsR0FBc0M7QUFDcENDLDJCQUFtQmpCLE1BRGlCO0FBRXBDa0Isa0JBQVVuQixPQUFPbUIsUUFGbUI7QUFHcENDLGtCQUFVO0FBSDBCLE9BQXRDO0FBTUEsV0FBS3JDLFFBQUwsQ0FBYztBQUFFZ0Isa0JBQVVzQixTQUFTckIsT0FBT00sR0FBaEI7QUFBWixPQUFkO0FBRUEsYUFBTyxLQUFLekIsS0FBTCxDQUFXeUMseUJBQVgsQ0FBcUNyQixNQUFyQyxFQUE2Q0csU0FBN0MsQ0FBUDtBQUNELEtBcEQ4QyxPQXNEL0NiLGlCQXREK0MsR0FzRDFCZ0MsT0FBRCxJQUFhO0FBQy9CLHlCQUFPLE1BQU07QUFDWCx5Q0FBYTtBQUNYaEUsaUJBQU9nRSxRQUFRaEUsS0FESjtBQUVYRSxtQkFBUzhELFFBQVE5RCxPQUZOO0FBR1hDLGtCQUFRLEVBSEc7QUFJWEMsZUFBSzRELFFBQVE1RCxHQUFSLElBQWU7QUFKVCxTQUFiO0FBTUQsT0FQRDtBQVFELEtBL0Q4QztBQUFBOztBQWdCL0M2RCxxQkFBbUJDLFNBQW5CLEVBQThCO0FBRTVCLFFBQUksS0FBSzVDLEtBQUwsQ0FBVzZDLFNBQVgsSUFBd0IsS0FBS3pDLEtBQUwsQ0FBV2MsUUFBWCxJQUF1QjRCLDZCQUFuRCxFQUF1RTtBQUNyRSxZQUFNQyxVQUFVLDJCQUFVLEtBQUsvQyxLQUFMLENBQVdxQixNQUFYLENBQWtCQyxlQUE1QixDQUFoQjtBQUVBMEIsaUJBQVcsTUFBTTtBQUNmLGFBQUtoRCxLQUFMLENBQVdpRCxTQUFYLENBQXFCRixPQUFyQjtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7QUFDRjs7QUF3Q0R6QyxXQUFTO0FBQ1AsVUFBTTtBQUFFdUM7QUFBRixRQUFnQixLQUFLN0MsS0FBM0I7QUFDQSxVQUFNO0FBQUVrQjtBQUFGLFFBQWUsS0FBS2QsS0FBMUI7QUFFQSxXQUNFLDBDQUNFLDZCQUFDLGFBQUQ7QUFBaUIsOEJBQWpCO0FBQ2lCLHFCQUFlO0FBQUVxQixhQUFLZSxTQUFTLEtBQUt4QyxLQUFMLENBQVdXLFFBQVgsQ0FBb0J1QyxLQUFwQixDQUEwQjFCLGNBQW5DO0FBQVAsT0FEaEM7QUFFaUIsa0JBQVksS0FBS3hCLEtBQUwsQ0FBV21ELFVBRnhDO0FBR2lCLGdCQUFVLEtBQUsxQyxZQUhoQztBQUlpQix5QkFBbUIsS0FBS0M7QUFKekMsTUFERixFQU9JLDZCQUFDLHFCQUFEO0FBQU8sa0JBQVksSUFBbkI7QUFDTyxlQUFTLElBRGhCO0FBRU8sY0FBUW1DO0FBRmYsT0FHRzNCLFdBQVc0Qiw2QkFBWCxHQUFnQyw2QkFBQyxrQkFBRDtBQUFXLHlCQUFtQixLQUFLcEM7QUFBbkMsTUFBaEMsR0FBMkYsNkJBQUMsaUJBQUQsT0FIOUYsQ0FQSixDQURGO0FBZ0JEOztBQXJGOEMsQyxTQU14Q3BCLFMsR0FBWTtBQUNqQjZDLGlCQUFlNUMsbUJBQVVJLE1BQVYsQ0FBaUJ5RCxVQURmO0FBRWpCL0IsVUFBUTlCLG1CQUFVVixNQUZEO0FBR2pCOEIsWUFBVXBCLG1CQUFVVixNQUhIO0FBSWpCZ0UsYUFBV3RELG1CQUFVcUIsSUFKSjtBQUtqQnVDLGNBQVk1RCxtQkFBVVYsTUFBVixDQUFpQnVFLFVBTFo7QUFNakJYLDZCQUEyQmxELG1CQUFVc0IsSUFOcEI7QUFPakJvQyxhQUFXMUQsbUJBQVVzQjtBQVBKLEM7ZUFrRk5JLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNb0MsaUJBQWlCQyxtQkFBVUMsR0FBVixDQUFjO0FBQ25DLHdCQUFzQjtBQUNwQkMscUJBQWlCLFNBREc7QUFFcEJDLFdBQU87QUFGYTtBQURhLENBQWQsQ0FBdkI7O0lBT01DLE8scUJBQU4sTUFBTUEsT0FBTixTQUFzQjVELGdCQUF0QixDQUFnQztBQVU5QjZELHNCQUFvQjtBQUNsQixTQUFLM0QsS0FBTCxDQUFXNEQsWUFBWCxDQUF3QjtBQUN0QmxGLGFBQU9tRiw4QkFEZTtBQUV0QmpGLGVBQVM7QUFGYSxLQUF4QjtBQUlEOztBQUVEMEIsV0FBUztBQUVQLFVBQU07QUFBRUMsYUFBRjtBQUFXQyxnQkFBWDtBQUF1QlA7QUFBdkIsUUFBeUMsS0FBS0QsS0FBcEQ7QUFFQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUksaUJBQVU7QUFBZCx1RUFBdUc7QUFBSyxpQkFBVTtBQUFmLFdBQXZHLENBREYsRUFFRSw2QkFBQyxnQkFBRDtBQUNFLFlBQUssS0FEUDtBQUVFLGlCQUFXOEQsc0JBRmI7QUFHRSxnQkFBVUMsd0JBSFo7QUFJRSxlQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsRUFBNUI7QUFKWCxNQUZGLENBREYsRUFVRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFJLGlCQUFVO0FBQWQscURBREYsRUFFRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FBK0IsNkJBQUMsdUJBQUQsT0FBL0IsQ0FERixFQUVFO0FBQUcsaUJBQVU7QUFBYixnRkFGRixDQURGLEVBS0UsNkJBQUMsZ0JBQUQ7QUFDRSxZQUFLLHNCQURQO0FBRUUsaUJBQVdDLG1CQUZiO0FBR0UsWUFBSztBQUhQLE1BTEYsQ0FGRixFQWFFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUErQiw2QkFBQyxrQkFBRCxPQUEvQixDQURGLEVBRUU7QUFBRyxpQkFBVTtBQUFiLHlDQUZGLENBREYsRUFLRSw2QkFBQyxnQkFBRDtBQUNFLFlBQUssbUJBRFA7QUFFRSxpQkFBV2pHLDBCQUZiO0FBR0UsZUFBUyxDQUFDO0FBQUVTLGNBQU0sS0FBUjtBQUFlRCxlQUFPO0FBQXRCLE9BQUQsRUFBNEI7QUFBRUMsY0FBTSxJQUFSO0FBQWNELGVBQU87QUFBckIsT0FBNUI7QUFIWCxNQUxGLENBYkYsRUF3QkU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQStCLDZCQUFDLG9CQUFELE9BQS9CLENBREYsRUFFRTtBQUFHLGlCQUFVO0FBQWIsZ0RBRkYsQ0FERixFQUtFLDZCQUFDLGdCQUFEO0FBQ0UsWUFBSyxtQkFEUDtBQUVFLGlCQUFXUiwwQkFGYjtBQUdFLGVBQVMsQ0FBQztBQUFFUyxjQUFNLEtBQVI7QUFBZUQsZUFBTztBQUF0QixPQUFELEVBQTRCO0FBQUVDLGNBQU0sSUFBUjtBQUFjRCxlQUFPO0FBQXJCLE9BQTVCO0FBSFgsTUFMRixDQXhCRixFQW1DRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FBK0IsNkJBQUMsWUFBRCxPQUEvQixDQURGLEVBRUU7QUFBRyxpQkFBVTtBQUFiLGtEQUZGLENBREYsRUFLRSw2QkFBQyxnQkFBRDtBQUNFLFlBQUssd0JBRFA7QUFFRSxpQkFBV1IsMEJBRmI7QUFHRSxlQUFTLENBQUM7QUFBRVMsY0FBTSxlQUFSO0FBQXlCRCxlQUFPO0FBQWhDLE9BQUQsRUFBc0M7QUFBRUMsY0FBTSxZQUFSO0FBQXNCRCxlQUFPO0FBQTdCLE9BQXRDLEVBQXdFO0FBQy9FQyxjQUFNLE1BRHlFO0FBRS9FRCxlQUFPO0FBRndFLE9BQXhFO0FBSFgsTUFMRixDQW5DRixFQWlERTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxjQUFEO0FBQWdCLGlCQUFVO0FBQTFCLE9BQ0U7QUFBUSxnQkFBVWdDLFdBQVdDLFVBQTdCO0FBQ1EsZUFBUyxNQUFNUCxjQUFjZ0Usa0JBQWQsQ0FEdkI7QUFFUSxpQkFBVTtBQUZsQixPQUV5RztBQUN2RyxpQkFBVTtBQUQ2RixjQUZ6RyxFQUlFO0FBQU0saUJBQVU7QUFBaEIsT0FBeUMxRCxXQUFXQyxVQUFYLEdBQXdCLDZCQUFDLG9CQUFELE9BQXhCLEdBQTZDLDZCQUFDLHFCQUFELE9BQXRGLENBSkYsQ0FERixDQURGLENBakRGLENBVkYsQ0FERjtBQXlFRDs7QUE5RjZCLEMsU0FFdkJsQixTLEdBQVk7QUFDakJpQixXQUFTaEIsbUJBQVVxQixJQURGO0FBRWpCSixjQUFZakIsbUJBQVVxQixJQUZMO0FBR2pCc0QsWUFBVTNFLG1CQUFVcUIsSUFISDtBQUlqQlgsaUJBQWVWLG1CQUFVc0IsSUFKUjtBQUtqQitDLGdCQUFjckUsbUJBQVVzQixJQUFWLENBQWV1QztBQUxaLEM7ZUErRk5NLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hmOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLE1BQU1MLGlCQUFpQkMsbUJBQVVDLEdBQVYsQ0FBYztBQUNuQyx3QkFBc0I7QUFDcEJDLHFCQUFpQixTQURHO0FBRXBCQyxXQUFPO0FBRmE7QUFEYSxDQUFkLENBQXZCOztJQU9NVSxPLHFCQUFOLE1BQU1BLE9BQU4sU0FBc0JyRSxnQkFBdEIsQ0FBZ0M7QUFVOUI2RCxzQkFBb0I7QUFDbEIsU0FBSzNELEtBQUwsQ0FBVzRELFlBQVgsQ0FBd0I7QUFDdEJsRixhQUFPbUYsOEJBRGU7QUFFdEJqRixlQUFTO0FBRmEsS0FBeEI7QUFJRDs7QUFFRDBCLFdBQVM7QUFDUCxVQUFNO0FBQUVDLGFBQUY7QUFBV0MsZ0JBQVg7QUFBdUJQO0FBQXZCLFFBQXlDLEtBQUtELEtBQXBEO0FBRUEsV0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFJLGlCQUFVO0FBQWQsOERBREYsRUFFRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FBK0IsNkJBQUMsZ0JBQUQsT0FBL0IsQ0FERixFQUVFO0FBQUcsaUJBQVU7QUFBYiwrQ0FGRixDQURGLEVBS0UsNkJBQUMsZ0JBQUQ7QUFDRSxZQUFLLGdCQURQO0FBRUUsaUJBQVdqQywwQkFGYjtBQUdFLGVBQVMsQ0FBQztBQUFFUyxjQUFNLE1BQVI7QUFBZ0JELGVBQU87QUFBdkIsT0FBRCxFQUE2QjtBQUFFQyxjQUFNLFNBQVI7QUFBbUJELGVBQU87QUFBMUIsT0FBN0IsRUFBNEQ7QUFBRUMsY0FBTSxXQUFSO0FBQXFCRCxlQUFPO0FBQTVCLE9BQTVEO0FBSFgsTUFMRixDQUZGLEVBYUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQStCLDZCQUFDLGdCQUFELE9BQS9CLENBREYsRUFFRTtBQUFHLGlCQUFVO0FBQWIscUNBRkYsQ0FERixFQUtFLDZCQUFDLGdCQUFEO0FBQ0UsWUFBSyxvQkFEUDtBQUVFLGlCQUFXUiwwQkFGYjtBQUdFLGVBQVMsQ0FBQztBQUFFUyxjQUFNLE1BQVI7QUFBZ0JELGVBQU87QUFBdkIsT0FBRCxFQUE2QjtBQUFFQyxjQUFNLFNBQVI7QUFBbUJELGVBQU87QUFBMUIsT0FBN0IsRUFBNEQ7QUFBRUMsY0FBTSxXQUFSO0FBQXFCRCxlQUFPO0FBQTVCLE9BQTVEO0FBSFgsTUFMRixDQWJGLENBREYsRUEwQkU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSSxpQkFBVTtBQUFkLDJEQURGLEVBRUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQStCLDZCQUFDLGFBQUQsT0FBL0IsQ0FERixFQUVFO0FBQUcsaUJBQVU7QUFBYixpQ0FGRixDQURGLEVBS0UsNkJBQUMsZ0JBQUQ7QUFDRSxZQUFLLHNCQURQO0FBRUUsaUJBQVdSLDBCQUZiO0FBR0UsZUFBUyxDQUFDO0FBQUVTLGNBQU0sS0FBUjtBQUFlRCxlQUFPO0FBQXRCLE9BQUQsRUFBNEI7QUFBRUMsY0FBTSxJQUFSO0FBQWNELGVBQU87QUFBckIsT0FBNUI7QUFIWCxNQUxGLENBRkYsRUFhRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FBK0IsNkJBQUMsa0JBQUQsT0FBL0IsQ0FERixFQUVFO0FBQUcsaUJBQVU7QUFBYix1Q0FGRixDQURGLEVBS0UsNkJBQUMsZ0JBQUQ7QUFDRSxZQUFLLHVCQURQO0FBRUUsaUJBQVdSLDBCQUZiO0FBR0UsZUFBUyxDQUFDO0FBQUVTLGNBQU0sTUFBUjtBQUFnQkQsZUFBTztBQUF2QixPQUFELEVBQTZCO0FBQUVDLGNBQU0sU0FBUjtBQUFtQkQsZUFBTztBQUExQixPQUE3QixFQUE0RDtBQUFFQyxjQUFNLE1BQVI7QUFBZ0JELGVBQU87QUFBdkIsT0FBNUQ7QUFIWCxNQUxGLENBYkYsQ0ExQkYsRUFtREU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSSxpQkFBVTtBQUFkLGtCQURGLEVBRUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxZQUFLLFVBRFA7QUFFRSxpQkFBVzZGLGlCQUZiO0FBR0UsbUJBQVk7QUFIZCxNQURGLENBRkYsRUFTRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxjQUFEO0FBQWdCLGlCQUFVO0FBQTFCLE9BQ0U7QUFBUSxlQUFTLE1BQU1uRSxjQUFjSSxrQkFBZCxDQUF2QjtBQUNRLGlCQUFVO0FBRGxCLE9BRUU7QUFBTSxpQkFBVTtBQUFoQixPQUF3Qyw2QkFBQyxrQkFBRCxPQUF4QyxDQUZGLFNBREYsRUFLRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFRLFlBQUssUUFBYjtBQUFzQixnQkFBVUUsV0FBV0MsVUFBM0M7QUFDUSxpQkFBVTtBQURsQixnQkFERixDQUxGLENBREYsQ0FURixDQW5ERixDQURGO0FBNkVEOztBQWpHNkIsQyxTQUV2QmxCLFMsR0FBWTtBQUNqQmlCLFdBQVNoQixtQkFBVXFCLElBREY7QUFFakJKLGNBQVlqQixtQkFBVXFCLElBRkw7QUFHakJzRCxZQUFVM0UsbUJBQVVxQixJQUhIO0FBSWpCWCxpQkFBZVYsbUJBQVVzQixJQUpSO0FBS2pCK0MsZ0JBQWNyRSxtQkFBVXNCLElBQVYsQ0FBZXVDO0FBTFosQztlQWtHTmUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7ZUFFZSw2QkFBVyx5QkFDeEIvRCxTQUFTO0FBQ1AsU0FBTztBQUNMeUMsZUFBV3pDLE1BQU1pRSxRQUFOLENBQWV4QixTQURyQjtBQUVMVixtQkFBZS9CLE1BQU1rRSxJQUFOLENBQVdDLFdBQVgsQ0FBdUJDLElBQXZCLENBQTRCckMsYUFGdEM7QUFHTGdCLGdCQUFZL0MsTUFBTVUsSUFBTixDQUFXMkQsa0JBQVgsSUFBaUNyRSxNQUFNVSxJQUFOLENBQVcyRCxrQkFBWCxDQUE4QnRELE1BQS9ELElBQXlFO0FBSGhGLEdBQVA7QUFLRCxDQVB1QixFQVF4QjtBQUNFc0IsOERBREY7QUFFRVEsYUFBV3lCO0FBRmIsQ0FSd0IsRUFheEI3RSxzQkFid0IsQ0FBWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZjs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNOEUsbUJBQW1CO0FBQ3ZCTiw0QkFEdUI7QUFFdkJDO0FBRnVCLENBQXpCOztBQUtBLE1BQU1NLGtCQUFrQjtBQUN0QkM7QUFEc0IsQ0FBeEI7O0lBT01DLFEscUJBQU4sTUFBTUEsUUFBTixTQUF1QmhGLGdCQUF2QixDQUFpQztBQUkvQlEsV0FBUztBQUVQLFdBQ0UsNkJBQUMsZUFBRCxFQUFZLEtBQUtOLEtBQWpCLENBREY7QUFHRDs7QUFUOEIsQyxTQUV4QlYsUyxHQUFZLEU7ZUFVTndGLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JmOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUMsTSxHQUFOLE1BQU1BLE1BQU4sU0FBcUJqRixnQkFBckIsQ0FBK0I7QUFFN0JDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsU0FpQm5CVSxpQkFqQm1CLEdBaUJDLENBQUM4RCxPQUFPLEVBQVIsS0FBZTtBQUNqQyx5QkFBTyxNQUFNO0FBQ1gseUNBQWE7QUFDWDlGLGlCQUFPOEYsS0FBSzlGLEtBREQ7QUFFWHNHLG9CQUFVUixLQUFLUSxRQUFMLElBQWlCLEtBRmhCO0FBR1hwRyxtQkFBUzRGLEtBQUs1RixPQUFMLElBQWdCLEVBSGQ7QUFJWEMsa0JBQVEyRixLQUFLM0YsTUFKRjtBQUtYQyxlQUFLMEYsS0FBSzFGLEdBTEM7QUFNWEUscUJBQVd3RixLQUFLUyxPQU5MO0FBT1hsRyx1QkFBYXlGLEtBQUtVLFNBUFA7QUFRWGhHLHFCQUFXc0YsS0FBS1csT0FSTDtBQVNYbEcsdUJBQWF1RixLQUFLWSxTQVRQO0FBVVhDLHFCQUFXYixLQUFLYyxPQVZMO0FBV1hDLHVCQUFhZixLQUFLZ0IsU0FYUDtBQVlYQyxxQkFBV2pCLEtBQUtrQixPQVpMO0FBYVhDLHVCQUFhbkIsS0FBS29CLFNBYlA7QUFjWEMscUJBQVdyQixLQUFLc0IsT0FkTDtBQWVYQyx1QkFBYXZCLEtBQUt3QjtBQWZQLFNBQWI7QUFpQkQsT0FsQkQ7QUFtQkQsS0FyQ2tCOztBQUFBLFNBdUNuQkMsY0F2Q21CLEdBdUNGLENBQUNDLFNBQUQsRUFBWUMsTUFBWixLQUF1QjtBQUN0QyxVQUFJRCxTQUFKLEVBQWU7QUFDYixZQUFJLENBQUMsS0FBS0UsY0FBTCxDQUFvQkQsT0FBTzNILElBQTNCLENBQUwsRUFBdUM7QUFDckMsZUFBSzRILGNBQUwsQ0FBb0JELE9BQU8zSCxJQUEzQixJQUFtQyxJQUFuQztBQUVBLGVBQUtrQyxpQkFBTCxDQUF1QjtBQUNyQmhDLG1CQUFPbUYsOEJBRGM7QUFFckJqRixxQkFBU3VILE9BQU8zSCxJQUZLO0FBR3JCTSxpQkFBSztBQUhnQixXQUF2QjtBQUtEO0FBQ0Y7QUFDRixLQW5Ea0I7O0FBRWpCLFNBQUtzSCxjQUFMLEdBQXNCLEVBQXRCO0FBQ0Q7O0FBRUR6QyxzQkFBb0I7QUFDbEI7OztBQUdEOztBQUVEMEMsbUNBQWlDckcsS0FBakMsRUFBd0NzRyxTQUF4QyxFQUFtRDtBQUNqRDs7O0FBR0Q7O0FBc0NEaEcsV0FBUztBQUVQLFdBQ0U7QUFBSyxpQkFBVTtBQUFmLE9BRUUsNkJBQUMsb0JBQUQsUUFDRTtBQUFNLFlBQUssZUFBWDtBQUEyQixlQUFRO0FBQW5DLE1BREYsRUFFRTtBQUFNLFlBQUssV0FBWDtBQUF1QixlQUFRO0FBQS9CLE1BRkYsRUFHRTtBQUFNLFlBQUssTUFBWDtBQUFrQixlQUFRO0FBQTFCLE1BSEYsQ0FGRixFQVFFLDZCQUFDLGNBQUQ7QUFBUSxlQUFTO0FBQWpCLE1BUkYsRUFVRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxlQUFEO0FBQVEsWUFBSztBQUFiLE1BREYsRUFFRSw2QkFBQyxlQUFELE9BRkYsQ0FERixDQURGLENBVkYsQ0FERjtBQXFCRDs7QUE5RTRCLEM7QUFpRi9CeUUsT0FBT3pGLFNBQVAsR0FBbUIsRUFBbkI7ZUFFZXlGLE0iLCJmaWxlIjoicG9zdGJvb2tpbmctZmVlZGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEdGbGV4QnRuIH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQsIE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5cbmNvbnN0IFNpbmdsZVNlbGVjdEZpZWxkID0gKHsgaW5wdXQsIG9wdGlvbnMsIGRlZmF1bHRWYWx1ZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IHtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUsbmFtZSkgPT4ge1xuICAgIGlucHV0Lm9uQ2hhbmdlKHZhbHVlKTtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICAgIHNlY3Rpb246ICcnLFxuICAgICAgICBvYmplY3Q6J29wdGlvbicsXG4gICAgICAgIGN0YTogJycsXG4gICAgICAgIG1pc2NfdHlwZV8xOidRdWVzdGlvbicsXG4gICAgICAgIG1pc2NfaWRfMTogaW5wdXQubmFtZSxcbiAgICAgICAgbWlzY190eXBlXzI6J0Fuc3dlcicsXG4gICAgICAgIG1pc2NfaWRfMjogbmFtZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sMjQgcGwxNSBmbGV4V3JhcCc+XG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxHRmxleEJ0biBjbGFzc05hbWU9J3B0OCcga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxpbnB1dCB7Li4uaW5wdXR9IHR5cGU9J3JhZGlvJyBpZD17YCR7aW5wdXQubmFtZX1fJHtpbmRleH1gfSBjbGFzc05hbWU9J3JhZGlvLWNvbW1vbidcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9IGNoZWNrZWQ9e29wdGlvbi52YWx1ZSA9PT0gaW5wdXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hhbmdlKG9wdGlvbi52YWx1ZSwgb3B0aW9uLm5hbWUpfSAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YCR7aW5wdXQubmFtZX1fJHtpbmRleH1gfT57b3B0aW9uLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvR0ZsZXhCdG4+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgdG91Y2hlZCAmJlxuICAgICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgICAgfVxuICAgIDwvZGl2Pik7XG59O1xuXG5TaW5nbGVTZWxlY3RGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuU2luZ2xlU2VsZWN0RmllbGQuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNlbGVjdEZpZWxkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IHsgU0xJREVSMSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2xpZGVyMSBmcm9tICcuL1NsaWRlcjEnO1xuaW1wb3J0IFNsaWRlcjIgZnJvbSAnLi9TbGlkZXIyJztcblxuY2xhc3MgUG9zdEJvb2tpbmdGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdWJtaXR0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2xpZGVyTW9kZTogU0xJREVSMVxuICAgIH07XG4gIH1cblxuICBzZXRTbGlkZXJNb2RlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlck1vZGU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHsgaW52YWxpZCwgc3VibWl0dGluZywgaGFuZGxlU3VibWl0LCB0cmFja1NlZ21lbnRFdmVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlck1vZGUgPT09IFNMSURFUjFcbiAgICAgICAgICAgICAgPyA8U2xpZGVyMSBzZXRTbGlkZXJNb2RlPXt0aGlzLnNldFNsaWRlck1vZGV9IGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ30gdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH0gLz5cbiAgICAgICAgICAgICAgOiA8U2xpZGVyMiBzZXRTbGlkZXJNb2RlPXt0aGlzLnNldFNsaWRlck1vZGV9IGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ30gdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ3Bvc3RCb29raW5nTnBzRm9ybScsXG4gIGRlc3Ryb3lPblVubW91bnQ6IGZhbHNlLFxuICBmb3JjZVVucmVnaXN0ZXJPblVubW91bnQ6IHRydWUsXG59KShQb3N0Qm9va2luZ0Zvcm0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3N0Qm9va2luZ0Zvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCBUaGFua1lvdSBmcm9tICcuLi9jb21wb25lbnRzL1RoYW5rWW91JztcbmltcG9ydCBSYXRpbmdBcHAgZnJvbSAnYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svY29tcG9uZW50cy9SYXRpbmdBcHAnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgeyBydHJpcFBhdGggfSBmcm9tICdoZWxwZXJzL3VybEhlbHBlcnMnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHsgTUlOX05QU19GT1JfUkFUSU5HIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY2xhc3MgUG9zdEJvb2tpbmdGb3JtQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBucHNTY29yZTogMFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2VjdXJpdHlUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdWJtaXR0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjcmVhdGVQb3N0Qm9va2luZ0ZlZWRiYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc3VibWl0dGVkICYmIHRoaXMuc3RhdGUubnBzU2NvcmUgPD0gTUlOX05QU19GT1JfUkFUSU5HKSB7XG4gICAgICBjb25zdCBybHBQYXRoID0gcnRyaXBQYXRoKHRoaXMucHJvcHMucGFyYW1zLnJlcXVlc3RlZFRyaXBJZCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZShybHBQYXRoKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zdCB0cmlwSWQgPSB0aGlzLnByb3BzLnBhcmFtcy5yZXF1ZXN0ZWRUcmlwSWQ7XG5cbiAgICBjb25zdCBhcGlQYXJhbXMgPSB7XG4gICAgICBwcm9tb3Rlcl9zY29yZTogdmFsdWVzLm5wcyxcbiAgICAgIGFnZW50X3F1b3Rlc19xdWFsaXR5OiB2YWx1ZXMuYWdlbnRfcXVvdGVzX3F1YWxpdHksXG4gICAgICBhZ2VudF9xdW90ZXNfdGltZTogdmFsdWVzLmFnZW50X3F1b3Rlc190aW1lLFxuICAgICAgYWdlbnRfaW50ZXJhY3Rpb246IHZhbHVlcy5hZ2VudF9pbnRlcmFjdGlvbixcbiAgICAgIGFnZW50X2ludGVyYWN0aW9uX2NhbGw6IHZhbHVlcy5hZ2VudF9pbnRlcmFjdGlvbl9jYWxsLFxuICAgICAgdHRfd2Vic2l0ZV91c2U6IHZhbHVlcy50dF93ZWJzaXRlX3VzZSxcbiAgICAgIHR0X3BheW1lbnRfcHJvY2VzczogdmFsdWVzLnR0X3BheW1lbnRfcHJvY2VzcyxcbiAgICAgIHRyaXBfYWR2aXNvcl9oZWxwZnVsOiB2YWx1ZXMudHJpcF9hZHZpc29yX2hlbHBmdWwsXG4gICAgICB0cmlwX2Fkdmlzb3JfcmVzcG9uc2U6IHZhbHVlcy50cmlwX2Fkdmlzb3JfcmVzcG9uc2UsXG4gICAgICBzZWN1cml0eV90b2tlbjogdGhpcy5wcm9wcy5zZWN1cml0eVRva2VuXG4gICAgfTtcblxuICAgIGFwaVBhcmFtcy5wb3N0Ym9va2luZ190cmlwX2ZlZWRiYWNrID0ge1xuICAgICAgcmVxdWVzdGVkX3RyaXBfaWQ6IHRyaXBJZCxcbiAgICAgIGNvbW1lbnRzOiB2YWx1ZXMuY29tbWVudHMsXG4gICAgICBwbGF0Zm9ybTogJ01vYmlsZSdcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5wc1Njb3JlOiBwYXJzZUludCh2YWx1ZXMubnBzKSB9KTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNyZWF0ZVBvc3RCb29raW5nRmVlZGJhY2sodHJpcElkLCBhcGlQYXJhbXMpO1xuICB9O1xuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGRldGFpbHMpID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IGRldGFpbHMuZXZlbnQsXG4gICAgICAgIHNlY3Rpb246IGRldGFpbHMuc2VjdGlvbixcbiAgICAgICAgb2JqZWN0OiAnJyxcbiAgICAgICAgY3RhOiBkZXRhaWxzLmN0YSB8fCAnJ1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3VibWl0dGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbnBzU2NvcmUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFBvc3RCb29raW5nRm9ybSBlbmFibGVSZWluaXRpYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IG5wczogcGFyc2VJbnQodGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeS5wcm9tb3Rlcl9zY29yZSkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudEV2ZW50PXt0aGlzLnRyYWNrU2VnbWVudEV2ZW50fSAvPlxuICAgICAgICB7XG4gICAgICAgICAgPE1vZGFsIGhhc05vQ2xvc2U9e3RydWV9XG4gICAgICAgICAgICAgICAgIHRyaWdnZXI9e251bGx9XG4gICAgICAgICAgICAgICAgIGlzT3Blbj17c3VibWl0dGVkfT5cbiAgICAgICAgICAgIHtucHNTY29yZSA+IE1JTl9OUFNfRk9SX1JBVElORyA/IDxSYXRpbmdBcHAgdHJhY2tTZWdtZW50RXZlbnQ9e3RoaXMudHJhY2tTZWdtZW50RXZlbnR9IC8+IDogPFRoYW5rWW91IC8+fVxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdEJvb2tpbmdGb3JtQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHtcbiAgUXVhbGl0eVF1b3Rlc0ljb24sXG4gIENhbGxVcyxcbiAgTWVzc2FnZUljb25OZXcsXG4gIER1cmF0aW9uSWNvbixcbiAgUmlnaHRXaGl0ZUFycm93LFxuICBSaWdodEdyZXlBcnJvd1xufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBTTElERVIyIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAndXRpbHMvZm9ybVZhbGlkYXRvcnMnO1xuaW1wb3J0IE5wc1JhZGlvSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9OcHNSYWRpb0lucHV0JztcbmltcG9ydCBTaW5nbGVTZWxlY3RGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZVNlbGVjdEZpZWxkJztcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvU3RhclJhdGluZyc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHQnV0dG9uRGlzYWJsZSA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiBidXR0b25bZGlzYWJsZWRdJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxuICAgIGNvbG9yOiAnI2IyYjJiMidcbiAgfVxufSk7XG5cbmNsYXNzIFNsaWRlcjEgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3VibWl0dGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJpc3RpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNldFNsaWRlck1vZGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9WSUVXRUQsXG4gICAgICBzZWN0aW9uOiAnUGFnZSAxJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBpbnZhbGlkLCBzdWJtaXR0aW5nLCBzZXRTbGlkZXJNb2RlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdDQ4Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhEQ29sdW1uIHNiY3cgbWI4XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm0wIGYxNmEgZnc5IHB0MjQgcGwxNSBwcjE1XCI+SG93IGxpa2VseSBhcmUgeW91IHRvIHJlY29tbWVuZCBUcmF2ZWxUcmlhbmdsZSB0byBhIGZyaWVuZD8gPHN1cCBjbGFzc05hbWU9XCJwZmMyXCI+Kjwvc3VwPjwvaDM+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwibnBzXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17TnBzUmFkaW9JbnB1dH1cbiAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cbiAgICAgICAgICAgIG9wdGlvbnM9e1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RENvbHVtbiBzYmN3XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm0wIGYxNiBmdzkgcHQyNCBwbDE1IHByMTVcIj5SYXRlIHlvdXIgZXhwZXJpZW5jZSB3aXRoIG91ciBUcmF2ZWwgQWdlbnRzPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1IGJiJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxRdWFsaXR5UXVvdGVzSWNvbiAvPjwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXhGdWxsIGYxNHAnPkhvdyB3YXMgdGhlIHF1YWxpdHkgb2YgcXVvdGVzIHByb3ZpZGVkIChpdGluZXJhcnkgYW5kIHBhY2thZ2UgZGV0YWlscyk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiYWdlbnRfcXVvdGVzX3F1YWxpdHlcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1N0YXJSYXRpbmd9XG4gICAgICAgICAgICAgIHRleHQ9J2hlbHAnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHB0MjQgcGIyNCBwbDE1IHByMTUgYmInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtMjQgbXIxNSc+PER1cmF0aW9uSWNvbiAvPjwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXhGdWxsIGYxNHAnPldhcyB0aGUgYWdlbnQocykgcmVzcG9uc2UgZmFzdD88L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiYWdlbnRfcXVvdGVzX3RpbWVcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1NpbmdsZVNlbGVjdEZpZWxkfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbeyBuYW1lOiAnWWVzJywgdmFsdWU6IDIgfSwgeyBuYW1lOiAnTm8nLCB2YWx1ZTogMSB9XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NiY3cgcHQyNCBwYjI0IHBsMTUgcHIxNSBiYic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC0yNCBtcjE1Jz48TWVzc2FnZUljb25OZXcgLz48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4RnVsbCBmMTRwJz5XYXMgdGhlIGFnZW50KHMpIGludGVyYWN0aW9uIHBsZWFzYW50PzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJhZ2VudF9pbnRlcmFjdGlvblwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17U2luZ2xlU2VsZWN0RmllbGR9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t7IG5hbWU6ICdZZXMnLCB2YWx1ZTogMiB9LCB7IG5hbWU6ICdObycsIHZhbHVlOiAxIH1dfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1IGJiJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxDYWxsVXMgLz48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4RnVsbCBmMTRwJz5Ub3RhbCBudW1iZXIgb2YgY2FsbHMgdGhhdCB5b3UgcmVjZWl2ZWQ/PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImFnZW50X2ludGVyYWN0aW9uX2NhbGxcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1NpbmdsZVNlbGVjdEZpZWxkfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbeyBuYW1lOiAnRXhwZWN0ZWQgTW9yZScsIHZhbHVlOiAxIH0sIHsgbmFtZTogJ0p1c3QgUmlnaHQnLCB2YWx1ZTogMiB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0hpZ2gnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAzXG4gICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Jjdyc+XG4gICAgICAgICAgICA8R0J1dHRvbkRpc2FibGUgY2xhc3NOYW1lPSdmbGV4IHdmdWxsIHoxMCBwcjE1IHBsMTUgcHQ4IHBiOCBqdXN0aWZ5RW5kJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aW52YWxpZCB8fCBzdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNsaWRlck1vZGUoU0xJREVSMil9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBwYmMyIHJhZGl1czIgIGF0X3N1Ym1pdCAgZjE2IGZ3NyBzZmN3IGNvbC14cy02IGFsaWduQ2VudGVyIGJ0bi1maWxsZWQtcHJpLWxhcmdlXCI+PHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXhGdWxsJz5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtMjQgYWJzb2x1dGUgcjE1Jz57aW52YWxpZCB8fCBzdWJtaXR0aW5nID8gPFJpZ2h0R3JleUFycm93IC8+IDogPFJpZ2h0V2hpdGVBcnJvdyAvPn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HQnV0dG9uRGlzYWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7IFNMSURFUjEgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFNpbmdsZVNlbGVjdEZpZWxkIGZyb20gJy4uL2NvbXBvbmVudHMvU2luZ2xlU2VsZWN0RmllbGQnO1xuaW1wb3J0IHsgTGVmdFJlZEFycm93LCBNb2JpbGVJY29uLCBCdWRnZXRJY29uLCBGQVFJY29uLCBEdXJhdGlvbkljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0QXJlYSc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHQnV0dG9uRGlzYWJsZSA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiBidXR0b25bZGlzYWJsZWRdJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxuICAgIGNvbG9yOiAnI2IyYjJiMidcbiAgfVxufSk7XG5cbmNsYXNzIFNsaWRlcjIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3VibWl0dGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJpc3RpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNldFNsaWRlck1vZGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9WSUVXRUQsXG4gICAgICBzZWN0aW9uOiAnUGFnZSAyJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW52YWxpZCwgc3VibWl0dGluZywgc2V0U2xpZGVyTW9kZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQ0OCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RENvbHVtbiBzYmN3IG1iOFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtMCBmMTZhIGZ3OSBwdDI0IHBsMTUgcHIxNVwiPlJhdGUgeW91ciBvdmVyYWxsIGV4cGVyaWVuY2Ugd2l0aCBUcmF2ZWxUcmlhbmdsZS5jb208L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHB0MjQgcGIyNCBwbDE1IHByMTUgYmInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtMjQgbXIxNSc+PE1vYmlsZUljb24gLz48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4RnVsbCc+SG93IGVhc3kgaXMgaXQgdG8gdXNlIFRUIHdlYnNpdGUvYXBwPzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJ0dF93ZWJzaXRlX3VzZVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17U2luZ2xlU2VsZWN0RmllbGR9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t7IG5hbWU6ICdFYXN5JywgdmFsdWU6IDMgfSwgeyBuYW1lOiAnQXZlcmFnZScsIHZhbHVlOiAyIH0sIHsgbmFtZTogJ0RpZmZpY3VsdCcsIHZhbHVlOiAxIH1dfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxCdWRnZXRJY29uIC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleEZ1bGwnPkhvdyB3YXMgdGhlIHBheW1lbnQgcHJvY2VzczwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJ0dF9wYXltZW50X3Byb2Nlc3NcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1NpbmdsZVNlbGVjdEZpZWxkfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbeyBuYW1lOiAnRWFzeScsIHZhbHVlOiAzIH0sIHsgbmFtZTogJ0F2ZXJhZ2UnLCB2YWx1ZTogMiB9LCB7IG5hbWU6ICdEaWZmaWN1bHQnLCB2YWx1ZTogMSB9XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleERDb2x1bW4gc2JjdyBtYjhcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibTAgZjE2YSBmdzkgcHQyNCBwbDE1IHByMTVcIj5SYXRlIHlvdXIgZXhwZXJpZW5jZSB3aXRoIFRyYXZlbCBUcmlhbmdsZSBBZHZpc29yPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1IGJiJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxGQVFJY29uIC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleEZ1bGwnPldhcyBUVCBBZHZpc29yIGhlbHBmdWw/PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInRyaXBfYWR2aXNvcl9oZWxwZnVsXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtTaW5nbGVTZWxlY3RGaWVsZH1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3sgbmFtZTogJ1llcycsIHZhbHVlOiAyIH0sIHsgbmFtZTogJ05vJywgdmFsdWU6IDEgfV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHB0MjQgcGIyNCBwbDE1IHByMTUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtMjQgbXIxNSc+PER1cmF0aW9uSWNvbiAvPjwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXhGdWxsJz5XYXMgVFQgQWR2aXNvciByZXNwb25zZSBmYXN0PzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJ0cmlwX2Fkdmlzb3JfcmVzcG9uc2VcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1NpbmdsZVNlbGVjdEZpZWxkfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbeyBuYW1lOiAnRmFzdCcsIHZhbHVlOiAzIH0sIHsgbmFtZTogJ0F2ZXJhZ2UnLCB2YWx1ZTogMiB9LCB7IG5hbWU6ICdTbG93JywgdmFsdWU6IDEgfV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhEQ29sdW1uIHNiY3dcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibTAgZjE2IGZ3OSBwdDI0IHBsMTUgcHIxNVwiPkNvbW1lbnRzPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1Jz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudHNcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIGNvbW1lbnRzIGhlcmXigKYnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IGJ0Jz5cbiAgICAgICAgICAgIDxHQnV0dG9uRGlzYWJsZSBjbGFzc05hbWU9XCJmbGV4IHdmdWxsIHoxMCBwcjE1IHBsMTUgcHQ4IHBiOFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNsaWRlck1vZGUoU0xJREVSMSl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleEZ1bGwgbGluay1wcmkgZnc3IHdmdWxsIHJhZGl1czIgaWJsb2NrIGF0X0NhbmNlbCBzYmN3IHNiYzIgcGZjMiBmMTYgZnc3XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC0yNCBhYnNvbHV0ZSBsMTUnPjxMZWZ0UmVkQXJyb3cgLz48L3NwYW4+QmFja1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhGdWxsJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgZGlzYWJsZWQ9e2ludmFsaWQgfHwgc3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhGdWxsIHBiYzIgd2Z1bGwgcmFkaXVzMiBhdF9zdWJtaXQgIGYxNiBmdzcgc2ZjdyBidG4tZmlsbGVkLXByaS1sYXJnZVwiPlN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR0J1dHRvbkRpc2FibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHB1c2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuXG5pbXBvcnQgUG9zdEJvb2tpbmdGb3JtIGZyb20gJy4vRm9ybUNvbnRhaW5lcic7XG5pbXBvcnQgeyBjcmVhdGVQb3N0Qm9va2luZ0ZlZWRiYWNrIH0gZnJvbSAnLi4vYWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Ym1pdHRlZDogc3RhdGUuZmVlZGJhY2suc3VibWl0dGVkLFxuICAgICAgc2VjdXJpdHlUb2tlbjogc3RhdGUudHJpcC5jdXJyZW50VHJpcC5kYXRhLnNlY3VyaXR5VG9rZW4sXG4gICAgICBmb3JtVmFsdWVzOiBzdGF0ZS5mb3JtLnBvc3RCb29raW5nTnBzRm9ybSAmJiBzdGF0ZS5mb3JtLnBvc3RCb29raW5nTnBzRm9ybS52YWx1ZXMgfHwge31cbiAgICB9O1xuICB9LFxuICB7XG4gICAgY3JlYXRlUG9zdEJvb2tpbmdGZWVkYmFjayxcbiAgICBwdXNoU3RhdGU6IHB1c2hcblxuICB9XG4pKFBvc3RCb29raW5nRm9ybSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgZmVlZGJhY2sgZnJvbSAnbW9kdWxlcy9mZWVkYmFjay9yZWR1Y2VyJztcbmltcG9ydCB0cmlwIGZyb20gJ21vZHVsZXMvdHJpcC9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBnZXRTZWN1cml0eVRva2VuIH0gZnJvbSAnbW9kdWxlcy90cmlwL2FjdGlvbnMvY3VycmVudFRyaXAnO1xuXG5jb25zdCBmZWVkYmFja1JlZHVjZXJzID0ge1xuICBmZWVkYmFjayxcbiAgdHJpcFxufTtcblxuY29uc3QgZmVlZGJhY2tBY3Rpb25zID0ge1xuICBnZXRTZWN1cml0eVRva2VuLFxufTtcblxuZXhwb3J0IHsgZmVlZGJhY2tSZWR1Y2VycyB9O1xuZXhwb3J0IHsgZmVlZGJhY2tBY3Rpb25zIH07XG5cbmNsYXNzIEZlZWRiYWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFjaztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCB7IE9SR0FOSVNNX1ZJRVdFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICdhcHAtdjIvY29tbW9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgUm9zdGVyIGZyb20gJ21vZHVsZXMvcm9zdGVyL2luZGV4JztcbmltcG9ydCBQb3N0Qm9va2luZyBmcm9tICdtb2R1bGVzL2ZlZWRiYWNrL3Bvc3RCb29raW5nL2luZGV4JztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8qICAgIHRoaXMucHJvcHMubGF5b3V0LmNvbXBvbmVudHMubWFwKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRXZlbnRUcmFja2VkW2NvbXBvbmVudC5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9KTsqL1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMsIG5leHRQcm9wcykge1xuICAgIC8qaWYgKHByb3BzLmN1cnJlbnRUcmlwSWQgIT09IG5leHRQcm9wcy5jdXJyZW50VHJpcElkKSB7XG4gICAgICB0aGlzLmlzRXZlbnRUcmFja2VkID0ge307XG4gICAgfSovXG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChkYXRhID0ge30pID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IGRhdGEuZXZlbnQsXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdSTFAnLFxuICAgICAgICBzZWN0aW9uOiBkYXRhLnNlY3Rpb24gfHwgJycsXG4gICAgICAgIG9iamVjdDogZGF0YS5vYmplY3QsXG4gICAgICAgIGN0YTogZGF0YS5jdGEsXG4gICAgICAgIG1pc2NfaWRfMTogZGF0YS5taXNjSWQxLFxuICAgICAgICBtaXNjX3R5cGVfMTogZGF0YS5taXNjVHlwZTEsXG4gICAgICAgIG1pc2NfaWRfMjogZGF0YS5taXNjSWQyLFxuICAgICAgICBtaXNjX3R5cGVfMjogZGF0YS5taXNjVHlwZTIsXG4gICAgICAgIG1pc2NfaWRfMzogZGF0YS5taXNjSWQzLFxuICAgICAgICBtaXNjX3R5cGVfMzogZGF0YS5taXNjVHlwZTMsXG4gICAgICAgIG1pc2NfaWRfNDogZGF0YS5taXNjSWQ0LFxuICAgICAgICBtaXNjX3R5cGVfNDogZGF0YS5taXNjVHlwZTQsXG4gICAgICAgIG1pc2NfaWRfNTogZGF0YS5taXNjSWQ1LFxuICAgICAgICBtaXNjX3R5cGVfNTogZGF0YS5taXNjVHlwZTVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSwgY29uZmlnKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgaWYgKCF0aGlzLmlzRXZlbnRUcmFja2VkW2NvbmZpZy5uYW1lXSkge1xuICAgICAgICB0aGlzLmlzRXZlbnRUcmFja2VkW2NvbmZpZy5uYW1lXSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX1ZJRVdFRCxcbiAgICAgICAgICBzZWN0aW9uOiBjb25maWcubmFtZSxcbiAgICAgICAgICBjdGE6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuXG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9uYW1lXCIgY29udGVudD1cIlF1b3RlIERldGFpbFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgICAgPFJvc3RlciB0aW1lb3V0PXszMDAwfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggY29udGVudEJhY2tncm91bmQgc2JjNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9J0ZlZWRiYWNrJyAvPlxuICAgICAgICAgICAgICA8UG9zdEJvb2tpbmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9