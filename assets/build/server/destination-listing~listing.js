require("source-map-support").install();
exports.ids = ["destination-listing~listing"];
exports.modules = {

/***/ "./app/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./app/components/Footer/Footer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FooterLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/FooterLinks */ "./app/components/Footer/FooterLinks.js"));

var _AddressTT = _interopRequireDefault(__webpack_require__(/*! components/Footer/AddressTT */ "./app/components/Footer/AddressTT.js"));

var _CopyRight = _interopRequireDefault(__webpack_require__(/*! components/Footer/CopyRight */ "./app/components/Footer/CopyRight.js"));

var _SocialLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/SocialLinks */ "./app/components/Footer/SocialLinks.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoveIconCon = _glamorous.default.span({
  width: '20px',
  height: '20px',
  margin: '0 8px',
  display: 'inline-block'
});

const MadeWith = _glamorous.default.div({
  height: '20px',
  lineHeight: '20px',
  fontSize: '12px',
  textAlign: 'center',
  color: '#ffffff',
  '& > p': {
    height: '20px',
    lineHeight: '20px',
    verticalAlign: 'top'
  }
});

const Footer = ({
  isHomePage
}) => _react.default.createElement("div", {
  className: "at_footer row row- pbc3 p8"
}, _react.default.createElement("div", {
  className: "pt0 pb0"
}, _react.default.createElement(_FooterLinks.default, null)), _react.default.createElement("div", {
  className: "pt8 mb24"
}, _react.default.createElement(_AddressTT.default, {
  isHomePage: isHomePage
})), _react.default.createElement("div", {
  className: "mb24"
}, _react.default.createElement(_SocialLinks.default, null)), _react.default.createElement("div", {
  className: "flex spaceBetween alignCenter"
}, _react.default.createElement(MadeWith, {
  className: "flex alignCenter flexFull"
}, _react.default.createElement("p", {
  className: "m0 f12 iblock at_madelove"
}, "Made with"), _react.default.createElement(LoveIconCon, {
  className: "relative"
}, _react.default.createElement(_Icon.LoveIcon, null)), _react.default.createElement("p", {
  className: "m0 f12 iblock"
}, "in India")), _react.default.createElement("div", {
  className: "flexFull text-right"
}, _react.default.createElement(_CopyRight.default, null))));

Footer.propTypes = {
  isHomePage: _propTypes.default.bool
};
Footer.defaultProps = {
  isHomePage: false
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./app/components/Generic/Checkbox.js":
/*!********************************************!*\
  !*** ./app/components/Generic/Checkbox.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Checkbox = class Checkbox extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.toggleCheckboxChange = () => {
      const {
        handleOnChange,
        id
      } = this.props;
      handleOnChange(id);
    }, _temp;
  }

  render() {
    const isChecked = this.props.isChecked || false;
    const {
      title,
      value,
      name
    } = this.props;
    return _react.default.createElement("div", {
      className: "col-xs-6 p0 option-overflow"
    }, _react.default.createElement("div", {
      className: "flex"
    }, _react.default.createElement("input", {
      type: "checkbox",
      name: name,
      value: value,
      id: `filter_${name}_${value}`,
      className: "checkbox-common",
      checked: isChecked,
      onChange: this.toggleCheckboxChange,
      disabled: this.props.disabled
    }), _react.default.createElement("label", {
      className: "break-all",
      htmlFor: `filter_${name}_${value}`
    }, title), this.props.count !== undefined ? _react.default.createElement("span", {
      className: "at_count hide iblock pl0 p8"
    }, "[", this.props.count, "]") : null));
  }

};
Checkbox.propTypes = {
  title: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  isChecked: _propTypes.default.bool.isRequired,
  handleOnChange: _propTypes.default.func.isRequired,
  id: _propTypes.default.number.isRequired,
  value: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  count: _propTypes.default.number
};
Checkbox.defaultProps = {
  disabled: false
};
var _default = Checkbox;
exports.default = _default;

/***/ }),

/***/ "./app/components/Generic/StarRatingCheckbox.js":
/*!******************************************************!*\
  !*** ./app/components/Generic/StarRatingCheckbox.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _StarRatings = _interopRequireDefault(__webpack_require__(/*! components/Review/StarRatings */ "./app/components/Review/StarRatings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let StarRatingCheckbox = class StarRatingCheckbox extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.toggleCheckboxChange = () => {
      const {
        handleOnChange,
        id
      } = this.props;
      handleOnChange(id);
    }, _temp;
  }

  render() {
    const isChecked = this.props.isChecked || false;
    const {
      value,
      name,
      disabled
    } = this.props;
    return _react.default.createElement("div", {
      className: "col-xs-6 p0"
    }, _react.default.createElement("input", {
      type: "checkbox",
      name: name,
      value: value,
      id: `filter_${name}_${value}`,
      className: "checkbox-common",
      checked: isChecked,
      onChange: this.toggleCheckboxChange,
      disabled: disabled
    }), _react.default.createElement("label", {
      className: "row row-",
      htmlFor: `filter_${name}_${value}`
    }, _react.default.createElement("div", {
      className: "fleft"
    }, _react.default.createElement(_StarRatings.default, {
      id: `label_${name}_${value}`,
      rating: Number(value),
      total: 5
    })), this.props.count !== undefined ? _react.default.createElement("span", {
      className: "at_count hide"
    }, "[", this.props.count, "]") : null));
  }

};
StarRatingCheckbox.propTypes = {
  name: _propTypes.default.string.isRequired,
  isChecked: _propTypes.default.bool.isRequired,
  handleOnChange: _propTypes.default.func.isRequired,
  id: _propTypes.default.number.isRequired,
  value: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  count: _propTypes.default.number
};
var _default = StarRatingCheckbox;
exports.default = _default;

/***/ }),

/***/ "./app/components/Generic/index.js":
/*!*****************************************!*\
  !*** ./app/components/Generic/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function () {
    return _Checkbox.default;
  }
});
Object.defineProperty(exports, "StarRatingCheckbox", {
  enumerable: true,
  get: function () {
    return _StarRatingCheckbox.default;
  }
});

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "./app/components/Generic/Checkbox.js"));

var _StarRatingCheckbox = _interopRequireDefault(__webpack_require__(/*! ./StarRatingCheckbox */ "./app/components/Generic/StarRatingCheckbox.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app/components/Listing/LoadMorePackages.js":
/*!****************************************************!*\
  !*** ./app/components/Listing/LoadMorePackages.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./LoadMorePackages.scss */ "./app/components/Listing/LoadMorePackages.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadMorePackages = ({
  packagesRemaining,
  loadMorePackages,
  currentPage,
  title,
  loading
}) => {
  const handleLoadMore = pageNumber => () => {
    loadMorePackages(pageNumber);
  };

  return _react.default.createElement("div", {
    className: packagesRemaining > 0 ? '' : 'hide'
  }, _react.default.createElement("button", {
    onClick: handleLoadMore(currentPage + 1),
    className: "button-load-more-full flex alignCenter justifyCenter",
    role: "button"
  }, loading ? _react.default.createElement("p", {
    className: "loading-dots"
  }, _react.default.createElement("span", {
    className: "loading-dot-1 loading-dot-dark"
  }), _react.default.createElement("span", {
    className: "loading-dot-2 loading-dot-dark"
  }), _react.default.createElement("span", {
    className: "loading-dot-3 loading-dot-dark"
  })) : `Load More (${packagesRemaining} ${title})`));
};

LoadMorePackages.propTypes = {
  packagesRemaining: _propTypes.default.number.isRequired,
  loadMorePackages: _propTypes.default.func.isRequired,
  currentPage: _propTypes.default.number.isRequired,
  title: _propTypes.default.string.isRequired,
  loading: _propTypes.default.bool.isRequired
};
var _default = LoadMorePackages;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/LoadMorePackages.scss":
/*!******************************************************!*\
  !*** ./app/components/Listing/LoadMorePackages.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button-load-more-full": "_1lFOd"
};

/***/ }),

/***/ "./app/components/Listing/SortFilters/FilterOptions.js":
/*!*************************************************************!*\
  !*** ./app/components/Listing/SortFilters/FilterOptions.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _SmartFilter = _interopRequireDefault(__webpack_require__(/*! ./SmartFilter */ "./app/components/Listing/SortFilters/SmartFilter.js"));

var _filter = __webpack_require__(/*! ../../../utils/filter */ "./app/utils/filter.js");

__webpack_require__(/*! ./FilterOptions.scss */ "./app/components/Listing/SortFilters/FilterOptions.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let FilterOptions = class FilterOptions extends _react.default.Component {
  constructor(props) {
    super(props);
    this.filterHide = this.filterHide.bind(this);
  }

  filterHide() {
    this.props.toggleFilterView();
    const getBody = document.querySelector('body');
    getBody.classList.remove('filter-opened');
    this.props.setDefaultFilters();
    this.props.onFilterCheckHandler();
  }

  render() {
    const {
      selectedFilters,
      filters,
      filterSelected,
      handleFilterUpdate,
      resetFilters,
      shouldHideDestinationTypeFilters,
      filterCities,
      filterInclusions,
      filterCounts,
      filterCategory,
      onFilterCheckHandler,
      isCategoryPage,
      filterDestinationActivities
    } = this.props;

    const applyFilters = formSubmitEvent => {
      formSubmitEvent.preventDefault();
      handleFilterUpdate();
      const getBody = document.querySelector('body');
      getBody.classList.remove('filter-opened');
    };

    const createFilter = Object.keys(filters).filter(k => (filterInclusions.length ? k !== '41' : true) && (k !== '37' || !shouldHideDestinationTypeFilters) && filterCategory.indexOf((0, _filter.getParamName)(filters[k].paramsName)) === -1 && !filters[k].tag).map(key => _react.default.createElement(_SmartFilter.default, _extends({
      key: filters[key].id,
      selectedFields: selectedFilters[filters[key].id],
      filterSelected: filterSelected,
      onFilterCheckHandler: onFilterCheckHandler,
      filterCounts: filterCounts
    }, filters[key])));
    const renderCityFilters = filterCities.length && filterCategory.indexOf('cities') === -1 ? _react.default.createElement(_SmartFilter.default, {
      key: "cities",
      selectedFields: selectedFilters['cities'],
      filterSelected: filterSelected,
      filterCounts: filterCounts,
      options: filterCities,
      paramsName: "cities[]",
      displayType: "Checkbox",
      id: "cities",
      title: "Cities",
      onFilterCheckHandler: onFilterCheckHandler
    }) : null;

    const handleResetFilter = event => {
      event.preventDefault();
      resetFilters();
      onFilterCheckHandler();
    };

    const renderInclusionFilters = filterInclusions.length && filterCategory.indexOf('inclusions') === -1 ? _react.default.createElement(_SmartFilter.default, {
      key: "inclusion_category_tags",
      selectedFields: selectedFilters['inclusion_category_tags'],
      filterSelected: filterSelected,
      filterCounts: filterCounts,
      options: filterInclusions,
      paramsName: "inclusion_category_tags[]",
      displayType: "Checkbox",
      id: "inclusion_category_tags",
      title: "Inclusions",
      onFilterCheckHandler: onFilterCheckHandler
    }) : null;
    const renderExperienceFilters = filterDestinationActivities.length ? _react.default.createElement(_SmartFilter.default, {
      key: "location_experiences",
      selectedFields: selectedFilters['location_experiences'],
      filterSelected: filterSelected,
      filterCounts: filterCounts,
      options: filterDestinationActivities,
      paramsName: "location_experiences[]",
      displayType: "Checkbox",
      id: "location_experiences",
      title: "Popular Experiences",
      onFilterCheckHandler: onFilterCheckHandler
    }) : null;
    return _react.default.createElement("div", {
      className: "row row- fixed z15 sbcw filters-options-con"
    }, _react.default.createElement("form", {
      onSubmit: applyFilters
    }, _react.default.createElement("div", {
      className: "row row- p15 filters-header"
    }, _react.default.createElement("div", {
      className: "col-xs-2 pl0"
    }, _react.default.createElement("button", {
      className: "close-filters",
      type: "button",
      onClick: this.filterHide.bind(this)
    }, _react.default.createElement(_Icon.CloseDark, null))), _react.default.createElement("div", {
      className: "col-xs-6 pl8"
    }, _react.default.createElement("p", {
      className: "filter-title"
    }, "Filters")), _react.default.createElement("div", {
      className: "col-xs-4 pl0 pr0"
    }, _react.default.createElement("button", {
      className: "reset-button fright",
      onClick: handleResetFilter
    }, "RESET"))), _react.default.createElement("div", {
      className: "row row- sbc5"
    }, createFilter), _react.default.createElement("div", {
      className: "row row- sbc5"
    }, renderInclusionFilters), _react.default.createElement("div", {
      className: "row row- sbc5 expFilter hide"
    }, renderExperienceFilters), _react.default.createElement("div", {
      className: "row row- sbc5"
    }, renderCityFilters), _react.default.createElement("div", {
      className: "fixed p8 sbcw b0 l0 r0 bs4"
    }, isCategoryPage ? _react.default.createElement("button", {
      className: "btn-filled-pri-large wfull",
      type: "submit"
    }, "Apply Filters") : _react.default.createElement("button", {
      className: "btn-filled-pri-large wfull",
      type: "submit"
    }, `View ${filterCounts.total_entries > 0 ? filterCounts.total_entries : '0'} ${filterCounts.total_entries > 1 ? 'Packages' : 'Package'}`))));
  }

};
;
FilterOptions.propTypes = {
  filters: _propTypes.default.object.isRequired,
  selectedFilters: _propTypes.default.object,
  toggleFilterView: _propTypes.default.func,
  filterSelected: _propTypes.default.func.isRequired,
  handleFilterUpdate: _propTypes.default.func,
  resetFilters: _propTypes.default.func.isRequired,
  shouldHideDestinationTypeFilters: _propTypes.default.bool,
  filterCities: _propTypes.default.array,
  filterInclusions: _propTypes.default.array,
  filterCounts: _propTypes.default.object,
  onFilterCheckHandler: _propTypes.default.func,
  isCategoryPage: _propTypes.default.bool,
  filterCategory: _propTypes.default.array,
  filterDestinationActivities: _propTypes.default.array,
  setDefaultFilters: _propTypes.default.func
};
FilterOptions.defaultProps = {
  selectedFilters: {},
  toggleFilterView: () => {},
  handleFilterUpdate: () => {},
  shouldHideDestinationTypeFilters: false,
  filterCities: [],
  filterInclusions: [],
  filterDestinationActivities: [],
  filterCounts: {},
  onFilterCheckHandler: () => {},
  isCategoryPage: false,
  filterCategory: [],
  setDefaultFilters: () => {}
};
var _default = FilterOptions;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/SortFilters/FilterOptions.scss":
/*!***************************************************************!*\
  !*** ./app/components/Listing/SortFilters/FilterOptions.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"filters-header": "_15APR",
	"filters-options-con": "_3rRs5",
	"close-filters": "_1caOU",
	"filter-title": "_f6yII",
	"reset-button": "_56GwY",
	"filter-box": "_1P9US",
	"filter-box-options": "_mLxhT",
	"filter-options-type-one": "_jaBQy",
	"filter-options-type-two": "_7zr5F",
	"hotel-rating-star": "_BQw-_",
	"hotel-rating-star-list": "_1w8ml",
	"filter-options-type-three": "_3tuNx"
};

/***/ }),

/***/ "./app/components/Listing/SortFilters/Filters.js":
/*!*******************************************************!*\
  !*** ./app/components/Listing/SortFilters/Filters.js ***!
  \*******************************************************/
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

__webpack_require__(/*! ./SortAndFilter.scss */ "./app/components/Listing/SortFilters/SortAndFilter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SortBy = ({
  numberOfFilterSelected
}) => {
  const filterClass = numberOfFilterSelected() ? 'selected-filters' : '';
  return _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "relative pl48 filter-by-listing-view"
  }, _react.default.createElement("span", {
    className: "sort-by-icon"
  }, _react.default.createElement(_Icon.FilterIcon, null)), _react.default.createElement("p", null, "Filters"), _react.default.createElement("p", {
    className: `f10 no-filter-selected ${filterClass}`
  }, numberOfFilterSelected(), " selected")));
};

SortBy.propTypes = {
  numberOfFilterSelected: _propTypes.default.func
};
SortBy.defaultProps = {
  numberOfFilterSelected: () => {}
};
var _default = SortBy;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/SortFilters/SmartFilter.js":
/*!***********************************************************!*\
  !*** ./app/components/Listing/SortFilters/SmartFilter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isFilterDisable = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _isEmpty = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var GenericComponents = _interopRequireWildcard(__webpack_require__(/*! components/Generic */ "./app/components/Generic/index.js"));

__webpack_require__(/*! ./FilterOptions.scss */ "./app/components/Listing/SortFilters/FilterOptions.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const isFilterDisable = (option, filterCounts, key) => {
  if (filterCounts[option.filterCountKey] === 0) {
    return true;
  }

  if (key === 39 && option.filterCountKey === 'price_ranges_80_000___50_000_000') {
    if (typeof filterCounts.price_ranges_80_000___50_000_000 === 'undefined') {
      return filterCounts.price_ranges_80_000___1_00_000 + filterCounts.price_ranges_1_00_000___2_00_000 + filterCounts.price_ranges_2_00_000___50_000_000 === 0;
    }

    return filterCounts.price_ranges_80_000___1_00_000 === 0;
  }

  if (key === 'cities') {
    return filterCounts[`city_${option.id}`] === 0;
  }

  if (key === 'location_experiences') {
    return filterCounts[`destination_activity_${option.id}`] === 0;
  }

  return false;
};

exports.isFilterDisable = isFilterDisable;
let SmartFilter = class SmartFilter extends _react.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleOnChange = id => {
      const optionValue = {};

      if (this.props.selectedFields[id]) {
        optionValue[id] = false;
      } else {
        optionValue[id] = true;
      }

      this.props.filterSelected(this.props.id, _objectSpread({}, this.props.selectedFields, optionValue));
      this.props.onFilterCheckHandler();
    }, _temp;
  }

  render() {
    const options = this.props.options.map(option => _react.default.createElement(GenericComponents[this.props.displayType], Object.assign({}, option, {
      name: this.props.paramsName,
      key: option.id,
      handleOnChange: this.handleOnChange,
      isChecked: this.props.selectedFields[option.id] || false,
      disabled: isFilterDisable(option, this.props.filterCounts, this.props.id),
      count: this.props.id === 'cities' ? this.props.filterCounts[`city_${option.id}`] : this.props.id === 'location_experiences' ? this.props.filterCounts[`destination_activity_${option.id}`] : this.props.filterCounts[option.filterCountKey]
    })));
    return _react.default.createElement("div", {
      className: "row row- mb8 pb8 pl15 pr15 pt15 sbcw",
      key: this.props.id
    }, _react.default.createElement("p", {
      className: "fw9 pb8"
    }, this.props.title), _react.default.createElement("div", {
      className: "row row- filter-box-options"
    }, options));
  }

};
SmartFilter.propTypes = {
  paramsName: _propTypes.default.string.isRequired,
  displayType: _propTypes.default.string.isRequired,
  options: _propTypes.default.array.isRequired,
  selectedFields: _propTypes.default.object,
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  title: _propTypes.default.string.isRequired,
  filterSelected: _propTypes.default.func.isRequired,
  filterCounts: _propTypes.default.object,
  onFilterCheckHandler: _propTypes.default.func
};
SmartFilter.defaultProps = {
  selectedFields: {},
  filterCounts: {},
  onFilterCheckHandler: () => {}
};
var _default = SmartFilter;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/SortFilters/SortAndFilter.js":
/*!*************************************************************!*\
  !*** ./app/components/Listing/SortFilters/SortAndFilter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _SortBy = _interopRequireDefault(__webpack_require__(/*! ./SortBy */ "./app/components/Listing/SortFilters/SortBy.js"));

var _Filters = _interopRequireDefault(__webpack_require__(/*! ./Filters */ "./app/components/Listing/SortFilters/Filters.js"));

var _FilterOptions = _interopRequireDefault(__webpack_require__(/*! ./FilterOptions */ "./app/components/Listing/SortFilters/FilterOptions.js"));

var _filter = __webpack_require__(/*! ../../../utils/filter */ "./app/utils/filter.js");

__webpack_require__(/*! ./SortAndFilter.scss */ "./app/components/Listing/SortFilters/SortAndFilter.scss");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _filters = __webpack_require__(/*! reducers/listing/filters */ "./app/reducers/listing/filters.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const parseQuery = __webpack_require__(/*! query-string */ "query-string");

function filterByParamName(filtersData) {
  const res = {};
  Object.keys(filtersData).forEach(filterId => {
    const options = filtersData[filterId].options || [];
    res[filtersData[filterId].paramsName] = options.reduce((filterOptions, option) => _objectSpread({}, filterOptions, {
      options: _objectSpread({}, filterOptions.options, {
        [option.value]: option.id
      })
    }), {
      id: filterId,
      options: {}
    });
  });
  return res;
}

let SortAndFilter = class SortAndFilter extends _react.default.Component {
  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.filterToggle = this.filterToggle.bind(this);
  }

  componentDidMount() {
    const {
      filterSelected,
      sortBySelected,
      isCategoryPage,
      filterCategory,
      setDefaultFilters,
      setDefaultSelectedFilters
    } = this.props;
    let {
      filters
    } = this.props;
    /*Default sortBy value for listing page is 'popularity' for which the key is 'popularity', and for category pages is also popularity (for which BE key is
    * 'relevence_asc') */

    const defaultSortBy = isCategoryPage ? 'relevence_asc' : 'popularity';
    const query = parseQuery.parse(parseQuery.extract(this.props.location.search));
    filters = filterByParamName(filters); // get filters data

    if (this.props.category !== 'Tour') {
      query.category = query.category || this.props.category.toLowerCase();
    }

    Object.keys(query).forEach(param => {
      const filter = filters[param];

      if (filter) {
        const options = typeof query[param] === 'string' ? [query[param]] : query[param];
        const selectedOptions = options.reduce((selected, optionVal) => {
          if (filterCategory.indexOf((0, _filter.getParamName)(param)) > -1) {
            return _objectSpread({}, selected, {
              [filter.options[optionVal]]: false
            });
          }

          if (filter.options[optionVal]) {
            return _objectSpread({}, selected, {
              [filter.options[optionVal]]: true
            });
          }

          return selected;
        }, {});
        filterSelected(filter.id, selectedOptions);
        /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */

        if (!isCategoryPage && filter.id !== _filters.CATEGORY_FILTER && filter.id !== _filters.DESTINATION_FILTER) {
          setDefaultSelectedFilters('', filter.id, selectedOptions);
        }
      }
    });

    if (query['cities[]']) {
      const selectedCities = typeof query['cities[]'] === 'string' ? [query['cities[]']] : query['cities[]'];
      const selectedOptions = selectedCities.reduce((selected, optionVal) => {
        if (filterCategory.indexOf('cities') > -1) {
          return _objectSpread({}, selected, {
            [optionVal]: false
          });
        } else {
          return _objectSpread({}, selected, {
            [optionVal]: true
          });
        }
      }, {});
      filterSelected('cities', selectedOptions);
      /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */

      if (!isCategoryPage) {
        setDefaultSelectedFilters('', 'cities', selectedOptions);
      }
    }

    if (query['location_experiences[]']) {
      const selectedCities = typeof query['location_experiences[]'] === 'string' ? [query['location_experiences[]']] : query['location_experiences[]'];
      const selectedOptions = selectedCities.reduce((selected, optionVal) => {
        if (filterCategory.indexOf('location_experiences') > -1) {
          return _objectSpread({}, selected, {
            [optionVal]: false
          });
        } else {
          return _objectSpread({}, selected, {
            [optionVal]: true
          });
        }
      }, {});
      filterSelected('location_experiences', selectedOptions);
      /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */

      if (!isCategoryPage) {
        setDefaultSelectedFilters('', 'location_experiences', selectedOptions);
      }
    }

    if (query['inclusion_category_tags[]']) {
      const selectedCities = typeof query['inclusion_category_tags[]'] === 'string' ? [query['inclusion_category_tags[]']] : query['inclusion_category_tags[]'];
      const selectedOptions = selectedCities.reduce((selected, optionVal) => {
        return _objectSpread({}, selected, {
          [optionVal]: !filterCategory.indexOf('inclusion_category_tags') > -1
        });
      }, {});
      filterSelected('inclusion_category_tags', selectedOptions);
      /* This module is shared b/w listing and category pages.
        *  In listing page, we need to pre-select the default and selected filters in filter menu.
        *  This functionality is not yet implemented on category pages, therefore, adding check. */

      if (!isCategoryPage) {
        setDefaultSelectedFilters('', 'inclusion_category_tags', selectedOptions);
      }
    } // get sort by data


    sortBySelected(query.sort_by ? query.sort_by : defaultSortBy);
  }

  handleFilterUpdate() {
    this.props.toggleFilterView();
    this.applyFilters();
  }

  applyFilters() {
    this.props.filtersApplied();
  }

  filterToggle() {
    this.props.toggleFilterView();
    setTimeout(() => {
      const {
        visible
      } = this.props;
      const getBody = document.querySelector('body');

      if (getBody && visible) {
        getBody.classList.add('filter-opened');
      }
    }, 1000);
  }

  render() {
    const {
      selectedFilters,
      visible,
      selectedFilterCount,
      sortBy,
      resetFilters,
      shouldHideDestinationTypeFilters,
      category,
      filterCategory,
      isCategoryPage
    } = this.props;
    const {
      filters,
      toggleFilterView,
      filterSelected,
      sortBySelected,
      filterCities,
      filterInclusions,
      filterCounts,
      onFilterCheckHandler,
      setDefaultFilters,
      setDefaultSelectedFilters,
      filterDestinationActivities
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row- mb8 sort-filter-con"
    }, _react.default.createElement(_reactStickynode.default, {
      enabled: true,
      top: 0,
      innerZ: 4
    }, _react.default.createElement("div", {
      className: "col-xs-6 p0 sbcw"
    }, _react.default.createElement(_SortBy.default, {
      options: sortBy.options,
      selected: sortBy.selected,
      onSelect: sortBySelected,
      handleFilterUpdate: this.applyFilters,
      category: category
    })), _react.default.createElement("div", {
      className: "col-xs-6 p0 sbcw"
    }, _react.default.createElement("div", {
      onClick: this.filterToggle.bind(this)
    }, " ", _react.default.createElement(_Filters.default, {
      numberOfFilterSelected: selectedFilterCount
    })))), _react.default.createElement("div", {
      className: visible ? '' : 'hide'
    }, _react.default.createElement(_FilterOptions.default, {
      toggleFilterView: toggleFilterView,
      selectedFilters: selectedFilters,
      filterSelected: filterSelected,
      onFilterCheckHandler: onFilterCheckHandler,
      filters: filters,
      handleFilterUpdate: this.handleFilterUpdate,
      resetFilters: resetFilters,
      shouldHideDestinationTypeFilters: shouldHideDestinationTypeFilters,
      filterCities: filterCities,
      filterCounts: filterCounts,
      filterInclusions: filterInclusions,
      filterDestinationActivities: filterDestinationActivities,
      filterCategory: filterCategory,
      isCategoryPage: isCategoryPage,
      setDefaultFilters: setDefaultFilters,
      setDefaultSelectedFilters: setDefaultSelectedFilters
    })));
  }

};
SortAndFilter.propTypes = {
  selectedFilters: _propTypes.default.object,
  filters: _propTypes.default.object,
  visible: _propTypes.default.bool,
  toggleFilterView: _propTypes.default.func.isRequired,
  filtersApplied: _propTypes.default.func.isRequired,
  filterSelected: _propTypes.default.func.isRequired,
  sortBySelected: _propTypes.default.func.isRequired,
  location: _propTypes.default.object.isRequired,
  selectedFilterCount: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.object.isRequired,
  resetFilters: _propTypes.default.func.isRequired,
  category: _propTypes.default.string,
  isCategoryPage: _propTypes.default.bool,
  shouldHideDestinationTypeFilters: _propTypes.default.bool,
  filterCities: _propTypes.default.array,
  filterInclusions: _propTypes.default.array,
  filterCounts: _propTypes.default.object,
  filterCategory: _propTypes.default.array,
  filterDestinationActivities: _propTypes.default.array,
  onFilterCheckHandler: _propTypes.default.func,
  setDefaultFilters: _propTypes.default.func,
  setDefaultSelectedFilters: _propTypes.default.func
};
SortAndFilter.defaultProps = {
  selectedFilters: {},
  filters: {},
  visible: false,
  category: 'Tour',
  shouldHideDestinationTypeFilters: false,
  filterCities: [],
  filterInclusions: [],
  filterDestinationActivities: [],
  filterCounts: {},
  filterCategory: [],
  onFilterCheckHandler: () => {},
  isCategoryPage: false,
  setDefaultFilters: () => {},
  setDefaultSelectedFilters: () => {}
};
var _default = SortAndFilter;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/SortFilters/SortAndFilter.scss":
/*!***************************************************************!*\
  !*** ./app/components/Listing/SortFilters/SortAndFilter.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sort-filter-con": "_92dIt",
	"sticky-outer-wrapper": "_1yTlU",
	"active": "_2O2yf",
	"sticky-inner-wrapper": "_21IBe",
	"sort-by-listing-container": "_2Gc34",
	"sort-by-listing": "_1HD1u",
	"sort-by-listing-view": "_2uu3u",
	"sort-by-icon": "_1IxKy",
	"filter-by-listing-view": "_3tKMj",
	"no-filter-selected": "_3mvgn",
	"selected-filters": "_12z1G"
};

/***/ }),

/***/ "./app/components/Listing/SortFilters/SortBy.js":
/*!******************************************************!*\
  !*** ./app/components/Listing/SortFilters/SortBy.js ***!
  \******************************************************/
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

__webpack_require__(/*! ./SortAndFilter.scss */ "./app/components/Listing/SortFilters/SortAndFilter.scss");

var _segmentEvents = __webpack_require__(/*! ../../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Filters = ({
  options,
  selected,
  onSelect,
  handleFilterUpdate,
  category
}) => {
  const handleChange = event => {
    (0, _segmentEvents.trackSegment)({
      event: _segmentEvents.SORT_CLICKED,
      section: 'Sort List',
      object: '',
      cta: event.target.name,
      value: _segmentEvents.DEFAULT_VALUE,
      category: `Destination:${category}`,
      label: event.target.name,
      destination_id: ''
    });
    onSelect(event.target.value); // REVISIT, wanna call this action after previous one

    setTimeout(handleFilterUpdate, 200);
  };

  const sortOptions = () => Object.keys(options).map(opt => _react.default.createElement("option", {
    key: opt,
    value: opt
  }, options[opt]));

  return _react.default.createElement("div", {
    className: "row row- relative sort-by-listing-container"
  }, _react.default.createElement("div", {
    className: "pl48 relative sort-by-listing-view sbcw"
  }, _react.default.createElement("span", {
    className: "sort-by-icon"
  }, _react.default.createElement(_Icon.SortIcon, null)), _react.default.createElement("p", null, "Sort by"), _react.default.createElement("p", {
    className: "pfc2 f10"
  }, options[selected])), _react.default.createElement("select", {
    id: "sort_by_filter",
    className: "sort-by-listing",
    onChange: handleChange,
    value: selected,
    name: options[selected]
  }, sortOptions()), _react.default.createElement("label", {
    htmlFor: "sort_by_filter",
    className: "hidden_element"
  }, "sort by"));
};

Filters.propTypes = {
  options: _propTypes.default.object.isRequired,
  selected: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  handleFilterUpdate: _propTypes.default.func.isRequired,
  category: _propTypes.default.string.isRequired
};
var _default = Filters;
exports.default = _default;

/***/ }),

/***/ "./app/containers/Listing/FilterView.js":
/*!**********************************************!*\
  !*** ./app/containers/Listing/FilterView.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _listing = __webpack_require__(/*! ../../actions/listing */ "./app/actions/listing.js");

var _filterview = __webpack_require__(/*! actions/filterview */ "./app/actions/filterview.js");

var _SortAndFilter = _interopRequireDefault(__webpack_require__(/*! components/Listing/SortFilters/SortAndFilter */ "./app/components/Listing/SortFilters/SortAndFilter.js"));

var _filters = __webpack_require__(/*! reducers/listing/filters */ "./app/reducers/listing/filters.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const modifyFilterCities = citiesArr => citiesArr.map(city => _objectSpread({}, city, {
  value: city.name,
  title: city.name
}));

const modifyFilterInclusions = inclusions => inclusions.map(inclusion => _objectSpread({}, inclusion, {
  value: inclusion.id,
  title: inclusion.name
}));

var _default = (0, _reactRedux.connect)(state => ({
  visible: state.listing.filters.isVisible,
  shouldHideDestinationTypeFilters: state.listing.filters.shouldHideDestinationTypeFilters,
  filterCities: modifyFilterCities(state.listing.packages.filterCities || []),
  filterInclusions: modifyFilterInclusions(state.listing.packages.filterInclusions || []),
  filterCounts: state.listing.filterCounts.filterCounts,
  filterDestinationActivities: state.listing.packages.filterDestinationActivities
}), (dispatch, ownProps) => ({
  toggleFilterView: () => {
    dispatch((0, _listing.toggleFilterView)());
  },
  filterSelected: (filter, filterOptions) => {
    dispatch((0, _filterview.filterSelected)(filter, filterOptions, ownProps.isCategoryPage || false));
  },
  sortBySelected: sortByValue => {
    dispatch((0, _filterview.sortByApplied)(sortByValue));
  },
  resetFilters: () => {
    dispatch((0, _filterview.resetFilters)());
  },
  setDefaultSelectedFilters: (type, filterId, filterValue) => {
    dispatch((0, _filters.setDefaultSelectedFilters)(type, filterId, filterValue, ownProps.isCategoryPage || false));
  },
  setDefaultFilters: () => {
    dispatch((0, _filters.setDefaultFilters)(ownProps.isCategoryPage || false));
  }
}))(_SortAndFilter.default);

exports.default = _default;

/***/ }),

/***/ "./app/utils/filter.js":
/*!*****************************!*\
  !*** ./app/utils/filter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParamName = void 0;

const getParamName = filterName => {
  if (filterName.indexOf('[') > -1) {
    return filterName.substr(0, filterName.indexOf('['));
  }

  return filterName;
};

exports.getParamName = getParamName;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0dlbmVyaWMvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvR2VuZXJpYy9TdGFyUmF0aW5nQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvR2VuZXJpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xvYWRNb3JlUGFja2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Mb2FkTW9yZVBhY2thZ2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Tb3J0RmlsdGVycy9GaWx0ZXJPcHRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvU29ydEZpbHRlcnMvRmlsdGVyT3B0aW9ucy5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvU29ydEZpbHRlcnMvRmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1NvcnRGaWx0ZXJzL1NtYXJ0RmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvU29ydEZpbHRlcnMvU29ydEFuZEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1NvcnRGaWx0ZXJzL1NvcnRBbmRGaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1NvcnRGaWx0ZXJzL1NvcnRCeS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9MaXN0aW5nL0ZpbHRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzL2ZpbHRlci5qcyJdLCJuYW1lcyI6WyJMb3ZlSWNvbkNvbiIsImdsYW1vcm91cyIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImRpc3BsYXkiLCJNYWRlV2l0aCIsImRpdiIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImNvbG9yIiwidmVydGljYWxBbGlnbiIsIkZvb3RlciIsImlzSG9tZVBhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiQ2hlY2tib3giLCJDb21wb25lbnQiLCJ0b2dnbGVDaGVja2JveENoYW5nZSIsImhhbmRsZU9uQ2hhbmdlIiwiaWQiLCJwcm9wcyIsInJlbmRlciIsImlzQ2hlY2tlZCIsInRpdGxlIiwidmFsdWUiLCJuYW1lIiwiZGlzYWJsZWQiLCJjb3VudCIsInVuZGVmaW5lZCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwibnVtYmVyIiwiU3RhclJhdGluZ0NoZWNrYm94IiwiTnVtYmVyIiwiTG9hZE1vcmVQYWNrYWdlcyIsInBhY2thZ2VzUmVtYWluaW5nIiwibG9hZE1vcmVQYWNrYWdlcyIsImN1cnJlbnRQYWdlIiwibG9hZGluZyIsImhhbmRsZUxvYWRNb3JlIiwicGFnZU51bWJlciIsIkZpbHRlck9wdGlvbnMiLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwiZmlsdGVySGlkZSIsImJpbmQiLCJ0b2dnbGVGaWx0ZXJWaWV3IiwiZ2V0Qm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldERlZmF1bHRGaWx0ZXJzIiwib25GaWx0ZXJDaGVja0hhbmRsZXIiLCJzZWxlY3RlZEZpbHRlcnMiLCJmaWx0ZXJzIiwiZmlsdGVyU2VsZWN0ZWQiLCJoYW5kbGVGaWx0ZXJVcGRhdGUiLCJyZXNldEZpbHRlcnMiLCJzaG91bGRIaWRlRGVzdGluYXRpb25UeXBlRmlsdGVycyIsImZpbHRlckNpdGllcyIsImZpbHRlckluY2x1c2lvbnMiLCJmaWx0ZXJDb3VudHMiLCJmaWx0ZXJDYXRlZ29yeSIsImlzQ2F0ZWdvcnlQYWdlIiwiZmlsdGVyRGVzdGluYXRpb25BY3Rpdml0aWVzIiwiYXBwbHlGaWx0ZXJzIiwiZm9ybVN1Ym1pdEV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVGaWx0ZXIiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiayIsImxlbmd0aCIsImluZGV4T2YiLCJwYXJhbXNOYW1lIiwidGFnIiwibWFwIiwia2V5IiwicmVuZGVyQ2l0eUZpbHRlcnMiLCJoYW5kbGVSZXNldEZpbHRlciIsImV2ZW50IiwicmVuZGVySW5jbHVzaW9uRmlsdGVycyIsInJlbmRlckV4cGVyaWVuY2VGaWx0ZXJzIiwidG90YWxfZW50cmllcyIsIm9iamVjdCIsImFycmF5IiwiU29ydEJ5IiwibnVtYmVyT2ZGaWx0ZXJTZWxlY3RlZCIsImZpbHRlckNsYXNzIiwiaXNGaWx0ZXJEaXNhYmxlIiwib3B0aW9uIiwiZmlsdGVyQ291bnRLZXkiLCJwcmljZV9yYW5nZXNfODBfMDAwX19fNTBfMDAwXzAwMCIsInByaWNlX3Jhbmdlc184MF8wMDBfX18xXzAwXzAwMCIsInByaWNlX3Jhbmdlc18xXzAwXzAwMF9fXzJfMDBfMDAwIiwicHJpY2VfcmFuZ2VzXzJfMDBfMDAwX19fNTBfMDAwXzAwMCIsIlNtYXJ0RmlsdGVyIiwib3B0aW9uVmFsdWUiLCJzZWxlY3RlZEZpZWxkcyIsIm9wdGlvbnMiLCJjcmVhdGVFbGVtZW50IiwiR2VuZXJpY0NvbXBvbmVudHMiLCJkaXNwbGF5VHlwZSIsImFzc2lnbiIsIm9uZU9mVHlwZSIsInBhcnNlUXVlcnkiLCJyZXF1aXJlIiwiZmlsdGVyQnlQYXJhbU5hbWUiLCJmaWx0ZXJzRGF0YSIsInJlcyIsImZvckVhY2giLCJmaWx0ZXJJZCIsInJlZHVjZSIsImZpbHRlck9wdGlvbnMiLCJTb3J0QW5kRmlsdGVyIiwiZmlsdGVyVG9nZ2xlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzb3J0QnlTZWxlY3RlZCIsInNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnMiLCJkZWZhdWx0U29ydEJ5IiwicXVlcnkiLCJwYXJzZSIsImV4dHJhY3QiLCJsb2NhdGlvbiIsInNlYXJjaCIsImNhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJwYXJhbSIsInNlbGVjdGVkT3B0aW9ucyIsInNlbGVjdGVkIiwib3B0aW9uVmFsIiwiQ0FURUdPUllfRklMVEVSIiwiREVTVElOQVRJT05fRklMVEVSIiwic2VsZWN0ZWRDaXRpZXMiLCJzb3J0X2J5IiwiZmlsdGVyc0FwcGxpZWQiLCJzZXRUaW1lb3V0IiwidmlzaWJsZSIsImFkZCIsInNlbGVjdGVkRmlsdGVyQ291bnQiLCJzb3J0QnkiLCJGaWx0ZXJzIiwib25TZWxlY3QiLCJoYW5kbGVDaGFuZ2UiLCJTT1JUX0NMSUNLRUQiLCJzZWN0aW9uIiwiY3RhIiwidGFyZ2V0IiwiREVGQVVMVF9WQUxVRSIsImxhYmVsIiwiZGVzdGluYXRpb25faWQiLCJzb3J0T3B0aW9ucyIsIm9wdCIsIm1vZGlmeUZpbHRlckNpdGllcyIsImNpdGllc0FyciIsImNpdHkiLCJtb2RpZnlGaWx0ZXJJbmNsdXNpb25zIiwiaW5jbHVzaW9ucyIsImluY2x1c2lvbiIsInN0YXRlIiwibGlzdGluZyIsImlzVmlzaWJsZSIsInBhY2thZ2VzIiwiZGlzcGF0Y2giLCJvd25Qcm9wcyIsInNvcnRCeVZhbHVlIiwidHlwZSIsImZpbHRlclZhbHVlIiwiZ2V0UGFyYW1OYW1lIiwiZmlsdGVyTmFtZSIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBRUEsTUFBTUEsY0FBY0MsbUJBQVVDLElBQVYsQ0FBZTtBQUNqQ0MsU0FBTyxNQUQwQjtBQUVqQ0MsVUFBUSxNQUZ5QjtBQUdqQ0MsVUFBUSxPQUh5QjtBQUlqQ0MsV0FBUztBQUp3QixDQUFmLENBQXBCOztBQU9BLE1BQU1DLFdBQVdOLG1CQUFVTyxHQUFWLENBQWM7QUFDN0JKLFVBQVEsTUFEcUI7QUFFN0JLLGNBQVksTUFG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LFVBQVA7QUFDRCxDQUxNIiwiZmlsZSI6ImRlc3RpbmF0aW9uLWxpc3Rpbmd+bGlzdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvb3RlckxpbmtzIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmtzJztcbmltcG9ydCBBZGRyZXNzVFQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQWRkcmVzc1RUJztcbmltcG9ydCBDb3B5UmlnaHQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQ29weVJpZ2h0JztcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxMaW5rcyc7XG5cbmltcG9ydCB7IExvdmVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IExvdmVJY29uQ29uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzIwcHgnLFxuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbWFyZ2luOiAnMCA4cHgnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbn0pO1xuXG5jb25zdCBNYWRlV2l0aCA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbGluZUhlaWdodDogJzIwcHgnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBjb2xvcjogJyNmZmZmZmYnLFxuICAnJiA+IHAnOiB7XG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICB9XG59KTtcblxuY29uc3QgRm9vdGVyID0gKHsgaXNIb21lUGFnZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdhdF9mb290ZXIgcm93IHJvdy0gcGJjMyBwOCc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0MCBwYjAnPlxuICAgICAgPEZvb3RlckxpbmtzIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0OCBtYjI0Jz5cbiAgICAgIDxBZGRyZXNzVFQgaXNIb21lUGFnZT17aXNIb21lUGFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjRcIj5cbiAgICAgIDxTb2NpYWxMaW5rcyAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlclwiPlxuICAgICAgPE1hZGVXaXRoIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgZmxleEZ1bGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9jayBhdF9tYWRlbG92ZVwiPk1hZGUgd2l0aDwvcD5cbiAgICAgICAgPExvdmVJY29uQ29uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+PExvdmVJY29uIC8+PC9Mb3ZlSWNvbkNvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9ja1wiPmluIEluZGlhPC9wPlxuICAgICAgPC9NYWRlV2l0aD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgdGV4dC1yaWdodFwiPjxDb3B5UmlnaHQgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBpc0hvbWVQYWdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNIb21lUGFnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgdG9nZ2xlQ2hlY2tib3hDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVPbkNoYW5nZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaGFuZGxlT25DaGFuZ2UoaWQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLnByb3BzLmlzQ2hlY2tlZCB8fCBmYWxzZTtcbiAgICBjb25zdCB7IHRpdGxlLCB2YWx1ZSwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwMCBvcHRpb24tb3ZlcmZsb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgaWQ9e2BmaWx0ZXJfJHtuYW1lfV8ke3ZhbHVlfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlQ2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JyZWFrLWFsbCcgaHRtbEZvcj17YGZpbHRlcl8ke25hbWV9XyR7dmFsdWV9YH0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY291bnQgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXRfY291bnQgaGlkZSBpYmxvY2sgcGwwIHA4JyA+W3t0aGlzLnByb3BzLmNvdW50fV08L3NwYW4+IDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpc0NoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGhhbmRsZU9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTdGFyUmF0aW5ncyBmcm9tICdjb21wb25lbnRzL1Jldmlldy9TdGFyUmF0aW5ncyc7XG5cbmNsYXNzIFN0YXJSYXRpbmdDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgdG9nZ2xlQ2hlY2tib3hDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVPbkNoYW5nZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaGFuZGxlT25DaGFuZ2UoaWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLnByb3BzLmlzQ2hlY2tlZCB8fCBmYWxzZTtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwMFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGlkPXtgZmlsdGVyXyR7bmFtZX1fJHt2YWx1ZX1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJvdyByb3ctXCIgaHRtbEZvcj17YGZpbHRlcl8ke25hbWV9XyR7dmFsdWV9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGVmdFwiPlxuICAgICAgICAgICAgPFN0YXJSYXRpbmdzXG4gICAgICAgICAgICAgIGlkPXtgbGFiZWxfJHtuYW1lfV8ke3ZhbHVlfWB9XG4gICAgICAgICAgICAgIHJhdGluZz17TnVtYmVyKHZhbHVlKX1cbiAgICAgICAgICAgICAgdG90YWw9ezV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY291bnQgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2F0X2NvdW50IGhpZGUnPlt7dGhpcy5wcm9wcy5jb3VudH1dPC9zcGFuPiA6bnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU3RhclJhdGluZ0NoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpc0NoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGhhbmRsZU9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFyUmF0aW5nQ2hlY2tib3g7XG4iLCJpbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XG5pbXBvcnQgU3RhclJhdGluZ0NoZWNrYm94IGZyb20gJy4vU3RhclJhdGluZ0NoZWNrYm94JztcblxuZXhwb3J0IHtcbiAgQ2hlY2tib3gsXG4gIFN0YXJSYXRpbmdDaGVja2JveFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICAnLi9Mb2FkTW9yZVBhY2thZ2VzLnNjc3MnO1xuXG5jb25zdCBMb2FkTW9yZVBhY2thZ2VzID0gKHsgcGFja2FnZXNSZW1haW5pbmcsIGxvYWRNb3JlUGFja2FnZXMsIGN1cnJlbnRQYWdlLCB0aXRsZSwgbG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gcGFnZU51bWJlciA9PiAoKSA9PiB7XG4gICAgbG9hZE1vcmVQYWNrYWdlcyhwYWdlTnVtYmVyKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17KHBhY2thZ2VzUmVtYWluaW5nID4gMCkgPyAnJyA6ICdoaWRlJ30+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlKGN1cnJlbnRQYWdlICsgMSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1sb2FkLW1vcmUtZnVsbCBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAge2xvYWRpbmcgP1xuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvYWRpbmctZG90c1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZy1kb3QtMSBsb2FkaW5nLWRvdC1kYXJrXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmctZG90LTIgbG9hZGluZy1kb3QtZGFya1wiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nLWRvdC0zIGxvYWRpbmctZG90LWRhcmtcIiAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA6XG4gICAgICAgICAgYExvYWQgTW9yZSAoJHtwYWNrYWdlc1JlbWFpbmluZ30gJHt0aXRsZX0pYFxuICAgICAgICB9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkTW9yZVBhY2thZ2VzLnByb3BUeXBlcyA9IHtcbiAgcGFja2FnZXNSZW1haW5pbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbG9hZE1vcmVQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY3VycmVudFBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZE1vcmVQYWNrYWdlcztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbi1sb2FkLW1vcmUtZnVsbFwiOiBcIl8xbEZPZFwiXG59OyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFNtYXJ0RmlsdGVyIGZyb20gJy4vU21hcnRGaWx0ZXInO1xuaW1wb3J0IHsgZ2V0UGFyYW1OYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmlsdGVyJztcblxuaW1wb3J0ICcuL0ZpbHRlck9wdGlvbnMuc2Nzcyc7XG5cbmltcG9ydCB7XG4gIENsb3NlRGFya1xufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNsYXNzIEZpbHRlck9wdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZmlsdGVySGlkZSA9IHRoaXMuZmlsdGVySGlkZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZmlsdGVySGlkZSgpIHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUZpbHRlclZpZXcoKTtcbiAgICBjb25zdCBnZXRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGdldEJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLW9wZW5lZCcpO1xuICAgIHRoaXMucHJvcHMuc2V0RGVmYXVsdEZpbHRlcnMoKTtcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hlY2tIYW5kbGVyKCk7XG4gIH07XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qge1xuICAgIHNlbGVjdGVkRmlsdGVycywgZmlsdGVycywgZmlsdGVyU2VsZWN0ZWQsIGhhbmRsZUZpbHRlclVwZGF0ZSwgcmVzZXRGaWx0ZXJzLFxuICAgICBzaG91bGRIaWRlRGVzdGluYXRpb25UeXBlRmlsdGVycywgZmlsdGVyQ2l0aWVzLCBmaWx0ZXJJbmNsdXNpb25zLCBmaWx0ZXJDb3VudHMsIGZpbHRlckNhdGVnb3J5LCBvbkZpbHRlckNoZWNrSGFuZGxlciwgaXNDYXRlZ29yeVBhZ2UsIGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllc1xuICB9ID0gdGhpcy5wcm9wcztcblxuICBjb25zdCBhcHBseUZpbHRlcnMgPSAoZm9ybVN1Ym1pdEV2ZW50KSA9PiB7XG4gICAgZm9ybVN1Ym1pdEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlRmlsdGVyVXBkYXRlKCk7XG4gICAgY29uc3QgZ2V0Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBnZXRCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlci1vcGVuZWQnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVGaWx0ZXIgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKVxuICAgIC5maWx0ZXIoayA9PlxuICAgICAgKGZpbHRlckluY2x1c2lvbnMubGVuZ3RoID8gayAhPT0gJzQxJyA6IHRydWUpICYmXG4gICAgICAoayAhPT0gJzM3JyB8fCAhc2hvdWxkSGlkZURlc3RpbmF0aW9uVHlwZUZpbHRlcnMpICYmXG4gICAgICAoZmlsdGVyQ2F0ZWdvcnkuaW5kZXhPZihnZXRQYXJhbU5hbWUoZmlsdGVyc1trXS5wYXJhbXNOYW1lKSkgPT09IC0xKSAmJlxuICAgICAgKCFmaWx0ZXJzW2tdLnRhZylcbiAgICApXG4gICAgLm1hcChrZXkgPT4gKFxuICAgICAgICA8U21hcnRGaWx0ZXJcbiAgICAgICAgICBrZXk9e2ZpbHRlcnNba2V5XS5pZH1cbiAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17c2VsZWN0ZWRGaWx0ZXJzW2ZpbHRlcnNba2V5XS5pZF19XG4gICAgICAgICAgZmlsdGVyU2VsZWN0ZWQ9e2ZpbHRlclNlbGVjdGVkfVxuICAgICAgICAgIG9uRmlsdGVyQ2hlY2tIYW5kbGVyPXtvbkZpbHRlckNoZWNrSGFuZGxlcn1cbiAgICAgICAgICBmaWx0ZXJDb3VudHM9e2ZpbHRlckNvdW50c31cbiAgICAgICAgICB7Li4uZmlsdGVyc1trZXldfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgICk7XG5cbiAgY29uc3QgcmVuZGVyQ2l0eUZpbHRlcnMgPSBmaWx0ZXJDaXRpZXMubGVuZ3RoICYmXG4gIGZpbHRlckNhdGVnb3J5LmluZGV4T2YoJ2NpdGllcycpID09PSAtMSA/XG4gICAgICA8U21hcnRGaWx0ZXJcbiAgICAgICAga2V5PSdjaXRpZXMnXG4gICAgICAgIHNlbGVjdGVkRmllbGRzPXtzZWxlY3RlZEZpbHRlcnNbJ2NpdGllcyddfVxuICAgICAgICBmaWx0ZXJTZWxlY3RlZD17ZmlsdGVyU2VsZWN0ZWR9XG4gICAgICAgIGZpbHRlckNvdW50cz17ZmlsdGVyQ291bnRzfVxuICAgICAgICBvcHRpb25zPXtmaWx0ZXJDaXRpZXN9XG4gICAgICAgIHBhcmFtc05hbWU9J2NpdGllc1tdJ1xuICAgICAgICBkaXNwbGF5VHlwZT0nQ2hlY2tib3gnXG4gICAgICAgIGlkPSdjaXRpZXMnXG4gICAgICAgIHRpdGxlPSdDaXRpZXMnXG4gICAgICAgIG9uRmlsdGVyQ2hlY2tIYW5kbGVyPXtvbkZpbHRlckNoZWNrSGFuZGxlcn1cbiAgICAgIC8+IDogbnVsbDtcblxuICBjb25zdCBoYW5kbGVSZXNldEZpbHRlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVzZXRGaWx0ZXJzKCk7XG4gICAgb25GaWx0ZXJDaGVja0hhbmRsZXIoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJJbmNsdXNpb25GaWx0ZXJzID0gZmlsdGVySW5jbHVzaW9ucy5sZW5ndGggJiZcbiAgZmlsdGVyQ2F0ZWdvcnkuaW5kZXhPZignaW5jbHVzaW9ucycpID09PSAtMSA/XG4gICAgICA8U21hcnRGaWx0ZXJcbiAgICAgICAga2V5PSdpbmNsdXNpb25fY2F0ZWdvcnlfdGFncydcbiAgICAgICAgc2VsZWN0ZWRGaWVsZHM9e3NlbGVjdGVkRmlsdGVyc1snaW5jbHVzaW9uX2NhdGVnb3J5X3RhZ3MnXX1cbiAgICAgICAgZmlsdGVyU2VsZWN0ZWQ9e2ZpbHRlclNlbGVjdGVkfVxuICAgICAgICBmaWx0ZXJDb3VudHM9e2ZpbHRlckNvdW50c31cbiAgICAgICAgb3B0aW9ucz17ZmlsdGVySW5jbHVzaW9uc31cbiAgICAgICAgcGFyYW1zTmFtZT0naW5jbHVzaW9uX2NhdGVnb3J5X3RhZ3NbXSdcbiAgICAgICAgZGlzcGxheVR5cGU9J0NoZWNrYm94J1xuICAgICAgICBpZD0naW5jbHVzaW9uX2NhdGVnb3J5X3RhZ3MnXG4gICAgICAgIHRpdGxlPSdJbmNsdXNpb25zJ1xuICAgICAgICBvbkZpbHRlckNoZWNrSGFuZGxlcj17b25GaWx0ZXJDaGVja0hhbmRsZXJ9XG4gICAgICAvPiA6IG51bGw7XG5cbiAgY29uc3QgcmVuZGVyRXhwZXJpZW5jZUZpbHRlcnMgPSBmaWx0ZXJEZXN0aW5hdGlvbkFjdGl2aXRpZXMubGVuZ3RoID9cbiAgICAgIDxTbWFydEZpbHRlclxuICAgICAgICBrZXk9J2xvY2F0aW9uX2V4cGVyaWVuY2VzJ1xuICAgICAgICBzZWxlY3RlZEZpZWxkcz17c2VsZWN0ZWRGaWx0ZXJzWydsb2NhdGlvbl9leHBlcmllbmNlcyddfVxuICAgICAgICBmaWx0ZXJTZWxlY3RlZD17ZmlsdGVyU2VsZWN0ZWR9XG4gICAgICAgIGZpbHRlckNvdW50cz17ZmlsdGVyQ291bnRzfVxuICAgICAgICBvcHRpb25zPXtmaWx0ZXJEZXN0aW5hdGlvbkFjdGl2aXRpZXN9XG4gICAgICAgIHBhcmFtc05hbWU9J2xvY2F0aW9uX2V4cGVyaWVuY2VzW10nXG4gICAgICAgIGRpc3BsYXlUeXBlPSdDaGVja2JveCdcbiAgICAgICAgaWQ9J2xvY2F0aW9uX2V4cGVyaWVuY2VzJ1xuICAgICAgICB0aXRsZT0nUG9wdWxhciBFeHBlcmllbmNlcydcbiAgICAgICAgb25GaWx0ZXJDaGVja0hhbmRsZXI9e29uRmlsdGVyQ2hlY2tIYW5kbGVyfVxuICAgICAgLz4gOiBudWxsO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGZpeGVkIHoxNSBzYmN3IGZpbHRlcnMtb3B0aW9ucy1jb25cIiA+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17YXBwbHlGaWx0ZXJzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwMTUgZmlsdGVycy1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0yIHBsMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1maWx0ZXJzXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZmlsdGVySGlkZS5iaW5kKHRoaXMpfT48Q2xvc2VEYXJrIC8+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwbDhcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRlci10aXRsZVwiPkZpbHRlcnM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBwbDAgcHIwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlc2V0LWJ1dHRvbiBmcmlnaHRcIiBvbkNsaWNrPXtoYW5kbGVSZXNldEZpbHRlcn0+UkVTRVQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjNVwiPlxuICAgICAgICAgIHtjcmVhdGVGaWx0ZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHNiYzVcIj5cbiAgICAgICAgICB7cmVuZGVySW5jbHVzaW9uRmlsdGVyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjNSBleHBGaWx0ZXIgaGlkZVwiPlxuICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlRmlsdGVyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjNVwiPlxuICAgICAgICAgIHtyZW5kZXJDaXR5RmlsdGVyc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcDggc2JjdyBiMCBsMCByMCBiczRcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0NhdGVnb3J5UGFnZSA/XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGxcIiB0eXBlPVwic3VibWl0XCI+QXBwbHkgRmlsdGVyczwvYnV0dG9uPiA6XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGxcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAge2BWaWV3ICR7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudHMudG90YWxfZW50cmllcyA+IDAgPyBmaWx0ZXJDb3VudHMudG90YWxfZW50cmllcyA6ICcwJ1xuICAgICAgICAgICAgICAgIH0gJHtmaWx0ZXJDb3VudHMudG90YWxfZW50cmllcyA+IDEgPyAnUGFja2FnZXMnIDogJ1BhY2thZ2UnfWB9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG59O1xuXG5GaWx0ZXJPcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgZmlsdGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZEZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRvZ2dsZUZpbHRlclZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJTZWxlY3RlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRmlsdGVyVXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVzZXRGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG91bGRIaWRlRGVzdGluYXRpb25UeXBlRmlsdGVyczogUHJvcFR5cGVzLmJvb2wsXG4gIGZpbHRlckNpdGllczogUHJvcFR5cGVzLmFycmF5LFxuICBmaWx0ZXJJbmNsdXNpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGZpbHRlckNvdW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25GaWx0ZXJDaGVja0hhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICBpc0NhdGVnb3J5UGFnZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZpbHRlckNhdGVnb3J5OiBQcm9wVHlwZXMuYXJyYXksXG4gIGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllczogUHJvcFR5cGVzLmFycmF5LFxuICBzZXREZWZhdWx0RmlsdGVyczogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblxuRmlsdGVyT3B0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGVkRmlsdGVyczoge30sXG4gIHRvZ2dsZUZpbHRlclZpZXc6ICgpID0+IHt9LFxuICBoYW5kbGVGaWx0ZXJVcGRhdGU6ICgpID0+IHt9LFxuICBzaG91bGRIaWRlRGVzdGluYXRpb25UeXBlRmlsdGVyczogZmFsc2UsXG4gIGZpbHRlckNpdGllczogW10sXG4gIGZpbHRlckluY2x1c2lvbnM6IFtdLFxuICBmaWx0ZXJEZXN0aW5hdGlvbkFjdGl2aXRpZXM6IFtdLFxuICBmaWx0ZXJDb3VudHM6IHt9LFxuICBvbkZpbHRlckNoZWNrSGFuZGxlcjogKCkgPT4ge30sXG4gIGlzQ2F0ZWdvcnlQYWdlOiBmYWxzZSxcbiAgZmlsdGVyQ2F0ZWdvcnk6IFtdLFxuICBzZXREZWZhdWx0RmlsdGVyczogKCkgPT4ge31cbn07XG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJPcHRpb25zO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlsdGVycy1oZWFkZXJcIjogXCJfMTVBUFJcIixcblx0XCJmaWx0ZXJzLW9wdGlvbnMtY29uXCI6IFwiXzNyUnM1XCIsXG5cdFwiY2xvc2UtZmlsdGVyc1wiOiBcIl8xY2FPVVwiLFxuXHRcImZpbHRlci10aXRsZVwiOiBcIl9mNnlJSVwiLFxuXHRcInJlc2V0LWJ1dHRvblwiOiBcIl81Nkd3WVwiLFxuXHRcImZpbHRlci1ib3hcIjogXCJfMVA5VVNcIixcblx0XCJmaWx0ZXItYm94LW9wdGlvbnNcIjogXCJfbUx4aFRcIixcblx0XCJmaWx0ZXItb3B0aW9ucy10eXBlLW9uZVwiOiBcIl9qYUJReVwiLFxuXHRcImZpbHRlci1vcHRpb25zLXR5cGUtdHdvXCI6IFwiXzd6cjVGXCIsXG5cdFwiaG90ZWwtcmF0aW5nLXN0YXJcIjogXCJfQlF3LV9cIixcblx0XCJob3RlbC1yYXRpbmctc3Rhci1saXN0XCI6IFwiXzF3OG1sXCIsXG5cdFwiZmlsdGVyLW9wdGlvbnMtdHlwZS10aHJlZVwiOiBcIl8zdHVOeFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgRmlsdGVySWNvblxufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cblxuaW1wb3J0ICcuL1NvcnRBbmRGaWx0ZXIuc2Nzcyc7XG5cbmNvbnN0IFNvcnRCeSA9ICh7IG51bWJlck9mRmlsdGVyU2VsZWN0ZWQgfSkgPT4ge1xuICBjb25zdCBmaWx0ZXJDbGFzcyA9IChudW1iZXJPZkZpbHRlclNlbGVjdGVkKCkgPyAnc2VsZWN0ZWQtZmlsdGVycycgOiAnJyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwbDQ4IGZpbHRlci1ieS1saXN0aW5nLXZpZXdcIiA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvcnQtYnktaWNvblwiPjxGaWx0ZXJJY29uIC8+PC9zcGFuPlxuICAgICAgICA8cD5GaWx0ZXJzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2BmMTAgbm8tZmlsdGVyLXNlbGVjdGVkICR7ZmlsdGVyQ2xhc3N9YH0+e251bWJlck9mRmlsdGVyU2VsZWN0ZWQoKX0gc2VsZWN0ZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNvcnRCeS5wcm9wVHlwZXMgPSB7XG4gIG51bWJlck9mRmlsdGVyU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Tb3J0QnkuZGVmYXVsdFByb3BzID0ge1xuICBudW1iZXJPZkZpbHRlclNlbGVjdGVkOiAoKSA9PiB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IFNvcnRCeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IF9pc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0ICogYXMgR2VuZXJpY0NvbXBvbmVudHMgZnJvbSAnY29tcG9uZW50cy9HZW5lcmljJztcbmltcG9ydCAnLi9GaWx0ZXJPcHRpb25zLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgaXNGaWx0ZXJEaXNhYmxlID0gKG9wdGlvbiwgZmlsdGVyQ291bnRzLCBrZXkpID0+IHtcbiAgaWYgKGZpbHRlckNvdW50c1tvcHRpb24uZmlsdGVyQ291bnRLZXldID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGtleSA9PT0gMzkgJiYgb3B0aW9uLmZpbHRlckNvdW50S2V5ID09PSAncHJpY2VfcmFuZ2VzXzgwXzAwMF9fXzUwXzAwMF8wMDAnKSB7XG4gICAgaWYgKHR5cGVvZiAoZmlsdGVyQ291bnRzLnByaWNlX3Jhbmdlc184MF8wMDBfX181MF8wMDBfMDAwKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICBmaWx0ZXJDb3VudHMucHJpY2VfcmFuZ2VzXzgwXzAwMF9fXzFfMDBfMDAwICtcbiAgICAgIGZpbHRlckNvdW50cy5wcmljZV9yYW5nZXNfMV8wMF8wMDBfX18yXzAwXzAwMCArXG4gICAgICBmaWx0ZXJDb3VudHMucHJpY2VfcmFuZ2VzXzJfMDBfMDAwX19fNTBfMDAwXzAwMCA9PT0gMCk7XG4gICAgfVxuICAgIHJldHVybiAoZmlsdGVyQ291bnRzLnByaWNlX3Jhbmdlc184MF8wMDBfX18xXzAwXzAwMCA9PT0gMCk7XG4gIH1cbiAgaWYgKGtleSA9PT0gJ2NpdGllcycpIHtcbiAgICByZXR1cm4gKGZpbHRlckNvdW50c1tgY2l0eV8ke29wdGlvbi5pZH1gXSA9PT0gMCk7XG4gIH1cbiAgaWYoa2V5ID09PSAnbG9jYXRpb25fZXhwZXJpZW5jZXMnKSB7XG4gICAgcmV0dXJuIChmaWx0ZXJDb3VudHNbYGRlc3RpbmF0aW9uX2FjdGl2aXR5XyR7b3B0aW9uLmlkfWBdID09PSAwKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jbGFzcyBTbWFydEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZU9uQ2hhbmdlID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uVmFsdWUgPSB7fTtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZEZpZWxkc1tpZF0pIHtcbiAgICAgIG9wdGlvblZhbHVlW2lkXSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25WYWx1ZVtpZF0gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmZpbHRlclNlbGVjdGVkKHRoaXMucHJvcHMuaWQsIHsgLi4udGhpcy5wcm9wcy5zZWxlY3RlZEZpZWxkcywgLi4ub3B0aW9uVmFsdWUgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoZWNrSGFuZGxlcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChcbiAgICAgIG9wdGlvbiA9PlxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgR2VuZXJpY0NvbXBvbmVudHNbdGhpcy5wcm9wcy5kaXNwbGF5VHlwZV0sXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMucGFyYW1zTmFtZSxcbiAgICAgICAgICAgIGtleTogb3B0aW9uLmlkLFxuICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2U6IHRoaXMuaGFuZGxlT25DaGFuZ2UsXG4gICAgICAgICAgICBpc0NoZWNrZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRGaWVsZHNbb3B0aW9uLmlkXSB8fCBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBpc0ZpbHRlckRpc2FibGUob3B0aW9uLCB0aGlzLnByb3BzLmZpbHRlckNvdW50cywgdGhpcy5wcm9wcy5pZCksXG4gICAgICAgICAgICBjb3VudDogdGhpcy5wcm9wcy5pZCA9PT0gJ2NpdGllcycgP1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlckNvdW50c1tgY2l0eV8ke29wdGlvbi5pZH1gXSA6XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuaWQgPT09ICdsb2NhdGlvbl9leHBlcmllbmNlcycgP1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyQ291bnRzW2BkZXN0aW5hdGlvbl9hY3Rpdml0eV8ke29wdGlvbi5pZH1gXSA6XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyQ291bnRzW29wdGlvbi5maWx0ZXJDb3VudEtleV1cbiAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG1iOCBwYjggcGwxNSBwcjE1IHB0MTUgc2Jjd1wiIGtleT17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBwYjhcIj57dGhpcy5wcm9wcy50aXRsZX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gZmlsdGVyLWJveC1vcHRpb25zXCI+XG4gICAgICAgICAge29wdGlvbnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuU21hcnRGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBwYXJhbXNOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpc3BsYXlUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZEZpZWxkczogUHJvcFR5cGVzLm9iamVjdCxcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlclxuICBdKS5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBmaWx0ZXJTZWxlY3RlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZmlsdGVyQ291bnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkZpbHRlckNoZWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblNtYXJ0RmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VsZWN0ZWRGaWVsZHM6IHt9LFxuICBmaWx0ZXJDb3VudHM6IHt9LFxuICBvbkZpbHRlckNoZWNrSGFuZGxlcjogKCkgPT4ge31cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU21hcnRGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XG5cbmltcG9ydCBTb3J0QnkgZnJvbSAnLi9Tb3J0QnknO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnLi9GaWx0ZXJzJztcbmltcG9ydCBGaWx0ZXJPcHRpb25zIGZyb20gJy4vRmlsdGVyT3B0aW9ucyc7XG5pbXBvcnQgeyBnZXRQYXJhbU5hbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9maWx0ZXInO1xuXG5pbXBvcnQgJy4vU29ydEFuZEZpbHRlci5zY3NzJztcbmltcG9ydCB7IGdldENvb2tpZSwgU09SVF9CWV9DT09LSUUgfSBmcm9tICdoZWxwZXJzL0Zvcm1EYXRhRm9ybWF0dGVyJztcbmltcG9ydCB7IENBVEVHT1JZX0ZJTFRFUiwgREVTVElOQVRJT05fRklMVEVSIH0gZnJvbSAncmVkdWNlcnMvbGlzdGluZy9maWx0ZXJzJztcblxuY29uc3QgcGFyc2VRdWVyeSA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5mdW5jdGlvbiBmaWx0ZXJCeVBhcmFtTmFtZShmaWx0ZXJzRGF0YSkge1xuICBjb25zdCByZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMoZmlsdGVyc0RhdGEpLmZvckVhY2goKGZpbHRlcklkKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGZpbHRlcnNEYXRhW2ZpbHRlcklkXS5vcHRpb25zIHx8IFtdO1xuICAgIHJlc1tmaWx0ZXJzRGF0YVtmaWx0ZXJJZF0ucGFyYW1zTmFtZV0gPSBvcHRpb25zLnJlZHVjZSgoZmlsdGVyT3B0aW9ucywgb3B0aW9uKSA9PiAoe1xuICAgICAgLi4uZmlsdGVyT3B0aW9ucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgLi4uZmlsdGVyT3B0aW9ucy5vcHRpb25zLFxuICAgICAgICBbb3B0aW9uLnZhbHVlXTogb3B0aW9uLmlkXG4gICAgICB9XG4gICAgfSksIHsgaWQ6IGZpbHRlcklkLCBvcHRpb25zOiB7fSB9KTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5cbmNsYXNzIFNvcnRBbmRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuYXBwbHlGaWx0ZXJzID0gdGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlclVwZGF0ZSA9IHRoaXMuaGFuZGxlRmlsdGVyVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXJUb2dnbGUgPSB0aGlzLmZpbHRlclRvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaWx0ZXJTZWxlY3RlZCwgc29ydEJ5U2VsZWN0ZWQsIGlzQ2F0ZWdvcnlQYWdlLCBmaWx0ZXJDYXRlZ29yeSwgc2V0RGVmYXVsdEZpbHRlcnMsIHNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHsgZmlsdGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAvKkRlZmF1bHQgc29ydEJ5IHZhbHVlIGZvciBsaXN0aW5nIHBhZ2UgaXMgJ3BvcHVsYXJpdHknIGZvciB3aGljaCB0aGUga2V5IGlzICdwb3B1bGFyaXR5JywgYW5kIGZvciBjYXRlZ29yeSBwYWdlcyBpcyBhbHNvIHBvcHVsYXJpdHkgKGZvciB3aGljaCBCRSBrZXkgaXNcbiAgICAqICdyZWxldmVuY2VfYXNjJykgKi9cbiAgICBjb25zdCBkZWZhdWx0U29ydEJ5ID0gaXNDYXRlZ29yeVBhZ2UgPyAncmVsZXZlbmNlX2FzYycgOiAncG9wdWxhcml0eSc7XG4gICAgY29uc3QgcXVlcnkgPSBwYXJzZVF1ZXJ5LnBhcnNlKHBhcnNlUXVlcnkuZXh0cmFjdCh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCkpO1xuICAgIGZpbHRlcnMgPSBmaWx0ZXJCeVBhcmFtTmFtZShmaWx0ZXJzKTtcbiAgICAvLyBnZXQgZmlsdGVycyBkYXRhXG4gICAgaWYgKHRoaXMucHJvcHMuY2F0ZWdvcnkgIT09ICdUb3VyJykge1xuICAgICAgcXVlcnkuY2F0ZWdvcnkgPSBxdWVyeS5jYXRlZ29yeSB8fCB0aGlzLnByb3BzLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1twYXJhbV07XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSAodHlwZW9mIHF1ZXJ5W3BhcmFtXSA9PT0gJ3N0cmluZycpID8gW3F1ZXJ5W3BhcmFtXV0gOiBxdWVyeVtwYXJhbV07XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG9wdGlvbnMucmVkdWNlKChzZWxlY3RlZCwgb3B0aW9uVmFsKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbHRlckNhdGVnb3J5LmluZGV4T2YoZ2V0UGFyYW1OYW1lKHBhcmFtKSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIFtmaWx0ZXIub3B0aW9uc1tvcHRpb25WYWxdXTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaWx0ZXIub3B0aW9uc1tvcHRpb25WYWxdKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgW2ZpbHRlci5vcHRpb25zW29wdGlvblZhbF1dOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgZmlsdGVyU2VsZWN0ZWQoZmlsdGVyLmlkLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgICAvKiBUaGlzIG1vZHVsZSBpcyBzaGFyZWQgYi93IGxpc3RpbmcgYW5kIGNhdGVnb3J5IHBhZ2VzLlxuICAgICAgICAqICBJbiBsaXN0aW5nIHBhZ2UsIHdlIG5lZWQgdG8gcHJlLXNlbGVjdCB0aGUgZGVmYXVsdCBhbmQgc2VsZWN0ZWQgZmlsdGVycyBpbiBmaWx0ZXIgbWVudS5cbiAgICAgICAgKiAgVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQgb24gY2F0ZWdvcnkgcGFnZXMsIHRoZXJlZm9yZSwgYWRkaW5nIGNoZWNrLiAqL1xuICAgICAgICBpZiAoIWlzQ2F0ZWdvcnlQYWdlICYmIGZpbHRlci5pZCAhPT0gQ0FURUdPUllfRklMVEVSICYmIGZpbHRlci5pZCAhPT0gREVTVElOQVRJT05fRklMVEVSKSB7XG4gICAgICAgICAgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVycygnJywgZmlsdGVyLmlkLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHF1ZXJ5WydjaXRpZXNbXSddKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZENpdGllcyA9ICh0eXBlb2YgcXVlcnlbJ2NpdGllc1tdJ10gPT09ICdzdHJpbmcnKSA/IFtxdWVyeVsnY2l0aWVzW10nXV0gOiBxdWVyeVsnY2l0aWVzW10nXTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHNlbGVjdGVkQ2l0aWVzLnJlZHVjZSgoc2VsZWN0ZWQsIG9wdGlvblZhbCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVyQ2F0ZWdvcnkuaW5kZXhPZignY2l0aWVzJykgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZCxcbiAgICAgICAgICAgIFtvcHRpb25WYWxdOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkLFxuICAgICAgICAgICAgW29wdGlvblZhbF06IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LCB7fSk7XG4gICAgICBmaWx0ZXJTZWxlY3RlZCgnY2l0aWVzJywgc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgIC8qIFRoaXMgbW9kdWxlIGlzIHNoYXJlZCBiL3cgbGlzdGluZyBhbmQgY2F0ZWdvcnkgcGFnZXMuXG4gICAgICAgICogIEluIGxpc3RpbmcgcGFnZSwgd2UgbmVlZCB0byBwcmUtc2VsZWN0IHRoZSBkZWZhdWx0IGFuZCBzZWxlY3RlZCBmaWx0ZXJzIGluIGZpbHRlciBtZW51LlxuICAgICAgICAqICBUaGlzIGZ1bmN0aW9uYWxpdHkgaXMgbm90IHlldCBpbXBsZW1lbnRlZCBvbiBjYXRlZ29yeSBwYWdlcywgdGhlcmVmb3JlLCBhZGRpbmcgY2hlY2suICovXG4gICAgICBpZiAoIWlzQ2F0ZWdvcnlQYWdlKSB7XG4gICAgICAgIHNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnMoJycsICdjaXRpZXMnLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocXVlcnlbJ2xvY2F0aW9uX2V4cGVyaWVuY2VzW10nXSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRDaXRpZXMgPSAodHlwZW9mIHF1ZXJ5Wydsb2NhdGlvbl9leHBlcmllbmNlc1tdJ10gPT09ICdzdHJpbmcnKSA/IFtxdWVyeVsnbG9jYXRpb25fZXhwZXJpZW5jZXNbXSddXSA6IHF1ZXJ5Wydsb2NhdGlvbl9leHBlcmllbmNlc1tdJ107XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBzZWxlY3RlZENpdGllcy5yZWR1Y2UoKHNlbGVjdGVkLCBvcHRpb25WYWwpID0+IHtcbiAgICAgICAgaWYgKGZpbHRlckNhdGVnb3J5LmluZGV4T2YoJ2xvY2F0aW9uX2V4cGVyaWVuY2VzJykgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zZWxlY3RlZCxcbiAgICAgICAgICAgIFtvcHRpb25WYWxdOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGVkLFxuICAgICAgICAgICAgW29wdGlvblZhbF06IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LCB7fSk7XG4gICAgICBmaWx0ZXJTZWxlY3RlZCgnbG9jYXRpb25fZXhwZXJpZW5jZXMnLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgLyogVGhpcyBtb2R1bGUgaXMgc2hhcmVkIGIvdyBsaXN0aW5nIGFuZCBjYXRlZ29yeSBwYWdlcy5cbiAgICAgICAgKiAgSW4gbGlzdGluZyBwYWdlLCB3ZSBuZWVkIHRvIHByZS1zZWxlY3QgdGhlIGRlZmF1bHQgYW5kIHNlbGVjdGVkIGZpbHRlcnMgaW4gZmlsdGVyIG1lbnUuXG4gICAgICAgICogIFRoaXMgZnVuY3Rpb25hbGl0eSBpcyBub3QgeWV0IGltcGxlbWVudGVkIG9uIGNhdGVnb3J5IHBhZ2VzLCB0aGVyZWZvcmUsIGFkZGluZyBjaGVjay4gKi9cbiAgICAgIGlmICghaXNDYXRlZ29yeVBhZ2UpIHtcbiAgICAgICAgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVycygnJywgJ2xvY2F0aW9uX2V4cGVyaWVuY2VzJywgc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHF1ZXJ5WydpbmNsdXNpb25fY2F0ZWdvcnlfdGFnc1tdJ10pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ2l0aWVzID0gKHR5cGVvZiBxdWVyeVsnaW5jbHVzaW9uX2NhdGVnb3J5X3RhZ3NbXSddID09PSAnc3RyaW5nJykgPyBbcXVlcnlbJ2luY2x1c2lvbl9jYXRlZ29yeV90YWdzW10nXV0gOiBxdWVyeVsnaW5jbHVzaW9uX2NhdGVnb3J5X3RhZ3NbXSddO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gc2VsZWN0ZWRDaXRpZXMucmVkdWNlKChzZWxlY3RlZCwgb3B0aW9uVmFsKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VsZWN0ZWQsXG4gICAgICAgICAgW29wdGlvblZhbF06ICFmaWx0ZXJDYXRlZ29yeS5pbmRleE9mKCdpbmNsdXNpb25fY2F0ZWdvcnlfdGFncycpID4gLTFcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcbiAgICAgIGZpbHRlclNlbGVjdGVkKCdpbmNsdXNpb25fY2F0ZWdvcnlfdGFncycsIHNlbGVjdGVkT3B0aW9ucyk7XG4gICAgICAvKiBUaGlzIG1vZHVsZSBpcyBzaGFyZWQgYi93IGxpc3RpbmcgYW5kIGNhdGVnb3J5IHBhZ2VzLlxuICAgICAgICAqICBJbiBsaXN0aW5nIHBhZ2UsIHdlIG5lZWQgdG8gcHJlLXNlbGVjdCB0aGUgZGVmYXVsdCBhbmQgc2VsZWN0ZWQgZmlsdGVycyBpbiBmaWx0ZXIgbWVudS5cbiAgICAgICAgKiAgVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQgb24gY2F0ZWdvcnkgcGFnZXMsIHRoZXJlZm9yZSwgYWRkaW5nIGNoZWNrLiAqL1xuICAgICAgaWYgKCFpc0NhdGVnb3J5UGFnZSkge1xuICAgICAgICBzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzKCcnLCAnaW5jbHVzaW9uX2NhdGVnb3J5X3RhZ3MnLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBnZXQgc29ydCBieSBkYXRhXG4gICAgc29ydEJ5U2VsZWN0ZWQocXVlcnkuc29ydF9ieSA/IHF1ZXJ5LnNvcnRfYnkgOiBkZWZhdWx0U29ydEJ5KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlclVwZGF0ZSgpIHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUZpbHRlclZpZXcoKTtcbiAgICB0aGlzLmFwcGx5RmlsdGVycygpO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXJzKCkge1xuICAgIHRoaXMucHJvcHMuZmlsdGVyc0FwcGxpZWQoKTtcbiAgfVxuXG4gIGZpbHRlclRvZ2dsZSgpIHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUZpbHRlclZpZXcoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGdldEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBpZiAoZ2V0Qm9keSAmJiB2aXNpYmxlKSB7XG4gICAgICAgIGdldEJvZHkuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLW9wZW5lZCcpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkRmlsdGVycywgdmlzaWJsZSwgc2VsZWN0ZWRGaWx0ZXJDb3VudCwgc29ydEJ5LCByZXNldEZpbHRlcnMsXG4gICAgICBzaG91bGRIaWRlRGVzdGluYXRpb25UeXBlRmlsdGVycywgY2F0ZWdvcnksIGZpbHRlckNhdGVnb3J5LCBpc0NhdGVnb3J5UGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGZpbHRlcnMsXG4gICAgICB0b2dnbGVGaWx0ZXJWaWV3LFxuICAgICAgZmlsdGVyU2VsZWN0ZWQsXG4gICAgICBzb3J0QnlTZWxlY3RlZCxcbiAgICAgIGZpbHRlckNpdGllcyxcbiAgICAgIGZpbHRlckluY2x1c2lvbnMsXG4gICAgICBmaWx0ZXJDb3VudHMsXG4gICAgICBvbkZpbHRlckNoZWNrSGFuZGxlcixcbiAgICAgIHNldERlZmF1bHRGaWx0ZXJzLFxuICAgICAgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVycyxcbiAgICAgIGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtYjggc29ydC1maWx0ZXItY29uXCI+XG4gICAgICA8U3RpY2t5IGVuYWJsZWQ9e3RydWV9IHRvcD17MH0gaW5uZXJaPXs0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwMCBzYmN3XCI+XG4gICAgICAgICAgPFNvcnRCeVxuICAgICAgICAgICAgb3B0aW9ucz17c29ydEJ5Lm9wdGlvbnN9XG4gICAgICAgICAgICBzZWxlY3RlZD17c29ydEJ5LnNlbGVjdGVkfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3NvcnRCeVNlbGVjdGVkfVxuICAgICAgICAgICAgaGFuZGxlRmlsdGVyVXBkYXRlPXt0aGlzLmFwcGx5RmlsdGVyc31cbiAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwMCBzYmN3XCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmZpbHRlclRvZ2dsZS5iaW5kKHRoaXMpfT4geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgfVxuICAgICAgICAgICAgPEZpbHRlcnMgbnVtYmVyT2ZGaWx0ZXJTZWxlY3RlZD17c2VsZWN0ZWRGaWx0ZXJDb3VudH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0aWNreT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsodmlzaWJsZSkgPyAnJyA6ICdoaWRlJ30+XG4gICAgICAgIDxGaWx0ZXJPcHRpb25zXG4gICAgICAgICAgdG9nZ2xlRmlsdGVyVmlldz17dG9nZ2xlRmlsdGVyVmlld31cbiAgICAgICAgICBzZWxlY3RlZEZpbHRlcnM9e3NlbGVjdGVkRmlsdGVyc31cbiAgICAgICAgICBmaWx0ZXJTZWxlY3RlZD17ZmlsdGVyU2VsZWN0ZWR9XG4gICAgICAgICAgb25GaWx0ZXJDaGVja0hhbmRsZXI9e29uRmlsdGVyQ2hlY2tIYW5kbGVyfVxuICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgaGFuZGxlRmlsdGVyVXBkYXRlPXt0aGlzLmhhbmRsZUZpbHRlclVwZGF0ZX1cbiAgICAgICAgICByZXNldEZpbHRlcnM9e3Jlc2V0RmlsdGVyc31cbiAgICAgICAgICBzaG91bGRIaWRlRGVzdGluYXRpb25UeXBlRmlsdGVycz17c2hvdWxkSGlkZURlc3RpbmF0aW9uVHlwZUZpbHRlcnN9XG4gICAgICAgICAgZmlsdGVyQ2l0aWVzPXtmaWx0ZXJDaXRpZXN9XG4gICAgICAgICAgZmlsdGVyQ291bnRzPXtmaWx0ZXJDb3VudHN9XG4gICAgICAgICAgZmlsdGVySW5jbHVzaW9ucz17ZmlsdGVySW5jbHVzaW9uc31cbiAgICAgICAgICBmaWx0ZXJEZXN0aW5hdGlvbkFjdGl2aXRpZXM9e2ZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllc31cbiAgICAgICAgICBmaWx0ZXJDYXRlZ29yeT17ZmlsdGVyQ2F0ZWdvcnl9XG4gICAgICAgICAgaXNDYXRlZ29yeVBhZ2U9e2lzQ2F0ZWdvcnlQYWdlfVxuICAgICAgICAgIHNldERlZmF1bHRGaWx0ZXJzPXtzZXREZWZhdWx0RmlsdGVyc31cbiAgICAgICAgICBzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzPXtzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5Tb3J0QW5kRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWRGaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdG9nZ2xlRmlsdGVyVmlldzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZmlsdGVyc0FwcGxpZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZpbHRlclNlbGVjdGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzb3J0QnlTZWxlY3RlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRGaWx0ZXJDb3VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc29ydEJ5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJlc2V0RmlsdGVyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzQ2F0ZWdvcnlQYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvdWxkSGlkZURlc3RpbmF0aW9uVHlwZUZpbHRlcnM6IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXJDaXRpZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZmlsdGVySW5jbHVzaW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBmaWx0ZXJDb3VudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlckNhdGVnb3J5OiBQcm9wVHlwZXMuYXJyYXksXG4gIGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllczogUHJvcFR5cGVzLmFycmF5LFxuICBvbkZpbHRlckNoZWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNldERlZmF1bHRGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVyczogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblNvcnRBbmRGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZEZpbHRlcnM6IHt9LFxuICBmaWx0ZXJzOiB7fSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGNhdGVnb3J5OiAnVG91cicsXG4gIHNob3VsZEhpZGVEZXN0aW5hdGlvblR5cGVGaWx0ZXJzOiBmYWxzZSxcbiAgZmlsdGVyQ2l0aWVzOiBbXSxcbiAgZmlsdGVySW5jbHVzaW9uczogW10sXG4gIGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllczogW10sXG4gIGZpbHRlckNvdW50czoge30sXG4gIGZpbHRlckNhdGVnb3J5OiBbXSxcbiAgb25GaWx0ZXJDaGVja0hhbmRsZXI6ICgpID0+IHt9LFxuICBpc0NhdGVnb3J5UGFnZTogZmFsc2UsXG4gIHNldERlZmF1bHRGaWx0ZXJzOiAoKSA9PiB7fSxcbiAgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVyczogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRBbmRGaWx0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzb3J0LWZpbHRlci1jb25cIjogXCJfOTJkSXRcIixcblx0XCJzdGlja3ktb3V0ZXItd3JhcHBlclwiOiBcIl8xeVRsVVwiLFxuXHRcImFjdGl2ZVwiOiBcIl8yTzJ5ZlwiLFxuXHRcInN0aWNreS1pbm5lci13cmFwcGVyXCI6IFwiXzIxSUJlXCIsXG5cdFwic29ydC1ieS1saXN0aW5nLWNvbnRhaW5lclwiOiBcIl8yR2MzNFwiLFxuXHRcInNvcnQtYnktbGlzdGluZ1wiOiBcIl8xSEQxdVwiLFxuXHRcInNvcnQtYnktbGlzdGluZy12aWV3XCI6IFwiXzJ1dTN1XCIsXG5cdFwic29ydC1ieS1pY29uXCI6IFwiXzFJeEt5XCIsXG5cdFwiZmlsdGVyLWJ5LWxpc3Rpbmctdmlld1wiOiBcIl8zdEtNalwiLFxuXHRcIm5vLWZpbHRlci1zZWxlY3RlZFwiOiBcIl8zbXZnblwiLFxuXHRcInNlbGVjdGVkLWZpbHRlcnNcIjogXCJfMTJ6MUdcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIFNvcnRJY29uIGFzIFNvcnRCeUljb25cbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgJy4vU29ydEFuZEZpbHRlci5zY3NzJztcbmltcG9ydCB7XG4gIHRyYWNrU2VnbWVudCxcbiAgREVGQVVMVF9WQUxVRSxcbiAgU09SVF9DTElDS0VEXG59IGZyb20gXCIuLi8uLi8uLi9hY3Rpb25zL3NlZ21lbnRFdmVudHNcIjtcblxuY29uc3QgRmlsdGVycyA9ICh7IG9wdGlvbnMsIHNlbGVjdGVkLCBvblNlbGVjdCwgaGFuZGxlRmlsdGVyVXBkYXRlLCBjYXRlZ29yeSB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogU09SVF9DTElDS0VELFxuICAgICAgc2VjdGlvbjogJ1NvcnQgTGlzdCcsXG4gICAgICBvYmplY3Q6ICcnLFxuICAgICAgY3RhOiBldmVudC50YXJnZXQubmFtZSxcbiAgICAgIHZhbHVlOiBERUZBVUxUX1ZBTFVFLFxuICAgICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbjoke2NhdGVnb3J5fWAsXG4gICAgICBsYWJlbDogZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICBkZXN0aW5hdGlvbl9pZDogJycsXG4gICAgfSk7XG4gICAgb25TZWxlY3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyBSRVZJU0lULCB3YW5uYSBjYWxsIHRoaXMgYWN0aW9uIGFmdGVyIHByZXZpb3VzIG9uZVxuICAgIHNldFRpbWVvdXQoaGFuZGxlRmlsdGVyVXBkYXRlLCAyMDApO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRPcHRpb25zID0gKCkgPT4gKFxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcChvcHQgPT4gKFxuICAgICAgPG9wdGlvbiBrZXk9e29wdH0gdmFsdWU9e29wdH0+e29wdGlvbnNbb3B0XX08L29wdGlvbj5cbiAgICApKVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgc29ydC1ieS1saXN0aW5nLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbDQ4IHJlbGF0aXZlIHNvcnQtYnktbGlzdGluZy12aWV3IHNiY3dcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic29ydC1ieS1pY29uXCI+PFNvcnRCeUljb24gLz48L3NwYW4+XG4gICAgICAgIDxwPlNvcnQgYnk8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBmYzIgZjEwXCI+e29wdGlvbnNbc2VsZWN0ZWRdfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlbGVjdCBpZD1cInNvcnRfYnlfZmlsdGVyXCIgY2xhc3NOYW1lPVwic29ydC1ieS1saXN0aW5nXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3NlbGVjdGVkfSBuYW1lPXtvcHRpb25zW3NlbGVjdGVkXX0+XG4gICAgICAgIHtzb3J0T3B0aW9ucygpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInNvcnRfYnlfZmlsdGVyXCIgY2xhc3NOYW1lPVwiaGlkZGVuX2VsZW1lbnRcIj5zb3J0IGJ5PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZpbHRlcnMucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVGaWx0ZXJVcGRhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyVmlldyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdGluZyc7XG5pbXBvcnQgeyBmaWx0ZXJTZWxlY3RlZCwgc29ydEJ5QXBwbGllZCwgcmVzZXRGaWx0ZXJzIH0gZnJvbSAnYWN0aW9ucy9maWx0ZXJ2aWV3JztcbmltcG9ydCBTb3J0QW5kRmlsdGVyIGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9Tb3J0RmlsdGVycy9Tb3J0QW5kRmlsdGVyJztcbmltcG9ydCB7IHNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnMsIHNldERlZmF1bHRGaWx0ZXJzIH0gZnJvbSAncmVkdWNlcnMvbGlzdGluZy9maWx0ZXJzJztcblxuY29uc3QgbW9kaWZ5RmlsdGVyQ2l0aWVzID0gY2l0aWVzQXJyID0+IGNpdGllc0Fyci5tYXAoY2l0eSA9PiAoe1xuICAuLi5jaXR5LFxuICB2YWx1ZTogY2l0eS5uYW1lLFxuICB0aXRsZTogY2l0eS5uYW1lXG59KSk7XG5cbmNvbnN0IG1vZGlmeUZpbHRlckluY2x1c2lvbnMgPSBpbmNsdXNpb25zID0+IGluY2x1c2lvbnMubWFwKGluY2x1c2lvbiA9PiAoe1xuICAuLi5pbmNsdXNpb24sXG4gIHZhbHVlOiBpbmNsdXNpb24uaWQsXG4gIHRpdGxlOiBpbmNsdXNpb24ubmFtZVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gIHZpc2libGU6IHN0YXRlLmxpc3RpbmcuZmlsdGVycy5pc1Zpc2libGUsXG4gIHNob3VsZEhpZGVEZXN0aW5hdGlvblR5cGVGaWx0ZXJzOiBzdGF0ZS5saXN0aW5nLmZpbHRlcnMuc2hvdWxkSGlkZURlc3RpbmF0aW9uVHlwZUZpbHRlcnMsXG4gIGZpbHRlckNpdGllczogbW9kaWZ5RmlsdGVyQ2l0aWVzKHN0YXRlLmxpc3RpbmcucGFja2FnZXMuZmlsdGVyQ2l0aWVzIHx8IFtdKSxcbiAgZmlsdGVySW5jbHVzaW9uczogbW9kaWZ5RmlsdGVySW5jbHVzaW9ucyhzdGF0ZS5saXN0aW5nLnBhY2thZ2VzLmZpbHRlckluY2x1c2lvbnMgfHwgW10pLFxuICBmaWx0ZXJDb3VudHM6IHN0YXRlLmxpc3RpbmcuZmlsdGVyQ291bnRzLmZpbHRlckNvdW50cyxcbiAgZmlsdGVyRGVzdGluYXRpb25BY3Rpdml0aWVzOiBzdGF0ZS5saXN0aW5nLnBhY2thZ2VzLmZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllcyxcbn0pLCAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiAoe1xuICB0b2dnbGVGaWx0ZXJWaWV3OiAoKSA9PiB7XG4gICAgZGlzcGF0Y2godG9nZ2xlRmlsdGVyVmlldygpKTtcbiAgfSxcbiAgZmlsdGVyU2VsZWN0ZWQ6IChmaWx0ZXIsIGZpbHRlck9wdGlvbnMpID0+IHtcbiAgICBkaXNwYXRjaChmaWx0ZXJTZWxlY3RlZChmaWx0ZXIsIGZpbHRlck9wdGlvbnMsIG93blByb3BzLmlzQ2F0ZWdvcnlQYWdlIHx8IGZhbHNlKSk7XG4gIH0sXG4gIHNvcnRCeVNlbGVjdGVkOiAoc29ydEJ5VmFsdWUpID0+IHtcbiAgICBkaXNwYXRjaChzb3J0QnlBcHBsaWVkKHNvcnRCeVZhbHVlKSk7XG4gIH0sXG4gIHJlc2V0RmlsdGVyczogKCkgPT4ge1xuICAgIGRpc3BhdGNoKHJlc2V0RmlsdGVycygpKTtcbiAgfSxcbiAgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVyczogKHR5cGUsIGZpbHRlcklkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnModHlwZSwgZmlsdGVySWQsIGZpbHRlclZhbHVlLCBvd25Qcm9wcy5pc0NhdGVnb3J5UGFnZSB8fCBmYWxzZSkpO1xuICB9LFxuICBzZXREZWZhdWx0RmlsdGVyczogKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldERlZmF1bHRGaWx0ZXJzKG93blByb3BzLmlzQ2F0ZWdvcnlQYWdlIHx8IGZhbHNlKSk7XG4gIH1cbn0pKShTb3J0QW5kRmlsdGVyKTtcbiIsImV4cG9ydCBjb25zdCBnZXRQYXJhbU5hbWUgPSBmaWx0ZXJOYW1lID0+IHtcbiAgaWYgKGZpbHRlck5hbWUuaW5kZXhPZignWycpID4gLTEpIHtcbiAgICByZXR1cm4gZmlsdGVyTmFtZS5zdWJzdHIoMCwgZmlsdGVyTmFtZS5pbmRleE9mKCdbJykpO1xuICB9XG4gIHJldHVybiBmaWx0ZXJOYW1lO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=