/* eslint-disable */

import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Picker from 'react-month-picker';

import DateWeekPanel from './DateWeekPanel';
import FormDateNum from './FormDateNum';
import MonthBox from './MonthBox';
import { format, getDateOfWeek } from 'helpers/DateTime';

import './FormLead/LeadForm.scss';

import {
  CalendarIcon,
  CloseIcon, DateDecided
} from 'helpers/Icon/Icon';


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
  if (R !== 0)
    return Math.ceil(Q);
  else
    return Q;
}

function weekCount(year, month_number) {
  // var firstOfMonth = new Date(year, month_number-1, 1);
  // var lastOfMonth = new Date(year, month_number, 0);
  // var used = firstOfMonth.getDay() + lastOfMonth.getDate();
  // var count = Math.ceil( used / 7);
  let retValue = [];
  // for(var i = 1; i <= count; i++) {
  //   retValue.push(i);
  // }
  retValue = [1,2,3,4];
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

class DepartureDateFormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: null,
      selectedDate: '',
      mvalue: { year: currentYear, month: currentMonth },
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

  componentDidMount(){
    this.setRequiredFields(this.props.formValues);
  }

  setRequiredFields(values) {
    if(values.start_date && !values.start_date_flexible && !values.start_date_noidea) {
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
      this.props.dispatchRxFormAction(getDateOfWeek(
        matches[0],
        matches[1],
        matches[3],
        'YYYY-MM-DD'
      ), 'start_date');
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
    const formattedDate = format(dateObj, 'DD MMMM YYYY');
    this.setState({
      selectedDate: formattedDate,
      dateType: 'fixed',
      dateChecked: true,
      flexibleDate: false,
      anytimeDate: false,
      numOfDays: true
    });
    const startDate = format(dateObj, 'YYYY-MM-DD');
    this.props.dispatchRxFormAction(startDate, 'start_date');
  }

  handleFixedChange(dateObj) {
    const formattedDate = format(dateObj, 'DD MMMM YYYY');
    this.setState({
      selectedDate: formattedDate,
      dateType: 'fixed',
      dateChecked: true,
      flexibleDate: false,
      anytimeDate: false,
      numOfDays: true
    });
    const startDate = format(dateObj, 'YYYY-MM-DD');
    this.toggleDatePickerCalendar();
    this.props.dispatchRxFormAction(startDate, 'start_date');
  }

  scrollPage(element) {
    let elementToBeScrolled = element;
    let toLocScroll = elementToBeScrolled.offsetTop;
    let toLocPos = elementToBeScrolled.getBoundingClientRect().top
    let toLocAdd = toLocPos - toLocScroll;
    window.scrollTo(0, toLocAdd);
  }

  toggleDatePickerCalendar (e) {
    if(e)
      e && e.stopPropagation() && e.preventDefault();
    if(e && e.target)
      this.scrollPage(e.target);
    this.setState({isDatePickerOpen: !this.state.isDatePickerOpen});
    setTimeout(function(){
      const datepicker = document.getElementsByClassName('custom-variation-datepicker')[0];
      if(datepicker)
        datepicker.setAttribute("style", `width: ${window.innerWidth}px; left: -15px !important;display:block;`);
    },100)
  }

  hideDatePicker () {
    this.setState({isDatePickerOpen: false});
  }

  handleBookedTickets(event) {
    this.setState({ isBookedTicket: event.target.checked });
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
      isBookedTicket: false,
    });
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
    this.props.dispatchRxFormAction(
      getDateOfWeek(
        this.state.year,
        this.state.month,
        parseInt(week.match(/\d+/)[0]) - 1,
        'YYYY-MM-DD'
      ),
    'start_date'
    );
  }

  hideWeekPanel(e){
    this.setState({
      showWeek: false
    })
  }

  handleClickMonthBox(e) {
    this.scrollPage(e.target);
    this.refs.pickAMonth.show();
    this.setState({
      showMonthPicker:true
    })
    const leftPosition = document.getElementById('flexible_date_fnew').getBoundingClientRect().left;
    document.getElementsByClassName('custom-month-picker rmp-container')[0]
      .setAttribute("style", `width: ${window.innerWidth}px; left: -${leftPosition}px !important;`);
    document.getElementById('week-box-width')
      .setAttribute("style", `width: ${window.innerWidth}px; left: -15px !important;`);
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
    this.setState({ mvalue: value, showMonthPicker: false });
  }

  render() {
    const input = this.props.input;
    const { fixedDate, flexibleDate, anytimeDate, dateType, mvalue, selectedDate, isBookedTicket } = this.state;
    return (
      <div>
        <div className="clear" >
          <div className={`${fixedDate && flexibleDate && anytimeDate ? "row row-" : "hide"}`}>
            <label className="block pb8 f14 fw9">Departure Date<em className="pfc2">*</em>
              <span className="f12 fw3"> (Choose Any)</span>
            </label>
          </div>
          <div className={fixedDate ? "relative" : "hide"}>
            <div className={dateType === "fixed" ?
              "input-with-icon-box col-xs-6 pr0 pl0 relative cross-visible-box" :
              "col-xs-4 pr4 pl0 relative input-with-icon-box icon-hide-box"}>
              <label className="ddate-label pb8 f14 fw9">Departure Date<em className="pfc2">*</em></label>
              <div className="relative" >
                <span className="input-icon"><CalendarIcon /></span>
                <div>
                   <button
                     id="fixed_date_fnew"
                     type="button"
                     className="form-date-check input box-input-flex"
                     onClick={this.toggleDatePickerCalendar.bind(this)}>
                     {this.state.selectedDate ? this.state.selectedDate : 'Fixed Date'}
                   </button>
                   {
                     this.state.isDatePickerOpen && (
                       <DatePicker
                         dateForm="DD/MM/YYYY"
                         readOnly
                         minDate={new Date()}
                         value={this.state.selectedDate ? this.state.selectedDate : ''}
                         placeholderText="Fixed Date"
                         inline
                         calendarClassName="custom-variation-datepicker"
                         onChange={this.handleFixedChange}
                         onClickOutside={this.hideDatePicker}
                       />
                     )
                   }
                </div>
                <div onClick={this.cancelDateSelection}
                     className="hide absolute-center-v r10 z2 close-date cursorP"><CloseIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={flexibleDate ? "" : "hide"}>
            <div className={dateType === "flexible" ?
              "input-with-icon-box input-two-icons col-xs-6 pr0 pl0 relative cross-visible-box cross-visible-box" :
              "col-xs-4 pr4 pl0 flexible-date relative input-with-icon-box icon-hide-box"}>
              <label className="ddate-label pb8 f14 fw9">Departure Date<em className="pfc2">*</em></label>
              <div className="relative">
                <span className="input-icon"><CalendarIcon /></span>
                <Picker
                  ref="pickAMonth"
                  years={{ min: { year: currentYear, month: disableCurrentMonth ? currentMonth + 2  : currentMonth + 1},
                    max: { year: currentYear + 1, month: 12 } }}
                  value={mvalue}
                  lang={pickerLang.months}
                  onChange={this.handleAMonthChange}
                  onDismiss={this.handleAMonthDissmis}
                  className="custom-month-picker"
                  show={this.state.showMonthPicker}
                >
                  <MonthBox dateValue={this.state.selectedDate}
                    onClick={this.handleClickMonthBox}
                  />
                </Picker>
                <div onClick={this.cancelDateSelection} className="hide absolute-center-v r10 z2 close-date cursorP">
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={anytimeDate ? "" : "hide"}>
            <div className={dateType === "anytime" ?
              "col-xs-6 input-with-icon-box input-two-icons pr0 pl0 cross-visible-box" :
              "col-xs-4 pr0 pl0 flexible-date relative input-with-icon-box icon-hide-box"}>
              <label className="ddate-label pb8 f14 fw9">Departure Date<em className="pfc2">*</em></label>
              <div className="relative">
                <span className="input-icon"><CalendarIcon /></span>
                <button
                  id="anytime_fnew"
                  type="button"
                  className="pbc4 sfcw cursorP radius2 iblock input form-date-check"
                  onClick={this.handleAnytimeChange}
                  readOnly="readonly"
                  placeholder="Anytime"
                  readOnly
                >{selectedDate ? selectedDate : "Anytime"}</button>
                <div onClick={this.cancelDateSelection}
                     className="hide absolute-center-v r10 z2 close-date cursorP"
                >
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
          <Field
            name="trip_days_temp"
            component={FormDateNum}
            showDays={this.state.numOfDays}
            dispatch={this.props.meta.dispatch}
            form={this.props.meta.form}
            rtData={this.props.rtData}
            dispatchRxFormAction={this.props.dispatchRxFormAction}
            days={this.props.days}
            formValues={this.props.formValues}
          />
          <div className={dateType === "fixed" ? "booked-ticket col-xs-12 p0 booked-ticket" : "hide"}>
            <input type="checkbox"
                   checked={isBookedTicket}
                   onChange={this.handleBookedTickets}
                   id="booked-ticket" className="checkbox-common checkbox-common"
                   value="on"
            />
            <label htmlFor="booked-ticket" className="f12 pt2 pb2 mt5">I have booked my travel tickets</label>
          </div>
        </div>
        <div className="clear date-field relative">
          <DateWeekPanel
            currentMonth={this.state.month}
            currentYear={this.state.year}
            selectWeek={this.handleFlexibleChange.bind(this)}
            showWeek={this.state.showWeek}
            numOfWeeks={this.state.numOfWeeks}
            startWeek={this.state.startWeek}
            clickOverlay={this.hideWeekPanel.bind(this)}
          />
        </div>
        {
          this.props.meta.touched &&
          (
            (this.props.meta.error && <span className="input-error-text">{this.props.meta.error}</span>) ||
              (this.props.meta.warning && <span>{this.props.meta.warning}</span>)
          )
        }
      </div>
    );
  }
}

DepartureDateFormOne.propTypes = {
  formValues: PropTypes.object,
  days: PropTypes.string,
  rtData: PropTypes.object
};

DepartureDateFormOne.defaultProps = {
  formValues: {},
  rtData: {},
  days: ''
};

export default DepartureDateFormOne;
