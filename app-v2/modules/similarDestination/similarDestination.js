import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Slider from '../shared/Slider';
import { currencyToSymbol, numberWithCommas } from 'helpers/parsers';
import Img from 'containers/Home/common/Img.js';
import { Img } from './G.js';

import 'theme/Common/TravelerStories.scss';

const SimilarDestination = ({
  destinations,
  trackPackageListClicked,
  trackDestinationListClicked,
  analyticsDetail = {},
  uniqueKey
}) => {
  if (!destinations || !destinations.length) {
    return <div />;
  }

  const similarPackages = () => {
    const packages = destinations.map((destination, index) => (
        <div key={index} style={{ width: '360px' }}>
          <Link
            to={destination.destination_url}
            className="pfc3 at_simillarcardlink"
            onClick={() => trackPackageListClicked({
              sectionName: 'Similar Destination',
              objectName: `Destination/${destination.id}`,
              name: destination.name,
              id: destination.id,
              type: analyticsDetail.category
            })}
          >
            <div className="clearfix">
              <div className="row row- traveler-card">
                <div className="row row- traveler-card-img">
                  <Img
                    className="absolute-center at_simillarcard_image"
                    src={destination.destination_image_url}
                    width={360}
                    alt={destination.name}
                  />
                </div>
                <div className="row row- border p15">
                  <div className="row row-">
                    <div className="col-md-8 p0">
                      <p className="ellipsis pb5 m0 f14 fw7 at_simillarcard_destiname">{destination.name}</p>
                      <p className="f12 m0 pfc4 at_simillarcard_travelrsexperts">
                        {destination.number_of_travelers}+ Travelers served by {destination.number_of_experts}+ experts
                      </p>
                    </div>
                    <div className="col-md-4 pl0 pr0 text-right">
                      <p className="f12 m0 fw3 pfc4">Starting from:</p>
                      <p className="sfc3 f18 fw9 pb5 m0 at_simillarcard_budget">
                        {`${currencyToSymbol('Rupee')}${numberWithCommas(Math.round(destination.starting_budget || 0))}/-`}
                      </p>
                      <p className="iblock f14 pt8 fw9 fright sfc1 mb0 at_viewall">
                        View All
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
      </div>)
    );
    return packages;
  };

  return (
    <div className="clearfix">
      <div className="common-heading-sliders clearfix mb15">
        <div className="col-md-8 pl0 pr0">
          <h2>Similar Destinations</h2>
          <p>Unlimited choices. Customised vacations. Happy memories</p>
        </div>
        <Link
          to="/All-places"
          className="iblock b0 link-sec at_simillar_viewallbtn"
          onClick={() => trackDestinationListClicked({
            sectionName: 'Similar Destination',
            ctaName: 'View All',
            name: 'All'
          })}
        >
          View All
        </Link>
      </div>

      <Slider id="similarDestinations" key={uniqueKey}>
        {similarPackages()}
      </Slider>

    </div>
  );
};

SimilarDestination.propTypes = {
  destinations: PropTypes.array,
  analyticsDetail: PropTypes.object,
  trackPackageListClicked: PropTypes.func.isRequired,
  trackDestinationListClicked: PropTypes.func.isRequired,
  uniqueKey: PropTypes.string
};

SimilarDestination.defaultProps = {
  destinations: [],
  analyticsDetail: {},
  uniqueKey: 'similar-destination'
};

export default SimilarDestination;
