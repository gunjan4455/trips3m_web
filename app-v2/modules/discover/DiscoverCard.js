import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SmallBanner from '../shared/SmallBanner';

const TopCard = styled.div({
  width: '100%',
  '& a': {
    color: '#3E3E3E',
    '&:hover': {
      color: '#3E3E3E',
    },
  },
});

const CardDetails = styled.div({
  border: '1px solid #e4e4e4',
  borderTop: '0 none',
});

const DiscoverCard = ({ link, imgPath, heading, aboutPlace }) => {
  return (
    <TopCard className="clearfix">
      <Link to={link} className="clearfix block">
        <SmallBanner
          imgPath={imgPath}
        />
        <CardDetails className="clearfix p15 sbcw">
          <p className="ellipsis m0 pb8 f16 pfc3 fw9">{heading}</p>
          <p className="ellipsis_three">{aboutPlace}</p>
          <p className="clearfix text-right m0 mt4 pt8"><span className="sfc1 f12 fw7">Read More</span></p>
        </CardDetails>
      </Link>
    </TopCard>
  );
};

DiscoverCard.propTypes = {
  imgPath: PropTypes.string,
  link: PropTypes.string,
  heading: PropTypes.string,
  aboutPlace: PropTypes.string,
};

DiscoverCard.defaultProps = {
  imgPath: '',
  link: '',
  heading: '',
  aboutPlace: '',
};

export default DiscoverCard;
