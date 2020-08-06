import styled from '@emotion/styled';

const RadioInput = styled.input({
  '& + label': {
    color: '#3e3e3e',
    ':before': {
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

const DropdownPanel = styled.div({
  display: 'none'
});

const DownArrowSelect = styled.span({
  height: '6px',
  width: '10px',
});

const CancelOption = styled.div({
  '& .Select-placeholder': {
    padding: '12px 13px',
    height: '41px'
  },
  '& .Select-input input': {
    paddingLeft: '13px !important',
    height: '41px'
  },
  '& .Select': {
    height: '44px',
    border: '1px solid #d4d4d4',
    appearance: 'none',
  },
  '& .Select-control': {
    height: '44px'
  },
  '& .Select-value': {
    padding: '10px 13px !important',
    lineHeight: '26px !important'
  }
});

const TextArea = styled.textarea({
  height: '76px',
  resize: 'none',
  border: '1px solid #d9d9d9',
  width: '100%',
  padding: '12px'
});

const CloseIt = styled.button({
  position: 'absolute',
  right: '-30px',
  top: '0',
  width: '24px',
  height: '24px',
  padding: '4px',
  zIndex: '2',
  overflow: 'hidden',
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'inherit',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    transform: 'translate(-50%, -50%)'
  }
};

export {
  RadioInput,
  DropdownPanel,
  DownArrowSelect,
  CancelOption,
  TextArea,
  CloseIt,
  customStyles
};
