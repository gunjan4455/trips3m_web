require("source-map-support").install();
exports.ids = ["home"];
exports.modules = {

/***/ "./app-v2/modules/header/HeaderHome.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/header/HeaderHome.js ***!
  \*********************************************/
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _BurgerMenu = _interopRequireDefault(__webpack_require__(/*! ./BurgerMenu */ "./app-v2/modules/header/BurgerMenu.js"));

__webpack_require__(/*! ./Header.scss */ "./app-v2/modules/header/Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeaderHome = ({
  isTransparent
}) => _react.default.createElement("header", {
  className: "wfull z10 relative"
}, _react.default.createElement("div", {
  className: isTransparent ? 'header-con-transparent' : 'header-con'
}, _react.default.createElement("div", {
  className: "header-con-first flex spaceBetween"
}, _react.default.createElement(_BurgerMenu.default, null), _react.default.createElement("div", {
  className: "tt-logo flexFull text-center"
}, _react.default.createElement("meta", {
  itemProp: "url",
  content: "https://traveltriangle.com"
}), _react.default.createElement("meta", {
  itemProp: "logo",
  content: "https://traveltriangle.com/pp_static/pp_new_logo.jpg"
}), _react.default.createElement(_reactRouter.Link, {
  className: "tt-logo-container",
  to: "/"
}, isTransparent ? _react.default.createElement(_Icon.TTlogoSecondary, null) : _react.default.createElement(_Icon.TTlogo, null))), _react.default.createElement("div", null, _react.default.createElement("input", {
  type: "checkbox",
  id: "AddToHomeButton",
  className: "add-to-home-button"
}), _react.default.createElement("label", {
  htmlFor: "AddToHomeButton"
}, _react.default.createElement("div", {
  className: "add-to-screen"
}, _react.default.createElement("span", {
  className: "add-to-home"
})), _react.default.createElement("div", {
  className: "add-to-home-info"
}, _react.default.createElement("div", {
  className: "transparent-cut"
}), _react.default.createElement("div", {
  className: "col-xs-12 pt64 mt64 pl24 ml8 pr24 mr24 pr15 pb64"
}, _react.default.createElement("p", {
  className: "f14 fw7 sfcw text-left"
}, "Add ", _react.default.createElement("span", {
  className: "text-capitalize f18"
}, "TravelTriangle "), " to"), _react.default.createElement("p", {
  className: "f16 sfcw text-left fwb pt5"
}, "Homescreen for quick access"), _react.default.createElement("p", {
  className: "f16 fw3 sfcw pt24 relative tap-tag-addtohome"
}, " Tap ", _react.default.createElement("span", {
  className: "addtohomeoverlay iblock"
}, " ", _react.default.createElement("span", {
  className: "add-to-home iblock absolute t5 l9"
}), " "), " to bring up your browser menu and select ", _react.default.createElement("span", {
  className: "fw7"
}, '"Add to home screen"'), " to pin the TravelTriangle web app "), _react.default.createElement("div", {
  className: "btn-filled-pri mt15 ripple"
}, _react.default.createElement("div", {
  className: "wave"
}), "Got It"))))))));

var _default = HeaderHome;
exports.default = _default;
HeaderHome.propTypes = {
  isTransparent: _propTypes.default.bool
};
HeaderHome.defaultProps = {
  isTransparent: false
};

/***/ }),

/***/ "./app-v2/modules/home/HowItWorks.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/home/HowItWorks.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _letsGoCm = _interopRequireDefault(__webpack_require__(/*! app-v2/modules/home/letsGo/letsGo.cm.scss */ "./app-v2/modules/home/letsGo/letsGo.cm.scss"));

var _HowItWorksVideo = _interopRequireDefault(__webpack_require__(/*! modules/howItWorks/HowItWorksVideo */ "./app-v2/modules/howItWorks/HowItWorksVideo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const FormOneClickDetail = {
  section: 'Banner Section',
  cta: 'Lets go'
};
let HowItWorks = class HowItWorks extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      modal: false
    }, this.openModal = () => {
      this.setState({
        modal: true
      });
    }, this.closeModal = () => {
      this.setState({
        modal: false
      });
    }, _temp;
  }

  render() {
    const {
      handleLeadformModal
    } = this.props;
    return _react.default.createElement("div", {
      className: "sbcw border radius4 p24 at_expertCallback"
    }, _react.default.createElement("p", {
      className: "f20 fw9 pfc3 mb8"
    }, "How it works"), _react.default.createElement("p", {
      className: "p14 pfc4 mb15"
    }, "Real travelers. Real stories. Real opinions to help you make the right choice."), _react.default.createElement("div", {
      className: "flexFull ml4"
    }, _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("div", {
        className: "flex justifyEnd"
      }, _react.default.createElement("span", {
        className: "f14 fw7 sfc1"
      }, "Know More")),
      isOpen: this.state.modal,
      customCloseTrigger: !this.state.modal,
      fullView: false,
      hasNoClose: true
    }, _react.default.createElement("div", {
      className: "flex wfull hfull flexFull"
    }, _react.default.createElement(_HowItWorksVideo.default //trackSegmentEvent={this.props.trackSegment}
    , null)))));
  }

};
HowItWorks.propTypes = {
  handleLeadformModal: _propTypes.PropTypes.func
};
HowItWorks.defaultProps = {
  handleLeadformModal: () => {}
};
var _default = HowItWorks;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/SEOBlock.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/home/SEOBlock.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Overview = _interopRequireDefault(__webpack_require__(/*! modules/shared/Overview */ "./app-v2/modules/shared/Overview.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line quotes, max-len
const text = `
  <p>Obsessed with the idea of empowering the travelers with best vacation deals, TravelTriangle is a product of <strong>Holiday Triangle Travel Pvt. Ltd.</strong> We are an online marketplace that connects a traveler to multiple local travel agents. With the help of these 650+ local <strong>travel</strong> experts TravelTriangle has been able to cater to the needs of over 10 Lac travelers on international tour holidays as well as domestic India tours. \r\n To provide the best tour and travel experiences, our packages are customizable at the time of booking. From a backpacker’s needs to a honeymooner’s demands, TravelTriangle crafts the best vacation deals for holiday destinations in India as well as abroad. Amongst our best selling packages, our Mauritius honeymoon package guarantees personalized memories for newlyweds and our Mauritius holiday package offers an exceptional family getaway at the most reasonable costs. From the other international travel deals that we offer, Sri Lanka Tour packages, Maldives packages and Singapore packages sell like hot cakes. For tourist destinations in India, our Kerala Tour Packages are as enriching as the land of gods itself. Leh-Ladakh tour packages and Kashmir holiday packages at TravelTriangle know no limits of customization, as we have got an extremely experienced family of agents residing in the Himalayas. Book your holiday with us and we show you the world like you have never seen it before. From adventures in Ladakh to a crazy vacation in Amsterdam to romancing in the backwaters of Munnar and Venice, TravelTriangle is your ideal travel buddy.</p>
  <p>At TravelTriangle, we know that a <strong>holiday</strong>, ideally, should not be all about planning, finding and making bookings. In fact, it should be some time away from the daily hustle bustle that keeps you busy. If planning your entire tour sounds like a burden, we are the strongest shoulders to cry on. We don’t just provide well-planned and even better-executed itineraries, but also offer you a chance to customize it as per your whims and fancies. A <a href=https://traveltriangle.com/solo-tour-packages target=”_blank”>solo tour</a> on your mind? We got you covered! Planning to whisk your life partner to an uber-romantic destination? We have a huge list, and some honeymoon freebies! Taking along the family for a much needed summer break? Our list is endless, and you can also find places where kids can enjoy separate activities from adults. And what about a holiday with friends? For your gang of amigos, we have handpicked the most happening places with activities that are sure to titillate all your senses.</p>

  <p>Spend some time in the verdant environs of Bali, with the swaying rice fields giving the stunning sunrise a run for its money. Or how about enjoying a couple of days in the hyped-up atmosphere of Phuket, with sun-kissed beaches and an active nightlife to keep you company? Chances are you will also love to explore the ancient beauty and splendid architecture of various European cities, such as Athens, Rome, Paris; and the list could go on. We have added plenty more international destinations to our kitty, so that you can have your pick of amazing holidays, and travel stories to tell.</p>

  <p>If you have something a little close to home in mind, then why not spend some time exploring the luscious other-worldly beauty of the Andamans, where white-sand beaches, rocky outcrops and a colonial lifestyle await you! In case you are not a beach baby, the rolling hills of Himachal and Uttarakhand can appease your wanderlust, where a more simplistic lifestyle and friendly locals ensure a relaxing holiday. In fact, India is a great place to start quenching your thirst for travel. Whether you are looking for beaches, mountains, rivers, lakes, forests or man-made wonders to explore, India is sure to have the answer for you. And who else can cater to your travel requirements, within India as well as outside, than us! </p>

  <p>Be it a <a href=https://traveltriangle.com/budget-tour-packages target=”_blank”>budget tour</a> that you are looking for, or a super luxurious one, <strong>TravelTriangle</strong> is forever ready to plan your holiday for you, whatever the destination might be.</p>
`;

const SEOBlock = () => _react.default.createElement("div", {
  className: "at_whoweare"
}, _react.default.createElement("h2", {
  className: "f20 fw9 m0 mb24"
}, "Who We Are?"), _react.default.createElement(_Overview.default //className="pfc4"
//title="Overview"
, {
  description: text
}));

var _default = SEOBlock;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/destinationByDuration/index.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/home/destinationByDuration/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactLoadable = _interopRequireDefault(__webpack_require__(/*! react-loadable */ "react-loadable"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadableDestinationByDuration = (0, _reactLoadable.default)({
  loader: () => __webpack_require__.e(/*! import() | destination-by-duration */ "destination-by-duration").then(__webpack_require__.t.bind(null, /*! ./DestinationByDuration */ "./app-v2/modules/home/destinationByDuration/DestinationByDuration.js", 7)),
  modules: ['./DestinationByDuration'],
  webpack: () => [/*require.resolve*/(/*! ./DestinationByDuration */ "./app-v2/modules/home/destinationByDuration/DestinationByDuration.js")],
  loading: () => null
});
const DestinationByDuration = (0, _reactRedux.connect)(state => ({
  destinations: (0, _get2.default)(state, 'destinationByDuration.data', {})
}))(LoadableDestinationByDuration);
var _default = DestinationByDuration;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/letsGo/index.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/home/letsGo/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _letsGoCm = _interopRequireDefault(__webpack_require__(/*! ./letsGo.cm.scss */ "./app-v2/modules/home/letsGo/letsGo.cm.scss"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormOneClickDetail = {
  section: 'Banner Section',
  cta: 'Lets go'
};

const LetsGo = ({
  trackSegmentEvent
}) => {
  const trackClickEvent = () => {
    trackSegmentEvent({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: 'Expert Callback',
      cta: 'Get_Expert_Callback'
    });
    return true;
  };

  return _react.default.createElement("div", {
    className: "sbcw border radius4 p24 at_expertCallback"
  }, _react.default.createElement("h2", {
    className: "f20 fw9 pfc3 mb8"
  }, "Did not find what you are looking for? No worries!"), _react.default.createElement("p", {
    className: "p14 pfc4 mb15"
  }, "Fill the form and get a callback from our holiday experts"), _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement("div", {
    className: "fright"
  }, _react.default.createElement(_FormOneCTA.default, {
    clickHandler: trackClickEvent
  }, _react.default.createElement("span", {
    className: "f14 fw7 sfc1"
  }, "Get Expert\u2019s Callback")))));
};

LetsGo.propTypes = {
  trackSegmentEvent: _propTypes.PropTypes.func
};
LetsGo.defaultProps = {
  trackSegmentEvent: () => {}
};
var _default = LetsGo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/letsGo/letsGo.cm.scss":
/*!***************************************************!*\
  !*** ./app-v2/modules/home/letsGo/letsGo.cm.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_36EFuGOBnUEWGY44YplBbl",
	"popup": "_3tQQNpobPWZRPmqbmgU85n"
};

/***/ }),

/***/ "./app-v2/modules/home/travelersBlogs/TravelersBlogCard.js":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/home/travelersBlogs/TravelersBlogCard.js ***!
  \*****************************************************************/
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

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TravelersBlogCard = ({
  link,
  imgPath,
  storyHeading,
  index,
  trackSegmentEvent
}) => {
  const trackClickEvent = storyHeading => {
    trackSegmentEvent({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: 'Featured Blogs',
      object: 'Blog Card',
      cta: storyHeading.replace(/ /g, '_')
    });
  };

  return _react.default.createElement(_reactRouter.Link, {
    target: '_blank',
    to: link,
    onClick: () => trackClickEvent(storyHeading)
  }, _react.default.createElement("div", {
    className: "overflowh radius6 sbc5 mb15 ",
    style: {
      height: '140px'
    }
  }, _react.default.createElement(_Img.default //className="wfull hfull"
  , {
    ikSrc: imgPath,
    alt: storyHeading,
    preventJerkOnLoad: false,
    width: 320,
    height: 240
  })), _react.default.createElement("p", {
    className: "m0 pfc3 f14 fwb traveler-story-heading"
  }, storyHeading));
};

TravelersBlogCard.propTypes = {
  imgPath: _propTypes.default.string.isRequired,
  link: _propTypes.default.string.isRequired,
  storyHeading: _propTypes.default.string.isRequired,
  index: _propTypes.default.number.isRequired,
  trackSegmentEvent: _propTypes.default.func.isRequired
};
var _default = TravelersBlogCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/travelersBlogs/data.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/home/travelersBlogs/data.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var _default = [{
  "link": "https://traveltriangle.com/blog/top-honeymoon-destinations-in-india/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/50+Incredibly+Romantic+Honeymoon+Destinations+In+India.jpg`,
  "storyHeading": "50 Incredibly Romantic Honeymoon Destinations In India",
  "storyDate": "2017-02-20T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/international-honeymoon-destinations-on-your-budget/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/20+Most+Romantic+International+Honeymoon+Destinations+for+Every+Budget.jpg`,
  "storyHeading": "20 Most Romantic International Honeymoon Destinations for Every Budget",
  "storyDate": "2015-02-15T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/top-10-winter-honeymoon-destinations-in-india-2/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/10+Best+Winter+Honeymoon+Destinations+In+India.jpg`,
  "storyHeading": "10 Best Winter Honeymoon Destinations In India",
  "storyDate": "2015-09-13T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/budget-honeymoon-destinations-in-asia/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/14+Romantic+Honeymoon+Destinations+In+Asia+For+Every+Budget.jpg`,
  "storyHeading": "14 Romantic Honeymoon Destinations In Asia For Every Budget",
  "storyDate": "2015-07-10T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/offbeat-honeymoon-destinations-in-india/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/15+Offbeat+Honeymoon+Destinations+In+India.jpg`,
  "storyHeading": "15 Offbeat Honeymoon Destinations In India",
  "storyDate": "2016-09-29T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/unusual-honeymoon-destinations/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/20+Honeymoon+Destinations+Not+Meant+For+Ordinary+Couples.jpg`,
  "storyHeading": "20 Honeymoon Destinations Not Meant For Ordinary Couples",
  "storyDate": "2016-12-21T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/places-to-visit-in-india-before-you-turn-30/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/30+Places+To+Visit+In+India+Before+You+Turn+30.jpg`,
  "storyHeading": "30 Places To Visit In India Before You Turn 30",
  "storyDate": "2015-05-08T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/places-to-visit-in-india-in-december/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/12+Gorgeous+Places+To+Visit+In+India+This+December.jpg`,
  "storyHeading": "12 Gorgeous Places To Visit In India This December",
  "storyDate": "2016-09-29T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/overrated-destinations-in-himachal/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/10+Terribly+Overrated+Destinations+In+Himachal+&+Where+To+Travel+Instead.jpg`,
  "storyHeading": "10 Terribly Overrated Destinations In Himachal & Where To Travel Instead",
  "storyDate": "2015-11-16T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/scariest-roads-in-india/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/10+Scariest+Roads+In+India+That+Are+A+Driver's+Nightmare.jpg`,
  "storyHeading": "10 Scariest Roads In India That Are A Driver’s Nightmare",
  "storyDate": "2016-03-03T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/mauritius-vs-maldives-vs-seychelles-infographic/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/Mauritius+Vs+Maldives+Vs+Seychelles+Infographic.jpg`,
  "storyHeading": "Mauritius Vs Maldives Vs Seychelles Infographic: Which Is Your Ideal Holiday Paradise?",
  "storyDate": "2016-12-22T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/lakes-in-rajasthan/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/10+Beautiful+Lakes+In+Rajasthan+You+Must+Visit+On+Your+Next+Trip.jpg`,
  "storyHeading": "10 Beautiful Lakes In Rajasthan You Must Visit On Your Next Trip",
  "storyDate": "2016-09-06T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/places-to-visit-in-rajasthan/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/11+Places+To+Visit+In+Rajasthan.jpg`,
  "storyHeading": "11 Places To Visit In Rajasthan: A Glimpse Of Rajputana Splendor",
  "storyDate": "2016-02-24T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/4-days-in-kerala/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/Best+Places+To+Visit+And+Amazing+Things+To+Do+in+Kerala.jpg`,
  "storyHeading": "4 Days In Kerala: Best Places To Visit And Amazing Things To Do",
  "storyDate": "2017-01-11T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/offbeat-stays-in-himachal/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/5+Types+Of+Offbeat+Stays+In+Himachal+You've+Been+Missing+All+This+While.jpg`,
  "storyHeading": "5 Types Of Offbeat Stays In Himachal You’ve Been Missing All This While",
  "storyDate": "2017-05-26T18:30:00.000Z"
}, {
  "link": "https://traveltriangle.com/blog/long-weekend-getaways-from-delhi/",
  "imgPath": `${_appConfig.default.assets.images}/public-product/Blogs/Long+Weekend+Getaways+From+Delhi.jpg`,
  "storyHeading": "These Long Weekend Getaways From Delhi Should Be On Your Travel Bucket List This Independence Day",
  "storyDate": "2017-06-12T18:30:00.000Z"
}];
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/travelersBlogs/index.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/home/travelersBlogs/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _TravelersBlogCard = _interopRequireDefault(__webpack_require__(/*! ./TravelersBlogCard */ "./app-v2/modules/home/travelersBlogs/TravelersBlogCard.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! modules/shared/Swiper */ "./app-v2/modules/shared/Swiper.js"));

var _data = _interopRequireDefault(__webpack_require__(/*! ./data */ "./app-v2/modules/home/travelersBlogs/data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TravelersBlogs = ({
  trackSegmentEvent
}) => _react.default.createElement("div", {
  className: "at_travelblog"
}, _react.default.createElement("div", {
  className: "pr24 pl24"
}, _react.default.createElement("div", {
  className: "flex spaceBetween mb8"
}, _react.default.createElement("h2", {
  className: "f20 fw9 mr24"
}, "Get The Best Out Of Your Next Getaway"), _react.default.createElement(_reactRouter.Link, {
  target: "_blank",
  to: "/blog/",
  className: "f14 fw7 sfc1 iblock nowrap alignSelfFlexEnd"
}, "View All")), _react.default.createElement("p", {
  className: "f14 pfc4"
}, "Extraordinary experiences, designed Just for you")), _react.default.createElement("div", {
  className: "clearfix pt15 at_travelblog_card"
}, _react.default.createElement(_Swiper.default, {
  ssrAnimation: {
    width: 270,
    height: 140
  },
  slideClass: "slide",
  spaceBetween: 15,
  slidesPerView: "auto",
  slidesOffsetBefore: 24,
  slidesOffsetAfter: 24,
  id: "testimonials"
}, _data.default.map((item, index) => _react.default.createElement("div", {
  key: index
}, _react.default.createElement(_TravelersBlogCard.default, _extends({}, item, {
  index: index,
  trackSegmentEvent: trackSegmentEvent
})))))));

var _default = TravelersBlogs;
exports.default = _default;
TravelersBlogs.propTypes = {
  trackSegmentEvent: _propTypes.PropTypes.func
};
TravelersBlogs.defaultProps = {
  trackSegmentEvent: () => {}
};

/***/ }),

/***/ "./app-v2/modules/home/travelogues/TraveloguesCard.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/home/travelogues/TraveloguesCard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _cardCm = _interopRequireDefault(__webpack_require__(/*! ./card.cm.scss */ "./app-v2/modules/home/travelogues/card.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const charLength = 70;
let TraveloguesCard = class TraveloguesCard extends _react.default.Component {
  render() {
    const {
      heading,
      tags,
      description,
      travellerLocation,
      travellerName,
      daysAgo,
      destination,
      link,
      avatarPic,
      images,
      stars
    } = this.props;
    return _react.default.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: () => this.props.trackSegmentEvent(heading)
    }, _react.default.createElement("div", {
      className: "relative at_travelogues_card"
    }, _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement("div", {
      className: `radius6 overflowh relative ${_cardCm.default.imgWrapper}`
    }, _react.default.createElement(_Img.default, {
      ikSrc: images[0],
      alt: heading,
      width: 312,
      height: 210,
      preventJerkOnLoad: false,
      className: "wfull hfull",
      ikTransform: true
    })), _react.default.createElement("div", {
      className: "absolute b0 wfull p15"
    }, _react.default.createElement("h6", {
      className: "f16 fw9 sfcw m0 at_content_heading"
    }, heading))), _react.default.createElement("div", {
      className: "at_travelogues_detail"
    }, _react.default.createElement("div", {
      className: "pt15 pb15 sbcw radius4"
    }, _react.default.createElement("div", {
      className: "flex spaceBetween"
    }, _react.default.createElement("div", {
      className: "flex"
    }, _react.default.createElement("div", {
      className: `overflowh radius100 ${_cardCm.default.avtar}`
    }, _react.default.createElement(_Img.default, {
      ikSrc: avatarPic,
      width: 100,
      height: 100,
      alt: travellerName,
      className: "wfull",
      preventJerkOnLoad: false
    })), _react.default.createElement("div", null, _react.default.createElement("p", {
      className: "f14 pfc3 mb2"
    }, travellerName), _react.default.createElement("p", {
      className: "f10 pfc4"
    }, travellerLocation, ", ", daysAgo))), _react.default.createElement("div", {
      className: `text-right ml8 ${_cardCm.default.rightSection}`
    }, _react.default.createElement(_RatingStar.default, {
      rating: stars
    }))), _react.default.createElement("p", {
      className: "f14 pfc3 mt15"
    }, description.length < charLength ? description : `${description.slice(0, charLength)}...`)))));
  }

};
TraveloguesCard.propTypes = {
  trackSegmentEvent: _propTypes.default.func.isRequired,
  heading: _propTypes.default.string.isRequired,
  tags: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  travellerLocation: _propTypes.default.string.isRequired,
  daysAgo: _propTypes.default.string.isRequired,
  destination: _propTypes.default.string.isRequired,
  travellerName: _propTypes.default.string.isRequired,
  link: _propTypes.default.string.isRequired,
  avatarPic: _propTypes.default.string.isRequired,
  images: _propTypes.default.array.isRequired,
  stars: _propTypes.default.number.isRequired,
  tripId: _propTypes.default.number.isRequired
};
var _default = TraveloguesCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/travelogues/card.cm.scss":
/*!******************************************************!*\
  !*** ./app-v2/modules/home/travelogues/card.cm.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"imgWrapper": "_2NpT7scwL7F013Muh4EnQQ",
	"avtar": "_1Tgms7aiIWReFOZthh0ai5",
	"rightSection": "_3Rbw-SlafqkH30X6Wxen4M"
};

/***/ }),

/***/ "./app-v2/modules/home/travelogues/data.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/home/travelogues/data.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
const honeymoonData = [{
  "tripId": 1280077,
  "tripType": "Honeymoon",
  "tagName": "Neha's romantic adventure",
  "heading": "Neha's Recipe For A Perfect Bali Honeymoon",
  "tags": "#love, #thrill, #adventure, #peace",
  "description": "Neha shares her epic Bali experience with us. She elaborates on her romantic beach walks with her husband, their underwater adventures, shopping & a host of things that made their honeymoon a success.",
  "travellerName": "Neha Jadhav",
  "travellerLocation": "Mumbai",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Bali",
  "link": "https://traveltriangle.com/blog/neha-romantic-things-to-do-in-bali-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Neha+Jadhav/ThumbNail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Neha+Jadhav/Copy+of+IMG-20170722-WA0003.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Neha+Jadhav/Copy+of+IMG-20170722-WA0011.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Neha+Jadhav/Copy+of+IMG-20170722-WA0012.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Neha+Jadhav/Copy+of+IMG-20170722-WA0013.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Neha+Jadhav/Copy+of+IMG-20170722-WA0018.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Neha+Jadhav/Copy+of+IMG-20170722-WA0039.jpg`]
}, {
  "tripId": 1588185,
  "tripType": "Honeymoon",
  "tagName": "Nishant's Mauritius vacation",
  "heading": "Nishant's King-Size Vacation In Mauritius",
  "tags": "#luxury, #adventure, #beach, #romantic",
  "description": "Beaches, nature parks & water sports made Nishant's luxury vacation in Mauritius with his wife an affair to remember. He shares their impeccable experience through pictures that would make you go wow!",
  "travellerName": "Nishant Raj",
  "travellerLocation": "New Delhi",
  "daysAgo": "1 day ago",
  "stars": 4,
  "destination": "Trip to Mauriitus",
  "link": "https://traveltriangle.com/blog/nishant-luxury-vacation-in-mauritius-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Copy+of+day+1+ile+aux+cerf.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Copy+of+day+2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Copy+of+day+4+volcano.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Copy+of+DSC_0075.png`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Copy+of+DSC_0522.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Copy+of+IMG_9745.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nishant+Raj/Copy+of+seewalk.jpg`]
}, {
  "tripId": 1326286,
  "tripType": "Honeymoon",
  "tagName": "Akash's luxurious honeymoon",
  "heading": "Akash's Ultra Luxurious Honeymoon In Maldives",
  "tags": "#honeymoon, #luxury, #adventure, #beauty",
  "description": "Akash and his wife chose Centara Ras Fushi as their private island resort on their honeymoon in Maldives. They tell us why it is an excellent pick for couples who want the best of romance &  adventure.",
  "travellerName": "Akash & Toshi",
  "travellerLocation": "Bhopal",
  "daysAgo": "2 days ago",
  "stars": 5,
  "destination": "Trip to Maldives",
  "link": "https://traveltriangle.com/blog/akash-honeymoon-trip-to-maldives-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Aakash+%26+Toshi/Thumbnail+Image.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Aakash+%26+Toshi/p1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Aakash+%26+Toshi/p2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Aakash+%26+Toshi/p3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Aakash+%26+Toshi/p4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Aakash+%26+Toshi/p5.jpg`]
}, {
  "tripId": 1556919,
  "tripType": "Honeymoon",
  "tagName": "Kanav's Singapore Bali honeymoon",
  "heading": "Kanav's Epic Singapore And Bali Honeymoon",
  "tags": "#honeymoon, #romantic, #luxury, #adventure",
  "description": "Kanav & his wife witnessed the best of two worlds on their Singapore & Bali honeymoon. On their first international trip, Kanav shares how they relished every bit of an urban, and a tropical paradise!",
  "travellerName": "Kanav Puri",
  "travellerLocation": "Amritsar",
  "daysAgo": "2 days ago",
  "stars": 5,
  "destination": "Trip to Singapore & Bali",
  "link": "https://traveltriangle.com/blog/kanav-singapore-bali-honeymoon-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Kanav/Thumbnail+Image.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Kanav/K1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Kanav/k2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Kanav/k3.png`, `${_appConfig.default.assets.images}/public-product/Travelogues/Kanav/k4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Kanav/k5.jpg`]
}, {
  "tripId": 1202432,
  "tripType": "Honeymoon",
  "tagName": "Hemant's Romantic holiday in Maldives",
  "heading": "Hemant's Impeccable Honeymoon In Maldives ",
  "tags": "#honeymoon, #adventure, #beach, #nature",
  "description": "Hemant and his wife started their new life with a honeymoon in Maldives & their experience will leave you in awe. From romantic beach walks to fun water sports, here's how they made the most out of it.",
  "travellerName": "Hemant Lamoriya",
  "travellerLocation": "New Delhi",
  "daysAgo": "3 days ago",
  "stars": 5,
  "destination": "Trip to Maldives",
  "link": "https://traveltriangle.com/blog/hemant-honeymoon-trip-to-maldives-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Hemant+Lamoriya/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Hemant+Lamoriya/Copy+of+IMG-20170403-WA0000.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Hemant+Lamoriya/Copy+of+IMG-20170403-WA0003.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Hemant+Lamoriya/Copy+of+IMG-20170403-WA0009.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Hemant+Lamoriya/Copy+of+IMG-20170403-WA0010.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Hemant+Lamoriya/Copy+of+IMG-20170403-WA0013.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Hemant+Lamoriya/Copy+of+IMG-20170403-WA0014.jpg`]
}, {
  "tripId": 1337831,
  "tripType": "Honeymoon",
  "tagName": "Sohel's Vietnam visit with wife",
  "heading": "Sohel's Romantic Adventure In Vietnam",
  "tags": "#romantic, #adventure, #wanderlust, #companionship",
  "description": "Sohel and his wife experience romance from a different angle as they go on an epic trip exploring the many wonders of Vietnam. They tell us how this incredible journey changed them for better!",
  "travellerName": "Sohel Devani",
  "travellerLocation": "Hyderabad",
  "daysAgo": "3 days ago",
  "stars": 4,
  "destination": "Trip to Vietnam ",
  "link": "https://traveltriangle.com/blog/sohel-romantic-trip-to-vietnam-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Sohel+Devani/Thumbnail+image.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Sohel+Devani/Copy+of+1_Hanoi.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sohel+Devani/Copy+of+1_Nha+Tarang.JPG+100.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sohel+Devani/Copy+of+2_HaLong+Bay.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sohel+Devani/Copy+of+2_Hanoi.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sohel+Devani/Copy+of+3_HaLong+Bay.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sohel+Devani/Copy+of+4_Nha+Tarang.jpg`]
}, {
  "tripId": 1161252,
  "tripType": "Honeymoon",
  "tagName": "Sairam's one-of-its-kind honeymoon",
  "heading": "Sairam's Heavenly Honeymoon In Bali ",
  "tags": "#honeymoon, #adventure, #nature, #luxury",
  "description": "A perfect blend of romance, nature & adventure, Sairam's honeymoon in Bali was heavenly. From the sunset dinner cruise to the Kintamani tour, here are all the secrets behind their memorable affair. ",
  "travellerName": "Sairam Menon",
  "travellerLocation": "Hyderabad",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Bali",
  "link": "https://traveltriangle.com/blog/sairam-5n-6d-honeymoon-in-bali-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Sairam+Menon/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Sairam+Menon/Copy+of+day1_IMG_5622.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sairam+Menon/Copy+of+day2_DSC1982.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sairam+Menon/Copy+of+day2_DSC2010.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sairam+Menon/Copy+of+day3_IMG_5352.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sairam+Menon/Copy+of+day5_IMG_6275.jpg`]
}, {
  "tripId": 1127006,
  "tripType": "Honeymoon",
  "tagName": "Double delight honeymoon",
  "heading": "Gurpreet's Honeymoon In Singapore And Bali",
  "tags": "#honeymoon, #nature, #sightseeing, #beach",
  "description": "Having visited both Singapore and Bali on his honeymoon, Gurpreet tells us about the best places to visit in both the countries for a fruitful romantic experience with your special one.",
  "travellerName": "Gurpreet Bhatia",
  "travellerLocation": "New Delhi",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Singapore & Bali",
  "link": "https://traveltriangle.com/blog/gurpreet-honeymoon-trip-to-singapore-and-bali-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Bhatia/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Bhatia/Copy+of+IMG-20170320-WA0011.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Bhatia/Copy+of+IMG-20170320-WA0043.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Bhatia/Copy+of+IMG-20170320-WA0068.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Bhatia/Copy+of+IMG-20170320-WA0082.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Bhatia/Copy+of+IMG-20170320-WA0086.jpg`]
}, {
  "tripId": 1823982,
  "tripType": "Honeymoon",
  "tagName": "Falak's Romantic Holiday In Europe",
  "heading": "Falak's Venetian Holiday With His Wife",
  "tags": "#Romantic, #Nature, #Historical, #Mountains",
  "description": "Falak and his wife experienced old-world romance on their European holiday. From the iconic Eiffel Tower to the snowy mountains of Switzerland to the Gondola ride in Venice, they indulged in all.",
  "travellerName": "Falak Pandya",
  "travellerLocation": "Bangalore",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Europe",
  "link": "https://traveltriangle.com/blog/falak-romantic-trip-to-europe-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Falak+Pandya+(Europe)/Thumbnail/Gondola+ride+in+Venice+.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Falak+Pandya+(Europe)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Falak+Pandya+(Europe)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Falak+Pandya+(Europe)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Falak+Pandya+(Europe)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Falak+Pandya+(Europe)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Falak+Pandya+(Europe)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 1042770,
  "tripType": "Honeymoon",
  "tagName": "The Most Special Honeymoon In Europe",
  "heading": "Akshay's Surreal Honeymoon In Europe",
  "tags": "#Romantic, #Nature, #Historical, #Mountains",
  "description": "Akshay's honeymoon in Europe was a holiday of a lifetime! They witnessed the heavenly mountains of Switzerland and old world charm of Italy on a special holiday that will stay in their hearts forever!",
  "travellerName": "Akshay Punjabi",
  "travellerLocation": "Delhi",
  "daysAgo": "2 day ago",
  "stars": 5,
  "destination": "Trip to Europe",
  "link": "https://traveltriangle.com/blog/akshay-romantic-trip-to-europe-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Akshay+Punjabi+(Europe)/Thumbnail/IMG-20170204-WA0035.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Akshay+Punjabi+(Europe)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Akshay+Punjabi+(Europe)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Akshay+Punjabi+(Europe)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Akshay+Punjabi+(Europe)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Akshay+Punjabi+(Europe)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Akshay+Punjabi+(Europe)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 1837318,
  "tripType": "Honeymoon",
  "tagName": "Pankaj's Exotic Honeymoon In Bali",
  "heading": "Pankaj's Utterly Exotic Honeymoon In Bali",
  "tags": "#Romantic, #Beaches, #Adventure, #Nature",
  "description": "From temples to beaches, and from nature to adventure, Pankaj and his wife wanted to experience the best of an exotic destination and here's how Bali surprised them beyond their expectations!",
  "travellerName": "Pankaj Verma",
  "travellerLocation": "Delhi",
  "daysAgo": "2 day ago",
  "stars": 4,
  "destination": "Trip to Bali",
  "link": "https://traveltriangle.com/blog/pankaj-honeymoon-trip-to-bali-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Pankaj+Verma+(Bali)/Thumbnail/IMG_20171013_174531.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Pankaj+Verma+(Bali)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pankaj+Verma+(Bali)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pankaj+Verma+(Bali)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pankaj+Verma+(Bali)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pankaj+Verma+(Bali)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pankaj+Verma+(Bali)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 1835275,
  "tripType": "Honeymoon",
  "tagName": "A Magnificent Greek Honeymoon",
  "heading": "Sonali's Mediterranean Romantic Trip To Greece",
  "tags": "#Sea, #Romantic, #Beach, #Nightlife",
  "description": "Sonali and her husband went on a glamorous romantic trip to Greece and it was truly special in every manner. They enjoyed the magnificent charm of the Aegean Sea and the old-world charm of Santorini.",
  "travellerName": "Sonali Mahajan",
  "travellerLocation": "Mumbai",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Europe",
  "link": "https://traveltriangle.com/blog/sonali-romantic-trip-to-greece-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Sonali+Mahajan+(Europe)/Thumbnail/IMG-20171105-WA0069.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Sonali+Mahajan+(Europe)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sonali+Mahajan+(Europe)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sonali+Mahajan+(Europe)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sonali+Mahajan+(Europe)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sonali+Mahajan+(Europe)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sonali+Mahajan+(Europe)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 1297978,
  "tripType": "Honeymoon",
  "tagName": "Tale Of Romance In Seychelles",
  "heading": "Rajnish's Action-Packed Seychelles Honeymoon",
  "tags": "#Romantic, #Beaches, #Adventure, #Nature",
  "description": "Rajnish's honeymoon in Seychelles was the perfect blend of romance and adventure. From exploring the islands on their own to having beachside dinner dates, see how they made their trip ultra romantic.",
  "travellerName": "Rajnish Kumar",
  "travellerLocation": "Mumbai",
  "daysAgo": "2 day ago",
  "stars": 4,
  "destination": "Trip to Seychelles",
  "link": "https://traveltriangle.com/blog/rajnish-seychelles-honeymoon-tour-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Rajnish+Kumar+(Seychelles)/Thumbnail/La+digue.JPG`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Rajnish+Kumar+(Seychelles)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Rajnish+Kumar+(Seychelles)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Rajnish+Kumar+(Seychelles)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Rajnish+Kumar+(Seychelles)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Rajnish+Kumar+(Seychelles)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Rajnish+Kumar+(Seychelles)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 878988,
  "tripType": "Honeymoon",
  "tagName": "Adventurous Honeymoon In Maldives",
  "heading": "Nisarg's Adventurous Honeymoon In Maldives",
  "tags": "#Romantic, #Beaches, #Adventure, #Nature",
  "description": "Nisarg & his wife had a picture-perfect honeymoon in Maldives. Here's how they indulged in adventurous experiences, explored the island at their own pace, and had the dream vacation of their lives.",
  "travellerName": "Nisarg Patel",
  "travellerLocation": "Mumbai",
  "daysAgo": "2 day ago",
  "stars": 5,
  "destination": "Trip to Maldives",
  "link": "https://traveltriangle.com/blog/nisargs-honeymoon-trip-to-maldives-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Nisarg+Patel+(Maldives)/Thumbnail/image006.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Nisarg+Patel+(Maldives)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nisarg+Patel+(Maldives)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nisarg+Patel+(Maldives)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nisarg+Patel+(Maldives)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nisarg+Patel+(Maldives)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nisarg+Patel+(Maldives)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 1879168,
  "tripType": "Honeymoon",
  "tagName": "Nitin's Romantic Holiday In Maldives",
  "heading": "Nitin's Romantic Escape To Maldives",
  "tags": "#Romantic, #Nature, #Beaches, #Luxury",
  "description": "Nitin & his wife's love for travel made them take a romantic trip to Maldives. They share with us their beautiful memories and how this holiday offered them the perfect privacy, comfort & happiness.",
  "travellerName": "Nitin Parekh",
  "travellerLocation": "Mumbai",
  "daysAgo": "2 day ago",
  "stars": 4,
  "destination": "Trip to Maldives",
  "link": "https://traveltriangle.com/blog/nitin-things-to-do-on-a-romantic-trip-to-maldives-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Nitin+Parekh+(Maldives)/Thumbnail/DSC_2410.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Nitin+Parekh+(Maldives)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitin+Parekh+(Maldives)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitin+Parekh+(Maldives)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitin+Parekh+(Maldives)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitin+Parekh+(Maldives)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitin+Parekh+(Maldives)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 1767226,
  "tripType": "Honeymoon",
  "tagName": "Exploring The Beauty Of Ladakh",
  "heading": "Nitish's Picture Perfect Trip To Ladakh",
  "tags": "#Nature, #Adventure, #Romantic, #Cultural",
  "description": "Nitish and his wife went on a surreal journey to Ladakh and witnessed the magic of nature like never before. From visiting famous lakes to indulging in the culture, it was a once in a lifetime journey.",
  "travellerName": "Nitish Agrawal",
  "travellerLocation": "Pune",
  "daysAgo": "1 day ago",
  "stars": 4,
  "destination": "Trip to Ladakh",
  "link": "https://traveltriangle.com/blog/nitish-romantic-trip-to-ladakh-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Nitesh+(Ladakh)/thumbnail/image021.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Nitesh+(Ladakh)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitesh+(Ladakh)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitesh+(Ladakh)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitesh+(Ladakh)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitesh+(Ladakh)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Nitesh+(Ladakh)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 2302111,
  "tripType": "Honeymoon",
  "tagName": "Ankit's perfect maldives honeymoon",
  "heading": "Water Villas, Candlelight Dinners, Cruises & Spa: A Perfect Honeymoon",
  "tags": "#love, #peace, #relax, #chill",
  "description": "All they wanted was to spend time with each other and simply relax amid some " + "gorgeous backdrops. So, Ankit booked himself and his wife Priya a fabulous 4 nights 5 days Maldives honeymoon package.",
  "travellerName": "Ankit Wadhwa",
  "travellerLocation": "New Delhi",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Maldives",
  "link": "https://traveltriangle.com/blog/ankit-and-priya-honeymoon-trip-to-maldives-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Ankit+Wadhwa/77.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Ankit+Wadhwa/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Ankit+Wadhwa/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Ankit+Wadhwa/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Ankit+Wadhwa/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Ankit+Wadhwa/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Ankit+Wadhwa/6.jpg`]
}];
const familyData = [{
  "tripId": 1745941,
  "tripType": "Family",
  "tagName": "Seema's adventure trip",
  "heading": "Seema's Andaman Holiday With Family & Friends",
  "tags": "#family, #adventure, #beach, #nature",
  "description": "From watching the light & sound show at the Cellular Jail to beach hopping, Seema saw her dream of witnessing Andaman at its best come true. She shares the sweet tales from her trip and you'll love it.",
  "travellerName": "Seema Kumar",
  "travellerLocation": "New Delhi",
  "daysAgo": "3 days ago",
  "stars": 5,
  "destination": "Trip to Andaman",
  "link": "https://traveltriangle.com/blog/seema-trip-with-family-friends-to-andaman-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Seema+Kumar/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Seema+Kumar/Copy+of+At+Havelock+beach.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Seema+Kumar/Copy+of+At+Kaala+Patthar+beach.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Seema+Kumar/Copy+of+Fishermen+at+Havelock+beach.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Seema+Kumar/Copy+of+IMG_20170719_143610024.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Seema+Kumar/Copy+of+On+way+to+snorkelling1.jpg`]
}, {
  "tripId": 1180351,
  "tripType": "Family",
  "tagName": "A mother's trip to Iceland",
  "heading": "Pooja's Marvelous Family Trip To Iceland",
  "tags": "#family, #nature, #snow, #bonding",
  "description": "Pooja went on a family holiday to Iceland and Norway with her parents and daughter. She tells us how the trip was a mind blowing experience for them why both the countries are a must visit for all. ",
  "travellerName": "Pooja Nahar",
  "travellerLocation": "Mumbai",
  "daysAgo": "1 day ago",
  "stars": 4,
  "destination": "Trip to Europe",
  "link": "https://traveltriangle.com/blog/pooja-family-trip-to-iceland-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Pooja+Nahar/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Pooja+Nahar/Copy+of+IMG-20170524-WA0078.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pooja+Nahar/Copy+of+IMG-20170524-WA0080.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pooja+Nahar/Copy+of+IMG-20170524-WA0094.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pooja+Nahar/Copy+of+IMG-20170524-WA0102.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Pooja+Nahar/Copy+of+IMG-20170524-WA0122.jpg`]
}, {
  "tripId": 1501803,
  "tripType": "Family",
  "tagName": "Megha's Sikkim Trip",
  "heading": "Megha's Fun Family Trip To Sikkim & Darjeeling",
  "tags": "#family, #nature, #adventure, #sightseeing",
  "description": "Good companions make any holiday more memorable, and Megha's family trip to Sikkim & Darjeeling is a proof of that. From visiting the lakes to yak riding, here's how they had their moments of adventure.",
  "travellerName": "Megha Gupta",
  "travellerLocation": "Patna",
  "daysAgo": "2 days ago",
  "stars": 5,
  "destination": "Trip to Sikkim Darjeeling",
  "link": "https://traveltriangle.com/blog/megha-family-trip-to-sikkim-and-darjeeling-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Megha+Gupta/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Megha+Gupta/Copy+of+B612_20170523_080830.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Megha+Gupta/Copy+of+Mirik+(1).jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Megha+Gupta/Copy+of+Seven+Sister+(1).jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Megha+Gupta/Copy+of+Yumthang+(2).jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Megha+Gupta/Copy+of+Zero+point+(1).jpg`]
}, {
  "tripId": 1558634,
  "tripType": "Family",
  "tagName": "Couple's trip with daughter",
  "heading": "Heena's High On Love & Life Trip To Thailand",
  "tags": "#family, #culture, #nature, #luxury",
  "description": "For Heena & her husband, their trip to Thailand was more of a celebration of their daughter's happiness. Full of love & laughter, Heena shares how they celebrated their daughter's birthday in style!",
  "travellerName": "Heena Rajput",
  "travellerLocation": "New Delhi",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Thailand",
  "link": "https://traveltriangle.com/blog/heena-family-trip-to-thailand-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Heena+Rajput/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Heena+Rajput/Copy+of+IMG-20170623-WA0001.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Heena+Rajput/Copy+of+IMG-20170623-WA0002.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Heena+Rajput/Copy+of+IMG-20170623-WA0005.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Heena+Rajput/Copy+of+IMG-20170623-WA0045.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Heena+Rajput/Copy+of+IMG-20170623-WA0064.jpg`]
}, {
  "tripId": 1472855,
  "tripType": "Family",
  "tagName": "Punita & Friends in Jaisalmer",
  "heading": "Punita's Trip To The Golden City With Friends",
  "tags": "#family, #friends, #adventure, #sightseeing",
  "description": "Punita and her friends went on a trip to Jaisalmer to explore the marvels of the city and its sand dunes. She shares her rich experiences with us and tell us why it's a perfect place for youngsters.",
  "travellerName": "Punita",
  "travellerLocation": "New Delhi",
  "daysAgo": "3 days ago",
  "stars": 4,
  "destination": "Trip to Rajasthan",
  "link": "https://traveltriangle.com/blog/punita-friends-trip-to-jaisalmer-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Punita+Sharma/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Punita+Sharma/Copy+of+17.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Punita+Sharma/Copy+of+2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Punita+Sharma/Copy+of+34.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Punita+Sharma/Copy+of+8.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Punita+Sharma/Copy+of+9.jpg`]
}, {
  "tripId": 883902,
  "tripType": "Family",
  "tagName": "With family in Singapore & Malaysia",
  "heading": "Gurpreet's Family Trip To Singapore & Malaysia",
  "tags": "#family, #nature, #adventure, #sightseeing",
  "description": "Gurpreet's fun-loaded family trip to Singapore and Malaysia was exciting beyond limits. His family bonded stronger and better with time, and here's what Gurpreet wrote about his blissful vacation!",
  "travellerName": "Gurpreet Singh Gujral",
  "travellerLocation": "New Delhi",
  "daysAgo": "3 days ago",
  "stars": 5,
  "destination": "Trip to Singapore & Malaysia",
  "link": "https://traveltriangle.com/blog/gurpreet-family-trip-singapore-and-malaysia-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Singh+Gujral/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Singh+Gujral/Copy+of+IMG-20161201-WA0001.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Singh+Gujral/Copy+of+IMG-20161201-WA0008.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Singh+Gujral/Copy+of+IMG-20161202-WA0015.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Singh+Gujral/Copy+of+IMG-20161202-WA0023.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Gurpreet+Singh+Gujral/Copy+of+IMG-20161202-WA0065.jpg`]
}, {
  "tripId": 1314705,
  "tripType": "Family",
  "tagName": "Fun-filled New Zealand Vacation",
  "heading": "Vikram's Restoring Family Trip To New Zealand",
  "tags": "#adventure, #nature, #luxury, #culture",
  "description": "Vikram went on an epic trip to New Zealand with his family & friends to relish the best of nature, and adventure. From cruising to helicopter rides, here's what Vikram wrote about his refreshing trip!",
  "travellerName": "Vikram Bellur",
  "travellerLocation": "Bengaluru",
  "daysAgo": "1 day ago",
  "stars": 4,
  "destination": "Trip to New Zealand",
  "link": "https://traveltriangle.com/blog/vikram-friends-family-trip-to-newzealand-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Vikram+Bellur/Thumbnail.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Vikram+Bellur/DSC_0989.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vikram+Bellur/DSC_0994.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vikram+Bellur/DSC_1847.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vikram+Bellur/DSC_2052.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vikram+Bellur/DSC_2187.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vikram+Bellur/IMG_20170414_141352.jpg+100.jpg`]
}, {
  "tripId": 1487273,
  "tripType": "Family",
  "tagName": "Karthik's Fun Trip With Family",
  "heading": "Karthik's Incredible Family Trip To Langkawi",
  "tags": "#adventure, #family, #beach, #luxury",
  "description": "Of nature, adventure, & luxury, Karthik's fun-filled family trip to Langkawi was an out-of-the-world experience. From island hopping to skywalking, he shares how Langkawi cast a magical spell on them!",
  "travellerName": "Karthik Venkat",
  "travellerLocation": "New Delhi",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Langkawi",
  "link": "https://traveltriangle.com/blog/karthik-family-trip-to-langkawi-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Karthik+Venkat/Thumbnail+Image.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Karthik+Venkat/Copy+of+IMG_20170608_175749.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Karthik+Venkat/Copy+of+IMG_20170610_103618.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Karthik+Venkat/Copy+of+IMG_20170610_121319.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Karthik+Venkat/Copy+of+IMG_20170611_194018.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Karthik+Venkat/Copy+of+IMG_20170611_194147.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Karthik+Venkat/Copy+of+original_efd8259d-f884-4e92-a10f-3d684293fabf_IMG_20170611_194237.jpg`]
}, {
  "tripId": 1765284,
  "tripType": "Family",
  "tagName": "Sulabh's Family Holiday In Seychelles",
  "heading": "Sulabh's Adorable Seychelles Family Getaway",
  "tags": "#Nature, #Beaches, #Family, #Luxury",
  "description": "Sulabh and his adorable family had the most refreshing holiday experience in Seychelles. From scaling breathtaking beaches to hiking amid lush greens, here's what they did on their leisurely vacation.",
  "travellerName": "Sulabh Chandola",
  "travellerLocation": "Mumbai",
  "daysAgo": "3 day ago",
  "stars": 5,
  "destination": "Trip to Seychelles",
  "link": "https://traveltriangle.com/blog/sulabh-family-trip-to-seychelles-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Sulabh+Chandola+(Seychelles)/Thumbnail/Cot+d'or+Beach.JPG`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Sulabh+Chandola+(Seychelles)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sulabh+Chandola+(Seychelles)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sulabh+Chandola+(Seychelles)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sulabh+Chandola+(Seychelles)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sulabh+Chandola+(Seychelles)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Sulabh+Chandola+(Seychelles)/Best+6+(cropped)/6.jpg`]
}, {
  "tripId": 1196658,
  "tripType": "Family",
  "tagName": "Fun Family Holiday In Hong Kong",
  "heading": "Vivek's Fun-Filled Family Trip To Hong Kong",
  "tags": "#Adventure, #Fun, #Luxury, #Beaches",
  "description": "Vivek took his wife & kids for a fun-filled holiday to Hong Kong, where they had the time of their lives. Here's how their day out in Disneyland made their trip more memorable and adventuresome.",
  "travellerName": "Vivek Bhaskar",
  "travellerLocation": "Delhi",
  "daysAgo": "1 day ago",
  "stars": 5,
  "destination": "Trip to Hong Kong",
  "link": "https://traveltriangle.com/blog/vivek-4-night-5-day-family-trip-to-hong-kong-travelogue/",
  "avatarPic": `${_appConfig.default.assets.images}/public-product/Travelogues/Vivek+Bhaskar+(Hong+Kong)/Thumbnail/IMG-20170107-WA0016.jpg`,
  "images": [`${_appConfig.default.assets.images}/public-product/Travelogues/Vivek+Bhaskar+(Hong+Kong)/Best+6+(cropped)/1.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vivek+Bhaskar+(Hong+Kong)/Best+6+(cropped)/2.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vivek+Bhaskar+(Hong+Kong)/Best+6+(cropped)/3.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vivek+Bhaskar+(Hong+Kong)/Best+6+(cropped)/4.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vivek+Bhaskar+(Hong+Kong)/Best+6+(cropped)/5.jpg`, `${_appConfig.default.assets.images}/public-product/Travelogues/Vivek+Bhaskar+(Hong+Kong)/Best+6+(cropped)/6.jpg`]
}];
var _default = [...honeymoonData, ...familyData];
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/travelogues/index.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/home/travelogues/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _TraveloguesCard = _interopRequireDefault(__webpack_require__(/*! ./TraveloguesCard */ "./app-v2/modules/home/travelogues/TraveloguesCard.js"));

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/modules/home/travelogues/reducer.js");

var _data = _interopRequireDefault(__webpack_require__(/*! ./data */ "./app-v2/modules/home/travelogues/data.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! modules/shared/Swiper */ "./app-v2/modules/shared/Swiper.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Travelogues = class Travelogues extends _react.default.Component {
  constructor(props) {
    super(props);

    this.trackClickEvent = heading => {
      this.props.trackSegmentEvent({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: 'Traveler Reviews',
        object: 'Review Card',
        cta: heading.replace(/ /g, '_')
      });
    };

    this.state = {
      traveloguesData: []
    };
    this.TILES_COUNT = 7;
    this.setInitialTripIdForHomeType = this.setInitialTripIdForHomeType.bind(this);
    this._slideNumber = this._slideNumber.bind(this);
  }

  componentDidMount() {
    this.setInitialTripIdForHomeType();
  }

  setInitialTripIdForHomeType() {
    this.setState(state => _objectSpread({}, state, {
      traveloguesData: (0, _reducer.shuffleFY)(_data.default).slice(0, this.TILES_COUNT)
    }));
  }

  _slideNumber() {
    return Math.floor(Math.random() * this.TILES_COUNT);
  }

  render() {
    const selectedContent = this.state.traveloguesData.find(d => d.tripId === this.state.selectedTripId);
    return _react.default.createElement("div", {
      className: "at_travelogues"
    }, _react.default.createElement("div", {
      className: "pl24 pr24 at_travelogues_heading"
    }, _react.default.createElement("h2", {
      className: "f20 fw9 m0 mb8"
    }, "Over 40 Lac+ Happy Travelers"), _react.default.createElement("p", {
      className: "f14 pfc4 m0 mb24 clearfix"
    }, "Real travelers. Real stories. Real opinions to help you make the right choice. ", _react.default.createElement("a", {
      className: "f14 fw7 at_Travelogues_viewall fright ml15",
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://traveltriangle.com/blog/travelogues/"
    }, "View All"))), _react.default.createElement(_Swiper.default, {
      ssrAnimation: {
        width: 312,
        height: 240
      },
      slideClass: "slide",
      spaceBetween: 15,
      slidesPerView: "auto",
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
      id: "travelogues"
    }, this.state.traveloguesData.map((item, i) => _react.default.createElement("div", {
      key: i
    }, _react.default.createElement(_TraveloguesCard.default, _extends({
      trackSegmentEvent: this.trackClickEvent
    }, item))))));
  }

};
var _default = Travelogues;
exports.default = _default;
Travelogues.propTypes = {
  trackSegmentEvent: _propTypes.default.func
};
Travelogues.defaultProps = {
  trackSegmentEvent: () => {}
};

/***/ }),

/***/ "./app-v2/modules/home/travelogues/reducer.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/home/travelogues/reducer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffleFY = shuffleFY;
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

var _data = _interopRequireDefault(__webpack_require__(/*! ./data */ "./app-v2/modules/home/travelogues/data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TILES_COUNT = 7; // We are using 8 because, all we got in the Travelogues component is an array of 8 objects.

function slideNumber(state = Math.floor(Math.random() * TILES_COUNT)) {
  return state;
} // Fisher-Yates shuffling algorithm


function shuffleFY(arrayToShuffle) {
  let i = arrayToShuffle.length;
  let j = 0;
  let temp;
  const array = arrayToShuffle;

  while (i--) {
    // eslint-disable-line no-plusplus
    j = Math.floor(Math.random() * (i + 1)); // swap randomly chosen element with current element

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function shuffledDefault(state = shuffleFY(_data.default).slice(0, TILES_COUNT)) {
  return state;
}

var _default = (0, _redux.combineReducers)({
  slideNumber,
  shuffledDefault
});

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/trending/LastTrending.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/home/trending/LastTrending.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LastTrending = ({
  destCount,
  pkgCount,
  lastCardLink
}) => _react.default.createElement(_reactRouter.Link, {
  to: lastCardLink
}, _react.default.createElement("span", {
  className: "radius100 sbc1 f32 sfcw flex alignCenter justifyCenter",
  style: {
    width: '72px',
    height: '72px'
  }
}, "+"), _react.default.createElement("span", {
  className: "f14 pfc3 mt8 block overflowh text-center"
}, "View All"));

LastTrending.propTypes = {
  destCount: _propTypes.default.string.isRequired,
  pkgCount: _propTypes.default.string.isRequired,
  lastCardLink: _propTypes.default.string.isRequired
};
LastTrending.defaultProps = {
  pkgCount: '',
  destCount: '',
  lastCardLink: ''
};
var _default = LastTrending;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/trending/TrendingDestinations.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/home/trending/TrendingDestinations.js ***!
  \**************************************************************/
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

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _LastTrending = _interopRequireDefault(__webpack_require__(/*! ./LastTrending */ "./app-v2/modules/home/trending/LastTrending.js"));

var _constants = __webpack_require__(/*! app/constants */ "./app/constants/index.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let TrendingDestinations = class TrendingDestinations extends _react.Component {
  trackSegmentEvent(destination) {
    this.props.trackSegmentEvent({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: 'Explore Destinations by Theme',
      object: 'Theme',
      cta: destination
    });
  }

  getDestinations(data) {
    return data.map((item, index) => _react.default.createElement("div", {
      className: `pr24 text-center ${index < 1 ? 'pl24' : ''}`,
      key: item.id
    }, _react.default.createElement(_reactRouter.Link, {
      onClick: () => this.trackSegmentEvent(item.location),
      to: item.link
    }, _react.default.createElement("span", {
      className: "radius100 relative overflowh block",
      style: {
        width: '72px',
        height: '72px'
      }
    }, _react.default.createElement(_Img.default, {
      width: 72,
      height: 72,
      ikSrc: item.imagekitUrl,
      defaultSrc: _constants.DEFAULT_IMAGE_PATH,
      alt: item.location
    })), _react.default.createElement("span", {
      className: "f14 pfc3 mt8 iblock overflowh"
    }, item.location))));
  }

  render() {
    const {
      data,
      heading,
      showLastCard
    } = this.props;
    const lastCard = showLastCard ? [_react.default.createElement("div", {
      key: `bestseller_destinations_trending_last`,
      style: {
        width: '148px',
        paddingRight: '24px'
      }
    }, _react.default.createElement(_LastTrending.default, {
      destCount: 'View All',
      TrendingpkgCount: '',
      lastCardLink: '/All-Places'
    }))] : [];
    return _react.default.createElement("div", {
      className: "sbcw pt24 at_exploreDestinationByTheme"
    }, _react.default.createElement("div", {
      className: "common-heading-sliders mb15 pl24 pr24"
    }, _react.default.createElement("h2", {
      className: "f20 fw9"
    }, heading)), _react.default.createElement("div", {
      className: "pb24 overflowXscroll flex"
    }, [...this.getDestinations(data), ...lastCard]));
  }

};
TrendingDestinations.propTypes = {
  data: _propTypes.default.array,
  heading: _propTypes.default.string,
  showLastCard: _propTypes.default.bool,
  trackSegmentEvent: _propTypes.default.func
};
TrendingDestinations.defaultProps = {
  data: [],
  trackSegmentEvent: () => {},
  showLastCard: false
};
var _default = TrendingDestinations;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/trending/data.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/home/trending/data.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
const data = [{
  id: 1,
  location: 'Honeymoon',
  link: '/Honeymoon-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/honeymoon_romantic.png`,
  destinationCount: 60,
  price: 6000
}, {
  id: 2,
  location: 'Family',
  link: '/Family-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/family.png`,
  destinationCount: 70,
  price: 18700
}, {
  id: 3,
  location: 'Friends',
  link: '/Friends-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/friends_group.png`,
  destinationCount: 10,
  price: 21000
}, {
  id: 4,
  location: 'Solo',
  link: '/All-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/solo.png`,
  destinationCount: 130,
  price: 45999
}, {
  id: 5,
  location: 'Adventure',
  link: '/Adventure-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/adventure.png`,
  destinationCount: 30,
  price: 64999
}, {
  id: 6,
  location: 'Nature',
  link: '/Nature-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/nature.png`,
  alt: 'Nature',
  destinationCount: 100,
  price: 12810
}, {
  id: 7,
  location: 'Religious',
  link: '/Religious-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/religious.png`,
  destinationCount: 60,
  price: 64999
}, {
  id: 8,
  location: 'Wildllife',
  link: '/Wildlife-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/wildlife.png`,
  destinationCount: 20,
  price: 64999
}, {
  id: 9,
  location: 'Water Activities',
  link: '/Water Activities-Places',
  imagekitUrl: `${_appConfig.default.assets.images}/public-product/homepage_illustrations/Square/2x/water+activities.png`,
  destinationCount: 20,
  price: 64999
}];
exports.data = data;

/***/ }),

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

/***/ "./app-v2/modules/shared/Overview.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Overview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ./ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const overviewSplitAfterShowMore = overviewMoreText => {
  try {
    return overviewMoreText.replace(/<br \/>|<\/br>/g, '').replace('</span></p>\r\n', '');
  } catch (err) {
    return overviewMoreText;
  }
};

let Overview = class Overview extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.overviewContent = () => {
      const {
        description,
        footerDescription
      } = this.props;
      const desc = description && description.split('\r\n').filter(p => p.length) || [];

      if (!desc.length) {
        return null;
      }

      const footerDesc = footerDescription ? `<br>${footerDescription}` : '';
      return _react.default.createElement(_ShowMore.default, {
        wrapText: parser.parse(desc[0]),
        moreText: parser.parse(overviewSplitAfterShowMore(desc.slice(1).join('\n').concat(footerDesc)))
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row- row-mw"
    }, _react.default.createElement("div", {
      className: "read-more-box"
    }, this.overviewContent()));
  }

};
Overview.defaultProps = {
  footerDescription: '',
  description: ''
};
Overview.propTypes = {
  description: _propTypes.default.string,
  footerDescription: _propTypes.default.string
};
var _default = Overview;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/RatingStar.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/shared/RatingStar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRatingUl = _glamorous.default.div({
  margin: '0',
  padding: '0',
  display: 'inline-block',
  '& li': {
    display: 'inline-block',
    marginRight: '6px',
    width: '10px',
    height: '10px',
    '&:last-child': {
      marginRight: '0'
    },
    '& svg': {
      width: '10px',
      height: '10px',
      display: 'block'
    }
  }
});

function getStars(Component, starNum, keyType) {
  let i = 0;
  const stars = [];

  while (i < starNum) {
    stars.push(_react.default.createElement("li", {
      key: keyType + i
    }, _react.default.createElement(Component, null)));
    i += 1;
  }

  return stars;
}

const RatingStar = ({
  rating,
  isEmptyStarsHidden
}) => {
  const stars = [];
  const ratingBarRange = 5;
  const truncatedRating = Math.trunc(rating);
  const fractionalRating = parseFloat((rating - truncatedRating).toFixed(1));
  let fullStarCount = 0;
  let halfStarCount = 0;

  if (fractionalRating === 0.0) {
    fullStarCount = rating;
  } else if (fractionalRating <= 0.5) {
    fullStarCount = truncatedRating;
    halfStarCount = 1;
  } else {
    fullStarCount = truncatedRating + 1;
  }

  const emptyStarCount = ratingBarRange - (fullStarCount + halfStarCount);
  stars.push(getStars(_Icon.StarIcon, fullStarCount, 'full_star'));
  stars.push(getStars(_Icon.HalfStar, halfStarCount, 'half_star')); // stars.push(getStars(StarIconEmpty, emptyStarCount, 'empty_star'));

  if (!isEmptyStarsHidden) {
    stars.push(getStars(_Icon.StarIconEmpty, emptyStarCount, 'empty_star'));
  }

  return _react.default.createElement(GRatingUl, {
    className: "rating-star-list at_rating"
  }, _react.default.createElement("ul", null, stars));
};

RatingStar.propTypes = {
  rating: _propTypes.default.number,
  isEmptyStarsHidden: _propTypes.default.bool
};
RatingStar.defaultProps = {
  rating: 0,
  isEmptyStarsHidden: false
};
var _default = RatingStar;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Swiper.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/shared/Swiper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js"));

__webpack_require__(/*! ./Swiper.scss */ "./app-v2/modules/shared/Swiper.scss");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Swiper = (_temp2 = _class = class Swiper extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {}, this.renderServer = ({
      width,
      height
    }) => {
      return _react.default.createElement("ul", {
        style: {
          overflowX: 'scroll',
          width: width,
          display: 'inline-flex'
        }
      }, this.props.children.map((c, i) => {
        const __html = _server.default.renderToStaticMarkup(c).replace(/<img([\w\W]+?)\/>/g, `<div style="width:${width}px; height: ${height}px"`);

        return _react.default.createElement("li", {
          className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild',
          key: i
        }, _react.default.createElement("div", {
          className: 'lazyloading',
          style: {
            height: `${height}px`,
            width: '100%'
          },
          dangerouslySetInnerHTML: {
            __html: __html
          }
        }));
      }));
    }, this.renderEmptyClient = ({
      width,
      height
    }) => {
      return _react.default.createElement("div", {
        style: {
          width: width,
          height: height,
          overflow: 'hidden'
        }
      }, this.props.children.map((child, i) => {
        return _react.default.createElement("span", {
          key: i,
          className: this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild'
        }, child);
      }));
    }, _temp;
  }

  componentDidMount() {
    const swiperAsync = () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-id-swiper */ "react-id-swiper", 7)).then(s => this.setState({
      ReactIdSwiper: s.default
    })); // if (this.props.loadOnDocumentReady) {


    document.readyState === 'complete' ? swiperAsync() : window.addEventListener('load', swiperAsync); // } else {
    //   window.addEventListener('load', swiperAsync);
    // }
  }

  render() {
    const {
      ReactIdSwiper
    } = this.state;
    const {
      isSmallSwiper,
      isFullWidthSwiper,
      ssrAnimation,
      type
    } = this.props;

    if (true) {
      return this.renderServer(ssrAnimation);
    }

    if (!ReactIdSwiper) {
      return this.renderEmptyClient(ssrAnimation);
    } else {
      let swiperProps = _objectSpread({}, this.props);

      if (type === 'dots') {
        swiperProps = _objectSpread({}, swiperProps, {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      }

      return _react.default.createElement("div", null, _react.default.createElement(ReactIdSwiper, swiperProps, this.props.children.map((child, i) => {
        return _react.default.createElement("span", {
          key: i,
          className: this.props.children.length > 1 && !isSmallSwiper && !isFullWidthSwiper ? 'swiperCustomWidth block' : isSmallSwiper && !isFullWidthSwiper ? 'smallSwiperContainer block' : isFullWidthSwiper ? 'wfull' : 'swiperSingleChild wfull block'
        }, child);
      })), type === 'dots' ? _react.default.createElement("div", {
        className: "swiper-pagination"
      }) : null);
    }
  }

}, _class.propTypes = {
  type: _propTypes.default.oneOf(['dots', '']),
  ssrAnimation: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),
  children: _propTypes.default.array,
  isSmallSwiper: _propTypes.default.bool,
  isFullWidthSwiper: _propTypes.default.bool,
  loadOnDocumentReady: _propTypes.default.bool
}, _class.defaultProps = {
  type: '',
  ssrAnimation: {},
  children: [],
  isSmallSwiper: false,
  isFullWidthSwiper: false,
  loadOnDocumentReady: false
}, _temp2);
exports.default = Swiper;

/***/ }),

/***/ "./app-v2/modules/shared/Swiper.scss":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Swiper.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"swiper-container": "_2SGsY",
	"swiper-container-no-flexbox": "_173FA",
	"swiper-slide": "_3l5Ez",
	"swiper-container-vertical": "_EDIKz",
	"swiper-wrapper": "_3iyHG",
	"swiper-container-android": "_2BOXh",
	"swiper-container-multirow": "_bfTCe",
	"swiper-container-free-mode": "_JLJyK",
	"swiper-invisible-blank-slide": "_3W2Bt",
	"swiper-container-autoheight": "_21AFL",
	"swiper-container-3d": "_3TFjd",
	"swiper-slide-shadow-left": "_2lzju",
	"swiper-slide-shadow-right": "_3mnxZ",
	"swiper-slide-shadow-top": "_24m3e",
	"swiper-slide-shadow-bottom": "_1pp84",
	"swiper-cube-shadow": "_1BpoK",
	"swiper-container-wp8-horizontal": "_3ZNy4",
	"swiper-container-wp8-vertical": "_1sjXx",
	"swiper-button-prev": "_3in4g",
	"swiper-button-next": "_3YojN",
	"swiper-button-disabled": "_1-TyU",
	"swiper-container-rtl": "_1iEtb",
	"swiper-button-white": "_21H-f",
	"swiper-button-black": "_2YjgO",
	"swiper-button-lock": "_1ITR_",
	"swiper-pagination": "_1N00r",
	"swiper-pagination-hidden": "_ok4uF",
	"swiper-pagination-fraction": "_2GHo_",
	"swiper-pagination-custom": "_3pHlx",
	"swiper-container-horizontal": "_1fJ9B",
	"swiper-pagination-bullets": "_2LuGe",
	"swiper-pagination-bullets-dynamic": "_1ygv0",
	"swiper-pagination-bullet": "_3KXb7",
	"swiper-pagination-bullet-active": "_2GU9M",
	"swiper-pagination-bullet-active-main": "_2awrv",
	"swiper-pagination-bullet-active-prev": "_lTG8m",
	"swiper-pagination-bullet-active-prev-prev": "_3Ousa",
	"swiper-pagination-bullet-active-next": "_1PG01",
	"swiper-pagination-bullet-active-next-next": "_2PAd0",
	"swiper-pagination-clickable": "_3z2HD",
	"swiper-pagination-progressbar": "_ekuMa",
	"swiper-pagination-progressbar-fill": "_1WBFp",
	"swiper-pagination-white": "_3ayfy",
	"swiper-pagination-black": "_234Qn",
	"swiper-pagination-lock": "_1llor",
	"swiper-scrollbar": "_XakcQ",
	"swiper-scrollbar-drag": "_2zI-z",
	"swiper-scrollbar-cursor-drag": "_16EAR",
	"swiper-scrollbar-lock": "_2tNPu",
	"swiper-zoom-container": "_1Pc0p",
	"swiper-slide-zoomed": "_3zkE-",
	"swiper-lazy-preloader": "_1CKB-",
	"swiper-preloader-spin": "_3308Y",
	"swiper-lazy-preloader-white": "_3BraI",
	"swiper-notification": "_1ZGxr",
	"swiper-container-fade": "_sEO85",
	"swiper-slide-active": "_2KjJF",
	"swiper-container-cube": "_2ERg0",
	"swiper-slide-next": "_3VoeL",
	"swiper-slide-prev": "_vpV_R",
	"swiper-container-flip": "_3y3os",
	"swiper-container-coverflow": "_2YrFp",
	"arrowleftSlider": "_3hZ7M",
	"slider-prev": "_1pqA6",
	"arrowContainer": "_2AxxO"
};

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

/***/ }),

/***/ "./app-v2/screens/home/FooterData.js":
/*!*******************************************!*\
  !*** ./app-v2/screens/home/FooterData.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
const data = {
  footer_sections: [{
    "id": 11,
    "name": "Domestic Tour Packages",
    "footer_links": [{
      "id": 111,
      "name": "Shimla Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/shimla"
    }, {
      "id": 112,
      "name": "Manali Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/manali"
    }, {
      "id": 113,
      "name": "Gangtok Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/gangtok"
    }, {
      "id": 114,
      "name": "North East Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/north-east"
    }, {
      "id": 115,
      "name": "Ladakh Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/ladakh"
    }, {
      "id": 116,
      "name": "Darjeeling Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/darjeeling"
    }]
  }, {
    "id": 12,
    "name": "Domestic Honeymoon Packages",
    "footer_links": [{
      "id": 121,
      "name": "Shimla Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/shimla"
    }, {
      "id": 122,
      "name": "Manali Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/manali"
    }, {
      "id": 123,
      "name": "Gangtok Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/gangtok"
    }, {
      "id": 124,
      "name": "Ooty Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/ooty"
    }, {
      "id": 125,
      "name": "Coorg Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/coorg"
    }, {
      "id": 126,
      "name": "Darjeeling Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/darjeeling"
    }]
  }, {
    "id": 13,
    "name": "International Tour Packages",
    "footer_links": [{
      "id": 131,
      "name": "Bangkok Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/bangkok"
    }, {
      "id": 132,
      "name": "Spain Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/spain"
    }, {
      "id": 133,
      "name": "London Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/london"
    }, {
      "id": 134,
      "name": "Paris Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/paris"
    }, {
      "id": 135,
      "name": "Italy Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/italy"
    }, {
      "id": 136,
      "name": "Turkey Tour Packages",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/turkey"
    }]
  }, {
    "id": 14,
    "name": "International Honeymoon Packages",
    "footer_links": [{
      "id": 141,
      "name": "Bangkok Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/bangkok"
    }, {
      "id": 142,
      "name": "Pattaya Honeymoon Packages ",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/pattaya"
    }, {
      "id": 143,
      "name": "London Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/london"
    }, {
      "id": 144,
      "name": "Paris Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/paris"
    }, {
      "id": 145,
      "name": "Italy Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/italy"
    }, {
      "id": 146,
      "name": "Phuket Honeymoon Packages",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/phuket"
    }]
  }, {
    "id": 15,
    "name": "Popular Tour Packages",
    "footer_links": [{
      "id": 151,
      "name": "Tour Packages From Delhi",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/from-delhi"
    }, {
      "id": 152,
      "name": "Tour Packages From Mumbai",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/from-mumbai"
    }, {
      "id": 153,
      "name": "Tour Packages From Chennai",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/from-chennai"
    }, {
      "id": 154,
      "name": "Tour Packages From Kolkata",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/from-kolkata"
    }, {
      "id": 155,
      "name": "Tour Packages From Bangalore",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/from-bangalore"
    }, {
      "id": 156,
      "name": "Tour Packages From Hyderabad",
      "description": null,
      "url": "https://traveltriangle.com/tour-packages/from-hyderabad"
    }]
  }, {
    "id": 16,
    "name": "Popular Honeymoon Packages ",
    "footer_links": [{
      "id": 161,
      "name": "Honeymoon Packages From Delhi",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/from-delhi"
    }, {
      "id": 162,
      "name": "Honeymoon Packages From Mumbai",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/from-mumbai"
    }, {
      "id": 163,
      "name": "Honeymoon Packages From Chennai",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/from-chennai"
    }, {
      "id": 165,
      "name": "Honeymoon Packages From Bangalore",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/from-bangalore"
    }, {
      "id": 166,
      "name": "Honeymoon Packages From Hyderabad",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/from-hyderabad"
    }, {
      "id": 164,
      "name": "Honeymoon Packages From Pune",
      "description": null,
      "url": "https://traveltriangle.com/honeymoon-packages/from-pune"
    }]
  }]
};
exports.data = data;

/***/ }),

/***/ "./app-v2/screens/home/HomeAsync.js":
/*!******************************************!*\
  !*** ./app-v2/screens/home/HomeAsync.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reactScrollPercentage = __webpack_require__(/*! react-scroll-percentage */ "react-scroll-percentage");

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _HeaderHome = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderHome */ "./app-v2/modules/header/HeaderHome.js"));

var _BookedNotification = _interopRequireDefault(__webpack_require__(/*! components/BookedNotification/BookedNotification */ "./app/components/BookedNotification/BookedNotification.js"));

var _HomeBanner = _interopRequireDefault(__webpack_require__(/*! components/Home/HomeBanner */ "./app/components/Home/HomeBanner.js"));

var _TrendingDestinations = _interopRequireDefault(__webpack_require__(/*! modules/home/trending/TrendingDestinations */ "./app-v2/modules/home/trending/TrendingDestinations.js"));

var _data = __webpack_require__(/*! modules/home/trending/data */ "./app-v2/modules/home/trending/data.js");

var _letsGo = _interopRequireDefault(__webpack_require__(/*! modules/home/letsGo */ "./app-v2/modules/home/letsGo/index.js"));

var _HowItWorks = _interopRequireDefault(__webpack_require__(/*! modules/home/HowItWorks */ "./app-v2/modules/home/HowItWorks.js"));

var _travelersBlogs = _interopRequireDefault(__webpack_require__(/*! modules/home/travelersBlogs */ "./app-v2/modules/home/travelersBlogs/index.js"));

var _SEOBlock = _interopRequireDefault(__webpack_require__(/*! modules/home/SEOBlock */ "./app-v2/modules/home/SEOBlock.js"));

var _destinationByDuration = _interopRequireDefault(__webpack_require__(/*! modules/home/destinationByDuration */ "./app-v2/modules/home/destinationByDuration/index.js"));

var _travelogues = _interopRequireDefault(__webpack_require__(/*! modules/home/travelogues */ "./app-v2/modules/home/travelogues/index.js"));

var _FixedMenu = _interopRequireDefault(__webpack_require__(/*! components/FixedMenu/FixedMenu */ "./app/components/FixedMenu/FixedMenu.js"));

var _ToasterMessage = _interopRequireDefault(__webpack_require__(/*! components/Common/ToasterMessage */ "./app/components/Common/ToasterMessage.js"));

var _WelcomeCarousel = _interopRequireDefault(__webpack_require__(/*! components/Home/WelcomeCarousel */ "./app/components/Home/WelcomeCarousel.js"));

var _FixedLeadFormButton = _interopRequireDefault(__webpack_require__(/*! components/Home/FixedLeadFormButton */ "./app/components/Home/FixedLeadFormButton.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _FormDataFormatter = __webpack_require__(/*! helpers/FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _Slider = __webpack_require__(/*! constants/Slider */ "./app/constants/Slider.js");

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _FooterData = __webpack_require__(/*! ./FooterData */ "./app-v2/screens/home/FooterData.js");

var _SeoFooter = _interopRequireDefault(__webpack_require__(/*! components/Common/SeoFooter */ "./app/components/Common/SeoFooter.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! components/Footer/Footer */ "./app/components/Footer/Footer.js"));

__webpack_require__(/*! theme/common.scss */ "./app/theme/common.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const renderHelmet = () => _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, "Personalized Holiday Packages | Customized Tour Packages from multiple local and trusted travel agents"), _react.default.createElement("meta", {
  property: "fb:app_id",
  content: "168534953203541"
}), _react.default.createElement("meta", {
  name: "mobile-web-app-capable",
  content: "yes"
}), _react.default.createElement("meta", {
  name: "theme-color",
  content: "#68c4c1"
}), _react.default.createElement("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes"
}), _react.default.createElement("link", {
  rel: "canonical",
  href: "https://traveltriangle.com/"
}), _react.default.createElement("link", {
  href: "//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico",
  rel: "shortcut icon",
  type: "image/x-icon"
}), _react.default.createElement("link", {
  href: "//s1.traveltriangle.com/assets/new_ui_images/favicon-272d35945da72afb1d18b254b1723e8b.ico",
  rel: "icon",
  type: "image/x-icon"
}), _react.default.createElement("meta", {
  httpEquiv: "Content-Type",
  content: "text/html; charset=utf-8"
}), _react.default.createElement("meta", {
  property: "fb:app_id",
  content: "168534953203541"
}), _react.default.createElement("meta", {
  name: "category",
  content: "Destination:Unknown"
}), _react.default.createElement("meta", {
  name: "destination_id",
  content: ""
}), _react.default.createElement("meta", {
  name: "destination_type",
  content: ""
}), _react.default.createElement("meta", {
  name: "description",
  content: "Customize an Unforgettable Experience with help of multiple local expert agents! Add offbeat attractions, choose local cuisines, add local activities, plan village tour or local shopping. NASSCOM top 50 emerging companies of India, TieCon Top 9 companies, Website of the year 2011, Esparks 2011 Hottest E-commerce startups"
}), _react.default.createElement("meta", {
  name: "keywords",
  content: "trips, tours, holidays, tour packages, market, customize, agents, travel, holiday packages in india, vacation packages in india, travel sites"
}), _react.default.createElement("meta", {
  property: "og:url",
  content: "https://traveltriangle.com"
}), _react.default.createElement("meta", {
  property: "og:image",
  content: `${_appConfig.default.assets.images}/assets/seo_home/banner-image-e24c2e8cb056006b8d1d57bb2d6de66e.jpg`
}), _react.default.createElement("meta", {
  property: "og:site_name",
  content: "TravelTriangle.com"
}), _react.default.createElement("meta", {
  name: "smartaddon-verification",
  content: "eddbf5aa71ba4a4029bead17a0940aaf"
}), _react.default.createElement("meta", {
  charSet: "utf-8"
}), _react.default.createElement("meta", {
  name: "page_fullname",
  content: "Home Page"
}));

let HomeAsync = class HomeAsync extends _react.Component {
  constructor(props) {
    super(props);

    this.onPageScroll = () => {
      const documentHeight = document.body.scrollHeight;
      const percentHeight = documentHeight / 100 * 10;
      const pageYscroll = window.pageYOffset;

      if (pageYscroll > percentHeight) {
        this.setState({
          isChatButtonVisible: true
        });
      } else {
        this.setState({
          isChatButtonVisible: false
        });
      }
    };

    this.trackLeadFunnel = (type, cta, section) => {
      if (type === 'lead_funnel') {
        this.props.trackLeadFunnelClick({
          //verify its existence
          funnelStep: 1,
          section,
          cta,
          category: 'Destination: Unknown',
          object: ''
        });
      }
    };

    this.trackHomePage = ({
      event,
      category,
      section,
      object,
      cta
    }) => {
      (0, _segmentEvents.trackSegment)({
        event,
        category: category || 'Home Page',
        section,
        object,
        cta
      });
    };

    this.onSensorChange = (isVisible, section) => {
      if (isVisible) {
        if (!this.isEventTracked[section]) {
          this.isEventTracked[section] = true;
          (0, _segmentEvents.trackSegment)({
            event: _segmentEvents.ORGANISM_VIEWED,
            section
          });
        }
      }
    };

    this.state = {
      isChatButtonVisible: false,
      carouselData: {}
    };
    this.isEventTracked = {
      'Explore Destinations By Theme': false,
      'Expert Callback': false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onPageScroll);
  }

  render() {
    const {
      isAuthenticated,
      shouldDisplayLatestTrip,
      userDetails,
      trackCategoryClick,
      showToasterMessage,
      updateFields,
      carouselData,
      carouselPackages,
      welcomeCarouselPackages
    } = this.props;
    (0, _segmentEvents.initializeScroller)();
    (0, _FormDataFormatter.setCookie)('cb_dt', '');
    return _react.default.createElement("div", {
      className: "at_homeContainer row row- sbc5 homePage"
    }, renderHelmet(), _react.default.createElement("div", {
      itemScope: "itemscope",
      itemType: "https://schema.org/Organization"
    }, _react.default.createElement(_reactScrollPercentage.ScrollPercentage, {
      onChange: _segmentEvents.onScroll
    }, showToasterMessage ? _react.default.createElement(_ToasterMessage.default, {
      toasterContent: "Your request is submitted. We will call you back within 24hrs.",
      callbackAction: () => {
        updateFields({
          type: _Slider.TRIP_UPDATED_IN_REDIS,
          value: false
        });
      },
      timeInMS: 5000
    }) : null, _react.default.createElement("div", {
      className: "relative z15"
    }, _react.default.createElement("div", {
      className: "absolute z1 wfull t0 l0 r0"
    }, _react.default.createElement(_HeaderHome.default, {
      isTransparent: true
    })), _react.default.createElement(_HomeBanner.default, {
      trackSegmentEvent: this.trackHomePage
    })), _react.default.createElement("div", {
      className: "homePageLayoutContainer sbcw"
    }, isAuthenticated && shouldDisplayLatestTrip ? _react.default.createElement("div", {
      className: "m0 mb8"
    }, _react.default.createElement(_BookedNotification.default, userDetails.lastActiveTrip)) : null, _react.default.createElement(_WelcomeCarousel.default, {
      carouselData: carouselData,
      carouselPackages: carouselPackages,
      welcomeCarouselPackages: welcomeCarouselPackages
    }), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Destinations By Theme'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement(_TrendingDestinations.default, {
      heading: "Explore Destinations by Theme",
      showTrending: false,
      showContact: true,
      data: _data.data,
      showLastCard: true,
      trackSegmentEvent: this.trackHomePage
    })), _react.default.createElement("div", {
      className: "pb24"
    }, _react.default.createElement(_destinationByDuration.default, {
      trackSegmentEvent: this.trackHomePage
    })), _react.default.createElement("div", {
      className: "pt24 pb24"
    }, _react.default.createElement(_travelogues.default, {
      trackSegmentEvent: this.trackHomePage //handleLeadFormModal={handleLeadFormModal}  verify

    })), _react.default.createElement("div", {
      className: "p24"
    }, _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, 'Expert Callback'),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement(_letsGo.default, {
      trackSegmentEvent: this.trackHomePage
    }))), _react.default.createElement("div", {
      className: "pt24 pb24"
    }, _react.default.createElement(_travelersBlogs.default, {
      trackSegmentEvent: this.trackHomePage
    })), _react.default.createElement("div", {
      className: "p24"
    }, _react.default.createElement(_HowItWorks.default, null)), _react.default.createElement("div", {
      className: "p24 pb48"
    }, _react.default.createElement(_SEOBlock.default, null))), _react.default.createElement("div", {
      className: "row row- pb64 pt0 sbc5"
    }, _react.default.createElement(_SeoFooter.default, {
      footerSections: _FooterData.data.footer_sections
    }), _react.default.createElement(_Footer.default, {
      isHomePage: true
    })), this.state.isChatButtonVisible ? _react.default.createElement(_FixedMenu.default, {
      hasBottomFixedBtn: true,
      trackLeadFunnelClick: this.trackLeadFunnel
    }) : null, _react.default.createElement(_FixedLeadFormButton.default, {
      trackLeadFunnelClick: this.trackLeadFunnel,
      trackSegmentEvent: this.trackHomePage
    }))));
  }

};
HomeAsync.propTypes = {
  isAuthenticated: _propTypes.default.bool.isRequired,
  userDetails: _propTypes.default.object,
  trackCategoryClick: _propTypes.default.func.isRequired,
  shouldDisplayLatestTrip: _propTypes.default.bool,
  trackLeadFunnelClick: _propTypes.default.func.isRequired,
  showToasterMessage: _propTypes.default.bool.isRequired,
  updateFields: _propTypes.default.func.isRequired,
  carouselData: _propTypes.default.object,
  carouselPackages: _propTypes.default.object,
  welcomeCarouselPackages: _propTypes.default.func
};
HomeAsync.defaultProps = {
  userDetails: {},
  shouldDisplayLatestTrip: false
};
var _default = HomeAsync; //

exports.default = _default;

/***/ }),

/***/ "./app/components/Common/SeoFooter.js":
/*!********************************************!*\
  !*** ./app/components/Common/SeoFooter.js ***!
  \********************************************/
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GSeoFooterDiv = _glamorous.default.div({
  overflow: 'hidden',
  borderTop: '1px solid #3e3e3e',
  '& .tabsHeadings': {
    '& > div': {
      display: 'none',
      '&.selected-content': {
        display: 'block'
      }
    },
    '& .tabsHeadingsMain': {
      overflowX: 'scroll',
      '& .selected-heading': {
        background: '#fff',
        borderColor: '#aaa',
        color: 'black',
        border: '0 none',
        backgroundColor: '#f1f1f1',
        '&::before, &::after': {
          backgroundColor: '#3e3e3e'
        },
        '&::before': {
          transform: 'rotate(-45deg)'
        },
        '&::after': {
          transform: 'rotate(-135deg)'
        }
      },
      '& li': {
        whiteSpace: 'pre',
        height: '48px',
        padding: '0 30px 0 10px',
        alignItems: 'center',
        display: 'flex',
        '&::before, &::after': {
          content: '\' \'',
          position: 'absolute',
          width: '1px',
          height: '6px',
          background: '#fff',
          top: '22px'
        },
        '&::before': {
          transform: 'rotate(45deg)',
          right: '10px'
        },
        '&::after': {
          transform: 'rotate(135deg)',
          right: '13px'
        }
      }
    }
  }
});

let SeoFooter = class SeoFooter extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      selectedSeoFooterHeading: -1
    }, this.footerSectionHeadingHandler = i => {
      const {
        selectedSeoFooterHeading
      } = this.state;

      if (selectedSeoFooterHeading === i) {
        return this.setState({
          selectedSeoFooterHeading: -1
        });
      }

      this.setState({
        selectedSeoFooterHeading: i
      });
    }, _temp;
  }

  render() {
    const {
      footerSections
    } = this.props;
    const {
      selectedSeoFooterHeading
    } = this.state;
    return _react.default.createElement(GSeoFooterDiv, null, _react.default.createElement("div", {
      className: "tabsHeadings pbc3"
    }, _react.default.createElement("ul", {
      className: "tabsHeadingsMain flex"
    }, footerSections.map((footerSection, i) => _react.default.createElement("li", {
      onClick: () => this.footerSectionHeadingHandler(i),
      className: `alignCenter relative fw7 sfcw m0 f14 ${i === selectedSeoFooterHeading ? 'selected-heading' : ''}`,
      key: footerSection.name
    }, footerSection.name))), footerSections.map((footerSection, i) => _react.default.createElement("div", {
      className: `sbcw ${i === selectedSeoFooterHeading ? 'selected-content' : ''}`
    }, _react.default.createElement("div", {
      className: "p15"
    }, footerSection.footer_links.map(footerLink => _react.default.createElement(_reactRouter.Link, {
      className: "block pfc3 mb8",
      key: footerLink.url,
      to: footerLink.url
    }, footerLink.name)))))));
  }

};
SeoFooter.propTypes = {
  footerSections: _propTypes.default.array.isRequired
};
var _default = SeoFooter;
exports.default = _default;

/***/ }),

/***/ "./app/components/Common/ToasterMessage.js":
/*!*************************************************!*\
  !*** ./app/components/Common/ToasterMessage.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ToasterMessages = (_temp = _class = class ToasterMessages extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      toasterShown: false
    };
  }

  componentDidMount() {
    if (!this.state.toasterShown) {
      this.setState({
        toasterShown: true
      }, () => {
        setTimeout(() => {
          this.setState({
            toasterShown: false
          }, this.props.callbackAction());
        }, this.props.timeInMS);
      });
    }
  }

  render() {
    return _react.default.createElement("div", null, this.state.toasterShown ? _react.default.createElement("div", {
      className: "fixed wfull t50 z16 sbc1 p8"
    }, _react.default.createElement("p", {
      className: "wfull text-center f12 sfcw"
    }, this.props.toasterContent)) : null);
  }

}, _class.propTypes = {
  toasterContent: _propTypes.default.string,
  callbackAction: _propTypes.default.func,
  timeInMS: _propTypes.default.number
}, _class.defaultProps = {
  toasterContent: '',
  callbackAction: () => {},
  timeInMS: 5000
}, _temp);
var _default = ToasterMessages;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./app/components/Footer/Footer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FooterLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/FooterLinks */ "./app/components/Footer/FooterLinks.js"));

var _AddressTT = _interopRequireDefault(__webpack_require__(/*! components/Footer/AddressTT */ "./app/components/Footer/AddressTT.js"));

var _CopyRight = _interopRequireDefault(__webpack_require__(/*! components/Footer/CopyRight */ "./app/components/Footer/CopyRight.js"));

var _SocialLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/SocialLinks */ "./app/components/Footer/SocialLinks.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoveIconCon = _glamorous.default.span({
  width: '20px',
  height: '20px',
  margin: '0 8px',
  display: 'inline-block'
});

const MadeWith = _glamorous.default.div({
  height: '20px',
  lineHeight: '20px',
  fontSize: '12px',
  textAlign: 'center',
  color: '#ffffff',
  '& > p': {
    height: '20px',
    lineHeight: '20px',
    verticalAlign: 'top'
  }
});

const Footer = ({
  isHomePage
}) => _react.default.createElement("div", {
  className: "at_footer row row- pbc3 p8"
}, _react.default.createElement("div", {
  className: "pt0 pb0"
}, _react.default.createElement(_FooterLinks.default, null)), _react.default.createElement("div", {
  className: "pt8 mb24"
}, _react.default.createElement(_AddressTT.default, {
  isHomePage: isHomePage
})), _react.default.createElement("div", {
  className: "mb24"
}, _react.default.createElement(_SocialLinks.default, null)), _react.default.createElement("div", {
  className: "flex spaceBetween alignCenter"
}, _react.default.createElement(MadeWith, {
  className: "flex alignCenter flexFull"
}, _react.default.createElement("p", {
  className: "m0 f12 iblock at_madelove"
}, "Made with"), _react.default.createElement(LoveIconCon, {
  className: "relative"
}, _react.default.createElement(_Icon.LoveIcon, null)), _react.default.createElement("p", {
  className: "m0 f12 iblock"
}, "in India")), _react.default.createElement("div", {
  className: "flexFull text-right"
}, _react.default.createElement(_CopyRight.default, null))));

Footer.propTypes = {
  isHomePage: _propTypes.default.bool
};
Footer.defaultProps = {
  isHomePage: false
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./app/components/Home/BannerImg.scss":
/*!********************************************!*\
  !*** ./app/components/Home/BannerImg.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"banner-img-container": "_2AJCs",
	"header-background": "_3pwtQ",
	"wfull": "_pqC3Q",
	"header-background-small": "_2ajNd",
	"home_page_header_ui_div_cls": "_1SSIc",
	"m8": "_3DfAF",
	"relative": "_2cPTw",
	"p8": "_3pLi_",
	"sbcw": "_1osl-",
	"row": "_UtMeS",
	"row-": "_3oOtC",
	"pl8": "_2DwKg",
	"pr8": "_2QP72",
	"mb8": "_ZtzCi",
	"text-center": "_1F0aB",
	"header-con": "_OVOiO",
	"search-container-main": "_2VrpN",
	"home_page_theme_ui_div_cls": "_1Z06G",
	"at_searchButton": "_1OPgg",
	"input-search-large": "_1Ya5D",
	"pbc1": "_3URqW",
	"pb8": "_1ecbH",
	"fixed-menu-container": "_3tffg",
	"plan-holi": "_2HKBU",
	"tt-logo": "_2mRO5",
	"tt-logo-container": "_x1Vx9"
};

/***/ }),

/***/ "./app/components/Home/FixedLeadFormButton.js":
/*!****************************************************!*\
  !*** ./app/components/Home/FixedLeadFormButton.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FixedLeadFormButton = ({
  trackLeadFunnelClick,
  trackSegmentEvent
}) => {
  const ctaText = 'Plan My Holiday';

  const trackClickEvent = () => {
    trackLeadFunnelClick('lead_funnel', ctaText, 'Home Page Fixed Button');
    trackSegmentEvent({
      event: _segmentEvents.ORGANISM_CLICKED,
      section: 'Sticky Bar',
      cta: 'Plan My Holiday'
    });
    return true;
  };

  return _react.default.createElement("div", {
    className: "fixed sbcw p8 bs6 b0 l0 r0 z2 wfull"
  }, _react.default.createElement(_FormOneCTA.default, {
    clickHandler: trackClickEvent
  }, _react.default.createElement("div", {
    className: "at_bannerBtn wfull btn-filled-pri-large"
  }, ctaText)));
};

FixedLeadFormButton.propTypes = {
  trackLeadFunnelClick: _propTypes.default.func,
  trackSegmentEvent: _propTypes.default.func
};
FixedLeadFormButton.defaultProps = {
  trackLeadFunnelClick: () => {},
  trackSegmentEvent: () => {}
};
var _default = FixedLeadFormButton;
exports.default = _default;

/***/ }),

/***/ "./app/components/Home/HomeBanner.js":
/*!*******************************************!*\
  !*** ./app/components/Home/HomeBanner.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

__webpack_require__(/*! ./BannerImg.scss */ "./app/components/Home/BannerImg.scss");

var _Search = _interopRequireDefault(__webpack_require__(/*! ../../components/Search/Search */ "./app/components/Search/Search.js"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _homeBannerCm = _interopRequireDefault(__webpack_require__(/*! ./homeBanner.cm.scss */ "./app/components/Home/homeBanner.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let HomeBanner = class HomeBanner extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallDevice: false
    };
  }

  componentDidMount() {
    const getWindowHeight = window.innerHeight;

    if (getWindowHeight < 520) {
      this.setState({
        isSmallDevice: true
      });
    }
  }

  render() {
    const {
      imgDetails
    } = this.props;
    return _react.default.createElement("div", {
      className: `col-md-12 p0 header-background wfull relative ${this.state.isSmallDevice ? 'header-background-small' : ''}`
    }, _react.default.createElement("div", {
      className: `${this.state.isSmallDevice ? _homeBannerCm.default.bannerImgSmall : _homeBannerCm.default.bannerImg} overflowh`
    }, _react.default.createElement(_Img.default, {
      src: imgDetails.imageUrl,
      ikSrc: imgDetails.imagekitUrl,
      alt: "tt",
      height: this.state.isSmallDevice ? 280 : 340,
      width: 420
    })), _react.default.createElement("div", {
      className: "pt48 absolute-center text-center wfull"
    }, _react.default.createElement("h1", {
      className: "at_homeBannerMainHeading f24 fw9 mb48 sfcw"
    }, "Customize & Book ", _react.default.createElement("br", null), "Amazing Holiday Packages"), _react.default.createElement("div", {
      className: "pl24 pr24 relative"
    }, _react.default.createElement(_Search.default, {
      isHomePageSearch: true,
      isLargeSearch: true,
      onSearch: () => this.props.trackSegmentEvent({
        type: 'Home_Page',
        event: _segmentEvents.ORGANISM_CLICKED,
        section: 'Search Bar',
        object: 'Search Bar'
      })
    }))));
  }

};
HomeBanner.propTypes = {
  trackSegmentEvent: _propTypes.default.func,
  onSearch: _propTypes.default.func,
  isTransparent: _propTypes.default.bool,
  imgDetails: _propTypes.default.object
};
HomeBanner.defaultProps = {
  trackSegmentEvent: () => {},
  onSearch: () => {},
  imgDetails: {
    'imageUrl': `${_appConfig.default.assets.images}/public-product/home-page/homepage-banner.jpg`
  }
};
var _default = HomeBanner;
exports.default = _default;

/***/ }),

/***/ "./app/components/Home/WelcomeCarousel.js":
/*!************************************************!*\
  !*** ./app/components/Home/WelcomeCarousel.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _PackageCardExperiment = _interopRequireDefault(__webpack_require__(/*! ../Listing/PackageCardExperiment */ "./app/components/Listing/PackageCardExperiment.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! components/Swiper/Swiper */ "./app/components/Swiper/Swiper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let WelcomeCarousel = class WelcomeCarousel extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      destination: Object.keys(this.props.carouselData.destinations)[0]
    }, this.handleClick = destination => {
      this.setState({
        destination: destination
      });
      const packages = this.props.carouselData.destinations[destination].join(',');
      this.props.welcomeCarouselPackages({
        recently_viewed_packages: packages
      });
    }, _temp;
  }

  render() {
    const {
      carouselData,
      carouselPackages
    } = this.props;
    const inlineStyle = {
      backgroundImage: 'url(' + carouselData.banner + ')'
    };
    return _react.default.createElement("div", null, carouselPackages && carouselPackages.packages && _react.default.createElement("div", {
      className: "m0 mb8 special-deals-container",
      style: inlineStyle
    }, _react.default.createElement("h4", {
      className: "main-heading text-center"
    }, carouselData.heading), _react.default.createElement("p", {
      className: "text-center"
    }, carouselData.subheading), _react.default.createElement("div", {
      className: "overflowh"
    }, _react.default.createElement("div", {
      className: "overflows"
    }, _react.default.createElement("div", {
      className: `pills-container-inline scrollable ${carouselData.destinations.length > 4 ? '' : 'pillsCenter'}`
    }, Object.keys(carouselData.destinations).map((destination, i) => {
      return _react.default.createElement("span", {
        key: i,
        onClick: () => this.handleClick(destination),
        className: `pills round-corners white ${destination === this.state.destination ? 'active' : ''}`
      }, destination);
    })))), _react.default.createElement("div", {
      className: "row row- pl15 pr15 pt8 pb8 sbcw"
    }, _react.default.createElement("div", {
      className: "row row- relative similar-package-box"
    }, _react.default.createElement(_Swiper.default, {
      slideClass: "slide",
      spaceBetween: 16,
      slidesPerView: "auto",
      rebuildOnUpdate: true,
      ssrAnimation: {
        width: 276,
        height: 316
      }
    }, carouselPackages.packages.map((card, i) => {
      return _react.default.createElement(_PackageCardExperiment.default, {
        card: card,
        key: i,
        isPackageRevamp: true
      });
    }))))));
  }

};
WelcomeCarousel.propTypes = {
  carouselData: _propTypes.default.object.isRequired,
  carouselPackages: _propTypes.default.object,
  welcomeCarouselPackages: _propTypes.default.func
};
var _default = WelcomeCarousel;
exports.default = _default;

/***/ }),

/***/ "./app/components/Home/homeBanner.cm.scss":
/*!************************************************!*\
  !*** ./app/components/Home/homeBanner.cm.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"bannerImg": "_24CBvJSUaAuSvvD1-eiJGy",
	"bannerImgSmall": "_3nhbb7CgEnhH-0ReInyJce"
};

/***/ }),

/***/ "./app/constants/index.js":
/*!********************************!*\
  !*** ./app/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_IMAGE_PATH = void 0;
const DEFAULT_IMAGE_PATH = 'https://traveltriangle.com/assets/city_tour_guide_mobile/default_destination-8a3032af47bb4bba85c8148881953d38.png';
exports.DEFAULT_IMAGE_PATH = DEFAULT_IMAGE_PATH;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZWFkZXIvSGVhZGVySG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL0hvd0l0V29ya3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaG9tZS9TRU9CbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL2Rlc3RpbmF0aW9uQnlEdXJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL2xldHNHby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL2xldHNHby9sZXRzR28uY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL3RyYXZlbGVyc0Jsb2dzL1RyYXZlbGVyc0Jsb2dDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvbWUvdHJhdmVsZXJzQmxvZ3MvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL3RyYXZlbGVyc0Jsb2dzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvbWUvdHJhdmVsb2d1ZXMvVHJhdmVsb2d1ZXNDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvbWUvdHJhdmVsb2d1ZXMvY2FyZC5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvbWUvdHJhdmVsb2d1ZXMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL3RyYXZlbG9ndWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvbWUvdHJhdmVsb2d1ZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL3RyZW5kaW5nL0xhc3RUcmVuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL3RyZW5kaW5nL1RyZW5kaW5nRGVzdGluYXRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvbWUvdHJlbmRpbmcvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob3dJdFdvcmtzL0hvd0l0V29ya3NWaWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9PdmVydmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvUmF0aW5nU3Rhci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU3dpcGVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9Td2lwZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy95b3VUdWJlVmlkZW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvaG9tZS9Gb290ZXJEYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2hvbWUvSG9tZUFzeW5jLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NvbW1vbi9TZW9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQ29tbW9uL1RvYXN0ZXJNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZS9CYW5uZXJJbWcuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lL0ZpeGVkTGVhZEZvcm1CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvSG9tZS9Ib21lQmFubmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWUvV2VsY29tZUNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hvbWUvaG9tZUJhbm5lci5jbS5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb25zdGFudHMvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVySG9tZSIsImlzVHJhbnNwYXJlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiRm9ybU9uZUNsaWNrRGV0YWlsIiwic2VjdGlvbiIsImN0YSIsIkhvd0l0V29ya3MiLCJDb21wb25lbnQiLCJzdGF0ZSIsIm1vZGFsIiwib3Blbk1vZGFsIiwic2V0U3RhdGUiLCJjbG9zZU1vZGFsIiwicmVuZGVyIiwiaGFuZGxlTGVhZGZvcm1Nb2RhbCIsInByb3BzIiwiZnVuYyIsInRleHQiLCJTRU9CbG9jayIsIkxvYWRhYmxlRGVzdGluYXRpb25CeUR1cmF0aW9uIiwibG9hZGVyIiwibG9hZGluZyIsIkRlc3RpbmF0aW9uQnlEdXJhdGlvbiIsImRlc3RpbmF0aW9ucyIsIkxldHNHbyIsInRyYWNrU2VnbWVudEV2ZW50IiwidHJhY2tDbGlja0V2ZW50IiwiZXZlbnQiLCJPUkdBTklTTV9DTElDS0VEIiwiVHJhdmVsZXJzQmxvZ0NhcmQiLCJsaW5rIiwiaW1nUGF0aCIsInN0b3J5SGVhZGluZyIsImluZGV4Iiwib2JqZWN0IiwicmVwbGFjZSIsImhlaWdodCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJjb25maWciLCJhc3NldHMiLCJpbWFnZXMiLCJUcmF2ZWxlcnNCbG9ncyIsIndpZHRoIiwidHJhdmVsZXJzQmxvZ3MiLCJtYXAiLCJpdGVtIiwiY2hhckxlbmd0aCIsIlRyYXZlbG9ndWVzQ2FyZCIsIlJlYWN0IiwiaGVhZGluZyIsInRhZ3MiLCJkZXNjcmlwdGlvbiIsInRyYXZlbGxlckxvY2F0aW9uIiwidHJhdmVsbGVyTmFtZSIsImRheXNBZ28iLCJkZXN0aW5hdGlvbiIsImF2YXRhclBpYyIsInN0YXJzIiwic3R5bGVzIiwiaW1nV3JhcHBlciIsImF2dGFyIiwicmlnaHRTZWN0aW9uIiwibGVuZ3RoIiwic2xpY2UiLCJhcnJheSIsInRyaXBJZCIsImhvbmV5bW9vbkRhdGEiLCJmYW1pbHlEYXRhIiwiVHJhdmVsb2d1ZXMiLCJjb25zdHJ1Y3RvciIsInRyYXZlbG9ndWVzRGF0YSIsIlRJTEVTX0NPVU5UIiwic2V0SW5pdGlhbFRyaXBJZEZvckhvbWVUeXBlIiwiYmluZCIsIl9zbGlkZU51bWJlciIsImNvbXBvbmVudERpZE1vdW50IiwidHJhdmVsb2d1ZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZWxlY3RlZENvbnRlbnQiLCJmaW5kIiwiZCIsInNlbGVjdGVkVHJpcElkIiwiaSIsInNsaWRlTnVtYmVyIiwic2h1ZmZsZUZZIiwiYXJyYXlUb1NodWZmbGUiLCJqIiwidGVtcCIsInNodWZmbGVkRGVmYXVsdCIsIkxhc3RUcmVuZGluZyIsImRlc3RDb3VudCIsInBrZ0NvdW50IiwibGFzdENhcmRMaW5rIiwiVHJlbmRpbmdEZXN0aW5hdGlvbnMiLCJnZXREZXN0aW5hdGlvbnMiLCJkYXRhIiwiaWQiLCJsb2NhdGlvbiIsImltYWdla2l0VXJsIiwiREVGQVVMVF9JTUFHRV9QQVRIIiwic2hvd0xhc3RDYXJkIiwibGFzdENhcmQiLCJwYWRkaW5nUmlnaHQiLCJkZXN0aW5hdGlvbkNvdW50IiwicHJpY2UiLCJhbHQiLCJHVmlkZW9XcmFwcGVyRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwicG9zaXRpb24iLCJwYWRkaW5nQm90dG9tIiwidG9wIiwibGVmdCIsIkhvd0l0V29ya3NWaWRlbyIsIm9uUGxheWVyUmVhZHkiLCJ0YXJnZXQiLCJtdXRlIiwib25QbGF5ZXJTdGF0ZUNoYW5nZSIsInRpbWUiLCJnZXRDdXJyZW50VGltZSIsIllUIiwiUGxheWVyU3RhdGUiLCJQTEFZSU5HIiwiUEFVU0VEIiwibWlzY0lkMSIsIm1pc2NUeXBlMSIsIm1pc2NJZDIiLCJtaXNjVHlwZTIiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwiQ2xvc2VJdCIsImJ1dHRvbiIsInJpZ2h0IiwicGFkZGluZyIsInpJbmRleCIsIm92ZXJmbG93IiwiQ2xvc2VJdExlZnQiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwiYm90dG9tIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNmb3JtIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImN1c3RvbVN0eWxlc0Z1bGxWaWV3IiwicGFkZGluZ1RvcCIsIk1vZGFsQ29tcG9uZW50IiwiaXNPcGVuIiwiYWZ0ZXJPcGVuTW9kYWwiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImN1c3RvbUNsb3NlVHJpZ2dlciIsIm9uUmVxdWVzdENsb3NlQ3VzdG9tIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvbkFmdGVyTW9kYWxPcGVuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJmdWxsVmlldyIsImhhc0N1c3RvbUNsb3NlIiwiaGFzTm9DbG9zZSIsImlzV2hpdGVJY29uIiwiaXNUcmlnZ2VyRnVsbFZpZXciLCJjdXN0b21DbGFzcyIsInRyaWdnZXIiLCJjaGlsZHJlbiIsIm5vZGUiLCJwYXJzZXIiLCJQYXJzZXIiLCJvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSIsIm92ZXJ2aWV3TW9yZVRleHQiLCJlcnIiLCJPdmVydmlldyIsIlB1cmVDb21wb25lbnQiLCJvdmVydmlld0NvbnRlbnQiLCJmb290ZXJEZXNjcmlwdGlvbiIsImRlc2MiLCJzcGxpdCIsImZpbHRlciIsInAiLCJmb290ZXJEZXNjIiwicGFyc2UiLCJqb2luIiwiY29uY2F0IiwiR1JhdGluZ1VsIiwibWFyZ2luIiwiZGlzcGxheSIsIm1hcmdpblJpZ2h0IiwiZ2V0U3RhcnMiLCJzdGFyTnVtIiwia2V5VHlwZSIsInB1c2giLCJSYXRpbmdTdGFyIiwicmF0aW5nIiwiaXNFbXB0eVN0YXJzSGlkZGVuIiwicmF0aW5nQmFyUmFuZ2UiLCJ0cnVuY2F0ZWRSYXRpbmciLCJ0cnVuYyIsImZyYWN0aW9uYWxSYXRpbmciLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImZ1bGxTdGFyQ291bnQiLCJoYWxmU3RhckNvdW50IiwiZW1wdHlTdGFyQ291bnQiLCJTdGFySWNvbiIsIkhhbGZTdGFyIiwiU3Rhckljb25FbXB0eSIsIlN3aXBlciIsInJlbmRlclNlcnZlciIsIm92ZXJmbG93WCIsImMiLCJfX2h0bWwiLCJSZWFjdERPTSIsInJlbmRlclRvU3RhdGljTWFya3VwIiwicmVuZGVyRW1wdHlDbGllbnQiLCJjaGlsZCIsInN3aXBlckFzeW5jIiwidGhlbiIsInMiLCJSZWFjdElkU3dpcGVyIiwiZGVmYXVsdCIsInJlYWR5U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXNTbWFsbFN3aXBlciIsImlzRnVsbFdpZHRoU3dpcGVyIiwic3NyQW5pbWF0aW9uIiwidHlwZSIsIl9fU0VSVkVSX18iLCJzd2lwZXJQcm9wcyIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIm9uZU9mIiwib25lT2ZUeXBlIiwibG9hZE9uRG9jdW1lbnRSZWFkeSIsIllvdVR1YmVWaWRlbyIsImxvYWRWaWRlbyIsInBsYXllciIsIlBsYXllciIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJ0YWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImZvb3Rlcl9zZWN0aW9ucyIsInJlbmRlckhlbG1ldCIsIkhvbWVBc3luYyIsIm9uUGFnZVNjcm9sbCIsImRvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwicGVyY2VudEhlaWdodCIsInBhZ2VZc2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJpc0NoYXRCdXR0b25WaXNpYmxlIiwidHJhY2tMZWFkRnVubmVsIiwidHJhY2tMZWFkRnVubmVsQ2xpY2siLCJmdW5uZWxTdGVwIiwiY2F0ZWdvcnkiLCJ0cmFja0hvbWVQYWdlIiwib25TZW5zb3JDaGFuZ2UiLCJpc1Zpc2libGUiLCJpc0V2ZW50VHJhY2tlZCIsIk9SR0FOSVNNX1ZJRVdFRCIsImNhcm91c2VsRGF0YSIsImlzQXV0aGVudGljYXRlZCIsInNob3VsZERpc3BsYXlMYXRlc3RUcmlwIiwidXNlckRldGFpbHMiLCJ0cmFja0NhdGVnb3J5Q2xpY2siLCJzaG93VG9hc3Rlck1lc3NhZ2UiLCJ1cGRhdGVGaWVsZHMiLCJjYXJvdXNlbFBhY2thZ2VzIiwid2VsY29tZUNhcm91c2VsUGFja2FnZXMiLCJvblNjcm9sbCIsIlRSSVBfVVBEQVRFRF9JTl9SRURJUyIsInZhbHVlIiwibGFzdEFjdGl2ZVRyaXAiLCJ0cmVuZGluZ0RhdGEiLCJzZW9Gb290ZXIiLCJHU2VvRm9vdGVyRGl2IiwiYm9yZGVyVG9wIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJ3aGl0ZVNwYWNlIiwiYWxpZ25JdGVtcyIsIlNlb0Zvb3RlciIsInNlbGVjdGVkU2VvRm9vdGVySGVhZGluZyIsImZvb3RlclNlY3Rpb25IZWFkaW5nSGFuZGxlciIsImZvb3RlclNlY3Rpb25zIiwiZm9vdGVyU2VjdGlvbiIsIm5hbWUiLCJmb290ZXJfbGlua3MiLCJmb290ZXJMaW5rIiwidXJsIiwiVG9hc3Rlck1lc3NhZ2VzIiwidG9hc3RlclNob3duIiwic2V0VGltZW91dCIsImNhbGxiYWNrQWN0aW9uIiwidGltZUluTVMiLCJ0b2FzdGVyQ29udGVudCIsIkxvdmVJY29uQ29uIiwic3BhbiIsIk1hZGVXaXRoIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsIkZvb3RlciIsImlzSG9tZVBhZ2UiLCJGaXhlZExlYWRGb3JtQnV0dG9uIiwiY3RhVGV4dCIsIkhvbWVCYW5uZXIiLCJpc1NtYWxsRGV2aWNlIiwiZ2V0V2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpbWdEZXRhaWxzIiwiYmFubmVySW1nU21hbGwiLCJiYW5uZXJJbWciLCJpbWFnZVVybCIsIm9uU2VhcmNoIiwiV2VsY29tZUNhcm91c2VsIiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZUNsaWNrIiwicGFja2FnZXMiLCJyZWNlbnRseV92aWV3ZWRfcGFja2FnZXMiLCJpbmxpbmVTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhbm5lciIsInN1YmhlYWRpbmciLCJjYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxhQUFhLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ2pCO0FBQVEsYUFBVTtBQUFsQixHQUNFO0FBQUssYUFBV0EsZ0JBQWdCLHdCQUFoQixHQUEyQztBQUEzRCxHQUNFO0FBQUssYUFBVTtBQUFmLEdBQ0UsNkJBQUMsbUJBQUQsT0FERixFQUVFO0FBQUssYUFBVTtBQUFmLEdBQ0U7QUFBTSxZQUFTLEtBQWY7QUFBcUIsV0FBUTtBQUE3QixFQURGLEVBRUU7QUFBTSxZQUFTLE1BQWY7QUFBc0IsV0FBUTtBQUE5QixFQUZGLEVBR0UsNkJBQUMsaUJBQUQ7QUFBTSxhQUFVLG1CQUFoQjtBQUFvQyxNQUFHO0FBQXZDLEdBQ0dBLGdCQUFnQiw2QkFBQyxxQkFBRCxPQUFoQixHQUFzQyw2QkFBQyxZQUFELE9BRHpDLENBSEYsQ0FGRixFQVNFLDBDQUNFO0FBQU8sUUFBSyxVQUFaO0FBQXVCLE1BQUcsaUJBQTFCO0FBQTRDLGFBQVU7QUFBdEQsRUFERixFQUVFO0FBQU8sV0FBUTtBQUFmLEdBQ0U7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFNLGFBQVU7QUFBaEIsRUFERixDQURGLEVBSUU7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFLLGFBQVU7QUFBZixFQURGLEVBRUU7QUFBSyxhQUFVO0FBQWYsR0FDRTtBQUFHLGFBQVU7QUFBYixXQUEwQztBQUFNLGFBQVU7QUFBaEIscUJBQTFDLFFBREYsRUFF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bUhBQTNCIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgeyBUVGxvZ28sIFRUbG9nb1NlY29uZGFyeSB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBCdXJnZXJNZW51IGZyb20gJy4vQnVyZ2VyTWVudSc7XG5pbXBvcnQgJy4vSGVhZGVyLnNjc3MnO1xuXG5jb25zdCBIZWFkZXJIb21lID0gKHsgaXNUcmFuc3BhcmVudCB9KSA9PiAoXG4gIDxoZWFkZXIgY2xhc3NOYW1lPVwid2Z1bGwgejEwIHJlbGF0aXZlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9e2lzVHJhbnNwYXJlbnQgPyAnaGVhZGVyLWNvbi10cmFuc3BhcmVudCcgOiAnaGVhZGVyLWNvbid9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29uLWZpcnN0IGZsZXggc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgIDxCdXJnZXJNZW51IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHQtbG9nbyBmbGV4RnVsbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwidXJsXCIgY29udGVudD1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tXCIgLz5cbiAgICAgICAgICA8bWV0YSBpdGVtUHJvcD1cImxvZ29cIiBjb250ZW50PVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vcHBfc3RhdGljL3BwX25ld19sb2dvLmpwZ1wiIC8+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidHQtbG9nby1jb250YWluZXJcIiB0bz1cIi9cIj5cbiAgICAgICAgICAgIHtpc1RyYW5zcGFyZW50ID8gPFRUbG9nb1NlY29uZGFyeSAvPiA6IDxUVGxvZ28gLz4gfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiQWRkVG9Ib21lQnV0dG9uXCIgY2xhc3NOYW1lPVwiYWRkLXRvLWhvbWUtYnV0dG9uXCIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkFkZFRvSG9tZUJ1dHRvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG8tc2NyZWVuXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC10by1ob21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG8taG9tZS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnQtY3V0XCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcHQ2NCBtdDY0IHBsMjQgbWw4IHByMjQgbXIyNCBwcjE1IHBiNjRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgZnc3IHNmY3cgdGV4dC1sZWZ0XCI+QWRkIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZSBmMThcIj5UcmF2ZWxUcmlhbmdsZSA8L3NwYW4+IHRvPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiBzZmN3IHRleHQtbGVmdCBmd2IgcHQ1XCI+SG9tZXNjcmVlbiBmb3IgcXVpY2sgYWNjZXNzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNiBmdzMgc2ZjdyBwdDI0IHJlbGF0aXZlIHRhcC10YWctYWRkdG9ob21lXCI+IFRhcCA8c3BhbiBjbGFzc05hbWU9XCJhZGR0b2hvbWVvdmVybGF5IGlibG9ja1wiPiA8c3BhbiBjbGFzc05hbWU9XCJhZGQtdG8taG9tZSBpYmxvY2sgYWJzb2x1dGUgdDUgbDlcIiAvPiA8L3NwYW4+IHRvIGJyaW5nIHVwIHlvdXIgYnJvd3NlciBtZW51XG4gICAgICAgICAgICAgICAgICBhbmQgc2VsZWN0IDxzcGFuIGNsYXNzTmFtZT1cImZ3N1wiPnsnXCJBZGQgdG8gaG9tZSBzY3JlZW5cIid9PC9zcGFuPiB0b1xuICAgICAgICAgICAgICAgICAgcGluIHRoZSBUcmF2ZWxUcmlhbmdsZSB3ZWIgYXBwIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpIG10MTUgcmlwcGxlXCI+PGRpdiBjbGFzc05hbWU9XCJ3YXZlXCIgLz5Hb3QgSXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVySG9tZTtcblxuSGVhZGVySG9tZS5wcm9wVHlwZXMgPSB7XG4gIGlzVHJhbnNwYXJlbnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5IZWFkZXJIb21lLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNUcmFuc3BhcmVudDogZmFsc2Vcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdhcHAtdjIvbW9kdWxlcy9ob21lL2xldHNHby9sZXRzR28uY20uc2Nzcyc7XG5pbXBvcnQgSG93SXRXb3Jrc1ZpZGVvIGZyb20gJ21vZHVsZXMvaG93SXRXb3Jrcy9Ib3dJdFdvcmtzVmlkZW8nO1xuXG5jb25zdCBGb3JtT25lQ2xpY2tEZXRhaWwgPSB7XG4gIHNlY3Rpb246ICdCYW5uZXIgU2VjdGlvbicsXG4gIGN0YTogJ0xldHMgZ28nXG59O1xuXG5jbGFzcyBIb3dJdFdvcmtzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IG1vZGFsOiBmYWxzZX07XG5cbiAgb3Blbk1vZGFsPSgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHttb2RhbDogdHJ1ZX0pO1xuICB9XG5cbiAgY2xvc2VNb2RhbD0oKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWw6IGZhbHNlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYW5kbGVMZWFkZm9ybU1vZGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgYm9yZGVyIHJhZGl1czQgcDI0IGF0X2V4cGVydENhbGxiYWNrXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYyMCBmdzkgcGZjMyBtYjhcIj5cbiAgICAgICAgICBIb3cgaXQgd29ya3NcbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwMTQgcGZjNCBtYjE1XCI+UmVhbCB0cmF2ZWxlcnMuIFJlYWwgc3Rvcmllcy4gUmVhbCBvcGluaW9ucyB0byBoZWxwIHlvdSBtYWtlIHRoZSByaWdodCBjaG9pY2UuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIG1sNFwiPlxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5RW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjE0IGZ3NyBzZmMxXCI+S25vdyBNb3JlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbH1cbiAgICAgICAgICAgIGN1c3RvbUNsb3NlVHJpZ2dlcj17IXRoaXMuc3RhdGUubW9kYWx9XG4gICAgICAgICAgICBmdWxsVmlldz17ZmFsc2V9XG4gICAgICAgICAgICBoYXNOb0Nsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHdmdWxsIGhmdWxsIGZsZXhGdWxsXCI+XG4gICAgICAgICAgICAgIDxIb3dJdFdvcmtzVmlkZW9cbiAgICAgICAgICAgICAgICAvL3RyYWNrU2VnbWVudEV2ZW50PXt0aGlzLnByb3BzLnRyYWNrU2VnbWVudH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkhvd0l0V29ya3MucHJvcFR5cGVzID0ge1xuICBoYW5kbGVMZWFkZm9ybU1vZGFsOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuSG93SXRXb3Jrcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZUxlYWRmb3JtTW9kYWw6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3dJdFdvcmtzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPdmVydmlldyBmcm9tICdtb2R1bGVzL3NoYXJlZC9PdmVydmlldyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLWxpbmUgcXVvdGVzLCBtYXgtbGVuXG5jb25zdCB0ZXh0ID0gYFxuICA8cD5PYnNlc3NlZCB3aXRoIHRoZSBpZGVhIG9mIGVtcG93ZXJpbmcgdGhlIHRyYXZlbGVycyB3aXRoIGJlc3QgdmFjYXRpb24gZGVhbHMsIFRyYXZlbFRyaWFuZ2xlIGlzIGEgcHJvZHVjdCBvZiA8c3Ryb25nPkhvbGlkYXkgVHJpYW5nbGUgVHJhdmVsIFB2dC4gTHRkLjwvc3Ryb25nPiBXZSBhcmUgYW4gb25saW5lIG1hcmtldHBsYWNlIHRoYXQgY29ubmVjdHMgYSB0cmF2ZWxlciB0byBtdWx0aXBsZSBsb2NhbCB0cmF2ZWwgYWdlbnRzLiBXaXRoIHRoZSBoZWxwIG9mIHRoZXNlIDY1MCsgbG9jYWwgPHN0cm9uZz50cmF2ZWw8L3N0cm9uZz4gZXhwZXJ0cyBUcmF2ZWxUcmlhbmdsZSBoYXMgYmVlbiBhYmxlIHRvIGNhdGVyIHRvIHRoZSBuZWVkcyBvZiBvdmVyIDEwIExhYyB0cmF2ZWxlcnMgb24gaW50ZXJuYXRpb25hbCB0b3VyIGhvbGlkYXlzIGFzIHdlbGwgYXMgZG9tZXN0aWMgSW5kaWEgdG91cnMuIFxcclxcbiBUbyBwcm92aWRlIHRoZSBiZXN0IHRvdXIgYW5kIHRyYXZlbCBleHBlcmllbmNlcywgb3VyIHBhY2thZ2VzIGFyZSBjdXN0b21pemFibGUgYXQgdGhlIHRpbWUgb2YgYm9va2luZy4gRnJvbSBhIGJhY2twYWNrZXLigJlzIG5lZWRzIHRvIGEgaG9uZXltb29uZXLigJlzIGRlbWFuZHMsIFRyYXZlbFRyaWFuZ2xlIGNyYWZ0cyB0aGUgYmVzdCB2YWNhdGlvbiBkZWFscyBmb3IgaG9saWRheSBkZXN0aW5hdGlvbnMgaW4gSW5kaWEgYXMgd2VsbCBhcyBhYnJvYWQuIEFtb25nc3Qgb3VyIGJlc3Qgc2VsbGluZyBwYWNrYWdlcywgb3VyIE1hdXJpdGl1cyBob25leW1vb24gcGFja2FnZSBndWFyYW50ZWVzIHBlcnNvbmFsaXplZCBtZW1vcmllcyBmb3IgbmV3bHl3ZWRzIGFuZCBvdXIgTWF1cml0aXVzIGhvbGlkYXkgcGFja2FnZSBvZmZlcnMgYW4gZXhjZXB0aW9uYWwgZmFtaWx5IGdldGF3YXkgYXQgdGhlIG1vc3QgcmVhc29uYWJsZSBjb3N0cy4gRnJvbSB0aGUgb3RoZXIgaW50ZXJuYXRpb25hbCB0cmF2ZWwgZGVhbHMgdGhhdCB3ZSBvZmZlciwgU3JpIExhbmthIFRvdXIgcGFja2FnZXMsIE1hbGRpdmVzIHBhY2thZ2VzIGFuZCBTaW5nYXBvcmUgcGFja2FnZXMgc2VsbCBsaWtlIGhvdCBjYWtlcy4gRm9yIHRvdXJpc3QgZGVzdGluYXRpb25zIGluIEluZGlhLCBvdXIgS2VyYWxhIFRvdXIgUGFja2FnZXMgYXJlIGFzIGVucmljaGluZyBhcyB0aGUgbGFuZCBvZiBnb2RzIGl0c2VsZi4gTGVoLUxhZGFraCB0b3VyIHBhY2thZ2VzIGFuZCBLYXNobWlyIGhvbGlkYXkgcGFja2FnZXMgYXQgVHJhdmVsVHJpYW5nbGUga25vdyBubyBsaW1pdHMgb2YgY3VzdG9taXphdGlvbiwgYXMgd2UgaGF2ZSBnb3QgYW4gZXh0cmVtZWx5IGV4cGVyaWVuY2VkIGZhbWlseSBvZiBhZ2VudHMgcmVzaWRpbmcgaW4gdGhlIEhpbWFsYXlhcy4gQm9vayB5b3VyIGhvbGlkYXkgd2l0aCB1cyBhbmQgd2Ugc2hvdyB5b3UgdGhlIHdvcmxkIGxpa2UgeW91IGhhdmUgbmV2ZXIgc2VlbiBpdCBiZWZvcmUuIEZyb20gYWR2ZW50dXJlcyBpbiBMYWRha2ggdG8gYSBjcmF6eSB2YWNhdGlvbiBpbiBBbXN0ZXJkYW0gdG8gcm9tYW5jaW5nIGluIHRoZSBiYWNrd2F0ZXJzIG9mIE11bm5hciBhbmQgVmVuaWNlLCBUcmF2ZWxUcmlhbmdsZSBpcyB5b3VyIGlkZWFsIHRyYXZlbCBidWRkeS48L3A+XG4gIDxwPkF0IFRyYXZlbFRyaWFuZ2xlLCB3ZSBrbm93IHRoYXQgYSA8c3Ryb25nPmhvbGlkYXk8L3N0cm9uZz4sIGlkZWFsbHksIHNob3VsZCBub3QgYmUgYWxsIGFib3V0IHBsYW5uaW5nLCBmaW5kaW5nIGFuZCBtYWtpbmcgYm9va2luZ3MuIEluIGZhY3QsIGl0IHNob3VsZCBiZSBzb21lIHRpbWUgYXdheSBmcm9tIHRoZSBkYWlseSBodXN0bGUgYnVzdGxlIHRoYXQga2VlcHMgeW91IGJ1c3kuIElmIHBsYW5uaW5nIHlvdXIgZW50aXJlIHRvdXIgc291bmRzIGxpa2UgYSBidXJkZW4sIHdlIGFyZSB0aGUgc3Ryb25nZXN0IHNob3VsZGVycyB0byBjcnkgb24uIFdlIGRvbuKAmXQganVzdCBwcm92aWRlIHdlbGwtcGxhbm5lZCBhbmQgZXZlbiBiZXR0ZXItZXhlY3V0ZWQgaXRpbmVyYXJpZXMsIGJ1dCBhbHNvIG9mZmVyIHlvdSBhIGNoYW5jZSB0byBjdXN0b21pemUgaXQgYXMgcGVyIHlvdXIgd2hpbXMgYW5kIGZhbmNpZXMuIEEgPGEgaHJlZj1odHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9zb2xvLXRvdXItcGFja2FnZXMgdGFyZ2V0PeKAnV9ibGFua+KAnT5zb2xvIHRvdXI8L2E+IG9uIHlvdXIgbWluZD8gV2UgZ290IHlvdSBjb3ZlcmVkISBQbGFubmluZyB0byB3aGlzayB5b3VyIGxpZmUgcGFydG5lciB0byBhbiB1YmVyLXJvbWFudGljIGRlc3RpbmF0aW9uPyBXZSBoYXZlIGEgaHVnZSBsaXN0LCBhbmQgc29tZSBob25leW1vb24gZnJlZWJpZXMhIFRha2luZyBhbG9uZyB0aGUgZmFtaWx5IGZvciBhIG11Y2ggbmVlZGVkIHN1bW1lciBicmVhaz8gT3VyIGxpc3QgaXMgZW5kbGVzcywgYW5kIHlvdSBjYW4gYWxzbyBmaW5kIHBsYWNlcyB3aGVyZSBraWRzIGNhbiBlbmpveSBzZXBhcmF0ZSBhY3Rpdml0aWVzIGZyb20gYWR1bHRzLiBBbmQgd2hhdCBhYm91dCBhIGhvbGlkYXkgd2l0aCBmcmllbmRzPyBGb3IgeW91ciBnYW5nIG9mIGFtaWdvcywgd2UgaGF2ZSBoYW5kcGlja2VkIHRoZSBtb3N0IGhhcHBlbmluZyBwbGFjZXMgd2l0aCBhY3Rpdml0aWVzIHRoYXQgYXJlIHN1cmUgdG8gdGl0aWxsYXRlIGFsbCB5b3VyIHNlbnNlcy48L3A+XG5cbiAgPHA+U3BlbmQgc29tZSB0aW1lIGluIHRoZSB2ZXJkYW50IGVudmlyb25zIG9mIEJhbGksIHdpdGggdGhlIHN3YXlpbmcgcmljZSBmaWVsZHMgZ2l2aW5nIHRoZSBzdHVubmluZyBzdW5yaXNlIGEgcnVuIGZvciBpdHMgbW9uZXkuIE9yIGhvdyBhYm91dCBlbmpveWluZyBhIGNvdXBsZSBvZiBkYXlzIGluIHRoZSBoeXBlZC11cCBhdG1vc3BoZXJlIG9mIFBodWtldCwgd2l0aCBzdW4ta2lzc2VkIGJlYWNoZXMgYW5kIGFuIGFjdGl2ZSBuaWdodGxpZmUgdG8ga2VlcCB5b3UgY29tcGFueT8gQ2hhbmNlcyBhcmUgeW91IHdpbGwgYWxzbyBsb3ZlIHRvIGV4cGxvcmUgdGhlIGFuY2llbnQgYmVhdXR5IGFuZCBzcGxlbmRpZCBhcmNoaXRlY3R1cmUgb2YgdmFyaW91cyBFdXJvcGVhbiBjaXRpZXMsIHN1Y2ggYXMgQXRoZW5zLCBSb21lLCBQYXJpczsgYW5kIHRoZSBsaXN0IGNvdWxkIGdvIG9uLiBXZSBoYXZlIGFkZGVkIHBsZW50eSBtb3JlIGludGVybmF0aW9uYWwgZGVzdGluYXRpb25zIHRvIG91ciBraXR0eSwgc28gdGhhdCB5b3UgY2FuIGhhdmUgeW91ciBwaWNrIG9mIGFtYXppbmcgaG9saWRheXMsIGFuZCB0cmF2ZWwgc3RvcmllcyB0byB0ZWxsLjwvcD5cblxuICA8cD5JZiB5b3UgaGF2ZSBzb21ldGhpbmcgYSBsaXR0bGUgY2xvc2UgdG8gaG9tZSBpbiBtaW5kLCB0aGVuIHdoeSBub3Qgc3BlbmQgc29tZSB0aW1lIGV4cGxvcmluZyB0aGUgbHVzY2lvdXMgb3RoZXItd29ybGRseSBiZWF1dHkgb2YgdGhlIEFuZGFtYW5zLCB3aGVyZSB3aGl0ZS1zYW5kIGJlYWNoZXMsIHJvY2t5IG91dGNyb3BzIGFuZCBhIGNvbG9uaWFsIGxpZmVzdHlsZSBhd2FpdCB5b3UhIEluIGNhc2UgeW91IGFyZSBub3QgYSBiZWFjaCBiYWJ5LCB0aGUgcm9sbGluZyBoaWxscyBvZiBIaW1hY2hhbCBhbmQgVXR0YXJha2hhbmQgY2FuIGFwcGVhc2UgeW91ciB3YW5kZXJsdXN0LCB3aGVyZSBhIG1vcmUgc2ltcGxpc3RpYyBsaWZlc3R5bGUgYW5kIGZyaWVuZGx5IGxvY2FscyBlbnN1cmUgYSByZWxheGluZyBob2xpZGF5LiBJbiBmYWN0LCBJbmRpYSBpcyBhIGdyZWF0IHBsYWNlIHRvIHN0YXJ0IHF1ZW5jaGluZyB5b3VyIHRoaXJzdCBmb3IgdHJhdmVsLiBXaGV0aGVyIHlvdSBhcmUgbG9va2luZyBmb3IgYmVhY2hlcywgbW91bnRhaW5zLCByaXZlcnMsIGxha2VzLCBmb3Jlc3RzIG9yIG1hbi1tYWRlIHdvbmRlcnMgdG8gZXhwbG9yZSwgSW5kaWEgaXMgc3VyZSB0byBoYXZlIHRoZSBhbnN3ZXIgZm9yIHlvdS4gQW5kIHdobyBlbHNlIGNhbiBjYXRlciB0byB5b3VyIHRyYXZlbCByZXF1aXJlbWVudHMsIHdpdGhpbiBJbmRpYSBhcyB3ZWxsIGFzIG91dHNpZGUsIHRoYW4gdXMhIDwvcD5cblxuICA8cD5CZSBpdCBhIDxhIGhyZWY9aHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYnVkZ2V0LXRvdXItcGFja2FnZXMgdGFyZ2V0PeKAnV9ibGFua+KAnT5idWRnZXQgdG91cjwvYT4gdGhhdCB5b3UgYXJlIGxvb2tpbmcgZm9yLCBvciBhIHN1cGVyIGx1eHVyaW91cyBvbmUsIDxzdHJvbmc+VHJhdmVsVHJpYW5nbGU8L3N0cm9uZz4gaXMgZm9yZXZlciByZWFkeSB0byBwbGFuIHlvdXIgaG9saWRheSBmb3IgeW91LCB3aGF0ZXZlciB0aGUgZGVzdGluYXRpb24gbWlnaHQgYmUuPC9wPlxuYDtcblxuY29uc3QgU0VPQmxvY2sgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXRfd2hvd2VhcmVcIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwiZjIwIGZ3OSBtMCBtYjI0XCI+V2hvIFdlIEFyZT88L2gyPlxuICAgIDxPdmVydmlld1xuICAgICAgLy9jbGFzc05hbWU9XCJwZmM0XCJcbiAgICAgIC8vdGl0bGU9XCJPdmVydmlld1wiXG4gICAgICBkZXNjcmlwdGlvbj17dGV4dH1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNFT0Jsb2NrO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbmNvbnN0IExvYWRhYmxlRGVzdGluYXRpb25CeUR1cmF0aW9uID0gTG9hZGFibGUoe1xuICBsb2FkZXI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnZGVzdGluYXRpb24tYnktZHVyYXRpb24nICovICcuL0Rlc3RpbmF0aW9uQnlEdXJhdGlvbicpLFxuICBsb2FkaW5nOiAoKSA9PiBudWxsXG59KTtcblxuY29uc3QgRGVzdGluYXRpb25CeUR1cmF0aW9uID0gY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBkZXN0aW5hdGlvbnMgOiBfZ2V0KHN0YXRlLCAnZGVzdGluYXRpb25CeUR1cmF0aW9uLmRhdGEnLCB7fSlcbiAgfSkpKExvYWRhYmxlRGVzdGluYXRpb25CeUR1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb25CeUR1cmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRm9ybU9uZUNUQSBmcm9tICdjb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvRm9ybU9uZUNUQSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGV0c0dvLmNtLnNjc3MnO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEZvcm1PbmVDbGlja0RldGFpbCA9IHtcbiAgc2VjdGlvbjogJ0Jhbm5lciBTZWN0aW9uJyxcbiAgY3RhOiAnTGV0cyBnbydcbn07XG5cbmNvbnN0IExldHNHbyA9ICh7IHRyYWNrU2VnbWVudEV2ZW50IH0pID0+IHtcbiAgY29uc3QgdHJhY2tDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIHRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgc2VjdGlvbjogJ0V4cGVydCBDYWxsYmFjaycsXG4gICAgICBjdGE6ICdHZXRfRXhwZXJ0X0NhbGxiYWNrJ1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IGJvcmRlciByYWRpdXM0IHAyNCBhdF9leHBlcnRDYWxsYmFja1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImYyMCBmdzkgcGZjMyBtYjhcIj5cbiAgICAgICAgRGlkIG5vdCBmaW5kIHdoYXQgeW91IGFyZSBsb29raW5nIGZvcj8gTm8gd29ycmllcyFcbiAgICAgIDwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwMTQgcGZjNCBtYjE1XCI+RmlsbCB0aGUgZm9ybSBhbmQgZ2V0IGEgY2FsbGJhY2sgZnJvbSBvdXIgaG9saWRheSBleHBlcnRzPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWdodFwiPlxuICAgICAgICAgIDxGb3JtT25lQ1RBIGNsaWNrSGFuZGxlcj17dHJhY2tDbGlja0V2ZW50fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYxNCBmdzcgc2ZjMVwiPkdldCBFeHBlcnTigJlzIENhbGxiYWNrPC9zcGFuPlxuICAgICAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xufTtcblxuTGV0c0dvLnByb3BUeXBlcyA9IHtcbiAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5MZXRzR28uZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMZXRzR287XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJfMzZFRnVHT0JuVUVXR1k0NFlwbEJibFwiLFxuXHRcInBvcHVwXCI6IFwiXzN0UVFOcG9iUFdaUlBtcWJtZ1U4NW5cIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuXG5jb25zdCBUcmF2ZWxlcnNCbG9nQ2FyZCA9ICh7IGxpbmssIGltZ1BhdGgsIHN0b3J5SGVhZGluZywgaW5kZXgsIHRyYWNrU2VnbWVudEV2ZW50IH0pID0+IHtcbiAgY29uc3QgdHJhY2tDbGlja0V2ZW50ID0gKHN0b3J5SGVhZGluZykgPT4ge1xuICAgIHRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgIGV2ZW50OiBPUkdBTklTTV9DTElDS0VELFxuICAgICAgc2VjdGlvbjogJ0ZlYXR1cmVkIEJsb2dzJyxcbiAgICAgIG9iamVjdDogJ0Jsb2cgQ2FyZCcsXG4gICAgICBjdGE6IHN0b3J5SGVhZGluZy5yZXBsYWNlKC8gL2csJ18nKSxcbiAgICB9KTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHRhcmdldD17J19ibGFuayd9XG4gICAgICB0bz17bGlua31cbiAgICAgIG9uQ2xpY2s9eygpID0+IHRyYWNrQ2xpY2tFdmVudChzdG9yeUhlYWRpbmcpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3doIHJhZGl1czYgc2JjNSBtYjE1IFwiIHN0eWxlPXt7aGVpZ2h0OiAnMTQwcHgnIH19PlxuICAgICAgICA8SW1nXG4gICAgICAgICAgLy9jbGFzc05hbWU9XCJ3ZnVsbCBoZnVsbFwiXG4gICAgICAgICAgaWtTcmM9e2ltZ1BhdGh9XG4gICAgICAgICAgYWx0PXtzdG9yeUhlYWRpbmd9XG4gICAgICAgICAgcHJldmVudEplcmtPbkxvYWQ9e2ZhbHNlfVxuICAgICAgICAgIHdpZHRoPXszMjB9XG4gICAgICAgICAgaGVpZ2h0PXsyNDB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIHBmYzMgZjE0IGZ3YiB0cmF2ZWxlci1zdG9yeS1oZWFkaW5nXCI+e3N0b3J5SGVhZGluZ308L3A+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuVHJhdmVsZXJzQmxvZ0NhcmQucHJvcFR5cGVzID0ge1xuICBpbWdQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RvcnlIZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGluZGV4OiAgUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXJzQmxvZ0NhcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcENvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvdG9wLWhvbmV5bW9vbi1kZXN0aW5hdGlvbnMtaW4taW5kaWEvXCIsXG4gICAgXCJpbWdQYXRoXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9CbG9ncy81MCtJbmNyZWRpYmx5K1JvbWFudGljK0hvbmV5bW9vbitEZXN0aW5hdGlvbnMrSW4rSW5kaWEuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIjUwIEluY3JlZGlibHkgUm9tYW50aWMgSG9uZXltb29uIERlc3RpbmF0aW9ucyBJbiBJbmRpYVwiLFxuICAgIFwic3RvcnlEYXRlXCI6IFwiMjAxNy0wMi0yMFQxODozMDowMC4wMDBaXCJcbiAgfSxcbiAge1xuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvaW50ZXJuYXRpb25hbC1ob25leW1vb24tZGVzdGluYXRpb25zLW9uLXlvdXItYnVkZ2V0L1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMjArTW9zdCtSb21hbnRpYytJbnRlcm5hdGlvbmFsK0hvbmV5bW9vbitEZXN0aW5hdGlvbnMrZm9yK0V2ZXJ5K0J1ZGdldC5qcGdgLFxuICAgIFwic3RvcnlIZWFkaW5nXCI6IFwiMjAgTW9zdCBSb21hbnRpYyBJbnRlcm5hdGlvbmFsIEhvbmV5bW9vbiBEZXN0aW5hdGlvbnMgZm9yIEV2ZXJ5IEJ1ZGdldFwiLFxuICAgIFwic3RvcnlEYXRlXCI6IFwiMjAxNS0wMi0xNVQxODozMDowMC4wMDBaXCJcbiAgfSxcbiAge1xuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvdG9wLTEwLXdpbnRlci1ob25leW1vb24tZGVzdGluYXRpb25zLWluLWluZGlhLTIvXCIsXG4gICAgXCJpbWdQYXRoXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9CbG9ncy8xMCtCZXN0K1dpbnRlcitIb25leW1vb24rRGVzdGluYXRpb25zK0luK0luZGlhLmpwZ2AsXG4gICAgXCJzdG9yeUhlYWRpbmdcIjogXCIxMCBCZXN0IFdpbnRlciBIb25leW1vb24gRGVzdGluYXRpb25zIEluIEluZGlhXCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE1LTA5LTEzVDE4OjMwOjAwLjAwMFpcIlxuICB9LFxuICB7XG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9idWRnZXQtaG9uZXltb29uLWRlc3RpbmF0aW9ucy1pbi1hc2lhL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMTQrUm9tYW50aWMrSG9uZXltb29uK0Rlc3RpbmF0aW9ucytJbitBc2lhK0ZvcitFdmVyeStCdWRnZXQuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIjE0IFJvbWFudGljIEhvbmV5bW9vbiBEZXN0aW5hdGlvbnMgSW4gQXNpYSBGb3IgRXZlcnkgQnVkZ2V0XCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE1LTA3LTEwVDE4OjMwOjAwLjAwMFpcIlxuICB9LFxuICB7XG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9vZmZiZWF0LWhvbmV5bW9vbi1kZXN0aW5hdGlvbnMtaW4taW5kaWEvXCIsXG4gICAgXCJpbWdQYXRoXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9CbG9ncy8xNStPZmZiZWF0K0hvbmV5bW9vbitEZXN0aW5hdGlvbnMrSW4rSW5kaWEuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIjE1IE9mZmJlYXQgSG9uZXltb29uIERlc3RpbmF0aW9ucyBJbiBJbmRpYVwiLFxuICAgIFwic3RvcnlEYXRlXCI6IFwiMjAxNi0wOS0yOVQxODozMDowMC4wMDBaXCJcbiAgfSxcbiAge1xuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvdW51c3VhbC1ob25leW1vb24tZGVzdGluYXRpb25zL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMjArSG9uZXltb29uK0Rlc3RpbmF0aW9ucytOb3QrTWVhbnQrRm9yK09yZGluYXJ5K0NvdXBsZXMuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIjIwIEhvbmV5bW9vbiBEZXN0aW5hdGlvbnMgTm90IE1lYW50IEZvciBPcmRpbmFyeSBDb3VwbGVzXCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE2LTEyLTIxVDE4OjMwOjAwLjAwMFpcIlxuICB9LFxuICB7XG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9wbGFjZXMtdG8tdmlzaXQtaW4taW5kaWEtYmVmb3JlLXlvdS10dXJuLTMwL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMzArUGxhY2VzK1RvK1Zpc2l0K0luK0luZGlhK0JlZm9yZStZb3UrVHVybiszMC5qcGdgLFxuICAgIFwic3RvcnlIZWFkaW5nXCI6IFwiMzAgUGxhY2VzIFRvIFZpc2l0IEluIEluZGlhIEJlZm9yZSBZb3UgVHVybiAzMFwiLFxuICAgIFwic3RvcnlEYXRlXCI6IFwiMjAxNS0wNS0wOFQxODozMDowMC4wMDBaXCJcbiAgfSxcbiAge1xuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvcGxhY2VzLXRvLXZpc2l0LWluLWluZGlhLWluLWRlY2VtYmVyL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMTIrR29yZ2VvdXMrUGxhY2VzK1RvK1Zpc2l0K0luK0luZGlhK1RoaXMrRGVjZW1iZXIuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIjEyIEdvcmdlb3VzIFBsYWNlcyBUbyBWaXNpdCBJbiBJbmRpYSBUaGlzIERlY2VtYmVyXCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE2LTA5LTI5VDE4OjMwOjAwLjAwMFpcIlxuICB9LFxuICB7XG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9vdmVycmF0ZWQtZGVzdGluYXRpb25zLWluLWhpbWFjaGFsL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMTArVGVycmlibHkrT3ZlcnJhdGVkK0Rlc3RpbmF0aW9ucytJbitIaW1hY2hhbCsmK1doZXJlK1RvK1RyYXZlbCtJbnN0ZWFkLmpwZ2AsXG4gICAgXCJzdG9yeUhlYWRpbmdcIjogXCIxMCBUZXJyaWJseSBPdmVycmF0ZWQgRGVzdGluYXRpb25zIEluIEhpbWFjaGFsICYgV2hlcmUgVG8gVHJhdmVsIEluc3RlYWRcIixcbiAgICBcInN0b3J5RGF0ZVwiOiBcIjIwMTUtMTEtMTZUMTg6MzA6MDAuMDAwWlwiXG4gIH0sXG4gIHtcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL3NjYXJpZXN0LXJvYWRzLWluLWluZGlhL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMTArU2Nhcmllc3QrUm9hZHMrSW4rSW5kaWErVGhhdCtBcmUrQStEcml2ZXIncytOaWdodG1hcmUuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIjEwIFNjYXJpZXN0IFJvYWRzIEluIEluZGlhIFRoYXQgQXJlIEEgRHJpdmVy4oCZcyBOaWdodG1hcmVcIixcbiAgICBcInN0b3J5RGF0ZVwiOiBcIjIwMTYtMDMtMDNUMTg6MzA6MDAuMDAwWlwiXG4gIH0sXG4gIHtcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL21hdXJpdGl1cy12cy1tYWxkaXZlcy12cy1zZXljaGVsbGVzLWluZm9ncmFwaGljL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvTWF1cml0aXVzK1ZzK01hbGRpdmVzK1ZzK1NleWNoZWxsZXMrSW5mb2dyYXBoaWMuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIk1hdXJpdGl1cyBWcyBNYWxkaXZlcyBWcyBTZXljaGVsbGVzIEluZm9ncmFwaGljOiBXaGljaCBJcyBZb3VyIElkZWFsIEhvbGlkYXkgUGFyYWRpc2U/XCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE2LTEyLTIyVDE4OjMwOjAwLjAwMFpcIlxuICB9LFxuICB7XG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9sYWtlcy1pbi1yYWphc3RoYW4vXCIsXG4gICAgXCJpbWdQYXRoXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9CbG9ncy8xMCtCZWF1dGlmdWwrTGFrZXMrSW4rUmFqYXN0aGFuK1lvdStNdXN0K1Zpc2l0K09uK1lvdXIrTmV4dCtUcmlwLmpwZ2AsXG4gICAgXCJzdG9yeUhlYWRpbmdcIjogXCIxMCBCZWF1dGlmdWwgTGFrZXMgSW4gUmFqYXN0aGFuIFlvdSBNdXN0IFZpc2l0IE9uIFlvdXIgTmV4dCBUcmlwXCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE2LTA5LTA2VDE4OjMwOjAwLjAwMFpcIlxuICB9LFxuICB7XG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9wbGFjZXMtdG8tdmlzaXQtaW4tcmFqYXN0aGFuL1wiLFxuICAgIFwiaW1nUGF0aFwiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvQmxvZ3MvMTErUGxhY2VzK1RvK1Zpc2l0K0luK1JhamFzdGhhbi5qcGdgLFxuICAgIFwic3RvcnlIZWFkaW5nXCI6IFwiMTEgUGxhY2VzIFRvIFZpc2l0IEluIFJhamFzdGhhbjogQSBHbGltcHNlIE9mIFJhanB1dGFuYSBTcGxlbmRvclwiLFxuICAgIFwic3RvcnlEYXRlXCI6IFwiMjAxNi0wMi0yNFQxODozMDowMC4wMDBaXCJcbiAgfSxcbiAge1xuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvNC1kYXlzLWluLWtlcmFsYS9cIixcbiAgICBcImltZ1BhdGhcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L0Jsb2dzL0Jlc3QrUGxhY2VzK1RvK1Zpc2l0K0FuZCtBbWF6aW5nK1RoaW5ncytUbytEbytpbitLZXJhbGEuanBnYCxcbiAgICBcInN0b3J5SGVhZGluZ1wiOiBcIjQgRGF5cyBJbiBLZXJhbGE6IEJlc3QgUGxhY2VzIFRvIFZpc2l0IEFuZCBBbWF6aW5nIFRoaW5ncyBUbyBEb1wiLFxuICAgIFwic3RvcnlEYXRlXCI6IFwiMjAxNy0wMS0xMVQxODozMDowMC4wMDBaXCJcbiAgfSxcbiAge1xuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvb2ZmYmVhdC1zdGF5cy1pbi1oaW1hY2hhbC9cIixcbiAgICBcImltZ1BhdGhcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L0Jsb2dzLzUrVHlwZXMrT2YrT2ZmYmVhdCtTdGF5cytJbitIaW1hY2hhbCtZb3UndmUrQmVlbitNaXNzaW5nK0FsbCtUaGlzK1doaWxlLmpwZ2AsXG4gICAgXCJzdG9yeUhlYWRpbmdcIjogXCI1IFR5cGVzIE9mIE9mZmJlYXQgU3RheXMgSW4gSGltYWNoYWwgWW914oCZdmUgQmVlbiBNaXNzaW5nIEFsbCBUaGlzIFdoaWxlXCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE3LTA1LTI2VDE4OjMwOjAwLjAwMFpcIlxuICB9LFxuICB7XG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9sb25nLXdlZWtlbmQtZ2V0YXdheXMtZnJvbS1kZWxoaS9cIixcbiAgICBcImltZ1BhdGhcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L0Jsb2dzL0xvbmcrV2Vla2VuZCtHZXRhd2F5cytGcm9tK0RlbGhpLmpwZ2AsXG4gICAgXCJzdG9yeUhlYWRpbmdcIjogXCJUaGVzZSBMb25nIFdlZWtlbmQgR2V0YXdheXMgRnJvbSBEZWxoaSBTaG91bGQgQmUgT24gWW91ciBUcmF2ZWwgQnVja2V0IExpc3QgVGhpcyBJbmRlcGVuZGVuY2UgRGF5XCIsXG4gICAgXCJzdG9yeURhdGVcIjogXCIyMDE3LTA2LTEyVDE4OjMwOjAwLjAwMFpcIlxuICB9XG5dXG47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IFRyYXZlbGVyc0Jsb2dDYXJkIGZyb20gJy4vVHJhdmVsZXJzQmxvZ0NhcmQnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdtb2R1bGVzL3NoYXJlZC9Td2lwZXInO1xuaW1wb3J0IHRyYXZlbGVyc0Jsb2dzIGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IFRyYXZlbGVyc0Jsb2dzID0gKHt0cmFja1NlZ21lbnRFdmVudH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhdF90cmF2ZWxibG9nXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcjI0IHBsMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZUJldHdlZW4gbWI4XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMjAgZnc5IG1yMjRcIj5HZXQgVGhlIEJlc3QgT3V0IE9mIFlvdXIgTmV4dCBHZXRhd2F5PC9oMj5cbiAgICAgICAgPExpbmsgdGFyZ2V0PSdfYmxhbmsnIHRvPVwiL2Jsb2cvXCIgY2xhc3NOYW1lPVwiZjE0IGZ3NyBzZmMxIGlibG9jayBub3dyYXAgYWxpZ25TZWxmRmxleEVuZFwiPlZpZXcgQWxsPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTQgcGZjNFwiPkV4dHJhb3JkaW5hcnkgZXhwZXJpZW5jZXMsIGRlc2lnbmVkIEp1c3QgZm9yIHlvdTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IHB0MTUgYXRfdHJhdmVsYmxvZ19jYXJkXCI+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjcwLCBoZWlnaHQ6IDE0MCB9fVxuICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICBzbGlkZXNQZXJWaWV3PVwiYXV0b1wiXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZT17MjR9XG4gICAgICAgIHNsaWRlc09mZnNldEFmdGVyPXsyNH1cbiAgICAgICAgaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cbiAgICAgICAge3RyYXZlbGVyc0Jsb2dzLm1hcCgoaXRlbSwgaW5kZXgpID0+XG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxUcmF2ZWxlcnNCbG9nQ2FyZFxuICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dHJhY2tTZWdtZW50RXZlbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXJzQmxvZ3M7XG5cblRyYXZlbGVyc0Jsb2dzLnByb3BUeXBlcyA9IHtcbiAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5UcmF2ZWxlcnNCbG9ncy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7fVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJhdGluZ1N0YXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvUmF0aW5nU3Rhcic7XG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkLmNtLnNjc3MnO1xuXG5jb25zdCBjaGFyTGVuZ3RoID0gNzA7XG5cbmNsYXNzIFRyYXZlbG9ndWVzQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlYWRpbmcsIHRhZ3MsIGRlc2NyaXB0aW9uLCB0cmF2ZWxsZXJMb2NhdGlvbiwgdHJhdmVsbGVyTmFtZSxcbiAgICAgIGRheXNBZ28sIGRlc3RpbmF0aW9uLCBsaW5rLCBhdmF0YXJQaWMsIGltYWdlcywgc3RhcnNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRyYWNrU2VnbWVudEV2ZW50KGhlYWRpbmcpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXRfdHJhdmVsb2d1ZXNfY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByYWRpdXM2IG92ZXJmbG93aCByZWxhdGl2ZSAke3N0eWxlcy5pbWdXcmFwcGVyfWB9PlxuICAgICAgICAgICAgPEltZyBpa1NyYz17aW1hZ2VzWzBdfSBhbHQ9e2hlYWRpbmd9IHdpZHRoPXszMTJ9IGhlaWdodD17MjEwfSBwcmV2ZW50SmVya09uTG9hZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndmdWxsIGhmdWxsXCIgaWtUcmFuc2Zvcm0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGIwIHdmdWxsIHAxNVwiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImYxNiBmdzkgc2ZjdyBtMCBhdF9jb250ZW50X2hlYWRpbmdcIj57aGVhZGluZ308L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdF90cmF2ZWxvZ3Vlc19kZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0MTUgcGIxNSBzYmN3IHJhZGl1czRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BvdmVyZmxvd2ggcmFkaXVzMTAwICR7c3R5bGVzLmF2dGFyfWB9PlxuICAgICAgICAgICAgICAgICAgPEltZyBpa1NyYz17YXZhdGFyUGljfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gYWx0PXt0cmF2ZWxsZXJOYW1lfSBjbGFzc05hbWU9XCJ3ZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRKZXJrT25Mb2FkPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IHBmYzMgbWIyXCI+e3RyYXZlbGxlck5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEwIHBmYzRcIj57dHJhdmVsbGVyTG9jYXRpb259LCB7ZGF5c0Fnb308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtcmlnaHQgbWw4ICR7c3R5bGVzLnJpZ2h0U2VjdGlvbn1gfT5cbiAgICAgICAgICAgICAgICA8UmF0aW5nU3RhciByYXRpbmc9e3N0YXJzfSAvPlxuICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cImYxMCBwZmMzIG10NFwiPntkZXN0aW5hdGlvbn08L3A+Ki99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgcGZjMyBtdDE1XCI+e2Rlc2NyaXB0aW9uLmxlbmd0aCA8IGNoYXJMZW5ndGggPyBkZXNjcmlwdGlvbjogKGAke2Rlc2NyaXB0aW9uLnNsaWNlKDAsY2hhckxlbmd0aCl9Li4uYCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cblRyYXZlbG9ndWVzQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRhZ3M6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHJhdmVsbGVyTG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF5c0FnbzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0cmF2ZWxsZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXZhdGFyUGljOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHN0YXJzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsb2d1ZXNDYXJkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW1nV3JhcHBlclwiOiBcIl8yTnBUN3Njd0w3RjAxM011aDRFblFRXCIsXG5cdFwiYXZ0YXJcIjogXCJfMVRnbXM3YWlJV1JlRk9adGhoMGFpNVwiLFxuXHRcInJpZ2h0U2VjdGlvblwiOiBcIl8zUmJ3LVNsYWZxa0gzMFg2V3hlbjRNXCJcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5jb25zdCBob25leW1vb25EYXRhID0gW1xuICB7XG4gICAgXCJ0cmlwSWRcIjogMTI4MDA3NyxcbiAgICBcInRyaXBUeXBlXCI6IFwiSG9uZXltb29uXCIsXG4gICAgXCJ0YWdOYW1lXCI6IFwiTmVoYSdzIHJvbWFudGljIGFkdmVudHVyZVwiLFxuICAgIFwiaGVhZGluZ1wiOiBcIk5laGEncyBSZWNpcGUgRm9yIEEgUGVyZmVjdCBCYWxpIEhvbmV5bW9vblwiLFxuICAgIFwidGFnc1wiOiBcIiNsb3ZlLCAjdGhyaWxsLCAjYWR2ZW50dXJlLCAjcGVhY2VcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmVoYSBzaGFyZXMgaGVyIGVwaWMgQmFsaSBleHBlcmllbmNlIHdpdGggdXMuIFNoZSBlbGFib3JhdGVzIG9uIGhlciByb21hbnRpYyBiZWFjaCB3YWxrcyB3aXRoIGhlciBodXNiYW5kLCB0aGVpciB1bmRlcndhdGVyIGFkdmVudHVyZXMsIHNob3BwaW5nICYgYSBob3N0IG9mIHRoaW5ncyB0aGF0IG1hZGUgdGhlaXIgaG9uZXltb29uIGEgc3VjY2Vzcy5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJOZWhhIEphZGhhdlwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJNdW1iYWlcIixcbiAgICBcImRheXNBZ29cIjogXCIxIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDUsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gQmFsaVwiLFxuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvbmVoYS1yb21hbnRpYy10aGluZ3MtdG8tZG8taW4tYmFsaS10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OZWhhK0phZGhhdi9UaHVtYk5haWwuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmVoYStKYWRoYXYvQ29weStvZitJTUctMjAxNzA3MjItV0EwMDAzLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmVoYStKYWRoYXYvQ29weStvZitJTUctMjAxNzA3MjItV0EwMDExLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmVoYStKYWRoYXYvQ29weStvZitJTUctMjAxNzA3MjItV0EwMDEyLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmVoYStKYWRoYXYvQ29weStvZitJTUctMjAxNzA3MjItV0EwMDEzLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmVoYStKYWRoYXYvQ29weStvZitJTUctMjAxNzA3MjItV0EwMDE4LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmVoYStKYWRoYXYvQ29weStvZitJTUctMjAxNzA3MjItV0EwMDM5LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxNTg4MTg1LFxuICAgIFwidHJpcFR5cGVcIjogXCJIb25leW1vb25cIixcbiAgICBcInRhZ05hbWVcIjogXCJOaXNoYW50J3MgTWF1cml0aXVzIHZhY2F0aW9uXCIsXG4gICAgXCJoZWFkaW5nXCI6IFwiTmlzaGFudCdzIEtpbmctU2l6ZSBWYWNhdGlvbiBJbiBNYXVyaXRpdXNcIixcbiAgICBcInRhZ3NcIjogXCIjbHV4dXJ5LCAjYWR2ZW50dXJlLCAjYmVhY2gsICNyb21hbnRpY1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJCZWFjaGVzLCBuYXR1cmUgcGFya3MgJiB3YXRlciBzcG9ydHMgbWFkZSBOaXNoYW50J3MgbHV4dXJ5IHZhY2F0aW9uIGluIE1hdXJpdGl1cyB3aXRoIGhpcyB3aWZlIGFuIGFmZmFpciB0byByZW1lbWJlci4gSGUgc2hhcmVzIHRoZWlyIGltcGVjY2FibGUgZXhwZXJpZW5jZSB0aHJvdWdoIHBpY3R1cmVzIHRoYXQgd291bGQgbWFrZSB5b3UgZ28gd293IVwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIk5pc2hhbnQgUmFqXCIsXG4gICAgXCJ0cmF2ZWxsZXJMb2NhdGlvblwiOiBcIk5ldyBEZWxoaVwiLFxuICAgIFwiZGF5c0Fnb1wiOiBcIjEgZGF5IGFnb1wiLFxuICAgIFwic3RhcnNcIjogNCxcbiAgICBcImRlc3RpbmF0aW9uXCI6IFwiVHJpcCB0byBNYXVyaWl0dXNcIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL25pc2hhbnQtbHV4dXJ5LXZhY2F0aW9uLWluLW1hdXJpdGl1cy10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNoYW50K1Jhai9UaHVtYm5haWwuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmlzaGFudCtSYWovQ29weStvZitkYXkrMStpbGUrYXV4K2NlcmYuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNoYW50K1Jhai9Db3B5K29mK2RheSsyLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmlzaGFudCtSYWovQ29weStvZitkYXkrNCt2b2xjYW5vLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmlzaGFudCtSYWovQ29weStvZitEU0NfMDA3NS5wbmdgLCBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTmlzaGFudCtSYWovQ29weStvZitEU0NfMDUyMi5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL05pc2hhbnQrUmFqL0NvcHkrb2YrSU1HXzk3NDUuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNoYW50K1Jhai9Db3B5K29mK3NlZXdhbGsuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDEzMjYyODYsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkFrYXNoJ3MgbHV4dXJpb3VzIGhvbmV5bW9vblwiLFxuICAgIFwiaGVhZGluZ1wiOiBcIkFrYXNoJ3MgVWx0cmEgTHV4dXJpb3VzIEhvbmV5bW9vbiBJbiBNYWxkaXZlc1wiLFxuICAgIFwidGFnc1wiOiBcIiNob25leW1vb24sICNsdXh1cnksICNhZHZlbnR1cmUsICNiZWF1dHlcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWthc2ggYW5kIGhpcyB3aWZlIGNob3NlIENlbnRhcmEgUmFzIEZ1c2hpIGFzIHRoZWlyIHByaXZhdGUgaXNsYW5kIHJlc29ydCBvbiB0aGVpciBob25leW1vb24gaW4gTWFsZGl2ZXMuIFRoZXkgdGVsbCB1cyB3aHkgaXQgaXMgYW4gZXhjZWxsZW50IHBpY2sgZm9yIGNvdXBsZXMgd2hvIHdhbnQgdGhlIGJlc3Qgb2Ygcm9tYW5jZSAmICBhZHZlbnR1cmUuXCIsXG4gICAgXCJ0cmF2ZWxsZXJOYW1lXCI6IFwiQWthc2ggJiBUb3NoaVwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJCaG9wYWxcIixcbiAgICBcImRheXNBZ29cIjogXCIyIGRheXMgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIE1hbGRpdmVzXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9ha2FzaC1ob25leW1vb24tdHJpcC10by1tYWxkaXZlcy10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9BYWthc2grJTI2K1Rvc2hpL1RodW1ibmFpbCtJbWFnZS5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9BYWthc2grJTI2K1Rvc2hpL3AxLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWFrYXNoKyUyNitUb3NoaS9wMi5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0Fha2FzaCslMjYrVG9zaGkvcDMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9BYWthc2grJTI2K1Rvc2hpL3A0LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWFrYXNoKyUyNitUb3NoaS9wNS5qcGdgXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJ0cmlwSWRcIjogMTU1NjkxOSxcbiAgICBcInRyaXBUeXBlXCI6IFwiSG9uZXltb29uXCIsXG4gICAgXCJ0YWdOYW1lXCI6IFwiS2FuYXYncyBTaW5nYXBvcmUgQmFsaSBob25leW1vb25cIixcbiAgICBcImhlYWRpbmdcIjogXCJLYW5hdidzIEVwaWMgU2luZ2Fwb3JlIEFuZCBCYWxpIEhvbmV5bW9vblwiLFxuICAgIFwidGFnc1wiOiBcIiNob25leW1vb24sICNyb21hbnRpYywgI2x1eHVyeSwgI2FkdmVudHVyZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJLYW5hdiAmIGhpcyB3aWZlIHdpdG5lc3NlZCB0aGUgYmVzdCBvZiB0d28gd29ybGRzIG9uIHRoZWlyIFNpbmdhcG9yZSAmIEJhbGkgaG9uZXltb29uLiBPbiB0aGVpciBmaXJzdCBpbnRlcm5hdGlvbmFsIHRyaXAsIEthbmF2IHNoYXJlcyBob3cgdGhleSByZWxpc2hlZCBldmVyeSBiaXQgb2YgYW4gdXJiYW4sIGFuZCBhIHRyb3BpY2FsIHBhcmFkaXNlIVwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIkthbmF2IFB1cmlcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiQW1yaXRzYXJcIixcbiAgICBcImRheXNBZ29cIjogXCIyIGRheXMgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIFNpbmdhcG9yZSAmIEJhbGlcIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL2thbmF2LXNpbmdhcG9yZS1iYWxpLWhvbmV5bW9vbi10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYW5hdi9UaHVtYm5haWwrSW1hZ2UuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvS2FuYXYvSzEuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYW5hdi9rMi5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0thbmF2L2szLnBuZ2AsIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYW5hdi9rNC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0thbmF2L2s1LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxMjAyNDMyLFxuICAgIFwidHJpcFR5cGVcIjogXCJIb25leW1vb25cIixcbiAgICBcInRhZ05hbWVcIjogXCJIZW1hbnQncyBSb21hbnRpYyBob2xpZGF5IGluIE1hbGRpdmVzXCIsXG4gICAgXCJoZWFkaW5nXCI6IFwiSGVtYW50J3MgSW1wZWNjYWJsZSBIb25leW1vb24gSW4gTWFsZGl2ZXMgXCIsXG4gICAgXCJ0YWdzXCI6IFwiI2hvbmV5bW9vbiwgI2FkdmVudHVyZSwgI2JlYWNoLCAjbmF0dXJlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkhlbWFudCBhbmQgaGlzIHdpZmUgc3RhcnRlZCB0aGVpciBuZXcgbGlmZSB3aXRoIGEgaG9uZXltb29uIGluIE1hbGRpdmVzICYgdGhlaXIgZXhwZXJpZW5jZSB3aWxsIGxlYXZlIHlvdSBpbiBhd2UuIEZyb20gcm9tYW50aWMgYmVhY2ggd2Fsa3MgdG8gZnVuIHdhdGVyIHNwb3J0cywgaGVyZSdzIGhvdyB0aGV5IG1hZGUgdGhlIG1vc3Qgb3V0IG9mIGl0LlwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIkhlbWFudCBMYW1vcml5YVwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJOZXcgRGVsaGlcIixcbiAgICBcImRheXNBZ29cIjogXCIzIGRheXMgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIE1hbGRpdmVzXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9oZW1hbnQtaG9uZXltb29uLXRyaXAtdG8tbWFsZGl2ZXMtdHJhdmVsb2d1ZS9cIixcbiAgICBcImF2YXRhclBpY1wiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvSGVtYW50K0xhbW9yaXlhL1RodW1ibmFpbC5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9IZW1hbnQrTGFtb3JpeWEvQ29weStvZitJTUctMjAxNzA0MDMtV0EwMDAwLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvSGVtYW50K0xhbW9yaXlhL0NvcHkrb2YrSU1HLTIwMTcwNDAzLVdBMDAwMy5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0hlbWFudCtMYW1vcml5YS9Db3B5K29mK0lNRy0yMDE3MDQwMy1XQTAwMDkuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9IZW1hbnQrTGFtb3JpeWEvQ29weStvZitJTUctMjAxNzA0MDMtV0EwMDEwLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvSGVtYW50K0xhbW9yaXlhL0NvcHkrb2YrSU1HLTIwMTcwNDAzLVdBMDAxMy5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0hlbWFudCtMYW1vcml5YS9Db3B5K29mK0lNRy0yMDE3MDQwMy1XQTAwMTQuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDEzMzc4MzEsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIlNvaGVsJ3MgVmlldG5hbSB2aXNpdCB3aXRoIHdpZmVcIixcbiAgICBcImhlYWRpbmdcIjogXCJTb2hlbCdzIFJvbWFudGljIEFkdmVudHVyZSBJbiBWaWV0bmFtXCIsXG4gICAgXCJ0YWdzXCI6IFwiI3JvbWFudGljLCAjYWR2ZW50dXJlLCAjd2FuZGVybHVzdCwgI2NvbXBhbmlvbnNoaXBcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiU29oZWwgYW5kIGhpcyB3aWZlIGV4cGVyaWVuY2Ugcm9tYW5jZSBmcm9tIGEgZGlmZmVyZW50IGFuZ2xlIGFzIHRoZXkgZ28gb24gYW4gZXBpYyB0cmlwIGV4cGxvcmluZyB0aGUgbWFueSB3b25kZXJzIG9mIFZpZXRuYW0uIFRoZXkgdGVsbCB1cyBob3cgdGhpcyBpbmNyZWRpYmxlIGpvdXJuZXkgY2hhbmdlZCB0aGVtIGZvciBiZXR0ZXIhXCIsXG4gICAgXCJ0cmF2ZWxsZXJOYW1lXCI6IFwiU29oZWwgRGV2YW5pXCIsXG4gICAgXCJ0cmF2ZWxsZXJMb2NhdGlvblwiOiBcIkh5ZGVyYWJhZFwiLFxuICAgIFwiZGF5c0Fnb1wiOiBcIjMgZGF5cyBhZ29cIixcbiAgICBcInN0YXJzXCI6IDQsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gVmlldG5hbSBcIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL3NvaGVsLXJvbWFudGljLXRyaXAtdG8tdmlldG5hbS10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Tb2hlbCtEZXZhbmkvVGh1bWJuYWlsK2ltYWdlLmpwZ2AsXG4gICAgXCJpbWFnZXNcIjogW1xuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NvaGVsK0RldmFuaS9Db3B5K29mKzFfSGFub2kuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Tb2hlbCtEZXZhbmkvQ29weStvZisxX05oYStUYXJhbmcuSlBHKzEwMC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NvaGVsK0RldmFuaS9Db3B5K29mKzJfSGFMb25nK0JheS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NvaGVsK0RldmFuaS9Db3B5K29mKzJfSGFub2kuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Tb2hlbCtEZXZhbmkvQ29weStvZiszX0hhTG9uZytCYXkuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Tb2hlbCtEZXZhbmkvQ29weStvZis0X05oYStUYXJhbmcuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDExNjEyNTIsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIlNhaXJhbSdzIG9uZS1vZi1pdHMta2luZCBob25leW1vb25cIixcbiAgICBcImhlYWRpbmdcIjogXCJTYWlyYW0ncyBIZWF2ZW5seSBIb25leW1vb24gSW4gQmFsaSBcIixcbiAgICBcInRhZ3NcIjogXCIjaG9uZXltb29uLCAjYWR2ZW50dXJlLCAjbmF0dXJlLCAjbHV4dXJ5XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgcGVyZmVjdCBibGVuZCBvZiByb21hbmNlLCBuYXR1cmUgJiBhZHZlbnR1cmUsIFNhaXJhbSdzIGhvbmV5bW9vbiBpbiBCYWxpIHdhcyBoZWF2ZW5seS4gRnJvbSB0aGUgc3Vuc2V0IGRpbm5lciBjcnVpc2UgdG8gdGhlIEtpbnRhbWFuaSB0b3VyLCBoZXJlIGFyZSBhbGwgdGhlIHNlY3JldHMgYmVoaW5kIHRoZWlyIG1lbW9yYWJsZSBhZmZhaXIuIFwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIlNhaXJhbSBNZW5vblwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJIeWRlcmFiYWRcIixcbiAgICBcImRheXNBZ29cIjogXCIxIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDUsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gQmFsaVwiLFxuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvc2FpcmFtLTVuLTZkLWhvbmV5bW9vbi1pbi1iYWxpLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NhaXJhbStNZW5vbi9UaHVtYm5haWwuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU2FpcmFtK01lbm9uL0NvcHkrb2YrZGF5MV9JTUdfNTYyMi5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NhaXJhbStNZW5vbi9Db3B5K29mK2RheTJfRFNDMTk4Mi5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NhaXJhbStNZW5vbi9Db3B5K29mK2RheTJfRFNDMjAxMC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NhaXJhbStNZW5vbi9Db3B5K29mK2RheTNfSU1HXzUzNTIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9TYWlyYW0rTWVub24vQ29weStvZitkYXk1X0lNR182Mjc1LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxMTI3MDA2LFxuICAgIFwidHJpcFR5cGVcIjogXCJIb25leW1vb25cIixcbiAgICBcInRhZ05hbWVcIjogXCJEb3VibGUgZGVsaWdodCBob25leW1vb25cIixcbiAgICBcImhlYWRpbmdcIjogXCJHdXJwcmVldCdzIEhvbmV5bW9vbiBJbiBTaW5nYXBvcmUgQW5kIEJhbGlcIixcbiAgICBcInRhZ3NcIjogXCIjaG9uZXltb29uLCAjbmF0dXJlLCAjc2lnaHRzZWVpbmcsICNiZWFjaFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJIYXZpbmcgdmlzaXRlZCBib3RoIFNpbmdhcG9yZSBhbmQgQmFsaSBvbiBoaXMgaG9uZXltb29uLCBHdXJwcmVldCB0ZWxscyB1cyBhYm91dCB0aGUgYmVzdCBwbGFjZXMgdG8gdmlzaXQgaW4gYm90aCB0aGUgY291bnRyaWVzIGZvciBhIGZydWl0ZnVsIHJvbWFudGljIGV4cGVyaWVuY2Ugd2l0aCB5b3VyIHNwZWNpYWwgb25lLlwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIkd1cnByZWV0IEJoYXRpYVwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJOZXcgRGVsaGlcIixcbiAgICBcImRheXNBZ29cIjogXCIxIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDUsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gU2luZ2Fwb3JlICYgQmFsaVwiLFxuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvZ3VycHJlZXQtaG9uZXltb29uLXRyaXAtdG8tc2luZ2Fwb3JlLWFuZC1iYWxpLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0d1cnByZWV0K0JoYXRpYS9UaHVtYm5haWwuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvR3VycHJlZXQrQmhhdGlhL0NvcHkrb2YrSU1HLTIwMTcwMzIwLVdBMDAxMS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0d1cnByZWV0K0JoYXRpYS9Db3B5K29mK0lNRy0yMDE3MDMyMC1XQTAwNDMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9HdXJwcmVldCtCaGF0aWEvQ29weStvZitJTUctMjAxNzAzMjAtV0EwMDY4LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvR3VycHJlZXQrQmhhdGlhL0NvcHkrb2YrSU1HLTIwMTcwMzIwLVdBMDA4Mi5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0d1cnByZWV0K0JoYXRpYS9Db3B5K29mK0lNRy0yMDE3MDMyMC1XQTAwODYuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDE4MjM5ODIsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkZhbGFrJ3MgUm9tYW50aWMgSG9saWRheSBJbiBFdXJvcGVcIixcbiAgICBcImhlYWRpbmdcIjogXCJGYWxhaydzIFZlbmV0aWFuIEhvbGlkYXkgV2l0aCBIaXMgV2lmZVwiLFxuICAgIFwidGFnc1wiOiBcIiNSb21hbnRpYywgI05hdHVyZSwgI0hpc3RvcmljYWwsICNNb3VudGFpbnNcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRmFsYWsgYW5kIGhpcyB3aWZlIGV4cGVyaWVuY2VkIG9sZC13b3JsZCByb21hbmNlIG9uIHRoZWlyIEV1cm9wZWFuIGhvbGlkYXkuIEZyb20gdGhlIGljb25pYyBFaWZmZWwgVG93ZXIgdG8gdGhlIHNub3d5IG1vdW50YWlucyBvZiBTd2l0emVybGFuZCB0byB0aGUgR29uZG9sYSByaWRlIGluIFZlbmljZSwgdGhleSBpbmR1bGdlZCBpbiBhbGwuXCIsXG4gICAgXCJ0cmF2ZWxsZXJOYW1lXCI6IFwiRmFsYWsgUGFuZHlhXCIsXG4gICAgXCJ0cmF2ZWxsZXJMb2NhdGlvblwiOiBcIkJhbmdhbG9yZVwiLFxuICAgIFwiZGF5c0Fnb1wiOiBcIjEgZGF5IGFnb1wiLFxuICAgIFwic3RhcnNcIjogNSxcbiAgICBcImRlc3RpbmF0aW9uXCI6IFwiVHJpcCB0byBFdXJvcGVcIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL2ZhbGFrLXJvbWFudGljLXRyaXAtdG8tZXVyb3BlLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0ZhbGFrK1BhbmR5YSsoRXVyb3BlKS9UaHVtYm5haWwvR29uZG9sYStyaWRlK2luK1ZlbmljZSsuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvRmFsYWsrUGFuZHlhKyhFdXJvcGUpL0Jlc3QrNisoY3JvcHBlZCkvMS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0ZhbGFrK1BhbmR5YSsoRXVyb3BlKS9CZXN0KzYrKGNyb3BwZWQpLzIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9GYWxhaytQYW5keWErKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS8zLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvRmFsYWsrUGFuZHlhKyhFdXJvcGUpL0Jlc3QrNisoY3JvcHBlZCkvNC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0ZhbGFrK1BhbmR5YSsoRXVyb3BlKS9CZXN0KzYrKGNyb3BwZWQpLzUuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9GYWxhaytQYW5keWErKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS82LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxMDQyNzcwLFxuICAgIFwidHJpcFR5cGVcIjogXCJIb25leW1vb25cIixcbiAgICBcInRhZ05hbWVcIjogXCJUaGUgTW9zdCBTcGVjaWFsIEhvbmV5bW9vbiBJbiBFdXJvcGVcIixcbiAgICBcImhlYWRpbmdcIjogXCJBa3NoYXkncyBTdXJyZWFsIEhvbmV5bW9vbiBJbiBFdXJvcGVcIixcbiAgICBcInRhZ3NcIjogXCIjUm9tYW50aWMsICNOYXR1cmUsICNIaXN0b3JpY2FsLCAjTW91bnRhaW5zXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkFrc2hheSdzIGhvbmV5bW9vbiBpbiBFdXJvcGUgd2FzIGEgaG9saWRheSBvZiBhIGxpZmV0aW1lISBUaGV5IHdpdG5lc3NlZCB0aGUgaGVhdmVubHkgbW91bnRhaW5zIG9mIFN3aXR6ZXJsYW5kIGFuZCBvbGQgd29ybGQgY2hhcm0gb2YgSXRhbHkgb24gYSBzcGVjaWFsIGhvbGlkYXkgdGhhdCB3aWxsIHN0YXkgaW4gdGhlaXIgaGVhcnRzIGZvcmV2ZXIhXCIsXG4gICAgXCJ0cmF2ZWxsZXJOYW1lXCI6IFwiQWtzaGF5IFB1bmphYmlcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiRGVsaGlcIixcbiAgICBcImRheXNBZ29cIjogXCIyIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDUsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gRXVyb3BlXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9ha3NoYXktcm9tYW50aWMtdHJpcC10by1ldXJvcGUtdHJhdmVsb2d1ZS9cIixcbiAgICBcImF2YXRhclBpY1wiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWtzaGF5K1B1bmphYmkrKEV1cm9wZSkvVGh1bWJuYWlsL0lNRy0yMDE3MDIwNC1XQTAwMzUuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWtzaGF5K1B1bmphYmkrKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS8xLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWtzaGF5K1B1bmphYmkrKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS8yLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWtzaGF5K1B1bmphYmkrKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS8zLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWtzaGF5K1B1bmphYmkrKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS80LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWtzaGF5K1B1bmphYmkrKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS81LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQWtzaGF5K1B1bmphYmkrKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS82LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxODM3MzE4LFxuICAgIFwidHJpcFR5cGVcIjogXCJIb25leW1vb25cIixcbiAgICBcInRhZ05hbWVcIjogXCJQYW5rYWoncyBFeG90aWMgSG9uZXltb29uIEluIEJhbGlcIixcbiAgICBcImhlYWRpbmdcIjogXCJQYW5rYWoncyBVdHRlcmx5IEV4b3RpYyBIb25leW1vb24gSW4gQmFsaVwiLFxuICAgIFwidGFnc1wiOiBcIiNSb21hbnRpYywgI0JlYWNoZXMsICNBZHZlbnR1cmUsICNOYXR1cmVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnJvbSB0ZW1wbGVzIHRvIGJlYWNoZXMsIGFuZCBmcm9tIG5hdHVyZSB0byBhZHZlbnR1cmUsIFBhbmthaiBhbmQgaGlzIHdpZmUgd2FudGVkIHRvIGV4cGVyaWVuY2UgdGhlIGJlc3Qgb2YgYW4gZXhvdGljIGRlc3RpbmF0aW9uIGFuZCBoZXJlJ3MgaG93IEJhbGkgc3VycHJpc2VkIHRoZW0gYmV5b25kIHRoZWlyIGV4cGVjdGF0aW9ucyFcIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJQYW5rYWogVmVybWFcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiRGVsaGlcIixcbiAgICBcImRheXNBZ29cIjogXCIyIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDQsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gQmFsaVwiLFxuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvcGFua2FqLWhvbmV5bW9vbi10cmlwLXRvLWJhbGktdHJhdmVsb2d1ZS9cIixcbiAgICBcImF2YXRhclBpY1wiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUGFua2FqK1Zlcm1hKyhCYWxpKS9UaHVtYm5haWwvSU1HXzIwMTcxMDEzXzE3NDUzMS5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9QYW5rYWorVmVybWErKEJhbGkpL0Jlc3QrNisoY3JvcHBlZCkvMS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1BhbmthaitWZXJtYSsoQmFsaSkvQmVzdCs2Kyhjcm9wcGVkKS8yLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUGFua2FqK1Zlcm1hKyhCYWxpKS9CZXN0KzYrKGNyb3BwZWQpLzMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9QYW5rYWorVmVybWErKEJhbGkpL0Jlc3QrNisoY3JvcHBlZCkvNC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1BhbmthaitWZXJtYSsoQmFsaSkvQmVzdCs2Kyhjcm9wcGVkKS81LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUGFua2FqK1Zlcm1hKyhCYWxpKS9CZXN0KzYrKGNyb3BwZWQpLzYuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDE4MzUyNzUsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkEgTWFnbmlmaWNlbnQgR3JlZWsgSG9uZXltb29uXCIsXG4gICAgXCJoZWFkaW5nXCI6IFwiU29uYWxpJ3MgTWVkaXRlcnJhbmVhbiBSb21hbnRpYyBUcmlwIFRvIEdyZWVjZVwiLFxuICAgIFwidGFnc1wiOiBcIiNTZWEsICNSb21hbnRpYywgI0JlYWNoLCAjTmlnaHRsaWZlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlNvbmFsaSBhbmQgaGVyIGh1c2JhbmQgd2VudCBvbiBhIGdsYW1vcm91cyByb21hbnRpYyB0cmlwIHRvIEdyZWVjZSBhbmQgaXQgd2FzIHRydWx5IHNwZWNpYWwgaW4gZXZlcnkgbWFubmVyLiBUaGV5IGVuam95ZWQgdGhlIG1hZ25pZmljZW50IGNoYXJtIG9mIHRoZSBBZWdlYW4gU2VhIGFuZCB0aGUgb2xkLXdvcmxkIGNoYXJtIG9mIFNhbnRvcmluaS5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJTb25hbGkgTWFoYWphblwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJNdW1iYWlcIixcbiAgICBcImRheXNBZ29cIjogXCIxIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDUsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gRXVyb3BlXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9zb25hbGktcm9tYW50aWMtdHJpcC10by1ncmVlY2UtdHJhdmVsb2d1ZS9cIixcbiAgICBcImF2YXRhclBpY1wiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU29uYWxpK01haGFqYW4rKEV1cm9wZSkvVGh1bWJuYWlsL0lNRy0yMDE3MTEwNS1XQTAwNjkuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU29uYWxpK01haGFqYW4rKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS8xLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU29uYWxpK01haGFqYW4rKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS8yLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU29uYWxpK01haGFqYW4rKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS8zLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU29uYWxpK01haGFqYW4rKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS80LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU29uYWxpK01haGFqYW4rKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS81LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU29uYWxpK01haGFqYW4rKEV1cm9wZSkvQmVzdCs2Kyhjcm9wcGVkKS82LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxMjk3OTc4LFxuICAgIFwidHJpcFR5cGVcIjogXCJIb25leW1vb25cIixcbiAgICBcInRhZ05hbWVcIjogXCJUYWxlIE9mIFJvbWFuY2UgSW4gU2V5Y2hlbGxlc1wiLFxuICAgIFwiaGVhZGluZ1wiOiBcIlJham5pc2gncyBBY3Rpb24tUGFja2VkIFNleWNoZWxsZXMgSG9uZXltb29uXCIsXG4gICAgXCJ0YWdzXCI6IFwiI1JvbWFudGljLCAjQmVhY2hlcywgI0FkdmVudHVyZSwgI05hdHVyZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJSYWpuaXNoJ3MgaG9uZXltb29uIGluIFNleWNoZWxsZXMgd2FzIHRoZSBwZXJmZWN0IGJsZW5kIG9mIHJvbWFuY2UgYW5kIGFkdmVudHVyZS4gRnJvbSBleHBsb3JpbmcgdGhlIGlzbGFuZHMgb24gdGhlaXIgb3duIHRvIGhhdmluZyBiZWFjaHNpZGUgZGlubmVyIGRhdGVzLCBzZWUgaG93IHRoZXkgbWFkZSB0aGVpciB0cmlwIHVsdHJhIHJvbWFudGljLlwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIlJham5pc2ggS3VtYXJcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiTXVtYmFpXCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMiBkYXkgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA0LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIFNleWNoZWxsZXNcIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL3Jham5pc2gtc2V5Y2hlbGxlcy1ob25leW1vb24tdG91ci10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9SYWpuaXNoK0t1bWFyKyhTZXljaGVsbGVzKS9UaHVtYm5haWwvTGErZGlndWUuSlBHYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUmFqbmlzaCtLdW1hcisoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS8xLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUmFqbmlzaCtLdW1hcisoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS8yLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUmFqbmlzaCtLdW1hcisoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS8zLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUmFqbmlzaCtLdW1hcisoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS80LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUmFqbmlzaCtLdW1hcisoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS81LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUmFqbmlzaCtLdW1hcisoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS82LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiA4Nzg5ODgsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkFkdmVudHVyb3VzIEhvbmV5bW9vbiBJbiBNYWxkaXZlc1wiLFxuICAgIFwiaGVhZGluZ1wiOiBcIk5pc2FyZydzIEFkdmVudHVyb3VzIEhvbmV5bW9vbiBJbiBNYWxkaXZlc1wiLFxuICAgIFwidGFnc1wiOiBcIiNSb21hbnRpYywgI0JlYWNoZXMsICNBZHZlbnR1cmUsICNOYXR1cmVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmlzYXJnICYgaGlzIHdpZmUgaGFkIGEgcGljdHVyZS1wZXJmZWN0IGhvbmV5bW9vbiBpbiBNYWxkaXZlcy4gSGVyZSdzIGhvdyB0aGV5IGluZHVsZ2VkIGluIGFkdmVudHVyb3VzIGV4cGVyaWVuY2VzLCBleHBsb3JlZCB0aGUgaXNsYW5kIGF0IHRoZWlyIG93biBwYWNlLCBhbmQgaGFkIHRoZSBkcmVhbSB2YWNhdGlvbiBvZiB0aGVpciBsaXZlcy5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJOaXNhcmcgUGF0ZWxcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiTXVtYmFpXCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMiBkYXkgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIE1hbGRpdmVzXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9uaXNhcmdzLWhvbmV5bW9vbi10cmlwLXRvLW1hbGRpdmVzLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL05pc2FyZytQYXRlbCsoTWFsZGl2ZXMpL1RodW1ibmFpbC9pbWFnZTAwNi5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNhcmcrUGF0ZWwrKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzEuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNhcmcrUGF0ZWwrKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNhcmcrUGF0ZWwrKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNhcmcrUGF0ZWwrKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzQuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNhcmcrUGF0ZWwrKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzUuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXNhcmcrUGF0ZWwrKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzYuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDE4NzkxNjgsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIk5pdGluJ3MgUm9tYW50aWMgSG9saWRheSBJbiBNYWxkaXZlc1wiLFxuICAgIFwiaGVhZGluZ1wiOiBcIk5pdGluJ3MgUm9tYW50aWMgRXNjYXBlIFRvIE1hbGRpdmVzXCIsXG4gICAgXCJ0YWdzXCI6IFwiI1JvbWFudGljLCAjTmF0dXJlLCAjQmVhY2hlcywgI0x1eHVyeVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJOaXRpbiAmIGhpcyB3aWZlJ3MgbG92ZSBmb3IgdHJhdmVsIG1hZGUgdGhlbSB0YWtlIGEgcm9tYW50aWMgdHJpcCB0byBNYWxkaXZlcy4gVGhleSBzaGFyZSB3aXRoIHVzIHRoZWlyIGJlYXV0aWZ1bCBtZW1vcmllcyBhbmQgaG93IHRoaXMgaG9saWRheSBvZmZlcmVkIHRoZW0gdGhlIHBlcmZlY3QgcHJpdmFjeSwgY29tZm9ydCAmIGhhcHBpbmVzcy5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJOaXRpbiBQYXJla2hcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiTXVtYmFpXCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMiBkYXkgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA0LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIE1hbGRpdmVzXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9uaXRpbi10aGluZ3MtdG8tZG8tb24tYS1yb21hbnRpYy10cmlwLXRvLW1hbGRpdmVzLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL05pdGluK1BhcmVraCsoTWFsZGl2ZXMpL1RodW1ibmFpbC9EU0NfMjQxMC5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRpbitQYXJla2grKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzEuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRpbitQYXJla2grKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRpbitQYXJla2grKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRpbitQYXJla2grKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzQuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRpbitQYXJla2grKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzUuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRpbitQYXJla2grKE1hbGRpdmVzKS9CZXN0KzYrKGNyb3BwZWQpLzYuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDE3NjcyMjYsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkV4cGxvcmluZyBUaGUgQmVhdXR5IE9mIExhZGFraFwiLFxuICAgIFwiaGVhZGluZ1wiOiBcIk5pdGlzaCdzIFBpY3R1cmUgUGVyZmVjdCBUcmlwIFRvIExhZGFraFwiLFxuICAgIFwidGFnc1wiOiBcIiNOYXR1cmUsICNBZHZlbnR1cmUsICNSb21hbnRpYywgI0N1bHR1cmFsXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk5pdGlzaCBhbmQgaGlzIHdpZmUgd2VudCBvbiBhIHN1cnJlYWwgam91cm5leSB0byBMYWRha2ggYW5kIHdpdG5lc3NlZCB0aGUgbWFnaWMgb2YgbmF0dXJlIGxpa2UgbmV2ZXIgYmVmb3JlLiBGcm9tIHZpc2l0aW5nIGZhbW91cyBsYWtlcyB0byBpbmR1bGdpbmcgaW4gdGhlIGN1bHR1cmUsIGl0IHdhcyBhIG9uY2UgaW4gYSBsaWZldGltZSBqb3VybmV5LlwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIk5pdGlzaCBBZ3Jhd2FsXCIsXG4gICAgXCJ0cmF2ZWxsZXJMb2NhdGlvblwiOiBcIlB1bmVcIixcbiAgICBcImRheXNBZ29cIjogXCIxIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDQsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gTGFkYWtoXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9uaXRpc2gtcm9tYW50aWMtdHJpcC10by1sYWRha2gtdHJhdmVsb2d1ZS9cIixcbiAgICBcImF2YXRhclBpY1wiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTml0ZXNoKyhMYWRha2gpL3RodW1ibmFpbC9pbWFnZTAyMS5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRlc2grKExhZGFraCkvQmVzdCs2Kyhjcm9wcGVkKS8xLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTml0ZXNoKyhMYWRha2gpL0Jlc3QrNisoY3JvcHBlZCkvMi5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL05pdGVzaCsoTGFkYWtoKS9CZXN0KzYrKGNyb3BwZWQpLzMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9OaXRlc2grKExhZGFraCkvQmVzdCs2Kyhjcm9wcGVkKS80LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTml0ZXNoKyhMYWRha2gpL0Jlc3QrNisoY3JvcHBlZCkvNS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL05pdGVzaCsoTGFkYWtoKS9CZXN0KzYrKGNyb3BwZWQpLzYuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDIzMDIxMTEsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkhvbmV5bW9vblwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkFua2l0J3MgcGVyZmVjdCBtYWxkaXZlcyBob25leW1vb25cIixcbiAgICBcImhlYWRpbmdcIjogXCJXYXRlciBWaWxsYXMsIENhbmRsZWxpZ2h0IERpbm5lcnMsIENydWlzZXMgJiBTcGE6IEEgUGVyZmVjdCBIb25leW1vb25cIixcbiAgICBcInRhZ3NcIjogXCIjbG92ZSwgI3BlYWNlLCAjcmVsYXgsICNjaGlsbFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBbGwgdGhleSB3YW50ZWQgd2FzIHRvIHNwZW5kIHRpbWUgd2l0aCBlYWNoIG90aGVyIGFuZCBzaW1wbHkgcmVsYXggYW1pZCBzb21lIFwiICtcbiAgICBcImdvcmdlb3VzIGJhY2tkcm9wcy4gU28sIEFua2l0IGJvb2tlZCBoaW1zZWxmIGFuZCBoaXMgd2lmZSBQcml5YSBhIGZhYnVsb3VzIDQgbmlnaHRzIDUgZGF5cyBNYWxkaXZlcyBob25leW1vb24gcGFja2FnZS5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJBbmtpdCBXYWRod2FcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiTmV3IERlbGhpXCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMSBkYXkgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIE1hbGRpdmVzXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9hbmtpdC1hbmQtcHJpeWEtaG9uZXltb29uLXRyaXAtdG8tbWFsZGl2ZXMtdHJhdmVsb2d1ZS9cIixcbiAgICBcImF2YXRhclBpY1wiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQW5raXQrV2FkaHdhLzc3LmpwZ2AsXG4gICAgXCJpbWFnZXNcIjogW1xuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0Fua2l0K1dhZGh3YS8xLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQW5raXQrV2FkaHdhLzIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9BbmtpdCtXYWRod2EvMy5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0Fua2l0K1dhZGh3YS80LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvQW5raXQrV2FkaHdhLzUuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9BbmtpdCtXYWRod2EvNi5qcGdgXG4gICAgXVxuICB9XG5dO1xuXG5jb25zdCBmYW1pbHlEYXRhID0gW1xuICB7XG4gICAgXCJ0cmlwSWRcIjogMTc0NTk0MSxcbiAgICBcInRyaXBUeXBlXCI6IFwiRmFtaWx5XCIsXG4gICAgXCJ0YWdOYW1lXCI6IFwiU2VlbWEncyBhZHZlbnR1cmUgdHJpcFwiLFxuICAgIFwiaGVhZGluZ1wiOiBcIlNlZW1hJ3MgQW5kYW1hbiBIb2xpZGF5IFdpdGggRmFtaWx5ICYgRnJpZW5kc1wiLFxuICAgIFwidGFnc1wiOiBcIiNmYW1pbHksICNhZHZlbnR1cmUsICNiZWFjaCwgI25hdHVyZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJGcm9tIHdhdGNoaW5nIHRoZSBsaWdodCAmIHNvdW5kIHNob3cgYXQgdGhlIENlbGx1bGFyIEphaWwgdG8gYmVhY2ggaG9wcGluZywgU2VlbWEgc2F3IGhlciBkcmVhbSBvZiB3aXRuZXNzaW5nIEFuZGFtYW4gYXQgaXRzIGJlc3QgY29tZSB0cnVlLiBTaGUgc2hhcmVzIHRoZSBzd2VldCB0YWxlcyBmcm9tIGhlciB0cmlwIGFuZCB5b3UnbGwgbG92ZSBpdC5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJTZWVtYSBLdW1hclwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJOZXcgRGVsaGlcIixcbiAgICBcImRheXNBZ29cIjogXCIzIGRheXMgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIEFuZGFtYW5cIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL3NlZW1hLXRyaXAtd2l0aC1mYW1pbHktZnJpZW5kcy10by1hbmRhbWFuLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1NlZW1hK0t1bWFyL1RodW1ibmFpbC5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9TZWVtYStLdW1hci9Db3B5K29mK0F0K0hhdmVsb2NrK2JlYWNoLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU2VlbWErS3VtYXIvQ29weStvZitBdCtLYWFsYStQYXR0aGFyK2JlYWNoLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU2VlbWErS3VtYXIvQ29weStvZitGaXNoZXJtZW4rYXQrSGF2ZWxvY2srYmVhY2guanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9TZWVtYStLdW1hci9Db3B5K29mK0lNR18yMDE3MDcxOV8xNDM2MTAwMjQuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9TZWVtYStLdW1hci9Db3B5K29mK09uK3dheSt0bytzbm9ya2VsbGluZzEuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDExODAzNTEsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkZhbWlseVwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkEgbW90aGVyJ3MgdHJpcCB0byBJY2VsYW5kXCIsXG4gICAgXCJoZWFkaW5nXCI6IFwiUG9vamEncyBNYXJ2ZWxvdXMgRmFtaWx5IFRyaXAgVG8gSWNlbGFuZFwiLFxuICAgIFwidGFnc1wiOiBcIiNmYW1pbHksICNuYXR1cmUsICNzbm93LCAjYm9uZGluZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJQb29qYSB3ZW50IG9uIGEgZmFtaWx5IGhvbGlkYXkgdG8gSWNlbGFuZCBhbmQgTm9yd2F5IHdpdGggaGVyIHBhcmVudHMgYW5kIGRhdWdodGVyLiBTaGUgdGVsbHMgdXMgaG93IHRoZSB0cmlwIHdhcyBhIG1pbmQgYmxvd2luZyBleHBlcmllbmNlIGZvciB0aGVtIHdoeSBib3RoIHRoZSBjb3VudHJpZXMgYXJlIGEgbXVzdCB2aXNpdCBmb3IgYWxsLiBcIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJQb29qYSBOYWhhclwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJNdW1iYWlcIixcbiAgICBcImRheXNBZ29cIjogXCIxIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDQsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gRXVyb3BlXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9wb29qYS1mYW1pbHktdHJpcC10by1pY2VsYW5kLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1Bvb2phK05haGFyL1RodW1ibmFpbC5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Qb29qYStOYWhhci9Db3B5K29mK0lNRy0yMDE3MDUyNC1XQTAwNzguanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Qb29qYStOYWhhci9Db3B5K29mK0lNRy0yMDE3MDUyNC1XQTAwODAuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Qb29qYStOYWhhci9Db3B5K29mK0lNRy0yMDE3MDUyNC1XQTAwOTQuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Qb29qYStOYWhhci9Db3B5K29mK0lNRy0yMDE3MDUyNC1XQTAxMDIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9Qb29qYStOYWhhci9Db3B5K29mK0lNRy0yMDE3MDUyNC1XQTAxMjIuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDE1MDE4MDMsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkZhbWlseVwiLFxuICAgIFwidGFnTmFtZVwiOiBcIk1lZ2hhJ3MgU2lra2ltIFRyaXBcIixcbiAgICBcImhlYWRpbmdcIjogXCJNZWdoYSdzIEZ1biBGYW1pbHkgVHJpcCBUbyBTaWtraW0gJiBEYXJqZWVsaW5nXCIsXG4gICAgXCJ0YWdzXCI6IFwiI2ZhbWlseSwgI25hdHVyZSwgI2FkdmVudHVyZSwgI3NpZ2h0c2VlaW5nXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkdvb2QgY29tcGFuaW9ucyBtYWtlIGFueSBob2xpZGF5IG1vcmUgbWVtb3JhYmxlLCBhbmQgTWVnaGEncyBmYW1pbHkgdHJpcCB0byBTaWtraW0gJiBEYXJqZWVsaW5nIGlzIGEgcHJvb2Ygb2YgdGhhdC4gRnJvbSB2aXNpdGluZyB0aGUgbGFrZXMgdG8geWFrIHJpZGluZywgaGVyZSdzIGhvdyB0aGV5IGhhZCB0aGVpciBtb21lbnRzIG9mIGFkdmVudHVyZS5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJNZWdoYSBHdXB0YVwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJQYXRuYVwiLFxuICAgIFwiZGF5c0Fnb1wiOiBcIjIgZGF5cyBhZ29cIixcbiAgICBcInN0YXJzXCI6IDUsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gU2lra2ltIERhcmplZWxpbmdcIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL21lZ2hhLWZhbWlseS10cmlwLXRvLXNpa2tpbS1hbmQtZGFyamVlbGluZy10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9NZWdoYStHdXB0YS9UaHVtYm5haWwuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTWVnaGErR3VwdGEvQ29weStvZitCNjEyXzIwMTcwNTIzXzA4MDgzMC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL01lZ2hhK0d1cHRhL0NvcHkrb2YrTWlyaWsrKDEpLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTWVnaGErR3VwdGEvQ29weStvZitTZXZlbitTaXN0ZXIrKDEpLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvTWVnaGErR3VwdGEvQ29weStvZitZdW10aGFuZysoMikuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9NZWdoYStHdXB0YS9Db3B5K29mK1plcm8rcG9pbnQrKDEpLmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxNTU4NjM0LFxuICAgIFwidHJpcFR5cGVcIjogXCJGYW1pbHlcIixcbiAgICBcInRhZ05hbWVcIjogXCJDb3VwbGUncyB0cmlwIHdpdGggZGF1Z2h0ZXJcIixcbiAgICBcImhlYWRpbmdcIjogXCJIZWVuYSdzIEhpZ2ggT24gTG92ZSAmIExpZmUgVHJpcCBUbyBUaGFpbGFuZFwiLFxuICAgIFwidGFnc1wiOiBcIiNmYW1pbHksICNjdWx0dXJlLCAjbmF0dXJlLCAjbHV4dXJ5XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkZvciBIZWVuYSAmIGhlciBodXNiYW5kLCB0aGVpciB0cmlwIHRvIFRoYWlsYW5kIHdhcyBtb3JlIG9mIGEgY2VsZWJyYXRpb24gb2YgdGhlaXIgZGF1Z2h0ZXIncyBoYXBwaW5lc3MuIEZ1bGwgb2YgbG92ZSAmIGxhdWdodGVyLCBIZWVuYSBzaGFyZXMgaG93IHRoZXkgY2VsZWJyYXRlZCB0aGVpciBkYXVnaHRlcidzIGJpcnRoZGF5IGluIHN0eWxlIVwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIkhlZW5hIFJhanB1dFwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJOZXcgRGVsaGlcIixcbiAgICBcImRheXNBZ29cIjogXCIxIGRheSBhZ29cIixcbiAgICBcInN0YXJzXCI6IDUsXG4gICAgXCJkZXN0aW5hdGlvblwiOiBcIlRyaXAgdG8gVGhhaWxhbmRcIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL2hlZW5hLWZhbWlseS10cmlwLXRvLXRoYWlsYW5kLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0hlZW5hK1JhanB1dC9UaHVtYm5haWwuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvSGVlbmErUmFqcHV0L0NvcHkrb2YrSU1HLTIwMTcwNjIzLVdBMDAwMS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0hlZW5hK1JhanB1dC9Db3B5K29mK0lNRy0yMDE3MDYyMy1XQTAwMDIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9IZWVuYStSYWpwdXQvQ29weStvZitJTUctMjAxNzA2MjMtV0EwMDA1LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvSGVlbmErUmFqcHV0L0NvcHkrb2YrSU1HLTIwMTcwNjIzLVdBMDA0NS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0hlZW5hK1JhanB1dC9Db3B5K29mK0lNRy0yMDE3MDYyMy1XQTAwNjQuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDE0NzI4NTUsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkZhbWlseVwiLFxuICAgIFwidGFnTmFtZVwiOiBcIlB1bml0YSAmIEZyaWVuZHMgaW4gSmFpc2FsbWVyXCIsXG4gICAgXCJoZWFkaW5nXCI6IFwiUHVuaXRhJ3MgVHJpcCBUbyBUaGUgR29sZGVuIENpdHkgV2l0aCBGcmllbmRzXCIsXG4gICAgXCJ0YWdzXCI6IFwiI2ZhbWlseSwgI2ZyaWVuZHMsICNhZHZlbnR1cmUsICNzaWdodHNlZWluZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJQdW5pdGEgYW5kIGhlciBmcmllbmRzIHdlbnQgb24gYSB0cmlwIHRvIEphaXNhbG1lciB0byBleHBsb3JlIHRoZSBtYXJ2ZWxzIG9mIHRoZSBjaXR5IGFuZCBpdHMgc2FuZCBkdW5lcy4gU2hlIHNoYXJlcyBoZXIgcmljaCBleHBlcmllbmNlcyB3aXRoIHVzIGFuZCB0ZWxsIHVzIHdoeSBpdCdzIGEgcGVyZmVjdCBwbGFjZSBmb3IgeW91bmdzdGVycy5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJQdW5pdGFcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiTmV3IERlbGhpXCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMyBkYXlzIGFnb1wiLFxuICAgIFwic3RhcnNcIjogNCxcbiAgICBcImRlc3RpbmF0aW9uXCI6IFwiVHJpcCB0byBSYWphc3RoYW5cIixcbiAgICBcImxpbmtcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ibG9nL3B1bml0YS1mcmllbmRzLXRyaXAtdG8tamFpc2FsbWVyLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1B1bml0YStTaGFybWEvVGh1bWJuYWlsLmpwZ2AsXG4gICAgXCJpbWFnZXNcIjogW1xuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1B1bml0YStTaGFybWEvQ29weStvZisxNy5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1B1bml0YStTaGFybWEvQ29weStvZisyLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUHVuaXRhK1NoYXJtYS9Db3B5K29mKzM0LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvUHVuaXRhK1NoYXJtYS9Db3B5K29mKzguanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9QdW5pdGErU2hhcm1hL0NvcHkrb2YrOS5qcGdgXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJ0cmlwSWRcIjogODgzOTAyLFxuICAgIFwidHJpcFR5cGVcIjogXCJGYW1pbHlcIixcbiAgICBcInRhZ05hbWVcIjogXCJXaXRoIGZhbWlseSBpbiBTaW5nYXBvcmUgJiBNYWxheXNpYVwiLFxuICAgIFwiaGVhZGluZ1wiOiBcIkd1cnByZWV0J3MgRmFtaWx5IFRyaXAgVG8gU2luZ2Fwb3JlICYgTWFsYXlzaWFcIixcbiAgICBcInRhZ3NcIjogXCIjZmFtaWx5LCAjbmF0dXJlLCAjYWR2ZW50dXJlLCAjc2lnaHRzZWVpbmdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiR3VycHJlZXQncyBmdW4tbG9hZGVkIGZhbWlseSB0cmlwIHRvIFNpbmdhcG9yZSBhbmQgTWFsYXlzaWEgd2FzIGV4Y2l0aW5nIGJleW9uZCBsaW1pdHMuIEhpcyBmYW1pbHkgYm9uZGVkIHN0cm9uZ2VyIGFuZCBiZXR0ZXIgd2l0aCB0aW1lLCBhbmQgaGVyZSdzIHdoYXQgR3VycHJlZXQgd3JvdGUgYWJvdXQgaGlzIGJsaXNzZnVsIHZhY2F0aW9uIVwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIkd1cnByZWV0IFNpbmdoIEd1anJhbFwiLFxuICAgIFwidHJhdmVsbGVyTG9jYXRpb25cIjogXCJOZXcgRGVsaGlcIixcbiAgICBcImRheXNBZ29cIjogXCIzIGRheXMgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIFNpbmdhcG9yZSAmIE1hbGF5c2lhXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9ndXJwcmVldC1mYW1pbHktdHJpcC1zaW5nYXBvcmUtYW5kLW1hbGF5c2lhLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0d1cnByZWV0K1NpbmdoK0d1anJhbC9UaHVtYm5haWwuanBnYCxcbiAgICBcImltYWdlc1wiOiBbXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvR3VycHJlZXQrU2luZ2grR3VqcmFsL0NvcHkrb2YrSU1HLTIwMTYxMjAxLVdBMDAwMS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0d1cnByZWV0K1NpbmdoK0d1anJhbC9Db3B5K29mK0lNRy0yMDE2MTIwMS1XQTAwMDguanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9HdXJwcmVldCtTaW5naCtHdWpyYWwvQ29weStvZitJTUctMjAxNjEyMDItV0EwMDE1LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvR3VycHJlZXQrU2luZ2grR3VqcmFsL0NvcHkrb2YrSU1HLTIwMTYxMjAyLVdBMDAyMy5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0d1cnByZWV0K1NpbmdoK0d1anJhbC9Db3B5K29mK0lNRy0yMDE2MTIwMi1XQTAwNjUuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDEzMTQ3MDUsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkZhbWlseVwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkZ1bi1maWxsZWQgTmV3IFplYWxhbmQgVmFjYXRpb25cIixcbiAgICBcImhlYWRpbmdcIjogXCJWaWtyYW0ncyBSZXN0b3JpbmcgRmFtaWx5IFRyaXAgVG8gTmV3IFplYWxhbmRcIixcbiAgICBcInRhZ3NcIjogXCIjYWR2ZW50dXJlLCAjbmF0dXJlLCAjbHV4dXJ5LCAjY3VsdHVyZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJWaWtyYW0gd2VudCBvbiBhbiBlcGljIHRyaXAgdG8gTmV3IFplYWxhbmQgd2l0aCBoaXMgZmFtaWx5ICYgZnJpZW5kcyB0byByZWxpc2ggdGhlIGJlc3Qgb2YgbmF0dXJlLCBhbmQgYWR2ZW50dXJlLiBGcm9tIGNydWlzaW5nIHRvIGhlbGljb3B0ZXIgcmlkZXMsIGhlcmUncyB3aGF0IFZpa3JhbSB3cm90ZSBhYm91dCBoaXMgcmVmcmVzaGluZyB0cmlwIVwiLFxuICAgIFwidHJhdmVsbGVyTmFtZVwiOiBcIlZpa3JhbSBCZWxsdXJcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiQmVuZ2FsdXJ1XCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMSBkYXkgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA0LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIE5ldyBaZWFsYW5kXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy92aWtyYW0tZnJpZW5kcy1mYW1pbHktdHJpcC10by1uZXd6ZWFsYW5kLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1Zpa3JhbStCZWxsdXIvVGh1bWJuYWlsLmpwZ2AsXG4gICAgXCJpbWFnZXNcIjogW1xuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1Zpa3JhbStCZWxsdXIvRFNDXzA5ODkuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9WaWtyYW0rQmVsbHVyL0RTQ18wOTk0LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvVmlrcmFtK0JlbGx1ci9EU0NfMTg0Ny5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1Zpa3JhbStCZWxsdXIvRFNDXzIwNTIuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9WaWtyYW0rQmVsbHVyL0RTQ18yMTg3LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvVmlrcmFtK0JlbGx1ci9JTUdfMjAxNzA0MTRfMTQxMzUyLmpwZysxMDAuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDE0ODcyNzMsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkZhbWlseVwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkthcnRoaWsncyBGdW4gVHJpcCBXaXRoIEZhbWlseVwiLFxuICAgIFwiaGVhZGluZ1wiOiBcIkthcnRoaWsncyBJbmNyZWRpYmxlIEZhbWlseSBUcmlwIFRvIExhbmdrYXdpXCIsXG4gICAgXCJ0YWdzXCI6IFwiI2FkdmVudHVyZSwgI2ZhbWlseSwgI2JlYWNoLCAjbHV4dXJ5XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIk9mIG5hdHVyZSwgYWR2ZW50dXJlLCAmIGx1eHVyeSwgS2FydGhpaydzIGZ1bi1maWxsZWQgZmFtaWx5IHRyaXAgdG8gTGFuZ2thd2kgd2FzIGFuIG91dC1vZi10aGUtd29ybGQgZXhwZXJpZW5jZS4gRnJvbSBpc2xhbmQgaG9wcGluZyB0byBza3l3YWxraW5nLCBoZSBzaGFyZXMgaG93IExhbmdrYXdpIGNhc3QgYSBtYWdpY2FsIHNwZWxsIG9uIHRoZW0hXCIsXG4gICAgXCJ0cmF2ZWxsZXJOYW1lXCI6IFwiS2FydGhpayBWZW5rYXRcIixcbiAgICBcInRyYXZlbGxlckxvY2F0aW9uXCI6IFwiTmV3IERlbGhpXCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMSBkYXkgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIExhbmdrYXdpXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9rYXJ0aGlrLWZhbWlseS10cmlwLXRvLWxhbmdrYXdpLXRyYXZlbG9ndWUvXCIsXG4gICAgXCJhdmF0YXJQaWNcIjogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL0thcnRoaWsrVmVua2F0L1RodW1ibmFpbCtJbWFnZS5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYXJ0aGlrK1ZlbmthdC9Db3B5K29mK0lNR18yMDE3MDYwOF8xNzU3NDkuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYXJ0aGlrK1ZlbmthdC9Db3B5K29mK0lNR18yMDE3MDYxMF8xMDM2MTguanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYXJ0aGlrK1ZlbmthdC9Db3B5K29mK0lNR18yMDE3MDYxMF8xMjEzMTkuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYXJ0aGlrK1ZlbmthdC9Db3B5K29mK0lNR18yMDE3MDYxMV8xOTQwMTguanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYXJ0aGlrK1ZlbmthdC9Db3B5K29mK0lNR18yMDE3MDYxMV8xOTQxNDcuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9LYXJ0aGlrK1ZlbmthdC9Db3B5K29mK29yaWdpbmFsX2VmZDgyNTlkLWY4ODQtNGU5Mi1hMTBmLTNkNjg0MjkzZmFiZl9JTUdfMjAxNzA2MTFfMTk0MjM3LmpwZ2BcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcInRyaXBJZFwiOiAxNzY1Mjg0LFxuICAgIFwidHJpcFR5cGVcIjogXCJGYW1pbHlcIixcbiAgICBcInRhZ05hbWVcIjogXCJTdWxhYmgncyBGYW1pbHkgSG9saWRheSBJbiBTZXljaGVsbGVzXCIsXG4gICAgXCJoZWFkaW5nXCI6IFwiU3VsYWJoJ3MgQWRvcmFibGUgU2V5Y2hlbGxlcyBGYW1pbHkgR2V0YXdheVwiLFxuICAgIFwidGFnc1wiOiBcIiNOYXR1cmUsICNCZWFjaGVzLCAjRmFtaWx5LCAjTHV4dXJ5XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlN1bGFiaCBhbmQgaGlzIGFkb3JhYmxlIGZhbWlseSBoYWQgdGhlIG1vc3QgcmVmcmVzaGluZyBob2xpZGF5IGV4cGVyaWVuY2UgaW4gU2V5Y2hlbGxlcy4gRnJvbSBzY2FsaW5nIGJyZWF0aHRha2luZyBiZWFjaGVzIHRvIGhpa2luZyBhbWlkIGx1c2ggZ3JlZW5zLCBoZXJlJ3Mgd2hhdCB0aGV5IGRpZCBvbiB0aGVpciBsZWlzdXJlbHkgdmFjYXRpb24uXCIsXG4gICAgXCJ0cmF2ZWxsZXJOYW1lXCI6IFwiU3VsYWJoIENoYW5kb2xhXCIsXG4gICAgXCJ0cmF2ZWxsZXJMb2NhdGlvblwiOiBcIk11bWJhaVwiLFxuICAgIFwiZGF5c0Fnb1wiOiBcIjMgZGF5IGFnb1wiLFxuICAgIFwic3RhcnNcIjogNSxcbiAgICBcImRlc3RpbmF0aW9uXCI6IFwiVHJpcCB0byBTZXljaGVsbGVzXCIsXG4gICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYmxvZy9zdWxhYmgtZmFtaWx5LXRyaXAtdG8tc2V5Y2hlbGxlcy10cmF2ZWxvZ3VlL1wiLFxuICAgIFwiYXZhdGFyUGljXCI6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9TdWxhYmgrQ2hhbmRvbGErKFNleWNoZWxsZXMpL1RodW1ibmFpbC9Db3QrZCdvcitCZWFjaC5KUEdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9TdWxhYmgrQ2hhbmRvbGErKFNleWNoZWxsZXMpL0Jlc3QrNisoY3JvcHBlZCkvMS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1N1bGFiaCtDaGFuZG9sYSsoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS8yLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU3VsYWJoK0NoYW5kb2xhKyhTZXljaGVsbGVzKS9CZXN0KzYrKGNyb3BwZWQpLzMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9TdWxhYmgrQ2hhbmRvbGErKFNleWNoZWxsZXMpL0Jlc3QrNisoY3JvcHBlZCkvNC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1N1bGFiaCtDaGFuZG9sYSsoU2V5Y2hlbGxlcykvQmVzdCs2Kyhjcm9wcGVkKS81LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvU3VsYWJoK0NoYW5kb2xhKyhTZXljaGVsbGVzKS9CZXN0KzYrKGNyb3BwZWQpLzYuanBnYFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwidHJpcElkXCI6IDExOTY2NTgsXG4gICAgXCJ0cmlwVHlwZVwiOiBcIkZhbWlseVwiLFxuICAgIFwidGFnTmFtZVwiOiBcIkZ1biBGYW1pbHkgSG9saWRheSBJbiBIb25nIEtvbmdcIixcbiAgICBcImhlYWRpbmdcIjogXCJWaXZlaydzIEZ1bi1GaWxsZWQgRmFtaWx5IFRyaXAgVG8gSG9uZyBLb25nXCIsXG4gICAgXCJ0YWdzXCI6IFwiI0FkdmVudHVyZSwgI0Z1biwgI0x1eHVyeSwgI0JlYWNoZXNcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVml2ZWsgdG9vayBoaXMgd2lmZSAmIGtpZHMgZm9yIGEgZnVuLWZpbGxlZCBob2xpZGF5IHRvIEhvbmcgS29uZywgd2hlcmUgdGhleSBoYWQgdGhlIHRpbWUgb2YgdGhlaXIgbGl2ZXMuIEhlcmUncyBob3cgdGhlaXIgZGF5IG91dCBpbiBEaXNuZXlsYW5kIG1hZGUgdGhlaXIgdHJpcCBtb3JlIG1lbW9yYWJsZSBhbmQgYWR2ZW50dXJlc29tZS5cIixcbiAgICBcInRyYXZlbGxlck5hbWVcIjogXCJWaXZlayBCaGFza2FyXCIsXG4gICAgXCJ0cmF2ZWxsZXJMb2NhdGlvblwiOiBcIkRlbGhpXCIsXG4gICAgXCJkYXlzQWdvXCI6IFwiMSBkYXkgYWdvXCIsXG4gICAgXCJzdGFyc1wiOiA1LFxuICAgIFwiZGVzdGluYXRpb25cIjogXCJUcmlwIHRvIEhvbmcgS29uZ1wiLFxuICAgIFwibGlua1wiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvdml2ZWstNC1uaWdodC01LWRheS1mYW1pbHktdHJpcC10by1ob25nLWtvbmctdHJhdmVsb2d1ZS9cIixcbiAgICBcImF2YXRhclBpY1wiOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvVml2ZWsrQmhhc2thcisoSG9uZytLb25nKS9UaHVtYm5haWwvSU1HLTIwMTcwMTA3LVdBMDAxNi5qcGdgLFxuICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9WaXZlaytCaGFza2FyKyhIb25nK0tvbmcpL0Jlc3QrNisoY3JvcHBlZCkvMS5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1ZpdmVrK0JoYXNrYXIrKEhvbmcrS29uZykvQmVzdCs2Kyhjcm9wcGVkKS8yLmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvVml2ZWsrQmhhc2thcisoSG9uZytLb25nKS9CZXN0KzYrKGNyb3BwZWQpLzMuanBnYCxcbiAgICAgIGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9UcmF2ZWxvZ3Vlcy9WaXZlaytCaGFza2FyKyhIb25nK0tvbmcpL0Jlc3QrNisoY3JvcHBlZCkvNC5qcGdgLFxuICAgICAgYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L1RyYXZlbG9ndWVzL1ZpdmVrK0JoYXNrYXIrKEhvbmcrS29uZykvQmVzdCs2Kyhjcm9wcGVkKS81LmpwZ2AsXG4gICAgICBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvVHJhdmVsb2d1ZXMvVml2ZWsrQmhhc2thcisoSG9uZytLb25nKS9CZXN0KzYrKGNyb3BwZWQpLzYuanBnYFxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgWy4uLmhvbmV5bW9vbkRhdGEsIC4uLmZhbWlseURhdGFdO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUcmF2ZWxvZ3Vlc0NhcmQgZnJvbSAnLi9UcmF2ZWxvZ3Vlc0NhcmQnO1xuaW1wb3J0IHsgc2h1ZmZsZUZZIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB0cmF2ZWxvZ3VlcyBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IFN3aXBlciBmcm9tICdtb2R1bGVzL3NoYXJlZC9Td2lwZXInO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNsYXNzIFRyYXZlbG9ndWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRyYXZlbG9ndWVzRGF0YTogW11cbiAgICB9O1xuICAgIHRoaXMuVElMRVNfQ09VTlQgPSA3O1xuICAgIHRoaXMuc2V0SW5pdGlhbFRyaXBJZEZvckhvbWVUeXBlID0gdGhpcy5zZXRJbml0aWFsVHJpcElkRm9ySG9tZVR5cGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zbGlkZU51bWJlciA9IHRoaXMuX3NsaWRlTnVtYmVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxUcmlwSWRGb3JIb21lVHlwZSgpO1xuICB9XG5cbiAgc2V0SW5pdGlhbFRyaXBJZEZvckhvbWVUeXBlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdHJhdmVsb2d1ZXNEYXRhOiBzaHVmZmxlRlkodHJhdmVsb2d1ZXMpLnNsaWNlKDAsIHRoaXMuVElMRVNfQ09VTlQpXG4gICAgfSkpO1xuICB9XG5cbiAgX3NsaWRlTnVtYmVyKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlRJTEVTX0NPVU5UKTtcbiAgfVxuXG4gIHRyYWNrQ2xpY2tFdmVudCA9IChoZWFkaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIHNlY3Rpb246ICdUcmF2ZWxlciBSZXZpZXdzJyxcbiAgICAgIG9iamVjdDogJ1JldmlldyBDYXJkJyxcbiAgICAgIGN0YTogaGVhZGluZy5yZXBsYWNlKC8gL2csJ18nKVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZWxlY3RlZENvbnRlbnQgPSB0aGlzLnN0YXRlLnRyYXZlbG9ndWVzRGF0YS5maW5kKGQgPT4gZC50cmlwSWQgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRUcmlwSWQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXRfdHJhdmVsb2d1ZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbDI0IHByMjQgYXRfdHJhdmVsb2d1ZXNfaGVhZGluZ1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmMjAgZnc5IG0wIG1iOFwiPk92ZXIgNDAgTGFjKyBIYXBweSBUcmF2ZWxlcnM8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBwZmM0IG0wIG1iMjQgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIFJlYWwgdHJhdmVsZXJzLiBSZWFsIHN0b3JpZXMuIFJlYWwgb3BpbmlvbnMgdG8gaGVscCB5b3UgbWFrZSB0aGUgcmlnaHQgY2hvaWNlLiA8YSBjbGFzc05hbWU9XCJmMTQgZnc3IGF0X1RyYXZlbG9ndWVzX3ZpZXdhbGwgZnJpZ2h0IG1sMTVcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2Jsb2cvdHJhdmVsb2d1ZXMvXCI+VmlldyBBbGw8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIHNzckFuaW1hdGlvbj17eyB3aWR0aDogMzEyLCBoZWlnaHQ6IDI0MH19XG4gICAgICAgICAgc2xpZGVDbGFzcz1cInNsaWRlXCJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezE1fVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU9ezI0fVxuICAgICAgICAgIHNsaWRlc09mZnNldEFmdGVyPXsyNH1cbiAgICAgICAgICBpZD1cInRyYXZlbG9ndWVzXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICB0aGlzLnN0YXRlLnRyYXZlbG9ndWVzRGF0YS5tYXAoKGl0ZW0saSk9PiAoXG4gICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8VHJhdmVsb2d1ZXNDYXJkXG4gICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50RXZlbnQ9e3RoaXMudHJhY2tDbGlja0V2ZW50fVxuICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICApKSBcbiAgICAgICAgICB9XG4gICAgICAgIDwvU3dpcGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbG9ndWVzO1xuXG5UcmF2ZWxvZ3Vlcy5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuVHJhdmVsb2d1ZXMuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge31cbn07XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdHJhdmVsb2d1ZXMgZnJvbSAnLi9kYXRhJztcblxuY29uc3QgVElMRVNfQ09VTlQgPSA3O1xuXG4vLyBXZSBhcmUgdXNpbmcgOCBiZWNhdXNlLCBhbGwgd2UgZ290IGluIHRoZSBUcmF2ZWxvZ3VlcyBjb21wb25lbnQgaXMgYW4gYXJyYXkgb2YgOCBvYmplY3RzLlxuZnVuY3Rpb24gc2xpZGVOdW1iZXIoc3RhdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBUSUxFU19DT1VOVCkpIHtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vLyBGaXNoZXItWWF0ZXMgc2h1ZmZsaW5nIGFsZ29yaXRobVxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVGWShhcnJheVRvU2h1ZmZsZSkge1xuICBsZXQgaSA9IGFycmF5VG9TaHVmZmxlLmxlbmd0aDtcbiAgbGV0IGogPSAwO1xuICBsZXQgdGVtcDtcbiAgY29uc3QgYXJyYXkgPSBhcnJheVRvU2h1ZmZsZTtcblxuICB3aGlsZSAoaS0tKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGx1c3BsdXNcbiAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG5cbiAgICAvLyBzd2FwIHJhbmRvbWx5IGNob3NlbiBlbGVtZW50IHdpdGggY3VycmVudCBlbGVtZW50XG4gICAgdGVtcCA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSB0ZW1wO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzaHVmZmxlZERlZmF1bHQoc3RhdGUgPSBzaHVmZmxlRlkodHJhdmVsb2d1ZXMpLnNsaWNlKDAsIFRJTEVTX0NPVU5UKSkge1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHNsaWRlTnVtYmVyLFxuICBzaHVmZmxlZERlZmF1bHRcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3QgTGFzdFRyZW5kaW5nID0gKHsgZGVzdENvdW50LCBwa2dDb3VudCwgbGFzdENhcmRMaW5rIH0pID0+IChcbiAgPExpbmsgdG89e2xhc3RDYXJkTGlua30+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJyYWRpdXMxMDAgc2JjMSBmMzIgc2ZjdyBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIiBzdHlsZT17e3dpZHRoOiAnNzJweCcsIGhlaWdodDogJzcycHgnfX0+Kzwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYxNCBwZmMzIG10OCBibG9jayBvdmVyZmxvd2ggdGV4dC1jZW50ZXJcIj5WaWV3IEFsbDwvc3Bhbj5cbiAgPC9MaW5rPlxuKTtcbiAgXG5MYXN0VHJlbmRpbmcucHJvcFR5cGVzID0ge1xuICBkZXN0Q291bnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGtnQ291bnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFzdENhcmRMaW5rOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5MYXN0VHJlbmRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBwa2dDb3VudDogJycsXG4gIGRlc3RDb3VudDogJycsXG4gIGxhc3RDYXJkTGluazogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXN0VHJlbmRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5pbXBvcnQgTGFzdFRyZW5kaW5nIGZyb20gJy4vTGFzdFRyZW5kaW5nJztcbmltcG9ydCB7IERFRkFVTFRfSU1BR0VfUEFUSCB9IGZyb20gJ2FwcC9jb25zdGFudHMnO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNsYXNzIFRyZW5kaW5nRGVzdGluYXRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICB0cmFja1NlZ21lbnRFdmVudChkZXN0aW5hdGlvbikge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiAnRXhwbG9yZSBEZXN0aW5hdGlvbnMgYnkgVGhlbWUnLFxuICAgICAgb2JqZWN0OiAnVGhlbWUnLFxuICAgICAgY3RhOiBkZXN0aW5hdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIGdldERlc3RpbmF0aW9ucyhkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByMjQgdGV4dC1jZW50ZXIgJHtpbmRleCA8IDEgPyAncGwyNCc6ICcnfWB9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoaXRlbS5sb2NhdGlvbil9XG4gICAgICAgICAgICB0bz17aXRlbS5saW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJhZGl1czEwMCByZWxhdGl2ZSBvdmVyZmxvd2ggYmxvY2tcIiBzdHlsZT17eyB3aWR0aDogJzcycHgnLCBoZWlnaHQ6ICc3MnB4JyB9fT5cbiAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgIHdpZHRoPXs3Mn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezcyfVxuICAgICAgICAgICAgICAgIGlrU3JjPXtpdGVtLmltYWdla2l0VXJsfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRTcmM9e0RFRkFVTFRfSU1BR0VfUEFUSH1cbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubG9jYXRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTQgcGZjMyBtdDggaWJsb2NrIG92ZXJmbG93aFwiPntpdGVtLmxvY2F0aW9ufTwvc3Bhbj4gICAgICAgIFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgaGVhZGluZywgc2hvd0xhc3RDYXJkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhc3RDYXJkID0gc2hvd0xhc3RDYXJkID8gWzxkaXZcbiAgICAgIGtleT17YGJlc3RzZWxsZXJfZGVzdGluYXRpb25zX3RyZW5kaW5nX2xhc3RgfVxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxNDhweCcsIHBhZGRpbmdSaWdodDogJzI0cHgnIH19XG4gICAgPlxuICAgIDxMYXN0VHJlbmRpbmcgZGVzdENvdW50PXsnVmlldyBBbGwnfVxuICAgICAgICAgICBUcmVuZGluZ3BrZ0NvdW50PXsnJ30gbGFzdENhcmRMaW5rPXsnL0FsbC1QbGFjZXMnfSAvPlxuICA8L2Rpdj5dIDogW107XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjdyBwdDI0IGF0X2V4cGxvcmVEZXN0aW5hdGlvbkJ5VGhlbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24taGVhZGluZy1zbGlkZXJzIG1iMTUgcGwyNCBwcjI0XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImYyMCBmdzlcIj57aGVhZGluZ308L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYjI0IG92ZXJmbG93WHNjcm9sbCBmbGV4XCI+XG4gICAgICAgICAge1suLi50aGlzLmdldERlc3RpbmF0aW9ucyhkYXRhKSxcbiAgICAgICAgICAgIC4uLmxhc3RDYXJkXG4gICAgICAgICAgXX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRyZW5kaW5nRGVzdGluYXRpb25zLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93TGFzdENhcmQ6IFByb3BUeXBlcy5ib29sLFxuICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblRyZW5kaW5nRGVzdGluYXRpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YTogW10sXG4gIHRyYWNrU2VnbWVudEV2ZW50OiAoKT0+e30sXG4gIHNob3dMYXN0Q2FyZDogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBUcmVuZGluZ0Rlc3RpbmF0aW9ucztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBjb25maWcgZnJvbSAnYXBwQ29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBsb2NhdGlvbjogJ0hvbmV5bW9vbicsXG4gICAgbGluazogJy9Ib25leW1vb24tUGxhY2VzJyxcbiAgICBpbWFnZWtpdFVybDogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L2hvbWVwYWdlX2lsbHVzdHJhdGlvbnMvU3F1YXJlLzJ4L2hvbmV5bW9vbl9yb21hbnRpYy5wbmdgLFxuICAgIGRlc3RpbmF0aW9uQ291bnQ6IDYwLFxuICAgIHByaWNlOiA2MDAwXG4gIH0sIHtcbiAgICBpZDogMixcbiAgICBsb2NhdGlvbjogJ0ZhbWlseScsXG4gICAgbGluazogJy9GYW1pbHktUGxhY2VzJyxcbiAgICBpbWFnZWtpdFVybDogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L2hvbWVwYWdlX2lsbHVzdHJhdGlvbnMvU3F1YXJlLzJ4L2ZhbWlseS5wbmdgLFxuICAgIGRlc3RpbmF0aW9uQ291bnQ6IDcwLFxuICAgIHByaWNlOiAxODcwMFxuICB9LCB7XG4gICAgaWQ6IDMsXG4gICAgbG9jYXRpb246ICdGcmllbmRzJyxcbiAgICBsaW5rOiAnL0ZyaWVuZHMtUGxhY2VzJyxcbiAgICBpbWFnZWtpdFVybDogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L2hvbWVwYWdlX2lsbHVzdHJhdGlvbnMvU3F1YXJlLzJ4L2ZyaWVuZHNfZ3JvdXAucG5nYCxcbiAgICBkZXN0aW5hdGlvbkNvdW50OiAxMCxcbiAgICBwcmljZTogMjEwMDBcbiAgfSwge1xuICAgIGlkOiA0LFxuICAgIGxvY2F0aW9uOiAnU29sbycsXG4gICAgbGluazogJy9BbGwtUGxhY2VzJyxcbiAgICBpbWFnZWtpdFVybDogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L2hvbWVwYWdlX2lsbHVzdHJhdGlvbnMvU3F1YXJlLzJ4L3NvbG8ucG5nYCxcbiAgICBkZXN0aW5hdGlvbkNvdW50OiAxMzAsXG4gICAgcHJpY2U6IDQ1OTk5XG4gIH0sIHtcbiAgICBpZDogNSxcbiAgICBsb2NhdGlvbjogJ0FkdmVudHVyZScsXG4gICAgbGluazogJy9BZHZlbnR1cmUtUGxhY2VzJyxcbiAgICBpbWFnZWtpdFVybDogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L2hvbWVwYWdlX2lsbHVzdHJhdGlvbnMvU3F1YXJlLzJ4L2FkdmVudHVyZS5wbmdgLFxuICAgIGRlc3RpbmF0aW9uQ291bnQ6IDMwLFxuICAgIHByaWNlOiA2NDk5OVxuICB9LCB7XG4gICAgaWQ6IDYsXG4gICAgbG9jYXRpb246ICdOYXR1cmUnLFxuICAgIGxpbms6ICcvTmF0dXJlLVBsYWNlcycsXG4gICAgaW1hZ2VraXRVcmw6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9ob21lcGFnZV9pbGx1c3RyYXRpb25zL1NxdWFyZS8yeC9uYXR1cmUucG5nYCxcbiAgICBhbHQ6ICdOYXR1cmUnLFxuICAgIGRlc3RpbmF0aW9uQ291bnQ6IDEwMCxcbiAgICBwcmljZTogMTI4MTBcbiAgfSwge1xuICAgIGlkOiA3LFxuICAgIGxvY2F0aW9uOiAnUmVsaWdpb3VzJyxcbiAgICBsaW5rOiAnL1JlbGlnaW91cy1QbGFjZXMnLFxuICAgIGltYWdla2l0VXJsOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvaG9tZXBhZ2VfaWxsdXN0cmF0aW9ucy9TcXVhcmUvMngvcmVsaWdpb3VzLnBuZ2AsXG4gICAgZGVzdGluYXRpb25Db3VudDogNjAsXG4gICAgcHJpY2U6IDY0OTk5XG4gIH0sIHtcbiAgICBpZDogOCxcbiAgICBsb2NhdGlvbjogJ1dpbGRsbGlmZScsXG4gICAgbGluazogJy9XaWxkbGlmZS1QbGFjZXMnLFxuICAgIGltYWdla2l0VXJsOiBgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvaG9tZXBhZ2VfaWxsdXN0cmF0aW9ucy9TcXVhcmUvMngvd2lsZGxpZmUucG5nYCxcbiAgICBkZXN0aW5hdGlvbkNvdW50OiAyMCxcbiAgICBwcmljZTogNjQ5OTlcbiAgfSwge1xuICAgIGlkOiA5LFxuICAgIGxvY2F0aW9uOiAnV2F0ZXIgQWN0aXZpdGllcycsXG4gICAgbGluazogJy9XYXRlciBBY3Rpdml0aWVzLVBsYWNlcycsXG4gICAgaW1hZ2VraXRVcmw6IGAke2NvbmZpZy5hc3NldHMuaW1hZ2VzfS9wdWJsaWMtcHJvZHVjdC9ob21lcGFnZV9pbGx1c3RyYXRpb25zL1NxdWFyZS8yeC93YXRlcithY3Rpdml0aWVzLnBuZ2AsXG4gICAgZGVzdGluYXRpb25Db3VudDogMjAsXG4gICAgcHJpY2U6IDY0OTk5XG4gIH1cbl07XG5cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBZb3VUdWJlVmlkZW8gZnJvbSAnbW9kdWxlcy95b3VUdWJlVmlkZW8nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FwcC9hY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHVmlkZW9XcmFwcGVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBwYWRkaW5nQm90dG9tOiAnNTYuMjUlJywgLyogMTY6OSAqL1xuICBoZWlnaHQ6ICcwJyxcbiAgJyBpZnJhbWUnIDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICcwJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9XG59KTtcblxuY2xhc3MgSG93SXRXb3Jrc1ZpZGVvIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBvblBsYXllclJlYWR5ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0Lm11dGUoKTtcbiAgfTtcblxuICBvblBsYXllclN0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGV2ZW50LnRhcmdldC5nZXRDdXJyZW50VGltZSgpO1xuICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKXtcbiAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoZXZlbnQsICdQTEFZJywgdGltZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCl7XG4gICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KGV2ZW50LCAnUEFVU0UnLCB0aW1lKTtcbiAgICB9XG4gIH07XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIGN0YSwgdGltZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiAnSG93IGl0IHdvcmtzIHZpZGVvJyxcbiAgICAgIG9iamVjdDogJycsXG4gICAgICBjdGEsXG4gICAgICBtaXNjSWQxOiBjdGEsXG4gICAgICBtaXNjVHlwZTE6ICdOZXcgU3RhdGUgb2YgdGhlIHZpZGVvJyxcbiAgICAgIG1pc2NJZDI6IHRpbWUsXG4gICAgICBtaXNjVHlwZTI6ICdUaW1lIGF0IHdoaWNoIGV2ZW50IG9jY3VyZWQnXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8R1ZpZGVvV3JhcHBlckRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhGdWxsXCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWluV2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgPFlvdVR1YmVWaWRlb1xuICAgICAgICAgIGlkPVwiRnhzMG9ZSnhTT2NcIlxuICAgICAgICAgIG9uUGxheWVyU3RhdGVDaGFuZ2U9e3RoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZX1cbiAgICAgICAgICBvblBsYXllclJlYWR5PXt0aGlzLm9uUGxheWVyUmVhZHl9XG4gICAgICAgIC8+XG4gICAgICA8L0dWaWRlb1dyYXBwZXJEaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuSG93SXRXb3Jrc1ZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5Ib3dJdFdvcmtzVmlkZW8uZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvd0l0V29ya3NWaWRlbztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IENsb3NlRGFyaywgQ2xvc2VXaGl0ZX0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBDbG9zZUl0ID0gZ2xhbW9yb3VzLmJ1dHRvbih7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJzVweCcsXG4gIHRvcDogJzBweCcsXG4gIHdpZHRoOiAnMzZweCcsXG4gIGhlaWdodDogJzM2cHgnLFxuICBwYWRkaW5nOiAnMTJweCcsXG4gIHpJbmRleDogJzInLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KTtcblxuY29uc3QgQ2xvc2VJdExlZnQgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIGxlZnQ6ICc1cHgnLFxuICB0b3A6ICczcHgnLFxuICB3aWR0aDogJzM2cHgnLFxuICBoZWlnaHQ6ICczNnB4JyxcbiAgcGFkZGluZzogJzEycHgnLFxuICB6SW5kZXg6ICc2JyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxufSk7XG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBib3R0b206ICdhdXRvJyxcbiAgICB6SW5kZXg6ICcxMDEnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICB3aWR0aDogJzk0JScsXG4gICAgbWF4V2lkdGg6ICc2MDBweCcsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNzUpJ1xuICB9LFxufTtcbmNvbnN0IGN1c3RvbVN0eWxlc0Z1bGxWaWV3ID0ge1xuICBjb250ZW50OiB7XG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHpJbmRleDogJzEwMScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwYWRkaW5nVG9wOiAnNTBweCdcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IDEwMDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAxKSdcbiAgfSxcbn07XG5cbmNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRyaWdnZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG9uQWZ0ZXJNb2RhbE9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjdXN0b21DbG9zZVRyaWdnZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGZ1bGxWaWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNDdXN0b21DbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzTm9DbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNXaGl0ZUljb246IFByb3BUeXBlcy5ib29sLFxuICAgIGlzVHJpZ2dlckZ1bGxWaWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjdXN0b21DbGFzczogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25BZnRlck1vZGFsT3BlbjogKCkgPT4ge1xuICAgIH0sXG4gICAgb25SZXF1ZXN0Q2xvc2VDdXN0b206ICgpID0+IHtcbiAgICB9LFxuICAgIGN1c3RvbUNsb3NlVHJpZ2dlcjogZmFsc2UsXG4gICAgdHJpZ2dlcjogPGJ1dHRvbj5QbGVhc2Ugc3VwcGx5IGEgY3VzdG9tIHRyaWdnZXIgY29tcG9uZW50PC9idXR0b24+LFxuICAgIGZ1bGxWaWV3OiBmYWxzZSxcbiAgICBoYXNDdXN0b21DbG9zZTogZmFsc2UsXG4gICAgaGFzTm9DbG9zZTogZmFsc2UsXG4gICAgaXNXaGl0ZUljb246IGZhbHNlLFxuICAgIGlzVHJpZ2dlckZ1bGxWaWV3OiBmYWxzZSxcbiAgICBjdXN0b21DbGFzczogJydcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFmdGVyT3Blbk1vZGFsID0gdGhpcy5hZnRlck9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzT3BlbiAmJiBuZXh0UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4gJiYgbmV4dFByb3BzLmN1c3RvbUNsb3NlVHJpZ2dlcikge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgb3Blbk1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2VDdXN0b20pIHtcbiAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2VDdXN0b20oKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICB9XG5cbiAgYWZ0ZXJPcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkFmdGVyTW9kYWxPcGVuKCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmdWxsVmlldywgaGFzQ3VzdG9tQ2xvc2UsIGhhc05vQ2xvc2UsIGlzV2hpdGVJY29uLCBpc1RyaWdnZXJGdWxsVmlldywgY3VzdG9tQ2xhc3MgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1RyaWdnZXJGdWxsVmlldyA/ICd3ZnVsbCc6ICcnfT5cbiAgICAgICAgeyF0aGlzLnByb3BzLmlzT3BlbiA/XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGxcIiBvbkNsaWNrPXt0aGlzLm9wZW5Nb2RhbH0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50cmlnZ2VyfVxuICAgICAgICAgIDwvc3Bhbj4gOlxuICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgIG9uQWZ0ZXJPcGVuPXt0aGlzLmFmdGVyT3Blbk1vZGFsfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTW9kYWx9XG4gICAgICAgICAgc3R5bGU9e2Z1bGxWaWV3ID8gY3VzdG9tU3R5bGVzRnVsbFZpZXcgOiBjdXN0b21TdHlsZXN9XG4gICAgICAgICAgY29udGVudExhYmVsPVwiVHJhdmVsIFRyaWFuZ2xlIE1vZGFsXCJcbiAgICAgICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaz17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2N1c3RvbUNsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaGFzQ3VzdG9tQ2xvc2UgP1xuICAgICAgICAgICAgICA8Q2xvc2VJdExlZnQgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfSBjbGFzc05hbWU9e2BhdF9jbG9zZSAke2hhc05vQ2xvc2UgPyAnbmJsb2NrJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIHtpc1doaXRlSWNvbiA/IDxDbG9zZVdoaXRlIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsIGhmdWxsXCIgLz4gOiA8Q2xvc2VEYXJrIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsIGhmdWxsXCIgLz59XG4gICAgICAgICAgICAgIDwvQ2xvc2VJdExlZnQ+IDpcbiAgICAgICAgICAgICAgPENsb3NlSXQgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfSBjbGFzc05hbWU9e2BhdF9jbG9zZSAke2hhc05vQ2xvc2UgPyAnbmJsb2NrJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIHtpc1doaXRlSWNvbiA/IDxDbG9zZVdoaXRlIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsIGhmdWxsXCIgLz4gOiA8Q2xvc2VEYXJrIGNsYXNzTmFtZT1cImJsb2NrIHdmdWxsIGhmdWxsXCIgLz59XG4gICAgICAgICAgICAgIDwvQ2xvc2VJdD5cbiAgICAgICAgICB9XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCBTaG93TW9yZSBmcm9tICcuL1Nob3dNb3JlJztcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBvdmVydmlld1NwbGl0QWZ0ZXJTaG93TW9yZSA9IChvdmVydmlld01vcmVUZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG92ZXJ2aWV3TW9yZVRleHQucmVwbGFjZSgvPGJyIFxcLz58PFxcL2JyPi9nLCAnJykucmVwbGFjZSgnPC9zcGFuPjwvcD5cXHJcXG4nLCAnJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBvdmVydmlld01vcmVUZXh0O1xuICB9XG59O1xuXG5jbGFzcyBPdmVydmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBvdmVydmlld0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgZm9vdGVyRGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGVzYyA9IGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLnNwbGl0KCdcXHJcXG4nKS5maWx0ZXIocCA9PiBwLmxlbmd0aCkgfHwgW107XG5cbiAgICBpZiAoIWRlc2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmb290ZXJEZXNjID0gZm9vdGVyRGVzY3JpcHRpb24gPyBgPGJyPiR7Zm9vdGVyRGVzY3JpcHRpb259YCA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG93TW9yZVxuICAgICAgICB3cmFwVGV4dD17cGFyc2VyLnBhcnNlKGRlc2NbMF0pfVxuICAgICAgICBtb3JlVGV4dD17cGFyc2VyLnBhcnNlKG92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlKGRlc2Muc2xpY2UoMSkuam9pbignXFxuJykuY29uY2F0KGZvb3RlckRlc2MpKSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHJvdy1td1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbW9yZS1ib3hcIj5cbiAgICAgICAgICB7dGhpcy5vdmVydmlld0NvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk92ZXJ2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9vdGVyRGVzY3JpcHRpb246ICcnLFxuICBkZXNjcmlwdGlvbjogJydcbn07XG5cbk92ZXJ2aWV3LnByb3BUeXBlcyA9IHtcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvb3RlckRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQge1xuICBTdGFySWNvbixcbiAgSGFsZlN0YXIsXG4gIFN0YXJJY29uRW1wdHlcbn0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBHUmF0aW5nVWwgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWFyZ2luOiAnMCcsXG4gIHBhZGRpbmc6ICcwJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICcmIGxpJzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1hcmdpblJpZ2h0OiAnNnB4JyxcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzAnLFxuICAgIH0sXG4gICAgJyYgc3ZnJzoge1xuICAgICAgd2lkdGg6ICcxMHB4JyxcbiAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRTdGFycyhDb21wb25lbnQsIHN0YXJOdW0sIGtleVR5cGUpIHtcbiAgbGV0IGkgPSAwO1xuICBjb25zdCBzdGFycyA9IFtdO1xuICB3aGlsZSAoaSA8IHN0YXJOdW0pIHtcbiAgICBzdGFycy5wdXNoKDxsaSBrZXk9e2tleVR5cGUgKyBpfT48Q29tcG9uZW50IC8+PC9saT4pO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gc3RhcnM7XG59XG5cbmNvbnN0IFJhdGluZ1N0YXIgPSAoeyByYXRpbmcsIGlzRW1wdHlTdGFyc0hpZGRlbiB9KSA9PiB7XG4gIGNvbnN0IHN0YXJzID0gW107XG4gIGNvbnN0IHJhdGluZ0JhclJhbmdlID0gNTtcbiAgY29uc3QgdHJ1bmNhdGVkUmF0aW5nID0gTWF0aC50cnVuYyhyYXRpbmcpO1xuICBjb25zdCBmcmFjdGlvbmFsUmF0aW5nID0gcGFyc2VGbG9hdCgocmF0aW5nIC0gdHJ1bmNhdGVkUmF0aW5nKS50b0ZpeGVkKDEpKTtcbiAgbGV0IGZ1bGxTdGFyQ291bnQgPSAwO1xuICBsZXQgaGFsZlN0YXJDb3VudCA9IDA7XG5cbiAgaWYgKGZyYWN0aW9uYWxSYXRpbmcgPT09IDAuMCkge1xuICAgIGZ1bGxTdGFyQ291bnQgPSByYXRpbmc7XG4gIH0gZWxzZSBpZiAoZnJhY3Rpb25hbFJhdGluZyA8PSAwLjUpIHtcbiAgICBmdWxsU3RhckNvdW50ID0gdHJ1bmNhdGVkUmF0aW5nO1xuICAgIGhhbGZTdGFyQ291bnQgPSAxO1xuICB9IGVsc2Uge1xuICAgIGZ1bGxTdGFyQ291bnQgPSB0cnVuY2F0ZWRSYXRpbmcgKyAxO1xuICB9XG5cbiAgY29uc3QgZW1wdHlTdGFyQ291bnQgPSByYXRpbmdCYXJSYW5nZSAtIChmdWxsU3RhckNvdW50ICsgaGFsZlN0YXJDb3VudCk7XG5cbiAgc3RhcnMucHVzaChnZXRTdGFycyhTdGFySWNvbiwgZnVsbFN0YXJDb3VudCwgJ2Z1bGxfc3RhcicpKTtcbiAgc3RhcnMucHVzaChnZXRTdGFycyhIYWxmU3RhciwgaGFsZlN0YXJDb3VudCwgJ2hhbGZfc3RhcicpKTtcbiAgLy8gc3RhcnMucHVzaChnZXRTdGFycyhTdGFySWNvbkVtcHR5LCBlbXB0eVN0YXJDb3VudCwgJ2VtcHR5X3N0YXInKSk7XG4gIGlmICghaXNFbXB0eVN0YXJzSGlkZGVuKSB7XG4gICAgc3RhcnMucHVzaChnZXRTdGFycyhTdGFySWNvbkVtcHR5LCBlbXB0eVN0YXJDb3VudCwgJ2VtcHR5X3N0YXInKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHUmF0aW5nVWwgY2xhc3NOYW1lPVwicmF0aW5nLXN0YXItbGlzdCBhdF9yYXRpbmdcIj5cbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIHN0YXJzXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9HUmF0aW5nVWw+XG4gICk7XG59O1xuXG5SYXRpbmdTdGFyLnByb3BUeXBlcyA9IHtcbiAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICBpc0VtcHR5U3RhcnNIaWRkZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5SYXRpbmdTdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmF0aW5nOiAwLFxuICBpc0VtcHR5U3RhcnNIaWRkZW46IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdTdGFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCAnLi9Td2lwZXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnZG90cycsICcnXSksXG4gICAgc3NyQW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaXNTbWFsbFN3aXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNGdWxsV2lkdGhTd2lwZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRPbkRvY3VtZW50UmVhZHk6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICBzc3JBbmltYXRpb246IHt9LFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBpc1NtYWxsU3dpcGVyOiBmYWxzZSxcbiAgICBpc0Z1bGxXaWR0aFN3aXBlcjogZmFsc2UsXG4gICAgbG9hZE9uRG9jdW1lbnRSZWFkeTogZmFsc2VcbiAgfTtcblxuICBzdGF0ZSA9IHt9O1xuXG4gIHJlbmRlclNlcnZlciA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGU9e3sgb3ZlcmZsb3dYOiAnc2Nyb2xsJywgd2lkdGg6IHdpZHRoLCBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH19PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IF9faHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKGMpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC88aW1nKFtcXHdcXFddKz8pXFwvPi9nLCBgPGRpdiBzdHlsZT1cIndpZHRoOiR7d2lkdGh9cHg7IGhlaWdodDogJHtoZWlnaHR9cHhcImApO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCA+IDEgPyAnc3dpcGVyQ3VzdG9tV2lkdGgnIDonc3dpcGVyU2luZ2xlQ2hpbGQnfSAga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydsYXp5bG9hZGluZyd9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBfX2h0bWwgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyRW1wdHlDbGllbnQgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSA/ICdzd2lwZXJDdXN0b21XaWR0aCcgOiAnc3dpcGVyU2luZ2xlQ2hpbGQnfT5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN3aXBlckFzeW5jID0gKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3dpcGVyJyAqLyAncmVhY3QtaWQtc3dpcGVyJylcbiAgICAgICAgLnRoZW4ocyA9PiB0aGlzLnNldFN0YXRlKHsgUmVhY3RJZFN3aXBlcjogcy5kZWZhdWx0IH0pKTtcblxuICAgIC8vIGlmICh0aGlzLnByb3BzLmxvYWRPbkRvY3VtZW50UmVhZHkpIHtcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnID8gc3dpcGVyQXN5bmMoKSA6IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc3dpcGVyQXN5bmMpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHN3aXBlckFzeW5jKTtcbiAgICAvLyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBSZWFjdElkU3dpcGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgaXNTbWFsbFN3aXBlciwgaXNGdWxsV2lkdGhTd2lwZXIsIHNzckFuaW1hdGlvbiwgdHlwZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChfX1NFUlZFUl9fKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJTZXJ2ZXIoc3NyQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIVJlYWN0SWRTd2lwZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVtcHR5Q2xpZW50KHNzckFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzd2lwZXJQcm9wcyA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgICAgaWYgKHR5cGUgPT09ICdkb3RzJykge1xuICAgICAgICBzd2lwZXJQcm9wcyA9IHsgLi4uc3dpcGVyUHJvcHMsIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH19O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSZWFjdElkU3dpcGVyIHsuLi5zd2lwZXJQcm9wc30+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17KHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICAgICFpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlcikgP1xuICAgICAgICAgICAgICAgICdzd2lwZXJDdXN0b21XaWR0aCBibG9jaycgOiBpc1NtYWxsU3dpcGVyICYmICFpc0Z1bGxXaWR0aFN3aXBlciA/XG4gICAgICAgICAgICAgICAgICAnc21hbGxTd2lwZXJDb250YWluZXIgYmxvY2snIDogaXNGdWxsV2lkdGhTd2lwZXIgP1xuICAgICAgICAgICAgICAgICAgICAnd2Z1bGwnIDogJ3N3aXBlclNpbmdsZUNoaWxkIHdmdWxsIGJsb2NrJ30+e2NoaWxkfTwvc3Bhbj47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1JlYWN0SWRTd2lwZXI+XG4gICAgICAgICAgeyB0eXBlID09PSAnZG90cycgPyA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1wYWdpbmF0aW9uXCIgLz4gOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3dpcGVyLWNvbnRhaW5lclwiOiBcIl8yU0dzWVwiLFxuXHRcInN3aXBlci1jb250YWluZXItbm8tZmxleGJveFwiOiBcIl8xNzNGQVwiLFxuXHRcInN3aXBlci1zbGlkZVwiOiBcIl8zbDVFelwiLFxuXHRcInN3aXBlci1jb250YWluZXItdmVydGljYWxcIjogXCJfRURJS3pcIixcblx0XCJzd2lwZXItd3JhcHBlclwiOiBcIl8zaXlIR1wiLFxuXHRcInN3aXBlci1jb250YWluZXItYW5kcm9pZFwiOiBcIl8yQk9YaFwiLFxuXHRcInN3aXBlci1jb250YWluZXItbXVsdGlyb3dcIjogXCJfYmZUQ2VcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZVwiOiBcIl9KTEp5S1wiLFxuXHRcInN3aXBlci1pbnZpc2libGUtYmxhbmstc2xpZGVcIjogXCJfM1cyQnRcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHRcIjogXCJfMjFBRkxcIixcblx0XCJzd2lwZXItY29udGFpbmVyLTNkXCI6IFwiXzNURmpkXCIsXG5cdFwic3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0XCI6IFwiXzJsemp1XCIsXG5cdFwic3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodFwiOiBcIl8zbW54WlwiLFxuXHRcInN3aXBlci1zbGlkZS1zaGFkb3ctdG9wXCI6IFwiXzI0bTNlXCIsXG5cdFwic3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b21cIjogXCJfMXBwODRcIixcblx0XCJzd2lwZXItY3ViZS1zaGFkb3dcIjogXCJfMUJwb0tcIixcblx0XCJzd2lwZXItY29udGFpbmVyLXdwOC1ob3Jpem9udGFsXCI6IFwiXzNaTnk0XCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWxcIjogXCJfMXNqWHhcIixcblx0XCJzd2lwZXItYnV0dG9uLXByZXZcIjogXCJfM2luNGdcIixcblx0XCJzd2lwZXItYnV0dG9uLW5leHRcIjogXCJfM1lvak5cIixcblx0XCJzd2lwZXItYnV0dG9uLWRpc2FibGVkXCI6IFwiXzEtVHlVXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1ydGxcIjogXCJfMWlFdGJcIixcblx0XCJzd2lwZXItYnV0dG9uLXdoaXRlXCI6IFwiXzIxSC1mXCIsXG5cdFwic3dpcGVyLWJ1dHRvbi1ibGFja1wiOiBcIl8yWWpnT1wiLFxuXHRcInN3aXBlci1idXR0b24tbG9ja1wiOiBcIl8xSVRSX1wiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uXCI6IFwiXzFOMDByXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24taGlkZGVuXCI6IFwiX29rNHVGXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb25cIjogXCJfMkdIb19cIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1jdXN0b21cIjogXCJfM3BIbHhcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWhvcml6b250YWxcIjogXCJfMWZKOUJcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzXCI6IFwiXzJMdUdlXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljXCI6IFwiXzF5Z3YwXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0XCI6IFwiXzNLWGI3XCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZVwiOiBcIl8yR1U5TVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpblwiOiBcIl8yYXdydlwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldlwiOiBcIl9sVEc4bVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2XCI6IFwiXzNPdXNhXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0XCI6IFwiXzFQRzAxXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHRcIjogXCJfMlBBZDBcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGVcIjogXCJfM3oySERcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhclwiOiBcIl9la3VNYVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGxcIjogXCJfMVdCRnBcIixcblx0XCJzd2lwZXItcGFnaW5hdGlvbi13aGl0ZVwiOiBcIl8zYXlmeVwiLFxuXHRcInN3aXBlci1wYWdpbmF0aW9uLWJsYWNrXCI6IFwiXzIzNFFuXCIsXG5cdFwic3dpcGVyLXBhZ2luYXRpb24tbG9ja1wiOiBcIl8xbGxvclwiLFxuXHRcInN3aXBlci1zY3JvbGxiYXJcIjogXCJfWGFrY1FcIixcblx0XCJzd2lwZXItc2Nyb2xsYmFyLWRyYWdcIjogXCJfMnpJLXpcIixcblx0XCJzd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFnXCI6IFwiXzE2RUFSXCIsXG5cdFwic3dpcGVyLXNjcm9sbGJhci1sb2NrXCI6IFwiXzJ0TlB1XCIsXG5cdFwic3dpcGVyLXpvb20tY29udGFpbmVyXCI6IFwiXzFQYzBwXCIsXG5cdFwic3dpcGVyLXNsaWRlLXpvb21lZFwiOiBcIl8zemtFLVwiLFxuXHRcInN3aXBlci1sYXp5LXByZWxvYWRlclwiOiBcIl8xQ0tCLVwiLFxuXHRcInN3aXBlci1wcmVsb2FkZXItc3BpblwiOiBcIl8zMzA4WVwiLFxuXHRcInN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZVwiOiBcIl8zQnJhSVwiLFxuXHRcInN3aXBlci1ub3RpZmljYXRpb25cIjogXCJfMVpHeHJcIixcblx0XCJzd2lwZXItY29udGFpbmVyLWZhZGVcIjogXCJfc0VPODVcIixcblx0XCJzd2lwZXItc2xpZGUtYWN0aXZlXCI6IFwiXzJLakpGXCIsXG5cdFwic3dpcGVyLWNvbnRhaW5lci1jdWJlXCI6IFwiXzJFUmcwXCIsXG5cdFwic3dpcGVyLXNsaWRlLW5leHRcIjogXCJfM1ZvZUxcIixcblx0XCJzd2lwZXItc2xpZGUtcHJldlwiOiBcIl92cFZfUlwiLFxuXHRcInN3aXBlci1jb250YWluZXItZmxpcFwiOiBcIl8zeTNvc1wiLFxuXHRcInN3aXBlci1jb250YWluZXItY292ZXJmbG93XCI6IFwiXzJZckZwXCIsXG5cdFwiYXJyb3dsZWZ0U2xpZGVyXCI6IFwiXzNoWjdNXCIsXG5cdFwic2xpZGVyLXByZXZcIjogXCJfMXBxQTZcIixcblx0XCJhcnJvd0NvbnRhaW5lclwiOiBcIl8yQXh4T1wiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBZb3VUdWJlVmlkZW8gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGlmICghd2luZG93LllUKSB7XG4gICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG5cbiAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IHRoaXMubG9hZFZpZGVvO1xuXG4gICAgICBjb25zdCBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZFZpZGVvKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZFZpZGVvID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25QbGF5ZXJSZWFkeSwgb25QbGF5ZXJTdGF0ZUNoYW5nZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgd2luZG93LllULlBsYXllcihgeW91dHViZS1wbGF5ZXItJHtpZH1gLCB7XG4gICAgICB2aWRlb0lkOiBpZCxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBsYXllclZhcnM6IHsgJ2F1dG9wbGF5JzogMSwgJ2xvb3AnOiAxLCAncGxheWxpc3QnOiBpZCAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvblJlYWR5OiBvblBsYXllclJlYWR5LFxuICAgICAgICBvblN0YXRlQ2hhbmdlOiBvblBsYXllclN0YXRlQ2hhbmdlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtgeW91dHViZS1wbGF5ZXItJHtpZH1gfSAvPlxuICAgICk7XG4gIH07XG59XG5cbllvdVR1YmVWaWRlby5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uUGxheWVyU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblBsYXllclJlYWR5OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuWW91VHViZVZpZGVvLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZTogKCkgPT4ge30sXG4gIG9uUGxheWVyUmVhZHk6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBZb3VUdWJlVmlkZW87XG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgZm9vdGVyX3NlY3Rpb25zOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiAxMSxcbiAgICAgIFwibmFtZVwiOiBcIkRvbWVzdGljIFRvdXIgUGFja2FnZXNcIixcbiAgICAgIFwiZm9vdGVyX2xpbmtzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNoaW1sYSBUb3VyIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9zaGltbGFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTWFuYWxpIFRvdXIgUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90b3VyLXBhY2thZ2VzL21hbmFsaVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMyxcbiAgICAgICAgICBcIm5hbWVcIjogXCJHYW5ndG9rIFRvdXIgUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90b3VyLXBhY2thZ2VzL2dhbmd0b2tcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTm9ydGggRWFzdCBUb3VyIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9ub3J0aC1lYXN0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE1LFxuICAgICAgICAgIFwibmFtZVwiOiBcIkxhZGFraCBUb3VyIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9sYWRha2hcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTYsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRGFyamVlbGluZyBUb3VyIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9kYXJqZWVsaW5nXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMixcbiAgICAgIFwibmFtZVwiOiBcIkRvbWVzdGljIEhvbmV5bW9vbiBQYWNrYWdlc1wiLFxuICAgICAgXCJmb290ZXJfbGlua3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjEsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2hpbWxhIEhvbmV5bW9vbiBQYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvbmV5bW9vbi1wYWNrYWdlcy9zaGltbGFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiTWFuYWxpIEhvbmV5bW9vbiBQYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvbmV5bW9vbi1wYWNrYWdlcy9tYW5hbGlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjMsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiR2FuZ3RvayBIb25leW1vb24gUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ob25leW1vb24tcGFja2FnZXMvZ2FuZ3Rva1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyNCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJPb3R5IEhvbmV5bW9vbiBQYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvbmV5bW9vbi1wYWNrYWdlcy9vb3R5XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTI1LFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNvb3JnIEhvbmV5bW9vbiBQYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvbmV5bW9vbi1wYWNrYWdlcy9jb29yZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyNixcbiAgICAgICAgICBcIm5hbWVcIjogXCJEYXJqZWVsaW5nIEhvbmV5bW9vbiBQYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvbmV5bW9vbi1wYWNrYWdlcy9kYXJqZWVsaW5nXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMyxcbiAgICAgIFwibmFtZVwiOiBcIkludGVybmF0aW9uYWwgVG91ciBQYWNrYWdlc1wiLFxuICAgICAgXCJmb290ZXJfbGlua3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMzEsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmFuZ2tvayBUb3VyIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9iYW5na29rXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTMyLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlNwYWluIFRvdXIgUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90b3VyLXBhY2thZ2VzL3NwYWluXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTMzLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkxvbmRvbiBUb3VyIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9sb25kb25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMzQsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGFyaXMgVG91ciBQYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL3RvdXItcGFja2FnZXMvcGFyaXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMzUsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSXRhbHkgVG91ciBQYWNrYWdlc1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL3RvdXItcGFja2FnZXMvaXRhbHlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMzYsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVHVya2V5IFRvdXIgUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90b3VyLXBhY2thZ2VzL3R1cmtleVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTQsXG4gICAgICBcIm5hbWVcIjogXCJJbnRlcm5hdGlvbmFsIEhvbmV5bW9vbiBQYWNrYWdlc1wiLFxuICAgICAgXCJmb290ZXJfbGlua3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDEsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQmFuZ2tvayBIb25leW1vb24gUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ob25leW1vb24tcGFja2FnZXMvYmFuZ2tva1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0MixcbiAgICAgICAgICBcIm5hbWVcIjogXCJQYXR0YXlhIEhvbmV5bW9vbiBQYWNrYWdlcyBcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ob25leW1vb24tcGFja2FnZXMvcGF0dGF5YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0MyxcbiAgICAgICAgICBcIm5hbWVcIjogXCJMb25kb24gSG9uZXltb29uIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vaG9uZXltb29uLXBhY2thZ2VzL2xvbmRvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0NCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJQYXJpcyBIb25leW1vb24gUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ob25leW1vb24tcGFja2FnZXMvcGFyaXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDUsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSXRhbHkgSG9uZXltb29uIFBhY2thZ2VzXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vaG9uZXltb29uLXBhY2thZ2VzL2l0YWx5XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQ2LFxuICAgICAgICAgIFwibmFtZVwiOiBcIlBodWtldCBIb25leW1vb24gUGFja2FnZXNcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ob25leW1vb24tcGFja2FnZXMvcGh1a2V0XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNSxcbiAgICAgIFwibmFtZVwiOiBcIlBvcHVsYXIgVG91ciBQYWNrYWdlc1wiLFxuICAgICAgXCJmb290ZXJfbGlua3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNTEsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVG91ciBQYWNrYWdlcyBGcm9tIERlbGhpXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9mcm9tLWRlbGhpXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTUyLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlRvdXIgUGFja2FnZXMgRnJvbSBNdW1iYWlcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90b3VyLXBhY2thZ2VzL2Zyb20tbXVtYmFpXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTUzLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlRvdXIgUGFja2FnZXMgRnJvbSBDaGVubmFpXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9mcm9tLWNoZW5uYWlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNTQsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiVG91ciBQYWNrYWdlcyBGcm9tIEtvbGthdGFcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90b3VyLXBhY2thZ2VzL2Zyb20ta29sa2F0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE1NSxcbiAgICAgICAgICBcIm5hbWVcIjogXCJUb3VyIFBhY2thZ2VzIEZyb20gQmFuZ2Fsb3JlXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9mcm9tLWJhbmdhbG9yZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE1NixcbiAgICAgICAgICBcIm5hbWVcIjogXCJUb3VyIFBhY2thZ2VzIEZyb20gSHlkZXJhYmFkXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdG91ci1wYWNrYWdlcy9mcm9tLWh5ZGVyYWJhZFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYsXG4gICAgICBcIm5hbWVcIjogXCJQb3B1bGFyIEhvbmV5bW9vbiBQYWNrYWdlcyBcIixcbiAgICAgIFwiZm9vdGVyX2xpbmtzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYxLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhvbmV5bW9vbiBQYWNrYWdlcyBGcm9tIERlbGhpXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vaG9uZXltb29uLXBhY2thZ2VzL2Zyb20tZGVsaGlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSG9uZXltb29uIFBhY2thZ2VzIEZyb20gTXVtYmFpXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBudWxsLFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vaG9uZXltb29uLXBhY2thZ2VzL2Zyb20tbXVtYmFpXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYzLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhvbmV5bW9vbiBQYWNrYWdlcyBGcm9tIENoZW5uYWlcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ob25leW1vb24tcGFja2FnZXMvZnJvbS1jaGVubmFpXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTY1LFxuICAgICAgICAgIFwibmFtZVwiOiBcIkhvbmV5bW9vbiBQYWNrYWdlcyBGcm9tIEJhbmdhbG9yZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvbmV5bW9vbi1wYWNrYWdlcy9mcm9tLWJhbmdhbG9yZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2NixcbiAgICAgICAgICBcIm5hbWVcIjogXCJIb25leW1vb24gUGFja2FnZXMgRnJvbSBIeWRlcmFiYWRcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IG51bGwsXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9ob25leW1vb24tcGFja2FnZXMvZnJvbS1oeWRlcmFiYWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjQsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSG9uZXltb29uIFBhY2thZ2VzIEZyb20gUHVuZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogbnVsbCxcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2hvbmV5bW9vbi1wYWNrYWdlcy9mcm9tLXB1bmVcIlxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0sXG4gIF1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7U2Nyb2xsUGVyY2VudGFnZX0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBlcmNlbnRhZ2UnO1xuaW1wb3J0IFNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5cbmltcG9ydCBIZWFkZXJIb21lIGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlckhvbWUnO1xuaW1wb3J0IEJvb2tlZE5vdGlmaWNhdGlvbiBmcm9tICdjb21wb25lbnRzL0Jvb2tlZE5vdGlmaWNhdGlvbi9Cb29rZWROb3RpZmljYXRpb24nO1xuaW1wb3J0IEhvbWVCYW5uZXIgZnJvbSAnY29tcG9uZW50cy9Ib21lL0hvbWVCYW5uZXInO1xuaW1wb3J0IFRyZW5kaW5nRGVzdGluYXRpb25zIGZyb20gJ21vZHVsZXMvaG9tZS90cmVuZGluZy9UcmVuZGluZ0Rlc3RpbmF0aW9ucyc7XG5pbXBvcnQgeyBkYXRhIGFzIHRyZW5kaW5nRGF0YSB9IGZyb20gJ21vZHVsZXMvaG9tZS90cmVuZGluZy9kYXRhJztcbmltcG9ydCBMZXRzR28gZnJvbSAnbW9kdWxlcy9ob21lL2xldHNHbyc7XG5pbXBvcnQgSG93SXRXb3JrcyBmcm9tICdtb2R1bGVzL2hvbWUvSG93SXRXb3Jrcyc7XG5pbXBvcnQgVHJhdmVsZXJzQmxvZ3MgZnJvbSAnbW9kdWxlcy9ob21lL3RyYXZlbGVyc0Jsb2dzJztcbmltcG9ydCBTRU9CbG9jayBmcm9tICdtb2R1bGVzL2hvbWUvU0VPQmxvY2snO1xuaW1wb3J0IERlc3RpbmF0aW9uQnlEdXJhdGlvbiBmcm9tICdtb2R1bGVzL2hvbWUvZGVzdGluYXRpb25CeUR1cmF0aW9uJztcbmltcG9ydCBUcmF2ZWxvZ3VlcyBmcm9tICdtb2R1bGVzL2hvbWUvdHJhdmVsb2d1ZXMnO1xuaW1wb3J0IEZpeGVkTWVudSBmcm9tICdjb21wb25lbnRzL0ZpeGVkTWVudS9GaXhlZE1lbnUnO1xuaW1wb3J0IFRvYXN0ZXJNZXNzYWdlcyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9Ub2FzdGVyTWVzc2FnZSc7XG5pbXBvcnQgV2VsY29tZUNhcm91c2VsIGZyb20gJ2NvbXBvbmVudHMvSG9tZS9XZWxjb21lQ2Fyb3VzZWwnO1xuaW1wb3J0IEZpeGVkTGVhZEZvcm1CdXR0b24gZnJvbSAnY29tcG9uZW50cy9Ib21lL0ZpeGVkTGVhZEZvcm1CdXR0b24nO1xuaW1wb3J0IHsgb25TY3JvbGwsIGluaXRpYWxpemVTY3JvbGxlciB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICdoZWxwZXJzL0Zvcm1EYXRhRm9ybWF0dGVyJztcbmltcG9ydCB7IFRSSVBfVVBEQVRFRF9JTl9SRURJUyB9IGZyb20gJ2NvbnN0YW50cy9TbGlkZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuaW1wb3J0IHsgZGF0YSBhcyBzZW9Gb290ZXIgfSBmcm9tICcuL0Zvb3RlckRhdGEnO1xuaW1wb3J0IFNlb0Zvb3RlciBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9TZW9Gb290ZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50LCBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5cbmltcG9ydCAndGhlbWUvY29tbW9uLnNjc3MnO1xuXG5jb25zdCByZW5kZXJIZWxtZXQgPSAoKSA9PiAoPEhlbG1ldD5cbiAgPHRpdGxlPlBlcnNvbmFsaXplZCBIb2xpZGF5IFBhY2thZ2VzIHxcbiAgICBDdXN0b21pemVkIFRvdXIgUGFja2FnZXMgZnJvbSBtdWx0aXBsZSBsb2NhbCBhbmQgdHJ1c3RlZCB0cmF2ZWwgYWdlbnRzPC90aXRsZT5cbiAgPG1ldGEgcHJvcGVydHk9XCJmYjphcHBfaWRcIiBjb250ZW50PVwiMTY4NTM0OTUzMjAzNTQxXCIgLz5cbiAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM2OGM0YzFcIiAvPlxuICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vXCIgLz5cbiAgPGxpbmsgaHJlZj1cIi8vczEudHJhdmVsdHJpYW5nbGUuY29tL2Fzc2V0cy9uZXdfdWlfaW1hZ2VzL2Zhdmljb24tMjcyZDM1OTQ1ZGE3MmFmYjFkMThiMjU0YjE3MjNlOGIuaWNvXCJcbiAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICA8bGluayBocmVmPVwiLy9zMS50cmF2ZWx0cmlhbmdsZS5jb20vYXNzZXRzL25ld191aV9pbWFnZXMvZmF2aWNvbi0yNzJkMzU5NDVkYTcyYWZiMWQxOGIyNTRiMTcyM2U4Yi5pY29cIiByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIiAvPlxuICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9XCIxNjg1MzQ5NTMyMDM1NDFcIiAvPlxuICA8bWV0YSBuYW1lPVwiY2F0ZWdvcnlcIiBjb250ZW50PVwiRGVzdGluYXRpb246VW5rbm93blwiIC8+XG4gIDxtZXRhIG5hbWU9XCJkZXN0aW5hdGlvbl9pZFwiIGNvbnRlbnQ9XCJcIiAvPlxuICA8bWV0YSBuYW1lPVwiZGVzdGluYXRpb25fdHlwZVwiIGNvbnRlbnQ9XCJcIiAvPlxuICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PVwiQ3VzdG9taXplIGFuIFVuZm9yZ2V0dGFibGUgRXhwZXJpZW5jZSB3aXRoIGhlbHAgb2YgbXVsdGlwbGUgbG9jYWwgZXhwZXJ0IGFnZW50cyEgQWRkIG9mZmJlYXQgYXR0cmFjdGlvbnMsIGNob29zZSBsb2NhbCBjdWlzaW5lcywgYWRkIGxvY2FsIGFjdGl2aXRpZXMsIHBsYW4gdmlsbGFnZSB0b3VyIG9yIGxvY2FsIHNob3BwaW5nLiBOQVNTQ09NIHRvcCA1MCBlbWVyZ2luZyBjb21wYW5pZXMgb2YgSW5kaWEsIFRpZUNvbiBUb3AgOSBjb21wYW5pZXMsIFdlYnNpdGUgb2YgdGhlIHllYXIgMjAxMSwgRXNwYXJrcyAyMDExIEhvdHRlc3QgRS1jb21tZXJjZSBzdGFydHVwc1wiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgIGNvbnRlbnQ9XCJ0cmlwcywgdG91cnMsIGhvbGlkYXlzLCB0b3VyIHBhY2thZ2VzLCBtYXJrZXQsIGN1c3RvbWl6ZSwgYWdlbnRzLCB0cmF2ZWwsIGhvbGlkYXkgcGFja2FnZXMgaW4gaW5kaWEsIHZhY2F0aW9uIHBhY2thZ2VzIGluIGluZGlhLCB0cmF2ZWwgc2l0ZXNcIiAvPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbVwiIC8+XG4gIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICBjb250ZW50PXtgJHtjb25maWcuYXNzZXRzLmltYWdlc30vYXNzZXRzL3Nlb19ob21lL2Jhbm5lci1pbWFnZS1lMjRjMmU4Y2IwNTYwMDZiOGQxZDU3YmIyZDZkZTY2ZS5qcGdgfSAvPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUcmF2ZWxUcmlhbmdsZS5jb21cIiAvPlxuICA8bWV0YSBuYW1lPVwic21hcnRhZGRvbi12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZWRkYmY1YWE3MWJhNGE0MDI5YmVhZDE3YTA5NDBhYWZcIiAvPlxuICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICA8bWV0YSBuYW1lPVwicGFnZV9mdWxsbmFtZVwiIGNvbnRlbnQ9XCJIb21lIFBhZ2VcIiAvPlxuPC9IZWxtZXQ+KTtcblxuY2xhc3MgSG9tZUFzeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQ2hhdEJ1dHRvblZpc2libGU6IGZhbHNlLFxuICAgICAgY2Fyb3VzZWxEYXRhOiB7fVxuICAgIH07XG4gICAgdGhpcy5pc0V2ZW50VHJhY2tlZCA9IHtcbiAgICAgICdFeHBsb3JlIERlc3RpbmF0aW9ucyBCeSBUaGVtZSc6IGZhbHNlLFxuICAgICAgJ0V4cGVydCBDYWxsYmFjayc6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuXG5cbiAgb25QYWdlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgcGVyY2VudEhlaWdodCA9IChkb2N1bWVudEhlaWdodCAvIDEwMCkgKiAxMDtcbiAgICBjb25zdCBwYWdlWXNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAocGFnZVlzY3JvbGwgPiBwZXJjZW50SGVpZ2h0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNDaGF0QnV0dG9uVmlzaWJsZTogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ2hhdEJ1dHRvblZpc2libGU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblBhZ2VTY3JvbGwpO1xuICB9XG5cbiAgdHJhY2tMZWFkRnVubmVsID0gKHR5cGUsIGN0YSwgc2VjdGlvbikgPT4ge1xuICAgIGlmICh0eXBlID09PSAnbGVhZF9mdW5uZWwnKSB7XG4gICAgICB0aGlzLnByb3BzLnRyYWNrTGVhZEZ1bm5lbENsaWNrKHsgLy92ZXJpZnkgaXRzIGV4aXN0ZW5jZVxuICAgICAgICBmdW5uZWxTdGVwOiAxLFxuICAgICAgICBzZWN0aW9uLFxuICAgICAgICBjdGEsXG4gICAgICAgIGNhdGVnb3J5OiAnRGVzdGluYXRpb246IFVua25vd24nLFxuICAgICAgICBvYmplY3Q6ICcnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdHJhY2tIb21lUGFnZSA9ICh7IGV2ZW50LCBjYXRlZ29yeSwgc2VjdGlvbiwgb2JqZWN0LCBjdGEgfSkgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudCxcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSB8fCAnSG9tZSBQYWdlJyxcbiAgICAgIHNlY3Rpb24sXG4gICAgICBvYmplY3QsXG4gICAgICBjdGFcbiAgICB9KTtcbiAgfTtcblxuICBvblNlbnNvckNoYW5nZSA9IChpc1Zpc2libGUsIHNlY3Rpb24pID0+IHtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFdmVudFRyYWNrZWRbc2VjdGlvbl0pIHtcbiAgICAgICAgdGhpcy5pc0V2ZW50VHJhY2tlZFtzZWN0aW9uXSA9IHRydWU7XG4gICAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgICAgZXZlbnQ6IE9SR0FOSVNNX1ZJRVdFRCxcbiAgICAgICAgICBzZWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNBdXRoZW50aWNhdGVkLCBzaG91bGREaXNwbGF5TGF0ZXN0VHJpcCxcbiAgICAgIHVzZXJEZXRhaWxzLCB0cmFja0NhdGVnb3J5Q2xpY2ssIHNob3dUb2FzdGVyTWVzc2FnZSwgdXBkYXRlRmllbGRzLCBjYXJvdXNlbERhdGEsIGNhcm91c2VsUGFja2FnZXMsIHdlbGNvbWVDYXJvdXNlbFBhY2thZ2VzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpbml0aWFsaXplU2Nyb2xsZXIoKTtcbiAgICBzZXRDb29raWUoJ2NiX2R0JywgJycpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0X2hvbWVDb250YWluZXIgcm93IHJvdy0gc2JjNSBob21lUGFnZVwiPlxuICAgICAgICB7cmVuZGVySGVsbWV0KCl9XG4gICAgICAgIDxkaXYgaXRlbVNjb3BlPVwiaXRlbXNjb3BlXCIgaXRlbVR5cGU9XCJodHRwczovL3NjaGVtYS5vcmcvT3JnYW5pemF0aW9uXCI+XG4gICAgICAgICAgPFNjcm9sbFBlcmNlbnRhZ2Ugb25DaGFuZ2U9e29uU2Nyb2xsfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd1RvYXN0ZXJNZXNzYWdlID9cbiAgICAgICAgICAgICAgICA8VG9hc3Rlck1lc3NhZ2VzXG4gICAgICAgICAgICAgICAgICB0b2FzdGVyQ29udGVudD1cIllvdXIgcmVxdWVzdCBpcyBzdWJtaXR0ZWQuIFdlIHdpbGwgY2FsbCB5b3UgYmFjayB3aXRoaW4gMjRocnMuXCJcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpZWxkcyh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogVFJJUF9VUERBVEVEX0lOX1JFRElTLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aW1lSW5NUz17NTAwMH1cbiAgICAgICAgICAgICAgICAvPiA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgejE1XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgejEgd2Z1bGwgdDAgbDAgcjBcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVySG9tZSBpc1RyYW5zcGFyZW50PXt0cnVlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEhvbWVCYW5uZXJcbiAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja0hvbWVQYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVBhZ2VMYXlvdXRDb250YWluZXIgc2Jjd1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkICYmIHNob3VsZERpc3BsYXlMYXRlc3RUcmlwID9cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibTAgbWI4XCI+PEJvb2tlZE5vdGlmaWNhdGlvbiB7Li4udXNlckRldGFpbHMubGFzdEFjdGl2ZVRyaXB9IC8+PC9kaXY+IDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxXZWxjb21lQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICBjYXJvdXNlbERhdGE9e2Nhcm91c2VsRGF0YX1cbiAgICAgICAgICAgICAgICBjYXJvdXNlbFBhY2thZ2VzPXtjYXJvdXNlbFBhY2thZ2VzfVxuICAgICAgICAgICAgICAgIHdlbGNvbWVDYXJvdXNlbFBhY2thZ2VzPXt3ZWxjb21lQ2Fyb3VzZWxQYWNrYWdlc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUsICdEZXN0aW5hdGlvbnMgQnkgVGhlbWUnKX1cbiAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICAgIGRlbGF5ZWRDYWxsPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8VHJlbmRpbmdEZXN0aW5hdGlvbnNcbiAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJFeHBsb3JlIERlc3RpbmF0aW9ucyBieSBUaGVtZVwiXG4gICAgICAgICAgICAgICAgICBzaG93VHJlbmRpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgc2hvd0NvbnRhY3Q9e3RydWV9XG4gICAgICAgICAgICAgICAgICBkYXRhPXt0cmVuZGluZ0RhdGF9XG4gICAgICAgICAgICAgICAgICBzaG93TGFzdENhcmQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja0hvbWVQYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU2Vuc29yPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiMjRcIj5cbiAgICAgICAgICAgICAgICA8RGVzdGluYXRpb25CeUR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja0hvbWVQYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0MjQgcGIyNFwiPlxuICAgICAgICAgICAgICAgIDxUcmF2ZWxvZ3Vlc1xuICAgICAgICAgICAgICAgICAgdHJhY2tTZWdtZW50RXZlbnQ9e3RoaXMudHJhY2tIb21lUGFnZX1cbiAgICAgICAgICAgICAgICAgIC8vaGFuZGxlTGVhZEZvcm1Nb2RhbD17aGFuZGxlTGVhZEZvcm1Nb2RhbH0gIHZlcmlmeVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAyNFwiPlxuICAgICAgICAgICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCAnRXhwZXJ0IENhbGxiYWNrJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXllZENhbGw9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgPExldHNHb1xuICAgICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja0hvbWVQYWdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NlbnNvcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQyNCBwYjI0XCI+XG4gICAgICAgICAgICAgICAgPFRyYXZlbGVyc0Jsb2dzXG4gICAgICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja0hvbWVQYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAyNFwiPlxuICAgICAgICAgICAgICAgIDxIb3dJdFdvcmtzIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAyNCBwYjQ4XCI+XG4gICAgICAgICAgICAgICAgPFNFT0Jsb2NrIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcGI2NCBwdDAgc2JjNVwiPlxuICAgICAgICAgICAgICA8U2VvRm9vdGVyIGZvb3RlclNlY3Rpb25zPXtzZW9Gb290ZXIuZm9vdGVyX3NlY3Rpb25zfSAvPlxuICAgICAgICAgICAgICA8Rm9vdGVyIGlzSG9tZVBhZ2UgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNDaGF0QnV0dG9uVmlzaWJsZSA/XG4gICAgICAgICAgICAgIDxGaXhlZE1lbnUgaGFzQm90dG9tRml4ZWRCdG49e3RydWV9IHRyYWNrTGVhZEZ1bm5lbENsaWNrPXt0aGlzLnRyYWNrTGVhZEZ1bm5lbH0gLz4gOiBudWxsfVxuICAgICAgICAgICAgPEZpeGVkTGVhZEZvcm1CdXR0b25cbiAgICAgICAgICAgICAgdHJhY2tMZWFkRnVubmVsQ2xpY2s9e3RoaXMudHJhY2tMZWFkRnVubmVsfVxuICAgICAgICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja0hvbWVQYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Njcm9sbFBlcmNlbnRhZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib21lQXN5bmMucHJvcFR5cGVzID0ge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHVzZXJEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFja0NhdGVnb3J5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3VsZERpc3BsYXlMYXRlc3RUcmlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhY2tMZWFkRnVubmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dUb2FzdGVyTWVzc2FnZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdXBkYXRlRmllbGRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjYXJvdXNlbERhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNhcm91c2VsUGFja2FnZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHdlbGNvbWVDYXJvdXNlbFBhY2thZ2VzOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuSG9tZUFzeW5jLmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlckRldGFpbHM6IHt9LFxuICBzaG91bGREaXNwbGF5TGF0ZXN0VHJpcDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lQXN5bmM7XG4vL1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY29uc3QgR1Nlb0Zvb3RlckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGJvcmRlclRvcDogJzFweCBzb2xpZCAjM2UzZTNlJyxcbiAgJyYgLnRhYnNIZWFkaW5ncyc6IHtcbiAgICAnJiA+IGRpdic6IHtcbiAgICAgIGRpc3BsYXk6J25vbmUnLFxuICAgICAgJyYuc2VsZWN0ZWQtY29udGVudCcgOiB7XG4gICAgICAgIGRpc3BsYXk6J2Jsb2NrJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJyYgLnRhYnNIZWFkaW5nc01haW4nOiB7XG4gICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxuICAgICAgJyYgLnNlbGVjdGVkLWhlYWRpbmcnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjYWFhJyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIGJvcmRlcjogJzAgbm9uZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmMWYxZjEnLFxuICAgICAgICAnJjo6YmVmb3JlLCAmOjphZnRlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2UzZTNlJ1xuICAgICAgICB9LFxuICAgICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJyxcbiAgICAgICAgfSxcbiAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtMTM1ZGVnKScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJyYgbGknOiB7XG4gICAgICAgIHdoaXRlU3BhY2U6ICdwcmUnLFxuICAgICAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgcGFkZGluZzogJzAgMzBweCAwIDEwcHgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnJjo6YmVmb3JlLCAmOjphZnRlcic6IHtcbiAgICAgICAgICBjb250ZW50OiAnXFwnIFxcJycsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgIGhlaWdodDogJzZweCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgIHRvcDogJzIycHgnLFxuICAgICAgICB9LFxuICAgICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxuICAgICAgICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgICAgIH0sXG4gICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTM1ZGVnKScsXG4gICAgICAgICAgcmlnaHQ6ICcxM3B4JyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5jbGFzcyBTZW9Gb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzZWxlY3RlZFNlb0Zvb3RlckhlYWRpbmc6IC0xXG4gIH07XG5cbiAgZm9vdGVyU2VjdGlvbkhlYWRpbmdIYW5kbGVyID0gKGkpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc2VsZWN0ZWRTZW9Gb290ZXJIZWFkaW5nID09PSBpICl7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZzogLTEgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkU2VvRm9vdGVySGVhZGluZzogaX0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvb3RlclNlY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRTZW9Gb290ZXJIZWFkaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8R1Nlb0Zvb3RlckRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYnNIZWFkaW5ncyBwYmMzJz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0YWJzSGVhZGluZ3NNYWluIGZsZXgnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmb290ZXJTZWN0aW9ucy5tYXAoKGZvb3RlclNlY3Rpb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZm9vdGVyU2VjdGlvbkhlYWRpbmdIYW5kbGVyKGkpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWxpZ25DZW50ZXIgcmVsYXRpdmUgZnc3IHNmY3cgbTAgZjE0ICR7aSA9PT0gc2VsZWN0ZWRTZW9Gb290ZXJIZWFkaW5nID8gJ3NlbGVjdGVkLWhlYWRpbmcnIDogJycgfWB9IGtleT17Zm9vdGVyU2VjdGlvbi5uYW1lfT57Zm9vdGVyU2VjdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBmb290ZXJTZWN0aW9ucy5tYXAoKGZvb3RlclNlY3Rpb24sIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzYmN3ICR7aSA9PT0gc2VsZWN0ZWRTZW9Gb290ZXJIZWFkaW5nID8gJ3NlbGVjdGVkLWNvbnRlbnQnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AxNSc+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlclNlY3Rpb24uZm9vdGVyX2xpbmtzLm1hcChmb290ZXJMaW5rID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2Jsb2NrIHBmYzMgbWI4JyBrZXk9e2Zvb3RlckxpbmsudXJsfSB0bz17Zm9vdGVyTGluay51cmx9Pntmb290ZXJMaW5rLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR1Nlb0Zvb3RlckRpdj5cbiAgICApO1xuICB9XG59XG5cblxuU2VvRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgZm9vdGVyU2VjdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VvRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNsYXNzIFRvYXN0ZXJNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdG9hc3RlckNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2FsbGJhY2tBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIHRpbWVJbk1TOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdG9hc3RlckNvbnRlbnQ6ICcnLFxuICAgIGNhbGxiYWNrQWN0aW9uOiAoKSA9PiB7fSxcbiAgICB0aW1lSW5NUzogNTAwMFxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9hc3RlclNob3duOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS50b2FzdGVyU2hvd24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b2FzdGVyU2hvd246IHRydWUsXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9hc3RlclNob3duOiBmYWxzZSxcbiAgICAgICAgICB9LCB0aGlzLnByb3BzLmNhbGxiYWNrQWN0aW9uKCkpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLnRpbWVJbk1TKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAodGhpcy5zdGF0ZS50b2FzdGVyU2hvd24pXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgd2Z1bGwgdDUwIHoxNiBzYmMxIHA4XCI+PHAgY2xhc3NOYW1lPVwid2Z1bGwgdGV4dC1jZW50ZXIgZjEyIHNmY3dcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMudG9hc3RlckNvbnRlbnR9XG4gICAgICAgICAgICA8L3A+PC9kaXY+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoVG9hc3Rlck1lc3NhZ2VzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEZvb3RlckxpbmtzIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmtzJztcbmltcG9ydCBBZGRyZXNzVFQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQWRkcmVzc1RUJztcbmltcG9ydCBDb3B5UmlnaHQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQ29weVJpZ2h0JztcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxMaW5rcyc7XG5cbmltcG9ydCB7IExvdmVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IExvdmVJY29uQ29uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzIwcHgnLFxuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbWFyZ2luOiAnMCA4cHgnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbn0pO1xuXG5jb25zdCBNYWRlV2l0aCA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbGluZUhlaWdodDogJzIwcHgnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBjb2xvcjogJyNmZmZmZmYnLFxuICAnJiA+IHAnOiB7XG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICB9XG59KTtcblxuY29uc3QgRm9vdGVyID0gKHsgaXNIb21lUGFnZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdhdF9mb290ZXIgcm93IHJvdy0gcGJjMyBwOCc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0MCBwYjAnPlxuICAgICAgPEZvb3RlckxpbmtzIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0OCBtYjI0Jz5cbiAgICAgIDxBZGRyZXNzVFQgaXNIb21lUGFnZT17aXNIb21lUGFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjRcIj5cbiAgICAgIDxTb2NpYWxMaW5rcyAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlclwiPlxuICAgICAgPE1hZGVXaXRoIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgZmxleEZ1bGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9jayBhdF9tYWRlbG92ZVwiPk1hZGUgd2l0aDwvcD5cbiAgICAgICAgPExvdmVJY29uQ29uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+PExvdmVJY29uIC8+PC9Mb3ZlSWNvbkNvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9ja1wiPmluIEluZGlhPC9wPlxuICAgICAgPC9NYWRlV2l0aD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgdGV4dC1yaWdodFwiPjxDb3B5UmlnaHQgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBpc0hvbWVQYWdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuRm9vdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNIb21lUGFnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhbm5lci1pbWctY29udGFpbmVyXCI6IFwiXzJBSkNzXCIsXG5cdFwiaGVhZGVyLWJhY2tncm91bmRcIjogXCJfM3B3dFFcIixcblx0XCJ3ZnVsbFwiOiBcIl9wcUMzUVwiLFxuXHRcImhlYWRlci1iYWNrZ3JvdW5kLXNtYWxsXCI6IFwiXzJhak5kXCIsXG5cdFwiaG9tZV9wYWdlX2hlYWRlcl91aV9kaXZfY2xzXCI6IFwiXzFTU0ljXCIsXG5cdFwibThcIjogXCJfM0RmQUZcIixcblx0XCJyZWxhdGl2ZVwiOiBcIl8yY1BUd1wiLFxuXHRcInA4XCI6IFwiXzNwTGlfXCIsXG5cdFwic2Jjd1wiOiBcIl8xb3NsLVwiLFxuXHRcInJvd1wiOiBcIl9VdE1lU1wiLFxuXHRcInJvdy1cIjogXCJfM29PdENcIixcblx0XCJwbDhcIjogXCJfMkR3S2dcIixcblx0XCJwcjhcIjogXCJfMlFQNzJcIixcblx0XCJtYjhcIjogXCJfWnR6Q2lcIixcblx0XCJ0ZXh0LWNlbnRlclwiOiBcIl8xRjBhQlwiLFxuXHRcImhlYWRlci1jb25cIjogXCJfT1ZPaU9cIixcblx0XCJzZWFyY2gtY29udGFpbmVyLW1haW5cIjogXCJfMlZycE5cIixcblx0XCJob21lX3BhZ2VfdGhlbWVfdWlfZGl2X2Nsc1wiOiBcIl8xWjA2R1wiLFxuXHRcImF0X3NlYXJjaEJ1dHRvblwiOiBcIl8xT1BnZ1wiLFxuXHRcImlucHV0LXNlYXJjaC1sYXJnZVwiOiBcIl8xWWE1RFwiLFxuXHRcInBiYzFcIjogXCJfM1VScVdcIixcblx0XCJwYjhcIjogXCJfMWVjYkhcIixcblx0XCJmaXhlZC1tZW51LWNvbnRhaW5lclwiOiBcIl8zdGZmZ1wiLFxuXHRcInBsYW4taG9saVwiOiBcIl8ySEtCVVwiLFxuXHRcInR0LWxvZ29cIjogXCJfMm1STzVcIixcblx0XCJ0dC1sb2dvLWNvbnRhaW5lclwiOiBcIl94MVZ4OVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRm9ybU9uZUNUQSBmcm9tICdjb21wb25lbnRzL0Zvcm0vRm9ybUxlYWQvRm9ybU9uZUNUQSc7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgRml4ZWRMZWFkRm9ybUJ1dHRvbiA9ICh7IHRyYWNrTGVhZEZ1bm5lbENsaWNrLCB0cmFja1NlZ21lbnRFdmVudCB9KSA9PiB7XG4gIGNvbnN0IGN0YVRleHQgPSAnUGxhbiBNeSBIb2xpZGF5JztcbiAgY29uc3QgdHJhY2tDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIHRyYWNrTGVhZEZ1bm5lbENsaWNrKCdsZWFkX2Z1bm5lbCcsIGN0YVRleHQsICdIb21lIFBhZ2UgRml4ZWQgQnV0dG9uJyk7XG4gICAgdHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsIFxuICAgICAgc2VjdGlvbjogJ1N0aWNreSBCYXInLFxuICAgICAgY3RhOiAnUGxhbiBNeSBIb2xpZGF5J1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc2JjdyBwOCBiczYgYjAgbDAgcjAgejIgd2Z1bGxcIj5cbiAgICAgIDxGb3JtT25lQ1RBIGNsaWNrSGFuZGxlcj17dHJhY2tDbGlja0V2ZW50fSA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXRfYmFubmVyQnRuIHdmdWxsIGJ0bi1maWxsZWQtcHJpLWxhcmdlXCI+e2N0YVRleHR9PC9kaXY+XG4gICAgICA8L0Zvcm1PbmVDVEE+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaXhlZExlYWRGb3JtQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgdHJhY2tMZWFkRnVubmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkZpeGVkTGVhZEZvcm1CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB0cmFja0xlYWRGdW5uZWxDbGljazogKCkgPT4ge30sXG4gIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml4ZWRMZWFkRm9ybUJ1dHRvbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5pbXBvcnQgJy4vQmFubmVySW1nLnNjc3MnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2gnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZUJhbm5lci5jbS5zY3NzJztcblxuY2xhc3MgSG9tZUJhbm5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1NtYWxsRGV2aWNlOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgZ2V0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGlmKGdldFdpbmRvd0hlaWdodCA8IDUyMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNTbWFsbERldmljZTogdHJ1ZX0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbWdEZXRhaWxzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTEyIHAwIGhlYWRlci1iYWNrZ3JvdW5kIHdmdWxsIHJlbGF0aXZlICR7dGhpcy5zdGF0ZS5pc1NtYWxsRGV2aWNlID8gJ2hlYWRlci1iYWNrZ3JvdW5kLXNtYWxsJyA6ICAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuaXNTbWFsbERldmljZSA/IHN0eWxlcy5iYW5uZXJJbWdTbWFsbCA6IHN0eWxlcy5iYW5uZXJJbWd9IG92ZXJmbG93aGB9PlxuICAgICAgICAgIDxJbWcgc3JjPXtpbWdEZXRhaWxzLmltYWdlVXJsfSBpa1NyYz17aW1nRGV0YWlscy5pbWFnZWtpdFVybH0gYWx0PVwidHRcIiBoZWlnaHQ9e3RoaXMuc3RhdGUuaXNTbWFsbERldmljZSA/IDI4MCA6IDM0MH0gd2lkdGg9ezQyMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQ0OCBhYnNvbHV0ZS1jZW50ZXIgdGV4dC1jZW50ZXIgd2Z1bGxcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXRfaG9tZUJhbm5lck1haW5IZWFkaW5nIGYyNCBmdzkgbWI0OCBzZmN3XCI+Q3VzdG9taXplICYgQm9vayA8YnIgLz5BbWF6aW5nIEhvbGlkYXkgUGFja2FnZXM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwyNCBwcjI0IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgIGlzSG9tZVBhZ2VTZWFyY2g9e3RydWV9XG4gICAgICAgICAgICAgIGlzTGFyZ2VTZWFyY2g9e3RydWV9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXsoKSA9PiB0aGlzLnByb3BzLnRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSG9tZV9QYWdlJywgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsIHNlY3Rpb246ICdTZWFyY2ggQmFyJywgb2JqZWN0OiAnU2VhcmNoIEJhcidcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSG9tZUJhbm5lci5wcm9wVHlwZXMgPSB7XG4gIHRyYWNrU2VnbWVudEV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgaW1nRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuSG9tZUJhbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7fSxcbiAgb25TZWFyY2g6ICgpID0+IHt9LFxuICBpbWdEZXRhaWxzOiB7XG4gICAgJ2ltYWdlVXJsJzogYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L2hvbWUtcGFnZS9ob21lcGFnZS1iYW5uZXIuanBnYFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lQmFubmVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGFja2FnZUNhcmRFeHBlcmltZW50IGZyb20gJy4uL0xpc3RpbmcvUGFja2FnZUNhcmRFeHBlcmltZW50JztcbmltcG9ydCBTd2lwZXIgZnJvbSAnY29tcG9uZW50cy9Td2lwZXIvU3dpcGVyJztcbmNsYXNzIFdlbGNvbWVDYXJvdXNlbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgZGVzdGluYXRpb246T2JqZWN0LmtleXModGhpcy5wcm9wcy5jYXJvdXNlbERhdGEuZGVzdGluYXRpb25zKVswXVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbn0pO1xuICAgIGNvbnN0IHBhY2thZ2VzID0gdGhpcy5wcm9wcy5jYXJvdXNlbERhdGEuZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uXS5qb2luKCcsJyk7XG4gICAgdGhpcy5wcm9wcy53ZWxjb21lQ2Fyb3VzZWxQYWNrYWdlcyh7cmVjZW50bHlfdmlld2VkX3BhY2thZ2VzOiBwYWNrYWdlc30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2Fyb3VzZWxEYXRhLCBjYXJvdXNlbFBhY2thZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlubGluZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZEltYWdlOid1cmwoJytjYXJvdXNlbERhdGEuYmFubmVyKycpJ1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtjYXJvdXNlbFBhY2thZ2VzICYmIGNhcm91c2VsUGFja2FnZXMucGFja2FnZXMgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtMCBtYjggc3BlY2lhbC1kZWFscy1jb250YWluZXJcIiBzdHlsZT17aW5saW5lU3R5bGV9PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYWluLWhlYWRpbmcgdGV4dC1jZW50ZXJcIj57Y2Fyb3VzZWxEYXRhLmhlYWRpbmd9PC9oND5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntjYXJvdXNlbERhdGEuc3ViaGVhZGluZ308L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd2hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3dzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGlsbHMtY29udGFpbmVyLWlubGluZSBzY3JvbGxhYmxlICR7Y2Fyb3VzZWxEYXRhLmRlc3RpbmF0aW9ucy5sZW5ndGggPiA0ID8gJyc6ICdwaWxsc0NlbnRlcid9YH0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY2Fyb3VzZWxEYXRhLmRlc3RpbmF0aW9ucykubWFwKChkZXN0aW5hdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soZGVzdGluYXRpb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGlsbHMgcm91bmQtY29ybmVycyB3aGl0ZSAke2Rlc3RpbmF0aW9uPT09IHRoaXMuc3RhdGUuZGVzdGluYXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzdGluYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPik7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHBsMTUgcHIxNSBwdDggcGI4IHNiY3dcIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHJlbGF0aXZlIHNpbWlsYXItcGFja2FnZS1ib3hcIiA+XG4gICAgICAgICAgICAgIDxTd2lwZXIgc2xpZGVDbGFzcz1cInNsaWRlXCIgc3BhY2VCZXR3ZWVuPXsxNn0gc2xpZGVzUGVyVmlldz1cImF1dG9cIiByZWJ1aWxkT25VcGRhdGU9e3RydWV9IHNzckFuaW1hdGlvbj17eyB3aWR0aDogMjc2LCBoZWlnaHQ6IDMxNiB9fT5cbiAgICAgICAgICAgICAgICB7Y2Fyb3VzZWxQYWNrYWdlcy5wYWNrYWdlcy5tYXAoKGNhcmQsaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQYWNrYWdlQ2FyZEV4cGVyaW1lbnQgY2FyZD17Y2FyZH0ga2V5PXtpfSBpc1BhY2thZ2VSZXZhbXA9e3RydWV9Lz47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pn1cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5XZWxjb21lQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xuICBjYXJvdXNlbERhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2Fyb3VzZWxQYWNrYWdlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgd2VsY29tZUNhcm91c2VsUGFja2FnZXM6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lQ2Fyb3VzZWw7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYW5uZXJJbWdcIjogXCJfMjRDQnZKU1VhQXVTdnZEMS1laUpHeVwiLFxuXHRcImJhbm5lckltZ1NtYWxsXCI6IFwiXzNuaGJiN0NnRW5oSC0wUmVJbnlKY2VcIlxufTsiLCJjb25zdCBERUZBVUxUX0lNQUdFX1BBVEggPSAnaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vYXNzZXRzL2NpdHlfdG91cl9ndWlkZV9tb2JpbGUvZGVmYXVsdF9kZXN0aW5hdGlvbi04YTMwMzJhZjQ3YmI0YmJhODVjODE0ODg4MTk1M2QzOC5wbmcnO1xuXG5leHBvcnQge1xuICBERUZBVUxUX0lNQUdFX1BBVEhcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9