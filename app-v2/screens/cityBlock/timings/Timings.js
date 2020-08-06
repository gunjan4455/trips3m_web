import PropTypes from 'prop-types';
import React from 'react';

import Guide from 'modules/shared/Guide';
import TimingList from '../../../modules/cityBlock/Timing/TimingList';
import { showPopUp } from 'helpers/exitIntent';

const Timings = ({ data, exitIntent }) => {
  return (
    <div className="clearfix">
      {
        data && data.description ?
          <div className="m8 mt0"><Guide guide={data} /></div>
          : null
      }
      {
        data && data.timings && data.timings.length ?
          <div className="sbcw p15 m8 mt0"><TimingList data={data} /></div>
          : null
      }
      <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
    </div>
  );
};

export default Timings;

Timings.propTypes = {
  data: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired
};
