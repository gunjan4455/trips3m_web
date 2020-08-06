import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Action from 'amp/helpers/Action';
import options from './chatbotTripType';

class ChatbotPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: true
    };
  }

  closePopup = (e, flag) => {
    e && e.stopPropagation();
    this.setState({ showPopup: false });
    this.props.closePopup(flag);
  };

  openChatHandler = (e, flag) => {
    e && e.preventDefault();
    openChatHandler(e);
    this.closePopup(e, flag);
  };

  getUrl = (optionId) => {
    const path = this.props.location.pathname;

    return optionId ? `/wvchatbot?mview=true&srcUrl=${path.replace('/', '')}&optionId=${optionId}` :
      `/wvchatbot?mview=true&srcUrl=${path.replace('/', '')}`;
  };

  render() {
    const { showPopup } = this.state;

    return (
      <div className='parent-class-chat add-mask'
           data-amp-bind-class="hideChatPopup ? 'hide' : 'parent-class-chat add-mask'"
             id='parent-class-chat'>
        <div onClick={this.openChatHandler}
             className={showPopup ? 'popup-class showChatPop' : 'popup-class transform-popup'} id='popup-container'>
          <div className='heading-top'>
            <div className='logo'>
              <span className='span-logo' />
            </div>
            <div className='logo-heading'><p className='heading-pop'>Are you looking for help in planning your trip?</p>
              <span className='tri' /></div>
            <Action events={{ tap: ['AMP.setState({hideChatPopup : !hideChatPopup})'] }}>
              {(props) => (
                <button className='cross-popup'  {...props}>&times;</button>
              )}
            </Action>
          </div>
          <div className='popup-middle'>
            {options.map((option, i) => (
              <p key={i} onClick={(e) => this.props.selectOption(option, e)}>
                <Link to={this.getUrl(option.optionId)}>{option.label}</Link></p>
            ))}
          </div>
          <Link className='popup-lower' to={this.getUrl()}>
            <label htmlFor="chat_handler_input" className="hidden_element">type of select</label>
            <input id="chat_handler_input" placeholder='Type or select from above...'
                   onClick={(e) => {
                     this.openChatHandler(e, 'inputClick');
                   }} />
            <button className='submit-popup'>SEND</button>
          </Link>
        </div>
      </div>
    );
  }
}

ChatbotPopup.propTypes = {
  selectOption: PropTypes.func,
  closePopup: PropTypes.func,
  location: PropTypes.object
};

export default ChatbotPopup;
