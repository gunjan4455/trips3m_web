import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { CabCustomizationDetail as CabCustomizations } from '../constants';
import { CabIconFront } from 'helpers/Icon/Icon';
import styled from '@emotion/styled';

const GCabRadioDiv = styled.div({
  '& .cab-radio:checked + label p': {
    color: '#20A397 !important'
  },
});

const CabFields = ({ cabRequiredPreference, cabQuestionsPreference, destinationsList, singleOptionValues }) => {
  const destinationType = destinationsList && destinationsList[0] && destinationsList[0].destinationType;

  if (!cabRequiredPreference) {
    return null;
  }

  const cabYesOption = cabRequiredPreference.options.find(option => option.name === 'Yes');
  let cabSelectedOption = undefined;
  if (singleOptionValues) {
    cabSelectedOption = singleOptionValues[CabCustomizations.required.id];
  }

  const getCabOptions = (prefernce, selectedOptions = undefined, inputClass = 'radio-common') => {
    const options = selectedOptions || prefernce.options;
    return (
      options.map((option) => {
        const elementId = `option-radio-${option.id}`;
        return (
          <div key={option.id}>
            <GCabRadioDiv className='p5'>
            <Field
              name={`singleValueOptions[${prefernce.id}][optionId]`}
              component="input"
              className={inputClass}
              id={elementId}
              type="radio"
              value={option.id.toString()}
            />
            <label
              htmlFor={elementId}
              className="cursorP block pr8 pl8"
            >
              <p className="m0 fw7 text-uppercase">{option.name}</p>
            </label>
            </GCabRadioDiv>
          </div>
        );
      })
    );
  };

  const getCabDomesticOptions = options =>
    options.map((option) => {
      const elementId = `option-radio-${option}`;
      return (
        <div key={option} className="col-xs-6 p5 pt4">
          <Field
            name="driverSpeaks"
            component="input"
            className="radio-common"
            id={elementId}
            type="radio"
            value={option}
          />
          <label
            htmlFor={elementId}
            className="cursorP"
          >
            <p className="m0">{option}</p>
          </label>
        </div>
      );
    });

  const getCabNestedQuestion = () => {
    if (cabSelectedOption && cabSelectedOption.optionId === cabYesOption.id.toString()) {
      if (destinationType === 'International') {
        const options = cabQuestionsPreference.options
          .filter(option => option.id !== CabCustomizations.domesticDestinationOptionId);
        return (
          <div className="clearfix mb8">
            <div className="col-md-12 will-book-comp">
              <p className="f14p fw7 sfc6 m0 iblock pb3">{cabQuestionsPreference.title}</p>
              <div className="clearfix pl4 pt0">
                <div className="row row-8 flex">
                  {getCabOptions(cabQuestionsPreference, options)}
                </div>
              </div>
            </div>
          </div>
        );
      }

      const option = cabQuestionsPreference.options
        .find(opt => opt.id === CabCustomizations.domesticDestinationOptionId);
      const options = ['English', 'Hindi'];
      return (
        <div className="clearfix mb8">
          <div className="col-md-12 will-book-comp">
            <p className="f14p fw7 sfc6 m0 iblock">{option.name}</p>
            <div className="clearfix pl4 pt0">
              <div className="row row-8">
                {getCabDomesticOptions(options)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return '';
  };

  return (
    <div>
      <div className="clearfix mb8">
        <div className="at_editcabs flex alignCenter spaceBetween">
          <div className="flight-included col-md-8 pr0 pl0">
            <div className="fw9 relative m0 flex alignCenter">
              <span className="flight-icon input-24 relative block mr8"><CabIconFront /></span>
              <p className='f14p fw7 sfc6'>{cabRequiredPreference.title}</p>
            </div>
          </div>
          <div className="text-right flex">
            {getCabOptions(cabRequiredPreference, '', 'cab-radio hide')}
          </div>
        </div>
      </div>
      {getCabNestedQuestion()}
    </div>
  );
};

export default CabFields;

CabFields.propTypes = {
  cabRequiredPreference: PropTypes.object.isRequired,
  cabQuestionsPreference: PropTypes.object.isRequired,
  destinationsList: PropTypes.array.isRequired,
  singleOptionValues: PropTypes.object
};
