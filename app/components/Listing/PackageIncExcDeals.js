/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import * as Icons from 'helpers/Icon/Icon';
import { capitalizeFirstLetter } from '../../utils/parsers';

import { InclusionNotification } from 'constants/Packages/InclusionNotification';

import './PackageIncExc.scss';

const GIncDiv = styled.div({
  '&.incl-excl-box': {
    minWidth: 'auto',
    maxWidth: 'none',
  },
  '& p': {
    whiteSpace: 'nowrap',
  }
});

const GInclDiv = styled.div({
  '& .incl-excl-con': {
    height: '24px'
  },
});

const PackageIncExcDeals = ({ inclusions, id, noScroll }) => {
  const inclusionList = inclusions.map(
    (inclusion, index) => {
      const IconComponent = Icons[capitalizeFirstLetter(inclusion.key.replace(/[\s-_]/g, ''))] || Icons.Default;
      const disabledElementClass = inclusion.available ? '' : 'not-included hide';
      const disabledIconClass = inclusion.available ? '' : 'greyscale';
      const inclusionTextHidden = inclusion.text ? '' : 'hide';
      const InclusionNotificationPresent = (inclusion.available && (InclusionNotification.indexOf(inclusion.key) > -1)) ? 'relative' : '';

      return (
        <GIncDiv className={`incl-excl-box mr8 ${inclusionTextHidden} ${disabledElementClass} ${InclusionNotificationPresent}`} key={`${id}_${inclusion.key}_${index}`}>
          <p className="f10 sbcw radius20 pfc3 pl15 pr15 pt3 pb3 inclusionDeals flex alignCenter justifyCenter text-center">{inclusion.text}</p>
        </GIncDiv>
      );
    }
  );

  return (
    <GInclDiv
      className={`row row- incl-excl-con p15 ${noScroll ? 'inc-no-scroll' : ''} `}
    >
      <div className="row row- incl-excl-con-inner incl-excl-con-inner-deals ">
        {inclusionList}
      </div>
    </GInclDiv>
  );
};

PackageIncExcDeals.propTypes = {
  inclusions: PropTypes.array,
  id: PropTypes.string,
  noScroll: PropTypes.bool
};

PackageIncExcDeals.defaultProps = {
  noScroll: false,
  inclusions: [
    {
      key: 'hotel',
      available: true,
      text: 'Upto 3 Stars'
    },
    {
      key: 'flights',
      available: false,
      text: 'Flights'
    }
  ],
  id: 'default_1'
};


export default PackageIncExcDeals;
