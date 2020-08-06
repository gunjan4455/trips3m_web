require("source-map-support").install();
exports.ids = ["posttrip-feedback"];
exports.modules = {

/***/ "./app-v2/modules/feedback/postTrip/Form.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/feedback/postTrip/Form.js ***!
  \**************************************************/
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

var _Slider = _interopRequireDefault(__webpack_require__(/*! ./Slider1 */ "./app-v2/modules/feedback/postTrip/Slider1.js"));

var _Slider2 = _interopRequireDefault(__webpack_require__(/*! ./Slider2 */ "./app-v2/modules/feedback/postTrip/Slider2.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PostTripForm = (_temp = _class = class PostTripForm extends _react.Component {
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
      pristine,
      formValues,
      handleSubmit,
      trackSegmentEvent
    } = this.props;
    const isValidSlide1 = !invalid && !!(formValues.hotel || formValues.cab || formValues.agent_service);
    const isValidSlide2 = !invalid && !!(formValues.quotes_quality || formValues.quotes_time || formValues.payment_process);
    return _react.default.createElement("div", null, _react.default.createElement("form", {
      onSubmit: handleSubmit
    }, this.state.sliderMode === _constants.SLIDER1 ? _react.default.createElement(_Slider.default, {
      setSliderMode: this.setSliderMode,
      invalid: !isValidSlide1,
      submitting: submitting,
      pristine: pristine,
      trackSegment: trackSegmentEvent
    }) : _react.default.createElement(_Slider2.default, {
      setSliderMode: this.setSliderMode,
      invalid: !isValidSlide2,
      submitting: submitting,
      pristine: pristine,
      trackSegment: trackSegmentEvent
    })));
  }

}, _class.propTypes = {
  invalid: _propTypes.default.bool,
  submitting: _propTypes.default.bool,
  pristine: _propTypes.default.bool,
  formValues: _propTypes.default.object.isRequired,
  handleSubmit: _propTypes.default.func,
  trackSegmentEvent: _propTypes.default.func
}, _temp);

var _default = (0, _reduxForm.reduxForm)({
  form: 'postTripNpsForm'
})(PostTripForm);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postTrip/FormContainer.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/feedback/postTrip/FormContainer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Form = _interopRequireDefault(__webpack_require__(/*! ./Form */ "./app-v2/modules/feedback/postTrip/Form.js"));

var _ThankYou = _interopRequireDefault(__webpack_require__(/*! ../components/ThankYou */ "./app-v2/modules/feedback/components/ThankYou.js"));

var _RatingApp = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/feedback/components/RatingApp */ "./app-v2/modules/feedback/components/RatingApp.js"));

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/feedback/constants.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PostTripFormContainer = (_temp2 = _class = class PostTripFormContainer extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      npsScore: 0
    }, this.trackSegmentEvent = details => {
      (0, _utils.rescue)(() => {
        trackSegment({
          event: details.event,
          section: details.section,
          object: '',
          cta: details.cta || ''
        });
      });
    }, this.handleSubmit = values => {
      const tripId = this.props.params.requestedTripId;
      const apiParams = {
        requested_trip_id: tripId
      };
      apiParams.trip_feedback = {
        tt_recommend: values.nps,
        testimonial: values.testimonial,
        hotel: values.hotel,
        cab: values.cab,
        agent_service: values.agent_service,
        quotes_quality: values.quotes_quality,
        quotes_time: values.quotes_time,
        payment_process: values.payment_process,
        trip_memory: values.trip_memory
      };
      this.setState({
        npsScore: parseInt(values.nps)
      });
      return this.props.createPostTripFeedback(tripId, apiParams);
    }, _temp;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.submitted && nextProps.submitted) {
      const rlpPath = (0, _urlHelpers.rtripPath)(this.props.params.requestedTripId);

      if (this.state.npsScore <= _constants.MIN_NPS_FOR_RATING) {
        this.setState({
          submitted: true
        }, function () {
          setTimeout(() => {
            this.props.pushState(rlpPath);
          }, 3000);
        });
      }
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
  params: _propTypes.default.object,
  location: _propTypes.default.object,
  submitted: _propTypes.default.bool,
  formValues: _propTypes.default.object.isRequired,
  createPostTripFeedback: _propTypes.default.func,
  pushState: _propTypes.default.func
}, _temp2);
var _default = PostTripFormContainer;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postTrip/Slider1.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/feedback/postTrip/Slider1.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/feedback/constants.js");

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _StarRating = _interopRequireDefault(__webpack_require__(/*! ../components/StarRating */ "./app-v2/modules/feedback/components/StarRating.js"));

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

let PostTripF1 = (_temp = _class = class PostTripF1 extends _react.Component {
  componentDidMount() {
    this.props.trackSegment({
      event: _segmentEvents.ORGANISM_VIEWED,
      section: 'Page 1'
    });
  }

  render() {
    const {
      setSliderMode,
      invalid,
      submitting,
      pristine
    } = this.props;
    return _react.default.createElement("div", {
      className: "pt48"
    }, _react.default.createElement("div", {
      className: "flex flexDColumn sbcw mb8"
    }, _react.default.createElement("h3", {
      className: "m0 f16 fw9 pt24 pl15 pr15"
    }, "Please rate us and share your experience ", _react.default.createElement("sup", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.Hotel, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "Hotels")), _react.default.createElement(_reduxForm.Field, {
      name: "hotel",
      component: _StarRating.default
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.Transfer, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "Cab & Driver")), _react.default.createElement(_reduxForm.Field, {
      name: "cab",
      component: _StarRating.default
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.AgentIcon, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "Services of Travel Agent")), _react.default.createElement(_reduxForm.Field, {
      name: "agent_service",
      component: _StarRating.default
    }))), _react.default.createElement("div", {
      className: "flex flexDColumn sbcw  mb8"
    }, _react.default.createElement("h3", {
      className: "m0 f16 fw9 pt24 pl15 pr15"
    }, "Write your testimonial  ", _react.default.createElement("sup", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "sbcw pt15 pb24 pl15 pr15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "testimonial",
      component: _TextArea.default,
      validate: _formValidators.required,
      placeholder: "Write a review about your experience. This will help us improve our service and serve you better."
    }))), _react.default.createElement("div", {
      className: "flex flexDColumn sbcw"
    }, _react.default.createElement("h3", {
      className: "m0 f16 fw9 pt24 pl15 pr15"
    }, "Best memories of your trip ", _react.default.createElement("span", {
      className: "pfc4 fw4"
    }, "(optional)")), _react.default.createElement("div", {
      className: "sbcw pt15 pb24 pl15 pr15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "trip_memory",
      component: _TextArea.default,
      placeholder: "Type your memories/trips here\u2026"
    })), _react.default.createElement("div", {
      className: "sbcw bt"
    }, _react.default.createElement(GButtonDisable, {
      className: "flex wfull z10 pr15 pl15 pt8 pb8 justifyEnd"
    }, _react.default.createElement("button", {
      disabled: invalid || submitting || pristine,
      onClick: () => setSliderMode(_constants.SLIDER2),
      className: "flex pbc2 radius2 at_submit  f16 fw7 sfcw col-xs-6 alignCenter btn-filled-pri-large"
    }, _react.default.createElement("span", {
      className: "flexFull"
    }, "Next"), _react.default.createElement("span", {
      className: "input-24 absolute r15"
    }, invalid || submitting || pristine ? _react.default.createElement(_Icon.RightGreyArrow, null) : _react.default.createElement(_Icon.RightWhiteArrow, null)))))));
  }

}, _class.propTypes = {
  invalid: _propTypes.default.bool,
  submitting: _propTypes.default.bool,
  pristine: _propTypes.default.bool,
  setSliderMode: _propTypes.default.func,
  trackSegment: _propTypes.default.func.isRequired
}, _temp);
var _default = PostTripF1;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postTrip/Slider2.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/feedback/postTrip/Slider2.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/feedback/constants.js");

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _NpsRadioInput = _interopRequireDefault(__webpack_require__(/*! ../components/NpsRadioInput */ "./app-v2/modules/feedback/components/NpsRadioInput.js"));

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

let PostTripF2 = (_temp = _class = class PostTripF2 extends _react.Component {
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
      pristine,
      setSliderMode
    } = this.props;
    return _react.default.createElement("div", {
      className: "pt48"
    }, _react.default.createElement("div", {
      className: "flex flexDColumn sbcw mb8"
    }, _react.default.createElement("h3", {
      className: "m0 f16a fw9 pt24 pl15 pr15"
    }, "We constantly want to improve. Rate your experience with Travel Triangle ", _react.default.createElement("sup", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.QualityQuotesIcon, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "Quality of Quotes")), _react.default.createElement(_reduxForm.Field, {
      name: "quotes_quality",
      component: _StarRating.default
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15 bb"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.Clock, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "On Time Response")), _react.default.createElement(_reduxForm.Field, {
      name: "quotes_time",
      component: _StarRating.default
    })), _react.default.createElement("div", {
      className: "sbcw pt24 pb24 pl15 pr15"
    }, _react.default.createElement("div", {
      className: "flex alignCenter"
    }, _react.default.createElement("div", {
      className: "input-24 mr15"
    }, _react.default.createElement(_Icon.BudgetIcon, null)), _react.default.createElement("p", {
      className: "flexFull"
    }, "Ease of Payment Process")), _react.default.createElement(_reduxForm.Field, {
      name: "payment_process",
      component: _StarRating.default
    }))), _react.default.createElement("div", {
      className: "flex flexDColumn sbcw"
    }, _react.default.createElement("h3", {
      className: "m0 f16a fw9 pt24 pl15 pr15"
    }, "How likely are you to recommend TravelTrinagle to a friend? ", _react.default.createElement("sup", {
      className: "pfc2"
    }, "*")), _react.default.createElement(_reduxForm.Field, {
      name: "nps",
      component: _NpsRadioInput.default,
      validate: _formValidators.required,
      defaultValue: 8
    }), _react.default.createElement("div", {
      className: "sbcw bt"
    }, _react.default.createElement(GButtonDisable, {
      className: "flex wfull z10 pr15 pl15 pt8 pb8"
    }, _react.default.createElement("button", {
      onClick: () => setSliderMode(_constants.SLIDER1),
      className: "flexFull link-pri fw7 wfull radius2 iblock at_Cancel sbcw sbc2 pfc2 f16 fw7"
    }, _react.default.createElement("span", {
      className: "input-24 absolute l15 "
    }, _react.default.createElement(_Icon.LeftRedArrow, null)), "Back"), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("button", {
      type: "submit",
      disabled: invalid || submitting || pristine,
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
var _default = PostTripF2;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/feedback/postTrip/index.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/feedback/postTrip/index.js ***!
  \***************************************************/
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

var _FormContainer = _interopRequireDefault(__webpack_require__(/*! ./FormContainer */ "./app-v2/modules/feedback/postTrip/FormContainer.js"));

var _action = __webpack_require__(/*! ../action */ "./app-v2/modules/feedback/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  return {
    submitted: state.feedback.submitted,
    formValues: state.form.postTripNpsForm && state.form.postTripNpsForm.values || {}
  };
}, {
  createPostTripFeedback: _action.createPostTripFeedback,
  pushState: _reactRouterRedux.push
})(_FormContainer.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/feedback/postTrip/Feedback.js":
/*!******************************************************!*\
  !*** ./app-v2/screens/feedback/postTrip/Feedback.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.feedbackReducers = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/feedback/postTrip/Layout.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! modules/feedback/reducer */ "./app-v2/modules/feedback/reducer.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const feedbackReducers = {
  feedback: _reducer.default
};
exports.feedbackReducers = feedbackReducers;
let Feedback = (_temp = _class = class Feedback extends _react.Component {
  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

}, _class.propTypes = {}, _temp);
var _default = Feedback;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/feedback/postTrip/Layout.js":
/*!****************************************************!*\
  !*** ./app-v2/screens/feedback/postTrip/Layout.js ***!
  \****************************************************/
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

var _index2 = _interopRequireDefault(__webpack_require__(/*! modules/feedback/postTrip/index */ "./app-v2/modules/feedback/postTrip/index.js"));

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
      text: "Write a Review"
    }), _react.default.createElement(_index2.default, null)))));
  }

};
Layout.propTypes = {};
var _default = Layout;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9wb3N0VHJpcC9Gb3JtLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZlZWRiYWNrL3Bvc3RUcmlwL0Zvcm1Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svcG9zdFRyaXAvU2xpZGVyMS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mZWVkYmFjay9wb3N0VHJpcC9TbGlkZXIyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZlZWRiYWNrL3Bvc3RUcmlwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2ZlZWRiYWNrL3Bvc3RUcmlwL0ZlZWRiYWNrLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2ZlZWRiYWNrL3Bvc3RUcmlwL0xheW91dC5qcyJdLCJuYW1lcyI6WyJQb3N0VHJpcEZvcm0iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic2V0U2xpZGVyTW9kZSIsInZhbHVlIiwic2V0U3RhdGUiLCJzbGlkZXJNb2RlIiwic3RhdGUiLCJTTElERVIxIiwicmVuZGVyIiwiaW52YWxpZCIsInN1Ym1pdHRpbmciLCJwcmlzdGluZSIsImZvcm1WYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImlzVmFsaWRTbGlkZTEiLCJob3RlbCIsImNhYiIsImFnZW50X3NlcnZpY2UiLCJpc1ZhbGlkU2xpZGUyIiwicXVvdGVzX3F1YWxpdHkiLCJxdW90ZXNfdGltZSIsInBheW1lbnRfcHJvY2VzcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImZvcm0iLCJQb3N0VHJpcEZvcm1Db250YWluZXIiLCJucHNTY29yZSIsImRldGFpbHMiLCJ0cmFja1NlZ21lbnQiLCJldmVudCIsInNlY3Rpb24iLCJjdGEiLCJ2YWx1ZXMiLCJ0cmlwSWQiLCJwYXJhbXMiLCJyZXF1ZXN0ZWRUcmlwSWQiLCJhcGlQYXJhbXMiLCJyZXF1ZXN0ZWRfdHJpcF9pZCIsInRyaXBfZmVlZGJhY2siLCJ0dF9yZWNvbW1lbmQiLCJucHMiLCJ0ZXN0aW1vbmlhbCIsInRyaXBfbWVtb3J5IiwicGFyc2VJbnQiLCJjcmVhdGVQb3N0VHJpcEZlZWRiYWNrIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzdWJtaXR0ZWQiLCJybHBQYXRoIiwiTUlOX05QU19GT1JfUkFUSU5HIiwic2V0VGltZW91dCIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicXVlcnkiLCJwcm9tb3Rlcl9zY29yZSIsIkdCdXR0b25EaXNhYmxlIiwiZ2xhbW9yb3VzIiwiZGl2IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJQb3N0VHJpcEYxIiwiY29tcG9uZW50RGlkTW91bnQiLCJPUkdBTklTTV9WSUVXRUQiLCJTdGFyUmF0aW5nIiwiVGV4dEFyZWEiLCJyZXF1aXJlZCIsIlNMSURFUjIiLCJQb3N0VHJpcEYyIiwiTnBzUmFkaW9JbnB1dCIsImZlZWRiYWNrIiwicG9zdFRyaXBOcHNGb3JtIiwicHVzaCIsImZlZWRiYWNrUmVkdWNlcnMiLCJGZWVkYmFjayIsIkxheW91dCIsImRhdGEiLCJjYXRlZ29yeSIsIm1pc2NfaWRfMSIsIm1pc2NJZDEiLCJtaXNjX3R5cGVfMSIsIm1pc2NUeXBlMSIsIm1pc2NfaWRfMiIsIm1pc2NJZDIiLCJtaXNjX3R5cGVfMiIsIm1pc2NUeXBlMiIsIm1pc2NfaWRfMyIsIm1pc2NJZDMiLCJtaXNjX3R5cGVfMyIsIm1pc2NUeXBlMyIsIm1pc2NfaWRfNCIsIm1pc2NJZDQiLCJtaXNjX3R5cGVfNCIsIm1pc2NUeXBlNCIsIm1pc2NfaWRfNSIsIm1pc2NJZDUiLCJtaXNjX3R5cGVfNSIsIm1pc2NUeXBlNSIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiY29uZmln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ay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7IFNMSURFUjEgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IEZvcm0xIGZyb20gJy4vU2xpZGVyMSc7XG5pbXBvcnQgRm9ybTIgZnJvbSAnLi9TbGlkZXIyJztcbmltcG9ydCB7IHRyYWNrU2VnbWVudCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyByZXNjdWUgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcblxuY2xhc3MgUG9zdFRyaXBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHN1Ym1pdHRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHByaXN0aW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNsaWRlck1vZGU6IFNMSURFUjFcbiAgICB9O1xuICB9XG5cbiAgc2V0U2xpZGVyTW9kZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZXJNb2RlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB7IGludmFsaWQsIHN1Ym1pdHRpbmcsIHByaXN0aW5lLCBmb3JtVmFsdWVzLCBoYW5kbGVTdWJtaXQsIHRyYWNrU2VnbWVudEV2ZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXNWYWxpZFNsaWRlMSA9ICFpbnZhbGlkICYmICEhKGZvcm1WYWx1ZXMuaG90ZWwgfHwgZm9ybVZhbHVlcy5jYWIgfHwgZm9ybVZhbHVlcy5hZ2VudF9zZXJ2aWNlKTtcbiAgICBjb25zdCBpc1ZhbGlkU2xpZGUyID0gIWludmFsaWQgJiYgISEoZm9ybVZhbHVlcy5xdW90ZXNfcXVhbGl0eSB8fCBmb3JtVmFsdWVzLnF1b3Rlc190aW1lIHx8IGZvcm1WYWx1ZXMucGF5bWVudF9wcm9jZXNzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlck1vZGUgPT09IFNMSURFUjFcbiAgICAgICAgICAgICAgPyA8Rm9ybTEgc2V0U2xpZGVyTW9kZT17dGhpcy5zZXRTbGlkZXJNb2RlfSBpbnZhbGlkPXshaXNWYWxpZFNsaWRlMX1cbiAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ30gcHJpc3RpbmU9e3ByaXN0aW5lfSB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudEV2ZW50fSAvPlxuICAgICAgICAgICAgICA6IDxGb3JtMiBzZXRTbGlkZXJNb2RlPXt0aGlzLnNldFNsaWRlck1vZGV9IGludmFsaWQ9eyFpc1ZhbGlkU2xpZGUyfVxuICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfSBwcmlzdGluZT17cHJpc3RpbmV9IHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50RXZlbnR9IC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdwb3N0VHJpcE5wc0Zvcm0nXG59KShQb3N0VHJpcEZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3N0VHJpcEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCBUaGFua1lvdSBmcm9tICcuLi9jb21wb25lbnRzL1RoYW5rWW91JztcbmltcG9ydCBSYXRpbmdBcHAgZnJvbSAnYXBwLXYyL21vZHVsZXMvZmVlZGJhY2svY29tcG9uZW50cy9SYXRpbmdBcHAnO1xuaW1wb3J0IHsgcnRyaXBQYXRoIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBNSU5fTlBTX0ZPUl9SQVRJTkcgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jbGFzcyBQb3N0VHJpcEZvcm1Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBucHNTY29yZTogMFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN1Ym1pdHRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNyZWF0ZVBvc3RUcmlwRmVlZGJhY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHB1c2hTdGF0ZTogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuc3VibWl0dGVkICYmIG5leHRQcm9wcy5zdWJtaXR0ZWQpIHtcbiAgICAgIGNvbnN0IHJscFBhdGggPSBydHJpcFBhdGgodGhpcy5wcm9wcy5wYXJhbXMucmVxdWVzdGVkVHJpcElkKTtcblxuICAgICAgaWYodGhpcy5zdGF0ZS5ucHNTY29yZSA8PSBNSU5fTlBTX0ZPUl9SQVRJTkcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZShybHBQYXRoKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZGV0YWlscykgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogZGV0YWlscy5ldmVudCxcbiAgICAgICAgc2VjdGlvbjogZGV0YWlscy5zZWN0aW9uLFxuICAgICAgICBvYmplY3Q6ICcnLFxuICAgICAgICBjdGE6IGRldGFpbHMuY3RhIHx8ICcnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgdHJpcElkID0gdGhpcy5wcm9wcy5wYXJhbXMucmVxdWVzdGVkVHJpcElkO1xuXG4gICAgY29uc3QgYXBpUGFyYW1zID0ge1xuICAgICAgcmVxdWVzdGVkX3RyaXBfaWQ6IHRyaXBJZFxuICAgIH07XG5cbiAgICBhcGlQYXJhbXMudHJpcF9mZWVkYmFjayA9IHtcbiAgICAgIHR0X3JlY29tbWVuZDogdmFsdWVzLm5wcyxcbiAgICAgIHRlc3RpbW9uaWFsOiB2YWx1ZXMudGVzdGltb25pYWwsXG4gICAgICBob3RlbDogdmFsdWVzLmhvdGVsLFxuICAgICAgY2FiOiB2YWx1ZXMuY2FiLFxuICAgICAgYWdlbnRfc2VydmljZTogdmFsdWVzLmFnZW50X3NlcnZpY2UsXG4gICAgICBxdW90ZXNfcXVhbGl0eTogdmFsdWVzLnF1b3Rlc19xdWFsaXR5LFxuICAgICAgcXVvdGVzX3RpbWU6IHZhbHVlcy5xdW90ZXNfdGltZSxcbiAgICAgIHBheW1lbnRfcHJvY2VzczogdmFsdWVzLnBheW1lbnRfcHJvY2VzcyxcbiAgICAgIHRyaXBfbWVtb3J5OiB2YWx1ZXMudHJpcF9tZW1vcnlcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5wc1Njb3JlOiBwYXJzZUludCh2YWx1ZXMubnBzKSB9KTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNyZWF0ZVBvc3RUcmlwRmVlZGJhY2sodHJpcElkLCBhcGlQYXJhbXMpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN1Ym1pdHRlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG5wc1Njb3JlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQb3N0VHJpcEZvcm0gZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBucHM6IHBhcnNlSW50KHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnkucHJvbW90ZXJfc2NvcmUpIH19XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja1NlZ21lbnRFdmVudH0gLz5cbiAgICAgICAge1xuICAgICAgICAgIDxNb2RhbCBoYXNOb0Nsb3NlPXt0cnVlfVxuICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICAgICAgICAgICBpc09wZW49e3N1Ym1pdHRlZH0+XG4gICAgICAgICAgICB7bnBzU2NvcmUgPiBNSU5fTlBTX0ZPUl9SQVRJTkcgPyA8UmF0aW5nQXBwIHRyYWNrU2VnbWVudEV2ZW50PXt0aGlzLnRyYWNrU2VnbWVudEV2ZW50fSAvPiA6IDxUaGFua1lvdSAvPn1cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFRyaXBGb3JtQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgQWdlbnRJY29uLCBIb3RlbCwgVHJhbnNmZXIsIFJpZ2h0V2hpdGVBcnJvdywgUmlnaHRHcmV5QXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBTTElERVIyIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHJlcXVpcmVkIH0gZnJvbSAndXRpbHMvZm9ybVZhbGlkYXRvcnMnO1xuaW1wb3J0IFN0YXJSYXRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFyUmF0aW5nJztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL1RleHRBcmVhJztcbmltcG9ydCB7IE9SR0FOSVNNX1ZJRVdFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdCdXR0b25EaXNhYmxlID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmIGJ1dHRvbltkaXNhYmxlZF0nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VmZWZlZicsXG4gICAgY29sb3I6ICcjYjJiMmIyJ1xuICB9LFxufSk7XG5cbmNsYXNzIFBvc3RUcmlwRjEgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3VibWl0dGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJpc3RpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNldFNsaWRlck1vZGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9WSUVXRUQsXG4gICAgICBzZWN0aW9uOiAnUGFnZSAxJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBzZXRTbGlkZXJNb2RlLCBpbnZhbGlkLCBzdWJtaXR0aW5nLCBwcmlzdGluZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQ0OCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RENvbHVtbiBzYmN3IG1iOFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtMCBmMTYgZnc5IHB0MjQgcGwxNSBwcjE1XCI+UGxlYXNlIHJhdGUgdXMgYW5kIHNoYXJlIHlvdXIgZXhwZXJpZW5jZSA8c3VwIGNsYXNzTmFtZT0ncGZjMic+Kjwvc3VwPjwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NiY3cgcHQyNCBwYjI0IHBsMTUgcHIxNSBiYic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC0yNCBtcjE1Jz48SG90ZWwgLz48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4RnVsbCc+SG90ZWxzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImhvdGVsXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtTdGFyUmF0aW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1IGJiJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxUcmFuc2ZlciAvPjwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXhGdWxsJz5DYWIgJiBEcml2ZXI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiY2FiXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtTdGFyUmF0aW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxBZ2VudEljb24gLz48L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmbGV4RnVsbCc+U2VydmljZXMgb2YgVHJhdmVsIEFnZW50PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImFnZW50X3NlcnZpY2VcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1N0YXJSYXRpbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhEQ29sdW1uIHNiY3cgIG1iOFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtMCBmMTYgZnc5IHB0MjQgcGwxNSBwcjE1XCI+V3JpdGUgeW91ciB0ZXN0aW1vbmlhbCAgPHN1cCBjbGFzc05hbWU9J3BmYzInPio8L3N1cD48L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHB0MTUgcGIyNCBwbDE1IHByMTUnPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZXN0aW1vbmlhbFwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWF9XG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1dyaXRlIGEgcmV2aWV3IGFib3V0IHlvdXIgZXhwZXJpZW5jZS4gVGhpcyB3aWxsIGhlbHAgdXMgaW1wcm92ZSBvdXIgc2VydmljZSBhbmQgc2VydmUgeW91IGJldHRlci4nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhEQ29sdW1uIHNiY3dcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibTAgZjE2IGZ3OSBwdDI0IHBsMTUgcHIxNVwiPkJlc3QgbWVtb3JpZXMgb2YgeW91ciB0cmlwIDxzcGFuIGNsYXNzTmFtZT0ncGZjNCBmdzQnPihvcHRpb25hbCk8L3NwYW4+PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDE1IHBiMjQgcGwxNSBwcjE1Jz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwidHJpcF9tZW1vcnlcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIG1lbW9yaWVzL3RyaXBzIGhlcmXigKYnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IGJ0Jz5cbiAgICAgICAgICAgIDxHQnV0dG9uRGlzYWJsZSBjbGFzc05hbWU9J2ZsZXggd2Z1bGwgejEwIHByMTUgcGwxNSBwdDggcGI4IGp1c3RpZnlFbmQnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpbnZhbGlkIHx8IHN1Ym1pdHRpbmcgfHwgcHJpc3RpbmV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2xpZGVyTW9kZShTTElERVIyKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHBiYzIgcmFkaXVzMiBhdF9zdWJtaXQgIGYxNiBmdzcgc2ZjdyBjb2wteHMtNiBhbGlnbkNlbnRlciBidG4tZmlsbGVkLXByaS1sYXJnZVwiPjxzcGFuIGNsYXNzTmFtZT0nZmxleEZ1bGwnPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC0yNCBhYnNvbHV0ZSByMTUnPntpbnZhbGlkIHx8IHN1Ym1pdHRpbmcgfHwgcHJpc3RpbmUgPyA8UmlnaHRHcmV5QXJyb3cgLz4gOiA8UmlnaHRXaGl0ZUFycm93IC8+fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0dCdXR0b25EaXNhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFRyaXBGMTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgU0xJREVSMSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gJ3V0aWxzL2Zvcm1WYWxpZGF0b3JzJztcbmltcG9ydCB7IFF1YWxpdHlRdW90ZXNJY29uLCBMZWZ0UmVkQXJyb3csIENsb2NrLCBCdWRnZXRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IE5wc1JhZGlvSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9OcHNSYWRpb0lucHV0JztcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gJy4uL2NvbXBvbmVudHMvU3RhclJhdGluZyc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHQnV0dG9uRGlzYWJsZSA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiBidXR0b25bZGlzYWJsZWRdJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxuICAgIGNvbG9yOiAnI2IyYjJiMidcbiAgfVxufSk7XG5cbmNsYXNzIFBvc3RUcmlwRjIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3VibWl0dGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJpc3RpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNldFNsaWRlck1vZGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9WSUVXRUQsXG4gICAgICBzZWN0aW9uOiAnUGFnZSAyJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW52YWxpZCwgc3VibWl0dGluZywgcHJpc3RpbmUsIHNldFNsaWRlck1vZGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B0NDgnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleERDb2x1bW4gc2JjdyBtYjhcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibTAgZjE2YSBmdzkgcHQyNCBwbDE1IHByMTVcIj5XZSBjb25zdGFudGx5IHdhbnQgdG8gaW1wcm92ZS4gUmF0ZSB5b3VyIGV4cGVyaWVuY2Ugd2l0aCBUcmF2ZWxcbiAgICAgICAgICAgIFRyaWFuZ2xlIDxzdXAgY2xhc3NOYW1lPVwicGZjMlwiPio8L3N1cD48L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHB0MjQgcGIyNCBwbDE1IHByMTUgYmInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtMjQgbXIxNSc+PFF1YWxpdHlRdW90ZXNJY29uIC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleEZ1bGwnPlF1YWxpdHkgb2YgUXVvdGVzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInF1b3Rlc19xdWFsaXR5XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtTdGFyUmF0aW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1IGJiJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxDbG9jayAvPjwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZsZXhGdWxsJz5PbiBUaW1lIFJlc3BvbnNlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInF1b3Rlc190aW1lXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtTdGFyUmF0aW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwdDI0IHBiMjQgcGwxNSBwcjE1Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LTI0IG1yMTUnPjxCdWRnZXRJY29uIC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmxleEZ1bGwnPkVhc2Ugb2YgUGF5bWVudCBQcm9jZXNzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnRfcHJvY2Vzc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17U3RhclJhdGluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleERDb2x1bW4gc2Jjd1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtMCBmMTZhIGZ3OSBwdDI0IHBsMTUgcHIxNVwiPkhvdyBsaWtlbHkgYXJlIHlvdSB0byByZWNvbW1lbmQgVHJhdmVsVHJpbmFnbGUgdG8gYSBmcmllbmQ/IDxzdXAgY2xhc3NOYW1lPVwicGZjMlwiPio8L3N1cD48L2gzPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbmFtZT1cIm5wc1wiXG4gICAgICAgICAgICBjb21wb25lbnQ9e05wc1JhZGlvSW5wdXR9XG4gICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezh9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBidCc+XG4gICAgICAgICAgICA8R0J1dHRvbkRpc2FibGUgY2xhc3NOYW1lPVwiZmxleCB3ZnVsbCB6MTAgcHIxNSBwbDE1IHB0OCBwYjhcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZXJNb2RlKFNMSURFUjEpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhGdWxsIGxpbmstcHJpIGZ3NyB3ZnVsbCByYWRpdXMyIGlibG9jayBhdF9DYW5jZWwgc2JjdyBzYmMyIHBmYzIgZjE2IGZ3N1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtMjQgYWJzb2x1dGUgbDE1ICc+PExlZnRSZWRBcnJvdyAvPjwvc3Bhbj5CYWNrXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17aW52YWxpZCB8fCBzdWJtaXR0aW5nIHx8IHByaXN0aW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcGJjMiB3ZnVsbCByYWRpdXMyIGF0X3N1Ym1pdCAgZjE2IGZ3NyBzZmN3IGJ0bi1maWxsZWQtcHJpLWxhcmdlXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9HQnV0dG9uRGlzYWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RUcmlwRjI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgcHVzaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5cbmltcG9ydCBQb3N0VHJpcEZvcm1Db250YWluZXIgZnJvbSAnLi9Gb3JtQ29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZVBvc3RUcmlwRmVlZGJhY2sgfSBmcm9tICcuLi9hY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VibWl0dGVkOiBzdGF0ZS5mZWVkYmFjay5zdWJtaXR0ZWQsXG4gICAgICBmb3JtVmFsdWVzOiBzdGF0ZS5mb3JtLnBvc3RUcmlwTnBzRm9ybSAmJiBzdGF0ZS5mb3JtLnBvc3RUcmlwTnBzRm9ybS52YWx1ZXMgfHwge31cbiAgICB9O1xuICB9LFxuICB7XG4gICAgY3JlYXRlUG9zdFRyaXBGZWVkYmFjayxcbiAgICBwdXNoU3RhdGU6IHB1c2hcbiAgfVxuKShQb3N0VHJpcEZvcm1Db250YWluZXIpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcbmltcG9ydCBmZWVkYmFjayBmcm9tICdtb2R1bGVzL2ZlZWRiYWNrL3JlZHVjZXInO1xuY29uc3QgZmVlZGJhY2tSZWR1Y2VycyA9IHtcbiAgZmVlZGJhY2tcbn07XG5cbmV4cG9ydCB7IGZlZWRiYWNrUmVkdWNlcnMgfTtcblxuY2xhc3MgRmVlZGJhY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFjaztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCB7IE9SR0FOSVNNX1ZJRVdFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICdhcHAtdjIvY29tbW9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnbW9kdWxlcy9mZWVkYmFjay9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgUm9zdGVyIGZyb20gJ21vZHVsZXMvcm9zdGVyL2luZGV4JztcbmltcG9ydCBQb3N0VHJpcCBmcm9tICdtb2R1bGVzL2ZlZWRiYWNrL3Bvc3RUcmlwL2luZGV4JztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8qICAgIHRoaXMucHJvcHMubGF5b3V0LmNvbXBvbmVudHMubWFwKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRXZlbnRUcmFja2VkW2NvbXBvbmVudC5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9KTsqL1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMsIG5leHRQcm9wcykge1xuICAgIC8qaWYgKHByb3BzLmN1cnJlbnRUcmlwSWQgIT09IG5leHRQcm9wcy5jdXJyZW50VHJpcElkKSB7XG4gICAgICB0aGlzLmlzRXZlbnRUcmFja2VkID0ge307XG4gICAgfSovXG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChkYXRhID0ge30pID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IGRhdGEuZXZlbnQsXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdSTFAnLFxuICAgICAgICBzZWN0aW9uOiBkYXRhLnNlY3Rpb24gfHwgJycsXG4gICAgICAgIG9iamVjdDogZGF0YS5vYmplY3QsXG4gICAgICAgIGN0YTogZGF0YS5jdGEsXG4gICAgICAgIG1pc2NfaWRfMTogZGF0YS5taXNjSWQxLFxuICAgICAgICBtaXNjX3R5cGVfMTogZGF0YS5taXNjVHlwZTEsXG4gICAgICAgIG1pc2NfaWRfMjogZGF0YS5taXNjSWQyLFxuICAgICAgICBtaXNjX3R5cGVfMjogZGF0YS5taXNjVHlwZTIsXG4gICAgICAgIG1pc2NfaWRfMzogZGF0YS5taXNjSWQzLFxuICAgICAgICBtaXNjX3R5cGVfMzogZGF0YS5taXNjVHlwZTMsXG4gICAgICAgIG1pc2NfaWRfNDogZGF0YS5taXNjSWQ0LFxuICAgICAgICBtaXNjX3R5cGVfNDogZGF0YS5taXNjVHlwZTQsXG4gICAgICAgIG1pc2NfaWRfNTogZGF0YS5taXNjSWQ1LFxuICAgICAgICBtaXNjX3R5cGVfNTogZGF0YS5taXNjVHlwZTVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSwgY29uZmlnKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgaWYgKCF0aGlzLmlzRXZlbnRUcmFja2VkW2NvbmZpZy5uYW1lXSkge1xuICAgICAgICB0aGlzLmlzRXZlbnRUcmFja2VkW2NvbmZpZy5uYW1lXSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX1ZJRVdFRCxcbiAgICAgICAgICBzZWN0aW9uOiBjb25maWcubmFtZSxcbiAgICAgICAgICBjdGE6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuXG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9uYW1lXCIgY29udGVudD1cIlF1b3RlIERldGFpbFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgICAgPFJvc3RlciB0aW1lb3V0PXszMDAwfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggY29udGVudEJhY2tncm91bmQgc2JjNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8SGVhZGVyIHRleHQ9J1dyaXRlIGEgUmV2aWV3JyAvPlxuICAgICAgICAgICAgICA8UG9zdFRyaXAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9