import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from '@emotion/styled';
import { AgentIcon, Hotel, Transfer, RightWhiteArrow, RightGreyArrow } from 'helpers/Icon/Icon';
import { SLIDER2 } from '../constants';
import { required } from 'utils/formValidators';
import StarRating from '../components/StarRating';
import TextArea from '../components/TextArea';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';

const GButtonDisable = styled.div({
  '& button[disabled]': {
    backgroundColor: '#efefef',
    color: '#b2b2b2'
  },
});

class PostTripF1 extends Component {

  static propTypes = {
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    pristine: PropTypes.bool,
    setSliderMode: PropTypes.func,
    trackSegment: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.trackSegment({
      event: ORGANISM_VIEWED,
      section: 'Page 1'
    });
  }

  render() {

    const { setSliderMode, invalid, submitting, pristine } = this.props;

    return (
      <div className='pt48'>
        <div className="flex flexDColumn sbcw mb8">
          <h3 className="m0 f16 fw9 pt24 pl15 pr15">Please rate us and share your experience <sup className='pfc2'>*</sup></h3>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><Hotel /></div>
              <p className='flexFull'>Hotels</p>
            </div>
            <Field
              name="hotel"
              component={StarRating}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><Transfer /></div>
              <p className='flexFull'>Cab & Driver</p>
            </div>
            <Field
              name="cab"
              component={StarRating}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><AgentIcon /></div>
              <p className='flexFull'>Services of Travel Agent</p>
            </div>
            <Field
              name="agent_service"
              component={StarRating}
            />
          </div>
        </div>
        <div className="flex flexDColumn sbcw  mb8">
          <h3 className="m0 f16 fw9 pt24 pl15 pr15">Write your testimonial  <sup className='pfc2'>*</sup></h3>
          <div className='sbcw pt15 pb24 pl15 pr15'>
            <Field
              name="testimonial"
              component={TextArea}
              validate={required}
              placeholder='Write a review about your experience. This will help us improve our service and serve you better.'
            />
          </div>
        </div>
        <div className="flex flexDColumn sbcw">
          <h3 className="m0 f16 fw9 pt24 pl15 pr15">Best memories of your trip <span className='pfc4 fw4'>(optional)</span></h3>
          <div className='sbcw pt15 pb24 pl15 pr15'>
            <Field
              name="trip_memory"
              component={TextArea}
              placeholder='Type your memories/trips here…'
            />
          </div>
          <div className='sbcw bt'>
            <GButtonDisable className='flex wfull z10 pr15 pl15 pt8 pb8 justifyEnd'>
              <button disabled={invalid || submitting || pristine}
                onClick={() => setSliderMode(SLIDER2)}
                className="flex pbc2 radius2 at_submit  f16 fw7 sfcw col-xs-6 alignCenter btn-filled-pri-large"><span className='flexFull'>Next</span>
                <span className='input-24 absolute r15'>{invalid || submitting || pristine ? <RightGreyArrow /> : <RightWhiteArrow />}</span>
              </button>
            </GButtonDisable>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTripF1;
