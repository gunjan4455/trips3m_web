import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateRange from './DateRange';

import styles from './dateRangeMain.cm.scss';
import { format, dayDifference } from 'helpers/DateTime';

class DateRangeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.data.checkInDate ? new Date(props.data.checkInDate) : null,
      endDate: props.data.checkOutDate ? new Date(props.data.checkOutDate) : null,
      showStartPicker: props.showStartPicker
    };
  }

  handleSubmit = () => {
    this.props.handleSubmit({
      checkInDate: format(this.state.startDate, 'YYYY-MM-DD'),
      checkOutDate: format(this.state.endDate, 'YYYY-MM-DD')
    });

    this.props.closePopup();
  };

  handleDayClick = (date, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }

    const { startDate, showStartPicker } = this.state;

    if(!startDate || showStartPicker || startDate > date){
      this.setState({ startDate: date, endDate: null, showStartPicker: false });
    } else if (dayDifference(startDate, date) === 0) {
      return;
    } else {
      this.setState({ endDate: date, showStartPicker: true });
    }
  };

  clearDates = () => {
    this.setState({ startDate: null, endDate: null, showStartPicker: true });
  };

  render() {
    const {
      startDate,
      endDate,
      showStartPicker
    } = this.state;

    return (
      <div className="sbcw wfull pt8">
        <div className='absolute wfull t0 l0'>
          <div className="p8 wfull fixed t0 z5 sbcw clearfix">
            <span className="f16 pfc4 p4 mr4 fright" onClick={this.clearDates}>Clear</span>
          </div>
        </div>
        <div
          className={`fixed l0 r0 wfull sbcw z15 ${styles.dateRangeTab} ${showStartPicker || endDate ? styles.start : styles.end}`}>
          <div className="flex pl15 pr15 pt24 pb24 spaceBetween text-center">
            <div className="flexFull text-left">
              <span
                className={`f24 fw7 block ${showStartPicker || endDate ? 'pfc1' : 'pfc3'}`}>{startDate ? format(startDate, 'DD MMM') : '--'}</span>
              <span
                className={`f16 ${showStartPicker || endDate ? 'pfc1' : 'pfc4'}`}>Check in</span>
            </div>
            <div className="flexFull flex justifyCenter">
              <span className={`block mt15 ${styles.divider}`}></span>
            </div>
            <div className="flexFull text-right">
              <span
                className={`f24 fw7 block ${showStartPicker || endDate ? 'pfc3' : 'pfc1'}`}>{endDate ? format(endDate, 'DD MMM') : '--'}</span>
              <span
                className={`f16 ${showStartPicker || endDate ? 'pfc4' : 'pfc1'}`}>Check out</span>
            </div>
          </div>
        </div>

        <div className="p15 pt64 mt64 pb64 flex flexDColumn">
          <div className="flexFull">
            <DateRange startDate={startDate} endDate={endDate} showStartPicker={showStartPicker}
                       handleDayClick={this.handleDayClick} />
          </div>
        </div>

        <div className="fixed b0 l0 r0 bs4 z10 p8 bt sbcw">
          <button className="btn-filled-pri-large wfull ripple" onClick={this.handleSubmit}
                  disabled={!(startDate && endDate)}>
            <div className="wave" />
            Save
          </button>
        </div>

      </div>
    );
  }
}

DateRangeWrapper.propTypes = {
  showStartPicker: PropTypes.bool,
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
  closePopup: PropTypes.func
};

DateRangeWrapper.defaultProps = {
  showStartDate: true,
  showEndDate: false,
  data: {}
};

export default DateRangeWrapper;
