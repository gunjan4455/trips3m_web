import React from 'react';
import { Link } from 'react-router-dom';
import './InternalServerError.scss';

import {
  IllusDestination
} from 'helpers/Icon/Icon';

const InternalServerError = () => (
  <div className="row row-">
    <div className="text-center sbcw">
      <div className="icon-destination">
        <IllusDestination />
      </div>
      <h1 className="pfc1 fwb f144 pb8">500</h1>
      <h2 className="f24 fw9">Internal server error</h2>
      <p className="fw9 p15">There is a problem with the resource you are looking for, and it cannot be displayed.</p>
      <div className="row row- pl8 pr8 pb48">
        <Link to="/" className="btn-filled-pri fw9 wfull ripple"><div className="wave" />Go To Homepage</Link>
      </div>
    </div>
  </div>
);

export default InternalServerError;
