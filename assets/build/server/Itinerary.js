require("source-map-support").install();
exports.ids = ["Itinerary"];
exports.modules = {

/***/ "./app-v2/screens/itinerary/ItineraryAsync.js":
/*!****************************************************!*\
  !*** ./app-v2/screens/itinerary/ItineraryAsync.js ***!
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

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/itinerary/Layout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ItineraryAsync = class ItineraryAsync extends _react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

};
exports.default = ItineraryAsync;
ItineraryAsync.propTypes = {
  layout: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  quotes: _propTypes.default.object.isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired
};

/***/ }),

/***/ "./app-v2/screens/itinerary/Layout.js":
/*!********************************************!*\
  !*** ./app-v2/screens/itinerary/Layout.js ***!
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

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _index = _interopRequireDefault(__webpack_require__(/*! modules/quote/itinerary/detail/index */ "./app-v2/modules/quote/itinerary/detail/index.js"));

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

    this.onSensorChange = isVisible => {
      if (isVisible) {
        this.trackSegmentEvent({
          event: _segmentEvents.ORGANISM_VIEWED,
          section: 'Itinerary',
          cta: ''
        });
      }
    };
  }

  render() {
    const ItineraryContainer = _index.default.container;
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
    }, _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement(ItineraryContainer, {
      trackSegment: data => this.trackSegmentEvent(data)
    }))))));
  }

};
Layout.propTypes = {
  layout: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  quotes: _propTypes.default.object.isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired
};
var _default = Layout;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9pdGluZXJhcnkvSXRpbmVyYXJ5QXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvaXRpbmVyYXJ5L0xheW91dC5qcyJdLCJuYW1lcyI6WyJJdGluZXJhcnlBc3luYyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJwcm9wVHlwZXMiLCJsYXlvdXQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicGFyYW1zIiwicXVvdGVzIiwiY3VycmVudFF1b3RlIiwiY3VycmVudFF1b3RlSWQiLCJudW1iZXIiLCJ0cmlwSWQiLCJMYXlvdXQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImRhdGEiLCJldmVudCIsImNhdGVnb3J5Iiwic2VjdGlvbiIsImN0YSIsInRyaXBfaWQiLCJnZXRDb29raWUiLCJUUklQX0lEX0NPT0tJRV9LRVkiLCJxdW90ZV9pZCIsImludm9pY2VfaWQiLCJpbnZvaWNlRGV0YWlscyIsImlkIiwiZGVzdGluYXRpb25faWQiLCJkZXN0aW5hdGlvbnNMaXN0IiwibGVuZ3RoIiwiYWdlbnRfaWQiLCJhZ2VudCIsInRyaXBfc3RhdHVzIiwidHJpcFN0YXR1cyIsInF1b3RlX3N0YXR1cyIsInN0YXR1cyIsIm1pc2NfaWRfMSIsIm1pc2NJZDEiLCJtaXNjX3R5cGVfMSIsIm1pc2NUeXBlMSIsIm1pc2NfaWRfMiIsIm1pc2NJZDIiLCJtaXNjX3R5cGVfMiIsIm1pc2NUeXBlMiIsIm1pc2NfaWRfMyIsIm1pc2NJZDMiLCJtaXNjX3R5cGVfMyIsIm1pc2NUeXBlMyIsIm1pc2NfaWRfNCIsIm1pc2NJZDQiLCJtaXNjX3R5cGVfNCIsIm1pc2NUeXBlNCIsIm1pc2NfaWRfNSIsIm1pc2NJZDUiLCJtaXNjX3R5cGVfNSIsIm1pc2NUeXBlNSIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiT1JHQU5JU01fVklFV0VEIiwiSXRpbmVyYXJ5Q29u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QixXQUFTO0FBQ1AsVUFBTTBELHFCQUFxQkMsZUFBVUMsU0FBckM7QUFFQSxXQUNFO0FBQUssaUJBQVU7QUFBZixPQUVFLDZCQUFDLG9CQUFELFFBQ0U7QUFBTSxZQUFLLGVBQVg7QUFBMkIsZUFBUTtBQUFuQyxNQURGLEVBRUU7QUFBTSxZQUFLLFdBQVg7QUFBdUIsZUFBUTtBQUEvQixNQUZGLEVBR0U7QUFBTSxZQUFLLE1BQVg7QUFBa0IsZUFBUTtBQUExQixNQUhGLENBRkYsRUFRRSw2QkFBQyxlQUFEO0FBQVEsZUFBUztBQUFqQixNQVJGLEVBVUU7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsOEJBQUQ7QUFBUSxnQkFBV0osU0FBRCxJQUFlLEtBQUtELGNBQUwsQ0FBb0JDLFNBQXBCLENBQWpDO0FBQ1EseUJBQWtCLFFBRDFCO0FBRVEsbUJBQWE7QUFGckIsT0FHRSw2QkFBQyxrQkFBRDtBQUFvQixvQkFBZTFDLElBQUQsSUFBVSxLQUFLRCxpQkFBTCxDQUF1QkMsSUFBdkI7QUFBNUMsTUFIRixDQURGLENBREYsQ0FERixDQVZGLENBREY7QUF3QkQ7O0FBNUU0QixDO0FBK0UvQkYsT0FBT1gsU0FBUCxHQUFtQjtBQUNqQkMsVUFBUUMsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFakJDLFVBQVFILG1CQUFVQyxNQUFWLENBQWlCQyxVQUZSO0FBR2pCRSxVQUFRSixtQkFBVUMsTUFBVixDQUFpQkMsVUFIUjtBQUlqQkcsZ0JBQWNMLG1CQUFVQyxNQUFWLENBQWlCQyxVQUpkO0FBS2pCSSxrQkFBZ0JOLG1CQUFVTyxNQUFWLENBQWlCTCxVQUxoQjtBQU1qQk0sVUFBUVIsbUJBQVVPLE1BQVYsQ0FBaUJMO0FBTlIsQ0FBbkI7ZUFVZU8sTSIsImZpbGUiOiJJdGluZXJhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0aW5lcmFyeUFzeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5JdGluZXJhcnlBc3luYy5wcm9wVHlwZXMgPSB7XG4gIGxheW91dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcXVvdGVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBJdGluZXJhcnkgZnJvbSAnbW9kdWxlcy9xdW90ZS9pdGluZXJhcnkvZGV0YWlsL2luZGV4JztcbmltcG9ydCBSb3N0ZXIgZnJvbSAnbW9kdWxlcy9yb3N0ZXInO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZGF0YSA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyB0cmlwSWQsIGN1cnJlbnRRdW90ZSwgY3VycmVudFF1b3RlSWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWN1cnJlbnRRdW90ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogZGF0YS5ldmVudCxcbiAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdRRFAnLFxuICAgICAgc2VjdGlvbjogZGF0YS5zZWN0aW9uIHx8ICcnLFxuICAgICAgb2JqZWN0OiBkYXRhLm9iamVjdCB8fCBgUXVvdGUvJHtjdXJyZW50UXVvdGVJZH1gLFxuICAgICAgY3RhOiBkYXRhLmN0YSxcbiAgICAgIHRyaXBfaWQ6IHRyaXBJZCB8fCAoZ2V0Q29va2llKFRSSVBfSURfQ09PS0lFX0tFWSksIDEwKSB8fCAwLFxuICAgICAgcXVvdGVfaWQ6IGN1cnJlbnRRdW90ZUlkLFxuICAgICAgaW52b2ljZV9pZDogY3VycmVudFF1b3RlLmludm9pY2VEZXRhaWxzLmlkIHx8IDAsXG4gICAgICBkZXN0aW5hdGlvbl9pZDogY3VycmVudFF1b3RlLmRlc3RpbmF0aW9uc0xpc3QubGVuZ3RoID8gY3VycmVudFF1b3RlLmRlc3RpbmF0aW9uc0xpc3RbMF0uaWQgOiAwLFxuICAgICAgYWdlbnRfaWQ6IGN1cnJlbnRRdW90ZS5hZ2VudC5pZCB8fCAwLFxuICAgICAgdHJpcF9zdGF0dXM6IGN1cnJlbnRRdW90ZS50cmlwU3RhdHVzIHx8ICcnLFxuICAgICAgcXVvdGVfc3RhdHVzOiBjdXJyZW50UXVvdGUuc3RhdHVzIHx8ICcnLFxuICAgICAgbWlzY19pZF8xOiBkYXRhLm1pc2NJZDEsXG4gICAgICBtaXNjX3R5cGVfMTogZGF0YS5taXNjVHlwZTEsXG4gICAgICBtaXNjX2lkXzI6IGRhdGEubWlzY0lkMixcbiAgICAgIG1pc2NfdHlwZV8yOiBkYXRhLm1pc2NUeXBlMixcbiAgICAgIG1pc2NfaWRfMzogZGF0YS5taXNjSWQzLFxuICAgICAgbWlzY190eXBlXzM6IGRhdGEubWlzY1R5cGUzLFxuICAgICAgbWlzY19pZF80OiBkYXRhLm1pc2NJZDQsXG4gICAgICBtaXNjX3R5cGVfNDogZGF0YS5taXNjVHlwZTQsXG4gICAgICBtaXNjX2lkXzU6IGRhdGEubWlzY0lkNSxcbiAgICAgIG1pc2NfdHlwZV81OiBkYXRhLm1pc2NUeXBlNVxuICAgIH0pO1xuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgICBldmVudDogT1JHQU5JU01fVklFV0VELFxuICAgICAgICBzZWN0aW9uOiAnSXRpbmVyYXJ5JyxcbiAgICAgICAgY3RhOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBJdGluZXJhcnlDb250YWluZXIgPSBJdGluZXJhcnkuY29udGFpbmVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cblxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJwYWdlX2Z1bGxuYW1lXCIgY29udGVudD1cIlF1b3RlIERldGFpbFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfbmFtZVwiIGNvbnRlbnQ9XCJRdW90ZSBEZXRhaWxcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJuYW1lXCIgY29udGVudD1cIlF1b3RlIERldGFpbFwiIC8+XG4gICAgICAgIDwvSGVsbWV0PlxuXG4gICAgICAgIDxSb3N0ZXIgdGltZW91dD17MzAwMH0gLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IGNvbnRlbnRCYWNrZ3JvdW5kIHNiYzVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcGI0OFwiPlxuICAgICAgICAgICAgICA8U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiB0aGlzLm9uU2Vuc29yQ2hhbmdlKGlzVmlzaWJsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgcGFydGlhbFZpc2liaWxpdHk9J2JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEl0aW5lcmFyeUNvbnRhaW5lciB0cmFja1NlZ21lbnQ9eyhkYXRhKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KGRhdGEpfSAvPlxuICAgICAgICAgICAgICA8L1NlbnNvcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgbGF5b3V0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBxdW90ZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3VycmVudFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRRdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=