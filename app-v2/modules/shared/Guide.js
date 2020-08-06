import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Overview from './Overview';
import Heading from './Heading';

const ShowMoreContainer = styled.div({
  marginTop: '-8px',
});

const Guide = ({ guide }) => {
  return (
    <div className="clearfix sbcw p15">
      <Heading {...guide} type="main-heading"/>
      <Overview {...guide}/>
    </div>
  );
};

Guide.propTypes = {
  guide: PropTypes.object,
};

Guide.defaultProps = {
  guide: {}
};

export default Guide;
