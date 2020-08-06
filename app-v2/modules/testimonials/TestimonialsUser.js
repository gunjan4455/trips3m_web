import React from 'react';
import PropTypes from 'prop-types';

import { timeFromNow } from 'helpers/DateTime';
import Avatar from "../shared/Avatar";

const TestimonialsUser = ({ author, lastUpdated }) => {
  const name = author.authorName ? author.authorName : 'Anonymous';
  return (
    <div className="flex flexCenterItems alignCenter">
      <div className="radius100 text-uppercase text-center sfcw fw7 reviewer__testimonial">
        <Avatar
          name={name}
          imagePath={author.authorPic}
        />
      </div>
      <div className="ml15 minW0">
        <h6 className="f14 ellipsis fw7 mb2 at_testi_title _name minW0">{name}</h6>
        <p className="m0 f12 pfc4 _userInfo">
          {
            author.userLocation ?
              `${author.userLocation}, ${timeFromNow(lastUpdated)}` :
              timeFromNow(lastUpdated)
          }
        </p>
      </div>
    </div>
  );
};

TestimonialsUser.propTypes = {
  author: PropTypes.object.isRequired,
  lastUpdated: PropTypes.string.isRequired,
};

export default TestimonialsUser;
