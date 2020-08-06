require("source-map-support").install();
exports.ids = ["all-trips"];
exports.modules = {

/***/ "./app-v2/modules/howItWorks/HowItWorksVideo.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/howItWorks/HowItWorksVideo.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _youTubeVideo = _interopRequireDefault(__webpack_require__(/*! modules/youTubeVideo */ "./app-v2/modules/youTubeVideo/index.js"));

var _segmentEvents = __webpack_require__(/*! app/actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GVideoWrapperDiv = _glamorous.default.div({
  position: 'relative',
  paddingBottom: '56.25%',

  /* 16:9 */
  height: '0',
  ' iframe': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  }
});

let HowItWorksVideo = class HowItWorksVideo extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.onPlayerReady = event => {
      event.target.mute();
    }, this.onPlayerStateChange = event => {
      const time = event.target.getCurrentTime();

      if (event.data === YT.PlayerState.PLAYING) {
        this.trackSegmentEvent(event, 'PLAY', time);
      } else if (event.data === YT.PlayerState.PAUSED) {
        this.trackSegmentEvent(event, 'PAUSE', time);
      }
    }, this.trackSegmentEvent = (event, cta, time) => {
      this.props.trackSegmentEvent({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: 'How it works video',
        object: '',
        cta,
        miscId1: cta,
        miscType1: 'New State of the video',
        miscId2: time,
        miscType2: 'Time at which event occured'
      });
    }, this.render = () => {
      return _react.default.createElement(GVideoWrapperDiv, {
        className: "flex flexFull",
        style: {
          maxWidth: '100%',
          minWidth: '100%'
        }
      }, _react.default.createElement(_youTubeVideo.default, {
        id: "Fxs0oYJxSOc",
        onPlayerStateChange: this.onPlayerStateChange,
        onPlayerReady: this.onPlayerReady
      }));
    }, _temp;
  }

};
HowItWorksVideo.propTypes = {
  trackSegmentEvent: _propTypes.default.func
};
HowItWorksVideo.defaultProps = {
  trackSegmentEvent: () => {}
};
var _default = HowItWorksVideo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/reducer/index.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/rlp/reducer/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "trip", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "quote", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});
Object.defineProperty(exports, "notifications", {
  enumerable: true,
  get: function () {
    return _reducer.default;
  }
});

var _index = _interopRequireDefault(__webpack_require__(/*! modules/trip/reducers/index */ "./app-v2/modules/trip/reducers/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! modules/quote/reducers/index */ "./app-v2/modules/quote/reducers/index.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! modules/notifications/reducer */ "./app-v2/modules/notifications/reducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app-v2/modules/rlp/whyTT/WhyTT.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/rlp/whyTT/WhyTT.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _HowItWorksVideo = _interopRequireDefault(__webpack_require__(/*! modules/howItWorks/HowItWorksVideo */ "./app-v2/modules/howItWorks/HowItWorksVideo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GIconDiv = _glamorous.default.div({
  width: '65px',
  height: '57px',
  '& svg': {
    height: '57px'
  }
});

const GButton = _glamorous.default.button({
  border: '1px solid #2196F3',
  padding: '10px'
});

let WhyTT = class WhyTT extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, section, cta) => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment({
          event,
          section,
          object: '',
          cta
        });
      });
    };

    this.onSensorChange = isVisible => {
      if (isVisible && !this.isEventTracked) {
        this.isEventTracked = true;
        this.trackSegmentEvent(_segmentEvents.ORGANISM_VIEWED, 'Why travel with TravelTriangle');
      }
    };

    this.isEventTracked = false;
  }

  render() {
    return _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: this.onSensorChange,
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw p15 at_whyTT_section"
    }, _react.default.createElement("h6", {
      className: "f16 pfc5 m0 text-center fw9"
    }, "Why Travel with TravelTriangle"), _react.default.createElement("div", {
      className: "mt15 mb15 text-center flex spaceBetween"
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(GIconDiv, {
      className: "mb8 mlauto mrauto"
    }, _react.default.createElement(_Icon.PartPay, null)), _react.default.createElement("p", {
      className: "f12"
    }, _react.default.createElement("span", {
      className: "block"
    }, "Easy EMI"), " Option Available")), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(GIconDiv, {
      className: "mb8 mlauto mrauto"
    }, _react.default.createElement(_Icon.IllusTraveler, null)), _react.default.createElement("p", {
      className: "f12"
    }, _react.default.createElement("span", {
      className: "block"
    }, "22Lacs+"), " Happy Travellers")), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(GIconDiv, {
      className: "mb8 mlauto mrauto"
    }, _react.default.createElement(_Icon.IllusAgent, null)), _react.default.createElement("p", {
      className: "f12"
    }, _react.default.createElement("span", {
      className: "block"
    }, "650+"), " Verified Agents"))), _react.default.createElement(_HowItWorksVideo.default, {
      trackSegmentEvent: this.props.trackSegment
    })));
  }

};
WhyTT.propTypes = {
  trackSegment: _propTypes.default.func
};
var _default = WhyTT;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/whyTT/index.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/rlp/whyTT/index.js ***!
  \*******************************************/
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

var _WhyTT = _interopRequireDefault(__webpack_require__(/*! ./WhyTT */ "./app-v2/modules/rlp/whyTT/WhyTT.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(null, null)(_WhyTT.default));
var _default = {
  container
};
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

/***/ "./app-v2/modules/trip/allTrips/AllTrips.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/trip/allTrips/AllTrips.js ***!
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

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/trip/allTrips/G.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _tripList = __webpack_require__(/*! modules/trip/reducers/tripList */ "./app-v2/modules/trip/reducers/tripList.js");

var _index = _interopRequireDefault(__webpack_require__(/*! modules/rlp/whyTT/index */ "./app-v2/modules/rlp/whyTT/index.js"));

var _NoTrips = _interopRequireDefault(__webpack_require__(/*! ./components/NoTrips */ "./app-v2/modules/trip/allTrips/components/NoTrips.js"));

var _TripCard = _interopRequireDefault(__webpack_require__(/*! ./components/TripCard */ "./app-v2/modules/trip/allTrips/components/TripCard.js"));

var _NavBar = _interopRequireDefault(__webpack_require__(/*! ./NavBar */ "./app-v2/modules/trip/allTrips/NavBar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TABS = {
  ACTIVE: 'active',
  INCOMPLETE: 'incomplete',
  BOOKED: 'booked'
};
let AllTrips = class AllTrips extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      tab: 'active'
    }, this.toggleTab = tab => {
      this.setState({
        tab
      }, () => {
        this.props.trackSegment({
          event: _segmentEvents.ORGANISM_VIEWED,
          section: tab === TABS.ACTIVE ? 'Active Requests' : 'Incomplete Requests'
        });
      });
    }, this.goBackHandler = () => {
      window.history.back(); // currently we are coming on this page after refresh, This code will be used when we redirect here with react routing.
      // const { location, goBack } = this.props;
      // location.action === 'POP' ? this.props.push('/') : goBack();
    }, _temp;
  }

  componentDidMount() {
    this.props.trackSegment({
      event: _segmentEvents.ORGANISM_VIEWED,
      section: 'Active Requests'
    });
  }

  renderTrips(allTrips) {
    let tripIds = [];

    if (this.state.tab === 'active') {
      tripIds = (0, _tripList.getTripsByBookingStatusLabel)(allTrips, TABS.ACTIVE);
    } else if (this.state.tab === TABS.INCOMPLETE) {
      tripIds = (0, _tripList.getTripsByBookingStatusLabel)(allTrips, TABS.INCOMPLETE);
    } else if (this.state.tab === TABS.BOOKED) {
      tripIds = (0, _tripList.getTripsByBookingStatusLabel)(allTrips, TABS.BOOKED);
    }

    if (!tripIds.length) {
      return _react.default.createElement("div", null, _react.default.createElement(_NoTrips.default, {
        trackSegment: this.props.trackSegment
      }), _react.default.createElement(_index.default.container, null));
    }

    return tripIds.map(id => _react.default.createElement(_TripCard.default, {
      key: id,
      tripDetails: allTrips.byId[id],
      reactivateBooking: this.props.reactivateBooking,
      trackSegment: this.props.trackSegment
    }));
  }

  render() {
    const {
      trips,
      trackSegment
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement(_NavBar.default, {
      goBack: this.goBackHandler
    }), _react.default.createElement("div", {
      className: "clearfix contentBackground sbc5"
    }, _react.default.createElement("div", {
      className: "flex sbcw mb8 bb bs6 at_tripNav overflowXscroll"
    }, _react.default.createElement(_G.GTripNavDiv, {
      className: `flexFull pt15 pb15 pl24 pr24 text-center relative nowrap ${this.state.tab === TABS.ACTIVE ? 'active' : null} at_active`
    }, _react.default.createElement("span", {
      className: "f14",
      onClick: () => this.toggleTab(TABS.ACTIVE)
    }, "Active Requests")), _react.default.createElement(_G.GTripNavDiv, {
      className: `flexFull pt15 pb15 pl24 pr24 text-center relative nowrap ${this.state.tab === TABS.INCOMPLETE ? 'active' : null} at_incomplete`
    }, _react.default.createElement("span", {
      className: "f14 at_incompleteReq",
      onClick: () => this.toggleTab(TABS.INCOMPLETE)
    }, "Incomplete Requests")), _react.default.createElement(_G.GTripNavDiv, {
      className: `flexFull pt15 pb15 pl24 pr24 text-center relative nowrap ${this.state.tab === TABS.BOOKED ? 'active' : null} at_booked`
    }, _react.default.createElement("span", {
      className: "f14 at_bookedReq",
      onClick: () => this.toggleTab(TABS.BOOKED)
    }, "Booked"))), trips.allIds.length ? this.renderTrips(trips) : _react.default.createElement("div", null, _react.default.createElement(_NoTrips.default, {
      trackSegment: trackSegment
    }), _react.default.createElement(_index.default.container, null))));
  }

};
AllTrips.propTypes = {
  trips: _propTypes.default.object.isRequired,
  location: _propTypes.default.object,
  reactivateBooking: _propTypes.default.func.isRequired,
  push: _propTypes.default.func.isRequired,
  goBack: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func
};
AllTrips.defaultProps = {
  trackSegment: () => {}
};
var _default = AllTrips;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/allTrips/G.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/trip/allTrips/G.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GCardOptionDiv = exports.GtripCardActionDiv = exports.GQouteStatusIconSpan = exports.GNoTripIconDiv = exports.GTripNavDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GTripNavDiv = _glamorous.default.div({
  cursor: 'pointer',
  '&.active': {
    color: '#20a397',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '-1px',
      left: '0',
      right: '0',
      height: '3px;',
      background: '#20a397'
    }
  }
});

exports.GTripNavDiv = GTripNavDiv;

const GNoTripIconDiv = _glamorous.default.div({
  width: '98px',
  height: '102px',
  margin: '0 auto'
});

exports.GNoTripIconDiv = GNoTripIconDiv;

const GQouteStatusIconSpan = _glamorous.default.span({
  width: '14px',
  height: '14px'
});

exports.GQouteStatusIconSpan = GQouteStatusIconSpan;

const GtripCardActionDiv = _glamorous.default.div({
  width: '200px',
  boxShadow: '0 6px 8px 0 rgba(0, 0, 0, 0.08)',
  display: 'none'
});

exports.GtripCardActionDiv = GtripCardActionDiv;

const GCardOptionDiv = _glamorous.default.div({
  position: 'absolute',
  top: '0',
  right: '0',
  '& .optionTrigger': {
    '& .cardTriggerIcon': {
      width: '4px',
      height: '4px',
      background: '#b2b2b2',
      position: 'relative',
      marginTop: '6px',
      marginBottom: '6px',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: '99',
      '&:before, &:after': {
        content: '""',
        width: '4px',
        height: '4px',
        background: '#b2b2b2',
        position: 'absolute',
        borderRadius: '50%',
        top: '-6px'
      },
      '&:after': {
        top: 'auto',
        bottom: '-6px'
      }
    }
  },
  '&:hover .cardOption': {
    display: 'block'
  }
});

exports.GCardOptionDiv = GCardOptionDiv;

/***/ }),

/***/ "./app-v2/modules/trip/allTrips/NavBar.js":
/*!************************************************!*\
  !*** ./app-v2/modules/trip/allTrips/NavBar.js ***!
  \************************************************/
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

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let NavBar = (_temp = _class = class NavBar extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "pbc5 p8"
    }, _react.default.createElement("div", {
      className: "pt4 pb4 pr8 pl8 flex wfull justifyCenter alignCenter"
    }, _react.default.createElement("button", {
      onClick: this.props.goBack,
      className: "input-24 block mr15 at_goback"
    }, _react.default.createElement(_Icon.Back2IconWhite, null)), _react.default.createElement("p", {
      className: "f16 flex alignCenter fw7 sfcw flexFull ellipsis"
    }, "All Trips")));
  }

}, _class.propTypes = {
  goBack: _propTypes.default.func,
  trackSegment: _propTypes.default.func
}, _class.defaultProps = {
  goBack: () => {},
  trackSegment: () => {}
}, _temp);
var _default = NavBar;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/allTrips/components/NoTrips.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/trip/allTrips/components/NoTrips.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/trip/allTrips/G.js");

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NoTrips = ({
  trackSegment
}) => _react.default.createElement("div", {
  className: "flex flexDColumn text-center sbcw p15 pt64 mt4 mb8"
}, _react.default.createElement(_G.GNoTripIconDiv, {
  className: "mb24"
}, _react.default.createElement(_Icon.LookingIcon, null)), _react.default.createElement("h3", {
  className: "f20 fw7 mb15"
}, "No Requested Trips"), _react.default.createElement("p", {
  className: "f14 mb64"
}, "When you request a trip , You will see it\u2019s", _react.default.createElement("br", null), "details here"), _react.default.createElement(_reactRouter.Link, {
  to: "/requested_trips/new",
  className: "btn-filled-pri",
  onClick: () => trackSegment({
    event: _segmentEvents.ORGANISM_CLICKED,
    cta: 'Plan my holiday'
  })
}, "Plan My Holiday"));

NoTrips.propTypes = {
  trackSegment: _propTypes.default.func.isRequired
};
var _default = NoTrips;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/allTrips/components/TripCard.js":
/*!*************************************************************!*\
  !*** ./app-v2/modules/trip/allTrips/components/TripCard.js ***!
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

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/trip/allTrips/G.js");

var _Icon = __webpack_require__(/*! app/helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! modules/trip/cancelRequest/index */ "./app-v2/modules/trip/cancelRequest/index.js"));

var _tripStatus = __webpack_require__(/*! constants/tripStatus */ "./app/constants/tripStatus.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let TripCard = class TripCard extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      closeModal: true
    }, this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    }, this.isCancelledTrip = status => status.toLowerCase() === _tripStatus.TRIP_STATUS.CANCELLED, this.reactivateBooking = () => {
      const {
        reactivateBooking,
        tripDetails
      } = this.props;
      this.trackSegmentEvent('', 'Reactivate');
      reactivateBooking({
        tripId: tripDetails.id
      }).then(results => {
        if (results) {
          window.location.reload();
        }
      });
    }, this.trackSegmentEvent = (object = '', cta = '') => {
      this.props.trackSegment({
        event: _segmentEvents.ORGANISM_CLICKED,
        object: object,
        cta: cta,
        misc_id_1: this.props.tripDetails.id,
        misc_type_1: 'Trip ID'
      });
    }, _temp;
  }

  renderCancel() {
    const {
      tripDetails
    } = this.props;
    return this.isCancelledTrip(tripDetails.status) ? _react.default.createElement("button", {
      className: "pfc3 p15 block cursorP bb at_undocancel",
      onClick: this.reactivateBooking
    }, "Undo Cancel") : _react.default.createElement(_GenericModal.default, {
      fullView: true,
      hasCustomClose: true,
      trigger: _react.default.createElement("span", {
        className: "pfc3 p15 block cursorP bb",
        onClick: () => this.trackSegmentEvent('', 'Cancel')
      }, "Cancel"),
      customCloseTrigger: this.state.closeModal
    }, _react.default.createElement("div", {
      className: "sbcw"
    }, _react.default.createElement(_index.default, {
      closeModal: this.closePopup,
      tripId: tripDetails.id
    })));
  }

  render() {
    const {
      tripDetails
    } = this.props;
    const editPreferenceUrl = (0, _urlHelpers.preferencesPageUrl)(tripDetails.id);
    const rlpUrl = (0, _urlHelpers.rtripPath)(tripDetails.id);
    return _react.default.createElement("div", {
      className: "mt8"
    }, _react.default.createElement("div", {
      className: "flex flexDColumn sbcw p15 pt8 pb8 mb8 relative at_tripCard"
    }, _react.default.createElement("a", {
      href: rlpUrl,
      onClick: () => this.trackSegmentEvent('Trip Card')
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("p", {
      className: "f12 fw7 pfc4 relative pl24 mb15 at_quoteReceivedStatus"
    }, _react.default.createElement(_G.GQouteStatusIconSpan, {
      className: "icon-18 absolute l0 t0"
    }, tripDetails.quotesCount ? _react.default.createElement(_Icon.QuotesReceivedIcon, null) : _react.default.createElement(_Icon.NoQuotesReceivedIcon, null)), tripDetails.quotesCount ? `${tripDetails.quotesCount} Quotes Received` : 'No Quotes Received'), _react.default.createElement("h3", {
      className: "f16 fw7 pfc3 mb8 at_destination"
    }, tripDetails.firstDestinationName), _react.default.createElement("span", {
      className: "pfc1 f14 mb24 block at_bookingId"
    }, `Booking ID #${tripDetails.id}`)), _react.default.createElement("div", {
      className: "flex"
    }, _react.default.createElement("div", {
      className: "flexFull mb15 mr4 pr8 at_departureDate"
    }, _react.default.createElement("p", {
      className: "f14 pfc4 mb4"
    }, "Departure Date"), _react.default.createElement("p", {
      className: "f14 pfc3"
    }, (0, _DateTime.format)(tripDetails.startDate, 'ddd, DD MMM, YYYY'))), _react.default.createElement("div", {
      className: "flexFull mb15 ml4 pl8 at_duration"
    }, _react.default.createElement("p", {
      className: "f14 pfc4 mb4"
    }, "Duration"), _react.default.createElement("p", {
      className: "f14 pfc3"
    }, tripDetails.tripDays, " Days"))), _react.default.createElement("div", {
      className: "flex"
    }, _react.default.createElement("div", {
      className: "flexFull at_travelers"
    }, _react.default.createElement("p", {
      className: "f14 pfc4 mb4"
    }, "Travelers"), _react.default.createElement("p", {
      className: "f14 pfc3"
    }, tripDetails.adult, " Adult & ", tripDetails.child, " Children")))), tripDetails.isDuplicate ? null : _react.default.createElement(_G.GCardOptionDiv, null, _react.default.createElement("div", {
      className: "optionTrigger absolute t8 r15 cursorP at_tripCardActionTrigger"
    }, _react.default.createElement("div", {
      className: "cardTriggerIcon"
    })), _react.default.createElement(_G.GtripCardActionDiv, {
      className: "cardOption sbcw absolute z10 t8 r8 at_tripCardAction"
    }, tripDetails.bookingStatusLabel.toLowerCase() === 'booked' ? _react.default.createElement("ul", {
      className: "list-style-no"
    }, _react.default.createElement("li", null, _react.default.createElement("a", {
      href: tripDetails.invoiceUrl,
      className: "pfc3 p15 block cursorP"
    }, "View Invoice"))) : _react.default.createElement("ul", {
      className: "list-style-no"
    }, _react.default.createElement("li", null, this.renderCancel()), _react.default.createElement("li", null, _react.default.createElement("a", {
      href: editPreferenceUrl,
      className: "pfc3 p15 block cursorP",
      onClick: () => this.trackSegmentEvent('', 'Edit Preferences')
    }, "Edit Preferences")))))));
  }

};
TripCard.propTypes = {
  tripDetails: _propTypes.default.object.isRequired,
  reactivateBooking: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func.isRequired
};
var _default = TripCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/allTrips/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/trip/allTrips/index.js ***!
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

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _tripActivities = __webpack_require__(/*! modules/trip/actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

var _AllTrips = _interopRequireDefault(__webpack_require__(/*! ./AllTrips */ "./app-v2/modules/trip/allTrips/AllTrips.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  return {
    trips: state.trip.list
  };
}, {
  push: _reactRouterRedux.push,
  goBack: _reactRouterRedux.goBack,
  reactivateBooking: _tripActivities.reactivateBooking
})(_AllTrips.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/youTubeVideo/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/youTubeVideo/index.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let YouTubeVideo = class YouTubeVideo extends _react.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.loadVideo = () => {
      const {
        onPlayerReady,
        onPlayerStateChange,
        id
      } = this.props;
      this.player = new window.YT.Player(`youtube-player-${id}`, {
        videoId: id,
        height: 'auto',
        width: '100%',
        playerVars: {
          'autoplay': 1,
          'loop': 1,
          'playlist': id
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    }, _temp;
  }

  componentDidMount() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = this.loadVideo;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
    }
  }

  render() {
    const {
      id
    } = this.props;
    return _react.default.createElement("div", {
      id: `youtube-player-${id}`
    });
  }

};
YouTubeVideo.propTypes = {
  id: _propTypes.default.string.isRequired,
  onPlayerStateChange: _propTypes.default.func,
  onPlayerReady: _propTypes.default.func
};
YouTubeVideo.defaultProps = {
  onPlayerStateChange: () => {},
  onPlayerReady: () => {}
};
var _default = YouTubeVideo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/allTrips/AllTripsAsync.js":
/*!**************************************************!*\
  !*** ./app-v2/screens/allTrips/AllTripsAsync.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rlpReducers = exports.default = exports.tripAction = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/allTrips/Layout.js"));

var rlpReducers = _interopRequireWildcard(__webpack_require__(/*! modules/rlp/reducer */ "./app-v2/modules/rlp/reducer/index.js"));

exports.rlpReducers = rlpReducers;

var _tripList = __webpack_require__(/*! modules/trip/actions/tripList */ "./app-v2/modules/trip/actions/tripList.js");

var _tripList2 = __webpack_require__(/*! modules/trip/reducers/tripList */ "./app-v2/modules/trip/reducers/tripList.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const tripAction = {
  fetchTripsData: _tripList.load,
  tripsLoaded: _tripList2.tripsLoaded
};
exports.tripAction = tripAction;

const AllTripsAsync = () => _react.default.createElement(_Layout.default, null);

AllTripsAsync.propTypes = {};
var _default = AllTripsAsync;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/allTrips/Layout.js":
/*!*******************************************!*\
  !*** ./app-v2/screens/allTrips/Layout.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _allTrips = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/trip/allTrips */ "./app-v2/modules/trip/allTrips/index.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Layout = class Layout extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (data = {}) => {
      (0, _utils.rescue)(() => {
        (0, _segmentEvents.trackSegment)({
          event: data.event,
          category: data.category || 'TravellerDashboard',
          section: data.section || '',
          object: data.object,
          cta: data.cta,
          misc_id_1: data.miscId1,
          misc_type_1: data.miscType1,
          misc_id_2: data.miscId2,
          misc_type_2: data.miscType2,
          misc_id_3: data.miscId3,
          misc_type_3: data.miscType3,
          misc_id_4: data.miscId4,
          misc_type_4: data.miscType4,
          misc_id_5: data.miscId5,
          misc_type_5: data.miscType5
        });
      });
    };
  }

  render() {
    const AllTripsContainer = _allTrips.default.container;
    return _react.default.createElement("div", null, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("meta", {
      name: "page_fullname",
      content: "All Trips"
    }), _react.default.createElement("meta", {
      name: "page_name",
      content: "All Trips"
    }), _react.default.createElement("meta", {
      name: "name",
      content: "All Trips"
    }), _react.default.createElement("meta", {
      charSet: "utf-8"
    }), _react.default.createElement("title", null, "Traveler Dashboard - TravelTriangle"), _react.default.createElement("link", {
      rel: "canonical",
      href: "https://traveltriangle.com/travellers/dashboard"
    })), _react.default.createElement(AllTripsContainer, {
      trackSegment: this.trackSegmentEvent
    }));
  }

};
var _default = Layout;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob3dJdFdvcmtzL0hvd0l0V29ya3NWaWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvd2h5VFQvV2h5VFQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcmxwL3doeVRUL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdHJpcC9hbGxUcmlwcy9BbGxUcmlwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL2FsbFRyaXBzL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdHJpcC9hbGxUcmlwcy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdHJpcC9hbGxUcmlwcy9jb21wb25lbnRzL05vVHJpcHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdHJpcC9hbGxUcmlwcy9jb21wb25lbnRzL1RyaXBDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyaXAvYWxsVHJpcHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMveW91VHViZVZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2FsbFRyaXBzL0FsbFRyaXBzQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvYWxsVHJpcHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkdWaWRlb1dyYXBwZXJEaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJwb3NpdGlvbiIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJIb3dJdFdvcmtzVmlkZW8iLCJDb21wb25lbnQiLCJvblBsYXllclJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJtdXRlIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsInRpbWUiLCJnZXRDdXJyZW50VGltZSIsImRhdGEiLCJZVCIsIlBsYXllclN0YXRlIiwiUExBWUlORyIsInRyYWNrU2VnbWVudEV2ZW50IiwiUEFVU0VEIiwiY3RhIiwicHJvcHMiLCJPUkdBTklTTV9DTElDS0VEIiwic2VjdGlvbiIsIm9iamVjdCIsIm1pc2NJZDEiLCJtaXNjVHlwZTEiLCJtaXNjSWQyIiwibWlzY1R5cGUyIiwicmVuZGVyIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJHSWNvbkRpdiIsIkdCdXR0b24iLCJidXR0b24iLCJib3JkZXIiLCJwYWRkaW5nIiwiV2h5VFQiLCJjb25zdHJ1Y3RvciIsInRyYWNrU2VnbWVudCIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiaXNFdmVudFRyYWNrZWQiLCJPUkdBTklTTV9WSUVXRUQiLCJjb250YWluZXIiLCJDbG9zZUl0IiwicmlnaHQiLCJ6SW5kZXgiLCJvdmVyZmxvdyIsIkNsb3NlSXRMZWZ0IiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsImJvdHRvbSIsImJvcmRlclJhZGl1cyIsInRyYW5zZm9ybSIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXN0b21TdHlsZXNGdWxsVmlldyIsInBhZGRpbmdUb3AiLCJNb2RhbENvbXBvbmVudCIsIlJlYWN0Iiwic3RhdGUiLCJpc09wZW4iLCJvcGVuTW9kYWwiLCJiaW5kIiwiY2xvc2VNb2RhbCIsImFmdGVyT3Blbk1vZGFsIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjdXN0b21DbG9zZVRyaWdnZXIiLCJzZXRTdGF0ZSIsIm9uUmVxdWVzdENsb3NlQ3VzdG9tIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvbkFmdGVyTW9kYWxPcGVuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJmdWxsVmlldyIsImhhc0N1c3RvbUNsb3NlIiwiaGFzTm9DbG9zZSIsImlzV2hpdGVJY29uIiwiaXNUcmlnZ2VyRnVsbFZpZXciLCJjdXN0b21DbGFzcyIsInRyaWdnZXIiLCJjaGlsZHJlbiIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInN0cmluZyIsIlRBQlMiLCJBQ1RJVkUiLCJJTkNPTVBMRVRFIiwiQk9PS0VEIiwiQWxsVHJpcHMiLCJ0YWIiLCJ0b2dnbGVUYWIiLCJnb0JhY2tIYW5kbGVyIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlclRyaXBzIiwiYWxsVHJpcHMiLCJ0cmlwSWRzIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJieUlkIiwicmVhY3RpdmF0ZUJvb2tpbmciLCJ0cmlwcyIsImFsbElkcyIsImxvY2F0aW9uIiwicHVzaCIsImdvQmFjayIsIkdUcmlwTmF2RGl2IiwiY3Vyc29yIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiR05vVHJpcEljb25EaXYiLCJtYXJnaW4iLCJHUW91dGVTdGF0dXNJY29uU3BhbiIsInNwYW4iLCJHdHJpcENhcmRBY3Rpb25EaXYiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiR0NhcmRPcHRpb25EaXYiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJOYXZCYXIiLCJOb1RyaXBzIiwiVHJpcENhcmQiLCJjbG9zZVBvcHVwIiwiaXNDYW5jZWxsZWRUcmlwIiwic3RhdHVzIiwidG9Mb3dlckNhc2UiLCJUUklQX1NUQVRVUyIsIkNBTkNFTExFRCIsInRyaXBEZXRhaWxzIiwidHJpcElkIiwidGhlbiIsInJlc3VsdHMiLCJyZWxvYWQiLCJtaXNjX2lkXzEiLCJtaXNjX3R5cGVfMSIsInJlbmRlckNhbmNlbCIsImVkaXRQcmVmZXJlbmNlVXJsIiwicmxwVXJsIiwicXVvdGVzQ291bnQiLCJmaXJzdERlc3RpbmF0aW9uTmFtZSIsInN0YXJ0RGF0ZSIsInRyaXBEYXlzIiwiYWR1bHQiLCJjaGlsZCIsImlzRHVwbGljYXRlIiwiYm9va2luZ1N0YXR1c0xhYmVsIiwiaW52b2ljZVVybCIsInRyaXAiLCJsaXN0IiwiWW91VHViZVZpZGVvIiwiUHVyZUNvbXBvbmVudCIsImxvYWRWaWRlbyIsInBsYXllciIsIlBsYXllciIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJ0YWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInRyaXBBY3Rpb24iLCJmZXRjaFRyaXBzRGF0YSIsInRyaXBzTG9hZGVkIiwiQWxsVHJpcHNBc3luYyIsIkxheW91dCIsImNhdGVnb3J5IiwibWlzY19pZF8yIiwibWlzY190eXBlXzIiLCJtaXNjX2lkXzMiLCJtaXNjSWQzIiwibWlzY190eXBlXzMiLCJtaXNjVHlwZTMiLCJtaXNjX2lkXzQiLCJtaXNjSWQ0IiwibWlzY190eXBlXzQiLCJtaXNjVHlwZTQiLCJtaXNjX2lkXzUiLCJtaXNjSWQ1IiwibWlzY190eXBlXzUiLCJtaXNjVHlwZTUiLCJBbGxUcmlwc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxtQkFBbUJDLG1CQUFVQyxHQUFWLENBQWM7QUFDckNDLFlBQVUsVUFEMkI7QUFFckNDLGlCQUFlLFFBRnNCOztBQUVaO0FBQ3pCQyxVQUFRLEdBSDZCO0FBSXJDLGFBQVk7QUFDVkYsY0FBVSxVQURBO0FBRVZHLFNBQUssR0FGSztBQUdWQyxVQUFNLEdBSEk7QUFJVkMsV0FBTyxNQUpHO0FBS1ZILFlBQVE7QUFMRTtBQUp5QixDQUFkLENBQXpCOztJQWFNSSxlLEdBQU4sTUFB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O0FBQ1AsVUFBTTJLLG9CQUFvQnZHLGtCQUFTakQsU0FBbkM7QUFFQSxXQUNFLDBDQUNFLDZCQUFDLG9CQUFELFFBQ0U7QUFBTSxZQUFLLGVBQVg7QUFBMkIsZUFBUTtBQUFuQyxNQURGLEVBRUU7QUFBTSxZQUFLLFdBQVg7QUFBdUIsZUFBUTtBQUEvQixNQUZGLEVBR0U7QUFBTSxZQUFLLE1BQVg7QUFBa0IsZUFBUTtBQUExQixNQUhGLEVBSUU7QUFBTSxlQUFRO0FBQWQsTUFKRixFQUtFLGtGQUxGLEVBTUU7QUFBTSxXQUFJLFdBQVY7QUFBc0IsWUFBSztBQUEzQixNQU5GLENBREYsRUFVRSw2QkFBQyxpQkFBRDtBQUFtQixvQkFBYyxLQUFLOUI7QUFBdEMsTUFWRixDQURGO0FBZUQ7O0FBL0M0QixDO2VBa0RoQnNLLE0iLCJmaWxlIjoiYWxsLXRyaXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBZb3VUdWJlVmlkZW8gZnJvbSAnbW9kdWxlcy95b3VUdWJlVmlkZW8nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FwcC9hY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHVmlkZW9XcmFwcGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBwYWRkaW5nQm90dG9tOiAnNTYuMjUlJywgLyogMTY6OSAqL1xuICBoZWlnaHQ6ICcwJyxcbiAgJyBpZnJhbWUnIDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9XG59KTtcblxuY2xhc3MgSG93SXRXb3Jrc1ZpZGVvIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBvblBsYXllclJlYWR5ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0Lm11dGUoKTtcbiAgfTtcblxuICBvblBsYXllclN0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGV2ZW50LnRhcmdldC5nZXRDdXJyZW50VGltZSgpO1xuICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKXtcbiAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoZXZlbnQsICdQTEFZJywgdGltZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCl7XG4gICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KGV2ZW50LCAnUEFVU0UnLCB0aW1lKTtcbiAgICB9XG4gIH07XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIGN0YSwgdGltZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiAnSG93IGl0IHdvcmtzIHZpZGVvJyxcbiAgICAgIG9iamVjdDogJycsXG4gICAgICBjdGEsXG4gICAgICBtaXNjSWQxOiBjdGEsXG4gICAgICBtaXNjVHlwZTE6ICdOZXcgU3RhdGUgb2YgdGhlIHZpZGVvJyxcbiAgICAgIG1pc2NJZDI6IHRpbWUsXG4gICAgICBtaXNjVHlwZTI6ICdUaW1lIGF0IHdoaWNoIGV2ZW50IG9jY3VyZWQnXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8R1ZpZGVvV3JhcHBlckRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhGdWxsXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWluV2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgPFlvdVR1YmVWaWRlb1xuICAgICAgICAgIGlkPVwiRnhzMG9ZSnhTT2NcIlxuICAgICAgICAgIG9uUGxheWVyU3RhdGVDaGFuZ2U9e3RoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZX1cbiAgICAgICAgICBvblBsYXllclJlYWR5PXt0aGlzLm9uUGxheWVyUmVhZHl9XG4gICAgICAgIC8+XG4gICAgICA8L0dWaWRlb1dyYXBwZXJEaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuSG93SXRXb3Jrc1ZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Ib3dJdFdvcmtzVmlkZW8uZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvd0l0V29ya3NWaWRlbztcbiIsImltcG9ydCB0cmlwIGZyb20gJ21vZHVsZXMvdHJpcC9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgcXVvdGUgZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgbm90aWZpY2F0aW9ucyBmcm9tICdtb2R1bGVzL25vdGlmaWNhdGlvbnMvcmVkdWNlcic7XG5cbmV4cG9ydCB7XG4gIHRyaXAsXG4gIHF1b3RlLFxuICBub3RpZmljYXRpb25zXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcblxuaW1wb3J0IHsgUGFydFBheSwgSWxsdXNUcmF2ZWxlciwgSWxsdXNBZ2VudCB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IE9SR0FOSVNNX1ZJRVdFRCwgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyByZXNjdWUgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcbmltcG9ydCBIb3dJdFdvcmtzVmlkZW8gZnJvbSAnbW9kdWxlcy9ob3dJdFdvcmtzL0hvd0l0V29ya3NWaWRlbyc7XG5cbmNvbnN0IEdJY29uRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnNjVweCcsXG4gIGhlaWdodDogJzU3cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgaGVpZ2h0OiAnNTdweCcsXG4gIH1cbn0pO1xuXG5jb25zdCBHQnV0dG9uID0gZ2xhbW9yb3VzLmJ1dHRvbih7XG4gIGJvcmRlcjogJzFweCBzb2xpZCAjMjE5NkYzJyxcbiAgcGFkZGluZzogJzEwcHgnXG59KTtcblxuY2xhc3MgV2h5VFQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmlzRXZlbnRUcmFja2VkID0gZmFsc2U7XG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChldmVudCwgc2VjdGlvbiwgY3RhKSA9PiB7XG4gICAgcmVzY3VlKCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHNlY3Rpb24sXG4gICAgICAgIG9iamVjdDogJycsXG4gICAgICAgIGN0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgb25TZW5zb3JDaGFuZ2UgPSAoaXNWaXNpYmxlKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSAmJiAhdGhpcy5pc0V2ZW50VHJhY2tlZCkge1xuICAgICAgdGhpcy5pc0V2ZW50VHJhY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX1ZJRVdFRCwgJ1doeSB0cmF2ZWwgd2l0aCBUcmF2ZWxUcmlhbmdsZScpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZW5zb3Igb25DaGFuZ2U9e3RoaXMub25TZW5zb3JDaGFuZ2V9XG4gICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nXG4gICAgICAgICAgICAgIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NiY3cgcDE1IGF0X3doeVRUX3NlY3Rpb24nPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2YxNiBwZmM1IG0wIHRleHQtY2VudGVyIGZ3OSc+V2h5IFRyYXZlbCB3aXRoIFRyYXZlbFRyaWFuZ2xlPC9oNj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQxNSBtYjE1IHRleHQtY2VudGVyIGZsZXggc3BhY2VCZXR3ZWVuJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4RnVsbCc+XG4gICAgICAgICAgICAgIDxHSWNvbkRpdiBjbGFzc05hbWU9J21iOCBtbGF1dG8gbXJhdXRvJz48UGFydFBheSAvPjwvR0ljb25EaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyJz48c3BhbiBjbGFzc05hbWU9J2Jsb2NrJz5FYXN5IEVNSTwvc3Bhbj4gT3B0aW9uIEF2YWlsYWJsZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhGdWxsJz5cbiAgICAgICAgICAgICAgPEdJY29uRGl2IGNsYXNzTmFtZT0nbWI4IG1sYXV0byBtcmF1dG8nPjxJbGx1c1RyYXZlbGVyIC8+PC9HSWNvbkRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTInPjxzcGFuIGNsYXNzTmFtZT0nYmxvY2snPjIyTGFjcys8L3NwYW4+IEhhcHB5IFRyYXZlbGxlcnM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4RnVsbCc+XG4gICAgICAgICAgICAgIDxHSWNvbkRpdiBjbGFzc05hbWU9J21iOCBtbGF1dG8gbXJhdXRvJz48SWxsdXNBZ2VudCAvPjwvR0ljb25EaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyJz48c3BhbiBjbGFzc05hbWU9J2Jsb2NrJz42NTArPC9zcGFuPiBWZXJpZmllZCBBZ2VudHM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SG93SXRXb3Jrc1ZpZGVvIHRyYWNrU2VnbWVudEV2ZW50PXt0aGlzLnByb3BzLnRyYWNrU2VnbWVudH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlbnNvcj5cbiAgICApO1xuICB9XG59XG5cbldoeVRULnByb3BUeXBlcyA9IHtcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2h5VFQ7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBXaHlUVCBmcm9tICcuL1doeVRUJztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBudWxsLCBudWxsXG4pKFdoeVRUKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgQ2xvc2VEYXJrLCBDbG9zZVdoaXRlfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IENsb3NlSXQgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnNXB4JyxcbiAgdG9wOiAnMHB4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnMicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuXG5jb25zdCBDbG9zZUl0TGVmdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgbGVmdDogJzVweCcsXG4gIHRvcDogJzNweCcsXG4gIHdpZHRoOiAnMzZweCcsXG4gIGhlaWdodDogJzM2cHgnLFxuICBwYWRkaW5nOiAnMTJweCcsXG4gIHpJbmRleDogJzYnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KTtcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHpJbmRleDogJzEwMScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIHdpZHRoOiAnOTQlJyxcbiAgICBtYXhXaWR0aDogJzYwMHB4JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43NSknXG4gIH0sXG59O1xuY29uc3QgY3VzdG9tU3R5bGVzRnVsbFZpZXcgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmdUb3A6ICc1MHB4J1xuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJ1xuICB9LFxufTtcblxuY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgb25BZnRlck1vZGFsT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZXF1ZXN0Q2xvc2VDdXN0b206IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1c3RvbUNsb3NlVHJpZ2dlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNOb0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1doaXRlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGN1c3RvbUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogKCkgPT4ge1xuICAgIH0sXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBmYWxzZSxcbiAgICB0cmlnZ2VyOiA8YnV0dG9uPlBsZWFzZSBzdXBwbHkgYSBjdXN0b20gdHJpZ2dlciBjb21wb25lbnQ8L2J1dHRvbj4sXG4gICAgZnVsbFZpZXc6IGZhbHNlLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBmYWxzZSxcbiAgICBoYXNOb0Nsb3NlOiBmYWxzZSxcbiAgICBpc1doaXRlSWNvbjogZmFsc2UsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWZ0ZXJPcGVuTW9kYWwgPSB0aGlzLmFmdGVyT3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiBuZXh0UHJvcHMuY3VzdG9tQ2xvc2VUcmlnZ2VyKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSgpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gIH1cblxuICBhZnRlck9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQWZ0ZXJNb2RhbE9wZW4oKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZ1bGxWaWV3LCBoYXNDdXN0b21DbG9zZSwgaGFzTm9DbG9zZSwgaXNXaGl0ZUljb24sIGlzVHJpZ2dlckZ1bGxWaWV3LCBjdXN0b21DbGFzcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVHJpZ2dlckZ1bGxWaWV3ID8gJ3dmdWxsJzogJyd9PlxuICAgICAgICB7IXRoaXMucHJvcHMuaXNPcGVuID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyaWdnZXJ9XG4gICAgICAgICAgPC9zcGFuPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25BZnRlck9wZW49e3RoaXMuYWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICBzdHlsZT17ZnVsbFZpZXcgPyBjdXN0b21TdHlsZXNGdWxsVmlldyA6IGN1c3RvbVN0eWxlc31cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJUcmF2ZWwgVHJpYW5nbGUgTW9kYWxcIlxuICAgICAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VzdG9tQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYXNDdXN0b21DbG9zZSA/XG4gICAgICAgICAgICAgIDxDbG9zZUl0TGVmdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0TGVmdD4gOlxuICAgICAgICAgICAgICA8Q2xvc2VJdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR1RyaXBOYXZEaXYgfSBmcm9tICcuL0cnO1xuaW1wb3J0IHsgT1JHQU5JU01fVklFV0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IGdldFRyaXBzQnlCb29raW5nU3RhdHVzTGFiZWwgfSBmcm9tICdtb2R1bGVzL3RyaXAvcmVkdWNlcnMvdHJpcExpc3QnO1xuaW1wb3J0IFdoeVRUIGZyb20gJ21vZHVsZXMvcmxwL3doeVRUL2luZGV4JztcbmltcG9ydCBOb1RyaXBzIGZyb20gJy4vY29tcG9uZW50cy9Ob1RyaXBzJztcbmltcG9ydCBUcmlwQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvVHJpcENhcmQnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XG5cbmNvbnN0IFRBQlMgPSB7XG4gIEFDVElWRTogJ2FjdGl2ZScsXG4gIElOQ09NUExFVEU6ICdpbmNvbXBsZXRlJyxcbiAgQk9PS0VEOiAnYm9va2VkJ1xufTtcblxuY2xhc3MgQWxsVHJpcHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIHRhYjogJ2FjdGl2ZSdcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fVklFV0VELFxuICAgICAgc2VjdGlvbjogJ0FjdGl2ZSBSZXF1ZXN0cydcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclRyaXBzKGFsbFRyaXBzKSB7XG4gICAgbGV0IHRyaXBJZHMgPSBbXTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnRhYiA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRyaXBJZHMgPSBnZXRUcmlwc0J5Qm9va2luZ1N0YXR1c0xhYmVsKGFsbFRyaXBzLCBUQUJTLkFDVElWRSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUudGFiID09PSBUQUJTLklOQ09NUExFVEUpIHtcbiAgICAgIHRyaXBJZHMgPSBnZXRUcmlwc0J5Qm9va2luZ1N0YXR1c0xhYmVsKGFsbFRyaXBzLCBUQUJTLklOQ09NUExFVEUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnRhYiA9PT0gVEFCUy5CT09LRUQpIHtcbiAgICAgIHRyaXBJZHMgPSBnZXRUcmlwc0J5Qm9va2luZ1N0YXR1c0xhYmVsKGFsbFRyaXBzLCBUQUJTLkJPT0tFRCk7XG4gICAgfVxuXG4gICAgaWYgKCF0cmlwSWRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxOb1RyaXBzIHRyYWNrU2VnbWVudD17dGhpcy5wcm9wcy50cmFja1NlZ21lbnR9IC8+XG4gICAgICAgIDxXaHlUVC5jb250YWluZXIgLz5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJpcElkcy5tYXAoaWQgPT4gPFRyaXBDYXJkIGtleT17aWR9IHRyaXBEZXRhaWxzPXthbGxUcmlwcy5ieUlkW2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aXZhdGVCb29raW5nPXt0aGlzLnByb3BzLnJlYWN0aXZhdGVCb29raW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0aGlzLnByb3BzLnRyYWNrU2VnbWVudH0gLz4pO1xuICB9XG5cbiAgdG9nZ2xlVGFiID0gKHRhYikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWIgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogT1JHQU5JU01fVklFV0VELFxuICAgICAgICBzZWN0aW9uOiB0YWIgPT09IFRBQlMuQUNUSVZFID8gJ0FjdGl2ZSBSZXF1ZXN0cycgOiAnSW5jb21wbGV0ZSBSZXF1ZXN0cydcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGdvQmFja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuXG4gICAgLy8gY3VycmVudGx5IHdlIGFyZSBjb21pbmcgb24gdGhpcyBwYWdlIGFmdGVyIHJlZnJlc2gsIFRoaXMgY29kZSB3aWxsIGJlIHVzZWQgd2hlbiB3ZSByZWRpcmVjdCBoZXJlIHdpdGggcmVhY3Qgcm91dGluZy5cbiAgICAvLyBjb25zdCB7IGxvY2F0aW9uLCBnb0JhY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gbG9jYXRpb24uYWN0aW9uID09PSAnUE9QJyA/IHRoaXMucHJvcHMucHVzaCgnLycpIDogZ29CYWNrKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJpcHMsIHRyYWNrU2VnbWVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIGdvQmFjaz17dGhpcy5nb0JhY2tIYW5kbGVyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IGNvbnRlbnRCYWNrZ3JvdW5kIHNiYzVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc2JjdyBtYjggYmIgYnM2IGF0X3RyaXBOYXYgb3ZlcmZsb3dYc2Nyb2xsXCI+XG4gICAgICAgICAgICA8R1RyaXBOYXZEaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleEZ1bGwgcHQxNSBwYjE1IHBsMjQgcHIyNCB0ZXh0LWNlbnRlciByZWxhdGl2ZSBub3dyYXAgJHt0aGlzLnN0YXRlLnRhYiA9PT0gVEFCUy5BQ1RJVkUgPyAnYWN0aXZlJyA6IG51bGx9IGF0X2FjdGl2ZWB9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZVRhYihUQUJTLkFDVElWRSl9PkFjdGl2ZSBSZXF1ZXN0czwvc3Bhbj5cbiAgICAgICAgICAgIDwvR1RyaXBOYXZEaXY+XG4gICAgICAgICAgICA8R1RyaXBOYXZEaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleEZ1bGwgcHQxNSBwYjE1IHBsMjQgcHIyNCB0ZXh0LWNlbnRlciByZWxhdGl2ZSBub3dyYXAgJHt0aGlzLnN0YXRlLnRhYiA9PT0gVEFCUy5JTkNPTVBMRVRFID8gJ2FjdGl2ZScgOiBudWxsfSBhdF9pbmNvbXBsZXRlYH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYxNCBhdF9pbmNvbXBsZXRlUmVxXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUYWIoVEFCUy5JTkNPTVBMRVRFKX0+SW5jb21wbGV0ZSBSZXF1ZXN0czwvc3Bhbj5cbiAgICAgICAgICAgIDwvR1RyaXBOYXZEaXY+XG4gICAgICAgICAgICA8R1RyaXBOYXZEaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleEZ1bGwgcHQxNSBwYjE1IHBsMjQgcHIyNCB0ZXh0LWNlbnRlciByZWxhdGl2ZSBub3dyYXAgJHt0aGlzLnN0YXRlLnRhYiA9PT0gVEFCUy5CT09LRUQgPyAnYWN0aXZlJyA6IG51bGx9IGF0X2Jvb2tlZGB9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTQgYXRfYm9va2VkUmVxXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVUYWIoVEFCUy5CT09LRUQpfT5Cb29rZWQ8L3NwYW4+XG4gICAgICAgICAgICA8L0dUcmlwTmF2RGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0cmlwcy5hbGxJZHMubGVuZ3RoID9cbiAgICAgICAgICAgIHRoaXMucmVuZGVyVHJpcHModHJpcHMpIDpcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxOb1RyaXBzIHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50fSAvPlxuICAgICAgICAgICAgICA8V2h5VFQuY29udGFpbmVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BbGxUcmlwcy5wcm9wVHlwZXMgPSB7XG4gIHRyaXBzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICByZWFjdGl2YXRlQm9va2luZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcHVzaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5BbGxUcmlwcy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFRyaXBzO1xuIiwiaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5leHBvcnQgY29uc3QgR1RyaXBOYXZEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICcmLmFjdGl2ZSc6IHtcbiAgICBjb2xvcjogJyMyMGEzOTcnLFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAnLTFweCcsXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICByaWdodDogJzAnLFxuICAgICAgaGVpZ2h0OiAnM3B4OycsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwYTM5NydcbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdOb1RyaXBJY29uRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnOThweCcsXG4gIGhlaWdodDogJzEwMnB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJ1xufSk7XG5cbmV4cG9ydCBjb25zdCBHUW91dGVTdGF0dXNJY29uU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxNHB4JyxcbiAgaGVpZ2h0OiAnMTRweCdcbn0pO1xuXG5leHBvcnQgY29uc3QgR3RyaXBDYXJkQWN0aW9uRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMjAwcHgnLFxuICBib3hTaGFkb3c6ICcwIDZweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgZGlzcGxheTogJ25vbmUnXG59KTtcblxuZXhwb3J0IGNvbnN0IEdDYXJkT3B0aW9uRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICcwJyxcbiAgcmlnaHQ6ICcwJyxcbiAgJyYgLm9wdGlvblRyaWdnZXInOiB7XG4gICAgJyYgLmNhcmRUcmlnZ2VySWNvbic6IHtcbiAgICAgIHdpZHRoOiAnNHB4JyxcbiAgICAgIGhlaWdodDogJzRweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2IyYjJiMicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG1hcmdpblRvcDogJzZweCcsXG4gICAgICBtYXJnaW5Cb3R0b206ICc2cHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgekluZGV4OiAnOTknLFxuICAgICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHdpZHRoOiAnNHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNHB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNiMmIyYjInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgdG9wOiAnLTZweCdcbiAgICAgIH0sXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogJy02cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAnJjpob3ZlciAuY2FyZE9wdGlvbic6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEJhY2sySWNvbldoaXRlIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGdvQmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZ29CYWNrOiAoKSA9PiB7fSxcbiAgICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiYzUgcDhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdDQgcGI0IHByOCBwbDggZmxleCB3ZnVsbCBqdXN0aWZ5Q2VudGVyIGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5nb0JhY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC0yNCBibG9jayBtcjE1IGF0X2dvYmFja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJhY2sySWNvbldoaXRlIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZsZXggYWxpZ25DZW50ZXIgZnc3IHNmY3cgZmxleEZ1bGwgZWxsaXBzaXNcIj5cbiAgICAgICAgICAgIEFsbCBUcmlwc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IEdOb1RyaXBJY29uRGl2IH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyBMb29raW5nSWNvbiB9IGZyb20gJ2FwcC9oZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgTm9UcmlwcyA9ICh7IHRyYWNrU2VnbWVudCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4RENvbHVtbiB0ZXh0LWNlbnRlciBzYmN3IHAxNSBwdDY0IG10NCBtYjhcIj5cbiAgICA8R05vVHJpcEljb25EaXYgY2xhc3NOYW1lPVwibWIyNFwiPlxuICAgICAgPExvb2tpbmdJY29uIC8+XG4gICAgPC9HTm9UcmlwSWNvbkRpdj5cbiAgICA8aDMgY2xhc3NOYW1lPVwiZjIwIGZ3NyBtYjE1XCI+Tm8gUmVxdWVzdGVkIFRyaXBzPC9oMz5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTQgbWI2NFwiPldoZW4geW91IHJlcXVlc3QgYSB0cmlwICwgWW91IHdpbGwgc2VlIGl04oCZczxici8+ZGV0YWlscyBoZXJlPC9wPlxuICAgIDxMaW5rIHRvPScvcmVxdWVzdGVkX3RyaXBzL25ldycgY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRyYWNrU2VnbWVudCh7IGV2ZW50OiBPUkdBTklTTV9DTElDS0VELCBjdGE6ICdQbGFuIG15IGhvbGlkYXknIH0pfT5QbGFuIE15IEhvbGlkYXk8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuTm9Ucmlwcy5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9UcmlwcztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHdHJpcENhcmRBY3Rpb25EaXYsIEdRb3V0ZVN0YXR1c0ljb25TcGFuLCBHQ2FyZE9wdGlvbkRpdiB9IGZyb20gJy4uL0cnO1xuaW1wb3J0IHsgUXVvdGVzUmVjZWl2ZWRJY29uLCBOb1F1b3Rlc1JlY2VpdmVkSWNvbiB9IGZyb20gJ2FwcC9oZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBwcmVmZXJlbmNlc1BhZ2VVcmwsIHJ0cmlwUGF0aCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IENhbmNlbFJlcXVlc3QgZnJvbSAnbW9kdWxlcy90cmlwL2NhbmNlbFJlcXVlc3QvaW5kZXgnO1xuaW1wb3J0IHsgVFJJUF9TVEFUVVMgfSBmcm9tICdjb25zdGFudHMvdHJpcFN0YXR1cyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY2xhc3MgVHJpcENhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGNsb3NlTW9kYWw6IHRydWVcbiAgfTtcblxuICBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZU1vZGFsOiB0cnVlIH0pO1xuICB9O1xuXG4gIGlzQ2FuY2VsbGVkVHJpcCA9IChzdGF0dXMpID0+IHN0YXR1cy50b0xvd2VyQ2FzZSgpID09PSBUUklQX1NUQVRVUy5DQU5DRUxMRUQ7XG5cbiAgcmVhY3RpdmF0ZUJvb2tpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFjdGl2YXRlQm9va2luZywgdHJpcERldGFpbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy50cmFja1NlZ21lbnRFdmVudCgnJywgJ1JlYWN0aXZhdGUnKTtcblxuICAgIHJlYWN0aXZhdGVCb29raW5nKHsgdHJpcElkOiB0cmlwRGV0YWlscy5pZCB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ2FuY2VsKCkge1xuICAgIGNvbnN0IHsgdHJpcERldGFpbHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gdGhpcy5pc0NhbmNlbGxlZFRyaXAodHJpcERldGFpbHMuc3RhdHVzKSA/XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBmYzMgcDE1IGJsb2NrIGN1cnNvclAgYmIgYXRfdW5kb2NhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucmVhY3RpdmF0ZUJvb2tpbmd9PlVuZG9cbiAgICAgICAgQ2FuY2VsPC9idXR0b24+IDpcbiAgICAgIDxNb2RhbCBmdWxsVmlldz17dHJ1ZX0gaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgICAgdHJpZ2dlcj17PHNwYW4gY2xhc3NOYW1lPSdwZmMzIHAxNSBibG9jayBjdXJzb3JQIGJiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoJycsICdDYW5jZWwnKX0+Q2FuY2VsPC9zcGFuPn1cbiAgICAgICAgICAgICBjdXN0b21DbG9zZVRyaWdnZXI9e3RoaXMuc3RhdGUuY2xvc2VNb2RhbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3Jz5cbiAgICAgICAgICA8Q2FuY2VsUmVxdWVzdCBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlUG9wdXB9IHRyaXBJZD17dHJpcERldGFpbHMuaWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD47XG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChvYmplY3QgPSAnJywgY3RhID0gJycpID0+IHtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgY3RhOiBjdGEsXG4gICAgICBtaXNjX2lkXzE6IHRoaXMucHJvcHMudHJpcERldGFpbHMuaWQsXG4gICAgICBtaXNjX3R5cGVfMTogJ1RyaXAgSUQnXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJpcERldGFpbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZWRpdFByZWZlcmVuY2VVcmwgPSBwcmVmZXJlbmNlc1BhZ2VVcmwodHJpcERldGFpbHMuaWQpO1xuICAgIGNvbnN0IHJscFVybCA9IHJ0cmlwUGF0aCh0cmlwRGV0YWlscy5pZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhEQ29sdW1uIHNiY3cgcDE1IHB0OCBwYjggbWI4IHJlbGF0aXZlIGF0X3RyaXBDYXJkXCI+XG4gICAgICAgICAgPGEgaHJlZj17cmxwVXJsfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KCdUcmlwIENhcmQnKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBmdzcgcGZjNCByZWxhdGl2ZSBwbDI0IG1iMTUgYXRfcXVvdGVSZWNlaXZlZFN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDxHUW91dGVTdGF0dXNJY29uU3BhbiBjbGFzc05hbWU9XCJpY29uLTE4IGFic29sdXRlIGwwIHQwXCI+XG4gICAgICAgICAgICAgICAgICB7dHJpcERldGFpbHMucXVvdGVzQ291bnQgPyA8UXVvdGVzUmVjZWl2ZWRJY29uIC8+IDogPE5vUXVvdGVzUmVjZWl2ZWRJY29uIC8+fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0dRb3V0ZVN0YXR1c0ljb25TcGFuPlxuICAgICAgICAgICAgICAgIHt0cmlwRGV0YWlscy5xdW90ZXNDb3VudCA/IGAke3RyaXBEZXRhaWxzLnF1b3Rlc0NvdW50fSBRdW90ZXMgUmVjZWl2ZWRgIDogJ05vIFF1b3RlcyBSZWNlaXZlZCd9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImYxNiBmdzcgcGZjMyBtYjggYXRfZGVzdGluYXRpb25cIj57dHJpcERldGFpbHMuZmlyc3REZXN0aW5hdGlvbk5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGZjMSBmMTQgbWIyNCBibG9jayBhdF9ib29raW5nSWRcIj57YEJvb2tpbmcgSUQgIyR7dHJpcERldGFpbHMuaWR9YH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIG1iMTUgbXI0IHByOCBhdF9kZXBhcnR1cmVEYXRlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IHBmYzQgbWI0XCI+RGVwYXJ0dXJlIERhdGU8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IHBmYzNcIj57Zm9ybWF0KHRyaXBEZXRhaWxzLnN0YXJ0RGF0ZSwgJ2RkZCwgREQgTU1NLCBZWVlZJyl9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBtYjE1IG1sNCBwbDggYXRfZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgcGZjNCBtYjRcIj5EdXJhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgcGZjM1wiPnt0cmlwRGV0YWlscy50cmlwRGF5c30gRGF5czwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIGF0X3RyYXZlbGVyc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBwZmM0IG1iNFwiPlRyYXZlbGVyczwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgcGZjM1wiPnt0cmlwRGV0YWlscy5hZHVsdH0gQWR1bHQgJiB7dHJpcERldGFpbHMuY2hpbGR9IENoaWxkcmVuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0cmlwRGV0YWlscy5pc0R1cGxpY2F0ZVxuICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgOiA8R0NhcmRPcHRpb25EaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25UcmlnZ2VyIGFic29sdXRlIHQ4IHIxNSBjdXJzb3JQIGF0X3RyaXBDYXJkQWN0aW9uVHJpZ2dlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkVHJpZ2dlckljb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxHdHJpcENhcmRBY3Rpb25EaXYgY2xhc3NOYW1lPVwiY2FyZE9wdGlvbiBzYmN3IGFic29sdXRlIHoxMCB0OCByOCBhdF90cmlwQ2FyZEFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0cmlwRGV0YWlscy5ib29raW5nU3RhdHVzTGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gJ2Jvb2tlZCcgP1xuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXN0eWxlLW5vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RyaXBEZXRhaWxzLmludm9pY2VVcmx9IGNsYXNzTmFtZT1cInBmYzMgcDE1IGJsb2NrIGN1cnNvclBcIj5WaWV3IEludm9pY2U8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+IDpcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1zdHlsZS1ub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYW5jZWwoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2VkaXRQcmVmZXJlbmNlVXJsfSBjbGFzc05hbWU9XCJwZmMzIHAxNSBibG9jayBjdXJzb3JQXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50cmFja1NlZ21lbnRFdmVudCgnJywgJ0VkaXQgUHJlZmVyZW5jZXMnKX0+RWRpdCBQcmVmZXJlbmNlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0d0cmlwQ2FyZEFjdGlvbkRpdj5cbiAgICAgICAgICAgICAgPC9HQ2FyZE9wdGlvbkRpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UcmlwQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIHRyaXBEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHJlYWN0aXZhdGVCb29raW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHB1c2gsIGdvQmFjayB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5cbmltcG9ydCB7IHJlYWN0aXZhdGVCb29raW5nIH0gZnJvbSAnbW9kdWxlcy90cmlwL2FjdGlvbnMvdHJpcEFjdGl2aXRpZXMnO1xuaW1wb3J0IEFsbFRyaXBzIGZyb20gJy4vQWxsVHJpcHMnO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJpcHM6IHN0YXRlLnRyaXAubGlzdCxcbiAgICB9O1xuICB9LFxuICB7XG4gICAgcHVzaCxcbiAgICBnb0JhY2ssXG4gICAgcmVhY3RpdmF0ZUJvb2tpbmdcbiAgfSkoQWxsVHJpcHMpKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgWW91VHViZVZpZGVvIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBpZiAoIXdpbmRvdy5ZVCkge1xuICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB0YWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xuXG4gICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSB0aGlzLmxvYWRWaWRlbztcblxuICAgICAgY29uc3QgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRWaWRlbygpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRWaWRlbyA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uUGxheWVyUmVhZHksIG9uUGxheWVyU3RhdGVDaGFuZ2UsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucGxheWVyID0gbmV3IHdpbmRvdy5ZVC5QbGF5ZXIoYHlvdXR1YmUtcGxheWVyLSR7aWR9YCwge1xuICAgICAgdmlkZW9JZDogaWQsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwbGF5ZXJWYXJzOiB7ICdhdXRvcGxheSc6IDEsICdsb29wJzogMSwgJ3BsYXlsaXN0JzogaWQgIH0sXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25SZWFkeTogb25QbGF5ZXJSZWFkeSxcbiAgICAgICAgb25TdGF0ZUNoYW5nZTogb25QbGF5ZXJTdGF0ZUNoYW5nZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17YHlvdXR1YmUtcGxheWVyLSR7aWR9YH0gLz5cbiAgICApO1xuICB9O1xufVxuXG5Zb3VUdWJlVmlkZW8ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvblBsYXllclN0YXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QbGF5ZXJSZWFkeTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbllvdVR1YmVWaWRlby5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUGxheWVyU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxuICBvblBsYXllclJlYWR5OiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgWW91VHViZVZpZGVvO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgKiBhcyBybHBSZWR1Y2VycyBmcm9tICdtb2R1bGVzL3JscC9yZWR1Y2VyJztcbmltcG9ydCB7IGxvYWQgYXMgZmV0Y2hUcmlwc0RhdGEgfSBmcm9tICdtb2R1bGVzL3RyaXAvYWN0aW9ucy90cmlwTGlzdCc7XG5pbXBvcnQgeyB0cmlwc0xvYWRlZCB9IGZyb20gJ21vZHVsZXMvdHJpcC9yZWR1Y2Vycy90cmlwTGlzdCc7XG5cbmNvbnN0IHRyaXBBY3Rpb24gPSB7XG4gIGZldGNoVHJpcHNEYXRhLFxuICB0cmlwc0xvYWRlZFxufTtcblxuZXhwb3J0IHsgdHJpcEFjdGlvbiwgcmxwUmVkdWNlcnMgfTtcblxuY29uc3QgQWxsVHJpcHNBc3luYyA9ICgpID0+IChcbiAgPExheW91dCAvPlxuKTtcblxuQWxsVHJpcHNBc3luYy5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQWxsVHJpcHNBc3luYztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBBbGxUcmlwcyBmcm9tICdhcHAtdjIvbW9kdWxlcy90cmlwL2FsbFRyaXBzJztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGRhdGEgPSB7fSkgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICBldmVudDogZGF0YS5ldmVudCxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYXZlbGxlckRhc2hib2FyZCcsXG4gICAgICAgIHNlY3Rpb246IGRhdGEuc2VjdGlvbiB8fCAnJyxcbiAgICAgICAgb2JqZWN0OiBkYXRhLm9iamVjdCxcbiAgICAgICAgY3RhOiBkYXRhLmN0YSxcbiAgICAgICAgbWlzY19pZF8xOiBkYXRhLm1pc2NJZDEsXG4gICAgICAgIG1pc2NfdHlwZV8xOiBkYXRhLm1pc2NUeXBlMSxcbiAgICAgICAgbWlzY19pZF8yOiBkYXRhLm1pc2NJZDIsXG4gICAgICAgIG1pc2NfdHlwZV8yOiBkYXRhLm1pc2NUeXBlMixcbiAgICAgICAgbWlzY19pZF8zOiBkYXRhLm1pc2NJZDMsXG4gICAgICAgIG1pc2NfdHlwZV8zOiBkYXRhLm1pc2NUeXBlMyxcbiAgICAgICAgbWlzY19pZF80OiBkYXRhLm1pc2NJZDQsXG4gICAgICAgIG1pc2NfdHlwZV80OiBkYXRhLm1pc2NUeXBlNCxcbiAgICAgICAgbWlzY19pZF81OiBkYXRhLm1pc2NJZDUsXG4gICAgICAgIG1pc2NfdHlwZV81OiBkYXRhLm1pc2NUeXBlNVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgQWxsVHJpcHNDb250YWluZXIgPSBBbGxUcmlwcy5jb250YWluZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9mdWxsbmFtZVwiIGNvbnRlbnQ9XCJBbGwgVHJpcHNcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJwYWdlX25hbWVcIiBjb250ZW50PVwiQWxsIFRyaXBzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibmFtZVwiIGNvbnRlbnQ9XCJBbGwgVHJpcHNcIiAvPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPHRpdGxlPlRyYXZlbGVyIERhc2hib2FyZCAtIFRyYXZlbFRyaWFuZ2xlPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdHJhdmVsbGVycy9kYXNoYm9hcmRcIiAvPlxuICAgICAgICA8L0hlbG1ldD5cblxuICAgICAgICA8QWxsVHJpcHNDb250YWluZXIgdHJhY2tTZWdtZW50PXt0aGlzLnRyYWNrU2VnbWVudEV2ZW50fSAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=