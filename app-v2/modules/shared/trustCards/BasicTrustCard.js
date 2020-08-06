import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './recommendedCard.cm.scss';

class BasicTrustCard extends PureComponent {
  render() {
    const { card } = this.props;
    return (
      <div className={`p15 radius6 sbc7 ${styles.border}`}>
        {card.title ? <p className="f14p fw9 mb8 pfc5">{card.title}</p> : null}
        <p className={card.title ? 'f12 pfc5': 'f14p fw7 pfc5'}>{card.text}</p>
      </div>
    );
  }
}

BasicTrustCard.propTypes = {
  card: PropTypes.object.isRequired
};

export default BasicTrustCard;
