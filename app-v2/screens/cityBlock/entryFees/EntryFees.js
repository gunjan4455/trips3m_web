import PropTypes from 'prop-types';
import React from 'react';

import EntryFeesDays from '../../../modules/cityBlock/EntryFees/EntryFeesDays';
import { showPopUp } from 'helpers/exitIntent';

const EntryFees = ({ data, exitIntent }) => {
  return (
    <div className="container">
      <EntryFeesDays data={data} />
      <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />
    </div>
  );
};

export default EntryFees;

EntryFees.propTypes = {
  data: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired,
};
