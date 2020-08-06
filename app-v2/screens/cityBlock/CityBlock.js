import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import HeaderHome from 'modules/header/HeaderHome';
import Banner from 'modules/banner';
import Faqs from 'modules/faqs';
import MapInformation from 'modules/mapInformation';
import PopularPackages from 'modules/packages/popular';
import LetsGo from 'modules/shared/LetsGo';
import Rated from 'modules/shared/Rated';
import TTExperties from 'modules/shared/TTExperties';
import TravelerReview from 'modules/travelerReview';
import TravelerStories from 'modules/travellerStory';
import CityBlockNav from 'modules/cityBlock/CityBlockNav';
import RecentPackages from 'modules/packages/recent';
import LetsDiscover from 'modules/letsDiscover';
import Breadcrumb from 'modules/shared/Breadcrumb';
import FixedButton from 'modules/shared/FixedButton';
import FixedMenu from 'components/FixedMenu/FixedMenu';
import Footer from 'modules/shared/Footer';
import { getCurrentMonth, getTravelMonth } from 'helpers/DateTime';
import { initializeExitIntent, showPopUp, hidePopup } from 'helpers/exitIntent';
import Interlinking from 'modules/shared/interlinking';
import CityBlockRoutes from '../../../server/cityBlockRoutes';
import 'theme/CityBlock.scss';
import { CITYBLOCK_PAGE_VIEW, trackSegment } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';
import { useQuery } from 'containers/Listing/parseFilters';

const GLargeBannerDiv = styled.div({
  height: '270px'
});

const GFixedChatDiv = styled.div({
  width: '56px',
  height: '56px',
  bottom: '60px',
  transform: 'translate3d(0,0,0)',
});

const getExitIntent = () => {
  return <div id="reactExitIntentImage" className="mkt-mob-exit-intent relative pl8 pr8 mb8" onClick={showPopUp} />;
};

class CityBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: ''
    };
  }

  componentDidMount() {
    document.readyState === 'complete' ? initializeExitIntent() :
      window.addEventListener('load', initializeExitIntent);
    this.pageTrackSegmentEvent(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.pageTrackSegmentEvent(this.props);
    }
  }

  pageTrackSegmentEvent = (props) => {
    const { cityBlock } = props;
    rescue(() => {
      trackSegment({
        event: CITYBLOCK_PAGE_VIEW,
        destination_list: cityBlock.destination,
        destination_id: 0,
        destination_type: 'Tour'
      });
    });
  };

  render() {
    const { location: { search }, match: { params: { tab, scheme } }, cityBlock, breadcrumbs, footerLinks,
    route: { indexTab }} = this.props;
    const { tabs, destination, rated, popularPackages } = cityBlock;
    const TravelerReviewContainer = TravelerReview.container;
    const TravelerStoriesContainer = TravelerStories.container;
    const FaqsContainer = Faqs.container;
    const MapInformationContainer = MapInformation.container;
    const BannerContainer = Banner.container;
    const LetsDiscoverContainer = LetsDiscover.container;
    const PopularPackagesContainer = PopularPackages.container;
    const query = useQuery(search);
    const travelmonth = query.travelmonth ? (query.travelmonth === 'nd' ? 13 :
      getTravelMonth(query.travelmonth) + 1) : getCurrentMonth() + 1;
    let newTab = tab;
    if (!scheme) {
      newTab = indexTab;
    } else if (scheme && !tab) {
      newTab = 'overview';
    }

    return (
      <div className="sbc5">
        <div id="bg-mask-ei" className="bg-mask-ei" onClick={e => hidePopup(e)} />
        {destination === 'India' ?
          <GLargeBannerDiv className="relative z15">
            <div className="relative z15">
              <HeaderHome isTransparent={true} />
            </div>
            <div className="absolute t0 l0 wfull hfull">
              <BannerContainer isLargeBanner={true} isCityBlock={true} />
            </div>
          </GLargeBannerDiv> :
          <div>
            <HeaderHome />
            <div className="m8">
              <BannerContainer isCityBlock={true} />
            </div>
          </div>}

        <div className="mb8 topStickyNav" id="autoScrollToPoint">
          <CityBlockNav tabs={tabs} destination={destination} />
        </div>
        <div className="mt8 mb8 mt0">
          <MapInformationContainer tab={newTab} location={this.props.location} />
        </div>
        <CityBlockRoutes
          match={ this.props.match}
          location={this.props.location}
          route={this.props.route}
          exitIntent={getExitIntent()}
        />
        {
          popularPackages && popularPackages.length ?
            <div className="mt8 mb8 mt0">
              <PopularPackagesContainer travelmonth={travelmonth} />
            </div> : null
        }
        <div className="m8 mt0">
          <TTExperties />
        </div>
        <div className="mt0 sbcw">
          <TravelerReviewContainer destination={destination}/>
        </div>
        { footerLinks.length ? <Interlinking footerLinks={footerLinks}/> : null}
        <div className="mt8 mb8 mt0">
          <TravelerStoriesContainer spacingCss={{ marginBottom: '0' }} data={{
            title: 'Our Traveler Stories',
            heading: 'They traveled. They experienced. They shared.'
          }} config={{ csr: true }} destination={destination}
                                    viewAll="/blog/travelogues?referer=travelogue_cityblock" />
        </div>
        <div className="mt8 mb8 mt0">
          <LetsDiscoverContainer spacingCss={{ marginBottom: '0' }} destination={destination} />
        </div>
        <div className="mt8 mb8 mt0">
          <LetsGo data={{
            title: 'Want best packages handpicked just for you?',
            heading: 'Fill the form and get a callback from our holiday experts'
          }} destination={destination}
          />
        </div>

        {destination == 'India' ?
          null :
          <div className="mt8 mb8 mt0">
            <FaqsContainer />
          </div>
        }

        <RecentPackages currentPackageID={0} />

        <div className="p8 pt0 clearfix">
          <Breadcrumb breadcrumbs={breadcrumbs} />
          <Rated rated={rated} destination={destination} />
        </div>
        {
          newTab === 'places_to_visit' || newTab === 'things_to_do' ?
            null :
            <GFixedChatDiv className="fixed r0 z5"><FixedMenu /></GFixedChatDiv>
        }
        <FixedButton destination={destination} />
        <div className="pb64 pbc3"><Footer /></div>
      </div>
    );
  }
}

CityBlock.propTypes = {
  cityBlock: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  placesToVisit: PropTypes.object,
  location: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array,
  faqs: PropTypes.array,
  routes: PropTypes.object.isRequired,
  exitIntent: PropTypes.object.isRequired,
  footerLinks: PropTypes.array,
  match: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
};

CityBlock.defaultProps = {
  placesToVisit: {},
  breadcrumbs: []
};

export default CityBlock;
