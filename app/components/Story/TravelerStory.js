import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import StoryBox from './StoryBox';

import './travelerstory.scss';
import { loadBlogs } from '../../reducers/blogs';
import Swiper from 'components/Swiper/Swiper';

@connect(state => ({ blogs: state.blogs.blogPosts, }), { loadBlogs })
class TravelerStory extends Component {
  static propTypes = {
    blogs: PropTypes.array,
    loadBlogs: PropTypes.func,
    tags: PropTypes.array,
  };

  static defaultProps = {
    blogs: [],
    tags: ['travelogue'],
    loadBlogs: () => {}
  };

  static getTagsToInclude(tags) {
    if (tags && tags.indexOf('tt_seasonal') > -1) {
      return tags;
    } else if (tags) {
      return [['travelogue'], [tags]];
    }
    return ['travelogue'];
  }

  componentDidMount() {
    this.props.loadBlogs({
      tags: {
        tags_to_include: TravelerStory.getTagsToInclude(this.props.tags),
        postCount: 10,
        sort_order: 'Desc',
        offset: 0
      }
    });
  }

  render() {
    if (!this.props.blogs.length) {
      return null;
    }

    const stories = this.props.blogs.map(blog => (
      <a className="pfc3" href={blog.url} key={blog.id}>
        <StoryBox
          imagePath={blog.thumbnailImagePaths.src || blog.imagePaths.src}
          imagekitUrl={blog.thumbnailImagePaths.imagekitUrl || blog.imagePaths.imagekitUrl}
          title={blog.title}
        />
      </a>
    ));

    return (
      <div className="row row- pl8 pr8">
        <div className="row row- sbcw p8 review-con-main">
          <h2 className="text-center pfc1 f16 pb8">Our traveler stories</h2>
          <p className="text-center f12 pfc4">
            They traveled, They experienced, They shared
          </p>
          <div className="row row-">
            <Swiper
              slideClass="slide"
              spaceBetween={8}
              slidesPerView="auto"
              ssrAnimation={{ width: 268, height: 220 }}
              rebuildOnUpdate
            >
              {stories}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelerStory;
