require("source-map-support").install();
exports.ids = ["login-forms"];
exports.modules = {

/***/ "./app/components/LoginSignup/Login.js":
/*!*********************************************!*\
  !*** ./app/components/LoginSignup/Login.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _Facebook = _interopRequireDefault(__webpack_require__(/*! ./Facebook */ "./app/components/LoginSignup/Facebook.js"));

var _Google = _interopRequireDefault(__webpack_require__(/*! ./Google */ "./app/components/LoginSignup/Google.js"));

var _FormHeader = _interopRequireDefault(__webpack_require__(/*! ../Form/FormHeader */ "./app/components/Form/FormHeader.js"));

var _formValidators = __webpack_require__(/*! ../../utils/formValidators */ "./app/utils/formValidators.js");

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
  className: "row row- pb15"
}, _react.default.createElement("div", {
  className: "col-xs-12"
}, _react.default.createElement("div", {
  className: "row row- relative"
}, _react.default.createElement("input", _extends({
  type: type
}, input, {
  className: `input ${touched && error && 'input-error'}`,
  placeholder: label
}))), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error)));

renderEmail.propTypes = {
  input: _propTypes.default.object.isRequired,
  type: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  meta: _propTypes.default.object.isRequired
};
let renderPassword = class renderPassword extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleType: true
    };
    this.handleType = this.handleType.bind(this);
  }

  handleType() {
    this.setState(prevState => ({
      isToggleType: !prevState.isToggleType
    }));
  }

  render() {
    const {
      input,
      label,
      meta: {
        touched,
        error
      }
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12"
    }, _react.default.createElement("div", {
      className: "row row- relative"
    }, _react.default.createElement("input", _extends({
      type: this.state.isToggleType ? 'password' : 'text'
    }, input, {
      className: `input pr64 ${touched && error && 'input-error'}`,
      placeholder: label
    })), _react.default.createElement(_reactRouter.Link, {
      onClick: this.handleType,
      className: "input-icon-right pfc4 f12 fw4"
    }, this.state.isToggleType ? 'SHOW' : 'HIDE')), touched && error && _react.default.createElement("span", {
      className: "input-error-text"
    }, error)));
  }

};
renderPassword.propTypes = {
  input: _propTypes.default.object.isRequired,
  label: _propTypes.default.string.isRequired,
  meta: _propTypes.default.object.isRequired
};

const Login = ({
  goBack,
  handleSubmit,
  submitting
}) => _react.default.createElement("div", null, _react.default.createElement("div", {
  className: "row row- sbcw pb64"
}, _react.default.createElement(_FormHeader.default, {
  name: "Login",
  goBack: goBack
}), _react.default.createElement("div", {
  className: "row row- mt64"
}, _react.default.createElement("div", {
  className: "col-xs-12"
}, _react.default.createElement(_Facebook.default, {
  title: "Login"
}))), _react.default.createElement("div", {
  className: "row row- mt15"
}, _react.default.createElement("div", {
  className: "col-xs-12"
}, _react.default.createElement(_Google.default, {
  title: "Login"
}))), _react.default.createElement("p", {
  className: "f16 uppercase text-center pfc4 pt24 pb24"
}, "OR"), _react.default.createElement("form", {
  onSubmit: handleSubmit
}, _react.default.createElement(_reduxForm.Field, {
  name: "email",
  component: renderEmail,
  type: "text",
  label: "Email ID",
  placeholder: "Email ID",
  validate: [_formValidators.required, _formValidators.email]
}), _react.default.createElement(_reduxForm.Field, {
  name: "password",
  component: renderPassword,
  label: "Password",
  validate: [_formValidators.required]
}), _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("div", {
  className: "row row- mt8 pl15 pr15"
}, _react.default.createElement(_reactRouter.Link, {
  to: "/users/password/new",
  className: "f12 block"
}, "Forgot Password?")), _react.default.createElement("div", {
  className: "row row- mt15"
}, _react.default.createElement("div", {
  className: "col-xs-12"
}, _react.default.createElement("button", {
  type: "submit",
  disabled: submitting,
  className: "btn-filled-pri-large wfull ripple"
}, _react.default.createElement("div", {
  className: "wave"
}), "Login"))), _react.default.createElement("p", {
  className: "f12 text-center pt15"
}, "New Here? ", _react.default.createElement(_reactRouter.Link, {
  to: "/users/sign_up",
  className: "fw9 ml5"
}, "Sign Up"))))));

Login.propTypes = {
  goBack: _propTypes.default.func.isRequired,
  handleSubmit: _propTypes.default.func.isRequired,
  submitting: _propTypes.default.bool.isRequired
};

var _default = (0, _reduxForm.reduxForm)({
  form: 'signIn-A709E'
})(Login);

exports.default = _default;

/***/ }),

/***/ "./app/components/LoginSignup/LoginFormsAsync.js":
/*!*******************************************************!*\
  !*** ./app/components/LoginSignup/LoginFormsAsync.js ***!
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

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _Login = _interopRequireDefault(__webpack_require__(/*! ./Login */ "./app/components/LoginSignup/Login.js"));

var _Signup = _interopRequireDefault(__webpack_require__(/*! ./Signup */ "./app/components/LoginSignup/Signup.js"));

var _FormDataFormatter = __webpack_require__(/*! ../../helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let LoginFormAsync = (_temp = _class = class LoginFormAsync extends _react.default.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      email: '',
      password: ''
    };
    this._handleLogin = this._handleLogin.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleSignUp = this._handleSignUp.bind(this);
    this._handleSignIn = this._handleSignIn.bind(this);
    this.getPageFullName = this.getPageFullName.bind(this);
    this.authenticatePage(props);
  }

  getPageFullName() {
    if (this.props.route.type === 'login') {
      return 'Login Page';
    }

    return 'Sign Up Page';
  }

  _handleLogin() {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }

  _handleEmailChange(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  _handlePasswordChange(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }

  _handleSignIn(values) {
    return this.props.login({
      email: values.email,
      password: values.password
    }).then(success => {
      (0, _FormDataFormatter.setCookie)('fire_alias', true);
      const redirectUrl = success && success.data && success.data.next_url ? success.data.next_url : '/';
      this.props.replaceState(redirectUrl);
    }).catch(error => {
      if (!error.errors.length) {
        throw new _reduxForm.SubmissionError({
          _error: 'Something went wrong. Please try later'
        });
      }

      throw new _reduxForm.SubmissionError({
        password: error.errors[0]
      });
    });
  }

  _handleSignUp(values) {
    return this.props.signUp({
      user: {
        name: values.name || '',
        email: values.email || '',
        password: values.password || '',
        password_confirmation: values.password_confirmation || '',
        tnc: values.tnc ? '1' : '0',
        phone_no: values.phone_no || '',
        isd_code: values.isd_code || '',
        referer_code: values.referer_code || ''
      },
      next_url: 'true'
    }).then(success => {
      (0, _FormDataFormatter.setCookie)('fire_alias', true);
      const redirectUrl = success && success.data && success.data.next_url ? success.data.next_url : '/';
      this.props.replaceState(redirectUrl);
    }).catch(error => {
      if (error.code && error.code === 422) {
        const errorMessage = error.errors[0];
        throw new _reduxForm.SubmissionError({
          email: errorMessage.substr(0, errorMessage.indexOf('.') + 1)
        });
      }

      if (!error.errors) {
        throw new _reduxForm.SubmissionError({
          _error: 'Something went wrong. Please try later'
        });
      }

      error.errors.forEach(e => {
        throw new _reduxForm.SubmissionError(e);
      });
    });
  }

  render() {
    const params = {
      goBack: this.props.goBack,
      email: this.state.email,
      password: this.state.password,
      _handleSubmit: this._handleLogin,
      _handleEmailChange: this._handleEmailChange,
      _handlePasswordChange: this._handlePasswordChange
    };
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, "Sign In - TravelTriangle"), _react.default.createElement("meta", {
      property: "fb:app_id",
      content: "168534953203541"
    }), _react.default.createElement("meta", {
      name: "mobile-web-app-capable",
      content: "yes"
    }), _react.default.createElement("meta", {
      name: "theme-color",
      content: "#68c4c1"
    }), _react.default.createElement("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), _react.default.createElement("link", {
      rel: "canonical",
      href: "https://traveltriangle.com/users/sign_in"
    }), _react.default.createElement("meta", {
      httpEquiv: "Content-Type",
      content: "text/html; charset=utf-8"
    }), _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }), _react.default.createElement("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), _react.default.createElement("meta", {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent"
    }), _react.default.createElement("meta", {
      id: "viewport",
      name: "viewport",
      content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
    }), _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }), _react.default.createElement("meta", {
      name: "page_fullname",
      content: this.getPageFullName()
    })), this.props.route.type === 'login' ? _react.default.createElement(_Login.default, _extends({}, params, {
      onSubmit: this._handleSignIn
    })) : _react.default.createElement(_Signup.default, _extends({}, params, {
      onSubmit: this._handleSignUp,
      canUserRefer: this.props.canUserRefer
    })));
  }

}, _class.propTypes = {
  isAuthenticated: _propTypes.default.bool.isRequired,
  pushState: _propTypes.default.func.isRequired,
  goBack: _propTypes.default.func.isRequired,
  route: _propTypes.default.object.isRequired,
  login: _propTypes.default.func.isRequired,
  signUp: _propTypes.default.func.isRequired,
  resetForgotPassword: _propTypes.default.func.isRequired,
  replaceState: _propTypes.default.func.isRequired,
  canUserRefer: _propTypes.default.bool.isRequired
}, _initialiseProps = function () {
  this.authenticatePage = props => {
    if (props.isAuthenticated) {
      props.pushState('/');
    }

    props.resetForgotPassword();
  };
}, _temp);
exports.default = LoginFormAsync;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Mb2dpblNpZ251cC9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Mb2dpblNpZ251cC9Mb2dpbkZvcm1zQXN5bmMuanMiXSwibmFtZXMiOlsicmVuZGVyRW1haWwiLCJpbnB1dCIsInR5cGUiLCJsYWJlbCIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwicmVuZGVyUGFzc3dvcmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImlzVG9nZ2xlVHlwZSIsImhhbmRsZVR5cGUiLCJiaW5kIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyZW5kZXIiLCJMb2dpbiIsImdvQmFjayIsImhhbmRsZVN1Ym1pdCIsInN1Ym1pdHRpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwiZnVuYyIsImJvb2wiLCJmb3JtIiwiTG9naW5Gb3JtQXN5bmMiLCJwYXNzd29yZCIsIl9oYW5kbGVMb2dpbiIsIl9oYW5kbGVFbWFpbENoYW5nZSIsIl9oYW5kbGVQYXNzd29yZENoYW5nZSIsIl9oYW5kbGVTaWduVXAiLCJfaGFuZGxlU2lnbkluIiwiZ2V0UGFnZUZ1bGxOYW1lIiwiYXV0aGVudGljYXRlUGFnZSIsInJvdXRlIiwibG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhbHVlcyIsInRoZW4iLCJzdWNjZXNzIiwicmVkaXJlY3RVcmwiLCJkYXRhIiwibmV4dF91cmwiLCJyZXBsYWNlU3RhdGUiLCJjYXRjaCIsImVycm9ycyIsImxlbmd0aCIsIlN1Ym1pc3Npb25FcnJvciIsIl9lcnJvciIsInNpZ25VcCIsInVzZXIiLCJuYW1lIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwidG5jIiwicGhvbmVfbm8iLCJpc2RfY29kZSIsInJlZmVyZXJfY29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJzdWJzdHIiLCJpbmRleE9mIiwiZm9yRWFjaCIsInBhcmFtcyIsIl9oYW5kbGVTdWJtaXQiLCJjYW5Vc2VyUmVmZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJwdXNoU3RhdGUiLCJyZXNldEZvcmdvdFBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGNBQWMsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLE1BQVQ7QUFBZUMsT0FBZjtBQUFzQkMsUUFBTTtBQUFFQyxXQUFGO0FBQVdDO0FBQVg7QUFBNUIsQ0FBRCxLQUNsQjtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFPLFFBQU1KO0FBQWIsR0FBdUJELEtBQXZCO0FBQThCLGFBQVksU0FBUUksV0FBWUMsU0FBUyxhQUFlLEVBQXRGO0FBQXlGLGVBQWFIO0FBQXRHLEdBREYsQ0FERixFQUtJRSxXQUNDQyxTQUFTO0FBQU0sYUFBVTtBQUFoQixHQUFvQ0EsS0FBcEMsQ0FOZCxDQURGLENBREY7O0FBYUFOLFlBQVlPLFNBQVosR0FBd0I7QUFDdEJOLFNBQU9PLG1CQUFVQyxNQUFWLENBQWlCQyxVQURGO0FBRXRCUixRQUFNTSxtQkFBVUcsTUFBVixDQUFpQkQsVUFGRDtBQUd0QlAsU0FBT0ssbUJBQVVHLE1BQVYsQ0FBaUJELFVBSEY7QUFJdEJOLFFBQU1JLG1CQUFVQyxNQUFWLENBQWlCQztBQUpELENBQXhCO0lBUU1FLGMsR0FBTixNQUFNQSxjQUFOLFNBQTZCQyxlQUFNQyxTQUFuQyxDQUE2QztBQUMzQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQUVDLG9CQUFjO0FBQWhCLEtBQWI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVB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ZSI6ImxvZ2luLWZvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IEZhY2Vib29rIGZyb20gJy4vRmFjZWJvb2snO1xuaW1wb3J0IEdvb2dsZSBmcm9tICcuL0dvb2dsZSc7XG5pbXBvcnQgRm9ybUhlYWRlciBmcm9tICcuLi9Gb3JtL0Zvcm1IZWFkZXInO1xuaW1wb3J0IHsgcmVxdWlyZWQsIGVtYWlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybVZhbGlkYXRvcnMnO1xuXG5jb25zdCByZW5kZXJFbWFpbCA9ICh7IGlucHV0LCB0eXBlLCBsYWJlbCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+XG4gIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGIxNVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHJlbGF0aXZlXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSB7Li4uaW5wdXR9IGNsYXNzTmFtZT17YGlucHV0ICR7dG91Y2hlZCAmJiAoZXJyb3IgJiYgJ2lucHV0LWVycm9yJyl9YH0gcGxhY2Vob2xkZXI9e2xhYmVsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIHRvdWNoZWQgJiZcbiAgICAgICAgKGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57ZXJyb3J9PC9zcGFuPilcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xuXG5yZW5kZXJFbWFpbC5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuXG5jbGFzcyByZW5kZXJQYXNzd29yZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzVG9nZ2xlVHlwZTogdHJ1ZSB9O1xuICAgIHRoaXMuaGFuZGxlVHlwZSA9IHRoaXMuaGFuZGxlVHlwZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlVHlwZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNUb2dnbGVUeXBlOiAhcHJldlN0YXRlLmlzVG9nZ2xlVHlwZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlucHV0LCBsYWJlbCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9e3RoaXMuc3RhdGUuaXNUb2dnbGVUeXBlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J30gey4uLmlucHV0fSBjbGFzc05hbWU9e2BpbnB1dCBwcjY0ICR7dG91Y2hlZCAmJiAoZXJyb3IgJiYgJ2lucHV0LWVycm9yJyl9YH0gcGxhY2Vob2xkZXI9e2xhYmVsfSAvPlxuICAgICAgICAgICAgPExpbmsgb25DbGljaz17dGhpcy5oYW5kbGVUeXBlfSBjbGFzc05hbWU9XCJpbnB1dC1pY29uLXJpZ2h0IHBmYzQgZjEyIGZ3NFwiPlxuICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuaXNUb2dnbGVUeXBlID8gJ1NIT1cnIDogJ0hJREUnIH1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0b3VjaGVkICYmXG4gICAgICAgICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbnJlbmRlclBhc3N3b3JkLnByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgTG9naW4gPSAoeyBnb0JhY2ssIGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmN3IHBiNjRcIj5cbiAgICAgIDxGb3JtSGVhZGVyIG5hbWU9XCJMb2dpblwiIGdvQmFjaz17Z29CYWNrfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtdDY0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgPEZhY2Vib29rIHRpdGxlPVwiTG9naW5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtdDE1XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgPEdvb2dsZSB0aXRsZT1cIkxvZ2luXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgcGZjNCBwdDI0IHBiMjRcIj5PUjwvcD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRW1haWx9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGxhYmVsPVwiRW1haWwgSURcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgSURcIlxuICAgICAgICAgIHZhbGlkYXRlPXtbcmVxdWlyZWQsIGVtYWlsXX1cbiAgICAgICAgLz5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlclBhc3N3b3JkfVxuICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIHZhbGlkYXRlPXtbcmVxdWlyZWRdfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtdDggcGwxNSBwcjE1XCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi91c2Vycy9wYXNzd29yZC9uZXdcIiBjbGFzc05hbWU9XCJmMTIgYmxvY2tcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gbXQxNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9IGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsIHJpcHBsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F2ZVwiIC8+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiB0ZXh0LWNlbnRlciBwdDE1XCI+TmV3IEhlcmU/IDxMaW5rIHRvPVwiL3VzZXJzL3NpZ25fdXBcIiBjbGFzc05hbWU9XCJmdzkgbWw1XCI+U2lnbiBVcDwvTGluaz48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkxvZ2luLnByb3BUeXBlcyA9IHtcbiAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdHRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnc2lnbkluLUE3MDlFJ1xufSkoTG9naW4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uRXJyb3IgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xuaW1wb3J0IFNpZ25VcCBmcm9tICcuL1NpZ251cCc7XG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL0Zvcm1EYXRhRm9ybWF0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Gb3JtQXN5bmMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2lnblVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlc2V0Rm9yZ290UGFzc3dvcmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVwbGFjZVN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNhblVzZXJSZWZlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcbiAgICB0aGlzLl9oYW5kbGVMb2dpbiA9IHRoaXMuX2hhbmRsZUxvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlRW1haWxDaGFuZ2UgPSB0aGlzLl9oYW5kbGVFbWFpbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZVBhc3N3b3JkQ2hhbmdlID0gdGhpcy5faGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVTaWduVXAgPSB0aGlzLl9oYW5kbGVTaWduVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVTaWduSW4gPSB0aGlzLl9oYW5kbGVTaWduSW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFBhZ2VGdWxsTmFtZSA9IHRoaXMuZ2V0UGFnZUZ1bGxOYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGVQYWdlKHByb3BzKTtcbiAgfVxuXG4gIGF1dGhlbnRpY2F0ZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICBwcm9wcy5wdXNoU3RhdGUoJy8nKTtcbiAgICB9XG4gICAgcHJvcHMucmVzZXRGb3Jnb3RQYXNzd29yZCgpO1xuICB9O1xuXG4gIGdldFBhZ2VGdWxsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZS50eXBlID09PSAnbG9naW4nKSB7XG4gICAgICByZXR1cm4gJ0xvZ2luIFBhZ2UnO1xuICAgIH1cbiAgICByZXR1cm4gJ1NpZ24gVXAgUGFnZSc7XG4gIH1cblxuICBfaGFuZGxlTG9naW4oKSB7XG4gICAgdGhpcy5wcm9wcy5sb2dpbih7XG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlRW1haWxDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZVBhc3N3b3JkQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVTaWduSW4odmFsdWVzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMubG9naW4oe1xuICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXG4gICAgfSkudGhlbihcbiAgICAgIChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHNldENvb2tpZSgnZmlyZV9hbGlhcycsIHRydWUpO1xuICAgICAgICBjb25zdCByZWRpcmVjdFVybCA9IChzdWNjZXNzICYmIHN1Y2Nlc3MuZGF0YSAmJiBzdWNjZXNzLmRhdGEubmV4dF91cmwpID9cbiAgICAgICAgICBzdWNjZXNzLmRhdGEubmV4dF91cmwgOlxuICAgICAgICAgICcvJztcbiAgICAgICAgdGhpcy5wcm9wcy5yZXBsYWNlU3RhdGUocmVkaXJlY3RVcmwpO1xuICAgICAgfVxuICAgICkuY2F0Y2goXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKCFlcnJvci5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN1Ym1pc3Npb25FcnJvcih7IF9lcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGxhdGVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKHsgcGFzc3dvcmQ6IGVycm9yLmVycm9yc1swXSB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgX2hhbmRsZVNpZ25VcCh2YWx1ZXMpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zaWduVXAoe1xuICAgICAgdXNlcjoge1xuICAgICAgICBuYW1lOiB2YWx1ZXMubmFtZSB8fCAnJyxcbiAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCB8fCAnJyxcbiAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCB8fCAnJyxcbiAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiB2YWx1ZXMucGFzc3dvcmRfY29uZmlybWF0aW9uIHx8ICcnLFxuICAgICAgICB0bmM6IHZhbHVlcy50bmMgPyAnMScgOiAnMCcsXG4gICAgICAgIHBob25lX25vOiB2YWx1ZXMucGhvbmVfbm8gfHwgJycsXG4gICAgICAgIGlzZF9jb2RlOiB2YWx1ZXMuaXNkX2NvZGUgfHwgJycsXG4gICAgICAgIHJlZmVyZXJfY29kZTogdmFsdWVzLnJlZmVyZXJfY29kZSB8fCAnJyxcbiAgICAgIH0sXG4gICAgICBuZXh0X3VybDogJ3RydWUnXG4gICAgfSkudGhlbihcbiAgICAgIChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHNldENvb2tpZSgnZmlyZV9hbGlhcycsIHRydWUpO1xuICAgICAgICBjb25zdCByZWRpcmVjdFVybCA9IChzdWNjZXNzICYmIHN1Y2Nlc3MuZGF0YSAmJiBzdWNjZXNzLmRhdGEubmV4dF91cmwpID9cbiAgICAgICAgICBzdWNjZXNzLmRhdGEubmV4dF91cmwgOlxuICAgICAgICAgICcvJztcbiAgICAgICAgdGhpcy5wcm9wcy5yZXBsYWNlU3RhdGUocmVkaXJlY3RVcmwpO1xuICAgICAgfVxuICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IuY29kZSAmJiBlcnJvci5jb2RlID09PSA0MjIpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IuZXJyb3JzWzBdO1xuICAgICAgICB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKHtcbiAgICAgICAgICBlbWFpbDogZXJyb3JNZXNzYWdlLnN1YnN0cigwLCBlcnJvck1lc3NhZ2UuaW5kZXhPZignLicpICsgMSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZXJyb3IuZXJyb3JzKSB7XG4gICAgICAgIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoeyBfZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBsYXRlcicgfSk7XG4gICAgICB9XG5cbiAgICAgIGVycm9yLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBnb0JhY2s6IHRoaXMucHJvcHMuZ29CYWNrLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgIF9oYW5kbGVTdWJtaXQ6IHRoaXMuX2hhbmRsZUxvZ2luLFxuICAgICAgX2hhbmRsZUVtYWlsQ2hhbmdlOiB0aGlzLl9oYW5kbGVFbWFpbENoYW5nZSxcbiAgICAgIF9oYW5kbGVQYXNzd29yZENoYW5nZTogdGhpcy5faGFuZGxlUGFzc3dvcmRDaGFuZ2VcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPHRpdGxlPlNpZ24gSW4gLSBUcmF2ZWxUcmlhbmdsZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYjphcHBfaWRcIiBjb250ZW50PVwiMTY4NTM0OTUzMjAzNTQxXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNjhjNGMxXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS91c2Vycy9zaWduX2luXCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiYmxhY2stdHJhbnNsdWNlbnRcIiAvPlxuICAgICAgICAgIDxtZXRhIGlkPVwidmlld3BvcnRcIiBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBtaW5pbXVtLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9mdWxsbmFtZVwiIGNvbnRlbnQ9e3RoaXMuZ2V0UGFnZUZ1bGxOYW1lKCl9IC8+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZS50eXBlID09PSAnbG9naW4nID9cbiAgICAgICAgICA8TG9naW5cbiAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5faGFuZGxlU2lnbklufVxuICAgICAgICAgIC8+IDpcbiAgICAgICAgICA8U2lnblVwXG4gICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVNpZ25VcH1cbiAgICAgICAgICAgIGNhblVzZXJSZWZlcj17dGhpcy5wcm9wcy5jYW5Vc2VyUmVmZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==