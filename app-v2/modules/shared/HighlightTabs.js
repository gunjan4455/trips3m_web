import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const GInclusionsUl = styled.ul({
  whiteSpace: 'nowrap',
  overflowX: 'scroll',
  '& li': {
    marginRight: '4px',
    marginBottom: '4px',
    fontWeight: '700',
    height: '32px',
    fontSize: '12px',
    lineHeight: '32px',
    padding: '0 15px',
    listStyle: 'none',
    display: 'inline-block',
    backgroundColor: '#CCEAE7',
  }
});

const HighlightTabs = ({ tagList }) => (
  <div className="swiper-full-width">
    <GInclusionsUl className="block">
      {
        tagList
          .filter(t => t.label)
          .map((tag, index) =>
          <li key={index} className="radius20">{tag.label}</li>
        )
      }
    </GInclusionsUl>
  </div>
);

export default HighlightTabs;

HighlightTabs.propTypes = {
  tagList: PropTypes.array.isRequired
};
