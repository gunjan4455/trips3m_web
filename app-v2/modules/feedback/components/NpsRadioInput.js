import React from 'react';
import PropTypes from 'prop-types';

import { GNpsDiv, GFlexBtn, NpsInputRadio, NpsRadioRating } from '../G';
import { trackSegment, ORGANISM_CLICKED } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';

const NpsRadioInput = ({ input, options, defaultValue, meta: { touched, error } }) => {

  const handleChange = (option) => {
    input.onChange(option);
    rescue(() => {
      trackSegment({
        event: ORGANISM_CLICKED,
        section: '',
        object:'NPS Rating',
        cta: '',
        misc_type_1:'NPS rating',
        misc_id_1: option
      });
    });
  };
  return (<div className='pt24 pr15 pb24 pl15'>
    <GNpsDiv className={`flex flexFull mb8 ${input.value ? 'selected' : ''}`}>
      {options.map((option, index) =>
        <span key={option} className={`${option === input.value ? 'npsActive' : ''}`}>
          <NpsInputRadio {...input} value={option} id={index} type="radio" checked={option === input.value}
                         onChange={() => handleChange(option)} className='radioNps'/>
          <NpsRadioRating htmlFor={index} className="f14 fw4 pfc3 iblock">{option}</NpsRadioRating>
        </span>)
      }
    </GNpsDiv>
    <div className="flexFull flex spaceBetween">
      <span className="f12">Not Likely</span>
      <span className="f12">Most Likely</span>
    </div>
    {
      touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>);
};

NpsRadioInput.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  defaultValue: PropTypes.number,
  meta: PropTypes.object,
};

NpsRadioInput.defaultProps = {
  options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
};

export default NpsRadioInput;
