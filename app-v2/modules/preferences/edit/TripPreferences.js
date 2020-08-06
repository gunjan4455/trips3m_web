import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import { Hotel } from 'helpers/Icon/Icon';
import HotelSelector from '../components/HotelSelector';
import FlightBooking from '../fields/FlightBooking';
import CabFields from '../fields/CabFields';
import BudgetField from '../fields/BudgetField';
import SingleValuedField from '../fields/SingleValuedField';
import Header from './Header';
import { getOtherPreferencesOptions } from "../helpers";
import {
  CabCustomizationDetail as CabCustomizations,
  FlightCustomizationDetail as FlightCustomization,
  HotelRequiredIds
} from "../constants";

const TripPreferences = ({
                           handleSubmit, submitting, preferences,
                           flightAnswerValue, hotelStarsValues, singleOptionValues
                         }) => {

  const noHotelValue = hotelStarsValues && hotelStarsValues[HotelRequiredIds.NOT_REQUIRED];

  const getOtherPreferences = (otherOptions, limit = 0, offset = 0) => {
    limit = limit || otherOptions.length;
    const otherFields = [];
    for (let i = offset; i < limit; i += 1) {
      otherFields.push(
        <div key={otherOptions[i].id} className="row row- m0 mb8 pb2">
          <SingleValuedField preference={otherOptions[i]} />
        </div>
      );
    }
    return otherFields;
  };

  const { preferencesData } = preferences;
  const hotelPreference = { ...preferencesData.hotelCategoryCustomizations[0] };
  const flightPreference = preferencesData.customizations.find(e => e.id === FlightCustomization.id);
  const flightBudget = preferencesData.flightBudget;
  const hotelBudget = preferencesData.hotelBudgets;
  const cabRequiredPreference = preferencesData.customizations.find(e => e.id === CabCustomizations.required.id);
  const cabQuestionsPreference = preferencesData.customizations.find(e => e.id === CabCustomizations.questions.id);
  const destinationsList = preferences.destinationsList;
  const otherPreferenceOptions = getOtherPreferencesOptions(preferences);

  hotelPreference.options = [...preferencesData.hotelCategoryCustomizations[0].options, {
    id: 96,
    name: 'No Hotel'
  }];

  return (
    <div className='sbcw pb48'>
      <div className='absolute t0 l0 wfull r0'><Header /></div>

      <div className='p15'>
        <form onSubmit={handleSubmit}>
          <div className='mb15'>
            <label htmlFor='destination' className='flex alignCenter m0 f14p fw7 mb8'>
              <span className='mr8 block input-24'><Hotel /></span><span>Hotels</span>
            </label>
            <div className='bb'>
              <Field
                name='hotelCategories'
                component={HotelSelector}
                options={hotelPreference.options}
              />
            </div>
          </div>

          <div className='mb15'>
            <FlightBooking flightOptions={flightPreference} />
          </div>

          <div className='mb15'>
            <BudgetField
              flightAnswerValue={flightAnswerValue}
              hotelStarsValues={hotelStarsValues}
              noHotelValue={noHotelValue}
              flightBudget={flightBudget}
              hotelBudget={hotelBudget}
            />
          </div>

          <div>
            <CabFields
              cabRequiredPreference={cabRequiredPreference}
              cabQuestionsPreference={cabQuestionsPreference}
              destinationsList={destinationsList}
              singleOptionValues={singleOptionValues}
            />
          </div>

          <div>
            <label htmlFor='bookingTime' className='block m0 f14p fw7 sfc6 mb8 hide'>I Will Book</label>
            {getOtherPreferences(otherPreferenceOptions, 1)}
          </div>

          {getOtherPreferences(otherPreferenceOptions, 0, 1)}

          <div className='mb15'>
            <label htmlFor='additional' className='block m0 f14p fw7 sfc6 mb8'>Additional Preferences</label>
            <Field
              name="info"
              component="textarea"
              type="text"
              placeholder="Want to say anything?"
              className="border textarea wfull p15 at_editpreftextbox"
            />
          </div>

          <div className='fixed b0 p8 wfull sbcw bs6 l0 r0 bt z2'>
            <button type='submit' disabled={submitting} className='btn-filled-pri-large wfull  at_confirm'>Confirm</button>
          </div>

        </form>
      </div>
    </div>
  );
};

TripPreferences.propTypes = {
  preferences: PropTypes.object,
  flightAnswerValue: PropTypes.object,
  hotelStarsValues: PropTypes.object,
  singleOptionValues: PropTypes.object,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

TripPreferences.defaultProps = {};

const TripPreferencesForm = reduxForm({
  form: 'TripPreferences' // a unique identifier for this form
})(TripPreferences);


const selector = formValueSelector('TripPreferences'); // <-- same as form name
const TripPreferencesConnectedForm = connect((state) => {
  // can select values individually
  const singleOptionValues = selector(state, 'singleValueOptions');
  const flightAnswerValue = selector(state, 'flightAnswerAttributes');
  const hotelStarsValues = selector(state, 'hotelCategories');

  return {
    singleOptionValues,
    flightAnswerValue,
    hotelStarsValues,
  };
})(TripPreferencesForm);


export default TripPreferencesConnectedForm;
