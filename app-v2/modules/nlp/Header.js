import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BudgetRange from './BudgetRange';

import styles from './Preferernces.cm.scss';


class Header extends PureComponent {
  render() {
    const { price } = this.props;
    return (
      <div>
        <div className="at_nurturingBanner relative sbcw pb32">
          <div className={`at_nurturingDiv pbc5 pt15 ${styles.bannerHeading}`}>
            <p className="f16a sfcw fw9 pl48">Edit Preferences to Match Your Budget</p>
          </div>
          <div className={`absolute wfull ${styles.budgetWrap}`}>
            <BudgetRange priceMax={price.max} priceMin={price.min} />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  price: PropTypes.object
};

Header.defaultProps = {
  price: {}
};

export default Header;
