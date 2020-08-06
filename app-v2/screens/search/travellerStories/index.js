
import React from 'react';
import PropTypes from 'prop-types';

import TravellerStory from '../../../modules/travellerStory/TravellerStory';
import ErrorBoundary from '../../../modules/common/ErrorBoundary';

const travelerStories = ({ list, heading, subHeading, viewAll}) => {
  return (
    <div className='m8 mt0 radius2'>
      <ErrorBoundary width="90%" height="200px">
        <TravellerStory
          from="search"
          travellerStories={list}
          heading={heading}
          subHeading={subHeading}
          viewAll={viewAll}
        />
      </ErrorBoundary>
    </div>
  );
};

travelerStories.propTypes = {
  list: PropTypes.object.isRequired,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  viewAll: PropTypes.string
};

export { travelerStories };
