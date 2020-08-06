import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './richOrSocialTrustCard.cm.scss';

import Img from 'components/Common/Img';

class RichOrSocialTrustCard extends PureComponent {
  render() {
    const { card } = this.props;
    return (
      <div className={`sbcw pt24 pl24 pb15 flex relative ${styles.richCard}`}>
        <div className={styles.contentCard}>
          {card.title ? <p className="f14 fw7 pfc3 mb8">{card.title}</p> : null}
          <p className={card.title ? 'f12 pfc4' : 'f14 fw7 pfc3'}>{card.text}</p>
        </div>
        <div className={`absolute-center-v r0 ${styles.image}`}>
          { card.image && card.image.imageUrl ?
            <Img
            src={card.image.imageUrl}
            alt={card.image.altText}
          /> : null}
        </div>
      </div>
    );
  }
}

RichOrSocialTrustCard.propTypes = {
  card: PropTypes.object.isRequired
};

export default RichOrSocialTrustCard;
