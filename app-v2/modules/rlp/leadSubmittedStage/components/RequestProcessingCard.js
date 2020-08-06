import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Sensor from 'react-visibility-sensor';

import { TriangleIcon, ProgressIcon, ProcessedIcon, EnvelopeIcon } from 'helpers/Icon/Icon';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';

const GIconDiv = styled.div({
  width: '55px',
  lineHeight: '0px'
});

const GIconBigDiv = styled.div({
  width: '120px',
  lineHeight: '0px'
});

const GContactDiv = styled.div({
  '& a': {
    border: '1px solid #2196f3',
    padding: '10px'
  },
});


class RequestProcessingCard extends Component {
  constructor(props) {
    super(props);
    this.isEventTracked = false;
  }

  onSensorChange = (isVisible) => {
    if (isVisible && !this.isEventTracked) {
      this.isEventTracked = true;
      let section = '';
      if (this.props.message.icon === 'INACTIVE_USER') {
        section = 'Confirmation link section';
      }
      else if (this.props.message.icon === 'INCOMPLETE_INFO') {
        section = 'Edit preferences section';
      }
      else if (this.props.message.icon === 'REACTIVATE_TRIP') {
        section = 'Undo cancel section';
      }
      else if (this.props.message.icon === 'DUPLICATE_TRIP') {
        section = 'Duplicate lead created section';
      }
      this.props.trackSegment(ORGANISM_VIEWED, section, '', '');
    }
  };

  render() {
    const icon = {
      DUPLICATE_TRIP: <TriangleIcon />,
      REACTIVATE_TRIP: <TriangleIcon />,
      INACTIVE_USER: <EnvelopeIcon />,
      INCOMPLETE_INFO: <ProcessedIcon />,
    };
    const { message } = this.props;

    return (
      <Sensor onChange={this.onSensorChange}
              partialVisibility='bottom'
              delayedCall={true}>
        <div className='sbcw mb8 pl15 pr15 pb24 pt24 at_requestProcessingCard'>
          {
            message.icon === 'DEFAULT' ?
              <GIconBigDiv className='mlauto mrauto pb24'><ProgressIcon /></GIconBigDiv> :
              <GIconDiv className='mlauto mrauto pb24'> {icon[message.icon]}</GIconDiv>
          }
          {
            message.header.length ?
              <p className='fw7 sfc6 f16 text-center pb15 at_messageHeading'>{message.header}</p> :
              null
          }
          <p className='m0 f14p text-center sfc6 at_messageTxt'>{message.message}</p>
          {
            message.ctas.length ?
              <GContactDiv className='flex mt64 justifyCenter'>
                {message.ctas}
              </GContactDiv> :
              null
          }
        </div>
      </Sensor>
    );
  }
}

RequestProcessingCard.propTypes = {
  message: PropTypes.object,
  trackSegment: PropTypes.func
};

export default RequestProcessingCard;
