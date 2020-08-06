require("source-map-support").install();
exports.ids = [3];
exports.modules = {

/***/ "./app-v2/modules/preferences/reducer.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/preferences/reducer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preferencesSection;

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/preferences/action.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultPreferenceOptionsState = {
  loaded: false,
  loading: false,
  updated: false,
  updating: false,
  preferenceOptions: {},
  errors: []
};

function preferencesSection(state = defaultPreferenceOptionsState, action) {
  switch (action.type) {
    /**     * Loading new preference hence initializing with default state     */
    case _action.PREFERENCE_OPTIONS_LOAD:
      {
        return _objectSpread({}, state, {
          loaded: false,
          loading: true
        });
      }

    case _action.PREFERENCE_OPTIONS_LOAD_SUCCESS:
      {
        const preferenceOptions = action.result.data.requestedTrip;
        return _objectSpread({}, state, {
          preferenceOptions,
          loaded: true,
          loading: false
        });
      }

    case _action.PREFERENCE_OPTIONS_LOAD_FAIL:
      {
        return _objectSpread({}, state, {
          loaded: false,
          loading: false
        });
      }

    case _action.UPDATE_RTRIP_LOAD:
      {
        return _objectSpread({}, state, {
          updated: false,
          updating: false
        });
      }

    case _action.UPDATE_RTRIP_LOAD_SUCCESS:
      {
        const preferenceOptions = action.result.data.requestedTrip;
        return _objectSpread({}, state, {
          preferenceOptions: _objectSpread({}, state.preferenceOptions, preferenceOptions),
          updated: true,
          updating: false
        });
      }

    case _action.UPDATE_RTRIP_LOAD_FAIL:
      {
        console.log('action...', action);
        console.log('action.result...', action.result);
        return _objectSpread({}, state, {
          updated: false,
          updating: false,
          errors: action.error.errors
        });
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),

/***/ "./app-v2/modules/trip/actions/tripList.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/trip/actions/tripList.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.LOAD_FAIL = exports.LOAD_SUCCESS = exports.LOAD = void 0;

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

// Action constants
const LOAD = 'trip/list/LOAD';
exports.LOAD = LOAD;
const LOAD_SUCCESS = 'trip/list/LOAD_SUCCESS';
exports.LOAD_SUCCESS = LOAD_SUCCESS;
const LOAD_FAIL = 'trip/list/LOAD_FAIL'; // Action creators

exports.LOAD_FAIL = LOAD_FAIL;

const load = ({
  view
}) => ({
  types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
  promise: client => client.get((0, _urlHelpers.allTripsUrl)(view)),
  withoutCamelCasing: false
});

exports.load = load;

/***/ }),

/***/ "./app-v2/modules/trip/reducers/currentTrip.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/trip/reducers/currentTrip.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currentTripReducer;

var _currentTrip = __webpack_require__(/*! ../actions/currentTrip */ "./app-v2/modules/trip/actions/currentTrip.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  data: {}
};

function currentTripReducer(state = initialState, action = {}) {
  switch (action.type) {
    case _currentTrip.UPDATE_REQUESTED_TRIP:
      {
        return _objectSpread({}, state, {
          data: _objectSpread({}, state.data, {
            id: action.requestedTripId
          })
        });
      }

    case _currentTrip.SECURITY_TOKEN_LOAD_SUCCESS:
      {
        console.log('sec token', action.result.data);
        return _objectSpread({}, state, {
          data: _objectSpread({}, state.data, {
            securityToken: action.result.data
          })
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./app-v2/modules/trip/reducers/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/trip/reducers/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

var _tripList = _interopRequireDefault(__webpack_require__(/*! ./tripList */ "./app-v2/modules/trip/reducers/tripList.js"));

var _tripConstants = _interopRequireDefault(__webpack_require__(/*! ./tripConstants */ "./app-v2/modules/trip/reducers/tripConstants.js"));

var _currentTrip = _interopRequireDefault(__webpack_require__(/*! ./currentTrip */ "./app-v2/modules/trip/reducers/currentTrip.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! modules/preferences/reducer */ "./app-v2/modules/preferences/reducer.js"));

var _tripActivities = _interopRequireDefault(__webpack_require__(/*! ./tripActivities */ "./app-v2/modules/trip/reducers/tripActivities.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  list: _tripList.default,
  constants: _tripConstants.default,
  currentTrip: _currentTrip.default,
  preferences: _reducer.default,
  activities: _tripActivities.default
});

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/reducers/tripActivities.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/trip/reducers/tripActivities.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _tripActivities = __webpack_require__(/*! ../actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  activationMailSent: false,
  activationMailSending: false,
  activationMailSuccessMsg: ''
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case _tripActivities.SEND_ACTIVATION_MAIL_LOAD:
      {
        return _objectSpread({}, state, {
          activationMailSent: false,
          activationMailSending: true,
          activationMailSuccessMsg: ''
        });
      }

    case _tripActivities.SEND_ACTIVATION_MAIL_SUCCESS:
      {
        return _objectSpread({}, state, {
          activationMailSent: true,
          activationMailSending: false,
          activationMailSuccessMsg: action.result.data.message
        });
      }

    case _tripActivities.SEND_ACTIVATION_MAIL_FAIL:
      {
        return _objectSpread({}, state, {
          activationMailSent: false,
          activationMailSending: false,
          activationMailSuccessMsg: ''
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./app-v2/modules/trip/reducers/tripConstants.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/trip/reducers/tripConstants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tripConstantsReducer;

var _tripConstants = __webpack_require__(/*! ../actions/tripConstants */ "./app-v2/modules/trip/actions/tripConstants.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loaded: false,
  loading: false,
  constants: {}
};

function tripConstantsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case _tripConstants.TRIP_CONSTANTS_LOAD:
      {
        return _objectSpread({}, state, {
          loaded: false,
          loading: true
        });
      }

    case _tripConstants.TRIP_CONSTANTS_LOAD_SUCCESS:
      {
        return _objectSpread({}, state, {
          loaded: true,
          loading: false,
          constants: action.result.data
        });
      }

    case _tripConstants.TRIP_CONSTANTS_LOAD_FAIL:
      {
        return _objectSpread({}, state, {
          loaded: false,
          loading: false
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./app-v2/modules/trip/reducers/tripList.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/trip/reducers/tripList.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tripListReducer;
exports.tripsLoaded = exports.getTripsByBookingStatusLabel = void 0;

var _tripList = __webpack_require__(/*! ../actions/tripList */ "./app-v2/modules/trip/actions/tripList.js");

var _action = __webpack_require__(/*! ../../preferences/action */ "./app-v2/modules/preferences/action.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loaded: false,
  loading: false,
  allIds: [],
  byId: {}
};

function updateTripLocation(state, action) {
  const {
    id,
    firstDestinationName,
    fromLoc
  } = action.result.data.requestedTrip;
  return _objectSpread({}, state.byId, {
    [id]: _objectSpread({}, state.byId[id], {
      firstDestinationName: firstDestinationName,
      fromLoc: fromLoc
    })
  });
}

function tripListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case _tripList.LOAD:
      {
        return _objectSpread({}, state, {
          loaded: false,
          loading: true
        });
      }

    case _tripList.LOAD_SUCCESS:
      {
        const tripList = {};
        action.result.data.requestedTrips.forEach(trip => {
          tripList[trip.id] = trip;
        });
        return _objectSpread({}, state, {
          loaded: true,
          loading: false,
          allIds: Object.keys(tripList),
          byId: tripList
        });
      }

    case _tripList.LOAD_FAIL:
      {
        return _objectSpread({}, state, {
          loaded: false,
          loading: false
        });
      }

    case _action.UPDATE_RTRIP_LOAD_SUCCESS:
      {
        return _objectSpread({}, state, {
          byId: updateTripLocation(state, action)
        });
      }

    default:
      return state;
  }
}

const getTripsByBookingStatusLabel = (trips, bookingStatusLabel) => {
  return trips.allIds.filter(id => {
    return trips.byId[id].bookingStatusLabel.toLowerCase() === bookingStatusLabel;
  });
};

exports.getTripsByBookingStatusLabel = getTripsByBookingStatusLabel;

const tripsLoaded = state => {
  return state.trip && state.trip.list.loaded || false;
};

exports.tripsLoaded = tripsLoaded;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyaXAvYWN0aW9ucy90cmlwTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL3JlZHVjZXJzL2N1cnJlbnRUcmlwLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyaXAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdHJpcC9yZWR1Y2Vycy90cmlwQWN0aXZpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90cmlwL3JlZHVjZXJzL3RyaXBDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdHJpcC9yZWR1Y2Vycy90cmlwTGlzdC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJlZmVyZW5jZU9wdGlvbnNTdGF0ZSIsImxvYWRlZCIsImxvYWRpbmciLCJ1cGRhdGVkIiwidXBkYXRpbmciLCJwcmVmZXJlbmNlT3B0aW9ucyIsImVycm9ycyIsInByZWZlcmVuY2VzU2VjdGlvbiIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlBSRUZFUkVOQ0VfT1BUSU9OU19MT0FEIiwiUFJFRkVSRU5DRV9PUFRJT05TX0xPQURfU1VDQ0VTUyIsInJlc3VsdCIsImRhdGEiLCJyZXF1ZXN0ZWRUcmlwIiwiUFJFRkVSRU5DRV9PUFRJT05TX0xPQURfRkFJTCIsIlVQREFURV9SVFJJUF9MT0FEIiwiVVBEQVRFX1JUUklQX0xPQURfU1VDQ0VTUyIsIlVQREFURV9SVFJJUF9MT0FEX0ZBSUwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJMT0FEIiwiTE9BRF9TVUNDRVNTIiwiTE9BRF9GQUlMIiwibG9hZCIsInZpZXciLCJ0eXBlcyIsInByb21pc2UiLCJjbGllbnQiLCJnZXQiLCJ3aXRob3V0Q2FtZWxDYXNpbmciLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50VHJpcFJlZHVjZXIiLCJVUERBVEVfUkVRVUVTVEVEX1RSSVAiLCJpZCIsInJlcXVlc3RlZFRyaXBJZCIsIlNFQ1VSSVRZX1RPS0VOX0xPQURfU1VDQ0VTUyIsInNlY3VyaXR5VG9rZW4iLCJsaXN0IiwidHJpcExpc3QiLCJjb25zdGFudHMiLCJ0cmlwQ29uc3RhbnRzIiwiY3VycmVudFRyaXAiLCJwcmVmZXJlbmNlcyIsImFjdGl2aXRpZXMiLCJ0cmlwQWN0aXZpdGllcyIsImFjdGl2YXRpb25NYWlsU2VudCIsImFjdGl2YXRpb25NYWlsU2VuZGluZyIsImFjdGl2YXRpb25NYWlsU3VjY2Vzc01zZyIsInJlZHVjZXIiLCJTRU5EX0FDVElWQVRJT05fTUFJTF9MT0FEIiwiU0VORF9BQ1RJVkFUSU9OX01BSUxfU1VDQ0VTUyIsIm1lc3NhZ2UiLCJTRU5EX0FDVElWQVRJT05fTUFJTF9GQUlMIiwidHJpcENvbnN0YW50c1JlZHVjZXIiLCJUUklQX0NPTlNUQU5UU19MT0FEIiwiVFJJUF9DT05TVEFOVFNfTE9BRF9TVUNDRVNTIiwiVFJJUF9DT05TVEFOVFNfTE9BRF9GQUlMIiwiYWxsSWRzIiwiYnlJZCIsInVwZGF0ZVRyaXBMb2NhdGlvbiIsImZpcnN0RGVzdGluYXRpb25OYW1lIiwiZnJvbUxvYyIsInRyaXBMaXN0UmVkdWNlciIsInJlcXVlc3RlZFRyaXBzIiwiZm9yRWFjaCIsInRyaXAiLCJPYmplY3QiLCJrZXlzIiwiZ2V0VHJpcHNCeUJvb2tpbmdTdGF0dXNMYWJlbCIsInRyaXBzIiwiYm9va2luZ1N0YXR1c0xhYmVsIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJ0cmlwc0xvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFTQSxNQUFNQSxnQ0FBZ0M7QUFDcENDLFVBQVEsS0FENEI7QUFFcENDLFdBQVMsS0FGMkI7QUFHcENDLFdBQVMsS0FIMkI7QUFJcENDLFlBQVUsS0FKMEI7QUFLcENDLHFCQUFtQixFQUxp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UCxDQUFjQyxJQUFkLENBQW1Cb0QsY0FBbkIsQ0FBa0NDLE9BQWxDLENBQTJDQyxJQUFELElBQVU7QUFDbEQzQixtQkFBUzJCLEtBQUtoQyxFQUFkLElBQW9CZ0MsSUFBcEI7QUFDRCxTQUZEO0FBSUEsaUNBQ0s1RCxLQURMO0FBRUVQLGtCQUFRLElBRlY7QUFHRUMsbUJBQVMsS0FIWDtBQUlFMEQsa0JBQVFTLE9BQU9DLElBQVAsQ0FBWTdCLFFBQVosQ0FKVjtBQUtFb0IsZ0JBQU1wQjtBQUxSO0FBT0Q7O0FBQ0QsU0FBS2hCLG1CQUFMO0FBQWdCO0FBQ2QsaUNBQ0tqQixLQURMO0FBRUVQLGtCQUFRLEtBRlY7QUFHRUMsbUJBQVM7QUFIWDtBQUtEOztBQUNELFNBQUtnQixpQ0FBTDtBQUFnQztBQUM5QixpQ0FDS1YsS0FETDtBQUVFcUQsZ0JBQU1DLG1CQUFtQnRELEtBQW5CLEVBQTBCQyxNQUExQjtBQUZSO0FBSUQ7O0FBQ0Q7QUFDRSxhQUFPRCxLQUFQO0FBcENKO0FBc0NEOztBQUVNLE1BQU0rRCwrQkFBK0IsQ0FBQ0MsS0FBRCxFQUFRQyxrQkFBUixLQUErQjtBQUN6RSxTQUFPRCxNQUFNWixNQUFOLENBQWFjLE1BQWIsQ0FBb0J0QyxNQUFNO0FBQy9CLFdBQU9vQyxNQUFNWCxJQUFOLENBQVd6QixFQUFYLEVBQWVxQyxrQkFBZixDQUFrQ0UsV0FBbEMsT0FBb0RGLGtCQUEzRDtBQUNELEdBRk0sQ0FBUDtBQUdELENBSk07Ozs7QUFNQSxNQUFNRyxjQUFlcEUsS0FBRCxJQUFXO0FBQ3BDLFNBQU9BLE1BQU00RCxJQUFOLElBQWM1RCxNQUFNNEQsSUFBTixDQUFXNUIsSUFBWCxDQUFnQnZDLE1BQTlCLElBQXdDLEtBQS9DO0FBQ0QsQ0FGTSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9ccmltcG9ydCB7XHIgIFBSRUZFUkVOQ0VfT1BUSU9OU19MT0FELFxyICBQUkVGRVJFTkNFX09QVElPTlNfTE9BRF9GQUlMLFxyICBQUkVGRVJFTkNFX09QVElPTlNfTE9BRF9TVUNDRVNTLFxyICBVUERBVEVfUlRSSVBfTE9BRCxcciAgVVBEQVRFX1JUUklQX0xPQURfU1VDQ0VTUyxcciAgVVBEQVRFX1JUUklQX0xPQURfRkFJTFxyfSBmcm9tICcuL2FjdGlvbic7XHJccmNvbnN0IGRlZmF1bHRQcmVmZXJlbmNlT3B0aW9uc1N0YXRlID0ge1xyICBsb2FkZWQ6IGZhbHNlLFxyICBsb2FkaW5nOiBmYWxzZSxcciAgdXBkYXRlZDogZmFsc2UsXHIgIHVwZGF0aW5nOiBmYWxzZSxcciAgcHJlZmVyZW5jZU9wdGlvbnM6IHt9LFxyICBlcnJvcnM6IFtdXHJ9O1xyXHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVmZXJlbmNlc1NlY3Rpb24oc3RhdGUgPSBkZWZhdWx0UHJlZmVyZW5jZU9wdGlvbnNTdGF0ZSwgYWN0aW9uKSB7XHIgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcciAgICAvKipcciAgICAgKiBMb2FkaW5nIG5ldyBwcmVmZXJlbmNlIGhlbmNlIGluaXRpYWxpemluZyB3aXRoIGRlZmF1bHQgc3RhdGVcciAgICAgKi9cciAgICBjYXNlIFBSRUZFUkVOQ0VfT1BUSU9OU19MT0FEOiB7XHIgICAgICByZXR1cm4ge1xyICAgICAgICAuLi5zdGF0ZSxcciAgICAgICAgbG9hZGVkOiBmYWxzZSxcciAgICAgICAgbG9hZGluZzogdHJ1ZVxyICAgICAgfTtcciAgICB9XHIgICAgY2FzZSBQUkVGRVJFTkNFX09QVElPTlNfTE9BRF9TVUNDRVNTOiB7XHIgICAgICBjb25zdCBwcmVmZXJlbmNlT3B0aW9ucyA9IGFjdGlvbi5yZXN1bHQuZGF0YS5yZXF1ZXN0ZWRUcmlwO1xyICAgICAgcmV0dXJuIHtcciAgICAgICAgLi4uc3RhdGUsXHIgICAgICAgIHByZWZlcmVuY2VPcHRpb25zLFxyICAgICAgICBsb2FkZWQ6IHRydWUsXHIgICAgICAgIGxvYWRpbmc6IGZhbHNlXHIgICAgICB9O1xyICAgIH1cciAgICBjYXNlIFBSRUZFUkVOQ0VfT1BUSU9OU19MT0FEX0ZBSUw6IHtcciAgICAgIHJldHVybiB7XHIgICAgICAgIC4uLnN0YXRlLFxyICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyICAgICAgICBsb2FkaW5nOiBmYWxzZVxyICAgICAgfTtcciAgICB9XHIgICAgY2FzZSBVUERBVEVfUlRSSVBfTE9BRDoge1xyICAgICAgcmV0dXJuIHtcciAgICAgICAgLi4uc3RhdGUsXHIgICAgICAgIHVwZGF0ZWQ6IGZhbHNlLFxyICAgICAgICB1cGRhdGluZzogZmFsc2VcciAgICAgIH07XHIgICAgfVxyICAgIGNhc2UgVVBEQVRFX1JUUklQX0xPQURfU1VDQ0VTUzoge1xyICAgICAgY29uc3QgcHJlZmVyZW5jZU9wdGlvbnMgPSBhY3Rpb24ucmVzdWx0LmRhdGEucmVxdWVzdGVkVHJpcDtcciAgICAgIHJldHVybiB7XHIgICAgICAgIC4uLnN0YXRlLFxyICAgICAgICBwcmVmZXJlbmNlT3B0aW9uczogeyAuLi5zdGF0ZS5wcmVmZXJlbmNlT3B0aW9ucywgLi4ucHJlZmVyZW5jZU9wdGlvbnMgfSxcciAgICAgICAgdXBkYXRlZDogdHJ1ZSxcciAgICAgICAgdXBkYXRpbmc6IGZhbHNlXHIgICAgICB9O1xyICAgIH1cciAgICBjYXNlIFVQREFURV9SVFJJUF9MT0FEX0ZBSUw6IHtcciAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24uLi4nLCBhY3Rpb24pO1xyICAgICAgY29uc29sZS5sb2coJ2FjdGlvbi5yZXN1bHQuLi4nLCBhY3Rpb24ucmVzdWx0KTtcciAgICAgIHJldHVybiB7XHIgICAgICAgIC4uLnN0YXRlLFxyICAgICAgICB1cGRhdGVkOiBmYWxzZSxcciAgICAgICAgdXBkYXRpbmc6IGZhbHNlLFxyICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvci5lcnJvcnNcciAgICAgIH07XHIgICAgfVxyICAgIGRlZmF1bHQ6IHtcciAgICAgIHJldHVybiBzdGF0ZTtcciAgICB9XHIgIH1ccn1cciIsImltcG9ydCB7IGFsbFRyaXBzVXJsIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcblxuLy8gQWN0aW9uIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IExPQUQgPSAndHJpcC9saXN0L0xPQUQnO1xuZXhwb3J0IGNvbnN0IExPQURfU1VDQ0VTUyA9ICd0cmlwL2xpc3QvTE9BRF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0ZBSUwgPSAndHJpcC9saXN0L0xPQURfRkFJTCc7XG5cbi8vIEFjdGlvbiBjcmVhdG9yc1xuZXhwb3J0IGNvbnN0IGxvYWQgPSAoeyB2aWV3IH0pID0+ICh7XG4gIHR5cGVzOiBbTE9BRCwgTE9BRF9TVUNDRVNTLCBMT0FEX0ZBSUxdLFxuICBwcm9taXNlOiBjbGllbnQgPT4gY2xpZW50LmdldChhbGxUcmlwc1VybCh2aWV3KSksXG4gIHdpdGhvdXRDYW1lbENhc2luZzogZmFsc2Vcbn0pO1xuIiwiaW1wb3J0IHtcbiAgVVBEQVRFX1JFUVVFU1RFRF9UUklQLFxuICBTRUNVUklUWV9UT0tFTl9MT0FEX1NVQ0NFU1MsXG59IGZyb20gJy4uL2FjdGlvbnMvY3VycmVudFRyaXAnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVudFRyaXBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVUERBVEVfUkVRVUVTVEVEX1RSSVA6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhOiB7IC4uLnN0YXRlLmRhdGEsIGlkOiBhY3Rpb24ucmVxdWVzdGVkVHJpcElkIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgU0VDVVJJVFlfVE9LRU5fTE9BRF9TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZygnc2VjIHRva2VuJywgYWN0aW9uLnJlc3VsdC5kYXRhKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhOiB7IC4uLnN0YXRlLmRhdGEsIHNlY3VyaXR5VG9rZW46IGFjdGlvbi5yZXN1bHQuZGF0YSB9XG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB0cmlwTGlzdCBmcm9tICcuL3RyaXBMaXN0JztcbmltcG9ydCB0cmlwQ29uc3RhbnRzIGZyb20gJy4vdHJpcENvbnN0YW50cyc7XG5pbXBvcnQgY3VycmVudFRyaXAgZnJvbSAnLi9jdXJyZW50VHJpcCc7XG5pbXBvcnQgcHJlZmVyZW5jZXMgZnJvbSAnbW9kdWxlcy9wcmVmZXJlbmNlcy9yZWR1Y2VyJztcbmltcG9ydCB0cmlwQWN0aXZpdGllcyBmcm9tICcuL3RyaXBBY3Rpdml0aWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbGlzdDogdHJpcExpc3QsXG4gIGNvbnN0YW50czogdHJpcENvbnN0YW50cyxcbiAgY3VycmVudFRyaXA6IGN1cnJlbnRUcmlwLFxuICBwcmVmZXJlbmNlczogcHJlZmVyZW5jZXMsXG4gIGFjdGl2aXRpZXM6IHRyaXBBY3Rpdml0aWVzXG59KTtcbiIsImltcG9ydCB7XG4gIFNFTkRfQUNUSVZBVElPTl9NQUlMX0xPQUQsIFNFTkRfQUNUSVZBVElPTl9NQUlMX1NVQ0NFU1MsIFNFTkRfQUNUSVZBVElPTl9NQUlMX0ZBSUxcbn0gZnJvbSAnLi4vYWN0aW9ucy90cmlwQWN0aXZpdGllcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWN0aXZhdGlvbk1haWxTZW50OiBmYWxzZSxcbiAgYWN0aXZhdGlvbk1haWxTZW5kaW5nOiBmYWxzZSxcbiAgYWN0aXZhdGlvbk1haWxTdWNjZXNzTXNnOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRU5EX0FDVElWQVRJT05fTUFJTF9MT0FEOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZhdGlvbk1haWxTZW50OiBmYWxzZSxcbiAgICAgICAgYWN0aXZhdGlvbk1haWxTZW5kaW5nOiB0cnVlLFxuICAgICAgICBhY3RpdmF0aW9uTWFpbFN1Y2Nlc3NNc2c6ICcnXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFNFTkRfQUNUSVZBVElPTl9NQUlMX1NVQ0NFU1M6IHtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2YXRpb25NYWlsU2VudDogdHJ1ZSxcbiAgICAgICAgYWN0aXZhdGlvbk1haWxTZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgYWN0aXZhdGlvbk1haWxTdWNjZXNzTXNnOiBhY3Rpb24ucmVzdWx0LmRhdGEubWVzc2FnZVxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBTRU5EX0FDVElWQVRJT05fTUFJTF9GQUlMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZhdGlvbk1haWxTZW50OiBmYWxzZSxcbiAgICAgICAgYWN0aXZhdGlvbk1haWxTZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgYWN0aXZhdGlvbk1haWxTdWNjZXNzTXNnOiAnJ1xuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVFJJUF9DT05TVEFOVFNfTE9BRCwgVFJJUF9DT05TVEFOVFNfTE9BRF9GQUlMLCBUUklQX0NPTlNUQU5UU19MT0FEX1NVQ0NFU1N9IGZyb20gJy4uL2FjdGlvbnMvdHJpcENvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZGVkOiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGNvbnN0YW50czp7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJpcENvbnN0YW50c1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVFJJUF9DT05TVEFOVFNfTE9BRDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgVFJJUF9DT05TVEFOVFNfTE9BRF9TVUNDRVNTOiB7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBjb25zdGFudHM6IGFjdGlvbi5yZXN1bHQuZGF0YVxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBUUklQX0NPTlNUQU5UU19MT0FEX0ZBSUw6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTE9BRCwgTE9BRF9TVUNDRVNTLCBMT0FEX0ZBSUwgfSBmcm9tICcuLi9hY3Rpb25zL3RyaXBMaXN0JztcbmltcG9ydCB7IFVQREFURV9SVFJJUF9MT0FEX1NVQ0NFU1MgfSBmcm9tICcuLi8uLi9wcmVmZXJlbmNlcy9hY3Rpb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRlZDogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBhbGxJZHM6IFtdLFxuICBieUlkOiB7fVxufTtcblxuZnVuY3Rpb24gdXBkYXRlVHJpcExvY2F0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBpZCwgZmlyc3REZXN0aW5hdGlvbk5hbWUsIGZyb21Mb2MgfSA9IGFjdGlvbi5yZXN1bHQuZGF0YS5yZXF1ZXN0ZWRUcmlwO1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLmJ5SWQsXG4gICAgW2lkXToge1xuICAgICAgLi4uc3RhdGUuYnlJZFtpZF0sXG4gICAgICBmaXJzdERlc3RpbmF0aW9uTmFtZTogZmlyc3REZXN0aW5hdGlvbk5hbWUsXG4gICAgICBmcm9tTG9jOiBmcm9tTG9jXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmlwTGlzdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgTE9BRF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCB0cmlwTGlzdCA9IHt9O1xuICAgICAgYWN0aW9uLnJlc3VsdC5kYXRhLnJlcXVlc3RlZFRyaXBzLmZvckVhY2goKHRyaXApID0+IHtcbiAgICAgICAgdHJpcExpc3RbdHJpcC5pZF0gPSB0cmlwO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhbGxJZHM6IE9iamVjdC5rZXlzKHRyaXBMaXN0KSxcbiAgICAgICAgYnlJZDogdHJpcExpc3RcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgTE9BRF9GQUlMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgVVBEQVRFX1JUUklQX0xPQURfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJ5SWQ6IHVwZGF0ZVRyaXBMb2NhdGlvbihzdGF0ZSwgYWN0aW9uKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFRyaXBzQnlCb29raW5nU3RhdHVzTGFiZWwgPSAodHJpcHMsIGJvb2tpbmdTdGF0dXNMYWJlbCkgPT4ge1xuICByZXR1cm4gdHJpcHMuYWxsSWRzLmZpbHRlcihpZCA9PiB7XG4gICAgcmV0dXJuIHRyaXBzLmJ5SWRbaWRdLmJvb2tpbmdTdGF0dXNMYWJlbC50b0xvd2VyQ2FzZSgpID09PSBib29raW5nU3RhdHVzTGFiZWw7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyaXBzTG9hZGVkID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZS50cmlwICYmIHN0YXRlLnRyaXAubGlzdC5sb2FkZWQgfHwgZmFsc2U7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==