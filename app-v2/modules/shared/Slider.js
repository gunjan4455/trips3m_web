import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Swiper from 'app/components/Swiper/Swiper';
import Loader from './loaders/LoaderCard';

const Controls = styled.div({
  position: 'absolute',
  top: '50%',
  zIndex: 1,
  transform: 'translateY(-50%)',
  left: '-2%',
  right: '-2%',
  height: '1px',
  width: '104%',
});

const ButtonBox = styled.button({
  display: 'flex',
  width: '32px',
  height: '32px',
  borderRadius: '2px',
  background: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid rgba(191, 190, 190, 0.12)',
  zIndex: 1,
}, props => ({
  boxShadow: props.next ?
    '1px 1px 2px 0 rgba(0, 0, 0, 0.2)' :
    '-1px 1px 2px 0 rgba(0, 0, 0, 0.2)'
  ,
}));

const IconPrevNext = styled.span({
  width: '11px',
  height: '18px',
  display: 'block',
  svg: {
    display: 'block',
  }
});

class Slider extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    isFetching: PropTypes.bool,
    ssrAnimation: PropTypes.oneOfType([
      PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }),
      PropTypes.bool,
    ]),
    pictureIndex: PropTypes.number,
    hideControls: PropTypes.bool,
    loadOnDocumentReady: PropTypes.bool,
    swiperProps: PropTypes.object,
  };

  static defaultProps = {
    type: 'BUTTONS',
    isFetching: false,
    ssrAnimation: false,
    pictureIndex: 0,
    hideControls: false,
    loadOnDocumentReady: true,
    swiperProps: {},
  };

  constructor(props) {
    super(props);
    this.swiper = null;

    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.onSliderReachEnd = this.onSliderReachEnd.bind(this);
    this.onSliderReachBeginning = this.onSliderReachBeginning.bind(this);
    this.onSlideMoveEnd = this.onSlideMoveEnd.bind(this);

    const swiperDefaultParams = {
      initialSlide: props.pictureIndex,
      spaceBetween: 16,
      slidesPerView: 'auto',
      runCallbacksOnInit: true
    };

    const swiperButtonParams = {
      on: {
        reachEnd: this.onSliderReachEnd,
        reachBeginning: this.onSliderReachBeginning,
        slideNextTransitionEnd: this.onSlideMoveEnd,
        slidePrevTransitionEnd: this.onSlideMoveEnd
      },
      ...props.swiperProps,
    };

    const swiperDotsParams = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: true
      },
      ...props.swiperProps
    };

    const swiperParams = props.type === 'BUTTONS' ?
      { ...swiperDefaultParams, ...swiperButtonParams } :
      { ...swiperDefaultParams, ...swiperDotsParams };

    this.initialState = {
      isPrevControlEnabled: false,
      isNextControlEnabled: true,
      totalSlides: props.children && props.children.length,
      swiperParams,
    };

    this.state = { ...this.initialState };
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isFetching && prevProps.isFetching) {
      this.resetState();
    }
  }

  onSliderReachEnd() {
    setTimeout(() => {
      if (this.swiper && this.swiper.isBeginning && this.swiper.isEnd) {
        this.setState(() => ({
          isNextControlEnabled: false,
          isPrevControlEnabled: false,
        }));
      } else {
        this.setState(() => ({
          isPrevControlEnabled: true,
          isNextControlEnabled: false
        }));
      }
    }, 0);
  }

  onSliderReachBeginning() {
    setTimeout(() => {
      if (this.swiper && this.swiper.isBeginning && this.swiper.isEnd) {
        this.setState(() => ({
          isNextControlEnabled: false,
          isPrevControlEnabled: false,
        }));
      } else {
        this.setState(() => ({
          isPrevControlEnabled: false,
          isNextControlEnabled: true
        }));
      }
    }, 0);
  }

  onSlideMoveEnd() {
    if (this.swiper) {
      const { isBeginning, isEnd } = this.swiper;
      if (isBeginning && isEnd) {
        this.setState(() => ({
          isNextControlEnabled: false,
          isPrevControlEnabled: false,
        }));
      } else {
        this.setState(() => ({
          isNextControlEnabled: !isEnd,
          isPrevControlEnabled: !isBeginning,
        }));
      }
    }
  }

  resetState() {
    this.setState(this.initialState);
  }

  goNext() {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  goPrev() {
    if (this.swiper) {
      this.swiper.slidePrev();
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        {
          this.props.isFetching ?
            <Loader /> :
            <Swiper swiperRef={swiper => this.swiper = swiper}
                    {...this.state.swiperParams}
                    ssrAnimation={this.props.ssrAnimation}
                    loadOnDocumentReady={this.props.loadOnDocumentReady}
            >{this.props.children}</Swiper>
        }

        {
          this.props.type === 'BUTTONS' ?
            !this.props.isFetching && this.props.children && this.props.children.length > 0 ?
              <Controls className="button-box">
                {
                  this.state.isPrevControlEnabled && !this.props.hideControls ?
                    <ButtonBox onClick={this.goPrev} prev
                               className="absolute l0 absolute-center-v at_prev_slider slider-prev">
                      <IconPrevNext className="absolute-center arrowContainer">
                        <span className="arrowleftSlider arrowRightSlider" />
                      </IconPrevNext>
                    </ButtonBox> :
                    null
                }
                {
                  this.state.isNextControlEnabled && !this.props.hideControls ?
                    <ButtonBox onClick={this.goNext} next
                               className="absolute r0 absolute-center-v at_next_slider slider-next">
                      <IconPrevNext className="absolute-center">
                        <span className="arrowleftSlider" />
                      </IconPrevNext>
                    </ButtonBox> :
                    null
                }
              </Controls> :
              null :
            <div className="swiper-pagination" />
        }
      </div>
    );
  }
}

export default Slider;
