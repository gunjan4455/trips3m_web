import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';
import { capitalizeFirstLetter } from 'utils/parsers';

const GRatingDiv = styled.div({
  minWidth: '24px',
  height: '16px',
  padding: '2px 4px',
});

class OverAllRating extends Component {
  render() {
    const { overallRating, isLarge, extraStyle } = this.props;
    return (
      <div>
        <div className="flex alignCenter">
          <div className="text-right mr4">
            <h6 style={{ fontSize: isLarge ? '16px' : '10px' }} className="m0 fw4">
              <span style={extraStyle}>{capitalizeFirstLetter(overallRating.text)}</span>
            </h6>
          </div>
          <GRatingDiv className="radius2 overflowh p4 flex alignCenter justifyCenter sbc3">
            <span className="f10 fw4 sfcw">{overallRating.rating}</span>
          </GRatingDiv>
        </div>
      </div>
    );
  }
}

export default OverAllRating;

OverAllRating.defaultProps = {
  isLarge: false,
};

OverAllRating.propTypes = {
  overallRating: PropTypes.object,
  isLarge: PropTypes.bool,
  extraStyle: PropTypes.object
};
