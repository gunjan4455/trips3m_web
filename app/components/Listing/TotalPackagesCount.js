import React from 'react';
import PropTypes from 'prop-types';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import './TotalPackagesCount.scss';
import { parsePrice } from '../../utils/parsers';
import {
    Uniquerequirements
} from 'helpers/Icon/Icon';
import { getLeadFunnelName, LEAD_FUNNEL, ORGANISM_CLICKED, trackSegment } from 'actions/segmentEvents';
import { getRandomString } from 'helpers/FormDataFormatter';

const TotalPackagesCount = ({ totalPackages, startingPrice }) => {
  const ctaText = 'BUILD YOUR OWN PACKAGE';
  const section = 'No Package Found';
  const trackClickEvent = () => {
    trackSegment({
      funnel_step: 1,
      section,
      cta: ctaText,
      event: LEAD_FUNNEL,
      label: getLeadFunnelName(1),
      funnel_uuid:  getRandomString(20)
    });
  };
  return (
    <div className="row m8">
      <h3 className="row row- fw3"><span className={(totalPackages > 0) ? 'f10 pfc4' : 'hide'}>{totalPackages} packages</span>
        <span className={(totalPackages > 0) ? 'inline f10 pfc4 ml3' : 'hide'}>
      | Starting from {`${parsePrice({ price: startingPrice })}`}
        </span>
        <span className={(totalPackages <= 0) ? 'f16 block text-center pt48 pb24 fw7 pfc4' : 'hide'}>
          <span className="looking-icon"><Uniquerequirements /></span>
          <p className="m0 f18 pfc3">Your Requirements are unique! </p>
          <p className="m0 f14 pfc1 mb8">Our experts would love to create a package just for you.</p>
          <FormOneCTA clickHandler={trackClickEvent}>
            <div className="btn-filled-pri"><div className="wave" />{ctaText}</div>
          </FormOneCTA>
        </span>
      </h3>
    </div>
  );
};

TotalPackagesCount.propTypes = {
  totalPackages: PropTypes.number.isRequired,
  startingPrice: PropTypes.number.isRequired,
};

export default TotalPackagesCount;
