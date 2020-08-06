import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from 'utils/parsers';

class ReviewBooking extends PureComponent {

  render() {
    const { price, nights, totalPax } = this.props;

    return (
      <div className="bt pt15 pb15 flex spaceBetween">
        <div className="flex flexDColumn">
          <span className="f16 sfc3 fw9 mb4">Total Amount</span>
          <span
            className="f12 pfc4">{`${nights} nights ${totalPax.adults} adults & ${totalPax.children} children`}</span>
        </div>
        <div className="text-right">
          <p className="fw9 sfc3 f16 mb4">
            {
              parsePrice({
                price: price.discounted,
                currency: price.currency,
                appendOnly: false
              })
            }
          </p>
          <p className="f12 pfc4 tdl">
            {
              parsePrice({
                price: price.total,
                currency: price.currency,
                appendOnly: false
              })
            }
          </p>
        </div>
      </div>
    );
  }
}

ReviewBooking.propTypes = {
  price: PropTypes.object.isRequired,
  nights: PropTypes.number.isRequired,
  totalPax: PropTypes.object.isRequired,
};

ReviewBooking.defaultProps = {};

export default ReviewBooking;
