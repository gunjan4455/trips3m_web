import React from 'react';
import PropTypes from 'prop-types';
import {
  Help
} from 'helpers/Icon/Icon';
import './HelpMePlan.scss';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';


const HelpMePlan = (props) => {
  const ctaText = 'Help me plan & book';
  const trackClickEvent = () => {
    props.trackSegment('lead_funnel', ctaText, 'Bottom Bar');
    return true;
  };
  return (
    <div className='col-xs-12 sbcw pt24 pb15 pl8 pr8 text-center'>
      <h4 className='text-center'>
        <span className='help_icon_con block'><Help /></span>
      </h4>
      <h2 className='pfc3 f14 fw4 relative mt15 destination-text'>
        My destination is final! I need a budget estimate
        </h2>
      <h2 className='pfc3 f14 fw4 relative mt15 destination-text'>
        I need advice on dates, hotels & Activities
      </h2>
      <h2 className='text-center f12 text-uppercase pt15 fw4 pb8'>
        <FormOneCTA clickHandler={trackClickEvent} ><div className='btn-pri wfull pl8 pr8'><div className='wave' />{ctaText}</div></FormOneCTA>
      </h2>
    </div>
  );
};

HelpMePlan.propTypes = {
  trackSegment: PropTypes.func,
};

HelpMePlan.defaultProps = {
  trackSegment: () => {},
};

export default HelpMePlan;
