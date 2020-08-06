require("source-map-support").install();
exports.ids = ["testimonials"];
exports.modules = {

/***/ "./app-v2/modules/common/ErrorBoundary/index.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/common/ErrorBoundary/index.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import logger from '../../../../app/utils/logger';
const logError = console.error;
const defaultWidth = '100%';
const defaultHeight = '100px'; // todo: move this image to cloudinary

const style = {
  backgroundImage: 'url(https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png)',
  border: 'solid 2px black',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  maxWidth: '100%'
};
/**
 * ErrorBoundary component used to handle
 * A javaScript error in a part of the UI shouldn’t break the whole app.
 */

let ErrorBoundary = class ErrorBoundary extends _react.Component {
  constructor(props) {
    super(props);
    const width = props.width ? props.width : defaultWidth;
    const height = props.height ? props.height : defaultHeight;
    this.state = {
      hasError: false,
      style: Object.assign({
        width,
        height
      }, style)
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
    this.logError({
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return _react.default.createElement("div", {
        style: this.state.style,
        className: this.props.className
      }, this.props.name && _react.default.createElement("div", {
        className: 'message'
      }, ' ', "Component Failed is ", this.props.name));
    }

    return this.props.children;
  }

  logError({
    error,
    info
  }) {
    // custom error string to use in SENTRY
    let props;

    if (this.props.children) {
      if (this.props.children instanceof Array) {
        props = [];
        this.props.children.forEach(child => {
          props.push(child.props);
        });
      } else if (this.props.children.props) {
        props = this.props.children.props;
      }
    }

    if (props) {
      info.props = props;
    }

    error.message = `Error Boundry ${error.message}`;
    logError({
      error,
      info
    });
  }

}; //todo: custom validator for width and height

ErrorBoundary.propTypes = {
  /** one or more children elements. */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired,

  /** width for the fallback UI can be in % or px. i.e 20px or 20% */
  width: _propTypes.default.string.isRequired,

  /** height for the fallback UI only in px. i.e 220px */
  height: _propTypes.default.string.isRequired,

  /** name of the classes we want to add to default UI i.e */
  className: _propTypes.default.string,

  /** name of the identifier to be shown in error message i.e Avatar, ChatBox */
  name: _propTypes.default.string
};
ErrorBoundary.defaultProps = {
  height: '100px',
  className: ''
};
var _default = ErrorBoundary;
exports.default = _default;

/***/ }),

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

/***/ "./app-v2/modules/shared/Avatar.js":
/*!*****************************************!*\
  !*** ./app-v2/modules/shared/Avatar.js ***!
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

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _avatarCm = _interopRequireDefault(__webpack_require__(/*! ./avatar.cm.scss */ "./app-v2/modules/shared/avatar.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Avatar = ({
  imagePath,
  name
}) => imagePath && !imagePath.includes('missing.png') ? _react.default.createElement("div", {
  className: `overflowh radius100 sbc4 mr15 relative agent-user-img ${_avatarCm.default.avatar}`
}, _react.default.createElement("img", {
  className: "wfull absolute-center",
  src: imagePath,
  alt: name
})) : _react.default.createElement("div", {
  className: `agent-user-name t0 mr15 hfull relative ${_avatarCm.default.avatar}`
}, _react.default.createElement("p", {
  className: "absolute-center f16"
}, (0, _utils.getInitialsFromName)(name)));

Avatar.propTypes = {
  imagePath: _propTypes.default.string,
  name: _propTypes.default.string.isRequired
};
Avatar.defaultProps = {
  imagePath: null
};
var _default = Avatar;
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

/***/ "./app-v2/modules/shared/avatar.cm.scss":
/*!**********************************************!*\
  !*** ./app-v2/modules/shared/avatar.cm.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"avatar": "lerjIxPJTrcyFkinh8ev_"
};

/***/ }),

/***/ "./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss":
/*!**********************************************************************!*\
  !*** ./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button-load-more-full": "_1lFOd"
};

/***/ }),

/***/ "./app-v2/modules/shared/loadMorePackages/index.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/shared/loadMorePackages/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

__webpack_require__(/*! ./LoadMorePackages.scss */ "./app-v2/modules/shared/loadMorePackages/LoadMorePackages.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadMorePackages = ({
  packagesRemaining,
  loadMorePackages,
  currentPage,
  title
}) => {
  const handleLoadMore = pageNumber => () => {
    loadMorePackages(pageNumber);
  };

  return _react.default.createElement("div", {
    className: packagesRemaining > 0 ? '' : 'hide'
  }, _react.default.createElement("div", {
    className: "mb15 mt8"
  }, _react.default.createElement("button", {
    onClick: handleLoadMore(currentPage + 1),
    className: "button-load-more-full",
    role: "button"
  }, "Load More (", packagesRemaining, " ", title)));
};

LoadMorePackages.propTypes = {
  packagesRemaining: _propTypes.default.number.isRequired,
  loadMorePackages: _propTypes.default.func.isRequired,
  currentPage: _propTypes.default.number.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = LoadMorePackages;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/Banner.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/testimonials/Banner.js ***!
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

var _BannerData = _interopRequireDefault(__webpack_require__(/*! ./BannerData */ "./app-v2/modules/testimonials/BannerData.js"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GImgDiv = _glamorous.default.div({
  height: '270px',
  '& img': {
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: 'none'
  }
});

const GOverlayDiv = _glamorous.default.div({
  background: 'rgba(0,0,0,0.4)'
});

const Banner = ({
  bannerPath,
  bannerAlt,
  totalRating,
  positiveRating
}) => {
  return _react.default.createElement("div", {
    className: "relative"
  }, _react.default.createElement(GImgDiv, {
    className: "overflowh relative"
  }, _react.default.createElement("img", {
    src: bannerPath,
    alt: bannerAlt,
    className: "absolute-center"
  })), _react.default.createElement(GOverlayDiv, {
    className: "absolute b0 l0 r0 p15 t0"
  }, _react.default.createElement(_BannerData.default, {
    totalReview: totalRating,
    title: bannerAlt,
    positiveReview: positiveRating
  })));
};

Banner.propTypes = {
  bannerPath: _propTypes.default.string.isRequired,
  bannerAlt: _propTypes.default.string.isRequired,
  totalRating: _propTypes.default.number.isRequired,
  positiveRating: _propTypes.default.number.isRequired
};
var _default = Banner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/BannerData.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/testimonials/BannerData.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getReviewsPercentage = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getReviewsPercentage = (positiveReview, totalReview) => positiveReview / totalReview * 100;

exports.getReviewsPercentage = getReviewsPercentage;

const BannerDataLeft = ({
  positiveReview,
  totalReview,
  title
}) => _react.default.createElement("div", {
  className: "absolute l15 b20 sfcw"
}, _react.default.createElement("h1", {
  className: "m0 f32 sfcw"
}, title), _react.default.createElement("p", {
  className: "at_positivePercentage fw7 f24"
}, _react.default.createElement("span", {
  className: "f24 m0"
}, getReviewsPercentage(positiveReview, totalReview).toFixed(2), "%", ' '), _react.default.createElement("span", {
  className: "f16 fw4"
}, "Positive Reviews")), _react.default.createElement("p", {
  className: "fw7 f16a"
}, "Based On ", totalReview, " Ratings"));

BannerDataLeft.propTypes = {
  positiveReview: _propTypes.default.number.isRequired,
  totalReview: _propTypes.default.number.isRequired,
  title: _propTypes.default.string.isRequired
};
var _default = BannerDataLeft;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/Destination.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/testimonials/Destination.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Destination = ({
  breadcrumbs
}) => {
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "pl15 pb5 pt5 pr15 flex alignCenter"
  }, _react.default.createElement("span", {
    className: "iblock input-24 verticalMiddle"
  }, _react.default.createElement(_Icon.LocationMarkerIcon, null)), _react.default.createElement("div", {
    className: "iblock pl15 verticalMiddle"
  }, _react.default.createElement("p", {
    className: "iblock f14 fw4 pfc3 pb2"
  }, "Destinations"), breadcrumbs.length === 4 ? _react.default.createElement("p", {
    className: "at_destinationDetail fw4 pfc2 f10"
  }, `${breadcrumbs[2].name}>${breadcrumbs[3].name}`) : null)));
};

Destination.propTypes = {
  breadcrumbs: _propTypes.default.array
};
Destination.defaultProps = {
  breadcrumbs: []
};
var _default = Destination;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/DestinationAndFilters.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/testimonials/DestinationAndFilters.js ***!
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

var _Filters = _interopRequireDefault(__webpack_require__(/*! modules/testimonials/Filters */ "./app-v2/modules/testimonials/Filters.js"));

var _FiltersView = _interopRequireDefault(__webpack_require__(/*! modules/testimonials/FiltersView */ "./app-v2/modules/testimonials/FiltersView.js"));

var _reducer = __webpack_require__(/*! screens/testimonials/reducer */ "./app-v2/screens/testimonials/reducer.js");

var _Destination = _interopRequireDefault(__webpack_require__(/*! modules/testimonials/Destination */ "./app-v2/modules/testimonials/Destination.js"));

var _DestinationView = _interopRequireDefault(__webpack_require__(/*! ./DestinationView */ "./app-v2/modules/testimonials/DestinationView.js"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let DestinationAndFilters = class DestinationAndFilters extends _react.Component {
  constructor(props) {
    super(props);

    this.destinationToggle = () => {
      this.setState(state => ({
        showDestinationPopup: !state.showDestinationPopup
      }));
    };

    this.filterToggle = () => {
      this.setState(state => ({
        showFilterPopup: !state.showFilterPopup
      }));
    };

    this.state = {
      showFilterPopup: false,
      showDestinationPopup: false,
      selectedFilters: (0, _reducer.parseFilters)(this.props.location.query, ['ratings[]']).ratings || []
    };
  }

  render() {
    const {
      filters,
      location,
      updateUrl,
      breadcrumbs,
      totalRating,
      testimonialDisplay,
      params
    } = this.props;
    const icon = `${_appConfig.default.assets.images}/public-product/Group_2.png`;
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "sbcw flex bs4 fleft wfull"
    }, _react.default.createElement("div", {
      className: "at_destination flexFull br",
      onClick: this.destinationToggle
    }, _react.default.createElement(_Destination.default, {
      breadcrumbs: breadcrumbs
    })), _react.default.createElement("div", {
      className: "at_filter flexFull bl",
      onClick: this.filterToggle
    }, _react.default.createElement(_Filters.default, {
      initialFilters: this.state.selectedFilters
    }))), _react.default.createElement("div", {
      className: this.state.showDestinationPopup ? '' : 'hide'
    }, _react.default.createElement(_DestinationView.default, {
      filters: filters,
      destinationToggle: this.destinationToggle,
      location: location,
      params: params,
      breadcrumbs: breadcrumbs
    })), _react.default.createElement("div", {
      className: this.state.showFilterPopup ? '' : 'hide'
    }, _react.default.createElement(_FiltersView.default, {
      ratingFilters: filters.ratings,
      location: location,
      updateUrl: updateUrl,
      initialFilters: this.state.selectedFilters,
      filterToggle: this.filterToggle
    })), _react.default.createElement("div", {
      className: "sbc5 pt15 pr15 pb15 pl15 clear wfull"
    }, _react.default.createElement("h3", {
      className: "f16a pfc2 pfc3 pb2"
    }, "What People Say"), totalRating > 25 ? _react.default.createElement("p", {
      className: "pfc4 fw7 f10"
    }, "Displaying Testimonial ", `1-${testimonialDisplay}`, " of ", totalRating, " in total") : _react.default.createElement("p", {
      className: "pfc4 fw7 f10 "
    }, `Displaying ${totalRating} Testimonials`, " ")), totalRating === 0 ? _react.default.createElement("div", {
      className: "text-center"
    }, _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement(_Img.default, {
      width: 320,
      height: 100,
      src: icon,
      ikSrc: icon,
      alt: 'no result found'
    }))) : null);
  }

};
DestinationAndFilters.propTypes = {
  filters: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  updateUrl: _propTypes.default.func.isRequired,
  breadcrumbs: _propTypes.default.array,
  totalRating: _propTypes.default.number.isRequired,
  testimonialDisplay: _propTypes.default.number.isRequired,
  params: _propTypes.default.object
};
var _default = DestinationAndFilters;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/DestinationView.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/testimonials/DestinationView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.titleFormatting = exports.isDropDownOpen = exports.Gdestination = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _reducer = __webpack_require__(/*! screens/testimonials/reducer */ "./app-v2/screens/testimonials/reducer.js");

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! modules/common/ErrorBoundary */ "./app-v2/modules/common/ErrorBoundary/index.js"));

var _constants = __webpack_require__(/*! ./constants */ "./app-v2/modules/testimonials/constants.js");

var _destination = __webpack_require__(/*! constants/destination */ "./app/constants/destination.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Gdestination = _glamorous.default.span({
  '& > a': {
    '&:hover': {
      color: '#20A397'
    }
  }
});

exports.Gdestination = Gdestination;

const isDropDownOpen = (filter, location, params) => {
  const currentDestination = isNaN((0, _reducer.parseDestinationId)(params.destination)) ? params.destination : location.query.destination;
  const index = currentDestination ? filter.findIndex(destination => destination.toLowerCase() === currentDestination.toLowerCase()) : -1;
  return index !== -1;
};

exports.isDropDownOpen = isDropDownOpen;

const titleFormatting = title => {
  if (title === _constants.ALL_DESTINATION) {
    return 'All';
  } else if (title === _constants.POPULAR_DESTINATION) {
    return 'Popular';
  } else {
    return title;
  }
};

exports.titleFormatting = titleFormatting;

const renderDestination = (data, params) => {
  return _react.default.createElement("div", null, data && Object.keys(data).filter(subtitle => data[subtitle].length).map((subtitle, i) => {
    return _react.default.createElement("div", {
      key: subtitle + i
    }, _react.default.createElement("p", {
      className: "pl24 pr24 fw7 bt pt15 pb8 fw9"
    }, titleFormatting(subtitle)), data[subtitle].sort().map(option => {
      return _react.default.createElement(Gdestination, null, _react.default.createElement(_reactRouter.Link, {
        key: option,
        to: `/testimonials/${option}`,
        className: `text-capitalize iblock wfull pl24 pr24 pt8 pb8 ${params.destination && params.destination.toLowerCase() === option.toLowerCase() ? 'pfc1' : 'pfc3'}`
      }, _react.default.createElement("span", {
        className: "pt3 pb3 iblock wfull"
      }, option)));
    }));
  }));
};

let DestinationView = class DestinationView extends _react.Component {
  constructor(props) {
    super(props);

    this.handleChange = title => {
      this.setState({
        active: title
      });
    };

    this.state = {
      active: props.breadcrumbs.length > 2 ? props.breadcrumbs[2].name.toLowerCase() : _destination.country.INDIA
    };
  }

  render() {
    const {
      filters,
      destinationToggle,
      params
    } = this.props;
    return _react.default.createElement("div", {
      className: "fixed t0 l0 sbcw z16 wfull hfull overflowa"
    }, _react.default.createElement(_ErrorBoundary.default, {
      width: "90%",
      height: "200px"
    }, _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "p15 bb"
    }, _react.default.createElement("div", {
      className: "at_close iblock icon-14",
      onClick: destinationToggle
    }, _react.default.createElement(_Icon.CloseDark, null)), _react.default.createElement("div", {
      className: "f16 fw4 pfc3 pl24 iblock"
    }, "Destination")), _react.default.createElement("div", {
      className: "bb clearfix"
    }, Object.keys(filters).map((title, i) => {
      if (title !== 'ratings') {
        return _react.default.createElement("div", {
          key: i,
          className: this.state.active === title ? `p15 activeFilter relative text-capitalize col-xs-6 text-center fw7` : `p15 col-xs-6 text-capitalize text-center fw7`,
          onClick: () => this.handleChange(title)
        }, title);
      }
    })), _react.default.createElement("div", null, renderDestination(filters[this.state.active], params)))));
  }

};
DestinationView.propTypes = {
  filters: _propTypes.default.object.isRequired,
  destinationToggle: _propTypes.default.func.isRequired,
  location: _propTypes.default.object,
  params: _propTypes.default.object,
  breadcrumbs: _propTypes.default.array
};
var _default = DestinationView;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/Filters.js":
/*!************************************************!*\
  !*** ./app-v2/modules/testimonials/Filters.js ***!
  \************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Filters = ({
  initialFilters
}) => {
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "pl15 pb5 pt5 pr15 flex alignCenter"
  }, _react.default.createElement("span", {
    className: "iblock input-24 verticalMiddle"
  }, _react.default.createElement(_Icon.FilterIcon, null)), _react.default.createElement("div", {
    className: "iblock pl15 verticalMiddle"
  }, _react.default.createElement("p", {
    className: "iblock f14 fw4 pfc3 pb2"
  }, "Filters"), _react.default.createElement("p", {
    className: "at_filterlength fw4 f10 pfc4"
  }, initialFilters.length, " selected"))));
};

Filters.propTypes = {
  initialFilters: _propTypes.default.array
};
Filters.defaultProps = {
  initialFilters: []
};
var _default = Filters;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/FiltersView.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/testimonials/FiltersView.js ***!
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

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let FiltersView = class FiltersView extends _react.default.Component {
  constructor(props) {
    super(props);

    this.checkStatus = (e, option, i) => {
      const ratingFilter = this.state.ratingFilters.map((ratingFilter, index) => {
        if (index !== i) {
          return ratingFilter;
        } else {
          return _objectSpread({}, ratingFilter, {
            checked: e.target.checked
          });
        }
      });
      let filter = [...this.state.selectedFilters];

      if (e.target.checked) {
        filter.push(option);
      } else {
        filter = filter.filter(rating => rating !== option);
      }

      this.setState({
        selectedFilters: filter,
        ratingFilters: ratingFilter
      });
    };

    this.handleSubmit = () => {
      const selectedFilters = [...this.state.selectedFilters];
      let testimonialUrl = this.props.location.pathname;
      let filterUrl = '';
      filterUrl += selectedFilters.map((filter, i) => {
        if (i > 0) {
          return `&ratings[]=${filter}`;
        }
      }).join('');
      filterUrl = selectedFilters.length ? `ratings[]=${selectedFilters[0]}` + filterUrl : '';
      filterUrl ? testimonialUrl += `?${filterUrl}` : testimonialUrl;
      this.props.updateUrl(testimonialUrl);
    };

    this.resetFilters = () => {
      const ratingFilter = this.state.ratingFilters.map(ratingFilter => _objectSpread({}, ratingFilter));
      ratingFilter.map(rating => {
        return rating.checked = false;
      });
      this.setState({
        ratingFilters: ratingFilter,
        selectedFilters: []
      });
    };

    this.state = {
      selectedFilters: props.initialFilters,
      ratingFilters: props.ratingFilters
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      selectedFilters: nextProps.initialFilters,
      ratingFilters: nextProps.ratingFilters
    });
  }

  render() {
    const {
      filterToggle
    } = this.props;
    return _react.default.createElement("div", {
      className: "fixed t0 l0 sbcw z16 wfull pb48 hfull overflowa"
    }, _react.default.createElement("div", {
      className: "p15 bb"
    }, _react.default.createElement("div", {
      className: "at_close iblock icon-14",
      onClick: filterToggle
    }, _react.default.createElement(_Icon.CloseDark, null)), _react.default.createElement("div", {
      className: "f16 fw4 pfc3 pl24 iblock"
    }, "Filters"), _react.default.createElement("div", {
      className: "at_reset fright f14 pfc4 text-uppercase fw4",
      onClick: this.resetFilters
    }, "Reset")), _react.default.createElement("div", {
      className: "p15"
    }, _react.default.createElement("div", {
      className: "fw7 pfc3 f14 pb15"
    }, "Traveler Rating"), _react.default.createElement("div", {
      className: "row"
    }, this.state.ratingFilters.map((data, i) => {
      return _react.default.createElement("div", {
        key: data.value,
        className: "col-xs-6"
      }, _react.default.createElement("input", {
        type: "checkbox",
        checked: data.checked,
        name: `[${data.value}]`,
        id: `[${data.value}]`,
        onChange: e => this.checkStatus(e, data.value, i),
        className: "checkbox-common"
      }), _react.default.createElement("label", {
        htmlFor: `[${data.value}]`
      }, _react.default.createElement(_RatingStar.default, {
        rating: parseInt(data.value)
      })));
    }))), _react.default.createElement("div", {
      className: "fixed p8 wfull b0 bs6 sbcw z1"
    }, _react.default.createElement("button", {
      type: "button",
      className: "at_handleSubmit wfull f14 fw7 sfcw pbc2 input-with-icon-box",
      onClick: this.handleSubmit
    }, "Apply Filter")));
  }

};
FiltersView.propTypes = {
  ratingFilters: _propTypes.default.array.isRequired,
  location: _propTypes.default.object.isRequired,
  updateUrl: _propTypes.default.func.isRequired,
  initialFilters: _propTypes.default.array,
  filterToggle: _propTypes.default.func.isRequired
};
FiltersView.defaultProps = {
  initialFilters: []
};
var _default = FiltersView;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/G.js":
/*!******************************************!*\
  !*** ./app-v2/modules/testimonials/G.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GUserDiv = exports.GTestimonialCardDiv = exports.GRatingBarDiv = exports.GRatingRowDiv = exports.GRatingCountP = exports.GFeedbackTypeP = exports.GLargeHeading = exports.GTestimonialsBannerDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const GTestimonialsBannerDiv = _glamorous.default.div({
  height: '400px',
  '& .bannerImg': {
    height: '400px',
    '& img': {
      minWidth: '100%',
      minHeight: '100%'
    },
    '&:after': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.2)',
      content: '\' \''
    }
  },
  '& .bannerData': {
    padding: '0',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .bannerDataRight': {
      padding: '80px'
    }
  }
});

exports.GTestimonialsBannerDiv = GTestimonialsBannerDiv;

const GLargeHeading = _glamorous.default.h2({
  fontSize: '56px',
  lineHeight: '64px'
});

exports.GLargeHeading = GLargeHeading;

const GFeedbackTypeP = _glamorous.default.p({
  width: '115px'
});

exports.GFeedbackTypeP = GFeedbackTypeP;

const GRatingCountP = _glamorous.default.p({
  width: '80px'
});

exports.GRatingCountP = GRatingCountP;

const GRatingRowDiv = _glamorous.default.div({
  marginBottom: '4px',
  '&:last-child': {
    marginBottom: '0'
  }
});

exports.GRatingRowDiv = GRatingRowDiv;

const GRatingBarDiv = _glamorous.default.div({
  height: '4px',
  width: '192px',
  '& .actualRatings': {
    height: '4px',
    width: 'auto'
  }
});

exports.GRatingBarDiv = GRatingBarDiv;

const GTestimonialCardDiv = _glamorous.default.div({
  borderBottom: '1px solid #d4d4d4',
  '&:last-child': {
    borderBottom: '0 none'
  }
});

exports.GTestimonialCardDiv = GTestimonialCardDiv;

const GUserDiv = _glamorous.default.div({
  width: '240px'
});

exports.GUserDiv = GUserDiv;

/***/ }),

/***/ "./app-v2/modules/testimonials/RatingBar.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/testimonials/RatingBar.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getWidth = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _G = __webpack_require__(/*! ./G */ "./app-v2/modules/testimonials/G.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getWidth = (reviewNumbers, category, totalReviews) => {
  return reviewNumbers[category] / totalReviews * 100;
};

exports.getWidth = getWidth;

const RatingBar = ({
  reviewNumbers,
  totalReviews
}) => _react.default.createElement("div", {
  className: "bannerDataReviews sbcw"
}, Object.keys(reviewNumbers).map((category, i) => {
  return _react.default.createElement("div", {
    key: i
  }, _react.default.createElement(_G.GRatingRowDiv, {
    className: "clearfix mb8 flex alignCenter spaceBetween"
  }, _react.default.createElement(_G.GFeedbackTypeP, {
    className: "m0 f14"
  }, category), _react.default.createElement(_G.GRatingBarDiv, {
    className: "pbc4 ml15 mr15 relative"
  }, _react.default.createElement("div", {
    className: "actualRatings absolute l0 t0 b0 pbc1",
    style: {
      width: getWidth(reviewNumbers, category, totalReviews) + '%'
    }
  })), _react.default.createElement(_G.GRatingCountP, {
    className: "m0 f14"
  }, reviewNumbers[category])));
}));

RatingBar.propTypes = {
  reviewNumbers: _propTypes.default.shape({
    bad: _propTypes.default.number,
    poor: _propTypes.default.number,
    good: _propTypes.default.number,
    veryGood: _propTypes.default.number,
    excellent: _propTypes.default.number
  }).isRequired,
  totalReviews: _propTypes.default.number.isRequired
};
var _default = RatingBar;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/ReviewCard.js":
/*!***************************************************!*\
  !*** ./app-v2/modules/testimonials/ReviewCard.js ***!
  \***************************************************/
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

var _TestimonialsUser = _interopRequireDefault(__webpack_require__(/*! ./TestimonialsUser */ "./app-v2/modules/testimonials/TestimonialsUser.js"));

var _TestimonialsCard = _interopRequireDefault(__webpack_require__(/*! ./TestimonialsCard */ "./app-v2/modules/testimonials/TestimonialsCard.js"));

var _reducer = __webpack_require__(/*! screens/testimonials/reducer */ "./app-v2/screens/testimonials/reducer.js");

__webpack_require__(/*! theme/testimonial.scss */ "./app/theme/testimonial.scss");

var _class, _temp, _initialiseProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ReviewCard = (_temp = _class = class ReviewCard extends _react.Component {
  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    this.state = {
      activeItem: -1
    };
  }

  componentDidMount() {
    this.scrollPage(this.props);
  }

  render() {
    const {
      testimonials,
      params,
      location
    } = this.props;
    return _react.default.createElement("div", {
      className: "review-card-container"
    }, testimonials.map(review => _react.default.createElement("div", {
      key: review.id,
      id: `${review.id}`,
      className: `user-testimonial-card sbcw p15 bb mb1 ${this.state.activeItem === review.id ? ' active' : ''}`
    }, _react.default.createElement(_TestimonialsCard.default, {
      rating: review.rating,
      testimonialBody: review.body,
      title: review.title,
      id: review.id,
      destination: review.destination,
      params: params,
      location: location
    }), _react.default.createElement("div", {
      className: "mt8 pr64 mr24"
    }, _react.default.createElement(_TestimonialsUser.default, {
      author: review.author,
      lastUpdated: review.lastUpdated
    })), Object.keys(review.agentComment).length ? _react.default.createElement("div", {
      className: "sbc5 p15 mt15 testimonial-comment radius2 relative"
    }, _react.default.createElement("div", {
      className: "fw7 pfc1 f16 m0 mr8 mb8 _title iblock"
    }, "Response from the agent"), _react.default.createElement("div", {
      className: "f14 pfc3"
    }, review.agentComment.body), _react.default.createElement("div", {
      className: "f16 pfc3 fw9 at_agentComment"
    }, review.agentComment.title)) : null)));
  }

}, _initialiseProps = function () {
  this.scrollPage = props => {
    const id = (0, _reducer.parseDestinationId)(props.params.destination);

    if (isNaN(id)) {
      this.setState({
        activeItem: -1
      });
    } else {
      this.setState({
        activeItem: id
      }, () => {
        _reactScroll.scroller.scrollTo(`${id}`, {
          duration: 1000,
          smooth: true,
          offset: -60
        });
      });
    }
  };
}, _temp);
ReviewCard.propTypes = {
  testimonials: _propTypes.default.array.isRequired,
  params: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired
};
var _default = ReviewCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/TestimonialsCard.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/testimonials/TestimonialsCard.js ***!
  \*********************************************************/
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

var _AgentRating = _interopRequireDefault(__webpack_require__(/*! modules/shared/agentProfile/AgentRating */ "./app-v2/modules/shared/agentProfile/AgentRating.js"));

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _reducer = __webpack_require__(/*! ../../screens/testimonials/reducer */ "./app-v2/screens/testimonials/reducer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseString = content => {
  const start = 195;

  if (content.length <= start) {
    return {
      aboutLess: content.substring(0, start),
      aboutMore: ''
    };
  }

  return {
    aboutLess: content.substring(0, start),
    aboutMore: content.substring(start)
  };
};

const TestimonialsCard = ({
  testimonialBody,
  title,
  rating,
  id,
  destination,
  params,
  location
}) => {
  return _react.default.createElement("div", null, params.destination ? _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "mb4 flex flexCenterItems"
  }, _react.default.createElement("h6", {
    className: "fw7 pfc1 f16 m0 mr8 _title"
  }, title), _react.default.createElement(_AgentRating.default, {
    agentRating: rating
  })), _react.default.createElement(_ShowMore.default, {
    wrapText: parseString(testimonialBody).aboutLess,
    moreText: parseString(testimonialBody).aboutMore,
    showMoreText: "Read More",
    showLessText: "Read Less",
    appendText: '...'
  })) : _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "mb4 flex flexCenterItems"
  }, _react.default.createElement(_reactRouter.Link, {
    className: "pfc3",
    to: `/testimonials/${id}-${title}-reviews?destination=${destination}`
  }, _react.default.createElement("h6", {
    className: "fw7 pfc1 f16 m0 mr8 mb8 _title iblock"
  }, title)), _react.default.createElement(_AgentRating.default, {
    agentRating: rating
  })), _react.default.createElement(_ShowMore.default, {
    wrapText: parseString(testimonialBody).aboutLess,
    moreText: parseString(testimonialBody).aboutMore,
    showMoreText: "Read More",
    showLessText: "Read Less",
    appendText: '...'
  })));
};

TestimonialsCard.propTypes = {
  testimonialBody: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  rating: _propTypes.default.number.isRequired,
  id: _propTypes.default.number.isRequired,
  destination: _propTypes.default.string,
  params: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired
};
var _default = TestimonialsCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/TestimonialsUser.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/testimonials/TestimonialsUser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _Avatar = _interopRequireDefault(__webpack_require__(/*! ../shared/Avatar */ "./app-v2/modules/shared/Avatar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TestimonialsUser = ({
  author,
  lastUpdated
}) => {
  const name = author.authorName ? author.authorName : 'Anonymous';
  return _react.default.createElement("div", {
    className: "flex flexCenterItems alignCenter"
  }, _react.default.createElement("div", {
    className: "radius100 text-uppercase text-center sfcw fw7 reviewer__testimonial"
  }, _react.default.createElement(_Avatar.default, {
    name: name,
    imagePath: author.authorPic
  })), _react.default.createElement("div", {
    className: "ml15 minW0"
  }, _react.default.createElement("h6", {
    className: "f14 ellipsis fw7 mb2 at_testi_title _name minW0"
  }, name), _react.default.createElement("p", {
    className: "m0 f12 pfc4 _userInfo"
  }, author.userLocation ? `${author.userLocation}, ${(0, _DateTime.timeFromNow)(lastUpdated)}` : (0, _DateTime.timeFromNow)(lastUpdated))));
};

TestimonialsUser.propTypes = {
  author: _propTypes.default.object.isRequired,
  lastUpdated: _propTypes.default.string.isRequired
};
var _default = TestimonialsUser;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/testimonials/constants.js":
/*!**************************************************!*\
  !*** ./app-v2/modules/testimonials/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POPULAR_DESTINATION = exports.ALL_DESTINATION = void 0;
const ALL_DESTINATION = 'allDestinations';
exports.ALL_DESTINATION = ALL_DESTINATION;
const POPULAR_DESTINATION = 'popularDestination';
exports.POPULAR_DESTINATION = POPULAR_DESTINATION;

/***/ }),

/***/ "./app-v2/screens/testimonials/Testimonials.js":
/*!*****************************************************!*\
  !*** ./app-v2/screens/testimonials/Testimonials.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _TravelerReview = _interopRequireDefault(__webpack_require__(/*! modules/travelerReview/TravelerReview */ "./app-v2/modules/travelerReview/TravelerReview.js"));

var _RatingBar = _interopRequireDefault(__webpack_require__(/*! modules/testimonials/RatingBar */ "./app-v2/modules/testimonials/RatingBar.js"));

var _HeaderHome = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderHome */ "./app-v2/modules/header/HeaderHome.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! modules/shared/Footer */ "./app-v2/modules/shared/Footer/index.js"));

var _ReviewCard = _interopRequireDefault(__webpack_require__(/*! modules/testimonials/ReviewCard */ "./app-v2/modules/testimonials/ReviewCard.js"));

var _Banner = _interopRequireDefault(__webpack_require__(/*! modules/testimonials/Banner */ "./app-v2/modules/testimonials/Banner.js"));

var _DestinationAndFilters = _interopRequireDefault(__webpack_require__(/*! modules/testimonials/DestinationAndFilters */ "./app-v2/modules/testimonials/DestinationAndFilters.js"));

var _loadMorePackages = _interopRequireDefault(__webpack_require__(/*! modules/shared/loadMorePackages */ "./app-v2/modules/shared/loadMorePackages/index.js"));

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! modules/shared/Breadcrumb */ "./app-v2/modules/shared/Breadcrumb.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! modules/packages/popular/index */ "./app-v2/modules/packages/popular/index.js"));

var _travellerStory = _interopRequireDefault(__webpack_require__(/*! modules/travellerStory */ "./app-v2/modules/travellerStory/index.js"));

var _seoHelpers = __webpack_require__(/*! helpers/seoHelpers */ "./app/helpers/seoHelpers.js");

var _reducer = __webpack_require__(/*! ./reducer */ "./app-v2/screens/testimonials/reducer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Testimonials = class Testimonials extends _react.Component {
  constructor(props) {
    super(props);

    this.loadMoreCards = () => {
      this.pageNumber += 1;
      this.props.loadCards(this.props.params.destination, (0, _reducer.testimonialsFilter)(this.props.location.query, 'query').filters, this.pageNumber);
    };

    this.pageNumber = 1;
  }

  render() {
    const {
      data,
      location,
      updateUrl,
      packages,
      params
    } = this.props;
    const {
      bannerImage,
      totalRating,
      positiveRating,
      overall,
      topTestimonials,
      filters,
      testimonials,
      htmlTags,
      breadcrumbs
    } = data;
    topTestimonials.map(testimonial => testimonial.allowReadMore = false);
    const overallRatting = {
      'Excellent': overall.excellent || 0,
      'Very Good': overall.veryGood || 0,
      'Good': overall.good || 0,
      'Poor': overall.poor || 0,
      'Bad': overall.bad || 0
    };
    const totalReview = overallRatting.Excellent + overallRatting['Very Good'] + overallRatting.Good + overallRatting.Poor + overallRatting.Bad;
    return _react.default.createElement("div", {
      className: "sbc5"
    }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("meta", {
      charSet: "utf-8"
    }), (0, _seoHelpers.createHelmet)(htmlTags, '', location.pathname)), _react.default.createElement("div", {
      className: "absolute t0 l0 r0 z5"
    }, _react.default.createElement(_HeaderHome.default, {
      isTransparent: true
    })), _react.default.createElement("div", {
      className: "relative mb8"
    }, _react.default.createElement(_Banner.default, {
      positiveRating: positiveRating,
      bannerPath: bannerImage.src,
      totalRating: totalReview,
      bannerAlt: bannerImage.title
    })), _react.default.createElement("div", {
      className: "p24 sbcw mb8"
    }, _react.default.createElement(_RatingBar.default, {
      reviewNumbers: overallRatting,
      totalReviews: totalReview
    })), _react.default.createElement(_DestinationAndFilters.default, {
      filters: filters,
      location: location,
      updateUrl: updateUrl,
      totalRating: totalRating,
      breadcrumbs: breadcrumbs,
      testimonialDisplay: testimonials.length,
      params: params
    }), _react.default.createElement("div", {
      className: "sbcw mb8"
    }, _react.default.createElement(_ReviewCard.default, {
      testimonials: testimonials,
      params: params,
      location: location
    })), _react.default.createElement("div", {
      className: "row row- mb8"
    }, _react.default.createElement(_loadMorePackages.default, {
      packagesRemaining: totalRating - testimonials.length,
      loadMorePackages: this.loadMoreCards,
      currentPage: location.query.page && location.query.page || 1,
      title: `packages remaining)`
    })), packages && packages.length ? _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row",
      id: "packages-sec"
    }, _react.default.createElement(_index.default.container, {
      title: 'Plan For Your Next Holiday',
      heading: 'Browse Packages, Choose Your Next Destination'
    }))) : null, _react.default.createElement("div", {
      className: "mb8 overflowh pl15 pr15 "
    }, _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement(_travellerStory.default.container, {
      spacingCss: {
        marginBottom: '48px'
      },
      config: {
        csr: true
      },
      viewAll: "/blog/travelogues?referer=travelogue_testimonial"
    }))), _react.default.createElement("div", {
      className: "p8 pt0"
    }, _react.default.createElement(_Breadcrumb.default, {
      breadcrumbs: breadcrumbs
    })), _react.default.createElement(_Footer.default, null));
  }

};
Testimonials.propTypes = {
  data: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  updateUrl: _propTypes.default.func.isRequired,
  loadCards: _propTypes.default.func.isRequired,
  params: _propTypes.default.object.isRequired,
  packages: _propTypes.default.array
};
var _default = Testimonials;
exports.default = _default;

/***/ }),

/***/ "./app/constants/destination.js":
/*!**************************************!*\
  !*** ./app/constants/destination.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.country = void 0;
const country = {
  INDIA: 'india'
};
exports.country = country;

/***/ }),

/***/ "./app/theme/testimonial.scss":
/*!************************************!*\
  !*** ./app/theme/testimonial.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"reviewer__testimonial": "_3r9_9",
	"review-card-container": "_1pnQH",
	"user-testimonial-card": "_2l9nw",
	"testimonial-comment": "_gg4jL",
	"activeFilter": "_1r8Nx"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jb21tb24vRXJyb3JCb3VuZGFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZWFkZXIvSGVhZGVySG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvQXZhdGFyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9SYXRpbmdTdGFyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC9hdmF0YXIuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvbG9hZE1vcmVQYWNrYWdlcy9Mb2FkTW9yZVBhY2thZ2VzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL2xvYWRNb3JlUGFja2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdGVzdGltb25pYWxzL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90ZXN0aW1vbmlhbHMvQmFubmVyRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90ZXN0aW1vbmlhbHMvRGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvdGVzdGltb25pYWxzL0Rlc3RpbmF0aW9uQW5kRmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90ZXN0aW1vbmlhbHMvRGVzdGluYXRpb25WaWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Rlc3RpbW9uaWFscy9GaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Rlc3RpbW9uaWFscy9GaWx0ZXJzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90ZXN0aW1vbmlhbHMvRy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy90ZXN0aW1vbmlhbHMvUmF0aW5nQmFyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Rlc3RpbW9uaWFscy9SZXZpZXdDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHNDYXJkLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHNVc2VyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3Rlc3RpbW9uaWFscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvdGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uc3RhbnRzL2Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC90aGVtZS90ZXN0aW1vbmlhbC5zY3NzIl0sIm5hbWVzIjpbImxvZ0Vycm9yIiwiY29uc29sZSIsImVycm9yIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwibWF4V2lkdGgiLCJFcnJvckJvdW5kYXJ5IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhdGUiLCJoYXNFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudERpZENhdGNoIiwiaW5mbyIsInNldFN0YXRlIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwibmFtZSIsImNoaWxkcmVuIiwiQXJyYXkiLCJmb3JFYWNoIiwiY2hpbGQiLCJwdXNoIiwibWVzc2FnZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIkhlYWRlckhvbWUiLCJpc1RyYW5zcGFyZW50IiwiYm9vbCIsIkF2YXRhciIsImltYWdlUGF0aCIsImluY2x1ZGVzIiwic3R5bGVzIiwiYXZhdGFyIiwiR1JhdGluZ1VsIiwiZ2xhbW9yb3VzIiwiZGl2IiwibWFyZ2luIiwicGFkZGluZyIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImdldFN0YXJzIiwic3Rhck51bSIsImtleVR5cGUiLCJpIiwic3RhcnMiLCJSYXRpbmdTdGFyIiwicmF0aW5nIiwiaXNFbXB0eVN0YXJzSGlkZGVuIiwicmF0aW5nQmFyUmFuZ2UiLCJ0cnVuY2F0ZWRSYXRpbmciLCJNYXRoIiwidHJ1bmMiLCJmcmFjdGlvbmFsUmF0aW5nIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJmdWxsU3RhckNvdW50IiwiaGFsZlN0YXJDb3VudCIsImVtcHR5U3RhckNvdW50IiwiU3Rhckljb24iLCJIYWxmU3RhciIsIlN0YXJJY29uRW1wdHkiLCJudW1iZXIiLCJMb2FkTW9yZVBhY2thZ2VzIiwicGFja2FnZXNSZW1haW5pbmciLCJsb2FkTW9yZVBhY2thZ2VzIiwiY3VycmVudFBhZ2UiLCJ0aXRsZSIsImhhbmRsZUxvYWRNb3JlIiwicGFnZU51bWJlciIsImZ1bmMiLCJHSW1nRGl2IiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJHT3ZlcmxheURpdiIsImJhY2tncm91bmQiLCJCYW5uZXIiLCJiYW5uZXJQYXRoIiwiYmFubmVyQWx0IiwidG90YWxSYXRpbmciLCJwb3NpdGl2ZVJhdGluZyIsImdldFJldmlld3NQZXJjZW50YWdlIiwicG9zaXRpdmVSZXZpZXciLCJ0b3RhbFJldmlldyIsIkJhbm5lckRhdGFMZWZ0IiwiRGVzdGluYXRpb24iLCJicmVhZGNydW1icyIsImxlbmd0aCIsIlByb3BUcGVzIiwiYXJyYXkiLCJEZXN0aW5hdGlvbkFuZEZpbHRlcnMiLCJkZXN0aW5hdGlvblRvZ2dsZSIsInNob3dEZXN0aW5hdGlvblBvcHVwIiwiZmlsdGVyVG9nZ2xlIiwic2hvd0ZpbHRlclBvcHVwIiwic2VsZWN0ZWRGaWx0ZXJzIiwibG9jYXRpb24iLCJxdWVyeSIsInJhdGluZ3MiLCJmaWx0ZXJzIiwidXBkYXRlVXJsIiwidGVzdGltb25pYWxEaXNwbGF5IiwicGFyYW1zIiwiaWNvbiIsImNvbmZpZyIsImFzc2V0cyIsImltYWdlcyIsIm9iamVjdCIsIkdkZXN0aW5hdGlvbiIsInNwYW4iLCJjb2xvciIsImlzRHJvcERvd25PcGVuIiwiZmlsdGVyIiwiY3VycmVudERlc3RpbmF0aW9uIiwiaXNOYU4iLCJkZXN0aW5hdGlvbiIsImluZGV4IiwiZmluZEluZGV4IiwidG9Mb3dlckNhc2UiLCJ0aXRsZUZvcm1hdHRpbmciLCJBTExfREVTVElOQVRJT04iLCJQT1BVTEFSX0RFU1RJTkFUSU9OIiwicmVuZGVyRGVzdGluYXRpb24iLCJkYXRhIiwia2V5cyIsInN1YnRpdGxlIiwibWFwIiwic29ydCIsIm9wdGlvbiIsIkRlc3RpbmF0aW9uVmlldyIsImhhbmRsZUNoYW5nZSIsImFjdGl2ZSIsImNvdW50cnkiLCJJTkRJQSIsIkZpbHRlcnMiLCJpbml0aWFsRmlsdGVycyIsIkZpbHRlcnNWaWV3IiwiUmVhY3QiLCJjaGVja1N0YXR1cyIsImUiLCJyYXRpbmdGaWx0ZXIiLCJyYXRpbmdGaWx0ZXJzIiwiY2hlY2tlZCIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInRlc3RpbW9uaWFsVXJsIiwicGF0aG5hbWUiLCJmaWx0ZXJVcmwiLCJqb2luIiwicmVzZXRGaWx0ZXJzIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ2YWx1ZSIsInBhcnNlSW50IiwiR1Rlc3RpbW9uaWFsc0Jhbm5lckRpdiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImNvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJHTGFyZ2VIZWFkaW5nIiwiaDIiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJHRmVlZGJhY2tUeXBlUCIsInAiLCJHUmF0aW5nQ291bnRQIiwiR1JhdGluZ1Jvd0RpdiIsIm1hcmdpbkJvdHRvbSIsIkdSYXRpbmdCYXJEaXYiLCJHVGVzdGltb25pYWxDYXJkRGl2IiwiYm9yZGVyQm90dG9tIiwiR1VzZXJEaXYiLCJnZXRXaWR0aCIsInJldmlld051bWJlcnMiLCJjYXRlZ29yeSIsInRvdGFsUmV2aWV3cyIsIlJhdGluZ0JhciIsInNoYXBlIiwiYmFkIiwicG9vciIsImdvb2QiLCJ2ZXJ5R29vZCIsImV4Y2VsbGVudCIsIlJldmlld0NhcmQiLCJhY3RpdmVJdGVtIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JvbGxQYWdlIiwidGVzdGltb25pYWxzIiwicmV2aWV3IiwiaWQiLCJib2R5IiwiYXV0aG9yIiwibGFzdFVwZGF0ZWQiLCJhZ2VudENvbW1lbnQiLCJzY3JvbGxlciIsInNjcm9sbFRvIiwiZHVyYXRpb24iLCJzbW9vdGgiLCJvZmZzZXQiLCJwYXJzZVN0cmluZyIsInN0YXJ0IiwiYWJvdXRMZXNzIiwic3Vic3RyaW5nIiwiYWJvdXRNb3JlIiwiVGVzdGltb25pYWxzQ2FyZCIsInRlc3RpbW9uaWFsQm9keSIsIlRlc3RpbW9uaWFsc1VzZXIiLCJhdXRob3JOYW1lIiwiYXV0aG9yUGljIiwidXNlckxvY2F0aW9uIiwiVGVzdGltb25pYWxzIiwibG9hZE1vcmVDYXJkcyIsImxvYWRDYXJkcyIsInBhY2thZ2VzIiwiYmFubmVySW1hZ2UiLCJvdmVyYWxsIiwidG9wVGVzdGltb25pYWxzIiwiaHRtbFRhZ3MiLCJ0ZXN0aW1vbmlhbCIsImFsbG93UmVhZE1vcmUiLCJvdmVyYWxsUmF0dGluZyIsIkV4Y2VsbGVudCIsIkdvb2QiLCJQb29yIiwiQmFkIiwic3JjIiwicGFnZSIsImNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQTtBQUVBLE1BQU1BLFdBQVdDLFFBQVFDLEtBQXpCO0FBQ0EsTUFBTUMsZUFBZSxNQUFyQjtBQUNBLE1BQU1DLGdCQUFnQixPQUF0QixDLENBR0E7O0FBQ0EsTUFB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NENFO0FBQUssaUJBQVU7QUFBZixPQUNFO0FBQUssaUJBQVU7QUFBZixPQUNFLDZCQUFDLHVCQUFELENBQWlCLFNBQWpCO0FBQ0Usa0JBQVk7QUFBRWtGLHNCQUFjO0FBQWhCLE9BRGQ7QUFFRSxjQUFRO0FBQUU0RCxhQUFLO0FBQVAsT0FGVjtBQUdFLGVBQVE7QUFIVixNQURGLENBREYsQ0E1Q0YsRUFxREU7QUFBSyxpQkFBVTtBQUFmLE9BQ0UsNkJBQUMsbUJBQUQ7QUFBWSxtQkFBYS9JO0FBQXpCLE1BREYsQ0FyREYsRUF3REUsNkJBQUMsZUFBRCxPQXhERixDQURGO0FBNEREOztBQTlGa0MsQztBQWlHckM4SCxhQUFhbE0sU0FBYixHQUF5QjtBQUN2QnlHLFFBQU14RyxtQkFBVXdGLE1BQVYsQ0FBaUJwRixVQURBO0FBRXZCeUUsWUFBVTdFLG1CQUFVd0YsTUFBVixDQUFpQnBGLFVBRko7QUFHdkI2RSxhQUFXakYsbUJBQVVtRCxJQUFWLENBQWUvQyxVQUhIO0FBSXZCK0wsYUFBV25NLG1CQUFVbUQsSUFBVixDQUFlL0MsVUFKSDtBQUt2QitFLFVBQVFuRixtQkFBVXdGLE1BQVYsQ0FBaUJwRixVQUxGO0FBTXZCZ00sWUFBVXBNLG1CQUFVc0U7QUFORyxDQUF6QjtlQVNlMkgsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIUixNQUFNaEYsVUFBUztBQUNwQkMsU0FBTTtBQURjLENBQWY7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoidGVzdGltb25pYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIGltcG9ydCBsb2dnZXIgZnJvbSAnLi4vLi4vLi4vLi4vYXBwL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IGxvZ0Vycm9yID0gY29uc29sZS5lcnJvcjtcbmNvbnN0IGRlZmF1bHRXaWR0aCA9ICcxMDAlJztcbmNvbnN0IGRlZmF1bHRIZWlnaHQgPSAnMTAwcHgnO1xuXG5cbi8vIHRvZG86IG1vdmUgdGhpcyBpbWFnZSB0byBjbG91ZGluYXJ5XG5jb25zdCBzdHlsZSA9IHtcbiAgYmFja2dyb3VuZEltYWdlOlxuICAgICd1cmwoaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzEwNzgzNDcvc2NyZWVuc2hvdHMvMjc5OTU2Ni9vb3BzLnBuZyknLFxuICBib3JkZXI6ICdzb2xpZCAycHggYmxhY2snLFxuICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICBtYXhXaWR0aDogJzEwMCUnXG59O1xuXG4vKipcbiAqIEVycm9yQm91bmRhcnkgY29tcG9uZW50IHVzZWQgdG8gaGFuZGxlXG4gKiBBIGphdmFTY3JpcHQgZXJyb3IgaW4gYSBwYXJ0IG9mIHRoZSBVSSBzaG91bGRu4oCZdCBicmVhayB0aGUgd2hvbGUgYXBwLlxuICovXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHdpZHRoID0gcHJvcHMud2lkdGggPyBwcm9wcy53aWR0aCA6IGRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiBkZWZhdWx0SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZVxuICAgICAgKVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaCAoZXJyb3IsIGluZm8pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhhc0Vycm9yOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ0Vycm9yKHsgZXJyb3IsIGluZm8gfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWVzc2FnZSd9PlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICBDb21wb25lbnQgRmFpbGVkIGlzIHt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG5cbiAgbG9nRXJyb3IgKHsgZXJyb3IsIGluZm8gfSkge1xuICAgIC8vIGN1c3RvbSBlcnJvciBzdHJpbmcgdG8gdXNlIGluIFNFTlRSWVxuICAgIGxldCBwcm9wcztcbiAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBwcm9wcyA9IFtdO1xuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgIHByb3BzLnB1c2goY2hpbGQucHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcykge1xuICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBpbmZvLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGVycm9yLm1lc3NhZ2UgPSBgRXJyb3IgQm91bmRyeSAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICBsb2dFcnJvcih7IGVycm9yLCBpbmZvIH0pO1xuICB9XG59XG5cbi8vdG9kbzogY3VzdG9tIHZhbGlkYXRvciBmb3Igd2lkdGggYW5kIGhlaWdodFxuXG5FcnJvckJvdW5kYXJ5LnByb3BUeXBlcyA9IHtcbiAgLyoqIG9uZSBvciBtb3JlIGNoaWxkcmVuIGVsZW1lbnRzLiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIF0pLmlzUmVxdWlyZWQsXG4gIC8qKiB3aWR0aCBmb3IgdGhlIGZhbGxiYWNrIFVJIGNhbiBiZSBpbiAlIG9yIHB4LiBpLmUgMjBweCBvciAyMCUgKi9cbiAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIGhlaWdodCBmb3IgdGhlIGZhbGxiYWNrIFVJIG9ubHkgaW4gcHguIGkuZSAyMjBweCAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIG5hbWUgb2YgdGhlIGNsYXNzZXMgd2Ugd2FudCB0byBhZGQgdG8gZGVmYXVsdCBVSSBpLmUgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogbmFtZSBvZiB0aGUgaWRlbnRpZmllciB0byBiZSBzaG93biBpbiBlcnJvciBtZXNzYWdlIGkuZSBBdmF0YXIsIENoYXRCb3ggKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuRXJyb3JCb3VuZGFyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogJzEwMHB4JyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IFRUbG9nbywgVFRsb2dvU2Vjb25kYXJ5IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSAnLi9CdXJnZXJNZW51JztcbmltcG9ydCAnLi9IZWFkZXIuc2Nzcyc7XG5cbmNvbnN0IEhlYWRlckhvbWUgPSAoeyBpc1RyYW5zcGFyZW50IH0pID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9XCJ3ZnVsbCB6MTAgcmVsYXRpdmVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17aXNUcmFuc3BhcmVudCA/ICdoZWFkZXItY29uLXRyYW5zcGFyZW50JyA6ICdoZWFkZXItY29uJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb24tZmlyc3QgZmxleCBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgPEJ1cmdlck1lbnUgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dC1sb2dvIGZsZXhGdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPG1ldGEgaXRlbVByb3A9XCJ1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb21cIiAvPlxuICAgICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwibG9nb1wiIGNvbnRlbnQ9XCJodHRwczovL3RyYXZlbHRyaWFuZ2xlLmNvbS9wcF9zdGF0aWMvcHBfbmV3X2xvZ28uanBnXCIgLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0dC1sb2dvLWNvbnRhaW5lclwiIHRvPVwiL1wiPlxuICAgICAgICAgICAge2lzVHJhbnNwYXJlbnQgPyA8VFRsb2dvU2Vjb25kYXJ5IC8+IDogPFRUbG9nbyAvPiB9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJBZGRUb0hvbWVCdXR0b25cIiBjbGFzc05hbWU9XCJhZGQtdG8taG9tZS1idXR0b25cIiAvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiQWRkVG9Ib21lQnV0dG9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLXRvLWhvbWVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1ob21lLWluZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudC1jdXRcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwdDY0IG10NjQgcGwyNCBtbDggcHIyNCBtcjI0IHByMTUgcGI2NFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmdzcgc2ZjdyB0ZXh0LWxlZnRcIj5BZGQgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplIGYxOFwiPlRyYXZlbFRyaWFuZ2xlIDwvc3Bhbj4gdG88L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IHNmY3cgdGV4dC1sZWZ0IGZ3YiBwdDVcIj5Ib21lc2NyZWVuIGZvciBxdWljayBhY2Nlc3M8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2IGZ3MyBzZmN3IHB0MjQgcmVsYXRpdmUgdGFwLXRhZy1hZGR0b2hvbWVcIj4gVGFwIDxzcGFuIGNsYXNzTmFtZT1cImFkZHRvaG9tZW92ZXJsYXkgaWJsb2NrXCI+IDxzcGFuIGNsYXNzTmFtZT1cImFkZC10by1ob21lIGlibG9jayBhYnNvbHV0ZSB0NSBsOVwiIC8+IDwvc3Bhbj4gdG8gYnJpbmcgdXAgeW91ciBicm93c2VyIG1lbnVcbiAgICAgICAgICAgICAgICAgIGFuZCBzZWxlY3QgPHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+eydcIkFkZCB0byBob21lIHNjcmVlblwiJ308L3NwYW4+IHRvXG4gICAgICAgICAgICAgICAgICBwaW4gdGhlIFRyYXZlbFRyaWFuZ2xlIHdlYiBhcHAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWZpbGxlZC1wcmkgbXQxNSByaXBwbGVcIj48ZGl2IGNsYXNzTmFtZT1cIndhdmVcIiAvPkdvdCBJdDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJIb21lO1xuXG5IZWFkZXJIb21lLnByb3BUeXBlcyA9IHtcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkhlYWRlckhvbWUuZGVmYXVsdFByb3BzID0ge1xuICBpc1RyYW5zcGFyZW50OiBmYWxzZVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRJbml0aWFsc0Zyb21OYW1lIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hdmF0YXIuY20uc2Nzcyc7XG5cbmNvbnN0IEF2YXRhciA9ICh7IGltYWdlUGF0aCwgbmFtZSB9KSA9PiAoXG4gIGltYWdlUGF0aCAmJiAhaW1hZ2VQYXRoLmluY2x1ZGVzKCdtaXNzaW5nLnBuZycpXG4gICAgPyAoPGRpdiBjbGFzc05hbWU9e2BvdmVyZmxvd2ggcmFkaXVzMTAwIHNiYzQgbXIxNSByZWxhdGl2ZSBhZ2VudC11c2VyLWltZyAke3N0eWxlcy5hdmF0YXJ9YH0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIndmdWxsIGFic29sdXRlLWNlbnRlclwiIHNyYz17aW1hZ2VQYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgPC9kaXY+KVxuICAgIDogKDxkaXYgY2xhc3NOYW1lPXtgYWdlbnQtdXNlci1uYW1lIHQwIG1yMTUgaGZ1bGwgcmVsYXRpdmUgJHtzdHlsZXMuYXZhdGFyfWB9PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXIgZjE2XCI+XG4gICAgICAgICAge2dldEluaXRpYWxzRnJvbU5hbWUobmFtZSl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbik7XG5cbkF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIGltYWdlUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW1hZ2VQYXRoOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHtcbiAgU3Rhckljb24sXG4gIEhhbGZTdGFyLFxuICBTdGFySWNvbkVtcHR5XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgR1JhdGluZ1VsID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1hcmdpbjogJzAnLFxuICBwYWRkaW5nOiAnMCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAnJiBsaSc6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5SaWdodDogJzZweCcsXG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcwJyxcbiAgICB9LFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0U3RhcnMoQ29tcG9uZW50LCBzdGFyTnVtLCBrZXlUeXBlKSB7XG4gIGxldCBpID0gMDtcbiAgY29uc3Qgc3RhcnMgPSBbXTtcbiAgd2hpbGUgKGkgPCBzdGFyTnVtKSB7XG4gICAgc3RhcnMucHVzaCg8bGkga2V5PXtrZXlUeXBlICsgaX0+PENvbXBvbmVudCAvPjwvbGk+KTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIHN0YXJzO1xufVxuXG5jb25zdCBSYXRpbmdTdGFyID0gKHsgcmF0aW5nLCBpc0VtcHR5U3RhcnNIaWRkZW4gfSkgPT4ge1xuICBjb25zdCBzdGFycyA9IFtdO1xuICBjb25zdCByYXRpbmdCYXJSYW5nZSA9IDU7XG4gIGNvbnN0IHRydW5jYXRlZFJhdGluZyA9IE1hdGgudHJ1bmMocmF0aW5nKTtcbiAgY29uc3QgZnJhY3Rpb25hbFJhdGluZyA9IHBhcnNlRmxvYXQoKHJhdGluZyAtIHRydW5jYXRlZFJhdGluZykudG9GaXhlZCgxKSk7XG4gIGxldCBmdWxsU3RhckNvdW50ID0gMDtcbiAgbGV0IGhhbGZTdGFyQ291bnQgPSAwO1xuXG4gIGlmIChmcmFjdGlvbmFsUmF0aW5nID09PSAwLjApIHtcbiAgICBmdWxsU3RhckNvdW50ID0gcmF0aW5nO1xuICB9IGVsc2UgaWYgKGZyYWN0aW9uYWxSYXRpbmcgPD0gMC41KSB7XG4gICAgZnVsbFN0YXJDb3VudCA9IHRydW5jYXRlZFJhdGluZztcbiAgICBoYWxmU3RhckNvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBmdWxsU3RhckNvdW50ID0gdHJ1bmNhdGVkUmF0aW5nICsgMTtcbiAgfVxuXG4gIGNvbnN0IGVtcHR5U3RhckNvdW50ID0gcmF0aW5nQmFyUmFuZ2UgLSAoZnVsbFN0YXJDb3VudCArIGhhbGZTdGFyQ291bnQpO1xuXG4gIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb24sIGZ1bGxTdGFyQ291bnQsICdmdWxsX3N0YXInKSk7XG4gIHN0YXJzLnB1c2goZ2V0U3RhcnMoSGFsZlN0YXIsIGhhbGZTdGFyQ291bnQsICdoYWxmX3N0YXInKSk7XG4gIC8vIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb25FbXB0eSwgZW1wdHlTdGFyQ291bnQsICdlbXB0eV9zdGFyJykpO1xuICBpZiAoIWlzRW1wdHlTdGFyc0hpZGRlbikge1xuICAgIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb25FbXB0eSwgZW1wdHlTdGFyQ291bnQsICdlbXB0eV9zdGFyJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R1JhdGluZ1VsIGNsYXNzTmFtZT1cInJhdGluZy1zdGFyLWxpc3QgYXRfcmF0aW5nXCI+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBzdGFyc1xuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvR1JhdGluZ1VsPlxuICApO1xufTtcblxuUmF0aW5nU3Rhci5wcm9wVHlwZXMgPSB7XG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNFbXB0eVN0YXJzSGlkZGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUmF0aW5nU3Rhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHJhdGluZzogMCxcbiAgaXNFbXB0eVN0YXJzSGlkZGVuOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nU3RhcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF2YXRhclwiOiBcImxlcmpJeFBKVHJjeUZraW5oOGV2X1wiXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbi1sb2FkLW1vcmUtZnVsbFwiOiBcIl8xbEZPZFwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICAnLi9Mb2FkTW9yZVBhY2thZ2VzLnNjc3MnO1xuXG5jb25zdCBMb2FkTW9yZVBhY2thZ2VzID0gKHsgcGFja2FnZXNSZW1haW5pbmcsIGxvYWRNb3JlUGFja2FnZXMsIGN1cnJlbnRQYWdlLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gcGFnZU51bWJlciA9PiAoKSA9PiB7XG4gICAgbG9hZE1vcmVQYWNrYWdlcyhwYWdlTnVtYmVyKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17KHBhY2thZ2VzUmVtYWluaW5nID4gMCkgPyAnJyA6ICdoaWRlJ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMTUgbXQ4XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlKGN1cnJlbnRQYWdlICsgMSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1sb2FkLW1vcmUtZnVsbFwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgPlxuICAgICAgICBMb2FkIE1vcmUgKHtwYWNrYWdlc1JlbWFpbmluZ30ge3RpdGxlfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Mb2FkTW9yZVBhY2thZ2VzLnByb3BUeXBlcyA9IHtcbiAgcGFja2FnZXNSZW1haW5pbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbG9hZE1vcmVQYWNrYWdlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY3VycmVudFBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZE1vcmVQYWNrYWdlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmFubmVyRGF0YSBmcm9tICcuL0Jhbm5lckRhdGEnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHSW1nRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzI3MHB4JyxcbiAgJyYgaW1nJzoge1xuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICdub25lJyxcbiAgfVxufSk7XG5cbmNvbnN0IEdPdmVybGF5RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuNCknLFxufSk7XG5cbmNvbnN0IEJhbm5lciA9ICh7IGJhbm5lclBhdGgsIGJhbm5lckFsdCwgdG90YWxSYXRpbmcsIHBvc2l0aXZlUmF0aW5nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxuICAgICAgPEdJbWdEaXYgY2xhc3NOYW1lPSdvdmVyZmxvd2ggcmVsYXRpdmUnPlxuICAgICAgICA8aW1nIHNyYz17YmFubmVyUGF0aH0gYWx0PXtiYW5uZXJBbHR9IGNsYXNzTmFtZT0nYWJzb2x1dGUtY2VudGVyJyAvPlxuICAgICAgPC9HSW1nRGl2PlxuICAgICAgPEdPdmVybGF5RGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYjAgbDAgcjAgcDE1IHQwJz5cbiAgICAgICAgPEJhbm5lckRhdGFcbiAgICAgICAgICB0b3RhbFJldmlldz17dG90YWxSYXRpbmd9XG4gICAgICAgICAgdGl0bGU9e2Jhbm5lckFsdH1cbiAgICAgICAgICBwb3NpdGl2ZVJldmlldz17cG9zaXRpdmVSYXRpbmd9XG4gICAgICAgIC8+XG4gICAgICA8L0dPdmVybGF5RGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQmFubmVyLnByb3BUeXBlcyA9IHtcbiAgYmFubmVyUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBiYW5uZXJBbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG90YWxSYXRpbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcG9zaXRpdmVSYXRpbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UmV2aWV3c1BlcmNlbnRhZ2UgPSAocG9zaXRpdmVSZXZpZXcsIHRvdGFsUmV2aWV3KSA9PiAocG9zaXRpdmVSZXZpZXcgLyB0b3RhbFJldmlldykgKiAxMDA7XG5cbmNvbnN0IEJhbm5lckRhdGFMZWZ0ID0gKHsgcG9zaXRpdmVSZXZpZXcsIHRvdGFsUmV2aWV3LCB0aXRsZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbDE1IGIyMCBzZmN3XCI+XG4gICAgPGgxIGNsYXNzTmFtZT0nbTAgZjMyIHNmY3cnPnt0aXRsZX08L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cImF0X3Bvc2l0aXZlUGVyY2VudGFnZSBmdzcgZjI0XCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2YyNCBtMCc+e2dldFJldmlld3NQZXJjZW50YWdlKHBvc2l0aXZlUmV2aWV3LCB0b3RhbFJldmlldykudG9GaXhlZCgyKX0leycgJ308L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmMTYgZnc0XCI+UG9zaXRpdmUgUmV2aWV3czwvc3Bhbj5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPSdmdzcgZjE2YSc+QmFzZWQgT24ge3RvdGFsUmV2aWV3fSBSYXRpbmdzPC9wPlxuICA8L2Rpdj5cbik7XG5cbkJhbm5lckRhdGFMZWZ0LnByb3BUeXBlcyA9IHtcbiAgcG9zaXRpdmVSZXZpZXc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdG90YWxSZXZpZXc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lckRhdGFMZWZ0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTG9jYXRpb25NYXJrZXJJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBEZXN0aW5hdGlvbiA9ICh7IGJyZWFkY3J1bWJzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbDE1IHBiNSBwdDUgcHIxNSBmbGV4IGFsaWduQ2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlibG9jayBpbnB1dC0yNCB2ZXJ0aWNhbE1pZGRsZVwiPlxuICAgICAgICAgIDxMb2NhdGlvbk1hcmtlckljb24gLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlibG9jayBwbDE1IHZlcnRpY2FsTWlkZGxlXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImlibG9jayBmMTQgZnc0IHBmYzMgcGIyXCI+RGVzdGluYXRpb25zPC9wPlxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMubGVuZ3RoID09PSA0ID9cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0X2Rlc3RpbmF0aW9uRGV0YWlsIGZ3NCBwZmMyIGYxMFwiPlxuICAgICAgICAgICAgICB7YCR7YnJlYWRjcnVtYnNbMl0ubmFtZX0+JHticmVhZGNydW1ic1szXS5uYW1lfWB9XG4gICAgICAgICAgICA8L3A+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5EZXN0aW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGJyZWFkY3J1bWJzOiBQcm9wVHBlcy5hcnJheSxcbn07XG5cbkRlc3RpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYnJlYWRjcnVtYnM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbjtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGaWx0ZXJzIGZyb20gJ21vZHVsZXMvdGVzdGltb25pYWxzL0ZpbHRlcnMnO1xuaW1wb3J0IEZpbHRlcnNWaWV3IGZyb20gJ21vZHVsZXMvdGVzdGltb25pYWxzL0ZpbHRlcnNWaWV3JztcbmltcG9ydCB7IHBhcnNlRmlsdGVycyB9IGZyb20gJ3NjcmVlbnMvdGVzdGltb25pYWxzL3JlZHVjZXInO1xuaW1wb3J0IERlc3RpbmF0aW9uIGZyb20gJ21vZHVsZXMvdGVzdGltb25pYWxzL0Rlc3RpbmF0aW9uJztcbmltcG9ydCBEZXN0aW5hdGlvblZpZXcgZnJvbSAnLi9EZXN0aW5hdGlvblZpZXcnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuXG5jbGFzcyBEZXN0aW5hdGlvbkFuZEZpbHRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ZpbHRlclBvcHVwOiBmYWxzZSxcbiAgICAgIHNob3dEZXN0aW5hdGlvblBvcHVwOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkRmlsdGVyczogcGFyc2VGaWx0ZXJzKHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnksIFsncmF0aW5nc1tdJ10pLnJhdGluZ3MgfHwgW10sXG4gICAgfTtcbiAgfVxuXG4gIGRlc3RpbmF0aW9uVG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoeyBzaG93RGVzdGluYXRpb25Qb3B1cDogIXN0YXRlLnNob3dEZXN0aW5hdGlvblBvcHVwIH0pKTtcbiAgfTtcblxuICBmaWx0ZXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7IHNob3dGaWx0ZXJQb3B1cDogIXN0YXRlLnNob3dGaWx0ZXJQb3B1cCB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsdGVycywgbG9jYXRpb24sIHVwZGF0ZVVybCwgYnJlYWRjcnVtYnMsIHRvdGFsUmF0aW5nLCB0ZXN0aW1vbmlhbERpc3BsYXksIHBhcmFtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpY29uID0gYCR7Y29uZmlnLmFzc2V0cy5pbWFnZXN9L3B1YmxpYy1wcm9kdWN0L0dyb3VwXzIucG5nYDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmN3IGZsZXggYnM0IGZsZWZ0IHdmdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0X2Rlc3RpbmF0aW9uIGZsZXhGdWxsIGJyJyBvbkNsaWNrPXt0aGlzLmRlc3RpbmF0aW9uVG9nZ2xlfT5cbiAgICAgICAgICAgIDxEZXN0aW5hdGlvbiBicmVhZGNydW1icz17YnJlYWRjcnVtYnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0X2ZpbHRlciBmbGV4RnVsbCBibCcgb25DbGljaz17dGhpcy5maWx0ZXJUb2dnbGV9PlxuICAgICAgICAgICAgPEZpbHRlcnMgaW5pdGlhbEZpbHRlcnM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRGaWx0ZXJzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd0Rlc3RpbmF0aW9uUG9wdXAgPyAnJyA6ICdoaWRlJ30+XG4gICAgICAgICAgPERlc3RpbmF0aW9uVmlld1xuICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uVG9nZ2xlPXt0aGlzLmRlc3RpbmF0aW9uVG9nZ2xlfVxuICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICBicmVhZGNydW1icz17YnJlYWRjcnVtYnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dGaWx0ZXJQb3B1cCA/ICcnIDogJ2hpZGUnfT5cbiAgICAgICAgICA8RmlsdGVyc1ZpZXdcbiAgICAgICAgICAgIHJhdGluZ0ZpbHRlcnM9e2ZpbHRlcnMucmF0aW5nc31cbiAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgIHVwZGF0ZVVybD17dXBkYXRlVXJsfVxuICAgICAgICAgICAgaW5pdGlhbEZpbHRlcnM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAgICAgZmlsdGVyVG9nZ2xlPXt0aGlzLmZpbHRlclRvZ2dsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiYzUgcHQxNSBwcjE1IHBiMTUgcGwxNSBjbGVhciB3ZnVsbFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTZhIHBmYzIgcGZjMyBwYjJcIj5XaGF0IFBlb3BsZSBTYXk8L2gzPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvdGFsUmF0aW5nID4gMjUgP1xuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwZmM0IGZ3NyBmMTBcIj5EaXNwbGF5aW5nIFRlc3RpbW9uaWFsIHtgMS0ke3Rlc3RpbW9uaWFsRGlzcGxheX1gfSBvZiB7dG90YWxSYXRpbmd9IGluIHRvdGFsXG4gICAgICAgICAgICAgIDwvcD4gOlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwZmM0IGZ3NyBmMTAgXCI+e2BEaXNwbGF5aW5nICR7dG90YWxSYXRpbmd9IFRlc3RpbW9uaWFsc2B9IDwvcD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdG90YWxSYXRpbmcgPT09IDAgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICA8SW1nIHdpZHRoPXszMjB9IGhlaWdodD17MTAwfSBzcmM9e2ljb259IGlrU3JjPXtpY29ufSBhbHQ9eydubyByZXN1bHQgZm91bmQnfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5EZXN0aW5hdGlvbkFuZEZpbHRlcnMucHJvcFR5cGVzID0ge1xuICBmaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVybDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYnJlYWRjcnVtYnM6IFByb3BUeXBlcy5hcnJheSxcbiAgdG90YWxSYXRpbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGVzdGltb25pYWxEaXNwbGF5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uQW5kRmlsdGVycztcblxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBDbG9zZURhcmsgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBwYXJzZURlc3RpbmF0aW9uSWQgfSBmcm9tICdzY3JlZW5zL3Rlc3RpbW9uaWFscy9yZWR1Y2VyJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJ21vZHVsZXMvY29tbW9uL0Vycm9yQm91bmRhcnknO1xuaW1wb3J0IHsgQUxMX0RFU1RJTkFUSU9OLCBQT1BVTEFSX0RFU1RJTkFUSU9OfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb3VudHJ5IH0gZnJvbSAnY29uc3RhbnRzL2Rlc3RpbmF0aW9uJztcblxuZXhwb3J0IGNvbnN0IEdkZXN0aW5hdGlvbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgJyYgPiBhJzoge1xuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjMjBBMzk3JyxcbiAgICB9LFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IGlzRHJvcERvd25PcGVuID0gKGZpbHRlciwgbG9jYXRpb24sIHBhcmFtcykgPT4ge1xuICBjb25zdCBjdXJyZW50RGVzdGluYXRpb24gPSBpc05hTihwYXJzZURlc3RpbmF0aW9uSWQocGFyYW1zLmRlc3RpbmF0aW9uKSkgP1xuICAgIHBhcmFtcy5kZXN0aW5hdGlvbiA6IGxvY2F0aW9uLnF1ZXJ5LmRlc3RpbmF0aW9uO1xuICBjb25zdCBpbmRleCA9IGN1cnJlbnREZXN0aW5hdGlvbiA/XG4gICAgZmlsdGVyLmZpbmRJbmRleChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50RGVzdGluYXRpb24udG9Mb3dlckNhc2UoKSkgOiAtMTtcbiAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbn07XG5cbmV4cG9ydCBjb25zdCB0aXRsZUZvcm1hdHRpbmcgPSB0aXRsZSA9PiB7XG4gIGlmICh0aXRsZSA9PT0gQUxMX0RFU1RJTkFUSU9OKSB7XG4gICAgcmV0dXJuICdBbGwnO1xuICB9IGVsc2UgaWYgKHRpdGxlID09PSBQT1BVTEFSX0RFU1RJTkFUSU9OKSB7XG4gICAgcmV0dXJuICdQb3B1bGFyJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlckRlc3RpbmF0aW9uID0gKGRhdGEsIHBhcmFtcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAuZmlsdGVyKHN1YnRpdGxlID0+IGRhdGFbc3VidGl0bGVdLmxlbmd0aClcbiAgICAgICAgICAubWFwKChzdWJ0aXRsZSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YnRpdGxlICsgaX0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwyNCBwcjI0IGZ3NyBidCBwdDE1IHBiOCBmdzlcIj57dGl0bGVGb3JtYXR0aW5nKHN1YnRpdGxlKX08L3A+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGF0YVtzdWJ0aXRsZV0uc29ydCgpLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8R2Rlc3RpbmF0aW9uID4gXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtvcHRpb259IHRvPXtgL3Rlc3RpbW9uaWFscy8ke29wdGlvbn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1jYXBpdGFsaXplIGlibG9jayB3ZnVsbCBwbDI0IHByMjQgcHQ4IHBiOCAke3BhcmFtcy5kZXN0aW5hdGlvbiAmJiBwYXJhbXMuZGVzdGluYXRpb24udG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uLnRvTG93ZXJDYXNlKCkgPyAncGZjMScgOiAncGZjMycgfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwdDMgcGIzIGlibG9jayB3ZnVsbCc+e29wdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0dkZXN0aW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNsYXNzIERlc3RpbmF0aW9uVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IHByb3BzLmJyZWFkY3J1bWJzLmxlbmd0aCA+IDIgPyBwcm9wcy5icmVhZGNydW1ic1syXS5uYW1lLnRvTG93ZXJDYXNlKCkgOiBjb3VudHJ5LklORElBXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9ICh0aXRsZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHRpdGxlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZpbHRlcnMsIGRlc3RpbmF0aW9uVG9nZ2xlLCBwYXJhbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdDAgbDAgc2JjdyB6MTYgd2Z1bGwgaGZ1bGwgb3ZlcmZsb3dhXCI+XG4gICAgICAgIDxFcnJvckJvdW5kYXJ5IHdpZHRoPVwiOTAlXCIgaGVpZ2h0PVwiMjAwcHhcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgYmJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F0X2Nsb3NlIGlibG9jayBpY29uLTE0JyBvbkNsaWNrPXtkZXN0aW5hdGlvblRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgPENsb3NlRGFyayAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTYgZnc0IHBmYzMgcGwyNCBpYmxvY2tcIj5EZXN0aW5hdGlvbjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmIgY2xlYXJmaXgnPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZmlsdGVycykubWFwKCh0aXRsZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSAncmF0aW5ncycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlID09PSB0aXRsZSA/IGBwMTUgYWN0aXZlRmlsdGVyIHJlbGF0aXZlIHRleHQtY2FwaXRhbGl6ZSBjb2wteHMtNiB0ZXh0LWNlbnRlciBmdzdgIDogYHAxNSBjb2wteHMtNiB0ZXh0LWNhcGl0YWxpemUgdGV4dC1jZW50ZXIgZnc3YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKHRpdGxlKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7cmVuZGVyRGVzdGluYXRpb24oZmlsdGVyc1t0aGlzLnN0YXRlLmFjdGl2ZV0sIHBhcmFtcyApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiAgXG5EZXN0aW5hdGlvblZpZXcucHJvcFR5cGVzID0ge1xuICBmaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRlc3RpbmF0aW9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBicmVhZGNydW1iczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvblZpZXc7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBGaWx0ZXJzID0gKHsgaW5pdGlhbEZpbHRlcnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsMTUgcGI1IHB0NSBwcjE1IGZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWJsb2NrIGlucHV0LTI0IHZlcnRpY2FsTWlkZGxlXCI+XG4gICAgICAgICAgPEZpbHRlckljb24vPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIHBsMTUgdmVydGljYWxNaWRkbGVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpYmxvY2sgZjE0IGZ3NCBwZmMzIHBiMlwiPkZpbHRlcnM8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXRfZmlsdGVybGVuZ3RoIGZ3NCBmMTAgcGZjNFwiPntpbml0aWFsRmlsdGVycy5sZW5ndGh9IHNlbGVjdGVkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmlsdGVycy5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxGaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG59O1xuXG5GaWx0ZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbEZpbHRlcnM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVycztcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBSYXRpbmdTdGFyIGZyb20gJ21vZHVsZXMvc2hhcmVkL1JhdGluZ1N0YXInO1xuaW1wb3J0IHsgQ2xvc2VEYXJrIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jbGFzcyBGaWx0ZXJzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEZpbHRlcnM6IHByb3BzLmluaXRpYWxGaWx0ZXJzLFxuICAgICAgcmF0aW5nRmlsdGVyczogcHJvcHMucmF0aW5nRmlsdGVycyxcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tTdGF0dXMgPSAoZSwgb3B0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgcmF0aW5nRmlsdGVyID0gdGhpcy5zdGF0ZS5yYXRpbmdGaWx0ZXJzLm1hcCgocmF0aW5nRmlsdGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICE9PSBpKSB7XG4gICAgICAgIHJldHVybiByYXRpbmdGaWx0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyAuLi5yYXRpbmdGaWx0ZXIsIGNoZWNrZWQ6IGUudGFyZ2V0LmNoZWNrZWQgfTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBmaWx0ZXIgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZEZpbHRlcnNdO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBmaWx0ZXIucHVzaChvcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIgPSBmaWx0ZXIuZmlsdGVyKFxuICAgICAgICByYXRpbmcgPT4gcmF0aW5nICE9PSBvcHRpb25cbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRGaWx0ZXJzOiBmaWx0ZXIsXG4gICAgICByYXRpbmdGaWx0ZXJzOiByYXRpbmdGaWx0ZXIsXG4gICAgfSk7XG4gIH07XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEZpbHRlcnM6IG5leHRQcm9wcy5pbml0aWFsRmlsdGVycyxcbiAgICAgIHJhdGluZ0ZpbHRlcnM6IG5leHRQcm9wcy5yYXRpbmdGaWx0ZXJzLFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZEZpbHRlcnNdO1xuICAgIGxldCB0ZXN0aW1vbmlhbFVybCA9IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgbGV0IGZpbHRlclVybCA9ICcnO1xuICAgIGZpbHRlclVybCArPSBzZWxlY3RlZEZpbHRlcnNcbiAgICAgIC5tYXAoKGZpbHRlciwgaSkgPT4ge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gKGAmcmF0aW5nc1tdPSR7ZmlsdGVyfWApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICAgIGZpbHRlclVybCA9IHNlbGVjdGVkRmlsdGVycy5sZW5ndGggPyBgcmF0aW5nc1tdPSR7c2VsZWN0ZWRGaWx0ZXJzWzBdfWAgKyBmaWx0ZXJVcmwgOiAnJztcbiAgICBmaWx0ZXJVcmwgPyB0ZXN0aW1vbmlhbFVybCArPSBgPyR7ZmlsdGVyVXJsfWAgOiB0ZXN0aW1vbmlhbFVybDtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVVybCh0ZXN0aW1vbmlhbFVybCk7XG4gIH07XG5cbiAgcmVzZXRGaWx0ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhdGluZ0ZpbHRlciA9IHRoaXMuc3RhdGUucmF0aW5nRmlsdGVycy5tYXAocmF0aW5nRmlsdGVyID0+ICh7IC4uLnJhdGluZ0ZpbHRlciB9KSk7XG4gICAgcmF0aW5nRmlsdGVyLm1hcChyYXRpbmcgPT4ge1xuICAgICAgcmV0dXJuIChyYXRpbmcuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJhdGluZ0ZpbHRlcnM6IHJhdGluZ0ZpbHRlcixcbiAgICAgIHNlbGVjdGVkRmlsdGVyczogW10sXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBmaWx0ZXJUb2dnbGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0MCBsMCBzYmN3IHoxNiB3ZnVsbCBwYjQ4IGhmdWxsIG92ZXJmbG93YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBiYlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdF9jbG9zZSBpYmxvY2sgaWNvbi0xNCcgb25DbGljaz17ZmlsdGVyVG9nZ2xlfT5cbiAgICAgICAgICAgIDxDbG9zZURhcmsgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE2IGZ3NCBwZmMzIHBsMjQgaWJsb2NrXCI+RmlsdGVyczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdF9yZXNldCBmcmlnaHQgZjE0IHBmYzQgdGV4dC11cHBlcmNhc2UgZnc0JyBvbkNsaWNrPXt0aGlzLnJlc2V0RmlsdGVyc30+UmVzZXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdzcgcGZjMyBmMTQgcGIxNVwiPlRyYXZlbGVyIFJhdGluZzwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUucmF0aW5nRmlsdGVycy5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEudmFsdWV9IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGF0YS5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BbJHtkYXRhLnZhbHVlfV1gfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgWyR7ZGF0YS52YWx1ZX1dYH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmNoZWNrU3RhdHVzKGUsIGRhdGEudmFsdWUsIGkpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgWyR7ZGF0YS52YWx1ZX1dYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXIgcmF0aW5nPXtwYXJzZUludChkYXRhLnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHA4IHdmdWxsIGIwIGJzNiBzYmN3IHoxXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPSdhdF9oYW5kbGVTdWJtaXQgd2Z1bGwgZjE0IGZ3NyBzZmN3IHBiYzIgaW5wdXQtd2l0aC1pY29uLWJveCdcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIEFwcGx5IEZpbHRlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmlsdGVyc1ZpZXcucHJvcFR5cGVzID0ge1xuICByYXRpbmdGaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXBkYXRlVXJsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbml0aWFsRmlsdGVyczogUHJvcFR5cGVzLmFycmF5LFxuICBmaWx0ZXJUb2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5GaWx0ZXJzVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxGaWx0ZXJzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyc1ZpZXc7XG4iLCJcbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmV4cG9ydCBjb25zdCBHVGVzdGltb25pYWxzQmFubmVyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGhlaWdodDogJzQwMHB4JyxcbiAgJyYgLmJhbm5lckltZyc6IHtcbiAgICBoZWlnaHQ6ICc0MDBweCcsXG4gICAgJyYgaW1nJzoge1xuICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC4yKScsXG4gICAgICBjb250ZW50OiAnXFwnIFxcJycsXG4gICAgfVxuICB9LFxuICAnJiAuYmFubmVyRGF0YSc6IHtcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAnJiAuYmFubmVyRGF0YVJpZ2h0Jzoge1xuICAgICAgcGFkZGluZzogJzgwcHgnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IEdMYXJnZUhlYWRpbmcgPSBnbGFtb3JvdXMuaDIoe1xuICBmb250U2l6ZTogJzU2cHgnLFxuICBsaW5lSGVpZ2h0OiAnNjRweCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdGZWVkYmFja1R5cGVQID0gZ2xhbW9yb3VzLnAoe1xuICB3aWR0aDogJzExNXB4Jyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR1JhdGluZ0NvdW50UCA9IGdsYW1vcm91cy5wKHtcbiAgd2lkdGg6ICc4MHB4Jyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR1JhdGluZ1Jvd0RpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtYXJnaW5Cb3R0b206ICc0cHgnLFxuICAnJjpsYXN0LWNoaWxkJzoge1xuICAgIG1hcmdpbkJvdHRvbTogJzAnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdSYXRpbmdCYXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnNHB4JyxcbiAgd2lkdGg6ICcxOTJweCcsXG4gICcmIC5hY3R1YWxSYXRpbmdzJzoge1xuICAgIGhlaWdodDogJzRweCcsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBHVGVzdGltb25pYWxDYXJkRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZDRkNGQ0JyxcbiAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICBib3JkZXJCb3R0b206ICcwIG5vbmUnLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEdVc2VyRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMjQwcHgnLFxufSk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQge1xuICBHUmF0aW5nUm93RGl2LFxuICBHUmF0aW5nQmFyRGl2LFxuICBHRmVlZGJhY2tUeXBlUCxcbiAgR1JhdGluZ0NvdW50UFxufSBmcm9tICcuL0cnO1xuXG5leHBvcnQgY29uc3QgZ2V0V2lkdGggPSAocmV2aWV3TnVtYmVycywgY2F0ZWdvcnksIHRvdGFsUmV2aWV3cykgPT4ge1xuICByZXR1cm4gcmV2aWV3TnVtYmVyc1tjYXRlZ29yeV0gLyB0b3RhbFJldmlld3MgKiAxMDA7XG59O1xuXG5jb25zdCBSYXRpbmdCYXIgPSAoeyByZXZpZXdOdW1iZXJzLCB0b3RhbFJldmlld3MgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lckRhdGFSZXZpZXdzIHNiY3dcIj5cbiAgICB7XG4gICAgICBPYmplY3Qua2V5cyhyZXZpZXdOdW1iZXJzKS5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgPEdSYXRpbmdSb3dEaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWI4IGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxHRmVlZGJhY2tUeXBlUCBjbGFzc05hbWU9XCJtMCBmMTRcIj57Y2F0ZWdvcnl9PC9HRmVlZGJhY2tUeXBlUD5cbiAgICAgICAgICAgICAgPEdSYXRpbmdCYXJEaXYgY2xhc3NOYW1lPVwicGJjNCBtbDE1IG1yMTUgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY3R1YWxSYXRpbmdzIGFic29sdXRlIGwwIHQwIGIwIHBiYzFcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGdldFdpZHRoKHJldmlld051bWJlcnMsIGNhdGVnb3J5LCB0b3RhbFJldmlld3MpICsgJyUnLCB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR1JhdGluZ0JhckRpdj5cbiAgICAgICAgICAgICAgPEdSYXRpbmdDb3VudFAgY2xhc3NOYW1lPVwibTAgZjE0XCI+XG4gICAgICAgICAgICAgICAge3Jldmlld051bWJlcnNbY2F0ZWdvcnldfVxuICAgICAgICAgICAgICA8L0dSYXRpbmdDb3VudFA+XG4gICAgICAgICAgICA8L0dSYXRpbmdSb3dEaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgIH1cbiAgPC9kaXY+XG4pO1xuXG5SYXRpbmdCYXIucHJvcFR5cGVzID0ge1xuICByZXZpZXdOdW1iZXJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGJhZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwb29yOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGdvb2Q6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmVyeUdvb2Q6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhjZWxsZW50OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHRvdGFsUmV2aWV3czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdCYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHNjcm9sbGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcblxuaW1wb3J0IFRlc3RpbW9uaWFsc1VzZXIgZnJvbSAnLi9UZXN0aW1vbmlhbHNVc2VyJztcbmltcG9ydCBUZXN0aW1vbmlhbHNDYXJkIGZyb20gJy4vVGVzdGltb25pYWxzQ2FyZCc7XG5pbXBvcnQgeyBwYXJzZURlc3RpbmF0aW9uSWQgfSBmcm9tICdzY3JlZW5zL3Rlc3RpbW9uaWFscy9yZWR1Y2VyJztcbmltcG9ydCAndGhlbWUvdGVzdGltb25pYWwuc2Nzcyc7XG5cbmNsYXNzIFJldmlld0NhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSXRlbTogLTFcbiAgICB9O1xuICB9XG5cbiAgc2Nyb2xsUGFnZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGlkID0gcGFyc2VEZXN0aW5hdGlvbklkKHByb3BzLnBhcmFtcy5kZXN0aW5hdGlvbik7XG5cbiAgICBpZiAoaXNOYU4oaWQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogLTEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBpZCB9LCAoKSA9PiB7XG4gICAgICAgIHNjcm9sbGVyLnNjcm9sbFRvKGAke2lkfWAsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgICAgb2Zmc2V0OiAtNjBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsUGFnZSh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRlc3RpbW9uaWFscywgcGFyYW1zLCBsb2NhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRlc3RpbW9uaWFscy5tYXAocmV2aWV3ID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtyZXZpZXcuaWR9IGlkPXtgJHtyZXZpZXcuaWR9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdXNlci10ZXN0aW1vbmlhbC1jYXJkIHNiY3cgcDE1IGJiIG1iMSAke3RoaXMuc3RhdGUuYWN0aXZlSXRlbSA9PT0gcmV2aWV3LmlkID8gJyBhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsc0NhcmRcbiAgICAgICAgICAgICAgICByYXRpbmc9e3Jldmlldy5yYXRpbmd9XG4gICAgICAgICAgICAgICAgdGVzdGltb25pYWxCb2R5PXtyZXZpZXcuYm9keX1cbiAgICAgICAgICAgICAgICB0aXRsZT17cmV2aWV3LnRpdGxlfVxuICAgICAgICAgICAgICAgIGlkPXtyZXZpZXcuaWR9XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb249e3Jldmlldy5kZXN0aW5hdGlvbn1cbiAgICAgICAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdDggcHI2NCBtcjI0Jz5cbiAgICAgICAgICAgICAgICA8VGVzdGltb25pYWxzVXNlclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtyZXZpZXcuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3Jldmlldy5sYXN0VXBkYXRlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmV2aWV3LmFnZW50Q29tbWVudCkubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2JjNSBwMTUgbXQxNSB0ZXN0aW1vbmlhbC1jb21tZW50IHJhZGl1czIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdzcgcGZjMSBmMTYgbTAgbXI4IG1iOCBfdGl0bGUgaWJsb2NrXCI+UmVzcG9uc2UgZnJvbSB0aGUgYWdlbnQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTQgcGZjM1wiPntyZXZpZXcuYWdlbnRDb21tZW50LmJvZHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE2IHBmYzMgZnc5IGF0X2FnZW50Q29tbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXZpZXcuYWdlbnRDb21tZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZXZpZXdDYXJkLnByb3BUeXBlcyA9IHtcbiAgdGVzdGltb25pYWxzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld0NhcmQ7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBBZ2VudFJhdGluZyBmcm9tICdtb2R1bGVzL3NoYXJlZC9hZ2VudFByb2ZpbGUvQWdlbnRSYXRpbmcnO1xuaW1wb3J0IFNob3dNb3JlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcbmltcG9ydCB7IHBhcnNlRGVzdGluYXRpb25JZCB9IGZyb20gJy4uLy4uL3NjcmVlbnMvdGVzdGltb25pYWxzL3JlZHVjZXInO1xuXG5jb25zdCBwYXJzZVN0cmluZyA9IChjb250ZW50KSA9PiB7XG4gIGNvbnN0IHN0YXJ0ID0gMTk1O1xuXG4gIGlmIChjb250ZW50Lmxlbmd0aCA8PSBzdGFydCkge1xuICAgIHJldHVybiB7XG4gICAgICBhYm91dExlc3M6IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHN0YXJ0KSxcbiAgICAgIGFib3V0TW9yZTogJydcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgYWJvdXRMZXNzOiBjb250ZW50LnN1YnN0cmluZygwLCBzdGFydCksXG4gICAgYWJvdXRNb3JlOiBjb250ZW50LnN1YnN0cmluZyhzdGFydClcbiAgfTtcbn07XG5cbmNvbnN0IFRlc3RpbW9uaWFsc0NhcmQgPSAoeyB0ZXN0aW1vbmlhbEJvZHksIHRpdGxlLCByYXRpbmcsIGlkLCBkZXN0aW5hdGlvbiwgcGFyYW1zLCBsb2NhdGlvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgcGFyYW1zLmRlc3RpbmF0aW9uID9cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjQgZmxleCBmbGV4Q2VudGVySXRlbXNcIj5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZ3NyBwZmMxIGYxNiBtMCBtcjggX3RpdGxlXCI+e3RpdGxlfTwvaDY+XG4gICAgICAgICAgICAgIDxBZ2VudFJhdGluZyBhZ2VudFJhdGluZz17cmF0aW5nfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2hvd01vcmVcbiAgICAgICAgICAgICAgd3JhcFRleHQ9e3BhcnNlU3RyaW5nKHRlc3RpbW9uaWFsQm9keSkuYWJvdXRMZXNzfVxuICAgICAgICAgICAgICBtb3JlVGV4dD17cGFyc2VTdHJpbmcodGVzdGltb25pYWxCb2R5KS5hYm91dE1vcmV9XG4gICAgICAgICAgICAgIHNob3dNb3JlVGV4dD1cIlJlYWQgTW9yZVwiXG4gICAgICAgICAgICAgIHNob3dMZXNzVGV4dD1cIlJlYWQgTGVzc1wiXG4gICAgICAgICAgICAgIGFwcGVuZFRleHQ9eycuLi4nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iNCBmbGV4IGZsZXhDZW50ZXJJdGVtc1wiPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3BmYzMnIHRvPXtgL3Rlc3RpbW9uaWFscy8ke2lkfS0ke3RpdGxlfS1yZXZpZXdzP2Rlc3RpbmF0aW9uPSR7ZGVzdGluYXRpb259YH0+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZ3NyBwZmMxIGYxNiBtMCBtcjggbWI4IF90aXRsZSBpYmxvY2tcIj57dGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDxBZ2VudFJhdGluZyBhZ2VudFJhdGluZz17cmF0aW5nfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2hvd01vcmVcbiAgICAgICAgICAgICAgd3JhcFRleHQ9e3BhcnNlU3RyaW5nKHRlc3RpbW9uaWFsQm9keSkuYWJvdXRMZXNzfVxuICAgICAgICAgICAgICBtb3JlVGV4dD17cGFyc2VTdHJpbmcodGVzdGltb25pYWxCb2R5KS5hYm91dE1vcmV9XG4gICAgICAgICAgICAgIHNob3dNb3JlVGV4dD1cIlJlYWQgTW9yZVwiXG4gICAgICAgICAgICAgIHNob3dMZXNzVGV4dD1cIlJlYWQgTGVzc1wiXG4gICAgICAgICAgICAgIGFwcGVuZFRleHQ9eycuLi4nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRlc3RpbW9uaWFsc0NhcmQucHJvcFR5cGVzID0ge1xuICB0ZXN0aW1vbmlhbEJvZHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyB0aW1lRnJvbU5vdyB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vc2hhcmVkL0F2YXRhclwiO1xuXG5jb25zdCBUZXN0aW1vbmlhbHNVc2VyID0gKHsgYXV0aG9yLCBsYXN0VXBkYXRlZCB9KSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBhdXRob3IuYXV0aG9yTmFtZSA/IGF1dGhvci5hdXRob3JOYW1lIDogJ0Fub255bW91cyc7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXhDZW50ZXJJdGVtcyBhbGlnbkNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpdXMxMDAgdGV4dC11cHBlcmNhc2UgdGV4dC1jZW50ZXIgc2ZjdyBmdzcgcmV2aWV3ZXJfX3Rlc3RpbW9uaWFsXCI+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGltYWdlUGF0aD17YXV0aG9yLmF1dGhvclBpY31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbDE1IG1pblcwXCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJmMTQgZWxsaXBzaXMgZnc3IG1iMiBhdF90ZXN0aV90aXRsZSBfbmFtZSBtaW5XMFwiPntuYW1lfTwvaDY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm0wIGYxMiBwZmM0IF91c2VySW5mb1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF1dGhvci51c2VyTG9jYXRpb24gP1xuICAgICAgICAgICAgICBgJHthdXRob3IudXNlckxvY2F0aW9ufSwgJHt0aW1lRnJvbU5vdyhsYXN0VXBkYXRlZCl9YCA6XG4gICAgICAgICAgICAgIHRpbWVGcm9tTm93KGxhc3RVcGRhdGVkKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5UZXN0aW1vbmlhbHNVc2VyLnByb3BUeXBlcyA9IHtcbiAgYXV0aG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxhc3RVcGRhdGVkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHNVc2VyO1xuIiwiZXhwb3J0IGNvbnN0IEFMTF9ERVNUSU5BVElPTiA9ICdhbGxEZXN0aW5hdGlvbnMnO1xuZXhwb3J0IGNvbnN0IFBPUFVMQVJfREVTVElOQVRJT04gPSAncG9wdWxhckRlc3RpbmF0aW9uJztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IFRyYXZlbGVyUmV2aWV3IGZyb20gJ21vZHVsZXMvdHJhdmVsZXJSZXZpZXcvVHJhdmVsZXJSZXZpZXcnO1xuaW1wb3J0IFJhdGluZ0JhciBmcm9tICdtb2R1bGVzL3Rlc3RpbW9uaWFscy9SYXRpbmdCYXInO1xuaW1wb3J0IEhlYWRlckhvbWUgZnJvbSAnbW9kdWxlcy9oZWFkZXIvSGVhZGVySG9tZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ21vZHVsZXMvc2hhcmVkL0Zvb3Rlcic7XG5pbXBvcnQgUmV2aWV3Q2FyZCBmcm9tICdtb2R1bGVzL3Rlc3RpbW9uaWFscy9SZXZpZXdDYXJkJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnbW9kdWxlcy90ZXN0aW1vbmlhbHMvQmFubmVyJztcbmltcG9ydCBEZXN0aW5hdGlvbkFuZEZpbHRlcnMgZnJvbSAnbW9kdWxlcy90ZXN0aW1vbmlhbHMvRGVzdGluYXRpb25BbmRGaWx0ZXJzJztcbmltcG9ydCBMb2FkTW9yZVBhY2thZ2VzIGZyb20gJ21vZHVsZXMvc2hhcmVkL2xvYWRNb3JlUGFja2FnZXMnO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvQnJlYWRjcnVtYic7XG5pbXBvcnQgUG9wdWxhclBhY2thZ2VzIGZyb20gJ21vZHVsZXMvcGFja2FnZXMvcG9wdWxhci9pbmRleCc7XG5pbXBvcnQgVHJhdmVsZXJTdG9yaWVzIGZyb20gJ21vZHVsZXMvdHJhdmVsbGVyU3RvcnknO1xuaW1wb3J0IHsgY3JlYXRlSGVsbWV0IH0gZnJvbSAnaGVscGVycy9zZW9IZWxwZXJzJztcbmltcG9ydCB7IHRlc3RpbW9uaWFsc0ZpbHRlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmNsYXNzIFRlc3RpbW9uaWFscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucGFnZU51bWJlciA9IDE7XG4gIH1cblxuICBsb2FkTW9yZUNhcmRzID0gKCkgPT4ge1xuICAgIHRoaXMucGFnZU51bWJlciArPSAxO1xuICAgIHRoaXMucHJvcHMubG9hZENhcmRzKFxuICAgICAgdGhpcy5wcm9wcy5wYXJhbXMuZGVzdGluYXRpb24sXG4gICAgICB0ZXN0aW1vbmlhbHNGaWx0ZXIodGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeSwgJ3F1ZXJ5JykuZmlsdGVycyxcbiAgICAgIHRoaXMucGFnZU51bWJlcixcbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGxvY2F0aW9uLCB1cGRhdGVVcmwsIHBhY2thZ2VzLCBwYXJhbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgYmFubmVySW1hZ2UsIHRvdGFsUmF0aW5nLCBwb3NpdGl2ZVJhdGluZywgb3ZlcmFsbCwgdG9wVGVzdGltb25pYWxzLFxuICAgICAgZmlsdGVycywgdGVzdGltb25pYWxzLCBodG1sVGFncywgYnJlYWRjcnVtYnNcbiAgICB9ID0gZGF0YTtcblxuICAgIHRvcFRlc3RpbW9uaWFscy5tYXAodGVzdGltb25pYWwgPT4gdGVzdGltb25pYWwuYWxsb3dSZWFkTW9yZSA9IGZhbHNlKTtcblxuICAgIGNvbnN0IG92ZXJhbGxSYXR0aW5nID0ge1xuICAgICAgJ0V4Y2VsbGVudCc6IG92ZXJhbGwuZXhjZWxsZW50IHx8IDAsXG4gICAgICAnVmVyeSBHb29kJzogb3ZlcmFsbC52ZXJ5R29vZCB8fCAwLFxuICAgICAgJ0dvb2QnOiBvdmVyYWxsLmdvb2QgfHwgMCxcbiAgICAgICdQb29yJzogb3ZlcmFsbC5wb29yIHx8IDAsXG4gICAgICAnQmFkJzogb3ZlcmFsbC5iYWQgfHwgMFxuICAgIH07XG5cbiAgICBjb25zdCB0b3RhbFJldmlldyA9IG92ZXJhbGxSYXR0aW5nLkV4Y2VsbGVudCArIG92ZXJhbGxSYXR0aW5nWydWZXJ5IEdvb2QnXSArXG4gICAgICBvdmVyYWxsUmF0dGluZy5Hb29kICsgb3ZlcmFsbFJhdHRpbmcuUG9vciArIG92ZXJhbGxSYXR0aW5nLkJhZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYmM1XCI+XG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICB7Y3JlYXRlSGVsbWV0KGh0bWxUYWdzLCAnJywgbG9jYXRpb24ucGF0aG5hbWUpfVxuICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHQwIGwwIHIwIHo1Jz5cbiAgICAgICAgICA8SGVhZGVySG9tZSBpc1RyYW5zcGFyZW50PXt0cnVlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG1iOCc+XG4gICAgICAgICAgPEJhbm5lciBwb3NpdGl2ZVJhdGluZz17cG9zaXRpdmVSYXRpbmd9IGJhbm5lclBhdGg9e2Jhbm5lckltYWdlLnNyY30gdG90YWxSYXRpbmc9e3RvdGFsUmV2aWV3fVxuICAgICAgICAgICAgICAgIGJhbm5lckFsdD17YmFubmVySW1hZ2UudGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncDI0IHNiY3cgbWI4Jz5cbiAgICAgICAgICA8UmF0aW5nQmFyIHJldmlld051bWJlcnM9e292ZXJhbGxSYXR0aW5nfSB0b3RhbFJldmlld3M9e3RvdGFsUmV2aWV3fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPERlc3RpbmF0aW9uQW5kRmlsdGVyc1xuICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9IGxvY2F0aW9uPXtsb2NhdGlvbn0gdXBkYXRlVXJsPXt1cGRhdGVVcmx9XG4gICAgICAgICAgdG90YWxSYXRpbmc9e3RvdGFsUmF0aW5nfSBicmVhZGNydW1icz17YnJlYWRjcnVtYnN9XG4gICAgICAgICAgdGVzdGltb25pYWxEaXNwbGF5PXt0ZXN0aW1vbmlhbHMubGVuZ3RofVxuICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2JjdyBtYjgnPlxuICAgICAgICAgIDxSZXZpZXdDYXJkIHRlc3RpbW9uaWFscz17dGVzdGltb25pYWxzfSBwYXJhbXM9e3BhcmFtc30gbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtYjhcIj5cbiAgICAgICAgICA8TG9hZE1vcmVQYWNrYWdlc1xuICAgICAgICAgICAgcGFja2FnZXNSZW1haW5pbmc9e3RvdGFsUmF0aW5nIC0gdGVzdGltb25pYWxzLmxlbmd0aH1cbiAgICAgICAgICAgIGxvYWRNb3JlUGFja2FnZXM9e3RoaXMubG9hZE1vcmVDYXJkc31cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtsb2NhdGlvbi5xdWVyeS5wYWdlICYmIGxvY2F0aW9uLnF1ZXJ5LnBhZ2UgfHwgMX1cbiAgICAgICAgICAgIHRpdGxlPXtgcGFja2FnZXMgcmVtYWluaW5nKWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge1xuICAgICAgICAgIHBhY2thZ2VzICYmIHBhY2thZ2VzLmxlbmd0aCA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwicGFja2FnZXMtc2VjXCI+XG4gICAgICAgICAgICAgICAgPFBvcHVsYXJQYWNrYWdlcy5jb250YWluZXJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXsnUGxhbiBGb3IgWW91ciBOZXh0IEhvbGlkYXknfVxuICAgICAgICAgICAgICAgICAgaGVhZGluZz17J0Jyb3dzZSBQYWNrYWdlcywgQ2hvb3NlIFlvdXIgTmV4dCBEZXN0aW5hdGlvbid9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iOCBvdmVyZmxvd2ggcGwxNSBwcjE1ICc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8VHJhdmVsZXJTdG9yaWVzLmNvbnRhaW5lclxuICAgICAgICAgICAgICBzcGFjaW5nQ3NzPXt7IG1hcmdpbkJvdHRvbTogJzQ4cHgnIH19XG4gICAgICAgICAgICAgIGNvbmZpZz17eyBjc3I6IHRydWUgfX1cbiAgICAgICAgICAgICAgdmlld0FsbD0nL2Jsb2cvdHJhdmVsb2d1ZXM/cmVmZXJlcj10cmF2ZWxvZ3VlX3Rlc3RpbW9uaWFsJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDggcHQwXCI+XG4gICAgICAgICAgPEJyZWFkY3J1bWIgYnJlYWRjcnVtYnM9e2JyZWFkY3J1bWJzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UZXN0aW1vbmlhbHMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVybDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZENhcmRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcGFja2FnZXM6IFByb3BUeXBlcy5hcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xuIiwiZXhwb3J0IGNvbnN0IGNvdW50cnkgPXtcbiAgSU5ESUE6J2luZGlhJ1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJldmlld2VyX190ZXN0aW1vbmlhbFwiOiBcIl8zcjlfOVwiLFxuXHRcInJldmlldy1jYXJkLWNvbnRhaW5lclwiOiBcIl8xcG5RSFwiLFxuXHRcInVzZXItdGVzdGltb25pYWwtY2FyZFwiOiBcIl8ybDlud1wiLFxuXHRcInRlc3RpbW9uaWFsLWNvbW1lbnRcIjogXCJfZ2c0akxcIixcblx0XCJhY3RpdmVGaWx0ZXJcIjogXCJfMXI4TnhcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9