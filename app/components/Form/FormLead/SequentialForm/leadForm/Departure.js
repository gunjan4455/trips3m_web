import React from 'react';
import PropTypes from 'prop-types';

import {
  DateDecided,
  DateNotDecided,
  CloseIcon,
  CalendarIcon,
} from 'helpers/Icon/Icon';

const Departure = props => (
  <div className="form-body">
    <div className="form-header-secondary">
      <h4 className="f24 fw9 text-center mb15">Departure Date</h4>
      <div className="progress-bar-container flex">
        {[...Array(props.formStage)].map((e, i) => (
          <span className="progress-indicator" key={i} />
        ))}
      </div>
    </div>
    <div className="p15">
      <div className="flex spaceBetween mb24">
        <div className="button-box">
          <div className="icon-48">
            <DateDecided />
          </div>
          <p className="text-center">Dates Decided</p>
        </div>
        <div className="button-box active">
          <div className="icon-48">
            <DateNotDecided />
          </div>
          <p className="text-center">Dates Not Decided</p>
        </div>
      </div>

      <div className="mt24 mb24">
        <label className="f14 fw9 pb8 iblock pfc3">Month of Travel</label>
        <div className="month-container flex flexWrap spaceBetween">
          <div className="month-option active">April</div>
          <div className="month-option">May</div>
          <div className="month-option">June</div>
          <div className="month-option">July</div>
          <div className="month-option">August</div>
          <div className="month-option">After September</div>
          <div className="month-option">Anytime</div>
        </div>
      </div>

      <div className="input-with-icon-box pr0 pl0 relative cross-visible-box">
        <label className="ddate-label pb8 f14 fw9">Departure Date</label>
        <div className="relative">
          <span className="input-icon">
            <CalendarIcon />
          </span>
          <div>
            <button
              id="fixed_date_fnew"
              type="button"
              className="form-date-check input box-input-flex">
              21 May 2019
            </button>
          </div>
          <div className="hide absolute-center-v r10 z2 close-date cursorP">
            <CloseIcon />
          </div>
        </div>
      </div>

      <div className="mt24">
        <label htmlFor="From" className="f14 fw9 pb8 iblock pfc3">
          Number Of Days
        </label>
        <div className="daysCount relative input-with-icon-box input-two-icons input-with-icon-box">
          <button type="button" className="min-date cursorP minus-icon" />
          <input
            type="number"
            name="trip_days"
            placeholder="Days"
            className="input text-center duration"
          />
          <button type="button" className="plus-date cursorP plus-icon" />
        </div>
      </div>
    </div>
  </div>
);

Departure.propTypes = {
  formStage: PropTypes.number,
};

export default Departure;
