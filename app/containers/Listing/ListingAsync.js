import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { ScrollPercentage } from 'react-scroll-percentage';
import { parse } from 'query-string';

import HeaderCommon from 'modules/header/HeaderCommon';
import { default as HeaderTitle } from 'modules/header/HeaderTitle';
import TotalPackagesCount from 'components/Listing/TotalPackagesCount';
import TopDestination from 'components/Listing/TopDestination';
import PackageCardExperiment from 'components/Listing/PackageCardExperiment';
import PackageCardDealsAndLuxury from 'components/Listing/PackageCardDealsAndLuxury';
import LoadMorePackages from 'components/Listing/LoadMorePackages';
import TravelerReview from 'modules/travelerReview';
import RichText from 'modules/richText';
import AboutListingDestination from 'components/Listing/AboutListingDestination';
import Footer from 'components/Footer/Footer';
import FixedMenu from 'components/FixedMenu/FixedMenu';
import TravelerStory from 'components/Story/TravelerStory';
import Breadcrumb from 'components/Breadcrumb/BreadcrumbListing';
import SortAndFilter from './FilterView.js';
import LoaderFirst from 'components/ComparePackages/LoaderFirst';
import LoaderSecond from 'components/ComparePackages/LoaderSecond';
import InlineFilters from 'components/Listing/InlineFilters';
import InlineFilter from 'components/Listing/InlineFilters/InlineFilter';
import Faq from 'components/Faq/Faq';
import SeoFooter from 'components/Common/SeoFooter';
import { getDescription, getTitle } from 'helpers/seoHelpers';
import WhyBookWithOurAgents from 'modules/whyBookWithOurAgents';

import { getCookie, getRandomString, setCookie } from 'helpers/FormDataFormatter';
import {
  httpClient, capitalizeAndReplaceDash, capitalizeEveryFirstLetter,
  setVisitedDestinationsCookie, rescue
} from 'helpers/utils';
import { hidePopup, showPopUp, initializeExitIntent } from 'helpers/exitIntent';
import {
  createListingApiUrl,
  createListingUrl,
  deCapitalizeFirstLetter,
  parseDestinationsToShow,
  capitalizeFirstLetter,
  inflatePrice,
  compareArr,
  FLIGHT_INCLUSION
} from 'utils/parsers';
import {
  DEFAULT_VALUE,
  FILTER_CLICKED,
  initializeScroller,
  onScroll,
  PACKAGE_LIST_VIEWED,
  trackSegment,
  PLP_PAGE_VIEW,
  LEAD_FUNNEL, getLeadFunnelName
} from 'actions/segmentEvents';
import { iosDeepLink, getAppSchemeUrl } from 'helpers/urlHelpers';
import PlacesToVisit from 'modules/placesToVisit/index';
import ThingsToDo from 'modules/thingsToDo/index';
import { BlueDownArrow } from 'helpers/Icon/Icon';
import { makeCapitalizedSentence } from 'helpers/parsers';
import InlineFilterExperience from 'components/Listing/InlineFilters/InlineFilter';
import { renderMetaTags } from 'helpers/seoHelpers';
import Interlinking from 'modules/shared/interlinking';
import CityFilter from 'app/components/Common/CityFilter/CityFilter.js';
import parseFilters from "./parseFilters";
import HotelDeals from 'modules/hotel/deals';


const isValidPrice = (totalPrice, discount) => {
  const parsedPrice = parseInt(totalPrice, 10);
  const parsedDiscount = parseInt(discount, 10);
  if (!parsedPrice || !parsedDiscount) {
    return false;
  }
  return parsedPrice >= 0 || (parsedPrice - parsedDiscount) >= 0;
};

class ListingAsync extends Component {
  static propTypes = {
    packages: PropTypes.array,
    totalPackages: PropTypes.number,
    filters: PropTypes.object.isRequired,
    selectedFilters: PropTypes.object.isRequired,
    sortBy: PropTypes.object.isRequired,
    packagesToDisplay: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    location: PropTypes.object.isRequired,
    pathParams: PropTypes.object.isRequired,
    testimonials: PropTypes.array,
    metaTags: PropTypes.array,
    breadcrumbs: PropTypes.array,
    comparingPackages: PropTypes.array.isRequired,
    submitted: PropTypes.bool.isRequired,
    isTourFilterSelected: PropTypes.bool,
    isMultiDestination: PropTypes.bool,
    loading: PropTypes.bool,
    isCity: PropTypes.bool,
    route: PropTypes.object.isRequired,
    isDestinationTypeAll: PropTypes.bool.isRequired,
    startingPrice: PropTypes.number.isRequired,
    multiDestinationTexts: PropTypes.array,
    loadMorePackages: PropTypes.func.isRequired,
    selectedFilterCount: PropTypes.func.isRequired,
    addToComparingPackages: PropTypes.func.isRequired,
    removeFromComparingPackages: PropTypes.func.isRequired,
    submittedForCompare: PropTypes.func.isRequired,
    removeCompareData: PropTypes.func.isRequired,
    setTourCategoryFilter: PropTypes.func.isRequired,
    setDestinationTypeFilter: PropTypes.func.isRequired,
    footerSection: PropTypes.object.isRequired,
    faqs: PropTypes.array.isRequired,
    similarLiveCities: PropTypes.array,
    bannerHeadline: PropTypes.string,
    allPackageLink: PropTypes.object,
    filterCategory: PropTypes.array,
    filterDestinationActivities: PropTypes.array,
    routeParams: PropTypes.object,
    formToLocation: PropTypes.string,
    dynamicPlpPage: PropTypes.bool,
    filterSelected: PropTypes.func,
    filterCounts: PropTypes.object,
    createFilterParam: PropTypes.func.isRequired,
    setDefaultSelectedFilters: PropTypes.func.isRequired,
    resetDefaultFilters: PropTypes.func,
    destinationName: PropTypes.string,
    seoFooter: PropTypes.object,
    banner: PropTypes.object,
    richText: PropTypes.string,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    getPackageData: PropTypes.func.isRequired,
    footerLinks: PropTypes.object,
    fobpLinks: PropTypes.Object,
    schemaAttributes: PropTypes.object.isRequired,
    packageStartPrice: PropTypes.number,
    experimentId: PropTypes.string,
    history: PropTypes.object.isRequired
  };

  static defaultProps = {
    packages: [],
    totalPackages: 0,
    testimonials: [],
    metaTags: [],
    breadcrumbs: [],
    isTourFilterSelected: false,
    isDestinationTypeAll: false,
    route: {},
    isMultiDestination: false,
    multiDestinationTexts: [],
    allPackageLink: {},
    filterCategory: [],
    routeParams: {},
    formToLocation: '',
    dynamicPlpPage: false,
    destinationName: '',
    richText: 'Tour Packages',
    banner: {},
    packageStartPrice: null,
    experimentId: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      activeHotels: {}
    };
  }

  static getBudget(queryStr) {
    const query = parse(queryStr || '');
    const { filters } = parseFilters({ query });
    const pricefilter = filters && filters['price_ranges'];
    const priceArr = pricefilter && pricefilter.length ? pricefilter.join('-').replace(/_/g, '').split('-') : [];
    const sortedPriceArr = priceArr.map(Number).sort(compareArr);
    return sortedPriceArr.length ?
    {
      minPrice: sortedPriceArr[0],
      maxPrice: sortedPriceArr[sortedPriceArr.length - 1]
    } : {};
  }

  static getCardAfterPrice(card, budget) {
    const inflateAmt = 15;
    let hideCard = false;
    const { price_total, discounted_price, family_packages } = card;
    const priceTotal = inflatePrice(price_total, inflateAmt);
    const discountedPrice = inflatePrice(discounted_price, inflateAmt);
    const family_packages_map = { ...family_packages };
    Object.keys(family_packages_map).map(hotelId => {
      const hotelPrice = [...family_packages_map[hotelId]];
      hotelPrice[1] = inflatePrice(hotelPrice[1]);
      hotelPrice[2] = inflatePrice(hotelPrice[2]);
      family_packages_map[hotelId] = hotelPrice;
    });
    const cardPrice = family_packages_map[card.id] && family_packages_map[card.id].length ? family_packages_map[card.id][1] : '';
    if (budget && Object.keys(budget).length &&
      cardPrice && !(family_packages_map[card.id][1] > budget.minPrice && family_packages_map[card.id][1] < budget.maxPrice)) {
      hideCard = true;
    }

    return {
      ...card,
      price_total: priceTotal,
      discounted_price: discountedPrice,
      family_packages_map: family_packages_map,
      hideCard
    };
  }

  static getExperimentData(e, experimentId, budget) {
    switch (experimentId) {
      case 'pr1': {
        return {
          ...e,
          isExperiment: {
            hideDiscount: true,
          }
        };
      }
      case 'pr2': {
        const cardData = ListingAsync.getCardAfterPrice(e, budget);
        return {
          ...cardData,
          isExperiment: {
            hideDiscount: true,
            replacePrice: true
          }
        };
      }
      case 'def': {}
      default: {
        return e;
      }
    }
  }

  static getPackageList(packages, trackListingLeadFunnel, comparingPackages, addToComparingPackages,
                        removeFromComparingPackages, isMultiDestination, multiDestinationTexts, formToLocation,
                        setActiveHotels, getPackageData, fobpLinks, experimentId, budget, push) {
    const getCardProps = (e, index) => ({
      card: e,
      key: e.id,
      trackLeadFunnelClick: trackListingLeadFunnel,
      comparingPackages,
      addToComparingPackages,
      removeFromComparingPackages,
      index,
      isMultiDestination,
      multiDestinationTexts,
      formToLocation,
      setActiveHotels,
      push
    });

    const getPackageList = (e, tag, index) => {
      const card = ListingAsync.getExperimentData(e, experimentId, budget);
      if (card.hideCard) {
        return false;
      }
      if (tag === 'deals' || tag === 'luxury') {
        return <PackageCardDealsAndLuxury key={index} {...getCardProps(card, index, experimentId)}
                                          tag={tag} getPackageData={getPackageData} />;
      }
      return <PackageCardExperiment key={index} {...getCardProps(card, index, experimentId)} />;
    };

    return packages
      .filter(pkg => (isValidPrice(pkg.price_total, pkg.discounted_price)))
      .map((e, index) => (
        <div key={index}>
          {index === 4 && fobpLinks && Object.keys(fobpLinks).length ? <CityFilter fobpLinks={fobpLinks} /> : null}
          {getPackageList(e, e.labels[0].toLowerCase(), index)}
        </div>
      ));
  }

  static topDestinationsTitle = (isCity, destinationName, pathParams) => {
    if (pathParams.destination) {
      if (isCity) {
        return `Packages for other cities ${destinationName
          ? `in ${capitalizeEveryFirstLetter(destinationName)}` : ''}`;
      } else {
        return `${capitalizeEveryFirstLetter(pathParams.destination)} Packages By Cities`;
      }
    } else {
      return `Packages for Top ${pathParams.category.toLowerCase() === 'tour'
        ? 'Holiday'
        : pathParams.category} Destinations`;
    }
  }

  static renderPackagesWithExitIntent(
    packages, trackListingLeadFunnel, comparingPackages, addToComparingPackages,
    removeFromComparingPackages, isMultiDestination, multiDestinationTexts, formToLocation = '',
    showTopDestinations, similarLiveCities, pathParams, setActiveHotels, experienceFilters,
    getPackageData, isCity, destinationName, fobpLinks, experimentId, budget, flightFilters, push
  ) {

    const packageCards = ListingAsync.getPackageList(packages, trackListingLeadFunnel, comparingPackages,
      addToComparingPackages, removeFromComparingPackages, isMultiDestination, multiDestinationTexts, formToLocation,
      setActiveHotels, getPackageData, fobpLinks, experimentId, budget, push);

    const exitDiv = <div id="reactExitIntentImage"
                         className="mkt-mob-exit-intent mb8 row row- mb8 relative" onClick={showPopUp} />;

    const topDestination = showTopDestinations ? <TopDestination category={pathParams.category}
                                                                 title={ListingAsync.topDestinationsTitle(isCity, destinationName, pathParams)}
                                                                 destination={pathParams.destination}
                                                                 destinations={similarLiveCities} /> : null;

    const hotelDeals = <HotelDeals.container />;

    if (packageCards.length === 0) {
      return packageCards;
    } else if (packageCards.length > 3) {
      return [
        ...packageCards.slice(0, 1),
        flightFilters,
        ...packageCards.slice(1, 3),
        topDestination,
        hotelDeals,
        ...packageCards.slice(3, 4),
        experienceFilters,
        ...packageCards.slice(4, 5),
        exitDiv,
        ...packageCards.slice(5)
      ];
    } else {
      return [
        ...packageCards.slice(0, 1),
        flightFilters,
        ...packageCards.slice(1, 3),
        topDestination,
        experienceFilters,
        exitDiv
      ];
    }
  }

  createSegmentObject = () => ({
    event: PACKAGE_LIST_VIEWED,
    category: `Destination:${this.props.pathParams.destination || 'Unknown'}`,
    label: `Package Type:${deCapitalizeFirstLetter(this.props.pathParams.category || '')}`,
    destination_list: '',
    destination_id: '',
    num_destinations: 0,
    package_id: 0,
    value: 1
  });

  trackFilterSegmentEvent = (event, values) => {
    let filters = '';
    for (const item in values) {
      filters = filters.concat(item, ':');
      for (const obj in values[item]) {
        if (values[item][obj]) {
          filters = filters.concat(obj, ',');
        }
      }
      filters = filters.concat('::');
    }
    trackSegment({
      event: event,
      section: 'Package List',
      object: '',
      cta: '',
      label: filters,
      value: DEFAULT_VALUE,
      category: `Destination:Unknown'}`,
    });
  };

  componentDidMount() {
    initializeScroller();
    trackSegment(this.createSegmentObject());
    try {
      if (this.props.isDestinationTypeAll) {
        this.props.setDestinationTypeFilter();
      }
    } catch (e) {
      console.log(e);
    }
    this.getDestination(this.props);
    initializeExitIntent();
    this.pageTrackSegmentEvent(this.props);
  }

  pageTrackSegmentEvent = (props) => {
    const { pathParams: { category }, packages, destinationName } = props;
    const id = packages.length && packages[0].destinations.length ? packages[0].destinations[0].id : 0;
    rescue(() => {
      const destinationList = props.isMultiDestination ?
        (props.multiDestinationTexts).join('::') :
        destinationName;
      trackSegment({
        event: PLP_PAGE_VIEW,
        destination_list: destinationList || '',
        destination_id: destinationName ? id : 0,
        destination_type: capitalizeFirstLetter(category)
      });
    });
  };

  getComparingPackageIds = (comparePackages) => {
    return comparePackages.map(pkg => this.state.activeHotels[pkg.id] || pkg.id).join(',');
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      trackSegment(this.createSegmentObject());
      this.pageTrackSegmentEvent(nextProps);
    }

    if (this.props.comparingPackages.length === 2 && !this.props.submitted) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      console.log(prevProps.submitted); // FIXME:: What is the resolution of this?
      this.timer = setTimeout(() => {
        this.props.history.push(
          `/comparepackages?ids=${this.getComparingPackageIds(this.props.comparingPackages)}`
        );
        prevProps.submittedForCompare(true);
      }, 2000);
    }

    if (this.props.comparingPackages.length === 2 && this.props.submitted) {
      prevProps.removeCompareData();
      prevProps.submittedForCompare(false);
    }

    if (this.props.pathParams.destination !== prevProps.pathParams.destination) {
      this.getDestination(this.props);
    }
  }

  getDestination = (props) => {
    const isDynamicPLP = props.dynamicPlpPage || false;
    let dest = props.formToLocation || '';
    if (isDynamicPLP) {
      setCookie('cb_dt', capitalizeAndReplaceDash(dest));
      setVisitedDestinationsCookie(capitalizeAndReplaceDash(dest));
    } else {
      dest = props.pathParams.destination ? props.pathParams.destination : '';
      if (dest) {
        const data = {
          user_input: dest,
          parse_negation: false,
          parse_destination: true,
          can_filter: false,
          rbt_index_question_answer_map: {}
        };
        httpClient('POST', '/browsing/v1/destinations/rbt_parse', { data })
          .then((response) => {
            const result = response.body.data;
            if (result.matched_destinations) {
              setCookie('cb_dt', capitalizeAndReplaceDash(result.matched_destinations));
              setVisitedDestinationsCookie(capitalizeAndReplaceDash(result.matched_destinations));
            } else {
              setCookie('cb_dt', capitalizeAndReplaceDash(dest));
              setVisitedDestinationsCookie(capitalizeAndReplaceDash(dest));
            }
          });
      } else {
        setCookie('cb_dt', capitalizeAndReplaceDash(dest));
        setVisitedDestinationsCookie(capitalizeAndReplaceDash(dest));
      }
    }
  };

  onFiltersApply = (selectedFilters) => {
    this.props.resetDefaultFilters();
    const nextUrl = createListingUrl(
      this.props.filters,
      selectedFilters,
      this.props.sortBy.selected,
      this.props.route && this.props.route.category,
      1,
      this.props.pathParams.destination.toLowerCase() || '',
      this.props.routeParams.listingType
    );
    this.props.history.push(nextUrl);
    this.trackFilterSegmentEvent(FILTER_CLICKED, this.props.selectedFilters);
  };

  loadFilterCounts = () => this.props.createFilterParam(this.props.route, this.props.pathParams);

  getPageFullName = () => {
    let result = '';
    const spacedDestination = this.props.pathParams.destination
      ? `${this.props.pathParams.destination.split('-').join(' ')}` :
      null;
    if (spacedDestination === null) {
      result = `Package List Page/${this.props.pathParams.category}`;
    } else {
      result = `Package List Page/${this.props.pathParams.category}/Destination:${spacedDestination}`;
    }
    return result;
  };

  getFilters = () => {
    if (this.props.route && this.props.route.packageType === 'seasonal') {
      const { '36': omit, ...filters } = this.props.filters; // eslint-disable-line quote-props
      return filters;
    }
    return this.props.filters;
  };

  loadMorePackages = (pageNumber) => {
    const {
      location, sortBy, pathParams, route, loadMorePackages: loadMorePackagesDispatcher,
      routeParams: { listingType }
    } = this.props;
    const url = createListingApiUrl(location, route, sortBy.selected, pageNumber,
      pathParams.destination.toLowerCase(), route.packageType, listingType,
      this.props.filters, this.props.selectedFilters);
    loadMorePackagesDispatcher(url);
  };

  createDescriptionTag = () => {
    const {
      metaTags, totalPackages, route: { category = 'tour' }, pathParams: { destination },
      bannerHeadline
    } = this.props;
    const description = getDescription('', metaTags);
    if (bannerHeadline) {
      return `${totalPackages} ${capitalizeEveryFirstLetter(bannerHeadline)}${description ? ` - ${description}` : ''}`;
    } else {
      return `${totalPackages}${destination ? ` ${makeCapitalizedSentence(destination)}` : ''} ${capitalizeEveryFirstLetter(category)} ${totalPackages > 1 ? 'Packages' : 'Package'} - ${getDescription('', metaTags)}`;
    }
  };

  renderHelmet = (title) => {
    const { metaTags: metaTagList, location, banner, currentPage } = this.props;
    return (<Helmet>
      <title>{getTitle(title, metaTagList)}</title>
      <meta name="theme-color" content="#68c4c1" />
      <meta property="og:url" content={this.getPageUrl()} />
      <meta property="og:image"
            content={banner && banner.pic_url} />
      <meta property="og:site_name" content="TravelTriangle.com" />
      <meta name="smartaddon-verification" content="eddbf5aa71ba4a4029bead17a0940aaf" />
      <meta charSet="utf-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="description" content={this.createDescriptionTag()} />
      <meta property="og:description" content={this.createDescriptionTag()} />
      <meta property="al:android:url" content={`tt://${getAppSchemeUrl(location, currentPage)}`} />
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
      <meta name="page_fullname" content={this.getPageFullName()} />
      {renderMetaTags(metaTagList)}
    </Helmet>);
  };

  renderExperienceFilters = (filterDestinationActivities, isTourFilterSelected, filterSelected,
                             selectedFilters, filterCategory, filterCounts, location) => {
    return filterDestinationActivities && filterDestinationActivities.length ?
      <div className='mt8 hide expFilter'>
        <InlineFilterExperience filters={{
          displayType: 'checkbox',
          options: filterDestinationActivities,
          id: 'location_experiences',
          paramsName: 'location_experiences[]',
          title: 'Experiences'
        }}
                                className="inline-common-filter"
                                selectedFilters={selectedFilters}
                                filterSelected={filterSelected}
                                isTheme={false}
                                filtersApplied={(filterOptions) => {
                                  this.onFiltersApply(filterOptions);
                                }}
                                filterCounts={filterCounts}
                                isDoubleLine={true}
                                location={location}
                                title='Choose by Attractions & Experiences' />
      </div> : null;
  };

  renderFlightFilters = (filters, filterSelected, setDefaultSelectedFilters,
                         selectedFilters, filterCategory, location, isTourFilterSelected, filterCounts, notSeasonal) => {
    return notSeasonal
      ?
      <div className='mt8 mb8'>
        <InlineFilter filters={filters['flight_filter']}
                      className="inline-common-filter flight-filters"
                      selectedFilters={selectedFilters}
                      filterSelected={filterSelected}
                      setDefaultSelectedFilters={setDefaultSelectedFilters}
                      isTheme={false}
                      filtersApplied={(filterOptions) => {
                        this.onFiltersApply(filterOptions);
                      }}
                      filterCounts={filterCounts}
                      type='radio'
                      location={location}
                      title="View Packages" />
      </div> : null;
  };

  setActiveHotels = (pkgId, hotelId) => {
    let activeHotels = this.state.activeHotels;
    activeHotels = {
      ...activeHotels,
      [pkgId]: hotelId
    };
    this.setState({ activeHotels });
  };

  getPageUrl = () => {
    let link = this.props.location.pathname.split(/page\/\d+/).join('');
    if (link[link.length - 1] === '/') {
      link = link.substring(0, link.lastIndexOf('/'));
    }
    return `https://traveltriangle.com${link}`;
  };

  render() {
    const {
      location, pathParams, isMultiDestination, multiDestinationTexts, packages,
      addToComparingPackages, removeFromComparingPackages, selectedFilters, sortBy, selectedFilterCount,
      setTourCategoryFilter, totalPackages, startingPrice, packagesToDisplay, currentPage,
      route, footerSection, breadcrumbs, comparingPackages, faqs, similarLiveCities, isCity, loading,
      bannerHeadline, allPackageLink, filterCategory, formToLocation, filterSelected,
      filterCounts, isTourFilterSelected, seoFooter, filterDestinationActivities, getPackageData, destinationName,
      footerLinks, fobpLinks, experimentId, setDefaultSelectedFilters, rating, reviews, richText, schemaAttributes,
      history
    } = this.props;
    const { package_starting_price } = packages;
    const isRatingSchemaEnabled = schemaAttributes && schemaAttributes.star_rating && reviews;
    const TravelerReviewContainer = TravelerReview.plpContainer;
    let url = location.pathname;
    if (url[url.length - 1] === '/') {
      url = url.substring(0, url.lastIndexOf('/'));
    }

    const spacedDestination = pathParams.destination
      ? `${pathParams.destination.split('-').join(' ')} ` : '';

    const destinationTitle = isMultiDestination
      ? `${parseDestinationsToShow(multiDestinationTexts)} `
      : spacedDestination;

    const title = `${destinationTitle}${pathParams.category} Packages`;
    const trackListingLeadFunnel = (section, category, object, cta, pId) => {
      setCookie('package_id_lead_funnel', pId);
      trackSegment({
        funnel_step: 1,
        section,
        cta,
        category,
        object,
        event: LEAD_FUNNEL,
        label: getLeadFunnelName(1),
        pacakge_id: pId,
        funnel_uuid:  getRandomString(20)
      });
    };

    const experienceFilters = this.renderExperienceFilters(filterDestinationActivities,
      isTourFilterSelected, filterSelected, selectedFilters, filterCategory, filterCounts, location);
    const flightFilters = this.renderFlightFilters(this.getFilters(), filterSelected, setDefaultSelectedFilters,
      selectedFilters, filterCategory, location, isTourFilterSelected, filterCounts, route.packageType !== 'seasonal');

    const showTopDestinations = similarLiveCities && similarLiveCities.length &&
      !isMultiDestination && route.packageType !== 'seasonal';

    const budget = ListingAsync.getBudget(location.search);

    return (
      <div className="row row- sbc5">
        {this.renderHelmet(title)}
        <link
          rel="canonical"
          href={`https://traveltriangle.com${url}`}
        />
        <div id="bg-mask-ei" className="bg-mask-ei" onClick={e => hidePopup(e)} />
        <ScrollPercentage onChange={onScroll}>
          <div vocab={isRatingSchemaEnabled ? "https://schema.org/" : null}
               typeof={isRatingSchemaEnabled ? "Product" : null}>
            <HeaderCommon />
            <HeaderTitle title={bannerHeadline ? capitalizeEveryFirstLetter(bannerHeadline) : title}
                         backUrl={this.props.location.action === 'POP' ? '/' : ''}
                         isRatingSchemaEnabled={isRatingSchemaEnabled} />
            <SortAndFilter
              filters={this.getFilters()}
              selectedFilters={selectedFilters}
              sortBy={sortBy}
              filtersApplied={() => this.onFiltersApply(this.props.selectedFilters)}
              location={location}
              selectedFilterCount={selectedFilterCount}
              intiFiltersTour={setTourCategoryFilter}
              category={pathParams.category}
              filterCategory={filterCategory || []}
              onFilterCheckHandler={this.loadFilterCounts}
              push={history.push}
            />

            {
              !totalPackages ?
                <TotalPackagesCount
                  totalPackages={totalPackages || 0}
                  startingPrice={startingPrice}
                  push={history.push}
                /> : null
            }
            {
              route.packageType !== 'seasonal' && packages.length ?
                <InlineFilters isTourFilterSelected={isTourFilterSelected}
                               filters={this.getFilters()}
                               filterSelected={filterSelected}
                               filtersApplied={(filterOptions) => {
                                 this.onFiltersApply(filterOptions);
                               }}
                               selectedFilters={selectedFilters}
                               filterCategory={filterCategory || []}
                               location={location}
                               filterCounts={filterCounts} /> : null
            }
            {
              totalPackages ?
                <div className="sbcw p15 pt0 pb8">
                  <h2 className="fw9 pt15 f16 mb8 pfc3">
                    Showing
                    {
                      <span className="ml5 at_packagecountfilter pfc1">
                        {`${totalPackages > 0 ? totalPackages : 0}`}
                    </span>
                    }{` `}
                    <span className="text-capitalize">
                    {
                      bannerHeadline ? bannerHeadline : title
                    }
                  </span>
                  </h2>
                  {
                    allPackageLink && allPackageLink.text ?
                      <a className="flex fwb" href={allPackageLink.link}>
                        <span className="mb8">{`All ${allPackageLink.text}`}</span>
                        <span className="icon24 p8 flex">
                        <span className="flexFull relative rotate270 block wfull hfull read-more-button">
                          <BlueDownArrow />
                        </span>
                      </span>
                      </a> : null
                  }
                </div> : null
            }

            {
              ListingAsync.renderPackagesWithExitIntent(packages, trackListingLeadFunnel, comparingPackages,
                addToComparingPackages, removeFromComparingPackages, isMultiDestination, multiDestinationTexts,
                formToLocation, showTopDestinations, similarLiveCities, pathParams,
                this.setActiveHotels, experienceFilters, getPackageData, isCity, destinationName, fobpLinks, experimentId,
                budget, flightFilters, history.push)
            }

            <div className="row row-">
              <LoadMorePackages
                packagesRemaining={totalPackages - packagesToDisplay}
                loadMorePackages={this.loadMorePackages}
                currentPage={currentPage}
                title="Packages remaining"
                loading={loading}
              />
            </div>

            <div className="m8 ml0 mr0">
              <TravelerReviewContainer destination={pathParams.destination} />
            </div>

            {
              route.packageType === 'seasonal' ?
                <TravelerStory tags={['tt_seasonal']} /> :
                <TravelerStory tags={[pathParams.destination]} />
            }
            {footerLinks && Object.keys(footerLinks).length ? <Interlinking footerLinks={[footerLinks]} /> : null}

            {
              faqs && faqs.length ?
                <div className="row row- mt8 mb8 sbc5">
                  <Faq faqs={faqs}
                       destination={{ name: spacedDestination, id: '' }}
                       isMultiDestination={packages.is_multi_destination}
                       destinations={packages.multi_destination_texts} />
                </div> : null
            }
            {
              pathParams.destination
                ? <PlacesToVisit.container externalCss="mb8 p15 sbcw" />
                : null
            }

            {
              pathParams.destination
                ? <ThingsToDo.container externalCss="mb8 p15 sbcw" />
                : null
            }

            {
              Object.keys(footerSection).length ?
                <div className="row row- mt8 sbc5 mb8">
                  <AboutListingDestination footerSection={footerSection}
                                           isRatingSchemaEnabled={isRatingSchemaEnabled} />
                </div> : null
            }
            <div className="row row- sbcw pb0 sbc5">
              <WhyBookWithOurAgents />
            </div>

            <Breadcrumb breadcrumbs={breadcrumbs} />
            <RichText
              richText={richText}
              rating={rating}
              reviews={reviews}
              startingPrice={package_starting_price}
              isRatingSchemaEnabled={isRatingSchemaEnabled}
            />

            {
              route.packageType !== 'seasonal' && seoFooter.footer_sections && seoFooter.footer_sections.length ?
                <SeoFooter footerSections={seoFooter.footer_sections} /> : null
            }

            <div className="row row-">
              <Footer />
            </div>

            <FixedMenu />

            {
              comparingPackages.length === 1 && !getCookie('first_loader_opened') &&
              <LoaderFirst onClose={() => this.setState({ firstLoaderOpened: true })} />
            }

            {
              comparingPackages.length === 2 &&
              <LoaderSecond />
            }
          </div>
        </ScrollPercentage>
      </div>
    );
  }
}

export default ListingAsync;
