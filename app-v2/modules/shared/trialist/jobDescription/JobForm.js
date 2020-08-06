import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { StatusSuccessIcon, SuccessIllustration } from 'helpers/Icon/Icon';
import { scroller } from "react-scroll";

const CustomUpload = styled.div({
  '& .button--custom': {
    width: '160px',
  },
  '& input': {
    width: '160px',
    opacity: '0',
  },
});

const SelectDesignation = styled.div({
  '& .selectCareerOption': {
    border: '1px solid #b2b2b2',
    padding: '12px 30px 12px 12px',
    paddingBottom: '13px',
  },
  '& .downArrow': {
    border: 'solid #3e3e3e',
    borderWidth: '0 1px 1px 0',
    transform: 'rotate(45deg)',
    width: '8px',
    height: '8px',
    top: '38%',
  },
});

const GSuccessIllustrations = styled.div({
  width: '200px',
  margin: '0 auto',
});

const StatusSuccess = styled.span({
  width: '11px',
  height: '8px',
});

class JobForm extends Component {
  static propTypes = {
    careerApply: PropTypes.func.isRequired,
    jobDescription: PropTypes.object.isRequired,
    showApply: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const careers = (this.props.jobDescription && this.props.jobDescription.careers) || {};
    const designationKeys = [];
    Object.values(careers).forEach((value) => {
      if (value) {
        designationKeys.push(...value.map(e => (e.subCategory || '')));
      }
    });

    this.state = {
      values: { pdf: {} },
      error: false,
      errors: {},
      submitted: false,
      submitting: false,
      designationKeys
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleScrollToFormCareer = () => {
    scroller.scrollTo('section__formsuccess', {
      duration: 1000,
      smooth: true,
      offset: -30
    });
  };

  componentDidUpdate(prevState) {
    if (this.state.submitted) {
      this.handleScrollToFormCareer();
    }
  }

  handleChange(target) {
    return (e) => {
      const values = { ...this.state.values };
      values[target] = e.target.value;
      this.setState({ values });
    };
  }

  handleFileChange(e) {
    this.setState({
      values: {
        ...this.state.values,
        pdf: e.target.files[0] || {}
      }
    });
  }

  handleError = (error) => {
    this.setState({
      error: true,
      submitting: false,
      errors: {
        form: (error.errors || []).toString() || 'Something went wrong. Please try again.'
      }
    });
  };

  validateForm() {
    //TODO: Prashant, Use separate library for form validations
    const requiredFields = ['first_name', 'email', 'pdf'];
    const errors = {};
    requiredFields.forEach((key) => {
      if ((key === 'pdf' && !this.state.values[key].size) || !this.state.values[key]) {
        errors[key] = 'This is required';
      }
    });
    const error = Object.keys(errors).length !== 0;
    this.setState({ error, errors });
    return error;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.validateForm()) {
      this.setState({
        submitting: true
      });
      const formData = new FormData();
      Object.keys(this.state.values).forEach(key =>
        formData.append(
          `candidate_detail[${key}]`,
          this.state.values[key]
        )
      );
      // TODO: Prashant: will use redux-thunk for async actions
      this.props.careerApply({ data: formData })
        .then(
          (success = {}) => {
            if (success && success.success) {
              this.props.showApply();
              this.setState({
                submitted: true,
                submitting: false
              });
            } else {
              this.handleError('');
            }
          }
        ).catch((error) => {
          this.handleError(error);
        }
      );
    }
  }

  handleSuccess = () => {
    return (
      <div>
        <div className="f24 pfc1 m0 pb8 fw9 text-center section__formsuccess">Application Submitted!</div>
        <div className="text-center mb24">
          <div>Someone from the hiring team will<br />
            get back to you shortly
          </div>
        </div>
        <GSuccessIllustrations>
          <SuccessIllustration />
        </GSuccessIllustrations>

      </div>
    );
  };

  render() {
    if (this.state.submitted) {
      return this.handleSuccess();
    }

    const { mobile_number } = this.state.values;
    return (
      <div className="clearfix">
        <p className="f24 pfc1 m0 pb24 fw9">Apply Here</p>
        <form onSubmit={this.handleSubmit} className={'at_formSubmit'}>
          <div className="clearfix">
            <div className="col-xs-12 pl0 pr0 mb15">
              <label
                className="f14 m0 fw7 mb5 sfc6"
                htmlFor="jd-apply-first-name"
              >
                First Name<em className="pfc2">*</em>
              </label>
              <input
                id="jd-apply-first-name"
                type="text"
                className="input at_firstName mt8"
                placeholder="Enter Your First Name"
                value={this.state.values.first_name || ''}
                onChange={this.handleChange('first_name')}
              />
              <div className="input-error-text">
                {this.state.error && this.state.errors.first_name}
              </div>
            </div>
            <div className="col-xs-12 pl0 pr0 mb15">
              <label
                className="f14 m0 fw7 mb5 sfc6"
                htmlFor="jd-apply-last-name"
              >
                Last Name
              </label>
              <input
                id="jd-apply-last-name"
                type="text"
                className="input mt8"
                placeholder="Enter Your Last Name"
                value={this.state.values.last_name || ''}
                onChange={this.handleChange('last_name')}
              />
              {this.state.error && this.state.errors.last_name}
            </div>
            <div className="clearfix">
              <div className="col-xs-12 pl0 pr0 mb15">
                <label className="f14 m0 fw7 mb5 sfc6" htmlFor="jd-apply-email">
                  Email ID<em className="pfc2">*</em>
                </label>
                <input
                  id="jd-apply-email"
                  type="text"
                  className="input mt8"
                  placeholder="Enter Your Email Id"
                  value={this.state.values.email || ''}
                  onChange={this.handleChange('email')}
                />
                <div className="input-error-text">
                  {this.state.error && this.state.errors.email}
                </div>
              </div>
              <div className="col-xs-12 pl0 pr0 mb15">
                <label
                  className="f14 block wfull m0 fw7 sfc6 mb5"
                  htmlFor="last-name"
                >
                  Phone No
                </label>
                <div className=" pr0 relative">
                  <input
                    id="jd-apply-phone"
                    type="text"
                    className="input"
                    value={mobile_number || ''}
                    onChange={this.handleChange('mobile_number')}
                  />
                </div>
              </div>
            </div>

            <div className="clearfix">
              <SelectDesignation className="col-xs-12 pl0 pr0 mb15">
                <label className="f14 m0 fw7 mb5 sfc6" htmlFor="first-name">
                  Select Designation
                </label>
                <div className="relative">
                  <select
                    value={this.state.values.designation || ''}
                    onChange={this.handleChange('designation')}
                    className="selectCareerOption mt8 block input select webkitAppearance _selectCareerOption"
                  >
                    {this.state.designationKeys.map((e, i) => (
                      <option key={i} value={e}>{e}</option>
                    ))}
                  </select>
                  <span className="downArrow r10 absolute p3" />
                </div>
              </SelectDesignation>
              <div className="col-xs-12 pl0 pr0 mb15 relative">
                <div className="file-input-wrapper">
                  <label className="btn-file-input f14 m0 fw7 mb5 sfc6  ">Upload CV</label>
                  <CustomUpload>
                    <div className="button__wrap block relative overflowh mt8">
                      <button className="button--custom sbc5 sfc1 p10">
                        Choose File
                      </button>
                      <input type="file"
                             name="pdf"
                             className="at_pdfChange absolute p10 t0 l0"
                             accept="application/pdf, application/msword,
                         application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                             onChange={this.handleFileChange}
                      />
                    </div>
                  </CustomUpload>
                </div>
                <p className="absolute errorDisplayMsg ">
                  {this.state.values.pdf.name || 'No file choosen'}
                </p>
                <p className="pdfErrorDisplay input-error-text pt24">
                  {this.state.error && this.state.errors.pdf}
                </p>
              </div>
            </div>

            <div className="clearfix">
              <div className="col-xs-12">&nbsp;</div>
              <div className="col-xs-12">
                <button
                  type="submit"
                  disabled={this.state.submitting}
                  className="btn-filled-pri-large ripple radius2 wfull"
                >
                  <span className="wave" />
                  Submit Application
                </button>
              </div>
              {this.state.error && this.state.errors.form}
              <div className="col-xs-12">&nbsp;</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default JobForm;
