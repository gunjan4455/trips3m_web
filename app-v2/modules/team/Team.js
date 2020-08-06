import React from 'react';
import { ScrollPercentage } from 'react-scroll-percentage';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BannerVideo from 'modules/shared/trialist/team/BannerVideo';
import ActivityBoard from 'modules/shared/trialist/team/ActivityBoard';
import HeaderTrialist from 'modules/shared/trialist/HeaderTrialist';
import ApplyBanner from 'modules/shared/trialist/about/ApplyBanner';
import CoreTeam from 'modules/shared/trialist/team/CoreTeam';
import EmployeeStoryCard from 'modules/shared/trialist/team/EmployeeStoryCard';
import HeaderCommon from 'modules/header/HeaderCommon';
import Footer from 'modules/shared/Footer';
import { initializeScroller, onScroll } from 'actions/segmentEvents';

const WhiteBoardBack = styled.div({
  background: '#fff',
  position: 'absolute',
  top: '200px',
  left: '0',
  right: '0',
  height: '120px',
});

const GsectionDividerDiv = styled.div({
  height: '8px',
  background: '#EEEEEE',
  display: 'block',
});

const Team = ({ location }) => {
  initializeScroller();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Team</title>
        <link rel="canonical" href="https://traveltriangle.com/team" />
      </Helmet>
      <HeaderCommon />
      <ScrollPercentage onChange={onScroll}>
        <HeaderTrialist path={location.pathname} />
        <div className="clearfix">
          <BannerVideo />
        </div>
        <div className="clearfix p24">
          <h3 className="f24 fw9 mb24 pb8 at_heading">Fast Growth amidst Challenges</h3>
          <p className="f14p at_text">
            Building the most innovative and technology driven product to
            address holiday woes requires the smartest and passionate people in
            the industry. We believe in working together,saying things as is and
            achieving the challenging goals that others might treat impossible.
          </p>
        </div>
        <ActivityBoard />
        <div className="clearfix sbc5 pt32">
          <h3 className="f16a fw9 pl24">Team</h3>
          <div className="clearfix relative mt24 overflowh">
            <CoreTeam />
            <WhiteBoardBack />
          </div>
        </div>
        <GsectionDividerDiv />
        <div className="container p24 pr0">
          <h3 className="f16a fw9 mb15 pr24 at_heading2">Employee Stories</h3>
          <EmployeeStoryCard />
        </div>
        <div className="clearfix">
          <ApplyBanner />
        </div>
      </ScrollPercentage>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Team;

Team.propTypes = {
  location: PropTypes.object.isRequired,
};
