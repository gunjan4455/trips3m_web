import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import HeaderCommon from 'modules/header/HeaderCommon';
import PackageDetails from 'components/PackageDetails/PackageDetails';
import SimilarPackages from 'components/PackageDetails/SimilarPackages';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Generic/Loader';
import InternalServerError from 'components/Generic/InternalServerError';
import SeoFooter from 'components/Common/SeoFooter';
import WeekendPackageDetails from 'components/PackageDetails/WeekendPackageDetails';
import RecentPackages from 'modules/packages/recent';
import HowItWorks from 'modules/howItWorks/HowItWorks';
import Breadcrumb from 'components/Breadcrumb/BreadcrumbListing';
import RichText from 'modules/richText';
import PackageDetailsFooter from 'components/PackageDetails/PackageDetailsFooter';
import { getDescription, getTitle } from 'helpers/seoHelpers';
import { setCookie } from 'helpers/FormDataFormatter';
import { getCurrentMonth } from 'helpers/DateTime';
import { iosDeepLink, getAppSchemeUrl } from 'helpers/urlHelpers';
import { setVisitedDestinationsCookie, rescue } from 'helpers/utils';
import { capitalizeAndReplaceDash } from 'helpers/parsers';
import { trackSegment, PDP_PAGE_VIEW } from 'actions/segmentEvents';
import { renderMetaTags } from 'helpers/seoHelpers';
import TravelerReview from 'modules/travelerReview';
import { default as HeaderTitle } from "modules/header/HeaderTitle";
import appConfig from 'appConfig';
import 'components/PackageDetails/PackageDetails.scss';
import { useQuery } from 'containers/Listing/parseFilters';

class PackageDetailsAsync extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loadingError: PropTypes.object,
    packageDetails: PropTypes.object,
    match: PropTypes.object,
    params: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    loadDetails: PropTypes.func.isRequired,
    detailsResource: PropTypes.object.isRequired,
    updatePrice: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    metaTags: PropTypes.array,
    isWeekendPackage: PropTypes.bool,
    updateSelectedMonth: PropTypes.func.isRequired,
    faqs: PropTypes.array.isRequired,
    similarPackages: PropTypes.array,
    breadcrumbs: PropTypes.array,
    backUrl: PropTypes.string,
    fetchInlineGateways: PropTypes.func.isRequired,
    footerLinks: PropTypes.array,
    experimentId: PropTypes.string,
    getPackageData: PropTypes.func.isRequired
  };

  static defaultProps = {
    packageDetails: null,
    loadingError: {},
    metaTags: [],
    isWeekendPackage: false,
    similarPackages: [],
    breadcrumbs: [],
    experimentId: ''
  };

  constructor(props) {
    super(props);
    this.getPageFullName = this.getPageFullName.bind(this);
    this.renderHelmet = this.renderHelmet.bind(this);
    setCookie('cb_dt', '');
    setCookie('package_id_lead_funnel', props.packageDetails.id);
  }

  getDestination = (destinations) => {
    return destinations.map(destination => destination.name).join('::');
  };

  getPackageType = () => {
    const { packageDetails } = this.props;
    let type = '';
    const heading = packageDetails.name.toLowerCase();
    if (heading.includes('tour')) {
      type = 'Tour';
    } else if (heading.includes('honeymoon') ||
      heading.includes('couple') ||
      heading.includes('romantic')) {
      type = 'Honeymoon';
    } else if (heading.includes('family')) {
      type = 'Family';
    }
    return type;
  };

  trackSegmentEvent = () => {
    rescue(() => {
      const { packageDetails } = this.props;
      const toDestination = this.getDestination(packageDetails.destinations);
      trackSegment({
        event: PDP_PAGE_VIEW,
        category: `Destination:${packageDetails.destinations[0].name}`,
        section: 'Package List/View Details',
        object: `Package/${packageDetails.id}`,
        package_id: packageDetails.id,
        destination_list: toDestination,
        destination_id: packageDetails.destinations.length && packageDetails.destinations[0].id,
        destination_type: this.getPackageType(),
        label: `Days:${packageDetails.days}::Hotel:${packageDetails.max_hotel_category} Star`,
        value: packageDetails.total_price,
        package_name: packageDetails.name,
        budget_package: packageDetails.budget_package,
        discounted_package: packageDetails.discounted_package
      });
    });
  };

  componentDidMount() {
    const { packageDetails, match: { params }, location: { search } } = this.props;
    const query = useQuery(search);
    if (!this.props.isLoaded || this.props.detailsResource.path !== params.packageName) {
      this.props.loadDetails(params.packageName, { params: query });
    }

    if (query.travelmonth) {
      this.props.updateSelectedMonth(query.travelmonth);
    } else {
      this.props.updateSelectedMonth(getCurrentMonth() + 1);
    }

    if (packageDetails && packageDetails.destinations && packageDetails.destinations.length) {
      setCookie('cb_dt', packageDetails.destinations[0].name);
      setVisitedDestinationsCookie(packageDetails.destinations[0].name);
    }

    window.loadDeferImages && window.loadDeferImages();
    this.trackSegmentEvent();
  }

  componentDidUpdate(prevProps) {
    const { packageDetails: nextPackageDetails } = prevProps;
    const { packageDetails } = this.props;
    const destinationName = packageDetails && packageDetails.destinations &&
      packageDetails.destinations.length && packageDetails.destinations[0].name;
    const nextDestinationName = nextPackageDetails && nextPackageDetails.destinations &&
      nextPackageDetails.destinations.length && nextPackageDetails.destinations[0].name;

    if (nextDestinationName !== destinationName) {
      setCookie('cb_dt', capitalizeAndReplaceDash(nextDestinationName));
      setVisitedDestinationsCookie(capitalizeAndReplaceDash(nextDestinationName));
    }
    window.loadDeferImages && window.loadDeferImages();
  }

  getPageFullName() {
    const destination = this.props.packageDetails.destinations.length ?
      this.props.packageDetails.destinations[0].name : null;
    const setUrl = this.props.packageDetails.set_url;
    return `Package Page/${destination}/${setUrl}`;
  }

  getPageUrl = () => {
    let link = this.props.location.pathname.split(/page\/\d+/).join('');
    if (link[link.length - 1] === '/') {
      link = link.substring(0, link.lastIndexOf('/'));
    }
    return `https://traveltriangle.com${link}`;
  };

  renderHelmet(title) {
    const { metaTags: metaTagList, location, packageDetails: { set_url } } = this.props;
    const allowedAmpUrls = ['azerbaijan-5-days-tour',
      '7nights-8days-israel-tour-from-chennai',
      'delhi-1n-2d-tour',
      'chennai-1n-2d-tour',
      '7nights-8days-israel-tour-from-hyderabad'];

    const ampUrl = `${appConfig.api_protocol}://${appConfig.server.public.host}/packages/${set_url}/amp`;

    let isAmp = false;
    allowedAmpUrls.map((url) => {
      if (url.toLowerCase() === set_url.toLowerCase()) {
        isAmp = true;
      }
    });

    return (
      <Helmet>
        <title>{getTitle(title, metaTagList)}</title>
        <meta name="theme-color" content="#68c4c1" />
        <meta property="og:url" content={this.getPageUrl()} />
        <meta property="og:site_name" content="TravelTriangle.com" />
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content={getDescription('', metaTagList)} />
        <meta property="og:description" content={getDescription('', metaTagList)} />
        <meta name="page_fullname" content={this.getPageFullName()} />
        <meta property="al:android:url"
              content={`tt://${getAppSchemeUrl(location, 1)}`} />
        <meta
          property="al:ios:url"
          content={`ttiosapp://applinks?al_applink_data=${iosDeepLink(
            `https://traveltriangle.com/${getAppSchemeUrl(
              location,
              1,
              'ios'
            )}`
          )}`}
        />
        <meta property="should_fallback" content="false" />
        <meta property="fb:app_id" content="168534953203541" />
        <link
          rel="canonical"
          href={`https://traveltriangle.com/packages/${set_url}`}
        />
        {
          isAmp ? <link rel="amphtml"
                        href={ampUrl} />
            : null
        }
        {renderMetaTags(metaTagList)}
      </Helmet>
    );
  }

  render() {
    const {
      location, isLoading, isLoaded, loadingError, isWeekendPackage, packageDetails,
      detailsResource, faqs, updatePrice,getPackageData,
      updateSelectedMonth, fetchInlineGateways, match: { params }, footerLinks, experimentId, history
    } = this.props;
    const { similarPackages, breadcrumbs, backUrl } = this.props;
    const { rating, reviews, schemaAttributes } = packageDetails;
    const isRatingSchemaEnabled = schemaAttributes && schemaAttributes.star_rating && reviews;
    const TravelerReviewContainer = TravelerReview.container;
    if (!isLoading && !isLoaded && !loadingError) {
      return (
        <div>
          <HeaderCommon />
          <Loader />
        </div>
      );
    }
    if (isWeekendPackage) {
      return (<WeekendPackageDetails />);
    }

    if (isLoading) {
      return (
        <div>
          <HeaderCommon />
          <Loader />
        </div>
      );
    }

    if (loadingError || !packageDetails) {
      return (
        <div>
          <HeaderCommon />
          <InternalServerError />
        </div>
      );
    }

    const title = packageDetails.name || 'Package Details';
    const packageId = packageDetails.id || undefined;
    const packageType = packageDetails.titles.overview.toLowerCase();
    const isDeal = packageType === 'deals';

    return (
      <div className="row row-">
        {this.renderHelmet(title)}
        <div vocab={isRatingSchemaEnabled ? "https://schema.org/" : null}
             typeof={isRatingSchemaEnabled ? "Product" : null}>
          <HeaderCommon />
          <div className="relative">
            <HeaderTitle showShare={true} heading={packageDetails.heading}
                         url={packageDetails.share_url} title={title} plpHeading={packageDetails.plp_heading || ''}
                         backUrl={location.action === 'POP' ? backUrl : ''}
                         isRatingSchemaEnabled={isRatingSchemaEnabled} />
          </div>
          <div className={` ${isDeal ? 'deal-package' : ''} package-detail-container-new-ui`}>
            <PackageDetails
              faqs={faqs || []}
              packageDetails={packageDetails}
              resource={detailsResource}
              update={updatePrice}
              pushState={history.push}
              selectedMonth={packageDetails.selectedMonthNumber}
              updateSelectedMonth={updateSelectedMonth}
              fetchInlineGateways={fetchInlineGateways}
              params={params}
              location={location}
              title={title}
              backUrl={backUrl}
              detailsResource={detailsResource}
              footerLinks={footerLinks}
              experimentId={experimentId}
              isRatingSchemaEnabled={isRatingSchemaEnabled}
              getPackageData={getPackageData}
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
          <div className="row row- pt8 sbc5 recent-packages-new-ui">
            <RecentPackages currentPackageID={packageId} selectedMonth={packageDetails.selectedMonthNumber} />
          </div>
          <div className="row row- p8 pb0 sbc5">
            {
              packageDetails.footer_section &&
              packageDetails.footer_section.footer_above_text &&
              <PackageDetailsFooter footerSection={packageDetails.footer_section} />
            }
          </div>
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
          <div className="row row- pb64 sbc5">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default PackageDetailsAsync;
