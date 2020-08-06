import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SimilarPackages.scss';
import PackageCardExperiment from 'amp/modules/packageCard/PackageCardExperiment';

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

  render() {
    return (
      <div className="row row- pt8 pb0 sbc5">
        <div className="row row- p15 pl15 similar-package-gap pb8 sbcw">
          <h2 className="heading-common-center m0">Similar Packages</h2>
          <div className="row row- relative similar-package-box">
            <amp-carousel width="450" height="470" layout="responsive" type="slides">
              {
                this.props.similarPackages.map((packageCard, index) => {
                  return <PackageCardExperiment heading={'similar packages'}
                                                card={packageCard}
                                                key={index}
                                                index={index}
                                                isPackageRevamp={true} />;
                })
              }
            </amp-carousel>
          </div>
        </div>
      </div>);
  }
}

export default SimilarPackages;
