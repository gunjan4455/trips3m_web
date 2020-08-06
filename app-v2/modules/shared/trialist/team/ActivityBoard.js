import React from 'react';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';
import config from 'appConfig';

const ActivityBoardImg = styled.div({
  '& img': {
    display: 'block',
  },
});

const ActivityBoard = () => (
  <div>
    <div>
      <div className="text-center pbc1 p32">
        <h6 className="f24 fw9 sfcw mb8">Outcome-Oriented</h6>
        <p className="f14p m0 sfcw">
          Keeping a check on the output <br /> keeps us on check
        </p>
      </div>
      <ActivityBoardImg>
        <Img
          width={411} height={160}
          ikSrc={`${config.assets.images}/public-product/Trialist/Culture/outcomeOriented1.jpg`}
          alt="culture-tt"
        />
      </ActivityBoardImg>
    </div>
    <div>
      <div className="text-center p32">
        <h6 className="f24 fw9 mb8">Move Fast</h6>
        <p className="f14p m0">
          We are fighting against time, so
          <br /> let’s make the best and improvise
        </p>
      </div>
    </div>
    <div>
      <div className="text-center sbc1 p32">
        <h6 className="f24 fw9 sfcw mb8">Data Driven</h6>
        <p className="f14p m0 sfcw">
          As much as we trust your gut feeling,
          <br />
          we also trust data.
        </p>
      </div>
      <ActivityBoardImg>
        <Img
          width={411} height={293}
          ikSrc={`${config.assets.images}/public-product/Trialist/Culture/dataDriven1.jpg`}
          alt="culture-driven"
        />
      </ActivityBoardImg>
    </div>
    <div>
      <div className="text-center sbc1 p32">
        <h6 className="f24 fw9 sfcw mb8">Transparency</h6>
        <p className="f14p m0 sfcw">
          Tell us whatever it is, however it is,
          <br /> and we will hear you
        </p>
      </div>
      <ActivityBoardImg>
        <Img
          width={411} height={224}
          ikSrc={`${config.assets.images}/public-product/Trialist/Culture/transparency1.jpg`}
          alt="culture-team"
        />
      </ActivityBoardImg>
    </div>
  </div>
);

export default ActivityBoard;
