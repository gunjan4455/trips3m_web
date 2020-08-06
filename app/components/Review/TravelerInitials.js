import React from 'react';
import './TravelerImg.scss';
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
  const splitName = name.split(' ');
  if (splitName.length >= 2) {
    return `${splitName[0][0]}${splitName[1][0]}`;
  }
  return `${name[0]}${name[1]}`;
}
const TravelerInitials = ({ userName }) => (
  <GUserIniDiv className="traveler-initials radius100 text-uppercase">
    {userName && getInitialsFromName(userName)}
  </GUserIniDiv>
);

TravelerInitials.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default TravelerInitials;
