import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import Heading from '../Heading';
import Img from 'components/Common/Img';

const GSimilarDestiContainer = styled.div({
  height: '90px',
  '& .similarDestinationDivOuter': {
    overflowX: 'auto',
    height: '94px',
  },
  '& .similarDestinationDiv': {
    marginRight: '15px',
    '&:last-child': {
      marginRight: '0',
    }
  }
});

const GImgDiv = styled.div({
  width: '60px',
  height: '60px',
  '& img': {
    minHeight: '100%',
    maxWidth: 'none',
  },
});

const Index = ({ similarDestination, destination, routeParams }) => {
  return (
    similarDestination.length ?
      <div className="clearfix p15 sbcw">
        <Heading title={routeParams.city ? "Similar Destinations" : `Cities in ${destination}`} />
        <GSimilarDestiContainer className="flex">
          <div className="swiper-full-width">
          <div className="similarDestinationDivOuter flex">
            {
              similarDestination.map((item, i) =>
                <Link key={i} to={item.link} className="similarDestinationDiv flex alignCenter justifyCenter flexDColumn">
                  <GImgDiv className="overflowh sbc5 mb8 flex alignCenter justifyCenter radius100">
                    <Img width={60} height={60} src={item.image} ikSrc={item.imagekitUrl} alt={item.alt} />
                  </GImgDiv>
                  <h3 className="f12 pfc3 m0 fw4">{item.location}</h3>
                </Link>
              )
            }
          </div>
          </div>
        </GSimilarDestiContainer>
      </div>
      : null
  );
};

Index.propTypes = {
  similarDestination: PropTypes.array,
  destination: PropTypes.string,
  location: PropTypes.object,
  routeParams: PropTypes.object.isRequired
};

Index.defaultProps = {
  similarDestination: [],
  destination: ''
};

export default Index;
