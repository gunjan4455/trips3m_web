import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchBar = ({ searchTerm, handleTextChange }) => (<div className="row">
  <div className="large-5 large-centered columns">
    <div className="row collapse">
      <div className="small-10 columns">
        <input
          type="text" placeholder="Search" value={searchTerm}
          onChange={handleTextChange}
        />
      </div>
      <div className="small-2 columns">
        <Link to="/listing" className="button postfix expandbutton">
                      Go
                  </Link>
      </div>
    </div>
  </div>
</div>);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default SearchBar;
