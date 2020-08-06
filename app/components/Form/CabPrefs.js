import React from 'react';
import PropTypes from 'prop-types';

import './FormLead/LeadForm.scss';
import { CabIconFront } from 'helpers/Icon/Icon';


class CabPrefs extends React.Component {
  constructor(props) {
    super(props);
    this.cabPrefChanged = this.cabPrefChanged.bind(this);
    this.langPrefChanged = this.langPrefChanged.bind(this);
    this.updateFormValues = this.updateFormValues.bind(this);
  }

  state = {
    cabPrefs: null,
    languagePrefs: null
  };

  updateFormValues() {
    this.props.input.onChange({
      optionId: this.state.cabPrefs,
      userInput: (this.state.cabPrefs === '99') ? this.state.languagePrefs : ''
    });
  }

  cabPrefChanged(event) {
    this.setState({
      cabPrefs: event.target.value
    }, () => { this.updateFormValues(); });
  }

  langPrefChanged(event) {
    this.setState({
      languagePrefs: event.target.value
    }, () => { this.updateFormValues(); });
  }

  render() {
    return (
      <div className="form-part p0 mb8 mt8 sbcw">
        <div className="row row- bbn flight-included-con">
          <div className="flight-included col-xs-8 pl0 pr0">
            <p className="fw9 relative"><span className="flight-icon"><CabIconFront /></span>Cab For Local Sightseeing?</p>
          </div>
          <div className="col-xs-4 pl0 pr0">
            <div className="col-xs-6 pl0 pr0">
              <input
                type="radio"
                name="cabincluded"
                id="cabIncluded1"
                defaultChecked="true"
                className="flight-radio"
                value="100"
                selected={this.state.cabPrefs === '100'}
                onChange={this.cabPrefChanged}
              />
              <label htmlFor="cabIncluded1">
                <p>NO</p>
              </label>
            </div>
            <div className="col-xs-6 pl0 pr0">
              <input
                type="radio"
                name="cabincluded"
                id="cabIncluded2"
                className="flight-radio"
                value="99"
                selected={this.state.cabPrefs === '99'}
                onChange={this.cabPrefChanged}
              />
              <label htmlFor="cabIncluded2">
                <p>YES</p>
              </label>
            </div>
          </div>
        </div>
        <div className={(this.state.cabPrefs === '99') ? "show" : "hide"}>
          <div className="row row- p15 pt0">
            <p className="f12 fw9">Driver Speaks</p>
            <div className="row pl15 pr15 pt15">
              <div className="col-xs-6 pl0 pr8">
                <input
                  type="radio"
                  name="driver-speak"
                  id="driverSpeaks1"
                  className="radio-common"
                  value="english"
                  selected={this.state.languagePrefs === 'english'}
                  onChange={this.langPrefChanged}
                />
                <label htmlFor="driverSpeaks1">
                  <p>English</p>
                </label>
              </div>
              <div className="col-xs-6 pl8 pr0">
                <input
                  type="radio"
                  name="driver-speak"
                  id="driverSpeaks2"
                  className="radio-common"
                  value="hindi"
                  selected={this.state.languagePrefs === 'hindi'}
                  onChange={this.langPrefChanged}
                />
                <label htmlFor="driverSpeaks2">
                  <p>Hindi</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CabPrefs.propTypes = {
  input: PropTypes.object.isRequired
};

export default CabPrefs;
