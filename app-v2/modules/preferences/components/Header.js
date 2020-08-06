import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Back2IconWhite } from 'helpers/Icon/Icon';
import { rtripPath } from 'helpers/urlHelpers';

class Header extends Component {
  static propTypes = {
    currentTripId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    goBack: PropTypes.func.isRequired
  };

  render() {

    return (
      <div className='pbc1 flex alignCenter pl15 pr15 pt8 pb8'>
        <div className='pt4 pb4 flex'>
          <span className='input-24 block mr15' onClick={this.props.goBack}><Back2IconWhite /></span>
          <p className='f16 fw7 m0 sfcw'>{`Booking ID #${this.props.currentTripId}`}</p>
        </div>
      </div>
    );
  }
}

export default Header;
