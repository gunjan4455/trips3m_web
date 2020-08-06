import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element, Link as scrollLink } from 'react-scroll';
import Sticky from 'react-stickynode';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { Parser } from 'html-to-react';
import { stringify as encodeURL } from 'query-string';

import Breadcrumb from 'modules/shared/Breadcrumb';
import {
  capitalizeFirstLetter, capitalizeEveryFirstLetter,
  getDestination, makeCapitalizedSentence
} from 'helpers/parsers';
import ReadMoreByHeight from 'modules/shared/ReadMoreByHeight';
import HotelDetailHeader from 'modules/hdp/HotelDetailHeader';
import HotelDetailNav from 'modules/hdp/HotelDetailNav';
import HighlightTabs from 'modules/shared/HighlightTabs';
import Nearby from 'modules/hdp/Nearby';
import PriceRange from 'modules/hdp/PriceRange';
import CheckList from 'modules/shared/CheckList';
import GetCallbackBanner from 'modules/shared/GetCallbackBanner';
import Amenities from 'modules/hdp/Amenities';
import DiningCuisine from 'modules/hdp/DiningCuisine';
import HotelReview from 'modules/hdp/HotelReview';
import SimilarHotels from 'modules/hdp/SimilarHotels';
import PopularPackages from 'modules/packages/popular';
import SliderWithThumbnail from 'modules/hdp/SliderWithThumbnail';
import Faq from 'modules/faqs/Faqs';
import { getCurrentMonth, format } from 'helpers/DateTime';
import CTA from 'modules/hdp/CTA';
import TravelerStories from 'modules/travellerStory';
import HeaderCommon from 'modules/header/HeaderCommon';
import HotelContacts from 'modules/hdp/HotelContacts';
import Footer from 'modules/shared/Footer';
/*import FixedMenu from 'components/FixedMenu/FixedMenu';*/
import HotelDeals from 'modules/hotel/deals';
import { getCookie, setCookie } from 'helpers/FormDataFormatter';
import { createHelmetBanner } from 'helpers/seoHelpers';
import { default as HeaderTitle } from 'modules/header/HeaderTitle';
import RoomsAndGuests from 'modules/hotel/components/RoomsAndGuests';
import CheckInCheckOut from 'modules/hotel/components/CheckInCheckOut';
import StickyPriceFooter from 'modules/hotel/components/StickyPriceFooter';
import StickySoldOutFooter from 'modules/hotel/components/StickySoldOutFooter';
import HotelSearchInfo from 'modules/hotel/components/HotelSearchInfo';
import { calculateGuests, calculateNights } from 'modules/hotel/helpers';
import { setHotelSearchParamsCookie } from 'modules/hotel/helpers';
import { getAfterHotelCardsObj, getComponentFromPosition, renderTestimonialCard } from 'helpers/trustCards';
import { ABOVE_FAQS, ABOVE_HEADLINE, ABOVE_HIGHLIGHTS, ABOVE_ROOM_TYPES } from 'constants/trustCards';
import { getRoomStay, getSegmentObject, getInventorySearchObject } from 'helpers/hotels';
import { trackSegment } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';

import 'app/theme/HotelListing.scss';
import styles from './hdp.cm.scss';
import { useQuery } from 'containers/Listing/parseFilters';

const parser = new Parser();

const ScrollElement = styled(Sticky)({
  '&.hidden': {
    height: '0',
    visibility: 'hidden',
  },
  zIndex: 4,
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

function createHeaderConstants(displaySections, nearbySections, testimonials, popularPackages) {
  let headerConstants = [];

  headerConstants = [
    ...headerConstants,
    ...Object.keys(displaySections || {})
      .filter(k => displaySections[k].description || displaySections[k].tags.length)
      .map(k => ({ title: capitalizeEveryFirstLetter(k), section_name: `${k}-sec` }))
  ];

  if (nearbySections && nearbySections.length) {
    headerConstants = [...headerConstants, { title: 'Nearby', section_name: 'nearby-sec' }];
  }

  if (testimonials && testimonials.testimonialList.length) {
    headerConstants = [...headerConstants, { title: 'Reviews', section_name: 'testimonial-sec' }];
  }

  if (popularPackages && popularPackages.length) {
    headerConstants = [...headerConstants, { title: 'Packages', section_name: 'packages-sec' }];
  }

  return headerConstants;
}

class Hdp extends Component {
  constructor(props) {
    super(props);
    this.createHeaderConstants(props);
    this.getHotelPrice = this.getHotelPrice.bind(this);
    // this.handleStateChange = this.handleStateChange.bind(this);
    this.state = { hotelPriceLoadingSt: false, checkInCheckOut: false };
    const trustCards = props.details.trustCards;
    this.trustCardComponents = {
      AboveHeadlineCardComponent: getComponentFromPosition(ABOVE_HEADLINE, trustCards),
      AboveHighlightsCardComponent: getComponentFromPosition(ABOVE_HIGHLIGHTS, trustCards),
      AboveRoomTypesCardComponent: getComponentFromPosition(ABOVE_ROOM_TYPES, trustCards),
      AboveFAQCardComponent: getComponentFromPosition(ABOVE_FAQS, trustCards),
    };
  }

  createHeaderConstants = (props) => {
    if (props.details && props.details.hotel) {
      const { details: { hotel: { displaySections, nearbySections }, testimonials }, packages } = props;
      this.headerConstants = createHeaderConstants(displaySections, nearbySections, testimonials, packages);
    }
  };

  trackHotelSearches = () => {
    rescue(() => {
      const { hotelSearchData, searchParams, details } = this.props;
      const { hotel: { id, name, city, country, isBookableB2c = false } } = details || {};
      const { checkInDate, checkOutDate, rooms } = searchParams || {};
      if (isBookableB2c && checkInDate && checkOutDate) {
        const { status, price } = hotelSearchData || {};
        const { discounted, total } = price || {};
        const roomObject = rooms && rooms.map(room =>  ({'A':room.adults, 'C':room.children})) || {};
        const segmentObj = getInventorySearchObject(country.name, city.id, city.name, checkInDate, checkOutDate,
          status && status.available, JSON.stringify(roomObject), name, id, calculateGuests(rooms), rooms.length,
          total || 'NA', discounted || 'NA');
        trackSegment(segmentObj);
      }
    });
  };

  componentDidMount() {
    getDestination(this.destinationCity);
    this.trackHotelSearches();
  }

  componentDidUpdate(prevProps) {
    setCookie('cb_dt', '');
    if (prevProps.location !== this.props.location) {
      getDestination(this.destinationCity);
    }
  }

  getUrlQueryObj = ({ checkInDate: selectedCheckinDate, checkOutDate: selectedCheckoutDate, rooms: selectedRooms }) => {
    const { searchParams: { checkInDate: oldCheckinDate, checkOutDate: oldCheckoutDate, rooms: oldRooms } } = this.props;
    const hotelSearchCookie = getCookie('hotel_search');
    return {
      checkin: selectedCheckinDate || oldCheckinDate,
      checkout: selectedCheckoutDate || oldCheckoutDate,
      roomStay: getRoomStay(selectedRooms || oldRooms, true, hotelSearchCookie)
    };
  };

  updateUrlWithDateAndGuest = ({ checkInDate, checkOutDate, rooms }) => {
    const { location, history } = this.props;
    const queryObj = this.getUrlQueryObj({ checkInDate, checkOutDate, rooms });
    history.push(`${location.pathname}?${encodeURL(queryObj, { encode: false })}`);
  };

  getHotelPrice(data, module) {
    const searchParams = {
      ...this.props.searchParams,
      ...data,
      all_rooms: true,
      hotel_id: this.props.details.hotel.id
    };

    setHotelSearchParamsCookie(searchParams);
    let details = {};
    if (module === 'dates') {
      details = {
        section: 'Booking Dates',
        cta: 'Save',
        label: 'Date Added',
        miscellaneous_type_2: 'Check Out Date',
        miscellaneous_id_2: format(searchParams.checkOutDate, 'YYYY/MM/DD'),
        miscellaneous_type_1: 'Check In Date',
        miscellaneous_id_1: format(searchParams.checkInDate, 'YYYY/MM/DD')
      };
    } else {
      const roomObject = searchParams.rooms.map(room =>  ({'A':room.adults, 'C':room.children}));
      details = {
        section: 'Occupancy Preference',
        cta: 'Save',
        label: 'Guests Clicked',
        miscellaneous_type_2: 'Occupancy Preference',
        miscellaneous_id_2: JSON.stringify(roomObject),
      };
    }
    this.trackSegment(details);
    if (searchParams.checkInDate && searchParams.checkOutDate) {
      this.updateUrlWithDateAndGuest(searchParams);
    }
    this.props.updateHotelSearchParams(searchParams);
    this.props.hotelSearch(searchParams);
  }

  handleSelectRoom = () => {
    const { history, match: { params }, details: { hotel } } = this.props;
    const queryObj = this.getUrlQueryObj({});
    history.push(`/hotel/${params.hotelName}/select-room?hotelId=${hotel.id}&${encodeURL(queryObj, { encode: false })}`);
  };

  toggleCheckInCheckOut = () => {
    this.setState({checkInCheckOut: !this.state.checkInCheckOut});
  };

  trackSegment = (segmentObject) => {
    rescue(() => {
      const { hotelSearchData } = this.props;
      const segmentData = getSegmentObject(segmentObject, hotelSearchData) || {};
      if (segmentData && Object.keys(segmentData).length) {
        trackSegment(segmentData);
      }
    });
  };

  render() {
    const {
      details, updateTestimonials, match: { params }, updateMonth, location, packages,
      searchParams, hotelSearchData, hotelPriceLoading
    } = this.props;
    const { hotelPriceLoadingSt, checkInCheckOut } = this.state;
    if (!details.hotel) {
      return <div />;
    }
    const {
      address, contactInfo, starRating, userRating, displayName: hotelDisplayName,
      name: hotelName, topRatedBudget: budget, topRatedLuxury: luxury, ttRecomended: recommended,
      sliderPic, priceRange, months, highlights, map,
      proximity, displaySections, city, country, conclusionText, nearbySections, summaryText,
      travelMonth, id, propertyType, isBookableB2c, basePrice
    } = details.hotel;
    const { testimonialCards } = details;

    const query = useQuery(location.search);
    this.destinationCity = city ? city.name : country ? country.name : '';
    const destinationCountry = country ? country.name : city ? city.name : '';
    const { faqs, similarHotels, testimonials, metaTags: metaData, canonicalUrl, backUrl } = details;
    const month = travelMonth || query.travelMonth || getCurrentMonth() + 1;
    const type = capitalizeFirstLetter(propertyType || 'hotel');
    const parentTitle = `${type}s in ${capitalizeEveryFirstLetter(this.destinationCity)}`;
    const PopularPackagesContainer = PopularPackages.container;
    const TravelerStoriesContainer = TravelerStories.container;

    const hotelPrice = hotelSearchData.price ? hotelSearchData.price : basePrice;
    const disableSelectRoom = !(searchParams.checkInDate && searchParams.checkOutDate && hotelSearchData.price);

    // const HotelDetailNav_stickTopVal = this.state.HotelSearchInfoNav ? 50 : 0;

    const { AboveFAQCardComponent, AboveRoomTypesCardComponent, AboveHighlightsCardComponent, AboveHeadlineCardComponent } = this.trustCardComponents;
    const testimonialCardObj = getAfterHotelCardsObj(testimonialCards);
    const AboveHeadlineTestimonial = renderTestimonialCard(testimonialCardObj, ABOVE_HEADLINE);
    const AboveHighlightsTestimonial = renderTestimonialCard(testimonialCardObj, ABOVE_HIGHLIGHTS);
    const AboveRoomTypesTestimonial = renderTestimonialCard(testimonialCardObj, ABOVE_ROOM_TYPES);
    const AboveFaqTestimonial = renderTestimonialCard(testimonialCardObj, ABOVE_FAQS);
    return (
      <div className="sbc5">
        <Helmet>
          <link href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico"
                rel="shortcut icon" type="image/x-icon" />
          <link href="//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico"
                rel="icon" type="image/x-icon" />
          {createHelmetBanner(metaData, canonicalUrl, location.pathname)}
          {!details.isPublished && <meta name="robots" content="noindex, nofollow" />}
          <meta name="theme-color" content="#68c4c1" />
        </Helmet>
        <div className={styles.borderLine} />
        <HeaderCommon />
        <HeaderTitle title={parentTitle ? parentTitle : ''} backUrl={`${backUrl}${location.search}`} showTitleAsH1={false} />
        <div>
          <ScrollElement
            activeClass="show"
            bottomBoundary="#fixedMenuEnd"
            // top={HotelDetailNav_stickTopVal}
          >
            <div className={`sbcw mb8 ${styles.nav}`}>
              <HotelDetailNav
                options={this.headerConstants}
                Link={scrollLink}
                destination={this.destinationCity || destinationCountry}
                hotelId={id}
                type={makeCapitalizedSentence(type, '_')}
              />
            </div>
          </ScrollElement>
        </div>
        <div>
          { AboveHeadlineCardComponent ?
            <div className="pt8 pb8 sbcw">
            { AboveHeadlineCardComponent }
          </div> : null}
          { AboveHeadlineTestimonial }
        </div>
        <div className="mb8 sbcw p15 pb0">
          <div className="mb8">
            <HotelDetailHeader {...{
              address, contactInfo, starRating, hotelName, hotelDisplayName, userRating, budget, luxury,
              recommended, map, proximity, destination: destinationCountry
            }} />
          </div>

          <div className="mb15">
            <SliderWithThumbnail images={sliderPic} hotelName={hotelName} />
          </div>

          {
            isBookableB2c ?
              <div className="relative">
                <div id="at_bookable_section" className="absolute" style={{top: '-50px'}}/>
                <div className={styles.bookingBlock}>
                  <div className="mb15">
                    <CheckInCheckOut
                      handleSubmit={(values) => this.getHotelPrice(values, 'dates')}
                      data={searchParams}
                      checkInCheckOut={checkInCheckOut}
                      trackSegment={this.trackSegment}
                    />
                  </div>
                  <RoomsAndGuests handleSubmit={(values) => this.getHotelPrice(values, 'rooms')} data={searchParams} trackSegment={this.trackSegment} />
                  {(hotelPriceLoadingSt || !hotelSearchData.status || hotelSearchData.status.available) && hotelPrice ? (
                      <StickyPriceFooter cta="Select Room"
                                         loading={hotelPriceLoadingSt || hotelPriceLoading}
                                         disabled={disableSelectRoom}
                                         price={hotelPrice}
                                         night={calculateNights(searchParams.checkInDate, searchParams.checkOutDate)}
                                         guest={calculateGuests(searchParams.rooms)}
                                         ctaHandler={this.handleSelectRoom} />) :
                    (<StickySoldOutFooter cta="Change Date"
                                          loading={hotelPriceLoadingSt || hotelPriceLoading}
                                          searchParams={searchParams}
                                          ctaHandler={this.toggleCheckInCheckOut} />)
                  }
                </div>

                <ScrollElement
                  className="hidden"
                  activeClass="show"
                  top={48}
                  innerZ={4}
                >
                  <div className={`pt8 pb8 ${styles.bookingBlock}`}>
                    <HotelSearchInfo params={searchParams} scrollTo="at_bookable_section" />
                  </div>
                </ScrollElement>

              </div> : (priceRange && (priceRange.priceFrom || priceRange.priceTo)
              ? <div className="clearfix mb8"><PriceRange priceTitle={'Price Range per Night'} priceRange={priceRange}
                                                          months={months} month={month} updatePrice={updateMonth} />
              </div>
              : null)
          }
          {
            !isBookableB2c ?
              <CTA destination={capitalizeEveryFirstLetter(this.destinationCity || destinationCountry)} hotelId={id}
                   type={makeCapitalizedSentence(type, '_')} /> : null
          }
          {/* Overview Data */}
        </div>
        { AboveHighlightsCardComponent || AboveHighlightsTestimonial ?
          <div className="mt8">
            { AboveHighlightsCardComponent }
            { AboveHighlightsTestimonial }
          </div> : null}
        {
          highlights.length ? <div className="mb8 p15 sbcw"><CheckList checkList={highlights} /></div> : null
        }
        {
          displaySections.overview && displaySections.overview.description ?
            <Element name="overview-sec" className="clearfix sbcw p15 mb8">
              <div className="mb15">
                <ReadMoreByHeight
                  heading={displaySections.overview.title}
                  maxHeight={64}
                  content={displaySections.overview.description}
                />
              </div>
              {
                displaySections.overview.tags.length ?
                  <HighlightTabs tagList={displaySections.overview.tags} /> : null
              }
            </Element> : null
        }

        <div className="mb8">
          <GetCallbackBanner destination={capitalizeEveryFirstLetter(this.destinationCity)} hotelId={id}
                             type={makeCapitalizedSentence(type, '_')} />
        </div>
        {/*Rooms and Room Type*/}
        { AboveRoomTypesCardComponent || AboveRoomTypesTestimonial ?
          <div className="mt8 mb8 sbcw">
            { AboveRoomTypesCardComponent }
            { AboveRoomTypesTestimonial }
          </div> : null}
        {
          displaySections.rooms && displaySections.rooms.description ?
            <Element name="rooms-sec" className="p15 sbcw mb8">
              <div className="mb15">
                <ReadMoreByHeight
                  heading={displaySections.rooms.title}
                  maxHeight={64}
                  content={displaySections.rooms.description}
                  hotelDisplayName={hotelDisplayName}
                />
              </div>
              <HighlightTabs tagList={displaySections.rooms.tags} />
            </Element> : null
        }
        {
          displaySections.facilities && displaySections.facilities.tags.length || displaySections.facilities.description ?
            <Element name="facilities-sec" className="p15 sbcw mb8">
              <Amenities
                amenitiesData={displaySections.facilities}
                hotelDisplayName={hotelDisplayName}
              />
            </Element> : null
        }
        {
          displaySections.dining && displaySections.dining.description ?
            <Element name="dining-sec" className="p15 sbcw mb8">
              <DiningCuisine cuisine={displaySections.dining} hotelDisplayName={hotelDisplayName} />
            </Element> : null
        }
        {
          conclusionText ?
            <div className="p15 sbcw mb8">
              <div className="radius2 overflowh f16 fw4 fitalic border p15 m0">{parser.parse(conclusionText)}</div>
            </div> : null
        }
        { AboveFAQCardComponent }
        { AboveFaqTestimonial }
        {
          faqs && faqs.faqs && faqs.faqs.length ?
            <div className="sbcw mb8">
              <Faq data={faqs} hotelDisplayName={hotelDisplayName} />
            </div> : null
        }
        {
          nearbySections.length ?
            <Element name="nearby-sec" className="mb8 sbcw">
              <Nearby nearbyTypeList={nearbySections} />
            </Element> : null
        }
        {
          testimonials && testimonials.testimonialList.length ?
            <Element name="testimonial-sec" className="p15 sbcw mb8" id="testimonials">
              <HotelReview
                testimonials={testimonials}
                userRating={userRating}
                testimonialChangeHandler={value => updateTestimonials(value, params.hotelName)}
                hotelDisplayName={hotelDisplayName}
              />

            </Element> : null
        }
        {
          summaryText ?
            <div className="p15 sbcw mb8">
              <ReadMoreByHeight
                heading="Summary"
                maxHeight={64}
                content={summaryText}
              />
            </div> : null
        }
        {
          contactInfo.email || contactInfo.website || contactInfo.phone
          || contactInfo.secondaryPhones && contactInfo.secondaryPhones.length ?
            <div className="mb8 sbcw p15">
              <HotelContacts {...{ contactInfo }} />
            </div> : null
        }
        {
          isBookableB2c ?
            <HotelDeals.container title='Similar Hotels' showBookNow={false} /> :
            similarHotels.hotels && similarHotels.hotels.length ?
              <div className="p15 sbcw mb8">
                <SimilarHotels similarHotels={similarHotels} month={month} />
              </div> : null
        }
        {
          packages && packages.length ?
            <div className="sbcw mb8" id="packages-sec">
              <PopularPackagesContainer
                title={`${capitalizeEveryFirstLetter(this.destinationCity || destinationCountry)} Packages`} />
            </div> : null
        }
        <div className="sbcw mb8">
          <TravelerStoriesContainer data={{
            title: `Top Travel Blogs for ${this.destinationCity || destinationCountry}`,
          }} config={{ csr: true }} destination={this.destinationCity || destinationCountry}
                                    viewAll="/blog/travelogues?referer=travelogue_hotel_detail" />
        </div>
        <div id="fixedMenuEnd" />
        {/*<FixedMenu />*/}
        <div className="p15 sbcw mb8">
          <Breadcrumb breadcrumbs={details.breadcrumbs} />
        </div>
        <div className="sbcw">
          <Footer />
        </div>
      </div>
    );
  }
}

Hdp.propTypes = {
  details: PropTypes.object,
  hotelPriceLoading: PropTypes.bool,
  hotelPriceLoaded: PropTypes.bool,
  updateTestimonials: PropTypes.func.isRequired,
  updateHotelSearchParams: PropTypes.func.isRequired,
  hotelSearch: PropTypes.func.isRequired,
  searchParams: PropTypes.Object,
  hotelSearchData: PropTypes.Object,
  params: PropTypes.object.isRequired,
  updateMonth: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  packages: PropTypes.array,
  backUrl: PropTypes.string,
  push: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

Hdp.defaultProps = {
  hotelPriceLoaded: false,
  details: {},
  packages: [],
};

export default Hdp;

