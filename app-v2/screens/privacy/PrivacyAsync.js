import React from 'react';
import { ScrollPercentage } from 'react-scroll-percentage';
import { Helmet } from 'react-helmet';

import { initializeScroller, onScroll } from 'actions/segmentEvents';
import Privacy from 'modules/static/privacy';
import HeaderCommon from 'modules/header/HeaderCommon';
import Footer from 'modules/shared/Footer';

const PrivacyPage = () => {
  initializeScroller();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy - TravelTriangle</title>
        <link rel="canonical" href="https://traveltriangle.com/privacy" />
      </Helmet>
      <HeaderCommon />
      <ScrollPercentage onChange={onScroll}>
        <Privacy />
      </ScrollPercentage>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
