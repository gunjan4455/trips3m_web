import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Ul = styled.ul({
  margin: '0',
  padding: '0',
  '& li': {
    marginRight: '3px',
    position: 'relative',
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '24px',
    padding: '3px 15px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0',
    '&:after': {
      position: 'absolute',
      right: '0',
      bottom: '0',
      color: '#24b9f8',
      content: '',
      display: 'block',
    },
    '&:last-child:after': {
      display: 'none',
    },
  },
});

const CityTags = ({ labels }) => {
  return (
    <div className="clearfix">
      <Ul>
        { labels && labels.map((label, index) =>
          <li key={index}>{label}</li>
        )}
      </Ul>
    </div>
  );
};

CityTags.propTypes = {
  labels: PropTypes.array
};

CityTags.defaultProps = {
  labels: []
};

export default CityTags;
