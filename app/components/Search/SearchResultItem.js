import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const SearchResult = styled.div({
  '& a:hover': {
    background: '#f2f2f2',
  }
});

const SearchResultItem = ({ item, closeSearchResults }) => (
  <SearchResult className="clearfix">
    <Link to={item.href} onClick={closeSearchResults}
      className="pfc3 f14 block m0 p15">{item.title}
      {
        item.searchPrice ? <span className="f14p fw9 fright pl24 sfc3">₹ {item.searchPrice}/-</span> : null
      }
      {
        item.nights ? <span className="f12 fwb fright mt2">{item.days} Days & {item.nights} {item.nights > 1 ? 'Nights' : 'Night'} </span> : null
      }
    </Link>
  </SearchResult>
);

SearchResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  closeSearchResults: PropTypes.func.isRequired
};

export default SearchResultItem;
