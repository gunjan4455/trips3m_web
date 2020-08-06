import React from 'react';
import { PropTypes } from 'prop-types';

import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import styles from './letsGo.cm.scss';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const FormOneClickDetail = {
  section: 'Banner Section',
  cta: 'Lets go'
};

const LetsGo = ({ trackSegmentEvent }) => {
  const trackClickEvent = () => {
    trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'Expert Callback',
      cta: 'Get_Expert_Callback'
    });
    return true;
  };

  return (
    <div className="sbcw border radius4 p24 at_expertCallback">
      <h2 className="f20 fw9 pfc3 mb8">
        Did not find what you are looking for? No worries!
      </h2>
      <p className="p14 pfc4 mb15">Fill the form and get a callback from our holiday experts</p>
      <div className="clearfix">
        <div className="fright">
          <FormOneCTA clickHandler={trackClickEvent}>
            <span className="f14 fw7 sfc1">Get Expert’s Callback</span>
          </FormOneCTA>
        </div>
      </div>
    </div>);
};

LetsGo.propTypes = {
  trackSegmentEvent: PropTypes.func
};

LetsGo.defaultProps = {
  trackSegmentEvent: () => {
  }
};

export default LetsGo;
