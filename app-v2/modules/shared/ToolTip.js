import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ToolTip extends Component {
  static propTypes = {
    toolTipText: PropTypes.string,
    boxStyle: PropTypes.object,
    arrowStyle: PropTypes.object
  };

  static defaultProps = {
    toolTipText: 'TravelTriangle Recommended.',
    boxStyle: {},
    arrowStyle: {}
  };

  render() {
    const { toolTipText, arrowStyle, boxStyle } = this.props;
    return (
      <div className="tooltipBox" style={boxStyle}>
        {toolTipText}
        <span className="tooltipArrow" style={arrowStyle} />
      </div>
    );
  }
}

export default ToolTip;

