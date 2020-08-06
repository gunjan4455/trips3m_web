import React from 'react';
import PropTypes from 'prop-types';
import  './LoadMorePackages.scss';

const LoadMorePackages = ({ packagesRemaining, loadMorePackages, currentPage, title, loading }) => {
  const handleLoadMore = pageNumber => () => {
    loadMorePackages(pageNumber);
  };
  return (
    <div className={(packagesRemaining > 0) ? '' : 'hide'}>
      <button
        onClick={handleLoadMore(currentPage + 1)}
        className="button-load-more-full flex alignCenter justifyCenter"
        role="button"
      >
        {loading ?
          <p className="loading-dots">
            <span className="loading-dot-1 loading-dot-dark" />
            <span className="loading-dot-2 loading-dot-dark" />
            <span className="loading-dot-3 loading-dot-dark" />
          </p>
          :
          `Load More (${packagesRemaining} ${title})`
        }
      </button>
    </div>
  );
};
LoadMorePackages.propTypes = {
  packagesRemaining: PropTypes.number.isRequired,
  loadMorePackages: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default LoadMorePackages;
