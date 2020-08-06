import React from 'react';
import PropTypes from 'prop-types';

import styles from './cities.cm.scss';

const Cities = ({ cities }) => {
  if (!cities.length) {
    return null;
  }

  return (
    <div className={styles.packageCities}>
      <ul className={` f12 pfc3 mt8 ${styles.packageCitiesList}`}>
        { cities.map((city, i) => <li key={i}>{ city }</li>) }
      </ul>
    </div>
  );
};

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default Cities;
