import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import Chat from 'modules/chat';

class ExplainTheQuote extends Component {

  render() {
    const { isQuoteCardCta, handleChatClick } = this.props;
    const ChatContainer = Chat.container;
    return (
      <div className="flexFull">
        <Modal
          trigger={
            <button className="wfull btn-filled-pri-large ripple pl5 pr5 at_explainTheQuote" onClick={handleChatClick}>
              Explain the Quote
            </button>
          }
          fullView={true}
          hasCustomClose={true}
          isWhiteIcon={true}
        >
          <ChatContainer explainTheQuote />
        </Modal>
      </div>
    );
  }
}

ExplainTheQuote.propTypes = {
  isQuoteCardCta: PropTypes.bool,
  handleChatClick: PropTypes.func
};

ExplainTheQuote.defaultProps = {
  isQuoteCardCta: false,
  handleChatClick: () => {}
};

export default ExplainTheQuote;
