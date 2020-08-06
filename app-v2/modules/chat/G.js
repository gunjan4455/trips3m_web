import styled from '@emotion/styled';

export const GChatMessagesDiv = styled.div({
  minHeight: 'calc(100% - 108px)',
  top: '58px',
});

export const GSpan = styled.span({
  background: '#3e3e3e',
  padding: '12px',
  fontSize: '14px',
  lineHeight: '14px',
  color: '#fff',
  position: 'absolute',
  right: '0',
  width: '140px',
  top: 'calc(100% + 4px)',
  display: 'none',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  '&:before': {
    position: 'absolute',
    right: '20px',
    top: '-4px',
    width: '0',
    height: '0',
    content: '\' \'',
    borderBottom: '4px solid #3e3e3e',
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
  },
});

export const GButton = styled.button({
  opacity: '0.8',
  height: '22px',
  '&:hover': {
    opacity: '1',
  },
  '&:hover .onHoverInfo': {
    display: 'block',
  }
});

export const GKeyBoard = styled.button({
  border: '0 none',
  width: '36px',
  height: '30px',
  zIndex: '2',
  '& > span': {
    width: '36px',
    height: '30px',
    '& svg': {
      width: '26px !important',
      height: '13px !important',
    },
  }
});

export const GPdmContainer = styled.div({
  position: 'absolute',
  bottom: '100%',
  left: '0',
  right: '0',
});

export const GLoadMoreBtn = styled.button({
  width: '80px',
  margin: '0 auto',
  display: 'inherit'
});

export const GNoChat = styled.div({
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '100%',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& p': {
    margin: '0',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#999999',
  },
});

export const GIncomingMsg = styled.div({
  ' .agent-user-name': {
    left: 0
  }
});

export const GOutgoingMsg = styled.div({
  ' .agent-user-name': {
    right: 0
  },
  '& .user-message': {
    order: '-1'
  }
});

export const GChatTextP = styled.p({
  wordBreak: 'break-all'
});
