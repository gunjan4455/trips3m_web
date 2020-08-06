require("source-map-support").install();
exports.ids = ["Qdp~rlp"];
exports.modules = {

/***/ "./app-v2/modules/notifications/G.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/notifications/G.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GNotificationImg = exports.GNotificationListDiv = exports.GNotificationData = exports.GNotification = exports.GNotificationCount = exports.GNotificationBellIconDiv = exports.GNotificationBell = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GNotificationBell = _glamorous.default.span({
  width: '24px',
  height: '24px',
  display: 'inline-block',
  position: 'relative'
});

exports.GNotificationBell = GNotificationBell;

const GNotificationBellIconDiv = _glamorous.default.div({
  width: '18px',
  height: '18px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '& svg': {
    width: '100%'
  }
});

exports.GNotificationBellIconDiv = GNotificationBellIconDiv;

const GNotificationCount = _glamorous.default.span({
  display: 'block',
  position: 'absolute',
  background: '#fe5246',
  borderRadius: '100%',
  top: '-5px',
  right: '-5px',
  textAlign: 'center',
  minWidth: '15px',
  height: '15px',
  lineHeight: '15px',
  color: '#ffffff',
  fontSize: '10px'
});

exports.GNotificationCount = GNotificationCount;

const GNotification = _glamorous.default.div({
  position: 'relative'
});

exports.GNotification = GNotification;

const GNotificationData = _glamorous.default.div({
  padding: '15px 15px 15px 70px',
  background: '#fff',
  wordWrap: 'break-word',
  textAlign: 'left',
  '&:hover': {
    background: '#fff'
  }
}, props => ({
  background: props.isViewed ? '#ffffff' : '#ffffff'
}));

exports.GNotificationData = GNotificationData;

const GNotificationListDiv = _glamorous.default.div({
  height: '100%',
  overflow: 'auto'
});

exports.GNotificationListDiv = GNotificationListDiv;

const GNotificationImg = _glamorous.default.div({
  left: '15px',
  minWidth: '50px',
  maxWidth: '50px',
  borderRadius: '100%',
  overflow: 'hidden',
  '& .agent-user-name': {
    backgroundColor: '#2196F3',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#fff'
  },
  '& .agent-user-img': {
    backgroundColor: '#2196F3'
  }
});

exports.GNotificationImg = GNotificationImg;

/***/ }),

/***/ "./app-v2/modules/notifications/Notifications.js":
/*!*******************************************************!*\
  !*** ./app-v2/modules/notifications/Notifications.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/notifications/G.js");

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _rtms = __webpack_require__(/*! helpers/rtms */ "./app/helpers/rtms.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _ModalHeaderCustom = _interopRequireDefault(__webpack_require__(/*! modules/shared/headers/ModalHeaderCustom */ "./app-v2/modules/shared/headers/ModalHeaderCustom.js"));

var _NotificationBell = _interopRequireDefault(__webpack_require__(/*! ./components/NotificationBell */ "./app-v2/modules/notifications/components/NotificationBell.js"));

var _NotificationList = _interopRequireDefault(__webpack_require__(/*! ./components/NotificationList */ "./app-v2/modules/notifications/components/NotificationList.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Notifications = (_temp = _class = class Notifications extends _react.default.Component {
  constructor(props) {
    super(props);

    this.disposeExistingRtms = () => {
      // close web socket connection and remove all listners
      if (this.rtms_) {
        this.rtms_.close();
      }
    };

    this.trackSegmentEvent = event => {
      /*trackSegment({
        event: event,
        category: 'The concerned page',
        section: 'Global Menu',
        object: '',
        cta: 'Notification bell',
      });*/
    };

    this.state = {};
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount() {
    try {
      // load notifications
      this.props.fetchNotifications(this.props.userId);
      this.subscribeToNotification();
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    try {
      if (_appConfig.default.useRtms) {
        this.disposeExistingRtms();
      } else {
        this.unSubscribeNotification();
      }
    } catch (e) {
      console.log(e);
    }
  }

  unsubscribeRtms() {
    if (this.rtms_) {
      this.rtms_.close();
    }
  }

  async subscribeToRtms() {
    const {
      userId
    } = this.props;
    const channel = _rtms.RtmsChannels.SYSTEM;
    this.rtms_ = await (0, _rtms.getRtmsConnection)({
      userId,
      channel
    }); // Notification message has come

    this.rtms_.on(_rtms.MessageType.NOTIFICATION, message => {
      const {
        payload: [{
          content
        }]
      } = JSON.parse(message);
      this.props.addMessage(content);
    });
  }

  unSubscribeNotification() {
    this.unsubscribeRtms();
  }

  subscribeToNotification() {
    this.subscribeToRtms();
  }

  handleLoadMore() {
    this.props.loadMoreNotifications();
  }

  render() {
    const notificationsPresent = this.props.remainingMessages > 0;
    const {
      unreadNotificationCount,
      markNotificationRead,
      loadMoreNotifications,
      userId,
      messages,
      remainingMessages
    } = this.props;
    return _react.default.createElement(_G.GNotificationBell, {
      className: "flex alignCenter justifyCenter at_nofification"
    }, _react.default.createElement("div", {
      className: "notification-hover-box relative"
    }, _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement(_NotificationBell.default, {
        markNotificationRead: markNotificationRead,
        unreadNotificationCount: unreadNotificationCount,
        userId: userId
      }),
      fullView: true,
      hasCustomClose: true
    }, _react.default.createElement("div", {
      className: "notifications-head absolute wfull hfull flex flexDColumn pb48"
    }, _react.default.createElement(_ModalHeaderCustom.default, {
      heading: "Notifications"
    }), _react.default.createElement(_NotificationList.default, {
      userId: userId,
      messages: messages,
      notificationsPresent: notificationsPresent,
      loadMoreNotifications: loadMoreNotifications,
      remainingMessages: remainingMessages
    })))));
  }

}, _class.propTypes = {
  userId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  unreadNotificationCount: _propTypes.default.number,
  messages: _propTypes.default.array,
  remainingMessages: _propTypes.default.number.isRequired,
  loadMoreNotifications: _propTypes.default.func.isRequired,
  addMessage: _propTypes.default.func.isRequired,
  fetchNotifications: _propTypes.default.func.isRequired,
  markNotificationRead: _propTypes.default.func.isRequired
}, _class.defaultProps = {
  messages: [],
  unreadNotificationCount: undefined
}, _temp);
var _default = Notifications;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/notifications/components/NotificationBell.js":
/*!*********************************************************************!*\
  !*** ./app-v2/modules/notifications/components/NotificationBell.js ***!
  \*********************************************************************/
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

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/notifications/G.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotificationBell = ({
  unreadNotificationCount,
  markNotificationRead,
  userId
}) => {
  const onBellClick = () => {
    if (unreadNotificationCount) {
      markNotificationRead(userId);
    }
  };

  return _react.default.createElement(_G.GNotificationBellIconDiv, {
    onClick: onBellClick
  }, _react.default.createElement(_Icon.NotificationIconWhite, {
    className: "absolute-center-v l0"
  }), unreadNotificationCount ? _react.default.createElement(_G.GNotificationCount, null, unreadNotificationCount > 99 ? '99+' : `${unreadNotificationCount}`) : null);
};

NotificationBell.propTypes = {
  userId: _propTypes.default.string.isRequired,
  unreadNotificationCount: _propTypes.default.number.isRequired,
  markNotificationRead: _propTypes.default.func.isRequired
};
var _default = NotificationBell;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/notifications/components/NotificationCard.js":
/*!*********************************************************************!*\
  !*** ./app-v2/modules/notifications/components/NotificationCard.js ***!
  \*********************************************************************/
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

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/notifications/G.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _Avatar = _interopRequireDefault(__webpack_require__(/*! modules/shared/Avatar */ "./app-v2/modules/shared/Avatar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotificationCard = ({
  message
}) => _react.default.createElement(_reactRouter.Link, {
  to: message.url
}, _react.default.createElement(_G.GNotification, null, _react.default.createElement(_G.GNotificationData, {
  className: "bt"
}, _react.default.createElement("div", {
  className: "absolute l15"
}, _react.default.createElement(_Avatar.default, {
  imagePath: message.imageUrl,
  name: message.name || ''
})), _react.default.createElement("p", {
  className: "pfc3 f14p m0 at_notificationTxt"
}, message.text), _react.default.createElement("p", {
  className: "pfc4 f12 m0 mt4 at_notificationTime"
}, (0, _DateTime.timeFromNow)(message.time)))));

NotificationCard.propTypes = {
  message: _propTypes.default.object.isRequired
};
var _default = NotificationCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/notifications/components/NotificationList.js":
/*!*********************************************************************!*\
  !*** ./app-v2/modules/notifications/components/NotificationList.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/notifications/G.js");

var _NotificationCard = _interopRequireDefault(__webpack_require__(/*! ./NotificationCard */ "./app-v2/modules/notifications/components/NotificationCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotificationList = ({
  messages,
  notificationsPresent,
  loadMoreNotifications,
  userId
}) => {
  if (!messages.length) {
    return _react.default.createElement(_G.GNotificationListDiv, {
      className: "clearfix relative sbc5 pb48"
    }, _react.default.createElement("p", {
      className: "pfc4 f16 m0 f12 p15"
    }, "All caught up! You have no notifications."));
  }

  return _react.default.createElement(_G.GNotificationListDiv, {
    className: "clearfix relative sbc5"
  }, messages.filter(message => message.text && message.text.trim().length !== 0).map(message => _react.default.createElement(_NotificationCard.default, {
    key: message.id,
    message: message
  })), notificationsPresent ? _react.default.createElement("div", {
    className: "fixed b0 l0 r0 z2 bs6 sbcw"
  }, _react.default.createElement("button", {
    className: "wfull sfc1 fw7 p15 cursorP",
    onClick: () => loadMoreNotifications(userId)
  }, _react.default.createElement("span", {
    className: "wave"
  }), "Load More Notification")) : null);
};

NotificationList.propTypes = {
  messages: _propTypes.default.array,
  notificationsPresent: _propTypes.default.bool,
  loadMoreNotifications: _propTypes.default.func.isRequired,
  userId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
};
NotificationList.defaultProps = {
  messages: [],
  notificationsPresent: false
};
var _default = NotificationList;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/notifications/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/notifications/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/notifications/action.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/notifications/reducer.js");

var _auth = __webpack_require__(/*! app/reducers/auth */ "./app/reducers/auth.js");

var _Notifications = _interopRequireDefault(__webpack_require__(/*! ./Notifications */ "./app-v2/modules/notifications/Notifications.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    messages: (0, _reducer.getMessages)(state),
    unreadNotificationCount: (0, _reducer.getUnreadNotificationCount)(state),
    pubnubKeys: (0, _reducer.getNotificationKeys)(state),
    remainingMessages: (0, _reducer.getRemainingMessages)(state),
    userId: (0, _auth.getUserDetails)(state).id //'2544153'

  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotifications: userId => dispatch((0, _action.loadNotifications)(userId)),
    loadMoreNotifications: userId => dispatch((0, _action.loadMoreNotifications)(userId)),
    addMessage: message => dispatch((0, _action.addMessage)(message)),
    fetchPubnubKeys: userId => dispatch((0, _action.fetchPubnubKeys)(userId)),
    markNotificationRead: userId => dispatch((0, _action.markNotificationRead)(userId))
  };
}

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Notifications.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/roster/G.js":
/*!************************************!*\
  !*** ./app-v2/modules/roster/G.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRosterDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GRosterDiv = _glamorous.default.div({
  // top: '60px',
  width: 'calc(100% - 24px)',
  left: '12px',
  top: '12px',
  zIndex: '9999',
  '& > div': {
    position: 'relative'
  },
  '& .rosterClose': {
    display: 'block',
    width: '24px',
    height: '24px',
    position: 'absolute',
    right: '3px',
    top: '3px',
    cursor: 'pointer',
    '&:before, &:after': {
      content: '\' \'',
      position: 'absolute',
      left: '7px',
      top: '10px',
      width: '12px',
      height: '1px',
      background: '#000',
      transform: 'rotateZ(45deg)'
    },
    '&:after': {
      transform: 'rotateZ(-45deg)'
    }
  },
  '& .toaster': {
    padding: '12px',
    paddingRight: '30px',
    color: '#333',
    border: '1px solid #333',
    background: '#efefef',
    borderRadius: '4px',
    fontSize: '16px',
    '&.errorRoster': {
      color: '#cb4138',
      borderColor: '#fd5346',
      background: '#fbdbd8',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#cb4138'
      }
    },
    '&.sucessRoster': {
      color: '#268f2a',
      borderColor: '#268f2a',
      background: '#d1f6d2',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#268f2a'
      }
    },
    '&.infoRoster': {
      color: '#1a78c2',
      borderColor: '#2196f3',
      background: '#d8e8fb',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#1a78c2'
      }
    },
    '&.warningToaster': {
      color: '#3e3e3e',
      borderColor: '#fac22e',
      background: '#fbf2dc',
      '& .rosterClose:before, & .rosterClose:after': {
        background: '#3e3e3e'
      }
    }
  }
});

exports.GRosterDiv = GRosterDiv;

/***/ }),

/***/ "./app-v2/modules/roster/Roster.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/roster/Roster.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/roster/G.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Roster is to display messages for dynamic layouts.
 * - rosterType - String: Defines type of message. Currently we support
 * rosterSuccess, rosterError and rosterInfo
 * - text - String [optional]: Single line message for user.
 * - message - Object [optional]: For more complex messages which might contain link for user action.
 * For ex: {
 *     header: "New trip created!",
 *     message: "Please activate your email address. To resend activation mail {{send_activation_mail}}",
 *     links: [{type: 'send_activation_mail', label: 'Click here'} ]
 *   }
 * - timeout - Number [optional]: if provided, Message will disappear after timeout in milliseconds
 * - callback - Function [optional]: Callback to pass event based on which action is to be called by parent.
 *
 *  P.S. - Either rosterText or rosterMessage should be present. If both are present rosterText would have priority.
 */
let Roster = (_temp = _class = class Roster extends _react.default.Component {
  /**
   * rosterType could have two types:
   *  - sucessRoster
   *  - errorRoster
   *  - infoRoster
   */
  constructor(props) {
    super(props);
    this.state = {
      isRosterOpen: props.isRosterOpen
    };
    this.closeRoster = this.closeRoster.bind(this);
  }

  componentDidMount() {
    if (this.state.isRosterOpen) {
      this.showRoster();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.isRosterOpen && nextProps.isRosterOpen) {
      this.showRoster();
    }
  }

  showRoster() {
    this.setState({
      isRosterOpen: true
    }, () => {
      if (this.props.timeout && this.props.allowTimeOut) {
        setTimeout(() => {
          this.closeRoster();
        }, this.props.timeout);
      }
    });
  }

  closeRoster() {
    this.setState({
      isRosterOpen: false
    });
    this.props.hideRoster();
  }

  render() {
    const {
      type,
      message
    } = this.props;
    return this.state.isRosterOpen && message ? _react.default.createElement(_G.GRosterDiv, {
      className: "fixed"
    }, _react.default.createElement("div", {
      className: `toaster ${type}`
    }, _react.default.createElement("div", {
      className: "container dynamicTextInherit p0"
    }, message, _react.default.createElement("span", {
      className: "rosterClose",
      onClick: this.closeRoster
    })))) : null;
  }

}, _class.propTypes = {
  type: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  timeout: _propTypes.PropTypes.number,
  isRosterOpen: _propTypes.PropTypes.bool,
  hideRoster: _propTypes.PropTypes.func.isRequired,
  allowTimeOut: _propTypes.PropTypes.bool
}, _class.defaultProps = {
  type: 'infoRoster',
  isRosterOpen: false,
  allowTimeOut: true
}, _temp);
exports.default = Roster;

/***/ }),

/***/ "./app-v2/modules/roster/index.js":
/*!****************************************!*\
  !*** ./app-v2/modules/roster/index.js ***!
  \****************************************/
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

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/roster/action.js");

var _Roster = _interopRequireDefault(__webpack_require__(/*! ./Roster */ "./app-v2/modules/roster/Roster.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  type: state.roster.type,
  message: state.roster.message,
  isRosterOpen: state.roster.isRosterOpen,
  allowTimeOut: state.roster.allowTimeOut
}), {
  hideRoster: _action.hideRoster
})(_Roster.default));

exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ub3RpZmljYXRpb25zL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvbm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25CZWxsLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25DYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL25vdGlmaWNhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcm9zdGVyL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcm9zdGVyL1Jvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yb3N0ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiR05vdGlmaWNhdGlvbkJlbGwiLCJnbGFtb3JvdXMiLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJHTm90aWZpY2F0aW9uQmVsbEljb25EaXYiLCJkaXYiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiR05vdGlmaWNhdGlvbkNvdW50IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInJpZ2h0IiwidGV4dEFsaWduIiwibWluV2lkdGgiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIkdOb3RpZmljYXRpb24iLCJHTm90aWZpY2F0aW9uRGF0YSIsInBhZGRpbmciLCJ3b3JkV3JhcCIsInByb3BzIiwiaXNWaWV3ZWQiLCJHTm90aWZpY2F0aW9uTGlzdERpdiIsIm92ZXJmbG93IiwiR05vdGlmaWNhdGlvbkltZyIsIm1heFdpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJOb3RpZmljYXRpb25zIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImRpc3Bvc2VFeGlzdGluZ1J0bXMiLCJydG1zXyIsImNsb3NlIiwidHJhY2tTZWdtZW50RXZlbnQiLCJldmVudCIsInN0YXRlIiwiaGFuZGxlTG9hZE1vcmUiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaE5vdGlmaWNhdGlvbnMiLCJ1c2VySWQiLCJzdWJzY3JpYmVUb05vdGlmaWNhdGlvbiIsImUiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjb25maWciLCJ1c2VSdG1zIiwidW5TdWJzY3JpYmVOb3RpZmljYXRpb24iLCJ1bnN1YnNjcmliZVJ0bXMiLCJzdWJzY3JpYmVUb1J0bXMiLCJjaGFubmVsIiwiUnRtc0NoYW5uZWxzIiwiU1lTVEVNIiwib24iLCJNZXNzYWdlVHlwZSIsIk5PVElGSUNBVElPTiIsIm1lc3NhZ2UiLCJwYXlsb2FkIiwiY29udGVudCIsIkpTT04iLCJwYXJzZSIsImFkZE1lc3NhZ2UiLCJsb2FkTW9yZU5vdGlmaWNhdGlvbnMiLCJyZW5kZXIiLCJub3RpZmljYXRpb25zUHJlc2VudCIsInJlbWFpbmluZ01lc3NhZ2VzIiwidW5yZWFkTm90aWZpY2F0aW9uQ291bnQiLCJtYXJrTm90aWZpY2F0aW9uUmVhZCIsIm1lc3NhZ2VzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsIk5vdGlmaWNhdGlvbkJlbGwiLCJvbkJlbGxDbGljayIsIk5vdGlmaWNhdGlvbkNhcmQiLCJ1cmwiLCJpbWFnZVVybCIsIm5hbWUiLCJ0ZXh0IiwidGltZSIsIm9iamVjdCIsIk5vdGlmaWNhdGlvbkxpc3QiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0cmltIiwibWFwIiwiaWQiLCJib29sIiwibWFwU3RhdGVUb1Byb3BzIiwicHVibnViS2V5cyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hQdWJudWJLZXlzIiwiY29udGFpbmVyIiwiR1Jvc3RlckRpdiIsInpJbmRleCIsImN1cnNvciIsInBhZGRpbmdSaWdodCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiUm9zdGVyIiwiaXNSb3N0ZXJPcGVuIiwiY2xvc2VSb3N0ZXIiLCJzaG93Um9zdGVyIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsInRpbWVvdXQiLCJhbGxvd1RpbWVPdXQiLCJzZXRUaW1lb3V0IiwiaGlkZVJvc3RlciIsInR5cGUiLCJyb3N0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLG9CQUFvQkMsbUJBQVVDLElBQVYsQ0FBZTtBQUM5Q0MsU0FBTyxNQUR1QztBQUU5Q0MsVUFBUSxNQUZzQztBQUc5Q0MsV0FBUyxjQUhxQztBQUk5Q0MsWUFBVTtBQUpvQyxDQUFmLENBQTFCOzs7O0FBT0EsTUFBTUMsMkJBQTJCTixtQkFBVU8sR0FBVixDQUFjO0FBQ3BETCxTQUFPLE1BRDZDO0FBRXBEQyxVQUFRLE1BRjRDO0FBR3BERSxZQUFVLFVBSDBDO0FBSXBERyxPQUFLLEtBSitDO0FBS3BEQyxRQUFNLEtBTDhDO0FBTXBEQyxhQUFXLHVCQU55QztBQU9wRCxXQUFTO0FBQ1BSLFdBQU87QUFEQTtBQVAyQyxDQUFkLENBQWpDOzs7O0FBWUEsTUFBTVMscUJBQXFCWCxtQkFBVUMsSUFBVixDQUFlO0FBQy9DRyxXQUFTLE9BRHNDO0FBRS9DQyxZQUFVLFVBRnFDO0FBRy9DTyxjQUFZLFNBSG1DO0FBSS9DQyxnQkFBYyxNQUppQztBQUsvQ0wsT0FBSyxNQUwwQztBQU0vQ00sU0FBTyxNQU53QztBQU8vQ0MsYUFBVyxRQVBvQztBQVEvQ0MsWUFBVSxNQVJxQztBQVMvQ2IsVUFBUSxNQVR1QztBQVUvQ2MsY0FBWSxNQVZtQztBQVcvQ0MsU0FBTyxTQVh3QztBQVkvQ0MsWUFBVTtBQVpxQyxDQUFmLENBQTNCOzs7O0FBZUEsTUFBTUMsZ0JBQWdCcEIsbUJBQVVPLEdBQVYsQ0FBYztBQUN6Q0YsWUFBVTtBQUQrQixDQUFkLENBQXRCOzs7O0FBSUEsTUFBTWdCLG9CQUFvQnJCLG1CQUFVTyxHQUFWLENBQWM7QUFDN0NlLFdBQVMscUJBRG9DO0FBRTdDVixjQUFZLE1BRmlDO0FBRzdDVyxZQUFVLFlBSG1DO0FBSTdDUixhQUFXLE1BSmtDO0FBSzdDLGFBQVc7QUFDVEgsZ0JBQVk7QUFESDtBQUxrQyxDQUFkLEVBUTlCWSxVQUFVO0FBQ1haLGNBQVlZLE1BQU1DLFFBQU4sR0FBaUIsU0FBakIsR0FBNkI7QUFEOUIsQ0FBVixDQVI4QixDQUExQjs7OztBQVlBLE1BQU1DLHVCQUF1QjFCLG1CQUFVTyxHQUFWLENBQWM7QUFDaERKLFVBQVEsTUFEd0M7QUFFaER3QixZQUFVO0FBRnNDLENBQWQsQ0FBN0I7Ozs7QUFLQSxNQUFNQyxtQkFBbUI1QixtQkFBVU8sR0FBVixDQUFjO0FBQzVDRSxRQUFNLE1BRHNDO0FBRTVDTyxZQUFVLE1BRmtDO0FBRzVDYSxZQUFVLE1BSGtDO0FBSTVDaEIsZ0JBQWMsTUFKOEI7QUFLNUNjLFlBQVUsUUFMa0M7QUFNNUMsd0JBQXNCO0FBQ3BCRyxxQkFBa0IsU0FERTtBQUVwQkMsbUJBQWUsV0FGSztBQUdwQkMsZ0JBQWEsS0FITztBQUlwQmQsV0FBUTtBQUpZLEdBTnNCO0FBWTVDLHVCQUFxQjtBQUNuQlkscUJBQWtCO0FBREM7QUFadUIsQ0FBZCxDQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRQOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUcsYSxxQkFBTixNQUFNQSxhQUFOLFNBQTRCQyxlQUFNQyxTQUFsQyxDQUE0QztBQXFCMUNDLGNBQVlaLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsU0FzRG5CYSxtQkF0RG1CLEdBc0RHLE1BQU07QUFDMUI7QUFDQSxVQUFJLEtBQUtDLEtBQVQsRUFBZ0I7QUFDZCxhQUFLQSxLQUFMLENBQVdDLEtBQVg7QUFDRDtBQUNGLEtBM0RrQjs7QUFBQSxTQWlFbkJDLGlCQWpFbUIsR0FpRUVDLEtBQUQsSUFBVztBQUM3Qjs7Ozs7OztBQU9ELEtBekVrQjs7QUFFakIsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0Q7O0FBRURDLHNCQUFvQjtBQUNsQixRQUFJO0FBQ0Y7QUFDQSxXQUFLckIsS0FBTCxDQUFXc0Isa0JBQVgsQ0FBOEIsS0FBS3RCLEtBQUwsQ0FBV3VCLE1BQXpDO0FBQ0EsV0FBS0MsdUJBQUw7QUFDRCxLQUpELENBSUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1ZDLGNBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBQ0Y7O0FBRURHLHlCQUF1QjtBQUNyQixRQUFJO0FBQ0YsVUFBSUMsbUJBQU9DLE9BQVgsRUFBb0I7QUFDbEIsYUFBS2pCLG1CQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2tCLHVCQUFMO0FBQ0Q7QUFDRixLQU5ELENBTUUsT0FBT04sQ0FBUCxFQUFVO0FBQ1ZDLGNBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBQ0Y7O0FBRURPLG9CQUFrQjtBQUNoQixRQUFJLEtBQUtsQixLQUFULEVBQWdCO0FBQ2QsV0FBS0EsS0FBTCxDQUFXQyxLQUFYO0FBQ0Q7QUFDRjs7QUFFRCxRQUFNa0IsZUFBTixHQUF3QjtBQUN0QixVQUFNO0FBQUVWO0FBQUYsUUFBYSxLQUFLdkIsS0FBeEI7QUFDQSxVQUFNa0MsVUFBVUMsbUJBQWFDLE1BQTdCO0FBQ0EsU0FBS3RCLEtBQUwsR0FBYSxNQUFNLDZCQUFrQjtBQUFFUyxZQUFGO0FBQVVXO0FBQVYsS0FBbEIsQ0FBbkIsQ0FIc0IsQ0FLdEI7O0FBQ0EsU0FBS3BCLEtBQUwsQ0FBV3VCLEVBQVgsQ0FBY0Msa0JBQVlDLFlBQTFCLEVBQXdDQyxXQUFXO0FBQ2pELFlBQU07QUFBRUMsaUJBQVMsQ0FBQztBQUFFQztBQUFGLFNBQUQ7QUFBWCxVQUE2QkMsS0FBS0MsS0FBTCxDQUFXSixPQUFYLENBQW5DO0FBQ0EsV0FBS3hDLEtBQUwsQ0FBVzZDLFVBQVgsQ0FBc0JILE9BQXRCO0FBQ0QsS0FIRDtBQUlEOztBQUVEWCw0QkFBMEI7QUFDeEIsU0FBS0MsZUFBTDtBQUNEOztBQUVEUiw0QkFBMEI7QUFDeEIsU0FBS1MsZUFBTDtBQUNEOztBQVNEZCxtQkFBaUI7QUFDZixTQUFLbkIsS0FBTCxDQUFXOEMscUJBQVg7QUFDRDs7QUFZREMsV0FBUztBQUNQLFVBQU1DLHVCQUF3QixLQUFLaEQsS0FBTCxDQUFXaUQsaUJBQVgsR0FBK0IsQ0FBN0Q7QUFDQSxVQUFNO0FBQ0pDLDZCQURJO0FBQ3FCQywwQkFEckI7QUFDMkNMLDJCQUQzQztBQUVKdkIsWUFGSTtBQUVJNkIsY0FGSjtBQUVjSDtBQUZkLFFBR0YsS0FBS2pELEtBSFQ7QUFLQSxXQUNFLDZCQUFDLG9CQUFEO0FBQW1CLGlCQUFVO0FBQTdCLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMscUJBQUQ7QUFDRSxlQUFTLDZCQUFDLHlCQUFEO0FBQWtCLDhCQUFzQm1ELG9CQUF4QztBQUNrQixpQ0FBeUJELHVCQUQzQztBQUVrQixnQkFBUTNCO0FBRjFCLFFBRFg7QUFJRSxnQkFBVSxJQUpaO0FBS0Usc0JBQWdCO0FBTGxCLE9BT0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsMEJBQUQ7QUFBbUIsZUFBUTtBQUEzQixNQURGLEVBRUUsNkJBQUMseUJBQUQ7QUFDRSxjQUFRQSxNQURWO0FBRUUsZ0JBQVU2QixRQUZaO0FBR0UsNEJBQXNCSixvQkFIeEI7QUFJRSw2QkFBdUJGLHFCQUp6QjtBQUtFLHlCQUFtQkc7QUFMckIsTUFGRixDQVBGLENBREYsQ0FERixDQURGO0FBd0JEOztBQS9IeUMsQyxTQUNuQ0ksUyxHQUFZO0FBQ2pCOUIsVUFBUStCLG1CQUFVQyxTQUFWLENBQW9CLENBQzFCRCxtQkFBVUUsTUFEZ0IsRUFFMUJGLG1CQUFVRyxNQUZnQixDQUFwQixFQUdMQyxVQUpjO0FBS2pCUiwyQkFBeUJJLG1CQUFVRSxNQUxsQjtBQU1qQkosWUFBVUUsbUJBQVVLLEtBTkg7QUFPakJWLHFCQUFtQkssbUJBQVVFLE1BQVYsQ0FBaUJFLFVBUG5CO0FBU2pCWix5QkFBdUJRLG1CQUFVTSxJQUFWLENBQWVGLFVBVHJCO0FBVWpCYixjQUFZUyxtQkFBVU0sSUFBVixDQUFlRixVQVZWO0FBV2pCcEMsc0JBQW9CZ0MsbUJBQVVNLElBQVYsQ0FBZUYsVUFYbEI7QUFZakJQLHdCQUFzQkcsbUJBQVVNLElBQVYsQ0FBZUY7QUFacEIsQyxTQWVaRyxZLEdBQWU7QUFDcEJULFlBQVUsRUFEVTtBQUVwQkYsMkJBQXlCWTtBQUZMLEM7ZUFrSFRyRCxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJZjs7QUFDQTs7QUFFQTs7QUFHQTs7OztBQUtBLE1BQU1zRCxtQkFBbUIsQ0FBQztBQUNFYix5QkFERjtBQUVFQyxzQkFGRjtBQUdFNUI7QUFIRixDQUFELEtBSU87QUFDOUIsUUFBTXlDLGNBQWMsTUFBTTtBQUN4QixRQUFJZCx1QkFBSixFQUE2QjtBQUMzQkMsMkJBQXFCNUIsTUFBckI7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsU0FDRSw2QkFBQywyQkFBRDtBQUEwQixhQUFTeUM7QUFBbkMsS0FDRSw2QkFBQywyQkFBRDtBQUF1QixlQUFVO0FBQWpDLElBREYsRUFHS2QsdUJBQUQsR0FDSSw2QkFBQyxxQkFBRCxRQUVHQSx1QkFBRCxHQUE0QixFQUE1QixHQUFpQyxLQUFqQyxHQUEwQyxHQUFFQSx1QkFBd0IsRUFGdEUsQ0FESixHQU1JLElBVFIsQ0FERjtBQWNELENBekJEOztBQTJCQWEsaUJBQWlCVixTQUFqQixHQUE2QjtBQUMzQjlCLFVBQVErQixtQkFBVUcsTUFBVixDQUFpQkMsVUFERTtBQUUzQlIsMkJBQXlCSSxtQkFBVUUsTUFBVixDQUFpQkUsVUFGZjtBQUczQlAsd0JBQXNCRyxtQkFBVU0sSUFBVixDQUFlRjtBQUhWLENBQTdCO2VBTWVLLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDZjs7QUFDQTs7QUFDQTs7QUFFQTs7QUFJQTs7QUFDQTs7OztBQUVBLE1BQU1FLG1CQUFtQixDQUFDO0FBQUV6QjtBQUFGLENBQUQsS0FDdkIsNkJBQUMsaUJBQUQ7QUFBTSxNQUFJQSxRQUFRMEI7QUFBbEIsR0FDRSw2QkFBQyxnQkFBRCxRQUNFLDZCQUFDLG9CQUFEO0FBQW1CLGFBQVU7QUFBN0IsR0FDRTtBQUFLLGFBQVU7QUFBZixHQUNFLDZCQUFDLGVBQUQ7QUFBUSxhQUFXMUIsUUFBUTJCLFFBQTNCO0FBQXFDLFFBQU0zQixRQUFRNEIsSUFBUixJQUFnQjtBQUEzRCxFQURGLENBREYsRUFJRTtBQUFHLGFBQVU7QUFBYixHQUFnRDVCLFFBQVE2QixJQUF4RCxDQUpGLEVBS0U7QUFBRyxhQUFVO0FBQWIsR0FBb0QsMkJBQVk3QixRQUFROEIsSUFBcEIsQ0FBcEQsQ0FMRixDQURGLENBREYsQ0FERjs7QUFjQUwsaUJBQWlCWixTQUFqQixHQUE2QjtBQUMzQmIsV0FBU2MsbUJBQVVpQixNQUFWLENBQWlCYjtBQURDLENBQTdCO2VBSWVPLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCZjs7QUFDQTs7QUFFQTs7QUFHQTs7OztBQUVBLE1BQU1PLG1CQUFtQixDQUFDO0FBQ0VwQixVQURGO0FBRUVKLHNCQUZGO0FBR0VGLHVCQUhGO0FBSUV2QjtBQUpGLENBQUQsS0FLTztBQUM5QixNQUFJLENBQUM2QixTQUFTcUIsTUFBZCxFQUFzQjtBQUNwQixXQUNFLDZCQUFDLHVCQUFEO0FBQXNCLGlCQUFVO0FBQWhDLE9BQ0U7QUFBRyxpQkFBVTtBQUFiLG1EQURGLENBREY7QUFLRDs7QUFDRCxTQUNFLDZCQUFDLHVCQUFEO0FBQXNCLGVBQVU7QUFBaEMsS0FFSXJCLFNBQVNzQixNQUFULENBQWdCbEMsV0FBWUEsUUFBUTZCLElBQVIsSUFBZ0I3QixRQUFRNkIsSUFBUixDQUFhTSxJQUFiLEdBQW9CRixNQUFwQixLQUErQixDQUEzRSxFQUErRUcsR0FBL0UsQ0FBbUZwQyxXQUNqRiw2QkFBQyx5QkFBRDtBQUFrQixTQUFLQSxRQUFRcUMsRUFBL0I7QUFBbUMsYUFBU3JDO0FBQTVDLElBREYsQ0FGSixFQU9LUSxvQkFBRCxHQUNJO0FBQUssZUFBVTtBQUFmLEtBQ0E7QUFBUSxlQUFVLDRCQUFsQjtBQUErQyxhQUFTLE1BQU1GLHNCQUFzQnZCLE1BQXRCO0FBQTlELEtBQ0U7QUFBTSxlQUFVO0FBQWhCLElBREYsMkJBREEsQ0FESixHQU9JLElBZFIsQ0FERjtBQW1CRCxDQWhDRDs7QUFrQ0FpRCxpQkFBaUJuQixTQUFqQixHQUE2QjtBQUMzQkQsWUFBVUUsbUJBQVVLLEtBRE87QUFFM0JYLHdCQUFzQk0sbUJBQVV3QixJQUZMO0FBRzNCaEMseUJBQXVCUSxtQkFBVU0sSUFBVixDQUFlRixVQUhYO0FBSTNCbkMsVUFBUStCLG1CQUFVQyxTQUFWLENBQW9CLENBQzFCRCxtQkFBVUUsTUFEZ0IsRUFFMUJGLG1CQUFVRyxNQUZnQixDQUFwQixFQUVhQztBQU5NLENBQTdCO0FBU0FjLGlCQUFpQlgsWUFBakIsR0FBZ0M7QUFDOUJULFlBQVUsRUFEb0I7QUFFOUJKLHdCQUFzQjtBQUZRLENBQWhDO2VBS2V3QixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGY7O0FBQ0E7O0FBRUE7O0FBT0E7O0FBTUE7O0FBQ0E7Ozs7QUFFQSxTQUFTTyxlQUFULENBQXlCN0QsS0FBekIsRUFBZ0M7QUFDOUIsU0FBTztBQUNMa0MsY0FBVSwwQkFBWWxDLEtBQVosQ0FETDtBQUVMZ0MsNkJBQXlCLHlDQUEyQmhDLEtBQTNCLENBRnBCO0FBR0w4RCxnQkFBWSxrQ0FBb0I5RCxLQUFwQixDQUhQO0FBSUwrQix1QkFBbUIsbUNBQXFCL0IsS0FBckIsQ0FKZDtBQUtMSyxZQUFRLDBCQUFlTCxLQUFmLEVBQXNCMkQsRUFMekIsQ0FLNEI7O0FBTDVCLEdBQVA7QUFPRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMNUQsd0JBQW9CQyxVQUFVMkQsU0FBUywrQkFBa0IzRCxNQUFsQixDQUFULENBRHpCO0FBRUx1QiwyQkFBdUJ2QixVQUFVMkQsU0FBUyxtQ0FBc0IzRCxNQUF0QixDQUFULENBRjVCO0FBR0xzQixnQkFBWUwsV0FBVzBDLFNBQVMsd0JBQVcxQyxPQUFYLENBQVQsQ0FIbEI7QUFJTDJDLHFCQUFpQjVELFVBQVUyRCxTQUFTLDZCQUFnQjNELE1BQWhCLENBQVQsQ0FKdEI7QUFLTDRCLDBCQUFzQjVCLFVBQVUyRCxTQUFTLGtDQUFxQjNELE1BQXJCLENBQVQ7QUFMM0IsR0FBUDtBQU9EOztBQUVELE1BQU02RCxZQUFZLDZCQUFXLHlCQUFRTCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkN4RSxzQkFBN0MsQ0FBWCxDQUFsQjtlQUVlO0FBQ2IyRTtBQURhLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENmOzs7O0FBREE7QUFHTyxNQUFNQyxhQUFhN0csbUJBQVVPLEdBQVYsQ0FBYztBQUN0QztBQUNBTCxTQUFPLG1CQUYrQjtBQUd0Q08sUUFBTSxNQUhnQztBQUl0Q0QsT0FBSyxNQUppQztBQUt0Q3NHLFVBQVEsTUFMOEI7QUFNdEMsYUFBVztBQUNUekcsY0FBVTtBQURELEdBTjJCO0FBU3RDLG9CQUFrQjtBQUNoQkQsYUFBUyxPQURPO0FBRWhCRixXQUFNLE1BRlU7QUFHaEJDLFlBQU8sTUFIUztBQUloQkUsY0FBUyxVQUpPO0FBS2hCUyxXQUFNLEtBTFU7QUFNaEJOLFNBQUksS0FOWTtBQU9oQnVHLFlBQVEsU0FQUTtBQVFoQix5QkFBc0I7QUFDcEI3QyxlQUFTLE9BRFc7QUFFcEI3RCxnQkFBVSxVQUZVO0FBR3BCSSxZQUFNLEtBSGM7QUFJcEJELFdBQUssTUFKZTtBQUtwQk4sYUFBTSxNQUxjO0FBTXBCQyxjQUFPLEtBTmE7QUFPcEJTLGtCQUFXLE1BUFM7QUFRcEJGLGlCQUFXO0FBUlMsS0FSTjtBQWtCaEIsZUFBWTtBQUNWQSxpQkFBVztBQUREO0FBbEJJLEdBVG9CO0FBK0J0QyxnQkFBYztBQUNaWSxhQUFTLE1BREc7QUFFWjBGLGtCQUFjLE1BRkY7QUFHWjlGLFdBQU8sTUFISztBQUlaK0YsWUFBUSxnQkFKSTtBQUtackcsZ0JBQVksU0FMQTtBQU1aQyxrQkFBYyxLQU5GO0FBT1pNLGNBQVUsTUFQRTtBQVFaLHFCQUFpQjtBQUNmRCxhQUFPLFNBRFE7QUFFZmdHLG1CQUFhLFNBRkU7QUFHZnRHLGtCQUFZLFNBSEc7QUFJZixxREFBK0M7QUFDN0NBLG9CQUFZO0FBRGlDO0FBSmhDLEtBUkw7QUFnQlosc0JBQWtCO0FBQ2hCTSxhQUFPLFNBRFM7QUFFaEJnRyxtQkFBYSxTQUZHO0FBR2hCdEcsa0JBQVksU0FISTtBQUloQixxREFBZ0Q7QUFDOUNBLG9CQUFXO0FBRG1DO0FBSmhDLEtBaEJOO0FBd0JaLG9CQUFnQjtBQUNkTSxhQUFPLFNBRE87QUFFZGdHLG1CQUFhLFNBRkM7QUFHZHRHLGtCQUFZLFNBSEU7QUFJZCxxREFBZ0Q7QUFDOUNBLG9CQUFXO0FBRG1DO0FBSmxDLEtBeEJKO0FBZ0NaLHdCQUFvQjtBQUNsQk0sYUFBTyxTQURXO0FBRWxCZ0csbUJBQWEsU0FGSztBQUdsQnRHLGtCQUFZLFNBSE07QUFJbEIscURBQWdEO0FBQzlDQSxvQkFBVztBQURtQztBQUo5QjtBQWhDUjtBQS9Cd0IsQ0FBZCxDQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JxQnVHLE0scUJBQU4sTUFBTUEsTUFBTixTQUFxQmpGLGVBQU1DLFNBQTNCLENBQXFDO0FBVWxEOzs7Ozs7QUFZQUMsY0FBWVosS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS2tCLEtBQUwsR0FBYTtBQUNYMEUsb0JBQWM1RixNQUFNNEY7QUFEVCxLQUFiO0FBR0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCekUsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDRDs7QUFFREMsc0JBQW9CO0FBQ2xCLFFBQUksS0FBS0gsS0FBTCxDQUFXMEUsWUFBZixFQUE2QjtBQUMzQixXQUFLRSxVQUFMO0FBQ0Q7QUFDRjs7QUFFREMsbUNBQWlDQyxTQUFqQyxFQUE0QztBQUMxQyxRQUFJLENBQUMsS0FBS2hHLEtBQUwsQ0FBVzRGLFlBQVosSUFBNEJJLFVBQVVKLFlBQTFDLEVBQXdEO0FBQ3RELFdBQUtFLFVBQUw7QUFDRDtBQUNGOztBQUVEQSxlQUFhO0FBQ1gsU0FBS0csUUFBTCxDQUFjO0FBQUVMLG9CQUFjO0FBQWhCLEtBQWQsRUFBc0MsTUFBTTtBQUMxQyxVQUFJLEtBQUs1RixLQUFMLENBQVdrRyxPQUFYLElBQXNCLEtBQUtsRyxLQUFMLENBQVdtRyxZQUFyQyxFQUFtRDtBQUNqREMsbUJBQVcsTUFBTTtBQUNmLGVBQUtQLFdBQUw7QUFDRCxTQUZELEVBRUcsS0FBSzdGLEtBQUwsQ0FBV2tHLE9BRmQ7QUFHRDtBQUNGLEtBTkQ7QUFPRDs7QUFFREwsZ0JBQWM7QUFDWixTQUFLSSxRQUFMLENBQWM7QUFBRUwsb0JBQWM7QUFBaEIsS0FBZDtBQUNBLFNBQUs1RixLQUFMLENBQVdxRyxVQUFYO0FBQ0Q7O0FBRUR0RCxXQUFTO0FBQ1AsVUFBTTtBQUFFdUQsVUFBRjtBQUFROUQ7QUFBUixRQUFvQixLQUFLeEMsS0FBL0I7QUFFQSxXQUFPLEtBQUtrQixLQUFMLENBQVcwRSxZQUFYLElBQTJCcEQsT0FBM0IsR0FDTCw2QkFBQyxhQUFEO0FBQVksaUJBQVU7QUFBdEIsT0FDRTtBQUFLLGlCQUFZLFdBQVU4RCxJQUFLO0FBQWhDLE9BQ0U7QUFBSyxpQkFBVTtBQUFmLE9BQ0c5RCxPQURILEVBRUU7QUFBTSxpQkFBVSxhQUFoQjtBQUE4QixlQUFTLEtBQUtxRDtBQUE1QyxNQUZGLENBREYsQ0FERixDQURLLEdBU0gsSUFUSjtBQVVEOztBQXRFaUQsQyxTQUMzQ3hDLFMsR0FBWTtBQUNqQmlELFFBQU1oRCxxQkFBVUcsTUFEQztBQUVqQmpCLFdBQVNjLHFCQUFVRyxNQUZGO0FBR2pCeUMsV0FBUzVDLHFCQUFVRSxNQUhGO0FBSWpCb0MsZ0JBQWN0QyxxQkFBVXdCLElBSlA7QUFLakJ1QixjQUFZL0MscUJBQVVNLElBQVYsQ0FBZUYsVUFMVjtBQU1qQnlDLGdCQUFjN0MscUJBQVV3QjtBQU5QLEMsU0FlWmpCLFksR0FBZTtBQUNwQnlDLFFBQU0sWUFEYztBQUVwQlYsZ0JBQWMsS0FGTTtBQUdwQk8sZ0JBQWM7QUFITSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDeEI7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7ZUFFZSw2QkFBVyx5QkFDeEJqRixVQUFVO0FBQ1JvRixRQUFNcEYsTUFBTXFGLE1BQU4sQ0FBYUQsSUFEWDtBQUVSOUQsV0FBU3RCLE1BQU1xRixNQUFOLENBQWEvRCxPQUZkO0FBR1JvRCxnQkFBYzFFLE1BQU1xRixNQUFOLENBQWFYLFlBSG5CO0FBSVJPLGdCQUFjakYsTUFBTXFGLE1BQU4sQ0FBYUo7QUFKbkIsQ0FBVixDQUR3QixFQU94QjtBQUNFRTtBQURGLENBUHdCLEVBVXhCVixlQVZ3QixDQUFYLEMiLCJmaWxlIjoiUWRwfnJscC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdOb3RpZmljYXRpb25CZWxsID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzI0cHgnLFxuICBoZWlnaHQ6ICcyNHB4JyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHTm90aWZpY2F0aW9uQmVsbEljb25EaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgd2lkdGg6ICcxOHB4JyxcbiAgaGVpZ2h0OiAnMThweCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICc1MCUnLFxuICBsZWZ0OiAnNTAlJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgR05vdGlmaWNhdGlvbkNvdW50ID0gZ2xhbW9yb3VzLnNwYW4oe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYmFja2dyb3VuZDogJyNmZTUyNDYnLFxuICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgdG9wOiAnLTVweCcsXG4gIHJpZ2h0OiAnLTVweCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIG1pbldpZHRoOiAnMTVweCcsXG4gIGhlaWdodDogJzE1cHgnLFxuICBsaW5lSGVpZ2h0OiAnMTVweCcsXG4gIGNvbG9yOiAnI2ZmZmZmZicsXG4gIGZvbnRTaXplOiAnMTBweCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdOb3RpZmljYXRpb24gPSBnbGFtb3JvdXMuZGl2KHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdOb3RpZmljYXRpb25EYXRhID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBhZGRpbmc6ICcxNXB4IDE1cHggMTVweCA3MHB4JyxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgJyY6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICB9XG59LCBwcm9wcyA9PiAoe1xuICBiYWNrZ3JvdW5kOiBwcm9wcy5pc1ZpZXdlZCA/ICcjZmZmZmZmJyA6ICcjZmZmZmZmJyxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IEdOb3RpZmljYXRpb25MaXN0RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHTm90aWZpY2F0aW9uSW1nID0gZ2xhbW9yb3VzLmRpdih7XG4gIGxlZnQ6ICcxNXB4JyxcbiAgbWluV2lkdGg6ICc1MHB4JyxcbiAgbWF4V2lkdGg6ICc1MHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgJyYgLmFnZW50LXVzZXItbmFtZSc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnIzIxOTZGMycsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFdlaWdodCA6ICc3MDAnLFxuICAgIGNvbG9yIDogJyNmZmYnLFxuICB9LFxuICAnJiAuYWdlbnQtdXNlci1pbWcnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yIDogJyMyMTk2RjMnLFxuICB9XG5cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEdOb3RpZmljYXRpb25CZWxsIH0gZnJvbSAnLi9HJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwQ29uZmlnJztcbmltcG9ydCB7IGdldFJ0bXNDb25uZWN0aW9uLCBNZXNzYWdlVHlwZSwgUnRtc0NoYW5uZWxzIH0gZnJvbSAnaGVscGVycy9ydG1zJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IE1vZGFsSGVhZGVyQ3VzdG9tIGZyb20gJ21vZHVsZXMvc2hhcmVkL2hlYWRlcnMvTW9kYWxIZWFkZXJDdXN0b20nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkJlbGwgZnJvbSAnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkJlbGwnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkxpc3QgZnJvbSAnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkxpc3QnO1xuXG5jbGFzcyBOb3RpZmljYXRpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB1c2VySWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmddKVxuICAgICAgLmlzUmVxdWlyZWQsXG4gICAgdW5yZWFkTm90aWZpY2F0aW9uQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWVzc2FnZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICByZW1haW5pbmdNZXNzYWdlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgbG9hZE1vcmVOb3RpZmljYXRpb25zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGFkZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZmV0Y2hOb3RpZmljYXRpb25zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG1hcmtOb3RpZmljYXRpb25SZWFkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIHVucmVhZE5vdGlmaWNhdGlvbkNvdW50OiB1bmRlZmluZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5oYW5kbGVMb2FkTW9yZSA9IHRoaXMuaGFuZGxlTG9hZE1vcmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBsb2FkIG5vdGlmaWNhdGlvbnNcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hOb3RpZmljYXRpb25zKHRoaXMucHJvcHMudXNlcklkKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Ob3RpZmljYXRpb24oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGNvbmZpZy51c2VSdG1zKSB7XG4gICAgICAgIHRoaXMuZGlzcG9zZUV4aXN0aW5nUnRtcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZU5vdGlmaWNhdGlvbigpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlUnRtcygpIHtcbiAgICBpZiAodGhpcy5ydG1zXykge1xuICAgICAgdGhpcy5ydG1zXy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN1YnNjcmliZVRvUnRtcygpIHtcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGFubmVsID0gUnRtc0NoYW5uZWxzLlNZU1RFTTtcbiAgICB0aGlzLnJ0bXNfID0gYXdhaXQgZ2V0UnRtc0Nvbm5lY3Rpb24oeyB1c2VySWQsIGNoYW5uZWwgfSk7XG5cbiAgICAvLyBOb3RpZmljYXRpb24gbWVzc2FnZSBoYXMgY29tZVxuICAgIHRoaXMucnRtc18ub24oTWVzc2FnZVR5cGUuTk9USUZJQ0FUSU9OLCBtZXNzYWdlID0+IHtcbiAgICAgIGNvbnN0IHsgcGF5bG9hZDogW3sgY29udGVudCB9XSB9ID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcbiAgICAgIHRoaXMucHJvcHMuYWRkTWVzc2FnZShjb250ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVuU3Vic2NyaWJlTm90aWZpY2F0aW9uKCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmVSdG1zKCk7XG4gIH1cblxuICBzdWJzY3JpYmVUb05vdGlmaWNhdGlvbigpIHtcbiAgICB0aGlzLnN1YnNjcmliZVRvUnRtcygpO1xuICB9XG5cbiAgZGlzcG9zZUV4aXN0aW5nUnRtcyA9ICgpID0+IHtcbiAgICAvLyBjbG9zZSB3ZWIgc29ja2V0IGNvbm5lY3Rpb24gYW5kIHJlbW92ZSBhbGwgbGlzdG5lcnNcbiAgICBpZiAodGhpcy5ydG1zXykge1xuICAgICAgdGhpcy5ydG1zXy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVMb2FkTW9yZSgpIHtcbiAgICB0aGlzLnByb3BzLmxvYWRNb3JlTm90aWZpY2F0aW9ucygpO1xuICB9XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAvKnRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICBjYXRlZ29yeTogJ1RoZSBjb25jZXJuZWQgcGFnZScsXG4gICAgICBzZWN0aW9uOiAnR2xvYmFsIE1lbnUnLFxuICAgICAgb2JqZWN0OiAnJyxcbiAgICAgIGN0YTogJ05vdGlmaWNhdGlvbiBiZWxsJyxcbiAgICB9KTsqL1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBub3RpZmljYXRpb25zUHJlc2VudCA9ICh0aGlzLnByb3BzLnJlbWFpbmluZ01lc3NhZ2VzID4gMCk7XG4gICAgY29uc3Qge1xuICAgICAgdW5yZWFkTm90aWZpY2F0aW9uQ291bnQsIG1hcmtOb3RpZmljYXRpb25SZWFkLCBsb2FkTW9yZU5vdGlmaWNhdGlvbnMsXG4gICAgICB1c2VySWQsIG1lc3NhZ2VzLCByZW1haW5pbmdNZXNzYWdlc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxHTm90aWZpY2F0aW9uQmVsbCBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgYXRfbm9maWZpY2F0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWhvdmVyLWJveCByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgdHJpZ2dlcj17PE5vdGlmaWNhdGlvbkJlbGwgbWFya05vdGlmaWNhdGlvblJlYWQ9e21hcmtOb3RpZmljYXRpb25SZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZWFkTm90aWZpY2F0aW9uQ291bnQ9e3VucmVhZE5vdGlmaWNhdGlvbkNvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXt1c2VySWR9IC8+fVxuICAgICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnMtaGVhZCBhYnNvbHV0ZSB3ZnVsbCBoZnVsbCBmbGV4IGZsZXhEQ29sdW1uIHBiNDhcIj5cbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyQ3VzdG9tIGhlYWRpbmc9J05vdGlmaWNhdGlvbnMnIC8+XG4gICAgICAgICAgICAgIDxOb3RpZmljYXRpb25MaXN0XG4gICAgICAgICAgICAgICAgdXNlcklkPXt1c2VySWR9XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnNQcmVzZW50PXtub3RpZmljYXRpb25zUHJlc2VudH1cbiAgICAgICAgICAgICAgICBsb2FkTW9yZU5vdGlmaWNhdGlvbnM9e2xvYWRNb3JlTm90aWZpY2F0aW9uc31cbiAgICAgICAgICAgICAgICByZW1haW5pbmdNZXNzYWdlcz17cmVtYWluaW5nTWVzc2FnZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR05vdGlmaWNhdGlvbkJlbGw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIE5vdGlmaWNhdGlvbkljb25XaGl0ZSxcbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHtcbiAgR05vdGlmaWNhdGlvbkJlbGxJY29uRGl2LFxuICBHTm90aWZpY2F0aW9uQ291bnQsXG59IGZyb20gJy4uL0cnO1xuXG5jb25zdCBOb3RpZmljYXRpb25CZWxsID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnJlYWROb3RpZmljYXRpb25Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrTm90aWZpY2F0aW9uUmVhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBjb25zdCBvbkJlbGxDbGljayA9ICgpID0+IHtcbiAgICBpZiAodW5yZWFkTm90aWZpY2F0aW9uQ291bnQpIHtcbiAgICAgIG1hcmtOb3RpZmljYXRpb25SZWFkKHVzZXJJZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdOb3RpZmljYXRpb25CZWxsSWNvbkRpdiBvbkNsaWNrPXtvbkJlbGxDbGlja30+XG4gICAgICA8Tm90aWZpY2F0aW9uSWNvbldoaXRlIGNsYXNzTmFtZT1cImFic29sdXRlLWNlbnRlci12IGwwXCIgLz5cbiAgICAgIHtcbiAgICAgICAgKHVucmVhZE5vdGlmaWNhdGlvbkNvdW50KVxuICAgICAgICAgID8gPEdOb3RpZmljYXRpb25Db3VudD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgKHVucmVhZE5vdGlmaWNhdGlvbkNvdW50KSA+IDk5ID8gJzk5KycgOiBgJHt1bnJlYWROb3RpZmljYXRpb25Db3VudH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9HTm90aWZpY2F0aW9uQ291bnQ+XG4gICAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9HTm90aWZpY2F0aW9uQmVsbEljb25EaXY+XG4gICk7XG59O1xuXG5Ob3RpZmljYXRpb25CZWxsLnByb3BUeXBlcyA9IHtcbiAgdXNlcklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVucmVhZE5vdGlmaWNhdGlvbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1hcmtOb3RpZmljYXRpb25SZWFkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25CZWxsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHtcbiAgR05vdGlmaWNhdGlvbixcbiAgR05vdGlmaWNhdGlvbkRhdGFcbn0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyB0aW1lRnJvbU5vdyB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdtb2R1bGVzL3NoYXJlZC9BdmF0YXInO1xuXG5jb25zdCBOb3RpZmljYXRpb25DYXJkID0gKHsgbWVzc2FnZSB9KSA9PiAoXG4gIDxMaW5rIHRvPXttZXNzYWdlLnVybH0+XG4gICAgPEdOb3RpZmljYXRpb24+ey8qIChtZXNzYWdlLnJlYWQpID8gaXNWaWV3ZWQgOiAnJyAqL31cbiAgICAgIDxHTm90aWZpY2F0aW9uRGF0YSBjbGFzc05hbWU9XCJidFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGwxNVwiPlxuICAgICAgICAgIDxBdmF0YXIgaW1hZ2VQYXRoPXttZXNzYWdlLmltYWdlVXJsfSBuYW1lPXttZXNzYWdlLm5hbWUgfHwgJyd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwZmMzIGYxNHAgbTAgYXRfbm90aWZpY2F0aW9uVHh0XCI+e21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBmYzQgZjEyIG0wIG10NCBhdF9ub3RpZmljYXRpb25UaW1lXCI+e3RpbWVGcm9tTm93KG1lc3NhZ2UudGltZSl9PC9wPlxuICAgICAgPC9HTm90aWZpY2F0aW9uRGF0YT5cbiAgICA8L0dOb3RpZmljYXRpb24+XG4gIDwvTGluaz5cbik7XG5cbk5vdGlmaWNhdGlvbkNhcmQucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25DYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIEdOb3RpZmljYXRpb25MaXN0RGl2XG59IGZyb20gJy4uL0cnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNhcmQgZnJvbSAnLi9Ob3RpZmljYXRpb25DYXJkJztcblxuY29uc3QgTm90aWZpY2F0aW9uTGlzdCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uc1ByZXNlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmVOb3RpZmljYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBpZiAoIW1lc3NhZ2VzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8R05vdGlmaWNhdGlvbkxpc3REaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcmVsYXRpdmUgc2JjNSBwYjQ4XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBmYzQgZjE2IG0wIGYxMiBwMTVcIj5BbGwgY2F1Z2h0IHVwISBZb3UgaGF2ZSBubyBub3RpZmljYXRpb25zLjwvcD5cbiAgICAgIDwvR05vdGlmaWNhdGlvbkxpc3REaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxHTm90aWZpY2F0aW9uTGlzdERpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCByZWxhdGl2ZSBzYmM1XCI+XG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2VzLmZpbHRlcihtZXNzYWdlID0+IChtZXNzYWdlLnRleHQgJiYgbWVzc2FnZS50ZXh0LnRyaW0oKS5sZW5ndGggIT09IDApKS5tYXAobWVzc2FnZSA9PiAoXG4gICAgICAgICAgPE5vdGlmaWNhdGlvbkNhcmQga2V5PXttZXNzYWdlLmlkfSBtZXNzYWdlPXttZXNzYWdlfSAvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAge1xuICAgICAgICAobm90aWZpY2F0aW9uc1ByZXNlbnQpXG4gICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGIwIGwwIHIwIHoyIGJzNiBzYmN3XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndmdWxsIHNmYzEgZnc3IHAxNSBjdXJzb3JQXCIgb25DbGljaz17KCkgPT4gbG9hZE1vcmVOb3RpZmljYXRpb25zKHVzZXJJZCl9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3YXZlXCIgLz5cbiAgICAgICAgICAgICAgTG9hZCBNb3JlIE5vdGlmaWNhdGlvblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9HTm90aWZpY2F0aW9uTGlzdERpdj5cbiAgKTtcbn07XG5cbk5vdGlmaWNhdGlvbkxpc3QucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlczogUHJvcFR5cGVzLmFycmF5LFxuICBub3RpZmljYXRpb25zUHJlc2VudDogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRNb3JlTm90aWZpY2F0aW9uczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXNlcklkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxufTtcblxuTm90aWZpY2F0aW9uTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIG1lc3NhZ2VzOiBbXSxcbiAgbm90aWZpY2F0aW9uc1ByZXNlbnQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uTGlzdDtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5pbXBvcnQge1xuICBsb2FkTm90aWZpY2F0aW9ucyxcbiAgbG9hZE1vcmVOb3RpZmljYXRpb25zLFxuICBhZGRNZXNzYWdlLFxuICBmZXRjaFB1Ym51YktleXMsXG4gIG1hcmtOb3RpZmljYXRpb25SZWFkXG59IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7XG4gIGdldE1lc3NhZ2VzLFxuICBnZXRVbnJlYWROb3RpZmljYXRpb25Db3VudCxcbiAgZ2V0Tm90aWZpY2F0aW9uS2V5cyxcbiAgZ2V0UmVtYWluaW5nTWVzc2FnZXMsXG59IGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgeyBnZXRVc2VyRGV0YWlscyB9IGZyb20gXCJhcHAvcmVkdWNlcnMvYXV0aFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi9Ob3RpZmljYXRpb25zJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IGdldE1lc3NhZ2VzKHN0YXRlKSxcbiAgICB1bnJlYWROb3RpZmljYXRpb25Db3VudDogZ2V0VW5yZWFkTm90aWZpY2F0aW9uQ291bnQoc3RhdGUpLFxuICAgIHB1Ym51YktleXM6IGdldE5vdGlmaWNhdGlvbktleXMoc3RhdGUpLFxuICAgIHJlbWFpbmluZ01lc3NhZ2VzOiBnZXRSZW1haW5pbmdNZXNzYWdlcyhzdGF0ZSksXG4gICAgdXNlcklkOiBnZXRVc2VyRGV0YWlscyhzdGF0ZSkuaWQgLy8nMjU0NDE1MydcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgZmV0Y2hOb3RpZmljYXRpb25zOiB1c2VySWQgPT4gZGlzcGF0Y2gobG9hZE5vdGlmaWNhdGlvbnModXNlcklkKSksXG4gICAgbG9hZE1vcmVOb3RpZmljYXRpb25zOiB1c2VySWQgPT4gZGlzcGF0Y2gobG9hZE1vcmVOb3RpZmljYXRpb25zKHVzZXJJZCkpLFxuICAgIGFkZE1lc3NhZ2U6IG1lc3NhZ2UgPT4gZGlzcGF0Y2goYWRkTWVzc2FnZShtZXNzYWdlKSksXG4gICAgZmV0Y2hQdWJudWJLZXlzOiB1c2VySWQgPT4gZGlzcGF0Y2goZmV0Y2hQdWJudWJLZXlzKHVzZXJJZCkpLFxuICAgIG1hcmtOb3RpZmljYXRpb25SZWFkOiB1c2VySWQgPT4gZGlzcGF0Y2gobWFya05vdGlmaWNhdGlvblJlYWQodXNlcklkKSksXG4gIH07XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTm90aWZpY2F0aW9ucykpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lclxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBHUm9zdGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIC8vIHRvcDogJzYwcHgnLFxuICB3aWR0aDogJ2NhbGMoMTAwJSAtIDI0cHgpJyxcbiAgbGVmdDogJzEycHgnLFxuICB0b3A6ICcxMnB4JyxcbiAgekluZGV4OiAnOTk5OScsXG4gICcmID4gZGl2Jzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICAnJiAucm9zdGVyQ2xvc2UnOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDonMjRweCcsXG4gICAgaGVpZ2h0OicyNHB4JyxcbiAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiczcHgnLFxuICAgIHRvcDonM3B4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInIDoge1xuICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnN3B4JyxcbiAgICAgIHRvcDogJzEwcHgnLFxuICAgICAgd2lkdGg6JzEycHgnLFxuICAgICAgaGVpZ2h0OicxcHgnLFxuICAgICAgYmFja2dyb3VuZDonIzAwMCcsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKDQ1ZGVnKScsXG4gICAgfSxcbiAgICAnJjphZnRlcicgOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGVaKC00NWRlZyknLFxuICAgIH0sXG4gIH0sXG4gICcmIC50b2FzdGVyJzoge1xuICAgIHBhZGRpbmc6ICcxMnB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcbiAgICBjb2xvcjogJyMzMzMnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2VmZWZlZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICcmLmVycm9yUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjY2I0MTM4JyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZkNTM0NicsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZGJkOCcsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNjYjQxMzgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLnN1Y2Vzc1Jvc3Rlcic6IHtcbiAgICAgIGNvbG9yOiAnIzI2OGYyYScsXG4gICAgICBib3JkZXJDb2xvcjogJyMyNjhmMmEnLFxuICAgICAgYmFja2dyb3VuZDogJyNkMWY2ZDInLFxuICAgICAgJyYgLnJvc3RlckNsb3NlOmJlZm9yZSwgJiAucm9zdGVyQ2xvc2U6YWZ0ZXInIDoge1xuICAgICAgICBiYWNrZ3JvdW5kOicjMjY4ZjJhJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJi5pbmZvUm9zdGVyJzoge1xuICAgICAgY29sb3I6ICcjMWE3OGMyJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzIxOTZmMycsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2Q4ZThmYicsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMxYTc4YzInLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLndhcm5pbmdUb2FzdGVyJzoge1xuICAgICAgY29sb3I6ICcjM2UzZTNlJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI2ZhYzIyZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZiZjJkYycsXG4gICAgICAnJiAucm9zdGVyQ2xvc2U6YmVmb3JlLCAmIC5yb3N0ZXJDbG9zZTphZnRlcicgOiB7XG4gICAgICAgIGJhY2tncm91bmQ6JyMzZTNlM2UnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEdSb3N0ZXJEaXYgfSBmcm9tICcuL0cnO1xuXG4vKipcbiAqIFJvc3RlciBpcyB0byBkaXNwbGF5IG1lc3NhZ2VzIGZvciBkeW5hbWljIGxheW91dHMuXG4gKiAtIHJvc3RlclR5cGUgLSBTdHJpbmc6IERlZmluZXMgdHlwZSBvZiBtZXNzYWdlLiBDdXJyZW50bHkgd2Ugc3VwcG9ydFxuICogcm9zdGVyU3VjY2Vzcywgcm9zdGVyRXJyb3IgYW5kIHJvc3RlckluZm9cbiAqIC0gdGV4dCAtIFN0cmluZyBbb3B0aW9uYWxdOiBTaW5nbGUgbGluZSBtZXNzYWdlIGZvciB1c2VyLlxuICogLSBtZXNzYWdlIC0gT2JqZWN0IFtvcHRpb25hbF06IEZvciBtb3JlIGNvbXBsZXggbWVzc2FnZXMgd2hpY2ggbWlnaHQgY29udGFpbiBsaW5rIGZvciB1c2VyIGFjdGlvbi5cbiAqIEZvciBleDoge1xuICogICAgIGhlYWRlcjogXCJOZXcgdHJpcCBjcmVhdGVkIVwiLFxuICogICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGFjdGl2YXRlIHlvdXIgZW1haWwgYWRkcmVzcy4gVG8gcmVzZW5kIGFjdGl2YXRpb24gbWFpbCB7e3NlbmRfYWN0aXZhdGlvbl9tYWlsfX1cIixcbiAqICAgICBsaW5rczogW3t0eXBlOiAnc2VuZF9hY3RpdmF0aW9uX21haWwnLCBsYWJlbDogJ0NsaWNrIGhlcmUnfSBdXG4gKiAgIH1cbiAqIC0gdGltZW91dCAtIE51bWJlciBbb3B0aW9uYWxdOiBpZiBwcm92aWRlZCwgTWVzc2FnZSB3aWxsIGRpc2FwcGVhciBhZnRlciB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICogLSBjYWxsYmFjayAtIEZ1bmN0aW9uIFtvcHRpb25hbF06IENhbGxiYWNrIHRvIHBhc3MgZXZlbnQgYmFzZWQgb24gd2hpY2ggYWN0aW9uIGlzIHRvIGJlIGNhbGxlZCBieSBwYXJlbnQuXG4gKlxuICogIFAuUy4gLSBFaXRoZXIgcm9zdGVyVGV4dCBvciByb3N0ZXJNZXNzYWdlIHNob3VsZCBiZSBwcmVzZW50LiBJZiBib3RoIGFyZSBwcmVzZW50IHJvc3RlclRleHQgd291bGQgaGF2ZSBwcmlvcml0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9zdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpc1Jvc3Rlck9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGhpZGVSb3N0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWxsb3dUaW1lT3V0OiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIC8qKlxuICAgKiByb3N0ZXJUeXBlIGNvdWxkIGhhdmUgdHdvIHR5cGVzOlxuICAgKiAgLSBzdWNlc3NSb3N0ZXJcbiAgICogIC0gZXJyb3JSb3N0ZXJcbiAgICogIC0gaW5mb1Jvc3RlclxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnaW5mb1Jvc3RlcicsXG4gICAgaXNSb3N0ZXJPcGVuOiBmYWxzZSxcbiAgICBhbGxvd1RpbWVPdXQ6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNSb3N0ZXJPcGVuOiBwcm9wcy5pc1Jvc3Rlck9wZW5cbiAgICB9O1xuICAgIHRoaXMuY2xvc2VSb3N0ZXIgPSB0aGlzLmNsb3NlUm9zdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Jvc3Rlck9wZW4pIHtcbiAgICAgIHRoaXMuc2hvd1Jvc3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc1Jvc3Rlck9wZW4gJiYgbmV4dFByb3BzLmlzUm9zdGVyT3Blbikge1xuICAgICAgdGhpcy5zaG93Um9zdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1Jvc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNSb3N0ZXJPcGVuOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRpbWVvdXQgJiYgdGhpcy5wcm9wcy5hbGxvd1RpbWVPdXQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVJvc3RlcigpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VSb3N0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzUm9zdGVyT3BlbjogZmFsc2UgfSk7XG4gICAgdGhpcy5wcm9wcy5oaWRlUm9zdGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNSb3N0ZXJPcGVuICYmIG1lc3NhZ2UgPyAoXG4gICAgICA8R1Jvc3RlckRpdiBjbGFzc05hbWU9XCJmaXhlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvYXN0ZXIgJHt0eXBlfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGR5bmFtaWNUZXh0SW5oZXJpdCBwMFwiPlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3N0ZXJDbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VSb3N0ZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9HUm9zdGVyRGl2PlxuICAgICkgOiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBzaG93Um9zdGVyLCBoaWRlUm9zdGVyIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IFJvc3RlciBmcm9tICcuL1Jvc3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB0eXBlOiBzdGF0ZS5yb3N0ZXIudHlwZSxcbiAgICBtZXNzYWdlOiBzdGF0ZS5yb3N0ZXIubWVzc2FnZSxcbiAgICBpc1Jvc3Rlck9wZW46IHN0YXRlLnJvc3Rlci5pc1Jvc3Rlck9wZW4sXG4gICAgYWxsb3dUaW1lT3V0OiBzdGF0ZS5yb3N0ZXIuYWxsb3dUaW1lT3V0XG4gIH0pLFxuICB7XG4gICAgaGlkZVJvc3RlclxuICB9XG4pKFJvc3RlcikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==