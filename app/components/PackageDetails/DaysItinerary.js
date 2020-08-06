import React from 'react';
import PropTypes from 'prop-types';

import './PackageDetailDayItinerary.scss';

const DaysItinerary = (
  {
    day,
    nextLink,
    prevLink,
    setItineraryDay
  }
) => (
  <div className="col-xs-12 bs4 p0 sbcw p8 fixed b0">
    {prevLink &&
      <button
        onClick={() => setItineraryDay(day - 1)}
        className="fleft text-center btn-pri-large relative">
        <span className="arrowtnc right"/>Day {day - 1}
      </button>
    }
    {nextLink &&
    <button
      onClick={() => setItineraryDay(day + 1)}
      className="fright text-center btn-pri-large relative">
      <span className="arrowtnc left"/>Day {day + 1}
    </button>
    }
  </div>
);

DaysItinerary.propTypes = {
  day: PropTypes.number.isRequired,
  nextLink: PropTypes.string,
  prevLink: PropTypes.string,
  setItineraryDay: PropTypes.func.isRequired
};

DaysItinerary.defaultProps = {
  nextLink: null,
  prevLink: null
};

export default DaysItinerary;
