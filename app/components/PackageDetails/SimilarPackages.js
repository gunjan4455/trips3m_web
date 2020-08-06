import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sensor from 'react-visibility-sensor';

import Swiper from 'components/Swiper/Swiper';
import './SimilarPackages.scss';
import PackagePrice from '../Listing/PackagePrice';
import PackageCities from '../Listing/PackageCities';
import PackageIncExc from '../Listing/PackageIncExc';
import { trackSegment, PACKAGE_CLICKED, PACKAGE_VIEWED } from '../../actions/segmentEvents';
import Img from 'components/Common/Img';
import PackageCardExperiment from '../Listing/PackageCardExperiment';

class SimilarPackages extends Component {
  static propTypes = {
    loadedSimilarPackages: PropTypes.bool.isRequired,
    loadingSimilarPackages: PropTypes.bool,
    loadingError: PropTypes.bool,
    packageId: PropTypes.number,
    similarPackages: PropTypes.array
  };

  static defaultProps = {
    packageId: 1,
    loadingError: false,
    similarPackages: [],
    loadingSimilarPackages: false
  };

  constructor(props) {
    super(props);
    this.state = {
      sensorVisibility : false
    };
  }

  trackSegmentEvent = (event, e, index) => {
    trackSegment({
      event: event ? event : PACKAGE_CLICKED,
      category: `Destination:${e.destinations[0].name}`,
      section: 'Similar Packages',
      object: `Package/${e.id}`,
      cta: '',
      package_id: e.id,
      destination_list: e.destinations[0].name,
      destination_id: e.destinations[0].id,
      label: `Days:${e.days}::Index:${index+1}`,
      value: e.price_total,
    });
  };

  onSensorChange = (isVisible, e, idx) => {
    if (!this.sensorVisibility && isVisible) {
      this.setState({ sensorVisibility : true });
      this.trackSegmentEvent(PACKAGE_VIEWED, e, idx);
    }
  };

  render() {
    if (
      this.props.loadingSimilarPackages ||
      (!this.props.loadedSimilarPackages && !this.props.loadingError)
    ) {
      return (
        <div className="row row- pt15 pb8 sbcw" >
          <h2 className="heading-common-center pb15">Similar Packages</h2>
          <div className="row row- relative similar-package-box" >
            <div className="relative text-center pt24 pb24">
              <div className="spinner" >
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
              </div>
              <p className="text-center">Loading...</p>
            </div>
          </div>
        </div>
      );
    }

    const renderChild = (e) => (
      <div className="similar-package-img box-with-layer relative">
        <Img width={316} height={140} src={e.image_url} ikSrc={e.imagekit_url} alt={e.name} />
        <p className="f16 fw9 sfcw b8 absolute l0 z2 pl8 pr8">
          {e.destinations.length ? e.destinations[0].name : 'Kerala'}
          {` (${e.days}D & ${e.nights}N) `}
        </p>
      </div>
    );

    if (this.props.loadedSimilarPackages && this.props.similarPackages.length) {
      const swiperElements = this.props.similarPackages.map((e, idx) => {
        return (<div key={e.id}>
          {
            __SERVER__ ?
              <a
                href={`/packages/${e.set_url}?id=${e.id}`}
                onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, e, idx)}
              >
                { renderChild(e) }
              </a> :
              <Link
                to={`/packages/${e.set_url}?id=${e.id}`}
                href={`/packages/${e.set_url}?id=${e.id}`}
                onClick={() => this.trackSegmentEvent(PACKAGE_CLICKED, e, idx)}
              >
                { renderChild(e) }
              </Link>
          }
          <Sensor onChange={(isVisible) => this.onSensorChange(isVisible, e, idx)} intervalDelay={3000} />
          <div className="row row- relative p8 similar-package-box-data">
            <PackagePrice
              priceUnit={e.mini_desc}
              price={e.price_total}
              discount={e.discount}
              currency={e.currency}
            />
            <PackageCities cities={e.cities} />
            <div className="row row- inclusion-height-box">
              <PackageIncExc noScroll inclusions={e.inclusions} id={`similar_packages_${e.id}`} />
            </div>
          </div>
        </div>);
      }
      );
      return (
        <div className="row row- p15 pl15 pr15 pb8 sbcw" >
          <h2 className="heading-common-center">Similar Packages</h2>
          <div className="row row- relative similar-package-box" >
            <div className="swiper-full-width">
            <Swiper slideClass="slide" spaceBetween={8} slidesPerView="auto" ssrAnimation={{ width: 276, height: 316 }}>
              {
                this.props.similarPackages.map((packageCard,id) => {
                  return <PackageCardExperiment heading={'similar packages'} card={packageCard} key={id} isPackageRevamp={true} />;
                })
              }
            </Swiper>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default SimilarPackages;
