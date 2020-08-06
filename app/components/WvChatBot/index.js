import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import options from 'constants/chatbotTripType';
import { load as loadUserDetails } from 'actions/auth';
import { setCookie, getCookie, getQueryVariable } from 'helpers/FormDataFormatter';
import { goBack } from 'react-router-redux';

import {
  identifyPayload,
  aliasPayload
} from 'actions/segmentEvents';
import { useQuery } from 'containers/Listing/parseFilters';

export const EXIT_INTENT = 'exitintent:wvchatbot:exitingchatapp';
const CHAT_CROSS = 'cross';

const getJsonAsString = (data = {}) => {
  if (data === EXIT_INTENT) {
    return data;
  } else {
    return `exitintent:wvchatbot:${JSON.stringify(data)}`;
  }
};

@connect(
  null,
  {
    loadUserDetails,
    goBack
  }
)

class WvChatBot extends Component {
  static openedChatBot = false;
  static intervalId;

  static propTypes = {
    location: PropTypes.object.isRequired,
    loadUserDetails: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      uniqueIdForChatBot: '',
      selectedAnswer: {},
      ChatBot: null,
      queNAns: this.setFirstQuestion(props)
    };

    this.onchatBotSubmit = this.onchatBotSubmit.bind(this);
    this.triggerChatBotScripts = this.triggerChatBotScripts.bind(this);
    this.getSelectedAnswer = this.getSelectedAnswer.bind(this);
    this.getUniqueId = this.getUniqueId.bind(this);
  }

  onchatBotSubmit = ({ response, isEnd, requestParams, headers, isDowntime }) => {
    const { location : { search } } = this.props;
    const query = useQuery(search);
    if (isEnd) {
      // final submit request
      let redirectUrl = response.data && response.data.redirect_url;
      if (typeof window !== 'undefined') {
        redirectUrl = `https://${window.location.host}${redirectUrl}`;
      }
      if (!isDowntime) {
        this.props.loadUserDetails();
        aliasPayload({
          user_id: response.data.user_id
        });
        identifyPayload({
          user_id: response.data.user_id
        });
        setCookie('u_id', response.data.user_id);
      }

      if (window.location.pathname === '/wvchatbot' && !query.mview) {
        if (response.data.new_user_info) {
          this.chatExitIntent({ response, headers });
        } else {
          this.chatExitIntent(EXIT_INTENT);
        }
      } else {
        window.location.href = redirectUrl;
      }

    }
  };

  chatExitIntent = (data) => {
    const { location: { search } } = this.props;
    const query = useQuery(search);
    if (query.mview) { //handling for AMP
      this.props.goBack();
    } else {
      if (typeof nativeAppObject !== 'undefined') { // Only works for Android

        if (data === CHAT_CROSS) {
          return nativeAppObject.exitIntent(`exitintent:wvchatbot:${CHAT_CROSS}`);
        }

        return nativeAppObject.exitIntent(getJsonAsString(data));
      } else { // Only works for iOS
        window.getExitIntentDataForChatBot = function () { // iOS will call this function.
          if (data === CHAT_CROSS) {
            return `exitintent:wvchatbot:${CHAT_CROSS}`;
          }
          return getJsonAsString(data);
        };

        window.location = EXIT_INTENT;
      }
    }

  };

  closeHandler = () => this.chatExitIntent(CHAT_CROSS);

  componentDidMount() {
    const chatbotAsync = () => import(/* webpackChunkName: 'chatbot' */ 'trips3m-chatbot')
      .then(
        (bot) => {
          this.setState({
            ChatBot: bot.default,
            selectedAnswer: this.getSelectedAnswer(),
            uniqueIdForChatBot: this.getUniqueId()
          });
        }
      );
    chatbotAsync();

    WvChatBot.intervalId = setInterval(() => {
      if (window.openMobChat) {
        window.openMobChat();
        document.querySelector('.rsc-header-close-button').addEventListener('click', this.closeHandler);

        WvChatBot.openedChatBot = true;

        if (WvChatBot.openedChatBot) {
          clearInterval(WvChatBot.intervalId);
        }
      }
    }, 0);
  }

  componentWillUnmount() {
    document.querySelector('.rsc-header-close-button').removeEventListener('click', this.closeHandler);
  }

  createNewUniqueId = () => {
    let myUserid = '';
    let myRandomtext = '';
    const d = new Date().getTime();
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|+-';
    for (let i = 0; i < 8; i += 1) {
      myRandomtext += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    myUserid = `${d}_${myRandomtext}`;
    return myUserid;
  };

  getSelectedAnswer() {
    const query = useQuery(this.props.location && this.props.location.search);
    const optionId = (query && query.optionId) || -1;
    const answer = options.filter(option => (option.optionId === parseInt(optionId)))[0];
    return answer ? { tripType: answer } : {};
  }

  getUniqueId() {
    if (!this.state.uniqueIdForChatBot) {
      return this.createNewUniqueId();
    }
  }

  triggerChatBotScripts = () => {
    window.openMobChat = () => {
      document.querySelector('.rsc-float-button').click();
      document.querySelector('#chat_bot_container_parent').style.display = 'block';
    };
  };

  setFirstQuestion = (props) => {
    const { location: { search } } = props;
    const query = useQuery(search);
    if (query.mview && query.optionId) {
      const ans = options.filter(option => option.id === query.optionId);
      return { tripType: ans };
    }
    return {};
  };


  render() {
    const { ChatBot } = this.state;

    let isPublicProduct = true;
    if (typeof window !== 'undefined') {
      const srcUrl = getQueryVariable('srcUrl');
      if (srcUrl.includes('/blog')) {
        isPublicProduct = false;
      }
    }

    if (ChatBot) {
      this.triggerChatBotScripts();
    }

    return (
      <div id="chat_bot_container_parent">
        {
          ChatBot &&
          <ChatBot
            isPublicProduct={isPublicProduct}
            redisKey={this.state.uniqueIdForChatBot}
            onSubmit={[this.onchatBotSubmit]}
            queNAns={ this.state.selectedAnswer }
            chatInputFocus={ false }
          />
        }
      </div>
    );
  }
}

export default WvChatBot;
