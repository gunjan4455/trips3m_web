import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPercentage } from 'utils/parsers';
import { InfoIcon } from 'helpers/Icon/Icon';

import 'components/Listing/PackageDaysDiscount.scss';

class PackageDaysDiscount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipVisible: false
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip () {
    this.setState({ isTooltipVisible: true });
    setTimeout(() => {
      this.setState({ isTooltipVisible: false });
    }, 1500);
  }
  render() {
    const { days, nights, price, discount, hideDiscount } = this.props;
    return(
      <div className="row row-">
        {/*<p className="at_packageDaysCount f12 fw7 pb5 mt3 text-right packages-day-count opacity-zero">{days} Days & {nights} Nights </p>*/}
        <div className="row row- mt24">

          <button
            className="package-info-icon package-info-icon-custom-left relative fright"
            onClick={() => this.toggleTooltip()}
          >
            <InfoIcon />
            {this.state.isTooltipVisible ?
              <div className={hideDiscount ? 'tooltip-upwards' : 'tooltipdata-up'}>
                <p className="f12 sfcw m0 text-left">Exact prices may vary based on availability.</p>
              </div> : null
            }
          </button>
          {
            !hideDiscount ?
              <span className="discount-ribbon fright mr5">{getPercentage({ price, discount })}% Off</span> : null
          }
        </div>
      </div>
    );
  }
}

PackageDaysDiscount.propTypes = {
  days: PropTypes.number.isRequired,
  nights: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  hideDiscount: PropTypes.bool
};

PackageDaysDiscount.defaultProps = {
  hideDiscount: false
};

export default PackageDaysDiscount;
