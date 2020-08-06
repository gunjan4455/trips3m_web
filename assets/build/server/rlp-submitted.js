require("source-map-support").install();
exports.ids = ["rlp-submitted"];
exports.modules = {

/***/ "./app-v2/modules/rlp/leadSubmittedStage/LeadSubmittedStage.js":
/*!*********************************************************************!*\
  !*** ./app-v2/modules/rlp/leadSubmittedStage/LeadSubmittedStage.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _application = __webpack_require__(/*! constants/application */ "./app/constants/application.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _RequestProcessingCard = _interopRequireDefault(__webpack_require__(/*! ./components/RequestProcessingCard */ "./app-v2/modules/rlp/leadSubmittedStage/components/RequestProcessingCard.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _cancelRequest = _interopRequireDefault(__webpack_require__(/*! modules/trip/cancelRequest */ "./app-v2/modules/trip/cancelRequest/index.js"));

var _rosterTypes = __webpack_require__(/*! constants/rosterTypes */ "./app/constants/rosterTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const DUPLICATE_TRIP_MSG = 'Looks like you have already put a request for this destination';
let LeadSubmittedStage = class LeadSubmittedStage extends _react.Component {
  constructor(props) {
    super(props);

    this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    };

    this.callbackHandler = type => {
      const {
        currentTripId,
        reactivateBooking,
        sendActivationMail
      } = this.props;

      switch (type) {
        case 'Reactivate_Booking':
          reactivateBooking({
            tripId: currentTripId
          });
          break;

        case 'Resend_Confirmation':
          sendActivationMail(currentTripId);
      }
    };

    this.getIcon = link => {
      switch (link.type) {
        case 'reactivate_requested_trip':
          return 'REACTIVATE_TRIP';

        case 'send_activation_mail':
          return 'INACTIVE_USER';

        case 'edit_requested_trip':
          return 'INCOMPLETE_INFO';

        default:
          return 'DEFAULT';
      }
    };

    this.getCta = link => {
      const {
        currentTripId
      } = this.props;

      switch (link.type) {
        case 'reactivate_requested_trip':
          return _react.default.createElement("button", {
            className: "btn-filled-pri-large wfull",
            onClick: () => this.callbackHandler('Reactivate_Booking')
          }, "Undo Cancel");

        case 'cancel_requested_trip':
          return _react.default.createElement(_GenericModal.default, {
            fullView: true,
            hasCustomClose: true,
            trigger: _react.default.createElement("span", {
              className: "f14 fw7 pfc3",
              onClick: this.trackSegmentEvents
            }, "Cancel Request"),
            customCloseTrigger: this.state.closeModal
          }, _react.default.createElement("div", {
            className: "sbcw"
          }, _react.default.createElement(_cancelRequest.default, {
            closeModal: this.closePopup,
            tripId: currentTripId
          })));

        case 'send_activation_mail':
          return _react.default.createElement("div", null, _react.default.createElement("span", {
            className: "text-center pb8 iblock wfull"
          }, "Didn't receive email"), _react.default.createElement("button", {
            className: "btn-filled-pri wfull",
            onClick: () => this.callbackHandler('Resend_Confirmation')
          }, "Resend Confirmation Link"));

        case 'edit_requested_trip':
          return _react.default.createElement(_reactRouter.Link, {
            className: "btn-filled-pri wfull at_editPreferencesBtn",
            to: link.url
          }, "Edit Preferences");

        case 'show_requested_trip':
        case 'home_path':
          return _react.default.createElement(_reactRouter.Link, {
            to: link.url
          }, (0, _utils.capitalizeEveryFirstLetter)(link.label));

        case 'booked_outside':
          return _react.default.createElement(_reactRouter.Link, {
            to: link.url,
            target: '_blank'
          }, (0, _utils.capitalizeEveryFirstLetter)(link.label));

        default:
          return '';
      }
    };

    this.getParsedMessage = message => {
      let finalMessage = message.message;

      if (finalMessage.includes(DUPLICATE_TRIP_MSG)) {
        const messageParts = finalMessage.split('\n');
        finalMessage = messageParts.slice(0, messageParts.length - 1).join('\n');
      }

      message.links.map(link => {
        if (link.type === 'send_activation_mail') {
          const messageParts = finalMessage.split('\n');
          finalMessage = messageParts.slice(0, messageParts.length - 2).join('\n');
        }

        finalMessage = finalMessage.replace(`{{${link.type}}}`, link.label);
      });
      return finalMessage;
    };

    this.trackSegmentEvents = (event, section, object = '', cta = '') => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment({
          event,
          section,
          object,
          cta
        });
      });
    };

    this.getMessageObject = noQuotesMsg => {
      const header = noQuotesMsg.header;
      const message = this.getParsedMessage(noQuotesMsg);
      const ctas = [];
      let icon = 'DEFAULT';

      if (message.includes(DUPLICATE_TRIP_MSG)) {
        ctas.push(_react.default.createElement("a", {
          href: `mailto:${_application.TT_EMAIL}`,
          className: "radius2 sfc1 block flexFull flex text-center alignCenter justifyCenter mr5 at_emailUs_CTA",
          onClick: () => this.trackSegmentEvents(_segmentEvents.ORGANISM_CLICKED, 'Duplicate lead created section', '', 'Email Us')
        }, "Email Us"));
        ctas.push(_react.default.createElement("a", {
          href: `tel:${_application.TT_PHONE}`,
          className: "radius2 sfc1 block flexFull flex text-center alignCenter justifyCenter ml5 at_callUs_CTA",
          onClick: () => this.trackSegmentEvents(_segmentEvents.ORGANISM_CLICKED, 'Duplicate lead created section', '', 'Call us')
        }, "Call Us"));
        icon = 'DUPLICATE_TRIP';
      } else {
        if (noQuotesMsg.links && noQuotesMsg.links.length) {
          icon = this.getIcon(noQuotesMsg.links[0]) || 'DEFAULT';
          ctas.push(this.getCta(noQuotesMsg.links[0]));
        }
      }

      return {
        header,
        message,
        ctas,
        icon
      };
    };

    this.state = {
      closeModal: true
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.activationMailSent && nextProps.activationMailSent) {
      this.props.showRoster({
        type: _rosterTypes.INFO_ROSTER,
        message: nextProps.activationMailSuccessMsg
      });
    }
  }

  render() {
    const {
      currentTripId,
      trips
    } = this.props;
    const currentTrip = trips.byId[currentTripId];
    const message = currentTrip.noQuotesMsg ? this.getMessageObject(currentTrip.noQuotesMsg) : {
      header: '',
      message: 'Please wait while we are working on your request.',
      ctas: [],
      icon: 'DEFAULT'
    };
    return _react.default.createElement(_RequestProcessingCard.default, {
      message: message,
      trackSegment: this.trackSegmentEvents
    });
  }

};
LeadSubmittedStage.propTypes = {
  currentTripId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  trips: _propTypes.default.object,
  activationMailSent: _propTypes.default.bool,
  activationMailSuccessMsg: _propTypes.default.string,
  sendActivationMail: _propTypes.default.func.isRequired,
  reactivateBooking: _propTypes.default.func.isRequired,
  showRoster: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func
};
var _default = LeadSubmittedStage;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/leadSubmittedStage/components/RequestProcessingCard.js":
/*!***********************************************************************************!*\
  !*** ./app-v2/modules/rlp/leadSubmittedStage/components/RequestProcessingCard.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GIconDiv = _glamorous.default.div({
  width: '55px',
  lineHeight: '0px'
});

const GIconBigDiv = _glamorous.default.div({
  width: '120px',
  lineHeight: '0px'
});

const GContactDiv = _glamorous.default.div({
  '& a': {
    border: '1px solid #2196f3',
    padding: '10px'
  }
});

let RequestProcessingCard = class RequestProcessingCard extends _react.Component {
  constructor(props) {
    super(props);

    this.onSensorChange = isVisible => {
      if (isVisible && !this.isEventTracked) {
        this.isEventTracked = true;
        let section = '';

        if (this.props.message.icon === 'INACTIVE_USER') {
          section = 'Confirmation link section';
        } else if (this.props.message.icon === 'INCOMPLETE_INFO') {
          section = 'Edit preferences section';
        } else if (this.props.message.icon === 'REACTIVATE_TRIP') {
          section = 'Undo cancel section';
        } else if (this.props.message.icon === 'DUPLICATE_TRIP') {
          section = 'Duplicate lead created section';
        }

        this.props.trackSegment(_segmentEvents.ORGANISM_VIEWED, section, '', '');
      }
    };

    this.isEventTracked = false;
  }

  render() {
    const icon = {
      DUPLICATE_TRIP: _react.default.createElement(_Icon.TriangleIcon, null),
      REACTIVATE_TRIP: _react.default.createElement(_Icon.TriangleIcon, null),
      INACTIVE_USER: _react.default.createElement(_Icon.EnvelopeIcon, null),
      INCOMPLETE_INFO: _react.default.createElement(_Icon.ProcessedIcon, null)
    };
    const {
      message
    } = this.props;
    return _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: this.onSensorChange,
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw mb8 pl15 pr15 pb24 pt24 at_requestProcessingCard"
    }, message.icon === 'DEFAULT' ? _react.default.createElement(GIconBigDiv, {
      className: "mlauto mrauto pb24"
    }, _react.default.createElement(_Icon.ProgressIcon, null)) : _react.default.createElement(GIconDiv, {
      className: "mlauto mrauto pb24"
    }, " ", icon[message.icon]), message.header.length ? _react.default.createElement("p", {
      className: "fw7 sfc6 f16 text-center pb15 at_messageHeading"
    }, message.header) : null, _react.default.createElement("p", {
      className: "m0 f14p text-center sfc6 at_messageTxt"
    }, message.message), message.ctas.length ? _react.default.createElement(GContactDiv, {
      className: "flex mt64 justifyCenter"
    }, message.ctas) : null));
  }

};
RequestProcessingCard.propTypes = {
  message: _propTypes.default.object,
  trackSegment: _propTypes.default.func
};
var _default = RequestProcessingCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/leadSubmittedStage/index.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/rlp/leadSubmittedStage/index.js ***!
  \********************************************************/
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

var _LeadSubmittedStage = _interopRequireDefault(__webpack_require__(/*! ./LeadSubmittedStage */ "./app-v2/modules/rlp/leadSubmittedStage/LeadSubmittedStage.js"));

var _tripActivities = __webpack_require__(/*! modules/trip/actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

var _action = __webpack_require__(/*! modules/roster/action */ "./app-v2/modules/roster/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  trips: state.trip.list,
  currentTripId: state.trip.currentTrip.data.id,
  activationMailSent: state.trip.activities.activationMailSent,
  activationMailSuccessMsg: state.trip.activities.activationMailSuccessMsg
}), {
  sendActivationMail: _tripActivities.sendActivationMail,
  showRoster: _action.showRoster
})(_LeadSubmittedStage.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/GenericModal.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/GenericModal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ "react-modal"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseIt = _glamorous.default.button({
  position: 'absolute',
  right: '5px',
  top: '0px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '2',
  overflow: 'hidden'
});

const CloseItLeft = _glamorous.default.button({
  position: 'fixed',
  left: '5px',
  top: '3px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '6',
  overflow: 'hidden'
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    width: '94%',
    maxWidth: '600px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};
const customStylesFullView = {
  content: {
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    top: 0,
    left: 0,
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    paddingTop: '50px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  }
};
let ModalComponent = (_temp = _class = class ModalComponent extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.state.isOpen && nextProps.isOpen) {
      this.openModal();
    }

    if (this.state.isOpen && nextProps.customCloseTrigger) {
      this.closeModal();
    }
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });

    if (this.props.onRequestCloseCustom) {
      this.props.onRequestCloseCustom();
    }

    document.body.style.overflow = '';
  }

  afterOpenModal() {
    this.props.onAfterModalOpen();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    this.closeModal();
  }

  render() {
    const {
      fullView,
      hasCustomClose,
      hasNoClose,
      isWhiteIcon,
      isTriggerFullView,
      customClass
    } = this.props;
    return _react.default.createElement("div", {
      className: isTriggerFullView ? 'wfull' : ''
    }, !this.props.isOpen ? _react.default.createElement("span", {
      className: "block wfull",
      onClick: this.openModal
    }, this.props.trigger) : null, _react.default.createElement(_reactModal.default, {
      isOpen: this.state.isOpen,
      onAfterOpen: this.afterOpenModal,
      onRequestClose: this.closeModal,
      style: fullView ? customStylesFullView : customStyles,
      contentLabel: "Travel Triangle Modal",
      ariaHideApp: false,
      shouldCloseOnOverlayClick: true,
      className: customClass
    }, hasCustomClose ? _react.default.createElement(CloseItLeft, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })) : _react.default.createElement(CloseIt, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })), this.props.children));
  }

}, _class.propTypes = {
  trigger: _propTypes.default.node,
  children: _propTypes.default.node.isRequired,
  onAfterModalOpen: _propTypes.default.func,
  onRequestCloseCustom: _propTypes.default.func,
  customCloseTrigger: _propTypes.default.bool,
  fullView: _propTypes.default.bool,
  hasCustomClose: _propTypes.default.bool,
  hasNoClose: _propTypes.default.bool,
  isWhiteIcon: _propTypes.default.bool,
  isTriggerFullView: _propTypes.default.bool,
  customClass: _propTypes.default.string
}, _class.defaultProps = {
  onAfterModalOpen: () => {},
  onRequestCloseCustom: () => {},
  customCloseTrigger: false,
  trigger: _react.default.createElement("button", null, "Please supply a custom trigger component"),
  fullView: false,
  hasCustomClose: false,
  hasNoClose: false,
  isWhiteIcon: false,
  isTriggerFullView: false,
  customClass: ''
}, _temp);
var _default = ModalComponent;
exports.default = _default;

/***/ }),

/***/ "./app/constants/application.js":
/*!**************************************!*\
  !*** ./app/constants/application.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TT_PHONE = exports.TT_EMAIL = void 0;
const TT_EMAIL = 'customercare@traveltriangle.com';
exports.TT_EMAIL = TT_EMAIL;
const TT_PHONE = '18001235555';
exports.TT_PHONE = TT_PHONE;

/***/ }),

/***/ "./app/constants/rosterTypes.js":
/*!**************************************!*\
  !*** ./app/constants/rosterTypes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WARNING_TOASTER = exports.ERROR_ROSTER = exports.SUCCESS_ROSTER = exports.INFO_ROSTER = void 0;
const INFO_ROSTER = 'infoRoster';
exports.INFO_ROSTER = INFO_ROSTER;
const SUCCESS_ROSTER = 'successRoster';
exports.SUCCESS_ROSTER = SUCCESS_ROSTER;
const ERROR_ROSTER = 'errorRoster';
exports.ERROR_ROSTER = ERROR_ROSTER;
const WARNING_TOASTER = 'warningToaster';
exports.WARNING_TOASTER = WARNING_TOASTER;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvbGVhZFN1Ym1pdHRlZFN0YWdlL0xlYWRTdWJtaXR0ZWRTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvbGVhZFN1Ym1pdHRlZFN0YWdlL2NvbXBvbmVudHMvUmVxdWVzdFByb2Nlc3NpbmdDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3JscC9sZWFkU3VibWl0dGVkU3RhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uc3RhbnRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb25zdGFudHMvcm9zdGVyVHlwZXMuanMiXSwibmFtZXMiOlsiRFVQTElDQVRFX1RSSVBfTVNHIiwiTGVhZFN1Ym1pdHRlZFN0YWdlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNsb3NlUG9wdXAiLCJzZXRTdGF0ZSIsImNsb3NlTW9kYWwiLCJjYWxsYmFja0hhbmRsZXIiLCJ0eXBlIiwiY3VycmVudFRyaXBJZCIsInJlYWN0aXZhdGVCb29raW5nIiwic2VuZEFjdGl2YXRpb25NYWlsIiwidHJpcElkIiwiZ2V0SWNvbiIsImxpbmsiLCJnZXRDdGEiLCJ0cmFja1NlZ21lbnRFdmVudHMiLCJzdGF0ZSIsInVybCIsImxhYmVsIiwiZ2V0UGFyc2VkTWVzc2FnZSIsIm1lc3NhZ2UiLCJmaW5hbE1lc3NhZ2UiLCJpbmNsdWRlcyIsIm1lc3NhZ2VQYXJ0cyIsInNwbGl0Iiwic2xpY2UiLCJsZW5ndGgiLCJqb2luIiwibGlua3MiLCJtYXAiLCJyZXBsYWNlIiwiZXZlbnQiLCJzZWN0aW9uIiwib2JqZWN0IiwiY3RhIiwidHJhY2tTZWdtZW50IiwiZ2V0TWVzc2FnZU9iamVjdCIsIm5vUXVvdGVzTXNnIiwiaGVhZGVyIiwiY3RhcyIsImljb24iLCJwdXNoIiwiVFRfRU1BSUwiLCJPUkdBTklTTV9DTElDS0VEIiwiVFRfUEhPTkUiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImFjdGl2YXRpb25NYWlsU2VudCIsInNob3dSb3N0ZXIiLCJJTkZPX1JPU1RFUiIsImFjdGl2YXRpb25NYWlsU3VjY2Vzc01zZyIsInJlbmRlciIsInRyaXBzIiwiY3VycmVudFRyaXAiLCJieUlkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwiR0ljb25EaXYiLCJnbGFtb3JvdXMiLCJkaXYiLCJ3aWR0aCIsImxpbmVIZWlnaHQiLCJHSWNvbkJpZ0RpdiIsIkdDb250YWN0RGl2IiwiYm9yZGVyIiwicGFkZGluZyIsIlJlcXVlc3RQcm9jZXNzaW5nQ2FyZCIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiaXNFdmVudFRyYWNrZWQiLCJPUkdBTklTTV9WSUVXRUQiLCJEVVBMSUNBVEVfVFJJUCIsIlJFQUNUSVZBVEVfVFJJUCIsIklOQUNUSVZFX1VTRVIiLCJJTkNPTVBMRVRFX0lORk8iLCJjb250YWluZXIiLCJ0cmlwIiwibGlzdCIsImRhdGEiLCJpZCIsImFjdGl2aXRpZXMiLCJDbG9zZUl0IiwiYnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImhlaWdodCIsInpJbmRleCIsIm92ZXJmbG93IiwiQ2xvc2VJdExlZnQiLCJsZWZ0IiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsImJvdHRvbSIsImJvcmRlclJhZGl1cyIsIm1heFdpZHRoIiwidHJhbnNmb3JtIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImN1c3RvbVN0eWxlc0Z1bGxWaWV3IiwicGFkZGluZ1RvcCIsIk1vZGFsQ29tcG9uZW50IiwiUmVhY3QiLCJpc09wZW4iLCJvcGVuTW9kYWwiLCJiaW5kIiwiYWZ0ZXJPcGVuTW9kYWwiLCJjdXN0b21DbG9zZVRyaWdnZXIiLCJvblJlcXVlc3RDbG9zZUN1c3RvbSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib25BZnRlck1vZGFsT3BlbiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZnVsbFZpZXciLCJoYXNDdXN0b21DbG9zZSIsImhhc05vQ2xvc2UiLCJpc1doaXRlSWNvbiIsImlzVHJpZ2dlckZ1bGxWaWV3IiwiY3VzdG9tQ2xhc3MiLCJ0cmlnZ2VyIiwiY2hpbGRyZW4iLCJub2RlIiwiZGVmYXVsdFByb3BzIiwiU1VDQ0VTU19ST1NURVIiLCJFUlJPUl9ST1NURVIiLCJXQVJOSU5HX1RPQVNURVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEscUJBQXFCLGdFQUEzQjtJQUVNQyxrQixHQUFOLE1BQU1BLGtCQUFOLFNBQWlDQyxnQkFBakMsQ0FBMkM7QUFDekNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsU0FjbkJDLFVBZG1CLEdBY04sTUFBTTtBQUNqQixXQUFLQyxRQUFMLENBQWM7QUFBRUMsb0JBQVk7QUFBZCxPQUFkO0FBQ0QsS0FoQmtCOztBQUFBLFNBa0JuQkMsZUFsQm1CLEdBa0JBQyxJQUFELElBQVU7QUFDMUIsWUFBTTtBQUFFQyxxQkFBRjtBQUFpQkMseUJBQWpCO0FBQW9DQztBQUFwQyxVQUEyRCxLQUFLUixLQUF0RTs7QUFDQSxjQUFRSyxJQUFSO0FBQ0UsYUFBSyxvQkFBTDtBQUNFRSw0QkFBa0I7QUFBRUUsb0JBQVFIO0FBQVYsV0FBbEI7QUFDQTs7QUFDRixhQUFLLHFCQUFMO0FBQ0VFLDZCQUFtQkYsYUFBbkI7QUFMSjtBQU9ELEtBM0JrQjs7QUFBQSxTQTZCbkJJLE9BN0JtQixHQTZCUkMsSUFBRCxJQUFVO0FBQ2xCLGNBQVFBLEtBQUtOLElBQWI7QUFDRSxhQUFLLDJCQUFMO0FB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OUcwQyxDLFNBRXBDeEUsUyxHQUFZO0FBQ2pCdUUsV0FBU3RFLG1CQUFVd0UsSUFERjtBQUVqQkQsWUFBVXZFLG1CQUFVd0UsSUFBVixDQUFlcEUsVUFGUjtBQUdqQjBELG9CQUFrQjlELG1CQUFVTSxJQUhYO0FBSWpCb0Qsd0JBQXNCMUQsbUJBQVVNLElBSmY7QUFLakJtRCxzQkFBb0J6RCxtQkFBVUssSUFMYjtBQU1qQjJELFlBQVVoRSxtQkFBVUssSUFOSDtBQU9qQjRELGtCQUFnQmpFLG1CQUFVSyxJQVBUO0FBUWpCNkQsY0FBWWxFLG1CQUFVSyxJQVJMO0FBU2pCOEQsZUFBYW5FLG1CQUFVSyxJQVROO0FBVWpCK0QscUJBQW1CcEUsbUJBQVVLLElBVlo7QUFXakJnRSxlQUFhckUsbUJBQVVHO0FBWE4sQyxTQWNac0UsWSxHQUFlO0FBQ3BCWCxvQkFBa0IsTUFBTSxDQUN2QixDQUZtQjtBQUdwQkosd0JBQXNCLE1BQU0sQ0FDM0IsQ0FKbUI7QUFLcEJELHNCQUFvQixLQUxBO0FBTXBCYSxXQUFTLHdGQU5XO0FBT3BCTixZQUFVLEtBUFU7QUFRcEJDLGtCQUFnQixLQVJJO0FBU3BCQyxjQUFZLEtBVFE7QUFVcEJDLGVBQWEsS0FWTztBQVdwQkMscUJBQW1CLEtBWEM7QUFZcEJDLGVBQWE7QUFaTyxDO2VBaUdUbEIsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNUixNQUFNakUsV0FBVyxpQ0FBakI7O0FBQ0EsTUFBTUUsV0FBVyxhQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLE1BQU1LLGNBQWMsWUFBcEI7O0FBQ0EsTUFBTWlGLGlCQUFpQixlQUF2Qjs7QUFDQSxNQUFNQyxlQUFlLGFBQXJCOztBQUNBLE1BQU1DLGtCQUFrQixnQkFBeEIiLCJmaWxlIjoicmxwLXN1Ym1pdHRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IHJlc2N1ZSwgY2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IFRUX0VNQUlMLCBUVF9QSE9ORSB9IGZyb20gJ2NvbnN0YW50cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBSZXF1ZXN0UHJvY2Vzc2luZ0NhcmQgZnJvbSAnLi9jb21wb25lbnRzL1JlcXVlc3RQcm9jZXNzaW5nQ2FyZCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBDYW5jZWxSZXF1ZXN0IGZyb20gJ21vZHVsZXMvdHJpcC9jYW5jZWxSZXF1ZXN0JztcbmltcG9ydCB7IElORk9fUk9TVEVSIH0gZnJvbSAnY29uc3RhbnRzL3Jvc3RlclR5cGVzJztcblxuY29uc3QgRFVQTElDQVRFX1RSSVBfTVNHID0gJ0xvb2tzIGxpa2UgeW91IGhhdmUgYWxyZWFkeSBwdXQgYSByZXF1ZXN0IGZvciB0aGlzIGRlc3RpbmF0aW9uJztcblxuY2xhc3MgTGVhZFN1Ym1pdHRlZFN0YWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xvc2VNb2RhbDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuYWN0aXZhdGlvbk1haWxTZW50ICYmIG5leHRQcm9wcy5hY3RpdmF0aW9uTWFpbFNlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMuc2hvd1Jvc3Rlcih7IHR5cGU6IElORk9fUk9TVEVSLCBtZXNzYWdlOiBuZXh0UHJvcHMuYWN0aXZhdGlvbk1haWxTdWNjZXNzTXNnIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IHRydWUgfSk7XG4gIH07XG5cbiAgY2FsbGJhY2tIYW5kbGVyID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRUcmlwSWQsIHJlYWN0aXZhdGVCb29raW5nLCBzZW5kQWN0aXZhdGlvbk1haWwgfSA9IHRoaXMucHJvcHM7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdSZWFjdGl2YXRlX0Jvb2tpbmcnOlxuICAgICAgICByZWFjdGl2YXRlQm9va2luZyh7IHRyaXBJZDogY3VycmVudFRyaXBJZCB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdSZXNlbmRfQ29uZmlybWF0aW9uJzpcbiAgICAgICAgc2VuZEFjdGl2YXRpb25NYWlsKGN1cnJlbnRUcmlwSWQpO1xuICAgIH1cbiAgfTtcblxuICBnZXRJY29uID0gKGxpbmspID0+IHtcbiAgICBzd2l0Y2ggKGxpbmsudHlwZSkge1xuICAgICAgY2FzZSAncmVhY3RpdmF0ZV9yZXF1ZXN0ZWRfdHJpcCc6XG4gICAgICAgIHJldHVybiAnUkVBQ1RJVkFURV9UUklQJztcbiAgICAgIGNhc2UgJ3NlbmRfYWN0aXZhdGlvbl9tYWlsJzpcbiAgICAgICAgcmV0dXJuICdJTkFDVElWRV9VU0VSJztcbiAgICAgIGNhc2UgJ2VkaXRfcmVxdWVzdGVkX3RyaXAnOlxuICAgICAgICByZXR1cm4gJ0lOQ09NUExFVEVfSU5GTyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0RFRkFVTFQnO1xuICAgIH1cbiAgfTtcblxuICBnZXRDdGEgPSAobGluaykgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudFRyaXBJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHN3aXRjaCAobGluay50eXBlKSB7XG4gICAgICBjYXNlICdyZWFjdGl2YXRlX3JlcXVlc3RlZF90cmlwJzpcbiAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jYWxsYmFja0hhbmRsZXIoJ1JlYWN0aXZhdGVfQm9va2luZycpfT5VbmRvXG4gICAgICAgICAgQ2FuY2VsPC9idXR0b24+O1xuICAgICAgY2FzZSAnY2FuY2VsX3JlcXVlc3RlZF90cmlwJzpcbiAgICAgICAgcmV0dXJuICg8TW9kYWwgZnVsbFZpZXc9e3RydWV9IGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXs8c3BhbiBjbGFzc05hbWU9J2YxNCBmdzcgcGZjMycgb25DbGljaz17dGhpcy50cmFja1NlZ21lbnRFdmVudHN9PkNhbmNlbCBSZXF1ZXN0PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xvc2VUcmlnZ2VyPXt0aGlzLnN0YXRlLmNsb3NlTW9kYWx9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3Jz5cbiAgICAgICAgICAgIDxDYW5jZWxSZXF1ZXN0IGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VQb3B1cH0gdHJpcElkPXtjdXJyZW50VHJpcElkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPik7XG4gICAgICBjYXNlICdzZW5kX2FjdGl2YXRpb25fbWFpbCc6XG4gICAgICAgIHJldHVybiAoPGRpdj48c3BhbiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHBiOCBpYmxvY2sgd2Z1bGwnPkRpZG4ndCByZWNlaXZlIGVtYWlsPC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZmlsbGVkLXByaSB3ZnVsbCcgb25DbGljaz17KCkgPT4gdGhpcy5jYWxsYmFja0hhbmRsZXIoJ1Jlc2VuZF9Db25maXJtYXRpb24nKX0+UmVzZW5kXG4gICAgICAgICAgICBDb25maXJtYXRpb24gTGlua1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgY2FzZSAnZWRpdF9yZXF1ZXN0ZWRfdHJpcCc6XG4gICAgICAgIHJldHVybiAoPExpbmsgY2xhc3NOYW1lPSdidG4tZmlsbGVkLXByaSB3ZnVsbCBhdF9lZGl0UHJlZmVyZW5jZXNCdG4nIHRvPXtsaW5rLnVybH0+RWRpdCBQcmVmZXJlbmNlczwvTGluaz4pO1xuICAgICAgY2FzZSAnc2hvd19yZXF1ZXN0ZWRfdHJpcCc6XG4gICAgICBjYXNlICdob21lX3BhdGgnOlxuICAgICAgICByZXR1cm4gPExpbmsgdG89e2xpbmsudXJsfT57Y2FwaXRhbGl6ZUV2ZXJ5Rmlyc3RMZXR0ZXIobGluay5sYWJlbCl9PC9MaW5rPjtcbiAgICAgIGNhc2UgJ2Jvb2tlZF9vdXRzaWRlJzpcbiAgICAgICAgcmV0dXJuIDxMaW5rIHRvPXtsaW5rLnVybH0gdGFyZ2V0PXsnX2JsYW5rJ30+e2NhcGl0YWxpemVFdmVyeUZpcnN0TGV0dGVyKGxpbmsubGFiZWwpfTwvTGluaz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIGdldFBhcnNlZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIGxldCBmaW5hbE1lc3NhZ2UgPSBtZXNzYWdlLm1lc3NhZ2U7XG5cbiAgICBpZiAoZmluYWxNZXNzYWdlLmluY2x1ZGVzKERVUExJQ0FURV9UUklQX01TRykpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VQYXJ0cyA9IGZpbmFsTWVzc2FnZS5zcGxpdCgnXFxuJyk7XG4gICAgICBmaW5hbE1lc3NhZ2UgPSBtZXNzYWdlUGFydHMuc2xpY2UoMCwgbWVzc2FnZVBhcnRzLmxlbmd0aCAtIDEpLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIG1lc3NhZ2UubGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgaWYgKGxpbmsudHlwZSA9PT0gJ3NlbmRfYWN0aXZhdGlvbl9tYWlsJykge1xuICAgICAgICBjb25zdCBtZXNzYWdlUGFydHMgPSBmaW5hbE1lc3NhZ2Uuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmaW5hbE1lc3NhZ2UgPSBtZXNzYWdlUGFydHMuc2xpY2UoMCwgbWVzc2FnZVBhcnRzLmxlbmd0aCAtIDIpLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuXG4gICAgICBmaW5hbE1lc3NhZ2UgPSBmaW5hbE1lc3NhZ2UucmVwbGFjZShge3ske2xpbmsudHlwZX19fWAsIGxpbmsubGFiZWwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbmFsTWVzc2FnZTtcbiAgfTtcblxuICB0cmFja1NlZ21lbnRFdmVudHMgPSAoZXZlbnQsIHNlY3Rpb24sIG9iamVjdCA9ICcnLCBjdGEgPSAnJykgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBvYmplY3QsXG4gICAgICAgIGN0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0TWVzc2FnZU9iamVjdCA9IChub1F1b3Rlc01zZykgPT4ge1xuXG4gICAgY29uc3QgaGVhZGVyID0gbm9RdW90ZXNNc2cuaGVhZGVyO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmdldFBhcnNlZE1lc3NhZ2Uobm9RdW90ZXNNc2cpO1xuICAgIGNvbnN0IGN0YXMgPSBbXTtcbiAgICBsZXQgaWNvbiA9ICdERUZBVUxUJztcblxuICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKERVUExJQ0FURV9UUklQX01TRykpIHtcbiAgICAgIGN0YXMucHVzaCg8YSBocmVmPXtgbWFpbHRvOiR7VFRfRU1BSUx9YH1cbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JhZGl1czIgc2ZjMSBibG9jayBmbGV4RnVsbCBmbGV4IHRleHQtY2VudGVyIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgbXI1IGF0X2VtYWlsVXNfQ1RBJ1xuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnRzKE9SR0FOSVNNX0NMSUNLRUQsICdEdXBsaWNhdGUgbGVhZCBjcmVhdGVkIHNlY3Rpb24nLCAnJywgJ0VtYWlsIFVzJyl9PkVtYWlsXG4gICAgICAgIFVzPC9hPik7XG4gICAgICBjdGFzLnB1c2goPGEgaHJlZj17YHRlbDoke1RUX1BIT05FfWB9XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyYWRpdXMyIHNmYzEgYmxvY2sgZmxleEZ1bGwgZmxleCB0ZXh0LWNlbnRlciBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIG1sNSBhdF9jYWxsVXNfQ1RBJ1xuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnRzKE9SR0FOSVNNX0NMSUNLRUQsICdEdXBsaWNhdGUgbGVhZCBjcmVhdGVkIHNlY3Rpb24nLCAnJywgJ0NhbGwgdXMnKX0+Q2FsbFxuICAgICAgICBVczwvYT4pO1xuICAgICAgaWNvbiA9ICdEVVBMSUNBVEVfVFJJUCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKG5vUXVvdGVzTXNnLmxpbmtzICYmIG5vUXVvdGVzTXNnLmxpbmtzLmxlbmd0aCkge1xuICAgICAgICBpY29uID0gdGhpcy5nZXRJY29uKG5vUXVvdGVzTXNnLmxpbmtzWzBdKSB8fCAnREVGQVVMVCc7XG4gICAgICAgIGN0YXMucHVzaCh0aGlzLmdldEN0YShub1F1b3Rlc01zZy5saW5rc1swXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXIsXG4gICAgICBtZXNzYWdlLFxuICAgICAgY3RhcyxcbiAgICAgIGljb25cbiAgICB9O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRUcmlwSWQsIHRyaXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1cnJlbnRUcmlwID0gdHJpcHMuYnlJZFtjdXJyZW50VHJpcElkXTtcbiAgICBjb25zdCBtZXNzYWdlID0gY3VycmVudFRyaXAubm9RdW90ZXNNc2dcbiAgICAgID8gdGhpcy5nZXRNZXNzYWdlT2JqZWN0KGN1cnJlbnRUcmlwLm5vUXVvdGVzTXNnKVxuICAgICAgOiB7XG4gICAgICAgIGhlYWRlcjogJycsXG4gICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugd2FpdCB3aGlsZSB3ZSBhcmUgd29ya2luZyBvbiB5b3VyIHJlcXVlc3QuJyxcbiAgICAgICAgY3RhczogW10sXG4gICAgICAgIGljb246ICdERUZBVUxUJ1xuICAgICAgfTtcblxuICAgIHJldHVybiA8UmVxdWVzdFByb2Nlc3NpbmdDYXJkIG1lc3NhZ2U9e21lc3NhZ2V9IHRyYWNrU2VnbWVudD17dGhpcy50cmFja1NlZ21lbnRFdmVudHN9IC8+O1xuICB9XG59XG5cbkxlYWRTdWJtaXR0ZWRTdGFnZS5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRUcmlwSWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gIHRyaXBzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3RpdmF0aW9uTWFpbFNlbnQ6IFByb3BUeXBlcy5ib29sLFxuICBhY3RpdmF0aW9uTWFpbFN1Y2Nlc3NNc2c6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbmRBY3RpdmF0aW9uTWFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVhY3RpdmF0ZUJvb2tpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dSb3N0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRTdWJtaXR0ZWRTdGFnZTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCB7IFRyaWFuZ2xlSWNvbiwgUHJvZ3Jlc3NJY29uLCBQcm9jZXNzZWRJY29uLCBFbnZlbG9wZUljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHSWNvbkRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzU1cHgnLFxuICBsaW5lSGVpZ2h0OiAnMHB4J1xufSk7XG5cbmNvbnN0IEdJY29uQmlnRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMTIwcHgnLFxuICBsaW5lSGVpZ2h0OiAnMHB4J1xufSk7XG5cbmNvbnN0IEdDb250YWN0RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmIGEnOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMyMTk2ZjMnLFxuICAgIHBhZGRpbmc6ICcxMHB4J1xuICB9LFxufSk7XG5cblxuY2xhc3MgUmVxdWVzdFByb2Nlc3NpbmdDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pc0V2ZW50VHJhY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgb25TZW5zb3JDaGFuZ2UgPSAoaXNWaXNpYmxlKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSAmJiAhdGhpcy5pc0V2ZW50VHJhY2tlZCkge1xuICAgICAgdGhpcy5pc0V2ZW50VHJhY2tlZCA9IHRydWU7XG4gICAgICBsZXQgc2VjdGlvbiA9ICcnO1xuICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZS5pY29uID09PSAnSU5BQ1RJVkVfVVNFUicpIHtcbiAgICAgICAgc2VjdGlvbiA9ICdDb25maXJtYXRpb24gbGluayBzZWN0aW9uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubWVzc2FnZS5pY29uID09PSAnSU5DT01QTEVURV9JTkZPJykge1xuICAgICAgICBzZWN0aW9uID0gJ0VkaXQgcHJlZmVyZW5jZXMgc2VjdGlvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnByb3BzLm1lc3NhZ2UuaWNvbiA9PT0gJ1JFQUNUSVZBVEVfVFJJUCcpIHtcbiAgICAgICAgc2VjdGlvbiA9ICdVbmRvIGNhbmNlbCBzZWN0aW9uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMubWVzc2FnZS5pY29uID09PSAnRFVQTElDQVRFX1RSSVAnKSB7XG4gICAgICAgIHNlY3Rpb24gPSAnRHVwbGljYXRlIGxlYWQgY3JlYXRlZCBzZWN0aW9uJztcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KE9SR0FOSVNNX1ZJRVdFRCwgc2VjdGlvbiwgJycsICcnKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGljb24gPSB7XG4gICAgICBEVVBMSUNBVEVfVFJJUDogPFRyaWFuZ2xlSWNvbiAvPixcbiAgICAgIFJFQUNUSVZBVEVfVFJJUDogPFRyaWFuZ2xlSWNvbiAvPixcbiAgICAgIElOQUNUSVZFX1VTRVI6IDxFbnZlbG9wZUljb24gLz4sXG4gICAgICBJTkNPTVBMRVRFX0lORk86IDxQcm9jZXNzZWRJY29uIC8+LFxuICAgIH07XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZW5zb3Igb25DaGFuZ2U9e3RoaXMub25TZW5zb3JDaGFuZ2V9XG4gICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmlsaXR5PSdib3R0b20nXG4gICAgICAgICAgICAgIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NiY3cgbWI4IHBsMTUgcHIxNSBwYjI0IHB0MjQgYXRfcmVxdWVzdFByb2Nlc3NpbmdDYXJkJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlLmljb24gPT09ICdERUZBVUxUJyA/XG4gICAgICAgICAgICAgIDxHSWNvbkJpZ0RpdiBjbGFzc05hbWU9J21sYXV0byBtcmF1dG8gcGIyNCc+PFByb2dyZXNzSWNvbiAvPjwvR0ljb25CaWdEaXY+IDpcbiAgICAgICAgICAgICAgPEdJY29uRGl2IGNsYXNzTmFtZT0nbWxhdXRvIG1yYXV0byBwYjI0Jz4ge2ljb25bbWVzc2FnZS5pY29uXX08L0dJY29uRGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlLmhlYWRlci5sZW5ndGggP1xuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Z3NyBzZmM2IGYxNiB0ZXh0LWNlbnRlciBwYjE1IGF0X21lc3NhZ2VIZWFkaW5nJz57bWVzc2FnZS5oZWFkZXJ9PC9wPiA6XG4gICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdtMCBmMTRwIHRleHQtY2VudGVyIHNmYzYgYXRfbWVzc2FnZVR4dCc+e21lc3NhZ2UubWVzc2FnZX08L3A+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVzc2FnZS5jdGFzLmxlbmd0aCA/XG4gICAgICAgICAgICAgIDxHQ29udGFjdERpdiBjbGFzc05hbWU9J2ZsZXggbXQ2NCBqdXN0aWZ5Q2VudGVyJz5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZS5jdGFzfVxuICAgICAgICAgICAgICA8L0dDb250YWN0RGl2PiA6XG4gICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZW5zb3I+XG4gICAgKTtcbiAgfVxufVxuXG5SZXF1ZXN0UHJvY2Vzc2luZ0NhcmQucHJvcFR5cGVzID0ge1xuICBtZXNzYWdlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0UHJvY2Vzc2luZ0NhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgTGVhZFN1Ym1pdHRlZFN0YWdlIGZyb20gJy4vTGVhZFN1Ym1pdHRlZFN0YWdlJztcbmltcG9ydCB7IHNlbmRBY3RpdmF0aW9uTWFpbCB9IGZyb20gJ21vZHVsZXMvdHJpcC9hY3Rpb25zL3RyaXBBY3Rpdml0aWVzJztcbmltcG9ydCB7IHNob3dSb3N0ZXIgfSBmcm9tICdtb2R1bGVzL3Jvc3Rlci9hY3Rpb24nO1xuXG5jb25zdCBjb250YWluZXIgPSB3aXRoUm91dGVyKGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgdHJpcHM6IHN0YXRlLnRyaXAubGlzdCxcbiAgICBjdXJyZW50VHJpcElkOiBzdGF0ZS50cmlwLmN1cnJlbnRUcmlwLmRhdGEuaWQsXG4gICAgYWN0aXZhdGlvbk1haWxTZW50OiBzdGF0ZS50cmlwLmFjdGl2aXRpZXMuYWN0aXZhdGlvbk1haWxTZW50LFxuICAgIGFjdGl2YXRpb25NYWlsU3VjY2Vzc01zZzogc3RhdGUudHJpcC5hY3Rpdml0aWVzLmFjdGl2YXRpb25NYWlsU3VjY2Vzc01zZ1xuICB9KSwge1xuICAgIHNlbmRBY3RpdmF0aW9uTWFpbCxcbiAgICBzaG93Um9zdGVyXG4gIH1cbikoTGVhZFN1Ym1pdHRlZFN0YWdlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgQ2xvc2VEYXJrLCBDbG9zZVdoaXRlfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IENsb3NlSXQgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnNXB4JyxcbiAgdG9wOiAnMHB4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnMicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuXG5jb25zdCBDbG9zZUl0TGVmdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgbGVmdDogJzVweCcsXG4gIHRvcDogJzNweCcsXG4gIHdpZHRoOiAnMzZweCcsXG4gIGhlaWdodDogJzM2cHgnLFxuICBwYWRkaW5nOiAnMTJweCcsXG4gIHpJbmRleDogJzYnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KTtcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHpJbmRleDogJzEwMScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIHdpZHRoOiAnOTQlJyxcbiAgICBtYXhXaWR0aDogJzYwMHB4JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43NSknXG4gIH0sXG59O1xuY29uc3QgY3VzdG9tU3R5bGVzRnVsbFZpZXcgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmdUb3A6ICc1MHB4J1xuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJ1xuICB9LFxufTtcblxuY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgb25BZnRlck1vZGFsT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZXF1ZXN0Q2xvc2VDdXN0b206IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1c3RvbUNsb3NlVHJpZ2dlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNOb0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1doaXRlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGN1c3RvbUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogKCkgPT4ge1xuICAgIH0sXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBmYWxzZSxcbiAgICB0cmlnZ2VyOiA8YnV0dG9uPlBsZWFzZSBzdXBwbHkgYSBjdXN0b20gdHJpZ2dlciBjb21wb25lbnQ8L2J1dHRvbj4sXG4gICAgZnVsbFZpZXc6IGZhbHNlLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBmYWxzZSxcbiAgICBoYXNOb0Nsb3NlOiBmYWxzZSxcbiAgICBpc1doaXRlSWNvbjogZmFsc2UsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWZ0ZXJPcGVuTW9kYWwgPSB0aGlzLmFmdGVyT3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiBuZXh0UHJvcHMuY3VzdG9tQ2xvc2VUcmlnZ2VyKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSgpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gIH1cblxuICBhZnRlck9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQWZ0ZXJNb2RhbE9wZW4oKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZ1bGxWaWV3LCBoYXNDdXN0b21DbG9zZSwgaGFzTm9DbG9zZSwgaXNXaGl0ZUljb24sIGlzVHJpZ2dlckZ1bGxWaWV3LCBjdXN0b21DbGFzcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVHJpZ2dlckZ1bGxWaWV3ID8gJ3dmdWxsJzogJyd9PlxuICAgICAgICB7IXRoaXMucHJvcHMuaXNPcGVuID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyaWdnZXJ9XG4gICAgICAgICAgPC9zcGFuPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25BZnRlck9wZW49e3RoaXMuYWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICBzdHlsZT17ZnVsbFZpZXcgPyBjdXN0b21TdHlsZXNGdWxsVmlldyA6IGN1c3RvbVN0eWxlc31cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJUcmF2ZWwgVHJpYW5nbGUgTW9kYWxcIlxuICAgICAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VzdG9tQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYXNDdXN0b21DbG9zZSA/XG4gICAgICAgICAgICAgIDxDbG9zZUl0TGVmdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0TGVmdD4gOlxuICAgICAgICAgICAgICA8Q2xvc2VJdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb21wb25lbnQ7XG4iLCJleHBvcnQgY29uc3QgVFRfRU1BSUwgPSAnY3VzdG9tZXJjYXJlQHRyYXZlbHRyaWFuZ2xlLmNvbSc7XG5leHBvcnQgY29uc3QgVFRfUEhPTkUgPSAnMTgwMDEyMzU1NTUnO1xuIiwiZXhwb3J0IGNvbnN0IElORk9fUk9TVEVSID0gJ2luZm9Sb3N0ZXInO1xuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfUk9TVEVSID0gJ3N1Y2Nlc3NSb3N0ZXInO1xuZXhwb3J0IGNvbnN0IEVSUk9SX1JPU1RFUiA9ICdlcnJvclJvc3Rlcic7XG5leHBvcnQgY29uc3QgV0FSTklOR19UT0FTVEVSID0gJ3dhcm5pbmdUb2FzdGVyJztcbiJdLCJzb3VyY2VSb290IjoiIn0=