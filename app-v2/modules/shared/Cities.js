import React from 'react';
import PropTypes from 'prop-types';

import styles from './cities.cm.scss';

export default class Cities extends React.Component {
  static propTypes = {
    cities: PropTypes.array.isRequired,
    cityListWithdays: PropTypes.object,
    daysOrNight: PropTypes.string,
    isSlider: PropTypes.bool
  };
  static defaultProps = {
    cityListWithdays: {},
    daysOrNight: 'D',
    isSlider: false
  };

  render() {
    const { cities, cityListWithdays, daysOrNight, isSlider } = this.props;
    return (
      <div className="row row- package-cities">
        <ul className={`${styles.packageCitiesList} m0 p0 ${isSlider ? styles.listSingleLine : ''}`}>
          {cities.map((city, key) =>
            <li key={`${city}${key}`} className='iblock fleft relative'>
              {city}
              {cityListWithdays && cityListWithdays[city]
                ? ` (${cityListWithdays[city]}${daysOrNight})`
                : ''
              }
            </li>
          )}
        </ul>
      </div>
    );
  }
}
