import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Contact } from 'helpers/Icon/Icon';
import ISD_CODES from 'helpers/isdCodes';

import styles from './GuestDetails.cm.scss';

class GuestDetails extends PureComponent {

  render() {
    const { userDetails: { name, email, isdCode, phone }, formErrors, handleChange } = this.props;

    return (
      <div className="sbcw wfull">
        <div className="flex flexDColumn pr15 pl15">
          <div className={`pt32 text-center ${styles.contactIcon}`}>
            <Contact />
          </div>
          <div className="pt32 pb24 flex flexDColumn">
            <div className="flex flexDColumn mb24">
              <label className="fw7 mb8">Name <span className="pfc2">*</span></label>
              <input
                name="name"
                type="text"
                placeholder="Enter Name"
                className={'input'}
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flexDColumn mb24">
              <label className="fw7 mb8">Email ID <span className="pfc2">*</span></label>
              <input
                name="email"
                type="text"
                placeholder="Enter Email ID"
                className={`input ${formErrors && formErrors.email ? 'input-error': ''}`}
                value={email}
                onChange={handleChange}
              />
              <span className="input-error-text">{formErrors.email}</span>
            </div>
            <div className="flex flexDColumn">
              <label className="fw7 mb8">Phone No. <span className="pfc2">*</span></label>
              <div className="row">
                <div className="col-xs-3 pr0">
                  <select name="isdCode" value={isdCode} className={`select ${styles.countryCode}`}
                          onChange={handleChange}>
                    {
                      Object.keys(ISD_CODES).map(country => (
                        <option value={ISD_CODES[country]} key={`isd_${country}`}>
                          {/*{`${ISD_CODES[country]} (${country})`}*/}
                          {`${ISD_CODES[country]}`}
                        </option>
                      ))
                    }
                  </select>
                </div>
                <div className="col-xs-9">
                  <input
                    name="phone"
                    type="number"
                    placeholder="Enter Phone No."
                    className={`input ${formErrors && formErrors.phone ? 'input-error': ''}`}
                    value={phone}
                    onChange={handleChange}
                  />
                  <span className="input-error-text">{formErrors.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GuestDetails.propTypes = {
  userDetails: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

GuestDetails.defaultProps = {};

export default GuestDetails;

