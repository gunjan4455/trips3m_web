import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm, FieldArray } from 'redux-form';

import SingleSelectOption from './components/SelectSingleOption';
import NumberFormatter from 'modules/preferences/components/NumberFormatter';
import FieldsComponent from './Fields';
import { format } from 'helpers/DateTime';
import TRIP_TYPES from 'modules/flights/TripType';

class FlightsForm extends Component {

  componentDidMount() {
    this.props.getDestinationSearchList();
  }

  handleSubmit = (values) => {
    const { saveFlightDetails, trackSegmentEvent } = this.props;
    const newData = {
      ...values,
      dates_flexible: values.dates_flexible || false,
      flight_details: values.flight_details.map((item) => {
        const newItem = { ...item};
        newItem.start_date = format(item.start_date, 'DD-MM-YYYY');
        newItem.return_date = values.trip_type === TRIP_TYPES.ROUND_TRIP ?
          format(item.return_date, 'DD-MM-YYYY') : '';
        return newItem;
      })
    };

    trackSegmentEvent('Get Quote', 'Offline Form');
    return saveFlightDetails(newData);
  };

  handleTripTypeChange = (a,value) => {
    const { tripTypeOptions, trackSegmentEvent, reset } = this.props;
    const tripType = tripTypeOptions.find(i => i.id === value);
    trackSegmentEvent('Trip Type', 'Offline Form', tripType.name);
    reset();
  };

  render() {
    const { submitting, handleSubmit, tripTypeId, tripTypeOptions,
      destinationList, getFilteredDestinations, trackSegmentEvent } = this.props;

    return (
      <div className="sbcw">
        <div className='absolute wfull t0 l0'>
          <div className="p8 flex bb wfull fixed z5 sbcw">
            <div className="p4 flexFull">
              <p className="f16 flex alignCenter fw7 flexFull ellipsis ml24">Compare & Book Cheapest Flights</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(this.handleSubmit)}>
         <div className="p15 pt24 pb64 flex flexDColumn">
           <div className="flexFull">
             <Field
               name="trip_type"
               component={SingleSelectOption}
               options={tripTypeOptions}
               onChange={this.handleTripTypeChange}
             />
           </div>

          <div className="flexFull">
            <FieldArray
              name="flight_details"
              component={FieldsComponent}
              destinationList={destinationList}
              getFilteredDestinations={getFilteredDestinations}
              tripType={tripTypeId}
              trackSegmentEvent={trackSegmentEvent}
            />
           </div>

           <div className='flexFull mb15'>
             <Field
               name="adult_count"
               component={NumberFormatter}
               type="number"
               placeholder="Adults (12+ yrs)"
             />
           </div>

           <div className='flexFull mb15'>
             <Field
               name="child_count"
               component={NumberFormatter}
               type="number"
               placeholder="Children (2-12 yrs)"
             />
           </div>

           <div className='flexFull mb15'>
             <Field
               name="infant_count"
               component={NumberFormatter}
               type="number"
               placeholder="Infants (0-2 yrs)"
             />
           </div>
         </div>

          <div className="fixed b0 l0 r0 bs4 z10 p8 bt sbcw">
            <button type="submit" disabled={submitting} className="btn-filled-pri-large wfull ripple">
              <div className="wave" />
              Get Quote
            </button>
          </div>

        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.adult_count){
    errors.adult_count = 'Please enter number of adults';
  }
  const flightDetailErrors = [];
  values.flight_details && values.flight_details.forEach((flight, index) =>{
    const flightErrors = {};
    if (!flight.from_loc) {
      flightErrors.from_loc = 'Please enter from city';
    }
    if (!flight.to_loc) {
      flightErrors.to_loc = 'Please enter to city';
    }
    if (!flight.start_date) {
      flightErrors.start_date = 'Please enter start date';
    }
    if (values.trip_type === 'round_trip' && !flight.return_date) {
      flightErrors.return_date = 'Please enter return date';
    }
    if (values.trip_type === 'round_trip' && flight.return_date && flight.return_date
      && (flight.start_date > flight.return_date)
    ) {
      flightErrors.return_date = 'Return date should be after start date';
    }
    if (flight.to_loc && (flight.from_loc === flight.to_loc)) {
      flightErrors.to_loc = 'From City and To City cannot be same';
    }
    flightDetailErrors[index] = flightErrors;
  });
  if (flightDetailErrors.length) {
    errors.flight_details = flightDetailErrors;
  }
  return errors;
};

FlightsForm.propTypes = {
  tripTypeOptions: PropTypes.array,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  tripTypeId: PropTypes.string.isRequired,
  getDestinationSearchList: PropTypes.func.isRequired,
  destinationList: PropTypes.array.isRequired,
  getFilteredDestinations: PropTypes.func.isRequired,
  saveFlightDetails: PropTypes.func.isRequired,
  trackSegmentEvent: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

FlightsForm.defaultProps = {
  tripTypeOptions: []
};

const selector = formValueSelector('flightsForm');

const FlightsConnectedForm = connect((state) => {
  const tripTypeId = selector(state, 'trip_type');
  return { tripTypeId };
})(FlightsForm);

export default reduxForm({
  form: 'flightsForm',
  validate,
  initialValues: {
    trip_type: TRIP_TYPES.ROUND_TRIP,
    flight_details: [{}]
  },
  enableReinitialize: true
})(FlightsConnectedForm);
