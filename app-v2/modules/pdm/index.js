import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Pdm from './Pdm';

export default withRouter(connect(
  state => ({
    pdmsData: state.quote.pdms.pdms,
    selectedPdm: state.quote.pdms.selectedPdmCategory,
  }),
)(Pdm));
