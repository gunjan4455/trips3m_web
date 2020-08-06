import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from './BlogCard';
// import Slider from 'containers/Home/common/Slider';
// import 'theme/Common/TravelerStories.scss';


const Blog = ({ blogs, sliderId }) => (
  <div className="clearfix">
    <div className="common-heading-sliders clearfix at_travelblog">
      <div className="col-md-8 pl0 pr0">
        <h2>Exclusive collection of travel blogs</h2>
        <p>
          <span>to inspire your romantic getaway</span>
        </p>
      </div>
    </div>
    <div className="clearfix pt15">
      {/* <Slider key={sliderId} className="clearfix" id="blog">
        {
          blogs.map((blog, i) => (
            <div key={i} style={{ width: '360px' }}>
              <BlogCard blog={blog} />
            </div>
          ))
        }
      </Slider> */}
    </div>
  </div>
);

Blog.propTypes = {
  blogs: PropTypes.array.isRequired,
  sliderId: PropTypes.string.isRequired
};

export default Blog;
