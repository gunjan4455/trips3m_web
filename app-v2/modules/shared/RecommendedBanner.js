import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';
import TTRecommended from "./TTRecommended";
import { CloseDark } from 'helpers/Icon/Icon';

const GCloseButton = styled.button({
  width: '24px',
  height: '24px',
  '& svg': {
    position: 'absolute',
    width: '8px',
    height: '8px',
  }
});

const RecommendedBanner = ({ onBannerClose }) => (
  <div className="sbcw p15 flex alignCenter spaceBetween">
    <TTRecommended />
    <p className="f12 m0 flexFull ml8 mr8">Recommended by TravelTriangle</p>
    <GCloseButton className="relative flex alignCenter justifyCenter"
      onClick={onBannerClose}><CloseDark />
    </GCloseButton>
  </div>
);

RecommendedBanner.propTypes = {
  onBannerClose : PropTypes.func
};

export default RecommendedBanner;


