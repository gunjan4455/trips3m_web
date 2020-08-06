import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CloseIconWhite } from 'helpers/Icon/Icon';

class Header extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    return (
      <div className='pbc1 flex alignCenter pl15 pr15 pt8 pb8 fixed wfull'>
        <div className='pt4 pb4 flex alignCenter'>
          <Link to={'/'}>
            <span className='input-24 block mr15'><CloseIconWhite /></span>
          </Link>
          <p className='f16 fw7 m0 sfcw'>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Header;
