import PropTypes from 'prop-types';
import React from 'react';

import Overview from 'modules/shared/Overview';
import Heading from 'modules/shared/Heading';
import { showPopUp } from 'helpers/exitIntent';

const EssentialInfo = ({ data, params, location, exitIntent }) => (
  <div className="m8 mt0 sbcw p15">
    <Heading {...data} type="main-heading" />
    <Overview {...data} />
    <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
  </div>
);

export default EssentialInfo;

EssentialInfo.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired,
};
