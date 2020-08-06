import React from 'react';
import PropTypes from 'prop-types';

const BannerContent = ({ banner, showDescription}) => {
  return (
  <div className="clearfix">
    <div className="clearfix text-left">
      <h1 className="sfcw f24 fw9 sfcw m0 mb4">{banner.title}</h1>
      {showDescription && <h5 className="sfcw fw4 f12 m0">{banner.description}</h5>}
    </div>
  </div>
  );
};

BannerContent.propTypes = {
  banner: PropTypes.object.isRequired,
  showDescription: PropTypes.bool
};

BannerContent.defaultProps = {
  showDescription: true
};

export default BannerContent;
