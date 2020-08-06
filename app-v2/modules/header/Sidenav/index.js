import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  isLoggedIn as isAuthenticated,
  user,
  shouldDisplayLatestTrip
} from 'reducers/auth';
import { logout, load as loadUserDetails } from 'actions/auth';
import Sidenav from './Sidenav';

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  userDetails: user(state),
  shouldDisplayLatestTrip: shouldDisplayLatestTrip(state),
  pathName: (state.routing && state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname) || '',
  ui: state.topNavigation && state.topNavigation.ui,
  items: state.topNavigation && state.topNavigation.items,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
  loadUserDetails: params => dispatch(loadUserDetails(params)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidenav));
