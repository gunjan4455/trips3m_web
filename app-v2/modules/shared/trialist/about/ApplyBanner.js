import React from 'react';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';
import config from 'appConfig';

const BannerApplyBox = styled.div({
  height: '360px',
  position: 'relative',
  textAlign: 'center',
  width: '100%',
  overflow: 'hidden',
});

const BlackLayer = styled.div({
  background: 'rgba(0,0,0,0.5)',
});

const ApplyBanner = () => (
  <BannerApplyBox className="clearfix relative">
    <Img
      width={411} height={411}
      ikSrc={`${config.assets.images}/public-product/Trialist/Banner/applyBanner1.jpg`}
      className="absolute-center-img"
      alt="tt banner"
    />
    <BlackLayer className="absolute z1 t0 l0 hfull wfull" />
    <div className="absolute z2 t0 l0 hfull wfull">
      <div className="absolute-center wfull">
        <h3 className="f24 m0 pb15 fw9 mb32 sfcw">
          Want to change the <br /> Holiday industry?
        </h3>
        <a className="btn-filled-pri pl48 pr48 overflowh ripple at_applytoday" href="/career">
          Apply Today
        </a>
      </div>
    </div>
  </BannerApplyBox>
);

export default ApplyBanner;
