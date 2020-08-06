import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from 'modules/nlp/Header';
import PreferenceCategory from './components/PreferenceCategory';
import IncludeFlight from './components/IncludeFlight';
import { DaysInternational, DaysNational, HotelStarRating }  from 'constants/nlp';
import { getMaxOfObjectKeys, getMinOfObjectKeys, getHotelCategoryAttributes,
  getFlightAnswerAttributes } from 'helpers/nlp';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import './Form.scss';

const getStarRatingObj = () => {
  const ratingObj = {};
  Object.keys(HotelStarRating).forEach((key) => {
    ratingObj[key] = <div className="HotelRating relative p2 radius4"> {key} Star</div>;
  });
  return ratingObj;
};
const StarRatingObj = getStarRatingObj(true);

class NurturingForm extends PureComponent {

  constructor(props) {
    super(props);
    const preference = props.preference;
    this.state = { formValues: {
      maxHotelRating: preference.maxHotelRating,
      days: preference.days,
      flights: preference.flights
    },
      price: { min: preference.priceMin, max: preference.priceMax },
      isSubmitting: false
    };
    this.daysObject = preference.destinationType === 'domestic' ? DaysNational : DaysInternational;
  }

  updateFormValues = (key, value) => {
    const newValues = {
      ...this.state.formValues,
      [key]: value
    };
    const {  flights, maxHotelRating, days  }  = newValues;
    const price = this.calculateBudget(maxHotelRating, days, flights);
    this.trackSegmentEvents(key);
    this.setState({ formValues: newValues, price });
  };

  trackSegmentEvents = (key) => {
    let data = { event: ORGANISM_CLICKED };
    switch(key) {
      case 'flights': {
        data = { ...data, section: 'Flights', object: 'Toggle'};
        break;
      }
      case 'maxHotelRating' : {
        data = { ...data, section: 'Hotel Category', object: 'Slider'};
        break;
      }
      case 'days' : {
        data = { ...data, section: 'Trip Days', object: 'Slider'};
        break;
      }
      case 'submit': {
        data = { ...data, section: 'Sticky Bar', cta: 'Continue with new preference' };
        break;
      }
      default: return data;
    }
    return this.props.trackSegmentEvent(data);
  };

  calculateBudget = (maxHotelRating, days, flights) => {
    try {
      return this.props.matchingPreferences[maxHotelRating][days][flights];
    }
    catch (e) {
      return {};
    }
  };

  submit = () => {
    const { rtripData, savePreferencesAndRedirect } = this.props;
    const { formValues: { maxHotelRating, flights, days }, price } = this.state;
    this.setState({ isSubmitting: true });
    const rtripParams = {
      ...rtripData.rtrip_params,
      trip_days: days,
      hotel_category_answers_attributes: getHotelCategoryAttributes(maxHotelRating),
      flight_answer_attributes: getFlightAnswerAttributes(flights),
      budget: `${price.min}..${price.max}`,
      budget_type: 'total'
    };
    this.trackSegmentEvents('submit');
    return savePreferencesAndRedirect(rtripParams);
  };

  getDaysDisplayValue = () => {
    const { formValues } = this.state;
    let val=formValues['days'];
    if(val >= getMaxOfObjectKeys(this.daysObject)){
      val = this.daysObject[val];
    }
    return val;
  };

  render() {
    const { price, formValues: { flights, maxHotelRating, days }, isSubmitting,  } = this.state;
    const { preference } = this.props;
    return (
      <div>
        <Header price={price} />
        <PreferenceCategory
          text={'Hotel Category'}
          subText={'Reducing hotel category will affect to a high difference in budget.'}
          keyValue={'maxHotelRating'}
          labels={StarRatingObj}
          updateFormValues={this.updateFormValues}
          value={maxHotelRating}
          min={getMinOfObjectKeys(HotelStarRating)}
          max={getMaxOfObjectKeys(HotelStarRating)}
          valueSuffix={'Star'}
        />
        <PreferenceCategory
          text={'No. of Days'}
          subText={'Travelers usually like to spend 5 - 7 days in this destination.'}
          keyValue={'days'}
          labels={this.daysObject}
          updateFormValues={this.updateFormValues}
          value={days}
          displayValue={this.getDaysDisplayValue()}
          min={getMinOfObjectKeys(this.daysObject)}
          max={getMaxOfObjectKeys(this.daysObject)}
          valueSuffix={'Days'}
        />

        <IncludeFlight
          onChange={this.updateFormValues}
          keyValue={'flights'}
          value={flights}
        />

        <div className="fixed sbcw p8 bs6 b0 l0 r0 z2 wfull">
          <button className="wfull" onClick={this.submit} disabled={isSubmitting}>
            <div className="wfull btn-filled-pri-large">
              <p className="fw9">Continue with new preferences</p>
            </div>
          </button>
        </div>

      </div>
    );
  }
}

NurturingForm.propTypes = {
  preference: PropTypes.object,
  matchingPreferences: PropTypes.object.isRequired,
  savePreferences: PropTypes.func.isRequired,
  rtripData: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  savePreferencesAndRedirect: PropTypes.func.isRequired,
  trackSegmentEvent: PropTypes.func.isRequired
};

NurturingForm.defaultProps = {
  preference: {}
};

export default NurturingForm;
