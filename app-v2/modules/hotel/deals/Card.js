import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HotelEmptyState } from 'helpers/Icon/Icon';
import Img from 'components/Common/Img';
import OverAllRating from 'modules/shared/OverAllRating';
import RatingStar from 'modules/shared/RatingStar';
import PropertyType from 'modules/shared/PropertyType';
import TTRecommended from 'modules/shared/TTRecommended';
import ToolTip from 'modules/shared/ToolTip';
import Price from '../components/Price';

import styles from './card.cm.scss';

const Card = ({ deal, showBookNow }) => {
  const {
    images, topRatedLuxury, topRatedBudget, userRating, displayName, ttRecomended, starRating, address,
    proximity, basePrice, url
  } = deal;

  const renderChild = () => (
    <span className="btn-filled-pri wfull pt15 pb15">Book Now</span>
  );

  return (
    <div className="clearfix">
      <a href={url}>
        <div className={`wfull overflowh relative sbc5 ${styles.cardImg}`}>
          {
            basePrice && basePrice.discountPercentage
              ? <div className="absolute l0 t8">
                <div className={`relative pl15 pt8 pb8 f10 fw7 sfcw pbc5 text-uppercase ${styles.dealLabel}`}>
                  <span>Deal of the Day</span>
                </div>
                <div className={`flex pfc5 fw9 sbcw p8 pl15 pr15 radius4 ml15 ${styles.dealOff}`}>
                  <span className={styles.dealOff_val}>{basePrice.discountPercentage && Math.round(basePrice.discountPercentage)}</span>
                  <div className="flex flexDColumn">
                    <span className="f14">%</span>
                    <span className="f12">OFF</span>
                  </div>
                </div>
              </div>
              : null
          }
          {
            images.length ?
              <Img
                width={320} height={200}
                src={images[0].url.imagekitUrl}
                ikSrc={images[0].url.imagekitUrl}
                alt={images[0].altText} /> :
              <div className={`relative sbc5 wfull hfull flex alignCenter justifyCenter ${styles.hotelPlaceholder}`}>
                <HotelEmptyState />
              </div>
          }
          <div className={`wfull absolute l0 b0 p15 flex ${styles.imgDetail}`}>
            <div className="flex spaceBetween alignCenter flexFull alignSelfFlexEnd sfcw">
              <PropertyType budget={topRatedBudget} luxury={topRatedLuxury} />
              {
                userRating ?
                  <OverAllRating extraStyle={{ color: '#fff' }} overallRating={userRating} /> : null
              }
            </div>
          </div>
        </div>
        <div className={`p15 pb0 pl0 pr0 relative ${showBookNow ? styles.cardData : styles.cardData_noCTA}`}>
          <div className="flex spaceBetween pr32 relative">
            <h6 className={`f16 fwb m0 mb2 flexFull dynamicTextInherit pfc3 ${styles.cardTitle}`}>{displayName}</h6>
            {ttRecomended ? <div className="absolute r0 t0">
                <span className="iblock tooltipCommon relative z2">
                  <ToolTip
                    toolTipText='Recommended by TravelTriangle'
                    boxStyle={{ left: 'auto', right: '5px', transform: 'none' }}
                  />
                  <TTRecommended />
                </span>
            </div> : null}
          </div>
          <div className={styles.ratingSection}>
            <RatingStar rating={starRating} />
          </div>

          {address ? <p className="m0 dynamicTextInherit pfc3 mb4 f12">{address.brief}</p> : null}

          {basePrice ? <div className="mt15">
            <Price price={basePrice} />
            <p className="f12 pfc4">{basePrice.unit || ''}</p>
          </div> : null}

          {
            showBookNow ?
              __SERVER__ ?
                <a className="absolute b0 wfull" href={url}>
                  { renderChild() }
                </a> :
                <Link className="absolute b0 wfull" to={url}>
                  { renderChild() }
                </Link>
              : null
          }
        </div>
      </a>
    </div>
  );
};
Card.propTypes = {
  deal: PropTypes.object.isRequired,
  showBookNow: PropTypes.bool
};
export default Card;
