import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { DefaultIcon } from 'helpers/Icon/Icon';
import { SLIDER2 } from '../constants';
import { required } from 'utils/formValidators';
import NpsRadioInput from '../components/NpsRadioInput';
import SingleSelectField from '../components/SingleSelectField';
import StarRating from '../components/StarRating';

class PostBookingF1 extends Component {

  static propTypes = {
    setSliderMode: PropTypes.func
  };

  render() {

    const { setSliderMode } = this.props;

    return (
      <div>
        <div className="flex flexDColumn sbcw p24 pl15 mb8">
          <h3 className="m0 f16 fw9 mb24">How likely are you to recommend TravelTrinagle to a friend?</h3>
          <Field
            name="nps"
            component={NpsRadioInput}
            validate={required}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            defaultValue={8}
          />
        </div>
        <div className="flex flexDColumn sbcw p24 pl15 mb8">
          <h3 className="m0 f16 fw9 mb24">Rate your experience with our Travel Agents</h3>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><DefaultIcon /></div>
              <p className='flexFull'>How was the quality of quotes provided (itinerary and package details)</p>
            </div>
            <Field
              name="quoteQuality"
              component={StarRating}
              validate={required}
              options={[1, 2, 3, 4, 5]}
              text='help'
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><DefaultIcon /></div>
              <p className='flexFull'>Was the agent(s) response fast?</p>
            </div>
            <Field
              name="agentResponse"
              component={SingleSelectField}
              validate={required}
              options={['Yes', 'No']}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><DefaultIcon /></div>
              <p className='flexFull'>Was the agent(s) interaction pleasant?</p>
            </div>
            <Field
              name="agentInteraction"
              component={SingleSelectField}
              validate={required}
              options={['Yes', 'No']}
            />
          </div>
          <div className='sbcw pt24 pb24 pl15 pr15'>
            <div className='flex alignCenter'>
              <div className='input-24 mr15'><DefaultIcon /></div>
              <p className='flexFull'>Total number of calls that you received?</p>
            </div>
            <Field
              name="callsReceived"
              component={SingleSelectField}
              validate={required}
              options={['Expected More', 'Just Right', 'High']}
            />
          </div>
          <div className='sbcw'>
            <div className="flex wfull z10 pr15 pl15 pt8 pb8">
              <button onClick={() => setSliderMode(SLIDER2)}
                      className="flexFull pbc2 wfull radius2 pb15 pt15 at_submit  f16 fw7 sfcw">Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostBookingF1;
