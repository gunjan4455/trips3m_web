require("source-map-support").install();
exports.ids = ["forgot-password"];
exports.modules = {

/***/ "./app/components/ForgotPassword/ForgotPassword.js":
/*!*********************************************************!*\
  !*** ./app/components/ForgotPassword/ForgotPassword.js ***!
  \*********************************************************/
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

var _FormHeader = _interopRequireDefault(__webpack_require__(/*! ../Form/FormHeader.js */ "./app/components/Form/FormHeader.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _formValidators = __webpack_require__(/*! ../../utils/formValidators */ "./app/utils/formValidators.js");

__webpack_require__(/*! ./ForgotPassword.scss */ "./app/components/ForgotPassword/ForgotPassword.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const renderEmail = ({
  input,
  type,
  label,
  meta: {
    touched,
    error
  }
}) => _react.default.createElement("div", {
  className: "row row- mt24"
}, _react.default.createElement("label", {
  htmlFor: "email",
  className: "fw9"
}, "Email ID"), _react.default.createElement("div", {
  className: "relative mt15 relative"
}, _react.default.createElement("input", _extends({
  type: type
}, input, {
  className: `input ${touched && error && 'input-error'}`,
  placeholder: label
}))), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error));

renderEmail.propTypes = {
  input: _propTypes.default.object.isRequired,
  type: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  meta: _propTypes.default.object.isRequired
};

const ForgotPassword = ({
  goBack,
  handleSubmit,
  submitting
}) => _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement(_FormHeader.default, {
  name: "Forgot Password",
  goBack: goBack
}), _react.default.createElement("div", {
  className: "col-xs-12 sbcw"
}, _react.default.createElement("p", {
  className: "mt24 mb18"
}, _react.default.createElement("span", {
  className: "forgotIcon"
}, _react.default.createElement(_Icon.IllusForgotPassword, {
  className: "container-forgot-icon"
}))), _react.default.createElement("p", {
  className: "mt24 f14 fw4 text-center pfc3"
}, "We\u2019ll email you a link to reset your Password."), _react.default.createElement("form", {
  onSubmit: handleSubmit
}, _react.default.createElement(_reduxForm.Field, {
  name: "email",
  component: renderEmail,
  type: "text",
  label: "Email ID",
  placeholder: "Email ID",
  validate: [_formValidators.required, _formValidators.email]
}), _react.default.createElement("div", {
  className: "col-xs-12 pb64 pl0 pr0 pt16 callme-btn-primary"
}, _react.default.createElement("button", {
  disabled: submitting,
  className: "btn-filled-pri-large wfull mt15 mb64 text-capitalize ripple"
}, _react.default.createElement("div", {
  className: "wave"
}), "Sent Reset Link")))));

ForgotPassword.propTypes = {
  goBack: _propTypes.default.func.isRequired,
  handleSubmit: _propTypes.default.func.isRequired,
  submitting: _propTypes.default.bool.isRequired
};

var _default = (0, _reduxForm.reduxForm)({
  form: 'forgotPassword-QL08B'
})(ForgotPassword);

exports.default = _default;

/***/ }),

/***/ "./app/components/ForgotPassword/ForgotPassword.scss":
/*!***********************************************************!*\
  !*** ./app/components/ForgotPassword/ForgotPassword.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container-forgot-icon": "_3_6VS",
	"forgotIcon": "_2s0MX"
};

/***/ }),

/***/ "./app/components/RequestCallback/RequestCallback.scss":
/*!*************************************************************!*\
  !*** ./app/components/RequestCallback/RequestCallback.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"request-Header-container": "_mDtDx",
	"illus-support-icon": "_2dJn_",
	"container-support-icon": "_3OEPh",
	"pt18": "_1aDI0",
	"thankYouIcon": "_qQ6DH"
};

/***/ }),

/***/ "./app/containers/ForgotPassword/ForgotPasswordAsync.js":
/*!**************************************************************!*\
  !*** ./app/containers/ForgotPassword/ForgotPasswordAsync.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _ForgotPassword = _interopRequireDefault(__webpack_require__(/*! ../../components/ForgotPassword/ForgotPassword */ "./app/components/ForgotPassword/ForgotPassword.js"));

var _FormHeader = _interopRequireDefault(__webpack_require__(/*! ../../components/Form/FormHeader */ "./app/components/Form/FormHeader.js"));

__webpack_require__(/*! ../../components/RequestCallback/RequestCallback.scss */ "./app/components/RequestCallback/RequestCallback.scss");

var _forgotPassword = __webpack_require__(/*! ../../reducers/forgotPassword */ "./app/reducers/forgotPassword.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ForgotPasswordAsync = (_temp = _class = class ForgotPasswordAsync extends _react.Component {
  constructor(props) {
    super(props);

    this._handleSubmit = (values, dispatch) => dispatch((0, _forgotPassword.load)({
      user: {
        email: values.email || ''
      }
    })).then(success => console.log(success)).catch(error => {
      if (!error.errors) {
        throw new _reduxForm.SubmissionError({
          _error: 'Something went wrong. Please try later'
        });
      }

      throw new _reduxForm.SubmissionError({
        email: error.errors[0]
      });
    });

    this._handleSubmit = this._handleSubmit.bind(this);
    props.resetStatus();
  }

  render() {
    return this.props.isLoaded ? _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_FormHeader.default, {
      name: "Submitted Request",
      goBack: this.props.goBackState
    }), _react.default.createElement("div", {
      className: "row row- sbcw request-Header-container"
    }, _react.default.createElement("p", {
      className: "illus-support-icon mt24 mb18"
    }, _react.default.createElement("span", {
      className: "block thankYouIcon"
    }, _react.default.createElement(_Icon.IllusThanksRequest, {
      className: "container-support-icon"
    }))), _react.default.createElement("h3", {
      className: "f16 text-center pfc3 pt24"
    }, "Thank You!")), _react.default.createElement("div", {
      className: "row row- p15 text-center"
    }, _react.default.createElement("div", {
      className: "pl15 pr15 row row-"
    }, "You will receive an email with instructions about how to reset your password in a few minutes."))) : _react.default.createElement(_ForgotPassword.default, {
      onSubmit: this._handleSubmit,
      goBack: this.props.goBackState
    });
  }

}, _class.propTypes = {
  isLoaded: _propTypes.default.bool.isRequired,
  goBackState: _propTypes.default.func.isRequired,
  resetStatus: _propTypes.default.func.isRequired
}, _temp);
var _default = ForgotPasswordAsync;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay9SZXF1ZXN0Q2FsbGJhY2suc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZEFzeW5jLmpzIl0sIm5hbWVzIjpbInJlbmRlckVtYWlsIiwiaW5wdXQiLCJ0eXBlIiwibGFiZWwiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIkZvcmdvdFBhc3N3b3JkIiwiZ29CYWNrIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0dGluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJmdW5jIiwiYm9vbCIsImZvcm0iLCJGb3Jnb3RQYXNzd29yZEFzeW5jIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIl9oYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJkaXNwYXRjaCIsInVzZXIiLCJ0aGVuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9ycyIsIlN1Ym1pc3Npb25FcnJvciIsIl9lcnJvciIsImJpbmQiLCJyZXNldFN0YXR1cyIsInJlbmRlciIsImlzTG9hZGVkIiwiZ29CYWNrU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBR0EsTUFBTUEsY0FBYyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsTUFBVDtBQUFlQyxPQUFmO0FBQXNCQyxRQUFNO0FBQUVDLFdBQUY7QUFBV0M7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S0FQSCxDQVBpQjs7QUFFakIsU0FBS1QsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CWSxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBYixVQUFNYyxXQUFOO0FBQ0Q7O0FBWURDLFdBQVM7QUFDUCxXQUNFLEtBQUtmLEtBQUwsQ0FBV2dCLFFBQVgsR0FDRTtBQUFLLGlCQUFVO0FBQWYsT0FDRSw2QkFBQyxtQkFBRDtBQUFZLFlBQUssbUJBQWpCO0FBQXFDLGNBQVEsS0FBS2hCLEtBQUwsQ0FBV2lCO0FBQXhELE1BREYsRUFFRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFHLGlCQUFVO0FBQWIsT0FBNEM7QUFBTSxpQkFBVTtBQUFoQixPQUFxQyw2QkFBQyx3QkFBRDtBQUFvQixpQkFBVTtBQUE5QixNQUFyQyxDQUE1QyxDQURGLEVBRUU7QUFBSSxpQkFBVTtBQUFkLG9CQUZGLENBRkYsRUFNRTtBQUFLLGlCQUFVO0FBQWYsT0FDRTtBQUFLLGlCQUFVO0FBQWYsd0dBREYsQ0FORixDQURGLEdBY0UsNkJBQUMsdUJBQUQ7QUFDRSxnQkFBVSxLQUFLaEIsYUFEakI7QUFFRSxjQUFRLEtBQUtELEtBQUwsQ0FBV2lCO0FBRnJCLE1BZko7QUFvQkQ7O0FBNUN5QyxDLFNBQ25DbEMsUyxHQUFZO0FBQ2pCaUMsWUFBVWhDLG1CQUFVVyxJQUFWLENBQWVULFVBRFI7QUFFakIrQixlQUFhakMsbUJBQVVVLElBQVYsQ0FBZVIsVUFGWDtBQUdqQjRCLGVBQWE5QixtQkFBVVUsSUFBVixDQUFlUjtBQUhYLEM7ZUE4Q05XLG1CIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgRm9ybUhlYWRlciBmcm9tICcuLi9Gb3JtL0Zvcm1IZWFkZXIuanMnO1xuaW1wb3J0IHsgSWxsdXNGb3Jnb3RQYXNzd29yZCB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IHJlcXVpcmVkLCBlbWFpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1WYWxpZGF0b3JzJztcblxuaW1wb3J0ICcuL0ZvcmdvdFBhc3N3b3JkLnNjc3MnO1xuXG5cbmNvbnN0IHJlbmRlckVtYWlsID0gKHsgaW5wdXQsIHR5cGUsIGxhYmVsLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIG10MjQnPlxuICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9J2Z3OSc+RW1haWwgSUQ8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBtdDE1IHJlbGF0aXZlJz5cbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSB7Li4uaW5wdXR9IGNsYXNzTmFtZT17YGlucHV0ICR7dG91Y2hlZCAmJiAoZXJyb3IgJiYgJ2lucHV0LWVycm9yJyl9YH0gcGxhY2Vob2xkZXI9e2xhYmVsfSAvPlxuICAgIDwvZGl2PlxuICAgIHtcbiAgICAgIHRvdWNoZWQgJiZcbiAgICAgICAgKGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtZXJyb3ItdGV4dCc+e2Vycm9yfTwvc3Bhbj4pXG4gICAgfVxuICA8L2Rpdj47XG5cbnJlbmRlckVtYWlsLnByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICh7IGdvQmFjaywgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctJz5cbiAgICA8Rm9ybUhlYWRlciBuYW1lPVwiRm9yZ290IFBhc3N3b3JkXCIgZ29CYWNrPXtnb0JhY2t9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBzYmN3Jz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nbXQyNCBtYjE4Jz48c3BhbiBjbGFzc05hbWU9J2ZvcmdvdEljb24nPjxJbGx1c0ZvcmdvdFBhc3N3b3JkIGNsYXNzTmFtZT0nY29udGFpbmVyLWZvcmdvdC1pY29uJyAvPjwvc3Bhbj48L3A+XG4gICAgICA8cCBjbGFzc05hbWU9J210MjQgZjE0IGZ3NCB0ZXh0LWNlbnRlciBwZmMzJz5XZeKAmWxsIGVtYWlsIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBQYXNzd29yZC48L3A+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckVtYWlsfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBsYWJlbD1cIkVtYWlsIElEXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIElEXCJcbiAgICAgICAgICB2YWxpZGF0ZT17W3JlcXVpcmVkLCBlbWFpbF19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcGI2NCBwbDAgcHIwIHB0MTYgY2FsbG1lLWJ0bi1wcmltYXJ5Jz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGwgbXQxNSBtYjY0IHRleHQtY2FwaXRhbGl6ZSByaXBwbGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dhdmUnIC8+XG4gICAgICAgICAgU2VudCBSZXNldCBMaW5rXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Gb3Jnb3RQYXNzd29yZC5wcm9wVHlwZXMgPSB7XG4gIGdvQmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdWJtaXR0aW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ2ZvcmdvdFBhc3N3b3JkLVFMMDhCJ1xufSkoRm9yZ290UGFzc3dvcmQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyLWZvcmdvdC1pY29uXCI6IFwiXzNfNlZTXCIsXG5cdFwiZm9yZ290SWNvblwiOiBcIl8yczBNWFwiXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJlcXVlc3QtSGVhZGVyLWNvbnRhaW5lclwiOiBcIl9tRHREeFwiLFxuXHRcImlsbHVzLXN1cHBvcnQtaWNvblwiOiBcIl8yZEpuX1wiLFxuXHRcImNvbnRhaW5lci1zdXBwb3J0LWljb25cIjogXCJfM09FUGhcIixcblx0XCJwdDE4XCI6IFwiXzFhREkwXCIsXG5cdFwidGhhbmtZb3VJY29uXCI6IFwiX3FRNkRIXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uRXJyb3IgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmQnO1xuaW1wb3J0IEZvcm1IZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtL0Zvcm1IZWFkZXInO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay9SZXF1ZXN0Q2FsbGJhY2suc2Nzcyc7XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvZm9yZ290UGFzc3dvcmQnO1xuXG5pbXBvcnQgeyBJbGx1c1RoYW5rc1JlcXVlc3QgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNsYXNzIEZvcmdvdFBhc3N3b3JkQXN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlzTG9hZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGdvQmFja1N0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlc2V0U3RhdHVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gdGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgcHJvcHMucmVzZXRTdGF0dXMoKTtcbiAgfVxuXG4gIF9oYW5kbGVTdWJtaXQgPSAodmFsdWVzLCBkaXNwYXRjaCkgPT5cbiAgICBkaXNwYXRjaChsb2FkKHsgdXNlcjogeyBlbWFpbDogdmFsdWVzLmVtYWlsIHx8ICcnIH19KSlcbiAgICAgIC50aGVuKHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coc3VjY2VzcykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGlmICghZXJyb3IuZXJyb3JzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN1Ym1pc3Npb25FcnJvcih7IF9lcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGxhdGVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKHsgZW1haWw6IGVycm9yLmVycm9yc1swXSB9KTtcbiAgICAgIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5pc0xvYWRlZCA/XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICA8Rm9ybUhlYWRlciBuYW1lPVwiU3VibWl0dGVkIFJlcXVlc3RcIiBnb0JhY2s9e3RoaXMucHJvcHMuZ29CYWNrU3RhdGV9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmN3IHJlcXVlc3QtSGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWxsdXMtc3VwcG9ydC1pY29uIG10MjQgbWIxOFwiPjxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRoYW5rWW91SWNvblwiPjxJbGx1c1RoYW5rc1JlcXVlc3QgY2xhc3NOYW1lPVwiY29udGFpbmVyLXN1cHBvcnQtaWNvblwiIC8+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTYgdGV4dC1jZW50ZXIgcGZjMyBwdDI0XCI+VGhhbmsgWW91ITwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwMTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwxNSBwcjE1IHJvdyByb3ctXCI+XG4gICAgICAgICAgICAgIFlvdSB3aWxsIHJlY2VpdmUgYW4gZW1haWwgd2l0aCBpbnN0cnVjdGlvbnMgYWJvdXRcbiAgICAgICAgICAgICAgaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQgaW4gYSBmZXcgbWludXRlcy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gOlxuICAgICAgICA8Rm9yZ290UGFzc3dvcmRcbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0fVxuICAgICAgICAgIGdvQmFjaz17dGhpcy5wcm9wcy5nb0JhY2tTdGF0ZX1cbiAgICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkQXN5bmM7XG4iXSwic291cmNlUm9vdCI6IiJ9