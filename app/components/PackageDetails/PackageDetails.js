import React from 'react';
import PropTypes from 'prop-types';
import { ScrollPercentage } from 'react-scroll-percentage';
import Sticky from 'react-stickynode';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';
import Scroll from 'react-scroll';

import Highlights from './Highlights';
import QuickLinkNav from './QuickLinkNav';
import Itinerary from './Itinerary';
import IncExclusion from './IncExclusion/IncExclusion';
import HotelFlight from './HotelFlight';
import PackageSlider from 'components/PackageDetails/PackageSlider';
import PackageDetailsPrice from './PackageDetailsPrice';
import { getRandomString, setCookie } from 'helpers/FormDataFormatter';
import ShowMore from '../Generic/ShowMore';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';
import { getLeadFunnelName, LEAD_FUNNEL, trackSegment } from 'actions/segmentEvents';
import Faq from '../Faq/Faq';
import InlineGateway from './InlineGateway';
import { getCookie, PAGE_UUID_COOKIE_KEY, LANDING_UUID_COOKIE_KEY } from 'helpers/FormDataFormatter';
import { initializeExitIntent, showPopUp } from 'helpers/exitIntent';
import PackageDetailDayItinerary from './PackageDetailDayItinerary';
import Interlinking from 'modules/shared/interlinking';
import HotelDeals from 'modules/hotel/deals';
import { inflatePrice } from "utils/parsers";
import { getCurrentMonth } from "helpers/DateTime";
import { rescue } from 'helpers/utils';
import { useQuery } from 'containers/Listing/parseFilters';

import 'components/Listing/AboutListingDestination.scss';

const parser = new Parser();

const scrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

function createHeaderConstants(packageDetails, faqs) {
  const headerConstants = [];

  if (packageDetails.overview) {
    headerConstants.push({ title: 'Overview', section_name: 'overview_box' });
  }
  if (packageDetails.itinerary) {
    headerConstants.push({ title: 'Itinerary', section_name: 'itinerary_box' });
  }
  if (packageDetails.hotels) {
    headerConstants.push({ title: 'Hotels', section_name: 'hotel_box' });
  }
  if (packageDetails.incExc.inclusions && packageDetails.incExc.exclusions) {
    headerConstants.push({ title: 'Inclusion / Exclusions', section_name: 'incexclusion_box' });
  }
  if (packageDetails.destinations.length && faqs.length) {
    headerConstants.push({ title: 'FAQ', section_name: 'faq_box' });
  }
  return headerConstants;
}

const GScrollElementContainer = styled.div({
  zIndex: 9,
  position: 'relative',
  '& .active .quicklinksContainer': {
    boxShadow: '0px 2px 6px #999',
  }
});

const Overview = ({ overview, title, trackSegment, plpHeading, isRatingSchemaEnabled }) => {
  const overviewContent = () => {
    const overviewSplit = overview.split('&lt;readmore&gt;');
    return (
      <ShowMore
        wrapText={parser.parse(overviewSplit[0])}
        moreText={parser.parse(overviewSplit[1])}
        trackSegment={trackSegment}
      />
    );
  };
  return (
    <div className="row row- ">
      <div className="container p15 sbcw about-destination overview-content" property={isRatingSchemaEnabled ? 'description' : ''}>
        {
          plpHeading ?
            <h1 className="f16 fw9 pb15">{title}</h1> : <h2 className="f16 fw9 pb15">Overview</h2>
        }
        <div className="read-more-box dynamicTextInherit">
          {overviewContent()}
        </div>
      </div>
    </div>
  );
};
Overview.propTypes = {
  overview: PropTypes.string,
  title: PropTypes.string,
  trackSegment: PropTypes.func,
  plpHeading: PropTypes.string,
  isRatingSchemaEnabled: PropTypes.bool
};
Overview.defaultProps = {
  overview: '',
  title: 'Overview',
  trackSegment: () => {},
  plpHeading: '',
  isRatingSchemaEnabled: false
};

const starToId = {
  2: '32',
  3: '8',
  4: '7',
  5: '6'
};

class PackageDetails extends React.Component {
  state = {
    animationPrice: false,
    itineraryDayValue: 0
  };

  constructor(props) {
    const { packageDetails, faqs } = props;
    super(props);
    this.headerConstants = createHeaderConstants(packageDetails, faqs);
  }

  updatePriceCallBack = () => {
    this.setState({ animationPrice: true}, () => {
      setTimeout(() => {
        if (this.state.animationPrice) {
          this.setState({ animationPrice: false });
        }
      }, 1000);
    });
  };

  setItineraryDay = (day) => {
    document.body.style.overflow = (day === 0) ? 'auto' : 'hidden';
    this.setState({
      itineraryDayValue: day
    });
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
    });
    Events.scrollEvent.register('end', () => {
    });
    scrollSpy.update();
    const landing_uuid = getCookie(LANDING_UUID_COOKIE_KEY);
    const page_uuid = getCookie(PAGE_UUID_COOKIE_KEY);
    const query = useQuery(this.props.location.search);
    if (landing_uuid === page_uuid) {
      this.props.fetchInlineGateways(this.props.packageDetails.id, this.props.params.packageName, query || {});
    }
    initializeExitIntent();
  };

  static getExpPrice(pkg) {
    const { total_price, discounted_price, month_options: { month_ranges }, price: { from, discount, to } } = pkg;
    const priceTotal = inflatePrice(total_price);
    const discountedPrice = inflatePrice(discounted_price);
    let month_ranges_new = [...month_ranges];
    month_ranges_new = month_ranges_new.map(month => {
      return {...month,
        start_price: inflatePrice(month.start_price),
        end_price: inflatePrice(month.end_price)
      };
    });

    const selectedMonth = pkg.selectedMonthNumber || getCurrentMonth() + 1;

    const currentMonth = month_ranges_new.filter(e => {
      return e.id === selectedMonth;
    })[0];

    return {...pkg,
      total_price: priceTotal,
      discounted_price: discountedPrice,
      month_options: {
        month_ranges: [...month_ranges_new],
        old_month_ranges: [...month_ranges]
      },
      price: {
        ...pkg.price,
        from: currentMonth.start_price,
        to: currentMonth.end_price,
        discount: currentMonth.end_price - currentMonth.start_price,
        total: currentMonth.end_price
      }
    };
  }

  static getExpData (experimentId, pkg) {
    switch (experimentId) {
      case 'pr1': {
        return { ...pkg, hideDiscount: true };
      }
      case 'pr2': {
        const packageDetail = {...PackageDetails.getExpPrice(pkg)};
        return { ...packageDetail, hideDiscount: true  };
      }
      case 'def':
      default: {
        return pkg;
      }
    }
  }

  render() {
    let packageDetails = this.props.packageDetails;
    const { resource, detailsResource,
      footerLinks, experimentId, isRatingSchemaEnabled } = this.props;
    const activeDetails = {};
    const { itineraryDayValue } = this.state;

    packageDetails = {...PackageDetails.getExpData(experimentId, packageDetails)};

    try {
      activeDetails.optionsExists = (
        packageDetails.package_options.hotel_price_details.length ||
        packageDetails.month_options.month_ranges.length
      );
      activeDetails.starRating = packageDetails.package_options.hotel_price_details.filter(
        e => e.is_checked
      )[0].hotel_star;
      if (packageDetails.selectedMonthNumber > 0) {
        const selectedMonths = packageDetails.month_options.month_ranges
          .filter(e => e.id === packageDetails.selectedMonthNumber);
        activeDetails.month = selectedMonths.length > 0 ? selectedMonths[0].month_value :
          packageDetails.month_options.month_ranges[0].month_value;
      } else {
        activeDetails.month = packageDetails.displayRange && packageDetails.price.month ?
          packageDetails.price.month :
          packageDetails.month_options.month_ranges.find(e => e.id === new Date().getMonth() + 1).month_value.split(' ')[0];
        // TODO: Manvendra, this month calculation is related with reducers/packages/details.js:117 TODO item.
      }
    } catch (e) {
      console.log(e);
      activeDetails.optionsExists = false;
      activeDetails.starRating = undefined;
      activeDetails.month = undefined;
    }

    // TODO: Ugly code. Handle it differently
    let toDestination = '';
    try {
      toDestination = packageDetails.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }
    const inlineGateway = packageDetails.inlineGateway;
    const additionalInfoText = `Traveler has expressed interest in ${packageDetails.days} Days , ${packageDetails.nights} nights with cities ${packageDetails.cities}. For more details, see the <a href='/packages/${packageDetails.set_url}'>link</a>`;
    const ctaText = 'Customize & Get Quotes';
    const packageType = packageDetails.titles.overview.toLowerCase();
    const isDeal = packageType === 'deals';
    const isLuxury = packageType === 'luxury';
    const trackLeadFunnel = () => {
      setCookie('package_id_lead_funnel', packageDetails.id);
      const section = 'Get Quotes Button';
      const category = `Destination:${toDestination}`;
      rescue(() => {
        () => trackSegment({
          event: LEAD_FUNNEL,
          funnel_step: 1,
          section,
          category,
          cta: ctaText,
          package_id: packageDetails.id,
          destination_id: packageDetails.destinations[0].id,
          label: getLeadFunnelName(1),
          funnel_uuid:  getRandomString(20)
        });
      });
    };

    const trackSegmentEvent = (event, category, cta) => {
      trackSegment({
        event: event,
        section: `Package Details:${category}`,
        object: '',
        cta: cta,
        value: packageDetails.total_price,
        category: category,
        label: `Destination:${packageDetails.destinations[0].name}::Days:${packageDetails.days}::
        Month:${packageDetails.selectedMonthNumber}::Hotel:''`,
        destination_id: packageDetails.destinations[0].id,
        package_id: packageDetails.id
      });
    };

    const exitDiv = <div id="reactExitIntentImage"
                         className="mkt-mob-exit-intent mb8 row row- mb8 relative" onClick={showPopUp} />;

    let dealnLuxury = {};
    if (isDeal || isLuxury) {
      dealnLuxury = {
        price: packageDetails.total_price,
        isFlight: !!packageDetails.inclusions.filter((inc) => inc.key.toLowerCase() === 'flights').length,
        starRating: packageDetails.package_options.hotel_price_details[0].hotel_star
      };
    }

    return (
      <ScrollPercentage>
        <GScrollElementContainer>
          <Sticky enabled={true} top={0} innerZ={4}>
            <QuickLinkNav
              options={this.headerConstants}
              ScrollLink={scrollLink}
              dealsInfo={packageDetails.titles}
              trackSegment={trackLeadFunnel}
            />
          </Sticky>
        </GScrollElementContainer>
        <PackageSlider
          images={packageDetails.slider_pic}
          name={packageDetails.name}
          covers={packageDetails.covers}
          dealsInfo={packageDetails.titles}
          price={packageDetails.price}
          isDeal={isDeal}
          isLuxury={isLuxury}
          hideDiscount={packageDetails.hideDiscount}
        />
        <div className="row row- sbc5 overflowh">
          <PackageDetailsPrice hotels={packageDetails.hotels}
                               dealsInfo={packageDetails.titles}
                               pkg={packageDetails}
                               isDeal={isDeal}
                               isLuxury={isLuxury}
                               update={this.props.update}
                               pushState={this.props.pushState}
                               selectedMonth={this.props.selectedMonth || 0}
                               updateSelectedMonth={this.props.updateSelectedMonth}
                               updatePriceCallBack={this.updatePriceCallBack}
                               animationPrice={this.state.animationPrice}
          />

          {
            inlineGateway ?
              <InlineGateway
                title={inlineGateway.title}
                destination={inlineGateway.destination}
                trip_type={inlineGateway.trip_type}
                package_filters={inlineGateway.package_filters}/>: null
          }


          <div className="mb8">
            <Element name="overview_box">
            <Overview
              overview={packageDetails.overview}
              title={packageDetails.heading}
              trackSegment={trackSegmentEvent}
              plpHeading={packageDetails.plp_heading}
              isRatingSchemaEnabled={isRatingSchemaEnabled}
            />
            </Element>
          </div>
          {packageDetails.highlights && packageDetails.highlights.length ? (
            <Highlights list={packageDetails.highlights} />
          ) : null}

          <Element name="itinerary_box" className="mb8">
            <Itinerary
              itinerary={packageDetails.itinerary}
              titleHead='Itinerary'
              id={packageDetails.id}
              resource={resource}
              trackSegment={trackSegmentEvent}
              packageDetails={packageDetails}
              setItineraryDay={this.setItineraryDay}
            />
          </Element>

          <div id="itinerary_section_detail" className={itineraryDayValue && itineraryDayValue <= packageDetails.itinerary.length ?
            "row row- z10 fixed wfull hfull t0 l0 overflowa pb64 sbcw" : "hide"}>
            {
              packageDetails.itinerary.map((itinerary, index) => {
                return (
                  <PackageDetailDayItinerary
                    packageDetails={packageDetails}
                    day={index + 1}
                    itinerary={itinerary}
                    resource={detailsResource}
                    setItineraryDay={this.setItineraryDay}
                    showSection={index + 1 === itineraryDayValue}
                  />
                );
              })
            }
          </div>

          <Element name="hotel_box" className="mb8">
            <HotelFlight
              hotels={packageDetails.hotels}
              hotelTitle='Hotel'
              flights={packageDetails.flights}
              trackSegment={trackSegmentEvent}
              inclusions={packageDetails.incExc.inclusions}
            />
          </Element>
          <Element name="incexclusion_box" className="mb8 ">
            <IncExclusion
              inclusions={packageDetails.inclusion_text}
              exclusions={packageDetails.exclusion_text}
              trackSegment={trackSegmentEvent}
            />
          </Element>

          {exitDiv}
          { footerLinks.length ? <Interlinking footerLinks={footerLinks}/> : null}

          <Element name="faq_box" className="row row- pb8 sbc5">
            <Faq
              faqs={this.props.faqs}
              destination={
                this.props.packageDetails.destinations.length
                  ? this.props.packageDetails.destinations[0]
                  : null
              }
              title='FAQ'
            />
          </Element>

          <HotelDeals.container />

          <div className="fixed b0 l0 r0 z4 p8 sbcw bs4">
            <div className="col-xs-4 pl0 pr8">
              <a
                className="btn-pri-large pl15 pr15 wfull ripple"
                href="tel:844 844 9287"
              >
                Call Us
              </a>
            </div>
            <div className="col-xs-8 pr0 pl0" onClick={() => this.props.getPackageData(dealnLuxury)}>
              <FormOneCTA
                tag={packageType}
                rtProps={{
                  to_loc: toDestination,
                  trip_days: packageDetails.days.toString(),
                  addtl_info: additionalInfoText,
                  packageId: packageDetails.id,
                  page: 'Package List Page',
                  section: 'Package List',
                  cta: isDeal ? 'Check Availability' : ctaText,
                  object: `Package/${packageDetails.id}`,
                }}
                clickHandler={trackLeadFunnel}
                deals={isDeal || isLuxury}
                budget={packageDetails.discounted_price}
              >
                <div className="btn-filled-pri-large wfull pl8 pr8 customized-variation" data-obj={JSON.stringify({to_loc: toDestination, trip_days: packageDetails.days.toString()})}>
                  <div className="wave" />
                  {isDeal ? 'Check Availability' : ctaText}
                </div>
              </FormOneCTA>
            </div>
          </div>
        </div>
      </ScrollPercentage>
    );
  }
}

PackageDetails.propTypes = {
  packageDetails: PropTypes.object.isRequired,
  resource: PropTypes.object.isRequired,
  faqs: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  updateSelectedMonth: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  selectedMonth: PropTypes.number,
  fetchInlineGateways: PropTypes.func.isRequired,
  params: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string,
  backUrl: PropTypes.string,
  getPackageData: PropTypes.func.isRequired,
  detailsResource: PropTypes.object.isRequired,
  footerLinks: PropTypes.array,
  experimentId: PropTypes.string,
  isRatingSchemaEnabled: PropTypes.bool
};

PackageDetails.defaultProps = {
  experimentId: ''
};

export default PackageDetails;
