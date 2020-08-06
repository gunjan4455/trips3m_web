import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { ScrollPercentage } from 'react-scroll-percentage';

import HeaderCommon from 'modules/header/HeaderCommon';
import { default as HeaderTitle } from 'modules/header/HeaderTitle';
import LoadMorePackages from 'components/Listing/LoadMorePackages';
import DestinationListingCard from 'components/DestinationListing/DestinationListingCard';
import SeePackages from 'components/DestinationListing/SeePackages';
import HelpMePlan from 'components/DestinationListing/HelpMePlan';
import HelpMeCompare from 'components/DestinationListing/HelpMeCompare';
import Footer from 'components/Footer/Footer';
import FixedMenu from 'components/FixedMenu/FixedMenu';
import SortAndFilter from 'containers/Listing/FilterView.js';
import {
  onScroll,
  trackSegment,
  initializeScroller,
  DESTINATION_LIST_VIEWED,
  DFEAULT_VALUE, PACKAGE_LIST_CLICK, LEAD_FUNNEL, getLeadFunnelName
} from 'actions/segmentEvents';
import { getRandomString, setCookie } from 'app/helpers/FormDataFormatter';
import { setVisitedDestinationsCookie } from 'app/helpers/utils';
import { hidePopup, initializeExitIntent, showPopUp } from 'helpers/exitIntent';
import { useQuery } from 'containers/Listing/parseFilters';

class DestinationListingAsync extends Component {
  constructor(props) {
    super(props);
    this.params = {};
    this.getSelectedItem = this.getSelectedItem.bind(this);
    this.onFiltersApply = this.onFiltersApply.bind(this);
    this.parseRouteParams = this.parseRouteParams.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.parseRouteParams(props);
    this.getPageFullName = this.getPageFullName.bind(this);
    this.getDestinationListingCanonical = this.getDestinationListingCanonical.bind(this);
    this.getDefaultSelectedItem = this.getDefaultSelectedItem.bind(this);
    setCookie('cb_dt', '');
  }

  parseRouteParams(props) {
    // parse weekendDestination and category from url
    const { location: { pathname, search }, match } = props;
    const query = useQuery(search);
    let category;
    let weekendDestination;
    if (props.route.pageType === 'weekend') {
      weekendDestination = match.params.destination;
    } else if (props.route.pageType === 'category') {
      category = pathname.substring(1).split('-')[0];
    }
    props.listOpened(category, weekendDestination);
    this.state = {
      category
    };
    props.updateSelectedItem(this.getSelectedItem(category, weekendDestination, pathname));
    // parse is_international param
    if (query.is_international) {
      if (query.is_international === 'true') {
        this.params = { destination_type: 'international' };
        props.filterSelected(36, { 2: true });
      } else {
        this.params = { destination_type: 'domestic' };
        props.filterSelected(36, { 1: true });
      }
    } else {
      props.filterSelected(36, { 1: true, 2: true });
    }
  }

  getDestinationListingCanonical() {
    let url = '';
    const { route, location } = this.props;
    if (route && location && route.pageType === 'category') {
      url = location.pathname;
    } else if (route && route.pageType === 'weekend') {
      const { weekendFromDestination } = this.props;
      const destination = weekendFromDestination ? weekendFromDestination.toLowerCase() : '';
      url = `https://traveltriangle.com/place-near/${destination}`;
    }
    return url;
  }

  getSelectedItem(category, weekendDestination, url = '') {
    let list = this.props.selectionList.tripTypes;
    if (weekendDestination) {
      list = this.props.selectionList.weekends;
    }
    return Object.keys(list).filter((key) => {
      if (url.includes(list[key].url)) {
        return true;
      }
      return false;
    })[0] || this.getDefaultSelectedItem(weekendDestination, list);
  }

  getDefaultSelectedItem(weekendDestination, list) {
    if (weekendDestination) {
      return list[this.props.weekendFromDestination] ? this.props.weekendFromDestination : Object.keys(list)[0];
    }
    return Object.keys(list)[0];
  }

  getTitle() {
    const { htmlTags } = this.props;
    const titleTag = htmlTags ? htmlTags.filter(e => e.keyword.toLowerCase() === 'title') : [];
    return titleTag[0] ? titleTag[0].value : 'Travel Triangle';
  }

  getPageFullName() {
    let category;
    let weekendDestination;
    if (this.props.route.pageType === 'category') {
      category = this.props.location.pathname.substring(1).split('-')[0];
      return `Category Page/${category}`;
    } else if (this.props.route.pageType === 'weekend') {
      weekendDestination = this.props.params.destination;
      return `Weekend List Page/Near-${weekendDestination}`;
    }
    return '';
  }

  componentDidMount() {
    document.readyState === 'complete' ? initializeExitIntent() :
      window.addEventListener('load', initializeExitIntent);
    initializeScroller();
    if (this.props.route.pageType === 'weekend' && this.props.isBadWeekendFilter) {
      this.props.initializeWeekendFilter();
    }
    if (this.props.route.pageType === 'category') {
      trackSegment({
        event: DESTINATION_LIST_VIEWED,
        category: `Destination List:${this.props.category || 'All'}`,
        destination_list: '',
        destination_id: '',
        num_destinations: 0,
        package_id: 0,
        value: DFEAULT_VALUE
      });
    }

    setCookie('cb_dt', this.props.weekendDestination);
    setVisitedDestinationsCookie(this.props.weekendDestination);
  }

  onFiltersApply() {
    const filters = this.props.filters;
    const selectedFilters = this.props.selectedFilters;

    this.props.resetDefaultFilters(true);
    const params = Object.keys(selectedFilters).reduce((query, filterId) => {
      this.props.setDefaultSelectedFilters('', filterId, selectedFilters[filterId], true);
      const filter = filters[filterId];
      const options = filter.options;
      // for selection options, get the value for that option
      query[filter.paramsName] =
      Object.keys(selectedFilters[filterId]).reduce((res, optionId) => {
        if (selectedFilters[filterId][optionId]) {
          // get the option
          const option = options.filter(option => (option.id == parseInt(optionId, 10)))[0];
          res.push(option.value);
        }
        return res;
      }, []).join(',');
      return query;
    }, {});

    // get sort by
    const sortByOption = this.props.sortBy.selected;
    if (sortByOption) {
      const sortOptionSplit = sortByOption.split('_');
      params.sort_by = sortOptionSplit[0];
      params.sort_order = sortOptionSplit[1];
    }
    // dispatch the action
    this.props.fetchDestinationList(params);
  }

  getDestinationCards = () => {
    const { category } = this.state;
    const { weekendDestination, destinationList, route: { pageType }, destinationsToDisplay } = this.props;
    const destinationCards = destinationList.slice(0, destinationsToDisplay - 1).map((destination) => (
      <DestinationListingCard
        key={destination.id}
        destination={destination}
        category={category}
        weekendDestination={weekendDestination}
        pageType={pageType}
        numPackages={destination.numberOfPackages}
      />
    ));
    const exitDiv = <div id="reactExitIntentImage"
                         className="mkt-mob-exit-intent mb8 row row- mb8 relative" onClick={showPopUp} />;
    if (destinationCards.length === 0) {
      return null;
    } else {
      // slice function won't break even if the given indices are out of range. It will return an empty array.
      return [
        ...destinationCards.slice(0, 2),
        exitDiv,
        ...destinationCards.slice(2),
      ];
    }
  };

  render() {
    const trackDestinationPage = (type, cta, section) => {
      if (type === 'lead_funnel') {
        trackSegment({
          funnel_step: 1,
          section,
          cta,
          category: `Category/${this.props.category}`,
          object: `Category/${this.props.category}`,
          event: LEAD_FUNNEL,
          label: getLeadFunnelName(1),
          funnel_uuid:  getRandomString(20)
        });
      } else if (type === 'package_list_click') {
        trackSegment({
          event: PACKAGE_LIST_CLICK,
          section: section,
          category: 'Destination:Unknown',
          cta: cta,
          object: 'Category/Tour',
          label: 'Package Type: Tour',
          destination_list: '',
          destination_id: '',
          value: DFEAULT_VALUE
        });
      }
    };

    const { category, htmlTags } = this.props;
    return (
      <div className='row row-'>
        <Helmet>
          <title>{this.getTitle()}</title>
          <meta name="page_fullname" content={this.getPageFullName()} />
          <meta name="referrer" content="unsafe-url" />
          <link rel="canonical" href={this.getDestinationListingCanonical()} />
          {
            htmlTags && htmlTags.map(metaTag => {
              if (metaTag.keyword.toLowerCase() !== 'title') {
                return <meta name={metaTag.keyword} content={metaTag.value} key={metaTag.keyword} />;
              }
            })
          }
        </Helmet>
        <ScrollPercentage onChange={onScroll}>
          <div id="bg-mask-ei" className="bg-mask-ei" onClick={e => hidePopup(e)} />
          <HeaderCommon />
          <HeaderTitle
            tripTypeListShown
          />
          <SortAndFilter
            filters={this.props.filters}
            selectedFilters={this.props.selectedFilters}
            sortBy={this.props.sortBy}
            filtersApplied={this.onFiltersApply}
            location={this.props.location}
            selectedFilterCount={this.props.selectedFilterCount}
            isCategoryPage={true}
          />
          <div className='row row- pt8 sbc5'>
            {this.getDestinationCards()}
          </div>
          <div className='row row- sbc5 p8 pt0'>
            <LoadMorePackages
              packagesRemaining={this.props.destinationList.length - this.props.destinationsToDisplay}
              loadMorePackages={this.props.loadMoreDestinations}
              currentPage={1}
              title="Destinations remaining"
            />
          </div>
          <div className='row row- pl8 pr8 pb8 sbc5'>
            <HelpMePlan trackSegment={trackDestinationPage} />
          </div>
          <div className='row row- pl8 pr8 pb8 sbc5'>
            <HelpMeCompare trackSegment={trackDestinationPage} />
          </div>
          <div className='row row- pb8 sbc5'>
            <SeePackages trackSegment={trackDestinationPage} category={category} location={this.props.location} />
          </div>
          <div className='row row- pb8 pt0 pl8 pr8 sbc5'>
            <Footer />
          </div>
          <FixedMenu />
        </ScrollPercentage>
      </div>
    );
  }
}

DestinationListingAsync.propTypes = {
  route: PropTypes.shape({
    pageType: PropTypes.string.isRequired
  }).isRequired,
  params: PropTypes.shape({
    destination: PropTypes.string
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  listOpened: PropTypes.func.isRequired,
  destinationList: PropTypes.array.isRequired,
  fetchDestinationList: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  sortBy: PropTypes.object.isRequired,
  selectedFilters: PropTypes.object.isRequired,
  destinationsToDisplay: PropTypes.number,
  loadMoreDestinations: PropTypes.func.isRequired,
  weekendFromDestination: PropTypes.string.isRequired,
  initializeWeekendFilter: PropTypes.func.isRequired,
  isBadWeekendFilter: PropTypes.bool.isRequired,
  selectionList: PropTypes.object.isRequired,
  category: PropTypes.string,
  count: PropTypes.number.isRequired,
  weekendDestination: PropTypes.string,
  selectedFilterCount: PropTypes.func.isRequired,
  htmlTags: PropTypes.array.isRequired,
  setDefaultSelectedFilters: PropTypes.func.isRequired,
  resetDefaultFilters: PropTypes.func.isRequired,
};

DestinationListingAsync.defaultProps = {
  params: {
    destination: ''
  },
  count: 49,
  destinationsToDisplay: 10,
  initializeWeekendFilter: () => {},
  isBadWeekendFilter: false,
  category: '',
  weekendDestination: ''
};

export default DestinationListingAsync;
