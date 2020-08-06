import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import CitiesList from '../../shared/Cities';
import PackageIncExc from '../../shared/PackageIncExc';
import FormOneCTA from 'modules/shared/FormOneCTA';
import { currencyToSymbol, numberWithCommas } from 'helpers/parsers';
import Img from 'components/Common/Img';

const TopCard = styled.div({
  width: '100%',
  '& a': {
    color: '#3E3E3E',
    '&:hover': {
      color: '#3E3E3E',
    },
  },
  '& .card-details-withb': {
    border: '1px solid #e4e4e4',
    borderBottom: '0 none'
  },
  '& .cta-withb': {
    border: '1px solid #e4e4e4',
    borderTop: '0 none',
  }
});

const PackageIncExcBox = styled.div({
  height: '42px',
  overflow: 'hidden',
});

const ImgContainer = styled.div({
  width: '100%',
  height: '140px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover .onhoverCard': {
    display: 'flex',
    '& a': {
      color: '#fff',
    },
  }
});

const CardDetails = styled.div({
  '& *': {
    boxSizing: 'border-box',
  }
});

const Price = styled.p({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '15px',
  position: 'relative',
  '&:after': {
    width: '10px',
    height: '2px',
    background: '#69c276',
    position: 'absolute',
    bottom: '0',
    left: '0',
    content: '',
  }
});

const GCitiesListDiv = styled.div({
  '& .package-cities-list' : {
    minHeight: '34px',
  }
});

const GradientDest = styled.div({
  minHeight: '30px'
});

const getDestinationName = (destinations) => {
  try {
    return destinations[0].name || '';
  } catch (e) {
    return '';
  }
};

const Card = ({ id, name , days, nights, image_url, imagekit_url, mini_desc, price_total, discount, currency, discounted_price, discount_percentage, cities, set_url, inclusions, destinations, isSlider, showCTA }) => {
  const symbolicCurrency = currencyToSymbol(currency);
  return (
    <TopCard className="clearfix sbcw">
    <Link to={`/packages/${set_url}?id=${id}`} className="block">
      <ImgContainer className="clearfix relative">
          <Img width={316} height={140} src={image_url} ikSrc={imagekit_url} alt={name} />
          <div className="black-common-layer z2">
            <GradientDest className="black-gred absolute wfull block b0">
              <div className="col-md-12 p0 pl8">
                <p className="fw9 sfcw l8 f16 mb0">{getDestinationName(destinations)} ( {days}D & {nights}N )</p>
              </div>
            </GradientDest>
          </div>

        </ImgContainer>
        <CardDetails className={isSlider ? 'pt15 sbcw' : 'p15 sbcw card-details-withb'}>
          <p className="f12 pfc4 m0 fw3">Starting from:</p>
          <Price className="sfc3 m0 fw7 f18" itemProp="priceSpecification">
            {`${symbolicCurrency} ${numberWithCommas(Math.round(discounted_price))}/-`}
            {
              discounted_price !== price_total ?
                <span className="f12 pfc3 tdl ml8 at_oldprice">
                {`${symbolicCurrency} ${numberWithCommas(Math.round(price_total))}/-`}
              </span> : null
            }
          </Price>

          <GCitiesListDiv>
            <CitiesList cities={cities} />
          </GCitiesListDiv>

          <PackageIncExcBox className="clearfix mt4 mb4">
            <PackageIncExc inclusions={inclusions.length > 5 ? inclusions.slice(0,5) : inclusions} />
          </PackageIncExcBox>
        </CardDetails>
      </Link>
      {showCTA && (
        <div className={isSlider ? 'p0 pt15' : 'p0 cta-withb'}>
          <FormOneCTA
            rtProps={{
              to_loc: getDestinationName(destinations),
              trip_days: days.toString(),
              packageId: id,
              page: ' ',
              section: 'Recent Packages',
              cta: 'Customize & Get Quotes',
              // object: `Hotel/${id}`
            }}
          >
            <div className='wfull btn-pri-large ripple'> Customize & Get Quotes </div>
          </FormOneCTA>
        </div>
      )}
    </TopCard>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  imagekit_url: PropTypes.string.isRequired,
  mini_desc: PropTypes.string.isRequired,
  price_total: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  discounted_price: PropTypes.number.isRequired,
  discount_percentage: PropTypes.number.isRequired,
  cities: PropTypes.array.isRequired,
  set_url: PropTypes.string.isRequired,
  inclusions: PropTypes.array.isRequired,
  destinations: PropTypes.array.isRequired,
  isSlider: PropTypes.bool,
  showCTA: PropTypes.bool
};

Card.defaultProps = {
  isSlider: false,
  showCTA: true
};

export default Card;
