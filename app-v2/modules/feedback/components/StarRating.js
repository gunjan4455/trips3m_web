import React from 'react';
import PropTypes from 'prop-types';

import { GFlexStar } from '../G';
import { OutlineStarIcon, FillStarIcon } from 'helpers/Icon/Icon';

import { trackSegment, ORGANISM_CLICKED } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';

const StarRating = ({ input, options, rating, meta: { touched, error } }) => {

  const handleChange = (option) => {
    input.onChange(option);
    rescue(() => {
      trackSegment({
        event: ORGANISM_CLICKED,
        section: '',
        object:'Star Rating',
        cta: '',
        misc_type_1:'Section clicked',
        misc_id_1: input.name,
        misc_type_2:'Star Rating',
        misc_id_2: option
      });
    });
  };

  return (<div>
    <div className='flex ml24 pl15 mt8 flexWrap'>
      {
        options.map((option, index) =>
          <GFlexStar className='mr15' key={index}>
            <input {...input} type='checkbox' id={`${input.name}_${index}`} className='checkbox-star'
                   value={option} checked={option <= parseInt(input.value)}
                   onChange={() => handleChange(option)} />
            <label className='iblock' htmlFor={`${input.name}_${index}`}>
              {
                (option <= parseInt(input.value))
                  ? <div className='input-24'><FillStarIcon /></div>
                  : <div className='input-24'><OutlineStarIcon /></div>
              }
            </label>

          </GFlexStar>)
      }
    </div>
    {
      touched &&
      (error && <span className="input-error-text">{error}</span>)
    }
  </div>);
};

StarRating.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  rating: PropTypes.number,
  meta: PropTypes.object,
};

StarRating.defaultProps = {
  options: ['1', '2', '3', '4', '5']
};

export default StarRating;
