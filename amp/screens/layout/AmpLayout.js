import React from 'react';
import PropTypes from 'prop-types';

import HeaderCommon from 'amp/modules/header/AmpHeader';
import Footer from 'amp/modules/footer';

import 'amp/modules/header/AmpHeader.scss';
import 'amp/modules/searchBar/SearchBar.scss';
import 'amp/modules/footer/Footer.scss';
import './AmpLayout.scss';
import ChatbotPopup from 'amp/modules/common/ChatbotPopup/chatbotPopup';
import 'amp/modules/common/ChatbotPopup/chatbotPopup.scss';

class AmpLayout extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <HeaderCommon/>
        {this.props.children}
        <ChatbotPopup  {...this.props}/>
        <Footer/>
      </div>
    );
  }
};

export default AmpLayout;

