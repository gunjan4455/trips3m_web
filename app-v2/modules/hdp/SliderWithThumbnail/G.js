/* eslint-disable */
import styled from '@emotion/styled';

export const GSwiperContainerDiv = styled.div({
  '& .sliderHotel:hover + .testimonialsSlider': {
    opacity: '0.7',
  },
  '& .swiper-slide': {
    width: '58px',
  },
  '& .swiper-button-next': {
    display: 'flex',
    width: '32px',
    height: '32px',
    borderRadius: '2px',
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(191, 190, 190, 0.12)',
    zIndex: 1,
    boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.2)',
    right: '5px',
    '&:before, &:after': {
      borderRight: '1px solid #3E3E3E',
      content: '\' \'',
      display: 'block',
      height: '9px',
      marginTop: '-6px',
      position: 'absolute',
      transform: 'rotate(135deg)',
      right: '14px',
      top: '50%',
      width: '0',
    },
    '&:after': {
      marginTop: '0',
      transform: 'rotate(45deg)',
    }
  },
  '& .swiper-button-prev': {
    display: 'flex',
    width: '32px',
    height: '32px',
    borderRadius: '2px',
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(191, 190, 190, 0.12)',
    zIndex: 1,
    boxShadow: '-1px 1px 2px 0 rgba(0, 0, 0, 0.2)',
    left: '5px',
    '&:before, &:after': {
      borderRight: '1px solid #3E3E3E',
      content: '\' \'',
      display: 'block',
      height: '9px',
      marginTop: '-6px',
      position: 'absolute',
      transform: 'rotate(45deg)',
      left: '14px',
      top: '50%',
      width: '0',
    },
    '&:after': {
      marginTop: '0',
      transform: 'rotate(135deg)',
    }
  },
});

export const GThumbnailDiv = styled.div({
  width: '58px',
  height: '48px',
  margin: '0',
  cursor: 'pointer',
  '& img': {
    minWidth: '100%',
    minHeight: '100%',
  }
});

export const GSwiperItemDiv = styled.div({
  height: '200px',
  overflow: 'hidden',
  '& img': {
    minWidth: '100%',
    minHeight: '100%',
  }
});

export const GSmallSliderDiv = styled.div({
  width: '250px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#fff',
  },
  '& .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets': {
    left: '15px',
    right: 'auto',
    width: 'auto',
    '& .swiper-pagination-bullet': {
      width: '7px',
      height: '7px',
      border: '1px solid #b2b2b2',
      background: 'transparent',
      opacity: '1',
    },
    '& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
      background: '#b2b2b2',
    },
  },
});

export const GImageCreditsDiv = styled.div({
  background: 'rgba(0,0,0,.7)',
  maxWidth: '100%',
  '& a': {
    '&:hover': {
      color: '#fff',
    }
  }
});
