import React from 'react';
import PropTypes from 'prop-types';

import 'components/Listing/PackageCities.scss';

const renderPackageCitiesFromArray = (cities, isDealsCard) => {
  if (!cities.length) {
    return null;
  }

  return (
    <div className="package-cities">
      <ul className="package-cities-list">
        { cities.map((city, i) => <li className={isDealsCard ? 'f12': ''} key={i}>{ city }</li>) }
      </ul>
    </div>
  );

};

const renderPackageCitiesFromObject = (citiesWithDays, isDealsCard) => {
  const cities = Object.keys(citiesWithDays);

  if (!cities.length) {
    return null;
  }

  return (
    <div className="package-cities">
      <ul className="package-cities-list">
        <li className="fw7 f12 list-heading">Cities:</li>
        {
          cities.map((city, i) => <li className={isDealsCard ? 'f12': ''} key={i}>
            { city } { citiesWithDays[city] ? ` (${citiesWithDays[city]}D)` : null }
          </li>)
        }
      </ul>
    </div>
  );
};

const PackageCities = ({ cities, isDealsCard }) => {
  if (cities instanceof Array) {
    return renderPackageCitiesFromArray(cities, isDealsCard);
  } else {
    return renderPackageCitiesFromObject(cities, isDealsCard);
  }
};

PackageCities.propTypes = {
  cities: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  isDealsCard: PropTypes.bool
};

PackageCities.defaultProps = {
  isDealsCard: false
};

export default PackageCities;
