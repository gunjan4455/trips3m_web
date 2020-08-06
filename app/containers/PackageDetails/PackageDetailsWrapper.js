import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PackageDetailsAsync from './PackageDetailsAsync';
import { hidePopup } from 'helpers/exitIntent';

class PackageDetailsWrapper extends Component {
  static propTypes = {
    packageDetails: PropTypes.object
  };

  static getRequiredDestination(destinations) {
    const places = ['singapore','goa','dubai','europe','rajasthan','himachal','thailand', 'hong kong'];
    const requiredPlaces = destinations.filter(dest =>
      places.indexOf(dest.name.toLowerCase()) !== -1
    );
    return requiredPlaces.length;
  }

  render() {
    return (
      <div>
        <div id="bg-mask-ei" className="bg-mask-ei" onClick={e => hidePopup(e)} />
        <PackageDetailsAsync {...this.props}/>
      </div>
    );
  }
}

export default PackageDetailsWrapper;
