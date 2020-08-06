import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ScrollPercentage } from 'react-scroll-percentage';

import JobDescription from 'modules/shared/trialist/jobDescription/JobDescription';
import HeaderCommon from 'modules/header/HeaderCommon';
import CareerMain from 'modules/shared/trialist/career/Career';
import BannerTrialist from 'modules/shared/trialist/BannerTrialist';
import HeaderTrialist from 'modules/shared/trialist/HeaderTrialist';
import Footer from 'modules/shared/Footer';
import { initializeScroller, onScroll } from 'actions/segmentEvents';

const Career = ({ match: { params }, loaded, jobDescription, jobApply, location }) => {
  initializeScroller();
  if (!loaded) {
    return (
      <div className="clearfix">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Career</title>
          <link rel="canonical" href="https://traveltriangle.com/career" />
        </Helmet>
      </div>
    );
  }
  const bannerImage = "https://d29m6q8e2acg44.cloudfront.net/public-product/Trialist/Job+Opening/Jobopening_Cover.png";
  const jdId = [];
  Object.keys(jobDescription.careers || {})
    .forEach((key) => {
      jdId.push(
        ...jobDescription.careers[key]
          .filter(e => parseInt(e.id, 10) === (parseInt(params.id, 10) || 0))
      );
    });
  const selectedJd = jdId.length ? jdId[0] : {};

  return (
    <div className="clearfix">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Career</title>
        <link rel="canonical" href="https://traveltriangle.com/career" />
      </Helmet>
      <HeaderCommon />
      <ScrollPercentage onChange={onScroll}>
        {
          params.id && jdId.length ?
            <JobDescription selectedJd={selectedJd} jobDescription={jobDescription} careerApply={jobApply} /> :
            <div className="clearfix">
              <HeaderTrialist path={location.pathname} />
              <div className="clearfix">
                <BannerTrialist
                  bannerPath={bannerImage}
                  bannerAlt="career banner" />
              </div>
              <CareerMain careers={jobDescription.careers || {}} />
            </div>
        }
      </ScrollPercentage>
      <div className="row row- pb8 pt0">
        <Footer />
      </div>
    </div>
  );
};

Career.propTypes = {
  match: PropTypes.object.isRequired,
  jobDescription: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  jobApply: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default Career;
