import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PackageCardExperiment from '../Listing/PackageCardExperiment';
import Swiper from 'components/Swiper/Swiper';
class WelcomeCarousel extends Component {

  state = {
    destination:Object.keys(this.props.carouselData.destinations)[0]
  };

  handleClick = (destination) => {
    this.setState({ destination: destination});
    const packages = this.props.carouselData.destinations[destination].join(',');
    this.props.welcomeCarouselPackages({recently_viewed_packages: packages});
  }

  render() {
    const { carouselData, carouselPackages } = this.props;
    const inlineStyle = {
      backgroundImage:'url('+carouselData.banner+')'
    };
    return (
      <div>
        {carouselPackages && carouselPackages.packages &&
        <div className="m0 mb8 special-deals-container" style={inlineStyle}>
          <h4 className="main-heading text-center">{carouselData.heading}</h4>
          <p className="text-center">{carouselData.subheading}</p>
          <div className="overflowh">
            <div className="overflows">
              <div className={`pills-container-inline scrollable ${carouselData.destinations.length > 4 ? '': 'pillsCenter'}`}>
                {
                  Object.keys(carouselData.destinations).map((destination, i) => {
                    return (
                      <span key={i}
                        onClick={() => this.handleClick(destination)}
                        className={`pills round-corners white ${destination=== this.state.destination ? 'active' : ''}`}>
                          {destination}
                      </span>);
                  })
                }
              </div>
            </div>
          </div>
          <div className="row row- pl15 pr15 pt8 pb8 sbcw" >
            <div className="row row- relative similar-package-box" >
              <Swiper slideClass="slide" spaceBetween={16} slidesPerView="auto" rebuildOnUpdate={true} ssrAnimation={{ width: 276, height: 316 }}>
                {carouselPackages.packages.map((card,i) => {
                  return <PackageCardExperiment card={card} key={i} isPackageRevamp={true}/>;
                })}
              </Swiper>
            </div>
          </div>
        </div>}

      </div>
    );
  }
}

WelcomeCarousel.propTypes = {
  carouselData: PropTypes.object.isRequired,
  carouselPackages: PropTypes.object,
  welcomeCarouselPackages: PropTypes.func
};

export default WelcomeCarousel;
