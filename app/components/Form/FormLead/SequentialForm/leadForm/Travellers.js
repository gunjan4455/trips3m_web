import React from 'react';
import PropTypes from 'prop-types';

import { Travelers } from 'helpers/Icon/Icon';

const Travellers = props => (
  <div className="form-body pt15">
    <h4 className="f24 fw9 text-center mb15">Travelers</h4>
    <div className="progress-bar-container flex">
      {[...Array(props.formStage)].map((e, i) => (
        <span className="progress-indicator" key={i} />
      ))}
    </div>

    <div className="traveller-icon-container">
      <Travelers />
    </div>
    <div className="mt24 p15 mb15">
      <label htmlFor="From" className="f14 fw9 pb8 iblock pfc3">
        Adults (12+ yrs)
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

    <div className="mt15 p15 mb15">
      <label htmlFor="From" className="f14 fw9 pb8 iblock pfc3">
        Children (12+ yrs)
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

    <div className="mt15 p15 mb15">
      <label htmlFor="From" className="f14 fw9 pb8 iblock pfc3">
        Infants (12+ yrs)
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
);

Travellers.propTypes = {
  formStage: PropTypes.number,
};

export default Travellers;
