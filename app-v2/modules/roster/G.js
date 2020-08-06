/* eslint-disable */
import styled from '@emotion/styled';

export const GRosterDiv = styled.div({
  // top: '60px',
  width: 'calc(100% - 24px)',
  left: '12px',
  top: '12px',
  zIndex: '9999',
  '& > div': {
    position: 'relative',
  },
  '& .rosterClose': {
    display: 'block',
    width:'24px',
    height:'24px',
    position:'absolute',
    right:'3px',
    top:'3px',
    cursor: 'pointer',
    '&:before, &:after' : {
      content: '\' \'',
      position: 'absolute',
      left: '7px',
      top: '10px',
      width:'12px',
      height:'1px',
      background:'#000',
      transform: 'rotateZ(45deg)',
    },
    '&:after' : {
      transform: 'rotateZ(-45deg)',
    },
  },
  '& .toaster': {
    padding: '12px',
    paddingRight: '30px',
    color: '#333',
    border: '1px solid #333',
    background: '#efefef',
    borderRadius: '4px',
    fontSize: '16px',
    '&.errorRoster': {
      color: '#cb4138',
      borderColor: '#fd5346',
      background: '#fbdbd8',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#cb4138',
      },
    },
    '&.sucessRoster': {
      color: '#268f2a',
      borderColor: '#268f2a',
      background: '#d1f6d2',
      '& .rosterClose:before, & .rosterClose:after' : {
        background:'#268f2a',
      },
    },
    '&.infoRoster': {
      color: '#1a78c2',
      borderColor: '#2196f3',
      background: '#d8e8fb',
      '& .rosterClose:before, & .rosterClose:after' : {
        background:'#1a78c2',
      },
    },
    '&.warningToaster': {
      color: '#3e3e3e',
      borderColor: '#fac22e',
      background: '#fbf2dc',
      '& .rosterClose:before, & .rosterClose:after' : {
        background:'#3e3e3e',
      },
    },
  },
});
