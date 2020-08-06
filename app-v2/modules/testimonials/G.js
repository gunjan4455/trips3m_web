
/* eslint-disable */
import styled from '@emotion/styled';

export const GTestimonialsBannerDiv = styled.div({
  height: '400px',
  '& .bannerImg': {
    height: '400px',
    '& img': {
      minWidth: '100%',
      minHeight: '100%',
    },
    '&:after': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.2)',
      content: '\' \'',
    }
  },
  '& .bannerData': {
    padding: '0',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .bannerDataRight': {
      padding: '80px',
    },
  },
});

export const GLargeHeading = styled.h2({
  fontSize: '56px',
  lineHeight: '64px',
});

export const GFeedbackTypeP = styled.p({
  width: '115px',
});

export const GRatingCountP = styled.p({
  width: '80px',
});

export const GRatingRowDiv = styled.div({
  marginBottom: '4px',
  '&:last-child': {
    marginBottom: '0',
  }
});

export const GRatingBarDiv = styled.div({
  height: '4px',
  width: '192px',
  '& .actualRatings': {
    height: '4px',
    width: 'auto',
  }
});

export const GTestimonialCardDiv = styled.div({
  borderBottom: '1px solid #d4d4d4',
  '&:last-child': {
    borderBottom: '0 none',
  }
});

export const GUserDiv = styled.div({
  width: '240px',
});

