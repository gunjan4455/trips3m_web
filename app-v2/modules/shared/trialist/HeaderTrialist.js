import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './headerTrialist.cm.scss';

const HeaderTrialist = ({ path }) => (
  <div className="clearfix row row- bb pl8 pr8 sbcw">
    <ul className={`${styles.header} overflowh m0 p0`}>
      <li className={path === '/aboutus' ? styles.active : null}>
        <Link className='pfc3' to="/aboutus">About Us</Link>
      </li>
      <li className={path === '/team' ? styles.active : null}>
        <Link className='pfc3' to="/team">Our Team</Link>
      </li>
      <li>
        <Link to="/career" className="btn-filled-pri sfcw ripple pt8 pb8 radius2">We Are Hiring</Link>
      </li>
    </ul>
  </div>
);

export default HeaderTrialist;

HeaderTrialist.propTypes = {
  path: PropTypes.string.isRequired,
};
