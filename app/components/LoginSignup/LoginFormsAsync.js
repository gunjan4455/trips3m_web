import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { SubmissionError } from 'redux-form';

import Login from './Login';
import SignUp from './Signup';
import { setCookie } from '../../helpers/FormDataFormatter';

export default class LoginFormAsync extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    pushState: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    resetForgotPassword: PropTypes.func.isRequired,
    replaceState: PropTypes.func.isRequired,
    canUserRefer: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
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

  authenticatePage = (props) => {
    if (props.isAuthenticated) {
      props.pushState('/');
    }
    props.resetForgotPassword();
  };

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
      password: values.password,
    }).then(
      (success) => {
        setCookie('fire_alias', true);
        const redirectUrl = (success && success.data && success.data.next_url) ?
          success.data.next_url :
          '/';
        this.props.replaceState(redirectUrl);
      }
    ).catch(
      (error) => {
        if (!error.errors.length) {
          throw new SubmissionError({ _error: 'Something went wrong. Please try later' });
        }
        throw new SubmissionError({ password: error.errors[0] });
      }
    );
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
        referer_code: values.referer_code || '',
      },
      next_url: 'true'
    }).then(
      (success) => {
        setCookie('fire_alias', true);
        const redirectUrl = (success && success.data && success.data.next_url) ?
          success.data.next_url :
          '/';
        this.props.replaceState(redirectUrl);
      }
    ).catch((error) => {
      if (error.code && error.code === 422) {
        const errorMessage = error.errors[0];
        throw new SubmissionError({
          email: errorMessage.substr(0, errorMessage.indexOf('.') + 1)
        });
      }

      if (!error.errors) {
        throw new SubmissionError({ _error: 'Something went wrong. Please try later' });
      }

      error.errors.forEach((e) => {
        throw new SubmissionError(e);
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
    return (
      <div className="row row-">
        <Helmet>
          <title>Sign In - TravelTriangle</title>
          <meta property="fb:app_id" content="168534953203541" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#68c4c1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="canonical" href="https://traveltriangle.com/users/sign_in" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta id="viewport" name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="page_fullname" content={this.getPageFullName()} />
        </Helmet>
        {this.props.route.type === 'login' ?
          <Login
            {...params}
            onSubmit={this._handleSignIn}
          /> :
          <SignUp
            {...params}
            onSubmit={this._handleSignUp}
            canUserRefer={this.props.canUserRefer}
          />
        }
      </div>
    );
  }
}
