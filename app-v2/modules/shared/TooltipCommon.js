import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from '@emotion/styled';

const GTooltipBubbleDiv = styled.div({
  position: 'absolute',
  right: '-20px',
  width: '190px',
  padding: '8px',
  backgroundColor: '#000',
  borderRadius: '2px',
  bottom: 'calc(100% + 6px)',
  '&::after': {
    content: '\' \'',
    position: 'absolute',
    bottom: '-6px',
    right: '27px',
    borderTop: '6px solid #000',
    borderRight: '5px solid transparent',
    borderLeft: '5px solid transparent',
  }
});

class TooltipCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTooltip: false
    };
    this.showTooltip = this.showTooltip.bind(this);
  }

  showTooltip () {
    this.setState({displayTooltip: true});
    setTimeout(() => {
      this.setState({ displayTooltip: false });
    }, 1500);
  }

  render() {
    const message = this.props.message;
    return (
      <span className='relative' onClick={this.showTooltip}>
        {this.state.displayTooltip &&
          <GTooltipBubbleDiv>
            <div className='sfcw f12'>{message}</div>
          </GTooltipBubbleDiv>
        }
        <span className='relative'>
          {this.props.children}
        </span>
      </span>
    );
  }
}

TooltipCommon.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default TooltipCommon;
