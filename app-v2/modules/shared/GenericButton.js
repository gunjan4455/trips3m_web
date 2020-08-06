import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModalHeaderCustom extends Component {
  static propTypes = {
    btnHeading: PropTypes.string,
    btnStyle: PropTypes.object
  };

  static defaultProps = {
    btnHeading: 'Button',
    btnStyle: {}
  };

  render() {
    const { btnStyle, btnHeading } = this.props;
    return (
      <button style={btnStyle} className="flexFull flex alignCenter justifyCenter p5">
        {btnHeading}
      </button>
    );
  }
}
