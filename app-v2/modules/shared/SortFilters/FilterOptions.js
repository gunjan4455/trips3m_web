/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './FilterOptions.scss';
import SmartFilter from './SmartFilter';
import {
  CloseDark
} from 'helpers/Icon/Icon';

class FilterOptions extends React.Component {

  constructor(props) {
    super(props);
    this.filterHide = this.filterHide.bind(this);
  }

  filterHide() {
    this.props.toggleFilterView();
    const getBody = document.querySelector('body');
    getBody.classList.remove('filter-opened');
  };
  render(){
    const {
    selectedFilters, filters, toggleFilterView, filterSelected, handleFilterUpdate, resetFilters,
     shouldHideDestinationTypeFilters, filterCities, filterCounts
  } = this.props;

  const applyFilters = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    handleFilterUpdate();
    const getBody = document.querySelector('body');
    getBody.classList.remove('filter-opened');
  };

  const createFilter = Object.keys(filters).map(
    key => ( (String(key) !== '37' || !shouldHideDestinationTypeFilters )&&
      <SmartFilter
        key={filters[key].id}
        filterSelected={filterSelected}
        filterCounts={filterCounts}
        {...filters[key]}
      />
    )
  );
  const renderCityFilters = filterCities.length ?
      <SmartFilter
        key='cities'
        filterSelected={filterSelected}
        filterCounts={filterCounts}
        options={filterCities}
        paramsName='cities[]'
        displayType='Checkbox'
        id='cities'
        title='Cities'
      /> : null;
  const handleResetFilter = (event) => {
    event.preventDefault();
    resetFilters();
  }

  return (
    <div className="row row- fixed z15 sbcw filters-options-con" >
      <form onSubmit={applyFilters}>
        <div className="row row- p15 filters-header">
          <div className="col-xs-2 pl0">
            <button className="close-filters" type="button" onClick={this.filterHide.bind(this)}><CloseDark /></button>
          </div>
          <div className="col-xs-6 pl8">
            <p className="filter-title">Filters</p>
          </div>
          <div className="col-xs-4 pl0 pr0">
            <button className="reset-button fright" onClick={handleResetFilter}>RESET</button>
          </div>
        </div>
        <div className="row row- sbc5">
          {createFilter}
        </div>
        {/*<div className="row row- sbc5">*/}
          {/*{renderCityFilters}*/}
        {/*</div>*/}
        <div className="fixed p8 sbc5 b0 l0 r0">
          <button className="btn-filled-pri-large wfull" type="submit">Apply Filter</button>
        </div>
      </form>
    </div>
  );
}
};

FilterOptions.propTypes = {
  filters: PropTypes.object.isRequired,
  selectedFilters: PropTypes.object,
  toggleFilterView: PropTypes.func,
  filterSelected: PropTypes.func.isRequired,
  handleFilterUpdate: PropTypes.func,
  resetFilters: PropTypes.func.isRequired,
  shouldHideDestinationTypeFilters: PropTypes.bool,
  filterCities: PropTypes.array,
  filterCounts: PropTypes.object,
};


FilterOptions.defaultProps = {
  selectedFilters: {},
  toggleFilterView: () => {},
  handleFilterUpdate: () => {},
  shouldHideDestinationTypeFilters: false,
  filterCities: [],
  filterCounts: {},
};
export default FilterOptions;
