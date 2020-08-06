/* eslint-disable */
import styled from '@emotion/styled';

export const GCardImg = styled.div({
  height: '140px',
  overflow: 'hidden',
  width: '100%',
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
    },
  },
  '&:hover .hoverReadMore': {
    display: 'flex',
  },
  '&:before' : {
    content: '""',
    background: '-moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.21) 35%, rgb(0,0,0) 100%)',
    background: '-webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.21) 35%,rgb(0,0,0) 100%)',
    background: 'linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.21) 35%,rgb(0,0,0) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00ffffff", endColorstr="#99000000",GradientType=0 )',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});

export const GCardDataDiv = styled.div({
  paddingTop: '15px',
  paddingBottom: '0'
});

export const GDateLinkDiv = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export const GHeadingH6 = styled.h6({
  fontSize: '14px',
  lineHeight: '20px',
  height: '40px',
});

export const GContentP = styled.p({
  '& span': {
    fontStyle: 'normal',
  }
});
