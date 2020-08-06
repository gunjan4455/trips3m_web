require("source-map-support").install();
exports.ids = ["why-travel-triangle"];
exports.modules = {

/***/ "./app-v2/modules/howItWorks/HowItWorksVideo.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/howItWorks/HowItWorksVideo.js ***!
  \******************************************************/
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

var _youTubeVideo = _interopRequireDefault(__webpack_require__(/*! modules/youTubeVideo */ "./app-v2/modules/youTubeVideo/index.js"));

var _segmentEvents = __webpack_require__(/*! app/actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GVideoWrapperDiv = _glamorous.default.div({
  position: 'relative',
  paddingBottom: '56.25%',

  /* 16:9 */
  height: '0',
  ' iframe': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  }
});

let HowItWorksVideo = class HowItWorksVideo extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.onPlayerReady = event => {
      event.target.mute();
    }, this.onPlayerStateChange = event => {
      const time = event.target.getCurrentTime();

      if (event.data === YT.PlayerState.PLAYING) {
        this.trackSegmentEvent(event, 'PLAY', time);
      } else if (event.data === YT.PlayerState.PAUSED) {
        this.trackSegmentEvent(event, 'PAUSE', time);
      }
    }, this.trackSegmentEvent = (event, cta, time) => {
      this.props.trackSegmentEvent({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: 'How it works video',
        object: '',
        cta,
        miscId1: cta,
        miscType1: 'New State of the video',
        miscId2: time,
        miscType2: 'Time at which event occured'
      });
    }, this.render = () => {
      return _react.default.createElement(GVideoWrapperDiv, {
        className: "flex flexFull",
        style: {
          maxWidth: '100%',
          minWidth: '100%'
        }
      }, _react.default.createElement(_youTubeVideo.default, {
        id: "Fxs0oYJxSOc",
        onPlayerStateChange: this.onPlayerStateChange,
        onPlayerReady: this.onPlayerReady
      }));
    }, _temp;
  }

};
HowItWorksVideo.propTypes = {
  trackSegmentEvent: _propTypes.default.func
};
HowItWorksVideo.defaultProps = {
  trackSegmentEvent: () => {}
};
var _default = HowItWorksVideo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/whyTT/WhyTT.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/rlp/whyTT/WhyTT.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _HowItWorksVideo = _interopRequireDefault(__webpack_require__(/*! modules/howItWorks/HowItWorksVideo */ "./app-v2/modules/howItWorks/HowItWorksVideo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GIconDiv = _glamorous.default.div({
  width: '65px',
  height: '57px',
  '& svg': {
    height: '57px'
  }
});

const GButton = _glamorous.default.button({
  border: '1px solid #2196F3',
  padding: '10px'
});

let WhyTT = class WhyTT extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, section, cta) => {
      (0, _utils.rescue)(() => {
        this.props.trackSegment({
          event,
          section,
          object: '',
          cta
        });
      });
    };

    this.onSensorChange = isVisible => {
      if (isVisible && !this.isEventTracked) {
        this.isEventTracked = true;
        this.trackSegmentEvent(_segmentEvents.ORGANISM_VIEWED, 'Why travel with TravelTriangle');
      }
    };

    this.isEventTracked = false;
  }

  render() {
    return _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: this.onSensorChange,
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "sbcw p15 at_whyTT_section"
    }, _react.default.createElement("h6", {
      className: "f16 pfc5 m0 text-center fw9"
    }, "Why Travel with TravelTriangle"), _react.default.createElement("div", {
      className: "mt15 mb15 text-center flex spaceBetween"
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(GIconDiv, {
      className: "mb8 mlauto mrauto"
    }, _react.default.createElement(_Icon.PartPay, null)), _react.default.createElement("p", {
      className: "f12"
    }, _react.default.createElement("span", {
      className: "block"
    }, "Easy EMI"), " Option Available")), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(GIconDiv, {
      className: "mb8 mlauto mrauto"
    }, _react.default.createElement(_Icon.IllusTraveler, null)), _react.default.createElement("p", {
      className: "f12"
    }, _react.default.createElement("span", {
      className: "block"
    }, "22Lacs+"), " Happy Travellers")), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(GIconDiv, {
      className: "mb8 mlauto mrauto"
    }, _react.default.createElement(_Icon.IllusAgent, null)), _react.default.createElement("p", {
      className: "f12"
    }, _react.default.createElement("span", {
      className: "block"
    }, "650+"), " Verified Agents"))), _react.default.createElement(_HowItWorksVideo.default, {
      trackSegmentEvent: this.props.trackSegment
    })));
  }

};
WhyTT.propTypes = {
  trackSegment: _propTypes.default.func
};
var _default = WhyTT;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/rlp/whyTT/index.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/rlp/whyTT/index.js ***!
  \*******************************************/
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

var _WhyTT = _interopRequireDefault(__webpack_require__(/*! ./WhyTT */ "./app-v2/modules/rlp/whyTT/WhyTT.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(null, null)(_WhyTT.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/youTubeVideo/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/youTubeVideo/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let YouTubeVideo = class YouTubeVideo extends _react.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.loadVideo = () => {
      const {
        onPlayerReady,
        onPlayerStateChange,
        id
      } = this.props;
      this.player = new window.YT.Player(`youtube-player-${id}`, {
        videoId: id,
        height: 'auto',
        width: '100%',
        playerVars: {
          'autoplay': 1,
          'loop': 1,
          'playlist': id
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    }, _temp;
  }

  componentDidMount() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = this.loadVideo;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
    }
  }

  render() {
    const {
      id
    } = this.props;
    return _react.default.createElement("div", {
      id: `youtube-player-${id}`
    });
  }

};
YouTubeVideo.propTypes = {
  id: _propTypes.default.string.isRequired,
  onPlayerStateChange: _propTypes.default.func,
  onPlayerReady: _propTypes.default.func
};
YouTubeVideo.defaultProps = {
  onPlayerStateChange: () => {},
  onPlayerReady: () => {}
};
var _default = YouTubeVideo;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob3dJdFdvcmtzL0hvd0l0V29ya3NWaWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ybHAvd2h5VFQvV2h5VFQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcmxwL3doeVRUL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3lvdVR1YmVWaWRlby9pbmRleC5qcyJdLCJuYW1lcyI6WyJHVmlkZW9XcmFwcGVyRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwicG9zaXRpb24iLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsIndpZHRoIiwiSG93SXRXb3Jrc1ZpZGVvIiwiQ29tcG9uZW50Iiwib25QbGF5ZXJSZWFkeSIsImV2ZW50IiwidGFyZ2V0IiwibXV0ZSIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJ0aW1lIiwiZ2V0Q3VycmVudFRpbWUiLCJkYXRhIiwiWVQiLCJQbGF5ZXJTdGF0ZSIsIlBMQVlJTkciLCJ0cmFja1NlZ21lbnRFdmVudCIsIlBBVVNFRCIsImN0YSIsInByb3BzIiwiT1JHQU5JU01fQ0xJQ0tFRCIsInNlY3Rpb24iLCJvYmplY3QiLCJtaXNjSWQxIiwibWlzY1R5cGUxIiwibWlzY0lkMiIsIm1pc2NUeXBlMiIsInJlbmRlciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiR0ljb25EaXYiLCJHQnV0dG9uIiwiYnV0dG9uIiwiYm9yZGVyIiwicGFkZGluZyIsIldoeVRUIiwiY29uc3RydWN0b3IiLCJ0cmFja1NlZ21lbnQiLCJvblNlbnNvckNoYW5nZSIsImlzVmlzaWJsZSIsImlzRXZlbnRUcmFja2VkIiwiT1JHQU5JU01fVklFV0VEIiwiY29udGFpbmVyIiwiWW91VHViZVZpZGVvIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibG9hZFZpZGVvIiwiaWQiLCJwbGF5ZXIiLCJ3aW5kb3ciLCJQbGF5ZXIiLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsImV2ZW50cyIsIm9uUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0YWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeSIsImZpcnN0U2NyaXB0VGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxtQkFBbUJDLG1CQUFVQyxHQUFWLENBQWM7QUFDckNDLFlBQVUsVUFEMkI7QUFFckNDLGlCQUFlLFFBRnNCOztBQUVaO0FBQ3pCQyxVQUFRLEdBSDZCO0FBSXJDLGFBQVk7QUFDVkYsY0FBVSxVQURBO0FBRVZHLFNBQUssR0FGSztBQUdWQyxVQUFNLEdBSEk7QUFJVkMsV0FBTyxNQUpHO0FBS1ZILFlBQVE7QUFMRTtBQUp5QixDQUFkLENBQXpCOztJQWFNSSxlLEdBQU4sTUFBTUEsZUFBTixTQUE4QkMsZ0JBQTlCLENBQXdDO0FBQUE7QUFBQTs7QUFBQSx3Q0FFdENDLGFBRnNDLEdBRXJCQyxLQUFELElBQVc7QUFDekJBLFlBQU1DLE1BQU4sQ0FBYUMsSUFBYjtBQUNELEtBSnFDLE9BTXRDQyxtQkFOc0MsR0FNZkgsS0FBRCxJQUFXO0FBQy9CLFlBQU1JLE9BQU9KLE1BQU1DLE1BQU4sQ0FBYUksY0FBYixFQUFiOztBQUNBLFVBQUlMLE1BQU1NLElBQU4sS0FBZUMsR0FBR0MsV0FBSCxDQUFlQyxPQUFsQyxFQUEwQztBQUN4QyxhQUFLQyxpQkFBTCxDQUF1QlYsS0FBdkIsRUFBOEIsTUFBOUIsRUFBc0NJLElBQXRDO0FBQ0QsT0FGRCxNQUdLLElBQUlKLE1BQU1NLElBQU4sS0FBZUMs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c0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBZb3VUdWJlVmlkZW8gZnJvbSAnbW9kdWxlcy95b3VUdWJlVmlkZW8nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FwcC9hY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHVmlkZW9XcmFwcGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBwYWRkaW5nQm90dG9tOiAnNTYuMjUlJywgLyogMTY6OSAqL1xuICBoZWlnaHQ6ICcwJyxcbiAgJyBpZnJhbWUnIDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9XG59KTtcblxuY2xhc3MgSG93SXRXb3Jrc1ZpZGVvIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBvblBsYXllclJlYWR5ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0Lm11dGUoKTtcbiAgfTtcblxuICBvblBsYXllclN0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGV2ZW50LnRhcmdldC5nZXRDdXJyZW50VGltZSgpO1xuICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKXtcbiAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoZXZlbnQsICdQTEFZJywgdGltZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCl7XG4gICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KGV2ZW50LCAnUEFVU0UnLCB0aW1lKTtcbiAgICB9XG4gIH07XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIGN0YSwgdGltZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiAnSG93IGl0IHdvcmtzIHZpZGVvJyxcbiAgICAgIG9iamVjdDogJycsXG4gICAgICBjdGEsXG4gICAgICBtaXNjSWQxOiBjdGEsXG4gICAgICBtaXNjVHlwZTE6ICdOZXcgU3RhdGUgb2YgdGhlIHZpZGVvJyxcbiAgICAgIG1pc2NJZDI6IHRpbWUsXG4gICAgICBtaXNjVHlwZTI6ICdUaW1lIGF0IHdoaWNoIGV2ZW50IG9jY3VyZWQnXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8R1ZpZGVvV3JhcHBlckRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhGdWxsXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWluV2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgPFlvdVR1YmVWaWRlb1xuICAgICAgICAgIGlkPVwiRnhzMG9ZSnhTT2NcIlxuICAgICAgICAgIG9uUGxheWVyU3RhdGVDaGFuZ2U9e3RoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZX1cbiAgICAgICAgICBvblBsYXllclJlYWR5PXt0aGlzLm9uUGxheWVyUmVhZHl9XG4gICAgICAgIC8+XG4gICAgICA8L0dWaWRlb1dyYXBwZXJEaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuSG93SXRXb3Jrc1ZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Ib3dJdFdvcmtzVmlkZW8uZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvd0l0V29ya3NWaWRlbztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCB7IFBhcnRQYXksIElsbHVzVHJhdmVsZXIsIElsbHVzQWdlbnQgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQsIE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgcmVzY3VlIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5pbXBvcnQgSG93SXRXb3Jrc1ZpZGVvIGZyb20gJ21vZHVsZXMvaG93SXRXb3Jrcy9Ib3dJdFdvcmtzVmlkZW8nO1xuXG5jb25zdCBHSWNvbkRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICB3aWR0aDogJzY1cHgnLFxuICBoZWlnaHQ6ICc1N3B4JyxcbiAgJyYgc3ZnJzoge1xuICAgIGhlaWdodDogJzU3cHgnLFxuICB9XG59KTtcblxuY29uc3QgR0J1dHRvbiA9IGdsYW1vcm91cy5idXR0b24oe1xuICBib3JkZXI6ICcxcHggc29saWQgIzIxOTZGMycsXG4gIHBhZGRpbmc6ICcxMHB4J1xufSk7XG5cbmNsYXNzIFdoeVRUIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pc0V2ZW50VHJhY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIHNlY3Rpb24sIGN0YSkgPT4ge1xuICAgIHJlc2N1ZSgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBvYmplY3Q6ICcnLFxuICAgICAgICBjdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uU2Vuc29yQ2hhbmdlID0gKGlzVmlzaWJsZSkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUgJiYgIXRoaXMuaXNFdmVudFRyYWNrZWQpIHtcbiAgICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9WSUVXRUQsICdXaHkgdHJhdmVsIHdpdGggVHJhdmVsVHJpYW5nbGUnKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2Vuc29yIG9uQ2hhbmdlPXt0aGlzLm9uU2Vuc29yQ2hhbmdlfVxuICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJ1xuICAgICAgICAgICAgICBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzYmN3IHAxNSBhdF93aHlUVF9zZWN0aW9uJz5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdmMTYgcGZjNSBtMCB0ZXh0LWNlbnRlciBmdzknPldoeSBUcmF2ZWwgd2l0aCBUcmF2ZWxUcmlhbmdsZTwvaDY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210MTUgbWIxNSB0ZXh0LWNlbnRlciBmbGV4IHNwYWNlQmV0d2Vlbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwnPlxuICAgICAgICAgICAgICA8R0ljb25EaXYgY2xhc3NOYW1lPSdtYjggbWxhdXRvIG1yYXV0byc+PFBhcnRQYXkgLz48L0dJY29uRGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMic+PHNwYW4gY2xhc3NOYW1lPSdibG9jayc+RWFzeSBFTUk8L3NwYW4+IE9wdGlvbiBBdmFpbGFibGU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4RnVsbCc+XG4gICAgICAgICAgICAgIDxHSWNvbkRpdiBjbGFzc05hbWU9J21iOCBtbGF1dG8gbXJhdXRvJz48SWxsdXNUcmF2ZWxlciAvPjwvR0ljb25EaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjEyJz48c3BhbiBjbGFzc05hbWU9J2Jsb2NrJz4yMkxhY3MrPC9zcGFuPiBIYXBweSBUcmF2ZWxsZXJzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleEZ1bGwnPlxuICAgICAgICAgICAgICA8R0ljb25EaXYgY2xhc3NOYW1lPSdtYjggbWxhdXRvIG1yYXV0byc+PElsbHVzQWdlbnQgLz48L0dJY29uRGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxMic+PHNwYW4gY2xhc3NOYW1lPSdibG9jayc+NjUwKzwvc3Bhbj4gVmVyaWZpZWQgQWdlbnRzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEhvd0l0V29ya3NWaWRlbyB0cmFja1NlZ21lbnRFdmVudD17dGhpcy5wcm9wcy50cmFja1NlZ21lbnR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZW5zb3I+XG4gICAgKTtcbiAgfVxufVxuXG5XaHlUVC5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdoeVRUO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgV2h5VFQgZnJvbSAnLi9XaHlUVCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgbnVsbCwgbnVsbFxuKShXaHlUVCkpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lclxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBZb3VUdWJlVmlkZW8gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGlmICghd2luZG93LllUKSB7XG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG5cbiAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IHRoaXMubG9hZFZpZGVvO1xuXG4gICAgICBjb25zdCBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZFZpZGVvKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZFZpZGVvID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25QbGF5ZXJSZWFkeSwgb25QbGF5ZXJTdGF0ZUNoYW5nZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgd2luZG93LllULlBsYXllcihgeW91dHViZS1wbGF5ZXItJHtpZH1gLCB7XG4gICAgICB2aWRlb0lkOiBpZCxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBsYXllclZhcnM6IHsgJ2F1dG9wbGF5JzogMSwgJ2xvb3AnOiAxLCAncGxheWxpc3QnOiBpZCAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvblJlYWR5OiBvblBsYXllclJlYWR5LFxuICAgICAgICBvblN0YXRlQ2hhbmdlOiBvblBsYXllclN0YXRlQ2hhbmdlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtgeW91dHViZS1wbGF5ZXItJHtpZH1gfSAvPlxuICAgICk7XG4gIH07XG59XG5cbllvdVR1YmVWaWRlby5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uUGxheWVyU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblBsYXllclJlYWR5OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuWW91VHViZVZpZGVvLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZTogKCkgPT4ge30sXG4gIG9uUGxheWVyUmVhZHk6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBZb3VUdWJlVmlkZW87XG4iXSwic291cmNlUm9vdCI6IiJ9