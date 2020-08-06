import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Sensor from 'react-visibility-sensor';

import { PartPay, IllusTraveler, IllusAgent } from 'helpers/Icon/Icon';
import { ORGANISM_VIEWED, ORGANISM_CLICKED } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import HowItWorksVideo from 'modules/howItWorks/HowItWorksVideo';

const GIconDiv = styled.div({
  width: '65px',
  height: '57px',
  '& svg': {
    height: '57px',
  }
});

const GButton = styled.button({
  border: '1px solid #2196F3',
  padding: '10px'
});

class WhyTT extends Component {
  constructor(props) {
    super(props);
    this.isEventTracked = false;
  }

  trackSegmentEvent = (event, section, cta) => {
    rescue(() => {
      this.props.trackSegment({
        event,
        section,
        object: '',
        cta
      });
    });
  };

  onSensorChange = (isVisible) => {
    if (isVisible && !this.isEventTracked) {
      this.isEventTracked = true;
      this.trackSegmentEvent(ORGANISM_VIEWED, 'Why travel with TravelTriangle');
    }
  };

  render() {
    return (
      <Sensor onChange={this.onSensorChange}
              partialVisibility='bottom'
              delayedCall={true}>
        <div className='sbcw p15 at_whyTT_section'>
          <h6 className='f16 pfc5 m0 text-center fw9'>Why Travel with TravelTriangle</h6>
          <div className='mt15 mb15 text-center flex spaceBetween'>
            <div className='flexFull'>
              <GIconDiv className='mb8 mlauto mrauto'><PartPay /></GIconDiv>
              <p className='f12'><span className='block'>Easy EMI</span> Option Available</p>
            </div>
            <div className='flexFull'>
              <GIconDiv className='mb8 mlauto mrauto'><IllusTraveler /></GIconDiv>
              <p className='f12'><span className='block'>22Lacs+</span> Happy Travellers</p>
            </div>
            <div className='flexFull'>
              <GIconDiv className='mb8 mlauto mrauto'><IllusAgent /></GIconDiv>
              <p className='f12'><span className='block'>650+</span> Verified Agents</p>
            </div>
          </div>
          <HowItWorksVideo trackSegmentEvent={this.props.trackSegment} />
        </div>
      </Sensor>
    );
  }
}

WhyTT.propTypes = {
  trackSegment: PropTypes.func
};

export default WhyTT;

