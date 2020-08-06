import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Back2IconWhite } from 'helpers/Icon/Icon';

class NavBar extends Component {
  static propTypes = {
    goBack: PropTypes.func,
    trackSegment: PropTypes.func
  };

  static defaultProps = {
    goBack: () => {},
    trackSegment: () => {}
  };

  render() {
    return (
      <div className="pbc5 p8">
        <div className="pt4 pb4 pr8 pl8 flex wfull justifyCenter alignCenter">
          <button
            onClick={this.props.goBack}
            className="input-24 block mr15 at_goback"
          >
            <Back2IconWhite />
          </button>
          <p className="f16 flex alignCenter fw7 sfcw flexFull ellipsis">
            All Trips
          </p>
        </div>
      </div>
    );
  }
}

export default NavBar;
