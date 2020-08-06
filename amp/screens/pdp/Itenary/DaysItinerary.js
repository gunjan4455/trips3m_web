import React from 'react';
import PropTypes from 'prop-types';

import Action from 'amp/helpers/Action';

const DaysItinerary = (
  {
    day,
    nextLink,
    prevLink,
    setItineraryDay,
    index
  }
) => (
  <div className="col-xs-12 bs4 p0 sbcw p8 fixed b0">
    {prevLink &&
    <Action events={{ tap: [`AMP.setState({
    dayItenary${index - 1} : !dayItenary${index - 1},
    dayItenary${index} : !dayItenary${index}})`] }}
    >
      {(props) => (
        <button
          className="fleft text-center btn-pri-large relative"
          {...props}>
          <span className="arrowtnc right" />Day {day - 1}
        </button>)
      }
    </Action>
    }
    {nextLink &&
    <Action events={{ tap: [`AMP.setState({
    dayItenary${index + 1} : !dayItenary${index + 1},
    dayItenary${index} : !dayItenary${index}})`] }}
    >
      {(props) => (
        <button
          className="fright text-center btn-pri-large relative"
          {...props}>
          <span className="arrowtnc left" />Day {day + 1}
        </button>)}
    </Action>
    }
  </div>
);

DaysItinerary.propTypes = {
  day: PropTypes.number.isRequired,
  nextLink: PropTypes.string,
  prevLink: PropTypes.string,
  index: PropTypes.number,
  setItineraryDay: PropTypes.func.isRequired
};

DaysItinerary.defaultProps = {
  nextLink: null,
  prevLink: null
};

export default DaysItinerary;
