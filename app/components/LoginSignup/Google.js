import React from 'react';
import PropTypes from 'prop-types';
import {
  GoogleIcon
} from 'helpers/Icon/Icon';
import './Google.scss';
import { googleAuthUrl } from "helpers/urlHelpers";

const Google = ({ title }) => (
  <div className="row row- form-link-google">
    <a href={googleAuthUrl()} className="fw9 radius2 text-center ripple">
      <div className="wave" />
      <span className="absolute l15 googleIcon"><GoogleIcon /></span>{title} with Google
    </a>
  </div>
);

Google.propTypes = {
  title: PropTypes.string.isRequired
};

export default Google;
