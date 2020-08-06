require("source-map-support").install();
exports.ids = ["form-one-lead"];
exports.modules = {

/***/ "./app/components/DatePicker/Datepickernew.scss":
/*!******************************************************!*\
  !*** ./app/components/DatePicker/Datepickernew.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/DatePicker/Monthpicker.scss":
/*!****************************************************!*\
  !*** ./app/components/DatePicker/Monthpicker.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./app/components/Form/DateWeekPanel.js":
/*!**********************************************!*\
  !*** ./app/components/Form/DateWeekPanel.js ***!
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

/* eslint-disable */
let DateWeekPanel = class DateWeekPanel extends _react.default.Component {
  constructor() {
    super();
    this.updateWeek = this.updateWeek.bind(this);
  }

  updateWeek(e, week) {
    e.stopPropagation();
    this.props.selectWeek(week);
  }

  render() {
    const {
      currentYear,
      currentMonth,
      clickOverlay
    } = this.props;
    return _react.default.createElement("div", {
      id: "week-box-width",
      className: this.props.showWeek ? "sbcw z3 week-box-width bs4" : "absolute-center-h t0 sbcw z3 hide"
    }, _react.default.createElement("div", {
      onClick: clickOverlay,
      className: "fixed t0 l0 wfull hfull week-mask"
    }), _react.default.createElement("div", {
      className: "sbcw week-box-width-inner"
    }, _react.default.createElement("div", {
      className: "sbcw pfc1 f24 row row-"
    }, _react.default.createElement("p", {
      className: "m0 text-center f16 date-week-title"
    }, currentMonth, " ", currentYear)), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("ul", {
      className: "m0 p10 pl0 pr0 iblock wfull"
    }, this.props.numOfWeeks.map(week => {
      const clssName = week >= this.props.startWeek ? '' : 'disable';
      return _react.default.createElement("div", {
        key: week,
        value: `Week ${week}`,
        className: "col-xs-6 clssName"
      }, _react.default.createElement("div", {
        className: "f14 pfc3 block mauto p8 text-center date-week-val",
        onClick: e => this.updateWeek(e, `Week ${week}`)
      }, `Week ${week}`));
    })))));
  }

};
DateWeekPanel.propTypes = {
  showWeek: _propTypes.default.bool,
  selectWeek: _propTypes.default.func,
  currentMonth: _propTypes.default.string,
  currentYear: _propTypes.default.number,
  numOfWeeks: _propTypes.default.array,
  startWeek: _propTypes.default.number
};
DateWeekPanel.defaultProps = {
  showWeek: false,
  selectWeek: () => {},
  currentMonth: '',
  currentYear: new Date().getFullYear(),
  numOfWeeks: [1, 2, 3, 4],
  startWeek: 1
};
var _default = DateWeekPanel;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/DepartureDateFormOne.js":
/*!*****************************************************!*\
  !*** ./app/components/Form/DepartureDateFormOne.js ***!
  \*****************************************************/
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

var _reactDatepicker = _interopRequireDefault(__webpack_require__(/*! react-datepicker */ "react-datepicker"));

var _reactMonthPicker = _interopRequireDefault(__webpack_require__(/*! react-month-picker */ "react-month-picker"));

var _DateWeekPanel = _interopRequireDefault(__webpack_require__(/*! ./DateWeekPanel */ "./app/components/Form/DateWeekPanel.js"));

var _FormDateNum = _interopRequireDefault(__webpack_require__(/*! ./FormDateNum */ "./app/components/Form/FormDateNum.js"));

var _MonthBox = _interopRequireDefault(__webpack_require__(/*! ./MonthBox */ "./app/components/Form/MonthBox.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

__webpack_require__(/*! ./FormLead/LeadForm.scss */ "./app/components/Form/FormLead/LeadForm.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const pickerLang = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  from: 'From',
  to: 'To'
};

function currentWeek(date) {
  const date_new = new Date(date);
  const thisDay = date_new.getDate();
  const newDate = date_new;
  newDate.setDate(1);
  const digit = newDate.getDay();
  const Q = (thisDay + digit) / 7;
  const R = (thisDay + digit) % 7;
  if (R !== 0) return Math.ceil(Q);else return Q;
}

function weekCount(year, month_number) {
  // var firstOfMonth = new Date(year, month_number-1, 1);
  // var lastOfMonth = new Date(year, month_number, 0);
  // var used = firstOfMonth.getDay() + lastOfMonth.getDate();
  // var count = Math.ceil( used / 7);
  let retValue = []; // for(var i = 1; i <= count; i++) {
  //   retValue.push(i);
  // }

  retValue = [1, 2, 3, 4];
  return retValue;
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
let disableCurrentMonth = false;

if (currentDate.getDate() > 28) {
  disableCurrentMonth = true;
}

function getStartingWeek(year, month) {
  if (currentMonth === month && currentYear === year) {
    return currentWeek(currentDate);
  } else {
    return 1;
  }
}

let DepartureDateFormOne = class DepartureDateFormOne extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: null,
      selectedDate: '',
      mvalue: {
        year: currentYear,
        month: currentMonth
      },
      fixedDate: true,
      flexibleDate: true,
      anytimeDate: true,
      numOfDays: false,
      dateChecked: false,
      showWeek: false,
      startWeek: 1,
      numOfWeeks: [],
      isDatePickerOpen: false,
      isBookedTicket: props.formValues.booked_tickets || false,
      showMonthPicker: false
    };
    this.handleFixedChange = this.handleFixedChange.bind(this);
    this.handleFixedChangeWithoutToggle = this.handleFixedChangeWithoutToggle.bind(this);
    this.handleAnytimeChange = this.handleAnytimeChange.bind(this);
    this.setRequiredFields = this.setRequiredFields.bind(this);
    this.handleClickMonthBox = this.handleClickMonthBox.bind(this);
    this.handleAMonthChange = this.handleAMonthChange.bind(this);
    this.handleAMonthDissmis = this.handleAMonthDissmis.bind(this);
    this.scrollPage = this.scrollPage.bind(this);
    this.hideDatePicker = this.hideDatePicker.bind(this);
    this.cancelDateSelection = this.cancelDateSelection.bind(this);
    this.handleBookedTickets = this.handleBookedTickets.bind(this);
  }

  componentDidMount() {
    this.setRequiredFields(this.props.formValues);
  }

  setRequiredFields(values) {
    if (values.start_date && !values.start_date_flexible && !values.start_date_noidea) {
      this.handleFixedChangeWithoutToggle(values.start_date);
    } else if (values.start_date_noidea) {
      this.handleAnytimeChange();
    } else if (values.start_date_flexible) {
      this.setState({
        selectedDate: values.start_date_flexible,
        dateType: 'flexible',
        flexibleDate: true,
        fixedDate: false,
        anytimeDate: false,
        numOfDays: true,
        showWeek: false
      });
      const matches = values.start_date_flexible.match(/(\w)+/g);
      this.props.dispatchRxFormAction((0, _DateTime.getDateOfWeek)(matches[0], matches[1], matches[3], 'YYYY-MM-DD'), 'start_date');
    }
  }

  cancelDateSelection() {
    this.setState({
      dateType: null,
      selectedDate: '',
      fixedDate: true,
      flexibleDate: true,
      anytimeDate: true,
      numOfDays: false,
      showWeek: false
    });
    this.props.dispatchRxFormAction('', 'start_date');
    this.props.dispatchRxFormAction(false, 'start_date_noidea');
    this.props.dispatchRxFormAction('', 'start_date_flexible');
  }

  handleFixedChangeWithoutToggle(dateObj) {
    const formattedDate = (0, _DateTime.format)(dateObj, 'DD MMMM YYYY');
    this.setState({
      selectedDate: formattedDate,
      dateType: 'fixed',
      dateChecked: true,
      flexibleDate: false,
      anytimeDate: false,
      numOfDays: true
    });
    const startDate = (0, _DateTime.format)(dateObj, 'YYYY-MM-DD');
    this.props.dispatchRxFormAction(startDate, 'start_date');
  }

  handleFixedChange(dateObj) {
    const formattedDate = (0, _DateTime.format)(dateObj, 'DD MMMM YYYY');
    this.setState({
      selectedDate: formattedDate,
      dateType: 'fixed',
      dateChecked: true,
      flexibleDate: false,
      anytimeDate: false,
      numOfDays: true
    });
    const startDate = (0, _DateTime.format)(dateObj, 'YYYY-MM-DD');
    this.toggleDatePickerCalendar();
    this.props.dispatchRxFormAction(startDate, 'start_date');
  }

  scrollPage(element) {
    let elementToBeScrolled = element;
    let toLocScroll = elementToBeScrolled.offsetTop;
    let toLocPos = elementToBeScrolled.getBoundingClientRect().top;
    let toLocAdd = toLocPos - toLocScroll;
    window.scrollTo(0, toLocAdd);
  }

  toggleDatePickerCalendar(e) {
    if (e) e && e.stopPropagation() && e.preventDefault();
    if (e && e.target) this.scrollPage(e.target);
    this.setState({
      isDatePickerOpen: !this.state.isDatePickerOpen
    });
    setTimeout(function () {
      const datepicker = document.getElementsByClassName('custom-variation-datepicker')[0];
      if (datepicker) datepicker.setAttribute("style", `width: ${window.innerWidth}px; left: -15px !important;display:block;`);
    }, 100);
  }

  hideDatePicker() {
    this.setState({
      isDatePickerOpen: false
    });
  }

  handleBookedTickets(event) {
    this.setState({
      isBookedTicket: event.target.checked
    });
    this.props.dispatchRxFormAction(event.target.checked, 'booked_tickets');
  }

  handleAnytimeChange() {
    this.setState({
      dateType: 'anytime',
      selectedDate: 'Anytime',
      fixedDate: false,
      flexibleDate: false,
      anytimeDate: true,
      numOfDays: true,
      isBookedTicket: false
    });
    this.props.trackFormOneInteracted();
    this.props.dispatchRxFormAction(true, 'start_date_noidea');
    this.props.dispatchRxFormAction('Anytime', 'start_date');
  }

  handleFlexibleChange(week) {
    const flexibleDate = `${this.state.month}'${this.state.year.toString().substr(2)} - ${week}`;
    this.setState({
      selectedDate: flexibleDate,
      dateType: 'flexible',
      flexibleDate: true,
      fixedDate: false,
      anytimeDate: false,
      numOfDays: true,
      showWeek: false
    });
    this.props.dispatchRxFormAction(false, 'start_date_noidea');
    this.props.dispatchRxFormAction(flexibleDate, 'start_date_flexible');
    this.props.dispatchRxFormAction((0, _DateTime.getDateOfWeek)(this.state.year, this.state.month, parseInt(week.match(/\d+/)[0]) - 1, 'YYYY-MM-DD'), 'start_date');
  }

  hideWeekPanel(e) {
    this.setState({
      showWeek: false
    });
  }

  handleClickMonthBox(e) {
    this.scrollPage(e.target);
    this.refs.pickAMonth.show();
    this.setState({
      showMonthPicker: true
    });
    const leftPosition = document.getElementById('flexible_date_fnew').getBoundingClientRect().left;
    document.getElementsByClassName('custom-month-picker rmp-container')[0].setAttribute("style", `width: ${window.innerWidth}px; left: -${leftPosition}px !important;`);
    document.getElementById('week-box-width').setAttribute("style", `width: ${window.innerWidth}px; left: -15px !important;`);
  }

  handleAMonthChange(year, monthNum) {
    this.refs.pickAMonth.dismiss();
    this.setState({
      year,
      month: pickerLang.months[monthNum - 1],
      numOfWeeks: weekCount(year, monthNum),
      startWeek: getStartingWeek(year, monthNum - 1),
      showWeek: true,
      showMonthPicker: false
    });
  }

  handleAMonthDissmis(value) {
    this.setState({
      mvalue: value,
      showMonthPicker: false
    });
  }

  render() {
    const input = this.props.input;
    const {
      fixedDate,
      flexibleDate,
      anytimeDate,
      dateType,
      mvalue,
      selectedDate,
      isBookedTicket
    } = this.state;
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "clear"
    }, _react.default.createElement("div", {
      className: `${fixedDate && flexibleDate && anytimeDate ? "row row-" : "hide"}`
    }, _react.default.createElement("label", {
      className: "block pb8 f14 fw9"
    }, "Departure Date", _react.default.createElement("em", {
      className: "pfc2"
    }, "*"), _react.default.createElement("span", {
      className: "f12 fw3"
    }, " (Choose Any)"))), _react.default.createElement("div", {
      className: fixedDate ? "relative" : "hide"
    }, _react.default.createElement("div", {
      className: dateType === "fixed" ? "input-with-icon-box col-xs-6 pr0 pl0 relative cross-visible-box" : "col-xs-4 pr4 pl0 relative input-with-icon-box icon-hide-box"
    }, _react.default.createElement("label", {
      className: "ddate-label pb8 f14 fw9"
    }, "Departure Date", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "relative",
      onClick: () => this.props.trackFormOneInteracted()
    }, _react.default.createElement("span", {
      className: "input-icon"
    }, _react.default.createElement(_Icon.CalendarIcon, null)), _react.default.createElement("div", null, _react.default.createElement("button", {
      id: "fixed_date_fnew",
      type: "button",
      className: "form-date-check input box-input-flex",
      onClick: this.toggleDatePickerCalendar.bind(this)
    }, this.state.selectedDate ? this.state.selectedDate : 'Fixed Date'), this.state.isDatePickerOpen && _react.default.createElement(_reactDatepicker.default, {
      dateForm: "DD/MM/YYYY",
      readOnly: true,
      minDate: new Date(),
      value: this.state.selectedDate ? this.state.selectedDate : '',
      placeholderText: "Fixed Date",
      inline: true,
      calendarClassName: "custom-variation-datepicker",
      onChange: this.handleFixedChange,
      onClickOutside: this.hideDatePicker
    })), _react.default.createElement("div", {
      onClick: this.cancelDateSelection,
      className: "hide absolute-center-v r10 z2 close-date cursorP"
    }, _react.default.createElement(_Icon.CloseIcon, null))))), _react.default.createElement("div", {
      className: flexibleDate ? "" : "hide"
    }, _react.default.createElement("div", {
      className: dateType === "flexible" ? "input-with-icon-box input-two-icons col-xs-6 pr0 pl0 relative cross-visible-box cross-visible-box" : "col-xs-4 pr4 pl0 flexible-date relative input-with-icon-box icon-hide-box"
    }, _react.default.createElement("label", {
      className: "ddate-label pb8 f14 fw9"
    }, "Departure Date", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "relative",
      onClick: () => this.props.trackFormOneInteracted()
    }, _react.default.createElement("span", {
      className: "input-icon"
    }, _react.default.createElement(_Icon.CalendarIcon, null)), _react.default.createElement(_reactMonthPicker.default, {
      ref: "pickAMonth",
      years: {
        min: {
          year: currentYear,
          month: disableCurrentMonth ? currentMonth + 2 : currentMonth + 1
        },
        max: {
          year: currentYear + 1,
          month: 12
        }
      },
      value: mvalue,
      lang: pickerLang.months,
      onChange: this.handleAMonthChange,
      onDismiss: this.handleAMonthDissmis,
      className: "custom-month-picker",
      show: this.state.showMonthPicker
    }, _react.default.createElement(_MonthBox.default, {
      dateValue: this.state.selectedDate,
      onClick: this.handleClickMonthBox
    })), _react.default.createElement("div", {
      onClick: this.cancelDateSelection,
      className: "hide absolute-center-v r10 z2 close-date cursorP"
    }, _react.default.createElement(_Icon.CloseIcon, null))))), _react.default.createElement("div", {
      className: anytimeDate ? "" : "hide"
    }, _react.default.createElement("div", {
      className: dateType === "anytime" ? "col-xs-6 input-with-icon-box input-two-icons pr0 pl0 cross-visible-box" : "col-xs-4 pr0 pl0 flexible-date relative input-with-icon-box icon-hide-box"
    }, _react.default.createElement("label", {
      className: "ddate-label pb8 f14 fw9"
    }, "Departure Date", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement("span", {
      className: "input-icon"
    }, _react.default.createElement(_Icon.CalendarIcon, null)), _react.default.createElement("button", {
      id: "anytime_fnew",
      type: "button",
      className: "pbc4 sfcw cursorP radius2 iblock input form-date-check",
      onClick: this.handleAnytimeChange,
      readOnly: "readonly",
      placeholder: "Anytime",
      readOnly: true
    }, selectedDate ? selectedDate : "Anytime"), _react.default.createElement("div", {
      onClick: this.cancelDateSelection,
      className: "hide absolute-center-v r10 z2 close-date cursorP"
    }, _react.default.createElement(_Icon.CloseIcon, null))))), _react.default.createElement(_reduxForm.Field, {
      name: "trip_days_temp",
      component: _FormDateNum.default,
      showDays: this.state.numOfDays,
      dispatch: this.props.meta.dispatch,
      form: this.props.meta.form,
      rtData: this.props.rtData,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      days: this.props.days,
      formValues: this.props.formValues
    }), _react.default.createElement("div", {
      className: dateType === "fixed" ? "booked-ticket col-xs-12 p0 booked-ticket" : "hide"
    }, _react.default.createElement("input", {
      type: "checkbox",
      checked: isBookedTicket,
      onChange: this.handleBookedTickets,
      id: "booked-ticket",
      className: "checkbox-common checkbox-common",
      value: "on"
    }), _react.default.createElement("label", {
      htmlFor: "booked-ticket",
      className: "f12 pt2 pb2 mt5"
    }, "I have booked my travel tickets"))), _react.default.createElement("div", {
      className: "clear date-field relative"
    }, _react.default.createElement(_DateWeekPanel.default, {
      currentMonth: this.state.month,
      currentYear: this.state.year,
      selectWeek: this.handleFlexibleChange.bind(this),
      showWeek: this.state.showWeek,
      numOfWeeks: this.state.numOfWeeks,
      startWeek: this.state.startWeek,
      clickOverlay: this.hideWeekPanel.bind(this)
    })), this.props.meta.touched && (this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error) || this.props.meta.warning && _react.default.createElement("span", null, this.props.meta.warning)));
  }

};
DepartureDateFormOne.propTypes = {
  formValues: _propTypes.default.object,
  days: _propTypes.default.string,
  trackFormOneInteracted: _propTypes.default.func.isRequired,
  rtData: _propTypes.default.object
};
DepartureDateFormOne.defaultProps = {
  formValues: {},
  rtData: {},
  days: ''
};
var _default = DepartureDateFormOne;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormDateNum.js":
/*!********************************************!*\
  !*** ./app/components/Form/FormDateNum.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./FormLead/LeadForm.scss */ "./app/components/Form/FormLead/LeadForm.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FormDateNum = class FormDateNum extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDays: this.props.days || props.rtData.trip_days || props.formValues.trip_days
    };
    this.props.dispatchRxFormAction(this.state.numberOfDays, 'trip_days');
    this.onChange = this.onChange.bind(this);
    this.updateDays = this.updateDays.bind(this);
  }

  onChange(e) {
    if (e.target.value >= 2) {
      this.setState({
        numberOfDays: e.target.value
      });
    } else {
      this.setState({
        numberOfDays: 0
      });
    }

    this.props.dispatchRxFormAction(e.target.value, 'trip_days');
  }

  updateDays(action) {
    let tempValue = 0;
    let newValue = 0;
    const currentValue = this.state.numberOfDays ? this.state.numberOfDays : 1;

    if (action === 'inc') {
      tempValue = 1;
    } else {
      tempValue = -1;
    }

    newValue = parseInt(currentValue, 10) + tempValue;

    if (newValue >= 2) {
      this.setState({
        numberOfDays: newValue
      });
      this.props.dispatchRxFormAction(newValue.toString(), 'trip_days');
    }
  }

  render() {
    const {
      meta: {
        touched,
        error
      },
      variation
    } = this.props;
    return _react.default.createElement("div", {
      className: "col-xs-6 p0"
    }, _react.default.createElement("div", {
      className: this.props.showDays ? "col-xs-12 pr0 pl8" : "hide"
    }, _react.default.createElement("label", {
      htmlFor: "From",
      className: "f14 fw9 pb8 iblock pfc3"
    }, "Number Of Days", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "daysCount relative input-with-icon-box input-two-icons input-with-icon-box"
    }, _react.default.createElement("button", {
      type: "button",
      onClick: () => this.updateDays('dec'),
      className: "min-date cursorP minus-icon"
    }), _react.default.createElement("input", {
      name: "trip_days",
      type: "number",
      placeholder: "Days",
      className: `input text-center duration ${variation && touched && error && 'input-error'}`,
      value: this.state.numberOfDays || '',
      onChange: this.onChange,
      id: "trip_days_fnew"
    }), _react.default.createElement("button", {
      type: "button",
      onClick: () => this.updateDays('inc'),
      className: "plus-date cursorP plus-icon"
    })), this.props.meta && this.props.meta.touched && this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error)));
  }

};
FormDateNum.propTypes = {
  showDays: _propTypes.default.bool,
  variation: _propTypes.default.bool,
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  rtData: _propTypes.default.object,
  days: _propTypes.default.string,
  meta: _propTypes.default.object.isRequired,
  formValues: _propTypes.default.object.isRequired
};
FormDateNum.defaultProps = {
  showDays: false,
  rtData: {},
  days: ''
};
var _default = FormDateNum;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/AdditionalPrefrences.js":
/*!**************************************************************!*\
  !*** ./app/components/Form/FormLead/AdditionalPrefrences.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  parse
} = new _htmlToReact.Parser();

const AdditionalPrefrences = ({
  question,
  input
}) => {
  const handleChange = event => {
    input.onChange(event.target.value);
  };

  return _react.default.createElement("div", {
    className: "row row- additional-prefrences pt15"
  }, _react.default.createElement("p", {
    className: "fw9 mb8"
  }, question.title), _react.default.createElement("textarea", {
    className: "textarea border p15 at_additional_pref",
    placeholder: parse(question.description),
    name: question.identifier,
    onChange: handleChange
  }));
};

AdditionalPrefrences.propTypes = {
  question: _propTypes.default.object.isRequired,
  input: _propTypes.default.object.isRequired
};
var _default = AdditionalPrefrences;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/BackButton.js":
/*!****************************************************!*\
  !*** ./app/components/Form/FormLead/BackButton.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BackButton = ({
  handleClick
}) => _react.default.createElement(_reactRouter.Link, {
  className: "wfull back-btn fleft btn-pri-large radius2 pt15 pb15 wfull at_back",
  onClick: handleClick
}, "Back");

BackButton.propTypes = {
  handleClick: _propTypes.default.func.isRequired
};
var _default = BackButton;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/BudgetSlider.js":
/*!******************************************************!*\
  !*** ./app/components/Form/FormLead/BudgetSlider.js ***!
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

var _parsers = __webpack_require__(/*! ../../../utils/parsers */ "./app/utils/parsers.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BudgetOptions = ({
  budgetOptions,
  handleChange,
  getSelectedBudget,
  isFlightSelected
}) => {
  const budgetKeys = Object.keys(budgetOptions);
  const budgetFields = budgetKeys.slice(0, 3).map((key, index) => _react.default.createElement("div", {
    className: "col-xs-6 p8",
    key: key
  }, _react.default.createElement("input", {
    id: key,
    type: "radio",
    className: "radio-common",
    name: "budgetOptions",
    value: `${budgetOptions[key]}..${budgetOptions[budgetKeys[index + 1]]}`,
    checked: getSelectedBudget === `${budgetOptions[key]}..${budgetOptions[budgetKeys[index + 1]]}`,
    onChange: handleChange
  }), _react.default.createElement("label", {
    htmlFor: key,
    className: "cursorP"
  }, _react.default.createElement("p", null, "\u20B9 ", (0, _parsers.numberWithCommas)(budgetOptions[key])))));
  return _react.default.createElement("div", {
    className: "row row-8 pt0 pb8"
  }, _react.default.createElement("p", {
    className: "fw9 p8 pb0 mb0 pt0 f14"
  }, "Budget ", isFlightSelected ? "With" : "Without", " Airfare", _react.default.createElement("span", {
    className: "pfc4 fw4 f12"
  }, " (per person)")), budgetFields);
};

BudgetOptions.propTypes = {
  budgetOptions: _propTypes.default.object.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  getSelectedBudget: _propTypes.default.string,
  isFlightSelected: _propTypes.default.bool.isRequired
};
BudgetOptions.defaultProps = {
  getSelectedBudget: ''
};

const BudgetText = ({
  handleChange,
  isFlightSelected,
  getSelectedBudget,
  value
}) => _react.default.createElement("div", {
  className: "budget-textbox pb15"
}, _react.default.createElement("label", {
  htmlFor: "budget-text",
  className: "f14 fw9 pb8 block pfc3"
}, "Budget ", isFlightSelected ? "With" : "Without", " Airfare ", _react.default.createElement("span", {
  className: "pfc4 fw4 f12"
}, " (per person)")), _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("div", {
  className: "input-with-icon-box"
}, _react.default.createElement("span", {
  className: "input-icon"
}, _react.default.createElement(_Icon.BudgetIcon, null)), _react.default.createElement("input", {
  type: "number",
  id: "budget-text",
  placeholder: "Enter your budget value",
  defaultValue: getSelectedBudget,
  onChange: handleChange,
  value: value
}))));

BudgetText.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  isFlightSelected: _propTypes.default.bool,
  getSelectedBudget: _propTypes.default.string,
  value: _propTypes.default.string.isRequired
};
BudgetText.defaultProps = {
  isFlightSelected: false,
  getSelectedBudget: ''
};
let BudgetWithAirfair = (_temp = _class = class BudgetWithAirfair extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.input.onChange(event.target.value);
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row-"
    }, Object.keys(this.props.budgetOptions).length > 0 ? _react.default.createElement(BudgetOptions, {
      budgetOptions: this.props.budgetOptions,
      handleChange: this.handleChange,
      getSelectedBudget: this.props.getSelectedBudget,
      isFlightSelected: this.props.isFlightSelected
    }) : _react.default.createElement(BudgetText, {
      handleChange: this.handleChange,
      isFlightSelected: this.props.isFlightSelected,
      value: this.props.input.value
    }));
  }

}, _class.propTypes = {
  input: _propTypes.default.object.isRequired,
  budgetOptions: _propTypes.default.object,
  getSelectedBudget: _propTypes.default.string,
  isFlightSelected: _propTypes.default.bool
}, _class.defaultProps = {
  budgetOptions: {},
  getSelectedBudget: '',
  isFlightSelected: false
}, _temp);
var _default = BudgetWithAirfair;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/CabDependentQuestion.js":
/*!**************************************************************!*\
  !*** ./app/components/Form/FormLead/CabDependentQuestion.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FilterClear = _interopRequireDefault(__webpack_require__(/*! ./FilterClear */ "./app/components/Form/FormLead/FilterClear.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSelcectedQuestion(question, isDomestic) {
  const includeStr = isDomestic ? 'domestic' : 'international';
  const tagsStr = isDomestic ? 'domestic:English,Hindi' : 'international:Shared,Private';
  let finalOption = question.options.map(option => {
    if ((option.id === 12 || option.id === 89) && option.tags.includes(includeStr)) {
      return option;
    }

    return -1;
  });
  finalOption = finalOption.filter(option => option !== -1);
  finalOption[0].tags = tagsStr;
  const options = finalOption[0].tags.toString().split(':')[1].toString().split(',');
  return {
    question: finalOption,
    options
  };
}

const CabDependentQuestion = ({
  question,
  input,
  commonProperties,
  nameForClear
}) => {
  const isChecked = value => {
    try {
      let index = -1;

      if (input.value !== '') {
        index = [input.value].findIndex(obj => obj.user_input.toString() === value.toString());
      }

      return index !== -1;
    } catch (e) {
      return false;
    }
  };

  const revisedQuestion = getSelcectedQuestion(question, commonProperties.properties && commonProperties.properties.isDomestic);

  const handleChange = event => {
    if (!question.useInputForOptions) {
      input.onChange({
        option_id: revisedQuestion.question[0].id.toString(),
        customization_id: question.customizationId.toString()
      });
    } else {
      // TODO :: set user input
      input.onChange({
        user_input: event.target.value,
        option_id: revisedQuestion.question[0].id.toString(),
        customization_id: question.customizationId.toString()
      });
    }
  };

  return _react.default.createElement("div", {
    className: "row row- tour-type at_cabdependent"
  }, _react.default.createElement("div", {
    className: "iblock wfull"
  }, _react.default.createElement("p", {
    className: "f14p fw7 sfc6 m0 iblock"
  }, revisedQuestion.question[0].name), _react.default.createElement(_FilterClear.default, {
    name: nameForClear,
    text: "Clear",
    type: "radio",
    id: `id_${nameForClear}`
  })), _react.default.createElement("div", {
    className: "row row-8"
  }, revisedQuestion.options.map((option, index) => _react.default.createElement("div", {
    className: "col-xs-6 p8",
    key: `${revisedQuestion.question[0].id}_${index}`
  }, _react.default.createElement("input", {
    type: "radio",
    className: "radio-common",
    name: `${question.identifier}[${index}]`,
    id: `radio_button_${revisedQuestion.question[0].id}_${index}`,
    value: option,
    onChange: handleChange,
    checked: isChecked(option)
  }), _react.default.createElement("label", {
    htmlFor: `radio_button_${revisedQuestion.question[0].id}_${index}`,
    className: "cursorP"
  }, _react.default.createElement("p", {
    className: "m0"
  }, option))))));
};

CabDependentQuestion.propTypes = {
  question: _propTypes.default.object.isRequired,
  input: _propTypes.default.object.isRequired,
  commonProperties: _propTypes.default.object.isRequired,
  nameForClear: _propTypes.default.string.isRequired
};
var _default = CabDependentQuestion;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/CabforSightseeing.js":
/*!***********************************************************!*\
  !*** ./app/components/Form/FormLead/CabforSightseeing.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CabforSightseeing = ({
  input,
  question,
  cabQuestionHandler
}) => {
  const isChecked = optionId => {
    try {
      let index = -1;

      if (input.value !== '') {
        index = [input.value].findIndex(obj => obj.option_id.toString() === optionId.toString());
      }

      return index !== -1;
    } catch (e) {
      return false;
    }
  };

  const handleChange = event => {
    if (!question.useInputForOptions) {
      input.onChange({
        option_id: event.target.value.toString(),
        customization_id: question.customizationId.toString()
      });
    } else {
      // TODO :: set user input
      input.onChange({
        user_input: '',
        option_id: event.target.value.toString(),
        customization_id: question.customizationId.toString()
      });
    }

    cabQuestionHandler(event.target.value);
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "flight-included col-xs-8 pr0 pl0 at_cab"
  }, _react.default.createElement("p", {
    className: "fw9 relative m0"
  }, _react.default.createElement("span", {
    className: "flight-icon"
  }, _react.default.createElement(_Icon.CabIconFront, null)), question.title)), _react.default.createElement("div", {
    className: "col-xs-4 pr0 pl0 text-right at_cab_radio"
  }, question.options.map((option, index) => _react.default.createElement("div", {
    className: "col-xs-6 pl0 pr0",
    key: option.id
  }, _react.default.createElement("input", {
    type: "radio",
    className: "flight-radio",
    name: `${question.identifier}[${index}]`,
    id: `radio_button_${option.id}_${index}`,
    value: option.id,
    checked: isChecked(option.id),
    onChange: handleChange
  }), _react.default.createElement("label", {
    htmlFor: `radio_button_${option.id}_${index}`,
    className: "cursorP pr8 pl8"
  }, _react.default.createElement("p", {
    className: "m0 pfc4 f12 fw4 text-uppercase"
  }, option.name))))));
};

CabforSightseeing.propTypes = {
  question: _propTypes.default.object.isRequired,
  input: _propTypes.default.object.isRequired,
  cabQuestionHandler: _propTypes.default.func
};
CabforSightseeing.defaultProps = {
  cabQuestionHandler: () => {}
};
var _default = CabforSightseeing;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/FilterClear.js":
/*!*****************************************************!*\
  !*** ./app/components/Form/FormLead/FilterClear.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FilterClearButton = ({
  input,
  type,
  text,
  id
}) => _react.default.createElement("div", {
  className: "iblock fright"
}, _react.default.createElement("input", _extends({}, input, {
  type: type,
  className: "hide",
  id: id,
  value: ""
})), _react.default.createElement("label", {
  htmlFor: id,
  className: "cursorP mb0"
}, _react.default.createElement("label", {
  htmlFor: id,
  className: "text-uppercase pfc4 fw4 cursorP pt1 f12 mb0"
}, text, " ")));

FilterClearButton.propTypes = {
  input: _propTypes.default.object,
  type: _propTypes.default.string,
  text: _propTypes.default.string,
  id: _propTypes.default.string.isRequired
};
FilterClearButton.defaultProps = {
  input: {},
  type: 'radio',
  text: 'Clear'
};

const FilterClear = ({
  name,
  type,
  text,
  id
}) => _react.default.createElement("div", {
  className: "iblock fright"
}, _react.default.createElement(_reduxForm.Field, {
  name: name,
  component: FilterClearButton,
  type: type,
  text: text,
  id: id
}));

FilterClear.propTypes = {
  name: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired
};
var _default = FilterClear;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/FlightBookSlider.js":
/*!**********************************************************!*\
  !*** ./app/components/Form/FormLead/FlightBookSlider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FlightBooking = class FlightBooking extends _react.default.Component {
  constructor(props) {
    super(props);
    this.checkInitialValues = this.checkInitialValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.state = {
      selected: this.checkInitialValues()
    };
  }

  checkInitialValues() {
    try {
      if (this.props.formValues) {
        const flightAnswerAttributes = this.props.formValues.flight_answer_attributes;

        if (flightAnswerAttributes && flightAnswerAttributes.optionId) {
          return flightAnswerAttributes.optionId;
        }

        return null;
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  isChecked(optionId) {
    try {
      let index = -1;

      if (this.props.input.value !== '') {
        index = [this.props.input.value].findIndex(obj => obj.option_id.toString() === optionId.toString());
      }

      return index !== -1;
    } catch (e) {
      return false;
    }
  }

  handleChange(event) {
    this.props.input.onChange({
      option_id: event.target.value,
      customization_id: '23'
    });
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "flight-included col-xs-8 pr0 pl0"
    }, _react.default.createElement("p", {
      className: "fw9 relative m0"
    }, _react.default.createElement("span", {
      className: "flight-icon"
    }, _react.default.createElement(_Icon.Flights, null)), "Flights To Be Included?")), _react.default.createElement("div", {
      className: "col-xs-4 pr0 pl0 text-right"
    }, _react.default.createElement("div", {
      className: "col-xs-6 pl0 pr0"
    }, _react.default.createElement("input", {
      type: "radio",
      className: "flight-radio hide",
      name: "cust_23",
      id: "flight-included1",
      value: "97",
      defaultChecked: this.state.selected === '97',
      checked: this.isChecked(97),
      onChange: this.handleChange
    }), _react.default.createElement("label", {
      htmlFor: "flight-included1",
      className: "cursorP pr8 pl8"
    }, _react.default.createElement("p", {
      className: "m0 pfc4 fw4 f12"
    }, "YES"))), _react.default.createElement("div", {
      className: "col-xs-6 pl0 pr0"
    }, _react.default.createElement("input", {
      type: "radio",
      className: "flight-radio hide",
      name: "cust_23",
      id: "flight-included2",
      value: "98",
      defaultChecked: this.state.selected === '98',
      checked: this.isChecked(98),
      onChange: this.handleChange
    }), _react.default.createElement("label", {
      htmlFor: "flight-included2",
      className: "cursorP pr8 pl8"
    }, _react.default.createElement("p", {
      className: "m0 pfc4 fw4 f12"
    }, "NO")))));
  }

};
FlightBooking.propTypes = {
  input: _propTypes.PropTypes.object.isRequired,
  formValues: _propTypes.PropTypes.object
};
FlightBooking.defaultProps = {
  formValues: {}
};
var _default = FlightBooking;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/FormOneVariation.js":
/*!**********************************************************!*\
  !*** ./app/components/Form/FormLead/FormOneVariation.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.genericCheckbox = exports.renderPhone = exports.renderEmail = exports.renderToLocation = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FromLocation = _interopRequireDefault(__webpack_require__(/*! ../FromLocation */ "./app/components/Form/FromLocation.js"));

var _FromLocationSearch = _interopRequireDefault(__webpack_require__(/*! ../FromLocationSearch */ "./app/components/Form/FromLocationSearch.js"));

var _DepartureDateFormOne = _interopRequireDefault(__webpack_require__(/*! ../DepartureDateFormOne */ "./app/components/Form/DepartureDateFormOne.js"));

var _Slider = __webpack_require__(/*! ../../../constants/Slider */ "./app/constants/Slider.js");

var _IsdCodes = _interopRequireDefault(__webpack_require__(/*! ../../Generic/IsdCodes */ "./app/components/Generic/IsdCodes.js"));

__webpack_require__(/*! ./LeadForm.scss */ "./app/components/Form/FormLead/LeadForm.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _formValidators = __webpack_require__(/*! ../../../utils/formValidators */ "./app/utils/formValidators.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const renderToLocation = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
    warning
  },
  trackFormOneInteracted,
  onToLocFocus,
  handleBlur
}) => {
  const inputProps = {
    value: input.value,
    placeholder: "Where Do You Want To Go?",
    onChange: (obj, check = true) => {
      input.onChange(obj);

      if (check) {
        (void 0).props.handleBlur();
      }
    },
    id: input.id
  };
  return _react.default.createElement("div", {
    className: "form-field-label"
  }, _react.default.createElement("label", {
    htmlFor: label,
    className: "f14 fw9 pb15 block"
  }, label, _react.default.createElement("em", {
    className: "pfc2"
  }, "*")), _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: `input-with-icon-box input-with-icon-box ${touched && error && "input-error"}`
  }, _react.default.createElement("span", {
    className: "input-icon flexCenter locationIconSize"
  }, _react.default.createElement(_Icon.LocationMarkerIcon, null)), _react.default.createElement(_FromLocationSearch.default, {
    initialValue: input.value,
    itemSelected: input.onChange,
    trackFormOneInteracted: trackFormOneInteracted,
    handleFocus: onToLocFocus,
    id: "toLocation_fnew",
    handleBlur: handleBlur
  })), touched && error && _react.default.createElement("span", {
    className: "input-error-text input-error-text"
  }, error)));
};

exports.renderToLocation = renderToLocation;

const renderEmail = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
    warning
  },
  trackFormOneInteracted,
  changeHandler,
  emailVal
}) => _react.default.createElement("div", {
  className: "form-field-label mb15 row row-"
}, _react.default.createElement("label", {
  htmlFor: label,
  className: "f14 fw9 pb8 block"
}, label, _react.default.createElement("em", {
  className: "pfc2"
}, "*")), _react.default.createElement("div", {
  className: "input-with-icon-box row row- input-with-icon-box"
}, _react.default.createElement("span", {
  className: "input-icon"
}, _react.default.createElement(_Icon.ContactIcon, null)), _react.default.createElement("input", _extends({
  id: "email_fnew",
  className: `input ${touched && error && 'input-error'}`
}, input, {
  type: type,
  placeholder: "Enter Your Email Id",
  onClick: trackFormOneInteracted,
  onChange: changeHandler,
  value: emailVal
}))), touched && error && _react.default.createElement("span", {
  className: "input-error-text"
}, error));

exports.renderEmail = renderEmail;

const renderPhone = ({
  input,
  label,
  type,
  meta: {
    touched,
    error,
    warning
  },
  trackFormOneInteracted,
  defaultValue,
  isFocus
}) => _react.default.createElement("div", {
  className: "form-field-label"
}, _react.default.createElement("label", {
  htmlFor: label,
  className: "f14 fw9 pb8 block"
}, label, _react.default.createElement("em", {
  className: "pfc2"
}, "*")), _react.default.createElement("div", {
  className: "row"
}, _react.default.createElement("div", {
  className: "col-xs-12"
}, _react.default.createElement("div", {
  className: "col-xs-3 pl0 pr0"
}, _react.default.createElement("div", {
  className: "select-con input-box"
}, _react.default.createElement(_reduxForm.Field, {
  name: "isd_code",
  component: _IsdCodes.default,
  type: "select",
  trackFormOneInteracted: trackFormOneInteracted,
  id: "isd_code_fnew",
  defaultValue: defaultValue
}), _react.default.createElement("span", {
  className: "r10 block wauto lauto input-icon absolute-center-v downArrow"
}, _react.default.createElement(_Icon.DownArrow, null)))), _react.default.createElement("div", {
  className: `col-xs-9 pr0 ${isFocus ? '' : ''}`
}, _react.default.createElement("input", _extends({
  id: "phone_no_fnew",
  type: type,
  className: `input input-with-icon-box ${touched && error && 'input-error'}`
}, input, {
  placeholder: "Phone No",
  onClick: trackFormOneInteracted
}))))), touched && (error && _react.default.createElement("span", {
  className: "input-error-text"
}, error) || warning && _react.default.createElement("span", null, warning)));

exports.renderPhone = renderPhone;

const genericCheckbox = ({
  input,
  type,
  label,
  trackFormOneInteracted = () => {},
  id,
  classname,
  formValues
}) => {
  return _react.default.createElement("div", {
    className: classname
  }, _react.default.createElement("input", _extends({
    type: type
  }, input, {
    id: id,
    className: "checkbox-common checkbox-common",
    onClick: () => trackFormOneInteracted()
  })), _react.default.createElement("label", {
    htmlFor: id,
    className: "f12 pt8 pb0"
  }, id === 'whatsapp_opt_status' ? _react.default.createElement("span", {
    className: "labelIcon"
  }, _react.default.createElement(_Icon.WhatsAppIcon, null)) : null, ' ', label));
};

exports.genericCheckbox = genericCheckbox;

const defaultFields = ({
  input
}) => _react.default.createElement("input", _extends({
  type: "text"
}, input));

let FormOneVariation = class FormOneVariation extends _react.default.Component {
  constructor(props) {
    super(props);

    this.callNextForm = () => {
      const {
        location: {
          query
        }
      } = this.props;

      if (query.deals) {
        this.props.asynValidate(this.props.formValues, true, _Slider.SLIDER_1, true, true, _Slider.DEALS);
      } else {
        this.props.asynValidate(this.props.formValues, false, _Slider.SLIDER_2, true);
      }
    };

    this.state = {
      interactionCount: 1,
      email: props.email ? props.email : ''
    };
    this.handlFormInteraction = this.handlFormInteraction.bind(this);
    this.onToLocFocus = this.onToLocFocus.bind(this);
  }

  componentDidMount() {
    if (this.props.email) {
      this.props.dispatchRxFormAction(this.props.email, 'email');
    }
  }

  onToLocFocus() {
    const toLoc = document.getElementById('toLocation_fnew');
    const toLocScroll = toLoc.offsetTop;
    const toLocPos = toLoc.getBoundingClientRect().y;
    const toLocAdd = toLocPos - toLocScroll;
    window.scrollTo(0, toLocAdd);
  }

  handlFormInteraction() {
    if (this.state.interactionCount === 1) {
      this.props.trackFormOneInteracted({
        funnel_step: 3,
        section: 'Form 1',
        funnel_uuid: this.props.funnel_uuid,
        to_loc: this.props.rtData && this.props.rtData.to_loc ? this.props.rtData.to_loc : this.props.formValues && this.props.formValues.to_loc ? this.props.formValues.to_loc : ''
      });
      this.setState({
        interactionCount: this.state.interactionCount + 1
      });
    }
  }

  render() {
    const {
      location: {
        query
      }
    } = this.props;
    const isDeal = query.deals || false;
    return _react.default.createElement("div", {
      id: "form-variation",
      className: "form-variation row row-"
    }, _react.default.createElement("div", {
      className: "row row- relative bg-progress-div"
    }, _react.default.createElement("div", {
      id: "bg-progress",
      className: "absolute t0 l0 sbcw wfull bg-progress"
    }), _react.default.createElement("div", {
      className: "form-part form-field-incl-label p15 relative"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "to_loc",
      component: renderToLocation,
      placeholder: "To",
      type: "text",
      label: "To",
      validate: (0, _formValidators.requiredWithmessage)('enter correct city name'),
      trackFormOneInteracted: this.handlFormInteraction,
      onToLocFocus: this.onToLocFocus,
      handleBlur: this.props.handleBlur
    }), _react.default.createElement("div", {
      className: "row row- mb15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "exploring_destinations",
      component: genericCheckbox,
      type: "checkbox",
      label: "I am exploring destinations",
      className: "checkbox-common sfcw",
      id: "exploring-destination_fnew",
      trackFormOneInteracted: this.handlFormInteraction,
      classname: "exploring-destination at_explore"
    })), _react.default.createElement(_reduxForm.Field, {
      id: "fromLocation_fnew",
      className: "input",
      name: "from_loc",
      component: _FromLocation.default,
      placeholder: "From",
      type: "text",
      label: "From",
      trackFormOneInteracted: this.handlFormInteraction
    })), _react.default.createElement("div", {
      className: "form-part p15 mb1 relative"
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "start_date",
      component: _DepartureDateFormOne.default,
      placeholder: "DD / MM / YY",
      type: "text",
      label: "Departure Date",
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      days: this.props.days,
      validate: (0, _formValidators.requiredWithmessage)('Please select One Date-type'),
      trackFormOneInteracted: this.handlFormInteraction,
      rtData: this.props.rtData
    }))), _react.default.createElement("div", {
      className: "form-part p15 mb0 relative"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "email",
      component: renderEmail,
      placeholder: "Email",
      type: "email",
      label: "Email ID",
      validate: [(0, _formValidators.requiredWithmessage)('Enter valid email id'), _formValidators.email],
      trackFormOneInteracted: this.handlFormInteraction,
      changeHandler: e => {
        this.setState({
          email: e.target.value
        });
        this.props.handleEmailChange();
      },
      emailVal: this.state.email
    }), _react.default.createElement(_reduxForm.Field, {
      name: "phone_no",
      component: renderPhone,
      placeholder: "Phone",
      type: "number",
      label: "Phone No",
      validate: _formValidators.phoneNumber,
      trackFormOneInteracted: this.handlFormInteraction,
      defaultValue: this.props.formValues && this.props.formValues.isd_code ? this.props.formValues.isd_code : ''
    }), _react.default.createElement(_reduxForm.Field, {
      name: "whatsapp_opt_status",
      component: genericCheckbox,
      type: "checkbox",
      label: "Send trip updates on WhatsApp",
      className: "checkbox-common sfcw",
      id: "whatsapp_opt_status",
      trackFormOneInteracted: this.handlFormInteraction,
      classname: "at_whatsapp_opt_status",
      formValues: this.props.formValues
    })), _react.default.createElement("div", {
      className: "hide"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "start_date_flexible",
      component: defaultFields
    }), _react.default.createElement(_reduxForm.Field, {
      name: "booked_tickets",
      component: defaultFields
    }), _react.default.createElement(_reduxForm.Field, {
      name: "trip_days",
      component: defaultFields
    }), _react.default.createElement(_reduxForm.Field, {
      component: defaultFields,
      name: "dont_utilize_budget_new"
    }), _react.default.createElement(_reduxForm.Field, {
      component: defaultFields,
      name: "budget_new"
    }), _react.default.createElement(_reduxForm.Field, {
      component: defaultFields,
      name: "start_date_noidea"
    })), _react.default.createElement("div", {
      className: "row row- p8 pt0 sbcw hide"
    }, _react.default.createElement("p", {
      className: "mt0 mb0 mlauto mrauto relative pl48 pt8 pb8 pr0 iblock"
    }, _react.default.createElement("span", {
      className: "w20 h20 mr8 absolute l8 t2 iblock"
    }, _react.default.createElement(_Icon.LockIcon, null)), "Your information will be kept confidential")), _react.default.createElement("div", {
      className: "row row- sbcw wfull"
    }, _react.default.createElement("div", {
      className: "row row- p15 pt0 sbcw"
    }, _react.default.createElement("button", {
      id: "submit_btn_fnew",
      disabled: this.props.disableSubmitButton,
      type: "button",
      className: "btn-filled-pri-large wfull ripple",
      onClick: () => this.callNextForm()
    }, _react.default.createElement("div", {
      className: "wave"
    }), this.props.disableSubmitButton ? _react.default.createElement("p", {
      className: "loading-dots"
    }, _react.default.createElement("span", {
      className: "loading-dot-1"
    }), _react.default.createElement("span", {
      className: "loading-dot-2"
    }), _react.default.createElement("span", {
      className: "loading-dot-3"
    })) : isDeal ? 'Check Availability' : 'Request Quotes')), _react.default.createElement("div", {
      className: "progress-header-div hide"
    }, _react.default.createElement("div", {
      id: "progress-header",
      className: "progress-header"
    })))));
  }

};
FormOneVariation.propTypes = {
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  handleThankYou: _propTypes.default.func.isRequired,
  rtData: _propTypes.default.object,
  handleBlur: _propTypes.default.func.isRequired,
  handleEmailChange: _propTypes.default.func.isRequired,
  email: _propTypes.default.string,
  formValues: _propTypes.default.object
};
FormOneVariation.defaultProps = {
  rtData: {},
  email: '',
  formValues: {}
};
var _default = FormOneVariation;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/HotelRating.js":
/*!*****************************************************!*\
  !*** ./app/components/Form/FormLead/HotelRating.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const hotelPrefCustomizations = {
  star2: 32,
  star3: 8,
  star4: 7,
  star5: 6,
  noHotel: 96,
  customizationId: 2,
  noHotelCustomizationId: 22
};
let HotelRating = class HotelRating extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: {
        star2: false,
        star3: false,
        star4: false,
        star5: false,
        noHotel: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.getHotelPrefs = this.getHotelPrefs.bind(this);
    this.checkInitialValues = this.checkInitialValues.bind(this);
    this.checkInitialValues(props.formValues);
  }

  getHotelPrefs() {
    let isHotelSelected = false;
    const retValue = Object.keys(this.state.hotels).filter(hotelStar => this.state.hotels[hotelStar]).map(hotelStar => {
      const customizationId = hotelPrefCustomizations.customizationId;

      if (!this.state.hotels.noHotel) {
        isHotelSelected = true;
        return {
          option_id: hotelPrefCustomizations[hotelStar].toString(),
          customization_id: customizationId.toString()
        };
      }

      return {};
    });

    if (isHotelSelected) {
      this.props.dispatchRxFormAction({
        option_id: '95',
        customization_id: hotelPrefCustomizations.noHotelCustomizationId.toString()
      }, 'hotel_needed_answer_attributes');
    } else if (this.state.hotels.noHotel) {
      this.props.dispatchRxFormAction('', 'budget');
      this.props.dispatchRxFormAction({
        option_id: '96',
        customization_id: hotelPrefCustomizations.noHotelCustomizationId.toString()
      }, 'hotel_needed_answer_attributes');
    } else {
      this.props.dispatchRxFormAction('', 'hotel_needed_answer_attributes');
    }

    if (retValue.length < 1) {
      return '';
    }

    return retValue;
  }

  checkInitialValues(formValues) {
    const hotelAttributes = formValues.hotel_category_answers_attributes || [];
    const answerAttributes = formValues.hotel_needed_answer_attributes || {};
    hotelAttributes.forEach(obj => {
      if (obj.option_id === hotelPrefCustomizations.star2.toString()) {
        this.state = _objectSpread({}, this.state, {
          hotels: _objectSpread({}, this.state.hotels, {
            star2: true
          })
        });
      } else if (obj.option_id === hotelPrefCustomizations.star3.toString()) {
        this.state = _objectSpread({}, this.state, {
          hotels: _objectSpread({}, this.state.hotels, {
            star3: true
          })
        });
      } else if (obj.option_id === hotelPrefCustomizations.star4.toString()) {
        this.state = _objectSpread({}, this.state, {
          hotels: _objectSpread({}, this.state.hotels, {
            star4: true
          })
        });
      } else if (obj.option_id === hotelPrefCustomizations.star5.toString()) {
        this.state = _objectSpread({}, this.state, {
          hotels: _objectSpread({}, this.state.hotels, {
            star5: true
          })
        });
      }
    });

    if (answerAttributes.option_id === '96') {
      this.state = _objectSpread({}, this.state, {
        hotels: _objectSpread({}, this.state.hotels, {
          noHotel: true
        })
      });
    }
  }

  handleChange(event) {
    const hotelPrefs = {};

    if (event.target.checked) {
      if (event.target.name === 'noHotel') {
        hotelPrefs.star2 = false;
        hotelPrefs.star3 = false;
        hotelPrefs.star4 = false;
        hotelPrefs.star5 = false;
      } else {
        hotelPrefs.noHotel = false;
      }
    }

    this.setState({
      hotels: _objectSpread({}, this.state.hotels, hotelPrefs, {
        [event.target.name]: event.target.checked
      })
    }, () => {
      this.props.input.onChange(this.getHotelPrefs());
    });
  }

  render() {
    return _react.default.createElement("div", {
      className: "hotelratingDiv at_hotelratingdiv"
    }, _react.default.createElement("p", {
      className: "fw9 iblock m0 pfc3"
    }, "Preferred Hotel Category", _react.default.createElement("span", {
      className: "pfc4 fw4 f12"
    }, " (Rating)"), _react.default.createElement("em", {
      className: "pfc2 f16 fwb"
    }, "*")), _react.default.createElement("input", {
      type: "checkbox",
      name: "noHotel",
      id: "No-hotel",
      className: "No-hotel-input hide",
      checked: this.state.hotels.noHotel,
      onChange: this.handleChange
    }), _react.default.createElement("label", {
      htmlFor: "No-hotel",
      className: "text-uppercase pfc4 iblock fright fw4 cursorP pt3 f12 at_nohotel mb0"
    }, "No Hotel"), _react.default.createElement("div", {
      className: "row row- pfc3"
    }, _react.default.createElement("div", {
      className: "col-xs-3 p0"
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox5",
      name: "star5",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star5
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox5",
      className: "cursorP"
    }, "5 Star")), _react.default.createElement("div", {
      className: "col-xs-3 p0"
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox4",
      name: "star4",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star4
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox4",
      className: "cursorP"
    }, "4 Star")), _react.default.createElement("div", {
      className: "col-xs-3 p0"
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox3",
      name: "star3",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star3
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox3",
      className: "cursorP"
    }, "3 Star")), _react.default.createElement("div", {
      className: "col-xs-3 p0"
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox2",
      name: "star2",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star2
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox2",
      className: "cursorP"
    }, "2 Star")), this.props.meta && this.props.meta.touched && this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error)));
  }

};
HotelRating.propTypes = {
  input: _propTypes.default.object.isRequired,
  meta: _propTypes.default.object.isRequired,
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  formValues: _propTypes.default.object
};
HotelRating.defaultProps = {
  formValues: {}
};
var _default = HotelRating;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/LeadForm.scss":
/*!****************************************************!*\
  !*** ./app/components/Form/FormLead/LeadForm.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"form-header": "_J1yp7",
	"header-logo-right": "_3ihY9",
	"form-part": "_1IU_X",
	"flight-radio": "_1pVzJ",
	"flight-included": "_3KBzr",
	"flight-icon": "_2oI7p",
	"flight-included-con": "_1th-J",
	"form-variation": "_rhjhA",
	"form-field-incl-label": "_-onFU",
	"form-field-label": "_2Qdmo",
	"input-error-text": "_34dX2",
	"input-error": "_ufXAs",
	"exploring-destination": "_17J-f",
	"checkbox-common": "_3pC8f",
	"booked-ticket": "_3U3jh",
	"progress-header-div": "_2TZpz",
	"progress-header": "_r_EWc",
	"bg-progress-div": "_1dYXh",
	"bg-progress": "_19jqT",
	"input-with-icon-box": "_-Kn1M",
	"lead-form-transform": "_3aB9S",
	"iconSize": "_2wiL7",
	"locationIconSize": "_2ErVT",
	"profileCon": "_GrxB5",
	"No-hotel-input": "_HB47k",
	"at_whatsapp_opt_status": "_RVrph",
	"labelIcon": "_29OQa",
	"disabled": "_3SNpS",
	"location_logo": "_seK4c",
	"contact_icon": "_31yDW",
	"location_heading": "_3lfFx",
	"v2l-variation-1": "_ps5Mu"
};

/***/ }),

/***/ "./app/components/Form/FormLead/LeadFormSubmitButton.js":
/*!**************************************************************!*\
  !*** ./app/components/Form/FormLead/LeadFormSubmitButton.js ***!
  \**************************************************************/
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

const LeadFormSubmitButton = ({
  handleClick
}) => _react.default.createElement("button", {
  onClick: handleClick,
  type: "submit",
  className: "submit-btn fright btn-filled-pri-large radius2 pt15 pb15 wfull at_leadformsubmitbtn"
}, "Submit");

LeadFormSubmitButton.propTypes = {
  handleClick: _propTypes.default.func
};
LeadFormSubmitButton.defaultProps = {
  handleClick: () => {}
};
var _default = LeadFormSubmitButton;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/LeadFormThree.js":
/*!*******************************************************!*\
  !*** ./app/components/Form/FormLead/LeadFormThree.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuestions = getQuestions;
exports.checkCabDependentQuestion = checkCabDependentQuestion;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _CabforSightseeing = _interopRequireDefault(__webpack_require__(/*! ./CabforSightseeing */ "./app/components/Form/FormLead/CabforSightseeing.js"));

var _TypeTour = _interopRequireDefault(__webpack_require__(/*! ./TypeTour */ "./app/components/Form/FormLead/TypeTour.js"));

var _CabDependentQuestion = _interopRequireDefault(__webpack_require__(/*! ./CabDependentQuestion */ "./app/components/Form/FormLead/CabDependentQuestion.js"));

var _LocalExperience = _interopRequireDefault(__webpack_require__(/*! ./LocalExperience */ "./app/components/Form/FormLead/LocalExperience.js"));

var _LeadFormSubmitButton = _interopRequireDefault(__webpack_require__(/*! ./LeadFormSubmitButton */ "./app/components/Form/FormLead/LeadFormSubmitButton.js"));

var _AdditionalPrefrences = _interopRequireDefault(__webpack_require__(/*! ./AdditionalPrefrences */ "./app/components/Form/FormLead/AdditionalPrefrences.js"));

var _BackButton = _interopRequireDefault(__webpack_require__(/*! ./BackButton */ "./app/components/Form/FormLead/BackButton.js"));

var _Slider = __webpack_require__(/*! ../../../constants/Slider */ "./app/constants/Slider.js");

var _formOneLead = __webpack_require__(/*! ../../../reducers/formOneLead */ "./app/reducers/formOneLead.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQuestions(sliderQuestions, toDestination) {
  try {
    const defaultQs = [...sliderQuestions.defaultLastCardQuestions[0].questions, ...sliderQuestions.destinationCardQuestions[toDestination.toLowerCase()].questions];
    return defaultQs.sort((q1, q2) => q1.questionSequence - q2.questionSequence);
  } catch (e) {
    return sliderQuestions.defaultLastCardQuestions && sliderQuestions.defaultLastCardQuestions[0].questions;
  }
}

function checkCabDependentQuestion(formValues) {
  try {
    return formValues.other_answers_attributes.filter(obj => obj.option_id === '99').length > 0;
  } catch (e) {
    return false;
  }
}

let LeadFormThreeElement = class LeadFormThreeElement extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCabSelected: checkCabDependentQuestion(props.formValues)
    };
    this.cabQuestionHandler = this.cabQuestionHandler.bind(this);
  }

  componentDidMount() {
    const param = {
      funnel_step: 9,
      section: 'Form 3',
      object: '',
      cta: '',
      to_loc: this.props.commonProperties.properties.toDestination,
      funnel_uuid: this.props.commonProperties.redisKey,
      formType: this.props.formType
    };
    this.props.trackFormViewedCall(param);
  }

  cabQuestionHandler(val) {
    this.setState({
      isCabSelected: val === '99'
    });
  }

  render() {
    const toDestination = this.props.commonProperties.properties.toDestination;
    const questions = getQuestions(this.props.sliderQuestions, toDestination);
    return _react.default.createElement("div", {
      className: "lead-form-three clearfix lead-form-transform pb0 pt8 relative"
    }, _react.default.createElement("div", {
      className: "lead-form-three-height relative"
    }, _react.default.createElement("p", {
      className: "f20 fwb text-center lead-form-title"
    }, this.props.sliderTitle), questions.map((question, index) => {
      switch (question.templateType) {
        case 'radio_button':
          if (question.customizationTags === 'cab') {
            return _react.default.createElement("div", {
              className: "form-field-label p15",
              key: question.id
            }, _react.default.createElement("div", {
              className: "row row-"
            }, _react.default.createElement(_reduxForm.Field, {
              component: _CabforSightseeing.default,
              question: question,
              name: (0, _formOneLead.getNameType)(question, index),
              cabQuestionHandler: this.cabQuestionHandler
            })));
          }

          return _react.default.createElement("div", {
            className: "form-part form-field-label p15 pb8",
            key: question.id
          }, _react.default.createElement("div", {
            className: "row row-"
          }, _react.default.createElement(_reduxForm.Field, {
            component: _TypeTour.default,
            question: question,
            name: (0, _formOneLead.getNameType)(question, index),
            nameForClear: (0, _formOneLead.getNameType)(question, index)
          })));

        case 'drop_down':
          if (question.identifier === 'cust_3' && this.state.isCabSelected) {
            return _react.default.createElement("div", {
              className: "form-part form-field-label p15 pb8",
              key: question.id
            }, _react.default.createElement("div", {
              className: "row row-"
            }, _react.default.createElement(_reduxForm.Field, {
              component: _CabDependentQuestion.default,
              question: question,
              name: (0, _formOneLead.getNameType)(question, index),
              nameForClear: (0, _formOneLead.getNameType)(question, index),
              commonProperties: this.props.commonProperties
            })));
          } else if (question.identifier !== 'cust_3') {
            return _react.default.createElement("div", {
              className: "form-part form-field-label p15 pb8",
              key: question.id
            }, _react.default.createElement("div", {
              className: "row row-"
            }, _react.default.createElement(_reduxForm.Field, {
              component: _TypeTour.default,
              question: question,
              name: (0, _formOneLead.getNameType)(question, index),
              nameForClear: (0, _formOneLead.getNameType)(question, index)
            })));
          }

          return null;

        case 'text_area':
          return _react.default.createElement("div", {
            className: "form-part form-field-label p15",
            key: question.id
          }, _react.default.createElement("div", {
            className: "row row-"
          }, _react.default.createElement(_reduxForm.Field, {
            component: _AdditionalPrefrences.default,
            question: question,
            name: (0, _formOneLead.getNameType)(question, index),
            type: "text"
          })));

        case 'checkbox':
          return _react.default.createElement("div", {
            className: "form-part form-field-label p15 pb5",
            key: question.id
          }, _react.default.createElement("div", {
            className: "row row-"
          }, _react.default.createElement(_reduxForm.Field, {
            component: _LocalExperience.default,
            name: (0, _formOneLead.getNameType)(question, index),
            question: question,
            nameForClear: (0, _formOneLead.getNameType)(question, index)
          })));

        default:
          return null;
      }
    }), _react.default.createElement("div", {
      className: "form-part form-field-label p15 sbcw wfull lead-form-one-btn"
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-4 p0"
    }, _react.default.createElement(_BackButton.default, {
      handleClick: () => {
        this.props.updateFields({
          type: _Slider.SET_DISPLAY_MODE,
          value: _Slider.SLIDER_2
        });
        this.props.openFormState(_Slider.SLIDER_2);
      }
    })), _react.default.createElement("div", {
      className: "col-xs-2"
    }), _react.default.createElement("div", {
      className: "col-xs-6 p0"
    }, _react.default.createElement(_LeadFormSubmitButton.default, {
      handleClick: () => {
        this.props.handleThankYou();
      }
    }))))));
  }

};
LeadFormThreeElement.propTypes = {
  sliderQuestions: _propTypes.default.object.isRequired,
  updateFields: _propTypes.default.func.isRequired,
  commonProperties: _propTypes.default.object.isRequired,
  formValues: _propTypes.default.object,
  trackFormViewedCall: _propTypes.default.func.isRequired,
  sliderTitle: _propTypes.default.string,
  handleThankYou: _propTypes.default.func.isRequired,
  openFormState: _propTypes.default.func,
  formType: _propTypes.default.string
};
LeadFormThreeElement.defaultProps = {
  formValues: {},
  sliderTitle: 'Almost Done!',
  openFormState: value => value,
  formType: 'Slider Close'
};
var _default = LeadFormThreeElement;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/LeadFormTwo.js":
/*!*****************************************************!*\
  !*** ./app/components/Form/FormLead/LeadFormTwo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _HotelRating = _interopRequireDefault(__webpack_require__(/*! ./HotelRating */ "./app/components/Form/FormLead/HotelRating.js"));

var _FlightBookSlider = _interopRequireDefault(__webpack_require__(/*! ./FlightBookSlider */ "./app/components/Form/FormLead/FlightBookSlider.js"));

var _BudgetSlider = _interopRequireDefault(__webpack_require__(/*! ./BudgetSlider */ "./app/components/Form/FormLead/BudgetSlider.js"));

var _TravelerCount = _interopRequireDefault(__webpack_require__(/*! ./TravelerCount */ "./app/components/Form/FormLead/TravelerCount.js"));

var _WillBook = _interopRequireDefault(__webpack_require__(/*! ./WillBook */ "./app/components/Form/FormLead/WillBook.js"));

var _BackButton = _interopRequireDefault(__webpack_require__(/*! ./BackButton */ "./app/components/Form/FormLead/BackButton.js"));

var _NextButton = _interopRequireDefault(__webpack_require__(/*! ./NextButton */ "./app/components/Form/FormLead/NextButton.js"));

var _formValidators = __webpack_require__(/*! ../../../utils/formValidators */ "./app/utils/formValidators.js");

var _Slider = __webpack_require__(/*! ../../../constants/Slider */ "./app/constants/Slider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defaultFields = ({
  input
}) => _react.default.createElement("input", _extends({
  type: "text"
}, input));

defaultFields.propTypes = {
  input: _propTypes.default.object.isRequired
};
let LeadFormTwo = class LeadFormTwo extends _react.Component {
  componentDidMount() {
    const param = {
      funnel_step: 6,
      section: 'Form 2',
      object: '',
      cta: '',
      to_loc: this.props.formValues && this.props.formValues.to_loc ? this.props.formValues.to_loc : '',
      funnel_uuid: this.props.commonProperties.redisKey,
      formType: this.props.formType
    };
    this.props.trackFormViewedCall(param);
  }

  render() {
    const {
      location: {
        query
      },
      commonProperties: {
        sliderDisplayMode
      }
    } = this.props;
    return _react.default.createElement("div", {
      className: "lead-form-three lead-form-transform clearfix lead-form-transform pb0 pt8 relative"
    }, _react.default.createElement("div", {
      className: "lead-form-three-height relative"
    }, _react.default.createElement("p", {
      className: "f20 fwb lead-form-title pl15 pr15 text-center "
    }, this.props.sliderTitle), _react.default.createElement("div", {
      className: "form-field-label p15 pb8"
    }, _react.default.createElement("div", {
      className: "row row- "
    }, _react.default.createElement(_reduxForm.Field, {
      component: _HotelRating.default,
      name: "hotel_category_answers_attributes",
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      validate: (0, _formValidators.requiredWithmessage)('Hotel field must be selected')
    }))), _react.default.createElement("div", {
      className: "form-part form-field-label p15 "
    }, _react.default.createElement("div", {
      className: "row row- at_flightincluded pl0 pr0"
    }, _react.default.createElement(_reduxForm.Field, {
      component: _FlightBookSlider.default,
      name: "flight_answer_attributes",
      formValues: this.props.formValues
    }))), _react.default.createElement("div", {
      className: "form-part form-part form-field-label p15 pb0 at_budget"
    }, _react.default.createElement(_reduxForm.Field, {
      component: _BudgetSlider.default,
      name: "budget",
      budget_info: this.props.sliderQuestions.budget_info,
      budgetOptions: this.props.getBudgetOptions,
      getSelectedBudget: this.props.getSelectedBudget,
      isFlightSelected: this.props.isFlightSelected
    })), _react.default.createElement("div", {
      className: "form-part form-field-label p15 pb8 at_travelercount"
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_reduxForm.Field, {
      component: _TravelerCount.default,
      name: "traveler_count",
      formValues: this.props.formValues,
      dispatchRxFormAction: this.props.dispatchRxFormAction
    }))), _react.default.createElement("div", {
      className: "form-part form-field-label p15 at_willbook"
    }, _react.default.createElement("div", {
      className: "row row- sbcw"
    }, _react.default.createElement(_reduxForm.Field, {
      component: _WillBook.default,
      name: "other_answers_attributes[0]",
      formValues: this.props.formValues
    }))), _react.default.createElement("div", {
      className: "hide"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "adult",
      component: defaultFields
    }), _react.default.createElement(_reduxForm.Field, {
      name: "child_age_answers_attributes",
      component: defaultFields
    }), _react.default.createElement(_reduxForm.Field, {
      name: "child",
      component: defaultFields
    }), _react.default.createElement(_reduxForm.Field, {
      name: "hotel_needed_answer_attributes",
      component: defaultFields
    })), _react.default.createElement("div", {
      className: "form-part form-field-label p15 wfull lead-form-one-btn"
    }, _react.default.createElement("div", {
      className: "row row- at_leadformbtns"
    }, _react.default.createElement("div", {
      className: "col-xs-4 p0"
    }, _react.default.createElement(_BackButton.default, {
      handleClick: () => {
        this.props.updateFields({
          type: _Slider.SET_DISPLAY_MODE,
          value: _Slider.SLIDER_1
        });
        this.props.openFormState(_Slider.SLIDER_1);
      }
    })), _react.default.createElement("div", {
      className: "col-xs-4"
    }), _react.default.createElement("div", {
      className: "col-xs-4 p0"
    }, _react.default.createElement(_NextButton.default, {
      handleClick: () => {
        this.props.asynValidate(this.props.formValues, false, _Slider.SLIDER_3, true);
        this.props.openFormState(_Slider.SLIDER_3);
      }
    }))))));
  }

};
LeadFormTwo.propTypes = {
  sliderQuestions: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  updateFields: _propTypes.default.func.isRequired,
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  formValues: _propTypes.default.object,
  getBudgetOptions: _propTypes.default.object,
  getSelectedBudget: _propTypes.default.string,
  isFlightSelected: _propTypes.default.bool,
  trackFormViewedCall: _propTypes.default.func.isRequired,
  sliderTitle: _propTypes.default.string,
  asynValidate: _propTypes.default.func.isRequired,
  commonProperties: _propTypes.default.object.isRequired,
  openFormState: _propTypes.default.func,
  formType: _propTypes.default.string
};
LeadFormTwo.defaultProps = {
  formValues: {},
  getBudgetOptions: {},
  getSelectedBudget: '',
  isFlightSelected: false,
  sliderTitle: 'Great! Tell Us What You Prefer',
  openFormState: value => value,
  formType: 'Slider Close'
};
var _default = LeadFormTwo;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/LocalExperience.js":
/*!*********************************************************!*\
  !*** ./app/components/Form/FormLead/LocalExperience.js ***!
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

var _FilterClear = _interopRequireDefault(__webpack_require__(/*! ./FilterClear */ "./app/components/Form/FormLead/FilterClear.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LocalExperience = ({
  question,
  input,
  nameForClear
}) => {
  const isChecked = optionId => {
    try {
      return [...input.value].findIndex(obj => obj.option_id.toString() === optionId.toString()) !== -1;
    } catch (e) {
      return false;
    }
  };

  const handleChange = event => {
    const newValue = [...input.value];
    const obj = {
      option_id: event.target.value.toString(),
      customization_id: question.customizationId.toString()
    };

    if (event.target.checked) {
      newValue.push(obj);
    } else {
      newValue.splice(newValue.findIndex(j => j.option_id.toString() === event.target.value.toString()), 1);
    }

    return input.onChange(newValue);
  };

  return _react.default.createElement("div", {
    className: "row local-exp row- at_LocalExperience"
  }, _react.default.createElement("div", {
    className: "iblock wfull"
  }, _react.default.createElement("p", {
    className: "fw9 iblock m0"
  }, question.title), _react.default.createElement(_FilterClear.default, {
    name: nameForClear,
    text: "Clear",
    type: "radio",
    id: `id_${nameForClear}`
  })), question.options.map((option, index) => _react.default.createElement("div", {
    className: "col-xs-12 p0 at_LocalExperience_checkbox",
    key: option.id
  }, _react.default.createElement("input", {
    type: "checkbox",
    id: `radio_button_${option.id}_${index}`,
    className: "checkbox-common",
    value: option.id,
    name: `${question.identifier}[${index}]`,
    onChange: handleChange,
    checked: isChecked(option.id)
  }), _react.default.createElement("label", {
    htmlFor: `radio_button_${option.id}_${index}`,
    className: "cursorP ellipsis wauto"
  }, option.name))));
};

LocalExperience.propTypes = {
  question: _propTypes.default.object.isRequired,
  input: _propTypes.default.object.isRequired,
  nameForClear: _propTypes.default.string.isRequired
};
var _default = LocalExperience;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/NextButton.js":
/*!****************************************************!*\
  !*** ./app/components/Form/FormLead/NextButton.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NextButton = ({
  handleClick
}) => _react.default.createElement(_reactRouter.Link, {
  onClick: handleClick,
  className: "next-btn fright btn-filled-pri-large radius2 pt15 pb15 wfull at_next"
}, "Next");

NextButton.propTypes = {
  handleClick: _propTypes.default.func
};
NextButton.defaultProps = {
  handleClick: () => {}
};
var _default = NextButton;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/footer.js":
/*!***************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/footer.js ***!
  \***************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = props => _react.default.createElement("div", {
  className: "form-footer p8 flex"
}, props.goBackDisabled ? _react.default.createElement("button", {
  className: "flexFull back-button-text disabled",
  type: "button"
}, _react.default.createElement("span", {
  className: "arrow-icon-container left"
}, _react.default.createElement(_Icon.DisabledArrowLeft, null)), "Back") : _react.default.createElement("button", {
  className: "flexFull back-button-text",
  onClick: props.goBack,
  type: "button"
}, _react.default.createElement("span", {
  className: "arrow-icon-container left"
}, _react.default.createElement(_Icon.LeftRedArrow, null)), "Back"), _react.default.createElement("button", {
  type: "button",
  className: `btn-filled-pri-large flexFull ${props.goNextDisabled ? 'disabled' : ''}`,
  onClick: props.goForward
}, props.isLastSlide ? 'Submit' : 'Next', _react.default.createElement("span", {
  className: "arrow-icon-container"
}, _react.default.createElement(_Icon.RightWhiteArrow, null))));

Footer.propTypes = {
  goBack: _propTypes.default.func,
  goForward: _propTypes.default.func,
  goBackDisabled: _propTypes.default.bool,
  goNextDisabled: _propTypes.default.bool,
  isLastSlide: _propTypes.default.bool
};
Footer.defaultProps = {
  goBack: () => {},
  goForward: () => {},
  goBackDisabled: false,
  isLastSlide: false
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/index.js":
/*!**************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/index.js ***!
  \**************************************************************/
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

var _FromLocation = _interopRequireDefault(__webpack_require__(/*! ../../FromLocation */ "./app/components/Form/FromLocation.js"));

var _DepartureDateFormOne = _interopRequireDefault(__webpack_require__(/*! ./leadForm/DepartureDateFormOne */ "./app/components/Form/FormLead/SequentialForm/leadForm/DepartureDateFormOne.js"));

var _Slider = __webpack_require__(/*! ../../../../constants/Slider */ "./app/constants/Slider.js");

var _BudgetSlider = _interopRequireDefault(__webpack_require__(/*! ./leadForm/BudgetSlider */ "./app/components/Form/FormLead/SequentialForm/leadForm/BudgetSlider.js"));

__webpack_require__(/*! app/theme/SequentialForm.scss */ "./app/theme/SequentialForm.scss");

var _formValidators = __webpack_require__(/*! ../../../../utils/formValidators */ "./app/utils/formValidators.js");

var _StartPlanning = _interopRequireDefault(__webpack_require__(/*! ./leadForm/StartPlanning */ "./app/components/Form/FormLead/SequentialForm/leadForm/StartPlanning.js"));

var _Inclusions = _interopRequireDefault(__webpack_require__(/*! ./leadForm/Inclusions */ "./app/components/Form/FormLead/SequentialForm/leadForm/Inclusions.js"));

var _ContactDetails = _interopRequireDefault(__webpack_require__(/*! ./leadForm/ContactDetails */ "./app/components/Form/FormLead/SequentialForm/leadForm/ContactDetails.js"));

var _AdditionalDetails = _interopRequireDefault(__webpack_require__(/*! ./leadForm/AdditionalDetails */ "./app/components/Form/FormLead/SequentialForm/leadForm/AdditionalDetails.js"));

var _TravelerCount = _interopRequireDefault(__webpack_require__(/*! ./leadForm/TravelerCount */ "./app/components/Form/FormLead/SequentialForm/leadForm/TravelerCount.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const progressBar = (formStage, isDeal) => _react.default.createElement("div", {
  className: "progress-bar-container flex"
}, [...Array(isDeal ? 5 : 7)].map((e, i) => _react.default.createElement("span", {
  className: `progress-indicator ${i <= formStage - 1 ? 'active' : ''}`,
  key: i
})));

let SequentialForm = class SequentialForm extends _react.default.Component {
  constructor(props) {
    super(props);

    this.handlFormInteraction = () => {
      const {
        interactionCount
      } = this.state;
      const {
        funnel_uuid,
        rtData,
        formValues
      } = this.props;

      if (interactionCount === 1) {
        const to_loc = rtData && rtData.to_loc ? rtData.to_loc : formValues && formValues.to_loc ? formValues.to_loc : 'unknown';
        (0, _FormDataFormatter.setCookie)(_segmentEvents.FUNNEL_UUID_KEY, funnel_uuid);
        (0, _segmentEvents.trackSegment)({
          event: 'Lead Funnel',
          category: `Destination:${to_loc}`,
          section: 'Form 1',
          destination_list: '',
          form_variant: 'Slider Close',
          funnel_step: 3,
          funnel_uuid: funnel_uuid,
          label: 'Form1 Interacted',
          trip_id: getCookie('trip_id')
        });
        this.setState({
          interactionCount: interactionCount + 1
        });
      }
    };

    this.formPartOne = () => {
      document.dispatchEvent(new CustomEvent('form-one-part-one'));
    };

    this.callNextSlide = ({
      submitVariation,
      variation,
      variationStep,
      isBackButton
    }) => {
      if (isBackButton) {
        this.props.updateFields({
          type: _Slider.SET_DISPLAY_MODE,
          value: variationStep
        });
        this.props.openFormState(variationStep);
      } else {
        this.props.asynValidate(this.props.formValues, submitVariation, variationStep, true, variation, variationStep);
      }
    };

    this.state = {
      interactionCount: 1,
      email: props.email ? props.email : ''
    };
  }

  componentDidMount() {
    if (this.props.email) {
      this.props.dispatchRxFormAction(this.props.email, 'email');
    }
  }

  render() {
    const {
      sliderDisplayMode,
      sliderQuestions,
      commonProperties,
      location
    } = this.props;
    const isDeal = location.query.deals;
    return _react.default.createElement("div", {
      className: "sequential-form-container"
    }, progressBar(this.props.progressBarCount, isDeal), _react.default.createElement("div", {
      className: "mb64"
    }, sliderDisplayMode === _Slider.SEQUENTIAL_FORM_ONE && _react.default.createElement(_StartPlanning.default, {
      requiredWithmessage: _formValidators.requiredWithmessage,
      handlFormInteraction: this.handlFormInteraction,
      handleBlur: this.props.handleBlur,
      FromLocation: _FromLocation.default,
      asynValidate: this.props.asynValidate,
      callNextSlide: this.callNextSlide,
      changeFormField: this.props.changeFormField,
      formValues: this.props.formValues
    }), sliderDisplayMode === _Slider.SEQUENTIAL_FORM_TWO && _react.default.createElement("div", {
      className: "p15 mb1 relative"
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "start_date",
      component: _DepartureDateFormOne.default,
      placeholder: "DD / MM / YY",
      type: "text",
      label: "Departure Date",
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      days: this.props.days,
      validate: (0, _formValidators.requiredWithmessage)('Please select One Date-type'),
      trackFormOneInteracted: this.handlFormInteraction,
      rtData: this.props.rtData,
      callNextSlide: this.callNextSlide,
      location: location
    }))), sliderDisplayMode === _Slider.SEQUENTIAL_FORM_THREE && _react.default.createElement(_Inclusions.default, {
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      callNextSlide: this.callNextSlide,
      sliderQuestions: sliderQuestions,
      commonProperties: commonProperties,
      touch: this.props.touch,
      location: location
    }), sliderDisplayMode === _Slider.SEQUENTIAL_FORM_FOUR && _react.default.createElement(_reduxForm.Field, {
      component: _BudgetSlider.default,
      formValues: this.props.formValues,
      name: "budget",
      budget_info: this.props.sliderQuestions.budget_info,
      budgetOptions: this.props.getBudgetOptions,
      getSelectedBudget: this.props.getSelectedBudget,
      isFlightSelected: this.props.isFlightSelected,
      callNextSlide: this.callNextSlide
    }), sliderDisplayMode === _Slider.SEQUENTIAL_FORM_FIVE && _react.default.createElement(_reduxForm.Field, {
      component: _TravelerCount.default,
      name: "traveler_count",
      formValues: this.props.formValues,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      callNextSlide: this.callNextSlide,
      location: location
    }), sliderDisplayMode === _Slider.SEQUENTIAL_FORM_SIX && _react.default.createElement(_ContactDetails.default, {
      formValues: this.props.formValues,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      callNextSlide: this.callNextSlide,
      handleEmailChange: this.props.handleEmailChange,
      email: this.props.email,
      location: location
    }), (sliderDisplayMode === _Slider.SEQUENTIAL_FORM_SEVEN || sliderDisplayMode === _Slider.SEQUENTIAL_FORM_END) && _react.default.createElement(_AdditionalDetails.default, {
      commonProperties: this.props.commonProperties,
      sliderQuestions: this.props.sliderQuestions,
      formValues: this.props.formValues,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      callNextSlide: this.callNextSlide,
      handleThankYou: this.props.handleThankYou
    })));
  }

};
SequentialForm.propTypes = {
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  touch: _propTypes.default.func.isRequired,
  rtData: _propTypes.default.object,
  handleBlur: _propTypes.default.func.isRequired,
  getBudgetOptions: _propTypes.default.object,
  changeFormField: _propTypes.default.func,
  handleThankYou: _propTypes.default.func,
  openFormState: _propTypes.default.func,
  handleEmailChange: _propTypes.default.func.isRequired,
  email: _propTypes.default.string,
  formValues: _propTypes.default.object,
  sliderQuestions: _propTypes.default.object,
  location: _propTypes.default.object.isRequired,
  commonProperties: _propTypes.default.object,
  isFlightSelected: _propTypes.default.bool,
  progressBarCount: _propTypes.default.number
};
SequentialForm.defaultProps = {
  rtData: {},
  email: '',
  formValues: {}
};
var _default = SequentialForm;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/AdditionalDetails.js":
/*!***********************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/AdditionalDetails.js ***!
  \***********************************************************************************/
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

var _WillBook = _interopRequireDefault(__webpack_require__(/*! ./WillBook */ "./app/components/Form/FormLead/SequentialForm/leadForm/WillBook.js"));

var _AdditionalPrefrences = _interopRequireDefault(__webpack_require__(/*! ../../AdditionalPrefrences */ "./app/components/Form/FormLead/AdditionalPrefrences.js"));

var _Slider = __webpack_require__(/*! ../../../../../constants/Slider */ "./app/constants/Slider.js");

var _footer = _interopRequireDefault(__webpack_require__(/*! ../footer */ "./app/components/Form/FormLead/SequentialForm/footer.js"));

var _formOneLead = __webpack_require__(/*! ../../../../../reducers/formOneLead */ "./app/reducers/formOneLead.js");

var _TypeTour = _interopRequireDefault(__webpack_require__(/*! ../../TypeTour */ "./app/components/Form/FormLead/TypeTour.js"));

var _CabDependentQuestion = _interopRequireDefault(__webpack_require__(/*! ../../CabDependentQuestion */ "./app/components/Form/FormLead/CabDependentQuestion.js"));

var _LocalExperience = _interopRequireDefault(__webpack_require__(/*! ../../LocalExperience */ "./app/components/Form/FormLead/LocalExperience.js"));

var _LeadFormThree = __webpack_require__(/*! ../../LeadFormThree */ "./app/components/Form/FormLead/LeadFormThree.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const question = {
  customizationId: 132,
  customizationTags: null,
  description: 'Hotel names if you have already decided, Special considerations, e.g. kid friendly, Arrival and departure date / time, if tickets booked?',
  hasOthers: false,
  id: 137,
  identifier: 'additional_prefs',
  jsonValueType: 'input',
  questionSequence: 100,
  railsFormName: 'info',
  templateId: '10',
  templateType: 'text_area',
  title: 'Additional requirements',
  valueType: 'single_value'
};
let AdditionalDetails = class AdditionalDetails extends _react.Component {
  constructor(props) {
    super(props);

    this.goBack = () => {
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_SIX,
        isBackButton: true
      });
    };

    this.goForward = () => {
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_END
      }); //this.props.handleThankYou();
    };

    this.state = {
      isCabSelected: (0, _LeadFormThree.checkCabDependentQuestion)(props.formValues)
    };
  }

  render() {
    const toDestination = this.props.commonProperties && this.props.commonProperties.properties && this.props.commonProperties.properties.toDestination;
    const questions = (0, _LeadFormThree.getQuestions)(this.props.sliderQuestions, toDestination);
    return _react.default.createElement("div", {
      className: "form-body"
    }, _react.default.createElement("div", {
      className: "p15"
    }, _react.default.createElement(_reduxForm.Field, {
      component: _WillBook.default,
      name: "other_answers_attributes[0]",
      formValues: this.props.formValues,
      className: "mb15"
    }), questions.map((question, index) => {
      switch (question.templateType) {
        case 'radio_button':
          if (question.customizationTags === 'cab') {
            return null;
          }

          return _react.default.createElement("div", {
            className: "row row- mb15",
            key: question.id
          }, _react.default.createElement(_reduxForm.Field, {
            component: _TypeTour.default,
            question: question,
            name: (0, _formOneLead.getNameType)(question, index),
            nameForClear: (0, _formOneLead.getNameType)(question, index)
          }));

        case 'drop_down':
          if (question.identifier === 'cust_3' && this.state.isCabSelected) {
            return _react.default.createElement("div", {
              className: "row row- mb15",
              key: question.id
            }, _react.default.createElement(_reduxForm.Field, {
              component: _CabDependentQuestion.default,
              question: question,
              name: (0, _formOneLead.getNameType)(question, index),
              nameForClear: (0, _formOneLead.getNameType)(question, index),
              commonProperties: this.props.commonProperties
            }));
          } else if (question.identifier !== 'cust_3') {
            return _react.default.createElement("div", {
              className: "row row- mb15",
              key: question.id
            }, _react.default.createElement(_reduxForm.Field, {
              component: _TypeTour.default,
              question: question,
              name: (0, _formOneLead.getNameType)(question, index),
              nameForClear: (0, _formOneLead.getNameType)(question, index)
            }));
          }

          return null;

        case 'text_area':
          return null;

        case 'checkbox':
          return _react.default.createElement("div", {
            className: "row row- mb15 local-experience-container",
            key: question.id
          }, _react.default.createElement(_reduxForm.Field, {
            component: _LocalExperience.default,
            name: (0, _formOneLead.getNameType)(question, index),
            question: question,
            nameForClear: (0, _formOneLead.getNameType)(question, index)
          }));

        default:
          return null;
      }
    }), _react.default.createElement(_reduxForm.Field, {
      component: _AdditionalPrefrences.default,
      question: question,
      name: "info",
      type: "text"
    })), _react.default.createElement(_footer.default, {
      goBack: this.goBack,
      goForward: this.goForward,
      isLastSlide: true
    }));
  }

};
;
AdditionalDetails.propTypes = {
  formStage: _propTypes.default.number,
  formValues: _propTypes.default.obj,
  question: _propTypes.default.obj,
  commonProperties: _propTypes.default.obj,
  sliderQuestions: _propTypes.default.obj,
  callNextSlide: _propTypes.default.func,
  handleThankYou: _propTypes.default.func,
  progressBar: _propTypes.default.func
};
var _default = AdditionalDetails;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/BudgetSlider.js":
/*!******************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/BudgetSlider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BudgetText = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _parsers = __webpack_require__(/*! ../../../../../utils/parsers */ "./app/utils/parsers.js");

var _footer = _interopRequireDefault(__webpack_require__(/*! ../footer */ "./app/components/Form/FormLead/SequentialForm/footer.js"));

var _Slider = __webpack_require__(/*! ../../../../../constants/Slider */ "./app/constants/Slider.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getBudgetIcon = (index, isDefault) => {
  if (isDefault) {
    if (index === 0) {
      return _react.default.createElement(_Icon.BudgetMin, null);
    }

    if (index === 1) {
      return _react.default.createElement(_Icon.BudgetLow, null);
    }

    if (index === 2) {
      return _react.default.createElement(_Icon.BudgetMedium, null);
    }
  } else {
    if (index === 0) {
      return _react.default.createElement(_Icon.BudgetLow, null);
    }

    if (index === 1) {
      return _react.default.createElement(_Icon.BudgetMedium, null);
    }
  }

  return _react.default.createElement(_Icon.BudgetHigh, null);
};

const BudgetOptions = ({
  budgetOptions,
  handleChange,
  getSelectedBudget,
  isFlightSelected,
  formValues
}) => {
  const budgetKeys = Object.keys(budgetOptions);
  const budgetFields = budgetKeys.slice(0, 3).map((key, index) => {
    const isChecked = formValues.budget === `${budgetOptions[key]}..${budgetOptions[budgetKeys[index + 1]]}`;
    return _react.default.createElement("div", {
      className: `button-box round-icon budget-icon ${isChecked ? 'active' : ''}`,
      key: key
    }, _react.default.createElement("span", {
      className: "tick-icon-container"
    }, _react.default.createElement(_Icon.Tick, null)), _react.default.createElement("div", {
      className: "icon-48"
    }, getBudgetIcon(index)), _react.default.createElement("input", {
      id: key,
      type: "radio",
      className: "radio-common",
      name: "budgetOptions",
      value: `${budgetOptions[key]}..${budgetOptions[budgetKeys[index + 1]]}`,
      checked: isChecked,
      onChange: handleChange
    }), _react.default.createElement("p", {
      className: "text-center"
    }, "\u20B9", (0, _parsers.numberWithCommas)(budgetOptions[key]), " - \u20B9", (0, _parsers.numberWithCommas)(budgetOptions[budgetKeys[index + 1]])), _react.default.createElement("p", {
      className: "pfc4 fw4 f12 text-center"
    }, "per person"));
  });
  return _react.default.createElement("div", {
    className: "flex spaceBetween mb24 flexWrap budget-selector-container"
  }, budgetFields);
};

BudgetOptions.propTypes = {
  budgetOptions: _propTypes.default.object,
  formValues: _propTypes.default.object.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  getSelectedBudget: _propTypes.default.string,
  isFlightSelected: _propTypes.default.bool.isRequired
};
BudgetOptions.defaultProps = {
  getSelectedBudget: '',
  budgetOptions: {
    budget: 25250,
    deluxe: 26750,
    min: 24500,
    standard: 26000
  }
};

const DefaultBudgetOptions = ({
  budgetOptions,
  handleChange,
  getSelectedBudget,
  isFlightSelected,
  formValues
}) => {
  const budgetKeys = Object.keys(budgetOptions);

  const displayValues = key => {
    if (key.min === 10000) {
      return 'Below ₹20,000';
    }

    if (key.min === 60000) {
      return 'Above ₹60,000';
    }

    return `₹ ${(0, _parsers.numberWithCommas)(key.min)} - ₹ ${(0, _parsers.numberWithCommas)(key.max)}`;
  };

  const budgetFields = budgetKeys.slice(0, 4).map((key, index) => {
    const isChecked = formValues.budget === `${budgetOptions[key].min}..${budgetOptions[key].max}`;
    return _react.default.createElement("div", {
      className: `button-box round-icon budget-icon ${isChecked ? 'active' : ''}`,
      key: key
    }, _react.default.createElement("span", {
      className: "tick-icon-container"
    }, _react.default.createElement(_Icon.Tick, null)), _react.default.createElement("div", {
      className: "icon-48"
    }, getBudgetIcon(index, true)), _react.default.createElement("input", {
      id: key,
      type: "radio",
      className: "radio-common",
      name: "budgetOptions",
      value: `${budgetOptions[key].min}..${budgetOptions[key].max}`,
      checked: isChecked,
      onChange: handleChange
    }), _react.default.createElement("p", {
      className: "text-center"
    }, displayValues(budgetOptions[key])), _react.default.createElement("p", {
      className: "pfc4 fw4 f12 text-center"
    }, "per person"));
  });
  return _react.default.createElement("div", {
    className: "flex spaceBetween mb24 flexWrap budget-selector-container"
  }, budgetFields);
};

DefaultBudgetOptions.propTypes = {
  budgetOptions: _propTypes.default.object,
  formValues: _propTypes.default.object.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  getSelectedBudget: _propTypes.default.string,
  isFlightSelected: _propTypes.default.bool.isRequired
};
DefaultBudgetOptions.defaultProps = {
  getSelectedBudget: '',
  budgetOptions: {
    "min": {
      "min": 10000,
      "max": 20000
    },
    "budget": {
      "min": 20000,
      "max": 40000
    },
    "standard": {
      "min": 40000,
      "max": 60000
    },
    "deluxe": {
      "min": 60000,
      "max": 80000
    }
  }
};

const BudgetText = ({
  handleChange,
  isFlightSelected,
  getSelectedBudget,
  value
}) => _react.default.createElement("div", {
  className: "budget-textbox pb15"
}, _react.default.createElement("label", {
  htmlFor: "From",
  className: "f14 fw9 pb8 block pfc3"
}, "Set Your Own Budget ", _react.default.createElement("span", {
  className: "pfc4 fw4 f12 fright"
}, "in INR per person")), _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("div", {
  className: "input-with-icon-box"
}, _react.default.createElement("span", {
  className: "input-icon"
}, _react.default.createElement(_Icon.BudgetIconNew, null)), _react.default.createElement("input", {
  type: "number",
  id: "budget-text",
  placeholder: "Enter your budget value",
  defaultValue: getSelectedBudget,
  onChange: handleChange,
  value: value
}))));

exports.BudgetText = BudgetText;
BudgetText.propTypes = {
  handleChange: _propTypes.default.func.isRequired,
  isFlightSelected: _propTypes.default.bool,
  getSelectedBudget: _propTypes.default.string,
  value: _propTypes.default.string.isRequired
};
BudgetText.defaultProps = {
  isFlightSelected: false,
  getSelectedBudget: ''
};
let BudgetWithAirfair = (_temp2 = _class = class BudgetWithAirfair extends _react.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleChange = event => {
      this.props.input.onChange(event.target.value);
    }, this.goBack = () => {
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_THREE,
        isBackButton: true
      });
    }, this.goForward = () => {
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_FIVE
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row- form-body"
    }, _react.default.createElement("div", {
      className: "p15"
    }, Object.keys(this.props.budgetOptions).length > 0 ? _react.default.createElement("div", null, _react.default.createElement(BudgetOptions, {
      budgetOptions: this.props.budgetOptions,
      handleChange: this.handleChange,
      getSelectedBudget: this.props.getSelectedBudget,
      isFlightSelected: this.props.isFlightSelected,
      formValues: this.props.formValues
    })) : _react.default.createElement(DefaultBudgetOptions, {
      handleChange: this.handleChange,
      getSelectedBudget: this.props.getSelectedBudget,
      isFlightSelected: this.props.isFlightSelected,
      formValues: this.props.formValues
    }), _react.default.createElement("div", {
      className: "or-divider"
    }, _react.default.createElement("span", null, "OR"))), _react.default.createElement("div", {
      className: "p15"
    }, _react.default.createElement(BudgetText, {
      handleChange: this.handleChange,
      isFlightSelected: this.props.isFlightSelected,
      value: this.props.input.value
    })), _react.default.createElement(_footer.default, {
      goBack: this.goBack,
      goForward: this.goForward
    }));
  }

}, _class.propTypes = {
  input: _propTypes.default.object.isRequired,
  budgetOptions: _propTypes.default.object,
  getSelectedBudget: _propTypes.default.string,
  callNextSlide: _propTypes.default.func,
  isFlightSelected: _propTypes.default.bool
}, _class.defaultProps = {
  budgetOptions: {},
  getSelectedBudget: '',
  isFlightSelected: false
}, _temp2);
BudgetWithAirfair.propTypes = {
  formStage: _propTypes.default.number,
  formValues: _propTypes.default.obj,
  progressBar: _propTypes.default.func
};
var _default = BudgetWithAirfair;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/CabforSightseeing.js":
/*!***********************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/CabforSightseeing.js ***!
  \***********************************************************************************/
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

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let CabforSightseeing = (_temp = _class = class CabforSightseeing extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      selectedIndex: 0,
      isChecked: this.selectCab(props)
    };
  }

  render() {
    const {
      question
    } = this.props;
    const {
      isChecked
    } = this.state;
    const optionIndex = isChecked ? 0 : 1;
    const option = question.options[optionIndex];
    return _react.default.createElement("div", {
      className: `button-box round-icon ${isChecked ? 'active' : ''}`
    }, _react.default.createElement("span", {
      className: "tick-icon-container"
    }, _react.default.createElement(_Icon.Tick, null)), _react.default.createElement("div", {
      className: "icon-48"
    }, _react.default.createElement(_Icon.CabsFilled, null)), _react.default.createElement("input", {
      type: "checkbox",
      className: "checkbox-common",
      name: `${question.identifier}[${optionIndex}]`,
      id: `radio_button_${option.id}_${optionIndex}`,
      value: option.id,
      checked: isChecked,
      onChange: this.handleChange
    }), _react.default.createElement("p", {
      className: "text-center"
    }, "Cab"));
  }

}, _initialiseProps = function () {
  this.selectCab = props => {
    const {
      formValues
    } = props;

    if (formValues.other_answers_attributes && formValues.other_answers_attributes.length) {
      return formValues.other_answers_attributes[1] && formValues.other_answers_attributes[1].option_id && formValues.other_answers_attributes[1].option_id === "99";
    }

    return false;
  };

  this.handleChange = event => {
    const {
      input,
      question
    } = this.props;
    this.setState({
      isChecked: !this.state.isChecked
    }, () => {
      input.onChange({
        option_id: question.options[this.state.isChecked ? 0 : 1].id,
        customization_id: question.customizationId.toString()
      });
    });
  };
}, _temp);
CabforSightseeing.propTypes = {
  question: _propTypes.default.object.isRequired,
  input: _propTypes.default.object.isRequired,
  formValues: _propTypes.default.object.isRequired,
  cabQuestionHandler: _propTypes.default.func
};
CabforSightseeing.defaultProps = {
  cabQuestionHandler: () => {}
};
var _default = CabforSightseeing;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/ContactDetails.js":
/*!********************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/ContactDetails.js ***!
  \********************************************************************************/
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _formValidators = __webpack_require__(/*! ../../../../../utils/formValidators */ "./app/utils/formValidators.js");

var _FormOneVariation = __webpack_require__(/*! ../../FormOneVariation */ "./app/components/Form/FormLead/FormOneVariation.js");

var _Slider = __webpack_require__(/*! ../../../../../constants/Slider */ "./app/constants/Slider.js");

var _footer = _interopRequireDefault(__webpack_require__(/*! ../footer */ "./app/components/Form/FormLead/SequentialForm/footer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ContactDetails = class ContactDetails extends _react.Component {
  constructor(props) {
    super(props);

    this.goBack = () => {
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_FIVE,
        isBackButton: true
      });
    };

    this.goForward = () => {
      this.props.callNextSlide({
        submitVariation: true,
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_SEVEN
      });
    };

    this.state = {
      email: props.email || ''
    };
  }

  render() {
    const {
      formValues
    } = this.props;
    const goNextDisabled = formValues.email && formValues.phone_no ? false : true;
    return _react.default.createElement("div", {
      className: "form-body pt15"
    }, _react.default.createElement("div", {
      className: "contact-icon-container"
    }, _react.default.createElement(_Icon.Contact, null)), _react.default.createElement("div", {
      className: "p15"
    }, _react.default.createElement("div", {
      className: "pb8"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "email",
      component: _FormOneVariation.renderEmail,
      placeholder: "Email",
      type: "email",
      label: "Email ID",
      validate: [(0, _formValidators.requiredWithmessage)('Enter valid email id'), _formValidators.email],
      changeHandler: e => {
        this.setState({
          email: e.target.value
        });
        this.props.handleEmailChange();
      },
      emailVal: this.state.email
    })), _react.default.createElement(_reduxForm.Field, {
      name: "phone_no",
      component: _FormOneVariation.renderPhone,
      placeholder: "Phone",
      type: "number",
      label: "Phone No",
      validate: _formValidators.phoneNumberRequired,
      defaultValue: this.props.formValues && this.props.formValues.isd_code ? this.props.formValues.isd_code : '',
      isFocus: !goNextDisabled
    }), _react.default.createElement(_reduxForm.Field, {
      name: "whatsapp_opt_status",
      component: _FormOneVariation.genericCheckbox,
      type: "checkbox",
      label: "Send trip updates on WhatsApp",
      className: "checkbox-common sfcw",
      id: "whatsapp_opt_status",
      classname: "at_whatsapp_opt_status",
      formValues: this.props.formValues
    })), _react.default.createElement(_footer.default, {
      goBack: this.goBack,
      goForward: this.goForward,
      goNextDisabled: goNextDisabled
    }));
  }

};
ContactDetails.propTypes = {
  formStage: _propTypes.default.number,
  formValues: _propTypes.default.object,
  location: _propTypes.default.object,
  handleEmailChange: _propTypes.default.func,
  callNextSlide: _propTypes.default.func,
  email: _propTypes.default.string,
  progressBar: _propTypes.default.func
};
var _default = ContactDetails;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/DepartureDateFormOne.js":
/*!**************************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/DepartureDateFormOne.js ***!
  \**************************************************************************************/
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

var _reactDatepicker = _interopRequireDefault(__webpack_require__(/*! react-datepicker */ "react-datepicker"));

var _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ "react-modal"));

var _FormDateNum = _interopRequireDefault(__webpack_require__(/*! ../../../FormDateNum */ "./app/components/Form/FormDateNum.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _TravelMonths = _interopRequireDefault(__webpack_require__(/*! ./TravelMonths */ "./app/components/Form/FormLead/SequentialForm/leadForm/TravelMonths.js"));

__webpack_require__(/*! ../../LeadForm.scss */ "./app/components/Form/FormLead/LeadForm.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _footer = _interopRequireDefault(__webpack_require__(/*! ../footer */ "./app/components/Form/FormLead/SequentialForm/footer.js"));

var _Slider = __webpack_require__(/*! ../../../../../constants/Slider */ "./app/constants/Slider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const pickerLang = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  from: 'From',
  to: 'To'
};
const travelMonthModalStyles = {
  content: {
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 1px 1px #e1e1e1',
    border: 'none',
    width: '100%',
    borderRadius: '0',
    top: '322px',
    padding: '0 20px'
  }
};

function currentWeek(date) {
  const date_new = new Date(date);
  const thisDay = date_new.getDate();
  const newDate = date_new;
  newDate.setDate(1);
  const digit = newDate.getDay();
  const Q = (thisDay + digit) / 7;
  const R = (thisDay + digit) % 7;
  if (R !== 0) return Math.ceil(Q);else return Q;
}

function weekCount(year, month_number) {
  let retValue = [];
  retValue = [1, 2, 3, 4];
  return retValue;
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
let disableCurrentMonth = false;

if (currentDate.getDate() > 28) {
  disableCurrentMonth = true;
}

function getStartingWeek(year, month) {
  if (currentMonth === month && currentYear === year) {
    return currentWeek(currentDate);
  } else {
    return 1;
  }
}

let DepartureDateFormOne = class DepartureDateFormOne extends _react.default.Component {
  constructor(props) {
    super(props);

    this.setRequiredFields = values => {
      if (values.start_date && !values.start_date_flexible && !values.start_date_noidea) {
        this.handleFixedChangeWithoutToggle(values.start_date);
      } else if (values.start_date_noidea) {
        this.handleAnytimeChange(values.start_date_flexible);
      } else if (values.start_date_flexible) {
        const matches = values.start_date_flexible.match(/(\w)+/g);
        let month = '';

        if (matches.length <= 2) {
          month = values.start_date_flexible;
        } else {
          month = matches[0];
        }

        this.setState({
          selectedDate: '',
          dateType: 'flexible',
          flexibleDate: true,
          fixedDate: false,
          anytimeDate: false,
          numOfDays: true,
          showWeek: false,
          showTravelMonths: false,
          isDateNotDecided: true,
          selectedMonth: month
        });
        this.props.dispatchRxFormAction((0, _DateTime.getDateOfWeek)(matches[0], matches[1], matches[3], 'YYYY-MM-DD'), 'start_date');
      }
    };

    this.cancelDateSelection = () => {
      this.setState({
        dateType: null,
        selectedDate: '',
        fixedDate: true,
        flexibleDate: true,
        anytimeDate: true,
        numOfDays: false,
        showWeek: false
      });
      this.props.dispatchRxFormAction('', 'start_date');
      this.props.dispatchRxFormAction(false, 'start_date_noidea');
      this.props.dispatchRxFormAction('', 'start_date_flexible');
    };

    this.handleFixedChangeWithoutToggle = dateObj => {
      const formattedDate = (0, _DateTime.format)(dateObj, 'DD MMMM YYYY');
      this.setState({
        isDateDecided: true,
        selectedDate: formattedDate,
        dateType: 'fixed',
        dateChecked: true,
        flexibleDate: false,
        anytimeDate: false,
        numOfDays: true,
        selectedCount: 1
      });
      const startDate = (0, _DateTime.format)(dateObj, 'YYYY-MM-DD');
      this.props.dispatchRxFormAction(startDate, 'start_date');
    };

    this.handleFixedChange = dateObj => {
      const formattedDate = (0, _DateTime.format)(dateObj, 'DD MMMM YYYY');
      this.setState({
        selectedDate: formattedDate,
        dateType: 'fixed',
        dateChecked: true,
        flexibleDate: false,
        anytimeDate: false,
        numOfDays: true
      }, () => {
        this.toggleDatePickerCalendar(null, true);
      });
      const startDate = (0, _DateTime.format)(dateObj, 'YYYY-MM-DD');
      this.props.dispatchRxFormAction(startDate, 'start_date');
      this.props.dispatchRxFormAction(false, 'start_date_flexible');
      this.props.dispatchRxFormAction(false, 'start_date_noidea');
    };

    this.scrollPage = element => {
      let elementToBeScrolled = element;
      let toLocScroll = elementToBeScrolled.offsetTop;
      let toLocPos = elementToBeScrolled.getBoundingClientRect().top;
      let toLocAdd = toLocPos - toLocScroll;
      window.scrollTo(0, toLocAdd);
    };

    this.hideDatePicker = () => {
      this.setState({
        isDatePickerOpen: false
      });

      if (!this.state.selectedDate) {
        this.setState({
          isDateDecided: false
        });
      }
    };

    this.handleBookedTickets = event => {
      this.setState({
        isBookedTicket: event.target.checked
      });
      this.props.dispatchRxFormAction(event.target.checked, 'booked_tickets');
    };

    this.handleAnytimeChange = month => {
      this.setState({
        showTravelMonths: !this.state.showTravelMonths,
        selectedMonth: month,
        flexibleDate: true
      });
      this.props.trackFormOneInteracted();
      this.props.dispatchRxFormAction(true, 'start_date_noidea');
      this.props.dispatchRxFormAction('Anytime', 'start_date');
      this.props.dispatchRxFormAction(month, 'start_date_flexible');
    };

    this.handleMonthChange = month => {
      const moonLanding = new Date();
      this.setState({
        showTravelMonths: !this.state.showTravelMonths
      });

      if (month) {
        this.setState({
          selectedMonth: month
        });
        const finalDate = `${month}'19 - Week 1`;
        this.props.dispatchRxFormAction(false, 'start_date_noidea');
        this.props.dispatchRxFormAction(finalDate, 'start_date_flexible');
        this.props.dispatchRxFormAction((0, _DateTime.getDateOfWeek)(moonLanding.getFullYear(), month, 1, 'YYYY-MM-DD'), 'start_date');
      }
    };

    this.handleClickMonthBox = e => {
      this.scrollPage(e.target);
      this.refs.pickAMonth.show();
      this.setState({
        showMonthPicker: true
      });
      const leftPosition = document.getElementById('flexible_date_fnew').getBoundingClientRect().left;
      document.getElementsByClassName('custom-month-picker rmp-container')[0].setAttribute("style", `width: ${window.innerWidth}px; left: -${leftPosition}px !important;`);
      document.getElementById('week-box-width').setAttribute("style", `width: ${window.innerWidth}px; left: -15px !important;`);
    };

    this.handleAMonthChange = (year, monthNum) => {
      this.refs.pickAMonth.dismiss();
      this.setState({
        year,
        month: pickerLang.months[monthNum - 1],
        numOfWeeks: weekCount(year, monthNum),
        startWeek: getStartingWeek(year, monthNum - 1),
        showWeek: true,
        showMonthPicker: false
      });
    };

    this.handleAMonthDissmis = value => {
      this.setState({
        mvalue: value,
        showMonthPicker: false
      });
    };

    this.handleNotDecided = () => {
      this.setState({
        isDateNotDecided: true,
        isDateDecided: false,
        flexibleDate: true,
        fixedDate: false,
        isDatePickerOpen: false,
        showTravelMonths: true,
        selectedDate: ''
      });
      this.props.dispatchRxFormAction(false, 'start_date_noidea');
      this.props.dispatchRxFormAction('', 'start_date'); // this.props.dispatchRxFormAction(finalDate, 'start_date_flexible');
    };

    this.goBack = () => {
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_ONE,
        isBackButton: true
      });
    };

    this.goForward = () => {
      const {
        location: {
          query
        }
      } = this.props;
      let step = _Slider.SEQUENTIAL_FORM_THREE;

      if (query.deals) {
        step = _Slider.SEQUENTIAL_FORM_FIVE;
      } else if (query.variation === '3') {
        step = _Slider.SEQUENTIAL_FORM_THREE;
      } else if (query.variation === '4') {
        step = _Slider.SEQUENTIAL_FORM_SIX;
      }

      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: step
      });
    };

    this.handleCloseMonthModal = () => {
      this.setState({
        showTravelMonths: false
      });

      if (!this.state.selectedMonth) {
        this.setState({
          isDateNotDecided: false
        });
      }
    };

    this.state = {
      dateType: null,
      selectedDate: '',
      mvalue: {
        year: currentYear,
        month: currentMonth
      },
      fixedDate: false,
      flexibleDate: false,
      anytimeDate: true,
      numOfDays: false,
      dateChecked: false,
      showWeek: false,
      startWeek: 1,
      numOfWeeks: [],
      isDatePickerOpen: false,
      isBookedTicket: props.formValues.booked_tickets || false,
      showMonthPicker: false,
      isDateDecided: false,
      isDateNotDecided: false,
      selectedCount: 0,
      showTravelMonths: true,
      selectedMonth: '',
      showMonthPopup: true
    };
  }

  componentDidMount() {
    this.setRequiredFields(this.props.formValues);
  }

  toggleDatePickerCalendar(e, flag, show) {
    if (e) e && e.stopPropagation() && e.preventDefault();
    if (e && e.target && window.innerHeight <= 568) this.scrollPage(e.target);

    if (this.state.selectedDate && !this.state.selectedCount || flag) {
      // this.props.dispatchRxFormAction('', 'start_date_flexible');
      this.setState({
        isDatePickerOpen: false,
        isDateDecided: true,
        isDateNotDecided: false,
        selectedCount: 1,
        fixedDate: true,
        flexibleDate: false
      });
    } else if (this.state.selectedDate && this.state.selectedCount) {
      //this.props.dispatchRxFormAction('', 'start_date_flexible');
      this.setState({
        isDatePickerOpen: !this.state.isDatePickerOpen,
        //!this.state.isDatePickerOpen  <-- removed this as per new requirement
        isDateDecided: true,
        isDateNotDecided: false,
        fixedDate: true,
        flexibleDate: false
      });
    } else {
      this.props.dispatchRxFormAction(false, 'start_date_noidea');
      this.props.dispatchRxFormAction('', 'start_date');
      this.props.dispatchRxFormAction('', 'start_date_flexible');
      this.setState({
        selectedMonth: ''
      });
      this.setState({
        isDatePickerOpen: true,
        isDateDecided: true,
        isDateNotDecided: false,
        fixedDate: true,
        flexibleDate: false
      });
    }

    setTimeout(function () {
      const datepicker = document.getElementsByClassName('custom-variation-datepicker')[0];
      if (datepicker) datepicker.setAttribute("style", `width: ${window.innerWidth}px;display:block;top: 185px !important;`);
    }, 10);
  }

  render() {
    const {
      formValues
    } = this.props;
    const {
      fixedDate,
      flexibleDate,
      anytimeDate,
      isBookedTicket,
      isDateNotDecided,
      isDateDecided,
      showTravelMonths,
      selectedMonth,
      selectedDate
    } = this.state;
    const fixedDateCheck = (isDateDecided || formValues.start_date) && !isDateNotDecided && !flexibleDate;
    const goNextDisabled = (formValues.start_date || formValues.start_date_flexible || formValues.start_date_noidea) && formValues.trip_days ? false : true;
    const showMonthOfTravel = !showTravelMonths && flexibleDate && isDateNotDecided || formValues.start_date === 'Anytime';
    return _react.default.createElement("div", {
      className: "form-body"
    }, _react.default.createElement("div", {
      className: "clear"
    }, _react.default.createElement("div", {
      className: `${fixedDate && flexibleDate && anytimeDate ? "row row-" : "hide"}`
    }, _react.default.createElement("label", {
      className: "block pb8 f14 fw9"
    }, "Departure Date", _react.default.createElement("em", {
      className: "pfc2"
    }, "*"), _react.default.createElement("span", {
      className: "f12 fw3"
    }, " (Choose Any)"))), _react.default.createElement("div", {
      className: "flex spaceBetween mb15"
    }, _react.default.createElement("div", {
      className: `button-box round-icon ${(fixedDateCheck || selectedDate) && !isDateNotDecided && isDateDecided ? 'active' : ''}`,
      id: "fixed_date_fnew",
      onClick: this.toggleDatePickerCalendar.bind(this)
    }, _react.default.createElement("span", {
      className: "tick-icon-container"
    }, _react.default.createElement(_Icon.Tick, null)), _react.default.createElement("div", {
      className: "icon-48"
    }, _react.default.createElement(_Icon.DateDecided, null)), _react.default.createElement("p", {
      className: "text-center"
    }, "Dates Decided")), this.state.isDatePickerOpen && _react.default.createElement(_reactDatepicker.default, {
      dateForm: "DD/MM/YYYY",
      readOnly: true,
      minDate: new Date(),
      value: this.state.selectedDate ? this.state.selectedDate : '',
      placeholderText: "Fixed Date",
      inline: true,
      calendarClassName: "custom-variation-datepicker sequential-form-date-picker",
      onChange: this.handleFixedChange,
      onClickOutside: this.hideDatePicker,
      selected: this.state.selectedDate && new Date(this.state.selectedDate) !== 'Invalid Date' ? new Date(this.state.selectedDate) : new Date()
    }), _react.default.createElement("div", {
      className: `button-box round-icon ${isDateNotDecided && flexibleDate || formValues.start_date === 'Anytime' ? 'active' : ''}`,
      onClick: this.handleNotDecided
    }, _react.default.createElement("span", {
      className: "tick-icon-container"
    }, _react.default.createElement(_Icon.Tick, null)), _react.default.createElement("div", {
      className: "icon-48"
    }, _react.default.createElement(_Icon.DateNotDecided, null)), _react.default.createElement("p", {
      className: "text-center"
    }, "Dates Not Decided"))), fixedDateCheck && selectedDate && _react.default.createElement("div", {
      className: "input-with-icon-box pr0 pl0 relative cross-visible-box mb15 clearfix"
    }, _react.default.createElement("label", {
      className: "ddate-label pb8 f14 fw9"
    }, "Departure Date"), _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement("span", {
      className: "input-icon"
    }, _react.default.createElement(_Icon.CalendarIcon, null)), _react.default.createElement("div", null, _react.default.createElement("button", {
      id: "fixed_date_fnew",
      type: "button",
      className: "form-date-check input box-input-flex",
      onClick: e => this.toggleDatePickerCalendar.call(this, e, false, true)
    }, this.state.selectedDate ? this.state.selectedDate : '')), this.props.meta.touched && (this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error) || this.props.meta.warning && _react.default.createElement("span", null, this.props.meta.warning))), fixedDateCheck && _react.default.createElement("div", {
      className: "booked-ticket col-xs-12 p0 booked-ticket"
    }, _react.default.createElement("input", {
      type: "checkbox",
      checked: isBookedTicket,
      onChange: this.handleBookedTickets,
      id: "booked-ticket",
      className: "checkbox-common checkbox-common",
      value: "on"
    }), _react.default.createElement("label", {
      htmlFor: "booked-ticket",
      className: "f12 pb8"
    }, "I have booked my travel tickets"))), flexibleDate && _react.default.createElement(_reactModal.default, {
      isOpen: showTravelMonths,
      style: travelMonthModalStyles,
      onRequestClose: this.handleCloseMonthModal,
      shouldCloseOnOverlayClick: true,
      overlayClassName: "travel-month-overlay"
    }, _react.default.createElement(_TravelMonths.default, {
      handleAnytimeChange: this.handleAnytimeChange,
      handleMonthChange: this.handleMonthChange,
      formValues: this.props.formValues
    })), showMonthOfTravel && _react.default.createElement("div", {
      className: "input-with-icon-box pr0 pl0 relative cross-visible-box  mb15 clearfix"
    }, _react.default.createElement("label", {
      className: "ddate-label pb8 f14 fw9"
    }, "Month of Travel"), _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement("span", {
      className: "input-icon"
    }, _react.default.createElement(_Icon.CalendarIcon, null)), _react.default.createElement("div", null, _react.default.createElement("button", {
      id: "fixed_date_fnew",
      type: "button",
      className: "form-date-check input box-input-flex",
      onClick: e => this.handleMonthChange(selectedMonth)
    }, selectedMonth))), this.props.meta.touched && (this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error) || this.props.meta.warning && _react.default.createElement("span", null, this.props.meta.warning))), _react.default.createElement("div", {
      className: `number-of-days-container ${fixedDateCheck && selectedDate || !showTravelMonths && flexibleDate && isDateNotDecided || showMonthOfTravel ? '' : 'hide'}`
    }, _react.default.createElement(_reduxForm.Field, {
      name: "trip_days_temp",
      component: _FormDateNum.default,
      showDays: true,
      dispatch: this.props.meta.dispatch,
      form: this.props.meta.form,
      rtData: this.props.rtData,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      days: this.props.days,
      formValues: this.props.formValues,
      variation: true
    }))), this.props.meta.touched && (this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text move-up-15"
    }, this.props.meta.error) || this.props.meta.warning && _react.default.createElement("span", null, this.props.meta.warning)), _react.default.createElement(_footer.default, {
      goBack: this.goBack,
      goForward: this.goForward,
      goNextDisabled: goNextDisabled
    }));
  }

};
DepartureDateFormOne.propTypes = {
  formValues: _propTypes.default.object,
  location: _propTypes.default.object,
  days: _propTypes.default.string,
  trackFormOneInteracted: _propTypes.default.func.isRequired,
  rtData: _propTypes.default.object,
  formStage: _propTypes.default.number,
  progressBar: _propTypes.default.func
};
DepartureDateFormOne.defaultProps = {
  formValues: {},
  rtData: {},
  days: ''
};
var _default = DepartureDateFormOne;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/FlightBookSlider.js":
/*!**********************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/FlightBookSlider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FlightBooking = class FlightBooking extends _react.default.Component {
  constructor(props) {
    super(props);

    this.checkInitialValues = () => {
      try {
        if (this.props.formValues) {
          const flightAnswerAttributes = this.props.formValues.flight_answer_attributes;

          if (flightAnswerAttributes && flightAnswerAttributes.option_id) {
            return flightAnswerAttributes.option_id;
          }

          return null;
        }

        return null;
      } catch (error) {
        return null;
      }
    };

    this.handleChange = event => {
      if (!this.state.selected || this.state.selected === '98') {
        this.setState({
          selected: '97'
        });
        this.props.input.onChange({
          option_id: '97',
          customization_id: '23'
        });
      } else {
        this.setState({
          selected: '98'
        });
        this.props.input.onChange({
          option_id: '98',
          customization_id: '23'
        });
      }
    };

    this.state = {
      selected: this.checkInitialValues(),
      flightSelected: '98'
    };
  }

  render() {
    return _react.default.createElement("div", {
      className: `button-box round-icon ${this.state.selected && this.state.selected !== '98' ? 'active' : ''}`
    }, _react.default.createElement("span", {
      className: "tick-icon-container"
    }, _react.default.createElement(_Icon.Tick, null)), _react.default.createElement("div", {
      className: "icon-48"
    }, _react.default.createElement(_Icon.FlightFilled, null)), _react.default.createElement("input", {
      type: "checkbox",
      className: "checkbox-common",
      name: "cust_23",
      id: "flight-included1",
      value: this.state.selected,
      defaultChecked: this.state.selected === '97',
      onChange: this.handleChange
    }), _react.default.createElement("p", {
      className: "text-center"
    }, "Flights"));
  }

};
FlightBooking.propTypes = {
  input: _propTypes.PropTypes.object.isRequired,
  formValues: _propTypes.PropTypes.object
};
FlightBooking.defaultProps = {
  formValues: {}
};
var _default = FlightBooking;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/HotelRating.js":
/*!*****************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/HotelRating.js ***!
  \*****************************************************************************/
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const hotelPrefCustomizations = {
  star2: 32,
  star3: 8,
  star4: 7,
  star5: 6,
  noHotel: 96,
  customizationId: 2,
  noHotelCustomizationId: 22
};
let HotelRating = class HotelRating extends _react.default.Component {
  constructor(props) {
    super(props);

    this.getHotelPrefs = () => {
      let isHotelSelected = false;
      const retValue = Object.keys(this.state.hotels).filter(hotelStar => this.state.hotels[hotelStar]).map(hotelStar => {
        const customizationId = hotelPrefCustomizations.customizationId;

        if (!this.state.hotels.noHotel) {
          isHotelSelected = true;
          return {
            option_id: hotelPrefCustomizations[hotelStar].toString(),
            customization_id: customizationId.toString()
          };
        }

        return {};
      });

      if (isHotelSelected) {
        this.props.dispatchRxFormAction({
          option_id: '95',
          customization_id: hotelPrefCustomizations.noHotelCustomizationId.toString()
        }, 'hotel_needed_answer_attributes');
      } else if (this.state.hotels.noHotel) {
        this.props.dispatchRxFormAction('', 'budget');
        this.props.dispatchRxFormAction({
          option_id: '96',
          customization_id: hotelPrefCustomizations.noHotelCustomizationId.toString()
        }, 'hotel_needed_answer_attributes');
      } else {
        this.props.dispatchRxFormAction('', 'hotel_needed_answer_attributes');
      }

      if (retValue.length < 1) {
        return '';
      }

      return retValue;
    };

    this.checkInitialValues = formValues => {
      const hotelAttributes = formValues.hotel_category_answers_attributes || [];
      const answerAttributes = formValues.hotel_needed_answer_attributes || {};
      hotelAttributes.forEach(obj => {
        if (obj.option_id === hotelPrefCustomizations.star2.toString()) {
          this.state = _objectSpread({}, this.state, {
            hotels: _objectSpread({}, this.state.hotels, {
              star2: true
            })
          });
        } else if (obj.option_id === hotelPrefCustomizations.star3.toString()) {
          this.state = _objectSpread({}, this.state, {
            hotels: _objectSpread({}, this.state.hotels, {
              star3: true
            })
          });
        } else if (obj.option_id === hotelPrefCustomizations.star4.toString()) {
          this.state = _objectSpread({}, this.state, {
            hotels: _objectSpread({}, this.state.hotels, {
              star4: true
            })
          });
        } else if (obj.option_id === hotelPrefCustomizations.star5.toString()) {
          this.state = _objectSpread({}, this.state, {
            hotels: _objectSpread({}, this.state.hotels, {
              star5: true
            })
          });
        }
      });

      if (answerAttributes.option_id === '96') {
        this.state = _objectSpread({}, this.state, {
          hotels: _objectSpread({}, this.state.hotels, {
            noHotel: true
          })
        });
      }
    };

    this.handleChange = event => {
      const hotelPrefs = {};

      if (event.target.checked) {
        if (event.target.name === 'noHotel') {
          hotelPrefs.star2 = false;
          hotelPrefs.star3 = false;
          hotelPrefs.star4 = false;
          hotelPrefs.star5 = false;
        } else {
          hotelPrefs.noHotel = false;
        }
      }

      this.setState({
        hotels: _objectSpread({}, this.state.hotels, hotelPrefs, {
          [event.target.name]: event.target.checked
        })
      }, () => {
        this.props.input.onChange(this.getHotelPrefs());
      });
    };

    this.state = {
      hotels: {
        star2: false,
        star3: false,
        star4: false,
        star5: false,
        noHotel: false
      }
    };
    this.checkInitialValues(props.formValues);
  }

  render() {
    return _react.default.createElement("div", {
      className: "hotelratingDiv at_hotelratingdiv mb15"
    }, _react.default.createElement("p", {
      className: "fw9 iblock m0 pfc3 mb8 f14"
    }, "Select Hotel Category", _react.default.createElement("em", {
      className: "pfc2 f16 fwb"
    }, "*")), _react.default.createElement("div", {
      className: "month-container flex flexWrap spaceBetween"
    }, _react.default.createElement("div", {
      className: `month-option ${this.state.hotels.star5 ? 'active' : ''}`
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox5",
      name: "star5",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star5
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox5",
      className: "cursorP p0"
    }, "5 Star")), _react.default.createElement("div", {
      className: `month-option ${this.state.hotels.star4 ? 'active' : ''}`
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox4",
      name: "star4",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star4
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox4",
      className: "cursorP p0"
    }, "4 Star")), _react.default.createElement("div", {
      className: `month-option ${this.state.hotels.star3 ? 'active' : ''}`
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox3",
      name: "star3",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star3
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox3",
      className: "cursorP p0"
    }, "3 Star")), _react.default.createElement("div", {
      className: `month-option ${this.state.hotels.star2 ? 'active' : ''}`
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: "hotel-checkbox2",
      name: "star2",
      className: "checkbox-common",
      onChange: this.handleChange,
      checked: this.state.hotels.star2
    }), _react.default.createElement("label", {
      htmlFor: "hotel-checkbox2",
      className: "cursorP p0"
    }, "2 Star")), _react.default.createElement("div", {
      className: `month-option ${this.state.hotels.noHotel ? 'active' : ''}`
    }, _react.default.createElement("input", {
      type: "checkbox",
      name: "noHotel",
      id: "No-hotel",
      className: "checkbox-common",
      checked: this.state.hotels.noHotel,
      onChange: this.handleChange
    }), _react.default.createElement("label", {
      htmlFor: "No-hotel",
      className: "cursorP p0"
    }, "Hotel Not Required")), this.props.meta && this.props.meta.touched && this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error)));
  }

};
HotelRating.propTypes = {
  input: _propTypes.default.object.isRequired,
  meta: _propTypes.default.object.isRequired,
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  touch: _propTypes.default.func.isRequired,
  formValues: _propTypes.default.object,
  isHotelSelected: _propTypes.default.bool
};
HotelRating.defaultProps = {
  formValues: {}
};
var _default = HotelRating;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/Inclusions.js":
/*!****************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/Inclusions.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _HotelRating = _interopRequireDefault(__webpack_require__(/*! ./HotelRating */ "./app/components/Form/FormLead/SequentialForm/leadForm/HotelRating.js"));

var _formValidators = __webpack_require__(/*! ../../../../../utils/formValidators */ "./app/utils/formValidators.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _FlightBookSlider = _interopRequireDefault(__webpack_require__(/*! ./FlightBookSlider */ "./app/components/Form/FormLead/SequentialForm/leadForm/FlightBookSlider.js"));

var _Slider = __webpack_require__(/*! ../../../../../constants/Slider */ "./app/constants/Slider.js");

var _footer = _interopRequireDefault(__webpack_require__(/*! ../footer */ "./app/components/Form/FormLead/SequentialForm/footer.js"));

var _CabforSightseeing = _interopRequireDefault(__webpack_require__(/*! ./CabforSightseeing */ "./app/components/Form/FormLead/SequentialForm/leadForm/CabforSightseeing.js"));

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const question = {
  customizationId: 24,
  customizationTags: "cab",
  description: "",
  hasOthers: false,
  id: 136,
  identifier: "cust_24",
  jsonValueType: "hash",
  options: [{
    id: '99',
    misc: "",
    name: "Yes",
    tags: "",
    url: ""
  }, {
    id: '100',
    misc: "",
    name: "No",
    tags: "",
    url: ""
  }],
  questionSequence: 1,
  railsFormName: "other_answers_attributes",
  templateId: "1",
  templateType: "radio_button",
  title: "Cab for local sightseeing?",
  useInputForOptions: false,
  valueType: "single_value"
};
let Inclusions = (_temp = _class = class Inclusions extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      isHotelSelected: this.selectHotel(props)
    };
  }

  render() {
    const {
      isHotelSelected
    } = this.state;
    const {
      formValues
    } = this.props;
    const goNextDisabled = !(formValues.hotel_needed_answer_attributes || formValues.hotel_category_answers_attributes);
    return _react.default.createElement("div", {
      className: "form-body"
    }, _react.default.createElement("div", {
      className: "p15"
    }, _react.default.createElement(_reduxForm.Field, {
      component: _HotelRating.default,
      name: "hotel_category_answers_attributes",
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      validate: (0, _formValidators.requiredWithmessage)('Hotel field must be selected'),
      isHotelSelected: isHotelSelected,
      touch: this.props.touch
    }), _react.default.createElement("h3", {
      className: "fw9 iblock m0 pfc3 mb8 f14"
    }, "Select other inclusions"), _react.default.createElement("div", {
      className: "flex spaceBetween mb24 flexWrap"
    }, _react.default.createElement(_reduxForm.Field, {
      component: _FlightBookSlider.default,
      name: "flight_answer_attributes",
      formValues: this.props.formValues
    }), _react.default.createElement(_reduxForm.Field, {
      component: _CabforSightseeing.default,
      question: question,
      name: "other_answers_attributes[1]",
      formValues: this.props.formValues
    }))), _react.default.createElement(_footer.default, {
      goBack: this.goBack,
      goForward: this.goForward,
      goNextDisabled: goNextDisabled
    }));
  }

}, _initialiseProps = function () {
  this.goBack = () => {
    const {
      location: {
        query
      }
    } = this.props;
    let step = _Slider.SEQUENTIAL_FORM_TWO;

    if (query.variation === '3') {
      step = _Slider.SEQUENTIAL_FORM_TWO;
    } else if (query.variation === '4') {
      step = _Slider.SEQUENTIAL_FORM_SIX;
    }

    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: step,
      isBackButton: true
    });
  };

  this.goForward = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: _Slider.SEQUENTIAL_FORM_FOUR
    });
  };

  this.handleHotelChange = () => {
    this.setState({
      isHotelSelected: !this.state.isHotelSelected
    }, () => {
      const hotel = document.getElementById('No-hotel');
      hotel.click();
    });
  };

  this.selectHotel = props => {
    const {
      formValues
    } = props;

    if (formValues.hotel_category_answers_attributes && formValues.hotel_category_answers_attributes.length && formValues.hotel_needed_answer_attributes && formValues.hotel_needed_answer_attributes.option_id !== '96') {
      return true;
    }

    return false;
  };
}, _temp);
Inclusions.propTypes = {
  formStage: _propTypes.default.number,
  dispatchRxFormAction: _propTypes.default.func,
  touch: _propTypes.default.func,
  callNextSlide: _propTypes.default.func,
  formValues: _propTypes.default.object,
  location: _propTypes.default.object,
  commonProperties: _propTypes.default.obj,
  meta: _propTypes.default.obj,
  progressBar: _propTypes.default.func
};
var _default = Inclusions;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/StartPlanning.js":
/*!*******************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/StartPlanning.js ***!
  \*******************************************************************************/
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

var _footer = _interopRequireDefault(__webpack_require__(/*! ../footer */ "./app/components/Form/FormLead/SequentialForm/footer.js"));

var _Slider = __webpack_require__(/*! ../../../../../constants/Slider */ "./app/constants/Slider.js");

var _formValidators = __webpack_require__(/*! ../../../../../utils/formValidators */ "./app/utils/formValidators.js");

var _Icon = __webpack_require__(/*! ../../../../../helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _FormOneVariation = __webpack_require__(/*! ../../FormOneVariation */ "./app/components/Form/FormLead/FormOneVariation.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const suggestedDestinations = ['Kerala', 'Thailand', 'Himachal', 'Bali', 'Kashmir', 'Maldives', 'Andaman', 'Mauritius', 'Sikkim', 'Singapore', 'Australia'];
let StartPlanning = class StartPlanning extends _react.Component {
  constructor(props) {
    super(props);

    this.goBack = () => {
      return false;
    };

    this.goForward = () => {
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: _Slider.SEQUENTIAL_FORM_TWO,
        selectedPillIndex: 0
      });
    };

    this.handleChangeInput = (destination, i) => {
      this.setState({
        selectedPillIndex: i
      });
      this.props.changeFormField('LeadForm', 'to_loc', destination);
      this.setState({
        showDestinations: false,
        showIcon: true
      });
    };

    this.renderSuggestedPills = () => {
      return _react.default.createElement("div", {
        className: "row row- mb15"
      }, _react.default.createElement("div", {
        className: "destination-suggestions flex overflowa"
      }, suggestedDestinations.map((destination, i) => _react.default.createElement("div", {
        className: `suggested-item sfc1 f14 mr8 ${this.state.selectedPillIndex === i ? 'active' : ''}`,
        key: i,
        onClick: () => this.handleChangeInput(destination, i)
      }, destination))));
    };

    this.onToLocFocus = () => {
      this.setState({
        showDestinations: true,
        showIcon: false
      });
    };

    this.handleBlur = () => {
      this.setState({
        showDestinations: false,
        showIcon: false
      });
      this.props.handleBlur();
    };

    this.isAndroid = () => {
      if (navigator && navigator.userAgent) {
        return navigator.userAgent.toLowerCase().indexOf("android") > -1;
      }

      return false;
    };

    this.onFromLocFocus = event => {
      const elem = event.target;

      if (this.isAndroid() && elem) {
        setTimeout(() => {
          window.scrollTo(0, elem.getBoundingClientRect().top + 140);
        }, 500);
      }
    };

    this.state = {
      showDestinations: false,
      showIcon: true
    };
  }

  render() {
    const goNextDisabled = !this.props.formValues.to_loc;
    return _react.default.createElement("div", {
      className: "form-body"
    }, _react.default.createElement("div", {
      className: "location-icon-container"
    }, _react.default.createElement(_Icon.Destination, null)), _react.default.createElement("div", {
      className: "form-field-incl-label p15 relative"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "to_loc",
      component: _FormOneVariation.renderToLocation,
      placeholder: "To",
      type: "text",
      label: "To",
      validate: (0, _formValidators.requiredWithmessage)('Please enter your destination'),
      trackFormOneInteracted: this.props.handlFormInteraction,
      onToLocFocus: this.onToLocFocus,
      handleBlur: this.handleBlur
    }), _react.default.createElement("div", {
      className: "row row- mb15"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "exploring_destinations",
      component: _FormOneVariation.genericCheckbox,
      type: "checkbox",
      label: "I am exploring destinations",
      className: "checkbox-common sfcw",
      id: "exploring-destination_fnew",
      trackFormOneInteracted: this.props.handlFormInteraction,
      classname: "exploring-destination at_explore mb8"
    })), _react.default.createElement("div", {
      className: "from-location-container"
    }, _react.default.createElement(_reduxForm.Field, {
      id: "fromLocation_fnew",
      className: "input",
      name: "from_loc",
      component: this.props.FromLocation,
      placeholder: "From",
      type: "text",
      label: "From",
      trackFormOneInteracted: this.props.handlFormInteraction,
      onFocus: this.onFromLocFocus
    }))), _react.default.createElement(_footer.default, {
      goForward: this.goForward,
      goBackDisabled: true,
      goNextDisabled: goNextDisabled
    }));
  }

};
StartPlanning.propTypes = {
  formStage: _propTypes.default.number,
  FromLocation: _propTypes.default.func,
  changeFormField: _propTypes.default.func,
  handlFormInteraction: _propTypes.default.func,
  handleBlur: _propTypes.default.func,
  formValues: _propTypes.default.object,
  requiredWithmessage: _propTypes.default.func,
  callNextSlide: _propTypes.default.func,
  progressBar: _propTypes.default.func,
  sliderDisplayMode: _propTypes.default.string
};
var _default = StartPlanning;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/TravelMonths.js":
/*!******************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/TravelMonths.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getMonths = () => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentDate = new Date();
  const retValue = [];
  const months = [];

  for (let i = 0; i < 6; i += 1) {
    const m = monthNames[(currentDate.getMonth() + i) % 12];
    months.push(m);
    retValue.push({
      value: m,
      label: m
    });
  }

  retValue.push({
    value: `After ${months[months.length - 1]}`,
    label: `After ${months[months.length - 1]}`
  });
  retValue.push({
    value: 'Anytime',
    label: 'Anytime'
  });
  return retValue;
};

let TravelMonths = (_temp = _class = class TravelMonths extends _react.default.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      selectedMonth: this.setSelectedMonth(props)
    };
  }

  render() {
    return _react.default.createElement("div", {
      className: "mt15 mb15 text-center month-selection-modal"
    }, _react.default.createElement("div", {
      className: "dividing-line"
    }), _react.default.createElement("label", {
      className: "f16 fw7 pb8 iblock pfc3 month-of-travel-heading"
    }, "Month of Travel"), _react.default.createElement("div", {
      className: "month-container flex flexWrap spaceBetween"
    }, this.getMonthsList()), _react.default.createElement("div", {
      className: "dividing-line"
    }));
  }

}, _initialiseProps = function () {
  this.setSelectedMonth = props => {
    const {
      formValues
    } = props;

    if (formValues.start_date_flexible) {
      const matches = formValues.start_date_flexible.match(/(\w)+/g);
      const months = getMonths();
      const selectedMonth = months.findIndex(month => {
        return month.value.toLowerCase().includes('after') ? matches[0].toLowerCase() === 'after' : month.value.toLowerCase() === matches[0].toLowerCase();
      });
      return selectedMonth;
    }

    return null;
  };

  this.selectMonth = index => {
    this.setState({
      selectedMonth: index
    });
    const months = getMonths();

    if (index === 6 || index === 7) {
      this.props.handleAnytimeChange(months[index].value);
    } else {
      this.props.handleMonthChange(months[index].value);
    }
  };

  this.getMonthsList = () => {
    const months = getMonths();
    return months.map((month, i) => _react.default.createElement("div", {
      className: `month-option month-pills ${this.state.selectedMonth === i ? 'active' : ''}`,
      onClick: () => this.selectMonth(i),
      key: i
    }, month.label));
  };
}, _temp);
TravelMonths.propTypes = {
  formValues: _propTypes.default.object
};
TravelMonths.defaultProps = {
  formValues: {}
};
var _default = TravelMonths;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/TravelerCount.js":
/*!*******************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/TravelerCount.js ***!
  \*******************************************************************************/
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _footer = _interopRequireDefault(__webpack_require__(/*! ../footer */ "./app/components/Form/FormLead/SequentialForm/footer.js"));

var _Slider = __webpack_require__(/*! constants/Slider */ "./app/constants/Slider.js");

var _TravelerInputField = _interopRequireDefault(__webpack_require__(/*! ./TravelerInputField */ "./app/components/Form/FormLead/SequentialForm/leadForm/TravelerInputField.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GTravCountDiv = _glamorous.default.div({
  '&  .Dropdown-menu': {
    maxHeight: '116px'
  }
});

function getChildCount(formValues, index) {
  try {
    return formValues.child_age_answers_attributes[index].user_input;
  } catch (e) {
    return '0';
  }
}

let TravelerCount = class TravelerCount extends _react.default.Component {
  constructor(props) {
    super(props);

    this.updateChildCountInRedux = () => {
      const {
        child,
        infant
      } = this.state;
      const totalCount = parseInt(child.value, 10) + parseInt(infant.value, 10);
      this.props.dispatchRxFormAction(totalCount.toString(), 'child');
    };

    this.handleDefaultValues = () => {
      this.state = {
        adults: {
          value: this.props.formValues.adult || '2',
          label: this.props.formValues.adult || '2'
        },
        child: {
          value: getChildCount(this.props.formValues, 2),
          label: getChildCount(this.props.formValues, 2)
        },
        infant: {
          value: getChildCount(this.props.formValues, 0),
          label: getChildCount(this.props.formValues, 0)
        }
      };
    };

    this.goBack = () => {
      const isDeal = this.props.location.query.deals;
      const slider = isDeal ? _Slider.SEQUENTIAL_FORM_TWO : _Slider.SEQUENTIAL_FORM_FOUR;
      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: slider,
        isBackButton: true
      });
    };

    this.goForward = () => {
      const {
        location: {
          query
        }
      } = this.props;
      let step = _Slider.SEQUENTIAL_FORM_SIX;

      if (query.variation === '3') {
        step = _Slider.SEQUENTIAL_FORM_SIX;
      } else if (query.variation === '4') {
        step = _Slider.SEQUENTIAL_FORM_SEVEN;
      }

      this.props.callNextSlide({
        submitVariation: '',
        variation: true,
        variationStep: step
      });
    };

    this.handleDefaultValues();
  }

  handleTravelerCount(value, fieldName) {
    let childAgeAttributes;

    if (fieldName === 'infant') {
      this.setState({
        infant: {
          value: value,
          label: value
        }
      }, () => this.updateChildCountInRedux());
      childAgeAttributes = {
        option_id: '29',
        customization_id: '7',
        user_input: value.toString()
      };
      this.props.dispatchRxFormAction(childAgeAttributes, 'child_age_answers_attributes[0]');
    } else if (fieldName === 'child') {
      this.setState({
        child: {
          value: value,
          label: value
        }
      }, () => this.updateChildCountInRedux());
      childAgeAttributes = {
        option_id: '31',
        customization_id: '7',
        user_input: value.toString()
      };
      this.props.dispatchRxFormAction(childAgeAttributes, 'child_age_answers_attributes[2]');
    } else {
      this.props.dispatchRxFormAction(value, fieldName);
    }
  }

  render() {
    return _react.default.createElement(GTravCountDiv, {
      className: "trav-count form-body p15"
    }, _react.default.createElement("div", {
      className: "traveller-icon-container"
    }, _react.default.createElement(_Icon.Travelers, null)), _react.default.createElement("div", {
      className: "p15 clearfix"
    }, _react.default.createElement("div", {
      className: "col-xs-12 p8 pt0 mb15"
    }, _react.default.createElement("label", {
      htmlFor: "From",
      className: "f14 fw9 pb8 block pfc3"
    }, "Adults ", _react.default.createElement("span", {
      className: "pfc4 fw4 f12"
    }, "(12+ yrs)")), _react.default.createElement(_reduxForm.Field, {
      fieldName: "adult",
      component: _TravelerInputField.default,
      dispatch: this.props.meta.dispatch,
      form: this.props.meta.form,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      inputValue: this.state.adults.value,
      label: "Adults"
    })), _react.default.createElement("div", {
      className: "col-xs-12 p8 pt0 mb15"
    }, _react.default.createElement("label", {
      htmlFor: "From",
      className: "f14 fw9 pb8 block pfc3"
    }, "Infant ", _react.default.createElement("span", {
      className: "pfc4 fw4 f12"
    }, "(0-2yrs)")), _react.default.createElement(_reduxForm.Field, {
      fieldName: "infant",
      component: _TravelerInputField.default,
      dispatch: this.props.meta.dispatch,
      form: this.props.meta.form,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      inputValue: this.state.infant.value,
      handleTravelerCount: value => this.handleTravelerCount(value, 'infant')
    })), _react.default.createElement("div", {
      className: "col-xs-12 p8 pt0 mb15"
    }, _react.default.createElement("label", {
      htmlFor: "From",
      className: "f14 fw9 pb8 block pfc3"
    }, "Children ", _react.default.createElement("span", {
      className: "pfc4 fw4 f12"
    }, "(2-12yrs)")), _react.default.createElement(_reduxForm.Field, {
      fieldName: "child",
      component: _TravelerInputField.default,
      dispatch: this.props.meta.dispatch,
      form: this.props.meta.form,
      dispatchRxFormAction: this.props.dispatchRxFormAction,
      formValues: this.props.formValues,
      inputValue: this.state.child.value,
      handleTravelerCount: value => this.handleTravelerCount(value, 'child')
    }))), _react.default.createElement(_footer.default, {
      goBack: this.goBack,
      goForward: this.goForward
    }));
  }

};
TravelerCount.propTypes = {
  formValues: _propTypes.default.object.isRequired,
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  callNextSlide: _propTypes.default.func.isRequired,
  meta: _propTypes.default.object.isRequired,
  location: _propTypes.default.object,
  formStage: _propTypes.default.number,
  progressBar: _propTypes.default.func
};
var _default = TravelerCount;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/TravelerInputField.js":
/*!************************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/TravelerInputField.js ***!
  \************************************************************************************/
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

let TravelerInputField = class TravelerInputField extends _react.default.Component {
  constructor(props) {
    super(props);

    this.onChange = e => {
      let value = parseInt(e.target.value);

      if (this.props.fieldName === 'adult') {
        if (value >= 2) {
          this.setState({
            inputValue: value
          });
        } else {
          value = 1;
          this.setState({
            inputValue: 1
          });
        }
      } else {
        if (value >= 0) {
          this.setState({
            inputValue: value
          });
        } else {
          value = 0;
          this.setState({
            inputValue: 0
          });
        }
      }

      this.props.dispatchRxFormAction(value, this.props.fieldName);
      this.props.handleTravelerCount(value);
    };

    this.updateDays = action => {
      let tempValue = 0;
      let newValue = 0;
      let currentValue = 0;

      if (this.props.fieldName === 'adult') {
        currentValue = this.state.inputValue ? this.state.inputValue : 1;
      } else {
        currentValue = this.state.inputValue ? this.state.inputValue : 0;
      }

      if (action === 'inc') {
        tempValue = 1;
      } else {
        tempValue = -1;
      }

      newValue = parseInt(currentValue, 10) + tempValue;

      if (newValue >= 1 && this.props.fieldName === 'adult') {
        this.setState({
          inputValue: newValue
        });
        this.props.dispatchRxFormAction(newValue.toString(), this.props.fieldName);
      }

      if ((this.props.fieldName === 'infant' || this.props.fieldName === 'child') && newValue >= 0) {
        this.setState({
          inputValue: newValue
        });
        this.props.dispatchRxFormAction(newValue.toString(), this.props.fieldName);
        this.props.handleTravelerCount(newValue);
      }
    };

    this.handleBlur = e => {
      if (e.target.value === '') {
        this.setState({
          inputValue: 0
        });
      }
    };

    this.state = {
      inputValue: this.props.inputValue
    };
    this.props.dispatchRxFormAction(this.state.inputValue, this.props.fieldName);
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "daysCount relative input-with-icon-box input-two-icons input-with-icon-box"
    }, _react.default.createElement("button", {
      type: "button",
      onClick: () => this.updateDays('dec'),
      className: "min-date cursorP minus-icon"
    }), _react.default.createElement("input", {
      name: this.props.fieldName,
      type: "number",
      placeholder: this.props.placeholder,
      className: "input text-center duration",
      value: this.state.inputValue,
      onChange: this.onChange,
      id: this.props.fieldName,
      onBlur: this.handleBlur
    }), _react.default.createElement("button", {
      type: "button",
      onClick: () => this.updateDays('inc'),
      className: "plus-date cursorP plus-icon"
    })), this.props.meta && this.props.meta.touched && this.props.meta.error && _react.default.createElement("span", {
      className: "input-error-text"
    }, this.props.meta.error));
  }

};
TravelerInputField.propTypes = {
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  handleTravelerCount: _propTypes.default.func.isRequired,
  inputValue: _propTypes.default.string,
  fieldName: _propTypes.default.string.isRequired,
  meta: _propTypes.default.object.isRequired,
  formValues: _propTypes.default.object.isRequired,
  placeholder: _propTypes.default.string
};
TravelerInputField.defaultProps = {
  inputValue: ''
};
var _default = TravelerInputField;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/SequentialForm/leadForm/WillBook.js":
/*!**************************************************************************!*\
  !*** ./app/components/Form/FormLead/SequentialForm/leadForm/WillBook.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FilterClear = _interopRequireDefault(__webpack_require__(/*! ../../FilterClear */ "./app/components/Form/FormLead/FilterClear.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const willBookPrefCustomizations = {
  202: 'In Next 2-3 Days',
  203: 'In This Week',
  204: 'In This Month',
  205: 'Later Sometime',
  256: 'Just Checking Price'
};
let WillBook = class WillBook extends _react.default.Component {
  constructor(props) {
    super(props);
    this.checkInitialValues = this.checkInitialValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.state = {
      selected: this.checkInitialValues()
    };
  }

  checkInitialValues() {
    try {
      if (this.props.formValues) {
        const willBookAttributes = this.props.formValues.other_answers_attributes[0];

        if (willBookAttributes && willBookAttributes.optionId) {
          return willBookAttributes.optionId;
        }

        return null;
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  isChecked(optionId) {
    try {
      let index = -1;

      if (this.props.input.value !== '') {
        index = [this.props.input.value].findIndex(obj => obj.option_id.toString() === optionId.toString());
      }

      return index !== -1;
    } catch (e) {
      return false;
    }
  }

  handleChange(event) {
    this.props.input.onChange({
      option_id: event.target.value,
      customization_id: '43'
    });
  }

  render() {
    return _react.default.createElement("div", {
      className: "clearfix will-book-comp"
    }, _react.default.createElement("div", {
      className: "iblock wfull"
    }, _react.default.createElement("p", {
      className: "f14p fw7 sfc6 m0 iblock f14"
    }, "I Will Book", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement(_FilterClear.default, {
      name: "other_answers_attributes[0]",
      text: "Clear",
      type: "radio",
      id: "id_other_answers_attributes[0]"
    })), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "row row-8 flex flexWrap formBox"
    }, Object.keys(willBookPrefCustomizations).map((key, index) => _react.default.createElement("div", {
      className: "col-xs-6 p8 will-book-con-options at_edit_willbook",
      key: key
    }, _react.default.createElement("input", {
      type: "radio",
      className: "radio-common",
      name: "cust_43",
      id: `radio_button_${key}_${index}`,
      value: key,
      checked: this.isChecked(key),
      onChange: this.handleChange,
      defaultChecked: this.state.selected === key
    }), _react.default.createElement("label", {
      htmlFor: `radio_button_${key}_${index}`,
      className: "cursorP"
    }, _react.default.createElement("p", {
      className: "m0"
    }, willBookPrefCustomizations[key])))))));
  }

};
WillBook.propTypes = {
  input: _propTypes.default.object.isRequired,
  formValues: _propTypes.default.object
};
WillBook.defaultProps = {
  formValues: {}
};
var _default = WillBook;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/TravelerCount.js":
/*!*******************************************************!*\
  !*** ./app/components/Form/FormLead/TravelerCount.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GTravCountDiv = _glamorous.default.div({
  '&  .Dropdown-menu': {
    maxHeight: '116px'
  }
});

const adultOptions = () => {
  const options = [];

  for (let i = 1; i <= 150; i += 1) {
    options.push({
      value: i,
      label: i
    });
  }

  return options;
};

const childOptions = () => {
  const defaultValue = {
    value: '0',
    label: '0'
  };
  const options = [];
  options.push(defaultValue);

  for (let i = 1; i <= 150; i += 1) {
    options.push({
      value: i,
      label: i
    });
  }

  return options;
};

function getChildCount(formValues, index) {
  try {
    return formValues.child_age_answers_attributes[index].user_input;
  } catch (e) {
    return '0';
  }
}

const TravelerDropdown = ({
  input,
  id,
  options,
  handleTravelerCount,
  defaultValue
}) => {
  const handleChange = event => {
    input.onChange(event.target.value);
    handleTravelerCount(event.target.value, event.target.id);
  };

  return _react.default.createElement("select", {
    id: id,
    className: "select",
    onChange: handleChange,
    defaultValue: defaultValue
  }, options.map(option => _react.default.createElement("option", {
    value: option.value,
    key: `${id}_${option.value}`
  }, option.value)));
};

TravelerDropdown.propTypes = {
  input: _propTypes.default.object.isRequired,
  id: _propTypes.default.string,
  options: _propTypes.default.array.isRequired,
  handleTravelerCount: _propTypes.default.func,
  defaultValue: _propTypes.default.string
};
TravelerDropdown.defaultProps = {
  id: '',
  handleTravelerCount: () => {},
  defaultValue: ''
};
let TravelerCount = class TravelerCount extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleDefaultValues = this.handleDefaultValues.bind(this);
    this.updateChildCountInRedux = this.updateChildCountInRedux.bind(this);
    this.handleDefaultValues();
  }

  updateChildCountInRedux() {
    const totalCount = parseInt(this.state.child.value, 10) + parseInt(this.state.infant.value, 10);
    this.props.dispatchRxFormAction(totalCount.toString(), 'child');
  }

  handleTravelerCount(value, fieldName) {
    let childAgeAttributes;

    if (fieldName === 'infant') {
      this.setState({
        infant: {
          value: value,
          label: value
        }
      }, () => this.updateChildCountInRedux());
      childAgeAttributes = {
        option_id: '29',
        customization_id: '7',
        user_input: value.toString()
      };
      this.props.dispatchRxFormAction(childAgeAttributes, 'child_age_answers_attributes[0]');
    } else if (fieldName === 'child') {
      this.setState({
        child: {
          value: value,
          label: value
        }
      }, () => this.updateChildCountInRedux());
      childAgeAttributes = {
        option_id: '31',
        customization_id: '7',
        user_input: value.toString()
      };
      this.props.dispatchRxFormAction(childAgeAttributes, 'child_age_answers_attributes[2]');
    } else {
      this.props.dispatchRxFormAction(value, fieldName);
    }
  }

  handleDefaultValues() {
    this.state = {
      adults: {
        value: this.props.formValues.adult || '2',
        label: this.props.formValues.adult || '2'
      },
      child: {
        value: getChildCount(this.props.formValues, 2),
        label: getChildCount(this.props.formValues, 2)
      },
      infant: {
        value: getChildCount(this.props.formValues, 0),
        label: getChildCount(this.props.formValues, 0)
      }
    };
  }

  render() {
    return _react.default.createElement(GTravCountDiv, {
      className: "row row-8 trav-count"
    }, _react.default.createElement("div", {
      className: "col-xs-6 p8 pt0"
    }, _react.default.createElement("label", {
      htmlFor: "From",
      className: "f14 fw9 pb8 block pfc3"
    }, "Adults ", _react.default.createElement("span", {
      className: "pfc4 fw4 f12"
    }, "(12+ yrs)")), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "input-with-icon-box input-dropdown-box input-dropdown-box-long"
    }, _react.default.createElement("span", {
      className: "input-icon flexCenter profileCon"
    }, _react.default.createElement(_Icon.ProfileIcon, null)), _react.default.createElement("span", {
      className: "r10 block wauto lauto input-icon absolute-center-v downArrow"
    }, _react.default.createElement(_Icon.DownArrow, null)), _react.default.createElement(_reduxForm.Field, {
      name: "adult",
      component: TravelerDropdown,
      type: "select",
      id: "adult",
      options: adultOptions(),
      value: this.state.adults.value,
      defaultValue: this.state.adults.value,
      placeholder: "2",
      onChange: value => {
        this.setState({
          adults: value
        });
        this.props.meta.dispatch({
          type: '@@redux-form/CHANGE',
          meta: {
            form: this.props.meta.form,
            field: 'adult',
            touch: false,
            persistentSubmitErrors: false
          },
          payload: value.value
        });
      }
    })))), _react.default.createElement("div", {
      className: "col-xs-6 p8 pt0"
    }, _react.default.createElement("label", {
      htmlFor: "From",
      className: "f14 fw9 pb8 block pfc3"
    }, "Infant ", _react.default.createElement("span", {
      className: "pfc4 fw4 f12"
    }, "(0-2yrs)")), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "input-with-icon-box input-dropdown-box input-dropdown-box-long"
    }, _react.default.createElement("span", {
      className: "input-icon flexCenter profileCon"
    }, _react.default.createElement(_Icon.ProfileIcon, null)), _react.default.createElement("span", {
      className: "r10 block wauto lauto input-icon absolute-center-v downArrow"
    }, _react.default.createElement(_Icon.DownArrow, null)), _react.default.createElement(_reduxForm.Field, {
      name: "infant",
      component: TravelerDropdown,
      type: "select",
      id: "infant",
      options: childOptions(),
      value: this.state.infant.value,
      defaultValue: this.state.infant.value,
      placeholder: "0" // onChange={value => this.handleTravelerCount(value, 'infant')}
      ,
      handleTravelerCount: value => this.handleTravelerCount(value, 'infant')
    })))), _react.default.createElement("div", {
      className: "col-xs-6 p8 pt0"
    }, _react.default.createElement("label", {
      htmlFor: "From",
      className: "f14 fw9 pb8 block pfc3"
    }, "Children ", _react.default.createElement("span", {
      className: "pfc4 fw4 f12"
    }, "(2-12yrs)")), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "input-with-icon-box input-dropdown-box input-dropdown-box-long"
    }, _react.default.createElement("span", {
      className: "input-icon flexCenter profileCon"
    }, _react.default.createElement(_Icon.ProfileIcon, null)), _react.default.createElement("span", {
      className: "r10 block wauto lauto input-icon absolute-center-v downArrow"
    }, _react.default.createElement(_Icon.DownArrow, null)), _react.default.createElement(_reduxForm.Field, {
      name: "child",
      component: TravelerDropdown,
      type: "select",
      id: "child",
      options: childOptions(),
      value: this.state.child.value,
      defaultValue: this.state.child.value,
      placeholder: "0" // onChange={value => this.handleTravelerCount(value, 'child')}
      ,
      handleTravelerCount: value => this.handleTravelerCount(value, 'child')
    })))));
  }

};
TravelerCount.propTypes = {
  formValues: _propTypes.default.object.isRequired,
  dispatchRxFormAction: _propTypes.default.func.isRequired,
  meta: _propTypes.default.object.isRequired
};
var _default = TravelerCount;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/TypeTour.js":
/*!**************************************************!*\
  !*** ./app/components/Form/FormLead/TypeTour.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FilterClear = _interopRequireDefault(__webpack_require__(/*! ./FilterClear */ "./app/components/Form/FormLead/FilterClear.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TypeTour = ({
  question,
  input,
  nameForClear
}) => {
  const isChecked = optionId => {
    try {
      let index = -1;

      if (input.value !== '') {
        index = [input.value].findIndex(obj => obj.option_id.toString() === optionId.toString());
      }

      return index !== -1;
    } catch (e) {
      return false;
    }
  };

  const handleChange = event => {
    if (!question.useInputForOptions) {
      input.onChange({
        option_id: event.target.value.toString(),
        customization_id: question.customizationId.toString()
      });
    } else {
      // TODO :: set user input
      input.onChange({
        user_input: '',
        option_id: event.target.value.toString(),
        customization_id: question.customizationId.toString()
      });
    }
  };

  return _react.default.createElement("div", {
    className: "row row- tour-type at_tourtype"
  }, _react.default.createElement("div", {
    className: "iblock wfull"
  }, _react.default.createElement("p", {
    className: "f14p fw7 sfc6 m0 iblock f14"
  }, question.title), _react.default.createElement(_FilterClear.default, {
    name: nameForClear,
    text: "Clear",
    type: "radio",
    id: `id_${nameForClear}`
  })), _react.default.createElement("div", {
    className: "row row-"
  }, _react.default.createElement("div", {
    className: "row row-8 flex flexWrap formBox "
  }, question.options.map((option, index) => _react.default.createElement("div", {
    className: "col-xs-6 p8 at_tourtype_radio",
    key: option.id
  }, _react.default.createElement("input", {
    type: "radio",
    className: "radio-common",
    name: `${question.identifier}[${index}]`,
    id: `radio_button_${option.id}_${index}`,
    value: option.id,
    checked: isChecked(option.id),
    onChange: handleChange
  }), _react.default.createElement("label", {
    htmlFor: `radio_button_${option.id}_${index}`,
    className: "cursorP"
  }, _react.default.createElement("p", {
    className: "m0"
  }, option.name)))))));
};

TypeTour.propTypes = {
  question: _propTypes.default.object.isRequired,
  input: _propTypes.default.object.isRequired,
  nameForClear: _propTypes.default.string.isRequired
};
var _default = TypeTour;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/WillBook.js":
/*!**************************************************!*\
  !*** ./app/components/Form/FormLead/WillBook.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _FilterClear = _interopRequireDefault(__webpack_require__(/*! ./FilterClear */ "./app/components/Form/FormLead/FilterClear.js"));

var _willBookCm = _interopRequireDefault(__webpack_require__(/*! ./willBook.cm.scss */ "./app/components/Form/FormLead/willBook.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const willBookPrefCustomizations = {
  202: 'In Next 2-3 Days',
  203: 'In This Week',
  204: 'In This Month',
  205: 'Later Sometime',
  256: 'Just Checking Price'
};
let WillBook = class WillBook extends _react.default.Component {
  constructor(props) {
    super(props);
    this.checkInitialValues = this.checkInitialValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.state = {
      selected: this.checkInitialValues()
    };
  }

  checkInitialValues() {
    try {
      if (this.props.formValues) {
        const willBookAttributes = this.props.formValues.other_answers_attributes[0];

        if (willBookAttributes && willBookAttributes.optionId) {
          return willBookAttributes.optionId;
        }

        return null;
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  isChecked(optionId) {
    try {
      let index = -1;

      if (this.props.input.value !== '') {
        index = [this.props.input.value].findIndex(obj => obj.option_id.toString() === optionId.toString());
      }

      return index !== -1;
    } catch (e) {
      return false;
    }
  }

  handleChange(event) {
    this.props.input.onChange({
      option_id: event.target.value,
      customization_id: '43'
    });
  }

  render() {
    return _react.default.createElement("div", {
      className: "clearfix will-book-comp"
    }, _react.default.createElement("div", {
      className: "iblock wfull"
    }, _react.default.createElement("p", {
      className: "f14p fw7 sfc6 m0 iblock f14"
    }, "I Will Book", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement(_FilterClear.default, {
      name: "other_answers_attributes[0]",
      text: "Clear",
      type: "radio",
      id: "id_other_answers_attributes[0]"
    })), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "row row-8"
    }, Object.keys(willBookPrefCustomizations).map((key, index) => _react.default.createElement("div", {
      className: `col-xs-6 p8 will-book-con-options at_edit_willbook ${_willBookCm.default.willBook}`,
      key: key
    }, _react.default.createElement("input", {
      type: "radio",
      className: "radio-common",
      name: "cust_43",
      id: `radio_button_${key}_${index}`,
      value: key,
      checked: this.isChecked(key),
      onChange: this.handleChange,
      defaultChecked: this.state.selected === key
    }), _react.default.createElement("label", {
      htmlFor: `radio_button_${key}_${index}`,
      className: "cursorP"
    }, _react.default.createElement("p", {
      className: "m0"
    }, willBookPrefCustomizations[key])))))));
  }

};
WillBook.propTypes = {
  input: _propTypes.PropTypes.object.isRequired,
  formValues: _propTypes.PropTypes.object
};
WillBook.defaultProps = {
  formValues: {}
};
var _default = WillBook;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/willBook.cm.scss":
/*!*******************************************************!*\
  !*** ./app/components/Form/FormLead/willBook.cm.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"willBook": "_1RHl1f3iRIORwcF3HQuaBO"
};

/***/ }),

/***/ "./app/components/Form/FromLocation.js":
/*!*********************************************!*\
  !*** ./app/components/Form/FromLocation.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./FormLead/LeadForm.scss */ "./app/components/Form/FormLead/LeadForm.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _LocationSearch = _interopRequireDefault(__webpack_require__(/*! ./LocationSearch */ "./app/components/Form/LocationSearch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FromLocation = class FromLocation extends _react.default.Component {
  componentDidMount() {
    if (false) {}
  }

  render() {
    const {
      input,
      label,
      id
    } = this.props;
    const inputProps = {
      value: input.value,
      placeholder: 'From Location...',
      onChange: (obj, check = true) => {
        input.onChange(obj, check);

        if (check) {
          console.log('clicked');
          this.props.trackFormOneInteracted();
        }
      },
      id,
      onFocus: evnt => {
        input.onFocus(evnt);
      }
    };
    return _react.default.createElement("div", {
      className: "form-field-label mb15"
    }, _react.default.createElement("label", {
      htmlFor: label,
      className: "f14 fw9 pb15 block"
    }, label), _react.default.createElement("div", {
      className: "input-with-icon-box"
    }, _react.default.createElement("span", {
      className: "input-icon flexCenter locationIconSize"
    }, _react.default.createElement(_Icon.LocationMarkerIcon, null)), _react.default.createElement(_LocationSearch.default, {
      inputProps: inputProps
    })));
  }

};
FromLocation.propTypes = {
  input: _propTypes.default.object.isRequired,
  label: _propTypes.default.string.isRequired,
  trackFormOneInteracted: _propTypes.default.func.isRequired,
  id: _propTypes.default.string
};
FromLocation.defaultProps = {
  id: ''
};
var _default = FromLocation;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FromLocationSearch.js":
/*!***************************************************!*\
  !*** ./app/components/Form/FromLocationSearch.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

__webpack_require__(/*! ./FromLocationSearch.scss */ "./app/components/Form/FromLocationSearch.scss");

var _citySearch = __webpack_require__(/*! reducers/citySearch */ "./app/reducers/citySearch.js");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FromLocationSearch = (_dec = (0, _reactRedux.connect)(state => ({
  suggestions: (0, _citySearch.suggestions)(state)
}), {
  loadSuggestions: _citySearch.load
}), _dec(_class = (_temp = _class2 = class FromLocationSearch extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      listShown: false,
      term: props.initialValue
    };
    this.handleChange = this.handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.inputBlur = this.inputBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialValue !== prevProps.initialValue) {
      this.setState({
        term: this.props.initialValue
      });
    }
  }

  handleChange(e) {
    this.setState({
      term: e.target.value,
      listShown: true
    });
    this.props.trackFormOneInteracted();
    this.props.loadSuggestions(e.target.value);
    this.props.handleBlur();
  }

  handleFocus() {
    this.props.handleFocus();
  }

  inputBlur(e) {
    this.props.itemSelected(e.target.value);
  }

  blurHandler(e) {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({
          listShown: false
        });
      }
    }, 0);
  }

  _handleClick(item) {
    this.setState({
      listShown: false,
      term: item.target.value
    });
    this.props.itemSelected(item.target.value);
  }

  render() {
    const renderList = (listItem, list) => {
      if (list.length) {
        return _react.default.createElement("div", {
          className: "row row- formlocation-box",
          key: listItem
        }, _react.default.createElement("p", {
          className: "p8 list-heading"
        }, listItem), _react.default.createElement("ul", null, list.map(item => _react.default.createElement("li", {
          key: item.id
        }, _react.default.createElement("button", {
          onClick: this._handleClick,
          value: item.key
        }, item.key)))));
      }

      return '';
    };

    return _react.default.createElement("div", {
      className: "row row-",
      onBlur: this.blurHandler
    }, _react.default.createElement("input", {
      onFocus: this.handleFocus,
      autoComplete: "off",
      onChange: this.handleChange,
      type: "text",
      onBlur: this.inputBlur,
      value: this.state.term,
      placeholder: "Where You Want To Go ?",
      id: this.props.id
    }), _react.default.createElement("div", {
      className: "row row- formlocation-box-data"
    }, this.state.listShown ? [renderList('Destinations', this.props.suggestions.destinations || []), renderList('Cities', this.props.suggestions.cities || [])] : ''));
  }

}, _class2.propTypes = {
  suggestions: _propTypes.default.object,
  loadSuggestions: _propTypes.default.func.isRequired,
  initialValue: _propTypes.default.string,
  itemSelected: _propTypes.default.func.isRequired,
  trackFormOneInteracted: _propTypes.default.func.isRequired,
  handleFocus: _propTypes.default.func,
  id: _propTypes.default.string,
  handleBlur: _propTypes.default.func.isRequired
}, _class2.defaultProps = {
  suggestions: {
    destinations: [],
    cities: []
  },
  initialValue: '',
  handleChange: () => {},
  handleFocus: () => {},
  id: 'toLocation',
  handleBlur: () => {}
}, _temp)) || _class);
var _default = FromLocationSearch;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FromLocationSearch.scss":
/*!*****************************************************!*\
  !*** ./app/components/Form/FromLocationSearch.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"formlocation-box-data": "_1Atnl",
	"formlocation-box": "_1AN4q"
};

/***/ }),

/***/ "./app/components/Form/LocationSearch.js":
/*!***********************************************!*\
  !*** ./app/components/Form/LocationSearch.js ***!
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

var _reactPlacesAutocomplete = _interopRequireDefault(__webpack_require__(/*! react-places-autocomplete */ "react-places-autocomplete"));

var _locationSearchCm = _interopRequireDefault(__webpack_require__(/*! ./locationSearch.cm.scss */ "./app/components/Form/locationSearch.cm.scss"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const customStyles = {
  root: {
    position: 'relative'
  },
  input: {
    width: '100%'
  },
  autocompleteContainer: {
    backgroundColor: '#FFF',
    zIndex: 5
  },
  autocompleteItem: {
    color: '#333'
  },
  autocompleteItemActive: {
    color: '#FE5246',
    backgroundColor: '#FFF'
  }
};
const classNames = {};
let LocationSearch = (_temp = _class = class LocationSearch extends _react.Component {
  constructor(props) {
    super(props);

    if (props.isError) {
      classNames.input = 'input-error';
    }

    this.state = {
      isMapLoaded: false
    };
  }

  componentDidMount() {
    const {
      inputProps
    } = this.props;

    const $S = __webpack_require__(/*! scriptjs */ "scriptjs");

    $S('https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDDxAgUCYhdqq_FbkX15R1uHASv-wAHD0M', () => {
      this.setState({
        isMapLoaded: true
      });
      const google = typeof window !== 'undefined' ? window.google : false;

      if (navigator && !!navigator.geolocation && google && google.maps && google.maps.Geocoder) {
        navigator.geolocation.getCurrentPosition(position => {
          const geocoder = new google.maps.Geocoder();
          const latlang = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          if (!inputProps.value) {
            geocoder.geocode({
              location: latlang
            }, (results, status) => {
              if (status === 'OK') {
                // places location will be present in 2
                let address;

                for (let index = 2; index >= 0; index -= 1) {
                  if (results[index]) {
                    address = results[index].formatted_address;
                    break;
                  }
                }

                inputProps.onChange(address, false);
              }
            });
          }
        });
      }
    });
  }

  render() {
    const {
      inputProps
    } = this.props;
    return this.state.isMapLoaded ? _react.default.createElement(_reactPlacesAutocomplete.default, {
      inputProps: inputProps,
      styles: customStyles,
      classNames: classNames
    }) : _react.default.createElement("div", {
      className: "relative pb0"
    }, _react.default.createElement("input", {
      className: `${_locationSearchCm.default.input} iblock pb0 relative wfull`,
      type: "text",
      defaultValue: inputProps.value,
      placeholder: inputProps.placeholder
    }));
  }

}, _class.propTypes = {
  inputProps: _propTypes.default.object.isRequired,
  isError: _propTypes.default.bool
}, _class.defaultProps = {
  isError: false
}, _temp);
var _default = LocationSearch;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/MonthBox.js":
/*!*****************************************!*\
  !*** ./app/components/Form/MonthBox.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
let MonthBox = class MonthBox extends _react.default.Component {
  constructor(props, context) {
    super(props, context);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    return _react.default.createElement("div", {
      id: "flexible_date_fnew",
      className: "input form-date-check box-input-flex",
      onClick: this._handleClick
    }, this.props.dateValue ? this.props.dateValue : 'Flexible');
  }

};
MonthBox.propTypes = {
  onClick: _propTypes.default.func,
  dateValue: _propTypes.default.string
};
MonthBox.defaultProps = {
  onClick: () => {},
  dateValue: ''
};
var _default = MonthBox;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/locationSearch.cm.scss":
/*!****************************************************!*\
  !*** ./app/components/Form/locationSearch.cm.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"input": "_3vz9y_NOKAjg7Tv63mQ0GA"
};

/***/ }),

/***/ "./app/containers/FormOneLead/FormOneLeadAsync.js":
/*!********************************************************!*\
  !*** ./app/containers/FormOneLead/FormOneLeadAsync.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReferer = getReferer;
exports.default = exports.FormOneLeadAsync = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _queryString = _interopRequireDefault(__webpack_require__(/*! query-string */ "query-string"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _formValidators = __webpack_require__(/*! utils/formValidators */ "./app/utils/formValidators.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _actionConstants = __webpack_require__(/*! ../../actionConstants */ "./app/actionConstants/index.js");

var _Slider = __webpack_require__(/*! constants/Slider */ "./app/constants/Slider.js");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _FixedMenu = __webpack_require__(/*! components/FixedMenu/FixedMenu */ "./app/components/FixedMenu/FixedMenu.js");

var _LeadFormTwo = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/LeadFormTwo */ "./app/components/Form/FormLead/LeadFormTwo.js"));

var _LeadFormThree = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/LeadFormThree */ "./app/components/Form/FormLead/LeadFormThree.js"));

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! components/DatePicker/Datepickernew.scss */ "./app/components/DatePicker/Datepickernew.scss");

__webpack_require__(/*! components/DatePicker/Monthpicker.scss */ "./app/components/DatePicker/Monthpicker.scss");

__webpack_require__(/*! ../../theme/customMonthpicker.scss */ "./app/theme/customMonthpicker.scss");

var _index = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/SequentialForm/index */ "./app/components/Form/FormLead/SequentialForm/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const validate = values => {
  const errors = {};
  const tripDaysError = 'enter minimum 2 days'; // duration validations

  if (!values.trip_days || parseInt(values.trip_days, 10) < 2) {
    errors.trip_days_temp = tripDaysError;
  }

  errors.email = (0, _formValidators.requiredWithmessage)('Enter valid email id')(values.email) || (0, _formValidators.email)(values.email);
  errors.to_loc = (0, _formValidators.requiredWithmessage)('enter correct city name')(values.to_loc);
  errors.start_date = (0, _formValidators.requiredWithmessage)('select One Date-type')(values.start_date);

  if (values) {
    let status = 0,
        status1 = 100;

    if (values.email && !(0, _formValidators.email)(values.email)) {
      status = status + 33;
      status1 = status1 - 24;
    }

    if (values.phone_no && !(0, _formValidators.phoneNumber)(values.phone_no)) {
      status = status + 8;
      status1 = status1 - 4;
    }

    if (values.start_date && (0, _formValidators.validDate)(values.start_date)) {
      status = status + 12;
      status1 = status1 - 24;
    }

    if (values.to_loc) {
      status = status + 36;
      status1 = status1 - 24;
    }

    if (values.trip_days && values.trip_days >= 2) {
      status = status + 11;
      status1 = status1 - 24;
    }

    if (typeof document !== 'undefined' && document.getElementById('progress-header')) {
      document.getElementById('progress-header').style.width = `${status}%`; // document.getElementById('bg-progress').style.height = `${status}%`;
      // if(status === 100){
      //   setTimeout(function(){
      //     document.getElementById('form-variation')
      //      .setAttribute('style','position:absolute;min-height:100%;background-color:#eae8e8');
      //   }, 300);
      // }else {
      //   document.getElementById('form-variation')
      //      .setAttribute('style','position:relative;min-height:100%;background-color:#fff');
      // }
    }
  }

  return errors;
};

function getReferer(location, packageId) {
  try {
    let referrerDeal;

    if (location.query.tag === 'luxury') {
      referrerDeal = `LUXURY::packageId=${packageId}`;
    } else if (location.query.deals) {
      referrerDeal = `DEALS::packageId=${packageId}`;
    }

    const queryreferrer = location.query.referrer ? location.query.referrer : 'direct';
    return referrerDeal ? `${queryreferrer}::${referrerDeal}` : queryreferrer;
  } catch (e) {
    return 'direct';
  }
}

const onSubmitFail = errors => {
  if (Object.keys(errors).length && typeof window !== 'undefined') {
    console.log("Errors in redux-form");
  }
};

function createNewUniqueId() {
  let myUserid = '';
  let myRandomtext = '';
  const d = new Date().getTime();
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|+-';

  for (let i = 0; i < 8; i += 1) {
    myRandomtext += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  myUserid = `${d}_${myRandomtext}`;
  return myUserid;
}

function getTitle(sliderQuestions, sliderNumber) {
  try {
    return sliderQuestions.data.genericSliderQuestions[sliderNumber].title;
  } catch (e) {
    if (sliderNumber) {
      return _Slider.TITLE[sliderNumber];
    }

    return _Slider.TITLE[1];
  }
}

const starToId = {
  2: '32',
  3: '8',
  4: '7',
  5: '6'
};
let FormOneLeadAsync = class FormOneLeadAsync extends _react.Component {
  constructor(props) {
    super(props);

    this.setClientSideRenderingFlag = () => {
      this.setState({
        clientSideRenderingFlag: true
      });
    };

    this.checkErrors = (fields, isValidRequired) => {
      return new Promise(resolve => {
        fields.forEach(name => {
          this.props.touch(this.props.form, name);
        });
        return isValidRequired ? resolve(this.props.valid && !this.props.invalid) : resolve(true);
      });
    };

    this.dispatchRxFormAction = (value, fieldName) => {
      this.props.dispatch({
        type: '@@redux-form/CHANGE',
        meta: {
          form: this.props.form,
          field: fieldName,
          touch: false,
          persistentSubmitErrors: false
        },
        payload: value
      });
    };

    this.handleSliderResponse = (response, data, values, nextSlide, redisTrip = false) => {
      this.setState({
        disableSubmitButton: false
      });

      if (data.isSubmit) {
        // TODO :: handle error response
        this.props.loadUserDetails();
        let redirectUrl = '';

        if (!redisTrip) {
          (0, _FormDataFormatter.setCookie)('trip_id', response && response.data && response.data.requested_trip && response.data.requested_trip.id);
          redirectUrl = response.data.redirect_url;

          if (typeof window !== 'undefined') {
            redirectUrl = `https://${window.location.host}${response.data.redirect_url}`;
          }

          this.props.aliasPayload({
            user_id: response.data.user_id
          });
          this.props.identifyPayload({
            user_id: response.data.user_id
          });
        } else {
          redirectUrl = `${_appConfig.default.api_protocol}://${window.location.host}`;
          this.props.updateFields({
            type: _Slider.TRIP_UPDATED_IN_REDIS,
            value: true
          });
        }

        this.props.trackTripUpdated({
          funnel_step: 11,
          to_loc: data.to_loc,
          funnel_uuid: data.redis_key,
          trip_id: redisTrip ? '' : response.data.requested_trip.id,
          formType: this.props.formType,
          u_id: redisTrip ? '' : (0, _FormDataFormatter.getCookie)(_segmentEvents.USER_ID_COOKIE_KEY),
          u_role: redisTrip ? '' : (0, _FormDataFormatter.getCookie)(_segmentEvents.USER_ROLE_COOKIE_KEY)
        });

        if (redisTrip) {
          if (typeof window !== 'undefined') {
            this.props.pushState(redirectUrl);
          }
        } else {
          if (typeof window === 'undefined') {
            console.log('Pushing state');
            this.props.pushState(redirectUrl);
          } else {
            console.log('redirecting');
            window.location.href = redirectUrl;
          }
        }
      } else {
        if (nextSlide === _Slider.SEQUENTIAL_FORM_SEVEN) {
          if (!this.isFacebookPixel) {
            this.isFacebookPixel = true;
            window.fireAdWordsTag();
            const fbAdword = (0, _FormDataFormatter.fireFacebookAdword)();
            eval(fbAdword);
          }

          if (!this.formSubmitted) {
            this.props.trackTripAdded({
              funnel_step: 5,
              to_loc: redisTrip ? '' : response.dest_info.name,
              funnel_uuid: data.redis_key,
              formType: this.props.formType
            });
            this.formSubmitted = true;
          }
        } else {
          this.props.trackTripUpdated({
            funnel_step: 8,
            to_loc: redisTrip ? '' : response.dest_info.name,
            funnel_uuid: data.redis_key,
            formType: this.props.formType
          });
        }

        this.props.updateFields({
          type: _Slider.UPDATE_TO_DESTINATION,
          value: {
            fromDestination: redisTrip ? '' : response.dest_info.fromDestination || values.from_loc,
            toDestination: redisTrip ? '' : response.dest_info.name,
            currentInteractionTime: redisTrip ? '' : response.current_interaction_time,
            isDomestic: redisTrip ? false : response.dest_info.destination_type === 'domestic'
          }
        });
      }
    };

    this.correctStartDateValues = formValues => {
      const values = _objectSpread({}, formValues);

      if (values.start_date_noidea) {
        values.start_date_flexible = '';
        values.start_date = '';
      }

      return values;
    };

    this.getAdminComments = (location, rtData, queryParams) => {
      const {
        query
      } = location;
      let newAdminComments = '';

      if (typeof window !== 'undefined') {
        // when admin comments are provided in url params in case of generic marketing pages
        if (queryParams.generic_admin_comment) {
          const path = decodeURI(window.location.search);
          const index = path.indexOf('Form_filled_on');
          newAdminComments = path.slice(index);
          newAdminComments = `#${newAdminComments.split(' ').join(' #')}`;
        } // adding any admincomment set by vwo experiment in rtrip admin comments


        if (window.experimentAdminComment) {
          newAdminComments = `${newAdminComments} ${window.experimentAdminComment}`;
        }
      }

      if (query.mview && query.srcUrl) {
        // For amp blog and product.
        newAdminComments = `#mobile #Form_filled_on ${query.srcUrl} #trip_origin_product:${query.utm_source && query.utm_source === 'blog' ? 'traveler_mweb' : 'public_mweb'}`;
      }

      newAdminComments = `${rtData.adminComments ? rtData.adminComments : ''} ${newAdminComments}`;
      newAdminComments = `${newAdminComments} ${query.tag === 'luxury' ? 'Luxury Package' : ''}`;
      return newAdminComments;
    };

    this.getAdditionaInfo = () => {
      const {
        rtData,
        location: {
          query
        }
      } = this.props;
      const info = query.tag === 'luxury' ? `I want Luxury packages with ${query.budget}` : '';
      return `${rtData.addtl_info ? rtData.addtl_info : ''} ${info}`;
    };

    this.submitForm = (formValues, enabledForSubmit, nextSlide) => {
      const {
        updateFields,
        location: {
          query
        },
        packageData: {
          price,
          starRating,
          isFlight
        },
        requestLoad,
        commonProperties,
        createTripOnRedis,
        openFormState
      } = this.props;
      const dealnLuxury = {
        budget: `${price}...${Math.ceil(price + price * 0.05)}`,
        hotel_category_answers_attributes: [{
          option_id: starToId[starRating],
          customization_id: '2'
        }],
        hotel_needed_answer_attributes: {
          option_id: '95',
          customization_id: '22'
        },
        flight_answer_attributes: {
          option_id: `${isFlight ? '97' : '98'}`,
          customization_id: '23'
        }
      };

      if (enabledForSubmit && nextSlide !== _Slider.SEQUENTIAL_FORM_END) {
        nextSlide = _Slider.SEQUENTIAL_FORM_SEVEN;
      }

      if (query.deals) {
        formValues = _objectSpread({}, formValues, dealnLuxury);
      }

      const values = this.correctStartDateValues(formValues);
      this.setState({
        disableSubmitButton: true
      });
      let queryParams = {};

      if (typeof window !== 'undefined') {
        queryParams = _queryString.default.parse(window.location.search);
      }

      if (typeof document !== 'undefined') {
        document.dispatchEvent(new CustomEvent('form-variation-f1-submit'));
      }

      const segmetHelperData = {};
      let data;
      const sentTime = new Date().getTime();
      const {
        packageId,
        pageName,
        section,
        object,
        cta
      } = this.props.rtData;
      const referrer = getReferer(this.props.location, packageId);
      const redisKey = this.props.commonProperties.redisKey || createNewUniqueId();
      const adminComments = this.getAdminComments(this.props.location, this.props.rtData, queryParams);
      const add_info = this.getAdditionaInfo();
      const rtProps = {
        requested_trip: _objectSpread({}, values, {
          trip_days: Math.min(values.trip_days, 99),
          from_slider_form: 'true',
          create_your_own_id: 'false',
          new_form: 'true',
          start_date: values.start_date_flexible || values.start_date_noidea ? '' : values.start_date,
          adminComments: adminComments,
          referer: referrer,
          addtl_info: add_info,
          attribution_attributes: {
            trip_origin_product: 'public_mweb',
            trip_origin_uri: (0, _segmentEvents.prepareEventOriginUri)(pageName, section, object, cta),
            trip_origin_package_id: packageId,
            context_page_url: (0, _segmentEvents.getFormFilledOn)(adminComments, query),
            context_campaign_source: queryParams.utm_source,
            context_campaign_medium: queryParams.utm_medium,
            context_campaign_name: queryParams.utm_campaign,
            context_campaign_term: queryParams.utm_term,
            context_campaign_content: queryParams.utm_content,
            session_uuid: (0, _FormDataFormatter.getCookie)(_segmentEvents.SESSION_UUID_COOKIE_KEY),
            page_uuid: (0, _FormDataFormatter.getCookie)(_segmentEvents.PAGE_UUID_COOKIE_KEY),
            landing_page_uuid: (0, _FormDataFormatter.getCookie)(_segmentEvents.LANDING_UUID_COOKIE_KEY),
            referer_page_uuid: (0, _FormDataFormatter.getCookie)(_segmentEvents.REFERER_UUID_KEY),
            funnel_uuid: (0, _FormDataFormatter.getCookie)(_segmentEvents.FUNNEL_UUID_KEY)
          }
        })
      };

      if (enabledForSubmit) {
        data = _objectSpread({
          redis_key: redisKey,
          isSubmit: enabledForSubmit
        }, rtProps);
      } else {
        data = {
          redis_key: redisKey,
          to_loc: values.to_loc,
          time_stamp: sentTime,
          card_number: this.props.commonProperties.sliderDisplayMode.toString(),
          isSubmit: enabledForSubmit,
          card_data: _objectSpread({}, rtProps)
        };
      }

      if (nextSlide === _Slider.SEQUENTIAL_FORM_SEVEN) {
        const segmentData = {
          event: 'Lead Funnel',
          category: `Destination:${values.to_loc || 'unknown'}`,
          section: segmetHelperData.section,
          object: '',
          cta: segmetHelperData.cta,
          destination_list: '',
          form_variant: (0, _segmentEvents.getFormType)(this.props.formType),
          funnel_step: segmetHelperData.funnel_step,
          start_date: values.start_date_flexible || values.start_date_noidea ? '' : values.start_date,
          trip_days: Math.min(values.trip_days, 99),
          label: 'Form1 Submitted',
          num_destinations: 0,
          to_loc: data.to_loc,
          trip_id: data.trip_id || 0,
          funnel_uuid: data.redis_key
        };
        (0, _segmentEvents.trackSegment)(segmentData);
      }

      let segmentParamFormOneSubmit = {};

      if (enabledForSubmit) {
        segmentParamFormOneSubmit = {
          event: 'Lead Funnel',
          category: `Destination:${data.requested_trip.to_loc || 'unknown'}`,
          section: segmetHelperData.section,
          object: '',
          cta: segmetHelperData.cta,
          destination_list: '',
          form_variant: (0, _segmentEvents.getFormType)(this.props.formType),
          funnel_step: segmetHelperData.funnel_step,
          start_date: data.requested_trip.start_date,
          trip_days: data.requested_trip.trip_days,
          label: 'Form2 Submitted',
          num_destinations: 0,
          fields: {
            budget: values.budget
          },
          to_loc: data.requested_trip.to_loc,
          trip_id: data.trip_id || 0,
          funnel_uuid: data.redis_key,
          exploring_destination: data.requested_trip.exploring_destinations
        };
      } else {
        segmentParamFormOneSubmit = {
          event: 'Lead Funnel',
          category: `Destination:${data.to_loc || 'unknown'}`,
          section: segmetHelperData.section,
          object: '',
          cta: segmetHelperData.cta,
          destination_list: '',
          form_variant: (0, _segmentEvents.getFormType)(this.props.formType),
          funnel_step: segmetHelperData.funnel_step,
          start_date: data.card_data.requested_trip.start_date,
          trip_days: data.card_data.requested_trip.trip_days,
          label: (0, _segmentEvents.getLeadFunnelName)(segmetHelperData.funnel_step),
          num_destinations: 0,
          to_loc: data.to_loc,
          trip_id: data.trip_id || 0,
          funnel_uuid: data.redis_key,
          exploring_destination: data.card_data.requested_trip.exploring_destinations
        };
      }

      (0, _segmentEvents.trackSegment)(segmentParamFormOneSubmit);
      const handleSliderResponse = this.handleSliderResponse;
      const finalData = {
        data: _objectSpread({}, data)
      };
      const callBackParams = {
        requestParams: nextSlide === _Slider.SEQUENTIAL_FORM_END ? finalData : data,
        values,
        nextSlide,
        rtProps,
        enabledForSubmit,
        requestLoad,
        commonProperties,
        handleSliderResponse,
        createTripOnRedis,
        updateFields,
        openFormState,
        redisKey
      };

      if (nextSlide === _Slider.SEQUENTIAL_FORM_END) {
        if (window.postLeadHandlersSequentialForm && window.postLeadHandlersSequentialForm.length) {
          if (this.checkForExperiment(callBackParams, this.callApiToBackEnd)) {
            return;
          } else {
            this.props.handleThankYou();
            this.callApiToBackEnd(callBackParams);
          }
        } else {
          this.props.handleThankYou();
          this.callApiToBackEnd(callBackParams);
        }
      } else {
        this.callApiToBackEnd(callBackParams);
      }
    };

    this.renderHelmet = () => _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("link", {
      rel: "canonical",
      href: "https://traveltriangle.com/requested_trips/new"
    }), _react.default.createElement("meta", {
      httpEquiv: "Content-Type",
      content: "text/html; charset=utf-8"
    }), _react.default.createElement("meta", {
      property: "fb:app_id",
      content: "168534953203541"
    }), _react.default.createElement("meta", {
      name: "category",
      content: "Destination:Unknown"
    }), _react.default.createElement("meta", {
      name: "destination_id",
      content: ""
    }), _react.default.createElement("meta", {
      name: "destination_type",
      content: ""
    }), _react.default.createElement("title", null, "Travel Triangle"), _react.default.createElement("link", {
      href: "//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico",
      rel: "shortcut icon",
      type: "image/x-icon"
    }), _react.default.createElement("link", {
      href: "//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico",
      rel: "icon",
      type: "image/x-icon"
    }), _react.default.createElement("meta", {
      name: "Author",
      content: "TravelTriangle.com"
    }), _react.default.createElement("meta", {
      name: "Copyright",
      content: "TravelTriangle.com"
    }), _react.default.createElement("meta", {
      charSet: "utf-8"
    }), _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }), _react.default.createElement("meta", {
      property: "al:android:url",
      content: "tt://traveltriangle.com/requested_trips/new"
    }), _react.default.createElement("meta", {
      property: "al:android:package",
      content: "com.traveltriangle.traveller"
    }), _react.default.createElement("meta", {
      property: "al:android:app_name",
      content: "TravelTriangle-Holiday Package"
    }), _react.default.createElement("meta", {
      property: "og:title",
      content: "lead creation form"
    }), _react.default.createElement("meta", {
      property: "og:type",
      content: "website"
    }), _react.default.createElement("meta", {
      property: "al:android:url",
      content: `tt://traveltriangle.com/requested_trips/new`
    }), _react.default.createElement("meta", {
      property: "al:ios:url",
      content: `ttiosapp://applinks?al_applink_data=${(0, _urlHelpers.iosDeepLink)('https://traveltriangle.com/requested_trips/new')}`
    }), _react.default.createElement("meta", {
      property: "should_fallback",
      content: "false"
    }), _react.default.createElement("meta", {
      property: "al:ios:app_store_id",
      content: "1152358066"
    }), _react.default.createElement("meta", {
      property: "al:ios:app_name",
      content: "TravelTriangle"
    }), _react.default.createElement("meta", {
      name: "page_fullname",
      content: "F1 Page"
    }), _react.default.createElement("meta", {
      name: "destination_list",
      content: ""
    }), _react.default.createElement("meta", {
      name: "num_destinations",
      content: ""
    }));

    this.asynValidate = (values, enabledForSubmit, nextSlide, isValidRequired, variation, variationStep) => {
      let fields = [];

      if (isValidRequired && this.props.commonProperties.sliderDisplayMode === _Slider.SLIDER_1) {
        fields = ['start_date', 'to_loc', 'email', 'trip_days_temp'];
      } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === _Slider.SLIDER_2) {
        fields = ['hotel_category_answers_attributes'];
      } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === _Slider.SEQUENTIAL_FORM_ONE) {
        fields = ['to_loc'];
      } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === _Slider.SEQUENTIAL_FORM_TWO) {
        fields = ['start_date', 'trip_days_temp'];
      } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === _Slider.SEQUENTIAL_FORM_THREE) {
        fields = ['hotel_category_answers_attributes'];
      } else if (isValidRequired && this.props.commonProperties.sliderDisplayMode === _Slider.SEQUENTIAL_FORM_SIX) {
        fields = ['email', 'phone_no'];
      }

      this.checkErrors(fields, isValidRequired).then(response => {
        console.log("----------", response, variation); // eslint-disable-line consistent-return

        if (response) {
          if (variation) {
            if (variationStep === _Slider.SEQUENTIAL_FORM_END || variationStep === _Slider.DEALS) {
              this.submitForm(values, true, variationStep);

              if (typeof document !== 'undefined') {
                document.dispatchEvent(new CustomEvent('SEQUENTIAL_FORM_FINAL'));
              }
            }
            /*else if (variationStep === DEALS) {
            this.props.handleThankYou();
            setTimeout(() => {
              this.props.goBack();
            }, 6000);
            this.dispatchRxFormAction('', 'start_date');
            this.dispatchRxFormAction(false, 'start_date_noidea');
            this.dispatchRxFormAction('', 'start_date_flexible');
            } */
            else {
                enabledForSubmit ? this.submitForm(values, false, variationStep) : this.props.updateFields({
                  type: _Slider.SET_DISPLAY_MODE,
                  value: variationStep
                });
              } //dispatch event


            if (typeof document !== 'undefined') {
              if (enabledForSubmit) {
                document.dispatchEvent(new CustomEvent('LEAD_CREATED'));
              }

              document.dispatchEvent(new CustomEvent(variationStep));
            }
          } else {
            this.submitForm(values, enabledForSubmit, nextSlide);
          }
        } else {
          // eslint-disable-line no-else-return
          console.log('validation errors in form');
        }
      }).catch(e => {
        console.log('Error in asynValidate...', e);
      });
    };

    this.getHeaderText = () => {
      const {
        commonProperties: {
          sliderDisplayMode
        },
        location: {
          query
        }
      } = this.props;
      let heading = '';
      let subHeading = '';
      let progressBarCount = 0;
      const isDeal = query.deals;

      switch (sliderDisplayMode) {
        case _Slider.SEQUENTIAL_FORM_ONE:
          {
            heading = 'Start Planning';
            progressBarCount = 1;
            break;
          }

        case _Slider.SEQUENTIAL_FORM_TWO:
          {
            heading = 'Select Departure Date';
            progressBarCount = 2;
            break;
          }

        case _Slider.SEQUENTIAL_FORM_THREE:
          {
            heading = 'Select Inclusions';
            progressBarCount = 3;
            break;
          }

        case _Slider.SEQUENTIAL_FORM_FOUR:
          {
            heading = 'Set Budget';
            subHeading = this.props.isFlightSelected ? '(with airfare)' : '(without airfare)';
            progressBarCount = 4;
            break;
          }

        case _Slider.SEQUENTIAL_FORM_FIVE:
          {
            heading = 'Add Travelers';
            progressBarCount = isDeal ? 3 : 5;
            break;
          }

        case _Slider.SEQUENTIAL_FORM_SIX:
          {
            heading = 'Share Contact Details';
            progressBarCount = isDeal ? 4 : 6;
            break;
          }

        case _Slider.SEQUENTIAL_FORM_SEVEN:
        case _Slider.SEQUENTIAL_FORM_END:
          {
            heading = 'Additional Details';
            progressBarCount = isDeal ? 5 : 7;
            break;
          }
      }

      return {
        heading,
        subHeading,
        progressBarCount
      };
    };

    this.goBackHandler = () => {
      //handling of mview for amp-sequential-form
      const {
        location: {
          action,
          query
        }
      } = this.props;
      action === 'POP' && !query.mview ? this.props.pushState('/') : this.props.goBack();
      document.dispatchEvent(new CustomEvent('FORM_BACK_CLICKED'));
      (0, _segmentEvents.trackSegment)({
        event: 'Lead Pop Up Form Closed',
        cta: 'Lead Pop Up Form Closed',
        section: 'Lead Pop Up',
        object: '',
        label: 'Lead Pop Up Closed',
        funnel_uuid: (0, _FormDataFormatter.getCookie)(_segmentEvents.FUNNEL_UUID_KEY)
      });
    };

    this.state = {
      disableSubmitButton: false,
      clientSideRenderingFlag: typeof document !== 'undefined'
    };
    this.isFacebookPixel = false;
  }

  componentWillUnmount() {
    this.props.updateFields({
      type: _Slider.SET_DISPLAY_MODE,
      value: _Slider.SEQUENTIAL_FORM_ONE
    });
    this.setClientSideRenderingFlag();
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      eval((0, _FormDataFormatter.getFacebookTrackingScript)());
    }

    if (typeof document !== 'undefined') {
      setTimeout(this.setClientSideRenderingFlag, 200);
    }

    const fuuid = (0, _FormDataFormatter.getCookie)(_segmentEvents.FUNNEL_UUID_KEY);

    try {
      this.props.loadSliderQuestions(); // fuuid fetched from cookie is null, which sets redis_key to "null" (note the double quotes).
      // Therefore, adding null string check while setting fuuid in the slider/common redux state.

      this.props.updateFields({
        type: _actionConstants.UPDATE_REDIS_KEY,
        value: fuuid && fuuid !== 'null' ? fuuid : ''
      });
      this.props.trackFormOneViewed(_objectSpread({}, this.props.location.query, {
        funnel_uuid: fuuid,
        to_loc: this.props.rtData && this.props.rtData.to_loc ? this.props.rtData.to_loc : this.props.formValues && this.props.formValues.to_loc ? this.props.formValues.to_loc : ''
      }));
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps) {
    if (typeof window !== 'undefined' && this.props.commonProperties.sliderDisplayMode !== prevProps.commonProperties.sliderDisplayMode) {
      window.scroll(0, 0);
    }
  }

  compareAndSort(a, b) {
    if (a.priority < b.priority) {
      return -1;
    }

    if (a.priority > b.priority) {
      return 1;
    }

    return 0;
  }

  checkForExperiment(params, callback) {
    const handlers = window.postLeadHandlersExitintent;
    let match = false;
    handlers.sort(this.compareAndSort).find(function (handler) {
      const callingFn = window[handler.name];

      if (callingFn) {
        const output = callingFn(params, callback);

        if (output) {
          match = true;
          return true;
        }
      }
    });
    return match;
  }

  callApiToBackEnd({
    requestParams,
    values,
    nextSlide,
    rtProps,
    enabledForSubmit,
    requestLoad,
    commonProperties,
    handleSliderResponse,
    createTripOnRedis,
    updateFields,
    openFormState,
    redisKey
  }) {
    const sentTime = new Date().getTime();
    const dataParams = requestParams.data ? requestParams.data : requestParams;
    requestLoad(dataParams).then(function (response) {
      handleSliderResponse(response, dataParams, values, nextSlide);
    }.bind(this), err => {
      requestParams = {
        redis_key: redisKey,
        to_loc: values.to_loc,
        time_stamp: sentTime,
        card_number: commonProperties.sliderDisplayMode.toString(),
        isSubmit: enabledForSubmit,
        card_data: _objectSpread({}, rtProps)
      };
      (0, _segmentEvents.trackSegment)({
        event: 'Redis Downtime',
        section: '',
        object: '',
        redis_data: requestParams,
        error_msg: err.message
      });
      createTripOnRedis(requestParams).then(response => {
        handleSliderResponse(response, requestParams, values, nextSlide, true);
      }).catch(e => {
        //this.setState({ disableSubmitButton: false });
        handleSliderResponse(null, requestParams, values, nextSlide, true);
        console.log('error :: ', e);
        updateFields({
          type: _Slider.UPDATE_TO_DESTINATION,
          value: {
            fromDestination: commonProperties.fromDestination || values.from_loc,
            toDestination: commonProperties.toDestination || values.to_loc,
            currentInteractionTime: commonProperties.currentInteractionTime || requestParams.time_stamp
          }
        });
      });
    });
    updateFields({
      type: _Slider.SET_DISPLAY_MODE,
      value: nextSlide
    });
    openFormState(nextSlide);
  }

  render() {
    const fuuid = (0, _FormDataFormatter.getCookie)(_segmentEvents.FUNNEL_UUID_KEY);
    const variationHeaderInfo = this.getHeaderText();
    return _react.default.createElement("div", {
      className: "row row-"
    }, this.renderHelmet(), _react.default.createElement("form", null, _react.default.createElement("div", {
      className: "form-header-fixed pl0 pr0 row row- sbcw"
    }, _react.default.createElement("div", {
      className: "col-xs-7 pr0"
    }, _react.default.createElement("p", {
      className: "f16 ellipsis fw9 at_sequential_title"
    }, variationHeaderInfo.heading, variationHeaderInfo.subHeading ? _react.default.createElement("small", {
      className: "pfc4 fw4 f12 hide-iphone-five ml4"
    }, variationHeaderInfo.subHeading) : '')), _react.default.createElement("div", {
      className: "col-xs-5 pl0"
    }, _react.default.createElement("span", {
      className: "header-logo-right fright ml8"
    }, _react.default.createElement("button", {
      type: "button",
      className: "cross-common",
      onClick: this.goBackHandler
    }, _react.default.createElement(_Icon.CloseIcon, null))), _react.default.createElement("span", {
      className: "header-logo-right fright ml15"
    }, _react.default.createElement("a", {
      onClick: _FixedMenu.openChatHandler,
      href: ""
    }, _react.default.createElement(_Icon.ChatIcon, {
      className: "absolute-center wfull"
    }))), _react.default.createElement("span", {
      className: "header-logo-right fright"
    }, _react.default.createElement("a", {
      href: "tel:18001235555"
    }, _react.default.createElement(_Icon.CallUs, {
      className: "absolute-center wfull"
    }))))), (() => {
      switch (this.props.commonProperties.sliderDisplayMode) {
        case _Slider.SEQUENTIAL_FORM_ONE:
        case _Slider.SEQUENTIAL_FORM_TWO:
        case _Slider.SEQUENTIAL_FORM_THREE:
        case _Slider.SEQUENTIAL_FORM_FOUR:
        case _Slider.SEQUENTIAL_FORM_FIVE:
        case _Slider.SEQUENTIAL_FORM_SIX:
        case _Slider.SEQUENTIAL_FORM_SEVEN:
          {
            return _react.default.createElement(_index.default, {
              enableReinitialize: true,
              updateFields: this.props.updateFields,
              formValues: this.props.formValues,
              goBack: this.props.goBack,
              onSubmit: this.submitForm,
              trackFormOneInteracted: this.props.trackFormOneInteracted,
              funnel_uuid: fuuid,
              disableSubmitButton: this.state.disableSubmitButton,
              dispatchRxFormAction: this.dispatchRxFormAction,
              asynValidate: this.asynValidate,
              rtData: this.props.rtData,
              days: this.props.days,
              handleBlur: this.props.handleBlur,
              handleEmailChange: this.props.handleEmailChange,
              email: this.props.email,
              syncErrors: this.props.initialValues.syncErrors,
              sliderDisplayMode: this.props.commonProperties.sliderDisplayMode,
              location: this.props.location,
              sliderQuestions: this.props.sliderQuestions,
              commonProperties: this.props.commonProperties,
              isFlightSelected: this.props.isFlightSelected,
              getBudgetOptions: this.props.getBudgetOptions,
              changeFormField: this.props.changeFormField,
              openFormState: this.props.openFormState,
              handleThankYou: this.props.handleThankYou,
              touch: this.props.touch,
              progressBarCount: variationHeaderInfo.progressBarCount
            });
          }

        case _Slider.SLIDER_2:
          return _react.default.createElement("div", {
            className: "clearfix"
          }, _react.default.createElement(_LeadFormTwo.default, {
            sliderQuestions: this.props.sliderQuestions,
            updateFields: this.props.updateFields,
            submitSliderTwo: this.props.submitSliderTwo,
            commonProperties: this.props.commonProperties,
            formValues: this.props.formValues,
            dispatchRxFormAction: this.dispatchRxFormAction,
            getBudgetOptions: this.props.getBudgetOptions,
            getSelectedBudget: this.props.getSelectedBudget,
            isFlightSelected: this.props.isFlightSelected,
            trackTripUpdatedStep: this.props.trackTripUpdatedStep,
            trackFormStepSubmitted: this.props.trackFormStepSubmitted,
            trackFormViewedCall: this.props.trackFormViewedCall,
            sliderTitle: getTitle(this.props.sliderQuestions, this.props.commonProperties.sliderDisplayMode),
            asynValidate: this.asynValidate,
            openFormState: this.props.openFormState,
            formType: this.props.formType,
            disableSubmitButton: this.state.disableSubmitButton,
            location: this.props.location
          }));

        case _Slider.SLIDER_3:
          return _react.default.createElement("div", {
            className: "clearfix"
          }, _react.default.createElement(_LeadFormThree.default, {
            sliderQuestions: this.props.sliderQuestions,
            updateFields: this.props.updateFields,
            commonProperties: this.props.commonProperties,
            setPropertiesOnSliderForm: this.setPropertiesOnSliderForm,
            formValues: this.props.formValues,
            trackTripUpdatedStep: this.props.trackTripUpdatedStep,
            trackFormStepSubmitted: this.props.trackFormStepSubmitted,
            trackFormViewedCall: this.props.trackFormViewedCall,
            sliderTitle: getTitle(this.props.sliderQuestions, this.props.commonProperties.sliderDisplayMode),
            handleThankYou: this.props.handleThankYou,
            openFormState: this.props.openFormState,
            formType: this.props.formType,
            disableSubmitButton: this.state.disableSubmitButton
          }));

        default:
          return _react.default.createElement(_index.default, {
            enableReinitialize: true,
            updateFields: this.props.updateFields,
            formValues: this.props.formValues,
            goBack: this.props.goBack,
            onSubmit: this.submitForm,
            trackFormOneInteracted: this.props.trackFormOneInteracted,
            funnel_uuid: fuuid,
            disableSubmitButton: this.state.disableSubmitButton,
            dispatchRxFormAction: this.dispatchRxFormAction,
            asynValidate: this.asynValidate,
            rtData: this.props.rtData,
            days: this.props.days,
            handleBlur: this.props.handleBlur,
            handleEmailChange: this.props.handleEmailChange,
            email: this.props.email,
            syncErrors: this.props.initialValues.syncErrors,
            sliderDisplayMode: this.props.commonProperties.sliderDisplayMode,
            location: this.props.location,
            sliderQuestions: this.props.sliderQuestions,
            commonProperties: this.props.commonProperties,
            isFlightSelected: this.props.isFlightSelected,
            getBudgetOptions: this.props.getBudgetOptions,
            changeFormField: this.props.changeFormField,
            openFormState: this.props.openFormState,
            handleThankYou: this.props.handleThankYou,
            touch: this.props.touch,
            progressBarCount: variationHeaderInfo.progressBarCount
          });
      }
    })()));
  }

};
exports.FormOneLeadAsync = FormOneLeadAsync;
const RxFormSlider = (0, _reduxForm.reduxForm)({
  form: 'LeadForm',
  validate,
  destroyOnUnmount: false,
  onSubmitFail,
  enableReinitialize: true
})(FormOneLeadAsync);
FormOneLeadAsync.propTypes = {
  variation: _propTypes.default.bool,
  isRequestLoaded: _propTypes.default.bool,
  redirectUrl: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  requestLoad: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  goBack: _propTypes.default.func.isRequired,
  signedInUserEmail: _propTypes.default.string,
  location: _propTypes.default.object.isRequired,
  trackFormOneViewed: _propTypes.default.func.isRequired,
  rtData: _propTypes.default.object,
  updateFromOneProps: _propTypes.default.func.isRequired,
  updateFields: _propTypes.default.func.isRequired,
  changeFormField: _propTypes.default.func,
  getFunnelUuid: _propTypes.default.string.isRequired,
  trackTripAdded: _propTypes.default.func.isRequired,
  trackFormOneInteracted: _propTypes.default.func.isRequired,
  commonProperties: _propTypes.default.object.isRequired,
  loadUserDetails: _propTypes.default.func.isRequired,
  trackTripUpdated: _propTypes.default.func.isRequired,
  aliasPayload: _propTypes.default.func.isRequired,
  identifyPayload: _propTypes.default.func.isRequired,
  formType: _propTypes.default.string,
  openFormState: _propTypes.default.func,
  loadSliderQuestions: _propTypes.default.func.isRequired,
  handleSubmit: _propTypes.default.func.isRequired,
  form: _propTypes.default.string,
  dispatch: _propTypes.default.func.isRequired,
  formValues: _propTypes.default.object,
  touch: _propTypes.default.func.isRequired,
  valid: _propTypes.default.bool.isRequired,
  invalid: _propTypes.default.bool.isRequired,
  submitSliderTwo: _propTypes.default.func.isRequired,
  sliderQuestions: _propTypes.default.object,
  trackFormStepSubmitted: _propTypes.default.func.isRequired,
  getBudgetOptions: _propTypes.default.object,
  getSelectedBudget: _propTypes.default.string,
  isFlightSelected: _propTypes.default.bool,
  trackTripUpdatedStep: _propTypes.default.func.isRequired,
  initialValues: _propTypes.default.object.isRequired,
  handleThankYou: _propTypes.default.func.isRequired,
  trackFormViewedCall: _propTypes.default.func.isRequired,
  days: _propTypes.default.number,
  handleBlur: _propTypes.default.func.isRequired,
  handleEmailChange: _propTypes.default.func.isRequired,
  email: _propTypes.default.string,
  createTripOnRedis: _propTypes.default.func.isRequired,
  packageData: _propTypes.default.object
};
FormOneLeadAsync.defaultProps = {
  isRequestLoaded: false,
  redirectUrl: '',
  signedInUserEmail: null,
  rtData: {},
  formType: 'Slider Close',
  openFormState: value => value,
  form: 'LeadForm',
  formValues: {},
  sliderQuestions: {},
  days: '',
  email: ''
};
var _default = RxFormSlider;
exports.default = _default;

/***/ }),

/***/ "./app/theme/SequentialForm.scss":
/*!***************************************!*\
  !*** ./app/theme/SequentialForm.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sequential-form-container": "_3qvx2",
	"local-experience-container": "_1e2Ve",
	"fw9": "_14Kw7",
	"iblock": "_NSqC0",
	"radio-common": "_1X5dr",
	"budget-selector-container": "_2ztYT",
	"budget-icon": "_30IbQ",
	"icon-48": "_tMH5M",
	"daysCount": "_27Vjk",
	"plus-icon": "_1_G9_",
	"minus-icon": "_KUcwf",
	"input-error": "_2bvWE",
	"active-shadow": "_2VAXm",
	"move-up-15": "_28jbU",
	"progress-bar-container": "_3raao",
	"progress-indicator": "_3Uyr3",
	"active": "_2SFXb",
	"header-logo-right": "_2xnum",
	"month-option": "_3DdqV",
	"month-pills": "_2qKB9",
	"checkbox-common": "_X5896",
	"traveller-icon-container": "_1wLD1",
	"contact-icon-container": "_32y3A",
	"location-icon-container": "_2RrWn",
	"arrow-icon-container": "_3O6r6",
	"left": "_3YINW",
	"will-book-comp": "_1yDKo",
	"col-xs-6": "_1SqNE",
	"p8": "_3slhO",
	"will-book-con-options": "_Fg4uc",
	"at_edit_willbook": "_3r-No",
	"at_tourtype_radio": "_2Fk6t",
	"tour-type": "_1Lbpq",
	"row": "_2MsqL",
	"row-8": "_1F-Cy",
	"button-box": "_3wNNw",
	"round-icon": "_78xyu",
	"tick-icon-container": "_pVOR5",
	"suggested-item": "_1PpvO",
	"react-datepicker__day--selected": "_3GzQl",
	"react-datepicker__current-month": "_3SP9M",
	"react-datepicker__day": "_2i1tO",
	"number-of-days-container": "_1RInL",
	"pl8": "_1GIgF",
	"form-field-incl-label": "_WDaAo",
	"destination-suggestions": "_1YgIt",
	"form-body": "_-Ghle",
	"from-location-container": "_3duff",
	"filler-div": "_28-S_",
	"or-divider": "_2KYDq",
	"dividing-line": "_2_i7Z",
	"form-header-secondary": "_rg895",
	"form-footer": "_2g4-z",
	"back-button-text": "_1TVAJ",
	"disabled": "_Pdnd3",
	"btn-filled-pri-large": "_3KLiU",
	"checkbox-toggle-common": "_M3gjT",
	"checkmark-container": "_2Nq0v",
	"checkmark-icon": "_kKpEP",
	"field-bold": "_1jDKA",
	"range-slidecontainer": "_3SNli",
	"range-slider": "_3UbaG",
	"form-header-fixed": "_3Fyak",
	"cross-common": "_LRL1Z",
	"month-selection-modal": "_2jgHo",
	"month-of-travel-heading": "_Zdpa0",
	"travel-month-overlay": "_lo748",
	"hide-iphone-five": "_1YwCL"
};

/***/ }),

/***/ "./app/theme/customMonthpicker.scss":
/*!******************************************!*\
  !*** ./app/theme/customMonthpicker.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"icon-hide-box": "_xRgc3",
	"form-date-check": "_10ZAG",
	"custom-variation-datepicker": "_3UD0K",
	"react-datepicker": "_2z1sl",
	"month-picker": "_1IIxo",
	"custom-month-picker": "_1iy2Q",
	"rmp-container": "_3GC3O",
	"show": "_3Whtb",
	"rmp-overlay": "_2J0pw",
	"rmp-popup": "_3S3p8",
	"rmp-pad": "_1RPhH",
	"rmp-btn": "_3Eug5",
	"next": "_3W6pV",
	"prev": "_1ZndU",
	"week-box-width": "_3prkk",
	"back-button": "_3B4yk"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0RhdGVXZWVrUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9EZXBhcnR1cmVEYXRlRm9ybU9uZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1EYXRlTnVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvQWRkaXRpb25hbFByZWZyZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9CYWNrQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvQnVkZ2V0U2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvQ2FiRGVwZW5kZW50UXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9DYWJmb3JTaWdodHNlZWluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0ZpbHRlckNsZWFyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvRmxpZ2h0Qm9va1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9Ib3RlbFJhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0xlYWRGb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9MZWFkRm9ybVN1Ym1pdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0xlYWRGb3JtVGhyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9MZWFkRm9ybVR3by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0xvY2FsRXhwZXJpZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL05leHRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9TZXF1ZW50aWFsRm9ybS9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9TZXF1ZW50aWFsRm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL1NlcXVlbnRpYWxGb3JtL2xlYWRGb3JtL0FkZGl0aW9uYWxEZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvU2VxdWVudGlhbEZvcm0vbGVhZEZvcm0vQnVkZ2V0U2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvU2VxdWVudGlhbEZvcm0vbGVhZEZvcm0vQ2FiZm9yU2lnaHRzZWVpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9TZXF1ZW50aWFsRm9ybS9sZWFkRm9ybS9Db250YWN0RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL1NlcXVlbnRpYWxGb3JtL2xlYWRGb3JtL0RlcGFydHVyZURhdGVGb3JtT25lLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvU2VxdWVudGlhbEZvcm0vbGVhZEZvcm0vRmxpZ2h0Qm9va1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL1NlcXVlbnRpYWxGb3JtL2xlYWRGb3JtL0hvdGVsUmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvU2VxdWVudGlhbEZvcm0vbGVhZEZvcm0vSW5jbHVzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL1NlcXVlbnRpYWxGb3JtL2xlYWRGb3JtL1N0YXJ0UGxhbm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9TZXF1ZW50aWFsRm9ybS9sZWFkRm9ybS9UcmF2ZWxNb250aHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9TZXF1ZW50aWFsRm9ybS9sZWFkRm9ybS9UcmF2ZWxlckNvdW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvU2VxdWVudGlhbEZvcm0vbGVhZEZvcm0vVHJhdmVsZXJJbnB1dEZpZWxkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvU2VxdWVudGlhbEZvcm0vbGVhZEZvcm0vV2lsbEJvb2suanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9UcmF2ZWxlckNvdW50LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvVHlwZVRvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9XaWxsQm9vay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL3dpbGxCb29rLmNtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gcm9tTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gcm9tTG9jYXRpb25TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gcm9tTG9jYXRpb25TZWFyY2guc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvcm0vTW9udGhCb3guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9sb2NhdGlvblNlYXJjaC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0Zvcm1PbmVMZWFkL0Zvcm1PbmVMZWFkQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RoZW1lL1NlcXVlbnRpYWxGb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RoZW1lL2N1c3RvbU1vbnRocGlja2VyLnNjc3MiXSwibmFtZXMiOlsiRGF0ZVdlZWtQYW5lbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJ1cGRhdGVXZWVrIiwiYmluZCIsImUiLCJ3ZWVrIiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcHMiLCJzZWxlY3RXZWVrIiwicmVuZGVyIiwiY3VycmVudFllYXIiLCJjdXJyZW50TW9udGgiLCJjbGlja092ZXJsYXkiLCJzaG93V2VlayIsIm51bU9mV2Vla3MiLCJtYXAiLCJjbHNzTmFtZSIsInN0YXJ0V2VlayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwaWNrZXJMYW5nIiwibW9udGhzIiwiZnJvbSIsInRvIiwiY3VycmVudFdlZWsiLCJkYXRlIiwiZGF0ZV9uZXciLCJ0aGlzRGF5IiwiZ2V0RGF0ZSIsIm5ld0RhdGUiLCJzZXREYXRlIiwiZGlnaXQiLCJnZXREYXkiLCJRIiwiUiIsIk1hdGgiLCJjZWlsIiwid2Vla0NvdW50IiwieWVhciIsIm1vbnRoX251bWJlciIsInJldFZhbHVlIiwiY3VycmVudERhdGUiLCJnZXRNb250aCIsImRpc2FibGVDdXJyZW50TW9udGgiLCJnZXRTdGFydGluZ1dlZWsiLCJtb250aCIsIkRlcGFydHVyZURhdGVGb3JtT25lIiwic3RhdGUiLCJkYXRlVHlwZSIsInNlbGVjdGVkRGF0ZSIsIm12YWx1ZSIsImZpeGVkRGF0ZSIsImZsZXhpYmxlRGF0ZSIsImFueXRpbWVEYXRlIiwibnVtT2ZEYXlzIiwiZGF0ZUNoZWNrZWQiLCJpc0RhdGVQaWNrZXJPcGVuIiwiaXNCb29rZWRUaWNrZXQiLCJmb3JtVmFsdWVzIiwiYm9va2VkX3RpY2tldHMiLCJzaG93TW9udGhQaWNrZXIiLCJoYW5kbGVGaXhlZENoYW5nZSIsImhhbmRsZUZpeGVkQ2hhbmdlV2l0aG91dFRvZ2dsZSIsImhhbmRsZUFueXRpbWVDaGFuZ2UiLCJzZXRSZXF1aXJlZEZpZWxkcyIsImhhbmRsZUNsaWNrTW9udGhCb3giLCJoYW5kbGVBTW9udGhDaGFuZ2UiLCJoYW5kbGVBTW9udGhEaXNzbWlzIiwic2Nyb2xsUGFnZSIsImhpZGVEYXRlUGlja2VyIiwiY2FuY2VsRGF0ZVNlbGVjdGlvbiIsImhhbmRsZUJvb2tlZFRpY2tldHMiLCJjb21wb25lbnREaWRNb3VudCIsInZhbHVlcyIsInN0YXJ0X2RhdGUiLCJzdGFydF9kYXRlX2ZsZXhpYmxlIiwic3RhcnRfZGF0ZV9ub2lkZWEiLCJzZXRTdGF0ZSIsIm1hdGNoZXMiLCJtYXRjaCIsImRpc3BhdGNoUnhGb3JtQWN0aW9uIiwiZGF0ZU9iaiIsImZvcm1hdHRlZERhdGUiLCJzdGFydERhdGUiLCJ0b2dnbGVEYXRlUGlja2VyQ2FsZW5kYXIiLCJlbGVtZW50IiwiZWxlbWVudFRvQmVTY3JvbGxlZCIsInRvTG9jU2Nyb2xsIiwib2Zmc2V0VG9wIiwidG9Mb2NQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ0b0xvY0FkZCIsIndpbmRvdyIsInNjcm9sbFRvIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJzZXRUaW1lb3V0IiwiZGF0ZXBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImlubmVyV2lkdGgiLCJldmVudCIsImNoZWNrZWQiLCJ0cmFja0Zvcm1PbmVJbnRlcmFjdGVkIiwiaGFuZGxlRmxleGlibGVDaGFuZ2UiLCJ0b1N0cmluZyIsInN1YnN0ciIsInBhcnNlSW50IiwiaGlkZVdlZWtQYW5lbCIsInJlZnMiLCJwaWNrQU1vbnRoIiwic2hvdyIsImxlZnRQb3NpdGlvbiIsImdldEVsZW1lbnRCeUlkIiwibGVmdCIsIm1vbnRoTnVtIiwiZGlzbWlzcyIsInZhbHVlIiwiaW5wdXQiLCJtaW4iLCJtYXgiLCJGb3JtRGF0ZU51bSIsIm1ldGEiLCJkaXNwYXRjaCIsImZvcm0iLCJydERhdGEiLCJkYXlzIiwidG91Y2hlZCIsImVycm9yIiwid2FybmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJudW1iZXJPZkRheXMiLCJ0cmlwX2RheXMiLCJvbkNoYW5nZSIsInVwZGF0ZURheXMiLCJhY3Rpb24iLCJ0ZW1wVmFsdWUiLCJuZXdWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsInZhcmlhdGlvbiIsInNob3dEYXlzIiwicGFyc2UiLCJQYXJzZXIiLCJBZGRpdGlvbmFsUHJlZnJlbmNlcyIsInF1ZXN0aW9uIiwiaGFuZGxlQ2hhbmdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkZW50aWZpZXIiLCJCYWNrQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJCdWRnZXRPcHRpb25zIiwiYnVkZ2V0T3B0aW9ucyIsImdldFNlbGVjdGVkQnVkZ2V0IiwiaXNGbGlnaHRTZWxlY3RlZCIsImJ1ZGdldEtleXMiLCJPYmplY3QiLCJrZXlzIiwiYnVkZ2V0RmllbGRzIiwic2xpY2UiLCJrZXkiLCJpbmRleCIsIkJ1ZGdldFRleHQiLCJCdWRnZXRXaXRoQWlyZmFpciIsImxlbmd0aCIsImdldFNlbGNlY3RlZFF1ZXN0aW9uIiwiaXNEb21lc3RpYyIsImluY2x1ZGVTdHIiLCJ0YWdzU3RyIiwiZmluYWxPcHRpb24iLCJvcHRpb25zIiwib3B0aW9uIiwiaWQiLCJ0YWdzIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJzcGxpdCIsIkNhYkRlcGVuZGVudFF1ZXN0aW9uIiwiY29tbW9uUHJvcGVydGllcyIsIm5hbWVGb3JDbGVhciIsImlzQ2hlY2tlZCIsImZpbmRJbmRleCIsIm9iaiIsInVzZXJfaW5wdXQiLCJyZXZpc2VkUXVlc3Rpb24iLCJwcm9wZXJ0aWVzIiwidXNlSW5wdXRGb3JPcHRpb25zIiwib3B0aW9uX2lkIiwiY3VzdG9taXphdGlvbl9pZCIsImN1c3RvbWl6YXRpb25JZCIsIm5hbWUiLCJDYWJmb3JTaWdodHNlZWluZyIsImNhYlF1ZXN0aW9uSGFuZGxlciIsIm9wdGlvbklkIiwiRmlsdGVyQ2xlYXJCdXR0b24iLCJ0eXBlIiwidGV4dCIsIkZpbHRlckNsZWFyIiwiRmxpZ2h0Qm9va2luZyIsImNoZWNrSW5pdGlhbFZhbHVlcyIsInNlbGVjdGVkIiwiZmxpZ2h0QW5zd2VyQXR0cmlidXRlcyIsImZsaWdodF9hbnN3ZXJfYXR0cmlidXRlcyIsInJlbmRlclRvTG9jYXRpb24iLCJsYWJlbCIsIm9uVG9Mb2NGb2N1cyIsImhhbmRsZUJsdXIiLCJpbnB1dFByb3BzIiwicGxhY2Vob2xkZXIiLCJjaGVjayIsInJlbmRlckVtYWlsIiwiY2hhbmdlSGFuZGxlciIsImVtYWlsVmFsIiwicmVuZGVyUGhvbmUiLCJkZWZhdWx0VmFsdWUiLCJpc0ZvY3VzIiwiSXNkQ29kZXMiLCJnZW5lcmljQ2hlY2tib3giLCJjbGFzc25hbWUiLCJkZWZhdWx0RmllbGRzIiwiRm9ybU9uZVZhcmlhdGlvbiIsImNhbGxOZXh0Rm9ybSIsImxvY2F0aW9uIiwicXVlcnkiLCJkZWFscyIsImFzeW5WYWxpZGF0ZSIsIlNMSURFUl8xIiwiREVBTFMiLCJTTElERVJfMiIsImludGVyYWN0aW9uQ291bnQiLCJlbWFpbCIsImhhbmRsRm9ybUludGVyYWN0aW9uIiwidG9Mb2MiLCJ5IiwiZnVubmVsX3N0ZXAiLCJzZWN0aW9uIiwiZnVubmVsX3V1aWQiLCJ0b19sb2MiLCJpc0RlYWwiLCJGcm9tTG9jYXRpb24iLCJoYW5kbGVFbWFpbENoYW5nZSIsInBob25lTnVtYmVyIiwiaXNkX2NvZGUiLCJkaXNhYmxlU3VibWl0QnV0dG9uIiwiaGFuZGxlVGhhbmtZb3UiLCJob3RlbFByZWZDdXN0b21pemF0aW9ucyIsInN0YXIyIiwic3RhcjMiLCJzdGFyNCIsInN0YXI1Iiwibm9Ib3RlbCIsIm5vSG90ZWxDdXN0b21pemF0aW9uSWQiLCJIb3RlbFJhdGluZyIsImhvdGVscyIsImdldEhvdGVsUHJlZnMiLCJpc0hvdGVsU2VsZWN0ZWQiLCJob3RlbFN0YXIiLCJob3RlbEF0dHJpYnV0ZXMiLCJob3RlbF9jYXRlZ29yeV9hbnN3ZXJzX2F0dHJpYnV0ZXMiLCJhbnN3ZXJBdHRyaWJ1dGVzIiwiaG90ZWxfbmVlZGVkX2Fuc3dlcl9hdHRyaWJ1dGVzIiwiZm9yRWFjaCIsImhvdGVsUHJlZnMiLCJMZWFkRm9ybVN1Ym1pdEJ1dHRvbiIsImdldFF1ZXN0aW9ucyIsInNsaWRlclF1ZXN0aW9ucyIsInRvRGVzdGluYXRpb24iLCJkZWZhdWx0UXMiLCJkZWZhdWx0TGFzdENhcmRRdWVzdGlvbnMiLCJxdWVzdGlvbnMiLCJkZXN0aW5hdGlvbkNhcmRRdWVzdGlvbnMiLCJ0b0xvd2VyQ2FzZSIsInNvcnQiLCJxMSIsInEyIiwicXVlc3Rpb25TZXF1ZW5jZSIsImNoZWNrQ2FiRGVwZW5kZW50UXVlc3Rpb24iLCJvdGhlcl9hbnN3ZXJzX2F0dHJpYnV0ZXMiLCJMZWFkRm9ybVRocmVlRWxlbWVudCIsImlzQ2FiU2VsZWN0ZWQiLCJwYXJhbSIsImN0YSIsInJlZGlzS2V5IiwiZm9ybVR5cGUiLCJ0cmFja0Zvcm1WaWV3ZWRDYWxsIiwidmFsIiwic2xpZGVyVGl0bGUiLCJ0ZW1wbGF0ZVR5cGUiLCJjdXN0b21pemF0aW9uVGFncyIsIlR5cGVUb3VyIiwiTG9jYWxFeHBlcmllbmNlIiwidXBkYXRlRmllbGRzIiwiU0VUX0RJU1BMQVlfTU9ERSIsIm9wZW5Gb3JtU3RhdGUiLCJMZWFkRm9ybVR3byIsInNsaWRlckRpc3BsYXlNb2RlIiwiYnVkZ2V0X2luZm8iLCJnZXRCdWRnZXRPcHRpb25zIiwiVHJhdmVsZXJDb3VudCIsIldpbGxCb29rIiwiU0xJREVSXzMiLCJwdXNoIiwic3BsaWNlIiwiaiIsIk5leHRCdXR0b24iLCJGb290ZXIiLCJnb0JhY2tEaXNhYmxlZCIsImdvQmFjayIsImdvTmV4dERpc2FibGVkIiwiZ29Gb3J3YXJkIiwiaXNMYXN0U2xpZGUiLCJwcm9ncmVzc0JhciIsImZvcm1TdGFnZSIsIkFycmF5IiwiaSIsIlNlcXVlbnRpYWxGb3JtIiwiRlVOTkVMX1VVSURfS0VZIiwiY2F0ZWdvcnkiLCJkZXN0aW5hdGlvbl9saXN0IiwiZm9ybV92YXJpYW50IiwidHJpcF9pZCIsImdldENvb2tpZSIsImZvcm1QYXJ0T25lIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiY2FsbE5leHRTbGlkZSIsInN1Ym1pdFZhcmlhdGlvbiIsInZhcmlhdGlvblN0ZXAiLCJpc0JhY2tCdXR0b24iLCJwcm9ncmVzc0JhckNvdW50IiwiU0VRVUVOVElBTF9GT1JNX09ORSIsInJlcXVpcmVkV2l0aG1lc3NhZ2UiLCJjaGFuZ2VGb3JtRmllbGQiLCJTRVFVRU5USUFMX0ZPUk1fVFdPIiwiU0VRVUVOVElBTF9GT1JNX1RIUkVFIiwidG91Y2giLCJTRVFVRU5USUFMX0ZPUk1fRk9VUiIsIlNFUVVFTlRJQUxfRk9STV9GSVZFIiwiU0VRVUVOVElBTF9GT1JNX1NJWCIsIlNFUVVFTlRJQUxfRk9STV9TRVZFTiIsIlNFUVVFTlRJQUxfRk9STV9FTkQiLCJoYXNPdGhlcnMiLCJqc29uVmFsdWVUeXBlIiwicmFpbHNGb3JtTmFtZSIsInRlbXBsYXRlSWQiLCJ2YWx1ZVR5cGUiLCJBZGRpdGlvbmFsRGV0YWlscyIsImdldEJ1ZGdldEljb24iLCJpc0RlZmF1bHQiLCJidWRnZXQiLCJkZWx1eGUiLCJzdGFuZGFyZCIsIkRlZmF1bHRCdWRnZXRPcHRpb25zIiwiZGlzcGxheVZhbHVlcyIsInNlbGVjdGVkSW5kZXgiLCJzZWxlY3RDYWIiLCJvcHRpb25JbmRleCIsIkNvbnRhY3REZXRhaWxzIiwicGhvbmVfbm8iLCJwaG9uZU51bWJlclJlcXVpcmVkIiwidHJhdmVsTW9udGhNb2RhbFN0eWxlcyIsImNvbnRlbnQiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIiwiYm94U2hhZG93IiwiYm9yZGVyIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwic2hvd1RyYXZlbE1vbnRocyIsImlzRGF0ZU5vdERlY2lkZWQiLCJzZWxlY3RlZE1vbnRoIiwiaXNEYXRlRGVjaWRlZCIsInNlbGVjdGVkQ291bnQiLCJoYW5kbGVNb250aENoYW5nZSIsIm1vb25MYW5kaW5nIiwiZmluYWxEYXRlIiwiaGFuZGxlTm90RGVjaWRlZCIsInN0ZXAiLCJoYW5kbGVDbG9zZU1vbnRoTW9kYWwiLCJzaG93TW9udGhQb3B1cCIsImZsYWciLCJpbm5lckhlaWdodCIsImZpeGVkRGF0ZUNoZWNrIiwic2hvd01vbnRoT2ZUcmF2ZWwiLCJjYWxsIiwiZmxpZ2h0U2VsZWN0ZWQiLCJtaXNjIiwidXJsIiwiSW5jbHVzaW9ucyIsInNlbGVjdEhvdGVsIiwiaGFuZGxlSG90ZWxDaGFuZ2UiLCJob3RlbCIsImNsaWNrIiwic3VnZ2VzdGVkRGVzdGluYXRpb25zIiwiU3RhcnRQbGFubmluZyIsInNlbGVjdGVkUGlsbEluZGV4IiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJkZXN0aW5hdGlvbiIsInNob3dEZXN0aW5hdGlvbnMiLCJzaG93SWNvbiIsInJlbmRlclN1Z2dlc3RlZFBpbGxzIiwiaXNBbmRyb2lkIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsIm9uRnJvbUxvY0ZvY3VzIiwiZWxlbSIsImdldE1vbnRocyIsIm1vbnRoTmFtZXMiLCJtIiwiVHJhdmVsTW9udGhzIiwic2V0U2VsZWN0ZWRNb250aCIsImdldE1vbnRoc0xpc3QiLCJzZWxlY3RNb250aCIsIkdUcmF2Q291bnREaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJtYXhIZWlnaHQiLCJnZXRDaGlsZENvdW50IiwiY2hpbGRfYWdlX2Fuc3dlcnNfYXR0cmlidXRlcyIsInVwZGF0ZUNoaWxkQ291bnRJblJlZHV4IiwiY2hpbGQiLCJpbmZhbnQiLCJ0b3RhbENvdW50IiwiaGFuZGxlRGVmYXVsdFZhbHVlcyIsImFkdWx0cyIsImFkdWx0Iiwic2xpZGVyIiwiaGFuZGxlVHJhdmVsZXJDb3VudCIsImZpZWxkTmFtZSIsImNoaWxkQWdlQXR0cmlidXRlcyIsIlRyYXZlbGVySW5wdXRGaWVsZCIsImlucHV0VmFsdWUiLCJ3aWxsQm9va1ByZWZDdXN0b21pemF0aW9ucyIsIndpbGxCb29rQXR0cmlidXRlcyIsImFkdWx0T3B0aW9ucyIsImNoaWxkT3B0aW9ucyIsIlRyYXZlbGVyRHJvcGRvd24iLCJmaWVsZCIsInBlcnNpc3RlbnRTdWJtaXRFcnJvcnMiLCJwYXlsb2FkIiwic3R5bGVzIiwid2lsbEJvb2siLCJfX0NMSUVOVF9fIiwiY29uc29sZSIsImxvZyIsIm9uRm9jdXMiLCJldm50IiwiRnJvbUxvY2F0aW9uU2VhcmNoIiwic3VnZ2VzdGlvbnMiLCJsb2FkU3VnZ2VzdGlvbnMiLCJsaXN0U2hvd24iLCJ0ZXJtIiwiaW5pdGlhbFZhbHVlIiwiX2hhbmRsZUNsaWNrIiwiYmx1ckhhbmRsZXIiLCJpbnB1dEJsdXIiLCJoYW5kbGVGb2N1cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIml0ZW1TZWxlY3RlZCIsImN1cnJlbnRUYXJnZXQiLCJjb250YWlucyIsImFjdGl2ZUVsZW1lbnQiLCJpdGVtIiwicmVuZGVyTGlzdCIsImxpc3RJdGVtIiwibGlzdCIsImRlc3RpbmF0aW9ucyIsImNpdGllcyIsImN1c3RvbVN0eWxlcyIsInJvb3QiLCJwb3NpdGlvbiIsImF1dG9jb21wbGV0ZUNvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImF1dG9jb21wbGV0ZUl0ZW0iLCJjb2xvciIsImF1dG9jb21wbGV0ZUl0ZW1BY3RpdmUiLCJjbGFzc05hbWVzIiwiTG9jYXRpb25TZWFyY2giLCJpc0Vycm9yIiwiaXNNYXBMb2FkZWQiLCIkUyIsInJlcXVpcmUiLCJnb29nbGUiLCJnZW9sb2NhdGlvbiIsIm1hcHMiLCJHZW9jb2RlciIsImdldEN1cnJlbnRQb3NpdGlvbiIsImdlb2NvZGVyIiwibGF0bGFuZyIsImxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwiZ2VvY29kZSIsInJlc3VsdHMiLCJzdGF0dXMiLCJhZGRyZXNzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJNb250aEJveCIsImNvbnRleHQiLCJvbkNsaWNrIiwiZGF0ZVZhbHVlIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJ0cmlwRGF5c0Vycm9yIiwidHJpcF9kYXlzX3RlbXAiLCJzdGF0dXMxIiwic3R5bGUiLCJnZXRSZWZlcmVyIiwicGFja2FnZUlkIiwicmVmZXJyZXJEZWFsIiwidGFnIiwicXVlcnlyZWZlcnJlciIsInJlZmVycmVyIiwib25TdWJtaXRGYWlsIiwiY3JlYXRlTmV3VW5pcXVlSWQiLCJteVVzZXJpZCIsIm15UmFuZG9tdGV4dCIsImQiLCJnZXRUaW1lIiwicG9zc2libGUiLCJjaGFyQXQiLCJmbG9vciIsInJhbmRvbSIsImdldFRpdGxlIiwic2xpZGVyTnVtYmVyIiwiZGF0YSIsImdlbmVyaWNTbGlkZXJRdWVzdGlvbnMiLCJUSVRMRSIsInN0YXJUb0lkIiwiRm9ybU9uZUxlYWRBc3luYyIsInNldENsaWVudFNpZGVSZW5kZXJpbmdGbGFnIiwiY2xpZW50U2lkZVJlbmRlcmluZ0ZsYWciLCJjaGVja0Vycm9ycyIsImZpZWxkcyIsImlzVmFsaWRSZXF1aXJlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidmFsaWQiLCJpbnZhbGlkIiwiaGFuZGxlU2xpZGVyUmVzcG9uc2UiLCJyZXNwb25zZSIsIm5leHRTbGlkZSIsInJlZGlzVHJpcCIsImlzU3VibWl0IiwibG9hZFVzZXJEZXRhaWxzIiwicmVkaXJlY3RVcmwiLCJyZXF1ZXN0ZWRfdHJpcCIsInJlZGlyZWN0X3VybCIsImhvc3QiLCJhbGlhc1BheWxvYWQiLCJ1c2VyX2lkIiwiaWRlbnRpZnlQYXlsb2FkIiwiY29uZmlnIiwiYXBpX3Byb3RvY29sIiwiVFJJUF9VUERBVEVEX0lOX1JFRElTIiwidHJhY2tUcmlwVXBkYXRlZCIsInJlZGlzX2tleSIsInVfaWQiLCJVU0VSX0lEX0NPT0tJRV9LRVkiLCJ1X3JvbGUiLCJVU0VSX1JPTEVfQ09PS0lFX0tFWSIsInB1c2hTdGF0ZSIsImhyZWYiLCJpc0ZhY2Vib29rUGl4ZWwiLCJmaXJlQWRXb3Jkc1RhZyIsImZiQWR3b3JkIiwiZXZhbCIsImZvcm1TdWJtaXR0ZWQiLCJ0cmFja1RyaXBBZGRlZCIsImRlc3RfaW5mbyIsIlVQREFURV9UT19ERVNUSU5BVElPTiIsImZyb21EZXN0aW5hdGlvbiIsImZyb21fbG9jIiwiY3VycmVudEludGVyYWN0aW9uVGltZSIsImN1cnJlbnRfaW50ZXJhY3Rpb25fdGltZSIsImRlc3RpbmF0aW9uX3R5cGUiLCJjb3JyZWN0U3RhcnREYXRlVmFsdWVzIiwiZ2V0QWRtaW5Db21tZW50cyIsInF1ZXJ5UGFyYW1zIiwibmV3QWRtaW5Db21tZW50cyIsImdlbmVyaWNfYWRtaW5fY29tbWVudCIsInBhdGgiLCJkZWNvZGVVUkkiLCJzZWFyY2giLCJqb2luIiwiZXhwZXJpbWVudEFkbWluQ29tbWVudCIsIm12aWV3Iiwic3JjVXJsIiwidXRtX3NvdXJjZSIsImFkbWluQ29tbWVudHMiLCJnZXRBZGRpdGlvbmFJbmZvIiwiaW5mbyIsImFkZHRsX2luZm8iLCJzdWJtaXRGb3JtIiwiZW5hYmxlZEZvclN1Ym1pdCIsInBhY2thZ2VEYXRhIiwicHJpY2UiLCJzdGFyUmF0aW5nIiwiaXNGbGlnaHQiLCJyZXF1ZXN0TG9hZCIsImNyZWF0ZVRyaXBPblJlZGlzIiwiZGVhbG5MdXh1cnkiLCJRdWVyeVN0cmluZyIsInNlZ21ldEhlbHBlckRhdGEiLCJzZW50VGltZSIsInBhZ2VOYW1lIiwiYWRkX2luZm8iLCJydFByb3BzIiwiZnJvbV9zbGlkZXJfZm9ybSIsImNyZWF0ZV95b3VyX293bl9pZCIsIm5ld19mb3JtIiwicmVmZXJlciIsImF0dHJpYnV0aW9uX2F0dHJpYnV0ZXMiLCJ0cmlwX29yaWdpbl9wcm9kdWN0IiwidHJpcF9vcmlnaW5fdXJpIiwidHJpcF9vcmlnaW5fcGFja2FnZV9pZCIsImNvbnRleHRfcGFnZV91cmwiLCJjb250ZXh0X2NhbXBhaWduX3NvdXJjZSIsImNvbnRleHRfY2FtcGFpZ25fbWVkaXVtIiwidXRtX21lZGl1bSIsImNvbnRleHRfY2FtcGFpZ25fbmFtZSIsInV0bV9jYW1wYWlnbiIsImNvbnRleHRfY2FtcGFpZ25fdGVybSIsInV0bV90ZXJtIiwiY29udGV4dF9jYW1wYWlnbl9jb250ZW50IiwidXRtX2NvbnRlbnQiLCJzZXNzaW9uX3V1aWQiLCJTRVNTSU9OX1VVSURfQ09PS0lFX0tFWSIsInBhZ2VfdXVpZCIsIlBBR0VfVVVJRF9DT09LSUVfS0VZIiwibGFuZGluZ19wYWdlX3V1aWQiLCJMQU5ESU5HX1VVSURfQ09PS0lFX0tFWSIsInJlZmVyZXJfcGFnZV91dWlkIiwiUkVGRVJFUl9VVUlEX0tFWSIsInRpbWVfc3RhbXAiLCJjYXJkX251bWJlciIsImNhcmRfZGF0YSIsInNlZ21lbnREYXRhIiwibnVtX2Rlc3RpbmF0aW9ucyIsInNlZ21lbnRQYXJhbUZvcm1PbmVTdWJtaXQiLCJleHBsb3JpbmdfZGVzdGluYXRpb24iLCJleHBsb3JpbmdfZGVzdGluYXRpb25zIiwiZmluYWxEYXRhIiwiY2FsbEJhY2tQYXJhbXMiLCJyZXF1ZXN0UGFyYW1zIiwicG9zdExlYWRIYW5kbGVyc1NlcXVlbnRpYWxGb3JtIiwiY2hlY2tGb3JFeHBlcmltZW50IiwiY2FsbEFwaVRvQmFja0VuZCIsInJlbmRlckhlbG1ldCIsInRoZW4iLCJjYXRjaCIsImdldEhlYWRlclRleHQiLCJoZWFkaW5nIiwic3ViSGVhZGluZyIsImdvQmFja0hhbmRsZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImZ1dWlkIiwibG9hZFNsaWRlclF1ZXN0aW9ucyIsIlVQREFURV9SRURJU19LRVkiLCJ0cmFja0Zvcm1PbmVWaWV3ZWQiLCJzY3JvbGwiLCJjb21wYXJlQW5kU29ydCIsImEiLCJiIiwicHJpb3JpdHkiLCJwYXJhbXMiLCJjYWxsYmFjayIsImhhbmRsZXJzIiwicG9zdExlYWRIYW5kbGVyc0V4aXRpbnRlbnQiLCJmaW5kIiwiaGFuZGxlciIsImNhbGxpbmdGbiIsIm91dHB1dCIsImRhdGFQYXJhbXMiLCJlcnIiLCJyZWRpc19kYXRhIiwiZXJyb3JfbXNnIiwibWVzc2FnZSIsInZhcmlhdGlvbkhlYWRlckluZm8iLCJvcGVuQ2hhdEhhbmRsZXIiLCJpbml0aWFsVmFsdWVzIiwic3luY0Vycm9ycyIsInN1Ym1pdFNsaWRlclR3byIsInRyYWNrVHJpcFVwZGF0ZWRTdGVwIiwidHJhY2tGb3JtU3RlcFN1Ym1pdHRlZCIsInNldFByb3BlcnRpZXNPblNsaWRlckZvcm0iLCJSeEZvcm1TbGlkZXIiLCJkZXN0cm95T25Vbm1vdW50IiwiZW5hYmxlUmVpbml0aWFsaXplIiwiaXNSZXF1ZXN0TG9hZGVkIiwic2lnbmVkSW5Vc2VyRW1haWwiLCJ1cGRhdGVGcm9tT25lUHJvcHMiLCJnZXRGdW5uZWxVdWlkIiwiaGFuZGxlU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOzs7O0FBSEE7SUFLTUEsYSxHQUFOLE1BQU1BLGFBQU4sU0FBNEJDLGVBQU1DLFNBQWxDLENBQTRDO0FBQzFDQyxnQkFBYTtBQUNYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUFsQjtBQUNEOztBQUNERCxhQUFXRSxDQUFYLEVBQWNDLElBQWQsRUFBb0I7QUFDbEJELE1BQUVFLGVBQUY7QUFDQSxTQUFLQyxLQUFMLENBQVdDLFVBQVgsQ0FBc0JILElBQXRCO0FBQ0Q7O0FBQ0RJLFdBQVM7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QUFDQSxFIiwiZmlsZSI6ImZvcm0tb25lLWxlYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRGF0ZVdlZWtQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVdlZWsgPSB0aGlzLnVwZGF0ZVdlZWsuYmluZCh0aGlzKTtcbiAgfVxuICB1cGRhdGVXZWVrKGUsIHdlZWspIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMuc2VsZWN0V2Vlayh3ZWVrKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCBjbGlja092ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ3ZWVrLWJveC13aWR0aFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5zaG93V2VlayA/IFwic2JjdyB6MyB3ZWVrLWJveC13aWR0aCBiczRcIiA6IFwiYWJzb2x1dGUtY2VudGVyLWggdDAgc2JjdyB6MyBoaWRlXCJ9PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NsaWNrT3ZlcmxheX0gY2xhc3NOYW1lPVwiZml4ZWQgdDAgbDAgd2Z1bGwgaGZ1bGwgd2Vlay1tYXNrXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IHdlZWstYm94LXdpZHRoLWlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IHBmYzEgZjI0IHJvdyByb3ctXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMCB0ZXh0LWNlbnRlciBmMTYgZGF0ZS13ZWVrLXRpdGxlXCI+e2N1cnJlbnRNb250aH0ge2N1cnJlbnRZZWFyfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibTAgcDEwIHBsMCBwcjAgaWJsb2NrIHdmdWxsXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMubnVtT2ZXZWVrcy5tYXAod2VlayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xzc05hbWUgPSAod2VlayA+PSB0aGlzLnByb3BzLnN0YXJ0V2VlaykgPyAnJyA6ICdkaXNhYmxlJztcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e3dlZWt9IHZhbHVlPXtgV2VlayAke3dlZWt9YH0gY2xhc3NOYW1lPVwiY29sLXhzLTYgY2xzc05hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE0IHBmYzMgYmxvY2sgbWF1dG8gcDggdGV4dC1jZW50ZXIgZGF0ZS13ZWVrLXZhbFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy51cGRhdGVXZWVrKGUsIGBXZWVrICR7d2Vla31gKX0+XG4gICAgICAgICAgICAgICAgICAgIHtgV2VlayAke3dlZWt9YH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5EYXRlV2Vla1BhbmVsLnByb3BUeXBlcyA9IHtcbiAgc2hvd1dlZWs6IFByb3BUeXBlcy5ib29sLFxuICBzZWxlY3RXZWVrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY3VycmVudE1vbnRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjdXJyZW50WWVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgbnVtT2ZXZWVrczogUHJvcFR5cGVzLmFycmF5LFxuICBzdGFydFdlZWs6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbkRhdGVXZWVrUGFuZWwuZGVmYXVsdFByb3BzID0ge1xuICBzaG93V2VlazogZmFsc2UsXG4gIHNlbGVjdFdlZWs6ICgpID0+IHt9LFxuICBjdXJyZW50TW9udGg6ICcnLFxuICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICBudW1PZldlZWtzOiBbMSwgMiwgMywgNF0sXG4gIHN0YXJ0V2VlazogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVdlZWtQYW5lbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xuaW1wb3J0IFBpY2tlciBmcm9tICdyZWFjdC1tb250aC1waWNrZXInO1xuXG5pbXBvcnQgRGF0ZVdlZWtQYW5lbCBmcm9tICcuL0RhdGVXZWVrUGFuZWwnO1xuaW1wb3J0IEZvcm1EYXRlTnVtIGZyb20gJy4vRm9ybURhdGVOdW0nO1xuaW1wb3J0IE1vbnRoQm94IGZyb20gJy4vTW9udGhCb3gnO1xuaW1wb3J0IHsgZm9ybWF0LCBnZXREYXRlT2ZXZWVrIH0gZnJvbSAnaGVscGVycy9EYXRlVGltZSc7XG5cbmltcG9ydCAnLi9Gb3JtTGVhZC9MZWFkRm9ybS5zY3NzJztcblxuaW1wb3J0IHtcbiAgQ2FsZW5kYXJJY29uLFxuICBDbG9zZUljb24sIERhdGVEZWNpZGVkXG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuXG5jb25zdCBwaWNrZXJMYW5nID0ge1xuICBtb250aHM6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgZnJvbTogJ0Zyb20nLFxuICB0bzogJ1RvJ1xufTtcblxuZnVuY3Rpb24gY3VycmVudFdlZWsoZGF0ZSkge1xuICBjb25zdCBkYXRlX25ldyA9IG5ldyBEYXRlKGRhdGUpO1xuICBjb25zdCB0aGlzRGF5ID0gZGF0ZV9uZXcuZ2V0RGF0ZSgpO1xuICBjb25zdCBuZXdEYXRlID0gZGF0ZV9uZXc7XG4gIG5ld0RhdGUuc2V0RGF0ZSgxKTtcbiAgY29uc3QgZGlnaXQgPSBuZXdEYXRlLmdldERheSgpO1xuICBjb25zdCBRID0gKHRoaXNEYXkgKyBkaWdpdCkgLyA3O1xuICBjb25zdCBSID0gKHRoaXNEYXkgKyBkaWdpdCkgJSA3O1xuICBpZiAoUiAhPT0gMClcbiAgICByZXR1cm4gTWF0aC5jZWlsKFEpO1xuICBlbHNlXG4gICAgcmV0dXJuIFE7XG59XG5cbmZ1bmN0aW9uIHdlZWtDb3VudCh5ZWFyLCBtb250aF9udW1iZXIpIHtcbiAgLy8gdmFyIGZpcnN0T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoX251bWJlci0xLCAxKTtcbiAgLy8gdmFyIGxhc3RPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGhfbnVtYmVyLCAwKTtcbiAgLy8gdmFyIHVzZWQgPSBmaXJzdE9mTW9udGguZ2V0RGF5KCkgKyBsYXN0T2ZNb250aC5nZXREYXRlKCk7XG4gIC8vIHZhciBjb3VudCA9IE1hdGguY2VpbCggdXNlZCAvIDcpO1xuICBsZXQgcmV0VmFsdWUgPSBbXTtcbiAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSBjb3VudDsgaSsrKSB7XG4gIC8vICAgcmV0VmFsdWUucHVzaChpKTtcbiAgLy8gfVxuICByZXRWYWx1ZSA9IFsxLDIsMyw0XTtcbiAgcmV0dXJuIHJldFZhbHVlO1xufVxuXG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xubGV0IGRpc2FibGVDdXJyZW50TW9udGggPSBmYWxzZTtcbmlmIChjdXJyZW50RGF0ZS5nZXREYXRlKCkgPiAyOCkge1xuICBkaXNhYmxlQ3VycmVudE1vbnRoID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRpbmdXZWVrKHllYXIsIG1vbnRoKSB7XG4gIGlmIChjdXJyZW50TW9udGggPT09IG1vbnRoICYmIGN1cnJlbnRZZWFyID09PSB5ZWFyKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRXZWVrKGN1cnJlbnREYXRlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5jbGFzcyBEZXBhcnR1cmVEYXRlRm9ybU9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRlVHlwZTogbnVsbCxcbiAgICAgIHNlbGVjdGVkRGF0ZTogJycsXG4gICAgICBtdmFsdWU6IHsgeWVhcjogY3VycmVudFllYXIsIG1vbnRoOiBjdXJyZW50TW9udGggfSxcbiAgICAgIGZpeGVkRGF0ZTogdHJ1ZSxcbiAgICAgIGZsZXhpYmxlRGF0ZTogdHJ1ZSxcbiAgICAgIGFueXRpbWVEYXRlOiB0cnVlLFxuICAgICAgbnVtT2ZEYXlzOiBmYWxzZSxcbiAgICAgIGRhdGVDaGVja2VkOiBmYWxzZSxcbiAgICAgIHNob3dXZWVrOiBmYWxzZSxcbiAgICAgIHN0YXJ0V2VlazogMSxcbiAgICAgIG51bU9mV2Vla3M6IFtdLFxuICAgICAgaXNEYXRlUGlja2VyT3BlbjogZmFsc2UsXG4gICAgICBpc0Jvb2tlZFRpY2tldDogcHJvcHMuZm9ybVZhbHVlcy5ib29rZWRfdGlja2V0cyB8fCBmYWxzZSxcbiAgICAgIHNob3dNb250aFBpY2tlcjogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRml4ZWRDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpeGVkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGaXhlZENoYW5nZVdpdGhvdXRUb2dnbGUgPSB0aGlzLmhhbmRsZUZpeGVkQ2hhbmdlV2l0aG91dFRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQW55dGltZUNoYW5nZSA9IHRoaXMuaGFuZGxlQW55dGltZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UmVxdWlyZWRGaWVsZHMgPSB0aGlzLnNldFJlcXVpcmVkRmllbGRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGlja01vbnRoQm94ID0gdGhpcy5oYW5kbGVDbGlja01vbnRoQm94LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBTW9udGhDaGFuZ2UgPSB0aGlzLmhhbmRsZUFNb250aENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQU1vbnRoRGlzc21pcyA9IHRoaXMuaGFuZGxlQU1vbnRoRGlzc21pcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2Nyb2xsUGFnZSA9IHRoaXMuc2Nyb2xsUGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZURhdGVQaWNrZXIgPSB0aGlzLmhpZGVEYXRlUGlja2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYW5jZWxEYXRlU2VsZWN0aW9uID0gdGhpcy5jYW5jZWxEYXRlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVCb29rZWRUaWNrZXRzID0gdGhpcy5oYW5kbGVCb29rZWRUaWNrZXRzLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuc2V0UmVxdWlyZWRGaWVsZHModGhpcy5wcm9wcy5mb3JtVmFsdWVzKTtcbiAgfVxuXG4gIHNldFJlcXVpcmVkRmllbGRzKHZhbHVlcykge1xuICAgIGlmKHZhbHVlcy5zdGFydF9kYXRlICYmICF2YWx1ZXMuc3RhcnRfZGF0ZV9mbGV4aWJsZSAmJiAhdmFsdWVzLnN0YXJ0X2RhdGVfbm9pZGVhKSB7XG4gICAgICB0aGlzLmhhbmRsZUZpeGVkQ2hhbmdlV2l0aG91dFRvZ2dsZSh2YWx1ZXMuc3RhcnRfZGF0ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZXMuc3RhcnRfZGF0ZV9ub2lkZWEpIHtcbiAgICAgIHRoaXMuaGFuZGxlQW55dGltZUNoYW5nZSgpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVzLnN0YXJ0X2RhdGVfZmxleGlibGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERhdGU6IHZhbHVlcy5zdGFydF9kYXRlX2ZsZXhpYmxlLFxuICAgICAgICBkYXRlVHlwZTogJ2ZsZXhpYmxlJyxcbiAgICAgICAgZmxleGlibGVEYXRlOiB0cnVlLFxuICAgICAgICBmaXhlZERhdGU6IGZhbHNlLFxuICAgICAgICBhbnl0aW1lRGF0ZTogZmFsc2UsXG4gICAgICAgIG51bU9mRGF5czogdHJ1ZSxcbiAgICAgICAgc2hvd1dlZWs6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZXMuc3RhcnRfZGF0ZV9mbGV4aWJsZS5tYXRjaCgvKFxcdykrL2cpO1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihnZXREYXRlT2ZXZWVrKFxuICAgICAgICBtYXRjaGVzWzBdLFxuICAgICAgICBtYXRjaGVzWzFdLFxuICAgICAgICBtYXRjaGVzWzNdLFxuICAgICAgICAnWVlZWS1NTS1ERCdcbiAgICAgICksICdzdGFydF9kYXRlJyk7XG4gICAgfVxuICB9XG4gIGNhbmNlbERhdGVTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRlVHlwZTogbnVsbCxcbiAgICAgIHNlbGVjdGVkRGF0ZTogJycsXG4gICAgICBmaXhlZERhdGU6IHRydWUsXG4gICAgICBmbGV4aWJsZURhdGU6IHRydWUsXG4gICAgICBhbnl0aW1lRGF0ZTogdHJ1ZSxcbiAgICAgIG51bU9mRGF5czogZmFsc2UsXG4gICAgICBzaG93V2VlazogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKCcnLCAnc3RhcnRfZGF0ZScpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oZmFsc2UsICdzdGFydF9kYXRlX25vaWRlYScpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oJycsICdzdGFydF9kYXRlX2ZsZXhpYmxlJyk7XG4gIH1cblxuICBoYW5kbGVGaXhlZENoYW5nZVdpdGhvdXRUb2dnbGUoZGF0ZU9iaikge1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoZGF0ZU9iaiwgJ0REIE1NTU0gWVlZWScpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWREYXRlOiBmb3JtYXR0ZWREYXRlLFxuICAgICAgZGF0ZVR5cGU6ICdmaXhlZCcsXG4gICAgICBkYXRlQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIGZsZXhpYmxlRGF0ZTogZmFsc2UsXG4gICAgICBhbnl0aW1lRGF0ZTogZmFsc2UsXG4gICAgICBudW1PZkRheXM6IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCBzdGFydERhdGUgPSBmb3JtYXQoZGF0ZU9iaiwgJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHN0YXJ0RGF0ZSwgJ3N0YXJ0X2RhdGUnKTtcbiAgfVxuXG4gIGhhbmRsZUZpeGVkQ2hhbmdlKGRhdGVPYmopIHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0KGRhdGVPYmosICdERCBNTU1NIFlZWVknKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF0ZTogZm9ybWF0dGVkRGF0ZSxcbiAgICAgIGRhdGVUeXBlOiAnZml4ZWQnLFxuICAgICAgZGF0ZUNoZWNrZWQ6IHRydWUsXG4gICAgICBmbGV4aWJsZURhdGU6IGZhbHNlLFxuICAgICAgYW55dGltZURhdGU6IGZhbHNlLFxuICAgICAgbnVtT2ZEYXlzOiB0cnVlXG4gICAgfSk7XG4gICAgY29uc3Qgc3RhcnREYXRlID0gZm9ybWF0KGRhdGVPYmosICdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy50b2dnbGVEYXRlUGlja2VyQ2FsZW5kYXIoKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHN0YXJ0RGF0ZSwgJ3N0YXJ0X2RhdGUnKTtcbiAgfVxuXG4gIHNjcm9sbFBhZ2UoZWxlbWVudCkge1xuICAgIGxldCBlbGVtZW50VG9CZVNjcm9sbGVkID0gZWxlbWVudDtcbiAgICBsZXQgdG9Mb2NTY3JvbGwgPSBlbGVtZW50VG9CZVNjcm9sbGVkLm9mZnNldFRvcDtcbiAgICBsZXQgdG9Mb2NQb3MgPSBlbGVtZW50VG9CZVNjcm9sbGVkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgIGxldCB0b0xvY0FkZCA9IHRvTG9jUG9zIC0gdG9Mb2NTY3JvbGw7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHRvTG9jQWRkKTtcbiAgfVxuXG4gIHRvZ2dsZURhdGVQaWNrZXJDYWxlbmRhciAoZSkge1xuICAgIGlmKGUpXG4gICAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKCkgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGUgJiYgZS50YXJnZXQpXG4gICAgICB0aGlzLnNjcm9sbFBhZ2UoZS50YXJnZXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzRGF0ZVBpY2tlck9wZW46ICF0aGlzLnN0YXRlLmlzRGF0ZVBpY2tlck9wZW59KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBkYXRlcGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLXZhcmlhdGlvbi1kYXRlcGlja2VyJylbMF07XG4gICAgICBpZihkYXRlcGlja2VyKVxuICAgICAgICBkYXRlcGlja2VyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGB3aWR0aDogJHt3aW5kb3cuaW5uZXJXaWR0aH1weDsgbGVmdDogLTE1cHggIWltcG9ydGFudDtkaXNwbGF5OmJsb2NrO2ApO1xuICAgIH0sMTAwKVxuICB9XG5cbiAgaGlkZURhdGVQaWNrZXIgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzRGF0ZVBpY2tlck9wZW46IGZhbHNlfSk7XG4gIH1cblxuICBoYW5kbGVCb29rZWRUaWNrZXRzKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQm9va2VkVGlja2V0OiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGV2ZW50LnRhcmdldC5jaGVja2VkLCAnYm9va2VkX3RpY2tldHMnKTtcbiAgfVxuXG4gIGhhbmRsZUFueXRpbWVDaGFuZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRlVHlwZTogJ2FueXRpbWUnLFxuICAgICAgc2VsZWN0ZWREYXRlOiAnQW55dGltZScsXG4gICAgICBmaXhlZERhdGU6IGZhbHNlLFxuICAgICAgZmxleGlibGVEYXRlOiBmYWxzZSxcbiAgICAgIGFueXRpbWVEYXRlOiB0cnVlLFxuICAgICAgbnVtT2ZEYXlzOiB0cnVlLFxuICAgICAgaXNCb29rZWRUaWNrZXQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMudHJhY2tGb3JtT25lSW50ZXJhY3RlZCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24odHJ1ZSwgJ3N0YXJ0X2RhdGVfbm9pZGVhJyk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbignQW55dGltZScsICdzdGFydF9kYXRlJyk7XG4gIH1cblxuICBoYW5kbGVGbGV4aWJsZUNoYW5nZSh3ZWVrKSB7XG4gICAgY29uc3QgZmxleGlibGVEYXRlID0gYCR7dGhpcy5zdGF0ZS5tb250aH0nJHt0aGlzLnN0YXRlLnllYXIudG9TdHJpbmcoKS5zdWJzdHIoMil9IC0gJHt3ZWVrfWA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERhdGU6IGZsZXhpYmxlRGF0ZSxcbiAgICAgIGRhdGVUeXBlOiAnZmxleGlibGUnLFxuICAgICAgZmxleGlibGVEYXRlOiB0cnVlLFxuICAgICAgZml4ZWREYXRlOiBmYWxzZSxcbiAgICAgIGFueXRpbWVEYXRlOiBmYWxzZSxcbiAgICAgIG51bU9mRGF5czogdHJ1ZSxcbiAgICAgIHNob3dXZWVrOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oZmFsc2UsICdzdGFydF9kYXRlX25vaWRlYScpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oZmxleGlibGVEYXRlLCAnc3RhcnRfZGF0ZV9mbGV4aWJsZScpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oXG4gICAgICBnZXREYXRlT2ZXZWVrKFxuICAgICAgICB0aGlzLnN0YXRlLnllYXIsXG4gICAgICAgIHRoaXMuc3RhdGUubW9udGgsXG4gICAgICAgIHBhcnNlSW50KHdlZWsubWF0Y2goL1xcZCsvKVswXSkgLSAxLFxuICAgICAgICAnWVlZWS1NTS1ERCdcbiAgICAgICksXG4gICAgJ3N0YXJ0X2RhdGUnXG4gICAgKTtcbiAgfVxuXG4gIGhpZGVXZWVrUGFuZWwoZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93V2VlazogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ2xpY2tNb250aEJveChlKSB7XG4gICAgdGhpcy5zY3JvbGxQYWdlKGUudGFyZ2V0KTtcbiAgICB0aGlzLnJlZnMucGlja0FNb250aC5zaG93KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93TW9udGhQaWNrZXI6dHJ1ZVxuICAgIH0pXG4gICAgY29uc3QgbGVmdFBvc2l0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsZXhpYmxlX2RhdGVfZm5ldycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1vbnRoLXBpY2tlciBybXAtY29udGFpbmVyJylbMF1cbiAgICAgIC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgd2lkdGg6ICR7d2luZG93LmlubmVyV2lkdGh9cHg7IGxlZnQ6IC0ke2xlZnRQb3NpdGlvbn1weCAhaW1wb3J0YW50O2ApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrLWJveC13aWR0aCcpXG4gICAgICAuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiAke3dpbmRvdy5pbm5lcldpZHRofXB4OyBsZWZ0OiAtMTVweCAhaW1wb3J0YW50O2ApO1xuICB9XG5cbiAgaGFuZGxlQU1vbnRoQ2hhbmdlKHllYXIsIG1vbnRoTnVtKSB7XG4gICAgdGhpcy5yZWZzLnBpY2tBTW9udGguZGlzbWlzcygpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeWVhcixcbiAgICAgIG1vbnRoOiBwaWNrZXJMYW5nLm1vbnRoc1ttb250aE51bSAtIDFdLFxuICAgICAgbnVtT2ZXZWVrczogd2Vla0NvdW50KHllYXIsIG1vbnRoTnVtKSxcbiAgICAgIHN0YXJ0V2VlazogZ2V0U3RhcnRpbmdXZWVrKHllYXIsIG1vbnRoTnVtIC0gMSksXG4gICAgICBzaG93V2VlazogdHJ1ZSxcbiAgICAgIHNob3dNb250aFBpY2tlcjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUFNb250aERpc3NtaXModmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbXZhbHVlOiB2YWx1ZSwgc2hvd01vbnRoUGlja2VyOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG4gICAgY29uc3QgeyBmaXhlZERhdGUsIGZsZXhpYmxlRGF0ZSwgYW55dGltZURhdGUsIGRhdGVUeXBlLCBtdmFsdWUsIHNlbGVjdGVkRGF0ZSwgaXNCb29rZWRUaWNrZXQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIiA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2ZpeGVkRGF0ZSAmJiBmbGV4aWJsZURhdGUgJiYgYW55dGltZURhdGUgPyBcInJvdyByb3ctXCIgOiBcImhpZGVcIn1gfT5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBwYjggZjE0IGZ3OVwiPkRlcGFydHVyZSBEYXRlPGVtIGNsYXNzTmFtZT1cInBmYzJcIj4qPC9lbT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjEyIGZ3M1wiPiAoQ2hvb3NlIEFueSk8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXhlZERhdGUgPyBcInJlbGF0aXZlXCIgOiBcImhpZGVcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGF0ZVR5cGUgPT09IFwiZml4ZWRcIiA/XG4gICAgICAgICAgICAgIFwiaW5wdXQtd2l0aC1pY29uLWJveCBjb2wteHMtNiBwcjAgcGwwIHJlbGF0aXZlIGNyb3NzLXZpc2libGUtYm94XCIgOlxuICAgICAgICAgICAgICBcImNvbC14cy00IHByNCBwbDAgcmVsYXRpdmUgaW5wdXQtd2l0aC1pY29uLWJveCBpY29uLWhpZGUtYm94XCJ9PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZGRhdGUtbGFiZWwgcGI4IGYxNCBmdzlcIj5EZXBhcnR1cmUgRGF0ZTxlbSBjbGFzc05hbWU9XCJwZmMyXCI+KjwvZW0+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudHJhY2tGb3JtT25lSW50ZXJhY3RlZCgpfSA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvblwiPjxDYWxlbmRhckljb24gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICBpZD1cImZpeGVkX2RhdGVfZm5ld1wiXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZGF0ZS1jaGVjayBpbnB1dCBib3gtaW5wdXQtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZURhdGVQaWNrZXJDYWxlbmRhci5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZSA/IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlIDogJ0ZpeGVkIERhdGUnfVxuICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNEYXRlUGlja2VyT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm09XCJERC9NTS9ZWVlZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRlID8gdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJGaXhlZCBEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICBjYWxlbmRhckNsYXNzTmFtZT1cImN1c3RvbS12YXJpYXRpb24tZGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRml4ZWRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja091dHNpZGU9e3RoaXMuaGlkZURhdGVQaWNrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5jYW5jZWxEYXRlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZSBhYnNvbHV0ZS1jZW50ZXItdiByMTAgejIgY2xvc2UtZGF0ZSBjdXJzb3JQXCI+PENsb3NlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmbGV4aWJsZURhdGUgPyBcIlwiIDogXCJoaWRlXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhdGVUeXBlID09PSBcImZsZXhpYmxlXCIgP1xuICAgICAgICAgICAgICBcImlucHV0LXdpdGgtaWNvbi1ib3ggaW5wdXQtdHdvLWljb25zIGNvbC14cy02IHByMCBwbDAgcmVsYXRpdmUgY3Jvc3MtdmlzaWJsZS1ib3ggY3Jvc3MtdmlzaWJsZS1ib3hcIiA6XG4gICAgICAgICAgICAgIFwiY29sLXhzLTQgcHI0IHBsMCBmbGV4aWJsZS1kYXRlIHJlbGF0aXZlIGlucHV0LXdpdGgtaWNvbi1ib3ggaWNvbi1oaWRlLWJveFwifT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRkYXRlLWxhYmVsIHBiOCBmMTQgZnc5XCI+RGVwYXJ0dXJlIERhdGU8ZW0gY2xhc3NOYW1lPVwicGZjMlwiPio8L2VtPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRyYWNrRm9ybU9uZUludGVyYWN0ZWQoKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvblwiPjxDYWxlbmRhckljb24gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPFBpY2tlclxuICAgICAgICAgICAgICAgICAgcmVmPVwicGlja0FNb250aFwiXG4gICAgICAgICAgICAgICAgICB5ZWFycz17eyBtaW46IHsgeWVhcjogY3VycmVudFllYXIsIG1vbnRoOiBkaXNhYmxlQ3VycmVudE1vbnRoID8gY3VycmVudE1vbnRoICsgMiAgOiBjdXJyZW50TW9udGggKyAxfSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB7IHllYXI6IGN1cnJlbnRZZWFyICsgMSwgbW9udGg6IDEyIH0gfX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttdmFsdWV9XG4gICAgICAgICAgICAgICAgICBsYW5nPXtwaWNrZXJMYW5nLm1vbnRoc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFNb250aENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17dGhpcy5oYW5kbGVBTW9udGhEaXNzbWlzfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vbnRoLXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dNb250aFBpY2tlcn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TW9udGhCb3ggZGF0ZVZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja01vbnRoQm94fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1BpY2tlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuY2FuY2VsRGF0ZVNlbGVjdGlvbn0gY2xhc3NOYW1lPVwiaGlkZSBhYnNvbHV0ZS1jZW50ZXItdiByMTAgejIgY2xvc2UtZGF0ZSBjdXJzb3JQXCI+XG4gICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2FueXRpbWVEYXRlID8gXCJcIiA6IFwiaGlkZVwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXRlVHlwZSA9PT0gXCJhbnl0aW1lXCIgP1xuICAgICAgICAgICAgICBcImNvbC14cy02IGlucHV0LXdpdGgtaWNvbi1ib3ggaW5wdXQtdHdvLWljb25zIHByMCBwbDAgY3Jvc3MtdmlzaWJsZS1ib3hcIiA6XG4gICAgICAgICAgICAgIFwiY29sLXhzLTQgcHIwIHBsMCBmbGV4aWJsZS1kYXRlIHJlbGF0aXZlIGlucHV0LXdpdGgtaWNvbi1ib3ggaWNvbi1oaWRlLWJveFwifT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRkYXRlLWxhYmVsIHBiOCBmMTQgZnc5XCI+RGVwYXJ0dXJlIERhdGU8ZW0gY2xhc3NOYW1lPVwicGZjMlwiPio8L2VtPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1pY29uXCI+PENhbGVuZGFySWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBpZD1cImFueXRpbWVfZm5ld1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBiYzQgc2ZjdyBjdXJzb3JQIHJhZGl1czIgaWJsb2NrIGlucHV0IGZvcm0tZGF0ZS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFueXRpbWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICByZWFkT25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW55dGltZVwiXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgID57c2VsZWN0ZWREYXRlID8gc2VsZWN0ZWREYXRlIDogXCJBbnl0aW1lXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmNhbmNlbERhdGVTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlIGFic29sdXRlLWNlbnRlci12IHIxMCB6MiBjbG9zZS1kYXRlIGN1cnNvclBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJ0cmlwX2RheXNfdGVtcFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e0Zvcm1EYXRlTnVtfVxuICAgICAgICAgICAgc2hvd0RheXM9e3RoaXMuc3RhdGUubnVtT2ZEYXlzfVxuICAgICAgICAgICAgZGlzcGF0Y2g9e3RoaXMucHJvcHMubWV0YS5kaXNwYXRjaH1cbiAgICAgICAgICAgIGZvcm09e3RoaXMucHJvcHMubWV0YS5mb3JtfVxuICAgICAgICAgICAgcnREYXRhPXt0aGlzLnByb3BzLnJ0RGF0YX1cbiAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgZGF5cz17dGhpcy5wcm9wcy5kYXlzfVxuICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhdGVUeXBlID09PSBcImZpeGVkXCIgPyBcImJvb2tlZC10aWNrZXQgY29sLXhzLTEyIHAwIGJvb2tlZC10aWNrZXRcIiA6IFwiaGlkZVwifT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQm9va2VkVGlja2V0fVxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2tlZFRpY2tldHN9XG4gICAgICAgICAgICAgICAgICAgaWQ9XCJib29rZWQtdGlja2V0XCIgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uIGNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJib29rZWQtdGlja2V0XCIgY2xhc3NOYW1lPVwiZjEyIHB0MiBwYjIgbXQ1XCI+SSBoYXZlIGJvb2tlZCBteSB0cmF2ZWwgdGlja2V0czwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyIGRhdGUtZmllbGQgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8RGF0ZVdlZWtQYW5lbFxuICAgICAgICAgICAgY3VycmVudE1vbnRoPXt0aGlzLnN0YXRlLm1vbnRofVxuICAgICAgICAgICAgY3VycmVudFllYXI9e3RoaXMuc3RhdGUueWVhcn1cbiAgICAgICAgICAgIHNlbGVjdFdlZWs9e3RoaXMuaGFuZGxlRmxleGlibGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHNob3dXZWVrPXt0aGlzLnN0YXRlLnNob3dXZWVrfVxuICAgICAgICAgICAgbnVtT2ZXZWVrcz17dGhpcy5zdGF0ZS5udW1PZldlZWtzfVxuICAgICAgICAgICAgc3RhcnRXZWVrPXt0aGlzLnN0YXRlLnN0YXJ0V2Vla31cbiAgICAgICAgICAgIGNsaWNrT3ZlcmxheT17dGhpcy5oaWRlV2Vla1BhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1ldGEudG91Y2hlZCAmJlxuICAgICAgICAgIChcbiAgICAgICAgICAgICh0aGlzLnByb3BzLm1ldGEuZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPnt0aGlzLnByb3BzLm1ldGEuZXJyb3J9PC9zcGFuPikgfHxcbiAgICAgICAgICAgICAgKHRoaXMucHJvcHMubWV0YS53YXJuaW5nICYmIDxzcGFuPnt0aGlzLnByb3BzLm1ldGEud2FybmluZ308L3NwYW4+KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5EZXBhcnR1cmVEYXRlRm9ybU9uZS5wcm9wVHlwZXMgPSB7XG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRheXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJ0RGF0YTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuRGVwYXJ0dXJlRGF0ZUZvcm1PbmUuZGVmYXVsdFByb3BzID0ge1xuICBmb3JtVmFsdWVzOiB7fSxcbiAgcnREYXRhOiB7fSxcbiAgZGF5czogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlcGFydHVyZURhdGVGb3JtT25lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9Gb3JtTGVhZC9MZWFkRm9ybS5zY3NzJztcblxuY2xhc3MgRm9ybURhdGVOdW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbnVtYmVyT2ZEYXlzOiB0aGlzLnByb3BzLmRheXMgfHwgcHJvcHMucnREYXRhLnRyaXBfZGF5cyB8fCBwcm9wcy5mb3JtVmFsdWVzLnRyaXBfZGF5c1xuICAgIH07XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbih0aGlzLnN0YXRlLm51bWJlck9mRGF5cywgJ3RyaXBfZGF5cycpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVEYXlzID0gdGhpcy51cGRhdGVEYXlzLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID49IDIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBudW1iZXJPZkRheXM6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyT2ZEYXlzOiAwIH0pO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGUudGFyZ2V0LnZhbHVlLCAndHJpcF9kYXlzJyk7XG4gIH1cblxuICB1cGRhdGVEYXlzKGFjdGlvbikge1xuICAgIGxldCB0ZW1wVmFsdWUgPSAwO1xuICAgIGxldCBuZXdWYWx1ZSA9IDA7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZS5udW1iZXJPZkRheXMgPyB0aGlzLnN0YXRlLm51bWJlck9mRGF5cyA6IDE7XG4gICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcbiAgICAgIHRlbXBWYWx1ZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBWYWx1ZSA9IC0xO1xuICAgIH1cbiAgICBuZXdWYWx1ZSA9IHBhcnNlSW50KGN1cnJlbnRWYWx1ZSwgMTApICsgdGVtcFZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA+PSAyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyT2ZEYXlzOiBuZXdWYWx1ZSB9KTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24obmV3VmFsdWUudG9TdHJpbmcoKSwgJ3RyaXBfZGF5cycpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgdmFyaWF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNob3dEYXlzID8gXCJjb2wteHMtMTIgcHIwIHBsOFwiIDogXCJoaWRlXCJ9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiRnJvbVwiIGNsYXNzTmFtZT1cImYxNCBmdzkgcGI4IGlibG9jayBwZmMzXCI+TnVtYmVyIE9mIERheXM8ZW0gY2xhc3NOYW1lPVwicGZjMlwiPio8L2VtPjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXlzQ291bnQgcmVsYXRpdmUgaW5wdXQtd2l0aC1pY29uLWJveCBpbnB1dC10d28taWNvbnMgaW5wdXQtd2l0aC1pY29uLWJveFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy51cGRhdGVEYXlzKCdkZWMnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLWRhdGUgY3Vyc29yUCBtaW51cy1pY29uXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwidHJpcF9kYXlzXCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF5c1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IHRleHQtY2VudGVyIGR1cmF0aW9uICR7dmFyaWF0aW9uICYmIHRvdWNoZWQgJiYgKGVycm9yICYmICdpbnB1dC1lcnJvcicpfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm51bWJlck9mRGF5cyB8fCAnJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIGlkPVwidHJpcF9kYXlzX2ZuZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMudXBkYXRlRGF5cygnaW5jJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsdXMtZGF0ZSBjdXJzb3JQIHBsdXMtaWNvblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXRhXG4gICAgICAgICAgICAmJiB0aGlzLnByb3BzLm1ldGEudG91Y2hlZFxuICAgICAgICAgICAgJiYgKHRoaXMucHJvcHMubWV0YS5lcnJvclxuICAgICAgICAgICAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPnt0aGlzLnByb3BzLm1ldGEuZXJyb3J9PC9zcGFuPilcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Gb3JtRGF0ZU51bS5wcm9wVHlwZXMgPSB7XG4gIHNob3dEYXlzOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFyaWF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzcGF0Y2hSeEZvcm1BY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJ0RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGF5czogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbkZvcm1EYXRlTnVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvd0RheXM6IGZhbHNlLFxuICBydERhdGE6IHt9LFxuICBkYXlzOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybURhdGVOdW07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5jb25zdCB7IHBhcnNlIH0gPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IEFkZGl0aW9uYWxQcmVmcmVuY2VzID0gKHsgcXVlc3Rpb24sIGlucHV0IH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgaW5wdXQub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gYWRkaXRpb25hbC1wcmVmcmVuY2VzIHB0MTVcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBtYjhcIj57cXVlc3Rpb24udGl0bGV9PC9wPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhIGJvcmRlciBwMTUgYXRfYWRkaXRpb25hbF9wcmVmXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BhcnNlKHF1ZXN0aW9uLmRlc2NyaXB0aW9uKX1cbiAgICAgICAgbmFtZT17cXVlc3Rpb24uaWRlbnRpZmllcn1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BZGRpdGlvbmFsUHJlZnJlbmNlcy5wcm9wVHlwZXMgPSB7XG4gIHF1ZXN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZGl0aW9uYWxQcmVmcmVuY2VzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3QgQmFja0J1dHRvbiA9ICh7IGhhbmRsZUNsaWNrIH0pID0+IChcbiAgPExpbmsgY2xhc3NOYW1lPVwid2Z1bGwgYmFjay1idG4gZmxlZnQgYnRuLXByaS1sYXJnZSByYWRpdXMyIHB0MTUgcGIxNSB3ZnVsbCBhdF9iYWNrXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgIEJhY2tcbiAgPC9MaW5rPlxuKTtcblxuQmFja0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEJ1ZGdldEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBudW1iZXJXaXRoQ29tbWFzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvcGFyc2Vycyc7XG5cbmNvbnN0IEJ1ZGdldE9wdGlvbnMgPSAoeyBidWRnZXRPcHRpb25zLCBoYW5kbGVDaGFuZ2UsIGdldFNlbGVjdGVkQnVkZ2V0LCBpc0ZsaWdodFNlbGVjdGVkIH0pID0+IHtcbiAgY29uc3QgYnVkZ2V0S2V5cyA9IE9iamVjdC5rZXlzKGJ1ZGdldE9wdGlvbnMpO1xuICBjb25zdCBidWRnZXRGaWVsZHMgPSBidWRnZXRLZXlzLnNsaWNlKDAsIDMpLm1hcCgoa2V5LCBpbmRleCkgPT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHA4XCIga2V5PXtrZXl9PlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPXtrZXl9XG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgIGNsYXNzTmFtZT1cInJhZGlvLWNvbW1vblwiXG4gICAgICAgIG5hbWU9XCJidWRnZXRPcHRpb25zXCJcbiAgICAgICAgdmFsdWU9e2Ake2J1ZGdldE9wdGlvbnNba2V5XX0uLiR7YnVkZ2V0T3B0aW9uc1tidWRnZXRLZXlzW2luZGV4ICsgMV1dfWB9XG4gICAgICAgIGNoZWNrZWQ9e2dldFNlbGVjdGVkQnVkZ2V0ID09PSBgJHtidWRnZXRPcHRpb25zW2tleV19Li4ke2J1ZGdldE9wdGlvbnNbYnVkZ2V0S2V5c1tpbmRleCArIDFdXX1gfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtrZXl9IGNsYXNzTmFtZT1cImN1cnNvclBcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAg4oK5IHtudW1iZXJXaXRoQ29tbWFzKGJ1ZGdldE9wdGlvbnNba2V5XSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LTggcHQwIHBiOFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZnc5IHA4IHBiMCBtYjAgcHQwIGYxNFwiPkJ1ZGdldCB7IGlzRmxpZ2h0U2VsZWN0ZWQgPyBcIldpdGhcIiA6IFwiV2l0aG91dFwiIH0gQWlyZmFyZVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZmM0IGZ3NCBmMTJcIj4gKHBlciBwZXJzb24pPC9zcGFuPjwvcD5cbiAgICAgIHtidWRnZXRGaWVsZHN9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CdWRnZXRPcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgYnVkZ2V0T3B0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFNlbGVjdGVkQnVkZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0ZsaWdodFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG5CdWRnZXRPcHRpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ2V0U2VsZWN0ZWRCdWRnZXQ6ICcnXG59O1xuXG5jb25zdCBCdWRnZXRUZXh0ID0gKHsgaGFuZGxlQ2hhbmdlLCBpc0ZsaWdodFNlbGVjdGVkLCBnZXRTZWxlY3RlZEJ1ZGdldCwgdmFsdWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJ1ZGdldC10ZXh0Ym94IHBiMTVcIj5cbiAgICA8bGFiZWwgaHRtbEZvcj1cImJ1ZGdldC10ZXh0XCIgY2xhc3NOYW1lPVwiZjE0IGZ3OSBwYjggYmxvY2sgcGZjM1wiPlxuICAgICAgQnVkZ2V0IHsgaXNGbGlnaHRTZWxlY3RlZCA/IFwiV2l0aFwiIDogXCJXaXRob3V0XCIgfSBBaXJmYXJlIDxzcGFuIGNsYXNzTmFtZT1cInBmYzQgZnc0IGYxMlwiPiAocGVyIHBlcnNvbik8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdpdGgtaWNvbi1ib3hcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvblwiPjxCdWRnZXRJY29uIC8+PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cImJ1ZGdldC10ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgYnVkZ2V0IHZhbHVlXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dldFNlbGVjdGVkQnVkZ2V0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQnVkZ2V0VGV4dC5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNGbGlnaHRTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGdldFNlbGVjdGVkQnVkZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5CdWRnZXRUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNGbGlnaHRTZWxlY3RlZDogZmFsc2UsXG4gIGdldFNlbGVjdGVkQnVkZ2V0OiAnJ1xufTtcblxuY2xhc3MgQnVkZ2V0V2l0aEFpcmZhaXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYnVkZ2V0T3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBnZXRTZWxlY3RlZEJ1ZGdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0ZsaWdodFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYnVkZ2V0T3B0aW9uczoge30sXG4gICAgZ2V0U2VsZWN0ZWRCdWRnZXQ6ICcnLFxuICAgIGlzRmxpZ2h0U2VsZWN0ZWQ6IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5pbnB1dC5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIHtcbiAgICAgICAgICAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5idWRnZXRPcHRpb25zKS5sZW5ndGggPiAwKSA/XG4gICAgICAgICAgICA8QnVkZ2V0T3B0aW9uc1xuICAgICAgICAgICAgICBidWRnZXRPcHRpb25zPXt0aGlzLnByb3BzLmJ1ZGdldE9wdGlvbnN9XG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGdldFNlbGVjdGVkQnVkZ2V0PXt0aGlzLnByb3BzLmdldFNlbGVjdGVkQnVkZ2V0fVxuICAgICAgICAgICAgICBpc0ZsaWdodFNlbGVjdGVkPXt0aGlzLnByb3BzLmlzRmxpZ2h0U2VsZWN0ZWR9IC8+IDpcbiAgICAgICAgICAgIDxCdWRnZXRUZXh0IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlzRmxpZ2h0U2VsZWN0ZWQ9e3RoaXMucHJvcHMuaXNGbGlnaHRTZWxlY3RlZH1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuaW5wdXQudmFsdWV9IC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVkZ2V0V2l0aEFpcmZhaXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEZpbHRlckNsZWFyIGZyb20gJy4vRmlsdGVyQ2xlYXInO1xuXG5mdW5jdGlvbiBnZXRTZWxjZWN0ZWRRdWVzdGlvbihxdWVzdGlvbiwgaXNEb21lc3RpYykge1xuICBjb25zdCBpbmNsdWRlU3RyID0gaXNEb21lc3RpYyA/ICdkb21lc3RpYycgOiAnaW50ZXJuYXRpb25hbCc7XG4gIGNvbnN0IHRhZ3NTdHIgPSBpc0RvbWVzdGljID8gJ2RvbWVzdGljOkVuZ2xpc2gsSGluZGknIDogJ2ludGVybmF0aW9uYWw6U2hhcmVkLFByaXZhdGUnO1xuICBsZXQgZmluYWxPcHRpb24gPSBxdWVzdGlvbi5vcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgIGlmICgob3B0aW9uLmlkID09PSAxMiB8fCBvcHRpb24uaWQgPT09IDg5KSAmJiBvcHRpb24udGFncy5pbmNsdWRlcyhpbmNsdWRlU3RyKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9KTtcbiAgZmluYWxPcHRpb24gPSBmaW5hbE9wdGlvbi5maWx0ZXIob3B0aW9uID0+IG9wdGlvbiAhPT0gLTEpO1xuICBmaW5hbE9wdGlvblswXS50YWdzID0gdGFnc1N0cjtcbiAgY29uc3Qgb3B0aW9ucyA9IGZpbmFsT3B0aW9uWzBdLnRhZ3MudG9TdHJpbmcoKS5zcGxpdCgnOicpWzFdLnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgcmV0dXJuIHtcbiAgICBxdWVzdGlvbjogZmluYWxPcHRpb24sXG4gICAgb3B0aW9uc1xuICB9O1xufVxuXG5jb25zdCBDYWJEZXBlbmRlbnRRdWVzdGlvbiA9ICh7IHF1ZXN0aW9uLCBpbnB1dCwgY29tbW9uUHJvcGVydGllcywgbmFtZUZvckNsZWFyIH0pID0+IHtcbiAgY29uc3QgaXNDaGVja2VkID0gKHZhbHVlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICBpbmRleCA9IFtpbnB1dC52YWx1ZV0uZmluZEluZGV4KG9iaiA9PlxuICAgICAgICAgIG9iai51c2VyX2lucHV0LnRvU3RyaW5nKCkgPT09IHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChpbmRleCAhPT0gLTEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJldmlzZWRRdWVzdGlvbiA9IGdldFNlbGNlY3RlZFF1ZXN0aW9uKHF1ZXN0aW9uLCBjb21tb25Qcm9wZXJ0aWVzLnByb3BlcnRpZXMgJiYgY29tbW9uUHJvcGVydGllcy5wcm9wZXJ0aWVzLmlzRG9tZXN0aWMpO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIXF1ZXN0aW9uLnVzZUlucHV0Rm9yT3B0aW9ucykge1xuICAgICAgaW5wdXQub25DaGFuZ2Uoe1xuICAgICAgICBvcHRpb25faWQ6IHJldmlzZWRRdWVzdGlvbi5xdWVzdGlvblswXS5pZC50b1N0cmluZygpLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBxdWVzdGlvbi5jdXN0b21pemF0aW9uSWQudG9TdHJpbmcoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8gOjogc2V0IHVzZXIgaW5wdXRcbiAgICAgIGlucHV0Lm9uQ2hhbmdlKHtcbiAgICAgICAgdXNlcl9pbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICBvcHRpb25faWQ6IHJldmlzZWRRdWVzdGlvbi5xdWVzdGlvblswXS5pZC50b1N0cmluZygpLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBxdWVzdGlvbi5jdXN0b21pemF0aW9uSWQudG9TdHJpbmcoKVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdG91ci10eXBlIGF0X2NhYmRlcGVuZGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpYmxvY2sgd2Z1bGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBmdzcgc2ZjNiBtMCBpYmxvY2tcIj5cbiAgICAgICAgICB7cmV2aXNlZFF1ZXN0aW9uLnF1ZXN0aW9uWzBdLm5hbWV9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEZpbHRlckNsZWFyXG4gICAgICAgICAgbmFtZT17bmFtZUZvckNsZWFyfVxuICAgICAgICAgIHRleHQ9XCJDbGVhclwiXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBpZD17YGlkXyR7bmFtZUZvckNsZWFyfWB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy04XCI+XG4gICAgICAgIHtcbiAgICAgICAgICByZXZpc2VkUXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHA4XCIga2V5PXtgJHtyZXZpc2VkUXVlc3Rpb24ucXVlc3Rpb25bMF0uaWR9XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPXtgJHtxdWVzdGlvbi5pZGVudGlmaWVyfVske2luZGV4fV1gfVxuICAgICAgICAgICAgICAgIGlkPXtgcmFkaW9fYnV0dG9uXyR7cmV2aXNlZFF1ZXN0aW9uLnF1ZXN0aW9uWzBdLmlkfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZChvcHRpb24pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPXtgcmFkaW9fYnV0dG9uXyR7cmV2aXNlZFF1ZXN0aW9uLnF1ZXN0aW9uWzBdLmlkfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yUFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtMFwiPntvcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNhYkRlcGVuZGVudFF1ZXN0aW9uLnByb3BUeXBlcyA9IHtcbiAgcXVlc3Rpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29tbW9uUHJvcGVydGllczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBuYW1lRm9yQ2xlYXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FiRGVwZW5kZW50UXVlc3Rpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgQ2FiSWNvbkZyb250XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgQ2FiZm9yU2lnaHRzZWVpbmcgPSAoeyBpbnB1dCwgcXVlc3Rpb24sIGNhYlF1ZXN0aW9uSGFuZGxlciB9KSA9PiB7XG4gIGNvbnN0IGlzQ2hlY2tlZCA9IChvcHRpb25JZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgaW5kZXggPSBbaW5wdXQudmFsdWVdLmZpbmRJbmRleChvYmogPT5cbiAgICAgICAgICBvYmoub3B0aW9uX2lkLnRvU3RyaW5nKCkgPT09IG9wdGlvbklkLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChpbmRleCAhPT0gLTEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFxdWVzdGlvbi51c2VJbnB1dEZvck9wdGlvbnMpIHtcbiAgICAgIGlucHV0Lm9uQ2hhbmdlKHtcbiAgICAgICAgb3B0aW9uX2lkOiBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgY3VzdG9taXphdGlvbl9pZDogcXVlc3Rpb24uY3VzdG9taXphdGlvbklkLnRvU3RyaW5nKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIDo6IHNldCB1c2VyIGlucHV0XG4gICAgICBpbnB1dC5vbkNoYW5nZSh7XG4gICAgICAgIHVzZXJfaW5wdXQ6ICcnLFxuICAgICAgICBvcHRpb25faWQ6IGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBxdWVzdGlvbi5jdXN0b21pemF0aW9uSWQudG9TdHJpbmcoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhYlF1ZXN0aW9uSGFuZGxlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpZ2h0LWluY2x1ZGVkIGNvbC14cy04IHByMCBwbDAgYXRfY2FiXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSByZWxhdGl2ZSBtMFwiPjxzcGFuIGNsYXNzTmFtZT1cImZsaWdodC1pY29uXCI+PENhYkljb25Gcm9udCAvPjwvc3Bhbj5cbiAgICAgICAgICB7cXVlc3Rpb24udGl0bGV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBwcjAgcGwwIHRleHQtcmlnaHQgYXRfY2FiX3JhZGlvXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcGwwIHByMFwiIGtleT17b3B0aW9uLmlkfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlnaHQtcmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e2Ake3F1ZXN0aW9uLmlkZW50aWZpZXJ9WyR7aW5kZXh9XWB9XG4gICAgICAgICAgICAgICAgaWQ9e2ByYWRpb19idXR0b25fJHtvcHRpb24uaWR9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLmlkfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZChvcHRpb24uaWQpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgcmFkaW9fYnV0dG9uXyR7b3B0aW9uLmlkfV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cImN1cnNvclAgcHI4IHBsOFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIHBmYzQgZjEyIGZ3NCB0ZXh0LXVwcGVyY2FzZVwiPntvcHRpb24ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FiZm9yU2lnaHRzZWVpbmcucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjYWJRdWVzdGlvbkhhbmRsZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5DYWJmb3JTaWdodHNlZWluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhYlF1ZXN0aW9uSGFuZGxlcjogKCkgPT4ge31cbn07XG5leHBvcnQgZGVmYXVsdCBDYWJmb3JTaWdodHNlZWluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuY29uc3QgRmlsdGVyQ2xlYXJCdXR0b24gPSAoeyBpbnB1dCwgdHlwZSwgdGV4dCwgaWQgfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9XCJpYmxvY2sgZnJpZ2h0XCI+XG4gICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gY2xhc3NOYW1lPVwiaGlkZVwiIGlkPXtpZH0gdmFsdWU9XCJcIiAvPlxuICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPVwiY3Vyc29yUCBtYjBcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgcGZjNCBmdzQgY3Vyc29yUCBwdDEgZjEyIG1iMFwiPnt0ZXh0fSA8L2xhYmVsPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PjtcblxuRmlsdGVyQ2xlYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuRmlsdGVyQ2xlYXJCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBpbnB1dDoge30sXG4gIHR5cGU6ICdyYWRpbycsXG4gIHRleHQ6ICdDbGVhcidcbn07XG5cbmNvbnN0IEZpbHRlckNsZWFyID0gKHsgbmFtZSwgdHlwZSwgdGV4dCwgaWQgfSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9XCJpYmxvY2sgZnJpZ2h0XCI+XG4gICAgPEZpZWxkXG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgY29tcG9uZW50PXtGaWx0ZXJDbGVhckJ1dHRvbn1cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICB0ZXh0PXt0ZXh0fVxuICAgICAgaWQ9e2lkfVxuICAgIC8+XG4gIDwvZGl2PjtcblxuRmlsdGVyQ2xlYXIucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDbGVhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgRmxpZ2h0c1xufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNsYXNzIEZsaWdodEJvb2tpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNoZWNrSW5pdGlhbFZhbHVlcyA9IHRoaXMuY2hlY2tJbml0aWFsVmFsdWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWQ6IHRoaXMuY2hlY2tJbml0aWFsVmFsdWVzKClcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tJbml0aWFsVmFsdWVzKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5mb3JtVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGZsaWdodEFuc3dlckF0dHJpYnV0ZXMgPSB0aGlzLnByb3BzLmZvcm1WYWx1ZXMuZmxpZ2h0X2Fuc3dlcl9hdHRyaWJ1dGVzO1xuICAgICAgICBpZiAoZmxpZ2h0QW5zd2VyQXR0cmlidXRlcyAmJiBmbGlnaHRBbnN3ZXJBdHRyaWJ1dGVzLm9wdGlvbklkKSB7XG4gICAgICAgICAgcmV0dXJuIGZsaWdodEFuc3dlckF0dHJpYnV0ZXMub3B0aW9uSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaXNDaGVja2VkKG9wdGlvbklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGluZGV4ID0gW3RoaXMucHJvcHMuaW5wdXQudmFsdWVdLmZpbmRJbmRleChvYmogPT5cbiAgICAgICAgICBvYmoub3B0aW9uX2lkLnRvU3RyaW5nKCkgPT09IG9wdGlvbklkLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChpbmRleCAhPT0gLTEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmlucHV0Lm9uQ2hhbmdlKHsgb3B0aW9uX2lkOiBldmVudC50YXJnZXQudmFsdWUsIGN1c3RvbWl6YXRpb25faWQ6ICcyMycgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpZ2h0LWluY2x1ZGVkIGNvbC14cy04IHByMCBwbDBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdzkgcmVsYXRpdmUgbTBcIj48c3BhbiBjbGFzc05hbWU9XCJmbGlnaHQtaWNvblwiPjxGbGlnaHRzIC8+PC9zcGFuPkZsaWdodHMgVG8gQmUgSW5jbHVkZWQ/PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBwcjAgcGwwIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHBsMCBwcjBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlnaHQtcmFkaW8gaGlkZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXN0XzIzXCJcbiAgICAgICAgICAgICAgaWQ9XCJmbGlnaHQtaW5jbHVkZWQxXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCI5N1wiXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnOTcnfVxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmlzQ2hlY2tlZCg5Nyl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsaWdodC1pbmNsdWRlZDFcIiBjbGFzc05hbWU9XCJjdXJzb3JQIHByOCBwbDhcIj48cCBjbGFzc05hbWU9XCJtMCBwZmM0IGZ3NCBmMTJcIj5ZRVM8L3A+PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHBsMCBwcjBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlnaHQtcmFkaW8gaGlkZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXN0XzIzXCJcbiAgICAgICAgICAgICAgaWQ9XCJmbGlnaHQtaW5jbHVkZWQyXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCI5OFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnOTgnfVxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmlzQ2hlY2tlZCg5OCl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsaWdodC1pbmNsdWRlZDJcIiBjbGFzc05hbWU9XCJjdXJzb3JQIHByOCBwbDhcIj48cCBjbGFzc05hbWU9XCJtMCBwZmM0IGZ3NCBmMTJcIj5OTzwvcD48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmxpZ2h0Qm9va2luZy5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbkZsaWdodEJvb2tpbmcuZGVmYXVsdFByb3BzID0ge1xuICBmb3JtVmFsdWVzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0Qm9va2luZztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzLCBxdW90ZXMsIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRnJvbUxvY2F0aW9uIGZyb20gJy4uL0Zyb21Mb2NhdGlvbic7XG5pbXBvcnQgRnJvbUxvY2F0aW9uU2VhcmNoIGZyb20gJy4uL0Zyb21Mb2NhdGlvblNlYXJjaCc7XG5pbXBvcnQgRGVwYXJ0dXJlRGF0ZUZvcm1PbmUgZnJvbSAnLi4vRGVwYXJ0dXJlRGF0ZUZvcm1PbmUnO1xuaW1wb3J0IHsgU0xJREVSXzIsIFNMSURFUl8xLCBERUFMUyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvU2xpZGVyXCI7XG5pbXBvcnQgSXNkQ29kZXMgZnJvbSAnLi4vLi4vR2VuZXJpYy9Jc2RDb2Rlcyc7XG5cbmltcG9ydCAnLi9MZWFkRm9ybS5zY3NzJztcblxuaW1wb3J0IHtcbiAgTG9jYXRpb25NYXJrZXJJY29uLFxuICBDb250YWN0SWNvbixcbiAgQ2FsZW5kYXJJY29uLFxuICBEb3duQXJyb3csXG4gIExvY2tJY29uLFxuICBXaGF0c0FwcEljb25cbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQge1xuICByZXF1aXJlZCxcbiAgZW1haWwsXG4gIHBob25lTnVtYmVyLFxuICByZXF1aXJlZFdpdGhtZXNzYWdlXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Zvcm1WYWxpZGF0b3JzJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRvTG9jYXRpb24gPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IsIHdhcm5pbmcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub0xvY0ZvY3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCbHVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gIGNvbnN0IGlucHV0UHJvcHMgPSB7XG4gICAgdmFsdWU6IGlucHV0LnZhbHVlLFxuICAgIHBsYWNlaG9sZGVyOiBcIldoZXJlIERvIFlvdSBXYW50IFRvIEdvP1wiLFxuICAgIG9uQ2hhbmdlOiAob2JqLCBjaGVjayA9IHRydWUpID0+IHtcbiAgICAgIGlucHV0Lm9uQ2hhbmdlKG9iaik7XG4gICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVCbHVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpZDogaW5wdXQuaWQsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQtbGFiZWxcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtsYWJlbH0gY2xhc3NOYW1lPVwiZjE0IGZ3OSBwYjE1IGJsb2NrXCI+XG4gICAgICAgIHtsYWJlbH08ZW0gY2xhc3NOYW1lPSdwZmMyJz4qPC9lbT5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW5wdXQtd2l0aC1pY29uLWJveCBpbnB1dC13aXRoLWljb24tYm94ICR7dG91Y2hlZCAmJiAoZXJyb3IgJiYgXCJpbnB1dC1lcnJvclwiKX1gfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1pY29uIGZsZXhDZW50ZXIgbG9jYXRpb25JY29uU2l6ZVwiPjxMb2NhdGlvbk1hcmtlckljb24gLz48L3NwYW4+XG4gICAgICAgICAgPEZyb21Mb2NhdGlvblNlYXJjaFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtpbnB1dC52YWx1ZX0gaXRlbVNlbGVjdGVkPXtpbnB1dC5vbkNoYW5nZX1cbiAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ9e3RyYWNrRm9ybU9uZUludGVyYWN0ZWR9XG4gICAgICAgICAgICBoYW5kbGVGb2N1cz17b25Ub0xvY0ZvY3VzfVxuICAgICAgICAgICAgaWQ9XCJ0b0xvY2F0aW9uX2ZuZXdcIlxuICAgICAgICAgICAgaGFuZGxlQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RvdWNoZWQgJiYgKGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHQgaW5wdXQtZXJyb3ItdGV4dFwiPntlcnJvcn08L3NwYW4+KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5leHBvcnQgY29uc3QgcmVuZGVyRW1haWwgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhOiB7IHRvdWNoZWQsIGVycm9yLCB3YXJuaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja0Zvcm1PbmVJbnRlcmFjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsVmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZpZWxkLWxhYmVsIG1iMTUgcm93IHJvdy1cIj5cbiAgICA8bGFiZWwgaHRtbEZvcj17bGFiZWx9IGNsYXNzTmFtZT1cImYxNCBmdzkgcGI4IGJsb2NrXCI+XG4gICAgICB7bGFiZWx9XG4gICAgICA8ZW0gY2xhc3NOYW1lPVwicGZjMlwiPio8L2VtPlxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13aXRoLWljb24tYm94IHJvdyByb3ctIGlucHV0LXdpdGgtaWNvbi1ib3hcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWljb25cIj5cbiAgICAgICAgPENvbnRhY3RJY29uIC8+XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJlbWFpbF9mbmV3XCJcbiAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgJHt0b3VjaGVkICYmIChlcnJvciAmJiAnaW5wdXQtZXJyb3InKX1gfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbCBJZFwiXG4gICAgICAgIG9uQ2xpY2s9e3RyYWNrRm9ybU9uZUludGVyYWN0ZWR9XG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICB2YWx1ZT17ZW1haWxWYWx9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIHt0b3VjaGVkICYmIChlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+e2Vycm9yfTwvc3Bhbj4pfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQaG9uZSA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IsIHdhcm5pbmcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQtbGFiZWxcIj5cbiAgICA8bGFiZWwgaHRtbEZvcj17bGFiZWx9IGNsYXNzTmFtZT1cImYxNCBmdzkgcGI4IGJsb2NrXCI+XG4gICAgICB7bGFiZWx9XG4gICAgICA8ZW0gY2xhc3NOYW1lPVwicGZjMlwiPio8L2VtPlxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTMgcGwwIHByMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWNvbiBpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiaXNkX2NvZGVcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0lzZENvZGVzfVxuICAgICAgICAgICAgICB0eXBlPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZD17dHJhY2tGb3JtT25lSW50ZXJhY3RlZH1cbiAgICAgICAgICAgICAgaWQ9XCJpc2RfY29kZV9mbmV3XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicjEwIGJsb2NrIHdhdXRvIGxhdXRvIGlucHV0LWljb24gYWJzb2x1dGUtY2VudGVyLXYgZG93bkFycm93XCI+XG4gICAgICAgICAgICAgIDxEb3duQXJyb3cgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLXhzLTkgcHIwICR7aXNGb2N1cyA/ICcnIDogJyd9YH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInBob25lX25vX2ZuZXdcIlxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0IGlucHV0LXdpdGgtaWNvbi1ib3ggJHt0b3VjaGVkICYmIChlcnJvciAmJiAnaW5wdXQtZXJyb3InKX1gfVxuICAgICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOb1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0cmFja0Zvcm1PbmVJbnRlcmFjdGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAge3RvdWNoZWQgJiZcbiAgICAoKGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57ZXJyb3J9PC9zcGFuPikgfHxcbiAgICAgICh3YXJuaW5nICYmIDxzcGFuPnt3YXJuaW5nfTwvc3Bhbj4pKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJpY0NoZWNrYm94ID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQgPSAoKSA9PiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uIGNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRyYWNrRm9ybU9uZUludGVyYWN0ZWQoKX1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT1cImYxMiBwdDggcGIwXCI+XG4gICAgICAgIHtpZCA9PT0gJ3doYXRzYXBwX29wdF9zdGF0dXMnID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsSWNvblwiPlxuICAgICAgICAgICAgPFdoYXRzQXBwSWNvbiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9eycgJ31cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGRlZmF1bHRGaWVsZHMgPSAoeyBpbnB1dCB9KSA9PlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4uaW5wdXR9IC8+O1xuXG5jbGFzcyBGb3JtT25lVmFyaWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGludGVyYWN0aW9uQ291bnQ6IDEsXG4gICAgICBlbWFpbDogcHJvcHMuZW1haWwgPyBwcm9wcy5lbWFpbCA6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsRm9ybUludGVyYWN0aW9uID0gdGhpcy5oYW5kbEZvcm1JbnRlcmFjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Ub0xvY0ZvY3VzID0gdGhpcy5vblRvTG9jRm9jdXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmVtYWlsKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHRoaXMucHJvcHMuZW1haWwsICdlbWFpbCcpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9Mb2NGb2N1cygpIHtcbiAgICBjb25zdCB0b0xvYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0xvY2F0aW9uX2ZuZXcnKTtcbiAgICBjb25zdCB0b0xvY1Njcm9sbCA9IHRvTG9jLm9mZnNldFRvcDtcbiAgICBjb25zdCB0b0xvY1BvcyA9IHRvTG9jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG4gICAgY29uc3QgdG9Mb2NBZGQgPSB0b0xvY1BvcyAtIHRvTG9jU2Nyb2xsO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b0xvY0FkZCk7XG4gIH1cblxuICBoYW5kbEZvcm1JbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnRlcmFjdGlvbkNvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrRm9ybU9uZUludGVyYWN0ZWQoe1xuICAgICAgICBmdW5uZWxfc3RlcDogMyxcbiAgICAgICAgc2VjdGlvbjogJ0Zvcm0gMScsXG4gICAgICAgIGZ1bm5lbF91dWlkOiB0aGlzLnByb3BzLmZ1bm5lbF91dWlkLFxuICAgICAgICB0b19sb2M6IHRoaXMucHJvcHMucnREYXRhICYmIHRoaXMucHJvcHMucnREYXRhLnRvX2xvYyA/XG4gICAgICAgICAgdGhpcy5wcm9wcy5ydERhdGEudG9fbG9jIDogdGhpcy5wcm9wcy5mb3JtVmFsdWVzICYmIHRoaXMucHJvcHMuZm9ybVZhbHVlcy50b19sb2MgP1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtVmFsdWVzLnRvX2xvYyA6ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnRlcmFjdGlvbkNvdW50OiB0aGlzLnN0YXRlLmludGVyYWN0aW9uQ291bnQgKyAxXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjYWxsTmV4dEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2NhdGlvbjogeyBxdWVyeSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChxdWVyeS5kZWFscykge1xuICAgICAgdGhpcy5wcm9wcy5hc3luVmFsaWRhdGUoXG4gICAgICAgIHRoaXMucHJvcHMuZm9ybVZhbHVlcyxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgU0xJREVSXzEsXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWUsXG4gICAgICAgIERFQUxTXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmFzeW5WYWxpZGF0ZShcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtVmFsdWVzLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgU0xJREVSXzIsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvY2F0aW9uOiB7IHF1ZXJ5IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNEZWFsID0gcXVlcnkuZGVhbHMgfHwgZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJmb3JtLXZhcmlhdGlvblwiIGNsYXNzTmFtZT1cImZvcm0tdmFyaWF0aW9uIHJvdyByb3ctXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgYmctcHJvZ3Jlc3MtZGl2XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJiZy1wcm9ncmVzc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0MCBsMCBzYmN3IHdmdWxsIGJnLXByb2dyZXNzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0IGZvcm0tZmllbGQtaW5jbC1sYWJlbCBwMTUgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwidG9fbG9jXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtyZW5kZXJUb0xvY2F0aW9ufVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlRvXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkV2l0aG1lc3NhZ2UoJ2VudGVyIGNvcnJlY3QgY2l0eSBuYW1lJyl9XG4gICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ9e3RoaXMuaGFuZGxGb3JtSW50ZXJhY3Rpb259XG4gICAgICAgICAgICAgIG9uVG9Mb2NGb2N1cz17dGhpcy5vblRvTG9jRm9jdXN9XG4gICAgICAgICAgICAgIGhhbmRsZUJsdXI9e3RoaXMucHJvcHMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG1iMTVcIj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImV4cGxvcmluZ19kZXN0aW5hdGlvbnNcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Z2VuZXJpY0NoZWNrYm94fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJIGFtIGV4cGxvcmluZyBkZXN0aW5hdGlvbnNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vbiBzZmN3XCJcbiAgICAgICAgICAgICAgICBpZD1cImV4cGxvcmluZy1kZXN0aW5hdGlvbl9mbmV3XCJcbiAgICAgICAgICAgICAgICB0cmFja0Zvcm1PbmVJbnRlcmFjdGVkPXt0aGlzLmhhbmRsRm9ybUludGVyYWN0aW9ufVxuICAgICAgICAgICAgICAgIGNsYXNzbmFtZT1cImV4cGxvcmluZy1kZXN0aW5hdGlvbiBhdF9leHBsb3JlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwiZnJvbUxvY2F0aW9uX2ZuZXdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmcm9tX2xvY1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RnJvbUxvY2F0aW9ufVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZyb21cIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRnJvbVwiXG4gICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ9e3RoaXMuaGFuZGxGb3JtSW50ZXJhY3Rpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0IHAxNSBtYjEgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0X2RhdGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGVwYXJ0dXJlRGF0ZUZvcm1PbmV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJERCAvIE1NIC8gWVlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlcGFydHVyZSBEYXRlXCJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbj17dGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbn1cbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgZGF5cz17dGhpcy5wcm9wcy5kYXlzfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZFdpdGhtZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgJ1BsZWFzZSBzZWxlY3QgT25lIERhdGUtdHlwZSdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ9e3RoaXMuaGFuZGxGb3JtSW50ZXJhY3Rpb259XG4gICAgICAgICAgICAgICAgcnREYXRhPXt0aGlzLnByb3BzLnJ0RGF0YX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0IHAxNSBtYjAgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckVtYWlsfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBJRFwiXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtbXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRXaXRobWVzc2FnZSgnRW50ZXIgdmFsaWQgZW1haWwgaWQnKSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZD17dGhpcy5oYW5kbEZvcm1JbnRlcmFjdGlvbn1cbiAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUVtYWlsQ2hhbmdlKCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGVtYWlsVmFsPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVfbm9cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlclBob25lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lXCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTm9cIlxuICAgICAgICAgICAgICB2YWxpZGF0ZT17cGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ9e3RoaXMuaGFuZGxGb3JtSW50ZXJhY3Rpb259XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtVmFsdWVzICYmIHRoaXMucHJvcHMuZm9ybVZhbHVlcy5pc2RfY29kZVxuICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmZvcm1WYWx1ZXMuaXNkX2NvZGVcbiAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwid2hhdHNhcHBfb3B0X3N0YXR1c1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Z2VuZXJpY0NoZWNrYm94fVxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlbmQgdHJpcCB1cGRhdGVzIG9uIFdoYXRzQXBwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uIHNmY3dcIlxuICAgICAgICAgICAgICBpZD1cIndoYXRzYXBwX29wdF9zdGF0dXNcIlxuICAgICAgICAgICAgICB0cmFja0Zvcm1PbmVJbnRlcmFjdGVkPXt0aGlzLmhhbmRsRm9ybUludGVyYWN0aW9ufVxuICAgICAgICAgICAgICBjbGFzc25hbWU9XCJhdF93aGF0c2FwcF9vcHRfc3RhdHVzXCJcbiAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwic3RhcnRfZGF0ZV9mbGV4aWJsZVwiIGNvbXBvbmVudD17ZGVmYXVsdEZpZWxkc30gLz5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYm9va2VkX3RpY2tldHNcIiBjb21wb25lbnQ9e2RlZmF1bHRGaWVsZHN9IC8+XG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cInRyaXBfZGF5c1wiIGNvbXBvbmVudD17ZGVmYXVsdEZpZWxkc30gLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBjb21wb25lbnQ9e2RlZmF1bHRGaWVsZHN9XG4gICAgICAgICAgICAgIG5hbWU9XCJkb250X3V0aWxpemVfYnVkZ2V0X25ld1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkIGNvbXBvbmVudD17ZGVmYXVsdEZpZWxkc30gbmFtZT1cImJ1ZGdldF9uZXdcIiAvPlxuICAgICAgICAgICAgPEZpZWxkIGNvbXBvbmVudD17ZGVmYXVsdEZpZWxkc30gbmFtZT1cInN0YXJ0X2RhdGVfbm9pZGVhXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHA4IHB0MCBzYmN3IGhpZGVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10MCBtYjAgbWxhdXRvIG1yYXV0byByZWxhdGl2ZSBwbDQ4IHB0OCBwYjggcHIwIGlibG9ja1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3MjAgaDIwIG1yOCBhYnNvbHV0ZSBsOCB0MiBpYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8TG9ja0ljb24gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICBZb3VyIGluZm9ybWF0aW9uIHdpbGwgYmUga2VwdCBjb25maWRlbnRpYWxcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHNiY3cgd2Z1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcDE1IHB0MCBzYmN3XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBpZD1cInN1Ym1pdF9idG5fZm5ld1wiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZVN1Ym1pdEJ1dHRvbn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCByaXBwbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2FsbE5leHRGb3JtKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmVcIiAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRpc2FibGVTdWJtaXRCdXR0b24gPyAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLWRvdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZy1kb3QtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmctZG90LTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nLWRvdC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApIDogaXNEZWFsID8gKCdDaGVjayBBdmFpbGFiaWxpdHknKSA6IChcbiAgICAgICAgICAgICAgICAgICdSZXF1ZXN0IFF1b3RlcydcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1oZWFkZXItZGl2IGhpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2dyZXNzLWhlYWRlclwiIGNsYXNzTmFtZT1cInByb2dyZXNzLWhlYWRlclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkZvcm1PbmVWYXJpYXRpb24ucHJvcFR5cGVzID0ge1xuICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlVGhhbmtZb3U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJ0RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaGFuZGxlQmx1cjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRW1haWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5Gb3JtT25lVmFyaWF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgcnREYXRhOiB7fSxcbiAgZW1haWw6ICcnLFxuICBmb3JtVmFsdWVzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybU9uZVZhcmlhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBob3RlbFByZWZDdXN0b21pemF0aW9ucyA9IHtcbiAgc3RhcjI6IDMyLFxuICBzdGFyMzogOCxcbiAgc3RhcjQ6IDcsXG4gIHN0YXI1OiA2LFxuICBub0hvdGVsOiA5NixcbiAgY3VzdG9taXphdGlvbklkOiAyLFxuICBub0hvdGVsQ3VzdG9taXphdGlvbklkOiAyMlxufTtcblxuY2xhc3MgSG90ZWxSYXRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG90ZWxzOiB7XG4gICAgICAgIHN0YXIyOiBmYWxzZSxcbiAgICAgICAgc3RhcjM6IGZhbHNlLFxuICAgICAgICBzdGFyNDogZmFsc2UsXG4gICAgICAgIHN0YXI1OiBmYWxzZSxcbiAgICAgICAgbm9Ib3RlbDogZmFsc2VcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRIb3RlbFByZWZzID0gdGhpcy5nZXRIb3RlbFByZWZzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0luaXRpYWxWYWx1ZXMgPSB0aGlzLmNoZWNrSW5pdGlhbFZhbHVlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tJbml0aWFsVmFsdWVzKHByb3BzLmZvcm1WYWx1ZXMpO1xuICB9XG5cbiAgZ2V0SG90ZWxQcmVmcygpIHtcbiAgICBsZXQgaXNIb3RlbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgY29uc3QgcmV0VmFsdWUgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmhvdGVscylcbiAgICAgIC5maWx0ZXIoaG90ZWxTdGFyID0+IHRoaXMuc3RhdGUuaG90ZWxzW2hvdGVsU3Rhcl0pXG4gICAgICAubWFwKChob3RlbFN0YXIpID0+IHtcbiAgICAgICAgY29uc3QgY3VzdG9taXphdGlvbklkID0gaG90ZWxQcmVmQ3VzdG9taXphdGlvbnMuY3VzdG9taXphdGlvbklkO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaG90ZWxzLm5vSG90ZWwpIHtcbiAgICAgICAgICBpc0hvdGVsU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcHRpb25faWQ6IGhvdGVsUHJlZkN1c3RvbWl6YXRpb25zW2hvdGVsU3Rhcl0udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGN1c3RvbWl6YXRpb25faWQ6IGN1c3RvbWl6YXRpb25JZC50b1N0cmluZygpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgICB9KTtcbiAgICBpZiAoaXNIb3RlbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHtcbiAgICAgICAgb3B0aW9uX2lkOiAnOTUnLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBob3RlbFByZWZDdXN0b21pemF0aW9ucy5ub0hvdGVsQ3VzdG9taXphdGlvbklkLnRvU3RyaW5nKClcbiAgICAgIH0sICdob3RlbF9uZWVkZWRfYW5zd2VyX2F0dHJpYnV0ZXMnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaG90ZWxzLm5vSG90ZWwpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oJycsICdidWRnZXQnKTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oe1xuICAgICAgICBvcHRpb25faWQ6ICc5NicsXG4gICAgICAgIGN1c3RvbWl6YXRpb25faWQ6IGhvdGVsUHJlZkN1c3RvbWl6YXRpb25zLm5vSG90ZWxDdXN0b21pemF0aW9uSWQudG9TdHJpbmcoKVxuICAgICAgfSwgJ2hvdGVsX25lZWRlZF9hbnN3ZXJfYXR0cmlidXRlcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKCcnLCAnaG90ZWxfbmVlZGVkX2Fuc3dlcl9hdHRyaWJ1dGVzJyk7XG4gICAgfVxuICAgIGlmIChyZXRWYWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiByZXRWYWx1ZTtcbiAgfVxuXG4gIGNoZWNrSW5pdGlhbFZhbHVlcyhmb3JtVmFsdWVzKSB7XG4gICAgY29uc3QgaG90ZWxBdHRyaWJ1dGVzID0gZm9ybVZhbHVlcy5ob3RlbF9jYXRlZ29yeV9hbnN3ZXJzX2F0dHJpYnV0ZXMgfHwgW107XG4gICAgY29uc3QgYW5zd2VyQXR0cmlidXRlcyA9IGZvcm1WYWx1ZXMuaG90ZWxfbmVlZGVkX2Fuc3dlcl9hdHRyaWJ1dGVzIHx8IHt9O1xuICAgIGhvdGVsQXR0cmlidXRlcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmoub3B0aW9uX2lkID09PSBob3RlbFByZWZDdXN0b21pemF0aW9ucy5zdGFyMi50b1N0cmluZygpKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBob3RlbHM6IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaG90ZWxzLFxuICAgICAgICAgICAgc3RhcjI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKG9iai5vcHRpb25faWQgPT09IGhvdGVsUHJlZkN1c3RvbWl6YXRpb25zLnN0YXIzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIGhvdGVsczoge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5ob3RlbHMsXG4gICAgICAgICAgICBzdGFyMzogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAob2JqLm9wdGlvbl9pZCA9PT0gaG90ZWxQcmVmQ3VzdG9taXphdGlvbnMuc3RhcjQudG9TdHJpbmcoKSkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgaG90ZWxzOiB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmhvdGVscyxcbiAgICAgICAgICAgIHN0YXI0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChvYmoub3B0aW9uX2lkID09PSBob3RlbFByZWZDdXN0b21pemF0aW9ucy5zdGFyNS50b1N0cmluZygpKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBob3RlbHM6IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaG90ZWxzLFxuICAgICAgICAgICAgc3RhcjU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGFuc3dlckF0dHJpYnV0ZXMub3B0aW9uX2lkID09PSAnOTYnKSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICBob3RlbHM6IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmhvdGVscyxcbiAgICAgICAgICBub0hvdGVsOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgaG90ZWxQcmVmcyA9IHt9O1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSAnbm9Ib3RlbCcpIHtcbiAgICAgICAgaG90ZWxQcmVmcy5zdGFyMiA9IGZhbHNlO1xuICAgICAgICBob3RlbFByZWZzLnN0YXIzID0gZmFsc2U7XG4gICAgICAgIGhvdGVsUHJlZnMuc3RhcjQgPSBmYWxzZTtcbiAgICAgICAgaG90ZWxQcmVmcy5zdGFyNSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaG90ZWxQcmVmcy5ub0hvdGVsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaG90ZWxzOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuaG90ZWxzLFxuICAgICAgICAuLi5ob3RlbFByZWZzLFxuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZFxuICAgICAgfVxuICAgIH0sICgpID0+IHsgdGhpcy5wcm9wcy5pbnB1dC5vbkNoYW5nZSh0aGlzLmdldEhvdGVsUHJlZnMoKSk7IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdGVscmF0aW5nRGl2IGF0X2hvdGVscmF0aW5nZGl2XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBpYmxvY2sgbTAgcGZjM1wiPlByZWZlcnJlZCBIb3RlbCBDYXRlZ29yeVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBmYzQgZnc0IGYxMlwiPiAoUmF0aW5nKTwvc3Bhbj5cbiAgICAgICAgICA8ZW0gY2xhc3NOYW1lPVwicGZjMiBmMTYgZndiXCI+KjwvZW0+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBuYW1lPVwibm9Ib3RlbFwiXG4gICAgICAgICAgaWQ9XCJOby1ob3RlbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiTm8taG90ZWwtaW5wdXQgaGlkZVwiXG4gICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5ob3RlbHMubm9Ib3RlbH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiTm8taG90ZWxcIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgcGZjNCBpYmxvY2sgZnJpZ2h0IGZ3NCBjdXJzb3JQIHB0MyBmMTIgYXRfbm9ob3RlbCBtYjBcIj5ObyBIb3RlbDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGZjM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTMgcDBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cImhvdGVsLWNoZWNrYm94NVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGFyNVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5ob3RlbHMuc3RhcjV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob3RlbC1jaGVja2JveDVcIiBjbGFzc05hbWU9XCJjdXJzb3JQXCI+NSBTdGFyPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zIHAwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJob3RlbC1jaGVja2JveDRcIlxuICAgICAgICAgICAgICBuYW1lPVwic3RhcjRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveC1jb21tb25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaG90ZWxzLnN0YXI0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG90ZWwtY2hlY2tib3g0XCIgY2xhc3NOYW1lPVwiY3Vyc29yUFwiPjQgU3RhcjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMyBwMFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGlkPVwiaG90ZWwtY2hlY2tib3gzXCJcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXIzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmhvdGVscy5zdGFyM31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvdGVsLWNoZWNrYm94M1wiIGNsYXNzTmFtZT1cImN1cnNvclBcIj4zIFN0YXI8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTMgcDBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cImhvdGVsLWNoZWNrYm94MlwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGFyMlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5ob3RlbHMuc3RhcjJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob3RlbC1jaGVja2JveDJcIiBjbGFzc05hbWU9XCJjdXJzb3JQXCI+MiBTdGFyPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1ldGFcbiAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5tZXRhLnRvdWNoZWRcbiAgICAgICAgICAgICAgJiYgKHRoaXMucHJvcHMubWV0YS5lcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+e3RoaXMucHJvcHMubWV0YS5lcnJvcn08L3NwYW4+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5Ib3RlbFJhdGluZy5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG1ldGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGlzcGF0Y2hSeEZvcm1BY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbkhvdGVsUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybVZhbHVlczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsUmF0aW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybS1oZWFkZXJcIjogXCJfSjF5cDdcIixcblx0XCJoZWFkZXItbG9nby1yaWdodFwiOiBcIl8zaWhZOVwiLFxuXHRcImZvcm0tcGFydFwiOiBcIl8xSVVfWFwiLFxuXHRcImZsaWdodC1yYWRpb1wiOiBcIl8xcFZ6SlwiLFxuXHRcImZsaWdodC1pbmNsdWRlZFwiOiBcIl8zS0J6clwiLFxuXHRcImZsaWdodC1pY29uXCI6IFwiXzJvSTdwXCIsXG5cdFwiZmxpZ2h0LWluY2x1ZGVkLWNvblwiOiBcIl8xdGgtSlwiLFxuXHRcImZvcm0tdmFyaWF0aW9uXCI6IFwiX3JoamhBXCIsXG5cdFwiZm9ybS1maWVsZC1pbmNsLWxhYmVsXCI6IFwiXy1vbkZVXCIsXG5cdFwiZm9ybS1maWVsZC1sYWJlbFwiOiBcIl8yUWRtb1wiLFxuXHRcImlucHV0LWVycm9yLXRleHRcIjogXCJfMzRkWDJcIixcblx0XCJpbnB1dC1lcnJvclwiOiBcIl91ZlhBc1wiLFxuXHRcImV4cGxvcmluZy1kZXN0aW5hdGlvblwiOiBcIl8xN0otZlwiLFxuXHRcImNoZWNrYm94LWNvbW1vblwiOiBcIl8zcEM4ZlwiLFxuXHRcImJvb2tlZC10aWNrZXRcIjogXCJfM1UzamhcIixcblx0XCJwcm9ncmVzcy1oZWFkZXItZGl2XCI6IFwiXzJUWnB6XCIsXG5cdFwicHJvZ3Jlc3MtaGVhZGVyXCI6IFwiX3JfRVdjXCIsXG5cdFwiYmctcHJvZ3Jlc3MtZGl2XCI6IFwiXzFkWVhoXCIsXG5cdFwiYmctcHJvZ3Jlc3NcIjogXCJfMTlqcVRcIixcblx0XCJpbnB1dC13aXRoLWljb24tYm94XCI6IFwiXy1LbjFNXCIsXG5cdFwibGVhZC1mb3JtLXRyYW5zZm9ybVwiOiBcIl8zYUI5U1wiLFxuXHRcImljb25TaXplXCI6IFwiXzJ3aUw3XCIsXG5cdFwibG9jYXRpb25JY29uU2l6ZVwiOiBcIl8yRXJWVFwiLFxuXHRcInByb2ZpbGVDb25cIjogXCJfR3J4QjVcIixcblx0XCJOby1ob3RlbC1pbnB1dFwiOiBcIl9IQjQ3a1wiLFxuXHRcImF0X3doYXRzYXBwX29wdF9zdGF0dXNcIjogXCJfUlZycGhcIixcblx0XCJsYWJlbEljb25cIjogXCJfMjlPUWFcIixcblx0XCJkaXNhYmxlZFwiOiBcIl8zU05wU1wiLFxuXHRcImxvY2F0aW9uX2xvZ29cIjogXCJfc2VLNGNcIixcblx0XCJjb250YWN0X2ljb25cIjogXCJfMzF5RFdcIixcblx0XCJsb2NhdGlvbl9oZWFkaW5nXCI6IFwiXzNsZkZ4XCIsXG5cdFwidjJsLXZhcmlhdGlvbi0xXCI6IFwiX3BzNU11XCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IExlYWRGb3JtU3VibWl0QnV0dG9uID0gKHsgaGFuZGxlQ2xpY2sgfSkgPT4gKFxuICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHR5cGU9XCJzdWJtaXRcIlxuICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ0biBmcmlnaHQgYnRuLWZpbGxlZC1wcmktbGFyZ2UgcmFkaXVzMiBwdDE1IHBiMTUgd2Z1bGwgYXRfbGVhZGZvcm1zdWJtaXRidG5cIj5TdWJtaXRcbiAgICA8L2J1dHRvbj5cbik7XG5cbkxlYWRGb3JtU3VibWl0QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5MZWFkRm9ybVN1Ym1pdEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGVhZEZvcm1TdWJtaXRCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDYWJmb3JTaWdodHNlZWluZyBmcm9tICcuL0NhYmZvclNpZ2h0c2VlaW5nJztcbmltcG9ydCBUeXBlVG91ciBmcm9tICcuL1R5cGVUb3VyJztcbmltcG9ydCBDYWJEZXBlbmRlbnRRdWVzdGlvbiBmcm9tICcuL0NhYkRlcGVuZGVudFF1ZXN0aW9uJztcbmltcG9ydCBMb2NhbEV4cGVyaWVuY2UgZnJvbSAnLi9Mb2NhbEV4cGVyaWVuY2UnO1xuaW1wb3J0IExlYWRGb3JtU3VibWl0QnV0dG9uIGZyb20gJy4vTGVhZEZvcm1TdWJtaXRCdXR0b24nO1xuaW1wb3J0IEFkZGl0aW9uYWxQcmVmcmVuY2VzIGZyb20gJy4vQWRkaXRpb25hbFByZWZyZW5jZXMnO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi9CYWNrQnV0dG9uJztcbmltcG9ydCB7IFNMSURFUl8yLCBTRVRfRElTUExBWV9NT0RFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL1NsaWRlcic7XG5pbXBvcnQgeyBnZXROYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL3JlZHVjZXJzL2Zvcm1PbmVMZWFkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9ucyhzbGlkZXJRdWVzdGlvbnMsIHRvRGVzdGluYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZWZhdWx0UXMgPSBbLi4uc2xpZGVyUXVlc3Rpb25zLmRlZmF1bHRMYXN0Q2FyZFF1ZXN0aW9uc1swXS5xdWVzdGlvbnMsXG4gICAgICAuLi5zbGlkZXJRdWVzdGlvbnMuZGVzdGluYXRpb25DYXJkUXVlc3Rpb25zW3RvRGVzdGluYXRpb24udG9Mb3dlckNhc2UoKV0ucXVlc3Rpb25zXG4gICAgXTtcbiAgICByZXR1cm4gZGVmYXVsdFFzLnNvcnQoKHExLCBxMikgPT4gcTEucXVlc3Rpb25TZXF1ZW5jZSAtIHEyLnF1ZXN0aW9uU2VxdWVuY2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHNsaWRlclF1ZXN0aW9ucy5kZWZhdWx0TGFzdENhcmRRdWVzdGlvbnMgJiYgc2xpZGVyUXVlc3Rpb25zLmRlZmF1bHRMYXN0Q2FyZFF1ZXN0aW9uc1swXS5xdWVzdGlvbnM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2FiRGVwZW5kZW50UXVlc3Rpb24oZm9ybVZhbHVlcykge1xuICB0cnkge1xuICAgIHJldHVybiBmb3JtVmFsdWVzLm90aGVyX2Fuc3dlcnNfYXR0cmlidXRlcy5maWx0ZXIob2JqID0+IG9iai5vcHRpb25faWQgPT09ICc5OScpLmxlbmd0aCA+IDA7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY2xhc3MgTGVhZEZvcm1UaHJlZUVsZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNDYWJTZWxlY3RlZDogY2hlY2tDYWJEZXBlbmRlbnRRdWVzdGlvbihwcm9wcy5mb3JtVmFsdWVzKVxuICAgIH07XG4gICAgdGhpcy5jYWJRdWVzdGlvbkhhbmRsZXIgPSB0aGlzLmNhYlF1ZXN0aW9uSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICBmdW5uZWxfc3RlcDogOSxcbiAgICAgIHNlY3Rpb246ICdGb3JtIDMnLFxuICAgICAgb2JqZWN0OiAnJyxcbiAgICAgIGN0YTogJycsXG4gICAgICB0b19sb2M6IHRoaXMucHJvcHMuY29tbW9uUHJvcGVydGllcy5wcm9wZXJ0aWVzLnRvRGVzdGluYXRpb24sXG4gICAgICBmdW5uZWxfdXVpZDogdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnJlZGlzS2V5LFxuICAgICAgZm9ybVR5cGU6IHRoaXMucHJvcHMuZm9ybVR5cGVcbiAgICB9O1xuICAgIHRoaXMucHJvcHMudHJhY2tGb3JtVmlld2VkQ2FsbChwYXJhbSk7XG4gIH1cblxuICBjYWJRdWVzdGlvbkhhbmRsZXIodmFsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NhYlNlbGVjdGVkOiB2YWwgPT09ICc5OSdcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b0Rlc3RpbmF0aW9uID0gdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnByb3BlcnRpZXMudG9EZXN0aW5hdGlvbjtcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBnZXRRdWVzdGlvbnModGhpcy5wcm9wcy5zbGlkZXJRdWVzdGlvbnMsIHRvRGVzdGluYXRpb24pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWQtZm9ybS10aHJlZSBjbGVhcmZpeCBsZWFkLWZvcm0tdHJhbnNmb3JtIHBiMCBwdDggcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkLWZvcm0tdGhyZWUtaGVpZ2h0IHJlbGF0aXZlXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjIwIGZ3YiB0ZXh0LWNlbnRlciBsZWFkLWZvcm0tdGl0bGVcIj57dGhpcy5wcm9wcy5zbGlkZXJUaXRsZX08L3A+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHN3aXRjaCAocXVlc3Rpb24udGVtcGxhdGVUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaW9fYnV0dG9uJzpcbiAgICAgICAgICAgICAgICAgIGlmIChxdWVzdGlvbi5jdXN0b21pemF0aW9uVGFncyA9PT0gJ2NhYicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQtbGFiZWwgcDE1XCIga2V5PXtxdWVzdGlvbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2FiZm9yU2lnaHRzZWVpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2dldE5hbWVUeXBlKHF1ZXN0aW9uLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FiUXVlc3Rpb25IYW5kbGVyPXt0aGlzLmNhYlF1ZXN0aW9uSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnQgZm9ybS1maWVsZC1sYWJlbCBwMTUgcGI4XCIga2V5PXtxdWVzdGlvbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VHlwZVRvdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUZvckNsZWFyPXtnZXROYW1lVHlwZShxdWVzdGlvbiwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZHJvcF9kb3duJzpcbiAgICAgICAgICAgICAgICAgIGlmIChxdWVzdGlvbi5pZGVudGlmaWVyID09PSAnY3VzdF8zJyAmJiB0aGlzLnN0YXRlLmlzQ2FiU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydCBmb3JtLWZpZWxkLWxhYmVsIHAxNSBwYjhcIiBrZXk9e3F1ZXN0aW9uLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDYWJEZXBlbmRlbnRRdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lRm9yQ2xlYXI9e2dldE5hbWVUeXBlKHF1ZXN0aW9uLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uUHJvcGVydGllcz17dGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXN0aW9uLmlkZW50aWZpZXIgIT09ICdjdXN0XzMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnQgZm9ybS1maWVsZC1sYWJlbCBwMTUgcGI4XCIga2V5PXtxdWVzdGlvbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VHlwZVRvdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2dldE5hbWVUeXBlKHF1ZXN0aW9uLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUZvckNsZWFyPXtnZXROYW1lVHlwZShxdWVzdGlvbiwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRfYXJlYSc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydCBmb3JtLWZpZWxkLWxhYmVsIHAxNVwiIGtleT17cXVlc3Rpb24uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0FkZGl0aW9uYWxQcmVmcmVuY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2dldE5hbWVUeXBlKHF1ZXN0aW9uLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0IGZvcm0tZmllbGQtbGFiZWwgcDE1IHBiNVwiIGtleT17cXVlc3Rpb24uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvY2FsRXhwZXJpZW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lRm9yQ2xlYXI9e2dldE5hbWVUeXBlKHF1ZXN0aW9uLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydCBmb3JtLWZpZWxkLWxhYmVsIHAxNSBzYmN3IHdmdWxsIGxlYWQtZm9ybS1vbmUtYnRuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgcDBcIj5cbiAgICAgICAgICAgICAgICA8QmFja0J1dHRvblxuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVGaWVsZHMoe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9ESVNQTEFZX01PREUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFNMSURFUl8yXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wZW5Gb3JtU3RhdGUoU0xJREVSXzIpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMlwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcDBcIj5cbiAgICAgICAgICAgICAgICA8TGVhZEZvcm1TdWJtaXRCdXR0b25cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlVGhhbmtZb3UoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxlYWRGb3JtVGhyZWVFbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgc2xpZGVyUXVlc3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUZpZWxkczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY29tbW9uUHJvcGVydGllczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFja0Zvcm1WaWV3ZWRDYWxsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzbGlkZXJUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlVGhhbmtZb3U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wZW5Gb3JtU3RhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBmb3JtVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkxlYWRGb3JtVGhyZWVFbGVtZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybVZhbHVlczoge30sXG4gIHNsaWRlclRpdGxlOiAnQWxtb3N0IERvbmUhJyxcbiAgb3BlbkZvcm1TdGF0ZTogdmFsdWUgPT4gdmFsdWUsXG4gIGZvcm1UeXBlOiAnU2xpZGVyIENsb3NlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRGb3JtVGhyZWVFbGVtZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSG90ZWxSYXRpbmcgZnJvbSAnLi9Ib3RlbFJhdGluZyc7XG5pbXBvcnQgRmxpZ2h0Qm9va2luZyBmcm9tICcuL0ZsaWdodEJvb2tTbGlkZXInO1xuaW1wb3J0IEJ1ZGdldFdpdGhBaXJmYWlyIGZyb20gJy4vQnVkZ2V0U2xpZGVyJztcbmltcG9ydCBUcmF2ZWxlckNvdW50IGZyb20gJy4vVHJhdmVsZXJDb3VudCc7XG5pbXBvcnQgV2lsbEJvb2sgZnJvbSAnLi9XaWxsQm9vayc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuL0JhY2tCdXR0b24nO1xuaW1wb3J0IE5leHRCdXR0b24gZnJvbSAnLi9OZXh0QnV0dG9uJztcbmltcG9ydCB7IHJlcXVpcmVkV2l0aG1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9mb3JtVmFsaWRhdG9ycyc7XG5pbXBvcnQge1xuICBTTElERVJfMSxcbiAgU0xJREVSXzMsXG4gIFNFVF9ESVNQTEFZX01PREUsXG4gIFZBUklBVElPTl8yLCBGT1JNX09ORV9QQVJUX09ORSwgRk9STV9PTkVfUEFSVF9UV09cbn0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL1NsaWRlcic7XG5cbmNvbnN0IGRlZmF1bHRGaWVsZHMgPSAoeyBpbnB1dCB9KSA9PlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4uaW5wdXR9IC8+O1xuXG5kZWZhdWx0RmllbGRzLnByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuY2xhc3MgTGVhZEZvcm1Ud28gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIGZ1bm5lbF9zdGVwOiA2LFxuICAgICAgc2VjdGlvbjogJ0Zvcm0gMicsXG4gICAgICBvYmplY3Q6ICcnLFxuICAgICAgY3RhOiAnJyxcbiAgICAgIHRvX2xvYzogdGhpcy5wcm9wcy5mb3JtVmFsdWVzICYmIHRoaXMucHJvcHMuZm9ybVZhbHVlcy50b19sb2MgPyB0aGlzLnByb3BzLmZvcm1WYWx1ZXMudG9fbG9jIDogJycsXG4gICAgICBmdW5uZWxfdXVpZDogdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnJlZGlzS2V5LFxuICAgICAgZm9ybVR5cGU6IHRoaXMucHJvcHMuZm9ybVR5cGVcbiAgICB9O1xuICAgIHRoaXMucHJvcHMudHJhY2tGb3JtVmlld2VkQ2FsbChwYXJhbSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2NhdGlvbjogeyBxdWVyeSB9LCBjb21tb25Qcm9wZXJ0aWVzIDogeyBzbGlkZXJEaXNwbGF5TW9kZSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWQtZm9ybS10aHJlZSBsZWFkLWZvcm0tdHJhbnNmb3JtIGNsZWFyZml4IGxlYWQtZm9ybS10cmFuc2Zvcm0gcGIwIHB0OCByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWQtZm9ybS10aHJlZS1oZWlnaHQgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMjAgZndiIGxlYWQtZm9ybS10aXRsZSBwbDE1IHByMTUgdGV4dC1jZW50ZXIgXCI+e3RoaXMucHJvcHMuc2xpZGVyVGl0bGV9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZC1sYWJlbCBwMTUgcGI4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIFwiPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0hvdGVsUmF0aW5nfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJob3RlbF9jYXRlZ29yeV9hbnN3ZXJzX2F0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWRXaXRobWVzc2FnZSgnSG90ZWwgZmllbGQgbXVzdCBiZSBzZWxlY3RlZCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnQgZm9ybS1maWVsZC1sYWJlbCBwMTUgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGF0X2ZsaWdodGluY2x1ZGVkIHBsMCBwcjBcIj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtGbGlnaHRCb29raW5nfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJmbGlnaHRfYW5zd2VyX2F0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0IGZvcm0tcGFydCBmb3JtLWZpZWxkLWxhYmVsIHAxNSBwYjAgYXRfYnVkZ2V0XCI+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtCdWRnZXRXaXRoQWlyZmFpcn1cbiAgICAgICAgICAgICAgbmFtZT1cImJ1ZGdldFwiXG4gICAgICAgICAgICAgIGJ1ZGdldF9pbmZvPXt0aGlzLnByb3BzLnNsaWRlclF1ZXN0aW9ucy5idWRnZXRfaW5mb31cbiAgICAgICAgICAgICAgYnVkZ2V0T3B0aW9ucz17dGhpcy5wcm9wcy5nZXRCdWRnZXRPcHRpb25zfVxuICAgICAgICAgICAgICBnZXRTZWxlY3RlZEJ1ZGdldD17dGhpcy5wcm9wcy5nZXRTZWxlY3RlZEJ1ZGdldH1cbiAgICAgICAgICAgICAgaXNGbGlnaHRTZWxlY3RlZD17dGhpcy5wcm9wcy5pc0ZsaWdodFNlbGVjdGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydCBmb3JtLWZpZWxkLWxhYmVsIHAxNSBwYjggYXRfdHJhdmVsZXJjb3VudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RyYXZlbGVyQ291bnR9XG4gICAgICAgICAgICAgICAgbmFtZT1cInRyYXZlbGVyX2NvdW50XCJcbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hSeEZvcm1BY3Rpb249e3RoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydCBmb3JtLWZpZWxkLWxhYmVsIHAxNSBhdF93aWxsYm9va1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBzYmN3XCI+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17V2lsbEJvb2t9XG4gICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyX2Fuc3dlcnNfYXR0cmlidXRlc1swXVwiXG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImFkdWx0XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtkZWZhdWx0RmllbGRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiY2hpbGRfYWdlX2Fuc3dlcnNfYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17ZGVmYXVsdEZpZWxkc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImNoaWxkXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtkZWZhdWx0RmllbGRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwiaG90ZWxfbmVlZGVkX2Fuc3dlcl9hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtkZWZhdWx0RmllbGRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydCBmb3JtLWZpZWxkLWxhYmVsIHAxNSB3ZnVsbCBsZWFkLWZvcm0tb25lLWJ0blwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBhdF9sZWFkZm9ybWJ0bnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNCBwMFwiPlxuICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUZpZWxkcyh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogU0VUX0RJU1BMQVlfTU9ERSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogU0xJREVSXzEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wZW5Gb3JtU3RhdGUoU0xJREVSXzEpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTQgcDBcIj5cbiAgICAgICAgICAgICAgICA8TmV4dEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3luVmFsaWRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtVmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIFNMSURFUl8zLFxuICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vcGVuRm9ybVN0YXRlKFNMSURFUl8zKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxlYWRGb3JtVHdvLnByb3BUeXBlcyA9IHtcbiAgc2xpZGVyUXVlc3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUZpZWxkczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzcGF0Y2hSeEZvcm1BY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGdldEJ1ZGdldE9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGdldFNlbGVjdGVkQnVkZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0ZsaWdodFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tGb3JtVmlld2VkQ2FsbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2xpZGVyVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFzeW5WYWxpZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY29tbW9uUHJvcGVydGllczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvcGVuRm9ybVN0YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9ybVR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkxlYWRGb3JtVHdvLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybVZhbHVlczoge30sXG4gIGdldEJ1ZGdldE9wdGlvbnM6IHt9LFxuICBnZXRTZWxlY3RlZEJ1ZGdldDogJycsXG4gIGlzRmxpZ2h0U2VsZWN0ZWQ6IGZhbHNlLFxuICBzbGlkZXJUaXRsZTogJ0dyZWF0ISBUZWxsIFVzIFdoYXQgWW91IFByZWZlcicsXG4gIG9wZW5Gb3JtU3RhdGU6IHZhbHVlID0+IHZhbHVlLFxuICBmb3JtVHlwZTogJ1NsaWRlciBDbG9zZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRGb3JtVHdvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGaWx0ZXJDbGVhciBmcm9tICcuL0ZpbHRlckNsZWFyJztcblxuY29uc3QgTG9jYWxFeHBlcmllbmNlID0gKHsgcXVlc3Rpb24sIGlucHV0LCBuYW1lRm9yQ2xlYXIgfSkgPT4ge1xuICBjb25zdCBpc0NoZWNrZWQgPSAob3B0aW9uSWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIFsuLi5pbnB1dC52YWx1ZV0uZmluZEluZGV4KG9iaiA9PiBvYmoub3B0aW9uX2lkLnRvU3RyaW5nKCkgPT09IG9wdGlvbklkLnRvU3RyaW5nKCkpICE9PSAtMTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gWy4uLmlucHV0LnZhbHVlXTtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBvcHRpb25faWQ6IGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpLFxuICAgICAgY3VzdG9taXphdGlvbl9pZDogcXVlc3Rpb24uY3VzdG9taXphdGlvbklkLnRvU3RyaW5nKClcbiAgICB9O1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBuZXdWYWx1ZS5wdXNoKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlLnNwbGljZShuZXdWYWx1ZS5maW5kSW5kZXgoaiA9PiBqLm9wdGlvbl9pZC50b1N0cmluZygpID09PSBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSksIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dC5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBsb2NhbC1leHAgcm93LSBhdF9Mb2NhbEV4cGVyaWVuY2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIHdmdWxsXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBpYmxvY2sgbTBcIj57cXVlc3Rpb24udGl0bGV9PC9wPlxuICAgICAgICA8RmlsdGVyQ2xlYXJcbiAgICAgICAgICBuYW1lPXtuYW1lRm9yQ2xlYXJ9XG4gICAgICAgICAgdGV4dD1cIkNsZWFyXCJcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIGlkPXtgaWRfJHtuYW1lRm9yQ2xlYXJ9YH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMCBhdF9Mb2NhbEV4cGVyaWVuY2VfY2hlY2tib3hcIiBrZXk9e29wdGlvbi5pZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9e2ByYWRpb19idXR0b25fJHtvcHRpb24uaWR9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi5pZH1cbiAgICAgICAgICAgICAgbmFtZT17YCR7cXVlc3Rpb24uaWRlbnRpZmllcn1bJHtpbmRleH1dYH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkKG9wdGlvbi5pZCl9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvX2J1dHRvbl8ke29wdGlvbi5pZH1fJHtpbmRleH1gfSBjbGFzc05hbWU9XCJjdXJzb3JQIGVsbGlwc2lzIHdhdXRvXCI+XG4gICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTG9jYWxFeHBlcmllbmNlLnByb3BUeXBlcyA9IHtcbiAgcXVlc3Rpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbmFtZUZvckNsZWFyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsRXhwZXJpZW5jZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNvbnN0IE5leHRCdXR0b24gPSAoeyBoYW5kbGVDbGljayB9KSA9PiAoXG4gIDxMaW5rIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJuZXh0LWJ0biBmcmlnaHQgYnRuLWZpbGxlZC1wcmktbGFyZ2UgcmFkaXVzMiBwdDE1IHBiMTUgd2Z1bGwgYXRfbmV4dFwiPlxuICAgIE5leHRcbiAgPC9MaW5rPlxuKTtcblxuTmV4dEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTmV4dEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBSaWdodFdoaXRlQXJyb3csIExlZnRSZWRBcnJvdywgRGlzYWJsZWRBcnJvd0xlZnQgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IEZvb3RlciA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZvb3RlciBwOCBmbGV4XCI+XG4gICAge3Byb3BzLmdvQmFja0Rpc2FibGVkID9cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleEZ1bGwgYmFjay1idXR0b24tdGV4dCBkaXNhYmxlZFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctaWNvbi1jb250YWluZXIgbGVmdFwiPjxEaXNhYmxlZEFycm93TGVmdCAvPjwvc3Bhbj5CYWNrXG4gICAgICA8L2J1dHRvbj4gOlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4RnVsbCBiYWNrLWJ1dHRvbi10ZXh0XCIgb25DbGljaz17cHJvcHMuZ29CYWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LWljb24tY29udGFpbmVyIGxlZnRcIj48TGVmdFJlZEFycm93IC8+PC9zcGFuPkJhY2tcbiAgICAgIDwvYnV0dG9uPlxuICAgIH1cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2BidG4tZmlsbGVkLXByaS1sYXJnZSBmbGV4RnVsbCAke3Byb3BzLmdvTmV4dERpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5nb0ZvcndhcmR9PlxuICAgICAge3Byb3BzLmlzTGFzdFNsaWRlID8gJ1N1Ym1pdCcgOiAnTmV4dCd9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1pY29uLWNvbnRhaW5lclwiPjxSaWdodFdoaXRlQXJyb3cgLz48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ29Gb3J3YXJkOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ29CYWNrRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBnb05leHREaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzTGFzdFNsaWRlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ29CYWNrOiAoKSA9PiB7fSxcbiAgZ29Gb3J3YXJkOiAoKSA9PiB7fSxcbiAgZ29CYWNrRGlzYWJsZWQ6IGZhbHNlLFxuICBpc0xhc3RTbGlkZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGcm9tTG9jYXRpb24gZnJvbSAnLi4vLi4vRnJvbUxvY2F0aW9uJztcbmltcG9ydCBEZXBhcnR1cmVEYXRlRm9ybU9uZSBmcm9tICcuL2xlYWRGb3JtL0RlcGFydHVyZURhdGVGb3JtT25lJztcbmltcG9ydCB7XG4gIFNFVF9ESVNQTEFZX01PREUsXG4gIFNFUVVFTlRJQUxfRk9STV9PTkUsXG4gIFNFUVVFTlRJQUxfRk9STV9UV08sXG4gIFNFUVVFTlRJQUxfRk9STV9USFJFRSxcbiAgU0VRVUVOVElBTF9GT1JNX0ZPVVIsXG4gIFNFUVVFTlRJQUxfRk9STV9GSVZFLFxuICBTRVFVRU5USUFMX0ZPUk1fU0lYLFxuICBTRVFVRU5USUFMX0ZPUk1fU0VWRU4sXG4gIFNFUVVFTlRJQUxfRk9STV9FTkRcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzL1NsaWRlcic7XG5pbXBvcnQgQnVkZ2V0V2l0aEFpcmZhaXIgZnJvbSAnLi9sZWFkRm9ybS9CdWRnZXRTbGlkZXInO1xuaW1wb3J0ICdhcHAvdGhlbWUvU2VxdWVudGlhbEZvcm0uc2Nzcyc7XG5pbXBvcnQge1xuICByZXF1aXJlZFdpdGhtZXNzYWdlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mb3JtVmFsaWRhdG9ycyc7XG5pbXBvcnQgU3RhcnRQbGFubmluZyBmcm9tIFwiLi9sZWFkRm9ybS9TdGFydFBsYW5uaW5nXCI7XG5pbXBvcnQgSW5jbHVzaW9ucyBmcm9tIFwiLi9sZWFkRm9ybS9JbmNsdXNpb25zXCI7XG5pbXBvcnQgQ29udGFjdERldGFpbHMgZnJvbSBcIi4vbGVhZEZvcm0vQ29udGFjdERldGFpbHNcIjtcbmltcG9ydCBBZGRpdGlvbmFsRGV0YWlscyBmcm9tIFwiLi9sZWFkRm9ybS9BZGRpdGlvbmFsRGV0YWlsc1wiO1xuaW1wb3J0IFRyYXZlbGVyQ291bnQgZnJvbSAnLi9sZWFkRm9ybS9UcmF2ZWxlckNvdW50JztcbmltcG9ydCB7IHRyYWNrU2VnbWVudCwgRlVOTkVMX1VVSURfS0VZIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2hlbHBlcnMvRm9ybURhdGFGb3JtYXR0ZXInO1xuXG5jb25zdCBwcm9ncmVzc0JhciA9IChmb3JtU3RhZ2UsIGlzRGVhbCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhci1jb250YWluZXIgZmxleFwiPlxuICAgIHtbLi4uQXJyYXkoaXNEZWFsID8gNSA6IDcpXS5tYXAoKGUsIGkpID0+IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHByb2dyZXNzLWluZGljYXRvciAkeyhpIDw9IGZvcm1TdGFnZSAtIDEpID8gJ2FjdGl2ZScgOiAnJ31gfSBrZXk9e2l9IC8+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcblxuY2xhc3MgU2VxdWVudGlhbEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW50ZXJhY3Rpb25Db3VudDogMSxcbiAgICAgIGVtYWlsOiBwcm9wcy5lbWFpbCA/IHByb3BzLmVtYWlsIDogJydcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZW1haWwpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24odGhpcy5wcm9wcy5lbWFpbCwgJ2VtYWlsJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxGb3JtSW50ZXJhY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbnRlcmFjdGlvbkNvdW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZnVubmVsX3V1aWQsIHJ0RGF0YSwgZm9ybVZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaW50ZXJhY3Rpb25Db3VudCA9PT0gMSkge1xuICAgICAgY29uc3QgdG9fbG9jPSBydERhdGEgJiYgcnREYXRhLnRvX2xvYyA/XG4gICAgICAgIHJ0RGF0YS50b19sb2MgOiBmb3JtVmFsdWVzICYmIGZvcm1WYWx1ZXMudG9fbG9jID9cbiAgICAgICAgZm9ybVZhbHVlcy50b19sb2MgOiAndW5rbm93bic7XG4gICAgICBzZXRDb29raWUoRlVOTkVMX1VVSURfS0VZLGZ1bm5lbF91dWlkKTtcbiAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50OiAnTGVhZCBGdW5uZWwnLFxuICAgICAgICBjYXRlZ29yeTogYERlc3RpbmF0aW9uOiR7dG9fbG9jfWAsXG4gICAgICAgIHNlY3Rpb246ICdGb3JtIDEnLFxuICAgICAgICBkZXN0aW5hdGlvbl9saXN0OiAnJyxcbiAgICAgICAgZm9ybV92YXJpYW50OiAnU2xpZGVyIENsb3NlJyxcbiAgICAgICAgZnVubmVsX3N0ZXA6IDMsXG4gICAgICAgIGZ1bm5lbF91dWlkOiBmdW5uZWxfdXVpZCxcbiAgICAgICAgbGFiZWw6ICdGb3JtMSBJbnRlcmFjdGVkJyxcbiAgICAgICAgdHJpcF9pZDogZ2V0Q29va2llKCd0cmlwX2lkJyksXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnRlcmFjdGlvbkNvdW50OiBpbnRlcmFjdGlvbkNvdW50ICsgMVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGZvcm1QYXJ0T25lID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdmb3JtLW9uZS1wYXJ0LW9uZScpKTtcbiAgfTtcblxuICBjYWxsTmV4dFNsaWRlID0gKHsgc3VibWl0VmFyaWF0aW9uLCB2YXJpYXRpb24sIHZhcmlhdGlvblN0ZXAsIGlzQmFja0J1dHRvbiB9KSA9PiB7XG4gICAgaWYgKGlzQmFja0J1dHRvbikge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVGaWVsZHMoe1xuICAgICAgICB0eXBlOiBTRVRfRElTUExBWV9NT0RFLFxuICAgICAgICB2YWx1ZTogdmFyaWF0aW9uU3RlcCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vcGVuRm9ybVN0YXRlKHZhcmlhdGlvblN0ZXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmFzeW5WYWxpZGF0ZShcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtVmFsdWVzLFxuICAgICAgICBzdWJtaXRWYXJpYXRpb24sXG4gICAgICAgIHZhcmlhdGlvblN0ZXAsXG4gICAgICAgIHRydWUsXG4gICAgICAgIHZhcmlhdGlvbixcbiAgICAgICAgdmFyaWF0aW9uU3RlcFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlckRpc3BsYXlNb2RlLFxuICAgICAgc2xpZGVyUXVlc3Rpb25zLFxuICAgICAgY29tbW9uUHJvcGVydGllcyxcbiAgICAgIGxvY2F0aW9uXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpc0RlYWwgPSBsb2NhdGlvbi5xdWVyeS5kZWFscztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcXVlbnRpYWwtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAge3Byb2dyZXNzQmFyKHRoaXMucHJvcHMucHJvZ3Jlc3NCYXJDb3VudCwgaXNEZWFsKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjY0XCI+XG4gICAgICAgICAge3NsaWRlckRpc3BsYXlNb2RlID09PSBTRVFVRU5USUFMX0ZPUk1fT05FICYmIChcbiAgICAgICAgICAgIDxTdGFydFBsYW5uaW5nXG4gICAgICAgICAgICAgIHJlcXVpcmVkV2l0aG1lc3NhZ2U9e3JlcXVpcmVkV2l0aG1lc3NhZ2V9XG4gICAgICAgICAgICAgIGhhbmRsRm9ybUludGVyYWN0aW9uPXt0aGlzLmhhbmRsRm9ybUludGVyYWN0aW9ufVxuICAgICAgICAgICAgICBoYW5kbGVCbHVyPXt0aGlzLnByb3BzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgIEZyb21Mb2NhdGlvbj17RnJvbUxvY2F0aW9ufVxuICAgICAgICAgICAgICBhc3luVmFsaWRhdGU9e3RoaXMucHJvcHMuYXN5blZhbGlkYXRlfVxuICAgICAgICAgICAgICBjYWxsTmV4dFNsaWRlPXt0aGlzLmNhbGxOZXh0U2xpZGV9XG4gICAgICAgICAgICAgIGNoYW5nZUZvcm1GaWVsZD17dGhpcy5wcm9wcy5jaGFuZ2VGb3JtRmllbGR9XG4gICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2xpZGVyRGlzcGxheU1vZGUgPT09IFNFUVVFTlRJQUxfRk9STV9UV08gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgbWIxIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGVwYXJ0dXJlRGF0ZUZvcm1PbmV9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkREIC8gTU0gLyBZWVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlcGFydHVyZSBEYXRlXCJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgZGF5cz17dGhpcy5wcm9wcy5kYXlzfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkV2l0aG1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICdQbGVhc2Ugc2VsZWN0IE9uZSBEYXRlLXR5cGUnXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZD17dGhpcy5oYW5kbEZvcm1JbnRlcmFjdGlvbn1cbiAgICAgICAgICAgICAgICAgIHJ0RGF0YT17dGhpcy5wcm9wcy5ydERhdGF9XG4gICAgICAgICAgICAgICAgICBjYWxsTmV4dFNsaWRlPXt0aGlzLmNhbGxOZXh0U2xpZGV9XG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzbGlkZXJEaXNwbGF5TW9kZSA9PT0gU0VRVUVOVElBTF9GT1JNX1RIUkVFICYmIChcbiAgICAgICAgICAgIDxJbmNsdXNpb25zXG4gICAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgIGNhbGxOZXh0U2xpZGU9e3RoaXMuY2FsbE5leHRTbGlkZX1cbiAgICAgICAgICAgICAgc2xpZGVyUXVlc3Rpb25zPXtzbGlkZXJRdWVzdGlvbnN9XG4gICAgICAgICAgICAgIGNvbW1vblByb3BlcnRpZXM9e2NvbW1vblByb3BlcnRpZXN9XG4gICAgICAgICAgICAgIHRvdWNoPXt0aGlzLnByb3BzLnRvdWNofVxuICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NsaWRlckRpc3BsYXlNb2RlID09PSBTRVFVRU5USUFMX0ZPUk1fRk9VUiAmJiAoXG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtCdWRnZXRXaXRoQWlyZmFpcn1cbiAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgICBuYW1lPVwiYnVkZ2V0XCJcbiAgICAgICAgICAgICAgYnVkZ2V0X2luZm89e3RoaXMucHJvcHMuc2xpZGVyUXVlc3Rpb25zLmJ1ZGdldF9pbmZvfVxuICAgICAgICAgICAgICBidWRnZXRPcHRpb25zPXt0aGlzLnByb3BzLmdldEJ1ZGdldE9wdGlvbnN9XG4gICAgICAgICAgICAgIGdldFNlbGVjdGVkQnVkZ2V0PXt0aGlzLnByb3BzLmdldFNlbGVjdGVkQnVkZ2V0fVxuICAgICAgICAgICAgICBpc0ZsaWdodFNlbGVjdGVkPXt0aGlzLnByb3BzLmlzRmxpZ2h0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGNhbGxOZXh0U2xpZGU9e3RoaXMuY2FsbE5leHRTbGlkZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2xpZGVyRGlzcGxheU1vZGUgPT09IFNFUVVFTlRJQUxfRk9STV9GSVZFICYmIChcbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RyYXZlbGVyQ291bnR9XG4gICAgICAgICAgICAgIG5hbWU9XCJ0cmF2ZWxlcl9jb3VudFwiXG4gICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgZGlzcGF0Y2hSeEZvcm1BY3Rpb249e3RoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb259XG4gICAgICAgICAgICAgIGNhbGxOZXh0U2xpZGU9e3RoaXMuY2FsbE5leHRTbGlkZX1cbiAgICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzbGlkZXJEaXNwbGF5TW9kZSA9PT0gU0VRVUVOVElBTF9GT1JNX1NJWCAmJiAoXG4gICAgICAgICAgICA8Q29udGFjdERldGFpbHNcbiAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbj17dGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbn1cbiAgICAgICAgICAgICAgY2FsbE5leHRTbGlkZT17dGhpcy5jYWxsTmV4dFNsaWRlfVxuICAgICAgICAgICAgICBoYW5kbGVFbWFpbENoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVFbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgZW1haWw9e3RoaXMucHJvcHMuZW1haWx9XG4gICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7KHNsaWRlckRpc3BsYXlNb2RlID09PSBTRVFVRU5USUFMX0ZPUk1fU0VWRU4gIHx8IHNsaWRlckRpc3BsYXlNb2RlID09PSBTRVFVRU5USUFMX0ZPUk1fRU5EKSAmJiAoXG4gICAgICAgICAgICA8QWRkaXRpb25hbERldGFpbHNcbiAgICAgICAgICAgICAgY29tbW9uUHJvcGVydGllcz17dGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICBzbGlkZXJRdWVzdGlvbnM9e3RoaXMucHJvcHMuc2xpZGVyUXVlc3Rpb25zfVxuICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgICBjYWxsTmV4dFNsaWRlPXt0aGlzLmNhbGxOZXh0U2xpZGV9XG4gICAgICAgICAgICAgIGhhbmRsZVRoYW5rWW91PXt0aGlzLnByb3BzLmhhbmRsZVRoYW5rWW91fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2VxdWVudGlhbEZvcm0ucHJvcFR5cGVzID0ge1xuICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG91Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJ0RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaGFuZGxlQmx1cjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0QnVkZ2V0T3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2hhbmdlRm9ybUZpZWxkOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlVGhhbmtZb3U6IFByb3BUeXBlcy5mdW5jLFxuICBvcGVuRm9ybVN0YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlRW1haWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzbGlkZXJRdWVzdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbW1vblByb3BlcnRpZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlzRmxpZ2h0U2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBwcm9ncmVzc0JhckNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuU2VxdWVudGlhbEZvcm0uZGVmYXVsdFByb3BzID0ge1xuICBydERhdGE6IHt9LFxuICBlbWFpbDogJycsXG4gIGZvcm1WYWx1ZXM6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXF1ZW50aWFsRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IFdpbGxCb29rIGZyb20gJy4vV2lsbEJvb2snO1xuaW1wb3J0IEFkZGl0aW9uYWxQcmVmcmVuY2VzIGZyb20gJy4uLy4uL0FkZGl0aW9uYWxQcmVmcmVuY2VzJztcbmltcG9ydCB7IFNFUVVFTlRJQUxfRk9STV9TSVgsIFNFUVVFTlRJQUxfRk9STV9FTkQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb25zdGFudHMvU2xpZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJztcbmltcG9ydCB7IGdldE5hbWVUeXBlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHVjZXJzL2Zvcm1PbmVMZWFkXCI7XG5pbXBvcnQgVHlwZVRvdXIgZnJvbSBcIi4uLy4uL1R5cGVUb3VyXCI7XG5pbXBvcnQgQ2FiRGVwZW5kZW50UXVlc3Rpb24gZnJvbSBcIi4uLy4uL0NhYkRlcGVuZGVudFF1ZXN0aW9uXCI7XG5pbXBvcnQgTG9jYWxFeHBlcmllbmNlIGZyb20gXCIuLi8uLi9Mb2NhbEV4cGVyaWVuY2VcIjtcbmltcG9ydCB7IGdldFF1ZXN0aW9ucywgY2hlY2tDYWJEZXBlbmRlbnRRdWVzdGlvbiB9IGZyb20gJy4uLy4uL0xlYWRGb3JtVGhyZWUnO1xuXG5jb25zdCBxdWVzdGlvbiA9IHtcbiAgY3VzdG9taXphdGlvbklkOiAxMzIsXG4gIGN1c3RvbWl6YXRpb25UYWdzOiBudWxsLFxuICBkZXNjcmlwdGlvbjogJ0hvdGVsIG5hbWVzIGlmIHlvdSBoYXZlIGFscmVhZHkgZGVjaWRlZCwgU3BlY2lhbCBjb25zaWRlcmF0aW9ucywgZS5nLiBraWQgZnJpZW5kbHksIEFycml2YWwgYW5kIGRlcGFydHVyZSBkYXRlIC8gdGltZSwgaWYgdGlja2V0cyBib29rZWQ/JyxcbiAgaGFzT3RoZXJzOiBmYWxzZSxcbiAgaWQ6IDEzNyxcbiAgaWRlbnRpZmllcjogJ2FkZGl0aW9uYWxfcHJlZnMnLFxuICBqc29uVmFsdWVUeXBlOiAnaW5wdXQnLFxuICBxdWVzdGlvblNlcXVlbmNlOiAxMDAsXG4gIHJhaWxzRm9ybU5hbWU6ICdpbmZvJyxcbiAgdGVtcGxhdGVJZDogJzEwJyxcbiAgdGVtcGxhdGVUeXBlOiAndGV4dF9hcmVhJyxcbiAgdGl0bGU6ICdBZGRpdGlvbmFsIHJlcXVpcmVtZW50cycsXG4gIHZhbHVlVHlwZTogJ3NpbmdsZV92YWx1ZScsXG59O1xuXG5jbGFzcyBBZGRpdGlvbmFsRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0NhYlNlbGVjdGVkOiBjaGVja0NhYkRlcGVuZGVudFF1ZXN0aW9uKHByb3BzLmZvcm1WYWx1ZXMpXG4gICAgfTtcbiAgfVxuXG4gIGdvQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNhbGxOZXh0U2xpZGUoe1xuICAgICAgc3VibWl0VmFyaWF0aW9uOiAnJyxcbiAgICAgIHZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgIHZhcmlhdGlvblN0ZXA6IFNFUVVFTlRJQUxfRk9STV9TSVgsXG4gICAgICBpc0JhY2tCdXR0b246IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBnb0ZvcndhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jYWxsTmV4dFNsaWRlKHtcbiAgICAgIHN1Ym1pdFZhcmlhdGlvbjogJycsXG4gICAgICB2YXJpYXRpb246IHRydWUsXG4gICAgICB2YXJpYXRpb25TdGVwOiBTRVFVRU5USUFMX0ZPUk1fRU5ELFxuICAgIH0pO1xuICAgIC8vdGhpcy5wcm9wcy5oYW5kbGVUaGFua1lvdSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b0Rlc3RpbmF0aW9uID0gdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzICYmIHRoaXMucHJvcHMuY29tbW9uUHJvcGVydGllcy5wcm9wZXJ0aWVzICYmXG4gICAgICB0aGlzLnByb3BzLmNvbW1vblByb3BlcnRpZXMucHJvcGVydGllcy50b0Rlc3RpbmF0aW9uO1xuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGdldFF1ZXN0aW9ucyh0aGlzLnByb3BzLnNsaWRlclF1ZXN0aW9ucywgdG9EZXN0aW5hdGlvbik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1XCI+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBjb21wb25lbnQ9e1dpbGxCb29rfVxuICAgICAgICAgICAgbmFtZT1cIm90aGVyX2Fuc3dlcnNfYXR0cmlidXRlc1swXVwiXG4gICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYjE1XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHF1ZXN0aW9uLnRlbXBsYXRlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvX2J1dHRvbic6XG4gICAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24uY3VzdG9taXphdGlvblRhZ3MgPT09ICdjYWInKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtYjE1XCIga2V5PXtxdWVzdGlvbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1R5cGVUb3VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVGb3JDbGVhcj17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdkcm9wX2Rvd24nOlxuICAgICAgICAgICAgICAgICAgaWYgKHF1ZXN0aW9uLmlkZW50aWZpZXIgPT09ICdjdXN0XzMnICYmIHRoaXMuc3RhdGUuaXNDYWJTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gbWIxNVwiIGtleT17cXVlc3Rpb24uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2FiRGVwZW5kZW50UXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUZvckNsZWFyPXtnZXROYW1lVHlwZShxdWVzdGlvbiwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25Qcm9wZXJ0aWVzPXt0aGlzLnByb3BzLmNvbW1vblByb3BlcnRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVzdGlvbi5pZGVudGlmaWVyICE9PSAnY3VzdF8zJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gbWIxNVwiIGtleT17cXVlc3Rpb24uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VHlwZVRvdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUZvckNsZWFyPXtnZXROYW1lVHlwZShxdWVzdGlvbiwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dF9hcmVhJzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIG1iMTUgbG9jYWwtZXhwZXJpZW5jZS1jb250YWluZXJcIiBrZXk9e3F1ZXN0aW9uLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvY2FsRXhwZXJpZW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Z2V0TmFtZVR5cGUocXVlc3Rpb24sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lRm9yQ2xlYXI9e2dldE5hbWVUeXBlKHF1ZXN0aW9uLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgY29tcG9uZW50PXtBZGRpdGlvbmFsUHJlZnJlbmNlc31cbiAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cbiAgICAgICAgICAgIG5hbWU9XCJpbmZvXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciBnb0JhY2s9e3RoaXMuZ29CYWNrfSBnb0ZvcndhcmQ9e3RoaXMuZ29Gb3J3YXJkfSBpc0xhc3RTbGlkZT17dHJ1ZX0gLz5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn07XG5cbkFkZGl0aW9uYWxEZXRhaWxzLnByb3BUeXBlcyA9IHtcbiAgZm9ybVN0YWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqLFxuICBxdWVzdGlvbjogUHJvcFR5cGVzLm9iaixcbiAgY29tbW9uUHJvcGVydGllczogUHJvcFR5cGVzLm9iaixcbiAgc2xpZGVyUXVlc3Rpb25zOiBQcm9wVHlwZXMub2JqLFxuICBjYWxsTmV4dFNsaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxlVGhhbmtZb3U6IFByb3BUeXBlcy5mdW5jLFxuICBwcm9ncmVzc0JhcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZGl0aW9uYWxEZXRhaWxzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEJ1ZGdldEhpZ2gsIEJ1ZGdldEljb25OZXcsIEJ1ZGdldExvdywgQnVkZ2V0TWVkaXVtLCBCdWRnZXRNaW4sIFRpY2sgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBudW1iZXJXaXRoQ29tbWFzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvcGFyc2Vycyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3Rlcic7XG5pbXBvcnQge1xuICBTRVFVRU5USUFMX0ZPUk1fRklWRSxcbiAgU0VRVUVOVElBTF9GT1JNX1RIUkVFLFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb25zdGFudHMvU2xpZGVyJztcblxuY29uc3QgZ2V0QnVkZ2V0SWNvbiA9IChpbmRleCwgaXNEZWZhdWx0KSA9PiB7XG4gIGlmIChpc0RlZmF1bHQpIHtcbiAgICBpZiAoaW5kZXggPT09IDAgKSB7XG4gICAgICByZXR1cm4gPEJ1ZGdldE1pbi8+O1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnVkZ2V0TG93IC8+O1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IDIpIHtcbiAgICAgIHJldHVybiA8QnVkZ2V0TWVkaXVtIC8+O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiA8QnVkZ2V0TG93IC8+O1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnVkZ2V0TWVkaXVtIC8+O1xuICAgIH1cbiAgfVxuICByZXR1cm4gPEJ1ZGdldEhpZ2ggLz47XG59O1xuXG5jb25zdCBCdWRnZXRPcHRpb25zID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBidWRnZXRPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZEJ1ZGdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZsaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBjb25zdCBidWRnZXRLZXlzID0gT2JqZWN0LmtleXMoYnVkZ2V0T3B0aW9ucyk7XG4gIGNvbnN0IGJ1ZGdldEZpZWxkcyA9IGJ1ZGdldEtleXMuc2xpY2UoMCwgMykubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXNDaGVja2VkID0gZm9ybVZhbHVlcy5idWRnZXQgPT09XG4gICAgICBgJHtidWRnZXRPcHRpb25zW2tleV19Li4ke2J1ZGdldE9wdGlvbnNbYnVkZ2V0S2V5c1tpbmRleCArIDFdXX1gO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJ1dHRvbi1ib3ggcm91bmQtaWNvbiBidWRnZXQtaWNvbiAke2lzQ2hlY2tlZCA/ICdhY3RpdmUnIDogJyd9YH0ga2V5PXtrZXl9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aWNrLWljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPFRpY2svPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi00OFwiPlxuICAgICAgICAgIHtnZXRCdWRnZXRJY29uKGluZGV4KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtrZXl9XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpby1jb21tb25cIlxuICAgICAgICAgIG5hbWU9XCJidWRnZXRPcHRpb25zXCJcbiAgICAgICAgICB2YWx1ZT17YCR7YnVkZ2V0T3B0aW9uc1trZXldfS4uJHtcbiAgICAgICAgICAgIGJ1ZGdldE9wdGlvbnNbYnVkZ2V0S2V5c1tpbmRleCArIDFdXVxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+4oK5e251bWJlcldpdGhDb21tYXMoYnVkZ2V0T3B0aW9uc1trZXldKX0gLVxuICAgICAgICAgIOKCuXtudW1iZXJXaXRoQ29tbWFzKGJ1ZGdldE9wdGlvbnNbYnVkZ2V0S2V5c1tpbmRleCArIDFdXSl9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwZmM0IGZ3NCBmMTIgdGV4dC1jZW50ZXJcIj5wZXIgcGVyc29uPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBtYjI0IGZsZXhXcmFwIGJ1ZGdldC1zZWxlY3Rvci1jb250YWluZXJcIj5cbiAgICAgIHtidWRnZXRGaWVsZHN9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CdWRnZXRPcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgYnVkZ2V0T3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFNlbGVjdGVkQnVkZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0ZsaWdodFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuQnVkZ2V0T3B0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGdldFNlbGVjdGVkQnVkZ2V0OiAnJyxcbiAgYnVkZ2V0T3B0aW9uczoge1xuICAgIGJ1ZGdldDogMjUyNTAsXG4gICAgZGVsdXhlOiAyNjc1MCxcbiAgICBtaW46IDI0NTAwLFxuICAgIHN0YW5kYXJkOiAyNjAwMFxuICB9XG59O1xuXG5cbmNvbnN0IERlZmF1bHRCdWRnZXRPcHRpb25zID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVkZ2V0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZEJ1ZGdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbGlnaHRTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBjb25zdCBidWRnZXRLZXlzID0gT2JqZWN0LmtleXMoYnVkZ2V0T3B0aW9ucyk7XG5cbiAgY29uc3QgZGlzcGxheVZhbHVlcyA9IChrZXkpID0+IHtcbiAgICBpZiAoa2V5Lm1pbiA9PT0gMTAwMDApIHtcbiAgICAgIHJldHVybiAnQmVsb3cg4oK5MjAsMDAwJztcbiAgICB9XG4gICAgaWYgKGtleS5taW4gPT09IDYwMDAwKSB7XG4gICAgICByZXR1cm4gJ0Fib3ZlIOKCuTYwLDAwMCc7XG4gICAgfVxuICAgIHJldHVybiBg4oK5ICR7bnVtYmVyV2l0aENvbW1hcyhrZXkubWluKX0gLSDigrkgJHtudW1iZXJXaXRoQ29tbWFzKGtleS5tYXgpfWA7XG4gIH07XG5cbiAgY29uc3QgYnVkZ2V0RmllbGRzID0gYnVkZ2V0S2V5cy5zbGljZSgwLCA0KS5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBmb3JtVmFsdWVzLmJ1ZGdldCA9PT1cbiAgICAgIGAke2J1ZGdldE9wdGlvbnNba2V5XS5taW59Li4ke2J1ZGdldE9wdGlvbnNba2V5XS5tYXh9YDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BidXR0b24tYm94IHJvdW5kLWljb24gYnVkZ2V0LWljb24gJHtpc0NoZWNrZWQgPyAnYWN0aXZlJyA6ICcnfWB9IGtleT17a2V5fT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGljay1pY29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxUaWNrLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tNDhcIj5cbiAgICAgICAgICB7Z2V0QnVkZ2V0SWNvbihpbmRleCwgdHJ1ZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD17a2V5fVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uXCJcbiAgICAgICAgICBuYW1lPVwiYnVkZ2V0T3B0aW9uc1wiXG4gICAgICAgICAgdmFsdWU9e2Ake2J1ZGdldE9wdGlvbnNba2V5XS5taW59Li4ke1xuICAgICAgICAgICAgYnVkZ2V0T3B0aW9uc1trZXldLm1heFxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2Rpc3BsYXlWYWx1ZXMoYnVkZ2V0T3B0aW9uc1trZXldKX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBmYzQgZnc0IGYxMiB0ZXh0LWNlbnRlclwiPnBlciBwZXJzb248L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2VCZXR3ZWVuIG1iMjQgZmxleFdyYXAgYnVkZ2V0LXNlbGVjdG9yLWNvbnRhaW5lclwiPlxuICAgICAge2J1ZGdldEZpZWxkc31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRlZmF1bHRCdWRnZXRPcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgYnVkZ2V0T3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFNlbGVjdGVkQnVkZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0ZsaWdodFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuRGVmYXVsdEJ1ZGdldE9wdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuICBnZXRTZWxlY3RlZEJ1ZGdldDogJycsXG4gIGJ1ZGdldE9wdGlvbnM6IHtcbiAgICBcIm1pblwiOiB7IFwibWluXCI6IDEwMDAwLCBcIm1heFwiOiAyMDAwMCB9LFxuICAgIFwiYnVkZ2V0XCI6IHsgXCJtaW5cIjogMjAwMDAsIFwibWF4XCI6IDQwMDAwIH0sXG4gICAgXCJzdGFuZGFyZFwiOiB7IFwibWluXCI6IDQwMDAwLCBcIm1heFwiOiA2MDAwMCB9LFxuICAgIFwiZGVsdXhlXCI6IHsgXCJtaW5cIjogNjAwMDAsIFwibWF4XCI6IDgwMDAwIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEJ1ZGdldFRleHQgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0ZsaWdodFNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgIGdldFNlbGVjdGVkQnVkZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYnVkZ2V0LXRleHRib3ggcGIxNVwiPlxuICAgIDxsYWJlbCBodG1sRm9yPVwiRnJvbVwiIGNsYXNzTmFtZT1cImYxNCBmdzkgcGI4IGJsb2NrIHBmYzNcIj5TZXQgWW91ciBPd24gQnVkZ2V0IDxzcGFuXG4gICAgICBjbGFzc05hbWU9XCJwZmM0IGZ3NCBmMTIgZnJpZ2h0XCI+aW4gSU5SIHBlciBwZXJzb248L3NwYW4+PC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdpdGgtaWNvbi1ib3hcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvblwiPlxuICAgICAgICAgIDxCdWRnZXRJY29uTmV3IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJidWRnZXQtdGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGJ1ZGdldCB2YWx1ZVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtnZXRTZWxlY3RlZEJ1ZGdldH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkJ1ZGdldFRleHQucHJvcFR5cGVzID0ge1xuICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzRmxpZ2h0U2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBnZXRTZWxlY3RlZEJ1ZGdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkJ1ZGdldFRleHQuZGVmYXVsdFByb3BzID0ge1xuICBpc0ZsaWdodFNlbGVjdGVkOiBmYWxzZSxcbiAgZ2V0U2VsZWN0ZWRCdWRnZXQ6ICcnLFxufTtcblxuY2xhc3MgQnVkZ2V0V2l0aEFpcmZhaXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYnVkZ2V0T3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBnZXRTZWxlY3RlZEJ1ZGdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYWxsTmV4dFNsaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc0ZsaWdodFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJ1ZGdldE9wdGlvbnM6IHt9LFxuICAgIGdldFNlbGVjdGVkQnVkZ2V0OiAnJyxcbiAgICBpc0ZsaWdodFNlbGVjdGVkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5wcm9wcy5pbnB1dC5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGdvQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNhbGxOZXh0U2xpZGUoe1xuICAgICAgc3VibWl0VmFyaWF0aW9uOiAnJyxcbiAgICAgIHZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgIHZhcmlhdGlvblN0ZXA6IFNFUVVFTlRJQUxfRk9STV9USFJFRSxcbiAgICAgIGlzQmFja0J1dHRvbjogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGdvRm9yd2FyZCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNhbGxOZXh0U2xpZGUoe1xuICAgICAgc3VibWl0VmFyaWF0aW9uOiAnJyxcbiAgICAgIHZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgIHZhcmlhdGlvblN0ZXA6IFNFUVVFTlRJQUxfRk9STV9GSVZFLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBmb3JtLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTVcIj5cbiAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5idWRnZXRPcHRpb25zKS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEJ1ZGdldE9wdGlvbnNcbiAgICAgICAgICAgICAgICBidWRnZXRPcHRpb25zPXt0aGlzLnByb3BzLmJ1ZGdldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZEJ1ZGdldD17dGhpcy5wcm9wcy5nZXRTZWxlY3RlZEJ1ZGdldH1cbiAgICAgICAgICAgICAgICBpc0ZsaWdodFNlbGVjdGVkPXt0aGlzLnByb3BzLmlzRmxpZ2h0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxEZWZhdWx0QnVkZ2V0T3B0aW9uc1xuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBnZXRTZWxlY3RlZEJ1ZGdldD17dGhpcy5wcm9wcy5nZXRTZWxlY3RlZEJ1ZGdldH1cbiAgICAgICAgICAgICAgaXNGbGlnaHRTZWxlY3RlZD17dGhpcy5wcm9wcy5pc0ZsaWdodFNlbGVjdGVkfVxuICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvci1kaXZpZGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj5PUjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1XCI+XG4gICAgICAgICAgPEJ1ZGdldFRleHRcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBpc0ZsaWdodFNlbGVjdGVkPXt0aGlzLnByb3BzLmlzRmxpZ2h0U2VsZWN0ZWR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5pbnB1dC52YWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciBnb0JhY2s9e3RoaXMuZ29CYWNrfSBnb0ZvcndhcmQ9e3RoaXMuZ29Gb3J3YXJkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5CdWRnZXRXaXRoQWlyZmFpci5wcm9wVHlwZXMgPSB7XG4gIGZvcm1TdGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iaixcbiAgcHJvZ3Jlc3NCYXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdWRnZXRXaXRoQWlyZmFpcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDYWJzRmlsbGVkLCBUaWNrIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jbGFzcyBDYWJmb3JTaWdodHNlZWluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgaXNDaGVja2VkOiB0aGlzLnNlbGVjdENhYihwcm9wcyksXG4gICAgfTtcbiAgfVxuXG4gIHNlbGVjdENhYiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcyB9ID0gcHJvcHM7XG4gICAgaWYoZm9ybVZhbHVlcy5vdGhlcl9hbnN3ZXJzX2F0dHJpYnV0ZXMgJiYgZm9ybVZhbHVlcy5vdGhlcl9hbnN3ZXJzX2F0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZm9ybVZhbHVlcy5vdGhlcl9hbnN3ZXJzX2F0dHJpYnV0ZXNbMV0gJiZcbiAgICAgICAgZm9ybVZhbHVlcy5vdGhlcl9hbnN3ZXJzX2F0dHJpYnV0ZXNbMV0ub3B0aW9uX2lkICYmXG4gICAgICAgIGZvcm1WYWx1ZXMub3RoZXJfYW5zd2Vyc19hdHRyaWJ1dGVzWzFdLm9wdGlvbl9pZCA9PT0gXCI5OVwiO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXQsIHF1ZXN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NoZWNrZWQ6ICF0aGlzLnN0YXRlLmlzQ2hlY2tlZCB9LCAoKSA9PiB7XG4gICAgICBpbnB1dC5vbkNoYW5nZSh7XG4gICAgICAgIG9wdGlvbl9pZDogcXVlc3Rpb24ub3B0aW9uc1t0aGlzLnN0YXRlLmlzQ2hlY2tlZCA/IDAgOiAxXS5pZCxcbiAgICAgICAgY3VzdG9taXphdGlvbl9pZDogcXVlc3Rpb24uY3VzdG9taXphdGlvbklkLnRvU3RyaW5nKCksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdWVzdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzQ2hlY2tlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBvcHRpb25JbmRleCA9IGlzQ2hlY2tlZCA/IDAgOiAxO1xuICAgIGNvbnN0IG9wdGlvbiA9IHF1ZXN0aW9uLm9wdGlvbnNbb3B0aW9uSW5kZXhdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJ1dHRvbi1ib3ggcm91bmQtaWNvbiAke2lzQ2hlY2tlZCA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpY2staWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8VGljay8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLTQ4XCI+XG4gICAgICAgICAgPENhYnNGaWxsZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICBuYW1lPXtgJHtxdWVzdGlvbi5pZGVudGlmaWVyfVske29wdGlvbkluZGV4fV1gfVxuICAgICAgICAgIGlkPXtgcmFkaW9fYnV0dG9uXyR7b3B0aW9uLmlkfV8ke29wdGlvbkluZGV4fWB9XG4gICAgICAgICAgdmFsdWU9e29wdGlvbi5pZH1cbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhYjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FiZm9yU2lnaHRzZWVpbmcucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNhYlF1ZXN0aW9uSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5DYWJmb3JTaWdodHNlZWluZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhYlF1ZXN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2FiZm9yU2lnaHRzZWVpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQge1xuICBlbWFpbCxcbiAgcmVxdWlyZWRXaXRobWVzc2FnZSxcbiAgcGhvbmVOdW1iZXJSZXF1aXJlZFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9mb3JtVmFsaWRhdG9ycyc7XG5pbXBvcnQge1xuICByZW5kZXJQaG9uZSxcbiAgcmVuZGVyRW1haWwsXG4gIGdlbmVyaWNDaGVja2JveCxcbn0gZnJvbSAnLi4vLi4vRm9ybU9uZVZhcmlhdGlvbic7XG5pbXBvcnQge1xuICBTRVFVRU5USUFMX0ZPUk1fRklWRSwgU0VRVUVOVElBTF9GT1JNX1RXTywgU0VRVUVOVElBTF9GT1JNX1NFVkVOLCBTRVFVRU5USUFMX0ZPUk1fVEhSRUUsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbnN0YW50cy9TbGlkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xuXG5jbGFzcyBDb250YWN0RGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogcHJvcHMuZW1haWwgfHwgJycsXG4gICAgfTtcbiAgfVxuXG4gIGdvQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNhbGxOZXh0U2xpZGUoe1xuICAgICAgc3VibWl0VmFyaWF0aW9uOiAnJyxcbiAgICAgIHZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgIHZhcmlhdGlvblN0ZXA6IFNFUVVFTlRJQUxfRk9STV9GSVZFLFxuICAgICAgaXNCYWNrQnV0dG9uOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgZ29Gb3J3YXJkID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2FsbE5leHRTbGlkZSh7XG4gICAgICBzdWJtaXRWYXJpYXRpb246IHRydWUsXG4gICAgICB2YXJpYXRpb246IHRydWUsXG4gICAgICB2YXJpYXRpb25TdGVwOiBTRVFVRU5USUFMX0ZPUk1fU0VWRU5cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtVmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdvTmV4dERpc2FibGVkID0gZm9ybVZhbHVlcy5lbWFpbCAmJiBmb3JtVmFsdWVzLnBob25lX25vID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5IHB0MTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYjhcIj5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckVtYWlsfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBJRFwiXG4gICAgICAgICAgICB2YWxpZGF0ZT17W1xuICAgICAgICAgICAgICByZXF1aXJlZFdpdGhtZXNzYWdlKCdFbnRlciB2YWxpZCBlbWFpbCBpZCcpLFxuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVFbWFpbENoYW5nZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGVtYWlsVmFsPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVfbm9cIlxuICAgICAgICAgICAgY29tcG9uZW50PXtyZW5kZXJQaG9uZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBsYWJlbD1cIlBob25lIE5vXCJcbiAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZU51bWJlclJlcXVpcmVkfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtVmFsdWVzICYmIHRoaXMucHJvcHMuZm9ybVZhbHVlcy5pc2RfY29kZVxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5mb3JtVmFsdWVzLmlzZF9jb2RlXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNGb2N1cz17IWdvTmV4dERpc2FibGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwid2hhdHNhcHBfb3B0X3N0YXR1c1wiXG4gICAgICAgICAgICBjb21wb25lbnQ9e2dlbmVyaWNDaGVja2JveH1cbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBsYWJlbD1cIlNlbmQgdHJpcCB1cGRhdGVzIG9uIFdoYXRzQXBwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vbiBzZmN3XCJcbiAgICAgICAgICAgIGlkPVwid2hhdHNhcHBfb3B0X3N0YXR1c1wiXG4gICAgICAgICAgICBjbGFzc25hbWU9XCJhdF93aGF0c2FwcF9vcHRfc3RhdHVzXCJcbiAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciBnb0JhY2s9e3RoaXMuZ29CYWNrfSBnb0ZvcndhcmQ9e3RoaXMuZ29Gb3J3YXJkfSBnb05leHREaXNhYmxlZD17Z29OZXh0RGlzYWJsZWR9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ29udGFjdERldGFpbHMucHJvcFR5cGVzID0ge1xuICBmb3JtU3RhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBoYW5kbGVFbWFpbENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNhbGxOZXh0U2xpZGU6IFByb3BUeXBlcy5mdW5jLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJvZ3Jlc3NCYXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0RGV0YWlscztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmltcG9ydCBGb3JtRGF0ZU51bSBmcm9tICcuLi8uLi8uLi9Gb3JtRGF0ZU51bSc7XG5pbXBvcnQgeyBmb3JtYXQsIGdldERhdGVPZldlZWsgfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcbmltcG9ydCBUcmF2ZWxNb250aHMgZnJvbSAnLi9UcmF2ZWxNb250aHMnO1xuaW1wb3J0ICcuLi8uLi9MZWFkRm9ybS5zY3NzJztcbmltcG9ydCB7XG4gIENhbGVuZGFySWNvbiwgRGF0ZURlY2lkZWQsIERhdGVOb3REZWNpZGVkLCBUaWNrXG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3RlclwiO1xuaW1wb3J0IHsgU0VRVUVOVElBTF9GT1JNX09ORSwgU0VRVUVOVElBTF9GT1JNX1NJWCwgU0VRVUVOVElBTF9GT1JNX1RIUkVFLCBTRVFVRU5USUFMX0ZPUk1fRklWRSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb25zdGFudHMvU2xpZGVyXCI7XG5cbmNvbnN0IHBpY2tlckxhbmcgPSB7XG4gIG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICBmcm9tOiAnRnJvbScsXG4gIHRvOiAnVG8nXG59O1xuXG5jb25zdCB0cmF2ZWxNb250aE1vZGFsU3R5bGVzID0ge1xuICBjb250ZW50IDoge1xuICAgIGxlZnQgICAgICAgICAgICAgICAgICA6ICc1MCUnLFxuICAgIHJpZ2h0ICAgICAgICAgICAgICAgICA6ICdhdXRvJyxcbiAgICBib3R0b20gICAgICAgICAgICAgICAgOiAnYXV0bycsXG4gICAgbWFyZ2luUmlnaHQgICAgICAgICAgIDogJy01MCUnLFxuICAgIHRyYW5zZm9ybSAgICAgICAgICAgICA6ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIGJveFNoYWRvdyAgICAgICAgICAgICA6ICcwIDAgMXB4IDFweCAjZTFlMWUxJyxcbiAgICBib3JkZXIgICAgICAgICAgICAgICAgOiAnbm9uZScsXG4gICAgd2lkdGggICAgICAgICAgICAgICAgIDogJzEwMCUnLFxuICAgIGJvcmRlclJhZGl1cyAgICAgICAgICA6ICcwJyxcbiAgICB0b3AgICAgICAgICAgICAgICAgICAgOiAnMzIycHgnLFxuICAgIHBhZGRpbmcgICAgICAgICAgICAgICA6ICcwIDIwcHgnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGN1cnJlbnRXZWVrKGRhdGUpIHtcbiAgY29uc3QgZGF0ZV9uZXcgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgdGhpc0RheSA9IGRhdGVfbmV3LmdldERhdGUoKTtcbiAgY29uc3QgbmV3RGF0ZSA9IGRhdGVfbmV3O1xuICBuZXdEYXRlLnNldERhdGUoMSk7XG4gIGNvbnN0IGRpZ2l0ID0gbmV3RGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgUSA9ICh0aGlzRGF5ICsgZGlnaXQpIC8gNztcbiAgY29uc3QgUiA9ICh0aGlzRGF5ICsgZGlnaXQpICUgNztcbiAgaWYgKFIgIT09IDApXG4gICAgcmV0dXJuIE1hdGguY2VpbChRKTtcbiAgZWxzZVxuICAgIHJldHVybiBRO1xufVxuXG5mdW5jdGlvbiB3ZWVrQ291bnQoeWVhciwgbW9udGhfbnVtYmVyKSB7XG4gIGxldCByZXRWYWx1ZSA9IFtdO1xuICByZXRWYWx1ZSA9IFsxLCAyLCAzLCA0XTtcbiAgcmV0dXJuIHJldFZhbHVlO1xufVxuXG5jb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xubGV0IGRpc2FibGVDdXJyZW50TW9udGggPSBmYWxzZTtcbmlmIChjdXJyZW50RGF0ZS5nZXREYXRlKCkgPiAyOCkge1xuICBkaXNhYmxlQ3VycmVudE1vbnRoID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRpbmdXZWVrKHllYXIsIG1vbnRoKSB7XG4gIGlmIChjdXJyZW50TW9udGggPT09IG1vbnRoICYmIGN1cnJlbnRZZWFyID09PSB5ZWFyKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRXZWVrKGN1cnJlbnREYXRlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5jbGFzcyBEZXBhcnR1cmVEYXRlRm9ybU9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRlVHlwZTogbnVsbCxcbiAgICAgIHNlbGVjdGVkRGF0ZTogJycsXG4gICAgICBtdmFsdWU6IHsgeWVhcjogY3VycmVudFllYXIsIG1vbnRoOiBjdXJyZW50TW9udGggfSxcbiAgICAgIGZpeGVkRGF0ZTogZmFsc2UsXG4gICAgICBmbGV4aWJsZURhdGU6IGZhbHNlLFxuICAgICAgYW55dGltZURhdGU6IHRydWUsXG4gICAgICBudW1PZkRheXM6IGZhbHNlLFxuICAgICAgZGF0ZUNoZWNrZWQ6IGZhbHNlLFxuICAgICAgc2hvd1dlZWs6IGZhbHNlLFxuICAgICAgc3RhcnRXZWVrOiAxLFxuICAgICAgbnVtT2ZXZWVrczogW10sXG4gICAgICBpc0RhdGVQaWNrZXJPcGVuOiBmYWxzZSxcbiAgICAgIGlzQm9va2VkVGlja2V0OiBwcm9wcy5mb3JtVmFsdWVzLmJvb2tlZF90aWNrZXRzIHx8IGZhbHNlLFxuICAgICAgc2hvd01vbnRoUGlja2VyOiBmYWxzZSxcbiAgICAgIGlzRGF0ZURlY2lkZWQ6IGZhbHNlLFxuICAgICAgaXNEYXRlTm90RGVjaWRlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZENvdW50OiAwLFxuICAgICAgc2hvd1RyYXZlbE1vbnRoczogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkTW9udGg6ICcnLFxuICAgICAgc2hvd01vbnRoUG9wdXA6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRSZXF1aXJlZEZpZWxkcyh0aGlzLnByb3BzLmZvcm1WYWx1ZXMpO1xuICB9XG5cbiAgc2V0UmVxdWlyZWRGaWVsZHMgPSAodmFsdWVzKSA9PiB7XG4gICAgaWYgKHZhbHVlcy5zdGFydF9kYXRlICYmICF2YWx1ZXMuc3RhcnRfZGF0ZV9mbGV4aWJsZSAmJiAhdmFsdWVzLnN0YXJ0X2RhdGVfbm9pZGVhKSB7XG4gICAgICB0aGlzLmhhbmRsZUZpeGVkQ2hhbmdlV2l0aG91dFRvZ2dsZSh2YWx1ZXMuc3RhcnRfZGF0ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZXMuc3RhcnRfZGF0ZV9ub2lkZWEpIHtcbiAgICAgIHRoaXMuaGFuZGxlQW55dGltZUNoYW5nZSh2YWx1ZXMuc3RhcnRfZGF0ZV9mbGV4aWJsZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZXMuc3RhcnRfZGF0ZV9mbGV4aWJsZSkge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlcy5zdGFydF9kYXRlX2ZsZXhpYmxlLm1hdGNoKC8oXFx3KSsvZyk7XG4gICAgICBsZXQgbW9udGggPSAnJztcbiAgICAgIGlmKG1hdGNoZXMubGVuZ3RoIDw9Mil7XG4gICAgICAgIG1vbnRoID0gdmFsdWVzLnN0YXJ0X2RhdGVfZmxleGlibGU7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIG1vbnRoID0gbWF0Y2hlc1swXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERhdGU6ICcnLFxuICAgICAgICBkYXRlVHlwZTogJ2ZsZXhpYmxlJyxcbiAgICAgICAgZmxleGlibGVEYXRlOiB0cnVlLFxuICAgICAgICBmaXhlZERhdGU6IGZhbHNlLFxuICAgICAgICBhbnl0aW1lRGF0ZTogZmFsc2UsXG4gICAgICAgIG51bU9mRGF5czogdHJ1ZSxcbiAgICAgICAgc2hvd1dlZWs6IGZhbHNlLFxuICAgICAgICBzaG93VHJhdmVsTW9udGhzOiBmYWxzZSxcbiAgICAgICAgaXNEYXRlTm90RGVjaWRlZDogdHJ1ZSxcbiAgICAgICAgc2VsZWN0ZWRNb250aDogbW9udGhcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGdldERhdGVPZldlZWsoXG4gICAgICAgIG1hdGNoZXNbMF0sXG4gICAgICAgIG1hdGNoZXNbMV0sXG4gICAgICAgIG1hdGNoZXNbM10sXG4gICAgICAgICdZWVlZLU1NLUREJ1xuICAgICAgKSwgJ3N0YXJ0X2RhdGUnKTtcbiAgICB9XG4gIH07XG5cbiAgY2FuY2VsRGF0ZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGVUeXBlOiBudWxsLFxuICAgICAgc2VsZWN0ZWREYXRlOiAnJyxcbiAgICAgIGZpeGVkRGF0ZTogdHJ1ZSxcbiAgICAgIGZsZXhpYmxlRGF0ZTogdHJ1ZSxcbiAgICAgIGFueXRpbWVEYXRlOiB0cnVlLFxuICAgICAgbnVtT2ZEYXlzOiBmYWxzZSxcbiAgICAgIHNob3dXZWVrOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oJycsICdzdGFydF9kYXRlJyk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihmYWxzZSwgJ3N0YXJ0X2RhdGVfbm9pZGVhJyk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbignJywgJ3N0YXJ0X2RhdGVfZmxleGlibGUnKTtcbiAgfTtcblxuICBoYW5kbGVGaXhlZENoYW5nZVdpdGhvdXRUb2dnbGUgPSAoZGF0ZU9iaikgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoZGF0ZU9iaiwgJ0REIE1NTU0gWVlZWScpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEYXRlRGVjaWRlZDogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkRGF0ZTogZm9ybWF0dGVkRGF0ZSxcbiAgICAgIGRhdGVUeXBlOiAnZml4ZWQnLFxuICAgICAgZGF0ZUNoZWNrZWQ6IHRydWUsXG4gICAgICBmbGV4aWJsZURhdGU6IGZhbHNlLFxuICAgICAgYW55dGltZURhdGU6IGZhbHNlLFxuICAgICAgbnVtT2ZEYXlzOiB0cnVlLFxuICAgICAgc2VsZWN0ZWRDb3VudDogMVxuICAgIH0pO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGZvcm1hdChkYXRlT2JqLCAnWVlZWS1NTS1ERCcpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oc3RhcnREYXRlLCAnc3RhcnRfZGF0ZScpO1xuICB9O1xuXG4gIGhhbmRsZUZpeGVkQ2hhbmdlID0gKGRhdGVPYmopID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZm9ybWF0KGRhdGVPYmosICdERCBNTU1NIFlZWVknKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF0ZTogZm9ybWF0dGVkRGF0ZSxcbiAgICAgIGRhdGVUeXBlOiAnZml4ZWQnLFxuICAgICAgZGF0ZUNoZWNrZWQ6IHRydWUsXG4gICAgICBmbGV4aWJsZURhdGU6IGZhbHNlLFxuICAgICAgYW55dGltZURhdGU6IGZhbHNlLFxuICAgICAgbnVtT2ZEYXlzOiB0cnVlXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVEYXRlUGlja2VyQ2FsZW5kYXIobnVsbCwgdHJ1ZSk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RhcnREYXRlID0gZm9ybWF0KGRhdGVPYmosICdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihzdGFydERhdGUsICdzdGFydF9kYXRlJyk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihmYWxzZSwgJ3N0YXJ0X2RhdGVfZmxleGlibGUnKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGZhbHNlLCAnc3RhcnRfZGF0ZV9ub2lkZWEnKTtcbiAgfTtcblxuICBzY3JvbGxQYWdlID0gKGVsZW1lbnQpID0+IHtcbiAgICBsZXQgZWxlbWVudFRvQmVTY3JvbGxlZCA9IGVsZW1lbnQ7XG4gICAgbGV0IHRvTG9jU2Nyb2xsID0gZWxlbWVudFRvQmVTY3JvbGxlZC5vZmZzZXRUb3A7XG4gICAgbGV0IHRvTG9jUG9zID0gZWxlbWVudFRvQmVTY3JvbGxlZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgbGV0IHRvTG9jQWRkID0gdG9Mb2NQb3MgLSB0b0xvY1Njcm9sbDtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9Mb2NBZGQpO1xuICB9O1xuXG4gIHRvZ2dsZURhdGVQaWNrZXJDYWxlbmRhcihlLCBmbGFnLCBzaG93KSB7XG4gICAgaWYgKGUpXG4gICAgICBlICYmIGUuc3RvcFByb3BhZ2F0aW9uKCkgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICYmIHdpbmRvdy5pbm5lckhlaWdodCA8PSA1NjgpXG4gICAgICB0aGlzLnNjcm9sbFBhZ2UoZS50YXJnZXQpO1xuXG4gICAgaWYgKCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZSAmJiAhdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50KSB8fCBmbGFnKSB7XG4gICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKCcnLCAnc3RhcnRfZGF0ZV9mbGV4aWJsZScpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRGF0ZVBpY2tlck9wZW46IGZhbHNlLFxuICAgICAgICBpc0RhdGVEZWNpZGVkOiB0cnVlLFxuICAgICAgICBpc0RhdGVOb3REZWNpZGVkOiBmYWxzZSxcbiAgICAgICAgc2VsZWN0ZWRDb3VudDogMSxcbiAgICAgICAgZml4ZWREYXRlOiB0cnVlLFxuICAgICAgICBmbGV4aWJsZURhdGU6IGZhbHNlLFxuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudCkge1xuICAgICAgLy90aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKCcnLCAnc3RhcnRfZGF0ZV9mbGV4aWJsZScpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRGF0ZVBpY2tlck9wZW46ICF0aGlzLnN0YXRlLmlzRGF0ZVBpY2tlck9wZW4sICAgIC8vIXRoaXMuc3RhdGUuaXNEYXRlUGlja2VyT3BlbiAgPC0tIHJlbW92ZWQgdGhpcyBhcyBwZXIgbmV3IHJlcXVpcmVtZW50XG4gICAgICAgIGlzRGF0ZURlY2lkZWQ6IHRydWUsXG4gICAgICAgIGlzRGF0ZU5vdERlY2lkZWQ6IGZhbHNlLFxuICAgICAgICBmaXhlZERhdGU6IHRydWUsXG4gICAgICAgIGZsZXhpYmxlRGF0ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGZhbHNlLCAnc3RhcnRfZGF0ZV9ub2lkZWEnKTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oJycsICdzdGFydF9kYXRlJyk7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKCcnLCAnc3RhcnRfZGF0ZV9mbGV4aWJsZScpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTW9udGg6ICcnfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNEYXRlUGlja2VyT3BlbjogdHJ1ZSxcbiAgICAgICAgaXNEYXRlRGVjaWRlZDogdHJ1ZSxcbiAgICAgICAgaXNEYXRlTm90RGVjaWRlZDogZmFsc2UsXG4gICAgICAgIGZpeGVkRGF0ZTogdHJ1ZSxcbiAgICAgICAgZmxleGlibGVEYXRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS12YXJpYXRpb24tZGF0ZXBpY2tlcicpWzBdO1xuICAgICAgaWYgKGRhdGVwaWNrZXIpXG4gICAgICAgIGRhdGVwaWNrZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoOiAke3dpbmRvdy5pbm5lcldpZHRofXB4O2Rpc3BsYXk6YmxvY2s7dG9wOiAxODVweCAhaW1wb3J0YW50O2ApO1xuICAgIH0sIDEwKTtcbiAgfTtcblxuICBoaWRlRGF0ZVBpY2tlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEYXRlUGlja2VyT3BlbjogZmFsc2UgfSk7XG4gICAgaWYoIXRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEYXRlRGVjaWRlZDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUJvb2tlZFRpY2tldHMgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNCb29rZWRUaWNrZXQ6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oZXZlbnQudGFyZ2V0LmNoZWNrZWQsICdib29rZWRfdGlja2V0cycpO1xuICB9O1xuXG4gIGhhbmRsZUFueXRpbWVDaGFuZ2UgPSAobW9udGgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RyYXZlbE1vbnRoczogIXRoaXMuc3RhdGUuc2hvd1RyYXZlbE1vbnRocywgc2VsZWN0ZWRNb250aDogbW9udGgsIGZsZXhpYmxlRGF0ZTogdHJ1ZSB9KTtcbiAgICB0aGlzLnByb3BzLnRyYWNrRm9ybU9uZUludGVyYWN0ZWQoKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHRydWUsICdzdGFydF9kYXRlX25vaWRlYScpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oJ0FueXRpbWUnLCAnc3RhcnRfZGF0ZScpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24obW9udGgsICdzdGFydF9kYXRlX2ZsZXhpYmxlJylcbiAgfTtcblxuICBoYW5kbGVNb250aENoYW5nZSA9IChtb250aCkgPT4ge1xuICAgIGNvbnN0IG1vb25MYW5kaW5nID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RyYXZlbE1vbnRoczogIXRoaXMuc3RhdGUuc2hvd1RyYXZlbE1vbnRocyB9KTtcbiAgICBpZiAobW9udGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE1vbnRoOiBtb250aCB9KTtcbiAgICAgIGNvbnN0IGZpbmFsRGF0ZSA9IGAke21vbnRofScxOSAtIFdlZWsgMWA7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGZhbHNlLCAnc3RhcnRfZGF0ZV9ub2lkZWEnKTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oZmluYWxEYXRlLCAnc3RhcnRfZGF0ZV9mbGV4aWJsZScpO1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihcbiAgICAgICAgZ2V0RGF0ZU9mV2VlayhcbiAgICAgICAgICBtb29uTGFuZGluZy5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIG1vbnRoLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgJ1lZWVktTU0tREQnXG4gICAgICAgICksXG4gICAgICAgICdzdGFydF9kYXRlJ1xuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2tNb250aEJveCA9IChlKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxQYWdlKGUudGFyZ2V0KTtcbiAgICB0aGlzLnJlZnMucGlja0FNb250aC5zaG93KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93TW9udGhQaWNrZXI6IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCBsZWZ0UG9zaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxleGlibGVfZGF0ZV9mbmV3JykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tbW9udGgtcGlja2VyIHJtcC1jb250YWluZXInKVswXVxuICAgICAgLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGB3aWR0aDogJHt3aW5kb3cuaW5uZXJXaWR0aH1weDsgbGVmdDogLSR7bGVmdFBvc2l0aW9ufXB4ICFpbXBvcnRhbnQ7YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWstYm94LXdpZHRoJylcbiAgICAgIC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgd2lkdGg6ICR7d2luZG93LmlubmVyV2lkdGh9cHg7IGxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7YCk7XG4gIH07XG5cbiAgaGFuZGxlQU1vbnRoQ2hhbmdlID0gKHllYXIsIG1vbnRoTnVtKSA9PiB7XG4gICAgdGhpcy5yZWZzLnBpY2tBTW9udGguZGlzbWlzcygpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeWVhcixcbiAgICAgIG1vbnRoOiBwaWNrZXJMYW5nLm1vbnRoc1ttb250aE51bSAtIDFdLFxuICAgICAgbnVtT2ZXZWVrczogd2Vla0NvdW50KHllYXIsIG1vbnRoTnVtKSxcbiAgICAgIHN0YXJ0V2VlazogZ2V0U3RhcnRpbmdXZWVrKHllYXIsIG1vbnRoTnVtIC0gMSksXG4gICAgICBzaG93V2VlazogdHJ1ZSxcbiAgICAgIHNob3dNb250aFBpY2tlcjogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVBTW9udGhEaXNzbWlzID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG12YWx1ZTogdmFsdWUsIHNob3dNb250aFBpY2tlcjogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlTm90RGVjaWRlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGF0ZU5vdERlY2lkZWQ6IHRydWUsXG4gICAgICBpc0RhdGVEZWNpZGVkOiBmYWxzZSxcbiAgICAgIGZsZXhpYmxlRGF0ZTogdHJ1ZSxcbiAgICAgIGZpeGVkRGF0ZTogZmFsc2UsXG4gICAgICBpc0RhdGVQaWNrZXJPcGVuOiBmYWxzZSxcbiAgICAgIHNob3dUcmF2ZWxNb250aHM6IHRydWUsXG4gICAgICBzZWxlY3RlZERhdGU6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihmYWxzZSwgJ3N0YXJ0X2RhdGVfbm9pZGVhJyk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbignJywgJ3N0YXJ0X2RhdGUnKTtcbiAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGZpbmFsRGF0ZSwgJ3N0YXJ0X2RhdGVfZmxleGlibGUnKTtcbiAgfTtcblxuICBnb0JhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jYWxsTmV4dFNsaWRlKHtcbiAgICAgIHN1Ym1pdFZhcmlhdGlvbjogJycsXG4gICAgICB2YXJpYXRpb246IHRydWUsXG4gICAgICB2YXJpYXRpb25TdGVwOiBTRVFVRU5USUFMX0ZPUk1fT05FLFxuICAgICAgaXNCYWNrQnV0dG9uOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgZ29Gb3J3YXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYXRpb24gOiB7IHF1ZXJ5IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHN0ZXAgPSBTRVFVRU5USUFMX0ZPUk1fVEhSRUU7XG4gICAgaWYocXVlcnkuZGVhbHMpIHtcbiAgICAgIHN0ZXAgPSBTRVFVRU5USUFMX0ZPUk1fRklWRVxuICAgIH1cbiAgICBlbHNlIGlmKHF1ZXJ5LnZhcmlhdGlvbiA9PT0gJzMnKSB7XG4gICAgICBzdGVwID0gU0VRVUVOVElBTF9GT1JNX1RIUkVFO1xuICAgIH1lbHNlIGlmKHF1ZXJ5LnZhcmlhdGlvbiA9PT0gJzQnKSB7XG4gICAgICBzdGVwID0gU0VRVUVOVElBTF9GT1JNX1NJWDtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5jYWxsTmV4dFNsaWRlKHtcbiAgICAgIHN1Ym1pdFZhcmlhdGlvbjogJycsXG4gICAgICB2YXJpYXRpb246IHRydWUsXG4gICAgICB2YXJpYXRpb25TdGVwOiBzdGVwXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2VNb250aE1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93VHJhdmVsTW9udGhzOiBmYWxzZSB9KTtcbiAgICBpZighdGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEYXRlTm90RGVjaWRlZDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaXhlZERhdGUsIGZsZXhpYmxlRGF0ZSwgYW55dGltZURhdGUsIGlzQm9va2VkVGlja2V0LCBpc0RhdGVOb3REZWNpZGVkLCBpc0RhdGVEZWNpZGVkLFxuICAgICAgc2hvd1RyYXZlbE1vbnRocywgc2VsZWN0ZWRNb250aCwgc2VsZWN0ZWREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpeGVkRGF0ZUNoZWNrID0gKGlzRGF0ZURlY2lkZWQgfHwgZm9ybVZhbHVlcy5zdGFydF9kYXRlKSAmJiAhaXNEYXRlTm90RGVjaWRlZCAmJiAhZmxleGlibGVEYXRlO1xuICAgIGNvbnN0IGdvTmV4dERpc2FibGVkID0gKGZvcm1WYWx1ZXMuc3RhcnRfZGF0ZSB8fCBmb3JtVmFsdWVzLnN0YXJ0X2RhdGVfZmxleGlibGUgfHwgZm9ybVZhbHVlcy5zdGFydF9kYXRlX25vaWRlYSlcbiAgICAmJiBmb3JtVmFsdWVzLnRyaXBfZGF5cyA/IGZhbHNlIDogdHJ1ZTtcbiAgICBjb25zdCBzaG93TW9udGhPZlRyYXZlbCA9ICghc2hvd1RyYXZlbE1vbnRocyAmJiBmbGV4aWJsZURhdGUgJiYgaXNEYXRlTm90RGVjaWRlZCkgfHxcbiAgICAgIGZvcm1WYWx1ZXMuc3RhcnRfZGF0ZSA9PT0gJ0FueXRpbWUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Zml4ZWREYXRlICYmIGZsZXhpYmxlRGF0ZSAmJiBhbnl0aW1lRGF0ZSA/IFwicm93IHJvdy1cIiA6IFwiaGlkZVwifWB9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHBiOCBmMTQgZnc5XCI+RGVwYXJ0dXJlIERhdGU8ZW0gY2xhc3NOYW1lPVwicGZjMlwiPio8L2VtPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTIgZnczXCI+IChDaG9vc2UgQW55KTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2VCZXR3ZWVuIG1iMTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnV0dG9uLWJveCByb3VuZC1pY29uICR7KGZpeGVkRGF0ZUNoZWNrIHx8IHNlbGVjdGVkRGF0ZSkgJiYgIWlzRGF0ZU5vdERlY2lkZWQgJiZcbiAgICAgICAgICAgIGlzRGF0ZURlY2lkZWQgPyAnYWN0aXZlJyA6ICcnfWB9IGlkPVwiZml4ZWRfZGF0ZV9mbmV3XCJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVEYXRlUGlja2VyQ2FsZW5kYXIuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpY2staWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8VGljay8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLTQ4XCI+XG4gICAgICAgICAgICAgICAgPERhdGVEZWNpZGVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkRhdGVzIERlY2lkZWQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0RhdGVQaWNrZXJPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm09XCJERC9NTS9ZWVlZXCJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRlID8gdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUgOiAnJ31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD1cIkZpeGVkIERhdGVcIlxuICAgICAgICAgICAgICAgICAgaW5saW5lXG4gICAgICAgICAgICAgICAgICBjYWxlbmRhckNsYXNzTmFtZT1cImN1c3RvbS12YXJpYXRpb24tZGF0ZXBpY2tlciBzZXF1ZW50aWFsLWZvcm0tZGF0ZS1waWNrZXJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRml4ZWRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17dGhpcy5oaWRlRGF0ZVBpY2tlcn1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZSAmJiBuZXcgRGF0ZSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZSkgIT09ICdJbnZhbGlkIERhdGUnID9cbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnV0dG9uLWJveCByb3VuZC1pY29uICR7KGlzRGF0ZU5vdERlY2lkZWQgJiYgZmxleGlibGVEYXRlKSB8fFxuICAgICAgICAgICAgZm9ybVZhbHVlcy5zdGFydF9kYXRlID09PSAnQW55dGltZSc/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOb3REZWNpZGVkfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGljay1pY29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxUaWNrLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tNDhcIj5cbiAgICAgICAgICAgICAgICA8RGF0ZU5vdERlY2lkZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RGF0ZXMgTm90IERlY2lkZWQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpeGVkRGF0ZUNoZWNrICYmIHNlbGVjdGVkRGF0ZSAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13aXRoLWljb24tYm94IHByMCBwbDAgcmVsYXRpdmUgY3Jvc3MtdmlzaWJsZS1ib3ggbWIxNSBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZGRhdGUtbGFiZWwgcGI4IGYxNCBmdzlcIj5EZXBhcnR1cmUgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZml4ZWRfZGF0ZV9mbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZGF0ZS1jaGVjayBpbnB1dCBib3gtaW5wdXQtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnRvZ2dsZURhdGVQaWNrZXJDYWxlbmRhci5jYWxsKHRoaXMsIGUsIGZhbHNlLCB0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZSA/IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlIDogJyd9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1ldGEudG91Y2hlZCAmJlxuICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5tZXRhLmVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57dGhpcy5wcm9wcy5tZXRhLmVycm9yfTwvc3Bhbj4pIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLm1ldGEud2FybmluZyAmJiA8c3Bhbj57dGhpcy5wcm9wcy5tZXRhLndhcm5pbmd9PC9zcGFuPilcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZml4ZWREYXRlQ2hlY2sgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJib29rZWQtdGlja2V0IGNvbC14cy0xMiBwMCBib29rZWQtdGlja2V0XCJ9PlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNCb29rZWRUaWNrZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQm9va2VkVGlja2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJvb2tlZC10aWNrZXRcIiBjbGFzc05hbWU9XCJjaGVja2JveC1jb21tb24gY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJvb2tlZC10aWNrZXRcIiBjbGFzc05hbWU9XCJmMTIgcGI4XCI+SSBoYXZlIGJvb2tlZCBteSB0cmF2ZWwgdGlja2V0czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmbGV4aWJsZURhdGUgJiZcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICBpc09wZW49e3Nob3dUcmF2ZWxNb250aHN9XG4gICAgICAgICAgICAgIHN0eWxlPXt0cmF2ZWxNb250aE1vZGFsU3R5bGVzfVxuICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVDbG9zZU1vbnRoTW9kYWx9XG4gICAgICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s9e3RydWV9XG4gICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJ0cmF2ZWwtbW9udGgtb3ZlcmxheVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUcmF2ZWxNb250aHMgaGFuZGxlQW55dGltZUNoYW5nZT17dGhpcy5oYW5kbGVBbnl0aW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vbnRoQ2hhbmdlPXt0aGlzLmhhbmRsZU1vbnRoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc30gLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dNb250aE9mVHJhdmVsICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdpdGgtaWNvbi1ib3ggcHIwIHBsMCByZWxhdGl2ZSBjcm9zcy12aXNpYmxlLWJveCAgbWIxNSBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZGRhdGUtbGFiZWwgcGI4IGYxNCBmdzlcIj5Nb250aCBvZiBUcmF2ZWw8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvblwiPlxuICAgICAgICAgICAgPENhbGVuZGFySWNvbiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpeGVkX2RhdGVfZm5ld1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWRhdGUtY2hlY2sgaW5wdXQgYm94LWlucHV0LWZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVNb250aENoYW5nZShzZWxlY3RlZE1vbnRoKX0+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE1vbnRofVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXRhLnRvdWNoZWQgJiZcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5tZXRhLmVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57dGhpcy5wcm9wcy5tZXRhLmVycm9yfTwvc3Bhbj4pIHx8XG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5tZXRhLndhcm5pbmcgJiYgPHNwYW4+e3RoaXMucHJvcHMubWV0YS53YXJuaW5nfTwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BudW1iZXItb2YtZGF5cy1jb250YWluZXIgJHsoKGZpeGVkRGF0ZUNoZWNrICYmIHNlbGVjdGVkRGF0ZSkgfHwgKCFzaG93VHJhdmVsTW9udGhzICYmIGZsZXhpYmxlRGF0ZSAmJiBpc0RhdGVOb3REZWNpZGVkKSB8fCBzaG93TW9udGhPZlRyYXZlbCApID8gJycgOiAnaGlkZSd9YH0+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cInRyaXBfZGF5c190ZW1wXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtGb3JtRGF0ZU51bX1cbiAgICAgICAgICAgICAgc2hvd0RheXM9e3RydWV9XG4gICAgICAgICAgICAgIGRpc3BhdGNoPXt0aGlzLnByb3BzLm1ldGEuZGlzcGF0Y2h9XG4gICAgICAgICAgICAgIGZvcm09e3RoaXMucHJvcHMubWV0YS5mb3JtfVxuICAgICAgICAgICAgICBydERhdGE9e3RoaXMucHJvcHMucnREYXRhfVxuICAgICAgICAgICAgICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbj17dGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbn1cbiAgICAgICAgICAgICAgZGF5cz17dGhpcy5wcm9wcy5kYXlzfVxuICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgIHZhcmlhdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tZXRhLnRvdWNoZWQgJiZcbiAgICAgICAgICAoXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5tZXRhLmVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHQgbW92ZS11cC0xNVwiPnt0aGlzLnByb3BzLm1ldGEuZXJyb3J9PC9zcGFuPikgfHxcbiAgICAgICAgICAgICh0aGlzLnByb3BzLm1ldGEud2FybmluZyAmJiA8c3Bhbj57dGhpcy5wcm9wcy5tZXRhLndhcm5pbmd9PC9zcGFuPilcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPEZvb3RlciBnb0JhY2s9e3RoaXMuZ29CYWNrfSBnb0ZvcndhcmQ9e3RoaXMuZ29Gb3J3YXJkfSBnb05leHREaXNhYmxlZD17Z29OZXh0RGlzYWJsZWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRlcGFydHVyZURhdGVGb3JtT25lLnByb3BUeXBlcyA9IHtcbiAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGRheXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJ0RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybVN0YWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBwcm9ncmVzc0JhcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkRlcGFydHVyZURhdGVGb3JtT25lLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybVZhbHVlczoge30sXG4gIHJ0RGF0YToge30sXG4gIGRheXM6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXBhcnR1cmVEYXRlRm9ybU9uZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgRmxpZ2h0RmlsbGVkLCBUaWNrIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jbGFzcyBGbGlnaHRCb29raW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiB0aGlzLmNoZWNrSW5pdGlhbFZhbHVlcygpLFxuICAgICAgZmxpZ2h0U2VsZWN0ZWQ6ICc5OCcsXG4gICAgfTtcbiAgfVxuXG4gIGNoZWNrSW5pdGlhbFZhbHVlcyA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZm9ybVZhbHVlcykge1xuICAgICAgICBjb25zdCBmbGlnaHRBbnN3ZXJBdHRyaWJ1dGVzID0gdGhpcy5wcm9wcy5mb3JtVmFsdWVzLmZsaWdodF9hbnN3ZXJfYXR0cmlidXRlcztcbiAgICAgICAgaWYgKGZsaWdodEFuc3dlckF0dHJpYnV0ZXMgJiYgZmxpZ2h0QW5zd2VyQXR0cmlidXRlcy5vcHRpb25faWQpIHtcbiAgICAgICAgICByZXR1cm4gZmxpZ2h0QW5zd2VyQXR0cmlidXRlcy5vcHRpb25faWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZCB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnOTgnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6ICc5NycgfSk7XG4gICAgICB0aGlzLnByb3BzLmlucHV0Lm9uQ2hhbmdlKHtcbiAgICAgICAgb3B0aW9uX2lkOiAnOTcnLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiAnMjMnLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogJzk4JyB9KTtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2Uoe1xuICAgICAgICBvcHRpb25faWQ6ICc5OCcsXG4gICAgICAgIGN1c3RvbWl6YXRpb25faWQ6ICcyMycsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJ1dHRvbi1ib3ggcm91bmQtaWNvbiAke1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZCAhPT0gJzk4JyA/ICdhY3RpdmUnIDogJydcbiAgICAgICAgfWB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aWNrLWljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPFRpY2svPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi00OFwiPlxuICAgICAgICAgIDxGbGlnaHRGaWxsZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICBuYW1lPVwiY3VzdF8yM1wiXG4gICAgICAgICAgaWQ9XCJmbGlnaHQtaW5jbHVkZWQxXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZH1cbiAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZCA9PT0gJzk3J31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RmxpZ2h0czwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmxpZ2h0Qm9va2luZy5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbkZsaWdodEJvb2tpbmcuZGVmYXVsdFByb3BzID0ge1xuICBmb3JtVmFsdWVzOiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0Qm9va2luZztcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IGhvdGVsUHJlZkN1c3RvbWl6YXRpb25zID0ge1xuICBzdGFyMjogMzIsXG4gIHN0YXIzOiA4LFxuICBzdGFyNDogNyxcbiAgc3RhcjU6IDYsXG4gIG5vSG90ZWw6IDk2LFxuICBjdXN0b21pemF0aW9uSWQ6IDIsXG4gIG5vSG90ZWxDdXN0b21pemF0aW9uSWQ6IDIyXG59O1xuXG5jbGFzcyBIb3RlbFJhdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3RlbHM6IHtcbiAgICAgICAgc3RhcjI6IGZhbHNlLFxuICAgICAgICBzdGFyMzogZmFsc2UsXG4gICAgICAgIHN0YXI0OiBmYWxzZSxcbiAgICAgICAgc3RhcjU6IGZhbHNlLFxuICAgICAgICBub0hvdGVsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmNoZWNrSW5pdGlhbFZhbHVlcyhwcm9wcy5mb3JtVmFsdWVzKTtcbiAgfVxuXG4gIGdldEhvdGVsUHJlZnMgPSAoKSA9PiB7XG4gICAgbGV0IGlzSG90ZWxTZWxlY3RlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHJldFZhbHVlID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5ob3RlbHMpXG4gICAgICAuZmlsdGVyKGhvdGVsU3RhciA9PiB0aGlzLnN0YXRlLmhvdGVsc1tob3RlbFN0YXJdKVxuICAgICAgLm1hcCgoaG90ZWxTdGFyKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1c3RvbWl6YXRpb25JZCA9IGhvdGVsUHJlZkN1c3RvbWl6YXRpb25zLmN1c3RvbWl6YXRpb25JZDtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmhvdGVscy5ub0hvdGVsKSB7XG4gICAgICAgICAgaXNIb3RlbFNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3B0aW9uX2lkOiBob3RlbFByZWZDdXN0b21pemF0aW9uc1tob3RlbFN0YXJdLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBjdXN0b21pemF0aW9uSWQudG9TdHJpbmcoKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSk7XG4gICAgaWYgKGlzSG90ZWxTZWxlY3RlZCkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbih7XG4gICAgICAgIG9wdGlvbl9pZDogJzk1JyxcbiAgICAgICAgY3VzdG9taXphdGlvbl9pZDogaG90ZWxQcmVmQ3VzdG9taXphdGlvbnMubm9Ib3RlbEN1c3RvbWl6YXRpb25JZC50b1N0cmluZygpXG4gICAgICB9LCAnaG90ZWxfbmVlZGVkX2Fuc3dlcl9hdHRyaWJ1dGVzJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmhvdGVscy5ub0hvdGVsKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKCcnLCAnYnVkZ2V0Jyk7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHtcbiAgICAgICAgb3B0aW9uX2lkOiAnOTYnLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBob3RlbFByZWZDdXN0b21pemF0aW9ucy5ub0hvdGVsQ3VzdG9taXphdGlvbklkLnRvU3RyaW5nKClcbiAgICAgIH0sICdob3RlbF9uZWVkZWRfYW5zd2VyX2F0dHJpYnV0ZXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbignJywgJ2hvdGVsX25lZWRlZF9hbnN3ZXJfYXR0cmlidXRlcycpO1xuICAgIH1cbiAgICBpZiAocmV0VmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gcmV0VmFsdWU7XG4gIH1cblxuICBjaGVja0luaXRpYWxWYWx1ZXMgPSAoZm9ybVZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGhvdGVsQXR0cmlidXRlcyA9IGZvcm1WYWx1ZXMuaG90ZWxfY2F0ZWdvcnlfYW5zd2Vyc19hdHRyaWJ1dGVzIHx8IFtdO1xuICAgIGNvbnN0IGFuc3dlckF0dHJpYnV0ZXMgPSBmb3JtVmFsdWVzLmhvdGVsX25lZWRlZF9hbnN3ZXJfYXR0cmlidXRlcyB8fCB7fTtcbiAgICBob3RlbEF0dHJpYnV0ZXMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLm9wdGlvbl9pZCA9PT0gaG90ZWxQcmVmQ3VzdG9taXphdGlvbnMuc3RhcjIudG9TdHJpbmcoKSkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgaG90ZWxzOiB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmhvdGVscyxcbiAgICAgICAgICAgIHN0YXIyOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChvYmoub3B0aW9uX2lkID09PSBob3RlbFByZWZDdXN0b21pemF0aW9ucy5zdGFyMy50b1N0cmluZygpKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICBob3RlbHM6IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaG90ZWxzLFxuICAgICAgICAgICAgc3RhcjM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKG9iai5vcHRpb25faWQgPT09IGhvdGVsUHJlZkN1c3RvbWl6YXRpb25zLnN0YXI0LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIGhvdGVsczoge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5ob3RlbHMsXG4gICAgICAgICAgICBzdGFyNDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAob2JqLm9wdGlvbl9pZCA9PT0gaG90ZWxQcmVmQ3VzdG9taXphdGlvbnMuc3RhcjUudG9TdHJpbmcoKSkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgaG90ZWxzOiB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmhvdGVscyxcbiAgICAgICAgICAgIHN0YXI1OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChhbnN3ZXJBdHRyaWJ1dGVzLm9wdGlvbl9pZCA9PT0gJzk2Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgaG90ZWxzOiB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5ob3RlbHMsXG4gICAgICAgICAgbm9Ib3RlbDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGhvdGVsUHJlZnMgPSB7fTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ25vSG90ZWwnKSB7XG4gICAgICAgIGhvdGVsUHJlZnMuc3RhcjIgPSBmYWxzZTtcbiAgICAgICAgaG90ZWxQcmVmcy5zdGFyMyA9IGZhbHNlO1xuICAgICAgICBob3RlbFByZWZzLnN0YXI0ID0gZmFsc2U7XG4gICAgICAgIGhvdGVsUHJlZnMuc3RhcjUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvdGVsUHJlZnMubm9Ib3RlbCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhvdGVsczoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmhvdGVscyxcbiAgICAgICAgLi4uaG90ZWxQcmVmcyxcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWRcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7IHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UodGhpcy5nZXRIb3RlbFByZWZzKCkpOyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3RlbHJhdGluZ0RpdiBhdF9ob3RlbHJhdGluZ2RpdiBtYjE1XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3OSBpYmxvY2sgbTAgcGZjMyBtYjggZjE0XCI+XG4gICAgICAgICAgU2VsZWN0IEhvdGVsIENhdGVnb3J5XG4gICAgICAgICAgPGVtIGNsYXNzTmFtZT1cInBmYzIgZjE2IGZ3YlwiPio8L2VtPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGgtY29udGFpbmVyIGZsZXggZmxleFdyYXAgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9udGgtb3B0aW9uICR7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxzLnN0YXI1ID8gJ2FjdGl2ZScgOiAnJ1xuICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJob3RlbC1jaGVja2JveDVcIlxuICAgICAgICAgICAgICBuYW1lPVwic3RhcjVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveC1jb21tb25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaG90ZWxzLnN0YXI1fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG90ZWwtY2hlY2tib3g1XCIgY2xhc3NOYW1lPVwiY3Vyc29yUCBwMFwiPlxuICAgICAgICAgICAgICA1IFN0YXJcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9udGgtb3B0aW9uICR7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxzLnN0YXI0ID8gJ2FjdGl2ZScgOiAnJ1xuICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJob3RlbC1jaGVja2JveDRcIlxuICAgICAgICAgICAgICBuYW1lPVwic3RhcjRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveC1jb21tb25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaG90ZWxzLnN0YXI0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG90ZWwtY2hlY2tib3g0XCIgY2xhc3NOYW1lPVwiY3Vyc29yUCBwMFwiPlxuICAgICAgICAgICAgICA0IFN0YXJcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9udGgtb3B0aW9uICR7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxzLnN0YXIzID8gJ2FjdGl2ZScgOiAnJ1xuICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJob3RlbC1jaGVja2JveDNcIlxuICAgICAgICAgICAgICBuYW1lPVwic3RhcjNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveC1jb21tb25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaG90ZWxzLnN0YXIzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG90ZWwtY2hlY2tib3gzXCIgY2xhc3NOYW1lPVwiY3Vyc29yUCBwMFwiPlxuICAgICAgICAgICAgICAzIFN0YXJcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9udGgtb3B0aW9uICR7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxzLnN0YXIyID8gJ2FjdGl2ZScgOiAnJ1xuICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJob3RlbC1jaGVja2JveDJcIlxuICAgICAgICAgICAgICBuYW1lPVwic3RhcjJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveC1jb21tb25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaG90ZWxzLnN0YXIyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG90ZWwtY2hlY2tib3gyXCIgY2xhc3NOYW1lPVwiY3Vyc29yUCBwMFwiPlxuICAgICAgICAgICAgICAyIFN0YXJcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb250aC1vcHRpb24gJHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxzLm5vSG90ZWwgPyAnYWN0aXZlJyA6ICcnXG4gICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5vSG90ZWxcIlxuICAgICAgICAgICAgICBpZD1cIk5vLWhvdGVsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5ob3RlbHMubm9Ib3RlbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwiTm8taG90ZWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3JQIHAwXCI+XG4gICAgICAgICAgICAgIEhvdGVsIE5vdCBSZXF1aXJlZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMubWV0YSAmJlxuICAgICAgICAgIHRoaXMucHJvcHMubWV0YS50b3VjaGVkICYmXG4gICAgICAgICAgKHRoaXMucHJvcHMubWV0YS5lcnJvciAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWV0YS5lcnJvcn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSG90ZWxSYXRpbmcucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRpc3BhdGNoUnhGb3JtQWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b3VjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNIb3RlbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkhvdGVsUmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybVZhbHVlczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsUmF0aW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBIb3RlbFJhdGluZyBmcm9tIFwiLi9Ib3RlbFJhdGluZ1wiO1xuaW1wb3J0IHsgcmVxdWlyZWRXaXRobWVzc2FnZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlscy9mb3JtVmFsaWRhdG9yc1wiO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xuaW1wb3J0IEZsaWdodEJvb2tpbmcgZnJvbSAnLi9GbGlnaHRCb29rU2xpZGVyJztcbmltcG9ydCB7XG4gIFNFUVVFTlRJQUxfRk9STV9UV08sXG4gIFNFUVVFTlRJQUxfRk9STV9GT1VSLFxuICBTRVFVRU5USUFMX0ZPUk1fU0lYXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb25zdGFudHMvU2xpZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9mb290ZXJcIjtcbmltcG9ydCBDYWJmb3JTaWdodHNlZWluZyBmcm9tICcuL0NhYmZvclNpZ2h0c2VlaW5nJztcblxuY29uc3QgcXVlc3Rpb24gPSB7XG4gIGN1c3RvbWl6YXRpb25JZDogMjQsXG4gIGN1c3RvbWl6YXRpb25UYWdzOiBcImNhYlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgaGFzT3RoZXJzOiBmYWxzZSxcbiAgaWQ6IDEzNixcbiAgaWRlbnRpZmllcjogXCJjdXN0XzI0XCIsXG4gIGpzb25WYWx1ZVR5cGU6IFwiaGFzaFwiLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgaWQ6ICc5OScsXG4gICAgICBtaXNjOiBcIlwiLFxuICAgICAgbmFtZTogXCJZZXNcIixcbiAgICAgIHRhZ3M6IFwiXCIsXG4gICAgICB1cmw6IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnMTAwJyxcbiAgICAgIG1pc2M6IFwiXCIsXG4gICAgICBuYW1lOiBcIk5vXCIsXG4gICAgICB0YWdzOiBcIlwiLFxuICAgICAgdXJsOiBcIlwiXG4gICAgfV0sXG4gIHF1ZXN0aW9uU2VxdWVuY2U6IDEsXG4gIHJhaWxzRm9ybU5hbWU6IFwib3RoZXJfYW5zd2Vyc19hdHRyaWJ1dGVzXCIsXG4gIHRlbXBsYXRlSWQ6IFwiMVwiLFxuICB0ZW1wbGF0ZVR5cGU6IFwicmFkaW9fYnV0dG9uXCIsXG4gIHRpdGxlOiBcIkNhYiBmb3IgbG9jYWwgc2lnaHRzZWVpbmc/XCIsXG4gIHVzZUlucHV0Rm9yT3B0aW9uczogZmFsc2UsXG4gIHZhbHVlVHlwZTogXCJzaW5nbGVfdmFsdWVcIlxufTtcblxuXG5jbGFzcyBJbmNsdXNpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzSG90ZWxTZWxlY3RlZDogdGhpcy5zZWxlY3RIb3RlbChwcm9wcylcbiAgICB9O1xuICB9XG5cbiAgZ29CYWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYXRpb24gOiB7IHF1ZXJ5IH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc3RlcCA9IFNFUVVFTlRJQUxfRk9STV9UV087XG4gICAgaWYocXVlcnkudmFyaWF0aW9uID09PSAnMycpIHtcbiAgICAgIHN0ZXAgPSBTRVFVRU5USUFMX0ZPUk1fVFdPO1xuICAgIH1lbHNlIGlmKHF1ZXJ5LnZhcmlhdGlvbiA9PT0gJzQnKSB7XG4gICAgICBzdGVwID0gU0VRVUVOVElBTF9GT1JNX1NJWDtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5jYWxsTmV4dFNsaWRlKHtcbiAgICAgIHN1Ym1pdFZhcmlhdGlvbjogJycsXG4gICAgICB2YXJpYXRpb246IHRydWUsXG4gICAgICB2YXJpYXRpb25TdGVwOiBzdGVwLFxuICAgICAgaXNCYWNrQnV0dG9uOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgZ29Gb3J3YXJkID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2FsbE5leHRTbGlkZSh7XG4gICAgICBzdWJtaXRWYXJpYXRpb246ICcnLFxuICAgICAgdmFyaWF0aW9uOiB0cnVlLFxuICAgICAgdmFyaWF0aW9uU3RlcDogU0VRVUVOVElBTF9GT1JNX0ZPVVJcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVIb3RlbENoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNIb3RlbFNlbGVjdGVkOiAhdGhpcy5zdGF0ZS5pc0hvdGVsU2VsZWN0ZWQgfSwgKCkgPT4ge1xuICAgICAgY29uc3QgaG90ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTm8taG90ZWwnKTtcbiAgICAgIGhvdGVsLmNsaWNrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VsZWN0SG90ZWwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGZvcm1WYWx1ZXMgfSA9IHByb3BzO1xuICAgIGlmKGZvcm1WYWx1ZXMuaG90ZWxfY2F0ZWdvcnlfYW5zd2Vyc19hdHRyaWJ1dGVzICYmXG4gICAgICBmb3JtVmFsdWVzLmhvdGVsX2NhdGVnb3J5X2Fuc3dlcnNfYXR0cmlidXRlcy5sZW5ndGggJiZcbiAgICAgIGZvcm1WYWx1ZXMuaG90ZWxfbmVlZGVkX2Fuc3dlcl9hdHRyaWJ1dGVzICYmXG4gICAgICBmb3JtVmFsdWVzLmhvdGVsX25lZWRlZF9hbnN3ZXJfYXR0cmlidXRlcy5vcHRpb25faWQgIT09ICc5NicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNIb3RlbFNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBnb05leHREaXNhYmxlZCA9ICEoZm9ybVZhbHVlcy5ob3RlbF9uZWVkZWRfYW5zd2VyX2F0dHJpYnV0ZXMgfHxcbiAgICAgIGZvcm1WYWx1ZXMuaG90ZWxfY2F0ZWdvcnlfYW5zd2Vyc19hdHRyaWJ1dGVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNVwiPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgY29tcG9uZW50PXtIb3RlbFJhdGluZ31cbiAgICAgICAgICAgIG5hbWU9XCJob3RlbF9jYXRlZ29yeV9hbnN3ZXJzX2F0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgZGlzcGF0Y2hSeEZvcm1BY3Rpb249e3RoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb259XG4gICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWRXaXRobWVzc2FnZSgnSG90ZWwgZmllbGQgbXVzdCBiZSBzZWxlY3RlZCcpfVxuICAgICAgICAgICAgaXNIb3RlbFNlbGVjdGVkPXtpc0hvdGVsU2VsZWN0ZWR9XG4gICAgICAgICAgICB0b3VjaD17dGhpcy5wcm9wcy50b3VjaH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdzkgaWJsb2NrIG0wIHBmYzMgbWI4IGYxNFwiPlNlbGVjdCBvdGhlciBpbmNsdXNpb25zPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2VCZXR3ZWVuIG1iMjQgZmxleFdyYXBcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0ZsaWdodEJvb2tpbmd9XG4gICAgICAgICAgICAgIG5hbWU9XCJmbGlnaHRfYW5zd2VyX2F0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17Q2FiZm9yU2lnaHRzZWVpbmd9XG4gICAgICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgbmFtZT1cIm90aGVyX2Fuc3dlcnNfYXR0cmlidXRlc1sxXVwiXG4gICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIGdvQmFjaz17dGhpcy5nb0JhY2t9IGdvRm9yd2FyZD17dGhpcy5nb0ZvcndhcmR9IGdvTmV4dERpc2FibGVkPXtnb05leHREaXNhYmxlZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSW5jbHVzaW9ucy5wcm9wVHlwZXMgPSB7XG4gIGZvcm1TdGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZGlzcGF0Y2hSeEZvcm1BY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICB0b3VjaDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNhbGxOZXh0U2xpZGU6IFByb3BUeXBlcy5mdW5jLFxuICBmb3JtVmFsdWVzOiAgUHJvcFR5cGVzLm9iamVjdCxcbiAgbG9jYXRpb246ICBQcm9wVHlwZXMub2JqZWN0LFxuICBjb21tb25Qcm9wZXJ0aWVzOiBQcm9wVHlwZXMub2JqLFxuICBtZXRhOiBQcm9wVHlwZXMub2JqLFxuICBwcm9ncmVzc0JhcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluY2x1c2lvbnM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJztcbmltcG9ydCB7XG4gIFNFUVVFTlRJQUxfRk9STV9UV08sXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb25zdGFudHMvU2xpZGVyXCI7XG5pbXBvcnQgeyByZXF1aXJlZFdpdGhtZXNzYWdlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL2Zvcm1WYWxpZGF0b3JzXCI7XG5pbXBvcnQgeyBEZXN0aW5hdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9oZWxwZXJzL0ljb24vSWNvblwiO1xuaW1wb3J0IHsgcmVuZGVyVG9Mb2NhdGlvbiwgZ2VuZXJpY0NoZWNrYm94IH0gZnJvbSAnLi4vLi4vRm9ybU9uZVZhcmlhdGlvbic7XG5cbmNvbnN0IHN1Z2dlc3RlZERlc3RpbmF0aW9ucyA9IFsnS2VyYWxhJywgJ1RoYWlsYW5kJywgJ0hpbWFjaGFsJywgJ0JhbGknLCAnS2FzaG1pcicsICdNYWxkaXZlcycsICdBbmRhbWFuJyxcbiAgJ01hdXJpdGl1cycsICdTaWtraW0nLCAnU2luZ2Fwb3JlJywgJ0F1c3RyYWxpYSddO1xuXG5jbGFzcyBTdGFydFBsYW5uaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dEZXN0aW5hdGlvbnM6IGZhbHNlLFxuICAgICAgc2hvd0ljb246IHRydWVcbiAgICB9O1xuICB9XG5cbiAgZ29CYWNrID0gKCkgPT4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBnb0ZvcndhcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jYWxsTmV4dFNsaWRlKHtcbiAgICAgIHN1Ym1pdFZhcmlhdGlvbjogJycsXG4gICAgICB2YXJpYXRpb246IHRydWUsXG4gICAgICB2YXJpYXRpb25TdGVwOiBTRVFVRU5USUFMX0ZPUk1fVFdPLFxuICAgICAgc2VsZWN0ZWRQaWxsSW5kZXg6IDBcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2VJbnB1dCA9IChkZXN0aW5hdGlvbiwgaSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBpbGxJbmRleDogaSB9KTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZUZvcm1GaWVsZCgnTGVhZEZvcm0nLCAndG9fbG9jJywgZGVzdGluYXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RGVzdGluYXRpb25zOiBmYWxzZSwgc2hvd0ljb246IHRydWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyU3VnZ2VzdGVkUGlsbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gbWIxNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc3RpbmF0aW9uLXN1Z2dlc3Rpb25zIGZsZXggb3ZlcmZsb3dhXCI+XG4gICAgICAgICAge3N1Z2dlc3RlZERlc3RpbmF0aW9ucy5tYXAoKGRlc3RpbmF0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN1Z2dlc3RlZC1pdGVtIHNmYzEgZjE0IG1yOCAke3RoaXMuc3RhdGUuc2VsZWN0ZWRQaWxsSW5kZXggPT09IGkgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VJbnB1dChkZXN0aW5hdGlvbiwgaSl9PntkZXN0aW5hdGlvbn08L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIG9uVG9Mb2NGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Rlc3RpbmF0aW9uczogdHJ1ZSwgc2hvd0ljb246IGZhbHNlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEZXN0aW5hdGlvbnM6IGZhbHNlLCBzaG93SWNvbjogZmFsc2UgfSk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVCbHVyKCk7XG4gIH07XG5cbiAgaXNBbmRyb2lkID0gKCkgPT4ge1xuICAgIGlmICggbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgKSB7XG4gICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTEgO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgb25Gcm9tTG9jRm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICggdGhpcy5pc0FuZHJvaWQoKSAmJiBlbGVtICkge1xuICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKzE0MCk7XG4gICAgICB9LDUwMCk7XG5cbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGdvTmV4dERpc2FibGVkID0gIXRoaXMucHJvcHMuZm9ybVZhbHVlcy50b19sb2M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24taWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8RGVzdGluYXRpb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZC1pbmNsLWxhYmVsIHAxNSByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbmFtZT1cInRvX2xvY1wiXG4gICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlclRvTG9jYXRpb259XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiVG9cIlxuICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkV2l0aG1lc3NhZ2UoJ1BsZWFzZSBlbnRlciB5b3VyIGRlc3RpbmF0aW9uJyl9XG4gICAgICAgICAgICB0cmFja0Zvcm1PbmVJbnRlcmFjdGVkPXt0aGlzLnByb3BzLmhhbmRsRm9ybUludGVyYWN0aW9ufVxuICAgICAgICAgICAgb25Ub0xvY0ZvY3VzPXt0aGlzLm9uVG9Mb2NGb2N1c31cbiAgICAgICAgICAgIGhhbmRsZUJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gbWIxNVwiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJleHBsb3JpbmdfZGVzdGluYXRpb25zXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtnZW5lcmljQ2hlY2tib3h9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiSSBhbSBleHBsb3JpbmcgZGVzdGluYXRpb25zXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29tbW9uIHNmY3dcIlxuICAgICAgICAgICAgICBpZD1cImV4cGxvcmluZy1kZXN0aW5hdGlvbl9mbmV3XCJcbiAgICAgICAgICAgICAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZD17dGhpcy5wcm9wcy5oYW5kbEZvcm1JbnRlcmFjdGlvbn1cbiAgICAgICAgICAgICAgY2xhc3NuYW1lPVwiZXhwbG9yaW5nLWRlc3RpbmF0aW9uIGF0X2V4cGxvcmUgbWI4XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qe3RoaXMuc3RhdGUuc2hvd0Rlc3RpbmF0aW9ucyAmJiB0aGlzLnJlbmRlclN1Z2dlc3RlZFBpbGxzKCl9Ki99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9tLWxvY2F0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgaWQ9XCJmcm9tTG9jYXRpb25fZm5ld1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICBuYW1lPVwiZnJvbV9sb2NcIlxuICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnByb3BzLkZyb21Mb2NhdGlvbn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJvbVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBsYWJlbD1cIkZyb21cIlxuICAgICAgICAgICAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZD17dGhpcy5wcm9wcy5oYW5kbEZvcm1JbnRlcmFjdGlvbn1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gcm9tTG9jRm9jdXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgZ29Gb3J3YXJkPXt0aGlzLmdvRm9yd2FyZH0gZ29CYWNrRGlzYWJsZWQ9e3RydWV9IGdvTmV4dERpc2FibGVkPXtnb05leHREaXNhYmxlZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU3RhcnRQbGFubmluZy5wcm9wVHlwZXMgPSB7XG4gIGZvcm1TdGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgRnJvbUxvY2F0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hhbmdlRm9ybUZpZWxkOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGFuZGxGb3JtSW50ZXJhY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBoYW5kbGVCbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcmVxdWlyZWRXaXRobWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNhbGxOZXh0U2xpZGU6IFByb3BUeXBlcy5mdW5jLFxuICBwcm9ncmVzc0JhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNsaWRlckRpc3BsYXlNb2RlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydFBsYW5uaW5nO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBnZXRNb250aHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgcmV0VmFsdWUgPSBbXTtcbiAgY29uc3QgbW9udGhzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgY29uc3QgbSA9IG1vbnRoTmFtZXNbKChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgaSklMTIpXTtcbiAgICBtb250aHMucHVzaChtKTtcbiAgICByZXRWYWx1ZS5wdXNoKHtcbiAgICAgIHZhbHVlOiBtLFxuICAgICAgbGFiZWw6IG1cbiAgICB9KTtcbiAgfVxuICByZXRWYWx1ZS5wdXNoKHtcbiAgICB2YWx1ZTogYEFmdGVyICR7bW9udGhzW21vbnRocy5sZW5ndGggLSAxXX1gLFxuICAgIGxhYmVsOiBgQWZ0ZXIgJHttb250aHNbbW9udGhzLmxlbmd0aCAtIDFdfWBcbiAgfSk7XG4gIHJldFZhbHVlLnB1c2goe1xuICAgIHZhbHVlOiAnQW55dGltZScsXG4gICAgbGFiZWw6ICdBbnl0aW1lJ1xuICB9KTtcbiAgcmV0dXJuIHJldFZhbHVlO1xufTtcblxuY2xhc3MgVHJhdmVsTW9udGhzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkTW9udGggOiB0aGlzLnNldFNlbGVjdGVkTW9udGgocHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0U2VsZWN0ZWRNb250aCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVZhbHVlcyB9ID0gcHJvcHM7XG4gICAgaWYoZm9ybVZhbHVlcy5zdGFydF9kYXRlX2ZsZXhpYmxlKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZm9ybVZhbHVlcy5zdGFydF9kYXRlX2ZsZXhpYmxlLm1hdGNoKC8oXFx3KSsvZyk7XG4gICAgICBjb25zdCBtb250aHMgPSBnZXRNb250aHMoKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSBtb250aHMuZmluZEluZGV4KChtb250aCkgPT4ge1xuICAgICAgICByZXR1cm4gKG1vbnRoLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FmdGVyJykpID9cbiAgICAgICAgICBtYXRjaGVzWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdhZnRlcicgOlxuICAgICAgICAgIG1vbnRoLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IG1hdGNoZXNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZWN0ZWRNb250aDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgc2VsZWN0TW9udGggPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNb250aDogaW5kZXggfSk7XG4gICAgY29uc3QgbW9udGhzID0gZ2V0TW9udGhzKCk7XG4gICAgaWYoaW5kZXggPT09IDYgfHwgaW5kZXggPT09IDcpIHtcbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlQW55dGltZUNoYW5nZShtb250aHNbaW5kZXhdLnZhbHVlKTtcbiAgICB9ZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZU1vbnRoQ2hhbmdlKG1vbnRoc1tpbmRleF0udmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBnZXRNb250aHNMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vbnRocyA9IGdldE1vbnRocygpO1xuICAgIHJldHVybiBtb250aHMubWFwKChtb250aCwgaSkgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb250aC1vcHRpb24gbW9udGgtcGlsbHMgJHt0aGlzLnN0YXRlLnNlbGVjdGVkTW9udGggPT09IGkgPyAnYWN0aXZlJzogJyd9YH1cbiAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZWxlY3RNb250aChpKX1cbiAgICAgICAgICAga2V5PXtpfT57bW9udGgubGFiZWx9PC9kaXY+XG4gICAgKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10MTUgbWIxNSB0ZXh0LWNlbnRlciBtb250aC1zZWxlY3Rpb24tbW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGluZy1saW5lXCI+PC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmMTYgZnc3IHBiOCBpYmxvY2sgcGZjMyBtb250aC1vZi10cmF2ZWwtaGVhZGluZ1wiPk1vbnRoIG9mIFRyYXZlbDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGgtY29udGFpbmVyIGZsZXggZmxleFdyYXAgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAge3RoaXMuZ2V0TW9udGhzTGlzdCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGluZy1saW5lXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRyYXZlbE1vbnRocy5wcm9wVHlwZXMgPSB7XG4gIGZvcm1WYWx1ZXM6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5UcmF2ZWxNb250aHMuZGVmYXVsdFByb3BzID0ge1xuICBmb3JtVmFsdWVzOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbE1vbnRocztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHsgVHJhdmVsZXJzIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInO1xuaW1wb3J0IHtcbiAgU0VRVUVOVElBTF9GT1JNX0ZPVVIsIFNFUVVFTlRJQUxfRk9STV9TRVZFTixcbiAgU0VRVUVOVElBTF9GT1JNX1NJWCwgU0VRVUVOVElBTF9GT1JNX1RXT1xufSBmcm9tICdjb25zdGFudHMvU2xpZGVyJztcbmltcG9ydCBUcmF2ZWxlcklucHV0RmllbGQgZnJvbSAnLi9UcmF2ZWxlcklucHV0RmllbGQnO1xuXG5jb25zdCBHVHJhdkNvdW50RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmICAuRHJvcGRvd24tbWVudSc6IHtcbiAgICBtYXhIZWlnaHQ6ICcxMTZweCcsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGRDb3VudChmb3JtVmFsdWVzLCBpbmRleCkge1xuICB0cnkge1xuICAgIHJldHVybiBmb3JtVmFsdWVzLmNoaWxkX2FnZV9hbnN3ZXJzX2F0dHJpYnV0ZXNbaW5kZXhdLnVzZXJfaW5wdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gJzAnO1xuICB9XG59XG5cbmNsYXNzIFRyYXZlbGVyQ291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRWYWx1ZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZUNoaWxkQ291bnRJblJlZHV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGQsIGluZmFudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b3RhbENvdW50ID1cbiAgICAgIHBhcnNlSW50KGNoaWxkLnZhbHVlLCAxMCkgK1xuICAgICAgcGFyc2VJbnQoaW5mYW50LnZhbHVlLCAxMCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbih0b3RhbENvdW50LnRvU3RyaW5nKCksICdjaGlsZCcpO1xuICB9XG5cbiAgaGFuZGxlVHJhdmVsZXJDb3VudCh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgbGV0IGNoaWxkQWdlQXR0cmlidXRlcztcbiAgICBpZiAoZmllbGROYW1lID09PSAnaW5mYW50Jykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZmFudDogeyB2YWx1ZTogdmFsdWUsIGxhYmVsOiB2YWx1ZSB9IH0sICgpID0+XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRDb3VudEluUmVkdXgoKVxuICAgICAgKTtcbiAgICAgIGNoaWxkQWdlQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb3B0aW9uX2lkOiAnMjknLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiAnNycsXG4gICAgICAgIHVzZXJfaW5wdXQ6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihcbiAgICAgICAgY2hpbGRBZ2VBdHRyaWJ1dGVzLFxuICAgICAgICAnY2hpbGRfYWdlX2Fuc3dlcnNfYXR0cmlidXRlc1swXSdcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChmaWVsZE5hbWUgPT09ICdjaGlsZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGlsZDogeyB2YWx1ZTogdmFsdWUsIGxhYmVsOiB2YWx1ZSB9IH0sICgpID0+XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRDb3VudEluUmVkdXgoKVxuICAgICAgKTtcbiAgICAgIGNoaWxkQWdlQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb3B0aW9uX2lkOiAnMzEnLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiAnNycsXG4gICAgICAgIHVzZXJfaW5wdXQ6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihcbiAgICAgICAgY2hpbGRBZ2VBdHRyaWJ1dGVzLFxuICAgICAgICAnY2hpbGRfYWdlX2Fuc3dlcnNfYXR0cmlidXRlc1syXSdcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24odmFsdWUsIGZpZWxkTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGVmYXVsdFZhbHVlcyA9ICgpID0+IHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWR1bHRzOiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLmZvcm1WYWx1ZXMuYWR1bHQgfHwgJzInLFxuICAgICAgICBsYWJlbDogdGhpcy5wcm9wcy5mb3JtVmFsdWVzLmFkdWx0IHx8ICcyJyxcbiAgICAgIH0sXG4gICAgICBjaGlsZDoge1xuICAgICAgICB2YWx1ZTogZ2V0Q2hpbGRDb3VudCh0aGlzLnByb3BzLmZvcm1WYWx1ZXMsIDIpLFxuICAgICAgICBsYWJlbDogZ2V0Q2hpbGRDb3VudCh0aGlzLnByb3BzLmZvcm1WYWx1ZXMsIDIpLFxuICAgICAgfSxcbiAgICAgIGluZmFudDoge1xuICAgICAgICB2YWx1ZTogZ2V0Q2hpbGRDb3VudCh0aGlzLnByb3BzLmZvcm1WYWx1ZXMsIDApLFxuICAgICAgICBsYWJlbDogZ2V0Q2hpbGRDb3VudCh0aGlzLnByb3BzLmZvcm1WYWx1ZXMsIDApLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGdvQmFjayA9ICgpID0+IHtcbiAgICBjb25zdCBpc0RlYWwgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5LmRlYWxzO1xuICAgIGNvbnN0IHNsaWRlciA9IGlzRGVhbCA/IFNFUVVFTlRJQUxfRk9STV9UV08gOiBTRVFVRU5USUFMX0ZPUk1fRk9VUjtcbiAgICB0aGlzLnByb3BzLmNhbGxOZXh0U2xpZGUoe1xuICAgICAgc3VibWl0VmFyaWF0aW9uOiAnJyxcbiAgICAgIHZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgIHZhcmlhdGlvblN0ZXA6IHNsaWRlcixcbiAgICAgIGlzQmFja0J1dHRvbjogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGdvRm9yd2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvY2F0aW9uIDogeyBxdWVyeSB9IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHN0ZXAgPSBTRVFVRU5USUFMX0ZPUk1fU0lYO1xuICAgIGlmKHF1ZXJ5LnZhcmlhdGlvbiA9PT0gJzMnKSB7XG4gICAgICBzdGVwID0gU0VRVUVOVElBTF9GT1JNX1NJWDtcbiAgICB9ZWxzZSBpZihxdWVyeS52YXJpYXRpb24gPT09ICc0Jykge1xuICAgICAgc3RlcCA9IFNFUVVFTlRJQUxfRk9STV9TRVZFTjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmNhbGxOZXh0U2xpZGUoe1xuICAgICAgc3VibWl0VmFyaWF0aW9uOiAnJyxcbiAgICAgIHZhcmlhdGlvbjogdHJ1ZSxcbiAgICAgIHZhcmlhdGlvblN0ZXA6IHN0ZXAsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8R1RyYXZDb3VudERpdiBjbGFzc05hbWU9XCJ0cmF2LWNvdW50IGZvcm0tYm9keSBwMTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmF2ZWxsZXItaWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8VHJhdmVsZXJzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHA4IHB0MCBtYjE1XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkZyb21cIiBjbGFzc05hbWU9XCJmMTQgZnc5IHBiOCBibG9jayBwZmMzXCI+XG4gICAgICAgICAgICAgIEFkdWx0cyA8c3BhbiBjbGFzc05hbWU9XCJwZmM0IGZ3NCBmMTJcIj4oMTIrIHlycyk8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGZpZWxkTmFtZT1cImFkdWx0XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtUcmF2ZWxlcklucHV0RmllbGR9XG4gICAgICAgICAgICAgIGRpc3BhdGNoPXt0aGlzLnByb3BzLm1ldGEuZGlzcGF0Y2h9XG4gICAgICAgICAgICAgIGZvcm09e3RoaXMucHJvcHMubWV0YS5mb3JtfVxuICAgICAgICAgICAgICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbj17dGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbn1cbiAgICAgICAgICAgICAgZm9ybVZhbHVlcz17dGhpcy5wcm9wcy5mb3JtVmFsdWVzfVxuICAgICAgICAgICAgICBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmFkdWx0cy52YWx1ZX1cbiAgICAgICAgICAgICAgbGFiZWw9XCJBZHVsdHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwOCBwdDAgbWIxNVwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJGcm9tXCIgY2xhc3NOYW1lPVwiZjE0IGZ3OSBwYjggYmxvY2sgcGZjM1wiPlxuICAgICAgICAgICAgICBJbmZhbnQgPHNwYW4gY2xhc3NOYW1lPVwicGZjNCBmdzQgZjEyXCI+KDAtMnlycyk8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGZpZWxkTmFtZT1cImluZmFudFwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VHJhdmVsZXJJbnB1dEZpZWxkfVxuICAgICAgICAgICAgICBkaXNwYXRjaD17dGhpcy5wcm9wcy5tZXRhLmRpc3BhdGNofVxuICAgICAgICAgICAgICBmb3JtPXt0aGlzLnByb3BzLm1ldGEuZm9ybX1cbiAgICAgICAgICAgICAgZGlzcGF0Y2hSeEZvcm1BY3Rpb249e3RoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb259XG4gICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbmZhbnQudmFsdWV9XG4gICAgICAgICAgICAgIGhhbmRsZVRyYXZlbGVyQ291bnQ9eyh2YWx1ZSkgPT4gdGhpcy5oYW5kbGVUcmF2ZWxlckNvdW50KHZhbHVlLCAnaW5mYW50Jyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHA4IHB0MCBtYjE1XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkZyb21cIiBjbGFzc05hbWU9XCJmMTQgZnc5IHBiOCBibG9jayBwZmMzXCI+XG4gICAgICAgICAgICAgIENoaWxkcmVuIDxzcGFuIGNsYXNzTmFtZT1cInBmYzQgZnc0IGYxMlwiPigyLTEyeXJzKTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgZmllbGROYW1lPVwiY2hpbGRcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RyYXZlbGVySW5wdXRGaWVsZH1cbiAgICAgICAgICAgICAgZGlzcGF0Y2g9e3RoaXMucHJvcHMubWV0YS5kaXNwYXRjaH1cbiAgICAgICAgICAgICAgZm9ybT17dGhpcy5wcm9wcy5tZXRhLmZvcm19XG4gICAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgIGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuY2hpbGQudmFsdWV9XG4gICAgICAgICAgICAgIGhhbmRsZVRyYXZlbGVyQ291bnQ9eyh2YWx1ZSkgPT4gdGhpcy5oYW5kbGVUcmF2ZWxlckNvdW50KHZhbHVlLCAnY2hpbGQnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIGdvQmFjaz17dGhpcy5nb0JhY2t9IGdvRm9yd2FyZD17dGhpcy5nb0ZvcndhcmR9IC8+XG4gICAgICA8L0dUcmF2Q291bnREaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UcmF2ZWxlckNvdW50LnByb3BUeXBlcyA9IHtcbiAgZm9ybVZhbHVlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2FsbE5leHRTbGlkZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybVN0YWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBwcm9ncmVzc0JhcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyQ291bnQ7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUcmF2ZWxlcklucHV0RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXRWYWx1ZTogdGhpcy5wcm9wcy5pbnB1dFZhbHVlXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgdGhpcy5wcm9wcy5maWVsZE5hbWUpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZih0aGlzLnByb3BzLmZpZWxkTmFtZSA9PT0gJ2FkdWx0Jykge1xuICAgICAgaWYgKHZhbHVlID49IDIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogMSB9KTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICBpZih2YWx1ZSA+PTApe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IDAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24odmFsdWUsIHRoaXMucHJvcHMuZmllbGROYW1lKTtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVRyYXZlbGVyQ291bnQodmFsdWUpO1xuICB9O1xuXG4gIHVwZGF0ZURheXMgPSAoYWN0aW9uKSA9PiB7XG4gICAgbGV0IHRlbXBWYWx1ZSA9IDA7XG4gICAgbGV0IG5ld1ZhbHVlID0gMDtcbiAgICBsZXQgY3VycmVudFZhbHVlID0gMDtcbiAgICBpZih0aGlzLnByb3BzLmZpZWxkTmFtZSA9PT0gJ2FkdWx0Jyl7XG4gICAgICBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWUgPyB0aGlzLnN0YXRlLmlucHV0VmFsdWUgOiAxO1xuICAgIH1lbHNlIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA/IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA6IDA7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2luYycpIHtcbiAgICAgIHRlbXBWYWx1ZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBWYWx1ZSA9IC0xO1xuICAgIH1cbiAgICBuZXdWYWx1ZSA9IHBhcnNlSW50KGN1cnJlbnRWYWx1ZSwgMTApICsgdGVtcFZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA+PSAxICYmIHRoaXMucHJvcHMuZmllbGROYW1lID09PSAnYWR1bHQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKG5ld1ZhbHVlLnRvU3RyaW5nKCksIHRoaXMucHJvcHMuZmllbGROYW1lKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLnByb3BzLmZpZWxkTmFtZSA9PT0gJ2luZmFudCcgfHwgdGhpcy5wcm9wcy5maWVsZE5hbWUgPT09ICdjaGlsZCcpICYmIG5ld1ZhbHVlID49IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24obmV3VmFsdWUudG9TdHJpbmcoKSwgdGhpcy5wcm9wcy5maWVsZE5hbWUpO1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVUcmF2ZWxlckNvdW50KG5ld1ZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogMCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF5c0NvdW50IHJlbGF0aXZlIGlucHV0LXdpdGgtaWNvbi1ib3ggaW5wdXQtdHdvLWljb25zIGlucHV0LXdpdGgtaWNvbi1ib3hcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMudXBkYXRlRGF5cygnZGVjJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi1kYXRlIGN1cnNvclAgbWludXMtaWNvblwiIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5maWVsZE5hbWV9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgdGV4dC1jZW50ZXIgZHVyYXRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuZmllbGROYW1lfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZURheXMoJ2luYycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbHVzLWRhdGUgY3Vyc29yUCBwbHVzLWljb25cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWV0YVxuICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5tZXRhLnRvdWNoZWRcbiAgICAgICAgICAgICYmICh0aGlzLnByb3BzLm1ldGEuZXJyb3JcbiAgICAgICAgICAgICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj57dGhpcy5wcm9wcy5tZXRhLmVycm9yfTwvc3Bhbj4pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRyYXZlbGVySW5wdXRGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIGRpc3BhdGNoUnhGb3JtQWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVUcmF2ZWxlckNvdW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWV0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UcmF2ZWxlcklucHV0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBpbnB1dFZhbHVlOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXJJbnB1dEZpZWxkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGaWx0ZXJDbGVhciBmcm9tICcuLi8uLi9GaWx0ZXJDbGVhcic7XG5cbmNvbnN0IHdpbGxCb29rUHJlZkN1c3RvbWl6YXRpb25zID0ge1xuICAyMDI6ICdJbiBOZXh0IDItMyBEYXlzJyxcbiAgMjAzOiAnSW4gVGhpcyBXZWVrJyxcbiAgMjA0OiAnSW4gVGhpcyBNb250aCcsXG4gIDIwNTogJ0xhdGVyIFNvbWV0aW1lJyxcbiAgMjU2OiAnSnVzdCBDaGVja2luZyBQcmljZScsXG59O1xuXG5jbGFzcyBXaWxsQm9vayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY2hlY2tJbml0aWFsVmFsdWVzID0gdGhpcy5jaGVja0luaXRpYWxWYWx1ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZDogdGhpcy5jaGVja0luaXRpYWxWYWx1ZXMoKSxcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tJbml0aWFsVmFsdWVzKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5mb3JtVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHdpbGxCb29rQXR0cmlidXRlcyA9IHRoaXMucHJvcHMuZm9ybVZhbHVlc1xuICAgICAgICAgIC5vdGhlcl9hbnN3ZXJzX2F0dHJpYnV0ZXNbMF07XG4gICAgICAgIGlmICh3aWxsQm9va0F0dHJpYnV0ZXMgJiYgd2lsbEJvb2tBdHRyaWJ1dGVzLm9wdGlvbklkKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbGxCb29rQXR0cmlidXRlcy5vcHRpb25JZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpc0NoZWNrZWQob3B0aW9uSWQpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgaW5kZXggPSBbdGhpcy5wcm9wcy5pbnB1dC52YWx1ZV0uZmluZEluZGV4KFxuICAgICAgICAgIG9iaiA9PiBvYmoub3B0aW9uX2lkLnRvU3RyaW5nKCkgPT09IG9wdGlvbklkLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleCAhPT0gLTE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2Uoe1xuICAgICAgb3B0aW9uX2lkOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBjdXN0b21pemF0aW9uX2lkOiAnNDMnLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHdpbGwtYm9vay1jb21wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIHdmdWxsXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBmdzcgc2ZjNiBtMCBpYmxvY2sgZjE0XCI+XG4gICAgICAgICAgICBJIFdpbGwgQm9vazxlbSBjbGFzc05hbWU9XCJwZmMyXCI+KjwvZW0+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxGaWx0ZXJDbGVhclxuICAgICAgICAgICAgbmFtZT1cIm90aGVyX2Fuc3dlcnNfYXR0cmlidXRlc1swXVwiXG4gICAgICAgICAgICB0ZXh0PVwiQ2xlYXJcIlxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGlkPVwiaWRfb3RoZXJfYW5zd2Vyc19hdHRyaWJ1dGVzWzBdXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy04IGZsZXggZmxleFdyYXAgZm9ybUJveFwiPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHdpbGxCb29rUHJlZkN1c3RvbWl6YXRpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy02IHA4IHdpbGwtYm9vay1jb24tb3B0aW9ucyBhdF9lZGl0X3dpbGxib29rXCJcbiAgICAgICAgICAgICAgICBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0XzQzXCJcbiAgICAgICAgICAgICAgICAgIGlkPXtgcmFkaW9fYnV0dG9uXyR7a2V5fV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5pc0NoZWNrZWQoa2V5KX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09PSBrZXl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2ByYWRpb19idXR0b25fJHtrZXl9XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvclBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wXCI+e3dpbGxCb29rUHJlZkN1c3RvbWl6YXRpb25zW2tleV19PC9wPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaWxsQm9vay5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5XaWxsQm9vay5kZWZhdWx0UHJvcHMgPSB7XG4gIGZvcm1WYWx1ZXM6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2lsbEJvb2s7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7XG4gIFByb2ZpbGVJY29uLFxuICBEb3duQXJyb3dcbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IEdUcmF2Q291bnREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgIC5Ecm9wZG93bi1tZW51Jzoge1xuICAgIG1heEhlaWdodDogJzExNnB4JyxcbiAgfVxufSk7XG5cbmNvbnN0IGFkdWx0T3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxNTA7IGkgKz0gMSkge1xuICAgIG9wdGlvbnMucHVzaCh7IHZhbHVlOiBpLCBsYWJlbDogaSB9KTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmNvbnN0IGNoaWxkT3B0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgZGVmYXVsdFZhbHVlID0geyB2YWx1ZTogJzAnLCBsYWJlbDogJzAnIH07XG4gIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgb3B0aW9ucy5wdXNoKGRlZmF1bHRWYWx1ZSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDE1MDsgaSArPSAxKSB7XG4gICAgb3B0aW9ucy5wdXNoKHsgdmFsdWU6IGksIGxhYmVsOiBpIH0pO1xuICB9XG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGRDb3VudChmb3JtVmFsdWVzLCBpbmRleCkge1xuICB0cnkge1xuICAgIHJldHVybiBmb3JtVmFsdWVzLmNoaWxkX2FnZV9hbnN3ZXJzX2F0dHJpYnV0ZXNbaW5kZXhdLnVzZXJfaW5wdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gJzAnO1xuICB9XG59XG5cbmNvbnN0IFRyYXZlbGVyRHJvcGRvd24gPSAoeyBpbnB1dCwgaWQsIG9wdGlvbnMsIGhhbmRsZVRyYXZlbGVyQ291bnQsIGRlZmF1bHRWYWx1ZSB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGlucHV0Lm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaGFuZGxlVHJhdmVsZXJDb3VudChldmVudC50YXJnZXQudmFsdWUsIGV2ZW50LnRhcmdldC5pZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VsZWN0IGlkPXtpZH0gY2xhc3NOYW1lPVwic2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9PlxuICAgICAge1xuICAgICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbi52YWx1ZX0ga2V5PXtgJHtpZH1fJHtvcHRpb24udmFsdWV9YH0+XG4gICAgICAgICAgICB7b3B0aW9uLnZhbHVlfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvc2VsZWN0PlxuICApO1xufTtcblxuVHJhdmVsZXJEcm9wZG93bi5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaGFuZGxlVHJhdmVsZXJDb3VudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVHJhdmVsZXJEcm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiAnJyxcbiAgaGFuZGxlVHJhdmVsZXJDb3VudDogKCkgPT4ge30sXG4gIGRlZmF1bHRWYWx1ZTogJydcbn07XG5cbmNsYXNzIFRyYXZlbGVyQ291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRWYWx1ZXMgPSB0aGlzLmhhbmRsZURlZmF1bHRWYWx1ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkQ291bnRJblJlZHV4ID0gdGhpcy51cGRhdGVDaGlsZENvdW50SW5SZWR1eC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0VmFsdWVzKCk7XG4gIH1cblxuICB1cGRhdGVDaGlsZENvdW50SW5SZWR1eCgpIHtcbiAgICBjb25zdCB0b3RhbENvdW50ID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jaGlsZC52YWx1ZSwgMTApICsgcGFyc2VJbnQodGhpcy5zdGF0ZS5pbmZhbnQudmFsdWUsIDEwKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKHRvdGFsQ291bnQudG9TdHJpbmcoKSwgJ2NoaWxkJyk7XG4gIH1cblxuICBoYW5kbGVUcmF2ZWxlckNvdW50KHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICBsZXQgY2hpbGRBZ2VBdHRyaWJ1dGVzO1xuICAgIGlmIChmaWVsZE5hbWUgPT09ICdpbmZhbnQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5mYW50OiB7IHZhbHVlOiB2YWx1ZSwgbGFiZWw6IHZhbHVlIH0gfSwgKCkgPT4gdGhpcy51cGRhdGVDaGlsZENvdW50SW5SZWR1eCgpKTtcbiAgICAgIGNoaWxkQWdlQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb3B0aW9uX2lkOiAnMjknLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiAnNycsXG4gICAgICAgIHVzZXJfaW5wdXQ6IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGNoaWxkQWdlQXR0cmlidXRlcywgJ2NoaWxkX2FnZV9hbnN3ZXJzX2F0dHJpYnV0ZXNbMF0nKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkTmFtZSA9PT0gJ2NoaWxkJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWxkOiB7IHZhbHVlOiB2YWx1ZSwgbGFiZWw6IHZhbHVlIH0gfSwgKCkgPT4gdGhpcy51cGRhdGVDaGlsZENvdW50SW5SZWR1eCgpKTtcbiAgICAgIGNoaWxkQWdlQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb3B0aW9uX2lkOiAnMzEnLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiAnNycsXG4gICAgICAgIHVzZXJfaW5wdXQ6IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoUnhGb3JtQWN0aW9uKGNoaWxkQWdlQXR0cmlidXRlcywgJ2NoaWxkX2FnZV9hbnN3ZXJzX2F0dHJpYnV0ZXNbMl0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbih2YWx1ZSwgZmllbGROYW1lKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZHVsdHM6IHtcbiAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMuZm9ybVZhbHVlcy5hZHVsdCB8fCAnMicsXG4gICAgICAgIGxhYmVsOiB0aGlzLnByb3BzLmZvcm1WYWx1ZXMuYWR1bHQgfHwgJzInXG4gICAgICB9LFxuICAgICAgY2hpbGQ6IHtcbiAgICAgICAgdmFsdWU6IGdldENoaWxkQ291bnQodGhpcy5wcm9wcy5mb3JtVmFsdWVzLCAyKSxcbiAgICAgICAgbGFiZWw6IGdldENoaWxkQ291bnQodGhpcy5wcm9wcy5mb3JtVmFsdWVzLCAyKVxuICAgICAgfSxcbiAgICAgIGluZmFudDoge1xuICAgICAgICB2YWx1ZTogZ2V0Q2hpbGRDb3VudCh0aGlzLnByb3BzLmZvcm1WYWx1ZXMsIDApLFxuICAgICAgICBsYWJlbDogZ2V0Q2hpbGRDb3VudCh0aGlzLnByb3BzLmZvcm1WYWx1ZXMsIDApXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEdUcmF2Q291bnREaXYgY2xhc3NOYW1lPVwicm93IHJvdy04IHRyYXYtY291bnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwOCBwdDBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkZyb21cIiBjbGFzc05hbWU9XCJmMTQgZnc5IHBiOCBibG9jayBwZmMzXCI+XG4gICAgICAgICAgICBBZHVsdHMgPHNwYW4gY2xhc3NOYW1lPVwicGZjNCBmdzQgZjEyXCI+KDEyKyB5cnMpPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13aXRoLWljb24tYm94IGlucHV0LWRyb3Bkb3duLWJveCBpbnB1dC1kcm9wZG93bi1ib3gtbG9uZ1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1pY29uIGZsZXhDZW50ZXIgcHJvZmlsZUNvblwiPjxQcm9maWxlSWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicjEwIGJsb2NrIHdhdXRvIGxhdXRvIGlucHV0LWljb24gYWJzb2x1dGUtY2VudGVyLXYgZG93bkFycm93XCI+PERvd25BcnJvdyAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFkdWx0XCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VHJhdmVsZXJEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJhZHVsdFwiXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXthZHVsdE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkdWx0cy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5hZHVsdHMudmFsdWV9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjJcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWR1bHRzOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tZXRhLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQEByZWR1eC1mb3JtL0NIQU5HRScsXG4gICAgICAgICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogdGhpcy5wcm9wcy5tZXRhLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2FkdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnM6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB2YWx1ZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHA4IHB0MFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiRnJvbVwiIGNsYXNzTmFtZT1cImYxNCBmdzkgcGI4IGJsb2NrIHBmYzNcIj5cbiAgICAgICAgICAgIEluZmFudCA8c3BhbiBjbGFzc05hbWU9XCJwZmM0IGZ3NCBmMTJcIj4oMC0yeXJzKTwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd2l0aC1pY29uLWJveCBpbnB1dC1kcm9wZG93bi1ib3ggaW5wdXQtZHJvcGRvd24tYm94LWxvbmdcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvbiBmbGV4Q2VudGVyIHByb2ZpbGVDb25cIj48UHJvZmlsZUljb24gLz48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInIxMCBibG9jayB3YXV0byBsYXV0byBpbnB1dC1pY29uIGFic29sdXRlLWNlbnRlci12IGRvd25BcnJvd1wiPjxEb3duQXJyb3cgLz48L3NwYW4+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbmZhbnRcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUcmF2ZWxlckRyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImluZmFudFwiXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGlsZE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmluZmFudC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5pbmZhbnQudmFsdWV9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuaGFuZGxlVHJhdmVsZXJDb3VudCh2YWx1ZSwgJ2luZmFudCcpfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhdmVsZXJDb3VudD17KHZhbHVlKSA9PiB0aGlzLmhhbmRsZVRyYXZlbGVyQ291bnQodmFsdWUsICdpbmZhbnQnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgcDggcHQwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJGcm9tXCIgY2xhc3NOYW1lPVwiZjE0IGZ3OSBwYjggYmxvY2sgcGZjM1wiPlxuICAgICAgICAgICAgQ2hpbGRyZW4gPHNwYW4gY2xhc3NOYW1lPVwicGZjNCBmdzQgZjEyXCI+KDItMTJ5cnMpPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13aXRoLWljb24tYm94IGlucHV0LWRyb3Bkb3duLWJveCBpbnB1dC1kcm9wZG93bi1ib3gtbG9uZ1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1pY29uIGZsZXhDZW50ZXIgcHJvZmlsZUNvblwiPjxQcm9maWxlSWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicjEwIGJsb2NrIHdhdXRvIGxhdXRvIGlucHV0LWljb24gYWJzb2x1dGUtY2VudGVyLXYgZG93bkFycm93XCI+PERvd25BcnJvdyAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoaWxkXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VHJhdmVsZXJEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJjaGlsZFwiXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGlsZE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoaWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmNoaWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmhhbmRsZVRyYXZlbGVyQ291bnQodmFsdWUsICdjaGlsZCcpfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhdmVsZXJDb3VudD17KHZhbHVlKSA9PiB0aGlzLmhhbmRsZVRyYXZlbGVyQ291bnQodmFsdWUsICdjaGlsZCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR1RyYXZDb3VudERpdj5cbiAgICApO1xuICB9XG59XG5cblRyYXZlbGVyQ291bnQucHJvcFR5cGVzID0ge1xuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRpc3BhdGNoUnhGb3JtQWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyQ291bnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEZpbHRlckNsZWFyIGZyb20gJy4vRmlsdGVyQ2xlYXInO1xuXG5jb25zdCBUeXBlVG91ciA9ICh7IHF1ZXN0aW9uLCBpbnB1dCwgbmFtZUZvckNsZWFyIH0pID0+IHtcbiAgY29uc3QgaXNDaGVja2VkID0gKG9wdGlvbklkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICBpbmRleCA9IFtpbnB1dC52YWx1ZV0uZmluZEluZGV4KG9iaiA9PiBvYmoub3B0aW9uX2lkLnRvU3RyaW5nKCkgPT09IG9wdGlvbklkLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChpbmRleCAhPT0gLTEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFxdWVzdGlvbi51c2VJbnB1dEZvck9wdGlvbnMpIHtcbiAgICAgIGlucHV0Lm9uQ2hhbmdlKHtcbiAgICAgICAgb3B0aW9uX2lkOiBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgY3VzdG9taXphdGlvbl9pZDogcXVlc3Rpb24uY3VzdG9taXphdGlvbklkLnRvU3RyaW5nKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIDo6IHNldCB1c2VyIGlucHV0XG4gICAgICBpbnB1dC5vbkNoYW5nZSh7XG4gICAgICAgIHVzZXJfaW5wdXQ6ICcnLFxuICAgICAgICBvcHRpb25faWQ6IGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICBjdXN0b21pemF0aW9uX2lkOiBxdWVzdGlvbi5jdXN0b21pemF0aW9uSWQudG9TdHJpbmcoKVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSB0b3VyLXR5cGUgYXRfdG91cnR5cGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIHdmdWxsXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgZnc3IHNmYzYgbTAgaWJsb2NrIGYxNFwiPntxdWVzdGlvbi50aXRsZX08L3A+XG4gICAgICAgIDxGaWx0ZXJDbGVhclxuICAgICAgICAgIG5hbWU9e25hbWVGb3JDbGVhcn1cbiAgICAgICAgICB0ZXh0PVwiQ2xlYXJcIlxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgaWQ9e2BpZF8ke25hbWVGb3JDbGVhcn1gfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy04IGZsZXggZmxleFdyYXAgZm9ybUJveCBcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVzdGlvbi5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwOCBhdF90b3VydHlwZV9yYWRpb1wiIGtleT17b3B0aW9uLmlkfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpby1jb21tb25cIlxuICAgICAgICAgICAgICAgICAgbmFtZT17YCR7cXVlc3Rpb24uaWRlbnRpZmllcn1bJHtpbmRleH1dYH1cbiAgICAgICAgICAgICAgICAgIGlkPXtgcmFkaW9fYnV0dG9uXyR7b3B0aW9uLmlkfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkKG9wdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgcmFkaW9fYnV0dG9uXyR7b3B0aW9uLmlkfV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cImN1cnNvclBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wXCI+e29wdGlvbi5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVHlwZVRvdXIucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBuYW1lRm9yQ2xlYXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZVRvdXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGaWx0ZXJDbGVhciBmcm9tICcuL0ZpbHRlckNsZWFyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3dpbGxCb29rLmNtLnNjc3MnO1xuXG5jb25zdCB3aWxsQm9va1ByZWZDdXN0b21pemF0aW9ucyA9IHtcbiAgMjAyOiAnSW4gTmV4dCAyLTMgRGF5cycsXG4gIDIwMzogJ0luIFRoaXMgV2VlaycsXG4gIDIwNDogJ0luIFRoaXMgTW9udGgnLFxuICAyMDU6ICdMYXRlciBTb21ldGltZScsXG4gIDI1NjogJ0p1c3QgQ2hlY2tpbmcgUHJpY2UnXG59O1xuXG5jbGFzcyBXaWxsQm9vayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY2hlY2tJbml0aWFsVmFsdWVzID0gdGhpcy5jaGVja0luaXRpYWxWYWx1ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZDogdGhpcy5jaGVja0luaXRpYWxWYWx1ZXMoKVxuICAgIH07XG4gIH1cblxuICBjaGVja0luaXRpYWxWYWx1ZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZvcm1WYWx1ZXMpIHtcbiAgICAgICAgY29uc3Qgd2lsbEJvb2tBdHRyaWJ1dGVzID0gdGhpcy5wcm9wcy5mb3JtVmFsdWVzLm90aGVyX2Fuc3dlcnNfYXR0cmlidXRlc1swXTtcbiAgICAgICAgaWYgKHdpbGxCb29rQXR0cmlidXRlcyAmJiB3aWxsQm9va0F0dHJpYnV0ZXMub3B0aW9uSWQpIHtcbiAgICAgICAgICByZXR1cm4gd2lsbEJvb2tBdHRyaWJ1dGVzLm9wdGlvbklkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGlzQ2hlY2tlZChvcHRpb25JZCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICBpbmRleCA9IFt0aGlzLnByb3BzLmlucHV0LnZhbHVlXS5maW5kSW5kZXgob2JqID0+IG9iai5vcHRpb25faWQudG9TdHJpbmcoKSA9PT0gb3B0aW9uSWQudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGluZGV4ICE9PSAtMSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UoeyBvcHRpb25faWQ6IGV2ZW50LnRhcmdldC52YWx1ZSwgY3VzdG9taXphdGlvbl9pZDogJzQzJyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCB3aWxsLWJvb2stY29tcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlibG9jayB3ZnVsbFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgZnc3IHNmYzYgbTAgaWJsb2NrIGYxNFwiPkkgV2lsbCBCb29rPGVtIGNsYXNzTmFtZT1cInBmYzJcIj4qPC9lbT48L3A+XG4gICAgICAgICAgPEZpbHRlckNsZWFyXG4gICAgICAgICAgICBuYW1lPVwib3RoZXJfYW5zd2Vyc19hdHRyaWJ1dGVzWzBdXCJcbiAgICAgICAgICAgIHRleHQ9XCJDbGVhclwiXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgaWQ9XCJpZF9vdGhlcl9hbnN3ZXJzX2F0dHJpYnV0ZXNbMF1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy04XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdpbGxCb29rUHJlZkN1c3RvbWl6YXRpb25zKS5tYXAoKGtleSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wteHMtNiBwOCB3aWxsLWJvb2stY29uLW9wdGlvbnMgYXRfZWRpdF93aWxsYm9vayAke3N0eWxlcy53aWxsQm9va31gfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8tY29tbW9uXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImN1c3RfNDNcIlxuICAgICAgICAgICAgICAgICAgICBpZD17YHJhZGlvX2J1dHRvbl8ke2tleX1fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmlzQ2hlY2tlZChrZXkpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkID09PSBrZXl9IC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhZGlvX2J1dHRvbl8ke2tleX1fJHtpbmRleH1gfSBjbGFzc05hbWU9XCJjdXJzb3JQXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wXCI+e3dpbGxCb29rUHJlZkN1c3RvbWl6YXRpb25zW2tleV19PC9wPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XaWxsQm9vay5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZvcm1WYWx1ZXM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbldpbGxCb29rLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9ybVZhbHVlczoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbGxCb29rO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid2lsbEJvb2tcIjogXCJfMVJIbDFmM2lSSU9Sd2NGM0hRdWFCT1wiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vRm9ybUxlYWQvTGVhZEZvcm0uc2Nzcyc7XG5pbXBvcnQgeyBMb2NhdGlvbk1hcmtlckljb24sIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gJy4vTG9jYXRpb25TZWFyY2gnO1xuXG5cbmNsYXNzIEZyb21Mb2NhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKF9fQ0xJRU5UX18pIHtcbiAgICAgIGNvbnN0IGdvb2dsZSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cuZ29vZ2xlIDogZmFsc2U7XG4gICAgICBpZiAobmF2aWdhdG9yICYmICEhbmF2aWdhdG9yLmdlb2xvY2F0aW9uICYmIGdvb2dsZSAmJiBnb29nbGUubWFwcyAmJiBnb29nbGUubWFwcy5HZW9jb2Rlcikge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgICAgY29uc3QgbGF0bGFuZyA9IHsgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSB9O1xuICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5pbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7IGxvY2F0aW9uOiBsYXRsYW5nIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICAgICAgICAgIC8vIHBsYWNlcyBsb2NhdGlvbiB3aWxsIGJlIHByZXNlbnQgaW4gMlxuICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMjsgaW5kZXggPj0gMDsgaW5kZXggLT0gMSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSByZXN1bHRzW2luZGV4XS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxhYmVsID09PSAnRnJvbScpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UoYWRkcmVzcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCwgbGFiZWwsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7XG4gICAgICB2YWx1ZTogaW5wdXQudmFsdWUsXG4gICAgICBwbGFjZWhvbGRlcjogJ0Zyb20gTG9jYXRpb24uLi4nLFxuICAgICAgb25DaGFuZ2U6IChvYmosIGNoZWNrID0gdHJ1ZSkgPT4ge1xuICAgICAgICBpbnB1dC5vbkNoYW5nZShvYmosIGNoZWNrKTtcbiAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICAgICAgICB0aGlzLnByb3BzLnRyYWNrRm9ybU9uZUludGVyYWN0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlkLFxuICAgICAgb25Gb2N1czogKGV2bnQpID0+IHtcbiAgICAgICAgaW5wdXQub25Gb2N1cyhldm50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmllbGQtbGFiZWwgbWIxNVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17bGFiZWx9IGNsYXNzTmFtZT1cImYxNCBmdzkgcGIxNSBibG9ja1wiPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13aXRoLWljb24tYm94XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtaWNvbiBmbGV4Q2VudGVyIGxvY2F0aW9uSWNvblNpemVcIj48TG9jYXRpb25NYXJrZXJJY29uIC8+PC9zcGFuPlxuICAgICAgICAgIDxMb2NhdGlvblNlYXJjaCBpbnB1dFByb3BzPXtpbnB1dFByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRnJvbUxvY2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkZyb21Mb2NhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJvbUxvY2F0aW9uO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgJy4vRnJvbUxvY2F0aW9uU2VhcmNoLnNjc3MnO1xuXG5pbXBvcnQge1xuICBsb2FkIGFzIGxvYWRTdWdnZXN0aW9ucyxcbiAgc3VnZ2VzdGlvbnNcbn0gZnJvbSAncmVkdWNlcnMvY2l0eVNlYXJjaCc7XG5cbkBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIHN1Z2dlc3Rpb25zOiBzdWdnZXN0aW9ucyhzdGF0ZSlcbiAgfSksXG4gIHtcbiAgICBsb2FkU3VnZ2VzdGlvbnMsXG4gIH1cbilcbmNsYXNzIEZyb21Mb2NhdGlvblNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3VnZ2VzdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZFN1Z2dlc3Rpb25zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpdGVtU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhY2tGb3JtT25lSW50ZXJhY3RlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBoYW5kbGVGb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGFuZGxlQmx1cjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN1Z2dlc3Rpb25zOiB7XG4gICAgICBkZXN0aW5hdGlvbnM6IFtdLFxuICAgICAgY2l0aWVzOiBbXSxcbiAgICB9LFxuICAgIGluaXRpYWxWYWx1ZTogJycsXG4gICAgaGFuZGxlQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBoYW5kbGVGb2N1czogKCkgPT4ge30sXG4gICAgaWQ6ICd0b0xvY2F0aW9uJyxcbiAgICBoYW5kbGVCbHVyOiAoKSA9PiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RTaG93bjogZmFsc2UsXG4gICAgICB0ZXJtOiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlQ2xpY2sgPSB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmx1ckhhbmRsZXIgPSB0aGlzLmJsdXJIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnB1dEJsdXIgPSB0aGlzLmlucHV0Qmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlICE9PSBwcmV2UHJvcHMuaW5pdGlhbFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGVybTogdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlcm06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgbGlzdFNob3duOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMudHJhY2tGb3JtT25lSW50ZXJhY3RlZCgpO1xuICAgIHRoaXMucHJvcHMubG9hZFN1Z2dlc3Rpb25zKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUJsdXIoKTtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlRm9jdXMoKTtcbiAgfVxuXG4gIGlucHV0Qmx1cihlKSB7XG4gICAgdGhpcy5wcm9wcy5pdGVtU2VsZWN0ZWQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgYmx1ckhhbmRsZXIoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWN1cnJlbnRUYXJnZXQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbGlzdFNob3duOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cbiAgX2hhbmRsZUNsaWNrKGl0ZW0pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxpc3RTaG93bjogZmFsc2UsXG4gICAgICB0ZXJtOiBpdGVtLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLml0ZW1TZWxlY3RlZChpdGVtLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVuZGVyTGlzdCA9IChsaXN0SXRlbSwgbGlzdCkgPT4ge1xuICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBmb3JtbG9jYXRpb24tYm94XCJcbiAgICAgICAgICAgIGtleT17bGlzdEl0ZW19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicDggbGlzdC1oZWFkaW5nXCI+e2xpc3RJdGVtfTwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpc3QubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5faGFuZGxlQ2xpY2t9IHZhbHVlPXtpdGVtLmtleX0+e2l0ZW0ua2V5fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1cIiBvbkJsdXI9e3RoaXMuYmx1ckhhbmRsZXJ9PlxuICAgICAgICA8aW5wdXQgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c30gYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB0eXBlPVwidGV4dFwiIG9uQmx1cj17dGhpcy5pbnB1dEJsdXJ9IHZhbHVlPXt0aGlzLnN0YXRlLnRlcm19IHBsYWNlaG9sZGVyPVwiV2hlcmUgWW91IFdhbnQgVG8gR28gP1wiIGlkPXt0aGlzLnByb3BzLmlkfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGZvcm1sb2NhdGlvbi1ib3gtZGF0YVwiPlxuICAgICAgICAgIHsodGhpcy5zdGF0ZS5saXN0U2hvd24pXG4gICAgICAgICAgICA/IFtyZW5kZXJMaXN0KCdEZXN0aW5hdGlvbnMnLCB0aGlzLnByb3BzLnN1Z2dlc3Rpb25zLmRlc3RpbmF0aW9ucyB8fCBbXSksXG4gICAgICAgICAgICAgIHJlbmRlckxpc3QoJ0NpdGllcycsIHRoaXMucHJvcHMuc3VnZ2VzdGlvbnMuY2l0aWVzIHx8IFtdKV1cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tTG9jYXRpb25TZWFyY2g7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtbG9jYXRpb24tYm94LWRhdGFcIjogXCJfMUF0bmxcIixcblx0XCJmb3JtbG9jYXRpb24tYm94XCI6IFwiXzFBTjRxXCJcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGxhY2VzQXV0b2NvbXBsZXRlIGZyb20gJ3JlYWN0LXBsYWNlcy1hdXRvY29tcGxldGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbG9jYXRpb25TZWFyY2guY20uc2Nzcyc7XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgcm9vdDogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICBpbnB1dDogeyB3aWR0aDogJzEwMCUnIH0sXG4gIGF1dG9jb21wbGV0ZUNvbnRhaW5lcjogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJywgekluZGV4OiA1IH0sXG4gIGF1dG9jb21wbGV0ZUl0ZW06IHsgY29sb3I6ICcjMzMzJyB9LFxuICBhdXRvY29tcGxldGVJdGVtQWN0aXZlOiB7IGNvbG9yOiAnI0ZFNTI0NicsIGJhY2tncm91bmRDb2xvcjogJyNGRkYnIH1cbn07XG5cbmNvbnN0IGNsYXNzTmFtZXMgPSB7fTtcblxuY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBpc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzRXJyb3I6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKHByb3BzLmlzRXJyb3IpIHtcbiAgICAgIGNsYXNzTmFtZXMuaW5wdXQgPSAnaW5wdXQtZXJyb3InO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNYXBMb2FkZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaW5wdXRQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCAkUyA9IHJlcXVpcmUoJ3NjcmlwdGpzJyk7XG4gICAgJFMoJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9saWJyYXJpZXM9cGxhY2VzJmtleT1BSXphU3lERHhBZ1VDWWhkcXFfRmJrWDE1UjF1SEFTdi13QUhEME0nLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc01hcExvYWRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZ29vZ2xlID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdy5nb29nbGUgOiBmYWxzZTtcbiAgICAgICAgaWYgKG5hdmlnYXRvciAmJiAhIW5hdmlnYXRvci5nZW9sb2NhdGlvbiAmJiBnb29nbGUgJiYgZ29vZ2xlLm1hcHMgJiYgZ29vZ2xlLm1hcHMuR2VvY29kZXIpIHtcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhdGxhbmcgPSB7IGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUgfTtcbiAgICAgICAgICAgIGlmICghaW5wdXRQcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgbG9jYXRpb246IGxhdGxhbmcgfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHBsYWNlcyBsb2NhdGlvbiB3aWxsIGJlIHByZXNlbnQgaW4gMlxuICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDI7IGluZGV4ID49IDA7IGluZGV4IC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyA9IHJlc3VsdHNbaW5kZXhdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKGFkZHJlc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlucHV0UHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5pc01hcExvYWRlZCA/XG4gICAgICAgIDxQbGFjZXNBdXRvY29tcGxldGVcbiAgICAgICAgICBpbnB1dFByb3BzPXtpbnB1dFByb3BzfVxuICAgICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxuICAgICAgICAgIGNsYXNzTmFtZXM9e2NsYXNzTmFtZXN9XG4gICAgICAgIC8+IDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHBiMCc+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbnB1dH0gaWJsb2NrIHBiMCByZWxhdGl2ZSB3ZnVsbGB9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2lucHV0UHJvcHMudmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17aW5wdXRQcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uU2VhcmNoO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbmNsYXNzIE1vbnRoQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5faGFuZGxlQ2xpY2sgPSB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJmbGV4aWJsZV9kYXRlX2ZuZXdcIiBjbGFzc05hbWU9XCJpbnB1dCBmb3JtLWRhdGUtY2hlY2sgYm94LWlucHV0LWZsZXhcIiBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDbGlja30+XG4gICAgICAgIHsgLyo8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgZm9ybS1kYXRlLWNoZWNrJyl9YH0gdmFsdWU9e3RoaXMucHJvcHMuZGF0ZVZhbHVlID8gdGhpcy5wcm9wcy5kYXRlVmFsdWUgOiAnJ30gcGxhY2Vob2xkZXI9XCJGbGV4aWJsZVwiIHJlYWRPbmx5IC8+ICovIH1cbiAgICAgICAge3RoaXMucHJvcHMuZGF0ZVZhbHVlID8gdGhpcy5wcm9wcy5kYXRlVmFsdWUgOiAnRmxleGlibGUnfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICAgIH1cblxuXG5Nb250aEJveC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jLFxuICBkYXRlVmFsdWU6IHByb3BUeXBlcy5zdHJpbmdcbn07XG5cbk1vbnRoQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbGljazogKCkgPT4ge30sXG4gIGRhdGVWYWx1ZTogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRoQm94O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRcIjogXCJfM3Z6OXlfTk9LQWpnN1R2NjNtUTBHQVwiXG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5LCBuby1ldmFsICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IFF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcENvbmZpZyc7XG5cbmltcG9ydCB7XG4gIHZhbGlkRGF0ZSxcbiAgZW1haWwgYXMgZW1haWxWYWxpZGF0b3IsXG4gIHBob25lTnVtYmVyLFxuICByZXF1aXJlZFdpdGhtZXNzYWdlXG59IGZyb20gJ3V0aWxzL2Zvcm1WYWxpZGF0b3JzJztcblxuaW1wb3J0IHtcbiAgcHJlcGFyZUV2ZW50T3JpZ2luVXJpLFxuICB0cmFja1NlZ21lbnRcbn0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7XG4gIFNFU1NJT05fVVVJRF9DT09LSUVfS0VZLFxuICBQQUdFX1VVSURfQ09PS0lFX0tFWSxcbiAgTEFORElOR19VVUlEX0NPT0tJRV9LRVksXG4gIFJFRkVSRVJfVVVJRF9LRVksXG4gIEZVTk5FTF9VVUlEX0tFWSxcbiAgVVNFUl9ST0xFX0NPT0tJRV9LRVksXG4gIFVTRVJfSURfQ09PS0lFX0tFWSxcbiAgZ2V0Rm9ybUZpbGxlZE9uLFxuICBnZXRGb3JtVHlwZSxcbiAgZ2V0TGVhZEZ1bm5lbE5hbWVcbn0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IFVQREFURV9SRURJU19LRVkgfSBmcm9tICcuLi8uLi9hY3Rpb25Db25zdGFudHMnO1xuaW1wb3J0IHsgU0VRVUVOVElBTF9GT1JNX0VORCwgVFJJUF9VUERBVEVEX0lOX1JFRElTLCBERUFMUyB9IGZyb20gJ2NvbnN0YW50cy9TbGlkZXInO1xuXG5pbXBvcnQge1xuICBTTElERVJfMSxcbiAgU0xJREVSXzIsXG4gIFNMSURFUl8zLFxuICBTRVFVRU5USUFMX0ZPUk1fT05FLFxuICBTRVFVRU5USUFMX0ZPUk1fVFdPLFxuICBTRVFVRU5USUFMX0ZPUk1fVEhSRUUsXG4gIFNFUVVFTlRJQUxfRk9STV9GT1VSLFxuICBTRVFVRU5USUFMX0ZPUk1fRklWRSxcbiAgU0VRVUVOVElBTF9GT1JNX1NJWCxcbiAgU0VRVUVOVElBTF9GT1JNX1NFVkVOLFxuICBVUERBVEVfVE9fREVTVElOQVRJT04sXG4gIFNFVF9ESVNQTEFZX01PREUsXG4gIFRJVExFXG59IGZyb20gJ2NvbnN0YW50cy9TbGlkZXInO1xuXG5pbXBvcnQge1xuICBnZXRGYWNlYm9va1RyYWNraW5nU2NyaXB0LFxuICBmaXJlRmFjZWJvb2tBZHdvcmQsXG4gIGdldENvb2tpZSxcbiAgc2V0Q29va2llLFxufSBmcm9tICdoZWxwZXJzL0Zvcm1EYXRhRm9ybWF0dGVyJztcblxuaW1wb3J0IHsgb3BlbkNoYXRIYW5kbGVyIH0gZnJvbSAnY29tcG9uZW50cy9GaXhlZE1lbnUvRml4ZWRNZW51JztcbmltcG9ydCBMZWFkRm9ybVR3byBmcm9tICdjb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvTGVhZEZvcm1Ud28nO1xuaW1wb3J0IExlYWRGb3JtVGhyZWUgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0xlYWRGb3JtVGhyZWUnO1xuaW1wb3J0IHsgaW9zRGVlcExpbmsgfSBmcm9tICdoZWxwZXJzL3VybEhlbHBlcnMnO1xuaW1wb3J0IHtcbiAgQ2FsbFVzLFxuICBDaGF0SWNvbixcbiAgQ2xvc2VJY29uLFxufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgJ2NvbXBvbmVudHMvRGF0ZVBpY2tlci9EYXRlcGlja2VybmV3LnNjc3MnO1xuaW1wb3J0ICdjb21wb25lbnRzL0RhdGVQaWNrZXIvTW9udGhwaWNrZXIuc2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3RoZW1lL2N1c3RvbU1vbnRocGlja2VyLnNjc3MnO1xuaW1wb3J0IFNlcXVlbnRpYWxGb3JtIGZyb20gJ2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9TZXF1ZW50aWFsRm9ybS9pbmRleCc7XG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcykgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgY29uc3QgdHJpcERheXNFcnJvciA9ICdlbnRlciBtaW5pbXVtIDIgZGF5cyc7XG4gIC8vIGR1cmF0aW9uIHZhbGlkYXRpb25zXG4gIGlmICghdmFsdWVzLnRyaXBfZGF5cyB8fCBwYXJzZUludCh2YWx1ZXMudHJpcF9kYXlzLCAxMCkgPCAyKSB7XG4gICAgZXJyb3JzLnRyaXBfZGF5c190ZW1wID0gdHJpcERheXNFcnJvcjtcbiAgfVxuICBlcnJvcnMuZW1haWwgPSByZXF1aXJlZFdpdGhtZXNzYWdlKCdFbnRlciB2YWxpZCBlbWFpbCBpZCcpKHZhbHVlcy5lbWFpbCkgfHwgZW1haWxWYWxpZGF0b3IodmFsdWVzLmVtYWlsKTtcbiAgZXJyb3JzLnRvX2xvYyA9IHJlcXVpcmVkV2l0aG1lc3NhZ2UoJ2VudGVyIGNvcnJlY3QgY2l0eSBuYW1lJykodmFsdWVzLnRvX2xvYyk7XG4gIGVycm9ycy5zdGFydF9kYXRlID0gcmVxdWlyZWRXaXRobWVzc2FnZSgnc2VsZWN0IE9uZSBEYXRlLXR5cGUnKSh2YWx1ZXMuc3RhcnRfZGF0ZSk7XG4gIGlmICh2YWx1ZXMpIHtcbiAgICBsZXQgc3RhdHVzID0gMCwgc3RhdHVzMSA9IDEwMDtcbiAgICBpZiAodmFsdWVzLmVtYWlsICYmICFlbWFpbFZhbGlkYXRvcih2YWx1ZXMuZW1haWwpKSB7XG4gICAgICBzdGF0dXMgPSBzdGF0dXMgKyAzMztcbiAgICAgIHN0YXR1czEgPSBzdGF0dXMxIC0gMjQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMucGhvbmVfbm8gJiYgIXBob25lTnVtYmVyKHZhbHVlcy5waG9uZV9ubykpIHtcbiAgICAgIHN0YXR1cyA9IHN0YXR1cyArIDg7XG4gICAgICBzdGF0dXMxID0gc3RhdHVzMSAtIDQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMuc3RhcnRfZGF0ZSAmJiB2YWxpZERhdGUodmFsdWVzLnN0YXJ0X2RhdGUpKSB7XG4gICAgICBzdGF0dXMgPSBzdGF0dXMgKyAxMjtcbiAgICAgIHN0YXR1czEgPSBzdGF0dXMxIC0gMjQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMudG9fbG9jKSB7XG4gICAgICBzdGF0dXMgPSBzdGF0dXMgKyAzNjtcbiAgICAgIHN0YXR1czEgPSBzdGF0dXMxIC0gMjQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMudHJpcF9kYXlzICYmIHZhbHVlcy50cmlwX2RheXMgPj0gMikge1xuICAgICAgc3RhdHVzID0gc3RhdHVzICsgMTE7XG4gICAgICBzdGF0dXMxID0gc3RhdHVzMSAtIDI0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtaGVhZGVyJykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcy1oZWFkZXInKS5zdHlsZS53aWR0aCA9IGAke3N0YXR1c30lYDtcbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1wcm9ncmVzcycpLnN0eWxlLmhlaWdodCA9IGAke3N0YXR1c30lYDtcbiAgICAgIC8vIGlmKHN0YXR1cyA9PT0gMTAwKXtcbiAgICAgIC8vICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXZhcmlhdGlvbicpXG4gICAgICAvLyAgICAgIC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncG9zaXRpb246YWJzb2x1dGU7bWluLWhlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6I2VhZThlOCcpO1xuICAgICAgLy8gICB9LCAzMDApO1xuICAgICAgLy8gfWVsc2Uge1xuICAgICAgLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS12YXJpYXRpb24nKVxuICAgICAgLy8gICAgICAuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmYnKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWZlcmVyKGxvY2F0aW9uLCBwYWNrYWdlSWQpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVmZXJyZXJEZWFsO1xuICAgIGlmIChsb2NhdGlvbi5xdWVyeS50YWcgPT09ICdsdXh1cnknKSB7XG4gICAgICByZWZlcnJlckRlYWwgPSBgTFVYVVJZOjpwYWNrYWdlSWQ9JHtwYWNrYWdlSWR9YDtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnF1ZXJ5LmRlYWxzKSB7XG4gICAgICByZWZlcnJlckRlYWwgPSBgREVBTFM6OnBhY2thZ2VJZD0ke3BhY2thZ2VJZH1gO1xuICAgIH1cbiAgICBjb25zdCBxdWVyeXJlZmVycmVyID0gbG9jYXRpb24ucXVlcnkucmVmZXJyZXIgPyBsb2NhdGlvbi5xdWVyeS5yZWZlcnJlciA6ICdkaXJlY3QnO1xuICAgIHJldHVybiByZWZlcnJlckRlYWwgPyBgJHtxdWVyeXJlZmVycmVyfTo6JHtyZWZlcnJlckRlYWx9YCA6IHF1ZXJ5cmVmZXJyZXI7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gJ2RpcmVjdCc7XG4gIH1cbn1cblxuY29uc3Qgb25TdWJtaXRGYWlsID0gKGVycm9ycykgPT4ge1xuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9ycyBpbiByZWR1eC1mb3JtXCIpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdVbmlxdWVJZCgpIHtcbiAgbGV0IG15VXNlcmlkID0gJyc7XG4gIGxldCBteVJhbmRvbXRleHQgPSAnJztcbiAgY29uc3QgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBjb25zdCBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OXwrLSc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSArPSAxKSB7XG4gICAgbXlSYW5kb210ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcbiAgfVxuICBteVVzZXJpZCA9IGAke2R9XyR7bXlSYW5kb210ZXh0fWA7XG4gIHJldHVybiBteVVzZXJpZDtcbn1cblxuZnVuY3Rpb24gZ2V0VGl0bGUoc2xpZGVyUXVlc3Rpb25zLCBzbGlkZXJOdW1iZXIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2xpZGVyUXVlc3Rpb25zLmRhdGEuZ2VuZXJpY1NsaWRlclF1ZXN0aW9uc1tzbGlkZXJOdW1iZXJdLnRpdGxlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHNsaWRlck51bWJlcikge1xuICAgICAgcmV0dXJuIFRJVExFW3NsaWRlck51bWJlcl07XG4gICAgfVxuICAgIHJldHVybiBUSVRMRVsxXTtcbiAgfVxufVxuXG5jb25zdCBzdGFyVG9JZCA9IHtcbiAgMjogJzMyJyxcbiAgMzogJzgnLFxuICA0OiAnNycsXG4gIDU6ICc2J1xufTtcblxuZXhwb3J0IGNsYXNzIEZvcm1PbmVMZWFkQXN5bmMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogZmFsc2UsXG4gICAgICBjbGllbnRTaWRlUmVuZGVyaW5nRmxhZzogKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpLFxuICAgIH07XG4gICAgdGhpcy5pc0ZhY2Vib29rUGl4ZWwgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudXBkYXRlRmllbGRzKHtcbiAgICAgIHR5cGU6IFNFVF9ESVNQTEFZX01PREUsXG4gICAgICB2YWx1ZTogU0VRVUVOVElBTF9GT1JNX09ORVxuICAgIH0pO1xuICAgIHRoaXMuc2V0Q2xpZW50U2lkZVJlbmRlcmluZ0ZsYWcoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZXZhbChnZXRGYWNlYm9va1RyYWNraW5nU2NyaXB0KCkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnNldENsaWVudFNpZGVSZW5kZXJpbmdGbGFnLCAyMDApO1xuICAgIH1cbiAgICBjb25zdCBmdXVpZCA9IGdldENvb2tpZShGVU5ORUxfVVVJRF9LRVkpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnByb3BzLmxvYWRTbGlkZXJRdWVzdGlvbnMoKTtcbiAgICAgIC8vIGZ1dWlkIGZldGNoZWQgZnJvbSBjb29raWUgaXMgbnVsbCwgd2hpY2ggc2V0cyByZWRpc19rZXkgdG8gXCJudWxsXCIgKG5vdGUgdGhlIGRvdWJsZSBxdW90ZXMpLlxuICAgICAgLy8gVGhlcmVmb3JlLCBhZGRpbmcgbnVsbCBzdHJpbmcgY2hlY2sgd2hpbGUgc2V0dGluZyBmdXVpZCBpbiB0aGUgc2xpZGVyL2NvbW1vbiByZWR1eCBzdGF0ZS5cbiAgICAgIHRoaXMucHJvcHMudXBkYXRlRmllbGRzKHtcbiAgICAgICAgdHlwZTogVVBEQVRFX1JFRElTX0tFWSxcbiAgICAgICAgdmFsdWU6IGZ1dWlkICYmIGZ1dWlkICE9PSAnbnVsbCcgPyBmdXVpZCA6ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMudHJhY2tGb3JtT25lVmlld2VkKHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeSxcbiAgICAgICAgZnVubmVsX3V1aWQ6IGZ1dWlkLFxuICAgICAgICB0b19sb2M6IHRoaXMucHJvcHMucnREYXRhICYmIHRoaXMucHJvcHMucnREYXRhLnRvX2xvYyA/XG4gICAgICAgICAgdGhpcy5wcm9wcy5ydERhdGEudG9fbG9jIDogdGhpcy5wcm9wcy5mb3JtVmFsdWVzICYmIHRoaXMucHJvcHMuZm9ybVZhbHVlcy50b19sb2MgP1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtVmFsdWVzLnRvX2xvYyA6ICcnXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0aGlzLnByb3BzLmNvbW1vblByb3BlcnRpZXMuc2xpZGVyRGlzcGxheU1vZGUgIT09IHByZXZQcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIHNldENsaWVudFNpZGVSZW5kZXJpbmdGbGFnID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2xpZW50U2lkZVJlbmRlcmluZ0ZsYWc6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0Vycm9ycyA9IChmaWVsZHMsIGlzVmFsaWRSZXF1aXJlZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgZmllbGRzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMudG91Y2godGhpcy5wcm9wcy5mb3JtLCBuYW1lKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlzVmFsaWRSZXF1aXJlZCA/IHJlc29sdmUodGhpcy5wcm9wcy52YWxpZCAmJiAhdGhpcy5wcm9wcy5pbnZhbGlkKSA6IHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2hSeEZvcm1BY3Rpb24gPSAodmFsdWUsIGZpZWxkTmFtZSkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0BAcmVkdXgtZm9ybS9DSEFOR0UnLFxuICAgICAgbWV0YToge1xuICAgICAgICBmb3JtOiB0aGlzLnByb3BzLmZvcm0sXG4gICAgICAgIGZpZWxkOiBmaWVsZE5hbWUsXG4gICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgcGVyc2lzdGVudFN1Ym1pdEVycm9yczogZmFsc2VcbiAgICAgIH0sXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNsaWRlclJlc3BvbnNlID0gKHJlc3BvbnNlLCBkYXRhLCB2YWx1ZXMsIG5leHRTbGlkZSwgcmVkaXNUcmlwID0gZmFsc2UpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogZmFsc2UgfSk7XG4gICAgaWYgKGRhdGEuaXNTdWJtaXQpIHtcbiAgICAgIC8vIFRPRE8gOjogaGFuZGxlIGVycm9yIHJlc3BvbnNlXG4gICAgICB0aGlzLnByb3BzLmxvYWRVc2VyRGV0YWlscygpO1xuICAgICAgbGV0IHJlZGlyZWN0VXJsID0gJyc7XG4gICAgICBpZiAoIXJlZGlzVHJpcCkge1xuICAgICAgICBzZXRDb29raWUoJ3RyaXBfaWQnLCByZXNwb25zZSAmJiByZXNwb25zZS5kYXRhICYmXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5yZXF1ZXN0ZWRfdHJpcCAmJiByZXNwb25zZS5kYXRhLnJlcXVlc3RlZF90cmlwLmlkKTtcbiAgICAgICAgcmVkaXJlY3RVcmwgPSByZXNwb25zZS5kYXRhLnJlZGlyZWN0X3VybDtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVkaXJlY3RVcmwgPSBgaHR0cHM6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7cmVzcG9uc2UuZGF0YS5yZWRpcmVjdF91cmx9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmFsaWFzUGF5bG9hZCh7XG4gICAgICAgICAgdXNlcl9pZDogcmVzcG9uc2UuZGF0YS51c2VyX2lkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmlkZW50aWZ5UGF5bG9hZCh7XG4gICAgICAgICAgdXNlcl9pZDogcmVzcG9uc2UuZGF0YS51c2VyX2lkXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVkaXJlY3RVcmwgPSBgJHtjb25maWcuYXBpX3Byb3RvY29sfTovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9YDtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVGaWVsZHMoe1xuICAgICAgICAgIHR5cGU6IFRSSVBfVVBEQVRFRF9JTl9SRURJUyxcbiAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy50cmFja1RyaXBVcGRhdGVkKHtcbiAgICAgICAgZnVubmVsX3N0ZXA6IDExLFxuICAgICAgICB0b19sb2M6IGRhdGEudG9fbG9jLFxuICAgICAgICBmdW5uZWxfdXVpZDogZGF0YS5yZWRpc19rZXksXG4gICAgICAgIHRyaXBfaWQ6IHJlZGlzVHJpcCA/ICcnIDogcmVzcG9uc2UuZGF0YS5yZXF1ZXN0ZWRfdHJpcC5pZCxcbiAgICAgICAgZm9ybVR5cGU6IHRoaXMucHJvcHMuZm9ybVR5cGUsXG4gICAgICAgIHVfaWQ6IHJlZGlzVHJpcCA/ICcnIDogZ2V0Q29va2llKFVTRVJfSURfQ09PS0lFX0tFWSksXG4gICAgICAgIHVfcm9sZTogcmVkaXNUcmlwID8gJycgOiBnZXRDb29raWUoVVNFUl9ST0xFX0NPT0tJRV9LRVkpXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlZGlzVHJpcCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZShyZWRpcmVjdFVybCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdQdXNoaW5nIHN0YXRlJyk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5wdXNoU3RhdGUocmVkaXJlY3RVcmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWRpcmVjdGluZycpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RVcmw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5leHRTbGlkZSA9PT0gU0VRVUVOVElBTF9GT1JNX1NFVkVOKSB7XG4gICAgICAgIGlmKCF0aGlzLmlzRmFjZWJvb2tQaXhlbCkge1xuICAgICAgICAgIHRoaXMuaXNGYWNlYm9va1BpeGVsID0gdHJ1ZTtcbiAgICAgICAgICB3aW5kb3cuZmlyZUFkV29yZHNUYWcoKTtcbiAgICAgICAgICBjb25zdCBmYkFkd29yZCA9IGZpcmVGYWNlYm9va0Fkd29yZCgpO1xuICAgICAgICAgIGV2YWwoZmJBZHdvcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmZvcm1TdWJtaXR0ZWQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnRyYWNrVHJpcEFkZGVkKHtcbiAgICAgICAgICAgIGZ1bm5lbF9zdGVwOiA1LFxuICAgICAgICAgICAgdG9fbG9jOiByZWRpc1RyaXAgPyAnJyA6IHJlc3BvbnNlLmRlc3RfaW5mby5uYW1lLFxuICAgICAgICAgICAgZnVubmVsX3V1aWQ6IGRhdGEucmVkaXNfa2V5LFxuICAgICAgICAgICAgZm9ybVR5cGU6IHRoaXMucHJvcHMuZm9ybVR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmZvcm1TdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLnRyYWNrVHJpcFVwZGF0ZWQoe1xuICAgICAgICAgIGZ1bm5lbF9zdGVwOiA4LFxuICAgICAgICAgIHRvX2xvYzogcmVkaXNUcmlwID8gJycgOiByZXNwb25zZS5kZXN0X2luZm8ubmFtZSxcbiAgICAgICAgICBmdW5uZWxfdXVpZDogZGF0YS5yZWRpc19rZXksXG4gICAgICAgICAgZm9ybVR5cGU6IHRoaXMucHJvcHMuZm9ybVR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUZpZWxkcyh7XG4gICAgICAgIHR5cGU6IFVQREFURV9UT19ERVNUSU5BVElPTixcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBmcm9tRGVzdGluYXRpb246IHJlZGlzVHJpcCA/ICcnIDogcmVzcG9uc2UuZGVzdF9pbmZvLmZyb21EZXN0aW5hdGlvbiB8fCB2YWx1ZXMuZnJvbV9sb2MsXG4gICAgICAgICAgdG9EZXN0aW5hdGlvbjogcmVkaXNUcmlwID8gJycgOiByZXNwb25zZS5kZXN0X2luZm8ubmFtZSxcbiAgICAgICAgICBjdXJyZW50SW50ZXJhY3Rpb25UaW1lOiByZWRpc1RyaXAgPyAnJyA6IHJlc3BvbnNlLmN1cnJlbnRfaW50ZXJhY3Rpb25fdGltZSxcbiAgICAgICAgICBpc0RvbWVzdGljOiByZWRpc1RyaXAgPyBmYWxzZSA6IHJlc3BvbnNlLmRlc3RfaW5mby5kZXN0aW5hdGlvbl90eXBlID09PSAnZG9tZXN0aWMnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb3JyZWN0U3RhcnREYXRlVmFsdWVzID0gKGZvcm1WYWx1ZXMpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7IC4uLmZvcm1WYWx1ZXMgfTtcbiAgICBpZiAodmFsdWVzLnN0YXJ0X2RhdGVfbm9pZGVhKSB7XG4gICAgICB2YWx1ZXMuc3RhcnRfZGF0ZV9mbGV4aWJsZSA9ICcnO1xuICAgICAgdmFsdWVzLnN0YXJ0X2RhdGUgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICBnZXRBZG1pbkNvbW1lbnRzID0gKGxvY2F0aW9uLCBydERhdGEsIHF1ZXJ5UGFyYW1zKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gbG9jYXRpb247XG4gICAgbGV0IG5ld0FkbWluQ29tbWVudHMgPSAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIHdoZW4gYWRtaW4gY29tbWVudHMgYXJlIHByb3ZpZGVkIGluIHVybCBwYXJhbXMgaW4gY2FzZSBvZiBnZW5lcmljIG1hcmtldGluZyBwYWdlc1xuICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmdlbmVyaWNfYWRtaW5fY29tbWVudCkge1xuICAgICAgICBjb25zdCBwYXRoID0gZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhdGguaW5kZXhPZignRm9ybV9maWxsZWRfb24nKTtcbiAgICAgICAgbmV3QWRtaW5Db21tZW50cyA9IHBhdGguc2xpY2UoaW5kZXgpO1xuICAgICAgICBuZXdBZG1pbkNvbW1lbnRzID0gYCMke25ld0FkbWluQ29tbWVudHMuc3BsaXQoJyAnKS5qb2luKCcgIycpfWA7XG4gICAgICB9XG4gICAgICAvLyBhZGRpbmcgYW55IGFkbWluY29tbWVudCBzZXQgYnkgdndvIGV4cGVyaW1lbnQgaW4gcnRyaXAgYWRtaW4gY29tbWVudHNcbiAgICAgIGlmICh3aW5kb3cuZXhwZXJpbWVudEFkbWluQ29tbWVudCkge1xuICAgICAgICBuZXdBZG1pbkNvbW1lbnRzID0gYCR7bmV3QWRtaW5Db21tZW50c30gJHt3aW5kb3cuZXhwZXJpbWVudEFkbWluQ29tbWVudH1gO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihxdWVyeS5tdmlldyAmJiBxdWVyeS5zcmNVcmwpIHtcbiAgICAgIC8vIEZvciBhbXAgYmxvZyBhbmQgcHJvZHVjdC5cbiAgICAgIG5ld0FkbWluQ29tbWVudHMgPSBgI21vYmlsZSAjRm9ybV9maWxsZWRfb24gJHtxdWVyeS5zcmNVcmx9ICN0cmlwX29yaWdpbl9wcm9kdWN0OiR7cXVlcnkudXRtX3NvdXJjZSAmJiBxdWVyeS51dG1fc291cmNlID09PSAnYmxvZycgPyAndHJhdmVsZXJfbXdlYicgOiAncHVibGljX213ZWInfWA7XG4gICAgfVxuICAgIG5ld0FkbWluQ29tbWVudHMgPSBgJHtydERhdGEuYWRtaW5Db21tZW50cyA/IHJ0RGF0YS5hZG1pbkNvbW1lbnRzIDogJyd9ICR7bmV3QWRtaW5Db21tZW50c31gO1xuICAgIG5ld0FkbWluQ29tbWVudHMgPSBgJHtuZXdBZG1pbkNvbW1lbnRzfSAke3F1ZXJ5LnRhZyA9PT0gJ2x1eHVyeScgPyAnTHV4dXJ5IFBhY2thZ2UnIDogJyd9YDtcblxuICAgIHJldHVybiBuZXdBZG1pbkNvbW1lbnRzO1xuICB9O1xuXG4gIGdldEFkZGl0aW9uYUluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBydERhdGEsIGxvY2F0aW9uOiB7IHF1ZXJ5IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5mbyA9IHF1ZXJ5LnRhZyA9PT0gJ2x1eHVyeScgPyBgSSB3YW50IEx1eHVyeSBwYWNrYWdlcyB3aXRoICR7cXVlcnkuYnVkZ2V0fWAgOiAnJztcblxuICAgIHJldHVybiBgJHtydERhdGEuYWRkdGxfaW5mbyA/IHJ0RGF0YS5hZGR0bF9pbmZvIDogJyd9ICR7aW5mb31gO1xuICB9O1xuXG4gIGNvbXBhcmVBbmRTb3J0KGEsIGIpIHtcbiAgICBpZiAoYS5wcmlvcml0eSA8IGIucHJpb3JpdHkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEucHJpb3JpdHkgPiBiLnByaW9yaXR5KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjaGVja0ZvckV4cGVyaW1lbnQocGFyYW1zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gd2luZG93LnBvc3RMZWFkSGFuZGxlcnNFeGl0aW50ZW50O1xuICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgIGhhbmRsZXJzLnNvcnQodGhpcy5jb21wYXJlQW5kU29ydCkuZmluZChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgY29uc3QgY2FsbGluZ0ZuID0gd2luZG93W2hhbmRsZXIubmFtZV07XG4gICAgICBpZiAoY2FsbGluZ0ZuKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGNhbGxpbmdGbihwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0gPSAoZm9ybVZhbHVlcywgZW5hYmxlZEZvclN1Ym1pdCwgbmV4dFNsaWRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdXBkYXRlRmllbGRzLCBsb2NhdGlvbjogeyBxdWVyeSB9LCBwYWNrYWdlRGF0YTogeyBwcmljZSwgc3RhclJhdGluZywgaXNGbGlnaHQgfSxcbiAgICAgIHJlcXVlc3RMb2FkLCBjb21tb25Qcm9wZXJ0aWVzLCBjcmVhdGVUcmlwT25SZWRpcywgb3BlbkZvcm1TdGF0ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlYWxuTHV4dXJ5ID0ge1xuICAgICAgYnVkZ2V0OiBgJHtwcmljZX0uLi4ke01hdGguY2VpbChwcmljZSArIChwcmljZSAqIDAuMDUpKX1gLFxuICAgICAgaG90ZWxfY2F0ZWdvcnlfYW5zd2Vyc19hdHRyaWJ1dGVzOiBbeyBvcHRpb25faWQ6IHN0YXJUb0lkW3N0YXJSYXRpbmddLCBjdXN0b21pemF0aW9uX2lkOiAnMicgfV0sXG4gICAgICBob3RlbF9uZWVkZWRfYW5zd2VyX2F0dHJpYnV0ZXM6IHsgb3B0aW9uX2lkOiAnOTUnLCBjdXN0b21pemF0aW9uX2lkOiAnMjInIH0sXG4gICAgICBmbGlnaHRfYW5zd2VyX2F0dHJpYnV0ZXM6IHsgb3B0aW9uX2lkOiBgJHtpc0ZsaWdodCA/ICc5NycgOiAnOTgnfWAsIGN1c3RvbWl6YXRpb25faWQ6ICcyMycgfVxuICAgIH07XG5cbiAgICBpZiAoZW5hYmxlZEZvclN1Ym1pdCAmJiBuZXh0U2xpZGUgIT09IFNFUVVFTlRJQUxfRk9STV9FTkQpIHtcbiAgICAgIG5leHRTbGlkZSA9IFNFUVVFTlRJQUxfRk9STV9TRVZFTjtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkuZGVhbHMpIHtcbiAgICAgIGZvcm1WYWx1ZXMgPSB7IC4uLmZvcm1WYWx1ZXMsIC4uLmRlYWxuTHV4dXJ5IH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5jb3JyZWN0U3RhcnREYXRlVmFsdWVzKGZvcm1WYWx1ZXMpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlU3VibWl0QnV0dG9uOiB0cnVlIH0pO1xuICAgIGxldCBxdWVyeVBhcmFtcyA9IHt9O1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlQYXJhbXMgPSBRdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdmb3JtLXZhcmlhdGlvbi1mMS1zdWJtaXQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHNlZ21ldEhlbHBlckRhdGEgPSB7fTtcbiAgICBsZXQgZGF0YTtcbiAgICBjb25zdCBzZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHsgcGFja2FnZUlkLCBwYWdlTmFtZSwgc2VjdGlvbiwgb2JqZWN0LCBjdGEgfSA9IHRoaXMucHJvcHMucnREYXRhO1xuICAgIGNvbnN0IHJlZmVycmVyID0gZ2V0UmVmZXJlcih0aGlzLnByb3BzLmxvY2F0aW9uLCBwYWNrYWdlSWQpO1xuICAgIGNvbnN0IHJlZGlzS2V5ID0gdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnJlZGlzS2V5IHx8IGNyZWF0ZU5ld1VuaXF1ZUlkKCk7XG4gICAgY29uc3QgYWRtaW5Db21tZW50cyA9IHRoaXMuZ2V0QWRtaW5Db21tZW50cyh0aGlzLnByb3BzLmxvY2F0aW9uLCB0aGlzLnByb3BzLnJ0RGF0YSwgcXVlcnlQYXJhbXMpO1xuICAgIGNvbnN0IGFkZF9pbmZvID0gdGhpcy5nZXRBZGRpdGlvbmFJbmZvKCk7XG4gICAgY29uc3QgcnRQcm9wcyA9IHtcbiAgICAgIHJlcXVlc3RlZF90cmlwOiB7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgdHJpcF9kYXlzOiBNYXRoLm1pbih2YWx1ZXMudHJpcF9kYXlzLCA5OSksXG4gICAgICAgIGZyb21fc2xpZGVyX2Zvcm06ICd0cnVlJyxcbiAgICAgICAgY3JlYXRlX3lvdXJfb3duX2lkOiAnZmFsc2UnLFxuICAgICAgICBuZXdfZm9ybTogJ3RydWUnLFxuICAgICAgICBzdGFydF9kYXRlOiAodmFsdWVzLnN0YXJ0X2RhdGVfZmxleGlibGUgfHwgdmFsdWVzLnN0YXJ0X2RhdGVfbm9pZGVhKSA/ICcnIDogdmFsdWVzLnN0YXJ0X2RhdGUsXG4gICAgICAgIGFkbWluQ29tbWVudHM6IGFkbWluQ29tbWVudHMsXG4gICAgICAgIHJlZmVyZXI6IHJlZmVycmVyLFxuICAgICAgICBhZGR0bF9pbmZvOiBhZGRfaW5mbyxcbiAgICAgICAgYXR0cmlidXRpb25fYXR0cmlidXRlczoge1xuICAgICAgICAgIHRyaXBfb3JpZ2luX3Byb2R1Y3Q6ICdwdWJsaWNfbXdlYicsXG4gICAgICAgICAgdHJpcF9vcmlnaW5fdXJpOiBwcmVwYXJlRXZlbnRPcmlnaW5VcmkocGFnZU5hbWUsIHNlY3Rpb24sIG9iamVjdCwgY3RhKSxcbiAgICAgICAgICB0cmlwX29yaWdpbl9wYWNrYWdlX2lkOiBwYWNrYWdlSWQsXG4gICAgICAgICAgY29udGV4dF9wYWdlX3VybDogZ2V0Rm9ybUZpbGxlZE9uKGFkbWluQ29tbWVudHMsIHF1ZXJ5KSxcbiAgICAgICAgICBjb250ZXh0X2NhbXBhaWduX3NvdXJjZTogcXVlcnlQYXJhbXMudXRtX3NvdXJjZSxcbiAgICAgICAgICBjb250ZXh0X2NhbXBhaWduX21lZGl1bTogcXVlcnlQYXJhbXMudXRtX21lZGl1bSxcbiAgICAgICAgICBjb250ZXh0X2NhbXBhaWduX25hbWU6IHF1ZXJ5UGFyYW1zLnV0bV9jYW1wYWlnbixcbiAgICAgICAgICBjb250ZXh0X2NhbXBhaWduX3Rlcm06IHF1ZXJ5UGFyYW1zLnV0bV90ZXJtLFxuICAgICAgICAgIGNvbnRleHRfY2FtcGFpZ25fY29udGVudDogcXVlcnlQYXJhbXMudXRtX2NvbnRlbnQsXG4gICAgICAgICAgc2Vzc2lvbl91dWlkOiBnZXRDb29raWUoU0VTU0lPTl9VVUlEX0NPT0tJRV9LRVkpLFxuICAgICAgICAgIHBhZ2VfdXVpZDogZ2V0Q29va2llKFBBR0VfVVVJRF9DT09LSUVfS0VZKSxcbiAgICAgICAgICBsYW5kaW5nX3BhZ2VfdXVpZDogZ2V0Q29va2llKExBTkRJTkdfVVVJRF9DT09LSUVfS0VZKSxcbiAgICAgICAgICByZWZlcmVyX3BhZ2VfdXVpZDogZ2V0Q29va2llKFJFRkVSRVJfVVVJRF9LRVkpLFxuICAgICAgICAgIGZ1bm5lbF91dWlkOiBnZXRDb29raWUoRlVOTkVMX1VVSURfS0VZKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGVuYWJsZWRGb3JTdWJtaXQpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIHJlZGlzX2tleTogcmVkaXNLZXksXG4gICAgICAgIGlzU3VibWl0OiBlbmFibGVkRm9yU3VibWl0LFxuICAgICAgICAuLi5ydFByb3BzXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICByZWRpc19rZXk6IHJlZGlzS2V5LFxuICAgICAgICB0b19sb2M6IHZhbHVlcy50b19sb2MsXG4gICAgICAgIHRpbWVfc3RhbXA6IHNlbnRUaW1lLFxuICAgICAgICBjYXJkX251bWJlcjogdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlLnRvU3RyaW5nKCksXG4gICAgICAgIGlzU3VibWl0OiBlbmFibGVkRm9yU3VibWl0LFxuICAgICAgICBjYXJkX2RhdGE6IHtcbiAgICAgICAgICAuLi5ydFByb3BzXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChuZXh0U2xpZGUgPT09IFNFUVVFTlRJQUxfRk9STV9TRVZFTikge1xuICAgICAgY29uc3Qgc2VnbWVudERhdGEgPSB7XG4gICAgICAgIGV2ZW50OiAnTGVhZCBGdW5uZWwnLFxuICAgICAgICBjYXRlZ29yeTogYERlc3RpbmF0aW9uOiR7dmFsdWVzLnRvX2xvYyB8fCAndW5rbm93bid9YCxcbiAgICAgICAgc2VjdGlvbjogc2VnbWV0SGVscGVyRGF0YS5zZWN0aW9uLFxuICAgICAgICBvYmplY3Q6ICcnLFxuICAgICAgICBjdGE6IHNlZ21ldEhlbHBlckRhdGEuY3RhLFxuICAgICAgICBkZXN0aW5hdGlvbl9saXN0OiAnJyxcbiAgICAgICAgZm9ybV92YXJpYW50OiBnZXRGb3JtVHlwZSh0aGlzLnByb3BzLmZvcm1UeXBlKSxcbiAgICAgICAgZnVubmVsX3N0ZXA6IHNlZ21ldEhlbHBlckRhdGEuZnVubmVsX3N0ZXAsXG4gICAgICAgIHN0YXJ0X2RhdGU6ICh2YWx1ZXMuc3RhcnRfZGF0ZV9mbGV4aWJsZSB8fCB2YWx1ZXMuc3RhcnRfZGF0ZV9ub2lkZWEpID8gJycgOiB2YWx1ZXMuc3RhcnRfZGF0ZSxcbiAgICAgICAgdHJpcF9kYXlzOiBNYXRoLm1pbih2YWx1ZXMudHJpcF9kYXlzLCA5OSksXG4gICAgICAgIGxhYmVsOiAnRm9ybTEgU3VibWl0dGVkJyxcbiAgICAgICAgbnVtX2Rlc3RpbmF0aW9uczogMCxcbiAgICAgICAgdG9fbG9jOiBkYXRhLnRvX2xvYyxcbiAgICAgICAgdHJpcF9pZDogZGF0YS50cmlwX2lkIHx8IDAsXG4gICAgICAgIGZ1bm5lbF91dWlkOiBkYXRhLnJlZGlzX2tleSxcbiAgICAgIH07XG4gICAgICB0cmFja1NlZ21lbnQoc2VnbWVudERhdGEpO1xuICAgIH1cbiAgICBsZXQgc2VnbWVudFBhcmFtRm9ybU9uZVN1Ym1pdCA9IHt9O1xuICAgIGlmIChlbmFibGVkRm9yU3VibWl0KSB7XG4gICAgICBzZWdtZW50UGFyYW1Gb3JtT25lU3VibWl0ID0ge1xuICAgICAgICBldmVudDogJ0xlYWQgRnVubmVsJyxcbiAgICAgICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbjoke2RhdGEucmVxdWVzdGVkX3RyaXAudG9fbG9jIHx8ICd1bmtub3duJ31gLFxuICAgICAgICBzZWN0aW9uOiBzZWdtZXRIZWxwZXJEYXRhLnNlY3Rpb24sXG4gICAgICAgIG9iamVjdDogJycsXG4gICAgICAgIGN0YTogc2VnbWV0SGVscGVyRGF0YS5jdGEsXG4gICAgICAgIGRlc3RpbmF0aW9uX2xpc3Q6ICcnLFxuICAgICAgICBmb3JtX3ZhcmlhbnQ6IGdldEZvcm1UeXBlKHRoaXMucHJvcHMuZm9ybVR5cGUpLFxuICAgICAgICBmdW5uZWxfc3RlcDogc2VnbWV0SGVscGVyRGF0YS5mdW5uZWxfc3RlcCxcbiAgICAgICAgc3RhcnRfZGF0ZTogZGF0YS5yZXF1ZXN0ZWRfdHJpcC5zdGFydF9kYXRlLFxuICAgICAgICB0cmlwX2RheXM6IGRhdGEucmVxdWVzdGVkX3RyaXAudHJpcF9kYXlzLFxuICAgICAgICBsYWJlbDogJ0Zvcm0yIFN1Ym1pdHRlZCcsXG4gICAgICAgIG51bV9kZXN0aW5hdGlvbnM6IDAsXG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIGJ1ZGdldDogdmFsdWVzLmJ1ZGdldFxuICAgICAgICB9LFxuICAgICAgICB0b19sb2M6IGRhdGEucmVxdWVzdGVkX3RyaXAudG9fbG9jLFxuICAgICAgICB0cmlwX2lkOiBkYXRhLnRyaXBfaWQgfHwgMCxcbiAgICAgICAgZnVubmVsX3V1aWQ6IGRhdGEucmVkaXNfa2V5LFxuICAgICAgICBleHBsb3JpbmdfZGVzdGluYXRpb246IGRhdGEucmVxdWVzdGVkX3RyaXAuZXhwbG9yaW5nX2Rlc3RpbmF0aW9uc1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VnbWVudFBhcmFtRm9ybU9uZVN1Ym1pdCA9IHtcbiAgICAgICAgZXZlbnQ6ICdMZWFkIEZ1bm5lbCcsXG4gICAgICAgIGNhdGVnb3J5OiBgRGVzdGluYXRpb246JHtkYXRhLnRvX2xvYyB8fCAndW5rbm93bid9YCxcbiAgICAgICAgc2VjdGlvbjogc2VnbWV0SGVscGVyRGF0YS5zZWN0aW9uLFxuICAgICAgICBvYmplY3Q6ICcnLFxuICAgICAgICBjdGE6IHNlZ21ldEhlbHBlckRhdGEuY3RhLFxuICAgICAgICBkZXN0aW5hdGlvbl9saXN0OiAnJyxcbiAgICAgICAgZm9ybV92YXJpYW50OiBnZXRGb3JtVHlwZSh0aGlzLnByb3BzLmZvcm1UeXBlKSxcbiAgICAgICAgZnVubmVsX3N0ZXA6IHNlZ21ldEhlbHBlckRhdGEuZnVubmVsX3N0ZXAsXG4gICAgICAgIHN0YXJ0X2RhdGU6IGRhdGEuY2FyZF9kYXRhLnJlcXVlc3RlZF90cmlwLnN0YXJ0X2RhdGUsXG4gICAgICAgIHRyaXBfZGF5czogZGF0YS5jYXJkX2RhdGEucmVxdWVzdGVkX3RyaXAudHJpcF9kYXlzLFxuICAgICAgICBsYWJlbDogZ2V0TGVhZEZ1bm5lbE5hbWUoc2VnbWV0SGVscGVyRGF0YS5mdW5uZWxfc3RlcCksXG4gICAgICAgIG51bV9kZXN0aW5hdGlvbnM6IDAsXG4gICAgICAgIHRvX2xvYzogZGF0YS50b19sb2MsXG4gICAgICAgIHRyaXBfaWQ6IGRhdGEudHJpcF9pZCB8fCAwLFxuICAgICAgICBmdW5uZWxfdXVpZDogZGF0YS5yZWRpc19rZXksXG4gICAgICAgIGV4cGxvcmluZ19kZXN0aW5hdGlvbjogZGF0YS5jYXJkX2RhdGEucmVxdWVzdGVkX3RyaXAuZXhwbG9yaW5nX2Rlc3RpbmF0aW9uc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0cmFja1NlZ21lbnQoc2VnbWVudFBhcmFtRm9ybU9uZVN1Ym1pdCk7XG5cbiAgICBjb25zdCBoYW5kbGVTbGlkZXJSZXNwb25zZSA9IHRoaXMuaGFuZGxlU2xpZGVyUmVzcG9uc2U7XG4gICAgY29uc3QgZmluYWxEYXRhID0geyBkYXRhOiB7IC4uLmRhdGEgfSB9O1xuICAgIGNvbnN0IGNhbGxCYWNrUGFyYW1zID0ge1xuICAgICAgcmVxdWVzdFBhcmFtczogbmV4dFNsaWRlID09PSBTRVFVRU5USUFMX0ZPUk1fRU5EID8gZmluYWxEYXRhIDogZGF0YSxcbiAgICAgIHZhbHVlcywgbmV4dFNsaWRlLCBydFByb3BzLCBlbmFibGVkRm9yU3VibWl0LCByZXF1ZXN0TG9hZCwgY29tbW9uUHJvcGVydGllcyxcbiAgICAgIGhhbmRsZVNsaWRlclJlc3BvbnNlLCBjcmVhdGVUcmlwT25SZWRpcywgdXBkYXRlRmllbGRzLCBvcGVuRm9ybVN0YXRlLCByZWRpc0tleVxuICAgIH07XG5cbiAgICBpZiAobmV4dFNsaWRlID09PSBTRVFVRU5USUFMX0ZPUk1fRU5EKSB7XG5cbiAgICAgIGlmICh3aW5kb3cucG9zdExlYWRIYW5kbGVyc1NlcXVlbnRpYWxGb3JtICYmIHdpbmRvdy5wb3N0TGVhZEhhbmRsZXJzU2VxdWVudGlhbEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrRm9yRXhwZXJpbWVudChjYWxsQmFja1BhcmFtcywgdGhpcy5jYWxsQXBpVG9CYWNrRW5kKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZVRoYW5rWW91KCk7XG4gICAgICAgICAgdGhpcy5jYWxsQXBpVG9CYWNrRW5kKGNhbGxCYWNrUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVUaGFua1lvdSgpO1xuICAgICAgICB0aGlzLmNhbGxBcGlUb0JhY2tFbmQoY2FsbEJhY2tQYXJhbXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGxBcGlUb0JhY2tFbmQoY2FsbEJhY2tQYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICBjYWxsQXBpVG9CYWNrRW5kKHtcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RQYXJhbXMsIHZhbHVlcywgbmV4dFNsaWRlLCBydFByb3BzLCBlbmFibGVkRm9yU3VibWl0LFxuICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdExvYWQsIGNvbW1vblByb3BlcnRpZXMsIGhhbmRsZVNsaWRlclJlc3BvbnNlLCBjcmVhdGVUcmlwT25SZWRpcywgdXBkYXRlRmllbGRzLCBvcGVuRm9ybVN0YXRlLCByZWRpc0tleVxuICAgICAgICAgICAgICAgICAgIH0pIHtcblxuICAgIGNvbnN0IHNlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZGF0YVBhcmFtcyA9IHJlcXVlc3RQYXJhbXMuZGF0YSA/IHJlcXVlc3RQYXJhbXMuZGF0YSA6IHJlcXVlc3RQYXJhbXM7XG5cbiAgICByZXF1ZXN0TG9hZChkYXRhUGFyYW1zKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGhhbmRsZVNsaWRlclJlc3BvbnNlKHJlc3BvbnNlLCBkYXRhUGFyYW1zLCB2YWx1ZXMsIG5leHRTbGlkZSk7XG4gICAgICB9LmJpbmQodGhpcyksIChlcnIpID0+IHtcbiAgICAgICAgcmVxdWVzdFBhcmFtcyA9IHtcbiAgICAgICAgICByZWRpc19rZXk6IHJlZGlzS2V5LFxuICAgICAgICAgIHRvX2xvYzogdmFsdWVzLnRvX2xvYyxcbiAgICAgICAgICB0aW1lX3N0YW1wOiBzZW50VGltZSxcbiAgICAgICAgICBjYXJkX251bWJlcjogY29tbW9uUHJvcGVydGllcy5zbGlkZXJEaXNwbGF5TW9kZS50b1N0cmluZygpLFxuICAgICAgICAgIGlzU3VibWl0OiBlbmFibGVkRm9yU3VibWl0LFxuICAgICAgICAgIGNhcmRfZGF0YToge1xuICAgICAgICAgICAgLi4ucnRQcm9wc1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICAgIGV2ZW50OiAnUmVkaXMgRG93bnRpbWUnLFxuICAgICAgICAgIHNlY3Rpb246ICcnLFxuICAgICAgICAgIG9iamVjdDogJycsXG4gICAgICAgICAgcmVkaXNfZGF0YTogcmVxdWVzdFBhcmFtcyxcbiAgICAgICAgICBlcnJvcl9tc2c6IGVyci5tZXNzYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNyZWF0ZVRyaXBPblJlZGlzKHJlcXVlc3RQYXJhbXMpLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTbGlkZXJSZXNwb25zZShyZXNwb25zZSwgcmVxdWVzdFBhcmFtcywgdmFsdWVzLCBuZXh0U2xpZGUsIHRydWUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBkaXNhYmxlU3VibWl0QnV0dG9uOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIGhhbmRsZVNsaWRlclJlc3BvbnNlKG51bGwsIHJlcXVlc3RQYXJhbXMsIHZhbHVlcywgbmV4dFNsaWRlLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciA6OiAnLCBlKTtcbiAgICAgICAgICAgIHVwZGF0ZUZpZWxkcyh7XG4gICAgICAgICAgICAgIHR5cGU6IFVQREFURV9UT19ERVNUSU5BVElPTixcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBmcm9tRGVzdGluYXRpb246IGNvbW1vblByb3BlcnRpZXMuZnJvbURlc3RpbmF0aW9uIHx8IHZhbHVlcy5mcm9tX2xvYyxcbiAgICAgICAgICAgICAgICB0b0Rlc3RpbmF0aW9uOiBjb21tb25Qcm9wZXJ0aWVzLnRvRGVzdGluYXRpb24gfHwgdmFsdWVzLnRvX2xvYyxcbiAgICAgICAgICAgICAgICBjdXJyZW50SW50ZXJhY3Rpb25UaW1lOiBjb21tb25Qcm9wZXJ0aWVzLmN1cnJlbnRJbnRlcmFjdGlvblRpbWVcbiAgICAgICAgICAgICAgICAgIHx8IHJlcXVlc3RQYXJhbXMudGltZV9zdGFtcFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgdXBkYXRlRmllbGRzKHtcbiAgICAgIHR5cGU6IFNFVF9ESVNQTEFZX01PREUsXG4gICAgICB2YWx1ZTogbmV4dFNsaWRlXG4gICAgfSk7XG5cbiAgICBvcGVuRm9ybVN0YXRlKG5leHRTbGlkZSk7XG4gIH1cblxuICByZW5kZXJIZWxtZXQgPSAoKSA9PiAoXG4gICAgPEhlbG1ldD5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9yZXF1ZXN0ZWRfdHJpcHMvbmV3XCJcbiAgICAgIC8+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD1cIjE2ODUzNDk1MzIwMzU0MVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiY2F0ZWdvcnlcIiBjb250ZW50PVwiRGVzdGluYXRpb246VW5rbm93blwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzdGluYXRpb25faWRcIiBjb250ZW50PVwiXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXN0aW5hdGlvbl90eXBlXCIgY29udGVudD1cIlwiIC8+XG4gICAgICA8dGl0bGU+VHJhdmVsIFRyaWFuZ2xlPC90aXRsZT5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCIvL3MxLnRyYXZlbHRyaWFuZ2xlLmNvbS9hc3NldHMvbmV3X3VpX2ltYWdlcy9mYXZpY29uLTI3MmQzNTk0NWRhNzJhZmIxZDE4YjI1NGIxNzIzZThiLmljb1wiXG4gICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICBocmVmPVwiLy9zMS50cmF2ZWx0cmlhbmdsZS5jb20vYXNzZXRzL25ld191aV9pbWFnZXMvZmF2aWNvbi0yNzJkMzU5NDVkYTcyYWZiMWQxOGIyNTRiMTcyM2U4Yi5pY29cIlxuICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXG4gICAgICAvPlxuICAgICAgPG1ldGEgbmFtZT1cIkF1dGhvclwiIGNvbnRlbnQ9XCJUcmF2ZWxUcmlhbmdsZS5jb21cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIkNvcHlyaWdodFwiIGNvbnRlbnQ9XCJUcmF2ZWxUcmlhbmdsZS5jb21cIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiXG4gICAgICAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgcHJvcGVydHk9XCJhbDphbmRyb2lkOnVybFwiXG4gICAgICAgIGNvbnRlbnQ9XCJ0dDovL3RyYXZlbHRyaWFuZ2xlLmNvbS9yZXF1ZXN0ZWRfdHJpcHMvbmV3XCJcbiAgICAgIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cImFsOmFuZHJvaWQ6cGFja2FnZVwiXG4gICAgICAgIGNvbnRlbnQ9XCJjb20udHJhdmVsdHJpYW5nbGUudHJhdmVsbGVyXCJcbiAgICAgIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cImFsOmFuZHJvaWQ6YXBwX25hbWVcIlxuICAgICAgICBjb250ZW50PVwiVHJhdmVsVHJpYW5nbGUtSG9saWRheSBQYWNrYWdlXCJcbiAgICAgIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cImxlYWQgY3JlYXRpb24gZm9ybVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cImFsOmFuZHJvaWQ6dXJsXCJcbiAgICAgICAgY29udGVudD17YHR0Oi8vdHJhdmVsdHJpYW5nbGUuY29tL3JlcXVlc3RlZF90cmlwcy9uZXdgfVxuICAgICAgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIHByb3BlcnR5PVwiYWw6aW9zOnVybFwiXG4gICAgICAgIGNvbnRlbnQ9e2B0dGlvc2FwcDovL2FwcGxpbmtzP2FsX2FwcGxpbmtfZGF0YT0ke2lvc0RlZXBMaW5rKFxuICAgICAgICAgICdodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9yZXF1ZXN0ZWRfdHJpcHMvbmV3J1xuICAgICAgICApfWB9XG4gICAgICAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJzaG91bGRfZmFsbGJhY2tcIiBjb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJhbDppb3M6YXBwX3N0b3JlX2lkXCIgY29udGVudD1cIjExNTIzNTgwNjZcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJhbDppb3M6YXBwX25hbWVcIiBjb250ZW50PVwiVHJhdmVsVHJpYW5nbGVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInBhZ2VfZnVsbG5hbWVcIiBjb250ZW50PVwiRjEgUGFnZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzdGluYXRpb25fbGlzdFwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm51bV9kZXN0aW5hdGlvbnNcIiBjb250ZW50PVwiXCIgLz5cbiAgICA8L0hlbG1ldD5cbiAgKTtcblxuICBhc3luVmFsaWRhdGUgPSAodmFsdWVzLCBlbmFibGVkRm9yU3VibWl0LCBuZXh0U2xpZGUsIGlzVmFsaWRSZXF1aXJlZCwgdmFyaWF0aW9uLCB2YXJpYXRpb25TdGVwKSA9PiB7XG4gICAgbGV0IGZpZWxkcyA9IFtdO1xuICAgIGlmIChpc1ZhbGlkUmVxdWlyZWQgJiYgdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlID09PSBTTElERVJfMSkge1xuICAgICAgZmllbGRzID0gWydzdGFydF9kYXRlJywgJ3RvX2xvYycsICdlbWFpbCcsICd0cmlwX2RheXNfdGVtcCddO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZFJlcXVpcmVkICYmIHRoaXMucHJvcHMuY29tbW9uUHJvcGVydGllcy5zbGlkZXJEaXNwbGF5TW9kZSA9PT0gU0xJREVSXzIpIHtcbiAgICAgIGZpZWxkcyA9IFsnaG90ZWxfY2F0ZWdvcnlfYW5zd2Vyc19hdHRyaWJ1dGVzJ107XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkUmVxdWlyZWQgJiYgdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlID09PSBTRVFVRU5USUFMX0ZPUk1fT05FKSB7XG4gICAgICBmaWVsZHMgPSBbJ3RvX2xvYyddO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZFJlcXVpcmVkICYmIHRoaXMucHJvcHMuY29tbW9uUHJvcGVydGllcy5zbGlkZXJEaXNwbGF5TW9kZSA9PT0gU0VRVUVOVElBTF9GT1JNX1RXTykge1xuICAgICAgZmllbGRzID0gWydzdGFydF9kYXRlJywgJ3RyaXBfZGF5c190ZW1wJ107XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkUmVxdWlyZWQgJiYgdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlID09PSBTRVFVRU5USUFMX0ZPUk1fVEhSRUUpIHtcbiAgICAgIGZpZWxkcyA9IFsnaG90ZWxfY2F0ZWdvcnlfYW5zd2Vyc19hdHRyaWJ1dGVzJ107XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkUmVxdWlyZWQgJiYgdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlID09PSBTRVFVRU5USUFMX0ZPUk1fU0lYKSB7XG4gICAgICBmaWVsZHMgPSBbJ2VtYWlsJywgJ3Bob25lX25vJ107XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0Vycm9ycyhmaWVsZHMsIGlzVmFsaWRSZXF1aXJlZClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1cIiwgcmVzcG9uc2UsIHZhcmlhdGlvbik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICBpZiAodmFyaWF0aW9uKSB7XG4gICAgICAgICAgICBpZiAodmFyaWF0aW9uU3RlcCA9PT0gU0VRVUVOVElBTF9GT1JNX0VORCB8fCB2YXJpYXRpb25TdGVwID09PSBERUFMUykge1xuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0odmFsdWVzLCB0cnVlLCB2YXJpYXRpb25TdGVwKTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnU0VRVUVOVElBTF9GT1JNX0ZJTkFMJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IC8qZWxzZSBpZiAodmFyaWF0aW9uU3RlcCA9PT0gREVBTFMpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVUaGFua1lvdSgpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdvQmFjaygpO1xuICAgICAgICAgICAgICB9LCA2MDAwKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbignJywgJ3N0YXJ0X2RhdGUnKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFJ4Rm9ybUFjdGlvbihmYWxzZSwgJ3N0YXJ0X2RhdGVfbm9pZGVhJyk7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hSeEZvcm1BY3Rpb24oJycsICdzdGFydF9kYXRlX2ZsZXhpYmxlJyk7XG4gICAgICAgICAgICB9ICovIGVsc2Uge1xuICAgICAgICAgICAgICBlbmFibGVkRm9yU3VibWl0ID8gdGhpcy5zdWJtaXRGb3JtKHZhbHVlcywgZmFsc2UsIHZhcmlhdGlvblN0ZXApIDpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUZpZWxkcyh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBTRVRfRElTUExBWV9NT0RFLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhdGlvblN0ZXBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZGlzcGF0Y2ggZXZlbnRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGlmIChlbmFibGVkRm9yU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ0xFQURfQ1JFQVRFRCcpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh2YXJpYXRpb25TdGVwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKHZhbHVlcywgZW5hYmxlZEZvclN1Ym1pdCwgbmV4dFNsaWRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZWxzZS1yZXR1cm5cbiAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGlvbiBlcnJvcnMgaW4gZm9ybScpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBhc3luVmFsaWRhdGUuLi4nLCBlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGdldEhlYWRlclRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb21tb25Qcm9wZXJ0aWVzOiB7IHNsaWRlckRpc3BsYXlNb2RlIH0sIGxvY2F0aW9uOiB7IHF1ZXJ5IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGhlYWRpbmcgPSAnJztcbiAgICBsZXQgc3ViSGVhZGluZyA9ICcnO1xuICAgIGxldCBwcm9ncmVzc0JhckNvdW50ID0gMDtcbiAgICBjb25zdCBpc0RlYWwgPSBxdWVyeS5kZWFscztcblxuICAgIHN3aXRjaCAoc2xpZGVyRGlzcGxheU1vZGUpIHtcbiAgICAgIGNhc2UgU0VRVUVOVElBTF9GT1JNX09ORToge1xuICAgICAgICBoZWFkaW5nID0gJ1N0YXJ0IFBsYW5uaW5nJztcbiAgICAgICAgcHJvZ3Jlc3NCYXJDb3VudCA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTRVFVRU5USUFMX0ZPUk1fVFdPOiB7XG4gICAgICAgIGhlYWRpbmcgPSAnU2VsZWN0IERlcGFydHVyZSBEYXRlJztcbiAgICAgICAgcHJvZ3Jlc3NCYXJDb3VudCA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTRVFVRU5USUFMX0ZPUk1fVEhSRUU6IHtcbiAgICAgICAgaGVhZGluZyA9ICdTZWxlY3QgSW5jbHVzaW9ucyc7XG4gICAgICAgIHByb2dyZXNzQmFyQ291bnQgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgU0VRVUVOVElBTF9GT1JNX0ZPVVI6IHtcbiAgICAgICAgaGVhZGluZyA9ICdTZXQgQnVkZ2V0JztcbiAgICAgICAgc3ViSGVhZGluZyA9IHRoaXMucHJvcHMuaXNGbGlnaHRTZWxlY3RlZCA/ICcod2l0aCBhaXJmYXJlKScgOiAnKHdpdGhvdXQgYWlyZmFyZSknO1xuICAgICAgICBwcm9ncmVzc0JhckNvdW50ID0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNFUVVFTlRJQUxfRk9STV9GSVZFOiB7XG4gICAgICAgIGhlYWRpbmcgPSAnQWRkIFRyYXZlbGVycyc7XG4gICAgICAgIHByb2dyZXNzQmFyQ291bnQgPSBpc0RlYWwgPyAzIDogNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNFUVVFTlRJQUxfRk9STV9TSVg6IHtcbiAgICAgICAgaGVhZGluZyA9ICdTaGFyZSBDb250YWN0IERldGFpbHMnO1xuICAgICAgICBwcm9ncmVzc0JhckNvdW50ID0gaXNEZWFsID8gNCA6IDY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG4gICAgICBjYXNlIFNFUVVFTlRJQUxfRk9STV9TRVZFTjpcbiAgICAgIGNhc2UgIFNFUVVFTlRJQUxfRk9STV9FTkQ6IHtcbiAgICAgICAgaGVhZGluZyA9ICdBZGRpdGlvbmFsIERldGFpbHMnO1xuICAgICAgICBwcm9ncmVzc0JhckNvdW50ID0gaXNEZWFsID8gNSA6IDc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoZWFkaW5nLFxuICAgICAgc3ViSGVhZGluZyxcbiAgICAgIHByb2dyZXNzQmFyQ291bnRcbiAgICB9O1xuICB9O1xuXG4gIGdvQmFja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy9oYW5kbGluZyBvZiBtdmlldyBmb3IgYW1wLXNlcXVlbnRpYWwtZm9ybVxuICAgIGNvbnN0IHsgbG9jYXRpb24gOiB7IGFjdGlvbiwgcXVlcnkgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBhY3Rpb24gPT09ICdQT1AnICYmICEgcXVlcnkubXZpZXcgPyB0aGlzLnByb3BzLnB1c2hTdGF0ZSgnLycpIDogdGhpcy5wcm9wcy5nb0JhY2soKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnRk9STV9CQUNLX0NMSUNLRUQnKSk7XG4gICAgdHJhY2tTZWdtZW50KHtcbiAgICAgIGV2ZW50OiAnTGVhZCBQb3AgVXAgRm9ybSBDbG9zZWQnLFxuICAgICAgY3RhOiAnTGVhZCBQb3AgVXAgRm9ybSBDbG9zZWQnLFxuICAgICAgc2VjdGlvbjogJ0xlYWQgUG9wIFVwJyxcbiAgICAgIG9iamVjdDogJycsXG4gICAgICBsYWJlbDogJ0xlYWQgUG9wIFVwIENsb3NlZCcsXG4gICAgICBmdW5uZWxfdXVpZDogZ2V0Q29va2llKEZVTk5FTF9VVUlEX0tFWSksXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZ1dWlkID0gZ2V0Q29va2llKEZVTk5FTF9VVUlEX0tFWSk7XG4gICAgY29uc3QgdmFyaWF0aW9uSGVhZGVySW5mbyA9IHRoaXMuZ2V0SGVhZGVyVGV4dCgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckhlbG1ldCgpfVxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taGVhZGVyLWZpeGVkIHBsMCBwcjAgcm93IHJvdy0gc2Jjd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNyBwcjBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGVsbGlwc2lzIGZ3OSBhdF9zZXF1ZW50aWFsX3RpdGxlXCI+e3ZhcmlhdGlvbkhlYWRlckluZm8uaGVhZGluZ31cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YXJpYXRpb25IZWFkZXJJbmZvLnN1YkhlYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICA8c21hbGxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZmM0IGZ3NCBmMTIgaGlkZS1pcGhvbmUtZml2ZSBtbDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFyaWF0aW9uSGVhZGVySW5mby5zdWJIZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTUgcGwwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ28tcmlnaHQgZnJpZ2h0IG1sOFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY3Jvc3MtY29tbW9uXCIgb25DbGljaz17dGhpcy5nb0JhY2tIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItbG9nby1yaWdodCBmcmlnaHQgbWwxNVwiPlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b3BlbkNoYXRIYW5kbGVyfSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGF0SWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXIgd2Z1bGxcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ28tcmlnaHQgZnJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjE4MDAxMjM1NTU1XCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYWxsVXMgY2xhc3NOYW1lPVwiYWJzb2x1dGUtY2VudGVyIHdmdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgU0VRVUVOVElBTF9GT1JNX09ORTpcbiAgICAgICAgICAgICAgY2FzZSBTRVFVRU5USUFMX0ZPUk1fVFdPOlxuICAgICAgICAgICAgICBjYXNlIFNFUVVFTlRJQUxfRk9STV9USFJFRTpcbiAgICAgICAgICAgICAgY2FzZSBTRVFVRU5USUFMX0ZPUk1fRk9VUjpcbiAgICAgICAgICAgICAgY2FzZSBTRVFVRU5USUFMX0ZPUk1fRklWRTpcbiAgICAgICAgICAgICAgY2FzZSBTRVFVRU5USUFMX0ZPUk1fU0lYOlxuICAgICAgICAgICAgICBjYXNlIFNFUVVFTlRJQUxfRk9STV9TRVZFTjoge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFNlcXVlbnRpYWxGb3JtXG4gICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpZWxkcz17dGhpcy5wcm9wcy51cGRhdGVGaWVsZHN9XG4gICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgICBnb0JhY2s9e3RoaXMucHJvcHMuZ29CYWNrfVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cbiAgICAgICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ9e3RoaXMucHJvcHMudHJhY2tGb3JtT25lSW50ZXJhY3RlZH1cbiAgICAgICAgICAgICAgICAgIGZ1bm5lbF91dWlkPXtmdXVpZH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b249e3RoaXMuc3RhdGUuZGlzYWJsZVN1Ym1pdEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgYXN5blZhbGlkYXRlPXt0aGlzLmFzeW5WYWxpZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHJ0RGF0YT17dGhpcy5wcm9wcy5ydERhdGF9XG4gICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnByb3BzLmRheXN9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVCbHVyPXt0aGlzLnByb3BzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVFbWFpbENoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVFbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGVtYWlsPXt0aGlzLnByb3BzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgc3luY0Vycm9ycz17dGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzLnN5bmNFcnJvcnN9XG4gICAgICAgICAgICAgICAgICBzbGlkZXJEaXNwbGF5TW9kZT17dGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlfVxuICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICBzbGlkZXJRdWVzdGlvbnM9e3RoaXMucHJvcHMuc2xpZGVyUXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgY29tbW9uUHJvcGVydGllcz17dGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzfVxuICAgICAgICAgICAgICAgICAgaXNGbGlnaHRTZWxlY3RlZD17dGhpcy5wcm9wcy5pc0ZsaWdodFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgZ2V0QnVkZ2V0T3B0aW9ucz17dGhpcy5wcm9wcy5nZXRCdWRnZXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgY2hhbmdlRm9ybUZpZWxkPXt0aGlzLnByb3BzLmNoYW5nZUZvcm1GaWVsZH1cbiAgICAgICAgICAgICAgICAgIG9wZW5Gb3JtU3RhdGU9e3RoaXMucHJvcHMub3BlbkZvcm1TdGF0ZX1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZVRoYW5rWW91PXt0aGlzLnByb3BzLmhhbmRsZVRoYW5rWW91fVxuICAgICAgICAgICAgICAgICAgdG91Y2g9e3RoaXMucHJvcHMudG91Y2h9XG4gICAgICAgICAgICAgICAgICBwcm9ncmVzc0JhckNvdW50PXt2YXJpYXRpb25IZWFkZXJJbmZvLnByb2dyZXNzQmFyQ291bnR9XG4gICAgICAgICAgICAgICAgLz4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgU0xJREVSXzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPExlYWRGb3JtVHdvXG4gICAgICAgICAgICAgICAgICAgICAgc2xpZGVyUXVlc3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2xpZGVyUXVlc3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpZWxkcz17dGhpcy5wcm9wcy51cGRhdGVGaWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgc3VibWl0U2xpZGVyVHdvPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0U2xpZGVyVHdvXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1vblByb3BlcnRpZXM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFJ4Rm9ybUFjdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoUnhGb3JtQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGdldEJ1ZGdldE9wdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRCdWRnZXRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGdldFNlbGVjdGVkQnVkZ2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0U2VsZWN0ZWRCdWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNGbGlnaHRTZWxlY3RlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzRmxpZ2h0U2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdHJhY2tUcmlwVXBkYXRlZFN0ZXA9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50cmFja1RyaXBVcGRhdGVkU3RlcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFja0Zvcm1TdGVwU3VibWl0dGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHJhY2tGb3JtU3RlcFN1Ym1pdHRlZFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFja0Zvcm1WaWV3ZWRDYWxsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHJhY2tGb3JtVmlld2VkQ2FsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJUaXRsZT17Z2V0VGl0bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNsaWRlclF1ZXN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbW9uUHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyRGlzcGxheU1vZGVcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGFzeW5WYWxpZGF0ZT17dGhpcy5hc3luVmFsaWRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgb3BlbkZvcm1TdGF0ZT17dGhpcy5wcm9wcy5vcGVuRm9ybVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1UeXBlPXt0aGlzLnByb3BzLmZvcm1UeXBlfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTdWJtaXRCdXR0b249e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaXNhYmxlU3VibWl0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY2FzZSBTTElERVJfMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGVhZEZvcm1UaHJlZVxuICAgICAgICAgICAgICAgICAgICAgIHNsaWRlclF1ZXN0aW9ucz17dGhpcy5wcm9wcy5zbGlkZXJRdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmllbGRzPXt0aGlzLnByb3BzLnVwZGF0ZUZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICBjb21tb25Qcm9wZXJ0aWVzPXt0aGlzLnByb3BzLmNvbW1vblByb3BlcnRpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcGVydGllc09uU2xpZGVyRm9ybT17dGhpcy5zZXRQcm9wZXJ0aWVzT25TbGlkZXJGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1WYWx1ZXM9e3RoaXMucHJvcHMuZm9ybVZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICB0cmFja1RyaXBVcGRhdGVkU3RlcD17dGhpcy5wcm9wcy50cmFja1RyaXBVcGRhdGVkU3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICB0cmFja0Zvcm1TdGVwU3VibWl0dGVkPXt0aGlzLnByb3BzLnRyYWNrRm9ybVN0ZXBTdWJtaXR0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgdHJhY2tGb3JtVmlld2VkQ2FsbD17dGhpcy5wcm9wcy50cmFja0Zvcm1WaWV3ZWRDYWxsfVxuICAgICAgICAgICAgICAgICAgICAgIHNsaWRlclRpdGxlPXtnZXRUaXRsZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2xpZGVyUXVlc3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21tb25Qcm9wZXJ0aWVzLnNsaWRlckRpc3BsYXlNb2RlXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUaGFua1lvdT17dGhpcy5wcm9wcy5oYW5kbGVUaGFua1lvdX1cbiAgICAgICAgICAgICAgICAgICAgICBvcGVuRm9ybVN0YXRlPXt0aGlzLnByb3BzLm9wZW5Gb3JtU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybVR5cGU9e3RoaXMucHJvcHMuZm9ybVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbj17dGhpcy5zdGF0ZS5kaXNhYmxlU3VibWl0QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNlcXVlbnRpYWxGb3JtXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGaWVsZHM9e3RoaXMucHJvcHMudXBkYXRlRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXt0aGlzLnByb3BzLmZvcm1WYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgIGdvQmFjaz17dGhpcy5wcm9wcy5nb0JhY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ9e3RoaXMucHJvcHMudHJhY2tGb3JtT25lSW50ZXJhY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgZnVubmVsX3V1aWQ9e2Z1dWlkfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlU3VibWl0QnV0dG9uPXt0aGlzLnN0YXRlLmRpc2FibGVTdWJtaXRCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoUnhGb3JtQWN0aW9uPXt0aGlzLmRpc3BhdGNoUnhGb3JtQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBhc3luVmFsaWRhdGU9e3RoaXMuYXN5blZhbGlkYXRlfVxuICAgICAgICAgICAgICAgICAgICBydERhdGE9e3RoaXMucHJvcHMucnREYXRhfVxuICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnByb3BzLmRheXN9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUJsdXI9e3RoaXMucHJvcHMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRW1haWxDaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRW1haWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsPXt0aGlzLnByb3BzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBzeW5jRXJyb3JzPXt0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXMuc3luY0Vycm9yc31cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyRGlzcGxheU1vZGU9e3RoaXMucHJvcHMuY29tbW9uUHJvcGVydGllcy5zbGlkZXJEaXNwbGF5TW9kZX1cbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlclF1ZXN0aW9ucz17dGhpcy5wcm9wcy5zbGlkZXJRdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGNvbW1vblByb3BlcnRpZXM9e3RoaXMucHJvcHMuY29tbW9uUHJvcGVydGllc31cbiAgICAgICAgICAgICAgICAgICAgaXNGbGlnaHRTZWxlY3RlZD17dGhpcy5wcm9wcy5pc0ZsaWdodFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICBnZXRCdWRnZXRPcHRpb25zPXt0aGlzLnByb3BzLmdldEJ1ZGdldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUZvcm1GaWVsZD17dGhpcy5wcm9wcy5jaGFuZ2VGb3JtRmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Gb3JtU3RhdGU9e3RoaXMucHJvcHMub3BlbkZvcm1TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhhbmtZb3U9e3RoaXMucHJvcHMuaGFuZGxlVGhhbmtZb3V9XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoPXt0aGlzLnByb3BzLnRvdWNofVxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0JhckNvdW50PXt2YXJpYXRpb25IZWFkZXJJbmZvLnByb2dyZXNzQmFyQ291bnR9XG4gICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkoKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBSeEZvcm1TbGlkZXIgPSByZWR1eEZvcm0oe1xuICBmb3JtOiAnTGVhZEZvcm0nLFxuICB2YWxpZGF0ZSxcbiAgZGVzdHJveU9uVW5tb3VudDogZmFsc2UsXG4gIG9uU3VibWl0RmFpbCxcbiAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlLFxufSkoRm9ybU9uZUxlYWRBc3luYyk7XG5cbkZvcm1PbmVMZWFkQXN5bmMucHJvcFR5cGVzID0ge1xuICB2YXJpYXRpb246IFByb3BUeXBlcy5ib29sLFxuICBpc1JlcXVlc3RMb2FkZWQ6IFByb3BUeXBlcy5ib29sLFxuICByZWRpcmVjdFVybDogUHJvcFR5cGVzLnN0cmluZywgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlc1xuICByZXF1ZXN0TG9hZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcHVzaFN0YXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnb0JhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNpZ25lZEluVXNlckVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFja0Zvcm1PbmVWaWV3ZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJ0RGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdXBkYXRlRnJvbU9uZVByb3BzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVGaWVsZHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoYW5nZUZvcm1GaWVsZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEZ1bm5lbFV1aWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHJhY2tUcmlwQWRkZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyYWNrRm9ybU9uZUludGVyYWN0ZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbW1vblByb3BlcnRpZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbG9hZFVzZXJEZXRhaWxzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFja1RyaXBVcGRhdGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhbGlhc1BheWxvYWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlkZW50aWZ5UGF5bG9hZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZm9ybVR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wZW5Gb3JtU3RhdGU6IFByb3BUeXBlcy5mdW5jLFxuICBsb2FkU2xpZGVyUXVlc3Rpb25zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZvcm06IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBmb3JtVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0b3VjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdmFsaWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGludmFsaWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdFNsaWRlclR3bzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2xpZGVyUXVlc3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFja0Zvcm1TdGVwU3VibWl0dGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRCdWRnZXRPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBnZXRTZWxlY3RlZEJ1ZGdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNGbGlnaHRTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrVHJpcFVwZGF0ZWRTdGVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbml0aWFsVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGhhbmRsZVRoYW5rWW91OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFja0Zvcm1WaWV3ZWRDYWxsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkYXlzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBoYW5kbGVCbHVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVFbWFpbENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNyZWF0ZVRyaXBPblJlZGlzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWNrYWdlRGF0YTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuRm9ybU9uZUxlYWRBc3luYy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzUmVxdWVzdExvYWRlZDogZmFsc2UsXG4gIHJlZGlyZWN0VXJsOiAnJyxcbiAgc2lnbmVkSW5Vc2VyRW1haWw6IG51bGwsXG4gIHJ0RGF0YToge30sXG4gIGZvcm1UeXBlOiAnU2xpZGVyIENsb3NlJyxcbiAgb3BlbkZvcm1TdGF0ZTogdmFsdWUgPT4gdmFsdWUsXG4gIGZvcm06ICdMZWFkRm9ybScsXG4gIGZvcm1WYWx1ZXM6IHt9LFxuICBzbGlkZXJRdWVzdGlvbnM6IHt9LFxuICBkYXlzOiAnJyxcbiAgZW1haWw6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSeEZvcm1TbGlkZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZXF1ZW50aWFsLWZvcm0tY29udGFpbmVyXCI6IFwiXzNxdngyXCIsXG5cdFwibG9jYWwtZXhwZXJpZW5jZS1jb250YWluZXJcIjogXCJfMWUyVmVcIixcblx0XCJmdzlcIjogXCJfMTRLdzdcIixcblx0XCJpYmxvY2tcIjogXCJfTlNxQzBcIixcblx0XCJyYWRpby1jb21tb25cIjogXCJfMVg1ZHJcIixcblx0XCJidWRnZXQtc2VsZWN0b3ItY29udGFpbmVyXCI6IFwiXzJ6dFlUXCIsXG5cdFwiYnVkZ2V0LWljb25cIjogXCJfMzBJYlFcIixcblx0XCJpY29uLTQ4XCI6IFwiX3RNSDVNXCIsXG5cdFwiZGF5c0NvdW50XCI6IFwiXzI3VmprXCIsXG5cdFwicGx1cy1pY29uXCI6IFwiXzFfRzlfXCIsXG5cdFwibWludXMtaWNvblwiOiBcIl9LVWN3ZlwiLFxuXHRcImlucHV0LWVycm9yXCI6IFwiXzJidldFXCIsXG5cdFwiYWN0aXZlLXNoYWRvd1wiOiBcIl8yVkFYbVwiLFxuXHRcIm1vdmUtdXAtMTVcIjogXCJfMjhqYlVcIixcblx0XCJwcm9ncmVzcy1iYXItY29udGFpbmVyXCI6IFwiXzNyYWFvXCIsXG5cdFwicHJvZ3Jlc3MtaW5kaWNhdG9yXCI6IFwiXzNVeXIzXCIsXG5cdFwiYWN0aXZlXCI6IFwiXzJTRlhiXCIsXG5cdFwiaGVhZGVyLWxvZ28tcmlnaHRcIjogXCJfMnhudW1cIixcblx0XCJtb250aC1vcHRpb25cIjogXCJfM0RkcVZcIixcblx0XCJtb250aC1waWxsc1wiOiBcIl8ycUtCOVwiLFxuXHRcImNoZWNrYm94LWNvbW1vblwiOiBcIl9YNTg5NlwiLFxuXHRcInRyYXZlbGxlci1pY29uLWNvbnRhaW5lclwiOiBcIl8xd0xEMVwiLFxuXHRcImNvbnRhY3QtaWNvbi1jb250YWluZXJcIjogXCJfMzJ5M0FcIixcblx0XCJsb2NhdGlvbi1pY29uLWNvbnRhaW5lclwiOiBcIl8yUnJXblwiLFxuXHRcImFycm93LWljb24tY29udGFpbmVyXCI6IFwiXzNPNnI2XCIsXG5cdFwibGVmdFwiOiBcIl8zWUlOV1wiLFxuXHRcIndpbGwtYm9vay1jb21wXCI6IFwiXzF5REtvXCIsXG5cdFwiY29sLXhzLTZcIjogXCJfMVNxTkVcIixcblx0XCJwOFwiOiBcIl8zc2xoT1wiLFxuXHRcIndpbGwtYm9vay1jb24tb3B0aW9uc1wiOiBcIl9GZzR1Y1wiLFxuXHRcImF0X2VkaXRfd2lsbGJvb2tcIjogXCJfM3ItTm9cIixcblx0XCJhdF90b3VydHlwZV9yYWRpb1wiOiBcIl8yRms2dFwiLFxuXHRcInRvdXItdHlwZVwiOiBcIl8xTGJwcVwiLFxuXHRcInJvd1wiOiBcIl8yTXNxTFwiLFxuXHRcInJvdy04XCI6IFwiXzFGLUN5XCIsXG5cdFwiYnV0dG9uLWJveFwiOiBcIl8zd05Od1wiLFxuXHRcInJvdW5kLWljb25cIjogXCJfNzh4eXVcIixcblx0XCJ0aWNrLWljb24tY29udGFpbmVyXCI6IFwiX3BWT1I1XCIsXG5cdFwic3VnZ2VzdGVkLWl0ZW1cIjogXCJfMVBwdk9cIixcblx0XCJyZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkXCI6IFwiXzNHelFsXCIsXG5cdFwicmVhY3QtZGF0ZXBpY2tlcl9fY3VycmVudC1tb250aFwiOiBcIl8zU1A5TVwiLFxuXHRcInJlYWN0LWRhdGVwaWNrZXJfX2RheVwiOiBcIl8yaTF0T1wiLFxuXHRcIm51bWJlci1vZi1kYXlzLWNvbnRhaW5lclwiOiBcIl8xUkluTFwiLFxuXHRcInBsOFwiOiBcIl8xR0lnRlwiLFxuXHRcImZvcm0tZmllbGQtaW5jbC1sYWJlbFwiOiBcIl9XRGFBb1wiLFxuXHRcImRlc3RpbmF0aW9uLXN1Z2dlc3Rpb25zXCI6IFwiXzFZZ0l0XCIsXG5cdFwiZm9ybS1ib2R5XCI6IFwiXy1HaGxlXCIsXG5cdFwiZnJvbS1sb2NhdGlvbi1jb250YWluZXJcIjogXCJfM2R1ZmZcIixcblx0XCJmaWxsZXItZGl2XCI6IFwiXzI4LVNfXCIsXG5cdFwib3ItZGl2aWRlclwiOiBcIl8yS1lEcVwiLFxuXHRcImRpdmlkaW5nLWxpbmVcIjogXCJfMl9pN1pcIixcblx0XCJmb3JtLWhlYWRlci1zZWNvbmRhcnlcIjogXCJfcmc4OTVcIixcblx0XCJmb3JtLWZvb3RlclwiOiBcIl8yZzQtelwiLFxuXHRcImJhY2stYnV0dG9uLXRleHRcIjogXCJfMVRWQUpcIixcblx0XCJkaXNhYmxlZFwiOiBcIl9QZG5kM1wiLFxuXHRcImJ0bi1maWxsZWQtcHJpLWxhcmdlXCI6IFwiXzNLTGlVXCIsXG5cdFwiY2hlY2tib3gtdG9nZ2xlLWNvbW1vblwiOiBcIl9NM2dqVFwiLFxuXHRcImNoZWNrbWFyay1jb250YWluZXJcIjogXCJfMk5xMHZcIixcblx0XCJjaGVja21hcmstaWNvblwiOiBcIl9rS3BFUFwiLFxuXHRcImZpZWxkLWJvbGRcIjogXCJfMWpES0FcIixcblx0XCJyYW5nZS1zbGlkZWNvbnRhaW5lclwiOiBcIl8zU05saVwiLFxuXHRcInJhbmdlLXNsaWRlclwiOiBcIl8zVWJhR1wiLFxuXHRcImZvcm0taGVhZGVyLWZpeGVkXCI6IFwiXzNGeWFrXCIsXG5cdFwiY3Jvc3MtY29tbW9uXCI6IFwiX0xSTDFaXCIsXG5cdFwibW9udGgtc2VsZWN0aW9uLW1vZGFsXCI6IFwiXzJqZ0hvXCIsXG5cdFwibW9udGgtb2YtdHJhdmVsLWhlYWRpbmdcIjogXCJfWmRwYTBcIixcblx0XCJ0cmF2ZWwtbW9udGgtb3ZlcmxheVwiOiBcIl9sbzc0OFwiLFxuXHRcImhpZGUtaXBob25lLWZpdmVcIjogXCJfMVl3Q0xcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uLWhpZGUtYm94XCI6IFwiX3hSZ2MzXCIsXG5cdFwiZm9ybS1kYXRlLWNoZWNrXCI6IFwiXzEwWkFHXCIsXG5cdFwiY3VzdG9tLXZhcmlhdGlvbi1kYXRlcGlja2VyXCI6IFwiXzNVRDBLXCIsXG5cdFwicmVhY3QtZGF0ZXBpY2tlclwiOiBcIl8yejFzbFwiLFxuXHRcIm1vbnRoLXBpY2tlclwiOiBcIl8xSUl4b1wiLFxuXHRcImN1c3RvbS1tb250aC1waWNrZXJcIjogXCJfMWl5MlFcIixcblx0XCJybXAtY29udGFpbmVyXCI6IFwiXzNHQzNPXCIsXG5cdFwic2hvd1wiOiBcIl8zV2h0YlwiLFxuXHRcInJtcC1vdmVybGF5XCI6IFwiXzJKMHB3XCIsXG5cdFwicm1wLXBvcHVwXCI6IFwiXzNTM3A4XCIsXG5cdFwicm1wLXBhZFwiOiBcIl8xUlBoSFwiLFxuXHRcInJtcC1idG5cIjogXCJfM0V1ZzVcIixcblx0XCJuZXh0XCI6IFwiXzNXNnBWXCIsXG5cdFwicHJldlwiOiBcIl8xWm5kVVwiLFxuXHRcIndlZWstYm94LXdpZHRoXCI6IFwiXzNwcmtrXCIsXG5cdFwiYmFjay1idXR0b25cIjogXCJfM0I0eWtcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9