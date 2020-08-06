import React from 'react';
import styled from '@emotion/styled';

import {
  IllusTraveler,
  IllusDestinations,
  IllusAgent,
  TravelerMain,
} from 'helpers/Icon/Icon';

const NumbersBox = styled.div({
  display: 'flex',
  flex: 1,
  flexWrap: 'wrap',
});

const NumbersBoxMain = styled.div({
  minWidth: '140px',
  maxWidth: '140px',
  display: 'inline-block',
  textAlign: 'center',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  margin: '0 auto 24px',
});

const NumbersBoxMainImg = styled.div({
  margin: '0 auto 10px',
  width: '100%',
  maxHeight: '70px',
  '& svg': {
    height: '70px',
  },
});

const AboutInNumbers = () => (
  <NumbersBox className="container pr0 pl0">
    <NumbersBoxMain>
      <NumbersBoxMainImg className="overflowh relative">
        <IllusTraveler />
      </NumbersBoxMainImg>
      <h6 className="f16 fw9 mb4">20 Lakh+</h6>
      <p className="f14p m0">Travelers monthly visiting us</p>
    </NumbersBoxMain>

    <NumbersBoxMain>
      <NumbersBoxMainImg className="overflowh relative">
        <IllusAgent />
      </NumbersBoxMainImg>
      <h6 className="f16 fw9 mb4">650+</h6>
      <p className="f14p m0">Network of expert travel agents</p>
    </NumbersBoxMain>

    <NumbersBoxMain>
      <NumbersBoxMainImg className="overflowh relative">
        <IllusDestinations />
      </NumbersBoxMainImg>
      <h6 className="f16 fw9 mb4">65+</h6>
      <p className="f14p m0">Destinations served worldwide</p>
    </NumbersBoxMain>

    <NumbersBoxMain>
      <NumbersBoxMainImg className="overflowh relative">
        <TravelerMain />
      </NumbersBoxMainImg>
      <h6 className="f16 fw9 mb4">97%</h6>
      <p className="f14p m0">Positive quotient by travelers</p>
    </NumbersBoxMain>
  </NumbersBox>
);

export default AboutInNumbers;
