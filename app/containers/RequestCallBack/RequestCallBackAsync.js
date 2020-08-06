import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import RequestCallback from '../../components/RequestCallback/RequestCallback';
import FormHeader from '../../components/Form/FormHeader.js';
import '../../components/RequestCallback/RequestCallback.scss';
import { IllusThanksRequest } from 'helpers/Icon/Icon';
import InternalServerError from '../../components/Generic/InternalServerError';

class RequestCallBackAsync extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    load: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    loadingError: PropTypes.object
  };

  static defaultProps = {
    loadingError: null
  };

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.resetPage(props);
  }

  resetPage = (props) => {
    if (props.isLoaded) {
      props.reset();
    }
  };

  _handleSubmit(values) {
    this.props.load({
      phone: values.phone || ''
    });
  }

  render() {
    if (this.props.loadingError) {
      return <InternalServerError />;
    }

    const helmetMetaTags = (
      <Helmet>
        <link rel="canonical" href="https://traveltriangle.com/new_request_for_callback" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="fb:app_id" content="168534953203541" />
        <meta name="category" content="Destination:Unknown" />
        <meta name="destination_id" content="" />
        <meta name="destination_type" content="" />
        <title>  Requuest Call Back - TravelTriangle</title>
        <link href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico" rel="icon" type="image/x-icon" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
    );

    if (this.props.isLoaded) {
      return (
        <div className="row row-">
          {helmetMetaTags}
          <FormHeader name="Submitted Request" goBack={this.props.goBack} />
          <div className="row row- sbcw request-Header-container">
            <p className="illus-support-icon mt24 mb18"><span className="ml48 block"><IllusThanksRequest className="container-support-icon" /></span></p>
            <h3 className="f16 text-center pfc3 pt24">Thank You!</h3>
          </div>
          <div className="row row- p15 text-center">
            <div className="pl15 pr15 row row-">You request is submitted. We will call you back with in <strong className="f14">24hrs.</strong></div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {helmetMetaTags}
        <RequestCallback
          onSubmit={this._handleSubmit}
          goBack={this.props.goBack}
        />
      </div>
    );
  }
}

export default RequestCallBackAsync;
