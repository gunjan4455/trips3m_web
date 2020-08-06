import React from 'react';
import PropTypes from 'prop-types';

import './LoggedInUser.scss';
import Img from 'components/Common/Img';
import config from 'appConfig';

const LoggedInUser = ({avatar, name, isAuthenticated}) => {
  const userLink = (isAuthenticated ? '/users/view' : '/users/sign_in');
  return (
    <div className="row row- pbc1 relative pt24 pl15 pr15 pb24">
      <a href={userLink} className="sfcw">
        <div className="col-xs-3 pl0 pr0">
          <div className="user-img-loggedin radius100">
            <Img ikSrc={avatar} defaultSrc={avatar} alt="user" height={48} width={48} onDocumentLoad={true} />
          </div>
        </div>
        <div className="col-xs-9 relative pl0 pr0 user-loggedin-name-box">
          <p className="user-loggedin-name absolute-center-v ellipsis sfcw text-capitalize fw4">{name}</p>
        </div>
      </a>
    </div>
  );
};
LoggedInUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

LoggedInUser.defaultProps = {
  name: 'Guest',
  isAuthenticated: false,
  avatar: `${config.assets.images}/attachments/pictures/901194/original/male3-96.png`
};

export default LoggedInUser;
