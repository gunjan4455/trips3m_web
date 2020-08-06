import React from 'react';
import { Helmet } from 'react-helmet';
import { ScrollPercentage } from 'react-scroll-percentage';
import styled from '@emotion/styled';
import { PropTypes } from 'prop-types';

import BannerTrialist from 'modules/shared/trialist/BannerTrialist';
import HeaderTrialist from 'modules/shared/trialist/HeaderTrialist';
import AboutInNumbers from 'modules/shared/trialist/about/AboutInNumbers';
import Investors from 'modules/shared/trialist/about/Investors';
import ApplyBanner from 'modules/shared/trialist/about/ApplyBanner';
import MediaTalk from 'modules/shared/MediaTalk';
import HeaderCommon from 'modules/header/HeaderCommon';
import ShowMore from 'modules/shared/ShowMore';
import Footer from 'modules/shared/Footer';
import { initializeScroller, onScroll } from 'actions/segmentEvents';
import config from 'appConfig';

const GsectionDividerDiv = styled.div({
  height: '8px',
  background: '#EEEEEE',
  display: 'block',
});

const AboutUs = ({ aboutLess, aboutMore, location }) => {
  initializeScroller();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="https://traveltriangle.com/aboutus" />
      </Helmet>
      <HeaderCommon />
      <ScrollPercentage onChange={onScroll}>
        <HeaderTrialist path={location.pathname} />
        <div className="clearfix">
          <BannerTrialist
            bannerPath={`${config.assets.images}/public-product/Trialist/AboutUs/AboutUs_Cover.jpg`}
            bannerAlt="career banner"
          />
        </div>
        <div className="clearfix p24">
          <h3 className="f24 fw9 mb24 pb8 at_heading">
            Building the Holiday Eco-system for Happy Travelers
          </h3>
          <div className="f14p at_text">
            <ShowMore
              wrapText={aboutLess}
              moreText={aboutMore}
              showMoreText="Read More"
              showLessText="Read Less"
            />
          </div>
        </div>
        <GsectionDividerDiv />
        <div className="clearfix pt24">
          <AboutInNumbers />
        </div>
        <GsectionDividerDiv />
        <div className="clearfix p24 pb0">
          <Investors />
        </div>
        <div className="clearfix">
          <ApplyBanner />
        </div>
        <div className="clearfix mb8 p24 pb15">
          <MediaTalk />
        </div>
      </ScrollPercentage>
      <div className="row row- pb8 pt0">
        <Footer />
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  aboutLess: PropTypes.string,
  aboutMore: PropTypes.string,
  location: PropTypes.object.isRequired,
};

AboutUs.defaultProps = {
  aboutLess:
    'Founded in 2011, TravelTriangle is India’s leading online holiday marketplace bringing both the travelers, and trusted & expert travel agents on',
  aboutMore:
    ' a common platform. With the recent Series C funding of $12 Million from Nandan Nilekani and Sanjeev Aggarwal backed Fundamentum in early 2018, it is on its way of encompassing all the components of holiday eco-system through its highly innovative and technology-focused product. Besides, having already raised close to a cumulative funding of $20 Million from SAIF Partners, Bessemer Venture Partners and RB Investments put together, the company has already achieved operating  profitability, and on track to become EBITDA profitable by next year.',
};

export default AboutUs;
