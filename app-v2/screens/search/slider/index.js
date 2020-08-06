import React from 'react';
import PropTypes from 'prop-types';

import SliderWithTitle from '../../../modules/shared/SliderWithTitle';
import ErrorBoundary from '../../../modules/common/ErrorBoundary';

const slider = ({ list, title, heading, viewAll }) => {
  const destinationSchemes = list.map(scheme => {
    return {...scheme, 'openInNewTab': true };
  });
  const data = { destinationSchemes, title, heading, viewAll };

  return (
    <div className='m8 mt0'>
      <div className='clearfix p15 sbcw'>
        <ErrorBoundary width="90%" height="200px">
          <SliderWithTitle data={data} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

slider.propTypes = {
  list: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  viewAll: PropTypes.string
};

export {slider};
