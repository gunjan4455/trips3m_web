/* eslint-disable */
import styled from '@emotion/styled';

export const GCardImg = styled.div({
  height: '140px',
  overflow: 'hidden',
  width: '100%',
  backgroundColor: '#e4e4e4',
  '& img': {
    minWidth: '100%',
    minHeight: '100%',
  },
  '& .hoverReadMore': {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    '& span': {
      color: '#fff',
      border: '1px solid #fff',
      padding: '12px 40px',
      '&:hover': {
        color: '#333',
        border: '1px solid #333',
        background: '#fff',
      },
    },
  },
  '&:hover .hoverReadMore': {
    display: 'flex',
  },
});

export const GCardDataDiv = styled.div({
  paddingTop: '15px',
  paddingBottom: '0',
  borderTop: '0',
  borderBottomRightRadius: '2px',
  borderBottomLeftRadius: '2px',
});

export const GUl = styled.ul({
  margin: '8px 0 0 0',
  height: '26px',
  overflow: 'hidden',
  '& li': {
    fontSize: '12px',
    lineHeight: '12px',
    borderRadius: '20px',
    padding: '5px 10px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0',
    color: '#3e3e3e',
  },
});

export const GCardDataTextDiv = styled.div({
  fontSize: '12px',
  lineHeight: '16px',
  height: '48px',
  overflow: 'hidden',
  marginBottom: '8px',
  '& *': {
    fontSize: '12px !important',
    lineHeight: '16px !important',
    margin: '0',
  },
  '& p': {
    fontSize: '12px !important',
    lineHeight: '16px !important',
    margin: '0',
  }
});

export const GDefaultIconDiv = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  '& svg': {
    width: '83px',
    height: '48px',
  }
});


export const GCardFooterDiv = styled.div({
  justifyContent: 'space-between',
  alignItems: 'center',
});
