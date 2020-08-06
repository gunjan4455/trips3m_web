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
    '& a': {
      color: '#fff',
      border: '1px solid #fff',
      padding: '12px 40px',
    },
  },
  '&:hover .hoverReadMore': {
    display: 'flex',
  },
});

export const GCardDataDiv = styled.div({
  paddingTop: '16px',
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
