import styled from '@emotion/styled';

const RadioInput = styled.input({
  '& + label': {
    color: '#3e3e3e',
    ':before' : {
      borderColor: '#3e3e3e'
    }
  },
  '&:checked + label + .input-dropdown-box': {
    display: 'block'
  },
  '&:checked + label + .showText + textarea': {
    display: 'block'
  }
});

export const RadioInputText = styled(RadioInput)({
  '&:checked + label + textarea': {
    display: 'block'
  }
});

export const TextArea = styled.textarea({
  display: 'none',
  marginLeft: '30px',
  resize: 'none',
  width: 'calc(100% - 30px)'
});

export const ReqCallBackPopUp = styled.div({
  width: '100%',
  ' .request-call-icon': {
    width: '120px',
    height: '88.64px',
    position: 'relative',
    '& svg': {
      width: '120px',
      height: '88.64px'
    }
  }
});

export const IconSpan = styled.span({
  width: '62.68px',
  height: '41.96px',
  position: 'relative',
  '& svg': {
    width: '62px',
    height: '41.96px',
  }
});
