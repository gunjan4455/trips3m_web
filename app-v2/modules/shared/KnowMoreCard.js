import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const GKnowMoreDiv = styled.div({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#E8F4FD',
});

const KnowMoreCard = ({ link }) => (
  <div>
    <GKnowMoreDiv className="wfull text-center radius2 p15">
      <Link to={`/${link}`} className="f16 fw7 flexFull m0 sfc1">Book a complete holiday package. Know More</Link>
    </GKnowMoreDiv>
  </div>
);

export default KnowMoreCard;

KnowMoreCard.propTypes = {
  link: PropTypes.string
};

