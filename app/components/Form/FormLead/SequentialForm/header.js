import React from 'react';

import { CallUs, ChatIcon, CloseIcon } from 'helpers/Icon/Icon';

const Header = () => (
  <div className="form-header-fixed pl0 pr0 row row- sbcw pt15 pb15">
    <div className="col-xs-9 pl48 pr0">
      <button type="button" className="cross-common">
        <CloseIcon />
      </button>
      <p className="f16 ellipsis">Your Preferences</p>
    </div>
    <div className="col-xs-3 pl0">
      <span className="header-logo-right fright ml15">
        <a href="">
          <ChatIcon className="absolute-center wfull" />
        </a>
      </span>
      <span className="header-logo-right fright">
        <a href="tel:18001235555">
          <CallUs className="absolute-center wfull" />
        </a>
      </span>
    </div>
  </div>
);

export default Header;
