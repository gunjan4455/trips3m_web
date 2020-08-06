import React from 'react';
import { PropTypes } from 'prop-types';

import { GAppliedDiv, GAppliedSmallDiv } from './G';

const AppliedTags = ({ isSmall, isApplied }) => (
  <div className="flex flexCenterItems">
    {
      (isSmall) ?
        <GAppliedSmallDiv
          style={{ backgroundColor: isApplied ? '#B7DFB9' : '#F5B8B4' }}
          className="iblock fw4 pfc3 radius20">
          {isApplied ? 'Offer applied' : 'Offer not applicable'}
        </GAppliedSmallDiv>
        :
        <GAppliedDiv
          style={{ backgroundColor: isApplied ? '#B7DFB9' : '#F5B8B4' }}
          className="iblock fw4 pfc3 radius20">
          {isApplied ? 'Offer applied' : 'Offer not applicable'}
        </GAppliedDiv>
    }

  </div>
);

AppliedTags.propTypes = {
  isSmall: PropTypes.bool,
  isApplied: PropTypes.bool,
};

AppliedTags.defaultProps = {
  isSmall: true,
  isApplied: true,
};

export default AppliedTags;
