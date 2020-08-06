import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EVENTS_ENUMS from 'modules/quote/EventTypes';

class BookNow extends Component {

  handleBookNow = () => {
    const { tripId, quoteId } = this.props;
    this.props.callbackHandler(EVENTS_ENUMS.BOOK_NOW, { tripId, quoteId });
  };

  render() {
    const { isQuoteCardCta } = this.props;
    return (
      <div className="flexFull">
        <button className={isQuoteCardCta ? 'block p15 text-left wfull at_bookNow' : 'wfull btn-pri-large ripple pl5 pr5 at_bookNow'} onClick={this.handleBookNow}>
          Book Now
        </button>
      </div>
    );
  }
}

BookNow.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  opsDetail: PropTypes.object,
  callbackHandler: PropTypes.func,
  trackSegment: PropTypes.func,
  isQuoteCardCta: PropTypes.bool
};

BookNow.defaultProps = {
  opsDetail: {},
  callbackHandler: () => {
  },
  trackSegment: () => {
  },
  isQuoteCardCta: false
};

export default BookNow;
