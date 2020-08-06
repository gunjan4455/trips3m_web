import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const GUserIniDiv = styled.div({
  minWidth: '60px',
  maxWidth: '60px',
  height: '60px',
  display: 'inline-block',
  background: '#ccc',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    minHeight: '100%',
  }
});

function getInitialsFromName(name) {
  if (!name) {
    return 'FL';
  }

  const splitName = name.trim().split(' ');
  if (splitName.length >= 2) {
    return `${splitName[0][0]}${splitName[1][0]}`;
  }
  return `${name[0]}${name[1]}`;
}

const TravelerInitials = ({ name }) => (
  <GUserIniDiv className="reviewer-image radius100 overflowh pbc1 absolute l0 sfcw">
    <span className="absolute-center text-uppercase f24 fw9 at-author_intials">
      {getInitialsFromName(name)}
    </span>
  </GUserIniDiv>
);

TravelerInitials.propTypes = {
  name: PropTypes.string.isRequired
};

export default TravelerInitials;
