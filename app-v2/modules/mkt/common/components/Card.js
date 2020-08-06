import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Common/Img';

import { StarIcon, StarIconEmpty } from 'helpers/Icon/Icon';
import styles from './card.cm.scss';
import { currencyToSymbol } from 'utils/parsers';
import PackageCities from './Cities';
import Amenities from './Amenities';
import config from 'appConfig';

const renderStars = (rating) => {
  const filledStars = Array.from({ length: 5 - (5 - rating) });
  const emptyStars = Array.from({ length: 5 - rating });

  return (
    <ul className={styles.placement}>
      {[
        ...filledStars.map((_, i) => (
          <li key={`filled_${i}`}
              className={styles.starsList}>
            <StarIcon />
          </li>)
        ),
        ...emptyStars.map((_, i) => (
          <li key={`unfilled_${i}`}
              className={styles.starsList}>
            <StarIconEmpty />
          </li>
        )),
      ]}
    </ul>
  );
};

const Card = ({ card }) => {
  return (
    <div>
      <div className={styles.sliderCard}>
        <div className={styles.image}>
          <Img alt={card.image.alt} src={`${config.assets.images}/${card.image.url}`} />
        </div>
        {renderStars(card.hotel.rating)}
        <div className="col-xs-12 p0 mt4">
          <div className="col-xs-7 p0 pr15">
            {
              card.price.flight ?
                <p className="mt5">
                  <span className="f16 fw9 sfc3 block">{`${currencyToSymbol(card.price.currency)} ${card.price.flight.amount}/-`}</span>
                  <span className="f12 sfc6 block">{card.price.flight.subtitle}</span>
                </p> : null
            }
            {
              card.price.withoutFlight ?
                <p className="topBorderHere mt8">
                  <span className="f16 fw9 sfc3 block">{`${currencyToSymbol(card.price.currency)} ${card.price.withoutFlight.amount}/-`}</span>
                  <span className="f12 sfc6 block">{card.price.withoutFlight.subtitle}</span>
                </p> : null
            }
          </div>
          <div className="col-xs-5 p0">
            <p className="f12 fw9 pfc3 text-right">{card.duration}</p>
          </div>
        </div>
      </div>
      <div className="col-xs-12 p0">
        <PackageCities cities={card.cities} />
      </div>
      <div className="col-xs-12 p0 mt8">
        <Amenities inclusions={card.amenities} />
      </div>
      <div className="pack-cta col-xs-12 p0 mt15">
        <button type="button" className="text-capitalize text-center f16 btn-pri-large wfull">Customize & Book</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
