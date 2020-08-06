import React from 'react';

const SearchBar = () => (
  <div>
    <div className="pl8 pr8 pb8 ampSearch">
      <form className="amp-header-search"
            method="get"
            action="/search_results"
            target="_blank">
        <fieldset>
          <input className="searchBox sbcw" type="search"
                 name="q"
                 placeholder="Destination, duration, budget, theme... "
                 required />
          <input type="submit" value="" className="searchClick" />
        </fieldset>
      </form>

    </div>
  </div>
);

export default SearchBar;

