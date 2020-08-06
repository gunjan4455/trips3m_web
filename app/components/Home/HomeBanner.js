import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Common/Img';
import './BannerImg.scss';
import Search from '../../components/Search/Search';
import config from 'appConfig';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import styles from './homeBanner.cm.scss';

class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallDevice: false
    };
  };

  componentDidMount() {
    const getWindowHeight = window.innerHeight;
    if(getWindowHeight < 520) {
      this.setState({isSmallDevice: true});
    }
  };

  render() {
    const { imgDetails } = this.props;
    return(
      <div className={`col-md-12 p0 header-background wfull relative ${this.state.isSmallDevice ? 'header-background-small' :  ''}`}>
        <div className={`${this.state.isSmallDevice ? styles.bannerImgSmall : styles.bannerImg} overflowh`}>
          <Img src={imgDetails.imageUrl} ikSrc={imgDetails.imagekitUrl} alt="tt" height={this.state.isSmallDevice ? 280 : 340} width={420} />
        </div>
        <div className="pt48 absolute-center text-center wfull">
          <h1 className="at_homeBannerMainHeading f24 fw9 mb48 sfcw">Customize & Book <br />Amazing Holiday Packages</h1>
          <div className="pl24 pr24 relative">
            <Search
              isHomePageSearch={true}
              isLargeSearch={true}
              onSearch={() => this.props.trackSegmentEvent({
                type: 'Home_Page', event: ORGANISM_CLICKED, section: 'Search Bar', object: 'Search Bar'
              })}
            />
          </div>
        </div>
      </div>
    );
  }
}

HomeBanner.propTypes = {
  trackSegmentEvent: PropTypes.func,
  onSearch: PropTypes.func,
  isTransparent: PropTypes.bool,
  imgDetails: PropTypes.object
};

HomeBanner.defaultProps = {
  trackSegmentEvent: () => {},
  onSearch: () => {},
  imgDetails: {
    'imageUrl': `${config.assets.images}/public-product/home-page/homepage-banner.jpg`
  }
};

export default HomeBanner;
