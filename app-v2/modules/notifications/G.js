import styled from '@emotion/styled';

export const GNotificationBell = styled.span({
  width: '24px',
  height: '24px',
  display: 'inline-block',
  position: 'relative',
});

export const GNotificationBellIconDiv = styled.div({
  width: '18px',
  height: '18px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '& svg': {
    width: '100%',
  }
});

export const GNotificationCount = styled.span({
  display: 'block',
  position: 'absolute',
  background: '#fe5246',
  borderRadius: '100%',
  top: '-5px',
  right: '-5px',
  textAlign: 'center',
  minWidth: '15px',
  height: '15px',
  lineHeight: '15px',
  color: '#ffffff',
  fontSize: '10px',
});

export const GNotification = styled.div({
  position: 'relative',
});

export const GNotificationData = styled.div({
  padding: '15px 15px 15px 70px',
  background: '#fff',
  wordWrap: 'break-word',
  textAlign: 'left',
  '&:hover': {
    background: '#fff',
  }
}, props => ({
  background: props.isViewed ? '#ffffff' : '#ffffff',
}));

export const GNotificationListDiv = styled.div({
  height: '100%',
  overflow: 'auto',
});

export const GNotificationImg = styled.div({
  left: '15px',
  minWidth: '50px',
  maxWidth: '50px',
  borderRadius: '100%',
  overflow: 'hidden',
  '& .agent-user-name': {
    backgroundColor : '#2196F3',
    textTransform: 'uppercase',
    fontWeight : '700',
    color : '#fff',
  },
  '& .agent-user-img': {
    backgroundColor : '#2196F3',
  }

});
