import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styled from '@emotion/styled';

import { SLIDER1 } from '../constants';
import SingleSelectField from '../components/SingleSelectField';
import { LeftRedArrow, MobileIcon, BudgetIcon, FAQIcon, DurationIcon } from 'helpers/Icon/Icon';
import TextArea from '../components/TextArea';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';

const GButtonDisable = styled.div({
  '& button[disabled]': {
    backgroundColor: '#efefef',
    color: '#b2b2b2'
  }
});

class Slider2 extends Component {

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
    const { invalid, submitting, setSliderMode } = this.props;

    return (
      <div className='pt48'>
        <div className="flex flexDColumn sbcw mb8">
          <h3 className="m0 f16a fw9 pt24 pl15 pr15">Rate your overall experience with TravelTriangle.com</h3>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><MobileIcon /></div>
              <p className='flexFull'>How easy is it to use TT website/app?</p>
            </div>
            <Field
              name="tt_website_use"
              component={SingleSelectField}
              options={[{ name: 'Easy', value: 3 }, { name: 'Average', value: 2 }, { name: 'Difficult', value: 1 }]}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><BudgetIcon /></div>
              <p className='flexFull'>How was the payment process</p>
            </div>
            <Field
              name="tt_payment_process"
              component={SingleSelectField}
              options={[{ name: 'Easy', value: 3 }, { name: 'Average', value: 2 }, { name: 'Difficult', value: 1 }]}
            />
          </div>
        </div>
        <div className="flex flexDColumn sbcw mb8">
          <h3 className="m0 f16a fw9 pt24 pl15 pr15">Rate your experience with Travel Triangle Advisor</h3>
          <div className='sbcw pt24 pb24 pl15 pr15 bb'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><FAQIcon /></div>
              <p className='flexFull'>Was TT Advisor helpful?</p>
            </div>
            <Field
              name="trip_advisor_helpful"
              component={SingleSelectField}
              options={[{ name: 'Yes', value: 2 }, { name: 'No', value: 1 }]}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><DurationIcon /></div>
              <p className='flexFull'>Was TT Advisor response fast?</p>
            </div>
            <Field
              name="trip_advisor_response"
              component={SingleSelectField}
              options={[{ name: 'Fast', value: 3 }, { name: 'Average', value: 2 }, { name: 'Slow', value: 1 }]}
            />
          </div>
        </div>
        <div className="flex flexDColumn sbcw">
          <h3 className="m0 f16 fw9 pt24 pl15 pr15">Comments</h3>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <Field
              name="comments"
              component={TextArea}
              placeholder='Type your comments here…'
            />
          </div>
          <div className='sbcw bt'>
            <GButtonDisable className="flex wfull z10 pr15 pl15 pt8 pb8">
              <button onClick={() => setSliderMode(SLIDER1)}
                      className="flexFull link-pri fw7 wfull radius2 iblock at_Cancel sbcw sbc2 pfc2 f16 fw7">
                <span className='input-24 absolute l15'><LeftRedArrow /></span>Back
              </button>
              <div className='flexFull'>
                <button type='submit' disabled={invalid || submitting}
                        className="flexFull pbc2 wfull radius2 at_submit  f16 fw7 sfcw btn-filled-pri-large">Submit
                </button>
              </div>
            </GButtonDisable>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider2;
