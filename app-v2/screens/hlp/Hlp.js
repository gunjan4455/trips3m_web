import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import _isEmpty from 'lodash/isEmpty';
import styled from '@emotion/styled';
import Sticky from 'react-stickynode';
import { stringify } from 'query-string';

import 'app/theme/HotelListing.scss';

import { calculateGuests, setHotelSearchParamsCookie } from 'modules/hotel/helpers';
import Breadcrumb from 'modules/shared/Breadcrumb';
import Faqs from 'modules/faqs';
import PopularPackages from 'modules/packages/popular';
import PlacesToVisit from 'modules/placesToVisit';
import TravelerStories from 'modules/travellerStory';
import HotelCard from 'modules/hlp/HotelCard';
import Guide from 'modules/shared/Guide';
import {
  parseHotelUrl,
  parseHotelFilters,
  Constants,
  findElementByKey,
  getRoomStay,
  getHotelSearchParams
} from 'helpers/hotels';
import { getCurrentMonth, getTravelMonth } from 'helpers/DateTime';
import SortAndFilter from 'modules/shared/SortFilters/SortAndFilter';
import KnowMoreCard from 'modules/shared/KnowMoreCard';
import 'theme/HotelListing.scss';
import HeaderCommon from 'modules/header/HeaderCommon';
import { default as HeaderTitle } from 'modules/header/HeaderTitle';
import RecommendedBanner from "modules/shared/RecommendedBanner";
import LoadMorePackages from 'modules/shared/loadMorePackages';
import { getDestination } from 'helpers/parsers';
import { setCookie } from 'helpers/FormDataFormatter';
import Footer from 'modules/shared/Footer';
import NoPackageFound from 'modules/shared/NoPackageFound';
import FixedMenu from 'components/FixedMenu/FixedMenu';
import { createHelmetBanner } from 'helpers/seoHelpers';
import InterLinking from 'modules/shared/interlinking';
import { useQuery } from 'containers/Listing/parseFilters';
import HotelSearchInfoEditable from 'modules/hotel/components/HotelSearchInfoEditable';
import BookableInfo from 'modules/hlp/BookableInfo';
import { getAfterHotelCardsObj, renderCardsOrSlider, renderTestimonialCard, getComponentFromPosition } from 'helpers/trustCards';
import  { FIRST_FOLD, AFTER_HOTEL_CARD } from 'constants/trustCards';
import { rescue } from 'helpers/utils';
import { trackSegment } from 'actions/segmentEvents';
import { getInventorySearchObject } from 'helpers/hotels';

const ScrollElement = styled(Sticky)({
  '&.hidden': {
    height: '0',
    visibility: 'hidden',
  },
  zIndex: 6,
  position: 'relative',
  ' .nav-cta': {
    display: 'none'
  },
  '&.show': {
    '&.hidden': {
      height: 'auto',
      visibility: 'visible',
    },
    ' .package-fixed-hdr': {
      visibility: 'visible'
    },
    ' .nav-cta': {
      display: 'block'
    }
  }
});

class Hlp extends Component {
  static propTypes = {
    hlp: PropTypes.object,
    breadcrumbs: PropTypes.array,
    routes: PropTypes.array,
    history: PropTypes.object,
    location: PropTypes.object.isRequired,
    applyFilters: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    applySort: PropTypes.func,
    loadMoreHotels: PropTypes.func,
    resetFilters: PropTypes.func,
    primaryPivot: PropTypes.object,
    match: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    packages: PropTypes.array,
    isPublished: PropTypes.bool,
    footerLinks: PropTypes.array,
    loading: PropTypes.bool,
    searchParams: PropTypes.object,
  };

  static defaultProps = {
    applySort: () => {
    },
    loadMoreHotels: () => {
    },
    primaryPivot: {},
    packages: []
  };

  static renderHotelCardWithBanner(hotelsList, location, plpLink, searchParams, afterHotelCardsObj, testimonialCardObj) {
    return hotelsList.map((item, i) =>
      <>
        <div className="mb8" key={i}>
          <HotelCard item={item} location={location} searchParams={searchParams} />
        </div>
        { renderCardsOrSlider(afterHotelCardsObj[i+1]) }
        { renderTestimonialCard(testimonialCardObj, i+1) }
        { i === 1 ? <div className="mb8"><KnowMoreCard link={plpLink} /></div> : null}
      </>);
  };

  constructor(props) {
    super(props);
    this.state = {
      bannerState: true,
      resetSelectedFilters: null,
      checkInCheckOut: false,
      updatedSearchParams: props.searchParams,
      error: {
        checkInCheckOut: false
      }
    };
    this.resetFilters = this.resetFilters.bind(this);
    this.pageNumber = 1;
  }

  componentDidUpdate(prevProps) {
    setCookie('cb_dt', '');
    if (prevProps.location !== this.props.location) {
      const { city, destination } = this.props.hlp && this.props.hlp.data;
      getDestination(city || destination);
    }
  }

  trackHotelSearches = () => {
    rescue(() => {
      const { hlp, searchParams, location: { search } } = this.props;
      const { country, destination, isBookableB2c, hotels } = hlp && hlp.data || {};
      const { checkInDate, checkOutDate, rooms } = searchParams || {};
      if (isBookableB2c && checkInDate && checkOutDate && hotels.hotels.length) {
        const roomObject = rooms && rooms.map(room =>  ({'A':room.adults, 'C':room.children})) || {};
        const hotelList = hotels.hotels && hotels.hotels.length && hotels.hotels.filter(hotel => hotel.isBookableB2c && hotel.available);
        const segmentObj = getInventorySearchObject(country, '', destination, checkInDate, checkOutDate,
                            hotelList.length, JSON.stringify(roomObject), '', '',
                            calculateGuests(rooms), rooms.length, '', '', search, 'Hotels',
                            { miscellaneous_type_2: '#Filters',  miscellaneous_id_2: search});
        trackSegment(segmentObj);
      }
    });
  };

  componentDidMount() {
    if (this.props.hlp.data) {
      const { city, destination } = this.props.hlp.data;
      getDestination(city || destination);
      this.trackHotelSearches();
    }
  }

  onBannerClose = () => {
    this.setState({ bannerState: !this.state.bannerState });
  };

  loadMoreHotels = () => {
    this.pageNumber = this.pageNumber + 1;
    const { loadMoreHotels, location, match: { params }, route } = this.props;
    const { search } = location;
    const query = useQuery(search);
    const { destination, landmark, filterType } = params;
    const propertyType = route.hotelType;
    const { primaryPivot, secondaryPivot } = parseHotelUrl({
      filterType,
      propertyType,
      destination,
      landmark,
      query
    });

    const star_ratings = secondaryPivot[Constants.STAR_RATING] ?
      findElementByKey('title', secondaryPivot[Constants.STAR_RATING]).value : '';

    const themes = secondaryPivot[Constants.THEMES] ? secondaryPivot[Constants.THEMES] : '';
    const travelMonth = getTravelMonth(query.travelmonth) ?
      getTravelMonth(query.travelmonth) + 1 : getCurrentMonth() + 1;

    const hotelSearchParams = getHotelSearchParams({}, query);

    loadMoreHotels({
      query: parseHotelFilters(query, 'query').filters,
      pageNumber: this.pageNumber,
      params: {
        property_types: propertyType,
        location: params.destination,
        nearby: landmark || '',
        star_ratings,
        themes,
        travel_month: travelMonth
      },
      hotelSearchParams: hotelSearchParams,
      sortBy: query.sort_by
    });
  };

  resetFilters({ location, primaryPivot, secondaryPivot, params, initialPrimaryPivot }) {
    const values = {};
    if (initialPrimaryPivot.property_types !== Constants.DEFAULT_HOTELS) {
      values[Constants.PROPERTY_TYPE] = { [initialPrimaryPivot.property_types]: true };
    }
    if (Object.keys(secondaryPivot).length) {
      const secTitle = secondaryPivot[Object.keys(secondaryPivot)[0]];
      const secValue = Object.keys(secondaryPivot)[0] === Constants.STAR_RATING ?
        findElementByKey('title', secTitle).value : secTitle;
      values[Object.keys(secondaryPivot)[0]] = { [secValue]: true };
    }
    this.props.resetFilters(values);
    this.setState({ resetSelectedFilters: values });
  }

  setHotelSearchParams = (data) => {
    const updatedSearchParams = {
      ...this.state.updatedSearchParams,
      ...data,
    };

    this.setState({ updatedSearchParams });
  };

  getHotelPrice = () => {
    const { location } = this.props;
    const { updatedSearchParams } = this.state;
    const { checkInDate, checkOutDate, rooms } = updatedSearchParams;

    this.setState({ error: { ...this.state.error, checkInCheckOut: false } });
    if (!(checkInDate && checkOutDate)) {
      this.setState({ error: { ...this.state.error, checkInCheckOut: true } });
      return;
    }

    setHotelSearchParamsCookie(updatedSearchParams);

    const query = useQuery(this.props.location.search);
    query.checkin = checkInDate;
    query.checkout = checkOutDate;
    query.roomStay = getRoomStay(rooms, true);

    this.props.history.push(`${location.pathname}?${stringify(query, { encode: false })}`);
  };

  render() {
    if (_isEmpty(this.props.hlp.data)) {
      return null;
    }

    const {
      city, destination, breadcrumbs, footerSection, filters: filterList, hotels, faqs,
      sortByFilter, plpLink, metaTags, canonicalUrl, banner, isPublished, isBookableB2c = true,
      trustCards, testimonialCards
    } = this.props.hlp.data;
    const firstFoldCardComponent = getComponentFromPosition( FIRST_FOLD, trustCards);
    const afterHotelCards = trustCards && trustCards.filter((item) => item.position === AFTER_HOTEL_CARD);
    const afterHotelCardsObj = getAfterHotelCardsObj(afterHotelCards);
    const testimonialCardObj = getAfterHotelCardsObj(testimonialCards);

    const {
      location, match: { params }, applySort, applyFilters, footerLinks,
      primaryPivot: initialPrimaryPivot, packages, route, history, loading, searchParams
    } = this.props;
    const propertyType = route.hotelType;
    const hotelsList = hotels && hotels.hotels || [];
    const PlacesToVisitContainer = PlacesToVisit.container;
    const FaqsContainer = Faqs.hlpContainer;
    const PopularPackagesContainer = PopularPackages.container;
    const TravelerStoriesContainer = TravelerStories.container;
    const { filterType, landmark } = params;
    const query = useQuery(this.props.location.search);
    const { primaryPivot, secondaryPivot, newQuery } = parseHotelUrl({
      filterType,
      propertyType,
      destination,
      landmark,
      query
    });
    const { filters: selectedFilters } = parseHotelFilters(newQuery);
    const filters = this.state.resetSelectedFilters;
    const travelmonth = getTravelMonth(query.travelmonth) ?
      getTravelMonth(query.travelmonth) + 1 : getCurrentMonth() + 1;

    return (
      <div className="sbc5">
        <Helmet>
          {createHelmetBanner(metaTags, canonicalUrl, location.pathname)}
          {!isPublished && <meta name="robots" content="noindex, nofollow" />}
          <meta name="theme-color" content="#68c4c1" />
        </Helmet>
        <HeaderCommon />
        <HeaderTitle title={banner ? banner.title : ''} backUrl={this.props.location.action === 'POP' ? '/' : ''} />

        {isBookableB2c ?
          <div>
            {
              !(searchParams.checkInDate && searchParams.checkOutDate) ?
                <div>
                  <BookableInfo searchParams={this.state.updatedSearchParams}
                                checkInCheckOut={this.state.checkInCheckOut}
                                getHotelPrice={this.getHotelPrice} setHotelSearchParams={this.setHotelSearchParams}
                                error={this.state.error} />
                  <ScrollElement className="hidden" activeClass="show" top={0} innerZ={6}>
                    <div>
                      <HotelSearchInfoEditable isHlp={true} params={this.state.updatedSearchParams}
                                               checkInCheckOut={this.state.checkInCheckOut}
                                               getHotelPrice={this.getHotelPrice}
                                               setHotelSearchParams={this.setHotelSearchParams}
                                               error={this.state.error} />
                    </div>
                  </ScrollElement>
                </div> :
                <Sticky enabled={true} innerZ={6} top={0}>
                  <div>
                    <HotelSearchInfoEditable isHlp={true} params={this.state.updatedSearchParams}
                                             checkInCheckOut={this.state.checkInCheckOut}
                                             getHotelPrice={this.getHotelPrice}
                                             setHotelSearchParams={this.setHotelSearchParams}
                                             error={this.state.error} />
                  </div>
                </Sticky>
            }
          </div> : null
        }
        <div className="mb8">
        { firstFoldCardComponent }
        { renderTestimonialCard(testimonialCardObj, FIRST_FOLD)}
        </div>
        <SortAndFilter
          location={location}
          sortBy={sortByFilter}
          applySort={applySort}
          isHlp={isBookableB2c}
          applyFilters={values => applyFilters({
            location,
            values,
            primaryPivot,
            secondaryPivot,
            params,
            push: history.push
          })}
          filterList={filterList}
          initialValues={filters || selectedFilters}
          resetFilters={() => this.resetFilters({
            location,
            primaryPivot,
            secondaryPivot,
            params,
            initialPrimaryPivot
          })}
          push={history.push}
        />
        {
          this.state.bannerState ?
            <div className="mt8 mb8">
              <RecommendedBanner onBannerClose={this.onBannerClose} />
            </div> : null
        }
        <NoPackageFound totalPackages={hotels.totalEntries || 0} />
        {
          hotelsList && hotelsList.length ?
            Hlp.renderHotelCardWithBanner(hotelsList, location, plpLink, searchParams, afterHotelCardsObj, testimonialCardObj)
            : null
        }
        <div className="row row- mb8">
          <LoadMorePackages
            packagesRemaining={hotels.totalEntries - hotelsList.length}
            loadMorePackages={this.loadMoreHotels}
            currentPage={query.page || 1}
            title={`${propertyType} remaining)`}
            loading={loading}
          />
          {footerLinks.length ? <InterLinking footerLinks={footerLinks} /> : null}
        </div>
        {
          faqs && faqs.faqs.length ?
            <div className='mb8 br'>
              <FaqsContainer />
            </div> : null
        }
        {
          footerSection &&
          <div className="mb8">
            <Guide
              guide={{
                title: footerSection.title,
                heading: footerSection.heading,
                description: footerSection.headerBelowText
              }} />
          </div>
        }
        {
          packages && packages.length ?
            <div className="mb8">
              <PopularPackagesContainer title={`${city || destination} Packages`} travelmonth={travelmonth} />
            </div> : null
        }
        <div className="mb8">
          {
            city || destination ? <TravelerStoriesContainer
              data={{
                title: `Top Travel Blogs for ${destination}`,
              }}
              config={{ csr: true }}
              destination={city || destination}
              viewAll="/blog/travelogues?referer=travelogue_hotel_listing" /> : null
          }
        </div>
        {
          city || destination ?
            <div className="mb8">
              <div className="p15 sbcw">
                <PlacesToVisitContainer />
              </div>
            </div> : null
        }
        {
          footerSection &&
          <div className="mb8">
            <Guide
              guide={{
                description: footerSection.footerAboveText
              }} />
          </div>
        }
        <FixedMenu />
        <div className="p8 pt0">
          <Breadcrumb breadcrumbs={breadcrumbs} />
        </div>
        <div className="row row- pb8 pt0 pl8 pr8">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Hlp;

