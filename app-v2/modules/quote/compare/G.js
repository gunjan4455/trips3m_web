import styled from '@emotion/styled';

export const GModalFullViewContainerDiv = styled.div({
  height: 'calc(100vh - 48px)',
  overflow: 'auto'
});

export const GAgentCompayImgDiv = styled.div({
  width: '64px',
  height: '64px',
  alignItems: 'center',
  display: 'flex'
});

export const GAgentCompayImgSmallDiv = styled.div({
  width: '40px',
  height: '40px',
  alignItems: 'center',
  display: 'flex'
});

export const GAgentCompanyNameDiv = styled.div({
  border: '1px solid #b2b2b2',
  borderRadius: '4px',
  padding: '8px',
  minHeight: '48px',
  maxHeight: '48px',
  overflow: 'hidden'
});

export const GCompareCardContentDiv = styled.div({
  '&>div:first-child': {
    borderRight: '1px solid #efefef'
  },
  '& + .cardViewLess svg': {
    transform: 'rotateZ(180deg)'
  },
  '& .contentList': {
    wordBreak: 'break-word'
  },
  '& .contentList:last-child': {
    marginBottom: '0 !important',
    paddingBottom: '0 !important'
  }
});

export const GCardViewActionDiv = styled.div({
  '& .cardViewLess svg': {
    transform: 'rotateZ(180deg)'
  }
});

export const GHotelRatingDiv = styled.div({
  width: '48px',
  border: '1px solid #d4d4d4'
});

export const GItineraryTimeLineDiv = styled.div({
  position: 'relative',
  paddingLeft: '24px',
  paddingBottom: '24px',
  wordBreak: 'break-word',
  '&:before': {
    content: '""',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#ff3e39',
    position: 'absolute',
    top: '0',
    left: '4px',
    zIndex: '2'
  },
  '&:after': {
    content: '""',
    width: '1px',
    height: '100%',
    background: '#d4d4d4',
    position: 'absolute',
    top: '0',
    left: '7px',
    zIndex: '1'
  },
  '&:last-child': {
    paddingBottom: '0',
    '&:after': {
      display: 'none'
    },
  },
});
