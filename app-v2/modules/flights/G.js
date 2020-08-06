import styled from '@emotion/styled';

export const ThankYouContainer = styled.div({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.7)',
  zIndex: '1002',

  '& .ThankYouContainerMain': {
    width: '500px',
    maxWidth: '100%',

    '& .thanksIcon': {
      height: '64px',
      position: 'relative',
      '& svg': {
        width: '100%',
        height: '100%',
      },
    }
  }
});
