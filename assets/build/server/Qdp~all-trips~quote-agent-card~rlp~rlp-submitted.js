require("source-map-support").install();
exports.ids = ["Qdp~all-trips~quote-agent-card~rlp~rlp-submitted"];
exports.modules = {

/***/ "./app-v2/modules/trip/cancelRequest/CancelRequest.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/trip/cancelRequest/CancelRequest.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _constants = __webpack_require__(/*! ./constants */ "./app-v2/modules/trip/cancelRequest/constants.js");

var _G = __webpack_require__(/*! ../ctas/G */ "./app-v2/modules/trip/ctas/G.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GScrollDiv = _glamorous.default.div({
  height: 'calc(100vh - 110px)'
});

const getOptions = number => {
  if (number === 0) {
    return _constants.notGoigOpt;
  } else if (number === 1) {
    return _constants.notSatisfiedOpt;
  } else {
    return _constants.goingNotTTOpt;
  }
};

const RenderRadioButton = ({
  input,
  label,
  id,
  onClickHandler
}) => _react.default.createElement("div", {
  id: `div-${id}`,
  className: "iblock mr8 mt24 mb8"
}, _react.default.createElement("input", _extends({
  type: "radio"
}, input, {
  className: "radio-common-circle checkbox-round sfc6",
  id: id,
  onClick: onClickHandler
})), _react.default.createElement("label", {
  className: "iblock wfull f14 pfc3 at_cancelrequestreason",
  htmlFor: id
}, _react.default.createElement("div", {
  className: "pl3"
}, label)));

RenderRadioButton.propTypes = {
  input: _propTypes.default.any,
  label: _propTypes.default.any,
  id: _propTypes.default.any,
  onClickHandler: _propTypes.default.any
};

const RenderDropdown = ({
  input,
  options
}) => _react.default.createElement(_G.CancelOption, {
  className: "ml8 relative"
}, _react.default.createElement("div", {
  className: "icon-18 absolute-center-v absolute r10 p4 lineHeight0"
}, _react.default.createElement(_Icon.DownArrow, null)), _react.default.createElement("div", {
  className: "select-with-icon-box relative ml24"
}, _react.default.createElement("select", _extends({
  className: "pl8 Select wfull border pr48"
}, input), getOptions(options).map(option => _react.default.createElement("option", {
  value: option.value,
  key: option.value
}, option.label)))));

RenderDropdown.propTypes = {
  input: _propTypes.default.any,
  options: _propTypes.default.any,
  label: _propTypes.default.any
};

const RenderTextarea = ({
  input
}) => _react.default.createElement("div", {
  className: "ml8"
}, _react.default.createElement("div", {
  className: "ml24 mt8"
}, _react.default.createElement(_G.TextArea, input)));

RenderTextarea.propTypes = {
  input: _propTypes.default.any
};
let CancelRequestPopUp = (_temp = _class = class CancelRequestPopUp extends _react.default.Component {
  constructor() {
    super();

    this.toggleDropdowns = idx => {
      const a = [false, false, false];
      a[idx] = true;
      this.setState({
        dropdowns: a
      });

      if (idx === 1) {
        this.setState({
          textareas: [false, true, false]
        });
      } else {
        this.setState({
          textareas: [false, false, false]
        });
      }
    };

    this.toggleTextareas = (idx, value) => {
      const a = [false, false, false];

      switch (idx) {
        case 0:
          if (value === _constants.notGoigOpt[1].value || value === _constants.notGoigOpt[3].value) {
            a[idx] = true;
          }

          break;

        case 2:
          if (value === _constants.goingNotTTOpt[4].value) {
            a[idx] = true;
          }

          break;
      }

      this.setState({
        textareas: a
      });
    };

    this.state = {
      showTextClass: false,
      currentChecked: '',
      defaultOption: '',
      dropdowns: [false, false, false],
      textareas: [false, false, false]
    };
  }

  componentDidMount() {
    this.toggleDropdowns(0);
  }

  render() {
    const dropdownOne = this.state.dropdowns[0] ? _react.default.createElement(_reduxForm.Field, {
      name: "reason0",
      options: 0,
      component: RenderDropdown,
      onChange: e => this.toggleTextareas(0, e.target.value)
    }) : null;
    const dropdownTwo = this.state.dropdowns[1] ? _react.default.createElement(_reduxForm.Field, {
      name: "reason1",
      options: 1,
      component: RenderDropdown
    }) : null;
    const dropdownThree = this.state.dropdowns[2] ? _react.default.createElement(_reduxForm.Field, {
      name: "reason2",
      options: 2,
      component: RenderDropdown,
      onChange: e => this.toggleTextareas(2, e.target.value)
    }) : null;
    const textareaOne = this.state.textareas[0] ? _react.default.createElement(_reduxForm.Field, {
      name: "otherReason",
      component: RenderTextarea
    }) : null;
    const textareaTwo = this.state.textareas[1] ? _react.default.createElement(_reduxForm.Field, {
      name: "quote_customization",
      component: RenderTextarea
    }) : null;
    const textareaThree = this.state.textareas[2] ? _react.default.createElement(_reduxForm.Field, {
      name: "otherReason",
      component: RenderTextarea
    }) : null;
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("form", {
      onSubmit: this.props.handleSubmit
    }, _react.default.createElement(GScrollDiv, {
      className: "col-sm-12 sbcw z2 p0 overflowa"
    }, _react.default.createElement("div", {
      className: "absolute wfull t0 l0"
    }, _react.default.createElement("div", {
      className: "pt8 pb8 pl15 pr15 flex bb"
    }, _react.default.createElement("div", {
      className: "pt4 pb4 flex"
    }, _react.default.createElement("p", {
      className: "f16 flex alignCenter fw7 flexFull ellipsis ml24"
    }, "Cancel Request")))), _react.default.createElement("div", {
      className: "col-sm-12 iblock p24"
    }, _react.default.createElement("p", {
      className: "f14 fw9 pfc3"
    }, "Please let us know the reason for cancelling this trip"), _react.default.createElement(_reduxForm.Field, {
      name: "cancel_reason",
      component: RenderRadioButton,
      label: _constants.cancelRequestReasons[0],
      id: "not-going",
      type: "radio",
      value: _constants.cancelRequestReasons[0],
      onClickHandler: () => this.toggleDropdowns(0)
    }), dropdownOne, textareaOne, _react.default.createElement(_reduxForm.Field, {
      name: "cancel_reason",
      component: RenderRadioButton,
      label: _constants.cancelRequestReasons[1],
      id: "not-satisfied",
      type: "radio",
      value: _constants.cancelRequestReasons[1],
      onClickHandler: () => this.toggleDropdowns(1)
    }), dropdownTwo, textareaTwo, _react.default.createElement(_reduxForm.Field, {
      name: "cancel_reason",
      component: RenderRadioButton,
      label: _constants.cancelRequestReasons[2],
      id: "going",
      type: "radio",
      value: _constants.cancelRequestReasons[2],
      onClickHandler: () => this.toggleDropdowns(2)
    }), dropdownThree, textareaThree), _react.default.createElement("div", {
      className: "fixed flex wfull b0 l0 r0 bs6"
    }, _react.default.createElement("div", {
      className: "flexFull text-center sbcw"
    }, _react.default.createElement("a", {
      onClick: this.props.closeModal,
      className: "link-pri wfull flex at_notnow fw7 hfull justifyCenter alignCenter"
    }, _react.default.createElement("span", {
      className: "block sfc6"
    }, "Not Now"))), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("button", {
      className: "pbc2 pt15 pb15 sfcw fw7 wfull ripple at_cancelrequestconfirm radius0"
    }, _react.default.createElement("span", {
      className: "wave"
    }), "Cancel Request"))))));
  }

}, _class.propTypes = {
  handleSubmit: _propTypes.default.func.isRequired,
  closeModal: _propTypes.default.func.isRequired
}, _class.defaultProps = {}, _temp);

var _default = (0, _reduxForm.reduxForm)({
  form: 'cancelBookingForm',
  initialValues: {
    reason0: _constants.notGoigOpt[0].value,
    reason1: _constants.notSatisfiedOpt[0].value,
    reason2: _constants.goingNotTTOpt[0].value,
    cancel_reason: _constants.cancelRequestReasons[0]
  }
})(CancelRequestPopUp);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/cancelRequest/CancelRequestContainer.js":
/*!*********************************************************************!*\
  !*** ./app-v2/modules/trip/cancelRequest/CancelRequestContainer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _CancelRequest = _interopRequireDefault(__webpack_require__(/*! ./CancelRequest */ "./app-v2/modules/trip/cancelRequest/CancelRequest.js"));

var _constants = __webpack_require__(/*! ./constants */ "./app-v2/modules/trip/cancelRequest/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formSubmitHelper = values => {
  const params = {
    cancel_reason: values.cancel_reason
  };

  if (values.cancel_reason === _constants.cancelRequestReasons[0]) {
    params.reason = values.reason0;

    if (values.reason0 === _constants.notGoigOpt[0] || values.reason0 === _constants.notGoigOpt[0]) {
      params.reason = 'Canceled';
    } else if (values.reason0 === _constants.notGoigOpt[1] || values.reason0 === _constants.notGoigOpt[1]) {
      params.reason = 'Changed Destination';
      params.otherReason = values.otherReason;
    } else if (values.reason0 === _constants.notGoigOpt[2] || values.reason0 === _constants.notGoigOpt[2]) {
      params.reason = 'Postponed';
    } else {
      params.reason = 'Misc';
      params.otherReason = values.otherReason;
    }
  } else if (values.cancel_reason === _constants.cancelRequestReasons[1]) {
    params.quote_customization = values.quote_customization;
    params.not_satisfied_reason = values.reason1 ? values.reason1 : values.reason1;
  } else {
    params.reason = values.reason2;

    if (values.reason2 === _constants.goingNotTTOpt[0]) {
      params.reason = 'CostlyQuotes';
    } else if (values.reason2 === _constants.goingNotTTOpt[1]) {
      params.reason = 'BookedSelf';
    } else if (values.reason2 === _constants.goingNotTTOpt[2]) {
      params.reason = 'BadQuotes';
    } else if (values.reason2 === _constants.goingNotTTOpt[3]) {
      params.reason = 'DelayedResponse';
    } else {
      params.reason = 'Other';
      params.otherReason = values.otherReason;
    }
  }

  return params;
};

const CancelRequestContainer = ({
  tripId,
  cancelBooking,
  closeModal
}) => {
  const handleSubmit = values => {
    const params = formSubmitHelper(values);
    cancelBooking({
      tripId: tripId,
      params
    }).then(() => {
      window.location.reload();
    });
  };

  return _react.default.createElement(_CancelRequest.default, {
    onSubmit: handleSubmit,
    closeModal: closeModal
  });
};

CancelRequestContainer.propTypes = {
  tripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  cancelBooking: _propTypes.default.func,
  closeModal: _propTypes.default.func
};
var _default = CancelRequestContainer;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/cancelRequest/constants.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/trip/cancelRequest/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goingNotTTOpt = exports.notGoigOpt = exports.cancelRequestReasons = exports.notSatisfiedOpt = void 0;
const notSatisfiedOpt = [{
  value: 'Need better quality',
  label: 'Need better quality'
}, {
  value: 'Need lower budget',
  label: 'Need lower budget'
}];
exports.notSatisfiedOpt = notSatisfiedOpt;
const cancelRequestReasons = ['Not going, cancel my plan', 'Not satisfied with the current quotes', 'Going but not booking on traveltriangle'];
exports.cancelRequestReasons = cancelRequestReasons;
const notGoigOpt = [{
  value: 'Due to personal reasons.',
  label: 'Due to personal reasons.'
}, {
  value: 'Going somewhere else.',
  label: 'Going somewhere else.'
}, {
  value: 'Postponed my trip',
  label: 'Postponed my trip'
}, {
  value: 'Other reason.',
  label: 'Other reason.'
}];
exports.notGoigOpt = notGoigOpt;
const goingNotTTOpt = [{
  value: 'Have better offer/services from some other agent.',
  label: 'Have better offer/services from some other agent.'
}, {
  value: 'Booking myself without an agent.',
  label: 'Booking myself without an agent.'
}, {
  value: 'TravelTriangle quotes didn\'t meet my requirements.',
  label: 'TravelTriangle quotes didn\'t meet my requirements.'
}, {
  value: 'Didn\'t receive timely response from TravelTriangle agents.',
  label: 'Didn\'t receive timely response from TravelTriangle agents.'
}, {
  value: 'Other reason.',
  label: 'Other reason.'
}];
exports.goingNotTTOpt = goingNotTTOpt;

/***/ }),

/***/ "./app-v2/modules/trip/cancelRequest/index.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/trip/cancelRequest/index.js ***!
  \****************************************************/
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

var _CancelRequestContainer = _interopRequireDefault(__webpack_require__(/*! ./CancelRequestContainer */ "./app-v2/modules/trip/cancelRequest/CancelRequestContainer.js"));

var _tripActivities = __webpack_require__(/*! ../actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(null, {
  cancelBooking: _tripActivities.cancelBooking
})(_CancelRequestContainer.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/ctas/G.js":
/*!***************************************!*\
  !*** ./app-v2/modules/trip/ctas/G.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customStyles = exports.CloseIt = exports.TextArea = exports.CancelOption = exports.DownArrowSelect = exports.DropdownPanel = exports.RadioInput = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioInput = _glamorous.default.input({
  '& + label': {
    color: '#3e3e3e',
    ':before': {
      borderColor: '#3e3e3e'
    }
  },
  '&:checked + label + .input-dropdown-box': {
    display: 'block'
  },
  '&:checked + label + .showText + textarea': {
    display: 'block'
  }
});

exports.RadioInput = RadioInput;

const DropdownPanel = _glamorous.default.div({
  display: 'none'
});

exports.DropdownPanel = DropdownPanel;

const DownArrowSelect = _glamorous.default.span({
  height: '6px',
  width: '10px'
});

exports.DownArrowSelect = DownArrowSelect;

const CancelOption = _glamorous.default.div({
  '& .Select-placeholder': {
    padding: '12px 13px',
    height: '41px'
  },
  '& .Select-input input': {
    paddingLeft: '13px !important',
    height: '41px'
  },
  '& .Select': {
    height: '44px',
    border: '1px solid #d4d4d4',
    appearance: 'none'
  },
  '& .Select-control': {
    height: '44px'
  },
  '& .Select-value': {
    padding: '10px 13px !important',
    lineHeight: '26px !important'
  }
});

exports.CancelOption = CancelOption;

const TextArea = _glamorous.default.textarea({
  height: '76px',
  resize: 'none',
  border: '1px solid #d9d9d9',
  width: '100%',
  padding: '12px'
});

exports.TextArea = TextArea;

const CloseIt = _glamorous.default.button({
  position: 'absolute',
  right: '-30px',
  top: '0',
  width: '24px',
  height: '24px',
  padding: '4px',
  zIndex: '2',
  overflow: 'hidden'
});

exports.CloseIt = CloseIt;
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'inherit',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    transform: 'translate(-50%, -50%)'
  }
};
exports.customStyles = customStyles;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2NhbmNlbFJlcXVlc3QvQ2FuY2VsUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2NhbmNlbFJlcXVlc3QvQ2FuY2VsUmVxdWVzdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2NhbmNlbFJlcXVlc3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyaXAvY2FuY2VsUmVxdWVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2N0YXMvRy5qcyJdLCJuYW1lcyI6WyJHU2Nyb2xsRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwiaGVpZ2h0IiwiZ2V0T3B0aW9ucyIsIm51bWJlciIsIm5vdEdvaWdPcHQiLCJub3RTYXRpc2ZpZWRPcHQiLCJnb2luZ05vdFRUT3B0IiwiUmVuZGVyUmFkaW9CdXR0b24iLCJpbnB1dCIsImxhYmVsIiwiaWQiLCJvbkNsaWNrSGFuZGxlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsIlJlbmRlckRyb3Bkb3duIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwiUmVuZGVyVGV4dGFyZWEiLCJDYW5jZWxSZXF1ZXN0UG9wVXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwidG9nZ2xlRHJvcGRvd25zIiwiaWR4IiwiYSIsInNldFN0YXRlIiwiZHJvcGRvd25zIiwidGV4dGFyZWFzIiwidG9nZ2xlVGV4dGFyZWFzIiwic3RhdGUiLCJzaG93VGV4dENsYXNzIiwiY3VycmVudENoZWNrZWQiLCJkZWZhdWx0T3B0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJkcm9wZG93bk9uZSIsImUiLCJ0YXJnZXQiLCJkcm9wZG93blR3byIsImRyb3Bkb3duVGhyZWUiLCJ0ZXh0YXJlYU9uZSIsInRleHRhcmVhVHdvIiwidGV4dGFyZWFUaHJlZSIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiY2FuY2VsUmVxdWVzdFJlYXNvbnMiLCJjbG9zZU1vZGFsIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJmb3JtIiwiaW5pdGlhbFZhbHVlcyIsInJlYXNvbjAiLCJyZWFzb24xIiwicmVhc29uMiIsImNhbmNlbF9yZWFzb24iLCJmb3JtU3VibWl0SGVscGVyIiwidmFsdWVzIiwicGFyYW1zIiwicmVhc29uIiwib3RoZXJSZWFzb24iLCJxdW90ZV9jdXN0b21pemF0aW9uIiwibm90X3NhdGlzZmllZF9yZWFzb24iLCJDYW5jZWxSZXF1ZXN0Q29udGFpbmVyIiwidHJpcElkIiwiY2FuY2VsQm9va2luZyIsInRoZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9uZU9mVHlwZSIsInN0cmluZyIsIlJhZGlvSW5wdXQiLCJjb2xvciIsImJvcmRlckNvbG9yIiwiZGlzcGxheSIsIkRyb3Bkb3duUGFuZWwiLCJEb3duQXJyb3dTZWxlY3QiLCJzcGFuIiwid2lkdGgiLCJDYW5jZWxPcHRpb24iLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJib3JkZXIiLCJhcHBlYXJhbmNlIiwibGluZUhlaWdodCIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJyZXNpemUiLCJDbG9zZUl0IiwiYnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsInpJbmRleCIsIm92ZXJmbG93IiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsImxlZnQiLCJib3R0b20iLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFJQTs7Ozs7Ozs7QUFFQSxNQUFNQSxhQUFhQyxtQkFBVUMsR0FBVixDQUFjO0FBQy9CQyxVQUFRO0FBRHVCLENBQWQsQ0FBbkI7O0FBSUEsTUFBTUMsYUFBYUMsVUFBVTtB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Z0JBQVk7QUFGSztBQWpCYyxDQUFkLENBQXJCOzs7O0FBdUJBLE1BQU1DLFdBQVcxRixtQkFBVTJGLFFBQVYsQ0FBbUI7QUFDbEN6RixVQUFRLE1BRDBCO0FBRWxDMEYsVUFBUSxNQUYwQjtBQUdsQ0wsVUFBUSxtQkFIMEI7QUFJbENKLFNBQU8sTUFKMkI7QUFLbENFLFdBQVM7QUFMeUIsQ0FBbkIsQ0FBakI7Ozs7QUFRQSxNQUFNUSxVQUFVN0YsbUJBQVU4RixNQUFWLENBQWlCO0FBQy9CQyxZQUFVLFVBRHFCO0FBRS9CQyxTQUFPLE9BRndCO0FBRy9CQyxPQUFLLEdBSDBCO0FBSS9CZCxTQUFPLE1BSndCO0FBSy9CakYsVUFBUSxNQUx1QjtBQU0vQm1GLFdBQVMsS0FOc0I7QUFPL0JhLFVBQVEsR0FQdUI7QUFRL0JDLFlBQVU7QUFScUIsQ0FBakIsQ0FBaEI7OztBQVdBLE1BQU1DLGVBQWU7QUFDbkJDLFdBQVM7QUFDUEosU0FBSyxLQURFO0FBRVBLLFVBQU0sS0FGQztBQUdQTixXQUFPLE1BSEE7QUFJUEcsY0FBVSxTQUpIO0FBS1BJLFlBQVEsTUFMRDtBQU1QTCxZQUFRLEtBTkQ7QUFPUGIsYUFBUyxHQVBGO0FBUVBtQixrQkFBYyxHQVJQO0FBU1BDLGVBQVc7QUFUSjtBQURVLENBQXJCIiwiZmlsZSI6IlFkcH5hbGwtdHJpcHN+cXVvdGUtYWdlbnQtY2FyZH5ybHB+cmxwLXN1Ym1pdHRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgeyBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBub3RTYXRpc2ZpZWRPcHQsIGNhbmNlbFJlcXVlc3RSZWFzb25zLCBnb2luZ05vdFRUT3B0LCBub3RHb2lnT3B0IH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsT3B0aW9uLFxuICBUZXh0QXJlYSxcbn0gZnJvbSAnLi4vY3Rhcy9HJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgR1Njcm9sbERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTEwcHgpJyxcbn0pO1xuXG5jb25zdCBnZXRPcHRpb25zID0gbnVtYmVyID0+IHtcbiAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgIHJldHVybiBub3RHb2lnT3B0O1xuICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMSkge1xuICAgIHJldHVybiBub3RTYXRpc2ZpZWRPcHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdvaW5nTm90VFRPcHQ7XG4gIH1cbn07XG5cbmNvbnN0IFJlbmRlclJhZGlvQnV0dG9uID0gKHsgaW5wdXQsIGxhYmVsLCBpZCwgb25DbGlja0hhbmRsZXIgfSkgPT4gKFxuICA8ZGl2IGlkPXtgZGl2LSR7aWR9YH0gY2xhc3NOYW1lPSdpYmxvY2sgbXI4IG10MjQgbWI4Jz5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgey4uLmlucHV0fSBjbGFzc05hbWU9XCJyYWRpby1jb21tb24tY2lyY2xlIGNoZWNrYm94LXJvdW5kIHNmYzZcIiBpZD17aWR9XG4gICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSAvPlxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpYmxvY2sgd2Z1bGwgZjE0IHBmYzMgYXRfY2FuY2VscmVxdWVzdHJlYXNvblwiXG4gICAgICAgICAgIGh0bWxGb3I9e2lkfT48ZGl2IGNsYXNzTmFtZT0ncGwzJz57bGFiZWx9PC9kaXY+PC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5SZW5kZXJSYWRpb0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMuYW55LFxuICBsYWJlbDogUHJvcFR5cGVzLmFueSxcbiAgaWQ6IFByb3BUeXBlcy5hbnksXG4gIG9uQ2xpY2tIYW5kbGVyOiBQcm9wVHlwZXMuYW55XG59O1xuXG5jb25zdCBSZW5kZXJEcm9wZG93biA9ICh7IGlucHV0LCBvcHRpb25zIH0pID0+IChcbiAgPENhbmNlbE9wdGlvbiBjbGFzc05hbWU9J21sOCByZWxhdGl2ZSc+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ljb24tMTggYWJzb2x1dGUtY2VudGVyLXYgYWJzb2x1dGUgcjEwIHA0IGxpbmVIZWlnaHQwJz5cbiAgICAgIDxEb3duQXJyb3cgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC13aXRoLWljb24tYm94IHJlbGF0aXZlIG1sMjRcIj4gICAgICBcbiAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdwbDggU2VsZWN0IHdmdWxsIGJvcmRlciBwcjQ4JyB7Li4uaW5wdXR9PlxuICAgICAgICB7XG4gICAgICAgICAgZ2V0T3B0aW9ucyhvcHRpb25zKS5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbi52YWx1ZX0ga2V5PXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvQ2FuY2VsT3B0aW9uPlxuKTtcblxuUmVuZGVyRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLmFueSxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFueSxcbiAgbGFiZWw6IFByb3BUeXBlcy5hbnlcbn07XG5cbmNvbnN0IFJlbmRlclRleHRhcmVhID0gKHsgaW5wdXQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1sOFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWwyNCBtdDhcIj5cbiAgICAgIDxUZXh0QXJlYSB7Li4uaW5wdXR9IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUmVuZGVyVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLmFueVxufTtcblxuY2xhc3MgQ2FuY2VsUmVxdWVzdFBvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dUZXh0Q2xhc3M6IGZhbHNlLFxuICAgICAgY3VycmVudENoZWNrZWQ6ICcnLFxuICAgICAgZGVmYXVsdE9wdGlvbjogJycsXG4gICAgICBkcm9wZG93bnM6IFtmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICAgIHRleHRhcmVhczogW2ZhbHNlLCBmYWxzZSwgZmFsc2VdXG4gICAgfTtcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3ducyA9IChpZHgpID0+IHtcbiAgICBjb25zdCBhID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuICAgIGFbaWR4XSA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcm9wZG93bnM6IGFcbiAgICB9KTtcbiAgICBpZiAoaWR4ID09PSAxKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGV4dGFyZWFzOiBbZmFsc2UsIHRydWUsIGZhbHNlXVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXh0YXJlYXM6IFtmYWxzZSwgZmFsc2UsIGZhbHNlXVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHRvZ2dsZVRleHRhcmVhcyA9IChpZHgsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgYSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlXTtcblxuICAgIHN3aXRjaCAoaWR4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90R29pZ09wdFsxXS52YWx1ZSB8fCB2YWx1ZSA9PT0gbm90R29pZ09wdFszXS52YWx1ZSkge1xuICAgICAgICAgIGFbaWR4XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZ29pbmdOb3RUVE9wdFs0XS52YWx1ZSkge1xuICAgICAgICAgIGFbaWR4XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRhcmVhczogYSB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRvZ2dsZURyb3Bkb3ducygwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkcm9wZG93bk9uZSA9IHRoaXMuc3RhdGUuZHJvcGRvd25zWzBdID9cbiAgICAgICg8RmllbGRcbiAgICAgICAgbmFtZT1cInJlYXNvbjBcIlxuICAgICAgICBvcHRpb25zPXswfVxuICAgICAgICBjb21wb25lbnQ9e1JlbmRlckRyb3Bkb3dufVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudG9nZ2xlVGV4dGFyZWFzKDAsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+KSA6IG51bGw7XG5cbiAgICBjb25zdCBkcm9wZG93blR3byA9IHRoaXMuc3RhdGUuZHJvcGRvd25zWzFdID9cbiAgICAgICg8RmllbGRcbiAgICAgICAgbmFtZT1cInJlYXNvbjFcIlxuICAgICAgICBvcHRpb25zPXsxfVxuICAgICAgICBjb21wb25lbnQ9e1JlbmRlckRyb3Bkb3dufVxuICAgICAgLz4pIDogbnVsbDtcblxuICAgIGNvbnN0IGRyb3Bkb3duVGhyZWUgPSB0aGlzLnN0YXRlLmRyb3Bkb3duc1syXSA/XG4gICAgICAoPEZpZWxkXG4gICAgICAgIG5hbWU9XCJyZWFzb24yXCJcbiAgICAgICAgb3B0aW9ucz17Mn1cbiAgICAgICAgY29tcG9uZW50PXtSZW5kZXJEcm9wZG93bn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnRvZ2dsZVRleHRhcmVhcygyLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPikgOiBudWxsO1xuXG4gICAgY29uc3QgdGV4dGFyZWFPbmUgPSB0aGlzLnN0YXRlLnRleHRhcmVhc1swXSA/XG4gICAgICAoPEZpZWxkXG4gICAgICAgIG5hbWU9XCJvdGhlclJlYXNvblwiXG4gICAgICAgIGNvbXBvbmVudD17UmVuZGVyVGV4dGFyZWF9XG4gICAgICAvPikgOiBudWxsO1xuXG4gICAgY29uc3QgdGV4dGFyZWFUd28gPSB0aGlzLnN0YXRlLnRleHRhcmVhc1sxXSA/XG4gICAgICAoPEZpZWxkXG4gICAgICAgIG5hbWU9XCJxdW90ZV9jdXN0b21pemF0aW9uXCJcbiAgICAgICAgY29tcG9uZW50PXtSZW5kZXJUZXh0YXJlYX1cbiAgICAgIC8+KSA6IG51bGw7XG5cbiAgICBjb25zdCB0ZXh0YXJlYVRocmVlID0gdGhpcy5zdGF0ZS50ZXh0YXJlYXNbMl0gP1xuICAgICAgKDxGaWVsZFxuICAgICAgICBuYW1lPVwib3RoZXJSZWFzb25cIlxuICAgICAgICBjb21wb25lbnQ9e1JlbmRlclRleHRhcmVhfVxuICAgICAgLz4pIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPEdTY3JvbGxEaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIHNiY3cgejIgcDAgb3ZlcmZsb3dhXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgd2Z1bGwgdDAgbDAnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0OCBwYjggcGwxNSBwcjE1IGZsZXggYmJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0NCBwYjQgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZsZXggYWxpZ25DZW50ZXIgZnc3IGZsZXhGdWxsIGVsbGlwc2lzIG1sMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGlibG9jayBwMjRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgZnc5IHBmYzNcIj5QbGVhc2UgbGV0IHVzIGtub3cgdGhlIHJlYXNvbiBmb3IgY2FuY2VsbGluZyB0aGlzIHRyaXA8L3A+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYW5jZWxfcmVhc29uXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JlbmRlclJhZGlvQnV0dG9ufVxuICAgICAgICAgICAgICAgIGxhYmVsPXtjYW5jZWxSZXF1ZXN0UmVhc29uc1swXX1cbiAgICAgICAgICAgICAgICBpZD1cIm5vdC1nb2luZ1wiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2FuY2VsUmVxdWVzdFJlYXNvbnNbMF19XG4gICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9eygpID0+IHRoaXMudG9nZ2xlRHJvcGRvd25zKDApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZHJvcGRvd25PbmV9XG4gICAgICAgICAgICAgIHt0ZXh0YXJlYU9uZX1cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhbmNlbF9yZWFzb25cIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmVuZGVyUmFkaW9CdXR0b259XG4gICAgICAgICAgICAgICAgbGFiZWw9e2NhbmNlbFJlcXVlc3RSZWFzb25zWzFdfVxuICAgICAgICAgICAgICAgIGlkPVwibm90LXNhdGlzZmllZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2FuY2VsUmVxdWVzdFJlYXNvbnNbMV19XG4gICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9eygpID0+IHRoaXMudG9nZ2xlRHJvcGRvd25zKDEpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZHJvcGRvd25Ud299XG4gICAgICAgICAgICAgIHt0ZXh0YXJlYVR3b31cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhbmNlbF9yZWFzb25cIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmVuZGVyUmFkaW9CdXR0b259XG4gICAgICAgICAgICAgICAgbGFiZWw9e2NhbmNlbFJlcXVlc3RSZWFzb25zWzJdfVxuICAgICAgICAgICAgICAgIGlkPVwiZ29pbmdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhbmNlbFJlcXVlc3RSZWFzb25zWzJdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXsoKSA9PiB0aGlzLnRvZ2dsZURyb3Bkb3ducygyKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2Ryb3Bkb3duVGhyZWV9XG4gICAgICAgICAgICAgIHt0ZXh0YXJlYVRocmVlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGZsZXggd2Z1bGwgYjAgbDAgcjAgYnM2XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4RnVsbCB0ZXh0LWNlbnRlciBzYmN3XCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmstcHJpIHdmdWxsIGZsZXggYXRfbm90bm93IGZ3NyBoZnVsbCBqdXN0aWZ5Q2VudGVyIGFsaWduQ2VudGVyXCI+PHNwYW4gY2xhc3NOYW1lPSdibG9jayBzZmM2Jz5Ob3QgTm93PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYmMyIHB0MTUgcGIxNSBzZmN3IGZ3NyB3ZnVsbCByaXBwbGUgYXRfY2FuY2VscmVxdWVzdGNvbmZpcm0gcmFkaXVzMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2F2ZVwiIC8+Q2FuY2VsIFJlcXVlc3RcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dTY3JvbGxEaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ2NhbmNlbEJvb2tpbmdGb3JtJyxcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIHJlYXNvbjA6IG5vdEdvaWdPcHRbMF0udmFsdWUsXG4gICAgcmVhc29uMTogbm90U2F0aXNmaWVkT3B0WzBdLnZhbHVlLFxuICAgIHJlYXNvbjI6IGdvaW5nTm90VFRPcHRbMF0udmFsdWUsXG4gICAgY2FuY2VsX3JlYXNvbjogY2FuY2VsUmVxdWVzdFJlYXNvbnNbMF1cbiAgfVxufSkoQ2FuY2VsUmVxdWVzdFBvcFVwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ2FuY2VsUmVxdWVzdCBmcm9tICcuL0NhbmNlbFJlcXVlc3QnO1xuaW1wb3J0IHtcbiAgY2FuY2VsUmVxdWVzdFJlYXNvbnMsXG4gIG5vdEdvaWdPcHQsXG4gIGdvaW5nTm90VFRPcHRcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBmb3JtU3VibWl0SGVscGVyID0gdmFsdWVzID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGNhbmNlbF9yZWFzb246IHZhbHVlcy5jYW5jZWxfcmVhc29uXG4gIH07XG4gIGlmICh2YWx1ZXMuY2FuY2VsX3JlYXNvbiA9PT0gY2FuY2VsUmVxdWVzdFJlYXNvbnNbMF0pIHtcbiAgICBwYXJhbXMucmVhc29uID0gdmFsdWVzLnJlYXNvbjA7XG4gICAgaWYgKFxuICAgICAgdmFsdWVzLnJlYXNvbjAgPT09IG5vdEdvaWdPcHRbMF0gfHxcbiAgICAgIHZhbHVlcy5yZWFzb24wID09PSBub3RHb2lnT3B0WzBdXG4gICAgKSB7XG4gICAgICBwYXJhbXMucmVhc29uID0gJ0NhbmNlbGVkJztcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdmFsdWVzLnJlYXNvbjAgPT09IG5vdEdvaWdPcHRbMV0gfHxcbiAgICAgIHZhbHVlcy5yZWFzb24wID09PSBub3RHb2lnT3B0WzFdXG4gICAgKSB7XG4gICAgICBwYXJhbXMucmVhc29uID0gJ0NoYW5nZWQgRGVzdGluYXRpb24nO1xuICAgICAgcGFyYW1zLm90aGVyUmVhc29uID0gdmFsdWVzLm90aGVyUmVhc29uO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB2YWx1ZXMucmVhc29uMCA9PT0gbm90R29pZ09wdFsyXSB8fFxuICAgICAgdmFsdWVzLnJlYXNvbjAgPT09IG5vdEdvaWdPcHRbMl1cbiAgICApIHtcbiAgICAgIHBhcmFtcy5yZWFzb24gPSAnUG9zdHBvbmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zLnJlYXNvbiA9ICdNaXNjJztcbiAgICAgIHBhcmFtcy5vdGhlclJlYXNvbiA9IHZhbHVlcy5vdGhlclJlYXNvbjtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsdWVzLmNhbmNlbF9yZWFzb24gPT09IGNhbmNlbFJlcXVlc3RSZWFzb25zWzFdKSB7XG4gICAgcGFyYW1zLnF1b3RlX2N1c3RvbWl6YXRpb24gPSB2YWx1ZXMucXVvdGVfY3VzdG9taXphdGlvbjtcbiAgICBwYXJhbXMubm90X3NhdGlzZmllZF9yZWFzb24gPSB2YWx1ZXMucmVhc29uMVxuICAgICAgPyB2YWx1ZXMucmVhc29uMVxuICAgICAgOiB2YWx1ZXMucmVhc29uMTtcbiAgfSBlbHNlIHtcbiAgICBwYXJhbXMucmVhc29uID0gdmFsdWVzLnJlYXNvbjI7XG4gICAgaWYgKHZhbHVlcy5yZWFzb24yID09PSBnb2luZ05vdFRUT3B0WzBdKSB7XG4gICAgICBwYXJhbXMucmVhc29uID0gJ0Nvc3RseVF1b3Rlcyc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZXMucmVhc29uMiA9PT0gZ29pbmdOb3RUVE9wdFsxXSkge1xuICAgICAgcGFyYW1zLnJlYXNvbiA9ICdCb29rZWRTZWxmJztcbiAgICB9IGVsc2UgaWYgKHZhbHVlcy5yZWFzb24yID09PSBnb2luZ05vdFRUT3B0WzJdKSB7XG4gICAgICBwYXJhbXMucmVhc29uID0gJ0JhZFF1b3Rlcyc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZXMucmVhc29uMiA9PT0gZ29pbmdOb3RUVE9wdFszXSkge1xuICAgICAgcGFyYW1zLnJlYXNvbiA9ICdEZWxheWVkUmVzcG9uc2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMucmVhc29uID0gJ090aGVyJztcbiAgICAgIHBhcmFtcy5vdGhlclJlYXNvbiA9IHZhbHVlcy5vdGhlclJlYXNvbjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbmNvbnN0IENhbmNlbFJlcXVlc3RDb250YWluZXIgPSAoeyB0cmlwSWQsIGNhbmNlbEJvb2tpbmcsIGNsb3NlTW9kYWwgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gZm9ybVN1Ym1pdEhlbHBlcih2YWx1ZXMpO1xuXG4gICAgY2FuY2VsQm9va2luZyh7IHRyaXBJZDogdHJpcElkLCBwYXJhbXMgfSkudGhlbigoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuICg8Q2FuY2VsUmVxdWVzdCBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSAvPik7XG59O1xuXG5DYW5jZWxSZXF1ZXN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgXSksXG4gIGNhbmNlbEJvb2tpbmc6IFByb3BUeXBlcy5mdW5jLFxuICBjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsUmVxdWVzdENvbnRhaW5lcjtcbiIsImV4cG9ydCBjb25zdCBub3RTYXRpc2ZpZWRPcHQgPSBbXG4gIHsgdmFsdWU6ICdOZWVkIGJldHRlciBxdWFsaXR5JywgbGFiZWw6ICdOZWVkIGJldHRlciBxdWFsaXR5JyB9LFxuICB7IHZhbHVlOiAnTmVlZCBsb3dlciBidWRnZXQnLCBsYWJlbDogJ05lZWQgbG93ZXIgYnVkZ2V0JyB9XG5dO1xuXG5leHBvcnQgY29uc3QgY2FuY2VsUmVxdWVzdFJlYXNvbnMgPSBbJ05vdCBnb2luZywgY2FuY2VsIG15IHBsYW4nLFxuICAnTm90IHNhdGlzZmllZCB3aXRoIHRoZSBjdXJyZW50IHF1b3RlcycsXG4gICdHb2luZyBidXQgbm90IGJvb2tpbmcgb24gdHJhdmVsdHJpYW5nbGUnXG5dO1xuXG5leHBvcnQgY29uc3Qgbm90R29pZ09wdCA9IFtcbiAgeyB2YWx1ZTogJ0R1ZSB0byBwZXJzb25hbCByZWFzb25zLicsIGxhYmVsOiAnRHVlIHRvIHBlcnNvbmFsIHJlYXNvbnMuJyB9LFxuICB7IHZhbHVlOiAnR29pbmcgc29tZXdoZXJlIGVsc2UuJywgbGFiZWw6ICdHb2luZyBzb21ld2hlcmUgZWxzZS4nIH0sXG4gIHsgdmFsdWU6ICdQb3N0cG9uZWQgbXkgdHJpcCcsIGxhYmVsOiAnUG9zdHBvbmVkIG15IHRyaXAnIH0sXG4gIHsgdmFsdWU6ICdPdGhlciByZWFzb24uJywgbGFiZWw6ICdPdGhlciByZWFzb24uJyB9XG5dO1xuXG5leHBvcnQgY29uc3QgZ29pbmdOb3RUVE9wdCA9IFtcbiAge1xuICAgIHZhbHVlOiAnSGF2ZSBiZXR0ZXIgb2ZmZXIvc2VydmljZXMgZnJvbSBzb21lIG90aGVyIGFnZW50LicsXG4gICAgbGFiZWw6ICdIYXZlIGJldHRlciBvZmZlci9zZXJ2aWNlcyBmcm9tIHNvbWUgb3RoZXIgYWdlbnQuJ1xuICB9LFxuICB7IHZhbHVlOiAnQm9va2luZyBteXNlbGYgd2l0aG91dCBhbiBhZ2VudC4nLCBsYWJlbDogJ0Jvb2tpbmcgbXlzZWxmIHdpdGhvdXQgYW4gYWdlbnQuJyB9LFxuICB7XG4gICAgdmFsdWU6ICdUcmF2ZWxUcmlhbmdsZSBxdW90ZXMgZGlkblxcJ3QgbWVldCBteSByZXF1aXJlbWVudHMuJyxcbiAgICBsYWJlbDogJ1RyYXZlbFRyaWFuZ2xlIHF1b3RlcyBkaWRuXFwndCBtZWV0IG15IHJlcXVpcmVtZW50cy4nXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0RpZG5cXCd0IHJlY2VpdmUgdGltZWx5IHJlc3BvbnNlIGZyb20gVHJhdmVsVHJpYW5nbGUgYWdlbnRzLicsXG4gICAgbGFiZWw6ICdEaWRuXFwndCByZWNlaXZlIHRpbWVseSByZXNwb25zZSBmcm9tIFRyYXZlbFRyaWFuZ2xlIGFnZW50cy4nXG4gIH0sXG4gIHsgdmFsdWU6ICdPdGhlciByZWFzb24uJywgbGFiZWw6ICdPdGhlciByZWFzb24uJyB9XG5dO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IENhbmNlbFJlcXVlc3RDb250YWluZXIgZnJvbSAnLi9DYW5jZWxSZXF1ZXN0Q29udGFpbmVyJztcbmltcG9ydCB7IGNhbmNlbEJvb2tpbmcgfSBmcm9tICcuLi9hY3Rpb25zL3RyaXBBY3Rpdml0aWVzJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBudWxsLCB7XG4gICAgY2FuY2VsQm9va2luZ1xuICB9XG4pKENhbmNlbFJlcXVlc3RDb250YWluZXIpKTtcbiIsImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgUmFkaW9JbnB1dCA9IGdsYW1vcm91cy5pbnB1dCh7XG4gICcmICsgbGFiZWwnOiB7XG4gICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICAnOmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiAnIzNlM2UzZSdcbiAgICB9XG4gIH0sXG4gICcmOmNoZWNrZWQgKyBsYWJlbCArIC5pbnB1dC1kcm9wZG93bi1ib3gnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICAnJjpjaGVja2VkICsgbGFiZWwgKyAuc2hvd1RleHQgKyB0ZXh0YXJlYSc6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH1cbn0pO1xuXG5jb25zdCBEcm9wZG93blBhbmVsID0gZ2xhbW9yb3VzLmRpdih7XG4gIGRpc3BsYXk6ICdub25lJ1xufSk7XG5cbmNvbnN0IERvd25BcnJvd1NlbGVjdCA9IGdsYW1vcm91cy5zcGFuKHtcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgd2lkdGg6ICcxMHB4Jyxcbn0pO1xuXG5jb25zdCBDYW5jZWxPcHRpb24gPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLlNlbGVjdC1wbGFjZWhvbGRlcic6IHtcbiAgICBwYWRkaW5nOiAnMTJweCAxM3B4JyxcbiAgICBoZWlnaHQ6ICc0MXB4J1xuICB9LFxuICAnJiAuU2VsZWN0LWlucHV0IGlucHV0Jzoge1xuICAgIHBhZGRpbmdMZWZ0OiAnMTNweCAhaW1wb3J0YW50JyxcbiAgICBoZWlnaHQ6ICc0MXB4J1xuICB9LFxuICAnJiAuU2VsZWN0Jzoge1xuICAgIGhlaWdodDogJzQ0cHgnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDRkNGQ0JyxcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIH0sXG4gICcmIC5TZWxlY3QtY29udHJvbCc6IHtcbiAgICBoZWlnaHQ6ICc0NHB4J1xuICB9LFxuICAnJiAuU2VsZWN0LXZhbHVlJzoge1xuICAgIHBhZGRpbmc6ICcxMHB4IDEzcHggIWltcG9ydGFudCcsXG4gICAgbGluZUhlaWdodDogJzI2cHggIWltcG9ydGFudCdcbiAgfVxufSk7XG5cbmNvbnN0IFRleHRBcmVhID0gZ2xhbW9yb3VzLnRleHRhcmVhKHtcbiAgaGVpZ2h0OiAnNzZweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICBib3JkZXI6ICcxcHggc29saWQgI2Q5ZDlkOScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBhZGRpbmc6ICcxMnB4J1xufSk7XG5cbmNvbnN0IENsb3NlSXQgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnLTMwcHgnLFxuICB0b3A6ICcwJyxcbiAgd2lkdGg6ICcyNHB4JyxcbiAgaGVpZ2h0OiAnMjRweCcsXG4gIHBhZGRpbmc6ICc0cHgnLFxuICB6SW5kZXg6ICcyJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxufSk7XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBvdmVyZmxvdzogJ2luaGVyaXQnLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHpJbmRleDogJzEwMScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgUmFkaW9JbnB1dCxcbiAgRHJvcGRvd25QYW5lbCxcbiAgRG93bkFycm93U2VsZWN0LFxuICBDYW5jZWxPcHRpb24sXG4gIFRleHRBcmVhLFxuICBDbG9zZUl0LFxuICBjdXN0b21TdHlsZXNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9