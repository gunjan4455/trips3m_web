require("source-map-support").install();
exports.ids = ["destination-listing"];
exports.modules = {

/***/ "./app-v2/modules/header/HeaderTitle.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/header/HeaderTitle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderTitle = exports.TripTypeList = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _destinations = __webpack_require__(/*! reducers/destinationListing/destinations */ "./app/reducers/destinationListing/destinations.js");

var _destinationListing = __webpack_require__(/*! actions/destinationListing */ "./app/actions/destinationListing.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./Header.scss */ "./app-v2/modules/header/Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TripTypeList = ({
  selectionList,
  selectedItem,
  toggleSelection,
  trackCategoryClick
}) => _react.default.createElement("div", {
  className: "row row- absolute wfull category-list"
}, _react.default.createElement("ul", null, Object.keys(selectionList).map(item => _react.default.createElement("li", {
  key: item
}, _react.default.createElement(_reactRouter.Link, {
  to: selectionList[item].url,
  className: selectedItem === item ? 'selected-category' : '',
  onClick: e => {
    toggleSelection();

    if (selectionList[item].name === 'All') {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.DESTINATION_LIST_CLICK,
        section: 'Header Section',
        object: '',
        cta: selectionList[item].name,
        category: `Destination List: ${selectionList[item].name}`,
        destination_list: selectionList[item].name,
        destination_id: selectionList[item].name,
        value: _segmentEvents.DFEAULT_VALUE,
        label: `Destination Type: ${selectionList[item].name}`
      });
    } else {
      trackCategoryClick({
        section: 'Top Dropdown',
        object: '',
        cta: e.target.text,
        category: e.target.text
      });
    }
  }
}, selectionList[item].name)))), _react.default.createElement("div", {
  className: "fix-layer-suggestion",
  onClick: toggleSelection
}));

exports.TripTypeList = TripTypeList;
TripTypeList.propTypes = {
  selectionList: _propTypes.default.object.isRequired,
  selectedItem: _propTypes.default.string.isRequired,
  toggleSelection: _propTypes.default.func.isRequired,
  trackCategoryClick: _propTypes.default.func
};
TripTypeList.defaultProps = {
  trackCategoryClick: () => {}
};
let HeaderTitle = class HeaderTitle extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleScroll = () => {
      const {
        toggleSelection,
        selectionListVisible
      } = this.props;
      const scrollTop = window.scrollY;

      if (scrollTop > 100 && selectionListVisible) {
        toggleSelection();
      }
    }, this.dropDownTitle = (title, category) => {
      if (category) {
        if (title === 'All') {
          return 'Top Places';
        }

        return `Top Places - ${title}`;
      }

      return `Weekend Getaways - ${title}`;
    }, this.renderSubHeading = (showTitleAsH1, plpHeading, title, isRatingSchemaEnabled) => {
      if (plpHeading) {
        return _react.default.createElement("h2", {
          className: "fw4 flexFull"
        }, plpHeading);
      } else if (showTitleAsH1) {
        return _react.default.createElement("h1", {
          className: "fw4 flexFull",
          property: isRatingSchemaEnabled ? "name" : null
        }, title);
      } else {
        return _react.default.createElement("p", {
          className: "fw4 flexFull"
        }, title);
      }
    }, _temp;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {
      goBackState,
      selectionList,
      selectedItem,
      toggleSelection,
      selectionListVisible,
      title,
      tripTypeListShown,
      trackCategoryClick,
      category,
      backUrl,
      showShare,
      showBlackShare,
      heading,
      url,
      showTitleAsH1,
      plpHeading,
      isRatingSchemaEnabled
    } = this.props;
    let subHeader = null;

    if (tripTypeListShown) {
      subHeader = _react.default.createElement("div", {
        className: "button-drop-category flexFull"
      }, _react.default.createElement("button", {
        onClick: toggleSelection
      }, _react.default.createElement("h1", {
        className: "fw4 iblock"
      }, this.dropDownTitle(selectionList[selectedItem].name, category)), _react.default.createElement("span", {
        className: "down-arrow-destination"
      })), _react.default.createElement("div", {
        className: selectionListVisible ? '' : 'hide'
      }, _react.default.createElement(TripTypeList, {
        selectionList: selectionList,
        selectedItem: selectedItem,
        toggleSelection: toggleSelection,
        trackCategoryClick: trackCategoryClick
      })));
    } else {
      subHeader = this.renderSubHeading(showTitleAsH1, plpHeading, title, isRatingSchemaEnabled);
    }

    return _react.default.createElement("div", {
      className: "header-title"
    }, _react.default.createElement("div", {
      className: "f16 sfcw header-title-p flex alignCenter spaceBetween"
    }, _react.default.createElement("button", {
      onClick: () => goBackState(backUrl),
      className: "back-arrow"
    }, "go back"), subHeader, showShare ? _react.default.createElement("span", {
      className: "share-logo-right fright"
    }, _react.default.createElement("a", {
      href: (0, _urlHelpers.whatsappUrl)(heading, url)
    }, showBlackShare ? _react.default.createElement(_Icon.BlackShareIcon, {
      className: "absolute-center wfull"
    }) : _react.default.createElement(_Icon.WhiteShareIcon, {
      className: "absolute-center wfull"
    }))) : null));
  }

};
exports.HeaderTitle = HeaderTitle;
HeaderTitle.propTypes = {
  goBackState: _propTypes.default.func.isRequired,
  selectionList: _propTypes.default.object,
  selectedItem: _propTypes.default.string,
  toggleSelection: _propTypes.default.func,
  selectionListVisible: _propTypes.default.bool,
  title: _propTypes.default.string,
  tripTypeListShown: _propTypes.default.bool,
  trackCategoryClick: _propTypes.default.func,
  category: _propTypes.default.string,
  backUrl: _propTypes.default.string,
  showShare: _propTypes.default.bool,
  showBlackShare: _propTypes.default.bool,
  heading: _propTypes.default.string,
  url: _propTypes.default.string,
  showTitleAsH1: _propTypes.default.bool,
  plpHeading: _propTypes.default.string,
  isRatingSchemaEnabled: _propTypes.default.bool
};
HeaderTitle.defaultProps = {
  selectionList: {
    all: {
      name: 'All',
      url: '/All-Places'
    }
  },
  selectedItem: 'all',
  toggleSelection: () => {},
  selectionListVisible: false,
  title: '',
  tripTypeListShown: false,
  trackCategoryClick: () => {},
  category: '',
  backUrl: '',
  showShare: false,
  showBlackShare: false,
  heading: '',
  url: '',
  showTitleAsH1: true,
  plpHeading: '',
  isRatingSchemaEnabled: false
};

var _default = (0, _reactRedux.connect)(state => ({
  selectionList: (0, _destinations.getSelectionList)(state),
  selectedItem: state.destinationListing.destinationListing.selectedItem,
  selectionListVisible: (0, _destinations.isSelectionListVisible)(state),
  category: state.destinationListing.destinationListing.category,
  weekendDestination: state.destinationListing.destinationListing.weekendDestination
}), dispatch => ({
  goBackState: params => params ? dispatch((0, _reactRouterRedux.push)(params)) : dispatch((0, _reactRouterRedux.goBack)()),
  toggleSelection: () => dispatch((0, _destinationListing.toggleSelectionList)())
}))(HeaderTitle);

exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationListing/DestinationListingAsync.js":
/*!**********************************************************************!*\
  !*** ./app/components/DestinationListing/DestinationListingAsync.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reactScrollPercentage = __webpack_require__(/*! react-scroll-percentage */ "react-scroll-percentage");

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

var _LoadMorePackages = _interopRequireDefault(__webpack_require__(/*! components/Listing/LoadMorePackages */ "./app/components/Listing/LoadMorePackages.js"));

var _DestinationListingCard = _interopRequireDefault(__webpack_require__(/*! components/DestinationListing/DestinationListingCard */ "./app/components/DestinationListing/DestinationListingCard.js"));

var _SeePackages = _interopRequireDefault(__webpack_require__(/*! components/DestinationListing/SeePackages */ "./app/components/DestinationListing/SeePackages.js"));

var _HelpMePlan = _interopRequireDefault(__webpack_require__(/*! components/DestinationListing/HelpMePlan */ "./app/components/DestinationListing/HelpMePlan.js"));

var _HelpMeCompare = _interopRequireDefault(__webpack_require__(/*! components/DestinationListing/HelpMeCompare */ "./app/components/DestinationListing/HelpMeCompare.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! components/Footer/Footer */ "./app/components/Footer/Footer.js"));

var _FixedMenu = _interopRequireDefault(__webpack_require__(/*! components/FixedMenu/FixedMenu */ "./app/components/FixedMenu/FixedMenu.js"));

var _FilterView = _interopRequireDefault(__webpack_require__(/*! containers/Listing/FilterView.js */ "./app/containers/Listing/FilterView.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _FormDataFormatter = __webpack_require__(/*! app/helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _utils = __webpack_require__(/*! app/helpers/utils */ "./app/helpers/utils.js");

var _exitIntent = __webpack_require__(/*! helpers/exitIntent */ "./app/helpers/exitIntent.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let DestinationListingAsync = class DestinationListingAsync extends _react.Component {
  constructor(props) {
    super(props);

    this.getDestinationCards = () => {
      const {
        weekendDestination,
        destinationList,
        route: {
          pageType
        },
        destinationsToDisplay,
        category
      } = this.props;
      const destinationCards = destinationList.slice(0, destinationsToDisplay - 1).map(destination => _react.default.createElement(_DestinationListingCard.default, {
        key: destination.id,
        destination: destination,
        category: category,
        weekendDestination: weekendDestination,
        pageType: pageType,
        numPackages: destination.numberOfPackages
      }));

      const exitDiv = _react.default.createElement("div", {
        id: "reactExitIntentImage",
        className: "mkt-mob-exit-intent mb8 row row- mb8 relative",
        onClick: _exitIntent.showPopUp
      });

      if (destinationCards.length === 0) {
        return null;
      } else {
        // slice function won't break even if the given indices are out of range. It will return an empty array.
        return [...destinationCards.slice(0, 2), exitDiv, ...destinationCards.slice(2)];
      }
    };

    this.params = {};
    this.getSelectedItem = this.getSelectedItem.bind(this);
    this.onFiltersApply = this.onFiltersApply.bind(this);
    this.parseRouteParams = this.parseRouteParams.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.parseRouteParams(props);
    this.getPageFullName = this.getPageFullName.bind(this);
    this.getDestinationListingCanonical = this.getDestinationListingCanonical.bind(this);
    this.getDefaultSelectedItem = this.getDefaultSelectedItem.bind(this);
    (0, _FormDataFormatter.setCookie)('cb_dt', '');
  }

  parseRouteParams(props) {
    // parse weekendDestination and category from url
    let category;
    let weekendDestination;

    if (props.route.pageType === 'weekend') {
      weekendDestination = props.params.destination;
    } else if (props.route.pageType === 'category') {
      category = props.location.pathname.substring(1).split('-')[0];
    }

    props.listOpened(category, weekendDestination);
    this.state = {
      category
    };
    props.updateSelectedItem(this.getSelectedItem(category, weekendDestination, props.location.pathname)); // parse is_international param

    if (props.location.query.is_international) {
      if (props.location.query.is_international === 'true') {
        this.params = {
          destination_type: 'international'
        };
        props.filterSelected(36, {
          2: true
        });
      } else {
        this.params = {
          destination_type: 'domestic'
        };
        props.filterSelected(36, {
          1: true
        });
      }
    } else {
      props.filterSelected(36, {
        1: true,
        2: true
      });
    }
  }

  getDestinationListingCanonical() {
    let url = '';
    const {
      route,
      location
    } = this.props;

    if (route && location && route.pageType === 'category') {
      url = location.pathname;
    } else if (route && route.pageType === 'weekend') {
      url = `/place-near/${this.props.weekendFromDestination}`;
    }

    return url;
  }

  getSelectedItem(category, weekendDestination, url = '') {
    let list = this.props.selectionList.tripTypes;

    if (weekendDestination) {
      list = this.props.selectionList.weekends;
    }

    return Object.keys(list).filter(key => {
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
    const {
      htmlTags
    } = this.props;
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
    document.readyState === 'complete' ? (0, _exitIntent.initializeExitIntent)() : window.addEventListener('load', _exitIntent.initializeExitIntent);
    (0, _segmentEvents.initializeScroller)();

    if (this.props.route.pageType === 'weekend' && this.props.isBadWeekendFilter) {
      this.props.initializeWeekendFilter();
    }

    if (this.props.route.pageType === 'category') {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.DESTINATION_LIST_VIEWED,
        category: `Destination List:${this.props.category || 'All'}`,
        destination_list: '',
        destination_id: '',
        num_destinations: 0,
        package_id: 0,
        value: _segmentEvents.DFEAULT_VALUE
      });
    }

    (0, _FormDataFormatter.setCookie)('cb_dt', this.props.weekendDestination);
    (0, _utils.setVisitedDestinationsCookie)(this.props.weekendDestination);
  }

  onFiltersApply() {
    const filters = this.props.filters;
    const selectedFilters = this.props.selectedFilters;
    this.props.resetDefaultFilters(true);
    const params = Object.keys(selectedFilters).reduce((query, filterId) => {
      this.props.setDefaultSelectedFilters('', filterId, selectedFilters[filterId], true);
      const filter = filters[filterId];
      const options = filter.options; // for selection options, get the value for that option

      query[filter.paramsName] = Object.keys(selectedFilters[filterId]).reduce((res, optionId) => {
        if (selectedFilters[filterId][optionId]) {
          // get the option
          const option = options.filter(option => option.id == parseInt(optionId, 10))[0];
          res.push(option.value);
        }

        return res;
      }, []).join(',');
      return query;
    }, {}); // get sort by

    const sortByOption = this.props.sortBy.selected;

    if (sortByOption) {
      const sortOptionSplit = sortByOption.split('_');
      params.sort_by = sortOptionSplit[0];
      params.sort_order = sortOptionSplit[1];
    } // dispatch the action


    this.props.fetchDestinationList(params);
  }

  render() {
    const trackDestinationPage = (type, cta, section) => {
      if (type === 'lead_funnel') {
        this.props.trackLeadFunnelClick({
          section,
          funnelStep: 1,
          object: `Category/${this.props.category}`,
          cta,
          category: `Category/${this.props.category}`
        });
      } else if (type === 'package_list_click') {
        (0, _segmentEvents.trackSegment)({
          event: _segmentEvents.PACKAGE_LIST_CLICK,
          section: section,
          category: 'Destination:Unknown',
          cta: cta,
          object: 'Category/Tour',
          label: 'Package Type: Tour',
          destination_list: '',
          destination_id: '',
          value: _segmentEvents.DFEAULT_VALUE
        });
      }
    };

    const {
      category,
      htmlTags
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, this.getTitle()), _react.default.createElement("meta", {
      name: "page_fullname",
      content: this.getPageFullName()
    }), _react.default.createElement("meta", {
      name: "referrer",
      content: "unsafe-url"
    }), _react.default.createElement("link", {
      rel: "canonical",
      href: this.getDestinationListingCanonical()
    }), htmlTags && htmlTags.map(metaTag => {
      if (metaTag.keyword.toLowerCase() !== 'title') {
        return _react.default.createElement("meta", {
          name: metaTag.keyword,
          content: metaTag.value,
          key: metaTag.keyword
        });
      }
    })), _react.default.createElement(_reactScrollPercentage.ScrollPercentage, {
      onChange: _segmentEvents.onScroll
    }, _react.default.createElement("div", {
      id: "bg-mask-ei",
      className: "bg-mask-ei",
      onClick: e => (0, _exitIntent.hidePopup)(e)
    }), _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_HeaderTitle.default, {
      tripTypeListShown: true,
      trackCategoryClick: this.props.trackCategoryClick
    }), _react.default.createElement(_FilterView.default, {
      filters: this.props.filters,
      selectedFilters: this.props.selectedFilters,
      sortBy: this.props.sortBy,
      filtersApplied: this.onFiltersApply,
      location: this.props.location,
      selectedFilterCount: this.props.selectedFilterCount,
      isCategoryPage: true
    }), _react.default.createElement("div", {
      className: "row row- pt8 sbc5"
    }, this.getDestinationCards()), _react.default.createElement("div", {
      className: "row row- sbc5 p8 pt0"
    }, _react.default.createElement(_LoadMorePackages.default, {
      packagesRemaining: this.props.destinationList.length - this.props.destinationsToDisplay,
      loadMorePackages: this.props.loadMoreDestinations,
      currentPage: 1,
      title: "Destinations remaining"
    })), _react.default.createElement("div", {
      className: "row row- pl8 pr8 pb8 sbc5"
    }, _react.default.createElement(_HelpMePlan.default, {
      trackLeadFunnelClick: trackDestinationPage
    })), _react.default.createElement("div", {
      className: "row row- pl8 pr8 pb8 sbc5"
    }, _react.default.createElement(_HelpMeCompare.default, {
      trackLeadFunnelClick: trackDestinationPage
    })), _react.default.createElement("div", {
      className: "row row- pb8 sbc5"
    }, _react.default.createElement(_SeePackages.default, {
      trackSegmentPackageListClicked: trackDestinationPage,
      category: category,
      location: this.props.location
    })), _react.default.createElement("div", {
      className: "row row- pb8 pt0 pl8 pr8 sbc5"
    }, _react.default.createElement(_Footer.default, null)), _react.default.createElement(_FixedMenu.default, null)));
  }

};
DestinationListingAsync.propTypes = {
  route: _propTypes.default.shape({
    pageType: _propTypes.default.string.isRequired
  }).isRequired,
  params: _propTypes.default.shape({
    destination: _propTypes.default.string
  }).isRequired,
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string.isRequired
  }).isRequired,
  listOpened: _propTypes.default.func.isRequired,
  destinationList: _propTypes.default.array.isRequired,
  fetchDestinationList: _propTypes.default.func.isRequired,
  filters: _propTypes.default.object.isRequired,
  sortBy: _propTypes.default.object.isRequired,
  selectedFilters: _propTypes.default.object.isRequired,
  destinationsToDisplay: _propTypes.default.number,
  loadMoreDestinations: _propTypes.default.func.isRequired,
  trackLeadFunnelClick: _propTypes.default.func.isRequired,
  trackWeekendClicked: _propTypes.default.func.isRequired,
  weekendFromDestination: _propTypes.default.string.isRequired,
  initializeWeekendFilter: _propTypes.default.func.isRequired,
  trackCategoryClick: _propTypes.default.func.isRequired,
  isBadWeekendFilter: _propTypes.default.bool.isRequired,
  selectionList: _propTypes.default.object.isRequired,
  category: _propTypes.default.string,
  count: _propTypes.default.number.isRequired,
  weekendDestination: _propTypes.default.string,
  selectedFilterCount: _propTypes.default.func.isRequired,
  htmlTags: _propTypes.default.array.isRequired,
  setDefaultSelectedFilters: _propTypes.default.func.isRequired,
  resetDefaultFilters: _propTypes.default.func.isRequired
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
var _default = DestinationListingAsync;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationListing/DestinationListingCard.js":
/*!*********************************************************************!*\
  !*** ./app/components/DestinationListing/DestinationListingCard.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _ItineraryTags = _interopRequireDefault(__webpack_require__(/*! ../Itinerary/ItineraryTags */ "./app/components/Itinerary/ItineraryTags.js"));

__webpack_require__(/*! ./DestinationListingCard.scss */ "./app/components/DestinationListing/DestinationListingCard.scss");

var DateUtils = _interopRequireWildcard(__webpack_require__(/*! ../../helpers/DateTime */ "./app/helpers/DateTime.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _urlHelpers = __webpack_require__(/*! ../../helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _segmentEvents = __webpack_require__(/*! ../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DestinationListingCard = ({
  destination,
  category,
  pageType,
  numPackages
}) => {
  const startRange = DateUtils.numberToMonth(destination.bestTimeToVisit[0] - 1);
  const endRange = DateUtils.numberToMonth(destination.bestTimeToVisit[1] - 1);
  const months = `${startRange}-${endRange}`;

  const destinationUrl = () => {
    if (destination.numberOfPackages && category) {
      if (category === 'Honeymoon' || category === 'Family' || category === 'Friends') {
        return {
          url: (0, _urlHelpers.packageListingPath)(category, destination.name),
          target: '_self'
        };
      }

      return {
        url: (0, _urlHelpers.packageListingPath)('tour', destination.name),
        target: '_self'
      };
    }

    return {
      url: (0, _urlHelpers.destinationDetailPath)(destination.id, destination.name),
      target: '_blank'
    };
  };

  const callSegment = type => {
    let section = '';
    let event = '';
    const category = `Destination:${destination.name}`;
    const object = `Destination/${destination.id}`;
    const cta = '';
    const destination_id = destination.id;
    const destination_list = destination.name;
    const label = `Package Type: ${category}`;
    const value = _segmentEvents.DFEAULT_VALUE;

    if (type === 'category') {
      section = 'Destination List/Main';
      event = _segmentEvents.PACKAGE_LIST_CLICK;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    } else if (type === 'destination') {
      section = 'Destination List/Main';
      event = _segmentEvents.DESTINATION_CLICK;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    } else if (type === _segmentEvents.DESTINATION_VIEWED) {
      section = 'Destination List/Main';
      event = _segmentEvents.DESTINATION_VIEWED;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    } else {
      section = 'Weekend List/Main';
      event = _segmentEvents.WEEKEND_CLICK;
      trackSegmentEvent({
        event,
        category,
        section,
        object,
        cta,
        destination_id,
        destination_list,
        label,
        value
      });
    }
  };

  const trackDestinationClick = () => {
    if (numPackages > 0) {
      callSegment('category');
    } else {
      if (pageType === 'weekend') {
        callSegment('Weekend Clicked');
      }

      callSegment('destination');
    }

    return true;
  };

  const trackSegmentEvent = details => {
    (0, _segmentEvents.trackSegment)({
      event: details.event,
      category: details.category,
      section: details.section,
      object: details.object,
      cta: details.cta,
      destination_list: details.destination_list,
      destination_id: details.destination_list,
      label: details.label,
      value: details.value
    });
  };

  let sensorVisibility = false;

  const onSensorChange = isVisible => {
    if (!sensorVisibility && isVisible) {
      sensorVisibility = isVisible;
      callSegment(_segmentEvents.DESTINATION_VIEWED);
    }
  };

  const toUrlInfo = destinationUrl();
  return _react.default.createElement("div", {
    className: "row row- sbc5 pl8 pr8"
  }, _react.default.createElement(_reactRouter.Link, {
    onClick: trackDestinationClick,
    to: toUrlInfo.url,
    target: toUrlInfo.target,
    className: "pfc3"
  }, _react.default.createElement("div", {
    className: "row row- p0 relative"
  }, _react.default.createElement("div", {
    className: "col-xs-12 p0 image-container-span"
  }, _react.default.createElement(_Img.default, {
    width: 395,
    height: 120,
    src: destination.imagePath,
    ikSrc: destination.imagekitUrl,
    alt: "destination"
  })), _react.default.createElement("div", {
    className: "wfull p0 absolute-center-h t8 z2"
  }, _react.default.createElement("div", {
    className: "col-xs-9 p0 pl8"
  }, _react.default.createElement("p", {
    className: "f12 fw3 sfcw text-left"
  }, "Best time:"), _react.default.createElement("p", {
    className: "f14 fw3 text-left text-uppercase sfcw"
  }, months)), _react.default.createElement("div", {
    className: "col-xs-12 p0"
  }, _react.default.createElement("h4", {
    className: "text-center f24 sfcw fw4 p8 ellipsis"
  }, destination.name), _react.default.createElement("div", {
    className: "text-center sfcw text-capitalize"
  }, destination.numberOfPackages ? _react.default.createElement("p", null, "personalize ", destination.numberOfPackages, "+ packages") : '')))), _react.default.createElement(_reactVisibilitySensor.default, {
    onChange: onSensorChange,
    intervalDelay: 3000
  }), _react.default.createElement("div", {
    className: "row row- sbcw pt15 pl8 pr8 pb8"
  }, _react.default.createElement("div", {
    className: "col-xs-7 p0 text-left"
  }, _react.default.createElement("p", {
    className: "f12 fw4 pfc4"
  }, "Starting from:"), _react.default.createElement("h3", {
    className: "sfc3 f18 fw7"
  }, "\u20B9 ", destination.budget, "/-"), _react.default.createElement("p", {
    className: "f12 fw4 pfc3"
  }, "per person", _react.default.createElement("span", {
    className: "f12 fw4 pfc4 pt4 text-capitalize"
  }, "(Flight ", destination.flightsIncluded ? 'Included' : 'Excluded', " )"))), _react.default.createElement("div", {
    className: "col-xs-5 p0 text-right"
  }, _react.default.createElement("h2", {
    className: "f12 fw7 pfc3 pt5"
  }, destination.minDays, " - ", destination.maxDays, " Days")), _react.default.createElement("div", {
    className: "col-xs-12 p0"
  }, _react.default.createElement(_ItineraryTags.default, {
    list: destination.activityLabels.map(act => act.name),
    itineraryId: 12,
    tagId: 12
  })))), _react.default.createElement("div", {
    className: "row row- sbcw pl8 pr8 mb8 pb8"
  }, _react.default.createElement("div", {
    className: "col-xs-12 p0 pt8 pb8"
  }, _react.default.createElement("div", {
    className: "col-xs-6 pl15 pr0"
  }, _react.default.createElement("h2", {
    className: "f12 fw4 pfc3 text-left relative pl15"
  }, _react.default.createElement("span", {
    className: "absolute vacation-span-con"
  }, _react.default.createElement(_Icon.VactionIcon, null)), (0, _parsers.numberWithCommas)(destination.numberOfTravelers), "+ Travelers")), _react.default.createElement("div", {
    className: "col-xs-6 pl24 pr0"
  }, _react.default.createElement("h2", {
    className: "f12 pfc3 fw4 text-left"
  }, _react.default.createElement("a", {
    href: (0, _urlHelpers.destinationTestimonialPath)(destination.name),
    className: "pfc3 relative pl24"
  }, _react.default.createElement("span", {
    className: "absolute vacation-span-con-1"
  }, _react.default.createElement(_Icon.TestimonailsIcon, null)), (0, _parsers.numberWithCommas)(destination.numberOfReviews), " Reviews"))))));
};

DestinationListingCard.propTypes = {
  destination: _propTypes.default.object.isRequired,
  pageType: _propTypes.default.string.isRequired,
  category: _propTypes.default.string,
  numPackages: _propTypes.default.number.isRequired
};
DestinationListingCard.defaultProps = {
  category: undefined,
  numPackages: 0
};
var _default = DestinationListingCard;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationListing/DestinationListingCard.scss":
/*!***********************************************************************!*\
  !*** ./app/components/DestinationListing/DestinationListingCard.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"package-text-more": "_3WUbp",
	"image-container-span": "_e_FEp",
	"destination-rating-tag": "_2rGVx",
	"vacation-span-con": "_1au1O",
	"vacation-span-con-1": "_3jc_Y"
};

/***/ }),

/***/ "./app/components/DestinationListing/HelpMeCompare.js":
/*!************************************************************!*\
  !*** ./app/components/DestinationListing/HelpMeCompare.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./HelpMeCompare.scss */ "./app/components/DestinationListing/HelpMeCompare.scss");

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HelpMeCompare = props => {
  const ctaText = 'Help me compare destinations';

  const trackClickEvent = () => {
    props.trackLeadFunnelClick('lead_funnel', ctaText, 'Bottom Bar');
    return true;
  };

  return _react.default.createElement("div", {
    className: "col-xs-12 sbcw pt24 pb15 pl8 pr8 text-center"
  }, _react.default.createElement("h4", {
    className: "text-center pb15"
  }, _react.default.createElement("span", {
    className: "confusion_icon_con block"
  }, _react.default.createElement(_Icon.Confusion, null))), _react.default.createElement("h2", {
    className: "pfc3 f14 fw4 relative destination-text"
  }, "Confused! I want to explore destinations"), _react.default.createElement("h2", {
    className: "text-center f12 text-uppercase pt15 fw4 pb8"
  }, _react.default.createElement(_FormOneCTA.default, {
    clickHandler: trackClickEvent
  }, _react.default.createElement("div", {
    className: "btn-pri wfull pl8 pr8"
  }, _react.default.createElement("div", {
    className: "wave"
  }), ctaText))));
};

HelpMeCompare.propTypes = {
  trackLeadFunnelClick: _propTypes.default.func
};
HelpMeCompare.defaultProps = {
  trackLeadFunnelClick: () => {}
};
var _default = HelpMeCompare;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationListing/HelpMeCompare.scss":
/*!**************************************************************!*\
  !*** ./app/components/DestinationListing/HelpMeCompare.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"confusion_icon_con": "_12UMB"
};

/***/ }),

/***/ "./app/components/DestinationListing/HelpMePlan.js":
/*!*********************************************************!*\
  !*** ./app/components/DestinationListing/HelpMePlan.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./HelpMePlan.scss */ "./app/components/DestinationListing/HelpMePlan.scss");

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HelpMePlan = props => {
  const ctaText = 'Help me plan & book';

  const trackClickEvent = () => {
    props.trackLeadFunnelClick('lead_funnel', ctaText, 'Bottom Bar');
    return true;
  };

  return _react.default.createElement("div", {
    className: "col-xs-12 sbcw pt24 pb15 pl8 pr8 text-center"
  }, _react.default.createElement("h4", {
    className: "text-center"
  }, _react.default.createElement("span", {
    className: "help_icon_con block"
  }, _react.default.createElement(_Icon.Help, null))), _react.default.createElement("h2", {
    className: "pfc3 f14 fw4 relative mt15 destination-text"
  }, "My destination is final! I need a budget estimate"), _react.default.createElement("h2", {
    className: "pfc3 f14 fw4 relative mt15 destination-text"
  }, "I need advice on dates, hotels & Activities"), _react.default.createElement("h2", {
    className: "text-center f12 text-uppercase pt15 fw4 pb8"
  }, _react.default.createElement(_FormOneCTA.default, {
    clickHandler: trackClickEvent
  }, _react.default.createElement("div", {
    className: "btn-pri wfull pl8 pr8"
  }, _react.default.createElement("div", {
    className: "wave"
  }), ctaText))));
};

HelpMePlan.propTypes = {
  trackLeadFunnelClick: _propTypes.default.func
};
HelpMePlan.defaultProps = {
  trackLeadFunnelClick: () => {}
};
var _default = HelpMePlan;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationListing/HelpMePlan.scss":
/*!***********************************************************!*\
  !*** ./app/components/DestinationListing/HelpMePlan.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"help_icon_con": "_1qz_V"
};

/***/ }),

/***/ "./app/components/DestinationListing/SeePackages.js":
/*!**********************************************************!*\
  !*** ./app/components/DestinationListing/SeePackages.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

__webpack_require__(/*! components/Listing/LoadMorePackages.scss */ "./app/components/Listing/LoadMorePackages.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SeePackages = props => {
  const ctaText = 'Explore Now';
  let query = '',
      pageCategory = 'tour';

  const handleClick = () => {
    props.trackSegmentPackageListClicked('package_list_click', ctaText, 'Bottom Bar');
  };

  if (props.category === 'All') {
    if (!(0, _isEmpty.default)(props.location.query)) {
      if (props.location.query.is_international === 'true') {
        query = '?destination_type=international';
      } else {
        query = '?destination_type=india';
      }
    }
  } else {
    if (['Honeymoon', 'Friends', 'Family'].indexOf(props.category) > -1) {
      pageCategory = props.category.toLowerCase();
    } else if (props.category) {
      query = `?trip_types[]=${props.category}`;
    }
  }

  const url = `/${pageCategory}-packages${query}`;
  return _react.default.createElement("div", {
    className: "col-xs-12 pl8 pr8"
  }, _react.default.createElement(_reactRouter.Link, {
    onClick: handleClick,
    className: "button-load-more-full ripple",
    to: url
  }, _react.default.createElement("div", {
    className: "wave"
  }), ctaText));
};

SeePackages.propTypes = {
  trackSegmentPackageListClicked: _propTypes.default.func,
  location: _propTypes.default.object.isRequired,
  category: _propTypes.default.string
};
SeePackages.defaultProps = {
  trackSegmentPackageListClicked: () => {},
  category: 'All'
};
var _default = SeePackages;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/AddressTT.js":
/*!********************************************!*\
  !*** ./app/components/Footer/AddressTT.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddressTT = ({
  isHomePage
}) => {
  return _react.default.createElement("div", {
    className: "row row- sfcw text-center",
    itemProp: isHomePage ? "address" : null,
    itemScope: isHomePage ? "itemscope" : null,
    itemType: isHomePage ? "https://schema.org/PostalAddress" : null
  }, _react.default.createElement("p", {
    className: "fw9 f14 m0 mb15 sfc6 text-uppercase "
  }, "Corporate Office"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "name" : null
  }, "Holiday Triangle Travel Private Limited"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "streetAddress" : null
  }, "Plot No - 29 , 3rd & 4th Floor, "), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "addressLocality" : null
  }, "Dynamic House, Maruti Industrial Complex,"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "AddressRegion" : null
  }, "Sector 18 , Gurugram - ", _react.default.createElement("span", {
    itemProp: "postalCode"
  }, "122015 "), ", Haryana"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "telephone" : null
  }, "Landline: ", _react.default.createElement("a", {
    href: "tel:18001235555"
  }, "1800 123 5555")), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "email" : null
  }, "Email: ", _react.default.createElement("a", {
    rel: "nofollow",
    href: "mailto:customercare@traveltriangle.com"
  }, "customercare@traveltriangle.com")));
};

AddressTT.propTypes = {
  isHomePage: _propTypes.default.bool
};
AddressTT.defaultProps = {
  isHomePage: false
};
var _default = AddressTT;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/CopyRight.js":
/*!********************************************!*\
  !*** ./app/components/Footer/CopyRight.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddressTT = () => _react.default.createElement("p", {
  className: "f12 pfc4"
}, "All rights reserved \xA9 2020");

var _default = AddressTT;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/FooterLinks.js":
/*!**********************************************!*\
  !*** ./app/components/Footer/FooterLinks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./FooterLinks.scss */ "./app/components/Footer/FooterLinks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FooterLinks = () => _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("ul", {
  className: "flex alignCenter flexWrap justifyCenter footer-links-menu"
}, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/aboutus"
}, "About Us")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/career"
}, "We Are Hiring!")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/team"
}, "Team")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/blog"
}, "Blog")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/testimonials"
}, "Testimonials")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/tnc"
}, "T&C")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/privacy"
}, "Privacy Policy")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/cancellation"
}, "Cancellation")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/FAQs"
}, "FAQs")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/contact_us"
}, "Contact Us"))));

var _default = FooterLinks;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/FooterLinks.scss":
/*!************************************************!*\
  !*** ./app/components/Footer/FooterLinks.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer-links-menu": "_1xegl"
};

/***/ }),

/***/ "./app/components/Footer/SocialLinks.js":
/*!**********************************************!*\
  !*** ./app/components/Footer/SocialLinks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SocialIconsContainer = _glamorous.default.div({
  '& .facebookIcon': {
    '& svg': {
      width: '10px',
      height: '19px'
    }
  },
  '& .twitterIcon': {
    '& svg': {
      width: '17px',
      height: '14px'
    }
  },
  '& .pintrestIcon': {
    '& svg': {
      width: '20px',
      height: '20px'
    }
  },
  '& .googleIcon': {
    '& svg': {
      width: '21px',
      height: '13px'
    }
  },
  '& .instaIcon': {
    '& svg': {
      width: '20px',
      height: '20px'
    }
  }
});

const ConnectIcons = _glamorous.default.a({
  minWidth: '30px',
  maxWidth: '30px',
  height: '30px',
  display: 'inline-block',
  marginRight: '10px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:last-child': {
    marginRight: '0'
  }
});

let SocialLinks = class SocialLinks extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "wfull"
    }, _react.default.createElement(SocialIconsContainer, {
      className: "at_socialicons flex alignCenter wfull justifyCenter"
    }, _react.default.createElement(ConnectIcons, {
      className: "facebookIcon",
      href: "https://www.facebook.com/traveltriangle",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.FBIconWhite, null)), _react.default.createElement(ConnectIcons, {
      className: "twitterIcon",
      href: "https://twitter.com/traveltriangle",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.Twitter, null)), _react.default.createElement(ConnectIcons, {
      className: "pintrestIcon",
      href: "https://www.pinterest.com/traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.PinterestIcon, null)), _react.default.createElement(ConnectIcons, {
      className: "googleIcon",
      href: "https://plus.google.com/+traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.GoogleIconWhite, null)), _react.default.createElement(ConnectIcons, {
      className: "instaIcon",
      href: "https://www.instagram.com/traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.Instagram, null))));
  }

};
exports.default = SocialLinks;

/***/ }),

/***/ "./app/components/Form/FormLead/FormOneCTA.js":
/*!****************************************************!*\
  !*** ./app/components/Form/FormLead/FormOneCTA.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _formOneLead = __webpack_require__(/*! reducers/formOneLead */ "./app/reducers/formOneLead.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let FormOneCTA = (_temp = _class = class FormOneCTA extends _react.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      rtProps,
      tag,
      deals,
      budget
    } = this.props; // merge admin comments with the existing ones

    let adminComments = rtProps.adminComments || '';

    if (typeof window !== 'undefined') {
      adminComments = `${adminComments} #Form_filled_on ${window.location.href}`;
    }

    adminComments = ` ${adminComments} ${_segmentEvents.SEGMENT_ADMIN_COMMENT}`;

    const rtripProps = _objectSpread({}, rtProps, {
      adminComments
    });

    (0, _segmentEvents.setCookie)('to_loc', rtProps.to_loc);
    (0, _segmentEvents.setCookie)('trip_days', rtProps.trip_days);
    this.props.clickHandler(); // update the value on store

    this.props.updateFromOneProps(rtripProps); // change the url

    if (deals) {
      this.props.pushState(`/requested_trips/new?deals=true&tag=${tag}&budget=${budget}`);
    } else {
      this.props.pushState('/requested_trips/new');
    }
  }

  render() {
    return _react.default.createElement("button", {
      className: "wfull",
      onClick: this.handleClick
    }, this.props.children);
  }

}, _class.propTypes = {
  rtProps: _propTypes.default.object,
  updateFromOneProps: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  deals: _propTypes.default.bool,
  clickHandler: _propTypes.default.func,
  tag: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]),
  budget: _propTypes.default.string
}, _class.defaultProps = {
  rtProps: {},
  clickHandler: () => {},
  children: [],
  deals: false,
  tag: '',
  budget: ''
}, _temp);

var _default = (0, _reactRedux.connect)(null, {
  updateFromOneProps: _formOneLead.updateFromOneProps,
  pushState: _reactRouterRedux.push
})(FormOneCTA);

exports.default = _default;

/***/ }),

/***/ "./app/components/Itinerary/ItineraryTags.js":
/*!***************************************************!*\
  !*** ./app/components/Itinerary/ItineraryTags.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ItineraryTags = ({
  list,
  itineraryId,
  tagId
}) => {
  const categoryElements = list.map((value, key) => _react.default.createElement("li", {
    key: `category_${itineraryId}_${tagId}_${key}` // eslint-disable-line react/no-array-index-key
    ,
    className: "itinerary-tags-box-item"
  }, value));
  return _react.default.createElement("ul", {
    className: "list-style-no"
  }, categoryElements);
};

ItineraryTags.propTypes = {
  list: _propTypes.default.array,
  itineraryId: _propTypes.default.number.isRequired,
  tagId: _propTypes.default.number.isRequired
};
ItineraryTags.defaultProps = {
  list: []
};
var _default = ItineraryTags;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/StarRatings.js":
/*!**********************************************!*\
  !*** ./app/components/Review/StarRatings.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./StarRatings.scss */ "./app/components/Review/StarRatings.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-spread, react/no-array-index-key */
const StarRatings = ({
  rating,
  total,
  id
}) => {
  const r = parseInt(rating);
  const t = parseInt(total);
  const starIconElements = Array.apply(null, Array(r)).map((e, index) => _react.default.createElement("li", {
    key: `${id}_${index}`
  }, _react.default.createElement(_Icon.StarIcon, null)));
  const starIconEmptyElements = Array.apply(null, Array(t - r)).map((e, index) => _react.default.createElement("li", {
    key: `${id}_${rating + index}`
  }, _react.default.createElement(_Icon.StarIconEmpty, null)));
  return _react.default.createElement("ul", {
    className: "traveler-rating-star-list"
  }, starIconElements, starIconEmptyElements);
};

StarRatings.propTypes = {
  rating: _propTypes.default.number,
  total: _propTypes.default.number,
  id: _propTypes.default.string.isRequired
};
StarRatings.defaultProps = {
  rating: 4,
  total: 5
};
var _default = StarRatings;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/StarRatings.scss":
/*!************************************************!*\
  !*** ./app/components/Review/StarRatings.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"traveler-rating-star-list": "_kyB_G"
};

/***/ }),

/***/ "./app/helpers/exitIntent.js":
/*!***********************************!*\
  !*** ./app/helpers/exitIntent.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeExitIntent = exports.renderExitIntent = exports.showPopUp = exports.hidePopup = void 0;

var _FormDataFormatter = __webpack_require__(/*! ./FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _appConfig = _interopRequireWildcard(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const hidePopup = e => {
  if (e) {
    e.stopPropagation();
  }

  document.getElementById('bg-mask-ei').classList.remove('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.remove('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].addEventListener('click', showPopUp);
};

exports.hidePopup = hidePopup;

const showPopUp = () => {
  document.getElementById('bg-mask-ei').classList.add('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.add('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].removeEventListener('click', showPopUp);
};

exports.showPopUp = showPopUp;

const renderExitIntent = () => {
  if (window.ReactExitIntentImage) {
    ReactExitIntentImage.render({
      isPublicProduct: true
    });
    window.isLeadPopupOpened = false;
    setTimeout(function () {
      window.isLeadPopupOpened = false;
      const exitPopup = document.getElementsByClassName('mkt-mob-exit-intent')[0];

      if (exitPopup) {
        exitPopup.addEventListener('click', showPopUp);
      }

      const closeBtn = document.getElementsByClassName('close-popup')[0];

      if (closeBtn) {
        const closeMobBtn = closeBtn.cloneNode();
        closeMobBtn.innerHTML = "&#215;";
        closeMobBtn.classList.add('close-mob-btn');
        closeBtn.classList.add('hide');
        closeMobBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          hidePopup(e);
        });
        closeBtn.parentNode.insertBefore(closeMobBtn, closeBtn);
      }
    }, 1000);
  }
};

exports.renderExitIntent = renderExitIntent;

const initializeExitIntent = () => {
  const existing = document.getElementById('exit-intent-script-tag');

  if (existing && document.getElementById('reactExitIntentImage')) {
    renderExitIntent();
    return;
  }

  const el = document.createElement('script');
  el.id = 'exit-intent-script-tag';
  el.src = `${_appConfig.default.assets.js}/public-product/trips3m-imageintent-amp-vsegment-0.5.js`;
  el.defer = true;

  el.onload = () => {
    console.log('script loaded');

    if (typeof window !== 'undefined' && typeof window.Raven !== 'undefined' && _appConfig.sentryKey) {
      //todo: ignore errors for the chat connection
      window.Raven.config(_appConfig.sentryKey, {
        shouldSendCallback(data) {
          return !/MSIE/.test(window.navigator.userAgent);
        },

        ignoreErrors: ["Uncaught, unspecified error event."]
      }).install();
    }

    if (document.getElementById('reactExitIntentImage')) {
      renderExitIntent();
    }
  };

  document.body.appendChild(el);
};

exports.initializeExitIntent = initializeExitIntent;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZWFkZXIvSGVhZGVyVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRGVzdGluYXRpb25MaXN0aW5nL0Rlc3RpbmF0aW9uTGlzdGluZ0FzeW5jLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uTGlzdGluZy9EZXN0aW5hdGlvbkxpc3RpbmdDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uTGlzdGluZy9EZXN0aW5hdGlvbkxpc3RpbmdDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRGVzdGluYXRpb25MaXN0aW5nL0hlbHBNZUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRGVzdGluYXRpb25MaXN0aW5nL0hlbHBNZUNvbXBhcmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9EZXN0aW5hdGlvbkxpc3RpbmcvSGVscE1lUGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9EZXN0aW5hdGlvbkxpc3RpbmcvSGVscE1lUGxhbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uTGlzdGluZy9TZWVQYWNrYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvQWRkcmVzc1RULmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Db3B5UmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmtzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJMaW5rcy5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSXRpbmVyYXJ5L0l0aW5lcmFyeVRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUmV2aWV3L1N0YXJSYXRpbmdzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Jldmlldy9TdGFyUmF0aW5ncy5zY3NzIiwid2VicGFjazovLy8uL2FwcC9oZWxwZXJzL2V4aXRJbnRlbnQuanMiXSwibmFtZXMiOlsiVHJpcFR5cGVMaXN0Iiwic2VsZWN0aW9uTGlzdCIsInNlbGVjdGVkSXRlbSIsInRvZ2dsZVNlbGVjdGlvbiIsInRyYWNrQ2F0ZWdvcnlDbGljayIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwidXJsIiwiZSIsIm5hbWUiLCJldmVudCIsIkRFU1RJTkFUSU9OX0xJU1RfQ0xJQ0siLCJzZWN0aW9uIiwib2JqZWN0IiwiY3RhIiwiY2F0ZWdvcnkiLCJkZXN0aW5hdGlvbl9saXN0IiwiZGVzdGluYXRpb25faWQiLCJ2YWx1ZSIsIkRGRUFVTFRfVkFMVUUiLCJsYWJlbCIsInRhcmdldCIsInRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIkhlYWRlclRpdGxlIiwiQ29tcG9uZW50IiwiaGFuZGxlU2Nyb2xsIiwic2VsZWN0aW9uTGlzdFZpc2libGUiLCJwcm9wcyIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJkcm9wRG93blRpdGxlIiwidGl0bGUiLCJyZW5kZXJTdWJIZWFkaW5nIiwic2hvd1RpdGxlQXNIMSIsInBscEhlYWRpbmciLCJpc1JhdGluZ1NjaGVtYUVuYWJsZWQiLCJjb21wb25lbnREaWRNb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJnb0JhY2tTdGF0ZSIsInRyaXBUeXBlTGlzdFNob3duIiwiYmFja1VybCIsInNob3dTaGFyZSIsInNob3dCbGFja1NoYXJlIiwiaGVhZGluZyIsInN1YkhlYWRlciIsImJvb2wiLCJhbGwiLCJzdGF0ZSIsImRlc3RpbmF0aW9uTGlzdGluZyIsIndlZWtlbmREZXN0aW5hdGlvbiIsImRpc3BhdGNoIiwicGFyYW1zIiwiRGVzdGluYXRpb25MaXN0aW5nQXN5bmMiLCJjb25zdHJ1Y3RvciIsImdldERlc3RpbmF0aW9uQ2FyZHMiLCJkZXN0aW5hdGlvbkxpc3QiLCJyb3V0ZSIsInBhZ2VUeXBlIiwiZGVzdGluYXRpb25zVG9EaXNwbGF5IiwiZGVzdGluYXRpb25DYXJkcyIsInNsaWNlIiwiZGVzdGluYXRpb24iLCJpZCIsIm51bWJlck9mUGFja2FnZXMiLCJleGl0RGl2Iiwic2hvd1BvcFVwIiwibGVuZ3RoIiwiZ2V0U2VsZWN0ZWRJdGVtIiwiYmluZCIsIm9uRmlsdGVyc0FwcGx5IiwicGFyc2VSb3V0ZVBhcmFtcyIsImdldFRpdGxlIiwiZ2V0UGFnZUZ1bGxOYW1lIiwiZ2V0RGVzdGluYXRpb25MaXN0aW5nQ2Fub25pY2FsIiwiZ2V0RGVmYXVsdFNlbGVjdGVkSXRlbSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdWJzdHJpbmciLCJzcGxpdCIsImxpc3RPcGVuZWQiLCJ1cGRhdGVTZWxlY3RlZEl0ZW0iLCJxdWVyeSIsImlzX2ludGVybmF0aW9uYWwiLCJkZXN0aW5hdGlvbl90eXBlIiwiZmlsdGVyU2VsZWN0ZWQiLCJ3ZWVrZW5kRnJvbURlc3RpbmF0aW9uIiwibGlzdCIsInRyaXBUeXBlcyIsIndlZWtlbmRzIiwiZmlsdGVyIiwia2V5IiwiaW5jbHVkZXMiLCJodG1sVGFncyIsInRpdGxlVGFnIiwia2V5d29yZCIsInRvTG93ZXJDYXNlIiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwiaW5pdGlhbGl6ZUV4aXRJbnRlbnQiLCJpc0JhZFdlZWtlbmRGaWx0ZXIiLCJpbml0aWFsaXplV2Vla2VuZEZpbHRlciIsIkRFU1RJTkFUSU9OX0xJU1RfVklFV0VEIiwibnVtX2Rlc3RpbmF0aW9ucyIsInBhY2thZ2VfaWQiLCJmaWx0ZXJzIiwic2VsZWN0ZWRGaWx0ZXJzIiwicmVzZXREZWZhdWx0RmlsdGVycyIsInJlZHVjZSIsImZpbHRlcklkIiwic2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVycyIsIm9wdGlvbnMiLCJwYXJhbXNOYW1lIiwicmVzIiwib3B0aW9uSWQiLCJvcHRpb24iLCJwYXJzZUludCIsInB1c2giLCJqb2luIiwic29ydEJ5T3B0aW9uIiwic29ydEJ5Iiwic2VsZWN0ZWQiLCJzb3J0T3B0aW9uU3BsaXQiLCJzb3J0X2J5Iiwic29ydF9vcmRlciIsImZldGNoRGVzdGluYXRpb25MaXN0IiwidHJhY2tEZXN0aW5hdGlvblBhZ2UiLCJ0eXBlIiwidHJhY2tMZWFkRnVubmVsQ2xpY2siLCJmdW5uZWxTdGVwIiwiUEFDS0FHRV9MSVNUX0NMSUNLIiwibWV0YVRhZyIsIm9uU2Nyb2xsIiwic2VsZWN0ZWRGaWx0ZXJDb3VudCIsImxvYWRNb3JlRGVzdGluYXRpb25zIiwic2hhcGUiLCJhcnJheSIsIm51bWJlciIsInRyYWNrV2Vla2VuZENsaWNrZWQiLCJjb3VudCIsIkRlc3RpbmF0aW9uTGlzdGluZ0NhcmQiLCJudW1QYWNrYWdlcyIsInN0YXJ0UmFuZ2UiLCJEYXRlVXRpbHMiLCJudW1iZXJUb01vbnRoIiwiYmVzdFRpbWVUb1Zpc2l0IiwiZW5kUmFuZ2UiLCJtb250aHMiLCJkZXN0aW5hdGlvblVybCIsImNhbGxTZWdtZW50IiwidHJhY2tTZWdtZW50RXZlbnQiLCJERVNUSU5BVElPTl9DTElDSyIsIkRFU1RJTkFUSU9OX1ZJRVdFRCIsIldFRUtFTkRfQ0xJQ0siLCJ0cmFja0Rlc3RpbmF0aW9uQ2xpY2siLCJkZXRhaWxzIiwic2Vuc29yVmlzaWJpbGl0eSIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwidG9VcmxJbmZvIiwiaW1hZ2VQYXRoIiwiaW1hZ2VraXRVcmwiLCJidWRnZXQiLCJmbGlnaHRzSW5jbHVkZWQiLCJtaW5EYXlzIiwibWF4RGF5cyIsImFjdGl2aXR5TGFiZWxzIiwiYWN0IiwibnVtYmVyT2ZUcmF2ZWxlcnMiLCJudW1iZXJPZlJldmlld3MiLCJ1bmRlZmluZWQiLCJIZWxwTWVDb21wYXJlIiwiY3RhVGV4dCIsInRyYWNrQ2xpY2tFdmVudCIsIkhlbHBNZVBsYW4iLCJTZWVQYWNrYWdlcyIsInBhZ2VDYXRlZ29yeSIsImhhbmRsZUNsaWNrIiwidHJhY2tTZWdtZW50UGFja2FnZUxpc3RDbGlja2VkIiwiaW5kZXhPZiIsIkFkZHJlc3NUVCIsImlzSG9tZVBhZ2UiLCJGb290ZXJMaW5rcyIsIlNvY2lhbEljb25zQ29udGFpbmVyIiwiZ2xhbW9yb3VzIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJDb25uZWN0SWNvbnMiLCJhIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsInBvc2l0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiU29jaWFsTGlua3MiLCJGb3JtT25lQ1RBIiwicnRQcm9wcyIsInRhZyIsImRlYWxzIiwiYWRtaW5Db21tZW50cyIsImhyZWYiLCJTRUdNRU5UX0FETUlOX0NPTU1FTlQiLCJydHJpcFByb3BzIiwidG9fbG9jIiwidHJpcF9kYXlzIiwiY2xpY2tIYW5kbGVyIiwidXBkYXRlRnJvbU9uZVByb3BzIiwicHVzaFN0YXRlIiwiY2hpbGRyZW4iLCJvbmVPZlR5cGUiLCJJdGluZXJhcnlUYWdzIiwiaXRpbmVyYXJ5SWQiLCJ0YWdJZCIsImNhdGVnb3J5RWxlbWVudHMiLCJTdGFyUmF0aW5ncyIsInJhdGluZyIsInRvdGFsIiwiciIsInQiLCJzdGFySWNvbkVsZW1lbnRzIiwiQXJyYXkiLCJhcHBseSIsImluZGV4Iiwic3Rhckljb25FbXB0eUVsZW1lbnRzIiwiaGlkZVBvcHVwIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkIiwicmVuZGVyRXhpdEludGVudCIsIlJlYWN0RXhpdEludGVudEltYWdlIiwiaXNQdWJsaWNQcm9kdWN0IiwiaXNMZWFkUG9wdXBPcGVuZWQiLCJzZXRUaW1lb3V0IiwiZXhpdFBvcHVwIiwiY2xvc2VCdG4iLCJjbG9zZU1vYkJ0biIsImNsb25lTm9kZSIsImlubmVySFRNTCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImV4aXN0aW5nIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiY29uZmlnIiwiYXNzZXRzIiwianMiLCJkZWZlciIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSYXZlbiIsInNlbnRyeUtleSIsInNob3VsZFNlbmRDYWxsYmFjayIsImRhdGEiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaWdub3JlRXJyb3JzIiwiaW5zdGFsbCIsImJvZHkiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7QUFFTyxNQUFNQSxlQUFlLENBQUM7QUFDM0JDLGVBRDJCO0FBRTNCQyxjQUYyQjtBQUczQkMsaUJBSDJCO0FBSTNCQztBQUoyQixDQUFELEtBTTFCO0FBQUssYUFBVTtBQUFmLEdBQ0UseUNBQ0dDLE9BQU9DLElBQVAsQ0FBWUwsYUFBWixFQUEyQk0sR0FBM0IsQ0FBK0JDLFFBQzlCO0FBQUksT0FBS0E7QUFBVCxHQUFlLDZCQUFDLGlCQUFEO0FBQ2IsTUFBSVAsY0FBY08sSUFBZCxFQUFvQkMsR0FEWDtBQUViLGFBQVlQLGlCQUFpQk0sSUFBbEIsR0FBMEIsbUJBQTFCLEdBQWdELEVBRjlDO0FBR2IsV0FBVUUsQ0FBRCxJQUFPO0FBQ2RQOztBQUNBLFFBQUlGLGNBQWNPLElBQWQsRUFBb0JHLElBQXBCLEtBQTZCLEtBQWpDLEVBQXdD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QWQsS0FBd0IsV0FBekQsSUFDRkMsb0JBREYsRUFDYTtBQUNYO0FBQ0F6TyxhQUFPd08sS0FBUCxDQUFhUCxNQUFiLENBQW9CUSxvQkFBcEIsRUFBK0I7QUFDN0JDLDJCQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsaUJBQU8sQ0FBQyxPQUFPQyxJQUFQLENBQVk1TyxPQUFPNk8sU0FBUCxDQUFpQkMsU0FBN0IsQ0FBUjtBQUNELFNBSDRCOztBQUk3QkMsc0JBQWMsQ0FDWixvQ0FEWTtBQUplLE9BQS9CLEVBT0dDLE9BUEg7QUFRRDs7QUFDRCxRQUFJekssU0FBU29JLGNBQVQsQ0FBd0Isc0JBQXhCLENBQUosRUFBcUQ7QUFDbkRLO0FBQ0Q7QUFDRixHQWpCRDs7QUFrQkF6SSxXQUFTMEssSUFBVCxDQUFjQyxXQUFkLENBQTBCcEIsRUFBMUI7QUFDRCxDQTlCTSIsImZpbGUiOiJkZXN0aW5hdGlvbi1saXN0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdvQmFjaywgcHVzaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQge1xuICBnZXRTZWxlY3Rpb25MaXN0LFxuICBpc1NlbGVjdGlvbkxpc3RWaXNpYmxlXG59IGZyb20gJ3JlZHVjZXJzL2Rlc3RpbmF0aW9uTGlzdGluZy9kZXN0aW5hdGlvbnMnO1xuaW1wb3J0IHsgdG9nZ2xlU2VsZWN0aW9uTGlzdCB9IGZyb20gJ2FjdGlvbnMvZGVzdGluYXRpb25MaXN0aW5nJztcbmltcG9ydCB7IERFU1RJTkFUSU9OX0xJU1RfQ0xJQ0ssIERGRUFVTFRfVkFMVUUsIHRyYWNrU2VnbWVudCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB3aGF0c2FwcFVybCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBXaGl0ZVNoYXJlSWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IEJsYWNrU2hhcmVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgJy4vSGVhZGVyLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgVHJpcFR5cGVMaXN0ID0gKHtcbiAgc2VsZWN0aW9uTGlzdCxcbiAgc2VsZWN0ZWRJdGVtLFxuICB0b2dnbGVTZWxlY3Rpb24sXG4gIHRyYWNrQ2F0ZWdvcnlDbGljayxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBhYnNvbHV0ZSB3ZnVsbCBjYXRlZ29yeS1saXN0XCI+XG4gICAgPHVsPlxuICAgICAge09iamVjdC5rZXlzKHNlbGVjdGlvbkxpc3QpLm1hcChpdGVtID0+IChcbiAgICAgICAgPGxpIGtleT17aXRlbX0+PExpbmtcbiAgICAgICAgICB0bz17c2VsZWN0aW9uTGlzdFtpdGVtXS51cmx9XG4gICAgICAgICAgY2xhc3NOYW1lPXsoc2VsZWN0ZWRJdGVtID09PSBpdGVtKSA/ICdzZWxlY3RlZC1jYXRlZ29yeScgOiAnJ31cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lID09PSAnQWxsJykge1xuICAgICAgICAgICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBERVNUSU5BVElPTl9MSVNUX0NMSUNLLFxuICAgICAgICAgICAgICAgIHNlY3Rpb246ICdIZWFkZXIgU2VjdGlvbicsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiAnJyxcbiAgICAgICAgICAgICAgICBjdGE6IHNlbGVjdGlvbkxpc3RbaXRlbV0ubmFtZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogYERlc3RpbmF0aW9uIExpc3Q6ICR7c2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25fbGlzdDogc2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uX2lkOiBzZWxlY3Rpb25MaXN0W2l0ZW1dLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IERGRUFVTFRfVkFMVUUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGBEZXN0aW5hdGlvbiBUeXBlOiAke3NlbGVjdGlvbkxpc3RbaXRlbV0ubmFtZX1gXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJhY2tDYXRlZ29yeUNsaWNrKHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiAnVG9wIERyb3Bkb3duJyxcbiAgICAgICAgICAgICAgICBvYmplY3Q6ICcnLFxuICAgICAgICAgICAgICAgIGN0YTogZS50YXJnZXQudGV4dCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZS50YXJnZXQudGV4dFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3NlbGVjdGlvbkxpc3RbaXRlbV0ubmFtZX1cbiAgICAgICAgPC9MaW5rPjwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeC1sYXllci1zdWdnZXN0aW9uXCIgb25DbGljaz17dG9nZ2xlU2VsZWN0aW9ufS8+XG4gIDwvZGl2PlxuICApO1xuXG5UcmlwVHlwZUxpc3QucHJvcFR5cGVzID0ge1xuICBzZWxlY3Rpb25MaXN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0b2dnbGVTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyYWNrQ2F0ZWdvcnlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5UcmlwVHlwZUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja0NhdGVnb3J5Q2xpY2s6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyVGl0bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9nZ2xlU2VsZWN0aW9uLHNlbGVjdGlvbkxpc3RWaXNpYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmIChzY3JvbGxUb3AgPiAxMDAgJiYgc2VsZWN0aW9uTGlzdFZpc2libGUpIHtcbiAgICAgIHRvZ2dsZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBkcm9wRG93blRpdGxlID0gKHRpdGxlLCBjYXRlZ29yeSkgPT4ge1xuICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgaWYgKHRpdGxlID09PSAnQWxsJykge1xuICAgICAgICByZXR1cm4gJ1RvcCBQbGFjZXMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBUb3AgUGxhY2VzIC0gJHt0aXRsZX1gO1xuICAgIH1cbiAgICByZXR1cm4gYFdlZWtlbmQgR2V0YXdheXMgLSAke3RpdGxlfWA7XG4gIH07XG5cbiAgcmVuZGVyU3ViSGVhZGluZyA9IChzaG93VGl0bGVBc0gxLCBwbHBIZWFkaW5nLCB0aXRsZSwgaXNSYXRpbmdTY2hlbWFFbmFibGVkKSA9PiB7XG4gICAgaWYgKHBscEhlYWRpbmcpIHtcbiAgICAgIHJldHVybiA8aDIgY2xhc3NOYW1lPVwiZnc0IGZsZXhGdWxsXCI+e3BscEhlYWRpbmd9PC9oMj47XG4gICAgfSBlbHNlIGlmIChzaG93VGl0bGVBc0gxKSB7XG4gICAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cImZ3NCBmbGV4RnVsbFwiIHByb3BlcnR5PXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcIm5hbWVcIiA6IG51bGx9Pnt0aXRsZX08L2gxPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImZ3NCBmbGV4RnVsbFwiPnt0aXRsZX08L3A+O1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZ29CYWNrU3RhdGUsXG4gICAgICBzZWxlY3Rpb25MaXN0LFxuICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgdG9nZ2xlU2VsZWN0aW9uLFxuICAgICAgc2VsZWN0aW9uTGlzdFZpc2libGUsXG4gICAgICB0aXRsZSxcbiAgICAgIHRyaXBUeXBlTGlzdFNob3duLFxuICAgICAgdHJhY2tDYXRlZ29yeUNsaWNrLFxuICAgICAgY2F0ZWdvcnksIGJhY2tVcmwsXG4gICAgICBzaG93U2hhcmUsXG4gICAgICBzaG93QmxhY2tTaGFyZSxcbiAgICAgIGhlYWRpbmcsIHVybCxcbiAgICAgIHNob3dUaXRsZUFzSDEsXG4gICAgICBwbHBIZWFkaW5nLFxuICAgICAgaXNSYXRpbmdTY2hlbWFFbmFibGVkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc3ViSGVhZGVyID0gbnVsbDtcbiAgICBpZiAodHJpcFR5cGVMaXN0U2hvd24pIHtcbiAgICAgIHN1YkhlYWRlciA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZHJvcC1jYXRlZ29yeSBmbGV4RnVsbFwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlU2VsZWN0aW9ufT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzQgaWJsb2NrXCI+XG4gICAgICAgICAgICAgIHt0aGlzLmRyb3BEb3duVGl0bGUoc2VsZWN0aW9uTGlzdFtzZWxlY3RlZEl0ZW1dLm5hbWUsIGNhdGVnb3J5KX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3duLWFycm93LWRlc3RpbmF0aW9uXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHNlbGVjdGlvbkxpc3RWaXNpYmxlKSA/ICcnIDogJ2hpZGUnfT5cbiAgICAgICAgICAgIDxUcmlwVHlwZUxpc3RcbiAgICAgICAgICAgICAgc2VsZWN0aW9uTGlzdD17c2VsZWN0aW9uTGlzdH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XG4gICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbj17dG9nZ2xlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICB0cmFja0NhdGVnb3J5Q2xpY2s9e3RyYWNrQ2F0ZWdvcnlDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViSGVhZGVyID0gdGhpcy5yZW5kZXJTdWJIZWFkaW5nKHNob3dUaXRsZUFzSDEsIHBscEhlYWRpbmcsIHRpdGxlLCBpc1JhdGluZ1NjaGVtYUVuYWJsZWQpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxNiBzZmN3IGhlYWRlci10aXRsZS1wIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb0JhY2tTdGF0ZShiYWNrVXJsKX0gY2xhc3NOYW1lPVwiYmFjay1hcnJvd1wiPmdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgICB7c3ViSGVhZGVyfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dTaGFyZSA/XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXJlLWxvZ28tcmlnaHQgZnJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3doYXRzYXBwVXJsKGhlYWRpbmcsIHVybCl9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNob3dCbGFja1NoYXJlID8gIDxCbGFja1NoYXJlSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXIgd2Z1bGxcIi8+IDogIDxXaGl0ZVNoYXJlSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXIgd2Z1bGxcIiAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NwYW4+IDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlclRpdGxlLnByb3BUeXBlcyA9IHtcbiAgZ29CYWNrU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGlvbkxpc3Q6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlU2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0aW9uTGlzdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJpcFR5cGVMaXN0U2hvd246IFByb3BUeXBlcy5ib29sLFxuICB0cmFja0NhdGVnb3J5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmFja1VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd1NoYXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0JsYWNrU2hhcmU6IFByb3BUeXBlcy5ib29sLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dUaXRsZUFzSDE6IFByb3BUeXBlcy5ib29sLFxuICBwbHBIZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5IZWFkZXJUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGlvbkxpc3Q6IHsgYWxsOiB7IG5hbWU6ICdBbGwnLCB1cmw6ICcvQWxsLVBsYWNlcycgfSB9LFxuICBzZWxlY3RlZEl0ZW06ICdhbGwnLFxuICB0b2dnbGVTZWxlY3Rpb246ICgpID0+IHt9LFxuICBzZWxlY3Rpb25MaXN0VmlzaWJsZTogZmFsc2UsXG4gIHRpdGxlOiAnJyxcbiAgdHJpcFR5cGVMaXN0U2hvd246IGZhbHNlLFxuICB0cmFja0NhdGVnb3J5Q2xpY2s6ICgpID0+IHt9LFxuICBjYXRlZ29yeTogJycsXG4gIGJhY2tVcmw6ICcnLFxuICBzaG93U2hhcmU6IGZhbHNlLFxuICBzaG93QmxhY2tTaGFyZTogZmFsc2UsXG4gIGhlYWRpbmc6ICcnLFxuICB1cmw6ICcnLFxuICBzaG93VGl0bGVBc0gxOiB0cnVlLFxuICBwbHBIZWFkaW5nOiAnJyxcbiAgaXNSYXRpbmdTY2hlbWFFbmFibGVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHtcbiAgICAgIHNlbGVjdGlvbkxpc3Q6IGdldFNlbGVjdGlvbkxpc3Qoc3RhdGUpLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBzdGF0ZS5kZXN0aW5hdGlvbkxpc3RpbmcuZGVzdGluYXRpb25MaXN0aW5nLnNlbGVjdGVkSXRlbSxcbiAgICAgIHNlbGVjdGlvbkxpc3RWaXNpYmxlOiBpc1NlbGVjdGlvbkxpc3RWaXNpYmxlKHN0YXRlKSxcbiAgICAgIGNhdGVnb3J5OiBzdGF0ZS5kZXN0aW5hdGlvbkxpc3RpbmcuZGVzdGluYXRpb25MaXN0aW5nLmNhdGVnb3J5LFxuICAgICAgd2Vla2VuZERlc3RpbmF0aW9uOiBzdGF0ZS5kZXN0aW5hdGlvbkxpc3RpbmcuZGVzdGluYXRpb25MaXN0aW5nLndlZWtlbmREZXN0aW5hdGlvbixcbiAgICB9XG4gICksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgZ29CYWNrU3RhdGU6IChwYXJhbXMpID0+IHBhcmFtcyA/IGRpc3BhdGNoKHB1c2gocGFyYW1zKSkgOiBkaXNwYXRjaChnb0JhY2soKSksXG4gICAgdG9nZ2xlU2VsZWN0aW9uOiAoKSA9PiBkaXNwYXRjaCh0b2dnbGVTZWxlY3Rpb25MaXN0KCkpXG4gIH0pXG4pKEhlYWRlclRpdGxlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgU2Nyb2xsUGVyY2VudGFnZSB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wZXJjZW50YWdlJztcblxuaW1wb3J0IEhlYWRlckNvbW1vbiBmcm9tICdtb2R1bGVzL2hlYWRlci9IZWFkZXJDb21tb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJUaXRsZSB9IGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlclRpdGxlJztcbmltcG9ydCBMb2FkTW9yZVBhY2thZ2VzIGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9Mb2FkTW9yZVBhY2thZ2VzJztcbmltcG9ydCBEZXN0aW5hdGlvbkxpc3RpbmdDYXJkIGZyb20gJ2NvbXBvbmVudHMvRGVzdGluYXRpb25MaXN0aW5nL0Rlc3RpbmF0aW9uTGlzdGluZ0NhcmQnO1xuaW1wb3J0IFNlZVBhY2thZ2VzIGZyb20gJ2NvbXBvbmVudHMvRGVzdGluYXRpb25MaXN0aW5nL1NlZVBhY2thZ2VzJztcbmltcG9ydCBIZWxwTWVQbGFuIGZyb20gJ2NvbXBvbmVudHMvRGVzdGluYXRpb25MaXN0aW5nL0hlbHBNZVBsYW4nO1xuaW1wb3J0IEhlbHBNZUNvbXBhcmUgZnJvbSAnY29tcG9uZW50cy9EZXN0aW5hdGlvbkxpc3RpbmcvSGVscE1lQ29tcGFyZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgRml4ZWRNZW51IGZyb20gJ2NvbXBvbmVudHMvRml4ZWRNZW51L0ZpeGVkTWVudSc7XG5pbXBvcnQgU29ydEFuZEZpbHRlciBmcm9tICdjb250YWluZXJzL0xpc3RpbmcvRmlsdGVyVmlldy5qcyc7XG5pbXBvcnQge1xuICBvblNjcm9sbCxcbiAgdHJhY2tTZWdtZW50LFxuICBpbml0aWFsaXplU2Nyb2xsZXIsXG4gIERFU1RJTkFUSU9OX0xJU1RfVklFV0VELFxuICBERkVBVUxUX1ZBTFVFLCBQQUNLQUdFX0xJU1RfQ0xJQ0tcbn0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2FwcC9oZWxwZXJzL0Zvcm1EYXRhRm9ybWF0dGVyJztcbmltcG9ydCB7IHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUgfSBmcm9tICdhcHAvaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAsIGluaXRpYWxpemVFeGl0SW50ZW50LCBzaG93UG9wVXAgfSBmcm9tICdoZWxwZXJzL2V4aXRJbnRlbnQnO1xuXG5jbGFzcyBEZXN0aW5hdGlvbkxpc3RpbmdBc3luYyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5nZXRTZWxlY3RlZEl0ZW0gPSB0aGlzLmdldFNlbGVjdGVkSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25GaWx0ZXJzQXBwbHkgPSB0aGlzLm9uRmlsdGVyc0FwcGx5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYXJzZVJvdXRlUGFyYW1zID0gdGhpcy5wYXJzZVJvdXRlUGFyYW1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUaXRsZSA9IHRoaXMuZ2V0VGl0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhcnNlUm91dGVQYXJhbXMocHJvcHMpO1xuICAgIHRoaXMuZ2V0UGFnZUZ1bGxOYW1lID0gdGhpcy5nZXRQYWdlRnVsbE5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldERlc3RpbmF0aW9uTGlzdGluZ0Nhbm9uaWNhbCA9IHRoaXMuZ2V0RGVzdGluYXRpb25MaXN0aW5nQ2Fub25pY2FsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXREZWZhdWx0U2VsZWN0ZWRJdGVtID0gdGhpcy5nZXREZWZhdWx0U2VsZWN0ZWRJdGVtLmJpbmQodGhpcyk7XG4gICAgc2V0Q29va2llKCdjYl9kdCcsICcnKTtcbiAgfVxuXG4gIHBhcnNlUm91dGVQYXJhbXMocHJvcHMpIHtcbiAgICAvLyBwYXJzZSB3ZWVrZW5kRGVzdGluYXRpb24gYW5kIGNhdGVnb3J5IGZyb20gdXJsXG4gICAgbGV0IGNhdGVnb3J5O1xuICAgIGxldCB3ZWVrZW5kRGVzdGluYXRpb247XG4gICAgaWYgKHByb3BzLnJvdXRlLnBhZ2VUeXBlID09PSAnd2Vla2VuZCcpIHtcbiAgICAgIHdlZWtlbmREZXN0aW5hdGlvbiA9IHByb3BzLnBhcmFtcy5kZXN0aW5hdGlvbjtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnJvdXRlLnBhZ2VUeXBlID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICBjYXRlZ29yeSA9IHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKS5zcGxpdCgnLScpWzBdO1xuICAgIH1cbiAgICBwcm9wcy5saXN0T3BlbmVkKGNhdGVnb3J5LCB3ZWVrZW5kRGVzdGluYXRpb24pO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXRlZ29yeVxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlU2VsZWN0ZWRJdGVtKHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKGNhdGVnb3J5LCB3ZWVrZW5kRGVzdGluYXRpb24sIHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSk7XG4gICAgLy8gcGFyc2UgaXNfaW50ZXJuYXRpb25hbCBwYXJhbVxuICAgIGlmIChwcm9wcy5sb2NhdGlvbi5xdWVyeS5pc19pbnRlcm5hdGlvbmFsKSB7XG4gICAgICBpZiAocHJvcHMubG9jYXRpb24ucXVlcnkuaXNfaW50ZXJuYXRpb25hbCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHRoaXMucGFyYW1zID0geyBkZXN0aW5hdGlvbl90eXBlOiAnaW50ZXJuYXRpb25hbCcgfTtcbiAgICAgICAgcHJvcHMuZmlsdGVyU2VsZWN0ZWQoMzYsIHsgMjogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyYW1zID0geyBkZXN0aW5hdGlvbl90eXBlOiAnZG9tZXN0aWMnIH07XG4gICAgICAgIHByb3BzLmZpbHRlclNlbGVjdGVkKDM2LCB7IDE6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLmZpbHRlclNlbGVjdGVkKDM2LCB7IDE6IHRydWUsIDI6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVzdGluYXRpb25MaXN0aW5nQ2Fub25pY2FsKCkge1xuICAgIGxldCB1cmwgPSAnJztcbiAgICBjb25zdCB7IHJvdXRlLCBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocm91dGUgJiYgbG9jYXRpb24gJiYgcm91dGUucGFnZVR5cGUgPT09ICdjYXRlZ29yeScpIHtcbiAgICAgIHVybCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSBpZiAocm91dGUgJiYgcm91dGUucGFnZVR5cGUgPT09ICd3ZWVrZW5kJykge1xuICAgICAgdXJsID0gYC9wbGFjZS1uZWFyLyR7dGhpcy5wcm9wcy53ZWVrZW5kRnJvbURlc3RpbmF0aW9ufWA7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBnZXRTZWxlY3RlZEl0ZW0oY2F0ZWdvcnksIHdlZWtlbmREZXN0aW5hdGlvbiwgdXJsID0gJycpIHtcbiAgICBsZXQgbGlzdCA9IHRoaXMucHJvcHMuc2VsZWN0aW9uTGlzdC50cmlwVHlwZXM7XG4gICAgaWYgKHdlZWtlbmREZXN0aW5hdGlvbikge1xuICAgICAgbGlzdCA9IHRoaXMucHJvcHMuc2VsZWN0aW9uTGlzdC53ZWVrZW5kcztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxpc3QpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICBpZiAodXJsLmluY2x1ZGVzKGxpc3Rba2V5XS51cmwpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pWzBdIHx8IHRoaXMuZ2V0RGVmYXVsdFNlbGVjdGVkSXRlbSh3ZWVrZW5kRGVzdGluYXRpb24sIGxpc3QpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFNlbGVjdGVkSXRlbSh3ZWVrZW5kRGVzdGluYXRpb24sIGxpc3QpIHtcbiAgICBpZiAod2Vla2VuZERlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm4gbGlzdFt0aGlzLnByb3BzLndlZWtlbmRGcm9tRGVzdGluYXRpb25dID8gdGhpcy5wcm9wcy53ZWVrZW5kRnJvbURlc3RpbmF0aW9uIDogT2JqZWN0LmtleXMobGlzdClbMF07XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhsaXN0KVswXTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHsgaHRtbFRhZ3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGl0bGVUYWcgPSBodG1sVGFncyA/IGh0bWxUYWdzLmZpbHRlcihlID0+IGUua2V5d29yZC50b0xvd2VyQ2FzZSgpID09PSAndGl0bGUnKSA6IFtdO1xuICAgIHJldHVybiB0aXRsZVRhZ1swXSA/IHRpdGxlVGFnWzBdLnZhbHVlIDogJ1RyYXZlbCBUcmlhbmdsZSc7XG4gIH1cblxuICBnZXRQYWdlRnVsbE5hbWUoKSB7XG4gICAgbGV0IGNhdGVnb3J5O1xuICAgIGxldCB3ZWVrZW5kRGVzdGluYXRpb247XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGUucGFnZVR5cGUgPT09ICdjYXRlZ29yeScpIHtcbiAgICAgIGNhdGVnb3J5ID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoMSkuc3BsaXQoJy0nKVswXTtcbiAgICAgIHJldHVybiBgQ2F0ZWdvcnkgUGFnZS8ke2NhdGVnb3J5fWA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJvdXRlLnBhZ2VUeXBlID09PSAnd2Vla2VuZCcpIHtcbiAgICAgIHdlZWtlbmREZXN0aW5hdGlvbiA9IHRoaXMucHJvcHMucGFyYW1zLmRlc3RpbmF0aW9uO1xuICAgICAgcmV0dXJuIGBXZWVrZW5kIExpc3QgUGFnZS9OZWFyLSR7d2Vla2VuZERlc3RpbmF0aW9ufWA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgPyBpbml0aWFsaXplRXhpdEludGVudCgpIDpcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdGlhbGl6ZUV4aXRJbnRlbnQpO1xuICAgIGluaXRpYWxpemVTY3JvbGxlcigpO1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlLnBhZ2VUeXBlID09PSAnd2Vla2VuZCcgJiYgdGhpcy5wcm9wcy5pc0JhZFdlZWtlbmRGaWx0ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZVdlZWtlbmRGaWx0ZXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGUucGFnZVR5cGUgPT09ICdjYXRlZ29yeScpIHtcbiAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50OiBERVNUSU5BVElPTl9MSVNUX1ZJRVdFRCxcbiAgICAgICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbiBMaXN0OiR7dGhpcy5wcm9wcy5jYXRlZ29yeSB8fCAnQWxsJ31gLFxuICAgICAgICBkZXN0aW5hdGlvbl9saXN0OiAnJyxcbiAgICAgICAgZGVzdGluYXRpb25faWQ6ICcnLFxuICAgICAgICBudW1fZGVzdGluYXRpb25zOiAwLFxuICAgICAgICBwYWNrYWdlX2lkOiAwLFxuICAgICAgICB2YWx1ZTogREZFQVVMVF9WQUxVRVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0Q29va2llKCdjYl9kdCcsIHRoaXMucHJvcHMud2Vla2VuZERlc3RpbmF0aW9uKTtcbiAgICBzZXRWaXNpdGVkRGVzdGluYXRpb25zQ29va2llKHRoaXMucHJvcHMud2Vla2VuZERlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIG9uRmlsdGVyc0FwcGx5KCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLnByb3BzLmZpbHRlcnM7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJzID0gdGhpcy5wcm9wcy5zZWxlY3RlZEZpbHRlcnM7XG5cbiAgICB0aGlzLnByb3BzLnJlc2V0RGVmYXVsdEZpbHRlcnModHJ1ZSk7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoc2VsZWN0ZWRGaWx0ZXJzKS5yZWR1Y2UoKHF1ZXJ5LCBmaWx0ZXJJZCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzKCcnLCBmaWx0ZXJJZCwgc2VsZWN0ZWRGaWx0ZXJzW2ZpbHRlcklkXSwgdHJ1ZSk7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJzW2ZpbHRlcklkXTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBmaWx0ZXIub3B0aW9ucztcbiAgICAgIC8vIGZvciBzZWxlY3Rpb24gb3B0aW9ucywgZ2V0IHRoZSB2YWx1ZSBmb3IgdGhhdCBvcHRpb25cbiAgICAgIHF1ZXJ5W2ZpbHRlci5wYXJhbXNOYW1lXSA9XG4gICAgICBPYmplY3Qua2V5cyhzZWxlY3RlZEZpbHRlcnNbZmlsdGVySWRdKS5yZWR1Y2UoKHJlcywgb3B0aW9uSWQpID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsdGVyc1tmaWx0ZXJJZF1bb3B0aW9uSWRdKSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBvcHRpb25cbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zLmZpbHRlcihvcHRpb24gPT4gKG9wdGlvbi5pZCA9PSBwYXJzZUludChvcHRpb25JZCwgMTApKSlbMF07XG4gICAgICAgICAgcmVzLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSwgW10pLmpvaW4oJywnKTtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9LCB7fSk7XG5cbiAgICAvLyBnZXQgc29ydCBieVxuICAgIGNvbnN0IHNvcnRCeU9wdGlvbiA9IHRoaXMucHJvcHMuc29ydEJ5LnNlbGVjdGVkO1xuICAgIGlmIChzb3J0QnlPcHRpb24pIHtcbiAgICAgIGNvbnN0IHNvcnRPcHRpb25TcGxpdCA9IHNvcnRCeU9wdGlvbi5zcGxpdCgnXycpO1xuICAgICAgcGFyYW1zLnNvcnRfYnkgPSBzb3J0T3B0aW9uU3BsaXRbMF07XG4gICAgICBwYXJhbXMuc29ydF9vcmRlciA9IHNvcnRPcHRpb25TcGxpdFsxXTtcbiAgICB9XG4gICAgLy8gZGlzcGF0Y2ggdGhlIGFjdGlvblxuICAgIHRoaXMucHJvcHMuZmV0Y2hEZXN0aW5hdGlvbkxpc3QocGFyYW1zKTtcbiAgfVxuXG4gIGdldERlc3RpbmF0aW9uQ2FyZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB3ZWVrZW5kRGVzdGluYXRpb24sIGRlc3RpbmF0aW9uTGlzdCwgcm91dGU6IHsgcGFnZVR5cGUgfSwgZGVzdGluYXRpb25zVG9EaXNwbGF5LCBjYXRlZ29yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXN0aW5hdGlvbkNhcmRzID0gZGVzdGluYXRpb25MaXN0LnNsaWNlKDAsIGRlc3RpbmF0aW9uc1RvRGlzcGxheSAtIDEpLm1hcCgoZGVzdGluYXRpb24pID0+IChcbiAgICAgIDxEZXN0aW5hdGlvbkxpc3RpbmdDYXJkXG4gICAgICAgIGtleT17ZGVzdGluYXRpb24uaWR9XG4gICAgICAgIGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn1cbiAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICB3ZWVrZW5kRGVzdGluYXRpb249e3dlZWtlbmREZXN0aW5hdGlvbn1cbiAgICAgICAgcGFnZVR5cGU9e3BhZ2VUeXBlfVxuICAgICAgICBudW1QYWNrYWdlcz17ZGVzdGluYXRpb24ubnVtYmVyT2ZQYWNrYWdlc31cbiAgICAgIC8+XG4gICAgKSk7XG4gICAgY29uc3QgZXhpdERpdiA9IDxkaXYgaWQ9XCJyZWFjdEV4aXRJbnRlbnRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWt0LW1vYi1leGl0LWludGVudCBtYjggcm93IHJvdy0gbWI4IHJlbGF0aXZlXCIgb25DbGljaz17c2hvd1BvcFVwfSAvPjtcbiAgICBpZiAoZGVzdGluYXRpb25DYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzbGljZSBmdW5jdGlvbiB3b24ndCBicmVhayBldmVuIGlmIHRoZSBnaXZlbiBpbmRpY2VzIGFyZSBvdXQgb2YgcmFuZ2UuIEl0IHdpbGwgcmV0dXJuIGFuIGVtcHR5IGFycmF5LlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZGVzdGluYXRpb25DYXJkcy5zbGljZSgwLCAyKSxcbiAgICAgICAgZXhpdERpdixcbiAgICAgICAgLi4uZGVzdGluYXRpb25DYXJkcy5zbGljZSgyKSxcbiAgICAgIF07XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0cmFja0Rlc3RpbmF0aW9uUGFnZSA9ICh0eXBlLCBjdGEsIHNlY3Rpb24pID0+IHtcbiAgICAgIGlmICh0eXBlID09PSAnbGVhZF9mdW5uZWwnKSB7XG4gICAgICAgIHRoaXMucHJvcHMudHJhY2tMZWFkRnVubmVsQ2xpY2soe1xuICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgZnVubmVsU3RlcDogMSxcbiAgICAgICAgICBvYmplY3Q6IGBDYXRlZ29yeS8ke3RoaXMucHJvcHMuY2F0ZWdvcnl9YCxcbiAgICAgICAgICBjdGEsXG4gICAgICAgICAgY2F0ZWdvcnk6IGBDYXRlZ29yeS8ke3RoaXMucHJvcHMuY2F0ZWdvcnl9YFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3BhY2thZ2VfbGlzdF9jbGljaycpIHtcbiAgICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgICBldmVudDogUEFDS0FHRV9MSVNUX0NMSUNLLFxuICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24sXG4gICAgICAgICAgY2F0ZWdvcnk6ICdEZXN0aW5hdGlvbjpVbmtub3duJyxcbiAgICAgICAgICBjdGE6IGN0YSxcbiAgICAgICAgICBvYmplY3Q6ICdDYXRlZ29yeS9Ub3VyJyxcbiAgICAgICAgICBsYWJlbDogJ1BhY2thZ2UgVHlwZTogVG91cicsXG4gICAgICAgICAgZGVzdGluYXRpb25fbGlzdDogJycsXG4gICAgICAgICAgZGVzdGluYXRpb25faWQ6ICcnLFxuICAgICAgICAgIHZhbHVlOiBERkVBVUxUX1ZBTFVFXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IGNhdGVnb3J5LCBodG1sVGFncyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0nPlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT57dGhpcy5nZXRUaXRsZSgpfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PXt0aGlzLmdldFBhZ2VGdWxsTmFtZSgpfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyZWZlcnJlclwiIGNvbnRlbnQ9XCJ1bnNhZmUtdXJsXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXt0aGlzLmdldERlc3RpbmF0aW9uTGlzdGluZ0Nhbm9uaWNhbCgpfSAvPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGh0bWxUYWdzICYmIGh0bWxUYWdzLm1hcChtZXRhVGFnID0+IHtcbiAgICAgICAgICAgICAgaWYgKG1ldGFUYWcua2V5d29yZC50b0xvd2VyQ2FzZSgpICE9PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxtZXRhIG5hbWU9e21ldGFUYWcua2V5d29yZH0gY29udGVudD17bWV0YVRhZy52YWx1ZX0ga2V5PXttZXRhVGFnLmtleXdvcmR9IC8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxTY3JvbGxQZXJjZW50YWdlIG9uQ2hhbmdlPXtvblNjcm9sbH0+XG4gICAgICAgICAgPGRpdiBpZD1cImJnLW1hc2stZWlcIiBjbGFzc05hbWU9XCJiZy1tYXNrLWVpXCIgb25DbGljaz17ZSA9PiBoaWRlUG9wdXAoZSl9IC8+XG4gICAgICAgICAgPEhlYWRlckNvbW1vbiAvPlxuICAgICAgICAgIDxIZWFkZXJUaXRsZVxuICAgICAgICAgICAgdHJpcFR5cGVMaXN0U2hvd25cbiAgICAgICAgICAgIHRyYWNrQ2F0ZWdvcnlDbGljaz17dGhpcy5wcm9wcy50cmFja0NhdGVnb3J5Q2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U29ydEFuZEZpbHRlclxuICAgICAgICAgICAgZmlsdGVycz17dGhpcy5wcm9wcy5maWx0ZXJzfVxuICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzPXt0aGlzLnByb3BzLnNlbGVjdGVkRmlsdGVyc31cbiAgICAgICAgICAgIHNvcnRCeT17dGhpcy5wcm9wcy5zb3J0Qnl9XG4gICAgICAgICAgICBmaWx0ZXJzQXBwbGllZD17dGhpcy5vbkZpbHRlcnNBcHBseX1cbiAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJDb3VudD17dGhpcy5wcm9wcy5zZWxlY3RlZEZpbHRlckNvdW50fVxuICAgICAgICAgICAgaXNDYXRlZ29yeVBhZ2U9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0gcHQ4IHNiYzUnPlxuICAgICAgICAgICAge3RoaXMuZ2V0RGVzdGluYXRpb25DYXJkcygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBzYmM1IHA4IHB0MCc+XG4gICAgICAgICAgICA8TG9hZE1vcmVQYWNrYWdlc1xuICAgICAgICAgICAgICBwYWNrYWdlc1JlbWFpbmluZz17dGhpcy5wcm9wcy5kZXN0aW5hdGlvbkxpc3QubGVuZ3RoIC0gdGhpcy5wcm9wcy5kZXN0aW5hdGlvbnNUb0Rpc3BsYXl9XG4gICAgICAgICAgICAgIGxvYWRNb3JlUGFja2FnZXM9e3RoaXMucHJvcHMubG9hZE1vcmVEZXN0aW5hdGlvbnN9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXsxfVxuICAgICAgICAgICAgICB0aXRsZT1cIkRlc3RpbmF0aW9ucyByZW1haW5pbmdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0gcGw4IHByOCBwYjggc2JjNSc+XG4gICAgICAgICAgICA8SGVscE1lUGxhbiB0cmFja0xlYWRGdW5uZWxDbGljaz17dHJhY2tEZXN0aW5hdGlvblBhZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHBsOCBwcjggcGI4IHNiYzUnPlxuICAgICAgICAgICAgPEhlbHBNZUNvbXBhcmUgdHJhY2tMZWFkRnVubmVsQ2xpY2s9e3RyYWNrRGVzdGluYXRpb25QYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBwYjggc2JjNSc+XG4gICAgICAgICAgICA8U2VlUGFja2FnZXMgdHJhY2tTZWdtZW50UGFja2FnZUxpc3RDbGlja2VkPXt0cmFja0Rlc3RpbmF0aW9uUGFnZX0gY2F0ZWdvcnk9e2NhdGVnb3J5fSBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0gcGI4IHB0MCBwbDggcHI4IHNiYzUnPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGaXhlZE1lbnUgLz5cbiAgICAgICAgPC9TY3JvbGxQZXJjZW50YWdlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5EZXN0aW5hdGlvbkxpc3RpbmdBc3luYy5wcm9wVHlwZXMgPSB7XG4gIHJvdXRlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2VUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbGlzdE9wZW5lZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVzdGluYXRpb25MaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZmV0Y2hEZXN0aW5hdGlvbkxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc29ydEJ5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkRmlsdGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkZXN0aW5hdGlvbnNUb0Rpc3BsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxvYWRNb3JlRGVzdGluYXRpb25zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFja0xlYWRGdW5uZWxDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhY2tXZWVrZW5kQ2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgd2Vla2VuZEZyb21EZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbml0aWFsaXplV2Vla2VuZEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhY2tDYXRlZ29yeUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0JhZFdlZWtlbmRGaWx0ZXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGlvbkxpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHdlZWtlbmREZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWRGaWx0ZXJDb3VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaHRtbFRhZ3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZXNldERlZmF1bHRGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuRGVzdGluYXRpb25MaXN0aW5nQXN5bmMuZGVmYXVsdFByb3BzID0ge1xuICBwYXJhbXM6IHtcbiAgICBkZXN0aW5hdGlvbjogJydcbiAgfSxcbiAgY291bnQ6IDQ5LFxuICBkZXN0aW5hdGlvbnNUb0Rpc3BsYXk6IDEwLFxuICBpbml0aWFsaXplV2Vla2VuZEZpbHRlcjogKCkgPT4ge30sXG4gIGlzQmFkV2Vla2VuZEZpbHRlcjogZmFsc2UsXG4gIGNhdGVnb3J5OiAnJyxcbiAgd2Vla2VuZERlc3RpbmF0aW9uOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb25MaXN0aW5nQXN5bmM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCBJdGluZXJhcnlUYWdzIGZyb20gJy4uL0l0aW5lcmFyeS9JdGluZXJhcnlUYWdzJztcbmltcG9ydCAnLi9EZXN0aW5hdGlvbkxpc3RpbmdDYXJkLnNjc3MnO1xuaW1wb3J0ICogYXMgRGF0ZVV0aWxzIGZyb20gJy4uLy4uL2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IHsgVmFjdGlvbkljb24sIFRlc3RpbW9uYWlsc0ljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBkZXN0aW5hdGlvbkRldGFpbFBhdGgsIHBhY2thZ2VMaXN0aW5nUGF0aCwgZGVzdGluYXRpb25UZXN0aW1vbmlhbFBhdGggfSBmcm9tICcuLi8uLi9oZWxwZXJzL3VybEhlbHBlcnMnO1xuaW1wb3J0IHsgbnVtYmVyV2l0aENvbW1hcyB9IGZyb20gJy4uLy4uL3V0aWxzL3BhcnNlcnMnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50LCBQQUNLQUdFX0xJU1RfQ0xJQ0ssIERFU1RJTkFUSU9OX0NMSUNLLCBXRUVLRU5EX0NMSUNLLFxuICBERkVBVUxUX1ZBTFVFLCBERVNUSU5BVElPTl9WSUVXRUQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5cbmNvbnN0IERlc3RpbmF0aW9uTGlzdGluZ0NhcmQgPSAoeyBkZXN0aW5hdGlvbiwgY2F0ZWdvcnksIHBhZ2VUeXBlLCBudW1QYWNrYWdlcyB9KSA9PiB7XG4gIGNvbnN0IHN0YXJ0UmFuZ2UgPSBEYXRlVXRpbHMubnVtYmVyVG9Nb250aChkZXN0aW5hdGlvbi5iZXN0VGltZVRvVmlzaXRbMF0gLSAxKTtcbiAgY29uc3QgZW5kUmFuZ2UgPSBEYXRlVXRpbHMubnVtYmVyVG9Nb250aChkZXN0aW5hdGlvbi5iZXN0VGltZVRvVmlzaXRbMV0gLSAxKTtcbiAgY29uc3QgbW9udGhzID0gYCR7c3RhcnRSYW5nZX0tJHtlbmRSYW5nZX1gO1xuXG4gIGNvbnN0IGRlc3RpbmF0aW9uVXJsID0gKCkgPT4ge1xuICAgIGlmIChkZXN0aW5hdGlvbi5udW1iZXJPZlBhY2thZ2VzICYmIGNhdGVnb3J5KSB7XG4gICAgICBpZiAoY2F0ZWdvcnkgPT09ICdIb25leW1vb24nIHx8IGNhdGVnb3J5ID09PSAnRmFtaWx5JyB8fCBjYXRlZ29yeSA9PT0gJ0ZyaWVuZHMnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXJsOiBwYWNrYWdlTGlzdGluZ1BhdGgoY2F0ZWdvcnksIGRlc3RpbmF0aW9uLm5hbWUpLFxuICAgICAgICAgIHRhcmdldDogJ19zZWxmJ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHBhY2thZ2VMaXN0aW5nUGF0aCgndG91cicsIGRlc3RpbmF0aW9uLm5hbWUpLFxuICAgICAgICB0YXJnZXQ6ICdfc2VsZidcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogZGVzdGluYXRpb25EZXRhaWxQYXRoKGRlc3RpbmF0aW9uLmlkLCBkZXN0aW5hdGlvbi5uYW1lKSxcbiAgICAgIHRhcmdldDogJ19ibGFuaydcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNhbGxTZWdtZW50ID0gKHR5cGUpID0+IHtcbiAgICBsZXQgc2VjdGlvbiA9ICcnO1xuICAgIGxldCBldmVudCA9ICcnO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gYERlc3RpbmF0aW9uOiR7ZGVzdGluYXRpb24ubmFtZX1gO1xuICAgIGNvbnN0IG9iamVjdCA9IGBEZXN0aW5hdGlvbi8ke2Rlc3RpbmF0aW9uLmlkfWA7XG4gICAgY29uc3QgY3RhID0gJyc7XG4gICAgY29uc3QgZGVzdGluYXRpb25faWQgPSBkZXN0aW5hdGlvbi5pZDtcbiAgICBjb25zdCBkZXN0aW5hdGlvbl9saXN0ID0gZGVzdGluYXRpb24ubmFtZTtcbiAgICBjb25zdCBsYWJlbCA9IGBQYWNrYWdlIFR5cGU6ICR7Y2F0ZWdvcnl9YDtcbiAgICBjb25zdCB2YWx1ZSA9IERGRUFVTFRfVkFMVUU7XG4gICAgaWYgKHR5cGUgPT09ICdjYXRlZ29yeScpIHtcbiAgICAgIHNlY3Rpb24gPSAnRGVzdGluYXRpb24gTGlzdC9NYWluJztcbiAgICAgIGV2ZW50ID0gUEFDS0FHRV9MSVNUX0NMSUNLO1xuICAgICAgdHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHNlY3Rpb24sXG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgY3RhLFxuICAgICAgICBkZXN0aW5hdGlvbl9pZCxcbiAgICAgICAgZGVzdGluYXRpb25fbGlzdCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZXN0aW5hdGlvbicpIHtcbiAgICAgIHNlY3Rpb24gPSAnRGVzdGluYXRpb24gTGlzdC9NYWluJztcbiAgICAgIGV2ZW50ID0gREVTVElOQVRJT05fQ0xJQ0s7XG4gICAgICB0cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgc2VjdGlvbixcbiAgICAgICAgb2JqZWN0LFxuICAgICAgICBjdGEsXG4gICAgICAgIGRlc3RpbmF0aW9uX2lkLFxuICAgICAgICBkZXN0aW5hdGlvbl9saXN0LFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gREVTVElOQVRJT05fVklFV0VEKSB7XG4gICAgICBzZWN0aW9uID0gJ0Rlc3RpbmF0aW9uIExpc3QvTWFpbic7XG4gICAgICBldmVudCA9IERFU1RJTkFUSU9OX1ZJRVdFRDtcbiAgICAgIHRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBvYmplY3QsXG4gICAgICAgIGN0YSxcbiAgICAgICAgZGVzdGluYXRpb25faWQsXG4gICAgICAgIGRlc3RpbmF0aW9uX2xpc3QsXG4gICAgICAgIGxhYmVsLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb24gPSAnV2Vla2VuZCBMaXN0L01haW4nO1xuICAgICAgZXZlbnQgPSBXRUVLRU5EX0NMSUNLO1xuICAgICAgdHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHNlY3Rpb24sXG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgY3RhLFxuICAgICAgICBkZXN0aW5hdGlvbl9pZCxcbiAgICAgICAgZGVzdGluYXRpb25fbGlzdCxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHJhY2tEZXN0aW5hdGlvbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChudW1QYWNrYWdlcyA+IDApIHtcbiAgICAgIGNhbGxTZWdtZW50KCdjYXRlZ29yeScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFnZVR5cGUgPT09ICd3ZWVrZW5kJykge1xuICAgICAgICBjYWxsU2VnbWVudCgnV2Vla2VuZCBDbGlja2VkJyk7XG4gICAgICB9XG4gICAgICBjYWxsU2VnbWVudCgnZGVzdGluYXRpb24nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgdHJhY2tTZWdtZW50RXZlbnQgPSAoZGV0YWlscykgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudCA6IGRldGFpbHMuZXZlbnQsXG4gICAgICBjYXRlZ29yeSA6IGRldGFpbHMuY2F0ZWdvcnksXG4gICAgICBzZWN0aW9uIDogZGV0YWlscy5zZWN0aW9uLFxuICAgICAgb2JqZWN0IDogZGV0YWlscy5vYmplY3QsXG4gICAgICBjdGEgOiBkZXRhaWxzLmN0YSxcbiAgICAgIGRlc3RpbmF0aW9uX2xpc3QgOiBkZXRhaWxzLmRlc3RpbmF0aW9uX2xpc3QsXG4gICAgICBkZXN0aW5hdGlvbl9pZCA6IGRldGFpbHMuZGVzdGluYXRpb25fbGlzdCxcbiAgICAgIGxhYmVsIDogZGV0YWlscy5sYWJlbCxcbiAgICAgIHZhbHVlIDogZGV0YWlscy52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGxldCBzZW5zb3JWaXNpYmlsaXR5ID0gZmFsc2U7XG4gIGNvbnN0IG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSkgPT4ge1xuICAgIGlmICghc2Vuc29yVmlzaWJpbGl0eSAmJiBpc1Zpc2libGUpIHtcbiAgICAgIHNlbnNvclZpc2liaWxpdHkgPSBpc1Zpc2libGU7XG4gICAgICBjYWxsU2VnbWVudChERVNUSU5BVElPTl9WSUVXRUQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b1VybEluZm8gPSBkZXN0aW5hdGlvblVybCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHNiYzUgcGw4IHByOCc+XG4gICAgICA8TGluayBvbkNsaWNrPXt0cmFja0Rlc3RpbmF0aW9uQ2xpY2t9IHRvPXt0b1VybEluZm8udXJsfSB0YXJnZXQ9e3RvVXJsSW5mby50YXJnZXR9IGNsYXNzTmFtZT0ncGZjMyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBwMCByZWxhdGl2ZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBwMCBpbWFnZS1jb250YWluZXItc3BhbicgPlxuICAgICAgICAgICAgPEltZyB3aWR0aD17Mzk1fSBoZWlnaHQ9ezEyMH1cbiAgICAgICAgICAgICAgICAgc3JjPXtkZXN0aW5hdGlvbi5pbWFnZVBhdGh9IGlrU3JjPXtkZXN0aW5hdGlvbi5pbWFnZWtpdFVybH0gYWx0PVwiZGVzdGluYXRpb25cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZnVsbCBwMCBhYnNvbHV0ZS1jZW50ZXItaCB0OCB6Mic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTkgcDAgcGw4Jz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgZnczIHNmY3cgdGV4dC1sZWZ0Jz5CZXN0IHRpbWU6PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxNCBmdzMgdGV4dC1sZWZ0IHRleHQtdXBwZXJjYXNlIHNmY3cnPnttb250aHN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyIHAwJz5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgZjI0IHNmY3cgZnc0IHA4IGVsbGlwc2lzJz5cbiAgICAgICAgICAgICAgICB7ZGVzdGluYXRpb24ubmFtZX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHNmY3cgdGV4dC1jYXBpdGFsaXplJz5cbiAgICAgICAgICAgICAgICB7IChkZXN0aW5hdGlvbi5udW1iZXJPZlBhY2thZ2VzKSA/XG4gICAgICAgICAgICAgICAgICA8cD5wZXJzb25hbGl6ZSB7ZGVzdGluYXRpb24ubnVtYmVyT2ZQYWNrYWdlc30rIHBhY2thZ2VzPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNlbnNvciBvbkNoYW5nZT17b25TZW5zb3JDaGFuZ2V9IGludGVydmFsRGVsYXk9ezMwMDB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBzYmN3IHB0MTUgcGw4IHByOCBwYjgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNyBwMCB0ZXh0LWxlZnQnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgZnc0IHBmYzQnPlN0YXJ0aW5nIGZyb206PC9wPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc2ZjMyBmMTggZnc3Jz7igrkge2Rlc3RpbmF0aW9uLmJ1ZGdldH0vLTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMiBmdzQgcGZjMyc+cGVyIHBlcnNvblxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2YxMiBmdzQgcGZjNCBwdDQgdGV4dC1jYXBpdGFsaXplJz5cbiAgICAgICAgICAgICAgICAgICAgKEZsaWdodCB7KGRlc3RpbmF0aW9uLmZsaWdodHNJbmNsdWRlZCkgPyAnSW5jbHVkZWQnIDogJ0V4Y2x1ZGVkJ30gKVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTUgcDAgdGV4dC1yaWdodCc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmMTIgZnc3IHBmYzMgcHQ1Jz5cbiAgICAgICAgICAgICAge2Rlc3RpbmF0aW9uLm1pbkRheXN9IC0ge2Rlc3RpbmF0aW9uLm1heERheXN9IERheXNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBwMCc+XG4gICAgICAgICAgICA8SXRpbmVyYXJ5VGFnc1xuICAgICAgICAgICAgICBsaXN0PXtkZXN0aW5hdGlvbi5hY3Rpdml0eUxhYmVscy5tYXAoYWN0ID0+IChhY3QubmFtZSkpfVxuICAgICAgICAgICAgICBpdGluZXJhcnlJZD17MTJ9XG4gICAgICAgICAgICAgIHRhZ0lkPXsxMn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHNiY3cgcGw4IHByOCBtYjggcGI4Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBwMCBwdDggcGI4Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTYgcGwxNSBwcjAnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZjEyIGZ3NCBwZmMzIHRleHQtbGVmdCByZWxhdGl2ZSBwbDE1Jz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSB2YWNhdGlvbi1zcGFuLWNvbic+XG4gICAgICAgICAgICAgICAgPFZhY3Rpb25JY29uIC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj57bnVtYmVyV2l0aENvbW1hcyhkZXN0aW5hdGlvbi5udW1iZXJPZlRyYXZlbGVycyl9KyBUcmF2ZWxlcnM8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNiBwbDI0IHByMCc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmMTIgcGZjMyBmdzQgdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtkZXN0aW5hdGlvblRlc3RpbW9uaWFsUGF0aChkZXN0aW5hdGlvbi5uYW1lKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BmYzMgcmVsYXRpdmUgcGwyNCdcbiAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzTmFtZT0nYWJzb2x1dGUgdmFjYXRpb24tc3Bhbi1jb24tMSc+XG4gICAgICAgICAgICAgICAgPFRlc3RpbW9uYWlsc0ljb24gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAge251bWJlcldpdGhDb21tYXMoZGVzdGluYXRpb24ubnVtYmVyT2ZSZXZpZXdzKX0gUmV2aWV3c1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuRGVzdGluYXRpb25MaXN0aW5nQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhZ2VUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBudW1QYWNrYWdlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcbkRlc3RpbmF0aW9uTGlzdGluZ0NhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjYXRlZ29yeTogdW5kZWZpbmVkLFxuICBudW1QYWNrYWdlczogMFxufTtcbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uTGlzdGluZ0NhcmQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYWNrYWdlLXRleHQtbW9yZVwiOiBcIl8zV1VicFwiLFxuXHRcImltYWdlLWNvbnRhaW5lci1zcGFuXCI6IFwiX2VfRkVwXCIsXG5cdFwiZGVzdGluYXRpb24tcmF0aW5nLXRhZ1wiOiBcIl8yckdWeFwiLFxuXHRcInZhY2F0aW9uLXNwYW4tY29uXCI6IFwiXzFhdTFPXCIsXG5cdFwidmFjYXRpb24tc3Bhbi1jb24tMVwiOiBcIl8zamNfWVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29uZnVzaW9uXG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCAnLi9IZWxwTWVDb21wYXJlLnNjc3MnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuXG5cbmNvbnN0IEhlbHBNZUNvbXBhcmUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY3RhVGV4dCA9ICdIZWxwIG1lIGNvbXBhcmUgZGVzdGluYXRpb25zJztcbiAgY29uc3QgdHJhY2tDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIHByb3BzLnRyYWNrTGVhZEZ1bm5lbENsaWNrKCdsZWFkX2Z1bm5lbCcsIGN0YVRleHQsICdCb3R0b20gQmFyJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBzYmN3IHB0MjQgcGIxNSBwbDggcHI4IHRleHQtY2VudGVyJz5cbiAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtY2VudGVyIHBiMTUnPjxzcGFuIGNsYXNzTmFtZT0nY29uZnVzaW9uX2ljb25fY29uIGJsb2NrJz48Q29uZnVzaW9uIC8+PC9zcGFuPjwvaDQ+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdwZmMzIGYxNCBmdzQgcmVsYXRpdmUgZGVzdGluYXRpb24tdGV4dCc+Q29uZnVzZWQhIEkgd2FudCB0byBleHBsb3JlIGRlc3RpbmF0aW9uczwvaDI+XG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBmMTIgdGV4dC11cHBlcmNhc2UgcHQxNSBmdzQgcGI4Jz5cbiAgICAgICAgPEZvcm1PbmVDVEEgY2xpY2tIYW5kbGVyPXt0cmFja0NsaWNrRXZlbnR9ID48ZGl2IGNsYXNzTmFtZT0nYnRuLXByaSB3ZnVsbCBwbDggcHI4Jz48ZGl2IGNsYXNzTmFtZT0nd2F2ZScgLz57Y3RhVGV4dH08L2Rpdj48L0Zvcm1PbmVDVEE+XG4gICAgICA8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGVscE1lQ29tcGFyZS5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkhlbHBNZUNvbXBhcmUuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja0xlYWRGdW5uZWxDbGljazogKCkgPT4ge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwTWVDb21wYXJlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29uZnVzaW9uX2ljb25fY29uXCI6IFwiXzEyVU1CXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBIZWxwXG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCAnLi9IZWxwTWVQbGFuLnNjc3MnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuXG5cbmNvbnN0IEhlbHBNZVBsYW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY3RhVGV4dCA9ICdIZWxwIG1lIHBsYW4gJiBib29rJztcbiAgY29uc3QgdHJhY2tDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIHByb3BzLnRyYWNrTGVhZEZ1bm5lbENsaWNrKCdsZWFkX2Z1bm5lbCcsIGN0YVRleHQsICdCb3R0b20gQmFyJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBzYmN3IHB0MjQgcGIxNSBwbDggcHI4IHRleHQtY2VudGVyJz5cbiAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWxwX2ljb25fY29uIGJsb2NrJz48SGVscCAvPjwvc3Bhbj5cbiAgICAgIDwvaDQ+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdwZmMzIGYxNCBmdzQgcmVsYXRpdmUgbXQxNSBkZXN0aW5hdGlvbi10ZXh0Jz5cbiAgICAgICAgTXkgZGVzdGluYXRpb24gaXMgZmluYWwhIEkgbmVlZCBhIGJ1ZGdldCBlc3RpbWF0ZVxuICAgICAgICA8L2gyPlxuICAgICAgPGgyIGNsYXNzTmFtZT0ncGZjMyBmMTQgZnc0IHJlbGF0aXZlIG10MTUgZGVzdGluYXRpb24tdGV4dCc+XG4gICAgICAgIEkgbmVlZCBhZHZpY2Ugb24gZGF0ZXMsIGhvdGVscyAmIEFjdGl2aXRpZXNcbiAgICAgIDwvaDI+XG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBmMTIgdGV4dC11cHBlcmNhc2UgcHQxNSBmdzQgcGI4Jz5cbiAgICAgICAgPEZvcm1PbmVDVEEgY2xpY2tIYW5kbGVyPXt0cmFja0NsaWNrRXZlbnR9ID48ZGl2IGNsYXNzTmFtZT0nYnRuLXByaSB3ZnVsbCBwbDggcHI4Jz48ZGl2IGNsYXNzTmFtZT0nd2F2ZScgLz57Y3RhVGV4dH08L2Rpdj48L0Zvcm1PbmVDVEE+XG4gICAgICA8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGVscE1lUGxhbi5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkhlbHBNZVBsYW4uZGVmYXVsdFByb3BzID0ge1xuICB0cmFja0xlYWRGdW5uZWxDbGljazogKCkgPT4ge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwTWVQbGFuO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVscF9pY29uX2NvblwiOiBcIl8xcXpfVlwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmltcG9ydCAnY29tcG9uZW50cy9MaXN0aW5nL0xvYWRNb3JlUGFja2FnZXMuc2Nzcyc7XG5cbmNvbnN0IFNlZVBhY2thZ2VzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGN0YVRleHQgPSAnRXhwbG9yZSBOb3cnO1xuICBsZXQgcXVlcnkgPSAnJywgcGFnZUNhdGVnb3J5ID0gJ3RvdXInO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHByb3BzLnRyYWNrU2VnbWVudFBhY2thZ2VMaXN0Q2xpY2tlZCgncGFja2FnZV9saXN0X2NsaWNrJywgY3RhVGV4dCwgJ0JvdHRvbSBCYXInKTtcbiAgfTtcblxuICBpZihwcm9wcy5jYXRlZ29yeSA9PT0gJ0FsbCcpIHtcbiAgICBpZighaXNFbXB0eShwcm9wcy5sb2NhdGlvbi5xdWVyeSkpIHtcbiAgICAgIGlmKHByb3BzLmxvY2F0aW9uLnF1ZXJ5LmlzX2ludGVybmF0aW9uYWwgPT09ICd0cnVlJykge1xuICAgICAgICBxdWVyeSA9ICc/ZGVzdGluYXRpb25fdHlwZT1pbnRlcm5hdGlvbmFsJztcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgcXVlcnkgPSAnP2Rlc3RpbmF0aW9uX3R5cGU9aW5kaWEnO1xuICAgICAgfVxuICAgIH1cbiAgfWVsc2Uge1xuICAgIGlmKFsnSG9uZXltb29uJywgJ0ZyaWVuZHMnLCAnRmFtaWx5J10uaW5kZXhPZihwcm9wcy5jYXRlZ29yeSkgPiAtMSkge1xuICAgICAgcGFnZUNhdGVnb3J5ID0gcHJvcHMuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYocHJvcHMuY2F0ZWdvcnkpIHtcbiAgICAgIHF1ZXJ5ID0gYD90cmlwX3R5cGVzW109JHtwcm9wcy5jYXRlZ29yeX1gO1xuICAgIH1cbiAgfVxuICBjb25zdCB1cmwgPSBgLyR7cGFnZUNhdGVnb3J5fS1wYWNrYWdlcyR7cXVlcnl9YDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgcGw4IHByOCc+XG4gICAgICA8TGluayBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPSdidXR0b24tbG9hZC1tb3JlLWZ1bGwgcmlwcGxlJyB0bz17dXJsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dhdmUnIC8+e2N0YVRleHR9XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TZWVQYWNrYWdlcy5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrU2VnbWVudFBhY2thZ2VMaXN0Q2xpY2tlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5TZWVQYWNrYWdlcy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudFBhY2thZ2VMaXN0Q2xpY2tlZDogKCkgPT4ge30sXG4gIGNhdGVnb3J5OiAnQWxsJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VlUGFja2FnZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQWRkcmVzc1RUID0gKHsgaXNIb21lUGFnZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHNmY3cgdGV4dC1jZW50ZXInIGl0ZW1Qcm9wPXtpc0hvbWVQYWdlID8gXCJhZGRyZXNzXCIgOiBudWxsfSBpdGVtU2NvcGU9e2lzSG9tZVBhZ2UgPyBcIml0ZW1zY29wZVwiIDogbnVsbH0gIGl0ZW1UeXBlPXtpc0hvbWVQYWdlID8gXCJodHRwczovL3NjaGVtYS5vcmcvUG9zdGFsQWRkcmVzc1wiIDogbnVsbH0+XG4gICAgICA8cCBjbGFzc05hbWU9J2Z3OSBmMTQgbTAgbWIxNSBzZmM2IHRleHQtdXBwZXJjYXNlICc+Q29ycG9yYXRlIE9mZmljZTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wJyBpdGVtUHJvcD17IGlzSG9tZVBhZ2UgPyBcIm5hbWVcIiA6IG51bGx9PkhvbGlkYXkgVHJpYW5nbGUgVHJhdmVsIFByaXZhdGUgTGltaXRlZDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wJyBpdGVtUHJvcD17aXNIb21lUGFnZSA/IFwic3RyZWV0QWRkcmVzc1wiIDogbnVsbH0+UGxvdCBObyAtIDI5ICwgM3JkICYgNHRoIEZsb29yLCA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9J2YxMiBtMCcgaXRlbVByb3A9e2lzSG9tZVBhZ2UgPyBcImFkZHJlc3NMb2NhbGl0eVwiIDogbnVsbH0+RHluYW1pYyBIb3VzZSwgTWFydXRpIEluZHVzdHJpYWwgQ29tcGxleCw8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9J2YxMiBtMCcgaXRlbVByb3A9e2lzSG9tZVBhZ2UgPyBcIkFkZHJlc3NSZWdpb25cIiA6IG51bGx9PlNlY3RvciAxOCAsIEd1cnVncmFtIC0gPHNwYW4gaXRlbVByb3A9XCJwb3N0YWxDb2RlXCI+MTIyMDE1IDwvc3Bhbj4sIEhhcnlhbmE8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9J2YxMiBtMCcgaXRlbVByb3A9e2lzSG9tZVBhZ2UgPyBcInRlbGVwaG9uZVwiIDogbnVsbH0+TGFuZGxpbmU6IDxhIGhyZWY9J3RlbDoxODAwMTIzNTU1NSc+MTgwMCAxMjMgNTU1NTwvYT48L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTIgbTBcIiBpdGVtUHJvcD17aXNIb21lUGFnZSA/IFwiZW1haWxcIiA6IG51bGx9PkVtYWlsOiA8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJtYWlsdG86Y3VzdG9tZXJjYXJlQHRyYXZlbHRyaWFuZ2xlLmNvbVwiPmN1c3RvbWVyY2FyZUB0cmF2ZWx0cmlhbmdsZS5jb208L2E+XG4gICAgICA8L3A+XG5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWRkcmVzc1RULnByb3BUeXBlcyA9IHtcbiAgaXNIb21lUGFnZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkFkZHJlc3NUVC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzSG9tZVBhZ2U6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzVFQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBZGRyZXNzVFQgPSAoKSA9PiAoXG4gIDxwIGNsYXNzTmFtZT0nZjEyIHBmYzQnPkFsbCByaWdodHMgcmVzZXJ2ZWQgJmNvcHk7IDIwMjA8L3A+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzVFQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vRm9vdGVyTGlua3Muc2Nzcyc7XG5cblxuY29uc3QgRm9vdGVyTGlua3MgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSc+XG4gICAgPHVsIGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBmbGV4V3JhcCBqdXN0aWZ5Q2VudGVyIGZvb3Rlci1saW5rcy1tZW51Jz5cbiAgICAgIDxsaT48YSBocmVmPVwiL2Fib3V0dXNcIj5BYm91dCBVczwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvY2FyZWVyXCI+V2UgQXJlIEhpcmluZyE8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiL3RlYW1cIj5UZWFtPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi9ibG9nXCI+QmxvZzwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvdGVzdGltb25pYWxzXCI+VGVzdGltb25pYWxzPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi90bmNcIj5UJkM8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiL3ByaXZhY3lcIj5Qcml2YWN5IFBvbGljeTwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvY2FuY2VsbGF0aW9uXCI+Q2FuY2VsbGF0aW9uPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi9GQVFzXCI+RkFRczwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvY29udGFjdF91c1wiPkNvbnRhY3QgVXM8L2E+PC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckxpbmtzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyLWxpbmtzLW1lbnVcIjogXCJfMXhlZ2xcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQge1xuICAgIEZCSWNvbldoaXRlLCBHb29nbGVJY29uV2hpdGUsIEluc3RhZ3JhbSwgVHdpdHRlciwgUGludGVyZXN0SWNvblxuICB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgU29jaWFsSWNvbnNDb250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLmZhY2Vib29rSWNvbic6IHtcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgaGVpZ2h0OiAnMTlweCcsXG4gICAgfSxcbiAgfSxcbiAgJyYgLnR3aXR0ZXJJY29uJzoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMTdweCcsXG4gICAgICBoZWlnaHQ6ICcxNHB4JyxcbiAgICB9LFxuICB9LFxuICAnJiAucGludHJlc3RJY29uJzoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICB9LFxuICB9LFxuICAnJiAuZ29vZ2xlSWNvbic6IHtcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzIxcHgnLFxuICAgICAgaGVpZ2h0OiAnMTNweCcsXG4gICAgfSxcbiAgfSxcbiAgJyYgLmluc3RhSWNvbic6IHtcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBDb25uZWN0SWNvbnMgPSBnbGFtb3JvdXMuYSh7XG4gIG1pbldpZHRoOiAnMzBweCcsXG4gIG1heFdpZHRoOiAnMzBweCcsXG4gIGhlaWdodDogJzMwcHgnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgbWFyZ2luUmlnaHQ6ICcxMHB4JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICBtYXJnaW5SaWdodDogJzAnXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NpYWxMaW5rcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZnVsbFwiPlxuICAgICAgICA8U29jaWFsSWNvbnNDb250YWluZXIgY2xhc3NOYW1lPVwiYXRfc29jaWFsaWNvbnMgZmxleCBhbGlnbkNlbnRlciB3ZnVsbCBqdXN0aWZ5Q2VudGVyXCI+XG4gICAgICAgICAgPENvbm5lY3RJY29ucyBjbGFzc05hbWU9XCJmYWNlYm9va0ljb25cIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3RyYXZlbHRyaWFuZ2xlXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCIgPjxGQkljb25XaGl0ZSAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICAgIDxDb25uZWN0SWNvbnMgY2xhc3NOYW1lPVwidHdpdHRlckljb25cIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90cmF2ZWx0cmlhbmdsZVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPjxUd2l0dGVyIC8+XG4gICAgICAgICAgPC9Db25uZWN0SWNvbnM+XG4gICAgICAgICAgPENvbm5lY3RJY29ucyBjbGFzc05hbWU9XCJwaW50cmVzdEljb25cIiBocmVmPVwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS90cmF2ZWx0cmlhbmdsZS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj48UGludGVyZXN0SWNvbiAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICAgIDxDb25uZWN0SWNvbnMgY2xhc3NOYW1lPVwiZ29vZ2xlSWNvblwiIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8rdHJhdmVsdHJpYW5nbGUvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+PEdvb2dsZUljb25XaGl0ZSAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICAgIDxDb25uZWN0SWNvbnMgY2xhc3NOYW1lPVwiaW5zdGFJY29uXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHJhdmVsdHJpYW5nbGUvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+PEluc3RhZ3JhbSAvPlxuICAgICAgICAgIDwvQ29ubmVjdEljb25zPlxuICAgICAgICA8L1NvY2lhbEljb25zQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBwdXNoIGFzIHB1c2hTdGF0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU0VHTUVOVF9BRE1JTl9DT01NRU5ULCBzZXRDb29raWUgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgdXBkYXRlRnJvbU9uZVByb3BzIH0gZnJvbSAncmVkdWNlcnMvZm9ybU9uZUxlYWQnO1xuXG5jbGFzcyBGb3JtT25lQ1RBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBydFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHVwZGF0ZUZyb21PbmVQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVhbHM6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBydFByb3BzOiB7fSxcbiAgICBjbGlja0hhbmRsZXI6ICgpID0+IHt9LFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBkZWFsczogZmFsc2UsXG4gICAgdGFnOiAnJyxcbiAgICBidWRnZXQ6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgcnRQcm9wcywgdGFnLCBkZWFscywgYnVkZ2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIG1lcmdlIGFkbWluIGNvbW1lbnRzIHdpdGggdGhlIGV4aXN0aW5nIG9uZXNcbiAgICBsZXQgYWRtaW5Db21tZW50cyA9IHJ0UHJvcHMuYWRtaW5Db21tZW50cyB8fCAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFkbWluQ29tbWVudHMgPSBgJHthZG1pbkNvbW1lbnRzfSAjRm9ybV9maWxsZWRfb24gJHt3aW5kb3cubG9jYXRpb24uaHJlZn1gO1xuICAgIH1cbiAgICBhZG1pbkNvbW1lbnRzID0gYCAke2FkbWluQ29tbWVudHN9ICR7U0VHTUVOVF9BRE1JTl9DT01NRU5UfWA7XG4gICAgY29uc3QgcnRyaXBQcm9wcyA9IHtcbiAgICAgIC4uLnJ0UHJvcHMsXG4gICAgICBhZG1pbkNvbW1lbnRzLFxuICAgIH07XG4gICAgc2V0Q29va2llKCd0b19sb2MnLCBydFByb3BzLnRvX2xvYyk7XG4gICAgc2V0Q29va2llKCd0cmlwX2RheXMnLCBydFByb3BzLnRyaXBfZGF5cyk7XG4gICAgdGhpcy5wcm9wcy5jbGlja0hhbmRsZXIoKTtcbiAgICAvLyB1cGRhdGUgdGhlIHZhbHVlIG9uIHN0b3JlXG4gICAgdGhpcy5wcm9wcy51cGRhdGVGcm9tT25lUHJvcHMocnRyaXBQcm9wcyk7XG4gICAgLy8gY2hhbmdlIHRoZSB1cmxcbiAgICBpZiAoZGVhbHMpIHtcbiAgICAgIHRoaXMucHJvcHMucHVzaFN0YXRlKGAvcmVxdWVzdGVkX3RyaXBzL25ldz9kZWFscz10cnVlJnRhZz0ke3RhZ30mYnVkZ2V0PSR7YnVkZ2V0fWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZSgnL3JlcXVlc3RlZF90cmlwcy9uZXcnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2Z1bGxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyB1cGRhdGVGcm9tT25lUHJvcHMsIHB1c2hTdGF0ZSB9KShGb3JtT25lQ1RBKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBJdGluZXJhcnlUYWdzID0gKHsgbGlzdCwgaXRpbmVyYXJ5SWQsIHRhZ0lkIH0pID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlFbGVtZW50cyA9IGxpc3QubWFwKFxuICAgICh2YWx1ZSwga2V5KSA9PiAoXG4gICAgICA8bGlcbiAgICAgICAga2V5PXtgY2F0ZWdvcnlfJHtpdGluZXJhcnlJZH1fJHt0YWdJZH1fJHtrZXl9YH0gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgIGNsYXNzTmFtZT1cIml0aW5lcmFyeS10YWdzLWJveC1pdGVtXCJcbiAgICAgID5cbiAgICAgICAgeyB2YWx1ZSB9XG4gICAgICA8L2xpPlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXN0eWxlLW5vXCI+XG4gICAgICB7Y2F0ZWdvcnlFbGVtZW50c31cbiAgICA8L3VsPlxuICApO1xufTtcblxuSXRpbmVyYXJ5VGFncy5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgaXRpbmVyYXJ5SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGFnSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuSXRpbmVyYXJ5VGFncy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxpc3Q6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGluZXJhcnlUYWdzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXNwcmVhZCwgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIFN0YXJJY29uLFxuICBTdGFySWNvbkVtcHR5XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuaW1wb3J0ICcuL1N0YXJSYXRpbmdzLnNjc3MnO1xuXG5jb25zdCBTdGFyUmF0aW5ncyA9ICh7IHJhdGluZywgdG90YWwsIGlkIH0pID0+IHtcbiAgY29uc3QgciA9IHBhcnNlSW50KHJhdGluZyk7XG4gIGNvbnN0IHQgPSBwYXJzZUludCh0b3RhbCk7XG5cbiAgY29uc3Qgc3Rhckljb25FbGVtZW50cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHIpKS5tYXAoKGUsIGluZGV4KSA9PiA8bGkga2V5PXtgJHtpZH1fJHtpbmRleH1gfT48U3Rhckljb24gLz48L2xpPik7XG4gIGNvbnN0IHN0YXJJY29uRW1wdHlFbGVtZW50cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHQgLSByKSkubWFwKChlLCBpbmRleCkgPT4gPGxpIGtleT17YCR7aWR9XyR7cmF0aW5nICsgaW5kZXh9YH0+PFN0YXJJY29uRW1wdHkgLz48L2xpPik7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwidHJhdmVsZXItcmF0aW5nLXN0YXItbGlzdFwiPlxuICAgICAge3N0YXJJY29uRWxlbWVudHN9XG4gICAgICB7c3Rhckljb25FbXB0eUVsZW1lbnRzfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5TdGFyUmF0aW5ncy5wcm9wVHlwZXMgPSB7XG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cblN0YXJSYXRpbmdzLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmF0aW5nOiA0LFxuICB0b3RhbDogNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhclJhdGluZ3M7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0cmF2ZWxlci1yYXRpbmctc3Rhci1saXN0XCI6IFwiX2t5Ql9HXCJcbn07IiwiaW1wb3J0IHsgZ2V0UGFnZU5hbWUsIGdldENvb2tpZSB9IGZyb20gXCIuL0Zvcm1EYXRhRm9ybWF0dGVyXCI7XG5pbXBvcnQgY29uZmlnLCB7IHNlbnRyeUtleSB9IGZyb20gJ2FwcENvbmZpZyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5leHBvcnQgY29uc3QgaGlkZVBvcHVwID0gKGUpID0+IHtcbiAgaWYgKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1tYXNrLWVpJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdta3QtbW9iLWV4aXQtaW50ZW50JylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbW9iLWV4aXQtcG9wdXAnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWt0LW1vYi1leGl0LWludGVudCcpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1BvcFVwKTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHNob3dQb3BVcCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLW1hc2stZWknKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21rdC1tb2ItZXhpdC1pbnRlbnQnKVswXS5jbGFzc0xpc3QuYWRkKCdtb2ItZXhpdC1wb3B1cCcpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdta3QtbW9iLWV4aXQtaW50ZW50JylbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UG9wVXApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlckV4aXRJbnRlbnQgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cuUmVhY3RFeGl0SW50ZW50SW1hZ2UpIHtcbiAgICBSZWFjdEV4aXRJbnRlbnRJbWFnZS5yZW5kZXIoe2lzUHVibGljUHJvZHVjdDogdHJ1ZX0pO1xuICAgIHdpbmRvdy5pc0xlYWRQb3B1cE9wZW5lZCA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHdpbmRvdy5pc0xlYWRQb3B1cE9wZW5lZCA9IGZhbHNlO1xuICAgICAgY29uc3QgZXhpdFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWt0LW1vYi1leGl0LWludGVudCcpWzBdO1xuICAgICAgaWYgKGV4aXRQb3B1cCkge1xuICAgICAgICBleGl0UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UG9wVXApO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZS1wb3B1cCcpWzBdO1xuICAgICAgaWYgKGNsb3NlQnRuKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlTW9iQnRuID0gY2xvc2VCdG4uY2xvbmVOb2RlKCk7XG4gICAgICAgIGNsb3NlTW9iQnRuLmlubmVySFRNTCA9IFwiJiMyMTU7XCI7XG4gICAgICAgIGNsb3NlTW9iQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vYi1idG4nKTtcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBjbG9zZU1vYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGhpZGVQb3B1cChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlQnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb3NlTW9iQnRuLCBjbG9zZUJ0bik7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplRXhpdEludGVudCA9ICgpID0+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdC1pbnRlbnQtc2NyaXB0LXRhZycpO1xuICBpZihleGlzdGluZyAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3RFeGl0SW50ZW50SW1hZ2UnKSl7XG4gICAgcmVuZGVyRXhpdEludGVudCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIGVsLmlkPSAnZXhpdC1pbnRlbnQtc2NyaXB0LXRhZyc7XG4gIGVsLnNyYyA9IGAke2NvbmZpZy5hc3NldHMuanN9L3B1YmxpYy1wcm9kdWN0L3RyaXBzM20taW1hZ2VpbnRlbnQtYW1wLXZzZWdtZW50LTAuNS5qc2A7XG4gIGVsLmRlZmVyID0gdHJ1ZTtcbiAgZWwub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzY3JpcHQgbG9hZGVkJyk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuUmF2ZW4gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICBzZW50cnlLZXkpIHtcbiAgICAgIC8vdG9kbzogaWdub3JlIGVycm9ycyBmb3IgdGhlIGNoYXQgY29ubmVjdGlvblxuICAgICAgd2luZG93LlJhdmVuLmNvbmZpZyhzZW50cnlLZXksIHtcbiAgICAgICAgc2hvdWxkU2VuZENhbGxiYWNrKGRhdGEpIHtcbiAgICAgICAgICByZXR1cm4gIS9NU0lFLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgaWdub3JlRXJyb3JzOiBbXG4gICAgICAgICAgXCJVbmNhdWdodCwgdW5zcGVjaWZpZWQgZXJyb3IgZXZlbnQuXCJcbiAgICAgICAgXVxuICAgICAgfSkuaW5zdGFsbCgpO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0RXhpdEludGVudEltYWdlJykpIHtcbiAgICAgIHJlbmRlckV4aXRJbnRlbnQoKTtcbiAgICB9XG4gIH07XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=