require("source-map-support").install();
exports.ids = ["city-block-ptv~city-block-ttd"];
exports.modules = {

/***/ "./app-v2/modules/cityBlock/CityBlockFilters.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/cityBlock/CityBlockFilters.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GFilterButton = _glamorous.default.button({
  width: '56px',
  height: '56px',
  bottom: '75px',
  boxShadow: '0 4px 12px #999',
  '& svg': {
    position: 'absolute',
    width: '25px',
    height: '25px'
  }
});

const FilterComponent = ({
  name,
  type,
  className,
  id,
  disabled,
  input,
  checkedComp
}) => {
  return _react.default.createElement("input", _extends({}, input, {
    name: name,
    type: type,
    disabled: disabled,
    id: id,
    className: className,
    defaultChecked: checkedComp
  }));
};

FilterComponent.propTypes = {
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  id: _propTypes.default.number.isRequired,
  disabled: _propTypes.default.bool,
  input: _propTypes.default.object.isRequired,
  checkedComp: _propTypes.default.bool.isRequired
};
let CityBlockFilters = class CityBlockFilters extends _react.Component {
  constructor(props) {
    super(props);

    this.clearFilter = () => {
      const {
        applyFilters,
        handleSubmit,
        tab,
        params,
        resetPath
      } = this.props;
      let url = '';

      if (params.city) {
        url = `/${params.destination}-tourism/${params.city}/${tab}`;
      } else {
        url = `/${params.destination}-tourism/${tab}`;
      }

      return url;
    };

    this.state = {
      isModalOpen: false
    };
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  toggleFilters() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  componentDidMount() {
    this.props.filters.filterCategories && this.props.filters.filterCategories.length && this.props.filters.filterCategories.filter(filter => filter.checked === true).map(filter => this.props.dispatch({
      type: '@@redux-form/CHANGE',
      meta: {
        form: 'cityBlockFiltersList',
        field: filter.destinationSchemeId + 'category',
        touch: false,
        persistentSubmitErrors: false
      },
      payload: filter.checked
    }));
    this.props.filters.filteredCities && this.props.filters.filteredCities.length && this.props.filters.filteredCities.filter(filter => filter.checked === true).map(filter => this.props.dispatch({
      type: '@@redux-form/CHANGE',
      meta: {
        form: 'cityBlockFiltersList',
        field: filter.cityId + 'city',
        touch: false,
        persistentSubmitErrors: false
      },
      payload: filter.checked
    }));
  }

  render() {
    const {
      applyFilters,
      handleSubmit,
      tab,
      params,
      filters,
      resetForm
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement(GFilterButton, {
      onClick: this.toggleFilters,
      className: "overflowh pbc1 radius100 fixed z14 r15 flex alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.FilterIconWhite, null)), _react.default.createElement("form", {
      className: `filter-row-container ${this.state.isModalOpen ? 'cityblockfilterContainer' : 'hide'}`
    }, _react.default.createElement("div", {
      className: "col-xs-12 p0 z15 fixed t0 l0 b0 r0 sbcw cityblockfilterContainer"
    }, _react.default.createElement("div", {
      className: "row row- sbcw filters-options-con"
    }, _react.default.createElement("div", {
      className: "row row- sbcw p15 filters-header"
    }, _react.default.createElement("div", {
      className: "col-xs-2 pl0"
    }, _react.default.createElement("button", {
      onClick: this.toggleFilters,
      className: "close-filters",
      type: "button"
    }, _react.default.createElement(_Icon.CloseDark, null))), _react.default.createElement("div", {
      className: "col-xs-6 pl8"
    }, _react.default.createElement("p", {
      className: "filter-title"
    }, "Filters")), _react.default.createElement("div", {
      className: "col-xs-4 pl0 pr0"
    }, _react.default.createElement("button", {
      type: "button",
      onClick: resetForm,
      className: "reset-button fright"
    }, "RESET"))), _react.default.createElement("div", {
      className: "pt8 sbc5"
    }), _react.default.createElement("div", {
      className: "p15 sbcw filter-row"
    }, _react.default.createElement("h3", {
      className: "destination-type-btn fw7 mb15 relative"
    }, "Filters by Category"), _react.default.createElement("div", {
      className: "row destination-type-body"
    }, filters && filters.filterCategories && filters.filterCategories.map((filter, i) => {
      const name = filter.destinationSchemeId + 'category';
      return _react.default.createElement("div", {
        key: i,
        className: "col-xs-6"
      }, _react.default.createElement(_reduxForm.Field, {
        name: name,
        component: FilterComponent,
        id: filter.destinationSchemeId,
        checkedComp: filter.checked,
        type: "checkbox",
        className: "checkbox-common"
      }), _react.default.createElement("label", {
        className: "ellipsis",
        htmlFor: filter.destinationSchemeId
      }, filter.name));
    })), _react.default.createElement("div", {
      className: "clearfix hide text-right"
    }, _react.default.createElement(_reactRouter.Link, {
      className: "text-uppercase pfc4 fw4 cursorP pt1 f12 mb0 block",
      to: this.clearFilter
    }, "clear"))), _react.default.createElement("div", {
      className: "pt8 sbc5"
    }), filters && filters.filteredCities && _react.default.createElement("div", {
      className: "p15 sbcw filter-row"
    }, _react.default.createElement("h3", {
      className: "destination-type-btn fw7 mb15 relative"
    }, "Filters by City"), _react.default.createElement("div", {
      className: "row destination-type-body"
    }, filters.filteredCities && filters.filteredCities.map((filter, i) => {
      const name = filter.cityId + 'city';
      return _react.default.createElement("div", {
        key: filter.cityId,
        className: "col-xs-6"
      }, _react.default.createElement(_reduxForm.Field, {
        name: name,
        component: FilterComponent,
        id: filter.cityId,
        checkedComp: filter.checked,
        type: "checkbox",
        className: "checkbox-common"
      }), _react.default.createElement("label", {
        className: "ellipsis",
        htmlFor: filter.cityId
      }, filter.name));
    }))), _react.default.createElement("div", {
      className: "fixed p8 sbc5 b0 l0 r0"
    }, _react.default.createElement("button", {
      onClick: handleSubmit,
      className: "btn-filled-pri-large wfull",
      type: "submit"
    }, "Apply Filter"))))));
  }

};
CityBlockFilters.propTypes = {
  filters: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  tab: _propTypes.default.string,
  applyFilters: _propTypes.default.func,
  handleSubmit: _propTypes.default.func,
  resetPath: _propTypes.default.func,
  isModalOpen: _propTypes.default.bool,
  dispatch: _propTypes.default.func.isRequired,
  resetForm: _propTypes.default.func.isRequired
};
CityBlockFilters.defaultProp = {
  tab: '',
  applyFilters: () => {},
  handleSubmit: () => {},
  resetPath: () => {},
  isModalOpen: false
};

var _default = (0, _reduxForm.reduxForm)({
  form: 'cityBlockFiltersList'
})(CityBlockFilters);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/CityTags.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/cityBlock/CityTags.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Ul = _glamorous.default.ul({
  margin: '0',
  padding: '0',
  '& li': {
    marginRight: '3px',
    position: 'relative',
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '24px',
    padding: '3px 15px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0',
    '&:after': {
      position: 'absolute',
      right: '0',
      bottom: '0',
      color: '#24b9f8',
      content: '',
      display: 'block'
    },
    '&:last-child:after': {
      display: 'none'
    }
  }
});

const CityTags = ({
  labels
}) => {
  return _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement(Ul, null, labels && labels.map((label, index) => _react.default.createElement("li", {
    key: index
  }, label))));
};

CityTags.propTypes = {
  labels: _propTypes.default.array
};
CityTags.defaultProps = {
  labels: []
};
var _default = CityTags;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/SmallBanner.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/cityBlock/SmallBanner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OnHover = _glamorous.default.div({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.4)',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
});

const ImgContainer = _glamorous.default.div({
  width: '100%',
  minHeight: '180px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover .onhoverCard': {
    display: 'flex'
  }
});

const ViewDetail = _glamorous.default.span({
  border: '1px solid #fff',
  padding: '14px 35px'
});

const SmallBanner = ({
  imageUrl,
  imagekitUrl,
  imageAlt,
  bannerStyle,
  urlSpotlight
}) => {
  return _react.default.createElement(_reactRouter.Link, {
    to: urlSpotlight,
    className: "block"
  }, _react.default.createElement(ImgContainer, {
    className: "clearfix relative sbc4",
    style: bannerStyle
  }, _react.default.createElement(_Img.default, {
    width: 395,
    height: 200,
    src: imageUrl,
    ikSrc: imagekitUrl,
    alt: imageAlt
  }), _react.default.createElement(OnHover, {
    className: "onhoverCard"
  }, _react.default.createElement(ViewDetail, {
    className: "f14 block sfcw fwb"
  }, "View Details"))));
};

SmallBanner.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  imageAlt: _propTypes.default.string.isRequired,
  bannerStyle: _propTypes.default.object,
  urlSpotlight: _propTypes.default.string.isRequired
};
SmallBanner.defaultProps = {
  bannerStyle: {}
};
var _default = SmallBanner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Guide.js":
/*!****************************************!*\
  !*** ./app-v2/modules/shared/Guide.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Overview = _interopRequireDefault(__webpack_require__(/*! ./Overview */ "./app-v2/modules/shared/Overview.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! ./Heading */ "./app-v2/modules/shared/Heading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ShowMoreContainer = _glamorous.default.div({
  marginTop: '-8px'
});

const Guide = ({
  guide
}) => {
  return _react.default.createElement("div", {
    className: "clearfix sbcw p15"
  }, _react.default.createElement(_Heading.default, _extends({}, guide, {
    type: "main-heading"
  })), _react.default.createElement(_Overview.default, guide));
};

Guide.propTypes = {
  guide: _propTypes.default.object
};
Guide.defaultProps = {
  guide: {}
};
var _default = Guide;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Heading.js":
/*!******************************************!*\
  !*** ./app-v2/modules/shared/Heading.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SubHeading = _glamorous.default.p({
  fontSize: '14px',
  lineHeight: '18px',
  color: '#cbcbcb',
  margin: '4px 0 0 0'
});

const Heading = ({
  data,
  title,
  heading,
  styleHeading,
  styleSubHeading,
  type,
  isViewAllHidden
}) => {
  return _react.default.createElement("div", {
    className: "clearfix mb15"
  }, type === 'main-heading' ? _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc1 fw9 m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null) : _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc3 fwb m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null), data.heading || heading ? _react.default.createElement(SubHeading, {
    style: styleSubHeading,
    className: "f14 mt4 fw4"
  }, data.heading || heading) : null);
};

Heading.propTypes = {
  data: _propTypes.default.object,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  heading: _propTypes.default.string,
  styleHeading: _propTypes.default.object,
  styleSubHeading: _propTypes.default.object,
  isViewAllHidden: _propTypes.default.bool
};
Heading.defaultProps = {
  data: {},
  type: '',
  title: '',
  heading: '',
  styleHeading: {},
  styleSubHeading: {},
  isViewAllHidden: false
};
var _default = Heading;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/NoPackageCard.js":
/*!************************************************!*\
  !*** ./app-v2/modules/shared/NoPackageCard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRequirementsIconDiv = _glamorous.default.div({
  width: '150px',
  height: '158px',
  margin: '0 auto 15px'
});

const NoPackageCard = ({
  destination
}) => {
  const ctaText = 'BUILD YOUR OWN PACKAGE';
  return _react.default.createElement("div", null, _react.default.createElement(GRequirementsIconDiv, {
    className: "relative"
  }, _react.default.createElement(_Icon.Uniquerequirements, null)), _react.default.createElement("p", {
    className: "m0 f18 fw7 pfc3 text-center"
  }, "Your Requirements are unique! "), _react.default.createElement("p", {
    className: "m0 f14 pfc3 mb8 text-center"
  }, "Are you looking to book a similar holiday package?"), _react.default.createElement("p", {
    className: "m0 f14 pfc1 mb8 text-center"
  }, "Our experts would love to create a package just for you."), _react.default.createElement(_FormOneCTA.default, {
    rtProps: {
      to_loc: destination
    }
  }, _react.default.createElement("div", {
    className: "btn-filled-pri-large ripple fw4"
  }, ctaText)));
};

NoPackageCard.propTypes = {
  destination: _propTypes.default.string
};
NoPackageCard.defaultProps = {
  destination: ''
};
var _default = NoPackageCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Overview.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Overview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ./ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const overviewSplitAfterShowMore = overviewMoreText => {
  try {
    return overviewMoreText.replace(/<br \/>|<\/br>/g, '').replace('</span></p>\r\n', '');
  } catch (err) {
    return overviewMoreText;
  }
};

let Overview = class Overview extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.overviewContent = () => {
      const {
        description,
        footerDescription
      } = this.props;
      const desc = description && description.split('\r\n').filter(p => p.length) || [];

      if (!desc.length) {
        return null;
      }

      const footerDesc = footerDescription ? `<br>${footerDescription}` : '';
      return _react.default.createElement(_ShowMore.default, {
        wrapText: parser.parse(desc[0]),
        moreText: parser.parse(overviewSplitAfterShowMore(desc.slice(1).join('\n').concat(footerDesc)))
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row- row-mw"
    }, _react.default.createElement("div", {
      className: "read-more-box"
    }, this.overviewContent()));
  }

};
Overview.defaultProps = {
  footerDescription: '',
  description: ''
};
Overview.propTypes = {
  description: _propTypes.default.string,
  footerDescription: _propTypes.default.string
};
var _default = Overview;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/ShowMore.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/ShowMore.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GreadmoreLabel = _glamorous.default.label({
  '& button.read-more-button': {
    lineHeight: '20px',
    padding: '0'
  }
});

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

let ShowMore = class ShowMore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultOpen
    };
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      checked: false
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.state.checked && this.props.trackSegment({
        cta: 'Read More'
      });
    });
  }

  render() {
    const textLength = 195;
    return _react.default.createElement("div", {
      className: "row row- text-left"
    }, _react.default.createElement("input", {
      type: "checkbox",
      className: "read-more-state",
      checked: this.state.checked,
      id: "post-1"
    }), _react.default.createElement("div", {
      className: `read-more-wrap ${this.props.isDefaultShowMore ? 'p-last-no-margin pfc3 f14p dynamicTextInherit' : ''}`
    }, // TODO: find a better way for truncate the string
    !this.state.checked && this.props.appendText && this.props.wrapText.length >= textLength ? this.props.wrapText + this.props.appendText : this.props.wrapText, _react.default.createElement("span", {
      className: "read-more-target"
    }, this.props.moreText)), this.props.moreText.length > 0 || !(0, _isEmpty2.default)(this.props.moreText) ? _react.default.createElement(GreadmoreLabel, {
      htmlFor: "post-1",
      className: "read-more-trigger relative"
    }, _react.default.createElement("button", {
      className: "read-more-button flex alignCenter spaceBetween relative f12 fw7",
      onClick: this.handleChange
    }, _react.default.createElement("span", {
      className: "flexFull f14 fw7"
    }, this.state.checked ? this.props.showLessText : this.props.showMoreText, this.state.checked), _react.default.createElement(GDownArrowSpan, {
      className: "flex ml8 relative alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : '');
  }

};
ShowMore.propTypes = {
  wrapText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]).isRequired,
  moreText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]),
  showMoreText: _propTypes.default.string,
  showLessText: _propTypes.default.string,
  defaultOpen: _propTypes.default.bool,
  isDefaultShowMore: _propTypes.default.bool,
  trackSegment: _propTypes.default.func,
  appendText: _propTypes.default.string
};
ShowMore.defaultProps = {
  wrapText: '',
  moreText: '',
  showMoreText: 'Read More',
  showLessText: 'Read Less',
  defaultOpen: false,
  isDefaultShowMore: true,
  trackSegment: () => {}
};
var _default = ShowMore;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss":
/*!**********************************************************************!*\
  !*** ./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button-load-more-full": "_1lFOd"
};

/***/ }),

/***/ "./app-v2/modules/shared/loadMorePackages/index.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/shared/loadMorePackages/index.js ***!
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

__webpack_require__(/*! ./LoadMorePackages.scss */ "./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadMorePackages = ({
  packagesRemaining,
  loadMorePackages,
  currentPage,
  title
}) => {
  const handleLoadMore = pageNumber => () => {
    loadMorePackages(pageNumber);
  };

  return _react.default.createElement("div", {
    className: packagesRemaining > 0 ? '' : 'hide'
  }, _react.default.createElement("div", {
    className: "mb15 mt8"
  }, _react.default.createElement("button", {
    onClick: handleLoadMore(currentPage + 1),
    className: "button-load-more-full",
    role: "button"
  }, "Load More (", packagesRemaining, " ", title)));
};

LoadMorePackages.propTypes = {
  packagesRemaining: _propTypes.default.number.isRequired,
  loadMorePackages: _propTypes.default.func.isRequired,
  currentPage: _propTypes.default.number.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = LoadMorePackages;
exports.default = _default;

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svQ2l0eUJsb2NrRmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svQ2l0eVRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2l0eUJsb2NrL1NtYWxsQmFubmVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9HdWlkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvTm9QYWNrYWdlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9sb2FkTW9yZVBhY2thZ2VzL0xvYWRNb3JlUGFja2FnZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvbG9hZE1vcmVQYWNrYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEuanMiXSwibmFtZXMiOlsiR0ZpbHRlckJ1dHRvbiIsImdsYW1vcm91cyIsImJ1dHRvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwiYm94U2hhZG93IiwicG9zaXRpb24iLCJGaWx0ZXJDb21wb25lbnQiLCJuYW1lIiwidHlwZSIsImNsYXNzTmFtZSIsImlkIiwiZGlzYWJsZWQiLCJpbnB1dCIsImNoZWNrZWRDb21wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJvYmplY3QiLCJDaXR5QmxvY2tGaWx0ZXJzIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNsZWFyRmlsdGVyIiwiYXBwbHlGaWx0ZXJzIiwiaGFuZGxlU3VibWl0IiwidGFiIiwicGFyYW1zIiwicmVzZXRQYXRoIiwidXJsIiwiY2l0eSIsImRlc3RpbmF0aW9uIiwic3RhdGUiLCJpc01vZGFsT3BlbiIsInRvZ2dsZUZpbHRlcnMiLCJiaW5kIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImZpbHRlcnMiLCJmaWx0ZXJDYXRlZ29yaWVzIiwibGVuZ3RoIiwiZmlsdGVyIiwiY2hlY2tlZCIsIm1hcCIsImRpc3BhdGNoIiwibWV0YSIsImZvcm0iLCJmaWVsZCIsImRlc3RpbmF0aW9uU2NoZW1lSWQiLCJ0b3VjaCIsInBlcnNpc3RlbnRTdWJtaXRFcnJvcnMiLCJwYXlsb2FkIiwiZmlsdGVyZWRDaXRpZXMiLCJjaXR5SWQiLCJyZW5kZXIiLCJyZXNldEZvcm0iLCJpIiwiZnVuYyIsImRlZmF1bHRQcm9wIiwiVWwiLCJ1bCIsIm1hcmdpbiIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJsaXN0U3R5bGUiLCJib3JkZXIiLCJyaWdodCIsImNvbG9yIiwiY29udGVudCIsIkNpdHlUYWdzIiwibGFiZWxzIiwibGFiZWwiLCJpbmRleCIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiT25Ib3ZlciIsImRpdiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJ0b3AiLCJsZWZ0IiwiSW1nQ29udGFpbmVyIiwibWluSGVpZ2h0Iiwib3ZlcmZsb3ciLCJWaWV3RGV0YWlsIiwic3BhbiIsIlNtYWxsQmFubmVyIiwiaW1hZ2VVcmwiLCJpbWFnZWtpdFVybCIsImltYWdlQWx0IiwiYmFubmVyU3R5bGUiLCJ1cmxTcG90bGlnaHQiLCJTaG93TW9yZUNvbnRhaW5lciIsIm1hcmdpblRvcCIsIkd1aWRlIiwiZ3VpZGUiLCJTdWJIZWFkaW5nIiwicCIsIkhlYWRpbmciLCJkYXRhIiwidGl0bGUiLCJoZWFkaW5nIiwic3R5bGVIZWFkaW5nIiwic3R5bGVTdWJIZWFkaW5nIiwiaXNWaWV3QWxsSGlkZGVuIiwiZm9ySGVhZGluZyIsIkdSZXF1aXJlbWVudHNJY29uRGl2IiwiTm9QYWNrYWdlQ2FyZCIsImN0YVRleHQiLCJ0b19sb2MiLCJwYXJzZXIiLCJQYXJzZXIiLCJvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSIsIm92ZXJ2aWV3TW9yZVRleHQiLCJyZXBsYWNlIiwiZXJyIiwiT3ZlcnZpZXciLCJQdXJlQ29tcG9uZW50Iiwib3ZlcnZpZXdDb250ZW50IiwiZGVzY3JpcHRpb24iLCJmb290ZXJEZXNjcmlwdGlvbiIsImRlc2MiLCJzcGxpdCIsImZvb3RlckRlc2MiLCJwYXJzZSIsInNsaWNlIiwiam9pbiIsImNvbmNhdCIsIkdyZWFkbW9yZUxhYmVsIiwiR0Rvd25BcnJvd1NwYW4iLCJTaG93TW9yZSIsIlJlYWN0IiwiZGVmYXVsdE9wZW4iLCJoYW5kbGVDaGFuZ2UiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyYWNrU2VnbWVudCIsImN0YSIsInRleHRMZW5ndGgiLCJpc0RlZmF1bHRTaG93TW9yZSIsImFwcGVuZFRleHQiLCJ3cmFwVGV4dCIsIm1vcmVUZXh0Iiwic2hvd0xlc3NUZXh0Iiwic2hvd01vcmVUZXh0Iiwib25lT2ZUeXBlIiwiTG9hZE1vcmVQYWNrYWdlcyIsInBhY2thZ2VzUmVtYWluaW5nIiwibG9hZE1vcmVQYWNrYWdlcyIsImN1cnJlbnRQYWdlIiwiaGFuZGxlTG9hZE1vcmUiLCJwYWdlTnVtYmVyIiwiRm9ybU9uZUNUQSIsImhhbmRsZUNsaWNrIiwicnRQcm9wcyIsInRhZyIsImRlYWxzIiwiYnVkZ2V0IiwiYWRtaW5Db21tZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIlNFR01FTlRfQURNSU5fQ09NTUVOVCIsInJ0cmlwUHJvcHMiLCJ0cmlwX2RheXMiLCJjbGlja0hhbmRsZXIiLCJ1cGRhdGVGcm9tT25lUHJvcHMiLCJwdXNoU3RhdGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLE1BQU1BLGdCQUFnQkMsbUJBQVVDLE1BQVYsQ0FBaUI7QUFDckNDLFNBQU8sTUFEOEI7QUFFckNDLFVBQVEsTUFGNkI7QUFHckNDLFVBQVEsTUFINkI7QUFJckNDLGFBQVcsaUJBSjBCO0FBS3JDLFdBQVM7QUFDUEMsY0FBVSxVQURIO0FBRVBKLFdBQU8sTUFGQTtBQUdQQyxZQUFRO0FBSEQ7QUFMNEIsQ0FBakIsQ0FBdEI7O0FBWUEsTUFBTUksa0JBQWtCLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxNQUFSO0FBQWNDLFdBQWQ7QUFBeUJDLElBQXpCO0FBQTZCQyxVQUE3QjtBQUF1Q0MsT0FBdkM7QUFBOENDO0FBQTlDLENBQUQsS0FBaUU7QUFDdkYsU0FDRSxtREFBV0QsS0FBWDtBQUFrQixVQUFNTCxJQUF4QjtBQUE4QixVQUFNQyxJQUFwQztBQUEwQyxjQUFVRyxRQUFwRDtBQUE4RCxRQUFJRCxFQUFsRTtBQUFzRSxlQUFXRCxTQUFqRjtBQUE0RixvQkFBZ0JJO0FBQTVHLEtBREY7QUFHRCxDQUpEOztBQU1BUCxnQkFBZ0JRLFNBQWhCLEdBQTRCO0FBQzFCUCxRQUFNUSxtQkFBVUMsTUFEVTtBQUUxQlIsUUFBTU8sbUJBQVVDLE1BRlU7QUFHMUJQLGFBQVdNLG1CQUFVQyxNQUhLO0FBSTFCTixNQUFJSyxtQkFBVUUsTUFBVixDQUFpQkMsVUFKSztBQUsxQlAsWUFBVUksbUJBQVVJLElBTE07QUFNMUJQLFNBQU9HLG1CQUFVSyxNQUFWLENBQWlCRixVQU5FO0FBTzFCTCxlQUFhRSxtQkFBVUksSUFBVixDQUFlRDtBQVBGLENBQTVCO0lBV01HLGdCLEdBQU4sTUFBTUEsZ0JBQU4sU0FBK0JDLGdCQUEvQixD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VUM7QUFaRCxDLFNBZVpnRSxZLEdBQWU7QUFDcEJtRixXQUFTLEVBRFc7QUFFcEJXLGdCQUFjLE1BQU0sQ0FBRSxDQUZGO0FBR3BCRyxZQUFVLEVBSFU7QUFJcEJaLFNBQU8sS0FKYTtBQUtwQkQsT0FBSyxFQUxlO0FBTXBCRSxVQUFRO0FBTlksQzs7ZUFnRFQseUJBQVEsSUFBUixFQUFjO0FBQUVTLHFEQUFGO0FBQXNCQztBQUF0QixDQUFkLEVBQWlEZixVQUFqRCxDIiwiZmlsZSI6ImNpdHktYmxvY2stcHR2fmNpdHktYmxvY2stdHRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgQ2xvc2VEYXJrLCBGaWx0ZXJJY29uV2hpdGUgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IEdGaWx0ZXJCdXR0b24gPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgd2lkdGg6ICc1NnB4JyxcbiAgaGVpZ2h0OiAnNTZweCcsXG4gIGJvdHRvbTogJzc1cHgnLFxuICBib3hTaGFkb3c6ICcwIDRweCAxMnB4ICM5OTknLFxuICAnJiBzdmcnOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcyNXB4JyxcbiAgICBoZWlnaHQ6ICcyNXB4JyxcbiAgfVxufSk7XG5cbmNvbnN0IEZpbHRlckNvbXBvbmVudCA9ICh7IG5hbWUsIHR5cGUsIGNsYXNzTmFtZSwgaWQsIGRpc2FibGVkLCBpbnB1dCwgY2hlY2tlZENvbXAgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxpbnB1dCB7Li4uaW5wdXR9IG5hbWU9e25hbWV9IHR5cGU9e3R5cGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGVmYXVsdENoZWNrZWQ9e2NoZWNrZWRDb21wfSAvPlxuICApO1xufTtcblxuRmlsdGVyQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoZWNrZWRDb21wOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG5cbmNsYXNzIENpdHlCbG9ja0ZpbHRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb2RhbE9wZW46IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUZpbHRlcnMgPSB0aGlzLnRvZ2dsZUZpbHRlcnMuYmluZCh0aGlzKTtcbiAgfTtcblxuICB0b2dnbGVGaWx0ZXJzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc01vZGFsT3BlbjogIXRoaXMuc3RhdGUuaXNNb2RhbE9wZW4gfSk7XG4gIH1cblxuICBjbGVhckZpbHRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFwcGx5RmlsdGVycywgaGFuZGxlU3VibWl0LCB0YWIsIHBhcmFtcywgcmVzZXRQYXRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB1cmwgPSAnJztcbiAgICBpZiAocGFyYW1zLmNpdHkpIHtcbiAgICAgIHVybCA9IGAvJHtwYXJhbXMuZGVzdGluYXRpb259LXRvdXJpc20vJHtwYXJhbXMuY2l0eX0vJHt0YWJ9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gYC8ke3BhcmFtcy5kZXN0aW5hdGlvbn0tdG91cmlzbS8ke3RhYn1gO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmlsdGVycy5maWx0ZXJDYXRlZ29yaWVzICYmIHRoaXMucHJvcHMuZmlsdGVycy5maWx0ZXJDYXRlZ29yaWVzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmZpbHRlcnMuZmlsdGVyQ2F0ZWdvcmllc1xuICAgICAgLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLmNoZWNrZWQgPT09IHRydWUpXG4gICAgICAubWFwKGZpbHRlciA9PlxuICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ0BAcmVkdXgtZm9ybS9DSEFOR0UnLFxuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICBmb3JtOiAnY2l0eUJsb2NrRmlsdGVyc0xpc3QnLFxuICAgICAgICAgICAgICBmaWVsZDogZmlsdGVyLmRlc3RpbmF0aW9uU2NoZW1lSWQgKyAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgICAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF5bG9hZDogZmlsdGVyLmNoZWNrZWRcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgICB0aGlzLnByb3BzLmZpbHRlcnMuZmlsdGVyZWRDaXRpZXMgJiYgdGhpcy5wcm9wcy5maWx0ZXJzLmZpbHRlcmVkQ2l0aWVzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmZpbHRlcnMuZmlsdGVyZWRDaXRpZXNcbiAgICAgIC5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5jaGVja2VkID09PSB0cnVlKVxuICAgICAgLm1hcChmaWx0ZXIgPT5cbiAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdAQHJlZHV4LWZvcm0vQ0hBTkdFJyxcbiAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgZm9ybTogJ2NpdHlCbG9ja0ZpbHRlcnNMaXN0JyxcbiAgICAgICAgICAgICAgZmllbGQ6IGZpbHRlci5jaXR5SWQgKyAnY2l0eScsXG4gICAgICAgICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGVyc2lzdGVudFN1Ym1pdEVycm9yczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXlsb2FkOiBmaWx0ZXIuY2hlY2tlZFxuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBoYW5kbGVTdWJtaXQsIHRhYiwgcGFyYW1zLCBmaWx0ZXJzLCByZXNldEZvcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHRmlsdGVyQnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRmlsdGVyc30gY2xhc3NOYW1lPVwib3ZlcmZsb3doIHBiYzEgcmFkaXVzMTAwIGZpeGVkIHoxNCByMTUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+XG4gICAgICAgICAgPEZpbHRlckljb25XaGl0ZSAvPlxuICAgICAgICA8L0dGaWx0ZXJCdXR0b24+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17YGZpbHRlci1yb3ctY29udGFpbmVyICR7dGhpcy5zdGF0ZS5pc01vZGFsT3BlbiA/ICdjaXR5YmxvY2tmaWx0ZXJDb250YWluZXInIDogJ2hpZGUnfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwIHoxNSBmaXhlZCB0MCBsMCBiMCByMCBzYmN3IGNpdHlibG9ja2ZpbHRlckNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjdyBmaWx0ZXJzLW9wdGlvbnMtY29uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHNiY3cgcDE1IGZpbHRlcnMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTIgcGwwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUZpbHRlcnN9IGNsYXNzTmFtZT1cImNsb3NlLWZpbHRlcnNcIiB0eXBlPVwiYnV0dG9uXCI+PENsb3NlRGFyayAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwbDhcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIj5GaWx0ZXJzPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBwbDAgcHIwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cmVzZXRGb3JtfSBjbGFzc05hbWU9XCJyZXNldC1idXR0b24gZnJpZ2h0XCI+UkVTRVQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQ4IHNiYzVcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBzYmN3IGZpbHRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGVzdGluYXRpb24tdHlwZS1idG4gZnc3IG1iMTUgcmVsYXRpdmVcIj5GaWx0ZXJzIGJ5IENhdGVnb3J5PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkZXN0aW5hdGlvbi10eXBlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycyAmJiBmaWx0ZXJzLmZpbHRlckNhdGVnb3JpZXMgJiYgZmlsdGVycy5maWx0ZXJDYXRlZ29yaWVzLm1hcCgoZmlsdGVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZpbHRlci5kZXN0aW5hdGlvblNjaGVtZUlkICsgJ2NhdGVnb3J5JztcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtGaWx0ZXJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2ZpbHRlci5kZXN0aW5hdGlvblNjaGVtZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRDb21wPXtmaWx0ZXIuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJlbGxpcHNpc1wiIGh0bWxGb3I9e2ZpbHRlci5kZXN0aW5hdGlvblNjaGVtZUlkfT57ZmlsdGVyLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBoaWRlIHRleHQtcmlnaHRcIj48TGluayBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSBwZmM0IGZ3NCBjdXJzb3JQIHB0MSBmMTIgbWIwIGJsb2NrXCIgdG89e3RoaXMuY2xlYXJGaWx0ZXJ9PmNsZWFyPC9MaW5rPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdDggc2JjNVwiIC8+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzICYmIGZpbHRlcnMuZmlsdGVyZWRDaXRpZXMgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBzYmN3IGZpbHRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJkZXN0aW5hdGlvbi10eXBlLWJ0biBmdzcgbWIxNSByZWxhdGl2ZVwiPkZpbHRlcnMgYnkgQ2l0eTwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkZXN0aW5hdGlvbi10eXBlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyZWRDaXRpZXMgJiYgZmlsdGVycy5maWx0ZXJlZENpdGllcy5tYXAoKGZpbHRlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZpbHRlci5jaXR5SWQgKyAnY2l0eSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmlsdGVyLmNpdHlJZH0gY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ZpbHRlckNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtmaWx0ZXIuY2l0eUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZENvbXA9e2ZpbHRlci5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiBodG1sRm9yPXtmaWx0ZXIuY2l0eUlkfT57ZmlsdGVyLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgcDggc2JjNSBiMCBsMCByMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFwcGx5IEZpbHRlclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2l0eUJsb2NrRmlsdGVycy5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRhYjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXBwbHlGaWx0ZXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVzZXRQYXRoOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNNb2RhbE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVzZXRGb3JtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cbkNpdHlCbG9ja0ZpbHRlcnMuZGVmYXVsdFByb3AgPSB7XG4gIHRhYjogJycsXG4gIGFwcGx5RmlsdGVyczogKCkgPT4ge30sXG4gIGhhbmRsZVN1Ym1pdDogKCkgPT4ge30sXG4gIHJlc2V0UGF0aDogKCkgPT4ge30sXG4gIGlzTW9kYWxPcGVuOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ2NpdHlCbG9ja0ZpbHRlcnNMaXN0J1xufSkoQ2l0eUJsb2NrRmlsdGVycyk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBVbCA9IGdsYW1vcm91cy51bCh7XG4gIG1hcmdpbjogJzAnLFxuICBwYWRkaW5nOiAnMCcsXG4gICcmIGxpJzoge1xuICAgIG1hcmdpblJpZ2h0OiAnM3B4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcyNHB4JyxcbiAgICBwYWRkaW5nOiAnM3B4IDE1cHgnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDRkNGQ0JyxcbiAgICBtYXJnaW46ICcwIDRweCA0cHggMCcsXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICBib3R0b206ICcwJyxcbiAgICAgIGNvbG9yOiAnIzI0YjlmOCcsXG4gICAgICBjb250ZW50OiAnJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICAnJjpsYXN0LWNoaWxkOmFmdGVyJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgQ2l0eVRhZ3MgPSAoeyBsYWJlbHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgIDxVbD5cbiAgICAgICAgeyBsYWJlbHMgJiYgbGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PlxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57bGFiZWx9PC9saT5cbiAgICAgICAgKX1cbiAgICAgIDwvVWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DaXR5VGFncy5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5DaXR5VGFncy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENpdHlUYWdzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcblxuY29uc3QgT25Ib3ZlciA9IGdsYW1vcm91cy5kaXYoe1xuICBkaXNwbGF5OiAnbm9uZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuNCknLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG59KTtcblxuY29uc3QgSW1nQ29udGFpbmVyID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMTAwJScsXG4gIG1pbkhlaWdodDogJzE4MHB4JyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICcmOmhvdmVyIC5vbmhvdmVyQ2FyZCc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH1cbn0pO1xuXG5jb25zdCBWaWV3RGV0YWlsID0gZ2xhbW9yb3VzLnNwYW4oe1xuICBib3JkZXI6ICcxcHggc29saWQgI2ZmZicsXG4gIHBhZGRpbmc6ICcxNHB4IDM1cHgnLFxufSk7XG5cbmNvbnN0IFNtYWxsQmFubmVyID0gKHsgaW1hZ2VVcmwsIGltYWdla2l0VXJsLCBpbWFnZUFsdCwgYmFubmVyU3R5bGUsIHVybFNwb3RsaWdodCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3VybFNwb3RsaWdodH0gY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgIDxJbWdDb250YWluZXIgY2xhc3NOYW1lPVwiY2xlYXJmaXggcmVsYXRpdmUgc2JjNFwiIHN0eWxlPXtiYW5uZXJTdHlsZX0+XG4gICAgICAgIDxJbWcgd2lkdGg9ezM5NX0gaGVpZ2h0PXsyMDB9IHNyYz17aW1hZ2VVcmx9IGlrU3JjPXtpbWFnZWtpdFVybH0gYWx0PXtpbWFnZUFsdH0gLz5cbiAgICAgICAgPE9uSG92ZXIgY2xhc3NOYW1lPVwib25ob3ZlckNhcmRcIj48Vmlld0RldGFpbFxuICAgICAgICAgIGNsYXNzTmFtZT1cImYxNCBibG9jayBzZmN3IGZ3YlwiPlZpZXcgRGV0YWlsczwvVmlld0RldGFpbD48L09uSG92ZXI+XG4gICAgICA8L0ltZ0NvbnRhaW5lcj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5TbWFsbEJhbm5lci5wcm9wVHlwZXMgPSB7XG4gIGltYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlQWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJhbm5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1cmxTcG90bGlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuU21hbGxCYW5uZXIuZGVmYXVsdFByb3BzID17XG4gIGJhbm5lclN0eWxlOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU21hbGxCYW5uZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4vT3ZlcnZpZXcnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nJztcblxuY29uc3QgU2hvd01vcmVDb250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWFyZ2luVG9wOiAnLThweCcsXG59KTtcblxuY29uc3QgR3VpZGUgPSAoeyBndWlkZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmN3IHAxNVwiPlxuICAgICAgPEhlYWRpbmcgey4uLmd1aWRlfSB0eXBlPVwibWFpbi1oZWFkaW5nXCIvPlxuICAgICAgPE92ZXJ2aWV3IHsuLi5ndWlkZX0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuR3VpZGUucHJvcFR5cGVzID0ge1xuICBndWlkZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkd1aWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ3VpZGU6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHdWlkZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBTdWJIZWFkaW5nID0gZ2xhbW9yb3VzLnAoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gIGNvbG9yOiAnI2NiY2JjYicsXG4gIG1hcmdpbjogJzRweCAwIDAgMCcsXG59KTtcblxuY29uc3QgSGVhZGluZyA9ICh7IGRhdGEsIHRpdGxlLCBoZWFkaW5nLCBzdHlsZUhlYWRpbmcsIHN0eWxlU3ViSGVhZGluZywgdHlwZSwgaXNWaWV3QWxsSGlkZGVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iMTVcIj5cbiAgICAgIHtcbiAgICAgICAgdHlwZSA9PT0gJ21haW4taGVhZGluZycgP1xuICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVIZWFkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMxIGZ3OSBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgICAgIDogPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1ZpZXdBbGxIaWRkZW4gPyAncHIwICcgOiAncHI2NCAnfSBmMTYgcGZjMyBmd2IgbTBgfT57ZGF0YS50aXRsZSB8fCB0aXRsZX17ZGF0YS5mb3JIZWFkaW5nID8gYCBmb3IgJHtkYXRhLmZvckhlYWRpbmd9YCA6IG51bGx9PC9oMj5cbiAgICAgIH1cbiAgICAgIHtkYXRhLmhlYWRpbmcgfHwgaGVhZGluZyA/XG4gICAgICAgIDxTdWJIZWFkaW5nIHN0eWxlPXtzdHlsZVN1YkhlYWRpbmd9IGNsYXNzTmFtZT1cImYxNCBtdDQgZnc0XCI+e2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nfTwvU3ViSGVhZGluZz4gOlxuICAgICAgICBudWxsXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlSGVhZGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgc3R5bGVTdWJIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc1ZpZXdBbGxIaWRkZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIHR5cGU6ICcnLFxuICB0aXRsZTogJycsXG4gIGhlYWRpbmc6ICcnLFxuICBzdHlsZUhlYWRpbmc6IHt9LFxuICBzdHlsZVN1YkhlYWRpbmc6IHt9LFxuICBpc1ZpZXdBbGxIaWRkZW46IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRm9ybU9uZUNUQSBmcm9tICdjb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvRm9ybU9uZUNUQSc7XG5pbXBvcnQgeyBVbmlxdWVyZXF1aXJlbWVudHMgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgR1JlcXVpcmVtZW50c0ljb25EaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcxNTBweCcsXG4gIGhlaWdodDogJzE1OHB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvIDE1cHgnLFxufSk7XG5cbmNvbnN0IE5vUGFja2FnZUNhcmQgPSAoeyBkZXN0aW5hdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGN0YVRleHQgPSAnQlVJTEQgWU9VUiBPV04gUEFDS0FHRSc7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEdSZXF1aXJlbWVudHNJY29uRGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+PFVuaXF1ZXJlcXVpcmVtZW50cyAvPjwvR1JlcXVpcmVtZW50c0ljb25EaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIGYxOCBmdzcgcGZjMyB0ZXh0LWNlbnRlclwiPllvdXIgUmVxdWlyZW1lbnRzIGFyZSB1bmlxdWUhIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjE0IHBmYzMgbWI4IHRleHQtY2VudGVyXCI+QXJlIHlvdSBsb29raW5nIHRvIGJvb2sgYSBzaW1pbGFyIGhvbGlkYXkgcGFja2FnZT88L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIGYxNCBwZmMxIG1iOCB0ZXh0LWNlbnRlclwiPk91ciBleHBlcnRzIHdvdWxkIGxvdmUgdG8gY3JlYXRlIGEgcGFja2FnZSBqdXN0IGZvciB5b3UuPC9wPlxuICAgICAgICA8Rm9ybU9uZUNUQSBydFByb3BzPXt7IHRvX2xvYzogZGVzdGluYXRpb24gfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSByaXBwbGUgZnc0XCI+e2N0YVRleHR9PC9kaXY+XG4gICAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk5vUGFja2FnZUNhcmQucHJvcFR5cGVzID0ge1xuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuTm9QYWNrYWdlQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlc3RpbmF0aW9uOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9QYWNrYWdlQ2FyZDtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnLi9TaG93TW9yZSc7XG5cbmNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3Qgb3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUgPSAob3ZlcnZpZXdNb3JlVGV4dCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBvdmVydmlld01vcmVUZXh0LnJlcGxhY2UoLzxiciBcXC8+fDxcXC9icj4vZywgJycpLnJlcGxhY2UoJzwvc3Bhbj48L3A+XFxyXFxuJywgJycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gb3ZlcnZpZXdNb3JlVGV4dDtcbiAgfVxufTtcblxuY2xhc3MgT3ZlcnZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgb3ZlcnZpZXdDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGZvb3RlckRlc2NyaXB0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbi5zcGxpdCgnXFxyXFxuJykuZmlsdGVyKHAgPT4gcC5sZW5ndGgpIHx8IFtdO1xuXG4gICAgaWYgKCFkZXNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZm9vdGVyRGVzYyA9IGZvb3RlckRlc2NyaXB0aW9uID8gYDxicj4ke2Zvb3RlckRlc2NyaXB0aW9ufWAgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8U2hvd01vcmVcbiAgICAgICAgd3JhcFRleHQ9e3BhcnNlci5wYXJzZShkZXNjWzBdKX1cbiAgICAgICAgbW9yZVRleHQ9e3BhcnNlci5wYXJzZShvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZShkZXNjLnNsaWNlKDEpLmpvaW4oJ1xcbicpLmNvbmNhdChmb290ZXJEZXNjKSkpfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSByb3ctbXdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYm94XCI+XG4gICAgICAgICAge3RoaXMub3ZlcnZpZXdDb250ZW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5PdmVydmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvb3RlckRlc2NyaXB0aW9uOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnXG59O1xuXG5PdmVydmlldy5wcm9wVHlwZXMgPSB7XG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb290ZXJEZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBfaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5cbmltcG9ydCB7IEJsdWVEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgR3JlYWRtb3JlTGFiZWwgPSBnbGFtb3JvdXMubGFiZWwoe1xuICAnJiBidXR0b24ucmVhZC1tb3JlLWJ1dHRvbic6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxufSk7XG5cbmNvbnN0IEdEb3duQXJyb3dTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICc2cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICc2cHgnLFxuICAgIHRvcDogJzFweCdcbiAgfVxufSk7XG5cbmNsYXNzIFNob3dNb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmRlZmF1bHRPcGVuXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogIXRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7IGN0YTogJ1JlYWQgTW9yZScgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dExlbmd0aCA9IDE5NTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1zdGF0ZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH0gaWQ9XCJwb3N0LTFcIiAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcmVhZC1tb3JlLXdyYXAgJHt0aGlzLnByb3BzLmlzRGVmYXVsdFNob3dNb3JlID8gJ3AtbGFzdC1uby1tYXJnaW4gcGZjMyBmMTRwIGR5bmFtaWNUZXh0SW5oZXJpdCcgOiAnJ31gfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgLy8gVE9ETzogZmluZCBhIGJldHRlciB3YXkgZm9yIHRydW5jYXRlIHRoZSBzdHJpbmdcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy5hcHBlbmRUZXh0ICYmIHRoaXMucHJvcHMud3JhcFRleHQubGVuZ3RoID49IHRleHRMZW5ndGhcbiAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLndyYXBUZXh0ICsgdGhpcy5wcm9wcy5hcHBlbmRUZXh0XG4gICAgICAgICAgICAgIDogdGhpcy5wcm9wcy53cmFwVGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdGFyZ2V0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tb3JlVGV4dH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tb3JlVGV4dC5sZW5ndGggPiAwIHx8ICFfaXNFbXB0eSh0aGlzLnByb3BzLm1vcmVUZXh0KSA/XG4gICAgICAgICAgICA8R3JlYWRtb3JlTGFiZWwgaHRtbEZvcj1cInBvc3QtMVwiIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10cmlnZ2VyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJ1dHRvbiBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlbiByZWxhdGl2ZSBmMTIgZnc3XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE0IGZ3N1wiPlxuICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmNoZWNrZWQpID8gdGhpcy5wcm9wcy5zaG93TGVzc1RleHQgOiB0aGlzLnByb3BzLnNob3dNb3JlVGV4dH1cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxHRG93bkFycm93U3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtbDggcmVsYXRpdmUgYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPjxCbHVlRG93bkFycm93IC8+PC9HRG93bkFycm93U3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0dyZWFkbW9yZUxhYmVsPlxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNob3dNb3JlLnByb3BUeXBlcyA9IHtcbiAgd3JhcFRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbW9yZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSksXG4gIHNob3dNb3JlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0xlc3NUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgYXBwZW5kVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuXG59O1xuXG5TaG93TW9yZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHdyYXBUZXh0OiAnJyxcbiAgbW9yZVRleHQ6ICcnLFxuICBzaG93TW9yZVRleHQ6ICdSZWFkIE1vcmUnLFxuICBzaG93TGVzc1RleHQ6ICdSZWFkIExlc3MnLFxuICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gIGlzRGVmYXVsdFNob3dNb3JlOiB0cnVlLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd01vcmU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b24tbG9hZC1tb3JlLWZ1bGxcIjogXCJfMWxGT2RcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAgJy4vTG9hZE1vcmVQYWNrYWdlcy5zY3NzJztcblxuY29uc3QgTG9hZE1vcmVQYWNrYWdlcyA9ICh7IHBhY2thZ2VzUmVtYWluaW5nLCBsb2FkTW9yZVBhY2thZ2VzLCBjdXJyZW50UGFnZSwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9IHBhZ2VOdW1iZXIgPT4gKCkgPT4ge1xuICAgIGxvYWRNb3JlUGFja2FnZXMocGFnZU51bWJlcik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyhwYWNrYWdlc1JlbWFpbmluZyA+IDApID8gJycgOiAnaGlkZSd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjE1IG10OFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZShjdXJyZW50UGFnZSArIDEpfVxuICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tbG9hZC1tb3JlLWZ1bGxcIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgTG9hZCBNb3JlICh7cGFja2FnZXNSZW1haW5pbmd9IHt0aXRsZX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTG9hZE1vcmVQYWNrYWdlcy5wcm9wVHlwZXMgPSB7XG4gIHBhY2thZ2VzUmVtYWluaW5nOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGxvYWRNb3JlUGFja2FnZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRNb3JlUGFja2FnZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHB1c2ggYXMgcHVzaFN0YXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTRUdNRU5UX0FETUlOX0NPTU1FTlQsIHNldENvb2tpZSB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB1cGRhdGVGcm9tT25lUHJvcHMgfSBmcm9tICdyZWR1Y2Vycy9mb3JtT25lTGVhZCc7XG5cbmNsYXNzIEZvcm1PbmVDVEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJ0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXBkYXRlRnJvbU9uZVByb3BzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHB1c2hTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZWFsczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xpY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJ0UHJvcHM6IHt9LFxuICAgIGNsaWNrSGFuZGxlcjogKCkgPT4ge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGRlYWxzOiBmYWxzZSxcbiAgICB0YWc6ICcnLFxuICAgIGJ1ZGdldDogJydcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBydFByb3BzLCB0YWcsIGRlYWxzLCBidWRnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gbWVyZ2UgYWRtaW4gY29tbWVudHMgd2l0aCB0aGUgZXhpc3Rpbmcgb25lc1xuICAgIGxldCBhZG1pbkNvbW1lbnRzID0gcnRQcm9wcy5hZG1pbkNvbW1lbnRzIHx8ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYWRtaW5Db21tZW50cyA9IGAke2FkbWluQ29tbWVudHN9ICNGb3JtX2ZpbGxlZF9vbiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWA7XG4gICAgfVxuICAgIGFkbWluQ29tbWVudHMgPSBgICR7YWRtaW5Db21tZW50c30gJHtTRUdNRU5UX0FETUlOX0NPTU1FTlR9YDtcbiAgICBjb25zdCBydHJpcFByb3BzID0ge1xuICAgICAgLi4ucnRQcm9wcyxcbiAgICAgIGFkbWluQ29tbWVudHMsXG4gICAgfTtcbiAgICBzZXRDb29raWUoJ3RvX2xvYycsIHJ0UHJvcHMudG9fbG9jKTtcbiAgICBzZXRDb29raWUoJ3RyaXBfZGF5cycsIHJ0UHJvcHMudHJpcF9kYXlzKTtcbiAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcigpO1xuICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb24gc3RvcmVcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZyb21PbmVQcm9wcyhydHJpcFByb3BzKTtcbiAgICAvLyBjaGFuZ2UgdGhlIHVybFxuICAgIGlmIChkZWFscykge1xuICAgICAgdGhpcy5wcm9wcy5wdXNoU3RhdGUoYC9yZXF1ZXN0ZWRfdHJpcHMvbmV3P2RlYWxzPXRydWUmdGFnPSR7dGFnfSZidWRnZXQ9JHtidWRnZXR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucHVzaFN0YXRlKCcvcmVxdWVzdGVkX3RyaXBzL25ldycpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHVwZGF0ZUZyb21PbmVQcm9wcywgcHVzaFN0YXRlIH0pKEZvcm1PbmVDVEEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==