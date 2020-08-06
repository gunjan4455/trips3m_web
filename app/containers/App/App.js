import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { asyncConnect } from 'redux-connect';
import { ScrollPercentage } from 'react-scroll-percentage';
import GenericComponent from 'dynamic-react-ab';
import { matchRoutes } from 'react-router-config';
import _get from 'lodash/get';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loader from 'components/Generic/Loader';
import '../../theme/common.scss';
import HeaderCommon from 'modules/header/HeaderCommon';
import ChatbotPopup from 'components/FixedMenu/chatbotPopup';
import { openChatHandler } from 'components/FixedMenu/FixedMenu';
import { load as loadUserDetails } from 'actions/auth';
import {
  isLoaded as isAuthLoaded,
  isLoading as isAuthLoading,
  isLoggedIn as isAuthenticated,
} from '../../reducers/auth';
import {
  identifyPayload,
  aliasPayload,
} from 'actions/segmentEvents';
import { setCookie, getCookie } from 'helpers/FormDataFormatter';
import { isBookingPage } from 'helpers/bookings';
import gaUtmIife from '../../constants/gaUtmzReplicator';
import { chatExitIntent, EXIT_INTENT } from '../../components/WvChatBot';
import { init as genericDataPushBridgeInit } from '../../helpers/GenericDataPushBridge';
import { handleRequestTopNavigationItems } from 'modules/header/action';
import routes from '../../../server/routes';
import NotFound from 'app/components/Generic/NotFound';
import DecisionRoute from "../../../server/DecisionRoute";

if (__CLIENT__) {
  require('intersection-observer');
}

class App extends Component {
  static contextTypes = {};

  static propTypes = {
    location: PropTypes.object.isRequired,
    isAuthLoaded: PropTypes.bool.isRequired, // eslint-disable-line
    isAuthLoading: PropTypes.bool.isRequired, // eslint-disable-line
    loadUserDetails: PropTypes.func.isRequired,
    asyncConnectLoaded: PropTypes.bool.isRequired,
    identifyPayload: PropTypes.func.isRequired,
    aliasPayload: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    match: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  };

  chatbotAsync = () => import(/* webpackChunkName: 'chatbot' */ 'trips3m-chatbot')
    .then(bot => this.setState({ isChatBotEnabled: true, ChatBot: bot.default }));

  onchatBotSubmit = ({ response, isEnd, requestParams, headers }) => {
    const segmentPayload = {
      funnel_uuid: this.state.uniqueIdForChatBot,
      to_loc: requestParams.requested_trip.to_loc || getCookie('cd_dt'),
      section: 'chatBot',
      object: '',
      cta: 'chatBot',
      formType: 'chatbot_form',
      funnel_step: 2,
      trip_days: requestParams.requested_trip.trip_days,
      start_date: requestParams.requested_trip.start_date,
    };

    if (isEnd) {
      // final submit request
      const redirectUrl = response.data && response.data.redirect_url;
      this.props.loadUserDetails();
      console.debug('response', response);
      this.props.aliasPayload({
        user_id: response.data.user_id
      });
      this.props.identifyPayload({
        user_id: response.data.user_id
      });
      setCookie('u_id', response.data.user_id);

      if (window.location.pathname === '/wvchatbot') {
        if (response.data.new_user_info) {
          chatExitIntent({ response, headers });
        } else {
          chatExitIntent(EXIT_INTENT);
        }
      } else {
        window.location.href = redirectUrl;
      }

    }
  };

  closePopup = (flag) => {
    if (flag) {
      this.setState({ showChatPopup: false, chatInputFocus: true });
    } else {
      this.setState({ showChatPopup: false });
    }
  };
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

  triggerChatBotScripts = () => {
    window.openMobChat = (segment) => {
      const floatButton = document.querySelector('.rsc-float-button');
      if (floatButton) {
        floatButton.dispatchEvent(new CustomEvent("click",{
          "detail": { 'sendSegment': segment },
          "bubbles":true,
          "cancelable":false,
        }));
      }
      document.querySelector('#chat_bot_container_parent').style.display = 'block';
    };
  };

  selectOption = (option, e) => {
    const queNAns = {
      tripType: option
    };

    this.setState({ selectedAnswer: queNAns, showChatPopup: false }, (state) => {
      openChatHandler(e);
    });
  };
  onScroll = (percentage, inView) => {
    const { showChatPopup, selectedAnswer, chatPopupCount } = this.state;
    const percentValue = Math.ceil(percentage * 100) || Math.floor(percentage * 100);
    if ((percentValue === 30 || percentValue > 30) && !chatPopupCount) {
      if (!showChatPopup && this.isEmpty(selectedAnswer)){
        this.setState({ showChatPopup: true, chatPopupCount: 1 });
        document.dispatchEvent(new CustomEvent('module_viewed', { 'detail': { 'cta': 'scroll' } }));
      }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      userState: '',
      isChatBotEnabled: false,
      uniqueIdForChatBot: '',
      ChatBot: null,
      selectedAnswer: {},
      showChatPopup: false,
      chatPopupCount: 0,
      chatInputFocus: false,
    };
    this.onchatBotSubmit = this.onchatBotSubmit.bind(this);
    this.createNewUniqueId = this.createNewUniqueId.bind(this);
    this.triggerChatBotScripts = this.triggerChatBotScripts.bind(this);
  }

  isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };

  componentDidMount() {
    if (!this.props.isAuthLoaded && !this.props.isAuthLoading) {
      this.props.loadUserDetails();
    }
    const { location: { pathname }, route } = this.props;
    const branch = matchRoutes(route.routes, pathname);
    const defferChatbot = branch.length && branch[0].route && branch[0].route.defferChatbot;

    const chatbotAsync = () => import(/* webpackChunkName: 'chatbot' */ 'trips3m-chatbot')
      .then(bot => this.setState({ isChatBotEnabled: true, ChatBot: bot.default }));

    // Loading chatbot as soon as component gets mounted.
    if(!defferChatbot){
      chatbotAsync();
    }

    if (!this.state.uniqueIdForChatBot) {
      this.setState({
        uniqueIdForChatBot: this.createNewUniqueId()
      });
    }

    if (typeof document !== 'undefined') {
      gaUtmIife(document);
    }
    genericDataPushBridgeInit({ eventType: 'customize', userId: getCookie('_upanid') });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isAuthLoaded && !this.props.isAuthLoaded && !this.props.isAuthLoading) {
      prevProps.loadUserDetails();
    }
  }

  render() {
    const { isChatBotEnabled, ChatBot, chatPopupCount, showChatPopup, chatInputFocus } = this.state;
    const  { isAuthenticated, isAuthLoaded } = this.props;
    if (isChatBotEnabled && ChatBot) {
      this.triggerChatBotScripts();
    }

    if (!showChatPopup && !chatPopupCount) {
      setTimeout(() => {
        const { chatPopupCount, showChatPopup } = this.state;
        if (!showChatPopup && !chatPopupCount) {
          this.setState({ showChatPopup: true, chatPopupCount: 1 });
          if (typeof document !== 'undefined') {
            document.dispatchEvent(new CustomEvent('module_viewed', { 'detail': { 'cta': 'timeout' } }));
          }
        }
      }, 8000);
    }

    const { location: { pathname }, route, loadUserDetails, history } = this.props;
    const branch = matchRoutes(route.routes, pathname);

    const renderRoute = () => {
      if (branch.length) {
        const { route: { component: Component, ...rest }, match } = branch[0];
        return (
          <DecisionRoute
            {...rest}
            {...match}
            component={Component}
            isAuthenticated={isAuthenticated}
            isAuthLoaded={isAuthLoaded}
            loadUserDetails={loadUserDetails}
            history={history}
          />
        );
      }
      return (<Redirect to='/page-not-found' />);
    };

    const showChatBot = branch.length && branch[0].route && branch[0].route.chatbot;
    return (
      <div data-react-toolbox="app">
        <ScrollPercentage onChange={this.onScroll}>
          {
            !this.props.asyncConnectLoaded ?
              <div>
                {isBookingPage() ? null : <HeaderCommon />}
                <Loader />
              </div> :
              <div>
                {
                    renderRoute()
                }
                {isChatBotEnabled && ChatBot ?
                  <div id="chat_bot_container_parent">
                    <ChatBot
                      isPublicProduct
                      redisKey={this.state.uniqueIdForChatBot}
                      onSubmit={[this.onchatBotSubmit]}
                      queNAns={this.state.selectedAnswer}
                      chatInputFocus={this.state.chatInputFocus}
                    />
                  </div> : null}
                {
                  showChatPopup && showChatBot &&
                  <ChatbotPopup selectOption={this.selectOption} closePopup={this.closePopup} />
                }
              </div>
          }
        </ScrollPercentage>
        <GenericComponent />
      </div>
    );
  }
}

export default asyncConnect(
  [
    {
      promise: props => {
        const state = props.store.getState();
        if (!state.topNavigation.ui.loaded && !state.topNavigation.ui.loading) {
          return props.store.dispatch(handleRequestTopNavigationItems());
        }
        return Promise.resolve();
      }
    },
    {
      promise: props => {
        const { location: { pathname }, route } = props;
        const branch = matchRoutes(route.routes, pathname);
        const { route: matchedRoute } = branch && branch[0] || {};
        if ( matchedRoute && matchedRoute.decisionFunction ){
          return props.store.dispatch(loadUserDetails());
        } else {
          return Promise.resolve();
        }
      }
    }
  ],
  state => ({
    asyncConnectLoaded: state.reduxAsyncConnect.loaded,
    isAuthenticated: isAuthenticated(state),
    isAuthLoaded: isAuthLoaded(state),
    isAuthLoading: isAuthLoading(state),
    user: _get(state, 'authorization.auth.loadData.data', {})
  }),
  {
    loadUserDetails,
    identifyPayload,
    aliasPayload,
    handleRequestTopNavigationItems
  }
)(App);

