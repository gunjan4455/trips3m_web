import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Img from 'components/Common/Img';

const TopCard = styled.div({
  width: '100%',
});

const GImageContainerDiv = styled.div({
  width: '100%',
  height: '80px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const GImg = styled(Img)({
  width: '100%',
  minHeight: '100%',
});

const TopInCard = ({ link, image, imagekitUrl, location, bestTime }) => {
  const renderChild = () => (
    <>
      <GImageContainerDiv className="sbc4">
        <GImg width={320} height={80} src={image} ikSrc={imagekitUrl} alt={location} />
      </GImageContainerDiv>
      <p className="ellipsis m0 pt8 f14 pfc3 fw9">{location}</p>
      <p className="m0 f12 pfc4 break-word">Best time to visit: {bestTime}</p>
    </>
  );
  return (
    <TopCard className="clearfix">
      {
        __SERVER__ ?
          <a href={link} className="block">
            {renderChild()}
          </a> :
          <Link to={link} className="block">
            {renderChild()}
          </Link>
      }
    </TopCard>
  );
};

TopInCard.propTypes = {
  image: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
  link: PropTypes.string,
  location: PropTypes.string,
  bestTime: PropTypes.string,
};

TopInCard.defaultProps = {
  link: '',
  location: 'North India',
  bestTime: 'Sep - Mar',
};

export default TopInCard;
