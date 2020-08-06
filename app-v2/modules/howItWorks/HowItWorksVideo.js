import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import YouTubeVideo from 'modules/youTubeVideo';
import { ORGANISM_CLICKED } from 'app/actions/segmentEvents';

const GVideoWrapperDiv = styled.div({
  position: 'relative',
  paddingBottom: '56.25%', /* 16:9 */
  height: '0',
  ' iframe' : {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  }
});

class HowItWorksVideo extends Component {

  onPlayerReady = (event) => {
    event.target.mute();
  };

  onPlayerStateChange = (event) => {
    const time = event.target.getCurrentTime();
    if (event.data === YT.PlayerState.PLAYING){
      this.trackSegmentEvent(event, 'PLAY', time);
    }
    else if (event.data === YT.PlayerState.PAUSED){
      this.trackSegmentEvent(event, 'PAUSE', time);
    }
  };

  trackSegmentEvent = (event, cta, time) => {
    this.props.trackSegmentEvent({
      event: ORGANISM_CLICKED,
      section: 'How it works video',
      object: '',
      cta,
      miscId1: cta,
      miscType1: 'New State of the video',
      miscId2: time,
      miscType2: 'Time at which event occured'
    });
  };

  render = () => {
    return (
      <GVideoWrapperDiv className="flex flexFull" style={{ maxWidth: '100%', minWidth: '100%' }}>
        <YouTubeVideo
          id="Fxs0oYJxSOc"
          onPlayerStateChange={this.onPlayerStateChange}
          onPlayerReady={this.onPlayerReady}
        />
      </GVideoWrapperDiv>
    );
  };
}

HowItWorksVideo.propTypes = {
  trackSegmentEvent: PropTypes.func
};

HowItWorksVideo.defaultProps = {
  trackSegmentEvent: () => {}
};

export default HowItWorksVideo;
