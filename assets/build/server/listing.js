require("source-map-support").install();
exports.ids = ["listing"];
exports.modules = {

/***/ "./app-v2/modules/placesToVisit/PlacesToVisit.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/placesToVisit/PlacesToVisit.js ***!
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

var _LoaderCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/loaders/LoaderCard */ "./app-v2/modules/shared/loaders/LoaderCard.js"));

var _SliderWithTitle = _interopRequireDefault(__webpack_require__(/*! modules/shared/SliderWithTitle */ "./app-v2/modules/shared/SliderWithTitle.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PlacesToVisit = (_temp = _class = class PlacesToVisit extends _react.default.Component {
  constructor(props) {
    super(props);

    this.trackSegment = (cta, cardId, miscType1, miscId1) => {
      this.props.trackSegmentEvent({
        cta,
        object: cardId ? `Places to visit/${cardId}` : 'Places to visit',
        miscType1,
        miscId1
      });
    };
  } // componentDidMount() {
  //   this.fetchPlacesToVisitData(this.props);
  // }
  // fetchPlacesToVisitData = (props) => {
  //   const { config, fetchPlacesToVisitData } = props;
  //   if (config && config.csr) {
  //     fetchPlacesToVisitData({
  //       destination: layout.metaInfo.destination,
  //       lookupParent: config.lookupParent
  //     });
  //   }
  // };


  render() {
    const {
      data,
      config,
      loaded,
      externalCss,
      errors
    } = this.props;

    if (errors && errors.length) {
      return null;
    }

    if (loaded && (!data.destinationSchemes || !data.destinationSchemes.length)) {
      return null;
    }

    return _react.default.createElement("div", {
      className: externalCss
    }, !loaded ? _react.default.createElement(_LoaderCard.default, null) : data.destinationSchemes && data.destinationSchemes.length ? _react.default.createElement(_SliderWithTitle.default, {
      data: data,
      trackSegment: this.trackSegment,
      config: config,
      overflow: "unset"
    }) : null);
  }

}, _class.propTypes = {
  data: _propTypes.default.object,
  config: _propTypes.default.object,
  loaded: _propTypes.default.bool,
  errors: _propTypes.default.array,
  externalCss: _propTypes.default.string,
  trackSegmentEvent: _propTypes.default.func,
  fetchPlacesToVisitData: _propTypes.default.func
}, _class.defaultProps = {
  data: {},
  config: {
    variant: 'FULL',
    order: 8
  },
  loaded: false,
  externalCss: '',
  trackSegmentEvent: () => {},
  fetchPlacesToVisitData: () => {}
}, _temp);
var _default = PlacesToVisit;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/placesToVisit/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/placesToVisit/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/placesToVisit/action.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/placesToVisit/reducer.js");

var _PlacesToVisit = _interopRequireDefault(__webpack_require__(/*! ./PlacesToVisit */ "./app-v2/modules/placesToVisit/PlacesToVisit.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  data: (0, _reducer.results)(state),
  loaded: state.placesToVisit.loaded,
  errors: state.placesToVisit.errors
}), {
  fetchPlacesToVisitData: _action.fetchPlacesToVisitData
})(_PlacesToVisit.default));
/**
 * PlacesToVisit Section
 */

var _default = {
  container,
  actions: {
    fetchPlacesToVisitData: _action.fetchPlacesToVisitData
  },
  defaultAction: _action.fetchPlacesToVisitData
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/CustomSwiper.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/CustomSwiper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GContainerDiv = _glamorous.default.div({
  height: '48px',
  '& .swiperContainer': {
    overflowX: 'scroll',
    paddingBottom: '30px'
  }
});

let CustomSwiper = class CustomSwiper extends _react.Component {
  render() {
    const {
      containerStyle,
      isDoubleLine,
      styles
    } = this.props;
    return _react.default.createElement(GContainerDiv, {
      style: containerStyle,
      className: 'overflowh row'
    }, _react.default.createElement("div", {
      className: `swiperContainer pl15 ${isDoubleLine ? styles.doubleLine : ''}`
    }, _react.default.createElement("div", {
      className: `flex ${isDoubleLine ? styles.doubleLineFlex : ''}`
    }, this.props.children)));
  }

};
CustomSwiper.defaultProps = {
  containerStyle: {},
  styles: {},
  isDoubleLine: false,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object])
};
CustomSwiper.propTypes = {
  containerStyle: _propTypes.default.object,
  isDoubleLine: _propTypes.default.bool,
  styles: _propTypes.default.object,
  children: []
};
var _default = CustomSwiper;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/loaders/LoaderCard.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/shared/loaders/LoaderCard.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ./../G */ "./app-v2/modules/shared/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let LoaderCard = (_temp = _class = class LoaderCard extends _react.default.Component {
  render() {
    const {
      cardVisible
    } = this.props;
    return _react.default.createElement(_G.GLoaderContainerDiv, {
      className: "flex flexFull flexDColumn wfull"
    }, _react.default.createElement("div", {
      className: "loaderLine mb5 mt0 sbc5",
      style: {
        width: '60%'
      }
    }), _react.default.createElement("div", {
      className: "loaderLine mb15 mt0 sbc5",
      style: {
        width: '70%'
      }
    }), _react.default.createElement("div", {
      className: "loaderMain radius2 flexFull"
    }, _react.default.createElement("div", {
      className: "loaderMainCard flexFull"
    }, _react.default.createElement(_G.GLoaderCardSpan, {
      className: "wfull sbc5"
    }), _react.default.createElement("div", {
      className: "sbcw p15 pb24 wfull"
    }, _react.default.createElement("div", {
      className: "loaderLineDark sbc5 mb15 sbc4",
      style: {
        maxWidth: '80%'
      }
    }), _react.default.createElement("div", {
      className: "loaderLineDark sbc5 mb8 sbc4"
    }), _react.default.createElement("div", {
      className: "loaderLineDark sbc5 sbc4"
    })))));
  }

}, _class.propTypes = {
  lineVisible: _propTypes.default.object,
  cardVisible: _propTypes.default.object
}, _class.defaultProps = {
  lineVisible: {},
  cardVisible: {}
}, _temp);
exports.default = LoaderCard;

/***/ }),

/***/ "./app-v2/modules/thingsToDo/ThingsToDo.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/thingsToDo/ThingsToDo.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _LoaderCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/loaders/LoaderCard */ "./app-v2/modules/shared/loaders/LoaderCard.js"));

var _SliderWithTitle = _interopRequireDefault(__webpack_require__(/*! modules/shared/SliderWithTitle */ "./app-v2/modules/shared/SliderWithTitle.js"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ThingsToDo = (_temp2 = _class = class ThingsToDo extends _react.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.fetchThingsToDoData = props => {
      const {
        config,
        layout,
        fetchThingsToDoData
      } = props;

      if (config && config.csr) {
        fetchThingsToDoData({
          destination: layout.metaInfo.destination,
          lookupParent: config.lookupParent
        });
      }
    }, this.trackSegment = (cta, cardId, miscType1, miscId1) => {
      this.props.trackSegmentEvent({
        cta,
        object: cardId ? `Things to do/${cardId}` : 'Things to do',
        miscType1,
        miscId1
      });
    }, _temp;
  }

  componentDidMount() {
    this.fetchThingsToDoData(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.layout.metaInfo && prevProps.layout.metaInfo && this.props.layout.metaInfo.destination !== prevProps.layout.metaInfo.destination) {
      this.fetchThingsToDoData(this.props);
    }
  }

  render() {
    const {
      data,
      config,
      loaded,
      externalCss,
      errors
    } = this.props;

    if (errors && errors.length) {
      return null;
    }

    if (loaded && (!data.destinationSchemes || !data.destinationSchemes.length)) {
      return null;
    }

    return _react.default.createElement("div", {
      className: externalCss
    }, _react.default.createElement("div", {
      className: `clearfix container pl0 pr0`,
      style: (0, _utils.getFlexObject)(config.variant, config.order)
    }, !loaded ? _react.default.createElement(_LoaderCard.default, null) : data.destinationSchemes && data.destinationSchemes.length ? _react.default.createElement(_SliderWithTitle.default, {
      data: data,
      trackSegment: this.trackSegment,
      config: config,
      overflow: "scroll"
    }) : null));
  }

}, _class.propTypes = {
  data: _propTypes.PropTypes.object,
  layout: _propTypes.PropTypes.object,
  config: _propTypes.PropTypes.object,
  loaded: _propTypes.PropTypes.bool,
  errors: _propTypes.PropTypes.array,
  externalCss: _propTypes.PropTypes.string,
  trackSegmentEvent: _propTypes.PropTypes.func,
  fetchThingsToDoData: _propTypes.PropTypes.func
}, _class.defaultProps = {
  data: {},
  layout: {},
  config: {
    variant: 'FULL',
    order: 8
  },
  externalCss: '',
  loaded: false,
  trackSegmentEvent: () => {},
  fetchThingsToDoData: () => {}
}, _temp2);
var _default = ThingsToDo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/thingsToDo/index.js":
/*!********************************************!*\
  !*** ./app-v2/modules/thingsToDo/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/thingsToDo/action.js");

var _ThingsToDo = _interopRequireDefault(__webpack_require__(/*! ./ThingsToDo */ "./app-v2/modules/thingsToDo/ThingsToDo.js"));

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/thingsToDo/reducer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  data: (0, _reducer.results)(state),
  loaded: state.thingsToDo.loaded,
  errors: state.thingsToDo.errors
}), {
  fetchThingsToDoData: _action.fetchThingsToDoData
})(_ThingsToDo.default));
/**
 * ThingsToDo Section
 */

var _default = {
  container,
  actions: {
    fetchThingsToDoData: _action.fetchThingsToDoData
  },
  defaultAction: _action.fetchThingsToDoData
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/whyBookWithOurAgents/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/whyBookWithOurAgents/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _howitworksCm = _interopRequireDefault(__webpack_require__(/*! modules/howItWorks/howitworks.cm.scss */ "./app-v2/modules/howItWorks/howitworks.cm.scss"));

var Icons = _interopRequireWildcard(__webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const card = {
  heading: 'Why Book With Our Agents?',
  items: [{
    icon: 'IllusAgent',
    title: 'Only The Best Agents',
    paragraph: 'Travelers deal with only the top 10% reviewed agents who are selected after a 23 step rigorous assessment procedure by TravelTriangle.'
  }, {
    icon: 'IllusQualityCheck',
    title: 'Ensuring Quality',
    paragraph: 'TravelTriangle ensures quality service via verified partners by releasing the payment only after the booking vouchers/receipts are received by the traveler.'
  }, {
    icon: 'IllusSupport',
    title: '24*7 On-trip assistance by Local Travel Agents',
    paragraph: 'Travelers deal with only the top 10% reviewed agents who are selected after a 23 step rigorous assessment procedure by TravelTriangle.'
  }]
};
let WhyBookWithOurAgents = class WhyBookWithOurAgents extends _react.PureComponent {
  render() {
    return _react.default.createElement("div", {
      className: "col-xs-12 p0 sbcw"
    }, _react.default.createElement("h2", {
      className: "f16 fw9 p15 pfc5 bb"
    }, card.heading), _react.default.createElement("div", {
      className: `col-xs-12 p0 ${_howitworksCm.default.tiles}`
    }, card.items.map((item, i) => {
      const IconComponent = Icons[item.icon];
      return _react.default.createElement("div", {
        className: `col-xs-12 flex pl15 pr15 pt24 pb24 ${_howitworksCm.default.worksBox}`,
        key: i
      }, _react.default.createElement("div", {
        className: `flex justifyCenter ${_howitworksCm.default.image}`
      }, _react.default.createElement(IconComponent, null)), _react.default.createElement("div", {
        className: "pl24 dark-font"
      }, _react.default.createElement("h4", {
        className: "f14 fw9 pb8"
      }, item.title), _react.default.createElement("p", {
        className: "f12"
      }, item.paragraph)));
    })));
  }

};
exports.default = WhyBookWithOurAgents;

/***/ }),

/***/ "./app/components/Common/CityFilter/CityFilter.js":
/*!********************************************************!*\
  !*** ./app/components/Common/CityFilter/CityFilter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _CustomSwiper = _interopRequireDefault(__webpack_require__(/*! modules/shared/CustomSwiper */ "./app-v2/modules/shared/CustomSwiper.js"));

var _cityFilterCm = _interopRequireDefault(__webpack_require__(/*! ./cityFilter.cm.scss */ "./app/components/Common/CityFilter/cityFilter.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let CityFilter = class CityFilter extends _react.Component {
  render() {
    const {
      fobpLinks: {
        footerLinks,
        name
      },
      isDoubleLine
    } = this.props;
    const swiperStyle = {};
    return _react.default.createElement("div", {
      className: `p15 sbcw ${_cityFilterCm.default.filtersContainerCommon} inline-common-filter price-filters`
    }, _react.default.createElement("input", {
      id: 'City_links',
      type: "checkbox",
      className: `hide ${_cityFilterCm.default.inlineFilters}`
    }), _react.default.createElement("label", {
      htmlFor: "City_links",
      className: "flex alignCenter spaceBetween"
    }, _react.default.createElement("p", {
      className: "f16 fwb"
    }, name), _react.default.createElement("span", {
      className: "input-24 relative p5 flex alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement("div", {
      className: `${isDoubleLine ? _cityFilterCm.default.doubleLineInlineFiltersData : _cityFilterCm.default.inlineFiltersData}`
    }, _react.default.createElement(_CustomSwiper.default, {
      containerStyle: swiperStyle,
      isDoubleLine: isDoubleLine,
      styles: _cityFilterCm.default
    }, footerLinks.map((footerLink, index) => {
      const {
        name,
        url
      } = footerLink;
      const sourceName = name.split(' ').slice(1).join(' ');
      return _react.default.createElement("div", null, _react.default.createElement("a", {
        href: url
      }, _react.default.createElement("input", {
        id: index,
        className: `hide ${_cityFilterCm.default.inlineFiltersCheckbox}`
      }), _react.default.createElement("label", {
        className: "noBeforeAfter flex radius2 overflowh flexDColumn p0",
        htmlFor: index
      }, _react.default.createElement("div", {
        className: `${_cityFilterCm.default.filterTitle} flexFull flex text-center alignCenter justifyCenter pl8 pr8 mr8`
      }, sourceName))));
    }))));
  }

};
CityFilter.propTypes = {
  fobpLinks: _propTypes.default.object,
  isDoubleLine: _propTypes.default.bool
};
CityFilter.defaultProps = {
  isDoubleLine: false
};
var _default = CityFilter;
exports.default = _default;

/***/ }),

/***/ "./app/components/Common/CityFilter/cityFilter.cm.scss":
/*!*************************************************************!*\
  !*** ./app/components/Common/CityFilter/cityFilter.cm.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"theme": "_2Zka1YuR6PMpkIXy9TPkdh",
	"inlineFilters": "_1XFh7oCUzC1g0UH_QoMtU1",
	"inlineFiltersData": "_1-B5YeD29MWZxQxHSUYmgf",
	"doubleLineInlineFiltersData": "_1lWkULrr08Z4LKuroin2k3",
	"filterTitle": "_1QbCgCmV9BGAhUr9YEc3mU",
	"inlineFiltersCheckbox": "_1jSMi_SCieQJgffh6cATkk",
	"doubleLine": "_1N_MYMt_NG9py2MM82J1z8",
	"doubleLineFlex": "_2qARJCx_95YVLjfUscfOhb",
	"filtersContainerCommon": "_1ku6_geeG5BqyL9TcJHXlM"
};

/***/ }),

/***/ "./app/components/ComparePackages/ComparePackages.scss":
/*!*************************************************************!*\
  !*** ./app/components/ComparePackages/ComparePackages.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container-package": "_gjmcx",
	"priceOff": "_1NMP-",
	"headingDays": "_382MI",
	"borderR": "_1WDLz",
	"Collapsible": "_3681W",
	"is-open": "_365vB",
	"borderRightB": "_2VVdK",
	"bulletGreen": "_1aZEa",
	"bulletPink": "_3TGKm",
	"ptb18": "_2Chak",
	"bulletGray": "_1V2-r",
	"question": "_NbaH4",
	"shareIconSmall": "_p0Gi3",
	"containerPopupPackage": "_2D47H",
	"popupPackage": "_1iJIR",
	"spanCircleDotted": "_3-p22",
	"divSpanPackageBox": "_LSQgF",
	"compare-popup-icon": "_1kdfY",
	"divCombinContainer": "_3vvqt",
	"btnGotIt": "_1u1oN",
	"spanCircleDottedSec": "_oIfWZ",
	"hotelContainerMain": "_3Teyj",
	"accordian": "_X3EFI",
	"accordian-tutolo": "_1zjLZ",
	"accordian-contenido": "_1qV72",
	"downSideArrow": "_2thDU"
};

/***/ }),

/***/ "./app/components/ComparePackages/LoaderFirst.js":
/*!*******************************************************!*\
  !*** ./app/components/ComparePackages/LoaderFirst.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./ComparePackages.scss */ "./app/components/ComparePackages/ComparePackages.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let LoaderFirst = (_temp = _class = class LoaderFirst extends _react.Component {
  componentDidMount() {
    (0, _FormDataFormatter.setCookie)('first_loader_opened', true);
  }

  render() {
    return _react.default.createElement("div", {
      className: "containerPopupPackage"
    }, _react.default.createElement("div", {
      className: "popupPackage relative"
    }, _react.default.createElement("h3", {
      className: "f16 fw9 pl15 absolute t15"
    }, "Add To Compare"), _react.default.createElement("div", {
      className: "divCombinContainer text-center pt15"
    }, _react.default.createElement("div", {
      className: "divSpanPackageBox fleft mr8"
    }, _react.default.createElement("span", {
      className: "spanCircleDotted"
    }, _react.default.createElement(_Icon.PackageIcon, null))), _react.default.createElement("div", {
      className: "divSpanPackageBox fleft mr8 mt15"
    }, _react.default.createElement("span", {
      className: "compare-popup-icon"
    }, _react.default.createElement(_Icon.CompareIcon2, null))), _react.default.createElement("div", {
      className: "divSpanPackageBox fleft"
    }, _react.default.createElement("span", {
      className: "spanCircleDotted spanCircleDottedSec"
    }, _react.default.createElement(_Icon.PackageIcon, null)))), _react.default.createElement("h2", {
      className: "col-xs-12 mt15 f14 fw4 text-center"
    }, "Choose ", _react.default.createElement("span", {
      className: "fw9 f14"
    }, "one more package "), " to switch to Compare View."), _react.default.createElement("button", {
      onClick: this.props.onClose,
      className: "col-xs-12 f14 fw4 text-center btnGotIt"
    }, "Got It")));
  }

}, _class.propTypes = {
  onClose: _propTypes.default.func.isRequired
}, _temp);
var _default = LoaderFirst;
exports.default = _default;

/***/ }),

/***/ "./app/components/ComparePackages/LoaderSecond.js":
/*!********************************************************!*\
  !*** ./app/components/ComparePackages/LoaderSecond.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./ComparePackages.scss */ "./app/components/ComparePackages/ComparePackages.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoaderSecond = () => _react.default.createElement("div", {
  className: "containerPopupPackage"
}, _react.default.createElement("div", {
  className: "popupPackage relative"
}, _react.default.createElement("div", {
  className: "divCombinContainer text-center pt15"
}, _react.default.createElement("div", {
  className: "divSpanPackageBox fleft mr8"
}, _react.default.createElement("span", {
  className: "spanCircleDotted"
}, _react.default.createElement(_Icon.PackageIcon, null))), _react.default.createElement("div", {
  className: "divSpanPackageBox fleft mr8 mt15"
}, _react.default.createElement("span", {
  className: "compare-popup-icon"
}, _react.default.createElement(_Icon.CompareIcon2, null))), _react.default.createElement("div", {
  className: "divSpanPackageBox fleft"
}, _react.default.createElement("span", {
  className: "spanCircleDotted"
}, _react.default.createElement(_Icon.PackageIcon, null)))), _react.default.createElement("h2", {
  className: "col-xs-12 mt15 f14 text-center"
}, "Now we are going to Compare View.")));

var _default = LoaderSecond;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/AboutListingDestination.js":
/*!***********************************************************!*\
  !*** ./app/components/Listing/AboutListingDestination.js ***!
  \***********************************************************/
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

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ../Generic/ShowMore */ "./app/components/Generic/ShowMore.js"));

__webpack_require__(/*! ./AboutListingDestination.scss */ "./app/components/Listing/AboutListingDestination.scss");

var _FooterContentNavigation = _interopRequireDefault(__webpack_require__(/*! components/Listing/FooterContentNavigation */ "./app/components/Listing/FooterContentNavigation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const renderFooterAboveText = (footerSection, isRatingSchemaEnabled) => {
  const footerAboveText = footerSection.footer_above_text.replace(/&lt;img(.*?)&gt;/gm, (m, content) => {
    return `<img class="lzy_img" ${content}>`;
  }).split('&lt;readmore&gt;');
  return _react.default.createElement(_ShowMore.default, {
    wrapText: parser.parse(footerAboveText[0]),
    moreText: parser.parse(footerAboveText[1]),
    isRatingSchemaEnabled: isRatingSchemaEnabled
  });
};

const renderHeaderBelowText = (footerSection, isRatingSchemaEnabled) => {
  const headerBelowText = footerSection.header_below_text.replace(/&lt;img(.*?)&gt;/gm, (m, content) => {
    return `<img class="lzy_img" ${content}>`;
  }).split('&lt;readmore&gt;');
  return _react.default.createElement(_ShowMore.default, {
    wrapText: parser.parse(headerBelowText[0]),
    moreText: parser.parse(headerBelowText[1]),
    isRatingSchemaEnabled: isRatingSchemaEnabled
  });
};

let FooterCms = class FooterCms extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.isScrollToPackagesSticky = () => window.pageYOffset >= this.footerGuideElement.offsetTop && window.pageYOffset < this.scrollToPackagesELement.parentNode.offsetTop - window.innerHeight, this.handleScroll = () => {
      if (this.scrollToPackagesELement && this.footerGuideElement) {
        if (this.isScrollToPackagesSticky()) {
          this.scrollToPackagesELement.classList.add('make-sticky');

          if (this.chatTriggerButton) {
            this.chatTriggerButton.style.bottom = "78px";
          }
        } else {
          if (this.scrollToPackagesELement.classList.contains('make-sticky')) {
            this.scrollToPackagesELement.classList.remove('make-sticky');
          }

          if (this.chatTriggerButton) {
            this.chatTriggerButton.removeAttribute("style");
          }
        }
      }
    }, _temp;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    this.scrollToPackagesELement = document.querySelector('.scroll-to-packages-container');
    this.footerGuideElement = document.querySelector('#startListingDesc');
    this.chatTriggerButton = document.querySelector('.fixed-menu-container.radius100');
    const packagesHeadingElem = document.querySelector('.sbcw.p15.pt0.pb8');
    const scrollToPosition = packagesHeadingElem ? packagesHeadingElem.offsetTop - 50 : 480;

    if (this.scrollToPackagesELement) {
      this.scrollToPackagesELement.addEventListener('click', () => {
        _reactScroll.animateScroll.scrollTo(scrollToPosition);
      });
    }

    window.addEventListener('scroll', this.handleScroll);
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lzy_img");
          imgObserver.unobserve(lazyImage);
        }
      });
    });
    const arr = document.querySelectorAll('img.lzy_img');
    arr.forEach(v => {
      imageObserver.observe(v);
    });
  }

  render() {
    const {
      footerSection,
      isRatingSchemaEnabled
    } = this.props;
    const {
      footer_above_text
    } = footerSection;
    const navigationLinkItems = [];

    if (!footer_above_text) {
      return null;
    }

    const sanitizedFooterAboveText = footer_above_text.replace(/(&lt;|<)img(.*?)(&gt;|>)/gm, (m, left, content) => {
      return `<img class="lzy_img" ${content}>`;
    });
    sanitizedFooterAboveText.replace(/<section.*id="(\w+)".*>/mg, (match, p1) => {
      navigationLinkItems.push(p1);
      return match;
    });

    if (navigationLinkItems.length <= 0) {
      // image tag not found
      return _react.default.createElement("div", null, renderFooterAboveText(footerSection, isRatingSchemaEnabled));
    }

    return _react.default.createElement("div", {
      className: "sbc5 row pt8"
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      id: "startListingDesc"
    }), _react.default.createElement(_FooterContentNavigation.default, {
      navigationLinkItems: navigationLinkItems,
      heading: footerSection.heading
    }), _react.default.createElement("div", {
      className: "guide-footer row sbc5"
    }, parser.parse(sanitizedFooterAboveText.replace('&lt;readmore&gt;', ''))), _react.default.createElement("div", {
      id: "endListingDesc"
    })));
  }

};

const AboutListingDestination = ({
  footerSection,
  isRatingSchemaEnabled
}) => {
  return _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "container p15 sbcw about-destination"
  }, _react.default.createElement("p", {
    className: "text-center pb5 heading-h2 fw7"
  }, footerSection.heading), _react.default.createElement("div", {
    className: "read-more-box dynamicTextInherit"
  }, renderHeaderBelowText(footerSection, isRatingSchemaEnabled), _react.default.createElement("div", {
    className: "mb15"
  }, " "), _react.default.createElement(FooterCms, {
    footerSection: footerSection,
    isRatingSchemaEnabled: isRatingSchemaEnabled
  }))), _react.default.createElement("div", {
    className: "sbcw p8"
  }, _react.default.createElement("div", {
    className: "scroll-to-packages-container"
  }, _react.default.createElement("div", {
    className: "scroll-to-packages-link-mobile"
  }, "Go to Packages"))));
};

AboutListingDestination.propTypes = {
  footerSection: _propTypes.default.object.isRequired,
  isRatingSchemaEnabled: _propTypes.default.bool
};
FooterCms.propTypes = {
  footerSection: _propTypes.default.object.isRequired,
  isRatingSchemaEnabled: false
};
var _default = AboutListingDestination;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/FooterContentNavigation.js":
/*!***********************************************************!*\
  !*** ./app/components/Listing/FooterContentNavigation.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _reactStickynode = _interopRequireDefault(__webpack_require__(/*! react-stickynode */ "react-stickynode"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TravelGuideContainer = _glamorous.default.div({
  minHeight: '166px',
  '& .navigation-tile': {
    marginRight: '8px'
  },
  '& .sticky-inner-wrapper': {
    width: '100% !important',
    zIndex: '5',
    left: '0',
    background: '#fff'
  }
});

const NavigationLogoContainer = _glamorous.default.div({
  height: '79px',
  width: '136px',
  display: 'block'
});

const footerNavigation = {
  ['footerTravelogue'.toLowerCase()]: {
    'href': 'footerTravelogue',
    'img': {
      'src': `${_appConfig.default.assets.images}/footer_cms_links/travel+stories+%402x.png`,
      'width': 79,
      'height': 136,
      'alt': 'Travel stories logo'
    },
    'title': 'Travel Stories'
  },
  ['footerAccommodation'.toLowerCase()]: {
    'href': 'footerAccommodation',
    'img': {
      'src': `${_appConfig.default.assets.images}/footer_cms_links/accommodation.png`,
      'width': 79,
      'height': 136,
      'alt': 'Accommodation logo'
    },
    'title': 'Accommodation'
  },
  ['footerFood'.toLowerCase()]: {
    'href': 'footerFood',
    'img': {
      'src': `${_appConfig.default.assets.images}/footer_cms_links/food.png`,
      'width': 79,
      'height': 136,
      'alt': 'Food logo'
    },
    'title': 'Food & Cuisine'
  },
  ['footerPlaces'.toLowerCase()]: {
    'href': 'footerPlaces',
    'img': {
      'src': `${_appConfig.default.assets.images}/footer_cms_links/places+to+visit.png`,
      'width': 79,
      'height': 136,
      'alt': 'Places to visit logo'
    },
    'title': 'Places to Visit'
  },
  ['footerThingsToDO'.toLowerCase()]: {
    'href': 'footerThingsToDO',
    'img': {
      'src': `${_appConfig.default.assets.images}/footer_cms_links/things+to+do.png`,
      'width': 79,
      'height': 136,
      'alt': 'Things to do logo'
    },
    'title': 'Things to Do'
  },
  ['footerEssentialInfo'.toLowerCase()]: {
    'href': 'footerEssentialInfo',
    'img': {
      'src': `${_appConfig.default.assets.images}/footer_cms_links/essential+info.png`,
      'width': 79,
      'height': 136,
      'alt': 'Essential info logo'
    },
    'title': 'Essential Info'
  },
  ['footerProTips'.toLowerCase()]: {
    'href': 'footerProTips',
    'img': {
      'src': `${_appConfig.default.assets.images}/footer_cms_links/pro+tips.png`,
      'width': 79,
      'height': 136,
      'alt': 'Pro tips logo'
    },
    'title': 'Pro Tips'
  }
};

const FooterContentNavigation = ({
  navigationLinkItems,
  heading
}) => {
  if (!(navigationLinkItems && navigationLinkItems.length)) {
    return null;
  }

  const onSetActive = targetId => {
    const activelink = document.querySelector('#' + targetId + '-triggerlink');

    if (activelink && activelink.scrollIntoView) {
      activelink.scrollIntoView({
        inline: "center"
      });
    }
  };

  return _react.default.createElement(TravelGuideContainer, {
    className: "row pl15 pr0 mb8 pt15 sbcw"
  }, _react.default.createElement("h2", {
    className: "f16 pfc5 fw9 mb24 footer-navigation-header"
  }, heading.replace('About ', ''), " Travel Guide by Category"), _react.default.createElement(_reactStickynode.default, {
    top: "#startListingDesc",
    bottomBoundary: "#endListingDesc"
  }, _react.default.createElement("div", {
    className: "footer-navigation-container swiper-full-width"
  }, _react.default.createElement("div", {
    className: "flex"
  }, navigationLinkItems.map(value => {
    const footerNavigationElement = footerNavigation[value.toLowerCase()];

    if (!footerNavigationElement) {
      return null;
    }

    return _react.default.createElement("div", {
      className: "navigation-tile",
      key: footerNavigationElement.href
    }, _react.default.createElement(_reactScroll.Link, {
      activeClass: "active",
      id: footerNavigationElement.href + '-triggerlink',
      onSetActive: onSetActive,
      to: footerNavigationElement.href,
      spy: true,
      smooth: true,
      isDynamic: true,
      duration: 500,
      offset: -50
    }, _react.default.createElement(NavigationLogoContainer, {
      className: "navigation-logo-container mb8"
    }, _react.default.createElement(_Img.default, {
      ikSrc: footerNavigationElement.img.src,
      height: 79,
      width: 136,
      alt: footerNavigationElement.img.alt
    })), _react.default.createElement("p", {
      className: "pfc3 f14 fw9"
    }, footerNavigationElement.title)));
  })))));
};

FooterContentNavigation.propTypes = {
  navigationLinkItems: _propTypes.default.array,
  heading: _propTypes.default.string
};
var _default = FooterContentNavigation;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/InlineFilters/InlineFilter.js":
/*!**************************************************************!*\
  !*** ./app/components/Listing/InlineFilters/InlineFilter.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _CustomSwiper = _interopRequireDefault(__webpack_require__(/*! modules/shared/CustomSwiper */ "./app-v2/modules/shared/CustomSwiper.js"));

var _SmartFilter = __webpack_require__(/*! ../SortFilters/SmartFilter */ "./app/components/Listing/SortFilters/SmartFilter.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! ../../Common/Img */ "./app/components/Common/Img.js"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _parseFilters = _interopRequireDefault(__webpack_require__(/*! containers/Listing/parseFilters */ "./app/containers/Listing/parseFilters.js"));

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

var _inlineFilterCm = _interopRequireDefault(__webpack_require__(/*! ./inlineFilter.cm.scss */ "./app/components/Listing/InlineFilters/inlineFilter.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const filterTypeImages = {
  'honeymoon': `${_appConfig.default.assets.images}/public-product/honeymoon_4x.png`,
  'family': `${_appConfig.default.assets.images}/public-product/family_4x.png`,
  'friends': `${_appConfig.default.assets.images}/public-product/friends_4x.png`
};
let InlineFilter = class InlineFilter extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      filters: {}
    }, this.selectFilter = (filterId, optionId, tag) => {
      if (tag) {
        this.setState({
          filters: _objectSpread({}, this.state.filters, {
            [tag]: optionId
          })
        });
      }

      const optionValue = {
        [optionId]: true
      };

      if (this.props.selectedFilters[filterId] && this.props.selectedFilters[filterId][optionId]) {
        optionValue[optionId] = false;
      }

      const inclusion_category_filters = this.props.selectedFilters['inclusion_category_tags'];

      let inclusionObj = _objectSpread({}, inclusion_category_filters);

      const isExclusion = typeof optionId === 'string' && optionId.indexOf(_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD) > -1;

      if (tag) {
        if (isExclusion) {
          if (inclusion_category_filters && Object.keys(inclusion_category_filters).length && inclusion_category_filters[optionId.replace(_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD, '')]) {
            inclusionObj = _objectSpread({}, inclusionObj, {
              [optionId.replace(_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD, '')]: false
            });
            this.props.filterSelected('inclusion_category_tags', _objectSpread({}, inclusionObj));
          }
        } else {
          optionValue[`${optionId}${_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD}`] = false;
          this.props.filterSelected(tag, {
            [`${optionId}${_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD}`]: false
          });
        }
      }

      const obj = _objectSpread({}, this.props.selectedFilters, {
        'inclusion_category_tags': _objectSpread({}, inclusionObj),
        [filterId]: _objectSpread({}, this.props.selectedFilters[filterId], optionValue)
      });

      this.props.filterSelected(filterId, _objectSpread({}, this.props.selectedFilters[filterId], optionValue));
      this.props.filtersApplied(obj);
    }, this.deSelectOption = (isRadio, filter, optionId, id) => {
      const {
        filters
      } = this.state;

      if (isRadio && filters[filter] && filters[filter] === optionId) {
        if (filters[filter]) {
          this.setState(prevState => {
            return {
              filters: _objectSpread({}, prevState.filters, {
                filter: !prevState.filters[filter]
              })
            };
          });
        }

        const optionValue = {
          [optionId]: false
        };
        const type = typeof optionId === 'string' && optionId.includes(_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD) ? filter : id;
        this.props.filterSelected(type, _objectSpread({}, optionValue));

        const obj = _objectSpread({}, this.props.selectedFilters, {
          [type]: _objectSpread({}, this.props.selectedFilters[type], optionValue)
        });

        this.props.filtersApplied(obj);
      }

      return false;
    }, _temp;
  }

  componentDidMount() {
    const {
      location,
      type,
      filters
    } = this.props;

    if (type === 'radio') {
      const {
        filters: selectedFilters
      } = (0, _parseFilters.default)({
        query: location.query || {}
      });
      let tempFilter = {};
      Object.keys(selectedFilters).map(key => {
        const isExclusion = key === _parsers.EXCLUSION_CATEGORY_TAGS;
        const values = selectedFilters[key] || [];
        values && values.map(value => {
          const excText = isExclusion ? _parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD : '';
          const isFilter = filters.options.filter(option => option.id === `${value}${_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD}`)[0];
          const stateObj = isFilter && Object.keys(isFilter).length ? {
            [filters.tag]: `${value}${excText}`
          } : {};
          tempFilter = _objectSpread({}, tempFilter, stateObj);

          if (isExclusion && Object.keys(tempFilter).length) {
            this.props.filterSelected(filters.tag, {
              [`${value}${_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD}`]: true
            });
            this.props.setDefaultSelectedFilters('', filters.tag, {
              [`${value}${_parsers.EXCLUSION_CATEGORY_TAGS_KEYWORD}`]: true
            });
          }
        });
      });
      this.setState({
        filters: _objectSpread({}, tempFilter)
      });
    }
  }

  render() {
    const {
      isTheme,
      showImage,
      filters: {
        options,
        paramsName,
        id,
        tag
      },
      isDoubleLine,
      className,
      type = 'checkbox'
    } = this.props;
    const swiperStyle = isTheme ? {
      height: '88px'
    } : isDoubleLine ? {
      height: 'auto'
    } : {};
    return _react.default.createElement("div", {
      className: `p15 sbcw ${isTheme ? _inlineFilterCm.default.filtersContainer : _inlineFilterCm.default.filtersContainerCommon} ${className}`
    }, _react.default.createElement("input", {
      id: paramsName,
      type: "checkbox",
      className: `hide ${_inlineFilterCm.default.inlineFilters}`
    }), _react.default.createElement("label", {
      htmlFor: paramsName,
      className: "flex alignCenter spaceBetween"
    }, _react.default.createElement("p", {
      className: "f16 fwb"
    }, this.props.title), _react.default.createElement("span", {
      className: "input-24 relative p5 flex alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement("div", {
      className: `${isDoubleLine ? _inlineFilterCm.default.doubleLineInlineFiltersData : _inlineFilterCm.default.inlineFiltersData} ${type === 'radio' ? 'mr8' : ''}`
    }, _react.default.createElement(_CustomSwiper.default, {
      containerStyle: swiperStyle,
      isDoubleLine: isDoubleLine,
      styles: _inlineFilterCm.default
    }, options.map(filter => {
      return _react.default.createElement("div", {
        className: "flexFull"
      }, _react.default.createElement("input", {
        checked: this.state.filters[tag] === filter.id ? true : this.props.selectedFilters[id] ? this.props.selectedFilters[id][filter.id] : false,
        className: `hide ${_inlineFilterCm.default.inlineFiltersCheckbox}`,
        type: type,
        onChange: () => {
          this.selectFilter(type === 'radio' ? tag : id, filter.id, tag);
        },
        id: `inlinefilter_${paramsName}_${filter.value}`,
        key: filter.id,
        name: tag,
        onClick: () => this.deSelectOption(type === 'radio', tag, filter.id, id),
        disabled: (0, _SmartFilter.isFilterDisable)(filter, this.props.filterCounts, type === 'radio' ? tag : id)
      }), _react.default.createElement("label", {
        className: "noBeforeAfter flex radius2 overflowh flexDColumn p0",
        htmlFor: `inlinefilter_${paramsName}_${filter.value}`
      }, showImage ? _react.default.createElement("div", {
        className: `radius2 mr8 themeImgCntainer mb3 sbc5 ${_inlineFilterCm.default.theme}`
      }, _react.default.createElement(_Img.default, {
        ikSrc: filterTypeImages[filter.value],
        alt: filter.value
      })) : null, _react.default.createElement("div", {
        className: showImage ? 'text-left' : `${_inlineFilterCm.default.filterTitle} flexFull flex text-center alignCenter justifyCenter pl8 pr8 mr8`
      }, filter.title)));
    }))));
  }

};
InlineFilter.propTypes = {
  filters: _propTypes.default.object,
  isDoubleLine: _propTypes.default.bool,
  selectedFilters: _propTypes.default.object,
  filterSelected: _propTypes.default.func,
  filtersApplied: _propTypes.default.func,
  setDefaultSelectedFilters: _propTypes.default.func,
  filterCounts: _propTypes.default.object,
  title: _propTypes.default.string,
  isTheme: _propTypes.default.bool,
  showImage: _propTypes.default.bool,
  className: _propTypes.default.string,
  type: _propTypes.default.string,
  location: _propTypes.default.object
};
InlineFilter.defaultProps = {
  isDoubleLine: false,
  type: 'checkbox'
};
var _default = InlineFilter;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/InlineFilters/index.js":
/*!*******************************************************!*\
  !*** ./app/components/Listing/InlineFilters/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _InlineFilter = _interopRequireDefault(__webpack_require__(/*! components/Listing/InlineFilters/InlineFilter */ "./app/components/Listing/InlineFilters/InlineFilter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Index = class Index extends _react.Component {
  render() {
    const {
      isTourFilterSelected,
      filters,
      selectedFilters,
      filterSelected,
      filtersApplied,
      filterCounts,
      filterCategory
    } = this.props;
    return _react.default.createElement("div", null, isTourFilterSelected && filterCategory.indexOf('category') === -1 ? _react.default.createElement("div", {
      className: "mt8"
    }, _react.default.createElement(_InlineFilter.default, {
      filters: filters['36'],
      className: "inline-theme-filter inline-common-filter",
      selectedFilters: selectedFilters,
      isTheme: true,
      filterSelected: filterSelected,
      filtersApplied: filtersApplied,
      filterCounts: filterCounts,
      showImage: true,
      title: "Choose by Theme"
    })) : null, filterCategory.indexOf('days') === -1 ? _react.default.createElement("div", {
      className: "mt8"
    }, _react.default.createElement(_InlineFilter.default, {
      filters: filters['38'],
      className: "inline-common-filter days-filter",
      selectedFilters: selectedFilters,
      filterSelected: filterSelected,
      isTheme: false,
      filtersApplied: filtersApplied,
      filterCounts: filterCounts,
      title: "Choose by Duration"
    })) : null, filterCategory.indexOf('price_ranges') === -1 ? _react.default.createElement("div", {
      className: "mt8 mb8"
    }, _react.default.createElement(_InlineFilter.default, {
      filters: filters['39'],
      className: "inline-common-filter price-filters",
      selectedFilters: selectedFilters,
      filterSelected: filterSelected,
      isTheme: false,
      filtersApplied: filtersApplied,
      filterCounts: filterCounts,
      title: "Choose by Budget"
    })) : null);
  }

};
Index.displayName = 'InlineFilters';
Index.propTypes = {
  isTourFilterSelected: _propTypes.default.bool.isRequired,
  filters: _propTypes.default.object,
  selectedFilters: _propTypes.default.object,
  filterSelected: _propTypes.default.func,
  filtersApplied: _propTypes.default.func,
  filterCounts: _propTypes.default.object,
  filterCategory: _propTypes.default.array
};
var _default = Index;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/InlineFilters/inlineFilter.cm.scss":
/*!*******************************************************************!*\
  !*** ./app/components/Listing/InlineFilters/inlineFilter.cm.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"theme": "JT4sDFZissYj0xuji7VEM",
	"inlineFilters": "_1GYo_U_9APcUS6oY-vdgSW",
	"inlineFiltersData": "_1DVAKCKkn_CoW5l9_cjF1r",
	"doubleLineInlineFiltersData": "_3pZUx_Q-uTg3gQvr9f4kR6",
	"filterTitle": "_6d71WPTzDJBL2FyT_MqyN",
	"inlineFiltersCheckbox": "GFCOkGavB8IniG5mzJo0C",
	"doubleLine": "_1g8lEggKMoMJ3aLJ_gQ5zP",
	"doubleLineFlex": "_2zkCji1t5qbl6ux0seQi5X"
};

/***/ }),

/***/ "./app/components/Listing/PackageCardDealsAndLuxury.js":
/*!*************************************************************!*\
  !*** ./app/components/Listing/PackageCardDealsAndLuxury.js ***!
  \*************************************************************/
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

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _PackageImgTitleDeals = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageImgTitleDeals */ "./app/components/Listing/PackageImgTitleDeals.js"));

var _PackagePriceExperiment = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackagePriceExperiment */ "./app/components/Listing/PackagePriceExperiment.js"));

var _PackageDaysDiscountExperiment = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageDaysDiscountExperiment */ "./app/components/Listing/PackageDaysDiscountExperiment.js"));

var _PackageCities = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageCities */ "./app/components/Listing/PackageCities.js"));

var _PackageIncExcDeals = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageIncExcDeals */ "./app/components/Listing/PackageIncExcDeals.js"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _segmentEvents = __webpack_require__(/*! ../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

__webpack_require__(/*! ./PackageCities.scss */ "./app/components/Listing/PackageCities.scss");

__webpack_require__(/*! ./Listing.scss */ "./app/components/Listing/Listing.scss");

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GCardTagsSpan = _glamorous.default.span({
  height: '24px',
  backgroundColor: '#fac22e'
});

const GDiscountDiv = _glamorous.default.div({
  boxShadow: '0 0 6px rgba(0,0,0,0.5)'
});

const GHighlightBannerDiv = _glamorous.default.div({
  backgroundColor: '#ffc057'
});

const GLuxuryDiv = _glamorous.default.div({
  width: '124px',
  height: '55px',
  left: '-3px',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  overflow: 'hidden',
  top: '8px'
});

let PackageCardDealsAndLuxury = class PackageCardDealsAndLuxury extends _react.Component {
  constructor(props) {
    super(props);

    this.getCardTag = hideDiscount => {
      const {
        tag,
        card
      } = this.props;

      if (tag === 'deals') {
        this.label = card.labels[1];
        this.buttonText = 'Check Availability';
        return hideDiscount ? _react.default.createElement("div", null) : _react.default.createElement(GDiscountDiv, {
          className: "absolute radius2 t15 sbcw l15 z2 text-center"
        }, _react.default.createElement("p", {
          className: "f12 m0 p5"
        }, "Deal of the Day"), _react.default.createElement("div", {
          className: "flex alignCenter pbc1 justifyCenter pt5 pb5 pl8 pr8"
        }, _react.default.createElement("p", {
          className: "f32 sfcw fw9 m0"
        }, Math.round(card.discount_percentage)), _react.default.createElement("div", {
          className: "ml2"
        }, _react.default.createElement("p", {
          className: "f12 sfcw m0"
        }, "%"), _react.default.createElement("p", {
          className: "f12 sfcw m0"
        }, "off"))));
      } else if (tag === 'luxury') {
        this.label = 'Hassel Free Booking | All Inclusive | 24x7 Assistance';
        this.buttonText = 'Customize';
        return _react.default.createElement(GLuxuryDiv, {
          className: "absolute radius2 t15 l15 z2 "
        }, _react.default.createElement(_Icon.LuxuryPackageIcon, null));
      }

      return _react.default.createElement("div", null);
    };

    this.state = {
      hotelId: props.card.id
    };
    this.sensorVisibility = false;
    this.trackSegmentEvent = this.trackSegmentEvent.bind(this);
    this.trackLeadClickEvent = this.trackLeadClickEvent.bind(this);
    this.renderHotelSelections = this.renderHotelSelections.bind(this);
  }

  onSensorChange(isVisible, ctaTextPackage, toDestination) {
    if (!this.sensorVisibility && isVisible) {
      this.sensorVisibility = isVisible;
      this.trackSegmentEvent(_segmentEvents.PACKAGE_VIEWED, ctaTextPackage, toDestination);
    }
  }

  trackSegmentEvent(event, ctaTextPackage, toDestination) {
    const {
      card
    } = this.props;
    (0, _segmentEvents.trackSegment)({
      event: event,
      category: `Destination:${toDestination}`,
      section: 'Package List/View Details',
      object: `Package/${card.id}`,
      cta: ctaTextPackage,
      package_id: card.id,
      destination_list: toDestination,
      destination_id: card.destinations[0].id,
      label: `Days:${card.days}::Index:${this.props.index + 1}`,
      value: card.price_total,
      package_name: card.name
    });
  }

  trackLeadClickEvent(ctaTextForm, toDestination) {
    const pId = this.props.card.id;
    const section = 'Get Quotes Button';
    const category = `Destination:${toDestination}`;
    const object = `Package/${pId}`;
    this.props.trackLeadFunnelClick(section, category, object, ctaTextForm, pId);
    return true;
  }

  renderHotelSelections() {
    const {
      card,
      setActiveHotels
    } = this.props;
    const hotelsIds = Object.keys(card.family_packages || {});

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map((hotelId, i) => {
        return _react.default.createElement("div", {
          key: hotelId,
          className: "iblock flex alignCenter hotelStarItem mr8"
        }, _react.default.createElement("input", {
          name: `hotel_star_input_${card.id}`,
          type: "radio",
          className: "hide",
          checked: hotelId.toString() === this.state.hotelId.toString(),
          id: `input_${card.id}_${hotelId}`,
          onChange: () => {
            this.setState({
              hotelId
            });
            setActiveHotels(card.id, hotelId);
          },
          value: hotelId
        }), _react.default.createElement("label", {
          className: "f12",
          htmlFor: `input_${card.id}_${hotelId}`
        }, card.family_packages[hotelId][0]), i < hotelsIds.length - 1 ? ', ' : '');
      });
      return _react.default.createElement("div", {
        className: "row row- star-ratings-selection flex alignCenter"
      }, hotelCheckboxes);
    }

    return null;
  }

  render() {
    const {
      card,
      formToLocation,
      tag
    } = this.props;
    const additionalInfoText = `Traveler has expressed interest in ${card.days} Days , ${card.nights} nights with cities ${card.cities}. For more details, see the <a href='/packages/${card.set_url}'>link</a>`; // TODO: Ugly code. Handle it differently

    let toDestination = '';

    try {
      toDestination = card.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }

    const formOneToLocation = formToLocation ? formToLocation : toDestination;
    const isDeal = tag === 'deals';
    const isLuxury = tag === 'luxury';
    const ctaTextPackage = isDeal ? 'View Deal' : 'View Details';
    const {
      isExperiment
    } = card;
    let hideDiscount = false,
        replacePrice = false,
        family_packages = card.family_packages;

    if (isExperiment) {
      hideDiscount = isExperiment.hideDiscount;
      replacePrice = isExperiment.replacePrice;
    }

    family_packages = replacePrice ? card.family_packages_map : card.family_packages;
    const hotelWithPrices = family_packages[this.state.hotelId] ? family_packages[this.state.hotelId] : [];
    const packageTag = this.getCardTag(hideDiscount);
    const ctaTextForm = this.buttonText;
    const price = family_packages[card.id];
    const dealnLuxury = {
      price: price && price[1],
      starRating: price && price[0],
      isFlight: !!card.inclusions.filter(inc => inc.key.toLowerCase() === 'flights' && inc.available).length
    };
    return _react.default.createElement("div", {
      className: "row row- mb8 mt8 relative exp-1 package-card"
    }, _react.default.createElement(GHighlightBannerDiv, {
      className: "p5 f12 pl15 pr15 text-center pfc3 wfull"
    }, this.label), _react.default.createElement("div", {
      className: "relative sbcw"
    }, _react.default.createElement(_reactRouter.Link, {
      to: `/packages/${card.set_url}?id=${this.state.hotelId}`,
      className: "sbcw",
      onClick: () => this.trackSegmentEvent(_segmentEvents.PACKAGE_CLICKED, ctaTextPackage, toDestination)
    }, _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement(_PackageImgTitleDeals.default, {
      isLargeImg: true,
      name: card.plp_heading || card.name,
      altText: card.set_url,
      imageUrl: card.image_url,
      imagekitUrl: card.imagekit_url
    }), card.mvp_tags.length ? _react.default.createElement(GCardTagsSpan, {
      className: "absolute z2 radius2 f12 fw7 t10 l10 pfc3 pl15 pr15 flex alignCenter justifyCenter"
    }, card.mvp_tags[0]) : null, packageTag, _react.default.createElement("div", {
      className: "absolute b0 l0 r0 mt8"
    }, _react.default.createElement(_PackageIncExcDeals.default, {
      inclusions: card.inclusions,
      id: `card_${card.id}`
    }))), _react.default.createElement("h3", {
      className: "relative fw9 f14 pl15 pr15 pfc3 mt8"
    }, card.name)), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, ctaTextPackage, toDestination),
      intervalDelay: 3000
    }), _react.default.createElement("div", {
      className: "row row- p8 sbcw"
    }, _react.default.createElement("div", {
      className: "pl8 pr8"
    }, _react.default.createElement("div", {
      className: "row row- flex alignCenter"
    }, _react.default.createElement("div", {
      className: "pl0"
    }, _react.default.createElement(_PackageDaysDiscountExperiment.default, {
      days: card.days,
      nights: card.nights
    })), _react.default.createElement("div", {
      className: "flex alignCenter mt3"
    }, this.renderHotelSelections(), _react.default.createElement("p", {
      className: "iblcok m0 ml5 f12"
    }, "Star Hotels Included"))), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr8"
    }, _react.default.createElement(_PackagePriceExperiment.default, {
      price: hotelWithPrices.length ? hotelWithPrices[2] : card.price_total,
      priceUnit: card.mini_desc,
      currency: card.currency,
      discount: hotelWithPrices.length ? hotelWithPrices[2] - hotelWithPrices[1] : card.price_total - card.discounted_price,
      promoTag: card.promo_tag,
      totalPrice: card.price_total,
      totalDiscount: card.price_total - card.discounted_price,
      hideDiscount: hideDiscount
    }))), isDeal && _react.default.createElement("div", {
      className: "row row- mt8 mb0"
    }, _react.default.createElement("div", {
      className: "col-xs-12 p0"
    }, _react.default.createElement("p", {
      className: "f12"
    }, _react.default.createElement("strong", null, "Validity: "), " ", card.labels[2]))), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 f10"
    }, _react.default.createElement(_PackageCities.default, {
      isDealsCard: true,
      cities: card.city_list_with_days || {}
    })))), _react.default.createElement("div", {
      className: "row row- pt8"
    }, _react.default.createElement("div", {
      className: "col-xs-6 pl0 pr4"
    }, _react.default.createElement(_reactRouter.Link, {
      to: `/packages/${card.set_url}?id=${this.state.hotelId}`,
      onClick: () => this.trackSegmentEvent(_segmentEvents.PACKAGE_CLICKED, ctaTextPackage, toDestination),
      className: "btn-pri wfull ripple"
    }, ctaTextPackage)), _react.default.createElement("div", {
      className: "col-xs-6 pl4 pr0",
      onClick: () => this.props.getPackageData(dealnLuxury)
    }, _react.default.createElement(_FormOneCTA.default, {
      tag: tag,
      rtProps: {
        to_loc: formOneToLocation,
        trip_days: card.days.toString(),
        packageId: card.id,
        page: 'Package List Page',
        section: 'Package List',
        cta: ctaTextForm,
        object: `Package/${card.id}`,
        addtl_info: additionalInfoText
      },
      clickHandler: () => this.trackLeadClickEvent(ctaTextForm, toDestination),
      deals: true,
      budget: card.discounted_price
    }, _react.default.createElement("div", {
      className: "btn-filled-pri pl8 pr8 wfull customized-variation ",
      "data-obj": JSON.stringify({
        to_loc: formOneToLocation,
        trip_days: card.days.toString()
      })
    }, ctaTextForm)))))));
  }

};
PackageCardDealsAndLuxury.propTypes = {
  card: _propTypes.default.object.isRequired,
  trackLeadFunnelClick: _propTypes.default.func,
  comparingPackages: _propTypes.default.array.isRequired,
  addToComparingPackages: _propTypes.default.func.isRequired,
  removeFromComparingPackages: _propTypes.default.func.isRequired,
  index: _propTypes.default.number,
  isMultiDestination: _propTypes.default.bool,
  multiDestinationTexts: _propTypes.default.array,
  formToLocation: _propTypes.default.string,
  tag: _propTypes.default.string,
  setActiveHotels: _propTypes.default.func.isRequired,
  getPackageData: _propTypes.default.func.isRequired
};
PackageCardDealsAndLuxury.defaultProps = {
  trackLeadFunnelClick: () => {},
  isMultiDestination: false,
  multiDestinationTexts: [],
  formToLocation: '',
  tag: ''
};
var _default = PackageCardDealsAndLuxury;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/PackageImgTitleDeals.js":
/*!********************************************************!*\
  !*** ./app/components/Listing/PackageImgTitleDeals.js ***!
  \********************************************************/
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

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GPackageImgDiv = _glamorous.default.div({
  height: '220px',
  overflow: 'hidden'
});

const PackageImgTitleDeals = ({
  imageUrl,
  imagekitUrl,
  altText
}) => _react.default.createElement(GPackageImgDiv, {
  className: "sbc5"
}, _react.default.createElement(_Img.default, {
  src: imageUrl,
  ikSrc: imagekitUrl,
  alt: altText,
  height: 200,
  itemProp: "image",
  itemType: "https://schema.org/image"
}));

PackageImgTitleDeals.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  altText: _propTypes.default.string.isRequired,
  isLargeImg: _propTypes.default.bool
};
PackageImgTitleDeals.defaultProps = {
  isLargeImg: false
};
var _default = PackageImgTitleDeals;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/PackageIncExcDeals.js":
/*!******************************************************!*\
  !*** ./app/components/Listing/PackageIncExcDeals.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var Icons = _interopRequireWildcard(__webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js"));

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

var _InclusionNotification = __webpack_require__(/*! constants/Packages/InclusionNotification */ "./app/constants/Packages/InclusionNotification.js");

__webpack_require__(/*! ./PackageIncExc.scss */ "./app/components/Listing/PackageIncExc.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */
const GIncDiv = _glamorous.default.div({
  '&.incl-excl-box': {
    minWidth: 'auto',
    maxWidth: 'none'
  },
  '& p': {
    whiteSpace: 'nowrap'
  }
});

const GInclDiv = _glamorous.default.div({
  '& .incl-excl-con': {
    height: '24px'
  }
});

const PackageIncExcDeals = ({
  inclusions,
  id,
  noScroll
}) => {
  const inclusionList = inclusions.map((inclusion, index) => {
    const IconComponent = Icons[(0, _parsers.capitalizeFirstLetter)(inclusion.key.replace(/[\s-_]/g, ''))] || Icons.Default;
    const disabledElementClass = inclusion.available ? '' : 'not-included hide';
    const disabledIconClass = inclusion.available ? '' : 'greyscale';
    const inclusionTextHidden = inclusion.text ? '' : 'hide';
    const InclusionNotificationPresent = inclusion.available && _InclusionNotification.InclusionNotification.indexOf(inclusion.key) > -1 ? 'relative' : '';
    return _react.default.createElement(GIncDiv, {
      className: `incl-excl-box mr8 ${inclusionTextHidden} ${disabledElementClass} ${InclusionNotificationPresent}`,
      key: `${id}_${inclusion.key}_${index}`
    }, _react.default.createElement("p", {
      className: "f10 sbcw radius20 pfc3 pl15 pr15 pt3 pb3 inclusionDeals flex alignCenter justifyCenter text-center"
    }, inclusion.text));
  });
  return _react.default.createElement(GInclDiv, {
    className: `row row- incl-excl-con p15 ${noScroll ? 'inc-no-scroll' : ''} `
  }, _react.default.createElement("div", {
    className: "row row- incl-excl-con-inner incl-excl-con-inner-deals "
  }, inclusionList));
};

PackageIncExcDeals.propTypes = {
  inclusions: _propTypes.default.array,
  id: _propTypes.default.string,
  noScroll: _propTypes.default.bool
};
PackageIncExcDeals.defaultProps = {
  noScroll: false,
  inclusions: [{
    key: 'hotel',
    available: true,
    text: 'Upto 3 Stars'
  }, {
    key: 'flights',
    available: false,
    text: 'Flights'
  }],
  id: 'default_1'
};
var _default = PackageIncExcDeals;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/TopDestination.js":
/*!**************************************************!*\
  !*** ./app/components/Listing/TopDestination.js ***!
  \**************************************************/
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

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

__webpack_require__(/*! ./TopDestination.scss */ "./app/components/Listing/TopDestination.scss");

var _segmentEvents = __webpack_require__(/*! ../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _constants = __webpack_require__(/*! app/constants */ "./app/constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let TopDestination = class TopDestination extends _react.Component {
  static trackSegmentEvent(destination) {
    (0, _segmentEvents.trackSegment)({
      event: _segmentEvents.PACKAGE_LIST_CLICK,
      section: 'Top Bar',
      category: `Destination: ${destination.name}`,
      cta: destination.name,
      object: `Destination/${destination.id}`,
      label: `Package Type: Destination: ${destination.name}`,
      destination_list: destination.name,
      destination_id: destination.id,
      value: _segmentEvents.DFEAULT_VALUE
    });
  }

  static getTopDestinations(destinations) {
    return destinations.map(destination => _react.default.createElement("div", {
      className: "top-destination-data text-center",
      key: destination.id
    }, _react.default.createElement(_reactRouter.Link, {
      onClick: () => TopDestination.trackSegmentEvent(destination),
      to: destination.packages_path
    }, _react.default.createElement("span", {
      className: "radius100 relative overflowh"
    }, _react.default.createElement(_Img.default, {
      width: 56,
      height: 56,
      ikSrc: destination.imagekit_url,
      src: destination.picture,
      defaultSrc: _constants.DEFAULT_IMAGE_PATH,
      alt: destination.alt
    })), _react.default.createElement("p", {
      className: "f12 pt8 ellipsis pfc3"
    }, destination.name))));
  }

  render() {
    const {
      destinations,
      title
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row- sbcw pt15 pb15 topd"
    }, _react.default.createElement("h2", {
      className: "fw9 pl15"
    }, title), _react.default.createElement("div", {
      className: "pl15 pt15 pr15 top-destination-con"
    }, _react.default.createElement("div", {
      className: "top-destination-inner"
    }, TopDestination.getTopDestinations(destinations))));
  }

};
TopDestination.propTypes = {
  destinations: _propTypes.default.array,
  category: _propTypes.default.string,
  title: _propTypes.default.string
};
TopDestination.defaultProps = {
  destinations: [],
  category: 'tour',
  title: 'Top Destinations'
};
var _default = TopDestination;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/TopDestination.scss":
/*!****************************************************!*\
  !*** ./app/components/Listing/TopDestination.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"top-destination-con": "_wUCdl",
	"top-destination-inner": "_3XYlk",
	"top-destination-data": "_OF4gu",
	"topd": "_GTN4U"
};

/***/ }),

/***/ "./app/components/Listing/TotalPackagesCount.js":
/*!******************************************************!*\
  !*** ./app/components/Listing/TotalPackagesCount.js ***!
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

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

__webpack_require__(/*! ./TotalPackagesCount.scss */ "./app/components/Listing/TotalPackagesCount.scss");

var _parsers = __webpack_require__(/*! ../../utils/parsers */ "./app/utils/parsers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TotalPackagesCount = ({
  totalPackages,
  startingPrice
}) => {
  const ctaText = 'BUILD YOUR OWN PACKAGE';
  return _react.default.createElement("div", {
    className: "row m8"
  }, _react.default.createElement("h3", {
    className: "row row- fw3"
  }, _react.default.createElement("span", {
    className: totalPackages > 0 ? 'f10 pfc4' : 'hide'
  }, totalPackages, " packages"), _react.default.createElement("span", {
    className: totalPackages > 0 ? 'inline f10 pfc4 ml3' : 'hide'
  }, "| Starting from ", `${(0, _parsers.parsePrice)({
    price: startingPrice
  })}`), _react.default.createElement("span", {
    className: totalPackages <= 0 ? 'f16 block text-center pt48 pb24 fw7 pfc4' : 'hide'
  }, _react.default.createElement("span", {
    className: "looking-icon"
  }, _react.default.createElement(_Icon.Uniquerequirements, null)), _react.default.createElement("p", {
    className: "m0 f18 pfc3"
  }, "Your Requirements are unique! "), _react.default.createElement("p", {
    className: "m0 f14 pfc1 mb8"
  }, "Our experts would love to create a package just for you."), _react.default.createElement(_FormOneCTA.default, null, _react.default.createElement("div", {
    className: "btn-filled-pri"
  }, _react.default.createElement("div", {
    className: "wave"
  }), ctaText)))));
};

TotalPackagesCount.propTypes = {
  totalPackages: _propTypes.default.number.isRequired,
  startingPrice: _propTypes.default.number.isRequired
};
var _default = TotalPackagesCount;
exports.default = _default;

/***/ }),

/***/ "./app/components/Listing/TotalPackagesCount.scss":
/*!********************************************************!*\
  !*** ./app/components/Listing/TotalPackagesCount.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"looking-icon": "_1xkPb"
};

/***/ }),

/***/ "./app/components/Story/StoryBox.js":
/*!******************************************!*\
  !*** ./app/components/Story/StoryBox.js ***!
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

__webpack_require__(/*! ./storybox.scss */ "./app/components/Story/storybox.scss");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StoryBox = ({
  title,
  imagePath,
  imagekitUrl
}) => _react.default.createElement("div", {
  className: "story-box-main mt8 p4"
}, _react.default.createElement("div", {
  className: "row row- bs4"
}, _react.default.createElement("div", {
  className: "story-box-main-img"
}, _react.default.createElement(_Img.default, {
  src: imagePath,
  ikSrc: imagekitUrl,
  alt: title,
  height: 140
})), _react.default.createElement("div", {
  className: "p8 sbcw"
}, _react.default.createElement("h3", {
  className: "pb8 f14p fw4"
}, title))));

StoryBox.propTypes = {
  postDate: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  imagePath: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired
};
var _default = StoryBox;
exports.default = _default;

/***/ }),

/***/ "./app/components/Story/TravelerStory.js":
/*!***********************************************!*\
  !*** ./app/components/Story/TravelerStory.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _StoryBox = _interopRequireDefault(__webpack_require__(/*! ./StoryBox */ "./app/components/Story/StoryBox.js"));

__webpack_require__(/*! ./travelerstory.scss */ "./app/components/Story/travelerstory.scss");

var _blogs = __webpack_require__(/*! ../../reducers/blogs */ "./app/reducers/blogs.js");

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let TravelerStory = (_dec = (0, _reactRedux.connect)(state => ({
  blogs: state.blogs.blogPosts
}), {
  loadBlogs: _blogs.loadBlogs
}), _dec(_class = (_temp = _class2 = class TravelerStory extends _react.Component {
  static getTagsToInclude(tags) {
    if (tags && tags.indexOf('tt_seasonal') > -1) {
      return tags;
    } else if (tags) {
      return [['travelogue'], [tags]];
    }

    return ['travelogue'];
  }

  componentDidMount() {
    this.props.loadBlogs({
      tags: {
        tags_to_include: TravelerStory.getTagsToInclude(this.props.tags),
        postCount: 10,
        sort_order: 'Desc',
        offset: 0
      }
    });
  }

  render() {
    if (!this.props.blogs.length) {
      return null;
    }

    const stories = this.props.blogs.map(blog => _react.default.createElement("a", {
      className: "pfc3",
      href: blog.url,
      key: blog.id
    }, _react.default.createElement(_StoryBox.default, {
      imagePath: blog.thumbnailImagePaths.src || blog.imagePaths.src,
      imagekitUrl: blog.thumbnailImagePaths.imagekitUrl || blog.imagePaths.imagekitUrl,
      title: blog.title
    })));
    return _react.default.createElement("div", {
      className: "row row- pl8 pr8"
    }, _react.default.createElement("div", {
      className: "row row- sbcw p8 review-con-main"
    }, _react.default.createElement("h2", {
      className: "text-center pfc1 f16 pb8"
    }, "Our traveler stories"), _react.default.createElement("p", {
      className: "text-center f12 pfc4"
    }, "They traveled, They experienced, They shared"), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_Swiper.default, {
      slideClass: "slide",
      spaceBetween: 8,
      slidesPerView: "auto",
      ssrAnimation: {
        width: 268,
        height: 220
      },
      rebuildOnUpdate: true
    }, stories))));
  }

}, _class2.propTypes = {
  blogs: _propTypes.default.array,
  loadBlogs: _propTypes.default.func,
  tags: _propTypes.default.array
}, _class2.defaultProps = {
  blogs: [],
  tags: ['travelogue'],
  loadBlogs: () => {}
}, _temp)) || _class);
var _default = TravelerStory;
exports.default = _default;

/***/ }),

/***/ "./app/components/Story/storybox.scss":
/*!********************************************!*\
  !*** ./app/components/Story/storybox.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"story-box-main-img": "_1Orxz"
};

/***/ }),

/***/ "./app/components/Story/travelerstory.scss":
/*!*************************************************!*\
  !*** ./app/components/Story/travelerstory.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"slide": "_OD6BE"
};

/***/ }),

/***/ "./app/constants/index.js":
/*!********************************!*\
  !*** ./app/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_IMAGE_PATH = void 0;
const DEFAULT_IMAGE_PATH = 'https://traveltriangle.com/assets/city_tour_guide_mobile/default_destination-8a3032af47bb4bba85c8148881953d38.png';
exports.DEFAULT_IMAGE_PATH = DEFAULT_IMAGE_PATH;

/***/ }),

/***/ "./app/containers/Listing/ListingAsync.js":
/*!************************************************!*\
  !*** ./app/containers/Listing/ListingAsync.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactScrollPercentage = __webpack_require__(/*! react-scroll-percentage */ "react-scroll-percentage");

var _queryString = __webpack_require__(/*! query-string */ "query-string");

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

var _TotalPackagesCount = _interopRequireDefault(__webpack_require__(/*! components/Listing/TotalPackagesCount */ "./app/components/Listing/TotalPackagesCount.js"));

var _TopDestination = _interopRequireDefault(__webpack_require__(/*! components/Listing/TopDestination */ "./app/components/Listing/TopDestination.js"));

var _PackageCardExperiment = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageCardExperiment */ "./app/components/Listing/PackageCardExperiment.js"));

var _PackageCardDealsAndLuxury = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageCardDealsAndLuxury */ "./app/components/Listing/PackageCardDealsAndLuxury.js"));

var _LoadMorePackages = _interopRequireDefault(__webpack_require__(/*! components/Listing/LoadMorePackages */ "./app/components/Listing/LoadMorePackages.js"));

var _travelerReview = _interopRequireDefault(__webpack_require__(/*! modules/travelerReview */ "./app-v2/modules/travelerReview/index.js"));

var _richText = _interopRequireDefault(__webpack_require__(/*! modules/richText */ "./app-v2/modules/richText/index.js"));

var _AboutListingDestination = _interopRequireDefault(__webpack_require__(/*! components/Listing/AboutListingDestination */ "./app/components/Listing/AboutListingDestination.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! components/Footer/Footer */ "./app/components/Footer/Footer.js"));

var _FixedMenu = _interopRequireDefault(__webpack_require__(/*! components/FixedMenu/FixedMenu */ "./app/components/FixedMenu/FixedMenu.js"));

var _TravelerStory = _interopRequireDefault(__webpack_require__(/*! components/Story/TravelerStory */ "./app/components/Story/TravelerStory.js"));

var _BreadcrumbListing = _interopRequireDefault(__webpack_require__(/*! components/Breadcrumb/BreadcrumbListing */ "./app/components/Breadcrumb/BreadcrumbListing.js"));

var _FilterView = _interopRequireDefault(__webpack_require__(/*! ./FilterView.js */ "./app/containers/Listing/FilterView.js"));

var _LoaderFirst = _interopRequireDefault(__webpack_require__(/*! components/ComparePackages/LoaderFirst */ "./app/components/ComparePackages/LoaderFirst.js"));

var _LoaderSecond = _interopRequireDefault(__webpack_require__(/*! components/ComparePackages/LoaderSecond */ "./app/components/ComparePackages/LoaderSecond.js"));

var _InlineFilters = _interopRequireDefault(__webpack_require__(/*! components/Listing/InlineFilters */ "./app/components/Listing/InlineFilters/index.js"));

var _InlineFilter = _interopRequireDefault(__webpack_require__(/*! components/Listing/InlineFilters/InlineFilter */ "./app/components/Listing/InlineFilters/InlineFilter.js"));

var _Faq = _interopRequireDefault(__webpack_require__(/*! components/Faq/Faq */ "./app/components/Faq/Faq.js"));

var _SeoFooter = _interopRequireDefault(__webpack_require__(/*! components/Common/SeoFooter */ "./app/components/Common/SeoFooter.js"));

var _seoHelpers = __webpack_require__(/*! helpers/seoHelpers */ "./app/helpers/seoHelpers.js");

var _whyBookWithOurAgents = _interopRequireDefault(__webpack_require__(/*! modules/whyBookWithOurAgents */ "./app-v2/modules/whyBookWithOurAgents/index.js"));

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _exitIntent = __webpack_require__(/*! helpers/exitIntent */ "./app/helpers/exitIntent.js");

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _index = _interopRequireDefault(__webpack_require__(/*! modules/placesToVisit/index */ "./app-v2/modules/placesToVisit/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! modules/thingsToDo/index */ "./app-v2/modules/thingsToDo/index.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _parsers2 = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _interlinking = _interopRequireDefault(__webpack_require__(/*! modules/shared/interlinking */ "./app-v2/modules/shared/interlinking/index.js"));

var _CityFilter = _interopRequireDefault(__webpack_require__(/*! app/components/Common/CityFilter/CityFilter.js */ "./app/components/Common/CityFilter/CityFilter.js"));

var _parseFilters = _interopRequireDefault(__webpack_require__(/*! ./parseFilters */ "./app/containers/Listing/parseFilters.js"));

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const isValidPrice = (totalPrice, discount) => {
  const parsedPrice = parseInt(totalPrice, 10);
  const parsedDiscount = parseInt(discount, 10);

  if (!parsedPrice || !parsedDiscount) {
    return false;
  }

  return parsedPrice >= 0 || parsedPrice - parsedDiscount >= 0;
};

let ListingAsync = (_temp = _class = class ListingAsync extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      activeHotels: {}
    };
  }

  static getBudget(queryStr) {
    const query = (0, _queryString.parse)(queryStr || '');
    const {
      filters
    } = (0, _parseFilters.default)({
      query
    });
    const pricefilter = filters && filters['price_ranges'];
    const priceArr = pricefilter && pricefilter.length ? pricefilter.join('-').replace(/_/g, '').split('-') : [];
    const sortedPriceArr = priceArr.map(Number).sort(_parsers.compareArr);
    return sortedPriceArr.length ? {
      minPrice: sortedPriceArr[0],
      maxPrice: sortedPriceArr[sortedPriceArr.length - 1]
    } : {};
  }

  static getCardAfterPrice(card, budget) {
    const inflateAmt = 15;
    let hideCard = false;
    const {
      price_total,
      discounted_price,
      family_packages
    } = card;
    const priceTotal = (0, _parsers.inflatePrice)(price_total, inflateAmt);
    const discountedPrice = (0, _parsers.inflatePrice)(discounted_price, inflateAmt);

    const family_packages_map = _objectSpread({}, family_packages);

    Object.keys(family_packages_map).map(hotelId => {
      const hotelPrice = [...family_packages_map[hotelId]];
      hotelPrice[1] = (0, _parsers.inflatePrice)(hotelPrice[1]);
      hotelPrice[2] = (0, _parsers.inflatePrice)(hotelPrice[2]);
      family_packages_map[hotelId] = hotelPrice;
    });
    const cardPrice = family_packages_map[card.id] && family_packages_map[card.id].length ? family_packages_map[card.id][1] : '';

    if (budget && Object.keys(budget).length && cardPrice && !(family_packages_map[card.id][1] > budget.minPrice && family_packages_map[card.id][1] < budget.maxPrice)) {
      hideCard = true;
    }

    return _objectSpread({}, card, {
      price_total: priceTotal,
      discounted_price: discountedPrice,
      family_packages_map: family_packages_map,
      hideCard
    });
  }

  static getExperimentData(e, experimentId, budget) {
    switch (experimentId) {
      case 'pr1':
        {
          return _objectSpread({}, e, {
            isExperiment: {
              hideDiscount: true
            }
          });
        }

      case 'pr2':
        {
          const cardData = ListingAsync.getCardAfterPrice(e, budget);
          return _objectSpread({}, cardData, {
            isExperiment: {
              hideDiscount: true,
              replacePrice: true
            }
          });
        }

      case 'def':
        {}

      default:
        {
          return e;
        }
    }
  }

  static getPackageList(packages, trackListingLeadFunnel, comparingPackages, addToComparingPackages, removeFromComparingPackages, isMultiDestination, multiDestinationTexts, formToLocation, setActiveHotels, getPackageData, fobpLinks, experimentId, budget) {
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
      setActiveHotels
    });

    const getPackageList = (e, tag, index) => {
      const card = ListingAsync.getExperimentData(e, experimentId, budget);

      if (card.hideCard) {
        return false;
      }

      if (tag === 'deals' || tag === 'luxury') {
        return _react.default.createElement(_PackageCardDealsAndLuxury.default, _extends({
          key: index
        }, getCardProps(card, index, experimentId), {
          tag: tag,
          getPackageData: getPackageData
        }));
      }

      return _react.default.createElement(_PackageCardExperiment.default, _extends({
        key: index
      }, getCardProps(card, index, experimentId)));
    };

    return packages.filter(pkg => isValidPrice(pkg.price_total, pkg.discounted_price)).map((e, index) => _react.default.createElement("div", {
      key: index
    }, index === 4 && fobpLinks && Object.keys(fobpLinks).length ? _react.default.createElement(_CityFilter.default, {
      fobpLinks: fobpLinks
    }) : null, getPackageList(e, e.labels[0].toLowerCase(), index)));
  }

  static renderPackagesWithExitIntent(packages, trackListingLeadFunnel, comparingPackages, addToComparingPackages, removeFromComparingPackages, isMultiDestination, multiDestinationTexts, formToLocation = '', showTopDestinations, similarLiveCities, pathParams, setActiveHotels, experienceFilters, getPackageData, isCity, destinationName, fobpLinks, experimentId, budget, flightFilters) {
    const packageCards = ListingAsync.getPackageList(packages, trackListingLeadFunnel, comparingPackages, addToComparingPackages, removeFromComparingPackages, isMultiDestination, multiDestinationTexts, formToLocation, setActiveHotels, getPackageData, fobpLinks, experimentId, budget);

    const exitDiv = _react.default.createElement("div", {
      id: "reactExitIntentImage",
      className: "mkt-mob-exit-intent mb8 row row- mb8 relative",
      onClick: _exitIntent.showPopUp
    });

    const topDestination = showTopDestinations ? _react.default.createElement(_TopDestination.default, {
      category: pathParams.category,
      title: ListingAsync.topDestinationsTitle(isCity, destinationName, pathParams),
      destination: pathParams.destination,
      destinations: similarLiveCities
    }) : null;

    if (packageCards.length === 0) {
      return packageCards;
    } else if (packageCards.length > 3) {
      return [...packageCards.slice(0, 1), flightFilters, ...packageCards.slice(1, 3), topDestination, ...packageCards.slice(3, 4), experienceFilters, ...packageCards.slice(4, 5), exitDiv, ...packageCards.slice(5)];
    } else {
      return [...packageCards.slice(0, 1), flightFilters, ...packageCards.slice(1, 3), topDestination, experienceFilters, exitDiv];
    }
  }

  componentDidMount() {
    (0, _segmentEvents.initializeScroller)();
    (0, _segmentEvents.trackSegment)(this.createSegmentObject());

    try {
      if (this.props.isDestinationTypeAll) {
        this.props.setDestinationTypeFilter();
      }
    } catch (e) {
      console.log(e);
    }

    this.getDestination(this.props);
    (0, _exitIntent.initializeExitIntent)();
    this.pageTrackSegmentEvent(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      (0, _segmentEvents.trackSegment)(this.createSegmentObject());
      this.pageTrackSegmentEvent(nextProps);
    }

    if (this.props.comparingPackages.length === 2 && !this.props.submitted) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      console.log(prevProps.submitted); // FIXME:: What is the resolution of this?

      this.timer = setTimeout(() => {
        prevProps.push({
          pathname: '/comparepackages',
          query: {
            ids: this.getComparingPackageIds(this.props.comparingPackages)
          }
        });
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

  render() {
    const {
      location,
      pathParams,
      isMultiDestination,
      multiDestinationTexts,
      trackLeadFunnelClick,
      packages,
      addToComparingPackages,
      removeFromComparingPackages,
      selectedFilters,
      sortBy,
      selectedFilterCount,
      setTourCategoryFilter,
      totalPackages,
      startingPrice,
      packagesToDisplay,
      currentPage,
      route,
      footerSection,
      breadcrumbs,
      comparingPackages,
      faqs,
      similarLiveCities,
      isCity,
      loading,
      bannerHeadline,
      allPackageLink,
      filterCategory,
      formToLocation,
      filterSelected,
      filterCounts,
      isTourFilterSelected,
      seoFooter,
      filterDestinationActivities,
      getPackageData,
      destinationName,
      footerLinks,
      fobpLinks,
      experimentId,
      setDefaultSelectedFilters,
      rating,
      reviews,
      richText,
      schemaAttributes
    } = this.props;
    const {
      package_starting_price
    } = packages;
    const isRatingSchemaEnabled = schemaAttributes && schemaAttributes.star_rating && reviews;
    const TravelerReviewContainer = _travelerReview.default.plpContainer;
    let url = location.pathname;

    if (url[url.length - 1] === '/') {
      url = url.substring(0, url.lastIndexOf('/'));
    }

    const spacedDestination = pathParams.destination ? `${pathParams.destination.split('-').join(' ')} ` : '';
    const destinationTitle = isMultiDestination ? `${(0, _parsers.parseDestinationsToShow)(multiDestinationTexts)} ` : spacedDestination;
    const title = `${destinationTitle}${pathParams.category} Packages`;

    const trackListingLeadFunnel = (section, category, object, cta, pId) => {
      (0, _FormDataFormatter.setCookie)('package_id_lead_funnel', pId);
      trackLeadFunnelClick({
        section,
        object,
        cta,
        packageId: pId,
        category,
        funnelStep: 1
      });
    };

    const experienceFilters = this.renderExperienceFilters(filterDestinationActivities, isTourFilterSelected, filterSelected, selectedFilters, filterCategory, filterCounts);
    const flightFilters = this.renderFlightFilters(this.getFilters(), filterSelected, setDefaultSelectedFilters, selectedFilters, filterCategory, location, isTourFilterSelected, filterCounts, route.packageType !== 'seasonal');
    const showTopDestinations = similarLiveCities && similarLiveCities.length && !isMultiDestination && route.packageType !== 'seasonal';
    const budget = ListingAsync.getBudget(location.search);
    return _react.default.createElement("div", {
      className: "row row- sbc5"
    }, this.renderHelmet(title), _react.default.createElement("link", {
      rel: "canonical",
      href: `https://traveltriangle.com${url}`
    }), _react.default.createElement("div", {
      id: "bg-mask-ei",
      className: "bg-mask-ei",
      onClick: e => (0, _exitIntent.hidePopup)(e)
    }), _react.default.createElement(_reactScrollPercentage.ScrollPercentage, {
      onChange: _segmentEvents.onScroll
    }, _react.default.createElement("div", {
      vocab: isRatingSchemaEnabled ? "https://schema.org/" : null,
      "typeof": isRatingSchemaEnabled ? "Product" : null
    }, _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_HeaderTitle.default, {
      title: bannerHeadline ? (0, _utils.capitalizeEveryFirstLetter)(bannerHeadline) : title,
      backUrl: this.props.location.action === 'POP' ? '/' : '',
      isRatingSchemaEnabled: isRatingSchemaEnabled
    }), _react.default.createElement(_FilterView.default, {
      filters: this.getFilters(),
      selectedFilters: selectedFilters,
      sortBy: sortBy,
      filtersApplied: () => this.onFiltersApply(this.props.selectedFilters),
      location: location,
      selectedFilterCount: selectedFilterCount,
      intiFiltersTour: setTourCategoryFilter,
      category: pathParams.category,
      filterCategory: filterCategory || [],
      onFilterCheckHandler: this.loadFilterCounts
    }), !totalPackages ? _react.default.createElement(_TotalPackagesCount.default, {
      totalPackages: totalPackages || 0,
      startingPrice: startingPrice
    }) : null, route.packageType !== 'seasonal' && packages.length ? _react.default.createElement(_InlineFilters.default, {
      isTourFilterSelected: isTourFilterSelected,
      filters: this.getFilters(),
      filterSelected: filterSelected,
      filtersApplied: filterOptions => {
        this.onFiltersApply(filterOptions);
      },
      selectedFilters: selectedFilters,
      filterCategory: filterCategory || [],
      filterCounts: filterCounts
    }) : null, totalPackages ? _react.default.createElement("div", {
      className: "sbcw p15 pt0 pb8"
    }, _react.default.createElement("h2", {
      className: "fw9 pt15 f16 mb8 pfc3"
    }, "Showing", _react.default.createElement("span", {
      className: "ml5 at_packagecountfilter pfc1"
    }, `${totalPackages > 0 ? totalPackages : 0}`), ` `, _react.default.createElement("span", {
      className: "text-capitalize"
    }, bannerHeadline ? bannerHeadline : title)), allPackageLink && allPackageLink.text ? _react.default.createElement("a", {
      className: "flex fwb",
      href: allPackageLink.link
    }, _react.default.createElement("span", {
      className: "mb8"
    }, `All ${allPackageLink.text}`), _react.default.createElement("span", {
      className: "icon24 p8 flex"
    }, _react.default.createElement("span", {
      className: "flexFull relative rotate270 block wfull hfull read-more-button"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : null) : null, ListingAsync.renderPackagesWithExitIntent(packages, trackListingLeadFunnel, comparingPackages, addToComparingPackages, removeFromComparingPackages, isMultiDestination, multiDestinationTexts, formToLocation, showTopDestinations, similarLiveCities, pathParams, this.setActiveHotels, experienceFilters, getPackageData, isCity, destinationName, fobpLinks, experimentId, budget, flightFilters), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_LoadMorePackages.default, {
      packagesRemaining: totalPackages - packagesToDisplay,
      loadMorePackages: this.loadMorePackages,
      currentPage: currentPage,
      title: "Packages remaining",
      loading: loading
    })), _react.default.createElement("div", {
      className: "m8 ml0 mr0"
    }, _react.default.createElement(TravelerReviewContainer, {
      destination: pathParams.destination
    })), route.packageType === 'seasonal' ? _react.default.createElement(_TravelerStory.default, {
      tags: ['tt_seasonal']
    }) : _react.default.createElement(_TravelerStory.default, {
      tags: [pathParams.destination]
    }), footerLinks && Object.keys(footerLinks).length ? _react.default.createElement(_interlinking.default, {
      footerLinks: [footerLinks]
    }) : null, faqs && faqs.length ? _react.default.createElement("div", {
      className: "row row- mt8 mb8 sbc5"
    }, _react.default.createElement(_Faq.default, {
      faqs: faqs,
      destination: {
        name: spacedDestination,
        id: ''
      },
      isMultiDestination: packages.is_multi_destination,
      destinations: packages.multi_destination_texts
    })) : null, pathParams.destination ? _react.default.createElement(_index.default.container, {
      externalCss: "mb8 p15 sbcw"
    }) : null, pathParams.destination ? _react.default.createElement(_index2.default.container, {
      externalCss: "mb8 p15 sbcw"
    }) : null, Object.keys(footerSection).length ? _react.default.createElement("div", {
      className: "row row- mt8 sbc5 mb8"
    }, _react.default.createElement(_AboutListingDestination.default, {
      footerSection: footerSection,
      isRatingSchemaEnabled: isRatingSchemaEnabled
    })) : null, _react.default.createElement("div", {
      className: "row row- sbcw pb0 sbc5"
    }, _react.default.createElement(_whyBookWithOurAgents.default, null)), _react.default.createElement(_BreadcrumbListing.default, {
      breadcrumbs: breadcrumbs
    }), _react.default.createElement(_richText.default, {
      richText: richText,
      rating: rating,
      reviews: reviews,
      startingPrice: package_starting_price,
      isRatingSchemaEnabled: isRatingSchemaEnabled
    }), route.packageType !== 'seasonal' && seoFooter.footer_sections && seoFooter.footer_sections.length ? _react.default.createElement(_SeoFooter.default, {
      footerSections: seoFooter.footer_sections
    }) : null, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_Footer.default, null)), _react.default.createElement(_FixedMenu.default, null), comparingPackages.length === 1 && !(0, _FormDataFormatter.getCookie)('first_loader_opened') && _react.default.createElement(_LoaderFirst.default, {
      onClose: () => this.setState({
        firstLoaderOpened: true
      })
    }), comparingPackages.length === 2 && _react.default.createElement(_LoaderSecond.default, null))));
  }

}, _class.propTypes = {
  packages: _propTypes.default.array,
  totalPackages: _propTypes.default.number,
  filters: _propTypes.default.object.isRequired,
  selectedFilters: _propTypes.default.object.isRequired,
  sortBy: _propTypes.default.object.isRequired,
  packagesToDisplay: _propTypes.default.number.isRequired,
  currentPage: _propTypes.default.number.isRequired,
  location: _propTypes.default.object.isRequired,
  pathParams: _propTypes.default.object.isRequired,
  testimonials: _propTypes.default.array,
  metaTags: _propTypes.default.array,
  breadcrumbs: _propTypes.default.array,
  comparingPackages: _propTypes.default.array.isRequired,
  submitted: _propTypes.default.bool.isRequired,
  isTourFilterSelected: _propTypes.default.bool,
  isMultiDestination: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  isCity: _propTypes.default.bool,
  route: _propTypes.default.object.isRequired,
  isDestinationTypeAll: _propTypes.default.bool.isRequired,
  startingPrice: _propTypes.default.number.isRequired,
  multiDestinationTexts: _propTypes.default.array,
  loadMorePackages: _propTypes.default.func.isRequired,
  selectedFilterCount: _propTypes.default.func.isRequired,
  trackLeadFunnelClick: _propTypes.default.func,
  addToComparingPackages: _propTypes.default.func.isRequired,
  removeFromComparingPackages: _propTypes.default.func.isRequired,
  push: _propTypes.default.func.isRequired,
  submittedForCompare: _propTypes.default.func.isRequired,
  removeCompareData: _propTypes.default.func.isRequired,
  setTourCategoryFilter: _propTypes.default.func.isRequired,
  setDestinationTypeFilter: _propTypes.default.func.isRequired,
  footerSection: _propTypes.default.object.isRequired,
  faqs: _propTypes.default.array.isRequired,
  similarLiveCities: _propTypes.default.array,
  bannerHeadline: _propTypes.default.string,
  allPackageLink: _propTypes.default.object,
  filterCategory: _propTypes.default.array,
  filterDestinationActivities: _propTypes.default.array,
  routeParams: _propTypes.default.object,
  formToLocation: _propTypes.default.string,
  dynamicPlpPage: _propTypes.default.bool,
  filterSelected: _propTypes.default.func,
  filterCounts: _propTypes.default.object,
  createFilterParam: _propTypes.default.func.isRequired,
  setDefaultSelectedFilters: _propTypes.default.func.isRequired,
  resetDefaultFilters: _propTypes.default.func,
  destinationName: _propTypes.default.string,
  seoFooter: _propTypes.default.object,
  banner: _propTypes.default.object,
  richText: _propTypes.default.string,
  rating: _propTypes.default.number.isRequired,
  reviews: _propTypes.default.number.isRequired,
  getPackageData: _propTypes.default.func.isRequired,
  footerLinks: _propTypes.default.object,
  fobpLinks: _propTypes.default.Object,
  schemaAttributes: _propTypes.default.object.isRequired,
  packageStartPrice: _propTypes.default.number,
  experimentId: _propTypes.default.string
}, _class.defaultProps = {
  packages: [],
  totalPackages: 0,
  testimonials: [],
  trackLeadFunnelClick: () => {},
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
}, _class.topDestinationsTitle = (isCity, destinationName, pathParams) => {
  if (pathParams.destination) {
    if (isCity) {
      return `Packages for other cities ${destinationName ? `in ${(0, _utils.capitalizeEveryFirstLetter)(destinationName)}` : ''}`;
    } else {
      return `${(0, _utils.capitalizeEveryFirstLetter)(pathParams.destination)} Packages By Cities`;
    }
  } else {
    return `Packages for Top ${pathParams.category.toLowerCase() === 'tour' ? 'Holiday' : pathParams.category} Destinations`;
  }
}, _initialiseProps = function () {
  this.createSegmentObject = () => ({
    event: _segmentEvents.PACKAGE_LIST_VIEWED,
    category: `Destination:${this.props.pathParams.destination || 'Unknown'}`,
    label: `Package Type:${(0, _parsers.deCapitalizeFirstLetter)(this.props.pathParams.category || '')}`,
    destination_list: '',
    destination_id: '',
    num_destinations: 0,
    package_id: 0,
    value: 1
  });

  this.trackFilterSegmentEvent = (event, values) => {
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

    (0, _segmentEvents.trackSegment)({
      event: event,
      section: 'Package List',
      object: '',
      cta: '',
      label: filters,
      value: _segmentEvents.DEFAULT_VALUE,
      category: `Destination:Unknown'}`
    });
  };

  this.pageTrackSegmentEvent = props => {
    const {
      pathParams: {
        category
      },
      packages,
      destinationName
    } = props;
    const id = packages.length && packages[0].destinations.length ? packages[0].destinations[0].id : 0;
    (0, _utils.rescue)(() => {
      const destinationList = props.isMultiDestination ? props.multiDestinationTexts.join('::') : destinationName;
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.PLP_PAGE_VIEW,
        destination_list: destinationList || '',
        destination_id: destinationName ? id : 0,
        destination_type: (0, _parsers.capitalizeFirstLetter)(category)
      });
    });
  };

  this.getComparingPackageIds = comparePackages => {
    return comparePackages.map(pkg => this.state.activeHotels[pkg.id] || pkg.id).join(',');
  };

  this.getDestination = props => {
    const isDynamicPLP = props.dynamicPlpPage || false;
    let dest = props.formToLocation || '';

    if (isDynamicPLP) {
      (0, _FormDataFormatter.setCookie)('cb_dt', (0, _utils.capitalizeAndReplaceDash)(dest));
      (0, _utils.setVisitedDestinationsCookie)((0, _utils.capitalizeAndReplaceDash)(dest));
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
        (0, _utils.httpClient)('POST', '/browsing/v1/destinations/rbt_parse', {
          data
        }).then(response => {
          const result = response.body.data;

          if (result.matched_destinations) {
            (0, _FormDataFormatter.setCookie)('cb_dt', (0, _utils.capitalizeAndReplaceDash)(result.matched_destinations));
            (0, _utils.setVisitedDestinationsCookie)((0, _utils.capitalizeAndReplaceDash)(result.matched_destinations));
          } else {
            (0, _FormDataFormatter.setCookie)('cb_dt', (0, _utils.capitalizeAndReplaceDash)(dest));
            (0, _utils.setVisitedDestinationsCookie)((0, _utils.capitalizeAndReplaceDash)(dest));
          }
        });
      } else {
        (0, _FormDataFormatter.setCookie)('cb_dt', (0, _utils.capitalizeAndReplaceDash)(dest));
        (0, _utils.setVisitedDestinationsCookie)((0, _utils.capitalizeAndReplaceDash)(dest));
      }
    }
  };

  this.onFiltersApply = selectedFilters => {
    this.props.resetDefaultFilters();
    const nextUrl = (0, _parsers.createListingUrl)(this.props.filters, selectedFilters, this.props.sortBy.selected, this.props.route && this.props.route.category, 1, this.props.pathParams.destination.toLowerCase() || '', this.props.routeParams.listingType);
    this.props.push(nextUrl);
    this.trackFilterSegmentEvent(_segmentEvents.FILTER_CLICKED, this.props.selectedFilters);
  };

  this.loadFilterCounts = () => this.props.createFilterParam(this.props.route, this.props.pathParams);

  this.getPageFullName = () => {
    let result = '';
    const spacedDestination = this.props.pathParams.destination ? `${this.props.pathParams.destination.split('-').join(' ')}` : null;

    if (spacedDestination === null) {
      result = `Package List Page/${this.props.pathParams.category}`;
    } else {
      result = `Package List Page/${this.props.pathParams.category}/Destination:${spacedDestination}`;
    }

    return result;
  };

  this.getFilters = () => {
    if (this.props.route && this.props.route.packageType === 'seasonal') {
      const _props$filters = this.props.filters,
            {
        '36': omit
      } = _props$filters,
            filters = _objectWithoutProperties(_props$filters, ["36"]); // eslint-disable-line quote-props


      return filters;
    }

    return this.props.filters;
  };

  this.loadMorePackages = pageNumber => {
    const {
      location,
      sortBy,
      pathParams,
      route,
      loadMorePackages: loadMorePackagesDispatcher,
      routeParams: {
        listingType
      }
    } = this.props;
    const url = (0, _parsers.createListingApiUrl)(location, route, sortBy.selected, pageNumber, pathParams.destination.toLowerCase(), route.packageType, listingType, this.props.filters, this.props.selectedFilters);
    loadMorePackagesDispatcher(url);
  };

  this.createDescriptionTag = () => {
    const {
      metaTags,
      totalPackages,
      route: {
        category = 'tour'
      },
      pathParams: {
        destination
      },
      bannerHeadline
    } = this.props;
    const description = (0, _seoHelpers.getDescription)('', metaTags);

    if (bannerHeadline) {
      return `${totalPackages} ${(0, _utils.capitalizeEveryFirstLetter)(bannerHeadline)}${description ? ` - ${description}` : ''}`;
    } else {
      return `${totalPackages}${destination ? ` ${(0, _parsers2.makeCapitalizedSentence)(destination)}` : ''} ${(0, _utils.capitalizeEveryFirstLetter)(category)} ${totalPackages > 1 ? 'Packages' : 'Package'} - ${(0, _seoHelpers.getDescription)('', metaTags)}`;
    }
  };

  this.renderHelmet = title => {
    const {
      metaTags: metaTagList,
      location,
      banner,
      currentPage
    } = this.props;
    return _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, (0, _seoHelpers.getTitle)(title, metaTagList)), _react.default.createElement("meta", {
      name: "theme-color",
      content: "#68c4c1"
    }), _react.default.createElement("meta", {
      property: "og:url",
      content: this.getPageUrl()
    }), _react.default.createElement("meta", {
      property: "og:image",
      content: banner && banner.pic_url
    }), _react.default.createElement("meta", {
      property: "og:site_name",
      content: "TravelTriangle.com"
    }), _react.default.createElement("meta", {
      name: "smartaddon-verification",
      content: "eddbf5aa71ba4a4029bead17a0940aaf"
    }), _react.default.createElement("meta", {
      charSet: "utf-8"
    }), _react.default.createElement("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), _react.default.createElement("meta", {
      name: "description",
      content: this.createDescriptionTag()
    }), _react.default.createElement("meta", {
      property: "og:description",
      content: this.createDescriptionTag()
    }), _react.default.createElement("meta", {
      property: "al:android:url",
      content: `tt://${(0, _urlHelpers.getAppSchemeUrl)(location, currentPage)}`
    }), _react.default.createElement("meta", {
      property: "al:ios:url",
      content: `ttiosapp://applinks?al_applink_data=${(0, _urlHelpers.iosDeepLink)(`https://traveltriangle.com/${(0, _urlHelpers.getAppSchemeUrl)(location, 1, 'ios')}`)}`
    }), _react.default.createElement("meta", {
      property: "should_fallback",
      content: "false"
    }), _react.default.createElement("meta", {
      name: "page_fullname",
      content: this.getPageFullName()
    }), (0, _seoHelpers.renderMetaTags)(metaTagList));
  };

  this.renderExperienceFilters = (filterDestinationActivities, isTourFilterSelected, filterSelected, selectedFilters, filterCategory, filterCounts) => {
    return filterDestinationActivities && filterDestinationActivities.length ? _react.default.createElement("div", {
      className: "mt8 hide expFilter"
    }, _react.default.createElement(_InlineFilter.default, {
      filters: {
        displayType: 'checkbox',
        options: filterDestinationActivities,
        id: 'location_experiences',
        paramsName: 'location_experiences[]',
        title: 'Experiences'
      },
      className: "inline-common-filter",
      selectedFilters: selectedFilters,
      filterSelected: filterSelected,
      isTheme: false,
      filtersApplied: filterOptions => {
        this.onFiltersApply(filterOptions);
      },
      filterCounts: filterCounts,
      isDoubleLine: true,
      title: "Choose by Attractions & Experiences"
    })) : null;
  };

  this.renderFlightFilters = (filters, filterSelected, setDefaultSelectedFilters, selectedFilters, filterCategory, location, isTourFilterSelected, filterCounts, notSeasonal) => {
    return notSeasonal ? _react.default.createElement("div", {
      className: "mt8 mb8"
    }, _react.default.createElement(_InlineFilter.default, {
      filters: filters['flight_filter'],
      className: "inline-common-filter flight-filters",
      selectedFilters: selectedFilters,
      filterSelected: filterSelected,
      setDefaultSelectedFilters: setDefaultSelectedFilters,
      isTheme: false,
      filtersApplied: filterOptions => {
        this.onFiltersApply(filterOptions);
      },
      filterCounts: filterCounts,
      type: "radio",
      location: location,
      title: "View Packages"
    })) : null;
  };

  this.setActiveHotels = (pkgId, hotelId) => {
    let activeHotels = this.state.activeHotels;
    activeHotels = _objectSpread({}, activeHotels, {
      [pkgId]: hotelId
    });
    this.setState({
      activeHotels
    });
  };

  this.getPageUrl = () => {
    let link = this.props.location.pathname.split(/page\/\d+/).join('');

    if (link[link.length - 1] === '/') {
      link = link.substring(0, link.lastIndexOf('/'));
    }

    return `https://traveltriangle.com${link}`;
  };
}, _temp);
var _default = ListingAsync;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wbGFjZXNUb1Zpc2l0L1BsYWNlc1RvVmlzaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcGxhY2VzVG9WaXNpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvQ3VzdG9tU3dpcGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9sb2FkZXJzL0xvYWRlckNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdGhpbmdzVG9Eby9UaGluZ3NUb0RvLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RoaW5nc1RvRG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvd2h5Qm9va1dpdGhPdXJBZ2VudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQ29tbW9uL0NpdHlGaWx0ZXIvQ2l0eUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21tb24vQ2l0eUZpbHRlci9jaXR5RmlsdGVyLmNtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQ29tcGFyZVBhY2thZ2VzL0NvbXBhcmVQYWNrYWdlcy5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NvbXBhcmVQYWNrYWdlcy9Mb2FkZXJGaXJzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Db21wYXJlUGFja2FnZXMvTG9hZGVyU2Vjb25kLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvQWJvdXRMaXN0aW5nRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Gb290ZXJDb250ZW50TmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0lubGluZUZpbHRlcnMvSW5saW5lRmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvSW5saW5lRmlsdGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0lubGluZUZpbHRlcnMvaW5saW5lRmlsdGVyLmNtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlQ2FyZERlYWxzQW5kTHV4dXJ5LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZUltZ1RpdGxlRGVhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlSW5jRXhjRGVhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Ub3BEZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL1RvcERlc3RpbmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Ub3RhbFBhY2thZ2VzQ291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Ub3RhbFBhY2thZ2VzQ291bnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9TdG9yeS9TdG9yeUJveC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9TdG9yeS9UcmF2ZWxlclN0b3J5LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1N0b3J5L3N0b3J5Ym94LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU3RvcnkvdHJhdmVsZXJzdG9yeS5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvTGlzdGluZy9MaXN0aW5nQXN5bmMuanMiXSwibmFtZXMiOlsiUGxhY2VzVG9WaXNpdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInRyYWNrU2VnbWVudCIsImN0YSIsImNhcmRJZCIsIm1pc2NUeXBlMSIsIm1pc2NJZDEiLCJ0cmFja1NlZ21lbnRFdmVudCIsIm9iamVjdCIsInJlbmRlciIsImRhdGEiLCJjb25maWciLCJsb2FkZWQiLCJleHRlcm5hbENzcyIsImVycm9ycyIsImxlbmd0aCIsImRlc3RpbmF0aW9uU2NoZW1lcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJhcnJheSIsInN0cmluZyIsImZ1bmMiLCJmZXRjaFBsYWNlc1RvVmlzaXREYXRhIiwiZGVmYXVsdFByb3BzIiwidmFyaWFudCIsIm9yZGVyIiwiY29udGFpbmVyIiwic3RhdGUiLCJwbGFjZXNUb1Zpc2l0IiwiYWN0aW9ucyIsImRlZmF1bHRBY3Rpb24iLCJHQ29udGFpbmVyRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwiaGVpZ2h0Iiwib3ZlcmZsb3dYIiwicGFkZGluZ0JvdHRvbSIsIkN1c3RvbVN3aXBlciIsImNvbnRhaW5lclN0eWxlIiwiaXNEb3VibGVMaW5lIiwic3R5bGVzIiwiZG91YmxlTGluZSIsImRvdWJsZUxpbmVGbGV4IiwiY2hpbGRyZW4iLCJvbmVPZlR5cGUiLCJMb2FkZXJDYXJkIiwiY2FyZFZpc2libGUiLCJ3aWR0aCIsIm1heFdpZHRoIiwibGluZVZpc2libGUiLCJUaGluZ3NUb0RvIiwiZmV0Y2hUaGluZ3NUb0RvRGF0YSIsImxheW91dCIsImNzciIsImRlc3RpbmF0aW9uIiwibWV0YUluZm8iLCJsb29rdXBQYXJlbnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInRoaW5nc1RvRG8iLCJjYXJkIiwiaGVhZGluZyIsIml0ZW1zIiwiaWNvbiIsInRpdGxlIiwicGFyYWdyYXBoIiwiV2h5Qm9va1dpdGhPdXJBZ2VudHMiLCJQdXJlQ29tcG9uZW50IiwidGlsZXMiLCJtYXAiLCJpdGVtIiwiaSIsIkljb25Db21wb25lbnQiLCJJY29ucyIsIndvcmtzQm94IiwiaW1hZ2UiLCJDaXR5RmlsdGVyIiwiZm9icExpbmtzIiwiZm9vdGVyTGlua3MiLCJuYW1lIiwic3dpcGVyU3R5bGUiLCJmaWx0ZXJzQ29udGFpbmVyQ29tbW9uIiwiaW5saW5lRmlsdGVycyIsImRvdWJsZUxpbmVJbmxpbmVGaWx0ZXJzRGF0YSIsImlubGluZUZpbHRlcnNEYXRhIiwiZm9vdGVyTGluayIsImluZGV4IiwidXJsIiwic291cmNlTmFtZSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiaW5saW5lRmlsdGVyc0NoZWNrYm94IiwiZmlsdGVyVGl0bGUiLCJMb2FkZXJGaXJzdCIsIm9uQ2xvc2UiLCJpc1JlcXVpcmVkIiwiTG9hZGVyU2Vjb25kIiwicGFyc2VyIiwiUGFyc2VyIiwicmVuZGVyRm9vdGVyQWJvdmVUZXh0IiwiZm9vdGVyU2VjdGlvbiIsImlzUmF0aW5nU2NoZW1hRW5hYmxlZCIsImZvb3RlckFib3ZlVGV4dCIsImZvb3Rlcl9hYm92ZV90ZXh0IiwicmVwbGFjZSIsIm0iLCJjb250ZW50IiwicGFyc2UiLCJyZW5kZXJIZWFkZXJCZWxvd1RleHQiLCJoZWFkZXJCZWxvd1RleHQiLCJoZWFkZXJfYmVsb3dfdGV4dCIsIkZvb3RlckNtcyIsImlzU2Nyb2xsVG9QYWNrYWdlc1N0aWNreSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZm9vdGVyR3VpZGVFbGVtZW50Iiwib2Zmc2V0VG9wIiwic2Nyb2xsVG9QYWNrYWdlc0VMZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVTY3JvbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGF0VHJpZ2dlckJ1dHRvbiIsInN0eWxlIiwiYm90dG9tIiwiY29udGFpbnMiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYWNrYWdlc0hlYWRpbmdFbGVtIiwic2Nyb2xsVG9Qb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGwiLCJzY3JvbGxUbyIsImltYWdlT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJpbWdPYnNlcnZlciIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwibGF6eUltYWdlIiwidGFyZ2V0Iiwic3JjIiwiZGF0YXNldCIsInVub2JzZXJ2ZSIsImFyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ2Iiwib2JzZXJ2ZSIsIm5hdmlnYXRpb25MaW5rSXRlbXMiLCJzYW5pdGl6ZWRGb290ZXJBYm92ZVRleHQiLCJsZWZ0IiwibWF0Y2giLCJwMSIsInB1c2giLCJBYm91dExpc3RpbmdEZXN0aW5hdGlvbiIsIlRyYXZlbEd1aWRlQ29udGFpbmVyIiwibWluSGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiTmF2aWdhdGlvbkxvZ29Db250YWluZXIiLCJkaXNwbGF5IiwiZm9vdGVyTmF2aWdhdGlvbiIsInRvTG93ZXJDYXNlIiwiYXNzZXRzIiwiaW1hZ2VzIiwiRm9vdGVyQ29udGVudE5hdmlnYXRpb24iLCJvblNldEFjdGl2ZSIsInRhcmdldElkIiwiYWN0aXZlbGluayIsInNjcm9sbEludG9WaWV3IiwiaW5saW5lIiwidmFsdWUiLCJmb290ZXJOYXZpZ2F0aW9uRWxlbWVudCIsImhyZWYiLCJpbWciLCJhbHQiLCJmaWx0ZXJUeXBlSW1hZ2VzIiwiSW5saW5lRmlsdGVyIiwiZmlsdGVycyIsInNlbGVjdEZpbHRlciIsImZpbHRlcklkIiwib3B0aW9uSWQiLCJ0YWciLCJzZXRTdGF0ZSIsIm9wdGlvblZhbHVlIiwic2VsZWN0ZWRGaWx0ZXJzIiwiaW5jbHVzaW9uX2NhdGVnb3J5X2ZpbHRlcnMiLCJpbmNsdXNpb25PYmoiLCJpc0V4Y2x1c2lvbiIsImluZGV4T2YiLCJFWENMVVNJT05fQ0FURUdPUllfVEFHU19LRVlXT1JEIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlclNlbGVjdGVkIiwib2JqIiwiZmlsdGVyc0FwcGxpZWQiLCJkZVNlbGVjdE9wdGlvbiIsImlzUmFkaW8iLCJmaWx0ZXIiLCJpZCIsInByZXZTdGF0ZSIsInR5cGUiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicXVlcnkiLCJ0ZW1wRmlsdGVyIiwia2V5IiwiRVhDTFVTSU9OX0NBVEVHT1JZX1RBR1MiLCJ2YWx1ZXMiLCJleGNUZXh0IiwiaXNGaWx0ZXIiLCJvcHRpb25zIiwib3B0aW9uIiwic3RhdGVPYmoiLCJzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzIiwiaXNUaGVtZSIsInNob3dJbWFnZSIsInBhcmFtc05hbWUiLCJjbGFzc05hbWUiLCJmaWx0ZXJzQ29udGFpbmVyIiwiZmlsdGVyQ291bnRzIiwidGhlbWUiLCJJbmRleCIsImlzVG91ckZpbHRlclNlbGVjdGVkIiwiZmlsdGVyQ2F0ZWdvcnkiLCJkaXNwbGF5TmFtZSIsIkdDYXJkVGFnc1NwYW4iLCJzcGFuIiwiYmFja2dyb3VuZENvbG9yIiwiR0Rpc2NvdW50RGl2IiwiYm94U2hhZG93IiwiR0hpZ2hsaWdodEJhbm5lckRpdiIsIkdMdXh1cnlEaXYiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwib3ZlcmZsb3ciLCJ0b3AiLCJQYWNrYWdlQ2FyZERlYWxzQW5kTHV4dXJ5IiwiZ2V0Q2FyZFRhZyIsImhpZGVEaXNjb3VudCIsImxhYmVsIiwibGFiZWxzIiwiYnV0dG9uVGV4dCIsIk1hdGgiLCJyb3VuZCIsImRpc2NvdW50X3BlcmNlbnRhZ2UiLCJob3RlbElkIiwic2Vuc29yVmlzaWJpbGl0eSIsImJpbmQiLCJ0cmFja0xlYWRDbGlja0V2ZW50IiwicmVuZGVySG90ZWxTZWxlY3Rpb25zIiwib25TZW5zb3JDaGFuZ2UiLCJpc1Zpc2libGUiLCJjdGFUZXh0UGFja2FnZSIsInRvRGVzdGluYXRpb24iLCJQQUNLQUdFX1ZJRVdFRCIsImV2ZW50IiwiY2F0ZWdvcnkiLCJzZWN0aW9uIiwicGFja2FnZV9pZCIsImRlc3RpbmF0aW9uX2xpc3QiLCJkZXN0aW5hdGlvbl9pZCIsImRlc3RpbmF0aW9ucyIsImRheXMiLCJwcmljZV90b3RhbCIsInBhY2thZ2VfbmFtZSIsImN0YVRleHRGb3JtIiwicElkIiwidHJhY2tMZWFkRnVubmVsQ2xpY2siLCJzZXRBY3RpdmVIb3RlbHMiLCJob3RlbHNJZHMiLCJmYW1pbHlfcGFja2FnZXMiLCJob3RlbENoZWNrYm94ZXMiLCJ0b1N0cmluZyIsImZvcm1Ub0xvY2F0aW9uIiwiYWRkaXRpb25hbEluZm9UZXh0IiwibmlnaHRzIiwiY2l0aWVzIiwic2V0X3VybCIsImUiLCJmb3JtT25lVG9Mb2NhdGlvbiIsImlzRGVhbCIsImlzTHV4dXJ5IiwiaXNFeHBlcmltZW50IiwicmVwbGFjZVByaWNlIiwiZmFtaWx5X3BhY2thZ2VzX21hcCIsImhvdGVsV2l0aFByaWNlcyIsInBhY2thZ2VUYWciLCJwcmljZSIsImRlYWxuTHV4dXJ5Iiwic3RhclJhdGluZyIsImlzRmxpZ2h0IiwiaW5jbHVzaW9ucyIsImluYyIsImF2YWlsYWJsZSIsIlBBQ0tBR0VfQ0xJQ0tFRCIsInBscF9oZWFkaW5nIiwiaW1hZ2VfdXJsIiwiaW1hZ2VraXRfdXJsIiwibXZwX3RhZ3MiLCJtaW5pX2Rlc2MiLCJjdXJyZW5jeSIsImRpc2NvdW50ZWRfcHJpY2UiLCJwcm9tb190YWciLCJjaXR5X2xpc3Rfd2l0aF9kYXlzIiwiZ2V0UGFja2FnZURhdGEiLCJ0b19sb2MiLCJ0cmlwX2RheXMiLCJwYWNrYWdlSWQiLCJwYWdlIiwiYWRkdGxfaW5mbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21wYXJpbmdQYWNrYWdlcyIsImFkZFRvQ29tcGFyaW5nUGFja2FnZXMiLCJyZW1vdmVGcm9tQ29tcGFyaW5nUGFja2FnZXMiLCJudW1iZXIiLCJpc011bHRpRGVzdGluYXRpb24iLCJtdWx0aURlc3RpbmF0aW9uVGV4dHMiLCJHUGFja2FnZUltZ0RpdiIsIlBhY2thZ2VJbWdUaXRsZURlYWxzIiwiaW1hZ2VVcmwiLCJpbWFnZWtpdFVybCIsImFsdFRleHQiLCJpc0xhcmdlSW1nIiwiR0luY0RpdiIsIm1pbldpZHRoIiwid2hpdGVTcGFjZSIsIkdJbmNsRGl2IiwiUGFja2FnZUluY0V4Y0RlYWxzIiwibm9TY3JvbGwiLCJpbmNsdXNpb25MaXN0IiwiaW5jbHVzaW9uIiwiRGVmYXVsdCIsImRpc2FibGVkRWxlbWVudENsYXNzIiwiZGlzYWJsZWRJY29uQ2xhc3MiLCJpbmNsdXNpb25UZXh0SGlkZGVuIiwidGV4dCIsIkluY2x1c2lvbk5vdGlmaWNhdGlvblByZXNlbnQiLCJJbmNsdXNpb25Ob3RpZmljYXRpb24iLCJUb3BEZXN0aW5hdGlvbiIsIlBBQ0tBR0VfTElTVF9DTElDSyIsIkRGRUFVTFRfVkFMVUUiLCJnZXRUb3BEZXN0aW5hdGlvbnMiLCJwYWNrYWdlc19wYXRoIiwicGljdHVyZSIsIkRFRkFVTFRfSU1BR0VfUEFUSCIsIlRvdGFsUGFja2FnZXNDb3VudCIsInRvdGFsUGFja2FnZXMiLCJzdGFydGluZ1ByaWNlIiwiY3RhVGV4dCIsIlN0b3J5Qm94IiwiaW1hZ2VQYXRoIiwicG9zdERhdGUiLCJUcmF2ZWxlclN0b3J5IiwiYmxvZ3MiLCJibG9nUG9zdHMiLCJsb2FkQmxvZ3MiLCJnZXRUYWdzVG9JbmNsdWRlIiwidGFncyIsInRhZ3NfdG9faW5jbHVkZSIsInBvc3RDb3VudCIsInNvcnRfb3JkZXIiLCJvZmZzZXQiLCJzdG9yaWVzIiwiYmxvZyIsInRodW1ibmFpbEltYWdlUGF0aHMiLCJpbWFnZVBhdGhzIiwiaXNWYWxpZFByaWNlIiwidG90YWxQcmljZSIsImRpc2NvdW50IiwicGFyc2VkUHJpY2UiLCJwYXJzZUludCIsInBhcnNlZERpc2NvdW50IiwiTGlzdGluZ0FzeW5jIiwiYWN0aXZlSG90ZWxzIiwiZ2V0QnVkZ2V0IiwicXVlcnlTdHIiLCJwcmljZWZpbHRlciIsInByaWNlQXJyIiwic29ydGVkUHJpY2VBcnIiLCJOdW1iZXIiLCJzb3J0IiwiY29tcGFyZUFyciIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJnZXRDYXJkQWZ0ZXJQcmljZSIsImJ1ZGdldCIsImluZmxhdGVBbXQiLCJoaWRlQ2FyZCIsInByaWNlVG90YWwiLCJkaXNjb3VudGVkUHJpY2UiLCJob3RlbFByaWNlIiwiY2FyZFByaWNlIiwiZ2V0RXhwZXJpbWVudERhdGEiLCJleHBlcmltZW50SWQiLCJjYXJkRGF0YSIsImdldFBhY2thZ2VMaXN0IiwicGFja2FnZXMiLCJ0cmFja0xpc3RpbmdMZWFkRnVubmVsIiwiZ2V0Q2FyZFByb3BzIiwicGtnIiwicmVuZGVyUGFja2FnZXNXaXRoRXhpdEludGVudCIsInNob3dUb3BEZXN0aW5hdGlvbnMiLCJzaW1pbGFyTGl2ZUNpdGllcyIsInBhdGhQYXJhbXMiLCJleHBlcmllbmNlRmlsdGVycyIsImlzQ2l0eSIsImRlc3RpbmF0aW9uTmFtZSIsImZsaWdodEZpbHRlcnMiLCJwYWNrYWdlQ2FyZHMiLCJleGl0RGl2Iiwic2hvd1BvcFVwIiwidG9wRGVzdGluYXRpb24iLCJ0b3BEZXN0aW5hdGlvbnNUaXRsZSIsImNyZWF0ZVNlZ21lbnRPYmplY3QiLCJpc0Rlc3RpbmF0aW9uVHlwZUFsbCIsInNldERlc3RpbmF0aW9uVHlwZUZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJnZXREZXN0aW5hdGlvbiIsInBhZ2VUcmFja1NlZ21lbnRFdmVudCIsInBhdGhuYW1lIiwibmV4dFByb3BzIiwic3VibWl0dGVkIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaWRzIiwiZ2V0Q29tcGFyaW5nUGFja2FnZUlkcyIsInN1Ym1pdHRlZEZvckNvbXBhcmUiLCJyZW1vdmVDb21wYXJlRGF0YSIsInNvcnRCeSIsInNlbGVjdGVkRmlsdGVyQ291bnQiLCJzZXRUb3VyQ2F0ZWdvcnlGaWx0ZXIiLCJwYWNrYWdlc1RvRGlzcGxheSIsImN1cnJlbnRQYWdlIiwicm91dGUiLCJicmVhZGNydW1icyIsImZhcXMiLCJsb2FkaW5nIiwiYmFubmVySGVhZGxpbmUiLCJhbGxQYWNrYWdlTGluayIsInNlb0Zvb3RlciIsImZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllcyIsInJhdGluZyIsInJldmlld3MiLCJyaWNoVGV4dCIsInNjaGVtYUF0dHJpYnV0ZXMiLCJwYWNrYWdlX3N0YXJ0aW5nX3ByaWNlIiwic3Rhcl9yYXRpbmciLCJUcmF2ZWxlclJldmlld0NvbnRhaW5lciIsIlRyYXZlbGVyUmV2aWV3IiwicGxwQ29udGFpbmVyIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJzcGFjZWREZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uVGl0bGUiLCJmdW5uZWxTdGVwIiwicmVuZGVyRXhwZXJpZW5jZUZpbHRlcnMiLCJyZW5kZXJGbGlnaHRGaWx0ZXJzIiwiZ2V0RmlsdGVycyIsInBhY2thZ2VUeXBlIiwic2VhcmNoIiwicmVuZGVySGVsbWV0Iiwib25TY3JvbGwiLCJhY3Rpb24iLCJvbkZpbHRlcnNBcHBseSIsImxvYWRGaWx0ZXJDb3VudHMiLCJmaWx0ZXJPcHRpb25zIiwibGluayIsImxvYWRNb3JlUGFja2FnZXMiLCJpc19tdWx0aV9kZXN0aW5hdGlvbiIsIm11bHRpX2Rlc3RpbmF0aW9uX3RleHRzIiwiZm9vdGVyX3NlY3Rpb25zIiwiZmlyc3RMb2FkZXJPcGVuZWQiLCJ0ZXN0aW1vbmlhbHMiLCJtZXRhVGFncyIsInJvdXRlUGFyYW1zIiwiZHluYW1pY1BscFBhZ2UiLCJjcmVhdGVGaWx0ZXJQYXJhbSIsInJlc2V0RGVmYXVsdEZpbHRlcnMiLCJiYW5uZXIiLCJwYWNrYWdlU3RhcnRQcmljZSIsIlBBQ0tBR0VfTElTVF9WSUVXRUQiLCJudW1fZGVzdGluYXRpb25zIiwidHJhY2tGaWx0ZXJTZWdtZW50RXZlbnQiLCJjb25jYXQiLCJERUZBVUxUX1ZBTFVFIiwiZGVzdGluYXRpb25MaXN0IiwiUExQX1BBR0VfVklFVyIsImRlc3RpbmF0aW9uX3R5cGUiLCJjb21wYXJlUGFja2FnZXMiLCJpc0R5bmFtaWNQTFAiLCJkZXN0IiwidXNlcl9pbnB1dCIsInBhcnNlX25lZ2F0aW9uIiwicGFyc2VfZGVzdGluYXRpb24iLCJjYW5fZmlsdGVyIiwicmJ0X2luZGV4X3F1ZXN0aW9uX2Fuc3dlcl9tYXAiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJib2R5IiwibWF0Y2hlZF9kZXN0aW5hdGlvbnMiLCJuZXh0VXJsIiwic2VsZWN0ZWQiLCJsaXN0aW5nVHlwZSIsIkZJTFRFUl9DTElDS0VEIiwiZ2V0UGFnZUZ1bGxOYW1lIiwib21pdCIsInBhZ2VOdW1iZXIiLCJsb2FkTW9yZVBhY2thZ2VzRGlzcGF0Y2hlciIsImNyZWF0ZURlc2NyaXB0aW9uVGFnIiwiZGVzY3JpcHRpb24iLCJtZXRhVGFnTGlzdCIsImdldFBhZ2VVcmwiLCJwaWNfdXJsIiwiZGlzcGxheVR5cGUiLCJub3RTZWFzb25hbCIsInBrZ0lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztJQUVNQSxhLHFCQUFOLE1BQU1BLGFBQU4sU0FBNEJDLGVBQU1DLFNBQWxDLENBQTRDO0FBd0IxQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQixTQWtCbkJDLFlBbEJtQixHQWtCSixDQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBY0MsU0FBZCxFQUF5QkMsT0FBekIsS0FBcUM7QUFDbEQsV0FBS0wsS0FBTCxDQUFXTSxpQkFBWCxDQUE2QjtBQUMzQkosV0FEMkI7QUFFM0JLLGdCQUFRSixTQUFVLG1CQUFrQkEsTUFBTyxFQUFuQyxHQUF1QyxpQkFGcEI7QUFHM0JDLGlCQUgyQjtBQUkzQkM7QUFKMkIsT0FBN0I7QUFNRCxLQXpCa0I7QUFFbEIsR0ExQnlDLENBNEIxQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVdBRyxXQUFTO0FBQ1AsVUFBTTtBQUFFQyxVQUFGO0FBQVFDLFlBQVI7QUFBZ0JDLFlBQWhCO0FBQXdCQyxpQkFBeEI7QUFBcUNDO0FBQXJDLFFBQWdELEtB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RDs7QUFDRCxXQUFRLDZCQUE0QmUsSUFBSyxFQUF6QztBQUNELEc7O2VBZ09ZaEcsWSIsImZpbGUiOiJsaXN0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBMb2FkZXJDYXJkIGZyb20gJ21vZHVsZXMvc2hhcmVkL2xvYWRlcnMvTG9hZGVyQ2FyZCc7XG5pbXBvcnQgU2xpZGVyV2l0aFRpdGxlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1NsaWRlcldpdGhUaXRsZSc7XG5cbmNsYXNzIFBsYWNlc1RvVmlzaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlcnJvcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBleHRlcm5hbENzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YTogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHt9LFxuICAgIGNvbmZpZzoge1xuICAgICAgdmFyaWFudDogJ0ZVTEwnLFxuICAgICAgb3JkZXI6IDhcbiAgICB9LFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgZXh0ZXJuYWxDc3M6ICcnLFxuICAgIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7fSxcbiAgICBmZXRjaFBsYWNlc1RvVmlzaXREYXRhOiAoKSA9PiB7fVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgdGhpcy5mZXRjaFBsYWNlc1RvVmlzaXREYXRhKHRoaXMucHJvcHMpO1xuICAvLyB9XG5cbiAgLy8gZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YSA9IChwcm9wcykgPT4ge1xuICAvLyAgIGNvbnN0IHsgY29uZmlnLCBmZXRjaFBsYWNlc1RvVmlzaXREYXRhIH0gPSBwcm9wcztcbiAgLy8gICBpZiAoY29uZmlnICYmIGNvbmZpZy5jc3IpIHtcbiAgLy8gICAgIGZldGNoUGxhY2VzVG9WaXNpdERhdGEoe1xuICAvLyAgICAgICBkZXN0aW5hdGlvbjogbGF5b3V0Lm1ldGFJbmZvLmRlc3RpbmF0aW9uLFxuICAvLyAgICAgICBsb29rdXBQYXJlbnQ6IGNvbmZpZy5sb29rdXBQYXJlbnRcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICB0cmFja1NlZ21lbnQgPSAoY3RhLCBjYXJkSWQsIG1pc2NUeXBlMSwgbWlzY0lkMSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgY3RhLFxuICAgICAgb2JqZWN0OiBjYXJkSWQgPyBgUGxhY2VzIHRvIHZpc2l0LyR7Y2FyZElkfWAgOiAnUGxhY2VzIHRvIHZpc2l0JyxcbiAgICAgIG1pc2NUeXBlMSxcbiAgICAgIG1pc2NJZDFcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBjb25maWcsIGxvYWRlZCwgZXh0ZXJuYWxDc3MsIGVycm9ycyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChsb2FkZWQgJiYgKCFkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcyB8fCAhZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtleHRlcm5hbENzc30+XG4gICAgICAgIHtcbiAgICAgICAgICAhbG9hZGVkXG4gICAgICAgICAgICA/IDxMb2FkZXJDYXJkIC8+XG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMgJiYgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyA8U2xpZGVyV2l0aFRpdGxlIGRhdGE9e2RhdGF9IHRyYWNrU2VnbWVudD17dGhpcy50cmFja1NlZ21lbnR9IGNvbmZpZz17Y29uZmlnfSBvdmVyZmxvdz0ndW5zZXQnLz5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFjZXNUb1Zpc2l0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YSB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IHJlc3VsdHMgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IFBsYWNlc1RvVmlzaXQgZnJvbSAnLi9QbGFjZXNUb1Zpc2l0JztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGRhdGE6IHJlc3VsdHMoc3RhdGUpLFxuICAgIGxvYWRlZDogc3RhdGUucGxhY2VzVG9WaXNpdC5sb2FkZWQsXG4gICAgZXJyb3JzOiBzdGF0ZS5wbGFjZXNUb1Zpc2l0LmVycm9yc1xuICB9KSxcbiAge1xuICAgIGZldGNoUGxhY2VzVG9WaXNpdERhdGFcbiAgfVxuKShQbGFjZXNUb1Zpc2l0KSk7XG5cbi8qKlxuICogUGxhY2VzVG9WaXNpdCBTZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7XG4gICAgZmV0Y2hQbGFjZXNUb1Zpc2l0RGF0YVxuICB9LFxuICBkZWZhdWx0QWN0aW9uOiBmZXRjaFBsYWNlc1RvVmlzaXREYXRhXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IEdDb250YWluZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnNDhweCcsXG4gICcmIC5zd2lwZXJDb250YWluZXInOiB7XG4gICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMzBweCcsXG4gIH1cbn0pO1xuXG5jbGFzcyBDdXN0b21Td2lwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXJTdHlsZSwgaXNEb3VibGVMaW5lLCBzdHlsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHQ29udGFpbmVyRGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXsnb3ZlcmZsb3doIHJvdyd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN3aXBlckNvbnRhaW5lciBwbDE1ICR7aXNEb3VibGVMaW5lID8gc3R5bGVzLmRvdWJsZUxpbmUgOiAnJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggJHtpc0RvdWJsZUxpbmUgPyBzdHlsZXMuZG91YmxlTGluZUZsZXggOiAnJ31gfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR0NvbnRhaW5lckRpdj5cbiAgICApO1xuICB9XG59XG5cbkN1c3RvbVN3aXBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7fSxcbiAgc3R5bGVzOiB7fSxcbiAgaXNEb3VibGVMaW5lOiBmYWxzZSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSlcbn07XG5cbkN1c3RvbVN3aXBlci5wcm9wVHlwZXMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc0RvdWJsZUxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNoaWxkcmVuOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tU3dpcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHTG9hZGVyQ29udGFpbmVyRGl2LCBHTG9hZGVyQ2FyZFNwYW4gfSBmcm9tICcuLy4uL0cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXJDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsaW5lVmlzaWJsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjYXJkVmlzaWJsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaW5lVmlzaWJsZToge30sXG4gICAgY2FyZFZpc2libGU6IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNhcmRWaXNpYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8R0xvYWRlckNvbnRhaW5lckRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhGdWxsIGZsZXhEQ29sdW1uIHdmdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyTGluZSBtYjUgbXQwIHNiYzVcIiBzdHlsZT17eyB3aWR0aDogJzYwJScgfX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lIG1iMTUgbXQwIHNiYzVcIiBzdHlsZT17eyB3aWR0aDogJzcwJScgfX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJNYWluIHJhZGl1czIgZmxleEZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlck1haW5DYXJkIGZsZXhGdWxsXCI+XG4gICAgICAgICAgICA8R0xvYWRlckNhcmRTcGFuIGNsYXNzTmFtZT1cIndmdWxsIHNiYzVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IHAxNSBwYjI0IHdmdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyTGluZURhcmsgc2JjNSBtYjE1IHNiYzRcIiBzdHlsZT17eyBtYXhXaWR0aDogJzgwJScgfX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lRGFyayBzYmM1IG1iOCBzYmM0XCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJMaW5lRGFyayBzYmM1IHNiYzRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HTG9hZGVyQ29udGFpbmVyRGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ2V0RmxleE9iamVjdCB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IExvYWRlckNhcmQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvbG9hZGVycy9Mb2FkZXJDYXJkJztcbmltcG9ydCBTbGlkZXJXaXRoVGl0bGUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvU2xpZGVyV2l0aFRpdGxlJztcblxuY2xhc3MgVGhpbmdzVG9EbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsYXlvdXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvYWRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZXh0ZXJuYWxDc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZldGNoVGhpbmdzVG9Eb0RhdGE6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBsYXlvdXQ6IHt9LFxuICAgIGNvbmZpZzoge1xuICAgICAgdmFyaWFudDogJ0ZVTEwnLFxuICAgICAgb3JkZXI6IDhcbiAgICB9LFxuICAgIGV4dGVybmFsQ3NzOiAnJyxcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7fSxcbiAgICBmZXRjaFRoaW5nc1RvRG9EYXRhOiAoKSA9PiB7fVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hUaGluZ3NUb0RvRGF0YSh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5sYXlvdXQubWV0YUluZm8gJiYgcHJldlByb3BzLmxheW91dC5tZXRhSW5mb1xuICAgICAgJiYgdGhpcy5wcm9wcy5sYXlvdXQubWV0YUluZm8uZGVzdGluYXRpb24gIT09IHByZXZQcm9wcy5sYXlvdXQubWV0YUluZm8uZGVzdGluYXRpb24pIHtcbiAgICAgIHRoaXMuZmV0Y2hUaGluZ3NUb0RvRGF0YSh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1cblxuICBmZXRjaFRoaW5nc1RvRG9EYXRhID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjb25maWcsIGxheW91dCwgZmV0Y2hUaGluZ3NUb0RvRGF0YSB9ID0gcHJvcHM7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuY3NyKSB7XG4gICAgICBmZXRjaFRoaW5nc1RvRG9EYXRhKHtcbiAgICAgICAgZGVzdGluYXRpb246IGxheW91dC5tZXRhSW5mby5kZXN0aW5hdGlvbixcbiAgICAgICAgbG9va3VwUGFyZW50OiBjb25maWcubG9va3VwUGFyZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdHJhY2tTZWdtZW50ID0gKGN0YSwgY2FyZElkLCBtaXNjVHlwZTEsIG1pc2NJZDEpID0+IHtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgIGN0YSxcbiAgICAgIG9iamVjdDogY2FyZElkID8gYFRoaW5ncyB0byBkby8ke2NhcmRJZH1gIDogJ1RoaW5ncyB0byBkbycsXG4gICAgICBtaXNjVHlwZTEsXG4gICAgICBtaXNjSWQxXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgY29uZmlnLCBsb2FkZWQsIGV4dGVybmFsQ3NzLCBlcnJvcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobG9hZGVkICYmICghZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMgfHwgIWRhdGEuZGVzdGluYXRpb25TY2hlbWVzLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZXh0ZXJuYWxDc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNsZWFyZml4IGNvbnRhaW5lciBwbDAgcHIwYH1cbiAgICAgICAgICAgICBzdHlsZT17Z2V0RmxleE9iamVjdChjb25maWcudmFyaWFudCwgY29uZmlnLm9yZGVyKX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIWxvYWRlZFxuICAgICAgICAgICAgICA/IDxMb2FkZXJDYXJkIC8+XG4gICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIGRhdGEuZGVzdGluYXRpb25TY2hlbWVzICYmIGRhdGEuZGVzdGluYXRpb25TY2hlbWVzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyA8U2xpZGVyV2l0aFRpdGxlIGRhdGE9e2RhdGF9IHRyYWNrU2VnbWVudD17dGhpcy50cmFja1NlZ21lbnR9IGNvbmZpZz17Y29uZmlnfSBvdmVyZmxvdz0nc2Nyb2xsJyAvPlxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGluZ3NUb0RvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgZmV0Y2hUaGluZ3NUb0RvRGF0YSB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCBUaGluZ3NUb0RvIGZyb20gJy4vVGhpbmdzVG9Ebyc7XG5pbXBvcnQgeyByZXN1bHRzIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIGRhdGE6IHJlc3VsdHMoc3RhdGUpLFxuICAgIGxvYWRlZDogc3RhdGUudGhpbmdzVG9Eby5sb2FkZWQsXG4gICAgZXJyb3JzOiBzdGF0ZS50aGluZ3NUb0RvLmVycm9yc1xuICB9KSxcbiAge1xuICAgIGZldGNoVGhpbmdzVG9Eb0RhdGFcbiAgfVxuKShUaGluZ3NUb0RvKSk7XG5cbi8qKlxuICogVGhpbmdzVG9EbyBTZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBhY3Rpb25zOiB7XG4gICAgZmV0Y2hUaGluZ3NUb0RvRGF0YVxuICB9LFxuICBkZWZhdWx0QWN0aW9uOiBmZXRjaFRoaW5nc1RvRG9EYXRhXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnbW9kdWxlcy9ob3dJdFdvcmtzL2hvd2l0d29ya3MuY20uc2Nzcyc7XG5cbmltcG9ydCAqIGFzIEljb25zIGZyb20gICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IGNhcmQgPSB7XG4gIGhlYWRpbmc6ICdXaHkgQm9vayBXaXRoIE91ciBBZ2VudHM/JyxcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICBpY29uOiAnSWxsdXNBZ2VudCcsXG4gICAgICB0aXRsZTogJ09ubHkgVGhlIEJlc3QgQWdlbnRzJyxcbiAgICAgIHBhcmFncmFwaDogJ1RyYXZlbGVycyBkZWFsIHdpdGggb25seSB0aGUgdG9wIDEwJSByZXZpZXdlZCBhZ2VudHMgd2hvIGFyZSBzZWxlY3RlZCBhZnRlciBhIDIzIHN0ZXAgcmlnb3JvdXMgYXNzZXNzbWVudCBwcm9jZWR1cmUgYnkgVHJhdmVsVHJpYW5nbGUuJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ0lsbHVzUXVhbGl0eUNoZWNrJyxcbiAgICAgIHRpdGxlOiAnRW5zdXJpbmcgUXVhbGl0eScsXG4gICAgICBwYXJhZ3JhcGg6ICdUcmF2ZWxUcmlhbmdsZSBlbnN1cmVzIHF1YWxpdHkgc2VydmljZSB2aWEgdmVyaWZpZWQgcGFydG5lcnMgYnkgcmVsZWFzaW5nIHRoZSBwYXltZW50IG9ubHkgYWZ0ZXIgdGhlIGJvb2tpbmcgdm91Y2hlcnMvcmVjZWlwdHMgYXJlIHJlY2VpdmVkIGJ5IHRoZSB0cmF2ZWxlci4nXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnSWxsdXNTdXBwb3J0JyxcbiAgICAgIHRpdGxlOiAnMjQqNyBPbi10cmlwIGFzc2lzdGFuY2UgYnkgTG9jYWwgVHJhdmVsIEFnZW50cycsXG4gICAgICBwYXJhZ3JhcGg6ICdUcmF2ZWxlcnMgZGVhbCB3aXRoIG9ubHkgdGhlIHRvcCAxMCUgcmV2aWV3ZWQgYWdlbnRzIHdobyBhcmUgc2VsZWN0ZWQgYWZ0ZXIgYSAyMyBzdGVwIHJpZ29yb3VzIGFzc2Vzc21lbnQgcHJvY2VkdXJlIGJ5IFRyYXZlbFRyaWFuZ2xlLidcbiAgICB9LFxuICBdXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoeUJvb2tXaXRoT3VyQWdlbnRzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDAgc2Jjd1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZjE2IGZ3OSBwMTUgcGZjNSBiYlwiPntjYXJkLmhlYWRpbmd9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wteHMtMTIgcDAgJHtzdHlsZXMudGlsZXN9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FyZC5pdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IEljb25zW2l0ZW0uaWNvbl07XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wteHMtMTIgZmxleCBwbDE1IHByMTUgcHQyNCBwYjI0ICR7c3R5bGVzLndvcmtzQm94fWB9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBmbGV4IGp1c3RpZnlDZW50ZXIgJHtzdHlsZXMuaW1hZ2V9YH0+PEljb25Db21wb25lbnQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwyNCBkYXJrLWZvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImYxNCBmdzkgcGI4XCI+e2l0ZW0udGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyXCI+e2l0ZW0ucGFyYWdyYXBofTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgQ3VzdG9tU3dpcGVyIGZyb20gJ21vZHVsZXMvc2hhcmVkL0N1c3RvbVN3aXBlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2l0eUZpbHRlci5jbS5zY3NzJztcblxuY2xhc3MgQ2l0eUZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9icExpbmtzOiB7IGZvb3RlckxpbmtzLCBuYW1lIH0sIGlzRG91YmxlTGluZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzd2lwZXJTdHlsZSA9IHt9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHAxNSBzYmN3ICR7c3R5bGVzLmZpbHRlcnNDb250YWluZXJDb21tb259IGlubGluZS1jb21tb24tZmlsdGVyIHByaWNlLWZpbHRlcnNgfT5cbiAgICAgICAgPGlucHV0IGlkPXsnQ2l0eV9saW5rcyd9IHR5cGU9J2NoZWNrYm94JyBjbGFzc05hbWU9e2BoaWRlICR7c3R5bGVzLmlubGluZUZpbHRlcnN9YH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J0NpdHlfbGlua3MnIGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4nPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjE2IGZ3Yic+e25hbWV9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtMjQgcmVsYXRpdmUgcDUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyJz48RG93bkFycm93IC8+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNEb3VibGVMaW5lID8gc3R5bGVzLmRvdWJsZUxpbmVJbmxpbmVGaWx0ZXJzRGF0YSA6IHN0eWxlcy5pbmxpbmVGaWx0ZXJzRGF0YX1gfT5cbiAgICAgICAgICA8Q3VzdG9tU3dpcGVyIGNvbnRhaW5lclN0eWxlPXtzd2lwZXJTdHlsZX0gaXNEb3VibGVMaW5lPXtpc0RvdWJsZUxpbmV9IHN0eWxlcz17c3R5bGVzfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZm9vdGVyTGlua3MubWFwKChmb290ZXJMaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdXJsIH0gPSBmb290ZXJMaW5rO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZU5hbWUgPSBuYW1lLnNwbGl0KCcgJykuc2xpY2UoMSkuam9pbignICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGlkZSAke3N0eWxlcy5pbmxpbmVGaWx0ZXJzQ2hlY2tib3h9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbm9CZWZvcmVBZnRlciBmbGV4IHJhZGl1czIgb3ZlcmZsb3doIGZsZXhEQ29sdW1uIHAwJyBodG1sRm9yPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgYCR7c3R5bGVzLmZpbHRlclRpdGxlfSBmbGV4RnVsbCBmbGV4IHRleHQtY2VudGVyIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgcGw4IHByOCBtcjhgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzb3VyY2VOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ3VzdG9tU3dpcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2l0eUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGZvYnBMaW5rczogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNEb3VibGVMaW5lOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNpdHlGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0RvdWJsZUxpbmU6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaXR5RmlsdGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGhlbWVcIjogXCJfMlprYTFZdVI2UE1wa0lYeTlUUGtkaFwiLFxuXHRcImlubGluZUZpbHRlcnNcIjogXCJfMVhGaDdvQ1V6QzFnMFVIX1FvTXRVMVwiLFxuXHRcImlubGluZUZpbHRlcnNEYXRhXCI6IFwiXzEtQjVZZUQyOU1XWnhReEhTVVltZ2ZcIixcblx0XCJkb3VibGVMaW5lSW5saW5lRmlsdGVyc0RhdGFcIjogXCJfMWxXa1VMcnIwOFo0TEt1cm9pbjJrM1wiLFxuXHRcImZpbHRlclRpdGxlXCI6IFwiXzFRYkNnQ21WOUJHQWhVcjlZRWMzbVVcIixcblx0XCJpbmxpbmVGaWx0ZXJzQ2hlY2tib3hcIjogXCJfMWpTTWlfU0NpZVFKZ2ZmaDZjQVRra1wiLFxuXHRcImRvdWJsZUxpbmVcIjogXCJfMU5fTVlNdF9ORzlweTJNTTgySjF6OFwiLFxuXHRcImRvdWJsZUxpbmVGbGV4XCI6IFwiXzJxQVJKQ3hfOTVZVkxqZlVzY2ZPaGJcIixcblx0XCJmaWx0ZXJzQ29udGFpbmVyQ29tbW9uXCI6IFwiXzFrdTZfZ2VlRzVCcXlMOVRjSkhYbE1cIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXItcGFja2FnZVwiOiBcIl9nam1jeFwiLFxuXHRcInByaWNlT2ZmXCI6IFwiXzFOTVAtXCIsXG5cdFwiaGVhZGluZ0RheXNcIjogXCJfMzgyTUlcIixcblx0XCJib3JkZXJSXCI6IFwiXzFXREx6XCIsXG5cdFwiQ29sbGFwc2libGVcIjogXCJfMzY4MVdcIixcblx0XCJpcy1vcGVuXCI6IFwiXzM2NXZCXCIsXG5cdFwiYm9yZGVyUmlnaHRCXCI6IFwiXzJWVmRLXCIsXG5cdFwiYnVsbGV0R3JlZW5cIjogXCJfMWFaRWFcIixcblx0XCJidWxsZXRQaW5rXCI6IFwiXzNUR0ttXCIsXG5cdFwicHRiMThcIjogXCJfMkNoYWtcIixcblx0XCJidWxsZXRHcmF5XCI6IFwiXzFWMi1yXCIsXG5cdFwicXVlc3Rpb25cIjogXCJfTmJhSDRcIixcblx0XCJzaGFyZUljb25TbWFsbFwiOiBcIl9wMEdpM1wiLFxuXHRcImNvbnRhaW5lclBvcHVwUGFja2FnZVwiOiBcIl8yRDQ3SFwiLFxuXHRcInBvcHVwUGFja2FnZVwiOiBcIl8xaUpJUlwiLFxuXHRcInNwYW5DaXJjbGVEb3R0ZWRcIjogXCJfMy1wMjJcIixcblx0XCJkaXZTcGFuUGFja2FnZUJveFwiOiBcIl9MU1FnRlwiLFxuXHRcImNvbXBhcmUtcG9wdXAtaWNvblwiOiBcIl8xa2RmWVwiLFxuXHRcImRpdkNvbWJpbkNvbnRhaW5lclwiOiBcIl8zdnZxdFwiLFxuXHRcImJ0bkdvdEl0XCI6IFwiXzF1MW9OXCIsXG5cdFwic3BhbkNpcmNsZURvdHRlZFNlY1wiOiBcIl9vSWZXWlwiLFxuXHRcImhvdGVsQ29udGFpbmVyTWFpblwiOiBcIl8zVGV5alwiLFxuXHRcImFjY29yZGlhblwiOiBcIl9YM0VGSVwiLFxuXHRcImFjY29yZGlhbi10dXRvbG9cIjogXCJfMXpqTFpcIixcblx0XCJhY2NvcmRpYW4tY29udGVuaWRvXCI6IFwiXzFxVjcyXCIsXG5cdFwiZG93blNpZGVBcnJvd1wiOiBcIl8ydGhEVVwiXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vQ29tcGFyZVBhY2thZ2VzLnNjc3MnO1xuaW1wb3J0IHsgUGFja2FnZUljb24sIENvbXBhcmVJY29uMiwgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICdoZWxwZXJzL0Zvcm1EYXRhRm9ybWF0dGVyJztcblxuXG5jbGFzcyBMb2FkZXJGaXJzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldENvb2tpZSgnZmlyc3RfbG9hZGVyX29wZW5lZCcsIHRydWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyUG9wdXBQYWNrYWdlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcHVwUGFja2FnZSByZWxhdGl2ZSc+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZjE2IGZ3OSBwbDE1IGFic29sdXRlIHQxNSc+QWRkIFRvIENvbXBhcmU8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZDb21iaW5Db250YWluZXIgdGV4dC1jZW50ZXIgcHQxNSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2U3BhblBhY2thZ2VCb3ggZmxlZnQgbXI4Jz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGFuQ2lyY2xlRG90dGVkJz5cbiAgICAgICAgICAgICAgICA8UGFja2FnZUljb24gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2U3BhblBhY2thZ2VCb3ggZmxlZnQgbXI4IG10MTUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvbXBhcmUtcG9wdXAtaWNvbic+XG4gICAgICAgICAgICAgICAgPENvbXBhcmVJY29uMiAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZTcGFuUGFja2FnZUJveCBmbGVmdCc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BhbkNpcmNsZURvdHRlZCBzcGFuQ2lyY2xlRG90dGVkU2VjJz5cbiAgICAgICAgICAgICAgICA8UGFja2FnZUljb24gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY29sLXhzLTEyIG10MTUgZjE0IGZ3NCB0ZXh0LWNlbnRlcic+Q2hvb3NlIDxzcGFuIGNsYXNzTmFtZT0nZnc5IGYxNCc+b25lIG1vcmUgcGFja2FnZSA8L3NwYW4+IHRvIHN3aXRjaCB0byBDb21wYXJlIFZpZXcuPC9oMj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbC14cy0xMiBmMTQgZnc0IHRleHQtY2VudGVyIGJ0bkdvdEl0J1xuICAgICAgICAgID5Hb3QgSXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyRmlyc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vQ29tcGFyZVBhY2thZ2VzLnNjc3MnO1xuaW1wb3J0IHsgUGFja2FnZUljb24sIENvbXBhcmVJY29uMiwgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cblxuY29uc3QgTG9hZGVyU2Vjb25kID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyUG9wdXBQYWNrYWdlJz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wdXBQYWNrYWdlIHJlbGF0aXZlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZDb21iaW5Db250YWluZXIgdGV4dC1jZW50ZXIgcHQxNSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZTcGFuUGFja2FnZUJveCBmbGVmdCBtcjgnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BhbkNpcmNsZURvdHRlZCc+XG4gICAgICAgICAgICA8UGFja2FnZUljb24gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2U3BhblBhY2thZ2VCb3ggZmxlZnQgbXI4IG10MTUnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29tcGFyZS1wb3B1cC1pY29uJz5cbiAgICAgICAgICAgIDxDb21wYXJlSWNvbjIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2U3BhblBhY2thZ2VCb3ggZmxlZnQnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BhbkNpcmNsZURvdHRlZCc+XG4gICAgICAgICAgICA8UGFja2FnZUljb24gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdjb2wteHMtMTIgbXQxNSBmMTQgdGV4dC1jZW50ZXInPk5vdyB3ZSBhcmUgZ29pbmcgdG8gQ29tcGFyZSBWaWV3LjwvaDI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyU2Vjb25kO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcbmltcG9ydCB7IEVsZW1lbnQsIHNjcm9sbFNweSAsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5pbXBvcnQgU2hvd01vcmUgZnJvbSAnLi4vR2VuZXJpYy9TaG93TW9yZSc7XG5pbXBvcnQgJy4vQWJvdXRMaXN0aW5nRGVzdGluYXRpb24uc2Nzcyc7XG5pbXBvcnQgRm9vdGVyQ29udGVudE5hdmlnYXRpb24gZnJvbSBcImNvbXBvbmVudHMvTGlzdGluZy9Gb290ZXJDb250ZW50TmF2aWdhdGlvblwiO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IHJlbmRlckZvb3RlckFib3ZlVGV4dCA9IChmb290ZXJTZWN0aW9uLCBpc1JhdGluZ1NjaGVtYUVuYWJsZWQpID0+IHtcbiAgY29uc3QgZm9vdGVyQWJvdmVUZXh0ID0gZm9vdGVyU2VjdGlvbi5mb290ZXJfYWJvdmVfdGV4dFxuICAgIC5yZXBsYWNlKC8mbHQ7aW1nKC4qPykmZ3Q7L2dtLCAobSwgY29udGVudCkgPT4ge1xuICAgICAgcmV0dXJuIGA8aW1nIGNsYXNzPVwibHp5X2ltZ1wiICR7Y29udGVudH0+YDtcbiAgICB9KVxuICAgIC5zcGxpdCgnJmx0O3JlYWRtb3JlJmd0OycpO1xuXG4gIHJldHVybiAoXG4gICAgPFNob3dNb3JlXG4gICAgICB3cmFwVGV4dD17cGFyc2VyLnBhcnNlKGZvb3RlckFib3ZlVGV4dFswXSl9XG4gICAgICBtb3JlVGV4dD17cGFyc2VyLnBhcnNlKGZvb3RlckFib3ZlVGV4dFsxXSl9XG4gICAgICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ9e2lzUmF0aW5nU2NoZW1hRW5hYmxlZH1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgcmVuZGVySGVhZGVyQmVsb3dUZXh0ID0gKGZvb3RlclNlY3Rpb24sIGlzUmF0aW5nU2NoZW1hRW5hYmxlZCkgPT4ge1xuICBjb25zdCBoZWFkZXJCZWxvd1RleHQgPSBmb290ZXJTZWN0aW9uLmhlYWRlcl9iZWxvd190ZXh0XG4gICAgLnJlcGxhY2UoLyZsdDtpbWcoLio/KSZndDsvZ20sIChtLCBjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gYDxpbWcgY2xhc3M9XCJsenlfaW1nXCIgJHtjb250ZW50fT5gO1xuICAgIH0pXG4gICAgLnNwbGl0KCcmbHQ7cmVhZG1vcmUmZ3Q7Jyk7XG4gIHJldHVybiAoXG4gICAgPFNob3dNb3JlXG4gICAgICB3cmFwVGV4dD17cGFyc2VyLnBhcnNlKGhlYWRlckJlbG93VGV4dFswXSl9XG4gICAgICBtb3JlVGV4dD17cGFyc2VyLnBhcnNlKGhlYWRlckJlbG93VGV4dFsxXSl9XG4gICAgICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ9e2lzUmF0aW5nU2NoZW1hRW5hYmxlZH1cbiAgICAvPlxuICApO1xufTtcblxuXG5jbGFzcyBGb290ZXJDbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFRvUGFja2FnZXNFTGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC10by1wYWNrYWdlcy1jb250YWluZXInKTtcbiAgICB0aGlzLmZvb3Rlckd1aWRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydExpc3RpbmdEZXNjJyk7XG4gICAgdGhpcy5jaGF0VHJpZ2dlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXhlZC1tZW51LWNvbnRhaW5lci5yYWRpdXMxMDAnKTtcbiAgICBjb25zdCBwYWNrYWdlc0hlYWRpbmdFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNiY3cucDE1LnB0MC5wYjgnKTtcbiAgICBjb25zdCBzY3JvbGxUb1Bvc2l0aW9uID0gcGFja2FnZXNIZWFkaW5nRWxlbSA/IHBhY2thZ2VzSGVhZGluZ0VsZW0ub2Zmc2V0VG9wIC0gNTAgOiA0ODA7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxUb1BhY2thZ2VzRUxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1BhY2thZ2VzRUxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvKHNjcm9sbFRvUG9zaXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG5cbiAgICBjb25zdCBpbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBpbWdPYnNlcnZlcikgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBjb25zdCBsYXp5SW1hZ2UgPSBlbnRyeS50YXJnZXQ7XG4gICAgICAgICAgbGF6eUltYWdlLnNyYyA9IGxhenlJbWFnZS5kYXRhc2V0LnNyYztcbiAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImx6eV9pbWdcIik7XG4gICAgICAgICAgaW1nT2JzZXJ2ZXIudW5vYnNlcnZlKGxhenlJbWFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmx6eV9pbWcnKTtcbiAgICBhcnIuZm9yRWFjaCgodikgPT4ge1xuICAgICAgaW1hZ2VPYnNlcnZlci5vYnNlcnZlKHYpO1xuICAgIH0pO1xuXG4gIH1cblxuICBpc1Njcm9sbFRvUGFja2FnZXNTdGlja3kgPSAoKSA9PiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHRoaXMuZm9vdGVyR3VpZGVFbGVtZW50Lm9mZnNldFRvcClcbiAgICAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPCAodGhpcy5zY3JvbGxUb1BhY2thZ2VzRUxlbWVudC5wYXJlbnROb2RlLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNjcm9sbFRvUGFja2FnZXNFTGVtZW50ICYmIHRoaXMuZm9vdGVyR3VpZGVFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5pc1Njcm9sbFRvUGFja2FnZXNTdGlja3koKSkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvUGFja2FnZXNFTGVtZW50LmNsYXNzTGlzdC5hZGQoJ21ha2Utc3RpY2t5Jyk7XG4gICAgICAgIGlmICh0aGlzLmNoYXRUcmlnZ2VyQnV0dG9uKSB7XG4gICAgICAgICAgdGhpcy5jaGF0VHJpZ2dlckJ1dHRvbi5zdHlsZS5ib3R0b20gPSBcIjc4cHhcIjtcbiAgICAgICAgfVxuICAgICAgfWVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxUb1BhY2thZ2VzRUxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21ha2Utc3RpY2t5JykpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvUGFja2FnZXNFTGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21ha2Utc3RpY2t5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhdFRyaWdnZXJCdXR0b24pIHtcbiAgICAgICAgICB0aGlzLmNoYXRUcmlnZ2VyQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb290ZXJTZWN0aW9uLCBpc1JhdGluZ1NjaGVtYUVuYWJsZWR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZvb3Rlcl9hYm92ZV90ZXh0IH0gPSBmb290ZXJTZWN0aW9uO1xuICAgIGNvbnN0IG5hdmlnYXRpb25MaW5rSXRlbXMgPSBbXTtcblxuICAgIGlmICghZm9vdGVyX2Fib3ZlX3RleHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbml0aXplZEZvb3RlckFib3ZlVGV4dCA9IGZvb3Rlcl9hYm92ZV90ZXh0XG4gICAgICAucmVwbGFjZShcbiAgICAgICAgLygmbHQ7fDwpaW1nKC4qPykoJmd0O3w+KS9nbSxcbiAgICAgICAgKG0sIGxlZnQsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gYDxpbWcgY2xhc3M9XCJsenlfaW1nXCIgJHtjb250ZW50fT5gO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgc2FuaXRpemVkRm9vdGVyQWJvdmVUZXh0LnJlcGxhY2UoLzxzZWN0aW9uLippZD1cIihcXHcrKVwiLio+L21nLCAobWF0Y2gsIHAxKSA9PiB7XG4gICAgICBuYXZpZ2F0aW9uTGlua0l0ZW1zLnB1c2gocDEpO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgaWYgKG5hdmlnYXRpb25MaW5rSXRlbXMubGVuZ3RoIDw9IDApIHsgLy8gaW1hZ2UgdGFnIG5vdCBmb3VuZFxuICAgICAgcmV0dXJuICg8ZGl2PnsgcmVuZGVyRm9vdGVyQWJvdmVUZXh0KGZvb3RlclNlY3Rpb24sIGlzUmF0aW5nU2NoZW1hRW5hYmxlZCkgfTwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjNSByb3cgcHQ4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBpZD1cInN0YXJ0TGlzdGluZ0Rlc2NcIiAvPlxuICAgICAgICAgIDxGb290ZXJDb250ZW50TmF2aWdhdGlvbiBuYXZpZ2F0aW9uTGlua0l0ZW1zPXtuYXZpZ2F0aW9uTGlua0l0ZW1zfSBoZWFkaW5nPXtmb290ZXJTZWN0aW9uLmhlYWRpbmd9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1aWRlLWZvb3RlciByb3cgc2JjNVwiPlxuICAgICAgICAgICAgeyBwYXJzZXIucGFyc2Uoc2FuaXRpemVkRm9vdGVyQWJvdmVUZXh0LnJlcGxhY2UoJyZsdDtyZWFkbW9yZSZndDsnLCAnJykpIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImVuZExpc3RpbmdEZXNjXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEFib3V0TGlzdGluZ0Rlc3RpbmF0aW9uID0gKHsgZm9vdGVyU2VjdGlvbiwgaXNSYXRpbmdTY2hlbWFFbmFibGVkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwMTUgc2JjdyBhYm91dC1kZXN0aW5hdGlvblwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwYjUgaGVhZGluZy1oMiBmdzdcIj57Zm9vdGVyU2VjdGlvbi5oZWFkaW5nfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYm94IGR5bmFtaWNUZXh0SW5oZXJpdFwiID5cbiAgICAgICAgICB7IHJlbmRlckhlYWRlckJlbG93VGV4dChmb290ZXJTZWN0aW9uLCBpc1JhdGluZ1NjaGVtYUVuYWJsZWQpIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMTVcIj4gPC9kaXY+XG4gICAgICAgICAgPEZvb3RlckNtcyBmb290ZXJTZWN0aW9uPXtmb290ZXJTZWN0aW9ufSBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ9e2lzUmF0aW5nU2NoZW1hRW5hYmxlZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC10by1wYWNrYWdlcy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtdG8tcGFja2FnZXMtbGluay1tb2JpbGVcIj5HbyB0byBQYWNrYWdlczwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWJvdXRMaXN0aW5nRGVzdGluYXRpb24ucHJvcFR5cGVzID0ge1xuICBmb290ZXJTZWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGlzUmF0aW5nU2NoZW1hRW5hYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkZvb3RlckNtcy5wcm9wVHlwZXMgPSB7XG4gIGZvb3RlclNlY3Rpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaXNSYXRpbmdTY2hlbWFFbmFibGVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRMaXN0aW5nRGVzdGluYXRpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IExpbmssIEVsZW1lbnQsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcblxuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5jb25zdCBUcmF2ZWxHdWlkZUNvbnRhaW5lciA9IGdsYW1vcm91cy5kaXYoe1xuICBtaW5IZWlnaHQgOiAnMTY2cHgnLFxuICAnJiAubmF2aWdhdGlvbi10aWxlJzoge1xuICAgIG1hcmdpblJpZ2h0OiAnOHB4J1xuICB9LFxuICAnJiAuc3RpY2t5LWlubmVyLXdyYXBwZXInOntcbiAgICB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcsXG4gICAgekluZGV4OiAnNScsXG4gICAgbGVmdDogJzAnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJ1xuICB9XG59KTtcblxuY29uc3QgTmF2aWdhdGlvbkxvZ29Db250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0Oic3OXB4JyxcbiAgd2lkdGg6JzEzNnB4JyxcbiAgZGlzcGxheTonYmxvY2snXG59KTtcblxuY29uc3QgZm9vdGVyTmF2aWdhdGlvbiA9IHtcbiAgWydmb290ZXJUcmF2ZWxvZ3VlJy50b0xvd2VyQ2FzZSgpXToge1xuICAgICdocmVmJzogJ2Zvb3RlclRyYXZlbG9ndWUnLFxuICAgICdpbWcnOiB7XG4gICAgICAnc3JjJzogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L2Zvb3Rlcl9jbXNfbGlua3MvdHJhdmVsK3N0b3JpZXMrJTQwMngucG5nYCxcbiAgICAgICd3aWR0aCc6IDc5LFxuICAgICAgJ2hlaWdodCc6IDEzNixcbiAgICAgICdhbHQnOiAnVHJhdmVsIHN0b3JpZXMgbG9nbydcbiAgICB9LFxuICAgICd0aXRsZSc6ICdUcmF2ZWwgU3RvcmllcydcbiAgfSxcbiAgWydmb290ZXJBY2NvbW1vZGF0aW9uJy50b0xvd2VyQ2FzZSgpXToge1xuICAgICdocmVmJzogJ2Zvb3RlckFjY29tbW9kYXRpb24nLFxuICAgICdpbWcnOiB7XG4gICAgICAnc3JjJzogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L2Zvb3Rlcl9jbXNfbGlua3MvYWNjb21tb2RhdGlvbi5wbmdgLFxuICAgICAgJ3dpZHRoJzogNzksXG4gICAgICAnaGVpZ2h0JzogMTM2LFxuICAgICAgJ2FsdCc6ICdBY2NvbW1vZGF0aW9uIGxvZ28nXG4gICAgfSxcbiAgICAndGl0bGUnOiAnQWNjb21tb2RhdGlvbidcbiAgfSxcbiAgWydmb290ZXJGb29kJy50b0xvd2VyQ2FzZSgpXToge1xuICAgICdocmVmJzogJ2Zvb3RlckZvb2QnLFxuICAgICdpbWcnOiB7XG4gICAgICAnc3JjJzogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L2Zvb3Rlcl9jbXNfbGlua3MvZm9vZC5wbmdgLFxuICAgICAgJ3dpZHRoJzogNzksXG4gICAgICAnaGVpZ2h0JzogMTM2LFxuICAgICAgJ2FsdCc6ICdGb29kIGxvZ28nXG4gICAgfSxcbiAgICAndGl0bGUnOiAnRm9vZCAmIEN1aXNpbmUnXG4gIH0sXG4gIFsnZm9vdGVyUGxhY2VzJy50b0xvd2VyQ2FzZSgpXToge1xuICAgICdocmVmJzogJ2Zvb3RlclBsYWNlcycsXG4gICAgJ2ltZyc6IHtcbiAgICAgICdzcmMnOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vZm9vdGVyX2Ntc19saW5rcy9wbGFjZXMrdG8rdmlzaXQucG5nYCxcbiAgICAgICd3aWR0aCc6IDc5LFxuICAgICAgJ2hlaWdodCc6IDEzNixcbiAgICAgICdhbHQnOiAnUGxhY2VzIHRvIHZpc2l0IGxvZ28nXG4gICAgfSxcbiAgICAndGl0bGUnOiAnUGxhY2VzIHRvIFZpc2l0J1xuICB9LFxuICBbJ2Zvb3RlclRoaW5nc1RvRE8nLnRvTG93ZXJDYXNlKCldOiB7XG4gICAgJ2hyZWYnOiAnZm9vdGVyVGhpbmdzVG9ETycsXG4gICAgJ2ltZyc6IHtcbiAgICAgICdzcmMnOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vZm9vdGVyX2Ntc19saW5rcy90aGluZ3MrdG8rZG8ucG5nYCxcbiAgICAgICd3aWR0aCc6IDc5LFxuICAgICAgJ2hlaWdodCc6IDEzNixcbiAgICAgICdhbHQnOiAnVGhpbmdzIHRvIGRvIGxvZ28nXG4gICAgfSxcbiAgICAndGl0bGUnOiAnVGhpbmdzIHRvIERvJ1xuICB9LFxuICBbJ2Zvb3RlckVzc2VudGlhbEluZm8nLnRvTG93ZXJDYXNlKCldOiB7XG4gICAgJ2hyZWYnOiAnZm9vdGVyRXNzZW50aWFsSW5mbycsXG4gICAgJ2ltZyc6IHtcbiAgICAgICdzcmMnOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vZm9vdGVyX2Ntc19saW5rcy9lc3NlbnRpYWwraW5mby5wbmdgLFxuICAgICAgJ3dpZHRoJzogNzksXG4gICAgICAnaGVpZ2h0JzogMTM2LFxuICAgICAgJ2FsdCc6ICdFc3NlbnRpYWwgaW5mbyBsb2dvJ1xuICAgIH0sXG4gICAgJ3RpdGxlJzogJ0Vzc2VudGlhbCBJbmZvJ1xuICB9LFxuICBbJ2Zvb3RlclByb1RpcHMnLnRvTG93ZXJDYXNlKCldOiB7XG4gICAgJ2hyZWYnOiAnZm9vdGVyUHJvVGlwcycsXG4gICAgJ2ltZyc6IHtcbiAgICAgICdzcmMnOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vZm9vdGVyX2Ntc19saW5rcy9wcm8rdGlwcy5wbmdgLFxuICAgICAgJ3dpZHRoJzogNzksXG4gICAgICAnaGVpZ2h0JzogMTM2LFxuICAgICAgJ2FsdCc6ICdQcm8gdGlwcyBsb2dvJ1xuICAgIH0sXG4gICAgJ3RpdGxlJzogJ1BybyBUaXBzJ1xuICB9XG59O1xuXG5jb25zdCBGb290ZXJDb250ZW50TmF2aWdhdGlvbiA9ICh7bmF2aWdhdGlvbkxpbmtJdGVtcywgaGVhZGluZ30pID0+IHtcbiAgaWYgKCEobmF2aWdhdGlvbkxpbmtJdGVtcyAmJiBuYXZpZ2F0aW9uTGlua0l0ZW1zLmxlbmd0aCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG9uU2V0QWN0aXZlID0gKHRhcmdldElkKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK3RhcmdldElkKyctdHJpZ2dlcmxpbmsnKTtcbiAgICBpZiAoIGFjdGl2ZWxpbmsgJiYgYWN0aXZlbGluay5zY3JvbGxJbnRvVmlldykge1xuICAgICAgYWN0aXZlbGluay5zY3JvbGxJbnRvVmlldyh7aW5saW5lOlwiY2VudGVyXCJ9KTtcbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUcmF2ZWxHdWlkZUNvbnRhaW5lciBjbGFzc05hbWU9XCJyb3cgcGwxNSBwcjAgbWI4IHB0MTUgc2Jjd1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImYxNiBwZmM1IGZ3OSBtYjI0IGZvb3Rlci1uYXZpZ2F0aW9uLWhlYWRlclwiPntoZWFkaW5nLnJlcGxhY2UoJ0Fib3V0ICcsJycpfSBUcmF2ZWwgR3VpZGUgYnkgQ2F0ZWdvcnk8L2gyPlxuICAgICAgPFN0aWNreSB0b3A9XCIjc3RhcnRMaXN0aW5nRGVzY1wiIGJvdHRvbUJvdW5kYXJ5PVwiI2VuZExpc3RpbmdEZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5hdmlnYXRpb24tY29udGFpbmVyIHN3aXBlci1mdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hdmlnYXRpb25MaW5rSXRlbXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3Rlck5hdmlnYXRpb25FbGVtZW50ID0gZm9vdGVyTmF2aWdhdGlvblt2YWx1ZS50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICAgICAgICAgIGlmICghZm9vdGVyTmF2aWdhdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tdGlsZVwiIGtleT17Zm9vdGVyTmF2aWdhdGlvbkVsZW1lbnQuaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Zvb3Rlck5hdmlnYXRpb25FbGVtZW50LmhyZWYrJy10cmlnZ2VybGluayd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0QWN0aXZlPXtvblNldEFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2Zvb3Rlck5hdmlnYXRpb25FbGVtZW50LmhyZWZ9IHNweSBzbW9vdGggaXNEeW5hbWljIGR1cmF0aW9uPXs1MDB9IG9mZnNldD17LTUwfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkxvZ29Db250YWluZXIgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1sb2dvLWNvbnRhaW5lciBtYjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWcgaWtTcmM9e2Zvb3Rlck5hdmlnYXRpb25FbGVtZW50LmltZy5zcmN9IGhlaWdodD17Nzl9IHdpZHRoPXsxMzZ9IGFsdD17Zm9vdGVyTmF2aWdhdGlvbkVsZW1lbnQuaW1nLmFsdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25Mb2dvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBmYzMgZjE0IGZ3OVwiPntmb290ZXJOYXZpZ2F0aW9uRWxlbWVudC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdGlja3k+XG4gICAgPC9UcmF2ZWxHdWlkZUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkZvb3RlckNvbnRlbnROYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgbmF2aWdhdGlvbkxpbmtJdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJDb250ZW50TmF2aWdhdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgQ3VzdG9tU3dpcGVyIGZyb20gJ21vZHVsZXMvc2hhcmVkL0N1c3RvbVN3aXBlcic7XG5pbXBvcnQgeyBpc0ZpbHRlckRpc2FibGUgfSBmcm9tICcuLi9Tb3J0RmlsdGVycy9TbWFydEZpbHRlcic7XG5pbXBvcnQgSW1nIGZyb20gJy4uLy4uL0NvbW1vbi9JbWcnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuaW1wb3J0IHBhcnNlRmlsdGVycyBmcm9tIFwiY29udGFpbmVycy9MaXN0aW5nL3BhcnNlRmlsdGVyc1wiO1xuaW1wb3J0IHsgRVhDTFVTSU9OX0NBVEVHT1JZX1RBR1MsIEVYQ0xVU0lPTl9DQVRFR09SWV9UQUdTX0tFWVdPUkQsIEVYQ0xVU0lPTl9UQUdTIH0gZnJvbSBcInV0aWxzL3BhcnNlcnNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2lubGluZUZpbHRlci5jbS5zY3NzJztcblxuY29uc3QgZmlsdGVyVHlwZUltYWdlcyA9IHtcbiAgJ2hvbmV5bW9vbic6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9ob25leW1vb25fNHgucG5nYCxcbiAgJ2ZhbWlseSc6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9mYW1pbHlfNHgucG5nYCxcbiAgJ2ZyaWVuZHMnOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvZnJpZW5kc180eC5wbmdgXG59O1xuXG5jbGFzcyBJbmxpbmVGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGZpbHRlcnM6IHt9XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBsb2NhdGlvbiwgdHlwZSwgZmlsdGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJyl7XG4gICAgICBjb25zdCB7IGZpbHRlcnM6IHNlbGVjdGVkRmlsdGVycyB9ID0gcGFyc2VGaWx0ZXJzKHtxdWVyeTogbG9jYXRpb24ucXVlcnkgfHwge319KTtcbiAgICAgIGxldCB0ZW1wRmlsdGVyID0ge307XG4gICAgICBPYmplY3Qua2V5cyhzZWxlY3RlZEZpbHRlcnMpLm1hcChrZXkgPT4ge1xuICAgICAgICBjb25zdCBpc0V4Y2x1c2lvbiA9IGtleSA9PT0gRVhDTFVTSU9OX0NBVEVHT1JZX1RBR1M7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHNlbGVjdGVkRmlsdGVyc1trZXldIHx8IFtdO1xuICAgICAgICB2YWx1ZXMgJiYgdmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhjVGV4dCA9IGlzRXhjbHVzaW9uID8gRVhDTFVTSU9OX0NBVEVHT1JZX1RBR1NfS0VZV09SRCA6ICcnO1xuICAgICAgICAgIGNvbnN0IGlzRmlsdGVyID0gZmlsdGVycy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLmlkID09PSBgJHt2YWx1ZX0ke0VYQ0xVU0lPTl9DQVRFR09SWV9UQUdTX0tFWVdPUkR9YClbMF07XG4gICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSBpc0ZpbHRlciAmJiBPYmplY3Qua2V5cyhpc0ZpbHRlcikubGVuZ3RoID8geyBbZmlsdGVycy50YWddOiBgJHt2YWx1ZX0ke2V4Y1RleHR9YCB9IDoge307XG4gICAgICAgICAgdGVtcEZpbHRlciA9IHsuLi50ZW1wRmlsdGVyLCAuLi5zdGF0ZU9ian07XG4gICAgICAgICAgaWYgKGlzRXhjbHVzaW9uICYmIE9iamVjdC5rZXlzKHRlbXBGaWx0ZXIpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJTZWxlY3RlZChmaWx0ZXJzLnRhZywge1tgJHt2YWx1ZX0ke0VYQ0xVU0lPTl9DQVRFR09SWV9UQUdTX0tFWVdPUkR9YF06IHRydWV9ICk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnMoJycsIGZpbHRlcnMudGFnLCB7W2Ake3ZhbHVlfSR7RVhDTFVTSU9OX0NBVEVHT1JZX1RBR1NfS0VZV09SRH1gXTogdHJ1ZX0gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsdGVyczogey4uLnRlbXBGaWx0ZXJ9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RGaWx0ZXIgPSAoZmlsdGVySWQsIG9wdGlvbklkLCB0YWcpID0+IHtcbiAgICBpZiAodGFnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZmlsdGVycyxcbiAgICAgICAgICBbdGFnXTogb3B0aW9uSWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvblZhbHVlID0ge1xuICAgICAgW29wdGlvbklkXTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRGaWx0ZXJzW2ZpbHRlcklkXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRmlsdGVyc1tmaWx0ZXJJZF1bb3B0aW9uSWRdKSB7XG4gICAgICBvcHRpb25WYWx1ZVtvcHRpb25JZF0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmNsdXNpb25fY2F0ZWdvcnlfZmlsdGVycyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRGaWx0ZXJzWydpbmNsdXNpb25fY2F0ZWdvcnlfdGFncyddO1xuICAgIGxldCBpbmNsdXNpb25PYmogPSB7Li4uaW5jbHVzaW9uX2NhdGVnb3J5X2ZpbHRlcnN9O1xuICAgIGNvbnN0IGlzRXhjbHVzaW9uID0gdHlwZW9mIG9wdGlvbklkID09PSAnc3RyaW5nJyAmJiBvcHRpb25JZC5pbmRleE9mKEVYQ0xVU0lPTl9DQVRFR09SWV9UQUdTX0tFWVdPUkQpID4gLTE7XG4gICAgaWYgKHRhZykge1xuICAgICAgaWYgKGlzRXhjbHVzaW9uKSB7XG4gICAgICAgIGlmIChpbmNsdXNpb25fY2F0ZWdvcnlfZmlsdGVycyAmJiBPYmplY3Qua2V5cyhpbmNsdXNpb25fY2F0ZWdvcnlfZmlsdGVycykubGVuZ3RoICYmXG4gICAgICAgICAgaW5jbHVzaW9uX2NhdGVnb3J5X2ZpbHRlcnNbb3B0aW9uSWQucmVwbGFjZShFWENMVVNJT05fQ0FURUdPUllfVEFHU19LRVlXT1JELCAnJyldKSB7XG4gICAgICAgICAgaW5jbHVzaW9uT2JqID0ge1xuICAgICAgICAgICAgLi4uaW5jbHVzaW9uT2JqLFxuICAgICAgICAgICAgW29wdGlvbklkLnJlcGxhY2UoRVhDTFVTSU9OX0NBVEVHT1JZX1RBR1NfS0VZV09SRCwgJycpXTogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyU2VsZWN0ZWQoJ2luY2x1c2lvbl9jYXRlZ29yeV90YWdzJywgey4uLmluY2x1c2lvbk9ian0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25WYWx1ZVtgJHtvcHRpb25JZH0ke0VYQ0xVU0lPTl9DQVRFR09SWV9UQUdTX0tFWVdPUkR9YF0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXJTZWxlY3RlZCh0YWcsIHsgW2Ake29wdGlvbklkfSR7RVhDTFVTSU9OX0NBVEVHT1JZX1RBR1NfS0VZV09SRH1gXTogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0ZWRGaWx0ZXJzLFxuICAgICAgJ2luY2x1c2lvbl9jYXRlZ29yeV90YWdzJzogey4uLmluY2x1c2lvbk9ian0sXG4gICAgICBbZmlsdGVySWRdOiB7IC4uLnRoaXMucHJvcHMuc2VsZWN0ZWRGaWx0ZXJzW2ZpbHRlcklkXSwgLi4ub3B0aW9uVmFsdWUgfVxuICAgIH07XG4gICAgdGhpcy5wcm9wcy5maWx0ZXJTZWxlY3RlZChmaWx0ZXJJZCwgeyAuLi50aGlzLnByb3BzLnNlbGVjdGVkRmlsdGVyc1tmaWx0ZXJJZF0sIC4uLm9wdGlvblZhbHVlIH0pO1xuICAgIHRoaXMucHJvcHMuZmlsdGVyc0FwcGxpZWQob2JqKTtcbiAgfTtcblxuICBkZVNlbGVjdE9wdGlvbiA9IChpc1JhZGlvLCBmaWx0ZXIsIG9wdGlvbklkLCBpZCkgPT4ge1xuICAgIGNvbnN0IHsgZmlsdGVycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoaXNSYWRpbyAmJiBmaWx0ZXJzW2ZpbHRlcl0gJiYgZmlsdGVyc1tmaWx0ZXJdID09PSBvcHRpb25JZCkge1xuICAgICAgaWYgKGZpbHRlcnNbZmlsdGVyXSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgZmlsdGVyczogey4uLnByZXZTdGF0ZS5maWx0ZXJzLCBmaWx0ZXI6ICFwcmV2U3RhdGUuZmlsdGVyc1tmaWx0ZXJdfX07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSB7IFtvcHRpb25JZF06IGZhbHNlIH07XG4gICAgICBjb25zdCB0eXBlID0gdHlwZW9mIG9wdGlvbklkID09PSAnc3RyaW5nJyAmJiBvcHRpb25JZC5pbmNsdWRlcyhFWENMVVNJT05fQ0FURUdPUllfVEFHU19LRVlXT1JEKSA/IGZpbHRlciA6IGlkO1xuICAgICAgdGhpcy5wcm9wcy5maWx0ZXJTZWxlY3RlZCh0eXBlLCB7Li4ub3B0aW9uVmFsdWV9KTtcbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5zZWxlY3RlZEZpbHRlcnMsXG4gICAgICAgIFt0eXBlXTogeyAuLi50aGlzLnByb3BzLnNlbGVjdGVkRmlsdGVyc1t0eXBlXSwgLi4ub3B0aW9uVmFsdWUgfVxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMuZmlsdGVyc0FwcGxpZWQob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzVGhlbWUsIHNob3dJbWFnZSwgZmlsdGVyczoge29wdGlvbnMsIHBhcmFtc05hbWUsIGlkLCB0YWd9LCBpc0RvdWJsZUxpbmUsIGNsYXNzTmFtZSwgdHlwZT0nY2hlY2tib3gnIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN3aXBlclN0eWxlID0gaXNUaGVtZSA/IHsgaGVpZ2h0OiAnODhweCcgfSA6IGlzRG91YmxlTGluZSA/IHsgaGVpZ2h0OiAnYXV0bycgfSA6IHt9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHAxNSBzYmN3ICR7aXNUaGVtZSA/IHN0eWxlcy5maWx0ZXJzQ29udGFpbmVyIDogc3R5bGVzLmZpbHRlcnNDb250YWluZXJDb21tb259ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICA8aW5wdXQgaWQ9e3BhcmFtc05hbWV9IHR5cGU9J2NoZWNrYm94JyBjbGFzc05hbWU9e2BoaWRlICR7c3R5bGVzLmlubGluZUZpbHRlcnN9YH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3BhcmFtc05hbWV9IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4nPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjE2IGZ3Yic+e3RoaXMucHJvcHMudGl0bGV9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtMjQgcmVsYXRpdmUgcDUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyJz48RG93bkFycm93IC8+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNEb3VibGVMaW5lID8gc3R5bGVzLmRvdWJsZUxpbmVJbmxpbmVGaWx0ZXJzRGF0YSA6IHN0eWxlcy5pbmxpbmVGaWx0ZXJzRGF0YX0gJHt0eXBlID09PSAncmFkaW8nID8gJ21yOCcgOiAnJ31gIH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgPEN1c3RvbVN3aXBlciBjb250YWluZXJTdHlsZT17c3dpcGVyU3R5bGV9IGlzRG91YmxlTGluZT17aXNEb3VibGVMaW5lfSBzdHlsZXM9e3N0eWxlc30+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1hcCgoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9e3RoaXMuc3RhdGUuZmlsdGVyc1t0YWddID09PSBmaWx0ZXIuaWQgPyB0cnVlIDogdGhpcy5wcm9wcy5zZWxlY3RlZEZpbHRlcnNbaWRdID8gdGhpcy5wcm9wcy5zZWxlY3RlZEZpbHRlcnNbaWRdW2ZpbHRlci5pZF0gOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGlkZSAke3N0eWxlcy5pbmxpbmVGaWx0ZXJzQ2hlY2tib3h9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt0aGlzLnNlbGVjdEZpbHRlcih0eXBlID09PSAncmFkaW8nID8gdGFnIDogaWQsIGZpbHRlci5pZCwgdGFnKTt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGlubGluZWZpbHRlcl8ke3BhcmFtc05hbWV9XyR7ZmlsdGVyLnZhbHVlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZmlsdGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVTZWxlY3RPcHRpb24odHlwZSA9PT0gJ3JhZGlvJywgdGFnLCBmaWx0ZXIuaWQsIGlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmlsdGVyRGlzYWJsZShmaWx0ZXIsIHRoaXMucHJvcHMuZmlsdGVyQ291bnRzLCB0eXBlID09PSAncmFkaW8nID8gdGFnIDogaWQpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbm9CZWZvcmVBZnRlciBmbGV4IHJhZGl1czIgb3ZlcmZsb3doIGZsZXhEQ29sdW1uIHAwJyBodG1sRm9yPXtgaW5saW5lZmlsdGVyXyR7cGFyYW1zTmFtZX1fJHtmaWx0ZXIudmFsdWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbWFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByYWRpdXMyIG1yOCB0aGVtZUltZ0NudGFpbmVyIG1iMyBzYmM1ICR7c3R5bGVzLnRoZW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltZyBpa1NyYz17ZmlsdGVyVHlwZUltYWdlc1tmaWx0ZXIudmFsdWVdfSBhbHQ9e2ZpbHRlci52YWx1ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Nob3dJbWFnZSA/ICd0ZXh0LWxlZnQnIDogYCR7c3R5bGVzLmZpbHRlclRpdGxlfSBmbGV4RnVsbCBmbGV4IHRleHQtY2VudGVyIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgcGw4IHByOCBtcjhgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQ3VzdG9tU3dpcGVyPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbklubGluZUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlzRG91YmxlTGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbGVjdGVkRmlsdGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZmlsdGVyU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJzQXBwbGllZDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnM6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJDb3VudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc1RoZW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ltYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbklubGluZUZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzRG91YmxlTGluZTogZmFsc2UsXG4gIHR5cGU6ICdjaGVja2JveCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZUZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSW5saW5lRmlsdGVyIGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9JbmxpbmVGaWx0ZXJzL0lubGluZUZpbHRlcic7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzVG91ckZpbHRlclNlbGVjdGVkLCBmaWx0ZXJzLCBzZWxlY3RlZEZpbHRlcnMsIGZpbHRlclNlbGVjdGVkLFxuICAgICAgZmlsdGVyc0FwcGxpZWQsIGZpbHRlckNvdW50cywgZmlsdGVyQ2F0ZWdvcnlcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgaXNUb3VyRmlsdGVyU2VsZWN0ZWQgJiYgZmlsdGVyQ2F0ZWdvcnkuaW5kZXhPZignY2F0ZWdvcnknKSA9PT0gLTEgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210OCc+XG4gICAgICAgICAgICAgIDxJbmxpbmVGaWx0ZXIgZmlsdGVycz17ZmlsdGVyc1snMzYnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtdGhlbWUtZmlsdGVyIGlubGluZS1jb21tb24tZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbHRlcnM9e3NlbGVjdGVkRmlsdGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RoZW1lPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclNlbGVjdGVkPXtmaWx0ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXBwbGllZD17ZmlsdGVyc0FwcGxpZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnRzPXtmaWx0ZXJDb3VudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ltYWdlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2hvb3NlIGJ5IFRoZW1lXCIvPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBmaWx0ZXJDYXRlZ29yeS5pbmRleE9mKCdkYXlzJykgPT09IC0xID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdDgnPlxuICAgICAgICAgICAgICA8SW5saW5lRmlsdGVyIGZpbHRlcnM9e2ZpbHRlcnNbJzM4J119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWNvbW1vbi1maWx0ZXIgZGF5cy1maWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycz17c2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclNlbGVjdGVkPXtmaWx0ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RoZW1lPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXBwbGllZD17ZmlsdGVyc0FwcGxpZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnRzPXtmaWx0ZXJDb3VudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDaG9vc2UgYnkgRHVyYXRpb25cIi8+XG4gICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlckNhdGVnb3J5LmluZGV4T2YoJ3ByaWNlX3JhbmdlcycpID09PSAtMSA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQ4IG1iOCc+XG4gICAgICAgICAgICAgIDxJbmxpbmVGaWx0ZXIgZmlsdGVycz17ZmlsdGVyc1snMzknXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtY29tbW9uLWZpbHRlciBwcmljZS1maWx0ZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbHRlcnM9e3NlbGVjdGVkRmlsdGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJTZWxlY3RlZD17ZmlsdGVyU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUaGVtZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0FwcGxpZWQ9e2ZpbHRlcnNBcHBsaWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50cz17ZmlsdGVyQ291bnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2hvb3NlIGJ5IEJ1ZGdldFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkluZGV4LmRpc3BsYXlOYW1lID0gJ0lubGluZUZpbHRlcnMnO1xuXG5JbmRleC5wcm9wVHlwZXMgPSB7XG4gIGlzVG91ckZpbHRlclNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBmaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZWxlY3RlZEZpbHRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlclNlbGVjdGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgZmlsdGVyc0FwcGxpZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBmaWx0ZXJDb3VudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZpbHRlckNhdGVnb3J5OiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGhlbWVcIjogXCJKVDRzREZaaXNzWWoweHVqaTdWRU1cIixcblx0XCJpbmxpbmVGaWx0ZXJzXCI6IFwiXzFHWW9fVV85QVBjVVM2b1ktdmRnU1dcIixcblx0XCJpbmxpbmVGaWx0ZXJzRGF0YVwiOiBcIl8xRFZBS0NLa25fQ29XNWw5X2NqRjFyXCIsXG5cdFwiZG91YmxlTGluZUlubGluZUZpbHRlcnNEYXRhXCI6IFwiXzNwWlV4X1EtdVRnM2dRdnI5ZjRrUjZcIixcblx0XCJmaWx0ZXJUaXRsZVwiOiBcIl82ZDcxV1BUekRKQkwyRnlUX01xeU5cIixcblx0XCJpbmxpbmVGaWx0ZXJzQ2hlY2tib3hcIjogXCJHRkNPa0dhdkI4SW5pRzVtekpvMENcIixcblx0XCJkb3VibGVMaW5lXCI6IFwiXzFnOGxFZ2dLTW9NSjNhTEpfZ1E1elBcIixcblx0XCJkb3VibGVMaW5lRmxleFwiOiBcIl8yemtDamkxdDVxYmw2dXgwc2VRaTVYXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgUGFja2FnZUltZ1RpdGxlRGVhbHMgZnJvbSAnY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VJbWdUaXRsZURlYWxzJztcbmltcG9ydCBQYWNrYWdlUHJpY2VFeHBlcmltZW50IGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlUHJpY2VFeHBlcmltZW50JztcbmltcG9ydCBQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZURheXNEaXNjb3VudEV4cGVyaW1lbnQnO1xuaW1wb3J0IFBhY2thZ2VDaXRpZXMgZnJvbSAnY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VDaXRpZXMnO1xuaW1wb3J0IFBhY2thZ2VJbmNFeGNEZWFscyBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZUluY0V4Y0RlYWxzJztcbmltcG9ydCBGb3JtT25lQ1RBIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9Gb3JtT25lQ1RBJztcbmltcG9ydCB7XG4gIHRyYWNrU2VnbWVudCwgUEFDS0FHRV9DTElDS0VELCBQQUNLQUdFX1ZJRVdFRCxcbiAgUEFDS0FHRV9DT01QQVJFX0FEREVEXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgJy4vUGFja2FnZUNpdGllcy5zY3NzJztcbmltcG9ydCAnLi9MaXN0aW5nLnNjc3MnO1xuaW1wb3J0IHsgcGFyc2VEZXN0aW5hdGlvbnNUb1Nob3cgfSBmcm9tICcuLi8uLi91dGlscy9wYXJzZXJzJztcbmltcG9ydCB7IEx1eHVyeVBhY2thZ2VJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBHQ2FyZFRhZ3NTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICBoZWlnaHQ6ICcyNHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZhYzIyZSdcbn0pO1xuXG5jb25zdCBHRGlzY291bnREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYm94U2hhZG93OiAnMCAwIDZweCByZ2JhKDAsMCwwLDAuNSknLFxufSk7XG5cbmNvbnN0IEdIaWdobGlnaHRCYW5uZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmYzA1NycsXG59KTtcblxuY29uc3QgR0x1eHVyeURpdiA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzEyNHB4JyxcbiAgaGVpZ2h0OiAnNTVweCcsXG4gIGxlZnQ6ICctM3B4JyxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICc0cHgnLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzRweCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdG9wOiAnOHB4J1xufSk7XG5cbmNsYXNzIFBhY2thZ2VDYXJkRGVhbHNBbmRMdXh1cnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGhvdGVsSWQ6IHByb3BzLmNhcmQuaWQgfTtcbiAgICB0aGlzLnNlbnNvclZpc2liaWxpdHkgPSBmYWxzZTtcblxuICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQgPSB0aGlzLnRyYWNrU2VnbWVudEV2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmFja0xlYWRDbGlja0V2ZW50ID0gdGhpcy50cmFja0xlYWRDbGlja0V2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJIb3RlbFNlbGVjdGlvbnMgPSB0aGlzLnJlbmRlckhvdGVsU2VsZWN0aW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCBjdGFUZXh0UGFja2FnZSwgdG9EZXN0aW5hdGlvbikge1xuICAgIGlmICghdGhpcy5zZW5zb3JWaXNpYmlsaXR5ICYmIGlzVmlzaWJsZSkge1xuICAgICAgdGhpcy5zZW5zb3JWaXNpYmlsaXR5ID0gaXNWaXNpYmxlO1xuICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChQQUNLQUdFX1ZJRVdFRCwgY3RhVGV4dFBhY2thZ2UsIHRvRGVzdGluYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB0cmFja1NlZ21lbnRFdmVudChldmVudCwgY3RhVGV4dFBhY2thZ2UsIHRvRGVzdGluYXRpb24pIHtcbiAgICBjb25zdCB7IGNhcmQgfSA9IHRoaXMucHJvcHM7XG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgIGNhdGVnb3J5OiBgRGVzdGluYXRpb246JHt0b0Rlc3RpbmF0aW9ufWAsXG4gICAgICBzZWN0aW9uOiAnUGFja2FnZSBMaXN0L1ZpZXcgRGV0YWlscycsXG4gICAgICBvYmplY3Q6IGBQYWNrYWdlLyR7Y2FyZC5pZH1gLFxuICAgICAgY3RhOiBjdGFUZXh0UGFja2FnZSxcbiAgICAgIHBhY2thZ2VfaWQ6IGNhcmQuaWQsXG4gICAgICBkZXN0aW5hdGlvbl9saXN0OiB0b0Rlc3RpbmF0aW9uLFxuICAgICAgZGVzdGluYXRpb25faWQ6IGNhcmQuZGVzdGluYXRpb25zWzBdLmlkLFxuICAgICAgbGFiZWw6IGBEYXlzOiR7Y2FyZC5kYXlzfTo6SW5kZXg6JHt0aGlzLnByb3BzLmluZGV4ICsgMX1gLFxuICAgICAgdmFsdWU6IGNhcmQucHJpY2VfdG90YWwsXG4gICAgICBwYWNrYWdlX25hbWU6IGNhcmQubmFtZVxuICAgIH0pO1xuICB9O1xuXG4gIHRyYWNrTGVhZENsaWNrRXZlbnQoY3RhVGV4dEZvcm0sIHRvRGVzdGluYXRpb24pIHtcbiAgICBjb25zdCBwSWQgPSB0aGlzLnByb3BzLmNhcmQuaWQ7XG4gICAgY29uc3Qgc2VjdGlvbiA9ICdHZXQgUXVvdGVzIEJ1dHRvbic7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBgRGVzdGluYXRpb246JHt0b0Rlc3RpbmF0aW9ufWA7XG4gICAgY29uc3Qgb2JqZWN0ID0gYFBhY2thZ2UvJHtwSWR9YDtcbiAgICB0aGlzLnByb3BzLnRyYWNrTGVhZEZ1bm5lbENsaWNrKHNlY3Rpb24sIGNhdGVnb3J5LCBvYmplY3QsIGN0YVRleHRGb3JtLCBwSWQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJlbmRlckhvdGVsU2VsZWN0aW9ucygpIHtcbiAgICBjb25zdCB7IGNhcmQsIHNldEFjdGl2ZUhvdGVscyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGhvdGVsc0lkcyA9IE9iamVjdC5rZXlzKGNhcmQuZmFtaWx5X3BhY2thZ2VzIHx8IHt9KTtcblxuICAgIGlmIChob3RlbHNJZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBob3RlbENoZWNrYm94ZXMgPSBob3RlbHNJZHMubWFwKChob3RlbElkLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2hvdGVsSWR9IGNsYXNzTmFtZT1cImlibG9jayBmbGV4IGFsaWduQ2VudGVyIGhvdGVsU3Rhckl0ZW0gbXI4XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT17YGhvdGVsX3N0YXJfaW5wdXRfJHtjYXJkLmlkfWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGVcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtob3RlbElkLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RhdGUuaG90ZWxJZC50b1N0cmluZygpfVxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Y2FyZC5pZH1fJHtob3RlbElkfWB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdGVsSWQgfSk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlSG90ZWxzKGNhcmQuaWQsIGhvdGVsSWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YWx1ZT17aG90ZWxJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZjEyXCIgaHRtbEZvcj17YGlucHV0XyR7Y2FyZC5pZH1fJHtob3RlbElkfWB9PlxuICAgICAgICAgICAgICB7Y2FyZC5mYW1pbHlfcGFja2FnZXNbaG90ZWxJZF1bMF19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAge2kgPCBob3RlbHNJZHMubGVuZ3RoIC0gMSA/ICcsICcgOiAnJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzdGFyLXJhdGluZ3Mtc2VsZWN0aW9uIGZsZXggYWxpZ25DZW50ZXJcIj57aG90ZWxDaGVja2JveGVzfTwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBnZXRDYXJkVGFnID0gKGhpZGVEaXNjb3VudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFnLCBjYXJkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0YWcgPT09ICdkZWFscycpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBjYXJkLmxhYmVsc1sxXTtcbiAgICAgIHRoaXMuYnV0dG9uVGV4dCA9ICdDaGVjayBBdmFpbGFiaWxpdHknO1xuICAgICAgcmV0dXJuIGhpZGVEaXNjb3VudCA/IDxkaXYgLz46IDxHRGlzY291bnREaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSByYWRpdXMyIHQxNSBzYmN3IGwxNSB6MiB0ZXh0LWNlbnRlcic+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wIHA1Jz5EZWFsIG9mIHRoZSBEYXk8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIHBiYzEganVzdGlmeUNlbnRlciBwdDUgcGI1IHBsOCBwcjgnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjMyIHNmY3cgZnc5IG0wJz57TWF0aC5yb3VuZChjYXJkLmRpc2NvdW50X3BlcmNlbnRhZ2UpfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwyJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIHNmY3cgbTAnPiU8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMiBzZmN3IG0wJz5vZmY8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HRGlzY291bnREaXY+O1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnbHV4dXJ5Jykge1xuICAgICAgdGhpcy5sYWJlbCA9ICdIYXNzZWwgRnJlZSBCb29raW5nIHwgQWxsIEluY2x1c2l2ZSB8IDI0eDcgQXNzaXN0YW5jZSc7XG4gICAgICB0aGlzLmJ1dHRvblRleHQgPSAnQ3VzdG9taXplJztcbiAgICAgIHJldHVybiA8R0x1eHVyeURpdiBjbGFzc05hbWU9J2Fic29sdXRlIHJhZGl1czIgdDE1IGwxNSB6MiAnPjxMdXh1cnlQYWNrYWdlSWNvbiAvPjwvR0x1eHVyeURpdj47XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjYXJkLCBmb3JtVG9Mb2NhdGlvbiwgdGFnIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYWRkaXRpb25hbEluZm9UZXh0ID0gYFRyYXZlbGVyIGhhcyBleHByZXNzZWQgaW50ZXJlc3QgaW4gJHtjYXJkLmRheXN9IERheXMgLCAke2NhcmQubmlnaHRzfSBuaWdodHMgd2l0aCBjaXRpZXMgJHtjYXJkLmNpdGllc30uIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUgPGEgaHJlZj0nL3BhY2thZ2VzLyR7Y2FyZC5zZXRfdXJsfSc+bGluazwvYT5gO1xuXG4gICAgLy8gVE9ETzogVWdseSBjb2RlLiBIYW5kbGUgaXQgZGlmZmVyZW50bHlcbiAgICBsZXQgdG9EZXN0aW5hdGlvbiA9ICcnO1xuICAgIHRyeSB7XG4gICAgICB0b0Rlc3RpbmF0aW9uID0gY2FyZC5kZXN0aW5hdGlvbnNbMF0ubmFtZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0b0Rlc3RpbmF0aW9uID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybU9uZVRvTG9jYXRpb24gPSBmb3JtVG9Mb2NhdGlvbiA/IGZvcm1Ub0xvY2F0aW9uIDogdG9EZXN0aW5hdGlvbjtcbiAgICBjb25zdCBpc0RlYWwgPSB0YWcgPT09ICdkZWFscyc7XG4gICAgY29uc3QgaXNMdXh1cnkgPSB0YWcgPT09ICdsdXh1cnknO1xuICAgIGNvbnN0IGN0YVRleHRQYWNrYWdlID0gaXNEZWFsID8gJ1ZpZXcgRGVhbCcgOiAnVmlldyBEZXRhaWxzJztcbiAgICBjb25zdCB7IGlzRXhwZXJpbWVudCB9ID0gY2FyZDtcbiAgICBsZXQgaGlkZURpc2NvdW50ID0gZmFsc2UsIHJlcGxhY2VQcmljZSA9IGZhbHNlLCBmYW1pbHlfcGFja2FnZXMgPSBjYXJkLmZhbWlseV9wYWNrYWdlcztcbiAgICBpZiAoaXNFeHBlcmltZW50KSB7XG4gICAgICBoaWRlRGlzY291bnQgPSBpc0V4cGVyaW1lbnQuaGlkZURpc2NvdW50O1xuICAgICAgcmVwbGFjZVByaWNlID0gaXNFeHBlcmltZW50LnJlcGxhY2VQcmljZTtcbiAgICB9XG4gICAgZmFtaWx5X3BhY2thZ2VzID0gcmVwbGFjZVByaWNlID8gY2FyZC5mYW1pbHlfcGFja2FnZXNfbWFwIDogY2FyZC5mYW1pbHlfcGFja2FnZXM7XG4gICAgY29uc3QgaG90ZWxXaXRoUHJpY2VzID0gZmFtaWx5X3BhY2thZ2VzW3RoaXMuc3RhdGUuaG90ZWxJZF0gPyBmYW1pbHlfcGFja2FnZXNbdGhpcy5zdGF0ZS5ob3RlbElkXSA6IFtdO1xuICAgIGNvbnN0IHBhY2thZ2VUYWcgPSB0aGlzLmdldENhcmRUYWcoaGlkZURpc2NvdW50KTtcbiAgICBjb25zdCBjdGFUZXh0Rm9ybSA9IHRoaXMuYnV0dG9uVGV4dDtcblxuICAgIGNvbnN0IHByaWNlID0gZmFtaWx5X3BhY2thZ2VzW2NhcmQuaWRdO1xuICAgIGNvbnN0IGRlYWxuTHV4dXJ5ID0ge1xuICAgICAgcHJpY2U6IHByaWNlICYmIHByaWNlWzFdLFxuICAgICAgc3RhclJhdGluZzogcHJpY2UgJiYgcHJpY2VbMF0sXG4gICAgICBpc0ZsaWdodDogISFjYXJkLmluY2x1c2lvbnMuZmlsdGVyKChpbmMpID0+IChpbmMua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdmbGlnaHRzJyAmJiBpbmMuYXZhaWxhYmxlKSkubGVuZ3RoXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG1iOCBtdDggcmVsYXRpdmUgZXhwLTEgcGFja2FnZS1jYXJkXCI+XG4gICAgICAgIDxHSGlnaGxpZ2h0QmFubmVyRGl2IGNsYXNzTmFtZT0ncDUgZjEyIHBsMTUgcHIxNSB0ZXh0LWNlbnRlciBwZmMzIHdmdWxsJz57dGhpcy5sYWJlbH08L0dIaWdobGlnaHRCYW5uZXJEaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBzYmN3Jz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89e2AvcGFja2FnZXMvJHtjYXJkLnNldF91cmx9P2lkPSR7dGhpcy5zdGF0ZS5ob3RlbElkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYmN3XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoUEFDS0FHRV9DTElDS0VELCBjdGFUZXh0UGFja2FnZSwgdG9EZXN0aW5hdGlvbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8UGFja2FnZUltZ1RpdGxlRGVhbHMgaXNMYXJnZUltZz17dHJ1ZX0gbmFtZT17Y2FyZC5wbHBfaGVhZGluZyB8fCBjYXJkLm5hbWV9IGFsdFRleHQ9e2NhcmQuc2V0X3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXtjYXJkLmltYWdlX3VybH0gaW1hZ2VraXRVcmw9e2NhcmQuaW1hZ2VraXRfdXJsfSAvPlxuXG4gICAgICAgICAgICAgIHtjYXJkLm12cF90YWdzLmxlbmd0aCA/IDxHQ2FyZFRhZ3NTcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgejIgcmFkaXVzMiBmMTIgZnc3IHQxMCBsMTAgcGZjMyBwbDE1IHByMTUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+e2NhcmQubXZwX3RhZ3NbMF19PC9HQ2FyZFRhZ3NTcGFuPiA6IG51bGx9XG5cbiAgICAgICAgICAgICAge3BhY2thZ2VUYWd9XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiMCBsMCByMCBtdDhcIj5cbiAgICAgICAgICAgICAgICA8UGFja2FnZUluY0V4Y0RlYWxzIGluY2x1c2lvbnM9e2NhcmQuaW5jbHVzaW9uc30gaWQ9e2BjYXJkXyR7Y2FyZC5pZH1gfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVsYXRpdmUgZnc5IGYxNCBwbDE1IHByMTUgcGZjMyBtdDhcIj57Y2FyZC5uYW1lfTwvaDM+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9e2lzVmlzaWJsZSA9PiB0aGlzLm9uU2Vuc29yQ2hhbmdlKGlzVmlzaWJsZSwgY3RhVGV4dFBhY2thZ2UsIHRvRGVzdGluYXRpb24pfVxuICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxEZWxheT17MzAwMH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHA4IHNiY3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGw4IHByOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsMFwiPlxuICAgICAgICAgICAgICAgICAgPFBhY2thZ2VEYXlzRGlzY291bnRFeHBlcmltZW50XG4gICAgICAgICAgICAgICAgICAgIGRheXM9e2NhcmQuZGF5c31cbiAgICAgICAgICAgICAgICAgICAgbmlnaHRzPXtjYXJkLm5pZ2h0c31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyIG10M1wiPlxuICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySG90ZWxTZWxlY3Rpb25zKCl9XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2libGNvayBtMCBtbDUgZjEyJz5TdGFyIEhvdGVscyBJbmNsdWRlZDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwbDAgcHI4XCI+XG4gICAgICAgICAgICAgICAgICA8UGFja2FnZVByaWNlRXhwZXJpbWVudFxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aG90ZWxXaXRoUHJpY2VzLmxlbmd0aCA/IGhvdGVsV2l0aFByaWNlc1syXSA6IGNhcmQucHJpY2VfdG90YWx9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlVW5pdD17Y2FyZC5taW5pX2Rlc2N9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtjYXJkLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgaG90ZWxXaXRoUHJpY2VzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBob3RlbFdpdGhQcmljZXNbMl0gLSBob3RlbFdpdGhQcmljZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2FyZC5wcmljZV90b3RhbCAtIGNhcmQuZGlzY291bnRlZF9wcmljZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb21vVGFnPXtjYXJkLnByb21vX3RhZ31cbiAgICAgICAgICAgICAgICAgICAgdG90YWxQcmljZT17Y2FyZC5wcmljZV90b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgdG90YWxEaXNjb3VudD17Y2FyZC5wcmljZV90b3RhbCAtIGNhcmQuZGlzY291bnRlZF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZURpc2NvdW50PXtoaWRlRGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNEZWFsICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtdDggbWIwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTJcIj48c3Ryb25nPlZhbGlkaXR5OiA8L3N0cm9uZz4ge2NhcmQubGFiZWxzWzJdfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHBsMCBwcjAgZjEwXCI+XG4gICAgICAgICAgICAgICAgICA8UGFja2FnZUNpdGllcyBpc0RlYWxzQ2FyZD17dHJ1ZX0gY2l0aWVzPXtjYXJkLmNpdHlfbGlzdF93aXRoX2RheXMgfHwge319IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQ4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcGwwIHByNFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17YC9wYWNrYWdlcy8ke2NhcmQuc2V0X3VybH0/aWQ9JHt0aGlzLnN0YXRlLmhvdGVsSWR9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoUEFDS0FHRV9DTElDS0VELCBjdGFUZXh0UGFja2FnZSwgdG9EZXN0aW5hdGlvbil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpIHdmdWxsIHJpcHBsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2N0YVRleHRQYWNrYWdlfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcGw0IHByMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ2V0UGFja2FnZURhdGEoZGVhbG5MdXh1cnkpfT5cbiAgICAgICAgICAgICAgICA8Rm9ybU9uZUNUQVxuICAgICAgICAgICAgICAgICAgdGFnPXt0YWd9XG4gICAgICAgICAgICAgICAgICBydFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIHRvX2xvYzogZm9ybU9uZVRvTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRyaXBfZGF5czogY2FyZC5kYXlzLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2VJZDogY2FyZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogJ1BhY2thZ2UgTGlzdCBQYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbjogJ1BhY2thZ2UgTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIGN0YTogY3RhVGV4dEZvcm0sXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogYFBhY2thZ2UvJHtjYXJkLmlkfWAsXG4gICAgICAgICAgICAgICAgICAgIGFkZHRsX2luZm86IGFkZGl0aW9uYWxJbmZvVGV4dFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4gdGhpcy50cmFja0xlYWRDbGlja0V2ZW50KGN0YVRleHRGb3JtLCB0b0Rlc3RpbmF0aW9uKX1cbiAgICAgICAgICAgICAgICAgIGRlYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgYnVkZ2V0PXtjYXJkLmRpc2NvdW50ZWRfcHJpY2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaSBwbDggcHI4IHdmdWxsIGN1c3RvbWl6ZWQtdmFyaWF0aW9uIFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGEtb2JqPXtKU09OLnN0cmluZ2lmeSh7IHRvX2xvYzogZm9ybU9uZVRvTG9jYXRpb24sIHRyaXBfZGF5czogY2FyZC5kYXlzLnRvU3RyaW5nKCkgfSl9PlxuICAgICAgICAgICAgICAgICAgICB7Y3RhVGV4dEZvcm19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtT25lQ1RBPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFja2FnZUNhcmREZWFsc0FuZEx1eHVyeS5wcm9wVHlwZXMgPSB7XG4gIGNhcmQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhY2tMZWFkRnVubmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjb21wYXJpbmdQYWNrYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGFkZFRvQ29tcGFyaW5nUGFja2FnZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlzTXVsdGlEZXN0aW5hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIG11bHRpRGVzdGluYXRpb25UZXh0czogUHJvcFR5cGVzLmFycmF5LFxuICBmb3JtVG9Mb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXRBY3RpdmVIb3RlbHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFBhY2thZ2VEYXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5QYWNrYWdlQ2FyZERlYWxzQW5kTHV4dXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhY2tMZWFkRnVubmVsQ2xpY2s6ICgpID0+IHtcbiAgfSxcbiAgaXNNdWx0aURlc3RpbmF0aW9uOiBmYWxzZSxcbiAgbXVsdGlEZXN0aW5hdGlvblRleHRzOiBbXSxcbiAgZm9ybVRvTG9jYXRpb246ICcnLFxuICB0YWc6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlQ2FyZERlYWxzQW5kTHV4dXJ5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcblxuY29uc3QgR1BhY2thZ2VJbWdEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnMjIwcHgnLFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn0pO1xuXG5jb25zdCBQYWNrYWdlSW1nVGl0bGVEZWFscyA9ICh7IGltYWdlVXJsLCBpbWFnZWtpdFVybCwgYWx0VGV4dCB9KSA9PiAoXG4gIDxHUGFja2FnZUltZ0RpdiBjbGFzc05hbWU9J3NiYzUnPlxuICAgIDxJbWcgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgIGlrU3JjPXtpbWFnZWtpdFVybH1cbiAgICAgICAgIGFsdD17YWx0VGV4dH1cbiAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgaXRlbVByb3A9XCJpbWFnZVwiXG4gICAgICAgICBpdGVtVHlwZT1cImh0dHBzOi8vc2NoZW1hLm9yZy9pbWFnZVwiIC8+XG4gIDwvR1BhY2thZ2VJbWdEaXY+XG4pO1xuXG5QYWNrYWdlSW1nVGl0bGVEZWFscy5wcm9wVHlwZXMgPSB7XG4gIGltYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdFRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNMYXJnZUltZzogUHJvcFR5cGVzLmJvb2xcbn07XG5cblBhY2thZ2VJbWdUaXRsZURlYWxzLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMYXJnZUltZzogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VJbWdUaXRsZURlYWxzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3BhcnNlcnMnO1xuXG5pbXBvcnQgeyBJbmNsdXNpb25Ob3RpZmljYXRpb24gfSBmcm9tICdjb25zdGFudHMvUGFja2FnZXMvSW5jbHVzaW9uTm90aWZpY2F0aW9uJztcblxuaW1wb3J0ICcuL1BhY2thZ2VJbmNFeGMuc2Nzcyc7XG5cbmNvbnN0IEdJbmNEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYuaW5jbC1leGNsLWJveCc6IHtcbiAgICBtaW5XaWR0aDogJ2F1dG8nLFxuICAgIG1heFdpZHRoOiAnbm9uZScsXG4gIH0sXG4gICcmIHAnOiB7XG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIH1cbn0pO1xuXG5jb25zdCBHSW5jbERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAuaW5jbC1leGNsLWNvbic6IHtcbiAgICBoZWlnaHQ6ICcyNHB4J1xuICB9LFxufSk7XG5cbmNvbnN0IFBhY2thZ2VJbmNFeGNEZWFscyA9ICh7IGluY2x1c2lvbnMsIGlkLCBub1Njcm9sbCB9KSA9PiB7XG4gIGNvbnN0IGluY2x1c2lvbkxpc3QgPSBpbmNsdXNpb25zLm1hcChcbiAgICAoaW5jbHVzaW9uLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IEljb25zW2NhcGl0YWxpemVGaXJzdExldHRlcihpbmNsdXNpb24ua2V5LnJlcGxhY2UoL1tcXHMtX10vZywgJycpKV0gfHwgSWNvbnMuRGVmYXVsdDtcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudENsYXNzID0gaW5jbHVzaW9uLmF2YWlsYWJsZSA/ICcnIDogJ25vdC1pbmNsdWRlZCBoaWRlJztcbiAgICAgIGNvbnN0IGRpc2FibGVkSWNvbkNsYXNzID0gaW5jbHVzaW9uLmF2YWlsYWJsZSA/ICcnIDogJ2dyZXlzY2FsZSc7XG4gICAgICBjb25zdCBpbmNsdXNpb25UZXh0SGlkZGVuID0gaW5jbHVzaW9uLnRleHQgPyAnJyA6ICdoaWRlJztcbiAgICAgIGNvbnN0IEluY2x1c2lvbk5vdGlmaWNhdGlvblByZXNlbnQgPSAoaW5jbHVzaW9uLmF2YWlsYWJsZSAmJiAoSW5jbHVzaW9uTm90aWZpY2F0aW9uLmluZGV4T2YoaW5jbHVzaW9uLmtleSkgPiAtMSkpID8gJ3JlbGF0aXZlJyA6ICcnO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8R0luY0RpdiBjbGFzc05hbWU9e2BpbmNsLWV4Y2wtYm94IG1yOCAke2luY2x1c2lvblRleHRIaWRkZW59ICR7ZGlzYWJsZWRFbGVtZW50Q2xhc3N9ICR7SW5jbHVzaW9uTm90aWZpY2F0aW9uUHJlc2VudH1gfSBrZXk9e2Ake2lkfV8ke2luY2x1c2lvbi5rZXl9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEwIHNiY3cgcmFkaXVzMjAgcGZjMyBwbDE1IHByMTUgcHQzIHBiMyBpbmNsdXNpb25EZWFscyBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgdGV4dC1jZW50ZXJcIj57aW5jbHVzaW9uLnRleHR9PC9wPlxuICAgICAgICA8L0dJbmNEaXY+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHSW5jbERpdlxuICAgICAgY2xhc3NOYW1lPXtgcm93IHJvdy0gaW5jbC1leGNsLWNvbiBwMTUgJHtub1Njcm9sbCA/ICdpbmMtbm8tc2Nyb2xsJyA6ICcnfSBgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gaW5jbC1leGNsLWNvbi1pbm5lciBpbmNsLWV4Y2wtY29uLWlubmVyLWRlYWxzIFwiPlxuICAgICAgICB7aW5jbHVzaW9uTGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvR0luY2xEaXY+XG4gICk7XG59O1xuXG5QYWNrYWdlSW5jRXhjRGVhbHMucHJvcFR5cGVzID0ge1xuICBpbmNsdXNpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub1Njcm9sbDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblBhY2thZ2VJbmNFeGNEZWFscy5kZWZhdWx0UHJvcHMgPSB7XG4gIG5vU2Nyb2xsOiBmYWxzZSxcbiAgaW5jbHVzaW9uczogW1xuICAgIHtcbiAgICAgIGtleTogJ2hvdGVsJyxcbiAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIHRleHQ6ICdVcHRvIDMgU3RhcnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdmbGlnaHRzJyxcbiAgICAgIGF2YWlsYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0OiAnRmxpZ2h0cydcbiAgICB9XG4gIF0sXG4gIGlkOiAnZGVmYXVsdF8xJ1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBQYWNrYWdlSW5jRXhjRGVhbHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5pbXBvcnQgJy4vVG9wRGVzdGluYXRpb24uc2Nzcyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQsIFBBQ0tBR0VfTElTVF9DTElDSywgREZFQVVMVF9WQUxVRSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyBERUZBVUxUX0lNQUdFX1BBVEggfSBmcm9tICdhcHAvY29uc3RhbnRzJztcblxuXG5jbGFzcyBUb3BEZXN0aW5hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFja1NlZ21lbnRFdmVudChkZXN0aW5hdGlvbikge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogUEFDS0FHRV9MSVNUX0NMSUNLLFxuICAgICAgc2VjdGlvbjogJ1RvcCBCYXInLFxuICAgICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbjogJHtkZXN0aW5hdGlvbi5uYW1lfWAsXG4gICAgICBjdGE6IGRlc3RpbmF0aW9uLm5hbWUsXG4gICAgICBvYmplY3Q6IGBEZXN0aW5hdGlvbi8ke2Rlc3RpbmF0aW9uLmlkfWAsXG4gICAgICBsYWJlbDogYFBhY2thZ2UgVHlwZTogRGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24ubmFtZX1gLFxuICAgICAgZGVzdGluYXRpb25fbGlzdDogZGVzdGluYXRpb24ubmFtZSxcbiAgICAgIGRlc3RpbmF0aW9uX2lkOiBkZXN0aW5hdGlvbi5pZCxcbiAgICAgIHZhbHVlOiBERkVBVUxUX1ZBTFVFXG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGdldFRvcERlc3RpbmF0aW9ucyhkZXN0aW5hdGlvbnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZGVzdGluYXRpb25zLm1hcChkZXN0aW5hdGlvbiA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWRlc3RpbmF0aW9uLWRhdGEgdGV4dC1jZW50ZXJcIiBrZXk9e2Rlc3RpbmF0aW9uLmlkfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gVG9wRGVzdGluYXRpb24udHJhY2tTZWdtZW50RXZlbnQoZGVzdGluYXRpb24pfVxuICAgICAgICAgICAgdG89e2Rlc3RpbmF0aW9uLnBhY2thZ2VzX3BhdGh9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmFkaXVzMTAwIHJlbGF0aXZlIG92ZXJmbG93aFwiPlxuICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgd2lkdGg9ezU2fSBoZWlnaHQ9ezU2fVxuICAgICAgICAgICAgICAgIGlrU3JjPXtkZXN0aW5hdGlvbi5pbWFnZWtpdF91cmx9XG4gICAgICAgICAgICAgICAgc3JjPXtkZXN0aW5hdGlvbi5waWN0dXJlfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRTcmM9e0RFRkFVTFRfSU1BR0VfUEFUSH1cbiAgICAgICAgICAgICAgICBhbHQ9e2Rlc3RpbmF0aW9uLmFsdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBwdDggZWxsaXBzaXMgcGZjM1wiPntkZXN0aW5hdGlvbi5uYW1lfTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSlcbiAgICApO1xuICB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbnMsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHNiY3cgcHQxNSBwYjE1IHRvcGRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3OSBwbDE1XCI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwxNSBwdDE1IHByMTUgdG9wLWRlc3RpbmF0aW9uLWNvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWRlc3RpbmF0aW9uLWlubmVyXCI+XG4gICAgICAgICAgICB7VG9wRGVzdGluYXRpb24uZ2V0VG9wRGVzdGluYXRpb25zKGRlc3RpbmF0aW9ucyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ub3BEZXN0aW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGRlc3RpbmF0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRvcERlc3RpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVzdGluYXRpb25zOiBbXSxcbiAgY2F0ZWdvcnk6ICd0b3VyJyxcbiAgdGl0bGU6ICdUb3AgRGVzdGluYXRpb25zJ1xufTtcbmV4cG9ydCBkZWZhdWx0IFRvcERlc3RpbmF0aW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidG9wLWRlc3RpbmF0aW9uLWNvblwiOiBcIl93VUNkbFwiLFxuXHRcInRvcC1kZXN0aW5hdGlvbi1pbm5lclwiOiBcIl8zWFlsa1wiLFxuXHRcInRvcC1kZXN0aW5hdGlvbi1kYXRhXCI6IFwiX09GNGd1XCIsXG5cdFwidG9wZFwiOiBcIl9HVE40VVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuaW1wb3J0ICcuL1RvdGFsUGFja2FnZXNDb3VudC5zY3NzJztcbmltcG9ydCB7IHBhcnNlUHJpY2UgfSBmcm9tICcuLi8uLi91dGlscy9wYXJzZXJzJztcbmltcG9ydCB7XG4gICAgVW5pcXVlcmVxdWlyZW1lbnRzXG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgVG90YWxQYWNrYWdlc0NvdW50ID0gKHsgdG90YWxQYWNrYWdlcywgc3RhcnRpbmdQcmljZSB9KSA9PiB7XG4gIGNvbnN0IGN0YVRleHQgPSAnQlVJTEQgWU9VUiBPV04gUEFDS0FHRSc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtOFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInJvdyByb3ctIGZ3M1wiPjxzcGFuIGNsYXNzTmFtZT17KHRvdGFsUGFja2FnZXMgPiAwKSA/ICdmMTAgcGZjNCcgOiAnaGlkZSd9Pnt0b3RhbFBhY2thZ2VzfSBwYWNrYWdlczwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsodG90YWxQYWNrYWdlcyA+IDApID8gJ2lubGluZSBmMTAgcGZjNCBtbDMnIDogJ2hpZGUnfT5cbiAgICAgIHwgU3RhcnRpbmcgZnJvbSB7YCR7cGFyc2VQcmljZSh7IHByaWNlOiBzdGFydGluZ1ByaWNlIH0pfWB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsodG90YWxQYWNrYWdlcyA8PSAwKSA/ICdmMTYgYmxvY2sgdGV4dC1jZW50ZXIgcHQ0OCBwYjI0IGZ3NyBwZmM0JyA6ICdoaWRlJ30+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9va2luZy1pY29uXCI+PFVuaXF1ZXJlcXVpcmVtZW50cyAvPjwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTggcGZjM1wiPllvdXIgUmVxdWlyZW1lbnRzIGFyZSB1bmlxdWUhIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCBmMTQgcGZjMSBtYjhcIj5PdXIgZXhwZXJ0cyB3b3VsZCBsb3ZlIHRvIGNyZWF0ZSBhIHBhY2thZ2UganVzdCBmb3IgeW91LjwvcD5cbiAgICAgICAgICA8Rm9ybU9uZUNUQT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmlcIj48ZGl2IGNsYXNzTmFtZT1cIndhdmVcIiAvPntjdGFUZXh0fTwvZGl2PlxuICAgICAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRvdGFsUGFja2FnZXNDb3VudC5wcm9wVHlwZXMgPSB7XG4gIHRvdGFsUGFja2FnZXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3RhcnRpbmdQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG90YWxQYWNrYWdlc0NvdW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9va2luZy1pY29uXCI6IFwiXzF4a1BiXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9zdG9yeWJveC5zY3NzJztcbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcblxuY29uc3QgU3RvcnlCb3ggPSAoeyB0aXRsZSwgaW1hZ2VQYXRoLCBpbWFnZWtpdFVybCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktYm94LW1haW4gbXQ4IHA0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBiczRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktYm94LW1haW4taW1nXCI+XG4gICAgICAgIDxJbWcgc3JjPXtpbWFnZVBhdGh9IGlrU3JjPXtpbWFnZWtpdFVybH0gYWx0PXt0aXRsZX0gaGVpZ2h0PXsxNDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwOCBzYmN3XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYjggZjE0cCBmdzRcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5TdG9yeUJveC5wcm9wVHlwZXMgPSB7XG4gIHBvc3REYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZWtpdFVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcnlCb3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTdG9yeUJveCBmcm9tICcuL1N0b3J5Qm94JztcblxuaW1wb3J0ICcuL3RyYXZlbGVyc3Rvcnkuc2Nzcyc7XG5pbXBvcnQgeyBsb2FkQmxvZ3MgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9ibG9ncyc7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ2NvbXBvbmVudHMvU3dpcGVyL1N3aXBlcic7XG5cbkBjb25uZWN0KHN0YXRlID0+ICh7IGJsb2dzOiBzdGF0ZS5ibG9ncy5ibG9nUG9zdHMsIH0pLCB7IGxvYWRCbG9ncyB9KVxuY2xhc3MgVHJhdmVsZXJTdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYmxvZ3M6IFByb3BUeXBlcy5hcnJheSxcbiAgICBsb2FkQmxvZ3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhZ3M6IFByb3BUeXBlcy5hcnJheSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJsb2dzOiBbXSxcbiAgICB0YWdzOiBbJ3RyYXZlbG9ndWUnXSxcbiAgICBsb2FkQmxvZ3M6ICgpID0+IHt9XG4gIH07XG5cbiAgc3RhdGljIGdldFRhZ3NUb0luY2x1ZGUodGFncykge1xuICAgIGlmICh0YWdzICYmIHRhZ3MuaW5kZXhPZigndHRfc2Vhc29uYWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gdGFncztcbiAgICB9IGVsc2UgaWYgKHRhZ3MpIHtcbiAgICAgIHJldHVybiBbWyd0cmF2ZWxvZ3VlJ10sIFt0YWdzXV07XG4gICAgfVxuICAgIHJldHVybiBbJ3RyYXZlbG9ndWUnXTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubG9hZEJsb2dzKHtcbiAgICAgIHRhZ3M6IHtcbiAgICAgICAgdGFnc190b19pbmNsdWRlOiBUcmF2ZWxlclN0b3J5LmdldFRhZ3NUb0luY2x1ZGUodGhpcy5wcm9wcy50YWdzKSxcbiAgICAgICAgcG9zdENvdW50OiAxMCxcbiAgICAgICAgc29ydF9vcmRlcjogJ0Rlc2MnLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuYmxvZ3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yaWVzID0gdGhpcy5wcm9wcy5ibG9ncy5tYXAoYmxvZyA9PiAoXG4gICAgICA8YSBjbGFzc05hbWU9XCJwZmMzXCIgaHJlZj17YmxvZy51cmx9IGtleT17YmxvZy5pZH0+XG4gICAgICAgIDxTdG9yeUJveFxuICAgICAgICAgIGltYWdlUGF0aD17YmxvZy50aHVtYm5haWxJbWFnZVBhdGhzLnNyYyB8fCBibG9nLmltYWdlUGF0aHMuc3JjfVxuICAgICAgICAgIGltYWdla2l0VXJsPXtibG9nLnRodW1ibmFpbEltYWdlUGF0aHMuaW1hZ2VraXRVcmwgfHwgYmxvZy5pbWFnZVBhdGhzLmltYWdla2l0VXJsfVxuICAgICAgICAgIHRpdGxlPXtibG9nLnRpdGxlfVxuICAgICAgICAvPlxuICAgICAgPC9hPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGw4IHByOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHNiY3cgcDggcmV2aWV3LWNvbi1tYWluXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBmYzEgZjE2IHBiOFwiPk91ciB0cmF2ZWxlciBzdG9yaWVzPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmMTIgcGZjNFwiPlxuICAgICAgICAgICAgVGhleSB0cmF2ZWxlZCwgVGhleSBleHBlcmllbmNlZCwgVGhleSBzaGFyZWRcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezh9XG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICAgICAgc3NyQW5pbWF0aW9uPXt7IHdpZHRoOiAyNjgsIGhlaWdodDogMjIwIH19XG4gICAgICAgICAgICAgIHJlYnVpbGRPblVwZGF0ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3Rvcmllc31cbiAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXJTdG9yeTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0b3J5LWJveC1tYWluLWltZ1wiOiBcIl8xT3J4elwiXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNsaWRlXCI6IFwiX09ENkJFXCJcbn07IiwiY29uc3QgREVGQVVMVF9JTUFHRV9QQVRIID0gJ2h0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Fzc2V0cy9jaXR5X3RvdXJfZ3VpZGVfbW9iaWxlL2RlZmF1bHRfZGVzdGluYXRpb24tOGEzMDMyYWY0N2JiNGJiYTg1YzgxNDg4ODE5NTNkMzgucG5nJztcblxuZXhwb3J0IHtcbiAgREVGQVVMVF9JTUFHRV9QQVRIXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTY3JvbGxQZXJjZW50YWdlIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBlcmNlbnRhZ2UnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdxdWVyeS1zdHJpbmcnO1xuXG5pbXBvcnQgSGVhZGVyQ29tbW9uIGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlckNvbW1vbic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlclRpdGxlIH0gZnJvbSAnbW9kdWxlcy9oZWFkZXIvSGVhZGVyVGl0bGUnO1xuaW1wb3J0IFRvdGFsUGFja2FnZXNDb3VudCBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvVG90YWxQYWNrYWdlc0NvdW50JztcbmltcG9ydCBUb3BEZXN0aW5hdGlvbiBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvVG9wRGVzdGluYXRpb24nO1xuaW1wb3J0IFBhY2thZ2VDYXJkRXhwZXJpbWVudCBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZUNhcmRFeHBlcmltZW50JztcbmltcG9ydCBQYWNrYWdlQ2FyZERlYWxzQW5kTHV4dXJ5IGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlQ2FyZERlYWxzQW5kTHV4dXJ5JztcbmltcG9ydCBMb2FkTW9yZVBhY2thZ2VzIGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9Mb2FkTW9yZVBhY2thZ2VzJztcbmltcG9ydCBUcmF2ZWxlclJldmlldyBmcm9tICdtb2R1bGVzL3RyYXZlbGVyUmV2aWV3JztcbmltcG9ydCBSaWNoVGV4dCBmcm9tICdtb2R1bGVzL3JpY2hUZXh0JztcbmltcG9ydCBBYm91dExpc3RpbmdEZXN0aW5hdGlvbiBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvQWJvdXRMaXN0aW5nRGVzdGluYXRpb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEZpeGVkTWVudSBmcm9tICdjb21wb25lbnRzL0ZpeGVkTWVudS9GaXhlZE1lbnUnO1xuaW1wb3J0IFRyYXZlbGVyU3RvcnkgZnJvbSAnY29tcG9uZW50cy9TdG9yeS9UcmF2ZWxlclN0b3J5JztcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJ2NvbXBvbmVudHMvQnJlYWRjcnVtYi9CcmVhZGNydW1iTGlzdGluZyc7XG5pbXBvcnQgU29ydEFuZEZpbHRlciBmcm9tICcuL0ZpbHRlclZpZXcuanMnO1xuaW1wb3J0IExvYWRlckZpcnN0IGZyb20gJ2NvbXBvbmVudHMvQ29tcGFyZVBhY2thZ2VzL0xvYWRlckZpcnN0JztcbmltcG9ydCBMb2FkZXJTZWNvbmQgZnJvbSAnY29tcG9uZW50cy9Db21wYXJlUGFja2FnZXMvTG9hZGVyU2Vjb25kJztcbmltcG9ydCBJbmxpbmVGaWx0ZXJzIGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9JbmxpbmVGaWx0ZXJzJztcbmltcG9ydCBJbmxpbmVGaWx0ZXIgZnJvbSAnY29tcG9uZW50cy9MaXN0aW5nL0lubGluZUZpbHRlcnMvSW5saW5lRmlsdGVyJztcbmltcG9ydCBGYXEgZnJvbSAnY29tcG9uZW50cy9GYXEvRmFxJztcbmltcG9ydCBTZW9Gb290ZXIgZnJvbSAnY29tcG9uZW50cy9Db21tb24vU2VvRm9vdGVyJztcbmltcG9ydCB7IGdldERlc2NyaXB0aW9uLCBnZXRUaXRsZSB9IGZyb20gJ2hlbHBlcnMvc2VvSGVscGVycyc7XG5pbXBvcnQgV2h5Qm9va1dpdGhPdXJBZ2VudHMgZnJvbSAnbW9kdWxlcy93aHlCb29rV2l0aE91ckFnZW50cyc7XG5cbmltcG9ydCB7IGdldENvb2tpZSwgc2V0Q29va2llIH0gZnJvbSAnaGVscGVycy9Gb3JtRGF0YUZvcm1hdHRlcic7XG5pbXBvcnQge1xuICBodHRwQ2xpZW50LCBjYXBpdGFsaXplQW5kUmVwbGFjZURhc2gsIGNhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyLFxuICBzZXRWaXNpdGVkRGVzdGluYXRpb25zQ29va2llLCByZXNjdWVcbn0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAsIHNob3dQb3BVcCwgaW5pdGlhbGl6ZUV4aXRJbnRlbnQgfSBmcm9tICdoZWxwZXJzL2V4aXRJbnRlbnQnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTGlzdGluZ0FwaVVybCxcbiAgY3JlYXRlTGlzdGluZ1VybCxcbiAgZGVDYXBpdGFsaXplRmlyc3RMZXR0ZXIsXG4gIHBhcnNlRGVzdGluYXRpb25zVG9TaG93LFxuICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXG4gIGluZmxhdGVQcmljZSxcbiAgY29tcGFyZUFycixcbiAgRkxJR0hUX0lOQ0xVU0lPTlxufSBmcm9tICd1dGlscy9wYXJzZXJzJztcbmltcG9ydCB7XG4gIERFRkFVTFRfVkFMVUUsIEZJTFRFUl9DTElDS0VELCBpbml0aWFsaXplU2Nyb2xsZXIsIG9uU2Nyb2xsLCBQQUNLQUdFX0xJU1RfVklFV0VELCB0cmFja1NlZ21lbnQsIFBMUF9QQUdFX1ZJRVdcbn0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IGlvc0RlZXBMaW5rLCBnZXRBcHBTY2hlbWVVcmwgfSBmcm9tICdoZWxwZXJzL3VybEhlbHBlcnMnO1xuaW1wb3J0IFBsYWNlc1RvVmlzaXQgZnJvbSAnbW9kdWxlcy9wbGFjZXNUb1Zpc2l0L2luZGV4JztcbmltcG9ydCBUaGluZ3NUb0RvIGZyb20gJ21vZHVsZXMvdGhpbmdzVG9Eby9pbmRleCc7XG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgbWFrZUNhcGl0YWxpemVkU2VudGVuY2UgfSBmcm9tICdoZWxwZXJzL3BhcnNlcnMnO1xuaW1wb3J0IElubGluZUZpbHRlckV4cGVyaWVuY2UgZnJvbSAnY29tcG9uZW50cy9MaXN0aW5nL0lubGluZUZpbHRlcnMvSW5saW5lRmlsdGVyJztcbmltcG9ydCB7IHJlbmRlck1ldGFUYWdzIH0gZnJvbSAnaGVscGVycy9zZW9IZWxwZXJzJztcbmltcG9ydCBJbnRlcmxpbmtpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvaW50ZXJsaW5raW5nJztcbmltcG9ydCBDaXR5RmlsdGVyIGZyb20gJ2FwcC9jb21wb25lbnRzL0NvbW1vbi9DaXR5RmlsdGVyL0NpdHlGaWx0ZXIuanMnO1xuaW1wb3J0IHBhcnNlRmlsdGVycyBmcm9tIFwiLi9wYXJzZUZpbHRlcnNcIjtcblxuXG5jb25zdCBpc1ZhbGlkUHJpY2UgPSAodG90YWxQcmljZSwgZGlzY291bnQpID0+IHtcbiAgY29uc3QgcGFyc2VkUHJpY2UgPSBwYXJzZUludCh0b3RhbFByaWNlLCAxMCk7XG4gIGNvbnN0IHBhcnNlZERpc2NvdW50ID0gcGFyc2VJbnQoZGlzY291bnQsIDEwKTtcbiAgaWYgKCFwYXJzZWRQcmljZSB8fCAhcGFyc2VkRGlzY291bnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZFByaWNlID49IDAgfHwgKHBhcnNlZFByaWNlIC0gcGFyc2VkRGlzY291bnQpID49IDA7XG59O1xuXG5jbGFzcyBMaXN0aW5nQXN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBhY2thZ2VzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdG90YWxQYWNrYWdlczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBmaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRGaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc29ydEJ5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcGFja2FnZXNUb0Rpc3BsYXk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50UGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcGF0aFBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRlc3RpbW9uaWFsczogUHJvcFR5cGVzLmFycmF5LFxuICAgIG1ldGFUYWdzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYnJlYWRjcnVtYnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjb21wYXJpbmdQYWNrYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgc3VibWl0dGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzVG91ckZpbHRlclNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc011bHRpRGVzdGluYXRpb246IFByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQ2l0eTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcm91dGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBpc0Rlc3RpbmF0aW9uVHlwZUFsbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBzdGFydGluZ1ByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbXVsdGlEZXN0aW5hdGlvblRleHRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbG9hZE1vcmVQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZEZpbHRlckNvdW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhZGRUb0NvbXBhcmluZ1BhY2thZ2VzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwdXNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHN1Ym1pdHRlZEZvckNvbXBhcmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVtb3ZlQ29tcGFyZURhdGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0VG91ckNhdGVnb3J5RmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldERlc3RpbmF0aW9uVHlwZUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmb290ZXJTZWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZmFxczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgc2ltaWxhckxpdmVDaXRpZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBiYW5uZXJIZWFkbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbGxQYWNrYWdlTGluazogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWx0ZXJDYXRlZ29yeTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJvdXRlUGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvcm1Ub0xvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGR5bmFtaWNQbHBQYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXJTZWxlY3RlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyQ291bnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNyZWF0ZUZpbHRlclBhcmFtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldERlZmF1bHRTZWxlY3RlZEZpbHRlcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVzZXREZWZhdWx0RmlsdGVyczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGVzdGluYXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlb0Zvb3RlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBiYW5uZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcmljaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcmV2aWV3czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGdldFBhY2thZ2VEYXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGZvb3RlckxpbmtzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvYnBMaW5rczogUHJvcFR5cGVzLk9iamVjdCxcbiAgICBzY2hlbWFBdHRyaWJ1dGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcGFja2FnZVN0YXJ0UHJpY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhwZXJpbWVudElkOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYWNrYWdlczogW10sXG4gICAgdG90YWxQYWNrYWdlczogMCxcbiAgICB0ZXN0aW1vbmlhbHM6IFtdLFxuICAgIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiAoKSA9PiB7XG4gICAgfSxcbiAgICBtZXRhVGFnczogW10sXG4gICAgYnJlYWRjcnVtYnM6IFtdLFxuICAgIGlzVG91ckZpbHRlclNlbGVjdGVkOiBmYWxzZSxcbiAgICBpc0Rlc3RpbmF0aW9uVHlwZUFsbDogZmFsc2UsXG4gICAgcm91dGU6IHt9LFxuICAgIGlzTXVsdGlEZXN0aW5hdGlvbjogZmFsc2UsXG4gICAgbXVsdGlEZXN0aW5hdGlvblRleHRzOiBbXSxcbiAgICBhbGxQYWNrYWdlTGluazoge30sXG4gICAgZmlsdGVyQ2F0ZWdvcnk6IFtdLFxuICAgIHJvdXRlUGFyYW1zOiB7fSxcbiAgICBmb3JtVG9Mb2NhdGlvbjogJycsXG4gICAgZHluYW1pY1BscFBhZ2U6IGZhbHNlLFxuICAgIGRlc3RpbmF0aW9uTmFtZTogJycsXG4gICAgcmljaFRleHQ6ICdUb3VyIFBhY2thZ2VzJyxcbiAgICBiYW5uZXI6IHt9LFxuICAgIHBhY2thZ2VTdGFydFByaWNlOiBudWxsLFxuICAgIGV4cGVyaW1lbnRJZDogJydcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSG90ZWxzOiB7fVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0QnVkZ2V0KHF1ZXJ5U3RyKSB7XG4gICAgY29uc3QgcXVlcnkgPSBwYXJzZShxdWVyeVN0ciB8fCAnJyk7XG4gICAgY29uc3QgeyBmaWx0ZXJzIH0gPSBwYXJzZUZpbHRlcnMoeyBxdWVyeSB9KTtcbiAgICBjb25zdCBwcmljZWZpbHRlciA9IGZpbHRlcnMgJiYgZmlsdGVyc1sncHJpY2VfcmFuZ2VzJ107XG4gICAgY29uc3QgcHJpY2VBcnIgPSBwcmljZWZpbHRlciAmJiBwcmljZWZpbHRlci5sZW5ndGggPyBwcmljZWZpbHRlci5qb2luKCctJykucmVwbGFjZSgvXy9nLCAnJykuc3BsaXQoJy0nKSA6IFtdO1xuICAgIGNvbnN0IHNvcnRlZFByaWNlQXJyID0gcHJpY2VBcnIubWFwKE51bWJlcikuc29ydChjb21wYXJlQXJyKTtcbiAgICByZXR1cm4gc29ydGVkUHJpY2VBcnIubGVuZ3RoID9cbiAgICB7XG4gICAgICBtaW5QcmljZTogc29ydGVkUHJpY2VBcnJbMF0sXG4gICAgICBtYXhQcmljZTogc29ydGVkUHJpY2VBcnJbc29ydGVkUHJpY2VBcnIubGVuZ3RoIC0gMV1cbiAgICB9IDoge307XG4gIH1cblxuICBzdGF0aWMgZ2V0Q2FyZEFmdGVyUHJpY2UoY2FyZCwgYnVkZ2V0KSB7XG4gICAgY29uc3QgaW5mbGF0ZUFtdCA9IDE1O1xuICAgIGxldCBoaWRlQ2FyZCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgcHJpY2VfdG90YWwsIGRpc2NvdW50ZWRfcHJpY2UsIGZhbWlseV9wYWNrYWdlcyB9ID0gY2FyZDtcbiAgICBjb25zdCBwcmljZVRvdGFsID0gaW5mbGF0ZVByaWNlKHByaWNlX3RvdGFsLCBpbmZsYXRlQW10KTtcbiAgICBjb25zdCBkaXNjb3VudGVkUHJpY2UgPSBpbmZsYXRlUHJpY2UoZGlzY291bnRlZF9wcmljZSwgaW5mbGF0ZUFtdCk7XG4gICAgY29uc3QgZmFtaWx5X3BhY2thZ2VzX21hcCA9IHsgLi4uZmFtaWx5X3BhY2thZ2VzIH07XG4gICAgT2JqZWN0LmtleXMoZmFtaWx5X3BhY2thZ2VzX21hcCkubWFwKGhvdGVsSWQgPT4ge1xuICAgICAgY29uc3QgaG90ZWxQcmljZSA9IFsuLi5mYW1pbHlfcGFja2FnZXNfbWFwW2hvdGVsSWRdXTtcbiAgICAgIGhvdGVsUHJpY2VbMV0gPSBpbmZsYXRlUHJpY2UoaG90ZWxQcmljZVsxXSk7XG4gICAgICBob3RlbFByaWNlWzJdID0gaW5mbGF0ZVByaWNlKGhvdGVsUHJpY2VbMl0pO1xuICAgICAgZmFtaWx5X3BhY2thZ2VzX21hcFtob3RlbElkXSA9IGhvdGVsUHJpY2U7XG4gICAgfSk7XG4gICAgY29uc3QgY2FyZFByaWNlID0gZmFtaWx5X3BhY2thZ2VzX21hcFtjYXJkLmlkXSAmJiBmYW1pbHlfcGFja2FnZXNfbWFwW2NhcmQuaWRdLmxlbmd0aCA/IGZhbWlseV9wYWNrYWdlc19tYXBbY2FyZC5pZF1bMV0gOiAnJztcbiAgICBpZiAoYnVkZ2V0ICYmIE9iamVjdC5rZXlzKGJ1ZGdldCkubGVuZ3RoICYmXG4gICAgICBjYXJkUHJpY2UgJiYgIShmYW1pbHlfcGFja2FnZXNfbWFwW2NhcmQuaWRdWzFdID4gYnVkZ2V0Lm1pblByaWNlICYmIGZhbWlseV9wYWNrYWdlc19tYXBbY2FyZC5pZF1bMV0gPCBidWRnZXQubWF4UHJpY2UpKSB7XG4gICAgICBoaWRlQ2FyZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNhcmQsXG4gICAgICBwcmljZV90b3RhbDogcHJpY2VUb3RhbCxcbiAgICAgIGRpc2NvdW50ZWRfcHJpY2U6IGRpc2NvdW50ZWRQcmljZSxcbiAgICAgIGZhbWlseV9wYWNrYWdlc19tYXA6IGZhbWlseV9wYWNrYWdlc19tYXAsXG4gICAgICBoaWRlQ2FyZFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RXhwZXJpbWVudERhdGEoZSwgZXhwZXJpbWVudElkLCBidWRnZXQpIHtcbiAgICBzd2l0Y2ggKGV4cGVyaW1lbnRJZCkge1xuICAgICAgY2FzZSAncHIxJzoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmUsXG4gICAgICAgICAgaXNFeHBlcmltZW50OiB7XG4gICAgICAgICAgICBoaWRlRGlzY291bnQ6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY2FzZSAncHIyJzoge1xuICAgICAgICBjb25zdCBjYXJkRGF0YSA9IExpc3RpbmdBc3luYy5nZXRDYXJkQWZ0ZXJQcmljZShlLCBidWRnZXQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNhcmREYXRhLFxuICAgICAgICAgIGlzRXhwZXJpbWVudDoge1xuICAgICAgICAgICAgaGlkZURpc2NvdW50OiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZVByaWNlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY2FzZSAnZGVmJzoge1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0UGFja2FnZUxpc3QocGFja2FnZXMsIHRyYWNrTGlzdGluZ0xlYWRGdW5uZWwsIGNvbXBhcmluZ1BhY2thZ2VzLCBhZGRUb0NvbXBhcmluZ1BhY2thZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNvbXBhcmluZ1BhY2thZ2VzLCBpc011bHRpRGVzdGluYXRpb24sIG11bHRpRGVzdGluYXRpb25UZXh0cywgZm9ybVRvTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVIb3RlbHMsIGdldFBhY2thZ2VEYXRhLCBmb2JwTGlua3MsIGV4cGVyaW1lbnRJZCwgYnVkZ2V0KSB7XG4gICAgY29uc3QgZ2V0Q2FyZFByb3BzID0gKGUsIGluZGV4KSA9PiAoe1xuICAgICAgY2FyZDogZSxcbiAgICAgIGtleTogZS5pZCxcbiAgICAgIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiB0cmFja0xpc3RpbmdMZWFkRnVubmVsLFxuICAgICAgY29tcGFyaW5nUGFja2FnZXMsXG4gICAgICBhZGRUb0NvbXBhcmluZ1BhY2thZ2VzLFxuICAgICAgcmVtb3ZlRnJvbUNvbXBhcmluZ1BhY2thZ2VzLFxuICAgICAgaW5kZXgsXG4gICAgICBpc011bHRpRGVzdGluYXRpb24sXG4gICAgICBtdWx0aURlc3RpbmF0aW9uVGV4dHMsXG4gICAgICBmb3JtVG9Mb2NhdGlvbixcbiAgICAgIHNldEFjdGl2ZUhvdGVsc1xuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0UGFja2FnZUxpc3QgPSAoZSwgdGFnLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IExpc3RpbmdBc3luYy5nZXRFeHBlcmltZW50RGF0YShlLCBleHBlcmltZW50SWQsIGJ1ZGdldCk7XG4gICAgICBpZiAoY2FyZC5oaWRlQ2FyZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGFnID09PSAnZGVhbHMnIHx8IHRhZyA9PT0gJ2x1eHVyeScpIHtcbiAgICAgICAgcmV0dXJuIDxQYWNrYWdlQ2FyZERlYWxzQW5kTHV4dXJ5IGtleT17aW5kZXh9IHsuLi5nZXRDYXJkUHJvcHMoY2FyZCwgaW5kZXgsIGV4cGVyaW1lbnRJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9e3RhZ30gZ2V0UGFja2FnZURhdGE9e2dldFBhY2thZ2VEYXRhfSAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8UGFja2FnZUNhcmRFeHBlcmltZW50IGtleT17aW5kZXh9IHsuLi5nZXRDYXJkUHJvcHMoY2FyZCwgaW5kZXgsIGV4cGVyaW1lbnRJZCl9IC8+O1xuICAgIH07XG5cbiAgICByZXR1cm4gcGFja2FnZXNcbiAgICAgIC5maWx0ZXIocGtnID0+IChpc1ZhbGlkUHJpY2UocGtnLnByaWNlX3RvdGFsLCBwa2cuZGlzY291bnRlZF9wcmljZSkpKVxuICAgICAgLm1hcCgoZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7aW5kZXggPT09IDQgJiYgZm9icExpbmtzICYmIE9iamVjdC5rZXlzKGZvYnBMaW5rcykubGVuZ3RoID8gPENpdHlGaWx0ZXIgZm9icExpbmtzPXtmb2JwTGlua3N9IC8+IDogbnVsbH1cbiAgICAgICAgICB7Z2V0UGFja2FnZUxpc3QoZSwgZS5sYWJlbHNbMF0udG9Mb3dlckNhc2UoKSwgaW5kZXgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpO1xuICB9XG5cbiAgc3RhdGljIHRvcERlc3RpbmF0aW9uc1RpdGxlID0gKGlzQ2l0eSwgZGVzdGluYXRpb25OYW1lLCBwYXRoUGFyYW1zKSA9PiB7XG4gICAgaWYgKHBhdGhQYXJhbXMuZGVzdGluYXRpb24pIHtcbiAgICAgIGlmIChpc0NpdHkpIHtcbiAgICAgICAgcmV0dXJuIGBQYWNrYWdlcyBmb3Igb3RoZXIgY2l0aWVzICR7ZGVzdGluYXRpb25OYW1lXG4gICAgICAgICAgPyBgaW4gJHtjYXBpdGFsaXplRXZlcnlGaXJzdExldHRlcihkZXN0aW5hdGlvbk5hbWUpfWAgOiAnJ31gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke2NhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKHBhdGhQYXJhbXMuZGVzdGluYXRpb24pfSBQYWNrYWdlcyBCeSBDaXRpZXNgO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYFBhY2thZ2VzIGZvciBUb3AgJHtwYXRoUGFyYW1zLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09ICd0b3VyJ1xuICAgICAgICA/ICdIb2xpZGF5J1xuICAgICAgICA6IHBhdGhQYXJhbXMuY2F0ZWdvcnl9IERlc3RpbmF0aW9uc2A7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbmRlclBhY2thZ2VzV2l0aEV4aXRJbnRlbnQoXG4gICAgcGFja2FnZXMsIHRyYWNrTGlzdGluZ0xlYWRGdW5uZWwsIGNvbXBhcmluZ1BhY2thZ2VzLCBhZGRUb0NvbXBhcmluZ1BhY2thZ2VzLFxuICAgIHJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlcywgaXNNdWx0aURlc3RpbmF0aW9uLCBtdWx0aURlc3RpbmF0aW9uVGV4dHMsIGZvcm1Ub0xvY2F0aW9uID0gJycsXG4gICAgc2hvd1RvcERlc3RpbmF0aW9ucywgc2ltaWxhckxpdmVDaXRpZXMsIHBhdGhQYXJhbXMsIHNldEFjdGl2ZUhvdGVscywgZXhwZXJpZW5jZUZpbHRlcnMsXG4gICAgZ2V0UGFja2FnZURhdGEsIGlzQ2l0eSwgZGVzdGluYXRpb25OYW1lLCBmb2JwTGlua3MsIGV4cGVyaW1lbnRJZCwgYnVkZ2V0LCBmbGlnaHRGaWx0ZXJzXG4gICkge1xuXG4gICAgY29uc3QgcGFja2FnZUNhcmRzID0gTGlzdGluZ0FzeW5jLmdldFBhY2thZ2VMaXN0KHBhY2thZ2VzLCB0cmFja0xpc3RpbmdMZWFkRnVubmVsLCBjb21wYXJpbmdQYWNrYWdlcyxcbiAgICAgIGFkZFRvQ29tcGFyaW5nUGFja2FnZXMsIHJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlcywgaXNNdWx0aURlc3RpbmF0aW9uLCBtdWx0aURlc3RpbmF0aW9uVGV4dHMsIGZvcm1Ub0xvY2F0aW9uLFxuICAgICAgc2V0QWN0aXZlSG90ZWxzLCBnZXRQYWNrYWdlRGF0YSwgZm9icExpbmtzLCBleHBlcmltZW50SWQsIGJ1ZGdldCk7XG5cbiAgICBjb25zdCBleGl0RGl2ID0gPGRpdiBpZD1cInJlYWN0RXhpdEludGVudEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJta3QtbW9iLWV4aXQtaW50ZW50IG1iOCByb3cgcm93LSBtYjggcmVsYXRpdmVcIiBvbkNsaWNrPXtzaG93UG9wVXB9IC8+O1xuXG4gICAgY29uc3QgdG9wRGVzdGluYXRpb24gPSBzaG93VG9wRGVzdGluYXRpb25zID8gPFRvcERlc3RpbmF0aW9uIGNhdGVnb3J5PXtwYXRoUGFyYW1zLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17TGlzdGluZ0FzeW5jLnRvcERlc3RpbmF0aW9uc1RpdGxlKGlzQ2l0eSwgZGVzdGluYXRpb25OYW1lLCBwYXRoUGFyYW1zKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb249e3BhdGhQYXJhbXMuZGVzdGluYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9ucz17c2ltaWxhckxpdmVDaXRpZXN9IC8+IDogbnVsbDtcblxuICAgIGlmIChwYWNrYWdlQ2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gcGFja2FnZUNhcmRzO1xuICAgIH0gZWxzZSBpZiAocGFja2FnZUNhcmRzLmxlbmd0aCA+IDMpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLnBhY2thZ2VDYXJkcy5zbGljZSgwLCAxKSxcbiAgICAgICAgZmxpZ2h0RmlsdGVycyxcbiAgICAgICAgLi4ucGFja2FnZUNhcmRzLnNsaWNlKDEsIDMpLFxuICAgICAgICB0b3BEZXN0aW5hdGlvbixcbiAgICAgICAgLi4ucGFja2FnZUNhcmRzLnNsaWNlKDMsIDQpLFxuICAgICAgICBleHBlcmllbmNlRmlsdGVycyxcbiAgICAgICAgLi4ucGFja2FnZUNhcmRzLnNsaWNlKDQsIDUpLFxuICAgICAgICBleGl0RGl2LFxuICAgICAgICAuLi5wYWNrYWdlQ2FyZHMuc2xpY2UoNSlcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLnBhY2thZ2VDYXJkcy5zbGljZSgwLCAxKSxcbiAgICAgICAgZmxpZ2h0RmlsdGVycyxcbiAgICAgICAgLi4ucGFja2FnZUNhcmRzLnNsaWNlKDEsIDMpLFxuICAgICAgICB0b3BEZXN0aW5hdGlvbixcbiAgICAgICAgZXhwZXJpZW5jZUZpbHRlcnMsXG4gICAgICAgIGV4aXREaXZcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlU2VnbWVudE9iamVjdCA9ICgpID0+ICh7XG4gICAgZXZlbnQ6IFBBQ0tBR0VfTElTVF9WSUVXRUQsXG4gICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbjoke3RoaXMucHJvcHMucGF0aFBhcmFtcy5kZXN0aW5hdGlvbiB8fCAnVW5rbm93bid9YCxcbiAgICBsYWJlbDogYFBhY2thZ2UgVHlwZToke2RlQ2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMucHJvcHMucGF0aFBhcmFtcy5jYXRlZ29yeSB8fCAnJyl9YCxcbiAgICBkZXN0aW5hdGlvbl9saXN0OiAnJyxcbiAgICBkZXN0aW5hdGlvbl9pZDogJycsXG4gICAgbnVtX2Rlc3RpbmF0aW9uczogMCxcbiAgICBwYWNrYWdlX2lkOiAwLFxuICAgIHZhbHVlOiAxXG4gIH0pO1xuXG4gIHRyYWNrRmlsdGVyU2VnbWVudEV2ZW50ID0gKGV2ZW50LCB2YWx1ZXMpID0+IHtcbiAgICBsZXQgZmlsdGVycyA9ICcnO1xuICAgIGZvciAoY29uc3QgaXRlbSBpbiB2YWx1ZXMpIHtcbiAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzLmNvbmNhdChpdGVtLCAnOicpO1xuICAgICAgZm9yIChjb25zdCBvYmogaW4gdmFsdWVzW2l0ZW1dKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbaXRlbV1bb2JqXSkge1xuICAgICAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzLmNvbmNhdChvYmosICcsJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzLmNvbmNhdCgnOjonKTtcbiAgICB9XG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgIHNlY3Rpb246ICdQYWNrYWdlIExpc3QnLFxuICAgICAgb2JqZWN0OiAnJyxcbiAgICAgIGN0YTogJycsXG4gICAgICBsYWJlbDogZmlsdGVycyxcbiAgICAgIHZhbHVlOiBERUZBVUxUX1ZBTFVFLFxuICAgICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbjpVbmtub3duJ31gLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGluaXRpYWxpemVTY3JvbGxlcigpO1xuICAgIHRyYWNrU2VnbWVudCh0aGlzLmNyZWF0ZVNlZ21lbnRPYmplY3QoKSk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzRGVzdGluYXRpb25UeXBlQWxsKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0RGVzdGluYXRpb25UeXBlRmlsdGVyKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0RGVzdGluYXRpb24odGhpcy5wcm9wcyk7XG4gICAgaW5pdGlhbGl6ZUV4aXRJbnRlbnQoKTtcbiAgICB0aGlzLnBhZ2VUcmFja1NlZ21lbnRFdmVudCh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHBhZ2VUcmFja1NlZ21lbnRFdmVudCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcGF0aFBhcmFtczogeyBjYXRlZ29yeSB9LCBwYWNrYWdlcywgZGVzdGluYXRpb25OYW1lIH0gPSBwcm9wcztcbiAgICBjb25zdCBpZCA9IHBhY2thZ2VzLmxlbmd0aCAmJiBwYWNrYWdlc1swXS5kZXN0aW5hdGlvbnMubGVuZ3RoID8gcGFja2FnZXNbMF0uZGVzdGluYXRpb25zWzBdLmlkIDogMDtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgY29uc3QgZGVzdGluYXRpb25MaXN0ID0gcHJvcHMuaXNNdWx0aURlc3RpbmF0aW9uID9cbiAgICAgICAgKHByb3BzLm11bHRpRGVzdGluYXRpb25UZXh0cykuam9pbignOjonKSA6XG4gICAgICAgIGRlc3RpbmF0aW9uTmFtZTtcbiAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50OiBQTFBfUEFHRV9WSUVXLFxuICAgICAgICBkZXN0aW5hdGlvbl9saXN0OiBkZXN0aW5hdGlvbkxpc3QgfHwgJycsXG4gICAgICAgIGRlc3RpbmF0aW9uX2lkOiBkZXN0aW5hdGlvbk5hbWUgPyBpZCA6IDAsXG4gICAgICAgIGRlc3RpbmF0aW9uX3R5cGU6IGNhcGl0YWxpemVGaXJzdExldHRlcihjYXRlZ29yeSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldENvbXBhcmluZ1BhY2thZ2VJZHMgPSAoY29tcGFyZVBhY2thZ2VzKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBhcmVQYWNrYWdlcy5tYXAocGtnID0+IHRoaXMuc3RhdGUuYWN0aXZlSG90ZWxzW3BrZy5pZF0gfHwgcGtnLmlkKS5qb2luKCcsJyk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICE9PSBwcmV2UHJvcHMubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIHRyYWNrU2VnbWVudCh0aGlzLmNyZWF0ZVNlZ21lbnRPYmplY3QoKSk7XG4gICAgICB0aGlzLnBhZ2VUcmFja1NlZ21lbnRFdmVudChuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNvbXBhcmluZ1BhY2thZ2VzLmxlbmd0aCA9PT0gMiAmJiAhdGhpcy5wcm9wcy5zdWJtaXR0ZWQpIHtcbiAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHByZXZQcm9wcy5zdWJtaXR0ZWQpOyAvLyBGSVhNRTo6IFdoYXQgaXMgdGhlIHJlc29sdXRpb24gb2YgdGhpcz9cbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJldlByb3BzLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiAnL2NvbXBhcmVwYWNrYWdlcycsXG4gICAgICAgICAgcXVlcnk6IHsgaWRzOiB0aGlzLmdldENvbXBhcmluZ1BhY2thZ2VJZHModGhpcy5wcm9wcy5jb21wYXJpbmdQYWNrYWdlcykgfVxuICAgICAgICB9KTtcbiAgICAgICAgcHJldlByb3BzLnN1Ym1pdHRlZEZvckNvbXBhcmUodHJ1ZSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb21wYXJpbmdQYWNrYWdlcy5sZW5ndGggPT09IDIgJiYgdGhpcy5wcm9wcy5zdWJtaXR0ZWQpIHtcbiAgICAgIHByZXZQcm9wcy5yZW1vdmVDb21wYXJlRGF0YSgpO1xuICAgICAgcHJldlByb3BzLnN1Ym1pdHRlZEZvckNvbXBhcmUoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBhdGhQYXJhbXMuZGVzdGluYXRpb24gIT09IHByZXZQcm9wcy5wYXRoUGFyYW1zLmRlc3RpbmF0aW9uKSB7XG4gICAgICB0aGlzLmdldERlc3RpbmF0aW9uKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlc3RpbmF0aW9uID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXNEeW5hbWljUExQID0gcHJvcHMuZHluYW1pY1BscFBhZ2UgfHwgZmFsc2U7XG4gICAgbGV0IGRlc3QgPSBwcm9wcy5mb3JtVG9Mb2NhdGlvbiB8fCAnJztcbiAgICBpZiAoaXNEeW5hbWljUExQKSB7XG4gICAgICBzZXRDb29raWUoJ2NiX2R0JywgY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoKGRlc3QpKTtcbiAgICAgIHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUoY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoKGRlc3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdCA9IHByb3BzLnBhdGhQYXJhbXMuZGVzdGluYXRpb24gPyBwcm9wcy5wYXRoUGFyYW1zLmRlc3RpbmF0aW9uIDogJyc7XG4gICAgICBpZiAoZGVzdCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHVzZXJfaW5wdXQ6IGRlc3QsXG4gICAgICAgICAgcGFyc2VfbmVnYXRpb246IGZhbHNlLFxuICAgICAgICAgIHBhcnNlX2Rlc3RpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgIGNhbl9maWx0ZXI6IGZhbHNlLFxuICAgICAgICAgIHJidF9pbmRleF9xdWVzdGlvbl9hbnN3ZXJfbWFwOiB7fVxuICAgICAgICB9O1xuICAgICAgICBodHRwQ2xpZW50KCdQT1NUJywgJy9icm93c2luZy92MS9kZXN0aW5hdGlvbnMvcmJ0X3BhcnNlJywgeyBkYXRhIH0pXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5ib2R5LmRhdGE7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lm1hdGNoZWRfZGVzdGluYXRpb25zKSB7XG4gICAgICAgICAgICAgIHNldENvb2tpZSgnY2JfZHQnLCBjYXBpdGFsaXplQW5kUmVwbGFjZURhc2gocmVzdWx0Lm1hdGNoZWRfZGVzdGluYXRpb25zKSk7XG4gICAgICAgICAgICAgIHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUoY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoKHJlc3VsdC5tYXRjaGVkX2Rlc3RpbmF0aW9ucykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0Q29va2llKCdjYl9kdCcsIGNhcGl0YWxpemVBbmRSZXBsYWNlRGFzaChkZXN0KSk7XG4gICAgICAgICAgICAgIHNldFZpc2l0ZWREZXN0aW5hdGlvbnNDb29raWUoY2FwaXRhbGl6ZUFuZFJlcGxhY2VEYXNoKGRlc3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvb2tpZSgnY2JfZHQnLCBjYXBpdGFsaXplQW5kUmVwbGFjZURhc2goZGVzdCkpO1xuICAgICAgICBzZXRWaXNpdGVkRGVzdGluYXRpb25zQ29va2llKGNhcGl0YWxpemVBbmRSZXBsYWNlRGFzaChkZXN0KSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG9uRmlsdGVyc0FwcGx5ID0gKHNlbGVjdGVkRmlsdGVycykgPT4ge1xuICAgIHRoaXMucHJvcHMucmVzZXREZWZhdWx0RmlsdGVycygpO1xuICAgIGNvbnN0IG5leHRVcmwgPSBjcmVhdGVMaXN0aW5nVXJsKFxuICAgICAgdGhpcy5wcm9wcy5maWx0ZXJzLFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJzLFxuICAgICAgdGhpcy5wcm9wcy5zb3J0Qnkuc2VsZWN0ZWQsXG4gICAgICB0aGlzLnByb3BzLnJvdXRlICYmIHRoaXMucHJvcHMucm91dGUuY2F0ZWdvcnksXG4gICAgICAxLFxuICAgICAgdGhpcy5wcm9wcy5wYXRoUGFyYW1zLmRlc3RpbmF0aW9uLnRvTG93ZXJDYXNlKCkgfHwgJycsXG4gICAgICB0aGlzLnByb3BzLnJvdXRlUGFyYW1zLmxpc3RpbmdUeXBlXG4gICAgKTtcbiAgICB0aGlzLnByb3BzLnB1c2gobmV4dFVybCk7XG4gICAgdGhpcy50cmFja0ZpbHRlclNlZ21lbnRFdmVudChGSUxURVJfQ0xJQ0tFRCwgdGhpcy5wcm9wcy5zZWxlY3RlZEZpbHRlcnMpO1xuICB9O1xuXG4gIGxvYWRGaWx0ZXJDb3VudHMgPSAoKSA9PiB0aGlzLnByb3BzLmNyZWF0ZUZpbHRlclBhcmFtKHRoaXMucHJvcHMucm91dGUsIHRoaXMucHJvcHMucGF0aFBhcmFtcyk7XG5cbiAgZ2V0UGFnZUZ1bGxOYW1lID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBzcGFjZWREZXN0aW5hdGlvbiA9IHRoaXMucHJvcHMucGF0aFBhcmFtcy5kZXN0aW5hdGlvblxuICAgICAgPyBgJHt0aGlzLnByb3BzLnBhdGhQYXJhbXMuZGVzdGluYXRpb24uc3BsaXQoJy0nKS5qb2luKCcgJyl9YCA6XG4gICAgICBudWxsO1xuICAgIGlmIChzcGFjZWREZXN0aW5hdGlvbiA9PT0gbnVsbCkge1xuICAgICAgcmVzdWx0ID0gYFBhY2thZ2UgTGlzdCBQYWdlLyR7dGhpcy5wcm9wcy5wYXRoUGFyYW1zLmNhdGVnb3J5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGBQYWNrYWdlIExpc3QgUGFnZS8ke3RoaXMucHJvcHMucGF0aFBhcmFtcy5jYXRlZ29yeX0vRGVzdGluYXRpb246JHtzcGFjZWREZXN0aW5hdGlvbn1gO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGdldEZpbHRlcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGUgJiYgdGhpcy5wcm9wcy5yb3V0ZS5wYWNrYWdlVHlwZSA9PT0gJ3NlYXNvbmFsJykge1xuICAgICAgY29uc3QgeyAnMzYnOiBvbWl0LCAuLi5maWx0ZXJzIH0gPSB0aGlzLnByb3BzLmZpbHRlcnM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgIHJldHVybiBmaWx0ZXJzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5maWx0ZXJzO1xuICB9O1xuXG4gIGxvYWRNb3JlUGFja2FnZXMgPSAocGFnZU51bWJlcikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uLCBzb3J0QnksIHBhdGhQYXJhbXMsIHJvdXRlLCBsb2FkTW9yZVBhY2thZ2VzOiBsb2FkTW9yZVBhY2thZ2VzRGlzcGF0Y2hlcixcbiAgICAgIHJvdXRlUGFyYW1zOiB7IGxpc3RpbmdUeXBlIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1cmwgPSBjcmVhdGVMaXN0aW5nQXBpVXJsKGxvY2F0aW9uLCByb3V0ZSwgc29ydEJ5LnNlbGVjdGVkLCBwYWdlTnVtYmVyLFxuICAgICAgcGF0aFBhcmFtcy5kZXN0aW5hdGlvbi50b0xvd2VyQ2FzZSgpLCByb3V0ZS5wYWNrYWdlVHlwZSwgbGlzdGluZ1R5cGUsXG4gICAgICB0aGlzLnByb3BzLmZpbHRlcnMsIHRoaXMucHJvcHMuc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgICBsb2FkTW9yZVBhY2thZ2VzRGlzcGF0Y2hlcih1cmwpO1xuICB9O1xuXG4gIGNyZWF0ZURlc2NyaXB0aW9uVGFnID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG1ldGFUYWdzLCB0b3RhbFBhY2thZ2VzLCByb3V0ZTogeyBjYXRlZ29yeSA9ICd0b3VyJyB9LCBwYXRoUGFyYW1zOiB7IGRlc3RpbmF0aW9uIH0sXG4gICAgICBiYW5uZXJIZWFkbGluZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2V0RGVzY3JpcHRpb24oJycsIG1ldGFUYWdzKTtcbiAgICBpZiAoYmFubmVySGVhZGxpbmUpIHtcbiAgICAgIHJldHVybiBgJHt0b3RhbFBhY2thZ2VzfSAke2NhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKGJhbm5lckhlYWRsaW5lKX0ke2Rlc2NyaXB0aW9uID8gYCAtICR7ZGVzY3JpcHRpb259YCA6ICcnfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHt0b3RhbFBhY2thZ2VzfSR7ZGVzdGluYXRpb24gPyBgICR7bWFrZUNhcGl0YWxpemVkU2VudGVuY2UoZGVzdGluYXRpb24pfWAgOiAnJ30gJHtjYXBpdGFsaXplRXZlcnlGaXJzdExldHRlcihjYXRlZ29yeSl9ICR7dG90YWxQYWNrYWdlcyA+IDEgPyAnUGFja2FnZXMnIDogJ1BhY2thZ2UnfSAtICR7Z2V0RGVzY3JpcHRpb24oJycsIG1ldGFUYWdzKX1gO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXJIZWxtZXQgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCB7IG1ldGFUYWdzOiBtZXRhVGFnTGlzdCwgbG9jYXRpb24sIGJhbm5lciwgY3VycmVudFBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuICg8SGVsbWV0PlxuICAgICAgPHRpdGxlPntnZXRUaXRsZSh0aXRsZSwgbWV0YVRhZ0xpc3QpfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzY4YzRjMVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3RoaXMuZ2V0UGFnZVVybCgpfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgICBjb250ZW50PXtiYW5uZXIgJiYgYmFubmVyLnBpY191cmx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUcmF2ZWxUcmlhbmdsZS5jb21cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInNtYXJ0YWRkb24tdmVyaWZpY2F0aW9uXCIgY29udGVudD1cImVkZGJmNWFhNzFiYTRhNDAyOWJlYWQxN2EwOTQwYWFmXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGhpcy5jcmVhdGVEZXNjcmlwdGlvblRhZygpfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RoaXMuY3JlYXRlRGVzY3JpcHRpb25UYWcoKX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwiYWw6YW5kcm9pZDp1cmxcIiBjb250ZW50PXtgdHQ6Ly8ke2dldEFwcFNjaGVtZVVybChsb2NhdGlvbiwgY3VycmVudFBhZ2UpfWB9IC8+XG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cImFsOmlvczp1cmxcIlxuICAgICAgICBjb250ZW50PXtgdHRpb3NhcHA6Ly9hcHBsaW5rcz9hbF9hcHBsaW5rX2RhdGE9JHtpb3NEZWVwTGluayhcbiAgICAgICAgICBgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vJHtnZXRBcHBTY2hlbWVVcmwoXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAnaW9zJ1xuICAgICAgICAgICl9YFxuICAgICAgICApfWB9XG4gICAgICAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJzaG91bGRfZmFsbGJhY2tcIiBjb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PXt0aGlzLmdldFBhZ2VGdWxsTmFtZSgpfSAvPlxuICAgICAge3JlbmRlck1ldGFUYWdzKG1ldGFUYWdMaXN0KX1cbiAgICA8L0hlbG1ldD4pO1xuICB9O1xuXG4gIHJlbmRlckV4cGVyaWVuY2VGaWx0ZXJzID0gKGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllcywgaXNUb3VyRmlsdGVyU2VsZWN0ZWQsIGZpbHRlclNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbHRlcnMsIGZpbHRlckNhdGVnb3J5LCBmaWx0ZXJDb3VudHMpID0+IHtcbiAgICByZXR1cm4gZmlsdGVyRGVzdGluYXRpb25BY3Rpdml0aWVzICYmIGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllcy5sZW5ndGggP1xuICAgICAgPGRpdiBjbGFzc05hbWU9J210OCBoaWRlIGV4cEZpbHRlcic+XG4gICAgICAgIDxJbmxpbmVGaWx0ZXJFeHBlcmllbmNlIGZpbHRlcnM9e3tcbiAgICAgICAgICBkaXNwbGF5VHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBvcHRpb25zOiBmaWx0ZXJEZXN0aW5hdGlvbkFjdGl2aXRpZXMsXG4gICAgICAgICAgaWQ6ICdsb2NhdGlvbl9leHBlcmllbmNlcycsXG4gICAgICAgICAgcGFyYW1zTmFtZTogJ2xvY2F0aW9uX2V4cGVyaWVuY2VzW10nLFxuICAgICAgICAgIHRpdGxlOiAnRXhwZXJpZW5jZXMnXG4gICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1jb21tb24tZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzPXtzZWxlY3RlZEZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclNlbGVjdGVkPXtmaWx0ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUaGVtZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcHBsaWVkPXsoZmlsdGVyT3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GaWx0ZXJzQXBwbHkoZmlsdGVyT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50cz17ZmlsdGVyQ291bnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RvdWJsZUxpbmU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdDaG9vc2UgYnkgQXR0cmFjdGlvbnMgJiBFeHBlcmllbmNlcycgLz5cbiAgICAgIDwvZGl2PiA6IG51bGw7XG4gIH07XG5cbiAgcmVuZGVyRmxpZ2h0RmlsdGVycyA9IChmaWx0ZXJzLCBmaWx0ZXJTZWxlY3RlZCwgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbHRlcnMsIGZpbHRlckNhdGVnb3J5LCBsb2NhdGlvbiwgaXNUb3VyRmlsdGVyU2VsZWN0ZWQsIGZpbHRlckNvdW50cywgbm90U2Vhc29uYWwpID0+IHtcbiAgICByZXR1cm4gbm90U2Vhc29uYWxcbiAgICAgID9cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdDggbWI4Jz5cbiAgICAgICAgPElubGluZUZpbHRlciBmaWx0ZXJzPXtmaWx0ZXJzWydmbGlnaHRfZmlsdGVyJ119XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWNvbW1vbi1maWx0ZXIgZmxpZ2h0LWZpbHRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycz17c2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclNlbGVjdGVkPXtmaWx0ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICBzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzPXtzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgIGlzVGhlbWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcHBsaWVkPXsoZmlsdGVyT3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpbHRlcnNBcHBseShmaWx0ZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50cz17ZmlsdGVyQ291bnRzfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZpZXcgUGFja2FnZXNcIiAvPlxuICAgICAgPC9kaXY+IDogbnVsbDtcbiAgfTtcblxuICBzZXRBY3RpdmVIb3RlbHMgPSAocGtnSWQsIGhvdGVsSWQpID0+IHtcbiAgICBsZXQgYWN0aXZlSG90ZWxzID0gdGhpcy5zdGF0ZS5hY3RpdmVIb3RlbHM7XG4gICAgYWN0aXZlSG90ZWxzID0ge1xuICAgICAgLi4uYWN0aXZlSG90ZWxzLFxuICAgICAgW3BrZ0lkXTogaG90ZWxJZFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUhvdGVscyB9KTtcbiAgfTtcblxuICBnZXRQYWdlVXJsID0gKCkgPT4ge1xuICAgIGxldCBsaW5rID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgvcGFnZVxcL1xcZCsvKS5qb2luKCcnKTtcbiAgICBpZiAobGlua1tsaW5rLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICAgIGxpbmsgPSBsaW5rLnN1YnN0cmluZygwLCBsaW5rLmxhc3RJbmRleE9mKCcvJykpO1xuICAgIH1cbiAgICByZXR1cm4gYGh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tJHtsaW5rfWA7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uLCBwYXRoUGFyYW1zLCBpc011bHRpRGVzdGluYXRpb24sIG11bHRpRGVzdGluYXRpb25UZXh0cywgdHJhY2tMZWFkRnVubmVsQ2xpY2ssIHBhY2thZ2VzLFxuICAgICAgYWRkVG9Db21wYXJpbmdQYWNrYWdlcywgcmVtb3ZlRnJvbUNvbXBhcmluZ1BhY2thZ2VzLCBzZWxlY3RlZEZpbHRlcnMsIHNvcnRCeSwgc2VsZWN0ZWRGaWx0ZXJDb3VudCxcbiAgICAgIHNldFRvdXJDYXRlZ29yeUZpbHRlciwgdG90YWxQYWNrYWdlcywgc3RhcnRpbmdQcmljZSwgcGFja2FnZXNUb0Rpc3BsYXksIGN1cnJlbnRQYWdlLFxuICAgICAgcm91dGUsIGZvb3RlclNlY3Rpb24sIGJyZWFkY3J1bWJzLCBjb21wYXJpbmdQYWNrYWdlcywgZmFxcywgc2ltaWxhckxpdmVDaXRpZXMsIGlzQ2l0eSwgbG9hZGluZyxcbiAgICAgIGJhbm5lckhlYWRsaW5lLCBhbGxQYWNrYWdlTGluaywgZmlsdGVyQ2F0ZWdvcnksIGZvcm1Ub0xvY2F0aW9uLCBmaWx0ZXJTZWxlY3RlZCxcbiAgICAgIGZpbHRlckNvdW50cywgaXNUb3VyRmlsdGVyU2VsZWN0ZWQsIHNlb0Zvb3RlciwgZmlsdGVyRGVzdGluYXRpb25BY3Rpdml0aWVzLCBnZXRQYWNrYWdlRGF0YSwgZGVzdGluYXRpb25OYW1lLFxuICAgICAgZm9vdGVyTGlua3MsIGZvYnBMaW5rcywgZXhwZXJpbWVudElkLCBzZXREZWZhdWx0U2VsZWN0ZWRGaWx0ZXJzLCByYXRpbmcsIHJldmlld3MsIHJpY2hUZXh0LCBzY2hlbWFBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYWNrYWdlX3N0YXJ0aW5nX3ByaWNlIH0gPSBwYWNrYWdlcztcbiAgICBjb25zdCBpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPSBzY2hlbWFBdHRyaWJ1dGVzICYmIHNjaGVtYUF0dHJpYnV0ZXMuc3Rhcl9yYXRpbmcgJiYgcmV2aWV3cztcbiAgICBjb25zdCBUcmF2ZWxlclJldmlld0NvbnRhaW5lciA9IFRyYXZlbGVyUmV2aWV3LnBscENvbnRhaW5lcjtcbiAgICBsZXQgdXJsID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09ICcvJykge1xuICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BhY2VkRGVzdGluYXRpb24gPSBwYXRoUGFyYW1zLmRlc3RpbmF0aW9uXG4gICAgICA/IGAke3BhdGhQYXJhbXMuZGVzdGluYXRpb24uc3BsaXQoJy0nKS5qb2luKCcgJyl9IGAgOiAnJztcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uVGl0bGUgPSBpc011bHRpRGVzdGluYXRpb25cbiAgICAgID8gYCR7cGFyc2VEZXN0aW5hdGlvbnNUb1Nob3cobXVsdGlEZXN0aW5hdGlvblRleHRzKX0gYFxuICAgICAgOiBzcGFjZWREZXN0aW5hdGlvbjtcblxuICAgIGNvbnN0IHRpdGxlID0gYCR7ZGVzdGluYXRpb25UaXRsZX0ke3BhdGhQYXJhbXMuY2F0ZWdvcnl9IFBhY2thZ2VzYDtcbiAgICBjb25zdCB0cmFja0xpc3RpbmdMZWFkRnVubmVsID0gKHNlY3Rpb24sIGNhdGVnb3J5LCBvYmplY3QsIGN0YSwgcElkKSA9PiB7XG4gICAgICBzZXRDb29raWUoJ3BhY2thZ2VfaWRfbGVhZF9mdW5uZWwnLCBwSWQpO1xuICAgICAgdHJhY2tMZWFkRnVubmVsQ2xpY2soe1xuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBvYmplY3QsXG4gICAgICAgIGN0YSxcbiAgICAgICAgcGFja2FnZUlkOiBwSWQsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBmdW5uZWxTdGVwOiAxXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXhwZXJpZW5jZUZpbHRlcnMgPSB0aGlzLnJlbmRlckV4cGVyaWVuY2VGaWx0ZXJzKGZpbHRlckRlc3RpbmF0aW9uQWN0aXZpdGllcyxcbiAgICAgIGlzVG91ckZpbHRlclNlbGVjdGVkLCBmaWx0ZXJTZWxlY3RlZCwgc2VsZWN0ZWRGaWx0ZXJzLCBmaWx0ZXJDYXRlZ29yeSwgZmlsdGVyQ291bnRzKTtcbiAgICBjb25zdCBmbGlnaHRGaWx0ZXJzID0gdGhpcy5yZW5kZXJGbGlnaHRGaWx0ZXJzKHRoaXMuZ2V0RmlsdGVycygpLCBmaWx0ZXJTZWxlY3RlZCwgc2V0RGVmYXVsdFNlbGVjdGVkRmlsdGVycyxcbiAgICAgIHNlbGVjdGVkRmlsdGVycywgZmlsdGVyQ2F0ZWdvcnksIGxvY2F0aW9uLCBpc1RvdXJGaWx0ZXJTZWxlY3RlZCwgZmlsdGVyQ291bnRzLCByb3V0ZS5wYWNrYWdlVHlwZSAhPT0gJ3NlYXNvbmFsJyk7XG5cbiAgICBjb25zdCBzaG93VG9wRGVzdGluYXRpb25zID0gc2ltaWxhckxpdmVDaXRpZXMgJiYgc2ltaWxhckxpdmVDaXRpZXMubGVuZ3RoICYmXG4gICAgICAhaXNNdWx0aURlc3RpbmF0aW9uICYmIHJvdXRlLnBhY2thZ2VUeXBlICE9PSAnc2Vhc29uYWwnO1xuXG4gICAgY29uc3QgYnVkZ2V0ID0gTGlzdGluZ0FzeW5jLmdldEJ1ZGdldChsb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gc2JjNVwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJIZWxtZXQodGl0bGUpfVxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tJHt1cmx9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBpZD1cImJnLW1hc2stZWlcIiBjbGFzc05hbWU9XCJiZy1tYXNrLWVpXCIgb25DbGljaz17ZSA9PiBoaWRlUG9wdXAoZSl9IC8+XG4gICAgICAgIDxTY3JvbGxQZXJjZW50YWdlIG9uQ2hhbmdlPXtvblNjcm9sbH0+XG4gICAgICAgICAgPGRpdiB2b2NhYj17aXNSYXRpbmdTY2hlbWFFbmFibGVkID8gXCJodHRwczovL3NjaGVtYS5vcmcvXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgdHlwZW9mPXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcIlByb2R1Y3RcIiA6IG51bGx9PlxuICAgICAgICAgICAgPEhlYWRlckNvbW1vbiAvPlxuICAgICAgICAgICAgPEhlYWRlclRpdGxlIHRpdGxlPXtiYW5uZXJIZWFkbGluZSA/IGNhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKGJhbm5lckhlYWRsaW5lKSA6IHRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tVcmw9e3RoaXMucHJvcHMubG9jYXRpb24uYWN0aW9uID09PSAnUE9QJyA/ICcvJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmF0aW5nU2NoZW1hRW5hYmxlZD17aXNSYXRpbmdTY2hlbWFFbmFibGVkfSAvPlxuICAgICAgICAgICAgPFNvcnRBbmRGaWx0ZXJcbiAgICAgICAgICAgICAgZmlsdGVycz17dGhpcy5nZXRGaWx0ZXJzKCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycz17c2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAgICAgICBzb3J0Qnk9e3NvcnRCeX1cbiAgICAgICAgICAgICAgZmlsdGVyc0FwcGxpZWQ9eygpID0+IHRoaXMub25GaWx0ZXJzQXBwbHkodGhpcy5wcm9wcy5zZWxlY3RlZEZpbHRlcnMpfVxuICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVyQ291bnQ9e3NlbGVjdGVkRmlsdGVyQ291bnR9XG4gICAgICAgICAgICAgIGludGlGaWx0ZXJzVG91cj17c2V0VG91ckNhdGVnb3J5RmlsdGVyfVxuICAgICAgICAgICAgICBjYXRlZ29yeT17cGF0aFBhcmFtcy5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgZmlsdGVyQ2F0ZWdvcnk9e2ZpbHRlckNhdGVnb3J5IHx8IFtdfVxuICAgICAgICAgICAgICBvbkZpbHRlckNoZWNrSGFuZGxlcj17dGhpcy5sb2FkRmlsdGVyQ291bnRzfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAhdG90YWxQYWNrYWdlcyA/XG4gICAgICAgICAgICAgICAgPFRvdGFsUGFja2FnZXNDb3VudFxuICAgICAgICAgICAgICAgICAgdG90YWxQYWNrYWdlcz17dG90YWxQYWNrYWdlcyB8fCAwfVxuICAgICAgICAgICAgICAgICAgc3RhcnRpbmdQcmljZT17c3RhcnRpbmdQcmljZX1cbiAgICAgICAgICAgICAgICAvPiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcm91dGUucGFja2FnZVR5cGUgIT09ICdzZWFzb25hbCcgJiYgcGFja2FnZXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICA8SW5saW5lRmlsdGVycyBpc1RvdXJGaWx0ZXJTZWxlY3RlZD17aXNUb3VyRmlsdGVyU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycz17dGhpcy5nZXRGaWx0ZXJzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyU2VsZWN0ZWQ9e2ZpbHRlclNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcHBsaWVkPXsoZmlsdGVyT3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpbHRlcnNBcHBseShmaWx0ZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVycz17c2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNhdGVnb3J5PXtmaWx0ZXJDYXRlZ29yeSB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudHM9e2ZpbHRlckNvdW50c30gLz4gOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRvdGFsUGFja2FnZXMgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwMTUgcHQwIHBiOFwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3OSBwdDE1IGYxNiBtYjggcGZjM1wiPlxuICAgICAgICAgICAgICAgICAgICBTaG93aW5nXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbDUgYXRfcGFja2FnZWNvdW50ZmlsdGVyIHBmYzFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0b3RhbFBhY2thZ2VzID4gMCA/IHRvdGFsUGFja2FnZXMgOiAwfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgfXtgIGB9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYmFubmVySGVhZGxpbmUgPyBiYW5uZXJIZWFkbGluZSA6IHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFBhY2thZ2VMaW5rICYmIGFsbFBhY2thZ2VMaW5rLnRleHQgP1xuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggZndiXCIgaHJlZj17YWxsUGFja2FnZUxpbmsubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYjhcIj57YEFsbCAke2FsbFBhY2thZ2VMaW5rLnRleHR9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uMjQgcDggZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleEZ1bGwgcmVsYXRpdmUgcm90YXRlMjcwIGJsb2NrIHdmdWxsIGhmdWxsIHJlYWQtbW9yZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsdWVEb3duQXJyb3cgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPiA6IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgTGlzdGluZ0FzeW5jLnJlbmRlclBhY2thZ2VzV2l0aEV4aXRJbnRlbnQocGFja2FnZXMsIHRyYWNrTGlzdGluZ0xlYWRGdW5uZWwsIGNvbXBhcmluZ1BhY2thZ2VzLFxuICAgICAgICAgICAgICAgIGFkZFRvQ29tcGFyaW5nUGFja2FnZXMsIHJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlcywgaXNNdWx0aURlc3RpbmF0aW9uLCBtdWx0aURlc3RpbmF0aW9uVGV4dHMsXG4gICAgICAgICAgICAgICAgZm9ybVRvTG9jYXRpb24sIHNob3dUb3BEZXN0aW5hdGlvbnMsIHNpbWlsYXJMaXZlQ2l0aWVzLCBwYXRoUGFyYW1zLFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlSG90ZWxzLCBleHBlcmllbmNlRmlsdGVycywgZ2V0UGFja2FnZURhdGEsIGlzQ2l0eSwgZGVzdGluYXRpb25OYW1lLCBmb2JwTGlua3MsIGV4cGVyaW1lbnRJZCxcbiAgICAgICAgICAgICAgICBidWRnZXQsIGZsaWdodEZpbHRlcnMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgPExvYWRNb3JlUGFja2FnZXNcbiAgICAgICAgICAgICAgICBwYWNrYWdlc1JlbWFpbmluZz17dG90YWxQYWNrYWdlcyAtIHBhY2thZ2VzVG9EaXNwbGF5fVxuICAgICAgICAgICAgICAgIGxvYWRNb3JlUGFja2FnZXM9e3RoaXMubG9hZE1vcmVQYWNrYWdlc31cbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJQYWNrYWdlcyByZW1haW5pbmdcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtOCBtbDAgbXIwXCI+XG4gICAgICAgICAgICAgIDxUcmF2ZWxlclJldmlld0NvbnRhaW5lciBkZXN0aW5hdGlvbj17cGF0aFBhcmFtcy5kZXN0aW5hdGlvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJvdXRlLnBhY2thZ2VUeXBlID09PSAnc2Vhc29uYWwnID9cbiAgICAgICAgICAgICAgICA8VHJhdmVsZXJTdG9yeSB0YWdzPXtbJ3R0X3NlYXNvbmFsJ119IC8+IDpcbiAgICAgICAgICAgICAgICA8VHJhdmVsZXJTdG9yeSB0YWdzPXtbcGF0aFBhcmFtcy5kZXN0aW5hdGlvbl19IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Zm9vdGVyTGlua3MgJiYgT2JqZWN0LmtleXMoZm9vdGVyTGlua3MpLmxlbmd0aCA/IDxJbnRlcmxpbmtpbmcgZm9vdGVyTGlua3M9e1tmb290ZXJMaW5rc119IC8+IDogbnVsbH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmYXFzICYmIGZhcXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG10OCBtYjggc2JjNVwiPlxuICAgICAgICAgICAgICAgICAgPEZhcSBmYXFzPXtmYXFzfVxuICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbj17eyBuYW1lOiBzcGFjZWREZXN0aW5hdGlvbiwgaWQ6ICcnIH19XG4gICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlEZXN0aW5hdGlvbj17cGFja2FnZXMuaXNfbXVsdGlfZGVzdGluYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9ucz17cGFja2FnZXMubXVsdGlfZGVzdGluYXRpb25fdGV4dHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoUGFyYW1zLmRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgICAgPyA8UGxhY2VzVG9WaXNpdC5jb250YWluZXIgZXh0ZXJuYWxDc3M9XCJtYjggcDE1IHNiY3dcIiAvPlxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGhQYXJhbXMuZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgICA/IDxUaGluZ3NUb0RvLmNvbnRhaW5lciBleHRlcm5hbENzcz1cIm1iOCBwMTUgc2Jjd1wiIC8+XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZm9vdGVyU2VjdGlvbikubGVuZ3RoID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG10OCBzYmM1IG1iOFwiPlxuICAgICAgICAgICAgICAgICAgPEFib3V0TGlzdGluZ0Rlc3RpbmF0aW9uIGZvb3RlclNlY3Rpb249e2Zvb3RlclNlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSYXRpbmdTY2hlbWFFbmFibGVkPXtpc1JhdGluZ1NjaGVtYUVuYWJsZWR9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmN3IHBiMCBzYmM1XCI+XG4gICAgICAgICAgICAgIDxXaHlCb29rV2l0aE91ckFnZW50cyAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iIGJyZWFkY3J1bWJzPXticmVhZGNydW1ic30gLz5cbiAgICAgICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgICAgICByaWNoVGV4dD17cmljaFRleHR9XG4gICAgICAgICAgICAgIHJhdGluZz17cmF0aW5nfVxuICAgICAgICAgICAgICByZXZpZXdzPXtyZXZpZXdzfVxuICAgICAgICAgICAgICBzdGFydGluZ1ByaWNlPXtwYWNrYWdlX3N0YXJ0aW5nX3ByaWNlfVxuICAgICAgICAgICAgICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ9e2lzUmF0aW5nU2NoZW1hRW5hYmxlZH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcm91dGUucGFja2FnZVR5cGUgIT09ICdzZWFzb25hbCcgJiYgc2VvRm9vdGVyLmZvb3Rlcl9zZWN0aW9ucyAmJiBzZW9Gb290ZXIuZm9vdGVyX3NlY3Rpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgPFNlb0Zvb3RlciBmb290ZXJTZWN0aW9ucz17c2VvRm9vdGVyLmZvb3Rlcl9zZWN0aW9uc30gLz4gOiBudWxsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaXhlZE1lbnUgLz5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb21wYXJpbmdQYWNrYWdlcy5sZW5ndGggPT09IDEgJiYgIWdldENvb2tpZSgnZmlyc3RfbG9hZGVyX29wZW5lZCcpICYmXG4gICAgICAgICAgICAgIDxMb2FkZXJGaXJzdCBvbkNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmlyc3RMb2FkZXJPcGVuZWQ6IHRydWUgfSl9IC8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29tcGFyaW5nUGFja2FnZXMubGVuZ3RoID09PSAyICYmXG4gICAgICAgICAgICAgIDxMb2FkZXJTZWNvbmQgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TY3JvbGxQZXJjZW50YWdlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nQXN5bmM7XG4iXSwic291cmNlUm9vdCI6IiJ9