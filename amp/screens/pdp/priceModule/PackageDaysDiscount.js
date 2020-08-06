import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPercentage } from 'amp/utils/parsers';
import Action from 'amp/helpers/Action';
import 'amp/modules/packageCard/PackageDaysDiscount.scss';

class PackageDaysDiscount extends Component {
  render() {
    const { price, discount, hideDiscount } = this.props;
    return (
      <div className="row row-">
        <div className="row row- mt8">
          <Action events={{ tap: ['AMP.setState({showToolTip : !showToolTip})'] }}>
            {(props) => (
              <button {...props}
                      className="package-info-icon package-info-icon-custom-left relative fright"
              >

                <div data-amp-bind-class={`showToolTip ? '':'hide'`} className="hide">
                  <div className={hideDiscount ? 'tooltip-upwards' : 'tooltipdata-up'}>
                    <p className="f12 sfcw m0 text-left">
                      Exact prices may vary based on availability.
                    </p>
                  </div>
                </div>
              </button>
            )}
          </Action>
          {
            !hideDiscount ?
              <span className="discount-ribbon fright mr5 ml5">{getPercentage({ price, discount })}% Off</span> : null
          }
        </div>
      </div>
    );
  }
}

PackageDaysDiscount.propTypes = {
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  hideDiscount: PropTypes.bool
};

PackageDaysDiscount.defaultProps = {
  hideDiscount: false
};

export default PackageDaysDiscount;
