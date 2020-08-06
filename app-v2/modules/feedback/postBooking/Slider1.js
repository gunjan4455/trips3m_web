import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from '@emotion/styled';
import {
  QualityQuotesIcon,
  CallUs,
  MessageIconNew,
  DurationIcon,
  RightWhiteArrow,
  RightGreyArrow
} from 'helpers/Icon/Icon';
import { SLIDER2 } from '../constants';
import { required } from 'utils/formValidators';
import NpsRadioInput from '../components/NpsRadioInput';
import SingleSelectField from '../components/SingleSelectField';
import StarRating from '../components/StarRating';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';

const GButtonDisable = styled.div({
  '& button[disabled]': {
    backgroundColor: '#efefef',
    color: '#b2b2b2'
  }
});

class Slider1 extends Component {

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

    const { invalid, submitting, setSliderMode } = this.props;

    return (
      <div className='pt48'>
        <div className="flex flexDColumn sbcw mb8">
          <h3 className="m0 f16a fw9 pt24 pl15 pr15">How likely are you to recommend TravelTriangle to a friend? <sup className="pfc2">*</sup></h3>
          <Field
            name="nps"
            component={NpsRadioInput}
            validate={required}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        </div>
        <div className="flex flexDColumn sbcw">
          <h3 className="m0 f16 fw9 pt24 pl15 pr15">Rate your experience with our Travel Agents</h3>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><QualityQuotesIcon /></div>
              <p className='flexFull f14p'>How was the quality of quotes provided (itinerary and package details)</p>
            </div>
            <Field
              name="agent_quotes_quality"
              component={StarRating}
              text='help'
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><DurationIcon /></div>
              <p className='flexFull f14p'>Was the agent(s) response fast?</p>
            </div>
            <Field
              name="agent_quotes_time"
              component={SingleSelectField}
              options={[{ name: 'Yes', value: 2 }, { name: 'No', value: 1 }]}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><MessageIconNew /></div>
              <p className='flexFull f14p'>Was the agent(s) interaction pleasant?</p>
            </div>
            <Field
              name="agent_interaction"
              component={SingleSelectField}
              options={[{ name: 'Yes', value: 2 }, { name: 'No', value: 1 }]}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><CallUs /></div>
              <p className='flexFull f14p'>Total number of calls that you received?</p>
            </div>
            <Field
              name="agent_interaction_call"
              component={SingleSelectField}
              options={[{ name: 'Expected More', value: 1 }, { name: 'Just Right', value: 2 }, {
                name: 'High',
                value: 3
              }]}
            />
          </div>
          <div className='sbcw'>
            <GButtonDisable className='flex wfull z10 pr15 pl15 pt8 pb8 justifyEnd'>
              <button disabled={invalid || submitting}
                      onClick={() => setSliderMode(SLIDER2)}
                      className="flex pbc2 radius2  at_submit  f16 fw7 sfcw col-xs-6 alignCenter btn-filled-pri-large"><span
                className='flexFull'>Next</span>
                <span className='input-24 absolute r15'>{invalid || submitting ? <RightGreyArrow /> : <RightWhiteArrow />}</span>
              </button>
            </GButtonDisable>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider1;
