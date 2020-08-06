require("source-map-support").install();
exports.ids = ["webview"];
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

/***/ "./app-v2/screens/webview/Layout.js":
/*!******************************************!*\
  !*** ./app-v2/screens/webview/Layout.js ***!
  \******************************************/
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

var _queryString = __webpack_require__(/*! query-string */ "query-string");

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

    this.parseFilters = (query, filterOptions = []) => {
      const filters = Object.keys(query).filter(key => filterOptions.includes(key)).reduce((obj, key) => {
        obj[key] = query[key];
        return obj;
      }, {});
      return (0, _queryString.parse)((0, _queryString.stringify)(filters), {
        arrayFormat: 'bracket'
      });
    };

    this.isEventTracked = {};
  }

  render() {
    const {
      query
    } = this.props.location;
    const filterOptions = ['components[]'];
    const parsedComponets = this.parseFilters(query, filterOptions);
    const components = parsedComponets['components'];
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
    }, components.map((component, $index) => {
      const ComponentsInstance = _common.default[component];
      return _react.default.createElement(ComponentsInstance, {
        trackSegment: data => this.trackSegmentEvent(data)
      });
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

/***/ "./app-v2/screens/webview/WebView.js":
/*!*******************************************!*\
  !*** ./app-v2/screens/webview/WebView.js ***!
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

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/webview/Layout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let WebView = class WebView extends _react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

};
exports.default = WebView;
WebView.propTypes = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yb3N0ZXIvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yb3N0ZXIvUm9zdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Jvc3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy93ZWJ2aWV3L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy93ZWJ2aWV3L1dlYlZpZXcuanMiXSwibmFtZXMiOlsiR1Jvc3RlckRpdiIsImdsYW1vcm91cyIsImRpdiIsIndpZHRoIiwibGVmdCIsInRvcCIsInpJbmRleCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImhlaWdodCIsInJpZ2h0IiwiY3Vyc29yIiwiY29udGVudCIsImJhY2tncm91bmQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nIiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImJvcmRlckNvbG9yIiwiUm9zdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpc1Jvc3Rlck9wZW4iLCJjbG9zZVJvc3RlciIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsInNob3dSb3N0ZXIiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwidGltZW91dCIsImFsbG93VGltZU91dCIsInNldFRpbWVvdXQiLCJoaWRlUm9zdGVyIiwicmVuZGVyIiwidHlwZSIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJyb3N0ZXIiLCJMYXlvdXQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImRhdGEiLCJ0cmlwSWQiLCJjdXJyZW50UXVvdGUiLCJjdXJyZW50UXVvdGVJZCIsImV2ZW50IiwiY2F0ZWdvcnkiLCJzZWN0aW9uIiwib2JqZWN0IiwiY3RhIiwidHJpcF9pZCIsImdldENvb2tpZSIsIlRSSVBfSURfQ09PS0lFX0tFWSIsInF1b3RlX2lkIiwiaW52b2ljZV9pZCIsImludm9pY2VEZXRhaWxzIiwiaWQiLCJkZXN0aW5hdGlvbl9pZCIsImRlc3RpbmF0aW9uc0xpc3QiLCJsZW5ndGgiLCJhZ2VudF9pZCIsImFnZW50IiwidHJpcF9zdGF0dXMiLCJ0cmlwU3RhdHVzIiwicXVvdGVfc3RhdHVzIiwic3RhdHVzIiwibWlzY19pZF8xIiwibWlzY0lkMSIsIm1pc2NfdHlwZV8xIiwibWlzY1R5cGUxIiwibWlzY19pZF8yIiwibWlzY0lkMiIsIm1pc2NfdHlwZV8yIiwibWlzY1R5cGUyIiwibWlzY19pZF8zIiwibWlzY0lkMyIsIm1pc2NfdHlwZV8zIiwibWlzY1R5cGUzIiwibWlzY19pZF80IiwibWlzY0lkNCIsIm1pc2NfdHlwZV80IiwibWlzY1R5cGU0IiwibWlzY19pZF81IiwibWlzY0lkNSIsIm1pc2NfdHlwZV81IiwibWlzY1R5cGU1Iiwib25TZW5zb3JDaGFuZ2UiLCJpc1Zpc2libGUiLCJjb25maWciLCJpc0V2ZW50VHJhY2tlZCIsIm5hbWUiLCJPUkdBTklTTV9WSUVXRUQiLCJwYXJzZUZpbHRlcnMiLCJxdWVyeSIsImZpbHRlck9wdGlvbnMiLCJmaWx0ZXJzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsImluY2x1ZGVzIiwicmVkdWNlIiwib2JqIiwiYXJyYXlGb3JtYXQiLCJsb2NhdGlvbiIsInBhcnNlZENvbXBvbmV0cyIsImNvbXBvbmVudHMiLCJtYXAiLCJjb21wb25lbnQiLCIkaW5kZXgiLCJDb21wb25lbnRzSW5zdGFuY2UiLCJjb21tb24iLCJsYXlvdXQiLCJwYXJhbXMiLCJxdW90ZXMiLCJXZWJWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFEQTtBQUdPLE1B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O0FBTWpCUSxrQkFBZ0JiLG1CQUFVRSxNQUFWLENBQWlCRyxVQU5oQjtBQU9qQk0sVUFBUVgsbUJBQVVFLE1BQVYsQ0FBaUJHO0FBUFIsQ0FBbkI7ZUFXZUcsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SGY7O0FBQ0E7O0FBRUE7Ozs7OztJQUVxQjRFLE8sR0FBTixNQUFNQSxPQUFOLFNBQXNCeEcsZ0JBQXRCLENBQWdDO0FBQzdDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFRGMsV0FBUztBQUNQLFdBQ0UsNkJBQUMsZUFBRCxFQUFZLEtBQUtkLEtBQWpCLENBREY7QUFHRDs7QUFUNEMsQzs7QUFZL0NzRyxRQUFRckYsU0FBUixHQUFvQjtBQUNsQjBFLFlBQVV6RSxtQkFBVWlCLE1BQVYsQ0FBaUJaLFVBRFQ7QUFFbEI0RSxVQUFRakYsbUJBQVVpQixNQUFWLENBQWlCWixVQUZQO0FBR2xCNkUsVUFBUWxGLG1CQUFVaUIsTUFBVixDQUFpQlosVUFIUDtBQUlsQjhFLFVBQVFuRixtQkFBVWlCLE1BQVYsQ0FBaUJaLFVBSlA7QUFLbEJPLGdCQUFjWixtQkFBVWlCLE1BQVYsQ0FBaUJaLFVBTGI7QUFNbEJRLGtCQUFnQmIsbUJBQVVFLE1BQVYsQ0FBaUJHLFVBTmY7QUFPbEJNLFVBQVFYLG1CQUFVRSxNQUFWLENBQWlCRztBQVBQLENBQXBCLEMiLCJmaWxlIjoid2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBHUm9zdGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIC8vIHRvcDogJzYwcHgnLFxuICB3aWR0aDogJ2NhbGMoMTAwJSAtIDI0cHgpJyxcbiAgbGVmdDogJzEycHgnLFxuICB0b3A6ICcxMnB4JyxcbiAgekluZGV4OiAnOTk5OScsXG4gICcmID4gZGl2Jzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICAnJiAucm9zdGVyQ2xvc2UnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDonMjRweCcsXG4gICAgaGVpZ2h0OicyNHB4JyxcbiAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiczcHgnLFxuICAgIHRvcDonM3B4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInIDoge1xuICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnN3B4JyxcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgd2lkdGg6JzEycHgnLFxuICAgICAgaGVpZ2h0OicxcHgnLFxuICAgICAgYmFja2dyb3VuZDonIzAwMCcsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScsXG4gICAgfSxcbiAgICAnJjphZnRlcicgOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC00NWRlZyknLFxuICAgIH0sXG4gIH0sXG4gICcmIC50b2FzdGVyJzoge1xuICAgIHBhZGRpbmc6ICcxMnB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2VmZWZlZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICcmLmVycm9yUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjY2I0MTM4JyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZkNTM0NicsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZGJkOCcsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNjYjQxMzgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLnN1Y2Vzc1Jvc3Rlcic6IHtcbiAgICAgIGNvbG9yOiAnIzI2OGYyYScsXG4gICAgICBib3JkZXJDb2xvcjogJyMyNjhmMmEnLFxuICAgICAgYmFja2dyb3VuZDogJyNkMWY2ZDInLFxuICAgICAgJyYgLnJvc3RlckNsb3NlOmJlZm9yZSwgJiAucm9zdGVyQ2xvc2U6YWZ0ZXInIDoge1xuICAgICAgICBiYWNrZ3JvdW5kOicjMjY4ZjJhJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJi5pbmZvUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjMWE3OGMyJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzIxOTZmMycsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2Q4ZThmYicsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMxYTc4YzInLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLndhcm5pbmdUb2FzdGVyJzoge1xuICAgICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZhYzIyZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZjJkYycsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMzZTNlM2UnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEdSb3N0ZXJEaXYgfSBmcm9tICcuL0cnO1xuXG4vKipcbiAqIFJvc3RlciBpcyB0byBkaXNwbGF5IG1lc3NhZ2VzIGZvciBkeW5hbWljIGxheW91dHMuXG4gKiAtIHJvc3RlclR5cGUgLSBTdHJpbmc6IERlZmluZXMgdHlwZSBvZiBtZXNzYWdlLiBDdXJyZW50bHkgd2Ugc3VwcG9ydFxuICogcm9zdGVyU3VjY2Vzcywgcm9zdGVyRXJyb3IgYW5kIHJvc3RlckluZm9cbiAqIC0gdGV4dCAtIFN0cmluZyBbb3B0aW9uYWxdOiBTaW5nbGUgbGluZSBtZXNzYWdlIGZvciB1c2VyLlxuICogLSBtZXNzYWdlIC0gT2JqZWN0IFtvcHRpb25hbF06IEZvciBtb3JlIGNvbXBsZXggbWVzc2FnZXMgd2hpY2ggbWlnaHQgY29udGFpbiBsaW5rIGZvciB1c2VyIGFjdGlvbi5cbiAqIEZvciBleDoge1xuICogICAgIGhlYWRlcjogXCJOZXcgdHJpcCBjcmVhdGVkIVwiLFxuICogICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGFjdGl2YXRlIHlvdXIgZW1haWwgYWRkcmVzcy4gVG8gcmVzZW5kIGFjdGl2YXRpb24gbWFpbCB7e3NlbmRfYWN0aXZhdGlvbl9tYWlsfX1cIixcbiAqICAgICBsaW5rczogW3t0eXBlOiAnc2VuZF9hY3RpdmF0aW9uX21haWwnLCBsYWJlbDogJ0NsaWNrIGhlcmUnfSBdXG4gKiAgIH1cbiAqIC0gdGltZW91dCAtIE51bWJlciBbb3B0aW9uYWxdOiBpZiBwcm92aWRlZCwgTWVzc2FnZSB3aWxsIGRpc2FwcGVhciBhZnRlciB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICogLSBjYWxsYmFjayAtIEZ1bmN0aW9uIFtvcHRpb25hbF06IENhbGxiYWNrIHRvIHBhc3MgZXZlbnQgYmFzZWQgb24gd2hpY2ggYWN0aW9uIGlzIHRvIGJlIGNhbGxlZCBieSBwYXJlbnQuXG4gKlxuICogIFAuUy4gLSBFaXRoZXIgcm9zdGVyVGV4dCBvciByb3N0ZXJNZXNzYWdlIHNob3VsZCBiZSBwcmVzZW50LiBJZiBib3RoIGFyZSBwcmVzZW50IHJvc3RlclRleHQgd291bGQgaGF2ZSBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9zdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc1Jvc3Rlck9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVSb3N0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsb3dUaW1lT3V0OiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIC8qKlxuICAgKiByb3N0ZXJUeXBlIGNvdWxkIGhhdmUgdHdvIHR5cGVzOlxuICAgKiAgLSBzdWNlc3NSb3N0ZXJcbiAgICogIC0gZXJyb3JSb3N0ZXJcbiAgICogIC0gaW5mb1Jvc3RlclxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnaW5mb1Jvc3RlcicsXG4gICAgaXNSb3N0ZXJPcGVuOiBmYWxzZSxcbiAgICBhbGxvd1RpbWVPdXQ6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNSb3N0ZXJPcGVuOiBwcm9wcy5pc1Jvc3Rlck9wZW5cbiAgICB9O1xuICAgIHRoaXMuY2xvc2VSb3N0ZXIgPSB0aGlzLmNsb3NlUm9zdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Jvc3Rlck9wZW4pIHtcbiAgICAgIHRoaXMuc2hvd1Jvc3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc1Jvc3Rlck9wZW4gJiYgbmV4dFByb3BzLmlzUm9zdGVyT3Blbikge1xuICAgICAgdGhpcy5zaG93Um9zdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1Jvc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNSb3N0ZXJPcGVuOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVvdXQgJiYgdGhpcy5wcm9wcy5hbGxvd1RpbWVPdXQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVJvc3RlcigpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VSb3N0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzUm9zdGVyT3BlbjogZmFsc2UgfSk7XG4gICAgdGhpcy5wcm9wcy5oaWRlUm9zdGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNSb3N0ZXJPcGVuICYmIG1lc3NhZ2UgPyAoXG4gICAgICA8R1Jvc3RlckRpdiBjbGFzc05hbWU9XCJmaXhlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvYXN0ZXIgJHt0eXBlfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGR5bmFtaWNUZXh0SW5oZXJpdCBwMFwiPlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3N0ZXJDbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VSb3N0ZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HUm9zdGVyRGl2PlxuICAgICkgOiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBzaG93Um9zdGVyLCBoaWRlUm9zdGVyIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IFJvc3RlciBmcm9tICcuL1Jvc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB0eXBlOiBzdGF0ZS5yb3N0ZXIudHlwZSxcbiAgICBtZXNzYWdlOiBzdGF0ZS5yb3N0ZXIubWVzc2FnZSxcbiAgICBpc1Jvc3Rlck9wZW46IHN0YXRlLnJvc3Rlci5pc1Jvc3Rlck9wZW4sXG4gICAgYWxsb3dUaW1lT3V0OiBzdGF0ZS5yb3N0ZXIuYWxsb3dUaW1lT3V0XG4gIH0pLFxuICB7XG4gICAgaGlkZVJvc3RlclxuICB9XG4pKFJvc3RlcikpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgU2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcbmltcG9ydCB7IHBhcnNlLCBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeS1zdHJpbmcnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBjb21tb24gZnJvbSAnYXBwLXYyL2NvbW1vbic7XG5pbXBvcnQgUm9zdGVyIGZyb20gJ21vZHVsZXMvcm9zdGVyJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmlzRXZlbnRUcmFja2VkID0ge307XG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChkYXRhID0ge30pID0+IHtcbiAgICBjb25zdCB7IHRyaXBJZCwgY3VycmVudFF1b3RlLCBjdXJyZW50UXVvdGVJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghY3VycmVudFF1b3RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBkYXRhLmV2ZW50LFxuICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1FEUCcsXG4gICAgICBzZWN0aW9uOiBkYXRhLnNlY3Rpb24gfHwgJycsXG4gICAgICBvYmplY3Q6IGRhdGEub2JqZWN0IHx8IGBRdW90ZS8ke2N1cnJlbnRRdW90ZUlkfWAsXG4gICAgICBjdGE6IGRhdGEuY3RhLFxuICAgICAgdHJpcF9pZDogdHJpcElkIHx8IChnZXRDb29raWUoVFJJUF9JRF9DT09LSUVfS0VZKSwgMTApIHx8IDAsXG4gICAgICBxdW90ZV9pZDogY3VycmVudFF1b3RlSWQsXG4gICAgICBpbnZvaWNlX2lkOiBjdXJyZW50UXVvdGUuaW52b2ljZURldGFpbHMuaWQgfHwgMCxcbiAgICAgIGRlc3RpbmF0aW9uX2lkOiBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdC5sZW5ndGggPyBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdFswXS5pZCA6IDAsXG4gICAgICBhZ2VudF9pZDogY3VycmVudFF1b3RlLmFnZW50LmlkIHx8IDAsXG4gICAgICB0cmlwX3N0YXR1czogY3VycmVudFF1b3RlLnRyaXBTdGF0dXMgfHwgJycsXG4gICAgICBxdW90ZV9zdGF0dXM6IGN1cnJlbnRRdW90ZS5zdGF0dXMgfHwgJycsXG4gICAgICBtaXNjX2lkXzE6IGRhdGEubWlzY0lkMSxcbiAgICAgIG1pc2NfdHlwZV8xOiBkYXRhLm1pc2NUeXBlMSxcbiAgICAgIG1pc2NfaWRfMjogZGF0YS5taXNjSWQyLFxuICAgICAgbWlzY190eXBlXzI6IGRhdGEubWlzY1R5cGUyLFxuICAgICAgbWlzY19pZF8zOiBkYXRhLm1pc2NJZDMsXG4gICAgICBtaXNjX3R5cGVfMzogZGF0YS5taXNjVHlwZTMsXG4gICAgICBtaXNjX2lkXzQ6IGRhdGEubWlzY0lkNCxcbiAgICAgIG1pc2NfdHlwZV80OiBkYXRhLm1pc2NUeXBlNCxcbiAgICAgIG1pc2NfaWRfNTogZGF0YS5taXNjSWQ1LFxuICAgICAgbWlzY190eXBlXzU6IGRhdGEubWlzY1R5cGU1XG4gICAgfSk7XG4gIH07XG5cbiAgb25TZW5zb3JDaGFuZ2UgPSAoaXNWaXNpYmxlLCBjb25maWcpID0+IHtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFdmVudFRyYWNrZWRbY29uZmlnLm5hbWVdKSB7XG4gICAgICAgIHRoaXMuaXNFdmVudFRyYWNrZWRbY29uZmlnLm5hbWVdID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgICAgICBldmVudDogT1JHQU5JU01fVklFV0VELFxuICAgICAgICAgIHNlY3Rpb246IGNvbmZpZy5uYW1lLFxuICAgICAgICAgIGN0YTogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhcnNlRmlsdGVycyA9IChxdWVyeSwgZmlsdGVyT3B0aW9ucyA9IFtdKSA9PiB7XG4gICAgY29uc3QgZmlsdGVycyA9IE9iamVjdC5rZXlzKHF1ZXJ5KVxuICAgICAgLmZpbHRlcihrZXkgPT4gZmlsdGVyT3B0aW9ucy5pbmNsdWRlcyhrZXkpKVxuICAgICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgb2JqW2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHBhcnNlKHN0cmluZ2lmeShmaWx0ZXJzKSwgeyBhcnJheUZvcm1hdDogJ2JyYWNrZXQnIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMucHJvcHMubG9jYXRpb247XG4gICAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IFsnY29tcG9uZW50c1tdJ107XG4gICAgY29uc3QgcGFyc2VkQ29tcG9uZXRzID0gdGhpcy5wYXJzZUZpbHRlcnMocXVlcnksIGZpbHRlck9wdGlvbnMpO1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBwYXJzZWRDb21wb25ldHNbJ2NvbXBvbmVudHMnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG5cbiAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9mdWxsbmFtZVwiIGNvbnRlbnQ9XCJRdW90ZSBEZXRhaWxcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJwYWdlX25hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibmFtZVwiIGNvbnRlbnQ9XCJRdW90ZSBEZXRhaWxcIiAvPlxuICAgICAgICA8L0hlbG1ldD5cblxuICAgICAgICA8Um9zdGVyIHRpbWVvdXQ9ezMwMDB9IC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBjb250ZW50QmFja2dyb3VuZCBzYmM1XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiNDhcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMubWFwKChjb21wb25lbnQsICRpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgQ29tcG9uZW50c0luc3RhbmNlID0gY29tbW9uW2NvbXBvbmVudF07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50c0luc3RhbmNlIHRyYWNrU2VnbWVudD17KGRhdGEpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoZGF0YSl9IC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbGF5b3V0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBxdW90ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3VycmVudFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICk7XG4gIH1cbn1cblxuV2ViVmlldy5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxheW91dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9