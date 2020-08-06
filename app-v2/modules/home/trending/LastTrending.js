import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LastTrending = ({ destCount, pkgCount, lastCardLink }) => (
  <Link to={lastCardLink}>
      <span className="radius100 sbc1 f32 sfcw flex alignCenter justifyCenter" style={{width: '72px', height: '72px'}}>+</span>
      <span className="f14 pfc3 mt8 block overflowh text-center">View All</span>
  </Link>
);
  
LastTrending.propTypes = {
  destCount: PropTypes.string.isRequired,
  pkgCount: PropTypes.string.isRequired,
  lastCardLink: PropTypes.string.isRequired,
};

LastTrending.defaultProps = {
  pkgCount: '',
  destCount: '',
  lastCardLink: '',
};

export default LastTrending;
