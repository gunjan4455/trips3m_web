import React, { Component } from 'react';
import { Link, withRouter, matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends Component {
  render() {
    const { match } = this.props;
    const isActive = matchPath(match.url, {path: this.props.to, exact: true});
    const className = isActive ? 'active navLinkSpan' : 'navLinkSpan';

    return (
      <span className={className}>
        <Link {...this.props}>
          {this.props.children}
          <span className="line" />
        </Link>
      </span>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  match: PropTypes.object,
};

NavLink.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(NavLink);
