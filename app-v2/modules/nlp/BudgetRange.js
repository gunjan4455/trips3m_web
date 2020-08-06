import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'helpers/parsers';
import styles from './BudgetRange.cm.scss';

class BudgetRange extends PureComponent {
  render() {
    const { priceMax, priceMin } = this.props;
    return (
      <div className={ `at_nurthringRange absolute flex justifyCenter alignCenter p15 z1 ${styles.budgetRange}` }>
        <p className="f24 sfc3 fw7">{parsePrice({ price: priceMin, appendOnly: false })} - {parsePrice({ price: priceMax, appendOnly: false })}</p>
      </div>
    );
  }
}

BudgetRange.propTypes = {
  priceMax: PropTypes.number,
  priceMin: PropTypes.number
};

BudgetRange.defaultProps = {
  priceMax: 5700,
  priceMin: 4900
};

export default BudgetRange;

