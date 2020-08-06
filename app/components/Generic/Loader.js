import React from 'react';
import PropTypes from 'prop-types';
import  './Loader.scss';

const Loader = ({ loaderStyle, color }) => (
  <div className="wrapper" style={loaderStyle}>
    <span className="spinner spinner--animate" style={{borderColor: color}} />
  </div>
);

Loader.propTypes = {
  loaderStyle: PropTypes.object,
  color: PropTypes.string,
};

Loader.defaultProps = {
  loaderStyle: {},
  color: '#20A397'
};


export default Loader;
