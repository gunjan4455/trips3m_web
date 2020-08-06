/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

class DateWeekPanel extends React.Component {
  constructor(){
    super();
    this.updateWeek = this.updateWeek.bind(this);
  }
  updateWeek(e, week) {
    e.stopPropagation();
    this.props.selectWeek(week);
  }
  render() {
    const { currentYear, currentMonth, clickOverlay } = this.props;
    return (
      <div id="week-box-width" className={this.props.showWeek ? "sbcw z3 week-box-width bs4" : "absolute-center-h t0 sbcw z3 hide"}>
        <div onClick={clickOverlay} className="fixed t0 l0 wfull hfull week-mask" />
        <div className="sbcw week-box-width-inner">
          <div className="sbcw pfc1 f24 row row-">
            <p className="m0 text-center f16 date-week-title">{currentMonth} {currentYear}</p>
          </div>
          <div className="row row-">
            <ul className="m0 p10 pl0 pr0 iblock wfull">
            {
              this.props.numOfWeeks.map(week => {
                const clssName = (week >= this.props.startWeek) ? '' : 'disable';
                return <div key={week} value={`Week ${week}`} className="col-xs-6 clssName">
                  <div className="f14 pfc3 block mauto p8 text-center date-week-val" onClick={e => this.updateWeek(e, `Week ${week}`)}>
                    {`Week ${week}`}
                  </div>
                </div>;
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

DateWeekPanel.propTypes = {
  showWeek: PropTypes.bool,
  selectWeek: PropTypes.func,
  currentMonth: PropTypes.string,
  currentYear: PropTypes.number,
  numOfWeeks: PropTypes.array,
  startWeek: PropTypes.number
};

DateWeekPanel.defaultProps = {
  showWeek: false,
  selectWeek: () => {},
  currentMonth: '',
  currentYear: new Date().getFullYear(),
  numOfWeeks: [1, 2, 3, 4],
  startWeek: 1
};

export default DateWeekPanel;
