import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BookNowPopup extends PureComponent {
  render() {
    const { agent, priceInfo, closeModal, bookNow } = this.props;

    return (
      <div className='pt24 pl15 pr15 pb24'>
        <div className='f14 sfc6 at_agentInfo'>
          {`You are booking quote by Agent ${agent.name} priced at ${priceInfo.price} (${priceInfo.perPerson === 'per person' ? 'per person' : ' total'}).`}
        </div>
        <div className='pt24 text-right'>
          <button className='mr24 sfc6 fw7 at_closeModal' onClick={closeModal}>Cancel</button>
          <button className="sfc1 fw7 at_continue" onClick={bookNow}>Continue</button>
        </div>
      </div>
    );
  }
}

BookNowPopup.propTypes = {
  agent: PropTypes.object,
  priceInfo: PropTypes.object,
  closeModal: PropTypes.func,
  bookNow: PropTypes.func
};

export default BookNowPopup;
