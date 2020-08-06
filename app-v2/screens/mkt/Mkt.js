import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll/modules';
import styled from '@emotion/styled';

import { setCookie } from 'helpers/FormDataFormatter';
import { hidePopup, initializeExitIntent, showPopUp } from 'helpers/exitIntent';
import common from 'app-v2/common';
import styles from './mkt.cm.scss';
import config from 'appConfig';

const HeroImageContainerDiv = styled.div(props => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '70%',
  background: `url(${props.url}) no-repeat`,
  backgroundSize: 'cover',
}));

const StickyButton = styled.div({
  '&.makeSticky': {
    position: 'fixed',
    zIndex: '1',
    background: '#EDF0F3',
    marginBottom: '0 !important',
    padding: '10px 0',
    bottom: '0'
  }
});

export default class Mkt extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    mkt: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = {
    stickyButton: {
      makeButtonSticky: false,
      topBoundary: null,
      bottomBoundary: null
    }
  };

  constructor(props) {
    super(props);
    this.setDestinationCookie(props);
  }

  scrollToFormHandler = () => {

    window.scrollFormTimer = function(){
      window.scrollTimer = setTimeout(() => {
        const sequentialForm = document.querySelector('.main-form-container');
        const formMessageBanner = document.querySelector('.hiddendiv');
        formMessageBanner.style.display = 'none';
      }, 5000);};

    clearTimeout(window.scrollTimer);
    const sequentialForm = document.querySelector('.main-form-container');
    const formMessageBanner = document.querySelector('.hiddendiv');
    if (sequentialForm) {
      animateScroll.scrollTo(sequentialForm.offsetTop + 20);
      formMessageBanner.style.display = 'block';
      window.scrollFormTimer();
    }
  };

  setDestinationCookie = (props) => {
    setCookie('cb_dt', props.mkt.destination || '');
  };

  render() {
    const { makeButtonSticky } = this.state;
    const { mkt, match: { params } } = this.props;

    const Section1 = mkt.section1 ? common['MktSection1'] : null;
    const Section3 = mkt.section3 ? common['MktSection3'] : null;
    const Section4 = mkt.section4 ? common['MktSection4'] : null;
    const Testimonials = mkt.testimonials ? common['MktTestimonials'] : null;
    const Marketplace = common['MktMarketplace'];
    const Agents = mkt.agents ? common['MktAgents'] : null;
    const HowItWorks = common['MktHowItWorks'];
    const Faq = mkt.faqs ? common['MktFaq'] : null;
    const Conclusion = mkt.conclusion ? common['MktConclusion'] : null;
    const buttonText = 'Plan My Holidays';
    const Footer = common['MktFooter'];

    let heroImageUrl = 'https://img.traveltriangle.com/stage/attachments/pictures/895056/original/Honeymoon-3.jpg';

    if (mkt.section1 && mkt.section1.hero && mkt.section1.hero.url) {
      heroImageUrl = mkt.section1.hero.url;
    }

    return (
      <div className="container">

        <div className="p15 pl8 pr8 pb8 sbcw top-section row relative">
          <div className={`${styles.topSectionMask} ${styles.topSectionMaskDest}`} />
          <HeroImageContainerDiv url={`${config.assets.images}/${heroImageUrl}?tr=w-480,h-600`} />
          {Section1 ? <Section1 slug={params.page} /> : null}
        </div>

        <div className="row relative sbcw" id="toBottom">
          <div id="bg-mask-ei" className="bg-mask-ei" onClick={e => hidePopup(e)} />

          { /* We don't need Section2 on MS. Section2 is just a dummy component */}

          {Section3 ? <Section3 /> : null}
          {Section4 ? <Section4 /> : null}
          {Testimonials ? <Testimonials /> : null}
          <div id="reactExitIntentImage" className="mkt-mob-exit-intent mb2 p0 col-xs-12 relative" onClick={showPopUp} />
          {Marketplace ? <Marketplace /> : null}
          {Agents ? <Agents /> : null}
          {HowItWorks ? <HowItWorks /> : null}
          {Faq ? <Faq /> : null}
          {Conclusion ? <Conclusion /> : null}

          <StickyButton className={`col-xs-12 pl0 pr0 pb8 sbcw ${(makeButtonSticky) ? 'makeSticky' : ''}`}
                        id="sticky-button">
            <div className="pl8 pr8 z9">
              <button type="button"
                      onClick={this.scrollToFormHandler}
                      className={`text-capitalize text-center f16 btn-filled-pri-large wfull ${styles.buttonTop}`}
              >{buttonText}</button>
            </div>
          </StickyButton>

        </div>

        <Footer />
      </div>
    );
  }

  componentDidMount() {
    setTimeout(initializeExitIntent, 5000);

    const sectionCards = document.querySelectorAll('.section-cards');
    Array.from(sectionCards).forEach(swiper => {
      swiper.addEventListener('click', () => {
        this.scrollToFormHandler();
      });
    });
    this.calculateBoundaryValues();
    window.addEventListener('scroll', this.handleScroll);
  }

  calculateBoundaryValues = () => {
    const { stickyButton } = this.state;
    const formContainer = document.querySelector('.main-form-container');
    const stickyButtonElement = document.querySelector('#sticky-button');
    if (stickyButtonElement && formContainer) {
      const topBoundary = formContainer.offsetHeight + formContainer.offsetTop;
      const bottomBoundary = stickyButtonElement.offsetTop;

      if (stickyButton.topBoundary !== topBoundary && stickyButton.bottomBoundary !== bottomBoundary) {
        this.setState({
          stickyButton: {
            makeButtonSticky: false,
            topBoundary: topBoundary,
            bottomBoundary: bottomBoundary
          }
        });
      }
    }
  };


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { stickyButton } = this.state;
    const { topBoundary, bottomBoundary } = stickyButton;
    this.calculateBoundaryValues();

    if (window && topBoundary && bottomBoundary) {
      const scrollY = window.scrollY;
      if (scrollY >= topBoundary && scrollY <= bottomBoundary) {
        this.setState({ makeButtonSticky: true });
      } else {
        this.setState({ makeButtonSticky: false });
      }
    }
  };
}
