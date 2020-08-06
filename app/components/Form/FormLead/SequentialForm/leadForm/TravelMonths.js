/* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';

const getMonths = () => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentDate = new Date();
  const retValue = [];
  const months = [];
  for (let i = 0; i < 6; i += 1) {
    const m = monthNames[((currentDate.getMonth() + i)%12)];
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

class TravelMonths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth : this.setSelectedMonth(props)
    }
  }

  setSelectedMonth = (props) => {
    const { formValues } = props;
    if(formValues.start_date_flexible) {
      const matches = formValues.start_date_flexible.match(/(\w)+/g);
      const months = getMonths();
      const selectedMonth = months.findIndex((month) => {
        return (month.value.toLowerCase().includes('after')) ?
          matches[0].toLowerCase() === 'after' :
          month.value.toLowerCase() === matches[0].toLowerCase();
      });

      return selectedMonth;
    }
    return null;
  };

  selectMonth = (index) => {
    this.setState({ selectedMonth: index });
    const months = getMonths();
    if(index === 6 || index === 7) {
      this.props.handleAnytimeChange(months[index].value);
    }else {
      this.props.handleMonthChange(months[index].value);
    }
  };

  getMonthsList = () => {
    const months = getMonths();
    return months.map((month, i) => (
      <div className={`month-option month-pills ${this.state.selectedMonth === i ? 'active': ''}`}
           onClick={() => this.selectMonth(i)}
           key={i}>{month.label}</div>
    ));
  };

  render() {
    return (
      <div className="mt15 mb15 text-center month-selection-modal">
        <div className="dividing-line"></div>
        <label className="f16 fw7 pb8 iblock pfc3 month-of-travel-heading">Month of Travel</label>
        <div className="month-container flex flexWrap spaceBetween">
          {this.getMonthsList()}
        </div>
        <div className="dividing-line"></div>
      </div>
    );
  }
}

TravelMonths.propTypes = {
  formValues: propTypes.object,
};

TravelMonths.defaultProps = {
  formValues: {},
};

export default TravelMonths;
