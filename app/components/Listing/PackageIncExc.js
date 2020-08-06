/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import * as Icons from 'helpers/Icon/Icon';
import { capitalizeFirstLetter } from '../../utils/parsers';
import { InclusionNotification } from 'constants/Packages/InclusionNotification';
import YellowDot from './../Common/YellowDot';
import './PackageIncExc.scss';

const getIconText = (inclusion, hotelInfo) => {
  if (inclusion.key === 'hotel' && hotelInfo) {
    return `Upto ${hotelInfo[0]} Stars`;
  }
  return inclusion.text;
};

const PackageIncExc = ({ inclusions, id, noScroll, hotelInfo, isPackageRevamp }) => {
  const inclusionsAval = isPackageRevamp ? inclusions.filter(inclusion =>
    inclusion.available).slice(0,4) : inclusions;

  const inclusionList = inclusionsAval.map(
    (inclusion, index) => {
      const IconComponent = Icons[capitalizeFirstLetter(inclusion.key.replace(/[\s-_]/g, ''))] || Icons.Default;
      const disabledElementClass = inclusion.available ? '' : 'not-included';
      const disabledIconClass = inclusion.available ? '' : 'greyscale';
      const inclusionTextHidden = inclusion.text ? '' : 'hide';
      const InclusionNotificationPresent = (inclusion.available && (InclusionNotification.indexOf(inclusion.key) > -1)) ? 'relative' : '';

      return (
        <div className={`incl-excl-box ${inclusionTextHidden} ${disabledElementClass} ${InclusionNotificationPresent}`} key={`${id}_${inclusion.key}_${index}`}>
          {
            (inclusion.available && (InclusionNotification.indexOf(inclusion.key) > -1)) ?
            <YellowDot id="flightMessage" dotBoxStyle={{ width: '10px', height: '10px', position: 'absolute', top: '6px', right: '3px' }} dotSmallBoxStyle={{ width: '5px', height: '5px' }} spinnerStyle={{ width: '10px', height: '10px', zIndex: '1' }}  hoverData="Flight prices are dynamic and may change at the time of booking" />
            : null
          }
          <span className="incl-excl-img">
            <IconComponent key={`${id}_${inclusion.key}_${index}`} className={disabledIconClass} />
          </span>
          <p className="f10">{getIconText(inclusion, hotelInfo)}</p>
        </div>
      );
    }
  );

  return (
    <div
      className={`row row- incl-excl-con ${noScroll ? 'inc-no-scroll' : ''} `}
    >
      <div className="row row- incl-excl-con-inner">
        {inclusionList}
      </div>
    </div>
  );
};

PackageIncExc.propTypes = {
  inclusions: PropTypes.array.isRequired,
  hotelInfo: PropTypes.array.isRequired,
  id: PropTypes.string,
  noScroll: PropTypes.bool,
  isPackageRevamp: PropTypes.bool
};

PackageIncExc.defaultProps = {
  noScroll: false,
  id: 'default_1',
  isPackageRevamp: false
};


export default PackageIncExc;
