import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'helpers/DateTime';
import Img from 'components/Common/Img';
import { GCardImg, GCardDataDiv, GDateLinkDiv, GHeadingH6 } from './gCard';

export default class Card extends React.Component {
  static propTypes = {
    imagePaths: PropTypes.shape({
      src: PropTypes.string,
      imagekitUrl: PropTypes.string,
      alt: PropTypes.string
    }).isRequired,
    thumbnailImagePaths: PropTypes.shape({
      src: PropTypes.string,
      imagekitUrl: PropTypes.string,
      alt: PropTypes.string
    }).isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

  render() {
    const { title, date, url, thumbnailImagePaths } = this.props;
    return (
      <div className="clearfix sbcw">
        <GCardImg className="relative sbc5">
          <Img src={thumbnailImagePaths.src} ikSrc={thumbnailImagePaths.imagekitUrl} alt="" />

          <div className="hoverReadMore absolute wfull hfull l0 t0">
            <a className="at_tsReadmore block f14" href={url}>Read More</a>
          </div>
        </GCardImg>
        <GCardDataDiv>
          <GHeadingH6 className="fw7 overflowh m0 mb4">{title}</GHeadingH6>
          <GDateLinkDiv>
            <p className="f12 pfc4 m0">{format(date, 'dddd, Do MMMM, YYYY')}</p>
            <a className="at_readMore" href={url}>Read More</a>
          </GDateLinkDiv>
        </GCardDataDiv>
      </div>
    );
  }
}

