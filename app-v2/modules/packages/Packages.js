import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Swiper from 'components/Swiper/Swiper';
import Heading from '../shared/Heading';
import PopularPackageCard from 'components/Listing/PopularPackageCard';

class Packages extends React.Component {
  render() {
    const { packages, title, heading, travelmonth } = this.props;
    return (
      <div className="clearfix p15 sbcw">
        <div className="flex spaceBetween relative">
          <div className="flexFull">
            <Heading
              data={{
                title,
                heading
              }}
            />
          </div>
          <Link
            to={`/tour-packages/${packages[0].destinations ||
              packages[0].destination}`}
            className="iblock f14 fw7"
          >
            View All
          </Link>
        </div>
        <div className="swiper-full-width">
        <Swiper
          id="packagesSlider"
          spaceBetween={15}
          slidesPerView="auto"
          ssrAnimation={{ width: 280, height: 342 }}
          rebuildOnUpdate
        >
          {packages &&
            packages.length &&
            packages.map((packageData, index) => (
              <div key={index}>
                <PopularPackageCard card={packageData} isPackageRevamp={true}/>
              </div>
            ))}
        </Swiper>
        </div>
      </div>
    );
  }
}

Packages.propTypes = {
  packages: PropTypes.array,
  title: PropTypes.string,
  heading: PropTypes.string,
  travelmonth: PropTypes.number
};

Packages.defaultProps = {
  packages: [],
  title: "Popular Packages",
  heading: 'Unlimited choices. Trusted agents. Best prices. Happy memories.'
};

export default Packages;
