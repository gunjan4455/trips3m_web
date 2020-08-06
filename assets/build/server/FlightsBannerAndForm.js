require("source-map-support").install();
exports.ids = ["FlightsBannerAndForm"];
exports.modules = {

/***/ "./app-v2/modules/flights/Banner.js":
/*!******************************************!*\
  !*** ./app-v2/modules/flights/Banner.js ***!
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

var _PrefilledBanner = _interopRequireDefault(__webpack_require__(/*! ./PrefilledBanner */ "./app-v2/modules/flights/PrefilledBanner.js"));

var _PostFilledBanner = _interopRequireDefault(__webpack_require__(/*! ./PostFilledBanner */ "./app-v2/modules/flights/PostFilledBanner.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Banner = ({
  flightsData,
  trackSegment
}) => {
  const trackSegmentEvent = (cta, object, miscType1) => {
    trackSegment({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: 'Flights',
      cta,
      object,
      miscType1
    });
  };

  return _react.default.createElement("div", {
    className: "flex flexFull",
    style: {
      maxWidth: '100%',
      minWidth: '100%'
    }
  }, flightsData.length ? _react.default.createElement(_PostFilledBanner.default, {
    trackSegmentEvent: trackSegmentEvent
  }) : _react.default.createElement(_PrefilledBanner.default, {
    trackSegmentEvent: trackSegmentEvent
  }));
};

Banner.propTypes = {
  flightsData: _propTypes.default.array.isRequired,
  trackSegment: _propTypes.default.func.isRequired
};
var _default = Banner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/G.js":
/*!*************************************!*\
  !*** ./app-v2/modules/flights/G.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThankYouContainer = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThankYouContainer = _glamorous.default.div({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.7)',
  zIndex: '1002',
  '& .ThankYouContainerMain': {
    width: '500px',
    maxWidth: '100%',
    '& .thanksIcon': {
      height: '64px',
      position: 'relative',
      '& svg': {
        width: '100%',
        height: '100%'
      }
    }
  }
});

exports.ThankYouContainer = ThankYouContainer;

/***/ }),

/***/ "./app-v2/modules/flights/PostFilledBanner.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/flights/PostFilledBanner.js ***!
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

var _bookWithFlightExpert = _interopRequireDefault(__webpack_require__(/*! ./bookWithFlightExpert */ "./app-v2/modules/flights/bookWithFlightExpert/index.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Banner = ({
  trackSegmentEvent
}) => {
  const handleClick = () => {
    trackSegmentEvent('Explore Best Flight Prices');
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "sbcw m8 mt8 radius2 p15 pt24 text-center cardShadow at_flightBanner at_flightPostBookingBanner"
  }, _react.default.createElement("div", {
    className: "icon-48 p4"
  }, _react.default.createElement(_Icon.Flights, null)), _react.default.createElement("span", {
    className: "iblock pfc1 f12 mb8"
  }, "Flights"), _react.default.createElement("h3", {
    className: "f24 fw9 pfc3 mb15"
  }, "Your Flight Request is in", _react.default.createElement("br", null), " Progress ..."), _react.default.createElement("p", {
    className: "f14 mb24 pr15 pl24"
  }, "Thank you for your request. Our flight expert is working hard to deliver the best deal to you."), _react.default.createElement("a", {
    href: "https://flights.traveltriangle.com/",
    target: "_blank",
    onClick: handleClick,
    className: "iblock wfull btn-sec-load-filled text-center fw7 relative cursorP radius2 linkWhite at_flightCTA"
  }, "Explore Best Flight Prices"), _react.default.createElement(_bookWithFlightExpert.default, {
    trackSegmentEvent: trackSegmentEvent
  })));
};

Banner.propTypes = {
  trackSegmentEvent: _propTypes.default.func.isRequired
};
var _default = Banner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/PrefilledBanner.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/flights/PrefilledBanner.js ***!
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

var _bookWithFlightExpert = _interopRequireDefault(__webpack_require__(/*! ./bookWithFlightExpert */ "./app-v2/modules/flights/bookWithFlightExpert/index.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PrefilledBanner = ({
  trackSegmentEvent
}) => {
  const handleClick = () => {
    trackSegmentEvent('Explore Best Flight Prices');
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "sbcw m8 mt8 radius2 p15 pt24 text-center cardShadow at_flightBanner at_flightPrefilledBanner"
  }, _react.default.createElement("div", {
    className: "icon-48 p4"
  }, _react.default.createElement(_Icon.Flights, null)), _react.default.createElement("span", {
    className: "iblock pfc1 f12 mb8"
  }, "Flights"), _react.default.createElement("h3", {
    className: "f24 fw9 pfc3 mb15"
  }, "Discover Great Flight Deals & Save More"), _react.default.createElement("div", {
    className: "text-left"
  }, _react.default.createElement("h4", {
    className: "f18 fw9 pfc3 mb15"
  }, "Compare prices and book directly"), _react.default.createElement("p", {
    className: "f14p mb8 pb4 relative pl24"
  }, _react.default.createElement("span", {
    className: "icon-14 iblock absolute l0 t2"
  }, _react.default.createElement(_Icon.GreenTickInclusion, null)), "Compare prices from 720 platforms"), _react.default.createElement("p", {
    className: "f14p mb8 pb4 relative pl24"
  }, _react.default.createElement("span", {
    className: "icon-14 iblock absolute l0 t2"
  }, _react.default.createElement(_Icon.GreenTickInclusion, null)), "Get best and cheapest deals"), _react.default.createElement("p", {
    className: "f14p mb8 pb4 relative pl24"
  }, _react.default.createElement("span", {
    className: "icon-14 iblock absolute l0 t2"
  }, _react.default.createElement(_Icon.GreenTickInclusion, null)), "Book instantly")), _react.default.createElement("a", {
    href: "https://flights.traveltriangle.com/",
    target: "_blank",
    onClick: handleClick,
    className: "iblock wfull btn-sec-load-filled text-center fw7 relative cursorP radius2 linkWhite mt4 at_flightCTA"
  }, "Explore Best Flight Prices"), _react.default.createElement("div", {
    className: "mt15 mb15"
  }, _react.default.createElement("div", {
    className: "relative flex alignCenter justifyCenter"
  }, _react.default.createElement("span", {
    className: "bt absolute-center-v l0 wfull z1"
  }), _react.default.createElement("p", {
    className: "z2 relative f16 fw9 pfc4 w40 h40 radius100 border sbcw flex justifyCenter alignCenter"
  }, "OR"))), _react.default.createElement("div", {
    className: "text-left"
  }, _react.default.createElement("h4", {
    className: "f18 fw9 pfc3 mb15"
  }, "Connect with our flight expert"), _react.default.createElement("p", {
    className: "f14p mb8 pb4 relative pl24"
  }, _react.default.createElement("span", {
    className: "icon-14 iblock absolute l0 t2"
  }, _react.default.createElement(_Icon.GreenTickInclusion, null)), "Get best quotes from our agents"), _react.default.createElement("p", {
    className: "f14p mb8 pb4 relative pl24"
  }, _react.default.createElement("span", {
    className: "icon-14 iblock absolute l0 t2"
  }, _react.default.createElement(_Icon.GreenTickInclusion, null)), "Customize for special needs"), _react.default.createElement("p", {
    className: "f14p mb8 relative pl24"
  }, _react.default.createElement("span", {
    className: "icon-14 iblock absolute l0 t2"
  }, _react.default.createElement(_Icon.GreenTickInclusion, null)), "Get cheapest prices")), _react.default.createElement(_bookWithFlightExpert.default, {
    trackSegmentEvent: trackSegmentEvent
  })));
};

PrefilledBanner.propTypes = {
  trackSegmentEvent: _propTypes.default.func.isRequired
};
var _default = PrefilledBanner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/TripType.js":
/*!********************************************!*\
  !*** ./app-v2/modules/flights/TripType.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = Object.freeze({
  ROUND_TRIP: 'round_trip',
  ONE_WAY: 'one_way',
  MULTICITY: 'multi_city'
});

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/bookWithFlightExpert/BookWithFlightExpert.js":
/*!*****************************************************************************!*\
  !*** ./app-v2/modules/flights/bookWithFlightExpert/BookWithFlightExpert.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../form/index */ "./app-v2/modules/flights/form/index.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/flights/G.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const tripTypeOptions = [{
  name: 'Round Trip',
  id: 'round_trip'
}, {
  name: 'One Way',
  id: 'one_way'
}, {
  name: 'Multicity',
  id: 'multi_city'
}];
let BookWithFlightExpert = class BookWithFlightExpert extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      closeModal: true,
      submitting: false,
      timerOn: false
    }, this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    }, this.saveFlightDetails = data => {
      const {
        postFlightDetails,
        currentTripId
      } = this.props;
      this.closePopup();
      this.setState({
        submitting: true,
        timerOn: true
      });
      setTimeout(() => {
        this.setState({
          timerOn: false
        });
      }, 3000);
      return postFlightDetails(_objectSpread({}, data, {
        requested_trip_id: currentTripId
      })).then(() => {
        this.setState({
          submitting: false
        });
      });
    }, this.handleClick = () => {
      const {
        trackSegmentEvent
      } = this.props;
      this.setState({
        closeModal: false
      });
      trackSegmentEvent('Book With Our Flight Expert');
    }, _temp;
  }

  render() {
    const {
      getDestinationSearchList,
      destinations,
      getFilteredDestinations,
      trackSegmentEvent
    } = this.props;
    const {
      submitting,
      closeModal,
      timerOn
    } = this.state;
    return _react.default.createElement("div", null, _react.default.createElement(_GenericModal.default, {
      fullView: true,
      hasCustomClose: true,
      trigger: _react.default.createElement("button", {
        className: "btn-sec-load mt8 wfull at_flightFormCTA",
        onClick: this.handleClick
      }, "Book with Our Flight Expert"),
      customCloseTrigger: closeModal,
      onRequestCloseCustom: this.closePopup
    }, _react.default.createElement(_index.default, {
      getDestinationSearchList: getDestinationSearchList,
      tripTypeOptions: tripTypeOptions,
      destinationList: destinations,
      getFilteredDestinations: getFilteredDestinations,
      saveFlightDetails: this.saveFlightDetails,
      trackSegmentEvent: trackSegmentEvent
    })), submitting || timerOn ? _react.default.createElement(_G.ThankYouContainer, null, _react.default.createElement("div", {
      className: "ThankYouContainerMain absolute-center p15"
    }, _react.default.createElement("div", {
      className: "text-center clearfix wfull iblock p32 pt24 sbcw"
    }, _react.default.createElement("div", {
      className: "thanksIcon mb15"
    }, _react.default.createElement(_Icon.IllusRequestCallback, null)), _react.default.createElement("h3", {
      className: "f24 fw9 pfc1 mb4"
    }, "Thank You!"), _react.default.createElement("p", {
      className: "f14 pfc3"
    }, "We will reach out to you within 24 hours.")))) : null);
    ;
  }

};
BookWithFlightExpert.propTypes = {
  getDestinationSearchList: _propTypes.default.func.isRequired,
  getFilteredDestinations: _propTypes.default.func.isRequired,
  destinations: _propTypes.default.array.isRequired,
  postFlightDetails: _propTypes.default.func.isRequired,
  currentTripId: _propTypes.default.number.isRequired,
  trackSegmentEvent: _propTypes.default.func.isRequired
};
var _default = BookWithFlightExpert;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/bookWithFlightExpert/index.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/flights/bookWithFlightExpert/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _BookWithFlightExpert = _interopRequireDefault(__webpack_require__(/*! ./BookWithFlightExpert */ "./app-v2/modules/flights/bookWithFlightExpert/BookWithFlightExpert.js"));

var _action = __webpack_require__(/*! ../action */ "./app-v2/modules/flights/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRedux.connect)(state => ({
  destinations: (0, _get2.default)(state, 'flights.destinations', []),
  currentTripId: (0, _get2.default)(state, 'trip.currentTrip.data.id', 0)
}), dispatch => ({
  getDestinationSearchList: () => dispatch((0, _action.getDestinationSearchList)()),
  getFilteredDestinations: params => dispatch((0, _action.getFilteredDestinations)(params)),
  postFlightDetails: params => dispatch((0, _action.postFlightDetails)(params))
}))(_BookWithFlightExpert.default);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/form/Fields.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/flights/form/Fields.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./components/Dropdown */ "./app-v2/modules/flights/form/components/Dropdown.js"));

var _DatePicker = _interopRequireDefault(__webpack_require__(/*! modules/preferences/components/DatePicker */ "./app-v2/modules/preferences/components/DatePicker.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./components/Checkbox */ "./app-v2/modules/flights/form/components/Checkbox.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _TripType = _interopRequireDefault(__webpack_require__(/*! modules/flights/TripType */ "./app-v2/modules/flights/TripType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let FieldsComponent = class FieldsComponent extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleFromLocationClick = () => {
      this.props.trackSegmentEvent('From', 'Offline form');
    }, this.handleToLocationClick = () => {
      this.props.trackSegmentEvent('To', 'Offline form');
    }, this.handleReturnDateClick = () => {
      this.props.trackSegmentEvent('Date', 'Offline form', 'Return Date');
    }, this.handleStartDateClick = () => {
      this.props.trackSegmentEvent('Date', 'Offline form', 'Start Date');
    }, _temp;
  }

  render() {
    const {
      fields,
      destinationList,
      getFilteredDestinations,
      tripType
    } = this.props;
    return _react.default.createElement("div", null, fields.map((flight, index) => _react.default.createElement("div", {
      key: index,
      className: "flex flexDColumn"
    }, _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement("div", {
      className: "absolute-center-h z4 border radius100 p8 sbcw",
      style: {
        borderColor: '#B2B2B2',
        top: '40px'
      }
    }, _react.default.createElement("div", {
      className: "relative icon-14"
    }, _react.default.createElement(_Icon.SortIcon, null))), _react.default.createElement("div", {
      className: "flexFull relative at_from_loc"
    }, _react.default.createElement("div", {
      className: "absolute t10 mt2 l8"
    }, _react.default.createElement("div", {
      className: "icon-24"
    }, _react.default.createElement(_Icon.Flight, null))), _react.default.createElement(_reduxForm.Field, {
      name: `${flight}.from_loc`,
      component: _Dropdown.default,
      options: destinationList,
      getOptions: getFilteredDestinations,
      placeholder: "From",
      trackSegment: this.handleFromLocationClick
    })), _react.default.createElement("div", {
      className: "flexFull relative at_to_loc"
    }, _react.default.createElement("div", {
      className: "absolute t10 mt2 l8"
    }, _react.default.createElement("div", {
      className: "rotate90"
    }, _react.default.createElement("div", {
      className: "icon-24"
    }, _react.default.createElement(_Icon.Flight, null)))), _react.default.createElement(_reduxForm.Field, {
      name: `${flight}.to_loc`,
      component: _Dropdown.default,
      options: destinationList,
      getOptions: getFilteredDestinations,
      placeholder: "To",
      trackSegment: this.handleToLocationClick
    }))), _react.default.createElement("div", {
      className: `flex mb3 ${tripType === _TripType.default.ROUND_TRIP ? 'inputGroup' : ''}`
    }, _react.default.createElement("div", {
      className: "flexFull inputBox",
      onClick: this.handleStartDateClick
    }, _react.default.createElement(_reduxForm.Field, {
      name: `${flight}.start_date`,
      component: _DatePicker.default,
      type: "text",
      placeholder: "Start Date",
      calendarClassName: "no_arrow"
    })), tripType === _TripType.default.ROUND_TRIP ? _react.default.createElement("div", {
      className: "flexFull inputBox",
      onClick: this.handleReturnDateClick
    }, _react.default.createElement(_reduxForm.Field, {
      name: `${flight}.return_date`,
      component: _DatePicker.default,
      type: "text",
      placeholder: "Return Date",
      calendarClassName: "no_arrow"
    })) : null), _react.default.createElement("div", {
      className: "flex"
    }, index ? null : _react.default.createElement("div", {
      className: "flexFull mb8"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "dates_flexible",
      component: _Checkbox.default,
      label: "Date Not Fixed"
    })), _react.default.createElement("div", {
      className: "flex flexFull alignCenter"
    }, index ? _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("button", {
      type: "button",
      title: "Remove",
      className: "pfc2 f14 fw7 mb8 pr48 pt8 pb8",
      onClick: () => fields.remove(index)
    }, "Delete")) : null, tripType === _TripType.default.MULTICITY && index === fields.length - 1 ? _react.default.createElement("div", {
      className: "flexFull flex justifyEnd"
    }, _react.default.createElement("button", {
      type: "button",
      className: "sfc1 f14 fw7 mb8 pl48 pt8 pb8",
      onClick: () => fields.push({})
    }, "+ Add City")) : null)))));
  }

};
FieldsComponent.propTypes = {
  destinationList: _propTypes.default.array.isRequired,
  getFilteredDestinations: _propTypes.default.func.isRequired,
  fields: _propTypes.default.array.isRequired,
  meta: _propTypes.default.object.isRequired,
  tripType: _propTypes.default.string.isRequired,
  trackSegmentEvent: _propTypes.default.func.isRequired
};
var _default = FieldsComponent;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/form/components/Checkbox.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/flights/form/components/Checkbox.js ***!
  \************************************************************/
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let Checkbox = class Checkbox extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.toggleCheckboxChange = value => {
      const {
        input,
        handleOnChange
      } = this.props;
      input.onChange(value);
      handleOnChange(value);
    }, _temp;
  }

  render() {
    const {
      label,
      input,
      disabled,
      defaultChecked
    } = this.props;
    return _react.default.createElement("div", {
      className: "p0 option-overflow"
    }, _react.default.createElement("div", {
      className: "flex"
    }, _react.default.createElement("input", _extends({}, input, {
      type: "checkbox",
      id: `filter_${input.name}_${input.value}`,
      className: "checkbox-common",
      onChange: this.toggleCheckboxChange,
      disabled: disabled,
      defaultChecked: defaultChecked
    })), _react.default.createElement("label", {
      className: "break-all",
      htmlFor: `filter_${input.name}_${input.value}`
    }, label)));
  }

};
Checkbox.propTypes = {
  label: _propTypes.default.string.isRequired,
  handleOnChange: _propTypes.default.func,
  input: _propTypes.default.object.isRequired,
  disabled: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool
};
Checkbox.defaultProps = {
  handleOnChange: () => {},
  disabled: false,
  defaultChecked: false
};
var _default = Checkbox;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/form/components/SelectSingleOption.js":
/*!**********************************************************************!*\
  !*** ./app-v2/modules/flights/form/components/SelectSingleOption.js ***!
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

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let SelectSingleOption = (_temp = _class = class SelectSingleOption extends _react.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      const {
        onChange,
        input
      } = this.props;
      this.props.input.onChange(e.target.value);
      this.setState({
        selectedId: e.target.value
      });
      onChange(e.target.value);
    };

    this.state = {
      selectedId: props.input.value ? props.input.value : props.options.length ? props.options[0].id : null
    };
  }

  render() {
    const {
      input,
      options,
      meta: {
        touched,
        error
      }
    } = this.props;
    const {
      selectedId
    } = this.state;
    return _react.default.createElement("div", {
      className: "mb24 flex spaceBetween"
    }, options.length ? options.map(option => _react.default.createElement("div", {
      className: "col-xs-4 pl4 pr4 will-book-con-options",
      key: option.id
    }, _react.default.createElement("input", {
      type: "radio",
      className: "radio-common",
      name: input.name,
      id: `single_select_${option.id}`,
      value: option.id,
      checked: option.id === selectedId,
      onChange: this.handleChange
    }), _react.default.createElement("label", {
      htmlFor: `single_select_${option.id}`,
      className: "cursorP"
    }, _react.default.createElement("p", {
      className: "m0"
    }, option.name)))) : null, touched && error && _react.default.createElement("span", {
      className: "input-error-text"
    }, error));
  }

}, _class.propTypes = {
  options: _propTypes.default.array.isRequired,
  input: _propTypes.default.object.isRequired,
  meta: _propTypes.default.object,
  onChange: _propTypes.default.func
}, _class.defaultProps = {
  options: [],
  onChange: () => {}
}, _temp);
exports.default = SelectSingleOption;

/***/ }),

/***/ "./app-v2/modules/flights/form/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/flights/form/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _SelectSingleOption = _interopRequireDefault(__webpack_require__(/*! ./components/SelectSingleOption */ "./app-v2/modules/flights/form/components/SelectSingleOption.js"));

var _NumberFormatter = _interopRequireDefault(__webpack_require__(/*! modules/preferences/components/NumberFormatter */ "./app-v2/modules/preferences/components/NumberFormatter.js"));

var _Fields = _interopRequireDefault(__webpack_require__(/*! ./Fields */ "./app-v2/modules/flights/form/Fields.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _TripType = _interopRequireDefault(__webpack_require__(/*! modules/flights/TripType */ "./app-v2/modules/flights/TripType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let FlightsForm = class FlightsForm extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleSubmit = values => {
      const {
        saveFlightDetails,
        trackSegmentEvent
      } = this.props;

      const newData = _objectSpread({}, values, {
        dates_flexible: values.dates_flexible || false,
        flight_details: values.flight_details.map(item => {
          const newItem = _objectSpread({}, item);

          newItem.start_date = (0, _DateTime.format)(item.start_date, 'DD-MM-YYYY');
          newItem.return_date = values.trip_type === _TripType.default.ROUND_TRIP ? (0, _DateTime.format)(item.return_date, 'DD-MM-YYYY') : '';
          return newItem;
        })
      });

      trackSegmentEvent('Get Quote', 'Offline Form');
      return saveFlightDetails(newData);
    }, this.handleTripTypeChange = (a, value) => {
      const {
        tripTypeOptions,
        trackSegmentEvent,
        reset
      } = this.props;
      const tripType = tripTypeOptions.find(i => i.id === value);
      trackSegmentEvent('Trip Type', 'Offline Form', tripType.name);
      reset();
    }, _temp;
  }

  componentDidMount() {
    this.props.getDestinationSearchList();
  }

  render() {
    const {
      submitting,
      handleSubmit,
      tripTypeId,
      tripTypeOptions,
      destinationList,
      getFilteredDestinations,
      trackSegmentEvent
    } = this.props;
    return _react.default.createElement("div", {
      className: "sbcw"
    }, _react.default.createElement("div", {
      className: "absolute wfull t0 l0"
    }, _react.default.createElement("div", {
      className: "p8 flex bb wfull fixed z5 sbcw"
    }, _react.default.createElement("div", {
      className: "p4 flexFull"
    }, _react.default.createElement("p", {
      className: "f16 flex alignCenter fw7 flexFull ellipsis ml24"
    }, "Compare & Book Cheapest Flights")))), _react.default.createElement("form", {
      onSubmit: handleSubmit(this.handleSubmit)
    }, _react.default.createElement("div", {
      className: "p15 pt24 pb64 flex flexDColumn"
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "trip_type",
      component: _SelectSingleOption.default,
      options: tripTypeOptions,
      onChange: this.handleTripTypeChange
    })), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(_reduxForm.FieldArray, {
      name: "flight_details",
      component: _Fields.default,
      destinationList: destinationList,
      getFilteredDestinations: getFilteredDestinations,
      tripType: tripTypeId,
      trackSegmentEvent: trackSegmentEvent
    })), _react.default.createElement("div", {
      className: "flexFull mb15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "adult_count",
      component: _NumberFormatter.default,
      type: "number",
      placeholder: "Adults (12+ yrs)"
    })), _react.default.createElement("div", {
      className: "flexFull mb15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "child_count",
      component: _NumberFormatter.default,
      type: "number",
      placeholder: "Children (2-12 yrs)"
    })), _react.default.createElement("div", {
      className: "flexFull mb15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "infant_count",
      component: _NumberFormatter.default,
      type: "number",
      placeholder: "Infants (0-2 yrs)"
    }))), _react.default.createElement("div", {
      className: "fixed b0 l0 r0 bs4 z10 p8 bt sbcw"
    }, _react.default.createElement("button", {
      type: "submit",
      disabled: submitting,
      className: "btn-filled-pri-large wfull ripple"
    }, _react.default.createElement("div", {
      className: "wave"
    }), "Get Quote"))));
  }

};

const validate = values => {
  const errors = {};

  if (!values.adult_count) {
    errors.adult_count = 'Please enter number of adults';
  }

  const flightDetailErrors = [];
  values.flight_details && values.flight_details.forEach((flight, index) => {
    const flightErrors = {};

    if (!flight.from_loc) {
      flightErrors.from_loc = 'Please enter from city';
    }

    if (!flight.to_loc) {
      flightErrors.to_loc = 'Please enter to city';
    }

    if (!flight.start_date) {
      flightErrors.start_date = 'Please enter start date';
    }

    if (values.trip_type === 'round_trip' && !flight.return_date) {
      flightErrors.return_date = 'Please enter return date';
    }

    if (values.trip_type === 'round_trip' && flight.return_date && flight.return_date && flight.start_date > flight.return_date) {
      flightErrors.return_date = 'Return date should be after start date';
    }

    if (flight.to_loc && flight.from_loc === flight.to_loc) {
      flightErrors.to_loc = 'From City and To City cannot be same';
    }

    flightDetailErrors[index] = flightErrors;
  });

  if (flightDetailErrors.length) {
    errors.flight_details = flightDetailErrors;
  }

  return errors;
};

FlightsForm.propTypes = {
  tripTypeOptions: _propTypes.default.array,
  submitting: _propTypes.default.bool.isRequired,
  handleSubmit: _propTypes.default.func.isRequired,
  tripTypeId: _propTypes.default.string.isRequired,
  getDestinationSearchList: _propTypes.default.func.isRequired,
  destinationList: _propTypes.default.array.isRequired,
  getFilteredDestinations: _propTypes.default.func.isRequired,
  saveFlightDetails: _propTypes.default.func.isRequired,
  trackSegmentEvent: _propTypes.default.func.isRequired,
  reset: _propTypes.default.func.isRequired
};
FlightsForm.defaultProps = {
  tripTypeOptions: []
};
const selector = (0, _reduxForm.formValueSelector)('flightsForm');
const FlightsConnectedForm = (0, _reactRedux.connect)(state => {
  const tripTypeId = selector(state, 'trip_type');
  return {
    tripTypeId
  };
})(FlightsForm);

var _default = (0, _reduxForm.reduxForm)({
  form: 'flightsForm',
  validate,
  initialValues: {
    trip_type: _TripType.default.ROUND_TRIP,
    flight_details: [{}]
  },
  enableReinitialize: true
})(FlightsConnectedForm);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/flights/index.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/flights/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _Banner = _interopRequireDefault(__webpack_require__(/*! ./Banner */ "./app-v2/modules/flights/Banner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const wrapper = props => _react.default.createElement("div", null, _react.default.createElement("div", {
  className: "pt24 pb24 text-center sbcw mt8 at_tripEssentialsCard"
}, _react.default.createElement("h3", {
  className: "f20 fw9 pfc3 mb8"
}, "Your Trip ", _react.default.createElement("span", {
  className: "pfc1"
}, "Essentials")), _react.default.createElement("p", {
  className: "f14 pr24 pl24"
}, "Value Added Services for a hassle-free ", _react.default.createElement("br", null), " Travel Experience")), _react.default.createElement(_Banner.default, props));

const container = (0, _reactRedux.connect)(state => ({
  flightsData: (0, _get2.default)(state, 'flights.flightsData', [])
}))(wrapper);
var _default = container;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/components/DatePicker.js":
/*!*************************************************************!*\
  !*** ./app-v2/modules/preferences/components/DatePicker.js ***!
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

var _reactDatepicker = _interopRequireDefault(__webpack_require__(/*! react-datepicker */ "react-datepicker"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

__webpack_require__(/*! components/DatePicker/DatePicker.scss */ "./app/components/DatePicker/DatePicker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DatePicker = ({
  input,
  label,
  placeholder,
  calendarClassName,
  meta: {
    touched,
    error
  }
}) => _react.default.createElement("div", {
  className: "col-md-6 col-sm-6 at_editdate"
}, label ? _react.default.createElement("label", {
  htmlFor: "days",
  className: "f14 fw9 pb4 block pfc3"
}, label) : null, _react.default.createElement("div", {
  className: "input-with-icon-box"
}, _react.default.createElement("span", {
  className: "input-icon"
}, _react.default.createElement(_Icon.CalendarIcon, null)), _react.default.createElement(_reactDatepicker.default, _extends({
  popperPlacement: "auto",
  popperModifiers: {
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      // force popper to stay in viewport (even when input is scrolled out of view)
      boundariesElement: 'viewport'
    }
  },
  calendarClassName: calendarClassName,
  dateFormat: "DD MMM YYYY",
  placeholderText: placeholder
}, input, {
  value: input.value ? (0, _DateTime.format)(input.value, 'DD MMM YYYY') : null,
  minDate: new Date(),
  selected: input.value ? new Date(input.value) : null,
  onFocus: e => e.target.readOnly = true,
  onSelect: (a, e) => e.stopPropagation(),
  className: touched && error && 'input-error'
}))), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error));

DatePicker.propTypes = {
  input: _propTypes.default.object,
  label: _propTypes.default.string,
  meta: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  calendarClassName: _propTypes.default.string
};
DatePicker.defaultProps = {
  placeholder: 'Date',
  calendarClassName: ''
};
var _default = DatePicker;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/components/NumberFormatter.js":
/*!******************************************************************!*\
  !*** ./app-v2/modules/preferences/components/NumberFormatter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let NumberFormatter = (_temp = _class = class NumberFormatter extends _react.default.Component {
  constructor(props) {
    super(props);

    this.updateDaysText = e => {
      const value = parseInt(e.target.value);

      if (e.target.value === '') {
        this.props.input.onChange(e.target.value);
      } else if (value >= this.props.startValue) {
        this.props.input.onChange(value);
      }
    };
  }

  updateDays(action) {
    let newValue = 0;
    const tempValue = action === 'inc' ? 1 : -1;
    let currentValue = parseInt(this.props.input.value);

    if (isNaN(currentValue)) {
      currentValue = 1;
    }

    newValue = currentValue + tempValue;

    if (newValue >= this.props.startValue) {
      this.props.input.value = newValue;
      this.props.input.onChange(newValue);
    }
  }

  render() {
    return _react.default.createElement("div", {
      className: "clearfix p0"
    }, _react.default.createElement("div", {
      className: "daysCount relative input-with-icon-box input-two-icons"
    }, _react.default.createElement("div", {
      onClick: this.updateDays.bind(this, 'dec'),
      className: "min-date cursorP minus-icon"
    }), _react.default.createElement("input", _extends({}, this.props.input, {
      type: "number",
      placeholder: this.props.placeholder,
      className: `text-center duration ${this.props.className} ${this.props.meta.touched && this.props.meta.error && 'input-error'}`,
      onChange: e => this.updateDaysText(e)
    })), _react.default.createElement("div", {
      onClick: this.updateDays.bind(this, 'inc'),
      className: "plus-date cursorP plus-icon"
    })), this.props.meta && this.props.meta.touched && this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error));
  }

}, _class.propTypes = {
  placeholder: _propTypes.default.string,
  input: _propTypes.default.object,
  meta: _propTypes.default.object,
  startValue: _propTypes.default.number,
  className: _propTypes.default.string
}, _class.defaultProps = {
  startValue: 0,
  className: ''
}, _temp);
var _default = NumberFormatter;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/GenericModal.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/GenericModal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ "react-modal"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseIt = _glamorous.default.button({
  position: 'absolute',
  right: '5px',
  top: '0px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '2',
  overflow: 'hidden'
});

const CloseItLeft = _glamorous.default.button({
  position: 'fixed',
  left: '5px',
  top: '3px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '6',
  overflow: 'hidden'
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    width: '94%',
    maxWidth: '600px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};
const customStylesFullView = {
  content: {
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    top: 0,
    left: 0,
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    paddingTop: '50px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  }
};
let ModalComponent = (_temp = _class = class ModalComponent extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.state.isOpen && nextProps.isOpen) {
      this.openModal();
    }

    if (this.state.isOpen && nextProps.customCloseTrigger) {
      this.closeModal();
    }
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });

    if (this.props.onRequestCloseCustom) {
      this.props.onRequestCloseCustom();
    }

    document.body.style.overflow = '';
  }

  afterOpenModal() {
    this.props.onAfterModalOpen();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    this.closeModal();
  }

  render() {
    const {
      fullView,
      hasCustomClose,
      hasNoClose,
      isWhiteIcon,
      isTriggerFullView,
      customClass
    } = this.props;
    return _react.default.createElement("div", {
      className: isTriggerFullView ? 'wfull' : ''
    }, !this.props.isOpen ? _react.default.createElement("span", {
      className: "block wfull",
      onClick: this.openModal
    }, this.props.trigger) : null, _react.default.createElement(_reactModal.default, {
      isOpen: this.state.isOpen,
      onAfterOpen: this.afterOpenModal,
      onRequestClose: this.closeModal,
      style: fullView ? customStylesFullView : customStyles,
      contentLabel: "Travel Triangle Modal",
      ariaHideApp: false,
      shouldCloseOnOverlayClick: true,
      className: customClass
    }, hasCustomClose ? _react.default.createElement(CloseItLeft, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })) : _react.default.createElement(CloseIt, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })), this.props.children));
  }

}, _class.propTypes = {
  trigger: _propTypes.default.node,
  children: _propTypes.default.node.isRequired,
  onAfterModalOpen: _propTypes.default.func,
  onRequestCloseCustom: _propTypes.default.func,
  customCloseTrigger: _propTypes.default.bool,
  fullView: _propTypes.default.bool,
  hasCustomClose: _propTypes.default.bool,
  hasNoClose: _propTypes.default.bool,
  isWhiteIcon: _propTypes.default.bool,
  isTriggerFullView: _propTypes.default.bool,
  customClass: _propTypes.default.string
}, _class.defaultProps = {
  onAfterModalOpen: () => {},
  onRequestCloseCustom: () => {},
  customCloseTrigger: false,
  trigger: _react.default.createElement("button", null, "Please supply a custom trigger component"),
  fullView: false,
  hasCustomClose: false,
  hasNoClose: false,
  isWhiteIcon: false,
  isTriggerFullView: false,
  customClass: ''
}, _temp);
var _default = ModalComponent;
exports.default = _default;

/***/ }),

/***/ "./app/components/DatePicker/DatePicker.scss":
/*!***************************************************!*\
  !*** ./app/components/DatePicker/DatePicker.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mbGlnaHRzL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mbGlnaHRzL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmxpZ2h0cy9Qb3N0RmlsbGVkQmFubmVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZsaWdodHMvUHJlZmlsbGVkQmFubmVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZsaWdodHMvVHJpcFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmxpZ2h0cy9ib29rV2l0aEZsaWdodEV4cGVydC9Cb29rV2l0aEZsaWdodEV4cGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mbGlnaHRzL2Jvb2tXaXRoRmxpZ2h0RXhwZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZsaWdodHMvZm9ybS9GaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmxpZ2h0cy9mb3JtL2NvbXBvbmVudHMvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZmxpZ2h0cy9mb3JtL2NvbXBvbmVudHMvU2VsZWN0U2luZ2xlT3B0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2ZsaWdodHMvZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mbGlnaHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3ByZWZlcmVuY2VzL2NvbXBvbmVudHMvRGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9jb21wb25lbnRzL051bWJlckZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsLmpzIl0sIm5hbWVzIjpbIkJhbm5lciIsImZsaWdodHNEYXRhIiwidHJhY2tTZWdtZW50IiwidHJhY2tTZWdtZW50RXZlbnQiLCJjdGEiLCJvYmplY3QiLCJtaXNjVHlwZTEiLCJldmVudCIsIk9SR0FOSVNNX0NMSUNLRUQiLCJzZWN0aW9uIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJUaGFua1lvdUNvbnRhaW5lciIsImdsYW1vcm91cyIsImRpdiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImhhbmRsZUNsaWNrIiwiUHJlZmlsbGVkQmFubmVyIiwiT2JqZWN0IiwiZnJlZXplIiwiUk9VTkRfVFJJUCIsIk9ORV9XQVkiLCJNVUxUSUNJVFkiLCJ0cmlwVHlwZU9wdGlvbnMiLCJuYW1lIiwiaWQiLCJCb29rV2l0aEZsaWdodEV4cGVydCIsIkNvbXBvbmVudCIsInN0YXRlIiwiY2xvc2VNb2RhbCIsInN1Ym1pdHRpbmciLCJ0aW1lck9uIiwiY2xvc2VQb3B1cCIsInNldFN0YXRlIiwic2F2ZUZsaWdodERldGFpbHMiLCJkYXRhIiwicG9zdEZsaWdodERldGFpbHMiLCJjdXJyZW50VHJpcElkIiwicHJvcHMiLCJzZXRUaW1lb3V0IiwicmVxdWVzdGVkX3RyaXBfaWQiLCJ0aGVuIiwicmVuZGVyIiwiZ2V0RGVzdGluYXRpb25TZWFyY2hMaXN0IiwiZGVzdGluYXRpb25zIiwiZ2V0RmlsdGVyZWREZXN0aW5hdGlvbnMiLCJudW1iZXIiLCJkaXNwYXRjaCIsInBhcmFtcyIsIkZpZWxkc0NvbXBvbmVudCIsImhhbmRsZUZyb21Mb2NhdGlvbkNsaWNrIiwiaGFuZGxlVG9Mb2NhdGlvbkNsaWNrIiwiaGFuZGxlUmV0dXJuRGF0ZUNsaWNrIiwiaGFuZGxlU3RhcnREYXRlQ2xpY2siLCJmaWVsZHMiLCJkZXN0aW5hdGlvbkxpc3QiLCJ0cmlwVHlwZSIsIm1hcCIsImZsaWdodCIsImluZGV4IiwiYm9yZGVyQ29sb3IiLCJEcm9wZG93biIsIlRSSVBfVFlQRVMiLCJEYXRlUGlja2VyIiwiQ2hlY2tib3giLCJyZW1vdmUiLCJwdXNoIiwibWV0YSIsInN0cmluZyIsInRvZ2dsZUNoZWNrYm94Q2hhbmdlIiwidmFsdWUiLCJpbnB1dCIsImhhbmRsZU9uQ2hhbmdlIiwib25DaGFuZ2UiLCJsYWJlbCIsImRpc2FibGVkIiwiZGVmYXVsdENoZWNrZWQiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiU2VsZWN0U2luZ2xlT3B0aW9uIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlbGVjdGVkSWQiLCJvcHRpb25zIiwidG91Y2hlZCIsImVycm9yIiwib3B0aW9uIiwiRmxpZ2h0c0Zvcm0iLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJuZXdEYXRhIiwiZGF0ZXNfZmxleGlibGUiLCJmbGlnaHRfZGV0YWlscyIsIml0ZW0iLCJuZXdJdGVtIiwic3RhcnRfZGF0ZSIsInJldHVybl9kYXRlIiwidHJpcF90eXBlIiwiaGFuZGxlVHJpcFR5cGVDaGFuZ2UiLCJhIiwicmVzZXQiLCJmaW5kIiwiaSIsImNvbXBvbmVudERpZE1vdW50IiwidHJpcFR5cGVJZCIsIlNpbmdsZVNlbGVjdE9wdGlvbiIsIk51bWJlckZvcm1hdHRlciIsInZhbGlkYXRlIiwiZXJyb3JzIiwiYWR1bHRfY291bnQiLCJmbGlnaHREZXRhaWxFcnJvcnMiLCJmb3JFYWNoIiwiZmxpZ2h0RXJyb3JzIiwiZnJvbV9sb2MiLCJ0b19sb2MiLCJzZWxlY3RvciIsIkZsaWdodHNDb25uZWN0ZWRGb3JtIiwiZm9ybSIsImluaXRpYWxWYWx1ZXMiLCJlbmFibGVSZWluaXRpYWxpemUiLCJ3cmFwcGVyIiwiY29udGFpbmVyIiwicGxhY2Vob2xkZXIiLCJjYWxlbmRhckNsYXNzTmFtZSIsInByZXZlbnRPdmVyZmxvdyIsImVuYWJsZWQiLCJlc2NhcGVXaXRoUmVmZXJlbmNlIiwiYm91bmRhcmllc0VsZW1lbnQiLCJEYXRlIiwicmVhZE9ubHkiLCJzdG9wUHJvcGFnYXRpb24iLCJSZWFjdCIsInVwZGF0ZURheXNUZXh0IiwicGFyc2VJbnQiLCJzdGFydFZhbHVlIiwidXBkYXRlRGF5cyIsImFjdGlvbiIsIm5ld1ZhbHVlIiwidGVtcFZhbHVlIiwiY3VycmVudFZhbHVlIiwiaXNOYU4iLCJiaW5kIiwiY2xhc3NOYW1lIiwiQ2xvc2VJdCIsImJ1dHRvbiIsInJpZ2h0IiwicGFkZGluZyIsIm92ZXJmbG93IiwiQ2xvc2VJdExlZnQiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwiYm90dG9tIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNmb3JtIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImN1c3RvbVN0eWxlc0Z1bGxWaWV3IiwicGFkZGluZ1RvcCIsIk1vZGFsQ29tcG9uZW50IiwiaXNPcGVuIiwib3Blbk1vZGFsIiwiYWZ0ZXJPcGVuTW9kYWwiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImN1c3RvbUNsb3NlVHJpZ2dlciIsIm9uUmVxdWVzdENsb3NlQ3VzdG9tIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvbkFmdGVyTW9kYWxPcGVuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJmdWxsVmlldyIsImhhc0N1c3RvbUNsb3NlIiwiaGFzTm9DbG9zZSIsImlzV2hpdGVJY29uIiwiaXNUcmlnZ2VyRnVsbFZpZXciLCJjdXN0b21DbGFzcyIsInRyaWdnZXIiLCJjaGlsZHJlbiIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUdBLE1BQU1BLFNBQVMsQ0FBQztBQUFFQyxhQUFGO0FBQWVDO0FBQWYsQ0FBRCxLQUFtQztBQUNoRCxRQUFNQyxvQkFBb0IsQ0FBQ0MsR0FBRCxFQUFNQyxNQUFO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QUFrQixNQUFNLENBQ3ZCLENBRm1CO0FBR3BCSix3QkFBc0IsTUFBTSxDQUMzQixDQUptQjtBQUtwQkQsc0JBQW9CLEtBTEE7QUFNcEJhLFdBQVMsd0ZBTlc7QUFPcEJOLFlBQVUsS0FQVTtBQVFwQkMsa0JBQWdCLEtBUkk7QUFTcEJDLGNBQVksS0FUUTtBQVVwQkMsZUFBYSxLQVZPO0FBV3BCQyxxQkFBbUIsS0FYQztBQVlwQkMsZUFBYTtBQVpPLEM7ZUFpR1RsQixjIiwiZmlsZSI6IkZsaWdodHNCYW5uZXJBbmRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQcmVmaWxsZWRCYW5uZXIgZnJvbSAnLi9QcmVmaWxsZWRCYW5uZXInO1xuaW1wb3J0IFBvc3RmaWxsZWRCYW5uZXIgZnJvbSAnLi9Qb3N0RmlsbGVkQmFubmVyJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5cbmNvbnN0IEJhbm5lciA9ICh7IGZsaWdodHNEYXRhLCB0cmFja1NlZ21lbnQgfSkgPT4ge1xuICBjb25zdCB0cmFja1NlZ21lbnRFdmVudCA9IChjdGEsIG9iamVjdCwgbWlzY1R5cGUxKSA9PiB7XG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgc2VjdGlvbjogJ0ZsaWdodHMnLFxuICAgICAgY3RhLFxuICAgICAgb2JqZWN0LFxuICAgICAgbWlzY1R5cGUxXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RnVsbFwiIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1pbldpZHRoOiAnMTAwJScgfX0+XG4gICAgICB7XG4gICAgICAgIGZsaWdodHNEYXRhLmxlbmd0aCA/XG4gICAgICAgICAgPFBvc3RmaWxsZWRCYW5uZXIgdHJhY2tTZWdtZW50RXZlbnQ9e3RyYWNrU2VnbWVudEV2ZW50fSAvPlxuICAgICAgICAgIDogPFByZWZpbGxlZEJhbm5lciB0cmFja1NlZ21lbnRFdmVudD17dHJhY2tTZWdtZW50RXZlbnR9IC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CYW5uZXIucHJvcFR5cGVzID0ge1xuICBmbGlnaHRzRGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwiaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5leHBvcnQgY29uc3QgVGhhbmtZb3VDb250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjcpJyxcbiAgekluZGV4OiAnMTAwMicsXG5cbiAgJyYgLlRoYW5rWW91Q29udGFpbmVyTWFpbic6IHtcbiAgICB3aWR0aDogJzUwMHB4JyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuXG4gICAgJyYgLnRoYW5rc0ljb24nOiB7XG4gICAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgJyYgc3ZnJzoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgfVxuICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQm9va1dpdGhGbGlnaHRFeHBlcnQgZnJvbSAnLi9ib29rV2l0aEZsaWdodEV4cGVydCc7XG5pbXBvcnQgeyBGbGlnaHRzIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBCYW5uZXIgPSAoeyB0cmFja1NlZ21lbnRFdmVudCB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRyYWNrU2VnbWVudEV2ZW50KCdFeHBsb3JlIEJlc3QgRmxpZ2h0IFByaWNlcycpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgbTggbXQ4IHJhZGl1czIgcDE1IHB0MjQgdGV4dC1jZW50ZXIgY2FyZFNoYWRvdyBhdF9mbGlnaHRCYW5uZXIgYXRfZmxpZ2h0UG9zdEJvb2tpbmdCYW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLTQ4IHA0XCI+XG4gICAgICAgICAgPEZsaWdodHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlibG9jayBwZmMxIGYxMiBtYjhcIj5GbGlnaHRzPC9zcGFuPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZjI0IGZ3OSBwZmMzIG1iMTVcIj5Zb3VyIEZsaWdodCBSZXF1ZXN0IGlzIGluPGJyIC8+IFByb2dyZXNzIC4uLjwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBtYjI0IHByMTUgcGwyNFwiPlRoYW5rIHlvdSBmb3IgeW91ciByZXF1ZXN0LiBPdXIgZmxpZ2h0IGV4cGVydCBpcyB3b3JraW5nIGhhcmQgdG8gZGVsaXZlciB0aGUgYmVzdCBkZWFsIHRvIHlvdS48L3A+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZsaWdodHMudHJhdmVsdHJpYW5nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICBjbGFzc05hbWU9XCJpYmxvY2sgd2Z1bGwgYnRuLXNlYy1sb2FkLWZpbGxlZCB0ZXh0LWNlbnRlciBmdzcgcmVsYXRpdmUgY3Vyc29yUCByYWRpdXMyIGxpbmtXaGl0ZSBhdF9mbGlnaHRDVEFcIj5FeHBsb3JlIEJlc3QgRmxpZ2h0IFByaWNlczwvYT5cbiAgICAgICAgPEJvb2tXaXRoRmxpZ2h0RXhwZXJ0IHRyYWNrU2VnbWVudEV2ZW50PXt0cmFja1NlZ21lbnRFdmVudH0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CYW5uZXIucHJvcFR5cGVzID0ge1xuICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb29rV2l0aEZsaWdodEV4cGVydCBmcm9tICcuL2Jvb2tXaXRoRmxpZ2h0RXhwZXJ0JztcblxuaW1wb3J0IHsgRmxpZ2h0cywgR3JlZW5UaWNrSW5jbHVzaW9uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBQcmVmaWxsZWRCYW5uZXIgPSAoeyB0cmFja1NlZ21lbnRFdmVudCB9KSA9PiB7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQoJ0V4cGxvcmUgQmVzdCBGbGlnaHQgUHJpY2VzJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IG04IG10OCByYWRpdXMyIHAxNSBwdDI0IHRleHQtY2VudGVyIGNhcmRTaGFkb3cgYXRfZmxpZ2h0QmFubmVyIGF0X2ZsaWdodFByZWZpbGxlZEJhbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tNDggcDRcIj5cbiAgICAgICAgICA8RmxpZ2h0cyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWJsb2NrIHBmYzEgZjEyIG1iOFwiPkZsaWdodHM8L3NwYW4+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMjQgZnc5IHBmYzMgbWIxNVwiPkRpc2NvdmVyIEdyZWF0IEZsaWdodCBEZWFscyAmIFNhdmUgTW9yZTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImYxOCBmdzkgcGZjMyBtYjE1XCI+Q29tcGFyZSBwcmljZXMgYW5kIGJvb2sgZGlyZWN0bHk8L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4IHBiNCByZWxhdGl2ZSBwbDI0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLTE0IGlibG9jayBhYnNvbHV0ZSBsMCB0MlwiPlxuICAgICAgICAgICAgICA8R3JlZW5UaWNrSW5jbHVzaW9uIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBDb21wYXJlIHByaWNlcyBmcm9tIDcyMCBwbGF0Zm9ybXNcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjggcGI0IHJlbGF0aXZlIHBsMjRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tMTQgaWJsb2NrIGFic29sdXRlIGwwIHQyXCI+XG4gICAgICAgICAgICAgIDxHcmVlblRpY2tJbmNsdXNpb24gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIEdldCBiZXN0IGFuZCBjaGVhcGVzdCBkZWFsc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iOCBwYjQgcmVsYXRpdmUgcGwyNFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi0xNCBpYmxvY2sgYWJzb2x1dGUgbDAgdDJcIj5cbiAgICAgICAgICAgICAgPEdyZWVuVGlja0luY2x1c2lvbiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgQm9vayBpbnN0YW50bHlcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mbGlnaHRzLnRyYXZlbHRyaWFuZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgY2xhc3NOYW1lPVwiaWJsb2NrIHdmdWxsIGJ0bi1zZWMtbG9hZC1maWxsZWQgdGV4dC1jZW50ZXIgZnc3IHJlbGF0aXZlIGN1cnNvclAgcmFkaXVzMiBsaW5rV2hpdGUgbXQ0IGF0X2ZsaWdodENUQVwiPkV4cGxvcmUgQmVzdCBGbGlnaHQgUHJpY2VzPC9hPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQxNSBtYjE1XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0IGFic29sdXRlLWNlbnRlci12IGwwIHdmdWxsIHoxXCIvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiejIgcmVsYXRpdmUgZjE2IGZ3OSBwZmM0IHc0MCBoNDAgcmFkaXVzMTAwIGJvcmRlciBzYmN3IGZsZXgganVzdGlmeUNlbnRlciBhbGlnbkNlbnRlclwiPk9SPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmMTggZnc5IHBmYzMgbWIxNVwiPkNvbm5lY3Qgd2l0aCBvdXIgZmxpZ2h0IGV4cGVydDwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjggcGI0IHJlbGF0aXZlIHBsMjRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tMTQgaWJsb2NrIGFic29sdXRlIGwwIHQyXCI+XG4gICAgICAgICAgICAgIDxHcmVlblRpY2tJbmNsdXNpb24gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIEdldCBiZXN0IHF1b3RlcyBmcm9tIG91ciBhZ2VudHNcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjggcGI0IHJlbGF0aXZlIHBsMjRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tMTQgaWJsb2NrIGFic29sdXRlIGwwIHQyXCI+XG4gICAgICAgICAgICAgIDxHcmVlblRpY2tJbmNsdXNpb24gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIEN1c3RvbWl6ZSBmb3Igc3BlY2lhbCBuZWVkc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iOCByZWxhdGl2ZSBwbDI0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLTE0IGlibG9jayBhYnNvbHV0ZSBsMCB0MlwiPlxuICAgICAgICAgICAgICA8R3JlZW5UaWNrSW5jbHVzaW9uIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBHZXQgY2hlYXBlc3QgcHJpY2VzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJvb2tXaXRoRmxpZ2h0RXhwZXJ0IHRyYWNrU2VnbWVudEV2ZW50PXt0cmFja1NlZ21lbnRFdmVudH0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QcmVmaWxsZWRCYW5uZXIucHJvcFR5cGVzID0ge1xuICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlZmlsbGVkQmFubmVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIFJPVU5EX1RSSVA6ICdyb3VuZF90cmlwJyxcbiAgT05FX1dBWTogJ29uZV93YXknLFxuICBNVUxUSUNJVFk6ICdtdWx0aV9jaXR5Jyxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGbGlnaHRzRm9ybSBmcm9tICcuLi9mb3JtL2luZGV4JztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuXG5pbXBvcnQge0lsbHVzUmVxdWVzdENhbGxiYWNrfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmltcG9ydCB7IFRoYW5rWW91Q29udGFpbmVyIH0gZnJvbSAnLi4vRyc7XG5cbmNvbnN0IHRyaXBUeXBlT3B0aW9ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdSb3VuZCBUcmlwJyxcbiAgICBpZDogJ3JvdW5kX3RyaXAnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT25lIFdheScsXG4gICAgaWQ6ICdvbmVfd2F5J1xuICB9LFxuICB7XG4gICAgbmFtZTogJ011bHRpY2l0eScsXG4gICAgaWQ6ICdtdWx0aV9jaXR5J1xuICB9XG5dO1xuXG5jbGFzcyBCb29rV2l0aEZsaWdodEV4cGVydCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IGNsb3NlTW9kYWw6IHRydWUsIHN1Ym1pdHRpbmc6IGZhbHNlLCB0aW1lck9uOiBmYWxzZSB9O1xuXG4gIGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IHRydWUgfSk7XG4gIH07XG5cbiAgc2F2ZUZsaWdodERldGFpbHMgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgcG9zdEZsaWdodERldGFpbHMsIGN1cnJlbnRUcmlwSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IHRydWUsIHRpbWVyT246IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGltZXJPbjogZmFsc2UgfSk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuIHBvc3RGbGlnaHREZXRhaWxzKHsgLi4uZGF0YSwgcmVxdWVzdGVkX3RyaXBfaWQ6IGN1cnJlbnRUcmlwSWQgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFja1NlZ21lbnRFdmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogZmFsc2UgfSk7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQoJ0Jvb2sgV2l0aCBPdXIgRmxpZ2h0IEV4cGVydCcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdldERlc3RpbmF0aW9uU2VhcmNoTGlzdCwgZGVzdGluYXRpb25zLCBnZXRGaWx0ZXJlZERlc3RpbmF0aW9ucywgdHJhY2tTZWdtZW50RXZlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdWJtaXR0aW5nLCBjbG9zZU1vZGFsLCB0aW1lck9uIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNb2RhbCBmdWxsVmlldz17dHJ1ZX0gaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgICAgICB0cmlnZ2VyPXs8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1zZWMtbG9hZCBtdDggd2Z1bGwgYXRfZmxpZ2h0Rm9ybUNUQVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkJvb2sgd2l0aCBPdXIgRmxpZ2h0IEV4cGVydDwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgIGN1c3RvbUNsb3NlVHJpZ2dlcj17Y2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tPXt0aGlzLmNsb3NlUG9wdXB9XG4gICAgICAgID5cbiAgICAgICAgICA8RmxpZ2h0c0Zvcm1cbiAgICAgICAgICAgIGdldERlc3RpbmF0aW9uU2VhcmNoTGlzdD17Z2V0RGVzdGluYXRpb25TZWFyY2hMaXN0fVxuICAgICAgICAgICAgdHJpcFR5cGVPcHRpb25zPXt0cmlwVHlwZU9wdGlvbnN9XG4gICAgICAgICAgICBkZXN0aW5hdGlvbkxpc3Q9e2Rlc3RpbmF0aW9uc31cbiAgICAgICAgICAgIGdldEZpbHRlcmVkRGVzdGluYXRpb25zPXtnZXRGaWx0ZXJlZERlc3RpbmF0aW9uc31cbiAgICAgICAgICAgIHNhdmVGbGlnaHREZXRhaWxzPXt0aGlzLnNhdmVGbGlnaHREZXRhaWxzfVxuICAgICAgICAgICAgdHJhY2tTZWdtZW50RXZlbnQ9e3RyYWNrU2VnbWVudEV2ZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgIHsgKHN1Ym1pdHRpbmcgfHwgdGltZXJPbikgP1xuICAgICAgICAgIDxUaGFua1lvdUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGhhbmtZb3VDb250YWluZXJNYWluIGFic29sdXRlLWNlbnRlciBwMTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjbGVhcmZpeCB3ZnVsbCBpYmxvY2sgcDMyIHB0MjQgc2Jjd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhhbmtzSWNvbiBtYjE1XCI+XG4gICAgICAgICAgICAgICAgICA8SWxsdXNSZXF1ZXN0Q2FsbGJhY2sgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZjI0IGZ3OSBwZmMxIG1iNFwiPlRoYW5rIFlvdSE8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBwZmMzXCI+V2Ugd2lsbCByZWFjaCBvdXQgdG8geW91IHdpdGhpbiAyNCBob3Vycy48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UaGFua1lvdUNvbnRhaW5lcj5cbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApOztcbiAgfVxufVxuXG5Cb29rV2l0aEZsaWdodEV4cGVydC5wcm9wVHlwZXMgPSB7XG4gIGdldERlc3RpbmF0aW9uU2VhcmNoTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0RmlsdGVyZWREZXN0aW5hdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRlc3RpbmF0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHBvc3RGbGlnaHREZXRhaWxzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjdXJyZW50VHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb29rV2l0aEZsaWdodEV4cGVydDtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0JztcblxuaW1wb3J0IEJvb2tXaXRoRmxpZ2h0RXhwZXJ0IGZyb20gJy4vQm9va1dpdGhGbGlnaHRFeHBlcnQnO1xuaW1wb3J0IHsgZ2V0RGVzdGluYXRpb25TZWFyY2hMaXN0LCBnZXRGaWx0ZXJlZERlc3RpbmF0aW9ucywgcG9zdEZsaWdodERldGFpbHMgfSBmcm9tICcuLi9hY3Rpb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgZGVzdGluYXRpb25zOiBfZ2V0KHN0YXRlLCAnZmxpZ2h0cy5kZXN0aW5hdGlvbnMnLCBbXSksXG4gICAgY3VycmVudFRyaXBJZDogX2dldChzdGF0ZSwgJ3RyaXAuY3VycmVudFRyaXAuZGF0YS5pZCcsIDApXG4gIH0pLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGdldERlc3RpbmF0aW9uU2VhcmNoTGlzdDogKCkgPT4gZGlzcGF0Y2goZ2V0RGVzdGluYXRpb25TZWFyY2hMaXN0KCkpLFxuICAgIGdldEZpbHRlcmVkRGVzdGluYXRpb25zOiAocGFyYW1zKSA9PiBkaXNwYXRjaChnZXRGaWx0ZXJlZERlc3RpbmF0aW9ucyhwYXJhbXMpKSxcbiAgICBwb3N0RmxpZ2h0RGV0YWlsczogKHBhcmFtcykgPT4gZGlzcGF0Y2gocG9zdEZsaWdodERldGFpbHMocGFyYW1zKSlcbiAgfSlcbikoQm9va1dpdGhGbGlnaHRFeHBlcnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9jb21wb25lbnRzL0Ryb3Bkb3duJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ21vZHVsZXMvcHJlZmVyZW5jZXMvY29tcG9uZW50cy9EYXRlUGlja2VyJztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IHsgRmxpZ2h0LCBTb3J0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBUUklQX1RZUEVTIGZyb20gJ21vZHVsZXMvZmxpZ2h0cy9UcmlwVHlwZSc7XG5cbmNsYXNzIEZpZWxkc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcblxuICBoYW5kbGVGcm9tTG9jYXRpb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudEV2ZW50KCdGcm9tJywgJ09mZmxpbmUgZm9ybScpO1xuICB9O1xuXG4gIGhhbmRsZVRvTG9jYXRpb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudEV2ZW50KCdUbycsICdPZmZsaW5lIGZvcm0nKTtcbiAgfTtcblxuICBoYW5kbGVSZXR1cm5EYXRlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnRFdmVudCgnRGF0ZScsICdPZmZsaW5lIGZvcm0nLCAnUmV0dXJuIERhdGUnKTtcbiAgfTtcblxuICBoYW5kbGVTdGFydERhdGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudEV2ZW50KCdEYXRlJywgJ09mZmxpbmUgZm9ybScsICdTdGFydCBEYXRlJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmllbGRzLCBkZXN0aW5hdGlvbkxpc3QsIGdldEZpbHRlcmVkRGVzdGluYXRpb25zLCB0cmlwVHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2ZpZWxkcy5tYXAoKGZsaWdodCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleERDb2x1bW5cIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyLWggejQgYm9yZGVyIHJhZGl1czEwMCBwOCBzYmN3XCIgc3R5bGU9e3tib3JkZXJDb2xvcjogJyNCMkIyQjInLCB0b3A6ICc0MHB4J319PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaWNvbi0xNFwiPlxuICAgICAgICAgICAgICAgICAgPFNvcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcmVsYXRpdmUgYXRfZnJvbV9sb2NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHQxMCBtdDIgbDhcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmxpZ2h0Lz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT17YCR7ZmxpZ2h0fS5mcm9tX2xvY2B9XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0Ryb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGVzdGluYXRpb25MaXN0fVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9ucz17Z2V0RmlsdGVyZWREZXN0aW5hdGlvbnN9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZyb21cIlxuICAgICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0aGlzLmhhbmRsZUZyb21Mb2NhdGlvbkNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcmVsYXRpdmUgYXRfdG9fbG9jXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0MTAgbXQyIGw4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdGF0ZTkwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGlnaHQvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT17YCR7ZmxpZ2h0fS50b19sb2NgfVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Rlc3RpbmF0aW9uTGlzdH1cbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbnM9e2dldEZpbHRlcmVkRGVzdGluYXRpb25zfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb1wiXG4gICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnQ9e3RoaXMuaGFuZGxlVG9Mb2NhdGlvbkNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBtYjMgJHsodHJpcFR5cGUgPT09IFRSSVBfVFlQRVMuUk9VTkRfVFJJUCkgPyAnaW5wdXRHcm91cCc6ICcnfWB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwgaW5wdXRCb3gnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT17YCR7ZmxpZ2h0fS5zdGFydF9kYXRlYH1cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGF0ZVBpY2tlcn1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnQgRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBjYWxlbmRhckNsYXNzTmFtZT1cIm5vX2Fycm93XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeyAodHJpcFR5cGUgPT09IFRSSVBfVFlQRVMuUk9VTkRfVFJJUCkgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4RnVsbCBpbnB1dEJveCcgb25DbGljaz17dGhpcy5oYW5kbGVSZXR1cm5EYXRlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2Ake2ZsaWdodH0ucmV0dXJuX2RhdGVgfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVQaWNrZXJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXR1cm4gRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyQ2xhc3NOYW1lPVwibm9fYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblxuICAgICAgICAgICAgICB7IGluZGV4ID8gIG51bGwgOiA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIG1iOFwiPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGVzX2ZsZXhpYmxlXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3h9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgTm90IEZpeGVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj4gfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RnVsbCBhbGlnbkNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtpbmRleCA/XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGZjMiBmMTQgZnc3IG1iOCBwcjQ4IHB0OCBwYjhcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5yZW1vdmUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgKCh0cmlwVHlwZSA9PT0gVFJJUF9UWVBFUy5NVUxUSUNJVFkpICYmIGluZGV4ID09PSBmaWVsZHMubGVuZ3RoLTEpID9cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZmxleCBqdXN0aWZ5RW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInNmYzEgZjE0IGZ3NyBtYjggcGw0OCBwdDggcGI4XCIgb25DbGljaz17KCkgPT4gZmllbGRzLnB1c2goe30pfT5cbiAgICAgICAgICAgICAgICAgICAgICArIEFkZCBDaXR5XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmllbGRzQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgZGVzdGluYXRpb25MaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZ2V0RmlsdGVyZWREZXN0aW5hdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZpZWxkczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG1ldGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJpcFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZHNDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHRvZ2dsZUNoZWNrYm94Q2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dCwgaGFuZGxlT25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaW5wdXQub25DaGFuZ2UodmFsdWUpO1xuICAgIGhhbmRsZU9uQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgaW5wdXQsIGRpc2FibGVkLCBkZWZhdWx0Q2hlY2tlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAwIG9wdGlvbi1vdmVyZmxvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD17YGZpbHRlcl8ke2lucHV0Lm5hbWV9XyR7aW5wdXQudmFsdWV9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtkZWZhdWx0Q2hlY2tlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JyZWFrLWFsbCcgaHRtbEZvcj17YGZpbHRlcl8ke2lucHV0Lm5hbWV9XyR7aW5wdXQudmFsdWV9YH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlT25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVPbkNoYW5nZTogKCkgPT4ge30sXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0U2luZ2xlT3B0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkSWQ6IHByb3BzLmlucHV0LnZhbHVlID8gcHJvcHMuaW5wdXQudmFsdWUgOlxuICAgICAgcHJvcHMub3B0aW9ucy5sZW5ndGggPyBwcm9wcy5vcHRpb25zWzBdLmlkIDogbnVsbCB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG1ldGE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGlucHV0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZElkOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5wdXQsIG9wdGlvbnMsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkSWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iMjQgZmxleCBzcGFjZUJldHdlZW4nPlxuICAgICAgICB7b3B0aW9ucy5sZW5ndGhcbiAgICAgICAgICA/IG9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgcGw0IHByNCB3aWxsLWJvb2stY29uLW9wdGlvbnNcIiBrZXk9e29wdGlvbi5pZH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPXtpbnB1dC5uYW1lfVxuICAgICAgICAgICAgICAgIGlkPXtgc2luZ2xlX3NlbGVjdF8ke29wdGlvbi5pZH1gfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9uLmlkID09PSBzZWxlY3RlZElkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BzaW5nbGVfc2VsZWN0XyR7b3B0aW9uLmlkfWB9IGNsYXNzTmFtZT1cImN1cnNvclBcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMFwiPntvcHRpb24ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHRvdWNoZWQgJiZcbiAgICAgICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGaWVsZCwgZm9ybVZhbHVlU2VsZWN0b3IsIHJlZHV4Rm9ybSwgRmllbGRBcnJheSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgU2luZ2xlU2VsZWN0T3B0aW9uIGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3RTaW5nbGVPcHRpb24nO1xuaW1wb3J0IE51bWJlckZvcm1hdHRlciBmcm9tICdtb2R1bGVzL3ByZWZlcmVuY2VzL2NvbXBvbmVudHMvTnVtYmVyRm9ybWF0dGVyJztcbmltcG9ydCBGaWVsZHNDb21wb25lbnQgZnJvbSAnLi9GaWVsZHMnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnaGVscGVycy9EYXRlVGltZSc7XG5pbXBvcnQgVFJJUF9UWVBFUyBmcm9tICdtb2R1bGVzL2ZsaWdodHMvVHJpcFR5cGUnO1xuXG5jbGFzcyBGbGlnaHRzRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXREZXN0aW5hdGlvblNlYXJjaExpc3QoKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zdCB7IHNhdmVGbGlnaHREZXRhaWxzLCB0cmFja1NlZ21lbnRFdmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgZGF0ZXNfZmxleGlibGU6IHZhbHVlcy5kYXRlc19mbGV4aWJsZSB8fCBmYWxzZSxcbiAgICAgIGZsaWdodF9kZXRhaWxzOiB2YWx1ZXMuZmxpZ2h0X2RldGFpbHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7IC4uLml0ZW19O1xuICAgICAgICBuZXdJdGVtLnN0YXJ0X2RhdGUgPSBmb3JtYXQoaXRlbS5zdGFydF9kYXRlLCAnREQtTU0tWVlZWScpO1xuICAgICAgICBuZXdJdGVtLnJldHVybl9kYXRlID0gdmFsdWVzLnRyaXBfdHlwZSA9PT0gVFJJUF9UWVBFUy5ST1VORF9UUklQID9cbiAgICAgICAgICBmb3JtYXQoaXRlbS5yZXR1cm5fZGF0ZSwgJ0RELU1NLVlZWVknKSA6ICcnO1xuICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRyYWNrU2VnbWVudEV2ZW50KCdHZXQgUXVvdGUnLCAnT2ZmbGluZSBGb3JtJyk7XG4gICAgcmV0dXJuIHNhdmVGbGlnaHREZXRhaWxzKG5ld0RhdGEpO1xuICB9O1xuXG4gIGhhbmRsZVRyaXBUeXBlQ2hhbmdlID0gKGEsdmFsdWUpID0+IHtcbiAgICBjb25zdCB7IHRyaXBUeXBlT3B0aW9ucywgdHJhY2tTZWdtZW50RXZlbnQsIHJlc2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRyaXBUeXBlID0gdHJpcFR5cGVPcHRpb25zLmZpbmQoaSA9PiBpLmlkID09PSB2YWx1ZSk7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQoJ1RyaXAgVHlwZScsICdPZmZsaW5lIEZvcm0nLCB0cmlwVHlwZS5uYW1lKTtcbiAgICByZXNldCgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN1Ym1pdHRpbmcsIGhhbmRsZVN1Ym1pdCwgdHJpcFR5cGVJZCwgdHJpcFR5cGVPcHRpb25zLFxuICAgICAgZGVzdGluYXRpb25MaXN0LCBnZXRGaWx0ZXJlZERlc3RpbmF0aW9ucywgdHJhY2tTZWdtZW50RXZlbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB3ZnVsbCB0MCBsMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwOCBmbGV4IGJiIHdmdWxsIGZpeGVkIHo1IHNiY3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDQgZmxleEZ1bGxcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZsZXggYWxpZ25DZW50ZXIgZnc3IGZsZXhGdWxsIGVsbGlwc2lzIG1sMjRcIj5Db21wYXJlICYgQm9vayBDaGVhcGVzdCBGbGlnaHRzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQodGhpcy5oYW5kbGVTdWJtaXQpfT5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHB0MjQgcGI2NCBmbGV4IGZsZXhEQ29sdW1uXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgIG5hbWU9XCJ0cmlwX3R5cGVcIlxuICAgICAgICAgICAgICAgY29tcG9uZW50PXtTaW5nbGVTZWxlY3RPcHRpb259XG4gICAgICAgICAgICAgICBvcHRpb25zPXt0cmlwVHlwZU9wdGlvbnN9XG4gICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUcmlwVHlwZUNoYW5nZX1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgICAgIDxGaWVsZEFycmF5XG4gICAgICAgICAgICAgIG5hbWU9XCJmbGlnaHRfZGV0YWlsc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RmllbGRzQ29tcG9uZW50fVxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbkxpc3Q9e2Rlc3RpbmF0aW9uTGlzdH1cbiAgICAgICAgICAgICAgZ2V0RmlsdGVyZWREZXN0aW5hdGlvbnM9e2dldEZpbHRlcmVkRGVzdGluYXRpb25zfVxuICAgICAgICAgICAgICB0cmlwVHlwZT17dHJpcFR5cGVJZH1cbiAgICAgICAgICAgICAgdHJhY2tTZWdtZW50RXZlbnQ9e3RyYWNrU2VnbWVudEV2ZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhGdWxsIG1iMTUnPlxuICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgbmFtZT1cImFkdWx0X2NvdW50XCJcbiAgICAgICAgICAgICAgIGNvbXBvbmVudD17TnVtYmVyRm9ybWF0dGVyfVxuICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkdWx0cyAoMTIrIHlycylcIlxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4RnVsbCBtYjE1Jz5cbiAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgIG5hbWU9XCJjaGlsZF9jb3VudFwiXG4gICAgICAgICAgICAgICBjb21wb25lbnQ9e051bWJlckZvcm1hdHRlcn1cbiAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaGlsZHJlbiAoMi0xMiB5cnMpXCJcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwgbWIxNSc+XG4gICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICBuYW1lPVwiaW5mYW50X2NvdW50XCJcbiAgICAgICAgICAgICAgIGNvbXBvbmVudD17TnVtYmVyRm9ybWF0dGVyfVxuICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZmFudHMgKDAtMiB5cnMpXCJcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBiMCBsMCByMCBiczQgejEwIHA4IGJ0IHNiY3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nfSBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCByaXBwbGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlXCIgLz5cbiAgICAgICAgICAgICAgR2V0IFF1b3RlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcykgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgaWYgKCF2YWx1ZXMuYWR1bHRfY291bnQpe1xuICAgIGVycm9ycy5hZHVsdF9jb3VudCA9ICdQbGVhc2UgZW50ZXIgbnVtYmVyIG9mIGFkdWx0cyc7XG4gIH1cbiAgY29uc3QgZmxpZ2h0RGV0YWlsRXJyb3JzID0gW107XG4gIHZhbHVlcy5mbGlnaHRfZGV0YWlscyAmJiB2YWx1ZXMuZmxpZ2h0X2RldGFpbHMuZm9yRWFjaCgoZmxpZ2h0LCBpbmRleCkgPT57XG4gICAgY29uc3QgZmxpZ2h0RXJyb3JzID0ge307XG4gICAgaWYgKCFmbGlnaHQuZnJvbV9sb2MpIHtcbiAgICAgIGZsaWdodEVycm9ycy5mcm9tX2xvYyA9ICdQbGVhc2UgZW50ZXIgZnJvbSBjaXR5JztcbiAgICB9XG4gICAgaWYgKCFmbGlnaHQudG9fbG9jKSB7XG4gICAgICBmbGlnaHRFcnJvcnMudG9fbG9jID0gJ1BsZWFzZSBlbnRlciB0byBjaXR5JztcbiAgICB9XG4gICAgaWYgKCFmbGlnaHQuc3RhcnRfZGF0ZSkge1xuICAgICAgZmxpZ2h0RXJyb3JzLnN0YXJ0X2RhdGUgPSAnUGxlYXNlIGVudGVyIHN0YXJ0IGRhdGUnO1xuICAgIH1cbiAgICBpZiAodmFsdWVzLnRyaXBfdHlwZSA9PT0gJ3JvdW5kX3RyaXAnICYmICFmbGlnaHQucmV0dXJuX2RhdGUpIHtcbiAgICAgIGZsaWdodEVycm9ycy5yZXR1cm5fZGF0ZSA9ICdQbGVhc2UgZW50ZXIgcmV0dXJuIGRhdGUnO1xuICAgIH1cbiAgICBpZiAodmFsdWVzLnRyaXBfdHlwZSA9PT0gJ3JvdW5kX3RyaXAnICYmIGZsaWdodC5yZXR1cm5fZGF0ZSAmJiBmbGlnaHQucmV0dXJuX2RhdGVcbiAgICAgICYmIChmbGlnaHQuc3RhcnRfZGF0ZSA+IGZsaWdodC5yZXR1cm5fZGF0ZSlcbiAgICApIHtcbiAgICAgIGZsaWdodEVycm9ycy5yZXR1cm5fZGF0ZSA9ICdSZXR1cm4gZGF0ZSBzaG91bGQgYmUgYWZ0ZXIgc3RhcnQgZGF0ZSc7XG4gICAgfVxuICAgIGlmIChmbGlnaHQudG9fbG9jICYmIChmbGlnaHQuZnJvbV9sb2MgPT09IGZsaWdodC50b19sb2MpKSB7XG4gICAgICBmbGlnaHRFcnJvcnMudG9fbG9jID0gJ0Zyb20gQ2l0eSBhbmQgVG8gQ2l0eSBjYW5ub3QgYmUgc2FtZSc7XG4gICAgfVxuICAgIGZsaWdodERldGFpbEVycm9yc1tpbmRleF0gPSBmbGlnaHRFcnJvcnM7XG4gIH0pO1xuICBpZiAoZmxpZ2h0RGV0YWlsRXJyb3JzLmxlbmd0aCkge1xuICAgIGVycm9ycy5mbGlnaHRfZGV0YWlscyA9IGZsaWdodERldGFpbEVycm9ycztcbiAgfVxuICByZXR1cm4gZXJyb3JzO1xufTtcblxuRmxpZ2h0c0Zvcm0ucHJvcFR5cGVzID0ge1xuICB0cmlwVHlwZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgc3VibWl0dGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmlwVHlwZUlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGdldERlc3RpbmF0aW9uU2VhcmNoTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGVzdGluYXRpb25MaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZ2V0RmlsdGVyZWREZXN0aW5hdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVGbGlnaHREZXRhaWxzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5GbGlnaHRzRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyaXBUeXBlT3B0aW9uczogW11cbn07XG5cbmNvbnN0IHNlbGVjdG9yID0gZm9ybVZhbHVlU2VsZWN0b3IoJ2ZsaWdodHNGb3JtJyk7XG5cbmNvbnN0IEZsaWdodHNDb25uZWN0ZWRGb3JtID0gY29ubmVjdCgoc3RhdGUpID0+IHtcbiAgY29uc3QgdHJpcFR5cGVJZCA9IHNlbGVjdG9yKHN0YXRlLCAndHJpcF90eXBlJyk7XG4gIHJldHVybiB7IHRyaXBUeXBlSWQgfTtcbn0pKEZsaWdodHNGb3JtKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ2ZsaWdodHNGb3JtJyxcbiAgdmFsaWRhdGUsXG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICB0cmlwX3R5cGU6IFRSSVBfVFlQRVMuUk9VTkRfVFJJUCxcbiAgICBmbGlnaHRfZGV0YWlsczogW3t9XVxuICB9LFxuICBlbmFibGVSZWluaXRpYWxpemU6IHRydWVcbn0pKEZsaWdodHNDb25uZWN0ZWRGb3JtKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbmltcG9ydCBCYW5uZXIgZnJvbSAnLi9CYW5uZXInO1xuXG5jb25zdCB3cmFwcGVyID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdDI0IHBiMjQgdGV4dC1jZW50ZXIgc2JjdyBtdDggYXRfdHJpcEVzc2VudGlhbHNDYXJkXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZjIwIGZ3OSBwZmMzIG1iOFwiPllvdXIgVHJpcCA8c3BhbiBjbGFzc05hbWU9XCJwZmMxXCI+RXNzZW50aWFsczwvc3Bhbj48L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IHByMjQgcGwyNFwiPlZhbHVlIEFkZGVkIFNlcnZpY2VzIGZvciBhIGhhc3NsZS1mcmVlIDxiciAvPiBUcmF2ZWwgRXhwZXJpZW5jZTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8QmFubmVyIHsgLi4ucHJvcHN9IC8+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgY29udGFpbmVyID0gY29ubmVjdChcbnN0YXRlID0+ICh7XG4gIGZsaWdodHNEYXRhOiBfZ2V0KHN0YXRlLCAnZmxpZ2h0cy5mbGlnaHRzRGF0YScsIFtdKVxufSkpKHdyYXBwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XG5cbmltcG9ydCB7IENhbGVuZGFySWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0ICdjb21wb25lbnRzL0RhdGVQaWNrZXIvRGF0ZVBpY2tlci5zY3NzJztcblxuY29uc3QgRGF0ZVBpY2tlciA9ICh7IGlucHV0LCBsYWJlbCwgcGxhY2Vob2xkZXIsIGNhbGVuZGFyQ2xhc3NOYW1lLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGF0X2VkaXRkYXRlXCI+XG4gICAge1xuICAgICAgbGFiZWwgPyA8bGFiZWwgaHRtbEZvcj1cImRheXNcIiBjbGFzc05hbWU9XCJmMTQgZnc5IHBiNCBibG9jayBwZmMzXCI+e2xhYmVsfTwvbGFiZWw+IDogbnVsbFxuICAgIH1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdpdGgtaWNvbi1ib3hcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWljb25cIj48Q2FsZW5kYXJJY29uIC8+PC9zcGFuPlxuICAgICAgPFJlYWN0RGF0ZVBpY2tlclxuICAgICAgICBwb3BwZXJQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgICAgcG9wcGVyTW9kaWZpZXJzPXt7XG4gICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgZXNjYXBlV2l0aFJlZmVyZW5jZTogZmFsc2UsIC8vIGZvcmNlIHBvcHBlciB0byBzdGF5IGluIHZpZXdwb3J0IChldmVuIHdoZW4gaW5wdXQgaXMgc2Nyb2xsZWQgb3V0IG9mIHZpZXcpXG4gICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0J1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgY2FsZW5kYXJDbGFzc05hbWU9e2NhbGVuZGFyQ2xhc3NOYW1lfVxuICAgICAgICBkYXRlRm9ybWF0PVwiREQgTU1NIFlZWVlcIlxuICAgICAgICBwbGFjZWhvbGRlclRleHQ9e3BsYWNlaG9sZGVyfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHZhbHVlPXtpbnB1dC52YWx1ZSA/IGZvcm1hdChpbnB1dC52YWx1ZSwgJ0REIE1NTSBZWVlZJyk6IG51bGx9XG4gICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIHNlbGVjdGVkPXtpbnB1dC52YWx1ZSA/IG5ldyBEYXRlKGlucHV0LnZhbHVlKSA6IG51bGx9XG4gICAgICAgIG9uRm9jdXM9eyhlKSA9PiBlLnRhcmdldC5yZWFkT25seSA9IHRydWV9XG4gICAgICAgIG9uU2VsZWN0PXsoYSwgZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgY2xhc3NOYW1lPXt0b3VjaGVkICYmIChlcnJvciAmJiAnaW5wdXQtZXJyb3InKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAge1xuICAgICAgdG91Y2hlZCAmJlxuICAgICAgKGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57ZXJyb3J9PC9zcGFuPilcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNhbGVuZGFyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2Vob2xkZXI6ICdEYXRlJyxcbiAgY2FsZW5kYXJDbGFzc05hbWU6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIE51bWJlckZvcm1hdHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0YXJ0VmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdGFydFZhbHVlOiAwLFxuICAgIGNsYXNzTmFtZTogJydcbiAgfTtcblxuICB1cGRhdGVEYXlzKGFjdGlvbikge1xuICAgIGxldCBuZXdWYWx1ZSA9IDA7XG4gICAgY29uc3QgdGVtcFZhbHVlID0gYWN0aW9uID09PSAnaW5jJyA/IDEgOiAtMTtcbiAgICBsZXQgY3VycmVudFZhbHVlID0gcGFyc2VJbnQodGhpcy5wcm9wcy5pbnB1dC52YWx1ZSk7XG4gICAgaWYgKGlzTmFOKGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IDE7XG4gICAgfVxuICAgIG5ld1ZhbHVlID0gY3VycmVudFZhbHVlICsgdGVtcFZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA+PSB0aGlzLnByb3BzLnN0YXJ0VmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURheXNUZXh0ID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0Lm9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUgPj0gdGhpcy5wcm9wcy5zdGFydFZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0Lm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF5c0NvdW50IHJlbGF0aXZlIGlucHV0LXdpdGgtaWNvbi1ib3ggaW5wdXQtdHdvLWljb25zXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnVwZGF0ZURheXMuYmluZCh0aGlzLCAnZGVjJyl9IGNsYXNzTmFtZT1cIm1pbi1kYXRlIGN1cnNvclAgbWludXMtaWNvblwiIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5pbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWNlbnRlciBkdXJhdGlvbiAke3RoaXMucHJvcHMuY2xhc3NOYW1lfSAke3RoaXMucHJvcHMubWV0YS50b3VjaGVkICYmICh0aGlzLnByb3BzLm1ldGEuZXJyb3IgJiYgJ2lucHV0LWVycm9yJyl9YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVEYXlzVGV4dChlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy51cGRhdGVEYXlzLmJpbmQodGhpcywgJ2luYycpfSBjbGFzc05hbWU9XCJwbHVzLWRhdGUgY3Vyc29yUCBwbHVzLWljb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubWV0YVxuICAgICAgICAgICYmIHRoaXMucHJvcHMubWV0YS50b3VjaGVkXG4gICAgICAgICAgJiYgKHRoaXMucHJvcHMubWV0YS5lcnJvclxuICAgICAgICAgICAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPnt0aGlzLnByb3BzLm1ldGEuZXJyb3J9PC9zcGFuPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGb3JtYXR0ZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBDbG9zZURhcmssIENsb3NlV2hpdGV9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgQ2xvc2VJdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgcmlnaHQ6ICc1cHgnLFxuICB0b3A6ICcwcHgnLFxuICB3aWR0aDogJzM2cHgnLFxuICBoZWlnaHQ6ICczNnB4JyxcbiAgcGFkZGluZzogJzEycHgnLFxuICB6SW5kZXg6ICcyJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxufSk7XG5cbmNvbnN0IENsb3NlSXRMZWZ0ID0gZ2xhbW9yb3VzLmJ1dHRvbih7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBsZWZ0OiAnNXB4JyxcbiAgdG9wOiAnM3B4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnNicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICc5NCUnLFxuICAgIG1heFdpZHRoOiAnNjAwcHgnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IDEwMDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjc1KSdcbiAgfSxcbn07XG5jb25zdCBjdXN0b21TdHlsZXNGdWxsVmlldyA9IHtcbiAgY29udGVudDoge1xuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICB6SW5kZXg6ICcxMDEnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZ1RvcDogJzUwcHgnXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknXG4gIH0sXG59O1xuXG5jbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0cmlnZ2VyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmdWxsVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzQ3VzdG9tQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc05vQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzV2hpdGVJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1RyaWdnZXJGdWxsVmlldzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VzdG9tQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQWZ0ZXJNb2RhbE9wZW46ICgpID0+IHtcbiAgICB9LFxuICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tOiAoKSA9PiB7XG4gICAgfSxcbiAgICBjdXN0b21DbG9zZVRyaWdnZXI6IGZhbHNlLFxuICAgIHRyaWdnZXI6IDxidXR0b24+UGxlYXNlIHN1cHBseSBhIGN1c3RvbSB0cmlnZ2VyIGNvbXBvbmVudDwvYnV0dG9uPixcbiAgICBmdWxsVmlldzogZmFsc2UsXG4gICAgaGFzQ3VzdG9tQ2xvc2U6IGZhbHNlLFxuICAgIGhhc05vQ2xvc2U6IGZhbHNlLFxuICAgIGlzV2hpdGVJY29uOiBmYWxzZSxcbiAgICBpc1RyaWdnZXJGdWxsVmlldzogZmFsc2UsXG4gICAgY3VzdG9tQ2xhc3M6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLm9wZW5Nb2RhbCA9IHRoaXMub3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsID0gdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZnRlck9wZW5Nb2RhbCA9IHRoaXMuYWZ0ZXJPcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc09wZW4gJiYgbmV4dFByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5jdXN0b21DbG9zZVRyaWdnZXIpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlQ3VzdG9tKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlQ3VzdG9tKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgfVxuXG4gIGFmdGVyT3Blbk1vZGFsKCkge1xuICAgIHRoaXMucHJvcHMub25BZnRlck1vZGFsT3BlbigpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZnVsbFZpZXcsIGhhc0N1c3RvbUNsb3NlLCBoYXNOb0Nsb3NlLCBpc1doaXRlSWNvbiwgaXNUcmlnZ2VyRnVsbFZpZXcsIGN1c3RvbUNsYXNzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNUcmlnZ2VyRnVsbFZpZXcgPyAnd2Z1bGwnOiAnJ30+XG4gICAgICAgIHshdGhpcy5wcm9wcy5pc09wZW4gP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsXCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudHJpZ2dlcn1cbiAgICAgICAgICA8L3NwYW4+IDpcbiAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBvbkFmdGVyT3Blbj17dGhpcy5hZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZU1vZGFsfVxuICAgICAgICAgIHN0eWxlPXtmdWxsVmlldyA/IGN1c3RvbVN0eWxlc0Z1bGxWaWV3IDogY3VzdG9tU3R5bGVzfVxuICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIlRyYXZlbCBUcmlhbmdsZSBNb2RhbFwiXG4gICAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjdXN0b21DbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhhc0N1c3RvbUNsb3NlID9cbiAgICAgICAgICAgICAgPENsb3NlSXRMZWZ0IG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gY2xhc3NOYW1lPXtgYXRfY2xvc2UgJHtoYXNOb0Nsb3NlID8gJ25ibG9jaycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7aXNXaGl0ZUljb24gPyA8Q2xvc2VXaGl0ZSBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+IDogPENsb3NlRGFyayBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+fVxuICAgICAgICAgICAgICA8L0Nsb3NlSXRMZWZ0PiA6XG4gICAgICAgICAgICAgIDxDbG9zZUl0IG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gY2xhc3NOYW1lPXtgYXRfY2xvc2UgJHtoYXNOb0Nsb3NlID8gJ25ibG9jaycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7aXNXaGl0ZUljb24gPyA8Q2xvc2VXaGl0ZSBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+IDogPENsb3NlRGFyayBjbGFzc05hbWU9XCJibG9jayB3ZnVsbCBoZnVsbFwiIC8+fVxuICAgICAgICAgICAgICA8L0Nsb3NlSXQ+XG4gICAgICAgICAgfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=