import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: 'Edit Preference'
  };

  render() {
    return (
      <div className="pt8 pb8 pl15 pr15 flex bb wfull fixed z5 sbcw">
        <div className="pt4 pb4 flex">
          <p className="f16 flex alignCenter fw7 flexFull ellipsis ml24">
            {this.props.text}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
