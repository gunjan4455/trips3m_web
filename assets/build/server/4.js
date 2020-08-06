require("source-map-support").install();
exports.ids = [4];
exports.modules = {

/***/ "./app-v2/modules/preferences/Preferences.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/preferences/Preferences.js ***!
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

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _tripStatus = __webpack_require__(/*! constants/tripStatus */ "./app/constants/tripStatus.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./app-v2/modules/preferences/helpers.js");

var _Header = _interopRequireDefault(__webpack_require__(/*! ./components/Header */ "./app-v2/modules/preferences/components/Header.js"));

var _Request = _interopRequireDefault(__webpack_require__(/*! ./view/Request */ "./app-v2/modules/preferences/view/Request.js"));

var _TripPreferences = _interopRequireDefault(__webpack_require__(/*! ./view/TripPreferences */ "./app-v2/modules/preferences/view/TripPreferences.js"));

var _ContactDetails = _interopRequireDefault(__webpack_require__(/*! ./view/ContactDetails */ "./app-v2/modules/preferences/view/ContactDetails.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Preferences = (_temp = _class = class Preferences extends _react.default.Component {
  constructor(props) {
    super(props);

    this.tracksegmentEvent = (event, section, object, cta) => {
      (0, _utils.rescue)(() => {
        (0, _segmentEvents.trackSegment)({
          event: event,
          object: object || '',
          section: section || '',
          cta: cta || ''
        });
      });
    };
  }

  render() {
    const {
      preferences,
      currentTripId,
      updated,
      errors,
      updatePreferences,
      location,
      push,
      goBack
    } = this.props;
    const requestPreferences = (0, _helpers.getRequestPreferences)(preferences);
    const tripPrefInitialFormData = (0, _helpers.getTripPrefInitialFormData)(preferences);
    const contactPreferences = (0, _helpers.getContactPreferences)(preferences);
    const isConvertedTrip = (0, _utils.isTripConverted)(preferences.status);

    const isCancelledTrip = preferences.status.toLowerCase() === _tripStatus.TRIP_STATUS.CANCELLED;

    return _react.default.createElement("div", null, _react.default.createElement(_Header.default, {
      currentTripId: currentTripId,
      location: location,
      pushState: push,
      goBack: goBack
    }), _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_Request.default, {
      preferences: requestPreferences,
      handleSubmit: updatePreferences,
      isConvertedTrip: isConvertedTrip,
      isCancelledTrip: isCancelledTrip,
      trackSegment: this.tracksegmentEvent,
      opDetails: preferences.opDetails,
      currentTripId: currentTripId,
      updated: updated,
      errors: errors
    })), _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_TripPreferences.default, {
      preferences: preferences,
      initialFormData: tripPrefInitialFormData,
      isConvertedTrip: isConvertedTrip,
      trackSegment: this.tracksegmentEvent,
      isCancelledTrip: isCancelledTrip,
      handleSubmit: updatePreferences,
      currentTripId: currentTripId,
      updated: updated,
      errors: errors
    })), _react.default.createElement("div", {
      className: "mb8"
    }, _react.default.createElement(_ContactDetails.default, {
      preferences: contactPreferences,
      isCancelledTrip: isCancelledTrip,
      handleSubmit: updatePreferences,
      isConvertedTrip: isConvertedTrip,
      trackSegment: this.tracksegmentEvent,
      opDetails: preferences.opDetails,
      currentTripId: currentTripId,
      updated: updated,
      errors: errors
    })));
  }

}, _class.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  updated: _propTypes.default.bool,
  errors: _propTypes.default.array,
  preferences: _propTypes.default.object,
  location: _propTypes.default.object,
  trackSegmentEvent: _propTypes.default.func,
  updatePreferences: _propTypes.default.func,
  push: _propTypes.default.func.isRequired,
  goBack: _propTypes.default.func.isRequired
}, _class.defaultProps = {
  preferences: {},
  trackSegmentEvent: () => {}
}, _temp);
var _default = Preferences;
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

/***/ "./app-v2/modules/preferences/components/Dropdown.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/preferences/components/Dropdown.js ***!
  \***********************************************************/
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Dropdown = ({
  disabled,
  input,
  defaultValue,
  options,
  meta: {
    touched,
    error
  }
}) => _react.default.createElement("div", null, _react.default.createElement("select", _extends({}, input, {
  onBlur: () => input.onBlur(input.value),
  className: `${'select'} ${touched && error && 'input-error'}`,
  defaultValue: defaultValue,
  disabled: disabled
}), options.map(option => _react.default.createElement("option", {
  value: option.value,
  key: `isd_${option.value}`
}, option.label))), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error));

Dropdown.propTypes = {
  options: _propTypes.default.array,
  defaultValue: _propTypes.default.any,
  input: _propTypes.default.object,
  meta: _propTypes.default.object,
  disabled: _propTypes.default.bool
};
Dropdown.defaultProps = {};
var _default = Dropdown;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/components/EditPreferencesPopup.js":
/*!***********************************************************************!*\
  !*** ./app-v2/modules/preferences/components/EditPreferencesPopup.js ***!
  \***********************************************************************/
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

let EditPreferencesPopup = class EditPreferencesPopup extends _react.Component {
  render() {
    const {
      opDetails,
      closeModal
    } = this.props;
    const editPreferenceMsg = 'To edit your preferences, kindly connect with your trip guide';
    return _react.default.createElement("div", {
      className: "pt24 pb24 pl15 pr15"
    }, _react.default.createElement("div", {
      className: "at_msg"
    }, opDetails.phoneNo ? `${editPreferenceMsg}- ${opDetails.name} (${opDetails.phoneNo})` : opDetails.name ? `${editPreferenceMsg}- ${opDetails.name}` : editPreferenceMsg), opDetails.phoneNo ? _react.default.createElement("div", {
      className: "text-right"
    }, _react.default.createElement("button", {
      onClick: closeModal,
      className: "mr24 fw7"
    }, "Cancel"), _react.default.createElement("a", {
      href: `tel:${opDetails.phoneNo}`,
      className: "fw7"
    }, "Call")) : null);
  }

};
EditPreferencesPopup.propTypes = {
  opDetails: _propTypes.default.object,
  closeModal: _propTypes.default.func
};
var _default = EditPreferencesPopup;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/components/Header.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/preferences/components/Header.js ***!
  \*********************************************************/
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

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Header = (_temp2 = _class = class Header extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.goBackHandler = () => {
      const {
        currentTripId,
        location,
        goBack
      } = this.props;
      const rlpPath = (0, _urlHelpers.rtripPath)(currentTripId);
      location.action === 'POP' ? this.props.pushState(rlpPath) : goBack();
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "pbc1 flex alignCenter pl15 pr15 pt8 pb8"
    }, _react.default.createElement("div", {
      className: "pt4 pb4 flex"
    }, _react.default.createElement("span", {
      className: "input-24 block mr15",
      onClick: this.goBackHandler
    }, _react.default.createElement(_Icon.Back2IconWhite, null)), _react.default.createElement("p", {
      className: "f16 fw7 m0 sfcw"
    }, `Booking ID #${this.props.currentTripId}`)));
  }

}, _class.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  location: _propTypes.default.object,
  pushState: _propTypes.default.func.isRequired,
  goBack: _propTypes.default.func.isRequired
}, _temp2);
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/components/HotelSelector.js":
/*!****************************************************************!*\
  !*** ./app-v2/modules/preferences/components/HotelSelector.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/preferences/constants.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let HotelSelector = (_temp = _class = class HotelSelector extends _react.Component {
  constructor(props) {
    super(props);

    this.onClick = option => {
      const value = _objectSpread({}, this.props.input.value);

      if (option.id === _constants.HotelRequiredIds.NOT_REQUIRED) {
        Object.keys(value).forEach(key => {
          value[key] = false;
        });
      } else {
        value[_constants.HotelRequiredIds.NOT_REQUIRED] = false;
      }

      value[option.id] = !value[option.id];
      this.props.input.onChange(value);
    };
  }

  render() {
    const {
      input,
      meta: {
        touched,
        error
      }
    } = this.props;
    return _react.default.createElement("div", null, this.props.options ? this.props.options.map(option => _react.default.createElement("div", {
      className: "iblock mr8 mb8",
      key: option.id
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: `checkboxHotel_${option.id}`,
      className: "checkbox-common",
      checked: input.value[option.id],
      onChange: () => this.onClick(option)
    }), _react.default.createElement("label", {
      className: "pl24 pr24",
      htmlFor: `checkboxHotel_${option.id}`
    }, option.name))) : null, touched && error && _react.default.createElement("span", {
      className: "input-error-text"
    }, error));
  }

}, _class.propTypes = {
  options: _propTypes.default.array,
  input: _propTypes.default.object,
  meta: _propTypes.default.object
}, _temp);
exports.default = HotelSelector;

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

/***/ "./app-v2/modules/preferences/components/RadioButton.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/preferences/components/RadioButton.js ***!
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

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let RadioButton = (_temp = _class = class RadioButton extends _react.Component {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      this.props.input.onChange(parseInt(e.target.value));
    };
  }

  render() {
    const {
      input,
      meta: {
        touched,
        error
      }
    } = this.props;
    return _react.default.createElement("div", {
      className: "mb15"
    }, this.props.options ? this.props.options.map(option => _react.default.createElement("div", {
      className: "iblock mr8 mb8",
      key: option.id
    }, _react.default.createElement("input", {
      name: input.name,
      type: "radio",
      id: `checkboxHotel_${option.id}`,
      className: "radio-common-circle checkbox-round sfc6",
      value: option.id,
      checked: option.id === input.value,
      onChange: this.handleChange
    }), _react.default.createElement("label", {
      className: "pr8",
      htmlFor: `checkboxHotel_${option.id}`
    }, _react.default.createElement("div", {
      className: "pl3"
    }, option.name)))) : null, touched && error && _react.default.createElement("span", {
      className: "input-error-text"
    }, error));
  }

}, _class.propTypes = {
  options: _propTypes.default.array,
  input: _propTypes.default.object,
  meta: _propTypes.default.object
}, _temp);
exports.default = RadioButton;

/***/ }),

/***/ "./app-v2/modules/preferences/components/TextBox.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/preferences/components/TextBox.js ***!
  \**********************************************************/
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TextBox = ({
  disabled,
  input,
  placeholder,
  className,
  meta: {
    touched,
    error
  }
}) => _react.default.createElement("div", null, _react.default.createElement("input", _extends({
  type: "text"
}, input, {
  disabled: disabled,
  placeholder: placeholder,
  className: `${'input'} ${touched && error && 'input-error'} ${className}`
})), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error));

TextBox.propTypes = {
  placeholder: _propTypes.default.string,
  input: _propTypes.default.object,
  meta: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
TextBox.defaultProps = {
  className: ''
};
var _default = TextBox;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/constants.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/preferences/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRIP_STAGES = exports.FixedCustomizationIds = exports.FixedCustomization = exports.handledCustomizations = exports.HotelRequiredIds = exports.customizationTypes = exports.preferencesDetailsTitleKeyMap = exports.contactDetailsTitleKeyMap = exports.requestDetailsTitleKeyMap = exports.ChildCustomizationDetail = exports.BookTimeCustomizationDetail = exports.LocalAttractionCustomizationDetail = exports.CabCustomizationDetail = exports.FlightCustomizationDetail = exports.HotelCustomizationDetail = void 0;
const HotelCustomizationDetail = {
  required: {
    id: 22,
    label: 'hotel_required'
  },
  category: {
    id: 2,
    label: 'hotel_category'
  }
};
exports.HotelCustomizationDetail = HotelCustomizationDetail;
const FlightCustomizationDetail = {
  id: 23,
  label: 'flight_required'
};
exports.FlightCustomizationDetail = FlightCustomizationDetail;
const CabCustomizationDetail = {
  required: {
    id: 24,
    label: 'cab_required'
  },
  questions: {
    id: 3,
    label: 'cabs'
  },
  domesticDestinationOptionId: 12
};
exports.CabCustomizationDetail = CabCustomizationDetail;
const LocalAttractionCustomizationDetail = {
  id: 25,
  label: 'local_attractions'
};
exports.LocalAttractionCustomizationDetail = LocalAttractionCustomizationDetail;
const BookTimeCustomizationDetail = {
  id: 43,
  label: 'booking_time'
};
exports.BookTimeCustomizationDetail = BookTimeCustomizationDetail;
const ChildCustomizationDetail = {
  id: 7,
  label: 'children_age'
};
exports.ChildCustomizationDetail = ChildCustomizationDetail;
const requestDetailsTitleKeyMap = {
  from_loc: 'Departure City',
  to_loc: 'Destination',
  start_date: 'Departure Date',
  duration: 'Duration',
  travelers: 'Travelers'
};
exports.requestDetailsTitleKeyMap = requestDetailsTitleKeyMap;
const contactDetailsTitleKeyMap = {
  email: 'Email ID',
  phone_no: 'Phone Number'
};
exports.contactDetailsTitleKeyMap = contactDetailsTitleKeyMap;
const preferencesDetailsTitleKeyMap = {
  hotels: 'Hotels',
  flights: 'Flights',
  budget: 'Budget Per Person',
  cabs: 'Cabs',
  AddPrefs: 'Additional Preferences'
};
exports.preferencesDetailsTitleKeyMap = preferencesDetailsTitleKeyMap;
const customizationTypes = {
  PICKER: 'single_value',
  MULTI_BUTTONS: 'multi_value'
};
exports.customizationTypes = customizationTypes;
const HotelRequiredIds = {
  REQUIRED: 95,
  NOT_REQUIRED: 96
};
exports.HotelRequiredIds = HotelRequiredIds;
const handledCustomizations = {
  cities: 1,
  boolean_headings: 1,
  attractions: 1,
  other: 1,
  itinerary: 1
};
exports.handledCustomizations = handledCustomizations;
const FixedCustomization = {
  FlightCustomization: FlightCustomizationDetail.id,
  HotelCustomizationReq: HotelCustomizationDetail.required.id,
  HotelCustomizationCategories: HotelCustomizationDetail.category.id,
  CabOptions: CabCustomizationDetail.questions
};
exports.FixedCustomization = FixedCustomization;
const FixedCustomizationIds = [HotelCustomizationDetail.required.id, //22
HotelCustomizationDetail.category.id, //2
FlightCustomizationDetail.id, //23
ChildCustomizationDetail.id, // 7
CabCustomizationDetail.required.id, //24
CabCustomizationDetail.questions.id //3
];
exports.FixedCustomizationIds = FixedCustomizationIds;
const TRIP_STAGES = {
  options: [{
    id: 1,
    name: 'Still Dreaming… Not sure I am going to take this trip'
  }, {
    id: 2,
    name: 'I know I’m going somewhere, Just not sure which place'
  }, {
    id: 3,
    name: 'I’m definitely going. I know which place… Let’s go!'
  }, {
    id: 4,
    name: 'Flight- Train already booked, Just need remaining package'
  }]
};
exports.TRIP_STAGES = TRIP_STAGES;

/***/ }),

/***/ "./app-v2/modules/preferences/edit/ContactDetails.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/preferences/edit/ContactDetails.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _isdCodes = _interopRequireDefault(__webpack_require__(/*! helpers/isdCodes */ "./app/helpers/isdCodes.js"));

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _TextBox = _interopRequireDefault(__webpack_require__(/*! ../components/TextBox */ "./app-v2/modules/preferences/components/TextBox.js"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ../components/Dropdown */ "./app-v2/modules/preferences/components/Dropdown.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./app-v2/modules/preferences/edit/Header.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContactDetails = ({
  handleSubmit,
  submitting
}) => {
  const PREFERENCE_ISD_CODES = Object.keys(_isdCodes.default).map(key => {
    return {
      label: _isdCodes.default[key],
      value: _isdCodes.default[key]
    };
  });
  return _react.default.createElement("div", {
    className: "sbcw"
  }, _react.default.createElement("div", {
    className: "absolute t0 l0 wfull"
  }, _react.default.createElement(_Header.default, null)), _react.default.createElement("div", {
    className: "p15"
  }, _react.default.createElement("form", {
    onSubmit: handleSubmit
  }, _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement("label", {
    htmlFor: "emailId",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "Email ID", _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), _react.default.createElement(_reduxForm.Field, {
    name: "email",
    component: _TextBox.default,
    label: "Email Id",
    placeholder: "example@domain.com",
    validate: [_formValidators.required, _formValidators.email]
  })), _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement("label", {
    htmlFor: "phoneNumber",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "Phone Number ", _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-xs-4"
  }, _react.default.createElement("div", {
    className: " select-con input-box"
  }, _react.default.createElement(_reduxForm.Field, {
    name: "isdCode",
    options: PREFERENCE_ISD_CODES,
    component: _Dropdown.default,
    defaultValue: "+91"
  }), _react.default.createElement("span", {
    className: "r10 block wauto lauto input-icon absolute-center-v downArrow"
  }, _react.default.createElement(_Icon.DownArrow, null)))), _react.default.createElement("div", {
    className: "col-xs-8 pl0"
  }, _react.default.createElement(_reduxForm.Field, {
    name: "phoneNo",
    component: _TextBox.default,
    placeholder: "Mobile/Contact No.",
    validate: [_formValidators.required, _formValidators.phoneNumber]
  })))), _react.default.createElement("div", {
    className: "fixed b0 p8 wfull sbcw bs6 l0 r0 bt z2"
  }, _react.default.createElement("button", {
    type: "submit",
    disabled: submitting,
    className: "btn-filled-pri-large wfull at_confirm"
  }, "Confirm")))));
};

ContactDetails.propTypes = {
  submitting: _propTypes.default.bool,
  handleSubmit: _propTypes.default.func
};
ContactDetails.defaultProps = {};

var _default = (0, _reduxForm.reduxForm)({
  form: 'ContactDetailsPreferences' // a unique identifier for this form

})(ContactDetails);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/edit/Header.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/preferences/edit/Header.js ***!
  \***************************************************/
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

let Header = (_temp = _class = class Header extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "pt8 pb8 pl15 pr15 flex bb wfull fixed z5 sbcw"
    }, _react.default.createElement("div", {
      className: "pt4 pb4 flex"
    }, _react.default.createElement("p", {
      className: "f16 flex alignCenter fw7 flexFull ellipsis ml24"
    }, this.props.text)));
  }

}, _class.propTypes = {
  text: _propTypes.default.string
}, _class.defaultProps = {
  text: 'Edit Preference'
}, _temp);
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/edit/Request.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/preferences/edit/Request.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _TextBox = _interopRequireDefault(__webpack_require__(/*! ../components/TextBox */ "./app-v2/modules/preferences/components/TextBox.js"));

var _DatePicker = _interopRequireDefault(__webpack_require__(/*! ../components/DatePicker */ "./app-v2/modules/preferences/components/DatePicker.js"));

var _NumberFormatter = _interopRequireDefault(__webpack_require__(/*! ../components/NumberFormatter */ "./app-v2/modules/preferences/components/NumberFormatter.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./app-v2/modules/preferences/edit/Header.js"));

var _RadioButton = _interopRequireDefault(__webpack_require__(/*! ../components/RadioButton */ "./app-v2/modules/preferences/components/RadioButton.js"));

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/preferences/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Request = ({
  handleSubmit,
  submitting,
  errors
}) => {
  return _react.default.createElement("div", {
    className: "sbcw"
  }, _react.default.createElement("div", {
    className: "absolute wfull t0 l0"
  }, _react.default.createElement(_Header.default, null)), errors && errors.length ? errors.map(error => _react.default.createElement("p", {
    className: "f14 fw7 mt8 mb0 pl15 pr15",
    style: {
      color: 'red'
    }
  }, `* ${error}`)) : null, _react.default.createElement("div", {
    className: "p15"
  }, _react.default.createElement("form", {
    onSubmit: handleSubmit
  }, _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement("label", {
    htmlFor: "destination",
    className: "block m0 f14p mb8 fw7 sfc6"
  }, "Destination ", _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), _react.default.createElement(_reduxForm.Field, {
    name: "destination",
    component: _TextBox.default,
    type: "text",
    placeholder: "Destination",
    validate: _formValidators.required,
    className: "at_destination"
  })), _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement("label", {
    htmlFor: "departureCity",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "Departure City ", _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), _react.default.createElement(_reduxForm.Field, {
    name: "departureCity",
    component: _TextBox.default,
    type: "text",
    placeholder: "Departure City",
    validate: _formValidators.required,
    className: "at_departureCity"
  })), _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "mb15 col-xs-6 pr8"
  }, _react.default.createElement("label", {
    htmlFor: "departureDate",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "Departure Date ", _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), _react.default.createElement(_reduxForm.Field, {
    name: "departureDate",
    component: _DatePicker.default,
    type: "text",
    placeholder: "Fri, 10 May",
    validate: [_formValidators.required, (0, _formValidators.validDate)('DD MMM YYYY')]
  })), _react.default.createElement("div", {
    className: "mb15 col-xs-6 pl8"
  }, _react.default.createElement("label", {
    htmlFor: "days",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "No. Of Days ", _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), _react.default.createElement(_reduxForm.Field, {
    name: "tripDays",
    component: _NumberFormatter.default,
    type: "number",
    placeholder: "2",
    validate: _formValidators.required,
    startValue: 2,
    className: "at_days"
  }))), _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "mb15 col-xs-6 pr8"
  }, _react.default.createElement("label", {
    htmlFor: "adults",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "Adults (+12 years)"), _react.default.createElement(_reduxForm.Field, {
    name: "adults",
    component: _NumberFormatter.default,
    type: "number",
    placeholder: "2",
    startValue: 1,
    className: "at_adults"
  })), _react.default.createElement("div", {
    className: "mb15 col-xs-6 pl8"
  }, _react.default.createElement("label", {
    htmlFor: "children",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "Children"), _react.default.createElement(_reduxForm.Field, {
    name: "children",
    component: _NumberFormatter.default,
    type: "number",
    placeholder: "2",
    startValue: 0
  })), _react.default.createElement("div", {
    className: "mb15 pl8"
  }, _react.default.createElement("label", {
    htmlFor: "children",
    className: "block m0 f14p fw4 mb8 fw7"
  }, "Trip Planning Stage"), _react.default.createElement("div", {
    className: "row row- m0 mb48 "
  }, _react.default.createElement(_reduxForm.Field, {
    name: "tripStage",
    component: _RadioButton.default,
    options: _constants.TRIP_STAGES.options
  })))), _react.default.createElement("div", {
    className: "fixed b0 p8 wfull sbcw bs6 l0 r0 bt z2"
  }, _react.default.createElement("button", {
    type: "submit",
    disabled: submitting,
    className: "btn-filled-pri-large wfull  at_confirm"
  }, "Confirm")))));
};

Request.propTypes = {
  errors: _propTypes.default.array,
  submitting: _propTypes.default.bool,
  handleSubmit: _propTypes.default.func
};
Request.defaultProps = {
  errors: []
};

var _default = (0, _reduxForm.reduxForm)({
  form: 'RequestPreferences' // a unique identifier for this form

})(Request);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/edit/TripPreferences.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/preferences/edit/TripPreferences.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _HotelSelector = _interopRequireDefault(__webpack_require__(/*! ../components/HotelSelector */ "./app-v2/modules/preferences/components/HotelSelector.js"));

var _FlightBooking = _interopRequireDefault(__webpack_require__(/*! ../fields/FlightBooking */ "./app-v2/modules/preferences/fields/FlightBooking.js"));

var _CabFields = _interopRequireDefault(__webpack_require__(/*! ../fields/CabFields */ "./app-v2/modules/preferences/fields/CabFields.js"));

var _BudgetField = _interopRequireDefault(__webpack_require__(/*! ../fields/BudgetField */ "./app-v2/modules/preferences/fields/BudgetField.js"));

var _SingleValuedField = _interopRequireDefault(__webpack_require__(/*! ../fields/SingleValuedField */ "./app-v2/modules/preferences/fields/SingleValuedField.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./app-v2/modules/preferences/edit/Header.js"));

var _helpers = __webpack_require__(/*! ../helpers */ "./app-v2/modules/preferences/helpers.js");

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/preferences/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TripPreferences = ({
  handleSubmit,
  submitting,
  preferences,
  flightAnswerValue,
  hotelStarsValues,
  singleOptionValues
}) => {
  const noHotelValue = hotelStarsValues && hotelStarsValues[_constants.HotelRequiredIds.NOT_REQUIRED];

  const getOtherPreferences = (otherOptions, limit = 0, offset = 0) => {
    limit = limit || otherOptions.length;
    const otherFields = [];

    for (let i = offset; i < limit; i += 1) {
      otherFields.push(_react.default.createElement("div", {
        key: otherOptions[i].id,
        className: "row row- m0 mb8 pb2"
      }, _react.default.createElement(_SingleValuedField.default, {
        preference: otherOptions[i]
      })));
    }

    return otherFields;
  };

  const {
    preferencesData
  } = preferences;

  const hotelPreference = _objectSpread({}, preferencesData.hotelCategoryCustomizations[0]);

  const flightPreference = preferencesData.customizations.find(e => e.id === _constants.FlightCustomizationDetail.id);
  const flightBudget = preferencesData.flightBudget;
  const hotelBudget = preferencesData.hotelBudgets;
  const cabRequiredPreference = preferencesData.customizations.find(e => e.id === _constants.CabCustomizationDetail.required.id);
  const cabQuestionsPreference = preferencesData.customizations.find(e => e.id === _constants.CabCustomizationDetail.questions.id);
  const destinationsList = preferences.destinationsList;
  const otherPreferenceOptions = (0, _helpers.getOtherPreferencesOptions)(preferences);
  hotelPreference.options = [...preferencesData.hotelCategoryCustomizations[0].options, {
    id: 96,
    name: 'No Hotel'
  }];
  return _react.default.createElement("div", {
    className: "sbcw pb48"
  }, _react.default.createElement("div", {
    className: "absolute t0 l0 wfull r0"
  }, _react.default.createElement(_Header.default, null)), _react.default.createElement("div", {
    className: "p15"
  }, _react.default.createElement("form", {
    onSubmit: handleSubmit
  }, _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement("label", {
    htmlFor: "destination",
    className: "flex alignCenter m0 f14p fw7 mb8"
  }, _react.default.createElement("span", {
    className: "mr8 block input-24"
  }, _react.default.createElement(_Icon.Hotel, null)), _react.default.createElement("span", null, "Hotels")), _react.default.createElement("div", {
    className: "bb"
  }, _react.default.createElement(_reduxForm.Field, {
    name: "hotelCategories",
    component: _HotelSelector.default,
    options: hotelPreference.options
  }))), _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement(_FlightBooking.default, {
    flightOptions: flightPreference
  })), _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement(_BudgetField.default, {
    flightAnswerValue: flightAnswerValue,
    hotelStarsValues: hotelStarsValues,
    noHotelValue: noHotelValue,
    flightBudget: flightBudget,
    hotelBudget: hotelBudget
  })), _react.default.createElement("div", null, _react.default.createElement(_CabFields.default, {
    cabRequiredPreference: cabRequiredPreference,
    cabQuestionsPreference: cabQuestionsPreference,
    destinationsList: destinationsList,
    singleOptionValues: singleOptionValues
  })), _react.default.createElement("div", null, _react.default.createElement("label", {
    htmlFor: "bookingTime",
    className: "block m0 f14p fw7 sfc6 mb8 hide"
  }, "I Will Book"), getOtherPreferences(otherPreferenceOptions, 1)), getOtherPreferences(otherPreferenceOptions, 0, 1), _react.default.createElement("div", {
    className: "mb15"
  }, _react.default.createElement("label", {
    htmlFor: "additional",
    className: "block m0 f14p fw7 sfc6 mb8"
  }, "Additional Preferences"), _react.default.createElement(_reduxForm.Field, {
    name: "info",
    component: "textarea",
    type: "text",
    placeholder: "Want to say anything?",
    className: "border textarea wfull p15 at_editpreftextbox"
  })), _react.default.createElement("div", {
    className: "fixed b0 p8 wfull sbcw bs6 l0 r0 bt z2"
  }, _react.default.createElement("button", {
    type: "submit",
    disabled: submitting,
    className: "btn-filled-pri-large wfull  at_confirm"
  }, "Confirm")))));
};

TripPreferences.propTypes = {
  preferences: _propTypes.default.object,
  flightAnswerValue: _propTypes.default.object,
  hotelStarsValues: _propTypes.default.object,
  singleOptionValues: _propTypes.default.object,
  submitting: _propTypes.default.bool,
  handleSubmit: _propTypes.default.func
};
TripPreferences.defaultProps = {};
const TripPreferencesForm = (0, _reduxForm.reduxForm)({
  form: 'TripPreferences' // a unique identifier for this form

})(TripPreferences);
const selector = (0, _reduxForm.formValueSelector)('TripPreferences'); // <-- same as form name

const TripPreferencesConnectedForm = (0, _reactRedux.connect)(state => {
  // can select values individually
  const singleOptionValues = selector(state, 'singleValueOptions');
  const flightAnswerValue = selector(state, 'flightAnswerAttributes');
  const hotelStarsValues = selector(state, 'hotelCategories');
  return {
    singleOptionValues,
    flightAnswerValue,
    hotelStarsValues
  };
})(TripPreferencesForm);
var _default = TripPreferencesConnectedForm;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/fields/BudgetField.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/preferences/fields/BudgetField.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const renderBudgetTextField = ({
  isFlightSelected,
  input,
  meta: {
    touched,
    error
  }
}) => _react.default.createElement("div", {
  className: "budget-textbox at_editbudget"
}, _react.default.createElement("label", {
  htmlFor: "From",
  className: "f14 fw9 pb8 block pfc3"
}, "Budget ", isFlightSelected ? 'With' : 'Without', " Airfare :", _react.default.createElement("span", {
  className: "pfc4 fw4"
}, "(per person)")), _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("div", {
  className: "input-with-icon-box"
}, _react.default.createElement("span", {
  className: "input-icon"
}, _react.default.createElement(_Icon.BudgetIcon, null)), _react.default.createElement("input", _extends({}, input, {
  placeholder: "Enter your budget value"
})), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error))));

renderBudgetTextField.propTypes = {
  isFlightSelected: _propTypes.default.bool,
  input: _propTypes.default.object,
  meta: _propTypes.default.object
};
const budgetError = undefined;

const getBudgetOptionFields = (budgetOptions, flightSelected) => {
  const budgetFields = budgetOptions.map(budgetOption => {
    const id = `${budgetOption.min_price}-${budgetOption.max_price}`;
    return _react.default.createElement("div", {
      className: "iblock p5 pr8 pl0",
      key: id
    }, _react.default.createElement(_reduxForm.Field, {
      name: "budget",
      component: "input",
      className: "radio-common",
      id: id,
      type: "radio",
      value: `${budgetOption.min_price}..${budgetOption.max_price}`
    }), _react.default.createElement("label", {
      className: "pl15 pr15 cursorP",
      htmlFor: id
    }, _react.default.createElement("p", {
      className: "m0"
    }, "\u20B9 ", (0, _parsers.numberWithCommas)(budgetOption.min_price), "-", (0, _parsers.numberWithCommas)(budgetOption.max_price))));
  });
  return _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement("p", {
    className: "f14p fw7 sfc6 m0"
  }, "Budget ", flightSelected ? 'With ' : 'Without ', "Airfare: ( per person )", _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), budgetFields, budgetError && _react.default.createElement("span", {
    className: "input-error-text"
  }, budgetError));
};

let BudgetField = (_temp = _class = class BudgetField extends _react.default.Component {
  getBudgetOptions() {
    const idToStar = {
      32: '2Star',
      8: '3Star',
      7: '4Star',
      6: '5Star'
    };
    const flightOption = this.props.flightAnswerValue;
    const hotelStarsOptions = this.props.hotelStarsValues;
    const noHotelValue = this.props.noHotelValue; // no preferences are there

    if (!hotelStarsOptions) {
      return undefined;
    }

    const flightBudget = this.props.flightBudget && this.props.flightBudget.flightPrice;
    const selectedHotelOptions = [];

    for (const hotelOption in hotelStarsOptions) {
      if (hotelStarsOptions[hotelOption]) {
        selectedHotelOptions.push(hotelOption);
      }
    } // get flight budget


    const flightPrice = flightOption.customizationId === 23 && flightOption.optionId === '97' ? flightBudget : 0; // get hotel budget
    // 96 - No hotel

    if (hotelStarsOptions && selectedHotelOptions.length && !noHotelValue && this.props.hotelBudget) {
      const hotelBudgets = this.props.hotelBudget[idToStar[Math.min(...selectedHotelOptions)]];
      return hotelBudgets.map(hotelBudget => ({
        max_price: hotelBudget.maxPrice + flightPrice,
        min_price: hotelBudget.minPrice + flightPrice
      }));
    }

    return undefined;
  }

  isFlightSelected() {
    return this.props.flightAnswerValue && this.props.flightAnswerValue.optionId === '97';
  }

  render() {
    const budgetOptions = this.getBudgetOptions();
    const flightSelected = this.isFlightSelected();
    return budgetOptions ? getBudgetOptionFields(budgetOptions, flightSelected, this.error) : _react.default.createElement(_reduxForm.Field, {
      name: "budget",
      component: renderBudgetTextField,
      isFlightSelected: flightSelected
    });
  }

}, _class.propTypes = {
  flightAnswerValue: _propTypes.default.object,
  hotelStarsValues: _propTypes.default.object,
  flightBudget: _propTypes.default.object,
  hotelBudget: _propTypes.default.object,
  noHotelValue: _propTypes.default.bool
}, _temp);
var _default = BudgetField;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/fields/CabFields.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/preferences/fields/CabFields.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/preferences/constants.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GCabRadioDiv = _glamorous.default.div({
  '& .cab-radio:checked + label p': {
    color: '#20A397 !important'
  }
});

const CabFields = ({
  cabRequiredPreference,
  cabQuestionsPreference,
  destinationsList,
  singleOptionValues
}) => {
  const destinationType = destinationsList && destinationsList[0] && destinationsList[0].destinationType;

  if (!cabRequiredPreference) {
    return null;
  }

  const cabYesOption = cabRequiredPreference.options.find(option => option.name === 'Yes');
  let cabSelectedOption = undefined;

  if (singleOptionValues) {
    cabSelectedOption = singleOptionValues[_constants.CabCustomizationDetail.required.id];
  }

  const getCabOptions = (prefernce, selectedOptions = undefined, inputClass = 'radio-common') => {
    const options = selectedOptions || prefernce.options;
    return options.map(option => {
      const elementId = `option-radio-${option.id}`;
      return _react.default.createElement("div", {
        key: option.id
      }, _react.default.createElement(GCabRadioDiv, {
        className: "p5"
      }, _react.default.createElement(_reduxForm.Field, {
        name: `singleValueOptions[${prefernce.id}][optionId]`,
        component: "input",
        className: inputClass,
        id: elementId,
        type: "radio",
        value: option.id.toString()
      }), _react.default.createElement("label", {
        htmlFor: elementId,
        className: "cursorP block pr8 pl8"
      }, _react.default.createElement("p", {
        className: "m0 fw7 text-uppercase"
      }, option.name))));
    });
  };

  const getCabDomesticOptions = options => options.map(option => {
    const elementId = `option-radio-${option}`;
    return _react.default.createElement("div", {
      key: option,
      className: "col-xs-6 p5 pt4"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "driverSpeaks",
      component: "input",
      className: "radio-common",
      id: elementId,
      type: "radio",
      value: option
    }), _react.default.createElement("label", {
      htmlFor: elementId,
      className: "cursorP"
    }, _react.default.createElement("p", {
      className: "m0"
    }, option)));
  });

  const getCabNestedQuestion = () => {
    if (cabSelectedOption && cabSelectedOption.optionId === cabYesOption.id.toString()) {
      if (destinationType === 'International') {
        const options = cabQuestionsPreference.options.filter(option => option.id !== _constants.CabCustomizationDetail.domesticDestinationOptionId);
        return _react.default.createElement("div", {
          className: "clearfix mb8"
        }, _react.default.createElement("div", {
          className: "col-md-12 will-book-comp"
        }, _react.default.createElement("p", {
          className: "f14p fw7 sfc6 m0 iblock pb3"
        }, cabQuestionsPreference.title), _react.default.createElement("div", {
          className: "clearfix pl4 pt0"
        }, _react.default.createElement("div", {
          className: "row row-8 flex"
        }, getCabOptions(cabQuestionsPreference, options)))));
      }

      const option = cabQuestionsPreference.options.find(opt => opt.id === _constants.CabCustomizationDetail.domesticDestinationOptionId);
      const options = ['English', 'Hindi'];
      return _react.default.createElement("div", {
        className: "clearfix mb8"
      }, _react.default.createElement("div", {
        className: "col-md-12 will-book-comp"
      }, _react.default.createElement("p", {
        className: "f14p fw7 sfc6 m0 iblock"
      }, option.name), _react.default.createElement("div", {
        className: "clearfix pl4 pt0"
      }, _react.default.createElement("div", {
        className: "row row-8"
      }, getCabDomesticOptions(options)))));
    }

    return '';
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "clearfix mb8"
  }, _react.default.createElement("div", {
    className: "at_editcabs flex alignCenter spaceBetween"
  }, _react.default.createElement("div", {
    className: "flight-included col-md-8 pr0 pl0"
  }, _react.default.createElement("div", {
    className: "fw9 relative m0 flex alignCenter"
  }, _react.default.createElement("span", {
    className: "flight-icon input-24 relative block mr8"
  }, _react.default.createElement(_Icon.CabIconFront, null)), _react.default.createElement("p", {
    className: "f14p fw7 sfc6"
  }, cabRequiredPreference.title))), _react.default.createElement("div", {
    className: "text-right flex"
  }, getCabOptions(cabRequiredPreference, '', 'cab-radio hide')))), getCabNestedQuestion());
};

var _default = CabFields;
exports.default = _default;
CabFields.propTypes = {
  cabRequiredPreference: _propTypes.default.object.isRequired,
  cabQuestionsPreference: _propTypes.default.object.isRequired,
  destinationsList: _propTypes.default.array.isRequired,
  singleOptionValues: _propTypes.default.object
};

/***/ }),

/***/ "./app-v2/modules/preferences/fields/FlightBooking.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/preferences/fields/FlightBooking.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GFlightRadioDiv = _glamorous.default.div({
  '& .flight-radio': {
    display: 'none'
  },
  '& .flight-radio:checked + label p': {
    color: '#20A397 !important',
    fontWeight: '700'
  }
});

const renderFlightOption = flightOption => _react.default.createElement(GFlightRadioDiv, {
  className: "flexFull p8",
  key: flightOption.id
}, _react.default.createElement(_reduxForm.Field, {
  name: "flightAnswerAttributes[optionId]",
  id: `flight-included${flightOption.id}`,
  component: "input",
  className: "flight-radio hide",
  type: "radio",
  value: flightOption.id.toString()
}), _react.default.createElement("label", {
  htmlFor: `flight-included${flightOption.id}`,
  className: "block cursorP pr8 pl8"
}, _react.default.createElement("p", {
  className: "m0 f14p fw7 sfc6"
}, flightOption.name)));

const renderFlightOptions = flightOptions => flightOptions.map(flightOption => renderFlightOption(flightOption));

const FlightBooking = ({
  flightOptions
}) => {
  if (!flightOptions) {
    return _react.default.createElement("span", null);
  }

  return _react.default.createElement("div", {
    className: "flex alignCenter spaceBetween"
  }, _react.default.createElement("label", {
    htmlFor: "flights",
    className: "flex alignCenter m0 f14p fw7"
  }, _react.default.createElement("span", {
    className: "block mr8 input-24"
  }, _react.default.createElement(_Icon.Flights, null)), _react.default.createElement("span", {
    className: "f14p fw7 sfc6"
  }, "Flights")), _react.default.createElement("div", {
    className: "flex alignCenter text-uppercase"
  }, renderFlightOptions(flightOptions.options)));
};

FlightBooking.propTypes = {
  flightOptions: _propTypes.default.object.isRequired
};
var _default = FlightBooking;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/fields/SingleValuedField.js":
/*!****************************************************************!*\
  !*** ./app-v2/modules/preferences/fields/SingleValuedField.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getRadioComponent = (preferenceId, option, elementId) => _react.default.createElement("div", {
  key: option.id,
  className: "p5"
}, _react.default.createElement(_reduxForm.Field, {
  name: `singleValueOptions[${preferenceId}][optionId]`,
  component: "input",
  className: "radio-common",
  id: elementId,
  type: "radio",
  value: option.id.toString()
}), _react.default.createElement("label", {
  htmlFor: elementId,
  className: "cursorP pl15 pr15"
}, _react.default.createElement("p", {
  className: "m0"
}, option.name)));

const getCheckboxComponent = (preferenceId, option, elementId) => _react.default.createElement("div", {
  key: option.id,
  className: "p5"
}, _react.default.createElement(_reduxForm.Field, {
  name: `multiValueOptions[${preferenceId}][optionId][${option.id}]`,
  component: "input",
  className: "checkbox-common",
  id: elementId,
  type: "checkbox"
}), _react.default.createElement("label", {
  htmlFor: elementId,
  className: "cursorP pl24 pr24 pt5 pb5"
}, _react.default.createElement("p", {
  className: "m0"
}, option.name)));

const getOptions = preference => preference.options.map(option => {
  const elementId = `option-radio-${option.id}`;

  if (preference.valueType === 'single_value') {
    return getRadioComponent(preference.id, option, elementId);
  }

  return getCheckboxComponent(preference.id, option, elementId);
}); // {/* <FilterClear /> */}


const SingleValuedField = ({
  preference
}) => _react.default.createElement("div", {
  className: "clearfix will-book-comp"
}, _react.default.createElement("p", {
  className: "f14p fw7 sfc6 m0 iblock pb3"
}, preference.title), _react.default.createElement("div", {
  className: "clearfix pl4 pt0"
}, _react.default.createElement("div", {
  className: "row row-8 flex flexWrap"
}, getOptions(preference))));

var _default = SingleValuedField;
exports.default = _default;
SingleValuedField.propTypes = {
  preference: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./app-v2/modules/preferences/helpers.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/preferences/helpers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFlightAnswerAttr = getFlightAnswerAttr;
exports.getSelectedHotelIds = getSelectedHotelIds;
exports.isHotelRequired = isHotelRequired;
exports.getDriverLanguage = getDriverLanguage;
exports.getOtherPreferencesOptions = getOtherPreferencesOptions;
exports.getEligibleAnswersObj = getEligibleAnswersObj;
exports.getTripPrefInitialFormData = getTripPrefInitialFormData;
exports.getContactPreferences = exports.getRequestPreferences = exports.getTripPreferences = exports.getCabQuestionsPreference = exports.getCabRequiredPreference = void 0;

var _constants = __webpack_require__(/*! ./constants */ "./app-v2/modules/preferences/constants.js");

function getFlightAnswerAttr(customizations, selectedAnswers) {
  const flightAttrs = {
    customizationId: _constants.FlightCustomizationDetail.id
  };
  const flightOption = customizations.find(e => e.id === _constants.FlightCustomizationDetail.id);
  const flightSelectedAns = selectedAnswers.find(e => flightOption.options.map(el => el.id).indexOf(e.optionId) !== -1);

  if (flightSelectedAns) {
    flightAttrs.optionId = flightSelectedAns.optionId.toString();
    flightAttrs.id = flightSelectedAns.id;
  }

  return flightAttrs;
}

function getSelectedHotelIds(customizations, selectedAnswers) {
  const selectedHotelIds = {};
  const hotelCategoryOption = customizations.find(e => e.id === _constants.HotelCustomizationDetail.category.id);
  const hotelOptions = hotelCategoryOption.options;
  hotelOptions.map(hotelOption => {
    selectedHotelIds[hotelOption.id] = false;
  });
  selectedAnswers.map(hotelOption => {
    if (selectedHotelIds[hotelOption.optionId] !== undefined) {
      selectedHotelIds[hotelOption.optionId] = true;
    }
  });
  return selectedHotelIds;
}

function isHotelRequired(customizations, selectedOptions) {
  const hotelRequiredOption = customizations.find(e => e.id === _constants.HotelCustomizationDetail.required.id);
  const hotelRequiredSelectedOption = hotelRequiredOption.options.find(option => selectedOptions[option.id]);
  return hotelRequiredSelectedOption && hotelRequiredSelectedOption.name === 'Yes';
}

function getDriverLanguage(customizations, singleValueOptions, selectedAnswers, selectedOptions) {
  let driverSpeaks = undefined;
  const cabQuestionsPreference = getCabQuestionsPreference(customizations);

  if (cabQuestionsPreference) {
    singleValueOptions[cabQuestionsPreference.id] = {
      optionId: ''
    };
    const selectedOption1 = cabQuestionsPreference.options.find(e => selectedOptions[e.id]);

    if (selectedOption1) {
      singleValueOptions[cabQuestionsPreference.id].optionId = selectedOption1.id.toString();

      if (singleValueOptions[cabQuestionsPreference.id].optionId === _constants.CabCustomizationDetail.domesticDestinationOptionId.toString()) {
        driverSpeaks = selectedAnswers.find(e => selectedOptions[selectedOption1.id] === e.id).userInput;
      }
    }
  }

  return driverSpeaks;
}

function getOtherPreferencesOptions(preferences) {
  const preferenceData = preferences.preferencesData || {};
  const customizations = preferenceData.customizations || [];
  return customizations.filter(customization => _constants.FixedCustomizationIds.indexOf(customization.id) < 0).sort((a, b) => a.sequence - b.sequence);
}

function getEligibleAnswersObj(eligibleAnswers) {
  const answersObj = {};

  for (const option of eligibleAnswers) {
    answersObj[option.optionId] = option.id;
  }

  return answersObj;
}

function getTripPrefInitialFormData(preferences) {
  // error
  const multiValueOptions = {};
  const singleValueOptions = {};
  const selectedAnswers = preferences.preferencesData.eligibleAnswers;
  const selectedOptions = getEligibleAnswersObj(selectedAnswers);
  const otherOptions = getOtherPreferencesOptions(preferences);

  for (const preference of otherOptions) {
    if (preference.valueType === 'single_value') {
      singleValueOptions[preference.id] = {
        optionId: ''
      };
      const selectedOption = preference.options.find(e => selectedOptions[e.id]);

      if (selectedOption) {
        singleValueOptions[preference.id].optionId = selectedOption.id.toString();
      }
    } else {
      multiValueOptions[preference.id] = {
        optionId: {}
      };

      for (const option of preference.options) {
        multiValueOptions[preference.id].optionId[option.id] = selectedOptions[option.id];
      }
    }
  }

  const customizations = preferences.preferencesData.customizations;
  const cabRequiredPreference = getCabRequiredPreference(customizations);

  if (cabRequiredPreference) {
    singleValueOptions[cabRequiredPreference.id] = {
      optionId: ''
    };
    const selectedOption = cabRequiredPreference.options.find(e => selectedOptions[e.id]);

    if (selectedOption) {
      singleValueOptions[cabRequiredPreference.id].optionId = selectedOption.id.toString();
    }
  }

  const driverSpeaks = getDriverLanguage(customizations, singleValueOptions, selectedAnswers, selectedOptions);
  const flightAttrs = getFlightAnswerAttr(customizations, selectedAnswers);
  const selectedHotelIds = getSelectedHotelIds(customizations, selectedAnswers);
  selectedHotelIds[_constants.HotelRequiredIds.NOT_REQUIRED] = !isHotelRequired(customizations, selectedOptions);
  return {
    info: preferences.info,
    budget: preferences.budget,
    flightAnswerAttributes: flightAttrs,
    driverSpeaks,
    hotelCategories: selectedHotelIds,
    singleValueOptions: singleValueOptions,
    multiValueOptions: multiValueOptions,
    otherPreferences: otherOptions
  };
}

const getCabRequiredPreference = customizations => customizations.find(e => e.id === _constants.CabCustomizationDetail.required.id);

exports.getCabRequiredPreference = getCabRequiredPreference;

const getCabQuestionsPreference = customizations => customizations.find(e => e.id === _constants.CabCustomizationDetail.questions.id);

exports.getCabQuestionsPreference = getCabQuestionsPreference;

const getLabel = value => {
  let label = '';

  if (!value) {
    label = 'Not Required';
  } else if (value.toLowerCase() === 'included') {
    label = 'Yes';
  } else if (value.toLowerCase() === 'excluded') {
    label = 'No';
  } else {
    label = value.toString();
  }

  return label;
};

const getSelectedOptions = (options, eligibleAnswers) => {
  const selectedOptions = [];
  options.forEach(option => {
    const selected = eligibleAnswers[option.id];

    if (selected) {
      selectedOptions.push(option.name);
    }
  });
  return selectedOptions;
};

const getFieldObject = (label, value) => {
  return {
    label,
    value
  };
};

const getTripPreferences = preferences => {
  const {
    preferencesData: {
      eligibleAnswers: selectedAnswers
    }
  } = preferences;
  const eligibleAnswers = getEligibleAnswersObj(selectedAnswers);
  const otherPreferences = getOtherPreferencesOptions(preferences);
  const otherPrefFields = otherPreferences.map(preference => {
    const selectedOptions = getSelectedOptions(preference.options, eligibleAnswers);
    return {
      label: preference.title,
      value: selectedOptions.length ? selectedOptions.join(', ') : '-'
    };
  });
  return [getFieldObject('Hotel', preferences.exclusivePreferencesValues.hotels || '-'), getFieldObject('Flight', preferences.exclusivePreferencesValues.flights || '-'), getFieldObject('Budget Per Person', preferences.budget || '-'), getFieldObject('Cabs', preferences.exclusivePreferencesValues.cabs || '-'), ...otherPrefFields, getFieldObject('Additional Preferences', preferences.info || '-')];
};

exports.getTripPreferences = getTripPreferences;

const getRequestPreferences = preferences => {
  return {
    destination: preferences.toLoc,
    departureCity: preferences.fromLoc,
    departureDate: preferences.startDate,
    days: preferences.nights + 1,
    nights: preferences.nights,
    adults: preferences.adult,
    children: preferences.child,
    tripDays: preferences.tripDays,
    tripStage: preferences.tripStage
  };
};

exports.getRequestPreferences = getRequestPreferences;

const getContactPreferences = preferences => {
  return {
    email: preferences.tripEmail,
    phoneNo: preferences.primaryPhoneNo.phoneNo,
    isdCode: preferences.primaryPhoneNo.isd
  };
};

exports.getContactPreferences = getContactPreferences;

/***/ }),

/***/ "./app-v2/modules/preferences/index.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/preferences/index.js ***!
  \*********************************************/
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

var _Preferences = _interopRequireDefault(__webpack_require__(/*! ./Preferences */ "./app-v2/modules/preferences/Preferences.js"));

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/preferences/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  currentTripId: state.trip.currentTrip.data.id,
  preferences: state.trip.preferences.preferenceOptions,
  updated: state.trip.preferences.updated,
  errors: state.trip.preferences.errors
}), {
  push: _reactRouterRedux.push,
  goBack: _reactRouterRedux.goBack,
  updatePreferences: _action.updatePreferences
})(_Preferences.default));
/**
 * Preference Section
 */

var _default = {
  container,
  actions: {
    updatePreferences: _action.updatePreferences
  }
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/reducer/index.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/preferences/reducer/index.js ***!
  \*****************************************************/
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

var _index = _interopRequireDefault(__webpack_require__(/*! modules/trip/reducers/index */ "./app-v2/modules/trip/reducers/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app-v2/modules/preferences/view/ContactDetails.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/preferences/view/ContactDetails.js ***!
  \***********************************************************/
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

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/preferences/view/G.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _ContactDetails = _interopRequireDefault(__webpack_require__(/*! ../edit/ContactDetails */ "./app-v2/modules/preferences/edit/ContactDetails.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _EditPreferencesPopup = _interopRequireDefault(__webpack_require__(/*! ../components/EditPreferencesPopup */ "./app-v2/modules/preferences/components/EditPreferencesPopup.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ContactDetails = class ContactDetails extends _react.default.Component {
  constructor(props) {
    super(props);

    this.updateContactInfo = values => {
      const params = {
        isd_code: values.isdCode,
        requested_trip: {
          email: values.email,
          phone_no: values.phoneNo
        }
      };
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Contact details', '', 'Confirm');
      this.props.handleSubmit(this.props.currentTripId, params);
    };

    this.trackSegmentEvent = (event, section, object, cta) => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment(event, section, object, cta);
      });
    };

    this.handleClick = () => {
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Edit preferences window', 'contact', 'edit');
      this.setState({
        closeModal: false
      });
    };

    this.afterModalClose = () => {
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Contact details', '', 'Cancel');
    };

    this.closeModal = () => {
      this.setState({
        closeModal: true
      });
    };

    this.state = {
      closeModal: false
    };
  }

  shouldComponentUpdate(nextProps) {
    if (!this.props.updated && nextProps.updated) {
      this.closeModal();
    }

    return true;
  }

  render() {
    const {
      preferences,
      isConvertedTrip,
      isCancelledTrip,
      opDetails
    } = this.props;
    return _react.default.createElement("div", {
      className: "sbcw p15 pb0 at_contactDetails"
    }, _react.default.createElement("div", {
      className: "flex alignCenter spaceBetween mb15"
    }, _react.default.createElement("h6", {
      className: "flex alignCenter f16 fw9 m0 flexFull"
    }, _react.default.createElement("span", {
      className: "block input-24 mr8"
    }, _react.default.createElement(_Icon.ContactIcon, null)), _react.default.createElement("span", {
      className: "sfc6 at_headingContectDetail"
    }, "Contact Details")), !isConvertedTrip || isCancelledTrip ? _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("span", {
        className: "sfc1 f14 fw7 at_edit1",
        onClick: () => this.handleClick()
      }, "Edit"),
      fullView: true,
      hasCustomClose: true,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.afterModalClose
    }, _react.default.createElement(_ContactDetails.default, {
      initialValues: preferences,
      onSubmit: this.updateContactInfo
    })) : _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("span", {
        className: "sfc1 f14 fw7 at_edit1"
      }, "Edit")
    }, _react.default.createElement(_EditPreferencesPopup.default, {
      opDetails: opDetails,
      closeModal: this.closeModal
    }))), _react.default.createElement("div", {
      className: "flex flexWrap"
    }, _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Email ID"), _react.default.createElement("p", {
      className: "at_email"
    }, preferences.email)), _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Phone Number"), _react.default.createElement("p", {
      className: "at_phone"
    }, preferences.phoneNo ? `${preferences.isdCode}${preferences.phoneNo}` : '-'))));
  }

};
ContactDetails.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  preferences: _propTypes.default.object,
  opDetails: _propTypes.default.object,
  isConvertedTrip: _propTypes.default.bool,
  isCancelledTrip: _propTypes.default.bool,
  updated: _propTypes.default.bool,
  errors: _propTypes.default.array,
  handleSubmit: _propTypes.default.func,
  trackSegment: _propTypes.default.func
};
ContactDetails.defaultProps = {
  trackSegment: () => {}
};
var _default = ContactDetails;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/view/G.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/preferences/view/G.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GPreferenceDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _glamor = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GPreferenceDiv = _glamorous.default.div({
  minWidth: '50%',
  maxWidth: '50%',
  ':nth-child(odd)': {
    paddingRight: '12px'
  },
  ':nth-child(even)': {
    paddingLeft: '12px'
  },
  '& p': {
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0'
  },
  '& p:first-child': {
    color: '#b2b2b2'
  },
  '& p:last-child': {
    color: '#3E3E3E'
  }
});

exports.GPreferenceDiv = GPreferenceDiv;

/***/ }),

/***/ "./app-v2/modules/preferences/view/Request.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/preferences/view/Request.js ***!
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

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/preferences/constants.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/preferences/view/G.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _Request = _interopRequireDefault(__webpack_require__(/*! ../edit/Request */ "./app-v2/modules/preferences/edit/Request.js"));

var _EditPreferencesPopup = _interopRequireDefault(__webpack_require__(/*! ../components/EditPreferencesPopup */ "./app-v2/modules/preferences/components/EditPreferencesPopup.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Request = class Request extends _react.default.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, section, object, cta) => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment(event, section, object, cta);
      });
    };

    this.updateRequestPreference = values => {
      const params = {
        requested_trip: {
          to_loc: values.destination,
          from_loc: values.departureCity,
          start_date: values.departureDate,
          trip_days: values.tripDays,
          adult: values.adults,
          child: values.children,
          trip_stage: values.tripStage
        }
      };
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'request', '', 'Confirm');
      this.props.handleSubmit(this.props.currentTripId, params);
    };

    this.closeModal = () => {
      this.setState({
        closeModal: true
      });
    };

    this.handleClick = () => {
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Edit preferences window', 'request', 'edit');
      this.setState({
        closeModal: false
      });
    };

    this.afterModalClose = () => {
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'request', '', 'Cancel');
    };

    this.state = {
      closeModal: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.updated && nextProps.updated) {
      this.closeModal();
    }
  }

  render() {
    const {
      preferences,
      isConvertedTrip,
      isCancelledTrip,
      opDetails,
      errors
    } = this.props;

    const tripStage = _constants.TRIP_STAGES.options.find(option => option.id === preferences.tripStage);

    return _react.default.createElement("div", {
      className: "sbcw p15 pb0 at_request"
    }, _react.default.createElement("div", {
      className: "flex alignCenter spaceBetween mb15"
    }, _react.default.createElement("h6", {
      className: "flex alignCenter f16 fw9 m0 flexFull"
    }, _react.default.createElement("span", {
      className: "block input-24 mr8"
    }, _react.default.createElement(_Icon.RequestIcon, null)), _react.default.createElement("span", {
      className: "sfc6 at_headingRequest"
    }, "Request")), !isConvertedTrip || isCancelledTrip ? _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("span", {
        className: "sfc1 f14 fw7 at_edit2",
        onClick: this.handleClick
      }, "Edit"),
      fullView: true,
      hasCustomClose: true,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.afterModalClose
    }, _react.default.createElement(_Request.default, {
      initialValues: preferences,
      errors: errors,
      onSubmit: this.updateRequestPreference
    })) : _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("span", {
        className: "sfc1 f14 fw7 at_edit2"
      }, "Edit")
    }, _react.default.createElement(_EditPreferencesPopup.default, {
      opDetails: opDetails,
      closeModal: this.closeModal
    }))), _react.default.createElement("div", {
      className: "flex flexWrap"
    }, _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Destination"), _react.default.createElement("p", {
      className: "at_destination"
    }, preferences.destination)), _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Departure City"), _react.default.createElement("p", {
      className: "at_departureCity"
    }, preferences.departureCity)), _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Departure Date"), _react.default.createElement("p", {
      className: "at_departureDate"
    }, preferences.departureDate && (0, _DateTime.format)(preferences.departureDate, 'DD MMM YYYY'))), _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Duration"), _react.default.createElement("p", {
      className: "at_duration"
    }, `${preferences.days} Days & ${preferences.nights} Nights`)), _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Travelers"), _react.default.createElement("p", {
      className: "at_travelers"
    }, `${preferences.adults} Adults & ${preferences.children} Children`)), _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word"
    }, _react.default.createElement("p", null, "Trip Planning Stage"), _react.default.createElement("p", {
      className: "at_tripStage"
    }, tripStage && tripStage.name || '-'))));
  }

};
Request.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  preferences: _propTypes.default.object,
  opDetails: _propTypes.default.object,
  isConvertedTrip: _propTypes.default.bool,
  isCancelledTrip: _propTypes.default.bool,
  updated: _propTypes.default.bool,
  errors: _propTypes.default.array,
  handleSubmit: _propTypes.default.func,
  trackSegment: _propTypes.default.func
};
Request.defaultProps = {
  isConvertedTrip: false
};
var _default = Request;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/preferences/view/TripPreferences.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/preferences/view/TripPreferences.js ***!
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

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/preferences/view/G.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _TripPreferences = _interopRequireDefault(__webpack_require__(/*! ../edit/TripPreferences */ "./app-v2/modules/preferences/edit/TripPreferences.js"));

var _constants = __webpack_require__(/*! ../constants */ "./app-v2/modules/preferences/constants.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./app-v2/modules/preferences/helpers.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _EditPreferencesPopup = _interopRequireDefault(__webpack_require__(/*! ../components/EditPreferencesPopup */ "./app-v2/modules/preferences/components/EditPreferencesPopup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getMultiValueCustomization = (values, selectedOptions) => {
  const customizationAttrs = [];

  for (const customizationId in values.multiValueOptions) {
    const options = values.multiValueOptions[customizationId].optionId;

    for (const optionId in options) {
      const attrs = {
        id: selectedOptions[optionId],
        customization_id: customizationId,
        option_id: optionId
      };

      if (options[optionId]) {
        customizationAttrs.push(attrs);
      } else if (selectedOptions[optionId]) {
        attrs._destroy = true;
        customizationAttrs.push(attrs);
      }
    }
  }

  return customizationAttrs;
};

const getSingleValueCustomization = (values, selectedOptions, customizations) => {
  const customizationAttrs = [];

  for (const customizationId in values.singleValueOptions) {
    let optionId = values.singleValueOptions[customizationId].optionId;
    const prevOption = customizations.find(e => e.id.toString() === customizationId).options.find(e => selectedOptions[e.id]);
    const prevOptionId = prevOption && selectedOptions[prevOption.id] || selectedOptions[optionId];
    let user_input = '';

    if (customizationId === _constants.CabCustomizationDetail.questions.id.toString() && values.driverSpeaks) {
      user_input = values.driverSpeaks;
      optionId = _constants.CabCustomizationDetail.domesticDestinationOptionId;
    }

    customizationAttrs.push({
      id: prevOptionId,
      customization_id: customizationId,
      option_id: optionId,
      user_input
    });
  }

  return customizationAttrs;
};

const getHotelCustomization = (values, selectedOptions) => {
  const customizationAttrs = [];
  let anyHotelStarSelected = false;
  let hotelNotRequired = false;

  for (const hotelIdKey in values.hotelCategories) {
    const hotelId = parseInt(hotelIdKey, 10);
    const hotelStarSelected = values.hotelCategories[hotelIdKey];

    if (hotelId === _constants.HotelRequiredIds.NOT_REQUIRED) {
      hotelNotRequired = hotelStarSelected;
      continue;
    }

    const selected = selectedOptions[hotelId];
    const attrs = {
      id: selected,
      option_id: hotelId,
      customization_id: _constants.HotelCustomizationDetail.category.id
    };

    if (hotelStarSelected) {
      anyHotelStarSelected = true;
      customizationAttrs.push(attrs);
    } else if (selected) {
      attrs._destroy = true;
      customizationAttrs.push(attrs);
    }
  }

  if (hotelNotRequired) {
    const selected = selectedOptions[_constants.HotelRequiredIds.REQUIRED];

    if (selected) {
      customizationAttrs.push({
        id: selectedOptions[_constants.HotelRequiredIds.REQUIRED],
        customization_id: _constants.HotelCustomizationDetail.required.id,
        option_id: _constants.HotelRequiredIds.REQUIRED,
        _destroy: true
      });
    }

    customizationAttrs.push({
      id: selectedOptions[_constants.HotelRequiredIds.NOT_REQUIRED],
      customization_id: _constants.HotelCustomizationDetail.required.id,
      option_id: _constants.HotelRequiredIds.NOT_REQUIRED
    });
  } else if (anyHotelStarSelected) {
    const selected = selectedOptions[_constants.HotelRequiredIds.NOT_REQUIRED];

    if (selected) {
      customizationAttrs.push({
        id: selectedOptions[_constants.HotelRequiredIds.NOT_REQUIRED],
        customization_id: _constants.HotelCustomizationDetail.required.id,
        option_id: _constants.HotelRequiredIds.NOT_REQUIRED,
        _destroy: true
      });
    }

    customizationAttrs.push({
      id: selectedOptions[_constants.HotelRequiredIds.REQUIRED],
      customization_id: _constants.HotelCustomizationDetail.required.id,
      option_id: _constants.HotelRequiredIds.REQUIRED
    });
  }

  return customizationAttrs;
};

let TripPreferences = class TripPreferences extends _react.default.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, section, object, cta) => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment(event, section, object, cta);
      });
    };

    this.updateTripPreference = values => {
      let customizationAttrs = [];
      const {
        preferencesData: {
          customizations,
          eligibleAnswers: selectedAnswers
        }
      } = this.props.preferences;
      const selectedOptions = (0, _helpers.getEligibleAnswersObj)(selectedAnswers);
      const hotelCustomization = getHotelCustomization(values, selectedOptions);
      const singleValueCustomization = getSingleValueCustomization(values, selectedOptions, customizations);
      const multiValueCustomization = getMultiValueCustomization(values, selectedOptions);
      customizationAttrs = [...customizationAttrs, ...hotelCustomization, ...singleValueCustomization, ...multiValueCustomization];
      const flightAnswerAttributes = {
        customization_id: values.flightAnswerAttributes.customizationId,
        id: values.flightAnswerAttributes.id,
        option_id: values.flightAnswerAttributes.optionId
      };
      const params = {
        requested_trip: {
          info: values.info,
          budget: values.budget,
          flight_answer_attributes: flightAnswerAttributes,
          other_answers_attributes: customizationAttrs
        }
      };
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'preferences', '', 'Confirm');
      this.props.handleSubmit(this.props.currentTripId, params);
    };

    this.handleClick = () => {
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Edit preferences window', 'preferences', 'edit');
      this.setState({
        closeModal: false
      });
    };

    this.afterModalClose = () => {
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'preferences', '', 'Cancel');
    };

    this.closeModal = () => {
      this.setState({
        closeModal: true
      });
    };

    this.state = {
      closeModal: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.updated && nextProps.updated) {
      this.closeModal();
    }
  }

  render() {
    const {
      initialFormData,
      preferences,
      isConvertedTrip,
      isCancelledTrip
    } = this.props;
    const tripPreferences = (0, _helpers.getTripPreferences)(preferences);
    return _react.default.createElement("div", {
      className: "sbcw p15 pb0 at_tripPreferences"
    }, _react.default.createElement("div", {
      className: "flex alignCenter spaceBetween mb15"
    }, _react.default.createElement("h6", {
      className: "flex alignCenter f16 fw9 m0 flexFull"
    }, _react.default.createElement("span", {
      className: "block input-24 mr8"
    }, _react.default.createElement(_Icon.PreferencesIcon, null)), _react.default.createElement("span", {
      className: "sfc6 at_headingPreferences"
    }, "Preferences")), !isConvertedTrip || isCancelledTrip ? _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("span", {
        className: "sfc1 f14 fw7 at_edit3",
        onClick: () => this.handleClick()
      }, "Edit"),
      fullView: true,
      hasCustomClose: true,
      onRequestCloseCustom: this.afterModalClose,
      customCloseTrigger: this.state.closeModal
    }, _react.default.createElement(_TripPreferences.default, {
      initialValues: initialFormData,
      onSubmit: this.updateTripPreference,
      preferences: preferences
    })) : _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("span", {
        className: "sfc1 f14 fw7 at_edit3"
      }, "Edit"),
      customCloseTrigger: this.state.closeModal
    }, _react.default.createElement(_EditPreferencesPopup.default, {
      opDetails: preferences.opDetails,
      closeModal: this.closeModal
    }))), _react.default.createElement("div", {
      className: "flex flexWrap"
    }, tripPreferences.map((preference, index) => _react.default.createElement(_G.GPreferenceDiv, {
      className: "flexFull mb15 break-word",
      key: index
    }, _react.default.createElement("p", null, preference.label), _react.default.createElement("p", {
      className: `at_preferenceValue${index}`
    }, (0, _parsers.capitalizeFirstLetter)(preference.value))))));
  }

};
TripPreferences.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  initialFormData: _propTypes.default.object,
  preferences: _propTypes.default.object,
  isConvertedTrip: _propTypes.default.bool,
  isCancelledTrip: _propTypes.default.bool,
  updated: _propTypes.default.bool,
  errors: _propTypes.default.array,
  handleSubmit: _propTypes.default.func,
  trackSegment: _propTypes.default.func
};
TripPreferences.defaultProps = {};
var _default = TripPreferences;
exports.default = _default;

/***/ }),

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

/***/ "./app-v2/screens/preferences/Layout.js":
/*!**********************************************!*\
  !*** ./app-v2/screens/preferences/Layout.js ***!
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

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _preferences = _interopRequireDefault(__webpack_require__(/*! modules/preferences */ "./app-v2/modules/preferences/index.js"));

var _roster = _interopRequireDefault(__webpack_require__(/*! modules/roster */ "./app-v2/modules/roster/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Layout = class Layout extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (data = {}) => {
      /*const { tripId, currentQuote, currentQuoteId } = this.props;
       if (!currentQuote) {
        return;
      }
       trackSegment({
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
      });*/
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
    const PreferencesContainer = _preferences.default.container;
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
    }, _react.default.createElement(PreferencesContainer, {
      trackSegment: data => this.trackSegmentEvent(data)
    }))))));
  }

};
Layout.propTypes = {};
var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/preferences/PreferencesAsync.js":
/*!********************************************************!*\
  !*** ./app-v2/screens/preferences/PreferencesAsync.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preferenceReducers = exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./app-v2/screens/preferences/Layout.js"));

var preferenceReducers = _interopRequireWildcard(__webpack_require__(/*! modules/preferences/reducer/index */ "./app-v2/modules/preferences/reducer/index.js"));

exports.preferenceReducers = preferenceReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PreferencesAsync = class PreferencesAsync extends _react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement(_Layout.default, this.props);
  }

};
exports.default = PreferencesAsync;
PreferencesAsync.propTypes = {};

/***/ }),

/***/ "./app/components/DatePicker/DatePicker.scss":
/*!***************************************************!*\
  !*** ./app/components/DatePicker/DatePicker.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9QcmVmZXJlbmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9jb21wb25lbnRzL0RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9jb21wb25lbnRzL0VkaXRQcmVmZXJlbmNlc1BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3ByZWZlcmVuY2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3ByZWZlcmVuY2VzL2NvbXBvbmVudHMvSG90ZWxTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9jb21wb25lbnRzL051bWJlckZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9jb21wb25lbnRzL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3ByZWZlcmVuY2VzL2NvbXBvbmVudHMvVGV4dEJveC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvZWRpdC9Db250YWN0RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9lZGl0L0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy9lZGl0L1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvZWRpdC9UcmlwUHJlZmVyZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvZmllbGRzL0J1ZGdldEZpZWxkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3ByZWZlcmVuY2VzL2ZpZWxkcy9DYWJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvZmllbGRzL0ZsaWdodEJvb2tpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvZmllbGRzL1NpbmdsZVZhbHVlZEZpZWxkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3ByZWZlcmVuY2VzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy92aWV3L0NvbnRhY3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3ByZWZlcmVuY2VzL3ZpZXcvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wcmVmZXJlbmNlcy92aWV3L1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcHJlZmVyZW5jZXMvdmlldy9UcmlwUHJlZmVyZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcm9zdGVyL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcm9zdGVyL1Jvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yb3N0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvcHJlZmVyZW5jZXMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3ByZWZlcmVuY2VzL1ByZWZlcmVuY2VzQXN5bmMuanMiXSwibmFtZXMiOlsiUHJlZmVyZW5jZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0cmFja3NlZ21lbnRFdmVudCIsImV2ZW50Iiwic2VjdGlvbiIsIm9iamVjdCIsImN0YSIsInJlbmRlciIsInByZWZlcmVuY2VzIiwiY3VycmVudFRyaXBJZCIsInVwZGF0ZWQiLCJlcnJvcnMiLCJ1cGRhdGVQcmVmZXJlbmNlcyIsImxvY2F0aW9uIiwicHVzaCIsImdvQmFjayIsInJlcXVlc3RQcmVmZXJlbmNlcyIsInRyaXBQcmVmSW5pdGlhbEZvcm1EYXRhIiwiY29udGFjdFByZWZlcmVuY2VzIiwiaXNDb252ZXJ0ZWRUcmlwIiwic3RhdHVzIiwiaXNDYW5jZWxsZWRUcmlwIiwidG9Mb3dlckNhc2UiLCJUUklQX1NUQVRVUyIsIkNBTkNFTExFRCIsIm9wRGV0YWlscyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm51bWJlciIsInN0cmluZyIsImJvb2wiLCJhcnJheSIsInRyYWNrU2VnbWVudEV2ZW50IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJEYXRlUGlja2VyIiwiaW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiY2FsZW5kYXJDbGFzc05hbWUiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwicHJldmVudE92ZXJmbG93IiwiZW5hYmxlZCIsImVzY2FwZVdpdGhSZWZlcmVuY2UiLCJib3VuZGFyaWVzRWxlbWVudCIsInZhbHVlIiwiRGF0ZSIsImUiLCJ0YXJnZXQiLCJyZWFkT25seSIsImEiLCJzdG9wUHJvcGFnYXRpb24iLCJEcm9wZG93biIsImRpc2FibGVkIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9ucyIsIm9uQmx1ciIsIm1hcCIsIm9wdGlvbiIsImFueSIsIkVkaXRQcmVmZXJlbmNlc1BvcHVwIiwiY2xvc2VNb2RhbCIsImVkaXRQcmVmZXJlbmNlTXNnIiwicGhvbmVObyIsIm5hbWUiLCJIZWFkZXIiLCJnb0JhY2tIYW5kbGVyIiwicmxwUGF0aCIsImFjdGlvbiIsInB1c2hTdGF0ZSIsIkhvdGVsU2VsZWN0b3IiLCJvbkNsaWNrIiwiaWQiLCJIb3RlbFJlcXVpcmVkSWRzIiwiTk9UX1JFUVVJUkVEIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJvbkNoYW5nZSIsIk51bWJlckZvcm1hdHRlciIsInVwZGF0ZURheXNUZXh0IiwicGFyc2VJbnQiLCJzdGFydFZhbHVlIiwidXBkYXRlRGF5cyIsIm5ld1ZhbHVlIiwidGVtcFZhbHVlIiwiY3VycmVudFZhbHVlIiwiaXNOYU4iLCJiaW5kIiwiY2xhc3NOYW1lIiwiUmFkaW9CdXR0b24iLCJoYW5kbGVDaGFuZ2UiLCJUZXh0Qm94IiwiSG90ZWxDdXN0b21pemF0aW9uRGV0YWlsIiwicmVxdWlyZWQiLCJjYXRlZ29yeSIsIkZsaWdodEN1c3RvbWl6YXRpb25EZXRhaWwiLCJDYWJDdXN0b21pemF0aW9uRGV0YWlsIiwicXVlc3Rpb25zIiwiZG9tZXN0aWNEZXN0aW5hdGlvbk9wdGlvbklkIiwiTG9jYWxBdHRyYWN0aW9uQ3VzdG9taXphdGlvbkRldGFpbCIsIkJvb2tUaW1lQ3VzdG9taXphdGlvbkRldGFpbCIsIkNoaWxkQ3VzdG9taXphdGlvbkRldGFpbCIsInJlcXVlc3REZXRhaWxzVGl0bGVLZXlNYXAiLCJmcm9tX2xvYyIsInRvX2xvYyIsInN0YXJ0X2RhdGUiLCJkdXJhdGlvbiIsInRyYXZlbGVycyIsImNvbnRhY3REZXRhaWxzVGl0bGVLZXlNYXAiLCJlbWFpbCIsInBob25lX25vIiwicHJlZmVyZW5jZXNEZXRhaWxzVGl0bGVLZXlNYXAiLCJob3RlbHMiLCJmbGlnaHRzIiwiYnVkZ2V0IiwiY2FicyIsIkFkZFByZWZzIiwiY3VzdG9taXphdGlvblR5cGVzIiwiUElDS0VSIiwiTVVMVElfQlVUVE9OUyIsIlJFUVVJUkVEIiwiaGFuZGxlZEN1c3RvbWl6YXRpb25zIiwiY2l0aWVzIiwiYm9vbGVhbl9oZWFkaW5ncyIsImF0dHJhY3Rpb25zIiwib3RoZXIiLCJpdGluZXJhcnkiLCJGaXhlZEN1c3RvbWl6YXRpb24iLCJGbGlnaHRDdXN0b21pemF0aW9uIiwiSG90ZWxDdXN0b21pemF0aW9uUmVxIiwiSG90ZWxDdXN0b21pemF0aW9uQ2F0ZWdvcmllcyIsIkNhYk9wdGlvbnMiLCJGaXhlZEN1c3RvbWl6YXRpb25JZHMiLCJUUklQX1NUQUdFUyIsIkNvbnRhY3REZXRhaWxzIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0dGluZyIsIlBSRUZFUkVOQ0VfSVNEX0NPREVTIiwiSVNEX0NPREVTIiwicGhvbmVOdW1iZXIiLCJmb3JtIiwidGV4dCIsIlJlcXVlc3QiLCJsZW5ndGgiLCJjb2xvciIsIlRyaXBQcmVmZXJlbmNlcyIsImZsaWdodEFuc3dlclZhbHVlIiwiaG90ZWxTdGFyc1ZhbHVlcyIsInNpbmdsZU9wdGlvblZhbHVlcyIsIm5vSG90ZWxWYWx1ZSIsImdldE90aGVyUHJlZmVyZW5jZXMiLCJvdGhlck9wdGlvbnMiLCJsaW1pdCIsIm9mZnNldCIsIm90aGVyRmllbGRzIiwiaSIsInByZWZlcmVuY2VzRGF0YSIsImhvdGVsUHJlZmVyZW5jZSIsImhvdGVsQ2F0ZWdvcnlDdXN0b21pemF0aW9ucyIsImZsaWdodFByZWZlcmVuY2UiLCJjdXN0b21pemF0aW9ucyIsImZpbmQiLCJmbGlnaHRCdWRnZXQiLCJob3RlbEJ1ZGdldCIsImhvdGVsQnVkZ2V0cyIsImNhYlJlcXVpcmVkUHJlZmVyZW5jZSIsIkNhYkN1c3RvbWl6YXRpb25zIiwiY2FiUXVlc3Rpb25zUHJlZmVyZW5jZSIsImRlc3RpbmF0aW9uc0xpc3QiLCJvdGhlclByZWZlcmVuY2VPcHRpb25zIiwiVHJpcFByZWZlcmVuY2VzRm9ybSIsInNlbGVjdG9yIiwiVHJpcFByZWZlcmVuY2VzQ29ubmVjdGVkRm9ybSIsInN0YXRlIiwicmVuZGVyQnVkZ2V0VGV4dEZpZWxkIiwiaXNGbGlnaHRTZWxlY3RlZCIsImJ1ZGdldEVycm9yIiwidW5kZWZpbmVkIiwiZ2V0QnVkZ2V0T3B0aW9uRmllbGRzIiwiYnVkZ2V0T3B0aW9ucyIsImZsaWdodFNlbGVjdGVkIiwiYnVkZ2V0RmllbGRzIiwiYnVkZ2V0T3B0aW9uIiwibWluX3ByaWNlIiwibWF4X3ByaWNlIiwiQnVkZ2V0RmllbGQiLCJnZXRCdWRnZXRPcHRpb25zIiwiaWRUb1N0YXIiLCJmbGlnaHRPcHRpb24iLCJob3RlbFN0YXJzT3B0aW9ucyIsImZsaWdodFByaWNlIiwic2VsZWN0ZWRIb3RlbE9wdGlvbnMiLCJob3RlbE9wdGlvbiIsImN1c3RvbWl6YXRpb25JZCIsIm9wdGlvbklkIiwiTWF0aCIsIm1pbiIsIm1heFByaWNlIiwibWluUHJpY2UiLCJHQ2FiUmFkaW9EaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJDYWJGaWVsZHMiLCJkZXN0aW5hdGlvblR5cGUiLCJjYWJZZXNPcHRpb24iLCJjYWJTZWxlY3RlZE9wdGlvbiIsImdldENhYk9wdGlvbnMiLCJwcmVmZXJuY2UiLCJzZWxlY3RlZE9wdGlvbnMiLCJpbnB1dENsYXNzIiwiZWxlbWVudElkIiwidG9TdHJpbmciLCJnZXRDYWJEb21lc3RpY09wdGlvbnMiLCJnZXRDYWJOZXN0ZWRRdWVzdGlvbiIsImZpbHRlciIsInRpdGxlIiwib3B0IiwiR0ZsaWdodFJhZGlvRGl2IiwiZGlzcGxheSIsImZvbnRXZWlnaHQiLCJyZW5kZXJGbGlnaHRPcHRpb24iLCJyZW5kZXJGbGlnaHRPcHRpb25zIiwiZmxpZ2h0T3B0aW9ucyIsIkZsaWdodEJvb2tpbmciLCJnZXRSYWRpb0NvbXBvbmVudCIsInByZWZlcmVuY2VJZCIsImdldENoZWNrYm94Q29tcG9uZW50IiwiZ2V0T3B0aW9ucyIsInByZWZlcmVuY2UiLCJ2YWx1ZVR5cGUiLCJTaW5nbGVWYWx1ZWRGaWVsZCIsImdldEZsaWdodEFuc3dlckF0dHIiLCJzZWxlY3RlZEFuc3dlcnMiLCJmbGlnaHRBdHRycyIsImZsaWdodFNlbGVjdGVkQW5zIiwiZWwiLCJpbmRleE9mIiwiZ2V0U2VsZWN0ZWRIb3RlbElkcyIsInNlbGVjdGVkSG90ZWxJZHMiLCJob3RlbENhdGVnb3J5T3B0aW9uIiwiSG90ZWxDdXN0b21pemF0aW9uIiwiaG90ZWxPcHRpb25zIiwiaXNIb3RlbFJlcXVpcmVkIiwiaG90ZWxSZXF1aXJlZE9wdGlvbiIsImhvdGVsUmVxdWlyZWRTZWxlY3RlZE9wdGlvbiIsImdldERyaXZlckxhbmd1YWdlIiwic2luZ2xlVmFsdWVPcHRpb25zIiwiZHJpdmVyU3BlYWtzIiwiZ2V0Q2FiUXVlc3Rpb25zUHJlZmVyZW5jZSIsInNlbGVjdGVkT3B0aW9uMSIsInVzZXJJbnB1dCIsImdldE90aGVyUHJlZmVyZW5jZXNPcHRpb25zIiwicHJlZmVyZW5jZURhdGEiLCJjdXN0b21pemF0aW9uIiwic29ydCIsImIiLCJzZXF1ZW5jZSIsImdldEVsaWdpYmxlQW5zd2Vyc09iaiIsImVsaWdpYmxlQW5zd2VycyIsImFuc3dlcnNPYmoiLCJnZXRUcmlwUHJlZkluaXRpYWxGb3JtRGF0YSIsIm11bHRpVmFsdWVPcHRpb25zIiwic2VsZWN0ZWRPcHRpb24iLCJnZXRDYWJSZXF1aXJlZFByZWZlcmVuY2UiLCJpbmZvIiwiZmxpZ2h0QW5zd2VyQXR0cmlidXRlcyIsImhvdGVsQ2F0ZWdvcmllcyIsIm90aGVyUHJlZmVyZW5jZXMiLCJnZXRMYWJlbCIsImdldFNlbGVjdGVkT3B0aW9ucyIsInNlbGVjdGVkIiwiZ2V0RmllbGRPYmplY3QiLCJnZXRUcmlwUHJlZmVyZW5jZXMiLCJvdGhlclByZWZGaWVsZHMiLCJqb2luIiwiZXhjbHVzaXZlUHJlZmVyZW5jZXNWYWx1ZXMiLCJnZXRSZXF1ZXN0UHJlZmVyZW5jZXMiLCJkZXN0aW5hdGlvbiIsInRvTG9jIiwiZGVwYXJ0dXJlQ2l0eSIsImZyb21Mb2MiLCJkZXBhcnR1cmVEYXRlIiwic3RhcnREYXRlIiwiZGF5cyIsIm5pZ2h0cyIsImFkdWx0cyIsImFkdWx0IiwiY2hpbGRyZW4iLCJjaGlsZCIsInRyaXBEYXlzIiwidHJpcFN0YWdlIiwiZ2V0Q29udGFjdFByZWZlcmVuY2VzIiwidHJpcEVtYWlsIiwicHJpbWFyeVBob25lTm8iLCJpc2RDb2RlIiwiaXNkIiwiY29udGFpbmVyIiwidHJpcCIsImN1cnJlbnRUcmlwIiwiZGF0YSIsInByZWZlcmVuY2VPcHRpb25zIiwiYWN0aW9ucyIsInVwZGF0ZUNvbnRhY3RJbmZvIiwidmFsdWVzIiwicGFyYW1zIiwiaXNkX2NvZGUiLCJyZXF1ZXN0ZWRfdHJpcCIsIk9SR0FOSVNNX0NMSUNLRUQiLCJ0cmFja1NlZ21lbnQiLCJoYW5kbGVDbGljayIsInNldFN0YXRlIiwiYWZ0ZXJNb2RhbENsb3NlIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwiR1ByZWZlcmVuY2VEaXYiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJ1cGRhdGVSZXF1ZXN0UHJlZmVyZW5jZSIsInRyaXBfZGF5cyIsInRyaXBfc3RhZ2UiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImdldE11bHRpVmFsdWVDdXN0b21pemF0aW9uIiwiY3VzdG9taXphdGlvbkF0dHJzIiwiYXR0cnMiLCJjdXN0b21pemF0aW9uX2lkIiwib3B0aW9uX2lkIiwiX2Rlc3Ryb3kiLCJnZXRTaW5nbGVWYWx1ZUN1c3RvbWl6YXRpb24iLCJwcmV2T3B0aW9uIiwicHJldk9wdGlvbklkIiwidXNlcl9pbnB1dCIsImdldEhvdGVsQ3VzdG9taXphdGlvbiIsImFueUhvdGVsU3RhclNlbGVjdGVkIiwiaG90ZWxOb3RSZXF1aXJlZCIsImhvdGVsSWRLZXkiLCJob3RlbElkIiwiaG90ZWxTdGFyU2VsZWN0ZWQiLCJ1cGRhdGVUcmlwUHJlZmVyZW5jZSIsImhvdGVsQ3VzdG9taXphdGlvbiIsInNpbmdsZVZhbHVlQ3VzdG9taXphdGlvbiIsIm11bHRpVmFsdWVDdXN0b21pemF0aW9uIiwiZmxpZ2h0X2Fuc3dlcl9hdHRyaWJ1dGVzIiwib3RoZXJfYW5zd2Vyc19hdHRyaWJ1dGVzIiwiaW5pdGlhbEZvcm1EYXRhIiwidHJpcFByZWZlcmVuY2VzIiwiaW5kZXgiLCJHUm9zdGVyRGl2Iiwid2lkdGgiLCJsZWZ0IiwidG9wIiwiekluZGV4IiwicG9zaXRpb24iLCJoZWlnaHQiLCJyaWdodCIsImN1cnNvciIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwidHJhbnNmb3JtIiwicGFkZGluZyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiUm9zdGVyIiwiaXNSb3N0ZXJPcGVuIiwiY2xvc2VSb3N0ZXIiLCJjb21wb25lbnREaWRNb3VudCIsInNob3dSb3N0ZXIiLCJ0aW1lb3V0IiwiYWxsb3dUaW1lT3V0Iiwic2V0VGltZW91dCIsImhpZGVSb3N0ZXIiLCJ0eXBlIiwibWVzc2FnZSIsInJvc3RlciIsIkxheW91dCIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiT1JHQU5JU01fVklFV0VEIiwiUHJlZmVyZW5jZXNDb250YWluZXIiLCJQcmVmZXJlbmNlc0FzeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxXLHFCQUFOLE1BQU1BLFdBQU4sU0FBMEJDLGVBQU1DLFNBQWhDLENBQTBDO0FBc0J4Q0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQixTQUluQkMsaUJBSm1CLEdBSUMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxNQUFqQixFQUF5QkMsR0FBekIsS0FBaUM7QUFDbkQseUJBQU8sTUFBTTtBQUNYLHlDQUFhO0FBQ1hILGlCQUFPQSxLQURJO0FBRVhFLGtCQUFRQSxVQUFVLEVBRlA7QUFHWEQsbUJBQVNBLFdBQVcsRUFIVDtBQUlYRSxlQUFLQSxPQUFPO0FBSkQsU0FBYjtBQU1ELE9BUEQ7QUFRRCxLQWJrQjtBQUVsQjs7QUFhREMsV0FBUztBQUNQ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RE0sV0FBUztBQUNQLFdBQ0UsNkJBQUMsZUFBRCxFQUFZLEtBQUtOLEtBQWpCLENBREY7QUFHRDs7QUFUcUQsQzs7QUFZeERxWSxpQkFBaUI1VyxTQUFqQixHQUE2QixFQUE3QixDIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgaXNUcmlwQ29udmVydGVkLCByZXNjdWUgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IFRSSVBfU1RBVFVTIH0gZnJvbSAnY29uc3RhbnRzL3RyaXBTdGF0dXMnO1xuaW1wb3J0IHtcbiAgZ2V0UmVxdWVzdFByZWZlcmVuY2VzLCBnZXRDb250YWN0UHJlZmVyZW5jZXMsIGdldFRyaXBQcmVmSW5pdGlhbEZvcm1EYXRhXG59IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi92aWV3L1JlcXVlc3QnO1xuaW1wb3J0IFRyaXBQcmVmZXJlbmNlcyBmcm9tICcuL3ZpZXcvVHJpcFByZWZlcmVuY2VzJztcbmltcG9ydCBDb250YWN0RGV0YWlscyBmcm9tICcuL3ZpZXcvQ29udGFjdERldGFpbHMnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY2xhc3MgUHJlZmVyZW5jZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3VycmVudFRyaXBJZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZ1xuICAgIF0pLFxuICAgIHVwZGF0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHByZWZlcmVuY2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB1cGRhdGVQcmVmZXJlbmNlczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcHVzaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnb0JhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZlcmVuY2VzOiB7fSxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICB0cmFja3NlZ21lbnRFdmVudCA9IChldmVudCwgc2VjdGlvbiwgb2JqZWN0LCBjdGEpID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBvYmplY3Q6IG9iamVjdCB8fCAnJyxcbiAgICAgICAgc2VjdGlvbjogc2VjdGlvbiB8fCAnJyxcbiAgICAgICAgY3RhOiBjdGEgfHwgJydcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByZWZlcmVuY2VzLCBjdXJyZW50VHJpcElkLCB1cGRhdGVkLCBlcnJvcnMsIHVwZGF0ZVByZWZlcmVuY2VzLCBsb2NhdGlvbiwgcHVzaCwgZ29CYWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlcXVlc3RQcmVmZXJlbmNlcyA9IGdldFJlcXVlc3RQcmVmZXJlbmNlcyhwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgdHJpcFByZWZJbml0aWFsRm9ybURhdGEgPSBnZXRUcmlwUHJlZkluaXRpYWxGb3JtRGF0YShwcmVmZXJlbmNlcyk7XG4gICAgY29uc3QgY29udGFjdFByZWZlcmVuY2VzID0gZ2V0Q29udGFjdFByZWZlcmVuY2VzKHByZWZlcmVuY2VzKTtcbiAgICBjb25zdCBpc0NvbnZlcnRlZFRyaXAgPSBpc1RyaXBDb252ZXJ0ZWQocHJlZmVyZW5jZXMuc3RhdHVzKTtcbiAgICBjb25zdCBpc0NhbmNlbGxlZFRyaXAgPSBwcmVmZXJlbmNlcy5zdGF0dXMudG9Mb3dlckNhc2UoKSA9PT0gVFJJUF9TVEFUVVMuQ0FOQ0VMTEVEO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgY3VycmVudFRyaXBJZD17Y3VycmVudFRyaXBJZH0gbG9jYXRpb249e2xvY2F0aW9ufSBwdXNoU3RhdGU9e3B1c2h9IGdvQmFjaz17Z29CYWNrfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWI4Jz48UmVxdWVzdCBwcmVmZXJlbmNlcz17cmVxdWVzdFByZWZlcmVuY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3VwZGF0ZVByZWZlcmVuY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnZlcnRlZFRyaXA9e2lzQ29udmVydGVkVHJpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRUcmlwPXtpc0NhbmNlbGxlZFRyaXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17dGhpcy50cmFja3NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BEZXRhaWxzPXtwcmVmZXJlbmNlcy5vcERldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmlwSWQ9e2N1cnJlbnRUcmlwSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ9e3VwZGF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfSAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWI4Jz48VHJpcFByZWZlcmVuY2VzIHByZWZlcmVuY2VzPXtwcmVmZXJlbmNlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRm9ybURhdGE9e3RyaXBQcmVmSW5pdGlhbEZvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29udmVydGVkVHJpcD17aXNDb252ZXJ0ZWRUcmlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17dGhpcy50cmFja3NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFRyaXA9e2lzQ2FuY2VsbGVkVHJpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3VwZGF0ZVByZWZlcmVuY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUcmlwSWQ9e2N1cnJlbnRUcmlwSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZD17dXBkYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc30gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iOCc+PENvbnRhY3REZXRhaWxzIHByZWZlcmVuY2VzPXtjb250YWN0UHJlZmVyZW5jZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFRyaXA9e2lzQ2FuY2VsbGVkVHJpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dXBkYXRlUHJlZmVyZW5jZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnZlcnRlZFRyaXA9e2lzQ29udmVydGVkVHJpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17dGhpcy50cmFja3NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wRGV0YWlscz17cHJlZmVyZW5jZXMub3BEZXRhaWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRyaXBJZD17Y3VycmVudFRyaXBJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ9e3VwZGF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc30gLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlZmVyZW5jZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XG5cbmltcG9ydCB7IENhbGVuZGFySWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0ICdjb21wb25lbnRzL0RhdGVQaWNrZXIvRGF0ZVBpY2tlci5zY3NzJztcblxuY29uc3QgRGF0ZVBpY2tlciA9ICh7IGlucHV0LCBsYWJlbCwgcGxhY2Vob2xkZXIsIGNhbGVuZGFyQ2xhc3NOYW1lLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGF0X2VkaXRkYXRlXCI+XG4gICAge1xuICAgICAgbGFiZWwgPyA8bGFiZWwgaHRtbEZvcj1cImRheXNcIiBjbGFzc05hbWU9XCJmMTQgZnc5IHBiNCBibG9jayBwZmMzXCI+e2xhYmVsfTwvbGFiZWw+IDogbnVsbFxuICAgIH1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdpdGgtaWNvbi1ib3hcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWljb25cIj48Q2FsZW5kYXJJY29uIC8+PC9zcGFuPlxuICAgICAgPFJlYWN0RGF0ZVBpY2tlclxuICAgICAgICBwb3BwZXJQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgICAgcG9wcGVyTW9kaWZpZXJzPXt7XG4gICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgZXNjYXBlV2l0aFJlZmVyZW5jZTogZmFsc2UsIC8vIGZvcmNlIHBvcHBlciB0byBzdGF5IGluIHZpZXdwb3J0IChldmVuIHdoZW4gaW5wdXQgaXMgc2Nyb2xsZWQgb3V0IG9mIHZpZXcpXG4gICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0J1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgY2FsZW5kYXJDbGFzc05hbWU9e2NhbGVuZGFyQ2xhc3NOYW1lfVxuICAgICAgICBkYXRlRm9ybWF0PVwiREQgTU1NIFlZWVlcIlxuICAgICAgICBwbGFjZWhvbGRlclRleHQ9e3BsYWNlaG9sZGVyfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHZhbHVlPXtpbnB1dC52YWx1ZSA/IGZvcm1hdChpbnB1dC52YWx1ZSwgJ0REIE1NTSBZWVlZJyk6IG51bGx9XG4gICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgIHNlbGVjdGVkPXtpbnB1dC52YWx1ZSA/IG5ldyBEYXRlKGlucHV0LnZhbHVlKSA6IG51bGx9XG4gICAgICAgIG9uRm9jdXM9eyhlKSA9PiBlLnRhcmdldC5yZWFkT25seSA9IHRydWV9XG4gICAgICAgIG9uU2VsZWN0PXsoYSwgZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgY2xhc3NOYW1lPXt0b3VjaGVkICYmIChlcnJvciAmJiAnaW5wdXQtZXJyb3InKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAge1xuICAgICAgdG91Y2hlZCAmJlxuICAgICAgKGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57ZXJyb3J9PC9zcGFuPilcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuRGF0ZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNhbGVuZGFyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2Vob2xkZXI6ICdEYXRlJyxcbiAgY2FsZW5kYXJDbGFzc05hbWU6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IERyb3Bkb3duID0gKHsgZGlzYWJsZWQsIGlucHV0LCBkZWZhdWx0VmFsdWUsIG9wdGlvbnMsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlbGVjdFxuICAgICAgey4uLmlucHV0fVxuICAgICAgb25CbHVyPXsoKSA9PiBpbnB1dC5vbkJsdXIoaW5wdXQudmFsdWUpfVxuICAgICAgY2xhc3NOYW1lPXtgJHsnc2VsZWN0J30gJHt0b3VjaGVkICYmIChlcnJvciAmJiAnaW5wdXQtZXJyb3InKX1gfVxuICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgPlxuICAgICAge1xuICAgICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbi52YWx1ZX0ga2V5PXtgaXNkXyR7b3B0aW9uLnZhbHVlfWB9PlxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L3NlbGVjdD5cbiAgICB7XG4gICAgICB0b3VjaGVkICYmXG4gICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgIH1cbiAgPC9kaXY+XG4pO1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRWRpdFByZWZlcmVuY2VzUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcERldGFpbHMsIGNsb3NlTW9kYWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZWRpdFByZWZlcmVuY2VNc2cgPSAnVG8gZWRpdCB5b3VyIHByZWZlcmVuY2VzLCBraW5kbHkgY29ubmVjdCB3aXRoIHlvdXIgdHJpcCBndWlkZSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B0MjQgcGIyNCBwbDE1IHByMTUnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXRfbXNnJz5cbiAgICAgICAgICB7b3BEZXRhaWxzLnBob25lTm9cbiAgICAgICAgICAgID8gYCR7ZWRpdFByZWZlcmVuY2VNc2d9LSAke29wRGV0YWlscy5uYW1lfSAoJHtvcERldGFpbHMucGhvbmVOb30pYFxuICAgICAgICAgICAgOiBvcERldGFpbHMubmFtZSA/IGAke2VkaXRQcmVmZXJlbmNlTXNnfS0gJHtvcERldGFpbHMubmFtZX1gIDogZWRpdFByZWZlcmVuY2VNc2d9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7b3BEZXRhaWxzLnBob25lTm8gPyA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1yaWdodCc+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfSBjbGFzc05hbWU9J21yMjQgZnc3Jz5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPXtgdGVsOiR7b3BEZXRhaWxzLnBob25lTm99YH0gY2xhc3NOYW1lPSdmdzcnPkNhbGw8L2E+XG4gICAgICAgIDwvZGl2PiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkVkaXRQcmVmZXJlbmNlc1BvcHVwLnByb3BUeXBlcyA9IHtcbiAgb3BEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbG9zZU1vZGFsOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQcmVmZXJlbmNlc1BvcHVwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEJhY2sySWNvbldoaXRlIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgcnRyaXBQYXRoIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdXJyZW50VHJpcElkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nXG4gICAgXSksXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcHVzaFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGdvQmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGdvQmFja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50VHJpcElkLCBsb2NhdGlvbiwgZ29CYWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJscFBhdGggPSBydHJpcFBhdGgoY3VycmVudFRyaXBJZCk7XG5cbiAgICBsb2NhdGlvbi5hY3Rpb24gPT09ICdQT1AnID8gdGhpcy5wcm9wcy5wdXNoU3RhdGUocmxwUGF0aCkgOiBnb0JhY2soKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BiYzEgZmxleCBhbGlnbkNlbnRlciBwbDE1IHByMTUgcHQ4IHBiOCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdDQgcGI0IGZsZXgnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtMjQgYmxvY2sgbXIxNScgb25DbGljaz17dGhpcy5nb0JhY2tIYW5kbGVyfT48QmFjazJJY29uV2hpdGUgLz48L3NwYW4+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTYgZnc3IG0wIHNmY3cnPntgQm9va2luZyBJRCAjJHt0aGlzLnByb3BzLmN1cnJlbnRUcmlwSWR9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgeyBIb3RlbFJlcXVpcmVkSWRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90ZWxTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWV0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfTtcblxuICBvbkNsaWNrID0gb3B0aW9uID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHsgLi4udGhpcy5wcm9wcy5pbnB1dC52YWx1ZSB9O1xuICAgIGlmIChvcHRpb24uaWQgPT09IEhvdGVsUmVxdWlyZWRJZHMuTk9UX1JFUVVJUkVEKSB7XG4gICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICB2YWx1ZVtrZXldID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVbSG90ZWxSZXF1aXJlZElkcy5OT1RfUkVRVUlSRURdID0gZmFsc2U7XG4gICAgfVxuICAgIHZhbHVlW29wdGlvbi5pZF0gPSAhdmFsdWVbb3B0aW9uLmlkXTtcbiAgICB0aGlzLnByb3BzLmlucHV0Lm9uQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLm9wdGlvbnNcbiAgICAgICAgICA/IHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpYmxvY2sgbXI4IG1iOCcga2V5PXtvcHRpb24uaWR9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGlkPXtgY2hlY2tib3hIb3RlbF8ke29wdGlvbi5pZH1gfSBjbGFzc05hbWU9J2NoZWNrYm94LWNvbW1vbidcbiAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lucHV0LnZhbHVlW29wdGlvbi5pZF19IG9uQ2hhbmdlPXsoKSA9PiB0aGlzLm9uQ2xpY2sob3B0aW9uKX0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncGwyNCBwcjI0JyBodG1sRm9yPXtgY2hlY2tib3hIb3RlbF8ke29wdGlvbi5pZH1gfT57b3B0aW9uLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHRvdWNoZWQgJiZcbiAgICAgICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTnVtYmVyRm9ybWF0dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1ldGE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3RhcnRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0YXJ0VmFsdWU6IDAsXG4gICAgY2xhc3NOYW1lOiAnJ1xuICB9O1xuXG4gIHVwZGF0ZURheXMoYWN0aW9uKSB7XG4gICAgbGV0IG5ld1ZhbHVlID0gMDtcbiAgICBjb25zdCB0ZW1wVmFsdWUgPSBhY3Rpb24gPT09ICdpbmMnID8gMSA6IC0xO1xuICAgIGxldCBjdXJyZW50VmFsdWUgPSBwYXJzZUludCh0aGlzLnByb3BzLmlucHV0LnZhbHVlKTtcbiAgICBpZiAoaXNOYU4oY3VycmVudFZhbHVlKSkge1xuICAgICAgY3VycmVudFZhbHVlID0gMTtcbiAgICB9XG4gICAgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUgKyB0ZW1wVmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlID49IHRoaXMucHJvcHMuc3RhcnRWYWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dC5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGF5c1RleHQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZSA+PSB0aGlzLnByb3BzLnN0YXJ0VmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXlzQ291bnQgcmVsYXRpdmUgaW5wdXQtd2l0aC1pY29uLWJveCBpbnB1dC10d28taWNvbnNcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMudXBkYXRlRGF5cy5iaW5kKHRoaXMsICdkZWMnKX0gY2xhc3NOYW1lPVwibWluLWRhdGUgY3Vyc29yUCBtaW51cy1pY29uXCIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmlucHV0fVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIGR1cmF0aW9uICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5tZXRhLnRvdWNoZWQgJiYgKHRoaXMucHJvcHMubWV0YS5lcnJvciAmJiAnaW5wdXQtZXJyb3InKX1gfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZURheXNUZXh0KGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnVwZGF0ZURheXMuYmluZCh0aGlzLCAnaW5jJyl9IGNsYXNzTmFtZT1cInBsdXMtZGF0ZSBjdXJzb3JQIHBsdXMtaWNvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tZXRhXG4gICAgICAgICAgJiYgdGhpcy5wcm9wcy5tZXRhLnRvdWNoZWRcbiAgICAgICAgICAmJiAodGhpcy5wcm9wcy5tZXRhLmVycm9yXG4gICAgICAgICAgICAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+e3RoaXMucHJvcHMubWV0YS5lcnJvcn08L3NwYW4+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckZvcm1hdHRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5pbnB1dC5vbkNoYW5nZShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iMTUnPlxuICAgICAgICB7dGhpcy5wcm9wcy5vcHRpb25zXG4gICAgICAgICAgPyB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWJsb2NrIG1yOCBtYjgnIGtleT17b3B0aW9uLmlkfT5cbiAgICAgICAgICAgICAgPGlucHV0IG5hbWU9e2lucHV0Lm5hbWV9IHR5cGU9J3JhZGlvJyBpZD17YGNoZWNrYm94SG90ZWxfJHtvcHRpb24uaWR9YH0gY2xhc3NOYW1lPSdyYWRpby1jb21tb24tY2lyY2xlIGNoZWNrYm94LXJvdW5kIHNmYzYnXG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLmlkfSBjaGVja2VkPXtvcHRpb24uaWQgPT09IGlucHV0LnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncHI4JyBodG1sRm9yPXtgY2hlY2tib3hIb3RlbF8ke29wdGlvbi5pZH1gfT48ZGl2IGNsYXNzTmFtZT0ncGwzJz57b3B0aW9uLm5hbWV9PC9kaXY+PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHRvdWNoZWQgJiZcbiAgICAgICAgICAoZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgVGV4dEJveCA9ICh7IGRpc2FibGVkLCBpbnB1dCwgcGxhY2Vob2xkZXIsY2xhc3NOYW1lLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT0ndGV4dCdcbiAgICAgIHsuLi5pbnB1dH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIGNsYXNzTmFtZT17YCR7J2lucHV0J30gJHt0b3VjaGVkICYmIChlcnJvciAmJiAnaW5wdXQtZXJyb3InKX0gJHtjbGFzc05hbWV9YH1cbiAgICAvPlxuICAgIHtcbiAgICAgIHRvdWNoZWQgJiZcbiAgICAgIChlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+e2Vycm9yfTwvc3Bhbj4pXG4gICAgfVxuICA8L2Rpdj5cbik7XG5cblRleHRCb3gucHJvcFR5cGVzID0ge1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIG1ldGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UZXh0Qm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEJveDtcbiIsImV4cG9ydCBjb25zdCBIb3RlbEN1c3RvbWl6YXRpb25EZXRhaWwgPSB7XG4gIHJlcXVpcmVkOiB7XG4gICAgaWQ6IDIyLFxuICAgIGxhYmVsOiAnaG90ZWxfcmVxdWlyZWQnLFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIGlkOiAyLFxuICAgIGxhYmVsOiAnaG90ZWxfY2F0ZWdvcnknLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEZsaWdodEN1c3RvbWl6YXRpb25EZXRhaWwgPSB7XG4gIGlkOiAyMyxcbiAgbGFiZWw6ICdmbGlnaHRfcmVxdWlyZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IENhYkN1c3RvbWl6YXRpb25EZXRhaWwgPSB7XG4gIHJlcXVpcmVkOiB7XG4gICAgaWQ6IDI0LFxuICAgIGxhYmVsOiAnY2FiX3JlcXVpcmVkJyxcbiAgfSxcbiAgcXVlc3Rpb25zOiB7XG4gICAgaWQ6IDMsXG4gICAgbGFiZWw6ICdjYWJzJyxcbiAgfSxcbiAgZG9tZXN0aWNEZXN0aW5hdGlvbk9wdGlvbklkOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBMb2NhbEF0dHJhY3Rpb25DdXN0b21pemF0aW9uRGV0YWlsID0ge1xuICBpZDogMjUsXG4gIGxhYmVsOiAnbG9jYWxfYXR0cmFjdGlvbnMnLFxufTtcblxuZXhwb3J0IGNvbnN0IEJvb2tUaW1lQ3VzdG9taXphdGlvbkRldGFpbCA9IHtcbiAgaWQ6IDQzLFxuICBsYWJlbDogJ2Jvb2tpbmdfdGltZScsXG59O1xuXG5leHBvcnQgY29uc3QgQ2hpbGRDdXN0b21pemF0aW9uRGV0YWlsID0ge1xuICBpZDogNyxcbiAgbGFiZWw6ICdjaGlsZHJlbl9hZ2UnLFxufTtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3REZXRhaWxzVGl0bGVLZXlNYXAgPSB7XG4gIGZyb21fbG9jOiAnRGVwYXJ0dXJlIENpdHknLFxuICB0b19sb2M6ICdEZXN0aW5hdGlvbicsXG4gIHN0YXJ0X2RhdGU6ICdEZXBhcnR1cmUgRGF0ZScsXG4gIGR1cmF0aW9uOiAnRHVyYXRpb24nLFxuICB0cmF2ZWxlcnM6ICdUcmF2ZWxlcnMnLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3REZXRhaWxzVGl0bGVLZXlNYXAgPSB7XG4gIGVtYWlsOiAnRW1haWwgSUQnLFxuICBwaG9uZV9ubzogJ1Bob25lIE51bWJlcicsXG59O1xuXG5leHBvcnQgY29uc3QgcHJlZmVyZW5jZXNEZXRhaWxzVGl0bGVLZXlNYXAgPSB7XG4gIGhvdGVsczogJ0hvdGVscycsXG4gIGZsaWdodHM6ICdGbGlnaHRzJyxcbiAgYnVkZ2V0OiAnQnVkZ2V0IFBlciBQZXJzb24nLFxuICBjYWJzOiAnQ2FicycsXG4gIEFkZFByZWZzOiAnQWRkaXRpb25hbCBQcmVmZXJlbmNlcycsXG59O1xuXG5leHBvcnQgY29uc3QgY3VzdG9taXphdGlvblR5cGVzID0ge1xuICBQSUNLRVI6ICdzaW5nbGVfdmFsdWUnLFxuICBNVUxUSV9CVVRUT05TOiAnbXVsdGlfdmFsdWUnLFxufTtcblxuZXhwb3J0IGNvbnN0IEhvdGVsUmVxdWlyZWRJZHMgPSB7XG4gIFJFUVVJUkVEOiA5NSxcbiAgTk9UX1JFUVVJUkVEOiA5Nixcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVkQ3VzdG9taXphdGlvbnMgPSB7XG4gIGNpdGllczogMSxcbiAgYm9vbGVhbl9oZWFkaW5nczogMSxcbiAgYXR0cmFjdGlvbnM6IDEsXG4gIG90aGVyOiAxLFxuICBpdGluZXJhcnk6IDEsXG59O1xuXG5leHBvcnQgY29uc3QgRml4ZWRDdXN0b21pemF0aW9uID0ge1xuICBGbGlnaHRDdXN0b21pemF0aW9uOiBGbGlnaHRDdXN0b21pemF0aW9uRGV0YWlsLmlkLFxuICBIb3RlbEN1c3RvbWl6YXRpb25SZXE6IEhvdGVsQ3VzdG9taXphdGlvbkRldGFpbC5yZXF1aXJlZC5pZCxcbiAgSG90ZWxDdXN0b21pemF0aW9uQ2F0ZWdvcmllczogSG90ZWxDdXN0b21pemF0aW9uRGV0YWlsLmNhdGVnb3J5LmlkLFxuICBDYWJPcHRpb25zOiBDYWJDdXN0b21pemF0aW9uRGV0YWlsLnF1ZXN0aW9ucyxcbn07XG5cbmV4cG9ydCBjb25zdCBGaXhlZEN1c3RvbWl6YXRpb25JZHMgPSBbXG4gIEhvdGVsQ3VzdG9taXphdGlvbkRldGFpbC5yZXF1aXJlZC5pZCwgLy8yMlxuICBIb3RlbEN1c3RvbWl6YXRpb25EZXRhaWwuY2F0ZWdvcnkuaWQsIC8vMlxuICBGbGlnaHRDdXN0b21pemF0aW9uRGV0YWlsLmlkLCAvLzIzXG4gIENoaWxkQ3VzdG9taXphdGlvbkRldGFpbC5pZCwgLy8gN1xuICBDYWJDdXN0b21pemF0aW9uRGV0YWlsLnJlcXVpcmVkLmlkLCAvLzI0XG4gIENhYkN1c3RvbWl6YXRpb25EZXRhaWwucXVlc3Rpb25zLmlkIC8vM1xuXTtcblxuZXhwb3J0IGNvbnN0IFRSSVBfU1RBR0VTID0ge1xuICBvcHRpb25zOiBbXG4gICAgeyBpZDogMSwgbmFtZTogJ1N0aWxsIERyZWFtaW5n4oCmIE5vdCBzdXJlIEkgYW0gZ29pbmcgdG8gdGFrZSB0aGlzIHRyaXAnIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0kga25vdyBJ4oCZbSBnb2luZyBzb21ld2hlcmUsIEp1c3Qgbm90IHN1cmUgd2hpY2ggcGxhY2UnIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ0nigJltIGRlZmluaXRlbHkgZ29pbmcuIEkga25vdyB3aGljaCBwbGFjZeKApiBMZXTigJlzIGdvIScgfSxcbiAgICB7IGlkOiA0LCBuYW1lOiAnRmxpZ2h0LSBUcmFpbiBhbHJlYWR5IGJvb2tlZCwgSnVzdCBuZWVkIHJlbWFpbmluZyBwYWNrYWdlJyB9XG4gIF1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IHsgRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IElTRF9DT0RFUyBmcm9tICdoZWxwZXJzL2lzZENvZGVzJztcbmltcG9ydCB7IHJlcXVpcmVkLCBwaG9uZU51bWJlciwgZW1haWwgfSBmcm9tICd1dGlscy9mb3JtVmFsaWRhdG9ycyc7XG5pbXBvcnQgVGV4dEJveCBmcm9tICcuLi9jb21wb25lbnRzL1RleHRCb3gnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvRHJvcGRvd24nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IENvbnRhY3REZXRhaWxzID0gKHsgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nIH0pID0+IHtcbiAgY29uc3QgUFJFRkVSRU5DRV9JU0RfQ09ERVMgPSBPYmplY3Qua2V5cyhJU0RfQ09ERVMpLm1hcChrZXkgPT4ge1xuICAgIHJldHVybiB7IGxhYmVsOiBJU0RfQ09ERVNba2V5XSwgdmFsdWU6IElTRF9DT0RFU1trZXldIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NiY3cnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHQwIGwwIHdmdWxsJz48SGVhZGVyIC8+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwMTUnPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWIxNSc+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSWRcIiBjbGFzc05hbWU9XCJibG9jayBtMCBmMTRwIGZ3NyBzZmM2IG1iOFwiPkVtYWlsIElEPGVtIGNsYXNzTmFtZT1cInBmYzJcIj4qPC9lbT48L2xhYmVsPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEJveH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBJZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBkb21haW4uY29tXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGU9e1tyZXF1aXJlZCwgZW1haWxdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYjE1Jz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwaG9uZU51bWJlcicgY2xhc3NOYW1lPSdibG9jayBtMCBmMTRwIGZ3NyBzZmM2IG1iOCc+UGhvbmUgTnVtYmVyIDxlbSBjbGFzc05hbWU9J3BmYzInPio8L2VtPjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy00Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzZWxlY3QtY29uIGlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc2RDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17UFJFRkVSRU5DRV9JU0RfQ09ERVN9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIis5MVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyMTAgYmxvY2sgd2F1dG8gbGF1dG8gaW5wdXQtaWNvbiBhYnNvbHV0ZS1jZW50ZXItdiBkb3duQXJyb3cnPjxEb3duQXJyb3cgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTggcGwwJz5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZU5vXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEJveH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9iaWxlL0NvbnRhY3QgTm8uXCJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtbcmVxdWlyZWQsIHBob25lTnVtYmVyXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGIwIHA4IHdmdWxsIHNiY3cgYnM2IGwwIHIwIGJ0IHoyJz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17c3VibWl0dGluZ30gY2xhc3NOYW1lPSdidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCBhdF9jb25maXJtJz5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29udGFjdERldGFpbHMucHJvcFR5cGVzID0ge1xuICBzdWJtaXR0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuQ29udGFjdERldGFpbHMuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdDb250YWN0RGV0YWlsc1ByZWZlcmVuY2VzJyAvLyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGZvcm1cbn0pKENvbnRhY3REZXRhaWxzKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRleHQ6ICdFZGl0IFByZWZlcmVuY2UnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0OCBwYjggcGwxNSBwcjE1IGZsZXggYmIgd2Z1bGwgZml4ZWQgejUgc2Jjd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0NCBwYjQgZmxleFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiBmbGV4IGFsaWduQ2VudGVyIGZ3NyBmbGV4RnVsbCBlbGxpcHNpcyBtbDI0XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgeyByZXF1aXJlZCwgdmFsaWREYXRlIH0gZnJvbSAndXRpbHMvZm9ybVZhbGlkYXRvcnMnO1xuaW1wb3J0IFRleHRCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0Qm94JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvRGF0ZVBpY2tlcic7XG5pbXBvcnQgTnVtYmVyRm9ybWF0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTnVtYmVyRm9ybWF0dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IFJhZGlvQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvUmFkaW9CdXR0b24nO1xuaW1wb3J0IHsgVFJJUF9TVEFHRVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBSZXF1ZXN0ID0gKHsgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCBlcnJvcnMgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NiY3cnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHdmdWxsIHQwIGwwJz48SGVhZGVyIC8+PC9kaXY+XG4gICAgICB7XG4gICAgICAgIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoXG4gICAgICAgICAgPyBlcnJvcnMubWFwKGVycm9yID0+IDxwIGNsYXNzTmFtZT1cImYxNCBmdzcgbXQ4IG1iMCBwbDE1IHByMTVcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2AqICR7ZXJyb3J9YH08L3A+KVxuICAgICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AxNSc+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYjE1Jz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdkZXN0aW5hdGlvbicgY2xhc3NOYW1lPSdibG9jayBtMCBmMTRwIG1iOCBmdzcgc2ZjNic+RGVzdGluYXRpb24gPGVtIGNsYXNzTmFtZT0ncGZjMic+KjwvZW0+PC9sYWJlbD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiZGVzdGluYXRpb25cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRCb3h9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXN0aW5hdGlvblwiXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhdF9kZXN0aW5hdGlvbidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWIxNSc+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGVwYXJ0dXJlQ2l0eScgY2xhc3NOYW1lPSdibG9jayBtMCBmMTRwIGZ3NyBzZmM2IG1iOCc+RGVwYXJ0dXJlIENpdHkgPGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGZjMic+KjwvZW0+PC9sYWJlbD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiZGVwYXJ0dXJlQ2l0eVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEJveH1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlcGFydHVyZSBDaXR5XCJcbiAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2F0X2RlcGFydHVyZUNpdHknXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWIxNSBjb2wteHMtNiBwcjgnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGVwYXJ0dXJlRGF0ZScgY2xhc3NOYW1lPSdibG9jayBtMCBmMTRwIGZ3NyBzZmM2IG1iOCc+RGVwYXJ0dXJlIERhdGUgPGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwZmMyJz4qPC9lbT48L2xhYmVsPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVwYXJ0dXJlRGF0ZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtEYXRlUGlja2VyfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZyaSwgMTAgTWF5XCJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17W3JlcXVpcmVkLCB2YWxpZERhdGUoJ0REIE1NTSBZWVlZJyldfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWIxNSBjb2wteHMtNiBwbDgnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZGF5cycgY2xhc3NOYW1lPSdibG9jayBtMCBmMTRwIGZ3NyBzZmM2IG1iOCc+Tm8uIE9mIERheXMgPGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwZmMyJz4qPC9lbT48L2xhYmVsPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwidHJpcERheXNcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TnVtYmVyRm9ybWF0dGVyfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMlwiXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU9ezJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhdF9kYXlzJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYjE1IGNvbC14cy02IHByOCc+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdhZHVsdHMnIGNsYXNzTmFtZT0nYmxvY2sgbTAgZjE0cCBmdzcgc2ZjNiBtYjgnPkFkdWx0cyAoKzEyIHllYXJzKTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZHVsdHNcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TnVtYmVyRm9ybWF0dGVyfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMlwiXG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZT17MX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2F0X2FkdWx0cydcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iMTUgY29sLXhzLTYgcGw4Jz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NoaWxkcmVuJyBjbGFzc05hbWU9J2Jsb2NrIG0wIGYxNHAgZnc3IHNmYzYgbWI4Jz5DaGlsZHJlbjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjaGlsZHJlblwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtOdW1iZXJGb3JtYXR0ZXJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIyXCJcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlPXswfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWIxNSBwbDgnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY2hpbGRyZW4nIGNsYXNzTmFtZT0nYmxvY2sgbTAgZjE0cCBmdzQgbWI4IGZ3Nyc+VHJpcCBQbGFubmluZyBTdGFnZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gbTAgbWI0OCBcIj5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3RyaXBTdGFnZSdcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmFkaW9CdXR0b259XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtUUklQX1NUQUdFUy5vcHRpb25zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgYjAgcDggd2Z1bGwgc2JjdyBiczYgbDAgcjAgYnQgejInPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGRpc2FibGVkPXtzdWJtaXR0aW5nfSBjbGFzc05hbWU9J2J0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsICBhdF9jb25maXJtJz5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5SZXF1ZXN0LnByb3BUeXBlcyA9IHtcbiAgZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gIHN1Ym1pdHRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5SZXF1ZXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3JzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ1JlcXVlc3RQcmVmZXJlbmNlcycgLy8gYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBmb3JtXG59KShSZXF1ZXN0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSwgZm9ybVZhbHVlU2VsZWN0b3IgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEhvdGVsIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IEhvdGVsU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Ib3RlbFNlbGVjdG9yJztcbmltcG9ydCBGbGlnaHRCb29raW5nIGZyb20gJy4uL2ZpZWxkcy9GbGlnaHRCb29raW5nJztcbmltcG9ydCBDYWJGaWVsZHMgZnJvbSAnLi4vZmllbGRzL0NhYkZpZWxkcyc7XG5pbXBvcnQgQnVkZ2V0RmllbGQgZnJvbSAnLi4vZmllbGRzL0J1ZGdldEZpZWxkJztcbmltcG9ydCBTaW5nbGVWYWx1ZWRGaWVsZCBmcm9tICcuLi9maWVsZHMvU2luZ2xlVmFsdWVkRmllbGQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBnZXRPdGhlclByZWZlcmVuY2VzT3B0aW9ucyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XG5pbXBvcnQge1xuICBDYWJDdXN0b21pemF0aW9uRGV0YWlsIGFzIENhYkN1c3RvbWl6YXRpb25zLFxuICBGbGlnaHRDdXN0b21pemF0aW9uRGV0YWlsIGFzIEZsaWdodEN1c3RvbWl6YXRpb24sXG4gIEhvdGVsUmVxdWlyZWRJZHNcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBUcmlwUHJlZmVyZW5jZXMgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCBwcmVmZXJlbmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsaWdodEFuc3dlclZhbHVlLCBob3RlbFN0YXJzVmFsdWVzLCBzaW5nbGVPcHRpb25WYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG5cbiAgY29uc3Qgbm9Ib3RlbFZhbHVlID0gaG90ZWxTdGFyc1ZhbHVlcyAmJiBob3RlbFN0YXJzVmFsdWVzW0hvdGVsUmVxdWlyZWRJZHMuTk9UX1JFUVVJUkVEXTtcblxuICBjb25zdCBnZXRPdGhlclByZWZlcmVuY2VzID0gKG90aGVyT3B0aW9ucywgbGltaXQgPSAwLCBvZmZzZXQgPSAwKSA9PiB7XG4gICAgbGltaXQgPSBsaW1pdCB8fCBvdGhlck9wdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IG90aGVyRmllbGRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IGxpbWl0OyBpICs9IDEpIHtcbiAgICAgIG90aGVyRmllbGRzLnB1c2goXG4gICAgICAgIDxkaXYga2V5PXtvdGhlck9wdGlvbnNbaV0uaWR9IGNsYXNzTmFtZT1cInJvdyByb3ctIG0wIG1iOCBwYjJcIj5cbiAgICAgICAgICA8U2luZ2xlVmFsdWVkRmllbGQgcHJlZmVyZW5jZT17b3RoZXJPcHRpb25zW2ldfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvdGhlckZpZWxkcztcbiAgfTtcblxuICBjb25zdCB7IHByZWZlcmVuY2VzRGF0YSB9ID0gcHJlZmVyZW5jZXM7XG4gIGNvbnN0IGhvdGVsUHJlZmVyZW5jZSA9IHsgLi4ucHJlZmVyZW5jZXNEYXRhLmhvdGVsQ2F0ZWdvcnlDdXN0b21pemF0aW9uc1swXSB9O1xuICBjb25zdCBmbGlnaHRQcmVmZXJlbmNlID0gcHJlZmVyZW5jZXNEYXRhLmN1c3RvbWl6YXRpb25zLmZpbmQoZSA9PiBlLmlkID09PSBGbGlnaHRDdXN0b21pemF0aW9uLmlkKTtcbiAgY29uc3QgZmxpZ2h0QnVkZ2V0ID0gcHJlZmVyZW5jZXNEYXRhLmZsaWdodEJ1ZGdldDtcbiAgY29uc3QgaG90ZWxCdWRnZXQgPSBwcmVmZXJlbmNlc0RhdGEuaG90ZWxCdWRnZXRzO1xuICBjb25zdCBjYWJSZXF1aXJlZFByZWZlcmVuY2UgPSBwcmVmZXJlbmNlc0RhdGEuY3VzdG9taXphdGlvbnMuZmluZChlID0+IGUuaWQgPT09IENhYkN1c3RvbWl6YXRpb25zLnJlcXVpcmVkLmlkKTtcbiAgY29uc3QgY2FiUXVlc3Rpb25zUHJlZmVyZW5jZSA9IHByZWZlcmVuY2VzRGF0YS5jdXN0b21pemF0aW9ucy5maW5kKGUgPT4gZS5pZCA9PT0gQ2FiQ3VzdG9taXphdGlvbnMucXVlc3Rpb25zLmlkKTtcbiAgY29uc3QgZGVzdGluYXRpb25zTGlzdCA9IHByZWZlcmVuY2VzLmRlc3RpbmF0aW9uc0xpc3Q7XG4gIGNvbnN0IG90aGVyUHJlZmVyZW5jZU9wdGlvbnMgPSBnZXRPdGhlclByZWZlcmVuY2VzT3B0aW9ucyhwcmVmZXJlbmNlcyk7XG5cbiAgaG90ZWxQcmVmZXJlbmNlLm9wdGlvbnMgPSBbLi4ucHJlZmVyZW5jZXNEYXRhLmhvdGVsQ2F0ZWdvcnlDdXN0b21pemF0aW9uc1swXS5vcHRpb25zLCB7XG4gICAgaWQ6IDk2LFxuICAgIG5hbWU6ICdObyBIb3RlbCdcbiAgfV07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwYjQ4Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0MCBsMCB3ZnVsbCByMCc+PEhlYWRlciAvPjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncDE1Jz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iMTUnPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2Rlc3RpbmF0aW9uJyBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXIgbTAgZjE0cCBmdzcgbWI4Jz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtcjggYmxvY2sgaW5wdXQtMjQnPjxIb3RlbCAvPjwvc3Bhbj48c3Bhbj5Ib3RlbHM8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JiJz5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT0naG90ZWxDYXRlZ29yaWVzJ1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SG90ZWxTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtob3RlbFByZWZlcmVuY2Uub3B0aW9uc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iMTUnPlxuICAgICAgICAgICAgPEZsaWdodEJvb2tpbmcgZmxpZ2h0T3B0aW9ucz17ZmxpZ2h0UHJlZmVyZW5jZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYjE1Jz5cbiAgICAgICAgICAgIDxCdWRnZXRGaWVsZFxuICAgICAgICAgICAgICBmbGlnaHRBbnN3ZXJWYWx1ZT17ZmxpZ2h0QW5zd2VyVmFsdWV9XG4gICAgICAgICAgICAgIGhvdGVsU3RhcnNWYWx1ZXM9e2hvdGVsU3RhcnNWYWx1ZXN9XG4gICAgICAgICAgICAgIG5vSG90ZWxWYWx1ZT17bm9Ib3RlbFZhbHVlfVxuICAgICAgICAgICAgICBmbGlnaHRCdWRnZXQ9e2ZsaWdodEJ1ZGdldH1cbiAgICAgICAgICAgICAgaG90ZWxCdWRnZXQ9e2hvdGVsQnVkZ2V0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q2FiRmllbGRzXG4gICAgICAgICAgICAgIGNhYlJlcXVpcmVkUHJlZmVyZW5jZT17Y2FiUmVxdWlyZWRQcmVmZXJlbmNlfVxuICAgICAgICAgICAgICBjYWJRdWVzdGlvbnNQcmVmZXJlbmNlPXtjYWJRdWVzdGlvbnNQcmVmZXJlbmNlfVxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbnNMaXN0PXtkZXN0aW5hdGlvbnNMaXN0fVxuICAgICAgICAgICAgICBzaW5nbGVPcHRpb25WYWx1ZXM9e3NpbmdsZU9wdGlvblZhbHVlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2Jvb2tpbmdUaW1lJyBjbGFzc05hbWU9J2Jsb2NrIG0wIGYxNHAgZnc3IHNmYzYgbWI4IGhpZGUnPkkgV2lsbCBCb29rPC9sYWJlbD5cbiAgICAgICAgICAgIHtnZXRPdGhlclByZWZlcmVuY2VzKG90aGVyUHJlZmVyZW5jZU9wdGlvbnMsIDEpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2dldE90aGVyUHJlZmVyZW5jZXMob3RoZXJQcmVmZXJlbmNlT3B0aW9ucywgMCwgMSl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWIxNSc+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYWRkaXRpb25hbCcgY2xhc3NOYW1lPSdibG9jayBtMCBmMTRwIGZ3NyBzZmM2IG1iOCc+QWRkaXRpb25hbCBQcmVmZXJlbmNlczwvbGFiZWw+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImluZm9cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYW50IHRvIHNheSBhbnl0aGluZz9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgdGV4dGFyZWEgd2Z1bGwgcDE1IGF0X2VkaXRwcmVmdGV4dGJveFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpeGVkIGIwIHA4IHdmdWxsIHNiY3cgYnM2IGwwIHIwIGJ0IHoyJz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17c3VibWl0dGluZ30gY2xhc3NOYW1lPSdidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCAgYXRfY29uZmlybSc+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVHJpcFByZWZlcmVuY2VzLnByb3BUeXBlcyA9IHtcbiAgcHJlZmVyZW5jZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGZsaWdodEFuc3dlclZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBob3RlbFN0YXJzVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzaW5nbGVPcHRpb25WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHN1Ym1pdHRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5UcmlwUHJlZmVyZW5jZXMuZGVmYXVsdFByb3BzID0ge307XG5cbmNvbnN0IFRyaXBQcmVmZXJlbmNlc0Zvcm0gPSByZWR1eEZvcm0oe1xuICBmb3JtOiAnVHJpcFByZWZlcmVuY2VzJyAvLyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGZvcm1cbn0pKFRyaXBQcmVmZXJlbmNlcyk7XG5cblxuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcignVHJpcFByZWZlcmVuY2VzJyk7IC8vIDwtLSBzYW1lIGFzIGZvcm0gbmFtZVxuY29uc3QgVHJpcFByZWZlcmVuY2VzQ29ubmVjdGVkRm9ybSA9IGNvbm5lY3QoKHN0YXRlKSA9PiB7XG4gIC8vIGNhbiBzZWxlY3QgdmFsdWVzIGluZGl2aWR1YWxseVxuICBjb25zdCBzaW5nbGVPcHRpb25WYWx1ZXMgPSBzZWxlY3RvcihzdGF0ZSwgJ3NpbmdsZVZhbHVlT3B0aW9ucycpO1xuICBjb25zdCBmbGlnaHRBbnN3ZXJWYWx1ZSA9IHNlbGVjdG9yKHN0YXRlLCAnZmxpZ2h0QW5zd2VyQXR0cmlidXRlcycpO1xuICBjb25zdCBob3RlbFN0YXJzVmFsdWVzID0gc2VsZWN0b3Ioc3RhdGUsICdob3RlbENhdGVnb3JpZXMnKTtcblxuICByZXR1cm4ge1xuICAgIHNpbmdsZU9wdGlvblZhbHVlcyxcbiAgICBmbGlnaHRBbnN3ZXJWYWx1ZSxcbiAgICBob3RlbFN0YXJzVmFsdWVzLFxuICB9O1xufSkoVHJpcFByZWZlcmVuY2VzRm9ybSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgVHJpcFByZWZlcmVuY2VzQ29ubmVjdGVkRm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IHsgbnVtYmVyV2l0aENvbW1hcyB9IGZyb20gJ2hlbHBlcnMvcGFyc2Vycyc7XG5pbXBvcnQgeyBCdWRnZXRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgcmVxdWlyZWQgfSBmcm9tICd1dGlscy9mb3JtVmFsaWRhdG9ycyc7XG5cbmNvbnN0IHJlbmRlckJ1ZGdldFRleHRGaWVsZCA9ICh7IGlzRmxpZ2h0U2VsZWN0ZWQsIGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJ1ZGdldC10ZXh0Ym94IGF0X2VkaXRidWRnZXRcIj5cbiAgICA8bGFiZWwgaHRtbEZvcj1cIkZyb21cIiBjbGFzc05hbWU9XCJmMTQgZnc5IHBiOCBibG9jayBwZmMzXCI+XG4gICAgICBCdWRnZXQge2lzRmxpZ2h0U2VsZWN0ZWQgPyAnV2l0aCcgOiAnV2l0aG91dCd9IEFpcmZhcmUgOlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGZjNCBmdzRcIj4ocGVyIHBlcnNvbik8L3NwYW4+XG4gICAgPC9sYWJlbD5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd2l0aC1pY29uLWJveFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1pY29uXCI+PEJ1ZGdldEljb24gLz48L3NwYW4+XG4gICAgICAgIDxpbnB1dCB7Li4uaW5wdXR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBidWRnZXQgdmFsdWVcIiAvPlxuICAgICAgICB7XG4gICAgICAgICAgdG91Y2hlZCAmJlxuICAgICAgICAgIChlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+e2Vycm9yfTwvc3Bhbj4pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbnJlbmRlckJ1ZGdldFRleHRGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIGlzRmxpZ2h0U2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuY29uc3QgYnVkZ2V0RXJyb3IgPSB1bmRlZmluZWQ7XG5cbmNvbnN0IGdldEJ1ZGdldE9wdGlvbkZpZWxkcyA9IChidWRnZXRPcHRpb25zLCBmbGlnaHRTZWxlY3RlZCkgPT4ge1xuICBjb25zdCBidWRnZXRGaWVsZHMgPSBidWRnZXRPcHRpb25zLm1hcCgoYnVkZ2V0T3B0aW9uKSA9PiB7XG4gICAgY29uc3QgaWQgPSBgJHtidWRnZXRPcHRpb24ubWluX3ByaWNlfS0ke2J1ZGdldE9wdGlvbi5tYXhfcHJpY2V9YDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpYmxvY2sgcDUgcHI4IHBsMFwiIGtleT17aWR9PlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBuYW1lPVwiYnVkZ2V0XCJcbiAgICAgICAgICBjb21wb25lbnQ9XCJpbnB1dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uXCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17YCR7YnVkZ2V0T3B0aW9uLm1pbl9wcmljZX0uLiR7YnVkZ2V0T3B0aW9uLm1heF9wcmljZX1gfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwbDE1IHByMTUgY3Vyc29yUCcgaHRtbEZvcj17aWR9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wXCI+XG4gICAgICAgICAgICDigrkge251bWJlcldpdGhDb21tYXMoYnVkZ2V0T3B0aW9uLm1pbl9wcmljZSl9XG4gICAgICAgICAgICAte251bWJlcldpdGhDb21tYXMoYnVkZ2V0T3B0aW9uLm1heF9wcmljZSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBmdzcgc2ZjNiBtMFwiPkJ1ZGdldCB7KGZsaWdodFNlbGVjdGVkKSA/ICdXaXRoICcgOiAnV2l0aG91dCAnfUFpcmZhcmU6ICggcGVyIHBlcnNvbiApPGVtIGNsYXNzTmFtZT1cInBmYzJcIj4qPC9lbT48L3A+XG4gICAgICB7YnVkZ2V0RmllbGRzfVxuICAgICAge2J1ZGdldEVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57YnVkZ2V0RXJyb3J9PC9zcGFuPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNsYXNzIEJ1ZGdldEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmbGlnaHRBbnN3ZXJWYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3RlbFN0YXJzVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZsaWdodEJ1ZGdldDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3RlbEJ1ZGdldDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBub0hvdGVsVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIGdldEJ1ZGdldE9wdGlvbnMoKSB7XG4gICAgY29uc3QgaWRUb1N0YXIgPSB7XG4gICAgICAzMjogJzJTdGFyJyxcbiAgICAgIDg6ICczU3RhcicsXG4gICAgICA3OiAnNFN0YXInLFxuICAgICAgNjogJzVTdGFyJ1xuICAgIH07XG4gICAgY29uc3QgZmxpZ2h0T3B0aW9uID0gdGhpcy5wcm9wcy5mbGlnaHRBbnN3ZXJWYWx1ZTtcbiAgICBjb25zdCBob3RlbFN0YXJzT3B0aW9ucyA9IHRoaXMucHJvcHMuaG90ZWxTdGFyc1ZhbHVlcztcbiAgICBjb25zdCBub0hvdGVsVmFsdWUgPSB0aGlzLnByb3BzLm5vSG90ZWxWYWx1ZTtcblxuICAgIC8vIG5vIHByZWZlcmVuY2VzIGFyZSB0aGVyZVxuICAgIGlmICghaG90ZWxTdGFyc09wdGlvbnMpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZmxpZ2h0QnVkZ2V0ID0gdGhpcy5wcm9wcy5mbGlnaHRCdWRnZXQgJiYgdGhpcy5wcm9wcy5mbGlnaHRCdWRnZXQuZmxpZ2h0UHJpY2U7XG5cbiAgICBjb25zdCBzZWxlY3RlZEhvdGVsT3B0aW9ucyA9IFtdO1xuICAgIGZvciAoY29uc3QgaG90ZWxPcHRpb24gaW4gaG90ZWxTdGFyc09wdGlvbnMpIHtcbiAgICAgIGlmIChob3RlbFN0YXJzT3B0aW9uc1tob3RlbE9wdGlvbl0pIHtcbiAgICAgICAgc2VsZWN0ZWRIb3RlbE9wdGlvbnMucHVzaChob3RlbE9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdldCBmbGlnaHQgYnVkZ2V0XG4gICAgY29uc3QgZmxpZ2h0UHJpY2UgPSAoZmxpZ2h0T3B0aW9uLmN1c3RvbWl6YXRpb25JZCA9PT0gMjMgJiYgZmxpZ2h0T3B0aW9uLm9wdGlvbklkID09PSAnOTcnKVxuICAgICAgPyBmbGlnaHRCdWRnZXRcbiAgICAgIDogMDtcblxuICAgIC8vIGdldCBob3RlbCBidWRnZXRcbiAgICAvLyA5NiAtIE5vIGhvdGVsXG4gICAgaWYgKGhvdGVsU3RhcnNPcHRpb25zICYmIHNlbGVjdGVkSG90ZWxPcHRpb25zLmxlbmd0aCAmJiAhbm9Ib3RlbFZhbHVlICYmIHRoaXMucHJvcHMuaG90ZWxCdWRnZXQpIHtcbiAgICAgIGNvbnN0IGhvdGVsQnVkZ2V0cyA9IHRoaXMucHJvcHMuaG90ZWxCdWRnZXRbaWRUb1N0YXJbTWF0aC5taW4oLi4uc2VsZWN0ZWRIb3RlbE9wdGlvbnMpXV07XG5cbiAgICAgIHJldHVybiBob3RlbEJ1ZGdldHMubWFwKGhvdGVsQnVkZ2V0ID0+IChcbiAgICAgICAge1xuICAgICAgICAgIG1heF9wcmljZTogaG90ZWxCdWRnZXQubWF4UHJpY2UgKyBmbGlnaHRQcmljZSxcbiAgICAgICAgICBtaW5fcHJpY2U6IGhvdGVsQnVkZ2V0Lm1pblByaWNlICsgZmxpZ2h0UHJpY2VcbiAgICAgICAgfVxuICAgICAgKSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpc0ZsaWdodFNlbGVjdGVkKCkge1xuICAgIHJldHVybiAodGhpcy5wcm9wcy5mbGlnaHRBbnN3ZXJWYWx1ZSAmJiB0aGlzLnByb3BzLmZsaWdodEFuc3dlclZhbHVlLm9wdGlvbklkID09PSAnOTcnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBidWRnZXRPcHRpb25zID0gdGhpcy5nZXRCdWRnZXRPcHRpb25zKCk7XG4gICAgY29uc3QgZmxpZ2h0U2VsZWN0ZWQgPSB0aGlzLmlzRmxpZ2h0U2VsZWN0ZWQoKTtcblxuICAgIHJldHVybiBidWRnZXRPcHRpb25zID9cbiAgICAgIGdldEJ1ZGdldE9wdGlvbkZpZWxkcyhidWRnZXRPcHRpb25zLCBmbGlnaHRTZWxlY3RlZCwgdGhpcy5lcnJvcikgOlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9XCJidWRnZXRcIlxuICAgICAgICBjb21wb25lbnQ9e3JlbmRlckJ1ZGdldFRleHRGaWVsZH1cbiAgICAgICAgaXNGbGlnaHRTZWxlY3RlZD17ZmxpZ2h0U2VsZWN0ZWR9XG4gICAgICAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWRnZXRGaWVsZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IHsgQ2FiQ3VzdG9taXphdGlvbkRldGFpbCBhcyBDYWJDdXN0b21pemF0aW9ucyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDYWJJY29uRnJvbnQgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IEdDYWJSYWRpb0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAuY2FiLXJhZGlvOmNoZWNrZWQgKyBsYWJlbCBwJzoge1xuICAgIGNvbG9yOiAnIzIwQTM5NyAhaW1wb3J0YW50J1xuICB9LFxufSk7XG5cbmNvbnN0IENhYkZpZWxkcyA9ICh7IGNhYlJlcXVpcmVkUHJlZmVyZW5jZSwgY2FiUXVlc3Rpb25zUHJlZmVyZW5jZSwgZGVzdGluYXRpb25zTGlzdCwgc2luZ2xlT3B0aW9uVmFsdWVzIH0pID0+IHtcbiAgY29uc3QgZGVzdGluYXRpb25UeXBlID0gZGVzdGluYXRpb25zTGlzdCAmJiBkZXN0aW5hdGlvbnNMaXN0WzBdICYmIGRlc3RpbmF0aW9uc0xpc3RbMF0uZGVzdGluYXRpb25UeXBlO1xuXG4gIGlmICghY2FiUmVxdWlyZWRQcmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjYWJZZXNPcHRpb24gPSBjYWJSZXF1aXJlZFByZWZlcmVuY2Uub3B0aW9ucy5maW5kKG9wdGlvbiA9PiBvcHRpb24ubmFtZSA9PT0gJ1llcycpO1xuICBsZXQgY2FiU2VsZWN0ZWRPcHRpb24gPSB1bmRlZmluZWQ7XG4gIGlmIChzaW5nbGVPcHRpb25WYWx1ZXMpIHtcbiAgICBjYWJTZWxlY3RlZE9wdGlvbiA9IHNpbmdsZU9wdGlvblZhbHVlc1tDYWJDdXN0b21pemF0aW9ucy5yZXF1aXJlZC5pZF07XG4gIH1cblxuICBjb25zdCBnZXRDYWJPcHRpb25zID0gKHByZWZlcm5jZSwgc2VsZWN0ZWRPcHRpb25zID0gdW5kZWZpbmVkLCBpbnB1dENsYXNzID0gJ3JhZGlvLWNvbW1vbicpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc2VsZWN0ZWRPcHRpb25zIHx8IHByZWZlcm5jZS5vcHRpb25zO1xuICAgIHJldHVybiAoXG4gICAgICBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRJZCA9IGBvcHRpb24tcmFkaW8tJHtvcHRpb24uaWR9YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17b3B0aW9uLmlkfT5cbiAgICAgICAgICAgIDxHQ2FiUmFkaW9EaXYgY2xhc3NOYW1lPSdwNSc+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT17YHNpbmdsZVZhbHVlT3B0aW9uc1ske3ByZWZlcm5jZS5pZH1dW29wdGlvbklkXWB9XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImlucHV0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzfVxuICAgICAgICAgICAgICBpZD17ZWxlbWVudElkfVxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLmlkLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9e2VsZW1lbnRJZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yUCBibG9jayBwcjggcGw4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZnc3IHRleHQtdXBwZXJjYXNlXCI+e29wdGlvbi5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L0dDYWJSYWRpb0Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBnZXRDYWJEb21lc3RpY09wdGlvbnMgPSBvcHRpb25zID0+XG4gICAgb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudElkID0gYG9wdGlvbi1yYWRpby0ke29wdGlvbn1gO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e29wdGlvbn0gY2xhc3NOYW1lPVwiY29sLXhzLTYgcDUgcHQ0XCI+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwiZHJpdmVyU3BlYWtzXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImlucHV0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvLWNvbW1vblwiXG4gICAgICAgICAgICBpZD17ZWxlbWVudElkfVxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9e2VsZW1lbnRJZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvclBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wXCI+e29wdGlvbn08L3A+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIGNvbnN0IGdldENhYk5lc3RlZFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChjYWJTZWxlY3RlZE9wdGlvbiAmJiBjYWJTZWxlY3RlZE9wdGlvbi5vcHRpb25JZCA9PT0gY2FiWWVzT3B0aW9uLmlkLnRvU3RyaW5nKCkpIHtcbiAgICAgIGlmIChkZXN0aW5hdGlvblR5cGUgPT09ICdJbnRlcm5hdGlvbmFsJykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY2FiUXVlc3Rpb25zUHJlZmVyZW5jZS5vcHRpb25zXG4gICAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLmlkICE9PSBDYWJDdXN0b21pemF0aW9ucy5kb21lc3RpY0Rlc3RpbmF0aW9uT3B0aW9uSWQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWI4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB3aWxsLWJvb2stY29tcFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTRwIGZ3NyBzZmM2IG0wIGlibG9jayBwYjNcIj57Y2FiUXVlc3Rpb25zUHJlZmVyZW5jZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcGw0IHB0MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy04IGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgIHtnZXRDYWJPcHRpb25zKGNhYlF1ZXN0aW9uc1ByZWZlcmVuY2UsIG9wdGlvbnMpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvcHRpb24gPSBjYWJRdWVzdGlvbnNQcmVmZXJlbmNlLm9wdGlvbnNcbiAgICAgICAgLmZpbmQob3B0ID0+IG9wdC5pZCA9PT0gQ2FiQ3VzdG9taXphdGlvbnMuZG9tZXN0aWNEZXN0aW5hdGlvbk9wdGlvbklkKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBbJ0VuZ2xpc2gnLCAnSGluZGknXTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWI4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgd2lsbC1ib29rLWNvbXBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgZnc3IHNmYzYgbTAgaWJsb2NrXCI+e29wdGlvbi5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcGw0IHB0MFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctOFwiPlxuICAgICAgICAgICAgICAgIHtnZXRDYWJEb21lc3RpY09wdGlvbnMob3B0aW9ucyl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWI4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXRfZWRpdGNhYnMgZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaWdodC1pbmNsdWRlZCBjb2wtbWQtOCBwcjAgcGwwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ3OSByZWxhdGl2ZSBtMCBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWdodC1pY29uIGlucHV0LTI0IHJlbGF0aXZlIGJsb2NrIG1yOFwiPjxDYWJJY29uRnJvbnQgLz48L3NwYW4+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjE0cCBmdzcgc2ZjNic+e2NhYlJlcXVpcmVkUHJlZmVyZW5jZS50aXRsZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgZmxleFwiPlxuICAgICAgICAgICAge2dldENhYk9wdGlvbnMoY2FiUmVxdWlyZWRQcmVmZXJlbmNlLCAnJywgJ2NhYi1yYWRpbyBoaWRlJyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7Z2V0Q2FiTmVzdGVkUXVlc3Rpb24oKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhYkZpZWxkcztcblxuQ2FiRmllbGRzLnByb3BUeXBlcyA9IHtcbiAgY2FiUmVxdWlyZWRQcmVmZXJlbmNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNhYlF1ZXN0aW9uc1ByZWZlcmVuY2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGVzdGluYXRpb25zTGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHNpbmdsZU9wdGlvblZhbHVlczogUHJvcFR5cGVzLm9iamVjdFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgRmxpZ2h0cyB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHRmxpZ2h0UmFkaW9EaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLmZsaWdodC1yYWRpbyc6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH0sXG4gICcmIC5mbGlnaHQtcmFkaW86Y2hlY2tlZCArIGxhYmVsIHAnOiB7XG4gICAgY29sb3I6ICcjMjBBMzk3ICFpbXBvcnRhbnQnLFxuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICB9LFxufSk7XG5cbmNvbnN0IHJlbmRlckZsaWdodE9wdGlvbiA9IGZsaWdodE9wdGlvbiA9PlxuICA8R0ZsaWdodFJhZGlvRGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwgcDgnIGtleT17ZmxpZ2h0T3B0aW9uLmlkfT5cbiAgICA8RmllbGRcbiAgICAgIG5hbWU9XCJmbGlnaHRBbnN3ZXJBdHRyaWJ1dGVzW29wdGlvbklkXVwiXG4gICAgICBpZD17YGZsaWdodC1pbmNsdWRlZCR7ZmxpZ2h0T3B0aW9uLmlkfWB9XG4gICAgICBjb21wb25lbnQ9XCJpbnB1dFwiXG4gICAgICBjbGFzc05hbWU9XCJmbGlnaHQtcmFkaW8gaGlkZVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgdmFsdWU9e2ZsaWdodE9wdGlvbi5pZC50b1N0cmluZygpfVxuICAgIC8+XG4gICAgPGxhYmVsIGh0bWxGb3I9e2BmbGlnaHQtaW5jbHVkZWQke2ZsaWdodE9wdGlvbi5pZH1gfSBjbGFzc05hbWU9XCJibG9jayBjdXJzb3JQIHByOCBwbDhcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIGYxNHAgZnc3IHNmYzZcIj5cbiAgICAgICAge2ZsaWdodE9wdGlvbi5uYW1lfVxuICAgICAgPC9wPlxuICAgIDwvbGFiZWw+XG4gIDwvR0ZsaWdodFJhZGlvRGl2PjtcblxuY29uc3QgcmVuZGVyRmxpZ2h0T3B0aW9ucyA9IGZsaWdodE9wdGlvbnMgPT5cbiAgZmxpZ2h0T3B0aW9ucy5tYXAoZmxpZ2h0T3B0aW9uID0+IHJlbmRlckZsaWdodE9wdGlvbihmbGlnaHRPcHRpb24pKTtcblxuY29uc3QgRmxpZ2h0Qm9va2luZyA9ICh7IGZsaWdodE9wdGlvbnMgfSkgPT4ge1xuICBpZiAoIWZsaWdodE9wdGlvbnMpIHtcbiAgICByZXR1cm4gPHNwYW4gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2Vlbic+XG4gICAgICA8bGFiZWwgaHRtbEZvcj0nZmxpZ2h0cycgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIG0wIGYxNHAgZnc3Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdibG9jayBtcjggaW5wdXQtMjQnPjxGbGlnaHRzIC8+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT0nZjE0cCBmdzcgc2ZjNic+RmxpZ2h0czwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciB0ZXh0LXVwcGVyY2FzZSc+e3JlbmRlckZsaWdodE9wdGlvbnMoZmxpZ2h0T3B0aW9ucy5vcHRpb25zKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuRmxpZ2h0Qm9va2luZy5wcm9wVHlwZXMgPSB7XG4gIGZsaWdodE9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0Qm9va2luZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuY29uc3QgZ2V0UmFkaW9Db21wb25lbnQgPSAocHJlZmVyZW5jZUlkLCBvcHRpb24sIGVsZW1lbnRJZCkgPT5cbiAgPGRpdiBrZXk9e29wdGlvbi5pZH0gY2xhc3NOYW1lPVwicDVcIj5cbiAgICA8RmllbGRcbiAgICAgIG5hbWU9e2BzaW5nbGVWYWx1ZU9wdGlvbnNbJHtwcmVmZXJlbmNlSWR9XVtvcHRpb25JZF1gfVxuICAgICAgY29tcG9uZW50PVwiaW5wdXRcIlxuICAgICAgY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uXCJcbiAgICAgIGlkPXtlbGVtZW50SWR9XG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgXG4gICAgICB2YWx1ZT17b3B0aW9uLmlkLnRvU3RyaW5nKCl9XG4gICAgLz5cbiAgICA8bGFiZWxcbiAgICAgIGh0bWxGb3I9e2VsZW1lbnRJZH1cbiAgICAgIGNsYXNzTmFtZT1cImN1cnNvclAgcGwxNSBwcjE1XCJcbiAgICA+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtMFwiPntvcHRpb24ubmFtZX08L3A+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+O1xuXG5jb25zdCBnZXRDaGVja2JveENvbXBvbmVudCA9IChwcmVmZXJlbmNlSWQsIG9wdGlvbiwgZWxlbWVudElkKSA9PlxuICA8ZGl2IGtleT17b3B0aW9uLmlkfSBjbGFzc05hbWU9XCJwNVwiPlxuICAgIDxGaWVsZFxuICAgICAgbmFtZT17YG11bHRpVmFsdWVPcHRpb25zWyR7cHJlZmVyZW5jZUlkfV1bb3B0aW9uSWRdWyR7b3B0aW9uLmlkfV1gfVxuICAgICAgY29tcG9uZW50PVwiaW5wdXRcIlxuICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgIGlkPXtlbGVtZW50SWR9XG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIC8+XG4gICAgPGxhYmVsXG4gICAgICBodG1sRm9yPXtlbGVtZW50SWR9XG4gICAgICBjbGFzc05hbWU9XCJjdXJzb3JQIHBsMjQgcHIyNCBwdDUgcGI1XCJcbiAgICA+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtMFwiPntvcHRpb24ubmFtZX08L3A+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+O1xuXG5jb25zdCBnZXRPcHRpb25zID0gcHJlZmVyZW5jZSA9PiAoXG4gIHByZWZlcmVuY2Uub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGBvcHRpb24tcmFkaW8tJHtvcHRpb24uaWR9YDtcbiAgICBpZiAocHJlZmVyZW5jZS52YWx1ZVR5cGUgPT09ICdzaW5nbGVfdmFsdWUnKSB7XG4gICAgICByZXR1cm4gZ2V0UmFkaW9Db21wb25lbnQocHJlZmVyZW5jZS5pZCwgb3B0aW9uLCBlbGVtZW50SWQpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2hlY2tib3hDb21wb25lbnQocHJlZmVyZW5jZS5pZCwgb3B0aW9uLCBlbGVtZW50SWQpO1xuICB9KVxuKTtcblxuLy8gey8qIDxGaWx0ZXJDbGVhciAvPiAqL31cbmNvbnN0IFNpbmdsZVZhbHVlZEZpZWxkID0gKHsgcHJlZmVyZW5jZSB9KSA9PlxuICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHdpbGwtYm9vay1jb21wXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBmdzcgc2ZjNiBtMCBpYmxvY2sgcGIzXCI+e3ByZWZlcmVuY2UudGl0bGV9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcGw0IHB0MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LTggZmxleCBmbGV4V3JhcFwiPlxuICAgICAgICB7Z2V0T3B0aW9ucyhwcmVmZXJlbmNlKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG5cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlVmFsdWVkRmllbGQ7XG5cblNpbmdsZVZhbHVlZEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgcHJlZmVyZW5jZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCB7XG4gIENhYkN1c3RvbWl6YXRpb25EZXRhaWwgYXMgQ2FiQ3VzdG9taXphdGlvbnMsIEZpeGVkQ3VzdG9taXphdGlvbklkcyxcbiAgRmxpZ2h0Q3VzdG9taXphdGlvbkRldGFpbCBhcyBGbGlnaHRDdXN0b21pemF0aW9uLFxuICBIb3RlbEN1c3RvbWl6YXRpb25EZXRhaWwgYXMgSG90ZWxDdXN0b21pemF0aW9uLCBIb3RlbFJlcXVpcmVkSWRzXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmxpZ2h0QW5zd2VyQXR0cihjdXN0b21pemF0aW9ucywgc2VsZWN0ZWRBbnN3ZXJzKSB7XG4gIGNvbnN0IGZsaWdodEF0dHJzID0geyBjdXN0b21pemF0aW9uSWQ6IEZsaWdodEN1c3RvbWl6YXRpb24uaWQgfTtcbiAgY29uc3QgZmxpZ2h0T3B0aW9uID0gY3VzdG9taXphdGlvbnMuZmluZChlID0+IGUuaWQgPT09IEZsaWdodEN1c3RvbWl6YXRpb24uaWQpO1xuICBjb25zdCBmbGlnaHRTZWxlY3RlZEFucyA9XG4gICAgc2VsZWN0ZWRBbnN3ZXJzLmZpbmQoZSA9PiBmbGlnaHRPcHRpb24ub3B0aW9ucy5tYXAoZWwgPT4gKGVsLmlkKSkuaW5kZXhPZihlLm9wdGlvbklkKSAhPT0gLTEpO1xuXG4gIGlmIChmbGlnaHRTZWxlY3RlZEFucykge1xuICAgIGZsaWdodEF0dHJzLm9wdGlvbklkID0gZmxpZ2h0U2VsZWN0ZWRBbnMub3B0aW9uSWQudG9TdHJpbmcoKTtcbiAgICBmbGlnaHRBdHRycy5pZCA9IGZsaWdodFNlbGVjdGVkQW5zLmlkO1xuICB9XG5cbiAgcmV0dXJuIGZsaWdodEF0dHJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRIb3RlbElkcyhjdXN0b21pemF0aW9ucywgc2VsZWN0ZWRBbnN3ZXJzKSB7XG4gIGNvbnN0IHNlbGVjdGVkSG90ZWxJZHMgPSB7fTtcbiAgY29uc3QgaG90ZWxDYXRlZ29yeU9wdGlvbiA9IGN1c3RvbWl6YXRpb25zLmZpbmQoZSA9PiBlLmlkID09PSBIb3RlbEN1c3RvbWl6YXRpb24uY2F0ZWdvcnkuaWQpO1xuICBjb25zdCBob3RlbE9wdGlvbnMgPSBob3RlbENhdGVnb3J5T3B0aW9uLm9wdGlvbnM7XG5cbiAgaG90ZWxPcHRpb25zLm1hcCgoaG90ZWxPcHRpb24pID0+IHtcbiAgICBzZWxlY3RlZEhvdGVsSWRzW2hvdGVsT3B0aW9uLmlkXSA9IGZhbHNlO1xuICB9KTtcblxuICBzZWxlY3RlZEFuc3dlcnMubWFwKChob3RlbE9wdGlvbikgPT4ge1xuICAgIGlmIChzZWxlY3RlZEhvdGVsSWRzW2hvdGVsT3B0aW9uLm9wdGlvbklkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RlZEhvdGVsSWRzW2hvdGVsT3B0aW9uLm9wdGlvbklkXSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc2VsZWN0ZWRIb3RlbElkcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSG90ZWxSZXF1aXJlZChjdXN0b21pemF0aW9ucywgc2VsZWN0ZWRPcHRpb25zKSB7XG4gIGNvbnN0IGhvdGVsUmVxdWlyZWRPcHRpb24gPSBjdXN0b21pemF0aW9ucy5maW5kKGUgPT4gZS5pZCA9PT0gSG90ZWxDdXN0b21pemF0aW9uLnJlcXVpcmVkLmlkKTtcblxuICBjb25zdCBob3RlbFJlcXVpcmVkU2VsZWN0ZWRPcHRpb24gPSBob3RlbFJlcXVpcmVkT3B0aW9uLm9wdGlvbnMuZmluZChvcHRpb24gPT4gc2VsZWN0ZWRPcHRpb25zW29wdGlvbi5pZF0pO1xuXG4gIHJldHVybiBob3RlbFJlcXVpcmVkU2VsZWN0ZWRPcHRpb24gJiYgaG90ZWxSZXF1aXJlZFNlbGVjdGVkT3B0aW9uLm5hbWUgPT09ICdZZXMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHJpdmVyTGFuZ3VhZ2UoY3VzdG9taXphdGlvbnMsIHNpbmdsZVZhbHVlT3B0aW9ucywgc2VsZWN0ZWRBbnN3ZXJzLCBzZWxlY3RlZE9wdGlvbnMpIHtcbiAgbGV0IGRyaXZlclNwZWFrcyA9IHVuZGVmaW5lZDtcbiAgY29uc3QgY2FiUXVlc3Rpb25zUHJlZmVyZW5jZSA9IGdldENhYlF1ZXN0aW9uc1ByZWZlcmVuY2UoY3VzdG9taXphdGlvbnMpO1xuICBpZiAoY2FiUXVlc3Rpb25zUHJlZmVyZW5jZSkge1xuICAgIHNpbmdsZVZhbHVlT3B0aW9uc1tjYWJRdWVzdGlvbnNQcmVmZXJlbmNlLmlkXSA9IHsgb3B0aW9uSWQ6ICcnIH07XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24xID0gY2FiUXVlc3Rpb25zUHJlZmVyZW5jZS5vcHRpb25zLmZpbmQoZSA9PiBzZWxlY3RlZE9wdGlvbnNbZS5pZF0pO1xuICAgIGlmIChzZWxlY3RlZE9wdGlvbjEpIHtcbiAgICAgIHNpbmdsZVZhbHVlT3B0aW9uc1tjYWJRdWVzdGlvbnNQcmVmZXJlbmNlLmlkXS5vcHRpb25JZCA9IHNlbGVjdGVkT3B0aW9uMS5pZC50b1N0cmluZygpO1xuXG4gICAgICBpZiAoc2luZ2xlVmFsdWVPcHRpb25zW2NhYlF1ZXN0aW9uc1ByZWZlcmVuY2UuaWRdLm9wdGlvbklkID09PSBDYWJDdXN0b21pemF0aW9ucy5kb21lc3RpY0Rlc3RpbmF0aW9uT3B0aW9uSWQudG9TdHJpbmcoKSkge1xuICAgICAgICBkcml2ZXJTcGVha3MgPSBzZWxlY3RlZEFuc3dlcnMuZmluZChlID0+IHNlbGVjdGVkT3B0aW9uc1tzZWxlY3RlZE9wdGlvbjEuaWRdID09PSBlLmlkKS51c2VySW5wdXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkcml2ZXJTcGVha3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdGhlclByZWZlcmVuY2VzT3B0aW9ucyhwcmVmZXJlbmNlcykge1xuICBjb25zdCBwcmVmZXJlbmNlRGF0YSA9IHByZWZlcmVuY2VzLnByZWZlcmVuY2VzRGF0YSB8fCB7fTtcbiAgY29uc3QgY3VzdG9taXphdGlvbnMgPSBwcmVmZXJlbmNlRGF0YS5jdXN0b21pemF0aW9ucyB8fCBbXTtcbiAgcmV0dXJuIGN1c3RvbWl6YXRpb25zLmZpbHRlcihjdXN0b21pemF0aW9uID0+XG4gICAgRml4ZWRDdXN0b21pemF0aW9uSWRzLmluZGV4T2YoY3VzdG9taXphdGlvbi5pZCkgPCAwXG4gICkuc29ydCgoYSwgYikgPT4gYS5zZXF1ZW5jZSAtIGIuc2VxdWVuY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxpZ2libGVBbnN3ZXJzT2JqKGVsaWdpYmxlQW5zd2Vycykge1xuICBjb25zdCBhbnN3ZXJzT2JqID0ge307XG4gIGZvciAoY29uc3Qgb3B0aW9uIG9mIGVsaWdpYmxlQW5zd2Vycykge1xuICAgIGFuc3dlcnNPYmpbb3B0aW9uLm9wdGlvbklkXSA9IG9wdGlvbi5pZDtcbiAgfVxuXG4gIHJldHVybiBhbnN3ZXJzT2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJpcFByZWZJbml0aWFsRm9ybURhdGEocHJlZmVyZW5jZXMpIHsgIC8vIGVycm9yXG4gIGNvbnN0IG11bHRpVmFsdWVPcHRpb25zID0ge307XG4gIGNvbnN0IHNpbmdsZVZhbHVlT3B0aW9ucyA9IHt9O1xuXG4gIGNvbnN0IHNlbGVjdGVkQW5zd2VycyA9IHByZWZlcmVuY2VzLnByZWZlcmVuY2VzRGF0YS5lbGlnaWJsZUFuc3dlcnM7XG5cbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gZ2V0RWxpZ2libGVBbnN3ZXJzT2JqKHNlbGVjdGVkQW5zd2Vycyk7XG5cbiAgY29uc3Qgb3RoZXJPcHRpb25zID0gZ2V0T3RoZXJQcmVmZXJlbmNlc09wdGlvbnMocHJlZmVyZW5jZXMpO1xuICBmb3IgKGNvbnN0IHByZWZlcmVuY2Ugb2Ygb3RoZXJPcHRpb25zKSB7XG4gICAgaWYgKHByZWZlcmVuY2UudmFsdWVUeXBlID09PSAnc2luZ2xlX3ZhbHVlJykge1xuICAgICAgc2luZ2xlVmFsdWVPcHRpb25zW3ByZWZlcmVuY2UuaWRdID0geyBvcHRpb25JZDogJycgfTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gcHJlZmVyZW5jZS5vcHRpb25zLmZpbmQoZSA9PiBzZWxlY3RlZE9wdGlvbnNbZS5pZF0pO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgc2luZ2xlVmFsdWVPcHRpb25zW3ByZWZlcmVuY2UuaWRdLm9wdGlvbklkID0gc2VsZWN0ZWRPcHRpb24uaWQudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbXVsdGlWYWx1ZU9wdGlvbnNbcHJlZmVyZW5jZS5pZF0gPSB7IG9wdGlvbklkOiB7fSB9O1xuICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgcHJlZmVyZW5jZS5vcHRpb25zKSB7XG4gICAgICAgIG11bHRpVmFsdWVPcHRpb25zW3ByZWZlcmVuY2UuaWRdLm9wdGlvbklkW29wdGlvbi5pZF0gPSBzZWxlY3RlZE9wdGlvbnNbb3B0aW9uLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgY3VzdG9taXphdGlvbnMgPSBwcmVmZXJlbmNlcy5wcmVmZXJlbmNlc0RhdGEuY3VzdG9taXphdGlvbnM7XG4gIGNvbnN0IGNhYlJlcXVpcmVkUHJlZmVyZW5jZSA9IGdldENhYlJlcXVpcmVkUHJlZmVyZW5jZShjdXN0b21pemF0aW9ucyk7XG5cbiAgaWYgKGNhYlJlcXVpcmVkUHJlZmVyZW5jZSkge1xuICAgIHNpbmdsZVZhbHVlT3B0aW9uc1tjYWJSZXF1aXJlZFByZWZlcmVuY2UuaWRdID0geyBvcHRpb25JZDogJycgfTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGNhYlJlcXVpcmVkUHJlZmVyZW5jZS5vcHRpb25zLmZpbmQoZSA9PiBzZWxlY3RlZE9wdGlvbnNbZS5pZF0pO1xuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgc2luZ2xlVmFsdWVPcHRpb25zW2NhYlJlcXVpcmVkUHJlZmVyZW5jZS5pZF0ub3B0aW9uSWQgPSBzZWxlY3RlZE9wdGlvbi5pZC50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRyaXZlclNwZWFrcyA9IGdldERyaXZlckxhbmd1YWdlKGN1c3RvbWl6YXRpb25zLCBzaW5nbGVWYWx1ZU9wdGlvbnMsIHNlbGVjdGVkQW5zd2Vycywgc2VsZWN0ZWRPcHRpb25zKTtcbiAgY29uc3QgZmxpZ2h0QXR0cnMgPSBnZXRGbGlnaHRBbnN3ZXJBdHRyKGN1c3RvbWl6YXRpb25zLCBzZWxlY3RlZEFuc3dlcnMpO1xuICBjb25zdCBzZWxlY3RlZEhvdGVsSWRzID0gZ2V0U2VsZWN0ZWRIb3RlbElkcyhjdXN0b21pemF0aW9ucywgc2VsZWN0ZWRBbnN3ZXJzKTtcbiAgc2VsZWN0ZWRIb3RlbElkc1tIb3RlbFJlcXVpcmVkSWRzLk5PVF9SRVFVSVJFRF0gPSAhaXNIb3RlbFJlcXVpcmVkKGN1c3RvbWl6YXRpb25zLCBzZWxlY3RlZE9wdGlvbnMpO1xuXG4gIHJldHVybiB7XG4gICAgaW5mbzogcHJlZmVyZW5jZXMuaW5mbyxcbiAgICBidWRnZXQ6IHByZWZlcmVuY2VzLmJ1ZGdldCxcbiAgICBmbGlnaHRBbnN3ZXJBdHRyaWJ1dGVzOiBmbGlnaHRBdHRycyxcbiAgICBkcml2ZXJTcGVha3MsXG4gICAgaG90ZWxDYXRlZ29yaWVzOiBzZWxlY3RlZEhvdGVsSWRzLFxuICAgIHNpbmdsZVZhbHVlT3B0aW9uczogc2luZ2xlVmFsdWVPcHRpb25zLFxuICAgIG11bHRpVmFsdWVPcHRpb25zOiBtdWx0aVZhbHVlT3B0aW9ucyxcbiAgICBvdGhlclByZWZlcmVuY2VzOiBvdGhlck9wdGlvbnNcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENhYlJlcXVpcmVkUHJlZmVyZW5jZSA9IChjdXN0b21pemF0aW9ucykgPT4gY3VzdG9taXphdGlvbnMuZmluZChlID0+IGUuaWQgPT09IENhYkN1c3RvbWl6YXRpb25zLnJlcXVpcmVkLmlkKTtcblxuZXhwb3J0IGNvbnN0IGdldENhYlF1ZXN0aW9uc1ByZWZlcmVuY2UgPSAoY3VzdG9taXphdGlvbnMpID0+IGN1c3RvbWl6YXRpb25zLmZpbmQoZSA9PiBlLmlkID09PSBDYWJDdXN0b21pemF0aW9ucy5xdWVzdGlvbnMuaWQpO1xuXG5jb25zdCBnZXRMYWJlbCA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgbGFiZWwgPSAnJztcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGxhYmVsID0gJ05vdCBSZXF1aXJlZCc7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2luY2x1ZGVkJykge1xuICAgIGxhYmVsID0gJ1llcyc7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2V4Y2x1ZGVkJykge1xuICAgIGxhYmVsID0gJ05vJztcbiAgfVxuICBlbHNlIHtcbiAgICBsYWJlbCA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb25zID0gKG9wdGlvbnMsIGVsaWdpYmxlQW5zd2VycykgPT4ge1xuICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlbGlnaWJsZUFuc3dlcnNbb3B0aW9uLmlkXTtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbi5uYW1lKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0ZWRPcHRpb25zO1xufTtcblxuY29uc3QgZ2V0RmllbGRPYmplY3QgPSAobGFiZWwsIHZhbHVlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGFiZWwsXG4gICAgdmFsdWVcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUcmlwUHJlZmVyZW5jZXMgPSAocHJlZmVyZW5jZXMpID0+IHtcbiAgY29uc3QgeyBwcmVmZXJlbmNlc0RhdGE6IHsgZWxpZ2libGVBbnN3ZXJzOiBzZWxlY3RlZEFuc3dlcnMgfSB9ID0gcHJlZmVyZW5jZXM7XG5cbiAgY29uc3QgZWxpZ2libGVBbnN3ZXJzID0gZ2V0RWxpZ2libGVBbnN3ZXJzT2JqKHNlbGVjdGVkQW5zd2Vycyk7XG5cbiAgY29uc3Qgb3RoZXJQcmVmZXJlbmNlcyA9IGdldE90aGVyUHJlZmVyZW5jZXNPcHRpb25zKHByZWZlcmVuY2VzKTtcbiAgY29uc3Qgb3RoZXJQcmVmRmllbGRzID0gb3RoZXJQcmVmZXJlbmNlcy5tYXAoKHByZWZlcmVuY2UpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBnZXRTZWxlY3RlZE9wdGlvbnMocHJlZmVyZW5jZS5vcHRpb25zLCBlbGlnaWJsZUFuc3dlcnMpO1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogcHJlZmVyZW5jZS50aXRsZSxcbiAgICAgIHZhbHVlOiBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID8gc2VsZWN0ZWRPcHRpb25zLmpvaW4oJywgJykgOiAnLSdcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gW1xuICAgIGdldEZpZWxkT2JqZWN0KCdIb3RlbCcsIHByZWZlcmVuY2VzLmV4Y2x1c2l2ZVByZWZlcmVuY2VzVmFsdWVzLmhvdGVscyB8fCAnLScpLFxuICAgIGdldEZpZWxkT2JqZWN0KCdGbGlnaHQnLCBwcmVmZXJlbmNlcy5leGNsdXNpdmVQcmVmZXJlbmNlc1ZhbHVlcy5mbGlnaHRzIHx8ICctJyksXG4gICAgZ2V0RmllbGRPYmplY3QoJ0J1ZGdldCBQZXIgUGVyc29uJywgcHJlZmVyZW5jZXMuYnVkZ2V0IHx8ICctJyksXG4gICAgZ2V0RmllbGRPYmplY3QoJ0NhYnMnLCBwcmVmZXJlbmNlcy5leGNsdXNpdmVQcmVmZXJlbmNlc1ZhbHVlcy5jYWJzIHx8ICctJyksXG4gICAgLi4ub3RoZXJQcmVmRmllbGRzLFxuICAgIGdldEZpZWxkT2JqZWN0KCdBZGRpdGlvbmFsIFByZWZlcmVuY2VzJywgcHJlZmVyZW5jZXMuaW5mbyB8fCAnLScpLFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RQcmVmZXJlbmNlcyA9IChwcmVmZXJlbmNlcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uOiBwcmVmZXJlbmNlcy50b0xvYyxcbiAgICBkZXBhcnR1cmVDaXR5OiBwcmVmZXJlbmNlcy5mcm9tTG9jLFxuICAgIGRlcGFydHVyZURhdGU6IHByZWZlcmVuY2VzLnN0YXJ0RGF0ZSxcbiAgICBkYXlzOiBwcmVmZXJlbmNlcy5uaWdodHMgKyAxLFxuICAgIG5pZ2h0czogcHJlZmVyZW5jZXMubmlnaHRzLFxuICAgIGFkdWx0czogcHJlZmVyZW5jZXMuYWR1bHQsXG4gICAgY2hpbGRyZW46IHByZWZlcmVuY2VzLmNoaWxkLFxuICAgIHRyaXBEYXlzOiBwcmVmZXJlbmNlcy50cmlwRGF5cyxcbiAgICB0cmlwU3RhZ2U6IHByZWZlcmVuY2VzLnRyaXBTdGFnZVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbnRhY3RQcmVmZXJlbmNlcyA9IChwcmVmZXJlbmNlcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGVtYWlsOiBwcmVmZXJlbmNlcy50cmlwRW1haWwsXG4gICAgcGhvbmVObzogcHJlZmVyZW5jZXMucHJpbWFyeVBob25lTm8ucGhvbmVObyxcbiAgICBpc2RDb2RlOiBwcmVmZXJlbmNlcy5wcmltYXJ5UGhvbmVOby5pc2RcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgcHVzaCwgZ29CYWNrIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcblxuaW1wb3J0IFByZWZlcmVuY2VzIGZyb20gJy4vUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgdXBkYXRlUHJlZmVyZW5jZXMgfSBmcm9tICcuL2FjdGlvbic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBjdXJyZW50VHJpcElkOiBzdGF0ZS50cmlwLmN1cnJlbnRUcmlwLmRhdGEuaWQsXG4gICAgcHJlZmVyZW5jZXM6IHN0YXRlLnRyaXAucHJlZmVyZW5jZXMucHJlZmVyZW5jZU9wdGlvbnMsXG4gICAgdXBkYXRlZDogc3RhdGUudHJpcC5wcmVmZXJlbmNlcy51cGRhdGVkLFxuICAgIGVycm9yczogc3RhdGUudHJpcC5wcmVmZXJlbmNlcy5lcnJvcnNcbiAgfSksXG4gIHtcbiAgICBwdXNoLFxuICAgIGdvQmFjayxcbiAgICB1cGRhdGVQcmVmZXJlbmNlcyxcbiAgfVxuKShQcmVmZXJlbmNlcykpO1xuXG4vKipcbiAqIFByZWZlcmVuY2UgU2VjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge1xuICAgIHVwZGF0ZVByZWZlcmVuY2VzLFxuICB9XG59O1xuIiwiaW1wb3J0IHRyaXAgZnJvbSAnbW9kdWxlcy90cmlwL3JlZHVjZXJzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgdHJpcFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDb250YWN0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuaW1wb3J0IHsgR1ByZWZlcmVuY2VEaXYgfSBmcm9tICcuL0cnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgQ29udGFjdERldGFpbHNFZGl0Rm9ybSBmcm9tICcuLi9lZGl0L0NvbnRhY3REZXRhaWxzJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IEVkaXRQcmVmZXJlbmNlc1BvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdFByZWZlcmVuY2VzUG9wdXAnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5cbmNsYXNzIENvbnRhY3REZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xvc2VNb2RhbDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy51cGRhdGVkICYmIG5leHRQcm9wcy51cGRhdGVkKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB1cGRhdGVDb250YWN0SW5mbyA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBpc2RfY29kZTogdmFsdWVzLmlzZENvZGUsXG4gICAgICByZXF1ZXN0ZWRfdHJpcDoge1xuICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxuICAgICAgICBwaG9uZV9ubzogdmFsdWVzLnBob25lTm9cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ0NvbnRhY3QgZGV0YWlscycsICcnLCAnQ29uZmlybScpO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHRoaXMucHJvcHMuY3VycmVudFRyaXBJZCwgcGFyYW1zKTtcbiAgfTtcblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChldmVudCwgc2VjdGlvbiwgb2JqZWN0LCBjdGEpID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoZXZlbnQsIHNlY3Rpb24sIG9iamVjdCwgY3RhKTtcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdFZGl0IHByZWZlcmVuY2VzIHdpbmRvdycsICdjb250YWN0JywgJ2VkaXQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgYWZ0ZXJNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ0NvbnRhY3QgZGV0YWlscycsICcnLCAnQ2FuY2VsJyk7XG4gIH07XG5cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmVmZXJlbmNlcywgaXNDb252ZXJ0ZWRUcmlwLCBpc0NhbmNlbGxlZFRyaXAsIG9wRGV0YWlscyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBwMTUgcGIwIGF0X2NvbnRhY3REZXRhaWxzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIG1iMTUnPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXIgZjE2IGZ3OSBtMCBmbGV4RnVsbCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Jsb2NrIGlucHV0LTI0IG1yOCc+PENvbnRhY3RJY29uIC8+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2ZjNiBhdF9oZWFkaW5nQ29udGVjdERldGFpbFwiPkNvbnRhY3QgRGV0YWlsczwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICAgIHshaXNDb252ZXJ0ZWRUcmlwIHx8IGlzQ2FuY2VsbGVkVHJpcCA/IDxNb2RhbFxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8c3BhbiBjbGFzc05hbWU9J3NmYzEgZjE0IGZ3NyBhdF9lZGl0MSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5FZGl0PC9zcGFuPn1cbiAgICAgICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgICAgICBjdXN0b21DbG9zZVRyaWdnZXI9e3RoaXMuc3RhdGUuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2VDdXN0b209e3RoaXMuYWZ0ZXJNb2RhbENsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29udGFjdERldGFpbHNFZGl0Rm9ybSBpbml0aWFsVmFsdWVzPXtwcmVmZXJlbmNlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMudXBkYXRlQ29udGFjdEluZm99IC8+XG4gICAgICAgICAgICA8L01vZGFsPiA6XG4gICAgICAgICAgICA8TW9kYWwgdHJpZ2dlcj17PHNwYW4gY2xhc3NOYW1lPSdzZmMxIGYxNCBmdzcgYXRfZWRpdDEnPkVkaXQ8L3NwYW4+fT5cbiAgICAgICAgICAgICAgPEVkaXRQcmVmZXJlbmNlc1BvcHVwIG9wRGV0YWlscz17b3BEZXRhaWxzfSBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9IC8+XG4gICAgICAgICAgICA8L01vZGFsPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXhXcmFwJz5cbiAgICAgICAgICA8R1ByZWZlcmVuY2VEaXYgY2xhc3NOYW1lPSdmbGV4RnVsbCBtYjE1IGJyZWFrLXdvcmQnPlxuICAgICAgICAgICAgPHA+RW1haWwgSUQ8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2F0X2VtYWlsJz57cHJlZmVyZW5jZXMuZW1haWx9PC9wPlxuICAgICAgICAgIDwvR1ByZWZlcmVuY2VEaXY+XG4gICAgICAgICAgPEdQcmVmZXJlbmNlRGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwgbWIxNSBicmVhay13b3JkJz5cbiAgICAgICAgICAgIDxwPlBob25lIE51bWJlcjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXRfcGhvbmUnPntwcmVmZXJlbmNlcy5waG9uZU5vID8gYCR7cHJlZmVyZW5jZXMuaXNkQ29kZX0ke3ByZWZlcmVuY2VzLnBob25lTm99YCA6ICctJ308L3A+XG4gICAgICAgICAgPC9HUHJlZmVyZW5jZURpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRhY3REZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudFRyaXBJZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBwcmVmZXJlbmNlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3BEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc0NvbnZlcnRlZFRyaXA6IFByb3BUeXBlcy5ib29sLFxuICBpc0NhbmNlbGxlZFRyaXA6IFByb3BUeXBlcy5ib29sLFxuICB1cGRhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkNvbnRhY3REZXRhaWxzLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3REZXRhaWxzO1xuIiwiaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgbnRoQ2hpbGQsIHJpZ2h0IH0gZnJvbSAnZ2xhbW9yJztcblxuZXhwb3J0IGNvbnN0IEdQcmVmZXJlbmNlRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1pbldpZHRoOiAnNTAlJyxcbiAgbWF4V2lkdGg6ICc1MCUnLFxuICAnOm50aC1jaGlsZChvZGQpJzp7XG4gICAgcGFkZGluZ1JpZ2h0IDogJzEycHgnXG4gIH0sXG4gICc6bnRoLWNoaWxkKGV2ZW4pJzp7XG4gICAgcGFkZGluZ0xlZnQgOiAnMTJweCdcbiAgfSxcbiAgJyYgcCc6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICBtYXJnaW46ICcwJ1xuICB9LFxuICAnJiBwOmZpcnN0LWNoaWxkJzoge1xuICAgIGNvbG9yOiAnI2IyYjJiMidcbiAgfSxcbiAgJyYgcDpsYXN0LWNoaWxkJzoge1xuICAgIGNvbG9yOiAnIzNFM0UzRSdcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgVFJJUF9TVEFHRVMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUmVxdWVzdEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBHUHJlZmVyZW5jZURpdiB9IGZyb20gJy4vRyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBSZXF1ZXN0RWRpdEZvcm0gZnJvbSAnLi4vZWRpdC9SZXF1ZXN0JztcbmltcG9ydCBFZGl0UHJlZmVyZW5jZXNQb3B1cCBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRQcmVmZXJlbmNlc1BvcHVwJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcblxuY2xhc3MgUmVxdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsb3NlTW9kYWw6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy51cGRhdGVkICYmIG5leHRQcm9wcy51cGRhdGVkKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChldmVudCwgc2VjdGlvbiwgb2JqZWN0LCBjdGEpID0+IHtcbiAgICByZXNjdWUoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoZXZlbnQsIHNlY3Rpb24sIG9iamVjdCwgY3RhKTtcbiAgICB9KTtcbiAgfTtcblxuICB1cGRhdGVSZXF1ZXN0UHJlZmVyZW5jZSA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICByZXF1ZXN0ZWRfdHJpcDoge1xuICAgICAgICB0b19sb2M6IHZhbHVlcy5kZXN0aW5hdGlvbixcbiAgICAgICAgZnJvbV9sb2M6IHZhbHVlcy5kZXBhcnR1cmVDaXR5LFxuICAgICAgICBzdGFydF9kYXRlOiB2YWx1ZXMuZGVwYXJ0dXJlRGF0ZSxcbiAgICAgICAgdHJpcF9kYXlzOiB2YWx1ZXMudHJpcERheXMsXG4gICAgICAgIGFkdWx0OiB2YWx1ZXMuYWR1bHRzLFxuICAgICAgICBjaGlsZDogdmFsdWVzLmNoaWxkcmVuLFxuICAgICAgICB0cmlwX3N0YWdlOiB2YWx1ZXMudHJpcFN0YWdlXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdyZXF1ZXN0JywgJycsICdDb25maXJtJyk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5wcm9wcy5jdXJyZW50VHJpcElkLCBwYXJhbXMpO1xuICB9O1xuXG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9DTElDS0VELCAnRWRpdCBwcmVmZXJlbmNlcyB3aW5kb3cnLCAncmVxdWVzdCcsICdlZGl0Jyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGFmdGVyTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdyZXF1ZXN0JywgJycsICdDYW5jZWwnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmVmZXJlbmNlcywgaXNDb252ZXJ0ZWRUcmlwLCBpc0NhbmNlbGxlZFRyaXAsIG9wRGV0YWlscywgZXJyb3JzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRyaXBTdGFnZSA9IFRSSVBfU1RBR0VTLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLmlkID09PSBwcmVmZXJlbmNlcy50cmlwU3RhZ2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHAxNSBwYjAgYXRfcmVxdWVzdCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlbiBtYjE1Jz5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIGYxNiBmdzkgbTAgZmxleEZ1bGwnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdibG9jayBpbnB1dC0yNCBtcjgnPjxSZXF1ZXN0SWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNmYzYgYXRfaGVhZGluZ1JlcXVlc3RcIj5SZXF1ZXN0PC9zcGFuPlxuICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgeyFpc0NvbnZlcnRlZFRyaXAgfHwgaXNDYW5jZWxsZWRUcmlwID9cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICB0cmlnZ2VyPXs8c3BhbiBjbGFzc05hbWU9J3NmYzEgZjE0IGZ3NyBhdF9lZGl0Micgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+RWRpdDwvc3Bhbj59XG4gICAgICAgICAgICAgIGZ1bGxWaWV3PXt0cnVlfVxuICAgICAgICAgICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX1cbiAgICAgICAgICAgICAgY3VzdG9tQ2xvc2VUcmlnZ2VyPXt0aGlzLnN0YXRlLmNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tPXt0aGlzLmFmdGVyTW9kYWxDbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlcXVlc3RFZGl0Rm9ybSBpbml0aWFsVmFsdWVzPXtwcmVmZXJlbmNlc30gZXJyb3JzPXtlcnJvcnN9IG9uU3VibWl0PXt0aGlzLnVwZGF0ZVJlcXVlc3RQcmVmZXJlbmNlfSAvPlxuICAgICAgICAgICAgPC9Nb2RhbD4gOlxuICAgICAgICAgICAgPE1vZGFsIHRyaWdnZXI9ezxzcGFuIGNsYXNzTmFtZT0nc2ZjMSBmMTQgZnc3IGF0X2VkaXQyJz5FZGl0PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxFZGl0UHJlZmVyZW5jZXNQb3B1cCBvcERldGFpbHM9e29wRGV0YWlsc30gY2xvc2VNb2RhbD17dGhpcy5jbG9zZU1vZGFsfSAvPlxuICAgICAgICAgICAgPC9Nb2RhbD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4V3JhcCc+XG4gICAgICAgICAgPEdQcmVmZXJlbmNlRGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwgbWIxNSBicmVhay13b3JkJz5cbiAgICAgICAgICAgIDxwPkRlc3RpbmF0aW9uPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhdF9kZXN0aW5hdGlvbic+e3ByZWZlcmVuY2VzLmRlc3RpbmF0aW9ufTwvcD5cbiAgICAgICAgICA8L0dQcmVmZXJlbmNlRGl2PlxuXG4gICAgICAgICAgPEdQcmVmZXJlbmNlRGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwgbWIxNSBicmVhay13b3JkJz5cbiAgICAgICAgICAgIDxwPkRlcGFydHVyZSBDaXR5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhdF9kZXBhcnR1cmVDaXR5Jz57cHJlZmVyZW5jZXMuZGVwYXJ0dXJlQ2l0eX08L3A+XG4gICAgICAgICAgPC9HUHJlZmVyZW5jZURpdj5cblxuICAgICAgICAgIDxHUHJlZmVyZW5jZURpdiBjbGFzc05hbWU9J2ZsZXhGdWxsIG1iMTUgYnJlYWstd29yZCc+XG4gICAgICAgICAgICA8cD5EZXBhcnR1cmUgRGF0ZTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXRfZGVwYXJ0dXJlRGF0ZSc+XG4gICAgICAgICAgICAgIHtwcmVmZXJlbmNlcy5kZXBhcnR1cmVEYXRlICYmIGZvcm1hdChwcmVmZXJlbmNlcy5kZXBhcnR1cmVEYXRlLCAnREQgTU1NIFlZWVknKX08L3A+XG4gICAgICAgICAgPC9HUHJlZmVyZW5jZURpdj5cblxuICAgICAgICAgIDxHUHJlZmVyZW5jZURpdiBjbGFzc05hbWU9J2ZsZXhGdWxsIG1iMTUgYnJlYWstd29yZCc+XG4gICAgICAgICAgICA8cD5EdXJhdGlvbjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXRfZHVyYXRpb24nPntgJHtwcmVmZXJlbmNlcy5kYXlzfSBEYXlzICYgJHtwcmVmZXJlbmNlcy5uaWdodHN9IE5pZ2h0c2B9PC9wPlxuICAgICAgICAgIDwvR1ByZWZlcmVuY2VEaXY+XG5cbiAgICAgICAgICA8R1ByZWZlcmVuY2VEaXYgY2xhc3NOYW1lPSdmbGV4RnVsbCBtYjE1IGJyZWFrLXdvcmQnPlxuICAgICAgICAgICAgPHA+VHJhdmVsZXJzPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhdF90cmF2ZWxlcnMnPntgJHtwcmVmZXJlbmNlcy5hZHVsdHN9IEFkdWx0cyAmICR7cHJlZmVyZW5jZXMuY2hpbGRyZW59IENoaWxkcmVuYH08L3A+XG4gICAgICAgICAgPC9HUHJlZmVyZW5jZURpdj5cblxuICAgICAgICAgIDxHUHJlZmVyZW5jZURpdiBjbGFzc05hbWU9J2ZsZXhGdWxsIG1iMTUgYnJlYWstd29yZCc+XG4gICAgICAgICAgICA8cD5UcmlwIFBsYW5uaW5nIFN0YWdlPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhdF90cmlwU3RhZ2UnPnt0cmlwU3RhZ2UgJiYgdHJpcFN0YWdlLm5hbWUgfHwgJy0nfTwvcD5cbiAgICAgICAgICA8L0dQcmVmZXJlbmNlRGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVxdWVzdC5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRUcmlwSWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKSxcbiAgcHJlZmVyZW5jZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9wRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNDb252ZXJ0ZWRUcmlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNDYW5jZWxsZWRUcmlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXBkYXRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yczogUHJvcFR5cGVzLmFycmF5LFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5SZXF1ZXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNDb252ZXJ0ZWRUcmlwOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBQcmVmZXJlbmNlc0ljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICd1dGlscy9wYXJzZXJzJztcbmltcG9ydCB7IEdQcmVmZXJlbmNlRGl2IH0gZnJvbSAnLi9HJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IFRyaXBQcmVmZXJlbmNlc0VkaXRGb3JtIGZyb20gJy4uL2VkaXQvVHJpcFByZWZlcmVuY2VzJztcbmltcG9ydCB7XG4gIEhvdGVsUmVxdWlyZWRJZHMsIEhvdGVsQ3VzdG9taXphdGlvbkRldGFpbCBhcyBIb3RlbEN1c3RvbWl6YXRpb24sXG4gIENhYkN1c3RvbWl6YXRpb25EZXRhaWwgYXMgQ2FiQ3VzdG9taXphdGlvbnNcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFRyaXBQcmVmZXJlbmNlcywgZ2V0RWxpZ2libGVBbnN3ZXJzT2JqIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZXNjdWUgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IEVkaXRQcmVmZXJlbmNlc1BvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdFByZWZlcmVuY2VzUG9wdXAnO1xuXG5jb25zdCBnZXRNdWx0aVZhbHVlQ3VzdG9taXphdGlvbiA9ICh2YWx1ZXMsIHNlbGVjdGVkT3B0aW9ucykgPT4ge1xuICBjb25zdCBjdXN0b21pemF0aW9uQXR0cnMgPSBbXTtcbiAgZm9yIChjb25zdCBjdXN0b21pemF0aW9uSWQgaW4gdmFsdWVzLm11bHRpVmFsdWVPcHRpb25zKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHZhbHVlcy5tdWx0aVZhbHVlT3B0aW9uc1tjdXN0b21pemF0aW9uSWRdLm9wdGlvbklkO1xuICAgIGZvciAoY29uc3Qgb3B0aW9uSWQgaW4gb3B0aW9ucykge1xuICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgIGlkOiBzZWxlY3RlZE9wdGlvbnNbb3B0aW9uSWRdLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBjdXN0b21pemF0aW9uSWQsXG4gICAgICAgIG9wdGlvbl9pZDogb3B0aW9uSWRcbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRpb25zW29wdGlvbklkXSkge1xuICAgICAgICBjdXN0b21pemF0aW9uQXR0cnMucHVzaChhdHRycyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9uc1tvcHRpb25JZF0pIHtcbiAgICAgICAgYXR0cnMuX2Rlc3Ryb3kgPSB0cnVlO1xuICAgICAgICBjdXN0b21pemF0aW9uQXR0cnMucHVzaChhdHRycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN1c3RvbWl6YXRpb25BdHRycztcbn07XG5cbmNvbnN0IGdldFNpbmdsZVZhbHVlQ3VzdG9taXphdGlvbiA9ICh2YWx1ZXMsIHNlbGVjdGVkT3B0aW9ucywgY3VzdG9taXphdGlvbnMpID0+IHtcbiAgY29uc3QgY3VzdG9taXphdGlvbkF0dHJzID0gW107XG5cbiAgZm9yIChjb25zdCBjdXN0b21pemF0aW9uSWQgaW4gdmFsdWVzLnNpbmdsZVZhbHVlT3B0aW9ucykge1xuICAgIGxldCBvcHRpb25JZCA9IHZhbHVlcy5zaW5nbGVWYWx1ZU9wdGlvbnNbY3VzdG9taXphdGlvbklkXS5vcHRpb25JZDtcbiAgICBjb25zdCBwcmV2T3B0aW9uID0gY3VzdG9taXphdGlvbnMuZmluZChlID0+IGUuaWQudG9TdHJpbmcoKSA9PT0gY3VzdG9taXphdGlvbklkKVxuICAgICAgLm9wdGlvbnMuZmluZChlID0+IHNlbGVjdGVkT3B0aW9uc1tlLmlkXSk7XG5cbiAgICBjb25zdCBwcmV2T3B0aW9uSWQgPSBwcmV2T3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uc1twcmV2T3B0aW9uLmlkXSB8fCBzZWxlY3RlZE9wdGlvbnNbb3B0aW9uSWRdO1xuICAgIGxldCB1c2VyX2lucHV0ID0gJyc7XG5cbiAgICBpZiAoY3VzdG9taXphdGlvbklkID09PSBDYWJDdXN0b21pemF0aW9ucy5xdWVzdGlvbnMuaWQudG9TdHJpbmcoKSAmJiB2YWx1ZXMuZHJpdmVyU3BlYWtzKSB7XG4gICAgICB1c2VyX2lucHV0ID0gdmFsdWVzLmRyaXZlclNwZWFrcztcbiAgICAgIG9wdGlvbklkID0gQ2FiQ3VzdG9taXphdGlvbnMuZG9tZXN0aWNEZXN0aW5hdGlvbk9wdGlvbklkO1xuICAgIH1cblxuICAgIGN1c3RvbWl6YXRpb25BdHRycy5wdXNoKFxuICAgICAge1xuICAgICAgICBpZDogcHJldk9wdGlvbklkLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBjdXN0b21pemF0aW9uSWQsXG4gICAgICAgIG9wdGlvbl9pZDogb3B0aW9uSWQsXG4gICAgICAgIHVzZXJfaW5wdXRcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGN1c3RvbWl6YXRpb25BdHRycztcbn07XG5cbmNvbnN0IGdldEhvdGVsQ3VzdG9taXphdGlvbiA9ICh2YWx1ZXMsIHNlbGVjdGVkT3B0aW9ucykgPT4ge1xuICBjb25zdCBjdXN0b21pemF0aW9uQXR0cnMgPSBbXTtcblxuICBsZXQgYW55SG90ZWxTdGFyU2VsZWN0ZWQgPSBmYWxzZTtcbiAgbGV0IGhvdGVsTm90UmVxdWlyZWQgPSBmYWxzZTtcblxuICBmb3IgKGNvbnN0IGhvdGVsSWRLZXkgaW4gdmFsdWVzLmhvdGVsQ2F0ZWdvcmllcykge1xuICAgIGNvbnN0IGhvdGVsSWQgPSBwYXJzZUludChob3RlbElkS2V5LCAxMCk7XG4gICAgY29uc3QgaG90ZWxTdGFyU2VsZWN0ZWQgPSB2YWx1ZXMuaG90ZWxDYXRlZ29yaWVzW2hvdGVsSWRLZXldO1xuXG4gICAgaWYgKGhvdGVsSWQgPT09IEhvdGVsUmVxdWlyZWRJZHMuTk9UX1JFUVVJUkVEKSB7XG4gICAgICBob3RlbE5vdFJlcXVpcmVkID0gaG90ZWxTdGFyU2VsZWN0ZWQ7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkT3B0aW9uc1tob3RlbElkXTtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBzZWxlY3RlZCxcbiAgICAgIG9wdGlvbl9pZDogaG90ZWxJZCxcbiAgICAgIGN1c3RvbWl6YXRpb25faWQ6IEhvdGVsQ3VzdG9taXphdGlvbi5jYXRlZ29yeS5pZCxcbiAgICB9O1xuICAgIGlmIChob3RlbFN0YXJTZWxlY3RlZCkge1xuICAgICAgYW55SG90ZWxTdGFyU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgY3VzdG9taXphdGlvbkF0dHJzLnB1c2goYXR0cnMpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGF0dHJzLl9kZXN0cm95ID0gdHJ1ZTtcbiAgICAgIGN1c3RvbWl6YXRpb25BdHRycy5wdXNoKGF0dHJzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoaG90ZWxOb3RSZXF1aXJlZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRPcHRpb25zW0hvdGVsUmVxdWlyZWRJZHMuUkVRVUlSRURdO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgY3VzdG9taXphdGlvbkF0dHJzLnB1c2goe1xuICAgICAgICBpZDogc2VsZWN0ZWRPcHRpb25zW0hvdGVsUmVxdWlyZWRJZHMuUkVRVUlSRURdLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBIb3RlbEN1c3RvbWl6YXRpb24ucmVxdWlyZWQuaWQsXG4gICAgICAgIG9wdGlvbl9pZDogSG90ZWxSZXF1aXJlZElkcy5SRVFVSVJFRCxcbiAgICAgICAgX2Rlc3Ryb3k6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjdXN0b21pemF0aW9uQXR0cnMucHVzaCh7XG4gICAgICBpZDogc2VsZWN0ZWRPcHRpb25zW0hvdGVsUmVxdWlyZWRJZHMuTk9UX1JFUVVJUkVEXSxcbiAgICAgIGN1c3RvbWl6YXRpb25faWQ6IEhvdGVsQ3VzdG9taXphdGlvbi5yZXF1aXJlZC5pZCxcbiAgICAgIG9wdGlvbl9pZDogSG90ZWxSZXF1aXJlZElkcy5OT1RfUkVRVUlSRURcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChhbnlIb3RlbFN0YXJTZWxlY3RlZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRPcHRpb25zW0hvdGVsUmVxdWlyZWRJZHMuTk9UX1JFUVVJUkVEXTtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIGN1c3RvbWl6YXRpb25BdHRycy5wdXNoKHtcbiAgICAgICAgaWQ6IHNlbGVjdGVkT3B0aW9uc1tIb3RlbFJlcXVpcmVkSWRzLk5PVF9SRVFVSVJFRF0sXG4gICAgICAgIGN1c3RvbWl6YXRpb25faWQ6IEhvdGVsQ3VzdG9taXphdGlvbi5yZXF1aXJlZC5pZCxcbiAgICAgICAgb3B0aW9uX2lkOiBIb3RlbFJlcXVpcmVkSWRzLk5PVF9SRVFVSVJFRCxcbiAgICAgICAgX2Rlc3Ryb3k6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjdXN0b21pemF0aW9uQXR0cnMucHVzaCh7XG4gICAgICBpZDogc2VsZWN0ZWRPcHRpb25zW0hvdGVsUmVxdWlyZWRJZHMuUkVRVUlSRURdLFxuICAgICAgY3VzdG9taXphdGlvbl9pZDogSG90ZWxDdXN0b21pemF0aW9uLnJlcXVpcmVkLmlkLFxuICAgICAgb3B0aW9uX2lkOiBIb3RlbFJlcXVpcmVkSWRzLlJFUVVJUkVEXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3VzdG9taXphdGlvbkF0dHJzO1xufTtcblxuY2xhc3MgVHJpcFByZWZlcmVuY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xvc2VNb2RhbDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnVwZGF0ZWQgJiYgbmV4dFByb3BzLnVwZGF0ZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBzZWN0aW9uLCBvYmplY3QsIGN0YSkgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudChldmVudCwgc2VjdGlvbiwgb2JqZWN0LCBjdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIHVwZGF0ZVRyaXBQcmVmZXJlbmNlID0gKHZhbHVlcykgPT4ge1xuXG4gICAgbGV0IGN1c3RvbWl6YXRpb25BdHRycyA9IFtdO1xuICAgIGNvbnN0IHsgcHJlZmVyZW5jZXNEYXRhOiB7IGN1c3RvbWl6YXRpb25zLCBlbGlnaWJsZUFuc3dlcnM6IHNlbGVjdGVkQW5zd2VycyB9IH0gPSB0aGlzLnByb3BzLnByZWZlcmVuY2VzO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gZ2V0RWxpZ2libGVBbnN3ZXJzT2JqKHNlbGVjdGVkQW5zd2Vycyk7XG5cbiAgICBjb25zdCBob3RlbEN1c3RvbWl6YXRpb24gPSBnZXRIb3RlbEN1c3RvbWl6YXRpb24odmFsdWVzLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgIGNvbnN0IHNpbmdsZVZhbHVlQ3VzdG9taXphdGlvbiA9IGdldFNpbmdsZVZhbHVlQ3VzdG9taXphdGlvbih2YWx1ZXMsIHNlbGVjdGVkT3B0aW9ucywgY3VzdG9taXphdGlvbnMpO1xuICAgIGNvbnN0IG11bHRpVmFsdWVDdXN0b21pemF0aW9uID0gZ2V0TXVsdGlWYWx1ZUN1c3RvbWl6YXRpb24odmFsdWVzLCBzZWxlY3RlZE9wdGlvbnMpO1xuXG4gICAgY3VzdG9taXphdGlvbkF0dHJzID0gWy4uLmN1c3RvbWl6YXRpb25BdHRycywgLi4uaG90ZWxDdXN0b21pemF0aW9uLCAuLi5zaW5nbGVWYWx1ZUN1c3RvbWl6YXRpb24sIC4uLm11bHRpVmFsdWVDdXN0b21pemF0aW9uXTtcbiAgICBjb25zdCBmbGlnaHRBbnN3ZXJBdHRyaWJ1dGVzID0ge1xuICAgICAgY3VzdG9taXphdGlvbl9pZDogdmFsdWVzLmZsaWdodEFuc3dlckF0dHJpYnV0ZXMuY3VzdG9taXphdGlvbklkLFxuICAgICAgaWQ6IHZhbHVlcy5mbGlnaHRBbnN3ZXJBdHRyaWJ1dGVzLmlkLFxuICAgICAgb3B0aW9uX2lkOiB2YWx1ZXMuZmxpZ2h0QW5zd2VyQXR0cmlidXRlcy5vcHRpb25JZFxuICAgIH07XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICByZXF1ZXN0ZWRfdHJpcDoge1xuICAgICAgICBpbmZvOiB2YWx1ZXMuaW5mbyxcbiAgICAgICAgYnVkZ2V0OiB2YWx1ZXMuYnVkZ2V0LFxuICAgICAgICBmbGlnaHRfYW5zd2VyX2F0dHJpYnV0ZXM6IGZsaWdodEFuc3dlckF0dHJpYnV0ZXMsXG4gICAgICAgIG90aGVyX2Fuc3dlcnNfYXR0cmlidXRlczogY3VzdG9taXphdGlvbkF0dHJzXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdwcmVmZXJlbmNlcycsICcnLCAnQ29uZmlybScpO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHRoaXMucHJvcHMuY3VycmVudFRyaXBJZCwgcGFyYW1zKTtcbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdFZGl0IHByZWZlcmVuY2VzIHdpbmRvdycsICdwcmVmZXJlbmNlcycsICdlZGl0Jyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGFmdGVyTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdwcmVmZXJlbmNlcycsICcnLCAnQ2FuY2VsJyk7XG4gIH07XG5cbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbml0aWFsRm9ybURhdGEsIHByZWZlcmVuY2VzLCBpc0NvbnZlcnRlZFRyaXAsIGlzQ2FuY2VsbGVkVHJpcCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0cmlwUHJlZmVyZW5jZXMgPSBnZXRUcmlwUHJlZmVyZW5jZXMocHJlZmVyZW5jZXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHAxNSBwYjAgYXRfdHJpcFByZWZlcmVuY2VzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIG1iMTUnPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2ZsZXggYWxpZ25DZW50ZXIgZjE2IGZ3OSBtMCBmbGV4RnVsbCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Jsb2NrIGlucHV0LTI0IG1yOCc+PFByZWZlcmVuY2VzSWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNmYzYgYXRfaGVhZGluZ1ByZWZlcmVuY2VzXCI+UHJlZmVyZW5jZXM8L3NwYW4+XG4gICAgICAgICAgPC9oNj5cbiAgICAgICAgICB7IWlzQ29udmVydGVkVHJpcCB8fCBpc0NhbmNlbGxlZFRyaXAgP1xuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgIHRyaWdnZXI9ezxzcGFuIGNsYXNzTmFtZT0nc2ZjMSBmMTQgZnc3IGF0X2VkaXQzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PkVkaXQ8L3NwYW4+fVxuICAgICAgICAgICAgICBmdWxsVmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tPXt0aGlzLmFmdGVyTW9kYWxDbG9zZX1cbiAgICAgICAgICAgICAgY3VzdG9tQ2xvc2VUcmlnZ2VyPXt0aGlzLnN0YXRlLmNsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICA8VHJpcFByZWZlcmVuY2VzRWRpdEZvcm0gaW5pdGlhbFZhbHVlcz17aW5pdGlhbEZvcm1EYXRhfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnVwZGF0ZVRyaXBQcmVmZXJlbmNlfVxuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzPXtwcmVmZXJlbmNlc30gLz5cbiAgICAgICAgICAgIDwvTW9kYWw+IDpcbiAgICAgICAgICAgIDxNb2RhbCB0cmlnZ2VyPXs8c3BhbiBjbGFzc05hbWU9J3NmYzEgZjE0IGZ3NyBhdF9lZGl0Myc+RWRpdDwvc3Bhbj59IGN1c3RvbUNsb3NlVHJpZ2dlcj17dGhpcy5zdGF0ZS5jbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgPEVkaXRQcmVmZXJlbmNlc1BvcHVwIG9wRGV0YWlscz17cHJlZmVyZW5jZXMub3BEZXRhaWxzfSBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9IC8+XG4gICAgICAgICAgICA8L01vZGFsPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXhXcmFwJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0cmlwUHJlZmVyZW5jZXMubWFwKChwcmVmZXJlbmNlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPEdQcmVmZXJlbmNlRGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwgbWIxNSBicmVhay13b3JkJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8cD57cHJlZmVyZW5jZS5sYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgYXRfcHJlZmVyZW5jZVZhbHVlJHtpbmRleH1gfT57Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHByZWZlcmVuY2UudmFsdWUpfTwvcD5cbiAgICAgICAgICAgICAgPC9HUHJlZmVyZW5jZURpdj4pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVHJpcFByZWZlcmVuY2VzLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudFRyaXBJZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pLFxuICBpbml0aWFsRm9ybURhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHByZWZlcmVuY2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc0NvbnZlcnRlZFRyaXA6IFByb3BUeXBlcy5ib29sLFxuICBpc0NhbmNlbGxlZFRyaXA6IFByb3BUeXBlcy5ib29sLFxuICB1cGRhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblRyaXBQcmVmZXJlbmNlcy5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpcFByZWZlcmVuY2VzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdSb3N0ZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgLy8gdG9wOiAnNjBweCcsXG4gIHdpZHRoOiAnY2FsYygxMDAlIC0gMjRweCknLFxuICBsZWZ0OiAnMTJweCcsXG4gIHRvcDogJzEycHgnLFxuICB6SW5kZXg6ICc5OTk5JyxcbiAgJyYgPiBkaXYnOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG4gICcmIC5yb3N0ZXJDbG9zZSc6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOicyNHB4JyxcbiAgICBoZWlnaHQ6JzI0cHgnLFxuICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgcmlnaHQ6JzNweCcsXG4gICAgdG9wOiczcHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcicgOiB7XG4gICAgICBjb250ZW50OiAnXFwnIFxcJycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICc3cHgnLFxuICAgICAgdG9wOiAnMTBweCcsXG4gICAgICB3aWR0aDonMTJweCcsXG4gICAgICBoZWlnaHQ6JzFweCcsXG4gICAgICBiYWNrZ3JvdW5kOicjMDAwJyxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooNDVkZWcpJyxcbiAgICB9LFxuICAgICcmOmFmdGVyJyA6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZVooLTQ1ZGVnKScsXG4gICAgfSxcbiAgfSxcbiAgJyYgLnRvYXN0ZXInOiB7XG4gICAgcGFkZGluZzogJzEycHgnLFxuICAgIHBhZGRpbmdSaWdodDogJzMwcHgnLFxuICAgIGNvbG9yOiAnIzMzMycsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzMzMnLFxuICAgIGJhY2tncm91bmQ6ICcjZWZlZmVmJyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgJyYuZXJyb3JSb3N0ZXInOiB7XG4gICAgICBjb2xvcjogJyNjYjQxMzgnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjZmQ1MzQ2JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmJkYmQ4JyxcbiAgICAgICcmIC5yb3N0ZXJDbG9zZTpiZWZvcmUsICYgLnJvc3RlckNsb3NlOmFmdGVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2NiNDEzOCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYuc3VjZXNzUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjMjY4ZjJhJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzI2OGYyYScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2QxZjZkMicsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMyNjhmMmEnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLmluZm9Sb3N0ZXInOiB7XG4gICAgICBjb2xvcjogJyMxYTc4YzInLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjMjE5NmYzJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZDhlOGZiJyxcbiAgICAgICcmIC5yb3N0ZXJDbG9zZTpiZWZvcmUsICYgLnJvc3RlckNsb3NlOmFmdGVyJyA6IHtcbiAgICAgICAgYmFja2dyb3VuZDonIzFhNzhjMicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYud2FybmluZ1RvYXN0ZXInOiB7XG4gICAgICBjb2xvcjogJyMzZTNlM2UnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjZmFjMjJlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmJmMmRjJyxcbiAgICAgICcmIC5yb3N0ZXJDbG9zZTpiZWZvcmUsICYgLnJvc3RlckNsb3NlOmFmdGVyJyA6IHtcbiAgICAgICAgYmFja2dyb3VuZDonIzNlM2UzZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgR1Jvc3RlckRpdiB9IGZyb20gJy4vRyc7XG5cbi8qKlxuICogUm9zdGVyIGlzIHRvIGRpc3BsYXkgbWVzc2FnZXMgZm9yIGR5bmFtaWMgbGF5b3V0cy5cbiAqIC0gcm9zdGVyVHlwZSAtIFN0cmluZzogRGVmaW5lcyB0eXBlIG9mIG1lc3NhZ2UuIEN1cnJlbnRseSB3ZSBzdXBwb3J0XG4gKiByb3N0ZXJTdWNjZXNzLCByb3N0ZXJFcnJvciBhbmQgcm9zdGVySW5mb1xuICogLSB0ZXh0IC0gU3RyaW5nIFtvcHRpb25hbF06IFNpbmdsZSBsaW5lIG1lc3NhZ2UgZm9yIHVzZXIuXG4gKiAtIG1lc3NhZ2UgLSBPYmplY3QgW29wdGlvbmFsXTogRm9yIG1vcmUgY29tcGxleCBtZXNzYWdlcyB3aGljaCBtaWdodCBjb250YWluIGxpbmsgZm9yIHVzZXIgYWN0aW9uLlxuICogRm9yIGV4OiB7XG4gKiAgICAgaGVhZGVyOiBcIk5ldyB0cmlwIGNyZWF0ZWQhXCIsXG4gKiAgICAgbWVzc2FnZTogXCJQbGVhc2UgYWN0aXZhdGUgeW91ciBlbWFpbCBhZGRyZXNzLiBUbyByZXNlbmQgYWN0aXZhdGlvbiBtYWlsIHt7c2VuZF9hY3RpdmF0aW9uX21haWx9fVwiLFxuICogICAgIGxpbmtzOiBbe3R5cGU6ICdzZW5kX2FjdGl2YXRpb25fbWFpbCcsIGxhYmVsOiAnQ2xpY2sgaGVyZSd9IF1cbiAqICAgfVxuICogLSB0aW1lb3V0IC0gTnVtYmVyIFtvcHRpb25hbF06IGlmIHByb3ZpZGVkLCBNZXNzYWdlIHdpbGwgZGlzYXBwZWFyIGFmdGVyIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzXG4gKiAtIGNhbGxiYWNrIC0gRnVuY3Rpb24gW29wdGlvbmFsXTogQ2FsbGJhY2sgdG8gcGFzcyBldmVudCBiYXNlZCBvbiB3aGljaCBhY3Rpb24gaXMgdG8gYmUgY2FsbGVkIGJ5IHBhcmVudC5cbiAqXG4gKiAgUC5TLiAtIEVpdGhlciByb3N0ZXJUZXh0IG9yIHJvc3Rlck1lc3NhZ2Ugc2hvdWxkIGJlIHByZXNlbnQuIElmIGJvdGggYXJlIHByZXNlbnQgcm9zdGVyVGV4dCB3b3VsZCBoYXZlIHByaW9yaXR5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3N0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzUm9zdGVyT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGlkZVJvc3RlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhbGxvd1RpbWVPdXQ6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgLyoqXG4gICAqIHJvc3RlclR5cGUgY291bGQgaGF2ZSB0d28gdHlwZXM6XG4gICAqICAtIHN1Y2Vzc1Jvc3RlclxuICAgKiAgLSBlcnJvclJvc3RlclxuICAgKiAgLSBpbmZvUm9zdGVyXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICdpbmZvUm9zdGVyJyxcbiAgICBpc1Jvc3Rlck9wZW46IGZhbHNlLFxuICAgIGFsbG93VGltZU91dDogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Jvc3Rlck9wZW46IHByb3BzLmlzUm9zdGVyT3BlblxuICAgIH07XG4gICAgdGhpcy5jbG9zZVJvc3RlciA9IHRoaXMuY2xvc2VSb3N0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzUm9zdGVyT3Blbikge1xuICAgICAgdGhpcy5zaG93Um9zdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzUm9zdGVyT3BlbiAmJiBuZXh0UHJvcHMuaXNSb3N0ZXJPcGVuKSB7XG4gICAgICB0aGlzLnNob3dSb3N0ZXIoKTtcbiAgICB9XG4gIH1cblxuICBzaG93Um9zdGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Jvc3Rlck9wZW46IHRydWUgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMudGltZW91dCAmJiB0aGlzLnByb3BzLmFsbG93VGltZU91dCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlUm9zdGVyKCk7XG4gICAgICAgIH0sIHRoaXMucHJvcHMudGltZW91dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZVJvc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNSb3N0ZXJPcGVuOiBmYWxzZSB9KTtcbiAgICB0aGlzLnByb3BzLmhpZGVSb3N0ZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGUsIG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc1Jvc3Rlck9wZW4gJiYgbWVzc2FnZSA/IChcbiAgICAgIDxHUm9zdGVyRGl2IGNsYXNzTmFtZT1cImZpeGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3RlciAke3R5cGV9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZHluYW1pY1RleHRJbmhlcml0IHAwXCI+XG4gICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvc3RlckNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZVJvc3Rlcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dSb3N0ZXJEaXY+XG4gICAgKSA6IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IHNob3dSb3N0ZXIsIGhpZGVSb3N0ZXIgfSBmcm9tICcuL2FjdGlvbic7XG5pbXBvcnQgUm9zdGVyIGZyb20gJy4vUm9zdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIHR5cGU6IHN0YXRlLnJvc3Rlci50eXBlLFxuICAgIG1lc3NhZ2U6IHN0YXRlLnJvc3Rlci5tZXNzYWdlLFxuICAgIGlzUm9zdGVyT3Blbjogc3RhdGUucm9zdGVyLmlzUm9zdGVyT3BlbixcbiAgICBhbGxvd1RpbWVPdXQ6IHN0YXRlLnJvc3Rlci5hbGxvd1RpbWVPdXRcbiAgfSksXG4gIHtcbiAgICBoaWRlUm9zdGVyXG4gIH1cbikoUm9zdGVyKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBQcmVmZXJlbmNlcyBmcm9tICdtb2R1bGVzL3ByZWZlcmVuY2VzJztcbmltcG9ydCBSb3N0ZXIgZnJvbSAnbW9kdWxlcy9yb3N0ZXInO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZGF0YSA9IHt9KSA9PiB7XG4gICAgLypjb25zdCB7IHRyaXBJZCwgY3VycmVudFF1b3RlLCBjdXJyZW50UXVvdGVJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghY3VycmVudFF1b3RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiBkYXRhLmV2ZW50LFxuICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1FEUCcsXG4gICAgICBzZWN0aW9uOiBkYXRhLnNlY3Rpb24gfHwgJycsXG4gICAgICBvYmplY3Q6IGRhdGEub2JqZWN0IHx8IGBRdW90ZS8ke2N1cnJlbnRRdW90ZUlkfWAsXG4gICAgICBjdGE6IGRhdGEuY3RhLFxuICAgICAgdHJpcF9pZDogdHJpcElkIHx8IChnZXRDb29raWUoVFJJUF9JRF9DT09LSUVfS0VZKSwgMTApIHx8IDAsXG4gICAgICBxdW90ZV9pZDogY3VycmVudFF1b3RlSWQsXG4gICAgICBpbnZvaWNlX2lkOiBjdXJyZW50UXVvdGUuaW52b2ljZURldGFpbHMuaWQgfHwgMCxcbiAgICAgIGRlc3RpbmF0aW9uX2lkOiBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdC5sZW5ndGggPyBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdFswXS5pZCA6IDAsXG4gICAgICBhZ2VudF9pZDogY3VycmVudFF1b3RlLmFnZW50LmlkIHx8IDAsXG4gICAgICB0cmlwX3N0YXR1czogY3VycmVudFF1b3RlLnRyaXBTdGF0dXMgfHwgJycsXG4gICAgICBxdW90ZV9zdGF0dXM6IGN1cnJlbnRRdW90ZS5zdGF0dXMgfHwgJycsXG4gICAgICBtaXNjX2lkXzE6IGRhdGEubWlzY0lkMSxcbiAgICAgIG1pc2NfdHlwZV8xOiBkYXRhLm1pc2NUeXBlMSxcbiAgICAgIG1pc2NfaWRfMjogZGF0YS5taXNjSWQyLFxuICAgICAgbWlzY190eXBlXzI6IGRhdGEubWlzY1R5cGUyLFxuICAgICAgbWlzY19pZF8zOiBkYXRhLm1pc2NJZDMsXG4gICAgICBtaXNjX3R5cGVfMzogZGF0YS5taXNjVHlwZTMsXG4gICAgICBtaXNjX2lkXzQ6IGRhdGEubWlzY0lkNCxcbiAgICAgIG1pc2NfdHlwZV80OiBkYXRhLm1pc2NUeXBlNCxcbiAgICAgIG1pc2NfaWRfNTogZGF0YS5taXNjSWQ1LFxuICAgICAgbWlzY190eXBlXzU6IGRhdGEubWlzY1R5cGU1XG4gICAgfSk7Ki9cbiAgfTtcblxuICBvblNlbnNvckNoYW5nZSA9IChpc1Zpc2libGUpID0+IHtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX1ZJRVdFRCxcbiAgICAgICAgc2VjdGlvbjogJ0l0aW5lcmFyeScsXG4gICAgICAgIGN0YTogJydcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgUHJlZmVyZW5jZXNDb250YWluZXIgPSBQcmVmZXJlbmNlcy5jb250YWluZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuXG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicGFnZV9uYW1lXCIgY29udGVudD1cIlF1b3RlIERldGFpbFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm5hbWVcIiBjb250ZW50PVwiUXVvdGUgRGV0YWlsXCIgLz5cbiAgICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgICAgPFJvc3RlciB0aW1lb3V0PXszMDAwfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggY29udGVudEJhY2tncm91bmQgc2JjNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYjQ4XCI+XG4gICAgICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlKX1cbiAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICAgIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8UHJlZmVyZW5jZXNDb250YWluZXIgdHJhY2tTZWdtZW50PXsoZGF0YSkgPT4gdGhpcy50cmFja1NlZ21lbnRFdmVudChkYXRhKX0gLz5cbiAgICAgICAgICAgICAgPC9TZW5zb3I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xuXG5pbXBvcnQgKiBhcyBwcmVmZXJlbmNlUmVkdWNlcnMgZnJvbSAnbW9kdWxlcy9wcmVmZXJlbmNlcy9yZWR1Y2VyL2luZGV4JztcbmV4cG9ydCB7IHByZWZlcmVuY2VSZWR1Y2VycyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVmZXJlbmNlc0FzeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5QcmVmZXJlbmNlc0FzeW5jLnByb3BUeXBlcyA9IHt9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==