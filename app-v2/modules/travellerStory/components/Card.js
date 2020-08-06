import React from 'react';
import PropTypes from 'prop-types';

import { GCardDataDiv, GCardImg, GHeadingH6 } from '../G';
import Img from 'components/Common/Img';

const Card = ({ id, title, url, imagekitUrl, thumbnailImagePath, index, trackSegment }) => {
  return (
    <div className="clearfix sbcw">
      <GCardImg className="relative">
        <Img width={320} height={140} src={thumbnailImagePath} ikSrc={imagekitUrl} alt="" />

        <a href={url} className="at_tsReadmore hoverReadMore absolute wfull hfull l0 t0"
           target="_blank"
           onClick={() => trackSegment('Read more link', id, 'index', index)}>
          <span className="block f14">Read More</span>
        </a>
      </GCardImg>
      <GCardDataDiv>
        <GHeadingH6 className="fw7 overflowh m0 mb4">{title}</GHeadingH6>
        <div className="text-right">
          <a className="at_readMore sfc1 f14 fw7" href={url} target="_blank">Read More</a>
        </div>
      </GCardDataDiv>
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number,
  id: PropTypes.string,
  image: PropTypes.string,
  imagekitUrl: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailImagePath: PropTypes.string,
  trackSegment: PropTypes.func,
};

Card.defaultProps = {
  index: 0,
  trackSegment: () => {
  }
};

export default Card;
