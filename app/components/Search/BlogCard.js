import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import 'theme/Common/TravelerStories.scss';

const BlogCard = ({ blog }) => (
  <div className="clearfix">
    <div className="clearfix traveler-card">
      <div className="clearfix sbc5 traveler-card-img">
        <img className="wfull hfull" src={blog.imagePath} alt={blog.title} width={720} />
      </div>
      <div className="clearfix border p15">
        <p className="m0 f14 fwb traveler-story-heading ellipsis">{blog.title}</p>
        <div className="clearfix">
          <div className="col-md-6 p0" />
          <div className="col-md-6 pl0 pr0 mb0">
            <Link target={'_blank'} to={blog.href}
              className="iblock f14 fw9 fright link-sec">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;
