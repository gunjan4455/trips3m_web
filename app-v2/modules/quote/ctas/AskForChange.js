import React from 'react';
import PropTypes from 'prop-types';

const CTA_TEXT = 'Ask For Change';

const AskForChange = ({ callbackHandler }) => {

  return (<div className="flexFull">
    <button className="wfull btn-filled-pri-large ripple pl5 pr5" onClick={callbackHandler}>
      <span className="wave" />{CTA_TEXT}
    </button>
  </div>);
};

AskForChange.propTypes = {
  callbackHandler: PropTypes.func,
};

AskForChange.defaultProps = {
  callbackHandler: () => {},
};

export default AskForChange;

