import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { HotelEmptyState } from 'helpers/Icon/Icon';
import Img from 'components/Common/Img';
import OverAllRating from 'modules/shared/OverAllRating';
import RatingStar from 'modules/shared/RatingStar';
import PropertyType from 'modules/shared/PropertyType';
import TTRecommended from 'modules/shared/TTRecommended';
import PriceVal from '../PriceVal';
import ToolTip from 'modules/shared/ToolTip';

const GCardImageDiv = styled.div({
  height: '200px',
});

const GCardDataDiv = styled.div({
  borderTop: '0 none'
});

const GCardImgDataDiv = styled.div({
  height: '40%',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 65%,rgba(0,0,0,0.65) 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#a6000000",GradientType=0 )',
});

const GHotelPlaceholderDiv = styled.div({
  '& svg': {
    width: '105px',
    height: '69px',
  }
});

const Card = ({ hotel, month }) => {
  const {
    images, topRatedLuxury, topRatedBudget, userRating, displayName, ttRecomended, starRating, address,
    proximity, priceRange
  } = hotel;
  return (
    <div className="clearfix">
      <a href={`${hotel.baseUrl}?travelMonth=${month}`} target="_blank">
        <GCardImageDiv className="wfull overflowh relative sbc5">
          {
            images.length ?
              <Img
                width={320} height={200}
                src={images[0].url}
                ikSrc={images[0].imagekitUrl}
                alt={images[0].altText} /> :
              <GHotelPlaceholderDiv
                className="relative sbc5 wfull hfull flex alignCenter justifyCenter">
                <HotelEmptyState />
              </GHotelPlaceholderDiv>
          }
          <GCardImgDataDiv className="wfull absolute l0 b0 p8">
            <div className="flex spaceBetween alignCenter absolute b0 p8 r0 l0">
              <PropertyType budget={topRatedBudget} luxury={topRatedLuxury} />
              {
                userRating ?
                  <OverAllRating extraStyle={{ color: '#fff' }} overallRating={userRating} /> : null
              }
            </div>
          </GCardImgDataDiv>
        </GCardImageDiv>
        <GCardDataDiv className="p15 pb0 pl0 pr0">
          <div className="flex spaceBetween">
            <h6 className="f16 fwb m0 flexFull dynamicTextInherit pfc3">{displayName}</h6>
            {ttRecomended ? <span className="iblock tooltipCommon relative z2">
                <ToolTip
                  toolTipText='Recommended by TravelTriangle'
                  boxStyle={{ textAlign: 'center' }}
                />
            <TTRecommended />
          </span> : null}
          </div>
          <RatingStar rating={starRating} />
          <div className="flex spaceBetween mt4">
            <div className="mr5">
              {address ? <p className="m0 dynamicTextInherit pfc3 mb4 f12">{address.brief}</p> : null}
              {
                proximity ?
                  <p className="f12 dynamicTextInherit pfc4 m0">
                    {`${proximity.distance} ${proximity.unit} from ${proximity.from} `}
                  </p> : null
              }
            </div>
            <div className="text-right">
              <PriceVal priceTitle={'Price Range per Night'} isSmall={true} priceRange={priceRange} />
            </div>
          </div>
        </GCardDataDiv>
      </a>
    </div>
  );
};

Card.propTypes = {
  hotel: PropTypes.object.isRequired,
  month: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default Card;

