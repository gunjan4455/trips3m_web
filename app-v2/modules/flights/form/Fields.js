import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Dropdown from './components/Dropdown';
import DatePicker from 'modules/preferences/components/DatePicker';
import Checkbox from './components/Checkbox';
import { Flight, SortIcon } from 'helpers/Icon/Icon';
import TRIP_TYPES from 'modules/flights/TripType';

class FieldsComponent extends Component{

  handleFromLocationClick = () => {
    this.props.trackSegmentEvent('From', 'Offline form');
  };

  handleToLocationClick = () => {
    this.props.trackSegmentEvent('To', 'Offline form');
  };

  handleReturnDateClick = () => {
    this.props.trackSegmentEvent('Date', 'Offline form', 'Return Date');
  };

  handleStartDateClick = () => {
    this.props.trackSegmentEvent('Date', 'Offline form', 'Start Date');
  };

  render() {
    const { fields, destinationList, getFilteredDestinations, tripType } = this.props;
    return (
      <div>
        {fields.map((flight, index) => (
          <div key={index} className="flex flexDColumn">

            <div className="relative">

              <div className="absolute-center-h z4 border radius100 p8 sbcw" style={{borderColor: '#B2B2B2', top: '40px'}}>
                <div className="relative icon-14">
                  <SortIcon />
                </div>
              </div>

              <div className="flexFull relative at_from_loc">
                <div className="absolute t10 mt2 l8">
                  <div className="icon-24">
                    <Flight/>
                  </div>
                </div>
                <Field
                  name={`${flight}.from_loc`}
                  component={Dropdown}
                  options={destinationList}
                  getOptions={getFilteredDestinations}
                  placeholder="From"
                  trackSegment={this.handleFromLocationClick}
                />
              </div>

              <div className="flexFull relative at_to_loc">
                <div className="absolute t10 mt2 l8">
                  <div className="rotate90">
                    <div className="icon-24">
                      <Flight/>
                    </div>
                  </div>
                </div>
                <Field
                  name={`${flight}.to_loc`}
                  component={Dropdown}
                  options={destinationList}
                  getOptions={getFilteredDestinations}
                  placeholder="To"
                  trackSegment={this.handleToLocationClick}
                />
              </div>
            </div>

            <div className={`flex mb3 ${(tripType === TRIP_TYPES.ROUND_TRIP) ? 'inputGroup': ''}`}>
              <div className='flexFull inputBox' onClick={this.handleStartDateClick}>
                <Field
                  name={`${flight}.start_date`}
                  component={DatePicker}
                  type="text"
                  placeholder="Start Date"
                  calendarClassName="no_arrow"
                />
              </div>
              { (tripType === TRIP_TYPES.ROUND_TRIP) ?
                <div className='flexFull inputBox' onClick={this.handleReturnDateClick}>
                  <Field
                    name={`${flight}.return_date`}
                    component={DatePicker}
                    type="text"
                    placeholder="Return Date"
                    calendarClassName="no_arrow"
                  />
                </div> : null }
            </div>

            <div className="flex">

              { index ?  null : <div className="flexFull mb8">
                <Field
                  name="dates_flexible"
                  component={Checkbox}
                  label="Date Not Fixed"
                />
              </div> }

              <div className="flex flexFull alignCenter">
                {index ?
                  <div className="flexFull">
                    <button
                      type="button"
                      title="Remove"
                      className="pfc2 f14 fw7 mb8 pr48 pt8 pb8"
                      onClick={() => fields.remove(index)}
                    >Delete</button>
                  </div> : null
                }
                { ((tripType === TRIP_TYPES.MULTICITY) && index === fields.length-1) ?
                  <div className="flexFull flex justifyEnd">
                    <button type="button" className="sfc1 f14 fw7 mb8 pl48 pt8 pb8" onClick={() => fields.push({})}>
                      + Add City
                    </button>
                  </div> : null}
              </div>
            </div>

          </div>
        ))}
      </div>
    );
  }
}

FieldsComponent.propTypes = {
  destinationList: PropTypes.array.isRequired,
  getFilteredDestinations: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  tripType: PropTypes.string.isRequired,
  trackSegmentEvent: PropTypes.func.isRequired,
};

export default FieldsComponent;
