import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { parsePrice } from '../../../app/helpers/parsers';
import { currencyToSymbol, numberWithCommas } from '../../../app/helpers/parsers';
import CitiesList from '../shared/Cities';
import PackageIncExc from '../shared/PackageIncExc';
import FormOneCTA from 'modules/shared/FormOneCTA';
import PackageDaysDiscount from "components/Listing/PackageDaysDiscount";
import Img from 'components/Common/Img';

const TopCard = styled.div({
  width: '100%',
  '& a': {
    '&:hover': {
      color: '#3E3E3E'
    }
  }
});

const PackageIncExcBox = styled.div({
  height: '42px',
  overflow: 'hidden'
});

const ImgContainer = styled.div({
  width: '100%',
  height: '140px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:after': {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '45%',
    background: 'linear-gradient(to bottom,  rgba(0,0,0,0) 2%,rgba(0,0,0,0.4) 60%,rgba(0,0,0,0.4) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#a6000000",GradientType=0 )',
    content: '\' \'',
  }
});

const CardDetails = styled.div({
  borderTop: '0 none',
  '& *': {
    boxSizing: 'border-box'
  }
});

const Price = styled.p({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  '&:after': {
    width: '10px',
    height: '2px',
    background: '#69c276',
    position: 'absolute',
    bottom: '0',
    left: '0',
    content: ''
  }
});

const PackageCard = ({
                       imageUrl, imagekitUrl, imageText, destinations, days, nights, price, discountedPrice,
                       currency, cities, inclusions, packageUrl, name, id, isSlider, travelmonth
                    }) => {
  destinations =
    destinations instanceof Array && destinations.length > 0
      ? destinations[0].name
      : destinations;
  const symbolicCurrency = currencyToSymbol(currency);

  return (
    <TopCard className="clearfix sbcw">
      <Link
        href={travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl}
        to={travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl}
        className="pfc3"
      >
        <ImgContainer className="clearfix sbc5 relative">
          <Img width={320} height={140} src={imageUrl} ikSrc={imagekitUrl} alt={imageText} />
          <p className="absolute b10 l10 sfcw fw9 m0 f14 z1 r10">{name}</p>
        </ImgContainer>
      </Link>
      <CardDetails className={isSlider ? "pt15" : "p15"}>
        <div className="flex">
          <div className="flexFull">
            <p className="f12 pfc4 m0 fw3">Starting from:</p>
            <Price className="sfc3 m0 fw7 f18 pb8">
              {discountedPrice ? (
                <span>
                  {`${symbolicCurrency} ${numberWithCommas(
                    Math.round(discountedPrice)
                  )}/-`}
                  {discountedPrice !== price ? (
                    <span className="f12 pfc3 tdl ml8 at_oldprice">
                      {`${symbolicCurrency} ${numberWithCommas(
                        Math.round(price)
                      )}/-`}
                    </span>
                  ) : null}
                  <span className="f12 fw3 pfc3 block">per person</span>
                </span>
              ) : (
                <span>
                  {parsePrice({ price })}
                  <span className="ml8 f12 fw3 pfc3">per person</span>
                </span>
              )}
            </Price>
          </div>
          <div>
            <PackageDaysDiscount
              days={days}
              nights={nights}
              price={price}
              discount={price - discountedPrice}
            />
          </div>
        </div>
        <CitiesList cities={cities} isSlider={isSlider} />
        <PackageIncExcBox className="clearfix mt4 mb4">
          <PackageIncExc
            inclusions={
              inclusions.length > 5 ? inclusions.slice(0, 5) : inclusions
            }
          />
        </PackageIncExcBox>
      </CardDetails>

      <div className={isSlider ? "clearfix p0 pt15" : "clearfix pt0 p15"}>
        <div className="col-xs-6 pl0 pr4">
          <Link
            href={travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl}
            to={travelmonth ? `${packageUrl}&travelmonth=${travelmonth}` : packageUrl}
            className="btn-pri pl5 pr5 wfull ripple"
          >
            View Details
          </Link>
        </div>
        <div className="col-xs-6 pl4 pr0">
          {__SERVER__ ? (
            <div className="btn-filled-pri wfull">Customize</div>
          ) : (
            <FormOneCTA
              rtProps={{
                to_loc: destinations,
                trip_days: days.toString(),
                packageId: id,
                cta: "Customize & Get Quotes"
              }}
            >
              <div className="btn-filled-pri wfull">Customize</div>
            </FormOneCTA>
          )}
        </div>
      </div>
    </TopCard>
  );
};

PackageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  imageText: PropTypes.string,
  destinations: PropTypes.string,
  packageUrl: PropTypes.string,
  days: PropTypes.number,
  nights: PropTypes.number,
  price: PropTypes.number,
  discountedPrice: PropTypes.number,
  currency: PropTypes.string,
  cities: PropTypes.array,
  inclusions: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  isSlider: PropTypes.bool,
  travelmonth: PropTypes.number.isRequired
};

PackageCard.defaultProps = {
  imageText: '',
  destinations: '',
  days: 0,
  nights: 0,
  price: 0,
  discountedPrice: 0,
  currency: '',
  cities: [],
  inclusions: [],
  name: '',
  isSlider: false,
  showCTA: true,
  isSearchResult: false
};

export default PackageCard;
