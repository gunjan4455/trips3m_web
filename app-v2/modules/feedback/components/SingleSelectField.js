import React from 'react';
import PropTypes from 'prop-types';
import { GFlexBtn } from '../G';
import { trackSegment, ORGANISM_CLICKED } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';

const SingleSelectField = ({ input, options, defaultValue, meta: { touched, error } }) => {

  const handleChange = (value,name) => {
    input.onChange(value);
    rescue(() => {
      trackSegment({
        event: ORGANISM_CLICKED,
        section: '',
        object:'option',
        cta: '',
        misc_type_1:'Question',
        misc_id_1: input.name,
        misc_type_2:'Answer',
        misc_id_2: name
      });
    });
  };
  return (
    <div>
      <div className='flex ml24 pl15 flexWrap'>
        {
          options.map((option, index) =>
            <GFlexBtn className='pt8' key={index}>
              <input {...input} type='radio' id={`${input.name}_${index}`} className='radio-common'
                     value={option.value} checked={option.value === input.value}
                     onChange={() => handleChange(option.value, option.name)} />
              <label htmlFor={`${input.name}_${index}`}>{option.name}</label>
            </GFlexBtn>)
        }
      </div>
      {
        touched &&
        (error && <span className="input-error-text">{error}</span>)
      }
    </div>);
};

SingleSelectField.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  defaultValue: PropTypes.number,
  meta: PropTypes.object,
  text: PropTypes.string
};

SingleSelectField.defaultProps = {};

export default SingleSelectField;
