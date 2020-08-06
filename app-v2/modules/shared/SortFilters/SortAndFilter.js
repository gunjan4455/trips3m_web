import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';

import SortBy from './SortBy';
import Filters from './Filters';
import FiltersViews from './FiltersView';
import './SortAndFilter.scss';

class SortAndFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filterToggle = this.filterToggle.bind(this);
    this.state = {
      showFilterPopup: false
    };
  }

  filterToggle() {
    this.setState({ showFilterPopup : !this.state.showFilterPopup });
  }

  render() {
    const { filterList, sortBy, resetFilters, initialValues, applySort, location, applyFilters, push, isHlp } = this.props;
    return (<div className="row row- sort-filter-con">
      <Sticky enabled={true} top={isHlp ? 48 : 0}  innerZ={4}>
        <div className="col-xs-6 p0 sbcw">
          <SortBy
            options={sortBy.options}
            selected={sortBy.options[0]}
            applySort={applySort}
            location={location}
            push={push}
          />
        </div>
        <div className="col-xs-6 p0 sbcw" onClick={this.filterToggle}>
            <Filters selectedFilters={initialValues}/>
        </div>
      </Sticky>
      <div className={this.state.showFilterPopup ? '' : 'hide'}>
        <FiltersViews filterToggle={this.filterToggle}
                     enableReinitialize
                     filterList={filterList}
                     onSubmit={values => applyFilters(values)}
                     initialValues={initialValues}
                     resetFilters={resetFilters}/>
      </div>
    </div>);
  }
}

SortAndFilter.propTypes = {
  filterList: PropTypes.array,
  initialValues: PropTypes.object.isRequired,
  applySort: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  sortBy: PropTypes.object.isRequired,
  resetFilters: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  isHlp: PropTypes.bool,
};

SortAndFilter.defaultProps = {
  filterList: PropTypes.array,
  isHlp: false,
};

export default SortAndFilter;
