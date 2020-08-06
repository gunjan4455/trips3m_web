import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { Back2Icon } from 'helpers/Icon/Icon';

import styles from './BookableHeader.cm.scss';

const BookableHeader = ({ backUrl, heading, showBorder, history }) => {
  const to = backUrl ? { to: backUrl } : { onClick: history.goBack };
  return(
    <p className={`flex alignCenter p15 f16 fw7  ${showBorder ? 'bb' : ''}`}>
      <Link {...to}>
              <span className="icon-18 block">
                <Back2Icon />
              </span>
      </Link>
      <span className={`pl15 ${styles.textTruncate}`}>{heading}</span>
    </p>
  );
};

BookableHeader.propTypes = {
  backUrl: PropTypes.string,
  heading: PropTypes.string.isRequired,
  showBorder: PropTypes.showBorder,
  history: PropTypes.object.isRequired
};

BookableHeader.defaultProps= {
  showBorder: true,
  backUrl: ''
};

export default withRouter(BookableHeader);
