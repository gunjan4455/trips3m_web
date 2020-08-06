import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';

import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import FormHeader from '../../components/Form/FormHeader';
import '../../components/RequestCallback/RequestCallback.scss';
import { load } from '../../reducers/forgotPassword';

import { IllusThanksRequest } from 'helpers/Icon/Icon';

class ForgotPasswordAsync extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    goBackState: PropTypes.func.isRequired,
    resetStatus: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    props.resetStatus();
  }

  _handleSubmit = (values, dispatch) =>
    dispatch(load({ user: { email: values.email || '' }}))
      .then(success => console.log(success))
      .catch((error) => {
        if (!error.errors) {
          throw new SubmissionError({ _error: 'Something went wrong. Please try later' });
        }
        throw new SubmissionError({ email: error.errors[0] });
      });

  render() {
    return (
      this.props.isLoaded ?
        <div className="row row-">
          <FormHeader name="Submitted Request" goBack={this.props.goBackState} />
          <div className="row row- sbcw request-Header-container">
            <p className="illus-support-icon mt24 mb18"><span className="block thankYouIcon"><IllusThanksRequest className="container-support-icon" /></span></p>
            <h3 className="f16 text-center pfc3 pt24">Thank You!</h3>
          </div>
          <div className="row row- p15 text-center">
            <div className="pl15 pr15 row row-">
              You will receive an email with instructions about
              how to reset your password in a few minutes.
            </div>
          </div>
        </div> :
        <ForgotPassword
          onSubmit={this._handleSubmit}
          goBack={this.props.goBackState}
        />
    );
  }
}

export default ForgotPasswordAsync;
