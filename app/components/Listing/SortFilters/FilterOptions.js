/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import SmartFilter from './SmartFilter';
import { getParamName } from '../../../utils/filter';

import './FilterOptions.scss';

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
    this.props.setDefaultFilters();
    this.props.onFilterCheckHandler();
  };

  render(){
    const {
    selectedFilters, filters, filterSelected, handleFilterUpdate, resetFilters,
     shouldHideDestinationTypeFilters, filterCities, filterInclusions, filterCounts, filterCategory, onFilterCheckHandler, isCategoryPage, filterDestinationActivities
  } = this.props;

  const applyFilters = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    handleFilterUpdate();
    const getBody = document.querySelector('body');
    getBody.classList.remove('filter-opened');
  };

  const createFilter = Object.keys(filters)
    .filter(k =>
      (filterInclusions.length ? k !== '41' : true) &&
      (k !== '37' || !shouldHideDestinationTypeFilters) &&
      (filterCategory.indexOf(getParamName(filters[k].paramsName)) === -1) &&
      (!filters[k].tag)
    )
    .map(key => (
        <SmartFilter
          key={filters[key].id}
          selectedFields={selectedFilters[filters[key].id]}
          filterSelected={filterSelected}
          onFilterCheckHandler={onFilterCheckHandler}
          filterCounts={filterCounts}
          {...filters[key]}
        />
      )
    );

  const renderCityFilters = filterCities.length &&
  filterCategory.indexOf('cities') === -1 ?
      <SmartFilter
        key='cities'
        selectedFields={selectedFilters['cities']}
        filterSelected={filterSelected}
        filterCounts={filterCounts}
        options={filterCities}
        paramsName='cities[]'
        displayType='Checkbox'
        id='cities'
        title='Cities'
        onFilterCheckHandler={onFilterCheckHandler}
      /> : null;

  const handleResetFilter = (event) => {
    event.preventDefault();
    resetFilters();
    onFilterCheckHandler();
  };

  const renderInclusionFilters = filterInclusions.length &&
  filterCategory.indexOf('inclusions') === -1 ?
      <SmartFilter
        key='inclusion_category_tags'
        selectedFields={selectedFilters['inclusion_category_tags']}
        filterSelected={filterSelected}
        filterCounts={filterCounts}
        options={filterInclusions}
        paramsName='inclusion_category_tags[]'
        displayType='Checkbox'
        id='inclusion_category_tags'
        title='Inclusions'
        onFilterCheckHandler={onFilterCheckHandler}
      /> : null;

  const renderExperienceFilters = filterDestinationActivities.length ?
      <SmartFilter
        key='location_experiences'
        selectedFields={selectedFilters['location_experiences']}
        filterSelected={filterSelected}
        filterCounts={filterCounts}
        options={filterDestinationActivities}
        paramsName='location_experiences[]'
        displayType='Checkbox'
        id='location_experiences'
        title='Popular Experiences'
        onFilterCheckHandler={onFilterCheckHandler}
      /> : null;


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
        <div className="row row- sbc5">
          {renderInclusionFilters}
        </div>
        <div className="row row- sbc5 expFilter hide">
          {renderExperienceFilters}
        </div>
        <div className="row row- sbc5">
          {renderCityFilters}
        </div>
        <div className="fixed p8 sbcw b0 l0 r0 bs4">
          {
            isCategoryPage ?
              <button className="btn-filled-pri-large wfull" type="submit">Apply Filters</button> :
              <button className="btn-filled-pri-large wfull" type="submit">
                {`View ${
                  filterCounts.total_entries > 0 ? filterCounts.total_entries : '0'
                } ${filterCounts.total_entries > 1 ? 'Packages' : 'Package'}`}
              </button>
          }
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
  filterInclusions: PropTypes.array,
  filterCounts: PropTypes.object,
  onFilterCheckHandler: PropTypes.func,
  isCategoryPage: PropTypes.bool,
  filterCategory: PropTypes.array,
  filterDestinationActivities: PropTypes.array,
  setDefaultFilters: PropTypes.func
};


FilterOptions.defaultProps = {
  selectedFilters: {},
  toggleFilterView: () => {},
  handleFilterUpdate: () => {},
  shouldHideDestinationTypeFilters: false,
  filterCities: [],
  filterInclusions: [],
  filterDestinationActivities: [],
  filterCounts: {},
  onFilterCheckHandler: () => {},
  isCategoryPage: false,
  filterCategory: [],
  setDefaultFilters: () => {}
};
export default FilterOptions;
