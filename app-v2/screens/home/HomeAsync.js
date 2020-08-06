import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {ScrollPercentage} from 'react-scroll-percentage';
import Sensor from 'react-visibility-sensor';

import HeaderHome from 'modules/header/HeaderHome';
import BookedNotification from 'components/BookedNotification/BookedNotification';
import HomeBanner from 'components/Home/HomeBanner';
import TrendingDestinations from 'modules/home/trending/TrendingDestinations';
import { data as trendingData } from 'modules/home/trending/data';
import LetsGo from 'modules/home/letsGo';
import HowItWorks from 'modules/home/HowItWorks';
import TravelersBlogs from 'modules/home/travelersBlogs';
import SEOBlock from 'modules/home/SEOBlock';
import DestinationByDuration from 'modules/home/destinationByDuration';
import Travelogues from 'modules/home/travelogues';
import TopDestinationHotels from 'modules/home/topDestinationHotels/TopDestinationHotels';
import FixedMenu from 'components/FixedMenu/FixedMenu';
import ToasterMessages from 'components/Common/ToasterMessage';
import WelcomeCarousel from 'components/Home/WelcomeCarousel';
import FixedLeadFormButton from 'components/Home/FixedLeadFormButton';
import { onScroll, initializeScroller } from 'actions/segmentEvents';
import { setCookie } from 'helpers/FormDataFormatter';
import { TRIP_UPDATED_IN_REDIS } from 'constants/Slider';
import config from 'appConfig';
import { data as seoFooter } from './FooterData';
import SeoFooter from 'components/Common/SeoFooter';
import Footer from 'components/Footer/Footer';
import { trackSegment, ORGANISM_VIEWED } from 'actions/segmentEvents';
import { scroller } from 'react-scroll';

import 'theme/common.scss';

const renderHelmet = () => (<Helmet>
  <title>Personalized Holiday Packages |
    Customized Tour Packages from multiple local and trusted travel agents</title>
  <meta property="fb:app_id" content="168534953203541" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="theme-color" content="#68c4c1" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <link rel="canonical" href="https://traveltriangle.com/" />
  <link href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico"
        rel="shortcut icon" type="image/x-icon" />
  <link href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico" rel="icon"
        type="image/x-icon" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta property="fb:app_id" content="168534953203541" />
  <meta name="category" content="Destination:Unknown" />
  <meta name="destination_id" content="" />
  <meta name="destination_type" content="" />
  <meta name="description"
        content="Customize an Unforgettable Experience with help of multiple local expert agents! Add offbeat attractions, choose local cuisines, add local activities, plan village tour or local shopping. NASSCOM top 50 emerging companies of India, TieCon Top 9 companies, Website of the year 2011, Esparks 2011 Hottest E-commerce startups" />
  <meta name="keywords"
        content="trips, tours, holidays, tour packages, market, customize, agents, travel, holiday packages in india, vacation packages in india, travel sites" />
  <meta property="og:url" content="https://traveltriangle.com" />
  <meta property="og:image"
        content={`${config.assets.images}/assets/seo_home/banner-image-e24c2e8cb056006b8d1d57bb2d6de66e.jpg`} />
  <meta property="og:site_name" content="TravelTriangle.com" />
  <meta name="smartaddon-verification" content="eddbf5aa71ba4a4029bead17a0940aaf" />
  <meta charSet="utf-8" />
  <meta name="page_fullname" content="Home Page" />
</Helmet>);

class HomeAsync extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChatButtonVisible: false,
      carouselData: {}
    };
    this.isEventTracked = {
      'Explore Destinations By Theme': false,
      'Expert Callback': false
    };
  };



  onPageScroll = () => {
    const documentHeight = document.body.scrollHeight;
    const percentHeight = (documentHeight / 100) * 10;
    const pageYscroll = window.pageYOffset;
    if (pageYscroll > percentHeight) {
      this.setState({ isChatButtonVisible: true });
    } else {
      this.setState({ isChatButtonVisible: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onPageScroll);
    this.scrollToSection();
  }

  scrollToSection = () => {
    const params = (new URL(document.location)).searchParams;
    if (params && params.get('recommendedHotels') === 'true') {
      scroller.scrollTo('recommendedHotels', {
        duration: 1000,
        smooth: true
      });
    }
  };

  trackHomePage = ({ event, category, section, object, cta,
                     funnel_step, form_variant, label, funnel_uuid }) => {
    trackSegment({
      event,
      category: category || 'Home Page',
      section,
      object,
      cta,
      funnel_step,
      form_variant,
      label,
      funnel_uuid
    });
  };

  onSensorChange = (isVisible, section) => {
    if (isVisible) {
      if (!this.isEventTracked[section]) {
        this.isEventTracked[section] = true;
        trackSegment({
          event: ORGANISM_VIEWED,
          section
        });
      }
    }
  };

  render() {
    const {
      isAuthenticated, shouldDisplayLatestTrip,
      userDetails, showToasterMessage, updateFields, carouselData, carouselPackages, welcomeCarouselPackages
    } = this.props;
    initializeScroller();
    setCookie('cb_dt', '');
    return (
      <div className="at_homeContainer row row- sbc5 homePage">
        {renderHelmet()}
        <div itemScope="itemscope" itemType="https://schema.org/Organization">
          <ScrollPercentage onChange={onScroll}>
            {
              showToasterMessage ?
                <ToasterMessages
                  toasterContent="Your request is submitted. We will call you back within 24hrs."
                  callbackAction={() => {
                    updateFields({
                      type: TRIP_UPDATED_IN_REDIS,
                      value: false
                    });
                  }}
                  timeInMS={5000}
                /> : null
            }
            <div className="relative z15">
              <div className="absolute z1 wfull t0 l0 r0">
                <HeaderHome isTransparent={true} />
              </div>
              <HomeBanner
                trackSegmentEvent={this.trackHomePage} />
            </div>

            <div className="homePageLayoutContainer sbcw">
              {
                isAuthenticated && shouldDisplayLatestTrip ?
                  <div className="m0 mb8"><BookedNotification {...userDetails.lastActiveTrip} /></div> : null
              }
              <WelcomeCarousel
                carouselData={carouselData}
                carouselPackages={carouselPackages}
                welcomeCarouselPackages={welcomeCarouselPackages}
              />
              <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Destinations By Theme')}
                      partialVisibility='bottom'
                      delayedCall={true}>
                <TrendingDestinations
                  heading="Explore Destinations by Theme"
                  showTrending={false}
                  showContact={true}
                  data={trendingData}
                  showLastCard={true}
                  trackSegmentEvent={this.trackHomePage}
                />
              </Sensor>
              <div className="pb24">
                <DestinationByDuration
                  trackSegmentEvent={this.trackHomePage}
                />
              </div>
              <div className="pt24 pb24">
                <Travelogues
                  trackSegmentEvent={this.trackHomePage}
                  //handleLeadFormModal={handleLeadFormModal}  verify
                />
              </div>
              <div className="p24">
                <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, 'Expert Callback')}
                        partialVisibility='bottom'
                        delayedCall={true}>
                  <LetsGo
                    trackSegmentEvent={this.trackHomePage}
                  />
                </Sensor>
              </div>
              <div className="pt24 pb24" id="recommendedHotels">
                <TopDestinationHotels/>
              </div>
              <div className="pt24 pb24">
                <TravelersBlogs
                  trackSegmentEvent={this.trackHomePage}
                />
              </div>
              <div className="p24">
                <HowItWorks />
              </div>
              <div className="p24 pb48">
                <SEOBlock />
              </div>
            </div>

            <div className="row row- pb64 pt0 sbc5">
              <SeoFooter footerSections={seoFooter.footer_sections} />
              <Footer isHomePage />
            </div>
            {this.state.isChatButtonVisible ?
              <FixedMenu hasBottomFixedBtn={true} /> : null}
            <FixedLeadFormButton
              trackSegmentEvent={this.trackHomePage}
            />
          </ScrollPercentage>
        </div>
      </div>
    );
  }
}

HomeAsync.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userDetails: PropTypes.object,
  shouldDisplayLatestTrip: PropTypes.bool,
  showToasterMessage: PropTypes.bool.isRequired,
  updateFields: PropTypes.func.isRequired,
  carouselData: PropTypes.object,
  carouselPackages: PropTypes.object,
  welcomeCarouselPackages: PropTypes.func
};

HomeAsync.defaultProps = {
  userDetails: {},
  shouldDisplayLatestTrip: false,
};

export default HomeAsync;

