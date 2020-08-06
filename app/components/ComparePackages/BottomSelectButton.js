import React from 'react';
import PropTypes from 'prop-types';
import './ComparePackages.scss';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import {
  getLeadFunnelName,
  LEAD_FUNNEL,
  trackSegment
} from 'actions/segmentEvents';
import { getRandomString, setCookie } from 'helpers/FormDataFormatter';


const ctaTextForm = 'Select & Customize';
const trackLeadClickEventHandler = (pkg, toDestination) => {
  setCookie('package_id_lead_funnel', pkg.id);
  return trackSegment({
    funnel_step: 1,
    section: 'Get Quotes Button',
    cta: ctaTextForm,
    category: `Destination:${toDestination}`,
    object: `Package/${pkg.id}`,
    event: LEAD_FUNNEL,
    label: getLeadFunnelName(1),
    pacakge_id: pkg.id,
    funnel_uuid:  getRandomString(20)
  });
};

/* eslint-disable react/no-array-index-key */
const renderButtons = (packages) =>
  packages.map((pkg, i) => {
    const additionalInfoText = `Traveler has expressed interest in ${pkg.days} Days , ${pkg.nights} nights. For more details, see the <a href='/packages/${pkg.set_url}'>link</a>`;
    const leftButtonClasses = 'col-xs-6 p8 pl0 pr8 borderR';
    const rightButtonClasses = 'col-xs-6 p8 pr0';
    return (
      <div key={i} className={i === 0 ? leftButtonClasses : rightButtonClasses}>
        <FormOneCTA
          rtProps={{
            to_loc: pkg.destination_name,
            trip_days: pkg.days.toString(),
            packageId: pkg.id,
            page: 'Package Compare Page',
            section: 'Package Compare',
            cta: ctaTextForm,
            object: `Package/${pkg.id}`,
            addtl_info: additionalInfoText
          }}
          clickHandler={() =>
            trackLeadClickEventHandler(pkg, pkg.destination_name)}
        >
          <span className='btn-filled-pri col-xs-12 pl5 pr5'>{ctaTextForm}</span>
        </FormOneCTA>
      </div>
    );
  });
/* eslint-enable */

const BottomSelectButton = ({ details }) => (
  <div className='col-xs-12 sbcw pl8 pr8 bs4 fixed b0 btm-selection-hide hide'>
    { renderButtons(details.packages) }
  </div>
);

BottomSelectButton.propTypes = {
  details: PropTypes.object.isRequired,
};

export default BottomSelectButton;
