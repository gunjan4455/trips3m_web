import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from '@emotion/styled';

import { SLIDER1 } from '../constants';
import { required } from 'utils/formValidators';
import { QualityQuotesIcon, LeftRedArrow, Clock, BudgetIcon } from 'helpers/Icon/Icon';
import NpsRadioInput from '../components/NpsRadioInput';
import StarRating from '../components/StarRating';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';

const GButtonDisable = styled.div({
  '& button[disabled]': {
    backgroundColor: '#efefef',
    color: '#b2b2b2'
  }
});

class PostTripF2 extends Component {

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
      section: 'Page 2'
    });
  }

  render() {
    const { invalid, submitting, pristine, setSliderMode } = this.props;

    return (
      <div className='pt48'>
        <div className="flex flexDColumn sbcw mb8">
          <h3 className="m0 f16a fw9 pt24 pl15 pr15">We constantly want to improve. Rate your experience with Travel
            Triangle <sup className="pfc2">*</sup></h3>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><QualityQuotesIcon /></div>
              <p className='flexFull'>Quality of Quotes</p>
            </div>
            <Field
              name="quotes_quality"
              component={StarRating}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><Clock /></div>
              <p className='flexFull'>On Time Response</p>
            </div>
            <Field
              name="quotes_time"
              component={StarRating}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><BudgetIcon /></div>
              <p className='flexFull'>Ease of Payment Process</p>
            </div>
            <Field
              name="payment_process"
              component={StarRating}
            />
          </div>
        </div>
        <div className="flex flexDColumn sbcw">
          <h3 className="m0 f16a fw9 pt24 pl15 pr15">How likely are you to recommend TravelTrinagle to a friend? <sup className="pfc2">*</sup></h3>
          <Field
            name="nps"
            component={NpsRadioInput}
            validate={required}
            defaultValue={8}
          />
          <div className='sbcw bt'>
            <GButtonDisable className="flex wfull z10 pr15 pl15 pt8 pb8">
              <button onClick={() => setSliderMode(SLIDER1)}
                      className="flexFull link-pri fw7 wfull radius2 iblock at_Cancel sbcw sbc2 pfc2 f16 fw7">
                <span className='input-24 absolute l15 '><LeftRedArrow /></span>Back
              </button>
              <div className='flexFull'>
                <button type='submit' disabled={invalid || submitting || pristine}
                        className="flexFull pbc2 wfull radius2 at_submit  f16 fw7 sfcw btn-filled-pri-large">Submit</button>
              </div>
            </GButtonDisable>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTripF2;
