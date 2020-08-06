import React from 'react';
import PropTypes from 'prop-types';

import MapInformation from '../../../modules/mapInformation/MapInformation';
import ErrorBoundary from '../../../modules/common/ErrorBoundary';
const quickInfo = ({ list }) => {
  if (list.length > 0) {
    const mapInformation = { ...list[0] };
    mapInformation.title = `${mapInformation.title} Tourism`;
    mapInformation.hideMap = true;
    return (
      <div className='m8 mt0'>
        <ErrorBoundary width="90%" height="200px">
          <MapInformation isExpandedInfo={true} mapInformation={mapInformation} />
        </ErrorBoundary>
      </div>
    );
  } else {
    return null;
  }
};

quickInfo.propTypes = {
  list: PropTypes.array.isRequired
};

export { quickInfo };
