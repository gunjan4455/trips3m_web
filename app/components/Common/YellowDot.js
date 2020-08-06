import React from 'react';
import PropTypes from 'prop-types';


import { CloseIcon } from 'helpers/Icon/Icon';

class YellowDot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipVisible: false,
      top: 0,
      left: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  offset = (el) => {
    const rect = el.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  }

  handleClick(e) {
    const values = this.offset(e.target);
    this.setState({
      isTooltipVisible: true,
      top: values.top,
      left: values.left
    });
    setTimeout(() => {
      this.setState({
        isTooltipVisible: false,
      });
    }, 4000);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      isTooltipVisible: false,
    });
  };
  getStyleObject = (top, left) => {
    return {
      top: top, left: left
    };
  };

  render() {
    const { hoverData, dotBoxStyle, dotSmallBoxStyle, spinnerStyle } = this.props;
    const tooltipContainerState = this.state.isTooltipVisible ? 'flex' : 'hide';
    return (
      <span className='spinner-outer' style={dotBoxStyle}>
        <span
          className='spinner-yellow relative'
          style={spinnerStyle}
          onClick={this.handleClick}
        > <div className={`tooltipArrow ${tooltipContainerState}`} />
          <span
            className='radius100 absolute-center double-bounce'
            style={dotSmallBoxStyle}
          />
          <span className='radius100 double-bounce1-yellow' />
          <span className='radius100 double-bounce2-yellow' />
        </span>
        <div className={`tooltipContainer ${tooltipContainerState}`}
          style={this.getStyleObject((this.state.top - 54), 15)}>
          <div className='tooltip-theme--white relative'>
            {hoverData}
          </div>
        </div>
      </span>
    );
  }
}

YellowDot.propTypes = {
  hoverData: PropTypes.string.isRequired,
  dotBoxStyle: PropTypes.object,
  dotSmallBoxStyle: PropTypes.object,
  spinnerStyle: PropTypes.object,
};

YellowDot.defaultProps = {
  dotBoxStyle: {},
  dotSmallBoxStyle: {},
  spinnerStyle: {},
};

export default YellowDot;
