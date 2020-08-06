import React from 'react';
import PropTypes from 'prop-types';
import './ComparePackages.scss';
import { Back2Icon } from 'helpers/Icon/Icon';


const CompareHeader = ({ name, closeAndRemoveCompareData, submittedForCompare }) => (
  <div className='row row-'>
    <div className='col-xs-12 sbcw pl0 pr0 relative headingDays'>
      <h2 className='f16 text-left fw4 pl48 pt15 pb15 relative pr15'>
        <button
          className='cross-common'
          onClick={() => {
            closeAndRemoveCompareData();
            submittedForCompare(false);
          }}
        >
          <Back2Icon />
        </button>{ name }
      </h2>
    </div>
  </div>
);

CompareHeader.propTypes = {
  name: PropTypes.string.isRequired,
  closeAndRemoveCompareData: PropTypes.func.isRequired,
  submittedForCompare: PropTypes.func.isRequired
};

export default CompareHeader;
