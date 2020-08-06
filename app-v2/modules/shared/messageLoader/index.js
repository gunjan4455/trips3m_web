import React from 'react';
import PropTypes from 'prop-types';
import styles from  './messageLoader.cm.scss';

const Loader = ({ loaderStyle, color, message }) => (
  <div className={`fixed z16 t0 l0 l0 b0 wfull flex flexDColumn alignCenter justifyCenter ${styles.container}`} style={loaderStyle}>
    <div className="w40 h40 flex alignCenter justifyCenter">
      <p className={`${styles.spinner} ${styles.spinnerAnimate}`} style={{borderColor: color}} />
    </div>
    <p className="f16 mt15">{message}</p>
  </div>
);

Loader.propTypes = {
  loaderStyle: PropTypes.object,
  color: PropTypes.string,
  message: PropTypes.string
};

Loader.defaultProps = {
  loaderStyle: {},
  color: '#20A397',
  message: ''
};


export default Loader;
