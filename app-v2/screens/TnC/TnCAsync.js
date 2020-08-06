import React from 'react';
import { ScrollPercentage } from 'react-scroll-percentage';
import { Helmet } from 'react-helmet';

import { initializeScroller, onScroll } from 'actions/segmentEvents';
import TnC from 'modules/static/tnc';
import HeaderCommon from 'modules/header/HeaderCommon';
import Footer from 'modules/shared/Footer';

const TnCPage = () => {
  initializeScroller();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms and Conditions - TravelTriangle</title>
        <link rel="canonical" href="https://traveltriangle.com/tnc" />
      </Helmet>
      <HeaderCommon />
      <ScrollPercentage onChange={onScroll}>
        <TnC />
      </ScrollPercentage>
      <Footer />
    </div>
  );
};

export default TnCPage;
