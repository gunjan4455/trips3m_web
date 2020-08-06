import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { secondsToDhms } from 'helpers/DateTime';
import { capitalizeFirstLetter } from 'app/utils/parsers';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';
import styles from './quoteTimer.cm.scss';

const TIME_INTERVAL = 1000;

class QuoteTimer extends PureComponent {

  state = { totalTimeInSeconds: this.props.totalTimeInSeconds };

  componentDidMount() {
    const { trackSegment, totalTimeInSeconds } = this.props;
    const timeObject = secondsToDhms(totalTimeInSeconds);
    let cta;
    Object.keys(timeObject).map((key) => {
      let rt = Math.floor(timeObject[key]);
      rt = rt < 10 ? `0${rt}` : rt;
      cta = cta ? `${cta}_${rt}` : `Timer_${rt}`;
    });
    trackSegment({ event: ORGANISM_VIEWED, section: 'Urgency Timer', cta });
    this.timer = setInterval(() => this.tick(), TIME_INTERVAL);
  }

  tick = () => {
    const { totalTimeInSeconds } = this.state;
    if (totalTimeInSeconds <= 0) {
      clearInterval(this.timer);
      return;
    }
    return this.setState({ totalTimeInSeconds: totalTimeInSeconds - 1 });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  renderTimeBlock = (remainingTime, timeUnit) => {
    const rt = Math.floor(remainingTime);
    return (
      <div className="flexFull text-center pr15 pl15 ">
        <p className="f16 fw9">{rt < 10 ? `0${rt}` : rt}</p>
        <span className="f10">{capitalizeFirstLetter(timeUnit)}</span>
      </div>
    );
  };

  render() {
    const { totalTimeInSeconds } = this.state;
    if (totalTimeInSeconds < 0) {
      return null;
    }
    const timeObject = secondsToDhms(totalTimeInSeconds);
    return (
      <div className="at_QuoteTimerBanner relative pb24 sbcw">
        <div className={`pt15 pb32 ${styles.timerBanner}`}>
          <h4 className="text-center f14 fw4 pl24 pr24 mb15">Hurry! Book your quote before prices increase.<br />Quote prices expire in:</h4>
        </div>
        <div className={` ${styles.countDown} at_QuoteTimerSection radius6 flex sbcw pt8 pb8 pl15 pr15 absolute l0 r0 b0`}>
        {
          Object.keys(timeObject).map((key) => this.renderTimeBlock(timeObject[key], key))
        }
        </div>
      </div>
    );
  }
}

QuoteTimer.propTypes = {
  totalTimeInSeconds: PropTypes.number.isRequired,
  trackSegment: PropTypes.func.isRequired
};

QuoteTimer.defaultProps = {
  totalTimeInSeconds: -1
};

export default QuoteTimer;

