import React from 'react';
import PropTypes from 'prop-types';
import { timeFromNow } from '../../helpers/DateTime';

const TravelerDetails = ({ name, destination, postTime }) => (
  <div className="row row-">
    <p className="fw9 pb5 ellipsis">{name}</p>
    <p className="f12 pfc3 fw7">
      <span className="pfc4">{destination} </span>
      , { postTime && timeFromNow(postTime)}
    </p>
  </div>
);

TravelerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired
};

export default TravelerDetails;
