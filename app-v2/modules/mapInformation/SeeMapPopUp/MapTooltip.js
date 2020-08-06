import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { TTIcon } from 'helpers/Icon/Icon';

const GHotelMapToolTipButton = styled.button({
  width: '24px',
  height: '24px',
});

const GHotelTooltipDiv = styled.div({
  maxWidth: '214px',
  width: '214px',
});

const GHotelThumbnilDiv = styled.div({
  minWidth: '60px',
  maxWidth: '60px',
  '& svg': {
    width: '40px',
    height: '40px'
  }
});

const GHotelTextDiv = styled.div({
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  marginLeft: '60px',
});

const MapTooltip = ({ name, info }) => (
  <div className="tooltipCommon relative block">
    <div className="tooltipBox block p0">
      <GHotelTooltipDiv className="sbcw flex spaceBetween alignCenter">
        <GHotelThumbnilDiv className="overflowh absolute flex alignCenter justifyCenter hfull sbc4">
          <TTIcon />
        </GHotelThumbnilDiv>
        <GHotelTextDiv className="p8">
          <p className="m0 ellipsis_two">{name}</p>
          <p className="m0 f12 sfc3">{info.text} | {info.rating}</p>
        </GHotelTextDiv>
      </GHotelTooltipDiv>
      <span className="tooltipArrow" />
    </div>
  </div>
);

export default MapTooltip;

MapTooltip.propTypes = {
  name: PropTypes.string,
  info: PropTypes.object
};

MapTooltip.defaultProps = {
  name: 'traveltriangle',
  info: {
    text: 'traveltriangle',
    rating: 4
  }
};
