import React from 'react';
import PropTypes from 'prop-types';

import { GCardDataDiv, GCardImg, GContentP } from '../G';
import Img from 'components/Common/Img';
import { Parser } from 'html-to-react';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const parser = new Parser();

const Card = ({ id, title, heading, content, url, imagekitUrl, thumbnailImagePath, trackSegment }) => {
  return (
    <div className="clearfix sbcw">
      <a href={url} target="_blank" onClick={() => trackSegment(ORGANISM_CLICKED, 'Image Card', heading)}>
        <GCardImg className="relative">
          <Img width={320} height={140} src={thumbnailImagePath} ikSrc={imagekitUrl} alt="" />
          <span
            className="absolute b0 l0 r0 p8 sfcw f14">{title}</span>
        </GCardImg>
        <GCardDataDiv>
          <h3 className="pfc3 f16 fw7 overflowh m0 mb8">{heading}</h3>
          <GContentP className="f14 pfc4">{parser.parse(content)}</GContentP>
        </GCardDataDiv>
      </a>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  imagekitUrl: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
  thumbnailImagePath: PropTypes.string,
  trackSegment: PropTypes.func.isRequired,
};

export default Card;
