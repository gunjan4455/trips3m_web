import React from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Common/Img';

import styles from './card.cm.scss';
import { StarIcon, StarIconEmpty } from 'app/helpers/Icon/Icon';
import config from 'appConfig';

const renderStars = (rating) => {
  const filledStars = Array.from({ length: 5 - (5 - rating) });
  const emptyStars = Array.from({ length: 5 - rating });

  return (
    <ul className={styles.placement1}>
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
  const { image, heading, content, author, } = card;

  return (
    <div className="col-xs-12">
      <Img alt={image.alt} src={`${config.assets.images}/${image.url}`} width={330} height={225} />
      <h3 className="f16 fw9 mt15 mb15">{heading}</h3>
      <p className="f14 pfc3 mb15 mt15 text-justify">{content}</p>
      <div className={styles.RatingDiv}>
        {renderStars(author.rating)}
      </div>
      <div className="col-xs-12 mt8">
        <div className="flex alignCenter justifyCenter">
          <div className={`p0 radius100 overflowh sbc5 mr15 ${styles.travelImage}`}>
            <Img alt={author.image.alt} src={`${config.assets.images}/${author.image.url}`}
                 width={35} height={35} />
          </div>
          <div className="pr0 pt5 pb5 text-center iblock">
            <p className="f14 fw9">{author.name}</p>
            <p className="f12"><span className="pfc4">{author.from}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
