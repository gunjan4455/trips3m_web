import React from 'react';
import styled from '@emotion/styled';

import { DefaultIcon } from 'helpers/Icon/Icon';


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
});

const GHotelTextDiv = styled.div({
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  marginLeft: '60px',
});

const HotelMapTooltip = () => (
    <div className="tooltipCommon relative z2">
      <div className="tooltipBox p0">
        <GHotelTooltipDiv className="sbcw flex spaceBetween alignCenter">
          <GHotelThumbnilDiv className="overflowh absolute hfull sbc4" />
          <GHotelTextDiv className="p8">
            <p className="m0 ellipsis_two">Amarterra Villas Bali Nusa Dua - Mgallery Collection</p>
            <p className="m0 f12 sfc3">Excellent | 9.4</p>
          </GHotelTextDiv>

        </GHotelTooltipDiv>
        <span className="tooltipArrow" />
      </div>
      <GHotelMapToolTipButton className="recomendedIcon relative cursorP">
        <DefaultIcon />
      </GHotelMapToolTipButton>
    </div>
);

export default HotelMapTooltip;
