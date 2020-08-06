import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import './customDateRange.scss';

class DateRange extends React.Component {
  state = {
    from: null,
    to: null,
    enteredTo: null, // Keep track of the last day for mouseEnter.
  };

  componentDidMount() {
    const targetEl = document.querySelectorAll('.DayPicker-Day--selected')[0];
    if (targetEl) {
      const targetMonthNode = targetEl.closest('.DayPicker-Month');
      targetMonthNode && targetMonthNode.scrollIntoView({ block: 'center' });
    }
  }

  render() {
    const {
      startDate,
      endDate,
    } = this.props;

    const from = startDate;
    const to = endDate;

    const modifiers = { start: from, end: to };
    const disabledDays = { before: new Date() };
    const selectedDays = [from, { from, to: to }];

    return (
      <DayPicker
        className="Selectable customDateRange"
        numberOfMonths={12}
        initialMonth={new Date()}
        selectedDays={selectedDays}
        disabledDays={disabledDays}
        modifiers={modifiers}
        onDayClick={(date) => this.props.handleDayClick(date)}
        canChangeMonth={false}
      />
    );
  }
}

DateRange.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  handleDayClick: PropTypes.func
};

DateRange.defaultProps = {};

export default DateRange;
