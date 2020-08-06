import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TTRecommended from 'modules/shared/TTRecommended';
import ToolTip from './ToolTip';

import styled from '@emotion/styled';

const GRecommendedDiv = styled.div({
  minWidth: '32px',
  maxWidth: '32px',
  height: '32px',
  '& .recomendedIcon': {
    width: '32px',
    height: '32px',
    '& svg': {
      width: '100%',
    },
  },
});

class Recommended extends Component {
  constructor(props) {
    super(props);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this);
    this.state = {
      isMouseOver: false
    };
  }

  _handleMouseOver(){
    this.setState({ isMouseOver: true });
  }
  _handleMouseOut(){
    this.setState({ isMouseOver: false });
  }

  render() {
    const { ttRecommended } = this.props;
    return (ttRecommended ?
      <GRecommendedDiv onMouseOver={this._handleMouseOver} onMouseOut={this._handleMouseOut}>
        <div className="tooltipCommon z2">
          <ToolTip
            toolTipText="Recommended by TravelTriangle"
            boxStyle={{ right: 0, left: 'auto', transform: 'none' }}
            arrowStyle={{ right: '5px', left: 'auto', transform: 'none' }}
          />
          <div className="recomendedIcon relative cursorP">
            <TTRecommended />
          </div>
        </div>
      </GRecommendedDiv> : null
    );
  }
}


Recommended.propTypes = {
  ttRecommended: PropTypes.bool
};

export default Recommended;

