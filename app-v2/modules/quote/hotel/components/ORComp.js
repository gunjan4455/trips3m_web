import React from 'react';
import styled from '@emotion/styled';

const OrDiv = styled.div({
  height: 2,
  background: 'radial-gradient(#f0f0f0,#ffffff)'
});

const ORComp = () => (
  <div className="row relative text-center pt5 pb24 mt8 mb8">
    <OrDiv className="absolute-center-v wfull">
      <span className="f14p p8 or-comp border radius100 pfc3 iblock sbcw absolute-center">OR</span>
    </OrDiv>
  </div>
);

export default ORComp;
