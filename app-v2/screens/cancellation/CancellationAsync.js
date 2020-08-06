import React from 'react';
import { ScrollPercentage } from 'react-scroll-percentage';
import { Helmet } from 'react-helmet';

import { initializeScroller, onScroll } from 'app/actions/segmentEvents';
import Cancellation from 'modules/static/cancellation';
import HeaderCommon from 'modules/header/HeaderCommon';
import Footer from 'modules/shared/Footer';

const CancellationPage = () => {
  initializeScroller();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cancellation/ Modification Policy - TravelTriangle</title>
        <link rel="canonical" href="https://traveltriangle.com/cancellation" />
      </Helmet>
      <HeaderCommon />
      <ScrollPercentage onChange={onScroll}>
        <Cancellation />
      </ScrollPercentage>
      <Footer />
    </div>
  );
};

export default CancellationPage;
