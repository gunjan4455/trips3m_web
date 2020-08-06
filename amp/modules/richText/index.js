import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'amp/utils/parsers';

const RichText = (
  {
    richText,
    rating,
    reviews,
    startingPrice,
    heading,
    isRatingSchemaEnabled
  }
) => {
  if (!reviews) {
    return null;
  }
  return(
    <div className="row row- p8 sbc5">
      <p className="f12 at_package_count">
        <span className={ `pfc4 ${richText ? "" : "block"}`}>
          { richText ? richText : heading }
        </span>
        <span property={ isRatingSchemaEnabled ? "aggregateRating" : null} typeof={isRatingSchemaEnabled ? "AggregateRating" : null}>
          <span>{richText ? ': rated' : 'Rated'} </span>
          <span property={isRatingSchemaEnabled ? "ratingValue" : null}>{rating}</span>/5 (based on <span property={isRatingSchemaEnabled ? "reviewCount" : null}>{reviews}</span> reviews)
          {
            startingPrice ?
              <span> | Packages starting from {parsePrice({price: startingPrice })}</span>
              :
              null
          }
        </span>
      </p>
    </div>
  );
};

RichText.propTypes = {
  richText: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  startingPrice: PropTypes.number,
  heading: PropTypes.string,
  isRatingSchemaEnabled: PropTypes.bool
};

RichText.defaultProps = {
  richText: 'Honeymoon in Kerala',
  rating: 4,
  startingPrice: 9600,
  heading: '',
  isRatingSchemaEnabled: false,
  reviews: null
};

export default RichText;
