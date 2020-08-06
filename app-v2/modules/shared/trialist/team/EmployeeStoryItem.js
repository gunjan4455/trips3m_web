import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';

const TeamBox = styled.div({
  textAlign: 'left',
  whiteSpace: 'normal',
  height: '240px',
});

const PicImg = styled.div({
  borderRadius: '100%',
  overflow: 'hidden',
  width: '60px',
  height: '60px',
});

const PicImgContainer = styled.div({
  position: 'absolute',
  bottom: '26px',
});

const EmployeeStoryItem = ({ eName, eTitle, eTeam, eImage, eFeedback, eDesignation, eImgAlt }) => {
  return (
    <TeamBox className="p15 border radius2 clearfix">
      <p className="f12 m0 text-left pfc1 fw9">{eTitle}</p>
      <p className="f12 m0 mt8 pfc3 text-left">{eFeedback}</p>
      <PicImgContainer className="pl0 pr0 pt15 col-xs-12">
        <div className="col-xs-3 pl0 pr0">
          <PicImg>
            <Img width={60} height={60} ikSrc={eImage} alt={eImgAlt} />
          </PicImg>
        </div>
        <div className="col-xs-9 pt8 pl8 pr0">
          <p className="f14 m0 fw9 pb2 pfc3">{eName}</p>
          <p className="f12 pfc4 m0">
            {eTeam} - {eDesignation}
          </p>
        </div>
      </PicImgContainer>
    </TeamBox>
  );
};

export default EmployeeStoryItem;

EmployeeStoryItem.propTypes = {
  eName: PropTypes.string.isRequired,
  eTitle: PropTypes.string.isRequired,
  eTeam: PropTypes.string.isRequired,
  eImage: PropTypes.string.isRequired,
  eFeedback: PropTypes.string.isRequired,
  eDesignation: PropTypes.string.isRequired,
  eImgAlt: PropTypes.string.isRequired,
};
