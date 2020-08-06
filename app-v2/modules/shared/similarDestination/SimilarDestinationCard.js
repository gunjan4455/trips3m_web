import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const TopCard = styled.div({
  width: '100%',
  '& a': {
    color: '#3E3E3E',
    '&:hover': {
      color: '#3E3E3E',
    },
  },
});

const ImgContainer = styled.div({
  width: '100%',
  height: '140px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover .onhoverCard': {
    display: 'flex',
  }
});

const Img = styled.img({
  width: 'auto',
  minHeight: '100%',
  minWidth: '100%',
});

const CardDetails = styled.div({
  border: '0 none',
});


const SimilarDestinationCard = ({ link, image, location, destination }) => {
  return (
    <TopCard className="clearfix">
      <Link to={link} className="clearfix block">
        <ImgContainer className="clearfix relative">
          <Img src={image} alt={location} />
        </ImgContainer>
        <CardDetails className="clearfix p15 sbcw">
          <p className="ellipsis m0 f16 pfc3 fw9">{location}</p>
        </CardDetails>
      </Link>
    </TopCard>
  );
};

SimilarDestinationCard.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  destination: PropTypes.string,
};

SimilarDestinationCard.defaultProps = {
  link: '',
  image: '',
  location: '',
  destination: '',
};

export default SimilarDestinationCard;
