import React from 'react';
import IndianDestination from './IndianDestination';
import InternationalDestination from './InternationalDestination';
import PropTypes from 'prop-types';

const DestinationType = () => (
  <div className="flex">
    <div className="flexFull mr4 flex">
        <IndianDestination />
    </div>
    <div className="flexFull ml4 flex">
        <InternationalDestination />
    </div>
  </div>
);

DestinationType.propTypes = {
};

DestinationType.defaultProps = {
};

export default DestinationType;
