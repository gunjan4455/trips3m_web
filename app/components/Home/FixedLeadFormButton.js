import React from 'react';
import PropTypes from 'prop-types';

import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import {
  getLeadFunnelName,
  LEAD_FUNNEL,
  ORGANISM_CLICKED,
  getFormType,
  setCookie,
  FUNNEL_UUID_KEY
} from 'actions/segmentEvents';
import { getRandomString } from 'helpers/FormDataFormatter';

const FixedLeadFormButton = ({ trackSegmentEvent }) => {
  const ctaText = 'Plan My Holiday';
  const trackClickEvent = () => {
    const fuuid = getRandomString(20);
    setCookie(FUNNEL_UUID_KEY, fuuid);
    trackSegmentEvent({ //verify its existence
      funnel_step: 1,
      section: 'Home Page Fixed Button',
      cta: ctaText,
      category: 'Destination: Unknown',
      object: '',
      event: LEAD_FUNNEL,
      label: getLeadFunnelName(1),
      form_variant: getFormType(),
      funnel_uuid: fuuid
    });
    trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'Sticky Bar',
      cta: 'Plan My Holiday'
    });
    return true;
  };
  return (
    <div className="fixed sbcw p8 bs6 b0 l0 r0 z2 wfull">
      <FormOneCTA clickHandler={trackClickEvent} >
        <div className="at_bannerBtn wfull btn-filled-pri-large">{ctaText}</div>
      </FormOneCTA>
    </div>
  );
};

FixedLeadFormButton.propTypes = {
  trackSegmentEvent: PropTypes.func
};

FixedLeadFormButton.defaultProps = {
  trackSegmentEvent: () => {}
};

export default FixedLeadFormButton;
