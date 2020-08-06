import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import { SLIDER1 } from '../constants';
import Form1 from './Slider1';
import Form2 from './Slider2';
import { trackSegment } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';

class PostTripForm extends Component {

  static propTypes = {
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    pristine: PropTypes.bool,
    formValues: PropTypes.object.isRequired,
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

    const { invalid, submitting, pristine, formValues, handleSubmit, trackSegmentEvent } = this.props;

    const isValidSlide1 = !invalid && !!(formValues.hotel || formValues.cab || formValues.agent_service);
    const isValidSlide2 = !invalid && !!(formValues.quotes_quality || formValues.quotes_time || formValues.payment_process);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          {
            this.state.sliderMode === SLIDER1
              ? <Form1 setSliderMode={this.setSliderMode} invalid={!isValidSlide1}
                       submitting={submitting} pristine={pristine} trackSegment={trackSegmentEvent} />
              : <Form2 setSliderMode={this.setSliderMode} invalid={!isValidSlide2}
                       submitting={submitting} pristine={pristine} trackSegment={trackSegmentEvent} />
          }
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'postTripNpsForm'
})(PostTripForm);
