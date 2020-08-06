import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OverAllRating from 'modules/shared/OverAllRating';
import RatingStar from 'modules/shared/RatingStar';
import PropertyType from 'modules/shared/PropertyType';
import { capitalizeEveryFirstLetter } from 'helpers/parsers';
import TTRecommended from 'modules/shared/TTRecommended';
import HotelLocationMap from './HotelLocationMap';

const HotelDetailHeader = ({
                             address, starRating, hotelName, hotelDisplayName, userRating,
                             budget, luxury, recommended, map, proximity, destination
                          }) => (
    <div className="flex spaceBetween">
      <div className="flexFull mr15">
      <div className="flex mb8 alignCenter flexWrap">
        <div className="mb5">
        <h1 className="m0 f16 fwb mr8 iblock">
          { hotelDisplayName}
          { destination ? `, ${ capitalizeEveryFirstLetter(destination) }` : ''}
        </h1>
        {
          starRating > 0 ? <div className="iblock">
              <RatingStar rating={starRating} isEmptyStarsHidden={true} />
          </div> : null
        }
        </div>
        { (budget || luxury) ? <div className="mb5 pfc3"><PropertyType budget={budget} luxury={luxury} /></div> : null }
      </div>
      <div className="flex alignCenter flexWrap">
        <p className="m0 f12 m0 mr15 flex alignCenter">
          {address.full}
        </p>
        <HotelLocationMap
          hotel={{ name: hotelName, starRating: starRating, address: address, map: map, userRating: userRating }}
          title="Location"
          proximity={proximity} />
      </div>
      </div>
      <div>
        {
          userRating.rating > 0 ?
            <div className="mb15">
              <OverAllRating customStyleRating={{ fontSize: '14px', fontWeight: '400' }} overallRating={{ text: userRating.text, rating: userRating.rating }} />
            </div> : null
        }
        { recommended ? <div className="mr0 fright"><TTRecommended /></div> : null }
      </div>
    </div>
  );

HotelDetailHeader.propTypes = {
  address: PropTypes.object,
  starRating: PropTypes.number,
  hotelName: PropTypes.string,
  hotelDisplayName: PropTypes.string,
  userRating: PropTypes.object,
  budget: PropTypes.bool,
  luxury: PropTypes.bool,
  recommended: PropTypes.bool,
  destination: PropTypes.string,
  map: PropTypes.object,
  proximity: PropTypes.object
};

HotelDetailHeader.defaultProps = {
  address: {},
  starRating: 0,
  userRating: {},
  hotelName: '',
  hotelDisplayName: '',
  budget: false,
  luxury: false,
  recommended: false,
  destination: '',
  map: {},
  proximity: {}
};

export default HotelDetailHeader;

