import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Parser } from 'html-to-react';
import { DownArrow } from 'helpers/Icon/Icon';
import CustomSwiper from 'modules/shared/CustomSwiper';
import { isFilterDisable } from '../SortFilters/SmartFilter';
import Img from '../../Common/Img';
import config from 'appConfig';
import parseFilters, { useQuery } from "containers/Listing/parseFilters";
import { EXCLUSION_CATEGORY_TAGS, EXCLUSION_CATEGORY_TAGS_KEYWORD, EXCLUSION_TAGS } from "utils/parsers";

import styles from './inlineFilter.cm.scss';

const parser = new Parser();

const filterTypeImages = {
  'honeymoon': `${config.assets.images}/public-product/honeymoon_4x.png`,
  'family': `${config.assets.images}/public-product/family_4x.png`,
  'friends': `${config.assets.images}/public-product/friends_4x.png`
};

class InlineFilter extends Component {

  state = {
    filters: {}
  };

  componentDidMount() {
    const { location, type, filters } = this.props;
    if (type === 'radio'){
      const { filters: selectedFilters } = parseFilters({query: useQuery(location.search) || {}});
      let tempFilter = {};
      Object.keys(selectedFilters).map(key => {
        const isExclusion = key === EXCLUSION_CATEGORY_TAGS;
        const values = selectedFilters[key] || [];
        values && values.map(value => {
          const excText = isExclusion ? EXCLUSION_CATEGORY_TAGS_KEYWORD : '';
          const isFilter = filters.options.filter(option => option.id === `${value}${EXCLUSION_CATEGORY_TAGS_KEYWORD}`)[0];
          const stateObj = isFilter && Object.keys(isFilter).length ? { [filters.tag]: `${value}${excText}` } : {};
          tempFilter = {...tempFilter, ...stateObj};
          if (isExclusion && Object.keys(tempFilter).length) {
            this.props.filterSelected(filters.tag, {[`${value}${EXCLUSION_CATEGORY_TAGS_KEYWORD}`]: true} );
            this.props.setDefaultSelectedFilters('', filters.tag, {[`${value}${EXCLUSION_CATEGORY_TAGS_KEYWORD}`]: true} );
          }
        });
      });
      this.setState({
        filters: {...tempFilter}
      });
    }
  }

  selectFilter = (filterId, optionId, tag) => {
    if (tag) {
      this.setState({
        filters: {
          ...this.state.filters,
          [tag]: optionId
        }
      });
    }
    const optionValue = {
      [optionId]: true
    };
    if (this.props.selectedFilters[filterId] && this.props.selectedFilters[filterId][optionId]) {
      optionValue[optionId] = false;
    }

    const inclusion_category_filters = this.props.selectedFilters['inclusion_category_tags'];
    let inclusionObj = {...inclusion_category_filters};
    const isExclusion = typeof optionId === 'string' && optionId.indexOf(EXCLUSION_CATEGORY_TAGS_KEYWORD) > -1;
    if (tag) {
      if (isExclusion) {
        if (inclusion_category_filters && Object.keys(inclusion_category_filters).length &&
          inclusion_category_filters[optionId.replace(EXCLUSION_CATEGORY_TAGS_KEYWORD, '')]) {
          inclusionObj = {
            ...inclusionObj,
            [optionId.replace(EXCLUSION_CATEGORY_TAGS_KEYWORD, '')]: false
          };
          this.props.filterSelected('inclusion_category_tags', {...inclusionObj});
        }
      } else {
        optionValue[`${optionId}${EXCLUSION_CATEGORY_TAGS_KEYWORD}`] = false;
        this.props.filterSelected(tag, { [`${optionId}${EXCLUSION_CATEGORY_TAGS_KEYWORD}`]: false });
      }
    }
    const obj = {
      ...this.props.selectedFilters,
      'inclusion_category_tags': {...inclusionObj},
      [filterId]: { ...this.props.selectedFilters[filterId], ...optionValue }
    };
    this.props.filterSelected(filterId, { ...this.props.selectedFilters[filterId], ...optionValue });
    this.props.filtersApplied(obj);
  };

  deSelectOption = (isRadio, filter, optionId, id) => {
    const { filters } = this.state;
    if (isRadio && filters[filter] && filters[filter] === optionId) {
      if (filters[filter]) {
        this.setState(prevState => {
          return { filters: {...prevState.filters, filter: !prevState.filters[filter]}};
        });
      }
      const optionValue = { [optionId]: false };
      const type = typeof optionId === 'string' && optionId.includes(EXCLUSION_CATEGORY_TAGS_KEYWORD) ? filter : id;
      this.props.filterSelected(type, {...optionValue});
      const obj = {
        ...this.props.selectedFilters,
        [type]: { ...this.props.selectedFilters[type], ...optionValue }
      };
      this.props.filtersApplied(obj);
    }
    return false;
  };

  render() {
    const { isTheme, showImage, filters: {options, paramsName, id, tag}, isDoubleLine, className, type='checkbox' } = this.props;
    const swiperStyle = isTheme ? { height: '88px' } : isDoubleLine ? { height: 'auto' } : {};
    return (
      <div className={`p15 sbcw ${isTheme ? styles.filtersContainer : styles.filtersContainerCommon} ${className}`}>
        <input id={paramsName} type='checkbox' className={`hide ${styles.inlineFilters}`} />
        <label htmlFor={paramsName} className='flex alignCenter spaceBetween'>
          <p className='f16 fwb'> {parser.parse(this.props.title)} </p>
          <span className='input-24 relative p5 flex alignCenter justifyCenter'><DownArrow /></span>
        </label>
        <div className={`${isDoubleLine ? styles.doubleLineInlineFiltersData : styles.inlineFiltersData} ${type === 'radio' ? 'mr8' : ''}` }>
          {
            <CustomSwiper containerStyle={swiperStyle} isDoubleLine={isDoubleLine} styles={styles}>
              {
                options.map((filter) => {
                  return (
                    <div className="flexFull">
                      <input checked={this.state.filters[tag] === filter.id ? true : this.props.selectedFilters[id] ? this.props.selectedFilters[id][filter.id] : false}
                             className={`hide ${styles.inlineFiltersCheckbox}`}
                             type={type}
                             onChange={() => {this.selectFilter(type === 'radio' ? tag : id, filter.id, tag);}}
                             id={`inlinefilter_${paramsName}_${filter.value}`}
                             key={filter.id}
                             name={tag}
                             onClick={() => this.deSelectOption(type === 'radio', tag, filter.id, id)}
                             disabled={isFilterDisable(filter, this.props.filterCounts, type === 'radio' ? tag : id)}/>
                      <label className='noBeforeAfter flex radius2 overflowh flexDColumn p0' htmlFor={`inlinefilter_${paramsName}_${filter.value}`}>
                        {
                          showImage ?
                            <div className={`radius2 mr8 themeImgCntainer mb3 sbc5 ${styles.theme}`}>
                              <Img ikSrc={filterTypeImages[filter.value]} alt={filter.value}/>
                            </div>
                            : null
                        }
                        <div
                          className={showImage ? 'text-left' : `${styles.filterTitle} flexFull flex text-center alignCenter justifyCenter pl8 pr8 mr8`}
                        >
                          {filter.title}
                        </div>
                      </label>
                    </div>
                  );
                })
              }
            </CustomSwiper>
          }
        </div>
      </div>
    );
  }
}

InlineFilter.propTypes = {
  filters: PropTypes.object,
  isDoubleLine: PropTypes.bool,
  selectedFilters: PropTypes.object,
  filterSelected: PropTypes.func,
  filtersApplied: PropTypes.func,
  setDefaultSelectedFilters: PropTypes.func,
  filterCounts: PropTypes.object,
  title: PropTypes.string,
  isTheme: PropTypes.bool,
  showImage: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  location: PropTypes.object,
};

InlineFilter.defaultProps = {
  isDoubleLine: false,
  type: 'checkbox'
};

export default InlineFilter;
