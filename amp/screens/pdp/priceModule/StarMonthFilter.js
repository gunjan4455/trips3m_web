import React, { Component } from 'react';
import PropTypes from 'prop-types';
import appConfig from 'appConfig';

import { getCurrentMonth } from 'helpers/DateTime';
import Action from 'amp/helpers/Action';
import { parsePrice } from 'amp/utils/parsers';

import './StarMonthFilter.scss';

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
  }

  sortStarOptions = (options) => (
    options.map(opt => {
      const { packageDetails : { set_url } } = this.props;
      const value = `${appConfig.api_protocol}//${appConfig.server.public.host}/packages/${set_url}?id=${opt.package_id}`;
      return (
        <option key={opt.package_id} value={value}>
          {`Upto ${opt.hotel_star} star hotels`}
        </option>
      );
    })
  );

  sortMonthOptions = (options) => {
    const { packageDetails: { id } } = this.props;
    return (
      options.map(opt => (
        <option key={opt.id} value={opt.id}>
          {opt.month_value}
        </option>
      ))
    );
  };

  getSelectedStarDetail = (package_id) => {
    return (
      this.props.packageDetails &&
      this.props.packageDetails.package_options &&
      this.props.packageDetails.package_options.hotel_price_details &&
      this.props.packageDetails.package_options.hotel_price_details
        .filter(hotel => hotel.package_id === parseInt(package_id)));
  };

  render() {
    const { packageDetails, location, isDealOrLuxury } = this.props;
    const { options, month } = this.state;
    const data = {};
    options.month.map(opt => {
      opt.start_price = parsePrice({ price: opt.start_price });
      opt.end_price = parsePrice({ price: opt.end_price });
      data[opt.id] = opt;
    });

    data.default_start_price = data[month].start_price;
    data.default_end_price = data[month].end_price;
    return (
      <div>
        <amp-state id="filterPrice">
          <script type="application/json" dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}>
          </script>
        </amp-state>
        <div className={isDealOrLuxury ? 'hide' : 'clearfix p15 sbcw bb'}>
          <div className="col-xs-6 pl0 pr4">
            <p className="f14 fw9 mb5">Hotel Star Rating</p>
            <div className="relative dropDown-container">
              <Action events={{ change: ['AMP.navigateTo(url=event.value)'] }}>
                {(props) => (
                  <select {...props}>
                    {this.state.options.package.length && this.sortStarOptions(this.state.options.package)}
                  </select>)
                }
              </Action>
            </div>
          </div>
          <div className="col-xs-6 pl4 pr0">
            <p className="f14 fw9 mb5">Month of Travel</p>
            <div className="relative dropDown-container">
              <Action events={{ change: ['AMP.setState({selectedMonth : event.value})'] }}>
                {(props) => {
                  return <select {...props}>
                    {this.state.options.month.length && this.sortMonthOptions(this.state.options.month)}
                  </select>;
                }}
              </Action>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StarMonthFilter.propTypes = {
  starRating: PropTypes.number,
  month: PropTypes.string,
  packageDetails: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  updateSelectedMonth: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  selectedMonth: PropTypes.number.isRequired,
  isDealOrLuxury: PropTypes.bool.isRequired,
};

StarMonthFilter.defaultProps = {
  starRating: 3,
  month: 'May'
};

export default StarMonthFilter;
