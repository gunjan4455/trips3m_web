import React from 'react';
import PropTypes from 'prop-types';
import * as GenericComponents from 'components/Generic';
import './FilterOptions.scss';

const isFilterDisable = (option, filterCounts, key) => {
  if (filterCounts[option.filterCountKey] === 0) {
    return true;
  }
  if (key === 39 && option.filterCountKey === 'price_ranges_80_000___50_000_000') {
    if (typeof (filterCounts.price_ranges_80_000___50_000_000) === 'undefined') {
      return (
      filterCounts.price_ranges_80_000___1_00_000 +
      filterCounts.price_ranges_1_00_000___2_00_000 +
      filterCounts.price_ranges_2_00_000___50_000_000 === 0);
    }
    return (filterCounts.price_ranges_80_000___1_00_000 === 0);
  }
  if (key === 'cities') {
    return (filterCounts[`city_${option.id}`] === 0);
  }
  return false;
};

class SmartFilter extends React.Component {
  handleOnChange = (id) => {
    const optionValue = {};
    if (this.props.selectedFields[id]) {
      optionValue[id] = false;
    } else {
      optionValue[id] = true;
    }
    this.props.filterSelected(this.props.id, { ...this.props.selectedFields, ...optionValue });
  }
  render() {
    const options = this.props.options.map(
      option =>
      React.createElement(
        GenericComponents[this.props.displayType],
        Object.assign(
          {},
          option,
          {
            name: this.props.paramsName,
            key: option.id,
            handleOnChange: this.handleOnChange,
            isChecked: this.props.selectedFields[option.id] || false,
            disabled: isFilterDisable(option, this.props.filterCounts, this.props.id),
          }
        )
      )
    );

    return (
      <div className="row row- mb8 pb8 pl15 pr15 pt15 sbcw" key={this.props.id}>
        <p className="fw9 pb8">{this.props.title}</p>
        <div className="row row- filter-box-options">
          {options}
        </div>
      </div>
    );
  }
}
SmartFilter.propTypes = {
  paramsName: PropTypes.string.isRequired,
  displayType: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedFields: PropTypes.object,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  filterSelected: PropTypes.func.isRequired,
  filterCounts: PropTypes.object,
};

SmartFilter.defaultProps = {
  selectedFields: {},
  filterCounts: {}

};

export default SmartFilter;
