import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import RejectQuotePopup from '../popups/rejectQuote/index';
import { rescue } from 'helpers/utils';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';

class RejectQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      closeModal: false
    };
  }

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  trackSegmentEvent = () => {
    rescue(() => {
      this.props.trackSegment(ORGANISM_CLICKED, 'Quotes section', 'Reject quote', '', '', this.props.quoteId, 'quote id');
    });
  };

  render() {
    const { quoteId, tripId, isQuoteCardCta, quoteRejectionReasons, callbackHandler, trackSegment } = this.props;
    return (
      <div className="flexFull flex">
        <Modal
          trigger={
            <button className={isQuoteCardCta ? 'block p15 fw7 text-left wfull at_rejectQuote' : 'wfull p15 fw7 cursorP at_rejectQuote'}
              onClick={this.trackSegmentEvent}>Reject Quote
            </button>
          }
          fullView={true}
          hasCustomClose={true}
          customCloseTrigger={this.state.closeModal}
          isTriggerFullView={true}
        >
          <RejectQuotePopup rejectQuoteReasons={quoteRejectionReasons}
                            closeModal={this.closePopup}
                            rejectQuoteHandler={callbackHandler}
                            tripId={tripId}
                            quoteId={quoteId}
                            loading={this.props.loading} />
        </Modal>
      </div>
    );
  }
}

RejectQuote.propTypes = {
  tripId: PropTypes.number.isRequired,
  quoteId: PropTypes.number.isRequired,
  callbackHandler: PropTypes.func.isRequired,
  quoteRejectionReasons: PropTypes.object.isRequired,
  isQuoteCardCta: PropTypes.bool,
  loading: PropTypes.bool,
  trackSegment: PropTypes.func
};

RejectQuote.defaultProps = {
  isQuoteCardCta: false,
  loading: false
};

export default RejectQuote;
