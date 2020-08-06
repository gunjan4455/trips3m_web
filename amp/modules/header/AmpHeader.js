import React from 'react';

import AmpBurgerMenu from './AmpBurgerMenu';
import SearchBar from 'amp/modules/searchBar/SearchBar';

const AmpHeader = () => {
  return (
    <header className="pbc1">
      <div className="header-con header-con-shadow wfull clearfix">
        <div className="burgerMenu-amp">
          <AmpBurgerMenu />
        </div>
        <div className="tt-logo"><a href="/">
        </a></div>
        <div className="hide">
        </div>
      </div>
      <SearchBar />
    </header>
  );
};

export default AmpHeader;
