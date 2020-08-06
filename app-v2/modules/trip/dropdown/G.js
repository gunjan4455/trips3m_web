import styled from '@emotion/styled';

const arrowDownSpan = {
  width: '10px',
  height: '6px',
  display: 'block',
  position: 'absolute',
  right: '15px',
  lineHeight: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'transform 1s',
  '& svg': {
    width: '10px',
    height: '6px',
  }
};

export const GDropdownButton = styled.button({
  padding: '0 15px',
  height: '40px',
  width: '100%',
  textAlign: 'left',
});

export const GTripsListUl = styled.ul({
  margin: '0',
  padding: '0',
  position: 'absolute',
  zIndex: '101',
  width: '100%',
  '& li': {
    listStyle: 'none',
    display: 'block',
    '& a': {
      padding: '8px 15px',
      color: '#3e3e3e',
      display: 'inline-block',
      width: '100%',
      '& p': {
        margin: '0',
      },
      '&:hover, &:active, &:focus': {
        background: '#009688',
        color: '#fff',
        textDecoration: 'none',
      }
    }
  },
  '& li.noTrips': {
    padding: '15px',
  },
});

export const GArrowDownSpan = styled.span(arrowDownSpan);

export const GTripListDiv = styled.div({
  minHeight: '40px',
  '& select': {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    opacity: '1',
    zIndex: '1',
    appearance: 'none'
  },
  '& .arrowDown': {
    transform: 'rotate(180deg)',
  },
  '& .dropDownList': {
    transition: 'max-height 0.2s',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '160px',
    borderTop: '0 none',
  },
  '& .dropdownClosed': {
    maxHeight: '0',
    border: '0 none',
  },
});
