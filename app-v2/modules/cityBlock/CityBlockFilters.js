import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';

import { CloseDark, FilterIconWhite } from 'helpers/Icon/Icon';

const GFilterButton = styled.button({
  width: '56px',
  height: '56px',
  bottom: '75px',
  boxShadow: '0 4px 12px #999',
  '& svg': {
    position: 'absolute',
    width: '25px',
    height: '25px',
  }
});

const FilterComponent = ({ name, type, className, id, disabled, input, checkedComp }) => {
  return (
    <input {...input} name={name} type={type} disabled={disabled} id={id} className={className} defaultChecked={checkedComp} />
  );
};

FilterComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  checkedComp: PropTypes.bool.isRequired
};


class CityBlockFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleFilters = this.toggleFilters.bind(this);
  };

  toggleFilters() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  clearFilter = () => {
    const { applyFilters, handleSubmit, tab, params, resetPath } = this.props;
    let url = '';
    if (params.city) {
      url = `/${params.destination}-tourism/${params.city}/${tab}`;
    } else {
      url = `/${params.destination}-tourism/${tab}`;
    }
    return url;
  };

  componentDidMount() {
    this.props.filters.filterCategories && this.props.filters.filterCategories.length && this.props.filters.filterCategories
      .filter(filter => filter.checked === true)
      .map(filter =>
          this.props.dispatch({
            type: '@@redux-form/CHANGE',
            meta: {
              form: 'cityBlockFiltersList',
              field: filter.destinationSchemeId + 'category',
              touch: false,
              persistentSubmitErrors: false
            },
            payload: filter.checked
          })
      );
    this.props.filters.filteredCities && this.props.filters.filteredCities.length && this.props.filters.filteredCities
      .filter(filter => filter.checked === true)
      .map(filter =>
          this.props.dispatch({
            type: '@@redux-form/CHANGE',
            meta: {
              form: 'cityBlockFiltersList',
              field: filter.cityId + 'city',
              touch: false,
              persistentSubmitErrors: false
            },
            payload: filter.checked
          })
      );
  }

  render() {
    const { applyFilters, handleSubmit, tab, params, filters, resetForm } = this.props;
    return (
      <div>
        <GFilterButton onClick={this.toggleFilters} className="overflowh pbc1 radius100 fixed z14 r15 flex alignCenter justifyCenter">
          <FilterIconWhite />
        </GFilterButton>
        <form className={`filter-row-container ${this.state.isModalOpen ? 'cityBlockFilterShow' : 'hide'}`}>
          <div className="col-xs-12 p0 z15 fixed t0 l0 b0 r0 sbcw cityblockfilterContainer">
          <div className="row row- sbcw filters-options-con">
            <div className="row row- sbcw p15 filters-header">
              <div className="col-xs-2 pl0">
                <button onClick={this.toggleFilters} className="close-filters" type="button"><CloseDark /></button>
              </div>
              <div className="col-xs-6 pl8">
                <p className="filter-title">Filters</p>
              </div>
              <div className="col-xs-4 pl0 pr0">
                <button type="button" onClick={resetForm} className="reset-button fright">RESET</button>
              </div>
            </div>
            <div className="pt8 sbc5" />
              <div className="p15 sbcw filter-row">
                <h3 className="destination-type-btn fw7 mb15 relative">Filters by Category</h3>
                <div className="row destination-type-body">
                  {
                    filters && filters.filterCategories && filters.filterCategories.map((filter, i) => {
                      const name = filter.destinationSchemeId + 'category';
                      return (
                        <div key={i} className="col-xs-6">
                          <Field
                            name={name}
                            component={FilterComponent}
                            id={filter.destinationSchemeId}
                            checkedComp={filter.checked}
                            type="checkbox"
                            className="checkbox-common"
                          />
                          <label className="ellipsis" htmlFor={filter.destinationSchemeId}>{filter.name}</label>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="clearfix hide text-right"><Link className="text-uppercase pfc4 fw4 cursorP pt1 f12 mb0 block" to={this.clearFilter}>clear</Link></div>
              </div>
              <div className="pt8 sbc5" />
              {
                filters && filters.filteredCities &&
                <div className="p15 sbcw filter-row">
                  <h3 className="destination-type-btn fw7 mb15 relative">Filters by City</h3>
                  <div className="row destination-type-body">
                    {
                      filters.filteredCities && filters.filteredCities.map((filter, i) => {
                        const name = filter.cityId + 'city';
                        return (
                          <div key={filter.cityId} className="col-xs-6">
                            <Field
                              name={name}
                              component={FilterComponent}
                              id={filter.cityId}
                              checkedComp={filter.checked}
                              type="checkbox"
                              className="checkbox-common"
                            />
                            <label className="ellipsis" htmlFor={filter.cityId}>{filter.name}</label>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              }
              <div className="fixed p8 sbc5 b0 l0 r0">
                <button
                  onClick={handleSubmit}
                  className="btn-filled-pri-large wfull"
                  type="submit"
                >
                  Apply Filter
                </button>
              </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

CityBlockFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  tab: PropTypes.string,
  applyFilters: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetPath: PropTypes.func,
  isModalOpen: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};


CityBlockFilters.defaultProps = {
  tab: '',
  applyFilters: () => {},
  handleSubmit: () => {},
  resetPath: () => {},
  isModalOpen: false
};

export default reduxForm({
  form: 'cityBlockFiltersList'
})(CityBlockFilters);

