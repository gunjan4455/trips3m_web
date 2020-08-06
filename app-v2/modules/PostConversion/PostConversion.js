import React, { Component } from 'react';

import PostConversionBox from './postConversionBox';
import PropTypes from 'prop-types';
export default class PostConversion extends Component {
  static propTypes = {
    quotes: PropTypes.object,
    match: PropTypes.object,
    fetchPostConversionData: PropTypes.func,
    postConversionData: PropTypes.object,
    getInvoiceStatus: PropTypes.func,
    showRoster: PropTypes.func,
    currentQuoteId: PropTypes.number
  }

  state = {
    showComponent: true
  }

  handleClick = (cta, message) => {
    const { getInvoiceStatus } = this.props;
    const requestedTripId = this.getRequestedTripId();
    const invoiceId = this.getInvoiceId();
    const data = {
      status: cta,
    };
    getInvoiceStatus(data, requestedTripId, invoiceId)
    .then(() => {
      this.props.showRoster({
        allowTimeOut: true,
        message
      });
      this.setState({
        showComponent: false
      }
    );});
  }

  getRequestedTripId = () => parseInt(this.props.match.params.id, 10) || parseInt(this.props.match.params.requestedTripId, 10);

  getInvoiceId = () => {
    const { quotes, currentQuoteId } = this.props;
    if (currentQuoteId) {
      const currentQuote = quotes[currentQuoteId];
      return currentQuote.status === 'converted' ? currentQuote.invoiceDetails.id : null;
    }
    else {
      const convertedQuote = Object.values(quotes).filter((quote) => quote.status === 'converted');
      const invoiceId = convertedQuote.length ? convertedQuote[0].invoiceDetails.id : null;
      return invoiceId;
    }
  }

  componentDidMount() {
    const { postConversionData } = this.props;
    const invoiceId = this.getInvoiceId();
    const requestedTripId = this.getRequestedTripId();
    invoiceId && !Object.values(postConversionData).length ? this.props.fetchPostConversionData(requestedTripId, invoiceId) : null;
  }
  render() {
    const invoiceId = this.getInvoiceId();
    const { postConversionData } = this.props;
    const { showComponent } = this.state;
    return (
      <React.Fragment>
      {
        postConversionData.success && showComponent && invoiceId ? 
          <PostConversionBox 
            postConversionData={postConversionData} 
            handleClick={this.handleClick}  
          /> 
          : 
          null
      }
    </React.Fragment>
    );
  }
}
