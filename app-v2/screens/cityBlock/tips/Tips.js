import PropTypes from 'prop-types';
import React from 'react';

import TipsList from '../../../modules/cityBlock/Tips/TipsList';
import { showPopUp } from 'helpers/exitIntent';

const Tips = ({ data, exitIntent }) => {
  return (
    <div className="clearfix sbcw p15 m8 mt0">
      <TipsList data={data}  />
      <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
    </div>
  );
};

Tips.propTypes = {
  data: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired,
};

export default Tips;
