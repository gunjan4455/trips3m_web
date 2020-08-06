import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { TTlogo, TTlogoSecondary } from 'helpers/Icon/Icon';
import BurgerMenu from './BurgerMenu';
import './Header.scss';

const HeaderHome = ({ isTransparent }) => (
  <header className="wfull z10 relative">
    <div className={isTransparent ? 'header-con-transparent' : 'header-con'}>
      <div className="header-con-first flex spaceBetween">
        <BurgerMenu />
        <div className="tt-logo flexFull text-center">
          <meta itemProp="url" content="https://traveltriangle.com" />
          <meta itemProp="logo" content="https://traveltriangle.com/pp_static/pp_new_logo.jpg" />
          <Link className="tt-logo-container" to="/">
            {isTransparent ? <TTlogoSecondary /> : <TTlogo /> }
          </Link>
        </div>
        <div>
          <input type="checkbox" id="AddToHomeButton" className="add-to-home-button" />
          <label htmlFor="AddToHomeButton">
            <div className="add-to-screen">
              <span className="add-to-home" />
            </div>
            <div className="add-to-home-info">
              <div className="transparent-cut" />
              <div className="col-xs-12 pt64 mt64 pl24 ml8 pr24 mr24 pr15 pb64">
                <p className="f14 fw7 sfcw text-left">Add <span className="text-capitalize f18">TravelTriangle </span> to</p>
                <p className="f16 sfcw text-left fwb pt5">Homescreen for quick access</p>
                <p className="f16 fw3 sfcw pt24 relative tap-tag-addtohome"> Tap <span className="addtohomeoverlay iblock"> <span className="add-to-home iblock absolute t5 l9" /> </span> to bring up your browser menu
                  and select <span className="fw7">{'"Add to home screen"'}</span> to
                  pin the TravelTriangle web app </p>
                <div className="btn-filled-pri mt15 ripple"><div className="wave" />Got It</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </header>
  );

export default HeaderHome;

HeaderHome.propTypes = {
  isTransparent: PropTypes.bool
};

HeaderHome.defaultProps = {
  isTransparent: false
};
