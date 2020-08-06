import React from 'react';
import PropTypes from 'prop-types';

import SearchResultItem from './SearchResultItem';
import parsedHeadings from './parsedHeadings';

const SearchResultsGroup = ({ groupKey, results, closeSearchResults }) => (
  <div className="clearfix">
    <h3 className="f12 fw9 m0 p8 block sbc7 text-capitalize">
      {parsedHeadings[groupKey.toLowerCase()]}
    </h3>
    {
      results
        .slice(0, 5)
        .map((item, i) => <SearchResultItem closeSearchResults={closeSearchResults}
          key={i} item={item} />)
    }
  </div>
);


SearchResultsGroup.propTypes = {
  groupKey: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  closeSearchResults: PropTypes.func.isRequired
};

export default SearchResultsGroup;
