/* eslint-disable */
import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';

import FormDateNum from '../../../FormDateNum';
import { format, getDateOfWeek } from 'helpers/DateTime';
import TravelMonths from './TravelMonths';
import '../../LeadForm.scss';
import {
  CalendarIcon, DateDecided, DateNotDecided, Tick
} from 'helpers/Icon/Icon';
import Footer from "../footer";
import { SEQUENTIAL_FORM_ONE, SEQUENTIAL_FORM_SIX, SEQUENTIAL_FORM_THREE, SEQUENTIAL_FORM_FIVE } from "../../../../../constants/Slider";

const pickerLang = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  from: 'From',
  to: 'To'
};

const travelMonthModalStyles = {
  content : {
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    boxShadow             : '0 0 1px 1px #e1e1e1',
    border                : 'none',
    width                 : '100%',
    borderRadius          : '0',
    top                   : '322px',
    padding               : '0 20px'
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
  if (R !== 0)
    return Math.ceil(Q);
  else
    return Q;
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

class DepartureDateFormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateType: null,
      selectedDate: '',
      mvalue: { year: currentYear, month: currentMonth },
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

  setRequiredFields = (values) => {
    if (values.start_date && !values.start_date_flexible && !values.start_date_noidea) {
      this.handleFixedChangeWithoutToggle(values.start_date);
    } else if (values.start_date_noidea) {
      this.handleAnytimeChange(values.start_date_flexible);
    } else if (values.start_date_flexible) {
      const matches = values.start_date_flexible.match(/(\w)+/g);
      let month = '';
      if(matches.length <=2){
        month = values.start_date_flexible;
      }else {
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

      this.props.dispatchRxFormAction(getDateOfWeek(
        matches[0],
        matches[1],
        matches[3],
        'YYYY-MM-DD'
      ), 'start_date');
    }
  };

  cancelDateSelection = () => {
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

  handleFixedChangeWithoutToggle = (dateObj) => {
    const formattedDate = format(dateObj, 'DD MMMM YYYY');
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
    const startDate = format(dateObj, 'YYYY-MM-DD');
    this.props.dispatchRxFormAction(startDate, 'start_date');
  };

  handleFixedChange = (dateObj) => {
    const formattedDate = format(dateObj, 'DD MMMM YYYY');
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
    const startDate = format(dateObj, 'YYYY-MM-DD');
    this.props.dispatchRxFormAction(startDate, 'start_date');
    this.props.dispatchRxFormAction(false, 'start_date_flexible');
    this.props.dispatchRxFormAction(false, 'start_date_noidea');
  };

  scrollPage = (element) => {
    let elementToBeScrolled = element;
    let toLocScroll = elementToBeScrolled.offsetTop;
    let toLocPos = elementToBeScrolled.getBoundingClientRect().top;
    let toLocAdd = toLocPos - toLocScroll;
    window.scrollTo(0, toLocAdd);
  };

  toggleDatePickerCalendar(e, flag, show) {
    if (e)
      e && e.stopPropagation() && e.preventDefault();
    if (e && e.target && window.innerHeight <= 568)
      this.scrollPage(e.target);

    if ((this.state.selectedDate && !this.state.selectedCount) || flag) {
      // this.props.dispatchRxFormAction('', 'start_date_flexible');
      this.setState({
        isDatePickerOpen: false,
        isDateDecided: true,
        isDateNotDecided: false,
        selectedCount: 1,
        fixedDate: true,
        flexibleDate: false,

      });
    } else if (this.state.selectedDate && this.state.selectedCount) {
      //this.props.dispatchRxFormAction('', 'start_date_flexible');
      this.setState({
        isDatePickerOpen: !this.state.isDatePickerOpen,    //!this.state.isDatePickerOpen  <-- removed this as per new requirement
        isDateDecided: true,
        isDateNotDecided: false,
        fixedDate: true,
        flexibleDate: false
      });
    } else {
      this.props.dispatchRxFormAction(false, 'start_date_noidea');
      this.props.dispatchRxFormAction('', 'start_date');
      this.props.dispatchRxFormAction('', 'start_date_flexible');
      this.setState({ selectedMonth: ''});
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
      if (datepicker)
        datepicker.setAttribute("style", `width: ${window.innerWidth}px;display:block;top: 185px !important;`);
    }, 10);
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerOpen: false });
    if(!this.state.selectedDate) {
      this.setState({ isDateDecided: false });
    }
  };

  handleBookedTickets = (event) => {
    this.setState({ isBookedTicket: event.target.checked });
    this.props.dispatchRxFormAction(event.target.checked, 'booked_tickets');
  };

  handleAnytimeChange = (month) => {
    this.setState({ showTravelMonths: !this.state.showTravelMonths, selectedMonth: month, flexibleDate: true });
    this.props.dispatchRxFormAction(true, 'start_date_noidea');
    this.props.dispatchRxFormAction('Anytime', 'start_date');
    this.props.dispatchRxFormAction(month, 'start_date_flexible')
  };

  handleMonthChange = (month) => {
    const moonLanding = new Date();
    this.setState({ showTravelMonths: !this.state.showTravelMonths });
    if (month) {
      this.setState({ selectedMonth: month });
      const finalDate = `${month}'19 - Week 1`;
      this.props.dispatchRxFormAction(false, 'start_date_noidea');
      this.props.dispatchRxFormAction(finalDate, 'start_date_flexible');
      this.props.dispatchRxFormAction(
        getDateOfWeek(
          moonLanding.getFullYear(),
          month,
          1,
          'YYYY-MM-DD'
        ),
        'start_date'
      );
    }
  };

  handleClickMonthBox = (e) => {
    this.scrollPage(e.target);
    this.refs.pickAMonth.show();
    this.setState({
      showMonthPicker: true
    });
    const leftPosition = document.getElementById('flexible_date_fnew').getBoundingClientRect().left;
    document.getElementsByClassName('custom-month-picker rmp-container')[0]
      .setAttribute("style", `width: ${window.innerWidth}px; left: -${leftPosition}px !important;`);
    document.getElementById('week-box-width')
      .setAttribute("style", `width: ${window.innerWidth}px; left: -15px !important;`);
  };

  handleAMonthChange = (year, monthNum) => {
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

  handleAMonthDissmis = (value) => {
    this.setState({ mvalue: value, showMonthPicker: false });
  };

  handleNotDecided = () => {
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
    this.props.dispatchRxFormAction('', 'start_date');
    // this.props.dispatchRxFormAction(finalDate, 'start_date_flexible');
  };

  goBack = () => {
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: SEQUENTIAL_FORM_ONE,
      isBackButton: true
    });
  };

  goForward = () => {
    const { location : { query } } = this.props;
    let step = SEQUENTIAL_FORM_THREE;
    if(query.deals) {
      step = SEQUENTIAL_FORM_FIVE
    }
    else if(query.variation === '3') {
      step = SEQUENTIAL_FORM_THREE;
    }else if(query.variation === '4') {
      step = SEQUENTIAL_FORM_SIX;
    }
    this.props.callNextSlide({
      submitVariation: '',
      variation: true,
      variationStep: step
    });
  };

  handleCloseMonthModal = () => {
    this.setState({ showTravelMonths: false });
    if(!this.state.selectedMonth) {
      this.setState({ isDateNotDecided: false });
    }
  };

  render() {
    const { formValues } = this.props;
    const { fixedDate, flexibleDate, anytimeDate, isBookedTicket, isDateNotDecided, isDateDecided,
      showTravelMonths, selectedMonth, selectedDate } = this.state;
    const fixedDateCheck = (isDateDecided || formValues.start_date) && !isDateNotDecided && !flexibleDate;
    const goNextDisabled = (formValues.start_date || formValues.start_date_flexible || formValues.start_date_noidea)
    && formValues.trip_days ? false : true;
    const showMonthOfTravel = (!showTravelMonths && flexibleDate && isDateNotDecided) ||
      formValues.start_date === 'Anytime';

    return (
      <div className="form-body">
        <div className="clear">
          <div className={`${fixedDate && flexibleDate && anytimeDate ? "row row-" : "hide"}`}>
            <label className="block pb8 f14 fw9">Departure Date<em className="pfc2">*</em>
              <span className="f12 fw3"> (Choose Any)</span>
            </label>
          </div>

          <div className="flex spaceBetween mb15">
            <div className={`button-box round-icon ${(fixedDateCheck || selectedDate) && !isDateNotDecided &&
            isDateDecided ? 'active' : ''}`} id="fixed_date_fnew"
                 onClick={this.toggleDatePickerCalendar.bind(this)}>
              <span className="tick-icon-container">
                <Tick/>
              </span>
              <div className="icon-48">
                <DateDecided />
              </div>
              <p className="text-center">Dates Decided</p>
            </div>
            {
              this.state.isDatePickerOpen && (
                <DatePicker
                  dateForm="DD/MM/YYYY"
                  readOnly
                  minDate={new Date()}
                  value={this.state.selectedDate ? this.state.selectedDate : ''}
                  placeholderText="Fixed Date"
                  inline
                  calendarClassName="custom-variation-datepicker sequential-form-date-picker"
                  onChange={this.handleFixedChange}
                  onClickOutside={this.hideDatePicker}
                  selected={this.state.selectedDate && new Date(this.state.selectedDate) !== 'Invalid Date' ?
                    new Date(this.state.selectedDate) : new Date()
                  }
                />
              )
            }
            <div className={`button-box round-icon ${(isDateNotDecided && flexibleDate) ||
            formValues.start_date === 'Anytime'? 'active' : ''}`}
                 onClick={this.handleNotDecided}>
              <span className="tick-icon-container">
                <Tick/>
              </span>
              <div className="icon-48">
                <DateNotDecided />
              </div>
              <p className="text-center">Dates Not Decided</p>
            </div>
          </div>

          {
            fixedDateCheck && selectedDate &&
            <div className="input-with-icon-box pr0 pl0 relative cross-visible-box mb15 clearfix">
              <label className="ddate-label pb8 f14 fw9">Departure Date</label>
              <div className="relative">
                <span className="input-icon">
                  <CalendarIcon />
                </span>
                <div>
                  <button
                    id="fixed_date_fnew"
                    type="button"
                    className="form-date-check input box-input-flex"
                    onClick={(e) => this.toggleDatePickerCalendar.call(this, e, false, true)}>
                    {this.state.selectedDate ? this.state.selectedDate : ''}
                  </button>
                </div>
                {
                  this.props.meta.touched &&
                  (
                    (this.props.meta.error && <span className="input-error-text">{this.props.meta.error}</span>) ||
                    (this.props.meta.warning && <span>{this.props.meta.warning}</span>)
                  )
                }
              </div>
              {
                fixedDateCheck &&
                <div className={"booked-ticket col-xs-12 p0 booked-ticket"}>
                  <input type="checkbox"
                         checked={isBookedTicket}
                         onChange={this.handleBookedTickets}
                         id="booked-ticket" className="checkbox-common checkbox-common"
                         value="on"
                  />
                  <label htmlFor="booked-ticket" className="f12 pb8">I have booked my travel tickets</label>
                </div>
              }
            </div>
          }
          {
            flexibleDate &&
            <Modal
              isOpen={showTravelMonths}
              style={travelMonthModalStyles}
              onRequestClose={this.handleCloseMonthModal}
              shouldCloseOnOverlayClick={true}
              overlayClassName="travel-month-overlay"
            >
              <TravelMonths handleAnytimeChange={this.handleAnytimeChange}
                            handleMonthChange={this.handleMonthChange}
                            formValues={this.props.formValues} />
            </Modal>
          }
          {
            showMonthOfTravel &&
            <div className="input-with-icon-box pr0 pl0 relative cross-visible-box  mb15 clearfix">
              <label className="ddate-label pb8 f14 fw9">Month of Travel</label>
              <div className="relative">
          <span className="input-icon">
            <CalendarIcon />
          </span>
                <div>
                  <button
                    id="fixed_date_fnew"
                    type="button"
                    className="form-date-check input box-input-flex"
                    onClick={(e) => this.handleMonthChange(selectedMonth)}>
                    {selectedMonth}
                  </button>
                </div>
              </div>
              {
                this.props.meta.touched &&
                (
                  (this.props.meta.error && <span className="input-error-text">{this.props.meta.error}</span>) ||
                  (this.props.meta.warning && <span>{this.props.meta.warning}</span>)
                )
              }
            </div>
          }
          <div className={`number-of-days-container ${((fixedDateCheck && selectedDate) || (!showTravelMonths && flexibleDate && isDateNotDecided) || showMonthOfTravel ) ? '' : 'hide'}`}>
            <Field
              name="trip_days_temp"
              component={FormDateNum}
              showDays={true}
              dispatch={this.props.meta.dispatch}
              form={this.props.meta.form}
              rtData={this.props.rtData}
              dispatchRxFormAction={this.props.dispatchRxFormAction}
              days={this.props.days}
              formValues={this.props.formValues}
              variation={true}
            />
          </div>
        </div>
        {
          this.props.meta.touched &&
          (
            (this.props.meta.error && <span className="input-error-text move-up-15">{this.props.meta.error}</span>) ||
            (this.props.meta.warning && <span>{this.props.meta.warning}</span>)
          )
        }
        <Footer goBack={this.goBack} goForward={this.goForward} goNextDisabled={goNextDisabled} />
      </div>
    );
  }
}

DepartureDateFormOne.propTypes = {
  formValues: PropTypes.object,
  location: PropTypes.object,
  days: PropTypes.string,
  rtData: PropTypes.object,
  formStage: PropTypes.number,
  progressBar: PropTypes.func
};

DepartureDateFormOne.defaultProps = {
  formValues: {},
  rtData: {},
  days: ''
};

export default DepartureDateFormOne;
