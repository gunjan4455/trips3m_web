import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import InputComponent from  'modules/shared/input';
import { DownArrow } from 'helpers/Icon/Icon';
import DropdownComponent from 'modules/flights/form/components/Dropdown';
import  { CurrencyList, DEFAULT_CURRENCY } from 'constants/currencies';


class DealPriceForm extends React.PureComponent {

  static propTypes = {
    save: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    quotePrice: PropTypes.number
  };

  static defaultProps = {
    quotePrice: 0
  };

  render() {
    const { handleSubmit, save, quotePrice } = this.props;
    return (
      <form onSubmit={handleSubmit(save)} className="at_priceMatchForm">
        <h4 className="pfc1 f32 fw7 pb8 lh24 m0 flexFull text-left  ">We Price Match!</h4>
        <p className="f14 mb48">Tell us a better deal and we will try to match the price.</p>
        <div className='mb24'>
          <label className='f14 fw9 pb8 block'>Please share the quoted price <em className='pfc2'>*</em></label>
          <div className='row'>
            <div className='col-xs-4'>
              <div className="relative">
                <Field
                  name="currency"
                  component={DropdownComponent}
                  options={CurrencyList}
                  readOnly
                  fetchSuggestions={false}
                  inputClassName=''
                />
                <span className='t25 r4 block wauto lauto input-icon absolute-center-v downArrow'><DownArrow /></span>
              </div>
            </div>
            <div className='col-xs-8 pl0'>
              <Field
                name="price"
                type="number"
                placeholder="Quoted Price"
                component={InputComponent}
              />
            </div>
          </div>
        </div>
        <div className="bs6 p8 sbcw b0 l0 r0 z2 fixed">
          <button className="btn-filled-pri-large wfull radius2"
                  type="submit" disabled={!quotePrice}>
            Submit</button>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.price) {
    errors.price = 'Please enter the quote price';
  }
  return errors;
};

const selector = formValueSelector('dealPriceForm');

const DealPriceConnectedForm = connect((state) => {
  const quotePrice = selector(state, 'price');
  return { quotePrice };
})(DealPriceForm);

export default reduxForm({
  form: 'dealPriceForm',
  validate,
  initialValues: {
    currency: DEFAULT_CURRENCY.value
  },
  enableReinitialize: true
})(DealPriceConnectedForm);
