import React from 'react';
import PropTypes from 'prop-types';

import SidenavMenu from './SidenavMenu';
import BookedNotification from 'components/BookedNotification/BookedNotification';
import LoggedInUser from './LoggedInUser/LoggedInUser';

import {
  USER_ID_COOKIE_KEY,
  setCookie,
  USER_ROLE_COOKIE_KEY,
  TRIP_ID_COOKIE_KEY
} from 'actions/segmentEvents';

import './Sidenav.scss';

class Sidenav extends React.Component {
  constructor() {
    super();
    this._handleLogout = this._handleLogout.bind(this);
  }

  _handleLogout = () => {
    this.props.handleLogout().then(() => {
      setCookie(USER_ID_COOKIE_KEY, '', -1);
      setCookie(USER_ROLE_COOKIE_KEY, '', -1);
      setCookie(TRIP_ID_COOKIE_KEY, '', -1);
      this.props.history.push('/');
    });
  };

  render() {
    const {
      selectHandler, isAuthenticated, userDetails,
      shouldDisplayLatestTrip, pathName, ui, items
    } = this.props;

    return(
      <div className="row row-">
        <LoggedInUser {...userDetails} isAuthenticated={isAuthenticated} />
        <div className="p8 booked-notification-con">
          {(isAuthenticated && shouldDisplayLatestTrip) ?
            <BookedNotification {...userDetails.lastActiveTrip} /> :
            null
          }
        </div>
        <SidenavMenu
          selectHandler={selectHandler}
          isAuthenticated={isAuthenticated}
          handleLogout={this._handleLogout}
          pathName={pathName}
          ui={ui}
          items={items}
        />
      </div>
    );
  }
}

Sidenav.propTypes = {
  selectHandler: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
  userDetails: PropTypes.object,
  handleLogout: PropTypes.func.isRequired,
  shouldDisplayLatestTrip: PropTypes.bool,
  pathName: PropTypes.string.isRequired,
  replaceState: PropTypes.func.isRequired,
  loadUserDetails: PropTypes.func.isRequired,
  ui: PropTypes.object,
  items: PropTypes.object,
  history: PropTypes.object.isRequired,
};

Sidenav.defaultProps = {
  selectHandler: () => {},
  userDetails: {},
  shouldDisplayLatestTrip: false,
  ui: {},
  items: {}
};

export default Sidenav;
