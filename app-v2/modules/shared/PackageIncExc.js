import React from 'react';
import PropTypes from 'prop-types';

import * as Icons from 'helpers/Icon/Icon';
import { GInclusionContainerDiv, GInclusionIconSpan } from './G';
import { capitalizeFirstLetter } from 'helpers/parsers';

const PackageIncExc = ({ inclusions }) => (
  <GInclusionContainerDiv className="clearfix relative">
    {
      inclusions.map((inclusion, index) => {
        const IconComponent = Icons[capitalizeFirstLetter(inclusion.key.replace(/[\s-_]/g, ''))]
          || Icons.DefaultIcon;
        const elementClassName = inclusion.available ? 'packageIncExc' : 'not-included packageIncExc';
        return (
          <span key={`${inclusion.key}_${index}`} className={elementClassName}>
            <GInclusionIconSpan>
              <IconComponent />
            </GInclusionIconSpan>
            <span className="inclusionName">{inclusion.text}</span>
          </span>
        );
      })
    }
  </GInclusionContainerDiv>
);

PackageIncExc.propTypes = {
  inclusions: PropTypes.array.isRequired
};

PackageIncExc.defaultProps = {
  inclusions: []
};

export default PackageIncExc;
