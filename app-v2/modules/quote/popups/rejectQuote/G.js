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

export const GRadioInputText = styled(RadioInput)({
  '&:checked + label + textarea': {
    display: 'block'
  }
});

export const GTextArea = styled.textarea({
  display: 'none',
  marginLeft: '30px',
  resize: 'none',
  width: 'calc(100% - 30px)'
});

export const GRejectModalWrapperDiv = styled.div({
  paddingBottom: '100px',
  height: 'calc(100vh)',
});
