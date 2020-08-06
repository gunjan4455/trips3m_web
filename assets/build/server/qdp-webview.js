require("source-map-support").install();
exports.ids = ["qdp-webview"];
exports.modules = {

/***/ "./app-v2/modules/roster/G.js":
/*!************************************!*\
  !*** ./app-v2/modules/roster/G.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRosterDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GRosterDiv = _glamorous.default.div({
  // top: '60px',
  width: 'calc(100% - 24px)',
  left: '12px',
  top: '12px',
  zIndex: '9999',
  '& > div': {
    position: 'relative'
  },
  '& .rosterClose': {
    display: 'block',
    width: '24px',
    height: '24px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    '&:before, &:after': {
      content: '\' \'',
      position: 'absolute',
      left: '7px',
      top: '10px',
      width: '12px',
      height: '1px',
      background: '#000',
      transform: 'rotateZ(45deg)'
    },
    '&:after': {
      transform: 'rotateZ(-45deg)'
    }
  },
  '& .toaster': {
    padding: '12px',
    paddingRight: '30px',
    color: '#333',
    border: '1px solid #333',
    background: '#efefef',
    borderRadius: '4px',
    fontSize: '16px',
    '&.errorRoster': {
      color: '#cb4138',
      borderColor: '#fd5346',
      background: '#fbdbd8',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#cb4138'
      }
    },
    '&.sucessRoster': {
      color: '#268f2a',
      borderColor: '#268f2a',
      background: '#d1f6d2',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#268f2a'
      }
    },
    '&.infoRoster': {
      color: '#1a78c2',
      borderColor: '#2196f3',
      background: '#d8e8fb',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#1a78c2'
      }
    },
    '&.warningToaster': {
      color: '#3e3e3e',
      borderColor: '#fac22e',
      background: '#fbf2dc',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#3e3e3e'
      }
    }
  }
});

exports.GRosterDiv = GRosterDiv;

/***/ }),

/***/ "./app-v2/modules/roster/Roster.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/roster/Roster.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/roster/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Roster is to display messages for dynamic layouts.
 * - rosterType - String: Defines type of message. Currently we support
 * rosterSuccess, rosterError and rosterInfo
 * - text - String [optional]: Single line message for user.
 * - message - Object [optional]: For more complex messages which might contain link for user action.
 * For ex: {
 *     header: "New trip created!",
 *     message: "Please activate your email address. To resend activation mail {{send_activation_mail}}",
 *     links: [{type: 'send_activation_mail', label: 'Click here'} ]
 *   }
 * - timeout - Number [optional]: if provided, Message will disappear after timeout in milliseconds
 * - callback - Function [optional]: Callback to pass event based on which action is to be called by parent.
 *
 *  P.S. - Either rosterText or rosterMessage should be present. If both are present rosterText would have priority.
 */
let Roster = (_temp = _class = class Roster extends _react.default.Component {
  /**
   * rosterType could have two types:
   *  - sucessRoster
   *  - errorRoster
   *  - infoRoster
   */
  constructor(props) {
    super(props);
    this.state = {
      isRosterOpen: props.isRosterOpen
    };
    this.closeRoster = this.closeRoster.bind(this);
  }

  componentDidMount() {
    if (this.state.isRosterOpen) {
      this.showRoster();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isRosterOpen && nextProps.isRosterOpen) {
      this.showRoster();
    }
  }

  showRoster() {
    this.setState({
      isRosterOpen: true
    }, () => {
      if (this.props.timeout && this.props.allowTimeOut) {
        setTimeout(() => {
          this.closeRoster();
        }, this.props.timeout);
      }
    });
  }

  closeRoster() {
    this.setState({
      isRosterOpen: false
    });
    this.props.hideRoster();
  }

  render() {
    const {
      type,
      message
    } = this.props;
    return this.state.isRosterOpen && message ? _react.default.createElement(_G.GRosterDiv, {
      className: "fixed"
    }, _react.default.createElement("div", {
      className: `toaster ${type}`
    }, _react.default.createElement("div", {
      className: "container dynamicTextInherit p0"
    }, message, _react.default.createElement("span", {
      className: "rosterClose",
      onClick: this.closeRoster
    })))) : null;
  }

}, _class.propTypes = {
  type: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  timeout: _propTypes.PropTypes.number,
  isRosterOpen: _propTypes.PropTypes.bool,
  hideRoster: _propTypes.PropTypes.func.isRequired,
  allowTimeOut: _propTypes.PropTypes.bool
}, _class.defaultProps = {
  type: 'infoRoster',
  isRosterOpen: false,
  allowTimeOut: true
}, _temp);
exports.default = Roster;

/***/ }),

/***/ "./app-v2/modules/roster/index.js":
/*!****************************************!*\
  !*** ./app-v2/modules/roster/index.js ***!
  \****************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/roster/action.js");

var _Roster = _interopRequireDefault(__webpack_require__(/*! ./Roster */ "./app-v2/modules/roster/Roster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  type: state.roster.type,
  message: state.roster.message,
  isRosterOpen: state.roster.isRosterOpen,
  allowTimeOut: state.roster.allowTimeOut
}), {
  hideRoster: _action.hideRoster
})(_Roster.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/qdpWebView/Layout.js":
/*!*********************************************!*\
  !*** ./app-v2/screens/qdpWebView/Layout.js ***!
  \*********************************************/
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

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _common = _interopRequireDefault(__webpack_require__(/*! app-v2/common */ "./app-v2/common.js"));

var _roster = _interopRequireDefault(__webpack_require__(/*! modules/roster */ "./app-v2/modules/roster/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Layout = class Layout extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (data = {}) => {
      const {
        tripId,
        currentQuote,
        currentQuoteId
      } = this.props;

      if (!currentQuote) {
        return;
      }

      (0, _segmentEvents.trackSegment)({
        event: data.event,
        category: data.category || 'QDP',
        section: data.section || '',
        object: data.object || `Quote/${currentQuoteId}`,
        cta: data.cta,
        trip_id: tripId || (getCookie(TRIP_ID_COOKIE_KEY), 10) || 0,
        quote_id: currentQuoteId,
        invoice_id: currentQuote.invoiceDetails.id || 0,
        destination_id: currentQuote.destinationsList.length ? currentQuote.destinationsList[0].id : 0,
        agent_id: currentQuote.agent.id || 0,
        trip_status: currentQuote.tripStatus || '',
        quote_status: currentQuote.status || '',
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
    };

    this.onSensorChange = (isVisible, config) => {
      if (isVisible) {
        if (!this.isEventTracked[config.name]) {
          this.isEventTracked[config.name] = true;
          this.trackSegmentEvent({
            event: _segmentEvents.ORGANISM_VIEWED,
            section: config.name,
            cta: ''
          });
        }
      }
    };

    this.isEventTracked = {};
  }

  render() {
    const {
      query
    } = this.props.location;
    const ComponentsInstance = _common.default[query.component];
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("meta", {
      name: "page_fullname",
      content: "Quote Detail"
    }), _react.default.createElement("meta", {
      name: "page_name",
      content: "Quote Detail"
    }), _react.default.createElement("meta", {
      name: "name",
      content: "Quote Detail"
    })), _react.default.createElement(_roster.default, {
      timeout: 3000
    }), _react.default.createElement("div", {
      className: "clearfix contentBackground sbc5"
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row pb48"
    }, _react.default.createElement(ComponentsInstance, {
      trackSegment: data => this.trackSegmentEvent(data)
    })))));
  }

};
Layout.propTypes = {
  location: _propTypes.default.object.isRequired,
  layout: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  quotes: _propTypes.default.object.isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired
};
var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/qdpWebView/QdpAsync.js":
/*!***********************************************!*\
  !*** ./app-v2/screens/qdpWebView/QdpAsync.js ***!
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

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/qdpWebView/Layout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let QdpAsync = class QdpAsync extends _react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

};
exports.default = QdpAsync;
QdpAsync.propTypes = {
  location: _propTypes.default.object.isRequired,
  layout: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  quotes: _propTypes.default.object.isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yb3N0ZXIvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yb3N0ZXIvUm9zdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Jvc3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9xZHBXZWJWaWV3L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9xZHBXZWJWaWV3L1FkcEFzeW5jLmpzIl0sIm5hbWVzIjpbIkdSb3N0ZXJEaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJ3aWR0aCIsImxlZnQiLCJ0b3AiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJyaWdodCIsImN1cnNvciIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwidHJhbnNmb3JtIiwicGFkZGluZyIsInBhZGRpbmdSaWdodCIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJib3JkZXJDb2xvciIsIlJvc3RlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaXNSb3N0ZXJPcGVuIiwiY2xvc2VSb3N0ZXIiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJzaG93Um9zdGVyIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsInRpbWVvdXQiLCJhbGxvd1RpbWVPdXQiLCJzZXRUaW1lb3V0IiwiaGlkZVJvc3RlciIsInJlbmRlciIsInR5cGUiLCJtZXNzYWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwicm9zdGVyIiwiTGF5b3V0IiwidHJhY2tTZWdtZW50RXZlbnQiLCJkYXRhIiwidHJpcElkIiwiY3VycmVudFF1b3RlIiwiY3VycmVudFF1b3RlSWQiLCJldmVudCIsImNhdGVnb3J5Iiwic2VjdGlvbiIsIm9iamVjdCIsImN0YSIsInRyaXBfaWQiLCJnZXRDb29raWUiLCJUUklQX0lEX0NPT0tJRV9LRVkiLCJxdW90ZV9pZCIsImludm9pY2VfaWQiLCJpbnZvaWNlRGV0YWlscyIsImlkIiwiZGVzdGluYXRpb25faWQiLCJkZXN0aW5hdGlvbnNMaXN0IiwibGVuZ3RoIiwiYWdlbnRfaWQiLCJhZ2VudCIsInRyaXBfc3RhdHVzIiwidHJpcFN0YXR1cyIsInF1b3RlX3N0YXR1cyIsInN0YXR1cyIsIm1pc2NfaWRfMSIsIm1pc2NJZDEiLCJtaXNjX3R5cGVfMSIsIm1pc2NUeXBlMSIsIm1pc2NfaWRfMiIsIm1pc2NJZDIiLCJtaXNjX3R5cGVfMiIsIm1pc2NUeXBlMiIsIm1pc2NfaWRfMyIsIm1pc2NJZDMiLCJtaXNjX3R5cGVfMyIsIm1pc2NUeXBlMyIsIm1pc2NfaWRfNCIsIm1pc2NJZDQiLCJtaXNjX3R5cGVfNCIsIm1pc2NUeXBlNCIsIm1pc2NfaWRfNSIsIm1pc2NJZDUiLCJtaXNjX3R5cGVfNSIsIm1pc2NUeXBlNSIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiY29uZmlnIiwiaXNFdmVudFRyYWNrZWQiLCJuYW1lIiwiT1JHQU5JU01fVklFV0VEIiwicXVlcnkiLCJsb2NhdGlvbiIsIkNvbXBvbmVudHNJbnN0YW5jZSIsImNvbW1vbiIsImNvbXBvbmVudCIsImxheW91dCIsInBhcmFtcyIsInF1b3RlcyIsIlFkcEFzeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUdPLE1BQU1BLGFBQWFDLG1CQUFVQyxHQUFWLENBQWM7QUFDdEM7QUFDQUMsU0FBTyxtQkFGK0I7QUFHdENDLFFBQU0sTUFIZ0M7QUFJdENDLE9BQUssTUFKaUM7QUFLdENDLFVBQVEsTUFMOEI7QUFNdEMsYUFBVztBQUNUQyxjQUFVO0FBREQsR0FOMkI7QUFTdEMsb0JBQWtC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QUFVOUQsbUJBQVVpQixNQUFWLENBQWlCWixVQURWO0FBRWpCNkQsVUFBUWxFLG1CQUFVaUIsTUFBVixDQUFpQlosVUFGUjtBQUdqQjhELFVBQVFuRSxtQkFBVWlCLE1BQVYsQ0FBaUJaLFVBSFI7QUFJakIrRCxVQUFRcEUsbUJBQVVpQixNQUFWLENBQWlCWixVQUpSO0FBS2pCTyxnQkFBY1osbUJBQVVpQixNQUFWLENBQWlCWixVQUxkO0FBTWpCUSxrQkFBZ0JiLG1CQUFVRSxNQUFWLENBQWlCRyxVQU5oQjtBQU9qQk0sVUFBUVgsbUJBQVVFLE1BQVYsQ0FBaUJHO0FBUFIsQ0FBbkI7ZUFXZUcsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R2Y7O0FBQ0E7O0FBRUE7Ozs7OztJQUVxQjZELFEsR0FBTixNQUFNQSxRQUFOLFNBQXVCekYsZ0JBQXZCLENBQWlDO0FBQzlDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFRGMsV0FBUztBQUNQLFdBQ0UsNkJBQUMsZUFBRCxFQUFZLEtBQUtkLEtBQWpCLENBREY7QUFHRDs7QUFUNkMsQzs7QUFZaER1RixTQUFTdEUsU0FBVCxHQUFxQjtBQUNuQitELFlBQVU5RCxtQkFBVWlCLE1BQVYsQ0FBaUJaLFVBRFI7QUFFbkI2RCxVQUFRbEUsbUJBQVVpQixNQUFWLENBQWlCWixVQUZOO0FBR25COEQsVUFBUW5FLG1CQUFVaUIsTUFBVixDQUFpQlosVUFITjtBQUluQitELFVBQVFwRSxtQkFBVWlCLE1BQVYsQ0FBaUJaLFVBSk47QUFLbkJPLGdCQUFjWixtQkFBVWlCLE1BQVYsQ0FBaUJaLFVBTFo7QUFNbkJRLGtCQUFnQmIsbUJBQVVFLE1BQVYsQ0FBaUJHLFVBTmQ7QUFPbkJNLFVBQVFYLG1CQUFVRSxNQUFWLENBQWlCRztBQVBOLENBQXJCLEMiLCJmaWxlIjoicWRwLXdlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5leHBvcnQgY29uc3QgR1Jvc3RlckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAvLyB0b3A6ICc2MHB4JyxcbiAgd2lkdGg6ICdjYWxjKDEwMCUgLSAyNHB4KScsXG4gIGxlZnQ6ICcxMnB4JyxcbiAgdG9wOiAnMTJweCcsXG4gIHpJbmRleDogJzk5OTknLFxuICAnJiA+IGRpdic6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgJyYgLnJvc3RlckNsb3NlJzoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6JzI0cHgnLFxuICAgIGhlaWdodDonMjRweCcsXG4gICAgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgICByaWdodDonM3B4JyxcbiAgICB0b3A6JzNweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJyA6IHtcbiAgICAgIGNvbnRlbnQ6ICdcXCcgXFwnJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzdweCcsXG4gICAgICB0b3A6ICcxMHB4JyxcbiAgICAgIHdpZHRoOicxMnB4JyxcbiAgICAgIGhlaWdodDonMXB4JyxcbiAgICAgIGJhY2tncm91bmQ6JyMwMDAnLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWig0NWRlZyknLFxuICAgIH0sXG4gICAgJyY6YWZ0ZXInIDoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWigtNDVkZWcpJyxcbiAgICB9LFxuICB9LFxuICAnJiAudG9hc3Rlcic6IHtcbiAgICBwYWRkaW5nOiAnMTJweCcsXG4gICAgcGFkZGluZ1JpZ2h0OiAnMzBweCcsXG4gICAgY29sb3I6ICcjMzMzJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzMzMycsXG4gICAgYmFja2dyb3VuZDogJyNlZmVmZWYnLFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAnJi5lcnJvclJvc3Rlcic6IHtcbiAgICAgIGNvbG9yOiAnI2NiNDEzOCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNmZDUzNDYnLFxuICAgICAgYmFja2dyb3VuZDogJyNmYmRiZDgnLFxuICAgICAgJyYgLnJvc3RlckNsb3NlOmJlZm9yZSwgJiAucm9zdGVyQ2xvc2U6YWZ0ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjY2I0MTM4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJi5zdWNlc3NSb3N0ZXInOiB7XG4gICAgICBjb2xvcjogJyMyNjhmMmEnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjMjY4ZjJhJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZDFmNmQyJyxcbiAgICAgICcmIC5yb3N0ZXJDbG9zZTpiZWZvcmUsICYgLnJvc3RlckNsb3NlOmFmdGVyJyA6IHtcbiAgICAgICAgYmFja2dyb3VuZDonIzI2OGYyYScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYuaW5mb1Jvc3Rlcic6IHtcbiAgICAgIGNvbG9yOiAnIzFhNzhjMicsXG4gICAgICBib3JkZXJDb2xvcjogJyMyMTk2ZjMnLFxuICAgICAgYmFja2dyb3VuZDogJyNkOGU4ZmInLFxuICAgICAgJyYgLnJvc3RlckNsb3NlOmJlZm9yZSwgJiAucm9zdGVyQ2xvc2U6YWZ0ZXInIDoge1xuICAgICAgICBiYWNrZ3JvdW5kOicjMWE3OGMyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJi53YXJuaW5nVG9hc3Rlcic6IHtcbiAgICAgIGNvbG9yOiAnIzNlM2UzZScsXG4gICAgICBib3JkZXJDb2xvcjogJyNmYWMyMmUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmYmYyZGMnLFxuICAgICAgJyYgLnJvc3RlckNsb3NlOmJlZm9yZSwgJiAucm9zdGVyQ2xvc2U6YWZ0ZXInIDoge1xuICAgICAgICBiYWNrZ3JvdW5kOicjM2UzZTNlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHUm9zdGVyRGl2IH0gZnJvbSAnLi9HJztcblxuLyoqXG4gKiBSb3N0ZXIgaXMgdG8gZGlzcGxheSBtZXNzYWdlcyBmb3IgZHluYW1pYyBsYXlvdXRzLlxuICogLSByb3N0ZXJUeXBlIC0gU3RyaW5nOiBEZWZpbmVzIHR5cGUgb2YgbWVzc2FnZS4gQ3VycmVudGx5IHdlIHN1cHBvcnRcbiAqIHJvc3RlclN1Y2Nlc3MsIHJvc3RlckVycm9yIGFuZCByb3N0ZXJJbmZvXG4gKiAtIHRleHQgLSBTdHJpbmcgW29wdGlvbmFsXTogU2luZ2xlIGxpbmUgbWVzc2FnZSBmb3IgdXNlci5cbiAqIC0gbWVzc2FnZSAtIE9iamVjdCBbb3B0aW9uYWxdOiBGb3IgbW9yZSBjb21wbGV4IG1lc3NhZ2VzIHdoaWNoIG1pZ2h0IGNvbnRhaW4gbGluayBmb3IgdXNlciBhY3Rpb24uXG4gKiBGb3IgZXg6IHtcbiAqICAgICBoZWFkZXI6IFwiTmV3IHRyaXAgY3JlYXRlZCFcIixcbiAqICAgICBtZXNzYWdlOiBcIlBsZWFzZSBhY3RpdmF0ZSB5b3VyIGVtYWlsIGFkZHJlc3MuIFRvIHJlc2VuZCBhY3RpdmF0aW9uIG1haWwge3tzZW5kX2FjdGl2YXRpb25fbWFpbH19XCIsXG4gKiAgICAgbGlua3M6IFt7dHlwZTogJ3NlbmRfYWN0aXZhdGlvbl9tYWlsJywgbGFiZWw6ICdDbGljayBoZXJlJ30gXVxuICogICB9XG4gKiAtIHRpbWVvdXQgLSBOdW1iZXIgW29wdGlvbmFsXTogaWYgcHJvdmlkZWQsIE1lc3NhZ2Ugd2lsbCBkaXNhcHBlYXIgYWZ0ZXIgdGltZW91dCBpbiBtaWxsaXNlY29uZHNcbiAqIC0gY2FsbGJhY2sgLSBGdW5jdGlvbiBbb3B0aW9uYWxdOiBDYWxsYmFjayB0byBwYXNzIGV2ZW50IGJhc2VkIG9uIHdoaWNoIGFjdGlvbiBpcyB0byBiZSBjYWxsZWQgYnkgcGFyZW50LlxuICpcbiAqICBQLlMuIC0gRWl0aGVyIHJvc3RlclRleHQgb3Igcm9zdGVyTWVzc2FnZSBzaG91bGQgYmUgcHJlc2VudC4gSWYgYm90aCBhcmUgcHJlc2VudCByb3N0ZXJUZXh0IHdvdWxkIGhhdmUgcHJpb3JpdHkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaXNSb3N0ZXJPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRlUm9zdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFsbG93VGltZU91dDogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICAvKipcbiAgICogcm9zdGVyVHlwZSBjb3VsZCBoYXZlIHR3byB0eXBlczpcbiAgICogIC0gc3VjZXNzUm9zdGVyXG4gICAqICAtIGVycm9yUm9zdGVyXG4gICAqICAtIGluZm9Sb3N0ZXJcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2luZm9Sb3N0ZXInLFxuICAgIGlzUm9zdGVyT3BlbjogZmFsc2UsXG4gICAgYWxsb3dUaW1lT3V0OiB0cnVlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzUm9zdGVyT3BlbjogcHJvcHMuaXNSb3N0ZXJPcGVuXG4gICAgfTtcbiAgICB0aGlzLmNsb3NlUm9zdGVyID0gdGhpcy5jbG9zZVJvc3Rlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNSb3N0ZXJPcGVuKSB7XG4gICAgICB0aGlzLnNob3dSb3N0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNSb3N0ZXJPcGVuICYmIG5leHRQcm9wcy5pc1Jvc3Rlck9wZW4pIHtcbiAgICAgIHRoaXMuc2hvd1Jvc3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dSb3N0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzUm9zdGVyT3BlbjogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50aW1lb3V0ICYmIHRoaXMucHJvcHMuYWxsb3dUaW1lT3V0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VSb3N0ZXIoKTtcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlUm9zdGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Jvc3Rlck9wZW46IGZhbHNlIH0pO1xuICAgIHRoaXMucHJvcHMuaGlkZVJvc3RlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgbWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzUm9zdGVyT3BlbiAmJiBtZXNzYWdlID8gKFxuICAgICAgPEdSb3N0ZXJEaXYgY2xhc3NOYW1lPVwiZml4ZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2FzdGVyICR7dHlwZX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkeW5hbWljVGV4dEluaGVyaXQgcDBcIj5cbiAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm9zdGVyQ2xvc2VcIiBvbkNsaWNrPXt0aGlzLmNsb3NlUm9zdGVyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR1Jvc3RlckRpdj5cbiAgICApIDogbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgc2hvd1Jvc3RlciwgaGlkZVJvc3RlciB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCBSb3N0ZXIgZnJvbSAnLi9Sb3N0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgdHlwZTogc3RhdGUucm9zdGVyLnR5cGUsXG4gICAgbWVzc2FnZTogc3RhdGUucm9zdGVyLm1lc3NhZ2UsXG4gICAgaXNSb3N0ZXJPcGVuOiBzdGF0ZS5yb3N0ZXIuaXNSb3N0ZXJPcGVuLFxuICAgIGFsbG93VGltZU91dDogc3RhdGUucm9zdGVyLmFsbG93VGltZU91dFxuICB9KSxcbiAge1xuICAgIGhpZGVSb3N0ZXJcbiAgfVxuKShSb3N0ZXIpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCB7IE9SR0FOSVNNX1ZJRVdFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICdhcHAtdjIvY29tbW9uJztcbmltcG9ydCBSb3N0ZXIgZnJvbSAnbW9kdWxlcy9yb3N0ZXInO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB7fTtcbiAgfVxuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGRhdGEgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgdHJpcElkLCBjdXJyZW50UXVvdGUsIGN1cnJlbnRRdW90ZUlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFjdXJyZW50UXVvdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQ6IGRhdGEuZXZlbnQsXG4gICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnUURQJyxcbiAgICAgIHNlY3Rpb246IGRhdGEuc2VjdGlvbiB8fCAnJyxcbiAgICAgIG9iamVjdDogZGF0YS5vYmplY3QgfHwgYFF1b3RlLyR7Y3VycmVudFF1b3RlSWR9YCxcbiAgICAgIGN0YTogZGF0YS5jdGEsXG4gICAgICB0cmlwX2lkOiB0cmlwSWQgfHwgKGdldENvb2tpZShUUklQX0lEX0NPT0tJRV9LRVkpLCAxMCkgfHwgMCxcbiAgICAgIHF1b3RlX2lkOiBjdXJyZW50UXVvdGVJZCxcbiAgICAgIGludm9pY2VfaWQ6IGN1cnJlbnRRdW90ZS5pbnZvaWNlRGV0YWlscy5pZCB8fCAwLFxuICAgICAgZGVzdGluYXRpb25faWQ6IGN1cnJlbnRRdW90ZS5kZXN0aW5hdGlvbnNMaXN0Lmxlbmd0aCA/IGN1cnJlbnRRdW90ZS5kZXN0aW5hdGlvbnNMaXN0WzBdLmlkIDogMCxcbiAgICAgIGFnZW50X2lkOiBjdXJyZW50UXVvdGUuYWdlbnQuaWQgfHwgMCxcbiAgICAgIHRyaXBfc3RhdHVzOiBjdXJyZW50UXVvdGUudHJpcFN0YXR1cyB8fCAnJyxcbiAgICAgIHF1b3RlX3N0YXR1czogY3VycmVudFF1b3RlLnN0YXR1cyB8fCAnJyxcbiAgICAgIG1pc2NfaWRfMTogZGF0YS5taXNjSWQxLFxuICAgICAgbWlzY190eXBlXzE6IGRhdGEubWlzY1R5cGUxLFxuICAgICAgbWlzY19pZF8yOiBkYXRhLm1pc2NJZDIsXG4gICAgICBtaXNjX3R5cGVfMjogZGF0YS5taXNjVHlwZTIsXG4gICAgICBtaXNjX2lkXzM6IGRhdGEubWlzY0lkMyxcbiAgICAgIG1pc2NfdHlwZV8zOiBkYXRhLm1pc2NUeXBlMyxcbiAgICAgIG1pc2NfaWRfNDogZGF0YS5taXNjSWQ0LFxuICAgICAgbWlzY190eXBlXzQ6IGRhdGEubWlzY1R5cGU0LFxuICAgICAgbWlzY19pZF81OiBkYXRhLm1pc2NJZDUsXG4gICAgICBtaXNjX3R5cGVfNTogZGF0YS5taXNjVHlwZTVcbiAgICB9KTtcbiAgfTtcblxuICBvblNlbnNvckNoYW5nZSA9IChpc1Zpc2libGUsIGNvbmZpZykgPT4ge1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIGlmICghdGhpcy5pc0V2ZW50VHJhY2tlZFtjb25maWcubmFtZV0pIHtcbiAgICAgICAgdGhpcy5pc0V2ZW50VHJhY2tlZFtjb25maWcubmFtZV0gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgICAgIGV2ZW50OiBPUkdBTklTTV9WSUVXRUQsXG4gICAgICAgICAgc2VjdGlvbjogY29uZmlnLm5hbWUsXG4gICAgICAgICAgY3RhOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbjtcbiAgICBjb25zdCBDb21wb25lbnRzSW5zdGFuY2UgPSBjb21tb25bcXVlcnkuY29tcG9uZW50XTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG5cbiAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9mdWxsbmFtZVwiIGNvbnRlbnQ9XCJRdW90ZSBEZXRhaWxcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJwYWdlX25hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibmFtZVwiIGNvbnRlbnQ9XCJRdW90ZSBEZXRhaWxcIiAvPlxuICAgICAgICA8L0hlbG1ldD5cblxuICAgICAgICA8Um9zdGVyIHRpbWVvdXQ9ezMwMDB9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBjb250ZW50QmFja2dyb3VuZCBzYmM1XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiNDhcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudHNJbnN0YW5jZSB0cmFja1NlZ21lbnQ9eyhkYXRhKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KGRhdGEpfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxheW91dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFkcEFzeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5RZHBBc3luYy5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxheW91dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9