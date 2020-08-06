import  React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BudgetRange from 'app-v2/modules/nlp/BudgetRange';
import { CloseIconWhite } from 'helpers/Icon/Icon';

import styles from './BudgetBanner.cm.scss';


class BudgetBanner extends PureComponent {
  render() {
    const { destination, priceMax, priceMin, savePreferencesAndRedirect, adult, child } = this.props;
    return (
      <div className="at_nurturingBanner relative sbcw pb32">
        <span className={`absolute t15 l15 ${styles.nurtureIcon}`} onClick={() => savePreferencesAndRedirect()}>
          <CloseIconWhite />
        </span>
        <div className={`at_nurturingDiv pbc5 flex alignCenter justifyCenter ${styles.bannerHeading}`}>
          <p className="f24 sfcw fw9 text-center ">Your Total Budget for<br /> {destination} will be</p>
        </div>
        <div className={`absolute wfull ${styles.budgetWrap}`}>
          <BudgetRange priceMax={priceMax} priceMin={priceMin} />
          <div className={`absolute text-center p10 f12 sbc7 ${styles.numberOfPeople}`}>
            for {adult} {+adult > 1 ? 'adults' : 'adult'} {+child ? `& ${child} ${+child > 1 ? 'children' : 'child'} ` : null}
          </div>
        </div>
      </div>
    );
  }
}

BudgetBanner.propTypes = {
  destination: PropTypes.string.isRequired,
  priceMax: PropTypes.number,
  priceMin: PropTypes.number,
  savePreferencesAndRedirect: PropTypes.func.isRequired,
  adult: PropTypes.string,
  child: PropTypes.string
};

BudgetBanner.defaultProps = {
  adult: '2',
  child: '0'
};

export default BudgetBanner;

