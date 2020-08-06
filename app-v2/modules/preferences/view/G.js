import styled from '@emotion/styled';

export const GPreferenceDiv = styled.div({
  minWidth: '50%',
  maxWidth: '50%',
  ':nth-child(odd)':{
    paddingRight : '12px'
  },
  ':nth-child(even)':{
    paddingLeft : '12px'
  },
  '& p': {
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0'
  },
  '& p:first-child': {
    color: '#b2b2b2'
  },
  '& p:last-child': {
    color: '#3E3E3E'
  }
});
