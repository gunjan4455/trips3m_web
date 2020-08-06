import React from 'react';
import PackageCard from '../../../modules/packages/PackageCard';
import { LoadMore } from '../loadMore';
import PropTypes from 'prop-types';
import config from 'appConfig';
import ErrorBoundary from '../../../modules/common/ErrorBoundary';

const { searchPageSize: PageSize } = config;

const packages = ({
  list: packages,
  isSlider,
  heading,
  subHeading,
  viewAll
}) => {
  return (
    <LoadMore
      pageSize={PageSize}
      isSlider={isSlider}
      viewAll={viewAll}
      heading={heading}
      name={'Packages'}
      subHeading={subHeading}
    >
      {packages.map((packageData, index) => {
        return (
          <div key={index} className={isSlider ? '' : 'mb8'}>
            <div key={index}>
              <ErrorBoundary width='90%' height='200px'>
                <PackageCard
                  {...packageData}
                  isSlider={isSlider}
                  isSearchResult={true}
                  showCTA={false}
                  price={packageData.priceTotal}
                />
              </ErrorBoundary>
            </div>
          </div>
        );
      })}
    </LoadMore>
  );
};

packages.propTypes = {
  list: PropTypes.object.isRequired,
  isSlider: PropTypes.bool,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  destination: PropTypes.string,
  viewAll: PropTypes.string
};

packages.defaultProps = {
  isSlider: true
};

export { packages };
