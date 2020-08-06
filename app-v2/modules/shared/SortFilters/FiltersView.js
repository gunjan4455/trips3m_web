import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from '@emotion/styled';

import { DownArrow, CloseDark, FilterIconWhite } from 'helpers/Icon/Icon';

const GFilterButton = styled.button({
  width: '56px',
  height: '56px',
  boxShadow: '0 4px 12px #999',
  '& svg': {
    position: 'absolute',
    width: '25px',
    height: '25px',
  }
});

const GButton = styled.button({
  width: '24px',
  height: '24px',
  '& svg': {
    width: '16px',
    height: '16px',
  }
});

const FilterComponent = ({ name, type, className, id, disabled, input, checked }) => {
  return (
    <input {...input} name={name} type={type} disabled={disabled} id={id} className={className} />
  );
};

FilterComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired
};

export const FiltersView = ({ handleSubmit, filterList, filterToggle, initialValues, resetFilters }) => (
  <div>
    <GFilterButton className="overflowh hide pbc1 radius100 fixed z14 r15 b15 flex alignCenter justifyCenter">
      <FilterIconWhite />
    </GFilterButton>
    <div className='col-xs-12 p0 z15 fixed t0 l0 overflowa pb64 b0 r0 sbc5 cityblockfilterContainer'>
      <div className="row row- sbcw filters-options-con">
        <div className="row row- sbcw p15 flex alignCenter filters-header">
          <div className="col-xs-2 pl0">
            <GButton className="close-filters flex alignCenter justifyCenter" type="button" onClick={filterToggle}><CloseDark /></GButton>
          </div>
          <div className="col-xs-6 pl8">
            <p className="filter-title">Filters</p>
          </div>
          <div className="col-xs-4 pl0 pr0">
            <button className="reset-button fright" onClick={resetFilters}>RESET</button>
          </div>
        </div>

        <div className="pt8 sbc5" />
        <form className="filter-row-container block">
          {filterList && filterList.length && filterList
          .filter(filter => filter.options.length)
          .map((filter, index) => (
            <div className="at_filtersrow p15 pb0 sbcw filter-row" key={index}>
              <h3 className="destination-type-btn fw7 mb15 relative">
                {filter.title}
                <span className="block absolute-center-v"><DownArrow className="smooth" /></span>
              </h3>
              <div className="row flex spaceBetween flexWrap destination-type-body">
                {filter.options.map((filterOption, key) => (
                  <div className="col-xs-6" key={key}>
                    <Field
                      name={`${filter.paramName}[${filterOption.value}]`}
                      component={FilterComponent}
                      id={`${filter.paramName}[${filterOption.value}]`}
                      type="checkbox"
                      className="checkbox-common"
                      disabled={!filterOption.enabled}
                      checked={filterOption.selected}
                    />
                    <label htmlFor={`${filter.paramName}[${filterOption.value}]`}>{filterOption.title}</label>
                  </div>))
                }
              </div>
              <div className="row pt8 mt15 sbc5" />
            </div>))
          }
          <div className="fixed p8 sbcw b0 l0 r0 bs4">
            <button className="btn-filled-pri-large wfull" type="button" onClick={handleSubmit}>Apply Filter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

FiltersView.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
  resetFilters: PropTypes.func,
  filterToggle: PropTypes.func,
  filterList: PropTypes.array
};


FiltersView.defaultProp = {
};

export default reduxForm({
  form: 'hlpFilters',
  initialValues: { enabled: true }
})(FiltersView);
