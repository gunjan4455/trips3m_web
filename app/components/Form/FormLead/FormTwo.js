import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import HotelStar from '../HotelStar';
import './LeadForm.scss';
import { Back2Icon } from 'helpers/Icon/Icon';
import { getRange } from '../../../helpers/array';
import TravelerNumber from '../TravelerNumber';
import FlightOptions from '../FlightOptions';
import IWillBook from '../IWillBook';
import TourTypes from '../TourTypes';
import AdditionalPrefs from '../AdditionalPrefs';
import CabPrefs from '../CabPrefs';
import Attractions from '../Attractions';
import Budget from 'containers/FormTwoLead/Budget';


const validate = (values) => {
  const errors = {};
  // Hotels validations
  const hotelError = 'Hotel field must be selected';
  if (!values.cust_2) {
    errors.cust_2 = hotelError;
  }
  if (values.cust_2 && !values.cust_2.length) {
    errors.cust_2 = hotelError;
  }
  return errors;
};
const FormTwoElement = ({ handleSubmit, onSubmit, localExpCust, goBack, disableSubmitButton }) => (
  <div className="row row-">
    <div className="form-header row row- sbcw">
      <div className="col-xs-12 pl48 pr15">
        <button onClick={goBack} className="cross-common"><Back2Icon /></button>
        <p className="f16">Customise Your Package</p>
      </div>
    </div>
    <form onSubmit={handleSubmit} >
      <div className="form-part p15 sbcw mb8">
        <div className="row">
          <Field
            component={TravelerNumber}
            name="adult"
            numberFor="adults"
            title="Adults (12+ yr's)"
            optionRange={getRange(1, 150)}
          />
          <Field
            component={TravelerNumber}
            name="child"
            numberFor="child"
            title="Children"
            optionRange={getRange(0, 150)}
          />
        </div>
      </div>
      <div className="form-part p15 pb0 sbcw mb8">
        <Field
          component={HotelStar}
          name="cust_2"
        />
        <Field
          component={FlightOptions}
          name="cust_23"
        />
        <Field
          component={Budget}
          name="budget"
        />
      </div>
      <Field component={IWillBook} name="cust_43" />
      <Field component={CabPrefs} name="cust_24" />
      <Field name="cust_169" component={TourTypes} />
      {
        (localExpCust)
        ? <Field
          name={`cust_${localExpCust.customizationId}`}
          options={localExpCust.options}
          component={Attractions}
        />
        : <div />
      }
      <Field name="info" component={AdditionalPrefs} />
      <div className="row row- p8 sbcw bs4">
        <button disabled={disableSubmitButton}
          onClick={handleSubmit((data) => { onSubmit(data); })}
          type="submit"
          className="btn-filled-pri-large wfull ripple"
        >
          <div className="wave" />
            Submit
        </button>
      </div>
    </form>
  </div>
  );


FormTwoElement.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  localExpCust: PropTypes.object,
  disableSubmitButton: PropTypes.bool.isRequired
};

FormTwoElement.defaultProps = {
  onSubmit: () => {},
  localExpCust: null
};

const onSubmitFail = (errors) => {
  if (Object.keys(errors).length && typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
};
const FormTwo = reduxForm({
  form: 'formTwo-1ae_X',
  validate,
  initialValues: {
    adult: '2'
  },
  onSubmitFail
})(FormTwoElement);

export default FormTwo;
