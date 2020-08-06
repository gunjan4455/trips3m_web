import React from 'react';
import PropTypes from 'prop-types';

import './DestinationBanner.scss';
import * as DateUtils from '../../helpers/DateTime';
import Img from 'components/Common/Img';

const MonthRange = ({ bestTimeToVisit }) => {
  if (!bestTimeToVisit) {
    return null;
  }
  const month = bestTimeToVisit.split('..');
  if (month.length !== 2) {
    return null;
  }
  const startMonth = DateUtils.numberToMonth(parseInt(month[0], 10));
  const endMonth = DateUtils.numberToMonth(parseInt(month[1], 10));
  return (
    <p className='f14 sfcw uppercase'>{startMonth}-{endMonth}</p>
  );
};
MonthRange.propTypes = {
  bestTimeToVisit: PropTypes.string,
};
MonthRange.defaultProps = {
  bestTimeToVisit: undefined,
};

const DestinationBanner = ({ imageUrl, imagekitUrl, bestTimeToVisit }) => (
  <div className='row row- relative destination-banner' >
    <Img src={imageUrl} ikSrc={imagekitUrl} alt="tt" />
    <div className='absolute t10 l10 z2'>
      <p className='f12 sfcw'>Best time:</p>
      <MonthRange bestTimeToVisit={bestTimeToVisit} />
    </div>
  </div>
);

DestinationBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  bestTimeToVisit: PropTypes.string.isRequired
};

export default DestinationBanner;
