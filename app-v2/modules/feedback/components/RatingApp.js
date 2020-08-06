import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RatingIcon,CloseIcon } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED, ORGANISM_VIEWED } from 'actions/segmentEvents';
import './Thankyou.scss';

class RatingApp extends Component {

  static propTypes = {
    trackSegmentEvent: PropTypes.func
  };

  componentDidMount() {
    this.trackSegment(ORGANISM_VIEWED, 'App Review Popup', '');
  }

  trackSegment = (event, section, cta) => {
    this.props.trackSegmentEvent({
      event,
      section,
      cta
    });
  };

  render() {
    return (
      <div className="flex flexDColumn text-center pt24 pb32 sbcw rating-popup relative">
        <a href="/" className="rating-cross" onClick={() => this.trackSegment(ORGANISM_CLICKED, 'App Review Popup', 'Close')}><CloseIcon /></a>
        <div className="relative star-rating">
          <RatingIcon />
        </div>
        <h3 className="fw9 f24 pt8 pb4 m0">Please rate our App and get INR 100 cash voucher!</h3>
        <p className="m0 f14p pb32 pl15 pr15">Please share the screenshot of the feedback on appfeedback@traveltriangle.com</p>

        <a className="btn-filled-pri rating-button"
           onClick={() => this.trackSegment(ORGANISM_CLICKED, 'App Review Popup', 'Rate Now')}
           href="https://c.singular.net/api/v1/ad?st=900297487404&h=b0c882ade525ff53572f2586d1d9c868fc3a3eaa">Rate
          Now</a>
      </div>
    );
  }
}

export default RatingApp;
