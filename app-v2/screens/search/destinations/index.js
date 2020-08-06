import React from 'react';
import PropTypes from 'prop-types';

import config from 'appConfig';
import { LoadMore } from '../loadMore';
import TrendingCard from '../../../modules/trending/TrendingCard';
import ErrorBoundary from '../../../modules/common/ErrorBoundary';

const { searchPageSize: PageSize } = config;

const destinations = ({
  list: destinations,
  isSlider,
  heading,
  subHeading,
  viewAll
}) => {
  return (
    <LoadMore
      pageSize={PageSize}
      isSlider={isSlider}
      name={'Destinations'}
      heading={heading}
      viewAll={viewAll}
      subHeading={subHeading}
    >
      {destinations.map((d, index) => {
        d.numberOfTraveller = d.trips_count;
        d.numberOfAgents = d.agent_count;
        return (
          <div key={index} className={isSlider ? '' : 'mb8'}>
            <ErrorBoundary width="90%" height="200px">
              <TrendingCard {...d} isSlider={isSlider} />
            </ErrorBoundary>
          </div>
        );
      })}
    </LoadMore>
  );
};

destinations.propTypes = {
  list: PropTypes.object.isRequired,
  isSlider: PropTypes.bool,
  title: PropTypes.string,
  destination: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  viewAll: PropTypes.string
};

destinations.defaultProps = {
  isSlider: false
};

export { destinations };
