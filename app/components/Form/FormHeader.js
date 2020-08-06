import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  Back2Icon
} from 'helpers/Icon/Icon';



const FormHeader = ({ name, history }) => (
  <div className="row row-">
    <div className="col-xs-12 sbcw pl0 pr0">
      <h2 className="f16 text-left fw4 pl48 pt15 pb15 relative pr15">
        <button onClick={history.goBack} className="cross-common">
          <Back2Icon />
        </button>{ name }
      </h2>
    </div>
  </div>
);

FormHeader.propTypes = {
  name: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

FormHeader.defaultProps = {
  goBack: () => {}
};

export default withRouter(FormHeader);
