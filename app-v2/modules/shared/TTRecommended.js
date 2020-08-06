import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TTRecommendedIcon } from 'helpers/Icon/Icon';

import styled from '@emotion/styled';

const GRecommendedIconDiv = styled.div({
  minWidth: '26px',
  maxWidth: '26px',
  height: '26px',
  margin: '0 auto',
  '& svg': {
    width: '100%',
  }
});

const TTRecommended = () => (
  <GRecommendedIconDiv className="relative"><TTRecommendedIcon /></GRecommendedIconDiv>
);

TTRecommended.propTypes = {};

TTRecommended.defaultProps = {};

export default TTRecommended;

