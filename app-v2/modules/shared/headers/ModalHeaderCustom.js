import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const GHeaderDiv = styled.div({
  padding: '12px 15px 12px 48px',
  borderBottom: '1px solid #EFEFEF'
});

export default class ModalHeaderCustom extends Component {
  static propTypes = {
    heading: PropTypes.string,
  };

  static defaultProps = {
    heading: ''
  };

  render() {
    const { heading } = this.props;
    return (
      <GHeaderDiv className="fixed sbcw t0 l0 r0 z5 wfull">
        <h2 className="ellipsis f16a m0 fw9 pfc3">{heading}</h2>
      </GHeaderDiv>
    );
  }
}
