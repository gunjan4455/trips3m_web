import React from 'react';
import PropTypes from 'prop-types';
import {
  FBIcon
} from 'helpers/Icon/Icon';
import './Facebook.scss';
import { facebookAuthUrl } from "helpers/urlHelpers";

const Facebook = ({ title }) => (
  <div className="row row- form-link-facebook">
    <a href={facebookAuthUrl()} className="fw9 radius2 text-center ripple">
      <div className="wave" />
      <span className="absolute l15 facebookIcon"><FBIcon /></span>{title} with Facebook
    </a>
  </div>
);

Facebook.propTypes = {
  title: PropTypes.string.isRequired
};


export default Facebook;
