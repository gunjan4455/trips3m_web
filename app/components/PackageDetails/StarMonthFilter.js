import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { DownArrow } from 'helpers/Icon/Icon';
import { getCurrentMonth } from 'helpers/DateTime';
import { trackSegment, HOTEL_CATEGORY_CLICKED } from 'actions/segmentEvents';

const GSelectDiv = styled.div({
  height: '40px',
  border: '1px solid #ccc',
  borderRadius: '2px',
  '& .input-24': {
    width: '24px',
    height: '24px',
    zIndex: '1',
    '& svg': {
      width: '10px',
      height: '6px'
    }
  },
  '& select': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
    zIndex: '2',
    padding: '8px',
    paddingRight: '25px',
    appearance: 'none',
  }
});

class StarMonthFilter extends Component {
  constructor(props) {
    super(props);
    const options = {};
    try {
      options.month = this.props.packageDetails.month_options.month_ranges || [];
      options.package = this.props.packageDetails.package_options.hotel_price_details || [];
      options.checked = {
        month: this.props.selectedMonth || getCurrentMonth() + 1,
        package: options.package.filter(e => e.is_checked)[0].package_id
      };
    } catch (e) {
      options.month = [];
      options.package = [];
      options.checked = {
        month: null,
        package: null
      };
    }

    this.state = {
      month: options.checked.month,
      package: options.checked.package,
      options
    };

    this._setMonth = this._setMonth.bind(this);
    this._setStarRating = this._setStarRating.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  sortStarOptions = (options) => (
    options.map(opt => (
      <option key={opt.package_id} value={opt.package_id}>
        {`Upto ${opt.hotel_star} star hotels`}
      </option>
    ))
  );

  getDestination = (destinations) => {
    return destinations.map(destination => destination.name).join('::');
  };

  trackSegmentEvent = (event, cta, value) => {
    const { packageDetails } = this.props;
    const toDestination = this.getDestination(packageDetails.destinations);
    trackSegment({
      event: event,
      category: `Destination:${packageDetails.destinations[0].name}`,
      section: 'Package List/View Details',
      object: `Package/${packageDetails.id}`,
      cta: cta ? `${cta} Star` : 'View Details & Customize',
      package_id: packageDetails.id,
      destination_list: toDestination,
      destination_id: packageDetails.destinations[0].id,
      label: `Days:${packageDetails.days}::Hotel:${packageDetails.max_hotel_category} Star`,
      value: value ? value : packageDetails.total_price,
      package_name: packageDetails.name
    });
  };


  sortMonthOptions = (options) => (
    options.map(opt => (
      <option key={opt.id} value={opt.id}>
        {opt.month_value}
      </option>
    ))
  );

  getSelectedStarDetail = (package_id) => {
    return (
      this.props.packageDetails &&
      this.props.packageDetails.package_options &&
      this.props.packageDetails.package_options.hotel_price_details &&
      this.props.packageDetails.package_options.hotel_price_details
        .filter(hotel => hotel.package_id === parseInt(package_id)));
  };

  _setMonth(e) {
    this.setState({ month: Number(e.target.value) }, () => this._handleSubmit());
  }

  _setStarRating(e) {
    const packageDetail = this.getSelectedStarDetail(e.target.value);
    this.trackSegmentEvent(HOTEL_CATEGORY_CLICKED, packageDetail[0].hotel_star, packageDetail[0].price);
    this.setState({ package: e.target.value }, () => this._handleSubmit());
  }

  _handleSubmit() {
    if (this.state.package !== this.state.options.checked.package) {
      const month = this.state.month;
      // let month = this.props.selectedMonth;
      // if (month !== this.state.month) {
      //   month = this.state.month;
      // }
      this.props.pushState(
        `/packages/${this.props.packageDetails.set_url}?id=${this.state.package}&travelmonth=${this.props.selectedMonth}`
      );
    } else if (this.state.month !== this.props.packageDetails.selectedMonthNumber) {
      const { start_price, end_price, month_value, id } = this.state.options.month
        .filter(e => e.id === this.state.month)[0] || {};
      this.props.updateSelectedMonth(this.state.month);
      this.props.update({
        from: start_price,
        to: end_price,
        month: month_value,
        selectedMonthNumber: id
      });

    }
  }

  render() {
    const { packageDetails } = this.props;

    return (
      <div className="clearfix p15 sbcw bb">
        <div className="col-xs-6 pl0 pr4">
          <p className="f14 fw9 mb5">Hotel Star Rating</p>
          <GSelectDiv className="relative">
            <select onChange={this._setStarRating} value={packageDetails.id}>
              {this.state.options.package.length && this.sortStarOptions(this.state.options.package)}
            </select>

            <span
              className="input-24 flex alignCenter justifyCenter iblcok p8 absolute absolute-center-v r5"><DownArrow /></span>
          </GSelectDiv>
        </div>

        <div className="col-xs-6 pl4 pr0">
          <p className="f14 fw9 mb5">Month of Travel</p>
          <GSelectDiv className="relative">
            <select onChange={this._setMonth} value={packageDetails.selectedMonthNumber}>
              {this.state.options.month.length && this.sortMonthOptions(this.state.options.month)}
            </select>

            <span
              className="input-24 flex alignCenter justifyCenter iblcok p8 absolute absolute-center-v r5"><DownArrow /></span>
          </GSelectDiv>
        </div>
      </div>
    );
  }
}

StarMonthFilter.propTypes = {
  starRating: PropTypes.number,
  month: PropTypes.string,
  packageDetails: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  updateSelectedMonth: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  selectedMonth: PropTypes.number.isRequired,
};

StarMonthFilter.defaultProps = {
  starRating: 3,
  month: 'May'
};

export default StarMonthFilter;
