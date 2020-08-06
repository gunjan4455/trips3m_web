import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTrendingData, isTrendingError } from 'reducers/listing/trending';
import TrendingDestinations from './TrendingDestinations';

const TrendingContainer = ({ trendingData, isLoaded }) => {
  if (!isLoaded || !trendingData.destinations) {
    return null;
  }

  const { title, isTrending, destinations } = trendingData;
  return (
    <div className="clearfix pt48 pb48">
      {
        trendingData.destinations.length ?
          <TrendingDestinations
            heading={title}
            showContact={false}
            data={destinations}
            showTrending={isTrending}
          /> : null
      }
    </div>
  );
};

TrendingContainer.propTypes = {
  trendingData: PropTypes.object.isRequired,
  isLoaded: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    trendingData: getTrendingData(state),
    isLoaded: isTrendingError(state),
  })
)(TrendingContainer);
