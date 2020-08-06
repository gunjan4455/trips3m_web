import React from 'react';
import PropTypes from 'prop-types';

import './storybox.scss';
import Img from 'components/Common/Img';

const StoryBox = ({ title, imagePath, imagekitUrl }) => (
  <div className="story-box-main mt8 p4">
    <div className="row row- bs4">
      <div className="story-box-main-img">
        <Img src={imagePath} ikSrc={imagekitUrl} alt={title} height={140}/>
      </div>
      <div className="p8 sbcw">
        <h3 className="pb8 f14p fw4">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

StoryBox.propTypes = {
  postDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imagekitUrl: PropTypes.string.isRequired,
};

export default StoryBox;
