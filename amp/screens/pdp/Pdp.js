import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import appConfig from 'appConfig';

import AmpCarousel from './AmpCarousel';
import QuickLinkNav from './QuickLinkNav';
import { default as HeaderTitle } from 'amp/modules/header/HeaderTitle';
import './priceModule/PackageIncExc.scss';
import 'amp/modules/common/SeoFooter.scss';
import PackageDetailsPrice from './priceModule/PackageDetailsPrice';
import Highlights from 'amp/modules/common/Highlights';
import IncExclusion from 'amp/modules/common/IncExclusion/IncExclusion';
import Itinerary from 'amp/screens/pdp/Itenary/Itinerary';
import HotelFlight from 'amp/screens/pdp/HotelFlight/HotelFlight';
import ReadMoreByHeight from 'amp/modules/common/ReadMoreByHeight';
import HowItWorks from 'amp/modules/common/howItWorks/HowItWorks';
import SeoFooter from 'amp/modules/common/SeoFooter';
import Breadcrumb from 'amp/modules/common/Breadcrumb/BreadcrumbListing';
import TravelerReview from 'amp/modules/travelerReview';
import Faq from 'amp/modules/Faq/Faq';
import SimilarPackages from 'amp/modules/similarPackages/SimilarPackages';
import PackageDetailDayItinerary from './Itenary/PackageDetailDayItinerary';
import { getDescription, getTitle, renderMetaTags } from 'amp/helpers/seoHelpers';
import { getAppSchemeUrl, iosDeepLink } from 'amp/helpers/urlHelpers';
import Linking from 'amp/modules/common/InterLinking';
import Action from 'amp/helpers/Action';
import RichText from 'amp/modules/richText';

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


class Pdp extends Component {
  static propTypes = {
    packageDetails: PropTypes.object,
    location: PropTypes.object,
    backUrl: PropTypes.string,
    faqs: PropTypes.array,
    breadcrumbs: PropTypes.array,
    footerLinks: PropTypes.array,
    similarPackages: PropTypes.array,
    metaTags: PropTypes.array,
    detailsResource: PropTypes.object
  };


  getPageUrl = () => {
    const { packageDetails : { set_url } } = this.props;

    let link = `/packages/${set_url}`.split(/page\/\d+/).join('');
    if (link[link.length - 1] === '/') {
      link = link.substring(0, link.lastIndexOf('/'));
    }
    return `${appConfig.api_protocol}://${appConfig.server.public.host}${link}`;
  };

  getPageFullName() {
    const destination = this.props.packageDetails.destinations.length ?
      this.props.packageDetails.destinations[0].name : null;
    const setUrl = this.props.packageDetails.set_url;
    return `Package Page/${destination}/${setUrl}`;
  }

  renderHelmet(title) {
    const { metaTags: metaTagList, location, packageDetails : { set_url } } = this.props;
    const originalUrl = `${appConfig.api_protocol}://${appConfig.server.public.host}/packages/${set_url}`;
    const originalPathname = `/packages/${set_url}`;
    const allowedAmpUrls = ['azerbaijan-5-days-tour',
      '7nights-8days-israel-tour-from-chennai',
      'delhi-1n-2d-tour',
      'chennai-1n-2d-tour',
      '7nights-8days-israel-tour-from-hyderabad'];

    let isAmp = false;
    allowedAmpUrls.map((url) => {
      if (originalPathname.includes(url)) {
        isAmp = true;
      }
    });

    return (
      <Helmet>
        <title>{getTitle(title, metaTagList)}</title>
        {!isAmp && <meta name="robots" content="noindex, nofollow" />}
        <meta name="theme-color" content="#68c4c1" />
        <meta property="og:url" content={this.getPageUrl()} />
        <meta property="og:site_name" content="TravelTriangle.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content={getDescription('', metaTagList)} />
        <meta property="og:description" content={getDescription('', metaTagList)} />
        <meta name="page_fullname" content={this.getPageFullName()} />
        <meta property="al:android:url"
              content={`tt://${getAppSchemeUrl(originalUrl, originalPathname, location, 1)}`} />
        <meta
          property="al:ios:url"
          content={`ttiosapp://applinks?al_applink_data=${iosDeepLink(
            `${appConfig.api_protocol}://${appConfig.server.public.host}/${getAppSchemeUrl(
              originalUrl,
              originalPathname,
              location,
              1,
              'ios'
            )}`
          )}`}
        />
        <meta property="should_fallback" content="false" />
        <meta property="fb:app_id" content="168534953203541" />
        {renderMetaTags(metaTagList, isAmp)}
        <link
          rel="canonical"
          href={`${appConfig.api_protocol}://${appConfig.server.public.host}/packages/${set_url}`}
        />
      </Helmet>
    );
  }

  render() {
    const {
      packageDetails, location, backUrl, faqs, breadcrumbs,
      footerLinks, similarPackages, detailsResource
    } = this.props;
    const packageType = packageDetails.titles.overview.toLowerCase();
    const { rating, reviews, schemaAttributes } = packageDetails;
    const isRatingSchemaEnabled = schemaAttributes && schemaAttributes.star_rating && reviews;
    const isDeal = packageType === 'deals';
    const isLuxury = packageType === 'luxury';
    const title = packageDetails.name || 'Package Details';
    const TravelerReviewContainer = TravelerReview.container;
    const packageId = packageDetails.id || undefined;
    const itineraryDayValue = 2;
    const formUrl = `/requested_trips/new?mview=true&srcUrl=${location.pathname}`;
    return (
      <div className="sbc5">
        {this.renderHelmet(title)}
        <div vocab={isRatingSchemaEnabled ? "https://schema.org/" : null}
             typeof={isRatingSchemaEnabled ? "Product" : null}>
          <div className="relative">
            <HeaderTitle showShare={true} heading={packageDetails.heading}
                         url={packageDetails.share_url} title={title} plpHeading={packageDetails.plp_heading || ''}
                         backUrl={location.action === 'POP' ? backUrl : ''}
                         isRatingSchemaEnabled={isRatingSchemaEnabled} />
          </div>
          <QuickLinkNav options={createHeaderConstants(packageDetails, faqs)}
                        dealsInfo={packageDetails.titles}
                        location={location}
          />
          <AmpCarousel
            images={packageDetails.slider_pic}
            name={packageDetails.name}
            covers={packageDetails.covers}
            dealsInfo={packageDetails.titles}
            price={packageDetails.price}
            isDeal={isDeal}
            isLuxury={isLuxury}
          />
          <PackageDetailsPrice hotels={packageDetails.hotels}
                               dealsInfo={packageDetails.titles}
                               pkg={packageDetails}
                               isDeal={isDeal}
                               isLuxury={isLuxury}
                               packageDetails={this.props.packageDetails}
                               location={location}
          />
          <div className="mb8 sbcw p15 read-more-content" id="overview_box-triggerlink">
            <ReadMoreByHeight
              heading="Overview"
              title="Overview"
              plpHeading={packageDetails.plp_heading}
              content={packageDetails.overview}
              maxHeight={64}
              showTitle={true}
              isRatingSchemaEnabled={isRatingSchemaEnabled}
            />
          </div>
          {
            packageDetails.highlights && packageDetails.highlights.length ?
              <Highlights list={packageDetails.highlights} /> :
              null
          }
          <div className="mb8">
            <Itinerary
              itinerary={packageDetails.itinerary}
              titleHead='Itinerary'
              id={packageDetails.id}
              packageDetails={packageDetails}
              setItineraryDay={this.setItineraryDay}
            />
          </div>
          <div id="itinerary_section_detail"
               className={itineraryDayValue && itineraryDayValue <= packageDetails.itinerary.length ?
                 "row row- z11 wfull hfull t0 l0 overflowa sbcw" : "hide"}>
            {
              packageDetails.itinerary.map((itinerary, index) => {
                return (
                  <PackageDetailDayItinerary
                    packageDetails={packageDetails}
                    day={index + 1}
                    itinerary={itinerary}
                    resource={detailsResource}
                    setItineraryDay={this.setItineraryDay}
                    showSection={itineraryDayValue}
                    index={index}
                  />
                );
              })
            }
          </div>
          <div className="mb8">
            <HotelFlight
              hotels={packageDetails.hotels}
              hotelTitle='Hotel'
              flights={packageDetails.flights}
              // trackSegment={trackSegmentEvent}
              inclusions={packageDetails.incExc.inclusions}
            />
          </div>
          <div className="mb8">
            <IncExclusion
              inclusions={packageDetails.inclusion_text}
              exclusions={packageDetails.exclusion_text}
            />
          </div>
          <div className="mkt-mob-exit-intent mb8 row row- sbcw pt15 relative">
            <amp-iframe width="400" height="500"
                        layout="responsive"
                        sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
                        src="https://js.traveltriangle.com/stage/public-product/exit-intent-viewport.html?var=29012020v16&utm_source=blog&mview=true&srcUrl='.get_permalink().'amp/">
            </amp-iframe>
          </div>

          {footerLinks.length ? <Linking footerLinks={footerLinks} /> : null}

          <div className="row row- pb8 sbc5">
            <Faq
              faqs={faqs}
              destination={
                packageDetails.destinations.length
                  ? packageDetails.destinations[0]
                  : null
              }
              title='FAQ'
            />
          </div>
          <div className="row row-  sbc5 traveller-new-ui">
            <TravelerReviewContainer
              destination={packageDetails.destinations &&
              packageDetails.destinations.length &&
              packageDetails.destinations[0].name}
            />
          </div>
          {
            similarPackages.length ?
              <div className="row row- pt8 pb0 sbc5 similar-packages-new-ui">
                <SimilarPackages
                  packageId={packageId}
                  loadedSimilarPackages={true}
                  similarPackages={similarPackages}
                />
              </div> : null
          }
          <HowItWorks />

          {breadcrumbs.length ? <Breadcrumb breadcrumbs={breadcrumbs} /> : null}
          <RichText
            richText=""
            rating={rating}
            reviews={reviews}
            startingPrice={null}
            isRatingSchemaEnabled={isRatingSchemaEnabled}
          />

          {packageDetails.footer_sections && packageDetails.footer_sections.length ?
            <SeoFooter footerSections={packageDetails.footer_sections} /> : null}

          <div className="fixed b0 l0 r0 z10 p8 sbcw bs4">
            <div className="col-xs-4 pl0 pr8">
              <a
                className="btn-pri-large pl15 pr15 wfull ripple"
                href="tel:844 844 9287"
              >
                Call Us
              </a>
            </div>
            <div className="col-xs-8 pr0 pl0">
              <a href={formUrl} className="wfull btn-filled-pri-large">Customize & Get Quotes</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pdp;
