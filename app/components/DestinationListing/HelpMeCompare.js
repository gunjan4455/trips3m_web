import React from 'react';
import PropTypes from 'prop-types';
import {
  Confusion
} from 'helpers/Icon/Icon';
import './HelpMeCompare.scss';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';


const HelpMeCompare = (props) => {
  const ctaText = 'Help me compare destinations';
  const trackClickEvent = () => {
    props.trackSegment('lead_funnel', ctaText, 'Bottom Bar');
    return true;
  };
  return (
    <div className='col-xs-12 sbcw pt24 pb15 pl8 pr8 text-center'>
      <h4 className='text-center pb15'><span className='confusion_icon_con block'><Confusion /></span></h4>
      <h2 className='pfc3 f14 fw4 relative destination-text'>Confused! I want to explore destinations</h2>
      <h2 className='text-center f12 text-uppercase pt15 fw4 pb8'>
        <FormOneCTA clickHandler={trackClickEvent} ><div className='btn-pri wfull pl8 pr8'><div className='wave' />{ctaText}</div></FormOneCTA>
      </h2>
    </div>
  );
};

HelpMeCompare.propTypes = {
  trackSegment: PropTypes.func,
};

HelpMeCompare.defaultProps = {
  trackSegment: () => {},
};

export default HelpMeCompare;
