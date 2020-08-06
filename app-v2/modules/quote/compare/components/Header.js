import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Back2IconWhite } from 'helpers/Icon/Icon';

class Header extends Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="pbc1 p8">
        <div className="p4 flex">
          <a
            onClick={this.props.goBack}
            className="mr8 input-24 p4 iblock at_qcp_backBtn"
          >
            <Back2IconWhite />
          </a>
          <p className="f16 flex alignCenter fw7 sfcw flexFull ellipsis at_qcp_headingTop">
            Compare Quotes
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
