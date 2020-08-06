import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import DiscountOfferInput from './DiscountOfferInput';
import RenderDiscountOfferRadioButton from './DiscountOfferRadio';

class DiscountOfferList extends React.Component {
  static propTypes = {
    offers: PropTypes.array,
    appliedOfferId: PropTypes.number,
    handleSubmit: PropTypes.func.isRequired,
    updateFormField: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool
  };

  static defaultProps = {
    offers: [],
    appliedOfferId: 0,
    discountCoupon: '',
    submitting: false
  };

  constructor(props) {
    super(props);

    this.state = {
      currentOfferId: props.appliedOfferId
    };
  }

  componentDidMount() {
    this.props.updateFormField('discountOfferForm', 'discountOfferRadio', this.props.appliedOfferId.toString());
  }

  resetRadio = () => {
    this.setState({ currentOfferId: 0 });
    this.props.updateFormField('discountOfferForm', 'discountOfferRadio', null);
  };

  toggleRadio = (currentOfferId) => {
    this.setState({ currentOfferId: currentOfferId });
    this.props.updateFormField('discountOfferForm', 'discountOfferInput', '');
  };

  render() {
    const textInputOffer = <Field
      name="discountOfferInput"
      type="text"
      component={DiscountOfferInput}
      resetRadio={this.resetRadio}
    />;

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          {textInputOffer}
          {this.props.error && <span className="input-error-text mt4">{this.props.error}</span>}
          {this.props.offers.length ? <div className="formInputDividerWithText" /> : null}
          <div className="discountOfferList">
            {
              this.props.offers.length
                ? this.props.offers.map((offer, index) => <Field
                  key={index}
                  name="discountOfferRadio"
                  component={RenderDiscountOfferRadioButton}
                  id={`offer_${index}`}
                  type="radio"
                  offer={offer}
                  currentOfferId={this.state.currentOfferId}
                  value={offer.couponId}
                  onClickHandler={this.toggleRadio}
                  appliedOfferId={this.props.appliedOfferId}
                />)
                : null
            }
          </div>
          <div className='bs6 p8 sbcw b0 l0 r0 fixed'>
            <button disabled={this.props.submitting}
                    className="btn-filled-pri-large wfull radius2 at_discountOfferFormSubmit">Apply Selected
              Coupon
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'discountOfferForm',
})(DiscountOfferList);


