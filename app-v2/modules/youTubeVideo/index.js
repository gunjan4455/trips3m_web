import React from 'react';
import PropTypes from 'prop-types';

class YouTubeVideo extends React.PureComponent {

  componentDidMount(){
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else {
      this.loadVideo();
    }
  }

  loadVideo = () => {
    const { onPlayerReady, onPlayerStateChange, id } = this.props;
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      height: 'auto',
      width: '100%',
      playerVars: { 'autoplay': 1, 'loop': 1, 'playlist': id  },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  render(){
    const { id } = this.props;
    return (
      <div id={`youtube-player-${id}`} />
    );
  };
}

YouTubeVideo.propTypes = {
  id: PropTypes.string.isRequired,
  onPlayerStateChange: PropTypes.func,
  onPlayerReady: PropTypes.func
};

YouTubeVideo.defaultProps = {
  onPlayerStateChange: () => {},
  onPlayerReady: () => {}
};

export default YouTubeVideo;
