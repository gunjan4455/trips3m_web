import styled from '@emotion/styled';

export const PdmContainer = styled.div({
  width: '100%',
  height: 'auto',
  background: '#ffffff',
  boxShadow: '0 -2px 20px 0 rgba(0, 0, 0, 0.2)',
  padding: '8px 8px',
  '& ul': {
    padding: '0',
    margin: '0',
    '& li': {
      listStyle: 'none',
      display: 'block',
      marginBottom: '8px',
      '&:last-child': {
        marginBottom: '0',
      },
      '& a': {
        borderRadius: '30px',
        border: 'solid 1px #009688',
        display: 'block',
        color: '#009688',
        padding: '4px',
        textAlign: 'center',
        fontWeight: '400',
        textDecoration: 'none',
        '&:hover': {
          color: '#009688',
        },
      },
    },
  },
});
