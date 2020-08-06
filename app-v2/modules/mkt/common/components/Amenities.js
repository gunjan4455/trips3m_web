import React from 'react';
import PropTypes from 'prop-types';

import styles from './amenities.cm.scss';
import * as Icons from 'helpers/Icon/Icon';

const PackageIncExc = ({ inclusions }) => (
  <div className="clearfix relative flex">
    {
      inclusions.map((inclusion, index) => {
        const IconComponent = Icons[inclusion.key.replace(/[\s-_]/g, '')]
          || Icons.DefaultIcon;
        const elementClassName = inclusion.available ? 'packageIncExc' : 'not-included packageIncExc';
        return (
          <span key={`${inclusion.key}_${index}`} className={styles.icon}>
            <IconComponent />
          </span>
        );
      })
    }
  </div>
);

PackageIncExc.propTypes = {
  inclusions: PropTypes.array.isRequired
};

PackageIncExc.defaultProps = {
  inclusions: []
};

export default PackageIncExc;
