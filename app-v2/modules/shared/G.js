/* eslint-disable */
import styled from '@emotion/styled';

/* FacebookLogin */
export const GFacebookLoginLink = styled.a({
  background: '#3c5193',
  height: '48px',
  borderRadius: '2px',
  textAlign: 'center',
  color: '#FFFFFF',
  fontSize: '14px',
  fontWeight: '700',
  width: '100%',
  position: 'relative',
  padding: '15px 0',
  '&:hover': {
    color: '#fff'
  },
  ' .facebook-icon svg': {
    height: '25px'
  }
});

/* FacebookSignDNE */
export const GFacebookSignInDiv = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: '100%',
  right: '0',
  top: '0',
  position: 'absolute',
  background: 'linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 16%,rgba(0,0,0,0.65) 28%,rgba(0,0,0,0.66) 30%,rgba(0,0,0,1) 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#a6000000",GradientType=1 )',
});

export const GLockIconSpan = styled.span({
  width: '14px',
  height: '14px',
  '& svg': {
    width: '14px',
    height: '14px',
  }
});

/* PackageIncExc */
export const GInclusionContainerDiv = styled.div({
  display: 'flex',
  '& .packageIncExc:first-child': {
    marginLeft: '0',
  },
  '& .packageIncExc:last-child': {
    marginRight: '0',
  },
  '& .packageIncExc': {
    margin: '0 8px',
  },
  '&:before, &:after': {
    display: 'none',
  },
  '& .inclusionName':{
    lineHeight: '12px',
    fontSize: '10px',
    paddingTop: '5px',
    wordWrap: 'break-word',
    color: '#3e3e3e',
    display: 'block',
    textAlign: 'center',
  },
  '& .not-included': {
    opacity: '0.4',
    filter: 'grayscale(100%)',
  }
});

export const GInclusionIconSpan = styled.span({
  width: '24px',
  display: 'block',
  margin: '0 auto',
  height: '24px',
  position: 'relative',
  '& svg':{
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'auto',
    maxWidth: '100%',
    height: '20px',
    position: 'absolute',
    bottom: '0',
    display: 'block',
    top: 'auto',
  },
});

export const GRequestSubmittedDiv = styled.div({
  width: '115px',
  height: '85px',
  margin: '0 auto',
  '& .phone-box': {
    width: '115px',
    height: '85px',
    '& svg': {
      width: '115px',
      height: '85px',
    },
  },
  '& .thankyou-tick': {
    right: '0px',
  },
});

export const GLoaderContainerDiv = styled.div({
  '& .loaderLine': {
    height: '12px',
    margin: '10px 0 0 0',
    width: '70%',
  },
  '& .loaderMain': {
    display: 'flex',
    overflow: 'hidden',
    '& .loaderMainCard': {

    },
    '& .hiddenCard': {
      display: 'none',
    }
  },
  '& .loaderLineDark': {
    height: '10px',
    maxWidth: '70%',
  },
  '& .loaderData': {
    width: '100%',
    maxWidth: '320px',
  },

});

export const GLoaderCardSpan = styled.span({
  height: '139px',
  display: 'block',
});

export const GLoaderBoxSpan =  styled.span({
  width: '40px',
  height: '40px',
  minWidth: '40px',
});

export const GLoaderLineDiv = styled.div({
  justifyContent: 'flex-end',
  flexDirection: 'column',
});

export const GErrorBodyDiv = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const GBusIconDiv = styled.div({
  width: '164px',
  height: '87px',
  margin: '0 auto',
  '& svg': {
    width: '164px',
    height: '87px',
  }
});

export const GAppliedDiv = styled.div({
  fontSize: '12px !important',
  lineHeight: '16px',
  padding: '2px 8px',
});

export const GAppliedSmallDiv = styled.div({
  fontSize: '10px !important',
  lineHeight: '10px',
  padding: '3px 6px',
});
