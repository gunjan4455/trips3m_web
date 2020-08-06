import styled from '@emotion/styled';

export const GTripNavDiv = styled.div({
  cursor: 'pointer',
  '&.active': {
    color: '#20a397',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '-1px',
      left: '0',
      right: '0',
      height: '3px;',
      background: '#20a397'
    },
  }
});

export const GNoTripIconDiv = styled.div({
  width: '98px',
  height: '102px',
  margin: '0 auto'
});

export const GQouteStatusIconSpan = styled.span({
  width: '14px',
  height: '14px'
});

export const GtripCardActionDiv = styled.div({
  width: '200px',
  boxShadow: '0 6px 8px 0 rgba(0, 0, 0, 0.08)',
  display: 'none'
});

export const GCardOptionDiv = styled.div({
  position: 'absolute',
  top: '0',
  right: '0',
  '& .optionTrigger': {
    '& .cardTriggerIcon': {
      width: '4px',
      height: '4px',
      background: '#b2b2b2',
      position: 'relative',
      marginTop: '6px',
      marginBottom: '6px',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: '99',
      '&:before, &:after': {
        content: '""',
        width: '4px',
        height: '4px',
        background: '#b2b2b2',
        position: 'absolute',
        borderRadius: '50%',
        top: '-6px'
      },
      '&:after': {
        top: 'auto',
        bottom: '-6px',
      },
    },
  },
  '&:hover .cardOption': {
    display: 'block'
  }
});
