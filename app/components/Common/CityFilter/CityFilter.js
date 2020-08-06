
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DownArrow } from 'helpers/Icon/Icon';
import CustomSwiper from 'modules/shared/CustomSwiper';
import styles from './cityFilter.cm.scss';

class CityFilter extends Component {

  render() {
    const { fobpLinks: { footerLinks, name }, isDoubleLine } = this.props;
    const swiperStyle = {};
    return (
      <div className={`p15 sbcw ${styles.filtersContainerCommon} inline-common-filter price-filters`}>
        <input id={'City_links'} type='checkbox' className={`hide ${styles.inlineFilters}`} />
        <label htmlFor='City_links' className='flex alignCenter spaceBetween'>
          <p className='f16 fwb'>{name}</p>
          <span className='input-24 relative p5 flex alignCenter justifyCenter'><DownArrow /></span>
        </label>
        <div className={`${isDoubleLine ? styles.doubleLineInlineFiltersData : styles.inlineFiltersData}`}>
          <CustomSwiper containerStyle={swiperStyle} isDoubleLine={isDoubleLine} styles={styles}>
            {
              footerLinks.map((footerLink, index) => {
                const { name, url } = footerLink;
                const sourceName = name.split(' ').slice(1).join(' ');
                return (
                  <div>
                    <a href={url}>
                    <input
                      id={index}
                      className={`hide ${styles.inlineFiltersCheckbox}`}
                    />
                    <label className='noBeforeAfter flex radius2 overflowh flexDColumn p0' htmlFor={index}>
                      <div
                        className={ `${styles.filterTitle} flexFull flex text-center alignCenter justifyCenter pl8 pr8 mr8`}
                      >
                        {sourceName}
                      </div>
                    </label>
                    </a>
                  </div>
                );
              })
            }
          </CustomSwiper>
        </div>
      </div>
    );
  }
}

CityFilter.propTypes = {
  fobpLinks: PropTypes.object,
  isDoubleLine: PropTypes.bool,
};

CityFilter.defaultProps = {
  isDoubleLine: false
};

export default CityFilter;
