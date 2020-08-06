import React from 'react';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';
import config from 'appConfig';

const FoundersThoughtBox = styled.div({
  background: '#f1f1f1',
  height: '480px',
  overflow: 'hidden',
});

const VisionText = styled.p({
  lineHeight: '38px',
  width: '86%',
});

const VisionTextContainer = styled.div({
  ':before': {
    content: "' '",
    width: '0',
    height: '0',
    borderRight: '30px solid #20a397',
    borderTop: '30px solid transparent',
    borderBottom: '0px solid transparent',
    top: '15px',
    left: '-30px',
    position: 'absolute',
  },
});

const FoundersThoughts = () => (
  <FoundersThoughtBox className="relative row row- clearfix">
    <div className="col-md-7 p0">
      <Img
        ikSrc={`${config.assets.images}/public-product/Trialist/Founders/Founder_s-A.jpg`}
        alt="travel triangle"
        className="wfull"
      />
    </div>
    <VisionTextContainer className="absolute r0 t0 b0 pbc1 col-md-5 p48">
      <VisionText className="sfcw m0 fw3 absolute-center f20">
        Business acumen & marketing proficiency of Sankalp Agarwal, innovative
        streak & problem solving ability of Sanchit Garg and technological
        expertise & customer service prowess of Prabhat Gupta, collectively
        turned out to be a great foundation stone on which TravelTriangle stands
        today. Here, Sankalp Agarwal leads fundraising, business growth &
        marketing. Sanchit Garg heads the product development division. Prabhat
        Gupta solves real life problems through technology and heads the R&D
        division to enhance customer experience.
      </VisionText>
    </VisionTextContainer>
  </FoundersThoughtBox>
);

export default FoundersThoughts;
