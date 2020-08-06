import React from 'react';
import PropTypes from 'prop-types';

import {
  AttachmentIcon, KeyboardActive, KeyboardInactive, SendIcon, SendIconGrey
} from 'helpers/Icon/Icon';
import Pdm from 'modules/pdm';
import { GKeyBoard, GPdmContainer } from '../G';

class ChatInput extends React.Component {
  static propTypes = {
    pdmsInformation: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    showHidePdmView: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.messageOnChange = this.messageOnChange.bind(this);
    this.setPdmMessage = this.setPdmMessage.bind(this);
    this.getVariationSendButton = this.getVariationSendButton.bind(this);
    this.focusOnInput = this.focusOnInput.bind(this);
    this.state = {
      messageText: '',
    };
  }

  componentDidMount() {
    window.addEventListener('QDP_CHAT_EX_MSG', (event) => {
      console.log('event: ', event);
      this.setState({
        messageText: event.detail.message
      });
      event.detail.focusOnInput && this.focusOnInput();
    });
  }

  focusOnInput() {
    if (this.chatInput) {
      this.chatInput.focus();
    }
  }

  showHidePdmView() {
    this.props.showHidePdmView(!this.props.pdmsInformation.showPdmView);
  }

  handleClick() {
    const message = this.state.messageText;

    if (message) {
      this.props.sendMessage(message);
    }

    this.setState({
      messageText: ''
    });

    this.focusOnInput();
  }

  setPdmMessage(pdmMessage) {
    const message = this.state.messageText;
    this.setState({
      messageText: pdmMessage
    });

    this.showHidePdmView();
    this.focusOnInput();
  }

  handleKeyUp(e) {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      this.handleClick();
    }
  }

  messageOnChange(e) {
    if (e.target.value !== '\n') {
      this.setState({ messageText: e.target.value, });
    }
  }

  getVariationSendButton() {
    return (
      <button className="attachment-button at_chatsendbtn absolute b10 r15" onClick={this.handleClick}>Send
      </button>);
  }

  render() {
    const { pdmsInformation } = this.props;

    return (
      <div
        className="row row- relative type-chat-con mb0 at_chatmessage">
        {
          pdmsInformation.showPdmView ?
            <GPdmContainer>
              <Pdm setMessage={this.setPdmMessage} />
            </GPdmContainer> : null
        }

        <button className="hide absolute attachment-button"><AttachmentIcon /></button>
        <div className="clearfix">
          {
            pdmsInformation.pdms ?
              <GKeyBoard className="l0 absolute-center-v" onClick={() => this.showHidePdmView()}>
                <span className="pl4 pl4 pt8 pb8 block">
                  {pdmsInformation.showPdmView ? <KeyboardActive /> : <KeyboardInactive />}
                  </span>
              </GKeyBoard>
              : null
          }
          <textarea
            onKeyPress={this.handleKeyUp}
            onKeyUp={this.handleKeyUp}
            className="at_chatinput"
            ref={(input) => {
              this.chatInput = input;
            }}
            onChange={this.messageOnChange}
            value={this.state.messageText}
            placeholder="Type a message…" />
          {this.getVariationSendButton()}
        </div>
      </div>
    );
  }
}

export default ChatInput;

