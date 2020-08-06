require("source-map-support").install();
exports.ids = ["destination-detail"];
exports.modules = {

/***/ "./app/components/AnimatedBanner/AnimatedBanner.js":
/*!*********************************************************!*\
  !*** ./app/components/AnimatedBanner/AnimatedBanner.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./AnimatedBanner.scss */ "./app/components/AnimatedBanner/AnimatedBanner.scss");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _animatedBanner = __webpack_require__(/*! reducers/animatedBanner */ "./app/reducers/animatedBanner.js");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AnimatedBanner = (_dec = (0, _reactRedux.connect)(state => ({
  isLoaded: (0, _animatedBanner.isLoaded)(state),
  isContent: (0, _animatedBanner.isContent)(state),
  content: (0, _animatedBanner.content)(state)
}), {
  loadContent: _animatedBanner.loadContent
}), _dec(_class = (_temp = _class2 = class AnimatedBanner extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      isBannerContent: false,
      bannerShow: false,
      show: true,
      firstScroll: true
    };
    this.closeBanner = this.closeBanner.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.isComponentRendered = this.isComponentRendered.bind(this);
  }

  componentDidMount() {
    let pagePath = '';

    if (typeof window !== 'undefined') {
      pagePath = window.location.pathname;
    }

    this.props.loadContent({
      path: pagePath
    });
  }

  clearScrollEvent() {
    if (typeof window !== "undefined") {
      window.removeEventListener('scroll', this.setScroll);
    }
  }

  componentWillUnmount() {
    this.clearScrollEvent();
  }

  setScroll() {
    if (this.state.show) {
      if (this.state.firstScroll) {
        document.getElementById('animated-banner-u').style.top = 0;
        this.setState({
          firstScroll: false
        });
      }

      let bannerShow = false;
      const winHeight = window.innerHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const max = docHeight - winHeight;
      const percent = value / max * 100;

      if (percent >= 10) {
        bannerShow = true;
      } else {
        bannerShow = false;
      }

      if (this.state.bannerShow !== bannerShow) {
        this.setState({
          bannerShow
        });
      }
    }
  }

  isComponentRendered() {
    window.addEventListener('scroll', this.setScroll);
  }

  closeBanner(e) {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      bannerShow: false,
      show: false
    });
  }

  render() {
    if (!this.props.isContent) {
      this.clearScrollEvent();
      return _react.default.createElement("div", null);
    }

    this.isComponentRendered();
    const data = this.props.content;
    return _react.default.createElement("div", {
      id: "animated-banner-u",
      style: {
        top: '-100px'
      },
      className: this.state.bannerShow ? 'clearfix fixed wfull t0 pbc1 animated-sticky-footer showFooter' : 'clearfix fixed wfull t0 pbc1 animated-sticky-footer'
    }, _react.default.createElement("a", {
      href: data.redirect_url,
      className: "col-xs-12 p0 block"
    }, _react.default.createElement("div", {
      className: "absolute-center-v l5"
    }, _react.default.createElement("span", {
      className: "icon-span"
    }, _react.default.createElement(_Icon.NotificationBell, null))), _react.default.createElement("div", {
      className: "bann-content-div col-xs-11 sfcw f14"
    }, _react.default.createElement("p", {
      className: "m0"
    }, "Hey there!"), _react.default.createElement("p", {
      className: "m0 fw9"
    }, data.text)), _react.default.createElement("div", {
      className: "col-xs-1 p0 text-right"
    }, _react.default.createElement("button", {
      className: "close-icon iblock",
      onClick: this.closeBanner
    }, _react.default.createElement(_Icon.CloseWhite, null)))));
  }

}, _class2.propTypes = {
  isContent: _propTypes.default.bool.isRequired,
  loadContent: _propTypes.default.func.isRequired,
  content: _propTypes.default.object
}, _class2.defaultProps = {
  content: {},
  loadContent: () => {},
  isContent: false
}, _temp)) || _class);
var _default = AnimatedBanner;
exports.default = _default;

/***/ }),

/***/ "./app/components/AnimatedBanner/AnimatedBanner.scss":
/*!***********************************************************!*\
  !*** ./app/components/AnimatedBanner/AnimatedBanner.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"icon-span": "_2XoNm",
	"close-icon": "_XcVwu",
	"bann-content-div": "_FcmHZ",
	"animated-sticky-footer": "_2AJcG",
	"showFooter": "_2HOnX",
	"animated-footer-transition": "_Q2hZh"
};

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationBanner.js":
/*!***************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationBanner.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./DestinationBanner.scss */ "./app/components/DestinationDetail/DestinationBanner.scss");

var DateUtils = _interopRequireWildcard(__webpack_require__(/*! ../../helpers/DateTime */ "./app/helpers/DateTime.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MonthRange = ({
  bestTimeToVisit
}) => {
  if (!bestTimeToVisit) {
    return null;
  }

  const month = bestTimeToVisit.split('..');

  if (month.length !== 2) {
    return null;
  }

  const startMonth = DateUtils.numberToMonth(parseInt(month[0], 10));
  const endMonth = DateUtils.numberToMonth(parseInt(month[1], 10));
  return _react.default.createElement("p", {
    className: "f14 sfcw uppercase"
  }, startMonth, "-", endMonth);
};

MonthRange.propTypes = {
  bestTimeToVisit: _propTypes.default.string
};
MonthRange.defaultProps = {
  bestTimeToVisit: undefined
};

const DestinationBanner = ({
  imageUrl,
  imagekitUrl,
  bestTimeToVisit
}) => _react.default.createElement("div", {
  className: "row row- relative destination-banner"
}, _react.default.createElement(_Img.default, {
  src: imageUrl,
  ikSrc: imagekitUrl,
  alt: "tt"
}), _react.default.createElement("div", {
  className: "absolute t10 l10 z2"
}, _react.default.createElement("p", {
  className: "f12 sfcw"
}, "Best time:"), _react.default.createElement(MonthRange, {
  bestTimeToVisit: bestTimeToVisit
})));

DestinationBanner.propTypes = {
  imageUrl: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  bestTimeToVisit: _propTypes.default.string.isRequired
};
var _default = DestinationBanner;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationBanner.scss":
/*!*****************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationBanner.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"destination-banner": "_2BH5-"
};

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationData.js":
/*!*************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationData.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./DestinationData.scss */ "./app/components/DestinationDetail/DestinationData.scss");

var _DestinationHighlight = _interopRequireDefault(__webpack_require__(/*! ./DestinationHighlight */ "./app/components/DestinationDetail/DestinationHighlight.js"));

var _DestinationHotel = _interopRequireDefault(__webpack_require__(/*! ./DestinationHotel */ "./app/components/DestinationDetail/DestinationHotel.js"));

var _DestinationHowToReach = _interopRequireDefault(__webpack_require__(/*! ./DestinationHowToReach */ "./app/components/DestinationDetail/DestinationHowToReach.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DestinationData = ({
  placeDescription,
  placeName,
  hotelDetails,
  isVisa,
  howToReach,
  activeTab,
  setActiveDetailsTab
}) => {
  const airportDetails = () => {
    if (!howToReach.airport_details) {
      return null;
    }

    return _react.default.createElement(_DestinationHowToReach.default, {
      heading: "By Air",
      subHeading: "Nearest Airport",
      text: `The major airport in ${placeName} is \
        ${howToReach.airport_details.nearest_airport} \
        (Code ${howToReach.airport_details.airport_code})`
    });
  };

  const busDetails = () => {
    if (!howToReach.bus_details) {
      return null;
    }

    return _react.default.createElement(_DestinationHowToReach.default, {
      heading: "By Road",
      subHeading: "Major Bus Stand",
      text: `The major stand in ${placeName} is \
        ${howToReach.bus_details.road_city}`
    });
  };

  const trainDetails = () => {
    if (!howToReach.train_details) {
      return null;
    }

    return _react.default.createElement(_DestinationHowToReach.default, {
      heading: "By Train",
      subHeading: "Nearest Railway Station",
      text: `The nearest railway station in ${placeName} \
          is ${howToReach.train_details.nearest_station} \
          (Code ${howToReach.train_details.station_code})
        `
    });
  };

  const handleClick = value => () => {
    setActiveDetailsTab(value); // document.getElementById('DestinationHighlight').classList.add('hidden-data');
    // document.getElementById('test').classList.remove('removeMe');
  };

  const highLightedTab = () => {
    switch (activeTab) {
      case 'DestinationHighlight':
        return _react.default.createElement("div", {
          className: "row row- p8"
        }, _react.default.createElement(_DestinationHighlight.default, {
          name: placeName,
          description: placeDescription,
          isVisa: isVisa
        }));

      case 'DestinationHotel':
        return _react.default.createElement("div", {
          className: "pt8"
        }, _react.default.createElement(_DestinationHotel.default, {
          hotelDetails: hotelDetails
        }));

      case 'DestinationHowToReach':
        return _react.default.createElement("div", {
          className: "row row- p8"
        }, airportDetails(), trainDetails(), busDetails());

      default:
        return _react.default.createElement(_DestinationHighlight.default, {
          name: placeName,
          description: placeDescription,
          isVisa: isVisa
        });
    }
  };

  return _react.default.createElement("div", {
    className: "row row- sbcw"
  }, _react.default.createElement("div", {
    className: "row row- destination-data"
  }, _react.default.createElement("div", {
    className: "destination-data-label-box"
  }, _react.default.createElement("div", {
    className: "destination-data-label"
  }, _react.default.createElement("input", {
    name: "destinationdata-radio",
    onClick: handleClick('DestinationHighlight'),
    defaultChecked: "true",
    type: "radio",
    id: "Highlights"
  }), _react.default.createElement("label", {
    htmlFor: "Highlights"
  }, "Highlights"), _react.default.createElement("input", {
    name: "destinationdata-radio",
    onClick: handleClick('DestinationHotel'),
    type: "radio",
    id: "Hotel"
  }), _react.default.createElement("label", {
    htmlFor: "Hotel"
  }, "Hotels"), _react.default.createElement("input", {
    name: "destinationdata-radio",
    onClick: handleClick('DestinationHowToReach'),
    type: "radio",
    id: "HowToReach"
  }), _react.default.createElement("label", {
    htmlFor: "HowToReach"
  }, "How To Reach"))), highLightedTab()));
};

DestinationData.propTypes = {
  placeDescription: _propTypes.default.string.isRequired,
  placeName: _propTypes.default.string.isRequired,
  hotelDetails: _propTypes.default.array.isRequired,
  isVisa: _propTypes.default.bool.isRequired,
  howToReach: _propTypes.default.object,
  activeTab: _propTypes.default.string,
  setActiveDetailsTab: _propTypes.default.func.isRequired
};
DestinationData.defaultProps = {
  activeTab: 'DestinationHighlight',
  placeDescription: {
    description: 'Required',
    name: 'Required',
    isVisa: false
  },
  howToReach: {
    airport_details: {},
    bus_details: {},
    train_details: {}
  },
  hotelDetails: {
    hotelName: 'Required'
  }
};
var _default = DestinationData;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationData.scss":
/*!***************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationData.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"destination-data": "_2F81L",
	"destination-data-label-box": "_2Wmcp",
	"destination-data-label": "_2MThL",
	"hidden-data": "_1l8F1"
};

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationHighlight.js":
/*!******************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationHighlight.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ../Generic/ShowMore */ "./app/components/Generic/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
// import './DestinationType.scss';
const HtmlToReactParser = __webpack_require__(/*! html-to-react */ "html-to-react").Parser;

const htmlToReactParser = new HtmlToReactParser();

function breakDescription(description) {
  return {
    wrapText: htmlToReactParser.parse(description.substring(0, description.length / 2)),
    moreText: htmlToReactParser.parse(description.substring(description.length / 2, description.length))
  };
}

const DestinationHighlight = ({
  name,
  description,
  isVisaRequired
}) => _react.default.createElement("div", {
  className: "row row- p8"
}, _react.default.createElement("div", {
  className: "row row- pb15"
}, _react.default.createElement("h2", {
  className: "f16 fw9 pb15"
}, name), _react.default.createElement("div", {
  className: "mb8 text-justify"
}, _react.default.createElement(_ShowMore.default, breakDescription(description)))), _react.default.createElement("p", {
  className: "pt15 pb8"
}, _react.default.createElement("span", {
  className: "fw9"
}, "Visa  On Arrival:"), isVisaRequired ? "Visa Required" : "Visa Not Requied"));

DestinationHighlight.propTypes = {
  name: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  isVisaRequired: _propTypes.default.bool
};
DestinationHighlight.defaultProps = {
  isVisaRequired: false
};
var _default = DestinationHighlight;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationHotel.js":
/*!**************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationHotel.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Hotel = _interopRequireDefault(__webpack_require__(/*! ./Hotel */ "./app/components/DestinationDetail/Hotel.js"));

__webpack_require__(/*! ./DestinationHotel.scss */ "./app/components/DestinationDetail/DestinationHotel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DestinationHotel = ({
  hotelDetails
}) => {
  const hotels = hotelDetails.map(hotelDetail => {
    const cityName = hotelDetail.city_name;
    const image = hotelDetail.hotel_details[0].picture_url;
    const imagekitUrl = hotelDetail.hotel_details[0].imagekit_url;
    const name = hotelDetail.hotel_details[0].name;
    const id = hotelDetail.id;
    const rating = hotelDetail.category || undefined;
    return _react.default.createElement(_Hotel.default, {
      cityName: cityName,
      image: image,
      imagekitUrl: imagekitUrl,
      name: name,
      rating: rating,
      id: id
    });
  });
  return _react.default.createElement("div", {
    className: "row row-8 detail-hotel-slider"
  }, _react.default.createElement("div", {
    className: "detail-hotel-slider-box"
  }, hotels));
};

DestinationHotel.propTypes = {
  hotelDetails: _propTypes.default.array.isRequired
};
var _default = DestinationHotel;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationHotel.scss":
/*!****************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationHotel.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"detail-hotel-slider": "_1T3Fe",
	"detail-hotel-slider-box": "_2b3Tj",
	"detail-hotel-slider-con": "_3cpzO",
	"hotel-slider": "_3nwAF"
};

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationHowToReach.js":
/*!*******************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationHowToReach.js ***!
  \*******************************************************************/
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

const DestinationHowToReach = ({
  heading,
  subHeading,
  text
}) => _react.default.createElement("div", {
  className: "row row- pb8"
}, _react.default.createElement("div", {
  className: "col-xs-3 pl0 pr0"
}, _react.default.createElement("span", {
  className: "fw9 block break-word"
}, heading)), _react.default.createElement("div", {
  className: "col-xs-9 pl0 pr0"
}, _react.default.createElement("span", {
  className: "fw3 f12 pfc4"
}, subHeading), _react.default.createElement("p", {
  className: "pt8"
}, text)));

DestinationHowToReach.propTypes = {
  heading: _propTypes.default.string,
  subHeading: _propTypes.default.string,
  text: _propTypes.default.string
};
DestinationHowToReach.defaultProps = {
  heading: '',
  subHeading: '',
  text: ''
};
var _default = DestinationHowToReach;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationDetail/DestinationPriceDaysCard.js":
/*!**********************************************************************!*\
  !*** ./app/components/DestinationDetail/DestinationPriceDaysCard.js ***!
  \**********************************************************************/
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

const DestinationPriceDaysCard = ({
  minBudget,
  minDays,
  maxDays
}) => _react.default.createElement("div", {
  className: "row row- sbcw pt15 pb15 pl8 pr8"
}, _react.default.createElement("div", {
  className: "col-xs-7 p0"
}, _react.default.createElement("p", {
  className: "f12 fw3 pfc4 pb4"
}, "Package starting from:"), _react.default.createElement("p", {
  className: "f24 fw9 sfc3 pb4"
}, "\u20B9 ", minBudget, "/-"), _react.default.createElement("p", {
  className: "f12 fw3 pfc3"
}, "per person")), _react.default.createElement("div", {
  className: "col-xs-5 p0 text-right"
}, _react.default.createElement("p", {
  className: "f12 fw3 pfc4 pb8"
}, "Recommended Stay"), _react.default.createElement("p", {
  className: "f12 fw9"
}, minDays, " Days to ", maxDays, " Days")));

DestinationPriceDaysCard.propTypes = {
  minBudget: _propTypes.default.number.isRequired,
  minDays: _propTypes.default.number.isRequired,
  maxDays: _propTypes.default.number.isRequired
};
var _default = DestinationPriceDaysCard;
exports.default = _default;

/***/ }),

/***/ "./app/components/DestinationDetail/Hotel.js":
/*!***************************************************!*\
  !*** ./app/components/DestinationDetail/Hotel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _StarRatings = _interopRequireDefault(__webpack_require__(/*! ../Review/StarRatings */ "./app/components/Review/StarRatings.js"));

__webpack_require__(/*! ./DestinationHotel.scss */ "./app/components/DestinationDetail/DestinationHotel.scss");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hotel = ({
  cityName,
  image,
  imagekitUrl,
  name,
  rating,
  id
}) => _react.default.createElement("div", {
  className: "detail-hotel-slider-con"
}, _react.default.createElement("p", null, cityName), _react.default.createElement("div", {
  className: "row row- relative mt8 hotel-slider"
}, _react.default.createElement("div", {
  className: "box-with-layer"
}, _react.default.createElement(_Img.default, {
  src: image,
  ikSrc: imagekitUrl,
  alt: name
}))), _react.default.createElement("div", {
  className: "bs4 p8"
}, _react.default.createElement("span", {
  className: "iblock"
}, name), _react.default.createElement("span", {
  className: "iblock ml5"
}, _react.default.createElement(_StarRatings.default, {
  rating: rating,
  id: id
}))));

Hotel.propTypes = {
  cityName: _propTypes.default.string,
  image: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  rating: _propTypes.default.number,
  id: _propTypes.default.string.isRequired
};
Hotel.defaultProps = {
  cityName: 'City',
  image: '',
  name: 'Hotel',
  rating: 4
};
var _default = Hotel;
exports.default = _default;

/***/ }),

/***/ "./app/components/Form/FormLead/FormOneCTA.js":
/*!****************************************************!*\
  !*** ./app/components/Form/FormLead/FormOneCTA.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _formOneLead = __webpack_require__(/*! reducers/formOneLead */ "./app/reducers/formOneLead.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let FormOneCTA = (_temp = _class = class FormOneCTA extends _react.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      rtProps,
      tag,
      deals,
      budget
    } = this.props; // merge admin comments with the existing ones

    let adminComments = rtProps.adminComments || '';

    if (typeof window !== 'undefined') {
      adminComments = `${adminComments} #Form_filled_on ${window.location.href}`;
    }

    adminComments = ` ${adminComments} ${_segmentEvents.SEGMENT_ADMIN_COMMENT}`;

    const rtripProps = _objectSpread({}, rtProps, {
      adminComments
    });

    (0, _segmentEvents.setCookie)('to_loc', rtProps.to_loc);
    (0, _segmentEvents.setCookie)('trip_days', rtProps.trip_days);
    this.props.clickHandler(); // update the value on store

    this.props.updateFromOneProps(rtripProps); // change the url

    if (deals) {
      this.props.pushState(`/requested_trips/new?deals=true&tag=${tag}&budget=${budget}`);
    } else {
      this.props.pushState('/requested_trips/new');
    }
  }

  render() {
    return _react.default.createElement("button", {
      className: "wfull",
      onClick: this.handleClick
    }, this.props.children);
  }

}, _class.propTypes = {
  rtProps: _propTypes.default.object,
  updateFromOneProps: _propTypes.default.func.isRequired,
  pushState: _propTypes.default.func.isRequired,
  deals: _propTypes.default.bool,
  clickHandler: _propTypes.default.func,
  tag: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]),
  budget: _propTypes.default.string
}, _class.defaultProps = {
  rtProps: {},
  clickHandler: () => {},
  children: [],
  deals: false,
  tag: '',
  budget: ''
}, _temp);

var _default = (0, _reactRedux.connect)(null, {
  updateFromOneProps: _formOneLead.updateFromOneProps,
  pushState: _reactRouterRedux.push
})(FormOneCTA);

exports.default = _default;

/***/ }),

/***/ "./app/containers/DestinationDetail/DestinationDetailAsync.js":
/*!********************************************************************!*\
  !*** ./app/containers/DestinationDetail/DestinationDetailAsync.js ***!
  \********************************************************************/
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

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

var _DestinationBanner = _interopRequireDefault(__webpack_require__(/*! ../../components/DestinationDetail/DestinationBanner */ "./app/components/DestinationDetail/DestinationBanner.js"));

var _DestinationPriceDaysCard = _interopRequireDefault(__webpack_require__(/*! ../../components/DestinationDetail/DestinationPriceDaysCard */ "./app/components/DestinationDetail/DestinationPriceDaysCard.js"));

var _DestinationData = _interopRequireDefault(__webpack_require__(/*! ../../components/DestinationDetail/DestinationData */ "./app/components/DestinationDetail/DestinationData.js"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! ../../components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _AnimatedBanner = _interopRequireDefault(__webpack_require__(/*! ../../components/AnimatedBanner/AnimatedBanner */ "./app/components/AnimatedBanner/AnimatedBanner.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let DestinationDetailAsync = (_temp = _class = class DestinationDetailAsync extends _react.Component {
  renderHelmet(pageLinks) {
    return _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("meta", {
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
      href: `https://traveltriangle.com/travel-to/${pageLinks.link}`
    }), _react.default.createElement("meta", {
      property: "al:android:url",
      content: `tts://traveltriangle.com/travel-to/${pageLinks.link}`
    }), _react.default.createElement("meta", {
      property: "al:android:package",
      content: "com.traveltriangle.traveller"
    }), _react.default.createElement("meta", {
      property: "al:android:app_name",
      content: "TravelTriangle-Holiday Package"
    }), _react.default.createElement("meta", {
      property: "og:title",
      content: pageLinks.link
    }), _react.default.createElement("meta", {
      property: "og:type",
      content: "website"
    }), _react.default.createElement("meta", {
      property: "al:ios:url",
      content: `https://traveltriangle.com/travel-to/${pageLinks.link}`
    }), _react.default.createElement("meta", {
      property: "al:ios:app_store_id",
      content: "1152358066"
    }), _react.default.createElement("meta", {
      property: "al:ios:app_name",
      content: "TravelTriangle"
    }), _react.default.createElement("meta", {
      httpEquiv: "Content-Type",
      content: "text/html; charset=utf-8"
    }), _react.default.createElement("meta", {
      property: "fb:app_id",
      content: "168534953203541"
    }), _react.default.createElement("meta", {
      name: "category",
      content: `Destination:${pageLinks.title}`
    }), _react.default.createElement("title", null, pageLinks.title));
  }

  render() {
    const destinationDetail = this.props.destinationDetail;
    const destinationPriceAndDays = {
      minBudget: destinationDetail.destination.min_budget,
      maxBudget: destinationDetail.destination.max_budget,
      minDays: destinationDetail.destination.min_days,
      maxDays: destinationDetail.destination.max_days,
      personLimit: destinationDetail.destination.person_limit
    };
    const destinationDetails = {
      placeDescription: destinationDetail.destination.description,
      placeName: destinationDetail.destination.name,
      hotelDetails: destinationDetail.destination.hotel_details,
      isVisa: destinationDetail.destination.is_visa_required,
      howToReach: destinationDetail.destination.passage_details || {}
    };
    const destinationBanner = {
      bestTimeToVisit: destinationDetail.destination.best_time_to_visit,
      imageUrl: destinationDetail.destination.image,
      imagekitUrl: destinationDetail.destination.imagekit_url
    };
    const ctaText = 'Build Your Own Packages';
    const section = 'Bottom Bar';
    const object = `Destination/${destinationDetail.destination.id}`;

    const trackClickEvent = () => {
      this.props.trackLeadFunnelClick({
        section,
        object,
        cta: ctaText,
        category: object,
        funnelStep: 1,
        destinationId: destinationDetail.destination.id,
        destinationName: destinationDetail.destination.name
      });
    };

    const pageLinks = {};

    try {
      pageLinks.title = destinationDetail.destination.name;
      pageLinks.link = `${destinationDetail.destination.id}-${destinationDetail.destination.name}`;
    } catch (e) {
      pageLinks.title = 'Holiday packages';
      pageLinks.link = '173-punjab';
    }

    return _react.default.createElement("div", {
      className: "row row- pb64"
    }, this.renderHelmet(pageLinks), _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_HeaderTitle.default, {
      title: destinationDetail.destination.name
    }), _react.default.createElement(_DestinationBanner.default, destinationBanner), _react.default.createElement("div", {
      className: "row row- p8 sbc5"
    }, _react.default.createElement(_DestinationPriceDaysCard.default, destinationPriceAndDays)), _react.default.createElement("div", {
      className: "row row- p8 sbc5"
    }, _react.default.createElement(_DestinationData.default, _extends({
      setActiveDetailsTab: this.props.setActiveDetailsTab,
      activeTab: this.props.activeTab
    }, destinationDetails))), _react.default.createElement("div", {
      className: "row row- p8 sbcw z4 fixed b0 wfull l0 bs4"
    }, _react.default.createElement(_FormOneCTA.default, {
      rtProps: {
        to_loc: destinationDetail.destination.name
      },
      clickHandler: trackClickEvent
    }, _react.default.createElement("div", {
      className: "btn-filled-pri-large wfull pl8 pr8"
    }, _react.default.createElement("div", {
      className: "wave"
    }), ctaText))));
  }

}, _class.propTypes = {
  destinationDetail: _propTypes.default.object.isRequired,
  setActiveDetailsTab: _propTypes.default.func.isRequired,
  activeTab: _propTypes.default.string,
  trackLeadFunnelClick: _propTypes.default.func.isRequired
}, _class.defaultProps = {
  activeTab: null,
  trackLeadFunnelClick: () => {}
}, _temp);
var _default = DestinationDetailAsync;
exports.default = _default;

/***/ }),

/***/ "./app/reducers/animatedBanner.js":
/*!****************************************!*\
  !*** ./app/reducers/animatedBanner.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
exports.isLoaded = isLoaded;
exports.isContent = isContent;
exports.content = content;
exports.loadContent = loadContent;

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const LOAD = 'animatedBanner/LOAD';
const LOAD_SUCCESS = 'animatedBanner/LOAD_SUCCESS';
const LOAD_FAIL = 'animatedBanner/LOAD_FAIL';
const initialState = {
  loaded: false,
  banner: {}
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return _objectSpread({}, state, {
        loaded: false,
        loading: true
      });

    case LOAD_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        loaded: true,
        error: null,
        banner: action.result
      });

    case LOAD_FAIL:
      return _objectSpread({}, state, {
        loading: false,
        loaded: false,
        error: action.error.errors || action.error,
        banner: {}
      });

    default:
      return state;
  }
}

function isLoaded(globalState) {
  return globalState.banner && globalState.banner.loaded;
}

function isContent(globalState) {
  try {
    return globalState.banner.banner.success;
  } catch (e) {
    return false;
  }
}

function content(globalState) {
  try {
    return globalState.banner.banner.data.banner;
  } catch (e) {
    return {};
  }
}

function loadContent(params) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(_appConfig.default.apiEndpoints.animatedBanner.url, {
      params,
      hostType: _appConfig.default.apiEndpoints.animatedBanner.host
    })
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BbmltYXRlZEJhbm5lci9BbmltYXRlZEJhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BbmltYXRlZEJhbm5lci9BbmltYXRlZEJhbm5lci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uRGV0YWlsL0Rlc3RpbmF0aW9uQmFubmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uRGV0YWlsL0Rlc3RpbmF0aW9uQmFubmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRGVzdGluYXRpb25EZXRhaWwvRGVzdGluYXRpb25EYXRhLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uRGV0YWlsL0Rlc3RpbmF0aW9uRGF0YS5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uRGV0YWlsL0Rlc3RpbmF0aW9uSGlnaGxpZ2h0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uRGV0YWlsL0Rlc3RpbmF0aW9uSG90ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRGVzdGluYXRpb25EZXRhaWwvRGVzdGluYXRpb25Ib3RlbC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Rlc3RpbmF0aW9uRGV0YWlsL0Rlc3RpbmF0aW9uSG93VG9SZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9EZXN0aW5hdGlvbkRldGFpbC9EZXN0aW5hdGlvblByaWNlRGF5c0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRGVzdGluYXRpb25EZXRhaWwvSG90ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9ybS9Gb3JtTGVhZC9Gb3JtT25lQ1RBLmpzIiwid2VicGFjazovLy8uL2FwcC9jb250YWluZXJzL0Rlc3RpbmF0aW9uRGV0YWlsL0Rlc3RpbmF0aW9uRGV0YWlsQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlZHVjZXJzL2FuaW1hdGVkQmFubmVyLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGVkQmFubmVyIiwic3RhdGUiLCJpc0xvYWRlZCIsImlzQ29udGVudCIsImNvbnRlbnQiLCJsb2FkQ29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJpc0Jhbm5lckNvbnRlbnQiLCJiYW5uZXJTaG93Iiwic2hvdyIsImZpcnN0U2Nyb2xsIiwiY2xvc2VCYW5uZXIiLCJiaW5kIiwic2V0U2Nyb2xsIiwiaXNDb21wb25lbnRSZW5kZXJlZCIsImNvbXBvbmVudERpZE1vdW50IiwicGFnZVBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHJvcHMiLCJwYXRoIiwiY2xlYXJTY3JvbGxFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsInNldFN0YXRlIiwid2luSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib2R5IiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImRvY0hlaWdodCIsIk1hdGgiLCJtYXgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ2YWx1ZSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwicGVyY2VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXIiLCJkYXRhIiwicmVkaXJlY3RfdXJsIiwidGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIk1vbnRoUmFuZ2UiLCJiZXN0VGltZVRvVmlzaXQiLCJtb250aCIsInNwbGl0IiwibGVuZ3RoIiwic3RhcnRNb250aCIsIkRhdGVVdGlscyIsIm51bWJlclRvTW9udGgiLCJwYXJzZUludCIsImVuZE1vbnRoIiwic3RyaW5nIiwidW5kZWZpbmVkIiwiRGVzdGluYXRpb25CYW5uZXIiLCJpbWFnZVVybCIsImltYWdla2l0VXJsIiwiRGVzdGluYXRpb25EYXRhIiwicGxhY2VEZXNjcmlwdGlvbiIsInBsYWNlTmFtZSIsImhvdGVsRGV0YWlscyIsImlzVmlzYSIsImhvd1RvUmVhY2giLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVEZXRhaWxzVGFiIiwiYWlycG9ydERldGFpbHMiLCJhaXJwb3J0X2RldGFpbHMiLCJuZWFyZXN0X2FpcnBvcnQiLCJhaXJwb3J0X2NvZGUiLCJidXNEZXRhaWxzIiwiYnVzX2RldGFpbHMiLCJyb2FkX2NpdHkiLCJ0cmFpbkRldGFpbHMiLCJ0cmFpbl9kZXRhaWxzIiwibmVhcmVzdF9zdGF0aW9uIiwic3RhdGlvbl9jb2RlIiwiaGFuZGxlQ2xpY2siLCJoaWdoTGlnaHRlZFRhYiIsImFycmF5IiwiZGVzY3JpcHRpb24iLCJuYW1lIiwiaG90ZWxOYW1lIiwiSHRtbFRvUmVhY3RQYXJzZXIiLCJyZXF1aXJlIiwiUGFyc2VyIiwiaHRtbFRvUmVhY3RQYXJzZXIiLCJicmVha0Rlc2NyaXB0aW9uIiwid3JhcFRleHQiLCJwYXJzZSIsInN1YnN0cmluZyIsIm1vcmVUZXh0IiwiRGVzdGluYXRpb25IaWdobGlnaHQiLCJpc1Zpc2FSZXF1aXJlZCIsIkRlc3RpbmF0aW9uSG90ZWwiLCJob3RlbHMiLCJtYXAiLCJob3RlbERldGFpbCIsImNpdHlOYW1lIiwiY2l0eV9uYW1lIiwiaW1hZ2UiLCJob3RlbF9kZXRhaWxzIiwicGljdHVyZV91cmwiLCJpbWFnZWtpdF91cmwiLCJpZCIsInJhdGluZyIsImNhdGVnb3J5IiwiRGVzdGluYXRpb25Ib3dUb1JlYWNoIiwiaGVhZGluZyIsInN1YkhlYWRpbmciLCJEZXN0aW5hdGlvblByaWNlRGF5c0NhcmQiLCJtaW5CdWRnZXQiLCJtaW5EYXlzIiwibWF4RGF5cyIsIm51bWJlciIsIkhvdGVsIiwiRm9ybU9uZUNUQSIsInJ0UHJvcHMiLCJ0YWciLCJkZWFscyIsImJ1ZGdldCIsImFkbWluQ29tbWVudHMiLCJocmVmIiwiU0VHTUVOVF9BRE1JTl9DT01NRU5UIiwicnRyaXBQcm9wcyIsInRvX2xvYyIsInRyaXBfZGF5cyIsImNsaWNrSGFuZGxlciIsInVwZGF0ZUZyb21PbmVQcm9wcyIsInB1c2hTdGF0ZSIsImNoaWxkcmVuIiwib25lT2ZUeXBlIiwiRGVzdGluYXRpb25EZXRhaWxBc3luYyIsInJlbmRlckhlbG1ldCIsInBhZ2VMaW5rcyIsImxpbmsiLCJ0aXRsZSIsImRlc3RpbmF0aW9uRGV0YWlsIiwiZGVzdGluYXRpb25QcmljZUFuZERheXMiLCJkZXN0aW5hdGlvbiIsIm1pbl9idWRnZXQiLCJtYXhCdWRnZXQiLCJtYXhfYnVkZ2V0IiwibWluX2RheXMiLCJtYXhfZGF5cyIsInBlcnNvbkxpbWl0IiwicGVyc29uX2xpbWl0IiwiZGVzdGluYXRpb25EZXRhaWxzIiwiaXNfdmlzYV9yZXF1aXJlZCIsInBhc3NhZ2VfZGV0YWlscyIsImRlc3RpbmF0aW9uQmFubmVyIiwiYmVzdF90aW1lX3RvX3Zpc2l0IiwiY3RhVGV4dCIsInNlY3Rpb24iLCJ0cmFja0NsaWNrRXZlbnQiLCJ0cmFja0xlYWRGdW5uZWxDbGljayIsImN0YSIsImZ1bm5lbFN0ZXAiLCJkZXN0aW5hdGlvbklkIiwiZGVzdGluYXRpb25OYW1lIiwiTE9BRCIsIkxPQURfU1VDQ0VTUyIsIkxPQURfRkFJTCIsImluaXRpYWxTdGF0ZSIsImxvYWRlZCIsImJhbm5lciIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwibG9hZGluZyIsImVycm9yIiwicmVzdWx0IiwiZXJyb3JzIiwiZ2xvYmFsU3RhdGUiLCJzdWNjZXNzIiwicGFyYW1zIiwidHlwZXMiLCJwcm9taXNlIiwiY2xpZW50IiwiZ2V0IiwiY29uZmlnIiwiYXBpRW5kcG9pbnRzIiwiYW5pbWF0ZWRC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QW1CQSxNQUFuQixDQUEwQlMsT0FBakM7QUFDRCxHQUZELENBRUUsT0FBT2hKLENBQVAsRUFBVTtBQUNWLFdBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRU0sU0FBUzVDLE9BQVQsQ0FBaUIyTCxXQUFqQixFQUE4QjtBQUNuQyxNQUFJO0FBQ0YsV0FBT0EsWUFBWVIsTUFBWixDQUFtQkEsTUFBbkIsQ0FBMEJwSSxJQUExQixDQUErQm9JLE1BQXRDO0FBQ0QsR0FGRCxDQUVFLE9BQU92SSxDQUFQLEVBQVU7QUFDVixXQUFPLEVBQVA7QUFDRDtBQUNGOztBQUVNLFNBQVMzQyxXQUFULENBQXFCNEwsTUFBckIsRUFBNkI7QUFDbEMsU0FBTztBQUNMQyxXQUFPLENBQUNoQixJQUFELEVBQU9DLFlBQVAsRUFBcUJDLFNBQXJCLENBREY7QUFFTGUsYUFBU0MsVUFBVUEsT0FBT0MsR0FBUCxDQUNqQkMsbUJBQU9DLFlBQVAsQ0FBb0JDLGNBQXBCLENBQW1DQyxHQURsQixFQUVqQjtBQUNFUixZQURGO0FBQ1VTLGdCQUFVSixtQkFBT0MsWUFBUCxDQUFvQkMsY0FBcEIsQ0FBbUNHO0FBRHZELEtBRmlCO0FBRmQsR0FBUDtBQVNELEMiLCJmaWxlIjoiZGVzdGluYXRpb24tZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BbmltYXRlZEJhbm5lci5zY3NzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1xuICBOb3RpZmljYXRpb25CZWxsLFxuICBDbG9zZVdoaXRlXG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuaW1wb3J0IHtcbiAgaXNMb2FkZWQsXG4gIGxvYWRDb250ZW50LFxuICBpc0NvbnRlbnQsXG4gIGNvbnRlbnQsXG59IGZyb20gJ3JlZHVjZXJzL2FuaW1hdGVkQmFubmVyJztcblxuXG5AY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBpc0xvYWRlZDogaXNMb2FkZWQoc3RhdGUpLFxuICAgIGlzQ29udGVudDogaXNDb250ZW50KHN0YXRlKSxcbiAgICBjb250ZW50OiBjb250ZW50KHN0YXRlKVxuICB9KSxcbiAge1xuICAgIGxvYWRDb250ZW50XG4gIH1cbilcblxuY2xhc3MgQW5pbWF0ZWRCYW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlzQ29udGVudDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBsb2FkQ29udGVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGVudDoge30sXG4gICAgbG9hZENvbnRlbnQ6ICgpID0+IHt9LFxuICAgIGlzQ29udGVudDogZmFsc2VcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNCYW5uZXJDb250ZW50OiBmYWxzZSxcbiAgICAgIGJhbm5lclNob3c6IGZhbHNlLFxuICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgIGZpcnN0U2Nyb2xsOiB0cnVlXG4gICAgfTtcbiAgICB0aGlzLmNsb3NlQmFubmVyID0gdGhpcy5jbG9zZUJhbm5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2Nyb2xsID0gdGhpcy5zZXRTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlzQ29tcG9uZW50UmVuZGVyZWQgPSB0aGlzLmlzQ29tcG9uZW50UmVuZGVyZWQuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgcGFnZVBhdGggPSAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhZ2VQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmxvYWRDb250ZW50KHtcbiAgICAgIHBhdGg6IHBhZ2VQYXRoXG4gICAgfSk7XG4gIH1cbiAgY2xlYXJTY3JvbGxFdmVudCgpe1xuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2V0U2Nyb2xsKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhclNjcm9sbEV2ZW50KCk7XG4gIH1cbiAgc2V0U2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmZpcnN0U2Nyb2xsKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRlZC1iYW5uZXItdScpLnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZpcnN0U2Nyb2xsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxldCBiYW5uZXJTaG93ID0gZmFsc2U7XG4gICAgICBjb25zdCB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBkb2NIZWlnaHQgPSBNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHxcbiAgICAgIDA7XG4gICAgICBjb25zdCBtYXggPSBkb2NIZWlnaHQgLSB3aW5IZWlnaHQ7XG4gICAgICBjb25zdCBwZXJjZW50ID0gKHZhbHVlIC8gbWF4KSAqIDEwMDtcbiAgICAgIGlmIChwZXJjZW50ID49IDEwKSB7XG4gICAgICAgIGJhbm5lclNob3cgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFubmVyU2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuYmFubmVyU2hvdyAhPT0gYmFubmVyU2hvdykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBiYW5uZXJTaG93XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpc0NvbXBvbmVudFJlbmRlcmVkKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNldFNjcm9sbCk7XG4gIH1cbiAgY2xvc2VCYW5uZXIoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYmFubmVyU2hvdzogZmFsc2UsXG4gICAgICBzaG93OiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNDb250ZW50KSB7XG4gICAgICB0aGlzLmNsZWFyU2Nyb2xsRXZlbnQoKTtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cbiAgICB0aGlzLmlzQ29tcG9uZW50UmVuZGVyZWQoKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5jb250ZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiYW5pbWF0ZWQtYmFubmVyLXVcIiBzdHlsZT17eyB0b3A6ICctMTAwcHgnIH19IGNsYXNzTmFtZT17KHRoaXMuc3RhdGUuYmFubmVyU2hvdykgPyAnY2xlYXJmaXggZml4ZWQgd2Z1bGwgdDAgcGJjMSBhbmltYXRlZC1zdGlja3ktZm9vdGVyIHNob3dGb290ZXInIDogJ2NsZWFyZml4IGZpeGVkIHdmdWxsIHQwIHBiYzEgYW5pbWF0ZWQtc3RpY2t5LWZvb3Rlcid9PlxuICAgICAgICA8YSBocmVmPXtkYXRhLnJlZGlyZWN0X3VybH0gY2xhc3NOYW1lPSdjb2wteHMtMTIgcDAgYmxvY2snPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZS1jZW50ZXItdiBsNSc+PHNwYW4gY2xhc3NOYW1lPSdpY29uLXNwYW4nPjxOb3RpZmljYXRpb25CZWxsIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYW5uLWNvbnRlbnQtZGl2IGNvbC14cy0xMSBzZmN3IGYxNCc+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J20wJz5IZXkgdGhlcmUhPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtMCBmdzknPntkYXRhLnRleHR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMSBwMCB0ZXh0LXJpZ2h0Jz48YnV0dG9uIGNsYXNzTmFtZT0nY2xvc2UtaWNvbiBpYmxvY2snIG9uQ2xpY2s9e3RoaXMuY2xvc2VCYW5uZXJ9PjxDbG9zZVdoaXRlIC8+PC9idXR0b24+PC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRCYW5uZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uLXNwYW5cIjogXCJfMlhvTm1cIixcblx0XCJjbG9zZS1pY29uXCI6IFwiX1hjVnd1XCIsXG5cdFwiYmFubi1jb250ZW50LWRpdlwiOiBcIl9GY21IWlwiLFxuXHRcImFuaW1hdGVkLXN0aWNreS1mb290ZXJcIjogXCJfMkFKY0dcIixcblx0XCJzaG93Rm9vdGVyXCI6IFwiXzJIT25YXCIsXG5cdFwiYW5pbWF0ZWQtZm9vdGVyLXRyYW5zaXRpb25cIjogXCJfUTJoWmhcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL0Rlc3RpbmF0aW9uQmFubmVyLnNjc3MnO1xuaW1wb3J0ICogYXMgRGF0ZVV0aWxzIGZyb20gJy4uLy4uL2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5jb25zdCBNb250aFJhbmdlID0gKHsgYmVzdFRpbWVUb1Zpc2l0IH0pID0+IHtcbiAgaWYgKCFiZXN0VGltZVRvVmlzaXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBtb250aCA9IGJlc3RUaW1lVG9WaXNpdC5zcGxpdCgnLi4nKTtcbiAgaWYgKG1vbnRoLmxlbmd0aCAhPT0gMikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHN0YXJ0TW9udGggPSBEYXRlVXRpbHMubnVtYmVyVG9Nb250aChwYXJzZUludChtb250aFswXSwgMTApKTtcbiAgY29uc3QgZW5kTW9udGggPSBEYXRlVXRpbHMubnVtYmVyVG9Nb250aChwYXJzZUludChtb250aFsxXSwgMTApKTtcbiAgcmV0dXJuIChcbiAgICA8cCBjbGFzc05hbWU9J2YxNCBzZmN3IHVwcGVyY2FzZSc+e3N0YXJ0TW9udGh9LXtlbmRNb250aH08L3A+XG4gICk7XG59O1xuTW9udGhSYW5nZS5wcm9wVHlwZXMgPSB7XG4gIGJlc3RUaW1lVG9WaXNpdDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5Nb250aFJhbmdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmVzdFRpbWVUb1Zpc2l0OiB1bmRlZmluZWQsXG59O1xuXG5jb25zdCBEZXN0aW5hdGlvbkJhbm5lciA9ICh7IGltYWdlVXJsLCBpbWFnZWtpdFVybCwgYmVzdFRpbWVUb1Zpc2l0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHJlbGF0aXZlIGRlc3RpbmF0aW9uLWJhbm5lcicgPlxuICAgIDxJbWcgc3JjPXtpbWFnZVVybH0gaWtTcmM9e2ltYWdla2l0VXJsfSBhbHQ9XCJ0dFwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHQxMCBsMTAgejInPlxuICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgc2Zjdyc+QmVzdCB0aW1lOjwvcD5cbiAgICAgIDxNb250aFJhbmdlIGJlc3RUaW1lVG9WaXNpdD17YmVzdFRpbWVUb1Zpc2l0fSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkRlc3RpbmF0aW9uQmFubmVyLnByb3BUeXBlcyA9IHtcbiAgaW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2VraXRVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYmVzdFRpbWVUb1Zpc2l0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uQmFubmVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGVzdGluYXRpb24tYmFubmVyXCI6IFwiXzJCSDUtXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9EZXN0aW5hdGlvbkRhdGEuc2Nzcyc7XG5pbXBvcnQgRGVzdGluYXRpb25IaWdobGlnaHQgZnJvbSAnLi9EZXN0aW5hdGlvbkhpZ2hsaWdodCc7XG5pbXBvcnQgRGVzdGluYXRpb25Ib3RlbCBmcm9tICcuL0Rlc3RpbmF0aW9uSG90ZWwnO1xuaW1wb3J0IERlc3RpbmF0aW9uSG93VG9SZWFjaCBmcm9tICcuL0Rlc3RpbmF0aW9uSG93VG9SZWFjaCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbmNvbnN0IERlc3RpbmF0aW9uRGF0YSA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZURlc2NyaXB0aW9uLCBwbGFjZU5hbWUsIGhvdGVsRGV0YWlscywgaXNWaXNhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaG93VG9SZWFjaCwgYWN0aXZlVGFiLCBzZXRBY3RpdmVEZXRhaWxzVGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBjb25zdCBhaXJwb3J0RGV0YWlscyA9ICgpID0+IHtcbiAgICBpZiAoIWhvd1RvUmVhY2guYWlycG9ydF9kZXRhaWxzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxEZXN0aW5hdGlvbkhvd1RvUmVhY2hcbiAgICAgICAgaGVhZGluZz1cIkJ5IEFpclwiXG4gICAgICAgIHN1YkhlYWRpbmc9XCJOZWFyZXN0IEFpcnBvcnRcIlxuICAgICAgICB0ZXh0PXtgVGhlIG1ham9yIGFpcnBvcnQgaW4gJHtwbGFjZU5hbWV9IGlzIFxcXG4gICAgICAgICR7aG93VG9SZWFjaC5haXJwb3J0X2RldGFpbHMubmVhcmVzdF9haXJwb3J0fSBcXFxuICAgICAgICAoQ29kZSAke2hvd1RvUmVhY2guYWlycG9ydF9kZXRhaWxzLmFpcnBvcnRfY29kZX0pYH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcbiAgY29uc3QgYnVzRGV0YWlscyA9ICgpID0+IHtcbiAgICBpZiAoIWhvd1RvUmVhY2guYnVzX2RldGFpbHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPERlc3RpbmF0aW9uSG93VG9SZWFjaFxuICAgICAgICBoZWFkaW5nPVwiQnkgUm9hZFwiXG4gICAgICAgIHN1YkhlYWRpbmc9XCJNYWpvciBCdXMgU3RhbmRcIlxuICAgICAgICB0ZXh0PXtgVGhlIG1ham9yIHN0YW5kIGluICR7cGxhY2VOYW1lfSBpcyBcXFxuICAgICAgICAke2hvd1RvUmVhY2guYnVzX2RldGFpbHMucm9hZF9jaXR5fWB9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG4gIGNvbnN0IHRyYWluRGV0YWlscyA9ICgpID0+IHtcbiAgICBpZiAoIWhvd1RvUmVhY2gudHJhaW5fZGV0YWlscykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8RGVzdGluYXRpb25Ib3dUb1JlYWNoXG4gICAgICAgIGhlYWRpbmc9XCJCeSBUcmFpblwiXG4gICAgICAgIHN1YkhlYWRpbmc9XCJOZWFyZXN0IFJhaWx3YXkgU3RhdGlvblwiXG4gICAgICAgIHRleHQ9e2BUaGUgbmVhcmVzdCByYWlsd2F5IHN0YXRpb24gaW4gJHtwbGFjZU5hbWV9IFxcXG4gICAgICAgICAgaXMgJHtob3dUb1JlYWNoLnRyYWluX2RldGFpbHMubmVhcmVzdF9zdGF0aW9ufSBcXFxuICAgICAgICAgIChDb2RlICR7aG93VG9SZWFjaC50cmFpbl9kZXRhaWxzLnN0YXRpb25fY29kZX0pXG4gICAgICAgIGAgfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbGljayA9IHZhbHVlID0+ICgpID0+IHtcbiAgICBzZXRBY3RpdmVEZXRhaWxzVGFiKHZhbHVlKTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVzdGluYXRpb25IaWdobGlnaHQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tZGF0YScpO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0JykuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlTWUnKTtcbiAgfTtcblxuICBjb25zdCBoaWdoTGlnaHRlZFRhYiA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGl2ZVRhYikge1xuICAgICAgY2FzZSAnRGVzdGluYXRpb25IaWdobGlnaHQnOlxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBwOCc+XG4gICAgICAgICAgPERlc3RpbmF0aW9uSGlnaGxpZ2h0XG4gICAgICAgICAgICBuYW1lPXtwbGFjZU5hbWV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cGxhY2VEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGlzVmlzYT17aXNWaXNhfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgICBjYXNlICdEZXN0aW5hdGlvbkhvdGVsJzpcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT0ncHQ4Jz48RGVzdGluYXRpb25Ib3RlbCBob3RlbERldGFpbHM9e2hvdGVsRGV0YWlsc30gLz48L2Rpdj4pO1xuICAgICAgY2FzZSAnRGVzdGluYXRpb25Ib3dUb1JlYWNoJzpcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0gcDgnPlxuICAgICAgICAgIHsgYWlycG9ydERldGFpbHMoKSB9XG4gICAgICAgICAgeyB0cmFpbkRldGFpbHMoKSB9XG4gICAgICAgICAgeyBidXNEZXRhaWxzKCkgfVxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICg8RGVzdGluYXRpb25IaWdobGlnaHRcbiAgICAgICAgICBuYW1lPXtwbGFjZU5hbWV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e3BsYWNlRGVzY3JpcHRpb259XG4gICAgICAgICAgaXNWaXNhPXtpc1Zpc2F9XG4gICAgICAgIC8+KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9ICdyb3cgcm93LSBzYmN3Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSAncm93IHJvdy0gZGVzdGluYXRpb24tZGF0YSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXN0aW5hdGlvbi1kYXRhLWxhYmVsLWJveCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc3RpbmF0aW9uLWRhdGEtbGFiZWwnPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkZXN0aW5hdGlvbmRhdGEtcmFkaW9cIiBvbkNsaWNrPXtoYW5kbGVDbGljaygnRGVzdGluYXRpb25IaWdobGlnaHQnKX0gZGVmYXVsdENoZWNrZWQ9XCJ0cnVlXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJIaWdobGlnaHRzXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiSGlnaGxpZ2h0c1wiPkhpZ2hsaWdodHM8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkZXN0aW5hdGlvbmRhdGEtcmFkaW9cIiBvbkNsaWNrPXtoYW5kbGVDbGljaygnRGVzdGluYXRpb25Ib3RlbCcpfSB0eXBlPVwicmFkaW9cIiBpZD1cIkhvdGVsXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiSG90ZWxcIiA+SG90ZWxzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZGVzdGluYXRpb25kYXRhLXJhZGlvXCIgb25DbGljaz17aGFuZGxlQ2xpY2soJ0Rlc3RpbmF0aW9uSG93VG9SZWFjaCcpfSB0eXBlPVwicmFkaW9cIiBpZD1cIkhvd1RvUmVhY2hcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJIb3dUb1JlYWNoXCIgPkhvdyBUbyBSZWFjaDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aGlnaExpZ2h0ZWRUYWIoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRGVzdGluYXRpb25EYXRhLnByb3BUeXBlcyA9IHtcbiAgcGxhY2VEZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaG90ZWxEZXRhaWxzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXNWaXNhOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBob3dUb1JlYWNoOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3RpdmVUYWI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNldEFjdGl2ZURldGFpbHNUYWI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbkRlc3RpbmF0aW9uRGF0YS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZVRhYjogJ0Rlc3RpbmF0aW9uSGlnaGxpZ2h0JyxcbiAgcGxhY2VEZXNjcmlwdGlvbjoge1xuICAgIGRlc2NyaXB0aW9uOiAnUmVxdWlyZWQnLFxuICAgIG5hbWU6ICdSZXF1aXJlZCcsXG4gICAgaXNWaXNhOiBmYWxzZVxuICB9LFxuICBob3dUb1JlYWNoOiB7XG4gICAgYWlycG9ydF9kZXRhaWxzOiB7fSxcbiAgICBidXNfZGV0YWlsczoge30sXG4gICAgdHJhaW5fZGV0YWlsczoge30sXG4gIH0sXG4gIGhvdGVsRGV0YWlsczoge1xuICAgIGhvdGVsTmFtZTogJ1JlcXVpcmVkJ1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uRGF0YTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRlc3RpbmF0aW9uLWRhdGFcIjogXCJfMkY4MUxcIixcblx0XCJkZXN0aW5hdGlvbi1kYXRhLWxhYmVsLWJveFwiOiBcIl8yV21jcFwiLFxuXHRcImRlc3RpbmF0aW9uLWRhdGEtbGFiZWxcIjogXCJfMk1UaExcIixcblx0XCJoaWRkZW4tZGF0YVwiOiBcIl8xbDhGMVwiXG59OyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge1xuICBCbHVlRG93bkFycm93XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbi8vIGltcG9ydCAnLi9EZXN0aW5hdGlvblR5cGUuc2Nzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNob3dNb3JlIGZyb20gJy4uL0dlbmVyaWMvU2hvd01vcmUnO1xuXG5jb25zdCBIdG1sVG9SZWFjdFBhcnNlciA9IHJlcXVpcmUoJ2h0bWwtdG8tcmVhY3QnKS5QYXJzZXI7XG5cbmNvbnN0IGh0bWxUb1JlYWN0UGFyc2VyID0gbmV3IEh0bWxUb1JlYWN0UGFyc2VyKCk7XG5cbmZ1bmN0aW9uIGJyZWFrRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwVGV4dDogaHRtbFRvUmVhY3RQYXJzZXIucGFyc2UoZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIGRlc2NyaXB0aW9uLmxlbmd0aC8yKSksXG4gICAgbW9yZVRleHQ6IGh0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKGRlc2NyaXB0aW9uLnN1YnN0cmluZyhkZXNjcmlwdGlvbi5sZW5ndGgvMiwgZGVzY3JpcHRpb24ubGVuZ3RoKSlcbiAgfVxufVxuXG5jb25zdCBEZXN0aW5hdGlvbkhpZ2hsaWdodCA9ICh7IG5hbWUsIGRlc2NyaXB0aW9uLCBpc1Zpc2FSZXF1aXJlZCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBwOCc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHBiMTUnPlxuICAgICAgPGgyIGNsYXNzTmFtZT0nZjE2IGZ3OSBwYjE1Jz57bmFtZX08L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iOCB0ZXh0LWp1c3RpZnknPlxuICAgICAgICA8U2hvd01vcmUgey4uLmJyZWFrRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3NOYW1lPSdwdDE1IHBiOCc+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2Z3OSc+VmlzYSAgT24gQXJyaXZhbDo8L3NwYW4+XG4gICAgICB7KGlzVmlzYVJlcXVpcmVkKSA/IFwiVmlzYSBSZXF1aXJlZFwiIDogXCJWaXNhIE5vdCBSZXF1aWVkXCJ9XG4gICAgPC9wPlxuICA8L2Rpdj5cbik7XG5cbkRlc3RpbmF0aW9uSGlnaGxpZ2h0LnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpc1Zpc2FSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2xcblxufTtcbkRlc3RpbmF0aW9uSGlnaGxpZ2h0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNWaXNhUmVxdWlyZWQ6IGZhbHNlXG59XG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkhpZ2hsaWdodDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhvdGVsIGZyb20gJy4vSG90ZWwnO1xuaW1wb3J0ICcuL0Rlc3RpbmF0aW9uSG90ZWwuc2Nzcyc7XG5cblxuY29uc3QgRGVzdGluYXRpb25Ib3RlbCA9ICh7IGhvdGVsRGV0YWlscyB9KSA9PiB7XG4gIGNvbnN0IGhvdGVscyA9IGhvdGVsRGV0YWlscy5tYXAoKGhvdGVsRGV0YWlsKSA9PiB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBob3RlbERldGFpbC5jaXR5X25hbWU7XG4gICAgY29uc3QgaW1hZ2UgPSBob3RlbERldGFpbC5ob3RlbF9kZXRhaWxzWzBdLnBpY3R1cmVfdXJsO1xuICAgIGNvbnN0IGltYWdla2l0VXJsID0gaG90ZWxEZXRhaWwuaG90ZWxfZGV0YWlsc1swXS5pbWFnZWtpdF91cmw7XG4gICAgY29uc3QgbmFtZSA9IGhvdGVsRGV0YWlsLmhvdGVsX2RldGFpbHNbMF0ubmFtZTtcbiAgICBjb25zdCBpZCA9IGhvdGVsRGV0YWlsLmlkO1xuICAgIGNvbnN0IHJhdGluZyA9IGhvdGVsRGV0YWlsLmNhdGVnb3J5IHx8IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvdGVsIGNpdHlOYW1lPXtjaXR5TmFtZX0gaW1hZ2U9e2ltYWdlfSBpbWFnZWtpdFVybD17aW1hZ2VraXRVcmx9IG5hbWU9e25hbWV9IHJhdGluZz17cmF0aW5nfSBpZD17aWR9IC8+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctOCBkZXRhaWwtaG90ZWwtc2xpZGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWwtaG90ZWwtc2xpZGVyLWJveCc+XG4gICAgICAgIHtob3RlbHN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRlc3RpbmF0aW9uSG90ZWwucHJvcFR5cGVzID0ge1xuICBob3RlbERldGFpbHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uSG90ZWw7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkZXRhaWwtaG90ZWwtc2xpZGVyXCI6IFwiXzFUM0ZlXCIsXG5cdFwiZGV0YWlsLWhvdGVsLXNsaWRlci1ib3hcIjogXCJfMmIzVGpcIixcblx0XCJkZXRhaWwtaG90ZWwtc2xpZGVyLWNvblwiOiBcIl8zY3B6T1wiLFxuXHRcImhvdGVsLXNsaWRlclwiOiBcIl8zbndBRlwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbmNvbnN0IERlc3RpbmF0aW9uSG93VG9SZWFjaCA9ICh7IGhlYWRpbmcsIHN1YkhlYWRpbmcsIHRleHQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0gcGI4Jz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTMgcGwwIHByMCc+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2Z3OSBibG9jayBicmVhay13b3JkJz57aGVhZGluZ308L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy05IHBsMCBwcjAnPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmdzMgZjEyIHBmYzQnPntzdWJIZWFkaW5nfTwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzTmFtZT0ncHQ4Jz57dGV4dH08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGVzdGluYXRpb25Ib3dUb1JlYWNoLnByb3BUeXBlcyA9IHtcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3ViSGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkRlc3RpbmF0aW9uSG93VG9SZWFjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICcnLFxuICBzdWJIZWFkaW5nOiAnJyxcbiAgdGV4dDogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkhvd1RvUmVhY2g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG5cbmNvbnN0IERlc3RpbmF0aW9uUHJpY2VEYXlzQ2FyZCA9ICh7IG1pbkJ1ZGdldCwgbWluRGF5cywgbWF4RGF5cyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBzYmN3IHB0MTUgcGIxNSBwbDggcHI4Jz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTcgcDAnPlxuICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgZnczIHBmYzQgcGI0Jz5QYWNrYWdlIHN0YXJ0aW5nIGZyb206PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPSdmMjQgZnc5IHNmYzMgcGI0Jz7igrkge21pbkJ1ZGdldH0vLTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIGZ3MyBwZmMzJz5wZXIgcGVyc29uPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNSBwMCB0ZXh0LXJpZ2h0Jz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIGZ3MyBwZmM0IHBiOCc+UmVjb21tZW5kZWQgU3RheTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIGZ3OSc+e21pbkRheXN9IERheXMgdG8ge21heERheXN9IERheXM8L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGVzdGluYXRpb25QcmljZURheXNDYXJkLnByb3BUeXBlcyA9IHtcbiAgbWluQnVkZ2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1pbkRheXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbWF4RGF5czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uUHJpY2VEYXlzQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3RhclJhdGluZ3MgZnJvbSAnLi4vUmV2aWV3L1N0YXJSYXRpbmdzJztcbmltcG9ydCAnLi9EZXN0aW5hdGlvbkhvdGVsLnNjc3MnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5jb25zdCBIb3RlbCA9ICh7IGNpdHlOYW1lLCBpbWFnZSwgaW1hZ2VraXRVcmwsIG5hbWUsIHJhdGluZywgaWQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlsLWhvdGVsLXNsaWRlci1jb24nPlxuICAgIDxwPntjaXR5TmFtZX08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHJlbGF0aXZlIG10OCBob3RlbC1zbGlkZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC13aXRoLWxheWVyJz5cbiAgICAgICAgPEltZyBzcmM9e2ltYWdlfSBpa1NyYz17aW1hZ2VraXRVcmx9IGFsdD17bmFtZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdiczQgcDgnPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpYmxvY2snPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWJsb2NrIG1sNSc+PFN0YXJSYXRpbmdzIHJhdGluZz17cmF0aW5nfSBpZD17aWR9IC8+PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkhvdGVsLnByb3BUeXBlcyA9IHtcbiAgY2l0eU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuSG90ZWwuZGVmYXVsdFByb3BzID0ge1xuICBjaXR5TmFtZTogJ0NpdHknLFxuICBpbWFnZTogJycsXG4gIG5hbWU6ICdIb3RlbCcsXG4gIHJhdGluZzogNFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHB1c2ggYXMgcHVzaFN0YXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTRUdNRU5UX0FETUlOX0NPTU1FTlQsIHNldENvb2tpZSB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB1cGRhdGVGcm9tT25lUHJvcHMgfSBmcm9tICdyZWR1Y2Vycy9mb3JtT25lTGVhZCc7XG5cbmNsYXNzIEZvcm1PbmVDVEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHJ0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdXBkYXRlRnJvbU9uZVByb3BzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHB1c2hTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZWFsczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xpY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5vYmplY3RcbiAgICBdKSxcbiAgICBidWRnZXQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJ0UHJvcHM6IHt9LFxuICAgIGNsaWNrSGFuZGxlcjogKCkgPT4ge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGRlYWxzOiBmYWxzZSxcbiAgICB0YWc6ICcnLFxuICAgIGJ1ZGdldDogJydcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBydFByb3BzLCB0YWcsIGRlYWxzLCBidWRnZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gbWVyZ2UgYWRtaW4gY29tbWVudHMgd2l0aCB0aGUgZXhpc3Rpbmcgb25lc1xuICAgIGxldCBhZG1pbkNvbW1lbnRzID0gcnRQcm9wcy5hZG1pbkNvbW1lbnRzIHx8ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYWRtaW5Db21tZW50cyA9IGAke2FkbWluQ29tbWVudHN9ICNGb3JtX2ZpbGxlZF9vbiAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWA7XG4gICAgfVxuICAgIGFkbWluQ29tbWVudHMgPSBgICR7YWRtaW5Db21tZW50c30gJHtTRUdNRU5UX0FETUlOX0NPTU1FTlR9YDtcbiAgICBjb25zdCBydHJpcFByb3BzID0ge1xuICAgICAgLi4ucnRQcm9wcyxcbiAgICAgIGFkbWluQ29tbWVudHMsXG4gICAgfTtcbiAgICBzZXRDb29raWUoJ3RvX2xvYycsIHJ0UHJvcHMudG9fbG9jKTtcbiAgICBzZXRDb29raWUoJ3RyaXBfZGF5cycsIHJ0UHJvcHMudHJpcF9kYXlzKTtcbiAgICB0aGlzLnByb3BzLmNsaWNrSGFuZGxlcigpO1xuICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb24gc3RvcmVcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZyb21PbmVQcm9wcyhydHJpcFByb3BzKTtcbiAgICAvLyBjaGFuZ2UgdGhlIHVybFxuICAgIGlmIChkZWFscykge1xuICAgICAgdGhpcy5wcm9wcy5wdXNoU3RhdGUoYC9yZXF1ZXN0ZWRfdHJpcHMvbmV3P2RlYWxzPXRydWUmdGFnPSR7dGFnfSZidWRnZXQ9JHtidWRnZXR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucHVzaFN0YXRlKCcvcmVxdWVzdGVkX3RyaXBzL25ldycpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHVwZGF0ZUZyb21PbmVQcm9wcywgcHVzaFN0YXRlIH0pKEZvcm1PbmVDVEEpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBIZWFkZXJDb21tb24gZnJvbSAnbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29tbW9uJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyVGl0bGUgfSBmcm9tICdtb2R1bGVzL2hlYWRlci9IZWFkZXJUaXRsZSc7XG5pbXBvcnQgRGVzdGluYXRpb25CYW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXN0aW5hdGlvbkRldGFpbC9EZXN0aW5hdGlvbkJhbm5lcic7XG5pbXBvcnQgRGVzdGluYXRpb25QcmljZURheXNDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGVzdGluYXRpb25EZXRhaWwvRGVzdGluYXRpb25QcmljZURheXNDYXJkJztcbmltcG9ydCBEZXN0aW5hdGlvbkRhdGEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXN0aW5hdGlvbkRldGFpbC9EZXN0aW5hdGlvbkRhdGEnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuaW1wb3J0IEFuaW1hdGVkQmFubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQW5pbWF0ZWRCYW5uZXIvQW5pbWF0ZWRCYW5uZXInO1xuXG5jbGFzcyBEZXN0aW5hdGlvbkRldGFpbEFzeW5jIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZXN0aW5hdGlvbkRldGFpbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHNldEFjdGl2ZURldGFpbHNUYWI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWN0aXZlVGFiOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWN0aXZlVGFiOiBudWxsLFxuICAgIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXJIZWxtZXQocGFnZUxpbmtzKSB7XG4gICAgcmV0dXJuICg8SGVsbWV0PlxuICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNjhjNGMxXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICBocmVmPXtgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vdHJhdmVsLXRvLyR7cGFnZUxpbmtzLmxpbmt9YH1cbiAgICAgIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cImFsOmFuZHJvaWQ6dXJsXCIgY29udGVudD17YHR0czovL3RyYXZlbHRyaWFuZ2xlLmNvbS90cmF2ZWwtdG8vJHtwYWdlTGlua3MubGlua31gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJhbDphbmRyb2lkOnBhY2thZ2VcIiBjb250ZW50PVwiY29tLnRyYXZlbHRyaWFuZ2xlLnRyYXZlbGxlclwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cImFsOmFuZHJvaWQ6YXBwX25hbWVcIiBjb250ZW50PVwiVHJhdmVsVHJpYW5nbGUtSG9saWRheSBQYWNrYWdlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlTGlua3MubGlua30gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwiYWw6aW9zOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS90cmF2ZWwtdG8vJHtwYWdlTGlua3MubGlua31gfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJhbDppb3M6YXBwX3N0b3JlX2lkXCIgY29udGVudD1cIjExNTIzNTgwNjZcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJhbDppb3M6YXBwX25hbWVcIiBjb250ZW50PVwiVHJhdmVsVHJpYW5nbGVcIiAvPlxuICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9XCIxNjg1MzQ5NTMyMDM1NDFcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImNhdGVnb3J5XCIgY29udGVudD17YERlc3RpbmF0aW9uOiR7cGFnZUxpbmtzLnRpdGxlfWB9IC8+XG4gICAgICA8dGl0bGU+e3BhZ2VMaW5rcy50aXRsZX08L3RpdGxlPlxuICAgIDwvSGVsbWV0Pik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb25EZXRhaWwgPSB0aGlzLnByb3BzLmRlc3RpbmF0aW9uRGV0YWlsO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25QcmljZUFuZERheXMgPSB7XG4gICAgICBtaW5CdWRnZXQ6IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLm1pbl9idWRnZXQsXG4gICAgICBtYXhCdWRnZXQ6IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLm1heF9idWRnZXQsXG4gICAgICBtaW5EYXlzOiBkZXN0aW5hdGlvbkRldGFpbC5kZXN0aW5hdGlvbi5taW5fZGF5cyxcbiAgICAgIG1heERheXM6IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLm1heF9kYXlzLFxuICAgICAgcGVyc29uTGltaXQ6IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLnBlcnNvbl9saW1pdFxuICAgIH07XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbkRldGFpbHMgPSB7XG4gICAgICBwbGFjZURlc2NyaXB0aW9uOiBkZXN0aW5hdGlvbkRldGFpbC5kZXN0aW5hdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgIHBsYWNlTmFtZTogZGVzdGluYXRpb25EZXRhaWwuZGVzdGluYXRpb24ubmFtZSxcbiAgICAgIGhvdGVsRGV0YWlsczogZGVzdGluYXRpb25EZXRhaWwuZGVzdGluYXRpb24uaG90ZWxfZGV0YWlscyxcbiAgICAgIGlzVmlzYTogZGVzdGluYXRpb25EZXRhaWwuZGVzdGluYXRpb24uaXNfdmlzYV9yZXF1aXJlZCxcbiAgICAgIGhvd1RvUmVhY2g6IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLnBhc3NhZ2VfZGV0YWlscyB8fCB7fVxuICAgIH07XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbkJhbm5lciA9IHtcbiAgICAgIGJlc3RUaW1lVG9WaXNpdDogZGVzdGluYXRpb25EZXRhaWwuZGVzdGluYXRpb24uYmVzdF90aW1lX3RvX3Zpc2l0LFxuICAgICAgaW1hZ2VVcmw6IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLmltYWdlLFxuICAgICAgaW1hZ2VraXRVcmw6IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLmltYWdla2l0X3VybFxuICAgIH07XG5cbiAgICBjb25zdCBjdGFUZXh0ID0gJ0J1aWxkIFlvdXIgT3duIFBhY2thZ2VzJztcbiAgICBjb25zdCBzZWN0aW9uID0gJ0JvdHRvbSBCYXInO1xuICAgIGNvbnN0IG9iamVjdCA9IGBEZXN0aW5hdGlvbi8ke2Rlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLmlkfWA7XG4gICAgY29uc3QgdHJhY2tDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy50cmFja0xlYWRGdW5uZWxDbGljayh7XG4gICAgICAgIHNlY3Rpb24sXG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgY3RhOiBjdGFUZXh0LFxuICAgICAgICBjYXRlZ29yeTogb2JqZWN0LFxuICAgICAgICBmdW5uZWxTdGVwOiAxLFxuICAgICAgICBkZXN0aW5hdGlvbklkOiBkZXN0aW5hdGlvbkRldGFpbC5kZXN0aW5hdGlvbi5pZCxcbiAgICAgICAgZGVzdGluYXRpb25OYW1lOiBkZXN0aW5hdGlvbkRldGFpbC5kZXN0aW5hdGlvbi5uYW1lXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnZUxpbmtzID0ge307XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VMaW5rcy50aXRsZSA9IGRlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLm5hbWU7XG4gICAgICBwYWdlTGlua3MubGluayA9IGAke2Rlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLmlkfS0ke2Rlc3RpbmF0aW9uRGV0YWlsLmRlc3RpbmF0aW9uLm5hbWV9YDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwYWdlTGlua3MudGl0bGUgPSAnSG9saWRheSBwYWNrYWdlcyc7XG4gICAgICBwYWdlTGlua3MubGluayA9ICcxNzMtcHVuamFiJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwYjY0XCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckhlbG1ldChwYWdlTGlua3MpfVxuICAgICAgICA8SGVhZGVyQ29tbW9uIC8+XG4gICAgICAgIDxIZWFkZXJUaXRsZSB0aXRsZT17ZGVzdGluYXRpb25EZXRhaWwuZGVzdGluYXRpb24ubmFtZX0gLz5cbiAgICAgICAgPERlc3RpbmF0aW9uQmFubmVyIHsuLi5kZXN0aW5hdGlvbkJhbm5lcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwOCBzYmM1XCI+XG4gICAgICAgICAgPERlc3RpbmF0aW9uUHJpY2VEYXlzQ2FyZCB7Li4uZGVzdGluYXRpb25QcmljZUFuZERheXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHA4IHNiYzVcIj5cbiAgICAgICAgICA8RGVzdGluYXRpb25EYXRhXG4gICAgICAgICAgICBzZXRBY3RpdmVEZXRhaWxzVGFiPXt0aGlzLnByb3BzLnNldEFjdGl2ZURldGFpbHNUYWJ9XG4gICAgICAgICAgICBhY3RpdmVUYWI9e3RoaXMucHJvcHMuYWN0aXZlVGFifVxuICAgICAgICAgICAgey4uLmRlc3RpbmF0aW9uRGV0YWlsc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwOCBzYmN3IHo0IGZpeGVkIGIwIHdmdWxsIGwwIGJzNFwiPlxuICAgICAgICAgIDxGb3JtT25lQ1RBXG4gICAgICAgICAgICBydFByb3BzPXt7XG4gICAgICAgICAgICAgIHRvX2xvYzogZGVzdGluYXRpb25EZXRhaWwuZGVzdGluYXRpb24ubmFtZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGlja0hhbmRsZXI9e3RyYWNrQ2xpY2tFdmVudH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsIHBsOCBwcjhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlXCIgLz5cbiAgICAgICAgICAgICAge2N0YVRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1PbmVDVEE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkRldGFpbEFzeW5jO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5jb25zdCBMT0FEID0gJ2FuaW1hdGVkQmFubmVyL0xPQUQnO1xuY29uc3QgTE9BRF9TVUNDRVNTID0gJ2FuaW1hdGVkQmFubmVyL0xPQURfU1VDQ0VTUyc7XG5jb25zdCBMT0FEX0ZBSUwgPSAnYW5pbWF0ZWRCYW5uZXIvTE9BRF9GQUlMJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkZWQ6IGZhbHNlLFxuICBiYW5uZXI6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgTE9BRF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBiYW5uZXI6IGFjdGlvbi5yZXN1bHRcbiAgICAgIH07XG4gICAgY2FzZSBMT0FEX0ZBSUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IuZXJyb3JzIHx8IGFjdGlvbi5lcnJvcixcbiAgICAgICAgYmFubmVyOiB7fVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZChnbG9iYWxTdGF0ZSkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUuYmFubmVyICYmIGdsb2JhbFN0YXRlLmJhbm5lci5sb2FkZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbnRlbnQoZ2xvYmFsU3RhdGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUuYmFubmVyLmJhbm5lci5zdWNjZXNzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50KGdsb2JhbFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLmJhbm5lci5iYW5uZXIuZGF0YS5iYW5uZXI7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZW50KHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGVzOiBbTE9BRCwgTE9BRF9TVUNDRVNTLCBMT0FEX0ZBSUxdLFxuICAgIHByb21pc2U6IGNsaWVudCA9PiBjbGllbnQuZ2V0KFxuICAgICAgY29uZmlnLmFwaUVuZHBvaW50cy5hbmltYXRlZEJhbm5lci51cmwsXG4gICAgICB7XG4gICAgICAgIHBhcmFtcywgaG9zdFR5cGU6IGNvbmZpZy5hcGlFbmRwb2ludHMuYW5pbWF0ZWRCYW5uZXIuaG9zdFxuICAgICAgfVxuICAgIClcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=