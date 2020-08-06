import React from 'react';
import PropTypes from 'prop-types';

import CompareHotelsSection from './CompareHotelsSection';
import CompareTextSection from './CompareTextSection';
import { GCompareCardContentDiv } from '../G';

const CompareHotel = ({ quotes }) => {
  const compareItems = Object.keys(quotes).map((id) => {
    const quote = quotes[id];
    const hotels = quote.hotelsDetail;

    if (hotels.length === 0) {
      return (<CompareTextSection
        key={`hotel_${id}`}
        text={quote.hotelText}
      />);
    }
    return (
      <CompareHotelsSection
        key={`hotel_${id}`}
        hotels={hotels}
      />
    );
  });

  return (
    <GCompareCardContentDiv className="flex at_compareCardContent">
      {compareItems}
    </GCompareCardContentDiv>
  );
};

CompareHotel.propTypes = {
  quotes: PropTypes.object.isRequired,
};

export default CompareHotel;
