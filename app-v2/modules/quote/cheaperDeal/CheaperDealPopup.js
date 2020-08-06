import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import config from 'appConfig';
import { PdpQuotes, CloseIcon } from 'helpers/Icon/Icon';
import { initializeChatUsingRtms, MessageType } from 'helpers/rtms';
import { currentDate, toTimeStamp } from 'helpers/DateTime';
import { generateUniqueId } from 'helpers/utils';
import { ORGANISM_VIEWED, ORGANISM_CLICKED } from 'actions/segmentEvents';

import styles from './style.cm.scss';

class CheaperDealPopUp extends PureComponent {

  static propTypes = {
    trackSegment: PropTypes.func.isRequired,
    userDetails: PropTypes.object.isRequired,
    agent: PropTypes.object.isRequired,
    tripId: PropTypes.number.isRequired,
    currentQuoteId: PropTypes.number.isRequired,
    createComment: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired,
    afterSend: PropTypes.func
  };

  static defaultProps = {
    afterSend: () => {}
  };

  componentDidMount() {
    this.props.trackSegment({ event: ORGANISM_VIEWED, section: 'Price Matching - Popup 2' });
  }

  componentWillUnmount() {
    if (config.useRtms && this.rtms_) {
      this.rtms_.close();
    }
  }

  async onBetterDeal() {
    this.props.trackSegment({ event: ORGANISM_CLICKED, section: 'Price Matching - Popup 2', cta: 'YES' });
    const el = document.getElementsByClassName("at_tellUs");
    el.length && el[0].click();
    await this.initializeChat();
    this.sendMessage(`Dear Agent, I am being provided with a better quote. Please give me a better deal.`);
    this.props.closePopup();
  }

  sendMessage(message) {
    const { tripId, currentQuoteId, createComment, userDetails, addMessage } = this.props;
    const { id, name, email, avatar } = userDetails;
    const messageObj = {
      title: '#chat',
      comment: message,
      commentBy: 'TRAVELLER',
      commentable_id: currentQuoteId,
      commentable_type: 'Quote',
      role: 'traveller',
      userId: id,
      user_id: id,
      userName: name,
      email,
      userPic: avatar,
      createdAt: currentDate(),
      created_at: new Date().toISOString().split('.')[0] + "+00:00",
      uId: generateUniqueId(id, toTimeStamp(new Date()), message),
      notification_sub_category: 'comment_added',
      trip_id: parseInt(tripId.toString().replace(/[^0-9\.]/g, ''), 10),
      isPending: 0,
    };
    this.currentSubscription_.sendMessage({ content: messageObj });
    createComment(tripId, currentQuoteId, messageObj);
  }

  async initializeChat() {
    if (config.useRtms && this.rtms_) {
      this.rtms_.close();
    }
    const { userDetails, addMessage, agent, currentQuoteId } = this.props;
    const { currentSubscription_, rtms_ } = await initializeChatUsingRtms({
      userId: userDetails.id,
      agentId: agent.id
    });
    this.currentSubscription_ = currentSubscription_;
    this.rtms_ = rtms_;
    this.currentSubscription_.on(MessageType.MESSAGE, function (message) {
      if (message.commentable_id === currentQuoteId) {
        addMessage(message, currentQuoteId);
      }
    }.bind(this));

    this.currentSubscription_.on(MessageType.MY_MESSAGE, function (message) {
      if (message.commentable_id === currentQuoteId) {
        addMessage(message, currentQuoteId);
      }
    }.bind(this));
  };

  closePopup() {
    this.props.trackSegment({ event: ORGANISM_CLICKED, section: 'Price Matching - Popup 2', cta: 'No' });
    this.props.closePopup();
  }

  render() {
    return (
      <div className={`pr15 pl15 pt32 pb24 sbcw at_CheaperDealPopup ${styles.popUp}`}>
        <div
          className="icon-24 absolute r15 t15"
          onClick={() => this.closePopup()}
        >
          <CloseIcon />
        </div>
        <div className="flex flexDColumn alignCenter">
          <div style={{ width: "114px", height: "81px" }} className="mb15">
            <PdpQuotes />
          </div>
          <p className="f20 fw9 mb8">Got a Cheaper Deal?</p>
          <p className="mb24 pl48 pr48 text-center">Tell us if you have a better deal and we will try to match the
            price.</p>
          <div
            className="sfcw fw7 sbc1 radius4 p10 wfull text-center mb15 at_better"
            onClick={() => this.onBetterDeal()}
          >
            <span>Yes, I Have a Better Deal</span>
          </div>
          <p
            className="fw7 pfc3 at_close"
            onClick={() => this.closePopup()}
          >
            No, I Don’t
          </p>
        </div>
      </div>
    );
  }
}

export default CheaperDealPopUp;
