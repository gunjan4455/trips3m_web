require("source-map-support").install();
exports.ids = [1];
exports.modules = {

/***/ "./app-v2/modules/chat/Chat.js":
/*!*************************************!*\
  !*** ./app-v2/modules/chat/Chat.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _rtms = __webpack_require__(/*! helpers/rtms */ "./app/helpers/rtms.js");

var _ChatInput = _interopRequireDefault(__webpack_require__(/*! ./components/ChatInput */ "./app-v2/modules/chat/components/ChatInput.js"));

var _ChatMessages = _interopRequireDefault(__webpack_require__(/*! ./components/ChatMessages */ "./app-v2/modules/chat/components/ChatMessages.js"));

var _ChatHeader = _interopRequireDefault(__webpack_require__(/*! ./components/ChatHeader */ "./app-v2/modules/chat/components/ChatHeader.js"));

var _pdmHelpers = __webpack_require__(/*! helpers/pdmHelpers */ "./app/helpers/pdmHelpers.js");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/chat/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Chat = (_temp = _class = class Chat extends _react.default.Component {
  constructor(props) {
    super(props);

    this.disposeExistingRtms = () => {
      // close web socket connection and remove all listners
      if (this.rtms_) {
        this.rtms_.close();
      }
    };

    this.state = {
      history: [],
      agentOnline: false,
      lastSubscribedChannel: '',
      subscribed: false
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.initializeChat = this.initializeChat.bind(this);
  }

  componentDidMount() {
    const {
      agentId,
      tripId,
      quoteId,
      location
    } = this.props;

    if (agentId) {
      this.props.fetchChatKeys(agentId, quoteId);
      this.props.fetchHistory(tripId, quoteId, (0, _DateTime.timeBefore)(1, 'day'));
      this.initializeChat(this.props);
    }

    const pdmCategory = location.query.pdmcategory;

    if (pdmCategory === _pdmHelpers.PDM_CATEGORY_HOTEL || pdmCategory === _pdmHelpers.PDM_CATEGORY_INCLUSION || pdmCategory === _pdmHelpers.PDM_CATEGORY_ITINERARY) {
      this.props.setPdmCategory(pdmCategory);
      this.props.showHidePdmView(true);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      agentId,
      tripId,
      quoteId
    } = this.props;

    if (prevProps.quoteId !== quoteId) {
      this.props.fetchChatKeys(agentId, quoteId);
      this.props.fetchHistory(tripId, quoteId, (0, _DateTime.timeBefore)(1, 'day'));
      this.initializeChat(this.props);
    }
  }

  async initializeChatUsingRtms(props) {
    if (_appConfig.default.useRtms) {
      this.disposeExistingRtms();
    }

    const userId = props.userDetails.id;
    const channelId = props.agentId;

    if (channelId && userId) {
      this.rtms_ = await (0, _rtms.getRtmsConnection)({
        userId,
        channel: _rtms.RtmsChannels.CHAT
      });
      this.currentSubscription_ = this.rtms_.subscribeToChannel({
        channelId
      });
      this.currentSubscription_.on(_rtms.MessageType.MESSAGE, function (message) {
        if (message.commentable_id === props.quoteId) {
          props.addMessage(message, props.quoteId);
        }
      }.bind(this));
      this.currentSubscription_.on(_rtms.MessageType.MY_MESSAGE, function (message) {
        if (message.commentable_id === props.quoteId) {
          props.addMessage(message, props.quoteId);
        }
      }.bind(this));

      if (this.props.explainTheQuote) {
        this.sendMessage('I need an explanation for this quote. Please call me back');
      }
    }
  }

  clearMessages() {
    this.props.clearMessages();
  }

  initializeChat(props) {
    this.clearMessages();
    this.initializeChatUsingRtms(props);
  }

  sendMessage(message) {
    // get this information from API
    const {
      tripId,
      quoteId
    } = this.props;
    const {
      id,
      name,
      email,
      avatar
    } = this.props.userDetails;
    const messageObj = {
      title: '#chat',
      comment: message,
      commentBy: 'TRAVELLER',
      commentable_id: this.props.quoteId,
      commentable_type: 'Quote',
      role: 'traveller',
      userId: id,
      user_id: id,
      userName: name,
      email,
      userPic: avatar,
      createdAt: (0, _DateTime.currentDate)(),
      created_at: new Date().toISOString().split('.')[0] + "+00:00",
      uId: (0, _utils.generateUniqueId)(id, (0, _DateTime.toTimeStamp)(new Date()), message),
      notification_sub_category: 'comment_added',
      trip_id: parseInt(this.props.tripId.toString().replace(/[^0-9\.]/g, ''), 10),
      isPending: 0
    };
    this.currentSubscription_.sendMessage({
      content: messageObj
    });
    this.props.createComment(tripId, quoteId, messageObj); // segment- this.props.quoteCommentAdded(this.props.quoteId);
  }

  componentWillUnMount() {
    this.disposeExistingRtms();
  }

  render() {
    const {
      tripId,
      quoteId,
      currentQuote,
      agentId,
      agentName,
      pdmsInformation,
      showHidePdmView,
      chatKeys,
      messages,
      remainingMessages,
      loadMoreMessages,
      userDetails
    } = this.props;
    const segmentData = {
      trip_id: tripId,
      quote_id: quoteId,
      destination_id: currentQuote && currentQuote.destinationsList.length ? currentQuote.destinationsList[0].id : 0,
      status: currentQuote && currentQuote.tripStatus || '',
      quote_status: currentQuote && currentQuote.status || ''
    };
    return _react.default.createElement("div", {
      className: `chatShadow flex flexDColumn hfull wfull sbcw fixed pbc1 t0 l0 wfull hfull`
    }, _react.default.createElement("div", {
      className: "relative chatBox__header"
    }, _react.default.createElement(_ChatHeader.default, {
      agentName: agentName,
      chatKeys: chatKeys,
      pdmsInformation: pdmsInformation,
      requestCallbackSegmentData: segmentData,
      agentId: agentId,
      userDetails: userDetails
    })), _react.default.createElement(_G.GChatMessagesDiv, {
      className: "absolute wfull chatBox__messages flexFull"
    }, _react.default.createElement(_ChatMessages.default, {
      messages: messages,
      userId: userDetails.id,
      remainingMessages: remainingMessages,
      fetchHistory: loadMoreMessages,
      pdmsInformation: pdmsInformation,
      tripId: tripId,
      quoteId: quoteId
    })), _react.default.createElement("div", {
      id: "chatBoxSend",
      className: "chatBox__send fixed b0 l0 r0 wfull"
    }, _react.default.createElement(_ChatInput.default, {
      sendMessage: this.sendMessage,
      pdmsInformation: pdmsInformation,
      showHidePdmView: showHidePdmView
    })));
  }

}, _class.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  chatKeys: _propTypes.default.object.isRequired,
  messages: _propTypes.default.array.isRequired,
  remainingMessages: _propTypes.default.number,
  userDetails: _propTypes.default.object.isRequired,
  pdmsInformation: _propTypes.default.object.isRequired,
  agentName: _propTypes.default.string.isRequired,
  agentId: _propTypes.default.number.isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  fetchChatKeys: _propTypes.default.func.isRequired,
  fetchHistory: _propTypes.default.func.isRequired,
  addMessage: _propTypes.default.func.isRequired,
  createComment: _propTypes.default.func.isRequired,
  clearMessages: _propTypes.default.func.isRequired,
  loadMoreMessages: _propTypes.default.func.isRequired,
  setPdmCategory: _propTypes.default.func.isRequired,
  showHidePdmView: _propTypes.default.func.isRequired,
  explainTheQuote: _propTypes.default.bool
}, _class.defaultProps = {
  remainingMessages: 0,
  explainTheQuote: false
}, _temp);
var _default = Chat;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/chat/G.js":
/*!**********************************!*\
  !*** ./app-v2/modules/chat/G.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GChatTextP = exports.GOutgoingMsg = exports.GIncomingMsg = exports.GNoChat = exports.GLoadMoreBtn = exports.GPdmContainer = exports.GKeyBoard = exports.GButton = exports.GSpan = exports.GChatMessagesDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GChatMessagesDiv = _glamorous.default.div({
  minHeight: 'calc(100% - 108px)',
  top: '58px'
});

exports.GChatMessagesDiv = GChatMessagesDiv;

const GSpan = _glamorous.default.span({
  background: '#3e3e3e',
  padding: '12px',
  fontSize: '14px',
  lineHeight: '14px',
  color: '#fff',
  position: 'absolute',
  right: '0',
  width: '140px',
  top: 'calc(100% + 4px)',
  display: 'none',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  '&:before': {
    position: 'absolute',
    right: '20px',
    top: '-4px',
    width: '0',
    height: '0',
    content: '\' \'',
    borderBottom: '4px solid #3e3e3e',
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent'
  }
});

exports.GSpan = GSpan;

const GButton = _glamorous.default.button({
  opacity: '0.8',
  height: '22px',
  '&:hover': {
    opacity: '1'
  },
  '&:hover .onHoverInfo': {
    display: 'block'
  }
});

exports.GButton = GButton;

const GKeyBoard = _glamorous.default.button({
  border: '0 none',
  width: '36px',
  height: '30px',
  zIndex: '2',
  '& > span': {
    width: '36px',
    height: '30px',
    '& svg': {
      width: '26px !important',
      height: '13px !important'
    }
  }
});

exports.GKeyBoard = GKeyBoard;

const GPdmContainer = _glamorous.default.div({
  position: 'absolute',
  bottom: '100%',
  left: '0',
  right: '0'
});

exports.GPdmContainer = GPdmContainer;

const GLoadMoreBtn = _glamorous.default.button({
  width: '80px',
  margin: '0 auto',
  display: 'inherit'
});

exports.GLoadMoreBtn = GLoadMoreBtn;

const GNoChat = _glamorous.default.div({
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '100%',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& p': {
    margin: '0',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#999999'
  }
});

exports.GNoChat = GNoChat;

const GIncomingMsg = _glamorous.default.div({
  ' .agent-user-name': {
    left: 0
  }
});

exports.GIncomingMsg = GIncomingMsg;

const GOutgoingMsg = _glamorous.default.div({
  ' .agent-user-name': {
    right: 0
  },
  '& .user-message': {
    order: '-1'
  }
});

exports.GOutgoingMsg = GOutgoingMsg;

const GChatTextP = _glamorous.default.p({
  wordBreak: 'break-all'
});

exports.GChatTextP = GChatTextP;

/***/ }),

/***/ "./app-v2/modules/chat/components/ChatHeader.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/chat/components/ChatHeader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _AgentOnlineIndicator = _interopRequireDefault(__webpack_require__(/*! modules/shared/agentProfile/AgentOnlineIndicator */ "./app-v2/modules/shared/agentProfile/AgentOnlineIndicator.js"));

var _rtms = __webpack_require__(/*! helpers/rtms */ "./app/helpers/rtms.js");

var _index = _interopRequireDefault(__webpack_require__(/*! modules/requestCallback/index */ "./app-v2/modules/requestCallback/index.js"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GChatHeadDiv = _glamorous.default.div({
  maxWidth: 'calc(100% - 42px)'
});

let ChatHeader = (_temp = _class = class ChatHeader extends _react.default.Component {
  render() {
    const {
      agentId,
      agentName,
      chatKeys,
      userDetails
    } = this.props;
    return _react.default.createElement("div", {
      className: `row row- chat-header relative at_chatheader flex`
    }, _react.default.createElement(GChatHeadDiv, {
      className: "flexFull p0 mr8"
    }, _react.default.createElement("p", {
      className: "m0 pb4 sfcw f16 ellipsis"
    }, agentName), _react.default.createElement("div", {
      className: "clearfix relative"
    }, _react.default.createElement(_AgentOnlineIndicator.default, {
      showPresenceMessage: true,
      userId: agentId,
      pubnubConfig: (0, _rtms.formatChatKeys)(chatKeys),
      userDetails: userDetails,
      isChatIndicator: true
    }))), _react.default.createElement(_index.default, {
      isIcononly: true,
      isWhiteIcon: true
    }));
  }

}, _class.propTypes = {
  chatKeys: _propTypes.default.object.isRequired,
  agentId: _propTypes.default.number.isRequired,
  agentName: _propTypes.default.string.isRequired,
  userDetails: _propTypes.default.object.isRequired
}, _temp);
var _default = ChatHeader;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/chat/components/ChatInput.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/chat/components/ChatInput.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _pdm = _interopRequireDefault(__webpack_require__(/*! modules/pdm */ "./app-v2/modules/pdm/index.js"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/chat/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ChatInput = (_temp = _class = class ChatInput extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.messageOnChange = this.messageOnChange.bind(this);
    this.setPdmMessage = this.setPdmMessage.bind(this);
    this.getVariationSendButton = this.getVariationSendButton.bind(this);
    this.focusOnInput = this.focusOnInput.bind(this);
    this.state = {
      messageText: ''
    };
  }

  componentDidMount() {
    window.addEventListener('QDP_CHAT_EX_MSG', event => {
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
      this.setState({
        messageText: e.target.value
      });
    }
  }

  getVariationSendButton() {
    return _react.default.createElement("button", {
      className: "attachment-button at_chatsendbtn absolute b10 r15",
      onClick: this.handleClick
    }, "Send");
  }

  render() {
    const {
      pdmsInformation
    } = this.props;
    return _react.default.createElement("div", {
      className: "row row- relative type-chat-con mb0 at_chatmessage"
    }, pdmsInformation.showPdmView ? _react.default.createElement(_G.GPdmContainer, null, _react.default.createElement(_pdm.default, {
      setMessage: this.setPdmMessage
    })) : null, _react.default.createElement("button", {
      className: "hide absolute attachment-button"
    }, _react.default.createElement(_Icon.AttachmentIcon, null)), _react.default.createElement("div", {
      className: "clearfix"
    }, pdmsInformation.pdms ? _react.default.createElement(_G.GKeyBoard, {
      className: "l0 absolute-center-v",
      onClick: () => this.showHidePdmView()
    }, _react.default.createElement("span", {
      className: "pl4 pl4 pt8 pb8 block"
    }, pdmsInformation.showPdmView ? _react.default.createElement(_Icon.KeyboardActive, null) : _react.default.createElement(_Icon.KeyboardInactive, null))) : null, _react.default.createElement("textarea", {
      onKeyPress: this.handleKeyUp,
      onKeyUp: this.handleKeyUp,
      className: "at_chatinput",
      ref: input => {
        this.chatInput = input;
      },
      onChange: this.messageOnChange,
      value: this.state.messageText,
      placeholder: "Type a message\u2026"
    }), this.getVariationSendButton()));
  }

}, _class.propTypes = {
  pdmsInformation: _propTypes.default.object.isRequired,
  sendMessage: _propTypes.default.func.isRequired,
  showHidePdmView: _propTypes.default.func.isRequired
}, _temp);
var _default = ChatInput;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/chat/components/ChatMessages.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/chat/components/ChatMessages.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/chat/G.js");

__webpack_require__(/*! theme/Common/ChatBox.scss */ "./app/theme/Common/ChatBox.scss");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _IncomingMessage = _interopRequireDefault(__webpack_require__(/*! ./IncomingMessage */ "./app-v2/modules/chat/components/IncomingMessage.js"));

var _OutgoingMessage = _interopRequireDefault(__webpack_require__(/*! ./OutgoingMessage */ "./app-v2/modules/chat/components/OutgoingMessage.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ChatMessages = (_temp = _class = class ChatMessages extends _react.default.Component {
  constructor(props) {
    super(props);

    this.getUsernameFromMessage = message => {
      if (message.userName) {
        return message.userName;
      }

      if (message.email) {
        const emailName = message.email.split("@")[0];
        return emailName.replace(/[0-9]*/, '').replace(/[_.]/, ' ').replace(/[^ 0-9A-Za-z]/, '');
      }

      return '';
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidUpdate() {
    const chatMessageContainer = document.getElementsByClassName('chatmessage_Container');
    const chatContainer = chatMessageContainer && chatMessageContainer[0].lastChild;

    if (chatContainer !== null) {
      chatContainer.scrollIntoView({
        block: 'end'
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.messages !== nextProps.messages;
  }

  loadMore() {
    this.props.fetchHistory(this.props.tripId, this.props.quoteId);
  }

  render() {
    const {
      userId,
      messages,
      remainingMessages
    } = this.props;
    const boxCss = 'chat-box-data';
    return _react.default.createElement("div", {
      className: `chatmessage_Container row row- ${boxCss} p8 at_chatmessage`
    }, remainingMessages > 0 ? _react.default.createElement(_G.GLoadMoreBtn, {
      className: "pbc1 sfcw p4 f12 radius20 text-center mb8 at_loadmore",
      onClick: this.loadMore
    }, "Load More") : null, !messages.length ? _react.default.createElement(_G.GNoChat, {
      className: "absolute"
    }, _react.default.createElement("p", null, "Chat with our agent to ", _react.default.createElement("span", {
      className: "block"
    }, "customize your quote"))) : null, messages.map((message, messageIndex) => parseInt(message.userId, 10) !== parseInt(userId, 10) ? _react.default.createElement(_IncomingMessage.default, {
      key: messageIndex || message.uId,
      messageContent: message.comment,
      userImg: message.userImg,
      userName: message.userName,
      deliveryTime: (0, _DateTime.toTimeStamp)(message.createdAt),
      attachments: message.attachmentList,
      messageId: message.id || message.uId
    }) : _react.default.createElement(_OutgoingMessage.default, {
      key: messageIndex || message.uId,
      messageContent: message.comment,
      userImg: message.userImg,
      userName: this.getUsernameFromMessage(message),
      deliveryTime: (0, _DateTime.toTimeStamp)(message.createdAt),
      attachments: message.attachmentList,
      messageId: message.id || message.uId
    })));
  }

}, _class.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  messages: _propTypes.default.array,
  userId: _propTypes.default.number.isRequired,
  fetchHistory: _propTypes.default.func.isRequired,
  remainingMessages: _propTypes.default.number.isRequired,
  pdmsInformation: _propTypes.default.object.isRequired
}, _class.defaultProps = {
  messages: []
}, _temp);
var _default = ChatMessages;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/chat/components/IncomingMessage.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/chat/components/IncomingMessage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _Avatar = _interopRequireDefault(__webpack_require__(/*! modules/shared/Avatar */ "./app-v2/modules/shared/Avatar.js"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/chat/G.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const htmlToReactParser = new _htmlToReact.Parser();

const IncomingMessage = ({
  messageId,
  messageContent,
  userName,
  userImg,
  deliveryTime,
  attachments
}) => _react.default.createElement(_G.GIncomingMsg, {
  className: "row row- user-agent-message-container mb15 flex"
}, _react.default.createElement(_Avatar.default, {
  imagePath: userImg,
  name: userName || ''
}), _react.default.createElement("div", {
  className: "agent-message flexFull mr15"
}, _react.default.createElement(_G.GChatTextP, {
  className: "m0 f12 pfc3"
}, htmlToReactParser.parse(messageContent)), attachments.map((attachment, index) => _react.default.createElement("a", {
  href: attachment.file,
  download: true,
  key: `attachment${messageId}${index}`
}, attachment.fileName)), _react.default.createElement("p", {
  className: "m0 pfc4 f10 pt8"
}, (0, _DateTime.format)(parseInt(deliveryTime, 10), 'DD MMM YYYY @ HH:mm a'))));

IncomingMessage.propTypes = {
  messageId: _propTypes.default.number.isRequired,
  messageContent: _propTypes.default.string.isRequired,
  userName: _propTypes.default.string.isRequired,
  userImg: _propTypes.default.string,
  deliveryTime: _propTypes.default.number.isRequired,
  attachments: _propTypes.default.array
};
IncomingMessage.defaultProps = {
  userImg: null,
  attachments: []
};
var _default = IncomingMessage;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/chat/components/OutgoingMessage.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/chat/components/OutgoingMessage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/chat/G.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _Avatar = _interopRequireDefault(__webpack_require__(/*! modules/shared/Avatar */ "./app-v2/modules/shared/Avatar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const htmlToReactParser = new _htmlToReact.Parser();

const OutgoingMessage = ({
  messageId,
  messageContent,
  userName,
  userImg,
  deliveryTime,
  attachments
}) => _react.default.createElement(_G.GOutgoingMsg, {
  className: "row row- user-agent-message-container mb15 flex"
}, _react.default.createElement(_Avatar.default, {
  imagePath: userImg,
  name: userName || ''
}), _react.default.createElement("div", {
  className: "user-message at_usermessage flexFull mr15"
}, _react.default.createElement("p", {
  className: "m0 f12 pfc3 text-preWrap"
}, htmlToReactParser.parse(messageContent)), attachments.map((attachment, index) => _react.default.createElement("a", {
  href: attachment.file,
  download: true,
  key: `attachment${messageId}${index}`
}, attachment.fileName)), _react.default.createElement("p", {
  className: "f10 m0 pfc4 pt8"
}, (0, _DateTime.format)(parseInt(deliveryTime, 10), 'DD MMM YYYY @ HH:mm a'))));

OutgoingMessage.propTypes = {
  messageId: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  messageContent: _propTypes.default.string.isRequired,
  userName: _propTypes.default.string.isRequired,
  userImg: _propTypes.default.string,
  deliveryTime: _propTypes.default.number.isRequired,
  attachments: _propTypes.default.array
};
OutgoingMessage.defaultProps = {
  userImg: null,
  attachments: []
};
var _default = OutgoingMessage;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/chat/index.js":
/*!**************************************!*\
  !*** ./app-v2/modules/chat/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _quoteList = __webpack_require__(/*! modules/quote/actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _constants = __webpack_require__(/*! modules/quote/actions/constants */ "./app-v2/modules/quote/actions/constants.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _action = __webpack_require__(/*! modules/discountEngine/action */ "./app-v2/modules/discountEngine/action.js");

var _action2 = __webpack_require__(/*! modules/pdm/action */ "./app-v2/modules/pdm/action.js");

var _auth = __webpack_require__(/*! app/reducers/auth */ "./app/reducers/auth.js");

var _quoteList2 = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/chat/reducer.js");

var _action3 = __webpack_require__(/*! ./action */ "./app-v2/modules/chat/action.js");

var _Chat = _interopRequireDefault(__webpack_require__(/*! ./Chat */ "./app-v2/modules/chat/Chat.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const currentQuote = (0, _quoteList2.getCurrentQuote)(state);
  const agent = (0, _quoteList2.getAgentDetails)(currentQuote);
  return {
    chatKeys: (0, _reducer.getChatkeys)(state),
    messages: (0, _reducer.getMessages)(state),
    remainingMessages: (0, _reducer.getRemainingMessages)(state),
    userDetails: (0, _auth.user)(state),
    pdmsInformation: state.quote.pdms,
    tripId: state.quote.actions.requestedTripId,
    quoteId: state.quote.actions.currentQuoteId,
    agentId: agent.id,
    agentName: agent.name,
    currentQuote: currentQuote
  };
}, {
  fetchChatKeys: _action3.fetchChatKeys,
  addMessage: _action3.addMessage,
  clearMessages: _action3.clearMessages,
  createComment: _action3.createComment,
  fetchHistory: _action3.fetchHistory,
  loadMoreMessages: _action3.loadMoreMessages,
  setPdmCategory: _action2.setPdmCategory,
  showHidePdmView: _action2.showHidePdmView
})(_Chat.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/pdm/G.js":
/*!*********************************!*\
  !*** ./app-v2/modules/pdm/G.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdmContainer = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PdmContainer = _glamorous.default.div({
  width: '100%',
  height: 'auto',
  background: '#ffffff',
  boxShadow: '0 -2px 20px 0 rgba(0, 0, 0, 0.2)',
  padding: '8px 8px',
  '& ul': {
    padding: '0',
    margin: '0',
    '& li': {
      listStyle: 'none',
      display: 'block',
      marginBottom: '8px',
      '&:last-child': {
        marginBottom: '0'
      },
      '& a': {
        borderRadius: '30px',
        border: 'solid 1px #009688',
        display: 'block',
        color: '#009688',
        padding: '4px',
        textAlign: 'center',
        fontWeight: '400',
        textDecoration: 'none',
        '&:hover': {
          color: '#009688'
        }
      }
    }
  }
});

exports.PdmContainer = PdmContainer;

/***/ }),

/***/ "./app-v2/modules/pdm/Pdm.js":
/*!***********************************!*\
  !*** ./app-v2/modules/pdm/Pdm.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _pdmHelpers = __webpack_require__(/*! helpers/pdmHelpers */ "./app/helpers/pdmHelpers.js");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/pdm/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Pdm = (_temp = _class = class Pdm extends _react.default.Component {
  constructor(props) {
    super(props);
    this.onPdmSelection = this.onPdmSelection.bind(this);
  }

  onPdmSelection(pdm) {
    this.props.setMessage(pdm.message_text);
  }

  render() {
    const {
      pdmsData,
      selectedPdm
    } = this.props;
    const pdmList = (0, _pdmHelpers.getSelectedPdms)(pdmsData, selectedPdm);

    if (!pdmList || !pdmList.length) {
      return null;
    }

    return _react.default.createElement(_G.PdmContainer, {
      className: "clearfix relative"
    }, _react.default.createElement("ul", null, pdmList.map((item, index) => _react.default.createElement("li", {
      key: index
    }, _react.default.createElement(_reactRouter.Link, {
      className: `at_${index}`,
      onClick: () => this.onPdmSelection(item)
    }, item.pdm_text)))));
  }

}, _class.propTypes = {
  setMessage: _propTypes.default.func.isRequired,
  pdmsData: _propTypes.default.object.isRequired,
  selectedPdm: _propTypes.default.string.isRequired
}, _class.defaultProps = {
  setMessage: () => {}
}, _temp);
var _default = Pdm;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/pdm/index.js":
/*!*************************************!*\
  !*** ./app-v2/modules/pdm/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Pdm = _interopRequireDefault(__webpack_require__(/*! ./Pdm */ "./app-v2/modules/pdm/Pdm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  pdmsData: state.quote.pdms.pdms,
  selectedPdm: state.quote.pdms.selectedPdmCategory
}))(_Pdm.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/requestCallback/G.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/requestCallback/G.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSpan = exports.ReqCallBackPopUp = exports.TextArea = exports.RadioInputText = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioInput = _glamorous.default.input({
  '& + label': {
    color: '#3e3e3e',
    ':before': {
      borderColor: '#3e3e3e'
    }
  },
  '&:checked + label + .input-dropdown-box': {
    display: 'block'
  },
  '&:checked + label + .showText + textarea': {
    display: 'block'
  }
});

const RadioInputText = (0, _glamorous.default)(RadioInput)({
  '&:checked + label + textarea': {
    display: 'block'
  }
});
exports.RadioInputText = RadioInputText;

const TextArea = _glamorous.default.textarea({
  display: 'none',
  marginLeft: '30px',
  resize: 'none',
  width: 'calc(100% - 30px)'
});

exports.TextArea = TextArea;

const ReqCallBackPopUp = _glamorous.default.div({
  width: '100%',
  ' .request-call-icon': {
    width: '120px',
    height: '88.64px',
    position: 'relative',
    '& svg': {
      width: '120px',
      height: '88.64px'
    }
  }
});

exports.ReqCallBackPopUp = ReqCallBackPopUp;

const IconSpan = _glamorous.default.span({
  width: '62.68px',
  height: '41.96px',
  position: 'relative',
  '& svg': {
    width: '62px',
    height: '41.96px'
  }
});

exports.IconSpan = IconSpan;

/***/ }),

/***/ "./app-v2/modules/requestCallback/RequestCallback.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/requestCallback/RequestCallback.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _RequestCallback = _interopRequireDefault(__webpack_require__(/*! ./components/RequestCallback */ "./app-v2/modules/requestCallback/components/RequestCallback.js"));

var _rosterTypes = __webpack_require__(/*! constants/rosterTypes */ "./app/constants/rosterTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let RequestCallback = class RequestCallback extends _react.default.Component {
  constructor(props) {
    super(props);

    this.openPopup = () => {
      this.setState({
        openModal: true,
        closeModal: false
      });
    };

    this.closePopup = () => {
      this.setState({
        openModal: false,
        closeModal: true
      });
      this.props.showRoster({
        type: _rosterTypes.INFO_ROSTER,
        message: this.state.message
      });
    };

    this.handleRequestCallback = () => {
      this.props.requestCallbackConfirm({
        tripId: this.props.tripId,
        quoteId: this.props.quoteId
      });
      this.openPopup();
    };

    this.state = {
      openModal: false,
      closeModal: true,
      message: ''
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Request callback called twice but we have to show toaster message only when user closed the popup
    if (!this.props.successMessage && nextProps.successMessage) {
      if (this.state.openModal) {
        this.setState(_objectSpread({}, this.state, {
          message: nextProps.successMessage
        }));
      } else {
        this.props.showRoster({
          type: _rosterTypes.INFO_ROSTER,
          message: nextProps.successMessage
        });
      }
    }
  }

  render() {
    const {
      isIcononly,
      isWhiteIcon
    } = this.props;
    return _react.default.createElement("div", {
      className: "iblock flex alignCenter pfc3 fw7 at_requestCallback_CTA"
    }, _react.default.createElement("span", {
      className: "iblock",
      onClick: () => this.handleRequestCallback()
    }, _react.default.createElement("span", {
      className: "input-24 iblock relative mr8"
    }, isWhiteIcon ? _react.default.createElement(_Icon.HeadphoneIconWhite, null) : _react.default.createElement(_Icon.HeadphoneIcon, null)), isIcononly ? null : _react.default.createElement("span", {
      className: "iblock",
      style: {
        verticalAlign: '6px'
      }
    }, "Request Call")), _react.default.createElement(_GenericModal.default, {
      trigger: null,
      fullView: true,
      isOpen: this.state.openModal,
      hasCustomClose: true,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.closePopup
    }, _react.default.createElement(_RequestCallback.default, {
      tripId: this.props.tripId,
      quoteId: this.props.quoteId,
      requestCallbackReasons: this.props.requestCallbackReasons,
      requestCallbackConfirm: this.props.requestCallbackConfirm,
      closeModal: this.closePopup
    })));
  }

};
RequestCallback.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  requestCallbackReasons: _propTypes.default.object,
  requestCallbackConfirm: _propTypes.default.func.isRequired,
  successMessage: _propTypes.default.string,
  trackSegment: _propTypes.default.func,
  showRoster: _propTypes.default.func,
  isIcononly: _propTypes.default.bool,
  isWhiteIcon: _propTypes.default.bool
};
RequestCallback.defaultProps = {
  requestCallBack: {},
  successMessage: '',
  trackSegment: () => {},
  showRoster: () => {},
  isIcononly: false,
  isWhiteIcon: false
};
var _default = RequestCallback;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/requestCallback/components/RequestCallback.js":
/*!**********************************************************************!*\
  !*** ./app-v2/modules/requestCallback/components/RequestCallback.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/requestCallback/G.js");

var _ModalHeaderCustom = _interopRequireDefault(__webpack_require__(/*! ../../shared/headers/ModalHeaderCustom */ "./app-v2/modules/shared/headers/ModalHeaderCustom.js"));

var _stringHelpers = __webpack_require__(/*! helpers/stringHelpers */ "./app/helpers/stringHelpers.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let RequestCallbackPopup = (_temp = _class = class RequestCallbackPopup extends _react.Component {
  constructor(props) {
    super(props);

    this.reasonChanged = event => {
      this.setState({
        reason: event.currentTarget.value
      });
    };

    this.reasonTextUpdated = event => {
      this.setState({
        reasonText: event.target.value
      });
    };

    this.handleSubmit = () => {
      // collect the reasons and dispatch
      this.props.requestCallbackConfirm({
        tripId: this.props.tripId,
        quoteId: this.props.quoteId,
        reason: (0, _stringHelpers.snakeCase)(this.state.reason),
        reasonText: this.state.reasonText
      }); // close the popup

      this.props.closeModal();
    };

    this.state = {
      reason: '',
      reasonText: ''
    };
  }

  render() {
    const {
      requestCallbackReasons
    } = this.props;
    const options = Object.keys(requestCallbackReasons).map(rejectionId => {
      const id = `reject-quote-${rejectionId}`;
      return _react.default.createElement("div", {
        key: id
      }, _react.default.createElement(_G.RadioInputText, {
        type: "radio",
        className: "checkbox-round",
        name: "reject-quote-rad",
        id: id,
        value: rejectionId,
        checked: this.state.reason === rejectionId,
        onChange: this.reasonChanged
      }), _react.default.createElement("label", {
        className: "iblock wfull f14 pfc3 mb8 mt8 at_requestCB-reasons",
        htmlFor: id
      }, requestCallbackReasons[rejectionId]), requestCallbackReasons[rejectionId] === 'Others' || requestCallbackReasons[rejectionId] === 'Other' ? _react.default.createElement(_G.TextArea, {
        placeholder: "Enter reason for Quote Rejection",
        className: "textarea",
        value: this.state.reasonText,
        onChange: this.reasonTextUpdated
      }) : null);
    });
    return _react.default.createElement(_G.ReqCallBackPopUp, {
      className: "flex hfull flexDColumn overflowa"
    }, _react.default.createElement(_ModalHeaderCustom.default, {
      handleCrossClick: this.props.closeModal,
      heading: "Request a Call Back"
    }), _react.default.createElement("div", {
      className: "col-xs-12 sbcw z2 p0 flex flexDColumn pb64 flexFull"
    }, _react.default.createElement("div", {
      className: "p24 pb15"
    }, _react.default.createElement("p", {
      className: "f14p pfc3 mb0 fw7 at_requestCB-text"
    }, "Our Travel Agent will get in touch with you.")), _react.default.createElement("div", {
      className: "flexFull pt0 p24 at_requestCB-reason"
    }, options), _react.default.createElement("div", {
      className: "fixed b0 l0 r0 bs6"
    }, _react.default.createElement("button", {
      className: "btn-filled-pri-large wfull radius2 pl8 pr8 at_requestCB-confirm",
      onClick: this.handleSubmit
    }, "Submit"))));
  }

}, _class.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  requestCallbackReasons: _propTypes.default.object.isRequired,
  requestCallbackConfirm: _propTypes.default.func.isRequired,
  closeModal: _propTypes.default.func.isRequired
}, _temp);
var _default = RequestCallbackPopup;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/requestCallback/index.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/requestCallback/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _RequestCallback = _interopRequireDefault(__webpack_require__(/*! ./RequestCallback */ "./app-v2/modules/requestCallback/RequestCallback.js"));

var _constants = __webpack_require__(/*! modules/quote/reducers/constants */ "./app-v2/modules/quote/reducers/constants.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/reducers/quoteActivities */ "./app-v2/modules/quote/reducers/quoteActivities.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/requestCallback/reducer.js");

var _action = __webpack_require__(/*! modules/requestCallback/action */ "./app-v2/modules/requestCallback/action.js");

var _action2 = __webpack_require__(/*! modules/roster/action */ "./app-v2/modules/roster/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  requestCallbackReasons: (0, _constants.getRequestCallbackReasons)(state),
  tripId: (0, _quoteActivities.getTripId)(state),
  quoteId: (0, _quoteActivities.getCurrentQuoteId)(state),
  successMessage: (0, _reducer.getRequestCallbackSuccess)(state)
}), {
  requestCallbackConfirm: _action.requestCallback,
  showRoster: _action2.showRoster
})(_RequestCallback.default));

exports.default = _default;

/***/ }),

/***/ "./app/helpers/pdmHelpers.js":
/*!***********************************!*\
  !*** ./app/helpers/pdmHelpers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDM_CATEGORY_EXPLAINQUOTE = exports.PDM_CATEGORY_ITINERARY = exports.PDM_CATEGORY_INCLUSION = exports.PDM_CATEGORY_HOTEL = exports.getDestinations = exports.getSelectedPdms = void 0;
const PDM_CATEGORY_HOTEL = 'Hotel';
exports.PDM_CATEGORY_HOTEL = PDM_CATEGORY_HOTEL;
const PDM_CATEGORY_ITINERARY = 'Itinerary';
exports.PDM_CATEGORY_ITINERARY = PDM_CATEGORY_ITINERARY;
const PDM_CATEGORY_INCLUSION = 'Inclusion';
exports.PDM_CATEGORY_INCLUSION = PDM_CATEGORY_INCLUSION;
const PDM_CATEGORY_EXPLAINQUOTE = 'ExplainQuote';
exports.PDM_CATEGORY_EXPLAINQUOTE = PDM_CATEGORY_EXPLAINQUOTE;

const getSelectedPdms = (pdms, category) => {
  if (pdms) {
    switch (category) {
      case PDM_CATEGORY_ITINERARY:
        return pdms.Itinerary;

      case PDM_CATEGORY_HOTEL:
        return pdms.Hotel;

      case PDM_CATEGORY_INCLUSION:
        return pdms.Inclusion;

      case PDM_CATEGORY_EXPLAINQUOTE:
        return pdms.ExplainQuote;

      default:
        return null;
    }
  }

  return null;
};

exports.getSelectedPdms = getSelectedPdms;

const getDestinations = inputDestinations => {
  const destination = {};
  const destinationNames = [];
  const destinationIds = [];

  if (inputDestinations === null) {
    destination['ids'] = 0;
    destination['names'] = '';
    return destination; //return empty string
  }

  inputDestinations.map(destination => {
    destinationNames.push(destination.name);
    destinationIds.push(destination.id);
  });
  return {
    'ids': destinationIds[0],
    'names': destinationNames.join(',')
  };
};

exports.getDestinations = getDestinations;

/***/ }),

/***/ "./app/helpers/stringHelpers.js":
/*!**************************************!*\
  !*** ./app/helpers/stringHelpers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snakeCase = void 0;

var _snakeCase = _interopRequireDefault(__webpack_require__(/*! snake-case/snake-case */ "./node_modules/snake-case/snake-case.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const snakeCase = content => {
  return (0, _snakeCase.default)(content);
};

exports.snakeCase = snakeCase;

/***/ }),

/***/ "./app/theme/Common/ChatBox.scss":
/*!***************************************!*\
  !*** ./app/theme/Common/ChatBox.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"chat-header": "_K3iJ2",
	"chatShadow": "_3Qq_a",
	"prev-chat-header": "_3arCX",
	"agent-status": "_3aSQc",
	"offline-now": "_19FRs",
	"online-now": "_3W9Ja",
	"chat-box-data": "_2EQw6",
	"prev-chat-box-data": "_3PNOr",
	"prev-type-chat-con": "_34HBv",
	"type-chat-con": "_2y5Sj",
	"agent-message": "_8d-Zk",
	"agent-message-prev": "_3RAWG",
	"user-message": "_2TWQw",
	"agent-user-img": "_2SeaN",
	"agent-user-name": "_3Zzhk",
	"user-agent-message-container": "_13KtO",
	"attachment-button": "_3C8Q8",
	"prev-attachment-button": "_bdwyn"
};

/***/ }),

/***/ "./node_modules/snake-case/snake-case.js":
/*!***********************************************!*\
  !*** ./node_modules/snake-case/snake-case.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(/*! no-case */ "no-case")

/**
 * Snake case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '_')
}


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaGF0L0NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2hhdC9HLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2NoYXQvY29tcG9uZW50cy9DaGF0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2NoYXQvY29tcG9uZW50cy9DaGF0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2hhdC9jb21wb25lbnRzL0NoYXRNZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaGF0L2NvbXBvbmVudHMvSW5jb21pbmdNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2NoYXQvY29tcG9uZW50cy9PdXRnb2luZ01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2hhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wZG0vRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9wZG0vUGRtLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3BkbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yZXF1ZXN0Q2FsbGJhY2svRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yZXF1ZXN0Q2FsbGJhY2svUmVxdWVzdENhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3JlcXVlc3RDYWxsYmFjay9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yZXF1ZXN0Q2FsbGJhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hlbHBlcnMvcGRtSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaGVscGVycy9zdHJpbmdIZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2FwcC90aGVtZS9Db21tb24vQ2hhdEJveC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFrZS1jYXNlL3NuYWtlLWNhc2UuanMiXSwibmFtZXMiOlsiQ2hhdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRpc3Bvc2VFeGlzdGluZ1J0bXMiLCJydG1zXyIsImNsb3NlIiwic3RhdGUiLCJoaXN0b3J5IiwiYWdlbnRPbmxpbmUiLCJsYXN0U3Vic2NyaWJlZENoYW5uZWwiLCJzdWJzY3JpYmVkIiwic2VuZE1lc3NhZ2UiLCJiaW5kIiwiaW5pdGlhbGl6ZUNoYXQiLCJjb21wb25lbnREaWRNb3VudCIsImFnZW50SWQiLCJ0cmlwSWQiLCJxdW90ZUlkIiwibG9jYXRpb24iLCJmZXRjaENoYXRLZXlzIiwiZmV0Y2hIaXN0b3J5IiwicGRtQ2F0ZWdvcnkiLCJxdWVyeSIsInBkbWNhdGVnb3J5IiwiUERNX0NBVEVHT1JZX0hPVEVMIiwiUERNX0NBVEVHT1JZX0lOQ0xVU0lPTiIsIlBETV9DQVRFR09SWV9JVElORVJBUlkiLCJzZXRQZG1DYXRlZ29yeSIsInNob3dIaWRlUGRtVmlldyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImluaXRpYWxpemVDaGF0VXNpbmdSdG1zIiwiY29uZmlnIiwidXNlUnRtcyIsInVzZXJJZCIsInVzZXJEZXRhaWxzIiwiaWQiLCJjaGFubmVsSWQiLCJjaGFubmVsIiwiUnRtc0NoYW5uZWxzIiwiQ0hBVCIsImN1cnJlbnRTdWJzY3JpcHRpb25fIiwic3Vic2NyaWJlVG9DaGFubmVsIiwib24iLCJNZXNzYWdlVHlwZSIsIk1FU1NBR0UiLCJtZXNzYWdlIiwiY29tbWVudGFibGVfaWQiLCJhZGRNZXNzYWdlIiwiTVlfTUVTU0FHRSIsImV4cGxhaW5UaGVRdW90ZSIsImNsZWFyTWVzc2FnZXMiLCJuYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJtZXNzYWdlT2JqIiwidGl0bGUiLCJjb21tZW50IiwiY29tbWVudEJ5IiwiY29tbWVudGFibGVfdHlwZSIsInJvbGUiLCJ1c2VyX2lkIiwidXNlck5hbWUiLCJ1c2VyUGljIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwidUlkIiwibm90aWZpY2F0aW9uX3N1Yl9jYXRlZ29yeSIsInRyaXBfaWQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImlzUGVuZGluZyIsImNvbnRlbnQiLCJjcmVhdGVDb21tZW50IiwiY29tcG9uZW50V2lsbFVuTW91bnQiLCJyZW5kZXIiLCJjdXJyZW50UXVvdGUiLCJhZ2VudE5hbWUiLCJwZG1zSW5mb3JtYXRpb24iLCJjaGF0S2V5cyIsIm1lc3NhZ2VzIiwicmVtYWluaW5nTWVzc2FnZXMiLCJsb2FkTW9yZU1lc3NhZ2VzIiwic2VnbWVudERhdGEiLCJxdW90ZV9pZCIsImRlc3RpbmF0aW9uX2lkIiwiZGVzdGluYXRpb25zTGlzdCIsImxlbmd0aCIsInN0YXR1cyIsInRyaXBTdGF0dXMiLCJxdW90ZV9zdGF0dXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYXJyYXkiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIkdDaGF0TWVzc2FnZXNEaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJtaW5IZWlnaHQiLCJ0b3AiLCJHU3BhbiIsInNwYW4iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwicG9zaXRpb24iLCJyaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImJveFNoYWRvdyIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsIkdCdXR0b24iLCJidXR0b24iLCJvcGFjaXR5IiwiR0tleUJvYXJkIiwiYm9yZGVyIiwiekluZGV4IiwiR1BkbUNvbnRhaW5lciIsImJvdHRvbSIsImxlZnQiLCJHTG9hZE1vcmVCdG4iLCJtYXJnaW4iLCJHTm9DaGF0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiR0luY29taW5nTXNnIiwiR091dGdvaW5nTXNnIiwib3JkZXIiLCJHQ2hhdFRleHRQIiwicCIsIndvcmRCcmVhayIsIkdDaGF0SGVhZERpdiIsIm1heFdpZHRoIiwiQ2hhdEhlYWRlciIsIkNoYXRJbnB1dCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5VXAiLCJtZXNzYWdlT25DaGFuZ2UiLCJzZXRQZG1NZXNzYWdlIiwiZ2V0VmFyaWF0aW9uU2VuZEJ1dHRvbiIsImZvY3VzT25JbnB1dCIsIm1lc3NhZ2VUZXh0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZGV0YWlsIiwiY2hhdElucHV0IiwiZm9jdXMiLCJzaG93UGRtVmlldyIsInBkbU1lc3NhZ2UiLCJlIiwibmF0aXZlRXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBkbXMiLCJpbnB1dCIsIkNoYXRNZXNzYWdlcyIsImdldFVzZXJuYW1lRnJvbU1lc3NhZ2UiLCJlbWFpbE5hbWUiLCJsb2FkTW9yZSIsImNoYXRNZXNzYWdlQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hhdENvbnRhaW5lciIsImxhc3RDaGlsZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJib3hDc3MiLCJtYXAiLCJtZXNzYWdlSW5kZXgiLCJ1c2VySW1nIiwiYXR0YWNobWVudExpc3QiLCJodG1sVG9SZWFjdFBhcnNlciIsIlBhcnNlciIsIkluY29taW5nTWVzc2FnZSIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VDb250ZW50IiwiZGVsaXZlcnlUaW1lIiwiYXR0YWNobWVudHMiLCJwYXJzZSIsImF0dGFjaG1lbnQiLCJpbmRleCIsImZpbGUiLCJmaWxlTmFtZSIsIk91dGdvaW5nTWVzc2FnZSIsIm9uZU9mVHlwZSIsImNvbnRhaW5lciIsImFnZW50IiwicXVvdGUiLCJhY3Rpb25zIiwicmVxdWVzdGVkVHJpcElkIiwiY3VycmVudFF1b3RlSWQiLCJ3ZWJ2aWV3QWN0aW9ucyIsImZldGNoUXVvdGVzRGF0YSIsImxvYWRDb25zdGFudHMiLCJmZXRjaFByZURlZmluZWRNZXNzYWdlcyIsImZldGNoRGlzY291bnRPZmZlcnMiLCJzd2l0Y2hRdW90ZSIsInVwZGF0ZVJlcXVlc3RlZFRyaXBJZCIsIlBkbUNvbnRhaW5lciIsImxpc3RTdHlsZSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsIlBkbSIsIm9uUGRtU2VsZWN0aW9uIiwicGRtIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VfdGV4dCIsInBkbXNEYXRhIiwic2VsZWN0ZWRQZG0iLCJwZG1MaXN0IiwiaXRlbSIsInBkbV90ZXh0Iiwic2VsZWN0ZWRQZG1DYXRlZ29yeSIsIlJhZGlvSW5wdXQiLCJib3JkZXJDb2xvciIsIlJhZGlvSW5wdXRUZXh0IiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIm1hcmdpbkxlZnQiLCJyZXNpemUiLCJSZXFDYWxsQmFja1BvcFVwIiwiSWNvblNwYW4iLCJSZXF1ZXN0Q2FsbGJhY2siLCJvcGVuUG9wdXAiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiY2xvc2VQb3B1cCIsInNob3dSb3N0ZXIiLCJ0eXBlIiwiSU5GT19ST1NURVIiLCJoYW5kbGVSZXF1ZXN0Q2FsbGJhY2siLCJyZXF1ZXN0Q2FsbGJhY2tDb25maXJtIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzdWNjZXNzTWVzc2FnZSIsImlzSWNvbm9ubHkiLCJpc1doaXRlSWNvbiIsInZlcnRpY2FsQWxpZ24iLCJyZXF1ZXN0Q2FsbGJhY2tSZWFzb25zIiwidHJhY2tTZWdtZW50IiwicmVxdWVzdENhbGxCYWNrIiwiUmVxdWVzdENhbGxiYWNrUG9wdXAiLCJyZWFzb25DaGFuZ2VkIiwicmVhc29uIiwiY3VycmVudFRhcmdldCIsInJlYXNvblRleHRVcGRhdGVkIiwicmVhc29uVGV4dCIsImhhbmRsZVN1Ym1pdCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwicmVqZWN0aW9uSWQiLCJQRE1fQ0FURUdPUllfRVhQTEFJTlFVT1RFIiwiZ2V0U2VsZWN0ZWRQZG1zIiwiY2F0ZWdvcnkiLCJJdGluZXJhcnkiLCJIb3RlbCIsIkluY2x1c2lvbiIsIkV4cGxhaW5RdW90ZSIsImdldERlc3RpbmF0aW9ucyIsImlucHV0RGVzdGluYXRpb25zIiwiZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbk5hbWVzIiwiZGVzdGluYXRpb25JZHMiLCJwdXNoIiwiam9pbiIsInNuYWtlQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7SUFFTUEsSSxxQkFBTixNQUFNQSxJQUFOLFNBQW1CQyxlQUFNQyxTQUF6QixDQUFtQztBQThCakNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsU0FpSG5CQyxtQkFqSG1CLEdBaUhHLE1BQU07QUFDMUI7QUFDQSxVQUFJLEtBQUtDLEtBQVQsRUFBZ0I7QUFDZCxhQUFLQSxLQUFMLENBQVdDLEtBQVg7QUFDRDtBQUNGLEtBdEhrQjs7QUFFakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsRUFERTtBQUVYQyxtQkFBYSxLQUZGO0FBR1hDLDZCQUF1QixFQUhaO0FBSVhDLGtCQUFZO0FBSkQsS0FBYjtBQU9BLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JELElB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QUFLQSxTQUFPO0FBQ0wsV0FBTzRQLGVBQWUsQ0FBZixDQURGO0FBRUwsYUFBU0QsaUJBQWlCRyxJQUFqQixDQUFzQixHQUF0QjtBQUZKLEdBQVA7QUFJRCxDQXBCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOzs7O0FBRU8sTUFBTUMsWUFBYXZOLE9BQUQsSUFBYTtBQUNwQyxTQUFPLHdCQUFhQSxPQUFiLENBQVA7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ25CQSxhQUFhLG1CQUFPLENBQUMsd0JBQVM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRyYXZlbGxlci1jaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnYXBwQ29uZmlnJztcbmltcG9ydCB7IHRpbWVCZWZvcmUsIGN1cnJlbnREYXRlLCB0b1RpbWVTdGFtcCB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IHsgZ2VuZXJhdGVVbmlxdWVJZCB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0UnRtc0Nvbm5lY3Rpb24sIE1lc3NhZ2VUeXBlLCBSdG1zQ2hhbm5lbHMgfSBmcm9tICdoZWxwZXJzL3J0bXMnO1xuaW1wb3J0IENoYXRJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvQ2hhdElucHV0JztcbmltcG9ydCBDaGF0TWVzc2FnZXMgZnJvbSAnLi9jb21wb25lbnRzL0NoYXRNZXNzYWdlcyc7XG5pbXBvcnQgQ2hhdEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvQ2hhdEhlYWRlcic7XG5pbXBvcnQgeyBQRE1fQ0FURUdPUllfSE9URUwsIFBETV9DQVRFR09SWV9JVElORVJBUlksIFBETV9DQVRFR09SWV9JTkNMVVNJT04gfSBmcm9tIFwiaGVscGVycy9wZG1IZWxwZXJzXCI7XG5cbmltcG9ydCB7IEdDaGF0TWVzc2FnZXNEaXYgfSBmcm9tICcuL0cnO1xuXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBxdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY2hhdEtleXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBtZXNzYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgcmVtYWluaW5nTWVzc2FnZXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdXNlckRldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBwZG1zSW5mb3JtYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBhZ2VudE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhZ2VudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY3VycmVudFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIGZldGNoQ2hhdEtleXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZmV0Y2hIaXN0b3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFkZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3JlYXRlQ29tbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjbGVhck1lc3NhZ2VzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvYWRNb3JlTWVzc2FnZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0UGRtQ2F0ZWdvcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2hvd0hpZGVQZG1WaWV3OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGV4cGxhaW5UaGVRdW90ZTogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJlbWFpbmluZ01lc3NhZ2VzOiAwLFxuICAgIGV4cGxhaW5UaGVRdW90ZTogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBhZ2VudE9ubGluZTogZmFsc2UsXG4gICAgICBsYXN0U3Vic2NyaWJlZENoYW5uZWw6ICcnLFxuICAgICAgc3Vic2NyaWJlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5zZW5kTWVzc2FnZSA9IHRoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluaXRpYWxpemVDaGF0ID0gdGhpcy5pbml0aWFsaXplQ2hhdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBhZ2VudElkLCB0cmlwSWQsIHF1b3RlSWQsIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChhZ2VudElkKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQ2hhdEtleXMoYWdlbnRJZCwgcXVvdGVJZCk7XG4gICAgICB0aGlzLnByb3BzLmZldGNoSGlzdG9yeSh0cmlwSWQsIHF1b3RlSWQsIHRpbWVCZWZvcmUoMSwgJ2RheScpKTtcblxuICAgICAgdGhpcy5pbml0aWFsaXplQ2hhdCh0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBjb25zdCBwZG1DYXRlZ29yeSA9IGxvY2F0aW9uLnF1ZXJ5LnBkbWNhdGVnb3J5O1xuXG4gICAgaWYgKHBkbUNhdGVnb3J5ID09PSBQRE1fQ0FURUdPUllfSE9URUwgfHwgcGRtQ2F0ZWdvcnkgPT09IFBETV9DQVRFR09SWV9JTkNMVVNJT05cbiAgICAgIHx8IHBkbUNhdGVnb3J5ID09PSBQRE1fQ0FURUdPUllfSVRJTkVSQVJZKSB7XG4gICAgICB0aGlzLnByb3BzLnNldFBkbUNhdGVnb3J5KHBkbUNhdGVnb3J5KTtcbiAgICAgIHRoaXMucHJvcHMuc2hvd0hpZGVQZG1WaWV3KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IGFnZW50SWQsIHRyaXBJZCwgcXVvdGVJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlByb3BzLnF1b3RlSWQgIT09IHF1b3RlSWQpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hDaGF0S2V5cyhhZ2VudElkLCBxdW90ZUlkKTtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hIaXN0b3J5KHRyaXBJZCwgcXVvdGVJZCwgdGltZUJlZm9yZSgxLCAnZGF5JykpO1xuXG4gICAgICB0aGlzLmluaXRpYWxpemVDaGF0KHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVDaGF0VXNpbmdSdG1zKHByb3BzKSB7XG5cbiAgICBpZiAoY29uZmlnLnVzZVJ0bXMpIHtcbiAgICAgIHRoaXMuZGlzcG9zZUV4aXN0aW5nUnRtcygpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJJZCA9IHByb3BzLnVzZXJEZXRhaWxzLmlkO1xuICAgIGNvbnN0IGNoYW5uZWxJZCA9IHByb3BzLmFnZW50SWQ7XG5cbiAgICBpZiAoY2hhbm5lbElkICYmIHVzZXJJZCkge1xuICAgICAgdGhpcy5ydG1zXyA9IGF3YWl0IGdldFJ0bXNDb25uZWN0aW9uKHsgdXNlcklkLCBjaGFubmVsOiBSdG1zQ2hhbm5lbHMuQ0hBVCB9KTtcbiAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbl8gPSB0aGlzLnJ0bXNfLnN1YnNjcmliZVRvQ2hhbm5lbCh7IGNoYW5uZWxJZCB9KTtcbiAgICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbl8ub24oTWVzc2FnZVR5cGUuTUVTU0FHRSwgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuY29tbWVudGFibGVfaWQgPT09IHByb3BzLnF1b3RlSWQpIHtcbiAgICAgICAgICBwcm9wcy5hZGRNZXNzYWdlKG1lc3NhZ2UsIHByb3BzLnF1b3RlSWQpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb25fLm9uKE1lc3NhZ2VUeXBlLk1ZX01FU1NBR0UsIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGlmIChtZXNzYWdlLmNvbW1lbnRhYmxlX2lkID09PSBwcm9wcy5xdW90ZUlkKSB7XG4gICAgICAgICAgcHJvcHMuYWRkTWVzc2FnZShtZXNzYWdlLCBwcm9wcy5xdW90ZUlkKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIGlmKHRoaXMucHJvcHMuZXhwbGFpblRoZVF1b3RlKXtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSggJ0kgbmVlZCBhbiBleHBsYW5hdGlvbiBmb3IgdGhpcyBxdW90ZS4gUGxlYXNlIGNhbGwgbWUgYmFjaycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyTWVzc2FnZXMoKSB7XG4gICAgdGhpcy5wcm9wcy5jbGVhck1lc3NhZ2VzKCk7XG4gIH1cblxuICBpbml0aWFsaXplQ2hhdChwcm9wcykge1xuICAgIHRoaXMuY2xlYXJNZXNzYWdlcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNoYXRVc2luZ1J0bXMocHJvcHMpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIC8vIGdldCB0aGlzIGluZm9ybWF0aW9uIGZyb20gQVBJXG4gICAgY29uc3QgeyB0cmlwSWQsIHF1b3RlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIGF2YXRhciB9ID0gdGhpcy5wcm9wcy51c2VyRGV0YWlscztcbiAgICBjb25zdCBtZXNzYWdlT2JqID0ge1xuICAgICAgdGl0bGU6ICcjY2hhdCcsXG4gICAgICBjb21tZW50OiBtZXNzYWdlLFxuICAgICAgY29tbWVudEJ5OiAnVFJBVkVMTEVSJyxcbiAgICAgIGNvbW1lbnRhYmxlX2lkOiB0aGlzLnByb3BzLnF1b3RlSWQsXG4gICAgICBjb21tZW50YWJsZV90eXBlOiAnUXVvdGUnLFxuICAgICAgcm9sZTogJ3RyYXZlbGxlcicsXG4gICAgICB1c2VySWQ6IGlkLFxuICAgICAgdXNlcl9pZDogaWQsXG4gICAgICB1c2VyTmFtZTogbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgdXNlclBpYzogYXZhdGFyLFxuICAgICAgY3JlYXRlZEF0OiBjdXJyZW50RGF0ZSgpLFxuICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCcuJylbMF0gKyBcIiswMDowMFwiLFxuICAgICAgdUlkOiBnZW5lcmF0ZVVuaXF1ZUlkKGlkLCB0b1RpbWVTdGFtcChuZXcgRGF0ZSgpKSwgbWVzc2FnZSksXG4gICAgICBub3RpZmljYXRpb25fc3ViX2NhdGVnb3J5OiAnY29tbWVudF9hZGRlZCcsXG4gICAgICB0cmlwX2lkOiBwYXJzZUludCh0aGlzLnByb3BzLnRyaXBJZC50b1N0cmluZygpLnJlcGxhY2UoL1teMC05XFwuXS9nLCAnJyksIDEwKSxcbiAgICAgIGlzUGVuZGluZzogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uXy5zZW5kTWVzc2FnZSh7IGNvbnRlbnQ6IG1lc3NhZ2VPYmogfSk7XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVDb21tZW50KHRyaXBJZCwgcXVvdGVJZCwgbWVzc2FnZU9iaik7XG4gICAgLy8gc2VnbWVudC0gdGhpcy5wcm9wcy5xdW90ZUNvbW1lbnRBZGRlZCh0aGlzLnByb3BzLnF1b3RlSWQpO1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5Nb3VudCgpIHtcbiAgICB0aGlzLmRpc3Bvc2VFeGlzdGluZ1J0bXMoKTtcbiAgfVxuXG4gIGRpc3Bvc2VFeGlzdGluZ1J0bXMgPSAoKSA9PiB7XG4gICAgLy8gY2xvc2Ugd2ViIHNvY2tldCBjb25uZWN0aW9uIGFuZCByZW1vdmUgYWxsIGxpc3RuZXJzXG4gICAgaWYgKHRoaXMucnRtc18pIHtcbiAgICAgIHRoaXMucnRtc18uY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyaXBJZCwgcXVvdGVJZCwgY3VycmVudFF1b3RlLFxuICAgICAgYWdlbnRJZCwgYWdlbnROYW1lLCBwZG1zSW5mb3JtYXRpb24sIHNob3dIaWRlUGRtVmlldyxcbiAgICAgIGNoYXRLZXlzLCBtZXNzYWdlcywgcmVtYWluaW5nTWVzc2FnZXMsIGxvYWRNb3JlTWVzc2FnZXMsIHVzZXJEZXRhaWxzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBzZWdtZW50RGF0YSA9IHtcbiAgICAgIHRyaXBfaWQ6IHRyaXBJZCxcbiAgICAgIHF1b3RlX2lkOiBxdW90ZUlkLFxuICAgICAgZGVzdGluYXRpb25faWQ6IGN1cnJlbnRRdW90ZSAmJiBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdC5sZW5ndGggPyBjdXJyZW50UXVvdGUuZGVzdGluYXRpb25zTGlzdFswXS5pZCA6IDAsXG4gICAgICBzdGF0dXM6IGN1cnJlbnRRdW90ZSAmJiBjdXJyZW50UXVvdGUudHJpcFN0YXR1cyB8fCAnJyxcbiAgICAgIHF1b3RlX3N0YXR1czogY3VycmVudFF1b3RlICYmIGN1cnJlbnRRdW90ZS5zdGF0dXMgfHwgJydcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hhdFNoYWRvdyBmbGV4IGZsZXhEQ29sdW1uIGhmdWxsIHdmdWxsIHNiY3cgZml4ZWQgcGJjMSB0MCBsMCB3ZnVsbCBoZnVsbGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNoYXRCb3hfX2hlYWRlclwiPlxuICAgICAgICAgIDxDaGF0SGVhZGVyXG4gICAgICAgICAgICBhZ2VudE5hbWU9e2FnZW50TmFtZX1cbiAgICAgICAgICAgIGNoYXRLZXlzPXtjaGF0S2V5c31cbiAgICAgICAgICAgIHBkbXNJbmZvcm1hdGlvbj17cGRtc0luZm9ybWF0aW9ufVxuICAgICAgICAgICAgcmVxdWVzdENhbGxiYWNrU2VnbWVudERhdGE9e3NlZ21lbnREYXRhfVxuICAgICAgICAgICAgYWdlbnRJZD17YWdlbnRJZH1cbiAgICAgICAgICAgIHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdDaGF0TWVzc2FnZXNEaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgd2Z1bGwgY2hhdEJveF9fbWVzc2FnZXMgZmxleEZ1bGxcIj5cbiAgICAgICAgICA8Q2hhdE1lc3NhZ2VzXG4gICAgICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XG4gICAgICAgICAgICB1c2VySWQ9e3VzZXJEZXRhaWxzLmlkfVxuICAgICAgICAgICAgcmVtYWluaW5nTWVzc2FnZXM9e3JlbWFpbmluZ01lc3NhZ2VzfVxuICAgICAgICAgICAgZmV0Y2hIaXN0b3J5PXtsb2FkTW9yZU1lc3NhZ2VzfVxuICAgICAgICAgICAgcGRtc0luZm9ybWF0aW9uPXtwZG1zSW5mb3JtYXRpb259XG4gICAgICAgICAgICB0cmlwSWQ9e3RyaXBJZH1cbiAgICAgICAgICAgIHF1b3RlSWQ9e3F1b3RlSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HQ2hhdE1lc3NhZ2VzRGl2PlxuICAgICAgICA8ZGl2IGlkPVwiY2hhdEJveFNlbmRcIiBjbGFzc05hbWU9XCJjaGF0Qm94X19zZW5kIGZpeGVkIGIwIGwwIHIwIHdmdWxsXCI+XG4gICAgICAgICAgPENoYXRJbnB1dFxuICAgICAgICAgICAgc2VuZE1lc3NhZ2U9e3RoaXMuc2VuZE1lc3NhZ2V9XG4gICAgICAgICAgICBwZG1zSW5mb3JtYXRpb249e3BkbXNJbmZvcm1hdGlvbn1cbiAgICAgICAgICAgIHNob3dIaWRlUGRtVmlldz17c2hvd0hpZGVQZG1WaWV3fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuIiwiaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5leHBvcnQgY29uc3QgR0NoYXRNZXNzYWdlc0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtaW5IZWlnaHQ6ICdjYWxjKDEwMCUgLSAxMDhweCknLFxuICB0b3A6ICc1OHB4Jyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR1NwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIGJhY2tncm91bmQ6ICcjM2UzZTNlJyxcbiAgcGFkZGluZzogJzEycHgnLFxuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMTRweCcsXG4gIGNvbG9yOiAnI2ZmZicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzAnLFxuICB3aWR0aDogJzE0MHB4JyxcbiAgdG9wOiAnY2FsYygxMDAlICsgNHB4KScsXG4gIGRpc3BsYXk6ICdub25lJyxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgJyY6YmVmb3JlJzoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgdG9wOiAnLTRweCcsXG4gICAgd2lkdGg6ICcwJyxcbiAgICBoZWlnaHQ6ICcwJyxcbiAgICBjb250ZW50OiAnXFwnIFxcJycsXG4gICAgYm9yZGVyQm90dG9tOiAnNHB4IHNvbGlkICMzZTNlM2UnLFxuICAgIGJvcmRlckxlZnQ6ICc0cHggc29saWQgdHJhbnNwYXJlbnQnLFxuICAgIGJvcmRlclJpZ2h0OiAnNHB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgR0J1dHRvbiA9IGdsYW1vcm91cy5idXR0b24oe1xuICBvcGFjaXR5OiAnMC44JyxcbiAgaGVpZ2h0OiAnMjJweCcsXG4gICcmOmhvdmVyJzoge1xuICAgIG9wYWNpdHk6ICcxJyxcbiAgfSxcbiAgJyY6aG92ZXIgLm9uSG92ZXJJbmZvJzoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgR0tleUJvYXJkID0gZ2xhbW9yb3VzLmJ1dHRvbih7XG4gIGJvcmRlcjogJzAgbm9uZScsXG4gIHdpZHRoOiAnMzZweCcsXG4gIGhlaWdodDogJzMwcHgnLFxuICB6SW5kZXg6ICcyJyxcbiAgJyYgPiBzcGFuJzoge1xuICAgIHdpZHRoOiAnMzZweCcsXG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgJyYgc3ZnJzoge1xuICAgICAgd2lkdGg6ICcyNnB4ICFpbXBvcnRhbnQnLFxuICAgICAgaGVpZ2h0OiAnMTNweCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdQZG1Db250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGJvdHRvbTogJzEwMCUnLFxuICBsZWZ0OiAnMCcsXG4gIHJpZ2h0OiAnMCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdMb2FkTW9yZUJ0biA9IGdsYW1vcm91cy5idXR0b24oe1xuICB3aWR0aDogJzgwcHgnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBkaXNwbGF5OiAnaW5oZXJpdCdcbn0pO1xuXG5leHBvcnQgY29uc3QgR05vQ2hhdCA9IGdsYW1vcm91cy5kaXYoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBsZWZ0OiAnMCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgJyYgcCc6IHtcbiAgICBtYXJnaW46ICcwJyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICBjb2xvcjogJyM5OTk5OTknLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBHSW5jb21pbmdNc2cgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyAuYWdlbnQtdXNlci1uYW1lJzoge1xuICAgIGxlZnQ6IDBcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBHT3V0Z29pbmdNc2cgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyAuYWdlbnQtdXNlci1uYW1lJzoge1xuICAgIHJpZ2h0OiAwXG4gIH0sXG4gICcmIC51c2VyLW1lc3NhZ2UnOiB7XG4gICAgb3JkZXI6ICctMSdcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBHQ2hhdFRleHRQID0gZ2xhbW9yb3VzLnAoe1xuICB3b3JkQnJlYWs6ICdicmVhay1hbGwnXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQWdlbnRPbmxpbmVJbmRpY2F0b3IgZnJvbSAnbW9kdWxlcy9zaGFyZWQvYWdlbnRQcm9maWxlL0FnZW50T25saW5lSW5kaWNhdG9yJztcbmltcG9ydCB7IGZvcm1hdENoYXRLZXlzIH0gZnJvbSAnaGVscGVycy9ydG1zJztcbmltcG9ydCBSZXF1ZXN0Q2FsbGJhY2sgZnJvbSAnbW9kdWxlcy9yZXF1ZXN0Q2FsbGJhY2svaW5kZXgnO1xuXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IEdDaGF0SGVhZERpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDQycHgpJyxcbn0pO1xuXG5jbGFzcyBDaGF0SGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGF0S2V5czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFnZW50SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBhZ2VudE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB1c2VyRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFnZW50SWQsIGFnZW50TmFtZSwgY2hhdEtleXMsIHVzZXJEZXRhaWxzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0gY2hhdC1oZWFkZXIgcmVsYXRpdmUgYXRfY2hhdGhlYWRlciBmbGV4YH0+XG4gICAgICAgIDxHQ2hhdEhlYWREaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcDAgbXI4XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgcGI0IHNmY3cgZjE2IGVsbGlwc2lzXCI+e2FnZW50TmFtZX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPEFnZW50T25saW5lSW5kaWNhdG9yXG4gICAgICAgICAgICAgIHNob3dQcmVzZW5jZU1lc3NhZ2U9e3RydWV9XG4gICAgICAgICAgICAgIHVzZXJJZD17YWdlbnRJZH1cbiAgICAgICAgICAgICAgcHVibnViQ29uZmlnPXtmb3JtYXRDaGF0S2V5cyhjaGF0S2V5cyl9XG4gICAgICAgICAgICAgIHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cbiAgICAgICAgICAgICAgaXNDaGF0SW5kaWNhdG9yPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HQ2hhdEhlYWREaXY+XG4gICAgICAgIDxSZXF1ZXN0Q2FsbGJhY2sgaXNJY29ub25seT17dHJ1ZX0gaXNXaGl0ZUljb249e3RydWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgQXR0YWNobWVudEljb24sIEtleWJvYXJkQWN0aXZlLCBLZXlib2FyZEluYWN0aXZlLCBTZW5kSWNvbiwgU2VuZEljb25HcmV5XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBQZG0gZnJvbSAnbW9kdWxlcy9wZG0nO1xuaW1wb3J0IHsgR0tleUJvYXJkLCBHUGRtQ29udGFpbmVyIH0gZnJvbSAnLi4vRyc7XG5cbmNsYXNzIENoYXRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcGRtc0luZm9ybWF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc2VuZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2hvd0hpZGVQZG1WaWV3OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleVVwID0gdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWVzc2FnZU9uQ2hhbmdlID0gdGhpcy5tZXNzYWdlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFBkbU1lc3NhZ2UgPSB0aGlzLnNldFBkbU1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFZhcmlhdGlvblNlbmRCdXR0b24gPSB0aGlzLmdldFZhcmlhdGlvblNlbmRCdXR0b24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvY3VzT25JbnB1dCA9IHRoaXMuZm9jdXNPbklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VUZXh0OiAnJyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ1FEUF9DSEFUX0VYX01TRycsIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2V2ZW50OiAnLCBldmVudCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZVRleHQ6IGV2ZW50LmRldGFpbC5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmRldGFpbC5mb2N1c09uSW5wdXQgJiYgdGhpcy5mb2N1c09uSW5wdXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzT25JbnB1dCgpIHtcbiAgICBpZiAodGhpcy5jaGF0SW5wdXQpIHtcbiAgICAgIHRoaXMuY2hhdElucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0hpZGVQZG1WaWV3KCkge1xuICAgIHRoaXMucHJvcHMuc2hvd0hpZGVQZG1WaWV3KCF0aGlzLnByb3BzLnBkbXNJbmZvcm1hdGlvbi5zaG93UGRtVmlldyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5zdGF0ZS5tZXNzYWdlVGV4dDtcblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICB0aGlzLnByb3BzLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVzc2FnZVRleHQ6ICcnXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICB9XG5cbiAgc2V0UGRtTWVzc2FnZShwZG1NZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuc3RhdGUubWVzc2FnZVRleHQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZXNzYWdlVGV4dDogcGRtTWVzc2FnZVxuICAgIH0pO1xuXG4gICAgdGhpcy5zaG93SGlkZVBkbVZpZXcoKTtcbiAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICB9XG5cbiAgaGFuZGxlS2V5VXAoZSkge1xuICAgIGlmIChlLm5hdGl2ZUV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmhhbmRsZUNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbWVzc2FnZU9uQ2hhbmdlKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICdcXG4nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZVRleHQ6IGUudGFyZ2V0LnZhbHVlLCB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRWYXJpYXRpb25TZW5kQnV0dG9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImF0dGFjaG1lbnQtYnV0dG9uIGF0X2NoYXRzZW5kYnRuIGFic29sdXRlIGIxMCByMTVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5TZW5kXG4gICAgICA8L2J1dHRvbj4pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGRtc0luZm9ybWF0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicm93IHJvdy0gcmVsYXRpdmUgdHlwZS1jaGF0LWNvbiBtYjAgYXRfY2hhdG1lc3NhZ2VcIj5cbiAgICAgICAge1xuICAgICAgICAgIHBkbXNJbmZvcm1hdGlvbi5zaG93UGRtVmlldyA/XG4gICAgICAgICAgICA8R1BkbUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPFBkbSBzZXRNZXNzYWdlPXt0aGlzLnNldFBkbU1lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8L0dQZG1Db250YWluZXI+IDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoaWRlIGFic29sdXRlIGF0dGFjaG1lbnQtYnV0dG9uXCI+PEF0dGFjaG1lbnRJY29uIC8+PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwZG1zSW5mb3JtYXRpb24ucGRtcyA/XG4gICAgICAgICAgICAgIDxHS2V5Qm9hcmQgY2xhc3NOYW1lPVwibDAgYWJzb2x1dGUtY2VudGVyLXZcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dIaWRlUGRtVmlldygpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbDQgcGw0IHB0OCBwYjggYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgIHtwZG1zSW5mb3JtYXRpb24uc2hvd1BkbVZpZXcgPyA8S2V5Ym9hcmRBY3RpdmUgLz4gOiA8S2V5Ym9hcmRJbmFjdGl2ZSAvPn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9HS2V5Qm9hcmQ+XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5VXB9XG4gICAgICAgICAgICBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXRfY2hhdGlucHV0XCJcbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhdElucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubWVzc2FnZU9uQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZVRleHR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdl4oCmXCIgLz5cbiAgICAgICAgICB7dGhpcy5nZXRWYXJpYXRpb25TZW5kQnV0dG9uKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0SW5wdXQ7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHTG9hZE1vcmVCdG4sIEdOb0NoYXQgfSBmcm9tICcuLi9HJztcbmltcG9ydCAndGhlbWUvQ29tbW9uL0NoYXRCb3guc2Nzcyc7XG5cbmltcG9ydCB7IHRvVGltZVN0YW1wIH0gZnJvbSAnaGVscGVycy9EYXRlVGltZSc7XG5pbXBvcnQgSW5jb21pbmdNZXNzYWdlIGZyb20gJy4vSW5jb21pbmdNZXNzYWdlJztcbmltcG9ydCBPdXRnb2luZ01lc3NhZ2UgZnJvbSAnLi9PdXRnb2luZ01lc3NhZ2UnO1xuXG5jbGFzcyBDaGF0TWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBtZXNzYWdlczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHVzZXJJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGZldGNoSGlzdG9yeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZW1haW5pbmdNZXNzYWdlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBkbXNJbmZvcm1hdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtZXNzYWdlczogW10sXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5sb2FkTW9yZSA9IHRoaXMubG9hZE1vcmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBjaGF0TWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoYXRtZXNzYWdlX0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNoYXRDb250YWluZXIgPSBjaGF0TWVzc2FnZUNvbnRhaW5lciAmJiBjaGF0TWVzc2FnZUNvbnRhaW5lclswXS5sYXN0Q2hpbGQ7XG4gICAgaWYgKGNoYXRDb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgIGNoYXRDb250YWluZXIuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcgfSk7XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiAodGhpcy5wcm9wcy5tZXNzYWdlcyAhPT0gbmV4dFByb3BzLm1lc3NhZ2VzKTtcbiAgfVxuXG4gIGxvYWRNb3JlKCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hIaXN0b3J5KHRoaXMucHJvcHMudHJpcElkLCB0aGlzLnByb3BzLnF1b3RlSWQpO1xuICB9XG5cbiAgZ2V0VXNlcm5hbWVGcm9tTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UudXNlck5hbWUpe1xuICAgICAgcmV0dXJuIG1lc3NhZ2UudXNlck5hbWU7XG4gICAgfVxuXG4gICAgaWYobWVzc2FnZS5lbWFpbCl7XG4gICAgICBjb25zdCBlbWFpbE5hbWUgPSBtZXNzYWdlLmVtYWlsLnNwbGl0KFwiQFwiKVswXTtcbiAgICAgIHJldHVybiBlbWFpbE5hbWUucmVwbGFjZSgvWzAtOV0qLywnJykucmVwbGFjZSgvW18uXS8sICcgJykucmVwbGFjZSgvW14gMC05QS1aYS16XS8sICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlcklkLCBtZXNzYWdlcywgcmVtYWluaW5nTWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYm94Q3NzID0gJ2NoYXQtYm94LWRhdGEnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hhdG1lc3NhZ2VfQ29udGFpbmVyIHJvdyByb3ctICR7Ym94Q3NzfSBwOCBhdF9jaGF0bWVzc2FnZWB9PlxuICAgICAgICB7XG4gICAgICAgICAgKHJlbWFpbmluZ01lc3NhZ2VzID4gMClcbiAgICAgICAgICAgID8gPEdMb2FkTW9yZUJ0blxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYmMxIHNmY3cgcDQgZjEyIHJhZGl1czIwIHRleHQtY2VudGVyIG1iOCBhdF9sb2FkbW9yZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICAgICAgPC9HTG9hZE1vcmVCdG4+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgKCFtZXNzYWdlcy5sZW5ndGgpID9cbiAgICAgICAgICAgIDxHTm9DaGF0IGNsYXNzTmFtZT1cImFic29sdXRlXCI+PHA+Q2hhdCB3aXRoIG91ciBhZ2VudCB0byA8c3BhbiBjbGFzc05hbWU9XCJibG9ja1wiPmN1c3RvbWl6ZSB5b3VyIHF1b3RlPC9zcGFuPlxuICAgICAgICAgICAgPC9wPjwvR05vQ2hhdD4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgbWVzc2FnZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAocGFyc2VJbnQobWVzc2FnZS51c2VySWQsIDEwKSAhPT0gcGFyc2VJbnQodXNlcklkLCAxMCkpXG4gICAgICAgICAgICAgID8gKDxJbmNvbWluZ01lc3NhZ2VcbiAgICAgICAgICAgICAgICBrZXk9e21lc3NhZ2VJbmRleCB8fCBtZXNzYWdlLnVJZH1cbiAgICAgICAgICAgICAgICBtZXNzYWdlQ29udGVudD17bWVzc2FnZS5jb21tZW50fVxuICAgICAgICAgICAgICAgIHVzZXJJbWc9e21lc3NhZ2UudXNlckltZ31cbiAgICAgICAgICAgICAgICB1c2VyTmFtZT17bWVzc2FnZS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICBkZWxpdmVyeVRpbWU9e3RvVGltZVN0YW1wKG1lc3NhZ2UuY3JlYXRlZEF0KX1cbiAgICAgICAgICAgICAgICBhdHRhY2htZW50cz17bWVzc2FnZS5hdHRhY2htZW50TGlzdH1cbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ9e21lc3NhZ2UuaWQgfHwgbWVzc2FnZS51SWR9XG4gICAgICAgICAgICAgIC8+KVxuICAgICAgICAgICAgICA6ICg8T3V0Z29pbmdNZXNzYWdlXG4gICAgICAgICAgICAgICAga2V5PXttZXNzYWdlSW5kZXggfHwgbWVzc2FnZS51SWR9XG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbnRlbnQ9e21lc3NhZ2UuY29tbWVudH1cbiAgICAgICAgICAgICAgICB1c2VySW1nPXttZXNzYWdlLnVzZXJJbWd9XG4gICAgICAgICAgICAgICAgdXNlck5hbWU9e3RoaXMuZ2V0VXNlcm5hbWVGcm9tTWVzc2FnZShtZXNzYWdlKX1cbiAgICAgICAgICAgICAgICBkZWxpdmVyeVRpbWU9e3RvVGltZVN0YW1wKG1lc3NhZ2UuY3JlYXRlZEF0KX1cbiAgICAgICAgICAgICAgICBhdHRhY2htZW50cz17bWVzc2FnZS5hdHRhY2htZW50TGlzdH1cbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ9e21lc3NhZ2UuaWQgfHwgbWVzc2FnZS51SWR9XG4gICAgICAgICAgICAgIC8+KVxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdE1lc3NhZ2VzO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgQXZhdGFyIGZyb20gJ21vZHVsZXMvc2hhcmVkL0F2YXRhcic7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcbmltcG9ydCB7IEdJbmNvbWluZ01zZywgR0NoYXRUZXh0UCB9IGZyb20gJy4uL0cnO1xuXG5jb25zdCBodG1sVG9SZWFjdFBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3QgSW5jb21pbmdNZXNzYWdlID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCwgbWVzc2FnZUNvbnRlbnQsIHVzZXJOYW1lLCB1c2VySW1nLCBkZWxpdmVyeVRpbWUsIGF0dGFjaG1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxuICA8R0luY29taW5nTXNnIGNsYXNzTmFtZT1cInJvdyByb3ctIHVzZXItYWdlbnQtbWVzc2FnZS1jb250YWluZXIgbWIxNSBmbGV4XCI+XG4gICAgPEF2YXRhciBpbWFnZVBhdGg9e3VzZXJJbWd9IG5hbWU9e3VzZXJOYW1lIHx8ICcnfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdhZ2VudC1tZXNzYWdlIGZsZXhGdWxsIG1yMTUnPlxuICAgICAgPEdDaGF0VGV4dFAgY2xhc3NOYW1lPVwibTAgZjEyIHBmYzNcIj57aHRtbFRvUmVhY3RQYXJzZXIucGFyc2UobWVzc2FnZUNvbnRlbnQpfTwvR0NoYXRUZXh0UD5cbiAgICAgIHtcbiAgICAgICAgYXR0YWNobWVudHMubWFwKChhdHRhY2htZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxhIGhyZWY9e2F0dGFjaG1lbnQuZmlsZX0gZG93bmxvYWQga2V5PXtgYXR0YWNobWVudCR7bWVzc2FnZUlkfSR7aW5kZXh9YH0+XG4gICAgICAgICAgICB7YXR0YWNobWVudC5maWxlTmFtZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8cCBjbGFzc05hbWU9XCJtMCBwZmM0IGYxMCBwdDhcIj57Zm9ybWF0KHBhcnNlSW50KGRlbGl2ZXJ5VGltZSwgMTApLCAnREQgTU1NIFlZWVkgQCBISDptbSBhJyl9PC9wPlxuICAgIDwvZGl2PlxuICA8L0dJbmNvbWluZ01zZz5cbik7XG5cbkluY29taW5nTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIG1lc3NhZ2VJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBtZXNzYWdlQ29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1c2VyTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1c2VySW1nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWxpdmVyeVRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgYXR0YWNobWVudHM6IFByb3BUeXBlcy5hcnJheVxufTtcblxuSW5jb21pbmdNZXNzYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlckltZzogbnVsbCxcbiAgYXR0YWNobWVudHM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5jb21pbmdNZXNzYWdlO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgeyBHT3V0Z29pbmdNc2cgfSBmcm9tICcuLi9HJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtb2R1bGVzL3NoYXJlZC9BdmF0YXInO1xuXG5jb25zdCBodG1sVG9SZWFjdFBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3QgT3V0Z29pbmdNZXNzYWdlID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXG4gIDxHT3V0Z29pbmdNc2cgY2xhc3NOYW1lPVwicm93IHJvdy0gdXNlci1hZ2VudC1tZXNzYWdlLWNvbnRhaW5lciBtYjE1IGZsZXhcIj5cbiAgICA8QXZhdGFyIGltYWdlUGF0aD17dXNlckltZ30gbmFtZT17dXNlck5hbWUgfHwgJyd9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW1lc3NhZ2UgYXRfdXNlcm1lc3NhZ2UgZmxleEZ1bGwgbXIxNVwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIHBmYzMgdGV4dC1wcmVXcmFwXCI+e2h0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKG1lc3NhZ2VDb250ZW50KX08L3A+XG4gICAgICB7XG4gICAgICAgIGF0dGFjaG1lbnRzLm1hcCgoYXR0YWNobWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YSBocmVmPXthdHRhY2htZW50LmZpbGV9IGRvd25sb2FkIGtleT17YGF0dGFjaG1lbnQke21lc3NhZ2VJZH0ke2luZGV4fWB9PlxuICAgICAgICAgICAge2F0dGFjaG1lbnQuZmlsZU5hbWV9XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjEwIG0wIHBmYzQgcHQ4XCI+e2Zvcm1hdChwYXJzZUludChkZWxpdmVyeVRpbWUsIDEwKSwgJ0REIE1NTSBZWVlZIEAgSEg6bW0gYScpfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9HT3V0Z29pbmdNc2c+XG4pO1xuXG5PdXRnb2luZ01lc3NhZ2UucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlSWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIG1lc3NhZ2VDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVzZXJJbWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlbGl2ZXJ5VGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBhdHRhY2htZW50czogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5PdXRnb2luZ01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICB1c2VySW1nOiBudWxsLFxuICBhdHRhY2htZW50czogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdXRnb2luZ01lc3NhZ2U7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGxvYWQgYXMgZmV0Y2hRdW90ZXNEYXRhIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlTGlzdCc7XG5pbXBvcnQgeyBsb2FkIGFzIGxvYWRDb25zdGFudHMgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvY29uc3RhbnRzJztcbmltcG9ydCB7IHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7IGZldGNoRGlzY291bnRPZmZlcnMgfSBmcm9tICdtb2R1bGVzL2Rpc2NvdW50RW5naW5lL2FjdGlvbic7XG5pbXBvcnQgeyBmZXRjaFByZURlZmluZWRNZXNzYWdlcyB9IGZyb20gJ21vZHVsZXMvcGRtL2FjdGlvbic7XG5cbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiYXBwL3JlZHVjZXJzL2F1dGhcIjtcbmltcG9ydCB7IGdldEFnZW50RGV0YWlscywgZ2V0Q3VycmVudFF1b3RlIH0gZnJvbSBcIm1vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVMaXN0XCI7XG5pbXBvcnQgeyBnZXRDaGF0a2V5cywgZ2V0TWVzc2FnZXMsIGdldFJlbWFpbmluZ01lc3NhZ2VzIH0gZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IHsgZmV0Y2hDaGF0S2V5cywgYWRkTWVzc2FnZSwgY2xlYXJNZXNzYWdlcywgY3JlYXRlQ29tbWVudCwgZmV0Y2hIaXN0b3J5LCBsb2FkTW9yZU1lc3NhZ2VzIH0gZnJvbSBcIi4vYWN0aW9uXCI7XG5pbXBvcnQgeyBzZXRQZG1DYXRlZ29yeSwgc2hvd0hpZGVQZG1WaWV3IH0gZnJvbSBcIm1vZHVsZXMvcGRtL2FjdGlvblwiO1xuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0JztcblxuY29uc3QgY29udGFpbmVyID0gIHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRRdW90ZSA9IGdldEN1cnJlbnRRdW90ZShzdGF0ZSk7XG4gICAgY29uc3QgYWdlbnQgPSBnZXRBZ2VudERldGFpbHMoY3VycmVudFF1b3RlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjaGF0S2V5czogZ2V0Q2hhdGtleXMoc3RhdGUpLFxuICAgICAgbWVzc2FnZXM6IGdldE1lc3NhZ2VzKHN0YXRlKSxcbiAgICAgIHJlbWFpbmluZ01lc3NhZ2VzOiBnZXRSZW1haW5pbmdNZXNzYWdlcyhzdGF0ZSksXG4gICAgICB1c2VyRGV0YWlsczogdXNlcihzdGF0ZSksXG4gICAgICBwZG1zSW5mb3JtYXRpb246IHN0YXRlLnF1b3RlLnBkbXMsXG4gICAgICB0cmlwSWQ6IHN0YXRlLnF1b3RlLmFjdGlvbnMucmVxdWVzdGVkVHJpcElkLFxuICAgICAgcXVvdGVJZDogc3RhdGUucXVvdGUuYWN0aW9ucy5jdXJyZW50UXVvdGVJZCxcbiAgICAgIGFnZW50SWQ6IGFnZW50LmlkLFxuICAgICAgYWdlbnROYW1lOiBhZ2VudC5uYW1lLFxuICAgICAgY3VycmVudFF1b3RlOiBjdXJyZW50UXVvdGVcbiAgICB9O1xuICB9LFxuICB7XG4gICAgZmV0Y2hDaGF0S2V5cyxcbiAgICBhZGRNZXNzYWdlLFxuICAgIGNsZWFyTWVzc2FnZXMsXG4gICAgY3JlYXRlQ29tbWVudCxcbiAgICBmZXRjaEhpc3RvcnksXG4gICAgbG9hZE1vcmVNZXNzYWdlcyxcbiAgICBzZXRQZG1DYXRlZ29yeSxcbiAgICBzaG93SGlkZVBkbVZpZXdcbiAgfVxuKShDaGF0KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICB3ZWJ2aWV3QWN0aW9uczogW2ZldGNoUXVvdGVzRGF0YSwgbG9hZENvbnN0YW50cywgZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMsXG4gICAgZmV0Y2hEaXNjb3VudE9mZmVycywgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZF1cbn07XG4iLCJpbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBQZG1Db250YWluZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnYXV0bycsXG4gIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgYm94U2hhZG93OiAnMCAtMnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuICBwYWRkaW5nOiAnOHB4IDhweCcsXG4gICcmIHVsJzoge1xuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBtYXJnaW46ICcwJyxcbiAgICAnJiBsaSc6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXG4gICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtYXJnaW5Cb3R0b206ICcwJyxcbiAgICAgIH0sXG4gICAgICAnJiBhJzoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICczMHB4JyxcbiAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4ICMwMDk2ODgnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBjb2xvcjogJyMwMDk2ODgnLFxuICAgICAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGNvbG9yOiAnIzAwOTY4OCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IGdldFNlbGVjdGVkUGRtcyB9IGZyb20gJ2hlbHBlcnMvcGRtSGVscGVycyc7XG5pbXBvcnQgeyBQZG1Db250YWluZXIgfSBmcm9tICcuL0cnO1xuXG5jbGFzcyBQZG0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2V0TWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwZG1zRGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkUGRtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzZXRNZXNzYWdlOiAoKSA9PiB7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25QZG1TZWxlY3Rpb24gPSB0aGlzLm9uUGRtU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblBkbVNlbGVjdGlvbihwZG0pIHtcbiAgICB0aGlzLnByb3BzLnNldE1lc3NhZ2UocGRtLm1lc3NhZ2VfdGV4dCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwZG1zRGF0YSwgc2VsZWN0ZWRQZG0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGRtTGlzdCA9IGdldFNlbGVjdGVkUGRtcyhwZG1zRGF0YSwgc2VsZWN0ZWRQZG0pO1xuXG4gICAgaWYgKCFwZG1MaXN0IHx8ICFwZG1MaXN0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQZG1Db250YWluZXIgY2xhc3NOYW1lPVwiY2xlYXJmaXggcmVsYXRpdmVcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBkbUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9ID5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2BhdF8ke2luZGV4fWB9IG9uQ2xpY2s9eygpID0+IHRoaXMub25QZG1TZWxlY3Rpb24oaXRlbSl9PlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucGRtX3RleHR9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvUGRtQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGRtO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgUGRtIGZyb20gJy4vUGRtJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIHBkbXNEYXRhOiBzdGF0ZS5xdW90ZS5wZG1zLnBkbXMsXG4gICAgc2VsZWN0ZWRQZG06IHN0YXRlLnF1b3RlLnBkbXMuc2VsZWN0ZWRQZG1DYXRlZ29yeSxcbiAgfSksXG4pKFBkbSkpO1xuIiwiaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBSYWRpb0lucHV0ID0gZ2xhbW9yb3VzLmlucHV0KHtcbiAgJyYgKyBsYWJlbCc6IHtcbiAgICBjb2xvcjogJyMzZTNlM2UnLFxuICAgICc6YmVmb3JlJyA6IHtcbiAgICAgIGJvcmRlckNvbG9yOiAnIzNlM2UzZSdcbiAgICB9XG4gIH0sXG4gICcmOmNoZWNrZWQgKyBsYWJlbCArIC5pbnB1dC1kcm9wZG93bi1ib3gnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICAnJjpjaGVja2VkICsgbGFiZWwgKyAuc2hvd1RleHQgKyB0ZXh0YXJlYSc6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgUmFkaW9JbnB1dFRleHQgPSBnbGFtb3JvdXMoUmFkaW9JbnB1dCkoe1xuICAnJjpjaGVja2VkICsgbGFiZWwgKyB0ZXh0YXJlYSc6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBnbGFtb3JvdXMudGV4dGFyZWEoe1xuICBkaXNwbGF5OiAnbm9uZScsXG4gIG1hcmdpbkxlZnQ6ICczMHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnY2FsYygxMDAlIC0gMzBweCknXG59KTtcblxuZXhwb3J0IGNvbnN0IFJlcUNhbGxCYWNrUG9wVXAgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJyAucmVxdWVzdC1jYWxsLWljb24nOiB7XG4gICAgd2lkdGg6ICcxMjBweCcsXG4gICAgaGVpZ2h0OiAnODguNjRweCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyYgc3ZnJzoge1xuICAgICAgd2lkdGg6ICcxMjBweCcsXG4gICAgICBoZWlnaHQ6ICc4OC42NHB4J1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBJY29uU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICc2Mi42OHB4JyxcbiAgaGVpZ2h0OiAnNDEuOTZweCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICc2MnB4JyxcbiAgICBoZWlnaHQ6ICc0MS45NnB4JyxcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgSGVhZHBob25lSWNvbiwgSGVhZHBob25lSWNvbldoaXRlIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgUmVxdWVzdENhbGxiYWNrUG9wdXAgZnJvbSAnLi9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjayc7XG5pbXBvcnQgeyBJTkZPX1JPU1RFUiB9IGZyb20gJ2NvbnN0YW50cy9yb3N0ZXJUeXBlcyc7XG5cbmNsYXNzIFJlcXVlc3RDYWxsYmFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuTW9kYWw6IGZhbHNlLFxuICAgICAgY2xvc2VNb2RhbDogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlLCBjbG9zZU1vZGFsOiBmYWxzZSB9KTtcbiAgfTtcblxuICBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IGZhbHNlLCBjbG9zZU1vZGFsOiB0cnVlIH0pO1xuICAgIHRoaXMucHJvcHMuc2hvd1Jvc3Rlcih7IHR5cGU6IElORk9fUk9TVEVSLCBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlUmVxdWVzdENhbGxiYWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMucmVxdWVzdENhbGxiYWNrQ29uZmlybSh7XG4gICAgICB0cmlwSWQ6IHRoaXMucHJvcHMudHJpcElkLFxuICAgICAgcXVvdGVJZDogdGhpcy5wcm9wcy5xdW90ZUlkXG4gICAgfSk7XG4gICAgdGhpcy5vcGVuUG9wdXAoKTtcbiAgfTtcblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBSZXF1ZXN0IGNhbGxiYWNrIGNhbGxlZCB0d2ljZSBidXQgd2UgaGF2ZSB0byBzaG93IHRvYXN0ZXIgbWVzc2FnZSBvbmx5IHdoZW4gdXNlciBjbG9zZWQgdGhlIHBvcHVwXG4gICAgaWYgKCF0aGlzLnByb3BzLnN1Y2Nlc3NNZXNzYWdlICYmIG5leHRQcm9wcy5zdWNjZXNzTWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUub3Blbk1vZGFsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIG1lc3NhZ2U6IG5leHRQcm9wcy5zdWNjZXNzTWVzc2FnZX0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2hvd1Jvc3Rlcih7IHR5cGU6IElORk9fUk9TVEVSLCBtZXNzYWdlOiBuZXh0UHJvcHMuc3VjY2Vzc01lc3NhZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNJY29ub25seSwgaXNXaGl0ZUljb24gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIGZsZXggYWxpZ25DZW50ZXIgcGZjMyBmdzcgYXRfcmVxdWVzdENhbGxiYWNrX0NUQVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVJlcXVlc3RDYWxsYmFjaygpfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC0yNCBpYmxvY2sgcmVsYXRpdmUgbXI4XCI+XG4gICAgICAgICAgICB7aXNXaGl0ZUljb24gPyA8SGVhZHBob25lSWNvbldoaXRlIC8+IDogPEhlYWRwaG9uZUljb24gLz59PC9zcGFuPlxuICAgICAgICAgIHtpc0ljb25vbmx5ID8gbnVsbCA6IDxzcGFuIGNsYXNzTmFtZT1cImlibG9ja1wiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICc2cHgnIH19PlJlcXVlc3QgQ2FsbDwvc3Bhbj59XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICAgIGZ1bGxWaWV3PXt0cnVlfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9XG4gICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgY3VzdG9tQ2xvc2VUcmlnZ2VyPXt0aGlzLnN0YXRlLmNsb3NlTW9kYWx9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2VDdXN0b209e3RoaXMuY2xvc2VQb3B1cH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZXF1ZXN0Q2FsbGJhY2tQb3B1cFxuICAgICAgICAgICAgdHJpcElkPXt0aGlzLnByb3BzLnRyaXBJZH1cbiAgICAgICAgICAgIHF1b3RlSWQ9e3RoaXMucHJvcHMucXVvdGVJZH1cbiAgICAgICAgICAgIHJlcXVlc3RDYWxsYmFja1JlYXNvbnM9e3RoaXMucHJvcHMucmVxdWVzdENhbGxiYWNrUmVhc29uc31cbiAgICAgICAgICAgIHJlcXVlc3RDYWxsYmFja0NvbmZpcm09e3RoaXMucHJvcHMucmVxdWVzdENhbGxiYWNrQ29uZmlybX1cbiAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VQb3B1cH0gLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVxdWVzdENhbGxiYWNrLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcmVxdWVzdENhbGxiYWNrUmVhc29uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcmVxdWVzdENhbGxiYWNrQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VjY2Vzc01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNob3dSb3N0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBpc0ljb25vbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNXaGl0ZUljb246IFByb3BUeXBlcy5ib29sXG59O1xuXG5SZXF1ZXN0Q2FsbGJhY2suZGVmYXVsdFByb3BzID0ge1xuICByZXF1ZXN0Q2FsbEJhY2s6IHt9LFxuICBzdWNjZXNzTWVzc2FnZTogJycsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge30sXG4gIHNob3dSb3N0ZXI6ICgpID0+IHt9LFxuICBpc0ljb25vbmx5OiBmYWxzZSxcbiAgaXNXaGl0ZUljb246IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Q2FsbGJhY2s7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgSWxsdXNSZXF1ZXN0Q2FsbGJhY2tcbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHtcbiAgUmFkaW9JbnB1dFRleHQsXG4gIFRleHRBcmVhLFxuICBSZXFDYWxsQmFja1BvcFVwLFxufSBmcm9tICcuLi9HJztcbmltcG9ydCBNb2RhbEhlYWRlckN1c3RvbSBmcm9tIFwiLi4vLi4vc2hhcmVkL2hlYWRlcnMvTW9kYWxIZWFkZXJDdXN0b21cIjtcbmltcG9ydCB7IHNuYWtlQ2FzZSB9IGZyb20gJ2hlbHBlcnMvc3RyaW5nSGVscGVycyc7XG5cbmNsYXNzIFJlcXVlc3RDYWxsYmFja1BvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBxdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcmVxdWVzdENhbGxiYWNrUmVhc29uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJlcXVlc3RDYWxsYmFja0NvbmZpcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xvc2VNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZWFzb246ICcnLFxuICAgICAgcmVhc29uVGV4dDogJycsXG4gICAgfTtcbiAgfVxuXG4gIHJlYXNvbkNoYW5nZWQgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlYXNvbjogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIHJlYXNvblRleHRVcGRhdGVkID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZWFzb25UZXh0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgLy8gY29sbGVjdCB0aGUgcmVhc29ucyBhbmQgZGlzcGF0Y2hcbiAgICB0aGlzLnByb3BzLnJlcXVlc3RDYWxsYmFja0NvbmZpcm0oe1xuICAgICAgdHJpcElkOiB0aGlzLnByb3BzLnRyaXBJZCxcbiAgICAgIHF1b3RlSWQ6IHRoaXMucHJvcHMucXVvdGVJZCxcbiAgICAgIHJlYXNvbjogc25ha2VDYXNlKHRoaXMuc3RhdGUucmVhc29uKSxcbiAgICAgIHJlYXNvblRleHQ6IHRoaXMuc3RhdGUucmVhc29uVGV4dFxuICAgIH0pO1xuXG4gICAgLy8gY2xvc2UgdGhlIHBvcHVwXG4gICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmVxdWVzdENhbGxiYWNrUmVhc29ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmtleXMocmVxdWVzdENhbGxiYWNrUmVhc29ucykubWFwKChyZWplY3Rpb25JZCkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBgcmVqZWN0LXF1b3RlLSR7cmVqZWN0aW9uSWR9YDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgPFJhZGlvSW5wdXRUZXh0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tib3gtcm91bmRcIlxuICAgICAgICAgICAgbmFtZT1cInJlamVjdC1xdW90ZS1yYWRcIlxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgdmFsdWU9e3JlamVjdGlvbklkfVxuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWFzb24gPT09IHJlamVjdGlvbklkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucmVhc29uQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpYmxvY2sgd2Z1bGwgZjE0IHBmYzMgbWI4IG10OCBhdF9yZXF1ZXN0Q0ItcmVhc29uc1wiXG4gICAgICAgICAgICAgICAgIGh0bWxGb3I9e2lkfT57cmVxdWVzdENhbGxiYWNrUmVhc29uc1tyZWplY3Rpb25JZF19PC9sYWJlbD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAocmVxdWVzdENhbGxiYWNrUmVhc29uc1tyZWplY3Rpb25JZF0gPT09ICdPdGhlcnMnIHx8IHJlcXVlc3RDYWxsYmFja1JlYXNvbnNbcmVqZWN0aW9uSWRdID09PSAnT3RoZXInKVxuICAgICAgICAgICAgICA/IDxUZXh0QXJlYVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVhc29uIGZvciBRdW90ZSBSZWplY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWFzb25UZXh0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYXNvblRleHRVcGRhdGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVxQ2FsbEJhY2tQb3BVcCBjbGFzc05hbWU9XCJmbGV4IGhmdWxsIGZsZXhEQ29sdW1uIG92ZXJmbG93YVwiPlxuICAgICAgICA8TW9kYWxIZWFkZXJDdXN0b20gaGFuZGxlQ3Jvc3NDbGljaz17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfSBoZWFkaW5nPSdSZXF1ZXN0IGEgQ2FsbCBCYWNrJyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBzYmN3IHoyIHAwIGZsZXggZmxleERDb2x1bW4gcGI2NCBmbGV4RnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDI0IHBiMTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgcGZjMyBtYjAgZnc3IGF0X3JlcXVlc3RDQi10ZXh0XCI+T3VyIFRyYXZlbCBBZ2VudCB3aWxsIGdldCBpbiB0b3VjaCB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBwdDAgcDI0IGF0X3JlcXVlc3RDQi1yZWFzb25cIj5cbiAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBiMCBsMCByMCBiczZcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmktbGFyZ2Ugd2Z1bGwgcmFkaXVzMiBwbDggcHI4IGF0X3JlcXVlc3RDQi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVxQ2FsbEJhY2tQb3BVcD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDYWxsYmFja1BvcHVwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IFJlcXVlc3RDYWxsYmFjayBmcm9tICcuL1JlcXVlc3RDYWxsYmFjayc7XG5pbXBvcnQgeyBnZXRSZXF1ZXN0Q2FsbGJhY2tSZWFzb25zIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VHJpcElkLCBnZXRDdXJyZW50UXVvdGVJZCB9IGZyb20gXCJtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL3F1b3RlQWN0aXZpdGllc1wiO1xuaW1wb3J0IHsgZ2V0UmVxdWVzdENhbGxiYWNrU3VjY2VzcyB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7XG4gIHJlcXVlc3RDYWxsYmFjayBhcyByZXF1ZXN0Q2FsbGJhY2tDb25maXJtLFxufSBmcm9tICdtb2R1bGVzL3JlcXVlc3RDYWxsYmFjay9hY3Rpb24nO1xuaW1wb3J0IHsgc2hvd1Jvc3RlciB9IGZyb20gXCJtb2R1bGVzL3Jvc3Rlci9hY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcbiAgY29ubmVjdChcbiAgICBzdGF0ZSA9PiAoe1xuICAgICAgcmVxdWVzdENhbGxiYWNrUmVhc29uczogZ2V0UmVxdWVzdENhbGxiYWNrUmVhc29ucyhzdGF0ZSksXG4gICAgICB0cmlwSWQ6IGdldFRyaXBJZChzdGF0ZSksXG4gICAgICBxdW90ZUlkOiBnZXRDdXJyZW50UXVvdGVJZChzdGF0ZSksXG4gICAgICBzdWNjZXNzTWVzc2FnZTogZ2V0UmVxdWVzdENhbGxiYWNrU3VjY2VzcyhzdGF0ZSlcbiAgICB9KSwge1xuICAgICAgcmVxdWVzdENhbGxiYWNrQ29uZmlybSxcbiAgICAgIHNob3dSb3N0ZXJcbiAgICB9XG4gICkoUmVxdWVzdENhbGxiYWNrKVxuKTtcbiIsImNvbnN0IFBETV9DQVRFR09SWV9IT1RFTCA9ICdIb3RlbCc7XG5jb25zdCBQRE1fQ0FURUdPUllfSVRJTkVSQVJZID0gJ0l0aW5lcmFyeSc7XG5jb25zdCBQRE1fQ0FURUdPUllfSU5DTFVTSU9OID0gJ0luY2x1c2lvbic7XG5jb25zdCBQRE1fQ0FURUdPUllfRVhQTEFJTlFVT1RFID0gJ0V4cGxhaW5RdW90ZSc7XG5cbmNvbnN0IGdldFNlbGVjdGVkUGRtcyA9IChwZG1zLCBjYXRlZ29yeSkgPT4ge1xuICBpZiAocGRtcykge1xuICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcbiAgICAgIGNhc2UgUERNX0NBVEVHT1JZX0lUSU5FUkFSWTpcbiAgICAgICAgcmV0dXJuIHBkbXMuSXRpbmVyYXJ5O1xuICAgICAgY2FzZSBQRE1fQ0FURUdPUllfSE9URUw6XG4gICAgICAgIHJldHVybiBwZG1zLkhvdGVsO1xuICAgICAgY2FzZSBQRE1fQ0FURUdPUllfSU5DTFVTSU9OOlxuICAgICAgICByZXR1cm4gcGRtcy5JbmNsdXNpb247XG4gICAgICBjYXNlIFBETV9DQVRFR09SWV9FWFBMQUlOUVVPVEU6XG4gICAgICAgIHJldHVybiBwZG1zLkV4cGxhaW5RdW90ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZ2V0RGVzdGluYXRpb25zID0gKGlucHV0RGVzdGluYXRpb25zKSA9PiB7XG4gIGNvbnN0IGRlc3RpbmF0aW9uID0ge307XG4gIGNvbnN0IGRlc3RpbmF0aW9uTmFtZXMgPSBbXTtcbiAgY29uc3QgZGVzdGluYXRpb25JZHMgPSBbXTtcblxuICBpZiAoaW5wdXREZXN0aW5hdGlvbnMgPT09IG51bGwpIHtcbiAgICBkZXN0aW5hdGlvblsnaWRzJ10gPSAwO1xuICAgIGRlc3RpbmF0aW9uWyduYW1lcyddID0gJyc7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uOyAvL3JldHVybiBlbXB0eSBzdHJpbmdcbiAgfVxuXG4gIGlucHV0RGVzdGluYXRpb25zLm1hcCgoZGVzdGluYXRpb24pID0+IHtcbiAgICBkZXN0aW5hdGlvbk5hbWVzLnB1c2goZGVzdGluYXRpb24ubmFtZSk7XG4gICAgZGVzdGluYXRpb25JZHMucHVzaChkZXN0aW5hdGlvbi5pZCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgJ2lkcyc6IGRlc3RpbmF0aW9uSWRzWzBdLFxuICAgICduYW1lcyc6IGRlc3RpbmF0aW9uTmFtZXMuam9pbignLCcpXG4gIH07XG59O1xuXG5leHBvcnQge1xuICBnZXRTZWxlY3RlZFBkbXMsXG4gIGdldERlc3RpbmF0aW9ucyxcbiAgUERNX0NBVEVHT1JZX0hPVEVMLFxuICBQRE1fQ0FURUdPUllfSU5DTFVTSU9OLFxuICBQRE1fQ0FURUdPUllfSVRJTkVSQVJZLFxuICBQRE1fQ0FURUdPUllfRVhQTEFJTlFVT1RFXG59O1xuIiwiaW1wb3J0IHNuYWtlQ2FzZUxpYiBmcm9tIFwic25ha2UtY2FzZS9zbmFrZS1jYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBzbmFrZUNhc2UgPSAoY29udGVudCkgPT4ge1xuICByZXR1cm4gc25ha2VDYXNlTGliKGNvbnRlbnQpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoYXQtaGVhZGVyXCI6IFwiX0szaUoyXCIsXG5cdFwiY2hhdFNoYWRvd1wiOiBcIl8zUXFfYVwiLFxuXHRcInByZXYtY2hhdC1oZWFkZXJcIjogXCJfM2FyQ1hcIixcblx0XCJhZ2VudC1zdGF0dXNcIjogXCJfM2FTUWNcIixcblx0XCJvZmZsaW5lLW5vd1wiOiBcIl8xOUZSc1wiLFxuXHRcIm9ubGluZS1ub3dcIjogXCJfM1c5SmFcIixcblx0XCJjaGF0LWJveC1kYXRhXCI6IFwiXzJFUXc2XCIsXG5cdFwicHJldi1jaGF0LWJveC1kYXRhXCI6IFwiXzNQTk9yXCIsXG5cdFwicHJldi10eXBlLWNoYXQtY29uXCI6IFwiXzM0SEJ2XCIsXG5cdFwidHlwZS1jaGF0LWNvblwiOiBcIl8yeTVTalwiLFxuXHRcImFnZW50LW1lc3NhZ2VcIjogXCJfOGQtWmtcIixcblx0XCJhZ2VudC1tZXNzYWdlLXByZXZcIjogXCJfM1JBV0dcIixcblx0XCJ1c2VyLW1lc3NhZ2VcIjogXCJfMlRXUXdcIixcblx0XCJhZ2VudC11c2VyLWltZ1wiOiBcIl8yU2VhTlwiLFxuXHRcImFnZW50LXVzZXItbmFtZVwiOiBcIl8zWnpoa1wiLFxuXHRcInVzZXItYWdlbnQtbWVzc2FnZS1jb250YWluZXJcIjogXCJfMTNLdE9cIixcblx0XCJhdHRhY2htZW50LWJ1dHRvblwiOiBcIl8zQzhROFwiLFxuXHRcInByZXYtYXR0YWNobWVudC1idXR0b25cIjogXCJfYmR3eW5cIlxufTsiLCJ2YXIgbm9DYXNlID0gcmVxdWlyZSgnbm8tY2FzZScpXG5cbi8qKlxuICogU25ha2UgY2FzZSBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IFtsb2NhbGVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBsb2NhbGUpIHtcbiAgcmV0dXJuIG5vQ2FzZSh2YWx1ZSwgbG9jYWxlLCAnXycpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9