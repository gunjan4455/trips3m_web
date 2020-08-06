import PropTypes from 'prop-types';
import React from 'react';
import options from 'constants/chatbotTripType';

import { openChatHandler } from './FixedMenu';
import './chatbotPopup.scss';

class ChatbotPopup extends React.Component {
  constructor(){
    super();
    this.state={
      showPopup: true
    };
  }

  closePopup = (e, flag) => {
    e && e.stopPropagation();
    this.setState({ showPopup: false});
    this.props.closePopup(flag);
  };

  openChatHandler = (e, flag) => {
    e && e.preventDefault();
    openChatHandler(e);
    this.closePopup(e, flag);
  };

  render() {
    const { showPopup } = this.state;

    return (
      <div className='parent-class-chat add-mask' id='parent-class-chat'>
        <div onClick={this.openChatHandler}
             className={showPopup ? 'popup-class showChatPop' : 'popup-class transform-popup'} id='popup-container'>
          <div className='heading-top'>
            <div className='logo'>
              <span className='span-logo' />
            </div>
            <div className='logo-heading'><p className='heading-pop'>Are you looking for help in planning your trip?</p>
              <span className='tri' /></div>
            <span className='cross-popup' onClick={this.closePopup}>&times;</span>
          </div>
          <div className='popup-middle'>
            {options.map((option, i) => (
              <p key={i} onClick={(e) => this.props.selectOption(option, e)}>{option.label}</p>
            ))}
          </div>
          <div className='popup-lower'>
            <label htmlFor="chat_handler_input" className="hidden_element">type of select</label>
            <input id="chat_handler_input" placeholder='Type or select from above...' onClick={(e) => {this.openChatHandler(e,'inputClick');}} />
            <button className='submit-popup'>SEND</button>
          </div>
        </div>
      </div>
    );
  }
}

ChatbotPopup.propTypes = {
  selectOption: PropTypes.func,
  closePopup: PropTypes.func
};

export default ChatbotPopup;
