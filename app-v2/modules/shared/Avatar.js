import React from 'react';
import PropTypes from 'prop-types';

import { getInitialsFromName } from 'helpers/utils';

import styles from './avatar.cm.scss';

const Avatar = ({ imagePath, name }) => (
  imagePath && !imagePath.includes('missing.png')
    ? (<div className={`overflowh radius100 sbc4 mr15 relative agent-user-img ${styles.avatar}`}>
      <img className="wfull absolute-center" src={imagePath} alt={name} />
    </div>)
    : (<div className={`agent-user-name t0 mr15 hfull relative ${styles.avatar}`}>
        <p className="absolute-center f16">
          {getInitialsFromName(name)}
        </p>
      </div>
    )
);

Avatar.propTypes = {
  imagePath: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  imagePath: null
};

export default Avatar;
