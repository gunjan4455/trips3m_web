import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { SLIDER1 } from '../constants';
import Slider1 from './Slider1';
import Slider2 from './Slider2';

class PostBookingForm extends Component {

  static propTypes = {
    location: PropTypes.bool,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    trackSegmentEvent: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      sliderMode: SLIDER1
    };
  }

  setSliderMode = (value) => {
    this.setState({ sliderMode: value });
  };

  render() {

    const { invalid, submitting, handleSubmit, trackSegmentEvent } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          {
            this.state.sliderMode === SLIDER1
              ? <Slider1 setSliderMode={this.setSliderMode} invalid={invalid}
                         submitting={submitting} trackSegment={trackSegmentEvent} />
              : <Slider2 setSliderMode={this.setSliderMode} invalid={invalid}
                         submitting={submitting} trackSegment={trackSegmentEvent} />
          }
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'postBookingNpsForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PostBookingForm);
