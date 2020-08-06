require("source-map-support").install();
exports.ids = ["mkt"];
exports.modules = {

/***/ "./app-v2/screens/mkt/Mkt.js":
/*!***********************************!*\
  !*** ./app-v2/screens/mkt/Mkt.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _modules = __webpack_require__(/*! react-scroll/modules */ "./node_modules/react-scroll/modules/index.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _exitIntent = __webpack_require__(/*! helpers/exitIntent */ "./app/helpers/exitIntent.js");

var _common = _interopRequireDefault(__webpack_require__(/*! app-v2/common */ "./app-v2/common.js"));

var _mktCm = _interopRequireDefault(__webpack_require__(/*! ./mkt.cm.scss */ "./app-v2/screens/mkt/mkt.cm.scss"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const HeroImageContainerDiv = (0, _glamorous.default)('div')(({
  url
}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '70%',
  background: `url(${url}) no-repeat`,
  backgroundSize: 'cover'
}));

const StickyButton = _glamorous.default.div({
  '&.makeSticky': {
    position: 'fixed',
    zIndex: '1',
    background: '#EDF0F3',
    marginBottom: '0 !important',
    padding: '10px 0',
    bottom: '0'
  }
});

let Mkt = (_temp = _class = class Mkt extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.setDestinationCookie(props);
  }

  render() {
    const {
      makeButtonSticky
    } = this.state;
    const {
      mkt,
      routeParams
    } = this.props;
    const Section1 = mkt.section1 ? _common.default['MktSection1'] : null;
    const Section3 = mkt.section3 ? _common.default['MktSection3'] : null;
    const Section4 = mkt.section4 ? _common.default['MktSection4'] : null;
    const Testimonials = mkt.testimonials ? _common.default['MktTestimonials'] : null;
    const Marketplace = _common.default['MktMarketplace'];
    const Agents = mkt.agents ? _common.default['MktAgents'] : null;
    const HowItWorks = _common.default['MktHowItWorks'];
    const Faq = mkt.faqs ? _common.default['MktFaq'] : null;
    const Conclusion = mkt.conclusion ? _common.default['MktConclusion'] : null;
    const buttonText = 'Plan My Holidays';
    const Footer = _common.default['MktFooter'];
    let heroImageUrl = 'https://img.traveltriangle.com/stage/attachments/pictures/895056/original/Honeymoon-3.jpg';

    if (mkt.section1 && mkt.section1.hero && mkt.section1.hero.url) {
      heroImageUrl = mkt.section1.hero.url;
    }

    return _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "p15 pl8 pr8 pb8 sbcw top-section row relative"
    }, _react.default.createElement("div", {
      className: `${_mktCm.default.topSectionMask} ${_mktCm.default.topSectionMaskDest}`
    }), _react.default.createElement(HeroImageContainerDiv, {
      url: `${_appConfig.default.assets.images}/${heroImageUrl}?tr=w-480,h-600`
    }), Section1 ? _react.default.createElement(Section1, {
      slug: routeParams.page
    }) : null), _react.default.createElement("div", {
      className: "row relative sbcw",
      id: "toBottom"
    }, _react.default.createElement("div", {
      id: "bg-mask-ei",
      className: "bg-mask-ei",
      onClick: e => (0, _exitIntent.hidePopup)(e)
    }), Section3 ? _react.default.createElement(Section3, null) : null, Section4 ? _react.default.createElement(Section4, null) : null, Testimonials ? _react.default.createElement(Testimonials, null) : null, _react.default.createElement("div", {
      id: "reactExitIntentImage",
      className: "mkt-mob-exit-intent mb2 p0 col-xs-12 relative",
      onClick: _exitIntent.showPopUp
    }), Marketplace ? _react.default.createElement(Marketplace, null) : null, Agents ? _react.default.createElement(Agents, null) : null, HowItWorks ? _react.default.createElement(HowItWorks, null) : null, Faq ? _react.default.createElement(Faq, null) : null, Conclusion ? _react.default.createElement(Conclusion, null) : null, _react.default.createElement(StickyButton, {
      className: `col-xs-12 pl0 pr0 pb8 sbcw ${makeButtonSticky ? 'makeSticky' : ''}`,
      id: "sticky-button"
    }, _react.default.createElement("div", {
      className: "pl8 pr8 z9"
    }, _react.default.createElement("button", {
      type: "button",
      onClick: this.scrollToFormHandler,
      className: `text-capitalize text-center f16 btn-filled-pri-large wfull ${_mktCm.default.buttonTop}`
    }, buttonText)))), _react.default.createElement(Footer, null));
  }

  componentDidMount() {
    setTimeout(_exitIntent.initializeExitIntent, 5000);
    const sectionCards = document.querySelectorAll('.section-cards');
    Array.from(sectionCards).forEach(swiper => {
      swiper.addEventListener('click', () => {
        this.scrollToFormHandler();
      });
    });
    this.calculateBoundaryValues();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

}, _class.propTypes = {
  location: _propTypes.default.object.isRequired,
  mkt: _propTypes.default.object.isRequired,
  routeParams: _propTypes.default.object.isRequired
}, _initialiseProps = function () {
  this.state = {
    stickyButton: {
      makeButtonSticky: false,
      topBoundary: null,
      bottomBoundary: null
    }
  };

  this.scrollToFormHandler = () => {
    window.scrollFormTimer = function () {
      window.scrollTimer = setTimeout(() => {
        const sequentialForm = document.querySelector('.main-form-container');
        const formMessageBanner = document.querySelector('.hiddendiv');
        formMessageBanner.style.display = 'none';
      }, 5000);
    };

    clearTimeout(window.scrollTimer);
    const sequentialForm = document.querySelector('.main-form-container');
    const formMessageBanner = document.querySelector('.hiddendiv');

    if (sequentialForm) {
      _modules.animateScroll.scrollTo(sequentialForm.offsetTop + 20);

      formMessageBanner.style.display = 'block';
      window.scrollFormTimer();
    }
  };

  this.setDestinationCookie = props => {
    (0, _FormDataFormatter.setCookie)('cb_dt', props.mkt.destination || '');
  };

  this.calculateBoundaryValues = () => {
    const {
      stickyButton
    } = this.state;
    const formContainer = document.querySelector('.main-form-container');
    const stickyButtonElement = document.querySelector('#sticky-button');

    if (stickyButtonElement && formContainer) {
      const topBoundary = formContainer.offsetHeight + formContainer.offsetTop;
      const bottomBoundary = stickyButtonElement.offsetTop;

      if (stickyButton.topBoundary !== topBoundary && stickyButton.bottomBoundary !== bottomBoundary) {
        this.setState({
          stickyButton: {
            makeButtonSticky: false,
            topBoundary: topBoundary,
            bottomBoundary: bottomBoundary
          }
        });
      }
    }
  };

  this.handleScroll = () => {
    const {
      stickyButton
    } = this.state;
    const {
      topBoundary,
      bottomBoundary
    } = stickyButton;
    this.calculateBoundaryValues();

    if (window && topBoundary && bottomBoundary) {
      const scrollY = window.scrollY;

      if (scrollY >= topBoundary && scrollY <= bottomBoundary) {
        this.setState({
          makeButtonSticky: true
        });
      } else {
        this.setState({
          makeButtonSticky: false
        });
      }
    }
  };
}, _temp);
exports.default = Mkt;

/***/ }),

/***/ "./app-v2/screens/mkt/mkt.cm.scss":
/*!****************************************!*\
  !*** ./app-v2/screens/mkt/mkt.cm.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"topSectionMask": "_36FKtKXveYKMVkhGYyTN06",
	"topSectionMaskDest": "gvKoMLs-UEdhAi0vb0stb"
};

/***/ }),

/***/ "./app/helpers/exitIntent.js":
/*!***********************************!*\
  !*** ./app/helpers/exitIntent.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeExitIntent = exports.renderExitIntent = exports.showPopUp = exports.hidePopup = void 0;

var _FormDataFormatter = __webpack_require__(/*! ./FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _appConfig = _interopRequireWildcard(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const hidePopup = e => {
  if (e) {
    e.stopPropagation();
  }

  document.getElementById('bg-mask-ei').classList.remove('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.remove('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].addEventListener('click', showPopUp);
};

exports.hidePopup = hidePopup;

const showPopUp = () => {
  document.getElementById('bg-mask-ei').classList.add('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.add('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].removeEventListener('click', showPopUp);
};

exports.showPopUp = showPopUp;

const renderExitIntent = () => {
  if (window.ReactExitIntentImage) {
    ReactExitIntentImage.render({
      isPublicProduct: true
    });
    window.isLeadPopupOpened = false;
    setTimeout(function () {
      window.isLeadPopupOpened = false;
      const exitPopup = document.getElementsByClassName('mkt-mob-exit-intent')[0];

      if (exitPopup) {
        exitPopup.addEventListener('click', showPopUp);
      }

      const closeBtn = document.getElementsByClassName('close-popup')[0];

      if (closeBtn) {
        const closeMobBtn = closeBtn.cloneNode();
        closeMobBtn.innerHTML = "&#215;";
        closeMobBtn.classList.add('close-mob-btn');
        closeBtn.classList.add('hide');
        closeMobBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          hidePopup(e);
        });
        closeBtn.parentNode.insertBefore(closeMobBtn, closeBtn);
      }
    }, 1000);
  }
};

exports.renderExitIntent = renderExitIntent;

const initializeExitIntent = () => {
  const existing = document.getElementById('exit-intent-script-tag');

  if (existing && document.getElementById('reactExitIntentImage')) {
    renderExitIntent();
    return;
  }

  const el = document.createElement('script');
  el.id = 'exit-intent-script-tag';
  el.src = `${_appConfig.default.assets.js}/public-product/trips3m-imageintent-amp-vsegment-0.5.js`;
  el.defer = true;

  el.onload = () => {
    console.log('script loaded');

    if (typeof window !== 'undefined' && typeof window.Raven !== 'undefined' && _appConfig.sentryKey) {
      //todo: ignore errors for the chat connection
      window.Raven.config(_appConfig.sentryKey, {
        shouldSendCallback(data) {
          return !/MSIE/.test(window.navigator.userAgent);
        },

        ignoreErrors: ["Uncaught, unspecified error event."]
      }).install();
    }

    if (document.getElementById('reactExitIntentImage')) {
      renderExitIntent();
    }
  };

  document.body.appendChild(el);
};

exports.initializeExitIntent = initializeExitIntent;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9ta3QvTWt0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL21rdC9ta3QuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaGVscGVycy9leGl0SW50ZW50LmpzIl0sIm5hbWVzIjpbIkhlcm9JbWFnZUNvbnRhaW5lckRpdiIsInVybCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiU3RpY2t5QnV0dG9uIiwiZ2xhbW9yb3VzIiwiZGl2IiwiekluZGV4IiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsImJvdHRvbSIsIk1rdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXREZXN0aW5hdGlvbkNvb2tpZSIsInJlbmRlciIsIm1ha2VCdXR0b25TdGlja3kiLCJzdGF0ZSIsIm1rdCIsInJvdXRlUGFyYW1zIiwiU2VjdGlvbjEiLCJzZWN0aW9uMSIsImNvbW1vbiIsIlNlY3Rpb24zIiwic2VjdGlvbjMiLCJTZWN0aW9uNCIsInNlY3Rpb240IiwiVGVzdGltb25pYWxzIiwidGVzdGltb25pYWxzIiwiTWFya2V0cGxhY2UiLCJBZ2VudHMiLCJhZ2VudHMiLCJIb3dJdFdvcmtzIiwiRmFxIiwiZmFxcyIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uIiwiYnV0dG9uVGV4dCIsIkZvb3RlciIsImhlcm9JbWFnZVVybCIsImhlcm8iLCJzdHlsZXMiLCJ0b3BTZWN0aW9uTWFzayIsInRvcFNlY3Rpb25NYXNrRGVzdCIsImNvbmZpZyIsImFzc2V0cyIsImltYWdlcyIsInBhZ2UiLCJlIiwic2hvd1BvcFVwIiwic2Nyb2xsVG9Gb3JtSGFuZGxlciIsImJ1dHRvblRvcCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0VGltZW91dCIsImluaXRpYWxpemVFeGl0SW50ZW50Iiwic2VjdGlvbkNhcmRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsInN3aXBlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWxjdWxhdGVCb3VuZGFyeVZhbHVlcyIsIndpbmRvdyIsImhhbmRsZVNjcm9sbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb3BUeXBlcyIsImxvY2F0aW9uIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0aWNreUJ1dHRvbiIsInRvcEJvdW5kYXJ5IiwiYm90dG9tQm91bmRhcnkiLCJzY3JvbGxGb3JtVGltZXIiLCJzY3JvbGxUaW1lciIsInNlcXVlbnRpYWxGb3JtIiwicXVlcnlTZWxlY3RvciIsImZvcm1NZXNzYWdlQmFubmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xlYXJUaW1lb3V0IiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbFRvIiwib2Zmc2V0VG9wIiwiZGVzdGluYXRpb24iLCJmb3JtQ29udGFpbmVyIiwic3RpY2t5QnV0dG9uRWxlbWVudCIsIm9mZnNldEhlaWdodCIsInNldFN0YXRlIiwic2Nyb2xsWSIsImhpZGVQb3B1cCIsInN0b3BQcm9wYWdhdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZCIsInJlbmRlckV4aXRJbnRlbnQiLCJSZWFjdEV4aXRJbnRlbnRJbWFnZSIsImlzUHVibGljUHJvZHVjdCIsImlzTGVhZFBvcHVwT3BlbmVkIiwiZXhpdFBvcHVwIiwiY2xvc2VCdG4iLCJjbG9zZU1vYkJ0biIsImNsb25lTm9kZSIsImlubmVySFRNTCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImV4aXN0aW5nIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzcmMiLCJqcyIsImRlZmVyIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsIlJhdmVuIiwic2VudHJ5S2V5Iiwic2hvdWxkU2VuZENhbGxiYWNrIiwiZGF0YSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpZ25vcmVFcnJvcnMiLCJpbnN0YWxsIiwiYm9keSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTUEsd0JBQXdCLHdCQUFVLEtBQVYsRUFBaUIsQ0FBQztBQUFFQztBQUFGLENBQUQsTUFBYztBQUMzREMsWUFBVSxVQURpRDtBQUUzREMsT0FBSyxDQUZzRDtBQUczREMsUUFBTSxDQUhxRDtBQUkzREMsU0FBTyxNQUpvRDtBQUszREMsVUFBUSxLQUxtRDtBQU0zREMsY0FBYSxPQUFNTixHQUFJLGFBTm9DO0FBTzNETyxrQkFBZ0I7QUFQMkMsQ0FBZCxDQUFqQixDQUE5Qjs7QUFVQSxNQUFNQyxlQUFlQyxtQkFBVUMsR0FBVixDQUFjO0FBQ2pDLGtCQUFnQjtBQUNkVCxjQUFVLE9BREk7QUFFZFUsWUFBUSxHQUZNO0FBR2RMLGdCQUFZLFNBSEU7QUFJZE0sa0JBQWMsY0FKQTtBQUtkQyxhQUFTLFFBTEs7QUFNZEMsWUFBUTtBQU5NO0FBRGlCLENBQWQsQ0FBckI7O0lBWXFCQyxHLHFCQUFOLE1BQU1BLEdBQU4sU0FBa0JDLGdCQUFsQixDQUE0QjtBQWV6Q0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQjs7QUFFakIsU0FBS0Msb0JBQUwsQ0FBMEJELEtBQTFCO0FBQ0Q7O0FBeUJERSxXQUFTO0FBQ1AsVUFBTTtBQUFFQztBQUFGLFFBQXVCLEtBQUtDLEtBQWxDO0FBQ0EsVUFBTTtBQUFFQyxTQUFGO0FBQU9DO0FBQVAsUUFBdUIsS0FBS04sS0FBbEM7QUFFQSxVQUFNTyxXQUFXRixJQUFJRyxRQUFKLEdBQWVDLGdCQUFPLGFBQVAsQ0FBZixHQUF1QyxJQUF4RDtBQUNBLFVBQU1DLFdBQVdMLElBQUlN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UzBELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWDtBQUNBRCxLQUFHRSxFQUFILEdBQU8sd0JBQVA7QUFDQUYsS0FBR0csR0FBSCxHQUFVLEdBQUV4RSxtQkFBT0MsTUFBUCxDQUFjd0UsRUFBRyx5REFBN0I7QUFDQUosS0FBR0ssS0FBSCxHQUFXLElBQVg7O0FBQ0FMLEtBQUdNLE1BQUgsR0FBWSxNQUFNO0FBQ2hCQyxZQUFRQyxHQUFSLENBQVksZUFBWjs7QUFDQSxRQUFJLE9BQU96RCxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9BLE9BQU8wRCxLQUFkLEtBQXdCLFdBQXpELElBQ0ZDLG9CQURGLEVBQ2E7QUFDWDtBQUNBM0QsYUFBTzBELEtBQVAsQ0FBYTlFLE1BQWIsQ0FBb0IrRSxvQkFBcEIsRUFBK0I7QUFDN0JDLDJCQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsaUJBQU8sQ0FBQyxPQUFPQyxJQUFQLENBQVk5RCxPQUFPK0QsU0FBUCxDQUFpQkMsU0FBN0IsQ0FBUjtBQUNELFNBSDRCOztBQUk3QkMsc0JBQWMsQ0FDWixvQ0FEWTtBQUplLE9BQS9CLEVBT0dDLE9BUEg7QUFRRDs7QUFDRCxRQUFJMUUsU0FBU3VDLGNBQVQsQ0FBd0Isc0JBQXhCLENBQUosRUFBcUQ7QUFDbkRLO0FBQ0Q7QUFDRixHQWpCRDs7QUFrQkE1QyxXQUFTMkUsSUFBVCxDQUFjQyxXQUFkLENBQTBCbkIsRUFBMUI7QUFDRCxDQTlCTSIsImZpbGUiOiJta3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGFuaW1hdGVTY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwvbW9kdWxlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2hlbHBlcnMvRm9ybURhdGFGb3JtYXR0ZXInO1xuaW1wb3J0IHsgaGlkZVBvcHVwLCBpbml0aWFsaXplRXhpdEludGVudCwgc2hvd1BvcFVwIH0gZnJvbSAnaGVscGVycy9leGl0SW50ZW50JztcbmltcG9ydCBjb21tb24gZnJvbSAnYXBwLXYyL2NvbW1vbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWt0LmNtLnNjc3MnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5jb25zdCBIZXJvSW1hZ2VDb250YWluZXJEaXYgPSBnbGFtb3JvdXMoJ2RpdicpKCh7IHVybCB9KSA9PiAoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICc3MCUnLFxuICBiYWNrZ3JvdW5kOiBgdXJsKCR7dXJsfSkgbm8tcmVwZWF0YCxcbiAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG59KSk7XG5cbmNvbnN0IFN0aWNreUJ1dHRvbiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJi5tYWtlU3RpY2t5Jzoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogJzEnLFxuICAgIGJhY2tncm91bmQ6ICcjRURGMEYzJyxcbiAgICBtYXJnaW5Cb3R0b206ICcwICFpbXBvcnRhbnQnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDAnLFxuICAgIGJvdHRvbTogJzAnXG4gIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1rdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBta3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByb3V0ZVBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHN0aWNreUJ1dHRvbjoge1xuICAgICAgbWFrZUJ1dHRvblN0aWNreTogZmFsc2UsXG4gICAgICB0b3BCb3VuZGFyeTogbnVsbCxcbiAgICAgIGJvdHRvbUJvdW5kYXJ5OiBudWxsXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0RGVzdGluYXRpb25Db29raWUocHJvcHMpO1xuICB9XG5cbiAgc2Nyb2xsVG9Gb3JtSGFuZGxlciA9ICgpID0+IHtcblxuICAgIHdpbmRvdy5zY3JvbGxGb3JtVGltZXIgPSBmdW5jdGlvbigpe1xuICAgICAgd2luZG93LnNjcm9sbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlcXVlbnRpYWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgZm9ybU1lc3NhZ2VCYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuZGl2Jyk7XG4gICAgICAgIGZvcm1NZXNzYWdlQmFubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCA1MDAwKTt9O1xuXG4gICAgY2xlYXJUaW1lb3V0KHdpbmRvdy5zY3JvbGxUaW1lcik7XG4gICAgY29uc3Qgc2VxdWVudGlhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1mb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcm1NZXNzYWdlQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbmRpdicpO1xuICAgIGlmIChzZXF1ZW50aWFsRm9ybSkge1xuICAgICAgYW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyhzZXF1ZW50aWFsRm9ybS5vZmZzZXRUb3AgKyAyMCk7XG4gICAgICBmb3JtTWVzc2FnZUJhbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHdpbmRvdy5zY3JvbGxGb3JtVGltZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgc2V0RGVzdGluYXRpb25Db29raWUgPSAocHJvcHMpID0+IHtcbiAgICBzZXRDb29raWUoJ2NiX2R0JywgcHJvcHMubWt0LmRlc3RpbmF0aW9uIHx8ICcnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtYWtlQnV0dG9uU3RpY2t5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWt0LCByb3V0ZVBhcmFtcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IFNlY3Rpb24xID0gbWt0LnNlY3Rpb24xID8gY29tbW9uWydNa3RTZWN0aW9uMSddIDogbnVsbDtcbiAgICBjb25zdCBTZWN0aW9uMyA9IG1rdC5zZWN0aW9uMyA/IGNvbW1vblsnTWt0U2VjdGlvbjMnXSA6IG51bGw7XG4gICAgY29uc3QgU2VjdGlvbjQgPSBta3Quc2VjdGlvbjQgPyBjb21tb25bJ01rdFNlY3Rpb240J10gOiBudWxsO1xuICAgIGNvbnN0IFRlc3RpbW9uaWFscyA9IG1rdC50ZXN0aW1vbmlhbHMgPyBjb21tb25bJ01rdFRlc3RpbW9uaWFscyddIDogbnVsbDtcbiAgICBjb25zdCBNYXJrZXRwbGFjZSA9IGNvbW1vblsnTWt0TWFya2V0cGxhY2UnXTtcbiAgICBjb25zdCBBZ2VudHMgPSBta3QuYWdlbnRzID8gY29tbW9uWydNa3RBZ2VudHMnXSA6IG51bGw7XG4gICAgY29uc3QgSG93SXRXb3JrcyA9IGNvbW1vblsnTWt0SG93SXRXb3JrcyddO1xuICAgIGNvbnN0IEZhcSA9IG1rdC5mYXFzID8gY29tbW9uWydNa3RGYXEnXSA6IG51bGw7XG4gICAgY29uc3QgQ29uY2x1c2lvbiA9IG1rdC5jb25jbHVzaW9uID8gY29tbW9uWydNa3RDb25jbHVzaW9uJ10gOiBudWxsO1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSAnUGxhbiBNeSBIb2xpZGF5cyc7XG4gICAgY29uc3QgRm9vdGVyID0gY29tbW9uWydNa3RGb290ZXInXTtcblxuICAgIGxldCBoZXJvSW1hZ2VVcmwgPSAnaHR0cHM6Ly9pbWcudHJhdmVsdHJpYW5nbGUuY29tL3N0YWdlL2F0dGFjaG1lbnRzL3BpY3R1cmVzLzg5NTA1Ni9vcmlnaW5hbC9Ib25leW1vb24tMy5qcGcnO1xuXG4gICAgaWYgKG1rdC5zZWN0aW9uMSAmJiBta3Quc2VjdGlvbjEuaGVybyAmJiBta3Quc2VjdGlvbjEuaGVyby51cmwpIHtcbiAgICAgIGhlcm9JbWFnZVVybCA9IG1rdC5zZWN0aW9uMS5oZXJvLnVybDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBwbDggcHI4IHBiOCBzYmN3IHRvcC1zZWN0aW9uIHJvdyByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9wU2VjdGlvbk1hc2t9ICR7c3R5bGVzLnRvcFNlY3Rpb25NYXNrRGVzdH1gfSAvPlxuICAgICAgICAgIDxIZXJvSW1hZ2VDb250YWluZXJEaXYgdXJsPXtgJHtjb25maWcuYXNzZXRzLmltYWdlc30vJHtoZXJvSW1hZ2VVcmx9P3RyPXctNDgwLGgtNjAwYH0gLz5cbiAgICAgICAgICB7U2VjdGlvbjEgPyA8U2VjdGlvbjEgc2x1Zz17cm91dGVQYXJhbXMucGFnZX0gLz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByZWxhdGl2ZSBzYmN3XCIgaWQ9XCJ0b0JvdHRvbVwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJiZy1tYXNrLWVpXCIgY2xhc3NOYW1lPVwiYmctbWFzay1laVwiIG9uQ2xpY2s9e2UgPT4gaGlkZVBvcHVwKGUpfSAvPlxuXG4gICAgICAgICAgeyAvKiBXZSBkb24ndCBuZWVkIFNlY3Rpb24yIG9uIE1TLiBTZWN0aW9uMiBpcyBqdXN0IGEgZHVtbXkgY29tcG9uZW50ICovfVxuXG4gICAgICAgICAge1NlY3Rpb24zID8gPFNlY3Rpb24zIC8+IDogbnVsbH1cbiAgICAgICAgICB7U2VjdGlvbjQgPyA8U2VjdGlvbjQgLz4gOiBudWxsfVxuICAgICAgICAgIHtUZXN0aW1vbmlhbHMgPyA8VGVzdGltb25pYWxzIC8+IDogbnVsbH1cbiAgICAgICAgICA8ZGl2IGlkPVwicmVhY3RFeGl0SW50ZW50SW1hZ2VcIiBjbGFzc05hbWU9XCJta3QtbW9iLWV4aXQtaW50ZW50IG1iMiBwMCBjb2wteHMtMTIgcmVsYXRpdmVcIiBvbkNsaWNrPXtzaG93UG9wVXB9IC8+XG4gICAgICAgICAge01hcmtldHBsYWNlID8gPE1hcmtldHBsYWNlIC8+IDogbnVsbH1cbiAgICAgICAgICB7QWdlbnRzID8gPEFnZW50cyAvPiA6IG51bGx9XG4gICAgICAgICAge0hvd0l0V29ya3MgPyA8SG93SXRXb3JrcyAvPiA6IG51bGx9XG4gICAgICAgICAge0ZhcSA/IDxGYXEgLz4gOiBudWxsfVxuICAgICAgICAgIHtDb25jbHVzaW9uID8gPENvbmNsdXNpb24gLz4gOiBudWxsfVxuXG4gICAgICAgICAgPFN0aWNreUJ1dHRvbiBjbGFzc05hbWU9e2Bjb2wteHMtMTIgcGwwIHByMCBwYjggc2JjdyAkeyhtYWtlQnV0dG9uU3RpY2t5KSA/ICdtYWtlU3RpY2t5JyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0aWNreS1idXR0b25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGw4IHByOCB6OVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsVG9Gb3JtSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWNhcGl0YWxpemUgdGV4dC1jZW50ZXIgZjE2IGJ0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsICR7c3R5bGVzLmJ1dHRvblRvcH1gfVxuICAgICAgICAgICAgICA+e2J1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1N0aWNreUJ1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dChpbml0aWFsaXplRXhpdEludGVudCwgNTAwMCk7XG5cbiAgICBjb25zdCBzZWN0aW9uQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi1jYXJkcycpO1xuICAgIEFycmF5LmZyb20oc2VjdGlvbkNhcmRzKS5mb3JFYWNoKHN3aXBlciA9PiB7XG4gICAgICBzd2lwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Gb3JtSGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5jYWxjdWxhdGVCb3VuZGFyeVZhbHVlcygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjYWxjdWxhdGVCb3VuZGFyeVZhbHVlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0aWNreUJ1dHRvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZm9ybS1jb250YWluZXInKTtcbiAgICBjb25zdCBzdGlja3lCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0aWNreS1idXR0b24nKTtcbiAgICBpZiAoc3RpY2t5QnV0dG9uRWxlbWVudCAmJiBmb3JtQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCB0b3BCb3VuZGFyeSA9IGZvcm1Db250YWluZXIub2Zmc2V0SGVpZ2h0ICsgZm9ybUNvbnRhaW5lci5vZmZzZXRUb3A7XG4gICAgICBjb25zdCBib3R0b21Cb3VuZGFyeSA9IHN0aWNreUJ1dHRvbkVsZW1lbnQub2Zmc2V0VG9wO1xuXG4gICAgICBpZiAoc3RpY2t5QnV0dG9uLnRvcEJvdW5kYXJ5ICE9PSB0b3BCb3VuZGFyeSAmJiBzdGlja3lCdXR0b24uYm90dG9tQm91bmRhcnkgIT09IGJvdHRvbUJvdW5kYXJ5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN0aWNreUJ1dHRvbjoge1xuICAgICAgICAgICAgbWFrZUJ1dHRvblN0aWNreTogZmFsc2UsXG4gICAgICAgICAgICB0b3BCb3VuZGFyeTogdG9wQm91bmRhcnksXG4gICAgICAgICAgICBib3R0b21Cb3VuZGFyeTogYm90dG9tQm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzdGlja3lCdXR0b24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0b3BCb3VuZGFyeSwgYm90dG9tQm91bmRhcnkgfSA9IHN0aWNreUJ1dHRvbjtcbiAgICB0aGlzLmNhbGN1bGF0ZUJvdW5kYXJ5VmFsdWVzKCk7XG5cbiAgICBpZiAod2luZG93ICYmIHRvcEJvdW5kYXJ5ICYmIGJvdHRvbUJvdW5kYXJ5KSB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBpZiAoc2Nyb2xsWSA+PSB0b3BCb3VuZGFyeSAmJiBzY3JvbGxZIDw9IGJvdHRvbUJvdW5kYXJ5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWtlQnV0dG9uU3RpY2t5OiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1ha2VCdXR0b25TdGlja3k6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvcFNlY3Rpb25NYXNrXCI6IFwiXzM2Rkt0S1h2ZVlLTVZraEdZeVROMDZcIixcblx0XCJ0b3BTZWN0aW9uTWFza0Rlc3RcIjogXCJndktvTUxzLVVFZGhBaTB2YjBzdGJcIlxufTsiLCJpbXBvcnQgeyBnZXRQYWdlTmFtZSwgZ2V0Q29va2llIH0gZnJvbSBcIi4vRm9ybURhdGFGb3JtYXR0ZXJcIjtcbmltcG9ydCBjb25maWcsIHsgc2VudHJ5S2V5IH0gZnJvbSAnYXBwQ29uZmlnJztcbmltcG9ydCB7IHRyYWNrU2VnbWVudCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBoaWRlUG9wdXAgPSAoZSkgPT4ge1xuICBpZiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLW1hc2stZWknKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21rdC1tb2ItZXhpdC1pbnRlbnQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdtb2ItZXhpdC1wb3B1cCcpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdta3QtbW9iLWV4aXQtaW50ZW50JylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UG9wVXApO1xufTtcblxuXG5leHBvcnQgY29uc3Qgc2hvd1BvcFVwID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctbWFzay1laScpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWt0LW1vYi1leGl0LWludGVudCcpWzBdLmNsYXNzTGlzdC5hZGQoJ21vYi1leGl0LXBvcHVwJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21rdC1tb2ItZXhpdC1pbnRlbnQnKVswXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQb3BVcCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyRXhpdEludGVudCA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5SZWFjdEV4aXRJbnRlbnRJbWFnZSkge1xuICAgIFJlYWN0RXhpdEludGVudEltYWdlLnJlbmRlcih7aXNQdWJsaWNQcm9kdWN0OiB0cnVlfSk7XG4gICAgd2luZG93LmlzTGVhZFBvcHVwT3BlbmVkID0gZmFsc2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgd2luZG93LmlzTGVhZFBvcHVwT3BlbmVkID0gZmFsc2U7XG4gICAgICBjb25zdCBleGl0UG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdta3QtbW9iLWV4aXQtaW50ZW50JylbMF07XG4gICAgICBpZiAoZXhpdFBvcHVwKSB7XG4gICAgICAgIGV4aXRQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQb3BVcCk7XG4gICAgICB9XG4gICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlLXBvcHVwJylbMF07XG4gICAgICBpZiAoY2xvc2VCdG4pIHtcbiAgICAgICAgY29uc3QgY2xvc2VNb2JCdG4gPSBjbG9zZUJ0bi5jbG9uZU5vZGUoKTtcbiAgICAgICAgY2xvc2VNb2JCdG4uaW5uZXJIVE1MID0gXCImIzIxNTtcIjtcbiAgICAgICAgY2xvc2VNb2JCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9iLWJ0bicpO1xuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGNsb3NlTW9iQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgaGlkZVBvcHVwKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VCdG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvc2VNb2JCdG4sIGNsb3NlQnRuKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVFeGl0SW50ZW50ID0gKCkgPT4ge1xuICBjb25zdCBleGlzdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0LWludGVudC1zY3JpcHQtdGFnJyk7XG4gIGlmKGV4aXN0aW5nICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdEV4aXRJbnRlbnRJbWFnZScpKXtcbiAgICByZW5kZXJFeGl0SW50ZW50KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgZWwuaWQ9ICdleGl0LWludGVudC1zY3JpcHQtdGFnJztcbiAgZWwuc3JjID0gYCR7Y29uZmlnLmFzc2V0cy5qc30vcHVibGljLXByb2R1Y3QvdHJpcHMzbS1pbWFnZWludGVudC1hbXAtdnNlZ21lbnQtMC41LmpzYDtcbiAgZWwuZGVmZXIgPSB0cnVlO1xuICBlbC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NjcmlwdCBsb2FkZWQnKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5SYXZlbiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHNlbnRyeUtleSkge1xuICAgICAgLy90b2RvOiBpZ25vcmUgZXJyb3JzIGZvciB0aGUgY2hhdCBjb25uZWN0aW9uXG4gICAgICB3aW5kb3cuUmF2ZW4uY29uZmlnKHNlbnRyeUtleSwge1xuICAgICAgICBzaG91bGRTZW5kQ2FsbGJhY2soZGF0YSkge1xuICAgICAgICAgIHJldHVybiAhL01TSUUvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBpZ25vcmVFcnJvcnM6IFtcbiAgICAgICAgICBcIlVuY2F1Z2h0LCB1bnNwZWNpZmllZCBlcnJvciBldmVudC5cIlxuICAgICAgICBdXG4gICAgICB9KS5pbnN0YWxsKCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3RFeGl0SW50ZW50SW1hZ2UnKSkge1xuICAgICAgcmVuZGVyRXhpdEludGVudCgpO1xuICAgIH1cbiAgfTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==