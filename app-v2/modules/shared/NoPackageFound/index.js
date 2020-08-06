import React from 'react';
import PropTypes from 'prop-types';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import './NoPackageFound.scss';
import {
    Uniquerequirements
} from 'helpers/Icon/Icon';

const NoPackageFound = ({ totalPackages, startingPrice }) => {
  const ctaText = 'BUILD YOUR OWN PACKAGE';

  return (!totalPackages ?
    <div className="row m8">
      <h3 className="row row- fw3">
        <span className={(totalPackages > 0) ? 'inline f10 pfc4 ml3' : 'hide'}>
        </span>
        <span className={(totalPackages <= 0) ? 'f16 block text-center pt48 pb24 fw7 pfc4' : 'hide'}>
          <span className="looking-icon"><Uniquerequirements /></span>
          <p className="m0 f18 pfc3">Your Requirements are unique! </p>
          <p className="m0 f14 pfc1 mb8">Our experts would love to create a package just for you.</p>
          <FormOneCTA>
            <div className="btn-filled-pri"><div className="wave" />{ctaText}</div>
          </FormOneCTA>
        </span>
      </h3>
    </div> : null
  );
};

NoPackageFound.propTypes = {
  totalPackages: PropTypes.number.isRequired,
  startingPrice: PropTypes.number,
};

export default NoPackageFound;
