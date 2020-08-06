import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './hotelContacts.cm.scss';

import { CallUs, Envelope, InternationalIconBlack } from 'helpers/Icon/Icon';

const HotelContacts =
  ({ contactInfo }) => (
        <div>
          <p className="m0 mb15 f16 fwb">Contact</p>

          {
            contactInfo.phone ?
              <a href={`tel: {contactInfo.phone}`} className="m0 f14 m0 mb8 flex alignCenter">
                <span className={`flex justifyCenter alignCenter relative ${styles.icon}`}><CallUs /></span>
                {contactInfo.phone}
                {contactInfo.phone && contactInfo.secondaryPhones && contactInfo.secondaryPhones.length ? '|' : ''}
                {contactInfo.secondaryPhones && contactInfo.secondaryPhones.length ? contactInfo.secondaryPhones : ''}
              </a> : null
          }
          {
            contactInfo.email ?
              <a className="m0 f14 m0 mb8 flex alignCenter" href={`mailTo:${contactInfo.email}`} >
                <span className={`flex justifyCenter alignCenter relative ${styles.icon}`}><Envelope /></span>
                { contactInfo.email }
              </a> : null
          }
          {
            contactInfo.website ?
              <Link className="m0 f14 m0 flex alignCenter" rel="nofollow" to={contactInfo.website} target="_blank">
                <span className={`flex justifyCenter alignCenter relative ${styles.icon}`}><InternationalIconBlack /></span>
                <span className="ellipsis">{ contactInfo.website }</span>
              </Link> : null
          }
        </div>
  );

HotelContacts.propTypes = {
  contactInfo: PropTypes.object
};

HotelContacts.defaultProps = {
  contactInfo: {}
};

export default HotelContacts;

