import React from 'react';
import { connect } from 'react-redux';
import { PropTypes, instanceOf } from 'prop-types';
import Swiper from 'components/Swiper/Swiper';
import Heading from 'modules/common/Heading';
import { withCookies, Cookies } from 'react-cookie';
import {
  loadRecentPackages,
  isRecentPackagesPresent,
  getRecentPackages
} from './recentPackages';
import PackageCardExperiment from 'components/Listing/PackageCardExperiment';

const RECENT_PACKAGE_COOKIE_KEY = 'rvp_ids_mweb';

@connect(
  state => ({
    isRecentPackagesPresent: isRecentPackagesPresent(state),
    recentPackages: getRecentPackages(state)
  }),
  {
    loadRecentPackages
  }
)

class RecentPackages extends React.Component {
  static propTypes = {
    isRecentPackagesPresent: PropTypes.bool.isRequired,
    recentPackages: PropTypes.array.isRequired,
    currentPackageID: PropTypes.number.isRequired,
    loadRecentPackages: PropTypes.func.isRequired,
    cookies: instanceOf(Cookies).isRequired,
    selectedMonth: PropTypes.number,
    spacingCss: PropTypes.object
  };
  static defaultProps = {
    recentPackages: [],
    loadRecentPackages: () => {
    },
    isRecentPackagesPresent: false,
    spacingCss: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      recentPackages: ''
    };
    this.setRecentPackagesID = this.setRecentPackagesID.bind(this);
  }

  componentDidMount() {
    this.setRecentPackagesID(this.props.currentPackageID);
  }

  setRecentPackagesID(packageId) {
    const { cookies } = this.props;
    let recentPackages = cookies && cookies.get(RECENT_PACKAGE_COOKIE_KEY);
    if (typeof recentPackages === 'undefined') {
      recentPackages = [];
    } else {
      recentPackages = recentPackages.split(',');
    }
    if (recentPackages.indexOf(packageId) !== -1) {
      recentPackages = recentPackages.filter(id => id !== packageId);
    }
    recentPackages.push(packageId);
    recentPackages = recentPackages.join(',');
    if (typeof cookies !== 'undefined') {
      cookies.set(RECENT_PACKAGE_COOKIE_KEY, recentPackages);
    }
    this.setState({
      recentPackages
    }, () => {
      this.props.loadRecentPackages({
        seo_package_id: this.props.currentPackageID,
        recently_viewed_packages: this.state.recentPackages,
        travel_month: this.props.selectedMonth
      });
    });
  }

  render() {
    if (!this.props.isRecentPackagesPresent) {
      return null;
    }
    const { recentPackages, spacingCss } = this.props;
    const heading = 'Recent Packages';
    const attributes = {
      heading,
      packagesList: recentPackages
    };
    return recentPackages.length > 0 ? (
      <div className="p15 m8 mt0 sbcw at_recentpackages recent-packages-container" style={spacingCss}>
        <Heading
          data={{
            heading: "Recent Packages",
            subHeading:
              "Unlimited Choices. Trusted Agents. Best Prices. Happy Memories."
          }}
        />
        <div className="swiper-full-width">
        <Swiper
          id="packagesSlider"
          slideClass="slide"
          spaceBetween={15}
          slidesPerView="auto"
          rebuildOnUpdate
          ssrAnimation={{ width: 310, height: 355 }}
        >
          {
            recentPackages && recentPackages.length ?
              recentPackages.map((packageData, i) => (
                <div key={i}>
                  <PackageCardExperiment heading={'recent packages'} card={packageData} isPackageRevamp={true}/>
                </div>
              )) : null
          }
        </Swiper>
        </div>
      </div>
    ) : null;
  }
}

export default withCookies(RecentPackages);
