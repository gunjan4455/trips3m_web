import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Notification from 'modules/notifications';
import BurgerMenu from 'modules/header/BurgerMenu';

class NavBar extends Component {
  static propTypes = {
    currentTripId: PropTypes.number.isRequired,
    trackSegment: PropTypes.func.isRequired
  };

  render() {
    const NotificationContainer = Notification.container;
    return (
      <div className="pbc5 p8">
        <div className="pt4 pb4 pr8 pl8 flex wfull justifyCenter alignCenter">
          <BurgerMenu />
          <p className="pl15 f16 flex alignCenter fw7 sfcw flexFull ellipsis">
            My Trip
          </p>
          <NotificationContainer />
        </div>
      </div>
    );
  }
}

export default NavBar;
