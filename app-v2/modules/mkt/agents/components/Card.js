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
  const { name, rating, image, heading, content, } = card;

  return (
    <div>
      <div className="col-xs-12 p0">
        <div className={`text-center ${styles.agentReviewInfo}`}>
          <div className={`sbcw radius100 overflowh relative iblock mb8 ${styles.agentImage}`}>
           <Img alt={image.alt} src={`${config.assets.images}/${image.url}`} width={80} height={80} />
          </div>
          <p className="f14 fw9 mt15">{name}</p>
          <div className={styles.rating}>
            {renderStars(rating)}
          </div>
        </div>
        <div className="sbcw pl32 pr32 relative">
          <div className="wfull">
            <p className="f16 fw9 mb15 mt15">{heading}</p>
            <p className="f14p text-justify">{content}</p>
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
