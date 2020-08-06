import React from 'react';
import PropTypes from 'prop-types';

import TravelerReviewsNew from '../../../../app/components/Review/TravelerReviewsNew';
import { UserIntent } from '../parser';
import ErrorBoundary from '../../../modules/common/ErrorBoundary';

const testimonials = ({ list, destinationsTemplate, userIntent }) => {
  const title = (
    <span>
      Traveler reviews{' '}
      {userIntent !== UserIntent.DestinationDetail ? (
        <span>for {destinationsTemplate} </span>
      ) : null}
    </span>
  );

  return (
    <div className='m8 mt0 radius2'>
      <ErrorBoundary width="90%" height="200px">
        <TravelerReviewsNew reviews={list} title={title} />
      </ErrorBoundary>
    </div>
  );
};

testimonials.propTypes = {
  list: PropTypes.object.isRequired,
  destinationsTemplate: PropTypes.object,
  userIntent: PropTypes.string
};

export {testimonials};
