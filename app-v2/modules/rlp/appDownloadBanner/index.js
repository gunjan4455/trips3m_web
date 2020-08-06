import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { CloseIcon, RightWhiteArrow, MSHome } from 'helpers/Icon/Icon';
import Img from 'components/Common/Img';

const GBannerImgDiv = styled.div({
  minWidth: '110px',
  maxWidth: '110px',
  maxHeight: '66px'
});
const GRightArrowSpan = styled.div({
  minWidth: '32px',
  height: '32px',
  maxWidth: '32px'
});

class AppDownloadBanner extends Component {

  state = { isVisible: true };

  handleCancelClick = (event) => {
    event.stopPropagation();
    this.setState({ isVisible: false });
  };

  static getLink = () => {
    let link;
    if (window.navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      link = 'https://ad.apsalar.com/api/v1/ad?re=1&a=traveltriangle&i=com.traveltriangle.traveler&ca=App_Install_MS_Homepage_iOS&an=Organic&p=iOS&pl=1&h=6c2098f87dee0f39f950a4796f492432e20f3861';
    } else {
      link = 'https://ad.apsalar.com/api/v1/ad?re=1&a=traveltriangle&i=com.traveltriangle.traveller&ca=App_Install_MS_Homepage&an=Organic&p=Android&pl=1&h=e1a717a45305aa3abf6a765df004282d5f4b5f18';
    }
    return link;
  };

  handleBannerClick = () => {
    const { trackSegment } = this.props;
    const link = AppDownloadBanner.getLink();
    window.open(link, '_blank');
    trackSegment({
      event: ORGANISM_CLICKED,
      cta: 'Download',
      section: 'App Banner',
      miscId1: 'Var 1'
    });
  };

  render() {
    const { isVisible } = this.state;
    if (!isVisible) {
      return null;
    }
    return (
      <div className="promoBanner phoneBG pt15 pl15 sbcw relative flex z3 at_appDownloadBanner"
           onClick={this.handleBannerClick}>
        <div className="flexFull">
          <h3 className="f14 fw7 mb15">Download our App for a better booking experience</h3>
          <div className="iblock btn-filled-pri mb15 relative">
            Download Now
            <GRightArrowSpan className="absolute-center-v r0">
              <RightWhiteArrow />
            </GRightArrowSpan>
          </div>
        </div>
        <GBannerImgDiv className="alignSelfFlexEnd">
          <Img className=""
               ikSrc="https://img.traveltriangle.com/public-product/phoner.png"
               alt="MS Home"
               width={110}
               height={66}
          />
        </GBannerImgDiv>
        <div className="bannerDismiss absolute z2 t15 r10 icon-14" onClick={this.handleCancelClick}>
          <CloseIcon />
        </div>
      </div>
    );
  }
}

AppDownloadBanner.propTypes = {
  trackSegment: PropTypes.func.isRequired,
};

export default AppDownloadBanner;
