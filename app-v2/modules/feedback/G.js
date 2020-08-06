import styled from '@emotion/styled';

export const GNpsDiv = styled.div({
  '& span': {
    flex: 1,
    '&:nth-child(7) label, &:nth-child(8) label': {
      border: '1px solid #fac22e',
      background: '#fac22e',
      borderRightColor: 'transparent',
    },
    '&:nth-child(9) label': {
      border: '1px solid #4caf50',
      background: '#4caf50',
      borderRightColor: 'transparent',
    },
    '&:nth-child(10) label': {
      border: '1px solid #4caf50',
      background: '#4caf50',
      borderRightColor: '#4caf50',
    },
  },
  '& span label': {
    background: '#fe5246',
    border: '1px solid #fe5246',
    color: '#ffffff',
    minHeight: '32px',
    fontSize: '14px',
    lineHeight: '32px',
    textAlign: 'center',
    borderRightColor: 'transparent',
  },
  '&.selected span:nth-child(7).npsActive + span label, &.selected span:nth-child(8).npsActive + span label': {
    borderLeftColor: '#fac22e', 
  },
  '&.selected span:nth-child(9).npsActive + span label': {
    borderLeftColor: '#4caf50', 
  },
  '&.selected span.npsActive + span label': {
    borderLeftColor: '#fe5246', 
  },
  '&.selected span label': {
    background: '#ffffff',
    color: '#3e3e3e',
    borderColor: '#b2b2b2',
    borderRightColor: 'transparent', 
  },
  '&.selected span:nth-child(10) label': {
    borderRightColor: '#b2b2b2',
  },
  '&.selected span .radioNps:checked + label': {
    background: '#fe5246',
    borderColor: '#fe5246',
    color: '#ffffff',
  },
  '&.selected span:nth-child(7) .radioNps:checked + label, &.selected span:nth-child(8) .radioNps:checked + label': {
    background: '#fac22e',
    borderColor: '#fac22e',
  },
  '&.selected span:nth-child(9) .radioNps:checked + label, &.selected span:nth-child(10) .radioNps:checked + label': {
    background: '#4caf50',
    borderColor: '#4caf50',
  }
});

export const GFlexBtn = styled.div({
  flex: '0 0 50%',
  '&:nth-child(odd)': {
    paddingRight: '4px',
  },
  '&:nth-child(even)': {
    paddingLeft: '4px',
  },
  '& .radio-common + label': {
    backgroundColor: '#fff',
    border: '1px solid #d4d4d4',
    height: '40px',
  },
  '& .radio-common:checked + label': {
    color: '#fff',
    backgroundColor: '#009688',
    border: '1px solid #009688',
  },
});

export const GFlexStar = styled.div({
  '& .checkbox-star': {
    display: 'none',
  },
  '& .checkbox-star:checked + label svg path': {
    fill: '#fac22e',
    stroke: '#fac22e',
  },
});

export const NpsInputRadio = styled.input({
  display: 'none',
  ':checked + label': {
    background: '#20a397',
    color: '#fff'
  }
});

export const NpsRadioRating = styled.label({
  cursor: 'pointer',
  maxHeight: '32px',
  width: '100%',
  textAlign: 'center',
});

export const NpsRadio = styled.label({
  fontWeight: '900',
  cursor: 'pointer',
  maxWidth: '55px',
  width: '100%',
  paddingTop: '13px',
  paddingBottom: '13px',
  textAlign: 'center',
  marginRight: '2px'
});
