import React from 'react';
import PropTypes from 'prop-types';

import RatingStar from 'modules/shared/RatingStar';
import { CloseDark } from 'helpers/Icon/Icon';

class FiltersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilters: props.initialFilters,
      ratingFilters: props.ratingFilters,
    };
  }

  checkStatus = (e, option, i) => {
    const ratingFilter = this.state.ratingFilters.map((ratingFilter, index) => {
      if (index !== i) {
        return ratingFilter;
      } else {
        return { ...ratingFilter, checked: e.target.checked };
      }
    });

    let filter = [...this.state.selectedFilters];
    if (e.target.checked) {
      filter.push(option);
    } else {
      filter = filter.filter(
        rating => rating !== option
      );
    }
    this.setState({
      selectedFilters: filter,
      ratingFilters: ratingFilter,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      selectedFilters: nextProps.initialFilters,
      ratingFilters: nextProps.ratingFilters,
    });
  };

  handleSubmit = () => {
    const selectedFilters = [...this.state.selectedFilters];
    let testimonialUrl = this.props.location.pathname;
    let filterUrl = '';
    filterUrl += selectedFilters
      .map((filter, i) => {
        if (i > 0) {
          return (`&ratings[]=${filter}`);
        }
      })
      .join('');
    filterUrl = selectedFilters.length ? `ratings[]=${selectedFilters[0]}` + filterUrl : '';
    filterUrl ? testimonialUrl += `?${filterUrl}` : testimonialUrl;
    this.props.updateUrl(testimonialUrl);
  };

  resetFilters = () => {
    const ratingFilter = this.state.ratingFilters.map(ratingFilter => ({ ...ratingFilter }));
    ratingFilter.map(rating => {
      return (rating.checked = false);
    });
    this.setState({
      ratingFilters: ratingFilter,
      selectedFilters: [],
    });
  };

  render() {

    const { filterToggle } = this.props;

    return (
      <div className="fixed t0 l0 sbcw z16 wfull pb48 hfull overflowa">
        <div className="p15 bb">
          <div className='at_close iblock icon-14' onClick={filterToggle}>
            <CloseDark />
          </div>

          <div className="f16 fw4 pfc3 pl24 iblock">Filters</div>
          <div className='at_reset fright f14 pfc4 text-uppercase fw4' onClick={this.resetFilters}>Reset</div>
        </div>
        <div className="p15">
          <div className="fw7 pfc3 f14 pb15">Traveler Rating</div>
          <div className="row">
            {
              this.state.ratingFilters.map((data, i) => {
                return (
                  <div key={data.value} className="col-xs-6">
                    <input
                      type="checkbox"
                      checked={data.checked}
                      name={`[${data.value}]`}
                      id={`[${data.value}]`}
                      onChange={e => this.checkStatus(e, data.value, i)}
                      className="checkbox-common"
                    />
                    <label htmlFor={`[${data.value}]`}>
                      <RatingStar rating={parseInt(data.value)} />
                    </label>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="fixed p8 wfull b0 bs6 sbcw z1">
          <button type="button" className='at_handleSubmit wfull f14 fw7 sfcw pbc2 input-with-icon-box'
                  onClick={this.handleSubmit}>
            Apply Filter
          </button>
        </div>
      </div>
    );
  }
}

FiltersView.propTypes = {
  ratingFilters: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  updateUrl: PropTypes.func.isRequired,
  initialFilters: PropTypes.array,
  filterToggle: PropTypes.func.isRequired,
};

FiltersView.defaultProps = {
  initialFilters: []
};

export default FiltersView;
