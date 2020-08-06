import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ style }) => (
  <div className="loader-to-center" style={{ position: 'relative', height: '190px', ...style }}>
    <div className="loader--pulse loader__center">
      <span />
    </div>
  </div>
);

Loader.propTypes = {
  style: PropTypes.object,
};

Loader.defaultProps = {
  style: {},
};

export default Loader;
