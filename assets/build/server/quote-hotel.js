require("source-map-support").install();
exports.ids = ["quote-hotel"];
exports.modules = {

/***/ "./app-v2/modules/quote/hotel/Hotel.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/quote/hotel/Hotel.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _HotelCard = _interopRequireDefault(__webpack_require__(/*! ./components/HotelCard */ "./app-v2/modules/quote/hotel/components/HotelCard.js"));

var _QuoteCardHeader = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/QuoteCardHeader */ "./app-v2/modules/quote/shared/QuoteCardHeader.js"));

var _pdmHelpers = __webpack_require__(/*! helpers/pdmHelpers */ "./app/helpers/pdmHelpers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    position: 'absolute',
    top: '0',
    left: '0'
  }
});

let Hotel = (_temp = _class = class Hotel extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, cta, hotelId = '') => {
      this.props.trackSegment({
        event,
        section: 'Hotels',
        object: hotelId || '',
        cta
      });
    };

    this.handleViewAll = () => {
      this.setState({
        viewAllHotels: !this.state.viewAllHotels
      });
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'View All Hotels');
    };

    this.handleChatClick = () => {
      this.props.setPdmCategory(_pdmHelpers.PDM_CATEGORY_HOTEL);
      this.props.showHidePdmView(true);
      this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Edit Package');
    };

    this.state = {
      viewAllHotels: false
    };
  }

  render() {
    const {
      hotels,
      hotelText
    } = this.props;

    if (!hotels.length && !hotelText) {
      return null;
    }

    const filteredHotel = this.state.viewAllHotels ? hotels : hotels.slice(0, 1);
    return _react.default.createElement(_reactScroll.Element, {
      name: "hotels-sec"
    }, _react.default.createElement("div", {
      className: "pfc3 f14 sbcw pb15 mt8"
    }, _react.default.createElement(_QuoteCardHeader.default, {
      icon: _react.default.createElement(_Icon.Hotel, null),
      heading: "Hotels",
      chatButtonName: "Edit Package",
      handleChatClick: this.handleChatClick
    }), _react.default.createElement("div", {
      className: "sbcw"
    }, hotels.length ? filteredHotel.map((hotel, index) => _react.default.createElement(_HotelCard.default, {
      key: index,
      hotels: hotel,
      viewAllHotels: this.state.viewAllHotels,
      trackSegment: this.trackSegmentEvent
    })) : _react.default.createElement("div", {
      className: "sbcw p15 pl48 pt0 at_hoteltext"
    }, parser.parse(hotelText))), hotels.length && (hotels.length > 1 || hotels[0].hotelInfos.length > 1) ? _react.default.createElement("div", {
      className: "p15 bt"
    }, _react.default.createElement("a", {
      className: "block wfull flex alignCenter justifyCenter text-center at_viewallhotelclick",
      onClick: this.handleViewAll
    }, _react.default.createElement("span", {
      className: "relative mr8 f14 fw7 at_viewallhotel"
    }, "View All Hotels"), _react.default.createElement(GDownArrowSpan, {
      className: `${this.state.viewAllHotels ? 'rotate180' : ''} relative`
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : null));
  }

}, _class.propTypes = {
  hotels: _propTypes.default.array,
  hotelText: _propTypes.default.string,
  setPdmCategory: _propTypes.default.func,
  showHidePdmView: _propTypes.default.func,
  trackSegment: _propTypes.default.func
}, _class.defaultProps = {
  hotels: [],
  setPdmCategory: () => {},
  showHidePdmView: () => {},
  trackSegment: () => {}
}, _temp);
var _default = Hotel;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/hotel/components/HotelCard.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/quote/hotel/components/HotelCard.js ***!
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

var _HotelCardDetails = _interopRequireDefault(__webpack_require__(/*! ./HotelCardDetails */ "./app-v2/modules/quote/hotel/components/HotelCardDetails.js"));

var _ORComp = _interopRequireDefault(__webpack_require__(/*! ./ORComp */ "./app-v2/modules/quote/hotel/components/ORComp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HotelCard = ({
  hotels,
  viewAllHotels,
  trackSegment
}) => {
  const hotelInfos = viewAllHotels ? hotels.hotelInfos : hotels.hotelInfos.slice(0, 1);
  return _react.default.createElement("div", {
    className: "pl15 pr15 pt15 bt"
  }, _react.default.createElement("h4", {
    className: "f16a fw9 pb15"
  }, hotels.hotelInfos[0].city, ": ", hotels.days.length, " Nights"), hotelInfos.map((hotel, index) => _react.default.createElement("div", {
    key: index
  }, _react.default.createElement(_HotelCardDetails.default, {
    hotelDetail: hotel,
    key: hotel.id,
    trackSegment: trackSegment
  }), index < hotelInfos.length - 1 ? _react.default.createElement("div", {
    className: "p8"
  }, _react.default.createElement(_ORComp.default, null)) : null)));
};

HotelCard.propTypes = {
  hotels: _propTypes.default.object,
  viewAllHotels: _propTypes.default.bool,
  trackSegment: _propTypes.default.func
};
HotelCard.defaultProps = {
  hotels: {},
  viewAllHotels: false,
  trackSegment: () => {}
};
var _default = HotelCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/hotel/components/HotelCardDetails.js":
/*!*******************************************************************!*\
  !*** ./app-v2/modules/quote/hotel/components/HotelCardDetails.js ***!
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

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _HotelOrAirportDetails = _interopRequireDefault(__webpack_require__(/*! ../../shared/HotelOrAirportDetails */ "./app-v2/modules/quote/shared/HotelOrAirportDetails.js"));

var _ImageSlider = _interopRequireDefault(__webpack_require__(/*! ./ImageSlider */ "./app-v2/modules/quote/hotel/components/ImageSlider.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _hotelCardDetailsCm = _interopRequireDefault(__webpack_require__(/*! ./hotelCardDetails.cm.scss */ "./app-v2/modules/quote/hotel/components/hotelCardDetails.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const htmlToReactParser = new _htmlToReact.Parser();
let HotelCardDetails = class HotelCardDetails extends _react.default.Component {
  constructor(props) {
    super(props);

    this.breakDescription = description => {
      return {
        wrapText: htmlToReactParser.parse(description.substring(0, 200)),
        moreText: htmlToReactParser.parse(description.substring(200, description.length))
      };
    };

    this.closePopup = () => {
      this.setState({
        closeModal: true
      });
    };

    this.state = {
      closeModal: true
    };
  }

  renderHotelData() {
    const {
      name,
      rating,
      roomType
    } = this.props.hotelDetail;
    return _react.default.createElement("div", {
      className: "flexFull pl15"
    }, _react.default.createElement("h4", null, name), _react.default.createElement(_RatingStar.default, {
      rating: rating
    }), roomType ? _react.default.createElement("p", null, `Room Type: ${roomType}`) : null);
  }

  renderHotelImage(frontImage) {
    return _react.default.createElement("div", {
      className: _hotelCardDetailsCm.default.hotelLogo
    }, _react.default.createElement(_Img.default, {
      className: "wfull absolute-center",
      ikSrc: frontImage,
      alt: "hotel"
    }));
  }

  render() {
    const {
      hotelId,
      hotelImages,
      comments
    } = this.props.hotelDetail;
    const frontImage = hotelImages.length && hotelImages[0].url || '';

    const hotelDetail = _objectSpread({}, this.props.hotelDetail, {
      images: this.props.hotelDetail.hotelImages
    });

    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "flex sbcw pb15"
    }, _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(_GenericModal.default, {
      trigger: this.renderHotelImage(frontImage),
      fullView: true,
      hasCustomClose: true
    }, _react.default.createElement(_ImageSlider.default, {
      images: hotelDetail.images
    }))), _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement(_GenericModal.default, {
      trigger: this.renderHotelData(),
      fullView: true,
      customCloseTrigger: this.state.closeModal,
      hasCustomClose: true
    }, _react.default.createElement(_HotelOrAirportDetails.default, {
      info: hotelDetail,
      closeModal: this.closePopup
    })))), comments ? _react.default.createElement(_ShowMore.default, this.breakDescription(comments)) : null);
  }

};
HotelCardDetails.propTypes = {
  hotelDetail: _propTypes.default.shape({
    hotelId: _propTypes.default.number.isRequired,
    name: _propTypes.default.string.isRequired,
    rating: _propTypes.default.number,
    roomType: _propTypes.default.string,
    comments: _propTypes.default.string,
    hotelImages: _propTypes.default.array
  }).isRequired,
  trackSegment: _propTypes.default.func
};
HotelCardDetails.defaultProps = {
  trackSegment: () => {}
};
var _default = HotelCardDetails;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/hotel/components/ImageSlider.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/quote/hotel/components/ImageSlider.js ***!
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

var _FullWidthSlider = _interopRequireDefault(__webpack_require__(/*! modules/shared/carousel/FullWidthSlider */ "./app-v2/modules/shared/carousel/FullWidthSlider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImageSlider = ({
  images,
  name
}) => {
  const imagesUrl = images.map(i => i.url);
  return _react.default.createElement("div", null, _react.default.createElement(_FullWidthSlider.default, {
    images: imagesUrl,
    name: name
  }));
};

ImageSlider.propTypes = {
  images: _propTypes.default.array,
  name: _propTypes.default.string
};
ImageSlider.defaultProps = {
  images: [],
  name: ''
};
var _default = ImageSlider;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/hotel/components/ORComp.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/quote/hotel/components/ORComp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OrDiv = _glamorous.default.div({
  height: 2,
  background: 'radial-gradient(#f0f0f0,#ffffff)'
});

const ORComp = () => _react.default.createElement("div", {
  className: "row relative text-center pt5 pb24 mt8 mb8"
}, _react.default.createElement(OrDiv, {
  className: "absolute-center-v wfull"
}, _react.default.createElement("span", {
  className: "f14p p8 or-comp border radius100 pfc3 iblock sbcw absolute-center"
}, "OR")));

var _default = ORComp;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/hotel/components/hotelCardDetails.cm.scss":
/*!************************************************************************!*\
  !*** ./app-v2/modules/quote/hotel/components/hotelCardDetails.cm.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hotelLogo": "_1ujFikuBeKQrykSPpON3JQ"
};

/***/ }),

/***/ "./app-v2/modules/quote/hotel/index.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/quote/hotel/index.js ***!
  \*********************************************/
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

var _quoteList = __webpack_require__(/*! modules/quote/actions/quoteList */ "./app-v2/modules/quote/actions/quoteList.js");

var _constants = __webpack_require__(/*! modules/quote/actions/constants */ "./app-v2/modules/quote/actions/constants.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _action = __webpack_require__(/*! modules/discountEngine/action */ "./app-v2/modules/discountEngine/action.js");

var _action2 = __webpack_require__(/*! modules/pdm/action */ "./app-v2/modules/pdm/action.js");

var _quoteList2 = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _Hotel = _interopRequireDefault(__webpack_require__(/*! ./Hotel */ "./app-v2/modules/quote/hotel/Hotel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const currentQuote = (0, _quoteList2.getCurrentQuote)(state);
  return {
    hotels: currentQuote.hotelsDetail,
    hotelText: currentQuote.hotelText
  };
}, {
  setPdmCategory: _action2.setPdmCategory,
  showHidePdmView: _action2.showHidePdmView
})(_Hotel.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/QuoteCardHeader.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/shared/QuoteCardHeader.js ***!
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

var _AgentChatButton = _interopRequireDefault(__webpack_require__(/*! ./AgentChatButton */ "./app-v2/modules/quote/shared/AgentChatButton.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QuoteCardHeader = ({
  heading,
  chatButtonName,
  handleChatClick,
  icon
}) => _react.default.createElement("div", {
  className: "pfc3 f14 pt15 pl15 pb15 pr15 flex alignCenter at_cardHeader"
}, _react.default.createElement("span", {
  className: "input-24 mr8 at_cardIcon"
}, icon), _react.default.createElement("h3", {
  className: "flexFull f16a fw9 at_cardHeading"
}, heading), _react.default.createElement(_AgentChatButton.default, {
  name: chatButtonName,
  handleChatClick: handleChatClick
}));

QuoteCardHeader.propTypes = {
  heading: _propTypes.default.string,
  chatButtonName: _propTypes.default.string,
  category: _propTypes.default.string,
  icon: _propTypes.default.node,
  handleChatClick: _propTypes.default.func
};
QuoteCardHeader.defaultProps = {
  heading: '',
  chatButtonName: '',
  category: '',
  icon: _react.default.createElement(_Icon.DefaultIcon, null),
  handleChatClick: () => {}
};
var _default = QuoteCardHeader;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9ob3RlbC9Ib3RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9ob3RlbC9jb21wb25lbnRzL0hvdGVsQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9ob3RlbC9jb21wb25lbnRzL0hvdGVsQ2FyZERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvaG90ZWwvY29tcG9uZW50cy9JbWFnZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9ob3RlbC9jb21wb25lbnRzL09SQ29tcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9ob3RlbC9jb21wb25lbnRzL2hvdGVsQ2FyZERldGFpbHMuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9ob3RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9zaGFyZWQvUXVvdGVDYXJkSGVhZGVyLmpzIl0sIm5hbWVzIjpbInBhcnNlciIsIlBhcnNlciIsIkdEb3duQXJyb3dTcGFuIiwiZ2xhbW9yb3VzIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiSG90ZWwiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidHJhY2tTZWdtZW50RXZlbnQiLCJldmVudCIsImN0YSIsImhvdGVsSWQiLCJ0cmFja1NlZ21lbnQiLCJzZWN0aW9uIiwib2JqZWN0IiwiaGFuZGxlVmlld0FsbCIsInNldFN0YXRlIiwidmlld0FsbEhvdGVscyIsInN0YXRlIiwiT1JHQU5JU01fQ0xJQ0tFRCIsImhhbmRsZUNoYXRDbGljayIsInNldFBkbUNhdGVnb3J5IiwiUERNX0NBVEVHT1JZX0hPVEVMIiwic2hvd0hpZGVQZG1WaWV3IiwicmVuZGVyIiwiaG90ZWxzIiwiaG90ZWxUZXh0IiwibGVuZ3RoIiwiZmlsdGVyZWRIb3RlbCIsInNsaWNlIiwibWFwIiwiaG90ZWwiLCJpbmRleCIsInBhcnNlIiwiaG90ZWxJbmZvcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5Iiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIkhvdGVsQ2FyZCIsImNpdHkiLCJkYXlzIiwiaWQiLCJib29sIiwiaHRtbFRvUmVhY3RQYXJzZXIiLCJIb3RlbENhcmREZXRhaWxzIiwiUmVhY3QiLCJicmVha0Rlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJ3cmFwVGV4dCIsInN1YnN0cmluZyIsIm1vcmVUZXh0IiwiY2xvc2VQb3B1cCIsImNsb3NlTW9kYWwiLCJyZW5kZXJIb3RlbERhdGEiLCJuYW1lIiwicmF0aW5nIiwicm9vbVR5cGUiLCJob3RlbERldGFpbCIsInJlbmRlckhvdGVsSW1hZ2UiLCJmcm9udEltYWdlIiwic3R5bGVzIiwiaG90ZWxMb2dvIiwiaG90ZWxJbWFnZXMiLCJjb21tZW50cyIsInVybCIsImltYWdlcyIsInNoYXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIkltYWdlU2xpZGVyIiwiaW1hZ2VzVXJsIiwiaSIsIk9yRGl2IiwiZGl2IiwiYmFja2dyb3VuZCIsIk9SQ29tcCIsImNvbnRhaW5lciIsImN1cnJlbnRRdW90ZSIsImhvdGVsc0RldGFpbCIsIndlYnZpZXdBY3Rpb25zIiwiZmV0Y2hRdW90ZXNEYXRhIiwibG9hZENvbnN0YW50cyIsImZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIiwiZmV0Y2hEaXNjb3VudE9mZmVycyIsInN3aXRjaFF1b3RlIiwidXBkYXRlUmVxdWVzdGVkVHJpcElkIiwiUXVvdGVDYXJkSGVhZGVyIiwiaGVhZGluZyIsImNoYXRCdXR0b25OYW1lIiwiaWNvbiIsImNhdGVnb3J5Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztB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LGdCQUFYO0FBQTJCdkUsaUJBQTNCO0FBQTRDd0U7QUFBNUMsQ0FBRCxLQUN0QjtBQUFLLGFBQVU7QUFBZixHQUNFO0FBQU0sYUFBVTtBQUFoQixHQUE0Q0EsSUFBNUMsQ0FERixFQUVFO0FBQUksYUFBVTtBQUFkLEdBQWtERixPQUFsRCxDQUZGLEVBR0UsNkJBQUMsd0JBQUQ7QUFBaUIsUUFBTUMsY0FBdkI7QUFBdUMsbUJBQWlCdkU7QUFBeEQsRUFIRixDQURGOztBQVFBcUUsZ0JBQWdCdEQsU0FBaEIsR0FBNEI7QUFDMUJ1RCxXQUFTdEQsbUJBQVVFLE1BRE87QUFFMUJxRCxrQkFBZ0J2RCxtQkFBVUUsTUFGQTtBQUcxQnVELFlBQVV6RCxtQkFBVUUsTUFITTtBQUkxQnNELFFBQU14RCxtQkFBVTBELElBSlU7QUFLMUIxRSxtQkFBaUJnQixtQkFBVUc7QUFMRCxDQUE1QjtBQVFBa0QsZ0JBQWdCakQsWUFBaEIsR0FBK0I7QUFDN0JrRCxXQUFTLEVBRG9CO0FBRTdCQyxrQkFBZ0IsRUFGYTtBQUc3QkUsWUFBVSxFQUhtQjtBQUk3QkQsUUFBTSw2QkFBQyxpQkFBRCxPQUp1QjtBQUs3QnhFLG1CQUFpQixNQUFNLENBQ3RCO0FBTjRCLENBQS9CO2VBU2VxRSxlIiwiZmlsZSI6InF1b3RlLWhvdGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBIb3RlbENhcmQgZnJvbSAnLi9jb21wb25lbnRzL0hvdGVsQ2FyZCc7XG5pbXBvcnQgUXVvdGVDYXJkSGVhZGVyIGZyb20gJ21vZHVsZXMvcXVvdGUvc2hhcmVkL1F1b3RlQ2FyZEhlYWRlcic7XG5pbXBvcnQgeyBQRE1fQ0FURUdPUllfSE9URUwgfSBmcm9tICdoZWxwZXJzL3BkbUhlbHBlcnMnO1xuaW1wb3J0IHsgQmx1ZURvd25BcnJvdywgSG90ZWwgYXMgSG90ZWxJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IEdEb3duQXJyb3dTcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICc2cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICc2cHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGxlZnQ6ICcwJ1xuICB9XG59KTtcblxuY2xhc3MgSG90ZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhvdGVsczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGhvdGVsVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZXRQZG1DYXRlZ29yeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd0hpZGVQZG1WaWV3OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBob3RlbHM6IFtdLFxuICAgIHNldFBkbUNhdGVnb3J5OiAoKSA9PiB7fSxcbiAgICBzaG93SGlkZVBkbVZpZXc6ICgpID0+IHt9LFxuICAgIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld0FsbEhvdGVsczogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQgPSAoZXZlbnQsIGN0YSwgaG90ZWxJZCA9ICcnKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBzZWN0aW9uOiAnSG90ZWxzJyxcbiAgICAgIG9iamVjdDogaG90ZWxJZCB8fCAnJyxcbiAgICAgIGN0YVxuICAgIH0pO1xuICB9O1xuXG5cbiAgaGFuZGxlVmlld0FsbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlld0FsbEhvdGVsczogIXRoaXMuc3RhdGUudmlld0FsbEhvdGVscyB9KTtcblxuICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ1ZpZXcgQWxsIEhvdGVscycpO1xuICB9O1xuXG4gIGhhbmRsZUNoYXRDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFBkbUNhdGVnb3J5KFBETV9DQVRFR09SWV9IT1RFTCk7XG4gICAgdGhpcy5wcm9wcy5zaG93SGlkZVBkbVZpZXcodHJ1ZSk7XG5cbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdFZGl0IFBhY2thZ2UnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBob3RlbHMsIGhvdGVsVGV4dCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWhvdGVscy5sZW5ndGggJiYgIWhvdGVsVGV4dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWRIb3RlbCA9IHRoaXMuc3RhdGUudmlld0FsbEhvdGVscyA/IGhvdGVscyA6IGhvdGVscy5zbGljZSgwLCAxKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RWxlbWVudCBuYW1lPVwiaG90ZWxzLXNlY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBmYzMgZjE0IHNiY3cgcGIxNSBtdDhcIj5cbiAgICAgICAgICA8UXVvdGVDYXJkSGVhZGVyIGljb249ezxIb3RlbEljb24gLz59IGhlYWRpbmc9J0hvdGVscycgY2hhdEJ1dHRvbk5hbWU9J0VkaXQgUGFja2FnZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYXRDbGljaz17dGhpcy5oYW5kbGVDaGF0Q2xpY2t9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhvdGVscy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IGZpbHRlcmVkSG90ZWwubWFwKChob3RlbCwgaW5kZXgpID0+ICg8SG90ZWxDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgaG90ZWxzPXtob3RlbH1cbiAgICAgICAgICAgICAgICAgIHZpZXdBbGxIb3RlbHM9e3RoaXMuc3RhdGUudmlld0FsbEhvdGVsc31cbiAgICAgICAgICAgICAgICAgIHRyYWNrU2VnbWVudD17dGhpcy50cmFja1NlZ21lbnRFdmVudH1cbiAgICAgICAgICAgICAgICAvPikpXG4gICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInNiY3cgcDE1IHBsNDggcHQwIGF0X2hvdGVsdGV4dFwiPntwYXJzZXIucGFyc2UoaG90ZWxUZXh0KX08L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBob3RlbHMubGVuZ3RoICYmIChob3RlbHMubGVuZ3RoID4gMSB8fCBob3RlbHNbMF0uaG90ZWxJbmZvcy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwicDE1IGJ0XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgd2Z1bGwgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIHRleHQtY2VudGVyIGF0X3ZpZXdhbGxob3RlbGNsaWNrJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVWaWV3QWxsfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1yOCBmMTQgZnc3IGF0X3ZpZXdhbGxob3RlbFwiPlZpZXcgQWxsIEhvdGVsczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxHRG93bkFycm93U3BhbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUudmlld0FsbEhvdGVscyA/ICdyb3RhdGUxODAnIDogJyd9IHJlbGF0aXZlYH0+XG4gICAgICAgICAgICAgICAgICAgIDxCbHVlRG93bkFycm93IC8+PC9HRG93bkFycm93U3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90ZWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEhvdGVsQ2FyZERldGFpbHMgZnJvbSAnLi9Ib3RlbENhcmREZXRhaWxzJztcbmltcG9ydCBPUkNvbXAgZnJvbSAnLi9PUkNvbXAnO1xuXG5jb25zdCBIb3RlbENhcmQgPSAoeyBob3RlbHMsIHZpZXdBbGxIb3RlbHMsIHRyYWNrU2VnbWVudCB9KSA9PiB7XG4gIGNvbnN0IGhvdGVsSW5mb3MgPSB2aWV3QWxsSG90ZWxzXG4gICAgPyBob3RlbHMuaG90ZWxJbmZvc1xuICAgIDogaG90ZWxzLmhvdGVsSW5mb3Muc2xpY2UoMCwgMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsMTUgcHIxNSBwdDE1IGJ0XCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPSdmMTZhIGZ3OSBwYjE1Jz5cbiAgICAgICAge2hvdGVscy5ob3RlbEluZm9zWzBdLmNpdHl9OiB7aG90ZWxzLmRheXMubGVuZ3RofSBOaWdodHNcbiAgICAgIDwvaDQ+XG4gICAgICB7aG90ZWxJbmZvcy5tYXAoKGhvdGVsLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxIb3RlbENhcmREZXRhaWxzXG4gICAgICAgICAgICBob3RlbERldGFpbD17aG90ZWx9XG4gICAgICAgICAgICBrZXk9e2hvdGVsLmlkfVxuICAgICAgICAgICAgdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aW5kZXggPCBob3RlbEluZm9zLmxlbmd0aCAtIDEgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncDgnPlxuICAgICAgICAgICAgICA8T1JDb21wIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhvdGVsQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGhvdGVsczogUHJvcFR5cGVzLm9iamVjdCxcbiAgdmlld0FsbEhvdGVsczogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkhvdGVsQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhvdGVsczoge30sXG4gIHZpZXdBbGxIb3RlbHM6IGZhbHNlLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuaW1wb3J0IFJhdGluZ1N0YXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvUmF0aW5nU3Rhcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBTaG93TW9yZSBmcm9tICdtb2R1bGVzL3NoYXJlZC9TaG93TW9yZSc7XG5pbXBvcnQgSG90ZWxPckFpcnBvcnREZXRhaWxzIGZyb20gJy4uLy4uL3NoYXJlZC9Ib3RlbE9yQWlycG9ydERldGFpbHMnO1xuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gJy4vSW1hZ2VTbGlkZXInO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG90ZWxDYXJkRGV0YWlscy5jbS5zY3NzJztcblxuY29uc3QgaHRtbFRvUmVhY3RQYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNsYXNzIEhvdGVsQ2FyZERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjbG9zZU1vZGFsOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGJyZWFrRGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JhcFRleHQ6IGh0bWxUb1JlYWN0UGFyc2VyLnBhcnNlKGRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAyMDApKSxcbiAgICAgIG1vcmVUZXh0OiBodG1sVG9SZWFjdFBhcnNlci5wYXJzZShkZXNjcmlwdGlvbi5zdWJzdHJpbmcoMjAwLCBkZXNjcmlwdGlvbi5sZW5ndGgpKVxuICAgIH07XG4gIH07XG5cbiAgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VNb2RhbDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXJIb3RlbERhdGEoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIHJhdGluZyxcbiAgICAgIHJvb21UeXBlXG4gICAgfSA9IHRoaXMucHJvcHMuaG90ZWxEZXRhaWw7XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgcGwxNVwiPlxuICAgICAgPGg0PntuYW1lfTwvaDQ+XG4gICAgICA8UmF0aW5nU3RhciByYXRpbmc9e3JhdGluZ30gLz5cbiAgICAgIHtcbiAgICAgICAgcm9vbVR5cGVcbiAgICAgICAgICA/IDxwPntgUm9vbSBUeXBlOiAke3Jvb21UeXBlfWB9PC9wPlxuICAgICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvZGl2Pik7XG4gIH1cblxuICByZW5kZXJIb3RlbEltYWdlKGZyb250SW1hZ2UpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG90ZWxMb2dvfT5cbiAgICAgIDxJbWcgY2xhc3NOYW1lPVwid2Z1bGwgYWJzb2x1dGUtY2VudGVyXCJcbiAgICAgICAgICAgaWtTcmM9e2Zyb250SW1hZ2V9XG4gICAgICAgICAgIGFsdD1cImhvdGVsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBob3RlbElkLFxuICAgICAgaG90ZWxJbWFnZXMsXG4gICAgICBjb21tZW50c1xuICAgIH0gPSB0aGlzLnByb3BzLmhvdGVsRGV0YWlsO1xuICAgIGNvbnN0IGZyb250SW1hZ2UgPSBob3RlbEltYWdlcy5sZW5ndGggJiYgaG90ZWxJbWFnZXNbMF0udXJsIHx8ICcnO1xuICAgIGNvbnN0IGhvdGVsRGV0YWlsID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5ob3RlbERldGFpbCxcbiAgICAgIGltYWdlczogdGhpcy5wcm9wcy5ob3RlbERldGFpbC5ob3RlbEltYWdlc1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNiY3cgcGIxNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICB0cmlnZ2VyPXt0aGlzLnJlbmRlckhvdGVsSW1hZ2UoZnJvbnRJbWFnZSl9XG4gICAgICAgICAgICAgIGZ1bGxWaWV3PXt0cnVlfVxuICAgICAgICAgICAgICBoYXNDdXN0b21DbG9zZT17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlU2xpZGVyIGltYWdlcz17aG90ZWxEZXRhaWwuaW1hZ2VzfSAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICB0cmlnZ2VyPXt0aGlzLnJlbmRlckhvdGVsRGF0YSgpfVxuICAgICAgICAgICAgICBmdWxsVmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgY3VzdG9tQ2xvc2VUcmlnZ2VyPXt0aGlzLnN0YXRlLmNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SG90ZWxPckFpcnBvcnREZXRhaWxzIGluZm89e2hvdGVsRGV0YWlsfSBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlUG9wdXB9IC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIGNvbW1lbnRzXG4gICAgICAgICAgICA/IDxTaG93TW9yZSB7Li4udGhpcy5icmVha0Rlc2NyaXB0aW9uKGNvbW1lbnRzKX0gLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhvdGVsQ2FyZERldGFpbHMucHJvcFR5cGVzID0ge1xuICBob3RlbERldGFpbDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBob3RlbElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgICByb29tVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21tZW50czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBob3RlbEltYWdlczogUHJvcFR5cGVzLmFycmF5XG4gIH0pLmlzUmVxdWlyZWQsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkhvdGVsQ2FyZERldGFpbHMuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja1NlZ21lbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxDYXJkRGV0YWlscztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRnVsbFdpZHRoU2xpZGVyIGZyb20gJ21vZHVsZXMvc2hhcmVkL2Nhcm91c2VsL0Z1bGxXaWR0aFNsaWRlcic7XG5cbmNvbnN0IEltYWdlU2xpZGVyID0gKHsgaW1hZ2VzLCBuYW1lIH0pID0+IHtcblxuICBjb25zdCBpbWFnZXNVcmwgPSBpbWFnZXMubWFwKGkgPT4gaS51cmwpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RnVsbFdpZHRoU2xpZGVyIGltYWdlcz17aW1hZ2VzVXJsfSBuYW1lPXtuYW1lfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW1hZ2VTbGlkZXIucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkltYWdlU2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW1hZ2VzOiBbXSxcbiAgbmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IE9yRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogMixcbiAgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudCgjZjBmMGYwLCNmZmZmZmYpJ1xufSk7XG5cbmNvbnN0IE9SQ29tcCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcmVsYXRpdmUgdGV4dC1jZW50ZXIgcHQ1IHBiMjQgbXQ4IG1iOFwiPlxuICAgIDxPckRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXItdiB3ZnVsbFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjE0cCBwOCBvci1jb21wIGJvcmRlciByYWRpdXMxMDAgcGZjMyBpYmxvY2sgc2JjdyBhYnNvbHV0ZS1jZW50ZXJcIj5PUjwvc3Bhbj5cbiAgICA8L09yRGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE9SQ29tcDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvdGVsTG9nb1wiOiBcIl8xdWpGaWt1QmVLUXJ5a1NQcE9OM0pRXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgbG9hZCBhcyBmZXRjaFF1b3Rlc0RhdGEgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IGxvYWQgYXMgbG9hZENvbnN0YW50cyB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9jb25zdGFudHMnO1xuaW1wb3J0IHsgc3dpdGNoUXVvdGUsIHVwZGF0ZVJlcXVlc3RlZFRyaXBJZCB9IGZyb20gJ21vZHVsZXMvcXVvdGUvYWN0aW9ucy9xdW90ZUFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgZmV0Y2hEaXNjb3VudE9mZmVycyB9IGZyb20gJ21vZHVsZXMvZGlzY291bnRFbmdpbmUvYWN0aW9uJztcbmltcG9ydCB7IGZldGNoUHJlRGVmaW5lZE1lc3NhZ2VzIH0gZnJvbSAnbW9kdWxlcy9wZG0vYWN0aW9uJztcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFF1b3RlIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9yZWR1Y2Vycy9xdW90ZUxpc3QnO1xuaW1wb3J0IHsgc2hvd0hpZGVQZG1WaWV3LCBzZXRQZG1DYXRlZ29yeSB9IGZyb20gJ21vZHVsZXMvcGRtL2FjdGlvbic7XG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9Ib3RlbCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRRdW90ZSA9IGdldEN1cnJlbnRRdW90ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvdGVsczogY3VycmVudFF1b3RlLmhvdGVsc0RldGFpbCxcbiAgICAgIGhvdGVsVGV4dDogY3VycmVudFF1b3RlLmhvdGVsVGV4dFxuICAgIH07XG4gIH0sIHtcbiAgICBzZXRQZG1DYXRlZ29yeSxcbiAgICBzaG93SGlkZVBkbVZpZXdcbiAgfSkoSG90ZWwpKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIHdlYnZpZXdBY3Rpb25zOiBbZmV0Y2hRdW90ZXNEYXRhLCBsb2FkQ29uc3RhbnRzLCBmZXRjaFByZURlZmluZWRNZXNzYWdlcyxcbiAgICBmZXRjaERpc2NvdW50T2ZmZXJzLCBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkXVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQWdlbnRDaGF0QnV0dG9uIGZyb20gJy4vQWdlbnRDaGF0QnV0dG9uJztcbmltcG9ydCB7IERlZmF1bHRJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBRdW90ZUNhcmRIZWFkZXIgPSAoeyBoZWFkaW5nLCBjaGF0QnV0dG9uTmFtZSwgaGFuZGxlQ2hhdENsaWNrLCBpY29uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwZmMzIGYxNCBwdDE1IHBsMTUgcGIxNSBwcjE1IGZsZXggYWxpZ25DZW50ZXIgYXRfY2FyZEhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOCBhdF9jYXJkSWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICA8aDMgY2xhc3NOYW1lPVwiZmxleEZ1bGwgZjE2YSBmdzkgYXRfY2FyZEhlYWRpbmdcIj57aGVhZGluZ308L2gzPlxuICAgIDxBZ2VudENoYXRCdXR0b24gbmFtZT17Y2hhdEJ1dHRvbk5hbWV9IGhhbmRsZUNoYXRDbGljaz17aGFuZGxlQ2hhdENsaWNrfSAvPlxuICA8L2Rpdj5cbik7XG5cblF1b3RlQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYXRCdXR0b25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIGhhbmRsZUNoYXRDbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblF1b3RlQ2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICcnLFxuICBjaGF0QnV0dG9uTmFtZTogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgaWNvbjogPERlZmF1bHRJY29uIC8+LFxuICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVDYXJkSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==