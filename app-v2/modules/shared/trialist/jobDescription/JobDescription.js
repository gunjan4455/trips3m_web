import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { scroller, Element } from 'react-scroll';

import JobForm from './JobForm';
import { default as HeaderTitle } from 'modules/header/HeaderTitle';

const ListStyle = styled.ul({
  '& li': {
    lineHeight: '24px',
    whiteSpace: 'pre-line',
    listStyle: 'none',
  }
});

export const JobDescribe = ({ title, description }) => {
  return (
    <div className="clearfix mb24">
      <p className="f16 fw9 sfc6 m0 mb15">{title}</p>
      <ListStyle>
        <li className="f14p mb5 relative block pl0 sfc6">
          {description}
        </li>
      </ListStyle>
    </div>
  );
};

export const jobDetailInfo = (selectedJd) => {
  return ({
    'Job Roles & Responsibilities': selectedJd.rolesAndResponsibities,
    'Required Skills': selectedJd.skills,
    'Good to have': selectedJd.goodToHave,
    'What You Get': selectedJd.whatYouGet
  });
};

class JobDescription extends Component {

  state = {
    showApply: true
  };

  handleScrollToFormCareer = (e) => {
    e.preventDefault();
    scroller.scrollTo('section__formcareer', {
      duration: 800,
      smooth: true,
    });
  };

  handleShowApply = () => {
    this.setState({ showApply: false });
  };

  render() {
    const { selectedJd, jobDescription, careerApply } = this.props;
    const jobDetail = selectedJd && jobDetailInfo(selectedJd);

    return (
      <div className="row ml0 mr0 pl0 pr0">
        <div className="clearfix">
          <div className="container pl0 pr0">
            <div className="clearfix">
              <div className="col-md-8 pl0">
                <HeaderTitle title={'career'} backUrl={'/career'} />
              </div>
            </div>
            <div className="clearfix p15">
              <div className="m0 pb24 sfc6 fw9 f24">
                {selectedJd.subCategory}
                <span className="block fw4 pfc4 f12 pt8">at TravelTriangle, {selectedJd.location}</span>
              </div>
              <div className="mb24">
                <div className="clearfix">
                  <div className="col-md-5 p0 sfc6">
                    <div className="col-md-5 iblock p0 fw7 ">Experience <span className="pl5 pr5">:</span></div>
                    <div className="col-md-7 iblock">{selectedJd.experience}</div>
                  </div>
                </div>
                <div className="clearfix">
                  <div className="col-md-5 p0 sfc6">
                    <div className="col-md-5 iblock fw7 p0 ">Job Location <span className="pl5 pr5">:</span></div>
                    <div className="col-md-7 iblock">{selectedJd.location}</div>
                  </div>
                </div>
              </div>
              {
                Object.keys(jobDetail).map((title, i) => {
                  return (
                    jobDetail[title] ?
                      <JobDescribe key={i} title={title} description={jobDetail[title]} /> : null
                  );
                })
              }
            </div>
          </div>
        </div>
        {
          this.state.showApply ?
            <div className="col-md-4 clearfix p8 sbc5 sticky b0">
              <button onClick={this.handleScrollToFormCareer}
                      className="btn-filled-pri-large ripple wfull fright at_formfunction">
                <span className="wave" />Apply Now
              </button>
            </div> : null
        }
        <Element name="section__formcareer">
          <div className="container p24">
            <JobForm
              jobDescription={jobDescription}
              careerApply={careerApply}
              showApply={this.handleShowApply}
            />
          </div>
        </Element>
      </div>
    );
  }
}


JobDescription.propTypes = {
  selectedJd: PropTypes.object.isRequired,
  jobDescription: PropTypes.object.isRequired,
  careerApply: PropTypes.func.isRequired
};

JobDescribe.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default JobDescription;
