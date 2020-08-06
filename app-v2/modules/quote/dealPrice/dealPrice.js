import React from 'react';
import PropTypes from 'prop-types';

import config from 'appConfig';
import Modal from 'modules/shared/GenericModal';
import ModalHeaderCustom from 'modules/shared/headers/ModalHeaderCustom';
import DealPriceForm  from './form';
import { ThankYouTick, EnvelopeIcon } from 'helpers/Icon/Icon';
import { ORGANISM_CLICKED } from 'app/actions/segmentEvents';
import { currentDate, toTimeStamp } from 'helpers/DateTime';
import { generateUniqueId } from 'helpers/utils';
import { initializeChatUsingRtms, MessageType } from 'helpers/rtms';

const ThankYouMessage = ({ agentName }) => {
  return (
    <div className="mt24">
      <div className="thank-you-animation relative">
        <div className="envelope-box"><EnvelopeIcon /></div>
        <div className="thankyou-tick"><ThankYouTick /></div>
      </div>
      <p className="pfc1 f32 fw7 text-center">Thank You</p>
      <p className="f14 text-center">
        {agentName ? <b>{agentName}</b> : 'Our Agent'} will get back to you soon.
      </p>
    </div>
  );
};

ThankYouMessage.propTypes = {
  agentName: PropTypes.string
};

const generateTrigger = (handleModalOpen) => (
  <div className="p15 text-center">
    <p className="f16 fw9 lh24">
      <span className="f16 fw9">Got a cheaper deal?</span>
      <span className="sfc1 ml4 at_tellUs" onClick={() => handleModalOpen()}>Tell us</span>
      {/*Don't remove at_tellUs, Has dependency on CheaperDealPopup*/}
    </p>
    <p className="f14 pfc4 fw4 lh24">And we will try to match the price.</p>
  </div>
);

class DealPrice extends React.PureComponent {

  static propTypes = {
    trackSegment: PropTypes.func.isRequired,
    userDetails: PropTypes.object.isRequired,
    agent: PropTypes.object.isRequired,
    tripId: PropTypes.number.isRequired,
    currentQuoteId: PropTypes.number.isRequired,
    createComment: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired
  };

  state = { showThankYou : false, closeModal: true };

  showThankYou = () => this.setState({showThankYou:true});

  submit = async (values) => {
    setTimeout(() => {
      this.setState({ closeModal: true, showThankYou: false });
    }, 3000);
    this.showThankYou();
    this.props.trackSegment(ORGANISM_CLICKED,'Price Matching-Popup',  '', 'Submit');
    await this.initializeChat();
    this.sendMessage(`Dear Agent, I am receiving a better quote at ${values.currency} ${values.price}. Please provide me a better deal`);
  };

  initializeChat = async () => {
    if (config.useRtms && this.rtms_) {
      this.rtms_.close();
    }
    const { userDetails, addMessage, agent, currentQuoteId } = this.props;
    const { currentSubscription_, rtms_ } = await initializeChatUsingRtms({ userId: userDetails.id, agentId: agent.id });
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

  handleModalOpen = () => {
    this.setState({ closeModal: false });
    this.props.trackSegment(ORGANISM_CLICKED, 'Price Matching',  '', 'Tell Us');
  };

  handleModalClose = () => {
    const {  trackSegment } = this.props;
    this.setState({ showThankYou: false, closeModal: true });
    trackSegment(ORGANISM_CLICKED,'Price Matching-Popup',  '', 'Cross');
  };

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

  render() {
    const { agent } = this.props;
    return (
      <Modal
        trigger={generateTrigger(this.handleModalOpen)}
        fullView={true}
        isDefaultModal={false}
        hasCustomClose={true}
        onRequestCloseCustom={this.handleModalClose}
        customCloseTrigger={this.state.closeModal}
      >
        <div className="relative siteModalContent">
          <ModalHeaderCustom heading={'Got a better deal?'} />
          <div className="p24">
            {
              this.state.showThankYou ?
                <ThankYouMessage agentName={agent && agent.name}/>
                :
                <DealPriceForm save={this.submit} />
            }
          </div>
        </div>
      </Modal>
    );
  }
}

export default DealPrice;
